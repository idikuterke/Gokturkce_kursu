# Ceviri istek paketi 23 - Orhun cumlecikleri

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


## BK-D-32#3 - Bilge Kağan Yazıtı, Doğu 32. satir  (5 kelime)

- **transkripsiyon:** `eRTİ : iKİN : SÜ : eBDE : eRTİ`
- **kelime karsiliklari:** İDİ : İKİNCİ : SÜ : EVDE : İDİ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _SÜ eBDE eRTİ_)
    > ...genti Kadız'da savaştım. [[s. 38]] Askerlerini orada mızrakladım, hezimete uğrattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri ya...
  - `Ata 2011, s. 115` (eslesen: _SÜ eBDE eRTİ_)
    > ...BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “bi...
  - `Ata 2011, s. 108` (eslesen: _SÜ eBDE eRTİ_)
    > ...u balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “iki...


## BK-D-32#4 - Bilge Kağan Yazıtı, Doğu 32. satir  (5 kelime)

- **transkripsiyon:** `ÜÇ : OGuZ : SÜSİ : BaSA : KeLTİ`
- **kelime karsiliklari:** ÜÇÜNCÜ : OĞUZ : SÜSİ : BASIP : GELDİ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ÜÇ OGuZ SÜSİ BaSA KeLTİ_)
    > ...savaştım. [[s. 38]] Askerlerini orada mızrakladım, hezimete uğrattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgan...
  - `Ergin 1970, s. 29` (eslesen: _ÜÇ OGuZ_)
    > ...larak Ezginti Kadızda savaştım. [[s. 29]] Askerini orda mızrakladım, yıprattım .......... yıprat.......... Otuz iki yaşımda Amgı kalesinde kışladıkta kıtlık oldu. İlk baharında | Oğuza doğru ordu sevk ettim. İlk ordu dışarı çıkmıştı, ikinci ordu merkezde idi. Üç Oğuz ordusu basıp geldi. Yaya, kötü oldu diyip yenmek için geldi. Bir kısım ordusu evi barkı yağma etmek için gitti, bir kısım ordusu savaşmak için geldi. Biz az idik, kötü durumda idik. Oğuz.......... düşman .......... [[s. 29]] Tanrı kuvvet verdiği için orda mız...
  - `Tekin 2003, s. 256` (eslesen: _ÜÇ OGuZ_)
    > ...aybetmek (IB 29) - **uya** yuva, in (IB 31) - **uya** akraba (Çaa-Höl III 3) - **Uygur** etnik ad (Uygur'lar) - **uyur** muktedir (IB 28, vb.) - **uz** süs, tezyinat, desen - **uzun** uzak; uzun (T 52, IB 22, 42, 47) - **üç** üç - **Üç Kurıkan** etnik ad - **Üç Oguz** etnik ad - **üçägü** üçü, üçü birlikte - **üçün** için, nedeniyle, uğruna - **üçünç** üçüncü olarak - **üçürgü** eyer altına konulan keçe (IB 50) - **ügür** kısrak sürüsü, hara (IB 56) - **ügüş-** yolunmak, yıpranmak (IB 44) - **ügüz** ırmak - **üküş** çok,...
  - `Kafesoglu, s. 73` (eslesen: _ÜÇ OGuZ_)
    > ...a Antırgu?/, Çuş-başı, Ezgenti-kadız savaşları. Bunlardan 2.'de Edizlerle, 4.'de Tongralarla savaştı) ve seferlerden dördüne Bilge de katılmıştı405. O sene büyük ölçüde hayvan telefatına sebep olan kıtlıkta bile Bilge sefer hâlinde idi. Ötüken üzerine yürüyen Üç-oğuzlar Kül Tegin tarafından püskürtüldü406. [[s. 73]] Dokuz-Tatarlarla ittifak ederek hücuma geçen Oğuzlar Agu'da cereyan eden iki savaşta bozguna uğratıldı ve Oğuz kütleleri, Çin sınırına doğru çekildiler407. Uzayıp giden bu savaşlar dolayısiyle kitabelerde GökT...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 39` (eslesen: _ÜÇ OGuZ_)
    > ...elerinin imlalarını Arap harflerine göre düşünmüştür. Bugün bunun yeri yoktur. man, iki üç kere bu söz söylenir, egek de kaşanır. Bu söz Arapçaya uygun düşmüştür; çünkü erkeğin kadınla çiftleşmesine “5m denirf) SN urra : Erkeklerde olan kasık yarıklığı, kavluç, Oğuzca. 3) ırra : Utanma, (Şeddeli ve şeddesiz dahi olabilir). BU AYRIMIN DÖRTLÜSÜ(*#J Gi zu Şaşalamayı anlatır. " sal 570) ol meni a kıldı - o, beni şaşırttı". 351 udhu : Uyku. " ASİ udhıdım < uyudum. [[y. 39]] (Elifle > arasındaki 4 harfi bir ötre ve bir e...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 58` (eslesen: _ÜÇ OGuZ_)
    > ...nan koyun. [[y. 58]] —- başla — — başlamak, kılavuzluk etmek, komutanlık etmek. (Rad. ; Caf, T. T, U., An. İnd, Man.; Müh. ; İd.). —z başlan — — başlanmak; yönelmek ; hayvan dağa doğru sürülmek ; başaklanmak. aa — m m mmm m başlat — — başlatmak. başmak — pabuç (Oğuzca ve Kıpçakça). Bk : başak. /Rad., Çağ. Kaz., B. Tür.). başmaklan — — başmak (pabuç) sahibi olmak ( Oğuzca). başnak er —- başında tulgası, eğninde zırhı olmıyan kimse, baştar -- orak (Arguca). bat — — batmak, gözden kaybolmak. [[y. 58]] /Rad.; Caf, T. 7, An....


## BK-D-32#5 - Bilge Kağan Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `YaDaG : YaBıZ : BOLDI`
- **kelime karsiliklari:** YAYA : YAVUZ : OLDU
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _YaDaG YaBıZ_)
    > ...lerini orada mızrakladım, hezimete uğrattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük...
  - `Tekin 2003, s. 176` (eslesen: _YaDaG YaBıZ_)
    > ...matın turur* "hareket edemeden duruyor" (IB 16), vb. ## {-gAlI} Ekli Eylem Zarfı **422.** Bu eylem zarfının iki farklı görevi vardır: 1. Asıl eylemin amacını ifade etmek; 2. asıl eylemin başlangıç noktası olan bir eylemi ifade etmek. 1. Asıl eylemin amacı: *yadag yabız boltı tip al-galı kälti* "(Oğuzlar) Türklerin piyadesi bozuldu deyip (bizi tutsak) almak için geldiler" (BK D 32) *[sıŋ]ar süsi äbig barkıg yul-galı bardı, sıŋar süsi süŋüş-gäli kälti* "(Onların) yarı ordusu (bizim) yerimizi yurdumuzu yağmalamak için gitti, y...
  - `Ata 2011, s. 140` (eslesen: _YaDaG YaBıZ_)
    > ...tung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuldu) diye (Oğuzlar bizi) tutsak almak için geldi” BK D32 6. -sAr zarf-fiil eki, asıl fiilin hangi şartlar altında gerçekleştiğini ve eylemin hangi durum ve zamanda işlendiğini gösterir....
  - `Ata 2011, s. 133` (eslesen: _YaDaG YaBıZ_)
    > ...a oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı [[s. 133]] ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuldu) diye (Oğuzlar bizi) tutsak almak için geldi” BK D32 6. -sAr zarf-fiil eki, asıl fiilin hangi şartlar altında gerçekleştiğini ve eylemin hangi durum ve zamanda işlendiğini gösterir. Aynı zamanda...
  - `Tekin 1998, s. 10` (eslesen: _YaDaG_)
    > ...ç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az deği...
  - `Tekin 2003, s. 117` (eslesen: _YaDaG_)
    > ...[ın] yanalım... tedi* "(O haberi işitip) beyler hep birlikte "Dönelim!" dediler" (T 36-37) *oŋ totok yurçin yaraklıg älig+in tutdı* "(Prens Kül) Ong Totok'un kayın biraderini silahlı eli ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok büyük...


