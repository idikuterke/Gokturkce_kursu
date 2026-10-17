# Ceviri istek paketi 22 - Orhun cumlecikleri

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


## BK-D-29#1 - Bilge Kağan Yazıtı, Doğu 29. satir  (6 kelime)

- **transkripsiyon:** `BİR : YAŞIMA : KARLUK : BODuN : BUŊSUZ : ERÜR`
- **kelime karsiliklari:** BİR : YAŞIMDA : KARLUK : BOYLARI : BUNGSUZ : ERİR
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _BİR YAŞIMA KARLUK BODuN_)
    > ...ln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tef...
  - `Tekin 2003, s. 168` (eslesen: _BİR YAŞIMA KARLUK BODuN_)
    > ...eket eder" anlamında kalıplaşmış bir söz öbeği oluşturulur: *kül tigin yiti otuz yaşıŋa karluk bodun er-ür bar-ur ärkli yagı boltı* "Prens Kül yirmi yedi yaşında (iken) Karluk halkı (serbestçe) gelir gider (hareket eder) bir düşman oldu" (KT K 1) *otuz artukı bir yaşıma karluk bodun buŋsız [er]-ür bar-ur ärkli yagı boltı* "Otuz bir yaşımda Karluk halkı serbestçe ve fütursuzca gelir gider bir düşman oldu" (BK K 29) 3. Bu eylem sıfatı {+çA} ekini de alabilir: *üzä täŋri köbürg(ä)si ät-är+çä* "yukarıdaki gök davulu gümbürder gibi" (BK B 3-...
  - `Olmez 2017, s. 45` (eslesen: _BİR YAŞIMA_)
    > ...a savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 defa sefer etmiş", *otuz artokı bir yaşıma* "31 yaşımda", *otuz artokı üç yaşıma* "33 yaşımda". Bazin'in belirttiğine göre *artokı* ile kurulan sayı sisteminin kalıntıları Yakutlar arasında 19. yüzyıla kadar sürmüştür: *uon orduga bir* (= *\*on artokı bir*) "on bir". L. Clark'a göre de bugün Çin'in G...
  - `Tekin 1998, s. 27` (eslesen: _KARLUK BODuN_)
    > ...lkını orada öldürmüş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kı...
  - `Olmez 2017, s. 64` (eslesen: _KARLUK BODuN_)
    > .... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada...
  - `Tekin 1998, s. 37` (eslesen: _YAŞIMA_)
    > ...bodunuğ tfirglürü iğittim. Yalang bodunuğ tonluğ kıltım, çığariy bodunuğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım...


## BK-D-29#2 - Bilge Kağan Yazıtı, Doğu 29. satir  (4 kelime)

- **transkripsiyon:** `BARUR : ERKLİ : YAGI : BOLDI`
- **kelime karsiliklari:** VARIR : ERKLİ : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BARUR ERKLİ YAGI_)
    > ...üş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Ş...
  - `Olmez 2017, s. 64` (eslesen: _BARUR ERKLİ YAGI_)
    > ...ilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bi...
  - `Tekin 1998, s. 15` (eslesen: _BARUR_)
    > ...di” vb. , 7.2. Ünsüzlerle ilgili yazım kuralları ş 8. Art (kalın) ünsüz işaretleri (B, D, G,K,L, N,R, S,T, Y) art ünlülü sözcüklerdeki, ön (ince) ünsüz işaretleri (b, d, g, k, 1, n, T, s, t, y) ön ünlülü sözcüklerdeki ünsüzlerin yazımında kullanılır: BRUR (barur) “varır, gider”, blrÜr (birür) “verir” vb. gibi. [[s. 15]] 9. Ön ünlülü sözcüklerdeki /s/ ünsüzünü göstermek için kullanılan ince /s/ işareti aynı zamanda ön ünlülü sözcüklerdeki ve -mış/-miş ekindeki /ş/ ünsüzünü göstermek için de kullanılır: kIsI (kişi), b...
  - `Tekin 2003, s. 60` (eslesen: _BARUR_)
    > ...nlü benzeşmeleri aşağıdaki örneklerde görülür: 1. *antag* "öyle, onun gibi" (KT D 4, 40; BK D 5; T 9, 36) < *antäg* (T 29) < *anı täg 2. *b(i)rd(i)n-yän* "güney tarafından" (T 11) < *birdin yan, *öŋd(ü)n-yän* "doğu tarafından" (T 11) < *öŋdün yan* 3. *erür barur* "(serbestçe) gelir gider, bağımsız" (KT K 1, BK D 29) < *erür barır, *yatu kalur* "yata kalır" (T 19) < *yatu kalır ## Gerileyici Benzeşme **93.** İlk ve orta hecelerin düz-dar ünlüsü izleyen hecenin ya da sözcüğün yuvarlak ünlüsünün etkisi ile yuvarlaklaş...
  - `Tekin 1998, s. 12` (eslesen: _ERKLİ_)
    > ...ndiği bir atasözü olmalıdır. [[s. 12]] Tunyukuk, Şad ünvanını taşıyan ve sadece yedi yüz kişilik küçük bir kuvveti olan Kutluğ'u kağan ilan etmenin isabetli bir karar olup olmayacağını düşünürken duruma uygun olan bu atasözünü hatırlıyor ve kullanıyor. Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka kalın bolsar topulgalı alp ermiş, yinçge yoğun bolsar üzgülük alp ermiş “(Bir şey) yufka iken (onu) delmek kolay imiş; ince olanı kırmak kolay; yufka kalın olursa (onu) delmek zor [[s. 12]] ORHON YAZITLA...
  - `Tekin 2003, s. 118` (eslesen: _ERKLİ_)
    > ...a çalışmasam ve başarılı olmasaydım..." (BK D 33) *korıgu eki üç kişi+ligü täzip bardı* "(Kale) muhafızı iki üç kişi ile birlikte kaçıp gitti" (BK D 41) *tört ini+ligü ärtimiz bizni ärklig adırtı* "Biz hep birlikte dört erkek kardeştik. Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I sağ 2) Birliktelik eki {+lIgU}, Uygurcada {+lUgUn} biçimindedir. [s. 119] # s. 119 — ORHON TÜRKÇESİ GRAMERİ ## Zamirler ## Kişi zamirleri **271.** Orhon Türkçesindeki gerçek kişi zamirleri şunlardır: *bän* ~ *män* "ben", *sän* "sen",...


## BK-D-29#3 - Bilge Kağan Yazıtı, Doğu 29. satir  (4 kelime)

