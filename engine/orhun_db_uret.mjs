// Orhun yazıtları veri tabanı üretici.
// Kaynak: turkbitig.com ham HTML (05_Kaynak_DB/ham/turkbitig/*.html) — runik metin Unicode olarak sitede mevcut.
// Runik diziler kaynaktan AYNEN alınır; hiçbir tamga üretilmez veya değiştirilmez.
//
// ELLE DÜZENLEME KATMANI. orhun-db-v1.json'daki Türkçe çeviriler ham
// sayfadaki sözcük hizalı dizelerden değil, elle düzeltilmiş akıcı
// çeviriden geliyor (Tekin yazımı; TÜRÜK, TÜRK değil). Ham HTML'den
// yeniden üretim bunları eziyordu — 23.10.2026'da ölçüldüğünde 214
// dizenin 138'i bozuluyordu.
//
// Çözüm: elle değiştirilmiş alanlar 05_Kaynak_DB/orhun-db-elle.json'da
// ayrı tutuluyor ve üretimden SONRA bindiriliyor. Dosya
// engine/orhun-db-elle-cikar.mjs ile mevcut veri tabanından çıkarıldı.
//
// Her düzenleme, çıkarıldığı andaki ÜRETİLEN değeri de saklıyor. Ham
// sayfa ya da bir düzeltme yaması o alanı değiştirirse üretilen değer
// tutmaz; betik bunu çatışma sayar, yazmayı reddeder ve hangi dizede
// insan kararı gerektiğini söyler. Böylece ne çeviriler kayboluyor ne
// de yeni düzeltmeler sessizce yutuluyor.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { yamaUygula, yamalariOku } from "./orhun-tara.mjs";

// Depo kökü betiğin konumundan bulunur; sabit sürücü yolu taşınmıyordu.
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const HAM = path.join(ROOT, "05_Kaynak_DB/ham/turkbitig");
const OUT = path.join(ROOT, "05_Kaynak_DB/orhun-db-v1.json");
const ELLE = path.join(ROOT, "05_Kaynak_DB/orhun-db-elle.json");

/**
 * Elle düzeltilmiş METİN alanları: ham sayfadaki değerin yerine geçerler,
 * bu yüzden kayda geçirilir ve çatışma denetimine girerler.
 */
export const ELLE_ALANLAR = ["gokturkce", "transkripsiyon", "turkce"];

/**
 * Elle yazılmış dize notları. Tutarlılık denetimi bu alanları kendi
 * üretiyor, bu yüzden denetimden SONRA bindirilirler; yoksa silinirdi.
 * (TY1-K-2'deki U+10C48 kodlama şüphesi notu böyle korunuyor.)
 */
export const ELLE_SON_ALANLAR = ["uyari", "not"];

/**
 * Başka betiklerin yazdığı dize durumu (orhun-dogrulama-gecis.mjs).
 * Ham üretimde boş doğar; düzeltme değil, taşınacak veri — mevcut
 * dosyadan olduğu gibi alınır, elle katmanını şişirmez.
 */
export const TASINAN_ALANLAR = ["dogrulama", "etiketler"];

const YAZITLAR = {
  "kultigin.html":   { kod: "KT", ad: "Kül Tigin Yazıtı",   tarih: 732, url: "https://www.turkbitig.com/orhun-yazitlari/kultigin.html" },
  "bilgekagan.html": { kod: "BK", ad: "Bilge Kağan Yazıtı", tarih: 735, url: "https://www.turkbitig.com/orhun-yazitlari/bilgekagan.html" },
  "tonyukuk.html":   { kod: "TY", ad: "Tonyukuk Yazıtı",    tarih: 730, url: "https://www.turkbitig.com/orhun-yazitlari/tonyukuk.html" },
};
const YUZ = { G: "Güney", D: "Doğu", K: "Kuzey", B: "Batı", GD: "Güneydoğu", GB: "Güneybatı", KD: "Kuzeydoğu" };
const RUNE = /[\u{10C00}-\u{10C4F}]/gu;

