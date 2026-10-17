# Ceviri istek paketi 38 - Orhun cumlecikleri

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


## TY2-D-1#1 - Tonyukuk Yazıtı, Doğu 1. satir  (3 kelime)

- **transkripsiyon:** `KaPaGaN : KaGaN : YiTİ`
- **kelime karsiliklari:** KAPAĞAN : KAĞAN : YEDİ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KaGaN YiTİ_)
    > ...n, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek...
  - `Tekin 2003, s. 117` (eslesen: _KaGaN YiTİ_)
    > ...larını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla doğuy...
  - `Roux, Eski Din, s. 107` (eslesen: _KaPaGaN KaGaN_)
    > ...ak buluyoruz: "Küçük kardeşler büyük kardeşlerine benzer olarak yapılmamışlardır; oğullar babalarına [s. 107] benzer şekilde yapılmamışlardır" (M.I, D, satır 5); Tonyukuk'da: "Bizzat kendim ... Çin İmparatorluğu zamanında yapıldım" (satır 1); Ongin'de: "Ben, Kapağan Kağan'ın imparatorluğu zamanında yapıldım" (Satır 4) denmektedir. Buna karşın bugün "yaratmak" anlamına gelen, ama o zamanlarda "düzenlemek," "var etmek" anlamında kullanılan yarat fiili, hükümdarı tanımlamak için olağan olarak kullanılan şu deyimde görülmektedir:...
  - `Roux, Altay Turklerinde Olum, s. 77` (eslesen: _KaPaGaN KaGaN_)
    > ...ile isyanı yasal bir prensin öldürülmesiyle (çoğu kez kalanın kesilmesiyle) sonuçlandığında, kurban çoğu zaman mutlu bir ölü olarak temsil edilmektedir. Bu şekilde öldürülen kişilerin listesinin neredeyse sonu yoktur: 716 yılında bir ayaklanmanın kurbanı olan Kapağan Kağan, ünlü Bilge Kağan vd. göksel kahramanlardır. Yessün Timur da onlar gibi katledilmiştir, fakat bize, göğe yükselmiş olduğu söylenmemektedir (bkz. sonraki bölümler). [[s. 77]] O halde, bu kişiler ebediyet açısından ne gibi bir zarar görmüşlerdir? Bundan başka...
  - `Ogel C1, s. 166` (eslesen: _KaPaGaN KaGaN_)
    > ...kmak şehri, onların Büyük-Ordu, yani büyük başkenti oldu. İli boylarında pek fazla birşeyleri kalmamakla beraber, orada da Küçük-Ordu, yani küçük başkentlerini kurdular. [[s. 166]] 712 de birinci defa, 716 dan az evvel de ikinci, defa tanınmış Göktürk Kağan'ı Kapagan-Kagan tarafından ezilmeleri üzerine, Sarı-Türgeş'lerin artık, Tokmak şehrinde görülmediklerini görüyoruz. Bu münasebetle Karluk'ların da Tokmak'a doğru indikleri görülüyor. Bundan sonra On-ok'ların Batı bölümü Nu-shih-pi'ler, Talas vadisindeki Taraz şehrinde KaraTü...
  - `Tekin 1998, s. 3` (eslesen: _KaGaN_)
    > ...lleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarımı: 2...


