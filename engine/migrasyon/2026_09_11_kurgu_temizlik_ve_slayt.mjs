// 2026-09-11 — Kurgu (yazıt tanığı olmayan) örnek kelimelerin KÖKTEN kaldırılması + Y2 ligatür slaydının ikiye bölünmesi.
// Yapraklar turunun (2026_09_11_yapraklar_ornek_yenileme.mjs) devamı: kitapçık, yedigün, değerlendirme, cüzdan kartı, sözlük.
// Kaynak: 00_Kaynaklar/kitaplar/tekin_otg_2003.md (atıf BASILI sayfa/§).
//   ete   → eki     "iki"           𐰚𐰃       (BK D 41; §7 s. 25: kapalı e sözbaşında yazılmaz)
//   iri   → ini     "erkek kardeş"  𐰃𐰤𐰃      (KT D 26; §8 s. 26: sözbaşı i daima yazılır)
//   atar  → tabgaç  "Çin"           𐱃𐰉𐰍𐰲     (T 1; §10 s. 27: kısa a'lar yazılmaz)
//   koku  → bayırku (boy adı)       𐰉𐰖𐰺𐰸𐰆    (KT G 4, KT D 34-36; §255 s. 106 /BYRKUnŋ/)
//           NOT: yapraklar turunda koku→kul eşlendi (yuvarlak ünlü kuralı). Buradaki koku bağlamlarının hepsi
//           "kelime SONU ünlüsü yazılır" ve "OK ligatürü ikinci hecede" kuralını anlatıyor; kul (𐰸𐰆𐰞) sonu
//           ünsüzle bitip ligatürle başladığı için bu kuralları TERSİNE çevirirdi. Sonu OK+U ile biten,
//           yazıt tanıklı tek aday bayırku seçildi. Y4 sertifika sorusunda yalnız kelime değişti (şıklar/doğru sabit).
// Ayrıca: sozluk.json'dan ete/iri/koku/atar çıkarılır (içerikte kalmadıysa), bayırku eklenir.
// C) yedigun-2.json ligatür ızgarası (9 kart, 4+4+1 taşıyor): tamga-grid şemasında cp filtresi yok, renderer'a
//    dokunulmadı → grid bloğu yalnız BASKI hedefine daraltıldı; SLAYT için iki prose slaytı eklendi
//    ("Hece Damgaları (7)" + "Özel Hece Damgaları: aş · baş"). Toplamda iki hedef de aynı içeriği alır.
// Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur. targets / sınav sabitleri (12/60/%80/45) değişmez.
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
function degistirVeri(d, f, ciftler) {
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
  return uygulanan;
}
function degistir(f, ciftler) {
  const d = oku(f);
  const n = degistirVeri(d, f, ciftler);
  if (n) { yaz(f, d); console.log(`yazıldı: ${f} (${n} değişiklik)`); } else console.log(`${f}: değişiklik yok`);
}
const bloklar = (doc) => (doc.bolumler ?? []).flatMap((b) => b.bloklar ?? []);
// ornek-kelime bloğunda latin==eski olan örneği yeni nesneyle değiştir (idempotent: yeni varsa geç)
function ornekDegistir(d, f, blokId, eskiLatin, yeni) {
  const k = bloklar(d.veri).find((b) => b.type === "ornek-kelime" && b.id === blokId);
  if (!k) throw new Error(`${f}: ornek-kelime bloğu yok: ${blokId}`);
  const i = k.ornekler.findIndex((o) => o.latin === eskiLatin);
  if (i < 0) {
    if (k.ornekler.some((o) => o.latin === yeni.latin)) return 0;
    throw new Error(`${f} › ${blokId}: '${eskiLatin}' yok`);
  }
  k.ornekler[i] = yeni;
  return 1;
}

const C = (s) => `<span class="cevrim">${s}</span>`;
const R = (s) => `<span class="runic">${s}</span>`;
const EKI = "𐰚𐰃", INI = "𐰃𐰤𐰃", TABGAC = "𐱃𐰉𐰍𐰲", BAYIRKU = "𐰉𐰖𐰺𐰸𐰆";

