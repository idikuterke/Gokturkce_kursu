# Ceviri istek paketi 12 - Orhun cumlecikleri

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


## KT-K-3#4 - Kül Tigin Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `BODuN : BİRLE : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** BOYLARI : İLE : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BODuN BİRLE_)
    > ...e teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşleri...
  - `Olmez 2017, s. 84` (eslesen: _BODuN BİRLE_)
    > ...[?] [?] [?] ***G 4.*** *keçe : temir kapigka[?] tegi : süledim : yırıgaru : yır bayurk[?] yėriye : tegi : süledim : bonça yėrke : tegi : yoritdım : ötüken : yışda : yèg : idi yok : ermiş : ėl tutsık : yėr : ötüken : yış ermiş : bo yėrde : olorup : tavgaç[?] bodun : birle :* "geçip Temir Kapığ'a kadar sefer ettim. Kuzeyde Yır Bayırkların topraklarına kadar sefer ettim. Bu kadar yere sefer ettirdim. Ötüken topraklarından daha iyisi kesinlikle yokmuş. Ülke kurulacak topraklar Ötüken topraklarıymış. Burada hüküm sürüp Çin halkıy...
  - `Ata 2011, s. 115` (eslesen: _BİRLE SÜŊüŞDüMüZ_)
    > ...i kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci...
  - `Ata 2011, s. 108` (eslesen: _BİRLE SÜŊüŞDüMüZ_)
    > ...ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptı...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...


## KT-K-3#5 - Kül Tigin Yazıtı, Kuzey 3. satir  (5 kelime)

- **transkripsiyon:** `KÖLTİGiN : aLP : ŞaLÇI : aKIN : BİNiP`
- **kelime karsiliklari:** KÜLTİĞİN : ALP : ŞALÇININ : AKA : BİNİP
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aLP ŞaLÇI aKIN BİNiP_)
    > ...ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili k...
  - `Tekin 1998, s. 26` (eslesen: _aLP ŞaLÇI_)
    > ...ledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama)...
  - `Ergin 1970, s. 19` (eslesen: _aLP ŞaLÇI_)
    > ...sonra Türgiş avam halkı düşman olmuş. Kengerise doğru gitti. Bizim askerin atı zayıf, azığı yok idi. Kötü kimse er.......... | kahraman er bize hücum etmişti. Öyle bir zamanda pişman olup Kül Tigini az erle eriştirip gönderdik. Büyük savaş savaşmış. [[s. 19]] Alp Şalçı ak atına binip hücum etmiş. Türgiş avam halkını orda öldürmüş, yenmiş. Tekrar yürüyüp....... Kuzey cephesi ......... ile, Koşu vali ile savaşmış. Askerini hep [s. 20] öldürmüş. Evini, malını eksiksiz hep getirdi. Kül Tigin yirmi yedi yaşına gelince Karluk ka...
  - `Tekin 2003, s. 252` (eslesen: _aLP ŞaLÇI_)
    > ...süŋülüg** mızraklı asker - **süŋüş** savaş - **süŋüş-** savaşmak [s. 252] # s. 252 — TALAT TEKİN (basılı sayfa numarası 253) *(Kitap s. 253)* - **sür-** sürmek - **Şad** yüksek bir unvan (bk. **Çad**) - **Şadapıt** yüksek bir unvan - **Şalçı** kişi adı (**Alp Şalçı**) - **Şantuŋ** yer adı (Şantung ovası) - **Şıp** yer adı (MÇ D 3, 4) - **tabar** davar (MÇ G 5) - **Tabar** yer adı (Tabaristan) - **Tabgaç** Çin, Çinli - **tabılku** bitki adı (*Spiraea*, *spiraea altaica*) (IB 32, 32) - **tabışgan** tavşan (T 8, IB 44) -...
  - `Tekin 2003, s. 225` (eslesen: _aKIN BİNiP_)
    > ...bı..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin t...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...


## KT-K-4#1 - Kül Tigin Yazıtı, Kuzey 4. satir  (6 kelime)

- **transkripsiyon:** `OPLaYU : TeGDİ : OL : aT : aNDA : TÜŞDİ`
- **kelime karsiliklari:** OPLAYIP : [YAĞIYA] DEĞDİ : O : AT : [O] ANDA : DÜŞTÜ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _TeGDİ OL aT_)
    > ...men sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olma...
  - `Tekin 2003, s. 101` (eslesen: _OL aT_)
    > ...i (iyelik) ve ad durumu için çekimlenir. Adlar, ayrıca, sayı (çokluk) ve bağlama (ekleme) için de çekimlenebilir. #### Çokluk **240.** Orhon Türkçesinde adlar genellikle sayı için çekimlenmez. Yalın durumda bir ad hem tekil hem de çoğul görevinde olabilir: *ol at* "o at" (KT D 33), *at yätä* "atları yederek" (T 25), *külüg är* "ünlü adam" (O Ek 6), *öŋräki är* "öncü askerler" (T 25), vb. gibi. Bununla birlikte Orhon Türkçesinde belirli adlara eklenip topluluk adları türeten ekler ile çokluk ekleri de yok değildir. Bu...
  - `Ata 2011, s. 110` (eslesen: _OL aT_)
    > ...Çokluk (Topluluk) Ekleri Orhun Türkçesinde yalın durumda bir isim hem tekil hem çoğul anlamda kullanılır: külüg er O Ek 6 “ünlü adam” ~ öŋreki er T 25 “öncü askerler” ol at anta ölti KT D33 “o at orada öldü” ~ at yete T 25 “atları yederek” Bununla birlikte Orhun Türkçesinde çokluk (topluluk) ekleri de vardır: +lAr, +gUn, +An, +(X)t a. +lAr: Orhun Türkçesinde...
  - `Ata 2011, s. 103` (eslesen: _OL aT_)
    > ...[[s. 102]] • ZAMİR • ZARF • SONTAKI • BAĞLAÇ • EDAT [s. 103] İSİM İsim Çekim Ekleri Çokluk (Topluluk) Ekleri Orhun Türkçesinde yalın durumda bir isim hem tekil hem çoğul anlamda kullanılır: külüg er O Ek 6 “ünlü adam” ~ öŋreki er T 25 “öncü askerler” ol at anta ölti KT D33 “o at orada öldü” ~ at yete T 25 “atları yederek” Bununla birlikte Orhun Türkçesinde çokluk (topluluk) ekleri de vardır: +lAr, +gUn, +An, +(X)t a. +lAr: Orhun Türkçesinde kişi ve akrabalık isimlerinde görülür. [[s. 103]] ög+ler+im KT K9 ‘(üve...
  - `Ogel C1, s. 323` (eslesen: _OL aT_)
    > ...bolü olduğunu gösteren bir delildir. Çocuğun annesinin bir adaya sığınması: Bu, İt-Barak akınında mağlup olan Oğuz-Han'ın, bir adaya sığınmasını hatırlatan bir olaydır. Uygur hanedanı da ada ortasındaki bir ağaçtan türemişlerdi. Deniz geçen Türk, Macar ve Moğol ataları gibi çocuğun annesi de, denizler geçerek evladına kavuşmuştur. “Buzağı motifi”de bu masal da önemli bir yer tutar. [[s. 323]] Yeryüzüne dönen kurtlar, bu defa da çocukla buzağısını yemek isterler. Bu masalda buzağının bir çok marifetleri vardır. Bilindi...
  - `Ogel C2, s. 31` (eslesen: _OL aT_)
    > ...veya beylerden buluyorlardı. [[s. 31]] 2) ““/...Kan-Şentey, Ciren adlı konuşan atı kardeşlerinden alıyor. Annesinden de ad istiyor”. Ad verme duası: “..Elin, kolun, seninle olsun, balam! Kabur gada çentik; omurganda kırıkolmasın! Kan-Şentey adlı, bir bahadır ol! Atılan tüfek (mıltık), sana işlemesin! Vurulan kılıç (kalış) seni kesmesin! Yoldaşın, Kı dı r Aleyhisselâm (kalay asalam) Peygamber olsun! Hazreti Ali Peygamber, kuvvetini versin**!,..” 89 Radtof,Proben, IV, s. 85/100. [[s. 31]] Bu destan içinde, Prot o-Tür k...


