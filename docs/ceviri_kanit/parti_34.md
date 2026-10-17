# Ceviri istek paketi 34 - Orhun cumlecikleri

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


## TY1-D-6#4 - Tonyukuk Yazıtı, Doğu 6. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : YiRÇİ : TiLeDiM`
- **kelime karsiliklari:** --- : YERCİ : DİLEDİM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TiLeDiM_)
    > ...e tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Term...
  - `Roux, Eski Din, s. 64` (eslesen: _YiRÇİ_)
    > ...[s. 64]] Kabile reisi veya hükümdarlarla anlaşmazlığa düştüğünde kendi etkisinden yararlanabilir, ancak hiçbir şekilde görünmez gücüne başvurmaz; ona karşı koyacak herhangi bir gücü yokmuşçasına ve hayatını kaybetmek pahasına maddi gücün kendisini yenmesine seyirci kalır.,Bazen günümüzde, Baykal Gölü çevresindeki Buryatlarda görüldüğü gibi, Şamanların biri beyaz ve iyiliksever, diğeri kara ve kendini şeytanlara adamış, [[s. 64]] ancak kötülük etmek için hareket eden kişi şeklinde iki sınıfa ayrılması gerçek Şa manizmi a...
  - `Roux, Altay Turklerinde Olum, s. 61` (eslesen: _YiRÇİ_)
    > ...eden J. G. Georgi bize bu konuda mükemmel bir örnek sunmuştur. [[s. 61]] Eğer bir insan hasta olmuşsa, bu vücuduna bir tırtıl girmiş demektir ve bunu yalnızca şaman dışarı çıkartabilir. Bunu başardığında da, bunu gerçekleştiren şaman tırtılı avucuna alır ve seyircilere gösterirdi.'** Yaşamın uzaması için Tanrı'ya duyulan inançla tıbbı tedavi ve şaman tedavisi arasında kesin bir hiyerarşi kurmak imkânsızdır. Başka bir konuda, ilahi iradenin büyüden daha güçlü olduğunu ortaya koydum. [[s. 61]] Gerçekten de, Moğolların Gi...
  - `Ogel C2, s. 110` (eslesen: _TiLeDiM_)
    > ...dan, yardım dileme: '“.. [[s. 110]] Çiftçilere (Dihkançıga) Pt r olan, hazreti Hızır -Ata'dır. Sizden medet tileymen! Derdige deva tileymen?*!...” 4) İdege-Bey'inHızır (Kısır )”'dan yardım dilenmesi: ““.. Gözümün yaşı kurumuyor (kurgamaz) Hızır (Kısır) medet tiledim!...” Bu Toktamış Han hikâyesi çok orijinal ve gerçekcidir. Atı için, “* Sura k'a okşamış bineğim', diyordu”. ““Hızı r (Kısır)'dan medet umdum!” Yine aynı kültür çevresine ait M uradım böyle diyordu. [[s. 110]] 5) Er-Korkut, (Dede Korkut)'tan yardım dilenme:...
  - `Ogel C2, s. 205` (eslesen: _YiRÇİ_)
    > ...ermiş. Yer de, ay ile güneşi, yerin dibinde gizlemiş. **“Tanr 1, bu durumu gökten görmüş, Tanrı,ayilegüneşi,yerin sahibinden istemiş ve böylece onları kurtarıp, gökte tutmuş...*” İran mitolojisine benzer bir anlayıştır. Ancak, çok daha geridir. Tanrı, bir seyirci ve ricacı durumundadır. [[s. 205]] Bundan da anlaşılıyor kikUlu Tan - rı anlayışı, hu geri Kuzey - doğu kavimlerine, sonradan girmişti. Güneş ,“sıcaklık” a y da, “soğukluk” sembolü: A |t a y Türklerinde güneş, yaygın olarak sıcağın; ay da soğuğun, sembolleri...
  - `Kafesoglu, s. 156` (eslesen: _YiRÇİ_)
    > ...10 (M. VVeber, ayn. esr., 'den); ayrıca Liu, ayn. esr., I, s. 44,98; W. Eberhard, Çin'in Şimal Komşuları, s. 86. [[s. 156]] 321 Meselâ, Çin yıllıklarına geçen tipik bir örnek; Hun tanhusu He-hen Po po (M. 424) veliahd ol mak isteyen iki oğlunun mücadelesine seyirci kalmıştı (A. Onat, ayn. esr., s. 120). 322 De Groot, ayn. esr., s. 153, 187, 200; kitabeler II, doğu, 14. Ayrıca, beceriksiz evlât yerine "cesur ve plânlı" hareket etmesini bilen amca tahta geçerdi (bk. Liu, ayn. esr., s. 55). 123 O. N. Tuna, Orhon Yazıtların...


## TY1-D-6#5 - Tonyukuk Yazıtı, Doğu 6. satir  (4 kelime)

- **transkripsiyon:** `ÇÖLüG : İZ : eRİ : BULTuM`
- **kelime karsiliklari:** ÇÖLGİ : İZ : ERİ : BULDUM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _eRİ BULTuM_)
    > ...ş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Termel keçe uğur kalıtdım...
  - `Ogel C1, s. 67` (eslesen: _İZ eRİ_)
    > ...ma, etrafta ne ailesini ve ne de bir yakınını bulabilmiş. Yalnız başına düşmüş yollara. Başı boş dolaşırken, yolu bir yurda düşmüş. Bu yurt da kalabalık ve büyük bir yurtmuş. Yurdun içinden birisi çıkmış ve bu kızla evlenmiş. Kızı almış götürmüş kendi evine. Kız erinin evine gidince, gebe olduğu anlaşılmış. Herkeste bir telaştır başlamış. Kıza kiminle evli olduğunu ve kimden gebe kaldığını sormuşlar. [[s. 67]] Kız da, şimdiye kadar evlenmediğini ve hiç bir erkek yüzü de görmediğini ısrarla söylemiş. Sonra da başından geç...
  - `Kafesoglu, s. 203` (eslesen: _İZ eRİ_)
    > ...İslâm Doğu'nun seçkin idare, edebiyat ve ilim adamlannı yetiştiren zengin kültür merkezî Horasan, saydığımız bu özellikleri yüzünden, civar devletler arasında (Kara-HarüYlar, Sâmânîler, Gazneliler) şiddetli rekabet mevzuu olmakta ve Selçuklular için de şüphesiz erişilmesi gerekli ana hedef sayılmakta idi. [[s. 203]] Bunu teşvik eden diğer bir husus da, Horasan ahalisinin kısmen Türk oluşu idi. Selçuklulardan önce de burada Türkler yaşamakta idiler. Esasen tanınmış Arap yazan elCâhiz (ölm. 869) ile el-Birûnî(ölm. 1051)'n...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 91` (eslesen: _İZ eRİ_)
    > ...kturdı: "553025 3 ol kuşuğ kazka çokturdı s o, doğan kuşunu kazın üzerine indirtti, sağdırttı, saldırttı", Baş- — DA çok- kası da böyledir; (3l turur - gokturmak) s3ö; çıkturdı: "534 E ab y dı > o, onu evden çıkarttı", diği çıkturur - Ri Kk). sax çıkturdız ERİ ol torın elbisesini ıslattı", (o, slbissaini 18- lak yere koydu, elbine ıslandı) (- - çıkturmak). öz çakt Lİ anğar çekik çektürdiz o, ona kitabı noktalattı, "5,752. [[y. 91]] ol atın çektürdi - o, atından-tırn hastalığı ve başka hastalık dolayısiy- 1e-...
  - `Kafesoglu, s. 61` (eslesen: _ÇÖLüG_)
    > ...lığın genişliği doğudan batıya 10 bin "İi" ve kuzeyden güneye 5-6 bin "ü" idi (bk. Liu, ayn. esr., I, s. 8) ki, 10.5 milyon km" civarındadır. 231 Kitabeler, I, doğu, str. 2-3. 282 Çin, Tibet, Apar=Avar (Avrupa Avarlan). [[s. 61]] Apurım (Porom), Kırgız, Bokli-çölüg ü (Batı Kore?, bk. R. Giraud, L'Empire des Turcs, s. 186 vd., Bükli-çöl=Kore. bk. K Czegledy, Ğogay-quzı...» s. 65 vd.), Üç Kunkan, Otuz-tatar, Kitan, Tatabı kavimleri; bk. Kitabeler, l, doğu, str. 4, II, doğu, str. 5. 30 Bk. B.Ögel, Gök-Türk Yazıtlarının Apu...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 20` (eslesen: _ÇÖLüG_)
    > ...sağlamı çürük olduğu bir zamanda Tanrı, Cebrail'i açık anlatış ve her yönünü bildiriş ile Muhammed'e - içerisinde haramı, he1lâli anlatan - Kur'an'ı gönderdi; böylelikle öz yolu belli ettiş belge ve kılavuz Koydu. Tanrının yarlığaması onun ve onun yararlıklı çoluğu çocuğu Üzerine olsun; büyük esenlikler versin. [[y. 20]] İmdi, bundan sonra Wuhammed oğlu Hüseyn, Hüseyn oğlu Mahmud der Xi : "Tanrının devlet güneşini Türk burçlarında doğdurmuş olduğunu ve onların milkleri üzerinde göklerin bütün teğrelerini döndürmüş bul...