## BK-D-32#6 - Bilge Kağan Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `TİP : aLıGaLI : KeLTİ`
- **kelime karsiliklari:** DEYİP : ALGALI : GELDİ
- **kanit:**
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tekin 2003, s. 239` (eslesen: _KeLTİ_)
    > ...*batur** yiğit, bahadır (Altınköl II 5) - **bay** zengin - **Bayça Saŋun** kişi adı ve unvanı (Barık III 1) - **Bayırku** etnik ad - **baz** bağımlı, tabi - **bazlan-** bağımlı olmak, tabi olmak (Tes 11) - **bädiz** süs, resim, heykel - **bädizçi** ressam, heykeltıraş - **bädizlä-** süslemek (IB 43) - **bädük** büyük (O 6) - **bädzät-** süsletmek - **bäg** bey, lord - **bägiç** beycik (Abakan 6) - **bäglik** bey olmaya layık - **bälgü** işaret, alamet, nişan - **bältir** kavşak (yol ya da ırmak) - **bän** ben (bk. **män...
  - `Ata 2011, s. 56` (eslesen: _KeLTİ_)
    > ...n tarafından düzenlenen cenaze törenine Köktürklerin komşularının tamamı katılır. Özellikle Çin hükümdarı, Köl Tigin’in mezar külliyesinde inşa edilen tapınağın duvarla- rını Köl Tigin’in dövüştüğü savaş resimleri ile süslemesi için altı ünlü ressam ve heykeltıraş ile birlikte Köl Tigin anıtının kazınması için 3.75m. yüksekliğinde, tepesi oymacılık sanatıyla süslenmiş boş bir mermer sütun gönderir. Daha sonra bu sütunun batı yüzüne Çince, doğu yüzüne ise Türkçe yazıtlar hâkkedilir ve 732’de Bilge Kağan külliyede...
  - `Olmez 2017, s. 53` (eslesen: _KeLTİ_)
    > ...(< *\*as+ra*) ve *üze* zıtlığı da burada bir *+rA*'nın (*\*üzre < \*ür+re*) varlığına delalettir (Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalard...
  - `Roux, Eski Din, s. 267` (eslesen: _KeLTİ_)
    > ...Aynı tapınak Bugut'ta da olup orada çatıyı taşıyan altı direğin izine rastlanmıştır. Bu resimlerin varlığı yalnızca bunları yapan Çinliler tarafından değil, yazıtın yazarı Yollig Tegin tarafından da belirtilmiştir: "Ebedi taşı süslemek için Çin Kağanından heykeltıraş lar getirttim. [ ... [[s. 267]] ] Ayrıca bir bina inşa ettirdim, içini ve dışını süslettirdim" (M.1, G, satır 12-13). Her ne kadar bugün resimlerin hepsi kaybolmuşsa da heykellerin izlerine şurada burada rastlanmaktadır.7 Bu konuya daha sonra tekrar geri d...
  - `Ata 2011, s. 49` (eslesen: _KeLTİ_)
    > ...rafından düzenlenen cenaze törenine Köktürklerin komşularının tamamı katılır. [[s. 49]] Özellikle Çin hükümdarı, Köl Tigin’in mezar külliyesinde inşa edilen tapınağın duvarlarını Köl Tigin’in dövüştüğü savaş resimleri ile süslemesi için altı ünlü ressam ve heykeltıraş ile birlikte Köl Tigin anıtının kazınması için 3.75m. yüksekliğinde, tepesi oymacılık sanatıyla süslenmiş boş bir mermer sütun gönderir. Daha sonra bu sütunun batı yüzüne Çince, doğu yüzüne ise Türkçe yazıtlar hâkkedilir ve 732’de Bilge Kağan külliyede Kö...


## BK-D-32#7 - Bilge Kağan Yazıtı, Doğu 32. satir  (6 kelime)

- **transkripsiyon:** `SIŊaR : SÜSİ : eBiG : BaRKıG : YOLıGaLI : BaRDI`
- **kelime karsiliklari:** SINGAR : SÜSİ : EVİ : BARKI : YAĞMALAMAYA : VARDI
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _SIŊaR SÜSİ eBiG BaRKıG_)
    > ...rattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men i...
  - `Ata 2011, s. 140` (eslesen: _SIŊaR SÜSİ eBiG BaRKıG_)
    > ...ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuldu) diye (Oğu...
  - `Ata 2011, s. 133` (eslesen: _SIŊaR SÜSİ eBiG BaRKıG_)
    > ...a insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı [[s. 133]] ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuldu) diye (Oğuzlar bizi)...


## BK-D-32#8 - Bilge Kağan Yazıtı, Doğu 32. satir  (4 kelime)

- **transkripsiyon:** `SIŊaR : SÜSİ : SÜŊüŞGeLİ : KeLTİ`
- **kelime karsiliklari:** SINGAR : SÜSİ : SÜNGÜŞMEYE : GELDİ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _SÜSİ SÜŊüŞGeLİ KeLTİ_)
    > ...kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bod...
  - `Tekin 2003, s. 131` (eslesen: _SIŊaR SÜSİ_)
    > ...[s. 131] # s. 131 — ORHON TÜRKÇESİ GRAMERİ ## Kesir Sayıları **284.** Runik metinlerde geçen tek kesir sayısı yarım, yarı, bir çiftin teki anlamındaki *sıŋar* sözcüğüdür (krş. Kırg. *sıŋar* ay., Yak. *aŋar, aŋār* ay. *[sıŋ]ar süsi äbig barkıg yulgalı bardı, sıŋar süsi süŋüşgäli kälti* "Ordularının yarısı bizim) evlerimizi barklarımızı yağmalamak için gitti, öbür yarısı da savaşmak için üzerimize) geldi" (BK D 32) Moyun Çor yazıtında bu sözcük üçüncü kişi iyelik eki ile kullanılır: *sıŋarı bodun içikdi, sıŋarı b[odun...]*...
  - `Ata 2011, s. 140` (eslesen: _SIŊaR SÜSİ_)
    > ...ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuld...
  - `Ata 2011, s. 133` (eslesen: _SIŊaR SÜSİ_)
    > ...a insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı [[s. 133]] ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu (da bizimle) savaşmak için geldi” BK D32 yadag yabız boltı tip al-galı kelti “(Türklerin) piyadesi kötü oldu (bozuldu) diye (Oğ...
  - `Tekin 1998, s. 11` (eslesen: _SIŊaR_)
    > ...esiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovas...
  - `Tekin 2003, s. 77` (eslesen: _SIŊaR_)
    > ...(T 32) < **sän+ga* - *biz(i)ŋä* "bize" (KT D 19, 40; BK D 21) < **bizin+gä* - *aŋar* "ona" (KT G 11, vb.) < **an+gar* - *aŋaru* "ona doğru" (T 20) < **an+garu* - *baŋaru* "bana doğru" (T 34) < **bän+garu* - *baş(ı)ŋa* "başına" (KT D 33) < **baş+in+ga* - *ortosıŋaru* "ortasına doğru" (KT G 2, vb.) < **orto+sin+garu*, vb. İstisna: /ng/ > /ŋ/ gelişmesi Moyun Çor yazıtında iki kez geçen *ıngaru* sözcüğünde gerçekleşmemiştir: - *anta ıngaru* "ondan sonra, ondan öte" (MÇ K 10), *anta [ın]garu* (MÇ B 2). **142.** /ny/ > /ñ/...


## BK-D-32#9 - Bilge Kağan Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `BİZ : aZ : eRTiMiZ`
- **kelime karsiliklari:** BİZ : AZ : İDİK
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _BİZ aZ eRTiMiZ_)
    > ...a kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti,...
  - `Ergin 1970, s. 29` (eslesen: _BİZ aZ_)
    > ...ldu. İlk baharında | Oğuza doğru ordu sevk ettim. İlk ordu dışarı çıkmıştı, ikinci ordu merkezde idi. Üç Oğuz ordusu basıp geldi. Yaya, kötü oldu diyip yenmek için geldi. Bir kısım ordusu evi barkı yağma etmek için gitti, bir kısım ordusu savaşmak için geldi. Biz az idik, kötü durumda idik. Oğuz.......... düşman .......... [[s. 29]] Tanrı kuvvet verdiği için orda mızrakladım, | dağıttım. Tanrı bahşettiği için, ben kazandığım için Türk milleti kazanmıştır. Ben küçük kardeşimle beraber böyle başa geçip kazanmasam Türk mill...
  - `Tekin 2003, s. 119` (eslesen: _BİZ aZ_)
    > ...saldırayım" (T 11) *män tokuz yegirmi yıl şad olortum* "Ben on dokuz yıl Şad (olarak) hüküm sürdüm" (BK G 9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (ve) kötü durumda idik" (BK D 32) *biz eki bıŋ ärtimiz* "Biz iki bin (kişi) idik" (T 16) *kagan at bunta biz birtimiz* "(Ona) hakan unvanını buruda biz verdik" (KT D 20) *biz az biz* "Biz azız" (O 7) b) Yüklem bağlayıcısı...
  - `03_Codex_Cumanicus_Kuun_1880, s. 359` (eslesen: _BİZ aZ_)
    > ...X'ga tengrining jalguz tugan oulu dep. (,) kim barca zamanalarda^ (sic!) [[y. 359]] buru ata tuupfur (,) tengri tengridan (,) jarih jarihtan (,) cin^ tengri cin tengridan (,) etihxiey'* (,) ataga tozdes^ tuupturur (,) andan ulam bar barca bolganturur^ (,) kl biz azamlar ucun dagu bezim ongimis ucun. kokdan enip aritindan ulam erdeng ana malamda^ tenahp^ kisi boluptrur. Pont pilat jargu- ' Hoc est symbolum concilii Nicaeni. ^ I. e. zamanlarda7t. 3 Uigur. ci'm, cm, cag-. ci)i, ce/i, vid. Vambery «A torok-tatar nyelvek e...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 344` (eslesen: _BİZ aZ_)
    > ...[[s. 344]] Dağı bir beymiz Yesus Hristusga teii.rinin yalguz tugan oulu dep, kim barça zamanlardan burun atadan tuvup turur. Teii.ri teii.riden, yaruk-yaruhtan, çın teiiri çın teiiriden etilmey, ataga tözdeş tuvup-turur. Andan ulam bar barça bolgan turur, ki biz azamlar üçün dağı bizim önimiz üçün. Kökden enip, an tından ulam erden ana Mariamda tenalıp kişi bulup turur. [[s. 344]] Bu günkü türkçe ile: İnanırım, her şeye kudretli olan bir baba Tann'ya; göğü, yeri her bir görünür (ve) görünmezi yarattı diye. Dahi efendimi...
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...


