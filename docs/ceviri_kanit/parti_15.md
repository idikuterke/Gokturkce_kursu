# Ceviri istek paketi 15 - Orhun cumlecikleri

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


## BK-D-3#8 - Bilge Kağan Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `BaŞLıGıG : YÜKüNDüRMiŞ : TİZLiGiG : SÖKüRMiŞ`
- **kelime karsiliklari:** BAŞLIYI : YÜKÜNDÜRMÜŞ : DİZLİYİ : ÇÖKTÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TİZLiGiG SÖKüRMiŞ_)
    > ...ğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. An...
  - `Tekin 2003, s. 220` (eslesen: _TİZLiGiG SÖKüRMiŞ_)
    > ...i oglı kılınmış]. (D 3) Kişi oglınta üzä äçüm apam İştämi Kagan, Bumın Kagan olormış. Olorupan Türük [b]odunıŋ ilin törösin tuta birmiş, iti birmiş. Tört buluŋ kop yagı ärmiş. Sü süläpän tört buluŋdakı bodunug kop almış, kop baz kılmış. Başlıgıg yüküntürmiş, tizligig sökürmiş. İlgärü Kadırkan yışka tägi, kirü (D 4) Tämir Kapıgka tägi konturmiş. Ekin ara idi oksuz Kök Türük iti ança olorur ärmiş. Bilgä kagan ärmiş, alp kagan ärmiş. Buyrukı < yämä > bilgä ärmiş ärinç, alp ärmiş ärinç. Bägläri yämä boduni yämä tüz ärmiş. Anı üçün ili...
  - `Ata 2011, s. 47` (eslesen: _TİZLiGiG SÖKüRMiŞ_)
    > ...ta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenlemiş...
  - `Olmez 2017, s. 103` (eslesen: _TİZLiGiG SÖKüRMiŞ_)
    > ...oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönder...
  - `Ata 2011, s. 40` (eslesen: _TİZLiGiG SÖKüRMiŞ_)
    > ...ndukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenl...
  - `Tekin 1998, s. 11` (eslesen: _BaŞLıGıG_)
    > ...mak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren a...


## BK-D-3#9 - Bilge Kağan Yazıtı, Doğu 3. satir  (5 kelime)

- **transkripsiyon:** `İLGeRÜ : KaDıRKaN : YIŞKA : TeGİ : KİRÜ`
- **kelime karsiliklari:** İLERİ : KADIRKAN : YIŞA : DEĞİN : GERİ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İLGeRÜ KaDıRKaN YIŞKA TeGİ KİRÜ_)
    > ...e eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup tö...
  - `Ata 2011, s. 51` (eslesen: _İLGeRÜ KaDıRKaN YIŞKA TeGİ KİRÜ_)
    > ...g hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup...
  - `Ata 2011, s. 44` (eslesen: _İLGeRÜ KaDıRKaN YIŞKA TeGİ KİRÜ_)
    > ...eyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmi...


## BK-D-4#1 - Bilge Kağan Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `TeMiRKaPıGKA : TeGİ : KONDuRMıŞ`
- **kelime karsiliklari:** DEMİRKAPIYA : DEĞİN : [BOYLARI] KONDURMUŞ
- **kanit:** _(korpusta eslesme yok - bos birak)_


