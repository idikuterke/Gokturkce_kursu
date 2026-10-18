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
// --gorulen <gundelik.json>: denetim sırasında ekranda DURAN yazımlar.
// Paketin kendisi bunu taşımıyorsa (eski sürüm dışa aktarımı) buradan alınır.
// indexOf -1 dönerse argv[0]'ı yakalar ve dosya yolunu süzerdi; bayrak
// gerçekten verildiyse okunur.
const gorulenYeri = argv.indexOf("--gorulen");
const gorulenArg = gorulenYeri >= 0 ? argv[gorulenYeri + 1] : undefined;
const gorulenHarita = new Map();
if (gorulenArg) {
  for (const k of JSON.parse(readFileSync(resolve(gorulenArg), "utf8")).kelimeler ?? []) {
    gorulenHarita.set(k.kelime, k.runik);
  }
}
// gorulenYeri -1 iken "gorulenYeri + 1" 0 olur ve dosya yolunu elerdi.
const atlanacak = gorulenYeri >= 0 ? gorulenYeri + 1 : -1;
let yol = argv.filter((a, i) => !a.startsWith("--") && i !== atlanacak)[0];

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

const gorulenRunikOku = (k) =>
  (k.gorulenRunik || k.surum || gorulenHarita.get(String(k.id).replace(/^gundelik-/, "")) || "").trim();

const paket = JSON.parse(readFileSync(resolve(yol), "utf8"));
if (paket.kuyruk !== "gundelik") {
  console.error(`Bu paket "${paket.kuyruk}" kuyruğuna ait. Gündelik paketi bekleniyordu.`);
  console.error("Çeviri paketleri için: node engine/denetim-uygula.mjs");
  process.exit(1);
}

const mevcut = existsSync(ISTISNA)
  ? JSON.parse(readFileSync(ISTISNA, "utf8"))
  : { surum: "gundelik-istisna-v1", kayitlar: {} };

const say = { onay: 0, duzeltme: 0, cikarilan: 0, red: 0, hatali: 0, yeniden: 0, alternatif: 0 };
const hatalar = [];
const yeniden = [];

for (const k of paket.kararlar ?? []) {
  // id "gundelik-sarı" biçiminde; kelime son parçadır.
  const kelime = String(k.id).replace(/^gundelik-/, "");
  if (!kelime) { hatalar.push(`boş id: ${k.id}`); say.hatali++; continue; }

  // ── ÇOK BİÇİMLİ DÜZELTME ───────────────────────────────────────────────
  // Denetleyen bazen birden çok geçerli yazım veriyor:
  //   "𐰏𐰇𐰚:𐰏𐰜"            açık yazım ve ligatürlü yazım
  //   "𐰖𐰃𐰡𐰔 veya 𐰖𐰃𐰞𐰑𐰔"   ld ligatürlü ve ayrık
  // İlki asıl yazım, kalanı KABUL EDİLEN ALTERNATİF olur. Alternatif
  // alıştırmada çeldirici olarak kullanılmaz — iki şık da doğru olurdu.
  const RUNIK = /^[\u{10C00}-\u{10C4F}]+$/u;
  const bicimler = (k.runikDuzeltme ?? "")
    .split(/\s+veya\s+|\s*[:\/]\s*|\s*,\s*/u)
    .map((x) => x.trim())
    .filter((x) => RUNIK.test(x));
  const duzeltme = bicimler[0] ?? "";
  const alternatifler = bicimler.slice(1);
  if ((k.runikDuzeltme ?? "").trim() && !bicimler.length) {
    hatalar.push(`${kelime}: runik alanı okunamadı → ${JSON.stringify(k.runikDuzeltme)}`);
    say.hatali++;
    continue;
  }
  let sonuc;

  if (k.tur === "cikarilsin") {
    // Kelimeyi modülden düşürmek YALNIZ açık istekle olur.
    sonuc = "cikarilsin";
  } else if (duzeltme && gorulenRunikOku(k) && duzeltme === gorulenRunikOku(k)) {
    // İlk biçim ekrandakiyle aynı: yazım doğruymuş, yanına alternatif eklenmiş.
    sonuc = "dogru";
  } else if (duzeltme) {
    sonuc = "duzeltildi";
  } else if (k.karar === "red" || k.tur === "duzeltildi") {
    // "Yanlış" denmiş ama doğrusu Runik düzeltmesi alanına yazılmamış.
    // İki şey YAPILMAZ: kelimeyi silmek (istenen o değil) ve "doğru"
    // diye mühürlemek (bulunan hata yutulur). Mührü vermeyiz, kelime
    // listede kalır ve yeniden denetime girer.
    sonuc = "yeniden";
  } else {
    sonuc = "dogru";
  }

  // SESSİZ KAYIP KORUMASI.
  // "Düzeltildi" işaretlenip runik alanı boş bırakılmışsa düzeltme
  // nereye yazıldı belli değil — genellikle not alanına. Bu kaydı
  // "doğru" diye mühürlemek insanın bulduğu hatayı yutar. Burada
  // durur, kelimeyi sayar ve notu ekrana basarız.
  if (sonuc === "yeniden") {
    const yazi = (k.metin || k.not || "").trim();
    yeniden.push(`${kelime}${yazi ? `\n      not: ${yazi}` : ""}`);
  }

  if (sonuc === "duzeltildi" && !duzeltme) {
    const yazi = (k.metin || k.not || "").trim();
    hatalar.push(
      `${kelime}: "düzeltildi" işaretli ama Runik düzeltmesi alanı boş` +
        (yazi ? `\n      not: ${yazi}` : "")
    );
    say.hatali++;
    continue;
  }

  const gorulen = gorulenRunikOku(k);

  mevcut.kayitlar[kelime] = {
    sonuc,
    ...(alternatifler.length ? { alternatifler } : {}),
    // Denetleyenin ekranda GÖRDÜĞÜ yazım. İmla kuralı sonradan
    // düzeltilirse üretilen yazım bundan ayrılır; o zaman mühür
    // düşer ve kelime yeniden denetime girer (gundelik-uret.mjs).
    ...(gorulen ? { gorulenRunik: gorulen } : {}),
    ...(duzeltme ? { runik: duzeltme } : {}),
    ...(k.not?.trim() ? { not: k.not.trim() } : {}),
    kaynak: k.kaynak || "00_Kaynaklar/imla_kurallari_13_madde.md",
    denetleyen: "insan",
    tarih: k.tarih ?? new Date().toISOString(),
  };

  if (alternatifler.length) say.alternatif++;
  if (sonuc === "dogru") say.onay++;
  else if (sonuc === "duzeltildi") say.duzeltme++;
  else if (sonuc === "yeniden") say.yeniden++;
  else say.cikarilan++;
  if (k.karar === "red") say.red++;
}

mevcut.guncelleme = new Date().toISOString().slice(0, 10);

console.log(`karar            : ${(paket.kararlar ?? []).length}`);
console.log(`  yazım doğru    : ${say.onay}`);
console.log(`  düzeltildi     : ${say.duzeltme}`);
console.log(`  çıkarılacak    : ${say.cikarilan}`);
if (say.alternatif) console.log(`  alternatif yazım: ${say.alternatif} kelimede ikinci biçim kabul edildi`);
if (say.yeniden) {
  console.log(`  YENİDEN denetim: ${say.yeniden}  ← yanlış denmiş, doğrusu yazılmamış`);
  for (const y of yeniden) console.log(`    ${y}`);
}
if (gorulenHarita.size) console.log(`  görülen yazım  : ${gorulenHarita.size} kelimeden alındı (--gorulen)`);
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
