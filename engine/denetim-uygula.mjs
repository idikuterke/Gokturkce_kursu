#!/usr/bin/env node
/**
 * Denetim ekranından dışa aktarılan JSON'u kaynak veriye işler.
 *
 *   node engine/denetim-uygula.mjs ~/Downloads/denetim-dize-2026-10-16.json
 *   node engine/denetim-uygula.mjs <dosya> --kuru   (yazmadan rapor)
 *
 * Kuyruklar:
 *   dize      -> 05_Kaynak_DB/orhun-db-v1.json  (dogrulama.ceviri + turkce)
 *   cumlecik  -> 05_Kaynak_DB/cumlecikler-onayli.json
 *   sozluk    -> 05_Kaynak_DB/sozluk-anlamlar.json
 *
 * Kurallar (güvenlik kapısıyla aynı):
 *   - kaynaksız onay reddedilir
 *   - metinsiz onay reddedilir
 *   - runik düzeltmesi varsa uygulanmaz, ayrı rapora yazılır (insan bakar)
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const [, , dosyaArg, ...bayraklar] = process.argv;
const kuru = bayraklar.includes("--kuru");

if (!dosyaArg) {
  console.error("kullanım: node engine/denetim-uygula.mjs <disa-aktarim.json> [--kuru]");
  process.exit(1);
}
const dosya = resolve(process.cwd(), dosyaArg);
if (!existsSync(dosya)) {
  console.error(`dosya yok: ${dosya}`);
  process.exit(1);
}

const paket = JSON.parse(readFileSync(dosya, "utf8"));
const kuyruk = paket.kuyruk;
const kararlar = paket.kararlar ?? [];
if (!["dize", "cumlecik", "sozluk"].includes(kuyruk)) {
  console.error(`bilinmeyen kuyruk: ${kuyruk}`);
  process.exit(1);
}

const okuJson = (p) => JSON.parse(readFileSync(join(kok, p), "utf8"));
const yazJson = (p, v) => {
  if (kuru) return;
  writeFileSync(join(kok, p), JSON.stringify(v, null, 2) + "\n");
};

const reddedilen = [];
const runikUyarilari = [];

/** Onay kaydı geçerli mi? */
function gecerliOnay(k) {
  if (k.karar !== "onay") return false;
  if (!k.kaynak?.trim()) {
    reddedilen.push({ id: k.id, sebep: "kaynak boş" });
    return false;
  }
  if (!k.metin?.trim()) {
    reddedilen.push({ id: k.id, sebep: "metin boş" });
    return false;
  }
  if (k.runikDuzeltme?.trim()) {
    runikUyarilari.push({ id: k.id, onerilen: k.runikDuzeltme.trim(), not: k.not ?? "" });
  }
  return true;
}

let yazilan = 0;
let atlanan = 0;

if (kuyruk === "dize") {
  const db = okuJson("05_Kaynak_DB/orhun-db-v1.json");
  const indeks = new Map(db.dizeler.map((d) => [d.id, d]));
  const bugun = new Date().toISOString().slice(0, 10);
  for (const k of kararlar) {
    const d = indeks.get(k.id);
    if (!d) {
      reddedilen.push({ id: k.id, sebep: "dize bulunamadı" });
      continue;
    }
    if (k.karar === "red") {
      d.dogrulama = { ...d.dogrulama, ceviri: "hatali", kaynak: k.not || null, tarih: bugun };
      atlanan++;
      continue;
    }
    if (!gecerliOnay(k)) continue;
    const tur = k.tur === "gunumuz_okumasi" ? "gunumuz_okumasi" : "gecti";
    d.turkce = k.metin.trim();
    d.dogrulama = {
      ...d.dogrulama,
      ceviri: tur,
      denetleyen: "insan",
      kaynak: k.kaynak.trim(),
      tarih: bugun,
    };
    yazilan++;
  }
  yazJson("05_Kaynak_DB/orhun-db-v1.json", db);
}

