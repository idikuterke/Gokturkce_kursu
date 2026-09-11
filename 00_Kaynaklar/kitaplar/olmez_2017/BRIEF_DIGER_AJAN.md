# BRIEF — Mehmet Ölmez (2017) Dijitalleştirme: İkinci Ajan / Harici Ajanlar İçin Uygulama Kılavuzu

Bu belge, **Mehmet Ölmez, Köktürkçe ve Eski Uygurca Dersleri (2017, 566 sf)** kitabının kalan sayfalarının (**s060 – s565**, toplam 506 sayfa) diğer ajanlar tarafından yürütülmesi için hazırlanmıştır. İlk 60 sayfa (`s000` – `s059`) Antigravity tarafından tamamlanmaktadır.

---

## 1. Temel Bilgiler & Kaynaklar
- **Kaynak PDF:** `C:/Users/pc/Downloads/Göktürkçe_PDF_Koleksiyonu/Göktürkçe Eğitimi/7374-Kokturkce_Ve_Eski_Uyqurca_Dersleri-Mehmed_Olmez-2017-566s.pdf`
- **PDF Sayfa Sayısı:** 566 sayfa (0 tabanlı indeks: `s000` – `s565`).
- **Nitelik:** Tarama PDF, gömülü metin katmanı YOKTUR.
- **Yöntem:** Sayfa → PNG (170 dpi, PyMuPDF) → Görsel Okuma → Markdown (`sNNN.md`).
- **Çıktı Dizini:** `E:\Gokturkce_kursu\00_Kaynaklar\kitaplar\olmez_2017\`
- **Geçici PNG Dizini (REPO DIŞI):** `C:\Users\pc\Downloads\olmez_png\` (Kesinlikle repoya PNG dosyası koyulmaz).

---

## 2. Kalan Görevin 10 Partiye Bölünüşü (s060 – s565, 506 Sayfa)

Aşağıdaki 10 parti, kitabın konu bütünlükleri ve sayfa hacimleri gözetilerek dengeli biçimde oluşturulmuştur:

| Parti No | PDF İndeks Aralığı | Sayfa Sayısı | Basılı Sayfa No (Yaklaşık) | İçerik ve Konu Başlıkları |
| :--- | :--- | :---: | :---: | :--- |
| **Parti 1** | `s060` – `s110` | 51 sf | s. 62 – s. 112 | **Köktürkçe Gramer Sonu & Yazıtlar (Giriş):** Fiil Çekimi, Yapım Ekleri, Kaynakça, Kül Tegin Yazıtı tam metni ve Bilge Kağan Yazıtı girişi. |
| **Parti 2** | `s111` – `s160` | 50 sf | s. 113 – s. 162 | **Büyük Orhon Yazıtları:** Bilge Kağan devamı, Tunyukuk Yazıtı, Moyun Çor (Şine Us) Yazıtı. |
| **Parti 3** | `s161` – `s210` | 50 sf | s. 163 – s. 212 | **Runik Ekler & Uygurca Giriş:** Runik levha örnekleri (Yenisey, Altay, Talas), Eski Uygurcaya Giriş, Soğd/Uygur/Mani/Tibet/Süryani alfabeleri ve Uygur edebiyatı girişi. |
| **Parti 4** | `s211` – `s260` | 50 sf | s. 213 – s. 262 | **Uygur Nesri, Şiiri ve Grameri:** Manihaist/Hristiyan nesir, Budist Uygur şiiri, Uygurca Kısa Gramer, İsimden İsim ve Fiilden İsim yapım ekleri. |
| **Parti 5** | `s261` – `s310` | 50 sf | s. 263 – s. 312 | **Uygur Gramer Sonu & Altun Yaruk:** İsimden Fiil, Fiilden Fiil ekleri, Uygurca kaynaklar, Altun Yaruk Sudur metni ve transkripsiyonu. |
| **Parti 6** | `s311` – `s360` | 50 sf | s. 313 – s. 362 | **Klasik Uygur Metinleri:** Altun Yaruk devamı, *Daśakarmapathāvadānamālā* ve *Hvastuanift* (Manihaist tövbe duası). |
| **Parti 7** | `s361` – `s410` | 50 sf | s. 363 – s. 412 | **Hukuk, Fal & Hikâyeler:** Uygur Hukuk Belgeleri, Runik harfli Uygur metinleri (*Irk Bitig*), Xuanzang Biyografisi, *Maitrisimit*, *Kalyanamkara ve Papamkara*, *Pañcatantra*, Bögü Kağan metni. |
| **Parti 8** | `s411` – `s460` | 50 sf | s. 413 – s. 462 | **Felsefe, Şiir & Alıştırmalar I:** Abhidharma parçaları, Hasat kutlaması, Budist şiirler, Kısaltmalar/Kaynaklar ve Uygurca örnek alıştırma metinleri (1. kısım). |
| **Parti 9** | `s461` – `s510` | 50 sf | s. 463 – s. 512 | **Alıştırmalar II & Sözlük Girişi:** Uygurca alıştırma metinleri (2. kısım), Resim kaynakları, Köktürkçe ve Eski Uygurca Sözlük (A – K harfleri arası). |
| **Parti 10**| `s511` – `s565` | 55 sf | s. 513 – s. 566 | **Sözlük Sonu & Kitap Tamamlama:** Köktürkçe ve Eski Uygurca Sözlük (K harfinden Z harfine kadar, s565 kitabın son sayfası). |

---

## 3. Sayfa Render Komutu (PyMuPDF / Python)

İlgili parti için sayfaları diske PNG olarak dökmek için terminalden aşağıdaki komutu kullanın (Örn: Parti 1 için 60'tan 111'e):

```bash
python -c "import fitz, os; doc = fitz.open(r'C:/Users/pc/Downloads/Göktürkçe_PDF_Koleksiyonu/Göktürkçe Eğitimi/7374-Kokturkce_Ve_Eski_Uyqurca_Dersleri-Mehmed_Olmez-2017-566s.pdf'); out_dir = r'C:/Users/pc/Downloads/olmez_png'; os.makedirs(out_dir, exist_ok=True); mat = fitz.Matrix(170/72, 170/72); [doc.load_page(i).get_pixmap(matrix=mat).save(os.path.join(out_dir, f's{i:03d}.png')) for i in range(BASLANGIC, BITIS_HARIC)]"
```

---

## 4. Transkripsiyon ve Biçimlendirme Kuralları

1. **Dosya Adı & Başlık Satırı:**
   - Dosya yolu: `00_Kaynaklar/kitaplar/olmez_2017/sNNN.md` (NNN = 3 haneli 0 tabanlı PDF indeksi).
   - İlk satır zorunlu format:  
     `# s. NNN — <sayfa üstbilgisi> (basılı sayfa numarası X)`  
     *(Genel bağıntı: Basılı sayfa no = PDF indeksi + 2)*
