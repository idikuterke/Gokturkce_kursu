# Ceviri istek paketi 27 - Orhun cumlecikleri

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


## BK-G-15#2 - Bilge Kağan Yazıtı, Güney 15. satir  (7 kelime)

- **transkripsiyon:** `TÜRK : BeGLeRİN : BODuNIN : eRTiŊÜ : Tİ : eMiG : İTDİ`
- **kelime karsiliklari:** TÜRK : BEĞLERİNİ : BOYLARINA : YÜCE : DE : EMİ : ETTİ
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _BeGLeRİN BODuNIN eRTiŊÜ Tİ_)
    > ...yu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrr...
  - `Olmez 2017, s. 63` (eslesen: _BeGLeRİN BODuNIN_)
    > ...jin yeme bonta urtum* "hata edip öleceğinizi de buraya kazıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim...
  - `Ogel C2, s. 76` (eslesen: _TÜRK BeGLeRİN_)
    > ...de de, “*Hakan Efrasyab'ın ağıdında, zamanı anlatan şu parça da gelmiştir', diyordu. Bu şiirler hep, “zaman, felek ve acun” üzerine kurulmuş düşüncelerdir. [[s. 76]] Kutadgu Bili gise,onun Tü r k beylerinden olduğunu belirterek söze, şöyle başlıyordu: R “Bu Türk beglerinden atı belgülüg, Tonga Alp Er'di kutı Belgülüg”: (Bu Türk beylerinden adı ün salmış Tonga Alp Er'in ikbal ile kutu da belgelenmişti'?). Bundan sonra hahanlara öğüt, yani bir “siretü'l-mülük'; başlar. Ne bir zaman, ne bir yer ve ne hadise veya ne de bir başka...
  - `Tekin 2003, s. 146` (eslesen: _BODuNIN_)
    > ...törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle oğluma alıverdim” (BK K 9) - *bunça matı bäglär kaŋım kaganka ärtiŋü ti mag kıltı* “Bunca sadık beyler babam hakana pek çok övgü yağdırdılar” (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* “(Babam Hakan), Türk beylerini ve halkını pek çok alkışladı ve övdü” (BK G 15) **337.** *takı* “daha” < *\*tak-* “takmak”: [s. 147] # s. 147 — ORHON TÜRKÇESİ GRAMERİ *täŋri bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş* “Kut...
  - `Ata 2011, s. 47` (eslesen: _BODuNIN_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İ...
  - `Tekin 1998, s. 32` (eslesen: _eRTiŊÜ_)
    > ...taki halkları defalarca tanzim etmiş, defalarca düzene sokmuşlar. Tanrı lütfettiği için, tahta oturduğumda (ben de) dört bucaktaki halkları tanzim ettim (ve) düzene soktum Sart yaptım. [s. 32] 60 BİLGE KAĞAN YAZITI Men (Tlürgiş kağanka kızımlın .......... | ertinğü uluğ törün alı birtim. Türlgiş kağan) (K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengr...


## BK-G-15#3 - Bilge Kağan Yazıtı, Güney 15. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÖGDİ : --- : KaŊıM : KaGaN : --- ÇA : aGIR : TaŞIG : YOGuNMıŞ`
- **kelime karsiliklari:** ÖVDÜ : --- : BABAM : KAĞAN : --- ÇA : AĞIR : TAŞI : YOĞUNLAŞTIRMIŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KaŊıM KaGaN_)
    > ..., yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp...
  - `Tekin 2003, s. 117` (eslesen: _KaŊıM KaGaN_)
    > ...ay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla...
  - `Ata 2011, s. 52` (eslesen: _KaŊıM KaGaN_)
    > ...türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _KaŊıM KaGaN_)
    > ...a isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Ergin 1970, s. 32` (eslesen: _KaGaN aGIR_)
    > ...Baga Tarkan ve buyruk .......... iç buyruk; Sebig Kül İrkin başta olarak, arkasından buyruk; bunca şimdiki beyler, babam kağana fevkalade | fevkalade çok iltica etti. .......... [[s. 32]] Türk beylerini, milletini fevkalade çok yüceltti. Övdü .......... babam kağan .......... ağır taşı, kalın ağacı Türk beyleri, milleti .......... Kendime bunca ......... Kuzey cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim, oğlum, bütün soyum, milletim, güneydeki şadpıt beyleri...
  - `Tekin 1998, s. 42` (eslesen: _aGIR TaŞIG_)
    > ...yu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bi...


## BK-G-15#4 - Bilge Kağan Yazıtı, Güney 15. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `TÜRK : BeGLeR : BODuN : İ --- İRTİ`
- **kelime karsiliklari:** TÜRK : BEĞLERİ : BOYLARI : İ --- İRDİ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BeGLeR BODuN_)
    > .... Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZ...
  - `Ata 2011, s. 139` (eslesen: _BeGLeR BODuN_)
    > ...yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “pek çok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o...
  - `Olmez 2017, s. 58` (eslesen: _BeGLeR BODuN_)
    > ...lge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinleyin" (KT G 10) ### Zarffiil ekleri: **-A, -I, -U ünlüleri (günümüz Türkçesine benzer şekilde) zarffiil eki olarak kullanılırlar:** **-A :** *ıya basıp olortı* "basıp hüküm sürdü" (Tes D 6); *teŋri tuta bėrti*...
  - `Ata 2011, s. 132` (eslesen: _BeGLeR BODuN_)
    > ...gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “pek çok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip ge...
  - `Ogel C2, s. 76` (eslesen: _TÜRK BeGLeR_)
    > ...de de, “*Hakan Efrasyab'ın ağıdında, zamanı anlatan şu parça da gelmiştir', diyordu. Bu şiirler hep, “zaman, felek ve acun” üzerine kurulmuş düşüncelerdir. [[s. 76]] Kutadgu Bili gise,onun Tü r k beylerinden olduğunu belirterek söze, şöyle başlıyordu: R “Bu Türk beglerinden atı belgülüg, Tonga Alp Er'di kutı Belgülüg”: (Bu Türk beylerinden adı ün salmış Tonga Alp Er'in ikbal ile kutu da belgelenmişti'?). Bundan sonra hahanlara öğüt, yani bir “siretü'l-mülük'; başlar. Ne bir zaman, ne bir yer ve ne hadise veya ne de bir başk...
  - `Tekin 1998, s. 19` (eslesen: _BeGLeR_)
    > ...ü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğl...


## BK-G-15#5 - Bilge Kağan Yazıtı, Güney 15. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÖZüME : BUNÇA : ---`
- **kelime karsiliklari:** ÖZÜME : BUNCA : ---
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _ÖZüME BUNÇA_)
    > ...layu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri...
  - `Ata 2011, s. 73` (eslesen: _ÖZüME_)
    > ...zümlen- meden, 1892 yılında Otto Donner (Inscriptions de l’Orkhon, Helsingfors 1892, LXXX ve devamı), Orhun alfabesini, Küçük Asya alfabelerinden Likya ve Kayra alfabelerine benzetmiş ve bu alfabelerden çıkmış olabileceğini dile getirmiştir. Alfabeyi çözüme kavuşturan Thomsen (Inscriptions de l’Orkhon déchiffrées, Helsingfors 1896, s. 44 ve devamı), Donner’in söylediklerini kabul etmemiş, Köktürk yazısının kökeninin ya İran alfabesi aracılığı ile ya da doğrudan Arami alfabesi olduğunu belirtmiştir. 1894’te...
  - `Tekin 1998, s. 19` (eslesen: _BUNÇA_)
    > ...Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve...
  - `Ergin 1970, s. 12` (eslesen: _BUNÇA_)
    > ...ydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İ...
  - `Tekin 2003, s. 40` (eslesen: _BUNÇA_)
    > ...eği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki ikiz ünsüzler runik yazıda seyrek olarak belirtilir. Başka bir deyişle, sözcük içindeki ikiz ünsüzler genellikle tek harf ile gösterilir. 1....
  - `Ata 2011, s. 55` (eslesen: _BUNÇA_)
    > ...üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışlasın, i...


