# -*- coding: utf-8 -*-
"""Göktürkçe kursu — HTML/PDF üretim hattı.
1) İçerik modüllerini okur, fal bloklarını Irk Bitig veri tabanından enjekte eder.
2) Runik güvenlik kapısı: çıktıdaki her tamga kaynak kümesinde ve Noto cmap'inde olmalı.
3) HTML yazar, Edge headless ile A4 PDF üretir, sayfa sayılarını doğrular."""
import io, json, os, re, sys, subprocess, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

TAS = "E:/Gokturkce_kursu/03_Tasarim"
KAY = "E:/Gokturkce_kursu/00_Kaynaklar"
PDF_OUT = "E:/Gokturkce_kursu/04_PDF"
HTML_DIR = os.path.join(TAS, "html")
os.makedirs(HTML_DIR, exist_ok=True); os.makedirs(PDF_OUT, exist_ok=True)

sys.path.insert(0, TAS)
import icerik_kitapcik as kitapcik
import icerik_yapraklar as yapraklar

css = open(os.path.join(TAS, "gokturk-baski.css"), encoding="utf-8").read()

# ---------- 1) Irk Bitig DB ----------
db = json.load(open(os.path.join(KAY, "irk-bitig-db-v3.json"), encoding="utf-8"))
recs = {str(r.get("fal_no")): r for r in (db.values() if isinstance(db, dict) else db)}

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
    s = s.replace("«FAL1_BLOK»", fal_blok(1))
    s = s.replace("«FAL15_BLOK»", fal_blok(15))
    s = s.replace("«FAL1_RUNIK»", recs["1"]["gokturkce"])
    return s

for no in ("1", "15", "4"):
    if no in recs:
        g = recs[no]["gokturkce"]
        up = "VAR" if "\U00010C30" in g else "yok"
        print(f"DB fal {no}: zar={recs[no].get('orijinal_zar')} | up tamgasi (U+10C30): {up} | uzunluk {len(g)}")
    else:
        print(f"DB fal {no}: YOK")

# ---------- 2) Belge derleme ----------
def doc_html(title, kapak, bolumler):
    parts = ['<!DOCTYPE html><html lang="tr"><head><meta charset="utf-8">',
             f"<title>{title}</title>",
             f"<style>{css}</style></head><body>"]
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

kit_html = doc_html("Göktürkçe Okuma-Yazma Öğreneği — Eğitmen Kılavuzu",
                    kitapcik.KAPAK, kitapcik.BOLUMS)
yap_html = doc_html("Göktürkçe Okuma-Yazma Öğreneği — Öğrenci Çalışma Yaprakları",
                    yapraklar.KAPAK, yapraklar.BOLUMS)

open(os.path.join(HTML_DIR, "kitapcik.html"), "w", encoding="utf-8").write(kit_html)
open(os.path.join(HTML_DIR, "yapraklar.html"), "w", encoding="utf-8").write(yap_html)

# ---------- 3) Runik güvenlik kapısı ----------
RUNE = re.compile("[\U00010C00-\U00010C4F]")
def runes_of(s): return set(RUNE.findall(s))

kaynak_metin = ""
for p in glob.glob(os.path.join(KAY, "*.txt")):
    kaynak_metin += open(p, encoding="utf-8").read()
for r in recs.values():
    for v in r.values():
        if isinstance(v, str):
            kaynak_metin += v
kaynak_runes = runes_of(kaynak_metin)

from fontTools.ttLib import TTFont
noto = TTFont(os.path.join(TAS, "fontlar/NotoSansOldTurkic-Regular.ttf"))
noto_cmap = set()
for t in noto["cmap"].tables:
    if t.isUnicode(): noto_cmap |= set(t.cmap.keys())

ok = True
for name, html in (("kitapcik", kit_html), ("yapraklar", yap_html)):
    out_runes = runes_of(html)
    hurda = sorted(ord(c) for c in out_runes - kaynak_runes)
    tofu  = sorted(ord(c) for c in out_runes if ord(c) not in noto_cmap)
    print(f"[{name}] farkli tamga: {len(out_runes)} | kaynaksiz(tahmin): {len(hurda)} | noto eksik(tofu): {len(tofu)}")
    if hurda:
        ok = False; print("  KAYNAK DIŞI:", [hex(c) for c in hurda])
    if tofu:
        ok = False; print("  TOFU RİSKİ:", [hex(c) for c in tofu])
if not ok:
    print("GUVENLIK KAPISI BASARISIZ — PDF uretilmedi."); sys.exit(1)
print("GUVENLIK KAPISI: GECTI")

# ---------- 4) Kontrol sayfası (görsel denetim) ----------
import unicodedata
used = sorted(runes_of(kit_html) | runes_of(yap_html))
rows = "".join(
    f'<td style="text-align:center;padding:6px 10px"><div style="font-family:\'Noto Sans Old Turkic\',serif;font-size:30px">{c}</div>'
    f'<div style="font-size:9px;color:#666">{hex(ord(c))[2:].upper()}<br>{unicodedata.name(c).replace("OLD TURKIC LETTER ","")}</div></td>'
    for c in used)
kontrol = ('<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{background:#FBF7EE;font-family:Georgia,serif}'
           'table{border-collapse:collapse}td{border:1px solid #D9CCB2}</style></head><body>'
           f'<table><tr>{rows}</tr></table></body></html>')
open(os.path.join(HTML_DIR, "kontrol.html"), "w", encoding="utf-8").write(kontrol)

# ---------- 5) Edge headless PDF ----------
EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PROFILE = os.path.join(os.environ.get("TEMP", TAS), "edge_pdf_tmp")

def edge(args, profile_suffix="a"):
    subprocess.run([EDGE] + args, check=True, timeout=180)

def make_pdf(html_name, pdf_name, n):
    html_path = os.path.join(HTML_DIR, html_name).replace("\\", "/")
    pdf_path = os.path.join(PDF_OUT, pdf_name)
    if os.path.exists(pdf_path):
        os.remove(pdf_path)
    edge(["--headless=new", "--disable-gpu", "--no-pdf-header-footer",
          f"--user-data-dir={PROFILE}_{n}",
          f"--print-to-pdf={pdf_path}",
          f"file:///{html_path}"], profile_suffix=n)
    if not (os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 10000):
        raise RuntimeError(f"PDF uretilemedi: {pdf_path}")
    return pdf_path

p1 = make_pdf("kitapcik.html",  "01_Kurs_Kitapcigi_Egitmen_Kilavuzu.pdf", 1)
p2 = make_pdf("yapraklar.html", "02_Ogrenci_Calisma_Yapraklari.pdf", 2)

edge(["--headless=new", "--disable-gpu",
      f"--user-data-dir={PROFILE}_3", "--window-size=1240,1754",
      f"--screenshot={TAS}/kontrol_tamgalar.png".replace("\\", "/"),
      f"file:///{HTML_DIR}/kontrol.html"], profile_suffix=3)

# ---------- 6) Sayfa sayısı doğrulama ----------
from pypdf import PdfReader
for p in (p1, p2):
    n = len(PdfReader(p).pages)
    print(f"PDF: {os.path.basename(p)} | sayfa: {n} | boyut: {os.path.getsize(p)}")
print("Bitti.")
