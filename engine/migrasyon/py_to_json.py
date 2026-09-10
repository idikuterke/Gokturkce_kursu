# -*- coding: utf-8 -*-
"""TEK SEFERLİK GÖÇ: 03_Tasarim/icerik_*.py (HTML string'leri) → content/*.json (şema v1).
Bu betik hattın parçası değildir; Python modüllerini okuyabilmek için Python'dur.
Göçten sonra içerik yalnız JSON'da yaşar; renderer ve güvenlik kapısı JS'tedir (engine/).

Strateji: mevcut HTML gövdeleri 'prose' bloğu olarak AYNEN taşınır (regresyon diff'i temiz kalsın),
yapısal olan yerler (fal blokları, tamga tabloları/kartları) yapısal bloğa çevrilir.
"""
import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

ROOT = "E:/Gokturkce_kursu"
TAS = os.path.join(ROOT, "03_Tasarim")
OUT = os.path.join(ROOT, "content")
os.makedirs(OUT, exist_ok=True)
sys.path.insert(0, TAS)

import icerik_kitapcik, icerik_yapraklar, icerik_irkbitig, icerik_ekuniteler, icerik_degerlendirme

TOKEN = re.compile(r"«FAL(\d+)_(BLOK|RUNIK)»")

def slug(s):
    s = s.lower()
    for a, b in zip("çğıöşü", "cgiosu"):
        s = s.replace(a, b)
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:60] or "bolum"

def govde_to_bloklar(govde):
    """HTML gövdeyi prose bloklarına böl; «FALx_BLOK» → metin-ref (tam), «FALx_RUNIK» → metin-ref (yalnız runik)."""
    bloklar, pos = [], 0
    for m in TOKEN.finditer(govde):
        onceki = govde[pos:m.start()]
        if onceki:  # boşluk/satır sonu dahil aynen korunur (regresyon diff'i)
            bloklar.append({"type": "prose", "targets": ["baski"], "html": onceki})
        no, tur = m.group(1), m.group(2)
        ref = {"type": "metin-ref", "targets": ["baski", "slayt"], "db": "irkbitig", "ref": no}
        if tur == "RUNIK":
            ref["goster"] = ["runik"]
        bloklar.append(ref)
        pos = m.end()
    kalan = govde[pos:]
    if kalan:
        bloklar.append({"type": "prose", "targets": ["baski"], "html": kalan})
    return bloklar

def belge(id_, tur, baslik, kapak_html, bolums, ekstra=None):
    d = {
        "id": id_, "tur": tur, "baslik": baslik, "surum": "2026-09-10",
        "kapakHtml": kapak_html,            # geçiş alanı: yapısal 'kapak'a sonra çevrilecek
        "bolumler": [],
    }
    if ekstra:
        d.update(ekstra)
    seen = set()
    for i, b in enumerate(bolums, 1):
        bid = slug(b["baslik"])
        if bid in seen:
            bid = f"{bid}-{i}"
        seen.add(bid)
        d["bolumler"].append({
            "id": bid, "kicker": b.get("kicker", ""), "baslik": b["baslik"], "ozet": b.get("ozet", ""),
            "bloklar": govde_to_bloklar(b["govde"]),
        })
    return d