## BK-D-4#2 - Bilge Kağan Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `iKİN : aRA : İDİ`
- **kelime karsiliklari:** İKİSİ : ARASINDA : İDİ
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _aRA İDİ_)
    > ...loduniüğ ilin törüsin tuta birmiş, iti birmiş. Tört bulung kop yağı ermiş. Sü sülepen, tört bulufüğdakı bodunuğ (kop almış, kop baz kılmış). Başlığığ (yülküntürmiş, tizliğliğ sökürmiş. İlgerü Kadırkan yışka teği, kirü) (D 4) Temir Kapığka teği konturmış. Ekin ara, idi oksuz Kök Türük iti ança olurur ermiş. [[s. 33]] Bilge kağan ermiş, alp kağan ermiş; buyrukı <yeme> bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (...
  - `Tekin 2003, s. 147` (eslesen: _aRA İDİ_)
    > ...İ *täŋri bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş* “Kutsal Bilge Hakana daha hizmet edeceğim var imiş anlaşılan” (O sağ 2) **338.** *idi* “hiç”: - *ötükän yışda yig idi yok ärmiş* “Ötüken dağlarından daha iyi bir yer hiç yok imiş” (KT G 4) - *ekin ara idi oksız kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç kabile örgütü olmayan Doğu Türklerini düzene sokup öylece hükmederlermiş” (BK D 4) - *türk sir bodun yirintä idi yorımazun* “Türk Sir halkı ülkesinde hiç ilerlemesin” (T 11) - *usar idi yok...
  - `Ata 2011, s. 51` (eslesen: _aRA İDİ_)
    > ...da I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre...
  - `Olmez 2017, s. 106` (eslesen: _aRA İDİ_)
    > ...\*ke: isim tabanı +rü: yer ve zaman zarfi eki (burada yer zarfi) [s. 106] # s. 104 — Mehmet Ölmez (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kerg...
  - `Ata 2011, s. 44` (eslesen: _aRA İDİ_)
    > ...tlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inis...
  - `Ogel C1, s. 290` (eslesen: _iKİN aRA_)
    > ...apılıyor: Bu metin üzerinde, dünyanın yaratılışı ile ilgili bölümümüzde de durmuştuk. [[s. 290]] Fakat bu metin öyle önemli bir metindir ki, bir çok meselelerde ancak onun tuttuğu ışıkla doğru yolda yürüyebiliriz : “Üze Kök Tengri, asra yağız yer kılındukda, ikin ara kişi oğlı kılınmış. Kişi oğlunda üze, eçüm apam Bumın Kağan, İstemi Kağan olurmış”. Yani, “Yukarıdaki mavi gök, aşağıdaki yağız yer yaratıldığında, ikisi arasında kişi oğlu, yani insanlar yaratılmış. Kişi oğlunun üzerine de büyük amcalarım Bumın Kağan ve İste...


## BK-D-4#3 - Bilge Kağan Yazıtı, Doğu 4. satir  (5 kelime)

- **transkripsiyon:** `OKSuZ : KÖK : TÜRK : aNÇA : OLuRUR`
- **kelime karsiliklari:** OKSUZ : GÖK : TÜRK : ANCA : OTURUR
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _OKSuZ KÖK_)
    > ...slin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfg...
  - `Tekin 2003, s. 149` (eslesen: _OKSuZ KÖK_)
    > ...ndan geçmek, içinden geçmek”; krş. MK *argula-* “arasından geçmek”): - *üzä kök täŋri asra yagız yer kılıntokda ekin ara kişi oglı kılınmiş* “Yukarıda mavi gök aşağıda kara toprak yaratıldığında ikisinin arasında insanoğlu yaratılmış” (KT D 1) - *ekin ara idi oksuz kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç boy örgütü olmayan Doğu Türklerini örgütleyerek öylece [s. 150] # s. 150 — TALAT TEKİN hüküm sürerlermiş" (BK D 14) *bu türük bodun ara yarıklıg yagıg yältürmädim* "Bu Türk halkı içinde zırhlı düşm...
  - `Ata 2011, s. 51` (eslesen: _OKSuZ KÖK_)
    > ...ktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kag...
  - `Olmez 2017, s. 57` (eslesen: _OKSuZ KÖK_)
    > ...yordunuz." (KT G 9); *kėyik yėyü tavışgan yėyü olorur ertimiz* "Yaban hayvanları yiyerek, tavşan yiyerek yaşayıp gidiyorduk." (T 8) **Sürekli geçmiş zaman (II): -(y)(X)r ermiş** *amtı beglerime tėr ermiş* "Ey huzurumdaki beylerim dermiş." (O B 7); *idi oksuz kök türük (ėti) ança olorur ermiş* "dağınık halde öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış ert...
  - `Tekin 1998, s. 59` (eslesen: _KÖK TÜRK_)
    > ...J. G. Granö und Aalto, P., “Materialien zu den alttürkischen Inschriften der Mongolei”, Journal de la Sociğte finno-ougrienne, LX: 7, Helsinki 1958, ss. 30-61. Aydarov, G., Yazık orhonskogo pamyatnika Bilge-kagana, Alma-Ata 1966. [[s. 59]] Bang, W., “Zu den Kök-Türk-Inschriften der Mongolei”, T'oung Pao VIL (1896): 325-355. Bazin, L., Les calendriers turcs ancients et medievaux, Universit& de Lille HI, 1974. Clauson, G., “The Origin of the Turkish “Runic' Alphabet”, Acta Örientalia Academiae scientiarum Hungaricae 32 (...
  - `Tekin 2003, s. 18` (eslesen: _KÖK TÜRK_)
    > ...mlik özellikleri bunlar olan bu en eski Türk diyalektine geçen yüzyıl sonlarından beri türlü adlar verilmiştir. W. Radloff Orhon yazıtları dilini baştan beri “Eski Türkçe” (*Alttürkisch*) olarak adlandırmıştır. W. Bang ise “Bilge Han, halkı için birçok yerde *kök Türk* deyimini kullanıyor” gerekçesiyle bu dile “Kök Türkçe” (*Köktürkisch*) adını vermiştir (bk. *Über die köktürkische Inschrift auf der Südseite des Kül-Tägin-Denkmals*, Leipzig 1896, Vorwort). Ne var ki *kök Türk*, daha doğrusu *kök Türük* adı yazıtlarda birço...


## BK-D-4#4 - Bilge Kağan Yazıtı, Doğu 4. satir  (4 kelime)

- **transkripsiyon:** `eRMiŞ : BİLGE : KaGaN : eRMiŞ`
- **kelime karsiliklari:** İMİŞ : BİLGE : KAĞAN : İMİŞ
- **kanit:**
  - `Ata 2011, s. 51` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...nleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç...
  - `Olmez 2017, s. 106` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...burada yer zarfi) [s. 106] # s. 104 — Mehmet Ölmez (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu)...
  - `Ata 2011, s. 44` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisr...


