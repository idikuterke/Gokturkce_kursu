#!/usr/bin/env node
/**
 * EKSİK FİİL VE İSİM KÖKLERİNİ EKLER, ÇEKİMLİ MADDELERİ KÖKE TAŞIR
 *
 * docs/sozluk-buyuk-harfli-maddeler.md 1. grup. Sözlükte çekimli biçimler
 * ayrı madde olarak duruyordu (BOLDI "oldu", ÖLTİ "öldü", KILDıM…); kökleri
 * ise hiç yoktu. Kökler kaynaklarıyla eklenir, çekimler köke taşınır.
 *
 * YAZIM DENETİMİ: her kökün runik yazımı korpusta ya yalın olarak ya da
 * çekimli biçimlerin ön eki olarak tanıklı; aşağıdaki tanik alanı onu
 * söylüyor. Uydurma yazım girilmiyor.
 *
 *   node engine/sozluk-kok-ekle.mjs [--kuru]
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const kuru = process.argv.includes("--kuru");
const yol = "05_Kaynak_DB/sozluk-anlamlar.json";
const d = JSON.parse(fs.readFileSync(P(yol), "utf8"));
const kelimeler = JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8"))
  .filter((w) => w.guvenilir);

const sadece = (s) =>
  [...String(s).toLocaleLowerCase("tr")].filter((c) => /\p{L}/u.test(c)).join("");

const KOKLER = [
  { id: "kel", transkripsiyon: "kel-", runik: "𐰚𐰠", anlam: "gelmek; yönelmek",
    kategori: "fiil", kaynak: "Tekin 1968, s. 349; Clauson 1972, s. 715",
    tanik: "KeLTİ 𐰚𐰠𐱅𐰃 ×33" },
  { id: "kil", transkripsiyon: "kıl-", runik: "𐰴𐰃𐰞", anlam: "yapmak, etmek, kılmak; yaratmak",
    kategori: "fiil",
    // Düzyazıda s. 718, tabloda s. 616 verildi; ikisi aynı maddeyi
    // gösteremez. Çelişki kayda geçti, teyit bekliyor.
    kaynak: "Clauson 1972, s. 616 (aynı kaynak için s. 718 de verildi — çelişki)",
    teyitGerek: true, tanik: "KILMıŞ 𐰴𐰃𐰞𐰢𐰾 ×2" },
  { id: "bol", transkripsiyon: "bol-", runik: "𐰉𐰆𐰞", anlam: "olmak, haline gelmek",
    kategori: "fiil", kaynak: "Tekin, s. 318; Clauson 1972, s. 331",
    tanik: "BOLMıS 𐰉𐰆𐰞𐰢𐰾 ×15" },
  { id: "ol_fiil", transkripsiyon: "öl-", runik: "𐰇𐰠", anlam: "ölmek",
    kategori: "fiil", kaynak: "Tekin, s. 363; Clauson 1972, s. 125",
    tanik: "ÖLTİ 𐰇𐰠𐱅𐰃 ×15" },
  { id: "oz", transkripsiyon: "öz", runik: "𐰇𐰔", anlam: "öz, kendi, iç; can, benlik",
    kategori: "insan", kaynak: "Clauson 1972, s. 278a",
    // Verilen yazım 𐰇𐰕 idi; U+10C15 Yenisey "ez" varyantı, projenin
    // alfabe tablosunda yok ve korpusta hiç geçmiyor. Orhon z'si 𐰔.
    not: "yazım 𐰇𐰔 (Orhon z); verilen 𐰇𐰕 Yenisey ez varyantıdır",
    tanik: "ÖZ 𐰇𐰔 ×3 (yalın)" },
  { id: "bar_fiil", transkripsiyon: "bar-", runik: "𐰉𐰺", anlam: "varmak, gitmek",
    kategori: "fiil", kaynak: "Clauson 1972, s. 354", tanik: "BaR 𐰉𐰺 ×12 (yalın)" },
];

/** Çekimli madde → taşınacağı kök. */
const TASI = {
  BODuNuG: "bodun", BeGLeR: "beg", SÜLeDiM: "süle-",
  "KeLTİ": "kel-", "KILDıM": "kıl-", BOLDI: "bol-", "BOLMıS": "bol-",
  "ÖLTİ": "öl-", "ÖZüM": "öz",
};

const kayit = [];
const bul = (t) => d.find((k) => k.transkripsiyon === t);

