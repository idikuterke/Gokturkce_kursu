# Kural tabanı denetimi — döngüsel kaynaklar ve korpus sınaması

> **Durum: UYGULANDI (19.10.2026).** Aşağıdaki bulguların tamamı
> `05_Kaynak_DB/kural-tabani.md` üzerinde işlendi:
> D6 işaret başına bölündü · D7'nin kurs atfı kaldırıldı ·
> G1/G2/G3 "hata" olmaktan çıkarılıp varyant sayıldı ·
> G5 C1'e bağlandı · G6'nın kapsamı kitabe okumasıyla sınırlandı ·
> C1'e Çavdar çatışması not düşüldü · A6'nın kurs atfı kaldırıldı.
> Kural tabanında artık kurs içeriğine atıf yapan **hiçbir madde yok**.

Kaynak: `05_Kaynak_DB/kural-tabani.md` (46 kural, 6 kategori)
Tarih: 2026-10-19

## Özet

46 kuralın **43'ü yalnız kitaplara dayanıyor** — sorun yok.
**3'ü kurs içeriğini kaynak gösteriyor.** Kurs içeriği bizim kendi
ürettiğimiz malzeme; onu kural kaynağı saymak döngüsel olur: ürettiğimiz
şeyi yine ürettiğimiz şeyle doğrulamış oluruz.

| Kural | Kaynak | Durum |
|---|---|---|
| A6 — büyük/küçük harf ayrımı yok | "Genel (ders içeriğiyle uyumlu)" | Zararsız. İddia doğru ve zaten tartışmasız; atıf gereksiz. |
| D7 — kelime sonunda ligatür serbest | Tekin2003 s. 34-35 **+ kurs** | Kitap atfı yeterli. Kurs atfı çıkarılabilir. |
| **D6 — kelime başında ligatür yasağı** | Tekin2003 §16-17 **+ kurs** | **Korpusla çelişiyor.** Aşağıya bak. |

Ayrıca "Yaygın Hatalar" tablosundaki **G1, G2, G3, G5, G6** yalnız kurs
içeriğine dayanıyor; G1, G3 ve G6 korpusla çelişiyor.

## D6 — korpus sınaması

D6 diyor ki: *"Hece işaretleri kelime başında, ünsüzle başlayan heceleri
yazmak için genellikle tek başına kullanılmaz; önce düz ünsüz harf gelir."*

Aynı tabandaki **D9** tam tersini söylüyor: *"UK/KU işareti söz başında
/ko/ ve /ku/ ses öbekleri için de kullanılabilir."* İkisi de **aynı Tekin
paragrafını** (§16, s. 29) gösteriyor.

Korpusta söz başı sayımı (214 dize, hizalı kelimeler):

| hece | ligatürle | düz harfle | sonuç |
|---|---|---|---|
| ko / ku | **96** | 32 | ligatür baskın (%75) → **D6 yanlış** |
| kö / kü | 12 | **145** | düz baskın (%92) → D6 doğru |
| kı | **61** | 46 | ligatür önde (%57) → **D6 yanlış** |
| çi | 0 | 2 | örnek yetersiz |

Örnekler: KURIGaRI 𐰸𐰆𐰺𐰃𐰍𐰺𐰃 · KUTaY 𐰸𐰆𐱃𐰖 · KIRKıZ 𐰶𐰃𐰺𐰴𐰔 · KÖK 𐰜𐰇𐰚

**Sonuç:** D6 toptan bir yasak olarak geçersiz. Yalnız **kö/kü** için
doğru. Toptan hâlini destekleyen tek atıf kurs içeriği — yani kendimiz.

Tekin1997 (*Tarih Boyunca Türkçenin Yazımı*) de açıkça yazıyor:
> "Bu işaretler kelime başında, sırasıyla, ko/ku, kö/kü, kı ve çi
> hecelerini yazmak için **de kullanılabilir**."

## Motorun yaptığı

Motor zaten işaret başına ayrı davranıyor; bu sayımlardan türetildi:

