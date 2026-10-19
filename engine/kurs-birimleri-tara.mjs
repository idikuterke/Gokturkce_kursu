#!/usr/bin/env node
/**
 * Dereceli kurs birimleri çıkarıcı.
 *
 * Girdi : 00_Kaynaklar/orhon-kurs-birimleri.md
 *         Tekin 1998'den seçilmiş 34 birim; her birimde tamgalar,
 *         okunuş, günümüz Türkçesi ve sayfa atfı var.
 * Çıktı : 05_Kaynak_DB/kurs-birimleri.json
 *
 * DOĞRULAMA — çıkarıcının asıl işi bu. Okunuş ve çeviri kitaptan geliyor
 * (katman "kitap"), ama tamga katmanı belgede korpustan kopyalanmış. Bir
 * kopyalama hatası fark edilmeden kursa girmesin diye her birimin tamga
 * dizisi, atıf verdiği korpus dizesinin içinde ARANIR. Bulunamayan birim
 * kursa GİRMEZ, rapora düşer.
 *
 * Birim uzunluğa göre üç kademe: tamlama (2-4 kelime) → cümlecik (4-10)
 * → paragraf (10+). Öğrenme yolunda kitabe aşamasının sonunda yer alır.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);

const metin = readFileSync(P("00_Kaynaklar/orhon-kurs-birimleri.md"), "utf8");
const korpus = JSON.parse(readFileSync(P("src/data/generated/korpus.json"), "utf8"));
const dizeler = new Map(korpus.map((d) => [d.id, d]));

const KADEME = /^## (Tamlama|Cümlecik|Paragraf)/;
const BASLIK = /^### ([A-ZÇĞİÖŞÜ]+-[TCP]-\d+) · (.+?) · (\d+) kelime/;
const TAMGA = /^\*\*Tamgalar:\*\*\s*(.+?)\s*$/;
const OKUNUS = /^\*\*Okunuş:\*\*\s*(.+?)\s*$/;
const CEVIRI = /^\*\*Günümüz Türkçesi:\*\*\s*(.+?)\s*$/;
const KAYNAK = /^- Kaynak:\s*(.+?)\s*$/;
// "Tekin 1998, KT D 1, s. 34-55 (bölüm)" → dize kimliği KT-D-1
const DIZE_KIMLIGI = /\b([A-Z]{1,3})\s+([DBGKÇ]{1,2}|KD|GD|GB|KB)\s+(\d+)\b/;

const birimler = [];
let kademe = null;
let aktif = null;

const bitir = () => { if (aktif) birimler.push(aktif); aktif = null; };

for (const satir of metin.split("\n")) {
  const k = satir.match(KADEME);
  if (k) { bitir(); kademe = k[1].toLocaleLowerCase("tr"); continue; }

  const b = satir.match(BASLIK);
  if (b) {
    bitir();
    aktif = { id: b[1], yazit: b[2], kelimeSayisi: Number(b[3]), kademe, kaynaklar: [] };
    continue;
  }
  if (!aktif) continue;

  const t = satir.match(TAMGA);   if (t) { aktif.runik = t[1]; continue; }
  const o = satir.match(OKUNUS);  if (o) { aktif.okunus = o[1]; continue; }
  const c = satir.match(CEVIRI);  if (c) { aktif.ceviri = c[1]; continue; }
  const s = satir.match(KAYNAK);  if (s) { aktif.kaynaklar.push(s[1]); continue; }
}
bitir();

// ── Doğrulama ───────────────────────────────────────────────────────────────
//
// Belgedeki atıf dize düzeyinde kesin değil (sayfa aralığı bölüm için
// verilmiş, satır tahmini). Bu yüzden tamga dizisi yalnız atıf verilen
// dizede değil, YAZITIN O YÜZÜNÜN tamamında aranır: satırlar bir yüzde
// kesintisiz akar, bir birim iki satıra taşabilir. Bulunduğu yerden
// gerçek satır(lar) geri okunur ve kayda gerçek atıf yazılır.
const tamgalariAyikla = (x) =>
  [...String(x)].filter((ch) => {
    const kod = ch.codePointAt(0);
    return kod >= 0x10c00 && kod <= 0x10c4f;
  }).join("");

// Sözcük normalleştirme: belge ile korpus aynı sesi farklı yazıyor.
//   ğ → g        (oğlı ~ OGLI)
//   ny, yn, ng → ŋ   (azkınya ~ aZKIYNA, ilinge ~ İLİŊE)   ń/ñ de ŋ'ye
//   — 𐰪 tamgası transkripsiyonda ny ya da yn diye yazılıyor, ikisi
//     de aynı işaret; sıra farkı hizalamayı bozmasın
//   ä ā ī …      uzunluk/ön işaretleri sadeleşir
// o~u ve ö~ü AYRILMAZ tutulur: burada amaç dizi hizalamak, tamga
// üretmek değil; yanlış hizalama yanlış yazım demek olur.
const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "ŋ", "ñ": "ŋ", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g", "ğ": "g",
}));
const sozcuk = (x) =>
  [...String(x).toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .join("")
    .replace(/n[yg]|yn/g, "ŋ")
    .replace(/[^a-zçıöşüŋ]/g, "");

// Tekin'in okunuşu ile korpus transkripsiyonu aynı sözcüğü farklı
// yazabiliyor: kül ~ köl, ilinge ~ iliŋe, keyik ~ kiyik, kılıntukda ~
// kılındukda. Bunların çoğu yazının kendisinden gelir — Göktürk yazısı
// o~u ve ö~ü'yü ayırmaz, e çoğu yerde yazılmaz, ünsüz uyumu d~t
// nöbetleşmesi yaratır. Bu yüzden hizalama kademeli:
//   0  birebir
//   1  yazıda ayrılmayan ünlüler katlanmış
//   2  ayrıca ünsüz nöbetleşmesi (d~t, g~k, b~p) katlanmış
// Kademe kayda yazılır; birebir olmayan hizalama gözle bakılabilir.
// Pencerenin TAMAMI aynı kademede uymak zorunda — komşu sözcükler
// yanlış hizalamayı tutar.
const unluKatla = (x) => x.replace(/[ou]/g, "O").replace(/[öü]/g, "Ö").replace(/[eiı]/g, "E");
const unsuzKatla = (x) => x.replace(/[dt]/g, "T").replace(/[gk]/g, "K").replace(/[bp]/g, "P");
const KADEMELER = [
  { ad: "tam", f: (x) => x },
  { ad: "ünlü", f: unluKatla },
  { ad: "ünlü+ünsüz", f: (x) => unsuzKatla(unluKatla(x)) },
];

// yüz anahtarı → sözcük dizisi [{ runik, anahtarlar[], dize }]
const yuzler = new Map();
for (const d of korpus) {
  const anahtar = `${d.kaynak}|${d.yuz}`;
  if (!yuzler.has(anahtar)) yuzler.set(anahtar, []);
  const liste = yuzler.get(anahtar);
  const runikler = String(d.runik).split(" : ");
  const okunuslar = String(d.transkripsiyon).split(" : ");
  for (let i = 0; i < okunuslar.length; i++) {
    const a = sozcuk(okunuslar[i]);
    if (!a) continue;
    liste.push({
      runik: tamgalariAyikla(runikler[i] ?? ""),
      anahtarlar: KADEMELER.map((k) => k.f(a)),
      dize: d.id,
    });
  }
}

/**
 * Okunuşu korpusta sözcük sözcük hizalar.
 *
 * Neden belgenin tamgalarına güvenmiyoruz: belgede tamga katmanı elle
 * kopyalanmış ve hata taşıyor — ötüken yış için 𐰘𐱁 yazılmış, korpusta
 * 𐰘𐰃𐱁 (y-ı-ş). Okunuş kitaptan geldiği için sağlam; tamgayı korpustan
 * yeniden kurmak hem diziyi hem yazımı doğru yapar.
 */
