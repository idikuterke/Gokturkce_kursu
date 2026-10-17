# Ceviri istek paketi 18 - Orhun cumlecikleri

Kaynak veri: `docs/cumlecik-adaylari.json`  -  Bu pakette 25 cumlecik
Kanit dosyasi: `docs/ceviri_kanit/kanitlar.jsonl`

## Gorev
Her cumlecik icin `gunumuzTurkcesi`, `tur`, `kaynak` alanlarini doldur.

## Kurallar
1. `id`, `dizeId`, `runik`, `transkripsiyon`, `kelimeAraligi` **degistirilemez**.
2. `kelimeKarsiliklari` ceviri degildir (iki nokta ile ayrilmis kelime kelime karsilik); duzeltmen beklenir.
3. `tur`: gercek, akici ceviri ise `ceviri`; eski sozcuk korunmussa (su, bodun...) `gunumuz_okumasi`.
4. `kaynak`: **asagidaki kanit pasajlarindan** aldigin yayin + sayfa, or. `Tekin 1998, s. 81`. Kaynaksiz kayit reddedilir.
5. Kanit pasaji yoksa ya da tas kirigi (`---`) varsa alanlari **bos birak** - metin uydurulmaz.
6. Ozel adlar (Turk, Bilge, Kagan, Tonyukuk, Oguz, Tabgac) aynen kalir.
7. Kanitta kitabin kendi cevirisi varsa onu temel al; kose parantez `[...]` metinde yazili olmayan anlam sozcukleri icin.

## Teslim bicimi
Tek JSON dosyasi:
`{"cevaplar": [{"id": "...", "gunumuzTurkcesi": "...", "tur": "ceviri", "kaynak": "Tekin 1998, s. 81"}]}`
Sonra: `python scripts/gokturk/cumlecik_uygula.py cevaplar.json`

---


## BK-D-15#1 - Bilge Kağan Yazıtı, Doğu 15. satir  (7 kelime)

