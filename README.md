# Göktürkçe Okuma-Yazma Öğreneği — Üretim Hattı

Tek içerik kaynağı → tek JS motor → üç teslim biçimi (yüz yüze · online canlı · online paket).

```
content/*.json          İÇERİK (eğitmen düzenler)          schema/content.schema.json'a uyar
content/tamgalar.json   47 tamga envanteri (kod noktası + ders değeri)
00_Kaynaklar/irk-bitig-db-v3.json   67 fal          ┐ metin-ref blokları buradan çözülür;
05_Kaynak_DB/orhun-db-v1.json       214 dize (KT/BK/TY) ┘ runik metin içerik dosyasına elle yazılmaz
engine/kapi.mjs         GÜVENLİK KAPISI (tek kopya): şema + tamga (kaynak ∧ Noto cmap) + metin-ref + targets
engine/render-baski.mjs A4 baskı renderer (03_Tasarim/gokturk-baski.css)
engine/render-slayt.mjs Slayt renderer (koyu 'Bengü Gece' teması, gömülü font, tek dosya) → build/slayt/<id>.html + .pdf
engine/build.mjs        build → build/baski/html → Edge headless → 04_PDF/
```

## Komutlar

```bash
npm run kapi            # yalnız denetim
npm run build           # baskı: 6 PDF → 04_PDF/
npm run build:slayt     # tur=yedigun belgeler → build/slayt/*.html (+ .pdf, her slayt bir 16:9 sayfa)
node engine/build.mjs --sadece-html --diff   # HTML üret, eski Python çıktısıyla karşılaştır
node engine/build.mjs --belge kitapcik       # tek belge
npm run orhun-db        # 05_Kaynak_DB/ham/turkbitig/*.html → orhun-db-v1.json
```

Kapıdan geçmeyen içerik üretilmez. Hata mesajı hangi belge › bölüm › blok olduğunu söyler.

## Kurallar

- Runik metin **yalnız** kaynaklardan gelir. `metin-ref` DB'ye işaret eder; `tamga-grid` / `tamga-pair` kod noktasından (`cp`) çizer. Prose içine elle tamga yazılabilir ama kapı onu da kaynak kümesine karşı denetler.
- Her blokta `targets` zorunlu: `["baski"]`, `["slayt"]` veya ikisi.
- Sertifika sınavı: 12 soru, eşit puan, 60/100 (8 doğru), %80 devam — şemada sabit.
- Terim: **Yedigün** (hafta). Kaynak dosyalarda (00_Kaynaklar) eski "Yedice" korunur; onlar provenance.

## Emekli

`03_Tasarim/build.py`, `uret2.py`, `icerik_*.py` — 10.09.2026'da JSON'a taşındı, artık çalıştırılmaz.
`03_Tasarim/gokturk-baski.css` ve `03_Tasarim/fontlar/` hâlâ kullanılıyor. Eski PDF'ler: `04_PDF/_eski_python_hatti/`.
Göç betikleri: `engine/migrasyon/` (tek seferlik).
