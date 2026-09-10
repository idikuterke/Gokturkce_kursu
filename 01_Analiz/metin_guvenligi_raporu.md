# Metin Güvenliği Raporu — Göktürkçe Kurs Materyalleri

Tarih: 08.09.2026 · Kapsam: Kurs Kitapçığı (Eğitmen Kılavuzu) + Öğrenci Çalışma Yaprakları

## 1. Tofu (boş kutu) garantisi — üç bağımsız kanıt

| Kanıt | Yöntem | Sonuç |
|---|---|---|
| Unicode kaplaması | Kaynaklardaki 47 farklı runik karakter, Noto Sans Old Turkic cmap tablosunda arandı | 47/47 mevcut |
| Font gömmesi | Üretilen PDF'lerin font tablosu pypdf ile okundu | Her iki PDF'te `BAAAAA+NotoSansOldTurkic-Regular` alt kümesi gömülü |
| Piksel testi | 47 karakter Pillow ile 48px render edildi; mürekkep pikseli sayıldı | 47/47 çiziliyor; boş glif yok |

Ek: PDF metin katmanından runik karakterler gerçek Eski Türkçe kod noktaları (U+10C00–U+10C4F) olarak geri okunmuştur.

## 2. Halüsinasyon koruması — çıkış/kaynak eşleşmesi

- Üretilen belgelerdeki **her runik karakter**, kaynak dosyalardaki ve Irk Bitig veri tabanındaki karakter kümesiyle karşılaştırıldı.
- Sonuç: **kaynak dışı (uydurma) tamga yok** (kitapçık 43 farklı, yapraklar 34 farklı tamga; tümü kaynak kümesinin alt kümesi).

## 3. Tespit edilen kaynak hataları ve uygulanan çözümler

| Bulgu | Kaynak | Çözüm |
|---|---|---|
| `sabın` cevabında "Compartment" metin kalıntısı | öğrenci çalışma kağıdı · 2. yedice cevap anahtarı | ➔ 𐰽 (kalın S, ORKHON AS) — müfredat cevap anahtarıyla eşleştirildi |
| `adgırın` cevabında 🧠 emoji kalıntısı | aynı yer | ➔ 𐰑 (kalın D, ORKHON AD) |
| `kıldı` çözümünde 🔑 emoji kalıntısı | aynı yer | ➔ 𐰃 (I/İ, ORKHON I) |
| 1. fal metninde Latin harfli "altun" | müfredat + öğrenci çalışma kağıdı | Irk Bitig veri tabanının tam runik metni esas alındı (𐰞𐱃𐰆𐰣); transkripsiyon ve çeviri de veri tabanıyla uyumlu |
| "yarın" kelimesinde ş tamgası iddiası | müfredat fal-1 alıntısı | Veri tabanı metninde "yarın" 𐰖𐰺𐰣 olarak şsız; ş-tamgası tahlili gerçekten ş içeren kelimelere (𐰇𐱁𐰏𐰃𐰤 örgin, 𐰢𐰭𐰃𐰠𐰘𐰇𐱁 meŋileyür, 𐰋𐰃𐰠𐰃𐰭𐰠𐱁 biliŋler) kaydırıldı |
| IK/KI ligatürü için 𐰵 kullanımı | çalışma kağıdının sondaki "2. Yedice" varyant yaprağı | 𐰵 = Unicode YENISEI AQ; resmi adlara göre IK/KI = 𐰶 (ORKHON IQ). Müfredat standardı doğru çıktı; çelişkili varyant yaprak öğrenci setine alınmadı |

## 4. Unicode resmi ad doğrulaması (tartışmalı eşlemeler)

| Gösterim | Unicode resmi adı | Ders değeri (müfredat) | Uyum |
|---|---|---|---|
| 𐰶 (U+10C36) | OLD TURKIC LETTER ORKHON IQ | IK/KI | ✓ |
| 𐰱 (U+10C31) | OLD TURKIC LETTER ORKHON IC | İÇ/Çİ | ✓ |
| 𐰞 (U+10C1E) | OLD TURKIC LETTER ORKHON AL | kalın L (l¹) | ✓ |
| 𐰠 (U+10C20) | OLD TURKIC LETTER ORKHON AEL | ince L (l²) | ✓ |
| 𐰸 (U+10C30) | OLD TURKIC LETTER ORKHON OP | OK/UK · KO/KU | ✓ (fonksiyon) |
| 𐰜 (U+10C1C) | OLD TURKIC LETTER ORKHON OEK | ÖK/ÜK · KÖ/KÜ | ✓ (fonksiyon) |
| 𐰇 (U+10C07) | OLD TURKIC LETTER ORKHON OE | Ö/Ü | ✓ |
| 𐱇 (U+10C47) | OLD TURKIC LETTER ORKHON OT | "ot" logogramı | ✓ |

## 5. Editoryal temizlik (runik metinlere dokunulmadı)

- Sohbet kalıntıları ("hazırlayayım mı?", kapanış emojileri, `[SOURCE_IMAGE_xx]` referansları) baskı metinlerinden çıkarıldı.
- Tüm kurallar, örnekler, alıştırmalar ve cevap anahtarları kaynak metinlerden derlendi; runik dizilere ekleme/değişiklik yapılmadı (yukarıdaki belgeli düzeltmeler dışında).

## 6. Ürün doğrulaması

| Belge | Sayfa | Boyut | Gömülü runik font |
|---|---|---|---|
| 01_Kurs_Kitapcigi_Egitmen_Kilavuzu.pdf | 13 | 688.118 B | Noto Sans Old Turkic (subset) |
| 02_Ogrenci_Calisma_Yapraklari.pdf | 8 | 443.429 B | Noto Sans Old Turkic (subset) |
| 03_Tamga_Albumu_Harf_Kartlari.pdf | 8 | 411.712 B | Noto Sans Old Turkic (subset) |
| 04_Irk_Bitig_Okuma_Foyu.pdf | 6 | 451.246 B | Noto Sans Old Turkic (subset) |
| 05_Ek_Uniteler_Foyu.pdf | 9 | 603.829 B | Noto Sans Old Turkic (subset) |
| 06_Degerlendirme_Seti.pdf | 7 | 442.852 B | Noto Sans Old Turkic (subset) |

A4 dikey · @page sayfa numaraları çalışıyor (1 / 13 biçiminde) · font gömülü olduğu için Old Turkic fontu kurulu olmayan makinelerde ve baskıda doğru görünür.

## 7. Üretim turu 2 (parça 3-6) güvenlik kapısı sonuçları

| Belge | Farklı tamga | Kaynak dışı | Tofu |
|---|---|---|---|
| Tamga Albümü ve Harf Kartları | 47 | 0 | 0 |
| Irk Bitig Okuma Föyü | 34 | 0 | 0 |
| Ek Üniteler Föyü | 9 | 0 | 0 |
| Değerlendirme Seti | 25 | 0 | 0 |

Ek düzeltme: “Özel tamgalı okuma” kaynağında Irk Bitig “1. yüzyılın sonlarına” tarihlenmişti; müfredat ve proje teklifi 9. yüzyıl demektedir. Föyde müfredatla tutarlı olan 9. yüzyıl bilgisi esas alınmıştır.

Set toplamı: 6 PDF · 51 sayfa.