- **transkripsiyon:** `TÖRTYiGiRMİ : YaŞIMKA : TaRDUŞ : BODuN : ÜZE : ŞaD : OLuRTıM`
- **kelime karsiliklari:** DÖRT-YİRMİ : YAŞIMDA : TARDUŞ : BOYLARI : ÜZE[RİNE] : ŞAD : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _YaŞIMKA TaRDUŞ BODuN ÜZE_)
    > ...da özüm sekiz yaşda kaltım. Ol (tJörüde üze eçim kağan olurtı. Olurupan Türük bodunuğ yiçe itdi, yiçe iğitti. Çığariyığ bay kıltı, azığ üküş kıltı. Eçim kağan olurtukka özüm tiğin erkl....... [[s. 35]] VE 5, ANAMA | Tefnğri yarlıkaduk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansı...
  - `Tekin 1998, s. 23` (eslesen: _TaRDUŞ BODuN ÜZE ŞaD_)
    > ...(D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ k...
  - `Ata 2011, s. 121` (eslesen: _TaRDUŞ BODuN ÜZE ŞaD_)
    > ...inde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T 25 tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. 114 [s. 122] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim...
  - `Ata 2011, s. 114` (eslesen: _TaRDUŞ BODuN ÜZE ŞaD_)
    > ...ş erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1...


## BK-D-15#2 - Bilge Kağan Yazıtı, Doğu 15. satir  (7 kelime)

- **transkripsiyon:** `eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL : ÖGüZ : ŞaNTUŊ`
- **kelime karsiliklari:** EÇÜM : KAĞAN : İLE : İLERİ : YEŞİL : ÖGÜZ : ŞANTUNG
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...rmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürt...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adlar...
  - `Ata 2011, s. 113` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...sinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır:...


## BK-D-15#3 - Bilge Kağan Yazıtı, Doğu 15. satir  (3 kelime)

- **transkripsiyon:** `YaZIKA : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** OVASINA : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...ra yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Ata 2011, s. 113` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...


## BK-D-15#4 - Bilge Kağan Yazıtı, Doğu 15. satir  (5 kelime)

- **transkripsiyon:** `KURıGaRU : TeMiR : KaPıGKA : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** GERİDE : DEMİR : KAPIYA : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ SÜLeDiMiZ_)
    > ...Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedüki...
  - `Tekin 1998, s. 22` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ_)
    > ...bgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança ti...
  - `Ata 2011, s. 118` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ_)
    > ...geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK K2 yok(k)aru at yete yadagın ıgaç tutunu agturtum “yukarı doğru...


## BK-D-15#5 - Bilge Kağan Yazıtı, Doğu 15. satir  (6 kelime)

- **transkripsiyon:** `KöGMeN : aŞA : KIRKıZ : YİRİŊE : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** KÖGMENİ : AŞIP : KIRGIZ : YERİNE : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _KöGMeN aŞA KIRKıZ YİRİŊE_)
    > ...tı. Eçim kağan olurtukka özüm tiğin erkl....... [[s. 35]] VE 5, ANAMA | Tefnğri yarlıkaduk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Tizliğiğ) (D 16) sökürtümiz, başlığığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığılt...
  - `Tekin 1998, s. 23` (eslesen: _YİRİŊE TeGİ SÜLeDiMiZ_)
    > ...k bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün...
  - `Tekin 1998, s. 19` (eslesen: _YİRİŊE TeGİ_)
    > ...iyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben),...
  - `Ata 2011, s. 120` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...klıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Ata 2011, s. 113` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...ük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...


## BK-D-15#6 - Bilge Kağan Yazıtı, Doğu 15. satir  (3 kelime)

- **transkripsiyon:** `KaMaGI : BİŞOTuZ : SÜLeDiMiZ`
- **kelime karsiliklari:** TAMAMI : BEŞ-OTUZ [KEZ] : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _SÜLeDiMiZ_)
    > ...al tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _SÜLeDiMiZ_)
    > ...yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...
  - `Tekin 2003, s. 127` (eslesen: _KaMaGI_)
    > ...sıl?": *otsuz subsuz kaltı uyın, näçök yorıyın* "Otsuz ve susuz nasıl yapayım, nasıl gezip dolanayım?" (IB 45) ## Belirsizlik Zamirleri **279.** Belirsizlik zamirleri ya da bunlar gibi kullanılan sözcükler şunlardır: *büntägi* "böylesi", *kamag* "her şey", *kamagı* "hepsi, *barı* "hepsi" ve *näŋ* "hiç; herhangi bir" 1. *büntägi* "böylesi, bunun gibisi" < *\*buntägi* < *\*bunı täg+i* *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yönetici...
  - `Ata 2011, s. 52` (eslesen: _KaMaGI_)
    > ...tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış...
  - `Ata 2011, s. 113` (eslesen: _SÜLeDiMiZ_)
    > ...dun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...


## BK-D-15#7 - Bilge Kağan Yazıtı, Doğu 15. satir  (4 kelime)

- **transkripsiyon:** `ÜÇYiGiRMİ : SÜŊüŞDüMiZ : İLLiGiG : İLSiReTDiMiZ`
- **kelime karsiliklari:** ÜÇ-YİRMİ [KEZ] : SÜNGÜŞDÜK : İLLİYİ : İLSİRETTİK
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _SÜŊüŞDüMiZ İLLiGiG İLSiReTDiMiZ_)
    > ...duk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Tizliğiğ) (D 16) sökürtümiz, başlığığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülm...
  - `Tekin 1998, s. 23` (eslesen: _İLLiGiG İLSiReTDiMiZ_)
    > ...lurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir...
  - `Olmez 2017, s. 45` (eslesen: _SÜŊüŞDüMiZ_)
    > ...ld Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 de...


## BK-D-15#8 - Bilge Kağan Yazıtı, Doğu 15. satir  (3 kelime)

- **transkripsiyon:** `KaGaNLıGıG : KaGaNSıRaTDıMıZ : TİZLiGiG`
- **kelime karsiliklari:** KAĞANLIYI : KAĞANSIRATTIK : DİZLİYİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaNLıGıG KaGaNSıRaTDıMıZ TİZLiGiG_)
    > ...odun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ...
  - `Olmez 2017, s. 56` (eslesen: _KaGaNLıGıG KaGaNSıRaTDıMıZ_)
    > ...yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam hakan vefat etti." (MÇ K 12); *ėlligig ėlsiretdimiz kaganlıgıg kagansıratdımız* "Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18); *temir kapıgka tegi ertimiz anta yanturtumuz* "Temir Kapıg'a kadar ulaştık. (Orduyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçü...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLıGıG_)
    > ...Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar)...
  - `Tekin 2003, s. 215` (eslesen: _KaGaNLıGıG_)
    > ...için, ölecek halkı diriltip doyurdum" (BK D 33) - *üzä täŋri as[ra] yer yarlıkadok üç[ün]... bodunumın... konturtum* "Yukarıda gök aşağıda (da) toprak (öyle) buyurduğu için... halkımı... yerleştirdim" (BK K 10-11) - *täŋri yarlıkadok üçün, illigig ilsirätmiş, kaganlıgıg kagansıratmiş...* "(Babam Hakan), Tanrı (öyle) buyurduğu için devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış..." (KT D 15, BK D 13), vb. [s. 216] # s. 216 — TALAT TEKİN ## Ara Cümle **491.** Bir birleşik cümlenin ya bağımlı yan cümlesi ya da te...
  - `Tekin 2003, s. 182` (eslesen: _TİZLiGiG_)
    > ...uda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devletini zapt ettik" (KT D 36) - *tizligig sökür-tümüz başlıgıg yüküntür-tümüz* "Dizliyi (güçlüyü) çökerttik, başlıya (mağrura) baş eğdirdik" (KT D 18, BK D 15-16) - *bir yılka beş yolı süŋüş-dümüz* "Bir yılda beş kez savaştık" (KT K 4) - *kagan at bunta biz bir-timiz* "Hakan unvanını burada (ona) biz...
  - `Ata 2011, s. 47` (eslesen: _TİZLiGiG_)
    > ...ta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş d...


## BK-D-16#1 - Bilge Kağan Yazıtı, Doğu 16. satir  (3 kelime)

- **transkripsiyon:** `SÖKüRTüMiZ : BaŞLıGıG : YÜKÜNDüRTüMiZ`
- **kelime karsiliklari:** ÇÖKTÜRDÜK : BAŞLIYI : YÜKÜNDÜRDÜK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _SÖKüRTüMiZ BaŞLıGıG_)
    > ...ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL...
  - `Tekin 1998, s. 11` (eslesen: _BaŞLıGıG_)
    > ...mak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren a...
  - `Tekin 2003, s. 182` (eslesen: _BaŞLıGıG_)
    > ...35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devletini zapt ettik" (KT D 36) - *tizligig sökür-tümüz başlıgıg yüküntür-tümüz* "Dizliyi (güçlüyü) çökerttik, başlıya (mağrura) baş eğdirdik" (KT D 18, BK D 15-16) - *bir yılka beş yolı süŋüş-dümüz* "Bir yılda beş kez savaştık" (KT K 4) - *kagan at bunta biz bir-timiz* "Hakan unvanını burada (ona) biz verdik" (KT D 20) [...
  - `Ata 2011, s. 47` (eslesen: _BaŞLıGıG_)
    > ...ra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini,...
  - `Olmez 2017, s. 105` (eslesen: _BaŞLıGıG_)
    > ...5) +le-: isimden fiil yapma eki -pen: zarffiil eki **buluŋdakı** < *buluŋ+da+kı* "tarafftaki" buluŋ: isim tabanı +da: bulunma/ayrılma durumu eki +kı: aitlik eki **almış** < *al-mış* "ele geçirmiş" al-: fiil tabanı -mış: öğrenilen geçmiş zaman eki **başlıgıg** < *baş+lıg+(ı)g* " başlıları (mağrurları)" baş: isim tabanı +lıg: isimden sıfat yapma eki +(ı)g: belirtme durumu eki **yüküntürmiş** < *yükün-tür-miş* "secde ettirmiş" (< \**yük-(ü)n-) yükün-: fiil tabanı -tür-: fiilden fiil (ettirgenlik) yapma ek...
  - `Ata 2011, s. 40` (eslesen: _BaŞLıGıG_)
    > ...i asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devleti...


## BK-D-16#2 - Bilge Kağan Yazıtı, Doğu 16. satir  (5 kelime)

- **transkripsiyon:** `TÜRGiŞ : KAGaN : TÜRÜKüM : BUDuNIM : eRTİ`
- **kelime karsiliklari:** TÜRGİŞ : KAĞANI : TÜRKÜM : BOYLARIM : İDİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TÜRGiŞ KAGaN TÜRÜKüM_)
    > ...i süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KAGaN_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi y...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGiŞ KAGaN_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] B...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KAGaN_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KAGaN_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli...
  - `Kafesoglu, s. 72` (eslesen: _TÜRGiŞ KAGaN_)
    > .... 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıllar (711-714) Mâveraünnehir'de meşhur Kuteybe b. Müsl...


## BK-D-16#3 - Bilge Kağan Yazıtı, Doğu 16. satir  (8 kelime)

- **transkripsiyon:** `BİLMeDÜKiN : ÜÇÜN : BİZiŊE : YaŊıLDUKIN : YaZINDUKIN : ÜÇÜN : KaGaNI : ÖLTİ`
- **kelime karsiliklari:** BİLEMEDİĞİ : İÇİN : BİZE : YANILDIĞI : YAZINDIĞI : İÇİN : KAĞANI : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _BİLMeDÜKiN ÜÇÜN BİZiŊE_)
    > ...edimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Tizliğiğ) (D 16) sökürtümiz, başlığığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülmiz apamız tutmış yilr sulb idi)siz kalmazun (tiylin (Az bodunuğ itip yaratıp AN ARAR Bars, beğ| (D 17) erti. Kağan atığ bunta biz birtimiz. ORHON YAZITLARI...
  - `Tekin 1998, s. 23` (eslesen: _ÜÇÜN KaGaNI ÖLTİ_)
    > ...imiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş...
  - `Tekin 2003, s. 120` (eslesen: _ÜÇÜN KaGaNI ÖLTİ_)
    > ...na köle oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı hareket [s. 121] # s. 121 — ORHON TÜRKÇESİ GRAMERİ ettikleri için hakanları öldü" (BK D 16) *alp är biziŋä tägmiş ärti* "Cesur erler bize saldırmıştı" (KT D 0) 5. Bulunma-çıkma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki...


## BK-D-16#4 - Bilge Kağan Yazıtı, Doğu 16. satir  (4 kelime)

- **transkripsiyon:** `BUYRUKI : BeGLeRİ : YiME : ÖLTİ`
- **kelime karsiliklari:** BUYRUĞU : BEĞLERİ : YİNE : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...ı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, b...
  - `Ata 2011, s. 122` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (tiyin, tip) tiyi...
  - `Ata 2011, s. 115` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...ket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim”...
  - `Tekin 1998, s. 10` (eslesen: _BUYRUKI_)
    > ...rçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar...
  - `Tekin 2003, s. 157` (eslesen: _BUYRUKI_)
    > ......Saray kumandanları, Sebig Kül İrkin önderliğinde, ve (diğer) kumandanlar..." (BK G 14) **373.** *yämä* "ve, dahi, ... da" (< *\*yäm-* "ilave etmek, eklemek"; krş. Mo. *neme-* ay.; bk. Poppe 1960, s. 38): 1. Tek başına: *bilgä kagan ärmiş, alp kagan ärmiş; buyrukı yämä bilgä ärmiş ärinç, alp ärmiş ärinç* "Akıllı hakanlar imiş, yiğit hakanlar imiş; kumandanları da akıllı imişler şüphesiz, yiğit imişler şüphesiz" (KT D 3) *kagani ölti, buyrukı bägläri yämä ölti* "Hakanları öldü, kumandanları ve beyleri de öldü" (KT D 19,...
  - `Ata 2011, s. 51` (eslesen: _BUYRUKI_)
    > ...rihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg...


## BK-D-16#5 - Bilge Kağan Yazıtı, Doğu 16. satir  (5 kelime)

- **transkripsiyon:** `ON : OK : BODuN : eMGeK : KÖRTİ`
- **kelime karsiliklari:** ON : OK : BOYLARI : EMEK : GÖRDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _ON OK BODuN eMGeK KÖRTİ_)
    > ...ğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi im...
  - `Kafesoglu, s. 63` (eslesen: _ON OK BODuN_)
    > ...ı bk. yk. n. 270; ayrıca kendine bağlı Batı Gök-Türk halkı "Yabgu kabileleri, Yabgu Türkleri" diye de anılıyordu. Bk. Ed. Chavannes. ayn. [s. 62] esr, s. 21,95 n. 3,219; Liu, ayn. esr., II, s. 722. [s. 63] 104/ TÜRK MİLLÎ KÜLTÜRÜ TARİH/105 bodunun (sonraki "On-ok" bodun'u; buradaki "on büyük başbuğ" ona bağlanmıştı) başında olduğu için kitabelerde ve bir Bizans kaynağında290 "kağan1' diye zikredilen bu büyük şahsiyetin ölümünü, yukarıda adı geçen Türk-şad'ın sözlerinden öğreniyoruz. Onu sinirlendiren hususlardan biri de, öle...
  - `Tekin 1998, s. 6` (eslesen: _ON OK_)
    > ...nların [s. 6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur! [[s. 6]] İşte yukarıda açıklamaya çalıştığım...
  - `Ergin 1970, s. 14` (eslesen: _ON OK_)
    > ...bedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. Benim sözümü kırmadı, | Çin kağanının maiyetindeki resimciyi gönderdi. Ona bambaşka türbe yaptırdım. İçine dışına bambaşka resim vurdurdum. Taş yontturdum. Gönüldeki sözümü vurdurdum....... On Ok oğluna, yabancına kadar bunu görüp bilin. Ebedî taş | yontturdum..... il ise, şöyle daha erişilir yerde ise, işte öyle erişilir yerde ebedî taş yontturdum, yazdırdım. Onu görüp öyle bilin. Şu taş....dım. [[s. 14]] Bu yazıyı yazan yeğeni Yollug Tigin. Doğu cep...
  - `Tekin 2003, s. 111` (eslesen: _ON OK_)
    > ...ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da [s. 111] # s. 111 — ORHON TÜRKÇESİ GRAMERİ {+n+kA} biçiminden geliyor olmalıdır: *kurıgaru kün batsıkı+ŋa* "Geride gün batısına (kadar)" (KT G 2) *on ok oglı+ŋa tatı+ŋa tägi* "On Ok oğullarına ve (onlara bağımlı olan) yabancılara kadar" (BK K 15) *süçig sabı+ŋa yimşak agısı+ŋa arturup* "Tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp" (KT G 6) *yazı+ŋa oguzgaru sü taşıkdımız* "(O yılın) ilkbaharında o...
  - `Ata 2011, s. 120` (eslesen: _ON OK_)
    > ...ce, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört...


## BK-D-16#6 - Bilge Kağan Yazıtı, Doğu 16. satir  (3 kelime)

- **transkripsiyon:** `eÇÜMiZ : aPAMıZ : TUTMıŞ`
- **kelime karsiliklari:** EÇÜMÜZÜN : APAMIZIN : TUTMUŞ [OLDUĞU]
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...3]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) ko...
  - `Radloff, s. 249` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...e yükselmiştir. Gök Türk İmparatorluğu devrin de Yer-su ruhlarının mahiyetini (niteliğini) Orhon yazıtlarından anlamak mümkündür. Gök Türklerin "ıduk yer-sub" (mukad des yer-su) ile ifade ettikleri mefhum (kavram) hem koruyucu ruhlar hem vatan idi. [[s. 249]] Eçümiz apamız tutmış yer-sub (atalarımı zın idare ettiği yer-su) cümlesindeki yer-su vatan kültü olan yer su' dur. Kült olan bu vatan yer-suyu Ötügeı; ve Budun İnli dağ ları ve ormanları temsil ediyorlardı. Bu mukaddes yer-su ruhla rı Gök Türklerin mukadderatını idare ediyorlardı...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 54` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...vatan kültü derecesine yükselmiştir. Gök Türk imparatorluğu dev rinde Yer-su ruhlarının mahiyetini Orhon yazıtlarından anla mak mümkündür. Gök Türklerin “ ıduk yer-sub” (mukaddes yer-su) ile ifade ettikleri mefhum hem koruyucu ruhlar hem va tan idi. [[s. 54]] Eçümiz apamız tutmış yer-sub (atalarımızın idare et tiği yer-su) cümlesindeki yer-su vatan kültü olan yer-su’dur. Kült olan bu vatan yer-suyu ötügen ve Budun inli dağ ları ve ormanları temsil ediyorlardı. Bu mukaddes yer-su ruhları Gök Türklerin mukadderatını idare ediyorlardı (T...


## BK-D-16#7 - Bilge Kağan Yazıtı, Doğu 16. satir  (12 kelime, TAS KIRIGI)

- **transkripsiyon:** `YİR : SUB : İDSiZ : KaLMaZUN : TİYiN : aZ : BODuNıG : İTiP : YaRaTıP : --- : BarS : BeG`
- **kelime karsiliklari:** YER : SU : ISSIZ : KALMASIN : DİYE : AZ : BOYLARINI : [DÜZEN] EDİP : YARATIP : --- : BARS : BEĞ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaLMaZUN TİYiN aZ_)
    > ...psiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (er...
  - `Tekin 1998, s. 10` (eslesen: _YİR SUB_)
    > ...lesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, b...
  - `Tekin 2003, s. 80` (eslesen: _YİR SUB_)
    > ...ler. Yalın gövdeler *ab* "av", *taş* "dış", *käl-* "gelmek" gibi daha fazla çözümlenemeyen gövdelerdir. Türeme gövdeler yalın gövdelerden ya ekleme ya da birleştirme yolu ile elde edilen gövdelerdir: *abla-* "avlamak", *taşık-* "çıkmak", *kälür-* "getirmek", *yir-sub* "bölge, ülke" (*yir* "yer, toprak", *sub* "su, ırmak"). Orhon Türkçesi biçimbilgisinin önemli özelliklerinden biri yakın kavramları belirten ad ve eylem gövdelerinin kesin olarak birbirinden ayırt edilmesidir. Eşsesli ad ve eylem gövdeleri son derece azdır:...
  - `Ata 2011, s. 138` (eslesen: _YİR SUB_)
    > ...letsiz kalmış (ve) kağansız kalmış halk” KT D13 yir sayu bar-mış bodun “her yere gitmiş halk” BK D22 er-miş bar-mış edgü eliŋe kentü yaŋıltıg “gelişmiş ilerlemiş (senin) iyi devletine kendin yanlış yaptın” KT D23 eçümüz apamız tut-mış yir sub “atalarımızın dedelerimizin elde ettiği topraklar” KT D19 131 [s. 139] 7. -tAçI gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halk...
  - `Tekin 1998, s. 23` (eslesen: _TİYiN aZ_)
    > ...atdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya...
  - `Tekin 1998, s. 35` (eslesen: _İTiP YaRaTıP_)
    > ...ğığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülmiz apamız tutmış yilr sulb idi)siz kalmazun (tiylin (Az bodunuğ itip yaratıp AN ARAR Bars, beğ| (D 17) erti. Kağan atığ bunta biz birtimiz. ORHON YAZITLARI 67 halkı, cariye olmuş, kul olmuş halkı, Türk örf ve adetlerini (bırakmış) (D 12) halkı, atalarımın dedelerimin töresince (yeniden) yaratmış (ve) eğitmiş. [[s. 35]] Tölis (ve)...


## BK-D-17#1 - Bilge Kağan Yazıtı, Doğu 17. satir  (6 kelime)

- **transkripsiyon:** `eRTİ : KaGaN : aTıG : BUNDA : BİZ : BİRTiMiZ`
- **kelime karsiliklari:** İDİ : KAĞAN : ADINI : BUNDAN : BİZ : VERDİK
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _eRTİ KaGaN aTıG_)
    > ...küm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülmiz apamız tutmış yilr sulb idi)siz kalmazun (tiylin (Az bodunuğ itip yaratıp AN ARAR Bars, beğ| (D 17) erti. Kağan atığ bunta biz birtimiz. ORHON YAZITLARI 67 halkı, cariye olmuş, kul olmuş halkı, Türk örf ve adetlerini (bırakmış) (D 12) halkı, atalarımın dedelerimin töresince (yeniden) yaratmış (ve) eğitmiş. [[s. 35]] Tölis (ve) Tarduş halklarını o vakit düzenlemiş. Yabgu...
  - `Tekin 1998, s. 23` (eslesen: _eRTİ KaGaN_)
    > ...Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13)...
  - `Tekin 2003, s. 225` (eslesen: _KaGaN aTıG_)
    > ...i] Çoruŋ oglı Yigän Çor kälti. (2) [an]in üçün bunça bodun kuburap yogladı. Bän Tärbän m[än]. (3) Bilmäz biligin, biltökümün, ödökümün bunça bitig bitidim. # Taryat (Terhin) Yazıtı (753) ## Batı Yüzü (1) Täŋridä bolmış, El-etmiş Bilgä kagan, El Bilgä katun kagan atıg katun atıg atanıp Ötükän kedin uçınta, Täz başınta, örgin [anta etitdim, çıt] anta yaratıtdım. Bars yılka, yılan yılka eki yıl (2) yayladım. Ulu yılıka Ötükän ortosınta, As Öŋüz Baş, Kan Iduk Baş kedinintä yayladım. Örgin bunta yaratı(t)dım, çıt bunta tokıtdı...
  - `Tekin 2003, s. 107` (eslesen: _BİZ BİRTiMiZ_)
    > ...li nesne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti*...
  - `Ata 2011, s. 119` (eslesen: _BİZ BİRTiMiZ_)
    > ...başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılı...
  - `Ata 2011, s. 112` (eslesen: _BİZ BİRTiMiZ_)
    > ...berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. [[s. 112]] +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s....


