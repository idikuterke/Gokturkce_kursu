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
      source: null                          // ← DOLDURULACAK (eser, sayfa)
    };
  });

const cikti = P("docs/sozluk-anlam-bekleyenler.json");
fs.writeFileSync(cikti, JSON.stringify(istek, null, 2) + "\n", "utf8");
console.log(`sıklık >= ${esik} | ${istek.length} kelime → docs/sozluk-anlam-bekleyenler.json`);
