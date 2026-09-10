// Orhun yazıtları veri tabanı üretici.
// Kaynak: turkbitig.com ham HTML (05_Kaynak_DB/ham/turkbitig/*.html) — runik metin Unicode olarak sitede mevcut.
// Runik diziler kaynaktan AYNEN alınır; hiçbir tamga üretilmez veya değiştirilmez.
import fs from "node:fs";
import path from "node:path";

const ROOT = "E:/Gokturkce_kursu";
const HAM = path.join(ROOT, "05_Kaynak_DB/ham/turkbitig");
const OUT = path.join(ROOT, "05_Kaynak_DB/orhun-db-v1.json");

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
      dogrulandi: false,         // eğitmen kitaptan (Tekin / Ata) karşılaştırınca true yapılır
      etiketler: [],
      kaynakca: { site: "turkbitig.com", url: meta.url, erisim: "2026-09-10" },
    });
  }
  console.log(`${meta.kod}: ${sira} dize`);
}

// Tutarlılık: kelime sayıları üç katmanda eşleşmeli (uyarı olarak yaz)
let uyari = 0;
for (const k of kayitlar) {
  const a = k.kelime_sayisi, b = kelimeler(k.transkripsiyon).length, c = kelimeler(k.turkce).length;
  if (a !== b) { uyari++; k.uyari = `runik ${a} kelime, transkripsiyon ${b} kelime`; }
  else if (b !== c) { k.not = `çeviri kelime sayısı farklı (${c}) — normal`; }
}
const tamgalar = new Set(kayitlar.flatMap((k) => k.gokturkce.match(RUNE) || []));

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
  dizeler: kayitlar,
};
fs.writeFileSync(OUT, JSON.stringify(db, null, 1), "utf8");
console.log(`Yazıldı: ${OUT} | ${kayitlar.length} dize | ${tamgalar.size} farklı tamga | uyuşmazlık: ${uyari}`);
