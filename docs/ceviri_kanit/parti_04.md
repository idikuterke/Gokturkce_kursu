# Ceviri istek paketi 4 - Orhun cumlecikleri

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


## KT-D-4#1 - Kül Tigin Yazıtı, Doğu 4. satir  (9 kelime)

- **transkripsiyon:** `KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL`
- **kelime karsiliklari:** KERGEK : OLMUŞ : YUĞCU : SIĞITÇI : ÖNDE : GÜN : DOĞUSUNDA : BÖKLÜ : ÇÜLLÜİL
- **kanit:**
  - `Ogel C2, s. 483` (eslesen: _ÖŊRE KÜN TOGSıKDA BÖKLİ_)
    > .... Belki de bunlar, G o b i çölünün kuzeyindeki vahalarda oturan kavimlerdi. Yazıt, Göktürkler in çevresindeki kavimleri sayarken, şöyle diyordu: “.. Öne doğru, gün doğusunda, bökli (bükli) ç ölli g il...” [[s. 483]] Yazıttaki eski Türkçesi ise şöyledir: *“.. Öngre, kün togsıkda, bökli (bökli) çöl(I)ig il...” Anadolu'da,küçük ağaçlıklı kümelere, “bük” adı verilir. Bundan dolayı, yazıtlarda da bu sözü böyle okumak istedik. Ancak eski söylenişinin “*bök” olabileceğini de düşündük. Bu deyim üzerinde, az sonra daha geniş olarak duracağız. Gök...
  - `Tekin 1998, s. 33` (eslesen: _SIGıTÇI ÖŊRE KÜN_)
    > ...Türük iti ança olurur ermiş. [[s. 33]] Bilge kağan ermiş, alp kağan ermiş; buyrukı <yeme> bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (D 5) Yoğçı sığıtçı öngre kün tuğsıkda Bükli Çöllüğ il, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan erlmiş. Anta kisre inisi| kağan (bolmış erlinç, oğlıtlı| kağan bolmış erinç. [[s. 33]] Anta |ki...
  - `Tekin 1998, s. 21` (eslesen: _KeRGeK BOLMıS_)
    > ...ış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanı...
  - `Ata 2011, s. 51` (eslesen: _KeRGeK BOLMıS_)
    > ...onturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak e...
  - `Olmez 2017, s. 107` (eslesen: _KeRGeK BOLMıS_)
    > ...örö**: isim tabanı - **+g**: belirtme durumu eki **ėtmış** < *ėt-miş* “hazırlamış, yapmış, düzenlenmiş” - **ėt-**: fiil tabanı - **-miş**: öğrenilen geçmiş zaman eki **özi** < *öz+i* “kendisi” - **öz**: isim tabanı - **+i**: teklik üçüncü kişi iyelik eki **kergek bolmış** < *\*kerge-k bol-mış* “vefat etmiş” - **\*kerge-**: muhtemel fiil tabanı - **-k**: fiilden isim yapma eki - **bol-**: yardımcı fiil - **-mış**: öğrenilen geçmiş zaman eki [s. 108] # s. 106 — Mehmet Ölmez (basılı sayfa numarası 108) [Köktürk (runiform) har...
  - `Ata 2011, s. 119` (eslesen: _ÖŊRE KÜN_)
    > ...KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 111 [s. 119] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak tarafta” KT D4 kisre kün batsıkıŋa tegi “geride gün batısına kadar” (Ongin 2) e. +rü eki ile türetilmiş yer zarfları: kirü ‘geri, geriye doğru, batıya doğru’, berü ‘beri, bu yana’. kirü barıgma bardı “geri giden...


## KT-D-4#2 - Kül Tigin Yazıtı, Doğu 4. satir  (13 kelime)

- **transkripsiyon:** `TaBGaÇ : TÜPÜT : aPaR : PURuM : KIRKıZ : ÜÇKURIKaN : OTuZTaTaR : KITaYN : TaTaBI : BUNÇA : BODuN : KeLİPeN : SIGTAMıŞ`
- **kelime karsiliklari:** TABGAÇ : TİBET : APAR : RUM : KIRGIZ : ÜÇKURIKAN : OTUZ-TATAR : KITAY : TATABI : BUNCA : BOYLAR : GELİP : SIĞTAMIŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ TÜPÜT aPaR PURuM_)
    > ...l<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çi...
  - `Tekin 1998, s. 33` (eslesen: _TaTaBI BUNÇA BODuN KeLİPeN_)
    > ...ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (D 5) Yoğçı sığıtçı öngre kün tuğsıkda Bükli Çöllüğ il, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan erlmiş. Anta kisre inisi| kağan (bolmış erlinç, oğlıtlı| kağan bolmış erinç. [[s. 33]] Anta |kisre inisi eçisin teğ) (D 6) kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağlan ollurmış erinç, yablak kağan...
  - `Tekin 2003, s. 220` (eslesen: _aPaR PURuM KIRKıZ_)
    > ...p kagan ärmiş. Buyrukı < yämä > bilgä ärmiş ärinç, alp ärmiş ärinç. Bägläri yämä boduni yämä tüz ärmiş. Anı üçün ilig ança tutmış ärinç. İlig tutup törög itmiş. Özi ança kärgäk bolmış. (D 5) Yogçı sıgıtçı öŋrä kün tugsıkdakı Bükli çöl(l)üg il, Tabgaç, Töpöt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtañ, Tatabı... bunça bodun kälipän sıgtamış, yoglamış. Antag külüg kagan ärmiş! Anta kisrä inisi kagan [bolmış är]inç, oglıtı kagan bolmış ärinç. Anta [kisrä inisi eçisin täg] (D 6) kılınmadok ärinç, oglı kaŋin täg kılınmadok ärinç...
  - `Olmez 2017, s. 108` (eslesen: _aPaR PURuM KIRKıZ_)
    > ...) [Köktürk (runiform) harfleriyle basılı beş satırlık yazıt metni; ilk satırın sağ ucunda satır numarası "5", son iki satırın başlarında nokta dizileri (..........) var] *D 5. yoqçı : sıgıtçı : öyre : kün : tugsıkdaki : bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu y...


