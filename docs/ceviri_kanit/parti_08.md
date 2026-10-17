# Ceviri istek paketi 8 - Orhun cumlecikleri

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


## KT-D-24#4 - Kül Tigin Yazıtı, Doğu 24. satir  (3 kelime)

- **transkripsiyon:** `BeGLiK : URI : OGLuŊ`
- **kelime karsiliklari:** BEĞLİK : URI : OĞLUN
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _BeGLiK URI OGLuŊ_)
    > ...dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye yaptı” vb. vb. gibi. 5.3. Deyimler Orhon yazıtlarının dili deyimler açısından da çok zengindir. İşte anlatımı z...
  - `Ata 2011, s. 51` (eslesen: _BeGLiK URI_)
    > ...k ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleşt...
  - `Olmez 2017, s. 112` (eslesen: _BeGLiK URI_)
    > ...- bod: isim tabanı - +un: kalıplaşmış çokluk eki - +lıg: isimden isim yapma eki (sıfat türetir) (Runik metin: BK D 7) *D 7. yoŋaşurtokin : üçün : türük : bodun : ėllėdök : ėlin : ıçgınu ıdmış : kaganladok : kaganin : yitürü ıdmış : tavgaç : bodunka : beglik : urı ogılın : kul kıltı : ėşilik k'ız ogılın : küŋ kıltı : türük : begler : türük : atin : ıdtı : tavgaçgı : begler : tavgaç atin : tutupan : tavgaç : kaganka : körmiş : ėlig yıl* "karşı kışkırttığı için, Türk halkı ülke yaptığı toprakları elinden çıkarmış, hakan...
  - `Tekin 2003, s. 105` (eslesen: _URI OGLuŊ_)
    > ...em adı olur: - *anta kisrä inisi kagan bolmiş ärinç* "Ondan sonra erkek kardeşleri hakan olmuşlar, şüphesiz" (KT D 4) - *eçim kagan olortokda özüm tarduş bodun üzä şad ärtim* "Amcam hakan tahta çıktığında ben Tarduş halkı üzerine Şad idim" (KT D 17) - *bäglik urı ogluŋ kul boltı, eşilik kız ogluŋ küŋ boltı* "Bey olmaya layık erkek çocukların köle oldu, hanım olmaya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin beli...
  - `Ata 2011, s. 44` (eslesen: _BeGLiK URI_)
    > ...rinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınıraras...
  - `Olmez 2017, s. 67` (eslesen: _BeGLiK_)
    > ...[s. 67] # s. 065 — Köktürkçe Dersleri (basılı sayfa numarası 67) GB, vb.) < \**yöl* "mutluluk, talih, refah" (krş. Tuv. *çoldug* "mutlu, talihli" < \**yöllug*). **{+lXk}:** Çok geniş bir kullanım alanı olan ekin kullanıldığı yere göre işlevleri de değişir: *beglik* "bey olmaya layık, bey olacak olan" (KT D 7, vb.); *eşilik* "hanım olmaya layık, hanım olacak olan" (KT D 7, vb.) < \**eşi* "hanım, soylu kadın"; *özlük* "şahsi, kişiye ait" (KÇ E 3, vb.) **{+sIg}:** Benzerlik sıfatları türetir: *yılsıg* "refah içinde, müre...


## KT-D-24#5 - Kül Tigin Yazıtı, Doğu 24. satir  (5 kelime)

- **transkripsiyon:** `KUL : BOLDI : iŞiLiK : KIZ : OGLuŊ`
- **kelime karsiliklari:** KUL : OLDU : İŞİLİK : KIZ : OĞLUN
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KIZ OGLuŊ_)
    > ...yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok b...
  - `Tekin 2003, s. 105` (eslesen: _KIZ OGLuŊ_)
    > ...nisi kagan bolmiş ärinç* "Ondan sonra erkek kardeşleri hakan olmuşlar, şüphesiz" (KT D 4) - *eçim kagan olortokda özüm tarduş bodun üzä şad ärtim* "Amcam hakan tahta çıktığında ben Tarduş halkı üzerine Şad idim" (KT D 17) - *bäglik urı ogluŋ kul boltı, eşilik kız ogluŋ küŋ boltı* "Bey olmaya layık erkek çocukların köle oldu, hanım olmaya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otu...
  - `Ogel C1, s. 561` (eslesen: _KIZ OGLuŊ_)
    > ...yaşamıştı. Bu konu ile ilgili Çince metin şöyledir : “Mu-yeh dağında Kitanların en eski ataları için bir mabed yapılmıştı. Büyük ata Ch'i-shou Kağan için Güney Tapınağında, Hatun'u için ise Kuzey Tapınağında kurban merasimi yapılırdı. Bu her iki atanın ve sekiz oğlunun, tıpkı kendilerine benzeyen ve boya ile yapılmış tabloları vardı” (LS, 37, 9a). [[s. 561]] Bilindiği üzere, Kül-Tegin ölünce, onun da mezarı üzerine mabet gibi bir ev, yani eski Türkçe “Bark” yapılmış ve içine de Kül-Tegin'in resimleri ile heykelleri konmu...
  - `Tekin 1998, s. 12` (eslesen: _iŞiLiK_)
    > ...rla semiz boğaları uzaktan bilmek zorunda kalsa (hangilerinin) semiz (hangilerinin) zayıf olduğunu bilmez imiş” (T I B 5-6). Bu cümle, sonuna ermiş “imiş” sözcüğünün eklendiği bir atasözü olmalıdır. [[s. 12]] Tunyukuk, Şad ünvanını taşıyan ve sadece yedi yüz kişilik küçük bir kuvveti olan Kutluğ'u kağan ilan etmenin isabetli bir karar olup olmayacağını düşünürken duruma uygun olan bu atasözünü hatırlıyor ve kullanıyor. Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka kalın bolsar topulgalı alp ermiş, y...
  - `Ata 2011, s. 46` (eslesen: _iŞiLiK_)
    > ...rdiği anlaşılmaktadır, ancak o yıllarda Köktürkler, Avarlara (Ruan-ruanlar) bağımlıdır. Bumın Kağan, Çin Seddi’nin kuzeyinde ipek ticaretiyle meşgulken bir yandan da Avarlara karşı başlatılan Tölis isyanını bastırır. Bu başarının getirisi, en az elli bin kişilik bir kuvvetin kendisine bağlanması olmuştur. Tölis isyanını bastırdıktan sonra, yeteri kadar güçlendiğine inanan Bumın Kağan, Avar hükümdarının kızı ile evlenmek ister, ancak bu isteği reddedilir. Bunun üzerine Çin’deki Batı Wei hükümdarının kızıyla e...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...


