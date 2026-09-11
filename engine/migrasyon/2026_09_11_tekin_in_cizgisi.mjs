// 2026-09-11 — Tekin (Orhon Türkçesi Grameri, 2003) transkripsiyon çizgisine tam geçiş + 3 ufak düzeltme.
// Kaynak: 00_Kaynaklar/kitaplar/tekin_otg_2003.md (görsel transkripsiyon; atıf BASILI sayfa) + tekin_celiski_raporu.md.
// A) Belirtme/iyelik +(I)n ince-n²'li biçimler Tekin gibi -in: kaganin (s. 3588 vd. "kaganıŋın sabin"), bodunin, sabin,
//    adgırin (BK K 11 "adgıri+n", §66 madde 3). Runik diziler değişmez. Araç eki "sabın (sözle) 𐰽𐰉𐰣" (KT G5) -ın KALIR.
// B) tuŋukuka → tuñukuk(k)a (Tekin §41 s. 39-40, T 31).
// C) 𐱁 = Irk Bitig'de ince r iddiasına atıf: (Tekin, Irk Bitig: The Book of Omens, 1993, giriş) — sayfa yok.
// D) Kurgu (yazıtlarda tanıksız) örnekler ete, iri, koku, atar, (i)çig → "(öğretici örnek; yazıt tanığı yok)" notu.
// Sertifika sınavı (yedigun-4): soru sayısı 12, şıklar, doğru şıklar, 60/%80/45 DEĞİŞMEZ; yalnız ifade.
// Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur. content/*.json + teklif md/html (C).
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
}
function say(o, s) {
  let n = 0;
  (function w(x) {
    if (typeof x === "string") n += x.split(s).length - 1;
    else if (x && typeof x === "object") for (const k in x) w(x[k]);
  })(o);
  return n;
}
// [eski, yeni, coklu?, opsiyonel?] — opsiyonel: hiç yoksa sessizce geç (dosyalar arası ortak liste için).
function degistir(f, ciftler) {
  const d = oku(f);
  let uygulanan = 0;
  for (const [eski, yeni, coklu, opsiyonel] of ciftler) {
    const n = say(d.veri, eski);
    if (n === 0) {
      if (opsiyonel || say(d.veri, yeni) > 0) continue;
      throw new Error(`${f}: bulunamadı → ${eski.slice(0, 80)}`);
    }
    if (n > 1 && !coklu) throw new Error(`${f}: ${n} kez geçiyor (tek bekleniyordu) → ${eski.slice(0, 80)}`);
    (function w(x) {
      for (const k in x) {
        if (typeof x[k] === "string") x[k] = x[k].split(eski).join(yeni);
        else if (x[k] && typeof x[k] === "object") w(x[k]);
      }
    })(d.veri);
    uygulanan++;
  }
  if (uygulanan) { yaz(f, d); console.log(`yazıldı: ${f} (${uygulanan} değişiklik)`); }
  else console.log(`${f}: değişiklik yok`);
}

const C = (s) => `<span class="cevrim">${s}</span>`;
const NOT = "(öğretici örnek; yazıt tanığı yok)";
const IB_ATIF = "(Tekin, Irk Bitig: The Book of Omens, 1993, giriş)";

// ---------- A) sozluk.json anahtar adları (runik değerler aynı) ----------
{
  const s = oku("sozluk.json");
  const k = s.veri.kelimeler;
  let n = 0;
  for (const [eski, yeni] of [["kaganın", "kaganin"], ["bodunın", "bodunin"], ["sabın", "sabin"], ["adgırın", "adgırin"]]) {
    if (eski in k) { const v = k[eski]; delete k[eski]; k[yeni] = v; n++; }
  }
  if (n) { yaz("sozluk.json", s); console.log(`yazıldı: sozluk.json (${n} anahtar)`); } else console.log("sozluk.json: değişiklik yok");
}

// ---------- A) içerik: ince-n'li belirtme biçimleri -in ----------
// sabın: önce hepsi -in; sonra araç eki "sözle" (𐰽𐰉𐰣, KT G5) örnekleri -ın'a geri.
const A = [
  ["kaganın", "kaganin", true, true],
  ["bodunın", "bodunin", true, true],
  ["adgırın", "adgırin", true, true],
  ["sabın", "sabin", true, true],
  ["sabin</span> “sözle”", "sabın</span> “sözle”", true, true],
];
for (const f of ["kitapcik.json", "yapraklar.json", "degerlendirme.json", "yedigun-2.json", "yedigun-4.json", "cuzdan-karti.json"]) degistir(f, A);

