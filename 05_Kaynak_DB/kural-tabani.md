# Orhon Türkçesi Yazım Kural Tabanı

*Sürüm: 2026-10-19*

Kütüphanedeki kaynaklardan (Talat Tekin 2003 Orhon Türkçesi Grameri; Talat Tekin 1998 Orhon Yazıtları; Aysu Ata 2011 Orhun Türkçesi; Yavuz Tanyeri Göktürk Yazısını Öğrenme Kılavuzu) sentezlenmiş, kaynak atıflı yazım kuralları ve istisnalar tabanı. Kurs içeriği üretimi (ders, kart, quiz, sözlük doğrulaması) için makine-okunur yapıdadır.

## Kaynaklar

| Kod | Kaynak | Durum |
|---|---|---|
| Tekin2003 | Talat Tekin, Orhon Türkçesi Grameri, 2. baskı, İstanbul 2003 (Türk Dilleri Araştırmaları Dizisi: 9) | Tam metin (273 s.) — § ve sayfa atıfları bu baskıya göredir. |
| Tekin1998 | Talat Tekin, Orhon Yazıtları (Kül Tigin, Bilge Kağan, Tunyukuk), Simurg, İstanbul 1998 | Tam metin — çeviri/karşılaştırma için. |
| Ata2011 | Aysu Ata, Orhun Türkçesi (AÖF Yayınları), Eskişehir 2011 | Tam metin — yazım kuralları bölümü ve metin çözümlemeleri. |
| Tanyeri | Yavuz Tanyeri, Göktürk Yazısını Öğrenme Kılavuzu | Tam metin (görsel tamgalar PDF'te; metin katmanında Latin okunuşlar). |
| Korpus | Proje içi turkbitig tabanlı orhun-db-v1 + content/*.json | Örnek doğrulama ve runik biçim kontrolü. |

> Ölmez 2017 kısmi (110/566 s.) olduğu için bu sürümde yalnızca çapraz doğrulamada kullanıldı; ana dayanak yukarıdaki dört kaynaktır.

## Sistem Özeti

- **Harf sayısı:** 38 işaret: 30 ünsüz + 4 ünlü + 4 çift sesli (hece işareti)
- **Yazım yönü:** Sağdan sola (az sayıda Yenisey yazıtında soldan sağa, harfler ters çevrik)
- **Ünlü işaretleri:** a/ä, ı/i, o/u, ö/ü — her işaret iki ünlüyü gösterir; o~u ve ö~ü yazıda ayırt edilemez
- **Kural sayısı:** 59 (7 kategori — H: Sayılar, Tekin2003 §280-290)

## A · Temel İlkeler

### A1 — Yazı yönü

Eski Türk runik yazısı sağdan sola doğru yazılır.

*Az sayıda Yenisey yazıtında satırlar soldan sağa yazılmıştır; bu durumda harfler ters yöne çevrik kazınmıştır.*

- **Kaynak:** Tekin2003 §1, s. 20; Tanyeri s. 7
- **Güven:** yüksek
- **Etiketler:** yön, genel

### A2 — İşaret envanteri

Alfabede 38 işaret vardır: 30 ünsüz, 4 ünlü, 4 çift sesli (hece) işareti.

*30 ünsüzün 20'si kalınlık-incelik (art/ön) durumuna göre çift biçimlidir; 5'i bütün ünlülerle kullanılır; 5'i çift ünsüz işaretidir.*

- **Kaynak:** Tanyeri s. 7-8
- **Güven:** yüksek
- **Etiketler:** envanter

### A3 — Ünlü işaretlerinin çift değerliliği

Ünlü işaretleri ikişer ünlüyü gösterir: a/ä, ı/i, o/u, ö/ü. o ile u ve ö ile ü yazıda ayırt edilemez; okuma ünlü uyumu ve bağlama dayanır.

- **Kaynak:** Tekin2003 s. 20; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, okuma

### A4 — Kutuplu ünsüzler (çift ünsüz işaretleri sistemi)

/b/, /d/, /g/, /k/, /l/, /n/, /r/, /s/, /t/, /y/ ünsüzleri için ikişer işaret vardır: biri art (kalın) ünlülü, öbürü ön (ince) ünlülü sözcüklerde kullanılır.

*İşaret seçimi ilk hecedeki ünlünün kalın/ince oluşuna göre yapılır; bu sistem + ünlü uyumu yanlış okumayı önler.*

| Örnek | Not |
|---|---|
| kalmadı | art /KLmDI/ — kalın biçimler |
| kälmädi | ön /klmdI/ — ince biçimler |
| sabıg ~ säbig | /SBG/ ~ /sbg/ |

- **Kaynak:** Tekin2003 §24, s. 31; Tanyeri s. 8
- **Güven:** yüksek
- **Etiketler:** ünsüz, ünlü uyumu

### A5 — Kelime ayırıcı

Sözcükleri/söz öbeklerini ayırmak için üst üste konmuş iki nokta (:) kullanılır.

*Begre yazıtında tek nokta; Irk Bitig'de iki kısa çizgi kullanılmıştır.*

| Örnek | Not |
|---|---|
| täŋridä : bolm(i)ş : türük : bilgä : kagan | (KT G 1) — ayırıcı örneği |

- **Kaynak:** Tekin2003 §42, s. 42
- **Güven:** yüksek
- **Etiketler:** noktalama

### A6 — Büyük-küçük harf ayrımı yoktur

Runik yazıda büyük/küçük harf ayrımı yoktur; özel adlar da küçük harf mantığıyla yazılır.

- **Kaynak:** Genel — yazıt yazısında büyük/küçük harf ayrımı yoktur; ayrıca atıf gerekmez
- **Güven:** yüksek
- **Etiketler:** genel

## B · Ünlülerin Yazımı

### B1 — Sözbaşı kısa a/ä yazılmaz

Sözbaşındaki kısa /a/ ve /ä/ ünlüleri yazımda genellikle gösterilmez.

*Ünsüz işaretleri aslında /a/ ya da /ä/ ile başlayıp ilgili ünsüzle biten heceleri gösterir.*

| Örnek | Not |
|---|---|
| at | /T/ (KT D 33) |
| ak | /K/ (KT D 36) |
| är | /r/ (KT D 12) |
| adak | /DK/ (KT K 7) |
| altun | /LTUN/ (BK G 11) |

- **Kaynak:** Tekin2003 §4, s. 24; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, sözbaşı

### B2 — İlk hecede ı/i genellikle gösterilir

İlk hecedeki /ı/ ve /i/ ünlüleri genellikle yazılır.

| Örnek | Not |
|---|---|
| bıŋ | /BIŋ/ (T 16, 18) |
| kırk | /KIRK/ (KT K 2) |
| bilgä | /bIlgA/ (KT D 3) |
| kişi | /kIsI/ (BK D 3) |

- **Kaynak:** Tekin2003 §12, s. 28; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, ilk hece

### B3 — İlk hecede yuvarlak ünlüler genellikle yazılır

İlk hecedeki /o/, /u/, /ö/, /ü/ ünlüleri genellikle gösterilir.

| Örnek | Not |
|---|---|
| bod(u)n | /BUDN/ (KT D 9) |
| bul(u)ŋ | /BULŋ/ (KT D 2) |
| böri | /bÜrI/ (KT D 12) |

- **Kaynak:** Tekin2003 §13, s. 28; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, ilk hece

### B4 — İlk hece dışında a/ä genellikle yazılmaz

İlk hece dışındaki /a/ ve /ä/ ünlüleri genellikle gösterilmez.

| Örnek | Not |
|---|---|
| açsar | /AçSr/ (BK K 6) |
| kazganmasar | /KzGNmSR/ (T 54) |
| ekilärim | /klrm/ (KT K 9) |

- **Kaynak:** Tekin2003 §19, s. 29
- **Güven:** yüksek
- **Etiketler:** ünlü, iç hece

### B5 — İlk hece dışında düz-dar ı/i genellikle yazılmaz

İlk hece dışındaki hecelerin düz-dar /ı/ ve /i/ ünlüleri genellikle yazılmaz.

| Örnek | Not |
|---|---|
| adg(ı)r(ı)g | /DGRG/ (KT D 36) |
| adr(ı)lmal(ı)m | /DRLmLm/ (O sağ 3) |
| buŋs(ı)z | /BUŋsz/ (T 48) |

- **Kaynak:** Tekin2003 §21, s. 30; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, iç hece

### B6 — Sözsonu ünlüleri daima yazılır

Bütün sözsonu ünlüleri yazımda gösterilir.

| Örnek | Not |
|---|---|
| ara | /RA/ (KT D 1) |
| altı | /LTI/ (KT D 31) |
| kişi | /kIsI/ (T 10) |
| ulayu | /ULYU/ (KT K 9) |

- **Kaynak:** Tekin2003 §22, s. 30; Ata2011 s. 67
- **Güven:** yüksek
- **Etiketler:** ünlü, sözsonu

### B7 — Ek alan ünlü sonu: a/ä gösterilebilir

Ünlü ile biten sözcükler ek aldığında temel sözcükteki sözsonu /a/ ve /ä/ ünlülerinin gösterildiği de olur; bu yazım ünlü uzunluğuyla ilgili değildir.

| Örnek | Not |
|---|---|
| apam | /pAm/ (KT D 1) |
| apam(ı)z | /pAmz/ (KT D 19) |

- **Kaynak:** Tekin2003 §20, s. 30
- **Güven:** yüksek
- **Etiketler:** ünlü, ek

### B8 — Sandhi: bitişik yazımda sözsonu ünlü düşebilir

Ünlü ile biten bir sözcük sonraki sözcükle birlikte yazıldığında ilk sözcüğün sözsonu ünlüsü gösterilmeyebilir.

| Örnek | Not |
|---|---|
| anı(a) takı | /nıTKI/ (KT G 13) |
| kant(a) yan | /KntYn/ (T 33) |
| yird(ä)nt(ä) yan | /yIrDntYN/ (T 11) |

- **Kaynak:** Tekin2003 §23, s. 30-31
- **Güven:** yüksek
- **Etiketler:** ünlü, sandhi

### B9 — Kapalı /e/ için ayrı işaret yok

Kapalı /e/ ünlüsü için Orhon yazıtlarında ayrı bir işaret yoktur; ya /I/ harfiyle yazılır ya da hiç gösterilmez.

| Örnek | Not |
|---|---|
| ikägü | /IKGÜ/ (KT K 3) |
| eki | /kI/ (BK D 41) |
| il / el | /Il/ (KT D 25) ~ /l/ (KT D 4) |

- **Kaynak:** Tekin2003 s. 25
- **Güven:** yüksek
- **Etiketler:** ünlü, kapalı e

### B10 — Yuvarlak ünlüden sonra k: ok/uk veya ök/ük işareti

Yuvarlak ünlüden sonraki ünsüz artdamaksıl /k/ ise /ok/ ya da /uk/ ses öbeği UK işaretiyle; öndamaksıl /k/ ise /ök/ ya da /ük/ ses öbeği ÜK işaretiyle gösterilebilir.

| Örnek | Not |
|---|---|
| tok | /tUK/ (T 8) |
| tok(u)z | /tUKz/ |
| sökd(ü)m | /sÜkdm/ (T 25) |
| yük(ü)nti | /yÜkntI/ (T 28, 46) |

- **Kaynak:** Tekin2003 §14-15, s. 29
- **Güven:** yüksek
- **Etiketler:** ünlü, hece işareti

### B11 — Uzun ünlü için kesin işaret yok

Aslî uzunluklar korunur; ancak yazıda uzunluğu gösteren kesin bir kural yoktur. Bazı çift sesli işaretlerin yanında ünlü ayrıca yazılmışsa uzun ünlü düşünülebilir.

- **Kaynak:** Tanyeri s. 14; Tanyeri (çift sesli harfler bölümü)
- **Güven:** orta
- **Etiketler:** ünlü, uzunluk

## C · Ünsüzler ve Kutupluluk

### C1 — Art/ön işaret seçimi: iki ölçüt çatışıyor

Kutuplu ünsüzlerde işaret seçimi ünlünün kalın (art) ya da ince (ön) oluşuna göre yapılır. **Hangi ünlüye bakılacağı kaynaklara göre değişir:**

| Kaynak | Ölçüt |
|---|---|
| Tekin2003 §24, s. 31; Tanyeri s. 8 | Sözcüğün **ilk hecesindeki** ünlü. Sonraki heceler değişse bile işaret değişmez. |
| Çavdar md. 3 (+ runik ünsüz = VC hecesi mantığı) | Her ünsüz **kendi önündeki** ünlüye uyar; önünde ünlü yoksa ardındakine. |

Çoğu sözcükte ikisi aynı sonucu verir — Orhon Türkçesi ünlü uyumlu olduğu için ilk hece zaten bütün sözcüğü belirler. Ayrıldıkları yer **birleşik sözcükler ve alıntılar**: korpusta ayırt edici yalnızca 2 konum bulundu, ikisi de birleşik sınırında.

**Motor Çavdar'ı izliyor** (md. 3). Gerekçe: gündelik modülde bugünün Türkçesi yazılıyor ve orada ünlü uyumu bozuk sözcükler çok (*kardeş, badem, kitap*); "ilk hece" ölçütü bunlarda kaba sonuç veriyor. Kitabe tarafı zaten korpus yazımını kullandığı için kural üretmiyor.

- **Kaynak:** Tekin2003 §24, s. 31; Tanyeri s. 8; Çavdar md. 3
- **Güven:** yüksek (kural), orta (hangi ölçüt — kaynak çatışması açık)
- **Etiketler:** ünsüz, ünlü uyumu, kaynak-çatışması

### C2 — Kutuplu ünsüzlerde görülen yazım sapmaları

Art ünlülü bazı sözcüklerde art işaret yerine ön işaret kullanılabilir. Bazıları yalnızca yazım yanlışı, bazıları seslik durumu yansıtır.

| Örnek | Not |
|---|---|
| kıl(ı)nt(ı)m | /KıIlntm/ (T 1) |
| bul(u)ŋ(u)g | /bULŋG/ (O 1) |
| kaganladok | /KGNLdUK/ (KT D 7) |
| kazganmasar | /KzGNmSr/ (T 54) |

- **Kaynak:** Tekin2003 §24, s. 31-32
- **Güven:** yüksek
- **Etiketler:** ünsüz, istisna

### C3 — Ön /s/ harfi

Ön ünlülü sözcüklerdeki /s/ ile art ünlülü sözcüklerde /i/ komşuluğundaki /s/ ön /s/ harfiyle yazılır. {-mIş} eki de genellikle ön /s/ ile yazılır.

| Örnek | Not |
|---|---|
| açsık | /AçsK/ (KT G 8) |
| sıgtamış | /sIGTAmı/ (BK D 5) |
| bolm(i)ş | {-mIş} ön /s/ ile (T 31 vb.) |

- **Kaynak:** Tekin2003 §25, s. 32
- **Güven:** yüksek
- **Etiketler:** ünsüz, s

### C4 — Ön /s/ seyrek yanlış kullanımları

Ön /s/ harfi seyrek olarak art ünlülü sözcüklerde /a/ ve /u/ komşuluğundaki /s/ için de kullanılmıştır; bunlar yazım yanlışıdır.

| Örnek | Not |
|---|---|
| basd(ı)m | /BsDm/ (O 9) |
| bolsar | /BUlsR/ (T 13) |
| sak(ı)nt(ı)m | /sKntm/ (T 6, O 10) |

- **Kaynak:** Tekin2003 §25, s. 32
- **Güven:** yüksek
- **Etiketler:** ünsüz, s, istisna

### C5 — Ön /y/ harfi

Ön ünlülü sözcüklerdeki /y/, ön /y/ harfiyle yazılır. Bu harf bazı art ünlülü sözcüklerde sözbaşı /ı/ ve /o, u/ önündeki /y/ için de kullanılmıştır; seslik önemi yoktur.

| Örnek | Not |
|---|---|
| yıl | genellikle ön /y/ |
| yılka | /YILKA/ (O 12) |
| yog(u)n | /yUGN/ (T 14) |
| yok | /yUK/ (T 18) |

- **Kaynak:** Tekin2003 §26, s. 32-33
- **Güven:** yüksek
- **Etiketler:** ünsüz, y

### C6 — İkiz ünsüzler genellikle tek harfle yazılır

Sözcük içindeki ikiz ünsüzler runik yazıda seyrek olarak belirtilir; genellikle tek harf kullanılır.

| Örnek | Not |
|---|---|
| yüg(g)erü | /yÜgrÜ/ (KT D 11) |
| balık(k)a | /BLıKA/ (KT K 8) |
| ıduk (k)ut | /IDUKT/ (BK D 25) |
| tuñukuk(k)a | /TUñUKUKA/ (T 31) |

- **Kaynak:** Tekin2003 §41, s. 40
- **Güven:** yüksek
- **Etiketler:** ünsüz, ikiz ünsüz

### C7 — İkiz ünsüz istisnaları

İkiz ünsüzün ayrıca gösterildiği istisnalar vardır.

| Örnek | Not |
|---|---|
| çorakka | /çURKKA/ (BK GD) |
| ill(i)gdä | /IllgdA/ (KT D 29, BK D 24) |
| ill(i)gig | /Illgg/ (KT D 15, 18; BK D 13) |
| Karlukka | /KRLUKKA/ (KÇ D 4) |

- **Kaynak:** Tekin2003 §41, s. 41
- **Güven:** yüksek
- **Etiketler:** ünsüz, ikiz ünsüz, istisna

### C8 — Söz başında bulunmayan ünsüzler

Orhun Türkçesinde /d/, /g/, /m/, /n/, /ŋ/, /ń/, /r/, /z/ ünsüzleri söz başında bulunmaz; /l/, /p/, /ş/ ise yalnız alıntı sözcüklerde söz başında görülür.

*Aşağıdaki istisnalar vardır: gü / gu (soru edatı), lagzın 'domuz' (< Çince), mag 'övgü, alkış' (< Moğolca).*

- **Kaynak:** Ata2011 (Ses Yapısı-Ünsüzler bölümü); Tanyeri s. 14-16
- **Güven:** yüksek
- **Etiketler:** ünsüz, söz başı

### C9 — 3. kişi iyelik eki ve ince N/S istisnası

3. kişi iyelik eki genellikle /+i/ ve /+si/ biçiminde ön ünlülüdür. Bu eki almış art ünlülü sözcüklerde belirtme eki /+n/ genellikle ön /n/ harfiyle, iyelik ekinin /+si/ türündeki /s/ de genellikle ön /s/ harfiyle yazılır.

| Örnek | Not |
|---|---|
| ilin törüsin | art sözcükte +si eki (KT D 1) |
| bodunıg | +n belirtme ön /n/ ile ilgili örnekler (Tekin §66) |

- **Kaynak:** Tekin2003 §66, s. 51
- **Güven:** yüksek
- **Etiketler:** ünsüz, iyelik, istisna

## D · Hece İşaretleri (Ligatürler)

### D1 — UK/KU hece işareti

/UK, KU/ işaretinin seslik değerleri: 1) ok/uk ses öbekleri, 2) art /k/ ünsüzü.

| Örnek | Not |
|---|---|
| tok | /tUK/ (T 8) |
| kut | /KUT/ (O ön 8) |

- **Kaynak:** Tekin2003 §27, s. 33
- **Güven:** yüksek
- **Etiketler:** ligatür

### D2 — ÜK/KÜ hece işareti

/ÜK, KÜ/ işaretinin seslik değerleri: 1) ök/ük ve kö/kü ses öbekleri, 2) kö/kü, 3) ön /k/ ünsüzü.

*Çift sesli işaret kullanıldığında yanındaki ünlü yazılmaz; ayrıca yazılmışsa uzun ünlü düşünülür.*

| Örnek | Not |
|---|---|
| ök(ü)n | /Ükn/ (BK D 19) |
| türük | /tÜrÜk/ (KT G 1) — sonda ÜK işareti |
| kört(ü)g | /kÜrtg/ (O ön 7) |

- **Kaynak:** Tekin2003 §28, s. 34; Tanyeri (çift sesli harfler)
- **Güven:** yüksek
- **Etiketler:** ligatür, ök

### D3 — IK/KI hece işareti

/ıK, Kı/ işaretinin değerleri: 1) ık, 2) kı (söz başında ve içinde), 3) söz başında /ı/ ünlüsünden önce art damaksıl /k/.

| Örnek | Not |
|---|---|
| balık | /BLıK/ (BK D 28, T 19) |
| kıl(ı)p | /KıLp/ (O sağ 2) |

- **Kaynak:** Tekin2003 §29, s. 35
- **Güven:** yüksek
- **Etiketler:** ligatür

### D4 — Diğer hece işaretleri

Runik yazıda ayrıca şu hece işaretleri vardır: /iç, çi/, /Aş/, /baş/, /çi/, /ot/, /Up/, /däm/, /kış/.

- **Kaynak:** Tekin2003 s. 36-38 (hece işaretleri bölümü)
- **Güven:** yüksek
- **Etiketler:** ligatür, envanter

### D5 — Çift ünsüz işaretleri

LT, NT ve NÇ çift ünsüz işaretleri tek işaretle yazılır.

- **Kaynak:** Tekin2003 s. 38-40
- **Güven:** yüksek
- **Etiketler:** ligatür, çift ünsüz

### D6 — Kelime başında ligatür: işaret başına ayrı davranış

Hece işaretlerinin söz başında kullanımı **işarete göre değişir**; toptan bir yasak yoktur. Korpus sayımı (214 dize, hizalı sözcükler):

| İşaret | Hece | Söz başı ligatür | Söz başı düz harf | Sonuç |
|---|---|---|---|---|
| 𐰸 | ko / ku | **96** | 32 | ligatür baskın (%75) — serbest |
| 𐰜 | kö / kü | 12 | **145** | düz baskın (%92) — ligatür nâdir |
| 𐰶 | kı | **61** | 46 | ligatür önde (%57) — serbest |
| 𐰱 | çi | 0 | 2 | örnek yetersiz — kullanılmaz |

Örnek: KURIGaRI 𐰸𐰆𐰺𐰃𐰍𐰺𐰃 · KUTaY 𐰸𐰆𐱃𐰖 · KIRKıZ 𐰶𐰃𐰺𐰴𐰔 · KÖK 𐰜𐰇𐰚

**Önceki hâli geçersiz.** Kural eskiden "söz başında ligatür kullanılmaz" diyordu; bunu destekleyen tek atıf kurs içeriğiydi — yani kendi ürettiğimiz malzeme (dairesel). Korpus yalnız **kö/kü** için doğruluyor. D9 da zaten tersini söylüyordu ve ikisi aynı Tekin paragrafına (§16) dayanıyordu; çelişki böyle çözüldü.

Tekin 1997 (*Tarih Boyunca Türkçenin Yazımı*) açıkça yazıyor:
> "Bu işaretler kelime başında, sırasıyla, ko/ku, kö/kü, kı ve çi hecelerini yazmak için **de kullanılabilir**."

Motor bu sayımlara göre işaret başına davranıyor (md. 19-22).

| Örnek | Not |
|---|---|
| kök 𐰚𐰜 | düz ince k + ÖK ligatürü |
| kök 𐰚𐰇𐰚 | KT D 1 — ünlü açık yazılmış |
| kök 𐰜𐰇𐰚 | KT D 3 / BK D 4 — ÖK işareti söz başında |

Üç yazım da yazıtlarda geçiyor; hiçbiri "hatalı" değil (bk. G1).

- **Kaynak:** Tekin2003 §16-17, s. 29; Tekin1997; Korpus sayımı `docs/kural-tabani-denetimi.md`
- **Güven:** yüksek
- **Etiketler:** ligatür, konum, korpus-ölçümü

### D7 — Kelime sonunda ligatür serbest

Kelime sonundaki ünlü+k heceleri ligatürle yazılabilir; kural gereği serbesttir.

| Örnek | Not |
|---|---|
| türük 𐱅𐰇𐰼𐰜 | KT G 1 — sonda ÖK/ÜK ligatürü |
| bayırku 𐰉𐰖𐰺𐰸𐰆 | KT G 4 — sondaki u yazılır |

- **Kaynak:** Tekin2003 s. 34-35
- **Güven:** yüksek
- **Etiketler:** ligatür, konum, sözsonu

### D8 — ÜK işaretinin açık yazıldığı varyantlar

/ÜK/ işareti bazen ünlü ayrıca yazılarak da kullanılır; aynı sözcüğün iki yazımı yan yana görülebilir.

| Örnek | Not |
|---|---|
| ök(ü)n ~ ökün | /Ükn/ (BK D 19) ~ /ÜkÜn/ (KT D 23) |
| türük ~ türk | /tÜrÜk/ (KT G 1) ~ /tÜrk/ (T 1, 2, 3) |

- **Kaynak:** Tekin2003 §28, s. 34
- **Güven:** yüksek
- **Etiketler:** ligatür, varyant

### D9 — UK işaretinin söz başında kullanımı

UK/KU işareti söz başında /ko/ ve /ku/ ses öbekleri için de kullanılabilir.

| Örnek | Not |
|---|---|
| kopın | /KUpn/ (T 16) |
| kut | /KUT/ (O ön 8) |

- **Kaynak:** Tekin2003 §16, s. 29
- **Güven:** yüksek
- **Etiketler:** ligatür, konum, istisna

### D10 — Çift sesli işaretlerin okunması

Çift sesli (hece) işaret kullanıldığında yanındaki ünlü genellikle yazılmaz; ünlü ayrıca yazılmışsa uzun ünlü olabileceği düşünülür.

| Örnek | Not |
|---|---|
| türük 𐱅𐰇𐰼𐰜 | Ü işareti ük sesini karşılar; ayrıca ü yazılmaz (Tanyeri) |

- **Kaynak:** Tanyeri (çift sesli harfler bölümü)
- **Güven:** orta
- **Etiketler:** ligatür, okuma

## E · Noktalama ve Düzen

### E1 — Sözcük ayırıcı iki nokta

Normal uzunlukta sözcükler üst üste iki nokta ile birbirinden ayrılır.

- **Kaynak:** Tekin2003 §42, s. 42
- **Güven:** yüksek
- **Etiketler:** noktalama

### E2 — Tek heceli sözcüklerin bitişik yazımı

Tek heceli sözcükler genellikle önceki ya da sonraki sözcükle birlikte yazılır.

- **Kaynak:** Tekin2003 §42, s. 42
- **Güven:** yüksek
- **Etiketler:** noktalama, düzen

### E3 — Irk Bitig'de ayırıcı

Irk Bitig'de sözcükler iki nokta yerine eşit işaretine benzeyen iki kısa çizgi ile ayrılır.

- **Kaynak:** Tekin2003 §42, s. 42
- **Güven:** yüksek
- **Etiketler:** noktalama, ırk bitig

## F · İstisnalar

### F1 — Söz başında ligatür istisnaları

Kelime başında ligatür kullanımı genellikle yasak olmakla birlikte Tekin'de seyrek istisnalar kaydedilmiştir.

| Örnek | Not |
|---|---|
| kıl(ı)p | KıLp — Ongi (O sağ 2) |
| kopın | KUpn — T 16 |
| kört(ü)g | kÜrtg — O ön 7 |
| köläk(i)n | kÜLkn — T 15 |

- **Kaynak:** Tekin2003 §16-17, s. 29; §29, s. 35
- **Güven:** yüksek
- **Etiketler:** istisna, ligatür

### F2 — İkiz ünsüz istisnaları

İkiz ünsüzlerin ayrıca gösterildiği istisna sözcükler vardır.

| Örnek | Not |
|---|---|
| çorakka, ill(i)gdä, ill(i)gig, Karlukka | Tekin §41/s. 41 |

- **Kaynak:** Tekin2003 §41, s. 41
- **Güven:** yüksek
- **Etiketler:** istisna, ikiz ünsüz

### F3 — Ünlü uyumu dışı yazımlar

Bazı sözcüklerde art ünlülü gövdede ön ünlülü işaret kullanılır; bu yazımların bir kısmı hata, bir kısmı seslik durumu yansıtır.

| Örnek | Not |
|---|---|
| kıl(ı)nt(ı)m | KıIlntm — T 1 |
| bul(u)ŋ(u)g | bULŋG — O 1 |
| kaganladok | KGNLdUK — KT D 7 |
| kazganmasar | KzGNmSr — T 54 |

- **Kaynak:** Tekin2003 §24, s. 31
- **Güven:** yüksek
- **Etiketler:** istisna, ünlü uyumu

### F4 — Düz-dar ünlülerin ara sıra yazılması

İlk hece dışındaki düz-dar /ı/, /i/ genellikle yazılmaz; ancak ara sıra yazıldığı da olur.

| Örnek | Not |
|---|---|
| akıt(tı)m(ı)z | /KITmz/ (KT K 8) |
| ak(ı)td(ı)m(ı)z | /KTDmz/ (T 35) |

- **Kaynak:** Tekin2003 §21, s. 30
- **Güven:** yüksek
- **Etiketler:** istisna, ünlü

### F5 — Sandhi istisnaları

Bitişik yazımlarda sözsonu ünlüsü düşebilir.

| Örnek | Not |
|---|---|
| anı(a) takı | /nıTKI/ (KT G 13) |
| kant(a) yan | /KntYn/ (T 33) |

- **Kaynak:** Tekin2003 §23, s. 30-31
- **Güven:** yüksek
- **Etiketler:** istisna, sandhi

### F6 — İnce N / ince S istisnası (iyelik)

3. kişi iyelik eki alan art ünlülü sözcüklerde belirtme /+n/ ön /n/ ile, /+si/ ekindeki /s/ ön /s/ ile yazılır (Tekin §66).

- **Kaynak:** Tekin2003 §66, s. 51
- **Güven:** yüksek
- **Etiketler:** istisna, iyelik

### F7 — Söz başı ünsüz istisnaları

Söz başında bulunmayan ünsüzlerin istisnaları: gü/gu (soru edatı), lagzın 'domuz' (< Çince), mag 'övgü' (< Moğolca).

- **Kaynak:** Ata2011 (Ses Yapısı); Tanyeri s. 14-16
- **Güven:** yüksek
- **Etiketler:** istisna, söz başı

### F8 — ş tamgası tek biçimdir (üretim kuralı)

/ş/ için kalın-ince ayrımı **yoktur**: her sözcükte 𐱁 yazılır. Yazıtlarda ince sözcüklerde 𐰾 ile de yazıldığı görülür (korpusta 320 geçiş); bu bir kural değil, yazıt yazımındaki düzensizliktir — söz başı ince y ve söz sonu ince n gibi.

| | kural (üretim) | yazıt (okuma) |
|---|---|---|
| taş | 𐱃𐱁 | 𐱃𐱁 |
| beş | 𐰋𐱁 | 𐰋𐰾 |

Tanıklı sözcüklerde ekranda yazıt biçimi gösterilir ve farkı belirten not basılır; üretim her zaman 𐱁 verir. Ayrıntı: `docs/kaynak-catismasi-s-sh.md`.

- **Kaynak:** Çavdar md. 10 (karar: proje sahibi, 19.10.2026); karşı tanık: korpus `05_Kaynak_DB/orhun-db-v1.json`
- **Güven:** yüksek (kaynak çatışması açıkça karara bağlandı)
- **Etiketler:** istisna, karar, ş

### F9 — Söz başı y ve söz sonu n: kalın biçim esastır (üretim kuralı)

Kalın sıradan sözcüklerde söz başı /y/ **kalın** (𐰖), söz sonu /n/ **kalın** (𐰣) yazılır. Yazıtlarda bu konumlarda ince biçim (𐰘 / 𐰤) geçtiği yerler vardır; bunlar kural değil istisnadır. Bu yüzden md. 16 (söz başı yı → ince y) üretimden kaldırıldı: *yılan* 𐰖𐰃𐰞𐰣.

- **Kaynak:** Çavdar md. 3 (karar: proje sahibi); karşı tanık: korpus
- **Güven:** yüksek
- **Etiketler:** istisna, karar, söz başı, söz sonu

## Sayılar

### H1 — Asıl sayılar

Birlikler, onluklar ve yüzlükler: *bir* 1 · *eki* 2 · *üç* 3 · *tört* 4 · *beş* 5 · *biş* 5 · *altı* 6 · *yeti* 7 · *yiti* 7 · *säkiz* 8 · *tokuz* 9 · *on* 10 · *yegirmi* 20 · *yigirmi* 20 · *otuz* 30 · *kırk* 40 · *älig* 50 · *altmış* 60 · *yetmiş* 70 · *säkiz on* 80 · *tokuz on* 90 · *yüz* 100 · *bıŋ* 1000 · *biŋ* 1000 · *miŋ* 1000 · *bir tümän* 10000.

50, 60 ve 70 (*älig, altmış, yetmiş*) özgün köklerdir; 80 ve 90 niteleme öbeğidir: *säkiz on*, *tokuz on*.

- **Kaynak:** Tekin2003 §280, s. 128
- **Güven:** yüksek
- **Etiketler:** sayı, temel

### H2 — Onluklararası sayılar: hedef onluk mantığı

Ara sayılar toplama ile değil, **bir sonraki onluğa atılacak adım** olarak adlandırılır. *eki yegirmi* "12" — yani "yirmiye doğru ikinci". *bir otuz* "21" — "otuza doğru birinci".

Bugünün Türkçesinden farkı: *eki yegirmi* 22 değil **12**'dir.

Örnekler: *bir yegirmi* 11 · *eki yegir[mi]* 12 · *üç yegirmi* 13 · *tört yegirmi* 14 · *biş yigirmi* 15 · *altı yegirmi* 16 · *yeti yegirmi* 17 · *säkiz yegirmi* 18 · *tokuz yegirmi* 19 · *bir otuz* 21 · *eki otuz* 22 · *üç otuz* 23 · *biş otuz* 25 · *altı otuz* 26 · *yiti otuz* 27 · *tokuz otuz* 29 · *bir kırk* 31 · *otuz artukı bir* 31 · *otuz artukı säkiz* 38.

- **Kaynak:** Tekin2003 §281.1, s. 129
- **Güven:** yüksek
- **Etiketler:** sayı, ara sayı

### H3 — Yenisey'de ara sayı 80'e kadar aynı yolla kurulur

*eki älig* "42" (Tuva I 3), *üç yetmiş* "63", *yeti yetmiş* "67", *tokuz säkiz on* "79".

- **Kaynak:** Tekin2003 §281.2, s. 129
- **Güven:** yüksek
- **Etiketler:** sayı, Yenisey

### H4 — *artukı* katması: 30'dan sonra ikinci yol

Asıl Orhon yazıtlarında 30'dan büyük sayılar çoğunlukla **katmalı** kurulur; birleştirici *artukı* "fazlası, artı"dır: *otuz artukı bir* "31", *otuz artukı säkiz* "38", *kırk artukı yeti* "47".

İki yol da kullanılır: 31 için hem *otuz artukı bir* (BK G 9) hem *bir kırk* (KT K 2) geçer.

Yüzlükler ve binlikler arasında da aynı yapı: *bir tümän artukı yeti biŋ* "17.000".

- **Kaynak:** Tekin2003 §281.3 ve §282, s. 129
- **Güven:** yüksek
- **Etiketler:** sayı, artukı, katmalı

### H5 — Niteleme öbekleri: 80, 90, yüzler, binler

*säkiz on* 80 · *tokuz on* 90 · *biş yüz* 500 · *yeti yüz* 700 · *eki bıŋ* 2000 · *yeti biŋ* 7000 · *bir tümän* 10.000 · *on tümän* 100.000.

- **Kaynak:** Tekin2003 §282, s. 129
- **Güven:** yüksek
- **Etiketler:** sayı, niteleme

### H6 — Asıl sayıların görevleri

1. Niteleyici: *bir ärig sançdı*, *üç otuz balık* "yirmi üç şehir".
2. 3. kişi iyelik ekiyle ad: *ekisin özi altızdı* "İkisini kendisi aldırttı".
3. Zarf tümleci (süre/sıklık): *bir yılka tört yolı süŋüşdüm*, *kül tigin bir kırk yaşayur ärti* "otuz bir yaşında idi".
4. Yüklem adı: *biz eki bıŋ ärtimiz* "Biz iki bin idik".

- **Kaynak:** Tekin2003 §283, s. 130
- **Güven:** yüksek
- **Etiketler:** sayı, sözdizimi

### H7 — Kesir: tek örnek *sıŋar*

Runik metinlerde geçen tek kesir sayısı *sıŋar* "yarım, yarı, bir çiftin teki"dir (BK D 32). Moyun Çor'da 3. kişi iyelik ekiyle: *sıŋarı bodun* "halkın yarısı".

- **Kaynak:** Tekin2003 §284, s. 131
- **Güven:** yüksek
- **Etiketler:** sayı, kesir

### H8 — Yaklaşıklık: {+çA} eki ya da ikili öbek

1. Eşitlik durumu ekiyle: *äligçä är* "elli kadar adam", *yüzçä är* "yüz kadar adam".
2. Sözdizimiyle: *eki üç kişi* "iki üç kişi", *yüz artuk ok* "yüzden fazla ok".

- **Kaynak:** Tekin2003 §285, s. 131
- **Güven:** yüksek
- **Etiketler:** sayı, yaklaşıklık

### H9 — Sıra sayıları: {+(X)nç}

*ilki* "birinci" (< il+ki) · *äŋ ilk ~ äŋ ilki* · *ekin ~ ekinti* "ikinci" · *üçünç* · *törtünç* · *bişinç* · *yetinç* · *säkizinç* · *tokuzunç* · *onunç* · *bir yegirminç* "on birinci".

Hem niteleyici (*ilki sü* "birinci ordu") hem zarf tümleci (*äŋ ilk togu balıkda süŋüşdümüz* "ilk önce") olur. Ay adlarında yaygındır: *bişinç ay* "beşinci ay".

"İkinci" için {+(X)nç} değil ayrı biçim (*ekin ~ ekinti*) kullanılır.

- **Kaynak:** Tekin2003 §286, s. 131-132
- **Güven:** yüksek
- **Etiketler:** sayı, sıra

### H10 — Topluluk sayıları: {+AgU(n)}

*ikägü* · *üçägü* "üçü birlikte" · *üçägün* "üçü(müz) birlikte" · *buçägü* (< bu üçägü) "bu üçü birlikte".

*ikägü* her zaman "ikisi birlikte" değildir; KT K 3'te "iki parça" anlamındadır.

- **Kaynak:** Tekin2003 §287, s. 132-133
- **Güven:** yüksek
- **Etiketler:** sayı, topluluk

### H11 — Katlama sayıları: *yolı* ya da *kata*

Kaç kez yapıldığı ek ile değil **söz öbeğiyle** anlatılır: asıl sayı + *yolı* (< yōl "yol, sefer" + iyelik) ya da asıl sayı + *kata* (< kat- "katmak"): *tört yolı* "dört kez", *biş yolı*, *üç kata*, *beş kata*. Sıra sayısıyla da kurulur: *ikinti kata* "ikinci kez".

Asıl sayı tek başına da katlama bildirir: *tabgaçka yeti yegirmi süŋüşdi* "Çinlilerle on yedi kez savaştı".

- **Kaynak:** Tekin2003 §288, s. 133
- **Güven:** yüksek
- **Etiketler:** sayı, katlama

### H12 — Belirsizlik sayıları

*az* "az" · *azça* "biraz" · *azkıńa* "pek az, azıcık" · *üküş* "pek çok". Niteleyici, ad ve zarf olarak kullanılırlar: *az bodunug üküş kıltım* "az halkı çoğalttım".

*bıŋ* ve *tümän* gibi çok yüksek sayılar da belirsizlik bildirir: *bıŋ yıllık tümän künlük* "bin yıllık on bin günlük".

*bunça* "bunca, bu kadar" (bu + {+çA}) da bu görevdedir.

- **Kaynak:** Tekin2003 §289-290, s. 133-135
- **Güven:** yüksek
- **Etiketler:** sayı, belirsizlik

### H13 — Sayıların runik yazımı kural değil tanıktır

Sayı öbeklerinin tamga dizileri kitapların metin katmanında yoktur (tamgalar görsel). Bu yüzden runik katman **korpustan** eşlenir. Göktürk yazısı o~u ve ö~ü'yü ayırmadığından Tekin'in *eki* yazdığı sözcük korpusta İKİ olarak geçebilir; eşleme kademesi `docs/sayilar.json` içinde her öğede kayıtlıdır. Korpusta tanığı olmayan öbek runiksiz kalır ve alıştırmaya girmez.

> **Uyarı:** `00_Kaynaklar/göktürkçe sayılar.txt` bir **kurs çalışma yaprağıdır**, kaynak değildir (dairesel olurdu) ve içinde doğrulanabilir bir hata taşır: "z: 𐰯". 𐰯 p'dir; z 𐰔'dir. Sayı bilgisi yalnız Tekin 2003'ten alınmıştır.

- **Kaynak:** Korpus `05_Kaynak_DB/orhun-db-v1.json`; çıkarıcı `engine/sayi-tara.mjs`
- **Güven:** yüksek
- **Etiketler:** sayı, runik, yöntem

## Yaygın Hatalar

Bu tablo **korpusla sınandı** (`docs/kural-tabani-denetimi.md`). Üç madde "hata" değil **varyant** çıktı: yazıtlarda ikisi de geçiyor. Bir madde kapsamı daraltılarak korundu. Düzeltilmiş hâli:

| ID | Hatalı | Doğrusu | Kaynak |
|---|---|---|---|
| G4 | Söz sonu ünlüsünü yazmamak | Bütün sözsonu ünlüleri yazılır (ara, kişi, ulayu) | Tekin2003 §22, s. 30 |
| G5 | Kalın/ince ünsüz işaretini karıştırmak | Kutuplu ünsüz, ünlüsüne göre art/ön seçilir (ölçüt için bk. C1) | Tekin2003 §24, s. 31 |
| G6 | Kitabe okurken *gök* sözcüğünü aramak | Yazıtlarda sözcük **kök**'tür, k ile yazılır: 𐰚𐰇𐰚 (KT D 1) / 𐰜𐰇𐰚 (KT D 3). **Gündelik modülü kapsamaz:** orada bugünün Türkçesi yazılır, gök = 𐰏𐰇𐰚. | Korpus: KT D 1, KT D 3 |

### Hata sayılmaktan çıkarılanlar

| ID | Eski iddia | Korpus ne diyor |
|---|---|---|
| G1 | *kök*'ü 𐰜𐰚 yazmak hatalı | **Varyant.** KT D 3'te 𐰜𐰇𐰚 geçiyor — 𐰜 söz başında. Tek atfı kurs içeriğiydi. |
| G2 | *kıldı*'yı 𐰶𐰡𐰃 yazmak hatalı | **Varyant.** Korpusta KILDıM 𐰴𐰃𐰡𐰢 (düz) da var, KIRKıZ 𐰶𐰃𐰺𐰴𐰔 (ligatür) de. "Hatalı" demek fazla kesin. |
| G3 | Ligatürü söz başında kullanmak hata | **Yanlış.** Söz başı ligatür ko/ku'da %75, kı'da %57 baskın (bk. D6). Yalnız kö/kü için doğru. |

Bu üçü de yalnız kurs içeriğine dayanıyordu — kendi ürettiğimiz malzemeyi kural kaynağı saymak dairesel olur.

## Örnek Bankası

### Sözlük (content/sozluk.json ile uyumlu)

| Kelime | Runik |
|---|---|
| adak | 𐰑𐰴 |
| ata | 𐱃𐰀 |
| bay | 𐰉𐰖 |
| bilge | 𐰋𐰃𐰠𐰏𐰀 |
| bir | 𐰋𐰃𐰼 |
| bodun | 𐰉𐰆𐰑𐰣 |
| bol | 𐰉𐰆𐰞 |
| er | 𐰼 |
| esen | 𐰾𐰤 |
| esiz | 𐰾𐰔 |
| kagan | 𐰴𐰍𐰣 |
| kök | 𐰚𐰜 |
| kıldı | 𐰴𐰃𐰡𐰃 |
| oglan | 𐰉𐰍𐰞𐰣 |
| ot | 𐱇 |
| otuz | 𐰆𐱃𐰔 |
| sarıg | 𐰽𐰺𐰃𐰍 |
| tengri | 𐱅𐰭𐰼𐰃 |
| teŋri | 𐱅𐰭𐰼𐰃 |
| yaş | 𐰖𐱁 |

### Yazıt Dizeleri (orhun-db-v1)

- **KT-D-1** — 𐰇𐰔𐰀 : 𐰚𐰇𐰚 : 𐱅𐰭𐰼𐰃 : 𐰽𐰺𐰀 : 𐰖𐰍𐰔 : 𐰘𐰼 : 𐰴𐰃𐰞𐰦𐰸𐰑𐰀
  - Transkripsiyon: `ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA`
- **KT-D-3** — 𐰃𐰓𐰃 : 𐰆𐰴𐰽𐰔 : 𐰜𐰇𐰚 : 𐱅𐰇𐰼𐰜 : 𐰨𐰀 : 𐰆𐰞𐰺𐰆𐰺 : 𐰼𐰢𐰾
  - Transkripsiyon: `İDİ : OKSUZ : KÖK : TÜRK : ANÇA : OLURUR : ERMİŞ`
- **KT-G-1** — 𐱅𐰭𐰼𐰃 : 𐱅𐰏 : 𐱅𐰭𐰼𐰃𐰓𐰀 : 𐰉𐰆𐰞𐰢𐰾 : 𐱅𐰇𐰼𐰜 : 𐰋𐰃𐰠𐰏𐰀 : 𐰴𐰍𐰣
  - Transkripsiyon: `TeŊRİ : TeG : TeŊRİDE : BOLMıŞ : TÜRK : BİLGe : KaGaN`

## Kullanım Notları

- Kural tabanı, ders/quiz/sözlük üretiminde kural kimliği (A1, B5, D6...) ile referanslanabilir.
- guven: 'yüksek' = doğrudan kaynak cümlesiyle desteklenen; 'orta' = pedagojik sentez/örtük çıkarım.
- Bu taban, mevcut content/*.json kurallarıyla çelişmez; çelişki görülürse kaynak cümlesi esas alınır.