## KT-K-4#2 - Kül Tigin Yazıtı, Kuzey 4. satir  (3 kelime)

- **transkripsiyon:** `İZGİL : BODuN : ÖLTİ`
- **kelime karsiliklari:** İZGİL : BOYLARI : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _İZGİL BODuN_)
    > ...ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5)...
  - `Tekin 1998, s. 43` (eslesen: _BODuN ÖLTİ_)
    > ...linge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk...
  - `Tekin 2003, s. 221` (eslesen: _BODuN ÖLTİ_)
    > ...üm, Tabgaç iliŋä kılıntım. Türk bodun Tabgaçka körür ärti. (2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerintä (4) bod kalmadı. Ida taşda kalmişi kubranıp yeti yüz boltı. Eki ülügi atlıg ärti, bir ülügi yadag ärti. Yeti yüz kişig (5) uduzugma ulugı Şad ärti. "Aygıl!" tedi. Ayıgmasi bän ärtim, Bilgä Tuñukuk. "Kagan mu kışayi...
  - `Olmez 2017, s. 88` (eslesen: _BODuN ÖLTİ_)
    > ...line number of the inscription): *Runic text — 5 lines* **G 6.** *edgü bilge : kişiğ : edgü : alp kişiğ : yorıt-maz : ermiş : bir kişi : yaŋılsar : uguşı : bodunı : böşükiŋe tegi : kıd-maz ermiş : süçig : savıŋa : yemşak : agısıŋa : arturup : üküş : türʰk : bodun : öltiiŋ türʰk : bodun : ölsikiŋ : bėriye : çugay : yış : tögültün :* > "Bilgili ve yiğit insanları ilerletmezlermiş. Bir kişi suç işlerse bütün kavmini, halkını, akrabalarına varıncaya kadar öldürmezlermiş. Tatlı sözlerine, yumuşak ipeklerine kanıp Türk halkından...
  - `Tekin 1998, s. 9` (eslesen: _İZGİL_)
    > ...lığı'nın birinci elden, yani Bilge Kağan (683-734) ile devlet adamı Tunyukuk tarafından yazılmış askeri tarihi gibidir. Kül Tigin ve Bilge Kağan yazıtlarında dünyanın ve insanoğlunun yaratılışına bir cümle ile değinildikten ve Birinci Kağanlığın tarihi genel çizgileri ile kısaca özetlendikten sonra İkinci Kağanlığın kuruluştan Kül Tigin'in 731'de ölümüne kadarki siyasi ve askeri tarihi ayrıntıları ile anlatılır. [[s. 9]] Yazıtlardan öğrendiğimize göre Türkler, iktidarlarını korumak için yalnız Çinliler, Kıtaylar (Moğoll...
  - `Ergin 1970, s. 11` (eslesen: _İZGİL_)
    > ...yıkamak, her Türk için millî bir ibâdettir. İşte bu kitap, bu ibâdetin hizmetine sunulmaktadır. MUHARREM ERGİN O R H U N Â B İ D E L E R İ [s. 11] Sayfaların yanındaki rakamlar, âbidelerdeki asıl metnin satır numaralarıdır. Ortaya gelen satır başları dik çizgilerle gösterilmiştir. Noktalı yerler, metindeki eksik yerleri göstermektedir. M U H A R R E M E R G İ N [s. 12] KÜL TİGİN ÂBİDESİ Güney cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim...


## KT-K-4#3 - Kül Tigin Yazıtı, Kuzey 4. satir  (4 kelime)

- **transkripsiyon:** `TOKUZ : OGuZ : BODuN : iKiNTİ`
- **kelime karsiliklari:** DOKUZ : OĞUZ : BOYLARI : İKİNCİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...lsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kıl...
  - `Tekin 2003, s. 124` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...aptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışa...
  - `Ata 2011, s. 118` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...a ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türet...
  - `Ata 2011, s. 111` (eslesen: _TOKUZ OGuZ BODuN_)
    > ...e ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları:...


## KT-K-4#4 - Kül Tigin Yazıtı, Kuzey 4. satir  (8 kelime)

