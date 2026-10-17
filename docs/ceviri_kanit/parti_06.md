# Ceviri istek paketi 6 - Orhun cumlecikleri

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


## KT-D-15#4 - Kül Tigin Yazıtı, Doğu 15. satir  (5 kelime)

- **transkripsiyon:** `KaGaNLıGıG : KaGaNSıRaTMıŞ : YaGIG : BaZ : KİLMiŞ`
- **kelime karsiliklari:** KAĞANLIYI : KAĞANSIRATMIŞ : YAĞIYI : BAZ : KILMIŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ YaGIG BaZ KİLMiŞ_)
    > ...rmiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çı...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ_)
    > ...Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip...
  - `Tekin 2003, s. 215` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ_)
    > ...için, ölecek halkı diriltip doyurdum" (BK D 33) - *üzä täŋri as[ra] yer yarlıkadok üç[ün]... bodunumın... konturtum* "Yukarıda gök aşağıda (da) toprak (öyle) buyurduğu için... halkımı... yerleştirdim" (BK K 10-11) - *täŋri yarlıkadok üçün, illigig ilsirätmiş, kaganlıgıg kagansıratmiş...* "(Babam Hakan), Tanrı (öyle) buyurduğu için devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış..." (KT D 15, BK D 13), vb. [s. 216] # s. 216 — TALAT TEKİN ## Ara Cümle **491.** Bir birleşik cümlenin ya bağımlı yan cümlesi ya da temel cümlesi iç...
  - `Tekin 1998, s. 21` (eslesen: _BaZ KİLMiŞ_)
    > ...ız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erin...
  - `Tekin 2003, s. 144` (eslesen: _BaZ KİLMiŞ_)
    > ...k", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop...
  - `Ata 2011, s. 47` (eslesen: _BaZ KİLMiŞ_)
    > ...ök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının de...


## KT-D-15#5 - Kül Tigin Yazıtı, Doğu 15. satir  (4 kelime)

- **transkripsiyon:** `TİZLiGiG : SÖKÜRMiŞ : BaŞLıGıG : YÜKüNDÜRMiŞ`
- **kelime karsiliklari:** DİZLİYİ : [DİZ] ÇÖKTÜRMÜŞ : BAŞLIYI : YÜKÜNDÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TİZLiGiG SÖKÜRMiŞ BaŞLıGıG_)
    > ...ı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş...
  - `Tekin 1998, s. 21` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. An...
  - `Tekin 2003, s. 220` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...i oglı kılınmış]. (D 3) Kişi oglınta üzä äçüm apam İştämi Kagan, Bumın Kagan olormış. Olorupan Türük [b]odunıŋ ilin törösin tuta birmiş, iti birmiş. Tört buluŋ kop yagı ärmiş. Sü süläpän tört buluŋdakı bodunug kop almış, kop baz kılmış. Başlıgıg yüküntürmiş, tizligig sökürmiş. İlgärü Kadırkan yışka tägi, kirü (D 4) Tämir Kapıgka tägi konturmiş. Ekin ara idi oksuz Kök Türük iti ança olorur ärmiş. Bilgä kagan ärmiş, alp kagan ärmiş. Buyrukı < yämä > bilgä ärmiş ärinç, alp ärmiş ärinç. Bägläri yämä boduni yämä tüz ärmiş. Anı üçün ili...
  - `Ata 2011, s. 47` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenlemiş...
  - `Olmez 2017, s. 103` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönder...
  - `Ata 2011, s. 40` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ndukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenl...


## KT-D-15#6 - Kül Tigin Yazıtı, Doğu 15. satir  (4 kelime)

