# -*- coding: utf-8 -*-
"""Göktürkçe kursu — üretim turu 2 (parça 3-6): Tamga Albümü, Irk Bitig Föyü, Ek Üniteler, Değerlendirme Seti.
Silme işlemi içermez; PDF'ler doğrudan Edge --print-to-pdf ile yazılır."""
import io, json, os, re, sys, subprocess, glob, time, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

TAS = "E:/Gokturkce_kursu/03_Tasarim"
KAY = "E:/Gokturkce_kursu/00_Kaynaklar"
PDF_OUT = "E:/Gokturkce_kursu/04_PDF"
HTML_DIR = os.path.join(TAS, "html")
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

sys.path.insert(0, TAS)
import icerik_irkbitig as irkbitig
import icerik_ekuniteler as ekuniteler
import icerik_degerlendirme as degerlendirme

css = open(os.path.join(TAS, "gokturk-baski.css"), encoding="utf-8").read()

EXTRA_CSS = """
.kart-tablo { width:100%; border-collapse:collapse; table-layout:fixed; margin-bottom:0; }
.kart-tablo td { border:1px dashed #C9BBA0; height:47mm; text-align:center; vertical-align:middle; padding:2mm 1.5mm; }
.kart-tamga { font-family:'Noto Sans Old Turkic','Turk Bitig','BabelStone Irk Bitig',serif; direction:rtl; unicode-bidi:isolate; font-size:30pt; line-height:1.1; color:var(--murekkep); }
.kart-deger { font-weight:700; font-size:10pt; margin-top:1.6mm; }
.kart-ad { font-family:'JetBrains Mono',Consolas,monospace; font-size:7pt; color:#8A7A64; margin-top:0.8mm; }
.kutu { display:inline-block; width:3.2mm; height:3.2mm; border:1.2px solid var(--tas); margin-right:2mm; vertical-align:-0.2mm; }
.kontrol-liste { list-style:none; padding-left:0; }
.kontrol-liste li { margin-bottom:1.8mm; }
.akis { margin:2mm 0 4mm 0; }
.akis-dugum { text-align:center; background:var(--panel); border:1px solid var(--cizgi); border-top:3px solid var(--okr); padding:3mm; font-weight:700; }
.akis-oklar { text-align:center; color:var(--okr); font-size:13pt; margin:1mm 0; letter-spacing:1em; }
.mono-blok { font-family:'JetBrains Mono',Consolas,monospace; font-size:8.5pt; background:#F5EFE0; border:1px solid var(--cizgi); padding:3mm 4mm; margin:2mm 0 3.5mm 0; page-break-inside:avoid; }
.mono-blok p { margin:0 0 1.5mm 0; text-align:left; }
"""

# ---------- DB ----------
db = json.load(open(os.path.join(KAY, "irk-bitig-db-v3.json"), encoding="utf-8"))
recs = {str(r.get("fal_no")): r for r in (db.values() if isinstance(db, dict) else db)}
for no in ("4", "15", "17"):
    assert no in recs, f"DB'de fal {no} yok!"
    print(f"DB fal {no}: zar={recs[no].get('orijinal_zar')} | uzunluk {len(recs[no]['gokturkce'])}")

def fal_blok(no):
    r = recs[str(no)]
    return (
        '<div class="fal-kutusu">'
        f'<p class="not" style="margin-bottom:1.5mm"><b>{no}. FAL</b> · Zar: {r.get("orijinal_zar","—")} · <span class="cevrim">{r.get("tip","")}</span></p>'
        f'<div class="runik-satir runic">{r["gokturkce"]}</div>'
        f'<p><span class="cevrim">{r["transliterasyon"]}</span></p>'
        f'<p class="not">{r["turkce"]}</p>'
        '</div>'
    )

def token_replace(s):
    s = s.replace("«FAL4_BLOK»", fal_blok(4))
    s = s.replace("«FAL15_BLOK»", fal_blok(15))
    s = s.replace("«FAL17_BLOK»", fal_blok(17))
    return s