## TY1-D-7#1 - Tonyukuk Yazıtı, Doğu 7. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÖZüM : aZ : YiRiM : aNI : BELiM : --- : eRMiŞ`
- **kelime karsiliklari:** ÖZÜM : AZ : YERİM : ONU : BESLERİM : --- : İMİŞ
- **kanit:**
  - `Tekin 2003, s. 229` (eslesen: _BELiM_)
    > ...ä! Altmış yaşımda <adrıltım>. 2. Atım El Togan; Totok bän. Täŋri elimkä elçisi ärtim. Altı bag bodunka bägi ärtim. ## Uyuk-Turan (Malov E 3) 1. Kuyda kunçuyum, özdä oglum, yıta, äsizim ä, bökmädim, adrıltım! Kinim kadaşım, yıta, adrıltım! 2. Altunlig keşig belimtä bantım. Täŋri elimkä bökmädim. Äsizim ä! Yıta! 3. Öçin Külüg Tirig bän. Täŋri elimtä yämlig bän. 4. Üç yetmiş yaşımka adrıltım. Ägük Katun yerimkä adrıltım... 5. Täŋri elimkä kazgakım: Oglum, öz oglum, altı biŋ yuntum... 6. Kanım Tölböri, kara bodun, külüg...
  - `Tekin 1998, s. 9` (eslesen: _eRMiŞ_)
    > ...larda konuşan ve olayları anlatan kişi Bilge Kağan'ın kendisi olduğuna göre [s. 9] 14 GİRİŞ bunların yazarı da o olmalıdır. Büyük bir olasılıkla, Bilge Kağan yazıtların metnini önceden hazırlamış, sonra da bunları taşlar üzerine yazması için Yolluğ Tigin'e vermiştir. Tunyukuk yazıtına gelince bu yazıtta olaylar Bilge Tunyukuk'un ağzından anlatıldığına göre metnin yazarı kendisidir. Yazıcının kim olduğu ise yazıtta belirtilmemiştir. 4. [[s. 9]] Yazıtların İçeriği Orhon yazıtları İkinci Doğu Türk Kağanlığı'nın birinc...
  - `Ergin 1970, s. 14` (eslesen: _eRMiŞ_)
    > .......dım. [[s. 14]] Bu yazıyı yazan yeğeni Yollug Tigin. Doğu cephesi Üstte mavi gök, altta yağız yer kılındıkta, ikisi arasında insan oğlu kılınmış, insan oğlunun üzerine ecdadım Bumin Kağan, İstemi Kağan oturmuş. Oturarak Türk milletinin ilini töresini tutu vermiş, düzenleyi vermiş. | Dört taraf hep düşman imiş. Ordu sevk ederek dört taraftaki milleti hep almış, hep tâbi kılmış. Başlıya baş eğdirmiş, dizliye diz çöktürmüş. Doğuda Kadırkan ormanına kadar, batıda Demir Kapıya kadar kondurmuş. [[s. 14]] İkisi arasında pek...
  - `Tekin 2003, s. 18` (eslesen: _eRMiŞ_)
    > ...ürlü adlar verilmiştir. W. Radloff Orhon yazıtları dilini baştan beri “Eski Türkçe” (*Alttürkisch*) olarak adlandırmıştır. W. Bang ise “Bilge Han, halkı için birçok yerde *kök Türk* deyimini kullanıyor” gerekçesiyle bu dile “Kök Türkçe” (*Köktürkisch*) adını vermiştir (bk. *Über die köktürkische Inschrift auf der Südseite des Kül-Tägin-Denkmals*, Leipzig 1896, Vorwort). Ne var ki *kök Türk*, daha doğrusu *kök Türük* adı yazıtlarda birçok kez değil, ancak bir kez geçmektedir (KT D 3 = BK D 4). Belki de bu nedenle Radloff...
  - `Ata 2011, s. 3` (eslesen: _eRMiŞ_)
    > ...reserved No part of this book may be reproduced or stored in a retrieval system, or transmitted in any form or by any means mechanical, electronic, photocopy, magnetic, tape or otherwise, without permission in writing from the University. UZAKTAN ÖĞRETİM TASARIM BİRİMİ Genel Koordinatör Prof.Dr. Levend Kılıç...
  - `Olmez 2017, s. 18` (eslesen: _eRMiŞ_)
    > ...12. | Él Kagan | 621-630 (10 yıl) | bk. Taşağıl 1995: 185 630-682 yılları arasına denk gelen Çin hakimiyeti dönemi A. Taşağıl'ın çalışmasından, konuyla ilgili ikinci çalışmasından okunabilir. Taşağıl bu dönemi ele alan kitabına "Fetret Devri" alt başlığını vermiştir (Taşağıl 1999). *(Fotoğraf: Batı Türk Kağanlığı tarihini yazan Edouard Chavannes)* [s. 19] # s. 017 — Köktürkçe Dersleri (basılı sayfa numarası 19) > **EDOUARD CHAVANNES — 137** > > **Sie-yen-t'olarla ilgili notlardan özetler** > > ***T'ang-şu*, CCXVI...


## TY1-D-7#2 - Tonyukuk Yazıtı, Doğu 7. satir  (4 kelime)

- **transkripsiyon:** `BİR : aT : ORUKI : eRMiŞ`
- **kelime karsiliklari:** BİR : AT : ORUĞU : [VAR]İMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _BİR aT ORUKI eRMiŞ_)
    > ...sıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Termel keçe uğur kalıtdım. ORHON YAZITLARI 87 (G 10) (Türk hakanını), Türk halkını Ötüken toprağı...
  - `Tekin 1998, s. 12` (eslesen: _BİR aT_)
    > ...ık ömez sen “Ey Türk halkı, sen (çok) tok gözlüsün; acıkacağını doyacağını düşünmezsin; bir doyarsan (bir daha) acıkacağını düşünmezsin' (KT G 8). Bu cümle âç tosık ömez, tok âçsık ömez “Aç doyacağını düşünmez (sanmaz), tok acıkacağını düşünmez (sanmaz)” gibi bir atasözü üzerine kurulmuş olmalıdır. [[s. 12]] Toruk bükalı semiz bükalı ırakda bilser, semiz büka toruk buka teyin bilmez ermiş “(İnsan) zayıf boğalarla semiz boğaları uzaktan bilmek zorunda kalsa (hangilerinin) semiz (hangilerinin) zayıf olduğunu bilmez imiş”...
  - `Ergin 1970, s. 39` (eslesen: _BİR aT_)
    > ...9] düşündüm. | İlk olarak Kırgıza ordu sevk etsek iyi olur dedim. Kögmenin yolu bir imiş. Kapanmış diye işitip, bu yol ile yürürsek uygun olmayacak dedim. Kılavuz aradım. Çöllü Az kavminden bir er buldum. İşittim: Az ülkesinin yolu Anı boyunca.......... imiş, bir at yolu imiş, onunla gitmiş. Ona söyleyip, bir atlı gitmiş diye o yolla yürürsek mümkün olacak dedim. Düşündüm, kağanıma Kuzey cephesi arz ettim. Asker yürüttüm. Attan aşağı dedim. Ak Termili geçip sırtlattım. [[s. 39]] At üzerine bindirip karı söktüm. Yukarıya,...
  - `Tekin 2003, s. 105` (eslesen: _BİR aT_)
    > ...rum **254.** Yalın durum eksizdir, gövde ile bir ve aynıdır. Bir adın yalın durumu şu görevlerde bulunur: 1. Bir cümleciğin ya da cümlenin öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda b...
  - `Ata 2011, s. 20` (eslesen: _BİR aT_)
    > ...Altay Dil Birliğini Kabul Etmeyenler ve Bu Konuda Çekimser Kalanlar Altay dil birliği teorisine karşı olanlar; yani Türk, Moğol, Tunguz (belki Kore ve Japon) dillerinin ortak bir atadan geldiği görüşüne karşı olanlar da vardır. Bu teoriye karşı çıkanlar arasında başı çeken türkologlar İngiliz Sir Gerard Clauson (1891-1974), Alman Gerhard Doerfer (1920-2003) ve Rus...
  - `Roux, Eski Din, s. 20` (eslesen: _BİR aT_)
    > ...ılamaz olduğundan, bu dinle ilgili çok sayıdaki inceleme arasından, bu konuda Moğolca yazılmış tek temel belge olan Gizli Tarih'e geniş çapta dayandım. Henüz fazla incelenmemiş bir alanda ilk veya hemen hemen ilk olmanın baş döndürücü etkisinin yam sıra böyle bir atılım aynı zamanda da korkutucuydu. Baş [s. 21] döndürücü etkiyi hissetmemeye ve bu korkuyu yatıştırmaya çaba gösterdim. Bu araş tırmanın amacı uzun ömürlü olmak değil, gelecekteki araştırmalar için başlangıçlar oluşturmaktır. Yazarın dileği, bu kitaptan sonra...