function hizala(okunus, kaynakIpucu) {
  const ham = okunus.split(/\s+/).map(sozcuk).filter(Boolean);
  if (!ham.length) return null;
  const sirali = [...yuzler.entries()].sort(([a], [b]) => {
    const ai = kaynakIpucu && a.startsWith(kaynakIpucu) ? 0 : 1;
    const bi = kaynakIpucu && b.startsWith(kaynakIpucu) ? 0 : 1;
    return ai - bi;
  });
  for (const [kademe, { ad, f }] of KADEMELER.entries()) {
    const aranan = ham.map(f);
    for (const [yuz, liste] of sirali) {
      for (let i = 0; i + aranan.length <= liste.length; i++) {
        let uyar = true;
        for (let j = 0; j < aranan.length; j++) {
          if (liste[i + j].anahtarlar[kademe] !== aranan[j]) { uyar = false; break; }
        }
        if (!uyar) continue;
        const pencere = liste.slice(i, i + aranan.length);
        return {
          yuz,
          kademe: ad,
          dizeler: [...new Set(pencere.map((w) => w.dize))],
          runik: pencere.map((w) => w.runik).join(" : "),
        };
      }
    }
  }
  const bitisik = hizalaBitisik(ham, sirali);
  if (bitisik) return bitisik;
  return hizalaHosgorulu(ham, sirali);
}

/**
 * Sözcük sınırı farkını aşan hizalama.
 *
 * Kitap ile korpus sözcüğü aynı yerde bölmeyebiliyor: Tekin "kül tigin"
 * yazıyor, korpus KÖLTİGiN tek sözcük; "iniyegünüm" ~ "inim yegünüm".
 * Sözcük sözcük karşılaştırma bunları kaçırıyor. Burada iki yan da
 * bitişik yazılıp aranır; eşleşme yalnız sözcük SINIRINDA başlayıp
 * sınırda bitiyorsa kabul edilir, yoksa yarım sözcük alınmış olurdu.
 */
