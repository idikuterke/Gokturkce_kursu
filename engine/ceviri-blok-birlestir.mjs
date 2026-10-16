#!/usr/bin/env node
/**
 * Doldurulmuş blokları toplar, kitaplar arası uzlaşmayı ölçer.
 *
 *   node engine/ceviri-blok-birlestir.mjs
 *   node engine/ceviri-blok-birlestir.mjs --esik 0.75
 *
 * Çıktı:
 *   docs/ceviri-uzlasma-raporu.json  — her kayıt için adaylar + uzlaşma skoru
 *   docs/ceviri-onay-kuyrugu.json    — denetim ekranına verilecek, önceliklendirilmiş
 *
 * Mantık: iki kitap aynı şeyi söylüyorsa doğru olma olasılığı yüksek.
 * Ayrışıyorsa insan bakar. Tek kaynak varsa teyit edilmemiş sayılır.
 *
 * Bu betik HİÇBİR ŞEYİ otomatik onaylamaz — yalnız sıraya koyar.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const esikI = argv.indexOf("--esik");
const ESIK = esikI === -1 ? 0.7 : Number(argv[esikI + 1]);
if (!(ESIK > 0 && ESIK <= 1)) throw new Error(`--esik 0-1 arası olmalı, verilen: ${argv[esikI + 1]}`);

const dizin = join(kok, "docs/ceviri-bloklari");
if (!existsSync(dizin)) {
  console.error("docs/ceviri-bloklari yok. Önce: node engine/ceviri-blok-uret.mjs");
  process.exit(1);
}

/** Türkçe duyarlı sadeleştirme: karşılaştırma için. */
function sadelestir(s) {
  return (s || "")
    .toLocaleLowerCase("tr")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Kelime kümesi üzerinden Jaccard benzerliği. Kelime sırası çeviride oynar. */
function benzerlik(a, b) {
  const A = new Set(sadelestir(a).split(" ").filter(Boolean));
  const B = new Set(sadelestir(b).split(" ").filter(Boolean));
  if (!A.size || !B.size) return 0;
  let kesisim = 0;
  for (const k of A) if (B.has(k)) kesisim++;
  return kesisim / (A.size + B.size - kesisim);
}

/** Adaylar arası ortalama ikili benzerlik = uzlaşma. */
function uzlasma(adaylar) {
  if (adaylar.length < 2) return 0;
  let toplam = 0;
  let cift = 0;
  for (let i = 0; i < adaylar.length; i++) {
    for (let j = i + 1; j < adaylar.length; j++) {
      toplam += benzerlik(adaylar[i].metin, adaylar[j].metin);
      cift++;
    }
  }
  return cift ? toplam / cift : 0;
}

const dosyalar = readdirSync(dizin).filter((f) => /^blok-\d+\.json$/.test(f)).sort();
const kayitlar = [];
const bozuk = [];

for (const f of dosyalar) {
  let blok;
  try {
    blok = JSON.parse(readFileSync(join(dizin, f), "utf8"));
  } catch (e) {
    bozuk.push({ dosya: f, sebep: e.message });
    continue;
  }
  for (const k of blok.kayitlar ?? []) {
    const adaylar = (k.adaylar ?? []).filter((a) => a?.metin?.trim());
    for (const a of adaylar) {
      if (!a.kitap?.trim()) bozuk.push({ dosya: f, id: k.id, sebep: "aday kitapsız" });
    }
    kayitlar.push({ ...k, adaylar, uzlasma: uzlasma(adaylar) });
  }
}

const dolu = kayitlar.filter((k) => k.adaylar.length > 0);
const bos = kayitlar.length - dolu.length;

const kategori = (k) => {
  if (k.adaylar.length === 0) return "aday-yok";
  if (k.adaylar.length === 1) return "tek-kaynak";
  return k.uzlasma >= ESIK ? "uzlasti" : "ayristi";
};

const sayim = { "aday-yok": 0, "tek-kaynak": 0, uzlasti: 0, ayristi: 0 };
for (const k of kayitlar) sayim[kategori(k)]++;

/* Öncelik: ayrışanlar önce (insan kararı şart), sonra tek kaynak,
   sonra uzlaşanlar (hızlı onay). Aday yoksa kuyruğa girmez. */
const oncelikSirasi = { ayristi: 0, "tek-kaynak": 1, uzlasti: 2 };
const kuyruk = dolu
  .map((k) => ({ ...k, durum: kategori(k) }))
  .sort(
    (a, b) =>
      oncelikSirasi[a.durum] - oncelikSirasi[b.durum] ||
      a.uzlasma - b.uzlasma ||
      a.id.localeCompare(b.id)
  );

const bugun = new Date().toISOString().slice(0, 10);

writeFileSync(
  join(kok, "docs/ceviri-uzlasma-raporu.json"),
  JSON.stringify(
    { uretim: bugun, esik: ESIK, blok: dosyalar.length, toplamKayit: kayitlar.length, adaysiz: bos, sayim, bozuk },
    null,
    2
  ) + "\n"
);

writeFileSync(
  join(kok, "docs/ceviri-onay-kuyrugu.json"),
  JSON.stringify(
    {
      uretim: bugun,
      esik: ESIK,
      aciklama:
        "Çoklu kitap taramasının çıktısı. Hiçbir kayıt otomatik onaylanmamıştır; " +
        "denetim ekranında insan kararı bekler. Sıra: ayrışanlar → tek kaynak → uzlaşanlar.",
      sayim,
      kayitlar: kuyruk,
    },
    null,
    2
  ) + "\n"
);

console.log(`blok        : ${dosyalar.length}`);
console.log(`kayıt       : ${kayitlar.length}  (adayı olan: ${dolu.length}, boş: ${bos})`);
console.log(`uzlaştı     : ${sayim.uzlasti}   (≥ ${ESIK} benzerlik, ≥2 kitap)`);
console.log(`ayrıştı     : ${sayim.ayristi}   ← insan kararı şart`);
console.log(`tek kaynak  : ${sayim["tek-kaynak"]}   ← teyitsiz`);
if (bozuk.length) {
  console.log(`\nSORUNLU ${bozuk.length} kayıt:`);
  for (const b of bozuk.slice(0, 10)) console.log(`  ${b.dosya}${b.id ? ` / ${b.id}` : ""}: ${b.sebep}`);
}
console.log("\nyazıldı: docs/ceviri-uzlasma-raporu.json, docs/ceviri-onay-kuyrugu.json");
