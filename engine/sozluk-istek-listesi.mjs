// NotebookLM / uzman için "anlam bekleyen kelimeler" listesi üretir.
//
// Neden böyle: sıfırdan sözlük istemek güvenilmez çıktı verdi — gelen 100
// kelimelik listede runik yazımların tamamı, atıfların %85'i uydurmaydı.
// Oysa runik yazım ve atıf bizde ZATEN doğrulanmış durumda (korpus, makine
// denetimli). Bu yüzden dışarıdan yalnızca EKSİK olan sorulur: anlam,
// kategori ve kaynak. Model uyduramasın diye runik ve atıf hazır verilir.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Windows'ta URL.pathname "/E:/..." dondurur; path.join ile birlesince
// "E:\\E:\\..." olur ve betik ENOENT ile oler. fileURLToPath her
// platformda dogru yerel yolu verir.
const KOK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => path.join(KOK, p);

const kelimeler = JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8"));
const korpus = JSON.parse(fs.readFileSync(P("src/data/generated/korpus.json"), "utf8"));
const dizeler = new Map(korpus.map((d) => [d.id, d]));

// Uygulamada anlamı zaten olan kelimeler atlanır.
const mevcut = new Set();
const sozlukTs = fs.readFileSync(P("src/data/sozlukData.ts"), "utf8");
for (const m of sozlukTs.matchAll(/transcription:\s*'([^']+)'/g)) {
  mevcut.add(m[1].toLowerCase().replace(/ŋ/g, "ng"));
}

const esik = Number(process.argv[2] || 3);
const normal = (s) => s.toLowerCase().replace(/ŋ/g, "ng").replace(/ñ/g, "ny");