# ---------- Tamga grupları (değerler müfredat tablolarından) ----------
GRUPLAR = [
    ("Ünlü Tamgalar — 4 tamga · 8 ses", [
        (0x10C00, "A / E"), (0x10C03, "I / İ"), (0x10C06, "O / U"), (0x10C07, "Ö / Ü")]),
    ("Kutuplu Ünsüz Tamgalar — kalın / ince çiftleri (20 tamga)", [
        (0x10C09, "b¹ — kalın B"), (0x10C0B, "b² — ince B"),
        (0x10C11, "d¹ — kalın D"), (0x10C13, "d² — ince D"),
        (0x10C0D, "g¹ — kalın G"), (0x10C0F, "g² — ince G"),
        (0x10C34, "k¹ — kalın K"), (0x10C1A, "k² — ince K"),
        (0x10C1E, "l¹ — kalın L"), (0x10C20, "l² — ince L"),
        (0x10C23, "n¹ — kalın N"), (0x10C24, "n² — ince N"),
        (0x10C3A, "r¹ — kalın R"), (0x10C3C, "r² — ince R"),
        (0x10C3D, "s¹ — kalın S"), (0x10C3E, "s² — ince S"),
        (0x10C43, "t¹ — kalın T"), (0x10C45, "t² — ince T"),
        (0x10C16, "y¹ — kalın Y"), (0x10C18, "y² — ince Y")]),
    ("Kutupsuz Ünsüz Tamgalar (7)", [
        (0x10C32, "ç"), (0x10C22, "m"), (0x10C2D, "ng"),
        (0x10C2A, "ny / ń — Irk Bitig"), (0x10C2F, "p"), (0x10C14, "z"), (0x10C41, "ş")]),
    ("Çift Sesli Hece Damgaları — Ligatürler (7)", [
        (0x10C38, "OK / UK · KO / KU"), (0x10C1C, "ÖK / ÜK · KÖ / KÜ"),
        (0x10C36, "IK / KI"), (0x10C31, "İÇ / Çİ"),
        (0x10C26, "ND / NT"), (0x10C21, "LD / LT"), (0x10C28, "NÇ / NC")]),
    ("Irk Bitig'e Özgü Özel Tamgalar (2)", [
        (0x10C47, "ot — logografik kelime tamgası"), (0x10C30, "up / üp — yarı-hece tamgası")]),
    ("Yenisey Varyantları (7)", [
        (0x10C04, "Yenisey I"), (0x10C05, "Yenisey E — kapalı é"),
        (0x10C0A, "Yenisey kalın B"), (0x10C12, "Yenisey kalın D"),
        (0x10C3B, "Yenisey kalın R"), (0x10C44, "Yenisey kalın T"),
        (0x10C35, "Yenisey kalın K")]),
]

env = json.load(open("E:/Gokturkce_kursu/01_Analiz/tamga_envanteri.json", encoding="utf-8"))
NAMES = env["block_names"]
used_cp = {int(c, 16) for c in env["used_runes"].keys()}

def tamga_ad(cp):
    raw = NAMES.get(hex(cp), {}).get("name", "")
    return raw.replace("OLD TURKIC LETTER ", "").replace("OLD TURKIC ", "")

# Albüm tabloları
tab_html = []
for baslik, ogeler in GRUPLAR:
    satirlar = "".join(
        f'<tr><td class="merkez" style="width:22mm"><span class="runic" style="font-size:1.9em">{chr(cp)}</span></td>'
        f'<td><b>{deger}</b></td><td class="not">{tamga_ad(cp)} · U+{cp:04X}</td></tr>'
        for cp, deger in ogeler)
    tab_html.append(f'<h3 class="alt-baslik">{baslik}</h3>'
                    f'<table class="tablo"><tr><th class="merkez" style="width:22mm">Tamga</th><th style="width:52mm">Ders değeri</th><th>Unicode resmi adı</th></tr>{satirlar}</table>')