- **transkripsiyon:** `BONuNuM : eRTİ : TeŊRİ : YİR : BULGaKIN : ÜÇÜN : YaGI : BOLDI`
- **kelime karsiliklari:** BOYLARIM : İDİ : TANRI : YER : BULANDIĞI : İÇİN : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eRTİ TeŊRİ YİR BULGaKIN_)
    > ...tdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağız...
  - `Tekin 2003, s. 153` (eslesen: _YİR BULGaKIN ÜÇÜN_)
    > ...n için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (BK D 29-30) *ilteriş kagan bilgäsin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi* "İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinliler...
  - `Ata 2011, s. 121` (eslesen: _TeŊRİ YİR_)
    > ...Açıklama: Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T 25 tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: Bu sontakı, bulunma-çıkma du...
  - `Ata 2011, s. 114` (eslesen: _TeŊRİ YİR_)
    > ...için” BK K10 Açıklama: [[s. 114]] Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de k...
  - `Ogel C2, s. 272` (eslesen: _BULGaKIN ÜÇÜN_)
    > ...Ancak Göktürk yazıtlarında, “Türk milleti, kendi yerine (yeringerü) ve suyuna (subıngaru) kondu ” sözü', vat an düşüncesinin en yüce bir gelişmesidir. Konuyu uzatmıyacağız. Gök ile yer, karıştığı için: Türk milleti ile devletinin düzeni, bozuluyor. “Kök yer bulgakın üçün” sözü*, millet ve devlet düzeninin, “gök ile yer *Radlof, a. eser, s. 138. * Radlof,Wb.H,s.142.Kutadgu Bilig, Radlof yayını, H, s. 14 de, “kara” okuyor. [[s. 272]] R.Ar at'a göve “serag'', notlarda ise, “toprak” tanımı veriliyor; KB, 24. * Radlof, Wö. Ili,...
  - `Radloff, s. 219` (eslesen: _BULGaKIN ÜÇÜN_)
    > ...tırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze tengri asra yer yarlıkaduk üçün ... ). Tonyukuk ya zıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakan lığı dev...


## KT-K-4#5 - Kül Tigin Yazıtı, Kuzey 4. satir  (5 kelime)

- **transkripsiyon:** `BİR : YILKA : BİŞ : YOLI : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** BİR : YILDA : BEŞ : YOL : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 2003, s. 133` (eslesen: _BİR YILKA BİŞ YOLI SÜŊüŞDüMüZ_)
    > ..." (BK D 30), *biş yolı* "beş kez" (KT K 4), *üç kata* "üç kez" (Uybat II 4), *beş kata* "beş kez" (Elegest III 2), vb. 1. Asıl sayı + *yolı* ( < *yōl* "yol, sefer" + 3. kişi iyelik eki): *bir yılka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *bir yılka biş yolı süŋüşdümüz* "Bir yılda beş kez savaştık" (KT K 4) *altı yolı süŋüşdüm* "Altı kez savaştım" (BK D 28) *kanım kagan... kırk artukı yeti yolı sülämiş* "Babam Hakan (hakanlığı süresince) kırk yedi kez ordu sevketmiş" (KT D 15) 2. Asıl sayı + *kata* (< *kat-* "katmak, ilave...
  - `Ata 2011, s. 116` (eslesen: _BİR YILKA BİŞ YOLI SÜŊüŞDüMüZ_)
    > ...” 108 [s. 116] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti U...
  - `Ata 2011, s. 109` (eslesen: _BİR YILKA BİŞ YOLI SÜŊüŞDüMüZ_)
    > ...altaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c...


## KT-K-4#6 - Kül Tigin Yazıtı, Kuzey 4. satir  (5 kelime)

- **transkripsiyon:** `eŊ : İLK : TOGU : BaLIKDA : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** EN : İLKİ : TOGU : BALIKDA : SÜNGÜŞDÜK
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _eŊ İLK TOGU BaLIKDA SÜŊüŞDüMüZ_)
    > ...ce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Ata 2011, s. 108` (eslesen: _eŊ İLK TOGU BaLIKDA SÜŊüŞDüMüZ_)
    > ...de geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “...
  - `Tekin 2003, s. 132` (eslesen: _İLK TOGU BaLIKDA SÜŊüŞDüMüZ_)
    > ...güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay altı otuzka uça bardı* "(Babam hakan) Köpek yılının yirmi altısında uçup gitti" (KT KD) *bir yegirminç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş başınta süŋü...


## KT-K-5#1 - Kül Tigin Yazıtı, Kuzey 5. satir  (6 kelime)

- **transkripsiyon:** `KÖLTİGiN : aZMaNKaG : BİNiP : OPLaYU : TeGDİ : aLTI`
- **kelime karsiliklari:** KÜLTİĞİN : AZMAN [ATA]A : BİNİP : [H]OPLAYIP : [YAĞIYA] DEĞDİ : ALTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BİNiP OPLaYU TeGDİ aLTI_)
    > ...l Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül...
  - `Tekin 1998, s. 26` (eslesen: _BİNiP OPLaYU TeGDİ_)
    > ...ıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağ...
  - `Tekin 2003, s. 225` (eslesen: _BİNiP OPLaYU_)
    > ..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin turup ......
  - `Tekin 1998, s. 25` (eslesen: _OPLaYU TeGDİ_)
    > ...a kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ bin...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 2003, s. 224` (eslesen: _OPLaYU_)
    > ...Işbara Çıkan Küli Çor bolmiş.... Tunyukuk (3) [Kap]gan Kagan elintä karıp ädgü bäŋi körti. Ulug Küli Çor sekiz on yaşap yok bol[tı]. (4) ... özlüki boz at ärti. Kädim ..... alpi ärdämi anta tükädi. Türk bodunka.... (5) Sag(ı)r Çulugan yagı(t)tokda [Küli] Çor [oplayu tägi]p, sançıp, ölürüp, oglin kisisin buln[adı]. (6) bulup Az elig tutdı. Kerü Az ........... ärti. Küli Çor Türk bodun..... (7) [k]aganıŋa eli[n törösin...........] Bilgäsin üçün, alpin ärdämin [üçü]n kaz[g]antı...... (8) Tür[k..................] Işbara bilg...


## KT-K-5#2 - Kül Tigin Yazıtı, Kuzey 5. satir  (7 kelime)

- **transkripsiyon:** `eRiG : SaNÇDI : SÜ : TeGİŞİNDE : YİTiNÇ : eRiG : KILıÇLaDI`
- **kelime karsiliklari:** ERİ : SANÇTI : SÜ : DEĞİŞİNDE : YEDİNCİ : ERİ : KILIÇLADI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eRiG SaNÇDI SÜ_)
    > ...nip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ...
  - `Ergin 1970, s. 20` (eslesen: _KILıÇLaDI_)
    > ...tü. İzgil milleti öldü. Dokuz Oğuz milleti kendi milletim idi. Gök, yer bulandığı için düşman oldu. Bir yılda beş defa savaştık. En önce Togu Balıkta savaştık. Kül Tigin Azman atına binip atılarak hücum etti. Altı eri mızrakladı. Askerin hücumunda yedinci eri kılıçladı. İkinci olarak Kuşalgukta Ediz ile savaştık. [[s. 20]] Kül Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızra...
  - `Tekin 1998, s. 26` (eslesen: _SaNÇDI_)
    > ...şınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşd...
  - `Tekin 2003, s. 40` (eslesen: _SaNÇDI_)
    > ...TEKİN ## /nç/ Çift Ünsüz İşareti **40.** Bu işaret /anç/, /änç/ ses öbekleri ile /nç/ ünsüz çiftini yazmak için kullanılır. 1. /anç/ ses öbeği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 166` (eslesen: _KILıÇLaDI_)
    > ...a, gevşekliğe nispet etti" (YE Se İLE çanaçlar, - çanaçlamak). >YW£ kulaçladıt "55 AİN ol uruknı kulaçladı - o, urganı kulaçladı", Başka şe EMAR Don yine böyledir, GE -3y kulaçlar - kulaçlamak). [[y. 166]] e kılışladı: ", $3> Ea ol anı kılıçla- dı # o, onu kılıçladı, kılıçla çaldı”, ( GE 25 yz kılıçlar - kılıçla- Sf kamıçladı: " $> YP Mi yji ol münüğ kamıçladı * o, çorbayı kepçeledi, kepçeyi çorbaya daldırdı", (Gl - 53 kamıçlar - kamıçlamak). k > ZE bagırladı: "55 YENİ ol anı bagırladı so, onun Dak vurdu" ve yine " YE...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 127` (eslesen: _KILıÇLaDI_)
    > ...ri-y-ile Kazan düpe* depdi, Şökli Melike havala oldı, Şökli Meliki bögür- * dübeni atdan yire şaldı, gafillüçe kara başın alup $ kesdi, kahşaduban alça kanın yir yüzine i. Şağ * tarafda Kara Tüken Melike Kıyan Selçük oğlu Delü Tundar ? karşu geldi, şağ yanını kılıçladı yire şaldı. Şol * tarafda Buğaçuk Melike Kara Göne oğlı Delü Budak karşu * geldi, altı perlü gürz ile depesine katı tuta urdı, ! dünya “ölem gözine karanu oldı, at boynun kuçakladı TV yire düşdi. [[s. 127]] Kazan Bigüü kartaşı kâfirüğ tuğey-ile © sancağını kı...