## TY2-D-1#2 - Tonyukuk Yazıtı, Doğu 1. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `OTuZ : YaŞKA : --- : eRTİ`
- **kelime karsiliklari:** OTUZ : YAŞINDA : --- : İDİ
- **kanit:**
  - `Ogel C2, s. 209` (eslesen: _YaŞKA_)
    > ...ü: Satırlar arasında bulduğumuz bu düşünce üzerinde durmak, gereklidir. Çünkü bu destanlar, atasözleriyle oluşmuşlardır: (Proben, I, 241/264). [[s. 209]] 4 Kara Kököladlı yiğit bir keloğlan lrasf olup, ondun sonra da küçük bir kuş (kuşkacak) ol. du. Cüneşelkuyaşka) kondu... ”:(Proben,VV.z. 68/85). İnsan. bir keloğlan olduktan senra, kuş donuna girebiliyor. 3 Bu konu üzerinde, ilgili madeleler içinde duracağız. [s. 210] 194 TÜRK MİTOLOJİSİ II 15. “Güneşin batmadığı, aym çıkmadığı yer”': Böyle bir söz, çok mitolojik A...
  - `Radloff, s. 432` (eslesen: _YaŞKA_)
    > ...im bar hudayim!. .. Ne kılgaymen hudayim? Kumdin tola günahım, tağdın ağır günahım, 35) Taştin ağır günahım, aciz bende kulungmen ... Yolda hayal bomangla, yolda hayal bosangla Yüzümni kara kılmangla! Yermenkide cenk kılgan, Üzengide kan kılgan, kızıl kanga boyaşkan, Saçı belge çırmaşkan kün perisi ayhanlar, 40) Ay perisi ahyanlar, ya Allah, ya Allah! [[s. 432]] llkıçiga pir bolgan hazret Çolpan atadur, Bir tilegim sizlerdin bir tilegim pirlerdin ... Üçyüz altmış tamurdin törtyüz pare sügnüktin ... Ölmey kalgan leşkerle...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 128` (eslesen: _YaŞKA_)
    > ...ayim !... Ne kılgaymen hudayim? Kumdin tola günahım, tağdm ağır günahim, 35) Taştin ağır günahım, aciz bende kulungm en... Yolda hayal bomangla, yolda hayal bosangla Yüzümni kara kılmangla! [[s. 128]] Yermenkide cenk kılgan, Üzengide kan kılğan, kızıl kanğa boyaşkan, Saçı belge çırmaşkân kün perisi ayhanlar, 40) A y perisi ahyanlar, ya Allah, ya Allah! Ilkıçiga pir bolgan hazret Çolpan atadur, Bir tilegim sîzlerdin^ bir tilegim pirlerdin. . . Üçyüz altmış tamurdin törtyüz pare sügnüktin... ölm ey kalgan leşkerler... All...
  - `09b_Janly_Myrza_Bapaeva_Tuva_Kamlarinin_Alkislari, s. 111` (eslesen: _YaŞKA_)
    > ...uy barba, Oraya-buraya dağılma, Ölgen kiji mında kövey! Ölen kişi çok burada! Ökpe, baarlar mında kövey. Akciğer, karaciğer burada çok. Özüŋ-baarıŋ çımçadıp al. Damarlarınız, ciğerlerinizi tazeleyin. Hakta, çaksa torulbayn, Rüzgara, yağmura kalmayın, Ham-na ıyaşka honup çıtpayn. Kam ağaçta* gecelemeyin. Harın dürgen çedip kelem. Çabuk gelin. [[s. 111]] Hannıg bardan sorup algaş, Kanlı bağrı yedikten sonra, Katkı höglüg hamnap honaal, Neşeyle geceyi geçirelim, Kara sınnar eeleri. Kara zirvlerin iyeleri! Kam ağacı*: ‘h...


## TY2-D-1#3 - Tonyukuk Yazıtı, Doğu 1. satir  (5 kelime)

- **transkripsiyon:** `KaPaGaN : KaGaN : OLuRDuM : TÜN : UDuMaTI`
- **kelime karsiliklari:** KAPAĞAN : KAĞAN : OTURDU : GECE : UYUMADIM
- **kanit:**
  - `Roux, Eski Din, s. 107` (eslesen: _KaPaGaN KaGaN_)
    > ...ak buluyoruz: "Küçük kardeşler büyük kardeşlerine benzer olarak yapılmamışlardır; oğullar babalarına [s. 107] benzer şekilde yapılmamışlardır" (M.I, D, satır 5); Tonyukuk'da: "Bizzat kendim ... Çin İmparatorluğu zamanında yapıldım" (satır 1); Ongin'de: "Ben, Kapağan Kağan'ın imparatorluğu zamanında yapıldım" (Satır 4) denmektedir. Buna karşın bugün "yaratmak" anlamına gelen, ama o zamanlarda "düzenlemek," "var etmek" anlamında kullanılan yarat fiili, hükümdarı tanımlamak için olağan olarak kullanılan şu deyimde görülmektedir:...
  - `Roux, Altay Turklerinde Olum, s. 77` (eslesen: _KaPaGaN KaGaN_)
    > ...ile isyanı yasal bir prensin öldürülmesiyle (çoğu kez kalanın kesilmesiyle) sonuçlandığında, kurban çoğu zaman mutlu bir ölü olarak temsil edilmektedir. Bu şekilde öldürülen kişilerin listesinin neredeyse sonu yoktur: 716 yılında bir ayaklanmanın kurbanı olan Kapağan Kağan, ünlü Bilge Kağan vd. göksel kahramanlardır. Yessün Timur da onlar gibi katledilmiştir, fakat bize, göğe yükselmiş olduğu söylenmemektedir (bkz. sonraki bölümler). [[s. 77]] O halde, bu kişiler ebediyet açısından ne gibi bir zarar görmüşlerdir? Bundan başka...
  - `Ogel C1, s. 166` (eslesen: _KaPaGaN KaGaN_)
    > ...kmak şehri, onların Büyük-Ordu, yani büyük başkenti oldu. İli boylarında pek fazla birşeyleri kalmamakla beraber, orada da Küçük-Ordu, yani küçük başkentlerini kurdular. [[s. 166]] 712 de birinci defa, 716 dan az evvel de ikinci, defa tanınmış Göktürk Kağan'ı Kapagan-Kagan tarafından ezilmeleri üzerine, Sarı-Türgeş'lerin artık, Tokmak şehrinde görülmediklerini görüyoruz. Bu münasebetle Karluk'ların da Tokmak'a doğru indikleri görülüyor. Bundan sonra On-ok'ların Batı bölümü Nu-shih-pi'ler, Talas vadisindeki Taraz şehrinde KaraTü...
  - `Tekin 2003, s. 76` (eslesen: _OLuRDuM_)
    > ...KİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çekimli biçimlerinde bu gelişme görülmez...
  - `Roux, Eski Din, s. 8` (eslesen: _OLuRDuM_)
    > ...an O'nun karşısında hissettim ve ümit ediyorum ki bir gün O da beni bulacaktır. Size borçlu olduğum bu inanç düşüncesiyle dolu olarak şunu ifade etmek isterim ki eğer bu çalışma bir denemeden daha fazla bir şey olsaydı onu size ithaf etmekten son derece mutlu olurdum. [[s. 8]] Ümit ederim ki hayranı olduğum muhterem hanıme fendi, bu eseri bu haliyle, belki de yegane övüncü olacak şekilde, minnet, hayranlık ve saygı duyduğum bir ismin himayesi altında yayımlamanu hoşgörmesi için eşsiz hocayı ikna edebilecektir. J. P. ROUX...
  - `Ogel C1, s. 107` (eslesen: _OLuRDuM_)
    > ...nmüş ve bu konuda gün geçtikçe kafasını yormağa başlamış. Nasıl doğdum, nasıl dünyaya geldim diye, hep düşünür gezermiş. [[s. 107]] Artık bir gün kendi kendine şöyle söylenmeğe başlamış : “—Eğer gökten düşseydim, o zaman kar ve buzla örtülü ve buzdan bir adam olurdum, Güney, kuzey, doğu veya batı yönlerinden birinden gelaeydim, o zaman ben de ağaç ve çayırların izleri olur ve bunlar da rüzgârlarla uçuşurdu. Yok yerim en derinliklerinden gelseydim, elbetteki s5 U, Harva (Holmberg), Der Baum des Lebens, s. 72, 36 Altaylar...


## TY2-D-2#1 - Tonyukuk Yazıtı, Doğu 2. satir  (5 kelime)

- **transkripsiyon:** `KÜNTüZ : OLuRMaTI : KIZıL : KaNıM : TöKTİ`
- **kelime karsiliklari:** GÜNDÜZ : OTURMADIM : KIZIL : KANIMI : DÖKTÜ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _KÜNTüZ OLuRMaTI KIZıL KaNıM_)
    > ...eti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ a...
  - `Ergin 1970, s. 42` (eslesen: _KIZıL KaNıM_)
    > ...Â B İ D E L E R İ müşaviri | yine bizzat ben idim, kumandanı yine bizzat ben idim. İltiriş Kağana, Türk Bögü Kağanına, Türk Bilge Kağanına Doğu cephesi Kapgan Kağan yirmi yedi yaşında.....orda..... idi. Kapgan Kağan oturdu. Gece uyumadı, | gündüz oturmadı. Kızıl kanımı döktürerek, kara terimi koşturarak işi, gücü verdim hep. Uzun keşif kolunu yine gönderdim hep. | Siperi, nöbet yerini büyüttüm hep. Geri dönen düşmanı getirirdim. Kağanımla ordu gönderdim. [[s. 42]] Tanrı korusun, | bu Türk milleti arasmda silâhlı düşmanı ko...
  - `Tekin 2003, s. 157` (eslesen: _KIZıL KaNıM_)
    > ...devlet sahibi olacağını burada (taş üzerine) kaydettim; yanılıp (nasıl) öleceğini de burada (taş üzerine) kaydettim" (KT G 10-11) *ügüzkä tüşdi, yañdok yolta yämä öltik-ök* "Irmağa düştüler; bozguna uğrayıp etrafa dağılanlar da yollarda ölüp gittiler" (T 16) *kızıl kanım töküti kara tärim yügürti (i)şig küçüg bertim ök, uzun yälmäg yämä ı(t)tım ok* "... kızıl kanımı akıtarak, kara terimi dökerek (hakanıma ve [s. 158] # s. 158 — TALAT TEKİN halkıma) hizmet ettim, uzak mesafelere keşif devriyeleri de gönderdim" (T 52) 2. Yin...
  - `Ata 2011, s. 139` (eslesen: _KIZıL KaNıM_)
    > ...n olduğu gibi Orhun Türkçesinde de en işlek zarf- fiil ekidir: inim köl tigin birle eki şad birle öl-ü yit-ü kazgantım “kardeşim Köl Tigin ile, iki şad ile (birlikte) öle (ölesiye) yite (yitesiye) kazandım (çabaladım)” KT D27 kızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunu...
  - `Ata 2011, s. 132` (eslesen: _KIZıL KaNıM_)
    > ...iili asıl fiile bağlayan ektir. Bugün olduğu gibi Orhun Türkçesinde de en işlek zarffiil ekidir: inim köl tigin birle eki şad birle öl-ü yit-ü kazgantım “kardeşim Köl Tigin ile, iki şad ile (birlikte) öle (ölesiye) yite (yitesiye) kazandım (çabaladım)” KT D27 kızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı [[s. 132]] dökerek, kara terimi akıtarak hizmet ettim” T 52 [s. 133] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükd...
  - `Tekin 1998, s. 11` (eslesen: _KÜNTüZ_)
    > ...olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan [[s. 11]] perişan duruma gelmek, saçı başı yolunmak), birki bodunuğ ot sub kıl- “birleşik halkı ateş ile su (gibi birbirine düşman) etmek”, tün udıma-, küntüz olurma- “geceleri uyumamak, gündüzleri [s. 12] 20 GİRİŞ oturmamak” (gece gündüz demeden çalışmak, çok çalışmak), kızıl kanın töküt-, kara terin yüğürt- “kızıl kanını akıtmak kara terini dökmek” (çok emek vermek, çok çalışmak), işiğ küçüğ bir- “işini gücünü...


## TY2-D-2#2 - Tonyukuk Yazıtı, Doğu 2. satir  (3 kelime)

- **transkripsiyon:** `KaRA : TeRiM : YÖGRTİ`
- **kelime karsiliklari:** KARA : TERİMİ : YÖĞÜRDÜ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _KaRA TeRiM_)
    > ...ta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İ...
  - `Ergin 1970, s. 42` (eslesen: _KaRA TeRiM_)
    > ...viri | yine bizzat ben idim, kumandanı yine bizzat ben idim. İltiriş Kağana, Türk Bögü Kağanına, Türk Bilge Kağanına Doğu cephesi Kapgan Kağan yirmi yedi yaşında.....orda..... idi. Kapgan Kağan oturdu. Gece uyumadı, | gündüz oturmadı. Kızıl kanımı döktürerek, kara terimi koşturarak işi, gücü verdim hep. Uzun keşif kolunu yine gönderdim hep. | Siperi, nöbet yerini büyüttüm hep. Geri dönen düşmanı getirirdim. Kağanımla ordu gönderdim. [[s. 42]] Tanrı korusun, | bu Türk milleti arasmda silâhlı düşmanı koşturmadım, damgalı atı k...
  - `Tekin 2003, s. 157` (eslesen: _KaRA TeRiM_)
    > ...T G 10-11) *ügüzkä tüşdi, yañdok yolta yämä öltik-ök* "Irmağa düştüler; bozguna uğrayıp etrafa dağılanlar da yollarda ölüp gittiler" (T 16) *kızıl kanım töküti kara tärim yügürti (i)şig küçüg bertim ök, uzun yälmäg yämä ı(t)tım ok* "... kızıl kanımı akıtarak, kara terimi dökerek (hakanıma ve [s. 158] # s. 158 — TALAT TEKİN halkıma) hizmet ettim, uzak mesafelere keşif devriyeleri de gönderdim" (T 52) 2. Yinelemeli olarak: *bägläri yämä boduni yämä tüz ärmiş* "beyleri de halkı da barışık ve uyum içinde imiş" (KT D 3) *kün y...
  - `Ata 2011, s. 139` (eslesen: _KaRA TeRiM_)
    > ...Türkçesinde de en işlek zarf- fiil ekidir: inim köl tigin birle eki şad birle öl-ü yit-ü kazgantım “kardeşim Köl Tigin ile, iki şad ile (birlikte) öle (ölesiye) yite (yitesiye) kazandım (çabaladım)” KT D27 kızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım”...
  - `Ata 2011, s. 132` (eslesen: _KaRA TeRiM_)
    > ...ayan ektir. Bugün olduğu gibi Orhun Türkçesinde de en işlek zarffiil ekidir: inim köl tigin birle eki şad birle öl-ü yit-ü kazgantım “kardeşim Köl Tigin ile, iki şad ile (birlikte) öle (ölesiye) yite (yitesiye) kazandım (çabaladım)” KT D27 kızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı [[s. 132]] dökerek, kara terimi akıtarak hizmet ettim” T 52 [s. 133] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adg...
  - `Tekin 2003, s. 16` (eslesen: _TeRiM_)
    > ...harf ve işaretleri hazırlamakta bana yardımcı olan, kitabı yayına hazırlayan öğrencim ve meslektaşım Doç. Dr. Mehmet Ölmez’e, kitabı baştan sona okuyarak dizgi yanlışlarını düzelten öğrencim Dr. Yong-Sŏng Li’ye bu yardımları için teşekkürlerimi ifade etmek isterim. Talat Tekin, 15 Eylül 2000 [s. 17] # s. 017 — GİRİŞ ### GİRİŞ **1.** Orhon Türkçesi, yazılı belgeleri bize kadar gelmiş olan en eski Türk diyalektidir. Bu ad ile, daha çok, 8. yüzyılın ilk yarısında, İkinci Türk Kağanlığı (682-744) döneminde, bugünkü Moğ...


## TY2-D-2#3 - Tonyukuk Yazıtı, Doğu 2. satir  (3 kelime)

- **transkripsiyon:** `iŞiG : KÜÇİG : BeRTiM`
- **kelime karsiliklari:** İŞİ : GÜCÜ : [ONA] VERDİM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _BeRTiM_)
    > ...larını aldım ........ 2.20 (8 4). Halk kumun [s. 41] 78 BİLGE KAĞAN YAZITI BARET yujtuzin: yok kıltımi Çessescnarcnecezndı GG 5S) yorlıp KASTAN 7 AR SAĞA YTR YAAA AAA 1) (G 6) sünglüşdüm SEİR ERĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olu...
  - `Tekin 2003, s. 157` (eslesen: _BeRTiM_)
    > ...tim; yanılıp (nasıl) öleceğini de burada (taş üzerine) kaydettim" (KT G 10-11) *ügüzkä tüşdi, yañdok yolta yämä öltik-ök* "Irmağa düştüler; bozguna uğrayıp etrafa dağılanlar da yollarda ölüp gittiler" (T 16) *kızıl kanım töküti kara tärim yügürti (i)şig küçüg bertim ök, uzun yälmäg yämä ı(t)tım ok* "... kızıl kanımı akıtarak, kara terimi dökerek (hakanıma ve [s. 158] # s. 158 — TALAT TEKİN halkıma) hizmet ettim, uzak mesafelere keşif devriyeleri de gönderdim" (T 52) 2. Yinelemeli olarak: *bägläri yämä boduni yämä tüz...
  - `Ata 2011, s. 145` (eslesen: _BeRTiM_)
    > ...eçik tir men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş...
  - `Olmez 2017, s. 62` (eslesen: _BeRTiM_)
    > ...şan oldu diyerek teslim almak amacıyla geldiler" (BK D 32); *yuyka erkli topulgalı uçuz ermiş yinçge erklig üzgeli uçuz* "Yufka olanı delmek kolaymış. İnce olanı koparması kolaymış." (T 13) **{-çA} :** *ulug oglum agrip yok bolça k²og seyünüg balbal tike bértim* "Büyük oğlum hastalanıp vefat edince General Kog'u balbal dikiverdim." (BK G 9); *yugur<ur>ça tédip 1 bar baş aşdımız yuvulu éntimiz* "güç bela ormanlık dağı aştık, yuvarlanarak aşağı indik." (T 26) **Şart Eki** **{-sAr} :** *ötüken yiş olorsar élte bu...
  - `Ata 2011, s. 138` (eslesen: _BeRTiM_)
    > ...tiyin b. oguzug ölürteçik tir men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yo...
  - `03_Codex_Cumanicus_Kuun_1880, s. 124` (eslesen: _BeRTiM_)
    > ...» pag. [[y. 123]] 50, tapcurumen «sputo» pag. 51., ayrumen «separo» in eadem pagina, salam berumcn «saluto» pag. 52., turumen «sto» pag. S2)-i sechirumcn «salto» in eadem pagina, chatisturumen pag. 54., [y. 124] tec turumen «taceo» pag. 55., — tanucluc bertimen «testificor» in eadem pagina, — oscurumen ibidem. harn7nen «vado» pag. 56., uyag ttLriinien «vigilo» pag. 57., coiirunien «volvo» pag, 58. In formis alunnen «siimo», — kalurnicn «remaneo», in forma bilurmen «scio» pag. 49., et aliis quoque formis in / e...


## TY2-D-2#4 - Tonyukuk Yazıtı, Doğu 2. satir  (6 kelime)

- **transkripsiyon:** `ÖK : UZuN : YeLMeG : YeME : ITıM : OK`
- **kelime karsiliklari:** HEP : UZUN : YELME : YİNE : ETTİM : OK
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _UZuN YeLMeG YeME_)
    > ...ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, i...
  - `Tekin 2003, s. 157` (eslesen: _ÖK UZuN_)
    > ...nılıp (nasıl) öleceğini de burada (taş üzerine) kaydettim" (KT G 10-11) *ügüzkä tüşdi, yañdok yolta yämä öltik-ök* "Irmağa düştüler; bozguna uğrayıp etrafa dağılanlar da yollarda ölüp gittiler" (T 16) *kızıl kanım töküti kara tärim yügürti (i)şig küçüg bertim ök, uzun yälmäg yämä ı(t)tım ok* "... kızıl kanımı akıtarak, kara terimi dökerek (hakanıma ve [s. 158] # s. 158 — TALAT TEKİN halkıma) hizmet ettim, uzak mesafelere keşif devriyeleri de gönderdim" (T 52) 2. Yinelemeli olarak: *bägläri yämä boduni yämä tüz ärmiş* "b...
  - `Ata 2011, s. 31` (eslesen: _ÖK UZuN_)
    > ...yiş mekanizmasını tespit etmek suretiyle yapabiliyoruz. Bir dili, sadece o dili konuşanlara ve dilin iç faktörlerine dayanarak dönemlendiremeyiz. Türk dili, yazılı metinlere sahip olmadan önce de çok uzun zaman kullanılmıştır. Dilbilimciler, dilin akışı içindeki karakteristikleri belirleyerek yazılı olmayan Türkçenin özellikleri hakkında da bazı fikirler öne sürebilir. Ana Altayca Dönemi...
  - `Ata 2011, s. 24` (eslesen: _ÖK UZuN_)
    > ...ullanarak fikir sahibi olabiliriz. Bunu da dilin işleyiş mekanizmasını tespit etmek suretiyle yapabiliyoruz. Bir dili, sadece o dili konuşanlara ve dilin iç faktörlerine dayanarak dönemlendiremeyiz. [[s. 24]] Türk dili, yazılı metinlere sahip olmadan önce de çok uzun zaman kullanılmıştır. Dilbilimciler, dilin akışı içindeki karakteristikleri belirleyerek yazılı olmayan Türkçenin özellikleri hakkında da bazı fikirler öne sürebilir. Ana Altayca Dönemi Türk dilinin tarihinde en erken dönem “Altay Dil Birliği” dönemidir; yan...
  - `Ogel C1, s. 66` (eslesen: _ÖK UZuN_)
    > ...ni soğuğa karşı masıl koruyacak ve nasıl yaşıyacak? [[s. 66]] En iyisi bunlar için bir de ateş vermeli de, ısınıp yaşasınlar!” Tanrı Ülgen'in üç tane kızı varmış. Bunlar da, ateşi bulmak için çalışıyorlarımnış. Bir gün Tanrı dışarı çıkmış. Tanrının sakalı da çok uzunmuş. Yürürken sakalına basıp sendelJeyivermiş. Kızlar bunu görünce gülmeğe ve Tanrı ile alay etmeğe başlamışlar. Bunun üzerine Tanrı çok kızmış ve kızların yüzüne bile bakmıyarak, bırakıp gitmiş. Tanrının kızdığını gören kızlar üzülmüşler. [[s. 66]] Ama Tanrı...
  - `Ogel C2, s. 109` (eslesen: _ÖK UZuN_)
    > ..., ortaya çıkarmaktır. [[s. 109]] Hızır'dan çocuk dileme Aşağıda sunacağımız Kırgız destan parçası, Türklerin Hızır anlayışını, biraz daha aydınlatacaktır. Bu bölümlerde Hızır'ın adı geçmiyor. Ancak özelliklerinden Radlof da, bunun Hızır olduğunu anlamıştı. Çok uzun olan bu dua veya diyaloğu, ana fikirleri ile sunmağa çalışacağız. Türkçelerini, bizim türkçemize uyduracağız: “©... Kızarıp varıp, gün battı!... Sararıp, tan attı! Müezzinler (alımlar) ezan okuyanda, binamazlar uyuyanda! [[s. 109]] Ak Sarıklı (şalmalı) bir a...


## TY2-D-3#1 - Tonyukuk Yazıtı, Doğu 3. satir  (3 kelime)

- **transkripsiyon:** `aRKUY : KaRGUG : ULGaRTDıM`
- **kelime karsiliklari:** ARKUYU : KARGUYU : ULUGATDIM
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _aRKUY KaRGUG_)
    > ...Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi...
  - `Tekin 2003, s. 160` (eslesen: _aRKUY KaRGUG_)
    > ...Kıtayları, kuzeyde (de) Oğuzları pek çok öldürdü" (T 7) 3. Pekiştirilen sözcük bir son eylem: *kızıl kanım töküti kara tärim yügürti işig küçüg bertim ök* "Kızıl kanımı akıtarak, kara terimi döktürerek (ona) hizmet ettim" (T 52) *uzun yälmäg yämä ı(t)tım ok, arkuy kargug olgurtdum ok* "Uzak mesafelere keşif devriyeleri gönderdim, gözetleme kulelerini de (yerli yerince) yerleştirdim" (T 52-53) *otuz yaşımda, äsizim ä, kit(t)im ök* "Otuz yaşımda, ne yazık, gittim (işte)!" (Çaa-Höl III 1-2) Pekiştirme edatı *ok/ök* ünlü ile bit...
  - `Tekin 1998, s. 40` (eslesen: _ULGaRTDıM_)
    > ...glanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Fer...
  - `Tekin 2003, s. 143` (eslesen: _KaRGUG_)
    > ...na hizmet et!" (MÇ D 5) **321.** {+DI} eki ile türetilmiş tarz zarfları şunlardır: *ädgüti, katıgdı, yegdi* ve *yaraklıgdı*. 1. *ädgüti* "iyice" < *ädgü* "iyi": *bu sabımin ädgüti eşid katıgdı tiŋla* "Bu sözlerimi iyice işit ve sıkıca dinle!" (KT G 2) *yälmä kargug ädgüti urgıl* "Atlı muhafızları ve gözetleme kulelerini iyice yerleştir!" (T 34) 2. *katıgdı, katıgtı* "sıkıca, iyice, çok" < *katıg* "sıkı, katı": *katıgdı tiŋla* "(bu sözlerimi) iyice dinle!" (KT G 2) *katıgdı bā* "sıkıca bağla!" (IB 33) *katıgtı bā* "sıkı...
  - `Tekin 2003, s. 109` (eslesen: _aRKUY_)
    > ...D 24) **262.** {+nI}. Bu ek birkaç örnekte görülür: *yoguŋ koragıŋ+nı* "cenaze törenini" (O 12) *ku+nı säŋün+üg ıdmiş* "(Çin'e) General Ku'yu göndermiş" (T 9) Aşağıdaki örneklerde belirli nesne eki söz öbeğinin yalnız ikinci (sonuncu) üyesine eklenmiştir: *arkuy kargu+g* "müstahkem mevkiler(i) ve gözetleme kulelerini" (T 53) *yoguŋ koragıŋ+nı* "cenaze törenini" (O 12) *bäg+li bodun+lı+g* "beyler ile halkını" (KT D 6); krş. Uyg. *täŋri+li yir+li+dä* "gök(te) ve yerde" (TT VI 02) [s. 110] # s. 110 — TALAT TEKİN Bu ku...
  - `Ogel C1, s. 371` (eslesen: _aRKUY_)
    > ...üçük bir doğan cinsidir. Ayak ve bacakları kırmızıdır. [[s. 371]] Bilhassa akşamları yapılan avlara çok elverişli bir kuştur. Şekil 44: Altay Hun çağı Tuyahta ve Başadar Kurganlarında bulunmuş figürler. 6. Yapar: Kırgu kuşu. Kaşgarlı Mahmud, karguy/kırguy/Karkuy/kırkuy adlı kuşun atmaca ( Accipiter nisus) nevinden bir av kuşu olduğunu söylüyor*$. Çağataycada da Kırgu atmaca ve aynı zamanda serçe anlamına gelirdi. [[s. 371]] Şeyh Süleyman Efendi, bu kuşun karcıgay ile aynı olduğunu söylerse de, bu konuyu aşağıda münak...


## TY2-D-3#2 - Tonyukuk Yazıtı, Doğu 3. satir  (5 kelime)

- **transkripsiyon:** `OK : BaNGıMA : YaGIKA : KeLÜRİR : eRTiM`
- **kelime karsiliklari:** OK : BAĞIRDIĞIMDA : YAĞIYI : GETİRİR : İDİM
- **kanit:**
  - `Tekin 2003, s. 143` (eslesen: _YaGIKA_)
    > ...öyle" < *\*an+ça*: *ırak bodunug ança yagutır ärmiş* "Uzaklarda oturan halkları öylece yakına getirirlermiş" (KT G 5) *özi ança kärgäk bolmiş* "Kendileri öylece vefat etmişler" (KT D 3-4), *bän ança ter män* "Ben şöyle diyorum" (T 37) *ülügi ança ärmiş ärinç: yagıka yalŋus... tägip... özi kısga kärgäk boltı* "Kısmeti şöyle imiş muhakkak ki: Düşmana yalnız olarak saldırıp yaşamı henüz kısa iken vefat etti" (KÇ D 11) *kaŋım şad ança ötünmiş* "Babam Şad şöyle maruzatta bulunmuş" (O ön 8) *ança biliŋlär ädgü ol* "Şöylece bil...
  - `02_Ceren_Sungur_Sibirya_dan_Balkanlara_Samanlar_ve_Cadicilar_II, s. 237` (eslesen: _BaNGıMA_)
    > ...n önemli ve sahih karak teristik özelliği olarak tanırlar. Araştırmaalar Lajos Kalmany'nin 1917 tarihli yayınından sonra gözlerini savaşa çevirdiler. [[s. 237]] Ko dolanyi'nin özetinden yararlanan Dioszegi, savaşın tür ve unsur larını derleyip kapsamlı veri tabanıma dayanarak ana hatlarını çıkarabildiğimle esasen tutarlı bir tablo çizdi; bu tabloya ekle mem gereken tek şey tıiltosların kanatlı (ejder, kartal) türleri oldu. Dioszegi'nin tezinde eksik bulduğum, anlatı düzlemi ve gerçek hayat pratiklerinin ayrımıdır. Bu da...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 122` (eslesen: _YaGIKA_)
    > ...oldu, zahmet görüp canı sıkıldı, yaptığına pişman oldu, tutsak olup sıkıntıya düştü", (Duşman eline tutsak düştü, çektiği zahmetten sıkıldı, canından bıktı,yaptığına pişman oldu, kendi kendini kına- dı; bolluktan sonra şimii derdi arttı). [[y. 122]] ENEZ er yagıka ilindi - adam duşmana esir oldu", sy (41 , “ kelimesi gerek yazma, gerek, basma nüshalarda bu şe- kildedir. İyice anlıyamadık. " si tapdu" şeklinde bir kişi adı olsa gerektir - (#*J) Bu mısradaki Mİ kelimesi basma nüshada yanlış olarak bu şekilde çıkmıştır...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 6` (eslesen: _YaGIKA_)
    > ...uşman bastı", Başkası da böyledir; "” —5, Ja basdı - adam kızı bastı, Üzerine çöktü, çullandı", MASS ıt keyikni basdı < köpek avı bastı ve yıktı"; «3 İLİ basar - basmak), Siler kulın püsdi adam köle- zerine çöktü", Ver kızığ 3 püser - püsmek), “s2 YAY Beg yağıka pusdı Bey, duşmanı beklemek için pusuya girdi", [[y. 6]] ( 32 - )U 23 pusar - pusmak). LL) İ Wer kuadi' < adam kustu",Baş- SA kusdı: SALA kısdı: SALA kısdı: SAS kesâtı kası da böyledir; (İli - >L53 ku- " Sti, bodhuğ kusdı > boya 8oldu, bezikti", la, i...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 39` (eslesen: _YaGIKA_)
    > ...- yazıkmak). [[y. 39]] an yaşıktı: " köz yaşıktı < göz Bi yaşlandı", (göz, güneşten ve güneşin tel tel olan ışığından kamaştı) , GİS S3 yaş kar - ii) Giz yagıktı: Duşmanlaştı. " AE , Beg ler birbirge yagıktı > Beyler, y birbirleriyle duşmanlaştı", (- OG <> » yagıkar - YA siz yapuldı: Kapandı. " <8 kapuğ yapuldı - kapı kapandı". Herhangi bir. şey kapansa yine böyle denir; (<> 317 SE yapulur - yapulmak). SİZ yubalaı: İhmal edildi, yüzüstü bırakıldı. [[y. 39]] m SANLI AN iş yabaldı > 15 yözüs- ti bırakıldı, üzerinde du...


## TY2-D-3#3 - Tonyukuk Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `KaGaNıMıN : SÜLeTDiMiZ : TeŊRİ : YaRLıKaZU`
- **kelime karsiliklari:** KAĞANIMLA : SÜLEDİK : TANRI : YARLIKADI
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...lurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga k...
  - `Ata 2011, s. 55` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...e yerleşik hayata geçerler. Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar...
  - `Olmez 2017, s. 58` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...gıl tėdi* "akıl ver! dedi" (T 5) **Teklik 3. kişi: -zUn, -zu, -çun** *sü başi inel kagan tarduş şad barzun tėdi* "Ordunun komutanı (olarak) İnel Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilg...
  - `Ata 2011, s. 48` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...-Oğuz adı ile geçen Uygurlar, kültürel bakımdan gelişmiş Türk boylarından biri olarak öbür Türklerden önce yerleşik hayata geçerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bu...
  - `Tekin 1998, s. 48` (eslesen: _KaGaNıMıN_)
    > ...ğan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün udımatı, (D 2) küntüz olurmatı, kızıl kanım töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6)...
  - `Tekin 2003, s. 79` (eslesen: _KaGaNıMıN_)
    > ...halkım", *bodunumín* "halkımı", vb. Ancak, belirli ekler vurguyu üzerlerine çekmiyor, vurgu ekten önceki hece üzerinde kalıyordu: *bírmädi* "vermedi", *udímatı* "uyumayarak", *kılínmadok* "yaratılmamış", *bíliŋ* "bilin!", *ánın* "onun ile", *ókun* "ok ile", *kaganímın* "hakanımla birlikte", *ótça* "ateş gibi", vb. [s. 80] # s. 80 — (başlıksız sayfa: BİÇİM BİLGİSİ bölümü başı) ## BİÇİM BİLGİSİ VE İLGİLİ SÖZDİZİMİ ### Söz Yapımı #### Ekleme ile Söz Yapımı **148.** Orhon Türkçesinde iki türlü gövde vardır: yalın (birinci...