// ---------- B) tuŋukuka → tuñukuk(k)a ----------
degistir("ek-uniteler.json", [
  [`${C("tuŋukuka")} (Tunyukuk’a) — sondaki -k+ka tek k ile.`, `${C("tuñukuk(k)a")} (Tunyukuk’a; T 31) — sondaki -k+ka tek k ile (Tekin §41 s. 39-40).`],
  // D) (i)çig kurgu notu
  [`${C("(i)çig")} — İç (kavim adı, İçig).</li>`, `${C("(i)çig")} — İç (kavim adı, İçig) ${NOT}; krş. Tekin §8 tanıklı <i>(i)şig</i> T 52.</li>`],
]);
degistir("kitapcik.json", [
  ["tuŋukuka", "tuñukuk(k)a", true, true],
  // C) 𐱁 ince r atfı
  [`ş 𐱁 tamgası ince r'yi temsil etmek için kullanılmıştır.</li>`, `ş 𐱁 tamgası ince r'yi temsil etmek için kullanılmıştır ${IB_ATIF}.</li>`],
  // D) kurgu notları
  [`${C("ete")} ➔ <span class="runic">𐱅𐰀</span> (t² + A/E ➔ ilk “e” düşer, ince t yazılır, son “e” korunur).</li>`,
   `${C("ete")} ➔ <span class="runic">𐱅𐰀</span> (t² + A/E ➔ ilk “e” düşer, ince t yazılır, son “e” korunur) ${NOT}.</li>`],
  [`${C("iri")} ➔ <span class="runic">𐰃𐰼𐰃</span> — Sözbaşındaki dar ünlü “i” 𐰃 yazılır, ince r 𐰼 ve son “i” 𐰃 yazılır.</li>`,
   `${C("iri")} ➔ <span class="runic">𐰃𐰼𐰃</span> — Sözbaşındaki dar ünlü “i” 𐰃 yazılır, ince r 𐰼 ve son “i” 𐰃 yazılır ${NOT}.</li>`],
  [`${C("koku")} ➔ <span class="runic">𐰴𐰸𐰆</span> (sondaki “u” düşürülmez).</li>`, `${C("koku")} ➔ <span class="runic">𐰴𐰸𐰆</span> (sondaki “u” düşürülmez) ${NOT}.</li>`],
  [`${C("atar")} ➔ <span class="runic">𐱃𐰺</span> (t¹ + r¹).</li>`, `${C("atar")} ➔ <span class="runic">𐱃𐰺</span> (t¹ + r¹) ${NOT}.</li>`],
]);

// ---------- C) yedigun-3 ----------
degistir("yedigun-3.json", [
  [`Grafik benzerlikle <b>𐱁</b> biçimi ince r için kullanıldı</td>`, `Grafik benzerlikle <b>𐱁</b> biçimi ince r için kullanıldı ${IB_ATIF}</td>`],
  [`ş sesi s ile yazılır; 𐱁 biçimi ince r'ye kaydırılmıştır.`, `ş sesi s ile yazılır; 𐱁 biçimi ince r'ye kaydırılmıştır ${IB_ATIF}.`],
]);
// C) yedigun-4 geri bildirim (soru/şık/doğru DEĞİŞMEZ)
degistir("yedigun-4.json", [
  [`Mecra değişimi imlayı değiştirdi: ş → s, 𐱁 → r².`, `Mecra değişimi imlayı değiştirdi: ş → s, 𐱁 → r² ${IB_ATIF}.`],
]);

// ---------- D) ornek-kelime açıklamaları (yedigun-1/2) ----------
for (const f of ["yedigun-1.json", "yedigun-2.json"]) {
  const d = oku(f);
  let n = 0;
  for (const b of d.veri.bolumler) for (const bl of b.bloklar) if (bl.type === "ornek-kelime") for (const o of bl.ornekler) {
    if (["ete", "iri", "koku", "atar"].includes(o.latin) && !o.aciklama.includes("öğretici örnek")) {
      o.aciklama = o.aciklama.replace(/\.?\s*$/, "") + ` ${NOT}.`; n++;
    }
  }
  if (n) { yaz(f, d); console.log(`yazıldı: ${f} ornek-kelime notu (${n})`); } else console.log(`${f}: ornek-kelime notu yok/zaten var`);
}

// ---------- C) Teklif md + html (pdf: Edge headless, ayrı adım) ----------
for (const f of ["Gokturkce_Kurs_Teklifi_Revize.md", "Gokturkce_Kurs_Teklifi_Revize.html"]) {
  const t = fs.readFileSync(P(f), "utf8");
  const eski = "Irk Bitig'de bu biçim ince r için kullanılır, ş sesi s ile yazılır";
  const yeni = `Irk Bitig'de bu biçim ince r için kullanılır, ş sesi s ile yazılır ${IB_ATIF}`;
  if (t.includes(yeni)) { console.log(`${f}: zaten güncel`); continue; }
  if (!t.includes(eski)) throw new Error(`${f}: cetvel satırı bulunamadı`);
  fs.writeFileSync(P(f), t.split(eski).join(yeni));
  console.log(`yazıldı: ${f}`);
}
console.log("bitti");
