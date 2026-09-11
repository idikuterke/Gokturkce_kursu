// 2026-09-11 — Ata(2011)·Tanyeri·Tekin hizalaması (kullanıcı kararları 2026-09-11)
// Kararlar: 𐱅𐰇𐰼𐰜 = türük (Ata+Tanyeri+Tekin, KT G1); transkripsiyon standardı Ata çizgisi (-mış);
// kişi adları Köl Tigin · Tunyukuk; tam hizalama (rapor: 00_Kaynaklar/kitaplar/ata_tanyeri_karsilastirma_raporu.md)
// Idempotent: her işlem varlık kontrolü yapar. CRLF/LF korunur. engine/kapi.mjs'e dokunulmaz.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const P = (...a) => path.join(ROOT, ...a);

function oku(f) {
  const t = fs.readFileSync(P("content", f), "utf8");
  return { veri: JSON.parse(t), crlf: t.includes("\r\n"), sonNL: t.endsWith("\n") };
}
function yaz(f, d) {
  let o = JSON.stringify(d.veri, null, 1);
  if (d.crlf) o = o.replace(/\n/g, "\r\n");
  if (d.sonNL) o += d.crlf ? "\r\n" : "\n";
  fs.writeFileSync(P("content", f), o);
  console.log("yazıldı:", f);
}
function degistir(s, eski, yeni, etiket) {
  if (s.includes(yeni)) return s; // idempotent
  if (!s.includes(eski)) throw new Error("bulunamadı: " + etiket + " → " + eski.slice(0, 60));
  return s.split(eski).join(yeni);
}
// Tüm string alanlarda özyinelemeli değiştirme (yazım birliği için)
function yinele(v, fn) {
  if (typeof v === "string") return fn(v);
  if (Array.isArray(v)) return v.map((x) => yinele(x, fn));
  if (v && typeof v === "object") { for (const k of Object.keys(v)) v[k] = yinele(v[k], fn); return v; }
  return v;
}
const R = (eski, yeni) => (s) => s.includes(eski) ? s.split(eski).join(yeni) : s;

// ---------- 1) Yazım birliği: Kül Tigin → Köl Tigin, Tonyukuk → Tunyukuk ----------
const YAZIM = [R("Kül Tigin", "Köl Tigin"), R("Tonyukuk", "Tunyukuk")];
for (const f of ["yedigun-1.json", "yedigun-2.json", "yedigun-3.json", "yedigun-4.json", "kitapcik.json", "yapraklar.json", "ek-uniteler.json", "irkbitig-foyu.json", "degerlendirme.json"]) {
  const d = oku(f);
  const once = JSON.stringify(d.veri);
  d.veri = yinele(d.veri, (s) => YAZIM.reduce((acc, r) => r(acc), s));
  if (JSON.stringify(d.veri) !== once) yaz(f, d); else console.log("yazım birliği: değişiklik yok", f);
}

// ---------- 2) sozluk.json: türk→türük + 12 yeni kelime (yazıt tanıklı) ----------
{
  const s = oku("sozluk.json");
  const k = s.veri.kelimeler;
  if (k["türk"] && !k["türük"]) { const v = k["türk"]; delete k["türk"]; k["türük"] = v; }
  const yeni = {
    "bilig": "𐰋𐰃𐰠𐰃𐰏",   // KT G7 (Ata s.144)
    "edgü": "𐰓𐰏𐰇",       // Tanyeri s.11 md.1; Tekin sözlük
    "üküş": "𐰇𐰚𐱁",       // KT G6-7 (Ata s.144)
    "kūt": "𐰴𐰸𐱃",        // Tanyeri s.12 md.9 (ligatür+ünlü = uzunluk)
    "kōp": "𐰴𐰸𐰉",        // Tanyeri s.12 md.9; KT G2/G9
    "altun": "𐰞𐱃𐰆𐰣",     // KT G5 (Ata s.144)
    "sub": "𐰽𐰆𐰉",        // KT D10-11 (ıduk yiri subı)
    "men": "𐰢𐰤",          // KT/BK (män; Tekin §119)
    "üçün": "𐰇𐰲𐰤",       // KT G9 (Ata s.144); Tanyeri md.3
    "teg": "𐱅𐰏",          // KT G1 (täŋri täg)
    "yagı": "𐰖𐰍𐰃",       // A sözlük; Tanyeri s.13
    "törü": "𐱅𐰇𐰼𐰇"       // KT D1 (Ata s.86)
  };
  let n = 0;
  for (const [a, b] of Object.entries(yeni)) if (!k[a]) { k[a] = b; n++; }
  if (n || k["türük"]) yaz("sozluk.json", s); else console.log("sozluk: değişiklik yok");
}