## BK-D-32#10 - Bilge Kağan Yazıtı, Doğu 32. satir  (12 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaBıZ : eRTiMiZ : OGUZ : --- T : YaGI : --- : TeŊRİ : KÜÇ : BİRTÜK : ÜÇüN : aNDA : SaNÇDıM`
- **kelime karsiliklari:** YAVUZ : İDİK : OĞUZ : --- T : YAĞI : --- : TANRI : GÜÇ : VERDİĞİ : İÇİN : [O] ANDA : SANÇTIM
- **kanit:**
  - `Tekin 1998, s. 34` (eslesen: _TeŊRİ KÜÇ BİRTÜK ÜÇüN_)
    > ...kanığım İlteriş Kağanığ öğüm İlbilge Katunuğ tef ri töpüsinte tutup yüğerü kötürti erinç. Kafiğım kağan yeti yeğirmi erin taşlıklmlış. “Taşra) yolrı|- yur” (tiyin kü eşidip blallık|dlakı)| tağlıkmış, tağdakı| (D 11) inmiş, tirilip yetmiş er bolmış. [[s. 34]] Tengri küç birtük üçün, kafığım Kağan süsi böri teğ ermiş, yağısı kotiy teğ ermiş. İlgerü kurığaru sülep tirmiş kubratmış. Kamağı yeti yüz er bolmış. Yeti yüz er bolup elfsiremiş kağansıramış bodunuğ, küngedmiş, ORHON YAZITLARI 65 imişler şüphesiz, kötü imişler şüphesiz. [[s. 34]...
  - `Ata 2011, s. 52` (eslesen: _TeŊRİ KÜÇ BİRTÜK ÜÇüN_)
    > ...m ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş...
  - `Ata 2011, s. 45` (eslesen: _TeŊRİ KÜÇ BİRTÜK ÜÇüN_)
    > ...ok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmı...


## BK-D-33#1 - Bilge Kağan Yazıtı, Doğu 33. satir  (10 kelime)

- **transkripsiyon:** `YaYNıDıM : TeŊRİ : YaRLuKaDUK : ÜÇüN : MeN : KaZGaNDUK : ÜÇüN : TÜRK : BODuN : KaZGaNMıŞ`
- **kelime karsiliklari:** YAYDIM : TANRI : BUYURDUĞU : İÇİN : BEN : KAZANDIĞIM : İÇİN : TÜRK : BOYLARI : KAZANMIŞ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ÜÇüN MeN_)
    > ...süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin ba...
  - `Tekin 2003, s. 203` (eslesen: _ÜÇüN TÜRK_)
    > ...takı Öbekleri **466.** Sontakı öbeklerinde öbeği yöneten bir sontakıdır. Sontakının nesnesi ise bir ad, bir zamir ya da bir sayı öbeği olabilir. Sontakı öbekleri çoğu kez zarf tümleci olarak görev yapar. - *tabgaç tapa* "Çin'e doğru" (KT D 28) - *türük bodun üçün* "Türk halkı için" (KT D 27) - *inim kül tigin birlä* "erkek kardeşim Prens Kül ile" (KT D 26) - *şantuŋ yazıka tägi* "Şantung ovasına kadar" (KT G 3) Bk. **Sontakılar**. ## Eylem Tümleçleri **467.** Eylem tümleçlerinin üç türü vardır: eşitleme tümleçleri, belirl...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...


## BK-D-33#2 - Bilge Kağan Yazıtı, Doğu 33. satir  (10 kelime)

