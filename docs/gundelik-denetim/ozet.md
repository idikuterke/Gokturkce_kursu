# Gündelik Yazım Denetimi — Özet

Üretim: 2026-10-18 · `npm run gundelik:denetim`

| | |
|---|---|
| Toplam kelime | 134 |
| Tanıklı (yazıtta geçiyor, denetim gerekmez) | 20 |
| **Denetlenecek (kuraldan üretildi)** | **114** |
| Blok | 12 × 10 |

Tema dağılımı: doğa 12 · aile 6 · sayı 4 · renk 3 · fiil 14 · yiyecek 6 · gündelik 11 · meyve 11 · sebze 7 · hayvan 20 · doğa terimi 20

## Tanıklı kelimeler (denetim dışı)

- **taş** <span lang="otk">𐱃𐱁</span> — KT-G-11
- **ay** <span lang="otk">𐰖</span> — KT-KD-1
- **yer** <span lang="otk">𐰘𐰼</span> — KT-D-1
- **kız** <span lang="otk">𐰶𐰃𐰔</span> — KT-D-7
- **er** <span lang="otk">𐰼</span> — KT-D-12
- **bir** <span lang="otk">𐰋𐰃𐰼</span> — KT-G-6
- **iki** <span lang="otk">𐰚𐰃</span> — KT-D-27
- **üç** <span lang="otk">𐰇𐰲</span> — BK-D-32
- **beş** <span lang="otk">𐰋𐰾</span> — TY2-G-5
- **altı** <span lang="otk">𐰞𐱃𐰃</span> — KT-D-31
- **sekiz** <span lang="otk">𐰾𐰚𐰔</span> — BK-D-24
- **on** <span lang="otk">𐰆𐰣</span> — KT-G-12
- **yüz** <span lang="otk">𐰘𐰇𐰔</span> — KT-D-33
- **ak** <span lang="otk">𐰴</span> — KT-D-35
- **kara** <span lang="otk">𐰴𐰺𐰀</span> — KT-D-8
- **boz** <span lang="otk">𐰉𐰆𐰔</span> — KT-D-32
- **at** <span lang="otk">𐱃</span> — KT-D-20
- **balık** <span lang="otk">𐰉𐰞𐰶</span> — BK-D-28
- **ok** <span lang="otk">𐰸</span> — KT-D-19
- **yaş** <span lang="otk">𐰖𐱁</span> — KT-K-11

## Nasıl denetlenir

**Tercih edilen yol — tarayıcıda.** `npm run dev` → `localhost:3000/#denetim`
→ **Gündelik yazım** sekmesi. Yazım büyük puntoyla, tamga dökümüyle ve
uygulanan kurallarla gelir; kaynak alanı önceden dolu. `A` onay, `R` red,
yanlışsa "Runik düzeltmesi" alanına doğrusunu yaz. Bitince **Dışa aktar**:

```
npm run gundelik:uygula     # indirilen paketi 05_Kaynak_DB/gundelik-istisnalar.json'a işler
npm run gundelik:uret       # modülü yeniden üretir
```

**Kâğıt üstünde.** Bu blokları sırayla aç, yanlışları not et, listeyi bana ver.

Her iki yolda da düzeltmeyi tek tek elle yapmam: **kuralı** düzeltirim ki
aynı hata başka kelimelerde tekrarlanmasın. İstisna dosyası yalnızca kuralın
doğru çalışıp da sonucun yanlış olduğu (düzensiz) durumlar içindir.
