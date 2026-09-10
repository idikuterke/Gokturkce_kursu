# Göktürkçe Okuma-Yazma Öğreneği — Üretim Hattı

Tek içerik kaynağı → tek JS motor → üç teslim biçimi (yüz yüze · online canlı · online paket).

```
content/*.json          İÇERİK (eğitmen düzenler)          schema/content.schema.json'a uyar
content/tamgalar.json   47 tamga envanteri (kod noktası + ders değeri)
00_Kaynaklar/irk-bitig-db-v3.json   67 fal          ┐ metin-ref blokları buradan çözülür;
05_Kaynak_DB/orhun-db-v1.json       214 dize (KT/BK/TY) ┘ runik metin içerik dosyasına elle yazılmaz
engine/kapi.mjs         GÜVENLİK KAPISI (tek kopya): şema + tamga (kaynak ∧ Noto cmap) + metin-ref + targets + ALTIN SÖZLÜK (content/sozluk.json: latin↔runik eşleşmesi, ters-sıra taraması — teklif/broşür dâhil) + sınav soru sayısı
engine/render-baski.mjs A4 baskı renderer (03_Tasarim/gokturk-baski.css)
engine/render-slayt.mjs Slayt renderer (koyu 'Bengü Gece' teması, gömülü font, tek dosya) → build/slayt/<id>.html + .pdf
engine/build.mjs        build → build/baski/html → Edge headless → 04_PDF/
```

## Komutlar

```bash
npm run kapi            # yalnız denetim
npm run build           # baskı: 9 PDF → 04_PDF/ (6 belge + 07 sınav kâğıdı + 07b cevap anahtarı + 08 A6 cüzdan kartı; sınav kaynağı content/yedigun-4.json)
npm run build:slayt     # tur=yedigun belgeler → build/slayt/*.html (+ .pdf, her slayt bir 16:9 sayfa)
node engine/build.mjs --sadece-html --diff   # HTML üret, eski Python çıktısıyla karşılaştır
node engine/build.mjs --belge kitapcik       # tek belge
npm run paket           # baskı + slayt + build/paket/ (index.html, 4 modül, pdf/) + build/Gokturkce_Paket_Kurs.zip
npm run orhun-db        # 05_Kaynak_DB/ham/turkbitig/*.html → orhun-db-v1.json
```

Kapıdan geçmeyen içerik üretilmez. Hata mesajı hangi belge › bölüm › blok olduğunu söyler.

## İçerik envanteri
- `content/cuzdan-karti.json` — A6 cüzdan kontrol kartı (ön: 5 kural, arka: tamga tablosu). Üretici: `python engine/migrasyon/cuzdan_karti.py` (tamgalar.json + sozluk.json türevi). Yeni ajan/orkestrasyon için: `AJAN_BRIEF.md`

- `content/yedigun-1..4.json` — 4 Yedigün slayt içeriği (95 slayt); Yedigün 4 = atölye + sayılar + 12 soruluk sertifika sınavı
- `content/kitapcik|yapraklar|tamga-albumu|irkbitig-foyu|ek-uniteler|degerlendirme.json` — baskı seti (Python hattından göç)
- `content/gorsel/` — doğrulanmış görseller + `KAYNAK.md` provenance
- `content/tamgalar.json` grupları: unluler · kutuplu · kutupsuz · ligatur · irkbitig · yenisey (7, metinlerde geçen) · **yenisey-tam** (31, kaynak: Unicode adları) · **kagit** (37, kaynak: BabelStone Irk Bitig fontu). `tamga-grid` `gorunum: karsilastirma` taş / Yenisey / kâğıt biçimlerini yan yana çizer (`sutunlar` ile seçilir). Metin kaynaklarında geçmeyen tamga içeren grup `kaynak` bildirmek zorundadır (kapı denetler).

## Paket kurs katmanı

