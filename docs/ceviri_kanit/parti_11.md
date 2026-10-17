# Ceviri istek paketi 11 - Orhun cumlecikleri

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


## KT-D-39#4 - Kül Tigin Yazıtı, Doğu 39. satir  (3 kelime)

- **transkripsiyon:** `BİZiŊ : SÜ : aTI`
- **kelime karsiliklari:** BİZİM : SÜ : ATI
- **kanit:**
  - `Tekin 2003, s. 120` (eslesen: _BİZiŊ SÜ aTI_)
    > ...acaksınız?" (KT G 11, BK K 8) 2. İlgi durumu (sıfat olarak): *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *mäniŋ sabımın sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öl...
  - `Tekin 2003, s. 106` (eslesen: _BİZiŊ SÜ_)
    > ...zamanını bildiren zarf tümleci olur: - *ötükän yiş olorsar...* "Ötüken dağlarında oturursanız..." (KT G 8) - *türük bodun üçün tün udımadım...* "Türk halkı için gece uyumadım..." (KT D 27) 6. Üçüncü kişi iyelik eki almış bir adın iyelik niteleyicisi olur: - *biziŋ sü at-i* "bizim ordu(nun) atları" (KT D 39) - *türük āt-in ı(t)tı* "(Türk beyleri) Türk unvanlarını bıraktılar" (KT D 7) - *bäglärim bodunum köz-i kaş-i* "Beylerim(in) ve halkım(ın) gözleri ve kaşları" (KT K 11) ##### İlgi Durumu **255.** İlgi durumu eki ünsüz...
  - `Tekin 1998, s. 26` (eslesen: _SÜ aTI_)
    > ...ı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |...
  - `Ogel C2, s. 418` (eslesen: _SÜ aTI_)
    > ...kanşamanlar ile güveyiler de Türklerde, halı üzerinde taşınırdı'' DİĞER MOTİFLER 1) “Ayna ”nındeniz elması:Anadolu'da da ayna, bir tehlikeden kurtulmak için kullanılan bir sihir aracı olarak görülür", Anado- 1 u “da, daha çok devlerden kurtulmak için, biraz su atılır ve arada bir deniz oluşturulurdu. Çingiz Han'ın en küçük oğlunun adı, Toluy, yani ayn a idi. [[s. 418]] Bu da bize geleneklerde, aynanın önemini göstermektedir. Bir Kırgız destanında, *““Dudar-kız'ı bir dev kovalıyor. Dudar-kız, arkasına bir ayna atıyor v...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 86` (eslesen: _SÜ aTI_)
    > ...e tut < umudu Tanrıya tut", >! onunç* » öğ onunç yarmak < onuncu para", Başka şeyler için do böyle denir. [[y. 86]] | ınanç: Güvenilen, inanılan, Buradan alınarak UInanç Beg" denir ki "inanılan, itimad edilen Bey" demektir. ÜZERİNE OLANIN BİR BAŞKA TÜRLÜSÜ atınçu: " & #l atınçu nenğ > atılan nesne", itinçü: mek itingü nenğ - itilen nesne", 3! adhınçur " SEN ıdhınçu saç - erkeğin son- (4) Bu kelime basma 3 shada yukarıda gördüğünüz imlada ise de, yazma nüshada İ şeklindedir. [[y. 86]] ,dlin altındaki esre hareke...
  - `05_Ceren_Sungur_Samanizm_ve_Islam, s. 100` (eslesen: _SÜ aTI_)
    > ...r gördüğü yer."86 Cin veya yardımcı bir ruhun çarptığı kişi eş lig'dir ve eş kökünden gelir. Cin çarpmasının izi kovuç'tur (Oğuz lehçesinde kovuz). Kaş- . gari, cin çarpan kişinin nasıl tedavi edildiği hakkında şun ları söyler: "Cin çarpan adamın yüzüne soğuk su atılır ve ko vuç kovuç denir. Daha sonra sedefotu ve ödağacıyla tütsülenir. [[s. 100]] Bence bu, Türklerin 'git cin, kaç cin' anlamında kullandıkları kaç kaç ifadesinden gelir."87 Kaç kaç ifadesinin cinleri kovmak için bugün de kullanılması bu bilgiyi doğrular.88...


## KT-D-39#5 - Kül Tigin Yazıtı, Doğu 39. satir  (4 kelime)

- **transkripsiyon:** `TORUK : aZUKI : YOK : eRTİ`
- **kelime karsiliklari:** TORUK : AZIĞI : YOK : İDİ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _TORUK aZUKI YOK eRTİ_)
    > ...nın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki...
  - `Tekin 2003, s. 120` (eslesen: _TORUK aZUKI YOK_)
    > ...KT G 11, BK K 8) 2. İlgi durumu (sıfat olarak): *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *mäniŋ sabımın sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, deri...
  - `Tekin 1998, s. 12` (eslesen: _TORUK_)
    > ...acıkacağını doyacağını düşünmezsin; bir doyarsan (bir daha) acıkacağını düşünmezsin' (KT G 8). Bu cümle âç tosık ömez, tok âçsık ömez “Aç doyacağını düşünmez (sanmaz), tok acıkacağını düşünmez (sanmaz)” gibi bir atasözü üzerine kurulmuş olmalıdır. [[s. 12]] Toruk bükalı semiz bükalı ırakda bilser, semiz büka toruk buka teyin bilmez ermiş “(İnsan) zayıf boğalarla semiz boğaları uzaktan bilmek zorunda kalsa (hangilerinin) semiz (hangilerinin) zayıf olduğunu bilmez imiş” (T I B 5-6). Bu cümle, sonuna ermiş “imiş” sözcüğü...
  - `Tekin 2003, s. 45` (eslesen: _TORUK_)
    > ...dan belli olmamakla birlikte şu sözcüklerdeki ünlünün de uzun olduğu söylenebilir: *on* [ōn] "10" (KT K 7), *ot* [ōt] "ateş" (KT D 27), *bol-* [bōl-] "olmak" (KT D 7), *ton* [tōn] "giysi, elbise" (KT D 26), *tor-* "bitap düşmek, zayıflamak" (KT G 9, BK K 7), *toruk* "zayıf" (T 5, 6), *tor(u)g* "doru" (KT D 33), *yol* [yōl] "yol" (KT K 9), vb. [s. 46] # s. 46 — TALAT TEKİN ## /u/ Ünlüsü **50.** Kısa /u/ *uç-* "uçmak, vefat etmek" (KT E 16), *ud-* "kovalamak" (T 41), *ul(u)g* "büyük" (BK G 9), *bul(u)ŋ* "köşe, bucak" (...
  - `Ata 2011, s. 111` (eslesen: _TORUK_)
    > ...ni getiriniz. Birliktelik (Bağlama) Eki Orhun Türkçesinde aynı yapı ve görevde iki sözcük +lI eki ile bağlanır. Bu ek, her iki isme ulanır, ancak durum ekleri ikinci isim üzerine eklenir. toruk buka+lı semiz buka+lı T 5 “zayıf boğalar ve semiz boğalar” beg+li bodun+lı+g KT D6 “beyleri ve boyları” tün+li kün+li BK GD “gece ve gündüz” İsim Durum Ekleri 1. Yalın Durum: Eksizd...
  - `Olmez 2017, s. 15` (eslesen: _TORUK_)
    > ...ttiği gibi, Orhon yazıtlarında dahi bu şekil görülmez (1951, s. 1, 2. dipnot). Konuyla ilgili tartışmalar için Boodberg ile Pulleyblank'e ve orada yer verilen çalışmalara bakılabilir (Boodberg 1951; Pulleyblank 1965). Bildiğimiz en eski biçimi *Türük* ya da *Törük* olan bu etnik adın Macarcadaki biçimi *Török*, eski Rusçadaki biçimi de *Tork*'tur. Bu veriler Türk etnik adının aslının iki heceli *Törük* ya da bunun kısalmış biçimi *Törk* olduğu yolundaki görüşü desteklemektedir. Bu verilere göre *Törük* adı, büyük bir o...


