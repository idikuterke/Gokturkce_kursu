#!/usr/bin/env node
/**
 * Tema token katmanı.
 *
 * Tek kaynak: src/styles/tema.json
 *   1. src/index.css içindeki @theme bloğunu bu haritadan üretir
 *   2. src/**.tsx|ts içindeki `bg-[#2BC4C4]` gibi ham hex sınıflarını
 *      `bg-marka` biçimine çevirir
 *   3. haritada olmayan hex renkleri rapor eder
 *
 *   node engine/tema-uygula.mjs          # uygula
 *   node engine/tema-uygula.mjs --kuru   # yazmadan rapor
 *   node engine/tema-uygula.mjs --rapor  # sadece kalan ham renkleri listele
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const bayraklar = process.argv.slice(2);
const kuru = bayraklar.includes("--kuru");
const sadeceRapor = bayraklar.includes("--rapor");

const tema = JSON.parse(readFileSync(join(kok, "src/styles/tema.json"), "utf8"));
/** HEX (büyük harf) -> token adı */
const hexToken = new Map(
  Object.entries(tema.renkler).map(([ad, v]) => [v.hex.toUpperCase(), ad])
);

const BASLA = "/* === TEMA TOKENLARI: otomatik üretilir, elle düzenleme === */";
const BITIR = "/* === TEMA TOKENLARI SONU === */";

/* ---------- 1. index.css @theme bloğu ---------- */

function themeBlogu() {
  const satirlar = Object.entries(tema.renkler).map(
    ([ad, v]) => `  --color-${ad}: ${v.hex};${v.rol ? ` /* ${v.rol} */` : ""}`
  );
  return [BASLA, "@theme {", ...satirlar, "}", BITIR].join("\n");
}

function cssGuncelle() {
  const yol = join(kok, "src/index.css");
  let css = readFileSync(yol, "utf8");
  const blok = themeBlogu();
  const bas = css.indexOf(BASLA);
  if (bas !== -1) {
    const son = css.indexOf(BITIR, bas);
    if (son === -1) throw new Error("index.css: TEMA TOKENLARI bitiş işareti bulunamadı");
    css = css.slice(0, bas) + blok + css.slice(son + BITIR.length);
  } else {
    // @import "tailwindcss"; satırının hemen ardına koy
    const m = css.match(/^@import\s+["']tailwindcss["'];\s*$/m);
    if (!m) throw new Error('index.css: @import "tailwindcss"; satırı bulunamadı');
    const nokta = (m.index ?? 0) + m[0].length;
    css = css.slice(0, nokta) + "\n\n" + blok + "\n" + css.slice(nokta);
  }
  if (!kuru) writeFileSync(yol, css);
  return Object.keys(tema.renkler).length;
}

/* ---------- 1b. JS tarafı için tema modülü ---------- */

/**
 * SVG fill/stroke, recharts renkleri ve inline style gibi Tailwind
 * sınıfı olmayan yerler bu modülden okur:  TEMA.marka
 */
function temaModulu() {
  const satirlar = Object.entries(tema.renkler).map(
    ([ad, v]) => `  ${JSON.stringify(ad)}: ${JSON.stringify(v.hex)},${v.rol ? ` // ${v.rol}` : ""}`
  );
  return [
    "// OTOMATİK ÜRETİLİR — elle düzenleme.",
    "// Kaynak: src/styles/tema.json · Üretici: engine/tema-uygula.mjs",
    "//",
    "// Tailwind sınıfı yazabildiğin yerde sınıfı kullan (bg-marka).",
    "// Bu modül yalnız sınıf yazılamayan yerler içindir:",
    "// SVG fill/stroke, recharts renk propları, inline style.",
    "",
    "export const TEMA = {",
    ...satirlar,
    "} as const;",
    "",
    "export type TemaRengi = keyof typeof TEMA;",
    "",
  ].join("\n");
}

/* ---------- 2. bileşenlerde sınıf dönüşümü ---------- */

function* dosyalar(dizin) {
  for (const ad of readdirSync(dizin)) {
    const tam = join(dizin, ad);
    if (statSync(tam).isDirectory()) {
      yield* dosyalar(tam);
    } else if (/\.(tsx|ts)$/.test(ad)) {
      yield tam;
    }
  }
}

// Tailwind'in renk alan yardımcıları. `border-r-[#..]` gibi yön ekleri de kapsanır.
const ONEKLER = [
  "bg", "text", "border", "border-t", "border-b", "border-l", "border-r",
  "border-x", "border-y", "from", "via", "to", "ring", "ring-offset",
  "shadow", "fill", "stroke", "divide", "outline", "accent", "caret",
  "placeholder", "decoration",
];
// uzun önek önce eşleşsin (border-r, border'dan önce)
ONEKLER.sort((a, b) => b.length - a.length);
const ONEK_DESENI = ONEKLER.map((o) => o.replace(/-/g, "\\-")).join("|");
// opaklık eki destekli:  bg-[#2BC4C4]/40  ->  bg-marka/40
const DESEN = new RegExp(`\\b(${ONEK_DESENI})-\\[(#[0-9A-Fa-f]{6})\\]`, "g");

const kalanlar = new Map(); // HEX -> [{dosya, adet}]
let degisenDosya = 0;
let degisenKullanim = 0;

for (const yol of dosyalar(join(kok, "src"))) {
  const eski = readFileSync(yol, "utf8");
  let adet = 0;
  const yeni = eski.replace(DESEN, (tam, onek, hex) => {
    const token = hexToken.get(hex.toUpperCase());
    if (!token) return tam;
    adet++;
    return `${onek}-${token}`;
  });

  // dönüşümden sonra kalan ham hex'leri say
  for (const m of yeni.matchAll(/#[0-9A-Fa-f]{6}/g)) {
    const h = m[0].toUpperCase();
    const liste = kalanlar.get(h) ?? [];
    liste.push(relative(kok, yol));
    kalanlar.set(h, liste);
  }

  if (adet > 0 && !sadeceRapor) {
    degisenDosya++;
    degisenKullanim += adet;
    if (!kuru) writeFileSync(yol, yeni);
  }
}

/* ---------- 3. rapor ---------- */

if (!sadeceRapor) {
  const n = cssGuncelle();
  if (!kuru) writeFileSync(join(kok, "src/styles/tema.ts"), temaModulu());
  console.log(`@theme     : ${n} token yazıldı (src/index.css)`);
  console.log(`tema.ts    : ${n} renk dışa aktarıldı (src/styles/tema.ts)`);
  console.log(`dönüştürülen: ${degisenKullanim} sınıf, ${degisenDosya} dosya${kuru ? "  (KURU)" : ""}`);
}

const siraliKalan = [...kalanlar.entries()].sort((a, b) => b[1].length - a[1].length);
const toplamKalan = siraliKalan.reduce((t, [, l]) => t + l.length, 0);
console.log(`\nkalan ham renk: ${siraliKalan.length} farklı, ${toplamKalan} kullanım`);
console.log("en çok kullanılan 15 (tokenleştirmeye aday):");
for (const [hex, liste] of siraliKalan.slice(0, 15)) {
  const benzersiz = [...new Set(liste)];
  console.log(
    `  ${hex}  ${String(liste.length).padStart(3)}×  ${benzersiz.slice(0, 2).join(", ")}${benzersiz.length > 2 ? ` +${benzersiz.length - 2}` : ""}`
  );
}
