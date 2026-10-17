# Ceviri istek paketi 9 - Orhun cumlecikleri

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


## KT-D-29#4 - Kül Tigin Yazıtı, Doğu 29. satir  (4 kelime)

- **transkripsiyon:** `aZ : BODuNuG : ÖKüŞ : KILTıM`
- **kelime karsiliklari:** AZ : BOYLARI : ÇOK : KILDIM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _aZ BODuNuG_)
    > ...ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam ha...
  - `Tekin 2003, s. 134` (eslesen: _aZ BODuNuG_)
    > ...deyişle, belirsiz miktarları ifade eden sözcükler şunlardır: *az* "az", *azça* "biraz", *azkıńa* "pek az, azıcık", *üküş* "pek çok". Belirsizlik sayıları niteleyici, ad ya da zarf olarak kullanılabilir. [s. 134] # s. 134 — TALAT TEKİN 1. Niteleyici olarak: *az bodunug üküş kıltım* "Az halkı çoğalttım" (KT G 10) *kül tiginig az ärin irtürü ı(t)tımız* "Prens Kül'ü az sayıda adamla ileri gönderdik" (KT D 40) *azça bodun täzmiş ärti* "Az sayıda halk kaçmış idi" (T 43) *azkıńa türk [bodun] yorıyur ärmiş* "Sayıca çok az Türk hal...
  - `Ata 2011, s. 55` (eslesen: _aZ BODuNuG_)
    > ...teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür...
  - `Olmez 2017, s. 94` (eslesen: _aZ BODuNuG_)
    > ...banı &nbsp;&nbsp;&nbsp;&nbsp;-tu: bilinen geçmiş zaman eki &nbsp;&nbsp;&nbsp;&nbsp;+m: teklik birinci kişi eki **Runik** (4 satır; ilk satırın sağında satır numarası: 10) ***G 10.*** *yok : čıgań́ bodunug : k²op k²uvratdıḿ : čıgań́ : bodunug : bay kıltım : az bodunug : üküš : kıltım : azu bo savımda : ıgıd bargú tǘr²k : begler : bodun : bońı ėšidiŋ : tür²k bødɯŋ tëriṕ el tutıkıjın : bońtá urtum : yaǰılıp : ólsıkıjın : yeme :* "yoksul ve fakir olan halkı tümüyle bir araya getirdim. Yoksul halkı zengin ettim, az olan ha...
  - `Ata 2011, s. 48` (eslesen: _aZ BODuNuG_)
    > ...çerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu...
  - `Tanyeri, s. 24` (eslesen: _aZ BODuNuG_)
    > ...örüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parçalarını ifade etmektedir. “Üze kök Tengri, asra yaġız yer” veya “Çıgany bodunuġ bay kıltım, az bodunuġ üküş kıltım.” gibi ifadelerde görüldüğü üzere, eşit ögeli birimlerle koşutluk sağlanarak anlatım güçlü ve etkili kılınmıştır. Yukarıda sıralanan maddeler altında verilen bilgiler, yazıtlar döneminde Türkçenin gelişmiş bir “yazı” ve “yazın” diline sahip o...


## KT-D-29#5 - Kül Tigin Yazıtı, Doğu 29. satir  (8 kelime)

- **transkripsiyon:** `IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM : TÖRT : BULuŊDaKI`
- **kelime karsiliklari:** DEĞERLİ : İLLİDEN : DEĞERLİ : KAĞANLIDAN : YEĞ : KILDIM : DÖRT : TARAFDAKI
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ ö...
  - `Ata 2011, s. 55` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi anç...
  - `Ata 2011, s. 48` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diril...


## KT-D-30#1 - Kül Tigin Yazıtı, Doğu 30. satir  (4 kelime)

- **transkripsiyon:** `KaGaNLıGDA : KOP : BaZ : KILDıM`
- **kelime karsiliklari:** KAĞANLIĞIDA : HEP : BAZ : KILDIM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KOP BaZ_)
    > ...yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp erm...
  - `Tekin 2003, s. 144` (eslesen: _KOP BaZ_)
    > ...k çok", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi og...
  - `Ata 2011, s. 47` (eslesen: _KOP BaZ_)
    > ...üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halk...
  - `Olmez 2017, s. 103` (eslesen: _KOP BaZ_)
    > ...zuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O...
  - `Ata 2011, s. 40` (eslesen: _KOP BaZ_)
    > ...: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk...
  - `Tekin 1998, s. 25` (eslesen: _KaGaNLıGDA_)
    > ...erü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay t...


## KT-D-30#2 - Kül Tigin Yazıtı, Doğu 30. satir  (5 kelime)

- **transkripsiyon:** `YaGıSIZ : KILDıM : KOP : MaŊA : KÖRTİ`
- **kelime karsiliklari:** [TÜRKÜ] YAĞISIZ : KILDIM : HEP : BANA : GÖRDÜ
- **kanit:**
  - `Tekin 2003, s. 120` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...(T 21) *bizni ärklig adırtı* "Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I 8) 4. Verme-Bulunma durumu: *bilgä tuñukuk(k)a baŋa aydı* "(Hakan), Bilge Tunyukuk'a, bana, (şöyle) emretti:" (T 31) *bu yerdä maŋa kul boltı* "Burada bana köle oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı ha...
  - `Ata 2011, s. 55` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...ań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6...
  - `Ata 2011, s. 48` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az o...


## KT-D-30#3 - Kül Tigin Yazıtı, Doğu 30. satir  (3 kelime)

- **transkripsiyon:** `İŞiG : KÜÇüG : BİRÜR`
- **kelime karsiliklari:** İŞİ : GÜCÜ : VERİR [OLDULAR]
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _İŞiG KÜÇüG BİRÜR_)
    > ...üleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk...
  - `Tekin 2003, s. 112` (eslesen: _İŞiG KÜÇüG BİRÜR_)
    > ...Hakana tabi oldu" (T 28) *äb+kä tägdöküm* "Karargaha vardım" (O 10) [s. 112] # s. 112 — TALAT TEKİN *oguz täzip tabgaç+ka kirti* "Oğuzlar kaçarak Çin'e gittiler" (BK D 38), vb. 2. Eylemin kimin yararına işlendiğini gösteren zarf tümleci olur: *nä kagan+ka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *ülgän at+ka işig küçüg berti* "Büyük unvan sahibine hizmet etti" (O 11), vb. 3. Bir sontakı ile zarf tümleci olur: *ilgärü yaşıl ügüz şantuŋ yazı+ka tägi sülädimiz* "Doğuda Yeşil Irmak (ve) Şantung Ovası...
  - `Ata 2011, s. 55` (eslesen: _İŞiG KÜÇüG BİRÜR_)
    > ...kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışla...
  - `Ata 2011, s. 48` (eslesen: _İŞiG KÜÇüG BİRÜR_)
    > ...r: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğaltt...


## KT-D-30#4 - Kül Tigin Yazıtı, Doğu 30. satir  (9 kelime)

- **transkripsiyon:** `BUNÇA : TÖRÜG : KaZGaNıP : İNiM : KÖLTİGiN : ÖZİ : aNÇA : KeRGeK : BOLDI`
- **kelime karsiliklari:** BUNCA : TÖREYİ : KAZANIP : İNİM : KÜLTİĞİNİN : ÖZÜ : ANCA : KERGEK : OLDU
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BUNÇA TÖRÜG KaZGaNıP İNiM_)
    > ...ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdum...
  - `Ata 2011, s. 55` (eslesen: _BUNÇA TÖRÜG KaZGaNıP İNiM_)
    > ...üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışlasın, ilahî lutfum Köl Tigin heykelinin kırık olan başı. olduğu içi...
  - `Ata 2011, s. 48` (eslesen: _BUNÇA TÖRÜG KaZGaNıP İNiM_)
    > ...zun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti olandan,...


## KT-D-30#5 - Kül Tigin Yazıtı, Doğu 30. satir  (6 kelime)