## TY1-D-7#3 - Tonyukuk Yazıtı, Doğu 7. satir  (7 kelime)

- **transkripsiyon:** `aNIN : BaRMıŞ : AŊAR : aYTıP : BİR : aTLıG : BaRMıŞ`
- **kelime karsiliklari:** ONUN [İLE] : VARMIŞ [GİTMİŞ] : ONA : AYTIP : BİR : ATLI : VARMIŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _aYTıP BİR aTLıG BaRMıŞ_)
    > ...Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Termel keçe uğur kalıtdım. ORHON YAZITLARI 87 (G 10) (Türk hakanını), Türk halkını Ötüken toprağına ben kendim, Bilge Tunyukuk, (getirdim). (Türk halkı...
  - `Tekin 2003, s. 105` (eslesen: _BİR aTLıG BaRMıŞ_)
    > ...rum **254.** Yalın durum eksizdir, gövde ile bir ve aynıdır. Bir adın yalın durumu şu görevlerde bulunur: 1. Bir cümleciğin ya da cümlenin öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...*...
  - `Tekin 2003, s. 123` (eslesen: _aNIN BaRMıŞ_)
    > ...-Çıkma durumu: Bk. **Yer Zarfları**. 5. Yönelme durumu: *aŋaru sülämäsär kaçan (n)äŋ ärsär ol bizni... ölürtäçi-k-ök* "Ona karşı bir sefer düzenlemez isek, ne zaman olsa o bizi... öldürecektir" (T 20-21) 6. Eşitlik durumu: Bk. **Zarflar**. 7. Araç durumu: *anın barmiş* "O (yol) ile gitmiş" (T 2) *kugu kuş kanatıŋa urup anın kalıyu barıpan ögiŋä kaŋıŋa tägürmiş* "Kuğu kuşu, (adamı) kanatlarına vurup onunla birlikte havalanıp gitmiş ve (onu) anasına babasına iletmiş" (IB 35) ## Pekiştirme-Dönüşlülük Zamirleri **273.** Peki...
  - `Tekin 1998, s. 15` (eslesen: _BaRMıŞ_)
    > .../s/ ünsüzünü göstermek için kullanılan ince /s/ işareti aynı zamanda ön ünlülü sözcüklerdeki ve -mış/-miş ekindeki /ş/ ünsüzünü göstermek için de kullanılır: kIsI (kişi), bIs (biş) “5”, kÜms (kümüş) “gümüş”, sÜügs (süfiğüş) “savaş”, rms (ermiş) “imiş”, BRms (barmış) “varmış, gitmiş” vb. gibi. 10. [[s. 15]] Sözcükteki /ok, uk/ ses öbekleri genellikle oK işareti ile, /ök, ük/ ses öbekleri de ök işareti ile gösterilir: OKUN (okun) “ok ile”, ToKz (tokuz) “9”, RToK (artuk) “fazla”, ökÜn- (ökün-) “pişman olmak”, tÜrök (türük...
  - `Tekin 2003, s. 60` (eslesen: _BaRMıŞ_)
    > ...ın* "adımı" (Tar. D 4) < *ātimin vb. 3. Orhon yazıtlarında genellikle uyuma girmediği yazımdan anlaşılan /-miş/ ekinin Uygur yazıtlarında uyuma girme eğiliminde olduğunu gösteren az sayıda örnekler de vardır: - /BRmS/ *barm(ı)ş* "varmış, gitmiş" (MÇ G 37) < *barmiş* - /BSmS/ *basm(ı)ş* "baskın yapmış" (MÇ D 12) < *basmiş* - /BULmS/ *bolm(ı)ş* "olmuş" (Tar. B 1) < *bolmiş*, vb. ## Uzak Benzeşme **92.** İki sözcük arasında gerçekleşen ilerleyici ünlü benzeşmeleri aşağıdaki örneklerde görülür: 1. *antag* "öyle, onun gib...
  - `Ata 2011, s. 121` (eslesen: _BaRMıŞ_)
    > ...umu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körü...


## TY1-D-7#4 - Tonyukuk Yazıtı, Doğu 7. satir  (8 kelime)

- **transkripsiyon:** `TiYiN : OL : YOLuN : YORISaR : UNÇ : TiDiM : SaKıNDıM : KaGaNıMA`
- **kelime karsiliklari:** DİYE : O : YOLU : YORSAK : İYİDİR : DEDİM : SAKINDIM : KAĞANIMA
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _OL YOLuN YORISaR UNÇ_)
    > ...tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Termel keçe uğur kalıtdım. ORHON YAZITLARI 87 (G 10) (Türk hakanını), Türk halkını Ötüken toprağına ben kendim, Bilge Tunyukuk, (getirdim). (Türk halkı) Ötüken toprağına yerleşmiş...
  - `Olmez 2017, s. 62` (eslesen: _OL YOLuN YORISaR UNÇ_)
    > ...); *yugur<ur>ça tédip 1 bar baş aşdımız yuvulu éntimiz* "güç bela ormanlık dağı aştık, yuvarlanarak aşağı indik." (T 26) **Şart Eki** **{-sAr} :** *ötüken yiş olorsar élte bun yok* "Ötüken topraklarında hüküm sürerse ülkede sıkıntı çıkmaz." (KT G 3); *ol yolun yorisar unç tédim* ""mümkünse sen de o yoldan git" diye emrettim" (T 24); *süŋüş bolsar çerig éter erti* "Savaş çıksa asker toplardı" (KÇ B 9) **Sıfatfiiller** Yazıtlarda görülen sıfatfiiller şunlardır (T. Tekin 2003: s. 165): **{-gUlUk}:** *uçuz yuyka kalın bolsa...
  - `Tekin 2003, s. 122` (eslesen: _YOLuN YORISaR_)
    > ...n Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädgüg ol ärinç* "Gittiğin yerlerde (tek) kazancın şu oldu:" (KT D 2) b) Gösterme sıfatı olarak: *bu süg elt tidi* "Bu orduyu sevk et dedi" (T 32) *bu yolun yorısar yaramaçı* "Bu yoldan gidersek yaramıyacak" (T 23) *bu türük bodun ara yarıklıg yagıg yältürmädim tügünlüg atıg yügürtmädim* "Bu Türk halkı arasına zırhlı düşmanları akın ettirmedim, (kuyrukları) düğümlü (düşman) atlarını (da) koşturtmadım" (T 5) *bu ırk bitig...
  - `Ata 2011, s. 135` (eslesen: _YOLuN YORISaR_)
    > ...Daha çok olumsuz eylem gövdelerine ulanan bu eke Köktürk harfli metinlerde seyrek rastlanır. Zamir kökenli kişi ekleri ile çekimlenir: teg-me-çi men “hücum etmeyeceğim” Ongin sağ 2 bu yolun yorısar yara-ma-çı “bu yol ile gidildiğinde yaramayacak (iyi olmayacak)” T 23 128 [s. 136] 2.4. Emir Kipi Çekimi Tablo 7. 7 1. tekil kişi -(A)yIn tüş-eyin ‘ineyim’ T 30, yoglat- Emir Kip...
  - `Olmez 2017, s. 56` (eslesen: _YOLuN YORISaR_)
    > ...ki kişi bar erser sini tavgaçıg ölörteçi tėr men* "O iki kişi (var olduğu sürece) olduğu sürece seni, (yani) Çinlileri öldürecektir, derim." (T 10); *ol yėrgerü barsar türük bodun ölteçi sen* "Oralara gidersen, Türk halkı mutlaka öleceksin." (KT G 8); *bo yolun yorısar yaramaçı tėdim* "bu geçitten geçmeye kalkarsak yararı olmayacak dedim." (T 23); Yüklemin iki ayrı fiil ve zaman ekiyle kurulduğu zaman şekilleri şunlardır (T. Tekin 2003: 190 $\to$ ve ötesi): **Sürekli geçmiş zaman (I): -(y)(X)r erti** *süyüş bolsar çerig...
  - `Ata 2011, s. 128` (eslesen: _YOLuN YORISaR_)
    > ...rk halkı, mutlak öleceksin! BK K5 2.3.3. [[s. 128]] -çI Ekli Gelecek Zaman Daha çok olumsuz eylem gövdelerine ulanan bu eke Köktürk harfli metinlerde seyrek rastlanır. Zamir kökenli kişi ekleri ile çekimlenir: teg-me-çi men “hücum etmeyeceğim” Ongin sağ 2 bu yolun yorısar yara-ma-çı “bu yol ile gidildiğinde yaramayacak (iyi olmayacak)” T 23 1. tekil kişi -DAçI men 2. tekil kişi -DAçI sen öl-teçi sen ‘öleceksin’ KT G8, bol-taçı sen ‘olacaksın’ BK K14 3. [[s. 128]] tekil kişi -DAçI te-deçi ‘diyecek’ T 35, ölür-teçi ‘öldürece...


