# Ceviri istek paketi 37 - Orhun cumlecikleri

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


## TY2-B-6#2 - Tonyukuk Yazıtı, Batı 6. satir  (5 kelime)

- **transkripsiyon:** `YaYDıMıZ : KaGaNIN : TUTDUMUZ : YABGUSIN : ŞADIN`
- **kelime karsiliklari:** YAYDIK : KAĞANINI : TUTTUK : YABGUSUNU : ŞADINI
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _YABGUSIN ŞADIN_)
    > ...asınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz....
  - `Tekin 2003, s. 109` (eslesen: _TUTDUMUZ_)
    > ...ürklerime ve halkıma kazanıverdim, ediniverdim" (BK K 11-12) *kül tiginiŋ altunı+n kümüşi+n* "Prens Kül'ün altınlarını, gümüşlerini" (KT GB) *äbi+n barımi+n* "evlerini ve mallarını" (KT K 1) *[o]gli+n yutuzi+n* "çocuklarını ve kadınlarını" (BK D 38) *kagani+n tutdumuz, yabgusi+n şadi+n anta ölürti* "Hakanlarını tuttuk, yabgularını ve şadlarını orada öldürdüler" (T 41-42) *ogli+n yutuzi+n yılkısi+n barımi+n anta altım* "Çocuklarını, kadınlarını, at sürülerini ve mallarını orada aldım" (BK D 24) **262.** {+nI}. Bu ek birkaç...
  - `Olmez 2017, s. 53` (eslesen: _TUTDUMUZ_)
    > ...Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalarda araç veya vasıta durumu da denir. *bir erig ok+un urdı* "(Prens Kül) bir askeri ok ile vurdu" (KT...


## TY2-B-7#1 - Tonyukuk Yazıtı, Batı 7. satir  (5 kelime)

- **transkripsiyon:** `aNDA : ÖLüRTİ : eLiGÇE : eR : TUTDuMuZ`
- **kelime karsiliklari:** ANDA : ÖLDÜRDÜK : ELLİCE : ER : TUTTUK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _ÖLüRTİ eLiGÇE eR_)
    > ...Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “T...
  - `Olmez 2017, s. 53` (eslesen: _eLiGÇE eR TUTDuMuZ_)
    > ...lalettir (Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalarda araç veya vasıta durumu da denir. *bir erig ok+un urdı* "(Prens Kül) bir askeri ok ile vurdu" (KT...
  - `Tekin 2003, s. 109` (eslesen: _TUTDuMuZ_)
    > ...ürklerime ve halkıma kazanıverdim, ediniverdim" (BK K 11-12) *kül tiginiŋ altunı+n kümüşi+n* "Prens Kül'ün altınlarını, gümüşlerini" (KT GB) *äbi+n barımi+n* "evlerini ve mallarını" (KT K 1) *[o]gli+n yutuzi+n* "çocuklarını ve kadınlarını" (BK D 38) *kagani+n tutdumuz, yabgusi+n şadi+n anta ölürti* "Hakanlarını tuttuk, yabgularını ve şadlarını orada öldürdüler" (T 41-42) *ogli+n yutuzi+n yılkısi+n barımi+n anta altım* "Çocuklarını, kadınlarını, at sürülerini ve mallarını orada aldım" (BK D 24) **262.** {+nI}. Bu ek birkaç...
  - `Tekin 1998, s. 23` (eslesen: _ÖLüRTİ_)
    > ...üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süle...
  - `Ata 2011, s. 122` (eslesen: _ÖLüRTİ_)
    > ...bulunma-çıkma durumu ekiyle de kullanılır. 114 [s. 122] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bun...
  - `Ata 2011, s. 115` (eslesen: _ÖLüRTİ_)
    > ...e şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm...


## TY2-B-7#2 - Tonyukuk Yazıtı, Batı 7. satir  (6 kelime)

- **transkripsiyon:** `OL : OK : TÜN : BODuNIN : SaYU : ITıMıZ`
- **kelime karsiliklari:** O : OK : GECE : BOYLARINA : SAYI : İTTİK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _OL OK TÜN BODuNIN_)
    > ...ün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ...
  - `Tekin 2003, s. 151` (eslesen: _OL OK TÜN BODuNIN_)
    > ...yürüyor idiniz" (KT G 9) *yir sayu barmiş bo[dun yadagın yalaŋın] ölü yitü [yana] kälti* "Her yere gitmiş olan halk, yayan yapıldak ve öle yite dönüp geldi" (BK D 22-23), vb. Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *äligçä är tutdumuz ol ok tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa u...
  - `Tekin 2003, s. 33` (eslesen: _OL OK_)
    > ...(T 38), vb. ## /UK, KU/ Hece İşareti **27.** Art ünlülü /UK, KU/ işaretinin seslik değerleri şunlardır: 1. /ok, uk/ ses öbekleri, 2. art /k/ ünsüzü. 1. /ok, uk/ ses öbekleri: a) /UKGLI/ *ok(ı)galı* (BK D 38) - /UKUn/ *okun* "ok ile" (KT D 33, 36) - /ULUK/ *ol ok* (T 42) - /ITmUK/ *ı(t)t(ı)m ok* (T 52) - /ULGRTDmUK/ *ulgartd(ı)m ok* (T 53) - /TUKIDI/ *tokıdı* (BK K 6) - /TUKUz/ *tokuz* (KT K 4, vb.), /TUKz/ *tok(u)z* (BK D 34) - /BRDUK/ *bardok* (KT D 24) - /KILntUKDA/ *kıl(ı)ntokda* (KT D 1), vb. - /RTUK/ *artuk* (KT...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 119` (eslesen: _OL OK_)
    > ...başlıbaşına yapıldığını göstermek için gelir. atandı: " $X2İ ss İl oz naru atındı < o,bir tarafa atıldı, yuvarlandı". [[y. 119]] Başkasının kuvvetiyle bir yana atelan gey için de böyle denir; Gİ El atınmak). zi al atınır - SEN atandır n SEAN az 1: PAZİJ! ol ok atındı £ o, ok atmamı şken kendini ok atar gibi gösterdi", (İZİ - )Sİ atının - atın. mak), —EN utandı: "Sli oz mendin ,itandı <0, benden utandı”, ( Sti - >»! utanırutanmak), Oğuzca, A ötündiz » SEL GE İİ oz Xanka ötük ö- tündi * o, Hana hâlini anlattı",...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 167` (eslesen: _OL OK_)
    > ...ın dekritti so, atını Seylan sigrattı”, Başkası da böyledir; "öğ Se zi -. [[y. 167]] ol bitik okır erken sekritti zo, kitap okurken atlattı",(o, kitap veya kuran okurken ara yerde bir şey atlattı)ş K İL A sekritür - sekritmek).. > Di e çılrattır" â s2 Seyi ol okın kişte çılrattı - o, sadakta oku seslendirdi", Herhangi bir şey çığıl çığıl ettirileEa ses Moni yine böyle denir; Sü, je çılratur - çılratmak). [[y. 167]] EŞ semritti: " ÖZEĞİNİ ol atın semritti > E atını semirtti", Başkası da böyledir; GİE.İE senritr - se...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 131` (eslesen: _OL OK_)
    > ...sav "oynamasını bilmeyen karı yerim dar dermiş” şeklinde Türkiye köylüleri arasında yaşamaktadır. B.A. [y. 131] Başkası da böyledir, ( Sİlk>i - 73 vâhır - e) Ki 3» bodhudı: "3k 8 İl ol tonuğ bodhudı > o, elbisesini boyadı", Başkası da böyedir. DİNİ e > ayı ol okın urdı keyikni yıgaçka bodhudı > o, okunu vurdu, attı, avı ağaca yapıRtırdı". Başkası da böyledir, (- -331) 2 3x bodhur - bodhurmak) (4). 5 kadhudı: ” 538 gi ol tonuğ kağimdı » o, elbisesini seyrekçe dikti" ,( - e UZM kadr - kadhımak). [[y. 131]] ak yıdhıdız...


## TY2-B-7#3 - Tonyukuk Yazıtı, Batı 7. satir  (8 kelime)

- **transkripsiyon:** `OL : SaBıG : eŞiDiP : ON : OK : BeGLeRİ : BODuNI : KOP`
- **kelime karsiliklari:** O : SÖZÜ : İŞİTİP : ON : OK : BEĞLERİ : BOYLARI : HEP
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _OL SaBıG eŞiDiP ON OK BeGLeRİ BODuNI KOP_)
    > ...ğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta ya...
  - `Tekin 2003, s. 184` (eslesen: _OL SaBıG eŞiDiP ON_)
    > ...igin... tokuz ärän sanç-dı ordug birmä-di* "Prens Kül... dokuz kişiyi mızrakladı, karargâhı vermedi" (KT K 8-9) *türk bodun öl-ti alkın-tı yok bol-tı* "Türk halkı öldü, mahvoldu, yok oldu" (T 3) *oguz yagı ordug bas-dı* "Düşman Oğuz karargâhı bastı" (KT K 8) *ol sabıg eşidip on ok bägläri boduni kop käl-ti yükün-ti* "O haberi işitince On Ok beyleri ve halkı hep geldiler, boyun eğdiler" (T 42-43) Pekiştirme edatı *ok/ök* ile: *yañdok yolta yämä ölti-k ök* "Bozguna uğrayıp dağılanlar da yollarda ölüp kaldılar" (T 16) ## İkincil Son...
  - `Tekin 1998, s. 44` (eslesen: _OL SaBıG eŞiDiP_)
    > ..., sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kal...
  - `Tekin 2003, s. 166` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ğını) tokluğu (doyacağını) düşünmezsin" (KT G 8) *türük bodun tokurkak sän āçsar to-sık ömäz sän bir todsar āç-sık ömäz sän* "(Ey) Türk halkı! Sen kendini hep tok sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *b...
  - `Ata 2011, s. 139` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sı...
  - `Ata 2011, s. 132` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eyle...


## TY2-B-8#1 - Tonyukuk Yazıtı, Batı 8. satir  (10 kelime)

- **transkripsiyon:** `KeLTİ : YÜKÜNTİ : KeLiGME : BeGReLİN : BODuNIN : İTiP : YIGıP : aZÇA : BODuN : TeZMiŞ`
- **kelime karsiliklari:** GELDİ : YÜKÜNDÜ : GELEN : BEĞLERİNİ : BOYLARINI : [DÜZEN] EDİP : YIĞDIM : AZCA : BOYLARI : TEZMİŞ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _BODuNIN İTiP YIGıP aZÇA_)
    > ..., üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a O...
  - `Ata 2011, s. 105` (eslesen: _KeLTİ YÜKÜNTİ_)
    > ...erin başındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türkiye Türk...
  - `Tekin 2003, s. 134` (eslesen: _aZÇA BODuN_)
    > ...ı niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk halkı ilerliyor imiş" (T 9-10) *ulug irkin azkıńa ärin täzip bardı* "Ulug İrkin azıcık adamla kaçıp gitti" (KT D 34) *yagru barıp üküş kişi öltüg* "(Çinlil...
  - `Ata 2011, s. 98` (eslesen: _KeLTİ YÜKÜNTİ_)
    > ...a ve söz içinde hecelerin başındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. [[s. 98]] k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türkiye Türkçesindeki /g/ ünsüzü ile i...
  - `Tekin 1998, s. 46` (eslesen: _YÜKÜNTİ_)
    > ...ız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Tür...
  - `Tekin 2003, s. 75` (eslesen: _YÜKÜNTİ_)
    > ...- *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök* - *säçlintim* "ayrıldım" (Kızıl Çıra I 2) < **säçlindim* İstisnalar: *käçändä* "Keçen'de" (KÇ B 10),...


## TY2-B-8#2 - Tonyukuk Yazıtı, Batı 8. satir  (5 kelime)

- **transkripsiyon:** `eRTİ : ON : OK : SÜSİN : SÜLeTDiM`
- **kelime karsiliklari:** İDİ : ON : OK : SÜSÜNÜ : SÜLETDİM
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _eRTİ ON OK SÜSİN SÜLeTDiM_)
    > ...dümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve göze...
  - `Tekin 1998, s. 45` (eslesen: _eRTİ ON OK_)
    > ...ürk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguç...
  - `Tekin 2003, s. 191` (eslesen: _ON OK SÜSİN_)
    > ...u kip geçmişte meydana gelen bir eylemden önceki eylemi anlatmak için kullanılır. 1. *-miş* + *ärti*, vb.: *katun yok bol-miş är-ti anı yoglatayin tedi* "Hatun (geçen yıl) vefat etmişti. "Onun cenaze törenini yaptırayım" dedi" (T 31) *azça bodun täz-miş är-ti on ok süsin sülätdim* "Bir kısım halk kaçıp gitmişti; On Ok ordusunu sefere çıkarttım" (T 43) *alp är biziŋä täg-miş är-ti* "Yiğit askerler bize saldırmıştı" (KT D 40) *ol ödkä kul kullug küŋ küŋlüg bol-miş är-ti* "O dönemde köleler köle sahibi, cariyeler hizmetçi sahibi...


## TY2-B-9#1 - Tonyukuk Yazıtı, Batı 9. satir  (3 kelime)

- **transkripsiyon:** `BİZ : YiME : SÜLeDiMiZ`
- **kelime karsiliklari:** BİZ[DE] : YİNE : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _SÜLeDiMiZ_)
    > ...al tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _SÜLeDiMiZ_)
    > ...yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...
  - `Ata 2011, s. 113` (eslesen: _SÜLeDiMiZ_)
    > ...dun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...


## TY2-B-9#2 - Tonyukuk Yazıtı, Batı 9. satir  (12 kelime)

- **transkripsiyon:** `aNI : eRTiMiZ : YiNÇÜ : öGüZüG : KeÇE : TİNSİ : OGLI : YaTıGMA : BeŊiLiG : eK : TaGaG : eRTÜRTüM`
- **kelime karsiliklari:** ON[LAR]A : ERDİK : YİNÇÜ : ÖGÜZÜ : GEÇİP : TİNSİ : OĞLU : [DENİLEN] : BENGİLİ : EK : DAĞINA : ERDİRDİM
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _KeÇE TİNSİ_)
    > ...liğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana bö...
  - `Tekin 1998, s. 48` (eslesen: _TİNSİ OGLI_)
    > ...Kapı'ya kadar vardık. Oradan (ordumuzu) geri döndürdük. “— IM TA A CNC [s. 48] 92 TUNYUKUK YAZITI İnel Kağanka, lançıp Mançud, Saka), Tezik, Tokar sın|...) (G 2) anta berüki Aşok başlığ Soğdak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi...
  - `Tekin 2003, s. 170` (eslesen: _TİNSİ OGLI_)
    > ...larak: *türk bodun kı[lıng]alı türk kagan olorgalı şantuŋ balık(k)a taloy ügüzkä tägmiş yok ärmiş* "Türk halkı yaratılalı, Türk hakanı tahta oturalı Şantung (ovası) şehirlerine ve büyük denize (kadar) ulaştığı (hiç) yok imiş" (T 18) *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş idi yok ärmiş* "Türk halkının (daha önce) Demir Kapı'ya ve Tensi oğlu denilen dağa (kadar) ulaştığı hiç yok imiş" (T 46-47) *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve...
  - `Kafesoglu, s. 71` (eslesen: _TİNSİ OGLI_)
    > ...ibi İslâm tarihçilerinden naklen, bk. H. A. R. Gibb, Orta Asya'da Arab Fütuhatı, s. 14-25; R. H. Frye - A. Sayılı, Selçuklulardan Evvel Orta-Şarfüa Türkler, s. 102-115-Souo-ko, bk. Ed. Chavannes, ayn, esr., s. 67,271. Bk. M. Ergin, Orhun Âbideleri s. 43. Veya Tinsi-oglı (T'ien-tse/=Çin imparatoru/+oğlu)'nun yattığı alaca Ektağ, bk. R. Giraud, L'Empire des Turcs..., s. 45; ayn. müell., L'Inscription de Bain-Tsokto, s. 63,108,111. ' Seferde takip edilen yol için bk. R. [[s. 71]] Gıraud, L'Empire d. Turcs..., harita 4. rı altın...
  - `Ogel C2, s. 439` (eslesen: _OGLI YaTıGMA_)
    > ...ki bunlardan, mitoloji bakımından bir sonuç elde edebilmek, çok güçtür. Bununla beraber, bir kaç not üzerinde durmada da bir yarar vardır. [[s. 439]] 1 “Tinesi oğlu'nun yatırının bulunduğu dağ”: Tonyukuk yazıtındaki bu bölümü Thomsen, şöyle okumuştu: “Tinesi oglı yatıgma tag'': Gerçi yeni ve genç Türkologlar Göktürk yazıtlarını, didik didik edip, temeliyle oynamakta iseler de, biz üstadlarımıza bağlıyız.Bang, Barthold ve diğerleri, bu okuyuş, anlayış ve yoruma karşı gelmemişlerdi. Burası, Türkistan'da,Demir Ka pı'ya yakın bir...
  - `Tekin 1998, s. 28` (eslesen: _eRTÜRTüM_)
    > ...ağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigi...


## TY2-G-1#1 - Tonyukuk Yazıtı, Güney 1. satir  (4 kelime)

- **transkripsiyon:** `TeMiR : KaPıGKA : TeGİ : İRTiMiZ`
- **kelime karsiliklari:** TEMİR : KAPIYA : DEĞİN : ERDİK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _TeMiR KaPıGKA TeGİ İRTiMiZ_)
    > ...bığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilg...
  - `Tekin 1998, s. 19` (eslesen: _TeMiR KaPıGKA TeGİ_)
    > ...nçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç...
  - `Ata 2011, s. 51` (eslesen: _TeMiR KaPıGKA TeGİ_)
    > ...muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi anç...
  - `Olmez 2017, s. 21` (eslesen: _TeMiR KaPıGKA TeGİ_)
    > ...kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet'e bir kez bile varmadım. Batıda Sır Derya'yı geçip Temi...
  - `Ata 2011, s. 44` (eslesen: _TeMiR KaPıGKA TeGİ_)
    > ...sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek b...


## TY2-G-1#2 - Tonyukuk Yazıtı, Güney 1. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `aNDA : YaNDURTuMuZ : İNeL : KaPıGKA : --- UP : TaGKA : TeZİK : TOKuRSIN`
- **kelime karsiliklari:** [O] ANDA : YANDURDUK : İNEL : KAPIYA : --- : DAĞA : TEZİK : --- DOKUNSUN
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _KaPıGKA_)
    > ...odun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Ta...
  - `Tekin 2003, s. 137` (eslesen: _KaPıGKA_)
    > ...kurı* "geri taraf, batı": *ilgärü kün tugsık(k)a birgärü kün ortosıŋaru kurıgaru kün batsıkıŋa yırgaru tün ortosıŋaru...* "İleri(de) gün doğusuna, güneyde gün ortasına doğru, batıda gün batısına, kuzeyde (de) gece ortasına doğru..." (KT G 2) *kurgaru... tämir kapıgka tägi sülädim* "Batıda Demir Kapı'ya kadar sefer ettim" (BK K 3) [s. 138] # s. 138 — TALAT TEKİN *ilgärü [barıgma] bardıg kurgaru barıgma bardıg* "Doğuya gidenleriniz gittiniz, batıya gidenleriniz gittiniz" (BK D 19-20) *kurgaru käŋü tarmanka tägi...* "Batıd...
  - `Ata 2011, s. 51` (eslesen: _KaPıGKA_)
    > ...zlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş öz...
  - `Olmez 2017, s. 21` (eslesen: _KaPıGKA_)
    > ..., bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet'e bir kez bile varmadım. Batıda Sır Derya'yı geçip...
  - `Ata 2011, s. 44` (eslesen: _KaPıGKA_)
    > ...ında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança ker...


## TY2-G-2#1 - Tonyukuk Yazıtı, Güney 2. satir  (8 kelime)

- **transkripsiyon:** `aNDA : YiRÜKİ : aŞA : BaŞaLGaRU : aRDaK : BODuN : KOP : KeLTİ`
- **kelime karsiliklari:** ONDAN : YİRÜKİ : AŞIP : BAŞALDA : ARDAK : BOYLARI : HEP : GELDİ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _BODuN KOP KeLTİ_)
    > ...ı ak) benekli (yani “karla kaplı”) Ek dağını aşarak (G 1) Demir Kapı'ya kadar vardık. Oradan (ordumuzu) geri döndürdük. “— IM TA A CNC [s. 48] 92 TUNYUKUK YAZITI İnel Kağanka, lançıp Mançud, Saka), Tezik, Tokar sın|...) (G 2) anta berüki Aşok başlığ Soğdak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilge...
  - `Tekin 1998, s. 26` (eslesen: _BODuN KOP_)
    > ...otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 4...
  - `Tekin 2003, s. 105` (eslesen: _BODuN KOP_)
    > ...ya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7...
  - `Olmez 2017, s. 21` (eslesen: _BODuN KOP_)
    > ...kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindek...
  - `Ata 2011, s. 105` (eslesen: _KOP KeLTİ_)
    > ...ecelerin başındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türk...
  - `Ata 2011, s. 98` (eslesen: _KOP KeLTİ_)
    > ...nunda ve söz içinde hecelerin başındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. [[s. 98]] k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türkiye Türkçesindeki /g/ ünsü...


## TY2-G-2#2 - Tonyukuk Yazıtı, Güney 2. satir  (9 kelime)

- **transkripsiyon:** `OL : KÜNTE : TeGTİ : TÜRK : BODuN : TeMiR : KaPıGKA : TİNSİ : OGLI`
- **kelime karsiliklari:** O : GÜNDE : DEĞDİ : TÜRK : BOYLARI : DEMİR : KAPIYA : TİNSİ : OĞLU
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _BODuN TeMiR KaPıGKA TİNSİ_)
    > ...nı aşarak (G 1) Demir Kapı'ya kadar vardık. Oradan (ordumuzu) geri döndürdük. “— IM TA A CNC [s. 48] 92 TUNYUKUK YAZITI İnel Kağanka, lançıp Mançud, Saka), Tezik, Tokar sın|...) (G 2) anta berüki Aşok başlığ Soğdak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi sün...
  - `Tekin 2003, s. 170` (eslesen: _KaPıGKA TİNSİ OGLI_)
    > ...1. Ad olarak: *türk bodun kı[lıng]alı türk kagan olorgalı şantuŋ balık(k)a taloy ügüzkä tägmiş yok ärmiş* "Türk halkı yaratılalı, Türk hakanı tahta oturalı Şantung (ovası) şehirlerine ve büyük denize (kadar) ulaştığı (hiç) yok imiş" (T 18) *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş idi yok ärmiş* "Türk halkının (daha önce) Demir Kapı'ya ve Tensi oğlu denilen dağa (kadar) ulaştığı hiç yok imiş" (T 46-47) *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...


## TY2-G-3#1 - Tonyukuk Yazıtı, Güney 3. satir  (5 kelime)

- **transkripsiyon:** `TİNSİ : OGLI : YaTıGMA : TAGKA : TeGMiŞ`
- **kelime karsiliklari:** TİNSİ : OĞLU : DENİLEN : DAĞA : DEĞMİŞ[LİĞİ]
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _TİNSİ OGLI_)
    > ...Kapı'ya kadar vardık. Oradan (ordumuzu) geri döndürdük. “— IM TA A CNC [s. 48] 92 TUNYUKUK YAZITI İnel Kağanka, lançıp Mançud, Saka), Tezik, Tokar sın|...) (G 2) anta berüki Aşok başlığ Soğdak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi...
  - `Tekin 2003, s. 170` (eslesen: _TİNSİ OGLI_)
    > ...larak: *türk bodun kı[lıng]alı türk kagan olorgalı şantuŋ balık(k)a taloy ügüzkä tägmiş yok ärmiş* "Türk halkı yaratılalı, Türk hakanı tahta oturalı Şantung (ovası) şehirlerine ve büyük denize (kadar) ulaştığı (hiç) yok imiş" (T 18) *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş idi yok ärmiş* "Türk halkının (daha önce) Demir Kapı'ya ve Tensi oğlu denilen dağa (kadar) ulaştığı hiç yok imiş" (T 46-47) *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve...
  - `Kafesoglu, s. 71` (eslesen: _TİNSİ OGLI_)
    > ...ibi İslâm tarihçilerinden naklen, bk. H. A. R. Gibb, Orta Asya'da Arab Fütuhatı, s. 14-25; R. H. Frye - A. Sayılı, Selçuklulardan Evvel Orta-Şarfüa Türkler, s. 102-115-Souo-ko, bk. Ed. Chavannes, ayn, esr., s. 67,271. Bk. M. Ergin, Orhun Âbideleri s. 43. Veya Tinsi-oglı (T'ien-tse/=Çin imparatoru/+oğlu)'nun yattığı alaca Ektağ, bk. R. Giraud, L'Empire des Turcs..., s. 45; ayn. müell., L'Inscription de Bain-Tsokto, s. 63,108,111. ' Seferde takip edilen yol için bk. R. [[s. 71]] Gıraud, L'Empire d. Turcs..., harita 4. rı altın...
  - `Ogel C2, s. 439` (eslesen: _OGLI YaTıGMA_)
    > ...ki bunlardan, mitoloji bakımından bir sonuç elde edebilmek, çok güçtür. Bununla beraber, bir kaç not üzerinde durmada da bir yarar vardır. [[s. 439]] 1 “Tinesi oğlu'nun yatırının bulunduğu dağ”: Tonyukuk yazıtındaki bu bölümü Thomsen, şöyle okumuştu: “Tinesi oglı yatıgma tag'': Gerçi yeni ve genç Türkologlar Göktürk yazıtlarını, didik didik edip, temeliyle oynamakta iseler de, biz üstadlarımıza bağlıyız.Bang, Barthold ve diğerleri, bu okuyuş, anlayış ve yoruma karşı gelmemişlerdi. Burası, Türkistan'da,Demir Ka pı'ya yakın bir...
  - `Tekin 1998, s. 26` (eslesen: _TeGMiŞ_)
    > ...ğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmi...
  - `Ata 2011, s. 140` (eslesen: _TeGMiŞ_)
    > ...ndeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğ...


## TY2-G-3#2 - Tonyukuk Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `İDİ : YOK : eRMiŞ`
- **kelime karsiliklari:** HİÇ : YOK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _İDİ YOK eRMiŞ_)
    > ...ntung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (taht...
  - `Olmez 2017, s. 84` (eslesen: _İDİ YOK eRMiŞ_)
    > ...ötke** < *töpöt+ke* "Tibet'e" töpöt: isim tabanı +ke: yaklaşma/ bulunma durumu eki [?] [?] [?] [?] ***G 4.*** *keçe : temir kapigka[?] tegi : süledim : yırıgaru : yır bayurk[?] yėriye : tegi : süledim : bonça yėrke : tegi : yoritdım : ötüken : yışda : yèg : idi yok : ermiş : ėl tutsık : yėr : ötüken : yış ermiş : bo yėrde : olorup : tavgaç[?] bodun : birle :* "geçip Temir Kapığ'a kadar sefer ettim. Kuzeyde Yır Bayırkların topraklarına kadar sefer ettim. Bu kadar yere sefer ettirdim. Ötüken topraklarından daha iyisi kesinlikle...
  - `Tekin 2003, s. 114` (eslesen: _İDİ YOK_)
    > ...bız yablak bodun+ta üzä olortum* "yoksul ve sefil bir halk üzerine hükümdar oldum" (BK D 21) *bän yırdın+ta yan tägäyin* "ben (de) kuzey tarafından saldırayım" (T 11) 5. Adların bulunma-çıkma durumu karşılaştırma yapmak için de kullanılır: *ötükän yış+da yig idi yok ärmiş* "Ötüken dağlarından daha iyi (bir yer) asla yok imiş" (KT G 4) *ıgar oglanıŋız+da taygunuŋuz+da yegdi igidür ärtigiz* "(Halkınızı) değerli evladınızdan, tay (gibi) oğullarınızdan daha iyi besliyor idiniz" (KT GD) [s. 115] # s. 115 — ORHON TÜRKÇESİ GRA...
  - `Ata 2011, s. 151` (eslesen: _İDİ YOK_)
    > ...sül(e)d(i)m yır(ı)g(a)ru y(i)r sevk ettim. Kuzeyde Yir Bayırku b(a)y(ı)rku͡ u yiriŋe t(e)gi sül(e)d(i)m yerine (ülkesine) kadar asker sevk bunç͡ a yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle...
  - `Olmez 2017, s. 58` (eslesen: _İDİ YOK_)
    > ...) İnel Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Y...
  - `Ata 2011, s. 140` (eslesen: _YOK eRMiŞ_)
    > ...AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğer) yarı o...


## TY2-G-3#3 - Tonyukuk Yazıtı, Güney 3. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `OL : YiRTE : BeN : BİLGE : TONYUKUK : TeGÜRTÜK : ÜÇüN : ---`
- **kelime karsiliklari:** O : YERDE : BEN : BİLGE : TONYUKUK : DEĞDİRDİĞİM : İÇİN : ---
- **kanit:**
  - `Ergin 1970, s. 40` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...eçtik. Geceyi gündüze kattık. [[s. 40]] Bolçuya şafak sökerken ulaştık. (İkinci Taş) Batı cephesi Haberci getirdiler. Sözü şöyle: Yarış ovasında yüz bin asker toplandı der. O sözü işitip beyler bütün | dönelim, temiz edepli olmak iyidir dedi. Ben şöyle derim, ben Bilge Tonyukuk: Altun ormanını aşarak [s. 41] geldik. İrtiş nehrini | geçerek geldik. Geleni cesur dedi, duymadı. Tanrı, Umay ilâhe, mukaddes yer, su, üzerine çökü verdi her halde. Niye kaçıyoruz? | Çok diye niye korkuyoruz? Az diye ne kendimizi hor görelim? Hücum edelim d...
  - `Tanyeri, s. 19` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...çup gitmiş, vefat etmiş), “yokadu barır ermiş” (yok olup gidermiş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fiili kullanılır: “Tabgaç kagan yagımız erti.” (Çin milleti düşmanımız idi.) Sayfa: 18 [s. 20] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com...
  - `Ogel C2, s. 385` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...rürdük (keçe yorıdımız). T'ü r gi ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (...


## TY2-G-4#1 - Tonyukuk Yazıtı, Güney 4. satir  (3 kelime)

- **transkripsiyon:** `KIZıL : aLTUN : ÜRüŊ`
- **kelime karsiliklari:** KIZIL : ALTINI : AK
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _aLTUN ÜRüŊ_)
    > ...çıp Mançud, Saka), Tezik, Tokar sın|...) (G 2) anta berüki Aşok başlığ Soğdak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlt...
  - `Tekin 2003, s. 145` (eslesen: _aLTUN ÜRüŊ_)
    > ...üzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü develeri ve ipekli kumaşları fazlasıyla getirdiler” (T 48), vb. [s. 146] # s. 146 — TALAT TEKİN **331.** *kalısız* “eksiksiz, pek...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 161` (eslesen: _KIZıL aLTUN_)
    > ...Mere *? delü ozan çal, ere varan kız menem, oynayayım didi. Beyrek aydur : Men bu yirden gideli delü olmuş 13 Delim ağça karlar yağmış dize yetmiş Han kızınuü ivinde ! kul halayık dükenmiş Maşraba almış şuya varmış Bileginden ? on parmağını şovuk almış Kızıl altun getürüü han kızına 9 tırnak yonuü “Ayıbluça han kızı ere varmak “ayıb olur didi. [[s. 161]] * Bunı işidiçek Banı Çiçek kakıdı: Mere delü ozan men “ayıbölu-mıyam kim maüa “ayıb koşarsın didi, gümüş gibi ağ bilegin açdı, © elin çıkardı. Beyregüğ kiçürdügi yüzü...
  - `Tekin 1998, s. 12` (eslesen: _KIZıL_)
    > ...n duruma gelmek, saçı başı yolunmak), birki bodunuğ ot sub kıl- “birleşik halkı ateş ile su (gibi birbirine düşman) etmek”, tün udıma-, küntüz olurma- “geceleri uyumamak, gündüzleri [s. 12] 20 GİRİŞ oturmamak” (gece gündüz demeden çalışmak, çok çalışmak), kızıl kanın töküt-, kara terin yüğürt- “kızıl kanını akıtmak kara terini dökmek” (çok emek vermek, çok çalışmak), işiğ küçüğ bir- “işini gücünü vermek, hizmet etmek”, ölü yitü kazgan- “öle yite, ölesiye çalışıp kazanmak”, uça bar- “uçup gitmek” (ölmek, vefat etmek)...
  - `Ergin 1970, s. 42` (eslesen: _KIZıL_)
    > ...Â B İ D E L E R İ müşaviri | yine bizzat ben idim, kumandanı yine bizzat ben idim. İltiriş Kağana, Türk Bögü Kağanına, Türk Bilge Kağanına Doğu cephesi Kapgan Kağan yirmi yedi yaşında.....orda..... idi. Kapgan Kağan oturdu. Gece uyumadı, | gündüz oturmadı. Kızıl kanımı döktürerek, kara terimi koşturarak işi, gücü verdim hep. Uzun keşif kolunu yine gönderdim hep. | Siperi, nöbet yerini büyüttüm hep. Geri dönen düşmanı getirirdim. Kağanımla ordu gönderdim. [[s. 42]] Tanrı korusun, | bu Türk milleti arasmda silâhlı düşm...
  - `Tekin 2003, s. 4` (eslesen: _KIZıL_)
    > ...rameri Talat Tekin Türk Dilleri Araştırmaları Dizisi: 9 Yayımlayan: Mehmet Ölmez E-mail: molmez@yildiz.edu.tr © Talat Tekin - Mehmet Ölmez İstanbul 2003 2. Baskı (1. Baskı 2000) ISBN 975-7981-19-2 *İsteme adresi:* Sanat Kitabevi, Karanfil Sok. 5/2, 06650 Kızılay-Ankara. Tel.&faks: (90.312) 418 62 03; sanat@sanatkitabevi.com.tr; http://www.sanatkitabevi.com.tr *TDAD İletişim adresi:* Mehmet Ölmez, Yıldız Teknik Üniversitesi, Fen-Ed Fak. T.D.E. Bölümü, Davutpaşa Yerleşim Birimi, 34210 Esenler-İSTANBUL. Tel: (+90.212...


