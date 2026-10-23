#!/usr/bin/env node
/**
 * BAŞKA MADDEYE AİT BİÇİMLERİ AYIKLAR
 *
 * "Kitabelerdeki biçimleri" listesi KATLANMIŞ çevriyazı ön ekiyle
 * toplanmıştı; bu yüzden "kum" maddesinin altında KÜMüŞ, "kış"ın
 * altında KİŞİ duruyordu.
 *
 * KURAL — çevriyazı üzerinden, ı/i ve ö/o katlaması YAPILMADAN:
 *   1. biçimin okunuşu maddenin okunuşuyla başlıyorsa kalır;
 *   2. başlamıyorsa, okunuşunun başladığı BAŞKA bir maddeye taşınır
 *      (birden çok aday varsa en uzun eşleşen kazanır);
 *   3. hiçbir maddeye bağlanamıyorsa SAHİPSİZ sayılır: maddeden
 *      alınır ve karara açılmak üzere ayrı bir dosyaya yazılır.
 *
 * Karşılaştırmadan önce iki eşitleme yapılır, yoksa aynı sözcüğün
 * biçimi sahipsiz görünür:
 *   • uzunluk işareti atılır (āt = at) — SADECE macron; ö ve ü korunur,
 *   • her dizi hem "ŋ" hem "ng" yazımıyla denenir (kaŋ = KaNGıM).
 * Ünlü katlaması yapılmaz: kış ile kişi'yi ancak ı/i ayrımı ayırıyor;
 * ŋ de n'ye katlanmaz, yoksa küŋ "cariye" kün "gün"ün altında kalır.
 *
 * Runik ön eki denendi ve bırakıldı: tek tamgalı maddeler (ay 𐰖, āt 𐱃,
 * eb 𐰋) kendilerinden sonra gelen HER şeyin ön eki oluyor, "yagımız"
 * biçimi yagı'dan alınıp ay'a veriliyordu.
 *
 * ELLE: kuralın göremediği, insan kararıyla çözülmüş durumlar.
 *
 *   node engine/sozluk-bicim-ayikla.mjs [--kuru]
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

/**
 * Sözlükte maddesi olmayan, bu yüzden hiçbir maddeye bağlanmaması
 * gereken runik diziler. ögüz 𐰇𐰏𐰔 "ırmak" ög 𐰇𐰏 ile başladığı için
 * kural onu ög'ün çekimi sanıyor; ayrı sözcük.
 */
const ELLE_SAHİPSİZ = new Map([
  ["𐰇𐰏𐰔", "ögüz 'ırmak' maddesi sözlükte yok; ög 𐰇𐰏 ile aynı sözcük değil"],
  ["𐰚𐰇𐰭", "küŋ 'cariye' maddesi sözlükte yok; kün 𐰚𐰇𐰤 'gün' ile aynı sözcük değil"],
]);

const maddeler = d.filter((k) => k.runik);
const tasinan = [];
const sahipsiz = [];

/** Çevriyazıyı karşılaştırmaya hazırlar: küçük harf, uzunluk işareti
 *  ve harf dışı atılır; "yer / yir" gibi çok yazımlılar ve ŋ ~ ng
 *  yazımları ayrı anahtarlara açılır. Ünlü katlaması YOK. */
const anahtarlar = (t) => {
  const cikti = new Set();
  for (const parca of String(t).split("/")) {
    const temiz = [
      ...parca
        .normalize("NFD")
        .replace(/\u0304/g, "") // yalnız uzunluk işareti: āt = at
        .normalize("NFC")
        .toLocaleLowerCase("tr")
        .replace(/-+$/, ""),
    ]
      .filter((c) => /\p{L}/u.test(c))
      .join("");
    if (!temiz) continue;
    cikti.add(temiz);
    cikti.add(temiz.replace(/ŋ/g, "ng"));
    cikti.add(temiz.replace(/ng/g, "ŋ"));
  }
  return [...cikti];
};
/** Biçimin okunuşu da çok yazımlı olabilir; hepsi denenir. */
const baslarMi = (bicimAnahtarlari, maddeAnahtarlari) =>
  bicimAnahtarlari.some((b) => maddeAnahtarlari.some((a) => b.startsWith(a)));