// ---------- A) kitapcik.json ----------
degistir("kitapcik.json", [
  // §2.1 II. ders — kutuplu ünsüz tahtası (ata ↔ eki çifti)
  [`<li>${C("ete")} ➔ ${R("𐱅𐰀")} (t² + A/E ➔ ilk “e” düşer, ince t yazılır, son “e” korunur) (öğretici örnek; yazıt tanığı yok).</li>`,
   `<li>${C("eki")} (“iki”) ➔ ${R(EKI)} (k² + I/İ ➔ sözbaşındaki kapalı “e” yazılmaz, ince k yazılır, son “i” korunur; BK D 41, Tekin §7).</li>`],
  // §2.2 tasarruf kuralı
  [`${C("atar")} ➔ ${R("𐱃𐰺")} (t¹ + r¹) (öğretici örnek; yazıt tanığı yok).</li>`,
   `${C("tabgaç")} (“Çin”) ➔ ${R(TABGAC)} (t¹ + b¹ + g¹ + ç; iki kısa a da yazılmaz — T 1, Tekin §10).</li>`],
  // §2.2 kelime sonu ünlüsü kuralı
  [`${C("koku")} ➔ ${R("𐰴𐰸𐰆")} (sondaki “u” düşürülmez) (öğretici örnek; yazıt tanığı yok).</li>`,
   `${C("bayırku")} (boy adı) ➔ ${R(BAYIRKU)} (sondaki “u” düşürülmez; KT G 4, Tekin §255).</li>`],
  // §3 bitirme sınavı cevap anahtarı tablosu (Soru 1)
  [`<td>${C("esen")} ve ${C("atar")} kelimelerinin tamgalarla doğru yazımı</td>`,
   `<td>${C("esen")} ve ${C("tabgaç")} kelimelerinin tamgalarla doğru yazımı</td>`],
  [`${C("atar")} ➔ ${R("𐱃𐰺")} şeklinde yazılır. Sözbaşında ve içindeki kısa “a/e” ünlüleri`,
   `${C("tabgaç")} (“Çin”, T 1) ➔ ${R(TABGAC)} şeklinde yazılır. Sözbaşında ve içindeki kısa “a/e” ünlüleri`],
  // §4.1 1. Yedigün cevapları
  [`<li>${C("ete")} ➔ ${R("𐱅𐰀")} — İlk “e” yazılmaz, ince t 𐱅 ve son “e” 𐰀 yazılır.</li>`,
   `<li>${C("eki")} (“iki”) ➔ ${R(EKI)} — Sözbaşındaki kapalı “e” yazılmaz, ince k 𐰚 ve son “i” 𐰃 yazılır (BK D 41; Tekin §7).</li>`],
  [`<li>${C("iri")} ➔ ${R("𐰃𐰼𐰃")} — Sözbaşındaki dar ünlü “i” 𐰃 yazılır, ince r 𐰼 ve son “i” 𐰃 yazılır (öğretici örnek; yazıt tanığı yok).</li>`,
   `<li>${C("ini")} (“erkek kardeş”) ➔ ${R(INI)} — Sözbaşındaki dar ünlü “i” 𐰃 daima yazılır, ince n 𐰤 ve son “i” 𐰃 yazılır (KT D 26; Tekin §8).</li>`],
  // §4.2 2. Yedigün cevapları
  [`<li>${C("atar")} ➔ ${R("𐱃𐰺")} — Kısa a'lar yazılmaz; kalın t + kalın r.</li>`,
   `<li>${C("tabgaç")} (“Çin”) ➔ ${R(TABGAC)} — Kısa a'lar yazılmaz; kalın t + kalın b + kalın g + ç (T 1; Tekin §10).</li>`],
  [`<li>${C("koku")} ➔ ${R("𐰴𐰸𐰆")} — Kelime başında “ko” için ligatür genellikle kullanılmaz; kalın k 𐰴 + OK ligatürü 𐰸 + son ünlü “u” 𐰆 yazılır.</li>`,
   `<li>${C("bayırku")} (boy adı) ➔ ${R(BAYIRKU)} — Kelime başında ligatür yok: kalın b 𐰉 + kalın y 𐰖 + kalın r 𐰺; son hecede OK/UK ligatürü 𐰸 + kelime sonu ünlüsü “u” 𐰆 yazılır (KT G 4; Tekin §255 /BYRKU/).</li>`],
  // §4.4 bitirme sınavı analitik anahtar, Soru 1
  [`${C("atar")} kelimesinde baştaki ve içteki a'lar yazılmayarak sadece kalın t ve kalın r ile ${R("𐱃𐰺")} yazılır.`,
   `${C("tabgaç")} (“Çin”, T 1) kelimesinde baştaki ve içteki a'lar yazılmayarak sadece kalın t, kalın b, kalın g ve ç ile ${R(TABGAC)} yazılır.`],
]);