- **transkripsiyon:** `KaŊıM : KaGaN : aNÇA : İLiG`
- **kelime karsiliklari:** BABAM : KAĞAN : ANCA : İLİ
- **kanit:**
  - `Ata 2011, s. 142` (eslesen: _KaŊıM KaGaN aNÇA İLiG_)
    > ...a (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylem...
  - `Ata 2011, s. 135` (eslesen: _KaŊıM KaGaN aNÇA İLiG_)
    > ...yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 [[s. 135]] bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini a...
  - `Tekin 1998, s. 23` (eslesen: _KaGaN aNÇA İLiG_)
    > ...abı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özü...


## KT-D-16#1 - Kül Tigin Yazıtı, Doğu 16. satir  (4 kelime)

- **transkripsiyon:** `TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ`
- **kelime karsiliklari:** TÖREYİ : KAZANIP : UÇA : VARMIŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TÖRÜG KaZGaNıP UÇA BaRMıŞ_)
    > ...m kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim...
  - `Ata 2011, s. 55` (eslesen: _TÖRÜG KaZGaNıP_)
    > ...kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışlasın, ilahî lutfum Köl Tigin heykelinin kırık olan başı. olduğ...
  - `Ata 2011, s. 48` (eslesen: _TÖRÜG KaZGaNıP_)
    > ...tum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti ola...
  - `Tanyeri, s. 19` (eslesen: _UÇA BaRMıŞ_)
    > ...ğı için tekrar tâbi olmuş) - “Fiil + -U + ıd-”: Oluşun, hareketin tamamlandığını bildirir: “ıçgınu ıdmış” (elden çıkarmış), “yitürü ıdmış” (kaybetmiş) - “Fiil + -A ~-U~(X)p + bar-”: Oluşun, hareketin tamamlandığını bildirir: “uça barmış” (uçup gitmiş, vefat etmiş), “yokadu barır ermiş” (yok olup gidermiş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge To...
  - `Tekin 1998, s. 13` (eslesen: _KaZGaNıP_)
    > ...ça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Türklerin dillerini yazmak için kullandıkları en eski bir alfabe ile yazılmıştır. Türkoloji l...
  - `Tekin 2003, s. 145` (eslesen: _KaZGaNıP_)
    > ...te “Dönelim!” dediler” (T 36) **326.** *tükäti* “tümüyle, tamamiyle” < *tükät-i* - *sabımın tükäti eşidgil* “Sözlerimi tümüyle işit!” (KT G 1) - *sabımın tükäti eşid* “Sözlerimi tümüyle işit!” (BK K 1) **327.** *bunça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca z...


## KT-D-16#2 - Kül Tigin Yazıtı, Doğu 16. satir  (7 kelime)

- **transkripsiyon:** `KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ`
- **kelime karsiliklari:** BABAM : KAĞANIN : BAŞINA : BAZ : KAĞANI : BALBAL : DİKMİŞ
- **kanit:**
  - `Tekin 2003, s. 148` (eslesen: _KaŊıM KaGaNKA BaŞLaYU BaZ KaGaNıG BaLBaL TİKMiŞ_)
    > ...ay., *ekinti* “ikinci olarak”, *yana* “yine, tekrar, ikinci kez”, *äŋ ilk*, *äŋ ilki* “ilk olarak, ilk önce”. **343.** *başlayu* < *\*başla-* “başlamak”: - *başlayu kırkız kaganıg balbal tikdim* “İlk olarak Kırgız hakanının taş heykelini diktim” (KT D 25) - *kaŋım kaganka başlayu baz kaganıg balbal tikmiş* “(Amcam hakan), babam hakan için ilk olarak bağımlı hakanın taş heykelini dikmiş” (KT D 16) **344.** *ulayu* < *\*ula-* “birleştirmek” < *\*ul* “temel, esas, başlangıç”: - *sabımın tükäti eşidgil ulayu iniygünüm oglanım birki uguşum bodunum...* “Sözlerimi b...
  - `Tekin 1998, s. 23` (eslesen: _KaGaNKA BaŞLaYU BaZ KaGaNıG_)
    > ...artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka...
  - `Tekin 1998, s. 42` (eslesen: _KaŊıM KaGaNKA_)
    > ...BİLGE KAĞAN YAZITI beğler, öngre Tölis beğler, Apa Tarklan| (G 14) başlayu ulayu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge...
  - `Tekin 2003, s. 146` (eslesen: _KaŊıM KaGaNKA_)
    > ...D 4). Bk. **Sontakılar**. **336.** *ärtiŋü* “pek, pek çok” < *ärtin-* “geçmek, ileri gitmek” + *-gü* - *tür[giş kagan] kızın ärtiŋü ulug törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle oğluma alıverdim” (BK K 9) - *bunça matı bäglär kaŋım kaganka ärtiŋü ti mag kıltı* “Bunca sadık beyler babam hakana pek çok övgü yağdırdılar” (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* “(Babam Hakan), Türk beylerini ve halkını pek çok alkışladı ve övdü” (BK G 15) **337.** *takı* “da...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA_)
    > ...li bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?"...


## KT-D-16#3 - Kül Tigin Yazıtı, Doğu 16. satir  (6 kelime)

- **transkripsiyon:** `OL : TÖRÜDE : ÜZE : eÇİM : KaGaN : OLuRTI`
- **kelime karsiliklari:** O : TÖRE : ÜZE[RİNE] : EÇÜM : KAĞAN : OTURDU
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _OL TÖRÜDE ÜZE eÇİM KaGaN OLuRTI_)
    > ...ğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süle...
  - `Ata 2011, s. 122` (eslesen: _ÜZE eÇİM KaGaN OLuRTI_)
    > ...a: Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. 114 [s. 122] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bun...
  - `Ata 2011, s. 115` (eslesen: _ÜZE eÇİM KaGaN OLuRTI_)
    > ...uş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm...


## KT-D-16#4 - Kül Tigin Yazıtı, Doğu 16. satir  (7 kelime)

- **transkripsiyon:** `eÇİM : KaGaN : OLuRıPaN : TÜRK : BODuNıG : YİÇE : İTDİ`
- **kelime karsiliklari:** EÇÜM : KAĞAN : OTURUP : TÜRK : BOYLARINI : YİNE : [DÜZEN] ETDİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN_)
    > ...yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka te...
  - `Tekin 2003, s. 105` (eslesen: _eÇİM KaGaN_)
    > ...öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä in...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik ek...
  - `Olmez 2017, s. 55` (eslesen: _eÇİM KaGaN_)
    > ...(KT G 5) **Bilnen geçmiş zaman *-DI* ekiyle kurulur:** *ilgerü şantuŋ yazıka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını...
  - `Ata 2011, s. 113` (eslesen: _eÇİM KaGaN_)
    > ...sinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...