- **transkripsiyon:** `TAMAG : IDUK : BAŞDA : SÜŊÜŞDÜM`
- **kelime karsiliklari:** TAMAG : IDUK : BAŞDA : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _TAMAG IDUK BAŞDA SÜŊÜŞDÜM_)
    > ...apa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı bolt...
  - `Tekin 1998, s. 27` (eslesen: _TAMAG IDUK BAŞDA_)
    > ...26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip op...
  - `Ergin 1970, s. 20` (eslesen: _TAMAG IDUK_)
    > ...vam halkını orda öldürmüş, yenmiş. Tekrar yürüyüp....... Kuzey cephesi ......... ile, Koşu vali ile savaşmış. Askerini hep [s. 20] öldürmüş. Evini, malını eksiksiz hep getirdi. Kül Tigin yirmi yedi yaşına gelince Karluk kavmi hür ve müstakil iken düşman oldu.Tamag Iduk Başta savaştık. | Kül Tigin o savaşta otuz yaşında idi. Alp Şalçı ata binip atılarak hücum etti. İki eri takip edip kovalayarak mızrakladı. Karluku öldürdük, yendik. Az milleti düşman oldu. Kara Gölde savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı atına...
  - `Tekin 2003, s. 252` (eslesen: _TAMAG IDUK_)
    > ...ğ - **tagık-** dağa çıkmak - **takı** dahi, daha; henüz (KT G 3, O 10, IB 33) - **takıgu** tavuk (yıl adı) - **talım** yırtıcı; cesur, cüretkar (IB 3, vb.) - **taloy** deniz, okyanus - **talula-** seçmek (IB 19) - **tām** duvar (KT G-D) - **Tamag** yer adı (**Tamag Iduk Baş**) - **tamgaçı** damgacı, mühürdar, sekreter; bk. **Makaraç**, **Bilgä** - **Tamgan** kişi adı (**Tamgan Tarkan**) - **tamkalıg** damgalı (Açura 6); bk. - **tan** beden, vücut (IB 3) - **taŋ** tan, şafak (IB 26) - **taŋlar-** tan atmak, şafak sökmek (IB 2...
  - `Radloff, s. 249` (eslesen: _TAMAG IDUK_)
    > ...yer-sub basa berti). Bugünkü Şamanist Türk boylarında rastlanan dağ, su (ırmak, göl, pınar), ağaç-orman, kaya kültleri eski Türk yazıt larında "yer-sub" adı altında toplanmıştır. Bununla beraber bu yazıtlarda ıduk (yani mübarek, mukaddes) sıfatıyla zikredilen Tamag ıduk, Iduk Baş gibi dağ, ormanlık yahut su adları geç mektedir. [[s. 249]] Yer-su ruhlarının en önemli mümessili dağdır. Şamanist Türklerde dağ kültü Gök Tanrı kültüyle ilgili bir kült olmuştur. (53) Hunların eski vatanı olan Yeni-si-şan yahut Şan-din-şan sıra dağ...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 229` (eslesen: _TAMAG IDUK_)
    > ...elenge, 78. Semerkant, 156,. 157, 194, 206. Semipalat, 194. Sibirya, 4, 44, 74. Sinop, 199. Sogol, 50. Suriye, 165. Sümerdağı (efsanevi), 130, 132. Sümer-Ula, 52. Sümer-Tayka (efsanevi dağ), 52. Sütgöl, 50, 52, 129, 132. Şambel, 187, 188. Şangdut, 135,___ ___ Tamag-ıduk, 48. Tangnov (bk. [[s. 229]] Tannau), 62. Taşkent, 171, 197. Taştıp, 53. Tayga ormanı, 4, 186, 187, 189. Teye, 54, 56, 58. Tibet, 3, 44, 60, 193. Tobol, 44. Toharistan, 204. Tokrav, 82. Tom, 186. Tonguzka, 7. Tosbay, 124, 126. Tsienşan, 50. Tuhaytı, 180. ' Tu...


## BK-D-29#4 - Bilge Kağan Yazıtı, Doğu 29. satir  (3 kelime)

- **transkripsiyon:** `KARLUK : BODUNUG : ÖLÜRTÜM`
- **kelime karsiliklari:** KARLUK : BOYLARINI : ÖLDÜRDÜM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KARLUK BODUNUG ÖLÜRTÜM_)
    > ...li sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sün...
  - `Tekin 1998, s. 11` (eslesen: _BODUNUG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODUNUG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Ata 2011, s. 47` (eslesen: _BODUNUG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...
  - `Olmez 2017, s. 22` (eslesen: _BODUNUG_)
    > ...görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu...
  - `Tekin 1998, s. 19` (eslesen: _ÖLÜRTÜM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...


## BK-D-29#5 - Bilge Kağan Yazıtı, Doğu 29. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `aNDA : ALTIM : --- DIM`
- **kelime karsiliklari:** [O] ANDA : ALDIM : --- DIM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _ALTIM_)
    > ...uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuz...
  - `Tekin 2003, s. 75` (eslesen: _ALTIM_)
    > ...T G 3) ~ *eldä* (Tele 3) < **ēldä* - *yolta* "yolda" (KT K 9; T 16, IB 35) < **yōlda* - *boltokda* "olduğunda" (O ön 1, 6) < **bōldokda* ~ *boldum* "oldum" (Barık II 1) - *adrıltım* "ayrıldım" (Uyuk-Turan 1, Kızıl Çıra I 2, vb.) ~ *adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT...
  - `Ata 2011, s. 112` (eslesen: _ALTIM_)
    > ...zıdım” Açıklama: törü+g+in örneğinde ŋ ~ g nöbetleşmesi ile +g ikinci teklik kişi iyelik ekidir. Bk. Tablo 6.1 3. tekil kişi iyelik ekinden sonra: kan+ı+n öltürdümüz T 28 “kağanlarını öldürdük” ogl+ı+n yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku...
  - `Ata 2011, s. 105` (eslesen: _ALTIM_)
    > ...buraya kazıdım” Açıklama: [[s. 105]] törü+g+in örneğinde ŋ ~ g nöbetleşmesi ile +g ikinci teklik kişi iyelik ekidir. Bk. Tablo 6.1 3. tekil kişi iyelik ekinden sonra: kan+ı+n öltürdümüz T 28 “kağanlarını öldürdük” ogl+ı+n yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. [[s. 105]] tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu g...
  - `Roux, Eski Turk Mitolojisi, s. 37` (eslesen: _ALTIM_)
    > ...geistigen Grundlagen des Hochasiatischen Tierstiles [Orta-Güney Asyadaki Hayvan Biçeminin Düşünsel Esasları], Forschungen und Fortschritte, VII, 20, 1931, s. 278. A. v. Gabain, Inhalt und magische Bedeutung [İçerik ve Gizemli Anlamı], s. 554. Gizemli Sağaltım —»Şamanizm Gök Gürlemesi. Fırtına ve ona eşlik eden en dikkat çekici olaylar olan yıldırım ve gök gürlemesi, eski Türk halklarım oldum olası derinden etkilemiştir. Kâşgarlı Mahmud'a göre, bunlar bizzat gök tanrı —»Tengri tarafından gerçekleştirilmekte...
  - `Ogel C1, s. 21` (eslesen: _ALTIM_)
    > ...karşısında rakip olarak görür ve babasına karşı şuur altında bir kin duyardı. Çünkü annesi, babasına aitti. Bu hisleri açığa vuramıyan erkek çocuklar, hislerini şuur altında saklar ve bazan da bu hal çocukda hastalık bile yapardı. [[s. 21]] Freud'a göre şuur altıma atılan bu hisler tesirlerini gerçek hayatta değil; masal ve efsanelerde göstermiş ve bu efsaneler de zamanımıza kadar gelmiştir. Bizim rüya [s. 22] BÜYÜK HUN DEVLETİ 9 Harita 1 : Hun ve Göktürk soylularının yaşadığı Altay bölgesi, [s. 23] 10 TÜRK MİTOLOJİ...


## BK-D-29#6 - Bilge Kağan Yazıtı, Doğu 29. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `BASMIL : KARA : --- DÜD --- : KARLUK : BODUN : TİRİLİP : KELTİ`
- **kelime karsiliklari:** BASMIL : KARA : --- DÜD --- : KARLUK : BOYLARI : DİRİLİP : GELDİ
- **kanit:**
  - `Ergin 1970, s. 28` (eslesen: _BASMIL KARA KARLUK_)
    > ...n içindeki ne kadar insan ........ yok olacaktı ........ çağırmak için geldi. Beş Balık onun için kurtuldu. Otuz bir yaşımda Karluk milleti sıkıntısız, hür ve serbest iken, düşman oldu. Tamag Iduk Başta savaştım. Karluk milletini öldürdüm, orda aldım ........ Basmıl kara ......... Karluk milleti toplanıp geldi. .......... m, öldürdüm. [[s. 28]] Dokuz Oğuz benim milletim idi. Gök, yer bulandığı için, ödüne | kıskançlık değdiği için düşman [s. 29] oldu. Bir yılda dört defa savaştım: En önce Togu Balıkta savaştım. Togla nehrini yüzdürerek geçip...
  - `Tekin 1998, s. 27` (eslesen: _KARLUK BODUN_)
    > ...lkını orada öldürmüş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kı...
  - `Tekin 2003, s. 168` (eslesen: _KARLUK BODUN_)
    > ...şturur: *er-ür bar-ur* (< *er-ür bar-ır*). Bu söz öbeğinin sonuna "olan" anlamındaki *ärkli* (< *\*är-igli*) sıfatı da getirilerek "(serbestçe) gelir gider, (serbestçe) hareket eder" anlamında kalıplaşmış bir söz öbeği oluşturulur: *kül tigin yiti otuz yaşıŋa karluk bodun er-ür bar-ur ärkli yagı boltı* "Prens Kül yirmi yedi yaşında (iken) Karluk halkı (serbestçe) gelir gider (hareket eder) bir düşman oldu" (KT K 1) *otuz artukı bir yaşıma karluk bodun buŋsız [er]-ür bar-ur ärkli yagı boltı* "Otuz bir yaşımda Karluk halkı serbe...
  - `Olmez 2017, s. 64` (eslesen: _KARLUK BODUN_)
    > .... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada...
  - `Tekin 1998, s. 39` (eslesen: _TİRİLİP KELTİ_)
    > ...)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eç...
  - `Tekin 1998, s. 22` (eslesen: _TİRİLİP_)
    > ...dun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz. Akılsız hakanlar t...