## KT-D-39#6 - Kül Tigin Yazıtı, Doğu 39. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaBLaK : KİŞİ : eR ---`
- **kelime karsiliklari:** YAVLAK : KİŞİ : ER ---
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YaBLaK KİŞİ_)
    > ...n altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle...
  - `Tekin 1998, s. 10` (eslesen: _YaBLaK_)
    > ...devlet ve töreler”, iş küç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eyl...
  - `Tekin 2003, s. 105` (eslesen: _YaBLaK_)
    > ...um ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir so...
  - `Ata 2011, s. 51` (eslesen: _YaBLaK_)
    > ...ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin...
  - `Ata 2011, s. 44` (eslesen: _YaBLaK_)
    > ...ş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganla...
  - `Roux, Eski Turk Mitolojisi, s. 39` (eslesen: _YaBLaK_)
    > ...tedir. Bu sözcük fevkalade ilginçtir, çünkü eski Türklerin mantığına ilişkin bir kitabın başlığında geçmektedir. Bu kitap Irk Bitig'dir, mutlu tesadüfün, şansın kitabı. Kitapta, kehanette bulunulan yazgımn iyi (edgü), fevkalade iyi (anyıg edgü), kötü (yablak veya yabız) ve fevkalade kötü (anyıg yablak) olabileceği belirtilmektedir. Görünen o ki, bu kavram ülüg ile kanştırılmamalıdır. Ülüg de "şans" anlamına gelmektedir, fakat daha çok yazgı anlamında, etkisi daha ziyade metafizik alanında görülen yazgı. —»Man...


## KT-D-40#1 - Kül Tigin Yazıtı, Doğu 40. satir  (4 kelime)

- **transkripsiyon:** `aLP : eR : BİZiŊE : TeGMiŞ`
- **kelime karsiliklari:** ALP : ER : BİZE : DEĞMİŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aLP eR BİZiŊE TeGMiŞ_)
    > ...ikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmi...
  - `Olmez 2017, s. 57` (eslesen: _aLP eR BİZiŊE TeGMiŞ_)
    > ...lmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-sol...
  - `Tekin 1998, s. 10` (eslesen: _aLP eR_)
    > ...r anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi...
  - `Ata 2011, s. 51` (eslesen: _aLP eR_)
    > ...-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋ...
  - `Olmez 2017, s. 56` (eslesen: _aLP eR_)
    > ...ldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam hakan vefat etti." (MÇ K 12); *ėlligig ėlsiretdimiz kaganlıgıg kagansıratdımız* "Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18);...
  - `Roux, Eski Din, s. 184` (eslesen: _aLP eR_)
    > ...ç olmuş olsaydı, bundan oldukça kolay bir şekilde efsaneler doğabilirdi (M. 10). [[s. 184]] Kaşgarlı'nın, ona övgü olarak yazılmış birkaç metinde söz ettiği ve daha sonra Uygur hakanı Buku Han'la veya Şehname'nin İranlı kahramanı Efrasiyab'la özdeş leştirilen Alp Er Tunga adındaki Orta Asya'nın büyük Türk kahramanı hakkında çok az bilgiye sahibiz (Q.91, 1, s. 57 vd.). İsmi genelde "Kahraman Erkek Kaplan" şeklinde algılanmaktadır, ancak Tunga'nın Sibirya panteri olduğuna kuvvetle inanmaktayım. [[s. 184]] En azından kaplan...


## KT-D-40#2 - Kül Tigin Yazıtı, Doğu 40. satir  (9 kelime)

- **transkripsiyon:** `eRTİ : aNTaG : ÖDKE : ÖKüNüP : KÖLTİGiNiG : aZ : eRiN : İRTÜRÜ : ITıMıZ`
- **kelime karsiliklari:** İDİ : ANTAG : DEVİRDE : ÖKÜNÜP : KÜLTİĞİNİ : AZ : ERLE : ÜZE[RİNE] : İTDİK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aNTaG ÖDKE ÖKüNüP_)
    > ...era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürt...
  - `Tekin 2003, s. 134` (eslesen: _İRTÜRÜ_)
    > ...a* "biraz", *azkıńa* "pek az, azıcık", *üküş* "pek çok". Belirsizlik sayıları niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk halkı ilerliyor imiş" (T 9-10) *ulug irkin azkıńa ärin täzip bardı* "Ulug İ...
  - `Tasagil, s. 14` (eslesen: _ÖKüNüP_)
    > ...sı 1893 yılında vuku bul muştur (W.Thomsen, L'Inscriptions de l'Orkhon dechifrée, MSFOu, V, 1896) GökTürk ve Türk tarihinin en önemli yazıdan olan bu kitabelerin okunması Gök-Türk araştırmalarında yeni bir çığır açmıştır. [[s. 14]] Yazıtlardaki özel isimlerin okunup, açığa çıkmasıyla, bir çok Çince ismin, unvanın Türkçe karşılığını tesbİt etmek mümkün olmuştur. Ayrıca II. Gök-Türk devleti dönemiyle ilgili teferruatlı malumat elde [s. 15] A H M E T T AŞ AĞIL edilmiştir. Bundan birkaç yd sonra Gök-Türk deyimi ilk defa kul...
  - `Ogel C1, s. 37` (eslesen: _ÖKüNüP_)
    > ...i de, bu denizin Çin'in batısındaki Kuku-Nor gölü olduğunu söylemişlerdir. Bazı Türkler de bu fikri benimsemişlerdir. KukuNor, Tibet kavimlerinin ana vatanı idi. Bu bölgeye belki de, ne bir Hun ve nede Türk ayağı basmıştı. Maalesef efsane, şimdiye kadar iyice okunup değerlendirilmemiştir. [[s. 37]] Efsane de gayet açık olarak okunuyor: Düşman askerleri gelince kurt, “Denizin doğusu” ndaki bir dağa kaçmıştır. Bu dağ da, Turfan'ın kuzey batısında bulunuyordu. Bundan da anlaşılıyor ki bu denizin Aral veya Balkaş Gölü olması...
  - `Kafesoglu, s. 118` (eslesen: _ÖKüNüP_)
    > ...meni ve Süryanî kaynaklarında Kuzey Kafkasya'da gösterilmişlerdir, hattâ buraya "Patria Onoguria" (On-ogurlann yurdu) denilmiştir (700'ler). 8. asnn ilk yansında da Azak denizine doğru yayıldıkları görülüyor849. [[s. 118]] İslâm kaynaklarındaki, bilmece gibi, okunup açıklanması güç "V.n.ndr, V.I.ndr, vb." adlı kavmin850 bunlar olması lâzımdır (On ogundur=On-oğur)851. 630'da Orta Asya'da Gök-Türk imparatorluğunun fetret devresine girmesi üzerine, Hazarlar gibi Bulgarlar da idareyi kendi ellerine alarak "Büyük Bulgar" devl...
  - `Radloff, s. 330` (eslesen: _ÖKüNüP_)
    > ...verdiler. Hasta yine tuğ etrafında dolaşmağa başladı. [[s. 330]] Bakşı bir avuç samanı mumun ateşiyle yakıp hastaya vurup beyaz tavuğu etrafında dolaştırdi. Bununla ayi nin birinci kısmı tamam oldu. Hastayı yatağa yatırdılar. Bakşının yerine oğlu geçti. Tuğa dokunup dua okudu ve yü zünü sildi. Kıpkırmızı kızgın demire yalın ayak on beş defa ba sıp ayaklarını hastaya dokundurdu. Sonra topallayarak bir tara fa gitti... Bakşının kendisi ayine devam etti. Tuğ etrafında iki genç gayet güzel dans etmeğe başladılar. [[s. 330]]...


## KT-D-40#3 - Kül Tigin Yazıtı, Doğu 40. satir  (3 kelime)

