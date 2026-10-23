#!/usr/bin/env node
/**
 * BÜYÜK HARFLİ MADDELERİN 2. VE 3. GRUBU
 *
 * docs/sozluk-buyuk-harfli-maddeler.md'deki karar listesinin uygulaması.
 * 1. grup (çekimli biçimler) burada DEĞİL: önce eksik kök maddeleri
 * eklenmeli, o yüzden sonraya bırakıldı.
 *
 *   node engine/sozluk-kategori-duzen.mjs [--kuru]
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const kuru = process.argv.includes("--kuru");
const yol = "05_Kaynak_DB/sozluk-anlamlar.json";
const d = JSON.parse(fs.readFileSync(P(yol), "utf8"));
const bul = (t) => d.find((k) => k.transkripsiyon === t);
const kayit = [];

/* 2 · GRAMER ÖGELERİ — kalıyor, yalnız kategorileri ayrılıyor.
   Zamir, edat, bağlaç ve ek-fiil sözlükte kalmalı: öğrenen bunları
   bilmeden kitabe okuyamaz. Ama "diger" kategorisinde durunca isim ve
   fiil dağarcığıyla karışıyor, çeldirici üreticisi de onları aynı
   havuzdan çekiyordu. */
const GRAMER = {
  OL: "zamir", BU: "zamir", BeN: "zamir", ÖZüM: "zamir",
  ÜZE: "edat", BİRLE: "edat", TeG: "edat", "TeGİ": "edat", TaPA: "edat", "ÜÇÜN": "edat",
  "İLGeRÜ": "edat",
  YiME: "bağlaç", "TİYiN": "bağlaç", "eRSeR": "bağlaç",
  aNDA: "zarf", "aNÇA": "zarf", KOP: "zarf", "BUNÇA": "zarf", "eRiNÇ": "zarf",
  YOK: "yüklem",
};
for (const [t, alt] of Object.entries(GRAMER)) {
  const k = bul(t);
  if (!k) { kayit.push(`⚠ bulunamadı: ${t}`); continue; }
  if (k.kategori === `gramer / ${alt}`) continue;
  kayit.push(`kategori  ${t.padEnd(9)} ${String(k.kategori).padEnd(10)} → gramer / ${alt}`);
  k.kategori = `gramer / ${alt}`;
}

/* 3 · GERÇEK SÖZCÜKLER */

// TÜRK: "bk. Türük" diyen bir yönlendirme maddesi; yazımı türük ile birebir
// aynı (𐱅𐰇𐰼𐰜) ve hiç biçimi yok. Kaynağı türük'e ikinci atıf olarak geçip
// madde kaldırılıyor.
{
  const stub = bul("TÜRK");
  const ana = bul("türük");
  if (stub && ana && stub.runik === ana.runik) {
    ana.ekKaynaklar = [...new Set([...(ana.ekKaynaklar ?? []), stub.kaynak].filter(Boolean))];
    d.splice(d.indexOf(stub), 1);
    kayit.push(`birleşti  TÜRK ${stub.runik} → türük (yönlendirme maddesiydi, kaynağı taşındı)`);
  }
}

// YİR: yer maddesiyle aynı sözcük ama AYRI yazım — ve korpusta daha sık
// geçeni bu (𐰘𐰃𐰼 17×, 𐰘𐰼 9×). Madde kaldırılıyor ama yazım kaybolmasın
// diye yer'in biçim listesine tanığıyla ekleniyor.
{
  const stub = bul("YİR");
  const ana = bul("yer / yir");
  if (stub && ana) {
    const kel = JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8"));
    const tanik = kel.find((w) => w.runik === stub.runik && w.guvenilir);
    ana.bicimler = [
      ...(ana.bicimler ?? []),
      {
        runik: stub.runik,
        transkripsiyon: tanik?.transkripsiyon ?? stub.transkripsiyon,
        siklik: tanik?.siklik ?? 0,
        dizeler: (tanik?.gectigiDizeler ?? []).slice(0, 3),
      },
    ].sort((a, b) => b.siklik - a.siklik);
    ana.ekKaynaklar = [...new Set([...(ana.ekKaynaklar ?? []), stub.kaynak].filter(Boolean))];
    d.splice(d.indexOf(stub), 1);
    kayit.push(
      `birleşti  YİR ${stub.runik} → yer / yir (yazım biçim listesine eklendi, ${tanik?.siklik ?? 0}×)`
    );
  }
}

// BİR ve iKİ sayı; "diger" kategorisinde duruyorlardı, süzgeçte sayılarla
// birlikte çıkmıyorlardı. iKİ'nin anlamındaki "bk. eki, ekin" sözlükte
// karşılığı olmayan bir yönlendirme — okura ölü bağlantı gösteriyor.
for (const [t, yeni] of [["BİR", "sayı"], ["iKİ", "sayı"]]) {
  const k = bul(t);
  if (!k) continue;
  kayit.push(`kategori  ${t.padEnd(9)} ${String(k.kategori).padEnd(10)} → ${yeni}`);
  k.kategori = yeni;
}
{
  const k = bul("iKİ");
  if (k && k.anlam.includes("bk. eki")) {
    k.anlam = "iki (2)";
    kayit.push("anlam     iKİ        «iki; bk. eki, ekin» → «iki (2)» (eki/ekin maddesi yok, ölü yönlendirme)");
  }
}

// Kalan gerçek sözcükler: etnik ve özel adlar "diger"de duruyordu.
for (const [t, yeni] of [["KİŞİ", "insan"], ["TaBGaÇ", "toplum / millet"],
                         ["TÜRGiŞ", "toplum / millet"], ["aZ", "toplum / millet"],
                         ["KÖLTİGiN", "ozel"]]) {
  const k = bul(t);
  if (!k || k.kategori === yeni) continue;
  kayit.push(`kategori  ${t.padEnd(9)} ${String(k.kategori).padEnd(10)} → ${yeni}`);
  k.kategori = yeni;
}

console.log(kayit.join("\n") || "değişiklik yok");
console.log(`\n${kayit.length} işlem | madde sayısı ${d.length}`);
if (!kuru) {
  fs.writeFileSync(P(yol), JSON.stringify(d, null, 2) + "\n", "utf8");
  console.log(`→ ${yol}`);
}
