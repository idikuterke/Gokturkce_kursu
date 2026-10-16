# Müfredat Mimarisi — Taslak

Hedef: Sıfırdan başlayan bir kullanıcı kursu bitirdiğinde **tamgaları tanır,
kelime okur-yazar, imla kurallarına uygun cümle kurar ve özgün bir bengü taş
satırını kendi başına deşifre eder.**

## 1. Temel tespit

İçerik eksik değil. Repoda akademik temelli, bitmiş bir materyal seti var —
ama uygulama bunların hiçbirini kullanmıyor.

| Kaynak | Durum | Uygulamada |
|---|---|---|
| `00_Kaynaklar/müfredat.txt` — 4 Yedigün, ders ders işlenmiş | Hazır | Kullanılmıyor |
| `00_Kaynaklar/imla_kurallari_13_madde.md` — 13 imla kuralı | Hazır | Kullanılmıyor |
| `05_Kaynak_DB/orhun-db-v1.json` — **214 dize** (KT 70 / BK 82 / TY 62) | Runik + transkripsiyon + Türkçe, 5.770 kelime | Kullanılmıyor |
| `00_Kaynaklar/irk-bitig-db-v3.json` | Hazır | Kullanılmıyor |
| `content/yedigun-1..4.json` + `ek-uniteler.json` | Hazır | Kullanılmıyor |
| `content/degerlendirme.json` — yarışma, ölçek, sertifika ölçütleri | Hazır | Kullanılmıyor |
| `content/sozluk.json` — 52 kelime | Hazır | Uygulamada **21** |
| `src/data/curriculumData.ts` | Elle yazılmış, ayrı | 5 aşama / 10 ders / **29 alıştırma** |

Yani iki ayrı içerik hattı var: PDF/baskı hattı (`content/` + `engine/`) ve
React uygulaması (`src/data/`). Uygulama hattı diğerinin yanında çok sığ.

**Sonuç: yeni içerik yazmak değil, mevcut içeriği uygulamaya bağlamak gerekiyor.**

## 2. Alıştırmaları üretmek — elle yazmak değil

29 alıştırma elle yazıldı. Aynı yöntemle premium derinliğe çıkmak yüzlerce
saat alır. Oysa 214 dizelik korpus zaten alıştırma üretmeye uygun:

Her dize şunları taşıyor: `gokturkce`, `transkripsiyon`, `turkce`,
`kelime_sayisi`, `tamga_sayisi`, `dusen_unlu`, `yipranma`, `kaynak`, `satir`.

Son dört alan **hazır bir zorluk modeli**: düşen ünlü sayısı ve yıpranma
arttıkça dize zorlaşır. Tek bir dizeden en az beş alıştırma türetilebilir:

1. Tamga → ses eşleştirme (dizedeki tamgalardan)
2. Runik satırı transkripsiyona çevirme
3. Transkripsiyonu Türkçeye çevirme
4. Eksik tamgayı tamamlama (düşen ünlü kuralını sınar)
5. Kelimeyi tamgalarla kurma (sağdan sola)

214 dize × 5 tür ≈ **1.000+ alıştırma**, her biri gerçek bir kitabe satırına
dayalı ve kaynağı gösterilebilir (`KT-G-1` gibi). Elle yazılan içerikle
kıyaslanmayacak bir derinlik.

## 3. Kuşaklar (aşama sayısı hedefe göre, sabit değil)

Aşamalar beceriye göre tanımlı; "kaç aşama" sorusunun cevabı buradan çıkar.