# ---------- Tamga grupları (uret2.GRUPLAR'ın birebir kopyası; uret2 import edilmez çünkü yan etkili) ----------
GRUPLAR = [
    ("unluler", "Ünlü Tamgalar — 4 tamga · 8 ses", [
        (0x10C00, "A / E"), (0x10C03, "I / İ"), (0x10C06, "O / U"), (0x10C07, "Ö / Ü")]),
    ("kutuplu", "Kutuplu Ünsüz Tamgalar — kalın / ince çiftleri (20 tamga)", [
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
    ("kutupsuz", "Kutupsuz Ünsüz Tamgalar (7)", [
        (0x10C32, "ç"), (0x10C22, "m"), (0x10C2D, "ng"),
        (0x10C2A, "ny / ń — Irk Bitig"), (0x10C2F, "p"), (0x10C14, "z"), (0x10C41, "ş")]),
    ("ligatur", "Çift Sesli Hece Damgaları — Ligatürler (7)", [
        (0x10C38, "OK / UK · KO / KU"), (0x10C1C, "ÖK / ÜK · KÖ / KÜ"),
        (0x10C36, "IK / KI"), (0x10C31, "İÇ / Çİ"),
        (0x10C26, "ND / NT"), (0x10C21, "LD / LT"), (0x10C28, "NÇ / NC")]),
    ("irkbitig", "Irk Bitig'e Özgü Özel Tamgalar (2)", [
        (0x10C47, "ot — logografik kelime tamgası"), (0x10C30, "up / üp — yarı-hece tamgası")]),
    ("yenisey", "Yenisey Varyantları (7)", [
        (0x10C04, "Yenisey I"), (0x10C05, "Yenisey E — kapalı é"),
        (0x10C0A, "Yenisey kalın B"), (0x10C12, "Yenisey kalın D"),
        (0x10C3B, "Yenisey kalın R"), (0x10C44, "Yenisey kalın T"),
        (0x10C35, "Yenisey kalın K")]),
]
env = json.load(open(os.path.join(ROOT, "01_Analiz/tamga_envanteri.json"), encoding="utf-8"))
NAMES = env["block_names"]
def tamga_ad(cp):
    raw = NAMES.get(hex(cp), {}).get("name", "")
    return raw.replace("OLD TURKIC LETTER ", "").replace("OLD TURKIC ", "")

tamgalar = {
    "surum": "tamgalar-v1",
    "aciklama": "Kurs tamga envanteri. 'cp' kod noktasından üretilir; renderer tamgayı chr(cp) ile çizer. Ders değerleri müfredat tablolarından.",
    "gruplar": [
        {"id": gid, "baslik": baslik,
         "tamgalar": [{"cp": f"U+{cp:04X}", "deger": deger, "ad": tamga_ad(cp)} for cp, deger in ogeler]}
        for gid, baslik, ogeler in GRUPLAR
    ],
}
# Eğitmen/paket için ayrıca kutuplu çiftleri tamga-pair verisi olarak da sun
ciftler = []
kut = GRUPLAR[1][2]
for i in range(0, len(kut), 2):
    (cp1, d1), (cp2, d2) = kut[i], kut[i + 1]
    ciftler.append({"ses": d1.split("—")[1].strip().split()[-1], "kalin": {"cp": f"U+{cp1:04X}", "deger": d1}, "ince": {"cp": f"U+{cp2:04X}", "deger": d2}})
tamgalar["ciftler"] = ciftler
json.dump(tamgalar, open(os.path.join(OUT, "tamgalar.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("tamgalar.json:", sum(len(g["tamgalar"]) for g in tamgalar["gruplar"]), "tamga,", len(ciftler), "çift")

# ---------- Belgeler ----------
docs = [
    belge("kitapcik", "kilavuz", "Göktürkçe Okuma-Yazma Öğreneği — Eğitmen Kılavuzu", icerik_kitapcik.KAPAK, icerik_kitapcik.BOLUMS),
    belge("yapraklar", "yaprak", "Göktürkçe Okuma-Yazma Öğreneği — Öğrenci Çalışma Yaprakları", icerik_yapraklar.KAPAK, icerik_yapraklar.BOLUMS),
    belge("irkbitig-foyu", "foy", "Irk Bitig Okuma Föyü", icerik_irkbitig.KAPAK, icerik_irkbitig.BOLUMS),
    belge("ek-uniteler", "foy", "Ek Üniteler Föyü", icerik_ekuniteler.KAPAK, icerik_ekuniteler.BOLUMS),
    belge("degerlendirme", "degerlendirme", "Değerlendirme Seti", icerik_degerlendirme.KAPAK, icerik_degerlendirme.BOLUMS,
          {"sinav": {"soruSayisi": 12, "esik": 60, "puanEsit": True, "devamOrani": 80}}),
]

# Tamga albümü: uret2.TAMGA_KAPAK + yapısal tamga-grid blokları
TAMGA_KAPAK = open(os.path.join(TAS, "uret2.py"), encoding="utf-8").read()
TAMGA_KAPAK = re.search(r'TAMGA_KAPAK = """(.*?)"""', TAMGA_KAPAK, re.S).group(1)
album = {
    "id": "tamga-albumu", "tur": "album", "baslik": "Tamga Albümü ve Harf Kartları", "surum": "2026-09-10",
    "kapakHtml": TAMGA_KAPAK,
    "bolumler": [
        {"id": "alfabe-tablolari", "kicker": "BÖLÜM 1", "baslik": "Alfabe Tabloları — Tamga Grupları",
         "ozet": "Kaynak metinlerde geçen 47 tamganın gruplu envanteri.",
         "bloklar": [{"type": "tamga-grid", "targets": ["baski", "slayt"], "grup": g[0], "gorunum": "tablo"} for g in GRUPLAR]},
        {"id": "harf-kartlari", "kicker": "BÖLÜM 2", "baslik": "Harf Kartları — Kes-Yapıştır Seti", "ozet": "",
         "bloklar": [{"type": "tamga-grid", "targets": ["baski"], "grup": "*", "gorunum": "kart", "kesmeCizgisi": True}]},
    ],
}
docs.append(album)

for d in docs:
    p = os.path.join(OUT, d["id"] + ".json")
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    nb = sum(len(b["bloklar"]) for b in d["bolumler"])
    nref = sum(1 for b in d["bolumler"] for k in b["bloklar"] if k["type"] == "metin-ref")
    print(f"{d['id']}.json: {len(d['bolumler'])} bölüm, {nb} blok ({nref} metin-ref)")
