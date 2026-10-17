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

---

## Denetleyen alanı — doğruluk iddiasının kaydı

`denetim-uygula.mjs` artık `--denetleyen` alır:

```bash
node engine/denetim-uygula.mjs <dosya>                      # varsayılan: insan
node engine/denetim-uygula.mjs <dosya> --denetleyen makine  # insan onayı YOK
```

| Değer | Anlamı | İçerik üreticisi |
|---|---|---|
| `insan` | Bir insan tek tek gözden geçirdi | **alıştırmaya alır** |
| `makine` | Otomatik üretildi | dosyada tutar, **alıştırmaya almaz** |

`icerik-uret.mjs` `cumlecikler-onayli.json`'u okur ve `denetleyen !== "insan"`
olan her kaydı atlar; kaç tanesini atladığını çıktıda yazar.

Sebep: çeviri doğruluğu iddiası insan onayı olmadan yapılamaz. Makine
üretimi karşılıklar sayfa atıflı ve tutarlı olabilir, ama "doğrulanmış"
değildir. Paketi `--denetleyen makine` ile işlemek veriyi saklar, kapıyı
açmaz — insan onayı gelince aynı kayıtlar `insan` ile yeniden işlenir.

### Denetim ekranı — "Makine önerisi" sekmesi

Makine paketini `--denetleyen makine` ile işledikten sonra kayıtlar
`05_Kaynak_DB/cumlecikler-onayli.json`'a düşer ama alıştırmaya girmez.
Denetim ekranının 4. sekmesi onları insan önüne getirir:

- Günümüz Türkçesi, tür ve kaynak **önceden dolu** gelir
- Sarı uyarı: "Makine üretimi — insan onayı yok, alıştırmaya girmiyor."
- `A` ile olduğu gibi onayla, ya da düzelt sonra onayla

Ön dolgu localStorage'a yazılmaz; insan bir şeye dokunana kadar karar
`beklemede` kalır. Böylece "açtım ama bakmadım" ile "okudum, doğru"
birbirine karışmaz.

Onaylananları işle:
```bash
node engine/denetim-uygula.mjs <disa-aktarim.json> --denetleyen insan
node engine/icerik-uret.mjs
```

---

## Kaynak Tarama — kitaplardan atıflı çeviri çıkarımı

```bash
npm run kaynak:tara                      # eşik 0.55
node engine/kaynak-tara.mjs --esik 0.7   # daha sıkı
```

Taranan kitaplar (`00_Kaynaklar/kitaplar/`, hepsi PROVENANS başlıklı):