## KT-D-16#5 - Kül Tigin Yazıtı, Doğu 16. satir  (4 kelime)

- **transkripsiyon:** `İGiTİ : ÇIGaNYıG : BaY : KILDI`
- **kelime karsiliklari:** YEDİRDİ : ÇIĞANYI : BAY : KILDI
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _ÇIGaNYıG BaY_)
    > ...ış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 20` (eslesen: _BaY KILDI_)
    > ...n sonra Wuhammed oğlu Hüseyn, Hüseyn oğlu Mahmud der Xi : "Tanrının devlet güneşini Türk burçlarında doğdurmuş olduğunu ve onların milkleri üzerinde göklerin bütün teğrelerini döndürmüş bulunduğunu gördüm#). Tanrı onlara Türk adını verdi ve onları yaryüzüne ilbay kıldı. Zamanımızın HKakanlarını onlardan çıkardış dünya milletlerinin idare yularını onların ellerine verdi; onları herkese üstün eyledi; kendilerini hak üzere kuvvetlendirdi. [[y. 20]] Onlarla birlikte çalışam, onlardan yana olanı aziz kıldı ve Türkler yüzünden on...
  - `Tekin 1998, s. 8` (eslesen: _KILDI_)
    > ...ittir. 2.3. Tunyukuk Anıtı Tunyukuk anıtı bugün de yerinde dikili duran ve biri öbüründen biraz daha büyük olan iki taştan oluşur. Daha büyük olan birinci taşta 35 satır, daha küçük olan ikinci taşta ise 27 satır bulunmaktadır. Tunyukuk anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğu...
  - `Ergin 1970, s. 9` (eslesen: _KILDI_)
    > ...elerinin bulunuşu insanlığın en büyük O R H U N Â B İ D E L E R İ [s. 9] keşiflerinden biridir. Orhun harfleri ile yazılı kitabelerden daha 12. asırda tarihçi Cuveynî Târih-î Cihangüşâ'sında bahsetmişti, ayrıca Çin kaynakları da çok eskiden bu âbidelerin dikildiğini bildirmekte idi. Fakat 18. ve 19. asırlara kadar Orhun harfli yazılar ve âbideler ilim âleminin meçhulü olarak kalmıştı. Önce Kırgızlara ait mezar taşlarından ibaret bulunan ve tek tük kelimelerle isimleri ihtiva eden Yenisey kitâbeleri bulunmuştur. [[s....
  - `Tekin 2003, s. 35` (eslesen: _KILDI_)
    > ...(BK K 2) - /TGıK/ *tagık-* (KT D 12) - /TşıK/ *taşık-* (BK D 32) - /UDsıKm/ *ud(ı)sık(ı)m* (T 22), vb. 2. Söz başında ve içinde /kı/ ses öbeği değerinde: - /zKıñA/ *azkıña* (KT D 34), fakat /zKñA/ *azk(ı)ña* (T 9) - /KıLp/ *kıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga*...
  - `Ata 2011, s. 21` (eslesen: _KILDI_)
    > ...r, Osman Nedim Tuna ve Talat Tekin. Bunlar içersinde en fazla yayın yapan kişi ise Talat Tekin’dir. Onun özellikle zetasizm ve sigmatizm konularında pek çok yazısı vardır. Konuyla ilgili kaynakçaya bakıldığında adı geçenlerin bu konuda yapmış oldukları çalışmaların bazıları görülecektir. Altay Dil Teorisinin Bugünkü Durumu Yukarıda görüldüğü gibi; başlangıçta Ural-Altay, daha sonra Altay dil...


## KT-D-16#6 - Kül Tigin Yazıtı, Doğu 16. satir  (3 kelime)

- **transkripsiyon:** `aZIG : ÖKÜŞ : KILDI`
- **kelime karsiliklari:** AZI : ÇOK : KILDI
- **kanit:**
  - `Tekin 1998, s. 8` (eslesen: _KILDI_)
    > ...ittir. 2.3. Tunyukuk Anıtı Tunyukuk anıtı bugün de yerinde dikili duran ve biri öbüründen biraz daha büyük olan iki taştan oluşur. Daha büyük olan birinci taşta 35 satır, daha küçük olan ikinci taşta ise 27 satır bulunmaktadır. Tunyukuk anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğu...
  - `Ergin 1970, s. 9` (eslesen: _KILDI_)
    > ...elerinin bulunuşu insanlığın en büyük O R H U N Â B İ D E L E R İ [s. 9] keşiflerinden biridir. Orhun harfleri ile yazılı kitabelerden daha 12. asırda tarihçi Cuveynî Târih-î Cihangüşâ'sında bahsetmişti, ayrıca Çin kaynakları da çok eskiden bu âbidelerin dikildiğini bildirmekte idi. Fakat 18. ve 19. asırlara kadar Orhun harfli yazılar ve âbideler ilim âleminin meçhulü olarak kalmıştı. Önce Kırgızlara ait mezar taşlarından ibaret bulunan ve tek tük kelimelerle isimleri ihtiva eden Yenisey kitâbeleri bulunmuştur. [[s....
  - `Tekin 2003, s. 35` (eslesen: _KILDI_)
    > ...(BK K 2) - /TGıK/ *tagık-* (KT D 12) - /TşıK/ *taşık-* (BK D 32) - /UDsıKm/ *ud(ı)sık(ı)m* (T 22), vb. 2. Söz başında ve içinde /kı/ ses öbeği değerinde: - /zKıñA/ *azkıña* (KT D 34), fakat /zKñA/ *azk(ı)ña* (T 9) - /KıLp/ *kıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga*...
  - `Ata 2011, s. 21` (eslesen: _KILDI_)
    > ...r, Osman Nedim Tuna ve Talat Tekin. Bunlar içersinde en fazla yayın yapan kişi ise Talat Tekin’dir. Onun özellikle zetasizm ve sigmatizm konularında pek çok yazısı vardır. Konuyla ilgili kaynakçaya bakıldığında adı geçenlerin bu konuda yapmış oldukları çalışmaların bazıları görülecektir. Altay Dil Teorisinin Bugünkü Durumu Yukarıda görüldüğü gibi; başlangıçta Ural-Altay, daha sonra Altay dil...
  - `Olmez 2017, s. 11` (eslesen: _KILDI_)
    > .... Sir G. Clauson'a göre *mete* (*matun/motun* Çince 冒頓 *maodun*), bugün Farsçadan ödünçlediğimiz *bahadır* sözünün en eski şeklidir. *bahadır* ise Moğolca *bagatur*'dan gelmektedir. Moğolca kelime ise Türklerin unuttuğu, Moğolların Türkçeden ödünçlediği bir şekildir. Çince kaynaklarda söz konusu kelime 莫賀咄 *moheduo* olarak görülür. Özetle Clauson'un görüşü bu şekildedir (Clauson 1972: 313b). Bir başka konu da MS tarih sahnesine çıkan Avrupa Hunları ile Asya Hunlarının ırk ve dil bakımından bağlarının bulunmadığıdır. Ço...
  - `Roux, Eski Din, s. 47` (eslesen: _KILDI_)
    > ...sinde odaklanan ve en eskisi 1 1 15 yılına tarihlenen pek çok yazma nüshası günümüze ulaşan Ebu Müslim'e (C.23) ait Köroğlu destanının (C. 7; C.4) bu açıdan zengin olduğu görül mektedir; buna karşın Melik Danişmend Destanı [Danişmendname] (C.22) aynı açıdan bakıldığında hiç de zengin değildir. [[s. 47]] Çok sayıdaki Türk-İran destansı öykünün yanı sıra konuyla uğraşanlar tarafından bilindiği gibi gerçekten belirgin arkaik yapısı olan birçok Türk eseri vardır (C.23, s. 77; Q.88; Q.89; Q.90). "Türk destanları arasında en...


## KT-D-17#1 - Kül Tigin Yazıtı, Doğu 17. satir  (9 kelime)

- **transkripsiyon:** `eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TaRDUŞ : BODuN : ÜZE : ŞaD : eRTiM`
- **kelime karsiliklari:** EÇÜM : KAĞAN : OTURDUĞUNDA : ÖZÜM : TARDUŞ : BOYLARI : ÜZE[RİNE] : ŞAD : İDİM
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN OLuRTUKDA ÖZüM TaRDUŞ BODuN ÜZE ŞaD eRTiM_)
    > ...Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansı...
  - `Ata 2011, s. 121` (eslesen: _TaRDUŞ BODuN ÜZE ŞaD_)
    > ...inde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T 25 tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. 114 [s. 122] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim...
  - `Ata 2011, s. 114` (eslesen: _TaRDUŞ BODuN ÜZE ŞaD_)
    > ...ş erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1...


## KT-D-17#2 - Kül Tigin Yazıtı, Doğu 17. satir  (7 kelime)

- **transkripsiyon:** `eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL : ÖGüZ : ŞaNTUŊ`
- **kelime karsiliklari:** EÇÜM : KAĞAN : İLE : İLERİ : YEŞİL : ÖGÜZ[E] : ŞANTUNG
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...rmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürt...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adlar...
  - `Ata 2011, s. 113` (eslesen: _eÇİM KaGaN BİRLE İLGeRÜ_)
    > ...sinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır:...


## KT-D-17#3 - Kül Tigin Yazıtı, Doğu 17. satir  (3 kelime)

- **transkripsiyon:** `YaZIKA : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** YAZIĞA : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...ra yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Ata 2011, s. 113` (eslesen: _YaZIKA TeGİ SÜLeDiMiZ_)
    > ...bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...


## KT-D-17#4 - Kül Tigin Yazıtı, Doğu 17. satir  (5 kelime)

- **transkripsiyon:** `KURıGaRU : TeMiR : KaPıGKA : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** GERİDE : DEMİR : KAPIYA : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ SÜLeDiMiZ_)
    > ...Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedüki...
  - `Tekin 1998, s. 22` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ_)
    > ...bgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança ti...
  - `Ata 2011, s. 118` (eslesen: _KURıGaRU TeMiR KaPıGKA TeGİ_)
    > ...geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK K2 yok(k)aru at yete yadagın ıgaç tutunu agturtum “yukarı doğru...