## BK-D-4#5 - Bilge Kağan Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `aLP : KaGaN : eRMiŞ`
- **kelime karsiliklari:** ALP : KAĞAN : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...lerinden biridir. [[s. 10]] Eşit öğeli birimlerden oluşan cümle parçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) k...
  - `Ata 2011, s. 51` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...lattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçi...
  - `Olmez 2017, s. 106` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...s. 104 — Mehmet Ölmez (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki...
  - `Ata 2011, s. 44` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...nlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin t...


## BK-D-4#6 - Bilge Kağan Yazıtı, Doğu 4. satir  (4 kelime)

- **transkripsiyon:** `BUYRUKI : YiME : BİLGE : eRMiŞ`
- **kelime karsiliklari:** BUYRUĞU : YİNE : BİLGE : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _BİLGE eRMiŞ_)
    > ...rleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta...
  - `Ata 2011, s. 51` (eslesen: _BİLGE eRMiŞ_)
    > ...n gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk e...
  - `Olmez 2017, s. 63` (eslesen: _BİLGE eRMiŞ_)
    > ...uyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyi...
  - `Ata 2011, s. 44` (eslesen: _BİLGE eRMiŞ_)
    > ...ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı...
  - `Tekin 2003, s. 157` (eslesen: _BUYRUKI_)
    > ......Saray kumandanları, Sebig Kül İrkin önderliğinde, ve (diğer) kumandanlar..." (BK G 14) **373.** *yämä* "ve, dahi, ... da" (< *\*yäm-* "ilave etmek, eklemek"; krş. Mo. *neme-* ay.; bk. Poppe 1960, s. 38): 1. Tek başına: *bilgä kagan ärmiş, alp kagan ärmiş; buyrukı yämä bilgä ärmiş ärinç, alp ärmiş ärinç* "Akıllı hakanlar imiş, yiğit hakanlar imiş; kumandanları da akıllı imişler şüphesiz, yiğit imişler şüphesiz" (KT D 3) *kagani ölti, buyrukı bägläri yämä ölti* "Hakanları öldü, kumandanları ve beyleri de öldü" (KT D 19,...
  - `Olmez 2017, s. 106` (eslesen: _BUYRUKI_)
    > ...z (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede da...


## BK-D-4#7 - Bilge Kağan Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `eRiNÇ : aLP : eRMiŞ`
- **kelime karsiliklari:** GERÇEK : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçi...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın...
  - `Olmez 2017, s. 106` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...[Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede dağınık halde Kök Türkler öylecene yaşıyo...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...ekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınm...


## BK-D-4#8 - Bilge Kağan Yazıtı, Doğu 4. satir  (7 kelime)

- **transkripsiyon:** `eRiNÇ : BeGLeRİ : YiME : BODuNI : YiME : TÜZ : eRMiŞ`
- **kelime karsiliklari:** GERÇEK : BEĞLERİ : YİNE : BOYLARI : YİNE : DÜZ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...lmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bun...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk...
  - `Olmez 2017, s. 106` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...rı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede dağınık halde Kök Türkler öylecene yaşıyorlarmış. Bilge...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç bil...
  - `Tekin 1998, s. 19` (eslesen: _BeGLeRİ_)
    > ...] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötük...
  - `Olmez 2017, s. 21` (eslesen: _BeGLeRİ_)
    > ...n'ın doğusundan Kore'ye kadar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca d...


## BK-D-4#9 - Bilge Kağan Yazıtı, Doğu 4. satir  (5 kelime)

- **transkripsiyon:** `aNI : ÜÇÜN : İLiG : aNÇA : TUTMıŞ`
- **kelime karsiliklari:** ONU[N] : İÇİN : İLİ : ANCA : TUTMUŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...iş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan...
  - `Tekin 2003, s. 122` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123] # s. 123 — ORHON...
  - `Ata 2011, s. 51` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...etirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olur...
  - `Ata 2011, s. 44` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...öyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç...


