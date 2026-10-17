// İçerik hattı: kaynak veriyi (05_Kaynak_DB, content/) uygulamanın okuduğu
// biçime çevirir. Elle kopyalama yok — kaynak değişince yeniden üretilir.
//
// Çıktı: src/data/generated/*.ts  (git'te izlenir ki uygulama derlemesi
// bu betiğe bağımlı olmasın; tazeliği `npm run icerik:kontrol` denetler.)
//
// Tasarım kararı — DOĞRULAMAYA GÖRE KAPI:
//   Alıştırmalar yalnızca denetimden geçmiş veriden üretilir.
//   * runik ↔ transkripsiyon makine denetimli (orhun-tara.mjs) → bu veriye
//     dayanan alıştırmalar üretilir.
//   * Türkçe çeviri henüz insan denetiminden geçmedi → çeviri alıştırmaları
//     ÜRETİLMEZ. dogrulama.ceviri "gecti" olan dizeler çıktıkça kendiliğinden
//     devreye girerler.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Windows'ta URL.pathname "/E:/..." dondurur; path.join ile birlesince
// "E:\\E:\\..." olur ve betik ENOENT ile oler. fileURLToPath her
// platformda dogru yerel yolu verir.
const KOK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => path.join(KOK, p);
const CIKTI = P("src/data/generated");

const oku = (p) => JSON.parse(fs.readFileSync(P(p), "utf8"));
const YIPRANMA = "---";

// ── Kaynaklar ───────────────────────────────────────────────────────────────
const orhun = oku("05_Kaynak_DB/orhun-db-v1.json");
// Gerekçeli istisnalar: runik ↔ transkripsiyon sapması olan KELİMELER.
// Güvenilirlik bu listeye göre belirlenir — dizeye göre değil (bkz. aşağıda).
const istisnaKelimeleri = new Set(
  (oku("05_Kaynak_DB/orhun-db-istisna.json").istisnalar || []).map(
    (x) => `${x.id}\u0000${x.sira}`
  )
);
const tamgaSiniflari = oku("05_Kaynak_DB/tamga-siniflari-v1-kilitli.json");

// Görsel olarak karışan tamgalar: tamga → karıştığı tamgalar.
// Kaynak: gokturk-verify `consensus_38_v1` (confusable_with).
// Çoğu kalın/ince çifti (𐰉/𐰋, 𐰍/𐰏, 𐰆/𐰇) — Göktürk imlasının çekirdek güçlüğü.
const karisanlar = (() => {
  const idToGlyph = new Map();
  for (const c of tamgaSiniflari.classes) {
    const g = c.glyph_ref?.core_orhun;
    if (g) idToGlyph.set(c.id, g);
  }
  const harita = new Map();
  for (const c of tamgaSiniflari.classes) {
    const g = c.glyph_ref?.core_orhun;
    if (!g) continue;
    const esler = (c.confusable_with || []).map((id) => idToGlyph.get(id)).filter(Boolean);
    if (esler.length) harita.set(g, esler);
  }
  return harita;
})();

// ── Dizeler ─────────────────────────────────────────────────────────────────
const parcala = (s) => s.split(":").map((w) => w.trim()).filter(Boolean);

const dizeler = orhun.dizeler.map((d) => ({
  id: d.id,
  kaynak: d.kaynak,
  kaynakAd: d.kaynak_ad,
  yuz: d.yuz,
  satir: d.satir,
  runik: d.gokturkce,
  transkripsiyon: d.transkripsiyon,
  turkce: d.turkce,
  kelimeSayisi: d.kelime_sayisi,
  yipranma: d.yipranma,
  dogrulama: d.dogrulama,
}));

// ── Kelime envanteri ────────────────────────────────────────────────────────
// Korpustaki her kelime biçimi, kaç kez ve hangi dizelerde geçtiğiyle.
// Sözlüğün 52 kelimelik elle listesinin yanında asıl hazine burası.
const kelimeHarita = new Map();