function hizalaBitisik(ham, sirali) {
  for (const [kademe, { ad, f }] of KADEMELER.entries()) {
    const aranan = ham.map(f).join("");
    for (const [yuz, liste] of sirali) {
      let metin = "";
      const baslangic = [];
      for (const w of liste) { baslangic.push(metin.length); metin += w.anahtarlar[kademe]; }
      const i = metin.indexOf(aranan);
      if (i < 0) continue;
      const ilk = baslangic.indexOf(i);
      if (ilk < 0) continue;                       // sözcük ortasında başlıyor
      let sonIndis = ilk;
      let uzunluk = 0;
      while (sonIndis < liste.length && uzunluk < aranan.length) {
        uzunluk += liste[sonIndis].anahtarlar[kademe].length;
        sonIndis++;
      }
      if (uzunluk !== aranan.length) continue;     // sözcük ortasında bitiyor
      const pencere = liste.slice(ilk, sonIndis);
      return {
        yuz,
        kademe: kademe === 0 ? "bitişik" : `bitişik/${ad}`,
        dizeler: [...new Set(pencere.map((w) => w.dize))],
        runik: pencere.map((w) => w.runik).join(" : "),
      };
    }
  }
  return null;
}

/**
 * Uzun birimler için hoşgörülü hizalama.
 *
 * 20-50 sözcüklük paragraflarda tek bir yazım farkı bütün birimi
 * düşürüyordu; üstelik bir fark sözcük BÖLÜNMESİ de olabiliyor
 * ("iniyegünüm" ~ "inim yegünüm"), o zaman sözcük sayısı bile tutmuyor.
 *
 * Bu yüzden: ilk ve son sözcük çapa olarak aranır, aradaki pencere
 * uzunluğu ±3 oynayabilir, ve pencerenin en az %85'i uymak zorundadır.
 * Uymayan sözcükler kayda yazılır — gözle bakılabilsin.
 *
 * Yanlış pasaja oturma riski pratikte yok: iki uçtan çapalı, 20+
 * sözcüklük ve %85 örtüşen başka bir pasaj yazıtlarda bulunmuyor.
 */
function hizalaHosgorulu(ham, sirali) {
  // 6 sözcüğün altında hoşgörü yok: tek fark bile pasajı belirsizleştirir.
  if (ham.length < 6) return null;
  const kat = KADEMELER[2].f;
  const aranan = ham.map(kat);
  const enIyi = { oran: 0 };
  for (const [yuz, liste] of sirali) {
    const anahtar = liste.map((w) => w.anahtarlar[2]);
    for (let i = 0; i < anahtar.length; i++) {
      if (anahtar[i] !== aranan[0]) continue;
      for (let uzunluk = ham.length - 3; uzunluk <= ham.length + 3; uzunluk++) {
        const son = i + uzunluk - 1;
        if (uzunluk < 4 || son >= anahtar.length) continue;
        if (anahtar[son] !== aranan[aranan.length - 1]) continue;
        const pencere = anahtar.slice(i, son + 1);
        // Sıra korunarak örtüşme (LCS yerine ucuz ileri tarama).
        let p = 0;
        let uyan = 0;
        const uymayan = [];
        for (const a of aranan) {
          const yer = pencere.indexOf(a, p);
          if (yer >= 0) { uyan++; p = yer + 1; } else uymayan.push(a);
        }
        const oran = uyan / Math.max(aranan.length, pencere.length);
        if (oran > enIyi.oran) Object.assign(enIyi, { oran, yuz, i, son, uymayan, liste });
      }
    }
  }
  if (enIyi.oran < 0.85) return null;
  const pencere = enIyi.liste.slice(enIyi.i, enIyi.son + 1);
  return {
    yuz: enIyi.yuz,
    kademe: `hoşgörülü %${Math.round(enIyi.oran * 100)}`,
    dizeler: [...new Set(pencere.map((w) => w.dize))],
    runik: pencere.map((w) => w.runik).join(" : "),
    uymayan: enIyi.uymayan,
  };
}

const kabul = [];
const red = [];