- **transkripsiyon:** `eRiNÇ : MeN : İNiLiGÜ : BUNÇA : BaŞLaYU : KaZGaNMaSaR : TÜRK : BODuN : ÖLTeÇİ : eRTİ`
- **kelime karsiliklari:** GERÇEK : BEN : İNİMLE : BUNCA : BAŞLAYIP : KAZANMASAM : TÜRK : BOYLARI : ÖLECEK : İDİ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _MeN İNiLiGÜ BUNÇA BaŞLaYU_)
    > ...arkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdü...
  - `Olmez 2017, s. 54` (eslesen: _MeN İNiLiGÜ BUNÇA BaŞLaYU_)
    > ...a ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birlikte bu şekilde başa geçip kazanmasaydım (...)" (BK D 33) ### Zamirler ve çekimleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :-...
  - `Tekin 2003, s. 192` (eslesen: _İNiLiGÜ BUNÇA BaŞLaYU_)
    > ...mlı şartın ana cümlesinin yüklemi ise {-DAçI} ekli gelecek zaman eylem sıfatına *är-* yardımcı eyleminin geçmiş zaman biçimlerinin eklenmesi ile oluşturulur. *kül tigin yok är-sär kop öl-täçi ärtigiz* "Prens Kül olmasaydı hepiniz ölecek idiniz" (KT K 10) *män iniligü bunça başlayu kazganm[a-sar] türük bodun öl-täçi är-ti* "Ben erkek kardeşimle birlikte (Türk halkının) başına geçip bunca başarılı olmasaydım Türk halkı ölecek idi" (BK D 33) *ilteriş kagan kazganma-sar udu bän özüm kazganma-sar il yämä bodun yämä yok är-täçi är-ti* "İlter...


## BK-D-33#3 - Bilge Kağan Yazıtı, Doğu 33. satir  (3 kelime)

- **transkripsiyon:** `YOK : BOLDaÇI : eRTİ`
- **kelime karsiliklari:** YOK : OLACAK : İDİ
- **kanit:**
  - `Tekin 2003, s. 75` (eslesen: _BOLDaÇI_)
    > ...adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K...
  - `Radloff, s. 399` (eslesen: _BOLDaÇI_)
    > ...Beyrek için büyük yas tuttular." Aynı eserin başka bir yerinde "karalar giyip gök sarındılar" denilmektedir. (215) Yaslı çadırın üzerine bayrak asmak Oğuz- (214) Yazıttaki " .. [[s. 399]] .iki şad, ulayu inigünim, oğlanım, beglerim, bu dunım közi, kaşı yablak boldaçı tip sakındım" cümlesinden bu şahısla rın yalnız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat etmelerinden hakanın telaşa düştüğü anlaşılmaktadır. Bilge Ha kan yazıtındaki "saçlarını kulaklarını biçtiler" cümlesi de bunu teyit eder....
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 284` (eslesen: _BOLDaÇI_)
    > ...üp kaşgalakı suwka batar "Ördek beni o göllerde temrensiz ok atar görse, kaşgalak suya batar", (Ördek beni bu sularda temrensiz okla gördüğü vakit bu kuş suya batar). [[y. 284]] Ek belgülüğ: weli belgülüğ nenğ < belli nesne", Şu sayda dabi gelmigtir : SİSE Se boldaçı buzagu öküz ara .Delgülüğ - öküz olacak buzağı bellidir, olacak buzağı öküzler arasında bellidir", Bu sav,kendisinden her türlü iyilikler beklenen ADİ yiğit, koçak genç için söylenir. $ küzkünek: Çakıra ve kelere benzer bir kuş; hava yutmakla geçinir. Sk klan...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 202` (eslesen: _BOLDaÇI_)
    > ...iştir. 220 Umumiyetle Kırgız-Kazaklarda yas tutma töreni ve âdetleri eski Gök Türk ve Oğuzlar’da olduğu gibidir. X IX . yüzyılın ortalarına kadar devam etmiştir. [[s. 202]] Yazıttaki “ ...ik i şad, ulayu inigünim, oğlanım, begleriın, budunım közi, kaşı yablak boldaçı tip sakındım” cümlesinden bu şahısların yal nız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat et melerinden hakanın telâşa düştüğü anlaşılmaktadır. Bilge Hakan yazıtın daki “ saçlarını kulaklarım........................ biçtiler” cüml...


## BK-D-33#4 - Bilge Kağan Yazıtı, Doğu 33. satir  (5 kelime)

- **transkripsiyon:** `TÜRK : BeGLeR : BODuN : aNÇA : SaKıNıŊ`
- **kelime karsiliklari:** TÜRK : BEĞLERİ : BOYLARI : ANCA : SAKININ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BeGLeR BODuN_)
    > .... Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZ...
  - `Ata 2011, s. 139` (eslesen: _BeGLeR BODuN_)
    > ...yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “pek çok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o...
  - `Olmez 2017, s. 58` (eslesen: _BeGLeR BODuN_)
    > ...lge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinleyin" (KT G 10) ### Zarffiil ekleri: **-A, -I, -U ünlüleri (günümüz Türkçesine benzer şekilde) zarffiil eki olarak kullanılırlar:** **-A :** *ıya basıp olortı* "basıp hüküm sürdü" (Tes D 6); *teŋri tuta bėrti*...
  - `Tekin 1998, s. 22` (eslesen: _BODuN aNÇA_)
    > ...gı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s....
  - `Tekin 2003, s. 209` (eslesen: _BODuN aNÇA_)
    > ...K D 31) - *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Orada kalmış olanlarınız her yöne doğru (gitgide) zayıflayarak ve ölerek yürüyor idiniz" (KT G 9), vb. 5. Özne ad öbeği: - *bodun boguzi tok ärti* "Halkın boğazı tok idi" (T 8) - *türük kara kamag bodun / ança timiş* "Türk avam tabakası şöyle demiş" (KT D 8-9), vb. 6. Özne yüklemli bir yapı (cümle): [s. 210] # s. 210 — TALAT TEKİN *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş / idi yok ärmiş* "Türk halkının Demir Kapı'ya ve Tensi oğlu (Tanrı oğlu) d...
  - `Olmez 2017, s. 22` (eslesen: _BODuN aNÇA_)
    > ...a düşünürlermiş." (KT G 4-5). Çin yönetimi boyunduruğu altına aldığı Türkleri kullanarak Mançurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşü...


## BK-D-33#5 - Bilge Kağan Yazıtı, Doğu 33. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `aNÇA : BİLiŊ : --- : OGuZ : BODuN : --- D --- : --- : IDMaYIN : TİYiN : SÜLeDiM`
- **kelime karsiliklari:** ANCA : BİLİN : --- : OĞUZ : BOYLARI : --- D --- : --- : İDMESİN : DİYE : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _aNÇA BİLiŊ OGuZ_)
    > ...birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le...
  - `Tekin 1998, s. 21` (eslesen: _aNÇA BİLiŊ_)
    > ...için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin...
  - `Tekin 2003, s. 122` (eslesen: _aNÇA BİLiŊ_)
    > ...* "(Bu fal) çok iyidir" (IB 5, vb.) *añıg yablak ol* "(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädi...
  - `Olmez 2017, s. 99` (eslesen: _aNÇA BİLiŊ_)
    > ...ki - +ņa: üçüncü kişi iyelik ekinden sonra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı ya...
  - `Ergin 1970, s. 29` (eslesen: _BİLiŊ OGuZ_)
    > ...rı kuvvet verdiği için orda mızrakladım, | dağıttım. Tanrı bahşettiği için, ben kazandığım için Türk milleti kazanmıştır. Ben küçük kardeşimle beraber böyle başa geçip kazanmasam Türk milleti ölecekti, yok olacaktı. Türk beyleri, milleti, böyle düşünün, böyle bilin! Oğuz kavmi.......... göndermeden, diye ordu sevk ettim. | Evini barkını bozdum. Oğuz kavmi Dokuz Tatar ile toplanıp geldi. Aguda iki büyük savaş yaptım. Ordusunu bozdum, ilini orda aldım. Öyle kazanıp .... [[s. 29]] Tanrı buyurduğu için otuz üç yaşımda ........ id...
  - `Tekin 1998, s. 23` (eslesen: _OGuZ BODuN_)
    > ...iş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kıl...


