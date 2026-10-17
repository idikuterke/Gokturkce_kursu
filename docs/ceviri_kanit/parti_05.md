# Ceviri istek paketi 5 - Orhun cumlecikleri

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


## KT-D-9#3 - Kül Tigin Yazıtı, Doğu 9. satir  (8 kelime)

- **transkripsiyon:** `İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ`
- **kelime karsiliklari:** İLİM : ŞİMDİ : HANİ? : KİME : İLİ : KAZANIRIMBEN : DER : İMİŞ
- **kanit:**
  - `Ata 2011, s. 167` (eslesen: _KaNI KiMKE İLiG_)
    > ...ülkesini devletini (töresini) almışlar. t(a)bg(a)ç k(a)g(a)nka ilin tör(ü)sin (a)lı Türk avam (cahil) halkı şöyle demiş: birm(i)ş türü͡k k(a)ra k(a)m(a)g bod(u)n (a)n͡ça tim(i)ş ill(i)g bod(u)n [ertim ilim “Vatanı olan millet idim, vatanım amtı kanı kimke ilig kazganur men tir şimdi nerede? Kime (kim için) vatan ermiş] kazanırım (fetih yaparım)?” der imiş. 160 [s. 168] D9 k(a)g(a)nl(ı)g bod(u)n (e)rt(i)m “Kağanlı millet idim, kağanım hani?...
  - `Ata 2011, s. 160` (eslesen: _KaNI KiMKE İLiG_)
    > ...s(ı)kka bükli [k](a)g(a)nka t(e)gi sül(e)yü birm(i)ş k͡uur(ı)g(a)ru t(e)m(i)r k(a)p(ı)gka <tegi> sül(e)yü birm(i)ş t(a)bg(a)ç k(a)g(a)nka ilin tör(ü)sin (a)lı birm(i)ş türü͡k k(a)ra k(a)m(a)g bod(u)n (a)n͡ça tim(i)ş ill(i)g bod(u)n [ertim ilim [[s. 160]] amtı kanı kimke ilig kazganur men tir ermiş] Yuğ (yas) töreni yapıcı (ve) ağlayıcı (olarak) doğuda gün doğusundaki Bükli Çöl halkı, Çin, Tibet, Avar, Rum (Bizans), Kırgız, Üç Kurıkan, Otuz Tatar, Kıtay, Tatabı.... bunca halklar gelerek ağlamış, yuğ töreni yapmış. Öylesine şöhret...
  - `Tekin 1998, s. 20` (eslesen: _TİR eRMiŞ_)
    > ...leri) düzelttim. (Çinliler) altın(1), gümüşlü), ipeğ(i) (ve) ipekli kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking!...
  - `Ata 2011, s. 119` (eslesen: _TİR eRMiŞ_)
    > ...inde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almış yadagın ‘yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak y...
  - `Olmez 2017, s. 22` (eslesen: _TİR eRMiŞ_)
    > ...ndan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu şekilde (kendileri...
  - `Ata 2011, s. 112` (eslesen: _TİR eRMiŞ_)
    > ...nde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almış yadagın ‘yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. [[s. 112]] ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 [s. 113]...


## KT-D-9#4 - Kül Tigin Yazıtı, Doğu 9. satir  (3 kelime)

- **transkripsiyon:** `KaGaNLıG : BODuN : eRTiM`
- **kelime karsiliklari:** KAĞANLI : BOYLAR : İDİM
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KaGaNLıG BODuN eRTiM_)
    > ...22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu ba...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNLıG BODuN eRTiM_)
    > ...nçurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNLıG BODuN_)
    > ...cek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39...
  - `Ata 2011, s. 119` (eslesen: _BODuN eRTiM_)
    > ...a doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç duru...
  - `Ata 2011, s. 112` (eslesen: _BODuN eRTiM_)
    > ...“ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almı...
  - `Tekin 1998, s. 5` (eslesen: _KaGaNLıG_)
    > ...lı yapıtım olmuştur (1965). Bu tez üç yıl sonra Indiana Üniversitesi yayınları arasında yayımlandı: A Grammar of Orkhon Turkic, Indiana University Publications, Uralic and Altaic series: 69, The Hague and Bloomington (1968). [[s. 5]] Bu yapıt İkinci Doğu Türk Kağanlığı döneminden kalma beş yazıtın, Kül Tigin, Bilge Kağan, Tunyukuk, Küli Çor (İhe-Hüşötü) ve Ongin (Işbara Tarkan) yazıtlarının metinlerini, İngilizce çevirilerini ve sözlüğünü de içerir. Yazıtlar ve Orhon Türkçesi üzerine çalışmalarım 1972'de Türkiye'ye döndük...