const dec = (s) => s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/<[^>]+>/g, "").trim();
const kelimeler = (s) => s.split(":").map((k) => k.trim()).filter(Boolean);

// mt katmanında küçük harf = taşta yazılmayan ünlü. Kelime bazında düşen ünlü sayısını türet.
function dusenUnlu(mt) {
  return kelimeler(mt).map((k) => (k.match(/[a-zıüöçşğ]/g) || []).length);
}

/**
 * Ham HTML'den dize kayıtlarını kurar. elleUygula=false ham üretimi
 * verir; elle katmanını çıkaran betik onu kullanıyor.
 */
export function uret({ elleUygula = true, sessiz = false } = {}) {
const kayitlar = [];
for (const [dosya, meta] of Object.entries(YAZITLAR)) {
  const html = fs.readFileSync(path.join(HAM, dosya), "utf8");
  const re = /<div class="d">([^<]+)<\/div>\s*<div class="mu">([\s\S]*?)<\/div>\s*<div class="mt">([\s\S]*?)<\/div>\s*<div class="mtr">([\s\S]*?)<\/div>/g;
  let m, sira = 0;
  while ((m = re.exec(html))) {
    const id = m[1].trim();                       // örn. TY1-B-1, KT-G-1
    const [, tas, yuz, satir] = id.match(/^([A-Z]+\d?)-([A-Z]+)-(\d+)$/) || [];
    if (!tas) throw new Error(`Beklenmeyen id: ${id}`);
    const gokturkce = dec(m[2]);
    const mt = dec(m[3]), mtr = dec(m[4]);
    const runik = gokturkce.match(RUNE) || [];
    kayitlar.push({
      id,
      kaynak: meta.kod,
      kaynak_ad: meta.ad,
      tas,                       // TY1 / TY2 (Tonyukuk iki taş), KT, BK
      yuz: YUZ[yuz] || yuz,
      yuz_kod: yuz,
      satir: Number(satir),
      sira: ++sira,
      gokturkce,
      transkripsiyon: mt,        // turkbitig gösterimi: küçük harf = yazılmayan ünlü
      turkce: mtr,
      kelime_sayisi: kelimeler(gokturkce).length,
      tamga_sayisi: runik.length,
      dusen_unlu: dusenUnlu(mt),
      yipranma: /---/.test(gokturkce) || /---/.test(mt),
      etiketler: [],
      kaynakca: { site: "turkbitig.com", url: meta.url, erisim: "2026-09-10" },
      // Üç denetim ayrı izlenir; tek bayrak hangisinin yapıldığını gizliyordu.
      // iskelet'i orhun-tara.mjs doldurur (orhun-dogrulama-gecis.mjs), ceviri
      // ve okuma eğitmenin kitaptan (Tekin / Ata) karşılaştırmasını bekler.
      // Alan sırası mevcut veri tabanıyla aynı tutuluyor: yeniden üretim
      // 13 bin satırlık sahte fark üretmesin.
      dogrulama: {
        iskelet: "denetlenmedi",
        ceviri: "denetlenmedi",
        okuma: "denetlenmedi",
        denetleyen: null,
        kaynak: null,
        tarih: null,
      },
    });
  }
  if (!sessiz) console.log(`${meta.kod}: ${sira} dize`);
}

// Kaynak sitedeki bilinen dizgi hatalarının düzeltmeleri (yeniden üretimde kaybolmasın)
const yamalar = yamalariOku((...s) => path.join(ROOT, ...s));
for (const y of yamaUygula(kayitlar, yamalar)) (kayitlar.find((k) => k.id === y.id).duzeltmeler ??= []).push({ sira: y.sira, alan: y.alan || "gokturkce", eski: y.eski, yeni: y.yeni, gerekce: y.gerekce });

// Dize durumunu mevcut dosyadan taşı (denetim kayıtları, etiketler).
let tasinan = 0;
if (elleUygula && fs.existsSync(OUT)) {
  const eski = JSON.parse(fs.readFileSync(OUT, "utf8"));
  const dizin = new Map((eski.dizeler ?? []).map((k) => [k.id, k]));
  for (const k of kayitlar) {
    const e = dizin.get(k.id);
    if (!e) continue;
    for (const alan of TASINAN_ALANLAR) {
      if (e[alan] === undefined) continue;
      k[alan] = e[alan];
      tasinan++;
    }
  }
}

// Elle düzenleme katmanı: yamalardan SONRA bindirilir, türetilmiş
// alanlar bindirmeden sonra hesaplanır.
const catismalar = [];
const elleninAlani = new Set();
let bindirilen = 0;
if (elleUygula && fs.existsSync(ELLE)) {
  const { duzenlemeler = [] } = JSON.parse(fs.readFileSync(ELLE, "utf8"));
  const dizin = new Map(kayitlar.map((k) => [k.id, k]));
  for (const e of duzenlemeler) {
    if (ELLE_SON_ALANLAR.includes(e.alan)) continue; // denetimden sonra
    const k = dizin.get(e.id);
    if (!k) { catismalar.push(`${e.id}: dize artık üretilmiyor`); continue; }
    if (JSON.stringify(k[e.alan]) !== JSON.stringify(e.uretilen)) {
      catismalar.push(
        `${e.id}.${e.alan}: üretilen değer, düzenleme çıkarıldığındakinden farklı — ` +
          `ham sayfa ya da bir yama bu alanı değiştirmiş, insan kararı gerekiyor`
      );
      continue;
    }
    k[e.alan] = e.deger;
    elleninAlani.add(`${e.id}.${e.alan}`);
    bindirilen++;
  }
}

// Türetilmiş alanlar: elle düzenleme bunları etkileyebildiği için en sonda.
for (const k of kayitlar) {
  k.kelime_sayisi = kelimeler(k.gokturkce).length;
  k.tamga_sayisi = (k.gokturkce.match(RUNE) || []).length;
  k.dusen_unlu = dusenUnlu(k.transkripsiyon);
  k.yipranma = /---/.test(k.gokturkce) || /---/.test(k.transkripsiyon);
}

// Tutarlılık: kelime sayıları üç katmanda eşleşmeli (uyarı olarak yaz)
let uyari = 0;
for (const k of kayitlar) {
  const a = k.kelime_sayisi, b = kelimeler(k.transkripsiyon).length, c = kelimeler(k.turkce).length;
  delete k.uyari; delete k.not;
  if (a !== b) { uyari++; k.uyari = `runik ${a} kelime, transkripsiyon ${b} kelime`; }
  // Çeviri kelime sayısı yalnız ham hizalı biçimde anlamlı. Elle
  // düzeltilmiş akıcı çeviri ":" ile bölünmüyor, her dizede uyarı verirdi.
  else if (b !== c && !elleninAlani.has(`${k.id}.turkce`)) {
    k.not = `çeviri kelime sayısı farklı (${c}) — normal`;
  }
}
// Elle yazılmış notları denetimden sonra geri koy.
if (elleUygula && fs.existsSync(ELLE)) {
  const { duzenlemeler = [] } = JSON.parse(fs.readFileSync(ELLE, "utf8"));
  const dizin = new Map(kayitlar.map((k) => [k.id, k]));
  for (const e of duzenlemeler.filter((x) => ELLE_SON_ALANLAR.includes(x.alan))) {
    const k = dizin.get(e.id);
    if (!k) continue;
    if (JSON.stringify(k[e.alan]) !== JSON.stringify(e.uretilen)) {
      catismalar.push(`${e.id}.${e.alan}: üretilen not, düzenleme çıkarıldığındakinden farklı`);
      continue;
    }
    if (e.deger === undefined) delete k[e.alan];
    else k[e.alan] = e.deger;
    bindirilen++;
  }
}

// Alan sırasını sabitle: koşullu alanlar (duzeltmeler, not, uyari) sonradan
// eklendiği için sona düşüyordu, yeniden üretim sahte fark üretiyordu.
const ALAN_SIRASI = [
  "id", "kaynak", "kaynak_ad", "tas", "yuz", "yuz_kod", "satir", "sira",
  "gokturkce", "transkripsiyon", "turkce", "kelime_sayisi", "tamga_sayisi",
  "dusen_unlu", "yipranma", "etiketler", "kaynakca",
  "duzeltmeler", "not", "uyari", "dogrulama",
];
for (let i = 0; i < kayitlar.length; i++) {
  const k = kayitlar[i];
  const duzenli = {};
  for (const alan of ALAN_SIRASI) if (alan in k) duzenli[alan] = k[alan];
  for (const alan of Object.keys(k)) if (!(alan in duzenli)) duzenli[alan] = k[alan];
  kayitlar[i] = duzenli;
}

const tamgalar = new Set(kayitlar.flatMap((k) => k.gokturkce.match(RUNE) || []));

// Üst düzey notların bir kısmı elle yazıldı (tamga varyantları, kaldırılan
// alanın geçmişi). Üretilenler önekleriyle tanınıyor; gerisi korunuyor.
const URETILEN_NOT = /^(DÜZELTME|ELLE|TAŞINAN):/;
const elleNotlar =
  elleUygula && fs.existsSync(OUT)
    ? (JSON.parse(fs.readFileSync(OUT, "utf8")).notlar ?? []).filter((n) => !URETILEN_NOT.test(n))
    : [];

const db = {
  surum: "orhun-db-v1",
  aciklama: "Orhun (Köktürk) yazıtları dize veri tabanı. Runik metin turkbitig.com'dan aynen alınmıştır; transkripsiyon sitenin gösterimidir (küçük harf = taşta yazılmayan ünlü).",
  uretim: new Date().toISOString().slice(0, 10),
  yazitlar: Object.values(YAZITLAR),
  istatistik: {
    dize: kayitlar.length,
    farkli_tamga: tamgalar.size,
    tamgalar: [...tamgalar].sort().map((c) => "U+" + c.codePointAt(0).toString(16).toUpperCase()),
    kelime_uyusmazligi: uyari,
  },
  notlar: [
    ...elleNotlar,
    `DÜZELTME: ${yamalar.length} kelimelik dizgi düzeltmesi 05_Kaynak_DB/orhun-db-duzeltmeler.json'da; dize başına 'duzeltmeler' alanı.`,
    `ELLE: ${bindirilen} alan 05_Kaynak_DB/orhun-db-elle.json'dan bindirildi (akıcı Türkçe çeviri, elle düzeltilmiş çevriyazı).`,
    `TAŞINAN: ${tasinan} alan önceki veri tabanından korundu (denetim kayıtları, etiketler).`,
  ],
  dizeler: kayitlar,
};
// Üst düzey sıra da mevcut dosyayla aynı: ... dizeler, notlar
const { notlar, dizeler, ...bas } = db;
const dbSirali = { ...bas, dizeler, notlar };
  const ozet =
    `${kayitlar.length} dize | ${tamgalar.size} farklı tamga | uyuşmazlık: ${uyari} | ` +
    `elle bindirilen: ${bindirilen} | taşınan: ${tasinan}`;
  return { db: dbSirali, kayitlar, ozet, catismalar, bindirilen, tasinan, uyari };
}

// ——— komut satırı ———
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const YAZ = process.argv.includes("--yaz");
  const ZORLA = process.argv.includes("--catismaya-ragmen");
  const { db, ozet, catismalar } = uret();
  for (const c of catismalar) console.error(`ÇATIŞMA  ${c}`);

  if (catismalar.length && !ZORLA) {
    console.error(
      `\n${catismalar.length} çatışma var; dosya yazılmadı. Her biri için ya elle ` +
        `düzenlemeyi\n05_Kaynak_DB/orhun-db-elle.json içinde güncelle ya da ` +
        `--catismaya-ragmen ile üretilen\ndeğeri kabul et (elle düzenleme o alanda yok sayılır).`
    );
    process.exit(1);
  }
  if (!YAZ) {
    console.log(`SAĞLAMA (dosya yazılmadı): ${ozet}`);
    console.log("Yazmak için --yaz.");
  } else {
    fs.writeFileSync(OUT, JSON.stringify(db, null, 2), "utf8");
    console.log(`Yazıldı: ${OUT} | ${ozet}`);
  }
}
