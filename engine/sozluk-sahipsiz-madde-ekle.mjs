#!/usr/bin/env node
/**
 * SAHİPSİZ BİÇİMLERİN MADDELERİNİ EKLER
 *
 * sozluk-bicim-ayikla.mjs, hiçbir maddeye bağlanamayan 15 biçimi
 * 05_Kaynak_DB/sozluk-sahipsiz-bicimler.json'a ayırmıştı. Çoğu, sözlükte
 * maddesi olmayan ayrı sözcüklerdi. Maddeleri burada ekleniyor.
 *
 * ANLAMIN KAYNAĞI — 05_Kaynak_DB/ham/turkbitig/*.html
 * Bu dosyalar her dizeyi üç satır olarak veriyor: runik, çevriyazı,
 * Türkçe çeviri; üçü de " : " ile sözcük sözcük hizalı. Anlamlar oradan,
 * sözcüğün kendi dizelerinden okundu — tahminle değil. Çeviri sözcüğü
 * çevirmeden bırakmışsa bu kaynak alanında yazıyor ve madde teyit
 * bekliyor; uydurma anlam girilmiyor.
 *
 * Kaynağın kendisi bir web sitesi, basılı dilbilgisi değil. Bu yüzden
 * katman "kitap" değil "model" de değil: anlamı veren metin dış kaynak,
 * ama denetleyen yok. Hepsi teyitGerek ile giriyor.
 *
 *   node engine/sozluk-sahipsiz-madde-ekle.mjs [--kuru]
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const kuru = process.argv.includes("--kuru");
const yol = "05_Kaynak_DB/sozluk-anlamlar.json";
const sahipsizYol = "05_Kaynak_DB/sozluk-sahipsiz-bicimler.json";

const d = JSON.parse(fs.readFileSync(P(yol), "utf8"));
const kelimeler = JSON.parse(
  fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8")
).filter((w) => w.guvenilir);

const sadece = (s) =>
  [...String(s).toLocaleLowerCase("tr")].filter((c) => /\p{L}/u.test(c)).join("");

const KAYNAK = "turkbitig.com, Orhun Yazıtları sözcük hizalı çevirisi";

const YENI = [
  {
    id: "kisre", transkripsiyon: "kisre", runik: "𐰚𐰃𐰾𐰼𐰀",
    anlam: "sonra, ondan sonra", kategori: "gramer / edat",
    kaynak: `${KAYNAK}: 13 dizede «SONRA» (KT-G-5, KT-D-4, KT-D-5)`,
    tanik: "KİSRE 𐰚𐰃𐰾𐰼𐰀 ×13 (yalın)",
  },
  {
    id: "kung", transkripsiyon: "küŋ", runik: "𐰚𐰇𐰭",
    anlam: "cariye, kadın köle", kategori: "toplum / yönetim",
    kaynak: `${KAYNAK}: 8 dizede «CARİYE» (KT-D-7 «kız oglın küŋ boldı» → «kız evladı cariye oldu»)`,
    tanik: "KÜŊ 𐰚𐰇𐰭 ×8 (yalın)",
    not: "kün 𐰚𐰇𐰤 'gün' ile karıştırılmamalı: son tamga 𐰭 (ŋ), 𐰤 (n) değil",
  },
  {
    id: "oguz_irmak", transkripsiyon: "ögüz", runik: "𐰇𐰏𐰔",
    anlam: "ırmak, nehir", kategori: "coğrafya",
    kaynak: `${KAYNAK} sözcüğü çevirmeden bırakıyor (KT-D-37 «İrtiş ögüzüg keçe» → «İrtiş özüğü geçip»); «ırmak» anlamı bağlamdan çıkarıldı, basılı kaynakla teyit edilmeli`,
    tanik: "ÖGüZ 𐰇𐰏𐰔 ×2 (yalın)",
    not: "ög 𐰇𐰏 'anne' ile aynı tamgalarla başlar, ayrı sözcüktür",
  },
  {
    id: "irkin", transkripsiyon: "irkin", runik: "𐰃𐰼𐰚𐰤",
    anlam: "bir boy beyi unvanı (Ulug İrkin, Köl İrkin)", kategori: "yönetim / unvan",
    kaynak: `${KAYNAK} sözcüğü çevirmeden bırakıyor (KT-D-34 «Bayırku ulug İrkin yagı boldı»); unvan olduğu hep bir boy adıyla birlikte geçmesinden çıkarıldı, teyit edilmeli`,
    tanik: "İRKiN 𐰃𐰼𐰚𐰤 ×3 (yalın)",
  },
  {
    id: "toruk", transkripsiyon: "toruk", runik: "𐱃𐰆𐰺𐰸",
    anlam: "arık, zayıf (semiz karşıtı)", kategori: "hayvan",
    kaynak: `${KAYNAK} sözcüğü çevirmeden bırakıyor (Tonyukuk «semiz buka toruk buka tiyin»); anlam «semiz» karşıtlığından çıkarıldı, teyit edilmeli`,
    tanik: "TORUK 𐱃𐰆𐰺𐰸 ×2 (yalın)",
  },
  {
    id: "toru_fiil", transkripsiyon: "toru-", runik: "𐱃𐰆𐰺𐰆",
    anlam: "arıklamak, zayıflamak", kategori: "fiil",
    kaynak: `${KAYNAK} sözcüğü çevirmeden bırakıyor (KT-G-9 «sayu kop toru ölü yorıyur»); anlam aynı kökten toruk «arık» ile bağlantıdan çıkarıldı, teyit edilmeli`,
    tanik: "TORU 𐱃𐰆𐰺𐰆 ×2 (yalın)",
    not: "törü 𐱅𐰇𐰼𐰇 'töre' ile karıştırılmamalı: ilk tamga 𐱃 (art damak t), 𐱅 değil",
  },
  {
    id: "kisa_fiil", transkripsiyon: "kısa-", runik: "𐰶𐰃𐰽",
    anlam: "yok etmek, ortadan kaldırmak", kategori: "fiil",
    kaynak: `${KAYNAK} «KILALIM» diyor, oysa çevriyazı KISaLıM — okuma tartışmalı; anlam «idi yok kısalım» bağlamından çıkarıldı, basılı kaynakla teyit edilmeli`,
    tanik: "KISaLıM 𐰶𐰃𐰽𐰞𐰢 ×2",
    not: "kök yazımı KISaLıM 𐰶𐰃𐰽𐰞𐰢'dan -lım eki (𐰞𐰢) düşürülerek kuruldu; yalın biçim korpusta tanıklı değil",
  },
];

/**
 * Yazım varyantı olduğu çeviriden belli olan, ama ne çevriyazı ne runik
 * ön ekiyle maddesine bağlanabilen biçimler.
 */
