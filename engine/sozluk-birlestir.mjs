// Dışarıdan gelen anlam listesini korpusla birleştirir.
//
// TASARIM: KORPUS ESAS.
// Modelin ürettiği runik yazım ve atıf hiçbir koşulda kullanılmaz — üç ayrı
// denemede de bu iki alan bozuktu (v1 mojibake, v2 imla/uyum hataları,
// v3 <ctrl42> yer tutucusu). Modelden YALNIZCA anlam, kategori ve kaynak
// alınır; runik yazım ile atıf makine denetimli korpustan türetilir.
//
// "İki türlü de kullanılıyor": bir sözlük biçiminin kitabelerde birden çok
// çekimli biçimi geçer (ogul → oglan, sab → sabımın). Bunlar uydurulmaz,
// korpustan toplanır ve `bicimler` altında kaynaklarıyla verilir.
import fs from "node:fs";
import path from "node:path";

const KOK = new URL("..", import.meta.url).pathname;
const P = (p) => path.join(KOK, p);

const gelenYol = process.argv[2];
if (!gelenYol) {
  console.error("kullanım: node engine/sozluk-birlestir.mjs <gelen-dosya.json>");
  process.exit(1);
}

const gelen = JSON.parse(fs.readFileSync(gelenYol, "utf8"));
const kelimeler = JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8"));
const korpus = JSON.parse(fs.readFileSync(P("src/data/generated/korpus.json"), "utf8"));
const dizeler = new Map(korpus.map((d) => [d.id, d]));

// Türkçe katlama: ı/i, ş/s, ç/c, ö/o, ü/u ayrımı transkripsiyonda oynak.
const katla = (s) => {
  let t = String(s || "").toLowerCase().split("/")[0].trim().replace(/-+$/, "");
  for (const [a, b] of [["ŋ", "ng"], ["ñ", "ny"], ["ı", "i"], ["ş", "s"], ["ç", "c"], ["ö", "o"], ["ü", "u"], ["ğ", "g"], ["â", "a"], ["ā", "a"]]) {
    t = t.split(a).join(b);
  }
  return [...t].filter((c) => /\p{L}/u.test(c)).join("");
};

// Sözlük biçimi → korpustaki bütün çekimli biçimler.
const dizin = new Map();
for (const k of kelimeler) {
  if (!k.guvenilir) continue;
  const anahtar = katla(k.transkripsiyon);
  if (!anahtar) continue;
  if (!dizin.has(anahtar)) dizin.set(anahtar, []);
  dizin.get(anahtar).push(k);
}

const bicimleriBul = (lemma) => {
  const a = katla(lemma);
  if (!a) return [];
  const tam = dizin.get(a) || [];
  // Çekimli biçimler: aynı kökle başlayanlar (oglan, sabımın gibi).
  const turev = [];
  for (const [anahtar, liste] of dizin) {
    if (anahtar !== a && anahtar.startsWith(a) && anahtar.length <= a.length + 4) {
      turev.push(...liste);
    }
  }
  return [...tam, ...turev].sort((x, y) => y.siklik - x.siklik);
};

const sonuc = [];
let korpustan = 0;
let korpusDisi = 0;

for (const g of gelen) {
  if (!g.meaning) continue;
  const bicimler = bicimleriBul(g.transcription);
  const tamEslesme = bicimler.find((b) => katla(b.transkripsiyon) === katla(g.transcription));
  const temel = tamEslesme || bicimler[0] || null;

  if (temel) korpustan++;
  else korpusDisi++;

  sonuc.push({
    id: g.id,
    transkripsiyon: g.transcription,
    // Runik DAİMA korpustan; model değeri bilinçli olarak yok sayılır.
    runik: temel ? temel.runik : null,
    anlam: g.meaning.replace(/\s*\[teyit gerek\]\s*/i, "").trim(),
    kategori: g.category || "diğer",
    kaynak: g.source || null,
    // Kitabelerde geçen çekimli biçimler — korpustan, atıflarıyla.
    bicimler: bicimler.slice(0, 6).map((b) => ({
      runik: b.runik,
      transkripsiyon: b.transkripsiyon,
      siklik: b.siklik,
      dizeler: b.gectigiDizeler.slice(0, 3)
    })),
    // Korpusta karşılığı yoksa runik doğrulanamadı; uygulamada gösterilmemeli.
    korpustaYok: !temel,
    // Kaynak yoksa ya da model teyit istediyse işaretle.
    teyitGerek: !g.source || /teyit gerek/i.test(g.meaning) || !temel
  });
}

const cikti = P("05_Kaynak_DB/sozluk-anlamlar.json");
fs.writeFileSync(cikti, JSON.stringify(sonuc, null, 2) + "\n", "utf8");

console.log(`gelen kayıt              : ${gelen.length}`);
console.log(`anlamı olan              : ${sonuc.length}`);
console.log(`runik korpustan çözüldü  : ${korpustan}`);
console.log(`korpusta karşılığı yok   : ${korpusDisi}  (runik doğrulanamadı → gösterilmez)`);
console.log(`teyit bekleyen           : ${sonuc.filter((s) => s.teyitGerek).length}`);
console.log(`→ 05_Kaynak_DB/sozluk-anlamlar.json`);