- **transkripsiyon:** `KaŊıM : KaGaN : UÇDUKDA : İNiM : KÖLTİGiN : YİTİ`
- **kelime karsiliklari:** BABAM : KAĞAN : UÇTUĞUNDA : İNİM : KÜLTİĞİN : YEDİ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _KaGaN UÇDUKDA İNiM_)
    > ...ğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 3...
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


## KT-D-30#6 - Kül Tigin Yazıtı, Doğu 30. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaŞDA : KaLTI : ---`
- **kelime karsiliklari:** YAŞINDA : KALDI : ---
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _YaŞDA KaLTI_)
    > ...m; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu...
  - `Tekin 2003, s. 124` (eslesen: _YaŞDA KaLTI_)
    > ...uğunda ben Tarduş halkının üzerine Şad idim" (KT D 17) *özüm karı boltum ulug boltum* "Ben yaşlandım, ihtiyar oldum" (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altı...
  - `Tekin 2003, s. 75` (eslesen: _KaLTI_)
    > ..."yolda" (KT K 9; T 16, IB 35) < **yōlda* - *boltokda* "olduğunda" (O ön 1, 6) < **bōldokda* ~ *boldum* "oldum" (Barık II 1) - *adrıltım* "ayrıldım" (Uyuk-Turan 1, Kızıl Çıra I 2, vb.) ~ *adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/...
  - `Ogel C1, s. 578` (eslesen: _YaŞDA_)
    > ...leri Çin dağlarında bulunur. Bu köpekler ancak orada yetişebilirler.” [s. 578] TÜRKLER VE MOĞOL MİTOLOJİSİ 567 İstanbul'daki Esat Efendi kütüphanesinde bulunan başka bir Türkçe yazma tercümede de şöyle denmektedir : “Onları, yani bu Tibet köpeklerini-küçük yaşda avlayıp beslerler. İnsanla cinsi münasebet kuruncaya kadar büyütürler. Tibet halkının en kıymetli hediyelerindendir.”” Görülüyor ki Osmanlılar, ya tefsir yolu ile, veyahut da bildikleri bazı şeylere göre, Ali Ekber'in metnine bazı şeyler katıyorlardı. Bunlar...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 154` (eslesen: _KaLTI_)
    > ...#ad., Uyg, Çağ, D. Tür., Taran.; Caf.; Müh.J. Krş.: Rad., Kaz., Kı. karanğgı. karanğku - karanlık. B£: karanğgu. karar — — kararmak. Bk: kara er —. /RKad., Alt, Tel, Çay, Kar.; Caf, T. T., An. İnd). [[y. 154]] karart — — karartmak, /Kad., 7el./. karça -- — kaltılaşmak. karç kurç — “hatır hutur, gibi bir ses bildirir. — ye — — hatır hutur yemek. kardu — zemheri sıralarında su üzerinde yüzen fındık büyüklüğündeki buz parçaları. karga -— karga. /Rad., Bü, D.; Müh.; İd., Hou.)- -— lânet etmek, beddua etmek ; lânetle...
  - `03_Codex_Cumanicus_Kuun_1880, s. 385` (eslesen: _KaLTI_)
    > ...tiam Hungaris notae sunt. Molla Iszhak voc. aenigma dialecto sua ojiin Jiikajct «lusoria dictio» nuncupavit (Nyelvtud. Kozlemenyek, T. IV. f. II. pag. 275). 3. Radloffius undeviginti tribus Tolosensis aenigmata edidit, quorum ultimum : tosto pudai tiigiiliip kaltir. tangarining jiltis cum secundo aenigmate a Bc)HTLINGKIO edito in ipsa rei perceptione convenit. [[y. 385]] Ecce aenigma jacuticum : balagan iirdiigar carpa toxtop sitar iisii. sultustar «super tugurium furfur dispersum jacet, stellae» (1. c, vid. I. T....


## KT-D-31#1 - Kül Tigin Yazıtı, Doğu 31. satir  (10 kelime)

- **transkripsiyon:** `UMaY : TeG : ÖGüM : KaTUN : KUTıŊA : İNiM : KÖLTİGiN : eR : aT : BOLDI`
- **kelime karsiliklari:** UMAY : GİBİ : ÖĞÜM : KADIN : KUTUNDA : İNİM : KÜLTİĞİN : ER : ADI : OLDU
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _UMaY TeG ÖGüM KaTUN_)
    > ...nlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ el...
  - `Kafesoglu, s. 156` (eslesen: _UMaY TeG ÖGüM KaTUN_)
    > ...Bu vazifenin mutlaka imparatorun oğluna devredilmesi için bir zaruret yoktur. Gök " D« Grene, ayn. esr., s. 20L 204 Yukarıda açıkladığımız "kut"un evlâda olduğu gibi (bk. VeliahdItfc}. hâtona da sirayet etliği düşüncesi: (bk. [[s. 156]] Kitabe, I, doğu, 31: "Umay teg ögüm katun kutınga toim KMİ Tigm er at btdâu* -: Uroay gibi anam hâtûnun kutuna küçük kardeşim Kül Tegin er oldu jer adıısu «kl»]>. KB (beyit, 109): "Bayat birdi devlet ay terken kutı" = "Ey (iktidar sahibi) hatun, devklı («ti») T»nn verdi* (beytin bugünkü Türkçe'ye ter...
  - `Tekin 1998, s. 24` (eslesen: _ÖGüM KaTUN_)
    > ...rti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 4...
  - `Tekin 2003, s. 151` (eslesen: _ÖGüM KaTUN_)
    > ...etir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça) Umay gibi (olan) annem Hatun" (KT D 31) *körür közüm körmäz täg, bilir biligim bilmäz täg boltı* "Gören gözlerim görmez gibi, eren aklım ermez gibi oldu" (KT K 10) *yagımız tägrä oçok täg ärti, biz aş <t>äg ärtimiz* "Düşmanlarımız etrafta ocak gib...
  - `Tekin 2003, s. 59` (eslesen: _eR aT_)
    > ...- *taş(ı)n* "dışını" (T 13) < *taş-in* (KT G 12, BK K 14) - *usın* "uykusunu" (T 19) < **ū-sin* - *y[ıl]k[ıs]ın* "at sürülerini" (BK GB) < *yılkısin* (BK D 24) Uygur yazıtlarında da art ünlülü sözcüklere eklenen 3. kişi iyelik eki genellikle ünlü uyumuna girer: - *atın* "adlarını" (Tar. K 5) < *āt-in* - *bar(ı)mın* "malını mülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *başın* "doruğunu" (MÇ D 4) < *baş-in* - *katunın* "hatununu" (MÇ K 10) < *katun-in* - *kızın* "kızlarını" (MÇ D 3) < *kız-...
  - `Ata 2011, s. 77` (eslesen: _eR aT_)
    > ...ı ve milletin geleceği daha iyi görmeye ve düşünmeye teşvik edilişi, anıtların bütün Türk milletine her dönemde hitap eden bir eser olduğunu ortaya koymaktadır. Anlatılmak istenen konular düzgün cümlelerle aktarılmış, bu cümleler bugün de kullanılan deyimler, atasözleri ve edebî sanatlar ile süslenmiştir. İfadeyi güçlendirme amaçlı tekrarlara da sık sık rastlanır. Örneğin: “Çin hakanına (devletine) düşman olmuş, düşman olup” (KT D9, BK D9) “hepsi yedi yüz kişi olmuş, yedi yüz kişi olup” (KT D13, B...


## KT-D-31#2 - Kül Tigin Yazıtı, Doğu 31. satir  (9 kelime)

- **transkripsiyon:** `aLTI : YiGiRMİ : YaŞIŊA : eÇİM : KaGaN : İLİN : TÖRÜSİN : aNÇA : KaZGaNDI`
- **kelime karsiliklari:** ALTI : YİRMİ : YAŞINDA : EÇÜM : KAĞANIN : İLİNİ : TÖRESİNİ : ANCA : KAZANDI
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _YaŞIŊA eÇİM KaGaN İLİN_)
    > ...ğısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]...
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN_)
    > ...yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka te...
  - `Tekin 2003, s. 105` (eslesen: _eÇİM KaGaN_)
    > ...öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä in...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik ek...
  - `Olmez 2017, s. 55` (eslesen: _eÇİM KaGaN_)
    > ...(KT G 5) **Bilnen geçmiş zaman *-DI* ekiyle kurulur:** *ilgerü şantuŋ yazıka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını...
  - `Tekin 1998, s. 22` (eslesen: _İLİN TÖRÜSİN_)
    > ...küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı b...


## KT-D-31#3 - Kül Tigin Yazıtı, Doğu 31. satir  (5 kelime)

- **transkripsiyon:** `aLTI : ÇUB : SUGDaK : TaPA : SÜLeDiMiZ`
- **kelime karsiliklari:** ALTI : ÇUB : SOĞDAK : TARAFINA : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _aLTI ÇUB_)
    > ...[[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünk...
  - `Ergin 1970, s. 18` (eslesen: _aLTI ÇUB_)
    > ...Kül Tigin kendisi öylece vefat etti. | Babam kağan uçtuğunda küçük kardeşim Kül Tigin yedi yaşında kaldı....... [[s. 18]] I Umay gibi annem hatunun devletine küçük kardeşim Kül Tigin er adını aldı. On altı yaşında, amcam kağanın ilini, töresini şöyle kazandı: Altı Çub Soğdaka doğru ordu sevk ettik, bozduk. Çinli Ong vali, elli bin asker geldi, savaştık. | Kül Tigin yaya olarak atılıp hücum etti. Ong valinin kayın biraderini, silâhlı, elle tuttu, silahlı olarak kağana takdim etti. O orduyu orda yok ettik. Yirmi bir yaşında...
  - `Kafesoglu, s. 71` (eslesen: _aLTI ÇUB_)
    > ...usu faaliyet hâlinde idi. [[s. 71]] 701 başlarında Tangutların sahası Lung-yu (Kansu'nun kuzeydoğusu)'ya bir akın tertipleyen Kapgan'ın, buradan Güney Ordos'da Sogd kolonileri(Chao-wu),nin bulunduğu "Altı eyâlet" (=Liu Hu Çu. Kül Tegin ve Bilge Kitabelerinde: Altı Çub Sogdak) üzerine açtığı sefere (702 Şubat) Bilge ile Kül Tegin de katümışlardı. [[s. 71]] Sogdluların dağılması üzerine karşı çıkan Çinli kumandan Ong-tutuk idaresindeki 50 bin kişilik ordu da mağlûp edildi ve Çinli general, henüz 16 yaşlarında bulunan Kül Teg...
  - `Tekin 1998, s. 23` (eslesen: _SÜLeDiMiZ_)
    > ...al tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _SÜLeDiMiZ_)
    > ...yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...


## KT-D-31#4 - Kül Tigin Yazıtı, Doğu 31. satir  (9 kelime)

- **transkripsiyon:** `BOZDuMuZ : TaBGaÇ : OŊ : TUTUK : BİŞ : TÜMeN : SÜ : KeLTİ : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** BOZDUK : TABGAÇ : ONG : TUTUK : BEŞ : TÜMEN : SÜ [İLE] : GELDİ : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BİŞ TÜMeN SÜ KeLTİ_)
    > ...gek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at...
  - `Kafesoglu, s. 71` (eslesen: _OŊ TUTUK_)
    > ...s'da Sogd kolonileri(Chao-wu),nin bulunduğu "Altı eyâlet" (=Liu Hu Çu. Kül Tegin ve Bilge Kitabelerinde: Altı Çub Sogdak) üzerine açtığı sefere (702 Şubat) Bilge ile Kül Tegin de katümışlardı. [[s. 71]] Sogdluların dağılması üzerine karşı çıkan Çinli kumandan Ong-tutuk idaresindeki 50 bin kişilik ordu da mağlûp edildi ve Çinli general, henüz 16 yaşlarında bulunan Kül Tegin tarafından elinde silâhı ile yakalanarak getirilip hâ-kan'a teslim edildi (702 sonbahar)373. Kapgan Çin'e akınlarına devam etti. 702'de Yen-çu, Hia-u, Şi...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 284` (eslesen: _TÜMeN SÜ_)
    > ...k için elini koynuna sokmak. Bk: soglıt —, sograt —, sugrat — soglıt — — aramak için elini koynuna sokturmak. Bk: soglı—, sograt—, sugrat—. sograş — — sormak, emmek. sograt — — aratmak, aratarak her şeyi görmek. Bk: sog—, soglı—, soglıt—, sogur—. Krş.: Rad., Tümen— suk — — aramak, soguk — soğuk. /Rad.; Caf./. [[y. 284]] — luk — soğukluk için hazırlanmış. soguklan — — soğuk bulmak veya soğuk saymak. sogul — — -su- toprağa sızıp kaybolmak, soğulmak, -su, süt-çekilmek, azalmak. Krş.: Caf.— sugul — — kurumak, su çekilmek....
  - `03_Codex_Cumanicus_Kuun_1880, s. 411` (eslesen: _SÜ KeLTİ_)
    > ...97. Kelanedir ? «trahit» pag. 228. Kelepen s. keleppen «ieprosus»pag. Keliyrir «venit» pag. 143, keji i. e. kelejir idem pag. 144, kelgay «ve- niat» ibid., keluyorler «veniunt» pag. [[y. 411]] 221, — keltiristi perf. formae fact., e. g. sukeltiristi i. e. su keltiristi «juvavit in gerenda aqua» Kyk «incendium» pag. 148. Kyce «parvusB» pag. 146, cf. chi^i. Kic^iyder ma «pruritum sentio» pag. Ky^kerir «clamat pag. 169. Kijgil «indue» pag. 66, cf. keyic. Kiynarsen «affligens» pag. 213, cf. kinahp. Kigir «nictatur» pag...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...


## KT-D-32#1 - Kül Tigin Yazıtı, Doğu 32. satir  (10 kelime)

- **transkripsiyon:** `KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI`
- **kelime karsiliklari:** KÜLTİĞİN : YAYAN : [H]OPLAYIP : [YAĞIYA] DEĞDİ : ONG : TUTUK : YURÇİNİN : KILIÇLI : ELİNİ : TUTTU
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _YaDaGıN OPLaYU TeGDİ OŊ_)
    > ...tli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip te...
  - `Tekin 2003, s. 117` (eslesen: _YURÇİN YaRaKLıG_)
    > ...u) anasına babasına ulaştırmış" (IB 35) 3. Eylemin işlenme tarzı: *anta ötrü oguz kop+ın kälti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *bäglär kop[ın] yanalım... tedi* "(O haberi işitip) beyler hep birlikte "Dönelim!" dediler" (T 36-37) *oŋ totok yurçin yaraklıg älig+in tutdı* "(Prens Kül) Ong Totok'un kayın biraderini silahlı eli ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dön...
  - `Kafesoglu, s. 71` (eslesen: _OŊ TUTuK_)
    > ...s'da Sogd kolonileri(Chao-wu),nin bulunduğu "Altı eyâlet" (=Liu Hu Çu. Kül Tegin ve Bilge Kitabelerinde: Altı Çub Sogdak) üzerine açtığı sefere (702 Şubat) Bilge ile Kül Tegin de katümışlardı. [[s. 71]] Sogdluların dağılması üzerine karşı çıkan Çinli kumandan Ong-tutuk idaresindeki 50 bin kişilik ordu da mağlûp edildi ve Çinli general, henüz 16 yaşlarında bulunan Kül Tegin tarafından elinde silâhı ile yakalanarak getirilip hâ-kan'a teslim edildi (702 sonbahar)373. Kapgan Çin'e akınlarına devam etti. 702'de Yen-çu, Hia-u, Şi...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 80` (eslesen: _TeGDİ OŊ_)
    > ...L yat : Taşlarla yağmur ve rüzgâr getirmek ii çin yapılan kamlık. YL. yaz : Yaz. Şu savda dahi gelmiştir: ">U o şaDyia al yazın katıglansa kışın sewnür > yazın çalışan kışın sevinir”, Kr ga e yas : Ziyan, zarar. Buradan alınarak" A e nz da SU anıng telim yanı tegdi ona çok ziyan erişti" denir. [[y. 80]] ez i Ye PU yas £ ölüm, helâk. Oğuzca, SİS anınğ oglı yas boldı x onun oğlu öldü", << >İ yaş : Göz yaşı. "Sö sl 03 $ közü yaşı mM akdı > gözümün yaşı aktı". Ni o pl L yaş : Sebze, zarzavat, yeşillik. " iz yaş yedim sebze y...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 24` (eslesen: _YaRaKLıG_)
    > ...ğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul...


