#!/usr/bin/env node
/**
 * Gündelik yazım denetimini uygular.
 *
 * Girdi: denetim ekranının "Gündelik yazım" sekmesinden indirilen
 *        denetim-gundelik-YYYY-AA-GG.json
 * Çıktı: 05_Kaynak_DB/gundelik-istisnalar.json
 *
 * Bu dosyayı `engine/gundelik-uret.mjs` okur: onaylanan yazım insan
 * mührü alır, düzeltilen yazım kuralın ürettiğinin yerine geçer,
 * çıkarılan kelime modülden düşer.
 *
 * NEDEN AYRI UYGULAYICI: denetim-uygula.mjs dize/cümlecik/sözlük
 * çevirilerini işler; oradaki kapı "çeviri doğrulandı mı" sorusuna
 * göre kurulu. Buradaki soru farklı: "kuraldan üretilen YAZIM doğru mu".
 * İkisini tek dosyada toplamak iki kapıyı da bulanıklaştırırdı.
 *
 * Kullanım:
 *   node engine/gundelik-denetim-uygula.mjs <paket.json> [--kuru]
 *   node engine/gundelik-denetim-uygula.mjs --son            # en yeni paketi bul
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(KOK, ...p);
const ISTISNA = P("05_Kaynak_DB/gundelik-istisnalar.json");

const argv = process.argv.slice(2);
const kuru = argv.includes("--kuru");
const sonMu = argv.includes("--son");
let yol = argv.find((a) => !a.startsWith("--"));

/** --son: indirilenler ve proje kökünde en yeni denetim-gundelik-*.json. */
function enYeniPaket() {
  const dizinler = [
    join(homedir(), "Downloads"),
    join(homedir(), "İndirilenler"),
    join(homedir(), "Indirilenler"),
    P("docs"),
    process.cwd(),
  ];
  let en = null;
  for (const d of dizinler) {
    if (!existsSync(d)) continue;
    for (const ad of readdirSync(d)) {
      if (!/^denetim-gundelik-.*\.json$/.test(ad)) continue;
      const tam = join(d, ad);
      const t = statSync(tam).mtimeMs;
      if (!en || t > en.t) en = { yol: tam, t };
    }
  }
  return en?.yol ?? null;
}

if (sonMu) {
  yol = enYeniPaket();
  if (!yol) {
    console.error("denetim-gundelik-*.json bulunamadı (Downloads / İndirilenler / docs / bu dizin).");
    process.exit(1);
  }
  console.log(`paket: ${yol}\n`);
}

if (!yol) {
  console.error("Kullanım: node engine/gundelik-denetim-uygula.mjs <paket.json> [--kuru]");
  console.error("          node engine/gundelik-denetim-uygula.mjs --son");
  process.exit(1);
}

const paket = JSON.parse(readFileSync(resolve(yol), "utf8"));
if (paket.kuyruk !== "gundelik") {
  console.error(`Bu paket "${paket.kuyruk}" kuyruğuna ait. Gündelik paketi bekleniyordu.`);
  console.error("Çeviri paketleri için: node engine/denetim-uygula.mjs");
  process.exit(1);
}

const mevcut = existsSync(ISTISNA)
  ? JSON.parse(readFileSync(ISTISNA, "utf8"))
  : { surum: "gundelik-istisna-v1", kayitlar: {} };

const say = { onay: 0, duzeltme: 0, cikarilan: 0, red: 0, hatali: 0 };
const hatalar = [];

for (const k of paket.kararlar ?? []) {
  // id "gundelik-sarı" biçiminde; kelime son parçadır.
  const kelime = String(k.id).replace(/^gundelik-/, "");
  if (!kelime) { hatalar.push(`boş id: ${k.id}`); say.hatali++; continue; }

  const duzeltme = (k.runikDuzeltme ?? "").trim();
  let sonuc;

  if (k.karar === "red") {
    // Red + düzeltme = düzeltildi. Red ama düzeltme yoksa yazım
    // yanlış sayılır ve kelime modülden düşer: yanlış bilinen bir
    // yazımı "belki doğrudur" diye öğretmeyiz.
    sonuc = duzeltme ? "duzeltildi" : "cikarilsin";
  } else if (k.tur === "cikarilsin") {
    sonuc = "cikarilsin";
  } else if (duzeltme) {
    sonuc = "duzeltildi";
  } else {
    sonuc = "dogru";
  }

  if (sonuc === "duzeltildi" && !duzeltme) {
    hatalar.push(`${kelime}: düzeltme işaretli ama runik alanı boş`);
    say.hatali++;
    continue;
  }

  mevcut.kayitlar[kelime] = {
    sonuc,
    ...(duzeltme ? { runik: duzeltme } : {}),
    ...(k.not?.trim() ? { not: k.not.trim() } : {}),
    kaynak: k.kaynak || "00_Kaynaklar/imla_kurallari_13_madde.md",
    denetleyen: "insan",
    tarih: k.tarih ?? new Date().toISOString(),
  };

  if (sonuc === "dogru") say.onay++;
  else if (sonuc === "duzeltildi") say.duzeltme++;
  else say.cikarilan++;
  if (k.karar === "red") say.red++;
}

mevcut.guncelleme = new Date().toISOString().slice(0, 10);

console.log(`karar            : ${(paket.kararlar ?? []).length}`);
console.log(`  yazım doğru    : ${say.onay}`);
console.log(`  düzeltildi     : ${say.duzeltme}`);
console.log(`  çıkarılacak    : ${say.cikarilan}`);
if (hatalar.length) {
  console.log(`\nişlenemeyen ${hatalar.length}:`);
  for (const h of hatalar) console.log(`  ${h}`);
}

if (kuru) {
  console.log("\n--kuru: dosya yazılmadı.");
  process.exit(0);
}

mkdirSync(dirname(ISTISNA), { recursive: true });
writeFileSync(ISTISNA, JSON.stringify(mevcut, null, 2) + "\n");
console.log(`\nyazıldı: 05_Kaynak_DB/gundelik-istisnalar.json (toplam ${Object.keys(mevcut.kayitlar).length} kayıt)`);
console.log("şimdi:   node engine/gundelik-uret.mjs");
