#!/usr/bin/env node
/**
 * Aysu Ata, "Orhun Türkçesi" (AÖF, 2011) — sözcük çözümlemesi çıkarıcı.
 *
 * Kitabın her metin ünitesinin sonunda "Metinde Geçen Sözcüklerin
 * Çözümlemeleri" başlığı altında sözcük + anlam + ek dökümü var:
 *
 *   sab “söz” +ım [1. tekil kişi iyelik eki] +(ı)n [belirtme durumu eki]
 *   eşid- “işitmek” –gil [2. tekil kişi emir eki]
 *
 * Buradan iki şey üretilir:
 *   docs/ata-sozluk.json       sözcük → anlam  (sözlük kuyruğuna aday)
 *   docs/ata-ekler.json        ek → işlev      (gramer notlarına aday)
 *
 * HİÇBİRİ DOĞRUDAN KULLANILMAZ. Katman "kitap": sayfa atıflı yayın
 * alıntısıdır, insan denetiminden geçmeden alıştırmaya girmez.
 *
 * Kullanım: node engine/ata-tara.mjs <kitap.txt>
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const yol = process.argv[2];
if (!yol) { console.error("Kullanım: node engine/ata-tara.mjs <kitap.txt>"); process.exit(1); }

const satirlar = readFileSync(resolve(yol), "utf8").split("\n");

// Sayfa etiketi [s. N] izlenir ki her kayda sayfa atfı düşelim.
let sayfa = null;
const sayfaNo = (s) => { const m = s.match(/^\[s\.\s*(\d+)\]/); return m ? Number(m[1]) : null; };

// Çözümleme bölümleri: başlıktan sonraki blok.
const bolumler = [];
for (let i = 0; i < satirlar.length; i++) {
  if (/Metinde Geçen Sözcüklerin Çözümlemeleri\s*:?\s*$/.test(satirlar[i])) bolumler.push(i);
}

/** Satır sonunda kesilen çözümlemeler için: girintili devam satırlarını birleştir. */
function blokOku(bas) {
  const parcalar = [];
  let tampon = "";
  for (let i = bas + 1; i < satirlar.length; i++) {
    const ham = satirlar[i];
    const s = ham.trim();
    const p = sayfaNo(s);
    if (p !== null) { sayfa = p; continue; }
    if (/^\d+$/.test(s)) continue;                       // sayfa numarası
    if (/Metinde Geçen Sözcüklerin Çözümlemeleri/.test(s)) break;
    if (/^(ÜNİTE|Özet|Kendimizi|Sıra Sizde|Yararlanılan|Okuma)/i.test(s)) break;
    // Girintili satır öncekinin devamıdır.
    if (/^\s{4,}/.test(ham) && tampon) { tampon += " " + s; continue; }
    if (tampon) parcalar.push({ metin: tampon, sayfa });
    tampon = s;
  }
  if (tampon) parcalar.push({ metin: tampon, sayfa });
  return parcalar;
}

const sozluk = new Map();
const ekler = new Map();
// Çözümleme satırı:  başsözcük “anlam” [kalan: ek dökümü]
const GIRDI = /^([a-zçğıöşüŋé][a-zçğıöşüŋé()\-]*)\s+[“"]([^”"]+)[”"](.*)$/;
// Ek:  +ım [1. tekil kişi iyelik eki]   /   –gil [2. tekil kişi emir eki]
const EK = /([+\-–])\(?([a-zçğıöşüŋé)(]+)\)?\s*\[([^\]]*?eki[^\]]*)\]/g;

let satirSayisi = 0;
for (const bas of bolumler) {
  for (const { metin, sayfa: sy } of blokOku(bas)) {
    const m = metin.match(GIRDI);
    if (!m) continue;
    satirSayisi++;
    const [, kelime, anlam, kalan] = m;
    const anahtar = kelime.toLocaleLowerCase("tr");
    if (!sozluk.has(anahtar)) {
      sozluk.set(anahtar, {
        kelime,
        anlam: anlam.trim(),
        kaynak: `Ata, Orhun Türkçesi, AÖF 2011, s. ${sy ?? "?"}`,
        katman: "kitap",
        denetlendi: false
      });
    }
    for (const e of (kalan ?? "").matchAll(EK)) {
      const [, isaret, bicim, islev] = e;
      const ekAnahtar = `${isaret === "+" ? "+" : "-"}${bicim}`;
      if (!ekler.has(ekAnahtar)) {
        ekler.set(ekAnahtar, {
          ek: ekAnahtar,
          islev: islev.trim(),
          ornek: `${kelime} ${ekAnahtar}`,
          kaynak: `Ata, Orhun Türkçesi, AÖF 2011, s. ${sy ?? "?"}`,
          katman: "kitap",
          denetlendi: false
        });
      }
    }
  }
}

const CIKTI = join(KOK, "docs");
mkdirSync(CIKTI, { recursive: true });
const sozlukListe = [...sozluk.values()].sort((a, b) => a.kelime.localeCompare(b.kelime, "tr"));
const ekListe = [...ekler.values()].sort((a, b) => a.ek.localeCompare(b.ek, "tr"));
writeFileSync(join(CIKTI, "ata-sozluk.json"), JSON.stringify({
  kaynak: "Aysu Ata, Orhun Türkçesi, Anadolu Üniversitesi AÖF, 2011",
  katman: "kitap",
  uyari: "Yayın alıntısıdır; insan denetiminden geçmeden alıştırmaya girmez.",
  uretim: new Date().toISOString().slice(0, 10),
  kelimeler: sozlukListe
}, null, 1) + "\n");
writeFileSync(join(CIKTI, "ata-ekler.json"), JSON.stringify({
  kaynak: "Aysu Ata, Orhun Türkçesi, Anadolu Üniversitesi AÖF, 2011",
  katman: "kitap",
  uretim: new Date().toISOString().slice(0, 10),
  ekler: ekListe
}, null, 1) + "\n");

console.log(`çözümleme bölümü : ${bolumler.length}`);
console.log(`okunan satır     : ${satirSayisi}`);
console.log(`sözcük           : ${sozlukListe.length}`);
console.log(`ek               : ${ekListe.length}`);
console.log("\nyazıldı: docs/ata-sozluk.json · docs/ata-ekler.json");
