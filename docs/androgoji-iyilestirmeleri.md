# Androgojik iyileştirmeler — uygulama raporu

**Tarih:** 28.10.2026 · **Dal:** `claude/proje-guncelleme-aiwfd3`

Dış bir inceleme, uygulamayı yetişkin eğitimi ölçütlerine (Knowles,
UDL 3.0, ISO 29993) göre değerlendirdi ve üç hata ile sekiz öneri
bildirdi. Hepsi ele alındı. Bu belge ne yapıldığını, nelerin
yapılmadığını ve nedenini kayda geçiriyor.

## Önce düzeltilen üç hata

| Kusur | Durum |
|---|---|
| PDF bağlantılarının 9'undan 8'i kırık | ✅ adlar diskle eşitlendi |
| Eğitmen kılavuzu ve sınav cevap anahtarı öğrenci menüsünde | ✅ `egitmen` bayrağıyla gizlendi |
| Yeni kullanıcıya sahte ilerleme gösteriliyor | ✅ geçmiş boş başlıyor, seri gerçekten hesaplanıyor |

Üçü de kodda doğrulandı. İkincisi rapordan biraz daha kötüydü: `01`
"Ders Kitapçığı" diye listeleniyordu ama diskteki tek `01` dosyası
eğitmen kılavuzunun kendisiydi — adları düzeltmek ikisini de açacaktı.

Üçüncüsü ölçme geçerliliğini doğrudan bozuyordu: `getInitialActivityHistory`
grafiğe örnek veri (35 XP, 2 kelime) yazıyor, `learnedWords` üç sözcüğü
önceden "öğrenilmiş" sayıyor, `streak` hiçbir yerde artmadığı için hep
1'de kalıyordu. Ön test/son test karşılaştırmasında başlangıç değeri
sahte oluyordu.

## Sekiz öneri

| # | Öneri | Durum |
|---|---|---|
| 1 | Giriş ekranı ve ihtiyaç analizi | ✅ |
| 2 | Her derse kazanım kartı | ✅ |
| 3 | Can sistemi: ceza yerine tekrar turu | ✅ |
| 4 | Gerçek hayattan görevler | ✅ |
| 5 | Aralıklı tekrar (Leitner) | ✅ |
| 6 | Ders sonu yansıtma notu | ✅ |
| 7 | Eğitmen görünürlüğü | ⚠️ indirme olarak; otomatik gönderim bilerek yapılmadı |
| 8 | Erişilebilirlik | ✅ |

### 1 · Giriş kapısı
Üç soru: neden öğreniyorsun, şu an nerede duruyorsun, haftada ne kadar
vakit. Beyan **ilerleme değildir**: "alfabeyi okuyabiliyorum" diyenin
yolu o aşamadan açılır (ölçüldü: 49 ders kilidi açıldı) ama dersler
tamamlanmış sayılmaz, XP sıfır kalır. Atlanabilir; atlayan `atlandi`
olarak işaretlenir.

### 2 · Kazanım kartı
Ders hazırlık ekranında "bu derste neler yapabileceksin". Kazanımlar
`docs/olcme/olcme-plani.md`'deki **K1–K8** — ön/son test formlarının
ölçtüğü sekiz kazanımın aynısı. Kodlar soru metninden çıkarım yapılarak
değil, üretim noktasında yazılıyor. 90 dersin tamamında kart çıkıyor.

### 3 · Onarım turu
Can bitince ders durmuyor; kuyruk yanlışlar öne alınacak şekilde
diziliyor ve o turda can düşmüyor. İsabet oranı zaten yalnız ilk
denemeleri saydığı için ölçüm bozulmuyor.

**Yan bulgu:** `handleRefillHearts` canı bedavaya ve anında dolduruyor.
Eski duvar hiçbir şeyi sınırlamıyordu — maliyeti bir tık olan, yalnız
psikolojik ceza veren bir ekrandı.

### 4 · Üretim görevleri
Dört görev: adını tamgalarla yaz · tamga mesajı gönder · bir kitabe
satırını kendin çöz · bir tamgayı eliyle kaz. Yeni araç yazılmadı;
görevler var olan runik yazıcı, kitabe okuyucu ve çizim pratiğine amaç
veriyor. Giriş kapısındaki amaca uyanlar öne çıkıyor, hiçbiri gizlenmiyor.

Tamamlama öğrencinin beyanı: XP getirmiyor, ilerleme sayılmıyor.