## BK-D-4#10 - Bilge Kağan Yazıtı, Doğu 4. satir  (5 kelime)

- **transkripsiyon:** `eRiNÇ : İLiG : TUTıP : TÖRÜG : İTMiŞ`
- **kelime karsiliklari:** GERÇEK : İLİ : TUTUP : TÖRE : [DÜZEN] ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _eRiNÇ İLiG_)
    > ...kan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORH...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ İLiG_)
    > ...dırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç b...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ İLiG_)
    > ...rü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yem...
  - `Tekin 1998, s. 10` (eslesen: _eRiNÇ_)
    > ...cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre...
  - `Tekin 2003, s. 160` (eslesen: _eRiNÇ_)
    > ...ım töküti kara tärim yügürti işig küçüg bertim ök* "Kızıl kanımı akıtarak, kara terimi döktürerek (ona) hizmet ettim" (T 52) *uzun yälmäg yämä ı(t)tım ok, arkuy kargug olgurtdum ok* "Uzak mesafelere keşif devriyeleri gönderdim, gözetleme kulelerini de (yerli yerince) yerleştirdim" (T 52-53) *otuz yaşımda, äsizim ä, kit(t)im ök* "Otuz yaşımda, ne yazık, gittim (işte)!" (Çaa-Höl III 1-2) Pekiştirme edatı *ok/ök* ünlü ile biten bir sözcüğe eklendiğinde ünlüsünü yitirir: *bini oguzug ölürtäçi-k tir män* "Beni, Oğuz'u mutla...
  - `Olmez 2017, s. 20` (eslesen: _eRiNÇ_)
    > ...nuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yü...