## KT-D-32#2 - Kül Tigin Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `YaRaKLıGDI : KaGaNKA : aNÇULaDI`
- **kelime karsiliklari:** KILICI : KAĞANA : SAPLADI
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _YaRaKLıGDI KaGaNKA aNÇULaDI_)
    > ...im Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at...
  - `Tekin 2003, s. 144` (eslesen: _YaRaKLıGDI KaGaNKA_)
    > ...(BK D 36) *ıgar oglanıŋızda taygunuŋuzda yegdi igidür ärtigiz* "(Halkınızı) sevgili çocuklarınızdan, tay 'gibi' oğullarınızdan daha iyi besliyor idiniz" (KT GD) 4. *yaraklıgdı* "silahlı olarak" < *yaraklıg* "silahlı": *oŋ totok yurçin yaraklıg äligin tutdı, yaraklıgdı kaganka ançoladı* "(Prens Kül), Vali Ong'un kayın biraderini eli silahlı iken tuttu, silahlı olarak Hakan'a sundu" (KT D 28) **322.** {+(X)n} araç durumu eki ile türetilmiş tarz zarfları şunlardır: *yadagın, yalaŋın, yegin*. *[yir] sayu barmiş bodun ölü yitü yadagın...
  - `Tekin 2003, s. 72` (eslesen: _YaRaKLıGDI_)
    > ...)ı* "cenaze töreni düzenledi" (KÇ D 12) < **yōglatdı* - *yunt(t)a* "(erkek) attan" (IB 24) < **yuntda* - *yurt(t)a* "terkedilmiş kamp yerinde" (IB 13) < **yūrtda* 4. /gt/ > /gd/: - *katıgdı* "sıkıca" (IB 33, vb.) < *katıgtı* (IB 14); krş. *ädgüti* "iyice" - *yaraklıgdı* "silahlı olarak" (KT D 32) < **yaraklıgtı* - *yegdi* "daha iyi bir şekilde" (KT GD; BK D 36) < **yegti* [s. 73] # s. 73 — ORHON TÜRKÇESİ GRAMERİ 5. /mk/ > /mg/: Verme-bulunma durumu ekindeki artdamaksıl /k/ ünsüzü bazı Yenisey yazıtlarında /m/den sonra ötü...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA_)
    > ...li bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?"...
  - `Ata 2011, s. 51` (eslesen: _KaGaNKA_)
    > ...i bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarla...


