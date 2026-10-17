#!/usr/bin/env node
/**
 * Dijitalleştirilmiş kitapları tarar, cümleciklerimize karşılık gelen
 * çevirileri SAYFA ATFIYLA çıkarır.
 *
 *   node engine/kaynak-tara.mjs              # tara, paket üret
 *   node engine/kaynak-tara.mjs --esik 0.55  # eşleşme eşiği
 *
 * Çıktı: docs/kaynak-tarama-paketi.json  (denetim-uygula biçiminde)
 *        docs/kaynak-tarama-raporu.md    (insan için özet)
 *
 * Kalıp: kitaplarda çeviriler  *transkripsiyon* "Türkçe"  (ATIF)
 * biçiminde geçiyor. Atıf (KT D 18) → dize kimliği KT-D-18.
 *
 * Eşleştirme ünsüz iskeleti üzerinden yapılır: korpus "TeŊRİ : TeG",
 * kitap "teŋri teg" yazar; yazılmayan ünlüler iki yanda farklıdır.
 *
 * HİÇBİR ŞEY OTOMATİK ONAYLANMAZ. Paket --denetleyen makine ile işlenir,
 * denetim ekranında insan önüne gelir.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const argv = process.argv.slice(2);
const eI = argv.indexOf("--esik");
const ESIK = eI === -1 ? 0.55 : Number(argv[eI + 1]);
if (!(ESIK > 0 && ESIK <= 1)) throw new Error(`--esik 0-1 arası olmalı: ${argv[eI + 1]}`);

/* ── Kaynak kitaplar ────────────────────────────────────────────────── */

const KITAPLAR = [
  { ad: "Tekin, Orhon Türkçesi Grameri, 2003", dizin: "00_Kaynaklar/kitaplar/tekin_otg_2003" },
  { ad: "Ölmez, Köktürkçe ve Eski Uygurca Dersleri, 2017", dizin: "00_Kaynaklar/kitaplar/olmez_2017" },
];