## BK-D-4#11 - Bilge Kağan Yazıtı, Doğu 4. satir  (4 kelime)

- **transkripsiyon:** `ÖZİ : aNÇA : KeRGeK : BOLMıS`
- **kelime karsiliklari:** ÖZÜ : ANCA : KERGEK : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _ÖZİ aNÇA KeRGeK BOLMıS_)
    > ...i konturmış. Ekin ara, idi oksuz Kök Türük iti ança olurur ermiş. [[s. 33]] Bilge kağan ermiş, alp kağan ermiş; buyrukı <yeme> bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (D 5) Yoğçı sığıtçı öngre kün tuğsıkda Bükli Çöllüğ il, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan erlmiş. Anta kisre inisi| kağan (bolmış erlinç, oğlıtlı| kağan...
  - `Ata 2011, s. 51` (eslesen: _ÖZİ aNÇA KeRGeK BOLMıS_)
    > ...ka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak e...
  - `Ata 2011, s. 44` (eslesen: _ÖZİ aNÇA KeRGeK BOLMıS_)
    > ...emir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç...


## BK-D-5#1 - Bilge Kağan Yazıtı, Doğu 5. satir  (7 kelime)

- **transkripsiyon:** `YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL`
- **kelime karsiliklari:** YUĞCU : SIĞITÇI : ÖNDE : GÜN : DOĞUSUNDA : BÖKLÜ : ÇÖLLÜİL
- **kanit:**
  - `Ogel C2, s. 483` (eslesen: _ÖŊRE KÜN TOGSıKDA BÖKLİ_)
    > .... Belki de bunlar, G o b i çölünün kuzeyindeki vahalarda oturan kavimlerdi. Yazıt, Göktürkler in çevresindeki kavimleri sayarken, şöyle diyordu: “.. Öne doğru, gün doğusunda, bökli (bükli) ç ölli g il...” [[s. 483]] Yazıttaki eski Türkçesi ise şöyledir: *“.. Öngre, kün togsıkda, bökli (bökli) çöl(I)ig il...” Anadolu'da,küçük ağaçlıklı kümelere, “bük” adı verilir. Bundan dolayı, yazıtlarda da bu sözü böyle okumak istedik. Ancak eski söylenişinin “*bök” olabileceğini de düşündük. Bu deyim üzerinde, az sonra daha geniş olarak duracağız. Gök...
  - `Tekin 1998, s. 33` (eslesen: _SIGıTÇI ÖŊRE KÜN_)
    > ...Türük iti ança olurur ermiş. [[s. 33]] Bilge kağan ermiş, alp kağan ermiş; buyrukı <yeme> bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (D 5) Yoğçı sığıtçı öngre kün tuğsıkda Bükli Çöllüğ il, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan erlmiş. Anta kisre inisi| kağan (bolmış erlinç, oğlıtlı| kağan bolmış erinç. [[s. 33]] Anta |ki...
  - `Ata 2011, s. 119` (eslesen: _ÖŊRE KÜN_)
    > ...KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 111 [s. 119] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak tarafta” KT D4 kisre kün batsıkıŋa tegi “geride gün batısına kadar” (Ongin 2) e. +rü eki ile türetilmiş yer zarfları: kirü ‘geri, geriye doğru, batıya doğru’, berü ‘beri, bu yana’. kirü barıgma bardı “geri giden...
  - `Ata 2011, s. 112` (eslesen: _ÖŊRE KÜN_)
    > ...meser “yukarıda gök çökmedikçe, aşağıda yer delinmedikçe” KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 [s. 112] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak tarafta” KT D4 kisre kün batsıkıŋa tegi “geride gün batısına kadar” (Ongin 2) e. +rü eki ile türetilmiş yer zarfları: kirü ‘geri, geriye doğru, batıya doğru’, berü ‘beri, bu yana’. kirü barıgma bardı “geri giden gitti” (Ongin 11)...
  - `Tekin 1998, s. 21` (eslesen: _SIGıTÇI_)
    > ...i oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve...
  - `Tekin 2003, s. 81` (eslesen: _SIGıTÇI_)
    > ...n 7) - *kaŋıç+ım* "babacığım" (Abakan 14) **153.** {+çI}. Meslek mensubu ya da bir işi sürekli yapan anlamında adlar türetir: - *bäd(i)zçi* "ressam, heykeltraş" (KT G 11, vb.) < *bädiz* "resim, heykel" - *äbçi* "eş, zevce" (Bay Bulun I 2, vb.) < *äb* "ev" - *sıgıtçı* "yas tutucu, ağlayıcı" (KT K 11, vb.) < *sıgıt* "yas, matem" - *tamgaçı* "mühürdar" (KT K 13) < **tamga* "damga, mühür" - *yagıçı* "savaşçı, savaşı yöneten" (T 50, vb.) < *yagı* "savaş; düşman" - *yogçı* "cenaze törenine katılan yasçı" (BK D 5, vb.) < *yog*...


## BK-D-5#2 - Bilge Kağan Yazıtı, Doğu 5. satir  (13 kelime)

- **transkripsiyon:** `TaBGaÇ : TÜPÜT : aPaR : PURuM : KIRKıZ : ÜÇKURIKaN : OTuZTaTaR : KITaYN : TaTaBI : BUNÇA : BODuN : KeLİPeN : SIGTAMıŞ`
- **kelime karsiliklari:** TABGAÇ : TİBET : APAR : RUM : KIRGIZ : ÜÇ-KURIKAN : OTUZ-TATAR : KITAY : TATABI : BUNCA : BOYLARI : GELİP : SIGTAMIŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ TÜPÜT aPaR PURuM_)
    > ...l<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çi...
  - `Tekin 1998, s. 33` (eslesen: _TaTaBI BUNÇA BODuN KeLİPeN_)
    > ...ermiş erinç. Beğleri yeme bodunı (yeme tüz ermiş. Anı) üçün iliğ ança tutmış erinç; iliğ tutup törülğ itmiş. Özi ança kergek bolmış.| (D 5) Yoğçı sığıtçı öngre kün tuğsıkda Bükli Çöllüğ il, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan erlmiş. Anta kisre inisi| kağan (bolmış erlinç, oğlıtlı| kağan bolmış erinç. [[s. 33]] Anta |kisre inisi eçisin teğ) (D 6) kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağlan ollurmış erinç, yablak kağan...
  - `Tekin 2003, s. 220` (eslesen: _aPaR PURuM KIRKıZ_)
    > ...p kagan ärmiş. Buyrukı < yämä > bilgä ärmiş ärinç, alp ärmiş ärinç. Bägläri yämä boduni yämä tüz ärmiş. Anı üçün ilig ança tutmış ärinç. İlig tutup törög itmiş. Özi ança kärgäk bolmış. (D 5) Yogçı sıgıtçı öŋrä kün tugsıkdakı Bükli çöl(l)üg il, Tabgaç, Töpöt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtañ, Tatabı... bunça bodun kälipän sıgtamış, yoglamış. Antag külüg kagan ärmiş! Anta kisrä inisi kagan [bolmış är]inç, oglıtı kagan bolmış ärinç. Anta [kisrä inisi eçisin täg] (D 6) kılınmadok ärinç, oglı kaŋin täg kılınmadok ärinç...
  - `Olmez 2017, s. 108` (eslesen: _aPaR PURuM KIRKıZ_)
    > ...) [Köktürk (runiform) harfleriyle basılı beş satırlık yazıt metni; ilk satırın sağ ucunda satır numarası "5", son iki satırın başlarında nokta dizileri (..........) var] *D 5. yoqçı : sıgıtçı : öyre : kün : tugsıkdaki : bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu y...