```
𐰸  ok/uk her yerde · ko/ku yalnız söz başı        (md. 19-21)
𐰜  ök/ük her yerde · kö/kü hiç                    (md. 19 "nâdiren")
𐰶  ık her yerde    · kı yalnız söz başı
𐰱  yalnız "iç"     · "çi" asla                    (md. 22)
```

D6'yı toptan uygulasaydık `kurt 𐰸𐰆𐰺𐱃`, `kuzu 𐰸𐰆𐰔𐰆`, `kış 𐰶𐰃𐱁` yanlış
olurdu — oysa denetimde bunlar onaylandı ve korpus da destekliyor.

## Yaygın Hatalar tablosu

| ID | İddia | Durum |
|---|---|---|
| G1 | `kök`ü 𐰜𐰚 yazmak hatalı, doğrusu 𐰚𐰜 | **Korpus çürütüyor:** KT D 3'te 𐰜𐰇𐰚 var, yani 𐰜 söz başında. Tabanın kendi D6 örnek tablosu da bunu yazıyor. "Hatalı" değil, varyant. |
| G2 | `kıldı`yı 𐰶𐰡𐰃 yazmak hatalı | Korpusta KILDıM 𐰴𐰃𐰡𐰢 (düz) var ama KIRKıZ 𐰶𐰃𐰺𐰴𐰔 de var. İkisi de geçerli; "hatalı" fazla kesin. |
| G3 | Ligatürü kelime başında kullanmak hata | D6 ile aynı sorun — ko/ku ve kı için yanlış. |
| G4 | Söz sonu ünlüsü yazılmalı | Doğru, kitap atıflı (Tekin §22). |
| G5 | Kalın/ince karıştırmak | Doğru ama ölçüt tartışmalı: taban "ilk heceye göre" (C1) diyor, Çavdar md. 3 "önündeki sesliye göre" diyor. Motor Çavdar'ı izliyor. |
| G6 | `gök`ü 𐰏 ile yazmak hatalı, kelime kök'tür | **Gündelik modülü kapsamaz.** Orada bugünün Türkçesi yazılıyor: gök = 𐰏𐰇𐰚. Kitabe okumasında G6 geçerli. Kuralın kapsamı belirtilmeli. |

## C1 ile Çavdar md. 3 çatışması

| Kaynak | Ölçüt |
|---|---|
| Kural tabanı **C1** (Tekin2003 §24, s. 31; Tanyeri s. 8) | Kutuplu ünsüz, **sözcüğün ilk hecesindeki** ünlüye göre seçilir; sonraki heceler değişse bile değişmez. |
| **Çavdar md. 3** + Tekin (runik ünsüz = VC hecesi) | Her ünsüz **kendi önündeki** ünlüye göre seçilir. |

Karışık ünlülü sözcüklerde ikisi ayrışır. Korpus kanıtı C1'e karşı:

```
TeMiRKaPıGKA  𐱅𐰢𐰼𐰴𐰯𐰍𐰴𐰀   ince T,R  +  kalın K,G,K
YOLuGTİGiN    𐰖𐰆𐰞𐰍𐱅𐰃𐰏𐰤   kalın Y,L,G  +  ince T,G,N
KaÇaNeŊ       𐰴𐰲𐰤𐰭          kalın K  +  ince N
```

İlk hece ölçütü tek seri verirdi; yazıtta iki seri var. Motor md. 3'ü
uyguluyor. C1 bileşik olmayan, uyumlu sözcüklerde aynı sonucu verir —
ayrıştığı yer yalnız karışık ünlülü sözcüklerdir.

## Öneri

1. D6'yı işaret başına böl (ko/ku ve kı için yasak kaldırılsın), kurs
   atfını çıkar, korpus sayımını koy.
2. G1, G2, G3'ü "hata" listesinden çıkarıp "varyant" olarak yeniden yaz.
3. G6'ya kapsam notu ekle: kitabe okuması için geçerli, gündelik modül
   için değil.
4. C1'e not: karışık ünlülü sözcüklerde md. 3 geçerlidir.
5. A6 ve D7'deki kurs atıfları kaldırılsın; ikisi de kitapla destekli
   ya da tartışmasız.