## KT-D-4#3 - Kül Tigin Yazıtı, Doğu 4. satir  (5 kelime)

- **transkripsiyon:** `YUGLAMıŞ : aNTaG : KÜLüG : KAGaN : eRMiŞ`
- **kelime karsiliklari:** YUĞLAMIŞ : ÖYLE : ÜNLÜ : KAĞAN : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler) benim sözümü kırmadılar (ve) (G 12) Çin hakanının has sanatçılarını gönderdiler. Onlara olağanüstü bir türbe yaptırttı...
  - `Ata 2011, s. 121` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...ışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyu...
  - `Ata 2011, s. 114` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...ı tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. [[s. 114]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama:...


## KT-D-4#4 - Kül Tigin Yazıtı, Doğu 4. satir  (4 kelime)

- **transkripsiyon:** `aNDA : KİSRE : İNİSİ : KaGaN`
- **kelime karsiliklari:** ANDAN : SONRA : İNİSİ : KAĞAN
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _KİSRE İNİSİ KaGaN_)
    > ...da mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gib...
  - `Ata 2011, s. 51` (eslesen: _KİSRE İNİSİ KaGaN_)
    > ...a idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı...
  - `Ata 2011, s. 44` (eslesen: _KİSRE İNİSİ KaGaN_)
    > ...]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç...


## KT-D-5#1 - Kül Tigin Yazıtı, Doğu 5. satir  (3 kelime)

- **transkripsiyon:** `BOLMıS : eRiNÇ : OGLITI`
- **kelime karsiliklari:** OLMUŞ : GERÇEK : OĞULLARI
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _BOLMıS eRiNÇ OGLITI_)
    > ...a yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphes...
  - `Ata 2011, s. 51` (eslesen: _BOLMıS eRiNÇ OGLITI_)
    > ...ti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç...
  - `Ata 2011, s. 44` (eslesen: _BOLMıS eRiNÇ OGLITI_)
    > ...ök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlü...


## KT-D-5#2 - Kül Tigin Yazıtı, Doğu 5. satir  (3 kelime)

- **transkripsiyon:** `KaGaN : BOLMıS : eRiNÇ`
- **kelime karsiliklari:** KAĞAN : OLMUŞ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _KaGaN BOLMıS eRiNÇ_)
    > ...aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamı...
  - `Ata 2011, s. 51` (eslesen: _KaGaN BOLMıS eRiNÇ_)
    > ...kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabga...
  - `Ata 2011, s. 44` (eslesen: _KaGaN BOLMıS eRiNÇ_)
    > ...ksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligi...


## KT-D-5#3 - Kül Tigin Yazıtı, Doğu 5. satir  (7 kelime)