## KT-D-17#5 - Kül Tigin Yazıtı, Doğu 17. satir  (6 kelime)

- **transkripsiyon:** `KöGMeN : aŞA : KIRKıZ : YİRİŊE : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** KÖGMENİ : AŞIP : KIRGIZ : YERİNE : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _KöGMeN aŞA KIRKıZ YİRİŊE_)
    > ...tı. Eçim kağan olurtukka özüm tiğin erkl....... [[s. 35]] VE 5, ANAMA | Tefnğri yarlıkaduk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Tizliğiğ) (D 16) sökürtümiz, başlığığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığılt...
  - `Tekin 1998, s. 23` (eslesen: _YİRİŊE TeGİ SÜLeDiMiZ_)
    > ...k bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün...
  - `Tekin 1998, s. 19` (eslesen: _YİRİŊE TeGİ_)
    > ...iyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben),...
  - `Ata 2011, s. 120` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...klıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Ata 2011, s. 113` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...ük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...


## KT-D-18#1 - Kül Tigin Yazıtı, Doğu 18. satir  (3 kelime)

- **transkripsiyon:** `KaMaGI : BİŞOTuZ : SÜLeDiMiZ`
- **kelime karsiliklari:** KAMUĞU : BEŞ-OTUZ : [KEZ] SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _SÜLeDiMiZ_)
    > ...al tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _SÜLeDiMiZ_)
    > ...yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...
  - `Tekin 2003, s. 127` (eslesen: _KaMaGI_)
    > ...sıl?": *otsuz subsuz kaltı uyın, näçök yorıyın* "Otsuz ve susuz nasıl yapayım, nasıl gezip dolanayım?" (IB 45) ## Belirsizlik Zamirleri **279.** Belirsizlik zamirleri ya da bunlar gibi kullanılan sözcükler şunlardır: *büntägi* "böylesi", *kamag* "her şey", *kamagı* "hepsi, *barı* "hepsi" ve *näŋ* "hiç; herhangi bir" 1. *büntägi* "böylesi, bunun gibisi" < *\*buntägi* < *\*bunı täg+i* *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yönetici...
  - `Ata 2011, s. 52` (eslesen: _KaMaGI_)
    > ...tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış...
  - `Ata 2011, s. 113` (eslesen: _SÜLeDiMiZ_)
    > ...dun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “ka...