## TY2-D-4#1 - Tonyukuk Yazıtı, Doğu 4. satir  (6 kelime)

- **transkripsiyon:** `BU : TÜRK : BODuNKA : YaRaKLıG : YaGIG : KeLTÜRMeDiM`
- **kelime karsiliklari:** BU : TÜRK : BOYLARINA : KILIÇLI : YAĞIYI : GETİRMEDİM
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _BU TÜRK_)
    > ...n, kızıl kanımı akıtarak, kara terimi döktürerek hizmet ettim. Uzak mesafelere keşif devriyeleri gön- derdim, (D 3) gözetleme kulelerini (yerli yerince) koydurtum. Dönen düşmanı (geri) getirirdim. Kağanımla seferlere çıktık. [[s. 48]] Tanrı esirgesin, (D 4) bu Türk halkı içinde zırhlı düşmanların akınına imkan vermedim, (kuyruğu) düğümlü (düşman) atlarını koşturtmadım. İlteriş Kağan kazanmasa (idi), (D 5) ve ben kendim kazanmasa (idim) devlet de halk da olmayacak idi. (Kağan) kazandığı için ve ben kendim kazandığım içi...
  - `Ergin 1970, s. 5` (eslesen: _BU TÜRK_)
    > ...vleti daha da kuvvetlendirdiler. Sonra 731'de Kül Tigin, 734'te de Bilge Kağan öldü. [[s. 5]] Bilge Kağan'ın ölümünden 10 sene kadar sonra da Uygurlar, devleti ele geçirerek 745'te Göktürk hakimiyetine son verdiler. İşte bu kitapta sunduğumuz Orhun âbideleri, bu Türk hanedanının Bilge Kağan devrinin mahsulleridir. Birincisi olan Kül Tigin âbidesini ağabeyisi Bilge Kağan 732'de diktirmiş, M U H A R R E M E R G İ N [s. 6] ikincisi olan Bilge Kağan âbidesini de ölümünden bir yıl sonra 735'te kendi oğlu olan kağan diktirmi...
  - `Tekin 2003, s. 19` (eslesen: _BU TÜRK_)
    > ...mington 1968). Bu gramerin dayandığı dil malzemesi İkinci Doğu Türk Kağanlığı döneminden kalma şu yazıtlardı: Kül Tigin yazıtı (732), Bilge Kağan yazıtı (735), Tunyukuk yazıtı (720-725 ?), Ongin yazıtı (732-735 ?) ve Küli Çor (İhe-Hüşötü) yazıtı (719-723 ?). Bu Türkçe gramerin dayandığı dil malzemesine gelince, bunlar yukarıda belirtilen yazıtlara ek olarak şu runik harfli yazıtlar ve yazmalardır: 1. Moğolistan’daki Uygur Kağanlığı (744-840) döneminden kalma yazıtlar: Moyun Çor ya da Şine-Usu yazıtı (760), Taryat ya da T...
  - `Ata 2011, s. 39` (eslesen: _BU TÜRK_)
    > ...(Türkiye Türkçesi, Azerbaycan Türkçesi, Türkmence, Özbekçe, Kazakça, Kırgızca, Yakutça, Çuvaşça vs.) nin ortaya çıktığı dönemdir. Türk dillerinin bugün kendine has gramer özellikleri vardır ve bunlar edebî eserler veren yazı dilleri hâline gelmişler-dir. Bu Türkçelerden bazıları da siyasal nedenlerle yazı dili hâline getirilmiştir. Eski Türkçe dönemi ve sonrasını üç ana başlık altında gerekli adlandırmalarla birlikte kronolojik olarak sıralamaya çalışın. 32 [s. 40] Özet “Türk Dil...
  - `Olmez 2017, s. 50` (eslesen: _BU TÜRK_)
    > ...ini almaya başlar. Günümüz Türk dillerindeki durum eklerinin çoğunluğu 12.-13. yüzyıldaki şekillere yakın olsalar da bazı diller (Halaçça, Tuvaca, Sarı Uygurca, Yakutça) öteki dillere göre bu yüzyıllardan daha eski şekilleri gösterirler. Günümüzde, Çağatay grubu Türk dilleri (Özbekçe ve Uygurca) özellikle ayrılma eki konusunda öteki Türk dillerinden farklılık gösterir, Eski Uygurcaya yaklaşırlar. Oğuz grubu Türk dilleri de ilgi durumu konusunda yazıtlar ile birlik gösterirler. Aşağıda kısaca bu hâllerin ekleri ve birer ö...
  - `Tekin 2003, s. 224` (eslesen: _TÜRK BODuNKA_)
    > ...an] Çıkan Tunyukuk ātıg bermiş. (2) ....tdokda yügä(t)türmiş, Işbara Çıkan Küli Çor bolmiş.... Tunyukuk (3) [Kap]gan Kagan elintä karıp ädgü bäŋi körti. Ulug Küli Çor sekiz on yaşap yok bol[tı]. (4) ... özlüki boz at ärti. Kädim ..... alpi ärdämi anta tükädi. Türk bodunka.... (5) Sag(ı)r Çulugan yagı(t)tokda [Küli] Çor [oplayu tägi]p, sançıp, ölürüp, oglin kisisin buln[adı]. (6) bulup Az elig tutdı. Kerü Az ........... ärti. Küli Çor Türk bodun..... (7) [k]aganıŋa eli[n törösin...........] Bilgäsin üçün, alpin ärdämin [üçü]n k...