## BK-D-29#7 - Bilge Kağan Yazıtı, Doğu 29. satir  (5 kelime)

- **transkripsiyon:** `SANÇTIM : ÖLÜRTÜM : TOKUZ : OGUZ : MENİŊ`
- **kelime karsiliklari:** SANÇTIM : ÖLDÜRDÜM : DOKUZ : OĞUZ : BENİM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _ÖLÜRTÜM TOKUZ_)
    > ...tim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti...
  - `Tekin 1998, s. 19` (eslesen: _TOKUZ OGUZ_)
    > ...üzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük ka...
  - `Tekin 2003, s. 19` (eslesen: _TOKUZ OGUZ_)
    > ...anlış olarak *Türkü* okumasına dayanan bir öneridir. Pritsak’ın önerdiği *Türküt* terimi ise Pelliot’nun oldukça şüpheli bir varsayımına dayanır, uygun olmaz. Baskakov’un önerdiği “Eski Oğuzca” terimi de Orhon Türkçesi için uygun değildir; çünkü Oğuzlar ya da Tokuz Oğuzlar İkinci Doğu Türk Kağanlığına dahil olan etnik gruplardan yalnızca biri idi. İşte bu düşüncelerle ben Thomsen’in “Orhon Türkçesi” terimini daha uygun bulmuş ve 1968’de yayımlanan gramerime de “Orhon Türkçesi” adını vermiştim (*A Grammar of Orkhon Turkic*,...
  - `Ata 2011, s. 55` (eslesen: _TOKUZ OGUZ_)
    > ...sonra Köktürklerin yerine Bilge Kağan’ın tacı. Bilge Kağan külliyesinde Ötüken’e hâkim olan Uygurlar 2001 yılında yapılan kazılarda bulunmuştur. zamanında gerçekleşir. Yazıtlar- da Tokuz-Oğuz adı ile geçen Uygurlar, kültürel bakımdan gelişmiş Türk boylarından biri olarak öbür Türklerden önce yerleşik hayata geçerler. Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler...
  - `Olmez 2017, s. 21` (eslesen: _TOKUZ OGUZ_)
    > ...e Moğolistan'ın doğusundan Kore'ye kadar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin,...
  - `Roux, Eski Din, s. 320` (eslesen: _TOKUZ OGUZ_)
    > ...45, İstanbul, 1974 (C.1-2}. ECKHART (F.), Macaristan Tarihi, çev. 1. [[s. 320]] Kafesoğlu, TTK, XIII+316 sayfa, Ankara, 1949. ECKMANN (J.}, "Harezm Türkçesi," çev. Mehmet Akalın, Tarihi Türk Şiveleri, Sevinç Matbaası, Ankara, 1979, s. 183-223. EDWIN (G. P.), "Tokuz Oğuz Problemi Hakkında Bazı Mülahazalar," çev. Eşref Bengi Üzbilen, TDA, sayı 92, 1994, s. 15-23. ELIADE (M.), İmgeler ve Simgeler, çev. M. A. Kılıçbay, Gece Yayınları, Ankara, 1991. - Kutsal ve Dindışı, çev. M. A. Kılıçbay, Gece Yayınları, Ankara 1991. [[s. 320]]...


## BK-D-29#8 - Bilge Kağan Yazıtı, Doğu 29. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `BODUNUM : ERTİ : TEŊRİ : YİR : BULGAKIN : ÜÇÜN : ÖDİŊE : ---`
- **kelime karsiliklari:** BOYLARIM : İDİ : TANRI : YER : BULANDIĞI : İÇİN : ÖDÜNE : ---
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _BODUNUM ERTİ TEŊRİ YİR_)
    > ...beriğ tutdı. Az bodun anta yok boltu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin...
  - `Tekin 2003, s. 153` (eslesen: _YİR BULGAKIN ÜÇÜN_)
    > ...n için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (BK D 29-30) *ilteriş kagan bilgäsin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi* "İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinliler...
  - `Ata 2011, s. 121` (eslesen: _TEŊRİ YİR_)
    > ...Açıklama: Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T 25 tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: Bu sontakı, bulunma-çıkma du...
  - `Ata 2011, s. 114` (eslesen: _TEŊRİ YİR_)
    > ...için” BK K10 Açıklama: [[s. 114]] Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar şüphesiz” KT D3 antag+ıŋ+(ı)n üçün “(sen) öyle olduğun için” KT G8-9 teŋri yir bulgak+ı+n üçün “gök (ve) yer karıştığı için” BK D29 üze: at üze bintüre karıg sökdüm “at üzerine bindirerek karları söktüm” T tarduş bodun üze şad ertim “Tarduş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de k...
  - `Ogel C2, s. 272` (eslesen: _BULGAKIN ÜÇÜN_)
    > ...Ancak Göktürk yazıtlarında, “Türk milleti, kendi yerine (yeringerü) ve suyuna (subıngaru) kondu ” sözü', vat an düşüncesinin en yüce bir gelişmesidir. Konuyu uzatmıyacağız. Gök ile yer, karıştığı için: Türk milleti ile devletinin düzeni, bozuluyor. “Kök yer bulgakın üçün” sözü*, millet ve devlet düzeninin, “gök ile yer *Radlof, a. eser, s. 138. * Radlof,Wb.H,s.142.Kutadgu Bilig, Radlof yayını, H, s. 14 de, “kara” okuyor. [[s. 272]] R.Ar at'a göve “serag'', notlarda ise, “toprak” tanımı veriliyor; KB, 24. * Radlof, Wö. Ili,...
  - `Radloff, s. 219` (eslesen: _BULGAKIN ÜÇÜN_)
    > ...tırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze tengri asra yer yarlıkaduk üçün ... ). Tonyukuk ya zıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakan lığı dev...


## BK-D-30#1 - Bilge Kağan Yazıtı, Doğu 30. satir  (5 kelime)