## TY1-K-1#1 - Tonyukuk Yazıtı, Kuzey 1. satir  (3 kelime)

- **transkripsiyon:** `ÖTüNTüM : SÜ : YORıTDıM`
- **kelime karsiliklari:** ÖTÜNDÜM : SÜ : YÜRÜTTÜM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _ÖTüNTüM SÜ YORıTDıM_)
    > ...yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yorıtdım. “Atlat!” (tedJim. Ak Termel keçe uğur kalıtdım. ORHON YAZITLARI 87 (G 10) (Türk hakanını), Türk halkını Ötüken toprağına ben kendim, Bilge Tunyukuk, (getirdim). (Türk halkı) Ötüken toprağına yerleşmiş diye haber alıp güneydeki halklar, batıdaki, kuzeydeki...
  - `Tekin 1998, s. 19` (eslesen: _YORıTDıM_)
    > ...r ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Tü...
  - `Tekin 2003, s. 154` (eslesen: _YORıTDıM_)
    > ...şmek, ulaşmak"): *ilgärü kadırkan yışka tägi, kirü tämir kapıgka tägi konturmiş* "Doğuda Kingan dağlarına, batıda Demir Kapı'ya kadar kondurmuş" (KT D 2) *ilgärü şantuŋ yazıka tägi sülädim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3) *bunça yirkä tägi yorıtdım* "Bunca yere kadar (orduyu) yürüttüm" (KT G 4) *ilgärü yaşıl ügüz, şantuŋ yazıka tägi sülädimiz, kurgaru tämir kapıgka tägi sülädimiz* "Doğuda Sarı Irmak ve Şantung ovasına kadar, batıda Demir Kapı'ya kadar sefer ettik" (KT D 17) *yiliŋä kudursugıŋa tägi yagr...
  - `Ata 2011, s. 122` (eslesen: _YORıTDıM_)
    > ...kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm” KT G4 Bulunma-Çıkma Durumuyla Kullanılan Sontakılar (kisre, üze, ötrü) kisre: yagru kontuk+da kisre ańıg bilig anta öyür ermiş “yaklaşıp yerleştikten sonra kötülükleri o zaman düşünürmüş” KT G5...
  - `Olmez 2017, s. 21` (eslesen: _YORıTDıM_)
    > ...amını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet'e bir kez bile varmadım. Batıda Sır Derya'yı geçip Temir Kapıg'a kadar sefer ettim. Kuzeyde Yir Bayırkuların topraklarına kadar se...
  - `Tekin 1998, s. 44` (eslesen: _ÖTüNTüM_)
    > ...G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş...


## TY1-K-1#2 - Tonyukuk Yazıtı, Kuzey 1. satir  (3 kelime)

- **transkripsiyon:** `aT : aLT : TiDiM`
- **kelime karsiliklari:** AT[TAN] : ALT [İNİN] : DEDİM
- **kanit:**
  - `Tekin 2003, s. 164` (eslesen: _aT aLT_)
    > ...rmak"): *äsizim kı katlan bodunum ädgü kan* "Yazık! Heyhat! Çalış çabala (ey) halkım ve iyi Han!" (Bay Bulun I ön 2) **391.** *yıtu* "heyhat!" (krş. *yıta*): *inilig bört oça bars adrılm(a) yıtu* "(Ey) kardeşli yavru kurt ve küçük pars! (Bizden) ayrılma! Heyhat!" (Altınköl I ön 4) ## Ünlem görevinde adlar **392.** Yenisey yazıtlarında ünlem görevinde kullanılmış olan sözcükler şunlardır: *açıg, bagır, buŋ, köñig, okuz, yabız*. **393.** *açıg, açıg a* "ne acı!": *... yigit ärkän äsiz yıta açıg...* "Genç iken (öldü). Heyh...
  - `Ata 2011, s. 27` (eslesen: _aT aLT_)
    > ...en 1980-1981, Türk Dil Kurumu Yayınları, Ankara 1983, s.1-16. Ercilasun, Ahmet Bican, Türk Dili Tarihi, Akçağ, Ankara 2004. Eren, Hasan, Türklük Bilimi Sözlüğü. 1. Yabancı Türkologlar, Türk Dil Kurumu Yayınları, Ankara 1998. Tekin, Talat, “Altay Dilleri Teorisi”, Türk Dünyası El Kitabı, Türk Kültürünü Araştırma Enstitüsü Yayınları, Ankara 1978, s. 118-130. _______, Makaleler. 1- Altayistik, (Yayıma Hazırlayanlar: Emine Yılmaz, Nurettin Demir), Ankara 2003. Temir, Ahmet, “Tür...
  - `Olmez 2017, s. 19` (eslesen: _aT aLT_)
    > ...> **EDOUARD CHAVANNES — 137** > > **Sie-yen-t'olarla ilgili notlardan özetler** > > ***T'ang-şu*, CCXVII, *b*, s. 3 r°** > > Sie-yen-t'o (Sir-Tarduş)lar,¹⁹ önceleri Sie [Si] halkıyla kaynaşmış haldeydiler; daha sonraları Yen-t'o kabilesini mağlup ederek itaat altına aldılar ve böylece adları Sie-yen-t'o (Sir-Tarduş)lar oldu. Soy adları I-li-tie idi. Diğer T'ie-le (Tölös) kabileleri arasında en cesur ve müreffeh olanlar bunlardı. Görenekleri büyük ölçüde Tu-küe gelenekleriyle aynıydı. > > Batı T'u-küe kağanı Ç'u-lo T'...
  - `Roux, Eski Din, s. 221` (eslesen: _aT aLT_)
    > ...eğlendiler ve geceleyin aynı yorgan altında birlikte uyudular" (MGT, § 1 17). [[s. 221]] Önemine karşın kısmen karmaşık olan metin, özellikle karşılıklı olarak kemer lerin verilmesini önplana çıkarmaktadır; doğaüstü şeylerin çoğu gibi ("altın kan", "altın hayat", "altınla süslenmiş kafatası" vs.), bunlar da altındandır; oysa fakirlik zamanında aşık kemiği yalancı altından, yani bakırdandı. Sanıyorum ki önceleri yapmaya çalışıldığından daha kapsamlı olarak (0.109, s. [[s. 221]] 69), "kemeri çözüp başlığı çıkarma"nın, insanı...
  - `Ata 2011, s. 20` (eslesen: _aT aLT_)
    > ...Araştırmaları Yıllığı-Belleten 1980-1981, Türk Kurumu Yayınları, Ankara 1983, s.1-16. Ercilasun, Ahmet Bican, Türk Dili Tarihi, Akçağ, Ankara 2004. Eren, Hasan, Türklük Bilimi Sözlüğü. 1. Yabancı Türkologlar, Türk Dil Kurumu Yayınları, Ankara 1998. Tekin, Talat, “Altay Dilleri Teorisi”, Türk Dünyası El Kitabı, Türk Kültürünü Araştırma Enstitüsü Yayınları, Ankara 1978, s. 118-130. _______, Makaleler. [[s. 20]] 1- Altayistik, (Yayıma Hazırlayanlar: Emine Yılmaz, Nurettin Demir), Ankara 2003. Temir, Ahmet, “Türkçe İle Moğolc...
  - `Roux, Altay Turklerinde Olum, s. 35` (eslesen: _aT aLT_)
    > ...ourteille'in kanıtladığı üzere, ruhlardan birinin adlandırılması için bu kelimenin kullanıldığına diğer belgelerde de rastlanmaktadır. [[s. 35]] Vamb&ery, Çağatayca ve Uygurcada, mutluluk anlamına selamet anlamının da eklenmesi gerektiğini ileri sürmüştür; fakat Altay lehçelerinde, bu kelimeyi hayat, ruh, akıl olarak yorumlamaktadır.” Etnograflar, genel olarak, ruhu kut olarak adlandıracaklardır, bunu ileride göreceğiz. * BARBIER DE MEYNARD, Dictiomnaire, 2 cilt, Paris, 1881-1886, JI. Cilt, s. 547. PAVET DE COURTELLE...


## TY1-K-1#3 - Tonyukuk Yazıtı, Kuzey 1. satir  (3 kelime)

- **transkripsiyon:** `aKTeRMiL : KeÇE : OGuRKaLaTDıM`
- **kelime karsiliklari:** AKTERMİLİ : GEÇİP : DURAKLATTIM
- **kanit:** _(korpusta eslesme yok - bos birak)_


## TY1-K-1#4 - Tonyukuk Yazıtı, Kuzey 1. satir  (5 kelime)

- **transkripsiyon:** `aT : ÜZE : BiNTiRE : KaRıG : SÖKDüM`
- **kelime karsiliklari:** AT : ÜZE[RİNE] : BİNDİRİP : KARI : SÖKTÜM
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _aT ÜZE_)
    > .... 45]] Ona sorup “Bir atlı gitmiş olduğuna göre o yoldan yürüyebiliriz” dedim. Düşündüm. Kağanıma (K 1) arz ettim. Orduyu yürüttüm. (Beylere) “Askerleri atlara bindirin!” dedim. Ak Termel (ırmağını böylece) geçerek zaman kazandım. [s. 46] 88 TUNYUKUK YAZITI At üze bintüre karığ sökdüm. Yokaru, at yete, yadağın, ığaç tutunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)|...
  - `Ergin 1970, s. 39` (eslesen: _aT ÜZE_)
    > ...in yolu Anı boyunca.......... imiş, bir at yolu imiş, onunla gitmiş. Ona söyleyip, bir atlı gitmiş diye o yolla yürürsek mümkün olacak dedim. Düşündüm, kağanıma Kuzey cephesi arz ettim. Asker yürüttüm. Attan aşağı dedim. Ak Termili geçip sırtlattım. [[s. 39]] At üzerine bindirip karı söktüm. Yukarıya, atı yedeğe alarak, yaya olarak, ağaca tutunarak çıkarttım. Öndeki er | çiğneyi verip, ağaç olan tepeyi aştık. Yuvarlanarak indik. On gecede ortadaki engeli dolanıp gittik. Kılavuz yeri şaşırıp boğazlandı. Bunalıp kağan dört...
  - `Tekin 2003, s. 153` (eslesen: _aT ÜZE_)
    > ...On dört yaşımda Tarduş halkı üzerine Şad idim" (BK D 15) *tokuz oguz bodun üzä kagan olortı* "Dokuz Oğuz halkı üzerine bir hakan tahta oturdu" (T 9) *altun yış üzä kabışalım* "Altay dağları üzerinde buluşalım" (T 20) *at üzä bintürä karıg sökdüm* "(Askerleri) at üzerine bindirip karları söktüm" (T 25), vb. Sontakı *üzä* bulunma-çıkma durumunu da yönetir (aş. bk.) **357.** *(e)y(i)n* "izleyerek, ardı sıra" (< *\*ey-* "izlemek, takip etmek"): *kaŋım... täŋrikän (e)y(i)n anta yorımış* "Babam... orada Hakanın ardı sıra yür...
  - `Ata 2011, s. 121` (eslesen: _aT ÜZE_)
    > ...ne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T 25 tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. 114 [s....
  - `Roux, Eski Din, s. 111` (eslesen: _aT ÜZE_)
    > ...k-Tanrı' ya "baba" ismi Türkler ve Moğollarca yakın çağlara kadar hiçbir zaman verilmemiştir. Belki de tarihsel-kültürel okulun etkisi altında kalan bazı araştırmacılar (bkz. P.24, s. 22), aslında "saygı, sevgi ve güven işareti olarak" verildiği sanılan bu sıfat üzerinde ısrar etmişlerdir (P.65, s. 329). Bildiğim kadarıyla böyle bir adlandırma XVII. yüzyıldan ve Altan Tobçi'den önce meydana çıkmamaktadır (D.1, s. [[s. 111]] 16; bkz. D.20, s. 218). İmparator kendisine "göksel" veya "ilahi" sıfatlarını yakıştırmayı tercih...
  - `Ata 2011, s. 114` (eslesen: _aT ÜZE_)
    > ...yelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iş...


## TY1-K-1#5 - Tonyukuk Yazıtı, Kuzey 1. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `YUKaRU : aT : YeTE : YaDaGıN : --- : IGaÇ : TUTuNU : aGTURTuM : ÖŊREKİ : eR`
- **kelime karsiliklari:** YUKARIYA : AT[LARI] : YETİP : YAYAN : --- : AĞAÇ[LARA] : TUTUNUP : AĞDIRDIM : ÖNDEKİ : ER
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _aT YeTE YaDaGıN IGaÇ_)
    > ...uğuna göre o yoldan yürüyebiliriz” dedim. Düşündüm. Kağanıma (K 1) arz ettim. Orduyu yürüttüm. (Beylere) “Askerleri atlara bindirin!” dedim. Ak Termel (ırmağını böylece) geçerek zaman kazandım. [s. 46] 88 TUNYUKUK YAZITI At üze bintüre karığ sökdüm. Yokaru, at yete, yadağın, ığaç tutunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz...
  - `Ata 2011, s. 118` (eslesen: _aT YeTE YaDaGıN IGaÇ_)
    > ...ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK K2 yok(k)aru at yete yadagın ıgaç tutunu agturtum “yukarı doğru atları yedekleyerek, yayan ve ağaçlara tutuna tutuna ağdırdım” T 25 teŋri töpüsinte tutup yüg(g)erü kötürmiş erinç “göğün tepesinden tutup yukarı doğru kaldırmış, şüphesiz” KT D11 d. +rA eki ile türetilmiş yer...
  - `Ata 2011, s. 111` (eslesen: _aT YeTE YaDaGıN IGaÇ_)
    > ...ng ovasına kadar sefer ettim.” KT G3 kurıgaru … [[s. 111]] temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK K2 yok(k)aru at yete yadagın ıgaç tutunu agturtum “yukarı doğru atları yedekleyerek, yayan ve ağaçlara tutuna tutuna ağdırdım” T 25 teŋri töpüsinte tutup yüg(g)erü kötürmiş erinç “göğün tepesinden tutup yukarı doğru kaldırmış, şüphesiz” KT D11 d. [[s. 111]] +rA eki ile türetilmiş yer zarfları...