# Kart sayfaları (12 kart / sayfa)
tum_kartlar = [(cp, d, g) for g, ogeler in GRUPLAR for cp, d in ogeler]
kart_html = ['<p class="not">Kesme çizgileri boyunca keserek 47 kartlık tamga setini hazırlayabilirsiniz. Kartlar dersi izleyen gruplama sırasıyla dizilmiştir.</p>']
for i in range(0, len(tum_kartlar), 12):
    parca = tum_kartlar[i:i+12]
    hucreler = "".join(
        f'<td><div class="kart-tamga">{chr(cp)}</div><div class="kart-deger">{d}</div>'
        f'<div class="kart-ad">{tamga_ad(cp)}</div></td>'
        for cp, d, _ in parca)
    kart_html.append(f'<table class="kart-tablo"><tr>{hucreler}</tr></table>'
                     + ('<div style="page-break-after:always"></div>' if i + 12 < len(tum_kartlar) else ''))

TAMGA_KAPAK = """
<div class="kapak">
  <div>
    <div class="kapak-friz">𐰀&nbsp;𐰉&nbsp;𐰃&nbsp;𐰋&nbsp;𐰆&nbsp;𐰍&nbsp;𐰇&nbsp;𐰏</div>
    <div class="cift-cizgi"></div>
    <div class="kicker">Türk Runik Yazı Sistemi · Okuma-Yazma Eğitimi</div>
    <h1>Tamga Albümü ve Harf Kartları</h1>
    <p class="alt-baslik">47 Tamga · Alfabe Tabloları + Kes-Yapıştır Kart Seti</p>
    <div class="kapak-meta">
      <table>
        <tr><td class="k">KAPSAM</td><td>4 ünlü · 20 kutuplu ünsüz · 7 kutupsuz ünsüz · 7 ligatür · 2 Irk Bitig özel tamgası · 7 Yenisey varyantı</td></tr>
        <tr><td class="k">KULLANIM</td><td>Tablolar derste projeksiyonla; kartlar basılıp kesilerek eşleştirme oyunlarında kullanılır</td></tr>
        <tr><td class="k">DOĞRULAMA</td><td>Her tamga Unicode resmi adıyla etiketlenmiştir; font gömülüdür</td></tr>
      </table>
    </div>
  </div>
  <div class="not">Tüm tamgalar kaynak metinlerde fiilen geçen karakterlerden derlenmiştir (47/47).</div>
</div>
"""

TAMGA_BOLUMS = [
    {"kicker": "BÖLÜM 1", "baslik": "Alfabe Tabloları — Tamga Grupları", "ozet": "Kaynak metinlerde geçen 47 tamganın gruplu envanteri.", "govde": "".join(tab_html)},
    {"kicker": "BÖLÜM 2", "baslik": "Harf Kartları — Kes-Yapıştır Seti", "ozet": "", "govde": "".join(kart_html)},
]

def doc_html(title, kapak, bolumler):
    parts = ['<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">',
             f"<title>{title}</title>",
             f"<style>{css}{EXTRA_CSS}</style></head><body>"]
    parts.append(token_replace(kapak))
    for b in bolumler:
        parts.append('<section class="bolum">')
        parts.append(f'<div class="bolum-kicker">{b["kicker"]}</div>')
        parts.append(f'<h2 class="bolum-baslik">{b["baslik"]}</h2>')
        if b.get("ozet"):
            parts.append(f'<p class="bolum-ozet">{b["ozet"]}</p>')
        parts.append('<hr class="baslik-cizgi">')
        parts.append(token_replace(b["govde"]))
        parts.append("</section>")
    parts.append("</body></html>")
    return "".join(parts)