## KT-D-18#2 - Kül Tigin Yazıtı, Doğu 18. satir  (4 kelime)

- **transkripsiyon:** `ÜÇYiGiRMİ : SÜŊüŞDüMiZ : İLLiGiG : İLSiReTDiMiZ`
- **kelime karsiliklari:** ÜÇ-YİRMİ [KEZ] : SÜNGÜŞDÜK : İLLİYİ : İLSİRETTİK
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _SÜŊüŞDüMiZ İLLiGiG İLSiReTDiMiZ_)
    > ...duk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Tizliğiğ) (D 16) sökürtümiz, başlığığ yüküntürtümiz. Türgiş İklağan Türüküm, bodunum erti. [[s. 35]] Bilmedükin üçün, bizinğe yafığıltukın yazıntukın üçün, kağanı ölti, buylfruklı beğleri yeme ölti, On-Ok bodun emgek körti. Eçülm...
  - `Tekin 1998, s. 23` (eslesen: _İLLiGiG İLSiReTDiMiZ_)
    > ...lurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir...
  - `Olmez 2017, s. 45` (eslesen: _SÜŊüŞDüMiZ_)
    > ...ld Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 de...


## KT-D-18#3 - Kül Tigin Yazıtı, Doğu 18. satir  (4 kelime)

- **transkripsiyon:** `KaGaNLıGıG : KaGaNSıRaTDıMıZ : TİZLiGiG : SÖKüRTüMiZ`
- **kelime karsiliklari:** KAĞANLIYI : KAĞANSIRATTIK : DİZLİYİ : ÇÖKERTTİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaNLıGıG KaGaNSıRaTDıMıZ TİZLiGiG SÖKüRTüMiZ_)
    > ...odun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlat...
  - `Olmez 2017, s. 56` (eslesen: _KaGaNLıGıG KaGaNSıRaTDıMıZ_)
    > ...yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam hakan vefat etti." (MÇ K 12); *ėlligig ėlsiretdimiz kaganlıgıg kagansıratdımız* "Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18); *temir kapıgka tegi ertimiz anta yanturtumuz* "Temir Kapıg'a kadar ulaştık. (Orduyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçü...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLıGıG_)
    > ...Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar)...
  - `Tekin 2003, s. 215` (eslesen: _KaGaNLıGıG_)
    > ...için, ölecek halkı diriltip doyurdum" (BK D 33) - *üzä täŋri as[ra] yer yarlıkadok üç[ün]... bodunumın... konturtum* "Yukarıda gök aşağıda (da) toprak (öyle) buyurduğu için... halkımı... yerleştirdim" (BK K 10-11) - *täŋri yarlıkadok üçün, illigig ilsirätmiş, kaganlıgıg kagansıratmiş...* "(Babam Hakan), Tanrı (öyle) buyurduğu için devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış..." (KT D 15, BK D 13), vb. [s. 216] # s. 216 — TALAT TEKİN ## Ara Cümle **491.** Bir birleşik cümlenin ya bağımlı yan cümlesi ya da te...