## BK-K-1#1 - Bilge Kağan Yazıtı, Kuzey 1. satir  (4 kelime)

- **transkripsiyon:** `TeŊRİ : TeG : TeŊRİDE : BOLMuŞ`
- **kelime karsiliklari:** TANRI : DEK : TANRIDAN : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 15` (eslesen: _TeŊRİ TeG_)
    > ...a”, YULG BALI (yolluğ) “Yolluğ” vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince ya...
  - `Ata 2011, s. 153` (eslesen: _TeŊRİ TeG_)
    > ...ı)p öls(i)k(i)ŋ(i)n y(e)me KÖL TİGİN GÜNEY 1-10 (Muharrem Ergin, Orhun Abideleri, Boğaziçi Yayınları, 25. Baskı, İstanbul 2000’den) 145 [s. 153] Metinde Geçen Sözcüklerin Çözümlemeleri: teŋri “1. gök, gökyüzü; 2. tanrı” teŋri teg “tanrı gibi” teŋride bol- “gökyüzünde yaratılmak” +de [bulunma-çıkma durumu eki] –mış [geçmiş zaman sıfat-fiil eki] türük “Türk” (“Türk” adının Orhun Türkçesinde iki heceli olduğu yazımından anlaşılmaktadır.) öd “zaman” + ke [yönelme durumu...
  - `Olmez 2017, s. 102` (eslesen: _TeŊRİ TeG_)
    > ...ğu yüzünde 41, güney yüzünde 15 satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : s...
  - `Tekin 1998, s. 19` (eslesen: _TeG TeŊRİDE_)
    > ...z; Cz,2 M LA alt, İt > N anç, enç, nçÇ 9(T9) NE ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığd...
  - `Ata 2011, s. 146` (eslesen: _TeŊRİ TeG_)
    > ...senin) yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de KÖL TİGİN GÜNEY 1-10 (Muharrem Ergin, Orhun Abideleri, Boğaziçi Yayınları, 25. Baskı, İstanbul 2000’den) [s. 146] Metinde Geçen Sözcüklerin Çözümlemeleri: teŋri “1. gök, gökyüzü; 2. tanrı” teŋri teg “tanrı gibi” teŋride bol- “gökyüzünde yaratılmak” +de [bulunma-çıkma durumu eki] –mış [geçmiş zaman sıfat-fiil eki] türük “Türk” (“Türk” adının Orhun Türkçesinde iki heceli olduğu yazımından anlaşılmaktadır.) öd “zaman” + ke [yönelme durumu eki] olur- “oturma...
  - `Ogel C2, s. 90` (eslesen: _TeŊRİ TeG_)
    > ...den yücesin! Kimse bilmez nicesin!*” Bizce bu eöz, Türk düşüncesinde *“*“v âcibül-Vücüd”'”' anlayışının, başka bir anlatışı olsa gerektir. Eski Türklerde, Tanrı'nın vücudu için, “vâcib ül-vücüd” anlayışı var mıydı? [[s. 90]] W.Thomsen'in de yorumuna uyarak, ““Tengri teg Tengri” sözü, Göktürk yazıtlarında, “göğe veya kendine benzer Tanrı ””'inanışının bir ifadesi olmalıydı. 9) Babanın oğlundan canını esirgemesi: Bilindiği üzere, Azrail Deli Dumrul'dan canını istemesi üzerine, babası ile annesine gider ve kendisi yerine, onla...


## BK-K-1#2 - Bilge Kağan Yazıtı, Kuzey 1. satir  (5 kelime)

- **transkripsiyon:** `TÜRÜK : BİLGE : KaGaN : BÖDKE : OLuRTıM`
- **kelime karsiliklari:** TÜRK : BİLGE : KAĞAN : BÖDGE : [KAĞAN] OTURDUM
- **kanit:**
  - `Tekin 1998, s. 30` (eslesen: _TÜRÜK BİLGE KaGaN BÖDKE_)
    > ...Apa Yargan Tarkan ünvanını verdim, (onu) övdür(düm). (Mermer Kaplumbağa Üzerindeki Yazıt) (1) halk ... (2) beyler ve halk ... (3) Kül Tigin ... (4) feryatlarımı bastırdım. (5) Gözlerim ....... [s. 30] BİLGE KAĞAN YAZITI (K 1) Teüfiğri teğ Tefğride bolmış Türük Bilge Kağan, bödke olurtum. Sabımın tüketi eşid, ulayu iniygünüm oğlanım, birki uğuşum, (bodunum ................... ilgerü kün) (K 2) tuğsıkıfğğa, birgerü kün ortusıfğaru, kurığaru kün batsıkınga, yırgaru tün ortusıfığaru... anta içreki bodun kop mahfga körür. (Bunça bodun kop...
  - `Tekin 1998, s. 15` (eslesen: _TÜRÜK BİLGE KaGaN_)
    > ...vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince yazıt iyi durumda olduğundan hemen okunmuş ve...
  - `Olmez 2017, s. 102` (eslesen: _TÜRÜK BİLGE KaGaN_)
    > ...satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip...


## BK-K-1#3 - Bilge Kağan Yazıtı, Kuzey 1. satir  (31 kelime)

- **transkripsiyon:** `SaBıMıN : TÜKeTİ : eŞİD : ULaYU : İN : YeGÜNüM : OGLaNıM : BİRiKİ : OGuŞuM : BODuNuM : BİRiYE : ŞaDPIT : BeGLeR : YIRıYA : TaRKaT : BUYRUK : BeGLeR : OTuZ : TaTaR : TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN`
- **kelime karsiliklari:** SÖZÜMÜ : TÜKETENE [DEK] : İŞİT : ULAYI : EN [ÇOK] : YEĞENİM : OĞLUM : BÜTÜN : SOYUM : BOYLARIM : BERİDE : ŞADPIT : BEĞLERİ : YIRIDA : TARKAT : BUYRUK : BEĞLERİ : OTUZ : TATAR : DOKUZ : OĞUZ : BEĞLERİ : BOYLARI : BU : SÖZÜMÜ : İYİCE : İŞİT : KATICA : DİNLE : İLERİ : GÜN
- **kanit:**
  - `Tekin 1998, s. 30` (eslesen: _SaBıMıN TÜKeTİ eŞİD ULaYU_)
    > ..., (onu) övdür(düm). (Mermer Kaplumbağa Üzerindeki Yazıt) (1) halk ... (2) beyler ve halk ... (3) Kül Tigin ... (4) feryatlarımı bastırdım. (5) Gözlerim ....... [s. 30] BİLGE KAĞAN YAZITI (K 1) Teüfiğri teğ Tefğride bolmış Türük Bilge Kağan, bödke olurtum. Sabımın tüketi eşid, ulayu iniygünüm oğlanım, birki uğuşum, (bodunum ................... ilgerü kün) (K 2) tuğsıkıfğğa, birgerü kün ortusıfğaru, kurığaru kün batsıkınga, yırgaru tün ortusıfığaru... anta içreki bodun kop mahfga körür. (Bunça bodun kop itdim). Ol amtı ariylığ yok. TJürük...
  - `Ata 2011, s. 163` (eslesen: _BeGLeR YIRıYA TaRKaT BUYRUK_)
    > ...b. Emir kipi, ikinci tekil kişi c. Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi 155 [s. 163] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangi- sinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +an, +um, +ler, +t e. +gün, +an, +ya...
  - `Ata 2011, s. 156` (eslesen: _BeGLeR YIRıYA TaRKaT BUYRUK_)
    > ...ştır? a. Gelecek zaman, birinci tekil kişi b. Emir kipi, ikinci tekil kişi c. [[s. 155]] Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi [s. 156] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangisinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +an, +um, +ler, +t e. +gün, +an, +ya, +t 7. ve 8. sorular aşağıdaki cümleye g...


## BK-K-2#1 - Bilge Kağan Yazıtı, Kuzey 2. satir  (16 kelime)

- **transkripsiyon:** `TOGSıKıŊA : BİRiGeRÜ : KÜN : ORTUSIŊaRU : KURIGaRI : KÜN : BaTSIKIŊA : YIRıGaRI : TÜN : ORTUSIŊaRU : aNDA : İÇReKİ : BODuN : KOP : MaŊA : KÖRüR`
- **kelime karsiliklari:** DOĞUSUNA : BERİDE : GÜN : ORTASINA : GERİDE : GÜN : BATISINA : YIRIDA : GECE : ORTASINA : ONLARINDA : İÇİNDEKİ : BOYLAR : HEP : BANA : GÖRÜR
- **kanit:**
  - `Olmez 2017, s. 21` (eslesen: _İÇReKİ BODuN KOP MaŊA_)
    > ...lerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki hal...
  - `Tekin 2003, s. 139` (eslesen: _BODuN KOP MaŊA KÖRüR_)
    > .... 2. *içrä* zarfı niteleyici olarak da kullanılır: *apa tarkangaru içrä sab ıdmiş* "Apa Tarkan'a gizli mesaj göndermiş" (T 34) Bu zarfa {+kI} eki de eklenebilir: *içräki bädizçig ı(t)tı* "(Çin İmparatoru) saray sanatçılarını gönderdi" (BK K 14) *anta içräki bodun kop maŋa körür* "Bu sınırlar içindeki halklar hep bana tabidir" (BK K 2) **308.** *taşra* "dışarı, dışarıya, dışarda" < *taş* "dış": *içrä aşsız taşra tonsuz* "karnı aç sırtı çıplak" (KT D 26) *taşra yorıyur teyin kü eşidip* "Baş kaldırıyor" (harf. "dışarı yürüyor") diye h...
  - `Tekin 1998, s. 30` (eslesen: _İÇReKİ BODuN KOP_)
    > ...ri teğ Tefğride bolmış Türük Bilge Kağan, bödke olurtum. Sabımın tüketi eşid, ulayu iniygünüm oğlanım, birki uğuşum, (bodunum ................... ilgerü kün) (K 2) tuğsıkıfğğa, birgerü kün ortusıfğaru, kurığaru kün batsıkınga, yırgaru tün ortusıfığaru... anta içreki bodun kop mahfga körür. (Bunça bodun kop itdim). Ol amtı ariylığ yok. TJürük (Kağlan Ötüken |yılş olursar il)te |bung) yok. [[s. 30]] İlglerü Şlantunğ Iyazıka teği süledim, taluyka kiçiğ teğmedim;) blilrg<er>ü Tfokuz| (K 3) Ersinke teği süledim, Tüpütke kiçiğ teğmedim...


## BK-K-2#2 - Bilge Kağan Yazıtı, Kuzey 2. satir  (4 kelime)

- **transkripsiyon:** `BUNÇA : BODuN : KOP : İTDiM`
- **kelime karsiliklari:** BUNCA : BOYLARI : HEP : [DÜZEN] ETTİM
- **kanit:**
  - `Tekin 1998, s. 30` (eslesen: _BUNÇA BODuN KOP İTDiM_)
    > ...ge Kağan, bödke olurtum. Sabımın tüketi eşid, ulayu iniygünüm oğlanım, birki uğuşum, (bodunum ................... ilgerü kün) (K 2) tuğsıkıfğğa, birgerü kün ortusıfğaru, kurığaru kün batsıkınga, yırgaru tün ortusıfığaru... anta içreki bodun kop mahfga körür. (Bunça bodun kop itdim). Ol amtı ariylığ yok. TJürük (Kağlan Ötüken |yılş olursar il)te |bung) yok. [[s. 30]] İlglerü Şlantunğ Iyazıka teği süledim, taluyka kiçiğ teğmedim;) blilrg<er>ü Tfokuz| (K 3) Ersinke teği süledim, Tüpütke kiçiğ teğmedim; kurığaru Yinçü üğüz keçe Temir Kapı...
  - `Tekin 2003, s. 105` (eslesen: _BODuN KOP İTDiM_)
    > ...ya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *b...
  - `Tekin 1998, s. 21` (eslesen: _BUNÇA BODuN_)
    > ...eri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler) benim sözümü kırmadılar (ve) (G 12) Çin hakanının has sanatçıların...
  - `Tekin 2003, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...anta yası taşka yaratıtdım* "Bin yıllık on bin günlük yazıtımı ve damgamı orada yassı taş üzerine yazdırttım" (MÇ D 9-10) **290.** *bu* gösterme zamirinin eşitlik durumu olan *bunça* "bunca, bu kadar" sözcüğü de belirsizlik sayısı görevi ile kullanılabilir: *bunça bodun kälipän sıgtamiş yoglamiş* "...bunca halk(ların temsilcileri) gelip ağlamış ve yas tutmuş" (KT D 4, BK D 5) *bunça bädizçig tuygun eltäbär käl(ür)ti* "Bunca ressam ve heykeltraşı [s. 135] # s. 135 — ORHON TÜRKÇESİ GRAMERİ Tuygun Elteber getirdi" (KT KD) *bu...
  - `Ata 2011, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre ini...
  - `Tekin 1998, s. 26` (eslesen: _BODuN KOP_)
    > ...otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 4...


## BK-K-2#3 - Bilge Kağan Yazıtı, Kuzey 2. satir  (11 kelime)

- **transkripsiyon:** `OL : aMTI : aYNıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ`
- **kelime karsiliklari:** O[NUN] : ŞİMDİ : AYNISI : YOK : TÜRK : KAĞANI : ÖTÜKEN : YIŞDA : OTURURSA : İLDE : BUNG
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _KaGaN ÖTÜKeN YIŞ OLuRSaR_)
    > ...uz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği y...
  - `Olmez 2017, s. 83` (eslesen: _YOK TÜRK KaGaN_)
    > ...üken yış : olorsar : ėlte : bun yok : ilgerü : śantun : yazıka tegi : süledim : taloyka kičig : tegmedim : bėrigerü : tokuz : ersinke : tegi : süledim : töpötke : kičig tegmedim : kᵘrıgaru : yeńčü ügüz* “tamamını düzene soktum. Şimdi onların (hiçbir) kaygısı yok. Türk Kağanı Ötüken topraklarında hüküm sürerse ülkede sıkıntı çıkmaz. Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet’e bir kez bile varmadım. Batıda Sır Derya’yi” --- **kop ėtdim** < \**ėt-...
  - `Ata 2011, s. 53` (eslesen: _ÖTÜKeN YIŞ OLuRSaR_)
    > ...cak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orho...
  - `Ata 2011, s. 46` (eslesen: _ÖTÜKeN YIŞ OLuRSaR_)
    > ...yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. [[s. 46]] Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orhon Yazıtları, Türk Dil Kurumu...


## BK-K-2#4 - Bilge Kağan Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `YOK : İLGeRÜ : ŞaNTUŊ`
- **kelime karsiliklari:** YOK : İLERİ : ŞANTUNG
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _YOK İLGeRÜ ŞaNTUŊ_)
    > ...i eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi y...
  - `Olmez 2017, s. 83` (eslesen: _YOK İLGeRÜ ŞaNTUŊ_)
    > ...a görünür bir dipnot metni yoktur; satır sonunda yalnızca ³ işareti bulunmaktadır.)* [s. 83] # s. 081 — Runik metin ( satır Runik harf çevirisi) (basılı sayfa numarası 83) > *kᵒp : ėtdim : ol amtı ańıg yok : türᶦk : kagan : ötüken yış : olorsar : ėlte : bun yok : ilgerü : śantun : yazıka tegi : süledim : taloyka kičig : tegmedim : bėrigerü : tokuz : ersinke : tegi : süledim : töpötke : kičig tegmedim : kᵘrıgaru : yeńčü ügüz* --- G 3. *kᵒp : ėtdim : ol amtı ańıg yok : türᶦk : kagan : ötüken yış : olorsar : ėlte : bun yok : ilgerü :...
  - `Ata 2011, s. 118` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...sterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ort...
  - `Olmez 2017, s. 21` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...e işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer...
  - `Ata 2011, s. 111` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...]] T 11 c.+gArU yön gösterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … [[s. 111]] temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gec...
  - `Ogel C2, s. 420` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...larak durmuştuk” Ancak o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s....


## BK-K-2#5 - Bilge Kağan Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `YaZIKA : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** OVASINA : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...dığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 118` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gec...
  - `Olmez 2017, s. 21` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...ca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Ata 2011, s. 111` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...U yön gösterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … [[s. 111]] temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK...
  - `Ogel C2, s. 420` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...Ancak o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...