## TY1-K-2#1 - Tonyukuk Yazıtı, Kuzey 2. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `YOGuRuÇA --- : IBRıK : aŞDıMıZ`
- **kelime karsiliklari:** GEÇİNCE --- : IBRIKI : AŞTIK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aŞDıMıZ_)
    > ...nta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol...
  - `Tekin 2003, s. 108` (eslesen: _aŞDıMıZ_)
    > ..., tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler bu gerçeği kanıtlamaya yeter: /UGLmn/ *oglum+in* "oğlumu" (...
  - `Ata 2011, s. 112` (eslesen: _aŞDıMıZ_)
    > ...lanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT...
  - `Olmez 2017, s. 51` (eslesen: _aŞDıMıZ_)
    > ...rfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlardan sonra ise *+ŋA* şeklinde görülür. Üçüncü kişide, ger...
  - `Ata 2011, s. 105` (eslesen: _aŞDıMıZ_)
    > ...isimlere ulanan bu ek ile belirli nesne durumu yapılır. [[s. 105]] tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı...
  - `Kafesoglu, s. 181` (eslesen: _IBRıK_)
    > ...ezenir598, madenî tabaklar, maşrapalar, heykeller, bazıları birer san'at eseri değerinde olarak Türkler taraûndan yapılırdı. Çin'den Tuna boyuna kadar bozkırlara serpilmiş binlerce mezardan bu eserler bol miktarda çıkarılmıştır5*9. [[s. 181]] Ayrıca kazanlar, ibrikler, kovalar, içinde yüzlerce insanın barındığı otağlar, arabalar, at teçhizatı; eyer ve koşum takımları Bozkır Türk topluluğunda ne kadar kalabalık bir esnaf ve zenaatkâr zümresinin bulunduğunu gösterir. Halıcıları, kilimcileri, debbağları, çizmecileri, çorap...


## TY1-K-2#2 - Tonyukuk Yazıtı, Kuzey 2. satir  (8 kelime)

- **transkripsiyon:** `YOBuLU : İNTiMiZ : ON : TÜNKE : YaNTaKI : TUG : BİRÜ : BaRDıMıZ`
- **kelime karsiliklari:** YOBULU : İNDİK : ON : DÜNDE : YANDAKİ : TUĞUN : BERİSİNE : VARDIK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _İNTiMiZ ON TÜNKE YaNTaKI_)
    > ...eylere) “Askerleri atlara bindirin!” dedim. Ak Termel (ırmağını böylece) geçerek zaman kazandım. [s. 46] 88 TUNYUKUK YAZITI At üze bintüre karığ sökdüm. Yokaru, at yete, yadağın, ığaç tutunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngü...
  - `Ata 2011, s. 142` (eslesen: _ON TÜNKE YaNTaKI TUG_)
    > ...p balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta k...
  - `Ata 2011, s. 135` (eslesen: _ON TÜNKE YaNTaKI TUG_)
    > ...t erlerini öldürüp balbal yaptım” BK G7 [[s. 135]] bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı [[s. 135]] ertigiz “bunca hayatta kalanları...


## TY1-K-2#3 - Tonyukuk Yazıtı, Kuzey 2. satir  (4 kelime)