for (const d of orhun.dizeler) {
  const runikler = parcala(d.gokturkce);
  const transler = parcala(d.transkripsiyon);
  const dusen = d.dusen_unlu || [];
  // Yıpranmış dizede hizalama kayabilir; yalnızca eşit uzunlukta güvenilir.
  if (runikler.length !== transler.length) continue;

  runikler.forEach((runik, i) => {
    const trans = transler[i];
    if (runik.includes(YIPRANMA) || trans.includes(YIPRANMA)) return;

    const anahtar = `${runik}\u0000${trans}`;
    let kayit = kelimeHarita.get(anahtar);
    if (!kayit) {
      kayit = {
        runik,
        transkripsiyon: trans,
        siklik: 0,
        gectigiDizeler: [],
        dusenUnlu: dusen[i] ?? 0,
        // Güvenilirlik KELİME bazında. Daha önce "geçtiği her dize temiz mi"
        // diye bakılıyordu; uzun dizelerde alakasız tek bir sapma, o dizedeki
        // bütün kelimeleri güvenilmez yapıyordu. Sonuç: bodun (124×), kagan
        // (98×), türk (78×), teŋri (43×) gibi çekirdek kelimeler alıştırma
        // üretiminden tamamen dışlanmıştı.
        guvenilir: true,
      };
      kelimeHarita.set(anahtar, kayit);
    }
    kayit.siklik += 1;
    if (kayit.gectigiDizeler.length < 5) kayit.gectigiDizeler.push(d.id);
    // Yalnızca bu kelimenin kendisi istisna kaydındaysa güvenilmez.
    if (istisnaKelimeleri.has(`${d.id}\u0000${i}`)) kayit.guvenilir = false;
  });
}

// Zorluk: kaç ünlü yazılmamışsa o kadar zor (okurken tamamlanmalı),
// uzunluk ikincil etken. Bantlar 1-5.
const zorluk = (k) => {
  const tamga = [...k.runik].length;
  const puan = k.dusenUnlu * 2 + Math.floor(tamga / 3);
  return Math.max(1, Math.min(5, puan));
};

const kelimeler = [...kelimeHarita.values()]
  .map((k) => ({ ...k, zorluk: zorluk(k) }))
  .sort((a, b) => b.siklik - a.siklik || a.zorluk - b.zorluk);

// ── Alıştırmalar ────────────────────────────────────────────────────────────
// Çeldirici seçimi.
//
// Rastgele ya da yalnızca "aynı zorluk bandından" çeldirici, öğrenciye ayırt
// etmesi gereken şeyi çalıştırmaz: şıklar birbirinden o kadar farklıdır ki
// tamgalara bakmadan elenirler. Bu yüzden önce YAKIN ÇELDİRİCİ aranır:
// hedef kelimedeki bir tamgayı karıştığı tamgayla değiştirince ortaya çıkan
// dizi, korpusta gerçek bir kelime olarak geçiyorsa ideal çeldiricidir —
// tek tamga farkla okunuşu değiştiren, gerçekten var olan bir kelime.
// Yeterli yakın çeldirici yoksa zorluk bandından tamamlanır.
const yakinCeldiriciler = (dogru, runikDizin) => {
  const tamgalar = [...dogru.runik];
  const bulunan = [];
  for (let i = 0; i < tamgalar.length; i++) {
    for (const yerine of karisanlar.get(tamgalar[i]) || []) {
      const varyant = [...tamgalar.slice(0, i), yerine, ...tamgalar.slice(i + 1)].join("");
      const esles = runikDizin.get(varyant);
      if (esles && esles.transkripsiyon !== dogru.transkripsiyon) bulunan.push(esles);
    }
  }
  return bulunan;
};

// Runik diziler arası düzenleme uzaklığı (tamga bazında).
const uzaklik = (a, b) => {
  const x = [...a], y = [...b];
  let onceki = Array.from({ length: y.length + 1 }, (_, i) => i);
  for (let i = 1; i <= x.length; i++) {
    const satir = [i];
    for (let j = 1; j <= y.length; j++) {
      satir[j] = Math.min(
        onceki[j] + 1,
        satir[j - 1] + 1,
        onceki[j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1)
      );
    }
    onceki = satir;
  }
  return onceki[y.length];
};

// Fark karışan tamgalardan mı kaynaklanıyor? Öyleyse çeldirici daha öğretici.
const karisanFarkMi = (a, b) => {
  const x = [...a], y = [...b];
  if (x.length !== y.length) return false;
  let fark = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y[i]) continue;
    fark++;
    if (!(karisanlar.get(x[i]) || []).includes(y[i])) return false;
  }
  return fark > 0;
};

