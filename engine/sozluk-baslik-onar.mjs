#!/usr/bin/env node
/**
 * SÖZLÜK BAŞLIK YAZIMI ONARIMI
 *
 * Birleştirici gevşek katlama (ö=o, ü=u) kullandığı için, yalın biçimi
 * korpusta tanıklı olmayan maddelere EN SIK GEÇEN çekimli biçimin ya da
 * bambaşka bir sözcüğün yazımı başlık olarak yazılmıştı: "ög (anne)" için
 * 𐰆𐰍𐰔 (oguz), "kış" için 𐰚𐰃𐰾𐰃 (kişi), "kut" için 𐰸𐰆𐱃𐰢 (kutum) gibi.
 *
 * Bu betik kökü UYDURMAZ. Yaptığı tek şey: tanıklı bir çekimli biçimin
 * runik dizisini soldan kısaltıp, her kısaltmanın tamga-ses karşılığını
 * maddenin okunuşuyla karşılaştırmak. Tam oturan en uzun ön ek kök yazımı
 * sayılır; hangi biçimden, hangi dizeden ve kaç tamga düşürülerek
 * kurulduğu `runikNotu` alanına yazılır.
 *
 * Oturmuyorsa madde boş bırakılır (runik: null, korpustaYok: true) —
 * uygulama o maddenin tamgasını göstermez. Yanlış yazım göstermekten iyidir.
 *
 *   node engine/sozluk-baslik-onar.mjs --kuru   (yazmadan rapor)
 *   node engine/sozluk-baslik-onar.mjs
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const kuru = process.argv.includes("--kuru");

const oku = (y) => JSON.parse(fs.readFileSync(P(y), "utf8"));
const kelimeler = oku("src/data/generated/kelimeler.json").filter((k) => k.guvenilir);
const tamgaKaynak = fs.readFileSync(P("src/data/tamgalarData.ts"), "utf8");

/** Tamga → çıkarabileceği sesler. Projenin kendi alfabe tablosundan. */
const sesler = new Map();
for (const m of tamgaKaynak.matchAll(
  /rune:\s*'([^']+)',\s*\n\s*codePoint:[^\n]*\n\s*name:\s*'(?:[^'\\]|\\.)*',\s*\n\s*sound:\s*'([^']+)'/g
)) {
  sesler.set(
    m[1],
    m[2].split(",").map((x) => x.trim().toLocaleLowerCase("tr")).filter(Boolean)
  );
}

const KATLAMA = new Map(Object.entries({
  "ä": "e", "ā": "a", "ē": "e", "ī": "i", "ō": "o", "ū": "u",
  "ǖ": "ü", "ȫ": "ö", "ï": "ı", "ń": "ŋ", "ñ": "ŋ", "é": "e",
  "ḍ": "d", "ẓ": "z", "š": "ş", "č": "ç", "γ": "g",
}));
// Alfabe tablosu ŋ sesini "ng" diye yazıyor ("nga", "ong"); çevriyazıda ŋ.
const ngKatla = (s) => s.replace(/ng/g, "ŋ");
const sadece = (s) =>
  [...String(s).toLocaleLowerCase("tr")]
    .map((c) => KATLAMA.get(c) ?? c)
    .filter((c) => /\p{L}/u.test(c))
    .join("");

const UNLU = new Set([..."aeıioöuü"]);
const unsuzIskeleti = (s) => [...s].filter((c) => !UNLU.has(c)).join("");

/**
 * Bir tamganın hedeften yiyebileceği parçalar.
 *
 * Alfabe tablosu sesleri hece olarak yazıyor ("eg", "ge", "ku") çünkü
 * tamganın ADI öyle okunur. Yazıda ise ünsüz işareti ünsüzü TEK BAŞINA da
 * gösterebilir ve ünlü çoğu zaman hiç yazılmaz. Bu yüzden her ses için
 * üç seçenek tanınır: hecenin tamamı, yalnız ünsüz iskeleti, ve ünsüz
 * iskeleti + hedeften gelen bir ünlü. Bu olmadan "ög" sözcüğü 𐰇𐰏 ile
 * eşleşmiyordu: 𐰏'nin sesleri "eg/ge/ig/gi…" — hiçbiri yalın "g" değil.
 */
const yiyebilecekleri = (glif) => {
  const kume = new Set();
  for (const ham of sesler.get(glif) ?? []) {
    const ses = ngKatla(sadece(ham));
    if (!ses) continue;
    kume.add(ses);
    const iskelet = unsuzIskeleti(ses);
    if (iskelet) kume.add(iskelet);
  }
  return [...kume].sort((a, b) => b.length - a.length);
};

/**
 * Runik dizisinin okunuşu hedefe oturuyor mu?
 * Her tamga, hedefin baştan kalan kısmının başına uyan bir ses verebilmeli.
 * Tamgalar ünlü taşıyabildiği için (𐰸 = "ku" ya da "uk") birden çok
 * okuma denenir; geri izlemeli arama.
 */
