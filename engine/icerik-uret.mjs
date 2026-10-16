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
        // İskeleti "inceleme"de olan dizeden gelen kelime kesin sayılmaz.
        guvenilir: true,
      };
      kelimeHarita.set(anahtar, kayit);
    }
    kayit.siklik += 1;
    if (kayit.gectigiDizeler.length < 5) kayit.gectigiDizeler.push(d.id);
    if (d.dogrulama?.iskelet !== "gecti") kayit.guvenilir = false;
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
// Çeldirici: aynı zorluk bandından, farklı transkripsiyonlu kelimeler.
const celdiriciler = (dogru, havuz, adet = 3) => {
  const aday = havuz.filter(
    (k) => k.transkripsiyon !== dogru.transkripsiyon && Math.abs(k.zorluk - dogru.zorluk) <= 1
  );
  const secilen = [];
  const gorulen = new Set([dogru.transkripsiyon]);
  for (let i = 0; i < aday.length && secilen.length < adet; i++) {
    // Deterministik örnekleme: üretim her çalıştırmada aynı çıktıyı versin.
    const k = aday[(i * 37 + dogru.runik.length * 11) % aday.length];
    if (gorulen.has(k.transkripsiyon)) continue;
    gorulen.add(k.transkripsiyon);
    secilen.push(k);
  }
  return secilen;
};

const alistirmalar = [];
// Yalnızca güvenilir ve birden fazla geçen kelimeler: tek geçişli biçimler
// dizgi hatası olmaya daha açık.
const uygun = kelimeler.filter((k) => k.guvenilir && k.siklik >= 2 && k.dusenUnlu >= 0);

for (const k of uygun) {
  const yanlislar = celdiriciler(k, uygun);
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
console.log(`çeviriye hazır  : ${ceviriyeHazir.length} dize (insan denetimi bekliyor)`);
