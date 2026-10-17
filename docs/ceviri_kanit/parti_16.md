# Ceviri istek paketi 16 - Orhun cumlecikleri

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


## BK-D-7#1 - Bilge Kağan Yazıtı, Doğu 7. satir  (8 kelime)

- **transkripsiyon:** `YOŊŞURTUKIN : ÜÇÜN : TÜRK : BODuN : İLLeDÜK : İLİN : IÇGıNU : IDMıŞ`
- **kelime karsiliklari:** YONGŞURDUĞU : İÇİN : TÜRK : BOYLARI : İLLEDİĞİ : İLİNİ : TERK : ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _BODuN İLLeDÜK İLİN IÇGıNU_)
    > ...z, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna...
  - `Ata 2011, s. 51` (eslesen: _BODuN İLLeDÜK İLİN IÇGıNU_)
    > ...olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan D...
  - `Ata 2011, s. 44` (eslesen: _BODuN İLLeDÜK İLİN IÇGıNU_)
    > ...inç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na k...


## BK-D-7#2 - Bilge Kağan Yazıtı, Doğu 7. satir  (4 kelime)

- **transkripsiyon:** `KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ`
- **kelime karsiliklari:** KAĞANLADIĞI : KAĞANINI : YİTİRİ : ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...z”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gü...
  - `Ata 2011, s. 51` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...ş erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya k...
  - `Ata 2011, s. 44` (eslesen: _KaGaNLaDUK KaGaNIN YİTüRÜ IDMıŞ_)
    > ...yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halk...


## BK-D-7#3 - Bilge Kağan Yazıtı, Doğu 7. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI`
- **kelime karsiliklari:** TABGAÇ : BOYLARINA : BEĞLİK : ERKEK : EVLADI : KUL : OLDU
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇ BODuNKA BeGLiK URI_)
    > ...ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka t...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ BODuNKA BeGLiK URI_)
    > ...ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleşt...
  - `Ata 2011, s. 44` (eslesen: _BODuNKA BeGLiK URI OGLIN_)
    > ...ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında p...


## BK-D-7#4 - Bilge Kağan Yazıtı, Doğu 7. satir  (4 kelime)

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


## BK-D-7#5 - Bilge Kağan Yazıtı, Doğu 7. satir  (6 kelime)

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


## BK-D-7#6 - Bilge Kağan Yazıtı, Doğu 7. satir  (10 kelime)

- **transkripsiyon:** `TaBGaÇGI : BeGLeR : TaBGaÇ : ATIN : TUTuPaN : TaBGaÇ : KaGaNKA : KÖRMiŞ : eLiG : YIL`
- **kelime karsiliklari:** TABGAÇ : BEĞLERİ [GİBİ] : TABGAÇ : ADINI : TUTUP : TABGAÇ : KAĞANINA : GÖRMÜŞ : ELLİ : YIL
- **kanit:**
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN TUTuPaN TaBGaÇ KaGaNKA KÖRMiŞ eLiG YIL_)
    > ...ısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hü...
  - `Ata 2011, s. 44` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN TUTuPaN TaBGaÇ KaGaNKA KÖRMiŞ eLiG YIL_)
    > ...çün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümdarlar imiş. [[s. 44]]...
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇGI BeGLeR TaBGaÇ ATIN_)
    > ...ısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İll...


## BK-D-8#1 - Bilge Kağan Yazıtı, Doğu 8. satir  (3 kelime)