// ── Ata sözlüğü: ÖN DOLGU ───────────────────────────────────────────────────
// Aysu Ata, Orhun Türkçesi (AÖF 2011) kitabının sözcük çözümlemelerinden
// çıkarılan anlamlar (engine/ata-tara.mjs). Buradan gelen anlam DOĞRULANMIŞ
// SAYILMAZ: katmanı "kitap", sayfa atıflı bir yayın alıntısıdır. Denetim
// ekranında insanın önüne ön dolgu olarak gelir, onaylanınca geçerli olur.
//
// Eşleşme iki türlü:
//   tam  — korpus biçimi sözlük maddesiyle birebir (bodun = bodun)
//   kök  — korpus biçimi maddeyle başlıyor, kalanı bilinen bir ek
//          (bodunıg = bodun + ıg).  Ekler yine Ata'dan, uydurma değil.
// Tekin'in gösterimi uzunluk ve ön/art için ayrı işaretler kullanıyor:
// ä (ön e), ā ē ī ō ū (uzun), ń ñ (ny). Bunları SİLMEK sözcükleri
// birbirine karıştırıyordu: "äbir-" → "bir" olup "bir" maddesiyle
// çakışıyor, "bir" belirsiz sayılıp ön dolgu düşüyordu.
// Doğrusu silmek değil KATLAMAK.
const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "n", "ñ": "n", "ŋ": "n", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g",
}));
const sadelestir = (x) =>
  [...x.toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .join("")
    .replace(/[^a-zçğıöşü]/g, "");

let ataSozluk = [];
let ataEkler = [];
let tekinSozluk = [];
try {
  ataSozluk = JSON.parse(fs.readFileSync(P("docs/ata-sozluk.json"), "utf8")).kelimeler ?? [];
  ataEkler = JSON.parse(fs.readFileSync(P("docs/ata-ekler.json"), "utf8")).ekler ?? [];
} catch { /* tarama yapılmamışsa ön dolgu olmaz */ }
try {
  tekinSozluk = JSON.parse(fs.readFileSync(P("docs/tekin-sozluk.json"), "utf8")).kelimeler ?? [];
} catch { /* Tekin sözlüğü taranmamışsa yalnız Ata kullanılır */ }

// Sözlük sentezi: Tekin 2003 + Tekin 1998 + Ata 2011 + Tanyeri birleşimi.
// Çıkarıcı proje/kurs kaynaklı anlamları zaten ayıklıyor (dairesel olurdu).
let sentez = [];
try {
  sentez = JSON.parse(fs.readFileSync(P("docs/sozluk-sentez.json"), "utf8")).kelimeler ?? [];
} catch { /* sentez taranmamışsa tek tek kaynaklar kullanılır */ }

// KAYNAK SIRASI. Hepsi katman "kitap"; hiçbiri denetimsiz kullanılmaz.
// Proje kendi üretimini (çekirdek sözlük, content/sozluk.json) kaynak
// GÖSTERMEZ — dairesel olur. Sentez çıkarıcısı bunları zaten eliyor.
//
// Sentez, Tekin 2003 ve Ata 2011'i ZATEN İÇERİR. Üçünü birden yüklemek
// aynı sözcüğü iki ayrı kayıt yapıyor; anlam metinleri birebir aynı
// olmadığı için anahtar "belirsiz" sayılıp ön dolgu düşüyordu
// (241 → 122). Sentez varsa tek kaynak odur.
const SOZLUK_KAYNAKLARI = sentez.length ? sentez.map((k) => ({
    kelime: k.kelime,
    anlam: k.anlamlar[0].anlam,
    kaynak: k.anlamlar[0].kaynak,
    eser: k.anlamlar[0].kaynak.split(",")[0].trim(),
    ...(k.anlamlar.length > 1
      ? { digerKaynaklar: k.anlamlar.slice(1).map((a) => `${a.anlam} [${a.kaynak}]`) }
      : {}),
})) : [
  ...tekinSozluk.map((k) => ({ ...k, eser: "Tekin 2003" })),
  ...ataSozluk.map((k) => ({ ...k, eser: "Ata 2011" })),
];

// Ata'nın kendi gösterimi iki ayrımı taşıyor; ikisini de kullanıyoruz:
//   kelime sonundaki "-"   → FİİL maddesi   (bir- "vermek")
//   ek başındaki "+" / "-" → isim eki / fiil eki
// Böylece "bir + miş" kurulamaz: -miş fiil ekidir, isim köküne eklenmez.
//
// Üçüncü ayrım: ÇEKİM eki mi YAPIM eki mi. Yapım eki (ve kalıplaşmış
// zarf-fiil) yeni bir sözcük kurar, kökün anlamı taşınmaz:
//   tap- "bulmak" + -a  →  tapa "-e doğru"      (kökün anlamı değil)
//   bir(i) "güney" + le →  birle "ile"          (kökün anlamı değil)
// Bu yüzden ön dolgu yalnız ÇEKİM ekiyle kurulur.
const yapimMi = (islev) => /yapım eki|zarf-fiil|sıfat-fiil|kalıplaş/i.test(islev);
const cekimEkleri = ataEkler.filter((e) => !yapimMi(e.islev));
const ISIM_EKI = new Set(cekimEkleri.filter((e) => e.ek.startsWith("+")).map((e) => sadelestir(e.ek)));
const FIIL_EKI = new Set(cekimEkleri.filter((e) => e.ek.startsWith("-")).map((e) => sadelestir(e.ek)));

/** Bir maddenin arama anahtarları. bir(i) hem "bir" hem "biri" olabilir. */
function anahtarlar(kelime) {
  // "yōk, yok" gibi varyantlı başsözcükler ayrı ayrı aranabilmeli.
  const cikti = [];
  for (const parca of String(kelime).split(/\s*,\s*/)) {
    const govde = parca.trim().replace(/-$/, "");
    if (!govde) continue;
    cikti.push(sadelestir(govde.replace(/\([^)]*\)/g, "")));
    cikti.push(sadelestir(govde));
  }
  return [...new Set(cikti)].filter(Boolean);
}

// anahtar → maddeler. Birden çok FARKLI anlam varsa ön dolgu yapılmaz:
// bir (sayı) / bir- (vermek) / bir(i) (güney) ayırt edilemez, tahmin etmeyiz.
const ataHarita = new Map();
for (const k of SOZLUK_KAYNAKLARI) {
  const fiilMi = k.kelime.trim().endsWith("-");
  for (const a of anahtarlar(k.kelime)) {
    if (!ataHarita.has(a)) ataHarita.set(a, []);
    ataHarita.get(a).push({ ...k, fiilMi, anahtar: a });
  }
}
// İki kaynak aynı sözcüğü farklı kelimelerle açıklayabilir; bu belirsizlik
// değildir. Belirsizlik, AYNI eserde aynı anahtara birden çok farklı madde
// düşmesidir (bir / bir- / bir(i) gibi).
// Birden çok kitap aynı sözcüğü verince en yetkili olan seçilir.
// Örnek: "yok" maddesi Tekin 1998'de "olmak, azalmak" (kaynakta hatalı
// görünüyor), Tekin 2003'te "yok". Sıralama olmadan ilk gelen kazanıyordu.
const ESER_SIRASI = ["Tekin 2003", "Tekin 1998", "Ata 2011", "Tanyeri"];
const eserAgirligi = (e) => {
  const i = ESER_SIRASI.findIndex((x) => String(e ?? "").startsWith(x));
  return i < 0 ? ESER_SIRASI.length : i;
};
const enYetkili = (liste) =>
  [...liste].sort((a, b) => eserAgirligi(a.eser) - eserAgirligi(b.eser))[0];

