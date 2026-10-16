# tamga-siniflari-v1-kilitli.json — provenans

Kaynak: `idikuterke/gokturk-verify` deposu, `gokturk_labels_v1_locked.json`
(ONOZ Labs · Göktürk Verify, şema sürümü `1.0-locked`, etiket kümesi
`consensus_38_v1`).

Buraya **kopyalandı**, bağlanmadı: kurs deposunun kendi başına derlenebilmesi
gerekiyor. Kaynak depoda değişiklik olursa bu dosya elle tazelenmeli.

## Neden kullanılıyor

38 tamga sınıfı; her sınıfta çekirdek kod noktası, varyant biçimler, uyum
çifti ve **`confusable_with`** (görsel olarak karışan sınıflar) var.

`confusable_with` alanı alıştırma üretiminde çeldirici seçmek için kullanılır:
çeldiriciyi rastgele ya da yalnızca zorluk bandına göre seçmek, öğrenciye
ayırt etmesi gereken şeyi çalıştırmaz. Karışan tamgalar çoğunlukla kalın/ince
çiftleridir (𐰉/𐰋, 𐰍/𐰏, 𐰆/𐰇) — Göktürk imlasının tam da çekirdek güçlüğü.