- `engine/paket.mjs` → `build/paket/` : `index.html` (kurs ana sayfası, modül durumu), `yedigun-1..4.html`, `pdf/` (öğrenci PDF'leri), `BENIOKU.txt`; zip'lenir.
- **GKTracker** (slayt HTML içinde): `init · cevap · slayt · setScore · complete · durum · sifirla`. Mod `none` = localStorage. `scorm12` / `xapi` arayüzde yer tutucu — alıcı kurum LMS isteyince yazılır (~150 satır).
- Sertifika sınavı olan belgede (`sinav` alanı) son slayt otomatik **sonuç ekranı**: cevaplanan / doğru / puan, GEÇTİ–KALDI (eşik 60), yanlış konular, sıfırlama.
- Eğitmen kılavuzu ve cevap anahtarı pakete girmez.

### Sonuçların eğitmene ulaşması (tracker web modu)

1. Sunucu: `SONUC_TOKEN=<gizli-parola> node engine/sonuc-sunucu.mjs` (PORT varsayılan 8787). Sıfır bağımlılık; `data/sonuclar.jsonl`'e yazar.
   Pano: `http://<host>/sonuclar?token=<parola>` · CSV: `/sonuclar.csv?token=…` · sağlık: `/api/saglik`.
   Barındırma: Render/Railway'de aynı komut (`PORT` otomatik). **Ücretsiz Render diski kalıcı değildir** — `SONUC_DIR`'i kalıcı diske bağlayın ya da kendi VPS'inizde çalıştırın.
2. Slaytları web moduyla derleyin: `node engine/build.mjs --hedef slayt --sonuc-url https://<host>/api/sonuc --eposta <eğitmen>` (veya `GK_SONUC_URL`, `GK_EPOSTA` ortam değişkenleri), sonra `node engine/paket.mjs`.
3. Kursiyer sonuç ekranında adını yazar → **Sonucu eğitmene gönder**. Ağ yoksa kuyruğa alınır, sonraki açılışta otomatik yeniden denenir. `--eposta` verildiyse **E-posta ile gönder** yedeği (mailto, gövde hazır) da görünür.
   Kayıt: ad, e-posta, puan, doğru/soru, karar, 12 cevap, cihaz kimliği, sürüm. Gelen her alan sunucuda kırpılır/doğrulanır.

## Kurallar

- Runik metin **yalnız** kaynaklardan gelir. `metin-ref` DB'ye işaret eder; `tamga-grid` / `tamga-pair` kod noktasından (`cp`) çizer. Prose içine elle tamga yazılabilir ama kapı onu da kaynak kümesine karşı denetler.
- Runik diziler **mantıksal sırada** (Unicode bidi=R; görüntüleyici sağa-sola çevirir). Görsel sırada yazılmış dizi = kapı hatası. `content/sozluk.json` altın sözlüktür; yeni örnek kelime eklerken sözlüğe de ekle.
- Sertifika sınavı doğru şıkları dengeli dağıtılır (A/B/C/D ≈ 3'er); çeldiriciler gerçek öğrenci hatası olmalı, "kâtip hatası" türü boş şık yok.
- Her blokta `targets` zorunlu: `["baski"]`, `["slayt"]` veya ikisi.
- Sertifika sınavı: 12 soru, eşit puan, 60/100 (8 doğru), %80 devam — şemada sabit.
- Terim: **Yedigün** (hafta). Kaynak dosyalarda (00_Kaynaklar) eski "Yedice" korunur; onlar provenance.

## Emekli

`03_Tasarim/build.py`, `uret2.py`, `icerik_*.py` — 10.09.2026'da JSON'a taşındı, artık çalıştırılmaz.
`03_Tasarim/gokturk-baski.css` ve `03_Tasarim/fontlar/` hâlâ kullanılıyor. Eski PDF'ler: `04_PDF/_eski_python_hatti/`.
Göç betikleri: `engine/migrasyon/` (tek seferlik).