- **transkripsiyon:** `İŞiG : KÜÇiG : BİRMiŞ`
- **kelime karsiliklari:** İŞİ : GÜCÜ : [TABGAÇA] VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _BİRMiŞ_)
    > ...taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük...
  - `Tekin 2003, s. 108` (eslesen: _BİRMiŞ_)
    > ...(Türk halkını) besledim" (BK D 38) *başlıg+ıg yüküntürmiş, tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler b...
  - `Ata 2011, s. 47` (eslesen: _BİRMiŞ_)
    > ...baren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde...
  - `Ata 2011, s. 40` (eslesen: _BİRMiŞ_)
    > ...n itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzeri...
  - `Tanyeri, s. 19` (eslesen: _BİRMiŞ_)
    > ...ye olmak), “baz kıl-” (tâbi kılmak) 2. “Fiil + zarf fiil eki + tasvir fiili”: - “Fiil + -A~-I/-U + bir-”: Kesinlik bildirir. “Ver-” tasvir fiili Türkiye Türkçesinde tezlik bildirir. Göktürkçede tezlik değil, kesinlik bildirir: “Tuta birmiş” (tutmuştur), “alı birmiş” (almış) - “Fiil + -I/-U + u-”: Yeterlik bildirir: “kim artatı udaçı erti” (kim bozabilecek idi), “itini yaratunu umaduk yana içikmiş” (teşkilâtlanmadığı için tekrar tâbi olmuş) - “Fiil + -U + ıd-”:...
  - `09b_Janly_Myrza_Bapaeva_Tuva_Kamlarinin_Alkislari, s. 62` (eslesen: _BİRMiŞ_)
    > ...ek için kesilebilir. ı. [[s. 62]] Ağaç Kültü Ağaç kutsama ayini (ıyaş dagıırı):76 Tuva kamları iki tür ağaca çok önem verirler. Birincisi, bir kökten ayrılmış iki gövdeli ağaç şeklinde olan ‘tel ıyaş’. Bazen öyle olur ki, Sibirya ardıcı ve çam, sanki kökleri birmiş gibi aynı yerden çıkarlar. Bu tür karma ağaca Tuvalar ‘tel ıyaş’ derler. Şamanların anlayışına göre, kol ve ayak romatizması olan insan, muhakkak o tel ıyaşı kesmiştir. [[s. 62]] Bu hastalığın tedavisinde, o tel ıyaşın dallarına ve etrafına, renkli bezler ve...


## BK-D-8#2 - Bilge Kağan Yazıtı, Doğu 8. satir  (8 kelime)

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


## BK-D-8#3 - Bilge Kağan Yazıtı, Doğu 8. satir  (5 kelime)

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


## BK-D-8#4 - Bilge Kağan Yazıtı, Doğu 8. satir  (6 kelime)

- **transkripsiyon:** `TaBGaÇ : KaGaNKA : İLİN : TÖRÜSİN : aLI : BİRMiŞ`
- **kelime karsiliklari:** TABGAÇ : KAĞANA : İLİNİ : TÖRESİNİ : ALI : VERMİŞ
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


## BK-D-8#5 - Bilge Kağan Yazıtı, Doğu 8. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : KaRA : KaMaG : BODuN : aNÇA : TİMiŞ`
- **kelime karsiliklari:** TÜRK : KARA : KAMAG : BOYLARI : ANCA : DEMİŞ
- **kanit:**
  - `Olmez 2017, s. 22` (eslesen: _TÜRK KaRA KaMaG BODuN_)
    > ...en kötülüğü orada düşünürlermiş." (KT G 4-5). Çin yönetimi boyunduruğu altına aldığı Türkleri kullanarak Mançurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle...
  - `Tekin 1998, s. 34` (eslesen: _KaRA KaMaG BODuN aNÇA_)
    > ...; Tabglaçgı| beğler Tabglaç atın tutupan Tabgaç kağanka körmiş. [[s. 34]] Eliğ yıl) (D 8) işiğ küçüğ birmiş. İlgerü, kün tuğsıkka, Bükli IklJağanka teği süleyü birmiş, kurığaru Temir Kapığka <teği> süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ bodun ança timiş: “İlliğ bodun (ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş|. (D 9) “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. Yağı bolup, itinü yaratınu umaduk, yana içikmiş. [[s...
  - `Tekin 2003, s. 209` (eslesen: _KaRA KaMaG BODuN aNÇA_)
    > ...a kaldı" (BK D 31) - *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Orada kalmış olanlarınız her yöne doğru (gitgide) zayıflayarak ve ölerek yürüyor idiniz" (KT G 9), vb. 5. Özne ad öbeği: - *bodun boguzi tok ärti* "Halkın boğazı tok idi" (T 8) - *türük kara kamag bodun / ança timiş* "Türk avam tabakası şöyle demiş" (KT D 8-9), vb. 6. Özne yüklemli bir yapı (cümle): [s. 210] # s. 210 — TALAT TEKİN *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş / idi yok ärmiş* "Türk halkının Demir Kapı'ya ve Tensi oğlu (Tanrı oğlu) d...


## BK-D-8#6 - Bilge Kağan Yazıtı, Doğu 8. satir  (3 kelime)

- **transkripsiyon:** `İLLiG : BODuN : eRTiM`
- **kelime karsiliklari:** İLLİ : BOYLAR : İDİM
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _İLLiG BODuN eRTiM_)
    > ...tın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ bir...
  - `Ata 2011, s. 119` (eslesen: _İLLiG BODuN eRTiM_)
    > ...abılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç duru...
  - `Ata 2011, s. 112` (eslesen: _İLLiG BODuN eRTiM_)
    > ...ledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almı...


## BK-D-8#7 - Bilge Kağan Yazıtı, Doğu 8. satir  (8 kelime)

- **transkripsiyon:** `İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ`
- **kelime karsiliklari:** İLİM : [Ş]İMDİ : HANİ? : KİME : İLİ : KAZANIR[IM] BEN : DER : İMİŞ
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


## BK-D-9#1 - Bilge Kağan Yazıtı, Doğu 9. satir  (3 kelime)

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


## BK-D-9#2 - Bilge Kağan Yazıtı, Doğu 9. satir  (9 kelime)

- **transkripsiyon:** `KaGaNıM : KaNI : NE : KaGaNKA : İŞiG : KÜÇüG : BERÜRMeN : TİR : eRMiŞ`
- **kelime karsiliklari:** KAĞANIM : HANİ? : NE : KAĞANA : İŞİ : GÜÇÜ : VERİR[İM] BEN : DER : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KaGaNıM KaNI NE KaGaNKA_)
    > ...ıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğ...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNıM KaNI NE KaGaNKA_)
    > ...İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı olan bir halktım, hakanım...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA İŞiG KÜÇüG_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57)...


