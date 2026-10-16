// Dışarıdan gelen anlam listesini sözlüğe birleştirir.
//
// KAPI: gelen dosyada runic / transcription / attestation alanları
// değişmişse reddedilir. İlk denemede model bu alanları uydurmuştu; bir daha
// sessizce geçmesin diye denetim zorunlu.
import fs from "node:fs";
import path from "node:path";

const KOK = new URL("..", import.meta.url).pathname;
const P = (p) => path.join(KOK, p);

const gelenYol = process.argv[2];
if (!gelenYol) {
  console.error("kullanım: node engine/sozluk-birlestir.mjs <gelen-dosya.json>");
  process.exit(1);
}

const istek = JSON.parse(fs.readFileSync(P("docs/sozluk-anlam-bekleyenler.json"), "utf8"));
const gelen = JSON.parse(fs.readFileSync(gelenYol, "utf8"));

if (!Array.isArray(gelen)) {
  console.error("gelen dosya bir dizi olmalı");
  process.exit(1);
}

const beklenen = new Map(istek.map((x) => [x.transcription, x]));
const hatalar = [];
const kabul = [];

for (const g of gelen) {
  const b = beklenen.get(g.transcription);
  if (!b) {
    hatalar.push(`listede olmayan kelime: ${g.transcription}`);
    continue;
  }
  if (g.runic !== b.runic) {
    hatalar.push(`${g.transcription}: runic değiştirilmiş (${g.runic} ≠ ${b.runic})`);
    continue;
  }
  if (g.attestation !== b.attestation) {
    hatalar.push(`${g.transcription}: attestation değiştirilmiş (${g.attestation} ≠ ${b.attestation})`);
    continue;
  }
  if (!g.meaning) continue; // boş bırakılmış, sorun değil
  kabul.push({
    runic: b.runic,
    transcription: b.transcription,
    meaning: g.meaning,
    category: g.category || "diğer",
    source: g.source || null,
    attestation: b.attestation,
    teyitGerek: !g.source || /teyit gerek/i.test(g.meaning)
  });
}

console.log(`gelen: ${gelen.length} | kabul: ${kabul.length} | reddedilen: ${hatalar.length}`);
hatalar.slice(0, 15).forEach((h) => console.log("  ✗", h));
if (hatalar.length > 15) console.log(`  … ${hatalar.length - 15} hata daha`);

const teyit = kabul.filter((k) => k.teyitGerek).length;
if (teyit) console.log(`uyarı: ${teyit} kelimenin kaynağı yok — uygulamada "teyit bekliyor" olarak işaretlenecek`);

if (hatalar.length) {
  console.error("\nDoğrulanmış alanlar değiştirilmiş; birleştirme yapılmadı.");
  process.exit(1);
}

const cikti = P("05_Kaynak_DB/sozluk-anlamlar.json");
fs.writeFileSync(cikti, JSON.stringify(kabul, null, 2) + "\n", "utf8");
console.log(`→ 05_Kaynak_DB/sozluk-anlamlar.json (${kabul.length} kelime)`);