## KT-D-32#3 - Kül Tigin Yazıtı, Doğu 32. satir  (5 kelime)

- **transkripsiyon:** `OL : SÜG : aNDA : YOK : KIŞDıMıZ`
- **kelime karsiliklari:** O : SÜ[YÜ] : [O] ANDA : YOK : KILDIK
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _OL SÜG_)
    > ...ı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip t...
  - `Tekin 2003, s. 141` (eslesen: _OL SÜG_)
    > ...tokıtdım* "Otağ(ımı) burada kurdurtdum, ordugah çitlerini (de) burada vurdurttum" (Tar. B 2) **316.** *anta* "orada, o yerde" (bk. **Gösterme Zamirleri**): *anta ańıg kişi ança boşgurur ärmiş* "Orada kötü (niyetli) kişiler şöyle akıl verirler imiş" (KT G 7) *ol süg anta yok kışdımız* "O orduyu orda yok ettik" (KT D 32) *üküş öltäçi anta tirilti* "(Aksi halde) ölecek olan birçok kişi orada hayatta kaldı" (BK D 31) *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *alpi ärdämi anta kükdi* "Onun yiğitliği ve...
  - `Ata 2011, s. 119` (eslesen: _OL SÜG_)
    > ...’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın...
  - `Ata 2011, s. 112` (eslesen: _OL SÜG_)
    > ...rü ‘beri, bu yana’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. [[s. 112]] +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’,...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 5` (eslesen: _aNDA YOK_)
    > ...mıştı 1 - Kutadgu-Biliğ - SAblylys - SAL Ale -— AYAYLA AN oYi oLML ia a desi! a! APİ izl, Yin. " aaa sw 8 - İbnü Mühennanın bahsettiği bir eser (Celâleddin Harzemşah adına yazılan bu eser bize kadar gelmemiştir). [[y. 5]] 9- —İNİAĞ AN, a) (kitap meydanda yoktur) v- —4AŞ UĞ)JLEAYI (kitap meydanda yoktur) 11 - ES) liz) Nİ (kitap bize kadar gelmemiştir) 12 - SAğ Yal al A, yi zi 13 - Bilik (Bu kitaptan Ebu Hayyan bahsetmekte ise de bugün eser meydanda yoktur). 14 - yelekli mil) > Çfbnü Mühenna bahsederse de eser...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 348` (eslesen: _aNDA YOK_)
    > ...klan ve bir kısmının da kılıçtan geçirildikleri haberi ile bir haberci geldi. [[s. 348]] (Haberci): "Senin büyük oğlun Vsevolod'u kardeşleri ile şehrin dışında öldürdüler ve senin üzerine yürüyorlar" (dedi). Yuriy, biraderi Yaroslav'ı bekliyordu, fakat o (meydanda) yoktu. Ve Knez kendi voyvodasına adamlarının silAhlanm.asını (metinde: takdim edilmelerini) ve savaşa hazırlanmalarını emretti; ve cesur adam olan Dorofey Semenoviç'i üç bin askerle, Tatarlan keşf için yolladı. [[s. 348]] O azıcık uzaklaşmışken: "Bay Knez: Tatarl...


## KT-D-32#4 - Kül Tigin Yazıtı, Doğu 32. satir  (6 kelime)