const celdiriciler = (dogru, havuz, runikDizin, adet = 3) => {
  const secilen = [];
  const gorulen = new Set([dogru.transkripsiyon]);

  const ekle = (k) => {
    if (!k || gorulen.has(k.transkripsiyon) || secilen.length >= adet) return;
    gorulen.add(k.transkripsiyon);
    secilen.push(k);
  };

  // 1) Tek tamga değişimiyle ortaya çıkan GERÇEK kelime — en iyi çeldirici.
  yakinCeldiriciler(dogru, runikDizin).forEach(ekle);

  // 2) Runik olarak en yakın gerçek kelimeler. Karışan tamga farkı olanlar
  //    öne alınır; böylece şıklar bakmadan elenemez.
  if (secilen.length < adet) {
    const uzunlukYakin = havuz.filter(
      (k) =>
        !gorulen.has(k.transkripsiyon) &&
        Math.abs([...k.runik].length - [...dogru.runik].length) <= 1
    );
    const puanli = uzunlukYakin
      .map((k) => ({ k, p: uzaklik(dogru.runik, k.runik) - (karisanFarkMi(dogru.runik, k.runik) ? 2 : 0) }))
      .sort((a, b) => a.p - b.p || a.k.transkripsiyon.localeCompare(b.k.transkripsiyon));
    puanli.forEach((x) => ekle(x.k));
  }

  return secilen;
};

const alistirmalar = [];
// Yalnızca güvenilir ve birden fazla geçen kelimeler: tek geçişli biçimler
// dizgi hatası olmaya daha açık.
const uygun = kelimeler.filter((k) => k.guvenilir && k.siklik >= 2 && k.dusenUnlu >= 0);
// Yakın çeldirici araması için runik → kelime dizini (tüm güvenilir kelimeler).
const runikDizin = new Map(kelimeler.filter((k) => k.guvenilir).map((k) => [k.runik, k]));
let yakinKullanan = 0;

for (const k of uygun) {
  const yanlislar = celdiriciler(k, uygun, runikDizin);
  if (yakinCeldiriciler(k, runikDizin).length) yakinKullanan++;
  if (yanlislar.length < 3) continue;

  alistirmalar.push({
    id: `gen-oku-${alistirmalar.length + 1}`,
    tur: "runik_oku",
    zorluk: k.zorluk,
    runik: k.runik,
    dogru: k.transkripsiyon,
    secenekler: [k.transkripsiyon, ...yanlislar.map((y) => y.transkripsiyon)],
    kaynak: k.gectigiDizeler[0],
  });

  alistirmalar.push({
    id: `gen-kur-${alistirmalar.length + 1}`,
    tur: "kelime_kur",
    zorluk: k.zorluk,
    runik: k.runik,
    transkripsiyon: k.transkripsiyon,
    kaynak: k.gectigiDizeler[0],
  });
}

// ── Çeviri alıştırmaları ────────────────────────────────────────────────────
// İki ayrı iş; kaynakları ve kapıları farklı:
//
// 1) KELİME ÇEVİRİSİ — kaynağı sözlük. Sözlükteki anlamların kaynağı
//    ayrıca denetlenmiş durumda ve dize çevirilerine bağlı değil, bu yüzden
//    şimdi üretilebilir.
// 2) DİZE ÇEVİRİSİ — kaynağı kitabe dizesinin Türkçe çevirisi. Bunlar insan
//    denetiminden geçmedi (dogrulama.ceviri), bu yüzden ÜRETİLMEZ. Denetimden
//    geçen dize çıktıkça kendiliğinden devreye girerler.
//
// Ayrıca dizeler uzun (medyan 28 kelime); tek alıştırmaya bütün dize
// sığmadığı için dize çevirisi KISA dizelerle sınırlanır.
const sozlukKayitlari = fs.existsSync(P("05_Kaynak_DB/sozluk-anlamlar.json"))
  ? oku("05_Kaynak_DB/sozluk-anlamlar.json").filter((k) => k.runik && k.anlam && !k.korpustaYok)
  : [];

// Çeldirici anlam: aynı kategoriden olanlar öne alınır — "millet" ile
// "gümüş" arasında seçmek kolaydır, "millet" ile "boy birliği" değil.
const anlamCeldiricileri = (dogru, havuz, adet = 3) => {
  const ayni = havuz.filter((k) => k.kategori === dogru.kategori && k.anlam !== dogru.anlam);
  const diger = havuz.filter((k) => k.kategori !== dogru.kategori && k.anlam !== dogru.anlam);
  const secilen = [];
  const gorulen = new Set([dogru.anlam]);
  for (const liste of [ayni, diger]) {
    for (let i = 0; i < liste.length && secilen.length < adet; i++) {
      // Deterministik seçim.
      const k = liste[(i * 23 + dogru.runik.length * 7) % liste.length];
      if (gorulen.has(k.anlam)) continue;
      gorulen.add(k.anlam);
      secilen.push(k);
    }
  }
  return secilen;
};