## BK-D-9#3 - Bilge Kağan Yazıtı, Doğu 9. satir  (13 kelime)

- **transkripsiyon:** `aNÇA : TİP : TaBGaÇ : KaGaNKA : YaGI : BOLMıS : YaGI : BOLuP : İTiNÜ : YaRaTUNU : UMaDUK : YaNA : İÇiKMiŞ`
- **kelime karsiliklari:** ANCA : DEYİP : TABGAÇ : KAĞANINA : YAĞI : OLMUŞ : YAĞI : OLUP : EDİNE : YARATINA : MADIĞ[INDAN] : YANA : İÇİKMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _aNÇA TİP TaBGaÇ KaGaNKA_)
    > ...ka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun...
  - `Tekin 2003, s. 220` (eslesen: _aNÇA TİP TaBGaÇ KaGaNKA_)
    > ...ägi > süläyü birmiş. Tabgaç kaganka ilin törösin alı birmiş. Türük kara kamag bodun ança timiş: "İllig bodun [ärtim; ilim amtı kanı? Kämkä ilig kazganur män?" tir ärmiş]. (D 9) "Kaganlıg bodun ärtim; kaganım kanı? Nä kaganka işig küçüg birür män?" tir ärmiş. Ança tip Tabgaç kaganka yagı bolmış. Yagı bolup itinü yaratınu umadok, yana içikmiş. Bunça işig küçüg birtök(k)ärü sakınmatı "Türük bodunug ölüräyin, urugsıratayin!" tir ärmiş. [s. 221] # s. 221 — TALAT TEKİN (basılı sayfa numarası 222) # Tunyukuk Yazıtı (725 ?) ## I. Batı Yüzü...
  - `Tekin 1998, s. 34` (eslesen: _KaGaNKA YaGI BOLMıS YaGI_)
    > ...miş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ bodun ança timiş: “İlliğ bodun (ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş|. (D 9) “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. Yağı bolup, itinü yaratınu umaduk, yana içikmiş. [[s. 34]] Bunça işiğ küçüğ birtükkerü sakınmatı “Türük bodunuğ ölürleyin, uruğsırlatayın ” (tir ermiş. | (Üze) (D 10) Türük Tefiğrisi <Türük> ıduk yiri subı ança etmiş erinç: Türük bodun yok bolmazun tiyin, bodun b...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNKA YaGI BOLMıS YaGI_)
    > ...lan bir halktım, hakanım nerede! Kimin Hakanına hizmet edip çalışıyorum!' dermiş. Böyle deyip Çin hakanına düşman olmuş" (KT D 8-9). Ancak 682'ye kadarki isyanlar iyi örgütlenemedikleri için başarısız olmuştur. Bunu da şu satırlardan okuruz: *ança tėp tavgaç kaganka yagı bolmış, yagı bolup ėtinü yaratunu umadok yana içikmiş* "Böyle deyip Çin hakanına düşman olmuş. Düşman olduktan sonra (kendisini) örgütleyemediğinden tekrar yine bağımlı olmuş" (KT D 8-9). Türklerden kalma ilk Türkçe belgeler işte bu kağanlık döneminde kayda geçmiştir. 7...


## BK-D-9#4 - Bilge Kağan Yazıtı, Doğu 9. satir  (5 kelime)

- **transkripsiyon:** `BUNÇA : İŞiG : KÜÇüG : BİRTÜKGeRÜ : SaKıNMaTI`
- **kelime karsiliklari:** [TABGAÇ] BUNCA : İŞİ : GÜÇÜ : VERDİĞİNİ : SAKINMADAN
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BUNÇA İŞiG KÜÇüG BİRTÜKGeRÜ SaKıNMaTI_)
    > ...: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü köt...
  - `Tekin 2003, s. 169` (eslesen: _BUNÇA İŞiG KÜÇüG_)
    > ...isizliğin yüzünden" (BK D 20) *kazgantokin üçün udu özüm kazgantokum üçün...* "(İlteriş Hakan) kazandığı için ve ben kazandığım için..." (T 55) *olortokuma* "tahta oturduğumda..." (BK D 2) *[kaŋım] kagan uçdokda* "Babam Hakan vefat ettiğinde..." (BK D 13-14) *bunça işig küçüg birtökgärü sakınmatı* "(Kendilerine) bunca hizmet ettiği gerçeğini (hiç) düşünmeden..." (KT D 10) 2. Geçmiş zaman eylem sıfatı olarak: *bardok yirdä ädgüg ol ärinç* "Gittiğin yerlerde (biricik) kazancın şu oldu şüphesiz" (KT D 24, BK D 20) [s. 170] # s. 170...
  - `Ata 2011, s. 177` (eslesen: _BUNÇA İŞiG KÜÇüG_)
    > ...adesindeki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bu...
  - `Ata 2011, s. 170` (eslesen: _BUNÇA İŞiG KÜÇüG_)
    > ...itürü 7. Kara kamag bodun ifadesindeki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. [[s. 170]] sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bunca işle güçle uğraştıktan...