- **transkripsiyon:** `BİR : OTuZ : YaŞIŊA : ÇaÇA : SeŊÜNKE : SÜŊüŞDiMiZ`
- **kelime karsiliklari:** BİR : OTUZ : YAŞINDA : ÇAÇA : SENGÜ [İLE] : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BİR OTuZ YaŞIŊA ÇaÇA_)
    > ...rüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konu...
  - `Tekin 2003, s. 129` (eslesen: _BİR OTuZ_)
    > ..."11" (MÇ G 8), *eki yegir[mi]* "12" (KT D 28), *üç yegirmi* "13" (KT D 28), *tört yegirmi* "14" (BK D 15), *biş yigirmi* "15" (MÇ D 6), *altı yegirmi* "16" (KT D 31), *yeti yegirmi* "17" (T 49), *säkiz yegirmi* "18" (KT D 32), *tokuz yegirmi* "19" (BK G 9), *bir otuz* "21" (KT D 32), *eki otuz* "22" (BK D 25), *üç otuz* "23" (T 19), *biş otuz* "25" (KT D 18), *altı otuz* "26" (BK D 26), *yiti otuz* "27" (KT K 1), *tokuz otuz* "29" (Miran A 1), *bir kırk* "31" (KT K 2), vb. 2. Yenisey yazıtlarında 80'e kadar olan ara sayı...
  - `Ata 2011, s. 114` (eslesen: _BİR OTuZ_)
    > ...7000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK G9, bir otuz ‘21’ KT D32, eki otuz ‘22’ BK D25, üç otuz ‘23’ T 19, biş otuz ‘25’ KT D18, altı otuz ‘26’ BK D26, yiti otuz ‘27’ KT K1, bir kırk ‘31’ KT K2 vb. Açıklama: Yukarıda sıralanan iki haneli sayılar şu kalıba göre ifade edilirdi: {Sayı Sözü + Onluk H...
  - `Olmez 2017, s. 43` (eslesen: _BİR OTuZ_)
    > ...Turk: *ulu yerine nag yılı*] [s. 43] # s. 043 — Köktürkçe Dersleri (basılı sayfa 45) 6. **yılan yıl:** *yılan yılka türük ėlin anta bulgadım anta arttatım* "yılan yılında Türk ülkesini (yönetimini) o dönem karıştırdım, dağıttım" Tar D5; *yılan yıl bėşinç ay bir otuzka* "Yılan yılı, beşinci ay, yirmi birinci günde" Eski Uygurcadan (HT VI 1820, Ölmez 1993, 161) 7. **yunt yıl:** *yunt yıl törtünç ay sekiz yėgirmike (...)* "At yılı, dördüncü ayın on sekizinde" (SUK-Sa08/1, Ayazlı 2016, 525'e göre) 8. **koń yıl:** *kül tėgi...
  - `Tekin 2003, s. 168` (eslesen: _OTuZ YaŞIŊA_)
    > ...bir öbek oluşturur: *er-ür bar-ur* (< *er-ür bar-ır*). Bu söz öbeğinin sonuna "olan" anlamındaki *ärkli* (< *\*är-igli*) sıfatı da getirilerek "(serbestçe) gelir gider, (serbestçe) hareket eder" anlamında kalıplaşmış bir söz öbeği oluşturulur: *kül tigin yiti otuz yaşıŋa karluk bodun er-ür bar-ur ärkli yagı boltı* "Prens Kül yirmi yedi yaşında (iken) Karluk halkı (serbestçe) gelir gider (hareket eder) bir düşman oldu" (KT K 1) *otuz artukı bir yaşıma karluk bodun buŋsız [er]-ür bar-ur ärkli yagı boltı* "Otuz bir yaşımda Karlu...
  - `Ata 2011, s. 107` (eslesen: _BİR OTuZ_)
    > ...biŋ ‘17000’ c. [[s. 107]] bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK G9, bir otuz ‘21’ KT D32, eki otuz ‘22’ BK D25, üç otuz ‘23’ T 19, biş otuz ‘25’ KT D18, altı otuz ‘26’ BK D26, yiti otuz ‘27’ KT K1, bir kırk ‘31’ KT K2 vb. [[s. 107]] Açıklama: Yukarıda sıralanan iki haneli sayılar şu kalıba göre ifade edilirdi: {Sayı Sözü + Onluk Hane...


## KT-D-32#5 - Kül Tigin Yazıtı, Doğu 32. satir  (4 kelime)

- **transkripsiyon:** `eŊ : iLKİ : TaDıKıN : ÇORuŊ`
- **kelime karsiliklari:** EN : İLKİ : TADIKIN : ÇORUN
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _eŊ iLKİ TaDıKıN_)
    > ...ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün ör...
  - `Ata 2011, s. 108` (eslesen: _eŊ iLKİ TaDıKıN_)
    > ...askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinc...
  - `Tekin 1998, s. 25` (eslesen: _eŊ iLKİ_)
    > ...ledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamı...
  - `Tekin 2003, s. 69` (eslesen: _eŊ iLKİ_)
    > ...b.; *äkä* "abla", *eki* "2", *ökün-* "pişman olmak", *töküt-* "dökmek, akıtmak", *üküş* "pek çok", vb. 3. Söz içinde, ünsüz yanında: *armakçı* "aldatıcı, hilekar", *kulkak* "kulak", *yılkı* "at sürüsü", *yuyka* "ince", *azkıña* "azıcık", vb.; *ärkli* "olan; iken", *ilki* "birincisi", *ärklig* "güçlü", *kärgäksiz* "bol bol", vb. 4. Söz sonunda: *adak* "ayak", *ırak*, *buyruk* "kumandan", *balık* "şehir", vb.; *bädük* "büyük", *bişük* "akraba", *kök* "mavi", *türük* "Türk", vb. 5. Söz sonunda, /l/ ve /r/den sonra: *bark*, *kır...
  - `Ata 2011, s. 30` (eslesen: _eŊ iLKİ_)
    > ...arın en önemli belgesi olan Moğolların Gizli Tarihi ise 1240 yılına aittir. Bu eseri Ahmet Temir, 1948 yılında Türkiye Türkçesine aktarmıştır. Tunguzcanın en eski yazılı belgesi bugün artık ölü diller arasında sayılan Çuçen diline aittir. Bu belgelerden ilki 1413, ikincisi 1433’ten kalmadır. Tunguzca içinde en çok Mançular hakkında bilgi sahibiyiz. Mançuca belgelerin en eskileri ise XVI. yy’a aittir. Korecenin çok ufak parçalara yazılı olan ilk belgeleri ise 1443’ten başlamaktadır. Altay dilleri...
  - `Tekin 2003, s. 148` (eslesen: _iLKİ TaDıKıN_)
    > ...yazdım” (KT G 11) Bk. **Soru Zarfları**. ## Karşılaştırma Zarfları **341.** Orhon Türkçesinde kullanılan tek karşılaştırma zarfı üstünlük derecesini kuran *äŋ* zarfıdır: - *äŋ ilk togu balıkda süŋüşdümüz* “İlk olarak Togu Balık’ta savaştık” (BK D 30) - *äŋ ilki tadıkıŋ çorıŋ boz [atıg binip tägdi]* “İlk olarak Tadık Çor’un boz (atına binip hücum etti)” (BK D 32) ## Sayı Zarfları **342.** Sayı zarfları ya da öyle kullanılan sözcük ve söz öbekleri şunlardır: *başlayu* “önce, ilk olarak”, *ulayu* ay., *ekinti* “ikinci olarak...


## KT-D-32#6 - Kül Tigin Yazıtı, Doğu 32. satir  (7 kelime)

- **transkripsiyon:** `BOZ : aTıG : BİNiP : TeGDİ : oL : aT : aNDA`
- **kelime karsiliklari:** BOZ : ATINA : BİNİP [YAĞIYA] : DEĞDİ : O : AT : [O] ANDA
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BOZ aTıG BİNiP TeGDİ_)
    > ...üğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı y...
  - `Tekin 2003, s. 132` (eslesen: _BOZ aTıG BİNiP_)
    > ...inç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş başınta süŋüşdümüz* "Dördüncü olarak Çuş (ırmağı) başında savaştık" (KT K 6), vb. ## Topluluk Sayıları **287.** Topluluk sayıları {+AgU(n)} eki ile oluşturulur: *ikägü...
  - `Ata 2011, s. 115` (eslesen: _BOZ aTıG BİNiP_)
    > ...ış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39...
  - `Ata 2011, s. 108` (eslesen: _BOZ aTıG BİNiP_)
    > ...ürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp...


## KT-D-33#1 - Kül Tigin Yazıtı, Doğu 33. satir  (12 kelime)

- **transkripsiyon:** `ÖLTİ : iKİNTİ : IŞBaRA : YaMTaR : BOZ : aTıG : BİNiP : TeGDİ : OL : aT : aNDA : ÖLTİ`
- **kelime karsiliklari:** ÖLDÜ : İKİNCİSİ : IŞBARA : YAMTAR [ADLI] : BOZ : ATA : BİNİP : [YAĞIYA] DEĞDİ : O : AT : [O] ANDA : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _IŞBaRA YaMTaR BOZ aTıG_)
    > ...Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olmasın (D 27) diye, Türk halkı için gece uyumadım, g...
  - `Tekin 2003, s. 132` (eslesen: _IŞBaRA YaMTaR BOZ aTıG_)
    > ...D) *bir yegirminç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş başınta süŋüşdümüz* "Dördüncü olarak Çuş (ırmağı) başında savaştık" (KT K 6), vb. ## Topluluk Sayıları **287.** Topluluk sayıları {+AgU(n)} eki ile oluşturulur:...
  - `Ata 2011, s. 115` (eslesen: _BOZ aTıG BİNiP_)
    > ...ış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39...
  - `Ata 2011, s. 108` (eslesen: _BOZ aTıG BİNiP_)
    > ...ürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp...