// ---------- A) degerlendirme.json (cevap anahtarı) ----------
degistir("degerlendirme.json", [
  [`${C("atar")} ➔ ${R("𐱃𐰺")}.</td>`, `${C("tabgaç")} (“Çin”, T 1) ➔ ${R(TABGAC)}.</td>`],
]);

// ---------- A) cuzdan-karti.json ----------
degistir("cuzdan-karti.json", [
  [`<span class="rn">𐰴𐰸𐰆</span> = koku`, `<span class="rn">${BAYIRKU}</span> = bayırku`],
]);

// ---------- A) yedigun-1.json ----------
{
  const f = "yedigun-1.json", d = oku(f);
  const n = ornekDegistir(d, f, "tahta-ornekleri", "ete", {
    latin: "eki", anlam: "iki", runik: EKI,
    aciklama: "k² + I/İ ➔ sözbaşındaki kapalı “e” yazılmaz, ince k yazılır, son “i” korunur (BK D 41; Tekin §7).",
  });
  if (n) { yaz(f, d); console.log(`yazıldı: ${f} (${n} değişiklik)`); } else console.log(`${f}: değişiklik yok`);
}

// ---------- A) yedigun-2.json ----------
{
  const f = "yedigun-2.json", d = oku(f);
  let n = 0;
  n += ornekDegistir(d, f, "tasarruf-ornekleri", "atar", {
    latin: "tabgaç", anlam: "Çin", runik: TABGAC,
    aciklama: "t¹ + b¹ + g¹ + ç ➔ her iki kısa a da düşer (T 1; Tekin §10).",
  });
  n += degistirVeri(d, f, [
    [`<p><b>koku</b> ➔ <span class="runic buyuk">𐰴𐰸𐰆</span> — sondaki <b>u</b> yazıldı.</p>`,
     `<p><b>bayırku</b> (boy adı) ➔ <span class="runic buyuk">${BAYIRKU}</span> — sondaki <b>u</b> yazıldı (KT G 4; Tekin §255).</p>`],
  ]);
  n += ornekDegistir(d, f, "ligatur-okuma", "koku", {
    latin: "bayırku", anlam: "boy adı", runik: BAYIRKU,
    aciklama: "OK/UK ligatürü son hecede: b¹ + y¹ + r¹ + OK + u (KT G 4; Tekin §255 /BYRKU/).",
  });
  n += ornekDegistir(d, f, "konum-ornekleri", "koku", {
    latin: "bayırku", anlam: "boy adı", runik: BAYIRKU,
    aciklama: "Kelime başında düz harfler (b¹ y¹ r¹); ligatür 𐰸 ancak son hecede + kelime sonu ünlüsü u (KT G 4).",
  });

  // ---------- C) ligatür ızgarası → baskı: grid kalır; slayt: iki prose slaytı ----------
  const K = (cp, deger, ad) => `<div class="kart"><div class="tamga runic">${String.fromCodePoint(cp)}</div><div class="deger">${deger}</div><div class="ad">${ad}</div></div>`;
  const HECE_HTML = `<h3>Hece Damgaları — Ligatürler (7)</h3><div class="izgara">` +
    K(0x10C38, "OK / UK · KO / KU", "ORKHON OQ") + K(0x10C1C, "ÖK / ÜK · KÖ / KÜ", "ORKHON OEK") +
    K(0x10C36, "IK / KI", "ORKHON IQ") + K(0x10C31, "İÇ / Çİ", "ORKHON IC") +
    K(0x10C21, "LD / LT", "ORKHON ELT") + K(0x10C26, "ND / NT", "ORKHON ENT") + K(0x10C28, "NÇ / NC", "ORKHON ENC") +
    `</div>`;
  const OZEL_HTML = `<h3>Özel Hece Damgaları — aş · baş</h3><div class="izgara">` +
    K(0x10C3F, "aş (hece damgası)", "ORKHON ASH") + K(0x10C48, "baş (hece/kelime damgası)", "ORKHON BASH") +
    `</div><p class="not">Orhun yazıtlarında nadir (Tekin 2003 s. 23). 𐰿 ş sesi için kullanılmaz — ş = 𐱁; Yenisey varyantı U+10C40. 𐱈 Irk Bitig'de ideogram.</p>`;
  for (const b of d.veri.bolumler ?? []) {
    const i = (b.bloklar ?? []).findIndex((k) => k.type === "tamga-grid" && k.grup === "ligatur");
    if (i < 0) continue;
    const g = b.bloklar[i];
    if (g.targets.includes("slayt")) {
      g.targets = ["baski"];
      b.bloklar.splice(i + 1, 0,
        { type: "prose", targets: ["slayt"], id: "ligatur-hece", html: HECE_HTML },
        { type: "prose", targets: ["slayt"], id: "ligatur-ozel", html: OZEL_HTML });
      n++;
      console.log(`${f}: ligatür grid → baskı; slayt için 2 prose slaytı eklendi (${b.id})`);
    }
  }
  if (n) { yaz(f, d); console.log(`yazıldı: ${f} (${n} değişiklik)`); } else console.log(`${f}: değişiklik yok`);
}