| Kitap | Sayfa |
|---|---|
| Tekin, *Orhon Türkçesi Grameri*, 2003 | 276 |
| Ölmez, *Köktürkçe ve Eski Uygurca Dersleri*, 2017 | 115 (566'nın bir kısmı) |

Kalıp: `*transkripsiyon* "Türkçe çeviri" (ATIF)`. Atıf dize kimliğine
çevrilir, sonra o dizenin cümlecikleriyle karşılaştırılır.

**Eşleştirme ünsüz iskeleti üzerinden.** Korpus `TeŊRİ : TeG` yazar,
kitap `teŋri teg`; yazılmayan ünlüler iki yanda farklı olduğu için
ünlüler atılıp 3-gram Jaccard benzerliği hesaplanır.

**Tonyukuk özel durumu:** kitaplar yüz kodu yazmaz, sürekli satır
numarası verir (`T 45`). `orhun-db`'deki `sira` alanı (1-62) tam bu
numaralandırmayla örtüşür — 1. taş 1-35, 2. taş 36-62 — eşleme
oradan yapılır. Dört tam eşleşmeyle doğrulandı.

Sonuç: **231 / 953 cümlecik** eşleşti. Kalanın büyük kısmı başka
yazıtlara ait atıflar (Irk Bitig 172, Moyun Çor, Küli Çor, Ongin,
Yenisey) — bizim 214 dizelik Orhun korpusunda yok.

Paket `--denetleyen makine` ile işlenir, denetim ekranının
"Makine önerisi" sekmesinde insan önüne gelir. `not` alanında eşleşme
skoru ve kitaptaki transkripsiyon yazar.

---

## Tekin 1998 — metin yayını çıkarımı

```bash
npm run tekin98:tara
```

Gramer kitaplarından farkı: *Orhon Yazıtları* (1998) her satırı baştan
sona çevirir. Her yazıt bölümünde önce çevriyazı bloğu, sonra çeviri
bloğu gelir; ikisi de aynı `(G 1)` işaretçisini taşır.

**Hangisinin çevriyazı olduğu tahmin edilmez.** İki parçanın da korpustaki
satıra ünsüz-iskeleti benzerliği ölçülür; yüksek olan çevriyazıdır. Bu
aynı zamanda doğru satırı bulduğumuzun kanıtıdır — eşleşme zayıfsa kayıt
şüpheli sayılıp dışarıda bırakılır.

Sonuç: **139/214 dize** çevirisi çıkarıldı, 47 şüpheli
(`docs/tekin1998-raporu.md` listeler). Bildirilen hizalama kaymalarından
KT-D-12, KT-D-20, BK-D-11, BK-D-17 otomatik yakalandı.

### İnsan onayı koruması

`denetim-uygula.mjs --denetleyen makine`, `denetleyen === "insan"` olan
bir kaydın **üzerine yazmaz**; korunan kayıtları raporlar. İnsan onayı bu
hattın en pahalı ürünü — otomatik bir koşu onu sessizce silemez.

`icerik-uret.mjs` hem dize hem cümlecik yolunda `denetleyen === "insan"`
arar. Makine çıkarımı DB'de durur, alıştırmaya girmez.

### Denetimi kaydetme

Yol yazmana gerek yok — `--son` indirilenler klasöründeki en yeni
`denetim-*.json` dosyasını seçer ve hangisini seçtiğini yazar.

```bash
# 1. ekranda çalış → "Dışa aktar" (ya da Ctrl+S) → JSON iner
# 2. önce kuru çalıştır, ne olacağını gör
node engine/denetim-uygula.mjs --son --kuru
# 3. uygula
node engine/denetim-uygula.mjs --son
# 4. yeniden üret ve kapıyı koş
node engine/icerik-uret.mjs && node engine/kapi.mjs
# 5. işi kalıcı yap
git add -A && git commit -m "denetim: N cümlecik insan onayı" && git push
```

`--denetleyen` yazılmazsa `insan` varsayılır; elle denetim için doğrusu budur.
Dosyayı adıyla vermek istersen yol ya mutlak olmalı ya da bulunduğun
dizine göreli. `--son` şu sırayla arar: `~/Downloads`, `~/İndirilenler`,
`docs/`, bulunduğun dizin.

Dosya adındaki sekme adı (`makine`) ile içindeki `kuyruk` alanı farklıdır:
"Makine önerisi" sekmesi cümlecik kaydı gösterdiği için `kuyruk: "cumlecik"`
olarak aktarılır. `denetim-uygula.mjs` içerideki alana bakar.

**Kararlar tarayıcı deposunda tutulur.** Dışa aktarmadan önbellek
temizlenirse gider. Her oturumun sonunda dışa aktar.

---

## Güvenilirlik katmanı — `insan > kitap > model`

Üstteki alttakinin üzerine yazar, tersi olmaz. **Hangi paketi önce
uyguladığın artık önemsiz.**

| Katman | Anlamı | İçerik üreticisi |
|---|---|---|
| `insan` | Bir insan tek tek gözden geçirdi | **alıştırmaya alır** |
| `kitap` | Metin yayınından çıkarıldı, sayfa atıflı | almaz |
| `model` | Otomatik üretim | almaz |

Katman şu sırayla belirlenir: `--katman` → paketin kendi `katman` alanı
→ `--denetleyen`'den türetme. `kaynak-tara.mjs` ve `tekin1998-tara.mjs`
ürettikleri pakete `katman: "kitap"` yazar, bu yüzden onları
uygularken bayrak gerekmez:

```bash
node engine/denetim-uygula.mjs docs/kaynak-tarama-paketi.json
# katman: kitap · denetleyen: makine  (otomatik)
```

Denetim ekranından gelen dışa aktarımda `katman` yoktur; varsayılan
`insan` olur — elle denetimin doğru karşılığı budur.

Korunan kayıtlar koşu sonunda listelenir:

```
KORUNDU: 1 kayıt — daha güvenilir katmandan geliyor, üzerine yazılmadı
  KT-D-16#3 (kitap > model)
```

Katmanı olmayan eski kayıtlar `model` sayılır; daha güvenilir bir paket
geldiğinde kendiliğinden yükselirler.
