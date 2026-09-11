# AJAN BRIEF — Göktürkçe Yedigün Kursu (orkestrasyon + entegrasyon)

Bu belge, projeye **sıfırdan giren bir Claude Code ajanı** için yazıldı. İki rol var:
- **Orkestratör:** kullanıcıdan yeni kaynak alır, bu belgeyi okur, §6'daki "Entegrasyon Görev Şablonu"nu doldurup uygulayıcı ajana verir, sonucu **kabul ölçütleriyle** denetler.
- **Uygulayıcı:** şablondaki işi yapar; kapı yeşil + build temiz olmadan bitirmez.

Kullanıcı: İbrahim Bayram Bilir (eğitmen). Dil: Türkçe. Kısa, somut rapor ister; token bütçesine dikkat eder — **uzun dosyaları tamamen okuma, grep / sed -n ile hedefli oku.**

---

## 1. Proje nedir
4 haftalık ("Yedigün 1–4") Göktürkçe okuma-yazma kursu; **tek içerik kaynağı → üç çıktı**: baskı PDF (A4), projeksiyon slaytı (tek dosya HTML + PDF), paket kurs (zip, kendi hızında). Yüz yüze / canlı çevrim içi / paket üçü de aynı içerikten üretilir.

Terim **her yerde "Yedigün"** ("Yedice" değil, "hafta" değil).

## 2. Repo haritası (E:\Gokturkce_kursu — git repo)
```
content/            TEK İÇERİK KAYNAĞI (JSON). Buraya yazılan her şey üç çıktıya gider.
  yedigun-1..4.json   slayt+baskı ders içerikleri (30/23/24/25 slayt). Y4 = 12 sertifika sorusu + sinav alanı
  kitapcik.json, yapraklar.json, degerlendirme.json, irkbitig-foyu.json, ek-uniteler.json, tamga-albumu.json  baskı belgeleri
  tamgalar.json       tamga grupları: unluler, kutuplu, kutupsuz, ligatur, irkbitig, yenisey(7), yenisey-tam(31), kagit(37), ciftler
  sozluk.json         ALTIN SÖZLÜK: latin <-> runik (mantıksal sıra). 29 kelime. Kapı bunu zorlar.
  gorsel/*.jpg + KAYNAK.md   doğrulanmış görseller (7). ham/ git dışı.
schema/content.schema.json   blok şeması (Ajv 2020). Blok türleri: prose, bolum-ayraci, tamga-kart, tamga-pair, tamga-grid,
                             ornek-kelime, alistirma, quiz, metin-ref, gorsel, bilgi-karti. Her blokta targets ⊂ {baski, slayt} ZORUNLU.
engine/
  kapi.mjs          GÜVENLİK KAPISI — tek kopya. Şema, tamga ⊂ (kaynak ∪ tamgalar.json) ∧ Noto cmap, metin-ref çözümü,
                    targets, sertifika soru sayısı == 12, sözlük eşleşmesi, TERS SIRA taraması (teklif/broşür dâhil).
  render-baski.mjs  A4 HTML -> Edge headless PDF
  render-slayt.mjs  "Bengü Gece" koyu tema, base64 font, GKTracker (local/web), sonuç slaytı, KVKK notu
  build.mjs         --hedef baski|slayt, --sadece-html, --diff (regresyon), --belge <id>, --sonuc-url, --eposta
  paket.mjs         build/paket/ + build/Gokturkce_Paket_Kurs.zip
  sonuc-sunucu.mjs  node:http; POST /api/sonuc -> data/sonuclar.jsonl; GET /sonuclar?token=
  orhun_db_uret.mjs 05_Kaynak_DB/orhun-db-v1.json üretimi (turkbitig.com)
  migrasyon/        tek seferlik dönüşüm/düzeltme scriptleri (py + mjs). Örnek kalıp: duzeltme_2026_09_10.py
  gorsel/           comfy.mjs (ComfyUI 127.0.0.1:8188, flux1-dev-fp8), kazi.py (fonttan deterministik kazıma)
00_Kaynaklar/       ham kaynak metinler (txt/md), irk-bitig-db-v3.json (67 fal), fontlar/ (BabelStone Irk Bitig)
05_Kaynak_DB/       orhun-db-v1.json (214 dize: KT/BK/TY; mt küçük harf = düşen ünlü)
03_Tasarim/fontlar/ NotoSansOldTurkic-Regular.ttf (kapı cmap kaynağı)
04_PDF/             01..07b baskı çıktıları (70 sf)   build/slayt/, build/paket/, build/inceleme/  üretilen
Gokturkce_Kurs_Teklifi_Revize.md/.html/.pdf   vakıf teklifi — YALNIZ yüz yüze; kapı runik sırasını tarar
README.md           kurallar + komutlar
```