## BK-D-9#5 - Bilge Kağan Yazıtı, Doğu 9. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : BODuN : ÖLÜReYİN : URuGSıRaTaYIN : TİR : eRMiŞ`
- **kelime karsiliklari:** TÜRK : BOYLARINI : ÖLDÜREYİM : URUGSIRATAYIM : DER : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BODuN ÖLÜReYİN URuGSıRaTaYIN TİR_)
    > ...liğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi...
  - `Ata 2011, s. 177` (eslesen: _ÖLÜReYİN URuGSıRaTaYIN TİR eRMiŞ_)
    > ...şağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bunca işle güçle uğraştıktan sonra Türk halkını öldüreyim, yerine...
  - `Ata 2011, s. 170` (eslesen: _ÖLÜReYİN URuGSıRaTaYIN TİR eRMiŞ_)
    > ...özcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. [[s. 170]] sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bunca işle güçle uğraştıktan sonra Türk halkını öldüreyim, yerine konayım dermiş. c. Bunca işi g...


## BK-D-9#6 - Bilge Kağan Yazıtı, Doğu 9. satir  (4 kelime)

- **transkripsiyon:** `YOKaDU : BaRIR : eRMiŞ : ÜZE`
- **kelime karsiliklari:** [TÜRKLER] YOK OLMAYA : VARIR : İMİŞ : ÜSTTE
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _YOKaDU BaRIR eRMiŞ ÜZE_)
    > ...dun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (...
  - `Ata 2011, s. 160` (eslesen: _YOKaDU BaRIR eRMiŞ_)
    > ...mak” < urug “kabile” +sıra “çocuksuz bırakmak” [isimden fiil yapım eki] –t [ettirgenlik eki] –ayın [1. tekil kişi emir eki] yokad- “yok olmak” < yo- “yok olmak” –k “yok” [fiilden isim yapım eki] +ad [isimden fiil yapım eki] –u [zarf-fiil eki: yokadu barır ermiş “yok olmaya doğru gidermiş”] ti- “demek” –r er-miş [3. tekil kişi geniş zamanın rivayeti] ı- “göndermek” –duk [sıfat-fiil eki: Türk ıduk yiri subı “Türk kutsal yeri suyu (ruhları)”] sub “su” +ı [3. tekil kişi iyelik eki] bol- “olmak” -...
  - `Ata 2011, s. 153` (eslesen: _YOKaDU BaRIR eRMiŞ_)
    > ...- “nesilsiz bırakmak” < urug “kabile” +sıra “çocuksuz bırakmak” [isimden fiil yapım eki] –t [ettirgenlik eki] –ayın [1. tekil kişi emir eki] yokad- “yok olmak” < yo- “yok olmak” –k “yok” [fiilden isim yapım eki] +ad [isimden fiil yapım eki] –u [zarf-fiil eki: yokadu barır ermiş “yok olmaya doğru gidermiş”] ti- “demek” –r er-miş [3. [[s. 153]] tekil kişi geniş zamanın rivayeti] ı- “göndermek” –duk [sıfat-fiil eki: Türk ıduk yiri subı “Türk kutsal yeri suyu (ruhları)”] sub “su” +ı [3. tekil kişi iyelik eki] bol- “olmak” -ma [olumsuzlu...
  - `Tanyeri, s. 19` (eslesen: _YOKaDU BaRIR eRMiŞ_)
    > ...+ ıd-”: Oluşun, hareketin tamamlandığını bildirir: “ıçgınu ıdmış” (elden çıkarmış), “yitürü ıdmış” (kaybetmiş) - “Fiil + -A ~-U~(X)p + bar-”: Oluşun, hareketin tamamlandığını bildirir: “uça barmış” (uçup gitmiş, vefat etmiş), “yokadu barır ermiş” (yok olup gidermiş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fii...


## BK-D-10#1 - Bilge Kağan Yazıtı, Doğu 10. satir  (8 kelime)

- **transkripsiyon:** `TÜRK : TeŊRİSİ : TÜRK : IDUK : YİRİ : SUBI : aNÇA : iTMiŞ`
- **kelime karsiliklari:** TÜRK : TANRISI : TÜRK : KUTLU : YERİ : SUYU : ANCA : [DÜZEN] ETMİŞ
- **kanit:**
  - `Ogel C1, s. 293` (eslesen: _TÜRK TeŊRİSİ TÜRK IDUK_)
    > ...rkler dualarında, hem yerin ve hem de göğün yardımını istemekte idiler. Türk milletine ve onun hükümdarı olan Türk Hakanına, hem gök ve hem de yer yardım ederdi. [[s. 293]] Göktürk Yazıtlarındaki şu cümleler, dediklerimizi desıckliyen canlı belgelerdir: “Üze Türk Tengrisi, Türk ıduk yeri, subı inçe itmiş : “Türk Budun yok bolmasun, tiyin, “Budun bolçun, tiyin, kangım İlteriş Kaganıg, ögüm İl-Bilge Katunıg, Tengri töpüsinde tutup, yügerü kötürmiş erinç.” [[s. 293]] Yani : “Yukarıda Türk Tanrısı, Türkün kutsal yeri ve suyu şöyle yapmış: “...
  - `Radloff, s. 219` (eslesen: _TÜRK TeŊRİSİ TÜRK IDUK_)
    > ...edir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze tengri asra yer yarlıkaduk üçün ... ). Tonyukuk ya zıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakan lığı devrinde maddf bir varlık tasavvu...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TÜRK TeŊRİSİ TÜRK IDUK_)
    > ...ri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş.. . [[s. 32]] ; üze tengri asra yer yarlıkaduk ü çün ...). Tonyukuk yazıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakanlığı devrinde maddî bir varlık tasavvur e...