## KT-D-9#5 - Kül Tigin Yazıtı, Doğu 9. satir  (9 kelime)

- **transkripsiyon:** `KaGaNıM : KaNI : NE : KaGaNKA : İŞiG : KÜÇüG : BERÜRMeN : TİR : eRMiŞ`
- **kelime karsiliklari:** KAĞANIM : HANİ? : NE : KAĞANA : İŞİ : GÜCÜ : VERİR[İM] BEN : DER : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KaGaNıM KaNI NE KaGaNKA_)
    > ...ıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğ...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNıM KaNI NE KaGaNKA_)
    > ...İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı olan bir halktım, hakanım...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA İŞiG KÜÇüG_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57)...


## KT-D-9#6 - Kül Tigin Yazıtı, Doğu 9. satir  (6 kelime)

- **transkripsiyon:** `aNÇA : TİP : TaBGaÇ : KaGaNKA : YaGI : BOLMıS`
- **kelime karsiliklari:** ANCA : DEYİP : TABGAÇ : KAĞANINA : YAĞI : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _aNÇA TİP TaBGaÇ KaGaNKA YaGI BOLMıS_)
    > ...ka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun...
  - `Tekin 2003, s. 220` (eslesen: _aNÇA TİP TaBGaÇ KaGaNKA YaGI BOLMıS_)
    > ...ägi > süläyü birmiş. Tabgaç kaganka ilin törösin alı birmiş. Türük kara kamag bodun ança timiş: "İllig bodun [ärtim; ilim amtı kanı? Kämkä ilig kazganur män?" tir ärmiş]. (D 9) "Kaganlıg bodun ärtim; kaganım kanı? Nä kaganka işig küçüg birür män?" tir ärmiş. Ança tip Tabgaç kaganka yagı bolmış. Yagı bolup itinü yaratınu umadok, yana içikmiş. Bunça işig küçüg birtök(k)ärü sakınmatı "Türük bodunug ölüräyin, urugsıratayin!" tir ärmiş. [s. 221] # s. 221 — TALAT TEKİN (basılı sayfa numarası 222) # Tunyukuk Yazıtı (725 ?) ## I. Batı Yüzü (1) Bilgä Tu...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNKA YaGI BOLMıS_)
    > ...adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı olan bir halktım, hakanım nerede! Kimin Hakanına hizmet edip çalışıyorum!' dermiş. Böyle deyip...


## KT-D-11#1 - Kül Tigin Yazıtı, Doğu 11. satir  (3 kelime)

- **transkripsiyon:** `SUBI : aNÇA : iTMiŞ`
- **kelime karsiliklari:** SUYU[NU] : ANCA : [DÜZEN] ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _SUBI aNÇA_)
    > ...rmiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış,...
  - `Tekin 2003, s. 210` (eslesen: _SUBI aNÇA_)
    > ...är tabgaç ātin tutupan tabgaç kaganka körmiş* "Çin'deki beyler Çin unvanlarını alıp Çin hakanına bağımlı olmuş(lar)" (KT D 7) - *anta kisrä oglıtı kagan bolmiş ärinç* "Ondan sonra oğulları hakan olmuş şüphesiz ki" (KT D 5) - *üzä türük täŋrisi türük ıduk yiri subi ança etmiş* "Yukarıdaki Türk tanrısı, (aşağıdaki) Türk kutsal yer ve su (ruhları) şöyle yapmış(lar)" (KT D 10), vb. ## Cümlede Sözcük Düzeni **479.** Cümlede normal sözcük düzeni şöyledir: özne + yüklem. - *katun / yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) -...
  - `Ata 2011, s. 52` (eslesen: _SUBI aNÇA_)
    > ...da II. Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış...
  - `Tekin 1998, s. 24` (eslesen: _aNÇA iTMiŞ_)
    > ....... (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) ken...
  - `Ata 2011, s. 45` (eslesen: _SUBI aNÇA_)
    > ...ayan” anlamına gelen “İlteriş” unvanı verilir. Yazıtlarda II. [[s. 45]] Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş...
  - `Radloff, s. 249` (eslesen: _SUBI aNÇA_)
    > ...dare ettiği yer-su) cümlesindeki yer-su vatan kültü olan yer su' dur. Kült olan bu vatan yer-suyu Ötügeı; ve Budun İnli dağ ları ve ormanları temsil ediyorlardı. Bu mukaddes yer-su ruhla rı Gök Türklerin mukadderatını idare ediyorlardı (Türk tengrisi ıduk yer-subı anca etmiş). Vatanın korunmasında yer-su ruhları nın rolü Tonyukuk yazıtında pek açık ifade edilmiştir. [[s. 249]] Gök Türk vatanına saldıran düşmanlar, tanrı Umay ve yer-su ruhlarının yardımıyla gafil avlanarak basılmışlardır (tangri, Umay, yer-sub basa berti). B...


