# Görsel kaynak kaydı — Yedigün 1

| Dosya | Üretim | Metin | Doğrulama |
|---|---|---|---|
| orhun-bengu-tas.jpg | Flux1-dev (ComfyUI), seed 1893, metinsiz istem | — | görsel denetim: yazı yok |
| irk-bitig-sayfa.jpg | Flux1-dev, seed 907, metinsiz istem | — | görsel denetim: yazı yok |
| keski-firca.jpg | Flux1-dev, seed 7440 (744 reddedildi: kâğıtta uydurma işaretler) | — | görsel denetim: yazı yok |
| tengri-tas.jpg | Flux1-dev tas-doku (seed 552) + engine/gorsel/kazi.py deterministik kazıma | 𐱅𐰭𐰼𐰃 (Noto Sans Old Turkic) | gokturkce_verify_image kontrol maskesi: t-ŋ-r-ı, teŋri EDPT s.523, overall_valid=true (10.09.2026) |

İlke: difüzyon modeli hiçbir zaman tamga çizmez; runik metin fonttan, kaynaktaki Unicode diziden kazınır.
Ham PNG'ler `ham/` altında (git dışı). Yeniden üretim: `node engine/gorsel/comfy.mjs` → `python engine/gorsel/kazi.py`.

## Yedigün 2–4 (10.09.2026)

| Dosya | Üretim | Metin | Doğrulama |
|---|---|---|---|
| tas-esen.jpg | tas-doku + kazi.py | 𐰾𐰤 | maske: s-n · geçerli (front) |
| tas-kok.jpg | tas-doku + kazi.py | 𐰚𐰜 | maske: k-ök · kök EDPT s.708 · geçerli |
| tas-bir-otuz.jpg | tas-doku + kazi.py | 𐰋𐰃𐰼 : 𐰆𐱃𐰔 | maske (birleşik): 7 glif doğru okundu (b-ı-r · : · o-t-z); ASCII ":" ayırıcı glif sanılıp kelimeler birleşti → ayrı maskeler: bir ✓, otuz o-t-z ✓ (EDPT dizininde "otuz" yok — kaynak: KT-G-1 OTuZ) |

Not: `göktürkçe sayılar.txt` kaynağında z için 𐰯 (p) yazılmış — hata; z = 𐰔. Yazımda KT-G-1'deki 𐰆𐱃𐰔 esas alındı.
