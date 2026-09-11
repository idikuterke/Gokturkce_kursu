// 2026-09-11 — yapraklar.json: kurgu (yazıt tanığı olmayan) alıştırma kelimeleri → Tekin 2003 sözlüğünden tanıklı kelimeler.
// Kaynak: 00_Kaynaklar/kitaplar/tekin_otg_2003.md (görsel transkripsiyon; atıf BASILI sayfa/§). İkinci kontrol: ata_orhun_turkcesi_2011.txt.
//   ete   → eki    "iki"           /kI/   eki    (BK D 41; §7 s. 25: kapalı e sözbaşında yazılmaz)      𐰚𐰃      ince k² + i  (ata ↔ eki çifti)
//   iri   → ini    "erkek kardeş"  ini+m         (KT D 26; §8 s. 26: sözbaşı i daima yazılır)          𐰃𐰤𐰃     i + ince n² + i
//   koku  → kul    "erkek köle"    /KUUL/ kul    (KT D 7 "kul boltı"; §13 s. 27 yuvarlak ünlü YAZILIR, s. 34 /KUUL/ genellikle) 𐰸𐰆𐰞
//           (kut /KUT/ 𐰸𐱃 ilk adaydı; 2 harfli dizinin tersi 𐱃𐰸 broşürdeki "tokuz" içinde geçtiği için kapı yanlış alarm verdi → kul)
//           NOT: koku için "ilk hece ünlüsü düşer" ipucu Tekin §13'e aykırıydı; kural düzeltildi (yuvarlak ünlü yazılır).
//   atar  → tabgaç "Çin"           /TBGç/ tabgaç (T 1; §4/§10 s. 24, 27: kısa a'lar yazılmaz)           𐱃𐰉𐰍𐰲   t¹ b¹ g¹ ç
// Yalnız yapraklar.json + sozluk.json (ekleme). kitapcik / yedigün / degerlendirme DOKUNULMAZ (ete/iri/koku/atar orada kalır).
// Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur. targets / sınav sabitleri değişmez.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const P = (...a) => path.join(ROOT, "content", ...a);

function oku(f) {
  const t = fs.readFileSync(P(f), "utf8");
  return { veri: JSON.parse(t), crlf: t.includes("\r\n"), sonNL: t.endsWith("\n") };
}
function yaz(f, d) {
  let o = JSON.stringify(d.veri, null, 1);
  if (d.crlf) o = o.replace(/\n/g, "\r\n");
  if (d.sonNL) o += d.crlf ? "\r\n" : "\n";
  fs.writeFileSync(P(f), o);
}
function say(o, s) {
  let n = 0;
  (function w(x) {
    if (typeof x === "string") n += x.split(s).length - 1;
    else if (x && typeof x === "object") for (const k in x) w(x[k]);
  })(o);
  return n;
}
function degistir(f, ciftler) {
  const d = oku(f);
  let uygulanan = 0;
  for (const [eski, yeni] of ciftler) {
    const n = say(d.veri, eski);
    if (n === 0) {
      if (say(d.veri, yeni) > 0) continue;
      throw new Error(`${f}: bulunamadı → ${eski.slice(0, 90)}`);
    }
    if (n > 1) throw new Error(`${f}: ${n} kez geçiyor → ${eski.slice(0, 90)}`);
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

const N = (s) => `<span class="not">(${s})</span>`;

// ---------- yapraklar.json ----------
degistir("yapraklar.json", [
  // 1. Yedigün, kutuplu ünsüz alıştırması: ata ↔ eki çifti
  [`<li><b>ete</b> ${N("ince ünlü uyumu; ilk “e” düşer, son “e” yazılır; öğretici örnek")}`,
   `<li><b>eki</b> ${N("“iki”; ince ünlü uyumu; baştaki “e” yazılmaz, ince k² ve son “i” yazılır; BK D 41, Tekin §7")}`],
  [`<li><b>iri</b> ${N("ince ünlü uyumu; ilk “i” yazılır, ince “r” ve son “i” yazılır; öğretici örnek")}`,
   `<li><b>ini</b> ${N("“erkek kardeş”; ince ünlü uyumu; sözbaşı “i” daima yazılır, ince n² ve son “i” yazılır; KT D 26, Tekin §8")}`],
  // 2. Yedigün, tasarruf / ünlü düşmesi alıştırması
  [`<li><b>atar</b> ${N("kısa a'ları düşürünüz; öğretici örnek")}`,
   `<li><b>tabgaç</b> ${N("“Çin”; iki kısa a'yı düşürünüz — t¹ b¹ g¹ ç; T 1, Tekin §10")}`],
  [`<li><b>koku</b> ${N("ilk hecedeki ünlü düşer, kelime sonu ünlü korunur; öğretici örnek")}`,
   `<li><b>kul</b> ${N("“kul, erkek köle”; İSTİSNA: ilk hecenin yuvarlak ünlüsü düşmez, yazılır (Tekin §13); ku öbeği 𐰸 + 𐰆 (Tekin s. 34); KT D 7")}`],
  // 4. Yedigün açık uçlu Soru 1: esen + atar → esen + tabgaç
  [`Bu kuralı <b>esen</b> ve <b>atar</b> kelimelerinin Göktürkçe yazılışlarını göstererek açıklayınız.`,
   `Bu kuralı <b>esen</b> ve <b>tabgaç</b> (“Çin”, T 1) kelimelerinin Göktürkçe yazılışlarını göstererek açıklayınız.`],
]);

// ---------- sozluk.json: yeni kelimeler (eskiler kalır; kitapçık/yedigün hâlâ kullanıyor) ----------
{
  const s = oku("sozluk.json");
  const k = s.veri.kelimeler;
  const yeni = { eki: "𐰚𐰃", ini: "𐰃𐰤𐰃", kul: "𐰸𐰆𐰞", tabgaç: "𐱃𐰉𐰍𐰲" };
  let n = 0;
  for (const [l, r] of Object.entries(yeni)) {
    if (k[l] === r) continue;
    if (l in k) throw new Error(`sozluk.json: ${l} farklı runikle mevcut: ${k[l]}`);
    k[l] = r; n++;
  }
  if (n) {
    yaz("sozluk.json", s); console.log(`yazıldı: sozluk.json (+${n} kelime)`);
  } else console.log("sozluk.json: değişiklik yok");
}
console.log("bitti");
