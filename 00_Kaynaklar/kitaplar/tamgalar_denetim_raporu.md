# tamgalar.json denetimi — Unicode kod tablosu + N3299R/N3357R2 + Tekin 2003 s. 22-23 (2026-09-11)

## Mekanik kontrol (script, 72 kod noktası)
- `ad` alanı ↔ Unicode 6.0 kod tablosu adları: **72/72 birebir**. Tabloda olup bizde olmayan tek cp: **U+10C48 ORKHON BASH (𐱈)**.
- Ses değerleri ↔ Unicode adları: tutarlı (A/E, I/İ, O/U, Ö/Ü; kalın/ince çiftler; ligatürler OQ/OEK/IQ/IC/ELT/ENT/ENC/ENY; ENG/ANG/AENG).
- Aynı cp'nin `yenisey` (7'lik seçki) ve `yenisey-tam` gruplarındaki değerleri anlamca aynı, yalnız yazım farkı ("Yenisey kalın B" ~ "b¹ — kalın B") — sorun değil.

## Tekin s. 22-23 Orhun tablosu ile karşılaştırma
| Konu | tamgalar.json | Tekin | Unicode | Sonuç |
|---|---|---|---|---|
| ş | 𐱁 tek kutupsuz ş (kutupsuz grubu) | tek "Ş damgası" ş | 10C41 ORKHON ESH | DOĞRULANDI (§4.4) |
| aş | 𐰿 "aş (hece damgası)" ligatur; 𐱀 Yenisey varyantı | "AŞ hece damgası" aş | 10C3F ORKHON ASH / 10C40 YENISEI ASH | DOĞRULANDI |
| baş | YOK | "BAŞ hece damgası" baş (Orhun tablosunda) | 10C48 ORKHON BASH | EKSİK — ligatur grubuna eklenmesi önerilir (§4.6 "kayıtta kalır" ile uyumlu). Not: ligatur grubu 8→9 kart olur (Y2 ızgara, Y3, Tamga Albümü). |
| ń | 𐰪 "ny / ń — Irk Bitig" (kutupsuz) | "Ń damgası" Orhun tablosunda; tanıklar azkıña (KT D34), koñ (KT D12), çıgañ (KT G10) | 10C2A ORKHON ENY | ETİKET HATASI — "Irk Bitig" kısıtı kaldırılmalı: "ny / ñ (koñ KT D12, azkıña KT D34)" |
| ŋ | 𐰭 ng | "Ŋ damgası" ŋ | 10C2D ORKHON ENG | DOĞRULANDI |
| Çİ birleşik | yalnız 𐰱 İÇ/Çİ | Tekin İKİ ayrı işaret verir: "İÇ/Çİ damgası" (iç) ve "Çİ birleşik damgası" (çi) | yalnız 10C31 ORKHON IC | Unicode'da ayrı cp yok; ligatur 𐰱 kaydının `not` alanına "Tekin ikinci bir Çİ birleşik işareti ayırır (Unicode'da kodlanmamış)" eklenmesi önerilir |
| up/üp | 𐰰 irkbitig grubu "yarı-hece" | Tekin Orhun tablosunda YOK | 10C30 ORKHON OP | tutarlı (IB/Yenisey işareti); Unicode adı ORKHON olsa da not gerekmez |
| ot | 𐱇 irkbitig | Orhun tablosunda yok | 10C47 ORKHON OT | tutarlı |
| Yenisey ä / é | 10C02 açık e, 10C05 kapalı é | Tekin Yenisey tablosu: ä ve e ayrı harf (s. 23) | YENISEI AE / YENISEI E | DOĞRULANDI (§4.4) |
| varyant notları | — | Tekin B¹ (T, KÇ), B² (T, O, KÇ), K² (T, O, KÇ), S¹ (T, KÇ), T¹ (T, O, KÇ), Z (T, O), ÜK (T, O, KÇ), IK (T, O), NT (T, O, KÇ) varyantlı | — | GENİŞLETME: kutuplu kayıtlarına "yazıt varyantı: T/O/KÇ" notu eklenebilir (kurs kapsamı dışı; teklif cetveline gerekmez) |

## Önerilen işlemler (kullanıcı kararı)
1. ń etiketini düzelt (kesin hata) — kutupsuz + kagit gruplarında.
2. 𐱈 baş'ı ligatur grubuna ekle (kaynak: Tekin 2003 s. 23; Unicode 10C48) — 9 kart olur; teklif cetveline de satır.
3. 𐰱 kaydına Tekin'in "Çİ birleşik" notu.
4. (isteğe bağlı) kutuplu kayıtlarına T/O/KÇ varyant notu.