- **transkripsiyon:** `aNDA : KİSRE : İNİSİ : eÇİSİN : TeG : KILıNMaDUK : eRiNÇ`
- **kelime karsiliklari:** ONDAN : SONRA : İNİSİ : EÇİSİ : DEK : KILINMADIĞI : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(...
  - `Ata 2011, s. 51` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün in...
  - `Ata 2011, s. 44` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...rmiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtüki...


## KT-D-5#4 - Kül Tigin Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `OGLI : KaŊIN : TeG : KILıNMaDUK : eRiNÇ`
- **kelime karsiliklari:** OĞLU : BABASI : DEK : KILINMADIĞI : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _OGLI KaŊIN TeG KILıNMaDUK eRiNÇ_)
    > ...lar, Kıtaylar, Tatabılar... bunca halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlı...
  - `Ata 2011, s. 51` (eslesen: _OGLI KaŊIN TeG KILıNMaDUK eRiNÇ_)
    > ...ç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşur...
  - `Ata 2011, s. 44` (eslesen: _OGLI KaŊIN TeG KILıNMaDUK eRiNÇ_)
    > ...ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bod...


## KT-D-5#5 - Kül Tigin Yazıtı, Doğu 5. satir  (3 kelime)

- **transkripsiyon:** `BİLiGSİZ : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** BİLGİSİZ : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün,...
  - `Ata 2011, s. 51` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...eme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun...
  - `Ata 2011, s. 44` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...eri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu...


## KT-D-5#6 - Kül Tigin Yazıtı, Doğu 5. satir  (4 kelime)

- **transkripsiyon:** `eRiNÇ : YaBLaK : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** GERÇEK : YAVLAK : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...lar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıç...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...ı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış k...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...z ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yi...


## KT-D-5#7 - Kül Tigin Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `eRiNÇ : BUYRUKI : YiME : BİLiGSiZ : eRiNÇ`
- **kelime karsiliklari:** GERÇEK : BUYRUĞU : YİNE : BİLGİSİZ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ BUYRUKI_)
    > ...onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ BUYRUKI_)
    > ...nç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaga...
  - `Olmez 2017, s. 110` (eslesen: _eRiNÇ BUYRUKI_)
    > ...klik üçüncü kişi iyelik eki +n: iyelik ekinden sonra gelen belirtme durumu eki [Levha: Eski Türk (runik) yazısıyla yazılmış beş satır metin] *D 6. kılnmadok erinç: oglı : kaŷın teg : kılnmadok erinç: biligsiz : kagan olormış erinç : yavlak : kagan : olormış erinç : buyruki : yeme : biligsiz ermiş erinç : yavlak ermiş erinç : begleri : bodunı : tüzsüz üçün : tavgaç : bodun : tevligin körlügin üçün armakçısın : üçün : inili eçili : kıkśürtökin : üçün : begli : bodunlıg* "evlatlar babaları gibi yaratılmadığı için, bilgisiz hakanl...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ BUYRUKI_)
    > ...tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tab...
  - `Tekin 2003, s. 161` (eslesen: _BİLiGSiZ_)
    > ...mişler şüphesiz, yiğit imişler şüphesiz" (KT D 3) *anta kisrä inisi kagan bolmiş ärinç oglıtı kagan bolmiş ärinç* "Ondan [s. 161] # s. 161 — ORHON TÜRKÇESİ GRAMERİ sonra erkek kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz" (KT D 4-5) *biligsiz kagan olormiş ärinç yablak kagan olormiş ärinç* "Akılsız hakanlar tahta oturmuş şüphesiz, kötü hakanlar tahta oturmuş şüphesiz" (KT D 5) *buyrukı yämä biligsiz [ärmiş] ärinç yablak ärmiş ärinç* "Kumandanları da akılsız imişler şüphesiz, kötü imişler şüphesiz"...
  - `Olmez 2017, s. 38` (eslesen: _BİLiGSiZ_)
    > ...ılmaz: *adak* "ayak", *kagan* "kağan, hakan". - Ünlüyle sonlanan sözcüklerde son ses, yani son ünlü esasen her zaman yazılır: *apa* "ata, ecdat", *ara* "ara, arasında". - İlk hecedeki diğer ünlüler esasen her zaman yazılır: *sü* "ordu, asker", *tört* "dört", *biligsiz* "bilgisiz, cahil". - Söz başı dışında, söz içi ve söz sonundaki *v* ünsüzleri *b* harfleri ile yazılırlar: *av* "av", *ev* "çadır, yurt; karargah", *kavış-* "kavuşmak, birleşmek". [s. 39] # s. 037 — Köktürkçe Dersleri (basılı sayfa numarası 39) - Kapalı *e...


## KT-D-5#8 - Kül Tigin Yazıtı, Doğu 5. satir  (3 kelime)