## TY2-D-4#2 - Tonyukuk Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `TÖGüNLüG : aTıG : YÜGüRTMeDiM`
- **kelime karsiliklari:** TÖĞÜNLÜ : ATI : YÜGÜRTMEDİM
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _aTıG YÜGüRTMeDiM_)
    > ...m töküti, kara terim yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunk...


## TY2-D-4#3 - Tonyukuk Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `İLTeRiŞ : KaGaN : KaZGaNMaSaR`
- **kelime karsiliklari:** İLTERİŞ : KAĞAN : KAZANMASA
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _İLTeRiŞ KaGaN KaZGaNMaSaR_)
    > ...m yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, n...
  - `Tekin 2003, s. 124` (eslesen: _İLTeRiŞ KaGaN KaZGaNMaSaR_)
    > ...m kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben kendim kazanmamış olsaydım..." (T 5[?4]-55) *inim kül tigin özi ança kärgäk boltı* "Kardeşim Prens Kül kendisi öylece vefat etti" (KT D 30) *eltäbär özi kälti* "Vali kendisi geldi" (KÇ D 9)...
  - `Tekin 1998, s. 6` (eslesen: _İLTeRiŞ KaGaN_)
    > ...anlığı 630'da, Batı Türk Kağanlığı da 659 yılında Çin'in eğemenliği altına girer. [[s. 6]] Ancak, Doğu Türkleri 670 yılında Kutluğ adlı bir liderin öncülüğünde Çinlilere başkaldırır ve uzunca bir mücadeleden sonra başarılı olurlar. Bu başarıdan sonra Kutluğ, İlteriş Kağan ünvanıyla tahta geçer (682). Böylece İkinci Doğu Türk Kağanlığı kurulmuş olur. Ancak bu ikinci kağanlığın da ömrü pek uzun olmaz. [[s. 6]] 740'lı yılların başlarında Uygurlar, liderleri Kül Bilge Han öncülüğünde Türklere başkaldırır ve son Türk prensi Ozmış -...
  - `Tekin 2003, s. 121` (eslesen: _İLTeRiŞ KaGaN_)
    > ...ça, ança* - Araç durumu *anın* İşaret zamirlerinden türemiş öbür sözcükler de şunlardır: *antag* "onun gibi, öyle" (T 9, 36) ~ *antäg* (T 29) < *\*anı täg*, *büntäg+i* "böyle+si" (T 57) < *\*buntäg* < *\*bunı täg*. 1. Yalın durum a) Gösterme zamiri olarak: *ilteriş kagan bilgä tuñukuk kazgantok üçün kapgan kagan türük sir bodun yorıdokı bu* "İlteriş Kağan ve Bilge Tunyukuk (çalışıp çabalayıp) kazandıkları için Kapgan Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädg...
  - `Ata 2011, s. 5` (eslesen: _İLTeRiŞ KaGaN_)
    > ...nlığı’nın Yıkılış Nedenleri …………....… 44 Çin Egemenliğinde Geçen Elli Yıl ………………………………...… 45 II. KÖKTÜRK KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II....
  - `Ata 2011, s. 4` (eslesen: _İLTeRiŞ KaGaN_)
    > ...lışı …………………………………..…… 44 Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri …………....… 44 Çin Egemenliğinde Geçen Elli Yıl ………………………………...… 45 II. KÖKTÜRK KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… [[s. 4]] 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II. Köktürk Kağanlığı’nın Yıkılışı ………………….….…………....