// 1 · kökleri ekle
for (const k of KOKLER) {
  if (bul(k.transkripsiyon)) { kayit.push(`atlandı   ${k.transkripsiyon} zaten var`); continue; }
  const { tanik, not, ...madde } = k;
  d.push({
    ...madde,
    denetleyen: "insan",
    katman: "insan",
    korpustaYok: false,
    teyitGerek: madde.teyitGerek ?? false,
    bicimler: [],
    runikNotu: `yazım korpusta tanıklı: ${tanik}${not ? ` · ${not}` : ""}`,
  });
  kayit.push(`eklendi   ${k.transkripsiyon.padEnd(7)} ${k.runik.padEnd(6)} ${k.anlam.slice(0, 34)}`);
}

// 2 · çekimli maddeleri köke taşı
for (const [bicim, kokAd] of Object.entries(TASI)) {
  const m = bul(bicim);
  const kok = bul(kokAd);
  if (!m) { kayit.push(`⚠ çekim bulunamadı: ${bicim}`); continue; }
  if (!kok) { kayit.push(`⚠ kök bulunamadı: ${kokAd} (${bicim} taşınamadı)`); continue; }
  const w = kelimeler.find((x) => x.transkripsiyon === bicim) ??
            kelimeler.find((x) => x.runik === m.runik);
  kok.bicimler = [
    ...(kok.bicimler ?? []).filter((b) => b.runik !== m.runik),
    { runik: m.runik, transkripsiyon: bicim, siklik: w?.siklik ?? 0,
      dizeler: (w?.gectigiDizeler ?? []).slice(0, 3) },
  ].sort((a, b) => b.siklik - a.siklik);
  d.splice(d.indexOf(m), 1);
  kayit.push(`taşındı   ${bicim.padEnd(9)} ${m.runik.padEnd(8)} → ${kokAd} (${w?.siklik ?? 0}×)`);
}

// 3 · köklerin kalan biçimlerini korpustan topla. Ön ek runikten, ama
//     çevriyazı da köke uymalı: öz 𐰇𐰔 ile ÜZE 𐰇𐰔𐰀 aynı tamgalarla
//     başlıyor, oysa ÜZE ayrı bir madde (edat).
for (const k of KOKLER) {
  const madde = bul(k.transkripsiyon);
  if (!madde) continue;
  const govde = sadece(k.transkripsiyon.replace(/-$/, ""));
  const varOlan = new Set((madde.bicimler ?? []).map((b) => b.runik));
  // Başka bir maddenin runiği bu kökünkinden UZUN bir ön ekse, biçim o
  // maddenindir. bar- 𐰉𐰺 ile bark 𐰉𐰺𐰴 aynı tamgalarla başlıyor; BaRKIN
  // 𐰉𐰺𐰴𐰃𐰤 bark'ın çekimi, bar-'ın değil.
  const digerKokler = d
    .filter((x) => x.runik && x.transkripsiyon !== k.transkripsiyon &&
                   x.runik.startsWith(k.runik) && x.runik.length > k.runik.length)
    .map((x) => x.runik);
  const baskasinin = (runik) => digerKokler.some((r) => runik.startsWith(r));

  const ek = kelimeler
    .filter((w) => w.runik.startsWith(k.runik) && !varOlan.has(w.runik) &&
                   sadece(w.transkripsiyon).startsWith(govde) && !baskasinin(w.runik))
    .sort((a, b) => b.siklik - a.siklik)
    .slice(0, 6 - (madde.bicimler?.length ?? 0))
    .map((w) => ({ runik: w.runik, transkripsiyon: w.transkripsiyon,
                   siklik: w.siklik, dizeler: w.gectigiDizeler.slice(0, 3) }));
  if (ek.length) {
    madde.bicimler = [...(madde.bicimler ?? []), ...ek].sort((a, b) => b.siklik - a.siklik);
    kayit.push(`biçim     ${k.transkripsiyon.padEnd(7)} +${ek.length}: ` +
      ek.map((b) => `${b.transkripsiyon} ×${b.siklik}`).join(", "));
  }
}

console.log(kayit.join("\n"));
console.log(`\n${kayit.length} işlem | madde sayısı ${d.length}`);
if (!kuru) {
  fs.writeFileSync(P(yol), JSON.stringify(d, null, 2) + "\n", "utf8");
  console.log(`→ ${yol}`);
}