## KT-K-5#3 - Kül Tigin Yazıtı, Kuzey 5. satir  (5 kelime)

- **transkripsiyon:** `iKiNTİ : KUŞaLGuKDA : eDiZ : BİRLE : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** İKİNCİ[Sİ] : KUŞALGUKDA : EDİZ : İLE : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eDiZ BİRLE_)
    > ...uz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş...
  - `Ata 2011, s. 115` (eslesen: _BİRLE SÜŊüŞDüMüZ_)
    > ...i kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci...
  - `Ata 2011, s. 108` (eslesen: _BİRLE SÜŊüŞDüMüZ_)
    > ...ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptı...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Tekin 1998, s. 19` (eslesen: _iKiNTİ_)
    > ...(ve) kuzeyde gece ortasına kadar, bu (sınırlar) içindeki (bütün) halklar hep bana tabidir. Bunca halkı (G 3) hep düzene soktum. Onlar şimdi (hiç de) kötü (durumda) değiller. Türk(lerin) hakanı Ötüken dağlarında oturur (ve oradan hükmeder) ise ülkede (hiçbir) sıkıntı olmaz. [[s. 19]] Doğuda Şantung ovasına kadar ordu sevk ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar ordu sevk ettim, Tibet'e az kala durdum; batıda İnci (Sır Derya) ırmağı(nı) (G 4) geçerek Demir Kapı 'ya kadar ordu sevk ettim; kuzeyde Yir Bayı...
  - `Ergin 1970, s. 12` (eslesen: _iKiNTİ_)
    > ...adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk et...


## KT-K-5#4 - Kül Tigin Yazıtı, Kuzey 5. satir  (9 kelime)

- **transkripsiyon:** `KÖLTİGiN : aZ : YaGıZIN : BİNiP : OPLaYU : TeGiP : BİR : eRiG : SaNÇDI`
- **kelime karsiliklari:** KÜLTİĞİN : AZ : YAĞIZ [AT]INA : BİNİP : [H]OPLAYIP : [YAĞIYA] DEĞİP : BİR : ERİ : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aZ YaGıZIN BİNiP OPLaYU_)
    > ...bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yab...
  - `Tekin 2003, s. 174` (eslesen: _aZ YaGıZIN BİNiP_)
    > ...da asıl eylemle aynı zamanda işlenen bir eylemi ifade eder: *keyik yi-yü tabışgan ye-yü olorur ärtimiz* "Dağ hayvanları yiyerek, tavşan yiyerek oturuyorduk" (T 8) *kül tigin yadagın opla-yu tägdi* "Prens Kül yayan olarak atılıp saldırdı" (KT D 32) *kül tigin az yagızin binip opla-yu tägip bir ärig sançdı* "Prens Kül Azların yağız atına binip atılarak saldırdı, bir askeri mızrakladı" (KT K 5) *ol tägdökdä bayırkunıŋ ak adgırıg udlukin sı-yu urtı* "O hücumda (düşman) Bayırkuların kır aygırını kalçasından yaralayıp vurdu" (BK D 36)...
  - `Ergin 1970, s. 20` (eslesen: _aZ YaGıZIN_)
    > ...andığı için düşman oldu. Bir yılda beş defa savaştık. En önce Togu Balıkta savaştık. Kül Tigin Azman atına binip atılarak hücum etti. Altı eri mızrakladı. Askerin hücumunda yedinci eri kılıçladı. İkinci olarak Kuşalgukta Ediz ile savaştık. [[s. 20]] Kül Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaşt...
  - `Tekin 1998, s. 26` (eslesen: _BİNiP OPLaYU_)
    > ...ıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türg...
  - `Tekin 2003, s. 225` (eslesen: _BİNiP OPLaYU_)
    > ..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin turup ......
  - `Olmez 2017, s. 53` (eslesen: _BİR eRiG_)
    > ...ırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalarda araç veya vasıta durumu da denir. *bir erig ok+un urdı* "(Prens Kül) bir askeri ok ile vurdu" (KT D 36) [s. 54] # s. 054 — Mehmet Ölmez (basılı sayfa 56) *az totokug elig+in tutdı* "(Prens Kül) Azların askeri valisini eli ile tutdu" (KT D 38) *bu yol+un yorısar yaramaçı* "Bu yoldan yürürsek (bizim...


## KT-K-6#1 - Kül Tigin Yazıtı, Kuzey 6. satir  (4 kelime)