- **transkripsiyon:** `YaBLaK : eRMiŞ : eRiNÇ`
- **kelime karsiliklari:** YAVLAK : İMİŞ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...İGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodun...
  - `Ata 2011, s. 51` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...k bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı og...
  - `Ata 2011, s. 44` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul bo...


## KT-D-6#1 - Kül Tigin Yazıtı, Doğu 6. satir  (25 kelime)

- **transkripsiyon:** `BeGLeRİ : BODuNI : TÜZSüZ : ÜÇÜN : TaBGaÇ : BODuN : TeBLiGİN : KÜRLüG : ÜÇÜN : aRMaKÇISIN : ÜÇÜN : İNiLİ : eÇİLİ : KİŊŞÜRTÜKİN : ÜÇÜN : BeGLİ : BODuNLIG : YOŊŞURTUKIN : ÜÇÜN : TÜRK : BODuN : İLLeDÜK : İLİN : IÇGıNU : IDMıŞ`
- **kelime karsiliklari:** BEĞLERİ : BOYLARI : DÜZSÜZ : [OLDUĞU] İÇİN : TABGAÇ : BOYLARI : TEBLİ : GÜRLÜ : [OLDUĞU] İÇİN : ARMAKÇI : [OLDUĞU] İÇİN : İNİYİ : EÇİYİ : KİNLEŞTİRDİĞİ : İÇİN : BEĞLE : BOYLARI : YONGŞURDUĞU : İÇİN : TÜRK : BOYLARI : İLLEDİĞİ : İLİNİ : İÇGÜN : ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...n (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız o...
  - `Ata 2011, s. 51` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...re inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız og...
  - `Olmez 2017, s. 110` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...urumu eki [Levha: Eski Türk (runik) yazısıyla yazılmış beş satır metin] *D 6. kılnmadok erinç: oglı : kaŷın teg : kılnmadok erinç: biligsiz : kagan olormış erinç : yavlak : kagan : olormış erinç : buyruki : yeme : biligsiz ermiş erinç : yavlak ermiş erinç : begleri : bodunı : tüzsüz üçün : tavgaç : bodun : tevligin körlügin üçün armakçısın : üçün : inili eçili : kıkśürtökin : üçün : begli : bodunlıg* "evlatlar babaları gibi yaratılmadığı için, bilgisiz hakanlar tahta çıktığı için, kötü hakanlar yönetime geçtiği için, komutanları da bilgisiz...
  - `Ata 2011, s. 44` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...… [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün bo...


## KT-D-7#1 - Kül Tigin Yazıtı, Doğu 7. satir  (4 kelime)

- **transkripsiyon:** `KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ`
- **kelime karsiliklari:** KAĞANLADIĞI : KAĞANINI : YİTİRİ : ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...z”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gü...
  - `Ata 2011, s. 51` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...ş erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya k...
  - `Ata 2011, s. 44` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halk...


## KT-D-7#2 - Kül Tigin Yazıtı, Doğu 7. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI`
- **kelime karsiliklari:** TABGAÇ : BOYLARINA : BEĞLİK : URI : EVLADI : KUL : OLDU
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇ BODuNKA BeGLiK URI_)
    > ...ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka t...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ BODuNKA BeGLiK URI_)
    > ...ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleşt...
  - `Ata 2011, s. 44` (eslesen: _BODuNKA BeGLiK URI OGLIN_)
    > ...ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında p...


## KT-D-7#3 - Kül Tigin Yazıtı, Doğu 7. satir  (4 kelime)

- **transkripsiyon:** `iŞİLiK : KIZ : OGLıN : KÜŊ`
- **kelime karsiliklari:** İŞİLİK : KIZ : EVLADI : CARİYE
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KIZ OGLıN KÜŊ_)
    > ...lar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye yaptı” vb. vb. gibi. 5.3. Deyimler Orhon yazıtlarının dili deyimler açısından da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu...
  - `Tekin 2003, s. 220` (eslesen: _KIZ OGLıN KÜŊ_)
    > ...süz üçün, Tabgaç bodun täb[ligin] kürlügin üçün, armakçısin üçün, inili eçili kikşürtökin üçün, bägli bodunlıg (D 7) yoŋaşurtokin üçün, Türük bodun illädök ilin ıçgınu [ı]dmış, kaganladok kaganin yitürü ıdmış. Tabgaç bodunka bäglik urı oglin kul kıltı, eşilik kız oglin küŋ kıltı. Türük bäglär Türük ātin ı(t)tı; Tabg[açgı] bäglär Tabgaç ātin tutupan Tabgaç kaganka körmiş, älig yıl (D 8) işig küçüg birmiş. İlgärü kün tugsıkka, Bükli kaganka tägi süläyü birmiş, kur(ı)garu Tämir Kapıgka < tägi > süläyü birmiş. Tabgaç kaganka ilin t...
  - `Ata 2011, s. 51` (eslesen: _KIZ OGLıN KÜŊ_)
    > ...z üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örg...
  - `Ata 2011, s. 44` (eslesen: _KIZ OGLıN KÜŊ_)
    > ...dunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene...


