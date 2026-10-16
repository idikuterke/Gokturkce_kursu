// Kaydedilecek seslerin listesini üretir.
//
// Kayıt sırası öncelikli: en çok duyulacak ses önce kaydedilsin. Tamgalar
// her alıştırmada geçiyor, sözlük kelimeleri sözlük ekranında, korpus
// kelimeleri sıklıklarına göre.
//
// Çıktı dosya adları src/utils/sesKayitlari.ts ile aynı kuralı izler;
// kayıt public/ses/<anahtar>.webm olarak bırakılınca uygulama kendiliğinden
// kullanmaya başlar, kod değişikliği gerekmez.
import fs from "node:fs";
import path from "node:path";

const KOK = new URL("..", import.meta.url).pathname;
const P = (p) => path.join(KOK, p);
const oku = (p) => JSON.parse(fs.readFileSync(P(p), "utf8"));

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/ŋ/g, "ng")
    .replace(/[ıİ]/g, "i")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const kayitlar = [];

// 1) Tamgalar — her alıştırmada duyulur, en yüksek öncelik.
const tamgalar = oku("05_Kaynak_DB/tamga-siniflari-v1-kilitli.json");
for (const sinif of tamgalar.classes) {
  const glif = sinif.glyph_ref?.core_orhun;
  const cp = sinif.codepoints?.core_orhun;
  if (!glif || !cp) continue;
  kayitlar.push({
    oncelik: 1,
    anahtar: `tamga/${cp.replace("U+", "")}`,
    glif,
    okunus: Array.isArray(sinif.sound) ? sinif.sound.join(" / ") : String(sinif.sound || ""),
    not: "Tek tamganın hece okunuşu. Harf adı değil, sesi okunmalı."
  });
}

// 2) Sözlük kelimeleri — sözlük ekranında doğrudan dinleniyor.
const sozlukYolu = "src/data/generated/sozluk.json";
if (fs.existsSync(P(sozlukYolu))) {
  for (const k of oku(sozlukYolu)) {
    kayitlar.push({
      oncelik: 2,
      anahtar: `kelime/${slug(k.transkripsiyon)}`,
      glif: k.runik,
      okunus: k.transkripsiyon,
      not: k.anlam
    });
  }
}

// 3) Korpusun en sık kelimeleri — alıştırmalarda sürekli çıkar.
const esik = Number(process.argv[2] || 5);
const gorulen = new Set(kayitlar.map((k) => k.anahtar));
for (const k of oku("src/data/generated/kelimeler.json")) {
  if (!k.guvenilir || k.siklik < esik) continue;
  const anahtar = `kelime/${slug(k.transkripsiyon)}`;
  if (gorulen.has(anahtar)) continue;
  gorulen.add(anahtar);
  kayitlar.push({
    oncelik: 3,
    anahtar,
    glif: k.runik,
    okunus: k.transkripsiyon,
    not: `korpusta ${k.siklik} kez`
  });
}

kayitlar.sort((a, b) => a.oncelik - b.oncelik || a.anahtar.localeCompare(b.anahtar));

// Zaten kaydedilmiş olanları işaretle.
const sesKoku = P("public/ses");
let mevcut = 0;
for (const k of kayitlar) {
  k.kayitli = ["webm", "mp3"].some((u) => fs.existsSync(path.join(sesKoku, `${k.anahtar}.${u}`)));
  if (k.kayitli) mevcut++;
}

fs.writeFileSync(P("docs/ses-kayit-listesi.json"), JSON.stringify(kayitlar, null, 2) + "\n", "utf8");

const say = (o) => kayitlar.filter((k) => k.oncelik === o).length;
console.log(`1. öncelik — tamga         : ${say(1)}`);
console.log(`2. öncelik — sözlük        : ${say(2)}`);
console.log(`3. öncelik — sık kelime    : ${say(3)}  (sıklık >= ${esik})`);
console.log(`toplam                     : ${kayitlar.length}  | kaydedilmiş: ${mevcut}`);
console.log(`→ docs/ses-kayit-listesi.json`);