## BK-D-34#1 - Bilge Kağan Yazıtı, Doğu 34. satir  (3 kelime)

- **transkripsiyon:** `eBİN : BaRKIN : BOZDuM`
- **kelime karsiliklari:** EVİNİ : BARKINI : BOZDUM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _eBİN BaRKIN_)
    > ...ün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanı...
  - `Tekin 1998, s. 28` (eslesen: _BaRKIN_)
    > ...aç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim...
  - `Ergin 1970, s. 29` (eslesen: _BaRKIN_)
    > ...çin, ben kazandığım için Türk milleti kazanmıştır. Ben küçük kardeşimle beraber böyle başa geçip kazanmasam Türk milleti ölecekti, yok olacaktı. Türk beyleri, milleti, böyle düşünün, böyle bilin! Oğuz kavmi.......... göndermeden, diye ordu sevk ettim. | Evini barkını bozdum. Oğuz kavmi Dokuz Tatar ile toplanıp geldi. Aguda iki büyük savaş yaptım. Ordusunu bozdum, ilini orda aldım. Öyle kazanıp .... [[s. 29]] Tanrı buyurduğu için otuz üç yaşımda ........ idi. Seçkin, muhterem, güç | beslemiş olan, kahraman M U H A R R E M...
  - `Tekin 2003, s. 59` (eslesen: _BaRKIN_)
    > ...[ıl]k[ıs]ın* "at sürülerini" (BK GB) < *yılkısin* (BK D 24) Uygur yazıtlarında da art ünlülü sözcüklere eklenen 3. kişi iyelik eki genellikle ünlü uyumuna girer: - *atın* "adlarını" (Tar. K 5) < *āt-in* - *bar(ı)mın* "malını mülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *başın* "doruğunu" (MÇ D 4) < *baş-in* - *katunın* "hatununu" (MÇ K 10) < *katun-in* - *kızın* "kızlarını" (MÇ D 3) < *kız-in* - *kod(u)zın* "kadınlarını" (MÇ D 3) < *koduz-in* - *tabarın* "hayvanlarını" (MÇ G 5) - *yılkı...
  - `Olmez 2017, s. 43` (eslesen: _BaRKIN_)
    > ...*koń yıl:** *kül tėgin koń yılka yėti yėgirmike uçdı , tokuzunç ay yėti otuzka yog ertürtümüz* "Kül Tėgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). KT K-D 9. **bėçin yıl:** *barkın bedizin bitig taşin bėçin yılka yėtinç ay yėti otuzka kop alkdımız* "(Kül Tėgin'in) türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732). KT K-D 10. **takıgu yıl:** *... evime ėkinti ay altı y...
  - `Ergin 1970, s. 27` (eslesen: _BOZDuM_)
    > ...Fakir milleti zengin kıldım. | Az milleti çok kıldım. Değerli illiden, değerli kağanlıdan daha iyi kıldım. Dört taraftaki milleti hep tâbi kıldım, düşmansız kıldım. Hep bana itaat etti. [[s. 27]] On yedi yaşımda Tanguta doğru ordu sevk ettim. Tangut milletini bozdum. Oğlunu, karısını, at sürüsünü, servetini orda aldım. On sekiz yaşımda Altı Çub Soğdaka doğru ordu sevk ettim. Milleti orda bozdum. Çinli Ong vali, elli bin asker geldi. Iduk Başta M U H A R R E M E R G İ N 1. elbisesiz, çıplak [s. 28] O R H U N Â B İ D...


## BK-D-34#2 - Bilge Kağan Yazıtı, Doğu 34. satir  (7 kelime)

- **transkripsiyon:** `OGuZ : BODuN : TOKuZ : TaTaR : BİRLE : TİRİLiP : KeLTİ`
- **kelime karsiliklari:** OĞUZ : BOYLARI : DOKUZ : TATAR : İLE : DİRİLİP : GELDİ
- **kanit:**
  - `Tekin 2003, s. 150` (eslesen: _OGuZ BODuN TOKuZ TaTaR_)
    > ...lä* "ile, ile birlikte" < *\*bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı, Dokuz Tatarlar ile birlikte toparlanıp (üzerimize) geldi" (BK D 34) *eçim kagan birlä ilgärü yaşıl ügüz şantuŋ yazıka tägi sülädimiz* "Amcam hakan ile doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik" (KT D 17) *bilgä...
  - `Tekin 1998, s. 39` (eslesen: _BODuN TOKuZ TaTaR BİRLE_)
    > ...k bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıd...
  - `Tekin 1998, s. 23` (eslesen: _OGuZ BODuN_)
    > ...iş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kıl...
  - `Tekin 2003, s. 124` (eslesen: _OGuZ BODuN_)
    > ...(T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışa...
  - `Ata 2011, s. 118` (eslesen: _OGuZ BODuN_)
    > ...eyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türet...
  - `Olmez 2017, s. 80` (eslesen: _BODuN TOKuZ_)
    > ...*Çevirisi:** *G 2. tokuz oguz begleri : bodunı : bo savımın : edgüti ėşid katıgdı :* *tıŋla ilgerü : kün : tugsıkka : bėrigerü : kün : ortosıŋaru : kurıgaru kün :* *batsıkıya : yırıgaru : tǖn : ortosıŋaru : anta : içreki : bodun : k°op : maŋa* *: körür boŋça bodun :* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içindeki halkın tamamı bana bağlıdır. Bu kadar halkın" -...


## BK-D-34#3 - Bilge Kağan Yazıtı, Doğu 34. satir  (5 kelime)

- **transkripsiyon:** `aGUDA : iKİ : ULuG : SÜŊüŞ : SÜŊüŞDüM`
- **kelime karsiliklari:** AĞUDA : İKİ : ULU : SÜNGÜŞ : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ULuG SÜŊüŞ SÜŊüŞDüM_)
    > ...niliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. T...
  - `Ergin 1970, s. 29` (eslesen: _aGUDA iKİ_)
    > ...k kardeşimle beraber böyle başa geçip kazanmasam Türk milleti ölecekti, yok olacaktı. Türk beyleri, milleti, böyle düşünün, böyle bilin! Oğuz kavmi.......... göndermeden, diye ordu sevk ettim. | Evini barkını bozdum. Oğuz kavmi Dokuz Tatar ile toplanıp geldi. Aguda iki büyük savaş yaptım. Ordusunu bozdum, ilini orda aldım. Öyle kazanıp .... [[s. 29]] Tanrı buyurduğu için otuz üç yaşımda ........ idi. Seçkin, muhterem, güç | beslemiş olan, kahraman M U H A R R E M E R G İ N [s. 30] O R H U N Â B İ D E L E R İ kağanına i...
  - `Tekin 1998, s. 26` (eslesen: _ULuG SÜŊüŞ_)
    > ...çe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla...
  - `Tekin 2003, s. 130` (eslesen: _ULuG SÜŊüŞ_)
    > ...larak: *bir ärig sançdı* "(Prens Kül) bir adamı mızrakladı" (KT K 5) *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) *eki ülügi atlıg ärti bir ülügi yadag ärti* "Onların üçte ikisi (*harf.* iki kısmı) atlı idi, üçte biri (*harf.* bir kısmı) piyade idi" (T 4) *eki ulug süŋüş* "İki büyük savaş" (BK D 34) *üç otuz balık* "yirmi üç şehir" (T 19) *yeti yüz* "700" (T 4) *eki bıŋ* "2000" (T 16, 18) Aşağıdaki üç örnekte asıl sayılar ile bunların nitelediği isim arasında sayıca uygunluk vardır: *tokuz ärän* "dokuz adam" (KT K 9) *yeti ä...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 415` (eslesen: _iKİ ULuG_)
    > ...zda akça kirek hulganı üçün, kileçek yılnıii. kün ilgeride bulsa, uluğ hazinemizni, kaysı hMA V alevka bulgan uluğ hazinemizge yitiştirgeysiz. Uluğ ilçiiiiz Feodor Lavrent'yeviç . [[s. 415]] Buturlin ve yazuçıiiız Voyin ( ?) Triskin (?) bile yiber geysiz kim, iki uluğ hazinemizni bizim hatremiz üçün sıylap (saylap ?) yihergey irdiniz. Taki siz kardeşimizden kultka tilek kılırmız kim, dostluk, kardeşlik sebebli on miii (metinde: bin) sum nukrat akça harçlık tileyimiz, elbette ve elbette kardeşlik, yuldaşlık ve hem dostluk i...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...


## BK-D-34#4 - Bilge Kağan Yazıtı, Doğu 34. satir  (5 kelime)

- **transkripsiyon:** `SÜSİN : BOZDuM : İLiN : aNDA : aLTıM`
- **kelime karsiliklari:** SÜSİNİ : BOZDUM : İLİNİ : [O] ANDA : ALDIM
- **kanit:**
  - `Ergin 1970, s. 29` (eslesen: _BOZDuM İLiN_)
    > ...azanmasam Türk milleti ölecekti, yok olacaktı. Türk beyleri, milleti, böyle düşünün, böyle bilin! Oğuz kavmi.......... göndermeden, diye ordu sevk ettim. | Evini barkını bozdum. Oğuz kavmi Dokuz Tatar ile toplanıp geldi. Aguda iki büyük savaş yaptım. Ordusunu bozdum, ilini orda aldım. Öyle kazanıp .... [[s. 29]] Tanrı buyurduğu için otuz üç yaşımda ........ idi. Seçkin, muhterem, güç | beslemiş olan, kahraman M U H A R R E M E R G İ N [s. 30] O R H U N Â B İ D E L E R İ kağanına ihanet etti. Üstte Tanrı, mukaddes yer, su,...
  - `Tekin 1998, s. 39` (eslesen: _BOZDuM_)
    > ...rkek kardeşimle beraber bu kadar önderlik edip çalışmasa ve muvaffak olmasa idim, Türk halkı ölecek idi, yok olacak idi. Türk beyleri (ve) halkı şöylece düşünün (ve) şöylece bilin: Oğuz. halki se. rer senn göndermiyeyim diye sefer ettim, (D 34) evini barkını bozdum. Oğuz halkı, Dokuz Tatar'larla birlikte toparlanıp geldi. Ağu'da iki büyük savaş verdim. Askerlerini bozdum, ülkelerini orada zaptettim. [[s. 39]] Öylece kazanıp ..........ıu (Tanrı) buyurduğu için, ben Otuz ÜÇ YAŞIMCA serisine ARAR YOK İdi ss kişi (D 35) be...
  - `Ergin 1970, s. 27` (eslesen: _BOZDuM_)
    > ...Fakir milleti zengin kıldım. | Az milleti çok kıldım. Değerli illiden, değerli kağanlıdan daha iyi kıldım. Dört taraftaki milleti hep tâbi kıldım, düşmansız kıldım. Hep bana itaat etti. [[s. 27]] On yedi yaşımda Tanguta doğru ordu sevk ettim. Tangut milletini bozdum. Oğlunu, karısını, at sürüsünü, servetini orda aldım. On sekiz yaşımda Altı Çub Soğdaka doğru ordu sevk ettim. Milleti orda bozdum. Çinli Ong vali, elli bin asker geldi. Iduk Başta M U H A R R E M E R G İ N 1. elbisesiz, çıplak [s. 28] O R H U N Â B İ D...
  - `Tekin 1998, s. 27` (eslesen: _SÜSİN_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sün...
  - `Tekin 2003, s. 132` (eslesen: _SÜSİN_)
    > ...anılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...
  - `Ata 2011, s. 115` (eslesen: _SÜSİN_)
    > ...ti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu...


## BK-D-34#5 - Bilge Kağan Yazıtı, Doğu 34. satir  (13 kelime, TAS KIRIGI)

- **transkripsiyon:** `aNÇA : KaZGaNıP : --- : TeŊRİ : YaRLuKaDUK : ÜÇüN : MeN : OTuZ : aRTUKI : ÜÇ : YaŞıMA : --- UK : eRTİ`
- **kelime karsiliklari:** ANCA : KAZANIP : --- : TANRI : BUYURDUĞU : İÇİN : BEN : OTUZ : ARTI : ÜÇ : YAŞIMDA : --- UK : İDİ
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ÜÇüN MeN OTuZ aRTUKI_)
    > ...|bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. Tokuz Oğuz bodun yerin subın ıdıp Tabgaçgaru bardı. Tabgaç |..............se | bu yerde kelti....
  - `Tekin 1998, s. 13` (eslesen: _aNÇA KaZGaNıP_)
    > ...da otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Türklerin dillerini yazmak için kullandıkları en eski bir alfabe ile yazılmıştır. Türkoloji l...
  - `Tekin 1998, s. 38` (eslesen: _OTuZ aRTUKI_)
    > .... Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz men...
  - `Tekin 2003, s. 129` (eslesen: _OTuZ aRTUKI_)
    > ...iş* "67" (Begre b 27), *säkiz yetmiş* "68" (Hem.-Çır. 9), *tokuz säkiz on* "79" (Elegest I 5), vb. 3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Eleg...
  - `Ata 2011, s. 114` (eslesen: _OTuZ aRTUKI_)
    > ...unu anlarız ve kalıptaki onluk hane yerine 30’u koyarız. Böylece, T. Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer:...
  - `Olmez 2017, s. 45` (eslesen: _ÜÇ YaŞıMA_)
    > ...otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 defa sefer etmiş", *otuz artokı bir yaşıma* "31 yaşımda", *otuz artokı üç yaşıma* "33 yaşımda". Bazin'in belirttiğine göre *artokı* ile kurulan sayı sisteminin kalıntıları Yakutlar arasında 19. yüzyıla kadar sürmüştür: *uon orduga bir* (= *\*on artokı bir*) "on bir". L. Clark'a göre de bugün Çin'in Gansu eyaletine bağlı Sunen bölgesinde...


## BK-D-34#6 - Bilge Kağan Yazıtı, Doğu 34. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÖDSiG : ÖT : ÜLüG : KÜÇ : ---`
- **kelime karsiliklari:** DEVİRDE : ÖĞÜT : ÜLÜ : GÜÇ : ---
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ÖDSiG ÖT_)
    > ...a |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. Tokuz Oğuz bodun yerin subın ıdıp Tabgaçgaru bardı. Tabgaç |..............se | bu yerde kelti. “İğideyin” tiyin saklıntım ..............