## BK-D-17#2 - Bilge Kağan Yazıtı, Doğu 17. satir  (3 kelime)

- **transkripsiyon:** `SİŊiLiM : KONÇuYUG : BİRTiMiZ`
- **kelime karsiliklari:** SİNGİLİM : KONÇUYU : VERDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BİRTiMiZ_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşlar...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiMiZ_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti*...
  - `Ata 2011, s. 112` (eslesen: _BİRTiMiZ_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövdele...
  - `Tekin 1998, s. 24` (eslesen: _SİŊiLiM_)
    > ...nları (ve) beyleri de öldü. On-Ok halkı ıztırap gördü. Atalarımızın dedelerimizin zaptettiği yurt sahipsiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança it...
  - `Ata 2011, s. 105` (eslesen: _BİRTiMiZ_)
    > ...s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. [[s. 105]] +(I)n: İyelik ekli gövdeler üze...


## BK-D-17#3 - Bilge Kağan Yazıtı, Doğu 17. satir  (4 kelime)

- **transkripsiyon:** `ÖZİ : YaZıNDI : KaGaNI : ÖLTİ`
- **kelime karsiliklari:** ÖZÜ : YAZINDI : KAĞANI : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaNI ÖLTİ_)
    > ...(D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş...
  - `Tekin 2003, s. 120` (eslesen: _KaGaNI ÖLTİ_)
    > ...le oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı hareket [s. 121] # s. 121 — ORHON TÜRKÇESİ GRAMERİ ettikleri için hakanları öldü" (BK D 16) *alp är biziŋä tägmiş ärti* "Cesur erler bize saldırmıştı" (KT D 0) 5. Bulunma-çıkma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki...
  - `Ata 2011, s. 122` (eslesen: _KaGaNI ÖLTİ_)
    > ...lduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (...
  - `Ata 2011, s. 115` (eslesen: _KaGaNI ÖLTİ_)
    > ...“yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNI_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı...
  - `Ergin 1970, s. 5` (eslesen: _KaGaNI_)
    > ...E L E R İ [s. 5] devletinin Göktürk hanedanı devrini açtı. O devirde büyük kağanlığın merkezi devletin doğu kısmmda idi ve batı kısmı da doğuya bağlı tabi bir kağanlıkla idare ediliyordu. Bumin Kağan'ın kardeşi İstemi Kağan da 576'ya kadar bu batı bölümünün kağanı idi. Bumin Kağan, Göktürk hakimiyetini kurduğu sene içinde öldü ve sırasıyla üç oğlu, büyük kağanlık yaptılar. Birincisi 553'te, ikincisi 553-572'de, üçuncüsü de 572-581 tarihlerinde hüküm sürdüler. [[s. 5]] Bunlardan ikincisi olan Mukan zamanında devlet Manç...


## BK-D-17#4 - Bilge Kağan Yazıtı, Doğu 17. satir  (4 kelime)

- **transkripsiyon:** `BODuNI : KÜŊ : KUL : BOLDI`
- **kelime karsiliklari:** BOYLARI : CARİYE : KUL : OLDU
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BODuNI KÜŊ KUL_)
    > ...alarımızın dedelerimizin zaptettiği yurt sahipsiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtum...
  - `Tekin 2003, s. 211` (eslesen: _BODuNI KÜŊ KUL_)
    > ...**479.** Cümlede normal sözcük düzeni şöyledir: özne + yüklem. - *katun / yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *özi / yaŋıltı* "Kendisi ihanet etti" (KT D 20) [s. 211] # s. 211 — ORHON TÜRKÇESİ GRAMERİ - *kagani / ölti* "Hakanı öldü" (KT D 20) - *boduni / küŋ kul boltı* "Halkı cariye ve köle oldu" (KT D 20), vb. Tümleç (nesne, vb.), normal olarak yüklemden önce ve özneden sonra gelir: - *oguz yagı / ordug / basdı* "Düşman Oğuz karargâhı bastı" (T 31) Bazı durumlarda, özellikle öznenin vurgulanması istendiğinde, cüml...
  - `Tekin 2003, s. 194` (eslesen: _KÜŊ KUL_)
    > ...iş* "kervanlar" (KT G 8) - *at kü* "ad ve ün, ad ve san" (KT D 25) - *bag bodun* "boylar ve kabileler federasyonu" (Uyuk-Tarlak 2) - *bäglär bodun* "beyler ve halk" (KT G 10, BK K 8) - *äb bark* "ev bark" (BK D 32) - *kız koduz* "kızlar ve kadınlar" (T 48) - *küŋ kul* "cariye ve erkek köle" (KT D 20) - *kurt koŋuz* "börtü böcek" (Toyok 28-29) - *yabız yablak* "sefil ve perişan" (KT D 26) - *yok çıgañ* "yok yoksul" (KT G 10), vb. İki ya da daha çok addan oluşan ad öbeklerinde iyelik ve durum ekleri [s. 195] # s. 195 — OR...
  - `Ogel C1, s. 642` (eslesen: _KÜŊ KUL_)
    > ...krşl. Küldrâ-/ Küld(ü)râ-, 401. Kül-Tegin, 550. Külüg, unvanı, 350. Kümüş-Han, 394, Tegin, 399. Künçe/Künçâ, sözü, 243. Künçek, adı, 243. Küne, sözü, 213. Küneş, k.a., 261. Küngey d., 527. Kün-delen, b.a., 213, Kün-Han, efs. de, 148, 221, 527, 529. Kün-Kulak, 540, bk. Dev. Künin-Körkli Hatun, 268. [[s. 642]] Kür-Han, 60-2, 151, 156 v.d., 221, 287, 473, bk. Gur-Han. Kür-Kalık, 151. Kür-tag, 151, 172. Kürk : Devin k.ü, 60, 577; 8 k., 60. Küsenç, sözü, 227; küsen-mek, a. yer. Küykenek/Küyköntei, kuş, 359....
  - `Tekin 1998, s. 19` (eslesen: _BODuNI_)
    > ...GİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış...
  - `Tekin 2003, s. 107` (eslesen: _BODuNI_)
    > ...6.** /+(n)Iŋ/: - *yigän silig bäg+iŋ kädimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların a...


## BK-D-17#5 - Bilge Kağan Yazıtı, Doğu 17. satir  (13 kelime)

- **transkripsiyon:** `KÖGMeN : YİR : SUB : İDSiZ : KaLMaZUN : TİYiN : aZ : KIRKıZ : BODuNıG : İTiP : İTiP : YaRaTıP : KeLTiMiZ`
- **kelime karsiliklari:** KÖGMEN : YERİ : SUYU : ISSIZ : KALMASIN : DİYE : AZ : KIRGIZ : BOYLARINI : [DÜZEN] EDİP : EDİP : YARATIP : GELDİK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaLMaZUN TİYiN aZ KIRKıZ_)
    > ...psiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, kün...
  - `Tekin 1998, s. 10` (eslesen: _YİR SUB_)
    > ...lesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, b...
  - `Tekin 2003, s. 80` (eslesen: _YİR SUB_)
    > ...ler. Yalın gövdeler *ab* "av", *taş* "dış", *käl-* "gelmek" gibi daha fazla çözümlenemeyen gövdelerdir. Türeme gövdeler yalın gövdelerden ya ekleme ya da birleştirme yolu ile elde edilen gövdelerdir: *abla-* "avlamak", *taşık-* "çıkmak", *kälür-* "getirmek", *yir-sub* "bölge, ülke" (*yir* "yer, toprak", *sub* "su, ırmak"). Orhon Türkçesi biçimbilgisinin önemli özelliklerinden biri yakın kavramları belirten ad ve eylem gövdelerinin kesin olarak birbirinden ayırt edilmesidir. Eşsesli ad ve eylem gövdeleri son derece azdır:...
  - `Ata 2011, s. 138` (eslesen: _YİR SUB_)
    > ...letsiz kalmış (ve) kağansız kalmış halk” KT D13 yir sayu bar-mış bodun “her yere gitmiş halk” BK D22 er-miş bar-mış edgü eliŋe kentü yaŋıltıg “gelişmiş ilerlemiş (senin) iyi devletine kendin yanlış yaptın” KT D23 eçümüz apamız tut-mış yir sub “atalarımızın dedelerimizin elde ettiği topraklar” KT D19 131 [s. 139] 7. -tAçI gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halk...
  - `Tekin 1998, s. 23` (eslesen: _TİYiN aZ_)
    > ...atdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya...
  - `Tekin 1998, s. 35` (eslesen: _İTiP YaRaTıP_)
    > ...ğığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülmiz apamız tutmış yilr sulb idi)siz kalmazun (tiylin (Az bodunuğ itip yaratıp AN ARAR Bars, beğ| (D 17) erti. Kağan atığ bunta biz birtimiz. ORHON YAZITLARI 67 halkı, cariye olmuş, kul olmuş halkı, Türk örf ve adetlerini (bırakmış) (D 12) halkı, atalarımın dedelerimin töresince (yeniden) yaratmış (ve) eğitmiş. [[s. 35]] Tölis (ve)...


## BK-D-17#6 - Bilge Kağan Yazıtı, Doğu 17. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `SÜŊüŞDüMüZ : --- : İLİN : YaNA : BİRTiMiZ`
- **kelime karsiliklari:** SÜNGÜŞDÜK : --- : İLİNİ : YİNE : VERDİK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _YaNA BİRTiMiZ_)
    > ...an ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümi...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 23` (eslesen: _BİRTiMiZ_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşlar...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiMiZ_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti*...
  - `Ata 2011, s. 112` (eslesen: _BİRTiMiZ_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövdele...


## BK-D-17#7 - Bilge Kağan Yazıtı, Doğu 17. satir  (7 kelime)

- **transkripsiyon:** `iLGeRÜ : KaDıRKaN : YıŞıG : aŞA : BODuNıG : aNÇA : KONDURTuMıZ`
- **kelime karsiliklari:** İLERİ : KADIRKAN : YIŞI : AŞIP : BOYLARI : ANCA : KONDURDUK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _iLGeRÜ KaDıRKaN YıŞıG aŞA_)
    > ...ada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğler...
  - `Tekin 1998, s. 21` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...e eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış eri...
  - `Ata 2011, s. 51` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...g hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç...
  - `Olmez 2017, s. 103` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...pam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönderip dört taraftaki ha...
  - `Ata 2011, s. 44` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...eyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig...
  - `Ogel C2, s. 385` (eslesen: _YıŞıG aŞA_)
    > ...etini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (tuşı)), Er-Kamış*ın altından sal...


## BK-D-17#8 - Bilge Kağan Yazıtı, Doğu 17. satir  (3 kelime)

- **transkripsiyon:** `aNÇA : İTDiMiZ : KURıGaRU`
- **kelime karsiliklari:** ANCA : EĞİTTİK : GERİDE
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _aNÇA İTDiMiZ KURıGaRU_)
    > ...ingilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir t...
  - `Tekin 1998, s. 11` (eslesen: _KURıGaRU_)
    > ...gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpü...
  - `Tekin 2003, s. 62` (eslesen: _KURıGaRU_)
    > ...*türük* (genellikle) ## Sonseste Ünlü Düşmesi **96.** Sonseste ünlü düşmesi şu örneklerde meydana gelmiş olmalıdır: - *birdin* "güneyden", *biryä* "güneyde", *birgärü* "güneye doğru" sözcüklerinin kökü *bir* "güney" < *biri - *kurgaru* (KT D 24, G 2, 3) ~ *kurıgaru* "batıya doğru" (KT D 8, 12, 17, 21, vb.) < *kurı "geri, batı" - *yırgaru* "kuzeye doğru", *yırd(ı)nta* "kuzeyden" sözcüklerinin kökü *yır* "kuzey" (KT, BK, T) ~ *ir* (MÇ D 7, 11) < *yırı - *kül tigin* "Prens Kül" (KT, BK), *kül çor* "Kül Çor" (BK G 13) ~ *kü...
  - `Ata 2011, s. 52` (eslesen: _KURıGaRU_)
    > ...rmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam tör...
  - `Olmez 2017, s. 21` (eslesen: _KURıGaRU_)
    > ...geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, ku...
  - `Tekin 2003, s. 72` (eslesen: _İTDiMiZ_)
    > ...(k)ärü* "(hizmet) verdiği konusunda" (BK D 9) < *birtökgärü* (KT D 10) - *yok(k)aru* "yukarı" (T 25) < **yokgaru* (krş. Çağ. *yoqqari* ay.) 3. /td/ > /tt/: - *agıt(t)ım* "kaçırttım, sürdüm" (BK D 31) < **agıtdım* - *akıt(t)ımız* "akın ettirdik" (KT K 8) < *akıtdımız* (T 31) - *bädzät(t)i* "süsletti" (KÇ D 12) < **bädzätdi* - *bädzät(t)im* "süslettim" (KT G 11; BK GB) < **bädzätdim* - *kubrat(t)ım* "derleyip topladım" (BK K 7) < **kubratdım* - *olort(t)ı* "tahta oturttu" (KÇ D 12) < **olortdı* - *sämrit(t)i* "semirtti" (I...


## BK-D-18#1 - Bilge Kağan Yazıtı, Doğu 18. satir  (7 kelime)

- **transkripsiyon:** `KeŊÜ : TaRBaNKA : TeGİ : TÜRK : BODuNıG : aNÇA : KONDuRTuMıZ`
- **kelime karsiliklari:** KENGÜ : TARMANA : DEĞİN : TÜRK : BOYLARINI : ANCA : KONDURDUK
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _TaRBaNKA TeGİ_)
    > ...ıntı. Kağanı ölti, bodunı küfiğ kul boltı. Köğmen yir sub idisiz kalI)mazun tiyin Az Kırkız bodunuğ iltip) yaratıp keltimliz sJünğüşldümiz......... yana birtimiz. İlgerü) Kadırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basm...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...


## BK-D-18#2 - Bilge Kağan Yazıtı, Doğu 18. satir  (7 kelime)

- **transkripsiyon:** `aNÇA : iTDiMiZ : OL : ÖDKE : KUL : KULLuG : KÜŊ`
- **kelime karsiliklari:** ANCA : [DÜZEN] ETDİK : O : DEVİRDE : KUL : KULLUK : CARİYE
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _aNÇA iTDiMiZ OL ÖDKE_)
    > ...n yir sub idisiz kalI)mazun tiyin Az Kırkız bodunuğ iltip) yaratıp keltimliz sJünğüşldümiz......... yana birtimiz. İlgerü) Kadırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin...
  - `Tekin 1998, s. 24` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin)...
  - `Ata 2011, s. 137` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (ve) yiğit kişileri ilerletmez imiş” KT G6 Uzak Geçmiş Zaman mIş ekli anlatılan geçmiş zaman eki üzerine er- yardımcı fiili getirilerek yapılır: 1. -mIş erti (belirsiz geçmiş zamanın hikâyesi) ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu b...
  - `Ata 2011, s. 130` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...p kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (ve) yiğit kişileri ilerletmez imiş” KT G6 Uzak Geçmiş Zaman mIş ekli anlatılan geçmiş zaman eki üzerine er- yardımcı fiili getirilerek yapılır: 1. -mIş erti (belirsiz geçmiş zamanın hikâyesi) ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun [[s. 130]] cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu bar-mış er...