## KT-D-7#4 - Kül Tigin Yazıtı, Doğu 7. satir  (6 kelime)

- **transkripsiyon:** `BOLDI : TÜRK : BeGLeR : TÜRK : ATIN : ITI`
- **kelime karsiliklari:** OLDU : TÜRK : BEĞLERİ : TÜRK : ADINI : ATTI
- **kanit:**
  - `Ata 2011, s. 154` (eslesen: _BeGLeR TÜRK_)
    > ...i] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. edgüti “iyice” < ed “mal, mülk” +gü “iyi” [isimd...
  - `Ata 2011, s. 147` (eslesen: _BeGLeR TÜRK_)
    > ...m eki] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. [[s. 147]] tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. [[s. 147]] edgüti “iyice” < ed “mal, mülk” +gü “iyi” [...
  - `Ogel C2, s. 76` (eslesen: _TÜRK BeGLeR_)
    > ...de de, “*Hakan Efrasyab'ın ağıdında, zamanı anlatan şu parça da gelmiştir', diyordu. Bu şiirler hep, “zaman, felek ve acun” üzerine kurulmuş düşüncelerdir. [[s. 76]] Kutadgu Bili gise,onun Tü r k beylerinden olduğunu belirterek söze, şöyle başlıyordu: R “Bu Türk beglerinden atı belgülüg, Tonga Alp Er'di kutı Belgülüg”: (Bu Türk beylerinden adı ün salmış Tonga Alp Er'in ikbal ile kutu da belgelenmişti'?). Bundan sonra hahanlara öğüt, yani bir “siretü'l-mülük'; başlar. Ne bir zaman, ne bir yer ve ne hadise veya ne de bir başk...
  - `Kafesoglu, s. 129` (eslesen: _TÜRK ATIN_)
    > ...4. yüzyıldan itibaren, bk. aş. [[s. 129]] Ordu) muhtaç oldukları atı Türk ülkelerinden temin etmek zorunda idiler. Savaş atlarının daha çok ipekle mübadele edildiğini belirten Çin kaynakları, yalnız Gök-Türk çağında ayrı adlar altında zikredilen 11 cins Türk atından bahsetmişlerdir30. Böylece hem Doğu, hem Batı kaynaklarının bu bakımlardan hemen hemen aynı şeyleri tekrarladıkları görülür. Çin vesikalarına göre, Hun-lardan önceki Çin'in kuzey kavimleri atlı muharebe usûllerini bilmiyorlardı. [[s. 129]] Çinliler de atı...
  - `Tekin 1998, s. 19` (eslesen: _BeGLeR_)
    > ...ü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğl...
  - `Ata 2011, s. 51` (eslesen: _BeGLeR_)
    > ...8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmadu...


## KT-D-7#5 - Kül Tigin Yazıtı, Doğu 7. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇGI : BeGLeR : TaBGaÇ : ATIN : TUTuPaN : TaBGaÇ : KaGaNKA`
- **kelime karsiliklari:** TABGAÇ : BEĞLERİ [GİBİ] : TABGAÇ : ADINI : TUTUP : TABGAÇ : KAĞANINA
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN TUTuPaN TaBGaÇ KaGaNKA_)
    > ...ısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN TUTuPaN TaBGaÇ KaGaNKA_)
    > ...ısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarla...
  - `Ata 2011, s. 44` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN TUTuPaN TaBGaÇ KaGaNKA_)
    > ...çün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümdarlar...


## KT-D-8#1 - Kül Tigin Yazıtı, Doğu 8. satir  (6 kelime)

- **transkripsiyon:** `KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ`
- **kelime karsiliklari:** GÖRMÜŞ : ELLİ : YIL : İŞİ : GÜCÜ : [TABGAÇA] VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KÖRMiŞ eLiG YIL İŞiG_)
    > ...fngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur...
  - `Ata 2011, s. 51` (eslesen: _KÖRMiŞ eLiG YIL İŞiG_)
    > ...ıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümda...
  - `Ata 2011, s. 44` (eslesen: _KÖRMiŞ eLiG YIL İŞiG_)
    > ...gli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümdarlar imiş. [[s. 44]] Kuma...