## KT-D-24#6 - Kül Tigin Yazıtı, Doğu 24. satir  (10 kelime)

- **transkripsiyon:** `KÜŊ : BODLI : BİLMeDÜK : ÜÇÜN : YaBLaKIŊıN : ÜÇÜN : eÇİM : KaGaN : UÇA : BaRDI`
- **kelime karsiliklari:** CARİYE : OLDU : BİLMEDİĞİN : İÇİN : YAVLAKLIĞIN : İÇİN : EÇÜM : KAĞAN : UÇA : VARDI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BİLMeDÜK ÜÇÜN YaBLaKIŊıN ÜÇÜN_)
    > ...ntan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan...
  - `Tekin 2003, s. 153` (eslesen: _ÜÇÜN YaBLaKIŊıN ÜÇÜN eÇİM_)
    > ...tutmuşlar hiç şüphesiz" (KT D 3) *beş balık anı üçün ozdı* "Beşbalık (şehri) onun için (yıkılmaktan) kurtuldu" (BK D 28) *antagıŋın üçün...* "Öyle olduğun için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (...
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN_)
    > ...yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka te...
  - `Tekin 2003, s. 105` (eslesen: _eÇİM KaGaN_)
    > ...öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä in...
  - `Ata 2011, s. 120` (eslesen: _eÇİM KaGaN_)
    > ...atılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik ek...
  - `Olmez 2017, s. 55` (eslesen: _eÇİM KaGaN_)
    > ...(KT G 5) **Bilnen geçmiş zaman *-DI* ekiyle kurulur:** *ilgerü şantuŋ yazıka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını...


## KT-D-25#1 - Kül Tigin Yazıtı, Doğu 25. satir  (5 kelime)

- **transkripsiyon:** `BaŞLayU : KIRKıZ : KaGaNıG : BaLBaL : TİKDiM`
- **kelime karsiliklari:** BAŞINA : KIRGIZ : KAĞANINI : BALBAL : DİKTİM
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BaŞLayU KIRKıZ KaGaNıG BaLBaL TİKDiM_)
    > ...]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra...
  - `Tekin 2003, s. 148` (eslesen: _BaŞLayU KIRKıZ KaGaNıG BaLBaL TİKDiM_)
    > ...arfları ya da öyle kullanılan sözcük ve söz öbekleri şunlardır: *başlayu* “önce, ilk olarak”, *ulayu* ay., *ekinti* “ikinci olarak”, *yana* “yine, tekrar, ikinci kez”, *äŋ ilk*, *äŋ ilki* “ilk olarak, ilk önce”. **343.** *başlayu* < *\*başla-* “başlamak”: - *başlayu kırkız kaganıg balbal tikdim* “İlk olarak Kırgız hakanının taş heykelini diktim” (KT D 25) - *kaŋım kaganka başlayu baz kaganıg balbal tikmiş* “(Amcam hakan), babam hakan için ilk olarak bağımlı hakanın taş heykelini dikmiş” (KT D 16) **344.** *ulayu* < *\*ula-* “birleştirmek” < *\*ul*...
  - `Tekin 1998, s. 23` (eslesen: _KaGaNıG BaLBaL_)
    > ...emiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği sü...
  - `Tekin 2003, s. 118` (eslesen: _BaŞLayU_)
    > ...ru yürüdüm, Tatarları sordum" (MÇ D 8) ## Birliktelik Durumu **270.** Adların birliktelik (comitative) durumu {+lIgU} eki ile kurulur. Orhon Türkçesinde seyrek olarak kullanılan bu ad durumu eylemin kiminle birlikte işlendiğini gösterir: *män ini+ligü bunça başlayu kazganmasar...* "Ben, erkek kardeşimle birlikte (halkıma) önderlik edip bunca çalışmasam ve başarılı olmasaydım..." (BK D 33) *korıgu eki üç kişi+ligü täzip bardı* "(Kale) muhafızı iki üç kişi ile birlikte kaçıp gitti" (BK D 41) *tört ini+ligü ärtimiz bizni ä...
  - `Olmez 2017, s. 54` (eslesen: _BaŞLayU_)
    > ...ar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birlikte bu şekilde başa geçip kazanmasaydım (...)" (BK D 33) ### Zamirler ve çekimleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :-...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNıG_)
    > ...yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hü...


## KT-D-25#2 - Kül Tigin Yazıtı, Doğu 25. satir  (3 kelime)