// ---------- 3) türük: cuzdan-karti (ham metin değişimi) ----------
{
  const f = "cuzdan-karti.json";
  let t = fs.readFileSync(P("content", f), "utf8");
  const o = t;
  t = t.split("𐱅𐰇𐰼𐰜</span> = türk").join("𐱅𐰇𐰼𐰜</span> = türük");
  if (t !== o) { fs.writeFileSync(P("content", f), t); console.log("yazıldı:", f); }
}

// ---------- 4) DB: KT-G-1 transkripsiyon TÜRK → TÜRÜK (ham, biçim korunur) ----------
{
  const f = P("05_Kaynak_DB", "orhun-db-v1.json");
  let t = fs.readFileSync(f, "utf8");
  const o = t;
  t = t.split("BOLMuŞ : TÜRK : BİLGE").join("BOLMuŞ : TÜRÜK : BİLGE");
  if (t !== o) { fs.writeFileSync(f, t); console.log("yazıldı: orhun-db-v1.json (KT-G-1 TÜRÜK)"); }
}

// ---------- 5) yedigun-1: teŋri yumuşatma + yazıt kimlik kartı slaytı ----------
{
  const y = oku("yedigun-1.json");
  for (const b of y.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.id === "kesif" && bl.html)
      bl.html = degistir(bl.html,
        "<li>İlk çözülen kelime: <b>Tengri</b> <span class=\"runic\">𐱅𐰭𐰼𐰃</span></li>",
        "<li>Thomsen'in anahtar sözcüklerinden biri: <b>teŋri</b> <span class=\"runic\">𐱅𐰭𐰼𐰃</span> (Ata 2011 s.67)</li>",
        "y1 kesif");
    if (bl.type === "gorsel" && bl.alt === "Taşa kazınmış Tengri: 𐱅𐰭𐰼𐰃")
      bl.alt = "Taşa kazınmış teŋri: 𐱅𐰭𐰼𐰃";
    if (bl.type === "gorsel" && (bl.altyazi || "").startsWith("İlk çözülen kelime: Tengri"))
      bl.altyazi = bl.altyazi.replace("İlk çözülen kelime: Tengri", "Thomsen'in anahtar sözcüklerinden teŋri");
  }
  const bloklar = y.veri.bolumler.find((b) => b.id === "ders-1-tarihce").bloklar;
  if (!bloklar.some((x) => x.id === "yazit-kimlik")) {
    const i = bloklar.findIndex((x) => x.type === "metin-ref" && x.ref === "KT-G-1");
    if (i < 0) throw new Error("y1: KT-G-1 metin-ref yok");
    bloklar.splice(i, 0, {
      type: "prose", targets: ["slayt"], id: "yazit-kimlik",
      html:
        "<h3>Yazıt Kimlik Kartı</h3>" +
        "<table class=\"tablo\"><tr><th>Yazıt</th><th>Tarih</th><th>Kişisi</th></tr>" +
        "<tr><td><b>Köl Tigin</b> (KT)</td><td>732</td><td>Köl Tigin adına; kardeşi Bilge Kağan diktirdi</td></tr>" +
        "<tr><td><b>Bilge Kağan</b> (BK)</td><td>735</td><td>Bilge Kağan adına</td></tr>" +
        "<tr><td><b>Tunyukuk</b> (T)</td><td>~720'ler</td><td>Başbakan Tunyukuk adına</td></tr></table>" +
        "<p class=\"not\">Bulunuş: Yadrintsev 1889 · Radloff atlası 1892 — Çözüm: V. Thomsen, 25 Kasım 1893 / ilan 15 Aralık 1893 (Ata 2011 s.66-67; Tanyeri s.5).</p>" +
        "<p class=\"not\">Okunuş notu: u/o ve ö/ü tek tamga olduğu için ayrılmaz (Kül~Köl, Tonyukuk~Tunyukuk); bu kursta <b>Köl Tigin</b> ve <b>Tunyukuk</b> (Tanyeri s.10).</p>"
    });
    yaz("yedigun-1.json", y);
  } else console.log("yedigun-1: kimlik kartı zaten var");
}

