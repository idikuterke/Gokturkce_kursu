// Çeviri kalitesi taraması.
//
// İki kural, ikisi de denetim sırasında elle yakalanması zor olan şeyler:
//
// 1) LACUNA — Türkçe alandaki `---` taş kırığını gösterir. `yipranma`
//    bayrağı yalnızca runik ve transkripsiyon alanlarına bakıyordu; Türkçe
//    alanda kırık olan dize "yıpranmamış" sayılıp alıştırmaya uygun
//    görünüyordu (BK-B-7 böyle kaçmıştı).
//
// 2) ÇEVİRİLMEMİŞ KELİME — Türkçe karşılık, transkripsiyondaki kelimeye
//    harf harf çok benziyorsa çeviri değil, modernleştirilmiş okumadır
//    (SIGUN → SIĞUN, SÜŊüŞDüMüZ → SÜNGÜŞDÜK). Bunlar yanlış değildir ama
//    çeviri alıştırmasında anlam öğretmez; bu yüzden ayrı işaretlenir.
import fs from "node:fs";
import path from "node:path";

const KOK = new URL("..", import.meta.url).pathname;
const DB = path.join(KOK, "05_Kaynak_DB/orhun-db-v1.json");
const db = JSON.parse(fs.readFileSync(DB, "utf8"));

// Türkçe ile transkripsiyonu aynı zemine indir: okuma farkları (ı/i, ş/s,
// ğ/g…) benzerliği gizlememeli.
const katla = (s) => {
  let t = String(s || "").toLowerCase();
  for (const [a, b] of [["ŋ", "n"], ["ñ", "n"], ["ı", "i"], ["ş", "s"], ["ç", "c"], ["ö", "o"], ["ü", "u"], ["ğ", "g"], ["â", "a"], ["ā", "a"]]) {
    t = t.split(a).join(b);
  }
  return [...t].filter((c) => /\p{L}/u.test(c)).join("");
};

const uzaklik = (a, b) => {
  const x = [...a], y = [...b];
  let onceki = Array.from({ length: y.length + 1 }, (_, i) => i);
  for (let i = 1; i <= x.length; i++) {
    const satir = [i];
    for (let j = 1; j <= y.length; j++) {
      satir[j] = Math.min(onceki[j] + 1, satir[j - 1] + 1, onceki[j - 1] + (x[i - 1] === y[j - 1] ? 0 : 1));
    }
    onceki = satir;
  }
  return onceki[y.length];
};

const benzerlik = (a, b) => {
  if (!a || !b) return 0;
  const enUzun = Math.max(a.length, b.length);
  return enUzun === 0 ? 1 : 1 - uzaklik(a, b) / enUzun;
};

const ESIK = 0.9;

// Özel adlar ve değişmeden kalan sözcükler "çevirilmemiş" sayılmaz: TÜRK,
// BİLGE, TONYUKUK bugün de aynı yazılır, bunları işaretlemek sinyali boğar.
// Liste olmadan tarama 206 dize veriyordu; gerçek sorunlu sayı çok daha az.
const AYNI_KALANLAR = new Set([
  "turk", "bilge", "kagan", "tonyukuk", "tunyukuk", "oguz", "tabgac", "kirkiz",
  "turgis", "otuken", "ilteris", "kultigin", "koltigin", "tigin", "sad", "tarkan",
  "taman", "yok", "ben", "bu", "ol", "anca", "apa", "sir", "az", "bir", "iki",
  "uc", "tort", "bes", "alti", "yeti", "sekiz", "tokuz", "on", "yuz", "bin",
  "kaz", "kizil", "ak", "kara", "yagiz", "kok"
]);
const lacunalar = [];
const cevirilmemisler = [];

for (const d of db.dizeler) {
  if (/---/.test(d.turkce || "")) {
    lacunalar.push({ id: d.id, yipranmaBayragi: d.yipranma });
  }

  const tr = (d.transkripsiyon || "").split(":").map((w) => w.trim()).filter(Boolean);
  const tu = (d.turkce || "").split(":").map((w) => w.trim()).filter(Boolean);
  if (tr.length !== tu.length) continue;

  const eslesen = [];
  for (let i = 0; i < tr.length; i++) {
    const a = katla(tr[i]), b = katla(tu[i]);
    if (!a || !b) continue;
    if (AYNI_KALANLAR.has(a) || AYNI_KALANLAR.has(b)) continue;
    if (benzerlik(a, b) >= ESIK) eslesen.push(`${tr[i]} → ${tu[i]}`);
  }
  if (eslesen.length) {
    cevirilmemisler.push({
      id: d.id,
      kelimeSayisi: tr.length,
      cevirilmemis: eslesen.length,
      oran: Math.round((eslesen.length / tr.length) * 100),
      ornekler: eslesen.slice(0, 4)
    });
  }
}

console.log(`TÜRKÇE ALANDA LACUNA (---): ${lacunalar.length} dize`);
const gizliLacuna = lacunalar.filter((l) => !l.yipranmaBayragi);
console.log(`  bunlardan yipranma bayrağı FALSE olan: ${gizliLacuna.length}  ← tarayıcıdan kaçıyordu`);
gizliLacuna.slice(0, 10).forEach((l) => console.log(`    ${l.id}`));

cevirilmemisler.sort((a, b) => b.oran - a.oran);
console.log(`\nÇEVİRİLMEMİŞ KELİME İÇEREN DİZE: ${cevirilmemisler.length} (benzerlik ≥ %${ESIK * 100})`);
console.log(`  tamamı çevirilmemiş (%100): ${cevirilmemisler.filter((c) => c.oran === 100).length}`);
console.log(`  yarıdan fazlası (>%50)    : ${cevirilmemisler.filter((c) => c.oran > 50).length}`);
console.log(`\n  en yüksek 10:`);
cevirilmemisler.slice(0, 10).forEach((c) =>
  console.log(`    ${c.id.padEnd(10)} %${String(c.oran).padStart(3)} (${c.cevirilmemis}/${c.kelimeSayisi})  ${c.ornekler.join(" · ")}`)
);

const cikti = path.join(KOK, "docs/ceviri-kalite-raporu.json");
fs.writeFileSync(cikti, JSON.stringify({ lacunalar, cevirilmemisler }, null, 2) + "\n", "utf8");
console.log(`\n→ docs/ceviri-kalite-raporu.json`);
