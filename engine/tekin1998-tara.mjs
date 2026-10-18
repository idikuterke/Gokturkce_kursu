#!/usr/bin/env node
/**
 * Tekin, *Orhon Yazıtları* (1998) — metin yayını çıkarıcısı.
 *
 *   node engine/tekin1998-tara.mjs
 *
 * Gramer kitaplarından farkı: bu kitap her satırı baştan sona çevirir.
 * Düzen: her yazıt bölümünde önce ÇEVRİYAZI bloğu, sonra ÇEVİRİ bloğu;
 * ikisi de aynı (G 1), (D 7) işaretçilerini taşır.
 *
 * Hangi bloğun çevriyazı olduğunu tahmin etmiyoruz: iki parçanın da
 * korpustaki satıra ünsüz-iskeleti benzerliği ölçülür, YÜKSEK olan
 * çevriyazıdır, diğeri çeviridir. Bu aynı zamanda doğru satırı
 * bulduğumuzun kanıtı olur — eşleşme zayıfsa kayıt işaretlenir.
 *
 * Çıktı: docs/tekin1998-paketi.json   (kuyruk: dize)
 *        docs/tekin1998-raporu.md
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const KITAP = "Tekin, Orhon Yazıtları, 1998";

const metin = readFileSync(P("00_Kaynaklar/kitaplar/tekin_orhon_yazitlari_1998.txt"), "utf8");
const db = JSON.parse(readFileSync(P("05_Kaynak_DB/orhun-db-v1.json"), "utf8"));
const korpus = new Map(db.dizeler.map((d) => [d.id, d]));

/* ── iskelet benzerliği (kaynak-tara ile aynı mantık) ──────────────── */
const iskelet = (s) =>
  (s || "")
    .toLocaleLowerCase("tr")
    .replace(/[ŋñ]/g, "n")
    .replace(/[^a-zçğıöşü]/g, "")
    .replace(/[aeıioöuü]/g, "");

const ngram = (s, n = 3) => {
  const g = [];
  for (let i = 0; i + n <= s.length; i++) g.push(s.slice(i, i + n));
  return g.length ? g : [s];
};

function benzerlik(a, b) {
  const A = new Set(ngram(iskelet(a)));
  const B = new Set(ngram(iskelet(b)));
  if (!A.size || !B.size) return 0;
  let k = 0;
  for (const x of A) if (B.has(x)) k++;
  return k / (A.size + B.size - k);
}

/* ── bölümleme ─────────────────────────────────────────────────────── */

const ISARET = /\(\s*(G-?D|G-?B|K-?D|K-?B|G|D|K|B)\s*(\d{1,2})\s*\)/g;
const YUZ = { G: "G", D: "D", K: "K", B: "B", "G-D": "GD", "G-B": "GB", "K-D": "KD", "K-B": "KB" };

const satirlar = metin.split("\n");
let yazit = null;
let tas = null;
let sayfa = null;
/** id -> [{metin, sayfa}] */
const parcalar = new Map();
let acikId = null;
let tampon = [];

const bosalt = () => {
  if (acikId && tampon.length) {
    const l = parcalar.get(acikId.id) ?? [];
    const govde = tampon
      .join(" ")
      .replace(/\s+/g, " ")
      // PDF satır sonu tiresi: "tarafın- dan" -> "tarafından".
      // Yalnız küçük harf + "- " + küçük harf; "On-Ok" gibi gerçek
      // tireli sözcükler korunur (boşluk şartı onları dışarıda bırakır).
      .replace(/([a-zçğıöşü])-\s+([a-zçğıöşü])/g, "$1$2")
      .trim();
    l.push({ metin: govde, sayfa: acikId.sayfa });
    parcalar.set(acikId.id, l);
  }
  tampon = [];
};

for (const ham of satirlar) {
  const sm = ham.match(/\[+s\.\s*(\d+)\]+/);
  if (sm) sayfa = sm[1];

  if (/KÜL\s+TİGİN\s+YAZITI/i.test(ham)) { bosalt(); acikId = null; yazit = "KT"; tas = null; continue; }
  if (/BİLGE\s+KAĞAN\s+YAZITI/i.test(ham)) { bosalt(); acikId = null; yazit = "BK"; tas = null; continue; }
  if (/TUN?YUKUK\s+YAZITI/i.test(ham)) { bosalt(); acikId = null; yazit = "TY"; tas = "TY1"; continue; }
  if (/BİRİNCİ\s+TAŞ/i.test(ham)) { bosalt(); acikId = null; tas = "TY1"; continue; }
  if (/İKİNCİ\s+TAŞ/i.test(ham)) { bosalt(); acikId = null; tas = "TY2"; continue; }
  if (!yazit) continue;

  const temiz = ham.replace(/\[+s\.\s*\d+\]+/g, " ");
  let son = 0;
  for (const m of temiz.matchAll(ISARET)) {
    tampon.push(temiz.slice(son, m.index));
    bosalt();
    const yuz = YUZ[m[1].replace(/\s/g, "")];
    const kod = yazit === "TY" ? tas : yazit;
    acikId = { id: `${kod}-${yuz}-${Number(m[2])}`, sayfa };
    son = m.index + m[0].length;
  }
  tampon.push(temiz.slice(son));
}
bosalt();