## BK-K-2#6 - Bilge Kağan Yazıtı, Kuzey 2. satir  (5 kelime)

- **transkripsiyon:** `TaLUYKA : KİÇiG : TeGMeDiM : BİRiGeRÜ : TOKUZ`
- **kelime karsiliklari:** TALUYA : GEÇİP : DEĞMEDİM : BERİDE : DOKUZ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TaLUYKA KİÇiG TeGMeDiM_)
    > ...vermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözl...
  - `Ogel C1, s. 480` (eslesen: _TaLUYKA KİÇiG TeGMeDiM_)
    > ...lsa gerekti. Bu bölüme girerken Türklerde Okyanus karşılığı olarak kullanılan asıl deyimin Taluy olduğunu söylemiştik. Taluy tam bir Okyanus karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan d...
  - `Olmez 2017, s. 21` (eslesen: _KİÇiG TeGMeDiM_)
    > ...doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye...
  - `Ogel C2, s. 420` (eslesen: _KİÇiG TeGMeDiM_)
    > ...eni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy sözü, türkçeye çoktan yerleşmi...
  - `Ogel C1, s. 478` (eslesen: _TeGMeDiM_)
    > ...fhumu ise, uzun zaman Türklerin bilgileri dışında kalmıştı. Göktürk İmparatorluğu ile birlikte Türkler, büyük denizleri görme ve tanıma imkânına da kavuşmuşlardı. [[s. 478]] Büyük Göktürk Kağanı İl-Teriş Kağan, Çin'e yaptığı savaşlardan söz açarken, “Taluyka tegmedim” yani, “Çin denizine, Büyük okyanus'a değmedim, erişmedim, diyordu. Göktürk çağında Taluy sözü “Büyük deniz” ve “Okyanus” karşılığı olarak kullanılıyordu. Ne yazık ki, bu sözün aslı da türkçe değildi. Bu bilgi, Hint ve Tibet yolu ile, Dalay sözünden geliyordu...