- **transkripsiyon:** `ULuG : SÜŊüŞ : SÜŊüŞMüŞ`
- **kelime karsiliklari:** ULU : SÜNGÜŞ : SÜNGÜŞMÜŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _ULuG SÜŊüŞ_)
    > ...çe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla...
  - `Tekin 2003, s. 130` (eslesen: _ULuG SÜŊüŞ_)
    > ...larak: *bir ärig sançdı* "(Prens Kül) bir adamı mızrakladı" (KT K 5) *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) *eki ülügi atlıg ärti bir ülügi yadag ärti* "Onların üçte ikisi (*harf.* iki kısmı) atlı idi, üçte biri (*harf.* bir kısmı) piyade idi" (T 4) *eki ulug süŋüş* "İki büyük savaş" (BK D 34) *üç otuz balık* "yirmi üç şehir" (T 19) *yeti yüz* "700" (T 4) *eki bıŋ* "2000" (T 16, 18) Aşağıdaki üç örnekte asıl sayılar ile bunların nitelediği isim arasında sayıca uygunluk vardır: *tokuz ärän* "dokuz adam" (KT K 9) *yeti ä...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞ_)
    > ...Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmi...
  - `Tekin 2003, s. 32` (eslesen: _SÜŊüŞ_)
    > ...eki /ş/ ünsüzü: - /kIsI/ *kişi* (genellikle) ~ *kişi* (KT G 7, BK D 28, 34, vb.) - /bIs/ *biş* "5" (genellikle) ~ *biş* (KT K 4, D 18) - /ükÜs/ *üküş* "çok" (KT G 6) ~ *üküş* (genellikle) - /kÜms/ *küm(ü)ş* "gümüş" (BK G 11) ~ *küm(ü)ş* (genellikle) - /sÜŋs/ *süŋüş* "savaş" (KT D 15) ~ *süŋ(ü)ş* (genellikle) Geçmiş zaman sıfat-fiili eki {-mIş} Bilge Kağan yazıtında genellikle /ş/ harfi ile, fakat Kül Tigin yazıtı ile öbür runik metinlerde ön /s/ harfi ile yazılmıştır. Bu yazım {-mIş} ekinin Orhon Türkçesinde genellikle...
  - `Ata 2011, s. 4` (eslesen: _SÜŊüŞ_)
    > ...1. Baskı Bu kitap ANADOLU ÜNİVERSİTESİ Web-Ofset Tesislerinde 17.100 adet basılmıştır. ESKİŞEHİR, Eylül 2011 [s. 4] 1. ÜNİTE İçindekiler 2. ÜNİTE 3. ÜNİTE Sunuş ……………...……………………………………………………. vii Türk Diline Giriş ……..…..……………………………………………. 2 YAPILARI BAKIMINDAN DİLLER ……….………………………….. 3 URAL ALTAY DİL AİLESİ …….…….………...……………………… 4 Ural-Altay Dil Ailesi ……………….………..…...
  - `Olmez 2017, s. 5` (eslesen: _SÜŊüŞ_)
    > .... Şti. kuruluşudur. [s. 2] # s. 002 — KÖKTÜRKÇE VE ESKİ UYGURCA DERSLERİ (İç Başlık) # KÖKTÜRKÇE ## VE # ESKİ UYGURCA DERSLERİ **PROF. DR. MEHMET ÖLMEZ** İstanbul, 2017 **KESİT** [s. 5] # s. 003 — İçindekiler (basılı sayfa numarası 5) ## İçindekiler - Sunuş • 7 - Önsöz • 9 - **I. BÖLÜM • 11** - Köktürkçe Dersleri • 11 - Eski Türk Yazıtlarından Önce Türklere ve Hunlara Ait Bilgiler • 11 - İlk Türk Devleti: I. (Doğu) Türk Kağanlığı • 13 - İlk Türk Kağanlığından Kalma Yazıtlar • 15 - Türklerden Kalma Bili...


## KT-D-40#4 - Kül Tigin Yazıtı, Doğu 40. satir  (6 kelime)

- **transkripsiyon:** `aLP : ŞaLÇI : aK : aTIN : BİNiP : TeGMiŞ`
- **kelime karsiliklari:** ALP : ŞALÇI : AK : ATINA : BİNİP : [YAĞIYA] DEĞMİŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aLP ŞaLÇI aK aTIN BİNiP TeGMiŞ_)
    > ...ledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bi...
  - `Ergin 1970, s. 19` (eslesen: _aLP ŞaLÇI aK aTIN_)
    > ...sonra Türgiş avam halkı düşman olmuş. Kengerise doğru gitti. Bizim askerin atı zayıf, azığı yok idi. Kötü kimse er.......... | kahraman er bize hücum etmişti. Öyle bir zamanda pişman olup Kül Tigini az erle eriştirip gönderdik. Büyük savaş savaşmış. [[s. 19]] Alp Şalçı ak atına binip hücum etmiş. Türgiş avam halkını orda öldürmüş, yenmiş. Tekrar yürüyüp....... Kuzey cephesi ......... ile, Koşu vali ile savaşmış. Askerini hep [s. 20] öldürmüş. Evini, malını eksiksiz hep getirdi. Kül Tigin yirmi yedi yaşına gelince Karluk kavmi hür...
  - `Tekin 2003, s. 252` (eslesen: _aLP ŞaLÇI_)
    > ...süŋülüg** mızraklı asker - **süŋüş** savaş - **süŋüş-** savaşmak [s. 252] # s. 252 — TALAT TEKİN (basılı sayfa numarası 253) *(Kitap s. 253)* - **sür-** sürmek - **Şad** yüksek bir unvan (bk. **Çad**) - **Şadapıt** yüksek bir unvan - **Şalçı** kişi adı (**Alp Şalçı**) - **Şantuŋ** yer adı (Şantung ovası) - **Şıp** yer adı (MÇ D 3, 4) - **tabar** davar (MÇ G 5) - **Tabar** yer adı (Tabaristan) - **Tabgaç** Çin, Çinli - **tabılku** bitki adı (*Spiraea*, *spiraea altaica*) (IB 32, 32) - **tabışgan** tavşan (T 8, IB 44) -...
  - `Ogel C2, s. 150` (eslesen: _aK aTIN_)
    > ...türledi, yani çiçek açtı, demektir?. [[s. 150]] Mitolojideisebusöz,birdon değiştirm eolarak görülür: “* Er - kem Aydar, büyük toya, düğüne vardı, özü değişti (özü türlöndü), kendisi kötü bir kel olup (özü caman taşşa bolup), atı ise kel ve uyuz, doru bir kısrak (atın kotur küröng) olup, toya karıştı*”” Yiğid önce, “özü türleniyer” ve ondan sonra da, kel (taşşa) oluyordu. 1 Raditof, Pörterbuch, TI, e. 1039. ? Yudahin, Kırgız Sözlüğü, (tercüme), 3. SIS. *Radlof, ayaıeser, İll, 6. 1040. 3 Radlof, aynı eser, ll, 6. 1555....
  - `Kafesoglu, s. 131` (eslesen: _aK aTIN_)
    > ...ahalara hükmedebilmeleri, sür'at bakımından atın sağladığı üstünlük yanında, vurucu silâh olarak demir âlet ve vasıtalarının onlar tarafından geniş ölçüde kullanılmış olması ile açıklanabilir. [[s. 131]] İlk tarihî Türk imparatorluğunu kuran Asya Hunlanmn, ancak atın sür'ati ve demirin vurucu gücünün bir arada değerlendirilmesi ile anlaşılması mümkün bu başarılan, herhalde daha önceleri aynı sahadaki imkânlar ile desteklenmiş olmalıdır50. Nitekim M.Ö. 1. bin olarak tarihlenen Kargalı kurganının (Tanrı Dağlan'nda) 1. katın...
  - `Radloff, s. 65` (eslesen: _aK aTIN_)
    > ...yanındakiler, hepiniz de bakınız! [s. 65] Taskak yanındakiler, hepiniz de bakınız! Atın yanındakiler, hepiniz de bakınız! Kulun ipi yanındakiler hepiniz de bakınız! Ungay gak gak, ungay gak! Ey beygire binen kimse Buraya iyi geldin mi? Ungay gak gak, ungay gak! Atın başını çeken hizmetçi, Buraya sağ salim eriştin mi? Ungay gak gak, ungay gak! Şimdi kaz iyi hizmet ederek pura ile Baştutkan'ın peşinden yetiştiği için, şaman onu, şu şarkıyı söyleyerek serbest bırakır: Ey kaz, şimdi süt gölünden iç! [[s. 65]] Sürö dağında yi...


## KT-D-40#5 - Kül Tigin Yazıtı, Doğu 40. satir  (5 kelime)

- **transkripsiyon:** `KaRA : TÜRGiŞ : BODuNuG : aNDA : ÖLüRMüŞ`
- **kelime karsiliklari:** KARA : TÜRGİŞ : BOYLARINI : [O] ANDA : ÖLDÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KaRA TÜRGiŞ BODuNuG_)
    > ...bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ....
  - `Tekin 2003, s. 149` (eslesen: _KaRA TÜRGiŞ BODuNuG_)
    > ...adok yana içikmiş* “Düşman olmuş, (fakat) kendini düzene sokup (iyi) örgütlenememiş, yine (Çinlilere) bağımlı olmuş” (KT D 10) - *kanin kodup tabgaçka yana içikdi* “Hanını bırakıp Çin’e yeniden bağımlı oldu” (T 2) [s. 149] # s. 149 — ORHON TÜRKÇESİ GRAMERİ *kara türgiş bodunug anta ölürmiş almış yana yorıp...* “Türgiş avam halkını orada öldürmüş, almış. Yine yürüyüp...” (KT D 40), vb. Öbür sayı zarfları *ekinti* “ikinci olarak”, *üçünç* “üçüncü olarak” vb. için bk. **Sıra Sayıları**. ## Soru Zarfları **346.** Çok eski *\*ka* sor...
  - `Tekin 2003, s. 144` (eslesen: _KaRA TÜRGiŞ_)
    > ...< ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop ölgäli törümiş* "İnsan oğlu hep ölümlü yaratılmış" (KT K 10) [s. 145] # s. 145 — ORHON TÜRKÇESİ GRAMERİ *k...
  - `Kafesoglu, s. 72` (eslesen: _KaRA TÜRGiŞ_)
    > ...r, Türgi-yargın gölü savaşında bozguna uğratıldı380. 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıl...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...


