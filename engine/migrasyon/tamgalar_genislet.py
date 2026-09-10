# -*- coding: utf-8 -*-
"""content/tamgalar.json'a iki grup ekler:
  yenisey-tam : Unicode Eski Türk bloğundaki TÜM Yenisey varyantları (31). Kaynak: Unicode resmi adları;
                ders değeri, aynı adı taşıyan Orhon karşılığından (ORKHON X ↔ YENISEI X) devralınır.
  kagit       : Irk Bitig (kâğıt) harf biçimleri = BabelStone Irk Bitig fontunun kapsadığı 37 kod noktası.
                Aynı Unicode karakter, el yazması glif biçimiyle (font değişir, kod noktası değişmez).
Her iki grup 'kaynak' alanı taşır; güvenlik kapısı metin kaynaklarında geçmeyen tamgalar için bunu zorunlu tutar.
"""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
from fontTools.ttLib import TTFont

ROOT = "E:/Gokturkce_kursu"
env = json.load(open(f"{ROOT}/01_Analiz/tamga_envanteri.json", encoding="utf-8"))["block_names"]
tam = json.load(open(f"{ROOT}/content/tamgalar.json", encoding="utf-8"))
ad = lambda cp: env.get(hex(cp), {}).get("name", "").replace("OLD TURKIC LETTER ", "")

# Orhon kod noktası → ders değeri (mevcut gruplardan)
deger = {}
for g in tam["gruplar"]:
    if g["id"] in ("yenisey-tam", "kagit"): continue
    for t in g["tamgalar"]:
        deger.setdefault(int(t["cp"][2:], 16), t["deger"])
# Unicode adından Orhon karşılığı
isim2cp = {ad(cp): cp for cp in range(0x10C00, 0x10C49)}
EK = {  # Orhon grubunda bulunmayan (ders envanterine girmemiş) karşılıklar için değer
    "ORKHON AE": "e (açık) — yalnız Yenisey", "ORKHON O": "O / U", "ORKHON AED": "d² — ince D",
    "ORKHON AEL": "l² — ince L", "ORKHON ASH": "ş¹ — kalın Ş", "ORKHON ESH": "ş² — ince Ş", "ORKHON AER": "r² — ince R",
    "ORKHON AS": "s¹ — kalın S", "ORKHON AES": "s² — ince S", "ORKHON EM": "m", "ORKHON EP": "p", "ORKHON EC": "ç",
    "ORKHON ENG": "ng", "ORKHON AEK": "k² — ince K",
}
yen = []
for cp in range(0x10C00, 0x10C49):
    n = ad(cp)
    if not n.startswith("YENISEI"): continue
    ork = "ORKHON " + n.split(" ", 1)[1]
    ocp = isim2cp.get(ork)
    d = deger.get(ocp) if ocp else None
    if d is None: d = EK.get(ork, "—")
    if n == "YENISEI E": d = "é (kapalı e) — yalnız Yenisey"
    if n == "YENISEI ANG": d = "ng (kalın) — Yenisey"
    if n == "YENISEI AENG": d = "ng (ince) — Yenisey"
    yen.append({"cp": f"U+{cp:04X}", "deger": d, "ad": n, "orhon": f"U+{ocp:04X}" if ocp else None})
tam["gruplar"] = [g for g in tam["gruplar"] if g["id"] not in ("yenisey-tam", "kagit")]
tam["gruplar"].append({"id": "yenisey-tam", "baslik": f"Yenisey Yazıtları Varyantları — tam liste ({len(yen)} tamga)",
    "kaynak": "Unicode 15.1 Old Turkic bloğu resmi karakter adları (U+10C00–10C48); ders değerleri aynı adlı Orhon karşılığından",
    "not": "Yenisey biçimleri Orhon harflerinin bölgesel glif varyantlarıdır; ses değerleri aynıdır. Kursun 7'lik seçkisi 'yenisey' grubundadır.",
    "tamgalar": yen})

bab = TTFont(f"{ROOT}/00_Kaynaklar/fontlar/BabelStoneIrkBitig.ttf")
cmap = set()
for t in bab["cmap"].tables:
    if t.isUnicode(): cmap |= set(t.cmap)
kag = []
for cp in sorted(c for c in cmap if 0x10C00 <= c <= 0x10C48):
    d = deger.get(cp) or EK.get(ad(cp), "—")
    kag.append({"cp": f"U+{cp:04X}", "deger": d, "ad": ad(cp), "font": "BabelStone Irk Bitig"})
tam["gruplar"].append({"id": "kagit", "baslik": f"Kâğıda Yazılı (Irk Bitig) Harf Biçimleri ({len(kag)} tamga)",
    "kaynak": "BabelStone Irk Bitig fontu (Andrew West) — el yazması glif biçimleri; kod noktaları Unicode standardı",
    "not": "Aynı Unicode karakterin fırça biçimi. Taş biçimi Noto Sans Old Turkic ile, kâğıt biçimi BabelStone Irk Bitig ile çizilir.",
    "font": "BabelStone Irk Bitig", "tamgalar": kag})
json.dump(tam, open(f"{ROOT}/content/tamgalar.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"yenisey-tam: {len(yen)} | kagit: {len(kag)}")
for t in yen: print(" ", t["cp"], t["ad"].ljust(14), "→", t["orhon"], "|", t["deger"])