// ---------- 6) yedigun-2: kural-1 notu, kural-3b slaytı, -mış ----------
{
  const y = oku("yedigun-2.json");
  for (const b of y.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.id === "kural-1" && bl.html)
      bl.html = degistir(bl.html,
        "<p class=\"not\">Aysu Ata transkripsiyonunda yazılmayan ünlü parantezle gösterilir: <span class=\"cevrim\">(e)s(e)n</span>, <span class=\"cevrim\">(a)t(a)r</span></p>",
        "<p class=\"not\">Aysu Ata transkripsiyonunda (Ata 2011 s.67) yazılmayan ünlü parantezle gösterilir: <span class=\"cevrim\">(a)d(a)k</span>, <span class=\"cevrim\">(e)r(e)n</span> — ünsüz damgalar a/e sesini hece değeri olarak taşır (Tekin §22).</p>",
        "y2 kural-1");
    if (bl.id === "uzun-unlu-ve-uyumsuz-ekler" && bl.html)
      bl.html = degistir(bl.html,
        "-miş hep ince (sakınmiş; Tekin §68).",
        "-mış hep ince (sakınmış; ş = ince s² 𐱁 — Tekin §68 okuyuşu -miş).",
        "y2 -mış");
    if (bl.id === "ligatur-okuma" && Array.isArray(bl.ornekler))
      for (const o of bl.ornekler) if (o.latin === "türk") { o.latin = "türük"; if (!(o.aciklama || "").includes("türük")) o.aciklama = (o.aciklama || "") + " KT G1 okunuşu: türük."; }
  }
  const bloklar = y.veri.bolumler.find((b) => b.id === "ders-1-tasarruf").bloklar;
  if (!bloklar.some((x) => x.id === "kural-3b")) {
    const i = bloklar.findIndex((x) => x.id === "kural-3");
    if (i < 0) throw new Error("y2: kural-3 yok");
    bloklar.splice(i + 1, 0, {
      type: "prose", targets: ["slayt"], id: "kural-3b",
      html:
        "<h3>Kural 3b — İlk hece sonrası ünlü</h3>" +
        "<table class=\"tablo\"><tr><th>Kombinasyon</th><th>Yazım</th><th>Örnek</th></tr>" +
        "<tr><td>düz → düz-dar (ı/i)</td><td>yazılmaz</td><td><span class=\"cevrim\">s(e)b(i)n(i)p</span> · <span class=\"cevrim\">buŋs(ı)z</span></td></tr>" +
        "<tr><td>düz → yuvarlak</td><td>yazılır</td><td><span class=\"cevrim\">ıduk</span> <span class=\"runic\">𐰃𐰑𐰆𐰴</span> · <span class=\"cevrim\">k(e)lürt(ü)m</span></td></tr>" +
        "<tr><td>yuvarlak → yuvarlak</td><td>yazılmaz</td><td><span class=\"cevrim\">ul(u)g</span> · <span class=\"cevrim\">köŋ(ü)l</span></td></tr>" +
        "<tr><td>yuvarlak → düz</td><td>yazılır</td><td><span class=\"cevrim\">oglıtı</span> <span class=\"runic\">𐰆𐰍𐰞𐰃𐱃</span> · <span class=\"cevrim\">süçig</span></td></tr></table>" +
        "<p class=\"not\">Ata 2011 s.67-68; Tanyeri s.12 md.3, 5-7. bodun'daki “içses u düşer” aslında bu tablonun 3. satırıdır.</p>"
    });
    yaz("yedigun-2.json", y);
  } else console.log("yedigun-2: kural-3b zaten var");
}