## KT-D-11#2 - Kül Tigin Yazıtı, Doğu 11. satir  (19 kelime)

- **transkripsiyon:** `TÜRK : BODuN : YOK : BOLMaZUN : TİYiN : BODuN : BOLÇUN : TİYiN : KaŊıM : İLTeRiŞ : KaGaNıG : ÖGüM : İLBİLGE : KaTUNıG : TeŊRİ : TÖPüSİNDE : TUTuP : YÜGeRÜ : KÖTÜRMiŞ`
- **kelime karsiliklari:** TÜRK : BOYLARI : YOK : OLMASIN : DİYE : BOYLAR : OLSUN : DİYE : BABAM : İLTERİŞ : KAĞANI : ÖĞÜM : İLBİLGE : KADINI : TANRI : TEPESİNDE : TUTUP : YUKARI : GÖTÜRMÜŞ
- **kanit:**
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN YOK BOLMaZUN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli k...
  - `Tekin 1998, s. 22` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...ağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Ata 2011, s. 52` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tag...
  - `Ata 2011, s. 45` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...ş” unvanı verilir. Yazıtlarda II. [[s. 45]] Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük...


## KT-D-11#3 - Kül Tigin Yazıtı, Doğu 11. satir  (7 kelime)

- **transkripsiyon:** `eRiNÇ : KaŊıM : KaGaN : YİTİYiGiRMİ : eRiN : TaŞıKMıŞ : TaŞRA`
- **kelime karsiliklari:** GERÇEK : BABAM : KAĞAN : YEDİ-YİRMİ : ERLE : TAŞIKMIŞ : DIŞARI
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...k bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra...
  - `Ata 2011, s. 52` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...ır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...nuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Ata 2011, s. 45` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...sıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er b...


## KT-D-12#1 - Kül Tigin Yazıtı, Doğu 12. satir  (6 kelime)

- **transkripsiyon:** `YORuYOR : TİYiN : KÜ : eŞiDiP : BaLIKDaKI : TaGIKMıŞ`
- **kelime karsiliklari:** YÜRÜYOR : DİYE : SÖZ : İŞİTİP : BALIKDAKI : TAKINMIŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TİYiN KÜ eŞiDiP BaLIKDaKI_)
    > ...i, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılm...
  - `Ata 2011, s. 52` (eslesen: _TİYiN KÜ eŞiDiP BaLIKDaKI_)
    > ...ürük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış...
  - `Ata 2011, s. 45` (eslesen: _TİYiN KÜ eŞiDiP_)
    > ...ekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug kü...


## KT-D-12#2 - Kül Tigin Yazıtı, Doğu 12. satir  (4 kelime)

- **transkripsiyon:** `TaGDakI : İNMiS : TİRiLiP : YeTMiŞ`
- **kelime karsiliklari:** DAĞDAKI : İNMİŞ : DİRİLİP : YETMİŞ
- **kanit:**
  - `Ata 2011, s. 52` (eslesen: _TaGDakI İNMiS TİRiLiP YeTMiŞ_)
    > ...bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıra...
  - `Ata 2011, s. 45` (eslesen: _TaGDakI İNMiS TİRiLiP YeTMiŞ_)
    > ...iri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladm...
  - `Tekin 1998, s. 22` (eslesen: _TaGDakI İNMiS TİRiLiP_)
    > ...etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz. Akılsız hakanlar t...


## KT-D-12#3 - Kül Tigin Yazıtı, Doğu 12. satir  (12 kelime)