- **transkripsiyon:** `TÜRK : BODuNuG : aTI`
- **kelime karsiliklari:** TÜRK : BOYLARININ : ADI
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRK BODuNuG_)
    > ...şilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğü...
  - `Tekin 2003, s. 123` (eslesen: _TÜRK BODuNuG_)
    > ...hanet ettin" (KT D 23, BK D 19) 2. *özüm* "kendim", *özi* "kendisi, kendileri": *bän özüm tabgaç iliŋä kılıntım* "Ben kendim Çin egemenliği döneminde doğdum" (T 1) *män özüm kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben ken...
  - `Tekin 1998, s. 24` (eslesen: _BODuNuG aTI_)
    > ...dığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta ü...
  - `Tekin 2003, s. 232` (eslesen: _BODuNuG aTI_)
    > ...g adırtı. Yıta! 9. Är är<d>äm üçün, inim eçim uyurın üçün bäŋgümin tikä berti. ## II. Altınköl (Malov E 29) 1. On ay iltdi ögüm, oglan tugdum. Ärin ulga(d)tım. 2. İlimdä tört tägzindim, ärdämim üçün. İnänçu Alp [S]aŋun [män]. 3. Ärdäm b[ols]ar, bodunug, ärk bodunug <...> Atım Ärän Uluga. Ärdäm[l]ig batur m[än]. 4. Ärdäml[ig] bolsar bodun isirkäyü ermädi. Erinçim, ikizim ä! 5. Kuyda kadaşıma, kunçuyuma adrılu bardım. Män oglumka, bodunumka bökmädim. [s. 233] # s. 233 — TALAT TEKİN (basılı sayfa numarası 234) 6. Säkiz kırk yaşıma...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...


## KT-D-25#3 - Kül Tigin Yazıtı, Doğu 25. satir  (9 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLMaZUN : TİYiN : KaŊıM : KaGaNıG : ÖGüM : KaTUNuG : KÖTüRMüŞ`
- **kelime karsiliklari:** KÜSİ : YOK : OLMASIN : DİYE : BABAM : KAĞANI : ÖĞÜM : KADINI : GÖTÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tig...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...
  - `Tekin 2003, s. 167` (eslesen: _KaŊıM KaGaNıG ÖGüM KaTUNuG_)
    > ...Eylem Biçimleri**). ## {-(I)gmA} Ekli Eylem Sıfatı **405.** {-(I)gmA} ekli eylem sıfatı eyleyici adı olarak kullanılır, yani "bir eylemi ya da işi yapan, eden" anlamındadır. Bu eylem sıfatı hem niteleyici hem de ad olarak kullanılır. 1. Niteleyici olarak: *kaŋım kaganıg ögüm katunug kötür-ügmä täŋri* "Babam hakanı, annem hatunu yükseltmiş olan Tanrı" (BK D 20-21) *il ber-igmä täŋri* "(onlara) devlet vermiş olan Tanrı" (KT D 25, BK D 21) *bödkä kör-ügmä bäglär gü yaŋıltaçı siz* "Bu dönemde (tahta) sadık olan beyler, (siz) mi yanılacaksını...


## KT-D-25#4 - Kül Tigin Yazıtı, Doğu 25. satir  (7 kelime)

- **transkripsiyon:** `TeŊRİ : İL : BİRiGME : TeŊRİ : TÜRK : BODuN : aTI`
- **kelime karsiliklari:** TANRI : İL : VEREN : TANRI : TÜRK : BOYLARININ : ADI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _TeŊRİ İL BİRiGME TeŊRİ_)
    > ...atdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prense...
  - `Tekin 2003, s. 191` (eslesen: _TÜRK BODuN aTI_)
    > ...lk kaçıp gitmişti; On Ok ordusunu sefere çıkarttım" (T 43) *alp är biziŋä täg-miş är-ti* "Yiğit askerler bize saldırmıştı" (KT D 40) *ol ödkä kul kullug küŋ küŋlüg bol-miş är-ti* "O dönemde köleler köle sahibi, cariyeler hizmetçi sahibi olmuşlardı" (BK D 18) *türk bodun ati yok bolu bar-miş är-ti* "Türk halkının adı yok olup gidivermişti" (O ön 3) 2. *-miş* + *ärmiş*: *adıglı toŋuzlı ārt üzä sokuş-miş är-miş* "Bir ayı ile bir domuz bir dağ geçidinde karşılaşmışlar imiş" (IB 6) [s. 192] # s. 192 — TALAT TEKİN Bu sonbiçim, cüml...
  - `Olmez 2017, s. 57` (eslesen: _TÜRK BODuN aTI_)
    > ...e öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT...


## KT-D-25#5 - Kül Tigin Yazıtı, Doğu 25. satir  (7 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLMaZUN : TİYiN : ÖZüMüN : OL : TeŊRİ`
- **kelime karsiliklari:** KÜSİ : YOK : OLMASIN : DİYE : ÖZÜMÜ : O : TANRI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tig...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...
  - `Ata 2011, s. 176` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > .... Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi...
  - `Ata 2011, s. 169` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > ...rden hangisidir? a. Ölteçi b. Bodunug c. Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. [[s. 169]] Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi emir eki 4. Sü sül...


## KT-D-26#1 - Kül Tigin Yazıtı, Doğu 26. satir  (3 kelime)