// Runik → zorluk (korpustaki en sık biçimden).
const runikZorluk = new Map();
for (const k of kelimeler) {
  if (!runikZorluk.has(k.runik)) runikZorluk.set(k.runik, k.zorluk);
}

let kelimeCevirisi = 0;
for (const k of sozlukKayitlari) {
  const yanlislar = anlamCeldiricileri(k, sozlukKayitlari);
  if (yanlislar.length < 3) continue;
  // Sözlükteki transkripsiyon sözlük biçimi ("bodun"), korpustaki ise
  // yazıldığı biçim ("BODuN"); anahtar eşleşmediği için ARAMA RUNİK
  // ÜZERİNDEN. Önceki sürümde eşleşme hep başarısız oluyor ve bütün çeviri
  // soruları yedek değere (3. bant) düşüyordu.
  const kelimeKaydi = runikZorluk.get(k.runik);
  alistirmalar.push({
    id: `gen-cev-${kelimeCevirisi + 1}`,
    tur: "kelime_ceviri",
    // Anlam bilgisi okumadan bağımsız; zorluk kelimenin okunma zorluğundan gelir.
    zorluk: kelimeKaydi ?? 3,
    runik: k.runik,
    transkripsiyon: k.transkripsiyon,
    dogru: k.anlam,
    secenekler: [k.anlam, ...yanlislar.map((y) => y.anlam)],
    kaynak: (k.bicimler && k.bicimler[0]?.dizeler?.[0]) || "—"
  });
  kelimeCevirisi++;
}

// "gecti" gerçek çeviri, "gunumuz_okumasi" ise kabul edilen ama çeviri
// olmayan karşılık — ikisi de alıştırmaya girer, ikincisi ETİKETLİ girer.
// KAPI: cümleciklerde olduğu gibi burada da insan onayı şart.
// Makine çıkarımı `ceviri: "gecti"` yazar ama `denetleyen: "makine"`
// kalır; o kayıtlar DB'de durur, alıştırmaya girmez.
const ceviriyeHazir = dizeler.filter(
  (d) =>
    (d.dogrulama?.ceviri === "gecti" || d.dogrulama?.ceviri === "gunumuz_okumasi") &&
    d.dogrulama?.denetleyen === "insan"
);
const dizeMakine = dizeler.filter(
  (d) =>
    (d.dogrulama?.ceviri === "gecti" || d.dogrulama?.ceviri === "gunumuz_okumasi") &&
    d.dogrulama?.denetleyen !== "insan"
).length;
// Kısa ve kırıksız dizeler: bütün dize tek alıştırmaya ancak böyle sığar.
// Lacuna denetimi Türkçe alanı da kapsıyor — `yipranma` bayrağı yalnızca
// runik/transkripsiyona bakıyordu ve Türkçesinde `---` olan dize
// (BK-B-7) kapıdan geçiyordu.
const dizeCevirisi = ceviriyeHazir.filter(
  (d) => d.kelimeSayisi <= 12 && !d.yipranma && !/---/.test(d.turkce || "")
);
for (const d of dizeCevirisi) {
  alistirmalar.push({
    id: `gen-dizecev-${d.id}`,
    tur: "dize_ceviri",
    zorluk: Math.min(5, Math.max(1, Math.ceil(d.kelimeSayisi / 3))),
    runik: d.runik,
    transkripsiyon: d.transkripsiyon,
    dogru: d.turkce,
    // Çeviri mi, günümüz okuması mı — arayüzde belirtilir.
    gunumuzOkumasi: d.dogrulama?.ceviri === "gunumuz_okumasi",
    kaynak: d.id
  });
}

