// 2026-09-11 — Tekin, Orhon Türkçesi Grameri (2003) karşılaştırma raporu bulgularının içeriğe işlenmesi.
// Kaynak: 00_Kaynaklar/kitaplar/tekin_celiski_raporu.md (bulgular #1-13, #17, #24-25, #28, #31-32) +
//         00_Kaynaklar/kitaplar/tekin_otg_2003.md (atıflar BASILI sayfa; görsel transkripsiyon 2026-09-11).
// Kullanıcı kararları: tāmka "duvara"; ligatür "yasağı" → yaygın eğilim; ince-N "istisnasız" → "genellikle";
//   altın sözlük: bodunın 𐰉𐰆𐰑𐰣𐰤, kaganın 𐰴𐰍𐰣𐰤, yagısi 𐰖𐰍𐰾𐰃 (/YGsI/), balıkka 𐰉𐰞𐰶𐰀 (/BLıKA/); kızın çıkar;
//   b~m yönü (§119); -miş (§68); yetmiş (§280); +nı ayrımı (§262); araç +(X)n ↔ belirtme +(I)n (§66, §269);
//   (i)ştämi (§8); çorakka (§41); Yenisey dudak uyumu yönü (§69, §77); sayfa atıfları.
// Sertifika sınavı (yedigun-4): soru sayısı 12, şık dengesi, doğru şıklar, 60/%80/45 DEĞİŞMEZ; yalnız ifade.
// Tekrar çalıştırılabilir (idempotent). CRLF/LF korunur. Yalnız content/*.json'a dokunur.
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
// Tüm string alanlarda eski→yeni. eski hiç yoksa: yeni varsa (daha önce uygulanmış) atla, yoksa hata.
function degistir(f, ciftler) {
  const d = oku(f);
  let uygulanan = 0;
  for (const [eski, yeni, coklu] of ciftler) {
    const n = say(d.veri, eski);
    if (n === 0) {
      if (say(d.veri, yeni) > 0) continue;
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

const R = (s) => `<span class="runic">${s}</span>`;
const C = (s) => `<span class="cevrim">${s}</span>`;

// ---------- sozluk.json ----------
{
  const s = oku("sozluk.json");
  const k = s.veri.kelimeler;
  let n = 0;
  for (const eski of ["bodunı", "kaganı", "kızın", "balka"]) if (eski in k) { delete k[eski]; n++; }
  const yeni = { "yagısi": "𐰖𐰍𐰾𐰃", "balıkka": "𐰉𐰞𐰶𐰀", "bodunın": "𐰉𐰆𐰑𐰣𐰤", "kaganın": "𐰴𐰍𐰣𐰤" };
  for (const [a, v] of Object.entries(yeni)) if (k[a] !== v) { k[a] = v; n++; }
  if (n) { yaz("sozluk.json", s); console.log(`yazıldı: sozluk.json (${n} değişiklik)`); } else console.log("sozluk.json: değişiklik yok");
}

// ---------- kitapcik.json ----------
degistir("kitapcik.json", [
  // #2 ligatür eğilimi
  [`<p><b>Kelime başı ligatür yasağı (konum kısıtı):</b> Bu hece damgaları kelime başında ünsüzle başlayan heceleri (ko, ku, kö, kü, kı) yazmak için tek başlarına kullanılamaz:</p>`,
   `<p><b>Kelime başı ligatür eğilimi (konum kısıtı):</b> Orhun'da bu hece damgaları kelime başında ünsüzle başlayan heceleri (ko, ku, kö, kü, kı) yazmak için genellikle tek başlarına kullanılmaz; önce düz ünsüz yazılır. Bu yaygın bir eğilimdir, mutlak yasak değildir — Tekin'de söz başı istisnaları: ${C("kılıp")} (𐰶, O 10), ${C("kut / kopın")} (𐰸, O ön 8; T 16), ${C("kör-")} (𐰜, T 26) [Tekin 2003: §12, §16-17, §28-29].</p>`],
  [`(kalın K + I + LD + I) — hatalı yazım: <span class="runic kirmizi-not">𐰶𐰡𐰃</span> (IK/KI + LD + I).</li>`,
   `(kalın K + I + LD + I) — hatalı yazım: <span class="runic kirmizi-not">𐰶𐰡𐰃</span> (IK/KI + LD + I): Orhun'da yaygın yazım 𐰴𐰃𐰡𐰃; ligatürlü biçim istisnaidir.</li>`],
  // #3, #12 ince-N genellikle; +nı ayrıldı
  [`Kelime kökü tamamen kalın olsa bile, 3. şahıs iyelik ve belirtme durumu eklerindeki (ın/nı) “n” sesi daima İnce N (𐰤) ile yazılır:`,
   `Kelime kökü tamamen kalın olsa bile, 3. şahıs iyelik + belirtme durumu ekindeki (+(ı)n) “n” sesi genellikle İnce N (𐰤) ile yazılır (Tekin 2003: s. 51 §66; kalın N'li karşı örnekler s. 59 §91: ${C("agışın")} KT GB, ${C("altunın")} BK K1, ${C("taşın")} T 13; Moyun Çor'da uyumlu):`],
  // #4-6, #13 tanıklar + araç/belirtme + +nı
  [`Yazıt tanıkları: ${C("bodunı")} (halkı) ➔ ${R("𐰉𐰆𐰑𐰤")} [KT D3]; ${C("kaganı")} (kağanı) ➔ ${R("𐰴𐰍𐰣𐰤")} [KT D19]; ${C("kızın")} (kızını) ➔ ${R("𐰴𐰔𐰤")} [BK K10].</p>`,
   `Yazıt tanıkları: ${C("bodunın")} (halkını) ➔ ${R("𐰉𐰆𐰑𐰣𐰤")} [BK G15]; ${C("kaganın")} (hakanını) ➔ ${R("𐰴𐰍𐰣𐰤")} [KT D35]. Ayrım: belirtme <b>+(ı)n</b> ince n² ile (${R("𐰽𐰉𐰤")} ${C("sabın")} “sözünü”, KT G9); araç durumu <b>+(X)n</b> ise dudak uyumuna girer ve kalın N¹ ile yazılır (${R("𐰽𐰉𐰣")} ${C("sabın")} “sözle”, KT G5; ${C("okun")} “ok ile”, KT D36) — ince n bu iki eki ayırt eder (Tekin 2003: §66, §269 s. 116). Seyrek <b>+nı</b> eki (${C("kunı")} T 9, ${C("koragıŋnı")} O 12) yalın gövdeye gelir; bu kuralın dışındadır (§262 s. 109).</p>`],
  // #1 tāmka
  [`${C("tāmka")} (damga) ➔`, `${C("tāmka")} (duvara; tām+ka) ➔`],
  // #10 atıf
  [`Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>, s. 52.</p>`, `Kaynak: Tekin 2003: s. 25 §5, s. 27 §10, s. 43-44 §45, s. 46 §51.</p>`],
  // #7 yagısi iskeleti
  [`${C("yagısi")} (düşmanı) ➔ ${R("𐰘𐰍𐰃𐰾𐰃")} (y² + g¹ + I + s² + I)`, `${C("yagısi")} (düşmanı) ➔ ${R("𐰖𐰍𐰾𐰃")} (y¹ + g¹ + s² + I; içses ı yazılmaz — BK D11)`],
  // #17 -miş
  [`(${C("kagansıramış, sakınmış")})`, `(${C("kagansıramiş, sakınmiş")} — Tekin §68 okuyuşu)`],
  // #11 atıf
  [`Kaynak: Tekin, s. 108; A. Ata.</p>`, `Kaynak: Tekin 2003: s. 55-57 §76-86; +nı için s. 109 §262; A. Ata.</p>`],
  // Bölüm 3 tablo
  [`Kelime başındaki ünsüzle başlayan kı/ko/ku/kö/kü seslerinde ligatür asla kullanılamaz.`,
   `Kelime başındaki ünsüzle başlayan kı/ko/ku/kö/kü seslerinde ligatür genellikle kullanılmaz (Tekin'de seyrek istisnalar: kılıp, kopın, kör-).`],
  [`${C("kıldı")} kelime başında olduğu için ligatürsüz düz harflerle yazılır:`, `${C("kıldı")} kelime başında olduğu için Orhun'da yaygın biçimde ligatürsüz düz harflerle yazılır:`],
  // Bölüm 4 cevap anahtarı
  [`— Kelime başında “kı” için IK ligatürü kullanılamaz; düz kalın k`, `— Kelime başında “kı” için IK ligatürü genellikle kullanılmaz (Orhun'da yaygın yazım); düz kalın k`],
  [`— Kelime başında “ko” için ligatür yasaktır; kalın k`, `— Kelime başında “ko” için ligatür genellikle kullanılmaz; kalın k`],
  [`Kalın s + kalın b + İnce N 𐰤; kural dışıdır.</li>`, `Kalın s + kalın b + İnce N 𐰤; kural dışıdır (belirtme +(ı)n; araç durumu ${C("sabın")} “sözle” ise kalın N 𐰣).</li>`],
  [`belirli nesne durum eklerini (ın/nı) büyük ünlü uyumunu bozarak istisnasız daima İnce N (𐰤) tamgasıyla yazmışlardır:`,
   `belirli nesne durum ekini (+(ı)n) büyük ünlü uyumunu bozarak genellikle İnce N (𐰤) tamgasıyla yazmışlardır (Tekin §66; §91'de birkaç kalın N'li karşı örnek):`],
  [`${C("kıldı")} yazılırken kelime başında IK/KI ligatürü gelemez; doğrusu`, `${C("kıldı")} yazılırken kelime başında IK/KI ligatürü genellikle gelmez; Orhun'da yaygın yazım`],
  [`Yazılan kelimeler hatalıdır; çünkü çift sesli ligatürlerin kelime başında konum kısıtı (position constraint) vardır — ligatürler kelime başında ünsüzle başlayan “ko/ku/kö/kü/kı” hecelerini tek başlarına temsil edemezler.`,
   `Yazılan kelimeler Orhun'un yaygın yazımına aykırıdır; çünkü çift sesli ligatürlerin kelime başında konum kısıtı (position constraint) vardır — ligatürler kelime başında ünsüzle başlayan “ko/ku/kö/kü/kı” hecelerini genellikle tek başlarına temsil etmez (Tekin'de seyrek istisnalar: kılıp, kopın, kör-).`],
  // #9 b~m yönü (§119)
  [`Orhun'da “b” ile başlayan kelimeler Yenisey'de “m” sesine döner: ${C("ben ➔ men, beŋkü ➔ meŋkü")}. Bu, modern`,
   `Söz başı b, izleyen geniz ünsüzünün (n, ŋ) etkisiyle m'ye döner (genizsilleşme); yön yazıta göre değişir: ${C("men")} Köl Tigin, Bilge Kağan ve Irk Bitig'de, ${C("ben")} Tunyukuk ve Yenisey yazıtlarında; ${C("meŋkü")} (Kara-Yüs 5) ~ ${C("beŋkü")} (Kara-Yüs 1) aynı Yenisey yazıtında (Tekin 2003: s. 70 §119). Bu, modern`],
  // #31 Yenisey dudak uyumu yönü
  [`<li><b>Düzlük-yuvarlaklık (küçük ünlü) uyumu sapması:</b> Yenisey yazıtlarının büyük çoğunluğunda küçük ünlü uyumu sağlanmaz: ${C("böri")} (kurt), ${C("buñṣız")} (kaygısız), ${C("ḳuḷı")} (kulu), ${C("oġḷı")} (oğlu).</li>`,
   `<li><b>Düzlük-yuvarlaklık (küçük ünlü) uyumu farkı:</b> Orhun'da dudak uyumu henüz ilk gelişme aşamasındadır (${C("buŋsız")} BK K14, ${C("oglı")}); Yenisey ve Irk Bitig'de bazı ekler uyuma girer: ${C("buŋusuz")} (Barık II 3), ${C("otsuz, subsuz")} (IB 45) (Tekin 2003: s. 54 §69, s. 56 §77).</li>`],
]);

// ---------- yedigun-2.json ----------
degistir("yedigun-2.json", [
  [`<h3>Kelime Başı Ligatür Yasağı</h3><p>Hece damgaları kelime başında ünsüzle başlayan <b>ko / ku / kö / kü / kı</b> hecelerini <b>tek başına</b> yazmak için kullanılamaz.</p><p class="not">Kelime başında düz harfle başlanır; ligatür ancak ondan sonra gelir.</p>`,
   `<h3>Kelime Başı Ligatür Eğilimi</h3><p>Hece damgaları kelime başında ünsüzle başlayan <b>ko / ku / kö / kü / kı</b> hecelerini <b>tek başına</b> yazmak için genellikle kullanılmaz.</p><p class="not">Orhun'da yaygın yazım: düz harfle başla, ligatür sonra. Tekin'de istisnalar: kılıp (𐰶), kut / kopın (𐰸), kör- (𐰜) — §12, §16-17, §28-29.</p>`],
  [`Düz kalın k¹ + I + LD + I.`, `Düz kalın k¹ + I + LD + I — Orhun'da yaygın yazım; ligatürlü biçim istisnai.`],
  [`eklerindeki n sesi (<i>-ın / -nı</i>) daima <b>ince N</b> ${R("𐰤")} ile yazılır.</p><p class="not">Büyük ünlü uyumunu bozan, istisnasız bir imla kuralı.</p>`,
   `ekindeki n sesi (<i>+(ı)n</i>) genellikle <b>ince N</b> ${R("𐰤")} ile yazılır.</p><p class="not">Büyük ünlü uyumunu bozan yaygın bir imla eğilimi (Tekin §66); Moyun Çor'da ve birkaç Orhun örneğinde kalın N (§91). Araç eki +(X)n (okun) kalın N ile yazılır — ince n iki eki ayırt eder (§269).</p>`],
  [`<b>tāmka</b> ${R("𐱃𐰀𐰢𐰴𐰀")}`, `<b>tāmka</b> (duvara) ${R("𐱃𐰀𐰢𐰴𐰀")}`],
  [`<b>yagısi</b> ${R("𐰘𐰍𐰃𐰾𐰃")}`, `<b>yagısi</b> ${R("𐰖𐰍𐰾𐰃")}`],
  [`-mış hep ince (sakınmış)`, `-miş hep ince (sakınmiş; Tekin §68)`],
  [`Tekin, Orhon Türkçesi Grameri s. 52, 108.`, `Tekin 2003: s. 25 §5, s. 27 §10, s. 43-46 §45-51; s. 55-57 §76-86.`],
  [`IK/KI ligatürü kelime başında tek başına kullanılamaz; düz k¹ + I ile başlanmalıydı: 𐰴𐰃𐰡𐰃.`, `IK/KI ligatürü kelime başında genellikle tek başına kullanılmaz; Orhun'da yaygın yazım düz k¹ + I ile başlar: 𐰴𐰃𐰡𐰃.`],
  [`Kelime başı ligatür yasağı.`, `Kelime başı ligatür eğilimi: düz harfle başla.`],
  [`kelime başında ko/ku/kö/kü/kı için tek başına kullanılmaz</li><li>Kalın kökte -ın/-nı eki daima ince N (𐰤)</li>`,
   `kelime başında ko/ku/kö/kü/kı için genellikle tek başına kullanılmaz</li><li>Kalın kökte +(ı)n eki genellikle ince N (𐰤)</li>`],
]);

// ---------- yapraklar.json ----------
degistir("yapraklar.json", [
  [`hecelerini yazmak için <b>tek başına asla kullanılamaz</b>. Önce düz ünsüz harf yazılmalıdır.</li>`,
   `hecelerini yazmak için <b>genellikle tek başına kullanılmaz</b>. Orhun'da yaygın yazımda önce düz ünsüz harf gelir (Tekin'de seyrek istisnalar vardır).</li>`],
  [`belirtme eklerindeki (ın/nı) “n” sesi, kelime kalın da olsa daima İnce N (${R("𐰤")}) ile yazılır.</li>`,
   `belirtme ekindeki (+(ı)n) “n” sesi, kelime kalın da olsa genellikle İnce N (${R("𐰤")}) ile yazılır (Tekin §66).</li>`],
  [`Aşağıdaki kelimelerin hangisinde kelime başı ligatür yasağı olduğunu analiz ediniz`, `Aşağıdaki kelimelerde kelime başı ligatür eğilimini (konum kısıtı) analiz ediniz`],
]);

// ---------- degerlendirme.json ----------
degistir("degerlendirme.json", [
  [`Ligatürler kelime başında ünsüzle başlayan ko/ku/kö/kü/kı hecelerini tek başına temsil edemez.`,
   `Ligatürler kelime başında ünsüzle başlayan ko/ku/kö/kü/kı hecelerini genellikle tek başına temsil etmez (Orhun'da yaygın yazım; Tekin'de seyrek istisnalar).`],
  [`kök kalın olsa da ın/nı ekleri daima İnce N (𐰤) ile yazılır.`, `kök kalın olsa da +(ı)n eki genellikle İnce N (𐰤) ile yazılır (Tekin §66; §91'de birkaç kalın N'li karşı örnek).`],
]);

// ---------- yedigun-4.json (sertifika: 12 soru / şık dengesi / doğru şık / 60-%80-45 DEĞİŞMEZ) ----------
degistir("yedigun-4.json", [
  [`<li>ko/ku/kö/kü/kı ile başlıyor mu? ➔ düz k ile başla, ligatür sonra</li><li>-ın / -nı eki ➔ ince N (𐰤)</li>`,
   `<li>ko/ku/kö/kü/kı ile başlıyor mu? ➔ genellikle düz k ile başla, ligatür sonra</li><li>+(ı)n eki ➔ genellikle ince N (𐰤)</li>`],
  [`yitmiş`, `yetmiş`, true],
  [`Hece damgası kelime başında ünsüzle başlayan kö hecesini tek başına yazamaz; düz k² ile başlanır: 𐰚𐰜`,
   `Hece damgası kelime başında ünsüzle başlayan kö hecesini genellikle tek başına yazmaz; düz k² ile başlanır: 𐰚𐰜`],
  [`Kelime başı ligatür yasağı: 𐰚𐰜.`, `Kelime başı ligatür eğilimi: düz k² önce — 𐰚𐰜.`],
  [`3. şahıs iyelik / belirtme eki (-ın/-nı) kalın kökte bile istisnasız ince N ile yazılır`, `3. şahıs iyelik + belirtme eki (+(ı)n) kalın kökte bile genellikle ince N ile yazılır`],
]);

// ---------- ek-uniteler.json ----------
degistir("ek-uniteler.json", [
  [`yitmiş`, `yetmiş`, true],
  [`<li>${C("(i)stemi")} — İstemi Kağan (kişi adı).</li>`, `<li>${C("(i)ştämi")} — İştemi Kağan (kişi adı; BK D3, Tekin §8).</li>`],
  [`(i)stemi, (i)çig, (i)lgärü`, `(i)ştämi, (i)çig, (i)lgärü`, true],
  [`<li>${C("balka")} (balığa, şehre &lt; balık+ka) ➔ ${R("𐰉𐰞𐰴𐰀")} — iki k tek k¹ 𐰴 ile.</li>`,
   `<li>${C("balıkka")} (şehre, çamura &lt; balık+ka) ➔ ${R("𐰉𐰞𐰶𐰀")} — iki k tek ıK hece damgası 𐰶 ile (Tekin §41: <i>balık(k)a</i> KT K8, T 18).</li>`],
  [`balık+ka → “balka” sözcüğünü`, `balık+ka → “balıkka” sözcüğünü`],
  [`İkiz ünsüz tek tamgayla: b¹ + l¹ + k¹ + A. İstisna: Karlukka, illigdä (çift yazım).`, `İkiz ünsüz tek tamgayla: b¹ + l¹ + ıK 𐰶 + A (Tekin §41). İstisna: Karlukka, illigdä, çorakka (çift yazım).`],
  [`${C("balka")} ➔ ${R("𐰉𐰞𐰴𐰀")} — b¹ + l¹ + k¹ + A; ikiz -kk- tek k¹ ile yazılır.`, `${C("balıkka")} ➔ ${R("𐰉𐰞𐰶𐰀")} — b¹ + l¹ + ıK 𐰶 + A; ikiz -kk- tek işaretle yazılır (Tekin §41).`],
  [`${C("gorakka")}. Bunlar ezberlenir`, `${C("çorakka")} (BK GD). Bunlar ezberlenir`],
  [`Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>, s. 108; A. Ata. Bkz.`, `Kaynak: Tekin 2003: s. 55-57 §76-86 (ölsik: §79 s. 56); A. Ata. Bkz.`],
]);
// alıştırma cevap/cevapRunik alanları (kapı sözlük eşlemesi)
{
  const e = oku("ek-uniteler.json");
  let n = 0;
  for (const b of e.veri.bolumler) for (const bl of b.bloklar) if (bl.type === "alistirma") for (const m of bl.maddeler) {
    if (m.cevap === "balka") { m.cevap = "balıkka"; n++; }
    if (m.cevapRunik === "𐰉𐰞𐰴𐰀") { m.cevapRunik = "𐰉𐰞𐰶𐰀"; n++; }
  }
  if (n) { yaz("ek-uniteler.json", e); console.log(`yazıldı: ek-uniteler.json alıştırma (${n})`); }
}
console.log("bitti");