## BK-K-3#1 - Bilge Kağan Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `eRSiNKE : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** ERSİNE : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _eRSiNKE TeGİ SÜLeDiM_)
    > ...kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak...
  - `Olmez 2017, s. 21` (eslesen: _eRSiNKE TeGİ SÜLeDiM_)
    > ...ın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer e...
  - `Ata 2011, s. 112` (eslesen: _TeGİ SÜLeDiM_)
    > ...eneral Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Ata 2011, s. 105` (eslesen: _TeGİ SÜLeDiM_)
    > ...üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...
  - `Ogel C2, s. 420` (eslesen: _TeGİ SÜLeDiM_)
    > ...o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...
  - `Ogel C2, s. 384` (eslesen: _SÜLeDiM_)
    > ...uyyynun çeşitli kollarıyla ayakları vardı. Her ne olursa"olsun, bunlar da büyük ırmaklardı. Battı Türkistan'ı temsil eden sulardı. Külte gi n yazıtında, şöyle deniyordu: “.. Batıda, Ye n çü ırmağını (ögüz) geçerek (keçe), D e - mir Kapı *ya kadar akın yaptım (süledim)*. [[s. 384]] Aynı sözler, -küçük gramer ayrılığıyla-, Ton yu ku k yazıtı içinde de görülüyordu*?. 2) Çin'de: “Yaşıl Ögüz'? Yeşil ırmak. Bu, Çin'in ünlü S ar ırmağı idi. Bu ırmağa Batı ile biz, “sarı” rengi vermiş ve “Sarı ırmak” demişizdir. Çin'de ise buna,...


## BK-K-3#2 - Bilge Kağan Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `TÜPÜTKE : KİÇiG : TeGMeDiM`
- **kelime karsiliklari:** TİBETE : GEÇİP : DEĞMEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TÜPÜTKE KİÇiG TeGMeDiM_)
    > ...ğaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ...
  - `Olmez 2017, s. 21` (eslesen: _KİÇiG TeGMeDiM_)
    > ...doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye...
  - `Ogel C1, s. 480` (eslesen: _KİÇiG TeGMeDiM_)
    > ...kti. Bu bölüme girerken Türklerde Okyanus karşılığı olarak kullanılan asıl deyimin Taluy olduğunu söylemiştik. Taluy tam bir Okyanus karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan d...
  - `Ogel C2, s. 420` (eslesen: _KİÇiG TeGMeDiM_)
    > ...eni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy sözü, türkçeye çoktan yerleşmi...
  - `Ata 2011, s. 151` (eslesen: _TÜPÜTKE_)
    > ...t(a)luyka kiç(i)g denize pek az kala durdum. Güney t(e)gm(e)d(i)m bir(i)g(e)rü to͡kuz yönünde Dokuz Ersin’e kadar asker (e)rs(i)nke t(e)gi sül(e)d(i)m tüpütke sevk ettim, Tibet’e ulaşmama az kaldı. Batıda İnci (Sır Derya) kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru ırmağını y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi geçerek Dem...
  - `Tekin 2003, s. 110` (eslesen: _KİÇiG_)
    > ...1) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şantung ovasına kadar sefer ettim" (KT G 3) 2. {+ŋA}. Üçüncü kişi iyelik ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da...


## BK-K-3#3 - Bilge Kağan Yazıtı, Kuzey 3. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `KURIGaRI : YiNÇÜ : ÖGüZ --- : KeçE : TeMiRKaPıGKA : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** GERİDE : İNCİ : ÖGÜZÜ... : GEÇİP : DEMİRKAPIYA : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TeGİ SÜLeDiM_)
    > ...kanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 112` (eslesen: _TeGİ SÜLeDiM_)
    > ...eneral Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Olmez 2017, s. 21` (eslesen: _TeGİ SÜLeDiM_)
    > ...eyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Ata 2011, s. 105` (eslesen: _TeGİ SÜLeDiM_)
    > ...üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...
  - `Ogel C2, s. 420` (eslesen: _TeGİ SÜLeDiM_)
    > ...o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...
  - `Ogel C2, s. 384` (eslesen: _SÜLeDiM_)
    > ...uyyynun çeşitli kollarıyla ayakları vardı. Her ne olursa"olsun, bunlar da büyük ırmaklardı. Battı Türkistan'ı temsil eden sulardı. Külte gi n yazıtında, şöyle deniyordu: “.. Batıda, Ye n çü ırmağını (ögüz) geçerek (keçe), D e - mir Kapı *ya kadar akın yaptım (süledim)*. [[s. 384]] Aynı sözler, -küçük gramer ayrılığıyla-, Ton yu ku k yazıtı içinde de görülüyordu*?. 2) Çin'de: “Yaşıl Ögüz'? Yeşil ırmak. Bu, Çin'in ünlü S ar ırmağı idi. Bu ırmağa Batı ile biz, “sarı” rengi vermiş ve “Sarı ırmak” demişizdir. Çin'de ise buna,...


## BK-K-3#4 - Bilge Kağan Yazıtı, Kuzey 3. satir  (6 kelime)

- **transkripsiyon:** `YIRıGaRU : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** YIRIDA : YİR : BAYIRKU : YERİNE : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _YiR BaYıRKU YİRİŊE TeGİ_)
    > ...] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben),...
  - `Olmez 2017, s. 21` (eslesen: _YIRıGaRU YiR BaYıRKU_)
    > ...risindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet'e bir kez bile varmadım. Batıda Sır Derya'yı geçip Temir Kapıg'a kadar sefer ettim....
  - `Ergin 1970, s. 12` (eslesen: _YiR BaYıRKU_)
    > ...Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk ettim. Bunca yere kadar yürüttüm. Ötüken ormanından daha iyisi hiç yokmuş, il tutacak yer Ötüken ormanı imiş. [[s. 12]] Bu yerde oturup Çin milleti ile | anlaştım. Altını, O R H U N Â B İ D E L E R İ [s. 13] M U H A R R E M E R G İ...
  - `Tekin 2003, s. 138` (eslesen: _YiR BaYıRKU_)
    > ...Çin'e doğru..." (KT D 28, BK D 23), vb. **302.** *yırgaru* "kuzeye doğru, kuzeyde" < *\*yırı* "kuzey": *yırgaru tün ortosıŋaru* "kuzeyde gece ortasına doğru" (KT G 2, BK K 2) *yırgaru oguz bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıgaç tutunu agturtum* "(Askerleri), atları yederek, yayan ve ağaçlara tu...
  - `Ata 2011, s. 151` (eslesen: _YiR BaYıRKU_)
    > .... Batıda İnci (Sır Derya) kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru ırmağını y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi geçerek Demir Kapı’ya kadar asker sül(e)d(i)m yır(ı)g(a)ru y(i)r sevk ettim. Kuzeyde Yir Bayırku b(a)y(ı)rku͡ u yiriŋe t(e)gi sül(e)d(i)m yerine (ülkesine) kadar asker sevk bunç͡ a yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından...
  - `Tekin 1998, s. 11` (eslesen: _TeGİ SÜLeDiM_)
    > ...kanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...