// ── Cümlecik çevirileri ─────────────────────────────────────────────────────
// Dizeler ortalama 27 kelime; ≤12 kuralı yüzünden 214 dizenin yalnız 15'i
// alıştırmaya giriyordu. Cümlecik birimi bu tavanı kaldırır.
//
// KAPI: yalnız `denetleyen === "insan"` olan cümlecikler alıştırmaya girer.
// Makine üretimi karşılıklar dosyada durur ama kullanılmaz — çeviri
// doğruluğu insan onayı olmadan iddia edilemez.
const CUMLECIK_YOLU = P("05_Kaynak_DB/cumlecikler-onayli.json");
let cumlecikCevirisi = 0;
let cumlecikMakine = 0;

if (fs.existsSync(CUMLECIK_YOLU)) {
  const paket = JSON.parse(fs.readFileSync(CUMLECIK_YOLU, "utf8"));
  for (const c of paket.cumlecikler ?? []) {
    if (!c.turkce?.trim() || !c.kaynak?.trim()) continue;
    if (/---/.test(c.turkce) || /---/.test(c.transkripsiyon)) continue;
    if (c.kelimeSayisi > 12) continue;
    if (c.denetleyen !== "insan") {
      cumlecikMakine++;
      continue;
    }
    alistirmalar.push({
      id: `gen-cumcev-${c.id}`,
      tur: "dize_ceviri",
      zorluk: Math.min(5, Math.max(1, Math.ceil(c.kelimeSayisi / 3))),
      runik: c.runik,
      transkripsiyon: c.transkripsiyon,
      dogru: c.turkce,
      gunumuzOkumasi: c.tur === "gunumuz_okumasi",
      kaynak: c.dizeId
    });
    cumlecikCevirisi++;
  }
}

// ── Yazım ───────────────────────────────────────────────────────────────────
// Çıktı JSON: bu veri yalnızca alıştırma/deşifre ekranlarında gerekiyor.
// .ts olarak statik import edilseydi ~1 MB açılış paketine girerdi; JSON'u
// uygulama dinamik import eder, Vite ayrı parçaya koyar.
const yazJson = (ad, veri) =>
  fs.writeFileSync(path.join(CIKTI, ad), JSON.stringify(veri), "utf8");

fs.mkdirSync(CIKTI, { recursive: true });

yazJson("korpus.json", dizeler);
yazJson("kelimeler.json", kelimeler);
yazJson("alistirmalar.json", alistirmalar);

// ── Kuşaklar ────────────────────────────────────────────────────────────────
// Elle yazılmış 5 aşama alfabeyi ve imla kurallarını ÖĞRETİR; korunuyor.
// Buradaki kuşaklar onun devamı: öğrenilen kuralların gerçek kitabe
// malzemesiyle pekiştirildiği, zorluğu kademeli artan uygulama aşamaları.
// Böylece üretilen alıştırmalar ayrı bir sekmede kalmayıp öğrenme yoluna,
// dolayısıyla XP/can/ilerleme sistemine bağlanır.
const KUSAK_TANIMI = [
  { bant: 1, baslik: "Bengü Taş Kelimeleri", altbaslik: "Kitabelerin en sık sözcükleri" },
  { bant: 2, baslik: "Yazılmayan Ünlüler", altbaslik: "Eksik ünlüyü okurken tamamlama" },
  { bant: 3, baslik: "Uzun Sözcükler", altbaslik: "Çok tamgalı biçimler ve ekler" },
  { bant: 4, baslik: "Ayırt Etme", altbaslik: "Birbirine benzeyen tamgalar ve sözcükler" },
  { bant: 5, baslik: "Deşifre Ustalığı", altbaslik: "Yıpranmış ve karmaşık dizgiler" }
];

const DERS_BASINA = 8;
const DERS_SAYISI = 3;

// Sözlükte anlamı olan kelimeler: kelime kurma alıştırmasında "Anlam" alanı
// gösterildiği için yalnızca anlamı BİLİNEN kelimeler oraya konur. Anlamı
// olmayanı boş ya da uydurma anlamla göstermek öğretici olmaz.
const anlamlar = new Map();
if (fs.existsSync(P("05_Kaynak_DB/sozluk-anlamlar.json"))) {
  for (const k of oku("05_Kaynak_DB/sozluk-anlamlar.json")) {
    if (k.runik && k.anlam && !k.korpustaYok) anlamlar.set(k.runik, k.anlam);
  }
}

