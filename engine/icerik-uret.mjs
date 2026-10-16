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

const KOK = new URL("..", import.meta.url).pathname;
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

// Çeviri alıştırmaları: insan denetimi bekliyor, şimdilik üretilmez.
const ceviriyeHazir = dizeler.filter((d) => d.dogrulama?.ceviri === "gecti");

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

export type UretilmisAlistirmaTuru = 'runik_oku' | 'kelime_kur';

export interface UretilmisAlistirma {
  id: string;
  tur: UretilmisAlistirmaTuru;
  zorluk: number;
  runik: string;
  /** runik_oku: doğru okunuş. kelime_kur: hedef kelime. */
  transkripsiyon?: string;
  dogru?: string;
  secenekler?: string[];
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
console.log(`çeviriye hazır  : ${ceviriyeHazir.length} dize (insan denetimi bekliyor)`);