## BK-K-3#5 - Bilge Kağan Yazıtı, Kuzey 3. satir  (4 kelime)

- **transkripsiyon:** `BUNÇA : YİRKE : TeGİ : YORuTDıM`
- **kelime karsiliklari:** BUNCA : YERE : DEĞİN : [ORDU] YÜRÜTTÜM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BUNÇA YİRKE TeGİ_)
    > ...Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan...
  - `Ata 2011, s. 128` (eslesen: _BUNÇA YİRKE_)
    > ...inti c. tabgaçka yeti yegirmi süŋüşdi d. üçegün kabışıp sülelim e. oguzka beş süŋüşdi 8. Aşağıdakilerden hangisinde işaret zamirinin yönelme durumuyla çekimi vardır? a. aŋar b. anta c. aŋaru d. anı e. anıŋ 9. bunça yirke … yorıttım ‘Bunca yere ... ordularımı yürüttüm.’ cümle- sinde boş bırakılan yere aşağıdaki sontakılardan hangisi getirilmelidir? a. üze b. kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kulla...
  - `Ata 2011, s. 121` (eslesen: _BUNÇA YİRKE_)
    > .... bir yılka biş yolı süŋüşdümüz b. üç kata tegzinti c. tabgaçka yeti yegirmi süŋüşdi d. üçegün kabışıp sülelim e. oguzka beş süŋüşdi 8. Aşağıdakilerden hangisinde işaret zamirinin yönelme durumuyla çekimi vardır? a. aŋar b. anta c. aŋaru d. anı e. anıŋ 9. bunça yirke … yorıttım ‘Bunca yere ... ordularımı yürüttüm.’ cümlesinde boş bırakılan yere aşağıdaki sontakılardan hangisi getirilmelidir? a. üze b. [[s. 121]] kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kullanılmıştır? a. atıg ıka...
  - `Ergin 1970, s. 12` (eslesen: _BUNÇA_)
    > ...ydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İ...
  - `Tekin 2003, s. 40` (eslesen: _BUNÇA_)
    > ...eği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki ikiz ünsüzler runik yazıda seyrek olarak belirtilir. Başka bir deyişle, sözcük içindeki ikiz ünsüzler genellikle tek harf ile gösterilir. 1....
  - `Ata 2011, s. 55` (eslesen: _BUNÇA_)
    > ...üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışlasın, i...