## KT-D-8#2 - Kül Tigin Yazıtı, Doğu 8. satir  (8 kelime)

- **transkripsiyon:** `İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRMiŞ`
- **kelime karsiliklari:** İLERİ : GÜN : DOĞUSUNDA : BÖKLİ : KAĞANA : DEĞİN : SÜLEYİ : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA TeGİ SÜLeYÜ BİRMiŞ_)
    > ...duk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ b...
  - `Tekin 1998, s. 11` (eslesen: _İLGeRÜ KÜN_)
    > ...gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmed...
  - `Olmez 2017, s. 21` (eslesen: _İLGeRÜ KÜN_)
    > ...mlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın...
  - `Ata 2011, s. 142` (eslesen: _KaGaNKA TeGİ_)
    > ...r- tasvirî fiili, bugün Türkiye Türkçesinde olduğu gibi tezlik değil, kesinlik anlamı katar: türük bodunıŋ ilin törüsin tut-a bir-miş it-i bir-miş “Türk halkının devletini (ve) törelerini tutmuş, düzenlemiş” BK D3, KT D1 kün tugsıkda bükli kaganka tegi süle-yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandı...
  - `Ata 2011, s. 135` (eslesen: _KaGaNKA TeGİ_)
    > ...[s. 135]] ber- ~ bir- tasvirî fiili, bugün Türkiye Türkçesinde olduğu gibi tezlik değil, kesinlik anlamı katar: türük bodunıŋ ilin törüsin tut-a bir-miş it-i bir-miş “Türk halkının devletini (ve) törelerini tutmuş, düzenlemiş” BK D3, KT D1 kün tugsıkda bükli kaganka tegi süle-yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 [[s. 135]] bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını göst...
  - `Ogel C2, s. 483` (eslesen: _İLGeRÜ KÜN_)
    > ...oğularında, belki de Kadırgan ormanları üzerindeki geri Proto-Moğolkavimlerdi. Kül Tegin yazıtında da şöyle deniliyordu: “.. Doğuda, gün doğusunda, Bö kli Kağan'a kadar, asker gönderivermiş, (akın yapmış)...” Bu sözlerin eski türkçesi şöyledir: “.. [[s. 483]] İlgerü, kün togsıkka. Bökli Kagan'ka tegi, süleyi bermiş...”' 2.**Ormanlıvebozkırlı halk””' deyişini de, yine Kültegin yazıtında görüyoruz. Bunlar da yine, doğudaki Proto-Moğol kavimleri olabilirlerdi. Yazıtta, bozkırlı yerine, “çöl(1)iğ”, yani çöl1 ü sözü kullanılıyord...


## KT-D-8#3 - Kül Tigin Yazıtı, Doğu 8. satir  (5 kelime)

- **transkripsiyon:** `KURıGaRU : TeMiRKaPıGKA : TeGİ : SÜLeYÜ : BİRMiŞ`
- **kelime karsiliklari:** GERİDE : DEMİRKAPIYA : DEĞİN : SÜLEYİ : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TeGİ SÜLeYÜ BİRMiŞ_)
    > ...nın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ b...
  - `Tekin 1998, s. 11` (eslesen: _KURıGaRU_)
    > ...gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpü...
  - `Tekin 2003, s. 62` (eslesen: _KURıGaRU_)
    > ...*türük* (genellikle) ## Sonseste Ünlü Düşmesi **96.** Sonseste ünlü düşmesi şu örneklerde meydana gelmiş olmalıdır: - *birdin* "güneyden", *biryä* "güneyde", *birgärü* "güneye doğru" sözcüklerinin kökü *bir* "güney" < *biri - *kurgaru* (KT D 24, G 2, 3) ~ *kurıgaru* "batıya doğru" (KT D 8, 12, 17, 21, vb.) < *kurı "geri, batı" - *yırgaru* "kuzeye doğru", *yırd(ı)nta* "kuzeyden" sözcüklerinin kökü *yır* "kuzey" (KT, BK, T) ~ *ir* (MÇ D 7, 11) < *yırı - *kül tigin* "Prens Kül" (KT, BK), *kül çor* "Kül Çor" (BK G 13) ~ *kü...
  - `Ata 2011, s. 52` (eslesen: _KURıGaRU_)
    > ...rmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam tör...
  - `Olmez 2017, s. 21` (eslesen: _KURıGaRU_)
    > ...geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, ku...
  - `Ata 2011, s. 45` (eslesen: _KURıGaRU_)
    > ...ŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve)...