## KT-D-40#6 - Kül Tigin Yazıtı, Doğu 40. satir  (3 kelime)

- **transkripsiyon:** `aLMıŞ : YaNA : YORıP`
- **kelime karsiliklari:** ALMIŞ : YANA : YÜRÜYÜP
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aLMıŞ YaNA YORıP_)
    > ...ardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini...
  - `Tekin 2003, s. 149` (eslesen: _aLMıŞ YaNA YORıP_)
    > ...(fakat) kendini düzene sokup (iyi) örgütlenememiş, yine (Çinlilere) bağımlı olmuş” (KT D 10) - *kanin kodup tabgaçka yana içikdi* “Hanını bırakıp Çin’e yeniden bağımlı oldu” (T 2) [s. 149] # s. 149 — ORHON TÜRKÇESİ GRAMERİ *kara türgiş bodunug anta ölürmiş almış yana yorıp...* “Türgiş avam halkını orada öldürmüş, almış. Yine yürüyüp...” (KT D 40), vb. Öbür sayı zarfları *ekinti* “ikinci olarak”, *üçünç* “üçüncü olarak” vb. için bk. **Sıra Sayıları**. ## Soru Zarfları **346.** Çok eski *\*ka* soru zamirinden türemiş olan *kaç...
  - `Tekin 1998, s. 11` (eslesen: _aLMıŞ_)
    > ...çiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi...
  - `Ergin 1970, s. 5` (eslesen: _aLMıŞ_)
    > ...an 716'da ölünce idareyi onun oğulları almak istedi. [[s. 5]] Fakat Bilge ve Kül Tigin kardeşler buna mani olarak ve amcazâdelerini tasfiye ederek babalarının devletine el koydular ve Bilge Kağan hükümdar oldu. İki kardeş babalarının ve amcalarının devrinden kalmış ihtiyar vezir ve Bilge Kağan'ın kayınpederi Tonyukuk'un da yardımiyle devleti daha da kuvvetlendirdiler. Sonra 731'de Kül Tigin, 734'te de Bilge Kağan öldü. [[s. 5]] Bilge Kağan'ın ölümünden 10 sene kadar sonra da Uygurlar, devleti ele geçirerek 745'te Göktür...
  - `Tekin 2003, s. 50` (eslesen: _aLMıŞ_)
    > ...şak* "yumuşak" (KT G 5) - /yIşKA/ *yişka* (KT D 1, 37) < **yışka* - /yIşDA/ *yişda* (KT G 4, D 35) ~ *yışda* (T 31, 32) - /yIşG/ *yiş(i)g* (KT D 21, 35; BK D 27, 27) ~ *yış(i)g* (T 28, 35, 37) Öndamaksıllaşma sonucu uyumdan çıkma tekil 1. kişi gönüllülük eki almış sözcüklerde de görülür: *ay-ayin* (T 32), *ay(ı)t-ayin* (BK D 41), *kon-ayin* (KT G 7), *[ko]n-ayin* (BK K 5), *kış-ayin* (T 5), *ıdma-yin* (BK D 33), *ur(u)gs(ı)rat-ayin* (KT D 10), *yoglat-ayin* (T 31), vb. Tekil 1. kişi gönüllülük eki Uygur ve Yenisey yaz...
  - `Ata 2011, s. 20` (eslesen: _aLMıŞ_)
    > ...laştırmalı çalışmalarla incelemiştir. Ayrıca onun Volga Kendilerinden yadigâr Bulgarcası’ndan Macarca’ya geçen sözcükleri tespit ettiği çalışması da olarak 100 kadar mezar önemlidir. Julius Gyula Németh ise önceleri Türk ve Moğol akrabalığına anıtı kalmıştır. Anıt şüphe ile bakarken daha sonra Altay dillerini dört devrede ele almıştır: taşlardan anlaşıldığına göre, /r/ dili 1. Soy akrabalığı konuşuyorlardı ve bugünkü Çuvaşlarla 2. Karşılıklı Çuvaş-Moğol tesirleri devresi akra...


## KT-K-1#1 - Kül Tigin Yazıtı, Kuzey 1. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : BİRLE : KOŞU : TUTuK : BİRLE : SÜŊüŞMüŞ`
- **kelime karsiliklari:** --- : İLE : KOŞU : TUTUK : İLE : SÜNGÜŞMÜŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _BİRLE KOŞU_)
    > ...kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 280` (eslesen: _BİRLE KOŞU_)
    > ...r ol yagıdın kutulgan - bu adam daima duşmandan kurtulan kişidir". [[y. 280]] Başka şeyden kurtulmak ta böyledir. LZ kapulganı " 9 LAZ UĞİUİK), bu neng 01 kapugda kapulgan - bu,daima kapıda sıe ey Ea da böyledir. oi koşulgan: "İ WNZİLİLİİ g3 bu kuzı ol seglık birle koşulgan - bu, daima sağdılan koyuna koşulan, katılan kuzu» Başkası da böyledir. 3Uli, 8ogulgen: » ole rak sogulgan - bu su her zaman çabukça toprağa soğulan bir sudur", Pınar, suyunu sorarsa yine LE Lİ ol. [[y. 280]] 03 kaklıgan sokulganı » 9 43” UY, bu er ol tel...
  - `Tekin 1998, s. 10` (eslesen: _BİRLE_)
    > ...yok olmak”, tir- kubrat- “derlemek ve toplamak”, yahgıl- yazın- “yanılmak ve hata etmek” vb. gibi. 5.2. Koşutluk Koşutluk, yani parallelism, Orhon yazıtları dilinin tipik özelliklerinden biridir. [[s. 10]] Eşit öğeli birimlerden oluşan cümle parçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bil...
  - `Ergin 1970, s. 37` (eslesen: _BİRLE_)
    > ...n hücum et; ben kuzey taraftan hücum edeyim; Türk Sir milleti, yerinde hiç yürümesin; mümkünse hep yok edelim. [[s. 37]] O sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım gelmedi. Ondan sonra kağanıma arz ettim. Şöyle arz ettim: Çin, Oğuz, Kıtay bu üçü birleşirse | kala kalacağız. Kendi içi dıştan tutulmuş gibiyiz. Yufka olanın delinmesi kolay imiş, ince olanı kırmak kolay. Yufka kalın olsa delinmesi zor imiş. İnce | yoğun olsa kırmak zor imiş. Doğuda Kıtaydan, güneyde Çinden, batıda batılılardan, kuzeyde Oğuzdan...
  - `Tekin 2003, s. 5` (eslesen: _BİRLE_)
    > ...Ön /s/ Harfi — 32 - Ön /y/ Harfi — 32 - /UK, KU/ Hece İşareti — 33 - /Ük, kÜ/ Hece İşareti — 34 - /ıK, Kı/ Hece İşareti — 35 - /iç, çi/ Hece İşareti — 36 - /Aş/ Hece İşareti — 36 - /baş/ Hece İşareti — 37 - /çi/ Birleşik Harfi — 37 - /ot/ Hece İşareti — 37 - /Up/ Hece İşareti — 37 - /däm/ Hece İşareti — 38 - /kış/ Hece İşareti — 38 - Çift Ünsüz İşaretleri — 38 - /LT/ Çift Ünsüz İşareti — 38 - /nt/ Çift Ünsüz İşareti — 39...
  - `Ata 2011, s. 6` (eslesen: _BİRLE_)
    > ...zi Sınayalım Yanıt Anahtarı ……………….…….……..……… 122 Sıra Sizde Yanıt Anahtarı …………….…………..……….……..……… 122 Yararlanılan Kaynaklar …………………………..……….……..……… 123 Orhun Türkçesi Grameri-III Fiil-Sıfat-Filler-Zarf-Fiiller- Birleşik Filler …………………………….……………….…….…….... 124 FİİL ……………..……………………….………….…..……………….. 125 Fiil Çekim Ekleri ……………….…………………………………..…… 125 1. Zaman ve Kip Çekimlerinde Kullanılan Kişi Ekleri ………...……. 125 2. Zam...


## KT-K-1#2 - Kül Tigin Yazıtı, Kuzey 1. satir  (3 kelime)

- **transkripsiyon:** `eRİN : KOP : ÖLÜRMüŞ`
- **kelime karsiliklari:** ERİNİ : HEP : ÖLDÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _eRİN KOP_)
    > ...bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik...
  - `Ogel C1, s. 204` (eslesen: _eRİN KOP_)
    > ...eri ile ilgili bölümümüzde de söylediğimiz gibi, Çin'de ve Habeşistan'da, erkekler köpek, kadınlar ise, muhakkak insan olarak gösterilmiştir. Bizi burada ilgilendirenler, daha ziyade Rusya'da ki köpek başlı insanlardır. Danimarka efsaneleri genel olarak Fin'lerin köpek başlı insanlar olduklarını yazar ve 23 Altay Türklerince kutsal sayılan Barak-Batır obası önemlidir (A. İnan, Şamanizm, s. 61. [[s. 204]] Barak-Baba için bk. W. Eberhard, Türkische Volksmârchen, s. 47). Nayman'ların arazisi içinde Bay-Barak-Bâlçirâ adlı bi...
  - `Ogel C2, s. 187` (eslesen: _eRİN KOP_)
    > ...ka yı burcunun 7 yıldızı, birer aç kurt idiler. Küçükayıburcunun 2 atını, kovalayıp, duruyorlardı'. Daha kuzeydeki Türkler, ““ Yedi kardeşi, yedi köp e k olarak düşünmüşlerdi. Zincirlerle Kutup yıldızına bağlanmışlardı. Dönüp duruyorlardı...”Kıyamet,buzincirlerin koptuğu gün olacaktı. Çünkü göğün düzeni, altüst olacaktı. [[s. 187]] Göğün direğinin çevresinde, kaçan ve birbirini kovalayan yıldız kümeleri: Bu düşüncenin, gerçekler ile de, bazı ilişkileri vardır.TeraziveZühr e burçları, mitolojik anlamlarını, Büyük ayı, yan...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 112` (eslesen: _eRİN KOP_)
    > ...dh- e rişdi - o, bana et kurutmakta yardım etti"; (MEŞET SE 5 Skeahrişür - Sa kedhrişmek) , SAS kökreşdi: “SİN Ü bulıtlar kamuğ kök- [[y. 112]] reşdi - bulutlar bütün gürledi, kükredin, * SAKİNİ bogralar kökregdi - aygırlar kişnedi", Savaş meydanında yiğitlerin kopardığı ses dahi buna benzetilerek AE alplar kökreşdi" denir. Şu parçada da gelmiştir : ai AE SES Eye Keldi esin esneyü Kadhka tükel üsneyü Kirdi budun kasnayu (#7 Kara bulıt kökreşür "Esinti eserek geldi; bu,büsbütün kar tipisine benziyordu. Halk titregere...
  - `Tekin 2003, s. 176` (eslesen: _ÖLÜRMüŞ_)
    > ...se kalmadan) geldiler" (MÇ D 3) *antagıŋın üçün igidmiş kaganıŋın sabin al-matin...* "Öyle olduğun için (seni) doyurmuş olan hakanının sözünü dinlemeden (rızasını almadan) her yere gittin" (KT D 8-9) *yämä yıra-matın yagıd[ur är]miş* "Yine çok geçmeden düşman olurmuş" (MÇ D 10) *kalın yagıka kay-matın tägipän...* "Kalabalık düşmana geri dönmeden saldırarak..." (Altınköl I 2) *kamşayu u-matın turur* "hareket edemeden duruyor" (IB 16), vb. ## {-gAlI} Ekli Eylem Zarfı **422.** Bu eylem zarfının iki farklı görevi vardır: 1....
  - `Ogel C1, s. 111` (eslesen: _ÖLÜRMüŞ_)
    > ...ından sarkarmış, “Yaprakların ber biri, at derisi kadarmış, *“Ağacm tepesinden bir usare çıkarmnş, “Köpük, köpük kaynayıp, sarı renkte akarmış! “Bu ağacın yanına, hiç kimse gidemezmiş, “Bundan içenler ise, açlık hissedemezmiş! “Bu sudan içebilen, artık mes'ut olurmuş,, “Her şeye erişirmiş, Tanrıdan kut bulurmuş! [[s. 111]] “İlk insanm atası, burda yaratılvıca, “Hayatı elde edip, tadımı da alınca, “Hemen ağacı görmüş koşup altına gitmiş, “Kanıp bu sudan içmiş, hayatı elde etmiş. “Bu ağacın zirvesi, ta göklere erermiş, “G...


