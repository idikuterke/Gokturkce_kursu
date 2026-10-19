# Dereceli kurs birimleri: 35 birimin 30'u kursa girdi

Kaynak belge: `00_Kaynaklar/orhon-kurs-birimleri.md` (Tekin 1998'den seçilmiş
35 birim; okunuş + çeviri + sayfa atfı + tamga katmanı).

Çıkarıcı: `engine/kurs-birimleri-tara.mjs` → `05_Kaynak_DB/kurs-birimleri.json`

## Yöntem: tamga katmanı belgeden DEĞİL korpustan

Belgede tamgalar elle kopyalanmış ve **7 birimde korpustan farklı**.
Örnek: *ötüken yış* için belge 𐰘𐱁 yazmış, korpus 𐰖𐰃𐱁 — hem ince y yerine
kalın y, hem de eksik 𐰃. Bu yüzden tamga katmanı atılıp korpustan yeniden
kuruldu; belgenin yazdığı `belgeTamgaFarki` alanında saklanıyor.

Hizalama kitabın okunuşu ile korpus transkripsiyonu arasında yapılıyor.
İkisi aynı sözcüğü farklı yazabiliyor — çoğu fark yazının kendisinden
geliyor (Göktürk yazısı o~u ve ö~ü'yü ayırmaz, 𐰪 transkripsiyonda hem
"ny" hem "yn" yazılıyor, d~t nöbetleşmesi var). Bu yüzden hizalama
kademeli, ve her birimde hangi kademede hizalandığı kayıtlı:

| kademe | birim |
|---|---|
| tam (birebir) | 20 |
| ünlü katlamalı | 3 |
| ünlü + ünsüz katlamalı | 3 |
| bitişik (sözcük sınırı farkı: *kül tigin* ~ KÖLTİGiN) | 1 |
| hoşgörülü (%86-95, uzun paragraf) | 3 |

Hoşgörülü hizalama yalnız 6+ sözcüklük birimlerde, iki uçtan çapalı ve en
az %85 örtüşme şartıyla uygulanıyor.

## Kursa alınmayan 5 birim

| Birim | Sebep |
|---|---|
| BK-P-2 | Okunuşta `...` var — yazıtta ardışık olmayan iki parça birleştirilmiş |
| TY-P-2 | Aynı: `...` ile birleştirilmiş |
| BK-P-1 | Korpusta hiç geçmeyen sözcükler: *iniyegünüm, oguşım, yırgarı* |
| BK-T-1 | Sözcükler korpusta var ama bu sırayla ardışık değil |
| BK-C-1 | Aynı |

Son üçü aynı kökten: belge bunları **BK D 1**'e bağlıyor ve
*täŋri täg täŋridä bolmış türk bilge kagan bödke olurtum* okuyor. Korpusta
BK D 1 şöyle: *TeŊRİ TeG TeŊRİ YaRaTMıŞ TÜRK BİLGE KaGaN SaBıM* — yani
"täŋridä bolmış" değil "täŋri yaratmış". Bu formül korpusta
**KT G 1**'de geçiyor (*TeŊRİ TeG TeŊRİDE BOLMuŞ TÜRÜK BİLGE KaGaN BU ÖDKE
OLuRTıM*). İki kaynak aynı satırı farklı okuyor.

Bu bir veri hatası değil, **kaynak çatışması**: Tekin 1998'in okuyuşu ile
korpusun (turkbitig tabanlı) okuyuşu ayrılıyor. Karara bağlanana kadar bu
üç birim kursa girmiyor — yanlış olanı öğretmektense eksik öğretmek yeğ.

Çözüm seçenekleri:
- **A** — Korpusu esas al, birimleri KT G 1'e bağla ve okunuşu korpusa göre düzelt.
- **B** — Tekin'i esas al, korpus dizesine "kitapta farklı okunuyor" notu düş.
- **C** — İkisini de göster, çatışmayı öğretici bir not olarak sun.

Öneri: **C**. Yazıt okumanın gerçeği bu; öğrenciye iki okuyuşu göstermek
hem dürüst hem öğretici. Ama bu bir içerik kararı, senin.

## Kursa giren 30 birim

| Kademe | Birim | Alıştırma |
|---|---|---|
| Tamlama (2-4 sözcük) | 12 | 18 |
| Cümlecik (4-10) | 15 | 30 |
| Paragraf (10+) | 3 | 6 |

Soru tipleri: **okunuş** (tamgalar verilir, doğru okunuş seçilir) ve
**eksik sözcük** (pasajdan bir sözcük çıkarılır, tamgası sorulur).

**Anlam sorulmuyor.** Cümle ve cümlecik düzeyinde yalnız okunuş sorulur;
Türkçe karşılık cevaptan sonra bilgi olarak gösterilir.
