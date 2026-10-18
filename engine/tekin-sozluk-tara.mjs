#!/usr/bin/env node
/**
 * Talat Tekin, Orhon Türkçesi Grameri (2003) — SÖZLÜK bölümü çıkarıcı.
 *
 * Kitabın s. 237'den başlayan sözlüğü makine okunur biçimde:
 *
 *   - **adak** ayak (KT K 7, BK D 30)
 *   - **al-** almak, yakalamak, işgal etmek (BK D 24, vb.)
 *   - **āç-** acıkmak, aç olmak (BK K 6)
 *
 * Çıktı: docs/tekin-sozluk.json
 * Katman "kitap": sayfa atıflı yayın alıntısıdır, insan denetiminden
 * geçmeden alıştırmaya girmez.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);

const satirlar = readFileSync(P("00_Kaynaklar/kitaplar/tekin_otg_2003.md"), "utf8").split("\n");
const bas = satirlar.findIndex((s) => /^# SÖZLÜK\s*$/.test(s));
if (bas < 0) { console.error("SÖZLÜK bölümü bulunamadı."); process.exit(1); }

// Madde:  - **başsözcük** anlam (ATIF)
const MADDE = /^- \*\*(.+?)\*\*\s+(.+?)\s*$/;
// Sayfa başlığı:  # s. 237 — TALAT TEKİN (basılı sayfa numarası 238)
const SAYFA = /^# s\. (\d+) —/;

const kayitlar = [];
// SÖZLÜK başlığı bir sayfanın ortasında; o sayfanın numarası geriye
// doğru aranır, yoksa ilk 56 madde "s. ?" ile çıkıyordu.
let sayfa = null;
for (let i = bas; i >= 0; i--) {
  const m = satirlar[i].match(SAYFA);
  if (m) { sayfa = Number(m[1]); break; }
}
let atlanan = 0;

for (let i = bas + 1; i < satirlar.length; i++) {
  const s = satirlar[i];
  const sy = s.match(SAYFA);
  if (sy) { sayfa = Number(sy[1]); continue; }
  const m = s.match(MADDE);
  if (!m) continue;

  const [, basSozcuk, govde] = m;
  // Kitabın künyesi de aynı kalıpta geliyor (Kapak resimleri, ISBN…);
  // başsözcükte boşluk + büyük harf ya da iki nokta varsa madde değildir.
  if (/[:：]/.test(basSozcuk) || /^[A-ZÇĞİÖŞÜ][a-zçğıöşü]+ [a-zçğıöşü]/.test(basSozcuk) === false
      && /^[A-ZÇĞİÖŞÜ]/.test(basSozcuk) && !/^[A-ZÇĞİÖŞÜ][a-zçğıöşüāäīōūḍ]/.test(basSozcuk)) {
    atlanan++; continue;
  }

  // Anlam ile atıf ayrımı: en sondaki parantez atıftır.
  const atifM = govde.match(/^(.*?)\s*\(([^()]*)\)\s*$/);
  // Çapraz gönderme vurguları ("bk. **antag**") sade metne indirilir.
  const anlam = (atifM ? atifM[1] : govde).replace(/\*\*/g, "").trim();
  const atif = atifM ? atifM[2].trim() : null;
  if (!anlam) { atlanan++; continue; }

  kayitlar.push({
    kelime: basSozcuk.trim(),
    anlam,
    tanik: atif,
    kaynak: `Tekin, Orhon Türkçesi Grameri, 2003, s. ${sayfa ?? "?"}`,
    katman: "kitap",
    denetlendi: false,
  });
}

const CIKTI = P("docs");
mkdirSync(CIKTI, { recursive: true });
writeFileSync(join(CIKTI, "tekin-sozluk.json"), JSON.stringify({
  kaynak: "Talat Tekin, Orhon Türkçesi Grameri, 2. baskı, İstanbul 2003",
  katman: "kitap",
  uyari: "Yayın alıntısıdır; insan denetiminden geçmeden alıştırmaya girmez.",
  uretim: new Date().toISOString().slice(0, 10),
  kelimeler: kayitlar,
}, null, 1) + "\n");

console.log(`madde      : ${kayitlar.length}`);
console.log(`atlanan    : ${atlanan}`);
console.log(`atıflı     : ${kayitlar.filter((k) => k.tanik).length}`);
console.log(`sayfa      : ${kayitlar[0]?.kaynak} … ${kayitlar.at(-1)?.kaynak}`);
console.log("\nyazıldı: docs/tekin-sozluk.json");