## KT-D-8#4 - Kül Tigin Yazıtı, Doğu 8. satir  (6 kelime)

- **transkripsiyon:** `TaBGaÇ : KaGaNKA : İLİN : TÖRÜSİN : aLI : BİRMiŞ`
- **kelime karsiliklari:** TABGAÇ : KAĞANINA : İLİNİ : TÖRESİNİ : ALI : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇ KaGaNKA İLİN TÖRÜSİN aLI BİRMiŞ_)
    > ...şilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü...
  - `Tekin 2003, s. 220` (eslesen: _TaBGaÇ KaGaNKA İLİN_)
    > ...eşilik kız oglin küŋ kıltı. Türük bäglär Türük ātin ı(t)tı; Tabg[açgı] bäglär Tabgaç ātin tutupan Tabgaç kaganka körmiş, älig yıl (D 8) işig küçüg birmiş. İlgärü kün tugsıkka, Bükli kaganka tägi süläyü birmiş, kur(ı)garu Tämir Kapıgka < tägi > süläyü birmiş. Tabgaç kaganka ilin törösin alı birmiş. Türük kara kamag bodun ança timiş: "İllig bodun [ärtim; ilim amtı kanı? Kämkä ilig kazganur män?" tir ärmiş]. (D 9) "Kaganlıg bodun ärtim; kaganım kanı? Nä kaganka işig küçüg birür män?" tir ärmiş. Ança tip Tabgaç kaganka yagı bolmış. Yag...
  - `Tekin 2003, s. 175` (eslesen: _TaBGaÇ KaGaNKA_)
    > ...ne) bağımlı kılmışlar" (KT D 2) *süŋüglüg kantan käl-ipän sürä eltdi* "Mızraklı (düşman) nereden gelip (seni yerinden yurdundan) sürdü?" (KT D 23) *süŋüg batımi karıg sök-üpän...* "Mızrak boyu karları sökerek..." BK D 26) *tabgaçgı bäglär tabgaç ātin tut-upan tabgaç kaganka körmiş* "Çinlilerin (hizmetine giren Türk) beyleri Çin unvanları alarak Çin imparatoruna tabi olmuşlar" (KT D 7-8) *säläŋä kudı yorı-pan...* "Selenga ırmağı boyunca aşağı yürüyüp..." (BK D 37) *kara kanka bar-ıpan yalabaç bar-ıpan kälmädiŋiz bägimiz* "Kara Ha...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ KaGaNKA_)
    > ...in üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarla...
  - `Ata 2011, s. 47` (eslesen: _İLİN TÖRÜSİN_)
    > ...2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğulların...
  - `Ata 2011, s. 44` (eslesen: _TaBGaÇ KaGaNKA_)
    > ...ürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümdarlar...


## KT-D-8#5 - Kül Tigin Yazıtı, Doğu 8. satir  (3 kelime)

- **transkripsiyon:** `TÜRK : KaRA : KaMaG`
- **kelime karsiliklari:** TÜRK : KARA : KAMAG
- **kanit:**
  - `Olmez 2017, s. 22` (eslesen: _TÜRK KaRA KaMaG_)
    > ...en kötülüğü orada düşünürlermiş." (KT G 4-5). Çin yönetimi boyunduruğu altına aldığı Türkleri kullanarak Mançurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı...
  - `Tekin 1998, s. 22` (eslesen: _KaRA KaMaG_)
    > ...âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, y...
  - `Tekin 2003, s. 127` (eslesen: _KaRA KaMaG_)
    > ...56-57) 2. *kamag* "her şey": *kamag üzä yaruk boltı* "Her şeyin üzeri aydınlık oldu" (IB 26) *kara bulıt yorıdı kamag üzä yagdı* "Bir kara bulut geçti ve her şeyin üzerine (yağmur) yağdı" (IB 53) Belirsizlik zamiri *kamag* sıfat olarak da kullanılır: *türük kara kamag bodun* "Bütün Türk avam tabakası" (KT D 8, BK D 8) 3. *kamagı* "hepsi" < *kamag+ı*: *kamagı yeti yüz är bolmiş* "Hepsi yedi yüz kişi olmuş" (KT D 12-13, BK D 11) --- (Sayfa kenarında el yazısı not/mühür: "Hasan Bey TABRİZ" — kitap içeriği değil.) [s. 128]...
  - `Ata 2011, s. 177` (eslesen: _KaRA KaMaG_)
    > ...ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış cümlesinde sıfat-fiil ekinin bulunduğu sözcükler aşağıdakilerden hangi- sidir? a. Içgınu, yitürü b. İlledük, kaganladuk c. Idmış, illedük d. İlin, kaganın e. İlledük, yitürü 7. Kara kamag bodun ifadesindeki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. sorular aşağıdaki cümleye göre cevaplandırılacaktı...
  - `Ata 2011, s. 170` (eslesen: _KaRA KaMaG_)
    > ...[s. 170] 6. Türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış cümlesinde sıfat-fiil ekinin bulunduğu sözcükler aşağıdakilerden hangisidir? a. Içgınu, yitürü b. İlledük, kaganladuk c. Idmış, illedük d. İlin, kaganın e. İlledük, yitürü 7. Kara kamag bodun ifadesindeki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. [[s. 170]] sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg bir...
  - `Ogel C1, s. 384` (eslesen: _TÜRK KaRA_)
    > ...mli bir yer almıştı. Bu sebeple Ebülgazi Bahadır Han zamanında, artık Nuh Peygamber ile soylarının Türk destanlarının baş kısımlarını kaplar görüyoruz. Buna rağmen, Ebülgazi Bahadır Han'ın istifade ettiği Oğuz-nâme'ler İslâmiyetin tesirleri altında ezilmiş ve Türk karakterlerini kaybetmiş değillerdi. Gerçi bu Oğuz-nâme'ler Türkleri Nuh ve Yafes'in nesillerinden getiriyorlardı. [[s. 384]] Fakat bunu yaparken de, Tevrat'daki türeyiş (Genesis) bölümlerini kendilerine göre değiştiriyorlar ve Türklere birinci derecede önem verme...