## KT-K-1#3 - Kül Tigin Yazıtı, Kuzey 1. satir  (5 kelime)

- **transkripsiyon:** `eBİN : BaRıMıN : KaLISıZ : KOP : KeLÜRTİ`
- **kelime karsiliklari:** EVİNİ : VARINI : KALISIZ : HEP : GETİRDİ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _eBİN BaRıMıN KaLISıZ KOP KeLÜRTİ_)
    > ...ti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bayırku'ların Ulu İrkin...
  - `Tekin 2003, s. 146` (eslesen: _BaRıMıN KaLISıZ KOP_)
    > ...pek çok” < *\*kālı* “kalan, artık” + *sız*: - *on ok süsi boduni kalısız taşıkmiş* “On Ok ordusu ve halkı geride hiç kimse kalmamasıya sefere çıkmış” (T 30) - *on ok süsi kalısız taşıkdı* “On Ok ordusu geride hiç kimse kalmamasıya sefere çıktı” (T 33) - *äbin barımın kalısız kop kälürti* “Çadırlarını ve mal mülklerini geride hiçbir şey bırakmamasıya getirdiler” (KT K 1), vb. **332.** *kärgäksiz* “gereğinden çok, ziyadesiyle” < *kärgäk +siz*: - *bir tümän agı altun kümüş kärgäksiz kälürti* “On binlerce ipekli kumaş, altın ve gümüşler...
  - `Olmez 2017, s. 51` (eslesen: _BaRıMıN_)
    > ...ırmadı" İkinci kişi iyelik eki almış sözcüklerden sonra: [s. 51] # s. 051 — Köktürkçe Dersleri (basılı sayfa 53) *ėliŋin töröŋin kem artatı [udaçı erti]* "devletini ve yasalarını kim bozabilecekti?" Üçüncü kişi iyelik eki almış sözcüklerden sonra: *evin barımın* "evlerini ve mallarını" *ėlin törösin* "ülkesini, yasalarını" Özellikle 3. kişi belirtme iyelik ekinden sonra belirtme durumu eki almış olan kelimeler transkripsiyonlu metinde birliktelik / beraberlik durumu ile sıkça karıştırılmaktadır. Runik harfli meti...
  - `Tekin 2003, s. 85` (eslesen: _KaLISıZ_)
    > ..."üst giyimi" [s. 85] # s. 85 — ORHON TÜRKÇESİ GRAMERİ - *buŋs(ı)z* "dertsiz, kaygısız, sıkıntısız" (BK K 14, vb.), fakat *buŋusuz* "dertsiz, kaygısız (Barık II 3, Barık III 2) < *buŋ* "dert, sıkıntı" - *idisiz* "sahipsiz" (KT D 20, vb.) < **ēdi* "sahip" - *kalısız* "tümüyle, tamamiyle, artıksız" (KT K 1, vb.) < **kālı* "kalıntı, artık" - *kärgäksiz* "gereksizce, fazlasiyle" (KT K 12, BK G 11) < *kärgäk* "gerek" - *sansız* "sayısız" (BK G 12) < **sān* "sayı" - *ögs(ü)z* "öksüz, anasız" (KT K 9) - *otsuz* "otsuz" (IB 45)...
  - `Ata 2011, s. 120` (eslesen: _KaLISıZ_)
    > ...112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört b...
  - `Olmez 2017, s. 76` (eslesen: _KeLÜRTİ_)
    > ...biliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732)...


## KT-K-1#4 - Kül Tigin Yazıtı, Kuzey 1. satir  (6 kelime)

- **transkripsiyon:** `KÖLTİGiN : YİTİOTuZ : YaŞIŊA : KaRLUK : BODuN : eRÜR`
- **kelime karsiliklari:** KÜLTİĞİN : YEDİOTUZ : YAŞINDA [İKEN] : KARLUK : BOYLARI : ERİR
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _YaŞIŊA KaRLUK BODuN eRÜR_)
    > ...avam halkını orada öldürmüş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk ya...
  - `Tekin 2003, s. 168` (eslesen: _YaŞIŊA KaRLUK BODuN_)
    > ...bek oluşturur: *er-ür bar-ur* (< *er-ür bar-ır*). Bu söz öbeğinin sonuna "olan" anlamındaki *ärkli* (< *\*är-igli*) sıfatı da getirilerek "(serbestçe) gelir gider, (serbestçe) hareket eder" anlamında kalıplaşmış bir söz öbeği oluşturulur: *kül tigin yiti otuz yaşıŋa karluk bodun er-ür bar-ur ärkli yagı boltı* "Prens Kül yirmi yedi yaşında (iken) Karluk halkı (serbestçe) gelir gider (hareket eder) bir düşman oldu" (KT K 1) *otuz artukı bir yaşıma karluk bodun buŋsız [er]-ür bar-ur ärkli yagı boltı* "Otuz bir yaşımda Karluk halkı serbe...
  - `Olmez 2017, s. 64` (eslesen: _KaRLUK BODuN eRÜR_)
    > .... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesi...