const ELLE_SAHİP = [
  { runik: "𐰚𐰇𐰢𐰾", transkripsiyon: "KÜMüŞ", madde: "kümiş",
    gerekce: "BK-G-11 çevirisi «GÜMÜŞ»; 𐰾 (s) ile yazılmış varyant" },
  { runik: "𐰝𐰇𐰢𐰾", transkripsiyon: "KÜMüŞ", madde: "kümiş",
    gerekce: "Tonyukuk çevirisi «GÜMÜŞÜ»; 𐰝 (k) ve 𐰾 (s) ile yazılmış varyant" },
];

const kayit = [];
const bul = (t) => d.find((k) => k.transkripsiyon === t);

// 1 · maddeleri ekle
for (const k of YENI) {
  const { tanik, not, ...madde } = k;
  const alanlar = {
    ...madde,
    korpustaYok: false,
    teyitGerek: true,
    runikNotu: `yazım korpusta tanıklı: ${tanik}${not ? ` · ${not}` : ""}`,
  };
  // Yeniden çalıştırılabilir olsun: madde varsa alanları tazelenir,
  // biçimleri (2. adımda yeniden toplanıyor) korunur.
  const varOlan = d.find((x) => x.id === k.id);
  if (varOlan) {
    Object.assign(varOlan, alanlar);
    kayit.push(`tazelendi ${k.transkripsiyon.padEnd(7)} ${k.runik.padEnd(8)} ${k.anlam.slice(0, 40)}`);
    continue;
  }
  d.push({ ...alanlar, bicimler: [] });
  kayit.push(`eklendi   ${k.transkripsiyon.padEnd(7)} ${k.runik.padEnd(8)} ${k.anlam.slice(0, 40)}`);
}