| # | Kuşak | Kazanım | Kaynak |
|---|---|---|---|
| 1 | Tamga Tanıma | 4 ünlü + 20 kutuplu ünsüz | Yedigün 1 |
| 2 | İmla Ekonomisi | Söz başı/içi a-e düşmesi, son ünlü kuralı | Yedigün 2, imla 2-5 |
| 3 | Ligatür ve Kısıt | Hece damgaları, konum yasağı, ikiz ünsüz | imla 8-10 |
| 4 | Kelime | Sözlükten okuma-yazma | `sozluk.json` |
| 5 | Biçimbilgisi | Hal ekleri, iyelik, uyuma girmeyen ekler | imla 11-13 |
| 6 | Cümle | Söz dizimi, taş ekonomisi | Yedigün 3 |
| 7 | **Deşifre** | Gerçek dizeler, kolaydan yıpranmışa | Orhun korpusu |
| 8 | Medya Farkları | Irk Bitig, Yenisey, açık/kapalı e | Irk Bitig DB |
| 9 | Özel Konular | Sayılar, r/l~z/ş ayrışması, uslamlama fiilleri | Ek Üniteler |
| 10 | Bitirme | Sınav + sertifika ölçütleri | `degerlendirme.json` |

Kuşak 7 ürünün kalbi: kullanıcı ilk kez kendi başına bir bengü taş satırı
okur. Buraya kadarki her şey o anın hazırlığı.

## 4. Ücretsiz / Premium sınırı

- **Ücretsiz:** Kuşak 1-2 (alfabeyi tanır, basit kelime okur) — ürünü
  denemek için yeterli, tek başına bir değer taşır.
- **Premium:** Kuşak 3-10 + deşifre atölyesi + sertifika.

## 5. Önce yapılacaklar

1. `content/` ve `05_Kaynak_DB/` verisini uygulamanın okuyacağı biçime
   dönüştüren bir katman (derleme anında, elle kopyalama değil).
2. Korpustan alıştırma üreten jeneratör + zorluk sıralaması.
3. Sözlüğü 21 → 52'ye tamamla, sonra genişlet.
4. Kuşak yapısını `curriculumData.ts` yerine üretilen veriden kur.

## 6. Açık konular — karar/kaynak gerekiyor

- **Korpus doğrulanmamış.** 214 dizenin tamamında `dogrulandi: false`.
  Premium bir üründe gerçek kitabe çevirisi yayımlanıyorsa bunların akademik
  kontrolden geçmesi gerekir. (`claude/vibrant-franklin` dalındaki tarama 24
  düzeltme + 24 gerekçeli istisna kaydetmişti; ayrıştırılıp doğrulanmalı.)
- **Sözlük küçük.** 52 kelime, "kelime okur-yazar" hedefi için az. Hedef
  kelime sayısı ve kaynak listesi gerekiyor.
- **Ses kaydı yok.** Şu an tarayıcının konuşma sentezi kullanılıyor; kalite
  yetersiz. Tamga ve kelime telaffuzları için kayıt gerekebilir.

---

## Denetim Ekranı (geliştirici aracı)

`npm run dev` → <http://localhost:3000/#denetim>

Üretim derlemesine **girmez** (`import.meta.env.DEV` ile elenir, `dist/` içinde yoktur).

Üç kuyruk:

| Kuyruk | Kayıt | Kaynak |
|---|---|---|
| Cümlecik | 953 | `docs/cumlecik-adaylari.json` |
| Dize | 207 | `docs/ceviri-bekleyen-dizeler.json` |
| Sözlük | 260 | `docs/sozluk-anlam-bekleyenler.json` |

Kısayollar: `A` onay · `R` red · `←`/`→` gezinme · `Ctrl+S` dışa aktar.
Kaynak alanı boşken onay düğmesi kapalıdır.

Kararlar `localStorage`'da birikir. İş akışı:

```bash
# 1. ekranda çalış, "Dışa aktar" ile JSON indir
# 2. önce kuru çalıştır
node engine/denetim-uygula.mjs ~/Downloads/denetim-dize-2026-10-16.json --kuru
# 3. sorun yoksa uygula
node engine/denetim-uygula.mjs ~/Downloads/denetim-dize-2026-10-16.json
node engine/icerik-uret.mjs && node engine/kapi.mjs
```