if (kuyruk === "cumlecik") {
  const adaylar = okuJson("docs/cumlecik-adaylari.json");
  const indeks = new Map(adaylar.cumlecikler.map((c) => [c.id, c]));
  const yol = "05_Kaynak_DB/cumlecikler-onayli.json";
  const mevcut = existsSync(join(kok, yol)) ? okuJson(yol) : { surum: "cumlecik-v1", cumlecikler: [] };
  const onayliIndeks = new Map(mevcut.cumlecikler.map((c) => [c.id, c]));
  for (const k of kararlar) {
    const aday = indeks.get(k.id);
    if (!aday) {
      reddedilen.push({ id: k.id, sebep: "cümlecik adayı bulunamadı" });
      continue;
    }
    if (k.karar === "red") {
      onayliIndeks.delete(k.id);
      atlanan++;
      continue;
    }
    if (!gecerliOnay(k)) continue;
    onayliIndeks.set(k.id, {
      id: aday.id,
      dizeId: aday.dizeId,
      kelimeAraligi: aday.kelimeAraligi,
      runik: aday.runik,
      transkripsiyon: aday.transkripsiyon,
      kelimeSayisi: aday.kelimeSayisi,
      turkce: k.metin.trim(),
      tur: k.tur === "gunumuz_okumasi" ? "gunumuz_okumasi" : "ceviri",
      kaynak: k.kaynak.trim(),
      denetleyen: "insan",
      tarih: new Date().toISOString().slice(0, 10),
    });
    yazilan++;
  }
  yazJson(yol, {
    surum: "cumlecik-v1",
    aciklama: "İnsan onayından geçmiş cümlecikler. Yalnız bunlar alıştırmaya girer.",
    guncelleme: new Date().toISOString().slice(0, 10),
    cumlecikler: [...onayliIndeks.values()].sort((a, b) => a.id.localeCompare(b.id)),
  });
}

if (kuyruk === "sozluk") {
  const yol = "05_Kaynak_DB/sozluk-anlamlar.json";
  const mevcut = okuJson(yol);
  const liste = Array.isArray(mevcut) ? mevcut : mevcut.kelimeler;
  const indeks = new Map(liste.map((k) => [k.transcription ?? k.transkripsiyon, k]));
  for (const k of kararlar) {
    if (k.karar === "red") {
      atlanan++;
      continue;
    }
    if (!gecerliOnay(k)) continue;
    const kayit = indeks.get(k.id) ?? { transcription: k.id };
    kayit.meaning = k.metin.trim();
    kayit.category = k.tur || "diger";
    kayit.source = k.kaynak.trim();
    indeks.set(k.id, kayit);
    yazilan++;
  }
  const yeni = [...indeks.values()];
  yazJson(yol, Array.isArray(mevcut) ? yeni : { ...mevcut, kelimeler: yeni });
}

console.log(`kuyruk     : ${kuyruk}${kuru ? "  (KURU ÇALIŞMA — hiçbir şey yazılmadı)" : ""}`);
console.log(`işlenen    : ${yazilan} onay, ${atlanan} red`);
if (reddedilen.length) {
  console.log(`\nkabul edilmeyen ${reddedilen.length} kayıt:`);
  for (const r of reddedilen) console.log(`  ${r.id}: ${r.sebep}`);
}
if (runikUyarilari.length) {
  console.log(`\nRUNİK DÜZELTME ÖNERİSİ (${runikUyarilari.length}) — otomatik uygulanmadı:`);
  for (const r of runikUyarilari) console.log(`  ${r.id}: ${r.onerilen}  ${r.not}`);
  console.log("  Korpus esastır. Kabul edeceksen elle düzenle, sonra: node engine/kapi.mjs");
}
if (!kuru) {
  console.log("\nsırada: node engine/icerik-uret.mjs && node engine/kapi.mjs");
}