- **transkripsiyon:** `KÜNİ : TeGDÜK : ÜÇüN : YaGI : BOLDI`
- **kelime karsiliklari:** KİN : DEĞDİĞİ : İÇİN : YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KÜNİ TeGDÜK ÜÇüN YaGI_)
    > ...Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) bolta...
  - `Tekin 1998, s. 27` (eslesen: _ÜÇüN YaGI_)
    > ...tu. [[s. 27]] Eçim kağan ili kamşağ boltukınta, bodun iliğ ikeğü boltukınta, İzgil bodun birle süüğüşdümiz. Kül Tigin Alp Şalçı akın binip (K 4) olplayu teğdli. Ol at anta tüşldi). İzgil (bodlun öltü. Tokuz Oğuz bodun kentü bodunum erti. Tengri yir bulgakın üçün yağı boltı. Bir yılka biş yolı süünğüşdümiz. Eüğ ilk Toğu balıkda sünğüşdümiz. (K 5) Kül Tigin Azman akığ binip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip o...
  - `Tekin 2003, s. 153` (eslesen: _ÜÇüN YaGI_)
    > ......* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (BK D 29-30) *ilteriş kagan bilgäsin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi* "İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez) savaştı" (T...
  - `Tekin 1998, s. 26` (eslesen: _TeGDÜK_)
    > ...ada öldü. [[s. 25]] Üçüncü olarak Yeğen Siliğ Bey'in giyimli doru atına binip hücum etti. O at (da) orada öldü. (Kül Tigin'i) zırhından (ve) [s. 26] 48 KÜLTİGİN YAZITI rıkınta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı...
  - `Ata 2011, s. 140` (eslesen: _TeGDÜK_)
    > ...üçüg berdim “kızıl kanımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adgırıg udlukın sı-yu urtı “o hücumda (düşman) Bayırkuların kır aygırının kalçasını kırıp vurdu” BK D36 2. -(X)p fiil zarfı, asıl eylemden önce işlenmiş bir eylemi gösterir. Bugünkü Türkçede de sıkça kullanılan –p ekinin ünlü ile...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...


## BK-D-30#2 - Bilge Kağan Yazıtı, Doğu 30. satir  (5 kelime)

- **transkripsiyon:** `BİR : YILKA : TÖRT : YOLI : SÜŊüŞDüM`
- **kelime karsiliklari:** BİR : YILDA : DÖRT : YOL : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _BİR YILKA TÖRT YOLI SÜŊüŞDüM_)
    > ...Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağı...
  - `Tekin 2003, s. 133` (eslesen: _BİR YILKA TÖRT YOLI SÜŊüŞDüM_)
    > ...asıl sayı + *kata* söz öbekleri ile ifade edilir: *tört yolı* "dört kez" (BK D 30), *biş yolı* "beş kez" (KT K 4), *üç kata* "üç kez" (Uybat II 4), *beş kata* "beş kez" (Elegest III 2), vb. 1. Asıl sayı + *yolı* ( < *yōl* "yol, sefer" + 3. kişi iyelik eki): *bir yılka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *bir yılka biş yolı süŋüşdümüz* "Bir yılda beş kez savaştık" (KT K 4) *altı yolı süŋüşdüm* "Altı kez savaştım" (BK D 28) *kanım kagan... kırk artukı yeti yolı sülämiş* "Babam Hakan (hakanlığı süresince) kırk yedi kez o...
  - `Ata 2011, s. 116` (eslesen: _BİR YILKA TÖRT YOLI SÜŊüŞDüM_)
    > ...“(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 116] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< k...
  - `Ata 2011, s. 109` (eslesen: _BİR YILKA TÖRT YOLI SÜŊüŞDüM_)
    > ...rdu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti...


## BK-D-30#3 - Bilge Kağan Yazıtı, Doğu 30. satir  (5 kelime)

- **transkripsiyon:** `eŊ : İLKİ : TOGU : BaLIKDA : SÜŊüŞDüM`
- **kelime karsiliklari:** EN : İLKİ : DOĞU : BALIKTA : SÜNGÜŞDÜM
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _eŊ İLKİ TOGU BaLIKDA SÜŊüŞDüM_)
    > ...yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n...
  - `Ata 2011, s. 108` (eslesen: _eŊ İLKİ TOGU BaLIKDA SÜŊüŞDüM_)
    > ...kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D3...
  - `Tekin 1998, s. 38` (eslesen: _İLKİ TOGU BaLIKDA SÜŊüŞDüM_)
    > .................. Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Ant...
  - `Tekin 2003, s. 132` (eslesen: _İLKİ TOGU BaLIKDA SÜŊüŞDüM_)
    > ...otuzka uça bardı* "(Babam hakan) Köpek yılının yirmi altısında uçup gitti" (KT KD) *bir yegirminç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş başınta süŋüşdümüz* "Dördüncü olarak Çuş (ırmağı) başında savaştık" (KT K 6), vb. ## T...


## BK-D-30#4 - Bilge Kağan Yazıtı, Doğu 30. satir  (3 kelime)

- **transkripsiyon:** `TOGLA : ÖGüZüG : YÜZüTİ`
- **kelime karsiliklari:** TOĞLA : ÖĞÜZÜNÜ : YÜZÜP
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _ÖGüZüG_)
    > ...rakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu...
  - `Tekin 2003, s. 120` (eslesen: _ÖGüZüG_)
    > ...n sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärkli...
  - `Ata 2011, s. 123` (eslesen: _ÖGüZüG_)
    > .... ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındak...
  - `Tekin 1998, s. 38` (eslesen: _YÜZüTİ_)
    > ...R | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bi...
  - `Ergin 1970, s. 29` (eslesen: _TOGLA_)
    > .... Basmıl kara ......... Karluk milleti toplanıp geldi. .......... m, öldürdüm. [[s. 28]] Dokuz Oğuz benim milletim idi. Gök, yer bulandığı için, ödüne | kıskançlık değdiği için düşman [s. 29] oldu. Bir yılda dört defa savaştım: En önce Togu Balıkta savaştım. Togla nehrini yüzdürerek geçip ordusu.......... İkinci olarak Andırguda savaştım. Askerini mızrakladım ......... Üçüncü olarak Çuş başında savaştım. Türk milleti ayak titretti, perişan olacaktı. İlerleyip yayarak gelen ordusunu püskürttüm. Çok ölecek orda dirildi....
  - `Tekin 2003, s. 118` (eslesen: _TOGLA_)
    > ..., öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok büyük bir törenle oğluma alıverdim" (BK K 9-10) 4. Bağlaç görevinde: *ingäk köläk+in toglada oguz kälti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *igidmiş bilgä kaganıŋ+ın ärmiş barmiş ädgü eliŋä käntü yaŋıltıg* "(seni) doyurmuş olan hakanın ile ilerlemiş, gelişmiş iyi devletine kendin ihanet ettin" (K D 23) *bilmäz bili...


## BK-D-30#5 - Bilge Kağan Yazıtı, Doğu 30. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `KeÇiP : SÜSİ : --- : iKİNTİ`
- **kelime karsiliklari:** GEÇİP : SÜSİ : --- : İKİNCİ
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KeÇiP SÜSİ_)
    > ...luk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ To...
  - `Tekin 1998, s. 19` (eslesen: _iKİNTİ_)
    > ...(ve) kuzeyde gece ortasına kadar, bu (sınırlar) içindeki (bütün) halklar hep bana tabidir. Bunca halkı (G 3) hep düzene soktum. Onlar şimdi (hiç de) kötü (durumda) değiller. Türk(lerin) hakanı Ötüken dağlarında oturur (ve oradan hükmeder) ise ülkede (hiçbir) sıkıntı olmaz. [[s. 19]] Doğuda Şantung ovasına kadar ordu sevk ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar ordu sevk ettim, Tibet'e az kala durdum; batıda İnci (Sır Derya) ırmağı(nı) (G 4) geçerek Demir Kapı 'ya kadar ordu sevk ettim; kuzeyde Yir Bayı...
  - `Ergin 1970, s. 12` (eslesen: _iKİNTİ_)
    > ...adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk et...
  - `Tekin 2003, s. 56` (eslesen: _iKİNTİ_)
    > ...ŋsız* "pek çok, bol bol" (Açura 7) - /BUŋsz/ *buŋs(ı)z* "pek çok, bol bol" (T 48) - /YULszn/ *yols(ı)z(ı)n* "yolsuz olarak" (T 35) Ancak, bazı Yenisey yazıtları ile Irk Bitig'de bu ekin dudak uyumuna girdiğini gösteren örnekler vardır: - *buŋusuz* "dertsiz, sıkıntısız" (Barık II 3, Barık 6 III 2) - *otsuz* "otsuz" (IB 45) - *subsuz* "susuz" (IB 45), vb. **78.** Addan eylem türeten {+sIrA-} eki: - *ur(u)gs(ı)rat-* "dölsüz bırakmak" (KT D 10) vb.; krş. Uyg. *kutsıra-*, *küçsirä-*, *ögsirä-* vb. **79.** Gelecek zaman-ger...
  - `Ata 2011, s. 53` (eslesen: _iKİNTİ_)
    > ...kuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orhon Yazıtları, Türk Dil Kurumu Yayınları, Ankara 1988, s. 4-5) Zeki ve plancı bir kişiliğe sahip olan Tonyukuk, askerî işlerdeki başarısı...
  - `Olmez 2017, s. 22` (eslesen: _iKİNTİ_)
    > ...ç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış. Yakına yerleştikten sonra da gereken kötülüğü orada düşünürlermiş." (KT G 4-5)....