**Doğruluk uyarısı görevin içinde.** Runik yazıcı sözlük dışı sözcükleri
kural tabanlı yaklaşık çeviriyle yazıyor. Ad görevinde bu açıkça
yazıyor: adlar kitabelerde geçmez, çıkan yazım bir öneridir; kalıcı bir
şeye geçirmeden önce uzmana danışılmalı.

### 5 · Leitner
Beş kutu (aynı gün / 1 / 3 / 7 / 16 gün). Deste vadesi gelenlerden
kuruluyor, zayıf kutudan güçlüye diziliyor. Vadesi gelen kart kalmazsa
"bugünlük tekrar bitti" paneli ve sıradaki tarih çıkıyor.

### 6 · Yansıtma notu
Ders sonunda tek soru: "Bugün en çok ne zorladı?" İsteğe bağlı; zorunlu
tutmak dersin önüne bir engel daha koymak olurdu. Notlar çalışma
raporuna giriyor.

### 7 · Eğitmen görünürlüğü
Raporda "`sonuc-sunucu.mjs` ucunu uygulamaya bağlayın" deniyordu.
**Bağlanmadı**, iki engel var:

1. Mevcut `/api/sonuc` ucu **ad ve e-posta** topluyor. `olcme-plani.md`
   → Etik: *"Katılımcı kodu kullanılır, ad soyad analiz dosyasına
   girmez."*
2. Aynı bölüm araştırma verisi için **etik kurul onayının önceden**
   alınmasını şart koşuyor. Sessizce sunucuya veri akıtan bir uygulama
   o şartı öğrencinin haberi olmadan deler.

Onun yerine: profil ekranından **katılımcı kodlu CSV/JSON indirme**.
Dosyada ad, e-posta, cihaz ya da IP yok. Onay geldiğinde kullanılmak
üzere sunucuya kimliksiz `POST /api/ilerleme` ucu, `/ilerleme` panosu ve
CSV çıktısı eklendi; temizleyici kimlik alanlarını gövdede olsalar bile
geçirmiyor.

### 8 · Erişilebilirlik
Ölçülen başlangıç: Öğren ekranında **142 düğmenin 91'i adsız** (ders
düğümleri), hiçbir ekranda atlama bağlantısı yok, profilde iki `h1`.
Sonrası: beş ekranda da adsız 0, `h1` tam 1, atlama bağlantısı var.
Yazı boyutu denetimi eklendi (16 → 20 px, saklanıyor).

**Raporun yanıldığı bir nokta:** `prefers-reduced-motion` desteği zaten
vardı; `:focus-visible` de vardı, yalnız zayıftı.

## Yapılmayanlar ve nedenleri

| Ne | Neden |
|---|---|
| Otomatik sonuç gönderimi | Etik kurul onayı önce gelmeli (yukarıda) |
| `/api/sonuc`'un ad+e-posta alanlarının kaldırılması | Sertifika sınavı için meşru olabilir; aynı sunucuda iki gizlilik rejimi var, karar eğitmenin |
| Canın gerçek tempo sınırlayıcısına çevrilmesi (zamanla dolma) | Ayrı bir ürün kararı |
| Ders kilidinin tamamen açılması | Öğrenme yolu sırası (alfabe → gündelik → sayı → kitabe) bilinçli pedagojik kısıt; seviye testiyle atlama ara yol olabilir |

## Denetimler

Bu çalışma dört yeni denetim bıraktı:

    node engine/kapi.mjs              # içerik ve kaynak kapısı (kazanım tablosu, PDF kütüphanesi dahil)
    npm run erisim:denetim            # beş ekranda erişilebilirlik

Kapıya eklenen iki denetim: PDF bağlantılarının dosyası var mı ve
eğitmen belgeleri gizli mi; kazanım tablosu ölçme planıyla birebir mi.
Üçü de bozularak sınandı, üçünde de kapı düştü.

Birim sınavları: Leitner 16, çalışma raporu 26, yansıtma 10 — hepsi
geçiyor.

## Doğrulamanın sınırı

Yansıtma notunun **ders sonu ekranı tarayıcıda uçtan uca sürülemedi**:
ilk dersin ilk alıştırması eşleştirme türünde ve otomatik betik onu
çözemiyor. Not deposu birim sınavıyla (10 durum), rapora girişi rapor
sınavıyla, arayüzün pakete girdiği derlenmiş dosyada doğrulandı; ekranın
kendisi elle denenmeli.
