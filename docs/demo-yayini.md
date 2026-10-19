# Kapalı tanıtım sürümünü yayına alma

Amaç: uygulamayı telefonda açıp gösterebilmek, ama herkese açık olmaması.

## Ne kurdum

| Katman | Ne yapıyor |
|---|---|
| **Erişim kodu** | Uygulama açılmadan önce kod sorar. Kod `VITE_DEMO_KODU` ile derlemeye gömülür. Bağlantıya `#kod=XXXX` eklenirse kendiliğinden geçer — hocaya tek bağlantı göndermek yeter. |
| **noindex** | `index.html` meta etiketi + `public/robots.txt` + Hosting başlığı `X-Robots-Tag`. Google dizine almaz. |
| **Gizli adres** | Firebase Hosting *preview channel*: tahmin edilemez bir alt alan adı, 30 günde kendiliğinden kapanır. |
| **Admin ekranı** | Denetim ekranı artık üretimde de kullanılabilir, ama yalnız `VITE_DENETIM=acik` ile derlenirse. Yayındaki uygulamada adresin sonuna `#denetim` yazınca açılır. Herkese açık sürümü bu değişken **olmadan** derlersin, ekran pakete hiç girmez. |

## Açıkça söylenmesi gereken sınır

Erişim kodu bir **görünürlük** kapısıdır, **güvenlik** duvarı değildir.
Uygulama statik bir paket: dersler, sözlük ve yazıt verisi tarayıcıya inen
JS dosyasının içinde. Kodu bilmeyen biri arayüzü göremez, ama paketi
indirip içindeki veriyi okuyabilir.

Demo için bu yeterli. İçeriğin gerçekten korunması gerekirse veri sunucu
tarafına taşınıp istek başına yetkilendirilmeli — bu ayrı ve büyük bir iş,
abonelik altyapısıyla birlikte yapılması mantıklı.

## Yayınlama

Bir kerelik hazırlık:

```bash
firebase login          # tarayıcı açılır, Google hesabınla gir
```

`.env.local` dosyasına (gitignore'da, depoya girmez):

```
VITE_DEMO_KODU=sececegin-kod
VITE_DENETIM=acik
```

Sonra:

```bash
npm run demo:yayinla
```

Çıktıdaki `Channel URL` satırı tanıtım adresin. Hocaya göndereceğin
bağlantı:

```
https://<kanal-adresi>/#kod=sececegin-kod
```

Bu bağlantıyı açan kişi kod yazmak zorunda kalmaz.

## Kendi siten üzerinden göstermek

İki yol var:

1. **Alt alan adı** (önerilen): `gokturkce.siteniz.com` → Firebase Console
   > Hosting > Add custom domain. Verilen DNS kaydını alan adı
   sağlayıcına eklersin, sertifika kendiliğinden çıkar. Preview channel
   değil, canlı site olur; `npm run demo:canli` ile yayınlanır.
2. **Sitende bağlantı**: siteye "Tanıtım (kapalı)" diye bir düğme koyup
   preview channel adresine yönlendirmek. Hiçbir DNS işi gerektirmez.

Bugünkü demo için 2 yeterli; kurs açılacağı zaman 1'e geçersin.

## Herkese açarken yapılacaklar

1. `index.html`'deki `noindex` meta etiketini sil.
2. `public/robots.txt`'yi sil.
3. `firebase.json` > `hosting.headers` içindeki `X-Robots-Tag` bloğunu sil.
4. `.env.local`'dan `VITE_DEMO_KODU` ve `VITE_DENETIM` satırlarını kaldır.
5. `npm run demo:canli`

Bu beş adım `docs/demo-yayini.md`'de dursun diye yazıldı; unutulması kolay.