- **transkripsiyon:** `KaGaN : OLuRTDI : eRiNÇ`
- **kelime karsiliklari:** KAĞAN : OTURTTU : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaGaN OLuRTDI eRiNÇ_)
    > ...üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prensesi verdik. (Buna rağmen) kendisi hata işledi. (Sonuç olarak) Az'ların hakanı öldü, halkı...
  - `Tekin 1998, s. 3` (eslesen: _KaGaN_)
    > ...lleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarımı: 2...
  - `Ergin 1970, s. 3` (eslesen: _KaGaN_)
    > ...in verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. Türk de...
  - `Tekin 2003, s. 12` (eslesen: _KaGaN_)
    > ........................... 216 METİN ÖRNEKLERİ ....................................................................................... 217 Kül Tigin Yazıtı (732) .................................................................................... 219 Bilge Kagan Yazıtı (735) ................................................................................ 221 [s. 13] # s. 013 — İÇİNDEKİLER Tunyukuk Yazıtı (725 ?) ................................................................................. 222 Ongin Yazıtı (732?...
  - `Ata 2011, s. 4` (eslesen: _KaGaN_)
    > ...Kendimizi Sınayalım Yanıt Anahtarı …………………….……..……… 36 Sıra Sizde Yanıt Anahtarı ………….……………..……….……..……… 36 Yararlanılan Kaynaklar ………….………………..……….……..……… 36 Köktürkler ……….……….…………………….………………………. 38 I. TÜRK KAĞANLIĞI (552-630) ………………………..…………….. 39 Yazıtlarda I. Köktürk Kağanlığı’nın Kurulması ……….….………..…… 40 I. Köktürk Kağanlığı’nın İran ve Bizans’la Olan İlişkileri ve Bu İlişkide Sogdların Rolü ……………………….…….…………… 40...
  - `Olmez 2017, s. 5` (eslesen: _KaGaN_)
    > ...SİT** [s. 5] # s. 003 — İçindekiler (basılı sayfa numarası 5) ## İçindekiler - Sunuş • 7 - Önsöz • 9 - **I. BÖLÜM • 11** - Köktürkçe Dersleri • 11 - Eski Türk Yazıtlarından Önce Türklere ve Hunlara Ait Bilgiler • 11 - İlk Türk Devleti: I. (Doğu) Türk Kağanlığı • 13 - İlk Türk Kağanlığından Kalma Yazıtlar • 15 - Türklerden Kalma Bilinen en eski Yazıtın Çevirisi: Bugut Yazıtı • 16 - Türk Kağanları • 17 - II. (Doğu)Türk Kağanlığı • 20 - Uygur Kağanlığı • 22 - İkinci (Doğu) Türk Kağanlığından Kalma yazı...


## KT-D-26#2 - Kül Tigin Yazıtı, Doğu 26. satir  (4 kelime)

- **transkripsiyon:** `NeŊ : YILSıG : BODuNKA : OLuRMaDıM`
- **kelime karsiliklari:** NE[CE] : YILSI : BOYLARIN [ÜZERİNE] : OTURMADIM
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _YILSıG BODuNKA OLuRMaDıM_)
    > ...(D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prensesi verdik. (Buna rağmen) kendisi hata işledi. (Sonuç olarak) Az'ların hakanı öldü, halkı (da) kul köle oldu. [[s. 24]] Köğ...
  - `Tekin 2003, s. 147` (eslesen: _YILSıG BODuNKA_)
    > ...yde Dokuz Ersin’e kadar sefer ettim, Tibet’e hiç varmadım (Tibet’e az kala durdum)” (KT G 3) **340.** *näŋ* “hiç”: - *ötükän yir olorup arkış tirkiş ısar näŋ buŋug yok* “Ötüken ülkesinde oturup (oradan) kervanlar gönderirsen hiç derdin olmaz” (KT G 8) - *näŋ yılsıg bodunka olormadım* “(Ben) hiç de refah içinde olan bir halk üzerine hakan olmadım” (KT D 36) *näŋ* sözcüğü niteleyici olarak da kullanılır: - *näŋ yerdäki kaganlıg bodunka...* “Herhangi bir ülkedeki hakanlı bir halka...” (T 56) [s. 148] # s. 148 — TALAT TEKİN Yine...
  - `Tekin 2003, s. 230` (eslesen: _OLuRMaDıM_)
    > ...irmi yaşda alınmışım kunçuyuma, buŋ a, adrıldım a! 2. Üç ogluma adrıldım. Yıta! Bökmädim! Katıglangıl! 3. Beş yegirmi yaşımda Tabgaç kanga bardım. Är ärdämim üçün alpun (?), altun, kümüşüg ägri täbä, eldä kişi kazgandım. 4. Yeti böri ölürdüm. Barsıg, kökmäkig ölürmädim. 5. Yerimä, yıta, subuma adrıldım a! Buŋ a! Äsizim ä! Yıta! 6. Bodunuma, kinimä, kadaşıma adrıldım! Bökmädim! 7. Elimä kanıma bökmädim! Yaşım yeti yetmiş. Azdım. 8. Yatda tüŋürümä adrıldım. 9. Antlıg adaşıma, antsızda ädgü eşimä adrıldım a! 10. Säkiz adaklıg...
  - `Ata 2011, s. 121` (eslesen: _OLuRMaDıM_)
    > ...durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: Bu sontakı, kişi zamirleri ile iyelik gövdelerinin ne...
  - `Tekin 1998, s. 22` (eslesen: _BODuNKA_)
    > ...erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtükin üçün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Tem...
  - `Tekin 2003, s. 126` (eslesen: _BODuNKA_)
    > ...57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39)...


## KT-D-26#3 - Kül Tigin Yazıtı, Doğu 26. satir  (9 kelime)

- **transkripsiyon:** `İÇRE : aŞSıZ : TaŞRA : TONSuZ : YaBıZ : YaBLaK : BODuNDA : ÜZE : OLuRTuM`
- **kelime karsiliklari:** İÇİ : AŞSIZ : DIŞI : DONSUZ : YAVUZ : YAVLAK : BOYLARIN : ÜZE[RİNE] : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren aklı ermez gibi olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan...
  - `Ata 2011, s. 118` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...asra ‘aşağıda, altta’, içre ‘içerde, içinde’, taşra ‘dışarı, dışarıda’, öŋre ‘ön tarafta, ileride, doğuda’, kisre ‘geride, batıda’. üze teŋri basmasar asra yir telinmeser “yukarıda gök çökmedikçe, aşağıda yer delinmedikçe” KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 111 [s. 119] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak...
  - `Ata 2011, s. 111` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...ile türetilmiş yer zarfları: asra ‘aşağıda, altta’, içre ‘içerde, içinde’, taşra ‘dışarı, dışarıda’, öŋre ‘ön tarafta, ileride, doğuda’, kisre ‘geride, batıda’. üze teŋri basmasar asra yir telinmeser “yukarıda gök çökmedikçe, aşağıda yer delinmedikçe” KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 [s. 112] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak tarafta” KT D4 kisre kün batsıkıŋa tegi “geride gü...


