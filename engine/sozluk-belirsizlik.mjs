#!/usr/bin/env node
/**
 * SÖZLÜK KUYRUĞU BELİRSİZLİK TARAMASI
 *
 * Ön dolgu motoru (sozluk-istek-listesi.mjs) bir biçimi sözlükte TAM
 * bulduğunda orada durur. Oysa aynı biçim başka bir maddenin çekimli hâli de
 * olabilir — motor bunu hiç görmez ve tek adayı varmış gibi ön dolgu yazar.
 *
 * Gerçek örnek, kuyruğun ilk maddesi:
 *   TİR  → "tir-" (dermek, toplamak)  [Tekin 2003, s. 254]
 *   ama tanık KT-D-9: "... KaZGaNURMeN : TİR : eRMiŞ"
 *   ve iki sözcük önce "TİMiŞ" geçiyor — ikisi de "ti-" (demek) kökünden.
 *   Burada TİR = ti- + -r (geniş zaman), "der". Ön dolgu yanlış.
 *
 * Bu betik anlam ÜRETMEZ, yalnız "burada birden çok okuma var" der:
 * her tam eşleşme için biçimi kök + çekim eki diye de çözmeyi dener ve
 * başka bir başsözcüğe varıyorsa maddeyi işaretler.
 *
 *   node engine/sozluk-belirsizlik.mjs           → rapor + kuyruğa işaret
 *   node engine/sozluk-belirsizlik.mjs --kuru    → yalnız rapor
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(kok, ...p);
const kuru = process.argv.includes("--kuru");

const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "ŋ", "ñ": "ŋ", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g",
}));
const sadelestir = (x) =>
  [...String(x).toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .join("")
    .replace(/n[yg]|yn/g, "ŋ")
    .replace(/[^a-zçğıöşüŋ]/g, "");

const oku = (yol, alan) => {
  try {
    return JSON.parse(fs.readFileSync(P(yol), "utf8"))[alan] ?? [];
  } catch {
    return [];
  }
};

const sentez = oku("docs/sozluk-sentez.json", "kelimeler");
const ekler = oku("docs/ata-ekler.json", "ekler");
if (!sentez.length) {
  console.error("docs/sozluk-sentez.json okunamadı — önce `npm run sozluk:sentez`.");
  process.exit(1);
}

/**
 * Yalnız ÇEKİM ekleri: yapım eki yeni bir sözcük kurar, o ayrı madde olur.
 * Ek türü başsözcükteki işaretten okunur — "+" isim eki, "-" fiil eki — ve
 * ünlü uyumu değişkeleri ön dolgu motorundakiyle aynı biçimde üretilir ki
 * tarama motordan daha gevşek davranıp uydurma aday çıkarmasın.
 */
const yapimMi = (islev) => /yapım|türet/i.test(String(islev ?? ""));
const UYUM = [
  ["a", "e"], ["ı", "i", "u", "ü"], ["o", "ö"],
  ["d", "t"], ["g", "k"], ["b", "p"],
];
function degiskeler(ek) {
  let kume = [""];
  for (const harf of ek) {
    const oymak = UYUM.find((u) => u.includes(harf));
    kume = kume.flatMap((on) => (oymak ?? [harf]).map((h) => on + h));
  }
  return kume;
}
const ekKumesi = (suz) => {
  const k = new Set();
  for (const e of ekler.filter(suz)) {
    for (const d of degiskeler(sadelestir(e.ek))) if (d && d.length <= 4) k.add(d);
  }
  return k;
};
const ISIM_EKI = ekKumesi((e) => e.ek.startsWith("+") && !yapimMi(e.islev));
const FIIL_EKI = ekKumesi((e) => e.ek.startsWith("-") && !yapimMi(e.islev));