## KT-D-9#1 - Kül Tigin Yazıtı, Doğu 9. satir  (3 kelime)

- **transkripsiyon:** `BODuN : aNÇA : TİMiŞ`
- **kelime karsiliklari:** BOYLARI : ANCA : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BODuN aNÇA TİMiŞ_)
    > ...gı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]]...
  - `Tekin 2003, s. 209` (eslesen: _BODuN aNÇA TİMiŞ_)
    > ...K D 31) - *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Orada kalmış olanlarınız her yöne doğru (gitgide) zayıflayarak ve ölerek yürüyor idiniz" (KT G 9), vb. 5. Özne ad öbeği: - *bodun boguzi tok ärti* "Halkın boğazı tok idi" (T 8) - *türük kara kamag bodun / ança timiş* "Türk avam tabakası şöyle demiş" (KT D 8-9), vb. 6. Özne yüklemli bir yapı (cümle): [s. 210] # s. 210 — TALAT TEKİN *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş / idi yok ärmiş* "Türk halkının Demir Kapı'ya ve Tensi oğlu (Tanrı oğlu) denilen...
  - `Olmez 2017, s. 22` (eslesen: _BODuN aNÇA_)
    > ...a düşünürlermiş." (KT G 4-5). Çin yönetimi boyunduruğu altına aldığı Türkleri kullanarak Mançurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşü...
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...
  - `Tekin 2003, s. 73` (eslesen: _BODuN_)
    > ...ga* "ağıma" (Hem.-Çır. 9) - *artımga* "ardıma" (Hem.-Çır. 10), vb.; fakat *yaşımka* "yaşımda" (BK D 15), *ataçımka* "babacığıma" (Uybat III 14), *oglumka* "oğullarıma" (Barık III 4), vb. 6. /nk/ > /ng/: - *kagangı* "hakanınki" (Tar. B 5) < **kagankı*; fakat *bodunkı* "boylarınki" (Tar. B 5), *biryäki* "güneydeki", *kuryakı* "batıdaki", *yıryakı* "kuzeydeki", *öŋräki* "doğudaki" (T 17), *bärüki* "berideki" (T 46), vb. 7. /lk/ > /lg/: - *çölgi* "bozkırdaki" (T 23) < **çölki*; fakat *tabgaçgı* (KT D 7) ve *[tab]gaçgı* "Ç...
  - `Ata 2011, s. 47` (eslesen: _BODuN_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış....


## KT-D-9#2 - Kül Tigin Yazıtı, Doğu 9. satir  (3 kelime)

- **transkripsiyon:** `İLLiG : BODuN : eRTiM`
- **kelime karsiliklari:** İLLİ : BOYLAR : İDİM
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _İLLiG BODuN eRTiM_)
    > ...tın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ bir...
  - `Ata 2011, s. 119` (eslesen: _İLLiG BODuN eRTiM_)
    > ...abılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç duru...
  - `Ata 2011, s. 112` (eslesen: _İLLiG BODuN eRTiM_)
    > ...ledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almı...
