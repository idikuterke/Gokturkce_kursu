#!/usr/bin/env node
/**
 * Denetim ekranından dışa aktarılan JSON'u kaynak veriye işler.
 *
 *   node engine/denetim-uygula.mjs <dosya>
 *   node engine/denetim-uygula.mjs <dosya> --kuru   (yazmadan rapor)
 *   node engine/denetim-uygula.mjs <dosya> --denetleyen makine
 *
 * --denetleyen: kararları kimin verdiği. Varsayılan "insan".
 *   "insan"  -> bir insan tek tek gözden geçirdi
 *   "makine" -> otomatik üretildi, insan onayı YOK
 *   Değer `dogrulama.denetleyen` / `denetleyen` alanına yazılır ve
 *   içerik üreticisi buna göre alıştırmaya alır ya da almaz.
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
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const [, , dosyaArg, ...bayraklar] = process.argv;
const kuru = bayraklar.includes("--kuru");

/**
 * Güvenilirlik katmanı. Üstteki alttakinin üzerine yazar, tersi olmaz.
 *
 *   insan (3) — bir insan tek tek gözden geçirdi
 *   kitap (2) — metin yayınından birebir çıkarıldı, sayfa atıflı
 *   model (1) — otomatik üretim
 *
 * Böylece hangi paketi önce uyguladığın önemsizleşir: kitap alıntısı
 * modelin üzerine yazar, model kitabın üzerine yazamaz, ikisi de
 * insan onayına dokunamaz.
 */
const KATMAN_SIRASI = { model: 1, kitap: 2, insan: 3 };
const KATMANLAR = Object.keys(KATMAN_SIRASI);

const DENETLEYENLER = ["insan", "makine"];
const dI = bayraklar.indexOf("--denetleyen");
const denetleyenArg = dI === -1 ? null : bayraklar[dI + 1];
if (denetleyenArg && !DENETLEYENLER.includes(denetleyenArg)) {
  console.error(`--denetleyen yalnız ${DENETLEYENLER.join(" | ")} olabilir, verilen: ${denetleyenArg}`);
  process.exit(1);
}

/**
 * Dosya adı yerine --son verilebilir: indirilenler klasöründeki en yeni
 * denetim-*.json seçilir. Windows/macOS/Linux'ta ev dizini farklı
 * olduğu ve kabuklar "~" işaretini aynı genişletmediği için yolu elle
 * yazmak sık hata kaynağı.
 */
function enYeniDisaAktarim() {
  const ev = homedir();
  const adaylar = [
    join(ev, "Downloads"),
    join(ev, "İndirilenler"),
    join(ev, "Indirilenler"),
    join(kok, "docs"),
    process.cwd(),
  ];
  let enIyi = null;
  for (const dizin of adaylar) {
    if (!existsSync(dizin)) continue;
    for (const ad of readdirSync(dizin)) {
      if (!/^denetim-.*\.json$/i.test(ad)) continue;
      const tam = join(dizin, ad);
      const t = statSync(tam).mtimeMs;
      if (!enIyi || t > enIyi.t) enIyi = { tam, t };
    }
  }
  return enIyi?.tam ?? null;
}

const kI = bayraklar.indexOf("--katman");
const katmanArg = kI === -1 ? null : bayraklar[kI + 1];
if (katmanArg && !KATMANLAR.includes(katmanArg)) {
  console.error(`--katman yalnız ${KATMANLAR.join(" | ")} olabilir, verilen: ${katmanArg}`);
  process.exit(1);
}

let dosya;
if (!dosyaArg || dosyaArg === "--son") {
  dosya = enYeniDisaAktarim();
  if (!dosya) {
    console.error("kullanım: node engine/denetim-uygula.mjs <disa-aktarim.json> [--kuru] [--denetleyen insan|makine]");
    console.error("          node engine/denetim-uygula.mjs --son   (indirilenlerdeki en yeni denetim-*.json)");
    console.error("\nİndirilenler klasöründe denetim-*.json bulunamadı.");
    process.exit(1);
  }
  console.log(`seçilen dosya: ${dosya}\n`);
} else {
  dosya = resolve(process.cwd(), dosyaArg);
  if (!existsSync(dosya)) {
    console.error(`dosya yok: ${dosya}`);
    console.error("ipucu: dosya adı yerine --son yazarsan indirilenlerdeki en yeni dışa aktarım seçilir.");
    process.exit(1);
  }
}

const paket = JSON.parse(readFileSync(dosya, "utf8"));

// Öncelik: komut satırı > paketin kendi beyanı > denetleyenden türetme.
const katman =
  katmanArg ??
  (KATMANLAR.includes(paket.katman) ? paket.katman : null) ??
  (denetleyenArg === "makine" ? "model" : "insan");

// denetleyen katmandan türer: yalnız "insan" katmanı insan onayıdır.
// Böylece kitap paketleri için --denetleyen yazmak gerekmez.
const denetleyen = denetleyenArg ?? (katman === "insan" ? "insan" : "makine");
if ((denetleyen === "insan") !== (katman === "insan")) {
  console.error(`tutarsız: katman "${katman}" ile denetleyen "${denetleyen}" birlikte kullanılamaz.`);
  console.error(`  insan onayı  → --katman insan (varsayılan)`);
  console.error(`  kitap/model  → --denetleyen makine`);
  process.exit(1);
}
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
const korunan = [];

/**
 * Mevcut kayıt daha güvenilir bir katmandan geliyorsa korunur.
 * Eşit katmanda üzerine yazılır (aynı hattın yeniden koşusu).
 */
function korunuyorMu(mevcut, id) {
  const mevcutKatman =
    mevcut?.katman ?? (mevcut?.denetleyen === "insan" ? "insan" : mevcut ? "model" : null);
  if (!mevcutKatman) return false;
  if (KATMAN_SIRASI[mevcutKatman] > KATMAN_SIRASI[katman]) {
    korunan.push(`${id} (${mevcutKatman} > ${katman})`);
    return true;
  }
  return false;
}

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
    if (korunuyorMu(d.dogrulama, k.id)) continue;
    const tur = k.tur === "gunumuz_okumasi" ? "gunumuz_okumasi" : "gecti";
    d.turkce = k.metin.trim();
    d.dogrulama = {
      ...d.dogrulama,
      ceviri: tur,
      denetleyen,
      katman,
      not: k.not?.trim() || null,
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
    if (korunuyorMu(onayliIndeks.get(k.id), k.id)) continue;
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
      denetleyen,
      katman,
      not: k.not?.trim() || null,
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
    if (korunuyorMu(kayit, k.id)) continue;
    kayit.denetleyen = denetleyen;
    kayit.katman = katman;
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
console.log(`katman     : ${katman}  (insan > kitap > model)`);
console.log(`denetleyen : ${denetleyen}${denetleyen === "makine" ? "  ← insan onayı YOK, alıştırmaya girmez" : ""}`);
console.log(`işlenen    : ${yazilan} onay, ${atlanan} red`);
if (korunan.length) {
  console.log(`\nKORUNDU: ${korunan.length} kayıt — daha güvenilir katmandan geliyor, üzerine yazılmadı`);
  for (const id of korunan.slice(0, 10)) console.log(`  ${id}`);
}
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