for (const madde of d) {
  if (!madde.runik || !Array.isArray(madde.bicimler)) continue;
  const kalan = [];
  for (const b of madde.bicimler) {
    const elle = [...ELLE_SAHİPSİZ.keys()].find((r) => String(b.runik).startsWith(r));
    const bicimAnahtar = anahtarlar(b.transkripsiyon);

    // Biçim bu maddenin okunuşuyla başlıyorsa onun çekimidir.
    if (!elle && baslarMi(bicimAnahtar, anahtarlar(madde.transkripsiyon))) {
      kalan.push(b);
      continue;
    }

    // Sahip: biçimin okunuşunun başladığı, bu maddeden farklı madde.
    // En uzun eşleşme kazanır (bar ile bark, kişi ile ki-).
    let sahip = null;
    let enUzun = 0;
    if (!elle) {
      for (const x of maddeler) {
        if (x === madde) continue;
        for (const a of anahtarlar(x.transkripsiyon)) {
          if (a.length > enUzun && bicimAnahtar.some((bo) => bo.startsWith(a))) {
            sahip = x;
            enUzun = a.length;
          }
        }
      }
    }

    // Son çare: çevriyazı tutmuyor ama runik birebir bir maddenin
    // yazımı (KÜMüŞ 𐰚𐰇𐰢𐱁 = kümiş 𐰚𐰇𐰢𐱁) ya da onun çekimi. Tek ve iki
    // tamgalı maddeler dışarıda: onlar her şeyin ön eki oluyor.
    if (!sahip && !elle) {
      for (const x of maddeler) {
        if (x === madde) continue;
        const n = [...x.runik].length;
        if (n < 3 || n <= enUzun) continue;
        if (String(b.runik).startsWith(x.runik)) { sahip = x; enUzun = n; }
      }
    }

    if (!sahip) {
      sahipsiz.push({
        bicim: b.transkripsiyon,
        runik: b.runik,
        siklik: b.siklik,
        alindigiMadde: `${madde.transkripsiyon} ${madde.runik}`,
        gerekce: elle
          ? ELLE_SAHİPSİZ.get(elle)
          : "okunuşu da runik yazımı da hiçbir maddeyle başlamıyor",
      });
      continue;
    }

    sahip.bicimler = [
      ...(sahip.bicimler ?? []).filter(
        (x) => x.runik !== b.runik || x.transkripsiyon !== b.transkripsiyon
      ),
      b,
    ]
      .sort((x, y) => y.siklik - x.siklik)
      .slice(0, 6);

    tasinan.push(
      `${madde.transkripsiyon.padEnd(9)} ${madde.runik.padEnd(8)} ∕ ` +
        `${b.transkripsiyon.padEnd(11)} ${String(b.runik).padEnd(10)} → ${sahip.transkripsiyon} ${sahip.runik}`
    );
  }
  madde.bicimler = kalan;
}

console.log(tasinan.length ? tasinan.join("\n") : "taşınacak biçim yok");
console.log(`\n${tasinan.length} biçim sahibine taşındı`);
console.log(`\nSAHİPSİZ (${sahipsiz.length}) — maddeden alındı, karara açıldı:`);
for (const s of sahipsiz) {
  console.log(`  ${s.bicim.padEnd(11)} ${String(s.runik).padEnd(10)} ×${s.siklik}  ← ${s.alindigiMadde}`);
}

if (!kuru) {
  fs.writeFileSync(P(yol), JSON.stringify(d, null, 2) + "\n", "utf8");
  sahipsiz.sort((a, b) => b.siklik - a.siklik);
  fs.writeFileSync(P(sahipsizYol), JSON.stringify(sahipsiz, null, 2) + "\n", "utf8");
  console.log(`\n→ ${yol}\n→ ${sahipsizYol}`);
}