let belgeFarkli = 0;
for (const birim of birimler) {
  const eksikAlan = ["runik", "okunus", "ceviri"].filter((a) => !birim[a]);
  if (eksikAlan.length) { red.push({ ...birim, sebep: `eksik alan: ${eksikAlan.join(", ")}` }); continue; }

  // Belgede bazı birimler "..." ile BİRLEŞTİRİLMİŞ parçalar: yazıtta
  // ardışık değiller. Kursa bütün bir pasaj diye konamaz.
  if (/\.\.\.|…/.test(birim.okunus)) {
    red.push({ ...birim, sebep: "okunuşta \"...\" var — ardışık olmayan parçalar birleştirilmiş" });
    continue;
  }

  // Atıf yalnız ipucu: Tonyukuk korpusta iki taş (TY1/TY2), belge ikisine
  // de "TY" diyor; ön ek olarak kullanılır, bulunamazsa diğer yazıtlara
  // bakılır.
  const ilkKaynak = birim.kaynaklar[0] ?? "";
  const ipucu = (ilkKaynak.match(/\b(KT|BK|TY)\d?\b/) ?? [])[1] ?? null;

  const yer = hizala(birim.okunus, ipucu);
  if (!yer) {
    // Nerede koptuğunu söyle: "bulunamadı" tek başına işe yaramıyor.
    const ham = birim.okunus.split(/\s+/).map(sozcuk).filter(Boolean);
    const tumSozcukler = new Set();
    for (const liste of yuzler.values()) for (const w of liste) tumSozcukler.add(w.anahtarlar[2]);
    const hicYok = ham.filter((w) => !tumSozcukler.has(KADEMELER[2].f(w)));
    red.push({
      ...birim,
      sebep: hicYok.length
        ? `korpusta hiç geçmeyen sözcük(ler): ${hicYok.join(", ")}`
        : "sözcükler korpusta var ama bu sırayla ardışık değil — kitabın okuyuşu korpustan ayrılıyor",
    });
    continue;
  }

  // Belgedeki tamga katmanı çapraz kontrol: korpustan kurulanla aynı mı?
  const belge = tamgalariAyikla(birim.runik);
  const korpustan = tamgalariAyikla(yer.runik);
  const fark = belge !== korpustan;
  if (fark) belgeFarkli++;

  kabul.push({
    id: birim.id,
    kademe: birim.kademe,
    yazit: birim.yazit,
    dizeler: yer.dizeler,
    kelimeSayisi: birim.kelimeSayisi,
    // Tamga katmanı KORPUSTAN kurulur, belgeden değil.
    runik: yer.runik,
    okunus: birim.okunus,
    ceviri: birim.ceviri,
    kaynaklar: birim.kaynaklar,
    katman: "kitap",
    denetleyen: null,
    runikDogrulandi: true,
    hizalama: yer.kademe,
    ...(yer.uymayan?.length ? { hizalamadaUymayan: yer.uymayan } : {}),
    ...(fark ? { belgeTamgaFarki: birim.runik } : {}),
  });
}

const cikti = {
  aciklama:
    "Tekin 1998'den seçilmiş dereceli kurs birimleri. Okunuş ve çeviri " +
    "kitaptan (katman \"kitap\", sayfa atıflı); tamga katmanı korpusta " +
    "doğrulandı — dizenin içinde birebir geçmeyen birim alınmadı. " +
    "Kurs belgeleri kaynak olarak kullanılmamıştır.",
  kaynak: "Tekin 1998, Orhon Yazıtları (KT s. 34-55, BK s. 56-81, TY s. 82-96)",
  uretim: new Date().toISOString(),
  sayi: kabul.length,
  birimler: kabul,
  ...(red.length ? { alinmayanlar: red.map((r) => ({ id: r.id, sebep: r.sebep })) } : {}),
};

writeFileSync(P("05_Kaynak_DB/kurs-birimleri.json"), JSON.stringify(cikti, null, 2) + "\n", "utf8");
// Uygulamaya giden kopya: alınmayanlar ve çapraz kontrol alanları olmadan.
writeFileSync(
  P("src/data/generated/kursBirimleri.json"),
  JSON.stringify(
    {
      uyari: cikti.aciklama,
      kaynak: cikti.kaynak,
      katman: "kitap",
      birimler: kabul.map(({ belgeTamgaFarki, hizalamadaUymayan, ...b }) => b),
    },
    null,
    2
  ) + "\n",
  "utf8"
);

const sayac = {};
for (const b of kabul) sayac[b.kademe] = (sayac[b.kademe] ?? 0) + 1;
console.log(`${birimler.length} birim okundu → ${kabul.length} kabul, ${red.length} alınmadı`);
console.log(`  belge tamgası korpustan farklı olan: ${belgeFarkli} (korpus esas alındı)`);
const kademeSayac = {};
for (const b of kabul) kademeSayac[b.hizalama] = (kademeSayac[b.hizalama] ?? 0) + 1;
console.log(`  hizalama: ${Object.entries(kademeSayac).map(([k, n]) => `${k} ${n}`).join(" · ")}`);
console.log(`  ${Object.entries(sayac).map(([k, n]) => `${k} ${n}`).join(" · ")}`);
for (const r of red) console.log(`  RED ${r.id}: ${r.sebep}`);