- **transkripsiyon:** `eR : BOLMıS : TeŊRİ : KÜÇ : BİRTÜK : ÜÇiN : KaŊıM : KaGaN : SÜSİ : BÖRİ : TeG : eRMiŞ`
- **kelime karsiliklari:** ER : OLMUŞ : TANRI : GÜÇ : VERDİĞİ : İÇİN : BABAM : KAĞANIN : SÜSİ : BÖRÜ : DEK : İMİŞ
- **kanit:**
  - `Ata 2011, s. 52` (eslesen: _eR BOLMıS TeŊRİ KÜÇ_)
    > ...aganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş...
  - `Tekin 1998, s. 23` (eslesen: _KaŊıM KaGaN SÜSİ BÖRİ_)
    > ...ak ki. Babam Hakan on yedi adamla baş kaldırmış. (İlteriş) baş (D 12) kaldırıyor diye haber alıp şehirdekiler dağa çıkmış, dağdakiler (şehire) inmiş, derlenip toplanıp yetmiş kişi olmuşlar. [s. 23] 42 KÜLTİGİN YAZITI miş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgu...
  - `Tekin 2003, s. 151` (eslesen: _KaŊıM KaGaN SÜSİ BÖRİ_)
    > ...efer ettim" (BK D 25-26) *ançıp bars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça) Umay gibi (olan) annem Hatun" (KT D 31) *körür közüm körmäz täg, bilir biligim bilmäz...
  - `Ata 2011, s. 45` (eslesen: _eR BOLMıS TeŊRİ KÜÇ_)
    > ...ük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük tör...
  - `Tanyeri, s. 24` (eslesen: _KaŊıM KaGaN SÜSİ BÖRİ_)
    > ...tı'nda; “Ey TÜRK Ulusu! Üstte mavi gök çökmedikçe, altta yağız yer delinmedikçe, senin ilini ve töreni kim bozabilir?” ifadesiyle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkç...


## KT-D-12#4 - Kül Tigin Yazıtı, Doğu 12. satir  (4 kelime)

- **transkripsiyon:** `YaGISI : KOYN : TeG : eRMiŞ`
- **kelime karsiliklari:** YAĞISI : KOYUN : DEK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _TeG eRMiŞ_)
    > ...inçge erkliğ üzgeli uçuz. 5.5. [[s. 12]] Edebi Sanatlar (Benzetmeler) Orhon yazıtlarında anlatımı zenginleştiren ve güzelleştiren öğelerden biri de sık sık başvurulan benzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı)...
  - `Ata 2011, s. 52` (eslesen: _TeG eRMiŞ_)
    > ...rü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kulad...
  - `Ata 2011, s. 45` (eslesen: _TeG eRMiŞ_)
    > ...lteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe ya...
  - `Tanyeri, s. 24` (eslesen: _TeG eRMiŞ_)
    > ...Üstte mavi gök çökmedikçe, altta yağız yer delinmedikçe, senin ilini ve töreni kim bozabilir?” ifadesiyle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanıl...
  - `Tekin 2003, s. 151` (eslesen: _YaGISI_)
    > ...ars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça) Umay gibi (olan) annem Hatun" (KT D 31) *körür közüm körmäz täg, bilir biligim bilmäz täg boltı* "Gören...
  - `Tekin 1998, s. 9` (eslesen: _eRMiŞ_)
    > ...larda konuşan ve olayları anlatan kişi Bilge Kağan'ın kendisi olduğuna göre [s. 9] 14 GİRİŞ bunların yazarı da o olmalıdır. Büyük bir olasılıkla, Bilge Kağan yazıtların metnini önceden hazırlamış, sonra da bunları taşlar üzerine yazması için Yolluğ Tigin'e vermiştir. Tunyukuk yazıtına gelince bu yazıtta olaylar Bilge Tunyukuk'un ağzından anlatıldığına göre metnin yazarı kendisidir. Yazıcının kim olduğu ise yazıtta belirtilmemiştir. 4. [[s. 9]] Yazıtların İçeriği Orhon yazıtları İkinci Doğu Türk Kağanlığı'nın birinc...


## KT-D-12#5 - Kül Tigin Yazıtı, Doğu 12. satir  (6 kelime)

- **transkripsiyon:** `İLGeRÜ : KURıGaRU : SÜLeP : TİRMiŞ : KUBRaTMıŞ : KaMaGI`
- **kelime karsiliklari:** İLERİ : GERİ : SÜLEYİP : DERLEMİŞ : TOPARLAMIŞ : TAMAMI
- **kanit:**
  - `Tekin 1998, s. 34` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ KUBRaTMıŞ KaMaGI_)
    > ...erinç. Kafiğım kağan yeti yeğirmi erin taşlıklmlış. “Taşra) yolrı|- yur” (tiyin kü eşidip blallık|dlakı)| tağlıkmış, tağdakı| (D 11) inmiş, tirilip yetmiş er bolmış. [[s. 34]] Tengri küç birtük üçün, kafığım Kağan süsi böri teğ ermiş, yağısı kotiy teğ ermiş. İlgerü kurığaru sülep tirmiş kubratmış. Kamağı yeti yüz er bolmış. Yeti yüz er bolup elfsiremiş kağansıramış bodunuğ, küngedmiş, ORHON YAZITLARI 65 imişler şüphesiz, kötü imişler şüphesiz. [[s. 34]] Beyleri (ve) halkı itaatkâr olmadığı için, Çin halkı hilekâr (ve) sahtekâr olduğu için, (aldatıcı ve kand...
  - `Ata 2011, s. 52` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ KUBRaTMıŞ KaMaGI_)
    > ...ti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış...
  - `Ata 2011, s. 45` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ KUBRaTMıŞ KaMaGI_)
    > ...unug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları...