## TY2-G-4#2 - Tonyukuk Yazıtı, Güney 4. satir  (7 kelime)

- **transkripsiyon:** `KÜMüŞ : KIZıL : UDuZ : GeRİT : aSIGI : BUŊSuZ : KeLÜRTİ`
- **kelime karsiliklari:** GÜMÜŞÜ : KIZIL : UDUZU : GERİT(?) : ASIĞI : BUNGSUZ : GETİRDİ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KeLÜRTİ_)
    > ...ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bayırku'ların Ulu İrkin...
  - `Ata 2011, s. 120` (eslesen: _KeLÜRTİ_)
    > ...bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T...
  - `Olmez 2017, s. 76` (eslesen: _KeLÜRTİ_)
    > ...biliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732)...
  - `Tekin 1998, s. 32` (eslesen: _BUŊSuZ_)
    > ...ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua...
  - `Tekin 2003, s. 241` (eslesen: _BUŊSuZ_)
    > ...ALAT TEKİN (basılı sayfa numarası 242) - **bunı** bunu - **bunta** burada - **bunt(u)t-** (?) (uykusunu) kaçırtmak (?) (T 19) - **buŋ** ihtiyaç, yokluk; dert, sıkıntı - **buŋad-** bunalmak, sıkılmak - **buŋsız** fazlasiyle, bol bol, esirgemeden (T 48); bk. **buŋsuz** - **buŋsuz** bk. **buŋsız** - **buŋusuz** (Barık II 3); bk. **buŋsız, buŋsuz** - **Burgu** yer adı (MÇ D 3, Tar. B 4) - **busanç** acı, ıstırap (IB 52) - **busuşlug** kederli, üzgün (IB 52) - **buyruk** yüksek görevli, kumandan - **Buyla** yüksek bir unvan...
  - `Ata 2011, s. 98` (eslesen: _BUŊSuZ_)
    > ...+lik ‘bey olmaya layık, bey olası’ (KT D24) < beg ‘bey’ (KT D20) adgır+lık ‘aygır olacak olan’ (Irk Bitig 5) < adgır ‘aygır’ (KT D36) öz+lük ‘kişiye ait, şahsi’ (Küli Çor D3) < öz ‘kendi’ 12. +sXz: Yokluk sıfatları türetir.. buŋ+suz ‘bunsuz, dertsiz, tasasız’ (BK K12) < buŋ ‘dert, sıkıntı, sıkıntı’ (KT G3) san+sız ‘sayısız’ (BK G12) < san ‘sayı’ ög+süz ‘öksüz, annesiz’ (KT K9) < ög ‘anne, üvey anne’ (KT K9) aş+sız ‘aşsız, yemeksiz, fakir’ (KT D26) < aş ‘yemek, yiy...


