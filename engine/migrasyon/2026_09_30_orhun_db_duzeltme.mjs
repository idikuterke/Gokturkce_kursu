// Orhun DB'ye düzeltme yamalarını uygular (05_Kaynak_DB/orhun-db-duzeltmeler.json). Tekrar çalıştırılabilir (idempotent).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { yamaUygula, yamalariOku } from "../orhun-tara.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const P = (...s) => path.join(ROOT, ...s);
const f = P("05_Kaynak_DB/orhun-db-v1.json");
const db = JSON.parse(fs.readFileSync(f, "utf8"));
const yamalar = yamalariOku(P);
const uyg = yamaUygula(db.dizeler, yamalar);
for (const y of uyg) {
  const d = db.dizeler.find((x) => x.id === y.id);
  (d.duzeltmeler ??= []).push({ sira: y.sira, alan: y.alan || "gokturkce", eski: y.eski, yeni: y.yeni, gerekce: y.gerekce });
}
const RUNE = /[\u{10C00}-\u{10C4F}]/gu;
const tamgalar = new Set(db.dizeler.flatMap((k) => k.gokturkce.match(RUNE) || []));
db.istatistik.farkli_tamga = tamgalar.size;
db.istatistik.tamgalar = [...tamgalar].sort().map((c) => "U+" + c.codePointAt(0).toString(16).toUpperCase());
db.notlar = (db.notlar ?? []).filter((n) => !n.startsWith("DÜZELTME:"));
db.notlar.push(`DÜZELTME: ${yamalar.length} kelimelik dizgi düzeltmesi 05_Kaynak_DB/orhun-db-duzeltmeler.json'da; dize başına 'duzeltmeler' alanı.`);
fs.writeFileSync(f, JSON.stringify(db, null, 1), "utf8");
console.log(`${uyg.length} yama uygulandı (${yamalar.length - uyg.length} zaten uygulanmıştı) | farklı tamga: ${tamgalar.size}`);