## KT-D-33#2 - Kül Tigin Yazıtı, Doğu 33. satir  (4 kelime)

- **transkripsiyon:** `ÜÇünÇ : YeGeN : SİLiG : BeGiŊ`
- **kelime karsiliklari:** ÜÇÜNCÜSÜ : YEĞEN : SİLİG : BEĞİN
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _ÜÇünÇ YeGeN SİLiG BeGiŊ_)
    > ...eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olmasın (D 27) diye, Türk halkı için gece uyumadım, gündüz oturmadım. [[s. 25]] Kardeşim Kül Tigin ile, iki...
  - `Tekin 2003, s. 106` (eslesen: _YeGeN SİLiG_)
    > ...geçer. İki örnekte de, tekil ikinci kişi iyelik ekinden sonra /+n/ olarak bulunur. Bir adın ilgi durumu üçüncü kişi iyelik eki almış bir addan önce belirli iyelik niteleyicisi olarak görev yapar. **256.** /+(n)Iŋ/: - *yigän silig bäg+iŋ kädimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizç...
  - `Tekin 1998, s. 7` (eslesen: _ÜÇünÇ_)
    > ...lunmuşsa da bu yazıt ne yazık ki Türkçe değildir. Yazıtın üç yüzü Soğdca bir yüzü de Sanskrit dilindedir. Bugut yazıtının Türkçe olmaması 6. yüzyıl sonlarında Türklerin henüz kendilerine özgü bir yazıları olmadığını gösterir. İkinci Kağanlık döneminden kalma üçüncü bir yazıt da Tunyukuk yazıtıdır. [[s. 7]] Tunyukuk yazıtı 1897'de ve Klementz tarafından Orhon yazıtlarından çok daha doğuda, Moğolistan'ın başkenti Ulan-Bator'un 50 kilometre kadar güney-batısında, Nalayha kenti ile Tola ırmağının sağ kıyısı arasında, Bayn...
  - `Ergin 1970, s. 5` (eslesen: _ÜÇünÇ_)
    > ...bir kağanlıkla idare ediliyordu. Bumin Kağan'ın kardeşi İstemi Kağan da 576'ya kadar bu batı bölümünün kağanı idi. Bumin Kağan, Göktürk hakimiyetini kurduğu sene içinde öldü ve sırasıyla üç oğlu, büyük kağanlık yaptılar. Birincisi 553'te, ikincisi 553-572'de, üçuncüsü de 572-581 tarihlerinde hüküm sürdüler. [[s. 5]] Bunlardan ikincisi olan Mukan zamanında devlet Mançurya'dan İran'a kadar uzanan kuvvetli bir imparatorluk haline geldi. Daha sonra devlet, bir yandan kuvvetli hakanların yokluğu ve devleti teşkil eden kaviml...
  - `Tekin 2003, s. 66` (eslesen: _ÜÇünÇ_)
    > ...*äçü* "ecdat, atalar", *içik-* "bağımlı olmak", *kiçä* "akşamleyin", *uçuz* "kolay", *üç(ü)n* "için", *içgär-* "bağımlı kılmak", *yogçı* "yas tutucu, ağlayıcı", vb. 3. Söz sonunda: *aç-* "açmak", *āç-* "acıkmak", *ıgaç* "ağaç", *küç* "güç, kuvvet", *üç(ü)nç* "üçüncü olarak", *öt(ü)nç* "rica", *yurç* "kayın birader", vb. ## /s/ Ünsüzü **108.** Ötümsüz diş sızıcısı /s/ her durumda bulunur. 1. Söz başında: *sab* "söz", *sakın-* "düşünmek", *säbin-* "sevinmek", *säkiz* "8", vb. 2. Söz içinde: *āçsık* "acıkacak olma", *aşs...
  - `Ata 2011, s. 36` (eslesen: _ÜÇünÇ_)
    > ...Late Old Turkic II (Geç Eski Türkçe II 700-1000) c. Late Old TurkicT III (Geç Eski Türkçe III 1000-1200) 3. Middle Turkic (Orta Türkçe 1200-) Róna-Tas’ın bu çalışmasında dikkati çeken yan, Karahanlı Türkçesinin, Geç Eski Türkçe döneminin üçüncü alt grubunda değerlendirilmesidir. Diğer bir deyişle, Orta Türkçe döneminin 1200’lerden itibaren, Moğol istilası ile başlatılmasıdır. Türk dilinin yeni bir dönemini başlatmada Róna- Tas’ın seçmiş olduğu olgu, Türklerin İslâmiyeti kabulü değil Moğol istil...


## KT-D-33#3 - Kül Tigin Yazıtı, Doğu 33. satir  (9 kelime)