## TY2-D-5#1 - Tonyukuk Yazıtı, Doğu 5. satir  (11 kelime)

- **transkripsiyon:** `UDU : BeN : ÖZüM : KaZGaNMaSaR : İL : YiME : BODuN : YiME : YOK : eRTeÇİ : eRTİ`
- **kelime karsiliklari:** UDU : BEN : ÖZÜM : KAZANMASAM : İL : YİNE : BOYLAR : YİNE : YOK : EDECEK : İDİ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _UDU BeN ÖZüM KaZGaNMaSaR_)
    > ...[[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON...
  - `Tekin 2003, s. 124` (eslesen: _ÖZüM KaZGaNMaSaR İL_)
    > ...ndim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben kendim kazanmamış olsaydım..." (T 5[?4]-55) *inim kül tigin özi ança kärgäk boltı* "Kardeşim Prens Kül kendisi öylece vefat etti" (KT D 30) *eltäbär özi kälti* "Vali kendisi geldi" (KÇ D 9) **274.** Bir pekiştirme zamiri...
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖZüM_)
    > ...lece), (B 6) yas tutuyorum. Babam (hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş er...
  - `Tekin 2003, s. 29` (eslesen: _KaZGaNMaSaR_)
    > ...hiç gösterilmediği örnekler de vardır: - /BLŋ/ *b(u)l(u)ŋ* “köşe, bucak” (KT D 2) - /bgÜ/ *b(ö)gü* “Bögü” (T 50), vb. ## Söziçi Ünlüleri **19.** İlk hece dışındaki /a/ ve /ä/ ünlüleri genellikle gösterilmez: - /AçSr/ *āçsar* “acıkınca” (BK K 6) - /KzGNmSR/ *kazganmasar* “kazanmasa (idim)” (T 54 vb.) - /klrm/ *äkälär(i)m* “ablalarım” (KT K 9) - /sÜlmsr/ *sülämäsär* “sefer etmez (isek)” (T 20), vb. [s. 30] # s. 30 — TALAT TEKİN **20.** Ünlü ile biten sözcükler ek aldığında temel sözcükteki sözsonu /a/ ve /ä/ ünlülerinin gös...
  - `Olmez 2017, s. 54` (eslesen: _KaZGaNMaSaR_)
    > ...imize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birlikte bu şekilde başa geçip kazanmasaydım (...)" (BK D 33) ### Zamirler ve çekimleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :---: | :---:...
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...


## TY2-D-5#2 - Tonyukuk Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `KaZGaNTUKIN : UDU : ÖZüM : KaZGaNTUKıM : ÜçüN`
- **kelime karsiliklari:** [O] KAZANDIĞI [İÇİN] : UDU : ÖZÜM : KAZANDIĞIM : İÇİN
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _UDU ÖZüM_)
    > ...yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON YAZITLARI 93 İnel Kağan'a, öylece Mançud'lar, Saka'lar), Taci...
  - `Tekin 2003, s. 156` (eslesen: _UDU ÖZüM_)
    > ...böyle (kolay) erişilir yerde ebedi taş hakkettirdim" (KT G 13) **371.** *udu* "ve" (< *ud-* "takip etmek, izlemek"): *ilteriş kagan kazganmasar udu bän özüm kazganmasar* "İlteriş Hakan kazanmasa (idi) ve ben kendim kazanmasa (idim)" (54-55) *kazgantokin üçün udu özüm kazgantokum üçün...* "(İlteriş Hakan) kazandığı için ve (ben) kendim kazandığım için..." (T 55) *taŋ taŋlardı udu yir yarudı udu kün tugdı* "Tan ağardı ve yer aydınlandı ve gün doğdu" (IB 26, etc. [s. 157] # s. 157 — ORHON TÜRKÇESİ GRAMERİ **372.** *ulayu*...


## TY2-D-6#1 - Tonyukuk Yazıtı, Doğu 6. satir  (4 kelime)