// ---------- 7) yedigun-4: Q12 türük, atölye maddeleri, artukı, bodun açıklaması ----------
{
  const y = oku("yedigun-4.json");
  for (const b of y.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.type === "quiz" && bl.konu === "12 · Okuma") {
      if (Array.isArray(bl.secenekler) && bl.secenekler.includes("Türk")) bl.secenekler[bl.secenekler.indexOf("Türk")] = "Türük";
      if (bl.geriBildirim && (bl.geriBildirim.ok || "").includes("➔ Türk."))
        bl.geriBildirim.ok = "t² + ö/ü + r² + ÖK/ÜK ➔ Türük (KT G1 okunuşu; T 1-3'te ayrıca türk yazımı).";
    }
    if (Array.isArray(bl.maddeler))
      for (const m of bl.maddeler) if (m.soru === "türk") { m.soru = "türük"; m.cevap = "türük"; if (!(m.aciklama || "").includes("türük")) m.aciklama = (m.aciklama || "") + " — okunuş: türük (KT G1)"; }
    if (bl.id === "sayi-mantik" && bl.html && !bl.html.includes("artukı"))
      bl.html = degistir(bl.html,
        "Formül: [birlik] + [hedef onluk]. Aysu Ata disiplini: yazılmayan ünlü parantezde — yeg(i)rmi.</p>",
        "Formül: [birlik] + [hedef onluk]. Aysu Ata disiplini: yazılmayan ünlü parantezde — yeg(i)rmi.</p>" +
        "<p><b>artukı ile toplama:</b> kalan birlikler <span class=\"cevrim\">artukı</span> (“artan”) ile eklenir: <span class=\"cevrim\">yegirmi artukı yiti</span> = 27 (Tanyeri s.19).</p>",
        "y4 artukı");
    if (Array.isArray(bl.maddeler))
      for (const m of bl.maddeler) if ((m.aciklama || "") === "kalın b + o/u + kalın d + kalın n; içses u düşer")
        m.aciklama = "kalın b + o/u + kalın d + kalın n; yuvarlaktan sonra yuvarlak yazılmaz (Kural 3b)";
  }
  yaz("yedigun-4.json", y);
}