## BK-D-30#6 - Bilge Kağan Yazıtı, Doğu 30. satir  (4 kelime)

- **transkripsiyon:** `aNDıRGUDA : SÜŊüŞDüM : SÜSİN : SaNÇDıM`
- **kelime karsiliklari:** ANDIRGUDA : SÜNGÜŞDÜM : SÜSİNİ : SANÇTIM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _SÜŊüŞDüM SÜSİN SaNÇDıM_)
    > ...rtim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin ile konuşup anlaştık: Babamızın (ve) (D 22) amcamızın kazanmış oldukları halkın adı sanı yok olmasın diye Türk halkı için gece uyumadım, gündüz oturmadım; kardeşim Kül T...
  - `Tekin 1998, s. 27` (eslesen: _SÜSİN SaNÇDıM_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz...
  - `Ergin 1970, s. 29` (eslesen: _aNDıRGUDA_)
    > ...... m, öldürdüm. [[s. 28]] Dokuz Oğuz benim milletim idi. Gök, yer bulandığı için, ödüne | kıskançlık değdiği için düşman [s. 29] oldu. Bir yılda dört defa savaştım: En önce Togu Balıkta savaştım. Togla nehrini yüzdürerek geçip ordusu.......... İkinci olarak Andırguda savaştım. Askerini mızrakladım ......... Üçüncü olarak Çuş başında savaştım. Türk milleti ayak titretti, perişan olacaktı. İlerleyip yayarak gelen ordusunu püskürttüm. Çok ölecek orda dirildi. Orda Tongra yiğti bir boyu Tonga Tigin mateminde çevirip vurdum....
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...
  - `Tekin 2003, s. 112` (eslesen: _SÜŊüŞDüM_)
    > ...efat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüM_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayıs...


## BK-D-30#7 - Bilge Kağan Yazıtı, Doğu 30. satir  (6 kelime)

- **transkripsiyon:** `İLİN : aLTıM : ÜÇüNÇ : ÇUŞ : BaŞINDA : SÜŊüŞDüM`
- **kelime karsiliklari:** İLİNİ : ALDIM : ÜÇÜNCÜ : ÇUŞ : BAŞINDA : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _İLİN aLTıM_)
    > ...dunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuz...
  - `Tekin 1998, s. 27` (eslesen: _ÇUŞ BaŞINDA_)
    > ...ızca hücum ederek bir eri mızrakladı, (K 6) dokuz eri (de) kuşatarak dövdü. Ediz halkı orada öldü. Üçüncü olarak Bolçu'da Oğuz'larla savaştık. Kül Tigin Azman kır (at)ına binip hücum etti, mızrakladı. Askerlerini mızrakladık, ülkelerini aldık. Dördüncü olarak Çuş başında savaştık. Türk (K 7) halkı(nın) ayağı sendeledi. Perişan olacak idi. [[s. 27]] Süratle gelen (düşman) ordusunu Kül Tigin dağıtıp Tongra(lardan) bir grup yiğit on eri Tonga Tigin'in cenaze töreninde kuşatarak öldürdük. Beşinci olarak Ezgenti Kadız'da Oğuz'larl...
  - `Ergin 1970, s. 20` (eslesen: _ÇUŞ BaŞINDA_)
    > ...l Tigin Az yağızına binip, atılarak hücum edip bir eri mızrakladı. Dokuz eri çevirerek vurdu. Ediz kavmi orda öldü. Üçüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...
  - `Tekin 2003, s. 112` (eslesen: _SÜŊüŞDüM_)
    > ...efat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüM_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayıs...


## BK-D-30#8 - Bilge Kağan Yazıtı, Doğu 30. satir  (5 kelime)

- **transkripsiyon:** `TÜRK : BODuN : aDaK : KaMŞatTI : YaBLaK`
- **kelime karsiliklari:** TÜRK : BOYLARI : AYAK : KAMŞATTI : YAVLAK
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _BODuN aDaK KaMŞatTI YaBLaK_)
    > ...ödifiğle) (D 30) küni teğdük üçün, yağı boltı. Bir yılka tört yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma...
  - `Ata 2011, s. 137` (eslesen: _BODuN aDaK KaMŞatTI YaBLaK_)
    > ...r-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen Gelecek Zaman -tAçI ekli gelecek zaman eylem sıfatı üzerine er- yardımcı fiilinin belirli geçmiş zaman eki getirilerek (gelecek zamanın hikâyesi) yapılır: türük bodun adak kamşattı yablak bol-taçı er-ti “Türk halkının ayakları titredi, (neredeyse) kötü olacak idi” BK D30-31 yok bol-taçı er-ti “yok olacaktı” BK D28 SIFAT-FİİLLER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eyle...
  - `Ata 2011, s. 130` (eslesen: _BODuN aDaK KaMŞatTI YaBLaK_)
    > ...mış er-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen Gelecek Zaman -tAçI ekli gelecek zaman eylem sıfatı üzerine er- yardımcı fiilinin belirli geçmiş zaman eki getirilerek (gelecek zamanın hikâyesi) yapılır: [[s. 130]] türük bodun adak kamşattı yablak bol-taçı er-ti “Türk halkının ayakları titredi, (neredeyse) kötü olacak idi” BK D30-31 yok bol-taçı er-ti “yok olacaktı” BK D28 SIFAT-FİİLLER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade...


## BK-D-31#1 - Bilge Kağan Yazıtı, Doğu 31. satir  (7 kelime)

