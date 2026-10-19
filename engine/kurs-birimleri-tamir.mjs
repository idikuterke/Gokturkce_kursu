#!/usr/bin/env node
/**
 * KISALTILMIŞ PARAGRAF BİRİMLERİNİ KORPUSTAN YENİDEN KURAR
 *
 * kurs-birimleri-tara.mjs üç paragraf birimini reddetti: belge, yazıtın
 * ardışık olmayan parçalarını birleştirmiş (ikisinde "..." var, birinde
 * atlanan bölüm hiç işaretlenmemiş). Kısaltılmış bir pasaj okuma alıştırması
 * olamaz; öğrenci yazıtta yan yana durmayan iki parçayı tek cümle sanır.
 *
 * Çözüm belgeyi onarmak değil, birimi kaynağından kurmak: her reddedilen
 * birimin kendi "- Kaynak:" satırı hangi dizelerden geldiğini söylüyor.
 * Bu betik o dizeleri korpustan alır ve ARDIŞIK bir aralığı birim yapar.
 * Belgenin okunuşu ve çevirisi kullanılmaz; ikisi de korpus dizesinden gelir.
 *
 * Alınma koşulları — hepsi sağlanmazsa birim yine dışarıda kalır:
 *   1. dizeler gerçekten ardışık (aynı yazıt, aynı yüz, ardışık satır)
 *   2. dizede yıpranma yok
 *   3. çeviri okunur düzyazı — korpusta bir kısım dizenin "çevirisi" büyük
 *      harfli sözcük sözcük karşılıktır, o ders metni olamaz
 *   4. kelime sayısı paragraf aralığında (18-55)
 *
 * Çalıştırma sırası: önce tara, sonra tamir.
 *   node engine/kurs-birimleri-tara.mjs
 *   node engine/kurs-birimleri-tamir.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const kuru = process.argv.includes("--kuru");

const veri = JSON.parse(readFileSync(P("05_Kaynak_DB/kurs-birimleri.json"), "utf8"));
const korpus = JSON.parse(readFileSync(P("src/data/generated/korpus.json"), "utf8"));
const belge = readFileSync(P("00_Kaynaklar/orhon-kurs-birimleri.md"), "utf8");
const dizeler = new Map(korpus.map((d) => [d.id, d]));

const EN_AZ = 18;
const EN_COK = 55;

/**
 * Korpusta bir kısım dizenin "çevirisi" ders metni değil, büyük harfli
 * sözcük sözcük karşılık dizisi: "GEYİK : YİYE[REK] : TAVŞAN : ...".
 * Bunu ayırt etmek için harflerin büyüklük oranına ve ayraca bakılır.
 */
function sozlukDizisiMi(ceviri) {
  const harfler = [...ceviri].filter((c) => /\p{L}/u.test(c));
  if (!harfler.length) return true;
  const buyuk = harfler.filter((c) => c === c.toLocaleUpperCase("tr")).length;
  return buyuk / harfler.length > 0.6 && ceviri.includes(" : ");
}

/** "Tekin 1998, BK K 1-2, s. 56-81 (bölüm)" → ["BK-K-1", "BK-K-2"] */
function kaynaktanDizeler(kaynak) {
  const m = kaynak.match(/\b([A-Z]{1,3})\s+(KD|GD|GB|KB|[DBGKÇ])\s+(\d+)(?:\s*-\s*(\d+))?/);
  if (!m) return [];
  const [, yazit, yuz, bas, son] = m;
  const sonNo = Number(son ?? bas);
  const cikti = [];
  for (let n = Number(bas); n <= sonNo; n++) {
    // Tonyukuk yazıtı korpusta TY1 / TY2 diye iki taş olarak duruyor.
    for (const on of yazit === "TY" ? ["TY1", "TY2"] : [yazit]) {
      const id = `${on}-${yuz}-${n}`;
      if (dizeler.has(id)) { cikti.push(id); break; }
    }
  }
  return cikti;
}

/** Belgedeki birimin "- Kaynak:" satırlarını bul. */
function belgeKaynaklari(id) {
  const bas = belge.indexOf(`### ${id} ·`);
  if (bas < 0) return [];
  const son = belge.indexOf("\n### ", bas + 1);
  const blok = belge.slice(bas, son < 0 ? undefined : son);
  return [...blok.matchAll(/^- Kaynak:\s*(.+)$/gm)].map((m) => m[1].trim());
}

