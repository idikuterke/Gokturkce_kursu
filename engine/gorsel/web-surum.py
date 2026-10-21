#!/usr/bin/env python3
"""
public/gorsel/*.jpg -> public/gorsel/web/<ad>-<genislik>.webp

Kaynak görseller 1344x768 JPEG (~100-240 KB). Uygulama mobil öncelikli;
telefonda 1344 piksellik bir kareyi indirmenin anlamı yok. Bu betik her
görselin iki webp sürümünü üretir (672 ve 1344), <picture>/srcset ile
tarayıcı uygun olanı seçer.

Kaynak dosyalar silinmez: webp'i desteklemeyen tarayıcı jpg'ye düşer.
Yeniden çalıştırılabilir; çıktılar aynı girdiden aynı biçimde üretilir.

    python3 engine/gorsel/web-surum.py
"""
from pathlib import Path
from PIL import Image

KOK = Path(__file__).resolve().parents[2]
KAYNAK = KOK / "public" / "gorsel"
HEDEF = KAYNAK / "web"
GENISLIKLER = (672, 1344)
KALITE = 82

HEDEF.mkdir(parents=True, exist_ok=True)
toplam_once = toplam_sonra = 0

for jpg in sorted(KAYNAK.glob("*.jpg")):
    with Image.open(jpg) as im:
        im = im.convert("RGB")
        for genislik in GENISLIKLER:
            if genislik > im.width:
                continue
            oran = genislik / im.width
            boy = round(im.height * oran)
            kucuk = im.resize((genislik, boy), Image.LANCZOS)
            cikti = HEDEF / f"{jpg.stem}-{genislik}.webp"
            kucuk.save(cikti, "WEBP", quality=KALITE, method=6)
            print(f"  {cikti.name:28} {genislik}x{boy}  {cikti.stat().st_size // 1024:4} KB")
            toplam_sonra += cikti.stat().st_size
    toplam_once += jpg.stat().st_size

print(
    f"\n{len(list(KAYNAK.glob('*.jpg')))} görsel · "
    f"jpg toplam {toplam_once // 1024} KB → webp toplam {toplam_sonra // 1024} KB "
    f"({len(GENISLIKLER)} boy)"
)
