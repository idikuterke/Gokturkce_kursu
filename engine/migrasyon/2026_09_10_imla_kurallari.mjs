// 2026-09-10 — İmla kuralları (00_Kaynaklar/imla_kurallari_13_madde.md) Seçenek B entegrasyonu.
// Madde 5 (aslî uzun ünlü) + Madde 11 (uyuma girmeyen ekler) → kitapcik.json §2.2 + yedigun-2.json (1 slayt)
// Madde 1/3/8 istisnaları → ek-uniteler.json yeni ÜNİTE D + cevap anahtarı; yeni runik kelimeler → sozluk.json
// Tekrar çalıştırılabilir (idempotent): işaret id/metin varsa atlar. CRLF/LF korunur.
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

// ---------- sozluk.json ----------
const yeniKelimeler = {
  "āç": "𐰀𐰲",
  "āt": "𐰀𐱃",
  "tāmka": "𐱃𐰀𐰢𐰴𐰀",
  "kāl-": "𐰴𐰀𐰞",
  "bā-": "𐰉𐰀",
  "būka": "𐰉𐰆𐰆𐰴𐰀",
  "yagısi": "𐰘𐰍𐰃𐰾𐰃",
  "balka": "𐰉𐰞𐰴𐰀"
};
{
  const s = oku("sozluk.json");
  let n = 0;
  for (const [k, v] of Object.entries(yeniKelimeler)) if (!s.veri.kelimeler[k]) { s.veri.kelimeler[k] = v; n++; }
  if (n) yaz("sozluk.json", s); else console.log("sozluk.json: değişiklik yok");
}

// ---------- kitapcik.json §2.2 (ince-N paragrafının hemen ardı) ----------
const KITAPCIK_EK =
  "\n<p><b>Aslî uzun ünlü — söz başı ā yazılır:</b> Söz başındaki kısa <i>a</i> yazılmaz (at, ak, adak); ancak aslî <b>uzun ā</b> A tamgasıyla gösterilir: " +
  "<span class=\"cevrim\">āç</span> (aç, acıkmış) ➔ <span class=\"runic\">𐰀𐰲</span> (A + ç); " +
  "<span class=\"cevrim\">āt</span> (ad, unvan) ➔ <span class=\"runic\">𐰀𐱃</span> (A + t¹); " +
  "<span class=\"cevrim\">tāmka</span> (damga) ➔ <span class=\"runic\">𐱃𐰀𐰢𐰴𐰀</span> (t¹ + A + m + k¹ + A). " +
  "Irk Bitig: <span class=\"cevrim\">kāl-</span> ➔ <span class=\"runic\">𐰴𐰀𐰞</span>, <span class=\"cevrim\">bā-</span> ➔ <span class=\"runic\">𐰉𐰀</span>. " +
  "Tunyukuk yazıtında <span class=\"cevrim\">būka</span> ➔ <span class=\"runic\">𐰉𐰆𐰆𐰴𐰀</span>: uzun ū iki O/U tamgasıyla (b¹ + U + U + k¹ + A). Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>, s. 52.</p>" +
  "\n<p><b>Damak uyumuna girmeyen öteki ekler (ince-N ile aynı mantık):</b> " +
  "3. şahıs iyelik <b>+(s)i</b>: ünlüyle biten kalın kökte bile ince s² <span class=\"runic\">𐰾</span> — <span class=\"cevrim\">yagısi</span> (düşmanı) ➔ <span class=\"runic\">𐰘𐰍𐰃𐰾𐰃</span> (y² + g¹ + I + s² + I); ayrıca <span class=\"cevrim\">agısi, attısi</span>. " +
  "1./2. tekil iyelik + belirtme <b>+in</b>: <span class=\"cevrim\">sabımın, kızımın</span> (ince n²). " +
  "Geçmiş zaman <b>-mış</b>: kalın kökte de ince kalır (<span class=\"cevrim\">kagansıramış, sakınmış</span>). " +
  "<b>Dudak uyumuna girmeyen ekler</b> (yuvarlak kökten sonra da düz ünlülü): +sız (<span class=\"cevrim\">buŋsız</span>), +sıra- (<span class=\"cevrim\">urugsırat-</span>), -sık (<span class=\"cevrim\">tosık</span>), +lı (<span class=\"cevrim\">tünli künli</span>), +nı (<span class=\"cevrim\">kunı</span>), -dı (<span class=\"cevrim\">uçdı</span>), +kı (<span class=\"cevrim\">çölgi</span>). Kaynak: Tekin, s. 108; A. Ata.</p>";
{
  const k = oku("kitapcik.json");
  const ISARET = "Aslî uzun ünlü — söz başı ā yazılır";
  let yapildi = false;
  for (const b of k.veri.bolumler) for (const bl of b.bloklar) {
    if (bl.type !== "prose" || !bl.html.includes("Kalın kökte ince-N (𐰤) istisnası")) continue;
    if (bl.html.includes(ISARET)) { yapildi = true; break; }
    const hedef = "<h3 class=\"alt-baslik\"><span class=\"no\">2.3</span>";
    const i = bl.html.indexOf(hedef);
    if (i < 0) throw new Error("kitapcik: 2.3 başlığı bulunamadı");
    bl.html = bl.html.slice(0, i) + KITAPCIK_EK + "\n\n" + bl.html.slice(i);
    yapildi = true;
    yaz("kitapcik.json", k);
  }
  if (!yapildi) throw new Error("kitapcik: ince-N paragrafı bulunamadı");
}