/** başsözcük anahtarı → maddeler. "ti-" hem "ti" hem "ti-" ile aranabilsin. */
const harita = new Map();
for (const madde of sentez) {
  const ham = String(madde.kelime ?? "");
  const fiilMi = ham.trim().endsWith("-");
  for (const parca of ham.split(/\s*,\s*/)) {
    const govde = parca.trim().replace(/-$/, "").replace(/\([^)]*\)/g, "");
    const k = sadelestir(govde);
    if (!k) continue;
    if (!harita.has(k)) harita.set(k, []);
    harita.get(k).push({ kelime: ham, fiilMi, anlamlar: madde.anlamlar ?? [] });
  }
}

const ilkAnlam = (m) => m.anlamlar?.[0]?.anlam ?? "(anlamsız madde)";

/** Biçim, başka bir maddenin çekimli hâli olabilir mi? */
function cekimAdaylari(bicim, haricKelime) {
  const bulunan = [];
  for (let n = 1; n <= 4 && n < bicim.length; n++) {
    const ek = bicim.slice(-n);
    const govde = bicim.slice(0, -n);
    if (govde.length < 2) continue;
    for (const aday of harita.get(govde) ?? []) {
      if (aday.kelime === haricKelime) continue;
      // Ek, kökün türüne uymalı: fiil kökü fiil eki, isim kökü isim eki alır.
      if (!(aday.fiilMi ? FIIL_EKI : ISIM_EKI).has(ek)) continue;
      bulunan.push({ kok: aday.kelime, ek, anlam: ilkAnlam(aday), fiilMi: aday.fiilMi });
    }
  }
  // Aynı kök birden çok ek bölünmesiyle çıkabilir; bir kez yaz.
  const gorulen = new Set();
  return bulunan.filter((a) => !gorulen.has(a.kok) && gorulen.add(a.kok));
}

const kuyrukYolu = "docs/sozluk-anlam-bekleyenler.json";
const kuyruk = JSON.parse(fs.readFileSync(P(kuyrukYolu), "utf8"));

let isaretli = 0;
for (const madde of kuyruk) {
  delete madde.belirsizlik;
  const oneri = madde.oneri;
  if (!oneri || oneri.eslesme !== "tam") continue;

  const bicim = sadelestir(madde.transcription);
  // Ön dolgunun geldiği maddeyi dışla: aradığımız BAŞKA bir okuma.
  const kendi = (harita.get(bicim) ?? []).find((a) =>
    (a.anlamlar ?? []).some((x) => x.anlam === oneri.meaning)
  );
  const adaylar = cekimAdaylari(bicim, kendi?.kelime);
  if (!adaylar.length) continue;

  madde.belirsizlik = {
    neden: "biçim hem başsözcük hem çekimli hâl olabilir",
    secilen: { anlam: oneri.meaning, kaynak: oneri.source },
    digerOkumalar: adaylar.map((a) => ({
      cozumleme: `${a.kok} + -${a.ek}`,
      anlam: a.anlam,
    })),
  };
  isaretli++;
}

const satirlar = [];
for (const m of kuyruk) {
  if (!m.belirsizlik) continue;
  satirlar.push(
    `\n${m.transcription}  (${m.runic})  ${m.frequency}× · tanık ${m.attestation}\n` +
      `  seçilen : ${m.belirsizlik.secilen.anlam}\n` +
      m.belirsizlik.digerOkumalar
        .map((o) => `  ya da  : ${o.cozumleme} → ${o.anlam}\n`)
        .join("") +
      `  bağlam  : ${String(m.attestation_text).slice(0, 150)}…`
  );
}

console.log(
  `kuyruk ${kuyruk.length} madde | tam eşleşmeli ön dolgu ` +
    `${kuyruk.filter((m) => m.oneri?.eslesme === "tam").length} | ` +
    `birden çok okuması olan ${isaretli}`
);
console.log(satirlar.join("\n"));

if (!kuru) {
  fs.writeFileSync(P(kuyrukYolu), JSON.stringify(kuyruk, null, 2) + "\n", "utf8");
  console.log(`\n→ ${kuyrukYolu} güncellendi (belirsizlik alanı)`);
}