## BK-D-5#3 - Bilge Kağan Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `YUGLAMıŞ : aNTaG : KÜLüG : KAGaN : eRMiŞ`
- **kelime karsiliklari:** YUĞLAMIŞ : ÖYLE : ÜNLÜ : KAĞAN : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler) benim sözümü kırmadılar (ve) (G 12) Çin hakanının has sanatçılarını gönderdiler. Onlara olağanüstü bir türbe yaptırttı...
  - `Ata 2011, s. 121` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...ışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyu...
  - `Ata 2011, s. 114` (eslesen: _aNTaG KÜLüG KAGaN eRMiŞ_)
    > ...ı tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. [[s. 114]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama:...


## BK-D-5#4 - Bilge Kağan Yazıtı, Doğu 5. satir  (6 kelime)

- **transkripsiyon:** `aNDA : KİSRE : İNİSİ : KaGaN : BOLMıS : eRiNÇ`
- **kelime karsiliklari:** ONDAN : SONRA : İNİSİ : KAĞAN : OLMUŞ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _KİSRE İNİSİ KaGaN BOLMıS_)
    > ...da mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yarat...
  - `Ata 2011, s. 51` (eslesen: _KİSRE İNİSİ KaGaN BOLMıS_)
    > ...a idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün...
  - `Ata 2011, s. 44` (eslesen: _KİSRE İNİSİ KaGaN BOLMıS_)
    > ...]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun t...