const kusaklar = KUSAK_TANIMI.map((tanim, i) => {
  const bantAlistirmalari = alistirmalar.filter((a) => a.zorluk === tanim.bant);
  const okuma = bantAlistirmalari.filter((a) => a.tur === "runik_oku");
  // Kelime kurma yalnızca anlamı bilinen kelimelerle.
  const kurma = bantAlistirmalari.filter((a) => a.tur === "kelime_kur" && anlamlar.has(a.runik));
  const ceviri = bantAlistirmalari.filter((a) => a.tur === "kelime_ceviri");

  const dersler = [];
  for (let d = 0; d < DERS_SAYISI; d++) {
    const secilen = [];
    for (let j = 0; j < DERS_BASINA; j++) {
      const sira = d * DERS_BASINA + j;
      // Üçlü dönüşüm: tanı → yaz → anlamını bil.
      // Tek beceriyi arka arkaya sormak yerine aynı kelimeyi farklı
      // açılardan yoklamak pekiştirmeyi artırıyor.
      const siraliKaynaklar = [okuma, kurma, ceviri].filter((x) => x.length);
      const kaynak = siraliKaynaklar[j % siraliKaynaklar.length];
      const secim = kaynak[Math.floor(sira / siraliKaynaklar.length) % kaynak.length];
      if (secim && !secilen.includes(secim.id)) secilen.push(secim.id);
    }
    if (secilen.length) {
      dersler.push({
        id: `kusak-${tanim.bant}-ders-${d + 1}`,
        baslik: `${tanim.baslik} ${d + 1}`,
        altbaslik: tanim.altbaslik,
        xp: 15 + tanim.bant * 5,
        alistirmaIdleri: secilen
      });
    }
  }

  return {
    id: `kusak-${tanim.bant}`,
    numara: 6 + i,
    bant: tanim.bant,
    baslik: tanim.baslik,
    altbaslik: tanim.altbaslik,
    aciklama: `Orhun yazıtlarından derlenmiş, ${tanim.bant}. zorluk bandındaki gerçek sözcüklerle pekiştirme.`,
    dersler
  };
}).filter((k) => k.dersler.length);

yazJson("kusaklar.json", kusaklar);
console.log(
  `kuşak           : ${kusaklar.length} (${kusaklar.reduce((n, k) => n + k.dersler.length, 0)} ders, ` +
  `${kusaklar.reduce((n, k) => n + k.dersler.reduce((m, d) => m + d.alistirmaIdleri.length, 0), 0)} alıştırma)`
);

// ── Sözlük ──────────────────────────────────────────────────────────────────
// sozluk-anlamlar.json dışarıdan gelen anlamların korpusla birleştirilmiş
// halidir (engine/sozluk-birlestir.mjs). Burada yalnızca uygulamanın
// okuyacağı biçime çevrilir; korpusta karşılığı olmayanlar ELENİR —
// runik yazımları doğrulanamadığı için gösterilmemeli.
const sozlukYolu = P("05_Kaynak_DB/sozluk-anlamlar.json");
if (fs.existsSync(sozlukYolu)) {
  // Serbest metin kategoriler ("toplum / yönetim") süzgeç için sabit
  // kümeye indirgenir; özgün etiket görüntülemede korunur.
  const kategoriEsle = (ham) => {
    const t = String(ham || "").toLowerCase();
    if (/sayı|sayi/.test(t)) return "sayi";
    if (/asker|savaş|savas/.test(t)) return "askeri";
    if (/yönet|yonet|unvan|devlet|hukuk/.test(t)) return "devlet";
    if (/inanç|inanc|kozmoloji|doğa|doga|coğraf|cograf|hayvan|zaman|renk/.test(t)) return "dogalguc";
    return "temel";
  };

  const sozluk = JSON.parse(fs.readFileSync(sozlukYolu, "utf8"))
    .filter((k) => k.runik && !k.korpustaYok)
    .map((k) => ({
      id: k.id,
      runik: k.runik,
      transkripsiyon: k.transkripsiyon,
      anlam: k.anlam,
      kategori: kategoriEsle(k.kategori),
      kategoriEtiketi: k.kategori,
      kaynak: k.kaynak,
      teyitGerek: k.teyitGerek,
      bicimler: k.bicimler || []
    }));
  yazJson("sozluk.json", sozluk);
  console.log(`sözlük          : ${sozluk.length} kelime (korpusta doğrulanmış)`);
}

