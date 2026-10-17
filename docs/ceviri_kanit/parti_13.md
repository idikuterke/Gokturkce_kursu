# Ceviri istek paketi 13 - Orhun cumlecikleri

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


## KT-K-8#4 - Kül Tigin Yazıtı, Kuzey 8. satir  (4 kelime)

- **transkripsiyon:** `KÖLTİGiN : BeG : BaŞLaYU : KITıMıZ`
- **kelime karsiliklari:** KÜLTİĞİN : BEĞ : [KURGAN] BAŞINA : [BIRAKIP] GİTTİK
- **kanit:**
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 23` (eslesen: _BaŞLaYU_)
    > ...eti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şan...
  - `Tekin 2003, s. 118` (eslesen: _BaŞLaYU_)
    > ...ru yürüdüm, Tatarları sordum" (MÇ D 8) ## Birliktelik Durumu **270.** Adların birliktelik (comitative) durumu {+lIgU} eki ile kurulur. Orhon Türkçesinde seyrek olarak kullanılan bu ad durumu eylemin kiminle birlikte işlendiğini gösterir: *män ini+ligü bunça başlayu kazganmasar...* "Ben, erkek kardeşimle birlikte (halkıma) önderlik edip bunca çalışmasam ve başarılı olmasaydım..." (BK D 33) *korıgu eki üç kişi+ligü täzip bardı* "(Kale) muhafızı iki üç kişi ile birlikte kaçıp gitti" (BK D 41) *tört ini+ligü ärtimiz bizni ä...
  - `Olmez 2017, s. 54` (eslesen: _BaŞLaYU_)
    > ...ar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birlikte bu şekilde başa geçip kazanmasaydım (...)" (BK D 33) ### Zamirler ve çekimleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :-...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...
  - `Roux, Altay Turklerinde Olum, s. 307` (eslesen: _BaŞLaYU_)
    > ...mını taşımaktadır; ikincisi ise aynı zamanda kis- şeklinde de belirtilmektedir, yapmak, yaratmak demektir. [[s. 307]] İki kez, gerek cenaze töreninin başlangıcında olduğu gibi, gerekse de başta gelen, yani birinci balbal gibi, esas balbal olarak algılanabilen başlayu** kelimesine rastlanmaktadır. Bu son çözüm şekli belki en iyisidir, çünkü balbal törenlerin başında dikilmemektedir ve tek bir balbal değil de çok sayıda balbal bulunmaktadır. Ve bunların ancak başta geleni belirtilmektedir. Balbal'ın dikilmesi sırasında yap...


## KT-K-8#5 - Kül Tigin Yazıtı, Kuzey 8. satir  (5 kelime)

- **transkripsiyon:** `OGuZ : YaGI : ORDUG : BaSDI : KÖLTİGiN`
- **kelime karsiliklari:** OĞUZ : YAĞI : ORDU[SU] : [KURGANI] BASTI : KÜLTİĞİN
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _OGuZ YaGI ORDUG BaSDI_)
    > ...ınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip tokuz eren sançdı, orduğ birmedi. ORHON YAZITLARI 51 Kül Tigin yirmi yedi yaşında (iken) Karluk halkı (serbestçe) hareket eden (bir) düşman oldu. (Onlarla) Tamag kutsal tepesinde savaştık. (K 2) (Kül) Tigin o savaşta otuz...
  - `Tekin 2003, s. 206` (eslesen: _OGuZ YaGI ORDUG BaSDI_)
    > ...ylem Asıllı Yüklem **473.** Eylem asıllı yüklem çekimli bir eylem, bir eylem öbeği ya da eylem temelli bir söz öbeğidir. - *özüm sakıntım* "Kendim yas tuttum" (KT K 10) - *türük bäglär türük ātin ı(t)tı* "Türk beyleri Türk unvanlarını bıraktılar" (KT D 7) - *oguz yagı ordug basdı* "Düşman Oğuzlar karargâhı bastılar" (KT K 9) - *ulug küli çor säkiz on yaşap yok bolt[ı]* "Büyük Küli Çor seksen (yıl) yaşayıp öldü" (KÇ B 3) - *eçim kagan uça bardı* "Amcam hakan (bu dünyadan) uçup gitti" (BK D 20) - *türük bodun āti yok bolu barmiş ärti* "...
  - `Tekin 2003, s. 184` (eslesen: _OGuZ YaGI ORDUG_)
    > ...) kapıştığında (da) yedinci eri kılıçla öldürdü" (KT K 5) *kül tigin... tokuz ärän sanç-dı ordug birmä-di* "Prens Kül... dokuz kişiyi mızrakladı, karargâhı vermedi" (KT K 8-9) *türk bodun öl-ti alkın-tı yok bol-tı* "Türk halkı öldü, mahvoldu, yok oldu" (T 3) *oguz yagı ordug bas-dı* "Düşman Oğuz karargâhı bastı" (KT K 8) *ol sabıg eşidip on ok bägläri boduni kop käl-ti yükün-ti* "O haberi işitince On Ok beyleri ve halkı hep geldiler, boyun eğdiler" (T 42-43) Pekiştirme edatı *ok/ök* ile: *yañdok yolta yämä ölti-k ök* "Bozguna uğ...


## KT-K-9#1 - Kül Tigin Yazıtı, Kuzey 9. satir  (6 kelime)

- **transkripsiyon:** `ÖGSüZ : aKIN : BİNiP : TOKUZ : eRiN : SaNÇDI`
- **kelime karsiliklari:** ÖKSÜZ : AK [AT]A : BİNİP : DOKUZ : ERİNİ : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _ÖGSüZ aKIN BİNiP TOKUZ_)
    > ...dızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip tokuz eren sançdı, orduğ birmedi. ORHON YAZITLARI 51 Kül Tigin yirmi yedi yaşında (iken) Karluk halkı (serbestçe) hareket eden (bir) düşman oldu. (Onlarla) Tamag kutsal tepesinde savaştık. (K 2) (Kül) Tigin o savaşta otuz yaşında idi. [[s. 27]] Alp Şalçı kır (atj...
  - `Tekin 2003, s. 225` (eslesen: _aKIN BİNiP_)
    > ...bı..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin t...
  - `Tekin 1998, s. 26` (eslesen: _SaNÇDI_)
    > ...şınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşd...
  - `Tekin 2003, s. 40` (eslesen: _SaNÇDI_)
    > ...TEKİN ## /nç/ Çift Ünsüz İşareti **40.** Bu işaret /anç/, /änç/ ses öbekleri ile /nç/ ünsüz çiftini yazmak için kullanılır. 1. /anç/ ses öbeği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki...
  - `Tekin 2003, s. 233` (eslesen: _ÖGSüZ_)
    > ...ä! Yüz Kümül bodunum, yıta! 5. Är ärdämindä ägsüküm yok. Kırk yaşımda adrıldım. 6. Arslan Külüg Tirig oglı bän. Külüg Togan bän. ## Kejeelig-Hovu (Malov E 45) 1. Oglan atım Çobuç Inal. ...ka atım Kümül Ögä. 2. Beş yāşımda kaŋsız kalıp tokuz yegirmi yāşımga ögsüz 3. bolup, katıglanıp, otuz yāşımg[a] Ögä boltum. Kırk yıl 4. el tut(t)um, bodun başladım. Taş yagıg yagıladım, el(l)ädim. 5. Bir yetmiş yāşımga kök täŋridä küngä āzdım. Äsizim ä! 6. Kürsi Yāmda elim, äsizim ä! Yerim subum äsizim ä! Kuyda kunçuyum tul kaltı. Ä...
  - `Tekin 1998, s. 25` (eslesen: _BİNiP_)
    > ...biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı...


## KT-K-9#2 - Kül Tigin Yazıtı, Kuzey 9. satir  (15 kelime)

- **transkripsiyon:** `ORDUG : BİRMeDİ : ÖGüM : KATuN : ULaYU : ÖGLeRiM : eKeLeRiM : KeLiŊÜNüM : KONÇuYLaRıM : BUNÇA : YiME : TİRiGİ : KÜNG : BOLDaÇI : eRTİ`
- **kelime karsiliklari:** ORDUYU : VERMEDİ : ANAM : KADIN : EVVELA : ÖGLERİM : EKELERİM : GELİNLERİM : KONÇUYLARIM : BUNCA : YİNE : DİRİ [SAĞ KALANLAR] : CARİYE : OLACAK : İDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _ÖGüM KATuN ULaYU ÖGLeRiM_)
    > ...ılın) ilk baharında Oğuz'lara doğru ordu sevk ettik. Kül Tigin'i karargâhın başında bıraktık. Düşman Oğuz'lar karargâhı bastılar. [[s. 27]] Kül Tigin (K 9) öksüz kır (at)ına binip dokuz er(i) mızrakladı, karargâhı (düşmana) verme- [s. 28] 52 KÜLTİGİN YAZITI Öğüm katun ulayu öğlerim, ekelerim, kelinğünüm, kunçuylarım, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt...
  - `Tekin 2003, s. 157` (eslesen: _ÖGüM KATuN ULaYU_)
    > ...çin ve (ben) kendim kazandığım için..." (T 55) *taŋ taŋlardı udu yir yarudı udu kün tugdı* "Tan ağardı ve yer aydınlandı ve gün doğdu" (IB 26, etc. [s. 157] # s. 157 — ORHON TÜRKÇESİ GRAMERİ **372.** *ulayu* "ve" (< *\*ula-* "birleştirmek"): 1. Tek başına: *ögüm katun ulayu öglärim äkälärim käliŋünüm kunçuylarım* "Annem Hatun ve (üvey) annelerim, ablalarım, gelinlerim, prenseslerim" (KT K 9) *eki şad ulayu iniygünüm oglanım bäglärim bodunum közi kaşi* "İki Şadın ve erkek kardeşlerimin, oğullarımın, beylerimin ve halkımın gözleri...
  - `Tekin 1998, s. 27` (eslesen: _ORDUG BİRMeDİ_)
    > ...7]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip tokuz eren sançdı, orduğ birmedi. ORHON YAZITLARI 51 Kül Tigin yirmi yedi yaşında (iken) Karluk halkı (serbestçe) hareket eden (bir) düşman oldu. (Onlarla) Tamag kutsal tepesinde savaştık. (K 2) (Kül) Tigin o savaşta otuz yaşında idi. [[s. 27]] Alp Şalçı kır (atjına binip sabırsızca hücum...
  - `Tekin 1998, s. 24` (eslesen: _ÖGüM KATuN_)
    > ...rti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 4...
  - `Tekin 2003, s. 151` (eslesen: _ÖGüM KATuN_)
    > ...etir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça) Umay gibi (olan) annem Hatun" (KT D 31) *körür közüm körmäz täg, bilir biligim bilmäz täg boltı* "Gören gözlerim görmez gibi, eren aklım ermez gibi oldu" (KT K 10) *yagımız tägrä oçok täg ärti, biz aş <t>äg ärtimiz* "Düşmanlarımız etrafta ocak gib...
  - `Tekin 2003, s. 193` (eslesen: _TİRiGİ KÜNG_)
    > ...şdanışmanı) var ise onun ne derdi ve sıkıntısı olacak imiş?" (T 56-57) Aşağıdaki cümlede *kül tigin yok ärsär* ya da *kül tigin yok ärti ärsär* bağımlı şart yan cümlesi nasılsa unutulmuştur: *ögüm katun ulayu öglärim äkälärim käliŋünüm kunçuylarım bunça yämä tirigi küŋ bol-taçı ärti, ölügi yurtda yolta yatu kal-taçı är-tigiz* "(Prens Kül olmasaydı), başta annem Hatun olmak üzere, (tüm üvey) annelerim, ablalarım, gelinlerim ve prenseslerim, (sizin) hayatta olanlarınız cariye olacak idi, ölmüş olanlarınız (da) yazıda yabanda...


## KT-K-9#3 - Kül Tigin Yazıtı, Kuzey 9. satir  (6 kelime)

- **transkripsiyon:** `ÖLüGİ : YURTDA : YOLTA : YaTU : KaLDaÇI : eRTiGiZ`
- **kelime karsiliklari:** ÖLÜ[LERİNİZ] : YURTTA : YOLDA : YATIP : KALACAK : İDİNİZ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _ÖLüGİ YURTDA YOLTA YaTU_)
    > ...an Oğuz'lar karargâhı bastılar. [[s. 27]] Kül Tigin (K 9) öksüz kır (at)ına binip dokuz er(i) mızrakladı, karargâhı (düşmana) verme- [s. 28] 52 KÜLTİGİN YAZITI Öğüm katun ulayu öğlerim, ekelerim, kelinğünüm, kunçuylarım, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş k...
  - `Tekin 2003, s. 183` (eslesen: _ÖLüGİ YURTDA YOLTA YaTU_)
    > ...ŋın kul kıl-tıg eşilik [kız ogluŋın küŋ] kıl-tıg* "Bey olacak erkek evladını köle yaptın, hanım olacak kız evladını (da) cariye yaptın" (BK D 20) 4. Çoğul 2. kişi eki Kül Tigin ve Bilge kağan yazıtlarında {-DXgXz}, öbür metinlerde ise {-DXŋXz} biçimindedir: *ölügi yurtda yolta yatu kaltaçı är-tigiz* "Ölenleriniz harabolmuş yurtta ve yollarda yatıp kalacak idiniz" ( (KT K 9) *kül tigin yok ärsar kop öltäçi är-tigiz* "Prens Kül olmasaydı hepiniz ölecek idiniz" (KT K 10) *ogulları turgul yälgäk lakzın yıl bar-dıŋız* "Oğulları Turgul (Tugru...
  - `Olmez 2017, s. 57` (eslesen: _ÖLüGİ YURTDA YOLTA YaTU_)
    > ...köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-solda ortalıkta kalakalacaktı." (KT K 9) ### Emir – İstek Çekimi | | teklik | çokluk | | :--- | :--- | :--- | | **1. kişi** | -(A)yIn | -(A)lIm | | **2. kişi** | Ø, -(X)ŋ; -gIl | -(X)ŋ, -(X)ŋlAr | | **3...


## KT-K-10#1 - Kül Tigin Yazıtı, Kuzey 10. satir  (10 kelime)

- **transkripsiyon:** `KÖLTİGiN : YOK : eRSeR : KOP : ÖLTeÇİ : eRTiGiZ : İNiM : KÖLTİGiN : KeRGeK : BOLDI`
- **kelime karsiliklari:** KÜLTİĞİN : YOK : İSE : HEP : ÖLECEK : İDİNİZ : İNİM : KÜLTİĞİN : KERGEK : OLDU
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _YOK eRSeR KOP ÖLTeÇİ_)
    > ...öksüz kır (at)ına binip dokuz er(i) mızrakladı, karargâhı (düşmana) verme- [s. 28] 52 KÜLTİGİN YAZITI Öğüm katun ulayu öğlerim, ekelerim, kelinğünüm, kunçuylarım, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Kat...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 104` (eslesen: _KeRGeK BOLDI_)
    > ...utçada kurban anlamına gelen kereh kelimesi vardır. Şamanın iştirakiyle ruhlara sunulan kurbana denir. Kurban edilen atın törenle sırığa asılan derisine dahi kereh denir. [[s. 104]] Eski Türk yazıtlarında Kültegin ve Bilge Hakan için “öldü” yerine kullanılan “kergek boldı” kelimesi de bu anlam ile izah edilebilir, öyle sanıyorum ki yazıtlardaki bu kergek kelimesi ancak hükümdar ailesi için kullanılmış olsa ge rektir. Yakutların “kereh” kelimesi de Moğolca ve Buratçede dahi “kurban” anlamına gelir. Kanlı kurbanlardan başka kans...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Ata 2011, s. 142` (eslesen: _eRTiGiZ_)
    > ...on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kantan kelipen sür-e elt-di...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...
  - `Ata 2011, s. 135` (eslesen: _eRTiGiZ_)
    > ...tmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı [[s. 135]] ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kantan kelipen sür-e elt-di “silahlı (düşma...


## KT-K-10#2 - Kül Tigin Yazıtı, Kuzey 10. satir  (3 kelime)

- **transkripsiyon:** `ÖZüM : SaKıNDıM : KÖRÜR`
- **kelime karsiliklari:** ÖZÜM : SAKINDIM : GÖRÜR
- **kanit:**
  - `Roux, Altay Turklerinde Olum, s. 263` (eslesen: _ÖZüM SaKıNDıM_)
    > ...iyesinin yapıldığını biliyorlardı. Eski Türk metinlerinin çoğunda ağlayıp sızlanmalardan söz edilmektedir, fakat ilk aşamada ölünün ardından yapılan sızlanmalarla ilgili daha fazla bilgi verilmemektedir: Kardeşinin ölümü üzerine, Bil- ge Kağan yakınmakta ve özüm sakındım”'“ ifadesini kullanmaktadır. [[s. 263]] Fakat cenaze törenine katılan yabancılar da ağlayıp yakınmaktaydılar: 207 ONGİN, satır 12; H. N. ORKUN, |, s. 130 (yazar bunu okumamışur). Sir G. CLAUSON, JRAS, 0.c., metin s. 183, çeviri s. 189, yorumlar s. 187. 208...
  - `Tekin 1998, s. 11` (eslesen: _KÖRÜR_)
    > ...ler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren aklı ermez gibi olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan [[s. 11]] perişan duruma gelmek, saçı başı yolunmak), birk...
  - `Tekin 2003, s. 34` (eslesen: _KÖRÜR_)
    > ...ile" (T 15) - /kÜr/ *kör-* (T 26) - /kÜrtg/ *kört(ü)g* (T 28, 46) - /kÜzdÜ/ *küzädü* (KT B 1) 3. /Ük, kÜ/ hece işareti söz ya da hece başında /Ü/ harfinden önce kullanıldığında yalnızca ön damaksıl /k/ değerindedir: - /kÜÜk/ *kök* "mavi" (KT D 3) - /kÜÜrÜr/ *körür* (T 1) [s. 35] # s. 35 — ORHON TÜRKÇESİ GRAMERİ - /kÜÜrg/ *kör(ü)g* (T T 29, 33) [sic: "T T"] - /kÜÜ/ *kü* "ün, şöhret" (KÇ B 12) - /kÜÜms/ *küm(ü)ş* (T 48) - /kÜÜn/ *kün* (KT D 4) - /kÜÜntz/ *künt(ü)z* (T 52) - /kÜÜç/ *küç* (KT D 12) 4. Şu sözcüklerin yaz...
  - `Ata 2011, s. 116` (eslesen: _KÖRÜR_)
    > ...Yukarıdaki tabloda en dikkat çekici özellik 1. tekil kişi zamirindedir. b- ile başlayan sözcüklerde genizsi bir ses olan /n/ ve /ŋ/ var ise söz başındaki b- > m- olur: ben ~ men gibi. T yazıtı bu sözcüğün asıl şeklini korurken BK ve KT yazıtlarında men şekli kullanılmıştır. T’ta ben zamiri üzerine nesne durumu ile yönelme durumu ekleri geldiğinde de b-’li yapı tercih edilmiştir: bini, baŋa. Fakat b- il...
  - `Olmez 2017, s. 21` (eslesen: _KÖRÜR_)
    > ...bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın ta...
  - `Ata 2011, s. 109` (eslesen: _KÖRÜR_)
    > ...ön Gösterme Durumu baŋaru T 3 Yukarıdaki tabloda en dikkat çekici özellik 1. tekil kişi zamirindedir. b- ile başlayan sözcüklerde genizsi bir ses olan /n/ ve /ŋ/ var ise söz başındaki b- > m- olur: ben ~ men gibi. [[s. 109]] T yazıtı bu sözcüğün asıl şeklini korurken BK ve KT yazıtlarında men şekli kullanılmıştır. T’ta ben zamiri üzerine nesne durumu ile yönelme durumu ekleri geldiğinde de b-’li yapı tercih edilmiştir: bini, baŋa. Fakat b- ile başlayan başka sözcüklerde b- > m- değişikliği bakımından sadece T yazıtının...


## KT-K-10#3 - Kül Tigin Yazıtı, Kuzey 10. satir  (8 kelime)

- **transkripsiyon:** `KÖZüM : KÖRMeZ : TeG : BİLiR : BİLiGiM : BİLMeZ : TeG : BOLDI`
- **kelime karsiliklari:** GÖZÜM : GÖRMEZ : DEK [OLDU] : BİLDİĞİM : BİLGİM : BİLİNMEZ : DEK : OLDU
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _KÖZüM KÖRMeZ TeG BİLiR_)
    > ...8] 52 KÜLTİGİN YAZITI Öğüm katun ulayu öğlerim, ekelerim, kelinğünüm, kunçuylarım, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaş...
  - `Ata 2011, s. 121` (eslesen: _KÖZüM KÖRMeZ TeG BİLiR_)
    > ...odun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. kişi iyelik ekli isimlerin nesne durumu ekin...
  - `Olmez 2017, s. 64` (eslesen: _KÖZüM KÖRMeZ TeG BİLiR_)
    > ...5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzl...
  - `Ata 2011, s. 114` (eslesen: _KÖZüM KÖRMeZ TeG BİLiR_)
    > ...G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 [[s. 114]] yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. [[s. 114]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra...


## KT-K-10#4 - Kül Tigin Yazıtı, Kuzey 10. satir  (10 kelime)

- **transkripsiyon:** `ÖZüM : SaKıNDıM : ÖD : TeŊRİ : YaŞaR : KİŞİ : OGLI : KOP : ÖLGeLİ : TÖRÜMiŞ`
- **kelime karsiliklari:** ÖZÜM : SAKINDIM : ÖD : TANRI : YAŞAR : KİŞİ : OĞLU : HEP : ÖLÜMLÜ : TÜREMİŞ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _KİŞİ OGLI KOP ÖLGeLİ_)
    > ...m, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 1...
  - `Ata 2011, s. 93` (eslesen: _KİŞİ OGLI KOP ÖLGeLİ_)
    > ...Yön gösterme eki: ol yer+gerü barsar türük bodun ölteçi sen KT G8 “o yere doğru gidersen Türk halkı öleceksin” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “(kendi) toprağına suyuna kondu” Belirsiz geçmiş zaman eki: kişi oglı kop ölgeli törü-miş KT K10 “insanoğlu hep ölümlü yaratılmış” tabgaç kaganka kör-miş KT D8 “Çin hakanına tâbi olmuşlar” 3. tekil ve çoğul belirli geçmiş zaman eki: türük bodun öl-ti alkın-tı yok bol-tı T 3 “Türk halkı öldü, mahvoldu,...
  - `Ata 2011, s. 86` (eslesen: _KİŞİ OGLI KOP ÖLGeLİ_)
    > ...lü seslerle kullanılan n2 yer almaktadır. [[s. 86]] Yön gösterme eki: ol yer+gerü barsar türük bodun ölteçi sen KT G8 “o yere doğru gidersen Türk halkı öleceksin” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “(kendi) toprağına suyuna kondu” Belirsiz geçmiş zaman eki: kişi oglı kop ölgeli törü-miş KT K10 “insanoğlu hep ölümlü yaratılmış” tabgaç kaganka kör-miş KT D8 “Çin hakanına tâbi olmuşlar” 3. [[s. 86]] tekil ve çoğul belirli geçmiş zaman eki: türük bodun öl-ti alkın-tı yok bol-tı T 3 “Türk halkı öldü, mahvoldu, yok oldu” bodunı kop kel-t...


## KT-K-11#1 - Kül Tigin Yazıtı, Kuzey 11. satir  (11 kelime)

- **transkripsiyon:** `aNÇA : SaKıNDıM : KÖZDE : YaŞ : KeLSeR : TIDA : KÖŊüLTE : SIGıT : KeLSeR : YaNDuRU : SaKıNDıM`
- **kelime karsiliklari:** ONCA : SAKINDIM : GÖZDEN : YAŞ : GELSE : TIDIP : GÖNÜLDEN : AĞIT : GELSE : YANDURUP : SAKINDIM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _KÖZDE YaŞ KeLSeR TIDA_)
    > ...yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kel...
  - `Olmez 2017, s. 52` (eslesen: _KÖZDE YaŞ KeLSeR_)
    > ...melerden ve çoğu ünsüzden sonra genelde *+dA* olarak görülür, *r, l, n* ünsüzlerinden biriyle biten kelimelerden sonra ise *+tA* olarak görülebilir. **+DA** *ıda taşda kalmişi* "dağda bayırda kalmış olanları" (T 4) *ėlte* "ülkede, memlekette" (KT G 3) *közde yaş kelser* "gözler(im)den yaş gelse" (KT K 11) *tavgaç kaganta* "Çin İmparatorundan" (KT G 11) **+DAn (çok az örneği vardır)** *kantan* "nereden? nasıl?" KT D 23 *oguzduntan* "Oğuzların tarafından" (T 8) *taşdıntan* "dışarıdan" (MÇ G 4) (Bu ekin *t* ile mi y...
  - `Ata 2011, s. 113` (eslesen: _YaŞ KeLSeR TIDA_)
    > ...lik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim...
  - `Ata 2011, s. 106` (eslesen: _YaŞ KeLSeR TIDA_)
    > ...yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. [[s. 106]] Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+...


## KT-K-11#2 - Kül Tigin Yazıtı, Kuzey 11. satir  (16 kelime)

- **transkripsiyon:** `KaTıGDI : SaKıNDıM : iKİ : ŞaD : ULaYU : İNİ : YeGÜNüM : OGLaNıM : BeGLeRiM : BODuNuM : KÖZİ : KaŞI : YaBLaK : BOLDaÇI : TİP : SaKıNDıM`
- **kelime karsiliklari:** KATICA : SAKINDIM : İKİ : ŞAD : EVVELA : KARDEŞ : YEĞENİMİN : OĞLUMUN : BEĞLERİMİN : BOYLARIMIN : GÖZÜ : KAŞI : YAVLAK : OLACAK : DEYİP : SAKINDIM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _OGLaNıM BeGLeRiM BODuNuM KÖZİ_)
    > ...tım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak...
  - `Radloff, s. 399` (eslesen: _iKİ ŞaD ULaYU İNİ_)
    > ...i; yar ve yoldaşları akı çıkarıp kara giydiler. Kalabalık Oğuz Beyleri Beyrek için büyük yas tuttular." Aynı eserin başka bir yerinde "karalar giyip gök sarındılar" denilmektedir. (215) Yaslı çadırın üzerine bayrak asmak Oğuz- (214) Yazıttaki " .. [[s. 399]] .iki şad, ulayu inigünim, oğlanım, beglerim, bu dunım közi, kaşı yablak boldaçı tip sakındım" cümlesinden bu şahısla rın yalnız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat etmelerinden hakanın telaşa düştüğü anlaşılmaktadır. Bilge Ha kan yazıtındaki "s...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 202` (eslesen: _KÖZİ KaŞI YaBLaK BOLDaÇI_)
    > ...lduğu tesbit edilmiştir. 220 Umumiyetle Kırgız-Kazaklarda yas tutma töreni ve âdetleri eski Gök Türk ve Oğuzlar’da olduğu gibidir. X IX . yüzyılın ortalarına kadar devam etmiştir. [[s. 202]] Yazıttaki “ ...ik i şad, ulayu inigünim, oğlanım, begleriın, budunım közi, kaşı yablak boldaçı tip sakındım” cümlesinden bu şahısların yal nız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat et melerinden hakanın telâşa düştüğü anlaşılmaktadır. Bilge Hakan yazıtın daki “ saçlarını kulaklarım........................ biçtiler” cüml...