## BK-D-10#2 - Bilge Kağan Yazıtı, Doğu 10. satir  (19 kelime)

- **transkripsiyon:** `TÜRK : BODuN : YOK : BOLMaZUN : TİYiN : BODuN : BOLÇUN : TİYiN : KaŊıM : İLTeRiŞ : KaGaNıG : ÖGüM : İLBİLGE : KaTUNıG : TeŊRİ : TÖPüSİNDE : TUTuP : YÜGeRÜ : KÖTÜRMiŞ`
- **kelime karsiliklari:** TÜRK : BOYLARI : YOK : OLMASIN : DİYE : BOYLAR : OLSUN : DİYE : BABAM : İLTERİŞ : KAĞANI : ANAM : İLBİLGE : KADINI : TANRI [GÖĞÜN] : TEPESİNDE : TUTUP : YUKARI : GÖTÜRMÜŞ
- **kanit:**
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN YOK BOLMaZUN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli k...
  - `Tekin 1998, s. 22` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...ağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Ata 2011, s. 52` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tag...
  - `Ata 2011, s. 45` (eslesen: _BODuN YOK BOLMaZUN TİYiN_)
    > ...ş” unvanı verilir. Yazıtlarda II. [[s. 45]] Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük...


## BK-D-10#3 - Bilge Kağan Yazıtı, Doğu 10. satir  (6 kelime)

- **transkripsiyon:** `eRiNÇ : KaŊıM : KaGaN : YİTİYiGiRMİ : eRiN : TaŞıKMıŞ`
- **kelime karsiliklari:** GERÇEK : BABAM : KAĞAN : YEDİ-YİRMİ : ERİNİ : TAŞIKMIŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...k bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra...
  - `Ata 2011, s. 52` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...ır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...nuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Ata 2011, s. 45` (eslesen: _eRiNÇ KaŊıM KaGaN_)
    > ...sıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er b...


