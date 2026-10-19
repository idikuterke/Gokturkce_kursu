# Yayın

Uygulama herkese açık: <https://gokturkce-ogrenek.web.app/>
(aynı içerik `gokturkce-ogrenek.firebaseapp.com` üzerinden de gelir;
canonical etiketi `web.app` adresini gösteriyor, ikisi tek sayfa sayılır).

## Yayın durumu — 19.10.2026

| Katman | Durum |
|---|---|
| **Arama motorları** | Açık. `noindex` metası, `X-Robots-Tag` başlığı ve engelleyen `robots.txt` kaldırıldı; `public/sitemap.xml` eklendi. |
| **Erişim kodu** | Kapalı. `VITE_DEMO_KODU` boş olduğu sürece kapı hiç çıkmaz. Kapalı bir deneme gerekirse değişkeni doldurup derlemek yeter — kod `src/components/ErisimKapisi.tsx` içinde duruyor. |
| **Denetim ekranı** | Üretim paketinde **yok**. Yalnız `VITE_DENETIM=acik` ile derlenirse girer. Canlı pakette `#denetim` arandı, bulunamadı. |
| **Firestore** | `users/{uid}` yalnız kendi sahibine açık; diğer her yol `allow read, write: if false`. |
| **Paylaşım kartı** | `og:*` ve `twitter:*` etiketleri, 1344×768 `gorsel/tengri-tas.jpg` görseli. |
| **Yapısal veri** | `Course` şeması (sağlayıcı: ONOZ Labs). |

## Yayınlama

```bash
npm run build        # tsc --noEmit && vite build
npm run demo:canli   # derler ve Firebase Hosting'e gönderir
```

`.env.local` **boş kalmalı**: içinde `VITE_DEMO_KODU` varsa siteye kapı
gelir, `VITE_DENETIM=acik` varsa denetim ekranı pakete girer. İkisi de
herkese açık yayında istenmez.

## Kapalı bir deneme sürümü gerekirse

`.env.local`:

```
VITE_DEMO_KODU=sececegin-kod
VITE_DENETIM=acik
```

```bash
npm run demo:yayinla   # 30 günlük preview channel
```

Gönderilecek bağlantı `https://<kanal-adresi>/#kod=sececegin-kod` — kod
elle yazılmaz.

### Kapının sınırı

Erişim kodu bir **görünürlük** kapısıdır, **güvenlik** duvarı değildir.
Uygulama statik bir paket: dersler, sözlük ve yazıt verisi tarayıcıya inen
JS dosyasının içinde. Kodu bilmeyen biri arayüzü göremez, ama paketi
indirip içindeki veriyi okuyabilir. İçeriğin gerçekten korunması gerekirse
veri sunucu tarafına taşınıp istek başına yetkilendirilmeli — abonelik
altyapısıyla birlikte yapılacak iş.

## Kendi alan adına taşımak

`gokturkce.onozlabs.com` → Firebase Console > Hosting > Add custom domain,
verilen DNS kaydını sağlayıcıya ekle, sertifika kendiliğinden çıkar.
Taşındıktan sonra **dört yerde** adres güncellenir:

1. `index.html` → `canonical`, `og:url`, `og:image`, `twitter:image`
2. `public/robots.txt` → `Sitemap:` satırı
3. `public/sitemap.xml` → `<loc>`
4. `firebase.json` → `auth.providers.googleSignIn.authorizedRedirectUris`

## Ücretsizlik beyanı

`index.html` içindeki `Course` şemasında `isAccessibleForFree: true` var —
bugün doğru. Abonelik açıldığında bu alan `false` yapılmalı ve `offers`
eklenmeli; yoksa Google'a yanlış beyan verilir.
