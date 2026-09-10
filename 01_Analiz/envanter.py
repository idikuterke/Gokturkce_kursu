# -*- coding: utf-8 -*-
"""Göktürkçe kursu - tamga envanteri ve font kaplama denetimi (nesnel doğrulama)."""
import json, unicodedata, os, io, sys
from fontTools.ttLib import TTFont

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KAY = "E:/Gokturkce_kursu/00_Kaynaklar"
FON = "E:/Gokturkce_kursu/03_Tasarim/fontlar"

DOSYALAR = [
    "öğretmen kılavuzu.txt", "müfredat.txt", "öğrenci çalışma kağıdı.txt",
    "SES AYRIŞMASI.txt", "göktürkçe sayılar.txt", "ırk bitig farklı harfler .txt",
    "ırk bitig özel tamgalı okuma .txt", "quiz_ve_diger_bilgiler.txt",
    "proje_teklifi_metin.txt",
]

def cmap_set(path):
    f = TTFont(path)
    s = set()
    for t in f["cmap"].tables:
        if t.isUnicode():
            s |= set(t.cmap.keys())
    return s

# 1) Kaynak tarama
used = {}          # cp -> count/files
corrupt = {}       # bozulmus karakterler
for fn in DOSYALAR:
    p = os.path.join(KAY, fn)
    if not os.path.exists(p):
        print("MISSING:", fn); continue
    t = open(p, encoding="utf-8").read()
    for ch in t:
        cp = ord(ch)
        if 0x10C00 <= cp <= 0x10C4F:
            d = used.setdefault(cp, {"count": 0, "files": []})
            d["count"] += 1
            if fn not in d["files"]:
                d["files"].append(fn)
        if cp in (0x1F9E0, 0x1F511):
            corrupt[hex(cp)] = corrupt.get(hex(cp), 0) + 1

# 2) Font kaplamalari
noto = cmap_set(os.path.join(FON, "NotoSansOldTurkic-Regular.ttf"))
bab  = cmap_set(os.path.join(KAY, "fontlar/BabelStoneIrkBitig.ttf"))
turk = cmap_set(os.path.join(KAY, "fontlar/turkbitig.ttf"))
block = set(range(0x10C00, 0x10C50))

print("== BLOK KAPLAMA ==")
print(f"block={len(block)} noto={len(noto & block)} babel={len(bab & block)} turkbitig={len(turk & block)}")

missing_noto = sorted(cp for cp in used if cp not in noto)
missing_bab  = sorted(cp for cp in used if cp not in bab)
missing_turk = sorted(cp for cp in used if cp not in turk)
print("kullanilan farkli tamga:", len(used))
print("noto eksik:", [hex(c) for c in missing_noto])
print("babel eksik:", [hex(c) for c in missing_bab])
print("turkbitig eksik:", [hex(c) for c in missing_turk])

# 3) Tam isim tablosu (tum blok) - Tamga Albumu icin de kaynak
names = {}
for cp in sorted(block):
    ch = chr(cp)
    try:
        nm = unicodedata.name(ch)
    except ValueError:
        nm = "(tanimsiz)"
    names[hex(cp)] = {
        "name": nm,
        "in_noto": cp in noto,
        "in_babel": cp in bab,
        "in_turkbitig": cp in turk,
        "used": cp in used,
        "count": used.get(cp, {}).get("count", 0),
        "files": used.get(cp, {}).get("files", []),
    }

# 4) Tartismali karakterler
print("\n== TARTISMALI / KULLANILAN TAMGA ADLARI ==")
for cp in sorted(used):
    print(hex(cp), unicodedata.name(chr(cp)), "x%d" % used[cp]["count"])
print("\nbozulmus karakter taramasi:", corrupt)

# 5) DB - fal 1 kontrolu
print("\n== IRK BITIG DB ==")
dbp = os.path.join(KAY, "irk-bitig-db-v3.json")
db = json.load(open(dbp, encoding="utf-8"))
print("tur:", type(db).__name__, "uzunluk:", len(db))
items = db if isinstance(db, list) else list(db.values())
if items and isinstance(items[0], dict):
    print("ilk kayit anahtarlari:", list(items[0].keys()))
hit = None
def walk(o):
    global hit
    if hit: return
    if isinstance(o, dict):
        for v in o.values(): walk(v)
    elif isinstance(o, list):
        for v in o: walk(v)
    elif isinstance(o, str):
        low = o.lower()
        if ("tensi" in low or "t(ä)nsi" in low) and any(0x10C00 <= ord(c) <= 0x10C4F for c in o):
            hit = o
walk(db)
if hit:
    print("FAL-1 ADAY BULUNDU:")
    print(repr(hit))
else:
    print("'tensi' iceren runik metin bulunamadi")

# 6) Kaydet
out = {
    "fonts": {
        "noto_block_coverage": len(noto & block),
        "babel_block_coverage": len(bab & block),
        "turkbitig_block_coverage": len(turk & block),
    },
    "used_runes": {hex(cp): names[hex(cp)] for cp in sorted(used)},
    "block_names": names,
    "corrupt_found": corrupt,
    "missing_in_noto": [hex(c) for c in missing_noto],
    "missing_in_babel": [hex(c) for c in missing_bab],
    "missing_in_turkbitig": [hex(c) for c in missing_turk],
    "db_fal1": hit,
}
with open("E:/Gokturkce_kursu/01_Analiz/tamga_envanteri.json", "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=1)
print("\nOK -> tamga_envanteri.json")