## BK-D-10#4 - Bilge Kağan Yazıtı, Doğu 10. satir  (8 kelime)

- **transkripsiyon:** `TaŞRA : YORuYOR : TİYiN : KÜ : eŞiDiP : BaLIKDaKI : TaGIKMıŞ : TaGDakI`
- **kelime karsiliklari:** DIŞARI : YÜRÜYOR : DİYE : SÖZ : İŞİTİP : BALIKDAKİ : TAKINMIŞ : DAĞDAKİ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TİYiN KÜ eŞiDiP BaLIKDaKI_)
    > ...i, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılm...
  - `Ata 2011, s. 52` (eslesen: _TİYiN KÜ eŞiDiP BaLIKDaKI_)
    > ...ürük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış...
  - `Ata 2011, s. 45` (eslesen: _TİYiN KÜ eŞiDiP_)
    > ...ekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug kü...


## BK-D-11#1 - Bilge Kağan Yazıtı, Doğu 11. satir  (3 kelime)

- **transkripsiyon:** `İNMiS : TİRiLiP : YeTMiŞ`
- **kelime karsiliklari:** İNMİŞ : DİRİLİP : YETMİŞ
- **kanit:**
  - `Tekin 1998, s. 34` (eslesen: _İNMiS TİRiLiP YeTMiŞ_)
    > ...un yok bolmazun tiyin, bodun bolçun tiyin, kanığım İlteriş Kağanığ öğüm İlbilge Katunuğ tef ri töpüsinte tutup yüğerü kötürti erinç. Kafiğım kağan yeti yeğirmi erin taşlıklmlış. “Taşra) yolrı|- yur” (tiyin kü eşidip blallık|dlakı)| tağlıkmış, tağdakı| (D 11) inmiş, tirilip yetmiş er bolmış. [[s. 34]] Tengri küç birtük üçün, kafığım Kağan süsi böri teğ ermiş, yağısı kotiy teğ ermiş. İlgerü kurığaru sülep tirmiş kubratmış. Kamağı yeti yüz er bolmış. Yeti yüz er bolup elfsiremiş kağansıramış bodunuğ, küngedmiş, ORHON YAZITLARI 65 imişl...
  - `Ata 2011, s. 52` (eslesen: _İNMiS TİRiLiP YeTMiŞ_)
    > ...tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıra...
  - `Ata 2011, s. 45` (eslesen: _İNMiS TİRiLiP YeTMiŞ_)
    > ...ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladm...


## BK-D-11#2 - Bilge Kağan Yazıtı, Doğu 11. satir  (12 kelime)

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
