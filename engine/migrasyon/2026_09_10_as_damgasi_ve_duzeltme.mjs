// 2026-09-10 — 𐰿 "aş" hece damgası geri getirme + būka düzeltmesi + kalın kök/ince ek yazıt örnekleri + Ek Üniteler kapak.
// Kaynak: 00_Kaynaklar/imla_kurallari_13_madde.md, "EK (2026-09-10 ...)" bölümü (NotebookLM raporu: Tekin OTG ss. 27-55; A. Ata; kullanıcı kararları).
// Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur. Yalnız content/*.json'a dokunur; teklif md/html ve AJAN_BRIEF elle düzenlendi.
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

// ---------- A) tamgalar.json: ligatur grubuna 𐰿, yenisey-tam U+10C40 değeri ----------
{
  const t = oku("tamgalar.json");
  let degisti = false;
  const lig = t.veri.gruplar.find((g) => g.id === "ligatur");
  if (!lig) throw new Error("tamgalar: ligatur grubu yok");
  if (!lig.tamgalar.some((x) => x.cp === "U+10C3F")) {
    lig.tamgalar.push({
      cp: "U+10C3F",
      deger: "aş (hece damgası)",
      ad: "ORKHON ASH",
      not: "Orhun yazıtlarında nadir kullanılır; ş sesi için kullanılmaz — ş = 𐱁. Yenisey varyantı U+10C40.",
      kaynak: "Tekin, Orhon Türkçesi Grameri; Unicode 15.1 ORKHON ASH"
    });
    lig.baslik = lig.baslik.replace("(7)", "(8)");
    if (!lig.kaynak) lig.kaynak = "Unicode 15.1 Old Turkic bloğu; 𐰿 (aş): Tekin, Orhon Türkçesi Grameri — 00_Kaynaklar/imla_kurallari_13_madde.md (EK 2026-09-10)";
    degisti = true;
  }
  const yen = t.veri.gruplar.find((g) => g.id === "yenisey-tam");
  const as = yen?.tamgalar.find((x) => x.cp === "U+10C40");
  if (as && as.deger !== "aş — Yenisey varyantı") { as.deger = "aş — Yenisey varyantı"; degisti = true; }
  if (degisti) yaz("tamgalar.json", t); else console.log("tamgalar.json: değişiklik yok");
}

// ---------- B) būka düzeltmesi (sozluk + içerik) ----------
const ESKI = "𐰉𐰆𐰆𐰴𐰀", YENI = "𐰉𐰆𐰸𐰀";
{
  const s = oku("sozluk.json");
  let n = 0;
  if (s.veri.kelimeler["būka"] !== YENI) { s.veri.kelimeler["būka"] = YENI; n++; }
  // C) yeni yazıt örnekleri
  const yeni = { "bodunı": "𐰉𐰆𐰑𐰤", "kaganı": "𐰴𐰍𐰣𐰤", "kızın": "𐰴𐰔𐰤" };
  for (const [k, v] of Object.entries(yeni)) if (!s.veri.kelimeler[k]) { s.veri.kelimeler[k] = v; n++; }
  if (n) yaz("sozluk.json", s); else console.log("sozluk.json: değişiklik yok");
}
for (const f of ["kitapcik.json", "yedigun-2.json"]) {
  const d = oku(f);
  let m = JSON.stringify(d.veri);
  const once = m;
  m = m.split(ESKI).join(YENI)
    .replace("uzun ū iki O/U tamgasıyla (b¹ + U + U + k¹ + A)", "uzun ū için U + UK ligatürü ile ünlü ikilemesi (b¹ + U + UK 𐰸 + A)")
    .replace("(ū = iki U)", "(ū = U + UK ligatürü ile ünlü ikilemesi)");
  if (m !== once) { d.veri = JSON.parse(m); yaz(f, d); } else console.log(f + ": būka değişikliği yok");
}

// ---------- C) kitapcik.json: ince-N paragrafına yazıt örnekleri ----------
{
  const k = oku("kitapcik.json");
  const ISARET = "bodunı</span> (halkı) ➔";
  let yapildi = false;
  for (const b of k.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.type !== "prose" || !bl.html.includes("Kalın kökte ince-N (𐰤) istisnası")) continue;
    if (bl.html.includes(ISARET)) { yapildi = true; break; }
    const hedef = "<span class=\"runic\">𐰑𐰍𐰺𐰤</span>.</p>";
    if (!bl.html.includes(hedef)) throw new Error("kitapcik: adgırın cümlesi bulunamadı");
    bl.html = bl.html.replace(hedef,
      "<span class=\"runic\">𐰑𐰍𐰺𐰤</span>. Yazıt tanıkları: <span class=\"cevrim\">bodunı</span> (halkı) ➔ <span class=\"runic\">𐰉𐰆𐰑𐰤</span> [KT D3]; " +
      "<span class=\"cevrim\">kaganı</span> (kağanı) ➔ <span class=\"runic\">𐰴𐰍𐰣𐰤</span> [KT D19]; " +
      "<span class=\"cevrim\">kızın</span> (kızını) ➔ <span class=\"runic\">𐰴𐰔𐰤</span> [BK K10].</p>");
    yapildi = true;
    yaz("kitapcik.json", k);
  }
  if (!yapildi) throw new Error("kitapcik: ince-N paragrafı bulunamadı");
}