function okunurMu(glifler, hedef) {
  const dene = (i, kalan) => {
    if (i === glifler.length) return kalan.length === 0;
    for (const parca of yiyebilecekleri(glifler[i])) {
      if (!kalan.startsWith(parca)) continue;
      const sonra = kalan.slice(parca.length);
      if (dene(i + 1, sonra)) return true;
      // Ünsüz işareti ardından gelen yazılmamış ünlüyü de taşıyabilir.
      if (unsuzIskeleti(parca) === parca && sonra && UNLU.has(sonra[0])) {
        if (dene(i + 1, sonra.slice(1))) return true;
      }
    }
    // Önündeki yazılmamış ünlü: hedef bir ünlüyle başlıyorsa, onu bu
    // tamganın ünsüzüyle birlikte yut (eç, ak, ıs gibi okumalar).
    if (UNLU.has(kalan[0])) {
      for (const parca of yiyebilecekleri(glifler[i])) {
        const iskelet = unsuzIskeleti(parca);
        if (!iskelet || parca !== iskelet) continue;
        if (kalan.slice(1).startsWith(iskelet) && dene(i + 1, kalan.slice(1 + iskelet.length))) {
          return true;
        }
      }
    }
    return false;
  };
  return dene(0, sadece(hedef));
}

/** Aynı kökten gelen, korpusta tanıklı biçimler — sıklığa göre. */
const turevler = (okunus) => {
  const k = sadece(okunus).replace(/-+$/, "");
  return kelimeler
    .filter((w) => sadece(w.transkripsiyon).startsWith(k) && sadece(w.transkripsiyon) !== k)
    .sort((a, b) => b.siklik - a.siklik);
};

const raporlar = [];
const yollar = ["05_Kaynak_DB/sozluk-anlamlar.json", "src/data/generated/sozluk.json"];
const kararlar = new Map();

for (const yol of yollar) {
  const d = oku(yol);
  for (const madde of d) {
    const okunus = String(madde.transkripsiyon).split("/")[0].trim().replace(/-+$/, "");
    const hedef = sadece(okunus);
    if (!hedef) continue;

    // Yalın biçim korpusta tanıklıysa dokunma: başlık zaten doğru.
    if (kelimeler.some((w) => sadece(w.transkripsiyon) === hedef)) continue;
    // Bu oturumda elle onaylanmış maddeler korunur.
    if (madde.runikNotu) continue;
    // Şu anki yazım zaten okunuşa oturuyorsa dokunma.
    if (madde.runik && okunurMu([...madde.runik], okunus)) continue;

    let karar = kararlar.get(madde.id);
    if (!karar) {
      karar = { id: madde.id, okunus, eski: madde.runik, yeni: null, not: null };
      for (const t of turevler(okunus)) {
        const g = [...t.runik];
        for (let n = g.length - 1; n >= 2; n--) {
          const onek = g.slice(0, n);
          if (!okunurMu(onek, okunus)) continue;
          karar.yeni = onek.join("");
          karar.not =
            `kök yazımı ${t.transkripsiyon} ${t.runik} biçiminden ` +
            `son ${g.length - n} tamga düşürülerek kuruldu ` +
            `(tanık ${t.gectigiDizeler?.[0] ?? "—"}, tamga-ses eşlemesiyle doğrulandı)`;
          break;
        }
        if (karar.yeni) break;
      }
      kararlar.set(madde.id, karar);
      raporlar.push(karar);
    }

    if (karar.yeni) {
      madde.runikEski = madde.runik;
      madde.runik = karar.yeni;
      madde.runikNotu = karar.not;
      // Makine türetimi insan onayı değildir. Kaynak biçimin kökü bazen
      // başka bir sözcük olabiliyor (yaz ← YaZIKA, kuş ← KUŞaLGuKDA);
      // tamga-ses eşlemesi yazımın okunuşa oturduğunu söyler, o biçimin
      // bu maddenin çekimi olduğunu söylemez. Karar insanın.
      madde.teyitGerek = true;
    } else {
      madde.runikEski = madde.runik;
      madde.runik = null;
      madde.korpustaYok = true;
      madde.runikNotu =
        "yalın biçim korpusta tanıklı değil; çekimli biçimlerden de " +
        "güvenle kök çıkarılamadı — yazım gösterilmiyor";
    }
  }
  if (!kuru) {
    fs.writeFileSync(P(yol), JSON.stringify(d, null, 2) + "\n", "utf8");
  }
}

const kuruldu = raporlar.filter((r) => r.yeni);
const bos = raporlar.filter((r) => !r.yeni);
console.log(`onarılan ${raporlar.length} madde | kök kuruldu ${kuruldu.length} | boşaltıldı ${bos.length}\n`);
for (const r of kuruldu) {
  console.log(`  ✓ ${r.okunus.padEnd(10)} ${String(r.eski).padEnd(14)} → ${r.yeni}`);
  console.log(`       ${r.not}`);
}
for (const r of bos) console.log(`  ∅ ${r.okunus.padEnd(10)} ${String(r.eski).padEnd(14)} → (boş)`);
if (!kuru) console.log("\n→ " + yollar.join(" · "));