## KT-D-18#4 - Kül Tigin Yazıtı, Doğu 18. satir  (8 kelime)

- **transkripsiyon:** `BaŞLıGıG : YÜKÜNDüRTüMiZ : TÜRGiŞ : KAGaN : TÜRÜKüMiZ : BUDuNIMıZ : eRTİ : BİLMeDÜKiN`
- **kelime karsiliklari:** BAŞLIYI : YÜKÜNDÜRDÜK : TÜRGİŞ : KAĞANI : TÜRKÜMÜZ : BOYLARIMIZ : İDİ : BİLEMEDİĞİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TÜRGiŞ KAGaN TÜRÜKüMiZ_)
    > ...i süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at b...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KAGaN_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi y...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGiŞ KAGaN_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] B...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KAGaN_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KAGaN_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli...
  - `Kafesoglu, s. 72` (eslesen: _TÜRGiŞ KAGaN_)
    > .... 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıllar (711-714) Mâveraünnehir'de meşhur Kuteybe b. Müsl...


## KT-D-19#1 - Kül Tigin Yazıtı, Doğu 19. satir  (6 kelime)

- **transkripsiyon:** `ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ`
- **kelime karsiliklari:** İÇİN : BİZE : YANILDIĞI : İÇİN : KAĞANI : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _ÜÇÜN KaGaNI ÖLTİ_)
    > ...imiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş...
  - `Tekin 2003, s. 120` (eslesen: _ÜÇÜN KaGaNI ÖLTİ_)
    > ...na köle oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı hareket [s. 121] # s. 121 — ORHON TÜRKÇESİ GRAMERİ ettikleri için hakanları öldü" (BK D 16) *alp är biziŋä tägmiş ärti* "Cesur erler bize saldırmıştı" (KT D 0) 5. Bulunma-çıkma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki...
  - `Ata 2011, s. 122` (eslesen: _KaGaNI ÖLTİ_)
    > ...lduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (...
  - `Ata 2011, s. 115` (eslesen: _KaGaNI ÖLTİ_)
    > ...“yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor...
  - `Ata 2011, s. 116` (eslesen: _BİZiŊE_)
    > ...iziŋ KT D39 Nesne meniŋ KT Durumu G11, BK D29 bizni T 20 Yönelme Durumu bini T 10 Bulunma- baŋa T 31, saŋa T 32 biziŋe KT Çıkma maŋa KT D19, 40; BK Durumu D16 Yön D30, BK D36 bizinte T 40 Gösterme...
  - `Olmez 2017, s. 54` (eslesen: _BİZiŊE_)
    > ...:---: | :---: | :---: | :---: | :---: | :---: | | *ben ~ men* | *beniŋ ~ meniŋ* | *bini* | *baŋa ~ maŋa* | | | | *baŋaru* | | *sen* | ø | *sini* | | | | | | | *ol* | | *anı* | | *anta* | *ança* | *anın* | *aŋar, aŋaru, ıngaru* | | *biz* | *biziŋ* | *bizni* | *biziŋe* | *bizinte* | | | | | *siz* | *siziŋ* | ø | | *sizde* | | | | *(T. Tekin, 2003; M. Erdal, 2004: 192)* Gerçekte yazıtlarda 3. kişi zamiri yer almaz. Bunun yerini işaret zamiri olan *ol* ve yalın biçimi yalnızca çekimli biçimi var olan *a(n)+* kullanılmıştır...


## KT-D-19#2 - Kül Tigin Yazıtı, Doğu 19. satir  (4 kelime)

- **transkripsiyon:** `BUYRUKI : BeGLeRİ : YiME : ÖLTİ`
- **kelime karsiliklari:** BUYRUĞU : BEĞLERİ : YİNE : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...ı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, b...
  - `Ata 2011, s. 122` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (tiyin, tip) tiyi...
  - `Ata 2011, s. 115` (eslesen: _BUYRUKI BeGLeRİ_)
    > ...ket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim”...
  - `Tekin 1998, s. 10` (eslesen: _BUYRUKI_)
    > ...rçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar...
  - `Tekin 2003, s. 157` (eslesen: _BUYRUKI_)
    > ......Saray kumandanları, Sebig Kül İrkin önderliğinde, ve (diğer) kumandanlar..." (BK G 14) **373.** *yämä* "ve, dahi, ... da" (< *\*yäm-* "ilave etmek, eklemek"; krş. Mo. *neme-* ay.; bk. Poppe 1960, s. 38): 1. Tek başına: *bilgä kagan ärmiş, alp kagan ärmiş; buyrukı yämä bilgä ärmiş ärinç, alp ärmiş ärinç* "Akıllı hakanlar imiş, yiğit hakanlar imiş; kumandanları da akıllı imişler şüphesiz, yiğit imişler şüphesiz" (KT D 3) *kagani ölti, buyrukı bägläri yämä ölti* "Hakanları öldü, kumandanları ve beyleri de öldü" (KT D 19,...
  - `Ata 2011, s. 51` (eslesen: _BUYRUKI_)
    > ...rihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg...


## KT-D-19#3 - Kül Tigin Yazıtı, Doğu 19. satir  (5 kelime)

- **transkripsiyon:** `ON : OK : BODuN : eMGeK : KÖRTİ`
- **kelime karsiliklari:** ON : OK : BOYLARI : EMEK : GÖRDÜ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _ON OK BODuN eMGeK KÖRTİ_)
    > ...ğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi im...
  - `Kafesoglu, s. 63` (eslesen: _ON OK BODuN_)
    > ...ı bk. yk. n. 270; ayrıca kendine bağlı Batı Gök-Türk halkı "Yabgu kabileleri, Yabgu Türkleri" diye de anılıyordu. Bk. Ed. Chavannes. ayn. [s. 62] esr, s. 21,95 n. 3,219; Liu, ayn. esr., II, s. 722. [s. 63] 104/ TÜRK MİLLÎ KÜLTÜRÜ TARİH/105 bodunun (sonraki "On-ok" bodun'u; buradaki "on büyük başbuğ" ona bağlanmıştı) başında olduğu için kitabelerde ve bir Bizans kaynağında290 "kağan1' diye zikredilen bu büyük şahsiyetin ölümünü, yukarıda adı geçen Türk-şad'ın sözlerinden öğreniyoruz. Onu sinirlendiren hususlardan biri de, öle...
  - `Tekin 1998, s. 6` (eslesen: _ON OK_)
    > ...nların [s. 6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur! [[s. 6]] İşte yukarıda açıklamaya çalıştığım...
  - `Ergin 1970, s. 14` (eslesen: _ON OK_)
    > ...bedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. Benim sözümü kırmadı, | Çin kağanının maiyetindeki resimciyi gönderdi. Ona bambaşka türbe yaptırdım. İçine dışına bambaşka resim vurdurdum. Taş yontturdum. Gönüldeki sözümü vurdurdum....... On Ok oğluna, yabancına kadar bunu görüp bilin. Ebedî taş | yontturdum..... il ise, şöyle daha erişilir yerde ise, işte öyle erişilir yerde ebedî taş yontturdum, yazdırdım. Onu görüp öyle bilin. Şu taş....dım. [[s. 14]] Bu yazıyı yazan yeğeni Yollug Tigin. Doğu cep...
  - `Tekin 2003, s. 111` (eslesen: _ON OK_)
    > ...ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da [s. 111] # s. 111 — ORHON TÜRKÇESİ GRAMERİ {+n+kA} biçiminden geliyor olmalıdır: *kurıgaru kün batsıkı+ŋa* "Geride gün batısına (kadar)" (KT G 2) *on ok oglı+ŋa tatı+ŋa tägi* "On Ok oğullarına ve (onlara bağımlı olan) yabancılara kadar" (BK K 15) *süçig sabı+ŋa yimşak agısı+ŋa arturup* "Tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp" (KT G 6) *yazı+ŋa oguzgaru sü taşıkdımız* "(O yılın) ilkbaharında o...
  - `Ata 2011, s. 120` (eslesen: _ON OK_)
    > ...ce, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört...


## KT-D-19#4 - Kül Tigin Yazıtı, Doğu 19. satir  (3 kelime)

- **transkripsiyon:** `eÇÜMiZ : aPAMıZ : TUTMıŞ`
- **kelime karsiliklari:** EÇÜMÜZ[ÜN] : APAMIZIN : TUTMUŞ [OLDUĞU]
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...3]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) ko...
  - `Radloff, s. 249` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...e yükselmiştir. Gök Türk İmparatorluğu devrin de Yer-su ruhlarının mahiyetini (niteliğini) Orhon yazıtlarından anlamak mümkündür. Gök Türklerin "ıduk yer-sub" (mukad des yer-su) ile ifade ettikleri mefhum (kavram) hem koruyucu ruhlar hem vatan idi. [[s. 249]] Eçümiz apamız tutmış yer-sub (atalarımı zın idare ettiği yer-su) cümlesindeki yer-su vatan kültü olan yer su' dur. Kült olan bu vatan yer-suyu Ötügeı; ve Budun İnli dağ ları ve ormanları temsil ediyorlardı. Bu mukaddes yer-su ruhla rı Gök Türklerin mukadderatını idare ediyorlardı...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 54` (eslesen: _eÇÜMiZ aPAMıZ TUTMıŞ_)
    > ...vatan kültü derecesine yükselmiştir. Gök Türk imparatorluğu dev rinde Yer-su ruhlarının mahiyetini Orhon yazıtlarından anla mak mümkündür. Gök Türklerin “ ıduk yer-sub” (mukaddes yer-su) ile ifade ettikleri mefhum hem koruyucu ruhlar hem va tan idi. [[s. 54]] Eçümiz apamız tutmış yer-sub (atalarımızın idare et tiği yer-su) cümlesindeki yer-su vatan kültü olan yer-su’dur. Kült olan bu vatan yer-suyu ötügen ve Budun inli dağ ları ve ormanları temsil ediyorlardı. Bu mukaddes yer-su ruhları Gök Türklerin mukadderatını idare ediyorlardı (T...


## KT-D-19#5 - Kül Tigin Yazıtı, Doğu 19. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `YİR : SUB : İDSiZ : BOLMaZUN : TİYiN : aZ : BODuNıG : İTiP : YaRaTıP : ---`
- **kelime karsiliklari:** YER : SU : ISSIZ : OLMASIN : DİYE : AZ : BOYLARINI : [DÜZEN] EDİP : YARATIP : ---
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BOLMaZUN TİYiN aZ_)
    > ...kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya...
  - `Tekin 1998, s. 10` (eslesen: _YİR SUB_)
    > ...lesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, b...
  - `Tekin 2003, s. 80` (eslesen: _YİR SUB_)
    > ...ler. Yalın gövdeler *ab* "av", *taş* "dış", *käl-* "gelmek" gibi daha fazla çözümlenemeyen gövdelerdir. Türeme gövdeler yalın gövdelerden ya ekleme ya da birleştirme yolu ile elde edilen gövdelerdir: *abla-* "avlamak", *taşık-* "çıkmak", *kälür-* "getirmek", *yir-sub* "bölge, ülke" (*yir* "yer, toprak", *sub* "su, ırmak"). Orhon Türkçesi biçimbilgisinin önemli özelliklerinden biri yakın kavramları belirten ad ve eylem gövdelerinin kesin olarak birbirinden ayırt edilmesidir. Eşsesli ad ve eylem gövdeleri son derece azdır:...
  - `Ata 2011, s. 138` (eslesen: _YİR SUB_)
    > ...letsiz kalmış (ve) kağansız kalmış halk” KT D13 yir sayu bar-mış bodun “her yere gitmiş halk” BK D22 er-miş bar-mış edgü eliŋe kentü yaŋıltıg “gelişmiş ilerlemiş (senin) iyi devletine kendin yanlış yaptın” KT D23 eçümüz apamız tut-mış yir sub “atalarımızın dedelerimizin elde ettiği topraklar” KT D19 131 [s. 139] 7. -tAçI gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halk...
  - `Tekin 1998, s. 22` (eslesen: _BOLMaZUN TİYiN_)
    > ...ı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Tekin 2003, s. 107` (eslesen: _BOLMaZUN TİYiN_)
    > ...arını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...


## KT-D-20#1 - Kül Tigin Yazıtı, Doğu 20. satir  (3 kelime)

- **transkripsiyon:** `BaRS : BeG : eRTİ`
- **kelime karsiliklari:** BARS : BEĞ : İDİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BaRS BeG eRTİ_)
    > .... Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi...
  - `Kafesoglu, s. 72` (eslesen: _BaRS BeG_)
    > ...ratıldı380. 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıllar (711-714) Mâveraünnehir'de meşhur...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 494` (eslesen: _BaRS BeG_)
    > ...Türkistan, 12. Batı ve Doğu Slavları, 47. Batlamyus, 12. Batu Han, 36, 96, 97, 121, 122, 123,. 124, 125, 126, 127, 128, 152, 251, 285, 306, 331, 335, 336, 338, 339, 340, 341, 342. Batur, 182. Baun, 211, 282. Bavyera, 15. Bayalun, 347. Bayan Kağan, 28, 47. Baybars (Begbars), 99, 101. [[s. 494]] Bayçan, 57. Beyazıd, 139, 145. Bayezid II, 145, 219, 220, 221, 352. Baykal Gölü, 2, 3. Bebikov, 148. Bedreddin el-'Arec, 134. Bektemör Bey, 212. Belaveja. 33. Beldüz, 82, 102. Belender, 39. Belerke, 381. Belev şehri, 155. Belgorod, 5...