## BK-K-3#6 - Bilge Kağan Yazıtı, Kuzey 3. satir  (4 kelime)

- **transkripsiyon:** `ÖTÜKeN : YIŞDA : YİG : İDİ`
- **kelime karsiliklari:** ÖTÜKEN : YIŞ : YEĞ : İDİ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _ÖTÜKeN YIŞDA YİG İDİ_)
    > ...g yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu dev...
  - `Tekin 2003, s. 147` (eslesen: _YIŞDA YİG İDİ_)
    > ...G 15) **337.** *takı* “daha” < *\*tak-* “takmak”: [s. 147] # s. 147 — ORHON TÜRKÇESİ GRAMERİ *täŋri bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş* “Kutsal Bilge Hakana daha hizmet edeceğim var imiş anlaşılan” (O sağ 2) **338.** *idi* “hiç”: - *ötükän yışda yig idi yok ärmiş* “Ötüken dağlarından daha iyi bir yer hiç yok imiş” (KT G 4) - *ekin ara idi oksız kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç kabile örgütü olmayan Doğu Türklerini düzene sokup öylece hükmederlermiş” (BK D 4) - *türk sir bodun y...
  - `Ata 2011, s. 151` (eslesen: _YIŞDA YİG İDİ_)
    > ...asker sül(e)d(i)m yır(ı)g(a)ru y(i)r sevk ettim. Kuzeyde Yir Bayırku b(a)y(ı)rku͡ u yiriŋe t(e)gi sül(e)d(i)m yerine (ülkesine) kadar asker sevk bunç͡ a yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle...
  - `Ata 2011, s. 144` (eslesen: _YIŞDA YİG İDİ_)
    > ...(e)rs(i)nke t(e)gi sül(e)d(i)m tüpütke kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi sül(e)d(i)m yır(ı)g(a)ru y(i)r b(a)y(ı)rk͡uu yiriŋe t(e)gi sül(e)d(i)m bun͡ça yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n [[s. 144]] yışda yig idi yo͡k (e)rm(i)ş il tuts(ı)k yir ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p t(a)bg(a)ç bod(u)n birle G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti k͡uut(a)y buŋs(u)z (a)nça birür t(a)bg(a)ç bod(u)n s(a)bı süçig (a)gısi yimşak (e)rm(i)ş süçig s(a)b(ı)n y(i)mş(ak) (a)gı...