- **transkripsiyon:** `KiDiMLiG : TORuG : aT : BİNiP : TeGDİ : OL : aT : aNDA : ÖLTİ`
- **kelime karsiliklari:** GİYİMLİ : DORU : ATINA : BİNİP : [YAĞIYA] DEĞDİ : O : AT : [O] ANDA : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _TORuG aT BİNiP TeGDİ_)
    > ...ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olmasın (D 27) diye, Türk halkı için gece uyumadım, gündüz oturmadım. [[s. 25]] Kardeşim Kül Tigin ile, iki Şad ile (birlikte) ölesiye yit...
  - `Tekin 2003, s. 205` (eslesen: _TORuG aT BİNiP_)
    > ...(kez) savaştı" (T 45) - *tabgaçka yeti yegirmi süŋüşdi* "Çinlilerle on yedi (kez) savaştı" (T 49) 5. Bir sıra sayısı: - *ekinti ışbara yamtar boz atıg binip...* "İkinci olarak Işbara Yamtar'ın boz atına binip..." (KT D 33) - *üçünç yigän silig bägiŋ kädimlig torug at binip...* "Üçüncü olarak Yigen Silig Bey'in doru atına binip..." (KT D 33) - *törtünç äzginti kadızda süŋüşdüm* "Dördüncü olarak Ezginti Kadız'da savaştım" (BK D 31), vb. 6. Bir zaman süresi gösteren niteleme öbeği: - *yigirmi kün olorup...* "Yirmi gün oturup..."...
  - `Tekin 2003, s. 106` (eslesen: _TORuG aT_)
    > .../ biçiminde geçer. İki örnekte de, tekil ikinci kişi iyelik ekinden sonra /+n/ olarak bulunur. Bir adın ilgi durumu üçüncü kişi iyelik eki almış bir addan önce belirli iyelik niteleyicisi olarak görev yapar. **256.** /+(n)Iŋ/: - *yigän silig bäg+iŋ kädimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ...
  - `Tekin 2003, s. 101` (eslesen: _OL aT_)
    > ...i (iyelik) ve ad durumu için çekimlenir. Adlar, ayrıca, sayı (çokluk) ve bağlama (ekleme) için de çekimlenebilir. #### Çokluk **240.** Orhon Türkçesinde adlar genellikle sayı için çekimlenmez. Yalın durumda bir ad hem tekil hem de çoğul görevinde olabilir: *ol at* "o at" (KT D 33), *at yätä* "atları yederek" (T 25), *külüg är* "ünlü adam" (O Ek 6), *öŋräki är* "öncü askerler" (T 25), vb. gibi. Bununla birlikte Orhon Türkçesinde belirli adlara eklenip topluluk adları türeten ekler ile çokluk ekleri de yok değildir. Bu...
  - `Ata 2011, s. 110` (eslesen: _OL aT_)
    > ...Çokluk (Topluluk) Ekleri Orhun Türkçesinde yalın durumda bir isim hem tekil hem çoğul anlamda kullanılır: külüg er O Ek 6 “ünlü adam” ~ öŋreki er T 25 “öncü askerler” ol at anta ölti KT D33 “o at orada öldü” ~ at yete T 25 “atları yederek” Bununla birlikte Orhun Türkçesinde çokluk (topluluk) ekleri de vardır: +lAr, +gUn, +An, +(X)t a. +lAr: Orhun Türkçesinde...
  - `Ata 2011, s. 103` (eslesen: _OL aT_)
    > ...[[s. 102]] • ZAMİR • ZARF • SONTAKI • BAĞLAÇ • EDAT [s. 103] İSİM İsim Çekim Ekleri Çokluk (Topluluk) Ekleri Orhun Türkçesinde yalın durumda bir isim hem tekil hem çoğul anlamda kullanılır: külüg er O Ek 6 “ünlü adam” ~ öŋreki er T 25 “öncü askerler” ol at anta ölti KT D33 “o at orada öldü” ~ at yete T 25 “atları yederek” Bununla birlikte Orhun Türkçesinde çokluk (topluluk) ekleri de vardır: +lAr, +gUn, +An, +(X)t a. +lAr: Orhun Türkçesinde kişi ve akrabalık isimlerinde görülür. [[s. 103]] ög+ler+im KT K9 ‘(üve...


## KT-D-33#4 - Kül Tigin Yazıtı, Doğu 33. satir  (6 kelime)

- **transkripsiyon:** `YaRıKINDA : YaLMaSINDA : YÜZ : aRTUK : OKUN : URTI`
- **kelime karsiliklari:** KALKANINA : YALMASINA : YÜZ : ARTI : OK : VURDU
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YÜZ aRTUK OKUN URTI_)
    > ...İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti. O at (da) orada öldü. [[s. 25]] Üçüncü olarak Yeğen Siliğ Bey'in giyimli doru atına binip hücum etti. O at (da) orada öldü. (Kül Tigin'i) zırhından (ve) [s. 26] 48 KÜLTİGİN YAZITI rıkınta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı...
  - `Tekin 2003, s. 131` (eslesen: _YÜZ aRTUK OKUN URTI_)
    > ...lg[är]ü täzip bardı* "Uygur valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) 2. Yaklaşıklık sayıları sözdizimi yolu ile de ifade edilir: *korıgu eki üç kişiligü täzip bardı* "Kale muhafızı (?) iki üç kişi ile kaçıp gitti" (BK D 41) *yarıkınta yalmasınta yüz artuk okun urtı* "(Prens Kül'ü) zırhından ve kaftanından yüzden fazla ok ile vurdular (KT D 33) ## Sıra Sayıları **286.** Sıra sayıları şunlardır: *ilki* "birinci" (< *il+ki*), *äŋ ilk ~ äŋ ilki, ekin ~ ekinti* "ikinci", *üçünç* "üçüncü", *törtünç* "dördüncü", *bişinç* "be...
  - `Tanyeri, s. 20` (eslesen: _YÜZ aRTUK_)
    > ...üzlük ve binlik sayılar, günümüzdeki gibidir. “Biş yüz” sayısı, bugünkü “beş yüz” sayısıyla aynıdır. Aynı şekilde “üç bin” sayısı da günümüzdeki gibidir. Şimdi öğrenmeyi pekiştirmek için birkaç örnek verelim: bir toksan [81]; otuz artukı eki [32]; altı yüz artukı tört kırk [634]; üç bin yiti yüz artukı biş yigirmi [3715]; tört yüz artukı sekiz elli [448] Sayfa: 19 [s. 21] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com Göktürk Alfabesinin Kök...
  - `Tekin 1998, s. 15` (eslesen: _aRTUK_)
    > ...sÜügs (süfiğüş) “savaş”, rms (ermiş) “imiş”, BRms (barmış) “varmış, gitmiş” vb. gibi. 10. [[s. 15]] Sözcükteki /ok, uk/ ses öbekleri genellikle oK işareti ile, /ök, ük/ ses öbekleri de ök işareti ile gösterilir: OKUN (okun) “ok ile”, ToKz (tokuz) “9”, RToK (artuk) “fazla”, ökÜn- (ökün-) “pişman olmak”, tÜrök (türük) “türk” vb. Bu işaretler söz içindeki /ko, ku/ ve /kö, kü/ ses öbeklerini göstermek için de kullanılabilir. 11. [[s. 15]] ©K işareti U harfinden sonra kullanılmışsa bu o ORHON YAZITLARI 27 sözcükteki /o0...
  - `Tekin 2003, s. 24` (eslesen: _aRTUK_)
    > ...rçeğinden kaynaklanır: - /T/ *at* “at” (KT D 33) - /K/ *ak* “ak, kır” (KT D 36) - /b/ *äb* “ev, çadır” (BK D 32) - /r/ *är* “adam” (KT D 12) - /DK/ *ad-ak*, yani *adak* “ayak” (KT K 7) - /LTUN/ *al-tun*, yani *altun* “altın” (BK G 11) - /RTUK/ *ar-tuk*, yani *artuk* “çok, pek çok” (KÇ D 13) - /dgÜ/ *äd-gü*, yani *ädgü* “iyi” (BK G 12) - /rn/ *är-än*, yani *ärän* “adamlar” (KT K 9, BK G 11) [s. 25] # s. 025 — ORHON TÜRKÇESİ GRAMERİ /mgk/ *äm-g-äk*, yani *ämgäk* “acı, ıstırap” (KT D 19) **5.** Sözbaşı uzun /ā/ ünlüsü K...
  - `Ata 2011, s. 114` (eslesen: _aRTUK_)
    > ...‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi...


## KT-D-33#5 - Kül Tigin Yazıtı, Doğu 33. satir  (4 kelime)

- **transkripsiyon:** `YİZiŊE : BaŞIŊA : BİR : TeGiRMedİ`
- **kelime karsiliklari:** YÜZÜNE : BAŞINA : BİR[İNİ] : DEĞİRMEDİ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _BaŞIŊA BİR_)
    > ...ip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bayırku'ların Ulu İrkin'i (bize) düşman oldu. Onu dağıtıp Türgi Yargun gölde bozguna uğrattık. Ulu İrkin azıcık er...
  - `Ergin 1970, s. 18` (eslesen: _BaŞIŊA BİR_)
    > ...atına binip hücum etti. O at orda | Öldü. İkinci olarak İşbara Yamtarın boz atına binip hücum etti. O at orda öldü. Üçüncü olarak Yigen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz. O orduyu orda yok ettik. Ondan sonra Yir Bayırkunun Uluğ Irkini düşman O R H U N Â B İ D E L E R İ [s. 19] M U H A R R E M E R G İ N oldu. Onu dagıtıpp Türgı Yargun Gölünde bozduk. Uluğ...
  - `Tekin 2003, s. 130` (eslesen: _BaŞIŊA BİR_)
    > ...aşayur ärti* "Prens Kül (o zaman) otuz bir yaşında idi" (KT K 2) *ulug küli çor säkiz on yaşap yok boltı* "Büyük Küli Çor seksen (yıl) yaşayıp yok oldu" (KÇ B 3) *bir todsar āçsık ömäz sän* "bir (de) doyarsan (yine) acıkacağını düşünmezsin" (KT G 8) *yüz[iŋä] başıŋa bir t[ägmädi]* "(Prens Külün) yüzüne ve başına bir (ok bile) d[eğmedi]" (KT D 33) *kamagı biş otuz sülädimiz, üç yegirmi süŋüşdümüz* "Toplam yirmi beş (kez) sefer ettik, on üç (kez) savaştık" (KT D 8), vb. 4. Bir cümlenin yüklem adı olarak: *biz eki bıŋ ärtimiz*...
  - `Roux, Eski Din, s. 126` (eslesen: _BaŞIŊA BİR_)
    > ...ve yıldızları büyük bir tutkuyla sevdik lerini" belirtmektedir (H.21, s. 99). [[s. 126]] Özellikle güneş ve ay önemli bir rol oynamakta ve dolayısıyla en çok bunların adı anılmaktadır; bunlardan birincisinin ikincisi üzerinde açık bir üstünlüğü vardır; Ay tek başına bir kült unsuru olarak belirtilmez ve güneş sık sık böyle anılmakta dır. Aydan ancak zaman zaman güneşle bir arada söz edilir; Hiung-nularda (1.17, s. 60; 1.14, s. 76-77), Tabgaçlarda (1.35, 2, s. 1368) ve Piano dei Carpini'ye göre, özellikle Cengiz Han dönemi Mo...
  - `Roux, Eski Turk Mitolojisi, s. 50` (eslesen: _BaŞIŊA BİR_)
    > ...su olan Mantıkdan çok daha başka bir şeydir. Eğer -»Hayvanların belli birtakım davranış biçimleri insanları belli bir doğrultuda hareket etmeye sevk ediyorsa, Mantığın smırındayız demektir. Lider hayvan konusu ile Oğuzname'de karşılaşmaktayız; ordunun başına bir —»Kurt geçmiş ve yol göstermektedir. Uygurlarda da durum pek farklı değildir, zira —»Atların kişnemesi, —»Köpeklerin havlaması, yırücı hayvanların uluması, sürülerin böğürmesi, kuşların şakıması ve çocukların ağlamasına kulak verip, bundan yollarına d...
  - `Ogel C1, s. 51` (eslesen: _BaŞIŊA BİR_)
    > ...Kurtla ilgili Türk efsanelerini bundan önceki bölümümüzde incelemiştik. Kurt, belki de çok eski çağlarda Türklerin bir Totem'i idi. [[s. 51]] Fakat Göktürk çağında kurt, bir totemden ziyade kutsal bir sembol haline girmişti, Göktürklerin kendi bayraklarının başına bir kurt heykeli koymalarının sebebi de bu idi. Kurt başlı sancaklar, Göktürk devletinin yıkılışından sonra da ununtulmamış ve Çin İmparatorları, mesela Türgeş'ler gibi Türk kavimlerine Kağanlık ünvanları verecekleri zaman, kurt başlı bir bayrakla bir davul verme...