## KT-D-13#1 - Kül Tigin Yazıtı, Doğu 13. satir  (7 kelime)

- **transkripsiyon:** `YeTİYüZ : eR : BOLMıS : YeTİYüZ : eR : BOLıP : iLSiReMiŞ`
- **kelime karsiliklari:** YEDİYÜZ : ER : OLMUŞ : YEDİYÜZ : ER : OLUP : ILSİREMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eR BOLMıS_)
    > ...p (daha) yükseğe kaldırmışlar muhakkak ki. Babam Hakan on yedi adamla baş kaldırmış. (İlteriş) baş (D 12) kaldırıyor diye haber alıp şehirdekiler dağa çıkmış, dağdakiler (şehire) inmiş, derlenip toplanıp yetmiş kişi olmuşlar. [s. 23] 42 KÜLTİGİN YAZITI miş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıç...
  - `Ata 2011, s. 52` (eslesen: _eR BOLMıS_)
    > ...aganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunu...
  - `Olmez 2017, s. 20` (eslesen: _eR BOLMıS_)
    > ...rk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler. Babam hakan on yedi savaşçıyla isyan etmiş. 'İsyan başlıyor' diye haber gelince şehirdekiler (de) isyan etmişler. Dağda...
  - `Ata 2011, s. 45` (eslesen: _eR BOLMıS_)
    > ...ük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug...
  - `Ogel C2, s. 158` (eslesen: _eR BOLıP_)
    > ...pek v', girerek; kara köpek gibi çıktı”': Yani sövüp, saydı. Söylemediğini bırakmadı. 9 “Teeret (taharet) kıldı, namasokidi'": Proben.İV, 5s. 102/133. [[s. 158]] * Sihirli yüzük için, ““keremetli yüzük** deniliyor: A. eaer. a. yer. 9 Don değiştirme, “Kepter bolıp”, “laçın bolıp", yani güvercin olup. laçın (atmaca) olup gibi, günlük sözlerle söyleniyordu: Proben, IV, a. 101133. “ Don değiştirtm e, “kılmak” sözü ile anlatılıyordu: **.. Onbir kuş kılıp, koydu...'”:Proben, IV, e. 122/158, # Radlof, Hörterbuch, 1, s. 564...


## KT-D-13#2 - Kül Tigin Yazıtı, Doğu 13. satir  (3 kelime)

- **transkripsiyon:** `KaGaNSıRaMıŞ : BODuNıG : KÜŊeDMiŞ`
- **kelime karsiliklari:** KAĞANSIRAMIŞ : BOYLARI : CARİYE [EDİLMİŞ]
- **kanit:**
  - `Olmez 2017, s. 64` (eslesen: _KaGaNSıRaMıŞ BODuNıG KÜŊeDMiŞ_)
    > ...Tar B 3); *teŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I revived and nu...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNSıRaMıŞ_)
    > ...halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ...
  - `Tekin 2003, s. 170` (eslesen: _KaGaNSıRaMıŞ_)
    > ...tig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve mecalsiz bir halde yürüyor idiniz" (KT G 9) *ıda taşda kalmişi kubranıp yeti yüz boltı* "Dağda bayırda kalmış olanları toplanıp yedi yüz (kişi) oldu" (T 4) 2. Eylem sıfatı olarak: *elsirämiş kagansıramiş bodun* "devletsiz ve hakansız kalmış halk" (KT D 13) *yir sayu barmiş bo[dun]* "her yere gitmiş halk" (BK D 22) *igidmiş kaganıŋın sabin almatin* "(seni) doyurmuş olan hakanının sözünü dinlemeden" (KT G 9) *äçümüz apamız tutmiş yir sub* "atalarımızın dedeleri...
  - `Ata 2011, s. 52` (eslesen: _KaGaNSıRaMıŞ_)
    > ...ip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz:...
  - `Tekin 1998, s. 23` (eslesen: _KÜŊeDMiŞ_)
    > ...ar. [s. 23] 42 KÜLTİGİN YAZITI miş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kur...
  - `Ata 2011, s. 45` (eslesen: _KaGaNSıRaMıŞ_)
    > ...yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, hal...