## BK-K-3#7 - Bilge Kağan Yazıtı, Kuzey 3. satir  (7 kelime)

- **transkripsiyon:** `eRMiŞ : İL : TUTSıK : YİR : ÖTÜKeN : YIŞ : eRMiŞ`
- **kelime karsiliklari:** İMİŞ : İL : TUTULASI : YER : ÖTÜKEN : YIŞ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _eRMiŞ İL TUTSıK YİR ÖTÜKeN YIŞ eRMiŞ_)
    > ...zıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan son...
  - `Ata 2011, s. 53` (eslesen: _İL TUTSıK YİR ÖTÜKeN_)
    > ...p yanına alır. Tonyukuk, Çin’de büyümüş, Çin terbiyesi alarak Çin’in politikalarını öğrenmişti. Çin’in entrikalarıyla Türklerin başa çıkamayacağını bildiği için daima Çin’den uzakta bulunan bir Türk ili düşünmüş, bunun için de Ötüken’i göstermiştir. il tutsık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olu...
  - `Ata 2011, s. 46` (eslesen: _İL TUTSıK YİR ÖTÜKeN_)
    > ...p yanına alır. Tonyukuk, Çin’de büyümüş, Çin terbiyesi alarak Çin’in politikalarını öğrenmişti. [[s. 46]] Çin’in entrikalarıyla Türklerin başa çıkamayacağını bildiği için daima Çin’den uzakta bulunan bir Türk ili düşünmüş, bunun için de Ötüken’i göstermiştir. il tutsık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. [[s. 46]] Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir o...


## BK-K-3#8 - Bilge Kağan Yazıtı, Kuzey 3. satir  (7 kelime)

- **transkripsiyon:** `BU : YİRDE : OLuRuP : TaBGaÇ : BODuN : BİRLE : TÜZüLTüM`
- **kelime karsiliklari:** BU : YERDE : OTURUP : TABGAÇ : BOYLARI : İLE : TÜZÜLTTÜM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BU YİRDE OLuRuP TaBGaÇ_)
    > ...m; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erke...
  - `Ata 2011, s. 151` (eslesen: _BU YİRDE_)
    > ...irke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle Bu yerde oturup Çin halkı ile G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti barış yaptım (ilişkileri düzelttim). k͡uut(a)y buŋs(u)z (a)nça birür...
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ BODuN_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin ya...
  - `Tekin 2003, s. 110` (eslesen: _TaBGaÇ BODuN_)
    > ...ben), Prens Yollug, yazdım" (KT GD) *çorak+ka tägip* "çorak araziye varıp" (BK GD) *äb+kä tägdöküm* "Karargaha vardım" (O 11) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şantung ovasına kadar sefer ettim" (KT G 3) 2. {+ŋA}. Üçüncü kişi iye...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ BODuN_)
    > ...erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türü...
  - `Olmez 2017, s. 84` (eslesen: _BODuN BİRLE_)
    > ...[?] [?] [?] ***G 4.*** *keçe : temir kapigka[?] tegi : süledim : yırıgaru : yır bayurk[?] yėriye : tegi : süledim : bonça yėrke : tegi : yoritdım : ötüken : yışda : yèg : idi yok : ermiş : ėl tutsık : yėr : ötüken : yış ermiş : bo yėrde : olorup : tavgaç[?] bodun : birle :* "geçip Temir Kapığ'a kadar sefer ettim. Kuzeyde Yır Bayırkların topraklarına kadar sefer ettim. Bu kadar yere sefer ettirdim. Ötüken topraklarından daha iyisi kesinlikle yokmuş. Ülke kurulacak topraklar Ötüken topraklarıymış. Burada hüküm sürüp Çin halkıy...


## BK-K-3#9 - Bilge Kağan Yazıtı, Kuzey 3. satir  (3 kelime)