- **transkripsiyon:** `TOKuZ : eRiG : eGiRE : TOKIDI`
- **kelime karsiliklari:** DOKUZ : ERİ : EĞİRİP : DOKUNDU
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _TOKuZ eRiG eGiRE TOKIDI_)
    > ...ümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağı...
  - `Tekin 2003, s. 33` (eslesen: _TOKIDI_)
    > ...unlardır: 1. /ok, uk/ ses öbekleri, 2. art /k/ ünsüzü. 1. /ok, uk/ ses öbekleri: a) /UKGLI/ *ok(ı)galı* (BK D 38) - /UKUn/ *okun* "ok ile" (KT D 33, 36) - /ULUK/ *ol ok* (T 42) - /ITmUK/ *ı(t)t(ı)m ok* (T 52) - /ULGRTDmUK/ *ulgartd(ı)m ok* (T 53) - /TUKIDI/ *tokıdı* (BK K 6) - /TUKUz/ *tokuz* (KT K 4, vb.), /TUKz/ *tok(u)z* (BK D 34) - /BRDUK/ *bardok* (KT D 24) - /KILntUKDA/ *kıl(ı)ntokda* (KT D 1), vb. - /RTUK/ *artuk* (KT D 33) - /BUYRUK/ *buyruk* (KT G 1) - /TUGSUKA/ *tugsuk(k)a* (O 1) - /TUNYUKUK/ *tunyukuk* (BK G...
  - `Tekin 1998, s. 11` (eslesen: _TOKuZ_)
    > ...irgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipek...
  - `Tekin 2003, s. 19` (eslesen: _TOKuZ_)
    > ...anlış olarak *Türkü* okumasına dayanan bir öneridir. Pritsak’ın önerdiği *Türküt* terimi ise Pelliot’nun oldukça şüpheli bir varsayımına dayanır, uygun olmaz. Baskakov’un önerdiği “Eski Oğuzca” terimi de Orhon Türkçesi için uygun değildir; çünkü Oğuzlar ya da Tokuz Oğuzlar İkinci Doğu Türk Kağanlığına dahil olan etnik gruplardan yalnızca biri idi. İşte bu düşüncelerle ben Thomsen’in “Orhon Türkçesi” terimini daha uygun bulmuş ve 1968’de yayımlanan gramerime de “Orhon Türkçesi” adını vermiştim (*A Grammar of Orkhon Turk...
  - `Ata 2011, s. 55` (eslesen: _TOKuZ_)
    > ...sonra Köktürklerin yerine Bilge Kağan’ın tacı. Bilge Kağan külliyesinde Ötüken’e hâkim olan Uygurlar 2001 yılında yapılan kazılarda bulunmuştur. zamanında gerçekleşir. Yazıtlar- da Tokuz-Oğuz adı ile geçen Uygurlar, kültürel bakımdan gelişmiş Türk boylarından biri olarak öbür Türklerden önce yerleşik hayata geçerler. Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan s...
  - `Olmez 2017, s. 21` (eslesen: _TOKuZ_)
    > ...e Moğolistan'ın doğusundan Kore'ye kadar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işi...


## KT-K-6#2 - Kül Tigin Yazıtı, Kuzey 6. satir  (4 kelime)

- **transkripsiyon:** `eDiZ : BODuN : aNDA : ÖLTİ`
- **kelime karsiliklari:** EDİZ : BOYLARI : [O] ANDA : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eDiZ BODuN_)
    > ...a sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra...
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...
  - `Tekin 2003, s. 73` (eslesen: _BODuN_)
    > ...ga* "ağıma" (Hem.-Çır. 9) - *artımga* "ardıma" (Hem.-Çır. 10), vb.; fakat *yaşımka* "yaşımda" (BK D 15), *ataçımka* "babacığıma" (Uybat III 14), *oglumka* "oğullarıma" (Barık III 4), vb. 6. /nk/ > /ng/: - *kagangı* "hakanınki" (Tar. B 5) < **kagankı*; fakat *bodunkı* "boylarınki" (Tar. B 5), *biryäki* "güneydeki", *kuryakı* "batıdaki", *yıryakı* "kuzeydeki", *öŋräki* "doğudaki" (T 17), *bärüki* "berideki" (T 46), vb. 7. /lk/ > /lg/: - *çölgi* "bozkırdaki" (T 23) < **çölki*; fakat *tabgaçgı* (KT D 7) ve *[tab]gaçgı* "Ç...
  - `Ata 2011, s. 47` (eslesen: _BODuN_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış....
  - `Olmez 2017, s. 20` (eslesen: _BODuN_)
    > ...anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Ata 2011, s. 40` (eslesen: _BODuN_)
    > ...üzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratıl...


## KT-K-6#3 - Kül Tigin Yazıtı, Kuzey 6. satir  (5 kelime)

- **transkripsiyon:** `ÜÇüNÇ : BOLÇUDA : OGuZ : BİRLE : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** ÜÇÜNCÜ[SÜ] : BOLÇUDA : OĞUZ : İLE : SÜNGÜŞDÜK
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _ÜÇüNÇ BOLÇUDA OGuZ BİRLE SÜŊüŞDüMüZ_)
    > ...ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci...
  - `Ata 2011, s. 108` (eslesen: _ÜÇüNÇ BOLÇUDA OGuZ BİRLE SÜŊüŞDüMüZ_)
    > ...kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptı...
  - `Ergin 1970, s. 20` (eslesen: _BOLÇUDA OGuZ_)
    > ...hücum etti. Altı eri mızrakladı. Askerin hücumunda yedinci eri kılıçladı. İkinci olarak Kuşalgukta Ediz ile savaştık. [[s. 20]] Kül Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit...
  - `Tekin 1998, s. 27` (eslesen: _OGuZ BİRLE_)
    > ...kığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yo...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Tekin 1998, s. 13` (eslesen: _BOLÇUDA_)
    > ...güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (An...


## KT-K-6#4 - Kül Tigin Yazıtı, Kuzey 6. satir  (5 kelime)

- **transkripsiyon:** `KÖLTİGiN : aZMaNKaG : BİNiP : TeGDİ : SaNÇDI`
- **kelime karsiliklari:** KÜLTİĞİN : AZMAN [AT]A : BİNİP : [YAĞIYA] DEĞDİ : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BİNiP TeGDİ SaNÇDI_)
    > ...|tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz bi...
  - `Tekin 1998, s. 25` (eslesen: _BİNiP TeGDİ_)
    > ...biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı y...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 26` (eslesen: _SaNÇDI_)
    > ...şınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşd...
  - `Tekin 2003, s. 40` (eslesen: _SaNÇDI_)
    > ...TEKİN ## /nç/ Çift Ünsüz İşareti **40.** Bu işaret /anç/, /änç/ ses öbekleri ile /nç/ ünsüz çiftini yazmak için kullanılır. 1. /anç/ ses öbeği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...


## KT-K-6#5 - Kül Tigin Yazıtı, Kuzey 6. satir  (4 kelime)

- **transkripsiyon:** `SÜSİN : SaNÇDıMıZ : İLİN : aLTıMıZ`
- **kelime karsiliklari:** SÜSİNİ : SANÇTIK : İLİNİ : ALDIK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _SÜSİN SaNÇDıMıZ İLİN aLTıMıZ_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül...
  - `Tekin 1998, s. 26` (eslesen: _İLİN aLTıMıZ_)
    > ...dunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztl...
  - `Tekin 2003, s. 209` (eslesen: _aLTıMıZ_)
    > ...Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzleri (de)...
  - `Tekin 2003, s. 132` (eslesen: _SÜSİN_)
    > ...anılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...
  - `Ata 2011, s. 115` (eslesen: _SÜSİN_)
    > ...ti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu...
  - `Ata 2011, s. 108` (eslesen: _SÜSİN_)
    > ...r’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile...


## KT-K-6#6 - Kül Tigin Yazıtı, Kuzey 6. satir  (5 kelime)

- **transkripsiyon:** `TÖRTüNÇ : ÇUŞ : BaŞINDA : SÜŊüŞDüMüZ : TÜRK`
- **kelime karsiliklari:** DÖRDÜNCÜSÜ : ÇUŞ : BAŞINDA : SÜNGÜŞDÜK : TÜRK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _TÖRTüNÇ ÇUŞ_)
    > ...a Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) A...
  - `Tekin 2003, s. 132` (eslesen: _TÖRTüNÇ ÇUŞ_)
    > ...togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş başınta süŋüşdümüz* "Dördüncü olarak Çuş (ırmağı) başında savaştık" (KT K 6), vb. ## Topluluk Sayıları **287.** Topluluk sayıları {+AgU(n)} eki ile oluşturulur: *ikägü* "iki parça" (< *\*ekägü*), *üçägü* "üçü birlikte", *üçägün* "üçü(müz) birlikte". 1. *bu...
  - `Ergin 1970, s. 20` (eslesen: _ÇUŞ BaŞINDA_)
    > ...l Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 2003, s. 84` (eslesen: _TÖRTüNÇ_)
    > ...yüksek, baş (unvan)": *ataman tarkan* (BK G 14) < *ata* "baba"; krş. *baga tarkan* **171.** /+un/. Topluluk eki (?). Yalnız şu sözcükte: - *bodun* "boylar, kabileler, halk" (KT D 14, vb.) < *bod* "boy, kabile" (T 60) **172.** {+(X)nç}. Sıra sayıları eki: - *törtünç* "dördüncü" (KT K 7, vb.) < **tȫrt* "4" - *bişinç* "beşinci" (KT K 7, vb.) < **bēş* "5"; bk. **Sıra Sayıları**. **173.** {+rA}. Yer zarfları türetir: - *asra* "aşağıda" (KT D 1, vb.) < **as* "aşağı, alt, alt kısım"; krş. MK *astın* "aşağı, aşağıda" - *içrä*...


## KT-K-7#1 - Kül Tigin Yazıtı, Kuzey 7. satir  (3 kelime)

- **transkripsiyon:** `BODuN : aDaK : KaMŞaTDI`
- **kelime karsiliklari:** BOYLARI : AYAK : KAMŞATTİ
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BODuN aDaK KaMŞaTDI_)
    > ...Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkd...
  - `Tekin 2003, s. 192` (eslesen: _BODuN aDaK_)
    > ...## Gerçekleşmeyen Gelecek Zaman **448.** Gerçekleşmeyen gelecek zaman {-DAçI} ekli eylem sıfatına *är-* yardımcı eyleminin geçmiş zaman biçiminin eklenmesi ile oluşur. Bu kip gelecekte gerçekleşmesi beklenen, fakat gerçekleşmeyen bir eylemi anlatır. *türük bodun adak kamşat(t)ı yablak bol-taçı är-ti* "Türk halkının ayakları dolaştı, kötü olacak idi" (BK D 30-31) *anta içräki nä kişi [...............] yok [bol-t]açı är-[ti]* "Orada ne kadar insan varsa ..... (hepsi) yok olacak idi" (BK D 28) ## Gerçeğe Aykırı Şartlar **4...
  - `Ata 2011, s. 137` (eslesen: _BODuN aDaK_)
    > ...r-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen Gelecek Zaman -tAçI ekli gelecek zaman eylem sıfatı üzerine er- yardımcı fiilinin belirli geçmiş zaman eki getirilerek (gelecek zamanın hikâyesi) yapılır: türük bodun adak kamşattı yablak bol-taçı er-ti “Türk halkının ayakları titredi, (neredeyse) kötü olacak idi” BK D30-31 yok bol-taçı er-ti “yok olacaktı” BK D28 SIFAT-FİİLLER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin...
  - `Ata 2011, s. 130` (eslesen: _BODuN aDaK_)
    > ...mış er-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen Gelecek Zaman -tAçI ekli gelecek zaman eylem sıfatı üzerine er- yardımcı fiilinin belirli geçmiş zaman eki getirilerek (gelecek zamanın hikâyesi) yapılır: [[s. 130]] türük bodun adak kamşattı yablak bol-taçı er-ti “Türk halkının ayakları titredi, (neredeyse) kötü olacak idi” BK D30-31 yok bol-taçı er-ti “yok olacaktı” BK D28 SIFAT-FİİLLER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi...
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...
  - `Tekin 2003, s. 73` (eslesen: _BODuN_)
    > ...ga* "ağıma" (Hem.-Çır. 9) - *artımga* "ardıma" (Hem.-Çır. 10), vb.; fakat *yaşımka* "yaşımda" (BK D 15), *ataçımka* "babacığıma" (Uybat III 14), *oglumka* "oğullarıma" (Barık III 4), vb. 6. /nk/ > /ng/: - *kagangı* "hakanınki" (Tar. B 5) < **kagankı*; fakat *bodunkı* "boylarınki" (Tar. B 5), *biryäki* "güneydeki", *kuryakı* "batıdaki", *yıryakı* "kuzeydeki", *öŋräki* "doğudaki" (T 17), *bärüki* "berideki" (T 46), vb. 7. /lk/ > /lg/: - *çölgi* "bozkırdaki" (T 23) < **çölki*; fakat *tabgaçgı* (KT D 7) ve *[tab]gaçgı* "Ç...


## KT-K-7#2 - Kül Tigin Yazıtı, Kuzey 7. satir  (3 kelime)

- **transkripsiyon:** `YaBLaK : BOLDAÇI : ERTİ`
- **kelime karsiliklari:** YAVLAK : OLACAK : İDİ
- **kanit:**
  - `Radloff, s. 399` (eslesen: _YaBLaK BOLDAÇI_)
    > ...eyleri Beyrek için büyük yas tuttular." Aynı eserin başka bir yerinde "karalar giyip gök sarındılar" denilmektedir. (215) Yaslı çadırın üzerine bayrak asmak Oğuz- (214) Yazıttaki " .. [[s. 399]] .iki şad, ulayu inigünim, oğlanım, beglerim, bu dunım közi, kaşı yablak boldaçı tip sakındım" cümlesinden bu şahısla rın yalnız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat etmelerinden hakanın telaşa düştüğü anlaşılmaktadır. Bilge Ha kan yazıtındaki "saçlarını kulaklarını biçtiler" cümlesi de bunu teyit eder....
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 202` (eslesen: _YaBLaK BOLDAÇI_)
    > ...t edilmiştir. 220 Umumiyetle Kırgız-Kazaklarda yas tutma töreni ve âdetleri eski Gök Türk ve Oğuzlar’da olduğu gibidir. X IX . yüzyılın ortalarına kadar devam etmiştir. [[s. 202]] Yazıttaki “ ...ik i şad, ulayu inigünim, oğlanım, begleriın, budunım közi, kaşı yablak boldaçı tip sakındım” cümlesinden bu şahısların yal nız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat et melerinden hakanın telâşa düştüğü anlaşılmaktadır. Bilge Hakan yazıtın daki “ saçlarını kulaklarım........................ biçtiler” cüml...
  - `Tekin 2003, s. 75` (eslesen: _BOLDAÇI_)
    > ...adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K...
  - `Tekin 1998, s. 10` (eslesen: _YaBLaK_)
    > ...devlet ve töreler”, iş küç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eyl...
  - `Tekin 2003, s. 105` (eslesen: _YaBLaK_)
    > ...um ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir so...
  - `Ata 2011, s. 51` (eslesen: _YaBLaK_)
    > ...ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin...