- **transkripsiyon:** `YiRÇİ : YiR : YaŊıLıP : BOGuZLaNDI`
- **kelime karsiliklari:** YERCİ : YERİ : YANILIP : BOĞAZLANDI
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _YaŊıLıP_)
    > ...e) fakir halkı hep derleyip topladım: Fakir halkı zengin yaptım, az halkı çok yaptım. Yoksa, bu sözümde yalan var mı? j (Ey) Türk beyleri (ve) halkı, bunu işitin! [[s. 20]] Türk (halkı), dirilip (nasıl) devlet sahibi olacağını buraya (taş üzerine) hâkkettim; yanılıp (nasıl) öleceğini de (G 11) buraya hâkkettim. (Söyliyecek) her ne sözüm var ise ebedi taşa hâkkettim. Ona bakarak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN...
  - `Ergin 1970, s. 13` (eslesen: _YaŊıLıP_)
    > ...olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk milleti, beyleri, bu zamanda itaat eden beyler olarak mı yanılacaksınız? [s. 14] Ben ebedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. B...
  - `Tekin 2003, s. 109` (eslesen: _YaŊıLıP_)
    > ...Hanını bırakıp (başkalarına) bağımlı oldun" (T 3) *kürägüŋ+in üçün* "ele avuca sığmaz olduğun için" (KT D 23, BK D 19) *bäglik urı ogluŋ+ın kul kıltıg* "Bey olmaya layık erkek çocuklarını köle yaptın" (BK D 20) *türük [bodun ti]rip il tutsıkıŋ+ın bunta urtum, yaŋılıp ölsikiŋ+in yämä bunta urtum* "Türk halkı, yaşayıp (nasıl) devlet sahibi olacağını buraya hakkettim, yanılıp öleceğini de buraya hakkettim" (KT G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg a...
  - `Ata 2011, s. 152` (eslesen: _YaŊıLıP_)
    > ...yalan var mı? Türk beyleri, Türk ulusu bunu işitin! Türk halkı (senin) ku͡ ubr(a)td(ı)m çıg(a)ń bod(u)n(u)g yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de b(a)y kıl͡tım az bod(u)n(u)g üküş kıl͡t(ı)m (a)zu bu s(a)b(ı)mda ig(i)d b(a)rgu türük͡ b(e)gl(e)r bod(u)n bunı (e)şid(i)ŋ türük [bodun ti]r(i)p il tuts(ı)k(ı)ŋ(ı)n bunt͡ a urt(u)m y(a)ŋ(ı)l(ı)p öls(i)k(i)ŋ(i)n y(e)me KÖ...
  - `Olmez 2017, s. 95` (eslesen: _YaŊıLıP_)
    > ...ekinden sonra gelen belirtme durumu eki **boŋta** < *bo+n+ta* "buraya" - bo: isim tabanı - +n: zamir n'si - +ta: bulunma/ ayrılma durumu eki **urtum** < *ur-tu+m* "kazıdım" - ur-: fiil tabanı - -tu: bilinen geçmiş zaman eki - +m: teklik birinci kişi eki **yaŋılıp** < *yaŋıl-(ı)p* "hata edip" - yaŋıl-: fiil tabanı - -(ı)p: zarffiil eki **ölsıkiŋin yeme** < *yem-e* "öleceğinizi de" - yem-: fiil tabanı - -e: zarffiil eki; kalıplaşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?]...
  - `Ata 2011, s. 145` (eslesen: _YaŊıLıP_)
    > ...a) oturdum. Kağan (olarak tahta) oturup yoksul fakir halkı hep derleyip topladım. Yoksul halkı zengin yaptım, az halkı çoğalttım. Acaba bu sözümde yalan var mı? Türk beyleri, Türk ulusu bunu işitin! Türk halkı (senin) yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de KÖL TİGİN GÜNEY 1-10 (Muharrem Ergin, Orhun Abideleri, Boğaziçi Yayınları, 25. Baskı, İstanbul 2000’den) [s. 146] Metinde Geçen Sözcüklerin Çözümlemeleri: teŋri “1. gök, gökyüzü; 2. tanrı” teŋri teg “tanrı gibi” teŋride bol- “gökyüzünde yaratıl...


## TY1-K-2#4 - Tonyukuk Yazıtı, Kuzey 2. satir  (5 kelime)

- **transkripsiyon:** `BUŊaDıP : KaGaN : YeLÜ : KÖR : TiMiŞ`
- **kelime karsiliklari:** BUNALAN : KAĞAN : YELÜ : GÖR [HIZLANIN] : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _BUŊaDıP KaGaN YeLÜ KÖR_)
    > ...k zaman kazandım. [s. 46] 88 TUNYUKUK YAZITI At üze bintüre karığ sökdüm. Yokaru, at yete, yadağın, ığaç tutunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürt...
  - `Ata 2011, s. 142` (eslesen: _BUŊaDıP KaGaN_)
    > ...birbirine düşürdüğü için Türk halkı il yaptığı ilini elden çıkarıvermiş, kağan yaptığı kağanını kaybedivermiş” KT D6-7 kör- tasvirî fiili, tek örnekte, emir kipinde kullanılmıştır. Asıl fiilin gerçekleştirilmesine çaba göstermeyi anlatır: buŋadıp kagan yel-ü kör temiş “sıkılıp kağan “(atları) sürmeye bakın” demiş” T 26 u- tasvirî fiili ise bir işi yapabilme, bir işe gücü yetme, muktedir olmayı anlatır: yagı bolmış yagı bolup itin-ü yaratın-u u-maduk yana içikmiş “düşman olmuş, düşman ol...
  - `Ata 2011, s. 135` (eslesen: _BUŊaDıP KaGaN_)
    > ...rle halkı birbirine düşürdüğü için Türk halkı il yaptığı ilini elden çıkarıvermiş, kağan yaptığı kağanını kaybedivermiş” KT D6-7 kör- tasvirî fiili, tek örnekte, emir kipinde kullanılmıştır. [[s. 135]] Asıl fiilin gerçekleştirilmesine çaba göstermeyi anlatır: buŋadıp kagan yel-ü kör temiş “sıkılıp kağan “(atları) sürmeye bakın” demiş” T 26 u- tasvirî fiili ise bir işi yapabilme, bir işe gücü yetme, muktedir olmayı anlatır: yagı bolmış yagı bolup itin-ü yaratın-u u-maduk yana içikmiş “düşman olmuş, düşman olup kendini düzene sok...
  - `Tekin 1998, s. 3` (eslesen: _KaGaN_)
    > ...lleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarımı: 2...
  - `Ergin 1970, s. 3` (eslesen: _KaGaN_)
    > ...in verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. Türk de...
  - `Tekin 2003, s. 12` (eslesen: _KaGaN_)
    > ........................... 216 METİN ÖRNEKLERİ ....................................................................................... 217 Kül Tigin Yazıtı (732) .................................................................................... 219 Bilge Kagan Yazıtı (735) ................................................................................ 221 [s. 13] # s. 013 — İÇİNDEKİLER Tunyukuk Yazıtı (725 ?) ................................................................................. 222 Ongin Yazıtı (732?...


## TY1-K-3#1 - Tonyukuk Yazıtı, Kuzey 3. satir  (6 kelime)

- **transkripsiyon:** `aNI : SUBıG : BaRaLıM : OL : SUB : KODI`
- **kelime karsiliklari:** ANI : SUYUNA : VARALIM : O : SUYUN : KODI
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _OL SUB_)
    > ...ığ sökdüm. Yokaru, at yete, yadağın, ığaç tutunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Y...
  - `Tekin 2003, s. 106` (eslesen: _OL SUB_)
    > ...r* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük bodun üçün tün udımadım...* "Türk halkı için gece uyumadım..." (KT D 27) 5. Bir eylemin yerini y...
  - `Ata 2011, s. 121` (eslesen: _OL SUB_)
    > ...113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” B...
  - `Roux, Eski Din, s. 230` (eslesen: _OL SUB_)
    > ...yapılan yorumuna göre, "yiyecekleri önce toprakta yakıp sonra sunmak" gerekirdi (§ 70; bkz. D.19, s. 300}. Olay biraz karmaşıktır, ancak Yuan-çe'nin buna benzeyen öyküsü Hıtayların kine oldukça yaklaşmaktadır: "Her yıl on ikinci ayın birinci gününden sonra Moğol subaylarına, eti [ ... [[s. 230]] ] ispirtolu içkilerle ve kısrak sütüyle birlikte yakmak için toprakta bir delik açmaları sırasında yanlarına Şamanları almaları emri verilirdi. Şaman ölü hükümdarın ismini Moğolca çağırır ve kurbanlar sunardı" (a. y., s. 302). Ge...
  - `Ata 2011, s. 114` (eslesen: _OL SUB_)
    > ...Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 [[s. 114]] yazı...
  - `Roux, Altay Turklerinde Olum, s. 197` (eslesen: _OL SUB_)
    > ...passages, o.c., HAS, 1950, s. 300. *İ MOSTAERT, Ordosica, Les Erküt descendants des Chretiens medievaux chez les Mongols Ordos, Bull. 9 Kasım 1934, Catholic Uni., Pekin, s. 9. BA [s. 197] RUH VE ÖLÜM yıl ayın birinci ve onikinci görünümünden sonra, bir Moğol subayına, yanına alkollü içkiler ve kısrak sütü alması emredilirdi ve şamanlar ölmüş hükümdarların adlarını Moğol dilinde okuyarak kurban sunarlardı.”*”? Wang-Kouo-Wei'ye göre, bu tören eski bir Kitan ve Joutchen geleneği olup, Ming hanedanının ilk yıllarında Çin...