- **transkripsiyon:** `aLTUN : KÜMüŞ : İŞGiTİ`
- **kelime karsiliklari:** ALTINI : GÜMÜŞÜ : İŞGİTİ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _aLTUN KÜMüŞ İŞGiTİ_)
    > ...im; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve) halkım,...
  - `Tekin 2003, s. 145` (eslesen: _aLTUN KÜMüŞ İŞGiTİ_)
    > ...ŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü develeri ve i...
  - `Ata 2011, s. 120` (eslesen: _aLTUN KÜMüŞ_)
    > ...lerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dön...
  - `Olmez 2017, s. 22` (eslesen: _aLTUN KÜMüŞ_)
    > ...lay yönetmesi C. Findley'in çalışmasına da yansır (2006, s. 54): Taizong strateji olarak bir yandan Batı Türklerine şirin görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verir...
  - `Ata 2011, s. 113` (eslesen: _aLTUN KÜMüŞ_)
    > ...gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dedil...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 205` (eslesen: _aLTUN KÜMüŞ_)
    > ...kelenmiş ise de yazma nüshada "İÜ nelik" imlâsındadır. Yine bu ira mebDv.I, 412, 13 te ". İĞ nelek", II, 209, oda”, > lek", I11,285,2 de "— “İl nelik" şekillerinde geçmektedir; düşünülsün. * B.A. (#1 Bu kelime basma nüshada gördüğünüz şekilde ise de yazmar Altun kümüş yudhurdum Süyi kalın kim öter "Koç yiğitlerini seçtim, boyunlarını büktürdüm, altınlarını, gümüşlerini aldım; askeri çok kim geçer 7". [[y. 205]] (Bir savaşı anlatarak diyor ki: Tuşman eskerini ayırdım, boyunlarını oğdirdim, bazivelerindeki altın ve gümüşleri...


## BK-K-4#1 - Bilge Kağan Yazıtı, Kuzey 4. satir  (4 kelime)

- **transkripsiyon:** `KUTaY : BUŊSuZ : aNÇA : BİRÜR`
- **kelime karsiliklari:** KUTAYI : BUNGSUZ : ANCA : VERİR
- **kanit:**
  - `Olmez 2017, s. 22` (eslesen: _BUŊSuZ aNÇA_)
    > ...in çalışmasına da yansır (2006, s. 54): Taizong strateji olarak bir yandan Batı Türklerine şirin görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri...
  - `Tekin 1998, s. 19` (eslesen: _aNÇA BİRÜR_)
    > ...Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve) halkım, sağdaki Şadapıt beyler, so...
  - `Tekin 2003, s. 145` (eslesen: _aNÇA BİRÜR_)
    > ...ä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü develeri ve ipekli kumaşları fazlasıy...
  - `Tekin 1998, s. 32` (eslesen: _BUŊSuZ_)
    > ...ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua...
  - `Tekin 2003, s. 241` (eslesen: _BUŊSuZ_)
    > ...ALAT TEKİN (basılı sayfa numarası 242) - **bunı** bunu - **bunta** burada - **bunt(u)t-** (?) (uykusunu) kaçırtmak (?) (T 19) - **buŋ** ihtiyaç, yokluk; dert, sıkıntı - **buŋad-** bunalmak, sıkılmak - **buŋsız** fazlasiyle, bol bol, esirgemeden (T 48); bk. **buŋsuz** - **buŋsuz** bk. **buŋsız** - **buŋusuz** (Barık II 3); bk. **buŋsız, buŋsuz** - **Burgu** yer adı (MÇ D 3, Tar. B 4) - **busanç** acı, ıstırap (IB 52) - **busuşlug** kederli, üzgün (IB 52) - **buyruk** yüksek görevli, kumandan - **Buyla** yüksek bir unvan...
  - `Ata 2011, s. 98` (eslesen: _BUŊSuZ_)
    > ...+lik ‘bey olmaya layık, bey olası’ (KT D24) < beg ‘bey’ (KT D20) adgır+lık ‘aygır olacak olan’ (Irk Bitig 5) < adgır ‘aygır’ (KT D36) öz+lük ‘kişiye ait, şahsi’ (Küli Çor D3) < öz ‘kendi’ 12. +sXz: Yokluk sıfatları türetir.. buŋ+suz ‘bunsuz, dertsiz, tasasız’ (BK K12) < buŋ ‘dert, sıkıntı, sıkıntı’ (KT G3) san+sız ‘sayısız’ (BK G12) < san ‘sayı’ ög+süz ‘öksüz, annesiz’ (KT K9) < ög ‘anne, üvey anne’ (KT K9) aş+sız ‘aşsız, yemeksiz, fakir’ (KT D26) < aş ‘yemek, yiy...


## BK-K-4#2 - Bilge Kağan Yazıtı, Kuzey 4. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YIMŞaK : eRMiŞ`
- **kelime karsiliklari:** TABGAÇ : BOYLARININ : SÖZÜ : SÜÇİ : AĞISI : YUMUŞAK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Els...
  - `Ata 2011, s. 162` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > ...siz geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. 154 [s. 162] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak mill...
  - `Ata 2011, s. 155` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > ...i] –mış [3. [[s. 154]] tekil kişi belirsiz geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. [s. 155] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırı...


## BK-K-4#3 - Bilge Kağan Yazıtı, Kuzey 4. satir  (10 kelime)

- **transkripsiyon:** `SÜÇİG : SaBıN : YIMŞaK : aGIN : aRıP : IRaK : BoDuNuG : aNÇA : YaGUTIR : eRMiŞ`
- **kelime karsiliklari:** SÜÇİ : SÖZÜ : YUMUŞAK : ÂĞI [İLE] : ARIP : IRAK : BOYLARI : ANCA : YAĞUTUR : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > .... 19]] Bu yerde oturup Çin halkı ile (G 5) (ilişkileri) düzelttim. (Çinliler) altın(1), gümüşlü), ipeğ(i) (ve) ipekli kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking!...
  - `Ata 2011, s. 162` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > ...yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. 154 [s. 162] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırırmış. b. Çin halkının sözü keskin, ze...
  - `Ata 2011, s. 155` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > ...geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. [s. 155] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırırmış. b. Çin halkının sözü keskin, zehri öldürücü olduğu için...