- **transkripsiyon:** `BOLTaÇI : eRTİ : UZA : YaYNA : KeLiGME : SÜSİN : aGıtTıM`
- **kelime karsiliklari:** OLACAK : İDİ : UZANIP : YAYILIP : GELEN : ERİNİ : AĞITTIM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KeLiGME SÜSİN aGıtTıM_)
    > ...rt yolı sünğüşdüm. Eââg ilki Toğu Balıkda süngüşdüm. Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73...
  - `Tekin 1998, s. 28` (eslesen: _BOLTaÇI eRTİ_)
    > ...bıraktık. Düşman Oğuz'lar karargâhı bastılar. [[s. 27]] Kül Tigin (K 9) öksüz kır (at)ına binip dokuz er(i) mızrakladı, karargâhı (düşmana) verme- [s. 28] 52 KÜLTİGİN YAZITI Öğüm katun ulayu öğlerim, ekelerim, kelinğünüm, kunçuylarım, bunça yeme tiriği küüg boltaçı erti, ölüği yurtda yolta yatu kaltaçı ertiğiz; (K 10) Kül Tigin yok erser kop ölteçi ertiğiz. İnim Kül Tigin kergek boltı. Özüm sakıntım. Körür közüm körmez teğ, bilir biliğim bilmez teğ bolt. Özüm sakıntım. Öd Tefiğri aysar kişi oğlı kop ölgeli törimiş. (K 11) A...
  - `Ata 2011, s. 142` (eslesen: _BOLTaÇI eRTİ_)
    > ...vleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ...
  - `Olmez 2017, s. 57` (eslesen: _BOLTaÇI eRTİ_)
    > ...(O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-solda ortalıkta kalakalacaktı." (KT K 9) ### Emir – İstek Çekimi | | teklik | çokluk | | :--- | :--- | :--- | | **1. kişi**...
  - `Ata 2011, s. 135` (eslesen: _BOLTaÇI eRTİ_)
    > ...babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı [[s. 135]] ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di...
  - `Tekin 2003, s. 38` (eslesen: _BOLTaÇI_)
    > ...ş/ *altm(ı)ş* "60" (Hem.-Çır. 9), /LTms/ *altm(ı)ş* (Tar. B 6) - /LTI/ *altı* "6" (Hem.-Çır. 4) - /KLTçI/ *kaltaçı* "kalacak" (KT K 9, T 13) - /LTNm/ *alt(u)n(u)m* "altınım" (Hem.-Çır. 5), vb. 2. Art ünlülü sözcüklerde /lt/ ünsüz çifti değerinde: - /BULTçI/ *boltaçı* "olacak" (genellikle), fakat /BULTçI/ (KT K 11, BK D 31) - /BULTI/ *boltı* "oldu" (KT D 31, vb.), fakat /BUL[TI]/ (KÇ B 3) - /BULTUKDA/ *boltokda* "olduğunda" (O 1, 6) - /BULTm/ *bolt(u)m* "oldum" (T 56, 56) [s. 39] # s. 39 — ORHON TÜRKÇESİ GRAMERİ - /KILT...


## BK-D-31#2 - Bilge Kağan Yazıtı, Doğu 31. satir  (4 kelime)

- **transkripsiyon:** `ÖKüŞ : ÖLTeÇİ : aNDA : TİRiLDİ`
- **kelime karsiliklari:** ÇOK : [KİŞİ] ÖLECEKTİ : [O] ANDA : DİRİLDİ
- **kanit:**
  - `Tekin 1998, s. 8` (eslesen: _TİRiLDİ_)
    > ...n yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı yüzündeki Çince yazıtın 1 Ağustos 732 tarihinde tamamlandığı bilindiğine ve Türkçe yazıtlar da yirmi günde bitirildiğine göre Kül Tigin anıtının dikiliş tarihi de 21 Ağustos 732 olmalıdır. Kül Tigin anıtı prensin ağabeyi Bilge Kağan tarafından diktirilmiştir. Yazıt boyunca konuşan ve olayları anlatan da Bilge Kağan'dır. 2.2. [[s. 8]] Bilge Kağan (683-734) Anıtı Bilge Kağ...
  - `Tekin 2003, s. 171` (eslesen: _TİRiLDİ_)
    > ...i gelecek zaman eylem sıfatı, yüklem dışında, eyleyici adı ve niteleyici olarak da kullanılır. 1. Niteleyici olarak: *öltäçi bodunug tirgürü igi(t)tim* "(aksi halde) ölecek olan halkı dirilttim ve doyurdum" (KT D 29) 2. Eyleyici adı olarak: *üküş öltäçi anta tirildi* "(Aksi halde) ölecek olan birçok kişi orada hayatta kaldı" (BK D 31) *eki üç biŋ sümüz kältäçimiz bar mu nä* "iki üç bin (kadar) gelecek askerimiz var mı ne?" (T 14) *öltäçiçä sakınıgma türük bäglär bodun* "ölecekmiş gibi kaygılanan Türk beyleri ve halkı" (B...
  - `Ata 2011, s. 76` (eslesen: _TİRiLDİ_)
    > ...dizilişi bakımından aşağıdan yukarıya, Tonyukuk yazıtı ise bunun tersi istikamettedir. Yazıldıktan sonra “dik” konumda yerleştirildiklerinde bu satırla- rın sırası bu mezar taşlarında “sağdan sola”; doğrudur. Köktürk alfabesi ile yazılmış yazıtlar arasında en büyük ve en az tahribata uğrayan üç büyük yazıtın ad...
  - `Tekin 1998, s. 20` (eslesen: _ÖLTeÇİ_)
    > ...iser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu...
  - `Ata 2011, s. 55` (eslesen: _ÖLTeÇİ_)
    > ...Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört b...
  - `Olmez 2017, s. 52` (eslesen: _ÖLTeÇİ_)
    > ...{+gArU}, 2. {+ŋArU}, {+ArU}, {+rA}. Bugün Türkçede 'içeri' ve 'dışarı' sözlerinde yaşayan, üretken olmayan eklerden *+ArI*'nın eski şeklidir. *ötüken yışgaru uduztum* "(Orduyu) Ötüken toprakları yönünde sevk ettim" (T 15) *ol yėrgerü barsar, türük bodun, ölteçi sen* "Oralara gidersen, Türk halkı mutlaka öleceksin!" (KT G 8), vb. [s. 53] # s. 053 — Köktürkçe Dersleri (basılı sayfa 55) *+ŋArU* ise, tıpkı yukarıda değindiğimiz *+ŋA* yaklaşma-bulunma durumu eki gibidir, içerisinde bir zamir *n*'si yer alır ve üçüncü k...


## BK-D-31#3 - Bilge Kağan Yazıtı, Doğu 31. satir  (3 kelime)

- **transkripsiyon:** `aNDA : TOŊRA : YILPaGUTI`
- **kelime karsiliklari:** [O] ANDA : TONGRA : YİĞİTİ
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _TOŊRA YILPaGUTI_)
    > ...Toğla üğüzüğ yüzüti keçip süsi Çe......rreen | Ekinti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73 Yirmi yedi yaşımda Kırgız'lara doğru sefer ettim...
  - `Tekin 2003, s. 33` (eslesen: _YILPaGUTI_)
    > ...ullanışın seslik bir önemi yoktur. 1. Söz başında ve /ı/ ünlüsünden önce: - /yIL/ *yıl* (genellikle), fakat /YILKA/ *yılka* (O 12) - /yILKI/ *yılkı* (genellikle), fakat /YILK...IN/ *yılk[ıs]ın* (KT GB) [s. 33] # s. 33 — ORHON TÜRKÇESİ GRAMERİ - /yILpGUTI/ *yılpagutı* (BK D 31) - /yILsG/ *yıls(ı)g* (KT D 26) - /yISGRU/ *yışgaru* (T 15), vb. 2. Ön /y/ harfi art ünlülü sözcüklerde /o/ ve /u/ ünlülerinden önceki sözbaşı /y/ fonemini yazmak için de kullanılmıştır. Bu kullanışın da seslik bir önemi yoktur: - /yUGN/ *yog(u)n*...
  - `Tekin 1998, s. 27` (eslesen: _TOŊRA_)
    > .... Kül Tigin Azman kır (at)ına binip hücum etti, mızrakladı. Askerlerini mızrakladık, ülkelerini aldık. Dördüncü olarak Çuş başında savaştık. Türk (K 7) halkı(nın) ayağı sendeledi. Perişan olacak idi. [[s. 27]] Süratle gelen (düşman) ordusunu Kül Tigin dağıtıp Tongra(lardan) bir grup yiğit on eri Tonga Tigin'in cenaze töreninde kuşatarak öldürdük. Beşinci olarak Ezgenti Kadız'da Oğuz'larla savaştık. Kül Tigin (K 8) Az yağız (at)ına binip hücum etti. İki eri mızrakladı, çamura garketti. O ordu orada öldü. Amga koruganında...
  - `Ergin 1970, s. 20` (eslesen: _TOŊRA_)
    > ...çüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E L E R İ [s. 21] M U H A R R E M E R G İ N Kül Tigin Az yağızına binip hücum etti. İki eri mızrakladı, çamura...
  - `Tekin 2003, s. 115` (eslesen: _TOŊRA_)
    > ...övdelerine eklenir: *bän äb+gärü tüşäyin... tedi* "Ben karargaha ineyim... dedi" (T 30) *amga korgan kışlap yazıŋa oguz+garu sü taşıkdımız* "Amga Korgan'da kışlayıp, ilkbaharda Oğuzlara doğru sefere çıktık" (KT K 8) *tabgaç+garu kunı säŋünüg ıdmiş, kıtań+garu toŋra äşimig ıdmiş* "Çin'e doğru General Ku'yu, Kıtay'lara doğru da Tongra Eşim'i göndermiş" (T 9) *ötükän yış+garu uduztum* "(Orduyu) Ötüken dağlarına doğru sevk ettim" (T 15) *apa tarkan+garu içrä sab ıdmiş* "(Hakan), Apa Tarkan'a gizli bir mesaj göndermiş" (T 34...
  - `Ata 2011, s. 185` (eslesen: _TOŊRA_)
    > ...ğın sözü şöyle: Tokuz Oğuz halkı üzerine kağan tahta oturdu” kür(e)g s(a)bi (a)nt͡ (a)g tok(u)z og(u)z der. (Bu kağan) Çin’e General Ku’yu bod(u)n üze k(a)g(a)n ol(u)rtı tir göndermiş, Kıtay’a Tongra Eşim’i t(a)bg(a)çg(a)ru ku͡ unı s(e)ŋün(ü)g göndermiş. (Bunlarla) şöyle haber ıdm(i)ş kıt(a)ńg(a)ru toŋra (e)ş(i)m(i)g (söz) göndermiş: “Azıcık Türk halkı ıdm(i)ş s(a)b (a)nç͡ a ıdm(i)ş (a)zk(ı)ńa türk [bodun] G10...


## BK-D-31#4 - Bilge Kağan Yazıtı, Doğu 31. satir  (7 kelime)

- **transkripsiyon:** `BİR : OGuŞuG : TOŊA : TİGiN : YOGıNDA : eGiRE : TOKIDıM`
- **kelime karsiliklari:** BİR : OĞUŞU : TONGA : TİGİN : YUĞUNDA : EĞİRİP : DOKUNDUM
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _TOŊA TİGiN_)
    > ...lda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz. [[s. 27]] Kül Tigin (K 8) Az yağızın binip teğdi. Eki eriğ sançdı, balıkka basıkdı. Ol sü anta öllti)|. Amga korgan kışlap yazınğa Oğuzgaru sü taşıkdımız. Kül Tigin ebiğ başlayu akıttım...
  - `Ergin 1970, s. 20` (eslesen: _TOŊA TİGiN_)
    > ...aştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E L E R İ [s. 21] M U H A R R E M E R G İ N Kül Tigin Az yağızına binip hücum etti. İki eri mızrakladı, çamura soktu. O ordu orda öldü. Amga kalesin...
  - `Tekin 2003, s. 113` (eslesen: _TOŊA TİGiN_)
    > ..."gönülden" (KT K 11), *köŋül+tä+ki* "gönüldeki" (KT G 12) *yurt+da yol+ta* "yurtta ve yollarda" (KT K 9) *bodun+ta üzä* "halkın üzerine" (KT D 26) *tabgaç kagan+ta* "Çin İmparatorundan" (KT G 11) *yarıkın+ta yalmasın+ta* "zırhından ve kaftanından" (KT D 33) *toŋa tigin yogın+ta* "Prens Tonga'nın cenaze töreninde" (KT K 7) *türk sir bodun yerin+tä* "Türk Sir halkının ülkesinde" (T 3, 60) *yırdın+ta yan* "kuzey taraftan" (T 11) *erig yer+tä* "kolayca erişilen yerde" (KT G 13, 13; BK K 15), fakat genellikle *yer+dä, yir+dä*....
  - `Tekin 1998, s. 38` (eslesen: _eGiRE TOKIDıM_)
    > ...nti Antarguda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73 Yirmi yedi yaşımda Kırgız'lara doğru sefer ettim. Mızrak batımı (D 27) karı sökerek, Köğmen dağl...
  - `Roux, Eski Turk Mitolojisi, s. 16` (eslesen: _TOŊA TİGiN_)
    > ...k, ondan övgüyle bahseden bazı şiirleri aktarmaktadır. Alp Er Tonga adı aşağı yukarı "kahraman kaplan insan" anlamına gelmektedir, çünkü tonga adı Kâşgarlı Mahmud'a göre bir tür kaplandır. Ancak bu, kar leopan da olabilir. Orhon yazıtlarında zaten bir Tonga Tigin'den, yani bir "kaplan prens"ten söz edilmektedir. Bu kişi belki de Alp Er Tonga olabilir. Geçen zaman içinde, bu kişi Afrâsiyâb ile ve daha az sistematik olmakla beraber İran'ın efsanevî kahramanı [s. 17] === Eski Türk Mitolojisi olan Uygur prensi...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 185` (eslesen: _TOŊA TİGiN_)
    > ...an kimse için söylenir, DÖRT HARFLİLER Ş tunğu: Sağır. “ tonğat Bebür, Kaplan cinsinden bir hayvan - dır; fili öldürür, asıl olan budur, Bu ad Türklerde yaşamaktadır; anlamı kaybolmuştur. Çok kere kişi adı olarak kullanılır (4J." [[y. 185]] EŞ xan'y" LU Çİ tonğa tigin" denir, Buna benzer böyle adlar çok kere verilir. Türklerin büyük Hakanı Afrasyabın asıl Türk adı " Yİ “Jİ Kİ tonğa alper" dir; "Bebür gibi kuvvetli, yiğit bir adam" demektir, ço sünğü: Süngü, mızrak, KL sanğa " (alaz sanğa aydım - sana söyledim, sana hitap...


## BK-D-31#5 - Bilge Kağan Yazıtı, Doğu 31. satir  (4 kelime)

- **transkripsiyon:** `TÖRTüNÇ : eZGiNTİ : KaDıZDA : SÜŊüŞDüM`
- **kelime karsiliklari:** DÖRDÜNCÜ : EZGİNTİ : KADIZDA : SÜNGÜŞDÜM
- **kanit:**
  - `Ergin 1970, s. 20` (eslesen: _eZGiNTİ KaDıZDA_)
    > ...ni mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E L E R İ [s. 21] M U H A R R E M E R G İ N Kül Tigin Az yağızına binip hücum etti. İki eri mızrakladı, çamura soktu. O ordu orda öldü. Amga kalesinde kışlayıp ilk baharında Oğuza doğru ordu çıkardık. Kül Tigini evin...
  - `Tekin 1998, s. 38` (eslesen: _KaDıZDA SÜŊüŞDüM_)
    > ................ Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73 Yirmi yedi yaşımda Kırgız'lara doğru sefer ettim. Mızrak batımı (D 27) karı sökerek, Köğmen dağlarını aşıp Kırgız halkını uykuda iken bastım....
  - `Tekin 2003, s. 205` (eslesen: _KaDıZDA SÜŊüŞDüM_)
    > ...ir sıra sayısı: - *ekinti ışbara yamtar boz atıg binip...* "İkinci olarak Işbara Yamtar'ın boz atına binip..." (KT D 33) - *üçünç yigän silig bägiŋ kädimlig torug at binip...* "Üçüncü olarak Yigen Silig Bey'in doru atına binip..." (KT D 33) - *törtünç äzginti kadızda süŋüşdüm* "Dördüncü olarak Ezginti Kadız'da savaştım" (BK D 31), vb. 6. Bir zaman süresi gösteren niteleme öbeği: - *yigirmi kün olorup...* "Yirmi gün oturup..." (KT GD) - *ay artukı tört kün olorup...* "Bir ay artı dört gün oturup..." (BK GB), vb. 7. Bir sontakı öb...
  - `Ata 2011, s. 115` (eslesen: _KaDıZDA SÜŊüŞDüM_)
    > ...askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋı...
  - `Ata 2011, s. 108` (eslesen: _KaDıZDA SÜŊüŞDüM_)
    > ...G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 [[s. 108]]...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...


## BK-D-31#6 - Bilge Kağan Yazıtı, Doğu 31. satir  (3 kelime)

- **transkripsiyon:** `SÜSİN : aNDA : SaNÇDıM`
- **kelime karsiliklari:** SÜSİNİ : [O] ANDA : SANÇTIM
- **kanit:**
  - `Tekin 1998, s. 27` (eslesen: _SaNÇDıM_)
    > ...lıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz...
  - `Tekin 2003, s. 223` (eslesen: _SaNÇDıM_)
    > .... Kunladım, altım. Süsi kälti. Kar(a)s(i)n y(ı)gdım. Bägi kaçdı....................... Buzkunça (10) kälir ärtimiz. Ekin ara At(i)g yagı bolmiş. "Tägmäçi män!" teyin sakıntım. Täŋri Bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş ärinç. Tägd[im].......... sançdım. Äbkä tägdöküm. Uruş kılıp (11) tägip inimä ogluma ança ötlädim: "Kaŋ yor(ı)p El-teriş Kaganka adrılmadok; Täŋri Bilgä Kaganta adrılmalım, azmalım!" teyin ança ötlädim. Kerü barıgma bardı. Bilgä Kaganıŋ bodunı...... bardı, ülgän atka işig küçüg berti. (12)...
  - `Tekin 2003, s. 132` (eslesen: _SÜSİN_)
    > ...anılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...
  - `Ata 2011, s. 115` (eslesen: _SÜSİN_)
    > ...ti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu...
  - `Ata 2011, s. 108` (eslesen: _SÜSİN_)
    > ...r’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile...
  - `Ogel C2, s. 254` (eslesen: _SÜSİN_)
    > ...aman “kahpe dünya” deriz. [[s. 254]] Kader, pususunu kurarak fırsat beklemiştir. Acun, insanoğlunu vurur. Ancak ilâcını da, yine insanoğlunda aratır*: “Urmuş Ajun (zamâne) pusuğın, kılmış anı balıg/' “Em sem anğar tülenip, sizden bulur yakığ!” “Kurmuş Ajun pususın, kılmış anı yaralı! "İlaç çare arayıp, Sizde bulur yalıyı! $ Aynı eset, a. yer; Brockelmann, AM |, 38n. ? Aynı eser, İli, e. 288. Brock... AM Pr,, 7.10, * Aynı eser. İ, 8. 407. Brock... AM Pr.. 24v. 3. [s. 255] DÜNYA 239 #“Zamâne, eyyâm-ı zaman, umur-: zam...


## BK-D-31#7 - Bilge Kağan Yazıtı, Doğu 31. satir  (11 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaBRITDıM : --- BaRıM --- : --- : KIRK : YaŞıMA : aMGI : KURGaN : KIŞLaDUKDA : YUT : BOLDI : YaZıŊA`
- **kelime karsiliklari:** YIPRATTIM : --- BARIM --- : --- : KIRK : YAŞIMDA : AMGI : KURGANDA : KIŞLADIĞIMIZDA : YUT : OLDU : YAZINA
- **kanit:**
  - `Tekin 2003, s. 233` (eslesen: _KIRK YaŞıMA_)
    > ...g <...> Atım Ärän Uluga. Ärdäm[l]ig batur m[än]. 4. Ärdäml[ig] bolsar bodun isirkäyü ermädi. Erinçim, ikizim ä! 5. Kuyda kadaşıma, kunçuyuma adrılu bardım. Män oglumka, bodunumka bökmädim. [s. 233] # s. 233 — TALAT TEKİN (basılı sayfa numarası 234) 6. Säkiz kırk yaşıma 7. är ärdäm üçün Töpöt kanka yalabaç bardım, kälmädim. 8. Är ärdäm bolsar andag ärmiş. Sinimin altun kapır[çak(k)a kir]tim. ## Kızıl-Çıraa II (Malov E 44) 1. Alp kolum, ärdäm yüräkim, äsiz ä, yıta! 2. K[adır] yagıda yagıçı bän. Täzig keyikdä alp bän. Täŋri...
  - `Tekin 1998, s. 38` (eslesen: _YaŞıMA aMGI_)
    > ...yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73 Yirmi yedi yaşımda Kırgız'lara doğru sefer ettim. Mızrak batımı (D 27) karı sökerek, Köğmen dağlarını aşıp Kırgız halkını uykuda iken bastım. (Kırgız) hakanı ile Songa dağlarında savaştım. Hakanlarını öldürdüm...
  - `Tekin 1998, s. 37` (eslesen: _YaŞıMA_)
    > ...bodunuğ tfirglürü iğittim. Yalang bodunuğ tonluğ kıltım, çığariy bodunuğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım...
  - `Tekin 2003, s. 150` (eslesen: _YaŞıMA_)
    > ...) arasında benim vadilerim ve tarlalarım (var)" (Tar. B 4) *kamış āra kalmiş* "(Bir cariye) kamışlar arasında kalmış" (IB 38) *busanç āra mäŋi kälmiş* "keder arasında mutluluk gelmiş" (IB 52), vb. **350.** *birlä* "ile, ile birlikte" < *\*bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı...
  - `Ata 2011, s. 113` (eslesen: _YaŞıMA_)
    > ...eklik 1. ve 2. kişi iyelik eklerinden sonra geldiği örnekler vardır. Fakat söz konusu iyelik eki almış isimlerden sonra aynı ek +kA şeklinde de gelebilmektedir. 1. Teklik 1. kişi iyelik ekinden sonra: sekiz yegirmi yaş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gir...
  - `Olmez 2017, s. 45` (eslesen: _YaŞıMA_)
    > ...vaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 defa sefer etmiş", *otuz artokı bir yaşıma* "31 yaşımda", *otuz artokı üç yaşıma* "33 yaşımda". Bazin'in belirttiğine göre *artokı* ile kurulan sayı sisteminin kalıntıları Yakutlar arasında 19. yüzyıla kadar sürmüştür: *uon orduga bir* (= *\*on artokı bir*) "on bir". L. Clark'a göre de bugün Çin'in G...


## BK-D-32#1 - Bilge Kağan Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `OGuZ : TaPA : SÜLeDiM`
- **kelime karsiliklari:** OĞUZ : TARAFINA : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _OGuZ TaPA SÜLeDiM_)
    > ...inde çevirip kuşatarak dövdüm. Dördüncü olarak Ezgenti Kadız'da savaştım. [[s. 38]] Askerlerini orada mızrakladım, hezimete uğrattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük ü...
  - `Ata 2011, s. 121` (eslesen: _OGuZ TaPA SÜLeDiM_)
    > ...oyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını...
  - `Ata 2011, s. 114` (eslesen: _OGuZ TaPA SÜLeDiM_)
    > ...dı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 [[s. 114]] yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıkla...