## BK-D-35#1 - Bilge Kağan Yazıtı, Doğu 35. satir  (4 kelime)

- **transkripsiyon:** `İGiDMiŞ : aLP : KaGaNıŊA : YaŊıLDI`
- **kelime karsiliklari:** YEDİRMİŞ [OLAN] : ALP : KAĞANINA : YANILDI
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _KaGaNıŊA_)
    > ...lmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığaru (D 20) barığma bardığ. Barduk yerde edgüğ...
  - `Ergin 1970, s. 15` (eslesen: _KaGaNıŊA_)
    > ...çekiştirttiği için, Türk milleti il yaptığı ilini elden çıkarmış, | kağan yaptığı kağanını kaybedi vermiş. Çin milletine beylik erkek evladı kul oldu, hanımlık kız evladı cariye oldu. [[s. 15]] Türk beyler Türk adını bıraktı. Çinli beyler Çin adını tutup, Çin kağanına itaat etmiş. Elli yıl işi gücü vermiş. Doğuda gün doğusunda Bökli kağana kadar ordu sevk edi vermiş. Batıda Demir Kapıya kadar ordu sevk edi vermiş. Çin kağanına ilini, töresini alı vermiş. Türk halk | kitlesi şöyle demiş: illi millet idim, ilim şimdi hani, k...
  - `Ata 2011, s. 113` (eslesen: _KaGaNıŊA_)
    > ...ra: sekiz yegirmi yaş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak...
  - `Tekin 1998, s. 20` (eslesen: _İGiDMiŞ_)
    > ...8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay...
  - `Tekin 2003, s. 92` (eslesen: _İGiDMiŞ_)
    > ...4, MÇ D 6) < *yäl-* "(at) dörtnal gitmek" **209.** {-mAk}: - *armakçısin* sözcüğündeki (KT D 6) *armak* "aldatmak" < *\*ar-* **210.** {-mAn}: - *tuman* "duman, sis" (IB 20) < *tu-* "kapanmak" (T 23) **211.** {-miş}. Geçmiş zaman eylem sıfatı türeten ek: - *igidmiş* "beslemiş" (BK K 6) < *igid-* "beslemek" - *kalmiş* "(hayatta) kalanlar" (KT G 9) < *\*kāl-* "kalmak" - *tägmiş* "erişme, varma" (T 18) < *täg-* "erişmek, varmak"; bk. **Eylem Adları**. **212.** {-(X)n}. Eylem sonucu adlar türeten ek: - *bulun* "tutsak, esi...
  - `Olmez 2017, s. 92` (eslesen: _İGiDMiŞ_)
    > ...Böyle olduğun” antag: isim tabanı (antag < \*anı teg) +(ı)ŋ: teklik ikinci kişi eki +(ı)n: iyelik ekinden sonra gelen belirtme durumu eki [Levha: Köktürk (runiform) harfleriyle basılmış 4 satır metin; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemi...


## BK-D-35#2 - Bilge Kağan Yazıtı, Doğu 35. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÜZE : TeŊRİ : IDUK : YiR : SUB : --- : eÇİM : KaGaN : KUTI`
- **kelime karsiliklari:** ÜSTTE : TANRI : KUTLU : YER : SU : --- : EÇÜM : KAĞANIN : KUTUNU
- **kanit:**
  - `Tekin 2003, s. 161` (eslesen: _SUB eÇİM KaGaN KUTI_)
    > ...ç yablak ärmiş ärinç* "Kumandanları da akılsız imişler şüphesiz, kötü imişler şüphesiz" (KT D 5), vb. 2. {-DI} ekli kesin geçmiş zamanla: *[özümin ol täŋri] kagan olortdı ärinç* "beni o Tanrı hakan olarak tahta oturttu şüphesiz" (KT D 26) *üzä täŋri ıduk yer sub [eçim] kagan kutı taplamadı ärinç* "(Bu hareketi) yukarıda Tanrı, (aşağıda da) kutsal Yer-Su (ruhları) ve amcam hakanın ruhu beğenmedi şüphesiz" (BK D 35) *kaŋım ilteriş kaganıg ögüm ilbilgä katunug täŋri töpösintä tutup yüg(g)ärü kötürti ärinç* "(Yukarıdaki Türk Tanrısı ve Tü...
  - `Ata 2011, s. 123` (eslesen: _SUB eÇİM KaGaN KUTI_)
    > ...n edattır. Çoğunlukla -mIş ekli geçmiş zamanla kullanılır. anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç “ondan sonra erkek kardeşleri kağan olmuşlar şüphesiz, oğlanları kağan olmuşlar şüphesiz” KT D4-5 üze teŋri ıduk yer sub eçim kağan kutı taplamadı erinç “yukarıda Tanrı, (aşağıda) kutsal yer-su (ruhları) (ve) amcam hakanın ruhu beğenmedi şüphesiz” BK D35 kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yüg(g)erü kötürdi erinç “babam İlteriş Kağanı annem İlbi...
  - `Ata 2011, s. 116` (eslesen: _SUB eÇİM KaGaN KUTI_)
    > ...lık bildiren edattır. Çoğunlukla -mIş ekli geçmiş zamanla kullanılır. [[s. 116]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç “ondan sonra erkek kardeşleri kağan olmuşlar şüphesiz, oğlanları kağan olmuşlar şüphesiz” KT D4-5 üze teŋri ıduk yer sub eçim kağan kutı taplamadı erinç “yukarıda Tanrı, (aşağıda) kutsal yer-su (ruhları) (ve) amcam hakanın ruhu beğenmedi şüphesiz” BK D35 kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yüg(g)erü kötürdi erinç “babam İlteriş Kağanı annem İlbilge Hatunu [[s. 116]...


## BK-D-35#3 - Bilge Kağan Yazıtı, Doğu 35. satir  (10 kelime)

- **transkripsiyon:** `TaPKILMaDI : eRiNÇ : TOKUZ : OGuZ : BODuN : YiRiN : SUBIN : IDıP : TaBGaÇGaRU : BaRDI`
- **kelime karsiliklari:** TAPILMADI : GERÇEK : DOKUZ : OĞUZ : BOYLARI : YERİNİ : SUYUNU : KOYUP : TABGAÇA : VARDI
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _eRiNÇ TOKUZ OGuZ BODuN_)
    > ...ünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. Tokuz Oğuz bodun yerin subın ıdıp Tabgaçgaru bardı. Tabgaç |..............se | bu yerde kelti. “İğideyin” tiyin saklıntım ..............0lıu J boödünl ..sesa drake |) (D 36) yazuklal....... 0 emsRN bilrye Tabgaçda atı küsi yok boltı. Bu yerde manga kul boltı. Men özüm kağan...
  - `Ogel C2, s. 341` (eslesen: _SUBIN IDıP TaBGaÇGaRU BaRDI_)
    > ...gitmemesi, Ötüken'de, yani GökBilge Kağan yazıtı, Doğu-22. 33 Aynı yazıt, Doğu-20. [s. 341] SU VE SULAR 325 tür k başkentinde oturmaları,buyruluyordu.Dokuz ©ğuzlar'ın da, yer ve sularını bırakarak gitmeleri, doğru görütlmüyordu: ““Dokuz Oğuzbudun,““yerin, subın ıdıp”'”', Tabgaçgaru bardı...” Bundan sonra yazıtın metni kozuluyordu. Ancak anlaşıldığına göre yazıt, sözlerine şöyle devam ediyordu: “(Dekuz Oğuzlar, sonra yine), Çin'den ... bu yere geldiler. ©nlara bakayım (igideyin), diye düşünüp...'*** “Yerlerini sularını bırakma”? [[s. 341]] ka...
  - `Tekin 1998, s. 23` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...lsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kıl...
  - `Tekin 2003, s. 124` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...aptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışa...
  - `Ata 2011, s. 118` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...a ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türet...
  - `Ata 2011, s. 111` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...e ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları:...


## BK-D-35#4 - Bilge Kağan Yazıtı, Doğu 35. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `TaBGaÇ : --- : BODuN : --- : BU : YiRDE : KeLTİ`
- **kelime karsiliklari:** TABGAÇ : --- : BOYLARI : --- : BU : YERDE : GELDİ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ BODuN_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin ya...
  - `Tekin 2003, s. 110` (eslesen: _TaBGaÇ BODuN_)
    > ...ben), Prens Yollug, yazdım" (KT GD) *çorak+ka tägip* "çorak araziye varıp" (BK GD) *äb+kä tägdöküm* "Karargaha vardım" (O 11) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şantung ovasına kadar sefer ettim" (KT G 3) 2. {+ŋA}. Üçüncü kişi iye...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ BODuN_)
    > ...erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türü...
  - `Tekin 1998, s. 20` (eslesen: _BODuN BU_)
    > ...almışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLA...
  - `Tekin 2003, s. 122` (eslesen: _BODuN BU_)
    > ...ur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) çok iyidir" (IB 5, vb.) *añıg yablak ol* "(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler...
  - `Tekin 1998, s. 19` (eslesen: _BU YiRDE_)
    > ...m; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, ö...


## BK-D-35#5 - Bilge Kağan Yazıtı, Doğu 35. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `İGiDeYiN : TİYiN : SaKıNıP : --- : BODuN : ---`
- **kelime karsiliklari:** İĞİDEYİM : DİYE : SAKINIP : --- : BOYLARI : ---
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _İGiDeYiN TİYiN_)
    > ...dun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany...
  - `Ata 2011, s. 123` (eslesen: _İGiDeYiN TİYiN_)
    > ...yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok...
  - `Ata 2011, s. 116` (eslesen: _İGiDeYiN TİYiN_)
    > ...nları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/...
  - `Tekin 2003, s. 227` (eslesen: _SaKıNıP_)
    > ...dun ..... (K 9) Ozmiş Tigin kan bolmiş. Koñ yılka yorıdım. Ekinti süŋüş [äŋ il]ki ay altı yaŋıka tokıdım ..... (K 10) tutdum. Katunın anta altım. Türük bodun anta ıngaru yok boltı. Anta kisrä takagu yılka .......... bodun ............. (K 11) Üç Karluk yablak sakınıp täzä bardı, kur(ı)ya, On Ok(k)a kirti. Lagzın yılka t[okıdım] ..................................... Tay Bilgä Totokug (K 12) yabgu atadı. Anta kisrä kaŋım kagan uçdı. Kara bodun kılınç ... K[üsg]ü yıl[ka] .................. ## Doğu Yüzü (D 1) tutdum...........
  - `Tekin 1998, s. 22` (eslesen: _TİYiN_)
    > ...(D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Tekin 2003, s. 12` (eslesen: _TİYiN_)
    > ...212 Bağlaçlı Birleşik Cümleler ......................................................................... 213 Yan Cümleli Birleşik Cümleler ........................................................................ 214 Aktarma Söz ve *tip*, *teyin* / *tiyin* ............................................................ 214 Yan Cümle Bağlacı olarak *üçün* ................................................................ 215 Ara Cümle ...............................................................................


## BK-D-36#1 - Bilge Kağan Yazıtı, Doğu 36. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaZUKLaT --- : BİRiYE : TaBGaÇDA : aTI`
- **kelime karsiliklari:** YAZLIKLAT --- : GÜNEYDE : TABGAÇDA : ADI
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _TaBGaÇDA aTI_)
    > ...gri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. Tokuz Oğuz bodun yerin subın ıdıp Tabgaçgaru bardı. Tabgaç |..............se | bu yerde kelti. “İğideyin” tiyin saklıntım ..............0lıu J boödünl ..sesa drake |) (D 36) yazuklal....... 0 emsRN bilrye Tabgaçda atı küsi yok boltı. Bu yerde manga kul boltı. Men özüm kağan olurtukum üçün Türük bodunuğ Vkee kk esen Ji kılmadım. (İliğ tJörüğ yeğdi kazgantım. [[s. 39]] Idfuk ÜRETKE | tirilip yl ..accaca) (KD 37) fanta süüğlüşdüm, süsin sançdım. İçikiğme içikdi, bodun boltı;...
  - `Tekin 2003, s. 126` (eslesen: _TaBGaÇDA_)
    > ...(yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39) **277.** Soru edatından sonra kullanıldığında *nä* zamiri olasılık bildirir: *öŋrä kıtańda biryä tabgaçda kurya kurdınta yırya oguzda eki üç biŋ sümüz kältäçimiz bar mu nä* "Doğuda Kıtay'dan, güneyde Çin'den, batıda batıdan, kuzeyde de Oğuzlardan gelebilecek iki üç bin kadar askerimiz var mı ne?" (T 14) **278.** Orhon Türkçesinde şu soru sözcükleri de vardır: *k...
  - `Ata 2011, s. 140` (eslesen: _TaBGaÇDA_)
    > ...er fiil zarflarına göre daha az geçer. Bu zarf-fiil eki, asıl eylem ile aynı zamanda meydana gelen eylemi gösterir: ötüken yerig konmış te-yin eşidip “(Türk kağanı) Ötüken ülkesine yerleşmiş diye işitip” T 17 türk bodun kanın bulma-yın tabgaçda adrıltı kanlantı “Türk halkı hanını bulmayınca Çin’den ayrıldı, han sahibi oldu” T 2 5. -gAlI zarf-fiil eki, asıl eylemin başlangıcını ve eylemin amacını ifade eder. Günümüz Türkçesindeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi...
  - `Ata 2011, s. 163` (eslesen: _BİRiYE_)
    > ...ci tekil kişi b. Emir kipi, ikinci tekil kişi c. Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi 155 [s. 163] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangi- sinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +a...
  - `Ata 2011, s. 133` (eslesen: _TaBGaÇDA_)
    > ...fiil eki, diğer fiil zarflarına göre daha az geçer. [[s. 133]] Bu zarf-fiil eki, asıl eylem ile aynı zamanda meydana gelen eylemi gösterir: ötüken yerig konmış te-yin eşidip “(Türk kağanı) Ötüken ülkesine yerleşmiş diye işitip” T 17 türk bodun kanın bulma-yın tabgaçda adrıltı kanlantı “Türk halkı hanını bulmayınca Çin’den ayrıldı, han sahibi oldu” T 2 5. -gAlI zarf-fiil eki, asıl eylemin başlangıcını ve eylemin amacını ifade eder. [[s. 133]] Günümüz Türkçesindeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop...
  - `Ata 2011, s. 156` (eslesen: _BİRiYE_)
    > ...hangisini almıştır? a. Gelecek zaman, birinci tekil kişi b. Emir kipi, ikinci tekil kişi c. [[s. 155]] Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi [s. 156] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangisinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +an, +um, +ler, +t e. +gün, +an, +ya, +t...
