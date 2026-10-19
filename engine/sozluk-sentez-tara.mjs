#!/usr/bin/env node
/**
 * Sözlük sentezi çıkarıcı — 00_Kaynaklar/sozluk-sentez.md
 *
 * Biçim:
 *   - **kelime** 𐰑𐰴 — anlam (atıf) [Kaynak]; başka anlam [Başka Kaynak]
 *
 * KAYNAK SINIFLAMASI — projenin kendi üretimi atıf sayılmaz.
 * Kurs içeriğini ya da kendi sözlüğümüzü kaynak göstermek dairesel
 * olur: ürettiğimiz şeyi yine ürettiğimiz şeyle doğrulamış oluruz.
 *
 *   kitap   Tekin 2003 · Tekin 1998 · Ata 2011 · Tanyeri   → ATIF SAYILIR
 *   korpus  orhun-db dize glossu                            → atıf değil,
 *           çünkü bunlar sözlük tanımı değil, transkripsiyonun kendi
 *           büyük harfli karşılığı (aGIR → AĞIR). Ayrı tutulur.
 *   proje   Proje çekirdek sözlüğü · kurs sözlüğü            → ATIF SAYILMAZ
 *
 * Çıktı: docs/sozluk-sentez.json
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);

const metin = readFileSync(P("00_Kaynaklar/sozluk-sentez.md"), "utf8");
const satirlar = metin.split("\n");
const sozlukBas = satirlar.findIndex((s) => /^## Sözlük\s*$/.test(s));
if (sozlukBas < 0) { console.error("## Sözlük bölümü yok."); process.exit(1); }

/** Kaynak etiketini sınıfla. */
function kaynakSinifi(etiket) {
  if (/^Tekin 2003|^Tekin 1998|^Ata 2011|^Tanyeri/.test(etiket)) return "kitap";
  if (/^orhun-db/.test(etiket)) return "korpus";
  return "proje";          // Proje çekirdek sözlüğü, kurs sözlüğü, bilinmeyen
}

const RUNIK = /[\u{10C00}-\u{10C4F}]/u;
// - **başsözcük** [runik] — gövde
const MADDE = /^- \*\*(.+?)\*\*\s*([\u{10C00}-\u{10C4F}\s]*)—\s*(.+?)\s*$/u;

const kayitlar = [];
const sayim = { kitap: 0, korpus: 0, proje: 0 };
let atlananAnlam = 0;

for (let i = sozlukBas + 1; i < satirlar.length; i++) {
  const m = satirlar[i].match(MADDE);
  if (!m) continue;
  const [, kelime, runikHam, govde] = m;
  const runik = (runikHam || "").replace(/\s+/g, "");

  // Gövde: (anlam) [Kaynak] çiftlerinin ";" ile dizilişi. AMA ";" anlamın
  // İÇİNDE de geçiyor: "vermek; bk. **ber-** [Tekin 2003]". Düz split
  // anlamı ikiye bölüp "vermek"i düşürüyordu. Bu yüzden split değil,
  // doğrudan çift yakalanıyor.
  const anlamlar = [];
  for (const km of govde.matchAll(/([^[\]]+?)\s*\[([^\]]+)\]/g)) {
    let anlam = km[1].replace(/^[;\s]+/, "").replace(/\*\*/g, "").trim();
    const kaynak = km[2].trim();
    if (!anlam) continue;
    // Kaynakçanın kendisi anlam değildir: "…Ankara 1992, ss. 5-17…"
    if (/\bss?\.\s*\d|\b(Ankara|İstanbul|Wiesbaden|Approach|Formation)\b/.test(anlam)) {
      atlananAnlam++;
      continue;
    }
    const sinif = kaynakSinifi(kaynak);
    sayim[sinif]++;
    anlamlar.push({ anlam, kaynak, sinif });
  }
  if (!anlamlar.length) continue;

  // Çapraz gönderme ("bk. ber-") anlam değildir; gerçek anlam varsa
  // o öne alınır. Hiç gerçek anlam yoksa gönderme kalır (bilgi yine de
  // işe yarar: denetleyen nereye bakacağını görür).
  const gondermeMi = (a) => /^(bk\.|→|yuk\. bk\.|aş\. bk\.)/i.test(a.anlam);
  anlamlar.sort((a, b) => Number(gondermeMi(a)) - Number(gondermeMi(b)));

  const kitapAnlamlari = anlamlar.filter((a) => a.sinif === "kitap");
  // "yōk, yok" gibi varyantlı başsözcükler ayrı aranabilsin.
  const varyantlar = kelime.split(/\s*,\s*/).map((x) => x.trim()).filter(Boolean);

  kayitlar.push({
    kelime,
    ...(varyantlar.length > 1 ? { varyantlar } : {}),
    ...(RUNIK.test(runik) ? { runik } : {}),
    // Yalnız kitap atıflı anlamlar kullanılabilir; ötekiler kayıtta
    // görünür ama "atıflı" sayılmaz.
    anlamlar: kitapAnlamlari,
    ...(anlamlar.length > kitapAnlamlari.length
      ? { atifSayilmayan: anlamlar.filter((a) => a.sinif !== "kitap") }
      : {}),
    katman: "kitap",
    denetlendi: false,
  });
}

const kitapli = kayitlar.filter((k) => k.anlamlar.length);
const CIKTI = P("docs");
mkdirSync(CIKTI, { recursive: true });
writeFileSync(join(CIKTI, "sozluk-sentez.json"), JSON.stringify({
  kaynak: "00_Kaynaklar/sozluk-sentez.md — Tekin 2003 · Tekin 1998 · Ata 2011 · Tanyeri",
  katman: "kitap",
  uyari:
    "Yalnız kitap atıflı anlamlar kullanılır. Proje çekirdek sözlüğü ve " +
    "kurs içeriği atıf sayılmaz (dairesel); orhun-db glossları sözlük " +
    "tanımı değil, transkripsiyonun büyük harfli karşılığıdır.",
  uretim: new Date().toISOString().slice(0, 10),
  kelimeler: kitapli,
}, null, 1) + "\n");

console.log(`madde            : ${kayitlar.length}`);
console.log(`  kitap atıflı   : ${kitapli.length}   ← kullanılan`);
console.log(`  runik yazımlı  : ${kitapli.filter((k) => k.runik).length}`);
console.log(`anlam kaydı`);
console.log(`  kitap          : ${sayim.kitap}`);
console.log(`  korpus glossu  : ${sayim.korpus}   ← atıf değil`);
console.log(`  proje/kurs     : ${sayim.proje}   ← ATIF SAYILMAZ (dairesel)`);
console.log(`  kaynakça artığı: ${atlananAnlam}   ← anlam değil, elendi`);
console.log("\nyazıldı: docs/sozluk-sentez.json");