## KT-D-34#1 - Kül Tigin Yazıtı, Doğu 34. satir  (10 kelime)

- **transkripsiyon:** `TeKDÜKİN : TÜRK : BeGLeR : KOP : BİLİRSİZ : OL : SÜG : aNDA : YOK : KıŞDıMıZ`
- **kelime karsiliklari:** DEĞDİK[LERİMİZİ] : TÜRK : BEĞLERİ : HEP : BİLİRSİNİZ : O : SÜYÜ : [O] ANDA : YOK : KILDIK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _BeGLeR KOP_)
    > ...25]] Üçüncü olarak Yeğen Siliğ Bey'in giyimli doru atına binip hücum etti. O at (da) orada öldü. (Kül Tigin'i) zırhından (ve) [s. 26] 48 KÜLTİGİN YAZITI rıkınta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğme...
  - `Ata 2011, s. 120` (eslesen: _BeGLeR KOP_)
    > ...e kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T 36 SONTAKI İsim, isim soylu sözler ve sıfat-fiilerden sonra gelerek bağlı olduğu bu türden sözler ile cümlenin öteki öğeleri arasında zaman, mekân, yön, tarz, benzerlik, başkalık vb. gibi ba...
  - `Tekin 1998, s. 25` (eslesen: _OL SÜG_)
    > ...ı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip t...
  - `Tekin 2003, s. 141` (eslesen: _OL SÜG_)
    > ...tokıtdım* "Otağ(ımı) burada kurdurtdum, ordugah çitlerini (de) burada vurdurttum" (Tar. B 2) **316.** *anta* "orada, o yerde" (bk. **Gösterme Zamirleri**): *anta ańıg kişi ança boşgurur ärmiş* "Orada kötü (niyetli) kişiler şöyle akıl verirler imiş" (KT G 7) *ol süg anta yok kışdımız* "O orduyu orda yok ettik" (KT D 32) *üküş öltäçi anta tirilti* "(Aksi halde) ölecek olan birçok kişi orada hayatta kaldı" (BK D 31) *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *alpi ärdämi anta kükdi* "Onun yiğitliği ve...
  - `Ata 2011, s. 119` (eslesen: _OL SÜG_)
    > ...’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın...
  - `Ata 2011, s. 113` (eslesen: _BeGLeR KOP_)
    > ...geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T SONTAKI İsim, isim soylu sözler ve sıfat-fiilerden sonra gelerek bağlı olduğu bu türden sözler ile cümlenin öteki öğeleri arasında zaman, mekân, yön, tarz, benzerlik, başkalık vb. gibi bakımlardan çeşit...


## KT-D-34#2 - Kül Tigin Yazıtı, Doğu 34. satir  (8 kelime)

- **transkripsiyon:** `aNDA : KİSRE : YeR : BaYıRKU : ULuG : İRKiN : YaGI : BOLDI`
- **kelime karsiliklari:** ONDAN : SONRA : YER : BAYIRKULU : ULU : İRKİN : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _ULuG İRKiN YaGI_)
    > ...O at (da) orada öldü. (Kül Tigin'i) zırhından (ve) [s. 26] 48 KÜLTİGİN YAZITI rıkınta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa y...
  - `Olmez 2017, s. 85` (eslesen: _YeR BaYıRKU_)
    > ...ir kapığka** < *kapığ+ka* "Temir Kapığ'a" - temir kapığ: isim tamlaması - +ka: yaklaşma/ bulunma durumu eki **tegı** < *teg-i* "kadar" - teg-: fiil tabanı - -i: zarfiil eki; kalıplaşıp edat yapmıştır **yır bayırku yėrige** < *yėr+i+ŋe* "sefer ettim. Kuzeyde Yėr Bayırkuların topraklarına" - yėr: isim tabanı - +i: teklik üçüncü kişi iyelik eki - +ŋe: üçüncü kişi iyelik ekinden sonra gelen yaklaşma/ bulunma durumu eki **boŋça** < *bo+n+ça* "bunca, bu kadar" - bo: isim tabanı - +n: zamir n'si - +ça: eşitlik durumu eki **yėrke...
  - `Ergin 1970, s. 18` (eslesen: _ULuG İRKiN_)
    > ...gen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz. O orduyu orda yok ettik. Ondan sonra Yir Bayırkunun Uluğ Irkini düşman O R H U N Â B İ D E L E R İ [s. 19] M U H A R R E M E R G İ N oldu. Onu dagıtıpp Türgı Yargun Gölünde bozduk. Uluğ İrkin azıcık erle kaçıp gitti. Kül Tigin yirmi altı | yaşında iken Kırgıza doğru ordu sevk ettik. Mızrak batımı karı söküp, Kögmen...
  - `Tekin 2003, s. 117` (eslesen: _ULuG İRKiN_)
    > ...n açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) *kugu kuş kanatıŋa urup an+ın kalıyu barıpan ögiŋä kaŋıŋa tägürm...
  - `Ogel C2, s. 271` (eslesen: _YeR BaYıRKU_)
    > ...mez ar için, “yerçü'” demeleri de, önemlidir". “yere batmak”, yere bat!” sözlerimiz de, hep ölümle ilgili idiler?. Ye r, yurt ve vatan anlamında: A It a yTürkleri, R u s ya için, “Orus yeri”; Çin içinde, “Kıtay yeri” derler. Gök - Tür k yazıtlarında, “Ötügen yer”? “Bayırku yeri”; “Birleşik Türk milletinin yerinde (Türk Sir budun yerinde)”, “Devleti idare edecek yer (İl tutsık yer)” gibi, anlayış ve deyişleri görüyoruz. 11. [[s. 271]] yüzyılda hemşeri ve yurtta ş için, “yerdeş” deniliyordu”. Yani, aynı yeri paylaşanlar. Mevki v...
  - `Tekin 1998, s. 6` (eslesen: _BaYıRKU_)
    > ...ülemez. Bunun en güçlü kanıtları da yazıtlardır, onların [s. 6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur...