## BK-D-32#2 - Bilge Kağan Yazıtı, Doğu 32. satir  (3 kelime)

- **transkripsiyon:** `İLKİ : SÜ : TaŞIKMıŞ`
- **kelime karsiliklari:** İLK : SÜ : TAŞIKMIŞ
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _İLKİ SÜ TaŞIKMıŞ_)
    > ...Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ bo...
  - `Ata 2011, s. 108` (eslesen: _İLKİ SÜ TaŞIKMıŞ_)
    > ...KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “...
  - `Tekin 1998, s. 39` (eslesen: _İLKİ SÜ_)
    > ...rak dövdüm. Dördüncü olarak Ezgenti Kadız'da savaştım. [[s. 38]] Askerlerini orada mızrakladım, hezimete uğrattım .............0ıı Otuz iki yaşımda Amgı kalesinde kışladığımızda kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta...
  - `Tekin 2003, s. 131` (eslesen: _İLKİ SÜ_)
    > ...nç* "üçüncü", *törtünç* "dördüncü", *bişinç* "beşinci", *yetinç* "yedinci", *säkizinç* "sekizinci", *tokuzunç* "dokuzuncu", *onunç* "onuncu", *bir yegirminç* "on birinci", vb. Sıra sayıları niteleyici ve zarf tümleci olarak kullanılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade...
  - `Radloff, s. 362` (eslesen: _İLKİ SÜ_)
    > ...sarı albastı" dır. "Sarı albas tı"lar hoca veya baksı (şaman) ların okumasıyla def olup gider ler. "Kara albastı" ise kendisini görmek iktidarına malik olan ocaklı adamdan başka kimseden korkmaz. "Sarı albastı" sarışın bir kadın suretindedir. Bazan keçi veya tilki suretlerine de girer. Bu ruh lohusalara musallat olup ciğerlerini alır, götürüp suya atar. [[s. 362]] Baksılar yahut ocaklı adamlar "albastı"yı ciğeri yerine koy mağa mecbur ederler. "Albastı"yı yakalayan baksı eline kopuz alarak şu afsunu söyler: "Ey, albastı z...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 175` (eslesen: _İLKİ SÜ_)
    > ...” dır. [[s. 175]] “ Sarı albastı” lar hoca yeya baksı (şaman) larm okumasiyle def olup giderler. “ Kara albastı” ise kendisini görmek iktidarına malik olan ocaklı adamdan başka kimseden korkmaz. “ Sarı albastı” sarışın bir kadın suretindedir. Bazan keçi veya tilki suretlerine de girer. Bu ruh lohusalara musallat olup ciğerlerini alır, gö türüp suya atar. Baksılar yahut ocaklı adamlar “ albastı” yı ciğeri yerine koymağa mecbur ederler. [[s. 175]] “ Albastı” yı yakalıyan baksı eline kopuz alarak şu afsunu söyler : % “ Ey, a...