2. **Yazım ve Tipografi:**
   - Paragraf/bölüm numaraları: **kalın** (`**12.**`).
   - Alt başlıklar: Markdown başlık seviyeleri (`##`, `###`, `####`).
   - Örnek cümleler: Madde imi (`- `).
   - Transkripsiyon kelimeleri: *italik* (`*kelime*`).
   - Harf çevirisi (transliterasyon): `/BÜYÜK HARF/` aynen korunur.
3. **Diyakritikler:**
   - Eksiksiz aktarılır: `ā ē ī ō ū`, `ä`, `ŋ`, `ñ`, `(ı)/(i)` (yazılmamış ünlü), `¹ ²`, `[..]` onarım, `<..>` ekleme.
4. **Yazıt Kısaltmaları:**
   - KT G 2, BK D 33, T 7, IB 8, ŞU, Tar., MÇ vb. aynen yazılır.
5. **Runik Glifler:**
   - Metinde runik harf varsa Unicode Old Turkic (`U+10C00` – `U+10C48`) aralığından MANTIKSAL sırada (ilk okunan ses ilk karakter; sağdan sola ters dizilmez) yazılır.
   - Glif tam okunamıyorsa veya net değilse uydurulmaz: `(glif)` yazılıp yanına harf çevirisi eklenir.
6. **Uygurca Metinler (Özellikle 2. Bölüm):**
   - Uygur harfli metinlerde Uygur harflerini çizmeye/taklit etmeye çalışmayın. Transkripsiyonunu yazın, harfli satır için `(Uygur yazısı)` notu düşün.
7. **Okunamayan Kısımlar:**
   - Kesinlikle uydurma yapılmaz; `[?]` konur.
8. **Boş / Görsel Sayfalar:**
   - `# s. NNN — (boş / levha: açıklama)` formatında yazılır.

---

## 5. Kesin Kısıtlar ve Çalışma İlkeleri

- **Var olan dosyanın üzerine asla yazma:** Çalışmaya başlamadan önce hedef dosyanın (`sNNN.md`) var olup olmadığını kontrol et, varsa atla.
- **Dizin Sınırı:** Sadece `00_Kaynaklar/kitaplar/olmez_2017/` dizinine yaz. Reponun başka hiçbir dosyasına (`content/`, `engine/`, `04_PDF/`, `tekin_otg_2003/`, kök `*.md`) DOKUNMA.
- **Git & Build Kısıtı:** Kesinlikle `git commit` yapma, `npm` komutu çalıştırma.
- **Tek Dosya Üretme:** `olmez_2017.md` tekil birleştirilmiş dosyasını ÜRETME (bu işlemi tüm sayfalar tamamlanınca orkestratör yapacaktır).
- **Raporlama:** Her partiyi tamamladığında `00_Kaynaklar/kitaplar/olmez_2017/ILERLEME.md` dosyasını güncelle. Kaç sayfa bittiğini, dikkat çeken imla/çeviri notlarını kaydet.