## 3. Komutlar
```
npm run kapi          # kapı — her değişiklikten sonra ilk bu
npm run build         # baskı PDF'ler (04_PDF)
npm run build:slayt   # slaytlar (build/slayt)
npm run paket         # hepsi + zip
node engine/build.mjs --hedef baski --belge yedigun-3 --sadece-html   # tek belge hızlı deneme
```
Kapı kırmızıysa **build çalışmaz**; kapıyı gevşetmek yasak — içeriği düzelt.

## 4. Değişmez kararlar (kullanıcı onaylı — tartışmaya açma)
1. İçerik yalnız `content/*.json`'a yazılır. Renderer'a içerik gömülmez; HTML/PDF elle düzenlenmez.
2. Runik metin **mantıksal sırada** (Unicode bidi=R; ilk ses ilk karakter). Görsel sıraya (sağdan sola diziliş) çevirme YOK. Kapı ters diziyi yakalar.
3. Sertifika sınavı: **12 soru, eşit puan, 60/100 eşik (8 doğru), %80 devam, 45 dk.** Şık dağılımı dengeli (3'er A/B/C/D). Bunu değiştiren hiçbir kaynak entegre edilmez; çelişki varsa kullanıcıya sor.
4. Terminoloji: **ş** için 𐱁 tek kutupsuz ş (Irk Bitig'de aynı işaret ince r) — 𐰿 (U+10C3F) ş değil, 'aş' hece damgasıdır: Orhun'da nadir, Yenisey varyantı U+10C40; yalnız tamgalar.json ligatur grubu + teklif cetvelinde gösterilir. **ŋ** = "damaksal geniz ünsüzü (ng); yumuşak g değildir". **Açık e (ä) U+10C02 / kapalı é (ė) U+10C05** yalnız Yenisey — kaynak `00_Kaynaklar/yenisey_acik_e_kapali_e.md`. Ünsüz üst simgeleri: ¹ kalın, ² ince.
5. Bilinçli yanlış örnekler `ornek-kelime.ornekler[].hatali` alanında verilir; kapı bunları muaf tutar. Başka yolla "yanlış örnek" gösterme.
6. `𐱈` (BAŞ) tamgalar.json ligatur grubunda (Tekin 2003 s. 23); fal 17 çift 𐰆 kalır (kitap doğrulaması bekliyor). "ete" doğru, "ede" yanlış.
7. Teklif metni yalnız yüz yüze içindir; paket/çevrim içi için kopyalanmaz.
8. KVKK: sonuç verisi kurs bitiminden 2 yıl sonra silinir — metin render-slayt.mjs'te; değiştirme.
9. Tema: koyu "Bengü Gece", turkuaz/mavi ince şeritler, akademik. Görsellerde diffusion çizimi rune YASAK; runeler fonttan (kazi.py) basılır, `gokturkce_verify_image` ile doğrulanır.
10. Commit mesajı Türkçe, sonunda `Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`.

## 5. Yeni kaynak entegrasyon akışı (orkestratör bunu izler)
1. **Kaynağı 00_Kaynaklar/ altına koy** (txt/md/json; PDF ise metnini txt olarak yanına çıkar). Dosyanın başına **provenans notu** (kimden / nereden / tarih) ekle.
2. **Sınıflandır:** kaynak neyi etkiliyor?
   - a) yeni tamga/ses bilgisi -> `content/tamgalar.json` (grup `kaynak` alanı zorunlu, cp Noto'da olmalı) + gerekirse `sozluk.json`
   - b) yeni kelime/okuma örneği -> ilgili `yedigun-N.json` (ornek-kelime / alistirma) + **sozluk.json'a ekle**
   - c) yeni metin (yazıt dizesi / fal) -> önce DB (orhun-db / irk-bitig-db), sonra `metin-ref` bloğu; DB dışı metin gömme
   - d) pedagojik/terminolojik düzeltme -> tüm belgelerde grep ile ara, hepsini düzelt (bir yerde düzeltip diğerini bırakma)
   - e) ekonomi/sözleşme/sertifika metni -> yalnız teklif (.md -> .html -> .pdf, üçü birden)
