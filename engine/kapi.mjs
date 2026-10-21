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
import { denetle as orhunTara, istisnaOku as orhunIstisna } from "./orhun-tara.mjs";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const P = (...s) => path.join(ROOT, ...s);
const RUNE = /[\u{10C00}-\u{10C4F}]/gu;
const HEDEFLER = new Set(["baski", "slayt"]);

export const hex = (c) => "U+" + c.codePointAt(0).toString(16).toUpperCase();
export const runeler = (s) => new Set(String(s).match(RUNE) || []);

const tumBloklar = (doc) => (doc.bolumler ?? []).flatMap((b) => b.bloklar ?? []);
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
  const orhunTaramasi = orhunTara(orhunRaw.dizeler, orhunIstisna(P));   // runik iskelet ↔ transkripsiyon
  const tamgalar = JSON.parse(fs.readFileSync(P("content/tamgalar.json"), "utf8"));
  // Altın sözlük: Latin ↔ runik (mantıksal sıra). Sıra hatası uydurma tamgadan sinsidir: tüm tamgalar geçerli görünür.
  const sozluk = JSON.parse(fs.readFileSync(P("content/sozluk.json"), "utf8")).kelimeler;
  const sozlukDeger = new Set(Object.values(sozluk));

  // Kaynak tamga kümesi
  const kaynak = new Set();
  for (const f of fs.readdirSync(P("00_Kaynaklar")).filter((f) => f.endsWith(".txt")))
    runeler(fs.readFileSync(P("00_Kaynaklar", f), "utf8")).forEach((c) => kaynak.add(c));
  tumMetin(irkRaw).forEach((s) => runeler(s).forEach((c) => kaynak.add(c)));
  orhunRaw.dizeler.forEach((d) => runeler(d.gokturkce).forEach((c) => kaynak.add(c)));
  const metinKaynak = new Set(kaynak);   // yalnız metinlerden (txt + DB'ler) gelen tamgalar
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
  orhunTaramasi.hata.forEach(hata);

  // tamgalar.json denetimi: metin kaynaklarında geçmeyen tamga içeren grup 'kaynak' alanı bildirmeli (Unicode/font gibi)
  for (const g of tamgalar.gruplar) {
    const dis = g.tamgalar.map((t) => String.fromCodePoint(parseInt(t.cp.slice(2), 16))).filter((c) => !metinKaynak.has(c));
    if (dis.length && !g.kaynak) hata(`[tamgalar.json › ${g.id}] metin kaynaklarında olmayan ${dis.length} tamga var, grup 'kaynak' bildirmiyor: ${dis.map(hex).join(" ")}`);
    for (const t of g.tamgalar) if (!cmap.has(parseInt(t.cp.slice(2), 16))) hata(`[tamgalar.json › ${g.id}] ${t.cp} Noto'da yok`);
  }

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

  // 'hatali' olarak bilinçli gösterilen ters/yanlış yazımlar ters-sıra taramasından muaf
  const hataliIzin = new Set();
  for (const f of fs.readdirSync(P("content")).filter((f) => f.endsWith(".json")))
    for (const k of tumBloklar(JSON.parse(fs.readFileSync(P("content", f), "utf8"))))
      if (k.type === "ornek-kelime") for (const o of k.ornekler) if (o.hatali) hataliIzin.add(o.hatali);

  // Kural: 3+ harfli maddelerde ters dizi alt-dizi olarak aranır (eski davranış). ≤2 harfli maddelerde
  // (kut 𐰸𐱃 ↔ tokuz içindeki 𐱃𐰸) yanlış pozitif kaçınılmaz → ters dizi yalnız RUNİK KELİME SINIRINDA eşleşir:
  // hemen öncesi ve sonrası Eski Türk harfi (U+10C00–10C48) OLMAMALI (boşluk, ":", etiket, satır ucu olabilir).
  const RUNIK_HARF = "[\\u{10C00}-\\u{10C48}]";
  const kacir = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  function tersSiraDenetle(metin, baglam) {
    for (const [lat, run] of Object.entries(sozluk)) {
      const harf = [...run];
      if (harf.length < 2) continue;
      const ters = harf.reverse().join("");
      if (ters === run || sozlukDeger.has(ters) || hataliIzin.has(ters)) continue;
      const bulundu = harf.length <= 2
        ? new RegExp(`(?<!${RUNIK_HARF})${kacir(ters)}(?!${RUNIK_HARF})`, "u").test(metin)
        : metin.includes(ters);
      if (bulundu) hata(`[${baglam}] TERS SIRA: '${lat}' görsel sırada yazılmış (${ters}); mantıksal sıra ${run} olmalı`);
    }
  }
  function sozlukEsle(lat, runik, baglam) {
    const anahtar = lat.toLowerCase().replace(/\s*—\s*irk bitig$/i, " (irk bitig)").replace(/\s*—\s*orhun$/i, "").trim();
    const bekl = sozluk[anahtar];
    if (bekl && bekl !== runik) hata(`[${baglam}] SÖZLÜK UYUŞMAZLIĞI: '${anahtar}' = ${runik}, sözlükte ${bekl}`);
  }

  function belgeDenetle(doc) {
    const ad = doc.id || "?";
    for (const k of tumBloklar(doc)) {
      if (k.type === "ornek-kelime") for (const o of k.ornekler) sozlukEsle(o.latin.split("(")[0], o.runik, `${ad} ornek-kelime`);
      if (k.type === "alistirma") for (const m of k.maddeler) if (m.cevap && m.cevapRunik) sozlukEsle(m.cevap, m.cevapRunik, `${ad} alistirma`);
    }
    tersSiraDenetle(tumMetin(doc).join("\n"), ad);
    if (!validate(doc))
      for (const e of validate.errors) hata(`[${ad}] ŞEMA ${e.instancePath || "/"}: ${e.message}`);
    doc.bolumler?.forEach((b, bi) =>
      b.bloklar?.forEach((k, ki) => {
        const yer = `${ad} › ${b.id ?? bi} › blok ${ki} (${k.type})`;
        if (!Array.isArray(k.targets) || !k.targets.length) hata(`[${yer}] targets boş`);
        else for (const t of k.targets) if (!HEDEFLER.has(t)) hata(`[${yer}] bilinmeyen target '${t}'`);
        if (k.type === "metin-ref" && !refCoz(k)) hata(`[${yer}] KIRIK metin-ref: ${k.db}:${k.ref}`);
        if (k.type === "tamga-grid" && k.grup !== "*")
          for (const gid of k.grup.split(",").map((x) => x.trim()))
            if (!tamgalar.gruplar.some((g) => g.id === gid)) hata(`[${yer}] bilinmeyen tamga grubu '${gid}'`);
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

  return { orhunTaramasi, irk, orhun, tamgalar, kaynak, cmap, sozluk, belgeDenetle, ciktiDenetle, tersSiraDenetle, refCoz, sonuc, hatalar };
}

// ---------- CLI ----------
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const g = await kapiHazirla();
  const dosyalar = fs.readdirSync(P("content")).filter((f) => f.endsWith(".json") && !["tamgalar.json", "sozluk.json"].includes(f));
  for (const f of dosyalar) {
    const doc = JSON.parse(fs.readFileSync(P("content", f), "utf8"));
    const r = g.belgeDenetle(doc);
    console.log(`${f.padEnd(22)} farklı tamga: ${String(r.farkli).padStart(2)} | kaynaksız: ${r.hurda} | tofu: ${r.tofu}`);
  }
  // Sayı modülü: her runik dizi korpusta TANIKLI olmalı. Sayı öğeleri
  // kuraldan üretilmez — kitaptan okunuş, korpustan tamga gelir. Burada
  // eşleşmeyen bir dizi varsa çıkarıcıda hata var demektir.
  const sayiYolu = P("src/data/generated/sayilar.json");
  if (fs.existsSync(sayiYolu)) {
    const sayilar = JSON.parse(fs.readFileSync(sayiYolu, "utf8")).ogeler ?? [];
    const korpusRunik = new Set(
      JSON.parse(fs.readFileSync(P("src/data/generated/kelimeler.json"), "utf8")).map((k) => k.runik)
    );
    let tanikli = 0;
    for (const o of sayilar) {
      const parcalar = String(o.runik).split(" : ").filter(Boolean);
      const eksik = parcalar.filter((x) => !korpusRunik.has(x));
      if (eksik.length) g.hatalar.push(`sayilar.json ${o.id}: korpusta geçmeyen tamga dizisi ${eksik.join(" ")}`);
      else tanikli++;
      for (const ch of [...String(o.runik)]) {
        const kod = ch.codePointAt(0);
        if (kod < 0x10c00 || kod > 0x10c4f) continue;          // ayraç ve boşluk
        if (!g.kaynak.has(ch)) g.hatalar.push(`sayilar.json ${o.id}: kaynaksız tamga ${ch}`);
        if (!g.cmap.has(kod)) g.hatalar.push(`sayilar.json ${o.id}: yazı tipinde yok (tofu) ${ch}`);
      }
    }
    console.log(`sayı modülü           : ${sayilar.length} öğe | korpusta tanıklı: ${tanikli}`);
  }

  // Bilge Alp'in sözleri: Eski Türkçe sözcükler onaylı sözlüğe bağlı mı?
  // Maskot süs değil, öğretim yüzeyi — kaynaksız ya da sözlükte olmayan bir
  // sözcüğe bağlanan söz, uydurma anlam gösterir.
  const sozlerYolu = P("src/data/bilgeSozleri.ts");
  const sozlukYolu = P("src/data/generated/sozluk.json");
  if (fs.existsSync(sozlerYolu) && fs.existsSync(sozlukYolu)) {
    const sozluk = JSON.parse(fs.readFileSync(sozlukYolu, "utf8"));
    const kaynakli = new Map(sozluk.map((k) => [k.id, k.kaynak]));
    const kullanilan = [
      ...new Set(
        [...fs.readFileSync(sozlerYolu, "utf8").matchAll(/sozcuk:\s*'([^']+)'/g)].map((m) => m[1])
      ),
    ];
    for (const id of kullanilan) {
      if (!kaynakli.has(id)) g.hatalar.push(`bilgeSozleri: onaylı sözlükte yok — ${id}`);
      else if (!kaynakli.get(id)) g.hatalar.push(`bilgeSozleri: kaynaksız sözcüğe bağlanmış — ${id}`);
    }
    console.log(`Bilge Alp sözleri     : ${kullanilan.length} sözcük bağı, hepsi onaylı sözlükten`);
  }

  for (const f of ["Gokturkce_Kurs_Teklifi_Revize.md", "Gokturkce_Kurs_Teklifi_Revize.html", "brosur-a5.html"])
    if (fs.existsSync(P(f))) { g.tersSiraDenetle(fs.readFileSync(P(f), "utf8"), f); g.ciktiDenetle(fs.readFileSync(P(f), "utf8"), f); }
  console.log(`kaynak tamga kümesi: ${g.kaynak.size} | Noto cmap: ${g.cmap.size} kod noktası | sözlük: ${Object.keys(g.sozluk).length} kelime | orhun-db taraması: ${g.orhunTaramasi.sapma} gerekçeli sapma (kalan istisna)`);
  const h = g.sonuc();
  if (h.length) { console.error("\nGÜVENLİK KAPISI BAŞARISIZ:\n  " + h.join("\n  ")); process.exit(1); }
  console.log("GÜVENLİK KAPISI: GEÇTİ");
}
