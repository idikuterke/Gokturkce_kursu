# Görsel kaynak kaydı — Yedigün 1

| Dosya | Üretim | Metin | Doğrulama |
|---|---|---|---|
| orhun-bengu-tas.jpg | Flux1-dev (ComfyUI), seed 1893, metinsiz istem | — | görsel denetim: yazı yok |
| irk-bitig-sayfa.jpg | Flux1-dev, seed 907, metinsiz istem | — | görsel denetim: yazı yok |
| keski-firca.jpg | Flux1-dev, seed 7440 (744 reddedildi: kâğıtta uydurma işaretler) | — | görsel denetim: yazı yok |
| tengri-tas.jpg | Flux1-dev tas-doku (seed 552) + engine/gorsel/kazi.py deterministik kazıma | 𐱅𐰭𐰼𐰃 (Noto Sans Old Turkic) | gokturkce_verify_image kontrol maskesi: t-ŋ-r-ı, teŋri EDPT s.523, overall_valid=true (10.09.2026) |

İlke: difüzyon modeli hiçbir zaman tamga çizmez; runik metin fonttan, kaynaktaki Unicode diziden kazınır.
Ham PNG'ler `ham/` altında (git dışı). Yeniden üretim: `node engine/gorsel/comfy.mjs` → `python engine/gorsel/kazi.py`.