// ---------- yedigun-2.json — ince-n-ornekleri sonrası 1 slayt ----------
{
  const y = oku("yedigun-2.json");
  const bl = y.veri.bolumler[1].bloklar;
  if (!bl.some((b) => b.id === "uzun-unlu-ve-uyumsuz-ekler")) {
    const i = bl.findIndex((b) => b.id === "ince-n-ornekleri");
    if (i < 0) throw new Error("yedigun-2: ince-n-ornekleri yok");
    bl.splice(i + 1, 0, {
      type: "prose",
      targets: ["slayt", "baski"],
      id: "uzun-unlu-ve-uyumsuz-ekler",
      html:
        "<h3>Aslî Uzun Ünlü ve Uyuma Girmeyen Ekler</h3>" +
        "<p>Söz başı kısa <i>a</i> yazılmaz; <b>aslî uzun ā</b> yazılır: " +
        "<b>āç</b> (acıkmış) <span class=\"runic\">𐰀𐰲</span> · <b>āt</b> (ad, unvan) <span class=\"runic\">𐰀𐱃</span> · <b>tāmka</b> <span class=\"runic\">𐱃𐰀𐰢𐰴𐰀</span> · " +
        "Tunyukuk <b>būka</b> <span class=\"runic\">𐰉𐰆𐰆𐰴𐰀</span> (ū = iki U).</p>" +
        "<p><b>Damak uyumuna girmeyen ekler:</b> +(s)i → ince s² <span class=\"runic\">𐰾</span>: <b>yagısi</b> <span class=\"runic\">𐰘𐰍𐰃𐰾𐰃</span> · +(ı)n → ince n² (sabın) · -mış hep ince (sakınmış).</p>" +
        "<p><b>Dudak uyumuna girmeyenler:</b> +sız (buŋsız) · +sıra- · -sık (tosık) · +lı (tünli künli) · +nı (kunı) · -dı (uçdı) · +kı (çölgi).</p>" +
        "<p class=\"not\">Tekin, Orhon Türkçesi Grameri s. 52, 108.</p>"
    });
    yaz("yedigun-2.json", y);
  } else console.log("yedigun-2.json: değişiklik yok");
}

