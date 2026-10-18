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
- **Kural sayısı:** 46 (6 kategori)

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

- **Kaynak:** Genel (ders içeriğiyle uyumlu)
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

### C1 — Art/ön işaret seçimi ilk heceye göre

Kutuplu ünsüzlerde işaret seçimi, sözcüğün ilk hecesindeki ünlünün kalın (art) ya da ince (ön) oluşuna göre yapılır.

*Sonraki hecelerin ünlüleri değişse bile işaret seçimi ilk heceye bağlıdır.*

- **Kaynak:** Tekin2003 §24, s. 31; Tanyeri s. 8
- **Güven:** yüksek
- **Etiketler:** ünsüz, ünlü uyumu

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

### D6 — Kelime başında ligatür yasağı (eğilimi)

Hece işaretleri (ok/uk, ök/ük, ık/kı, iç/çi gibi) kelime başında, ünsüzle başlayan heceleri yazmak için genellikle tek başına kullanılmaz; önce düz ünsüz harf gelir.

*Örnek: kök → 𐰚𐰜 (düz ince k + ÖK işareti). Ters sıra 𐰜𐰚 hatalıdır. Tekin'de seyrek istisnalar vardır (kılıp, kopın, körtg).*

| Örnek | Not |
|---|---|
| kök 𐰚𐰜 | kurs standardı (ince k + ÖK ligatürü) |
| kök (taş yazımı) 𐰚𐰇𐰚 | KT D 1 — ünlü açık yazılmış |
| kök (varyant) 𐰜𐰇𐰚 | KT D 3 / BK D 4 — ÖK işaretiyle |

- **Kaynak:** Tekin2003 §16-17, s. 29; Kurs içeriği (yedigun-2, kitapcik); Korpus: KT D 1/3
- **Güven:** yüksek
- **Etiketler:** ligatür, konum

### D7 — Kelime sonunda ligatür serbest

Kelime sonundaki ünlü+k heceleri ligatürle yazılabilir; kural gereği serbesttir.

| Örnek | Not |
|---|---|
| türük 𐱅𐰇𐰼𐰜 | KT G 1 — sonda ÖK/ÜK ligatürü |
| bayırku 𐰉𐰖𐰺𐰸𐰆 | KT G 4 — sondaki u yazılır |

- **Kaynak:** Tekin2003 s. 34-35; Kurs içeriği (yedigun-2)
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

## Yaygın Hatalar

| ID | Hatalı | Doğrusu | Kaynak |
|---|---|---|---|
| G1 | kök kelimesini 𐰜𐰚 (ÖK + ince k) biçiminde yazmak | 𐰚𐰜 (ince k + ÖK) | Kurs içeriği: yedigun-2, kitapcik, degerlendirme |
| G2 | kıldı kelimesini 𐰶𐰡𐰃 (IK/KI ligatürü + LD) biçiminde yazmak | 𐰴𐰃𐰡𐰃 (kalın k + I + LD + I) | Kurs içeriği: yapraklar, kitapcik |
| G3 | Ligatürü kelime başında kullanmak (kök → 𐰜𐰚 gibi) | Önce düz ünsüz harf gelir (𐰚), sonra ligatür (𐰜) | Tekin2003 §16-17/§29; Kurs: yedigun-2 konum kısıtı |
| G4 | Söz sonu ünlüsünü yazmamak | Bütün sözsonu ünlüleri yazılır (ara, kişi, ulayu) | Tekin2003 §22, s. 30 |
| G5 | Kalın/ince ünsüz işaretini karıştırmak (k¹ yerine k² veya tersi) | İlk hece ünlüsüne göre art/ön işaret seçilir | Tekin2003 §24, s. 31; Kurs: yedigun-4 quiz |
| G6 | gök kelimesini 𐰏 (g) ile yazmaya çalışmak | Kelime kök'tür; k ile yazılır: 𐰚𐰜 (kurs) / 𐰚𐰇𐰚 (taş yazımı) | Korpus: KT D 1, KT D 3; Kurs sözlüğü |

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