// ---------- 8) kitapcik: teŋri, Kural 3b, -mış, atıflar, TUR203, 6.1 künyeler ----------
{
  const k = oku("kitapcik.json");
  const uygulanan = {};
  const soft = (etiket, eski, yeni) => (s) => {
    if (s.includes(yeni)) { uygulanan[etiket] = true; return s; }
    if (!s.includes(eski)) return s;
    uygulanan[etiket] = true;
    return s.split(eski).join(yeni);
  };
  const f = (s) => {
    let r = s;
    r = soft("k 2.1 teŋri",
      "İlk çözülen kelimenin “Tengri” (<span class=\"runic\">𐱅𐰭𐰼𐰃</span>) olduğu vurgulanır.",
      "çözümün anahtar sözcüklerinden biri olan “teŋri” (<span class=\"runic\">𐱅𐰭𐰼𐰃</span>; Ata 2011 s.67) gösterilir.")(r);
    r = soft("k 2.2 kural 3b",
      "<li><b>İçseste dar ünlülerin düşmesi:</b> Kök ek aldığında vurgusuz orta hecedeki dar ünlüler düşer: <span class=\"cevrim\">ogul + an</span> ➔ <span class=\"cevrim\">oglan</span> (<span class=\"runic\">𐰉𐰍𐰞𐰣</span>).</li>",
      "<li><b>İçseste dar ünlülerin düşmesi:</b> Kök ek aldığında vurgusuz orta hecedeki dar ünlüler düşer: <span class=\"cevrim\">ogul + an</span> ➔ <span class=\"cevrim\">oglan</span> (<span class=\"runic\">𐰉𐰍𐰞𐰣</span>).</li>" +
      "<li><b>İlk hece sonrası ünlü (Kural 3b):</b> düz→düz-dar yazılmaz (<span class=\"cevrim\">s(e)b(i)n(i)p</span>); düz→yuvarlak yazılır (<span class=\"cevrim\">ıduk</span>); yuvarlak→yuvarlak yazılmaz (<span class=\"cevrim\">ul(u)g</span>); yuvarlak→düz yazılır (<span class=\"cevrim\">oglıtı</span>) — Ata 2011 s.67-68; Tanyeri s.12 md.3, 5-7.</li>")(r);
    r = soft("k 2.2 -mış",
      "Geçmiş zaman <b>-mış</b>: kalın kökte de ince kalır (<span class=\"cevrim\">kagansıramiş, sakınmiş</span> — Tekin §68 okuyuşu).",
      "Geçmiş zaman sıfat-fiili <b>-mış</b>: ekin ş'si kalın kökte de ince s² <span class=\"runic\">𐱁</span> ile yazılır (<span class=\"cevrim\">kagansıramış</span> KT D 13, <span class=\"cevrim\">sakınmış</span> IB 42; Tekin §68 okuyuşu -miş).")(r);
    r = soft("k A. Ata atıf",
      "Kaynak: Tekin 2003: s. 55-57 §76-86; +nı için s. 109 §262; A. Ata.",
      "Kaynak: Tekin 2003: s. 55-57 §76-86; +nı için s. 109 §262; Ata 2011: Ü5 s.86-87.")(r);
    r = soft("k TUR203",
      "(Ankara Üniversitesi TUR203 Köktürkçe ders standartları)",
      "(Ata 2011 — <i>Orhun Türkçesi</i>, AÖF)")(r);
    r = soft("k 6.1 künyeler",
      "<p class=\"not\">Akademik çerçeve: Prof. Dr. Aysu Ata'nın metot ve terminolojisi ile Talat Tekin gramer sistemi esas alınmıştır.</p>",
      "<ul>\n  <li>Aysu Ata, <i>Orhun Türkçesi</i>, AÖF Yayınları (ed. Gülsevin–Tulum), 2011 — metot ve terminoloji; transkripsiyon standardı (Ata çizgisi).</li>\n  <li>Talat Tekin, <i>Orhon Türkçesi Grameri: Eski Yazıt Dili</i>, Türk Dil Kurumu, 2003 — gramer sistemi.</li>\n  <li>Yavuz Tanyeri, <i>Göktürk Yazısını Öğrenme Kılavuzu</i> — pedagojik dizim ve deşifre alıştırmaları.</li>\n</ul>\n<p class=\"not\">Akademik çerçeve: Ata metodu ve terminolojisi ile Tekin gramer sistemi esas alınmıştır.</p>")(r);
    return r;
  };
  let degisti = false;
  for (const b of k.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.html) { const yeni = f(bl.html); if (yeni !== bl.html) { bl.html = yeni; degisti = true; } }
  }
  const beklenen = ["k 2.1 teŋri", "k 2.2 kural 3b", "k 2.2 -mış", "k A. Ata atıf", "k TUR203", "k 6.1 künyeler"];
  const eksik = beklenen.filter((x) => !uygulanan[x]);
  if (eksik.length) throw new Error("kitapcik: uygulanamayan işlem: " + eksik.join(", "));
  if (degisti) yaz("kitapcik.json", k); else console.log("kitapcik: değişiklik yok");
}

// ---------- 9) ek-uniteler: A. Ata atıfı ----------
{
  const e = oku("ek-uniteler.json");
  let degisti = false;
  for (const b of e.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.html && bl.html.includes("(ölsik: §79 s. 56); A. Ata.")) {
      bl.html = degistir(bl.html, "(ölsik: §79 s. 56); A. Ata.", "(ölsik: §79 s. 56); Ata 2011: Ü5 s.86-87.", "ek-uniteler atıf");
      degisti = true;
    }
  }
  if (degisti) yaz("ek-uniteler.json", e); else console.log("ek-uniteler: değişiklik yok");
}

