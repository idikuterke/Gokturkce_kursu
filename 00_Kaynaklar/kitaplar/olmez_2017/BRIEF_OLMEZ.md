# BRIEF — Mehmet Ölmez, Köktürkçe ve Eski Uygurca Dersleri (2017, 566 sf) dijitalleştirme
Orkestratör: Claude Code (E:\Gokturkce_kursu). Bu görev ikinci ajana verilir. Kurallar kısa ve kesindir.

## Kaynak
C:/Users/pc/Downloads/Göktürkçe_PDF_Koleksiyonu/Göktürkçe Eğitimi/7374-Kokturkce_Ve_Eski_Uyqurca_Dersleri-Mehmed_Olmez-2017-566s.pdf
Tarama; metin katmanı YOK. Yöntem: sayfa → PNG (170 dpi, PyMuPDF kurulu) → görsel okuma → Markdown.

## Çıktı
- Yalnız bu klasöre yaz: 00_Kaynaklar/kitaplar/olmez_2017/
- Sayfa dosyası: sNNN.md (NNN = 0 tabanlı PDF indeksi, 3 hane). Başlık satırı: "# s. NNN — <sayfa üstbilgisi> (basılı sayfa numarası X)" — basılı numara PDF indeksinden farklıysa MUTLAKA yaz.
- PNG'ler REPO DIŞINA (örn. C:/Users/pc/Downloads/olmez_png/). Repoya PNG koyma.
- 00_PROVENANS.md: kaynak yolu, yöntem, tarih, okuyucu.
- ILERLEME.md: her partiden sonra güncelle — kaç sayfa bitti, eksik idx listesi, [?] sayfalar, dikkat notları. Kesintide kaldığın yer buradan okunur.

## Biçim (Tekin ile aynı — örnek: 00_Kaynaklar/kitaplar/tekin_otg_2003/s052.md)
- Paragraf/ders no kalın **12.**; alt başlık ##; örnekler "- "; transkripsiyon *italik*; harf çevirisi /BÜYÜK/ aynen.
- Diyakritik eksiksiz: ā ē ī ō ū, ä, ŋ, ñ, (ı)/(i) yazılmamış ünlü, ¹ ², [..] onarım, <..> ekleme.
- Yazıt kısaltmaları ve satır no aynen (KT G 2, BK D 33, T 7, IB 8, ŞU, Tar., MÇ …).
- RUNİK glif varsa: Unicode Old Turkic (U+10C00–10C48) ile MANTIKSAL sırada yaz (ilk ses ilk karakter; sağdan-sola görsel diziliş YOK). Emin değilsen glifi yazma, "(glif)" + harf çevirisi ver.
- Okunamayan: [?]. Uydurma yok. Dipnot sayfa altında "---" sonrası.
- Boş/levha sayfası: "# s. NNN — (boş / levha: açıklama)".
- Uygurca (Uygur harfli) bölümler: transkripsiyonu yaz, Uygur harflerini yazmaya çalışma, "(Uygur yazısı)" de.

## Süreç
- Partiler 30 sayfa; bir seferde en fazla 3 görüntü aç. Her 5 sayfada diske yaz.
- Var olan sNNN.md'yi ATLA, üzerine yazma.
- Bitince: tek dosya olmez_2017.md üretme — orkestratör üretir (sayfa etiketleri için).
- commit YAPMA. Repo'nun başka hiçbir dosyasına (content/, engine/, 04_PDF/, build/, tekin_otg_2003/, *.md kök) DOKUNMA; npm komutu çalıştırma.
- Rapor (ILERLEME.md'ye): kurs için önemli görünen imla kuralları, kelime tanıkları, Tekin'den farklı okuyuşlar (kısa madde).

## BÖLÜNME (2026-09-11, kullanıcı kararı)
- Antigravity: idx 000–282 (ilk yarı). 282'de dur; ILERLEME.md'ye "ilk yarı tamam" yaz.
- İkinci yarı idx 283–565: başka ajan (Claude Code uygulayıcısı) — daha sonra, acele yok. Aynı kurallar, aynı klasör, aynı biçim.
- Öncelik: Köktürkçe bölümleri; Uygurca bölümler sonraya (ileride Uygurca kursu için gerekecek).
