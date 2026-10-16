# Ses kaydı hattı

Konuşma sentezi Göktürkçe için yetersiz: Türkçe sesle okunduğu için tamga
sesleri ve kadim sözcükler doğru çıkmıyor. Kalıcı çözüm gerçek kayıt.

Hat **kaydın varlığına göre** çalışır: kayıt varsa onu çalar, yoksa sessizce
sentezlemeye düşer. Bu yüzden hepsinin bitmesini beklemek gerekmez —
bıraktığın her dosya anında devreye girer, kod değişikliği istemez.

## Nereye bırakılacak

```
public/ses/tamga/10C09.webm     ← tek tamga (kod noktası, büyük harf hex)
public/ses/kelime/bodun.webm    ← kelime (sadeleştirilmiş transkripsiyon)
```

Dosya adlarını elle türetme — `docs/ses-kayit-listesi.json` içindeki
`anahtar` alanını kullan. Uygulamanın aradığı ad birebir odur.

## Biçim

| | |
|---|---|
| Birincil | **webm / opus**, 48 kHz mono, ~64 kbps |
| Yedek | mp3 (webm desteklemeyen tarayıcılar için) |
| Süre | tamga ≤ 1 sn, kelime ≤ 2 sn |
| Baş/son sessizlik | ≤ 100 ms — kırpılmış olmalı |
| Seviye | tepe ≈ −3 dBFS, gürültü tabanı ≤ −50 dBFS |

Uzun sessizlik en sık yapılan hata: arayüzde düğmeye basıldığında ses
hemen başlamalı, yoksa gecikme hissi verir.

## Ne okunacak

`docs/ses-kayit-listesi.json` üç öncelikte sıralı:

| Öncelik | İçerik | Adet | Neden önce |
|---|---|---|---|
| 1 | Tamgalar | 38 | Her alıştırmada duyuluyor |
| 2 | Sözlük kelimeleri | 84 | Sözlük ekranında doğrudan dinleniyor |
| 3 | Korpusun sık kelimeleri | 193 | Alıştırmalarda sürekli çıkıyor |

Yalnızca 1. önceliği (38 kayıt) bitirmek bile uygulamadaki seslendirmenin
büyük kısmını insan sesine çevirir.

**Tamga kaydında:** harf adı değil **sesi** okunmalı. `𐰉` için "kalın be"
değil, **"ba"**. Listedeki `okunus` alanı ne okunacağını gösterir.

## Listeyi tazeleme

```bash
node engine/ses-listesi.mjs        # sıklık eşiği varsayılan 5
node engine/ses-listesi.mjs 3      # daha geniş liste
```

Betik hangi kayıtların zaten var olduğunu da işaretler (`kayitli` alanı),
böylece kaldığın yerden devam edebilirsin.

## ComfyUI hattı

`idikuterke/gokturk-vision` deposunda toplu üretim ve QC kapısı altyapısı
var. Ses için de aynı desen uygulanabilir: üret → kırp/normalize et →
kapıdan geçir (süre, tepe seviye, sessizlik) → `public/ses/` altına yaz.
Kapı ölçütleri yukarıdaki tablodur.