// ---------- 10) yapraklar: A.2 deşifre listesi 4 → 12 ----------
{
  const p = oku("yapraklar.json");
  const eski =
    "<ol>\n    <li><span class=\"runic tamga-buyuk\">𐱅𐰭𐰼𐰃</span> — Okunuşu: <span class=\"blank\"></span></li>\n" +
    "    <li><span class=\"runic tamga-buyuk\">𐰉𐰖</span> — Okunuşu: <span class=\"blank\"></span></li>\n" +
    "    <li><span class=\"runic tamga-buyuk\">𐰽𐰺𐰃𐰍</span> — Okunuşu: <span class=\"blank\"></span></li>\n" +
    "    <li><span class=\"runic tamga-buyuk\">𐰋𐰃𐰠𐰏𐰀</span> — Okunuşu: <span class=\"blank\"></span></li>\n  </ol>";
  const li = (r) => `    <li><span class="runic tamga-buyuk">${r}</span> — Okunuşu: <span class="blank"></span></li>`;
  const yeni =
    "<ol>\n" + ["𐱅𐰭𐰼𐰃", "𐰉𐰖", "𐰽𐰺𐰃𐰍", "𐰋𐰃𐰠𐰏𐰀", "𐰋𐰃𐰠𐰃𐰏", "𐰓𐰏𐰇", "𐰇𐰚𐱁", "𐰴𐰸𐱃", "𐰃𐰑𐰆𐰴", "𐰞𐱃𐰆𐰣", "𐰽𐰆𐰉", "𐰢𐰤"]
      .map(li).join("\n") + "\n  </ol>\n  <p style=\"font-size:9pt;margin-top:2mm\">Yazıt yerleri: KT/BK G-D dizeleri (Ata 2011 Ü8); deşifre listesi modeli: Tanyeri s.13.</p>";
  let degisti = false;
  for (const b of p.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.html && bl.html.includes(eski)) { bl.html = bl.html.split(eski).join(yeni); degisti = true; }
  }
  if (degisti) yaz("yapraklar.json", p); else console.log("yapraklar: değişiklik yok");
}

// ---------- 11) degerlendirme: Q9 türük + Soru 10 (transliterasyon→transkripsiyon) ----------
{
  const d = oku("degerlendirme.json");
  const b1 = d.veri.bolumler.find((b) => b.id === "gokturkce-temel-okuma-yazma-kursu-bilgi-yarismasi");
  const b2 = d.veri.bolumler.find((b) => b.id === "yarisma-cevap-anahtari");
  if ((b1.ozet || "").includes("9 soruluk")) b1.ozet = b1.ozet.replace("9 soruluk", "10 soruluk");
  const html1 = b1.bloklar[0].html;
  if (!html1.includes("Soru 10")) {
    b1.bloklar[0].html = html1
      .replace("<p>A) Tengri<br>B) Türk<br>C) Töre<br>D) Ötüken</p>", "<p>A) Tengri<br>B) Türük<br>C) Töre<br>D) Ötüken</p>")
      .replace("</div>\n",
        "</div>\n<div class=\"soru\">\n  <p class=\"soru-baslik\"><span class=\"puan\">GENEL UYGULAMA</span>Soru 10 — Transliterasyondan Transkripsiyona</p>\n" +
        "  <p>Harf çevirisi <b>/s²b²n²p/</b> olarak verilen kelimenin transkripsiyonu (okunuşu) aşağıdakilerden hangisidir? <span class=\"not\">(Üst simge ² ince ünsüz gösterir; yazılmayan ünlü parantezle tamamlanır.)</span></p>\n" +
        "  <p>A) saban<br>B) sebinip<br>C) sabin<br>D) sebep</p>\n</div>\n");
  }
  const html2 = b2.bloklar[0].html;
  if (!html2.includes("<td class=\"merkez\">10</td>")) {
    b2.bloklar[0].html = html2
      .replace("<td>t-ü-r-k harfleriyle sağdan sola doğru “Türk” yazmaktadır.</td>",
        "<td>t-ü-r-ük dizilişiyle sağdan sola “türük” yazmaktadır (KT G1; Ata + Tanyeri + Tekin).</td>")
      .replace("</table>",
        "  <tr><td class=\"merkez\">10</td><td class=\"merkez\"><b>B</b></td><td>² işaretleri ince s-b-n'i gösterir; yazılmayan e/ı/i parantezle tamamlanır: <span class=\"cevrim\">s(e)b(i)n(i)p</span> = sebinip (Ata 2011 Ü4 s.6).</td></tr>\n</table>");
  }
  yaz("degerlendirme.json", d);
}

console.log("bitti");