- **transkripsiyon:** `İL : YiME : İL : BOLDI`
- **kelime karsiliklari:** İL : YİNE : İL : OLDU
- **kanit:**
  - `Radloff, s. 433` (eslesen: _İL BOLDI_)
    > ...aşlıklar, sümbül saçlıklar! Şirin sözlükler, çıkır gözlükler, eyeyy ! [s. 433] Esir kılganlar, bulutka mingenler, havaga çıkkanlar! Deryanı keçkenler ... Özüng bergen keselni 50) Özüng algın, hudayim, özüng bergen keselge özüng deva berhudayim! Çiltenlering çil boldı, başkan izing gül boldı Pirler hakkı tileymen, analar hakkı tileymen Allaheyeyey! ... Türkiye Türkçesi 1) Sultan Satuk Buğra Han, bu oyunu (ayini) size yaptık, oy naya oynaya geliniz, yolda gecikmeyiniz! yolda gecikirseniz yü zümü kara kılmayınız (beni utandı...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 128` (eslesen: _İL BOLDI_)
    > ...ıklar, sümbül saçlıklar! Şirin sözlükler, çıkır gözlükler, eyeyy ! [[s. 128]] Esir kılganlar, bulutka mingenler, havaga çıkkanlar! Deryanı keçkenler. . . özüng bergen keselni 50) özüng algın, hudayim, özüng bergen keselge özüng deva ber hudayim! Çiltenlering çil boldı, başkan izing gül boldı Pirler hakkı tileymen, analar hakkı tileymen Allah-eyeyey!. . . Tercümesi: 1) Sultan Satuk Buğra Han, bu oyunu (âyini) size yaptık, oynaya oynaya geliniz, yolda gecikmeyiniz! yolda gecikil - şeniz yüzümü kara kılmayınız (beni utandırma...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...
  - `Roux, Eski Din, s. 247` (eslesen: _BOLDI_)
    > ...am gerek ortaçağ sözlüklerinde gerekse Codex Comanicus'ta aynı şekilde yer alnuştır (B. 7, s. 263; B.11, s. 205). [[s. 247]] Halen ölüme uçan ruhun shungkur, sungur şeklinde algılannuş olup olmadığını saptama olanağınuz yok, ancak "öldü" demek yerine shungkur boldi, "sungur haline geldi" deyiminin İslam dinini kabul ettikten sonra bile Batı Türklerinde kullanıldığı görülmektedir (0.8, s. 15). Babür bu deyimi kendi döneminde kullannuştır. Bu deyim sadece büyükler için mi kullanılmaktadır? [[s. 247]] Bu konuda herhangi bi...
  - `Ata 2011, s. 131` (eslesen: _BOLDI_)
    > ...LER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. [s. 131] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gözüm görmez gibi” KT K10...
  - `Ogel C1, s. 334` (eslesen: _BOLDI_)
    > ...olmuştur *. Aynı burç adları Kutadgu-Bilig'de de vardır. Fakat KutadguBilig'deki burç adları daha ziyade eski telâffuzlara ve Uygur üslübuna göre yazılmıştır. [[s. 334]] Mesela şu mısrada, bu burçların durumu çok güzel bir şekilde anlatılmaktadır : Basa Ülgü boldı, Çadhan, Ya eşi?, “Terazi, Çıyan, yani Akreb burçları ile Yay burcu, yine oldular eş ve arkadaş”, * Aynı esr., HI, s. 1. 5 Aynı esr., s. 4. * Aynı esr., 1l1, 4-6. ? Kutadgu-Bilig, Radlof neşr., 16, 10; R. Arat neşr., s. 30, 140. [s. 335] 324 TÜRK MİTOLOJ...


## TY2-D-6#2 - Tonyukuk Yazıtı, Doğu 6. satir  (4 kelime)

- **transkripsiyon:** `BODuN : YiME : BODuN : BOLDI`
- **kelime karsiliklari:** BOY : YİNE : BOY : OLDU
- **kanit:**
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...
  - `Tekin 2003, s. 73` (eslesen: _BODuN_)
    > ...ga* "ağıma" (Hem.-Çır. 9) - *artımga* "ardıma" (Hem.-Çır. 10), vb.; fakat *yaşımka* "yaşımda" (BK D 15), *ataçımka* "babacığıma" (Uybat III 14), *oglumka* "oğullarıma" (Barık III 4), vb. 6. /nk/ > /ng/: - *kagangı* "hakanınki" (Tar. B 5) < **kagankı*; fakat *bodunkı* "boylarınki" (Tar. B 5), *biryäki* "güneydeki", *kuryakı* "batıdaki", *yıryakı* "kuzeydeki", *öŋräki* "doğudaki" (T 17), *bärüki* "berideki" (T 46), vb. 7. /lk/ > /lg/: - *çölgi* "bozkırdaki" (T 23) < **çölki*; fakat *tabgaçgı* (KT D 7) ve *[tab]gaçgı* "Ç...
  - `Ata 2011, s. 47` (eslesen: _BODuN_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış....
  - `Olmez 2017, s. 20` (eslesen: _BODuN_)
    > ...anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...
  - `Ata 2011, s. 40` (eslesen: _BODuN_)
    > ...üzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratıl...


## TY2-D-6#3 - Tonyukuk Yazıtı, Doğu 6. satir  (3 kelime)

- **transkripsiyon:** `ÖZüM : KaRI : BOLDuM`
- **kelime karsiliklari:** ÖZÜM : İHTİYAR : OLDUM
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _ÖZüM KaRI_)
    > ...Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON YAZITLARI 93 İnel Kağan'a, öylece Mançud'lar, Saka'lar), Tacik'ler, Tohar'lar ... (G 2) ve onların berisindeki Aşok başlı Soğdak halkı hep...
  - `Tekin 2003, s. 124` (eslesen: _ÖZüM KaRI_)
    > ...i zamiri çoğu kez kaldırılır. Bu durumda pekiştirme zamirleri kişi zamirleri görevini üstlenirler. 1. *özüm* "kendim, ben": *eçim kagan olortokda özüm tarduş bodun üzä şad ärtim* "Amcam Hakan tahta oturduğunda ben Tarduş halkının üzerine Şad idim" (KT D 17) *özüm karı boltum ulug boltum* "Ben yaşlandım, ihtiyar oldum" (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda ka...
  - `Ata 2011, s. 76` (eslesen: _ÖZüM KaRI_)
    > ...parlak ve etkileyici bir üslup hâkim iken Tonyukuk yazıtında daha ciddî, seçkin sözler ve ifadeler yer almaktadır. Yaşlı Tonyukuk özüm karı bolt(u)m (T 56) ifadesi ile yaşlılığından bahetmektedir. Köl Tigin ve Bilge Kağan yazıtlarında Tonyukuk’tan söz edilmediğine göre,...
  - `Ata 2011, s. 69` (eslesen: _ÖZüM KaRI_)
    > ...a mümkündür. Yazıttaki üslup farklılığının bir nedeni de budur. [[s. 69]] Köl Tigin ve Bilge Kağan yazıtlarında canlı, heyecanlı, parlak ve etkileyici bir üslup hâkim iken Tonyukuk yazıtında daha ciddî, seçkin sözler ve ifadeler yer almaktadır. Yaşlı Tonyukuk özüm karı bolt(u)m (T 56) ifadesi ile yaşlılığından bahetmektedir. Köl Tigin ve Bilge Kağan yazıtlarında Tonyukuk’tan söz edilmediğine göre, herhâlde vezir, kendi yazıtında adı geçenlere ciddî bir cevap vermektedir. Tonyukuk yazıtının kimin tarafından yazıldığı bilinme...
  - `Tekin 2003, s. 75` (eslesen: _BOLDuM_)
    > ...- *ärkli* "olan; iken" (KT K 1, T 13, MÇ D 1, 5, vb.) < **ärgli* < **ärigli* **133.** /ld/ > /lt/: - *iltä* "ülkede" (KT G 3) ~ *eldä* (Tele 3) < **ēldä* - *yolta* "yolda" (KT K 9; T 16, IB 35) < **yōlda* - *boltokda* "olduğunda" (O ön 1, 6) < **bōldokda* ~ *boldum* "oldum" (Barık II 1) - *adrıltım* "ayrıldım" (Uyuk-Turan 1, Kızıl Çıra I 2, vb.) ~ *adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT...
  - `Roux, Eski Din, s. 246` (eslesen: _BOLDuM_)
    > ...olarak, ancak yalnızca Tuva bölgesinde ruh için az fi liyle ifadesini bulan "yolunu kaybetmek", "kaybolmak" deyimi kullanılmaktadır. Bunun anlamını belirlemek daha zordur. [[s. 246]] Özellikle ölenin yaşı şöyle belirtildiğinde "Altmış yedi yaşımda or tadan kayboldum" (Begire VI), ölümün söz konusu olduğu su götürmez. "Altmış birinci yılımda mavi gökte güneş, ay bulunurken ortadan kayboldum" (Keçilik Kobu). "Mavi gökte güneş ve ay bulunurken yolumu kaybettim" (Eleges yazıtının okunuş yönüne göre satır 3/10). [[s. 246]] Bü...


## TY2-D-6#4 - Tonyukuk Yazıtı, Doğu 6. satir  (6 kelime)

- **transkripsiyon:** `ULuG : BOLDuM : NeŊ : YiRDeKİ : KaGaNLıG : BODuNKA`
- **kelime karsiliklari:** ULU : OLDUM : NE : YERDEKİ : KAĞANLI : BOYUNA
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _KaGaNLıG BODuNKA_)
    > ...tığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON YAZITLARI 93 İnel Kağan'a, öylece Mançud'lar, Saka'lar), Tacik'ler, Tohar'lar ... (G 2) ve onların berisindeki Aşok başlı Soğdak halkı hep geldiler, boyun eğdiler ve (kağanı övdüler?). Türk halkı(nı...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNLıG BODuNKA_)
    > ...cek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39)...
  - `Tekin 1998, s. 5` (eslesen: _KaGaNLıG_)
    > ...lı yapıtım olmuştur (1965). Bu tez üç yıl sonra Indiana Üniversitesi yayınları arasında yayımlandı: A Grammar of Orkhon Turkic, Indiana University Publications, Uralic and Altaic series: 69, The Hague and Bloomington (1968). [[s. 5]] Bu yapıt İkinci Doğu Türk Kağanlığı döneminden kalma beş yazıtın, Kül Tigin, Bilge Kağan, Tunyukuk, Küli Çor (İhe-Hüşötü) ve Ongin (Işbara Tarkan) yazıtlarının metinlerini, İngilizce çevirilerini ve sözlüğünü de içerir. Yazıtlar ve Orhon Türkçesi üzerine çalışmalarım 1972'de Türkiye'ye döndük...
  - `Ergin 1970, s. 5` (eslesen: _KaGaNLıG_)
    > ...ndaki devresinde hüküm sürmüşlerdir. 6. asrın ilk yarısında Türk devletinin başında Avarlar bulunuyordu. 552 tarihinde Bumin Kağan, Avar idaresine son vererek Türk O R H U N Â B İ D E L E R İ [s. 5] devletinin Göktürk hanedanı devrini açtı. O devirde büyük kağanlığın merkezi devletin doğu kısmmda idi ve batı kısmı da doğuya bağlı tabi bir kağanlıkla idare ediliyordu. Bumin Kağan'ın kardeşi İstemi Kağan da 576'ya kadar bu batı bölümünün kağanı idi. Bumin Kağan, Göktürk hakimiyetini kurduğu sene içinde öldü ve sırasıyla ü...
  - `Tekin 2003, s. 15` (eslesen: _KaGaNLıG_)
    > ...ım ve 1965 Mayısında Los Angeles’taki California Üniversitesi’ne sunduğum *A Grammar of Orkhon Turkic* adlı doktora tezimin Türkçesidir. Yazımından üç yıl sonra, 1968’de, Indiana Üniversitesi’nce yayımlanmış olan bu gramer başlıca Moğolistan’daki 2. Doğu Türk Kağanlığı (682-744) döneminden kalma beş büyük yazıta dayanıyordu. Bu beş yazıt şunlardı: Kül Tigin (732), Bilge Kağan (735), Tunyukuk (720-725 ?), Ongin (732-735 ?) ve Küli Çor (719-723 ?) yazıtları. Başka bir deyişle, Uygur kağanlığı döneminden (744-840) kalma Moyun...
  - `Ata 2011, s. 4` (eslesen: _KaGaNLıG_)
    > ...Kendimizi Sınayalım Yanıt Anahtarı …………………….……..……… 36 Sıra Sizde Yanıt Anahtarı ………….……………..……….……..……… 36 Yararlanılan Kaynaklar ………….………………..……….……..……… 36 Köktürkler ……….……….…………………….………………………. 38 I. TÜRK KAĞANLIĞI (552-630) ………………………..…………….. 39 Yazıtlarda I. Köktürk Kağanlığı’nın Kurulması ……….….………..…… 40 I. Köktürk Kağanlığı’nın İran ve Bizans’la Olan İlişkileri ve Bu İlişkide Sogdların Rolü ……………………….…….…………… 40...


## TY2-D-7#1 - Tonyukuk Yazıtı, Doğu 7. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : BİNTeGİ : BaR : eRSeR : NE : BUŊI : BaR : eRTeÇİ : eRMiŞ`
- **kelime karsiliklari:** --- : BENDEĞİ : VAR : İSE : NE : BUNGU : VAR : EDECEK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _BaR eRSeR NE BUŊI_)
    > ...kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON YAZITLARI 93 İnel Kağan'a, öylece Mançud'lar, Saka'lar), Tacik'ler, Tohar'lar ... (G 2) ve onların berisindeki Aşok başlı Soğdak halkı hep geldiler, boyun eğdiler ve (kağanı övdüler?). Türk halkı(nın) Demir Kapı'ya, “Tanrı Oğlu” (G...
  - `Tekin 1998, s. 44` (eslesen: _BaR eRSeR_)
    > ...kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.”...
  - `Olmez 2017, s. 56` (eslesen: _BaR eRSeR_)
    > ...lecek zamanın az sayıda örnekte, özellikle olumsuz fiil çekiminde *-çI* ile kurulduğu örnekler de vardır: *ötüken yış olorsar beŋgü ėl tuta olortaçı sen* "Ötüken topraklarında yaşarsan kurduğun ülke sonsuza değin ayakta kalacaktır." (KT G 8); *ol ėki kişi bar erser sini tavgaçıg ölörteçi tėr men* "O iki kişi (var olduğu sürece) olduğu sürece seni, (yani) Çinlileri öldürecektir, derim." (T 10); *ol yėrgerü barsar türük bodun ölteçi sen* "Oralara gidersen, Türk halkı mutlaka öleceksin." (KT G 8); *bo yolun yorısar yar...
  - `Tekin 1998, s. 4` (eslesen: _eRSeR NE_)
    > ...k BİĞç 15 TEZEK O ŞU UN S ce sente n Ünen Kerem e eN ERER EE İlan Ör 17 İzi > DEPİMLEN erir ERMAK ÜRÜR RR 19 İd. SALASÖZLEPÜ. veneer ARMEN NET KENE EREK AREREĞ 20 9.0. Edebi Sanatlar (BEenzetmeler)i ccs RENK 21 6. Eski Türk Runik Yaazısı................ ne cerser neee 22 TT. Yazım Kurallatı. see RA ÜRER ARAN RDERRERĞÜ 25 7.1. Ünlülerle ilgili yazım kuralları............. 0s 25 7.2. [[s. 4]] Ünsüzlerle ilgili yazım kuralları............ 0 26 7.3.. Noktalama işareti ....oseerkarorsa erener KE KEKeN 28 8. Orhon Alfabesini...
  - `Tekin 2003, s. 126` (eslesen: _BUŊI BaR_)
    > ...ovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39) **277.** Soru edatından sonra...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 238` (eslesen: _NE BUŊI_)
    > ...gün yime içme oldı. Andan Şirögüven ? uçından Gökçe Değize degin il çarpdı. Galaba toyum oldı. [[s. 238]] Yol Alınca Kal'asına uğramış-idi. Kara Tekür orada bir koru * yapdurmış-idi. Uçardan kaz tavuk, yorırdan geyik tavşan * bu havluya toldurup Oğuz yigitlerine bunı düm itmiş-idi. Uşun$ Koca oğlmuü yol bu koruya uğradı. Korunun kapusın uvatdılar.? Şığın geyik kaz tavuk kırdılar, yidiler içdiler. Atlarınuğ $ eyerlerin aldılar, geyimlerin çıkardılar. Meger Kara Tel cüsusı? — varsidi, bunları gördi. Gelüp aydur: Mere Oğuzda...


## TY2-D-8#1 - Tonyukuk Yazıtı, Doğu 8. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : TÜRK : BİLGE : KaGaN : İLiŊE : BİTİTDiM`
- **kelime karsiliklari:** --- : TÜRK : BİLGE : KAĞAN : İLİNDE : BİTİTDİM
- **kanit:**
  - `Tekin 1998, s. 49` (eslesen: _BİLGE KaGaN İLiŊE BİTİTDiM_)
    > ...48]] Herhangi bir ülkedeki kağanlı (yani “bağımsız”) bir halkın (D 7) böylesi bir (devlet adamı) var ise, (o halkın) ne (gibi) bir sıkıntısı olacak imiş? * “Tanrı oğlu” yani Tinsi oğlı metnin aslında iki kez yazılmış. [s. 49] 94 TUNYUKUK YAZITI (D 8) Türük Bilge Kağan ilinge bititdim. Ben Bilge Tunyukuk. (K 1) İlteriş Kağan kazganmasar, yok erti erser, ben özüm Bilge Turnyukuk kazganmasar, ben yok ertim erser, (K 2) Kapgan Kağan Türük Sir bodun yerinte bod yeme, bodun yeme, kişi yeme idi yok erteçi erti. (K 3) İlteriş Kağan Bilge Turiyuk...
  - `Tekin 1998, s. 48` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...kıllı olduğu için, (G 5) cesur olduğu için, Çinlilerle on yedi (kez) savaştı, Kıtay'larla yedi (kez) savaştı, Oğuz'larla (da) beş (kez) savaştı. Bu sırada sözcüsü (G 6) de ben idim, düşmanla savaşanı da ben idim. [[s. 48]] İlteriş Kağan'a, Türk Bögü Kağan'a, Türk Bilge Kağan'a (D 1) Kapgan Kağan yirmi (yedi yaşında?) ........... idi. (Onu ben) Kapgan Kağan (olarak) tahta oturttum. Geceleri uyumadan, (D 2) gündüzleri oturmadan, kızıl kanımı akıtarak, kara terimi döktürerek hizmet ettim. Uzak mesafelere keşif devriyeleri gön- derdi...
  - `Ergin 1970, s. 12` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...kamlar, âbidelerdeki asıl metnin satır numaralarıdır. Ortaya gelen satır başları dik çizgilerle gösterilmiştir. Noktalı yerler, metindeki eksik yerleri göstermektedir. M U H A R R E M E R G İ N [s. 12] KÜL TİGİN ÂBİDESİ Güney cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim, oğlum, bütün soyum, milletim, güneydeki şadpıt beyleri, kuzeydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle: Doğud...
  - `Ata 2011, s. 150` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...PSİYONLU METİN TÜRKİYE TÜRKÇESİNE G1 AKTARMA Tanrı gibi gökte olmuş (yaratılmış) t(e)ŋri t(e)g t(e)ŋride bolm(ı)ş türük̮ Türk Bilge Kağan, bu zamanda bilge k(a)g(a)n bu ödke ol(u)rt(u)m sab(ı)m(ı)n tük(e)ti (e)şidg(i)l ul(a)yu oturdum (tahta çıktım). Sözlerimi in(i)ygün(ü)m ogl(a)n(ı)m bir(i)ki tamamıyla işit. Ve erkek kardeşim, ug(u)ş(u)m bod(u)n(u)m bir(i)ye oğu...
  - `Olmez 2017, s. 78` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...*G 1. teȳri teg : teȳride : bolmuš : tür²ük : bilge² kağan : bo üdke : olortum²* *savımın : tüketi : ešidgil : ulayı : iniygünüüm² oglanım² birki² ugušum²* *bodunum² bėriye² şadapıt begler : yurya² tarkat² buyruk : begler² otuz //////* "İlahî göğün yarattığı Türk Bilge Kağan, bu devirde tahta çıktım. Sözlerimin tamamını dinleyin, özellikle küçük erkek kardeşlerim, çocuklarım, birleşik soyum, halkım, güneyde Şadlar, kuzeyde tarkanlar, beyler, komutanlar, Otuz [Tatar halkı ... ... ...]" **teȳri teg** "İlahi" - teg: "gibi" anlamı k...
  - `Ata 2011, s. 143` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...b(ı)m(i)n (e)dgüti (e)şid k(a)t(ı)gdı tıŋla ilg(e)rü kün tugs(ı)k(k)a bir(i)g(e)rü kün ortusıŋ(a)ru k͡uurıg(a)ru kün b(a)tsı͡kıŋa yır(ı)g(a)ru tün ortusıŋ(a)ru (a)n͡ta içr(e)ki bod(u)n k͡oo[p] m[aŋ]a kör[ür (a)n͡ç]a bod(u)n Tanrı gibi gökte olmuş (yaratılmış) Türk Bilge Kağan, bu zamanda oturdum (tahta çıktım). Sözlerimi tamamıyla işit. [[s. 143]] Ve erkek kardeşim, oğullarım, birleşik boyum (soyumsopum), halkım güneyde Şadapıt beyler, kuzeyde Tarkanlar, kumandan beyler, Otuz (Tatar ……………… Dokuz Oğuz beyleri ve halkı, bu sözlerim...


## TY2-D-8#2 - Tonyukuk Yazıtı, Doğu 8. satir  (3 kelime)

- **transkripsiyon:** `BeN : BİLGE : TONYUKUK`
- **kelime karsiliklari:** BEN : BİLGE : TONYUKUK
- **kanit:**
  - `Ergin 1970, s. 40` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...eçtik. Geceyi gündüze kattık. [[s. 40]] Bolçuya şafak sökerken ulaştık. (İkinci Taş) Batı cephesi Haberci getirdiler. Sözü şöyle: Yarış ovasında yüz bin asker toplandı der. O sözü işitip beyler bütün | dönelim, temiz edepli olmak iyidir dedi. Ben şöyle derim, ben Bilge Tonyukuk: Altun ormanını aşarak [s. 41] geldik. İrtiş nehrini | geçerek geldik. Geleni cesur dedi, duymadı. Tanrı, Umay ilâhe, mukaddes yer, su, üzerine çökü verdi her halde. Niye kaçıyoruz? | Çok diye niye korkuyoruz? Az diye ne kendimizi hor görelim? Hücum edelim d...
  - `Tanyeri, s. 19` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...çup gitmiş, vefat etmiş), “yokadu barır ermiş” (yok olup gidermiş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fiili kullanılır: “Tabgaç kagan yagımız erti.” (Çin milleti düşmanımız idi.) Sayfa: 18 [s. 20] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com...
  - `Ogel C2, s. 385` (eslesen: _BeN BİLGE TONYUKUK_)
    > ...rürdük (keçe yorıdımız). T'ü r gi ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (...


## TY2-K-1#1 - Tonyukuk Yazıtı, Kuzey 1. satir  (5 kelime)

- **transkripsiyon:** `İLTeRİŞ : KaGaN : KaZGaNMaSaR : YOK : eRTİ`
- **kelime karsiliklari:** İLTERİŞ : KAĞAN : KAZANMASA : YOK : İDİ
- **kanit:**
  - `Tekin 1998, s. 49` (eslesen: _İLTeRİŞ KaGaN KaZGaNMaSaR YOK eRTİ_)
    > ...halkın (D 7) böylesi bir (devlet adamı) var ise, (o halkın) ne (gibi) bir sıkıntısı olacak imiş? * “Tanrı oğlu” yani Tinsi oğlı metnin aslında iki kez yazılmış. [s. 49] 94 TUNYUKUK YAZITI (D 8) Türük Bilge Kağan ilinge bititdim. Ben Bilge Tunyukuk. (K 1) İlteriş Kağan kazganmasar, yok erti erser, ben özüm Bilge Turnyukuk kazganmasar, ben yok ertim erser, (K 2) Kapgan Kağan Türük Sir bodun yerinte bod yeme, bodun yeme, kişi yeme idi yok erteçi erti. (K 3) İlteriş Kağan Bilge Turiyukuk kazgantuk üçün Kapgan Kağan Türük Sir bodun yorıdukı bu. (K...
  - `Tekin 1998, s. 48` (eslesen: _İLTeRİŞ KaGaN KaZGaNMaSaR_)
    > ...m yüğürtli) işiğ küçüğ bertim ök. [[s. 48]] Uzun yelmeğ yeme ıttım ok, (D 3) arkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, n...
  - `Tekin 2003, s. 124` (eslesen: _İLTeRİŞ KaGaN KaZGaNMaSaR_)
    > ...m kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben kendim kazanmamış olsaydım..." (T 5[?4]-55) *inim kül tigin özi ança kärgäk boltı* "Kardeşim Prens Kül kendisi öylece vefat etti" (KT D 30) *eltäbär özi kälti* "Vali kendisi geldi" (KÇ D 9)...


## TY2-K-1#2 - Tonyukuk Yazıtı, Kuzey 1. satir  (10 kelime)

- **transkripsiyon:** `eRSeR : BeN : ÖZüM : BİLGE : TONYUKUK : KaZGaNMaSaR : BeN : YOK : eRTiM : eRSeR`
- **kelime karsiliklari:** İSE : BEN : ÖZÜM : BİLGE : TONYUKUK : KAZANMASAM : BEN : YOK : İDİM : İSE
- **kanit:**
  - `Tekin 1998, s. 49` (eslesen: _eRSeR BeN ÖZüM BİLGE_)
    > ...amı) var ise, (o halkın) ne (gibi) bir sıkıntısı olacak imiş? * “Tanrı oğlu” yani Tinsi oğlı metnin aslında iki kez yazılmış. [s. 49] 94 TUNYUKUK YAZITI (D 8) Türük Bilge Kağan ilinge bititdim. Ben Bilge Tunyukuk. (K 1) İlteriş Kağan kazganmasar, yok erti erser, ben özüm Bilge Turnyukuk kazganmasar, ben yok ertim erser, (K 2) Kapgan Kağan Türük Sir bodun yerinte bod yeme, bodun yeme, kişi yeme idi yok erteçi erti. (K 3) İlteriş Kağan Bilge Turiyukuk kazgantuk üçün Kapgan Kağan Türük Sir bodun yorıdukı bu. (K 4) Türük Bilge Kağan,...
  - `Tekin 1998, s. 44` (eslesen: _BeN ÖZüM BİLGE_)
    > ...uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi...
  - `Tekin 1998, s. 20` (eslesen: _eRSeR BeN_)
    > ...odunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendile...
  - `Olmez 2017, s. 96` (eslesen: _eRSeR BeN_)
    > ...aşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa b...
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖZüM_)
    > ...lece), (B 6) yas tutuyorum. Babam (hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş er...
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK_)
    > ...ı cephesi Bilge Kağan kitâbesini Yollug Tigin, yazdım. Bunca türbeyi, resimi, sanatı.........kağanın yeğeni Yollug Tigin ben bir ay dört gün oturup yazdım, resimledim ........... M U H A R R E M E R G İ N [s. 36] TONYUKUK ÂBİDESİ (Birinci Taş) Doğu cephesi Bilge Tonyukuk ben kendim Çin ilinde kılındım. Türk milleti Çine tâbi idi. | Türk milleti hanını bulmayıp Çinden ayrıldı, hanlandı. Hanını bırakıp Çine tekrar teslim oldu. Tanrı şöyle demiştir: Han verdim, | hanını bırakıp teslim oldun. Teslim olduğun için Tanrı öldürmüştür...


