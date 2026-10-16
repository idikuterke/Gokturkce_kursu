// Tek boolean `dogrulandi` → alan bazlı `dogrulama` kaydına geçiş.
//
// Neden: `dogrulandi: false` 214 dizenin tamamında duruyordu ve hiçbir bilgi
// taşımıyordu. Oysa üç ayrı denetim var ve durumları farklı:
//   iskelet — runik ↔ transkripsiyon tutarlılığı. MAKİNE denetler
//             (orhun-tara.mjs), kapıda zorunlu, şu an temiz.
//   ceviri  — Türkçe çevirinin doğruluğu. İNSAN denetler.
//   okuma   — akademik okuma (Tekin 2003/1998, Ata 2011). İNSAN denetler.
//
// Tek bayrak bunları birbirine karıştırdığı için "hiçbir şey denetlenmemiş"
// izlenimi veriyordu. Ayrıştırınca uygulama neyin güvenilir olduğunu bilir ve
// denetlenmemiş çeviriyi kesin bilgi gibi sunmaz.
import fs from "node:fs";
import { denetle, istisnaOku } from "./orhun-tara.mjs";

const P = (p) => new URL("../" + p, import.meta.url).pathname;
const DB = P("05_Kaynak_DB/orhun-db-v1.json");

const db = JSON.parse(fs.readFileSync(DB, "utf8"));
const istisnalar = istisnaOku(P);
const rapor = denetle(db.dizeler, istisnalar);

if (rapor.hata.length) {
  console.error("Kapı kırmızı; önce sapmaları çöz:");
  rapor.hata.forEach((h) => console.error("  -", h));
  process.exit(1);
}

// Gerekçeli istisnası olan dizeler: iskelet denetimi "inceleme"de kalır.
const incelemedeki = new Set(istisnalar.map((x) => x.id));

let degisen = 0;
for (const d of db.dizeler) {
  if (d.dogrulama) continue;
  delete d.dogrulandi;
  d.dogrulama = {
    iskelet: incelemedeki.has(d.id) ? "inceleme" : "gecti",
    ceviri: "denetlenmedi",
    okuma: "denetlenmedi",
    denetleyen: null,
    kaynak: null,
    tarih: null
  };
  degisen++;
}

db.notlar = Array.isArray(db.notlar) ? db.notlar : [];
const not =
  "dogrulandi (tek boolean) kaldırıldı; yerine alan bazlı dogrulama kaydı: " +
  "iskelet (makine, orhun-tara.mjs), ceviri ve okuma (insan denetimi bekliyor).";
if (!db.notlar.includes(not)) db.notlar.push(not);

fs.writeFileSync(DB, JSON.stringify(db, null, 2) + "\n", "utf8");

const say = (alan, deger) => db.dizeler.filter((d) => d.dogrulama[alan] === deger).length;
console.log(`güncellenen dize: ${degisen}/${db.dizeler.length}`);
console.log(`  iskelet : geçti ${say("iskelet", "gecti")} | inceleme ${say("iskelet", "inceleme")}`);
console.log(`  ceviri  : denetlenmedi ${say("ceviri", "denetlenmedi")}`);
console.log(`  okuma   : denetlenmedi ${say("okuma", "denetlenmedi")}`);
