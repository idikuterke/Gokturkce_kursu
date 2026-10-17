# Ceviri istek paketi 28 - Orhun cumlecikleri

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


## BK-K-4#4 - Bilge Kağan Yazıtı, Kuzey 4. satir  (7 kelime)

- **transkripsiyon:** `YaGuRU : KONDUKDA : KİSRE : aYNıG : BİLiGiN : aNDA : ÖYÜR`
- **kelime karsiliklari:** YAKLAŞIP : KONDUKTAN : SONRA : ANYI : BİLGİLERİNİ : [O] ANDA : ÖYÜR
- **kanit:**
  - `Tekin 1998, s. 30` (eslesen: _BİLiGiN_)
    > ...yerdle ollurup (Tabgaç bodlun birle tüzülltüm|. Altun, kümüş, eşgliti), (K 4) kutay bufiğsuz ança birür. [[s. 30]] Tabgaç bodun sabı süçiğ, ağısi yımşak ermiş. Süçiğ Islabın, yımşak ağın arıp ırak (bodjunuğ ança yağutır ermiş. |Yağrlu kontuklda| kisre ariyığ biliğin anta ölyür ermliş: Edgü |bil)ge kişiğ, edgü alp kişiğ yolrıtmaz)| ermiş; bir kişi yangılslar|) uğuşı bodunlı bişlükinğge BİLGE KAĞAN YAZITI (K 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde tahta oturdum. [[s. 30]] Sözlerimi baştan s...
  - `Tekin 2003, s. 169` (eslesen: _BİLiGiN_)
    > ...ının olumsuzudur. Niteleyici ve yüklem olarak kullanılır. 1. Niteleyici olarak: *bilig bil-mäz kişi* "cahil kişiler" (KT G 7) *körür közüm kör-mäz täg bilir biligim bil-mäz täg boltı* "gören gözlerim görmez gibi, eren aklım ermez gibi oldu" (KT K 10) *bil-mäz biligin* "cehalet ile" (KÇ G 3) 2. Yüklem olarak kullanılışı için bk. **Son Eylem Biçimleri**. ## {-DOk} Ekli Eylem Adı **409.** {-DOk} eki /l/, /n/ ve /r/den sonra *-tok/-tök* biçimini alır. Tek istisna *bar-* "gitmek" eylemidir (bk. **Başkalaşma**). {-DOk} ekli...
  - `Olmez 2017, s. 64` (eslesen: _BİLiGiN_)
    > ...lem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar az bilsem de bildiğim, düşündüğüm kadarıyla bu yazıtı hakkettim." (KÇ G 28); *bilig bilmez kişi ol savıg alıp* "Cahil insanlar, bu sözleri ciddiye alıp" (KT G 7); *körür közüm körmez teg bilir biligim bilme...
  - `Olmez 2017, s. 87` (eslesen: _YaGuRU_)
    > ...ı" > bod: isim tabanı > +un: kalıplaşmış çokluk eki > +ug: belirtme durumu eki **ança yagutır ermîş** < *yagu-t-ır* "bu şekilde (kendilerine) yaklaştırırlarmış" > yagu-: fiil tabanı > -t-: fiilden fiil (geçişlilik) yapma eki > -ır: geniş zaman eki **yagru / yaguru** < *yagu-r-u* "yakına, yakın" > yagu-: fiil tabanı > -r-: fiilden fiil (orta çatı eki) yapma eki > -u: zarfiil eki; kalıplaşıp zarf yapmıştır **kontokda** < *ko-n-tok-da* "yerleştikten" > ko-: fiil tabanı > -n-: fiilden fiil (dönüşlülük) yapma eki > -tok: s...
  - `Kafesoglu, s. 41` (eslesen: _BİLiGiN_)
    > ...tlarını feda et- • ı J-101 mislerdi Çi-çi'nin batıya uzaklaşmasından sonra kendini toplayan ve Çin hükümeti ile anlaşma yaparak (M.Ö. 43), devlet meclisinin kararı üe başkentini Orhun bölgesine nakleden, fakat M.Ö. [[s. 41]] 36'dan itibaren tekrar Çin tâbiliğine giren Ho-han-yeh (ölm. M.Ö. 31)'e bağlı kütleler, onun evlâtları tarafından bir müddet idare edildikten sonra, tekrar toparlanmağa başlamışlar ve kudretli bir devlet adamı olduğu anlaşılan Yu (Ho-to-dzsi-si) Tanhu zamanında (M. 18-46) Çin'e karşı istiklâller...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 253` (eslesen: _BİLiGiN_)
    > ...]] (#JBı ada UZ geklinde geçen bu kelime Dv. I, 318, 17 de şeklindedir. Düşünüle. B, A, Be balçık: Çamur. SUK bulgak: Duşman gelmesi yüzünden halk arasına düşen karışıklık. öl Bulgak: Erkek adlarındandır. Şu beyitte dahi gelmiştir : Bulgak öküş bolsa kaçan biliginğ yiter Yanğşak telim sayrab anı tamgak katar "Karışıklık çok olursa bilgin kaybolur, yanşak çok söylerse ağzının kurumasından çenesi yorulur", Bu sav, sözü az söylemekle emrolunan kişi için kullanılır. Toprak. [[y. 253]] Yer yarıkları. Geceleyin duşmanın gö...


## BK-K-4#5 - Bilge Kağan Yazıtı, Kuzey 4. satir  (9 kelime)

- **transkripsiyon:** `eRMiŞ : eDGÜ : BİLGE : KİŞİG : eDGÜ : aLP : KİŞİG : YORITMAZ : eRMiŞ`
- **kelime karsiliklari:** İMİŞ : İYİ : BİLGİLİ : KİŞİYİ : İYİ : ALP : KİŞİYİ : YÜRÜTMEZ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]...
  - `Ata 2011, s. 137` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...KT D10 ańıg bilig anta ö-yür er-miş “(Çinliler) kötülüğü o zaman düşünürler imiş” KT G7 ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese)...
  - `Olmez 2017, s. 88` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...(basılı sayfa numarası 88) ö-: fiil tabanı -(y)ür: geniş zaman eki er-: fiil tabanı -miş: öğrenilen geçmiş zaman eki **Runic** (5 lines; the number **6** at the end of the first line is the line number of the inscription): *Runic text — 5 lines* **G 6.** *edgü bilge : kişiğ : edgü : alp kişiğ : yorıt-maz : ermiş : bir kişi : yaŋılsar : uguşı : bodunı : böşükiŋe tegi : kıd-maz ermiş : süçig : savıŋa : yemşak : agısıŋa : arturup : üküş : türʰk : bodun : öltiiŋ türʰk : bodun : ölsikiŋ : bėriye : çugay : yış : tögültün :* > "Bilgili ve yi...
  - `Ata 2011, s. 130` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...rakayım der imiş” KT D10 ańıg bilig anta ö-yür er-miş “(Çinliler) kötülüğü o zaman düşünürler imiş” KT G7 [[s. 130]] ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6...


## BK-K-4#6 - Bilge Kağan Yazıtı, Kuzey 4. satir  (8 kelime)

- **transkripsiyon:** `BİR : KİŞİ : YaŊıLSaR : OGuŞI : BODUNI : BİŞÜKİŊE : TeGİ : KIDMaZ`
- **kelime karsiliklari:** BİR : KİŞİ : YANILSA : OĞUŞUNA : BOYLARINA : BEŞİĞİNE : DEĞİN : KIYMAZ
- **kanit:**
  - `Tekin 2003, s. 187` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...bir todsar āçsık ö-mäz sän* "Acıkırsan doyacağını düşünmezsin, bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) 3. kişi: *ädgü bilgä kişig ädgü alp kişig yorıt-maz ärmiş* "(Çinliler) iyi ve akıllı kişileri, iyi ve yiğit kişileri ilerletmez imiş" (KT G 6) *bir kişi yaŋılsar uguşi boduni bişükiŋä tägi kıd-maz ärmiş* "(Öte yandan), bir kişi suç işlese onun soyuna sopuna ve akrabalarına kadar (herkesi) öldürmez imiş" (KT G 6) ## {-DAçI} Ekli Gelecek Zaman **440.** {-DAçI} ekli gelecek zaman eylem sıfatı sona alınmış kişi zamirler...
  - `Ata 2011, s. 137` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6 edgü bilge kişig edgü alp kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişiler...
  - `Olmez 2017, s. 88` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...man eki er-: fiil tabanı -miş: öğrenilen geçmiş zaman eki **Runic** (5 lines; the number **6** at the end of the first line is the line number of the inscription): *Runic text — 5 lines* **G 6.** *edgü bilge : kişiğ : edgü : alp kişiğ : yorıt-maz : ermiş : bir kişi : yaŋılsar : uguşı : bodunı : böşükiŋe tegi : kıd-maz ermiş : süçig : savıŋa : yemşak : agısıŋa : arturup : üküş : türʰk : bodun : öltiiŋ türʰk : bodun : ölsikiŋ : bėriye : çugay : yış : tögültün :* > "Bilgili ve yiğit insanları ilerletmezlermiş. Bir kişi suç işlerse b...
  - `Ata 2011, s. 130` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...[s. 130]] ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6 [[s. 130]] edgü bilge kişig edgü alp kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (v...


## BK-K-5#1 - Bilge Kağan Yazıtı, Kuzey 5. satir  (13 kelime)

- **transkripsiyon:** `eRMiŞ : SÜÇİG : SaBıŊA : YıMŞaK : aGISIŊA : aRTURuP : ÖKÜŞ : TÜRK : BODuN : ÖLTüG : TÜRK : BODuN : ÖLSiKiŊ`
- **kelime karsiliklari:** İMİŞ : SÜÇİ : SÖZÜNE : YUMUŞAK : AĞISINA : ARTURUP : ÇOK : TÜRK : BOYLARI : ÖLDÜ : TÜRK : BOYLARI : ÖLECEKSİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _eRMiŞ SÜÇİG SaBıŊA YıMŞaK_)
    > ...AZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgu...
  - `Ata 2011, s. 127` (eslesen: _SÜÇİG SaBıŊA YıMŞaK aGISIŊA_)
    > ...sıfat yapma b. Fiilden isim yapma c. İsimden fiil yapma d. Aynı yapı ve görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süle...
  - `Ata 2011, s. 120` (eslesen: _SÜÇİG SaBıŊA YıMŞaK aGISIŊA_)
    > ...idir? a. İsimden sıfat yapma b. Fiilden isim yapma c. İsimden fiil yapma d. Aynı yapı ve görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. [[s. 120]] süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşık...


## BK-K-5#2 - Bilge Kağan Yazıtı, Kuzey 5. satir  (15 kelime)

- **transkripsiyon:** `BeRiYE : ÇOGaY : YIŞ : TÖGüLTüN : YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aYNıG : KİŞİ : aNÇA : BOŞGURUR`
- **kelime karsiliklari:** BERİDE : ÇOĞAY : YIŞ[INA] : TÖGÜLTÜN : YAZINA : KONAYIM : DESEN : TÜRK : BOYLARI : ÖLECEKSİN : [O] ANDA : ANYI : KİŞİ : ANÇA : BOŞGURUR
- **kanit:**
  - `Tekin 2003, s. 135` (eslesen: _ÇOGaY YIŞ TÖGüLTüN YaZI_)
    > ...ağıdaki) Yer ve Su (ruhları ile) amcam hakanın ruhu, şüphesiz ki, doğru bulmadılar" (BK D 35) **294.** *biryä* "güneyde" < *\*biriyä* < *\*biri* "bu yan, güney": *biryä tabgaç bodun yagı ärmiş* "Güneyde Çin halkı (bize) düşman imiş" (KT D 14, BK D 12) *biryä çogay yış tögültün yazı konayin tisär...* "Güneyde Çoğay dağlarına (ve) Tögültün ovasına konayım dersen..." (KT G 6-7) *biryä tabgaçıg öŋrä kıtańıg yırya oguzug üküş ök ölürti* "Güneyde [s. 136] # s. 136 — TALAT TEKİN Çinlileri, doğuda Kıtaylıları, kuzeyde (de) Oğuzları çok öldürd...
  - `Ata 2011, s. 135` (eslesen: _ÇOGaY YIŞ TÖGüLTüN YaZI_)
    > ...i kişi ekleri ile çekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. -çI Ekli Gelecek Zaman...
  - `Ata 2011, s. 128` (eslesen: _ÇOGaY YIŞ TÖGüLTüN YaZI_)
    > ...elecekte mutlak olarak yapılacak veya olacak eylemlerle kullanılır. İyelik kökenli kişi ekleri ile çekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. [[s. 128]] -çI Ekli Gelecek Zaman Daha çok olumsuz eylem gövdelerine ulanan bu eke Köktürk harfli metinlerde s...


## BK-K-5#3 - Bilge Kağan Yazıtı, Kuzey 5. satir  (6 kelime)

- **transkripsiyon:** `eRMiŞ : IRaK : eRSeR : YaBLaK : aGI : BİRÜR`
- **kelime karsiliklari:** İMİŞ : IRAK : İSEN : YAVLAK : AĞI : VERİR
- **kanit:**
  - `Tekin 1998, s. 31` (eslesen: _eRMiŞ IRaK eRSeR YaBLaK aGI BİRÜR_)
    > ...abasına [s. 31] 58 BİLGE KAĞAN YAZITI teği kıdimaz) (K 5) ermiş. Süçiğ sabınğa yımşak ağısıng a arturup üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün yazı (kolnayın (tiser), Türük bodun, ölsikiğ! Anta aniyığ Iklişi ança boşglurur) ermiş: “Irak erser yablak ağı birür; yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Billiğ) (K 6) bilmez kişi, ol sabığ alıp, yağru barıp üküş kişi öltüğ. Ol yerlgerlü barsar, Türük bodun, ölteçi sen! [[s. 31]] Ötüken yer ollJurup (arkış) tirkiş ısar, nefiğ bulaâğuğ yolk. Öltüken ylış olu...
  - `Ata 2011, s. 146` (eslesen: _IRaK eRSeR YaBLaK aGI_)
    > ...l 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir...
  - `Ata 2011, s. 139` (eslesen: _IRaK eRSeR YaBLaK aGI_)
    > ...yın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc....


## BK-K-5#4 - Bilge Kağan Yazıtı, Kuzey 5. satir  (5 kelime)

- **transkripsiyon:** `YaGuK : eRSeR : eDGÜ : aGI : BİRÜR`
- **kelime karsiliklari:** YAKIN : İSEN : İYİ : AĞI : VERİR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...ge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, to...
  - `Ata 2011, s. 146` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...n hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u-...
  - `Ata 2011, s. 139` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...l 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc. itd. açe. al- 10. Tasvirî fiilli...


## BK-K-5#5 - Bilge Kağan Yazıtı, Kuzey 5. satir  (5 kelime)

- **transkripsiyon:** `TİP : aNÇA : BOŞGURUR : eRMiŞ : BİLiG`
- **kelime karsiliklari:** DEYİP : ANCA : ÖĞRETİR : İMİŞ : BİLGİ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _TİP aNÇA BOŞGURUR eRMiŞ BİLiG_)
    > ...sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen...
  - `Olmez 2017, s. 89` (eslesen: _aNÇA BOŞGURUR eRMiŞ BİLiG_)
    > ...n" **Runik** (dört satır runik yazı; ilk satırın sağ kenarında **7** satır numarası): *G 7. yazı : k°onayın tėser : türⁿk : bodun : ölsikiŋ anta : aŋıg kişi : ança : boşgurur : ermiş : ırak erser : yavlak : agı bėrür : yaguk : erser : edgü : agı bėrür : tėp ança : boşgurur : ermiş : bilig : bilmez : kişi : ol savıg : alıp : yagru : barıp : üküş kişi : öltüŋ :* "ovasına yerleşeyim dersen, Türk halkı, mutlaka öleceksin. Kötü insanlar söylece akıl verirlermiş: "Uzakta isen Çinliler ipeklinin kötüsünü verirler, [s. 90] # s. 088 — Mehmet Ölmez (b...
  - `Tekin 2003, s. 218` (eslesen: _TİP aNÇA BOŞGURUR_)
    > ...ärmiş. Süçig sabıŋa, y(i)mşak agısıŋa arturup üküş Türük bodun öltüg! Türk bodun, ölsikig! Biryä Çogay yış, Tögültün (G 7) yazı konayin tisär, Türük bodun, ölsikig! Anta añıg kişi ança boşgurur ärmiş: "Irak ärsär yablak agı birür, yaguk ärsär ädgü agı birür" tip ança boşgurur ärmiş. Bilig bilmäz kişi ol sabıg alıp, yagru barıp, üküş kişi öltüg. (G 8) Ol yirgärü barsar, Türük bodun, öltäçi sän! Ötükän yir olorup arkış tirkiş ısar, näŋ buŋug yok. Ötükän yış olorsar, bäŋgü il tuta olortaçı sän. Türk bodun, tokurkak sän. Āçsar tosık...


## BK-K-6#1 - Bilge Kağan Yazıtı, Kuzey 6. satir  (50 kelime)

- **transkripsiyon:** `BİLMeZ : KİŞİ : OL : SaBıG : aLıP : YaGuRU : BaRıP : ÖKüŞ : KİŞİ : ÖLTüG : OL : YiRGerÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BUŊuG : YoK : ÖTÜKeN : YIŞ : OLuRSaR : BeŊGÜ : İL : TUTA : OLuRTaÇI : SeN : TÜRK : BODuN : TOKuRKaK : SeN : AÇSaR : TOSıK : ÖMeZ : SeN : BİR : TODSaR : AÇSıK : ÖMeZ : SeN : aNTaGıŊıN : ÜÇÜN : İGiDMiŞ`
- **kelime karsiliklari:** BİLMEZ : KİŞİ : O : SÖZÜ : ALIP : YAKINA : VARIP : ÇOK : KİŞİ : ÖLDÜ : O : YERLERE : VARSAN : TÜRK : BOYLARI : ÖLECEK : SEN : ÖTÜKEN : YERİNDE : OTURUP : ARKIŞ : TİRKİŞ : [GÖNDERİR] İSEN : NE : BUNG : YOK : ÖTÜKEN : YIŞDA : OTURSAN : BENGÜ : İL : TUTUP : OTURACAK : SEN : TÜRK : BOYLARI : TOK [İSEN] : SEN : AÇLIĞI : TOKLUĞU : DÜŞÜNMEZ : SEN : BİR : DOYSAN : AÇLIĞI : DÜŞÜNMEZ : SEN : ÖYLE [OLDUĞUN] : İÇİN : YEDİRMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BİLMeZ KİŞİ OL SaBıG_)
    > ..., üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık öme...
  - `Ata 2011, s. 140` (eslesen: _BİLMeZ KİŞİ OL SaBıG_)
    > ...an –p ekinin ünlü ile sonlanan fiillere ulanışında fark vardır: Orhun Türkçesinde fiil kök veya gövdesi üzerine doğrudan –p olarak gelirken, Türkiye Türkçesinde araya /y/ kaynaştırma ünsüzü girer: Orh. Tü. yorı-p > T. Tü. yürü-y-üp bilig bilmez kişi ol sabıg al-ıp yagru bar-ıp üküş kişi öltüg “cahil kişiler o sözü alıp, (Çin’e) yakın gidip, pek çok kişi öldünüz” KT G7 kaŋ yorı-p ilteriş kaganka adrılmaduk yaŋılmaduk “babam (ardı sıra) yürüyüp İlteriş Kağan’dan ayrılmamış, (ona karşı) yanlış iş ya...
  - `Ata 2011, s. 133` (eslesen: _BİLMeZ KİŞİ OL SaBıG_)
    > ...ça kullanılan –p ekinin ünlü ile sonlanan fiillere ulanışında fark vardır: Orhun Türkçesinde fiil kök veya gövdesi üzerine doğrudan –p olarak gelirken, Türkiye Türkçesinde araya /y/ kaynaştırma ünsüzü girer: Orh. Tü. yorı-p > T. Tü. [[s. 133]] yürü-y-üp bilig bilmez kişi ol sabıg al-ıp yagru bar-ıp üküş kişi öltüg “cahil kişiler o sözü alıp, (Çin’e) yakın gidip, pek çok kişi öldünüz” KT G7 kaŋ yorı-p ilteriş kaganka adrılmaduk yaŋılmaduk “babam (ardı sıra) yürüyüp İlteriş Kağan’dan ayrılmamış, (ona karşı) yanlış iş yapmamış” Ongin sağ...


## BK-K-6#2 - Bilge Kağan Yazıtı, Kuzey 6. satir  (1 kelime)

- **transkripsiyon:** `KaGaNıŊıN`
- **kelime karsiliklari:** KAĞANININ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _KaGaNıŊıN_)
    > ...rgerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az...
  - `Ergin 1970, s. 13` (eslesen: _KaGaNıŊıN_)
    > ...kervan, kafile gönderirsen hiç bir sıkıntın yoktur. [[s. 13]] Ötüken ormanında oturursan ebediyen il tutarak oturacaksın. Türk milleti, tokluğun kıymetini bilmezsin. Açlık, tokluk düşünmezsin. Bir doysan açlığı düşünmezsin. Öyle olduğun | için, beslemiş olan kağanının sözünü almadan her yere gittin. Hep orda mahvoldun, yok edildin. Orda, geri kalanınla her yere hep zayıflayarak, ölerek yürüyordun. Tanrı buyurduğu için, kendim devletli olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fa...
  - `Tekin 2003, s. 170` (eslesen: _KaGaNıŊıN_)
    > ...ranıp yeti yüz boltı* "Dağda bayırda kalmış olanları toplanıp yedi yüz (kişi) oldu" (T 4) 2. Eylem sıfatı olarak: *elsirämiş kagansıramiş bodun* "devletsiz ve hakansız kalmış halk" (KT D 13) *yir sayu barmiş bo[dun]* "her yere gitmiş halk" (BK D 22) *igidmiş kaganıŋın sabin almatin* "(seni) doyurmuş olan hakanının sözünü dinlemeden" (KT G 9) *äçümüz apamız tutmiş yir sub* "atalarımızın dedelerimizin elde ettiği topraklar" (KT D 19) *ermiş barmiş ädgü eliŋä käntü yaŋıltıg* "gelişmiş, ilerlemiş iyi devletine kendin ihanet et...
  - `Ata 2011, s. 56` (eslesen: _KaGaNıŊıN_)
    > ...sı tahminlerin çok üstündedir. Bununla birlikte, Kağanlığın yıkılışına yol açan en önemli etken, devletin başta gelen unsurları olan Basmıl, Karluk ve Uygurlar arasındaki iktidar çekişmesi olmuştur. Bu çekişmeyi sonunda Uygurlar kazanır ve 745’te son Türk kağanının başı, Uygurların kurduğu devletin hükümdarı tarafından Çin hanedanına sunulur. 49 [s. 57] Özet I. Köktürk Kağanlığı (552-630)’nı açıklamak Tarihte “Türk” adını resmî devlet adı olarak ilk defa kullanan Köktürklerdir. Kö...
  - `Olmez 2017, s. 59` (eslesen: _KaGaNıŊıN_)
    > ...akan tahta oturup" (KT D 16) **{-(X)yIn} :** *ötüken yėrig konmiş tėyin eşidip* "Ötüken topraklarına yerleştiğimizi duyan" (T 17); *türk bodun kanin bulmayin tavgaçda adrıltı* "Türk halkı hanını bulamadığı için Çin'den ayrıldı" (T 2) **{-mAtI(n)} :** *kaganıŋın savin almatin yėr sayu bardıŋ* "hakanının sözlerini dikkate almayıp her yöne gittin." (KT G 9); [s. 62] # s. 060 — Mehmet Ölmez (basılı sayfa numarası 62) *bonça işig küçüg bértökgerü sakunmatı* "bu kadar hizmet ettiğini, çalıştığını dikkate almaksızın" (KT...
  - `Roux, Eski Din, s. 33` (eslesen: _KaGaNıŊıN_)
    > ...(750-751) vardır (A. 10). [[s. 33]] Sonuç olarak Tu-kiu imparatorluğunun kurulmasıyla Uygurların Maniheizm dinine geçmeleri arasındaki iki yüzyıllık süreç için, hala istenilen düzeyde olmasa bile, oldukça yeterli sayıda belgeye sahibiz. Din değiştirme, Uygur kağanının 762 yılında Çin'e yaptığı bir sefer sırasında gerçekleşmiştir. [[s. 33]] Kağan, başkent Lo-yang'da Soğd dilini konuşan Maniheist din adamlarıyla karşılaşmış, geri dönerken bu din adamlarım Moğolistan'a götürmüş ve Orhon kıyılarında inşa ettirdiği Ordu Balık a...


## BK-K-7#1 - Bilge Kağan Yazıtı, Kuzey 7. satir  (17 kelime)

- **transkripsiyon:** `SaBIN : aLMaTIN : YİR : SaYU : BaRDıG : KOP : aNDA : aLKıNTıG : aRıLTıG : aNDA : KaLMıŞI : YİR : SaYU : KOP : TORU : ÖLÜ : YORıYUR`
- **kelime karsiliklari:** SÖZÜNÜ : ALMADIN : YERE : HER : VARDIN : HEP : [O] ANDA : ALKINDIN : ARILDIN : [O] ANDA : KALMIŞI : YERE : HER : HEP : TORUP : ÖLÜP : YÜRÜYOR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SaBIN aLMaTIN YİR SaYU_)
    > ...r, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. A...
  - `Tekin 2003, s. 218` (eslesen: _SaBIN aLMaTIN YİR SaYU_)
    > ...l yirgärü barsar, Türük bodun, öltäçi sän! Ötükän yir olorup arkış tirkiş ısar, näŋ buŋug yok. Ötükän yış olorsar, bäŋgü il tuta olortaçı sän. Türk bodun, tokurkak sän. Āçsar tosık ömäz sän; bir todsar, āçsık ömäz sän. Antagıŋın (G 9) üçün, igidmiş kaganıŋın sabin almatin yir sayu bardıg; kop anta alkıntıg arıltıg. Anta kalmişi yir sayu kop toru ölü yorıyur ärtig. Täŋri yarlık(k)adokin üçün, [ö]züm kutum bar üçün, kagan olortum. Kagan olorup (G 10) yok çıgañ bodunug kop kubratdım. Çıgañ bodunug bay kıltım, az [s. 219] # s. 219 — TALAT...
  - `Ata 2011, s. 145` (eslesen: _SaBIN aLMaTIN YİR SaYU_)
    > ...b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. bilig bilmez kişi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti 138 [s. 146] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi...
  - `Ata 2011, s. 138` (eslesen: _SaBIN aLMaTIN YİR SaYU_)
    > ...tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti [s. 139] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun ka...


## BK-K-7#2 - Bilge Kağan Yazıtı, Kuzey 7. satir  (6 kelime)

- **transkripsiyon:** `eRTiG : TeŊRİ : YaRLıKaDUKIN : ÜÇÜN : ÖZüM : KUTuM`
- **kelime karsiliklari:** İDİ[LER] : TANRI : BUYURDUĞU : İÇİN : ÖZÜM : KUTUM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _YaRLıKaDUKIN ÜÇÜN_)
    > ...olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunt...
  - `Tekin 1998, s. 43` (eslesen: _ÜÇÜN ÖZüM_)
    > ...) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yöne...
  - `Tekin 2003, s. 124` (eslesen: _ÜÇÜN ÖZüM_)
    > ..." (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâ...
  - `Olmez 2017, s. 92` (eslesen: _ÜÇÜN ÖZüM_)
    > ...yle basılmış 4 satır metin; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemiş olan hakanının sözlerini dikkate almayıp her yöne gittin. Oralarda tamamen yok oldun, tükendin. Geride kalanlarınız yarı ölü yarı diri her yere gidiyordunuz. Tanrı lütfettiği için,...
  - `Tekin 2003, s. 215` (eslesen: _ÖZüM KUTuM_)
    > ...ümle Bağlacı olarak *üçün* **490.** *üçün* sontakısı da bir ve birden çok yan cümleyi, yüklemi *bar* ya da {-DOk} ekli bir eylem sıfatı olan yan cümleleri temel cümleye bağlamak için kullanılır: 1. Yüklemi *bar* olan bir ya da daha çok yan cümleyi bağlar: - *özüm kutum bar üçün, kagan olortum* "... benim talihim olduğu için hakan olarak tahta oturdum" (KT G 9) - *kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Talihim olduğu için, şansım olduğu için, ölecek halkı hayatta tutup doyurdum" (KT D 29) - *tört...
  - `Ogel C2, s. 167` (eslesen: _YaRLıKaDUKIN ÜÇÜN_)
    > ...zılarındaki, “Tengriler Tengrisi yerinte”” sözünün çin cekarşılığımı, ““Göğün yüceliği”'”' (T'ien-shang) olarak teeshit etmişti: (Uig.,1,24). [[s. 167]] “Üze” sözümüz de, yine çince “shang” karşılığı olarak gösterilmişti: “Üze Tengri, asra yer, izin verdiği (yarlıkadukın) üçün, “Közün görmediği (közün körmedük), kulağın işitmedik...” (IIKİ1-12). 2) “*Ediz”'”' sözü ikinci devrede görülüyordu. Edizde, Yücelik ve çince karşılığı (shang) idi. Kutadgu Bilig'de görülüyordu. Uygur el yazılarında, bunun yanında “yüksek ediz” esözleri,aynı...


## BK-K-7#3 - Bilge Kağan Yazıtı, Kuzey 7. satir  (4 kelime)

- **transkripsiyon:** `BaR : ÜÇÜN : KaGaN : OLuRTuM`
- **kelime karsiliklari:** VAR : İÇİN : KAĞAN : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BaR ÜÇÜN KaGaN OLuRTuM_)
    > ...rkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G...
  - `Tekin 2003, s. 215` (eslesen: _BaR ÜÇÜN KaGaN_)
    > ...ı olarak *üçün* **490.** *üçün* sontakısı da bir ve birden çok yan cümleyi, yüklemi *bar* ya da {-DOk} ekli bir eylem sıfatı olan yan cümleleri temel cümleye bağlamak için kullanılır: 1. Yüklemi *bar* olan bir ya da daha çok yan cümleyi bağlar: - *özüm kutum bar üçün, kagan olortum* "... benim talihim olduğu için hakan olarak tahta oturdum" (KT G 9) - *kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Talihim olduğu için, şansım olduğu için, ölecek halkı hayatta tutup doyurdum" (KT D 29) - *tört oglum bar üçün,...
  - `Olmez 2017, s. 92` (eslesen: _BaR ÜÇÜN KaGaN_)
    > ...n; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemiş olan hakanının sözlerini dikkate almayıp her yöne gittin. Oralarda tamamen yok oldun, tükendin. Geride kalanlarınız yarı ölü yarı diri her yere gidiyordunuz. Tanrı lütfettiği için, benim de talihim olduğu için...


## BK-K-7#4 - Bilge Kağan Yazıtı, Kuzey 7. satir  (7 kelime)

- **transkripsiyon:** `KaGaN : OLuRuP : YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM`
- **kelime karsiliklari:** KAĞAN : OTURUP : YOK : ÇIĞANY : BOYLARI : HEP : TOPARLADIM
- **kanit:**
  - `Tekin 1998, s. 31` (eslesen: _KaGaN OLuRuP YOK_)
    > ...ez sen, bir todsar âçsık ömez sen. Antağınğın üçün iğidmiş klağanınğın) (K 7) sabın almatın yir sayu bardığ, kop anta alkıntığ arılftığ). Anta kalmlışı| yir İsaylu kop toru ölü — yorıyur ertiğ. Tefğri yarlıkladukın üçün, özlüm kutum bar üçün kfağan olurtlum. Kağan olurup yok çığariy bodunuğ kop kubrattım. [[s. 31]] Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azlu bu| (K 8) sabımda iğid bar gu? Türük beğler bodun, bunı eşidinğ! Türük bodunuğ tirip (i)! tutsıkıfiğın bunta urtum; yafığılıp ölsikinğin yeme) buntla urtlum. Ne...
  - `Tekin 1998, s. 20` (eslesen: _BODuNuG KOP KUBRaTDıM_)
    > .... [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka ur...
  - `Tekin 2003, s. 218` (eslesen: _BODuNuG KOP KUBRaTDıM_)
    > ...āçsık ömäz sän. Antagıŋın (G 9) üçün, igidmiş kaganıŋın sabin almatin yir sayu bardıg; kop anta alkıntıg arıltıg. Anta kalmişi yir sayu kop toru ölü yorıyur ärtig. Täŋri yarlık(k)adokin üçün, [ö]züm kutum bar üçün, kagan olortum. Kagan olorup (G 10) yok çıgañ bodunug kop kubratdım. Çıgañ bodunug bay kıltım, az [s. 219] # s. 219 — TALAT TEKİN (basılı sayfa numarası 220) bodunug üküş kıltım. Azu bu sabımda igid bar gu? Türük bäglär, bodun, bunı eşidiŋ! Türük [bodun ti]rip il tutsıkıŋın bunta urtum; yaŋılıp ölsikiŋin yämä (G 11) bunta...


## BK-K-7#5 - Bilge Kağan Yazıtı, Kuzey 7. satir  (4 kelime)

- **transkripsiyon:** `ÇIGaYN : BODuNuG : BaY : KILDıM`
- **kelime karsiliklari:** ÇIGANY : BOYLARI : BAY : KILDIM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG BaY_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansı...
  - `Tekin 2003, s. 212` (eslesen: _BODuNuG BaY_)
    > ...*483.** Sıralama yolu ile oluşturulan birleşik cümleler de iki türlüdür: 1. Bağlaçsız birleşik cümleler, 2. bağlaçlı birleşik cümleler. ## Bağlaçsız Birleşik Cümleler **484.** Orhon Türkçesinde en yaygın olarak kullanılan birleşik cümle türü budur: - *çıgañ bodunug bay kıltım, az bodunug üküş kıltım* "Yoksul halkı zengin ettim, az halkı çoğalttım" (KT G 9) - *bilgä kagan ärmiş, alp kagan ärmiş* "(Onlar) akıllı hakanlar imiş, yiğit hakanlar imiş" (KT D 3) - *anta kisrä inisi kagan bolmiş ärinç, oglıtı kagan bolmiş ärinç* "On...
  - `Ata 2011, s. 55` (eslesen: _BODuNuG BaY_)
    > ...D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop...
  - `Olmez 2017, s. 94` (eslesen: _BODuNuG BaY_)
    > ...sp;&nbsp;olor-: fiil tabanı &nbsp;&nbsp;&nbsp;&nbsp;-tu: bilinen geçmiş zaman eki &nbsp;&nbsp;&nbsp;&nbsp;+m: teklik birinci kişi eki **Runik** (4 satır; ilk satırın sağında satır numarası: 10) ***G 10.*** *yok : čıgań́ bodunug : k²op k²uvratdıḿ : čıgań́ : bodunug : bay kıltım : az bodunug : üküš : kıltım : azu bo savımda : ıgıd bargú tǘr²k : begler : bodun : bońı ėšidiŋ : tür²k bødɯŋ tëriṕ el tutıkıjın : bońtá urtum : yaǰılıp : ólsıkıjın : yeme :* "yoksul ve fakir olan halkı tümüyle bir araya getirdim. Yoksul halkı zeng...
  - `Ata 2011, s. 48` (eslesen: _BODuNuG BaY_)
    > ...yerleşik hayata geçerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, il...
  - `Tanyeri, s. 24` (eslesen: _BODuNuG BaY_)
    > ...di.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parçalarını ifade etmektedir. “Üze kök Tengri, asra yaġız yer” veya “Çıgany bodunuġ bay kıltım, az bodunuġ üküş kıltım.” gibi ifadelerde görüldüğü üzere, eşit ögeli birimlerle koşutluk sağlanarak anlatım güçlü ve etkili kılınmıştır. Yukarıda sıralanan maddeler altında verilen bilgiler, yazıtlar döneminde Türkçenin gelişmiş bir “yazı” ve “ya...


## BK-K-7#6 - Bilge Kağan Yazıtı, Kuzey 7. satir  (6 kelime)

- **transkripsiyon:** `aZ : BODuNuG : ÖKÜŞ : KILDıM : aZU : BU`
- **kelime karsiliklari:** AZ : BOYLARI : ÇOK : KILDIM : AZU : BU
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _aZ BODuNuG_)
    > ...ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam ha...
  - `Tekin 2003, s. 134` (eslesen: _aZ BODuNuG_)
    > ...deyişle, belirsiz miktarları ifade eden sözcükler şunlardır: *az* "az", *azça* "biraz", *azkıńa* "pek az, azıcık", *üküş* "pek çok". Belirsizlik sayıları niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk hal...
  - `Ata 2011, s. 55` (eslesen: _aZ BODuNuG_)
    > ...teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür...
  - `Olmez 2017, s. 94` (eslesen: _aZ BODuNuG_)
    > ...banı &nbsp;&nbsp;&nbsp;&nbsp;-tu: bilinen geçmiş zaman eki &nbsp;&nbsp;&nbsp;&nbsp;+m: teklik birinci kişi eki **Runik** (4 satır; ilk satırın sağında satır numarası: 10) ***G 10.*** *yok : čıgań́ bodunug : k²op k²uvratdıḿ : čıgań́ : bodunug : bay kıltım : az bodunug : üküš : kıltım : azu bo savımda : ıgıd bargú tǘr²k : begler : bodun : bońı ėšidiŋ : tür²k bødɯŋ tëriṕ el tutıkıjın : bońtá urtum : yaǰılıp : ólsıkıjın : yeme :* "yoksul ve fakir olan halkı tümüyle bir araya getirdim. Yoksul halkı zengin ettim, az olan ha...
  - `Tekin 1998, s. 20` (eslesen: _aZU BU_)
    > ...u bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körü...
  - `Tekin 2003, s. 114` (eslesen: _aZU BU_)
    > ...ardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başla...


## BK-K-8#1 - Bilge Kağan Yazıtı, Kuzey 8. satir  (9 kelime)

- **transkripsiyon:** `SaBıMDA : İGiD : BaR : GU : TÜRK : BeGLeR : BODuN : BUNI : eŞİDiŊ`
- **kelime karsiliklari:** SÖZÜMDE : İGİT : VAR : MI? : TÜRK : BEĞLERİ : BOYLARI : BUNU : İŞİTİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SaBıMDA İGiD BaR GU_)
    > ...ğ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığ...
  - `Tekin 2003, s. 156` (eslesen: _SaBıMDA İGiD BaR GU_)
    > ...çlar **367.** Orhon Türkçesinde sıradaş bağlaçlar ya da bağlaç görevinde kullanılan sözcükler şunlardır: *azu, artukı, takı, udu, ulayu* ve *yämä*. **368.** *azu* "veya, yoksa, yahut" (= Tuva *azı* ay. < *\*āz-* "azmak, yoldan sapmak ya da çıkmak"): *azu bu sabımda igid bar gu* "(Yoksul halkı zengin ettim, az halkı çoğalttım); yoksa, bu sözlerimde yalan var mı?" (KT G 10) Yinelemeli olarak: *azu turuk sub ärsär opayın, azu itmiş yaratmış tatıglıg aş ärsär aşayın* "Ya duru su olsun içip yutayım ya da yapılmış edilmiş tatlı yemek ol...
  - `Ata 2011, s. 122` (eslesen: _SaBıMDA İGiD BaR GU_)
    > ...AĞLAÇ Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan,...
  - `Ata 2011, s. 115` (eslesen: _SaBıMDA İGiD BaR GU_)
    > ...[[s. 115]] Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir y...


## BK-K-8#2 - Bilge Kağan Yazıtı, Kuzey 8. satir  (7 kelime)

- **transkripsiyon:** `TÜRK : BODuNuG : TİRiP : İL : TUTSıKıŊıN : BUNDA : URTuM`
- **kelime karsiliklari:** TÜRK : BOYLARINI : DERİP : İL : TUTACAĞINI : BUNDA : [TAŞA] VURDUM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRK BODuNuG_)
    > ...şilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğü...
  - `Tekin 2003, s. 123` (eslesen: _TÜRK BODuNuG_)
    > ...hanet ettin" (KT D 23, BK D 19) 2. *özüm* "kendim", *özi* "kendisi, kendileri": *bän özüm tabgaç iliŋä kılıntım* "Ben kendim Çin egemenliği döneminde doğdum" (T 1) *män özüm kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben ken...
  - `Tekin 1998, s. 31` (eslesen: _BODuNuG TİRiP_)
    > ...ertiğ. Tefğri yarlıkladukın üçün, özlüm kutum bar üçün kfağan olurtlum. Kağan olurup yok çığariy bodunuğ kop kubrattım. [[s. 31]] Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azlu bu| (K 8) sabımda iğid bar gu? Türük beğler bodun, bunı eşidinğ! Türük bodunuğ tirip (i)! tutsıkıfiğın bunta urtum; yafığılıp ölsikinğin yeme) buntla urtlum. Nefiğ nefiğ sabım (ersler bengü taşka urtum. Afiğar körü bilinğ. Türük matı bodun beğler, bödke körüğme (beğller Iglü, yalağlıltaçı siz? (Kafiğim|) (K 9) kağan, eçim kağan olurtukınta t...
  - `Tekin 2003, s. 166` (eslesen: _TİRiP İL_)
    > ...sın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *bunta urtum* "(Ey) Türk halkı! Hayatta kalıp (nasıl) devlet sahibi olacağını buraya kaydettim, yanılıp (nasıl) öleceğini (de) buraya kaydettim" (KT G 10-11) *kün...
  - `Tekin 1998, s. 20` (eslesen: _İL TUTSıKıŊıN_)
    > ...i yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerl...
  - `Tekin 2003, s. 141` (eslesen: _İL TUTSıKıŊıN_)
    > ...ada" (< *bun+ta*) ve *anta* "orada" (< *an+ta*). [s. 141] # s. 141 — ORHON TÜRKÇESİ GRAMERİ **315.** *bunta* "burada, bu yerde" (bk. **İşaret Zamirleri**): *kagan at bunta biz birtimiz* "(Ona) Hakan unvanını burada biz verdik" (KT D 20) *türük [bodun ti]rip il tutsıkıŋın bunta urtum yaŋılıp ölsikiŋin yämä bunta urtum* "(Ey) Türk halkı! Senin (nasıl) hayatta kalarak devlet sahibi olacağını burada (taş üzerine) kazdırttım; (nasıl) yanılıp öleceğini de burada (taş üzerine) kazdırttım" (KT G 10-11) *örgin bunta et(it)dim* "Otağ(ı...


## BK-K-8#3 - Bilge Kağan Yazıtı, Kuzey 8. satir  (5 kelime)

- **transkripsiyon:** `YaŊıLıP : ÖLSiKiŊiN : YiME : BUNDA : URTuM`
- **kelime karsiliklari:** YANILIP : ÖLECEĞİNİ : YİNE : BUNDA : [TAŞA] VURDUM
- **kanit:**
  - `Tekin 2003, s. 141` (eslesen: _YaŊıLıP ÖLSiKiŊiN_)
    > ...* "orada" (< *an+ta*). [s. 141] # s. 141 — ORHON TÜRKÇESİ GRAMERİ **315.** *bunta* "burada, bu yerde" (bk. **İşaret Zamirleri**): *kagan at bunta biz birtimiz* "(Ona) Hakan unvanını burada biz verdik" (KT D 20) *türük [bodun ti]rip il tutsıkıŋın bunta urtum yaŋılıp ölsikiŋin yämä bunta urtum* "(Ey) Türk halkı! Senin (nasıl) hayatta kalarak devlet sahibi olacağını burada (taş üzerine) kazdırttım; (nasıl) yanılıp öleceğini de burada (taş üzerine) kazdırttım" (KT G 10-11) *örgin bunta et(it)dim* "Otağ(ımı) burada kurdurtdum" (Tar. G...
  - `Tekin 1998, s. 20` (eslesen: _ÖLSiKiŊiN_)
    > ...üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla k...
  - `Olmez 2017, s. 95` (eslesen: _ÖLSiKiŊiN_)
    > ...tabanı - +n: zamir n'si - +ta: bulunma/ ayrılma durumu eki **urtum** < *ur-tu+m* "kazıdım" - ur-: fiil tabanı - -tu: bilinen geçmiş zaman eki - +m: teklik birinci kişi eki **yaŋılıp** < *yaŋıl-(ı)p* "hata edip" - yaŋıl-: fiil tabanı - -(ı)p: zarffiil eki **ölsıkiŋin yeme** < *yem-e* "öleceğinizi de" - yem-: fiil tabanı - -e: zarffiil eki; kalıplaşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayf...
  - `Ergin 1970, s. 13` (eslesen: _YaŊıLıP_)
    > ...olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk milleti, beyleri, bu zamanda itaat eden beyler olarak mı yanılacaksınız? [s. 14] Ben ebedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. B...
  - `Tekin 2003, s. 109` (eslesen: _YaŊıLıP_)
    > ...Hanını bırakıp (başkalarına) bağımlı oldun" (T 3) *kürägüŋ+in üçün* "ele avuca sığmaz olduğun için" (KT D 23, BK D 19) *bäglik urı ogluŋ+ın kul kıltıg* "Bey olmaya layık erkek çocuklarını köle yaptın" (BK D 20) *türük [bodun ti]rip il tutsıkıŋ+ın bunta urtum, yaŋılıp ölsikiŋ+in yämä bunta urtum* "Türk halkı, yaşayıp (nasıl) devlet sahibi olacağını buraya hakkettim, yanılıp öleceğini de buraya hakkettim" (KT G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg a...
  - `Ata 2011, s. 152` (eslesen: _YaŊıLıP_)
    > ...yalan var mı? Türk beyleri, Türk ulusu bunu işitin! Türk halkı (senin) ku͡ ubr(a)td(ı)m çıg(a)ń bod(u)n(u)g yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de b(a)y kıl͡tım az bod(u)n(u)g üküş kıl͡t(ı)m (a)zu bu s(a)b(ı)mda ig(i)d b(a)rgu türük͡ b(e)gl(e)r bod(u)n bunı (e)şid(i)ŋ türük [bodun ti]r(i)p il tuts(ı)k(ı)ŋ(ı)n bunt͡ a urt(u)m y(a)ŋ(ı)l(ı)p öls(i)k(i)ŋ(i)n y(e)me KÖ...


## BK-K-8#4 - Bilge Kağan Yazıtı, Kuzey 8. satir  (7 kelime)

- **transkripsiyon:** `NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM`
- **kelime karsiliklari:** NE[CE] : NE[CE] : SÖZÜM : [VAR] İSE : BENGÜ : TAŞA : VURDUM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SaBıM eRSeR BeŊGÜ TaŞKA_)
    > ...ariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) y...
  - `Olmez 2017, s. 96` (eslesen: _eRSeR BeŊGÜ TaŞKA URTuM_)
    > ...aşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım...
  - `Tekin 2003, s. 128` (eslesen: _TaŞKA URTuM_)
    > ...lkesinde oturup oradan) kervanlar gönderirsen hiç derdin olmaz" (KT G 8) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär...* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa..." (T 56-57) Yinelemeli olarak: *näŋ näŋ sabım ärsär bäŋgü taşka urtum* "(Söylenecek) ne kadar sözüm var ise (hepsini bu) ebedi taşa vurdum" (KT G 11, BK K 8) Daha önce gelen *kaçan* "ne zaman?" ile daha sonra gelen *ärsär* "ise" sözcüğü ile birlikte "ne zaman olsa, er veya geç" anlamına gelir: *kaçan (n)äŋ ärsär bizni... ölürt...
  - `Tekin 1998, s. 19` (eslesen: _SaBıM_)
    > ..., nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortus...
  - `Tekin 2003, s. 60` (eslesen: _SaBıM_)
    > ...BK D 7, vb.) - *sabın* "sözlerini" (IB 58) < *sab-in*, vb. [s. 60] # s. 60 — TALAT TEKİN 2. Aynı ilerleyici benzeşme tekil 1. kişi iyelik eki almış sözcüklerin belirli nesne durumlarında da meydana gelmiş olmalıdır: - *başımın* "başımı" (IB 8) < *başimin - *sabımın* "sözlerimi" (KT G 1, 11, 12; BK K 1) < *sabimin* (KT G 2) - *atımın* "adımı" (Tar. D 4) < *ātimin vb. 3. Orhon yazıtlarında genellikle uyuma girmediği yazımdan anlaşılan /-miş/ ekinin Uygur yazıtlarında uyuma girme eğiliminde olduğunu gösteren az sayıda ö...
  - `Ata 2011, s. 122` (eslesen: _SaBıM_)
    > ...AĞLAÇ Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir...


## BK-K-8#5 - Bilge Kağan Yazıtı, Kuzey 8. satir  (3 kelime)

- **transkripsiyon:** `aŊaR : KÖRÜ : BİLiŊ`
- **kelime karsiliklari:** ONU : GÖRÜP : BİLİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...ariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) yaklaştırırlar imiş. [[s....
  - `Tekin 2003, s. 123` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...i yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123] # s. 123 — ORHON TÜRKÇESİ GRAMERİ *anı yañıp türgi yargun költä buzdumuz* "Onları dağıtıp Türgi Yargun gölde bozguna uğrattık" (KT D 34) 3. Verme durumu: *aŋar körü biliŋ* "Ona bakın ve öğrenin!" (KT G 11, BK K 8) *aŋar adınç(ç)ıg bark yarat(t)urtum* (KT G 12) = *aŋar adınç(ç)ıg bark yaratı(d)dım* (BK K 1)) "Ona olağanüstü bir anıt-mezar yaptırdım" 4. Bulunma-Çıkma durumu: Bk. **Yer Zarfları**. 5. Yönelme durumu: *aŋaru sülä...
  - `Olmez 2017, s. 96` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anl...


## BK-K-8#6 - Bilge Kağan Yazıtı, Kuzey 8. satir  (11 kelime)

- **transkripsiyon:** `TÜRK : aMTI : BODuN : BeGLeR : BÖDKE : KÖRüGME : BeGLeR : GÜ : YaŊıLTaÇI : SİZ : KaŊıM`
- **kelime karsiliklari:** TÜRKÜN : ŞİMDİ[Kİ] : BOYLARI : BEĞLERİ : BÖYLE : GÖRÜĞÜMDEKİ : BEĞLER [OLARAK] : MI : YANILACAKSINIZ : SİZ? : BABAM
- **kanit:**
  - `Olmez 2017, s. 96` (eslesen: _aMTI BODuN BeGLeR BÖDKE_)
    > ...[?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anlayın. Şu anki Türk halkı, beyleri, hal...
  - `Tekin 1998, s. 20` (eslesen: _BODuN BeGLeR BÖDKE KÖRüGME_)
    > ...dunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) yaklaştırırlar imiş. [[s. 20]] (Bu halklar) yaklaşıp yerleştikten s...
  - `Ata 2011, s. 146` (eslesen: _BÖDKE KÖRüGME BeGLeR GÜ_)
    > ...lmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u- c. it- d. aç- e....
  - `Ata 2011, s. 139` (eslesen: _BÖDKE KÖRüGME BeGLeR GÜ_)
    > ...ngisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc. itd. açe. al- 10. Tasvirî fiilli birleşik fiil yapılarında,...


## BK-K-9#1 - Bilge Kağan Yazıtı, Kuzey 9. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `KaGaN : eÇiM : KaGaN : OLuRTUKINDA : TÖRT : BULuŊDaKI : BODuNıG : BUNÇA : İTMiŞ ---`
- **kelime karsiliklari:** KAĞAN : EÇÜM : KAĞAN : OTURDUĞUNDA : DÖRT : TARAFDAKI : BOYLARI : BUNCA : [DÜZEN] ETMİŞ. ---
- **kanit:**
  - `Tekin 1998, s. 31` (eslesen: _KaGaN eÇiM KaGaN_)
    > ...nı eşidinğ! Türük bodunuğ tirip (i)! tutsıkıfiğın bunta urtum; yafığılıp ölsikinğin yeme) buntla urtlum. Nefiğ nefiğ sabım (ersler bengü taşka urtum. Afiğar körü bilinğ. Türük matı bodun beğler, bödke körüğme (beğller Iglü, yalağlıltaçı siz? (Kafiğim|) (K 9) kağan, eçim kağan olurtukınta tört bulufngğdakı bodunuğ nençe itmliş, nençe yaratmış. [[s. 31]] Tlengrli) yarlıkadluk ülçlün, ölzüm olurtukuma törlt) blulunğdakı boldunuğ itdim yarlat|dım. İl.................. | kıltım. ORHON YAZITLARI 59 kadar (herkesi) öldürmezler (K 5) im...
  - `Tekin 2003, s. 145` (eslesen: _KaGaN eÇiM KaGaN_)
    > ...gin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä* (*nä* zamirinin eşitlik durumu): - *[kaŋım] kagan eçim kagan olortokınta tört buluŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik...
  - `Tekin 1998, s. 23` (eslesen: _eÇiM KaGaN_)
    > ...yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka te...
  - `Tekin 2003, s. 105` (eslesen: _eÇiM KaGaN_)
    > ...öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä in...
  - `Ata 2011, s. 120` (eslesen: _eÇiM KaGaN_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik ek...
  - `Olmez 2017, s. 55` (eslesen: _eÇiM KaGaN_)
    > ...(KT G 5) **Bilnen geçmiş zaman *-DI* ekiyle kurulur:** *ilgerü şantuŋ yazıka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını...


## BK-K-9#2 - Bilge Kağan Yazıtı, Kuzey 9. satir  (9 kelime)

- **transkripsiyon:** `TeŊRİ : YaRLıKaDUK : ÜÇüN : ÖZüM : OLuRTUKuMA : TÖRT : BULuŊDaKI : BODuNıG : İTDiM`
- **kelime karsiliklari:** TANRI : BUYURDUĞU : İÇİN : ÖZÜM : OTURDUĞUMDA : DÖRT : TARAFDAKI : BOYLARI : [DÜZEN] ETDİM
- **kanit:**
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN ÖZüM_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN ÖZüM_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş.. . [[s. 32...
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda k...


## BK-K-9#3 - Bilge Kağan Yazıtı, Kuzey 9. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `YeReTDiM : --- İ --- : KILDıM`
- **kelime karsiliklari:** YARATTIM : --- İ --- : KILDIM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _KILDıM_)
    > ...ı halklarına doğru, güneyde (de) Çin'e doğru on iki kez büyük ordu sevk ettim... savaştım. [[s. 25]] Ondan (D 29) sonra, Tanrı esirgesin, ilâhi lütfum olduğu için, kısmetim olduğu için, ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım. Sayıca az olan halkı çoğalttım; güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki (D 30) halkları hep (kendime) bağımlı kıldım, (Türk halkını) düşmansız kıldım. (Bu halkların) hepsi bana bağımlı oldular, (bana) hizmet ediyorlar. [...
  - `Ergin 1970, s. 13` (eslesen: _KILDıM_)
    > ...yere gittin. Hep orda mahvoldun, yok edildin. Orda, geri kalanınla her yere hep zayıflayarak, ölerek yürüyordun. Tanrı buyurduğu için, kendim devletli olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk mille...
  - `Ata 2011, s. 55` (eslesen: _KILDıM_)
    > ...eykelinin kırık olan başı. olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki halkları hep (kendime)...
  - `Ata 2011, s. 48` (eslesen: _KILDıM_)
    > ...ltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki halkları hep (kendime) bağımlı kıldım, (Türk halkını) düşmansız kıldım. (Bu halkların) hepsi bana bağımlı oldular, bana hizmet ediyorlar. Bunca çalışı...
  - `Roux, Eski Turk Mitolojisi, s. 65` (eslesen: _KILDıM_)
    > ...10 7 tedir. O, "Türk halkının adı ve itibarının zarar görmemesini" sağlamaktadır. Onun müdahalesi sayesinde hükümdar şöyle diyebilmektedir: "Ben, ölüm döşeğinde yatan halkı sağaltarak tekrar yaşama döndürdüm. Çıplak halkı giydirdim, fakir halkı varlıklı kıldım ve küçük halkı büyüttüm." Dolayısıyla, halk onu kendine ait olarak görebilir ve onu "tanrım" (Tengrim) olarak adlandırabilir. Ne var ki, daha düşük seviyelerdeki tanrılara ilgi duyan asıl kitlelerin, görünüşe göre Tengri ile doğrudan bir ilgileri yok. Onu...
  - `Kafesoglu, s. 75` (eslesen: _KILDıM_)
    > ...u samimî ifadeler yer almıştır (Bilge'nin ağzından): "..Küçük kardeşim Kül Tegin öldü, görür gözüm görmez oldu, bilir bilgim bilmez oldu... Zamanın takdiri Tanrınındır. Kişi-oğlu ölmek için yaratılmıştır. Yaslandım, gözden yas, gönülden feryat gelerek yanıp yakıldım... Milletimin gözü, kası (ağlamaktan) fena olacak diye sakındım114 °. [[s. 75]] Çin'de de aynı üzüntü duyulmuş, imparator hususî elçi ile Ötüken'e baş sağlığı mektubu göndermiş, Kül Tegin'in hâtırasına dikilecek âbidede Çince bir metnin de bulunmasını arzu et...