## TY1-K-3#2 - Tonyukuk Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `BaRTıMıZ : aŞaNGaLI : TÜŞÜRTüMüZ`
- **kelime karsiliklari:** VARDIK : AŞ [YEMEK-İÇİN] : DÜŞÜRDÜK
- **kanit:**
  - `Tekin 2003, s. 176` (eslesen: _TÜŞÜRTüMüZ_)
    > ...yip (bizi tutsak) almak için geldiler" (BK D 32) *[sıŋ]ar süsi äbig barkıg yul-galı bardı, sıŋar süsi süŋüş-gäli kälti* "(Onların) yarı ordusu (bizim) yerimizi yurdumuzu yağmalamak için gitti, yarı ordusu (da bizimle) savaşmak için geldi" (BK D 32) *asın-galı tüşürtümüz* "(Dağa) tırmanmak için (askerleri atlarından) indirdik" (T 27) *yuyka ärkli topul-galı uçuz ärmiş, yinçgä ärklig üz-gäli uçuz* "Yufka olanı delmek kolay imiş, ince olanı kırmak kolay" (T 13) 2. Asıl eylemin başlangıç noktası: *türk bodun kılın-galı türk kag...


## TY1-K-3#3 - Tonyukuk Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `aTıG : IKA : BaYUR`
- **kelime karsiliklari:** AT[LAR]I : YIKIP : BAYUR
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _aTıG IKA BaYUR_)
    > ...utunu ağturtum. Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızd...
  - `Ata 2011, s. 127` (eslesen: _aTıG IKA BaYUR_)
    > ...kullanılmamıştır? a. süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li ge...
  - `Olmez 2017, s. 51` (eslesen: _aTıG IKA BaYUR_)
    > ...* "bunu", *anı* "onu". ### Yaklaşma-Bulunma Durumu: +kA, +A Runik harfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli...
  - `Ata 2011, s. 120` (eslesen: _aTıG IKA BaYUR_)
    > ...belirtme durumu eki kullanılmamıştır? a. [[s. 120]] süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. [[s. 120]] tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi...


## TY1-K-3#4 - Tonyukuk Yazıtı, Kuzey 3. satir  (7 kelime)

- **transkripsiyon:** `eRTiMiZ : KÜN : YiME : TÜN : YiME : YeLÜ : BaRDıMıZ`
- **kelime karsiliklari:** ETTİK : GÜNDÜZ : YİNE : GECE : YİNE : [AT] KOŞUP : VARDIK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _eRTiMiZ KÜN_)
    > ...Öfiğreki er (K 2) yuğurça ıdıp 1 bar baş aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız....
  - `Tekin 2003, s. 76` (eslesen: _BaRDıMıZ_)
    > ...17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çekimli biçimlerinde bu gelişme görülmez: *bardı* "gitti" (KT D 34, vb.), *bardıg* "gittin" (KT D 24, vb.), *bardıgız* "gittiniz" (KT GD), *bardok* "vardığ(ı)", *bardımız* "gittik" (genellikle); bir de *tabarda* "Tabar'da" (KT D 38). **136.** /zd/ > /zt/: - *tutuzt[ı]* "yakalattı" (KT D 38) < **tutuzdı* - *uduztum* "sevkettim" (T 15), *uduzt[ok]ı* "sevkettiği" (KÇ D 1) - *āztı* "yolunu yitirdi" (IB 15, üç kez) Ancak bu ses d...
  - `Ata 2011, s. 121` (eslesen: _BaRDıMıZ_)
    > ...113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26...
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...
  - `Tekin 2003, s. 234` (eslesen: _eRTiMiZ_)
    > ...[s. 234] # s. 234 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 235) Bägiçim! 8. Ärdämlig elintä bökmädi. Töliş Alp Totok işiŋä bökmädi. Y(i)g(i)t ärkän, äsiz, yıta, açıg a! 9. Yıta! ........... y]agın [al]dıŋız, öltüŋüz. Önçüŋüz bar [üçün bäŋkü]ni tikä bertimiz. Kiş[i]dä yig t(i)kär biz. 10. Ärdämi bar üçün kanınta Kü Totok atka tägmiş bägim, äsiz! Är başı, yıta, açıg a! 11. Tokuz älig yaşda tokuz altmış är ölürmiş är başı Saŋun ölürti. Bilgäm, yıta! 12. İç yer äliki artzun: At(d)açı Alp Totok yōk! Yuş Kadıŋ äliki <...
  - `Ata 2011, s. 94` (eslesen: _eRTiMiZ_)
    > ...apımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin...


## TY1-K-3#5 - Tonyukuk Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `KIRKıZıG : UKA : BaSDıMıZ`
- **kelime karsiliklari:** KIRGIZI : UYKUDA : BASTIK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KIRKıZıG UKA BaSDıMıZ_)
    > ...aşdımız. Yubulu intimiz. On tünke yantakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün ka...
  - `Olmez 2017, s. 51` (eslesen: _KIRKıZıG UKA BaSDıMıZ_)
    > ...A, +A Runik harfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlardan sonra ise *+ŋA* şeklinde görülür. Üçüncü kişide, ger...
  - `Tekin 2003, s. 182` (eslesen: _KIRKıZıG UKA_)
    > ...II 1-2) - *kızıl kanım töküti kara tärim yügürti işig küçüg ber-tim ök* "... kızıl kanımı döktürerek, kara terimi akıtarak çok hizmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devletini zapt ettik" (KT D 36) - *tizligig sökür-tümüz başlıgıg yüküntür-t...
  - `Tekin 2003, s. 108` (eslesen: _UKA BaSDıMıZ_)
    > ...ürmiş, tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler bu gerçeği kanıtlamaya yeter: /UGLmn/ *oglum+in* "oğlumu" (...
  - `Tekin 2003, s. 110` (eslesen: _KIRKıZıG_)
    > ...op yol(l)ug tigin bitidim* "Bu taşlara (ve) bu duvarlara hep (ben), Prens Yollug, yazdım" (KT GD) *çorak+ka tägip* "çorak araziye varıp" (BK GD) *äb+kä tägdöküm* "Karargaha vardım" (O 11) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şant...
  - `Ata 2011, s. 112` (eslesen: _KIRKıZıG_)
    > ...daki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+...


## TY1-K-4#1 - Tonyukuk Yazıtı, Kuzey 4. satir  (5 kelime)

- **transkripsiyon:** `SÜŊüGüN : aÇDıMıZ : KaNI : SÜSİ : TeRiLMiŞ`
- **kelime karsiliklari:** SÜNGÜYÜ : AÇTIK : KAĞANI : SÜSİ : DİRİLMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SÜŊüGüN aÇDıMıZ KaNI SÜSİ TeRiLMiŞ_)
    > ...ntakı tuğ ebirü bardımız. Yerçi yer yangğılıp boğuzlantı. Bunğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağan...
  - `Olmez 2017, s. 56` (eslesen: _KaNI SÜSİ TeRiLMiŞ_)
    > ...kiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygur kanım tutulmış* "Uygur hanım tutulmuş" (Tes B 4) **Gelecek zaman *-DAçI* ekiyle kurulur:** Gelecek zamanın az sayıda örnekte, özellikle olumsuz fiil çekiminde *-çI* ile kurulduğu örnekler de vardır: *ötüken...
  - `Tekin 2003, s. 188` (eslesen: _KaNI SÜSİ_)
    > ...* "Toplanıp yetmiş er olmuş" (KT D 12, BK D 11) *kişi oglı kop ölgäli törü-miş* "İnsanoğlu hep ölümlü yaratılmış" (KT K 10) *bunça bodun kälipän yogla-miş sıgta-miş* "... bunca (yabancı) halk (temsilcileri) gelerek yas tutmuşlar, ağlamışlar" (KT D 4, BK D 5) *kani süsi teril-miş* "Han'ları ve askerleri toplanmış" (T 28) 2. Şu örnekte özne, büyük bir olasılıkla, tekil 1. kişidir: *beş yegirmi är ölür-miş m[än]* "On beş (düşman) askeri öldürmüşüm ben" (Uyuk-Oorzak I 2) [s. 189] # s. 189 — ORHON TÜRKÇESİ GRAMERİ ## {-çI} Ek...
  - `Ergin 1970, s. 11` (eslesen: _TeRiLMiŞ_)
    > ...Türk için millî bir ibâdettir. İşte bu kitap, bu ibâdetin hizmetine sunulmaktadır. MUHARREM ERGİN O R H U N Â B İ D E L E R İ [s. 11] Sayfaların yanındaki rakamlar, âbidelerdeki asıl metnin satır numaralarıdır. Ortaya gelen satır başları dik çizgilerle gösterilmiştir. Noktalı yerler, metindeki eksik yerleri göstermektedir. M U H A R R E M E R G İ N [s. 12] KÜL TİGİN ÂBİDESİ Güney cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim, oğlum, bütün s...
  - `Tekin 2003, s. 21` (eslesen: _TeRiLMiŞ_)
    > ...ri /up, üp/ öbürü de /ot/ değerinde olan runik harfler bulunur. Eski Türk runik yazısındaki harflerin biçimleri genellikle değişmez. Bununla birlikte bazı harflerin yazıta göre az-çok farklı biçimleri vardır. Eski Türk runik alfabesi aşağıdaki tablolarda gösterilmiştir.² --- ¹ [kare simgesi] /aş/ ses öbeğini gösteren işaret /ş/ ünsüzünün /ş/ harfi ile gösterildiği Hemçik-Çırgakı yazıtında 10 kez geçer (bk. Orkun, ETY III, ss. 79-80). [kum saati simgesi] /baş/ ses değerindeki işaret de Uyuk-Arcan, Ak-Yüs ve Tuva I yazıtl...
  - `Ata 2011, s. 8` (eslesen: _TeRiLMiŞ_)
    > ...konusu dönemini en iyi yansıtabileceği düşünülen dil malzemesi, metinlerin içinden seçilerek kitaba konulmuş ve örnek oluşturması amacıyla bunların dil özellikleri incelenmiştir. Verilen bö- lümlerde geçen kelimelerin anlamları da sona eklenen sözlükte gösterilmiştir. Hem bir Türk dili ve edebiyatçısı hem de dil ve kültürümüzün yeni nesillere tanıtıcısı olacak üniversite öğrencilerine bir “el kitabı” niteliğinde hazırlanmış olan bu ders kitabı, içine yerleştirilen “Sıra Sizde” gibi bölümlerle okuyucuyu araşt...