// ---------- A) yedigun-4.json — sertifika sorusu: yalnız kelime değişir ----------
degistir("yedigun-4.json", [
  [`<b>koku</b> kelimesi <span class="runic">𐰴𐰸𐰆</span> yazılır. Sondaki`,
   `<b>bayırku</b> kelimesi <span class="runic">${BAYIRKU}</span> yazılır. Sondaki`],
]);

// ---------- A) sozluk.json: kurgu anahtarlar çıkar (içerikte kalmadıysa), bayırku ekle ----------
{
  const s = oku("sozluk.json");
  const k = s.veri.kelimeler;
  let n = 0;
  if (k["bayırku"] !== BAYIRKU) { if ("bayırku" in k) throw new Error(`sozluk: bayırku farklı: ${k["bayırku"]}`); k["bayırku"] = BAYIRKU; n++; }
  const icerik = fs.readdirSync(P()).filter((f) => f.endsWith(".json") && f !== "sozluk.json")
    .map((f) => fs.readFileSync(P(f), "utf8")).join("\n");
  for (const kurgu of ["ete", "iri", "koku", "atar"]) {
    if (!(kurgu in k)) continue;
    if (new RegExp(`(^|[^\\p{L}])${kurgu}(?![\\p{L}])`, "u").test(icerik)) throw new Error(`sozluk: '${kurgu}' içerikte hâlâ geçiyor, çıkarılmadı`);
    delete k[kurgu]; n++;
  }
  if (n) { yaz("sozluk.json", s); console.log(`yazıldı: sozluk.json (${n} değişiklik)`); } else console.log("sozluk.json: değişiklik yok");
}

// ---------- C) AJAN_BRIEF.md: Y2 slayt sayısı 24 → 25 (gerçek sayım: Y1 30 / Y2 25 / Y3 24 / Y4 25) ----------
{
  const f = path.join(ROOT, "AJAN_BRIEF.md");
  const t = fs.readFileSync(f, "utf8");
  if (t.includes("30/23/24/25")) { fs.writeFileSync(f, t.replace("30/23/24/25", "30/25/24/25")); console.log("yazıldı: AJAN_BRIEF.md (Y2 24→25)"); }
  else console.log("AJAN_BRIEF.md: değişiklik yok");
}
console.log("bitti");
