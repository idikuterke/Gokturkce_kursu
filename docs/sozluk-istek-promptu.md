# Sözlük anlam isteği — NotebookLM / uzman için yönerge

İlk denemede sıfırdan sözlük istendi ve sonuç kullanılamadı: 100 kelimelik
listede **runik yazımların tamamı**, **atıfların %85'i** uydurmaydı
(`attestation` olarak verilen dizelerde kelime geçmiyordu).

Çözüm: dışarıdan yalnızca gerçekten eksik olan sorulur. Runik yazım ve atıf
bizde zaten makine denetiminden geçmiş durumda, hazır veriliyor.

## İstek

`docs/sozluk-anlam-bekleyenler.json` dosyasını ver ve şunu söyle:

> Ekteki JSON, Orhun yazıtlarından çıkarılmış ve doğrulanmış kelime
> listesidir. **`runic`, `transcription` ve `attestation` alanlarını
> DEĞİŞTİRME** — bunlar doğrulanmıştır.
>
> Yalnızca şu üç alanı doldur:
>
> - `meaning`: Türkçe anlam, kısa (en çok 6 kelime). Birden çok anlam varsa
>   virgülle ayır.
> - `category`: şunlardan biri — `yönetim`, `toplum`, `askeri`, `inanç`,
>   `doğa`, `akrabalık`, `zaman`, `sayı`, `eylem`, `nitelik`, `diğer`
> - `source`: anlamı aldığın eser ve sayfa (ör. `Tekin 2003, s. 304`).
>   **Kaynağı doğrulayamıyorsan `source` alanını `null` bırak ve `meaning`
>   sonuna `[teyit gerek]` yaz.** Uydurma kaynak, kaynaksızdan kötüdür.
>
> Emin olmadığın kelimeyi atlama, `meaning` alanına `null` yaz.
>
> Çıktı: aynı yapıda, aynı sırada JSON.

## Geldiğinde

```bash
node engine/sozluk-birlestir.mjs <gelen-dosya.json>
```

Betik `runic` / `transcription` / `attestation` alanlarının değişmediğini
denetler; değiştiyse reddeder.