## TY1-K-4#2 - Tonyukuk Yazıtı, Kuzey 4. satir  (4 kelime)

- **transkripsiyon:** `SÜŊüŞDüMüZ : SaNÇDıMıZ : KaNIN : ÖLüRTüMüZ`
- **kelime karsiliklari:** SÜNGÜŞDÜK : SANÇTIK : KAĞANINI : ÖLDÜRDÜK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SaNÇDıMıZ KaNIN_)
    > ...nğadıp kağan “Yelü kör” temiş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 27` (eslesen: _SaNÇDıMıZ_)
    > ...lıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz....
  - `Tekin 1998, s. 47` (eslesen: _ÖLüRTüMüZ_)
    > ...yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfk...
  - `Tekin 2003, s. 209` (eslesen: _ÖLüRTüMüZ_)
    > ...Sİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzl...


## TY1-K-4#3 - Tonyukuk Yazıtı, Kuzey 4. satir  (4 kelime)

- **transkripsiyon:** `KaGaNKA : KIRKıZ : BODuNI : iÇiKDİ`
- **kelime karsiliklari:** [BİZİM] KAĞANA : KIRGIZ : BOYLARI : İÇİKDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KaGaNKA KIRKıZ BODuNI iÇiKDİ_)
    > ...ş. (K 3) Anı subilka)| bardlımız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” te...
  - `Tekin 2003, s. 111` (eslesen: _KIRKıZ BODuNI iÇiKDİ_)
    > ...iş kaganıŋ+a* "(seni) beslemiş olan hakanına" (BK D 19) *ärmiş barmiş ädgü eliŋ+ä* "bağımsız ve müreffeh devletine" (BK D 19) **264.** Verme-bulunma durumunda bir adın şu görevleri vardır: 1. Eylemin kendisine doğru işlendiğini gösteren nesne olur: *kagan+ka kırkız boduni içikdi* "Kırgız halkı Hakana tabi oldu" (T 28) *äb+kä tägdöküm* "Karargaha vardım" (O 10) [s. 112] # s. 112 — TALAT TEKİN *oguz täzip tabgaç+ka kirti* "Oğuzlar kaçarak Çin'e gittiler" (BK D 38), vb. 2. Eylemin kimin yararına işlendiğini gösteren zarf tümleci olur...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA_)
    > ...li bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?"...
  - `Ata 2011, s. 51` (eslesen: _KaGaNKA_)
    > ...i bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarla...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNKA_)
    > ...nde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı olan bir halktım, hakanım...


## TY1-K-4#4 - Tonyukuk Yazıtı, Kuzey 4. satir  (6 kelime)

- **transkripsiyon:** `YÜKüNTİ : YaNTıMıZ : KÖGMeN : YIŞıG : BeRÜ : KeLTiMiZ`
- **kelime karsiliklari:** YÜKÜNDÜ : YANDIK : KÖGMEN : YIŞA : BERİ : GELDİK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _YÜKüNTİ YaNTıMıZ KÖGMeN YIŞıG_)
    > ...ız|. Ol sub kudı bardımız. Asıngalı tüşürtümiz. Atığ ıka bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi...
  - `Tekin 1998, s. 26` (eslesen: _KÖGMeN YIŞıG_)
    > ..., kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkı...
  - `Tekin 1998, s. 24` (eslesen: _KeLTiMiZ_)
    > ...yerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]]...
  - `Tekin 2003, s. 75` (eslesen: _YÜKüNTİ_)
    > ...- *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök* - *säçlintim* "ayrıldım" (Kızıl Çıra I 2) < **säçlindim* İstisnalar: *käçändä* "Keçen'de" (KÇ B 10),...
  - `Ata 2011, s. 105` (eslesen: _YÜKüNTİ_)
    > ...aşındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türkiye Türk...
  - `Ata 2011, s. 98` (eslesen: _YÜKüNTİ_)
    > ...öz içinde hecelerin başındaki /g/, Türkiye Türkçesinde düşmüştür. 2. Aşağıdaki ifadelerin hangisinde düzlük-yuvarlaklık uyumuna aykırı sözcük yoktur? a. türük bodun yok bolmazun bodun bolçun tiyin b. türük bodun illedük ilin ıçgınu ıdmış c. bodunı kop kelti yükünti d. beglik urı oglin kul e. çıgań bodunug bay kıltım az bodunug üküş kıltım 3. Orhun Türkçesinde hangi ünsüzler arasında nöbetleşme vardır? a. [[s. 98]] k ~ g b. ç ~ c c. b ~ v d. ŋ ~ g e. ç ~ ş 4. Orhun Türkçesi ile Türkiye Türkçesindeki /g/ ünsüzü ile i...


## TY1-K-5#1 - Tonyukuk Yazıtı, Kuzey 5. satir  (6 kelime)

- **transkripsiyon:** `KIRKıZDA : YaNDıMıZ : TÜRGiŞ : KaGaNDA : KÖRüG : KeLTİ`
- **kelime karsiliklari:** KIRKIZDAN : YANDIK : TÜRGİŞ : KAĞANINDAN : GÖRÜK : GELDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KIRKıZDA_)
    > ...a bayur ertimiz. Kün yeme tün yeme yelü bardımız. Kırkızığ uka basdımız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmı...
  - `Tekin 2003, s. 115` (eslesen: _YaNDıMıZ_)
    > ...smıl yagıdıp äbim+ärü bardı* "Basmıllar bize düşman olup benim yurduma doğru gittiler" (MÇ 4) 4. {+rA}. Bu ek şu örneklerde bulunur: *taş+ra yorıyur tiyin kü äşidip* "İsyan ediyor (harf. "dışarıya yürüyor") diye haber alıp..." (KT D 11-12) *tarduş şad+ra udı yańdımız* "(Düşmanı) Tarduş Şadına doğru sürüp dağıttık" (T 41) [s. 116] # s. 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev ya...
  - `Ata 2011, s. 114` (eslesen: _YaNDıMıZ_)
    > ...basmıl yagıdıp eb+im+erü bardı MÇ 4 “Basmıllar düşman hâle gelerek yurduma doğru gittiler.” d. +rA: Yalın durumdaki isim gövdelerine ulanır: taş+ra yorıyur tiyin kü eşidip KT D11 “dışarıya gidiyor diye haber alıp” tarduş şad+ra udı yańdımız T 41 “Tarduş Şad’a doğru kovalayarak bozguna uğrattık” 8. Araç Durumu (Instrumental): +(X)n ok+un urdı KT D36 “okla vurdu” usın süŋüg+ün açdımız T 28 “uykularını mızrakla açtık” elig+in tutdı KT D38 “elle tuttu” Orhun Türkçesinde...
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...
  - `Ata 2011, s. 107` (eslesen: _YaNDıMıZ_)
    > ...nden sonra kullanılmıştır: basmıl yagıdıp eb+im+erü bardı MÇ 4 “Basmıllar düşman hâle gelerek yurduma doğru gittiler.” d. +rA: Yalın durumdaki isim gövdelerine ulanır: taş+ra yorıyur tiyin kü eşidip KT D11 “dışarıya gidiyor diye haber alıp” tarduş şad+ra udı yańdımız T 41 “Tarduş Şad’a doğru kovalayarak bozguna uğrattık” 8. [[s. 107]] Araç Durumu (Instrumental): +(X)n ok+un urdı KT D36 “okla vurdu” usın süŋüg+ün açdımız T 28 “uykularını mızrakla açtık” elig+in tutdı KT D38 “elle tuttu” Orhun Türkçesinde isim durum ekleri...