// 2 · biçimlerini korpustan topla. Daha uzun bir maddenin yazımıyla
//     başlayan biçim onundur (ög ile ögüz'ü ayıran koruma).
for (const k of YENI) {
  const madde = bul(k.transkripsiyon);
  if (!madde) continue;
  const govde = sadece(k.transkripsiyon);
  const digerKokler = d
    .filter((x) => x.runik && x.transkripsiyon !== k.transkripsiyon &&
                   x.runik.startsWith(k.runik) && x.runik.length > k.runik.length)
    .map((x) => x.runik);
  const baskasinin = (runik) => digerKokler.some((r) => runik.startsWith(r));

  const ek = kelimeler
    .filter((w) => w.runik.startsWith(k.runik) &&
                   sadece(w.transkripsiyon).startsWith(govde) && !baskasinin(w.runik))
    .sort((a, b) => b.siklik - a.siklik)
    .slice(0, 6)
    .map((w) => ({ runik: w.runik, transkripsiyon: w.transkripsiyon,
                   siklik: w.siklik, dizeler: w.gectigiDizeler.slice(0, 3) }));
  madde.bicimler = ek;
  kayit.push(`biçim     ${k.transkripsiyon.padEnd(7)} ${ek.length}: ` +
    (ek.map((b) => `${b.transkripsiyon} ×${b.siklik}`).join(", ") || "—"));
}

// 3 · yazım varyantlarını maddelerine elle bağla
for (const v of ELLE_SAHİP) {
  const madde = bul(v.madde);
  if (!madde) { kayit.push(`⚠ madde yok: ${v.madde}`); continue; }
  const w = kelimeler.find((x) => x.runik === v.runik);
  madde.bicimler = [
    ...(madde.bicimler ?? []).filter((b) => b.runik !== v.runik),
    { runik: v.runik, transkripsiyon: v.transkripsiyon, siklik: w?.siklik ?? 1,
      dizeler: (w?.gectigiDizeler ?? []).slice(0, 3) },
  ].sort((a, b) => b.siklik - a.siklik).slice(0, 6);
  kayit.push(`varyant   ${v.transkripsiyon} ${v.runik} → ${v.madde}  (${v.gerekce})`);
}

// 4 · çözülen biçimleri sahipsiz listesinden düş
const cozulenRunik = new Set([
  ...YENI.flatMap((k) => (bul(k.transkripsiyon)?.bicimler ?? []).map((b) => b.runik)),
  ...ELLE_SAHİP.map((v) => v.runik),
]);
const sahipsiz = JSON.parse(fs.readFileSync(P(sahipsizYol), "utf8"));
const kalanSahipsiz = sahipsiz.filter((s) => !cozulenRunik.has(s.runik));

console.log(kayit.join("\n"));
console.log(`\nsahipsiz: ${sahipsiz.length} → ${kalanSahipsiz.length}`);
for (const s of kalanSahipsiz) {
  console.log(`  kalan: ${s.bicim} ${s.runik} ×${s.siklik} ← ${s.alindigiMadde}`);
}
console.log(`madde sayısı ${d.length}`);

if (!kuru) {
  fs.writeFileSync(P(yol), JSON.stringify(d, null, 2) + "\n", "utf8");
  fs.writeFileSync(P(sahipsizYol), JSON.stringify(kalanSahipsiz, null, 2) + "\n", "utf8");
  console.log(`→ ${yol}\n→ ${sahipsizYol}`);
}