const ardisikMi = (idler) =>
  idler.every((id, i) => {
    if (i === 0) return true;
    const a = dizeler.get(idler[i - 1]);
    const b = dizeler.get(id);
    return a.kaynak === b.kaynak && a.yuz === b.yuz && b.satir === a.satir + 1;
  });

const onarilan = [];
const kalan = [];

for (const red of veri.alinmayanlar ?? []) {
  const adaylar = belgeKaynaklari(red.id)
    .map(kaynaktanDizeler)
    .filter((d) => d.length);

  // Kaynağın verdiği aralık içindeki her ARDIŞIK alt aralık denenir, en
  // uzunu kazanır. Yalnız baştan kesmek yetmiyor: bir aralığın ilk dizesi
  // elenirken (çevirisi sözcük dizisi olduğu için) kalanı sağlam olabilir.
  let secilen = null;
  for (const tam of adaylar) {
    for (let bas = 0; bas < tam.length; bas++) {
      for (let son = tam.length; son > bas; son--) {
        const parca = tam.slice(bas, son);
        if (secilen && parca.length <= secilen.idler.length) continue;
        if (!ardisikMi(parca)) continue;
        const d = parca.map((id) => dizeler.get(id));
        if (d.some((x) => x.yipranma)) continue;
        if (d.some((x) => sozlukDizisiMi(x.turkce))) continue;
        const kelime = d.reduce((t, x) => t + x.kelimeSayisi, 0);
        if (kelime < EN_AZ || kelime > EN_COK) continue;
        secilen = { idler: parca, dizeler: d, kelime };
      }
    }
    if (secilen) break;
  }

  if (!secilen) {
    kalan.push({ ...red, tamir: "korpusta koşulları sağlayan ardışık aralık yok" });
    continue;
  }

  const d = secilen.dizeler;
  onarilan.push({
    id: red.id,
    kademe: "paragraf",
    // Kabul edilen birimlerde yazıt adı "Bilge Kağan" biçiminde; korpusun
    // kaynakAd alanı "Bilge Kağan Yazıtı" diyor. Aynı yazılsın.
    yazit: d[0].kaynakAd.replace(/\s*Yazıtı$/, ""),
    dizeler: secilen.idler,
    kelimeSayisi: secilen.kelime,
    runik: d.map((x) => x.runik).join(" "),
    // Korpus çevriyazısı sözcükleri " : " ile ayırıyor; kabul edilen
    // birimlerde okunuş boşlukla ayrık. Alıştırma üreticisi sözcükleri
    // boşluktan böldüğü için ayraç sözcük sanılıyordu — düzleştirilir.
    okunus: d
      .map((x) => x.transkripsiyon)
      .join(" ")
      .replace(/\s*:\s*/g, " ")
      .trim(),
    ceviri: d.map((x) => x.turkce).join(" "),
    kaynaklar: [...new Set(d.map((x) => x.dogrulama.kaynak))],
    katman: "kitap",
    denetleyen: null,
    runikDogrulandi: true,
    hizalama: "dizeden",
    korpustanKuruldu: {
      sebep: red.sebep,
      not:
        "Belgedeki kısaltılmış pasaj kullanılmadı; birim korpustaki ardışık " +
        "dize(ler)den kuruldu. Okunuş ve çeviri de o dizelerden geliyor.",
    },
  });
}

veri.birimler.push(...onarilan);
veri.sayi = veri.birimler.length;
if (kalan.length) veri.alinmayanlar = kalan;
else delete veri.alinmayanlar;

const ozet = onarilan
  .map((b) => `  ${b.id} ← ${b.dizeler.join(" + ")} (${b.kelimeSayisi} kelime)`)
  .join("\n");
console.log(
  `onarılan ${onarilan.length} | hâlâ dışarıda ${kalan.length} | toplam birim ${veri.sayi}` +
    (ozet ? `\n${ozet}` : "") +
    (kalan.length ? `\n  dışarıda: ${kalan.map((k) => k.id).join(", ")}` : "")
);

if (kuru) process.exit(0);

writeFileSync(P("05_Kaynak_DB/kurs-birimleri.json"), JSON.stringify(veri, null, 2) + "\n", "utf8");
const uygulama = JSON.parse(readFileSync(P("src/data/generated/kursBirimleri.json"), "utf8"));
uygulama.birimler.push(
  ...onarilan.map(({ ...b }) => b)
);
writeFileSync(
  P("src/data/generated/kursBirimleri.json"),
  JSON.stringify(uygulama, null, 2) + "\n",
  "utf8"
);
console.log("→ 05_Kaynak_DB/kurs-birimleri.json · src/data/generated/kursBirimleri.json");