## TY2-K-2#1 - Tonyukuk Yazıtı, Kuzey 2. satir  (13 kelime)

- **transkripsiyon:** `KaPaGaN : KaGaN : TÜRK : SİR : BODuN : YiRİNTE : BOD : YiME : BODuN : YiME : KİŞİ : YiME : İDİ`
- **kelime karsiliklari:** KAPAĞAN : KAĞANIN : TÜRK : SİR : BOYLARININ : YERİNDE : BOY : YİNE : BOYLAR : YİNE : KİŞİ : YİNE : HEP
- **kanit:**
  - `Tekin 2003, s. 158` (eslesen: _KaGaN TÜRK SİR BODuN_)
    > ...halk oldu" (T 55-56) *ol sabın eşidip tün yämä udısıkım kälmäz ärti < kün yämä> olorsıkım kälmäz ärti* "O sözleri işittikten (sonra) geceleri uyuyasım gelmiyordu, gündüzleri oturasım gelmiyordu" (T 22), vb. 3. *yämä* bağlacı üç kez de yinelenebilir: *kapgan kagan türk sir bodun yerintä bod yämä bodun yämä kişi yämä yok ärtäçi ärti* "(İlteriş Hakan kazanmamış olsaydı ya da hiç olmasaydı, ben kendim Bilge Tunyukuk kazanmamış olsaydım ya da hiç olmasaydım), Kapgan Hakanın Türk Sir halkı ülkesinde boy da halk da bir kişi de hiç olmayaca...
  - `Tekin 1998, s. 8` (eslesen: _KaGaN TÜRK SİR_)
    > ...k anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğuz halkını besleyerek tahtta oturuyor” dediğine göre bu yazıtın Bilge Kağan'ın hükümdarlığı döneminde, yani 716-734 yılları arasında, büyük bir olasılıkla da 720-725 yılları arasında yazılıp dikildiği sanılmaktadır. 3. [[s. 8]] Yazıtların Yazarı v...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK SİR BODuN_)
    > ...çka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntı...
  - `Tekin 2003, s. 113` (eslesen: _TÜRK SİR BODuN_)
    > ...a yol+ta* "yurtta ve yollarda" (KT K 9) *bodun+ta üzä* "halkın üzerine" (KT D 26) *tabgaç kagan+ta* "Çin İmparatorundan" (KT G 11) *yarıkın+ta yalmasın+ta* "zırhından ve kaftanından" (KT D 33) *toŋa tigin yogın+ta* "Prens Tonga'nın cenaze töreninde" (KT K 7) *türk sir bodun yerin+tä* "Türk Sir halkının ülkesinde" (T 3, 60) *yırdın+ta yan* "kuzey taraftan" (T 11) *erig yer+tä* "kolayca erişilen yerde" (KT G 13, 13; BK K 15), fakat genellikle *yer+dä, yir+dä*. 3. {+tAn}. Birkaç yer zarfında görülür: *taşdın+tan* "dışarıdan" (MÇ G...
  - `Ata 2011, s. 113` (eslesen: _TÜRK SİR BODuN_)
    > ...te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gö...
  - `Ata 2011, s. 106` (eslesen: _TÜRK SİR BODuN_)
    > ...köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. [[s. 106]] Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk...