## KT-K-11#3 - Kül Tigin Yazıtı, Kuzey 11. satir  (6 kelime)

- **transkripsiyon:** `YUGÇI : SIGıTÇI : KITaYN : TaTaBI : BODuN : BaŞLaYU`
- **kelime karsiliklari:** YUĞCU : SIĞITÇI : KITAY : TATABI : BOYLARI[NDAN] : BAŞTA
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _TaTaBI BODuN BaŞLaYU_)
    > ...ysar kişi oğlı kop ölgeli törimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta...
  - `Tekin 1998, s. 25` (eslesen: _TaTaBI BODuN_)
    > ...in birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elli...
  - `Tekin 2003, s. 151` (eslesen: _TaTaBI BODuN_)
    > ...r: *äligçä är tutdumuz ol ok tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa ulug sü eki yegirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzla...
  - `Tekin 1998, s. 21` (eslesen: _SIGıTÇI_)
    > ...i oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve...
  - `Tekin 2003, s. 81` (eslesen: _SIGıTÇI_)
    > ...n 7) - *kaŋıç+ım* "babacığım" (Abakan 14) **153.** {+çI}. Meslek mensubu ya da bir işi sürekli yapan anlamında adlar türetir: - *bäd(i)zçi* "ressam, heykeltraş" (KT G 11, vb.) < *bädiz* "resim, heykel" - *äbçi* "eş, zevce" (Bay Bulun I 2, vb.) < *äb* "ev" - *sıgıtçı* "yas tutucu, ağlayıcı" (KT K 11, vb.) < *sıgıt* "yas, matem" - *tamgaçı* "mühürdar" (KT K 13) < **tamga* "damga, mühür" - *yagıçı* "savaşçı, savaşı yöneten" (T 50, vb.) < *yagı* "savaş; düşman" - *yogçı* "cenaze törenine katılan yasçı" (BK D 5, vb.) < *yog*...
  - `Ata 2011, s. 170` (eslesen: _SIGıTÇI_)
    > ...ğul kişi geniş zamanın rivayeti] kergek bol- “kuş olup uçup gitmek; ölmek, vefat etmek”–(u)p [zarf-fiil eki] yogçı “yuğ töreni yapan, yasçı” < yo- “yok olmak” –g “yok olan şey” [fiilden isim yapım eki] +çı [isimden isim yapım eki, meslek eki] sıgıtçı “ağlayıcı” < sıgıt “ağlama, ağıt” +çı [isimden isim yapım eki] öŋ “ön, ön taraf, doğu” +re [yön gösterme eki] tug- “(güneş) doğmak” –sık [gelecek zaman sıfat-fiil eki] +da [bulunma durumu eki] +kı [aidiyet eki: kün tugsıkdakı “gün doğacak yerdeki, gü...


## KT-K-12#1 - Kül Tigin Yazıtı, Kuzey 12. satir  (3 kelime)

- **transkripsiyon:** `UDaR : SeŊÜN : KeLTİ`
- **kelime karsiliklari:** UDAR : SENGÜN : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _UDaR SeŊÜN KeLTİ_)
    > ...rimiş. (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bil...
  - `Ata 2011, s. 112` (eslesen: _SeŊÜN_)
    > ...z+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkın...
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tekin 2003, s. 239` (eslesen: _KeLTİ_)
    > ...*batur** yiğit, bahadır (Altınköl II 5) - **bay** zengin - **Bayça Saŋun** kişi adı ve unvanı (Barık III 1) - **Bayırku** etnik ad - **baz** bağımlı, tabi - **bazlan-** bağımlı olmak, tabi olmak (Tes 11) - **bädiz** süs, resim, heykel - **bädizçi** ressam, heykeltıraş - **bädizlä-** süslemek (IB 43) - **bädük** büyük (O 6) - **bädzät-** süsletmek - **bäg** bey, lord - **bägiç** beycik (Abakan 6) - **bäglik** bey olmaya layık - **bälgü** işaret, alamet, nişan - **bältir** kavşak (yol ya da ırmak) - **bän** ben (bk. **män...
  - `Ata 2011, s. 56` (eslesen: _KeLTİ_)
    > ...n tarafından düzenlenen cenaze törenine Köktürklerin komşularının tamamı katılır. Özellikle Çin hükümdarı, Köl Tigin’in mezar külliyesinde inşa edilen tapınağın duvarla- rını Köl Tigin’in dövüştüğü savaş resimleri ile süslemesi için altı ünlü ressam ve heykeltıraş ile birlikte Köl Tigin anıtının kazınması için 3.75m. yüksekliğinde, tepesi oymacılık sanatıyla süslenmiş boş bir mermer sütun gönderir. Daha sonra bu sütunun batı yüzüne Çince, doğu yüzüne ise Türkçe yazıtlar hâkkedilir ve 732’de Bilge Kağan külliyede...
  - `Olmez 2017, s. 53` (eslesen: _KeLTİ_)
    > ...(< *\*as+ra*) ve *üze* zıtlığı da burada bir *+rA*'nın (*\*üzre < \*ür+re*) varlığına delalettir (Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalard...


## KT-K-12#2 - Kül Tigin Yazıtı, Kuzey 12. satir  (5 kelime)

- **transkripsiyon:** `TaBGaÇ : KaGaNDA : İSiyİ : LİKeŊ : KeLTİ`
- **kelime karsiliklari:** TABGAÇ : KAĞANINDAN : İSİYİ : Lİ-KENG : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _İSiyİ LİKeŊ KeLTİ_)
    > ...yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Ta...
  - `Ergin 1970, s. 21` (eslesen: _İSiyİ LİKeŊ_)
    > ...düşünceye daldım. Müthiş düşünceye daldım. [[s. 21]] İki şadın ve küçük kardeş yeğenimin, oğlumun, beylerimin, milletimin gözü kaşı kötü olacak diyip düşünceye daldım. Yasçı, ağlayıcı olarak Kıtay, Tatabı milletinden başta | Udar general geldi. Çin kağanından İsiyi Likeng geldi. On binlik hazine, altın, gümüş fazla fazla getirdi. Tibet kağanından vezir geldi. Batıda gün batısındaki Soğd, İranlı, Buhara ülkesi halkından Enik general, Oğul Tarkan geldi. | On Ok oğlum Türgiş kağanından Makaraç mühürdar, Oğuz Bilge mühürdar geldi....
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zen...
  - `Tekin 2003, s. 17` (eslesen: _TaBGaÇ_)
    > ...gä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, vb.; 6. Adların çıkma durumu için ayrı bir ek olmaması, bu durumun yer ya da bulunma durumu eki ile kurulması: *oglanıŋız-da* “oğullarınızdan”, *kurıdın-ta* “batıdan”, *tabgaç-da* “Çin’den”, vb. 7. Adların birliktelik (*comitative*) durumunun bulunması ve bu durumun {-LIgU} eki ile kurulması: *män ini-ligü* “ben erkek kardeş(im) ile birlikte”, *eki üç kişi-ligü* “iki üç kişi ile birlikte”, vb.; 8. Şimdiki zaman eylem sıfatının {-gm...


## KT-K-12#3 - Kül Tigin Yazıtı, Kuzey 12. satir  (5 kelime)

- **transkripsiyon:** `BİR : TÜMeN : aGI : aLTUN : KÜMüŞ`
- **kelime karsiliklari:** BİR : TÜMENİ : AĞI : ALTIN : GÜMÜŞ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BİR TÜMeN aGI aLTUN KÜMüŞ_)
    > ...ngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s....
  - `Tekin 2003, s. 146` (eslesen: _aGI aLTUN KÜMüŞ_)
    > ...u geride hiç kimse kalmamasıya sefere çıktı” (T 33) - *äbin barımın kalısız kop kälürti* “Çadırlarını ve mal mülklerini geride hiçbir şey bırakmamasıya getirdiler” (KT K 1), vb. **332.** *kärgäksiz* “gereğinden çok, ziyadesiyle” < *kärgäk +siz*: - *bir tümän agı altun kümüş kärgäksiz kälürti* “On binlerce ipekli kumaş, altın ve gümüşleri eksiksiz olarak getirdiler” (KT K 12) - *altun kümüş kärgäksiz kälürti* “Ziyadesiyle altın ve gümüş getirdiler” (BK G 11), vb. **333.** *sansız* “sayısız” < *sān* “sayı” + *sız*: - *ädgü özlük...
  - `Ata 2011, s. 114` (eslesen: _BİR TÜMeN_)
    > ...ırlamaya çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi...
  - `Tekin 1998, s. 19` (eslesen: _aLTUN KÜMüŞ_)
    > ...im; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve)...
  - `Tekin 2003, s. 145` (eslesen: _aLTUN KÜMüŞ_)
    > ...ŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü devele...
  - `Ata 2011, s. 120` (eslesen: _aLTUN KÜMüŞ_)
    > ...lerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dön...


## KT-K-12#4 - Kül Tigin Yazıtı, Kuzey 12. satir  (6 kelime)

- **transkripsiyon:** `KeRGeSİZ : KeLÜRTİ : TÜPÜT : KaGaNDA : BÖLüN : KeLTİ`
- **kelime karsiliklari:** GEREKSİZ : GETİRDİ : TİBET : KAĞANINDAN : BÖLÜN : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _KeLÜRTİ TÜPÜT_)
    > ...Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz ya...
  - `Tekin 1998, s. 26` (eslesen: _KeLÜRTİ_)
    > ...ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bayırku'ların Ulu İrkin...
  - `Ata 2011, s. 120` (eslesen: _KeLÜRTİ_)
    > ...bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T...
  - `Olmez 2017, s. 76` (eslesen: _KeLÜRTİ_)
    > ...biliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732)...
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...


## KT-K-12#5 - Kül Tigin Yazıtı, Kuzey 12. satir  (14 kelime)

- **transkripsiyon:** `KURıYA : KÜN : BaTSıKDaKI : SOGD : BeRÇiK : eR : BUKaRaK : ULuŞ : BODuNDA : NeŊ : SeŊÜN : OGuL : TaRKaN : KeLTİ`
- **kelime karsiliklari:** GERİ : GÜN : BATISINDAKİ : SOĞD : BERÇİK : ER : BUHARA : ULUSU : BODUNDAN : NENG : SENGÜN [İLE] : OĞUL : TARKAN : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BeRÇiK eR BUKaRaK ULuŞ_)
    > ...ğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül...
  - `Ata 2011, s. 118` (eslesen: _BeRÇiK eR BUKaRaK ULuŞ_)
    > ...atıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. öŋdün kagangaru sü yorılım “(biz) doğu...
  - `Ata 2011, s. 111` (eslesen: _BeRÇiK eR BUKaRaK ULuŞ_)
    > ...ğıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. [[s. 111]] öŋdün kagangaru sü yorılım “(biz) doğuya, Hakan...


## KT-K-13#1 - Kül Tigin Yazıtı, Kuzey 13. satir  (10 kelime)

- **transkripsiyon:** `ONOK : OGLuM : TÜRGiŞ : KaGaNDA : MaKaRaÇ : TaMGaÇI : OGuZ : BİLGE : TaMGaÇI : KeLTİ`
- **kelime karsiliklari:** ONOK : OĞLUM : TÜRGİŞ : KAĞANINDAN : MAKARAÇ : DAMGACI : OĞUZ : BİLGE : DAMGACI : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _MaKaRaÇ TaMGaÇI OGuZ BİLGE_)
    > ...(K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ...
  - `Ergin 1970, s. 21` (eslesen: _OGLuM TÜRGiŞ_)
    > ...milletinden başta | Udar general geldi. Çin kağanından İsiyi Likeng geldi. On binlik hazine, altın, gümüş fazla fazla getirdi. Tibet kağanından vezir geldi. Batıda gün batısındaki Soğd, İranlı, Buhara ülkesi halkından Enik general, Oğul Tarkan geldi. | On Ok oğlum Türgiş kağanından Makaraç mühürdar, Oğuz Bilge mühürdar geldi. [[s. 21]] Kırgız kağanından Tarduş İnançu Çor geldi. Türbe yapıcı, resim yapan, kitabe taşı yapıcısı olarak Çin kağanının yeğeni Çang general geldi. Kuzey-doğu cephesi Kül Tigin koyun yılında on yedinci...
  - `Olmez 2017, s. 101` (eslesen: _OGuZ BİLGE_)
    > ...ed summary of the page's content in English: --- ## Summary of page 101 (*Köktürkçe Dersleri 101*) ### Section: Bilge Kağan Inscription (*Bilge Kağan Yazıtı*) **Historical background:** After his uncle Kapgan Kağan was killed during the war with the Tokuz Oğuz, Bilge Kağan was elevated to the khaganate with the support of Tunyukuk. According to Chinese sources, before taking this title he bore the name *Mojilian* (given with Chinese characters in the text). He was the son of Ēltēriš, founder of the khaganate, and also Tun...
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...
  - `Tekin 2003, s. 248` (eslesen: _MaKaRaÇ_)
    > ...D 8) - **lagzın, lakzın** domuz (yıl adı) (BK G 10; İhe-Ashete b 2) - **Likäŋ** kişi adı (KT K 12) (< Çin. *Liü-hiang*) - **Lisün** kişi adı (BK G 11) (< Çin. *Li-ts'ün*) - **lü** ejderha (O Ek 4); bk. **ulu** - **mag** alkış, övgü (BK G 15, vb.) < Mo. - **Makaraç** unvan (KT K 13) (< [s. 249] # s. 249 — TALAT TEKİN (basılı sayfa numarası 250) *(Kitap s. 250)* Hind. *mahārāc*) - **Mançud** etnik ad (T 45) - **manistan** manastır (IB 67) - **maŋa** bana (bk. **baŋa**) - **mar** öğretmen (Suci 7) (< Süryani *mār*) - *...


## KT-K-13#2 - Kül Tigin Yazıtı, Kuzey 13. satir  (6 kelime)

- **transkripsiyon:** `KIRKıZ : KaGaNDA : TaRDUŞ : INaNÇU : ÇOR : KeLTİ`
- **kelime karsiliklari:** KIRGIZ : TARDUŞ : DAMGACI : INANÇU : ÇOR : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _TaRDUŞ INaNÇU ÇOR KeLTİ_)
    > ...ti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlı...
  - `Ergin 1970, s. 21` (eslesen: _TaRDUŞ INaNÇU ÇOR_)
    > ...ın, gümüş fazla fazla getirdi. Tibet kağanından vezir geldi. Batıda gün batısındaki Soğd, İranlı, Buhara ülkesi halkından Enik general, Oğul Tarkan geldi. | On Ok oğlum Türgiş kağanından Makaraç mühürdar, Oğuz Bilge mühürdar geldi. [[s. 21]] Kırgız kağanından Tarduş İnançu Çor geldi. Türbe yapıcı, resim yapan, kitabe taşı yapıcısı olarak Çin kağanının yeğeni Çang general geldi. Kuzey-doğu cephesi Kül Tigin koyun yılında on yedinci günde uçtu. Dokuzuncu ay, yirmi yedinci günde yastöreni tertip ettik. Türbesini, resimini(2), kitâbe t...
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...
  - `Tekin 1998, s. 21` (eslesen: _KIRKıZ_)
    > ...ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler)...
  - `Tekin 2003, s. 35` (eslesen: _KIRKıZ_)
    > ...ıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga* (KÇ D 11) [s. 36] # s. 36 — TALAT TEKİN - /KıISLTA/ *kısılta* (BK D 37) - /KıIşN/ *kışın* (BK G 2) - /KıIz/ *kız* (T 48, vb.) - /KıIzL/ *kız(ı)l* (T 52), vb. ## /iç, çi/ Hece İşareti **30.** Yazıtlarda çok seyrek olarak kul...


## KT-K-13#3 - Kül Tigin Yazıtı, Kuzey 13. satir  (13 kelime)

- **transkripsiyon:** `BaRK : İTGÜÇİ : BeDiZ : YaRaTıGMA : BİTiK : TaŞ : İTGÜÇİ : TaBGaÇ : KaGaN : ÇIKaNI : ÇaŊ : SeŊÜN : KeLTİ`
- **kelime karsiliklari:** BARK : EDİCİ : BEZE : YARATICISI : BİTİ : TAŞ : EDİCİ : TABGAÇ : KAĞANININ : YEĞENİ : ÇANG : SENGÜN : GELDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BaRK İTGÜÇİ BeDiZ YaRaTıGMA_)
    > ...eksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı...
  - `Tekin 2003, s. 200` (eslesen: _TaBGaÇ KaGaN ÇIKaNI ÇaŊ_)
    > ...gan* "babam Hakan" (KT D 11) - *ögüm katun* "annem Hatun" (KT K 9) - *siŋlim kunçuy* "kız kardeşim prenses" (KT D 20) - *inim / kül tigin* "erkek kardeşim Prens Kül" (KT K 10) - *kül tigin atı+si / yol(l)ug tigin* "Prens Kül'ün yeğeni Prens Yollug" (KT GD) - *tabgaç kagan çıkani / çaŋ säŋün* "Çin Hakanının yeğeni General Çang" (KT K 13) - *sir irkin oglı / yigän çor* "Sir İrkin oğlu Yigen Çor" (KÇ D 9) 11. Niteleyici yüklem adı *bar* "var" ile oluşmuş bir cümleciktir: - *ı bar / baş* "ormanlı doruk", (*harf.* "Orman(ı) var doruk") (T 26)...
  - `Ata 2011, s. 139` (eslesen: _BeDiZ YaRaTıGMA_)
    > ...olursa (onu) kırmak zor imiş” T 13-14 10. -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesinde geçen sıfat-fiil ekleri nelerdir? ZARF-FİİLLER Zarf-fiiller, zarf olarak kullanılan fiil biçimleridir. 1. -A...
  - `Olmez 2017, s. 63` (eslesen: _BeDiZ YaRaTıGMA_)
    > ...) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyinatçı, taş yazıt ustası" (KT K 13) **{-mAkçı} :** *tavgaç bodun tevlıgin körlügin üçükün armakçısın üçükün* "Çin halkı sahtekâr ve hilekâr olduğu için, dolandırıcı olduğu için" (BK D 6) **{-sIk} :** *él tutsık yér ö...
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ KaGaN_)
    > ...rak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser,...
  - `Tekin 2003, s. 107` (eslesen: _TaBGaÇ KaGaN_)
    > ...dimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bay...


## KT-KD-1#1 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (4 kelime)

- **transkripsiyon:** `KÖLTİGiN : KOYN : YILKA : YİTİ`
- **kelime karsiliklari:** KÜLTİĞİN : KOYUN : YILININ [BİRİNCİ-AYININ] : YEDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _YILKA YİTİ_)
    > ...k Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (...
  - `Ata 2011, s. 75` (eslesen: _YILKA YİTİ_)
    > ..., Karabalgasun’da, Orhun ırmağının eski yatağı yakınlarında, Koço Çaydam Gölü civarında birtakım heykeller, balballar ve yıkıntılar arasında Köl Tigin ve Bilge Kağan yazıtlarını bulur. İki yazıt arasındaki mesafe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının...
  - `Ata 2011, s. 68` (eslesen: _YILKA YİTİ_)
    > ...Yadrintsev, Karabalgasun’da, Orhun ırmağının eski yatağı yakınlarında, Koço Çaydam Gölü civarında birtakım heykeller, balballar ve yıkıntılar arasında Köl Tigin ve Bilge Kağan yazıtlarını bulur. İki yazıt arasındaki mesafe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu a...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 26` (eslesen: _YILKA_)
    > .... [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin...
  - `Tekin 2003, s. 28` (eslesen: _YILKA_)
    > ...23 1) - /yete/ *yeti*, yani *yēti* “7” (Eerbek I 1) - /yetmş/ *yetm(i)ş*, yani *yētmiş* “70” (Uyuk-Turan 4), /yetmIş/ (K. Hovu 5) **12.** İlk hecedeki /ı/ ve /i/ ünlüleri genellikle gösterilir: - /BIŋ/ *bıŋ* “1000” (T 16, 18) - /KIRK/ *kırk* “40” (KT K 2) - /YILKA/ *yılka* “yılında” (O sağ 4) - /bIlgA/ *bilgä* “akıllı” (KT D 3) - /kIsI/ *kişi* “insan” (BK D 3), vb. Sözbaşı ünsüzü artdamaksıl /k/ ise /kı/ ses öbeği /ıK, Kı/ işareti ile gösterilebilir: - /KıLp/ *kıl(ı)p* “yapıp” (O sağ 2) - /Kısms/ *kısm(i)ş* “bastırmış...


## KT-KD-1#2 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (5 kelime)

- **transkripsiyon:** `YiGiRMiKE : UÇDI : TOKuZuNÇ : aY : YiTİ`
- **kelime karsiliklari:** YİRMİ[SİNDE] : UÇTU : DOKUZUNCU : AY[IN] : YEDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _UÇDI TOKuZuNÇ aY_)
    > ...kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kü...
  - `Olmez 2017, s. 43` (eslesen: _UÇDI TOKuZuNÇ aY_)
    > ..., yirmi birinci günde" Eski Uygurcadan (HT VI 1820, Ölmez 1993, 161) 7. **yunt yıl:** *yunt yıl törtünç ay sekiz yėgirmike (...)* "At yılı, dördüncü ayın on sekizinde" (SUK-Sa08/1, Ayazlı 2016, 525'e göre) 8. **koń yıl:** *kül tėgin koń yılka yėti yėgirmike uçdı , tokuzunç ay yėti otuzka yog ertürtümüz* "Kül Tėgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). KT K-D 9. **bėçin yıl:** *barkın bedizin bitig taşin bėçin yılka yėtinç ay yėti otuzka kop a...
  - `Tekin 2003, s. 132` (eslesen: _aY YiTİ_)
    > ...On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl on...
  - `Ata 2011, s. 115` (eslesen: _aY YiTİ_)
    > ...ıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittin...
  - `Ata 2011, s. 108` (eslesen: _aY YiTİ_)
    > ...“birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 [[s. 108]] “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittiniz” ıt yıl...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 416` (eslesen: _aY YiTİ_)
    > ...erimiz siz uluğ PADİŞAH, HAN HEM ULUG BİK MİRAYLA FEODO ROVİÇ cümle Urus'nın Padişahına malum kılırmız kim, elbette bi zim hatremizni sıylap, her ne kadar zahmet, yonçuğ bulsa dahi, ve şehrifiiz otka yansa dahi, kilecek yılnıii hazinesin işbu hazinedin kaldırmay, yitiştirirge huyurgaysız. Taki kilgen kultkanııznı yuk di megey, siz Mart ayında, uluğ ilçimiz almaşuga harganda, iki uluğ hazinemizni Ali Biy alıp kilgey irdi. [[s. 416]] Gayet hile dostluk hem karindeş lik bulur irdi dip çapkunımız Osman'm yiherdik. Buyurdum ki...


## KT-KD-1#3 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (3 kelime)

- **transkripsiyon:** `OTuZKA : YUG : eRTÜRTüMüZ`
- **kelime karsiliklari:** OTUZDA : YUĞ : ERDİRDİK
- **kanit:**
  - `Olmez 2017, s. 43` (eslesen: _eRTÜRTüMüZ_)
    > ...dan (HT VI 1820, Ölmez 1993, 161) 7. **yunt yıl:** *yunt yıl törtünç ay sekiz yėgirmike (...)* "At yılı, dördüncü ayın on sekizinde" (SUK-Sa08/1, Ayazlı 2016, 525'e göre) 8. **koń yıl:** *kül tėgin koń yılka yėti yėgirmike uçdı , tokuzunç ay yėti otuzka yog ertürtümüz* "Kül Tėgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). KT K-D 9. **bėçin yıl:** *barkın bedizin bitig taşin bėçin yılka yėtinç ay yėti otuzka kop alkdımız* "(Kül Tėgin'in) tü...
  - `Tekin 1998, s. 28` (eslesen: _OTuZKA_)
    > ...um Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atıs...
  - `Tekin 2003, s. 132` (eslesen: _OTuZKA_)
    > ...bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay...
  - `Ata 2011, s. 75` (eslesen: _OTuZKA_)
    > ...Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki ola...
  - `Olmez 2017, s. 42` (eslesen: _OTuZKA_)
    > ...l | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (BK...
  - `Ata 2011, s. 68` (eslesen: _OTuZKA_)
    > ...öl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki olaylar...


## KT-KD-1#4 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (10 kelime)

- **transkripsiyon:** `BaRKIN : BeDiZİN : BİTiG : TaŞIN : aN : BİÇİN : YILKA : YİTiNÇ : aY : YİTİ`
- **kelime karsiliklari:** BARKINI : BEZESİNİ : BİTİ : TAŞINI : [O] AN : BİÇİN : YILININ : YEDİNCİ : AY[ININ] : YEDİ
- **kanit:**
  - `Olmez 2017, s. 43` (eslesen: _BaRKIN BeDiZİN BİTiG TaŞIN_)
    > ...*koń yıl:** *kül tėgin koń yılka yėti yėgirmike uçdı , tokuzunç ay yėti otuzka yog ertürtümüz* "Kül Tėgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). KT K-D 9. **bėçin yıl:** *barkın bedizin bitig taşin bėçin yılka yėtinç ay yėti otuzka kop alkdımız* "(Kül Tėgin'in) türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732). KT K-D 10. **takıgu yıl:** *... evime ėkinti ay altı yanıka tüşdüm takıgu...
  - `Tekin 1998, s. 28` (eslesen: _BİÇİN YILKA YİTiNÇ aY_)
    > ...kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tü...
  - `Tekin 2003, s. 132` (eslesen: _aY YİTİ_)
    > ...On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl on...
  - `Ata 2011, s. 115` (eslesen: _aY YİTİ_)
    > ...ıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittin...
  - `Ata 2011, s. 108` (eslesen: _aY YİTİ_)
    > ...“birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 [[s. 108]] “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittiniz” ıt yıl...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 416` (eslesen: _aY YİTİ_)
    > ...erimiz siz uluğ PADİŞAH, HAN HEM ULUG BİK MİRAYLA FEODO ROVİÇ cümle Urus'nın Padişahına malum kılırmız kim, elbette bi zim hatremizni sıylap, her ne kadar zahmet, yonçuğ bulsa dahi, ve şehrifiiz otka yansa dahi, kilecek yılnıii hazinesin işbu hazinedin kaldırmay, yitiştirirge huyurgaysız. Taki kilgen kultkanııznı yuk di megey, siz Mart ayında, uluğ ilçimiz almaşuga harganda, iki uluğ hazinemizni Ali Biy alıp kilgey irdi. [[s. 416]] Gayet hile dostluk hem karindeş lik bulur irdi dip çapkunımız Osman'm yiherdik. Buyurdum ki...


