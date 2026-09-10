// Güvenlik kapısı — TEK KOPYA. Her build hedefi buradan geçer; geçemeyen içerik üretilmez.
//
// Dört denetim:
//   1) Şema: content/*.json → schema/content.schema.json (ajv)
//   2) Tamga: çıktıdaki her Eski Türk karakteri (U+10C00–10C4F) hem KAYNAK kümesinde (00_Kaynaklar/*.txt,
//      Irk Bitig DB, Orhun DB) hem Noto Sans Old Turkic cmap'inde olmalı → uydurma tamga ve tofu yok.
//   3) metin-ref: her referans DB'de çözülmeli (irkbitig: fal_no, orhun: dize id).
//   4) targets: her blokta dolu ve yalnız bilinen değerler.
//
// Kullanım (modül): const g = await kapiHazirla(); g.belgeDenetle(doc); g.ciktiDenetle(html, ad)
// Kullanım (CLI):   node engine/kapi.mjs  → tüm content/*.json'u denetler.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import opentype from "opentype.js";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const P = (...s) => path.join(ROOT, ...s);
const RUNE = /[\u{10C00}-\u{10C4F}]/gu;
const HEDEFLER = new Set(["baski", "slayt"]);

export const hex = (c) => "U+" + c.codePointAt(0).toString(16).toUpperCase();
export const runeler = (s) => new Set(String(s).match(RUNE) || []);

function tumMetin(o, acc = []) {
  if (typeof o === "string") acc.push(o);
  else if (Array.isArray(o)) o.forEach((x) => tumMetin(x, acc));
  else if (o && typeof o === "object") Object.values(o).forEach((x) => tumMetin(x, acc));
  return acc;
}

export async function kapiHazirla() {
  // Veri tabanları
  const irkRaw = JSON.parse(fs.readFileSync(P("00_Kaynaklar/irk-bitig-db-v3.json"), "utf8"));
  const irk = {};
  for (const r of Array.isArray(irkRaw) ? irkRaw : Object.values(irkRaw)) irk[String(r.fal_no)] = r;
  const orhunRaw = JSON.parse(fs.readFileSync(P("05_Kaynak_DB/orhun-db-v1.json"), "utf8"));
  const orhun = Object.fromEntries(orhunRaw.dizeler.map((d) => [d.id, d]));
  const tamgalar = JSON.parse(fs.readFileSync(P("content/tamgalar.json"), "utf8"));

  // Kaynak tamga kümesi
  const kaynak = new Set();
  for (const f of fs.readdirSync(P("00_Kaynaklar")).filter((f) => f.endsWith(".txt")))
    runeler(fs.readFileSync(P("00_Kaynaklar", f), "utf8")).forEach((c) => kaynak.add(c));
  tumMetin(irkRaw).forEach((s) => runeler(s).forEach((c) => kaynak.add(c)));
  orhunRaw.dizeler.forEach((d) => runeler(d.gokturkce).forEach((c) => kaynak.add(c)));
  for (const g of tamgalar.gruplar) for (const t of g.tamgalar) kaynak.add(String.fromCodePoint(parseInt(t.cp.slice(2), 16)));

  // Noto cmap
  const font = opentype.parse(fs.readFileSync(P("03_Tasarim/fontlar/NotoSansOldTurkic-Regular.ttf")).buffer);
  const cmap = new Set(Object.keys(font.tables.cmap.glyphIndexMap).map(Number));

  // Şema
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const schema = JSON.parse(fs.readFileSync(P("schema/content.schema.json"), "utf8"));
  const validate = ajv.compile(schema);

  const hatalar = [];
  const hata = (m) => hatalar.push(m);

  function tamgaDenetle(metin, baglam) {
    const out = runeler(metin);
    const hurda = [...out].filter((c) => !kaynak.has(c));
    const tofu = [...out].filter((c) => !cmap.has(c.codePointAt(0)));
    if (hurda.length) hata(`[${baglam}] KAYNAK DIŞI tamga: ${hurda.map(hex).join(" ")}`);
    if (tofu.length) hata(`[${baglam}] TOFU (Noto'da yok): ${tofu.map(hex).join(" ")}`);
    return { farkli: out.size, hurda: hurda.length, tofu: tofu.length };
  }

  function refCoz(blok) {
    if (blok.db === "irkbitig") return irk[String(blok.ref)] || null;
    if (blok.db === "orhun") return orhun[blok.ref] || null;
    return null;
  }

  function belgeDenetle(doc) {
    const ad = doc.id || "?";
    if (!validate(doc))
      for (const e of validate.errors) hata(`[${ad}] ŞEMA ${e.instancePath || "/"}: ${e.message}`);
    doc.bolumler?.forEach((b, bi) =>
      b.bloklar?.forEach((k, ki) => {
        const yer = `${ad} › ${b.id ?? bi} › blok ${ki} (${k.type})`;
        if (!Array.isArray(k.targets) || !k.targets.length) hata(`[${yer}] targets boş`);
        else for (const t of k.targets) if (!HEDEFLER.has(t)) hata(`[${yer}] bilinmeyen target '${t}'`);
        if (k.type === "metin-ref" && !refCoz(k)) hata(`[${yer}] KIRIK metin-ref: ${k.db}:${k.ref}`);
        if (k.type === "tamga-grid" && k.grup !== "*" && !tamgalar.gruplar.some((g) => g.id === k.grup))
          hata(`[${yer}] bilinmeyen tamga grubu '${k.grup}'`);
      }));
    // Sertifika sınavı: sinav tanımlıysa rol=sertifika quiz sayısı soruSayisi'na eşit olmalı
    if (doc.sinav) {
      const n = (doc.bolumler ?? []).flatMap((b) => b.bloklar ?? []).filter((k) => k.type === "quiz" && k.rol === "sertifika").length;
      if (n !== doc.sinav.soruSayisi) hata(`[${ad}] SINAV: ${n} sertifika sorusu var, ${doc.sinav.soruSayisi} olmalı`);
    }
    // İçerik metnindeki tamgalar da kaynak kümesinde olmalı (prose/html içine elle yazılanlar dâhil)
    return tamgaDenetle(tumMetin(doc).join(""), ad);
  }

  function ciktiDenetle(html, ad) {
    return tamgaDenetle(html, `çıktı:${ad}`);
  }

  function sonuc(sifirla = true) {
    const h = [...hatalar];
    if (sifirla) hatalar.length = 0;
    return h;
  }

  return { irk, orhun, tamgalar, kaynak, cmap, belgeDenetle, ciktiDenetle, refCoz, sonuc, hatalar };
}

// ---------- CLI ----------
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const g = await kapiHazirla();
  const dosyalar = fs.readdirSync(P("content")).filter((f) => f.endsWith(".json") && f !== "tamgalar.json");
  for (const f of dosyalar) {
    const doc = JSON.parse(fs.readFileSync(P("content", f), "utf8"));
    const r = g.belgeDenetle(doc);
    console.log(`${f.padEnd(22)} farklı tamga: ${String(r.farkli).padStart(2)} | kaynaksız: ${r.hurda} | tofu: ${r.tofu}`);
  }
  console.log(`kaynak tamga kümesi: ${g.kaynak.size} | Noto cmap: ${g.cmap.size} kod noktası`);
  const h = g.sonuc();
  if (h.length) { console.error("\nGÜVENLİK KAPISI BAŞARISIZ:\n  " + h.join("\n  ")); process.exit(1); }
  console.log("GÜVENLİK KAPISI: GEÇTİ");
}