## KT-K-7#3 - Kül Tigin Yazıtı, Kuzey 7. satir  (15 kelime)

- **transkripsiyon:** `OZA : KeLMiŞ : SÜSİN : KÖLTİGiN : aGTıP : TOŊRA : BİR : OGuŞ : aLPagU : ON : eRiG : TOŊATİGiN : YUGINDA : eGiRiP : ÖLüRTüMüZ`
- **kelime karsiliklari:** ÜZE[RİMİZE] : GELMİŞ : SÜSİNİ : KÜLTİĞİN : AĞTIP : TONGRA[DAN] : BİR : OĞUŞU : ALP : ON : ERİ : TONGA TİGİN[İN] : YUĞUNDA : ÇEVİRİP : ÖLDÜRDÜK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aLPagU ON eRiG_)
    > ...i. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ baş...
  - `Tekin 1998, s. 47` (eslesen: _ÖLüRTüMüZ_)
    > ...yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfk...
  - `Tekin 2003, s. 209` (eslesen: _ÖLüRTüMüZ_)
    > ...Sİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzl...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Ata 2011, s. 127` (eslesen: _ÖLüRTüMüZ_)
    > ...T 2, kigür-tüg ‘soktun’ KT D23, öltüg ‘öldün’ KT G9 3. tekil kişi -DI yok bol-tı “yok oldu” T 3, birme-di ‘vermedi’ KT K9, kılıçla-dı ‘kılıç çaldı’ KT K5 1.çoğul kişi -DXmXz aç-dımız ‘açtık’ T 28, al-tımız ‘aldık’ KT D36, yüküntür-tümüz ‘baş eğdirdik’ KT D18, ölürtümüz ‘öldürdük’ KT D36 2. [[s. 127]] çoğul kişi -DXŋXz / -DXgXz ölteçi er-tigiz ‘ölecek idiniz’ KT K10, bardıŋız ‘gittiniz’ İhe Ashete b2 3. çoğul kişi -DI türk bodun öl-ti ‘Türk milleti öldü’ TI B3 Tablo 7. 5 -DI ekli Geçmiş Zaman Çekimi [s. 128] biligsiz kagan...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...


## KT-K-7#4 - Kül Tigin Yazıtı, Kuzey 7. satir  (7 kelime)

- **transkripsiyon:** `BiŞiNÇ : eZGiNTİ : KaDıZDA : OGuZ : BİRLE : SÜŊüŞDüMüZ : KÖLTİGiN`
- **kelime karsiliklari:** BEŞİNCİSİ : EZGİNTİ : KADIZDA : OĞUZ : İLE : SÜNGÜŞDÜK : KÜLTİĞİN
- **kanit:**
  - `Ergin 1970, s. 20` (eslesen: _eZGiNTİ KaDıZDA OGuZ_)
    > ...ni mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E L E R İ [s. 21] M U H A R R E M E R G İ N Kül Tigin Az yağızına binip hücum etti. İki eri mızrakladı, çamura soktu. O ordu orda öldü. Amga kalesinde kışlayıp ilk baharında Oğuza doğru ordu çıkardık. Kül Tigini evin başın...
  - `Tekin 1998, s. 27` (eslesen: _KaDıZDA OGuZ BİRLE_)
    > ...p teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip...
  - `Ata 2011, s. 115` (eslesen: _OGuZ BİRLE SÜŊüŞDüMüZ_)
    > ...ş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci...
  - `Ata 2011, s. 108` (eslesen: _OGuZ BİRLE SÜŊüŞDüMüZ_)
    > ...39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptı...


## KT-K-8#1 - Kül Tigin Yazıtı, Kuzey 8. satir  (7 kelime)

- **transkripsiyon:** `aZ : YaGıZIN : BİNiP : TeGDİ : iKİ : eRiG : SaNÇDI`
- **kelime karsiliklari:** AZ : YAĞIZINA : BİNİP : [YAĞIYA] DEĞDİ : İKİ : ERİ : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aZ YaGıZIN BİNiP TeGDİ_)
    > ...ş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip tokuz eren sançdı, orduğ birmedi. ORHON YAZITLARI 51 Kül Ti...
  - `Tekin 2003, s. 174` (eslesen: _aZ YaGıZIN BİNiP_)
    > ...da asıl eylemle aynı zamanda işlenen bir eylemi ifade eder: *keyik yi-yü tabışgan ye-yü olorur ärtimiz* "Dağ hayvanları yiyerek, tavşan yiyerek oturuyorduk" (T 8) *kül tigin yadagın opla-yu tägdi* "Prens Kül yayan olarak atılıp saldırdı" (KT D 32) *kül tigin az yagızin binip opla-yu tägip bir ärig sançdı* "Prens Kül Azların yağız atına binip atılarak saldırdı, bir askeri mızrakladı" (KT K 5) *ol tägdökdä bayırkunıŋ ak adgırıg udlukin sı-yu urtı* "O hücumda (düşman) Bayırkuların kır aygırını kalçasından yaralayıp vurdu" (BK D 36)...
  - `Ergin 1970, s. 20` (eslesen: _aZ YaGıZIN_)
    > ...andığı için düşman oldu. Bir yılda beş defa savaştık. En önce Togu Balıkta savaştık. Kül Tigin Azman atına binip atılarak hücum etti. Altı eri mızrakladı. Askerin hücumunda yedinci eri kılıçladı. İkinci olarak Kuşalgukta Ediz ile savaştık. [[s. 20]] Kül Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaşt...
  - `Tekin 1998, s. 25` (eslesen: _BİNiP TeGDİ_)
    > ...biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı y...
  - `Tekin 1998, s. 26` (eslesen: _SaNÇDI_)
    > ...şınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşd...
  - `Tekin 2003, s. 40` (eslesen: _SaNÇDI_)
    > ...TEKİN ## /nç/ Çift Ünsüz İşareti **40.** Bu işaret /anç/, /änç/ ses öbekleri ile /nç/ ünsüz çiftini yazmak için kullanılır. 1. /anç/ ses öbeği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki...


## KT-K-8#2 - Kül Tigin Yazıtı, Kuzey 8. satir  (6 kelime)

- **transkripsiyon:** `BaLIKA : BaRMaDI : OL : SÜ : aNDA : ÖLTİ`
- **kelime karsiliklari:** BALIKA : VARMADI : O : SÜ : [O] ANDA : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _OL SÜ_)
    > ...ı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip...
  - `Tekin 2003, s. 106` (eslesen: _OL SÜ_)
    > ...r* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük bodun üçün tün udımadım...* "Türk halkı için gece uyumadım..." (KT D 27) 5. Bir eylemin yerini...
  - `Ata 2011, s. 119` (eslesen: _OL SÜ_)
    > ...’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın...
  - `Olmez 2017, s. 67` (eslesen: _OL SÜ_)
    > ...ē:r-* "ermek, erişmek"; *kapıg* "kapı" (BK D 15, vb.) < \**kap-* "kapamak" (krş. MK *kapıl-* "kapanmak, kapatılmak", *kapga* "kale kapısı", *kapgak* "kapak"); *küreg* "kaçak (→casus)" (T 8, vb.) < *küre-* "kaçmak" (KT D 23, BK D 19); *ölüg* "ölü" (BK D 19) < *öl-*; *süçig* "tatlı" (KT G 6, vb.) < \**süçi-*; *süñüg* "mızrak" (KT D 35, vb.) < \**süñ-* "mızraklamak"; *tiriğ* "diri, canlı; hayat" (KT K 9, KT GD) < \**tir-* "yaşamak"; *tuğ* "engel, mania" (T 26) < *tu-* "kapanmak" (T 23). **{-gA}:** *bilge* "akıllı" (KT G 6, vb...
  - `Roux, Eski Din, s. 157` (eslesen: _OL SÜ_)
    > ...ltına yerleşir ve yüzü göğe dönük olarak tanrılardan eşlere mutluluğu, yani kut'u vermesi için dilekte bulunur (P. 72, s. 181 ). [[s. 157]] Kut gökten geldiği gibi, aynı şekilde uçarak göğe geri döner (B. 10, 1, s. 164). Bunun özel bir anlamı vardır, çünkü Moğol su' su, Cengiz Han'la olduğu zaman, yeke su jali, "büyük alev ruh" şeklinde tanımlanmaktadır. ]ali (cali) ve "alev" anlamında buna karşılık gelen yula, çula vs. kelimeleri insan ruhunun belirlenmesi için sıkça kullanılır (Q.68, s. 187). [[s. 157]] Ne var İd, ale...
  - `Ata 2011, s. 112` (eslesen: _OL SÜ_)
    > ...rü ‘beri, bu yana’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. [[s. 112]] +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’...


## KT-K-8#3 - Kül Tigin Yazıtı, Kuzey 8. satir  (7 kelime)

- **transkripsiyon:** `aMGA : KORGaN : KIŞLaP : YaZIŊA : OGuZGaRU : SÜ : TaŞıKDıMıZ`
- **kelime karsiliklari:** AMGA : KURGANDA : KIŞLAYIP : YAZIN[D]A : OĞUZADOĞRU : SÜ : TAŞIKTIK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aMGA KORGaN KIŞLaP YaZIŊA OGuZGaRU SÜ TaŞıKDıMıZ_)
    > ...Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttımız. Oğuz yağı orduğ basdı . Kül Tigin (K 9) öğsüz akın binip tokuz eren sançdı, orduğ birmedi. ORHON YAZITLARI 51 Kül Tigin yirmi yedi yaşında (iken) Karluk halkı (serbestçe) hareket eden (bir) düşman oldu. (Onlarla) Tamag kut...
  - `Tekin 2003, s. 115` (eslesen: _aMGA KORGaN KIŞLaP YaZIŊA_)
    > ...1. {+gArU}, 2. {+ŋArU}, {+ArU}, {+rA}. Yönelme durumunda bir ad, eylemin kendisine doğru işlendiğini gösteren zarf tümleci olarak kullanılır. 1. {+gArU}. Bu ek yalın ad gövdelerine eklenir: *bän äb+gärü tüşäyin... tedi* "Ben karargaha ineyim... dedi" (T 30) *amga korgan kışlap yazıŋa oguz+garu sü taşıkdımız* "Amga Korgan'da kışlayıp, ilkbaharda Oğuzlara doğru sefere çıktık" (KT K 8) *tabgaç+garu kunı säŋünüg ıdmiş, kıtań+garu toŋra äşimig ıdmiş* "Çin'e doğru General Ku'yu, Kıtay'lara doğru da Tongra Eşim'i göndermiş" (T 9) *ötükän yış+gar...
  - `Ata 2011, s. 127` (eslesen: _YaZIŊA OGuZGaRU SÜ TaŞıKDıMıZ_)
    > ...ımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan t...
  - `Ata 2011, s. 120` (eslesen: _YaZIŊA OGuZGaRU SÜ TaŞıKDıMıZ_)
    > ...ig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. [[s. 120]] tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli...