3. **Çelişki kontrolü:** kaynak, mevcut içerikle (özellikle §4) çelişiyorsa DUR, iki tarafı yan yana yaz, kullanıcıya sor. Sessizce birini seçme.
4. **Uygulama:** tercihen `engine/migrasyon/<tarih>_<konu>.py|mjs` scripti (tekrar üretilebilir); küçük değişiklikte doğrudan JSON edit.
5. **Doğrulama:** `npm run kapi` yeşil -> `npm run build` -> `npm run build:slayt` -> etkilenen çıktıyı aç (Edge headless ekran görüntüsü ya da PDF sayfa sayısı / metin kontrolü). Slayt taşması var mı bak (bir slayta 10 satırdan fazla tamga tablosu sığmaz — böl).
6. **Rapor:** hangi dosyalar, kaç blok, kapı çıktısı, sayfa/slayt sayıları, çözülmeyen sorular.

## 6. Entegrasyon Görev Şablonu (orkestratör doldurur, uygulayıcıya verir)
```
GÖREV: <bir cümle>
KAYNAK: 00_Kaynaklar/<dosya> — provenans: <kim / nereden / tarih>
ÖNCE OKU: AJAN_BRIEF.md §4, §5; README.md; ilgili content/<x>.json'un yalnız ilgili bölümü (grep ile)
DEĞİŞECEK DOSYALAR: content/... (liste) — engine/ DOKUNMA (istisna: <gerekçe>)
KURALLAR: mantıksal sıra; sozluk.json güncelle; targets doldur; 12/60/%80/45 sabit; hatali alanı; Yedigün terimi
ÇELİŞKİ VARSA: dur, raporla; sormadan ilerleme
KABUL ÖLÇÜTÜ: npm run kapi GEÇTİ; build + build:slayt hatasız; <belge> sayfa/slayt sayısı ~ <n>; şu grep boş: <ters dizi / eski terim>
RAPOR FORMATI: değişen dosya listesi + kapı satırı + açık sorular (en fazla 10 satır)
```

## 7. Bilinen tuzaklar
- Ajv: `ajv/dist/2020.js` kullan. CRLF/LF farkı regresyonu bozar (`--diff`). Bölüm id ASCII slug olmalı ("ü" şemayı kırar).
- PowerShell/bash heredoc kaçış sorunları: JS/JSON yamalarını dosyaya yaz (Write aracı), inline tek satır komutla deneme.
- Önizleme paneli `data:` URL ile açar -> localStorage/fetch yok; slayt testini `.claude/launch.json` (python http.server 8765) ile yap.
- 04_PDF dosyası bir görüntüleyicide açıksa EBUSY; kapatıp tekrar dene.
- Verifier ASCII ":" gibi işaretleri glif sayar; kelimeleri ayrı doğrula.
- Kaynak txt'lerde bilinen hatalar var (`göktürkçe sayılar.txt` z=𐰯; müfredat adgırın). Kaynak dosyalar provenans için olduğu gibi kalır, düzeltme content/ içinde yapılır.

## 8. Açık kararlar (kullanıcıya ait — ajan kendi kararını vermez)
A3 iptal politikası · A4 kapora metni · C8 sertifika sınırlama cümlesi (henüz eklenmedi) · B6 formatif dengesi (58/42, opsiyonel) · sonuc-sunucu barındırma · fal 17 kitap doğrulaması · Tekin 1993 atıf sayfası.