/* ── çevriyazı / çeviri ayrımı ─────────────────────────────────────── */

const kararlar = [];
const supheli = [];
const korpusDisi = [];

for (const [id, liste] of parcalar) {
  const d = korpus.get(id);
  if (!d) { korpusDisi.push(id); continue; }

  const skorlu = liste
    .map((p) => ({ ...p, skor: benzerlik(p.metin, d.transkripsiyon) }))
    .sort((a, b) => b.skor - a.skor);

  const ceviriyazi = skorlu[0];
  const ceviri = skorlu[1];

  if (!ceviri) {
    supheli.push({ id, sebep: "tek parça bulundu — çeviri bloğu eşleşmedi", skor: ceviriyazi.skor });
    continue;
  }
  if (ceviriyazi.skor < 0.25) {
    supheli.push({ id, sebep: "çevriyazı korpusla eşleşmiyor — yanlış satır olabilir", skor: ceviriyazi.skor });
    continue;
  }
  if (ceviri.skor > ceviriyazi.skor * 0.75) {
    supheli.push({ id, sebep: "iki parça birbirine yakın — hangisi çeviri belirsiz", skor: ceviri.skor });
    continue;
  }
  // OCR artığı: yıldız, uzun nokta dizisi, "(B ES)" gibi kırık kod
  // parçaları, art arda iki BÜYÜK HARFLİ sözcük. Bunlar çeviri değil,
  // tarama hatasıdır; alıştırmaya girerse soru anlamsız olur.
  const ocrCopu =
    /\*/.test(ceviri.metin) ||
    /\.{4,}/.test(ceviri.metin) ||
    /\([A-ZÇĞİÖŞÜ]{1,3}\s+[A-ZÇĞİÖŞÜ]{2,}\)/.test(ceviri.metin) ||
    /\b[A-ZÇĞİÖŞÜ]{2,}\s+[A-ZÇĞİÖŞÜ]{2,}\b/.test(ceviri.metin);
  if (ocrCopu) {
    supheli.push({ id, sebep: "OCR artığı içeriyor — çeviri değil", skor: ceviri.skor });
    continue;
  }

  if (ceviri.metin.length < 15) {
    supheli.push({ id, sebep: "çeviri parçası çok kısa", skor: ceviri.skor });
    continue;
  }

  kararlar.push({
    id,
    karar: "onay",
    metin: ceviri.metin,
    tur: "ceviri",
    kaynak: `${KITAP}, s. ${ceviri.sayfa ?? "?"}`,
    not: `çevriyazı eşleşmesi ${ceviriyazi.skor.toFixed(3)} · çeviri skoru ${ceviri.skor.toFixed(3)}`,
    runikDuzeltme: "",
  });
}

kararlar.sort((a, b) => a.id.localeCompare(b.id));

writeFileSync(
  P("docs/tekin1998-paketi.json"),
  JSON.stringify(
    {
      kuyruk: "dize",
      katman: "kitap",
      uretim: new Date().toISOString().slice(0, 10),
      uretici: "engine/tekin1998-tara.mjs",
      aciklama:
        "Tekin 1998 metin yayınından otomatik çıkarılmış dize çevirileri. " +
        "İNSAN ONAYI YOK — --denetleyen makine ile işlenmelidir.",
      kararlar,
    },
    null,
    2
  ) + "\n"
);

writeFileSync(
  P("docs/tekin1998-raporu.md"),
  `# Tekin 1998 Çıkarım Raporu

Üretim: ${new Date().toISOString().slice(0, 10)} · \`npm run tekin98:tara\`

| | |
|---|---|
| İşaretçi bulunan dize | ${parcalar.size} |
| Korpusta karşılığı olmayan | ${korpusDisi.length} |
| **Çeviri çıkarıldı** | **${kararlar.length}** / ${db.dizeler.length} |
| Şüpheli — elle bakılmalı | ${supheli.length} |

## Yöntem

Her yazıt bölümünde çevriyazı ve çeviri blokları aynı \`(G 1)\` işaretçisini
taşır. Hangisinin çevriyazı olduğu **tahmin edilmez**: iki parçanın da
korpustaki satıra ünsüz-iskeleti benzerliği ölçülür, yüksek olan
çevriyazıdır. Bu aynı zamanda doğru satırı bulduğumuzun kanıtıdır.

## Şüpheli kayıtlar (${supheli.length})

${supheli.length ? supheli.map((s) => `- \`${s.id}\` — ${s.sebep} (${s.skor.toFixed(3)})`).join("\n") : "yok"}

## Nasıl işlenir

\`\`\`bash
node engine/denetim-uygula.mjs docs/tekin1998-paketi.json --denetleyen makine
npm run dev   # Denetim → Dize sekmesi
\`\`\`
`
);

console.log(`işaretçili dize : ${parcalar.size}`);
console.log(`korpus dışı     : ${korpusDisi.length}`);
console.log(`çeviri çıkarıldı: ${kararlar.length} / ${db.dizeler.length}`);
console.log(`şüpheli         : ${supheli.length}`);
console.log(`\nyazıldı: docs/tekin1998-paketi.json, docs/tekin1998-raporu.md`);