belgeler = [
    ("03_Tamga_Albumu_Harf_Kartlari.html", "03_Tamga_Albumu_Harf_Kartlari.pdf",
     "Tamga Albümü ve Harf Kartları", TAMGA_KAPAK, TAMGA_BOLUMS),
    ("04_Irk_Bitig_Okuma_Foyu.html", "04_Irk_Bitig_Okuma_Foyu.pdf",
     "Irk Bitig Okuma Föyü", irkbitig.KAPAK, irkbitig.BOLUMS),
    ("05_Ek_Uniteler_Foyu.html", "05_Ek_Uniteler_Foyu.pdf",
     "Ek Üniteler Föyü", ekuniteler.KAPAK, ekuniteler.BOLUMS),
    ("06_Degerlendirme_Seti.html", "06_Degerlendirme_Seti.pdf",
     "Değerlendirme Seti", degerlendirme.KAPAK, degerlendirme.BOLUMS),
]

# ---------- Runik güvenlik kapısı ----------
RUNE = re.compile("[\U00010C00-\U00010C4F]")
kaynak_metin = ""
for p in glob.glob(os.path.join(KAY, "*.txt")):
    kaynak_metin += open(p, encoding="utf-8").read()
for r in recs.values():
    for v in r.values():
        if isinstance(v, str):
            kaynak_metin += v
kaynak_runes = {ord(c) for c in RUNE.findall(kaynak_metin)}

from fontTools.ttLib import TTFont
noto = TTFont(os.path.join(TAS, "fontlar/NotoSansOldTurkic-Regular.ttf"))
noto_cmap = set()
for t in noto["cmap"].tables:
    if t.isUnicode():
        noto_cmap |= set(t.cmap.keys())

ok = True
for html_name, pdf_name, title, kapak, bolumler in belgeler:
    html = doc_html(title, kapak, bolumler)
    open(os.path.join(HTML_DIR, html_name), "w", encoding="utf-8").write(html)
    out = {ord(c) for c in RUNE.findall(html)}
    hurda = sorted(out - kaynak_runes)
    tofu = sorted(c for c in out if c not in noto_cmap)
    print(f"[{html_name}] tamga: {len(out)} | kaynaksiz: {len(hurda)} | tofu: {len(tofu)}")
    if hurda or tofu:
        ok = False
        print("  HATA:", [hex(c) for c in hurda + tofu])
if not ok:
    print("GUVENLIK KAPISI BASARISIZ"); sys.exit(1)
print("GUVENLIK KAPISI: GECTI")

# ---------- Edge ----------
def wait_ready(path, timeout=90):
    t0, last = time.time(), -1
    while time.time() - t0 < timeout:
        if os.path.exists(path):
            s = os.path.getsize(path)
            if s > 10000 and s == last:
                return True
            last = s
        time.sleep(1)
    return False

for html_name, pdf_name, *_ in belgeler:
    pdf_path = os.path.join(PDF_OUT, pdf_name)
    prof = os.path.join(os.environ.get("TEMP", TAS), f"edge_gk2_{abs(hash(pdf_name)) % 99999}")
    args = ["--headless=new", "--disable-gpu", "--no-pdf-header-footer",
            f"--user-data-dir={prof}",
            f"--print-to-pdf={pdf_path}",
            f"file:///{HTML_DIR}/{html_name}"]
    subprocess.run([EDGE] + args, check=True, timeout=240)
    if not wait_ready(pdf_path):
        raise RuntimeError(f"PDF uretilemedi: {pdf_path}")

from pypdf import PdfReader
toplam = 0
for html_name, pdf_name, *_ in belgeler:
    p = os.path.join(PDF_OUT, pdf_name)
    r = PdfReader(p)
    n = len(r.pages)
    toplam += n
    fonts = set()
    for pg in r.pages:
        f = pg.get("/Resources", {}).get("/Font", {})
        for k, v in (f.items() if hasattr(f, "items") else []):
            bf = str(v.get_object().get("/BaseFont") or "")
            if "OldTurkic" in bf:
                fonts.add(bf)
    print(f"PDF: {pdf_name} | sayfa: {n} | boyut: {os.path.getsize(p)} | runik font: {'VAR' if fonts else 'YOK!'}")
print(f"TOPLAM SAYFA: {toplam} — Bitti.")