## KT-D-13#3 - Kül Tigin Yazıtı, Doğu 13. satir  (5 kelime)

- **transkripsiyon:** `KULaDMıŞ : BODuNıG : TÜRK : TÖRÜSÜN : IÇGıNMıŞ`
- **kelime karsiliklari:** KUL [EDİLMİŞ] : BOYLARI : TÜRK : TÖRESİNİ : TERKETMİŞ
- **kanit:**
  - `Olmez 2017, s. 64` (eslesen: _KULaDMıŞ BODuNıG_)
    > ...çün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I revived and nurtured the people...
  - `Tekin 1998, s. 23` (eslesen: _TÖRÜSÜN IÇGıNMıŞ_)
    > ...ş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı...
  - `Tekin 1998, s. 11` (eslesen: _KULaDMıŞ_)
    > ...kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? S...
  - `Ata 2011, s. 53` (eslesen: _KULaDMıŞ_)
    > ...ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge H...
  - `Tekin 2003, s. 154` (eslesen: _IÇGıNMıŞ_)
    > ...ar Çin'e) yaklaşıp yerleştikten sonra (Çinliler) kötü niyetlerini düşünürlermiş" (KT G 5) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) *ol kan yok boltokda kisrä el yitmiş ıçgınmiş* "O han öldükten sonra (da) devlet yok olup gitmiş" (O ön 1) [s. 155] # s. 155 — ORHON TÜRKÇESİ GRAMERİ *anta kisrä kaŋım kagan uçdı* "Ondan sonra babam hakan vefat etti" (MÇ K 12) **362.** *üzä* "üstüne, üzerine; -a göre, gereğince": *kişi oglınta üzä äçü...
  - `Ata 2011, s. 46` (eslesen: _KULaDMıŞ_)
    > ...yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde...


## KT-D-13#4 - Kül Tigin Yazıtı, Doğu 13. satir  (5 kelime)

- **transkripsiyon:** `BODuNıG : eÇÜM : aPAM : TÖRÜSİNÇE : YaRaTMıŞ`
- **kelime karsiliklari:** BOYLARI : EÇÜM : APAM : TÖRESİNCE : YARATMIŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...irtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla .............
  - `Ata 2011, s. 53` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. Baba...
  - `Ata 2011, s. 46` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...an süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. [[s. 46]] Babam Hakan on...


## KT-D-13#5 - Kül Tigin Yazıtı, Doğu 13. satir  (6 kelime)

- **transkripsiyon:** `BOŞGURMıŞ : TÖLİS : TaRDUŞ : BODuNıG : aNDA : iTMiŞ`
- **kelime karsiliklari:** BOŞGURMUŞ : TÖLİS : TARDUŞ : BOYLARINI : [O] ANDA : [DÜZEN] ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BOŞGURMıŞ TÖLİS TaRDUŞ_)
    > ...böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artu...
  - `Ergin 1970, s. 16` (eslesen: _TÖLİS TaRDUŞ_)
    > ...un gibi imiş. Doğuya, batıya asker sevk edip toplamış yığmış. Hepsi | yedi yüz er olmuş. Yedi yüz er olup ilsizleşmiş, kağansızlaşmış milleti, cariye olmuş, kul olmuş milleti, Türk töresini bırakmış milleti, ecdadımın töresince yaratmış, [s. 16] yetiştirmiş. Tölis, Tarduş milletini orda tanzim etmiş. | Yabguyu, şadı orda vermiş. Güneyde Çin milleti düşman imiş. Kuzeyde Baz Kağan, Dokuz Oğuz kavmi düşman imiş. Kırgız, Kunkan, Otuz Tatar, Kitay, Tatabı hep düşman imiş. Babam kağan bunca...... | Kırk yedi defa ordu sevk etmiş, yi...
  - `Tekin 2003, s. 116` (eslesen: _BOŞGURMıŞ_)
    > ...görevinde: *älig+çä är tutdumuz* "Elli kadar asker yakaladık" (T 2) *uygur il[t]äbär yüz+çä ärin ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) 3. Görecelik zarfı görevinde: *...bodunug äçüm apam törösin+çä yaratmiş boşgurmiş* "...halkı atalarımın dedelerimin töresince (yeniden) yaratmış (ve) eğitmiş" (KT D 13) *köŋlüŋ+çä uduz* "Dilediğin gibi sevk et!" (T 15) *kıyınıg köŋlüŋ+çä ay* "(Suç işleyenlerin) cezalarını dilediğin gibi ver!" (T 32) *oglanım ärdä marımin+ça bol* "Oğullarım...
  - `Ata 2011, s. 53` (eslesen: _BOŞGURMıŞ_)
    > ...bratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. Babam Hakan on...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...
  - `Tekin 2003, s. 105` (eslesen: _TaRDUŞ_)
    > ...sär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä inisi kagan bolmiş ärinç* "Ondan sonra erkek kardeşleri hakan olmuşlar, şüphesiz" (KT D 4) - *eçim kagan olortokda özüm tarduş bodun üzä şad ärtim* "Amcam hakan tahta çıktığında ben Tarduş halkı üzerine Şad idim" (KT D 17) - *bäglik urı ogluŋ kul boltı, eşilik kız ogluŋ küŋ boltı* "Bey olmaya layık erkek çocukların köle oldu, hanım olmaya layık kız çocukların cariye oldu" (KT D 24) -...