## KT-K-1#5 - Kül Tigin Yazıtı, Kuzey 1. satir  (4 kelime)

- **transkripsiyon:** `BaRUR : eKRLİ : YaGI : BOLDI`
- **kelime karsiliklari:** VARIR : ERKLİ : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 15` (eslesen: _BaRUR_)
    > ...di” vb. , 7.2. Ünsüzlerle ilgili yazım kuralları ş 8. Art (kalın) ünsüz işaretleri (B, D, G,K,L, N,R, S,T, Y) art ünlülü sözcüklerdeki, ön (ince) ünsüz işaretleri (b, d, g, k, 1, n, T, s, t, y) ön ünlülü sözcüklerdeki ünsüzlerin yazımında kullanılır: BRUR (barur) “varır, gider”, blrÜr (birür) “verir” vb. gibi. [[s. 15]] 9. Ön ünlülü sözcüklerdeki /s/ ünsüzünü göstermek için kullanılan ince /s/ işareti aynı zamanda ön ünlülü sözcüklerdeki ve -mış/-miş ekindeki /ş/ ünsüzünü göstermek için de kullanılır: kIsI (kişi), b...
  - `Tekin 2003, s. 60` (eslesen: _BaRUR_)
    > ...nlü benzeşmeleri aşağıdaki örneklerde görülür: 1. *antag* "öyle, onun gibi" (KT D 4, 40; BK D 5; T 9, 36) < *antäg* (T 29) < *anı täg 2. *b(i)rd(i)n-yän* "güney tarafından" (T 11) < *birdin yan, *öŋd(ü)n-yän* "doğu tarafından" (T 11) < *öŋdün yan* 3. *erür barur* "(serbestçe) gelir gider, bağımsız" (KT K 1, BK D 29) < *erür barır, *yatu kalur* "yata kalır" (T 19) < *yatu kalır ## Gerileyici Benzeşme **93.** İlk ve orta hecelerin düz-dar ünlüsü izleyen hecenin ya da sözcüğün yuvarlak ünlüsünün etkisi ile yuvarlaklaş...
  - `Olmez 2017, s. 64` (eslesen: _BaRUR_)
    > ...ilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emi...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...
  - `Roux, Eski Din, s. 247` (eslesen: _BOLDI_)
    > ...am gerek ortaçağ sözlüklerinde gerekse Codex Comanicus'ta aynı şekilde yer alnuştır (B. 7, s. 263; B.11, s. 205). [[s. 247]] Halen ölüme uçan ruhun shungkur, sungur şeklinde algılannuş olup olmadığını saptama olanağınuz yok, ancak "öldü" demek yerine shungkur boldi, "sungur haline geldi" deyiminin İslam dinini kabul ettikten sonra bile Batı Türklerinde kullanıldığı görülmektedir (0.8, s. 15). Babür bu deyimi kendi döneminde kullannuştır. Bu deyim sadece büyükler için mi kullanılmaktadır? [[s. 247]] Bu konuda herhangi bi...
  - `Ata 2011, s. 131` (eslesen: _BOLDI_)
    > ...LER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. [s. 131] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gözüm görmez gibi” KT K10...


## KT-K-1#6 - Kül Tigin Yazıtı, Kuzey 1. satir  (4 kelime)

- **transkripsiyon:** `TaMaG : IDUK : BaŞDA : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** TAMAG : IDUK : BAŞTA : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _TaMaG IDUK BaŞDA_)
    > ...26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip op...
  - `Ergin 1970, s. 20` (eslesen: _TaMaG IDUK_)
    > ...vam halkını orda öldürmüş, yenmiş. Tekrar yürüyüp....... Kuzey cephesi ......... ile, Koşu vali ile savaşmış. Askerini hep [s. 20] öldürmüş. Evini, malını eksiksiz hep getirdi. Kül Tigin yirmi yedi yaşına gelince Karluk kavmi hür ve müstakil iken düşman oldu.Tamag Iduk Başta savaştık. | Kül Tigin o savaşta otuz yaşında idi. Alp Şalçı ata binip atılarak hücum etti. İki eri takip edip kovalayarak mızrakladı. Karluku öldürdük, yendik. Az milleti düşman oldu. Kara Gölde savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı atına...
  - `Tekin 2003, s. 252` (eslesen: _TaMaG IDUK_)
    > ...ğ - **tagık-** dağa çıkmak - **takı** dahi, daha; henüz (KT G 3, O 10, IB 33) - **takıgu** tavuk (yıl adı) - **talım** yırtıcı; cesur, cüretkar (IB 3, vb.) - **taloy** deniz, okyanus - **talula-** seçmek (IB 19) - **tām** duvar (KT G-D) - **Tamag** yer adı (**Tamag Iduk Baş**) - **tamgaçı** damgacı, mühürdar, sekreter; bk. **Makaraç**, **Bilgä** - **Tamgan** kişi adı (**Tamgan Tarkan**) - **tamkalıg** damgalı (Açura 6); bk. - **tan** beden, vücut (IB 3) - **taŋ** tan, şafak (IB 26) - **taŋlar-** tan atmak, şafak sökmek (IB 2...
  - `Radloff, s. 249` (eslesen: _TaMaG IDUK_)
    > ...yer-sub basa berti). Bugünkü Şamanist Türk boylarında rastlanan dağ, su (ırmak, göl, pınar), ağaç-orman, kaya kültleri eski Türk yazıt larında "yer-sub" adı altında toplanmıştır. Bununla beraber bu yazıtlarda ıduk (yani mübarek, mukaddes) sıfatıyla zikredilen Tamag ıduk, Iduk Baş gibi dağ, ormanlık yahut su adları geç mektedir. [[s. 249]] Yer-su ruhlarının en önemli mümessili dağdır. Şamanist Türklerde dağ kültü Gök Tanrı kültüyle ilgili bir kült olmuştur. (53) Hunların eski vatanı olan Yeni-si-şan yahut Şan-din-şan sıra dağ...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 229` (eslesen: _TaMaG IDUK_)
    > ...elenge, 78. Semerkant, 156,. 157, 194, 206. Semipalat, 194. Sibirya, 4, 44, 74. Sinop, 199. Sogol, 50. Suriye, 165. Sümerdağı (efsanevi), 130, 132. Sümer-Ula, 52. Sümer-Tayka (efsanevi dağ), 52. Sütgöl, 50, 52, 129, 132. Şambel, 187, 188. Şangdut, 135,___ ___ Tamag-ıduk, 48. Tangnov (bk. [[s. 229]] Tannau), 62. Taşkent, 171, 197. Taştıp, 53. Tayga ormanı, 4, 186, 187, 189. Teye, 54, 56, 58. Tibet, 3, 44, 60, 193. Tobol, 44. Toharistan, 204. Tokrav, 82. Tom, 186. Tonguzka, 7. Tosbay, 124, 126. Tsienşan, 50. Tuhaytı, 180. ' Tu...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...


## KT-K-2#1 - Kül Tigin Yazıtı, Kuzey 2. satir  (5 kelime)

- **transkripsiyon:** `KÖLTİGiN : OL : SÜŊÜŞDE : OTuZ : YAŞaYUR`
- **kelime karsiliklari:** KÜLTİĞİN : O : SÜNGÜŞTE : OTUZ [YAŞINI] : YAŞIYOR
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _OL SÜŊÜŞDE OTuZ YAŞaYUR_)
    > ...ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu....
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 2003, s. 130` (eslesen: _YAŞaYUR_)
    > ...ir zarf tümleci olarak: *ilteriş kagan... tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan ... Çinlilerle on yedi (kez) savaştı, Kıtay ile yedi (kez) savaştı, Oğuzlarla da beş (kez) savaştı" (T 48-49) *kül tigin bir kırk yaşayur ärti* "Prens Kül (o zaman) otuz bir yaşında idi" (KT K 2) *ulug küli çor säkiz on yaşap yok boltı* "Büyük Küli Çor seksen (yıl) yaşayıp yok oldu" (KÇ B 3) *bir todsar āçsık ömäz sän* "bir (de) doyarsan (yine) acıkacağını düşünmezsin" (KT G 8) *yüz[iŋä] başıŋa...
  - `Ata 2011, s. 145` (eslesen: _YAŞaYUR_)
    > ...abımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...
  - `Ata 2011, s. 138` (eslesen: _YAŞaYUR_)
    > ...un öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu...