// ---------- ek-uniteler.json — ÜNİTE D + cevap anahtarı ----------
{
  const e = oku("ek-uniteler.json");
  const ID = "imla-istisnalari-bitisik-yazim-ikiz-unsuz";
  const cevapIdx = e.veri.bolumler.findIndex((b) => b.id === "ek-uniteler-cozumlu-cevap-anahtari");
  if (cevapIdx < 0) throw new Error("ek-uniteler: cevap anahtarı bölümü yok");
  if (!e.veri.bolumler.some((b) => b.id === ID)) {
    e.veri.bolumler.splice(cevapIdx, 0, {
      id: ID,
      kicker: "ÜNİTE D",
      baslik: "İmla İstisnaları: Bitişik Yazım, Söz Başı /i/ ve İkiz Ünsüz",
      ozet: "Orhun yazıtlarında genel kuralı bozan üç kalıplaşmış durum ve yazıt tanıkları.",
      bloklar: [
        {
          type: "prose",
          targets: ["baski"],
          html:
            "\n<h3 class=\"alt-baslik\"><span class=\"no\">D.1</span>Sözcük Ayracının Atlanması — Bitişik Yazım</h3>" +
            "\n<p>Orhun yazıtlarında sözcükler iki nokta ( : ) ile ayrılır. Ancak kısa sözcükler, edatlar ve zamirler kimi zaman önceki ya da sonraki sözcükle <b>ayraçsız, bitişik</b> yazılır. Bu bir yazım hatası değil, taş ekonomisinin kalıplaşmış bir istisnasıdır:</p>" +
            "\n<ul>\n  <li><span class=\"cevrim\">ol tägdökdä</span> (o saldırdığında) — KT D36: zamir <i>ol</i> fiille bitişik.</li>" +
            "\n  <li><span class=\"cevrim\">ak adgırıg</span> (ak aygırı) — KT D35: sıfat adla bitişik.</li>" +
            "\n  <li><span class=\"cevrim\">ekin ara</span> (ikisi arasında) — KT D1: sayı adı edatla bitişik.</li>\n</ul>" +
            "\n<p class=\"not\">Okuma ipucu: Ayraçsız uzun bir dizi görürseniz önce kısa zamir/edat sınırını arayın (<i>ol, ara, täg</i>).</p>" +
            "\n<h3 class=\"alt-baslik\"><span class=\"no\">D.2</span>Söz Başı /i/ Düşmesi — Kalıplaşmış İstisnalar</h3>" +
            "\n<p>Genel kural: söz başında <i>ı/i</i> ve yuvarlak ünlüler yazılır (<span class=\"cevrim\">ıduk, ilgärü, oglı, üç</span>); yalnız kısa <i>a/e</i> yazılmaz. Buna karşın birkaç kalıplaşmış sözcükte söz başı /i/ de yazılmaz:</p>" +
            "\n<ul>\n  <li><span class=\"cevrim\">(i)çig</span> — İç (kavim adı, İçig).</li>" +
            "\n  <li><span class=\"cevrim\">(i)stemi</span> — İstemi Kağan (kişi adı).</li>" +
            "\n  <li><span class=\"cevrim\">(i)lgärü</span> — ileriye, doğuya (zarf; yazıtlarda hem yazılmış hem yazılmamış biçimi görülür).</li>\n</ul>" +
            "\n<p class=\"not\">Ayraç içindeki (i), yazıda gösterilmeyen sesi belirtir; okurken tamamlanır.</p>" +
            "\n<h3 class=\"alt-baslik\"><span class=\"no\">D.3</span>İkiz Ünsüzün Tekleşmesi</h3>" +
            "\n<p>Ek almayla oluşan ikiz ünsüz (<i>-kk-, -gd-</i>) kural olarak <b>tek tamgayla</b> yazılır:</p>" +
            "\n<ul>\n  <li><span class=\"cevrim\">balka</span> (balığa, şehre &lt; balık+ka) ➔ <span class=\"runic\">𐰉𐰞𐰴𐰀</span> — iki k tek k¹ 𐰴 ile.</li>" +
            "\n  <li><span class=\"cevrim\">tuŋukuka</span> (Tunyukuk’a) — sondaki -k+ka tek k ile.</li>\n</ul>" +
            "\n<p><b>İstisna:</b> Birkaç örnekte ikiz ünsüz çift yazılmıştır: <span class=\"cevrim\">Karlukka</span> (Karluklara), <span class=\"cevrim\">illigdä</span> (illi olanda), <span class=\"cevrim\">gorakka</span>. Bunlar ezberlenir; kural dışıdır.</p>" +
            "\n<p class=\"not\">Kaynak: Tekin, <i>Orhon Türkçesi Grameri</i>; A. Ata. Bkz. 00_Kaynaklar/imla_kurallari_13_madde.md, madde 1, 3, 8.</p>"
        },
        {
          type: "alistirma",
          targets: ["baski"],
          yon: "acik-uclu",
          yonerge: "Alıştırma D — Aşağıdaki yazımları kurala göre değerlendirin; cevaplar eğitmen bölümündedir.",
          maddeler: [
            {
              soru: "KT D36’daki “ol tägdökdä” dizisi tek parça, ayraçsız yazılmıştır. Bu bir yazım hatası mıdır? Açıklayın.",
              cevap: "Hayır; kısa zamir (ol) fiille bitişik yazılabilir — kalıplaşmış bitişik yazım istisnası (KT D36; krş. ak adgırıg KT D35, ekin ara KT D1)."
            },
            {
              soru: "“İstemi” adı yazıtta söz başı I/İ tamgası olmadan yazılmıştır. Hangi kural dışı duruma örnektir?",
              cevap: "Söz başı /i/ düşmesi istisnası: (i)stemi, (i)çig, (i)lgärü kalıplaşmış biçimlerdir; genel kuralda söz başı ı/i yazılır."
            },
            {
              soru: "balık+ka → “balka” sözcüğünü runik yazın ve k seslerinin sayısını açıklayın.",
              cevap: "balka",
              cevapRunik: "𐰉𐰞𐰴𐰀",
              aciklama: "İkiz ünsüz tek tamgayla: b¹ + l¹ + k¹ + A. İstisna: Karlukka, illigdä (çift yazım)."
            }
          ]
        }
      ]
    });
    // cevap anahtarına D bölümü
    const cevap = e.veri.bolumler.find((b) => b.id === "ek-uniteler-cozumlu-cevap-anahtari");
    cevap.bloklar.push({
      type: "prose",
      targets: ["baski"],
      html:
        "\n<h3 class=\"alt-baslik\"><span class=\"no\">Ç.</span>Ünite D (İmla İstisnaları) Çözümleri</h3>" +
        "\n<ul class=\"cevap-blok\">" +
        "\n  <li><b>1.</b> Hata değildir. Kısa sözcük/edat/zamir öncekiyle bitişik yazılabilir: <span class=\"cevrim\">ol tägdökdä</span> (KT D36), <span class=\"cevrim\">ak adgırıg</span> (KT D35), <span class=\"cevrim\">ekin ara</span> (KT D1).</li>" +
        "\n  <li><b>2.</b> Söz başı /i/ düşmesi istisnası. Genel kuralda söz başı ı/i yazılır (ıduk, ilgärü); <span class=\"cevrim\">(i)stemi, (i)çig, (i)lgärü</span> kalıplaşmış istisnalardır.</li>" +
        "\n  <li><b>3.</b> <span class=\"cevrim\">balka</span> ➔ <span class=\"runic\">𐰉𐰞𐰴𐰀</span> — b¹ + l¹ + k¹ + A; ikiz -kk- tek k¹ ile yazılır. Çift yazılan istisnalar: <span class=\"cevrim\">Karlukka, illigdä</span>.</li>" +
        "\n</ul>"
    });
    yaz("ek-uniteler.json", e);
  } else console.log("ek-uniteler.json: değişiklik yok");
}
console.log("bitti");