const tekAnlam = (liste) => {
  const esereGore = new Map();
  for (const x of liste) {
    if (!esereGore.has(x.eser)) esereGore.set(x.eser, new Set());
    esereGore.get(x.eser).add(x.anlam);
  }
  return [...esereGore.values()].every((s) => s.size === 1);
};

const ataKokler = [...ataHarita.keys()].sort((a, b) => b.length - a.length);

function ataEslesmesi(transkripsiyon) {
  const w = sadelestir(transkripsiyon);
  if (!w) return null;

  const tam = ataHarita.get(w);
  if (tam) {
    if (!tekAnlam(tam)) return null;                 // belirsiz → ön dolgu yok
    return { ...enYetkili(tam), eslesme: "tam" };
  }

  for (const kok of ataKokler) {
    if (kok.length < 3 || !w.startsWith(kok) || w === kok) continue;
    const kalan = w.slice(kok.length);
    if (!kalan || kalan.length > 6) continue;
    const adaylar = ataHarita.get(kok);
    // Ek, maddenin türüne uymalı: fiil kökü → fiil eki, isim kökü → isim eki.
    const uyan = adaylar.filter((a) =>
      a.fiilMi ? FIIL_EKI.has(kalan) : ISIM_EKI.has(kalan)
    );
    if (!uyan.length) continue;
    if (!tekAnlam(uyan)) continue;                   // belirsiz → atla
    return { ...enYetkili(uyan), eslesme: "kök", kok, ek: kalan };
  }
  return null;
}

const istek = kelimeler
  .filter((k) => k.guvenilir && k.siklik >= esik && !mevcut.has(normal(k.transkripsiyon)))
  .map((k) => {
    const d = dizeler.get(k.gectigiDizeler[0]);
    return {
      runic: k.runik,                       // DOĞRULANMIŞ — değiştirme
      transcription: k.transkripsiyon,      // DOĞRULANMIŞ — değiştirme
      attestation: k.gectigiDizeler[0],     // DOĞRULANMIŞ — değiştirme
      attestation_text: d ? d.transkripsiyon.slice(0, 120) : null,
      frequency: k.siklik,
      meaning: null,                        // ← DOLDURULACAK
      category: null,                       // ← DOLDURULACAK
      source: null,                         // ← DOLDURULACAK (eser, sayfa)
      // Ön dolgu: doldurulmuş değil, ÖNERİ. Denetim ekranı forma koyar.
      ...(() => {
        const a = ataEslesmesi(k.transkripsiyon);
        if (!a) return {};
        return {
          oneri: {
            meaning: a.eslesme === "kök" ? `${a.anlam}  (${a.kok} + ${a.ek})` : a.anlam,
            ...(a.digerKaynaklar?.length ? { digerKaynaklar: a.digerKaynaklar } : {}),
            source: a.kaynak,
            eser: a.eser,
            eslesme: a.eslesme,
            katman: "kitap"
          }
        };
      })()
    };
  });

const cikti = P("docs/sozluk-anlam-bekleyenler.json");
fs.writeFileSync(cikti, JSON.stringify(istek, null, 2) + "\n", "utf8");
const onerili = istek.filter((x) => x.oneri);
const tamSayi = onerili.filter((x) => x.oneri.eslesme === "tam").length;
console.log(`sıklık >= ${esik} | ${istek.length} kelime → docs/sozluk-anlam-bekleyenler.json`);
const esereGore = {};
for (const x of onerili) esereGore[x.oneri.eser] = (esereGore[x.oneri.eser] ?? 0) + 1;
console.log(
  `ön dolgu       : ${onerili.length} / ${istek.length} kelimede ` +
    `(${tamSayi} tam, ${onerili.length - tamSayi} kök+ek)  — katman "kitap"`
);
console.log(`  kaynağa göre : ${Object.entries(esereGore).map(([e, n]) => `${e} ${n}`).join(" · ")}`);