## BK-D-5#5 - Bilge Kağan Yazıtı, Doğu 5. satir  (4 kelime)

- **transkripsiyon:** `OGLITI : KaGaN : BOLMıS : eRiNÇ`
- **kelime karsiliklari:** OĞULLARI : KAĞAN : OLMUŞ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _OGLITI KaGaN BOLMıS eRiNÇ_)
    > ...r, Tibetliler, Avarlar, Bizanslılar, Kırgızlar, Üç Kurıkanlar, Otuz Tatarlar, Kıtaylar, Tatabılar... bunca halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğ...
  - `Ata 2011, s. 51` (eslesen: _OGLITI KaGaN BOLMıS eRiNÇ_)
    > ...r ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürl...
  - `Ata 2011, s. 44` (eslesen: _OGLITI KaGaN BOLMıS eRiNÇ_)
    > ...ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın...


## BK-D-5#6 - Bilge Kağan Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `aNDA : KİSRE : İNİSİ : eÇİSİN : TeG`
- **kelime karsiliklari:** ONDAN : SONRA : İNİSİ : EÇİSİ : DEK
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(...
  - `Ata 2011, s. 51` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün in...
  - `Ata 2011, s. 44` (eslesen: _KİSRE İNİSİ eÇİSİN TeG_)
    > ...rmiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtüki...


## BK-D-6#1 - Bilge Kağan Yazıtı, Doğu 6. satir  (7 kelime)

- **transkripsiyon:** `KILıNMaDUK : eRiNÇ : OGLI : KaNGIN : TeG : KILıNMaDUK : eRiNÇ`
- **kelime karsiliklari:** KILINMADI : GERÇEK : OĞLU : BABASI : DEK : KILINMADI : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _KILıNMaDUK eRiNÇ OGLI KaNGIN TeG KILıNMaDUK eRiNÇ_)
    > ...kanlar, Otuz Tatarlar, Kıtaylar, Tatabılar... bunca halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlı...
  - `Ata 2011, s. 51` (eslesen: _KILıNMaDUK eRiNÇ OGLI KaNGIN TeG KILıNMaDUK eRiNÇ_)
    > ...bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşur...
  - `Ata 2011, s. 44` (eslesen: _KILıNMaDUK eRiNÇ OGLI KaNGIN TeG KILıNMaDUK eRiNÇ_)
    > ...yrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bod...