/** Sayfa dosyasının başlığından basılı sayfa numarasını al. */
function sayfaNo(icerik, dosyaAdi) {
  const m = icerik.match(/^#\s*s\.\s*0*(\d+).*?(?:basılı sayfa\s*(\d+))?\s*$/m);
  if (!m) return dosyaAdi.replace(/\D/g, "");
  return m[2] ?? m[1];
}

/* ── Çıkarım ────────────────────────────────────────────────────────── */

// *transkripsiyon* "Türkçe çeviri" (ATIF)      — atıf isteğe bağlı
const KALIP = /\*([^*\n]{3,160})\*\s*[“"]([^”"\n]{3,300})[”"]\s*(?:\(([^)\n]{2,24})\))?/g;

const YAZIT_KODU = {
  KT: "KT", BK: "BK", T: "TY2", TY: "TY2", O: "O", MÇ: "MC", KÇ: "KC", Tes: "TES",
  Ta: "TA", ŞU: "SU", IB: "IB",
};
const YUZ_KODU = { D: "D", B: "B", G: "G", K: "K", GD: "GD", KD: "KD", GB: "GB", KB: "KB" };

/**
 * Tonyukuk'ta kitaplar yüz kodu yazmaz, sürekli satır numarası verir:
 * "T 45". Korpusta ise TY1/TY2 + yüz var. orhun-db'deki `sira` alanı
 * (1-62) tam bu sürekli numaralandırmayla örtüşüyor — 1. taş 1-35,
 * 2. taş 36-62 — o yüzden sira üzerinden eşleriz.
 */
const tonyukukSiraya = new Map(
  JSON.parse(readFileSync(P("05_Kaynak_DB/orhun-db-v1.json"), "utf8"))
    .dizeler.filter((d) => d.kaynak === "TY")
    .map((d) => [d.sira, d.id])
);

/** "(KT D 18)" → "KT-D-18"; "(T 45)" → "TY2-G-1"; tanınmayan atıf null. */
function atifCoz(ham) {
  if (!ham) return null;
  const t = ham.trim().replace(/\s+/g, " ");
  const m = t.match(/^(KT|BK|TY|T|O|MÇ|KÇ|Tes|Ta|ŞU|IB)\s*([DBGK]{1,2})?\s*(\d+)/);
  if (!m) return null;
  const yazit = YAZIT_KODU[m[1]];
  if (!yazit) return null;
  const satir = Number(m[3]);

  // Tonyukuk: yüz kodu yoksa sürekli numaradan çöz.
  if ((m[1] === "T" || m[1] === "TY") && !m[2]) {
    return tonyukukSiraya.get(satir) ?? null;
  }
  const yuz = m[2] ? YUZ_KODU[m[2]] : null;
  return yuz ? `${yazit}-${yuz}-${satir}` : null;
}

/* ── Eşleştirme ─────────────────────────────────────────────────────── */

/**
 * Ünsüz iskeleti. Korpus yazılmayan ünlüyü küçük harfle gösterir,
 * kitap tam okunuşu yazar; ünlüleri atınca iki yan karşılaştırılabilir.
 */
function iskelet(s) {
  return (s || "")
    .toLocaleLowerCase("tr")
    .replace(/[ŋñ]/g, "n")
    .replace(/[çc]/g, "c")
    .replace(/[şs]/g, "s")
    .replace(/[ğg]/g, "g")
    .replace(/[^a-zçğıöşüığşçöü]/g, "")
    .replace(/[aeıioöuü]/g, "");
}

function jaccard(a, b) {
  const A = new Set(a);
  const B = new Set(b);
  if (!A.size || !B.size) return 0;
  let k = 0;
  for (const x of A) if (B.has(x)) k++;
  return k / (A.size + B.size - k);
}

/** 3-gram kümesi üzerinden benzerlik. */
function ngram(s, n = 3) {
  const g = [];
  for (let i = 0; i + n <= s.length; i++) g.push(s.slice(i, i + n));
  return g.length ? g : [s];
}

const benzerlik = (a, b) => {
  const ia = iskelet(a);
  const ib = iskelet(b);
  if (!ia || !ib) return 0;
  if (ia === ib) return 1;
  return jaccard(ngram(ia), ngram(ib));
};

/* ── Veri ───────────────────────────────────────────────────────────── */

const cumlecikler = JSON.parse(readFileSync(P("docs/cumlecik-adaylari.json"), "utf8")).cumlecikler;
/** dizeId -> o dizenin cümlecikleri (atıf dize düzeyinde geliyor) */
const dizeyeGore = new Map();
for (const c of cumlecikler) {
  const l = dizeyeGore.get(c.dizeId) ?? [];
  l.push(c);
  dizeyeGore.set(c.dizeId, l);
}

/* ── Tarama ─────────────────────────────────────────────────────────── */

const bulgular = [];
let kalipSayisi = 0;
let atifsiz = 0;
let atifTanInmayan = 0;

for (const kitap of KITAPLAR) {
  const dizin = P(kitap.dizin);
  if (!existsSync(dizin)) {
    console.warn(`atlandı (yok): ${kitap.dizin}`);
    continue;
  }
  for (const dosya of readdirSync(dizin).filter((f) => /^s\d+\.md$/.test(f)).sort()) {
    const icerik = readFileSync(join(dizin, dosya), "utf8");
    const sayfa = sayfaNo(icerik, dosya);
    for (const m of icerik.matchAll(KALIP)) {
      kalipSayisi++;
      const [, trans, turkce, hamAtif] = m;
      const dizeId = atifCoz(hamAtif);
      if (!hamAtif) { atifsiz++; continue; }
      if (!dizeId) { atifTanInmayan++; continue; }

      // Atıf hangi dizeyi gösteriyorsa yalnız onun cümlecikleriyle karşılaştır.
      const adaylar = dizeyeGore.get(dizeId);
      if (!adaylar) continue;

      let enIyi = null;
      for (const c of adaylar) {
        const skor = benzerlik(trans, c.transkripsiyon);
        if (!enIyi || skor > enIyi.skor) enIyi = { c, skor };
      }
      if (!enIyi || enIyi.skor < ESIK) continue;

      bulgular.push({
        id: enIyi.c.id,
        dizeId,
        skor: Number(enIyi.skor.toFixed(3)),
        kitap: kitap.ad,
        sayfa: `s. ${sayfa}`,
        kitapTranskripsiyon: trans.trim(),
        korpusTranskripsiyon: enIyi.c.transkripsiyon,
        metin: turkce.trim(),
      });
    }
  }
}

/* ── En iyi adayı seç, paket üret ───────────────────────────────────── */

const enIyiler = new Map();
for (const b of bulgular) {
  const v = enIyiler.get(b.id);
  if (!v || b.skor > v.skor) enIyiler.set(b.id, b);
}

const siraliBulgular = [...enIyiler.values()].sort((a, b) => b.skor - a.skor);

const paket = {
  kuyruk: "cumlecik",
  uretim: new Date().toISOString().slice(0, 10),
  uretici: "engine/kaynak-tara.mjs",
  aciklama:
    "Dijitalleştirilmiş kitaplardan otomatik çıkarılmış karşılıklar. " +
    "İNSAN ONAYI YOK — --denetleyen makine ile işlenmelidir.",
  esik: ESIK,
  kararlar: siraliBulgular.map((b) => ({
    id: b.id,
    karar: "onay",
    metin: b.metin,
    tur: "ceviri",
    kaynak: `${b.kitap}, ${b.sayfa}`,
    not: `otomatik eşleşme ${b.skor} · kitap: ${b.kitapTranskripsiyon}`,
    runikDuzeltme: "",
  })),
};

writeFileSync(P("docs/kaynak-tarama-paketi.json"), JSON.stringify(paket, null, 2) + "\n");

const kitapSayim = {};
for (const b of siraliBulgular) kitapSayim[b.kitap] = (kitapSayim[b.kitap] ?? 0) + 1;

const bant = (s) => (s >= 0.9 ? "0.90+" : s >= 0.75 ? "0.75-0.89" : s >= 0.65 ? "0.65-0.74" : "eşik-0.64");
const bantSayim = {};
for (const b of siraliBulgular) bantSayim[bant(b.skor)] = (bantSayim[bant(b.skor)] ?? 0) + 1;

writeFileSync(
  P("docs/kaynak-tarama-raporu.md"),
  `# Kaynak Tarama Raporu

Üretim: ${paket.uretim} · eşik ${ESIK} · \`npm run kaynak:tara\`

| | |
|---|---|
| Taranan çeviri kalıbı | ${kalipSayisi} |
| Atıfsız (eşleştirilemez) | ${atifsiz} |
| Atıfı çözülemeyen | ${atifTanInmayan} |
| Eşleşen cümlecik | **${siraliBulgular.length}** / ${cumlecikler.length} |

Kitaba göre: ${Object.entries(kitapSayim).map(([k, v]) => `${k} — ${v}`).join(" · ")}

Eşleşme gücü: ${Object.entries(bantSayim).sort().map(([k, v]) => `${k}: ${v}`).join(" · ")}

## Nasıl işlenir

\`\`\`bash
node engine/denetim-uygula.mjs docs/kaynak-tarama-paketi.json --denetleyen makine
npm run dev   # Denetim → "Makine önerisi" sekmesi
\`\`\`

Metin, tür ve kaynak önceden dolu gelir. \`not\` alanında eşleşme skoru ve
kitaptaki transkripsiyon yazar — doğru satırla eşleşip eşleşmediğini
oradan denetlersin.

## En düşük skorlu 15 (önce bunlara bak)

${siraliBulgular.slice(-15).reverse().map((b) => `- \`${b.id}\` **${b.skor}** · ${b.sayfa}\n  - korpus: \`${b.korpusTranskripsiyon}\`\n  - kitap : \`${b.kitapTranskripsiyon}\`\n  - çeviri: ${b.metin}`).join("\n")}
`
);

console.log(`taranan kalıp   : ${kalipSayisi}`);
console.log(`atıfsız         : ${atifsiz}  (eşleştirilemez)`);
console.log(`atıf çözülemedi : ${atifTanInmayan}`);
console.log(`eşleşen cümlecik: ${siraliBulgular.length} / ${cumlecikler.length}`);
console.log(`eşleşme gücü    : ${Object.entries(bantSayim).sort().map(([k, v]) => `${k}: ${v}`).join(" · ")}`);
console.log(`\nyazıldı: docs/kaynak-tarama-paketi.json, docs/kaynak-tarama-raporu.md`);