## KT-K-2#2 - Kül Tigin Yazıtı, Kuzey 2. satir  (11 kelime)

- **transkripsiyon:** `eRTİ : aLP : ŞaLÇI : aTIN : BİNiP : OPLaYU : TeGDİ : iKİ : eRiG : UDaŞuRU : SaNÇDI`
- **kelime karsiliklari:** İDİ : ALP : ŞALÇININ : ATINA : BİNİP : OPLAYP : [YAĞIYA] DEĞDİ : İKİ : ERİ : AŞIRIP : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eRTİ aLP ŞaLÇI_)
    > ...Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim...
  - `Ergin 1970, s. 20` (eslesen: _aLP ŞaLÇI aTIN_)
    > ...oldu.Tamag Iduk Başta savaştık. | Kül Tigin o savaşta otuz yaşında idi. Alp Şalçı ata binip atılarak hücum etti. İki eri takip edip kovalayarak mızrakladı. Karluku öldürdük, yendik. Az milleti düşman oldu. Kara Gölde savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı atına binip atılarak hücum etti. Az ilteberini tuttu. Az milleti orda yok oldu. [[s. 20]] Amcam kağanın ili sarsıldığında: millet, hükümdar ikiye ayrıldığında, İzgil milleti ile savaştık. Kül Tigin Alp Şalçı atına binip atılarak hücum etti. O at orda düştü. İzgil...
  - `Tekin 1998, s. 26` (eslesen: _BİNiP OPLaYU TeGDİ_)
    > ...ıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağ...


## KT-K-2#3 - Kül Tigin Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `KaRLUKUG : ÖMLüRTüMüZ : aLTıMıZ`
- **kelime karsiliklari:** KARLUKU : ÖLDÜRDÜK : ALDIK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _KaRLUKUG_)
    > ...eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta,...
  - `Tekin 2003, s. 209` (eslesen: _KaRLUKUG_)
    > ...ON TÜRKÇESİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi...
  - `Tekin 1998, s. 26` (eslesen: _aLTıMıZ_)
    > ...uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztl...


## KT-K-2#4 - Kül Tigin Yazıtı, Kuzey 2. satir  (4 kelime)

- **transkripsiyon:** `aZ : BODuN : YaGI : BOLDI`
- **kelime karsiliklari:** AZ : BOYLARI : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _aZ BODuN YaGI_)
    > ...50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül...
  - `Tekin 1998, s. 11` (eslesen: _aZ BODuN_)
    > ...ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam...
  - `Tekin 2003, s. 134` (eslesen: _aZ BODuN_)
    > ...deyişle, belirsiz miktarları ifade eden sözcükler şunlardır: *az* "az", *azça* "biraz", *azkıńa* "pek az, azıcık", *üküş* "pek çok". Belirsizlik sayıları niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk h...
  - `Ata 2011, s. 55` (eslesen: _aZ BODuN_)
    > ...teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birü...
  - `Olmez 2017, s. 94` (eslesen: _aZ BODuN_)
    > ...banı &nbsp;&nbsp;&nbsp;&nbsp;-tu: bilinen geçmiş zaman eki &nbsp;&nbsp;&nbsp;&nbsp;+m: teklik birinci kişi eki **Runik** (4 satır; ilk satırın sağında satır numarası: 10) ***G 10.*** *yok : čıgań́ bodunug : k²op k²uvratdıḿ : čıgań́ : bodunug : bay kıltım : az bodunug : üküš : kıltım : azu bo savımda : ıgıd bargú tǘr²k : begler : bodun : bońı ėšidiŋ : tür²k bødɯŋ tëriṕ el tutıkıjın : bońtá urtum : yaǰılıp : ólsıkıjın : yeme :* "yoksul ve fakir olan halkı tümüyle bir araya getirdim. Yoksul halkı zengin ettim, az olan...
  - `Tekin 1998, s. 23` (eslesen: _BODuN YaGI_)
    > ...yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş...


## KT-K-2#5 - Kül Tigin Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `KaRA : KÖLTE : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** KARA : GÖLDE : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _KaRA KÖLTE_)
    > ...Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı ak...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 14` (eslesen: _KÖLTE_)
    > ...(tâm) “duvar” 2. [[s. 14]] Sözbaşındaki ve ilk necedeki düz-dar /1/ ve /i/ ünlüleri ile yuvarlak /o, u, ö, ü/ ünlüleri daima yazılır: IRK (ırak), BIçDI (bıçdı) “biçti”, IçrA (içre) “içinde”, bllmz (bilmez), BULüğ (bulung) “köşe”, Ülti (ölti) “öldü”, kKÜİLA (költe) “gölde”, ÜzA (üze) “yukarıda”, yÜgrtl (yüğürti) “aktı” vb. 3. İlk hecenin düz ünlüsünden sonraki düz-dar ünlüler genellikle, yazılmaz: DGRG (adgırığ) “aygırı”, BşLGG (başlığığ) “başlıyı, mağruru”, KILNmş (kılınmış) “yaratılmış”, 4. [[s. 14]] İlk hecenin dü...
  - `Ata 2011, s. 108` (eslesen: _SÜŊüŞDüMüZ_)
    > ...i, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “...
  - `Ogel C2, s. 222` (eslesen: _KÖLTE_)
    > ...anizmini incelemek için haberler), İrkutek, 1885. Yak ut şaman izmi hakkındaki bu değerli rapor için bk. U. Harva, (Fr.), s. 132. * Bu önemli bilgileri, Prof. Ra x ony 'initı aşağıdaki Macarcamakaleden yaptığı yardımlar ile öğrendik: Kepes Gez a, A Magyar ös Költeszet, iVyumairol, 1964. 6. 21. “Macar nazmının izleri” adlı bir yazıdır. [s. 223] YILBIZLAR 207 BURÇLAR HAKKINDA NOTLAR Türkler, K o ç burcuna, “kuzu”; b o ğ a burcuna da, “Ud”, yani öküz derlerdi. Sonradan, B o ğ a da, denmiştir. En iyisi bu burçları, Kuta...


## KT-K-2#6 - Kül Tigin Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `KÖLTİGiN : BİRKIRK : YAŞaYUR`
- **kelime karsiliklari:** KÜLTİĞİN : BİRKIRK : YAŞIYOR
- **kanit:**
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 27` (eslesen: _YAŞaYUR_)
    > ...le, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu....
  - `Tekin 2003, s. 130` (eslesen: _YAŞaYUR_)
    > ...ir zarf tümleci olarak: *ilteriş kagan... tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan ... Çinlilerle on yedi (kez) savaştı, Kıtay ile yedi (kez) savaştı, Oğuzlarla da beş (kez) savaştı" (T 48-49) *kül tigin bir kırk yaşayur ärti* "Prens Kül (o zaman) otuz bir yaşında idi" (KT K 2) *ulug küli çor säkiz on yaşap yok boltı* "Büyük Küli Çor seksen (yıl) yaşayıp yok oldu" (KÇ B 3) *bir todsar āçsık ömäz sän* "bir (de) doyarsan (yine) acıkacağını düşünmezsin" (KT G 8) *yüz[iŋä] başıŋa...
  - `Ata 2011, s. 145` (eslesen: _YAŞaYUR_)
    > ...abımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...
  - `Ata 2011, s. 138` (eslesen: _YAŞaYUR_)
    > ...un öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu...


## KT-K-2#7 - Kül Tigin Yazıtı, Kuzey 2. satir  (4 kelime)

