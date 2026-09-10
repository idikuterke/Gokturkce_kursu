# -*- coding: utf-8 -*-
"""Deterministik tamga kazıma: Flux arka planına (metinsiz) Unicode runik metni fonttan çizip
V-oyuk + ışık/gölge kenarıyla taşa oyulmuş görünüm verir (gokturk_vision tekniği).
Varlık üretim aracıdır; hattın parçası değildir. Metin kaynaktan verilir, model tamga çizmez.

python engine/gorsel/kazi.py <arka_plan.png> <runik_metin> <cikti.png> [--x 0.5 --y 0.5 --boy 220]
"""
import sys, argparse
from pathlib import Path
import numpy as np, cv2
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
FONT = ROOT / "03_Tasarim/fontlar/NotoSansOldTurkic-Regular.ttf"

ap = argparse.ArgumentParser()
ap.add_argument("arka"); ap.add_argument("metin"); ap.add_argument("cikti")
ap.add_argument("--x", type=float, default=0.5); ap.add_argument("--y", type=float, default=0.5)
ap.add_argument("--boy", type=int, default=220)
a = ap.parse_args()

img = Image.open(a.arka).convert("RGBA"); W, H = img.size
# Sağdan sola: görsel sıra için karakterler ters dizilir (font RTL şekillendirme yapmaz)
rtl = "".join(reversed(a.metin))
font = ImageFont.truetype(str(FONT), a.boy)
mask_img = Image.new("L", (W, H), 0); d = ImageDraw.Draw(mask_img)
bb = d.textbbox((0, 0), rtl, font=font); tw, th = bb[2] - bb[0], bb[3] - bb[1]
d.text((int(W * a.x - tw / 2 - bb[0]), int(H * a.y - th / 2 - bb[1])), rtl, font=font, fill=255)
mask = np.array(mask_img, np.uint8)

# Taş dokusuyla mikro yer değiştirme (kenarlar taşın granülünü izler)
gray = cv2.cvtColor(np.array(img), cv2.COLOR_RGBA2GRAY)
sx = cv2.GaussianBlur(cv2.Sobel(gray, cv2.CV_32F, 1, 0, ksize=5), (5, 5), 0); sx /= (np.abs(sx).max() + 1e-5)
sy = cv2.GaussianBlur(cv2.Sobel(gray, cv2.CV_32F, 0, 1, ksize=5), (5, 5), 0); sy /= (np.abs(sy).max() + 1e-5)
gy, gx = np.mgrid[0:H, 0:W].astype(np.float32)
mask = cv2.remap(mask, gx + sx * 3.0, gy + sy * 3.0, cv2.INTER_LINEAR)

# V-oyuk: merkeze doğru koyulaşan taban
dist = cv2.distanceTransform(mask, cv2.DIST_L2, 3); nd = np.clip(dist / (dist.max() or 1), 0, 1)
base = np.array(img, np.float32)
carved = base.copy()
for c in range(3): carved[:, :, c] *= (0.30 + 0.18 * (1 - nd))
out = img.copy()
lay = np.zeros((H, W, 4), np.uint8); lay[:, :, :3] = carved[:, :, :3].astype(np.uint8); lay[:, :, 3] = np.where(mask > 20, 240, 0)
out = Image.alpha_composite(out, Image.fromarray(lay))
# Işık sol-üstten: sağ-alt iç kenar aydınlık, sol-üst iç kenar gölge
def rim(dy, dx): return np.clip(np.roll(np.roll(mask, dy, 0), dx, 1).astype(np.int16) - mask.astype(np.int16), 0, 255).astype(np.uint8)
hi, sh = rim(3, 3), rim(-3, -3)
l1 = np.zeros((H, W, 4), np.uint8); l1[:, :, :3] = (225, 228, 235); l1[:, :, 3] = (hi * 0.7).astype(np.uint8)
l2 = np.zeros((H, W, 4), np.uint8); l2[:, :, :3] = (4, 5, 8); l2[:, :, 3] = (sh * 0.9).astype(np.uint8)
out = Image.alpha_composite(Image.alpha_composite(out, Image.fromarray(l1)), Image.fromarray(l2))
out.convert("RGB").save(a.cikti, quality=92)
print(f"kazındı: {a.cikti} | metin: {a.metin} | {W}x{H}")