## KT-KD-1#5 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (3 kelime)

- **transkripsiyon:** `OTuZKA : KOP : aLKDıMıZ`
- **kelime karsiliklari:** OTUZDA : HEP : ALKDIK
- **kanit:**
  - `Olmez 2017, s. 43` (eslesen: _OTuZKA KOP aLKDıMıZ_)
    > ...tokuzunç ay yėti otuzka yog ertürtümüz* "Kül Tėgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). KT K-D 9. **bėçin yıl:** *barkın bedizin bitig taşin bėçin yılka yėtinç ay yėti otuzka kop alkdımız* "(Kül Tėgin'in) türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732). KT K-D 10. **takıgu yıl:** *... evime ėkinti ay altı yanıka tüşdüm takıgu yılka olortum ...* "... karargahıma ikinci ayın...
  - `Tekin 1998, s. 28` (eslesen: _OTuZKA KOP_)
    > ...Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ...
  - `Ata 2011, s. 75` (eslesen: _OTuZKA KOP_)
    > ...Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki olaylar i...
  - `Ata 2011, s. 68` (eslesen: _OTuZKA KOP_)
    > ...öl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki olaylar için...
  - `Tekin 2003, s. 132` (eslesen: _OTuZKA_)
    > ...bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay...
  - `Olmez 2017, s. 42` (eslesen: _OTuZKA_)
    > ...l | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (BK...