// Tipler ayrı ve küçük bir dosyada; veri JSON'da kaldığı için bu dosya
// açılış paketine girse bile maliyeti sıfır.
fs.writeFileSync(
  path.join(CIKTI, "tipler.ts"),
  `// ÜRETİLMİŞ DOSYA — elle düzenlemeyin. Üreten: engine/icerik-uret.mjs

export interface KorpusDizesi {
  id: string;
  kaynak: string;
  kaynakAd: string;
  yuz: string;
  satir: number;
  runik: string;
  transkripsiyon: string;
  turkce: string;
  kelimeSayisi: number;
  yipranma: boolean;
  dogrulama: {
    iskelet: string;
    ceviri: string;
    okuma: string;
    denetleyen: string | null;
    kaynak: string | null;
    tarih: string | null;
  };
}

export interface KorpusKelimesi {
  runik: string;
  transkripsiyon: string;
  /** Korpusta kaç kez geçiyor. */
  siklik: number;
  /** En fazla 5 dize kimliği (kaynak gösterimi için). */
  gectigiDizeler: string[];
  /** Yazılmamış ünlü sayısı — okuma zorluğunun ana etkeni. */
  dusenUnlu: number;
  /** Kaynak dizelerin tamamı iskelet denetiminden geçtiyse true. */
  guvenilir: boolean;
  /** 1-5 bandı. */
  zorluk: number;
}

export type UretilmisAlistirmaTuru =
  | 'runik_oku'
  | 'kelime_kur'
  | 'kelime_ceviri'
  | 'dize_ceviri';

export interface SozlukKelimesi {
  id: string;
  /** Korpustan doğrulanmış runik yazım. */
  runik: string;
  transkripsiyon: string;
  anlam: string;
  /** Süzgeç için sabit küme. */
  kategori: string;
  /** Kaynaktaki özgün, daha ayrıntılı etiket. */
  kategoriEtiketi: string;
  kaynak: string | null;
  /** Kaynağı doğrulanmamışsa true — arayüzde işaretlenir. */
  teyitGerek: boolean;
  /** Kitabelerde geçen çekimli biçimler, atıflarıyla. */
  bicimler: Array<{
    runik: string;
    transkripsiyon: string;
    siklik: number;
    dizeler: string[];
  }>;
}

export interface KusakDersi {
  id: string;
  baslik: string;
  altbaslik: string;
  xp: number;
  /** Alıştırmalar kimlikle anılır; veri alistirmalar.json'da tekrarlanmaz. */
  alistirmaIdleri: string[];
}

export interface Kusak {
  id: string;
  /** Elle yazılmış 5 aşamanın ardından gelir; numara 6'dan başlar. */
  numara: number;
  /** Alıştırma zorluk bandı (1-5). */
  bant: number;
  baslik: string;
  altbaslik: string;
  aciklama: string;
  dersler: KusakDersi[];
}

export interface UretilmisAlistirma {
  id: string;
  tur: UretilmisAlistirmaTuru;
  zorluk: number;
  runik: string;
  /** runik_oku: doğru okunuş. kelime_kur: hedef kelime. */
  transkripsiyon?: string;
  dogru?: string;
  secenekler?: string[];
  /** dize_ceviri: karşılık çeviri değil günümüz okumasıysa true. */
  gunumuzOkumasi?: boolean;
  /** Kaynak kitabe dizesinin kimliği (ör. KT-G-1). */
  kaynak: string;
}
`,
  "utf8"
);

console.log(`dize            : ${dizeler.length}`);
console.log(`benzersiz kelime: ${kelimeler.length} (güvenilir ${kelimeler.filter((k) => k.guvenilir).length})`);
console.log(`alıştırma       : ${alistirmalar.length}`);
console.log(`yakın çeldirici : ${yakinKullanan} kelimede bulundu (tek tamga farkıyla gerçek kelime)`);
console.log(`kelime çevirisi : ${kelimeCevirisi}`);
console.log(`dize çevirisi   : ${dizeCevirisi.length}  (denetimden geçen kısa dize)`);
console.log(`  denetim bekleyen dize: ${dizeler.length - ceviriyeHazir.length}`);
if (dizeMakine) {
  console.log(`  ATLANAN: ${dizeMakine} dize  ← denetleyen "insan" değil, alıştırmaya alınmadı`);
}
console.log(`cümlecik çevirisi: ${cumlecikCevirisi}  (insan onaylı)`);
if (cumlecikMakine) {
  console.log(`  ATLANAN: ${cumlecikMakine} cümlecik  ← denetleyen "insan" değil, alıştırmaya alınmadı`);
}