## TY2-G-4#3 - Tonyukuk Yazıtı, Güney 4. satir  (3 kelime)

- **transkripsiyon:** `İLTeRiŞ : KaGaN : BİLGESİ`
- **kelime karsiliklari:** İLTERİŞ : KAĞAN : BİLGESİ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _İLTeRiŞ KaGaN BİLGESİ_)
    > ...dak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti|...
  - `Ata 2011, s. 116` (eslesen: _İLTeRiŞ KaGaN BİLGESİ_)
    > ...zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (k...
  - `Ata 2011, s. 109` (eslesen: _İLTeRiŞ KaGaN BİLGESİ_)
    > ...edi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı” 11 sayısını Orhun Türkçesi...


## TY2-G-5#1 - Tonyukuk Yazıtı, Güney 5. satir  (4 kelime)

- **transkripsiyon:** `İLİN : ÜÇüN : TaBGaÇKA : YiTİ`
- **kelime karsiliklari:** İLİ : İÇİN : TABGAÇA : YEDİ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _ÜÇüN TaBGaÇKA_)
    > ...ürük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan K...
  - `Tekin 2003, s. 133` (eslesen: _ÜÇüN TaBGaÇKA_)
    > ...nti* "... üç kez dolandı" (Uybat II 4) 3. "Kez" anlamındaki *kata* sözcüğü sıra sayısı ile de kullanılabilir: *ikinti kata* "ikinci kez" (Toyok IV 2-3) 4. Asıl sayılar tek başlarına da katlama sayısı olarak kullanılırlar: *ilteriş kagan bilgäsin üçün, alpin üçün tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylılarla yedi (kez), Oğuzlarla (da) beş (kez) savaştı" (T 48-49) *ilimdä tört tägzindim* "Ülkemde dört (kez) dol...
  - `Ata 2011, s. 116` (eslesen: _ÜÇüN TaBGaÇKA_)
    > ...üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (k...
  - `Ata 2011, s. 109` (eslesen: _ÜÇüN TaBGaÇKA_)
    > ...ayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı” 11 sayısını Orhun Türkçesine göre ifade ediniz. ZAM...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 95` (eslesen: _İLİN ÜÇüN_)
    > ...zdı"; Gyz - EE Saza - saçgırmak). [[y. 94]] 5 suçgurdı: "ya 5 at suçgurdı - at in azdı", Başkası da böyledir; (0 > yı Ş ; las suçgurar - suçgurmak). 5352 sargardı: " Sİ.5y47” sargardı nenğ < nesne [y. 95] (4) Gerek yazma ve gerek basma nüshalarda bu üç fiilin üçüncü harfleri olan Yy harfinin üstünde ötre, altında esre varsa da, biz esFe olmasını üstün tutarak o yolda yazdık; çünkü aşağıdaki fiillerin üçüncü harfi olan f hart leri ötredir, B.A, sarardı", ( o sargarmak). - )3#r sargarur - 33575 sızgurdı: " sözi er yağ...
  - `05_Ceren_Sungur_Samanizm_ve_Islam, s. 83` (eslesen: _İLİN ÜÇüN_)
    > ...Kaşgari'nin verdiği her bilgi kırıntısının tümüyle sözcükleri açıklamak için verildiği akılda tutulmalıdır. [[s. 83]] Bu nedenle bizim araştırmamız, esasen sözcüklerin yorumlanmasına odaklanacak ve Arapça eşan lamlılarıyla ilgili olacak. ı. islamlaşma 11. yüzyılın üçüncü çeyreğinde İslam, Türklerin çoğun luğunun yaşamında henüz bir önem arz etmeye başlamıştı. Yönetici hanedanlar için değilse de sıradan insanlar için İs lam, iki açıdan etkiliydi. İlki, Sufi tarikatlarının dindar zühdü idi.7 Buna dair Dzvan'da az kanıt bulunu...


## TY2-G-5#2 - Tonyukuk Yazıtı, Güney 5. satir  (4 kelime)

- **transkripsiyon:** `YiGİRMİ : SÜŊüŞDİ : KITaYNKA : YiTİ`
- **kelime karsiliklari:** YİRMİ : SÜNGÜŞDÜ : KITAY [İLE] : YEDİ [KEZ]
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _YiGİRMİ SÜŊüŞDİ_)
    > ...ığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udı...
  - `Tekin 1998, s. 28` (eslesen: _YiGİRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...
  - `Tekin 2003, s. 128` (eslesen: _YiGİRMİ_)
    > ...bizni ölürtäçik-ök* "Er veya geç bizi mutlak öldürecektir" (T 29-30) ## Sayılar ## Asıl sayılar **280.** Asıl sayılar (1-10 arası sayılar ve onluklar, yüzlükler vb.) şunlardır: *bir, eki, üç, tört, beş ~ biş, altı, yeti ~ yiti, säkiz, tokuz, on, yegirmi ~ yigirmi, otuz, kırk, älig, altmış, yetmiş, säkiz on, tokuz on, yüz, bıŋ ~ biŋ ~ miŋ, bir tümän* (BK G 1) ## Onluklararası Sayılar **281.** Onluklararası sayılar bir sonraki onluğa atılacak adımlar olarak düşünülür ve buna göre adlandırılır. [s. 129] # s. 129 — ORH...
  - `Ata 2011, s. 75` (eslesen: _YiGİRMİ_)
    > ...sun’da, Orhun ırmağının eski yatağı yakınlarında, Koço Çaydam Gölü civarında birtakım heykeller, balballar ve yıkıntılar arasında Köl Tigin ve Bilge Kağan yazıtlarını bulur. İki yazıt arasındaki mesafe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi al...
  - `Tekin 2003, s. 130` (eslesen: _SÜŊüŞDİ_)
    > ...yüz ärän* "beş yüz adam" (BK G 11) 2. Üçüncü kişi iyelik eki ile ad olarak: *ekisin özi altızdı* "İkisini (de) kendisi aldırttı" (KT D 38) 3. Eylemin süresini ya da sıklık derecesini gösteren bir zarf tümleci olarak: *ilteriş kagan... tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan ... Çinlilerle on yedi (kez) savaştı, Kıtay ile yedi (kez) savaştı, Oğuzlarla da beş (kez) savaştı" (T 48-49) *kül tigin bir kırk yaşayur ärti* "Prens Kül (o zaman) otuz bir yaşında idi" (KT K 2) *ulug...
  - `Ata 2011, s. 116` (eslesen: _SÜŊüŞDİ_)
    > ...at II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı”...


## TY2-G-5#3 - Tonyukuk Yazıtı, Güney 5. satir  (6 kelime)

- **transkripsiyon:** `SÜŊüŞDİ : OGuZKA : BeŞ : SÜŊüŞDİ : aNDA : aYGUÇI`
- **kelime karsiliklari:** SÜNGÜŞDÜ : OĞUZ [İLE] : BEŞ [KEZ] : SÜNGÜŞDÜ : [O] ANDA : AYGIÇI
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _SÜŊüŞDİ OGuZKA BeŞ SÜŊüŞDİ_)
    > ...ı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım tökü...
  - `Tekin 2003, s. 130` (eslesen: _SÜŊüŞDİ OGuZKA BeŞ SÜŊüŞDİ_)
    > ...am" (BK G 11) 2. Üçüncü kişi iyelik eki ile ad olarak: *ekisin özi altızdı* "İkisini (de) kendisi aldırttı" (KT D 38) 3. Eylemin süresini ya da sıklık derecesini gösteren bir zarf tümleci olarak: *ilteriş kagan... tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan ... Çinlilerle on yedi (kez) savaştı, Kıtay ile yedi (kez) savaştı, Oğuzlarla da beş (kez) savaştı" (T 48-49) *kül tigin bir kırk yaşayur ärti* "Prens Kül (o zaman) otuz bir yaşında idi" (KT K 2) *ulug küli çor säkiz on yaşap yok boltı* "Büyük...
  - `Ata 2011, s. 116` (eslesen: _SÜŊüŞDİ OGuZKA BeŞ SÜŊüŞDİ_)
    > ...ikinti kata Toyok IV 2-3 “ikinci kez” c. Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı” 11 sayısını Orhun Türkçesine göre ifade ediniz....
  - `Ata 2011, s. 109` (eslesen: _SÜŊüŞDİ OGuZKA BeŞ SÜŊüŞDİ_)
    > ...rf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı” 11 sayısını Orhun Türkçesine göre ifade ediniz. ZAMİR 1. Kişi Zamirleri 1. tekil ben T 30 ~ men BK G 9 2. teki...


## TY2-G-6#1 - Tonyukuk Yazıtı, Güney 6. satir  (4 kelime)

- **transkripsiyon:** `YiME : BeN : ÖK : eRTiM`
- **kelime karsiliklari:** YİNE : BEN : HEP : İDİM
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖK eRTiM_)
    > ...buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu; (fakat) hanını bırakıp Çin'e yeniden bağım...
  - `Ata 2011, s. 94` (eslesen: _BeN ÖK eRTiM_)
    > ...3. tekil kişi emir eki: türük bodun yok bolma-zun bodun bol-çun tiyin … KT D11 “Türk halkı yok olmasın, (yeniden) halk olsun diye …” 86 [s. 94] Yuvarlak ünlülü sıfat-fiil ekleri: anta ay-guçı+sı yeme ben ök ertim T 49 “o sırada, (onun) sözcüsü de bizzat ben idim” bitig taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı bu...
  - `Olmez 2017, s. 63` (eslesen: _BeN ÖK eRTiM_)
    > ...] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyinatçı, taş yazıt ustası" (KT K 13) **{-mAkçı} :** *tavgaç bodun tevlıgin körlügin üçükü...
  - `Ata 2011, s. 87` (eslesen: _BeN ÖK eRTiM_)
    > ...odunı kop kel-ti yükün-ti T 43 “halkı hep geldi, boyun eğdi” 3. tekil kişi emir eki: türük bodun yok bolma-zun bodun bol-çun tiyin … KT D11 “Türk halkı yok olmasın, (yeniden) halk olsun diye …” [s. 87] Yuvarlak ünlülü sıfat-fiil ekleri: anta ay-guçı+sı yeme ben ök ertim T 49 “o sırada, (onun) sözcüsü de bizzat ben idim” bitig taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ün...


## TY2-G-6#2 - Tonyukuk Yazıtı, Güney 6. satir  (5 kelime)

- **transkripsiyon:** `aYGIDI : YiME : BeN : ÖK : eRTiM`
- **kelime karsiliklari:** AYGIDIĞI : YİNE : BEN : HEP : İDİM
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖK eRTiM_)
    > ...buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu; (fakat) hanını bırakıp Çin'e yeniden bağım...
  - `Ata 2011, s. 94` (eslesen: _BeN ÖK eRTiM_)
    > ...3. tekil kişi emir eki: türük bodun yok bolma-zun bodun bol-çun tiyin … KT D11 “Türk halkı yok olmasın, (yeniden) halk olsun diye …” 86 [s. 94] Yuvarlak ünlülü sıfat-fiil ekleri: anta ay-guçı+sı yeme ben ök ertim T 49 “o sırada, (onun) sözcüsü de bizzat ben idim” bitig taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı bu...
  - `Olmez 2017, s. 63` (eslesen: _BeN ÖK eRTiM_)
    > ...] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyinatçı, taş yazıt ustası" (KT K 13) **{-mAkçı} :** *tavgaç bodun tevlıgin körlügin üçükü...
  - `Ata 2011, s. 87` (eslesen: _BeN ÖK eRTiM_)
    > ...odunı kop kel-ti yükün-ti T 43 “halkı hep geldi, boyun eğdi” 3. tekil kişi emir eki: türük bodun yok bolma-zun bodun bol-çun tiyin … KT D11 “Türk halkı yok olmasın, (yeniden) halk olsun diye …” [s. 87] Yuvarlak ünlülü sıfat-fiil ekleri: anta ay-guçı+sı yeme ben ök ertim T 49 “o sırada, (onun) sözcüsü de bizzat ben idim” bitig taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ün...


## TY2-G-6#3 - Tonyukuk Yazıtı, Güney 6. satir  (3 kelime)

- **transkripsiyon:** `İLTeRiŞ : KaGaN : UÇDI`
- **kelime karsiliklari:** İLTERİŞ : KAĞAN : UÇDU
- **kanit:**
  - `Tekin 1998, s. 6` (eslesen: _İLTeRiŞ KaGaN_)
    > ...anlığı 630'da, Batı Türk Kağanlığı da 659 yılında Çin'in eğemenliği altına girer. [[s. 6]] Ancak, Doğu Türkleri 670 yılında Kutluğ adlı bir liderin öncülüğünde Çinlilere başkaldırır ve uzunca bir mücadeleden sonra başarılı olurlar. Bu başarıdan sonra Kutluğ, İlteriş Kağan ünvanıyla tahta geçer (682). Böylece İkinci Doğu Türk Kağanlığı kurulmuş olur. Ancak bu ikinci kağanlığın da ömrü pek uzun olmaz. [[s. 6]] 740'lı yılların başlarında Uygurlar, liderleri Kül Bilge Han öncülüğünde Türklere başkaldırır ve son Türk prensi Ozmış -...
  - `Tekin 2003, s. 121` (eslesen: _İLTeRiŞ KaGaN_)
    > ...ça, ança* - Araç durumu *anın* İşaret zamirlerinden türemiş öbür sözcükler de şunlardır: *antag* "onun gibi, öyle" (T 9, 36) ~ *antäg* (T 29) < *\*anı täg*, *büntäg+i* "böyle+si" (T 57) < *\*buntäg* < *\*bunı täg*. 1. Yalın durum a) Gösterme zamiri olarak: *ilteriş kagan bilgä tuñukuk kazgantok üçün kapgan kagan türük sir bodun yorıdokı bu* "İlteriş Kağan ve Bilge Tunyukuk (çalışıp çabalayıp) kazandıkları için Kapgan Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädg...
  - `Ata 2011, s. 5` (eslesen: _İLTeRiŞ KaGaN_)
    > ...nlığı’nın Yıkılış Nedenleri …………....… 44 Çin Egemenliğinde Geçen Elli Yıl ………………………………...… 45 II. KÖKTÜRK KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II....
  - `Tekin 2003, s. 155` (eslesen: _KaGaN UÇDI_)
    > ...kagan kışdım* "Ondan sonra, Tanrı akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) *ol kan yok boltokda kisrä el yitmiş ıçgınmiş* "O han öldükten sonra (da) devlet yok olup gitmiş" (O ön 1) [s. 155] # s. 155 — ORHON TÜRKÇESİ GRAMERİ *anta kisrä kaŋım kagan uçdı* "Ondan sonra babam hakan vefat etti" (MÇ K 12) **362.** *üzä* "üstüne, üzerine; -a göre, gereğince": *kişi oglınta üzä äçüm apam bumın kagan iştämi kagan olormış* "İnsanoğlunun üstüne (de) atalarım dedelerim Bumın Hakan, İştemi Hakan (hükümdar olarak) tahta...
  - `Olmez 2017, s. 56` (eslesen: _KaGaN UÇDI_)
    > ...çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam hakan vefat etti." (MÇ K 12); *ėlligig ėlsiretdimiz kaganlıgıg kagansıratdımız* "Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18); *temir kapıgka tegi ertimiz anta yanturtumuz* "Temir Kapıg'a kadar ulaştık. (Orduyu) orad...
  - `Ata 2011, s. 4` (eslesen: _İLTeRiŞ KaGaN_)
    > ...lışı …………………………………..…… 44 Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri …………....… 44 Çin Egemenliğinde Geçen Elli Yıl ………………………………...… 45 II. KÖKTÜRK KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… [[s. 4]] 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II. Köktürk Kağanlığı’nın Yıkılışı ………………….….…………....


## TY2-G-6#4 - Tonyukuk Yazıtı, Güney 6. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : BöGİ : KaGaNKA : TÜRK : BİLGE : KaGaNKA`
- **kelime karsiliklari:** TÜRK : BÖGİ : KAĞANA : TÜRK : BİLGE : KAĞANA
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _TÜRK BİLGE_)
    > ...ım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve) halkım, sağdaki Şadapıt beyler, soldaki Tarkan'lar (ve) kumandan beyler, Otuz (Tatar.......-.. [[s. 19]] 20502 ) (G 2) Dokuz Oğu...
  - `Ergin 1970, s. 12` (eslesen: _TÜRK BİLGE_)
    > ...kamlar, âbidelerdeki asıl metnin satır numaralarıdır. Ortaya gelen satır başları dik çizgilerle gösterilmiştir. Noktalı yerler, metindeki eksik yerleri göstermektedir. M U H A R R E M E R G İ N [s. 12] KÜL TİGİN ÂBİDESİ Güney cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim, oğlum, bütün soyum, milletim, güneydeki şadpıt beyleri, kuzeydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle:...
  - `Tekin 2003, s. 186` (eslesen: _TÜRK BİLGE_)
    > ...) kalabalık diye niçin korkuyoruz? (T 38) 3. Çoğul 2. kişi: *... tägdökin türük bäglär kop bil-ir siz* "(Prens Kül'ün...-ına ok) değdiğini, Türk beyleri, hep bilirsiniz" (KT D 34) 4. 3. kişi: *türük bilgä kagan türük sir bodunug oguz bodunug igidü olor-ur* "Türk Bilge Hakan, Türk Sir halkını, Oğuz halkını doyurarak tahtta oturuyor" (T 62) *bäniŋ bodunum anta är-ür* "Benim halkım orada olacaktır" (T 21) *uça umatın olor-ur* "Uçamadan oturuyor" (IB 61) *kop ögir-är säbin-ür* "Çok memnun olur ve sevinir" (IB 15) *är tärkläyü...
  - `Ata 2011, s. 150` (eslesen: _TÜRK BİLGE_)
    > ...PSİYONLU METİN TÜRKİYE TÜRKÇESİNE G1 AKTARMA Tanrı gibi gökte olmuş (yaratılmış) t(e)ŋri t(e)g t(e)ŋride bolm(ı)ş türük̮ Türk Bilge Kağan, bu zamanda bilge k(a)g(a)n bu ödke ol(u)rt(u)m sab(ı)m(ı)n tük(e)ti (e)şidg(i)l ul(a)yu oturdum (tahta çıktım). Sözlerimi in(i)ygün(ü)m ogl(a)n(ı)m bir(i)ki tamamıyla işit. Ve erkek kardeşim, ug(u)ş(u)m bod(u)n(u)m bir(i)ye...
  - `Olmez 2017, s. 78` (eslesen: _TÜRK BİLGE_)
    > ...*G 1. teȳri teg : teȳride : bolmuš : tür²ük : bilge² kağan : bo üdke : olortum²* *savımın : tüketi : ešidgil : ulayı : iniygünüüm² oglanım² birki² ugušum²* *bodunum² bėriye² şadapıt begler : yurya² tarkat² buyruk : begler² otuz //////* "İlahî göğün yarattığı Türk Bilge Kağan, bu devirde tahta çıktım. Sözlerimin tamamını dinleyin, özellikle küçük erkek kardeşlerim, çocuklarım, birleşik soyum, halkım, güneyde Şadlar, kuzeyde tarkanlar, beyler, komutanlar, Otuz [Tatar halkı ... ... ...]" **teȳri teg** "İlahi" - teg: "gibi" an...
  - `Ata 2011, s. 143` (eslesen: _TÜRK BİLGE_)
    > ...b(ı)m(i)n (e)dgüti (e)şid k(a)t(ı)gdı tıŋla ilg(e)rü kün tugs(ı)k(k)a bir(i)g(e)rü kün ortusıŋ(a)ru k͡uurıg(a)ru kün b(a)tsı͡kıŋa yır(ı)g(a)ru tün ortusıŋ(a)ru (a)n͡ta içr(e)ki bod(u)n k͡oo[p] m[aŋ]a kör[ür (a)n͡ç]a bod(u)n Tanrı gibi gökte olmuş (yaratılmış) Türk Bilge Kağan, bu zamanda oturdum (tahta çıktım). Sözlerimi tamamıyla işit. [[s. 143]] Ve erkek kardeşim, oğullarım, birleşik boyum (soyumsopum), halkım güneyde Şadapıt beyler, kuzeyde Tarkanlar, kumandan beyler, Otuz (Tatar ……………… Dokuz Oğuz beyleri ve halkı, bu sö...