## KT-D-20#2 - Kül Tigin Yazıtı, Doğu 20. satir  (5 kelime)

- **transkripsiyon:** `KaGaN : aT : BUNDA : BİZ : BİRTiMiZ`
- **kelime karsiliklari:** KAĞAN : AD[INI] : BUNDAN : BİZ : VERDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaN aT_)
    > ...Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yed...
  - `Tekin 2003, s. 107` (eslesen: _KaGaN aT_)
    > ...Türkçesinde belirli nesne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglä...
  - `Ata 2011, s. 112` (eslesen: _KaGaN aT_)
    > ...[s. 112] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İ...
  - `Ata 2011, s. 119` (eslesen: _BİZ BİRTiMiZ_)
    > ...başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılı...
  - `Ata 2011, s. 105` (eslesen: _KaGaN aT_)
    > ...: İyelik Ekleri [s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. [[s. 105]] +(I)n: İyelik...
  - `Roux, Altay Turklerinde Olum, s. 282` (eslesen: _aT BUNDA_)
    > ...“büyüklerden biri öldüğünde, onun en sevdiği hizmetkârlarından birinin ölüyü yakmak üzere hazırlanan odun yığınının üzerinde, efendisine öteki [[s. 282]] dünyada hizmet etmek için kendini coşkuyla yakması” şeklinde süregelen geleneği yok etmeyi amaçlamış, fakat bunda başarılı olamamışur. ? Bu durumda belki de yalnızca Gmelin haklıdır. Bu tanıklıkların tümü göz önüne alındığında iki ayrı yöntem orta- 7 DEFREMERY, İbn Battüta, IV, s. 301. 98 DE BACKER, L'Extröme Orient, o.c., 1, s. 285. HUC, Sowvenirs, o.c., 1, s. 116;...