Onaylar şuralara yazılır:
`dize` → `05_Kaynak_DB/orhun-db-v1.json` · `cumlecik` → `05_Kaynak_DB/cumlecikler-onayli.json` · `sozluk` → `05_Kaynak_DB/sozluk-anlamlar.json`

Runik düzeltmesi **otomatik uygulanmaz** — rapora düşer, elle karar verilir.

---

## Tema Token Katmanı

Tek kaynak: **`src/styles/tema.json`**. Renk değiştirmek = bu dosyada hex düzenlemek.

```bash
npm run tema:uygula   # @theme bloğunu, tema.ts'i ve bileşen sınıflarını yeniden üretir
npm run tema:rapor    # henüz tokenleştirilmemiş ham renkleri listeler
```

Üretilen iki dosya **elle düzenlenmez**:

| Dosya | İçerik | Kullanım |
|---|---|---|
| `src/index.css` → `@theme` bloğu | `--color-marka: #2BC4C4;` | Tailwind sınıfları: `bg-marka`, `text-metin-2` |
| `src/styles/tema.ts` | `TEMA.marka` | SVG `fill`/`stroke`, recharts propları, inline style |

26 token, 1076 sınıf dönüştürüldü. Dönüşüm doğrulandı: tam sayfa ekran
görüntüsü (1280×9365) **piksel farkı sıfır**. Tek token değiştirildiğinde
3536 piksel değişiyor — zincir çalışıyor.

### Kalan ham renkler

159 farklı renk / 315 kullanım hâlâ ham hex. Bunlar Tailwind sınıfı
**değil**: maskot SVG'lerinin `fill` değerleri, grafik renkleri, inline
style. Tokenleştirmek için `TEMA.marka` biçimine elle çevrilmeleri gerekir.
`npm run tema:rapor` en çok kullanılanları sıralar.

Yeni kod yazarken ham hex yazma — token yoksa `tema.json`'a ekle.

---

## Çoklu Kaynak Çeviri Tarama Hattı

953 cümlecik, 10'arlı **96 blok** hâlinde `docs/ceviri-bloklari/`.
Her blok bağımsızdır — bir modele/tarayıcıya tek başına verilebilir.

```bash
npm run ceviri:blok                      # blokları üret (10'arlı)
node engine/ceviri-blok-uret.mjs --boyut 25 --uygun   # 25'erli, yalnız alıştırmaya uygun
npm run ceviri:birlestir                 # doldurulmuş blokları topla, uzlaşmayı ölç
```

### Blok yapısı

Kilitli alanlar — **değiştirilmez**: `id`, `dizeId`, `runik`, `transkripsiyon`, `kelimeAraligi`.
Bağlam — salt okunur: `kelimeKarsiliklari`, `kelimeSayisi`, `yipranma`, `sonKelimeYuklem`.
Doldurulacak: `adaylar[]` — her taranan kitaptan bir giriş.

```json
{ "kitap": "Tekin, Orhon Yazıtları, 2003", "sayfa": "s. 54",
  "metin": "…", "tur": "ceviri", "guven": 0.9 }
```

### Uzlaşma ölçümü

`ceviri:birlestir` adaylar arası **Jaccard kelime benzerliği** hesaplar
(kelime sırası çeviride oynadığı için küme karşılaştırması).

| Durum | Anlamı | Kuyruk sırası |
|---|---|---|
| `ayristi` | ≥2 kitap, benzerlik < eşik | **1 — insan kararı şart** |
| `tek-kaynak` | 1 kitap | 2 — teyitsiz |
| `uzlasti` | ≥2 kitap, benzerlik ≥ eşik | 3 — hızlı onay |

Varsayılan eşik 0.7, `--esik` ile değişir.

**Hiçbir kayıt otomatik onaylanmaz.** Çıktı `docs/ceviri-onay-kuyrugu.json`;
denetim ekranında insan kararı bekler. Kitapsız aday sorunlu olarak raporlanır.