## KT-D-26#4 - Kül Tigin Yazıtı, Doğu 26. satir  (4 kelime)

- **transkripsiyon:** `İNiM : KÖLTİGiN : BİRLE : SÖZLeŞDiMiZ`
- **kelime karsiliklari:** İNİM : KÜLTİĞİN : İLE : SÖZLEŞTİK
- **kanit:**
  - `Ata 2011, s. 120` (eslesen: _BİRLE SÖZLeŞDiMiZ_)
    > ...mavi gök aşağıda yagız yer yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17...
  - `Ata 2011, s. 113` (eslesen: _BİRLE SÖZLeŞDiMiZ_)
    > ...kılınmış “yukarıda mavi gök aşağıda yagız yer yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 [[s. 113]] birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik...
  - `Tekin 1998, s. 25` (eslesen: _SÖZLeŞDiMiZ_)
    > ...(olarak tahta) oturttu, hiç şüphesiz. (Ben) hiç de zengin ve müreffeh (bir) halk üzerine hükümdar olmadım. [[s. 24]] (Tam tersine) karnı aç, sırtı çıplak, yoksul ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sa...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Tekin 1998, s. 10` (eslesen: _BİRLE_)
    > ...yok olmak”, tir- kubrat- “derlemek ve toplamak”, yahgıl- yazın- “yanılmak ve hata etmek” vb. gibi. 5.2. Koşutluk Koşutluk, yani parallelism, Orhon yazıtları dilinin tipik özelliklerinden biridir. [[s. 10]] Eşit öğeli birimlerden oluşan cümle parçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bil...
  - `Ergin 1970, s. 37` (eslesen: _BİRLE_)
    > ...n hücum et; ben kuzey taraftan hücum edeyim; Türk Sir milleti, yerinde hiç yürümesin; mümkünse hep yok edelim. [[s. 37]] O sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım gelmedi. Ondan sonra kağanıma arz ettim. Şöyle arz ettim: Çin, Oğuz, Kıtay bu üçü birleşirse | kala kalacağız. Kendi içi dıştan tutulmuş gibiyiz. Yufka olanın delinmesi kolay imiş, ince olanı kırmak kolay. Yufka kalın olsa delinmesi zor imiş. İnce | yoğun olsa kırmak zor imiş. Doğuda Kıtaydan, güneyde Çinden, batıda batılılardan, kuzeyde Oğuzdan...


## KT-D-26#5 - Kül Tigin Yazıtı, Doğu 26. satir  (3 kelime)

- **transkripsiyon:** `KaŊıMıZ : eÇiMiZ : KaZGaNMıŞ`
- **kelime karsiliklari:** BABAMIZIN : EÇÜMÜZÜN : KAZANMIŞ [OLDUĞU]
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _eÇiMiZ KaZGaNMıŞ_)
    > ...de zengin ve müreffeh (bir) halk üzerine hükümdar olmadım. (Tam tersine), karnı aç, sırtı çıplak yoksul (ve) sefil (bir) halk üzerine hükümdar oldum. Prens iki şad (ve) kardeşim [s. 37] 70 BİLGE KAĞAN YAZITI Kül)! Tigin (bir)le sözleşdimiz: Kanğımız (D 22) eçimiz kazganmış bodun atı küsi yok bollmazun| tiyin Türük bodun üçün tün udımadım, küntüz olurmadım; inim Kül Tl(igin birle, eki şad) birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. (Men özüm kağan olurtukuma|, yir sayu barmış bodun (yadağın yalafığın...
  - `Tekin 1998, s. 24` (eslesen: _KaZGaNMıŞ_)
    > ...iz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edg...
  - `Tekin 2003, s. 145` (eslesen: _KaZGaNMıŞ_)
    > ...ça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä*...
  - `Ata 2011, s. 120` (eslesen: _KaZGaNMıŞ_)
    > ...arak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış...
  - `Tekin 1998, s. 25` (eslesen: _eÇiMiZ_)
    > ...hiç şüphesiz. (Ben) hiç de zengin ve müreffeh (bir) halk üzerine hükümdar olmadım. [[s. 24]] (Tam tersine) karnı aç, sırtı çıplak, yoksul ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış b...
  - `Olmez 2017, s. 64` (eslesen: _eÇiMiZ_)
    > ...r közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim*...


## KT-D-26#6 - Kül Tigin Yazıtı, Doğu 26. satir  (5 kelime)

- **transkripsiyon:** `BODuN : aTI : KÜSİ : YOK : BOLMaZUN`
- **kelime karsiliklari:** BOYLARIN : ADI : KÜSİ : YOK : OLMASIN
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BODuN aTI KÜSİ YOK BOLMaZUN_)
    > ...en) hiç de zengin ve müreffeh (bir) halk üzerine hükümdar olmadım. [[s. 24]] (Tam tersine) karnı aç, sırtı çıplak, yoksul ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana k...
  - `Ata 2011, s. 176` (eslesen: _BODuN aTI KÜSİ YOK BOLMaZUN_)
    > ...nug c. Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi...
  - `Ata 2011, s. 169` (eslesen: _BODuN aTI KÜSİ YOK BOLMaZUN_)
    > ...şağıdakilerden hangisidir? a. Ölteçi b. Bodunug c. Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. [[s. 169]] Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi emir eki 4. Sü sül...


## KT-D-27#1 - Kül Tigin Yazıtı, Doğu 27. satir  (6 kelime)

- **transkripsiyon:** `TİYiN : TÜRK : BODuN : ÜÇÜN : TÜN : UDuMaDıM`
- **kelime karsiliklari:** DİYE : TÜRK : BOYLARI : İÇİN : GECE : UYUMADIM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BODuN ÜÇÜN TÜN_)
    > ...hükümdar olmadım. [[s. 24]] (Tam tersine) karnı aç, sırtı çıplak, yoksul ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiy...
  - `Tekin 2003, s. 106` (eslesen: _BODuN ÜÇÜN TÜN_)
    > ...bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük bodun üçün tün udımadım...* "Türk halkı için gece uyumadım..." (KT D 27) 5. Bir eylemin yerini ya da zamanını bildiren zarf tümleci olur: - *ötükän yiş olorsar...* "Ötüken dağlarında oturursanız..." (KT G 8) - *türük bodun üçün tün udımadım...* "Türk halkı için gece uyumad...
  - `Ata 2011, s. 121` (eslesen: _BODuN ÜÇÜN TÜN_)
    > ...şi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: Bu sontakı, kişi zamirleri...
  - `Ata 2011, s. 114` (eslesen: _BODuN ÜÇÜN TÜN_)
    > ...4]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: [[s. 114]] Bu sontakı, kişi zamirleri ile iyelik gövdelerin...


## KT-D-27#2 - Kül Tigin Yazıtı, Doğu 27. satir  (10 kelime)

- **transkripsiyon:** `KÜNTüZ : OLuRMaDıM : İNiM : KÖLTİGiN : BİRLE : iKİ : ŞaD : BİRLE : ÖLÜ : YİTÜ`
- **kelime karsiliklari:** GÜNDÜZ : OTURMADIM : İNİM : KÜLTİĞİN : İLE : İKİ : ŞAD : İLE : ÖLE : YİTE
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...l ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabga...
  - `Ata 2011, s. 172` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...)ç(i)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı amcamızın kazanmış oldukları halkın küsi yok͡ bo[lmazun] tiy(i)n türük͡ bod(u)n üç(ü)n tün udım(a)d(ı)m adı sanı yok olmasın diye Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b...
  - `Ata 2011, s. 165` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...r oldum. Prens iki şad ve kardeşim Költigin ile anlaştık (konuştuk): Babamızın [s. 165] D22 (e)ç(i)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s...


## KT-D-27#3 - Kül Tigin Yazıtı, Doğu 27. satir  (8 kelime)

- **transkripsiyon:** `KaZGaNDıM : aNÇA : KaZGaNıP : BİRiKİ : BODuNuG : OT : SUB : KILMaDıM`
- **kelime karsiliklari:** KAZANDIM : ANCA : KAZANIP : BÜTÜN : BOYLARI : ATEŞ : SU : KILMADIM
- **kanit:**
  - `Tekin 1998, s. 13` (eslesen: _BODuNuG OT SUB KILMaDıM_)
    > ...Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Türklerin dillerini yazmak için kullandıkları en eski bir alfabe ile yazılmıştır. Türkoloji literatüründe genellikle eski Tü...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG OT SUB_)
    > ...özi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren aklı ermez gibi olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan [[s. 11]] perişan duruma gelmek, saçı başı yolunmak), birki bodunuğ ot sub kıl- “birleşik halkı ateş ile su (gibi birbirine düşman) etmek”, tün udıma-, küntüz olurma- “geceleri uyumamak, gündüzleri [s. 12] 20 GİRİŞ oturmamak” (gece gündüz demeden çalışmak, çok çalışmak), kızıl kanın töküt-, kara terin yüğürt- “kızıl kanını akıtma...
  - `Tekin 2003, s. 123` (eslesen: _BODuNuG OT_)
    > ...ettin" (KT D 23, BK D 19) 2. *özüm* "kendim", *özi* "kendisi, kendileri": *bän özüm tabgaç iliŋä kılıntım* "Ben kendim Çin egemenliği döneminde doğdum" (T 1) *män özüm kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş kagan kazganmasar udu bän özüm kazganmasar...* "İlteriş Hakan kazanmamış olsaydı ve ben kendim...
  - `Ata 2011, s. 172` (eslesen: _OT SUB_)
    > ...sanı yok olmasın diye Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b(a)rm(ı)ş bod(u)n [yadagın dım. Öylece çabalayıp birleşik halkı yalaŋın] ölü yitü [yana] ateş (ile) su etmedim (birbirine...
  - `Ata 2011, s. 165` (eslesen: _OT SUB_)
    > ...[s. 165] D22 (e)ç(i)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s. 165]] ilg(e)rü k͡ııt(a)ń t(a)t(a)bı bod(u)n t(a)pa bir(i)gerü t(a...
  - `Ogel C2, s. 340` (eslesen: _aNÇA KaZGaNıP_)
    > ...sözü sunuyoruz. Türk düşüncesine göre, “insanlardan eluşan bir millet, etlar vesular gibi, ruhsuz ve duygusuz değillerdi”, Bu bir Türk düşüncesi ve dünya görüşüdür. [[s. 340]] Bu düşünce, eski türkçemizde, daha derin ve daha manalı olarak anlatılıyordu*: 3) “Anca kazganıp, tböyle kazanılmış ve düzenlenmiş) biriki budunıg, ot - su b kılmadım” Buradaki “biriki” sözü, bir leş mi ş veya müttehid anlayışının, aşağı yukarı bir karşılığı olabilir: 4) “Böyle kazanılmış ve düzenlenmiş olan birlik (halindeki) milletimi, otlar ve sular...


## KT-D-27#4 - Kül Tigin Yazıtı, Doğu 27. satir  (6 kelime)

- **transkripsiyon:** `MeN : ÖZüM : KaGaN : OLuRTUKuMA : YİR : SaYU`
- **kelime karsiliklari:** BEN : ÖZÜM : KAĞAN : OTURDUĞUMDA : YERE : HER
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA YİR SaYU_)
    > ...5] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, k...
  - `Ata 2011, s. 172` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA_)
    > ...e Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b(a)rm(ı)ş bod(u)n [yadagın dım. Öylece çabalayıp birleşik halkı yalaŋın] ölü yitü [yana] ateş (ile) su etmedim (birbirine düş-...
  - `Ata 2011, s. 165` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA_)
    > ...)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s. 165]] ilg(e)rü k͡ııt(a)ń t(a)t(a)bı bod(u)n t(a)pa bir(i)gerü t(a)bg(a)ç t(a)pa (e)ki y(e)g(i)rmi sül(e)...


## KT-D-28#1 - Kül Tigin Yazıtı, Doğu 28. satir  (4 kelime)

- **transkripsiyon:** `BaRMıŞ : BODuN : ÖLÜ : YİTÜ`
- **kelime karsiliklari:** VARMIŞ : BOYLAR : ÖLE : YİTE
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BaRMıŞ BODuN ÖLÜ YİTÜ_)
    > ..., eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün,...
  - `Tekin 2003, s. 117` (eslesen: _BaRMıŞ BODuN ÖLÜ YİTÜ_)
    > ...er" (T 16) *bäglär kop[ın] yanalım... tedi* "(O haberi işitip) beyler hep birlikte "Dönelim!" dediler" (T 36-37) *oŋ totok yurçin yaraklıg älig+in tutdı* "(Prens Kül) Ong Totok'un kayın biraderini silahlı eli ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok...
  - `Ata 2011, s. 119` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...gibi sözcükler tarz zarfı olarak kullanılmıştır. ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu...
  - `Ata 2011, s. 112` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. [[s. 112]] ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 [s. 113] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’,...


## KT-D-28#2 - Kül Tigin Yazıtı, Doğu 28. satir  (4 kelime)

- **transkripsiyon:** `YaDaGıN : YaLıŊıN : YaNA : KeLTİ`
- **kelime karsiliklari:** YAYA : YALIN : YANA : GELDİ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _YaNA KeLTİ_)
    > ...lmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğitt...
  - `Ata 2011, s. 119` (eslesen: _YaNA KeLTİ_)
    > ...ak kullanılmıştır. ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayı...
  - `Ata 2011, s. 112` (eslesen: _YaNA KeLTİ_)
    > ...ler tarz zarfı olarak kullanılmıştır. [[s. 112]] ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 [s. 113] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’...
  - `Tekin 1998, s. 10` (eslesen: _YaDaGıN_)
    > ...ç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değild...
  - `Tekin 2003, s. 138` (eslesen: _YaDaGıN_)
    > ...bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıgaç tutunu agturtum* "(Askerleri), atları yederek, yayan ve ağaçlara tutuna tutuna yukarı ağdırdım" (T 25) **304.** *yüg(g)ärü* "yukarı doğru" < *\*yüg* "üst, tepe, yukarı" (krş. MK *yügsä-* "yükselmek", yukarı çıkmak"): 1. *türük bäglär bodun ögirip säbini...
  - `Ata 2011, s. 94` (eslesen: _YaDaGıN_)
    > ...evletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki karışıklığın habercisi gibidir. ben ‘ben’ T 1 ~ bini ‘beni’ T 10...


## KT-D-28#3 - Kül Tigin Yazıtı, Doğu 28. satir  (20 kelime)

- **transkripsiyon:** `BODuNıG : İGiDeYİN : TİYiN : YIRıGaRU : OGuZ : BODuN : TaPA : İLGeRÜ : KITaYN : TaTaBI : BODuN : TaPA : BİRiGeRÜ : TaBGaÇ : TaPA : ULuG : SÜ : iKİ : YiGiRMİ : SÜLeDiM`
- **kelime karsiliklari:** BOYLARI : YEDİREYİM : DİYE : YIRIDA : OĞUZ : BOYLARI : TARAFINA : İLERİ : KITAY : TATABI : BOYLARI : TARAFINA : BERİDE : TABGAÇ : TARAFINA : UŁU : SÜ[YÜ] : İKİ : İKİRMİ [KEZ] : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _OGuZ BODuN TaPA İLGeRÜ_)
    > ...küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ ü...
  - `Tekin 2003, s. 151` (eslesen: _TaBGaÇ TaPA ULuG SÜ_)
    > ...k tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa ulug sü eki yegirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32)...
  - `Tekin 2003, s. 138` (eslesen: _OGuZ BODuN TaPA_)
    > ...e Dokuz Ersin'e kadar sefer ettim" (KT G 3) *birgärü tabgaç tapa* "Güneyde Çin'e doğru..." (KT D 28, BK D 23), vb. **302.** *yırgaru* "kuzeye doğru, kuzeyde" < *\*yırı* "kuzey": *yırgaru tün ortosıŋaru* "kuzeyde gece ortasına doğru" (KT G 2, BK K 2) *yırgaru oguz bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıg...


## KT-D-28#4 - Kül Tigin Yazıtı, Doğu 28. satir  (2 kelime)

- **transkripsiyon:** `SÜŊüŞDüM : aNDA`
- **kelime karsiliklari:** SÜNGÜŞDÜM : [O] ANDA
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...
  - `Tekin 2003, s. 112` (eslesen: _SÜŊüŞDüM_)
    > ...efat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüM_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayıs...
  - `Olmez 2017, s. 45` (eslesen: _SÜŊüŞDüM_)
    > ...ld Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47...
  - `Ata 2011, s. 108` (eslesen: _SÜŊüŞDüM_)
    > ...i, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek...


## KT-D-29#1 - Kül Tigin Yazıtı, Doğu 29. satir  (4 kelime)

- **transkripsiyon:** `KİSRE : TeŊRİ : YaRLıKaZU : KUTuM`
- **kelime karsiliklari:** KİSRE : TANRI : BUYURDUĞU : KUTUM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _KİSRE TeŊRİ YaRLıKaZU KUTuM_)
    > ...kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, i...
  - `Ata 2011, s. 122` (eslesen: _KİSRE TeŊRİ_)
    > ...adar (orduyu) yürüttüm” KT G4 Bulunma-Çıkma Durumuyla Kullanılan Sontakılar (kisre, üze, ötrü) kisre: yagru kontuk+da kisre ańıg bilig anta öyür ermiş “yaklaşıp yerleştikten sonra kötülükleri o zaman düşünürmüş” KT G5 an+ta kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç, sırtı çıplak, yoksul ve sefil bir halk üzerine hükümdar oldum” KT D 26 ötrü: an+ta ötrü kaganım...
  - `Ata 2011, s. 55` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...e yerleşik hayata geçerler. Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar...
  - `Olmez 2017, s. 58` (eslesen: _TeŊRİ YaRLıKaZU_)
    > ...gıl tėdi* "akıl ver! dedi" (T 5) **Teklik 3. kişi: -zUn, -zu, -çun** *sü başi inel kagan tarduş şad barzun tėdi* "Ordunun komutanı (olarak) İnel Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilg...
  - `Tekin 2003, s. 216` (eslesen: _YaRLıKaZU KUTuM_)
    > ...# s. 216 — TALAT TEKİN ## Ara Cümle **491.** Bir birleşik cümlenin ya bağımlı yan cümlesi ya da temel cümlesi içine - birleşik cümlenin yapısını bozmadan - ek bilgi vermek için bir ya da iki ara cümle ya da bir söz öbeği sokulabilir: - *[anta] kisrä - täŋri yarlıkazu - kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Ondan sonra - Tanrı bağışlasın - ilahi lutfum olduğu için, talihim olduğu için, ölecek halkı diriltip doyurdum" (KT D 28-29) - *yorımasar bizni - kagani alp ärmiş, ayguçısi bilgä ärmiş - kaça(n) nä...
  - `Ata 2011, s. 115` (eslesen: _KİSRE TeŊRİ_)
    > ...yorıtdım “bunca yere kadar (orduyu) yürüttüm” KT G4 Bulunma-Çıkma Durumuyla Kullanılan Sontakılar [[s. 115]] (kisre, üze, ötrü) kisre: yagru kontuk+da kisre ańıg bilig anta öyür ermiş “yaklaşıp yerleştikten sonra kötülükleri o zaman düşünürmüş” KT G5 an+ta kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç, sırtı çıplak, yoksul ve sefil bir halk üzerine hükümdar oldum” KT D ötrü: an+ta ötrü kaganıma ötüntüm “ondan sonra hakanıma...


## KT-D-29#2 - Kül Tigin Yazıtı, Doğu 29. satir  (9 kelime)

- **transkripsiyon:** `BaR : ÜÇüN : ÜLÜGüM : BaR : ÜÇÜN : ÖLTeÇİ : BODuNuG : TİRGüRÜ : İGiTiM`
- **kelime karsiliklari:** VAR [OLDUĞU] : İÇİN : BÖLÜĞÜM : VAR [OLDUĞU] : İÇİN : ÖLECEK : BOYLARI : DİRİLTİP : YEDİRDİM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BaR ÜÇüN ÜLÜGüM BaR_)
    > ...28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s....
  - `Tekin 2003, s. 158` (eslesen: _BaR ÜÇüN ÜLÜGüM BaR_)
    > ...esinde boy da halk da bir kişi de hiç olmayacak idi" (T 60) ## Yan Cümle Bağlaçları **374.** Orhon Türkçesinde yan cümle bağlaçları ya da bu görevle kullanılan sözcükler şunlardır: *üçün, tiyin* ve *tip*. **375.** *üçün* "için" (bk. **Sontakılar**): *kutum bar üçün, ülügüm bar üçün öltäçi bodunug tirgürü igi(t)tim* "İlahi lutfum olduğu için, talihim olduğu için, ölecek halkı diriltip doyurdum" (KT D 29) *bägläri boduni tüzsüz üçün... türük bodun illädök ilin ıçgınu ıdmiş kaganladok kaganin yitürü ıdmiş* "Beyleri ve halkı barışık ol...
  - `Ata 2011, s. 55` (eslesen: _BaR ÜÇüN ÜLÜGüM BaR_)
    > ...ler. Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig k...
  - `Ata 2011, s. 48` (eslesen: _BaR ÜÇüN ÜLÜGüM BaR_)
    > ...urlar, kültürel bakımdan gelişmiş Türk boylarından biri olarak öbür Türklerden önce yerleşik hayata geçerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl...


## KT-D-29#3 - Kül Tigin Yazıtı, Doğu 29. satir  (7 kelime)

- **transkripsiyon:** `YaLıŊ : BODuNuG : TONLıG : ÇIGaYN : BODuNuG : BaY : KILDıM`
- **kelime karsiliklari:** YALIN : BOYLARI : DONLU : ÇIĞANY : BOYLARI : BAY : KILDIM
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