## BK-D-6#2 - Bilge Kağan Yazıtı, Doğu 6. satir  (3 kelime)

- **transkripsiyon:** `BİLiGSİZ : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** BİLGİSİZ : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün,...
  - `Ata 2011, s. 51` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...eme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun...
  - `Ata 2011, s. 44` (eslesen: _BİLiGSİZ KaGaN OLuRMıŞ_)
    > ...eri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu...


## BK-D-6#3 - Bilge Kağan Yazıtı, Doğu 6. satir  (4 kelime)

- **transkripsiyon:** `eRiNÇ : YaBLaK : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** GERÇEK : YAVLAK : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...lar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıç...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...ı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış k...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ YaBLaK KaGaN OLuRMıŞ_)
    > ...z ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yi...


## BK-D-6#4 - Bilge Kağan Yazıtı, Doğu 6. satir  (5 kelime)

- **transkripsiyon:** `eRiNÇ : BUYRUKI : YiME : BİLiGSiZ : eRiNÇ`
- **kelime karsiliklari:** GERÇEK : BUYRUĞU : YİNE : BİLGİSİZ [İMİŞ] : GERÇEK
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


## BK-D-6#5 - Bilge Kağan Yazıtı, Doğu 6. satir  (3 kelime)

- **transkripsiyon:** `YaBLaK : eRMiŞ : eRiNÇ`
- **kelime karsiliklari:** YAVLAK : İMİŞ : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...İGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodun...
  - `Ata 2011, s. 51` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...k bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı og...
  - `Ata 2011, s. 44` (eslesen: _YaBLaK eRMiŞ eRiNÇ_)
    > ...ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul bo...


## BK-D-6#6 - Bilge Kağan Yazıtı, Doğu 6. satir  (17 kelime)

- **transkripsiyon:** `BeGLeRİ : BODuNI : TÜZSüZ : ÜÇÜN : TaBGaÇ : BODuN : TeBLiGİN : KÜRLüG : ÜÇÜN : aRMaKÇISIN : ÜÇÜN : İNiLİ : eÇİLİ : KİŊŞÜRTÜKİN : ÜÇÜN : BeGLİ : BODuNLIG`
- **kelime karsiliklari:** BEĞLERİ : BOYLARI : DÜZSÜZ [OLDUĞU] : İÇİN : TABGAÇ : BOYLARI : TEBLİ : GÜR : [OLDUĞU] İÇİN : ARMAKÇI : [OLDUĞU] İÇİN : İNİYİ : EÇİYİ : KİNLEŞTİRDİĞİ : İÇİN : BEĞLE : BOYLARI
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...n (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız o...
  - `Ata 2011, s. 51` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...re inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız og...
  - `Olmez 2017, s. 110` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...urumu eki [Levha: Eski Türk (runik) yazısıyla yazılmış beş satır metin] *D 6. kılnmadok erinç: oglı : kaŷın teg : kılnmadok erinç: biligsiz : kagan olormış erinç : yavlak : kagan : olormış erinç : buyruki : yeme : biligsiz ermiş erinç : yavlak ermiş erinç : begleri : bodunı : tüzsüz üçün : tavgaç : bodun : tevligin körlügin üçün armakçısın : üçün : inili eçili : kıkśürtökin : üçün : begli : bodunlıg* "evlatlar babaları gibi yaratılmadığı için, bilgisiz hakanlar tahta çıktığı için, kötü hakanlar yönetime geçtiği için, komutanları da bilgisiz...
  - `Ata 2011, s. 44` (eslesen: _BeGLeRİ BODuNI TÜZSüZ ÜÇÜN_)
    > ...… [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün bo...