## KT-D-14#1 - Kül Tigin Yazıtı, Doğu 14. satir  (4 kelime)

- **transkripsiyon:** `YaBGUG : ŞaDıG : aNDA : BiRMiŞ`
- **kelime karsiliklari:** YABGUYU : ŞADI : [O] ANDA : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YaBGUG ŞaDıG_)
    > ...aru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğü...
  - `Tekin 1998, s. 21` (eslesen: _BiRMiŞ_)
    > ...taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük...
  - `Tekin 2003, s. 108` (eslesen: _BiRMiŞ_)
    > ...(Türk halkını) besledim" (BK D 38) *başlıg+ıg yüküntürmiş, tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler b...
  - `Ata 2011, s. 47` (eslesen: _BiRMiŞ_)
    > ...baren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde...
  - `Ata 2011, s. 37` (eslesen: _ŞaDıG_)
    > ...29 [s. 37] olmak üzere üç alt gruba ayrılmıştır. Johanson’da da Orta Dönem, Róna- Tas’ta olduğu gibi XIII. yy’dan itibaren başlar ve çeşitli yazı dillerini kapsar. Eski Türkçe döneminin yukarıda söz ettiğimiz şekilde üç yazı dilini kapsadığına tanık verebileceğimiz diğer bir çalışma, Marcel Erdal’ın A Grammar of Old Turkic (Brill, Leiden-Boston 2004) adlı kitabıdır. Bu kitapta Erdal, Karahanlı Türkçesinin ilk dönem metinlerini Eski Türkçe içinde değerlendirmiştir. Türkiye’de bu konuda en son...
  - `Olmez 2017, s. 29` (eslesen: _ŞaDıG_)
    > ...ap durumdadır. Toplamı 70 satırı aşan yazıt içerik olarak çoğunlukla KT ile örtüşür. Yazıtın KT yazıtından sonra dikildiği tahmin edilmektedir. #### Tunyukuk Yazıtı Tunyukuk yazıtı iki ayrı taştan oluşur. Dikildiği tarih kesin belli değilse de Tunyukuk'un yaşadığı dönem hesap edildiğinde 8. yüzyılın ilk çeyreğinde dikilmiş olması gerekir. Her iki taşın toplamı 62 satırdır. İlk taş daha iyi korunmuş, ikinci taş ise bir hayli yıpranmıştır. Tunyukuk, Göktürk devletinin kurucuları arasında yer alır. Kendi ifadesinden hare...


## KT-D-14#2 - Kül Tigin Yazıtı, Doğu 14. satir  (5 kelime)

- **transkripsiyon:** `BiRiyE : TaBGaÇ : BODuN : YaGI : eRMiŞ`
- **kelime karsiliklari:** BERİDE : TABGAÇ : BOYLARI : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...3) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağa...
  - `Ata 2011, s. 118` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...+A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısında...
  - `Ata 2011, s. 111` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...llanılır. a. +A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Bu...


## KT-D-14#3 - Kül Tigin Yazıtı, Doğu 14. satir  (7 kelime)

- **transkripsiyon:** `YIRıYA : BaZ : KaGaN : TOKUZOGuZ : BODUN : YaGI : eRMiŞ`
- **kelime karsiliklari:** YIRIDA : BAZ : KAĞAN : DOKUZ-OĞUZ : BOYLARI : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağa...
  - `Ata 2011, s. 118` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısında...
  - `Ata 2011, s. 111` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...r. a. +A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Bu...


## KT-D-14#4 - Kül Tigin Yazıtı, Doğu 14. satir  (8 kelime)