// ---------- C) ek-uniteler.json ÜNİTE D: dudak uyumu dışı 3 ek örnek (transkripsiyon) + D) kapak alt başlığı ----------
{
  const e = oku("ek-uniteler.json");
  let degisti = false;
  const D = e.veri.bolumler.find((b) => b.id === "imla-istisnalari-bitisik-yazim-ikiz-unsuz");
  if (!D) throw new Error("ek-uniteler: ÜNİTE D yok");
  const pr = D.bloklar.find((b) => b.type === "prose");
  const ISARET = "D.4</span>Dudak Uyumuna Girmeyen Ekler";
  if (!pr.html.includes(ISARET)) {
    const hedef = "\n<p class=\"not\">Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>; A. Ata. Bkz. 00_Kaynaklar/imla_kurallari_13_madde.md, madde 1, 3, 8.</p>";
    if (!pr.html.includes(hedef)) throw new Error("ek-uniteler: D kaynak notu bulunamadı");
    pr.html = pr.html.replace(hedef,
      "\n<h3 class=\"alt-baslik\"><span class=\"no\">D.4</span>Dudak Uyumuna Girmeyen Ekler — Yazıt Tanıkları</h3>" +
      "\n<p>Bazı ekler yuvarlak ünlülü kökten sonra da <b>düz ünlülü</b> kalır (dudak uyumu yoktur; bkz. Kitapçık §2.2). Üç yazıt tanığı:</p>" +
      "\n<ul>\n  <li><span class=\"cevrim\">ölti</span> (öldü) — KT D33: -dı/-ti geçmiş zaman eki düz kalır (<i>öldü</i> değil).</li>" +
      "\n  <li><span class=\"cevrim\">ölsik</span> (ölecek) — BK K5: -sık gelecek/gereklilik eki düz kalır.</li>" +
      "\n  <li><span class=\"cevrim\">adıglı toŋuzlı</span> (ayı ile domuz) — IB 6: +lı bağlama eki yuvarlak kökte de düz.</li>\n</ul>" +
      "\n<p class=\"not\">Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>, s. 108; A. Ata. Bkz. 00_Kaynaklar/imla_kurallari_13_madde.md, madde 1, 3, 8 ve EK (2026-09-10), D.</p>");
    degisti = true;
  }
  const ESKI_ALT = "Sayılar · Lir/Şaz Ses Ayrışması · Zihinsel (Uslamlama) Fiiller";
  const YENI_ALT = "Sayılar · Lir/Şaz Ses Ayrışması · Zihinsel (Uslamlama) Fiiller · İmla İstisnaları";
  if (e.veri.kapakHtml.includes(ESKI_ALT) && !e.veri.kapakHtml.includes(YENI_ALT)) {
    e.veri.kapakHtml = e.veri.kapakHtml.replace(ESKI_ALT, YENI_ALT);
    degisti = true;
  }
  const SATIR_D = "<tr><td class=\"k\">ÜNİTE D</td>";
  if (!e.veri.kapakHtml.includes(SATIR_D)) {
    const anchor = "<tr><td class=\"k\">AKADEMİK ÇERÇEVE</td>";
    if (e.veri.kapakHtml.includes(anchor)) {
      e.veri.kapakHtml = e.veri.kapakHtml.replace(anchor, SATIR_D + "<td>İmla istisnaları — bitişik yazım, söz başı /i/ düşmesi, ikiz ünsüz, dudak uyumu dışı ekler</td></tr>\n        " + anchor);
      degisti = true;
    }
  }
  if (degisti) yaz("ek-uniteler.json", e); else console.log("ek-uniteler.json: değişiklik yok");
}

// ---------- yedigun-2.json kazanım satırı: 7 → 8 hece damgası ----------
{
  const y = oku("yedigun-2.json");
  let m = JSON.stringify(y.veri);
  const o = m;
  m = m.split("7 hece damgası").join("8 hece damgası");
  if (m !== o) { y.veri = JSON.parse(m); yaz("yedigun-2.json", y); } else console.log("yedigun-2.json: hece sayısı değişikliği yok");
}
console.log("bitti");