- **transkripsiyon:** `eRTİ : aLP : ŞaLÇI : aKIN`
- **kelime karsiliklari:** İDİ : ALP : ŞALÇININ : AKINA
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eRTİ aLP ŞaLÇI aKIN_)
    > ...Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan...
  - `Tekin 1998, s. 26` (eslesen: _aLP ŞaLÇI_)
    > ...ledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama)...
  - `Ergin 1970, s. 19` (eslesen: _aLP ŞaLÇI_)
    > ...sonra Türgiş avam halkı düşman olmuş. Kengerise doğru gitti. Bizim askerin atı zayıf, azığı yok idi. Kötü kimse er.......... | kahraman er bize hücum etmişti. Öyle bir zamanda pişman olup Kül Tigini az erle eriştirip gönderdik. Büyük savaş savaşmış. [[s. 19]] Alp Şalçı ak atına binip hücum etmiş. Türgiş avam halkını orda öldürmüş, yenmiş. Tekrar yürüyüp....... Kuzey cephesi ......... ile, Koşu vali ile savaşmış. Askerini hep [s. 20] öldürmüş. Evini, malını eksiksiz hep getirdi. Kül Tigin yirmi yedi yaşına gelince Karluk ka...
  - `Tekin 2003, s. 252` (eslesen: _aLP ŞaLÇI_)
    > ...süŋülüg** mızraklı asker - **süŋüş** savaş - **süŋüş-** savaşmak [s. 252] # s. 252 — TALAT TEKİN (basılı sayfa numarası 253) *(Kitap s. 253)* - **sür-** sürmek - **Şad** yüksek bir unvan (bk. **Çad**) - **Şadapıt** yüksek bir unvan - **Şalçı** kişi adı (**Alp Şalçı**) - **Şantuŋ** yer adı (Şantung ovası) - **Şıp** yer adı (MÇ D 3, 4) - **tabar** davar (MÇ G 5) - **Tabar** yer adı (Tabaristan) - **Tabgaç** Çin, Çinli - **tabılku** bitki adı (*Spiraea*, *spiraea altaica*) (IB 32, 32) - **tabışgan** tavşan (T 8, IB 44) -...
  - `Ogel C1, s. 426` (eslesen: _ŞaLÇI_)
    > ...ığı kuş tüyleri ile verir.” 122 Ad koymak için yedi gün çok erkendir. Oğlana bu adı umumiyetle Hızır verir. 123 Buzancar, yanlış bir yazılıştır. Bu çocuğun asıl adı, Bodonçor-Mungkak'dır. Üçüz doğmuşlardı. Diğer kardeşlerinin adları da Buku-Katagı ve Bukatu-Salçı idi. Bk. Moğ. [[s. 426]] Gizli Tarihi, 19. 124 Bodonçar, Çingiz Han'ın on birinci göbekten atası idi. Burada yine Türk mitolojisinin bir deyimi olan “Yedi göbek” tabiri kullanılmıştır. 126 Alan-Ko'a'nın kocası Dobun-Mergen'dir. Tek gözlü Duwa-Sokor ise Dobun...
  - `Radloff, s. 356` (eslesen: _ŞaLÇI_)
    > ...adeti tes bit edilmiştir. Bu adetin de "cada taşı" efsanesiyle bağlı bir gele nek olması mümkündür. Kuraklık zamanlarında yağmur yağdırmak için cada taşın dan başka çarelere (tılsımlara) da baş vurulur. [[s. 356]] Ural dağlarının doğusunda yaşıyan Ulu Katay, Salcıvıt, Barın-Tabın Başkurtla nnda yağmur tılsımı olarak birbirini suya atmak, birbirine su serpmek adeti vardır. (176) Yağmur duası namazı kılındıktan sonra imamı yakalayıp suya atarlar, birbiri üzerine kova ile su dökerlerdi. 1929-1930 yıllarında Anadolu'nun bi...


## KT-K-3#1 - Kül Tigin Yazıtı, Kuzey 3. satir  (6 kelime)

- **transkripsiyon:** `BİNiP : OPLaYU : TeGDİ : aZ : iLTeBeRiG : TUTDI`
- **kelime karsiliklari:** BİNİP : [H]OPLAYIP : [YAĞIYA] DEĞDİ : AZ : İLTEBERİ : TUTTU
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BİNiP OPLaYU TeGDİ aZ_)
    > ...uk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun k...
  - `Tekin 1998, s. 26` (eslesen: _BİNiP OPLaYU TeGDİ_)
    > ...ıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağ...
  - `Tekin 2003, s. 225` (eslesen: _BİNiP OPLaYU_)
    > ..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin turup ......
  - `Tekin 1998, s. 25` (eslesen: _OPLaYU TeGDİ_)
    > ...a kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ bin...
  - `Tekin 2003, s. 224` (eslesen: _OPLaYU_)
    > ...Işbara Çıkan Küli Çor bolmiş.... Tunyukuk (3) [Kap]gan Kagan elintä karıp ädgü bäŋi körti. Ulug Küli Çor sekiz on yaşap yok bol[tı]. (4) ... özlüki boz at ärti. Kädim ..... alpi ärdämi anta tükädi. Türk bodunka.... (5) Sag(ı)r Çulugan yagı(t)tokda [Küli] Çor [oplayu tägi]p, sançıp, ölürüp, oglin kisisin buln[adı]. (6) bulup Az elig tutdı. Kerü Az ........... ärti. Küli Çor Türk bodun..... (7) [k]aganıŋa eli[n törösin...........] Bilgäsin üçün, alpin ärdämin [üçü]n kaz[g]antı...... (8) Tür[k..................] Işbara bilg...
  - `Ergin 1970, s. 18` (eslesen: _BİNiP_)
    > ...savaştık. | Kül Tigin yaya olarak atılıp hücum etti. Ong valinin kayın biraderini, silâhlı, elle tuttu, silahlı olarak kağana takdim etti. O orduyu orda yok ettik. Yirmi bir yaşında iken, Çaça generale karşı savaştık. [[s. 18]] En önce Tadıgın, Çorun bozatına binip hücum etti. O at orda | Öldü. İkinci olarak İşbara Yamtarın boz atına binip hücum etti. O at orda öldü. Üçüncü olarak Yigen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir...


## KT-K-3#2 - Kül Tigin Yazıtı, Kuzey 3. satir  (5 kelime)

- **transkripsiyon:** `aZ : BODuN : aNDA : YOK : BOLDI`
- **kelime karsiliklari:** AZ : BOYLARI : [O] ANDA : YOK : OLDU
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _aZ BODuN_)
    > ...ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam...
  - `Tekin 2003, s. 134` (eslesen: _aZ BODuN_)
    > ...deyişle, belirsiz miktarları ifade eden sözcükler şunlardır: *az* "az", *azça* "biraz", *azkıńa* "pek az, azıcık", *üküş* "pek çok". Belirsizlik sayıları niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk h...
  - `Ata 2011, s. 55` (eslesen: _aZ BODuN_)
    > ...teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birü...
  - `Olmez 2017, s. 94` (eslesen: _aZ BODuN_)
    > ...banı &nbsp;&nbsp;&nbsp;&nbsp;-tu: bilinen geçmiş zaman eki &nbsp;&nbsp;&nbsp;&nbsp;+m: teklik birinci kişi eki **Runik** (4 satır; ilk satırın sağında satır numarası: 10) ***G 10.*** *yok : čıgań́ bodunug : k²op k²uvratdıḿ : čıgań́ : bodunug : bay kıltım : az bodunug : üküš : kıltım : azu bo savımda : ıgıd bargú tǘr²k : begler : bodun : bońı ėšidiŋ : tür²k bødɯŋ tëriṕ el tutıkıjın : bońtá urtum : yaǰılıp : ólsıkıjın : yeme :* "yoksul ve fakir olan halkı tümüyle bir araya getirdim. Yoksul halkı zengin ettim, az olan...
  - `Ata 2011, s. 48` (eslesen: _aZ BODuN_)
    > ...çerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğ...
  - `Tanyeri, s. 24` (eslesen: _aZ BODuN_)
    > ...örüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parçalarını ifade etmektedir. “Üze kök Tengri, asra yaġız yer” veya “Çıgany bodunuġ bay kıltım, az bodunuġ üküş kıltım.” gibi ifadelerde görüldüğü üzere, eşit ögeli birimlerle koşutluk sağlanarak anlatım güçlü ve etkili kılınmıştır. Yukarıda sıralanan maddeler altında verilen bilgiler, yazıtlar döneminde Türkçenin gelişmiş bir “yazı” ve “yazın” diline sahip...


## KT-K-3#3 - Kül Tigin Yazıtı, Kuzey 3. satir  (9 kelime)

- **transkripsiyon:** `eÇİM : KaGaN : İLİ : KaMŞaG : BOLTUKINDA : BODuN : İLiG : İKiGİ : İZGiL`
- **kelime karsiliklari:** EÇÜM : KAĞANIN : İLİ : KAMŞAK : OLDUĞUNDA : BOYLARIN : İLİ : İKİYE [BÖLÜNDÜĞÜNDE] : İZGİL
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _eÇİM KaGaN İLİ KaMŞaG_)
    > ...Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip oplayu teğdi. Az Elteberiğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı...
  - `Tekin 1998, s. 25` (eslesen: _eÇİM KaGaN İLİ_)
    > ...tım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25...
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN_)
    > ...yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka te...
  - `Tekin 2003, s. 105` (eslesen: _eÇİM KaGaN_)
    > ...öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä in...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik ek...
  - `Olmez 2017, s. 55` (eslesen: _eÇİM KaGaN_)
    > ...(KT G 5) **Bilnen geçmiş zaman *-DI* ekiyle kurulur:** *ilgerü şantuŋ yazıka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını...