- **transkripsiyon:** `KIRKıZ : KURIKaN : OTuZTaTaR : KITaYN : TaTaBI : KOP : YaGI : eRMiŞ`
- **kelime karsiliklari:** KIRGIZ : KURIKAN : OTUZ-TATAR : KITAY : TATABI : HEP : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TaTaBI KOP YaGI eRMiŞ_)
    > ...örüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ)...
  - `Tekin 1998, s. 21` (eslesen: _KOP YaGI eRMiŞ_)
    > ...ğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş,...
  - `Ata 2011, s. 47` (eslesen: _KOP YaGI eRMiŞ_)
    > ...urulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İ...
  - `Olmez 2017, s. 56` (eslesen: _KOP YaGI eRMiŞ_)
    > ...duyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygur kanım tutulmış* "Uygur hanım tutulmuş" (Tes B 4) **Gelecek zaman *-DAçI* ekiyle kurulur:** Gelecek zamanın az sayıda örnekte, özellikl...
  - `Ata 2011, s. 40` (eslesen: _KOP YaGI eRMiŞ_)
    > ...nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (v...


## KT-D-14#5 - Kül Tigin Yazıtı, Doğu 14. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `KaŊıM : KaGaN : BUNÇA ---`
- **kelime karsiliklari:** BABAM : KAĞAN : BUNCA ---
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KaŊıM KaGaN_)
    > ..., yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp...
  - `Tekin 2003, s. 117` (eslesen: _KaŊıM KaGaN_)
    > ...ay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla...
  - `Ata 2011, s. 52` (eslesen: _KaŊıM KaGaN_)
    > ...türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _KaŊıM KaGaN_)
    > ...a isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Ata 2011, s. 45` (eslesen: _KaŊıM KaGaN_)
    > ...r araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er b...
  - `Tanyeri, s. 24` (eslesen: _KaŊıM KaGaN_)
    > ...tı'nda; “Ey TÜRK Ulusu! Üstte mavi gök çökmedikçe, altta yağız yer delinmedikçe, senin ilini ve töreni kim bozabilir?” ifadesiyle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü...


## KT-D-15#1 - Kül Tigin Yazıtı, Doğu 15. satir  (3 kelime)

- **transkripsiyon:** `KIRK : aRTUKI : YeTİ`
- **kelime karsiliklari:** KIRK : ARTI : YEDİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KIRK aRTUKI YeTİ_)
    > ...is Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka baş...
  - `Tekin 2003, s. 129` (eslesen: _KIRK aRTUKI YeTİ_)
    > ...3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Elegest I 5), *tokuz on* "90" (IB 29), *biş yüz* "500" (BK G 11), *yeti yüz* "700" (T 4), *eki bıŋ* "2000"...
  - `Ata 2011, s. 114` (eslesen: _KIRK aRTUKI YeTİ_)
    > ...ayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtü...
  - `Ata 2011, s. 107` (eslesen: _KIRK aRTUKI YeTİ_)
    > ...kiz otuz denkliğini kolayca bulabiliriz. d. [[s. 107]] Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldü...


## KT-D-15#2 - Kül Tigin Yazıtı, Doğu 15. satir  (5 kelime)

- **transkripsiyon:** `YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ`
- **kelime karsiliklari:** YOLU : SÜLEMİŞ : YİRMİ : SÜNGÜŞ : SÜNGÜŞMÜŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YOLI SÜLeMiŞ_)
    > ...ğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağa...
  - `Ata 2011, s. 116` (eslesen: _YOLI SÜLeMiŞ_)
    > ...(< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez...
  - `Olmez 2017, s. 45` (eslesen: _YOLI SÜLeMiŞ_)
    > ...ç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 defa sefer etmiş", *otuz artokı bir yaşıma* "31 yaşımda", *otuz artokı üç yaşıma* "33 yaşımda". Bazin'in belirttiğine göre *artokı* ile kurulan sayı sisteminin kalıntıları Yakutlar arasında 19. yüzyıla kadar sürmüştür: *uon orduga bir* (= *\*on artokı b...
  - `Tekin 1998, s. 48` (eslesen: _YiGiRMİ SÜŊüŞ_)
    > ...ığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün u...
  - `Ata 2011, s. 109` (eslesen: _YOLI SÜLeMiŞ_)
    > ...(çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak...
  - `Tekin 1998, s. 28` (eslesen: _YiGiRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...


## KT-D-15#3 - Kül Tigin Yazıtı, Doğu 15. satir  (5 kelime)

- **transkripsiyon:** `TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLSiReTMiŞ`
- **kelime karsiliklari:** TANRI : BUYURDUĞU : İÇİN : İLLİYİ : İLSİRETMİŞ
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN İLLiGiG iLSiReTMiŞ_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda kaltım. Ol (tJörüde ü...
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmi...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş...
