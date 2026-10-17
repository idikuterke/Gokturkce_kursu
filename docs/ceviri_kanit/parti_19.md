# Ceviri istek paketi 19 - Orhun cumlecikleri

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


## BK-D-18#3 - Bilge Kağan Yazıtı, Doğu 18. satir  (3 kelime)

- **transkripsiyon:** `KÜŊLiG : BOLMıS : eRTİ`
- **kelime karsiliklari:** CARİYELİK : OLMUŞ : İDİ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BOLMıS eRTİ_)
    > ...n tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün!...
  - `Ata 2011, s. 145` (eslesen: _BOLMıS eRTİ_)
    > ...içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. bilig bilmez kişi ol s...
  - `Olmez 2017, s. 57` (eslesen: _BOLMıS eRTİ_)
    > ...oksuz kök türük (ėti) ança olorur ermiş* "dağınık halde öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er bi...
  - `Ata 2011, s. 138` (eslesen: _BOLMıS eRTİ_)
    > ...138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp yagru...
  - `Tanyeri, s. 18` (eslesen: _BOLMıS eRTİ_)
    > ...Birleşik Çekim: Köktürkçede birleşik çekimin hikâye ve rivayet şekilleri vardır. Hikâye, “er-” fiilinin bilinen geçmiş zamanıyla, rivayet “er-” fiilinin öğrenilen geçmiş zamanıyla yapılır. “Er-”, “i-” fiilinin Göktürkçedeki aslî biçimidir. • Hikâye: “bolmış erti” (olmuştu), “tegmiş erti” (değmişti), “kelürür ertim” (getirdim), “bayur ertimiz” (bağlıyorduk), “kaltaçı ertigiz” (kalacaktınız) • Rivayet: “yorıyur ermiş” (yürüyormuş), “yagutur ermiş” (yaklaştırırmış), “olurur ermiş” (oturuyormuş), “yorıtmaz ermiş” (...
  - `Tekin 1998, s. 10` (eslesen: _BOLMıS_)
    > ...a yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yarat...


## BK-D-18#4 - Bilge Kağan Yazıtı, Doğu 18. satir  (4 kelime)

- **transkripsiyon:** `İNİSİ : eÇİSİN : BİLMeZ : eRTİ`
- **kelime karsiliklari:** İNİSİ : EÇİSİNİ : BİLMEZ : İDİ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _İNİSİ eÇİSİN_)
    > ...alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmı...
  - `Tekin 2003, s. 152` (eslesen: _İNİSİ eÇİSİN_)
    > ...tasındaki) aş (kazanı) gibi idik" (T 8) [s. 152] # s. 152 — TALAT TEKİN *öz (i)çi taşın tutmiş täg biz* "Kendi iç (kuvvetler)i (ile) dış (toprakları)ı tutmuş gibiyiz" (T 13), vb. Bu sontakı da 3. kişi iyelik ekli adların nesne durumunu yönetir: *anta kisrä inisi eçisin täg kılınmadok ärinç, oglı kaŋin täg kılınmadok ärinç* "Ondan sonra, erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz" (KT D 4-5) *bakırı buŋsız ärti kara saçın täg* "Onun bakırı sayısız idi, kara saçları gi...
  - `Ata 2011, s. 51` (eslesen: _İNİSİ eÇİSİN_)
    > ...gan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçü...
  - `Olmez 2017, s. 108` (eslesen: _İNİSİ eÇİSİN_)
    > ...bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu yerlerden Kore halkı, Zhoulular, Tibet, Avar, Bizans, Kırgız, Üç Kurıkan, Otuz Tatar, Kıtany, Tatavı bunca halk yasçı, ağıtçı olarak gelmiş, ağlayıp yas tutmuş. O kadar ünlü bir hakanmış. Ondan sonra tabiî küçük karde...
  - `Tekin 1998, s. 36` (eslesen: _BİLMeZ eRTİ_)
    > ...ümiz......... yana birtimiz. İlgerü) Kadırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün,...
  - `Ata 2011, s. 44` (eslesen: _İNİSİ eÇİSİN_)
    > ...lp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşür...


## BK-D-18#5 - Bilge Kağan Yazıtı, Doğu 18. satir  (4 kelime)

- **transkripsiyon:** `OGLI : KaŊIN : BİLMeZ : eRTİ`
- **kelime karsiliklari:** OĞLU : BABASINI : BİLMEZ : İDİ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _OGLI KaŊIN_)
    > ...lar, Kıtaylar, Tatabılar... bunca halklar gelerek ağlamışlar, yas tutmuşlar. (Onlar) onca ünlü hükümdarlar imiş. [s. 22] 40 KÜLTİGĞİN YAZITI Anta kisre, inisi kağan (D 5) bolmış erinç, oğlıtı kağan bolmış erinç. Anta kisre inisi eçisin teğ kılınmaduk erinç, oğlı kangın teğ kılınmaduk erinç. Biliğsiz kağan olurmış erinç, yablak kağan olurmış erinç. Buyrukı yeme biliğsiz <ermiş> erinç, yablak ermiş erinç. [[s. 22]] (D 6) Beğleri bodunı tüzsüz üçün, Tabgaç bodun tebliğin kürlüğ<in> üçün, armakçısın üçün, inili eçili kikşürtüki...
  - `Tekin 2003, s. 152` (eslesen: _OGLI KaŊIN_)
    > ...T 8) [s. 152] # s. 152 — TALAT TEKİN *öz (i)çi taşın tutmiş täg biz* "Kendi iç (kuvvetler)i (ile) dış (toprakları)ı tutmuş gibiyiz" (T 13), vb. Bu sontakı da 3. kişi iyelik ekli adların nesne durumunu yönetir: *anta kisrä inisi eçisin täg kılınmadok ärinç, oglı kaŋin täg kılınmadok ärinç* "Ondan sonra, erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz" (KT D 4-5) *bakırı buŋsız ärti kara saçın täg* "Onun bakırı sayısız idi, kara saçları gibi" (Açura 8) Bu sontakı ile tür...
  - `Ata 2011, s. 51` (eslesen: _OGLI KaŊIN_)
    > ...ç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün b...
  - `Tekin 1998, s. 36` (eslesen: _BİLMeZ eRTİ_)
    > ...ümiz......... yana birtimiz. İlgerü) Kadırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün,...
  - `Ata 2011, s. 44` (eslesen: _OGLI KaŊIN_)
    > ...ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşu...
  - `Tekin 1998, s. 11` (eslesen: _BİLMeZ_)
    > ...nip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren aklı ermez gibi olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan [[s. 11]] perişan duruma gelmek, saçı başı yolunmak), birki bodunuğ ot sub kıl- “birleşik halkı...


## BK-D-18#6 - Bilge Kağan Yazıtı, Doğu 18. satir  (4 kelime)

- **transkripsiyon:** `aNÇA : KaZGaNMıŞ : aNÇA : İTMiŞ`
- **kelime karsiliklari:** ANCA : KAZANILMIŞ : ANCA : EDİLMİŞ
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _aNÇA KaZGaNMıŞ aNÇA İTMiŞ_)
    > ...dırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| eling...
  - `Tekin 2003, s. 145` (eslesen: _aNÇA KaZGaNMıŞ aNÇA_)
    > ...*bunça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä* (*nä*...
  - `Ata 2011, s. 120` (eslesen: _aNÇA KaZGaNMıŞ aNÇA_)
    > ...fı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On...
  - `Ata 2011, s. 113` (eslesen: _aNÇA KaZGaNMıŞ aNÇA_)
    > ...ı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı g...


## BK-D-18#7 - Bilge Kağan Yazıtı, Doğu 18. satir  (3 kelime)

- **transkripsiyon:** `İLiMiZ : TÖRÜMiZ : eRTİ`
- **kelime karsiliklari:** İLİMİZ : TÖREMİZ : [VAR] İDİ
- **kanit:**
  - `Ata 2011, s. 120` (eslesen: _İLiMiZ TÖRÜMiZ eRTİ_)
    > ...lanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı gerid...
  - `Ata 2011, s. 113` (eslesen: _İLiMiZ TÖRÜMiZ eRTİ_)
    > ...anılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıy...
  - `Tekin 1998, s. 36` (eslesen: _İLiMiZ TÖRÜMiZ_)
    > ...ğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığılt...
  - `Tekin 1998, s. 24` (eslesen: _TÖRÜMiZ eRTİ_)
    > ...rtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak...
  - `Ergin 1970, s. 17` (eslesen: _İLiMiZ_)
    > ...ondurduk. Öyle düzene soktuk. Batıda Kengü Tarmana kadar Türk milletini öyle kondurduk. Öyle düzene soktuk. O zamanda kul kullu olmuştu, cariye cariyeli olmuştu. Küçük kardeş büyük kardeşini bilmezdi, oğlu babasını bilmezdi. | Öyle kazanılmış, düzene sokulmuş ilimiz, töremiz vardı. [[s. 17]] Türk, Oğuz beyleri, milleti, işitin: Üstte gök basmasa, altta yer delinmese, Türk milleti, ilini töreni kim boza bilecekti? Türk milleti, vaz geç, | pişman ol! Disiplinsizliğinden dolayı, beslemiş olan bilgili kağanınla, hür ve müsta...
  - `Tekin 2003, s. 145` (eslesen: _İLiMiZ_)
    > ...*bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä* (*nä* zamirinin eşit...


## BK-D-18#8 - Bilge Kağan Yazıtı, Doğu 18. satir  (11 kelime)

- **transkripsiyon:** `TÜRK : OGuZ : BeGLeRİ : BODuN : eŞiD : ÜZE : TeŊRİ : BaSMaSaR : aSRA : YİR : TeLiNMeSeR`
- **kelime karsiliklari:** TÜRK : OĞUZ : BEĞLERİ : BOYLARI : İŞİT : ÜSTTE : TANRI : BASMASA : ALTTA : YER : DELİNMESE
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _OGuZ BeGLeRİ BODuN eŞiD_)
    > ...n yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip y...
  - `Ata 2011, s. 77` (eslesen: _OGuZ BeGLeRİ BODuN eŞiD_)
    > ...kılmış başlıgıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi...
  - `Ata 2011, s. 70` (eslesen: _OGuZ BeGLeRİ BODuN eŞiD_)
    > ...lmış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. [[s. 70]] Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-1...


## BK-D-19#1 - Bilge Kağan Yazıtı, Doğu 19. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : BODuN : iLiŊiN : TÖRÜŊiN : KiM : aRTaTI`
- **kelime karsiliklari:** TÜRK : BOYLARI : İLİNİ : TÖRENİ : KİM : DAĞITIP
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Tekin 1998, s. 36` (eslesen: _BODuN iLiŊiN_)
    > ...dimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltü...
  - `Tekin 2003, s. 125` (eslesen: _BODuN iLiŊiN_)
    > ...rlerin şu çekimli biçimleri ve türevleri tesbit edilmiştir: *kämkä* "kime?", *näkä* "niye? niçin?", *nägüdä* "nerede?", *nätäg* "nasıl?", *näçök* "nasıl?", *nälök* "niçin?". 1. *käm* "kim?" (krş. Mo. *ken* ay.): *üzä täŋri basmasar, asra yer tälinmäsär türük bodun iliŋin törögin käm artatı udaçı [ärt]i* "Üstte(ki) gök çökmedikçe, altta(ki) yer delinmedikçe, (ey) Türk halkı, senin devletini ve törelerini kim yıkıp bozabilir idi?" (BK D 18-19) *käm özintä tutsar agulug kurt koŋuz adartu umaz* "(Bu taşı) kim üzerinde tutarsa (on...


## BK-D-19#2 - Bilge Kağan Yazıtı, Doğu 19. satir  (9 kelime)

- **transkripsiyon:** `UDAÇI : eRTİ : TÜRK : BODuN : eRTiN : ÖKÜN : KÜReGÜŊiN : ÜÇÜN : İGiDMiŞ`
- **kelime karsiliklari:** YIKACAK : İDİ? : TÜRK : BOYLARI : İDİN : ÖKÜN : GÜRLÜĞÜN : İÇİN : YEDİRMİŞ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _ÖKÜN KÜReGÜŊiN ÜÇÜN İGiDMiŞ_)
    > ...(erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yir...
  - `Olmez 2017, s. 59` (eslesen: _UDAÇI eRTİ TÜRK_)
    > ...tuta bėrti* "yer (öyle) emretti" (MÇ D 2); [s. 59] # s. 059 — Köktürkçe Dersleri (basılı sayfa 61) *yėnçü ügüz keçe temir kapıgka tegi süledim* "Sır Derya'yı geçip Temir Kapıg'a kadar sefer ettim" (KT G 4) **-I :** *türük bodun ėliŋin töröŋin kem artatı udaçı erti* "Türk halkı, ülkeni ve yasalarını kim bozabilir ki!" (BK D 19) **-U :** *turu ölü yorıyur ertiŋ* "yarı ölü yarı diri (her yere) gidiyordunuz" (KT G9); *ıgaç tutunu agturtum* "ağaçlara tutunarak (askerleri) tırmandırdım" (T 25); *küçlüg alp kaganımda adrılu b...
  - `Tekin 1998, s. 36` (eslesen: _BODuN eRTiN ÖKÜN_)
    > ...[[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığa...


## BK-D-19#3 - Bilge Kağan Yazıtı, Doğu 19. satir  (3 kelime)

- **transkripsiyon:** `BİLGE : KaGaNıŊA : eRMiŞ`
- **kelime karsiliklari:** BİLGE : KAĞANINA : ERMİŞ
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _BİLGE KaGaNıŊA eRMiŞ_)
    > ...iğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığaru (D 20) barığma bardığ. Barduk yerde edgüğ ol eri...
  - `Ergin 1970, s. 42` (eslesen: _BİLGE KaGaNıŊA_)
    > ...di defa savaştı, Kıtaya karşı yedi defa savaştı, Oğuza karşı beş defa savaştı. Onlarda M U H A R R E M E R G İ N [s. 42] O R H U N Â B İ D E L E R İ müşaviri | yine bizzat ben idim, kumandanı yine bizzat ben idim. İltiriş Kağana, Türk Bögü Kağanına, Türk Bilge Kağanına Doğu cephesi Kapgan Kağan yirmi yedi yaşında.....orda..... idi. Kapgan Kağan oturdu. Gece uyumadı, | gündüz oturmadı. Kızıl kanımı döktürerek, kara terimi koşturarak işi, gücü verdim hep. Uzun keşif kolunu yine gönderdim hep. | Siperi, nöbet yerini büyüttüm h...
  - `Ergin 1970, s. 15` (eslesen: _KaGaNıŊA_)
    > ...çekiştirttiği için, Türk milleti il yaptığı ilini elden çıkarmış, | kağan yaptığı kağanını kaybedi vermiş. Çin milletine beylik erkek evladı kul oldu, hanımlık kız evladı cariye oldu. [[s. 15]] Türk beyler Türk adını bıraktı. Çinli beyler Çin adını tutup, Çin kağanına itaat etmiş. Elli yıl işi gücü vermiş. Doğuda gün doğusunda Bökli kağana kadar ordu sevk edi vermiş. Batıda Demir Kapıya kadar ordu sevk edi vermiş. Çin kağanına ilini, töresini alı vermiş. Türk halk | kitlesi şöyle demiş: illi millet idim, ilim şimdi hani, k...
  - `Ata 2011, s. 113` (eslesen: _KaGaNıŊA_)
    > ...ra: sekiz yegirmi yaş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak...
  - `Tekin 1998, s. 3` (eslesen: _BİLGE_)
    > ...ürk Dilleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarı...
  - `Ergin 1970, s. 3` (eslesen: _BİLGE_)
    > ...ına izin verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. T...


## BK-D-19#4 - Bilge Kağan Yazıtı, Doğu 19. satir  (4 kelime)

- **transkripsiyon:** `BaRMıŞ : eDGÜ : iLiŊE : KeNTÜ`
- **kelime karsiliklari:** VARMIŞ : İYİ : İLİNE : KENDİN
- **kanit:**
  - `Ata 2011, s. 139` (eslesen: _BaRMıŞ eDGÜ iLiŊE KeNTÜ_)
    > ...elmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sıfat-fiil eki, eylem adları yapar: küre-gü+ŋ+ün üçün igidmiş bilge kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi...
  - `Ata 2011, s. 132` (eslesen: _BaRMıŞ eDGÜ iLiŊE KeNTÜ_)
    > ...ip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eylem adları yapar: küre-gü+ŋ+ün üçün igidmiş bilge kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. [[s. 132]] tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birl...
  - `Tekin 1998, s. 24` (eslesen: _BaRMıŞ eDGÜ_)
    > ...kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yü...
  - `Tekin 1998, s. 15` (eslesen: _BaRMıŞ_)
    > .../s/ ünsüzünü göstermek için kullanılan ince /s/ işareti aynı zamanda ön ünlülü sözcüklerdeki ve -mış/-miş ekindeki /ş/ ünsüzünü göstermek için de kullanılır: kIsI (kişi), bIs (biş) “5”, kÜms (kümüş) “gümüş”, sÜügs (süfiğüş) “savaş”, rms (ermiş) “imiş”, BRms (barmış) “varmış, gitmiş” vb. gibi. 10. [[s. 15]] Sözcükteki /ok, uk/ ses öbekleri genellikle oK işareti ile, /ök, ük/ ses öbekleri de ök işareti ile gösterilir: OKUN (okun) “ok ile”, ToKz (tokuz) “9”, RToK (artuk) “fazla”, ökÜn- (ökün-) “pişman olmak”, tÜrök (türük...
  - `Tekin 2003, s. 60` (eslesen: _BaRMıŞ_)
    > ...ın* "adımı" (Tar. D 4) < *ātimin vb. 3. Orhon yazıtlarında genellikle uyuma girmediği yazımdan anlaşılan /-miş/ ekinin Uygur yazıtlarında uyuma girme eğiliminde olduğunu gösteren az sayıda örnekler de vardır: - /BRmS/ *barm(ı)ş* "varmış, gitmiş" (MÇ G 37) < *barmiş* - /BSmS/ *basm(ı)ş* "baskın yapmış" (MÇ D 12) < *basmiş* - /BULmS/ *bolm(ı)ş* "olmuş" (Tar. B 1) < *bolmiş*, vb. ## Uzak Benzeşme **92.** İki sözcük arasında gerçekleşen ilerleyici ünlü benzeşmeleri aşağıdaki örneklerde görülür: 1. *antag* "öyle, onun gib...
  - `Ata 2011, s. 121` (eslesen: _BaRMıŞ_)
    > ...umu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körü...


## BK-D-19#5 - Bilge Kağan Yazıtı, Doğu 19. satir  (8 kelime)

- **transkripsiyon:** `YaŊıLDıG : YaBLaK : KİGÜRTüG : YaRaKLıG : KaNDıN : KeLiP : YaNYA : iLTDİ`
- **kelime karsiliklari:** YANILDIN : YAVLAK : KÖTÜLÜK [ETTİN] : KILIÇLI [DÜŞMANLAR] : NEREDEN : GELİP : YANYA : İTDİ?
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _YaBLaK KİGÜRTüG YaRaKLıG_)
    > ...z erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul...
  - `Tekin 1998, s. 36` (eslesen: _KeLiP YaNYA iLTDİ_)
    > ...şid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığaru (D 20) barığma bardığ. Barduk yerde edgüğ ol erinç: |Klanınğ üğüzçe yüğürti, süfnğüküğ tağça yatdı; beğlik urı oğlungğın kul kıltığ, eşilik...
  - `Ata 2011, s. 137` (eslesen: _YaŊıLDıG_)
    > ...laştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6 edgü bilge kişig edgü alp kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (ve) yiğit kişileri ilerletmez imiş” KT G6 Uzak Geçmiş...
  - `Tekin 2003, s. 71` (eslesen: _KİGÜRTüG_)
    > ...BK D 20) < **bilmädöküŋ* - *buŋug* "derdin" (KT G 8) < **buŋuŋ* - *ädgüg* "kazancın" (KT D 24; BK D 20) < **ädgüŋ* - *ärtig* "idin" (KT G 9, BK K 7) < **ärtiŋ* - *ärtigiz* "idiniz" (KT K 9, 10, GD) < **ärtiŋiz* - *kıltıg* "kıldın" (BK D 20, 20) < **kıltıŋ* - *kigürtüg* "soktun" (KT D 23; BK D 19) < **kigürtüŋ* - *öltüg* "öldün" (BK D 19) < **öltüŋ* ### ñ ~ y Nöbetleşmesi **121.** Öndamak genizsili /ñ/ iki sözcükte /y/ ile nöbetleşir: - *taygunuŋuz* "taylarınız, tay gibi olan oğullarınız" sözcüğündeki *tay* (KT GD) ~ *tañ...
  - `Tekin 2003, s. 72` (eslesen: _YaRaKLıG_)
    > ...)ı* "cenaze töreni düzenledi" (KÇ D 12) < **yōglatdı* - *yunt(t)a* "(erkek) attan" (IB 24) < **yuntda* - *yurt(t)a* "terkedilmiş kamp yerinde" (IB 13) < **yūrtda* 4. /gt/ > /gd/: - *katıgdı* "sıkıca" (IB 33, vb.) < *katıgtı* (IB 14); krş. *ädgüti* "iyice" - *yaraklıgdı* "silahlı olarak" (KT D 32) < **yaraklıgtı* - *yegdi* "daha iyi bir şekilde" (KT GD; BK D 36) < **yegti* [s. 73] # s. 73 — ORHON TÜRKÇESİ GRAMERİ 5. /mk/ > /mg/: Verme-bulunma durumu ekindeki artdamaksıl /k/ ünsüzü bazı Yenisey yazıtlarında /m/den sonra ö...
  - `Ata 2011, s. 142` (eslesen: _YaRaKLıG_)
    > ...e tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kantan kelipen sür-e elt-di “silahlı (düşman) nereden gelip (seni) etrafa dağıtıverdi, mızraklı (düşman) nereden gelip (seni) (kolayca) sürdü” KT D23 begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin...


## BK-D-19#6 - Bilge Kağan Yazıtı, Doğu 19. satir  (5 kelime)

- **transkripsiyon:** `SÜŊüGLüG : KaNDıN : KeLiPeN : SÜRE : iLTDİ`
- **kelime karsiliklari:** SÜNGÜLÜ : NEREDEN : GELİP : [SİZİ] SÜRGÜN : ETTİ?
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KeLiPeN SÜRE_)
    > ...siz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş...
  - `Tekin 2003, s. 83` (eslesen: _SÜŊüGLüG_)
    > ...an, devlet sahibi" (KT D 29, BK D 24) < **ēl* - *kullug* "köleli, köle sahibi" (KT D 21, BK D 18) < *kul* "erkek köle" - *küŋlüg* "kadın kölesi olan" (BK D 18) < *küŋ* "kadın köle, cariye" - *käräkülüg* "çadırlı, göçebe" (BK D 1) < *käräkü* "çadır" (IB 27) - *süŋüglüg* "mızraklı (düşman)" (KT D 33, BK D 19) < *süŋüg* - *täblig* "aldatıcı, hilekar" (KT D 6, BK D 6) < **täb* "hile, desise" - *kürlüg* "aldatıcı, hilekar" (KT D 6, BK D 6) < **kür* "hile, desise" - *tügünlüg* "(kuyruğu) düğümlü (at)" (T 54) - *yaraklıg* "silahl...
  - `Ata 2011, s. 142` (eslesen: _SÜŊüGLüG_)
    > ...tda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kantan kelipen sür-e elt-di “silahlı (düşman) nereden gelip (seni) etrafa dağıtıverdi, mızraklı (düşman) nereden gelip (seni) (kolayca) sürdü” KT D23 begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgın-u ıd- mış kaganladuk ka...
  - `Olmez 2017, s. 66` (eslesen: _SÜŊüGLüG_)
    > ...devlet sahibi" (KT D 29, BK D 24) < *\*ė:l*; *kullug* "köleli, köle sahibi" (KT D 21, BK D 18) < *kul* "erkek köle"; *küŋlüg* "kadın kölesi olan" (BK D 18) < *küŋ* "kadın köle, cariye"; *kereküllig* "çadırlı, göçebe" (BK D 1) < *kerekü* "çadır" (krş. IB 27); *süŋüglüg* "mızraklı (düşman)" (KT D 33, BK D 19) < *süŋüg*; *tevlig* "aldatıcı, hilekar" (KT D 6, BK D 6) < *\*tev* "hile, desise"; *körlüg* "aldatıcı, hilekar" (KT D 6, BK D 6) < *\*kör* "hile, desise"; *tügünlüg* "(kuyruğu) düğümlü (at)" (T 54); *yarakhıg* "silahlı"...
  - `Ata 2011, s. 134` (eslesen: _KeLiPeN_)
    > ...ratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre inisi kagan...
  - `Olmez 2017, s. 108` (eslesen: _KeLiPeN_)
    > ...ağ ucunda satır numarası "5", son iki satırın başlarında nokta dizileri (..........) var] *D 5. yoqçı : sıgıtçı : öyre : kün : tugsıkdaki : bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu yerlerden Kore halkı, Zhoulular, Tibet, Avar, Bizans, Kırgız, Üç Kurık...


## BK-D-19#7 - Bilge Kağan Yazıtı, Doğu 19. satir  (9 kelime)

- **transkripsiyon:** `IDUK : ÖTÜKeN : YIŞ : BODuN : BaRDıG : İLGeRÜ : BaRIGMA : BaRDıG : KURIGaRU`
- **kelime karsiliklari:** KUTLU : ÖTÜKEN : YIŞIN : BOYLARI : VARDI : İLERİ : VARAN : VARDI : GERİ
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _YIŞ BODuN BaRDıG İLGeRÜ_)
    > ...ğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış edgü)| elinge kentü yafığıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya iltdi? SüNgüğlüğ kantan (kelip) süre illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığaru (D 20) barığma bardığ. Barduk yerde edgüğ ol erinç: |Klanınğ üğüzçe yüğürti, süfnğüküğ tağça yatdı; beğlik urı oğlungğın kul kıltığ, eşilik (kız oğlungın küng| kıltığ. Ol bilmedüküğin üçün, yablakınğın üçün, eçim kağan uça bardı...
  - `Tekin 1998, s. 24` (eslesen: _IDUK ÖTÜKeN_)
    > ...rük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eç...
  - `Tekin 1998, s. 19` (eslesen: _ÖTÜKeN YIŞ_)
    > ...leri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirk...
  - `Ata 2011, s. 53` (eslesen: _ÖTÜKeN YIŞ_)
    > ...Tonyukuk, Çin’de büyümüş, Çin terbiyesi alarak Çin’in politikalarını öğrenmişti. Çin’in entrikalarıyla Türklerin başa çıkamayacağını bildiği için daima Çin’den uzakta bulunan bir Türk ili düşünmüş, bunun için de Ötüken’i göstermiştir. il tutsık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup...
  - `Olmez 2017, s. 42` (eslesen: _ÖTÜKeN YIŞ_)
    > ...* "İnek yılı, altıncı (ay), ilk oruç günü" Eski Uygurcadan (HT VI 1823, Ölmez 1993, 161) 3. **bars yıl:** *bars yılka çik tapa yorıdım* "Kaplan yılında Çiklere doğru sefer ettim" MÇ D7 4. **tavışgan yıl;** 5. **ulu yıl:** *tavışgan yıl bėşinç ayka ulu yılka ötüken yış başınta ...* "Tavşan yılının beşinci ayında (751), ejderha yılında Ötüken ormanının zirvesinde ..." MÇ D8-9 [Dîvânu Lugâti't-Turk: *ulu yerine nag yılı*] [s. 43] # s. 043 — Köktürkçe Dersleri (basılı sayfa 45) 6. **yılan yıl:** *yılan yılka türük ėlin anta...
  - `Tekin 2003, s. 138` (eslesen: _BaRIGMA BaRDıG_)
    > ...ru...* "İleri(de) gün doğusuna, güneyde gün ortasına doğru, batıda gün batısına, kuzeyde (de) gece ortasına doğru..." (KT G 2) *kurgaru... tämir kapıgka tägi sülädim* "Batıda Demir Kapı'ya kadar sefer ettim" (BK K 3) [s. 138] # s. 138 — TALAT TEKİN *ilgärü [barıgma] bardıg kurgaru barıgma bardıg* "Doğuya gidenleriniz gittiniz, batıya gidenleriniz gittiniz" (BK D 19-20) *kurgaru käŋü tarmanka tägi...* "Batıda Kengü Tarman'a kadar..." (KT D 21) **301.** *birgärü* "güneye doğru, güneyde" < *\*biri* "bu yan, güney": *birgärü kün o...


## BK-D-20#1 - Bilge Kağan Yazıtı, Doğu 20. satir  (7 kelime)

- **transkripsiyon:** `BaRIGMA : BaRDıG : BaRDUK : YİRDE : eDGÜG : OL : eRiNÇ`
- **kelime karsiliklari:** VARAN : VARDI : VARDIĞIN : YERDE : İYİCE : O : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BaRIGMA BaRDıG BaRDUK YİRDE eDGÜG OL eRiNÇ_)
    > ...! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiy...
  - `Ata 2011, s. 123` (eslesen: _BaRDUK YİRDE eDGÜG OL_)
    > ...ı kaldırdılar şüphesiz” BK D10 anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç “ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamışlar şüphesiz, oğulları babaları gibi yaratılmamışlar şüphesiz” KT D5 barduk yirde edgüg ol erinç “Gittiğin yerde kazancın o şüphesiz” KT D24 116 [s. 124] Özet Orhun Türkçesinde isim çekim eklerini yapı ve işleyiş bakımından tanımak ve açıklamak İsim Çekim Ekleri Çokluk (Topluluk) Ekleri: +lAr, +gUn, +...
  - `Ata 2011, s. 116` (eslesen: _BaRDUK YİRDE eDGÜG OL_)
    > ...nün tepesinde tutup yukarı kaldırdılar şüphesiz” BK D10 anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç “ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamışlar şüphesiz, oğulları babaları gibi yaratılmamışlar şüphesiz” KT D5 barduk yirde edgüg ol erinç “Gittiğin yerde kazancın o şüphesiz” KT D24 [s. 117] Özet Orhun Türkçesinde isim çekim eklerini yapı ve işleyiş bakımından tanımak ve açıklamak İsim Çekim Ekleri Çokluk (Topluluk) Ekleri: +lAr, +gUn, +An, +(X)t İyelik Ekleri: 1. tekil: +(X)m; 1. çoğ...


## BK-D-20#2 - Bilge Kağan Yazıtı, Doğu 20. satir  (3 kelime)

- **transkripsiyon:** `KaNıN : ÖGüZÇE : YÜGüRTİ`
- **kelime karsiliklari:** KANIN : ÖZÜGÇE : YÜĞÜRDÜ
- **kanit:**
  - `Ogel C2, s. 340` (eslesen: _KaNıN ÖGüZÇE YÜGüRTİ_)
    > ...kanı değil; kemiği daha önemlidir. Türk düşüncesi, bunun üzerine kurulmuştur. Ancak yine Türkleregöre, “kan akıtma, ta bu idi”, Daha manalı eski türkçesi şöyledir**: “.. (Çeşitli yönlere) barıgımıa bardıg, barduk yerde edgüg olerinç: Karun subça.. [[s. 340]] kanın öğüzçe yügürti”" “Yerini Suyunu” bırakıp ayrılma “Dokuz oğuzlar, yerlerini; sularını bırakıp Çin'e doğru gittiler”: Yerleri ile sularını, yahut illerini bırakıp gitme, Türk düşüncesi ile devlet anlayışında, hoş karşılanmamıştır. Nitekim Kültegin yazıtında Türk milletinin...
  - `Tekin 1998, s. 13` (eslesen: _YÜGüRTİ_)
    > ...zda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Tü...
  - `Tekin 2003, s. 116` (eslesen: _YÜGüRTİ_)
    > ...par (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı" (KT D 2) *kanıŋ ügüz+çä yügürti* "Kanın ırmak gibi aktı" (BK D 20) *ekinti kün ört+çä kızıp kälti* "(Düşman) ikinci gün alevli ateş gibi kızıp (üzerimize) geldi" (T 39-40) *tirigdäki+ç...
  - `Tekin 1998, s. 11` (eslesen: _KaNıN_)
    > ...) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği...
  - `Ergin 1970, s. 17` (eslesen: _KaNıN_)
    > ...e karşı kendin hata ettin, kötü hale soktun. Silâhlı nereden gelip dağıtarak gönderdi? Mızraklı nereden gelerek sürüp gönderdi. Mukaddes ötüken ormanının milleti, gittin. Doğuya giden, | gittin. Batıya giden, gittin. [[s. 17]] Gittiğin yerde hayrın şu olmalı: Kanın su gibi koştu, kemiğin dağ gibi yattı. Beylik erkek evladın kul oldu, hanımlık kız evladın cariye oldu. Bilmediğin için, kötülüğün yüzünden amcam kağan uçup gitti. Önce Kırgız kağanını balbal olarak diktim. Türk milletinin adı sanı yok olmasın diye, babam kağ...
  - `Tekin 2003, s. 17` (eslesen: _KaNıN_)
    > ...ndamak sızıcıları /g/ ve /g/ ile nöbetleşme eğilimi göstermesi: *bardıŋız* ~ *bardıgız* “gittiniz”, *süŋöküŋ* ~ *süŋöküg* “kemiklerin”, vb.; 5. Adların ilgi durumunun ünsüzlerden sonra {-Iŋ}, ünlülerden sonra da {-nIŋ} ile kurulması: *bilgä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, vb.; 6. Adların çıkma durumu için ayrı bir ek olmaması, bu durumun yer ya da bulunma durumu eki ile kurulması: *oglanıŋız-da* “oğullarınızdan”, *kurıdın-ta* “batıdan”, *tabgaç-da* “Çin’den”, vb. 7...


## BK-D-20#3 - Bilge Kağan Yazıtı, Doğu 20. satir  (3 kelime)

- **transkripsiyon:** `SÜŊÜKÜŊ : TaGÇA : YaTDI`
- **kelime karsiliklari:** SÜNGÜN : DAĞCA : YATDI
- **kanit:**
  - `Ogel C2, s. 440` (eslesen: _SÜŊÜKÜŊ TaGÇA YaTDI_)
    > ...konusu edilmekteydi... 3) “Kemiklerin dağ gibi (yığılıp), yatdı!...” [[s. 440]] Göktür k yazıtlarının bu ünlü sözü, Türk milletinin kağanlarına baş kaldırarak, şurada burada başı boş dolaşarak, ölmeleri dolayısıyla söylenmiştir”. Eski türkçesi şöyledir: “.. Süngükün tagça yatdı!...” Bu sözler bize, sonraki Türk edebiyatında söylenen, başka eş örnekleri de, hatırlatmaktadır. Cesedin, dağ gibi yatma anlayışı, günümüze kadar gelmiştir: Karahanlı çağında Kutadgu Bilig içinde de, bu anlayışı görüyoruz”? ““.. [[s. 440]] Severek can verir...
  - `Tekin 1998, s. 13` (eslesen: _TaGÇA YaTDI_)
    > ...iz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Türklerin dillerini yazmak...
  - `Ata 2011, s. 96` (eslesen: _SÜŊÜKÜŊ_)
    > ...ocak) 11. Orhun Türkçesinde geniz ünsüzü /ŋ/ söz içinde ve sonunda /g/ ile nöbetleşir. Bu ses değişmesi, 2. kişi iyelik ekleri ile kişi eklerinde görülür: bardıgız ‘vardınız, gittiniz’ ~ bardıŋız süŋüküg ‘kemiklerin’ ~ süŋüküŋ ölsikig ‘öleceksin’ ~ ölsikiŋ törügin ‘(senin) törelerini’ ~ törüŋin Ünsüzler konusunda Orhun Türkçesi ile Türkiye Türkçesi arasındaki farkları sıralayınız. SÖZ YAPIMI İsimden İsim Yapım Ekleri 1. +(X)ç: Ulandığı söze küçült...
  - `Tekin 2003, s. 116` (eslesen: _YaTDI_)
    > ...1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı" (KT D 2) *kanıŋ ügüz+çä yügürti* "Kanın ırmak gibi aktı" (BK D 20) *ekinti kün ört+çä kızıp kälti* "(Düşman) ikinci gün alevli ateş gibi kızıp (üzerimize) geldi" (T 39-40) *tirigdäki+çä* "hayattaki gibi" (...
  - `Ata 2011, s. 89` (eslesen: _SÜŊÜKÜŊ_)
    > ...ucuz), törüsinçe (> töresince), oçuk (> ocak) 11. Orhun Türkçesinde geniz ünsüzü /ŋ/ söz içinde ve sonunda /g/ ile nöbetleşir. Bu ses değişmesi, 2. kişi iyelik ekleri ile kişi eklerinde görülür: bardıgız ‘vardınız, gittiniz’ ~ bardıŋız süŋüküg ‘kemiklerin’ ~ süŋüküŋ ölsikig ‘öleceksin’ ~ ölsikiŋ törügin ‘(senin) törelerini’ ~ törüŋin Ünsüzler konusunda Orhun Türkçesi ile Türkiye Türkçesi arasındaki farkları sıralayınız. [[s. 89]] SÖZ YAPIMI İsimden İsim Yapım Ekleri 1. +(X)ç: Ulandığı söze küçültme ve sevgi anlamı kat...
  - `Ogel C2, s. 390` (eslesen: _TaGÇA_)
    > ...ller, diğer insanlar gibi, Türkleri de çok korkutmuştur. [[s. 390]] Göktürk yazıtları içinde, Türklerin devletten kopup, başını alıp gitmeleriyle, ölmelerinden söz açılıyor ve söyle deniyordu: “.. Kanın, ırmak gibi (ögüzçe) aktı (yügürti); kemiğin, dağ gibi (tagça) yığıldı (yattı)... ”. Göktür k yazıtlarında, düşmanın büyük güçlerle geldiklerini anlatmak için de,düşman “otça, borça”, yani fırtına gibi geldi deniyordu. Eski Türklerin benzetmelerinde, tabiat güçleri, büyük bir rol oynuyorlardı. [[s. 390]] “Savaşta, düş...


## BK-D-20#4 - Bilge Kağan Yazıtı, Doğu 20. satir  (9 kelime)

- **transkripsiyon:** `BeGLiK : URI : OGLuŊuN : KUL : KILDIG : iŞiLiK : KIZ : OGLuŊuN : KÜŊ`
- **kelime karsiliklari:** BEĞLİK : URI : OĞLUNU : KUL : KILDI[LAR] : İŞİLİK : KIZ : EVLADINI : CARİYE
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _BeGLiK URI_)
    > ...dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye yaptı” vb. vb. gibi. 5.3. Deyimler Orhon yazıtlarının dili deyimler açısından da çok zengindir. İşte anla...
  - `Ata 2011, s. 51` (eslesen: _BeGLiK URI_)
    > ...k ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleşt...
  - `Olmez 2017, s. 112` (eslesen: _BeGLiK URI_)
    > ...- bod: isim tabanı - +un: kalıplaşmış çokluk eki - +lıg: isimden isim yapma eki (sıfat türetir) (Runik metin: BK D 7) *D 7. yoŋaşurtokin : üçün : türük : bodun : ėllėdök : ėlin : ıçgınu ıdmış : kaganladok : kaganin : yitürü ıdmış : tavgaç : bodunka : beglik : urı ogılın : kul kıltı : ėşilik k'ız ogılın : küŋ kıltı : türük : begler : türük : atin : ıdtı : tavgaçgı : begler : tavgaç atin : tutupan : tavgaç : kaganka : körmiş : ėlig yıl* "karşı kışkırttığı için, Türk halkı ülke yaptığı toprakları elinden çıkarmış, hakan...
  - `Ata 2011, s. 44` (eslesen: _BeGLiK URI_)
    > ...rinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınıraras...
  - `Ogel C1, s. 561` (eslesen: _KIZ OGLuŊuN_)
    > ...yaşamıştı. Bu konu ile ilgili Çince metin şöyledir : “Mu-yeh dağında Kitanların en eski ataları için bir mabed yapılmıştı. Büyük ata Ch'i-shou Kağan için Güney Tapınağında, Hatun'u için ise Kuzey Tapınağında kurban merasimi yapılırdı. Bu her iki atanın ve sekiz oğlunun, tıpkı kendilerine benzeyen ve boya ile yapılmış tabloları vardı” (LS, 37, 9a). [[s. 561]] Bilindiği üzere, Kül-Tegin ölünce, onun da mezarı üzerine mabet gibi bir ev, yani eski Türkçe “Bark” yapılmış ve içine de Kül-Tegin'in resimleri ile heykelleri konmuşt...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 130` (eslesen: _OGLuŊuN KUL_)
    > ...ti".Ve Aİ anıng aşın ertürdi" denir ki "onun işini kabullendi, yine ".s5751 geçirdi" demektir. Bir yerden başka bir yere bir nesneyi geçiren kimse için de böyle denir,( UZX. 5/2051 S ertürür - ertürmek). Gi eztürdir " g5 “3 İİİ ol oglı kulakın eztürdi * o, oğlunun kulağını yirdirdi". Deri üzerinde uzunlamasına olan her yirik ve çizik te böyledir;(),9İ g” , si eztürür - eztürmek). [[y. 130]] 53 J3N üztürdir ". S5 5 İN ol yıp üztürdi <0, ipi üzdürdü", Başkası da böyledir; ver CBÜ, z > : YN üztürür - üztürmek). GUN ar as...


## BK-D-20#5 - Bilge Kağan Yazıtı, Doğu 20. satir  (10 kelime)

- **transkripsiyon:** `KILDIG : OL : BİLMeDÜKÜGiN : ÜÇÜN : YaBLaKIŊıN : ÜÇÜN : eÇİM : KaGaN : UÇA : BaRDI`
- **kelime karsiliklari:** KILDI[LAR] : O : BİLMEDİĞİN : İÇİN : YAVLAKLIĞIN : İÇİN : EÇÜM : KAĞAN : UÇA : VARDI
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _OL BİLMeDÜKÜGiN ÜÇÜN YaBLaKIŊıN_)
    > ...e illtdi? [[s. 36]] I)duk Öltüken| yış bodun, bardığ. İlgerü |barığma)| bardığ, kulrlığaru (D 20) barığma bardığ. Barduk yerde edgüğ ol erinç: |Klanınğ üğüzçe yüğürti, süfnğüküğ tağça yatdı; beğlik urı oğlungğın kul kıltığ, eşilik (kız oğlungın küng| kıltığ. Ol bilmedüküğin üçün, yablakınğın üçün, eçim kağan uça bardı. [[s. 36]] Başlayu Kırkız kağanığ (balbal tikdim.| Türük bodun atı küsi yok bolmazun tiyin kanğım Kağanığ, (D 21) öğüm katunuğ kötürüğme Tehfğri, il beriğlme TJengri, Türük bodun atı küsi yok bolmazun tiyin, özümin ol Tengri kağan o...
  - `Tekin 1998, s. 24` (eslesen: _ÜÇÜN YaBLaKIŊıN ÜÇÜN eÇİM_)
    > ...pen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurt...
  - `Tekin 2003, s. 153` (eslesen: _ÜÇÜN YaBLaKIŊıN ÜÇÜN eÇİM_)
    > ...tutmuşlar hiç şüphesiz" (KT D 3) *beş balık anı üçün ozdı* "Beşbalık (şehri) onun için (yıkılmaktan) kurtuldu" (BK D 28) *antagıŋın üçün...* "Öyle olduğun için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (...


## BK-D-20#6 - Bilge Kağan Yazıtı, Doğu 20. satir  (5 kelime)

- **transkripsiyon:** `BaŞLayU : KIRKıZ : KaGaNıG : BaLBaL : TİKDiM`
- **kelime karsiliklari:** BAŞINA : KIRKIZ : KAĞANINI : BALBAL : DİKTİM
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


## BK-D-20#7 - Bilge Kağan Yazıtı, Doğu 20. satir  (3 kelime)

- **transkripsiyon:** `TÜRK : BODuN : aTI`
- **kelime karsiliklari:** TÜRK : BOYLARININ : ADI
- **kanit:**
  - `Tekin 2003, s. 191` (eslesen: _TÜRK BODuN aTI_)
    > ...lk kaçıp gitmişti; On Ok ordusunu sefere çıkarttım" (T 43) *alp är biziŋä täg-miş är-ti* "Yiğit askerler bize saldırmıştı" (KT D 40) *ol ödkä kul kullug küŋ küŋlüg bol-miş är-ti* "O dönemde köleler köle sahibi, cariyeler hizmetçi sahibi olmuşlardı" (BK D 18) *türk bodun ati yok bolu bar-miş är-ti* "Türk halkının adı yok olup gidivermişti" (O ön 3) 2. *-miş* + *ärmiş*: *adıglı toŋuzlı ārt üzä sokuş-miş är-miş* "Bir ayı ile bir domuz bir dağ geçidinde karşılaşmışlar imiş" (IB 6) [s. 192] # s. 192 — TALAT TEKİN Bu sonbiçim, cüml...
  - `Olmez 2017, s. 57` (eslesen: _TÜRK BODuN aTI_)
    > ...e öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...


## BK-D-20#8 - Bilge Kağan Yazıtı, Doğu 20. satir  (6 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLMaZUN : TİYiN : KaŊıM : KaGaNıG`
- **kelime karsiliklari:** SANI : YOK : OLMASIN : DİYE : BABAM : KAĞANI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN KaŊıM KaGaNıG_)
    > ...yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...
  - `Ata 2011, s. 176` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > .... Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi...
  - `Ata 2011, s. 169` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > ...rden hangisidir? a. Ölteçi b. Bodunug c. Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. [[s. 169]] Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi emir eki 4. Sü sül...


## BK-D-21#1 - Bilge Kağan Yazıtı, Doğu 21. satir  (10 kelime)

- **transkripsiyon:** `ÖGüM : KaTUNuG : KÖTüRüGME : TeŊRİ : İL : BİRiGME : TeŊRİ : TÜRK : BODuN : aTI`
- **kelime karsiliklari:** ÖĞÜM : KADINI : [GÖĞE] GÖTÜREN : TANRI : İL : VEREN : TANRI : TÜRK : BOYLARININ : ADI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _TeŊRİ İL BİRiGME TeŊRİ_)
    > ...atdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prense...
  - `Tekin 1998, s. 36` (eslesen: _ÖGüM KaTUNuG KÖTüRüGME_)
    > ...üğ tağça yatdı; beğlik urı oğlungğın kul kıltığ, eşilik (kız oğlungın küng| kıltığ. Ol bilmedüküğin üçün, yablakınğın üçün, eçim kağan uça bardı. [[s. 36]] Başlayu Kırkız kağanığ (balbal tikdim.| Türük bodun atı küsi yok bolmazun tiyin kanğım Kağanığ, (D 21) öğüm katunuğ kötürüğme Tehfğri, il beriğlme TJengri, Türük bodun atı küsi yok bolmazun tiyin, özümin ol Tengri kağan olurtdı. INeâgğ ylılsığ bodunta üze olurmadım. İçre aşsız, taşra tonsuz yabız yablak bodunta (üze olurtum. TJigin eki şad inim ORHON YAZITLARI 69 burada (ona) biz...
  - `Tekin 2003, s. 191` (eslesen: _TÜRK BODuN aTI_)
    > ...lk kaçıp gitmişti; On Ok ordusunu sefere çıkarttım" (T 43) *alp är biziŋä täg-miş är-ti* "Yiğit askerler bize saldırmıştı" (KT D 40) *ol ödkä kul kullug küŋ küŋlüg bol-miş är-ti* "O dönemde köleler köle sahibi, cariyeler hizmetçi sahibi olmuşlardı" (BK D 18) *türk bodun ati yok bolu bar-miş är-ti* "Türk halkının adı yok olup gidivermişti" (O ön 3) 2. *-miş* + *ärmiş*: *adıglı toŋuzlı ārt üzä sokuş-miş är-miş* "Bir ayı ile bir domuz bir dağ geçidinde karşılaşmışlar imiş" (IB 6) [s. 192] # s. 192 — TALAT TEKİN Bu sonbiçim, cüml...
  - `Olmez 2017, s. 57` (eslesen: _TÜRK BODuN aTI_)
    > ...e öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT...


## BK-D-21#2 - Bilge Kağan Yazıtı, Doğu 21. satir  (9 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLMaZUN : TİYiN : ÖZüMüN : OL : TeŊRİ : KaGaN : OLuRTDI`
- **kelime karsiliklari:** KÜSİ : YOK : OLMASIN : DİYE : ÖZÜMÜ : O : TANRI : KAĞAN : OTURTTU
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tig...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...
  - `Tekin 1998, s. 36` (eslesen: _OL TeŊRİ KaGaN OLuRTDI_)
    > ...üçün, yablakınğın üçün, eçim kağan uça bardı. [[s. 36]] Başlayu Kırkız kağanığ (balbal tikdim.| Türük bodun atı küsi yok bolmazun tiyin kanğım Kağanığ, (D 21) öğüm katunuğ kötürüğme Tehfğri, il beriğlme TJengri, Türük bodun atı küsi yok bolmazun tiyin, özümin ol Tengri kağan olurtdı. INeâgğ ylılsığ bodunta üze olurmadım. İçre aşsız, taşra tonsuz yabız yablak bodunta (üze olurtum. TJigin eki şad inim ORHON YAZITLARI 69 burada (ona) biz verdik. (Eş olarak da) kız kardeşim prensesi verdik. (Buna rağmen) kendisi hata işledi. [[s. 36]] (So...


## BK-D-21#3 - Bilge Kağan Yazıtı, Doğu 21. satir  (5 kelime)

- **transkripsiyon:** `eRiNÇ : NeŊ : YILSıG : BODuNDA : OLuRMaDıM`
- **kelime karsiliklari:** GERÇEK : NE : YILSI : BOYLARDA : OTURMADIM
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _OLuRMaDıM_)
    > ...Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prensesi verdik. (Buna rağmen) kendisi hata işledi. (Sonuç olarak) Az'ların hakanı öldü, halkı (da) kul köle oldu. [[s. 24]] Köğ...
  - `Tekin 2003, s. 230` (eslesen: _OLuRMaDıM_)
    > ...irmi yaşda alınmışım kunçuyuma, buŋ a, adrıldım a! 2. Üç ogluma adrıldım. Yıta! Bökmädim! Katıglangıl! 3. Beş yegirmi yaşımda Tabgaç kanga bardım. Är ärdämim üçün alpun (?), altun, kümüşüg ägri täbä, eldä kişi kazgandım. 4. Yeti böri ölürdüm. Barsıg, kökmäkig ölürmädim. 5. Yerimä, yıta, subuma adrıldım a! Buŋ a! Äsizim ä! Yıta! 6. Bodunuma, kinimä, kadaşıma adrıldım! Bökmädim! 7. Elimä kanıma bökmädim! Yaşım yeti yetmiş. Azdım. 8. Yatda tüŋürümä adrıldım. 9. Antlıg adaşıma, antsızda ädgü eşimä adrıldım a! 10. Säkiz adaklıg...
  - `Ata 2011, s. 121` (eslesen: _OLuRMaDıM_)
    > ...durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: Bu sontakı, kişi zamirleri ile iyelik gövdelerinin ne...
  - `Tekin 2003, s. 75` (eslesen: _BODuNDA_)
    > ...0) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D...
  - `Tekin 2003, s. 84` (eslesen: _YILSıG_)
    > ...ğıda" (KT D 1, vb.) < **as* "aşağı, alt, alt kısım"; krş. MK *astın* "aşağı, aşağıda" - *içrä* "içeride" (KT D 26, vb.) < *iç* - *taşra* "dışarıya, dışarıda" (KT D 26, vb.) < *taş* "dış"; bk. **Yer Zarfları**. **174.** {+sIg}. Benzerlik sıfatları türetir: - *yılsıg* "refah içinde, müreffeh, zengin, mutlu" (KT D 26) < **yalsıg* < **yal*; krş. *yalıg* "mutlu, güler yüzlü" (IB 2) < **yal-ıg*, Yak. *salī* ay. < **yalıg*; krş. bir de Mo. *yali* "önemli, ünlü", *yali-* "iyi olmak, kaliteli olmak". **175.** {+sIz}, {+sUz} Yok...
  - `Olmez 2017, s. 67` (eslesen: _YILSıG_)
    > ...levleri de değişir: *beglik* "bey olmaya layık, bey olacak olan" (KT D 7, vb.); *eşilik* "hanım olmaya layık, hanım olacak olan" (KT D 7, vb.) < \**eşi* "hanım, soylu kadın"; *özlük* "şahsi, kişiye ait" (KÇ E 3, vb.) **{+sIg}:** Benzerlik sıfatları türetir: *yılsıg* "refah içinde, müreffeh, zengin, mutlu" (KT D 26) (T. Tekin: < \**yal Sıg* < \**yal*, *yal* kökü için krş. *yalıg* "mutlu, güler yüzlü" IB 2 < \**yal+ıg*, Yak. *salı* aynı < \**yalıg*) **Fiilden İsim Türeten Ekler.** **{-(X)g}:** Eylem sonucunu bildiren is...


## BK-D-21#4 - Bilge Kağan Yazıtı, Doğu 21. satir  (9 kelime)

- **transkripsiyon:** `İÇRE : aŞSıZ : TaŞRA : TONSuZ : YaBıZ : YaBLaK : BODuNDA : ÜZE : OLuRTuM`
- **kelime karsiliklari:** İÇİ : AŞSIZ : DIŞI : DONSUZ : YAVUZ : YAVLAK : BOYLARIN : ÜZE[RİNE] : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren aklı ermez gibi olmak” (iş göremez, düşünemez duruma gelmek), közi kaşı yablak bol- “gözü kaşı mahvolmak” (aşırı yastan...
  - `Ata 2011, s. 118` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...asra ‘aşağıda, altta’, içre ‘içerde, içinde’, taşra ‘dışarı, dışarıda’, öŋre ‘ön tarafta, ileride, doğuda’, kisre ‘geride, batıda’. üze teŋri basmasar asra yir telinmeser “yukarıda gök çökmedikçe, aşağıda yer delinmedikçe” KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 111 [s. 119] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak...
  - `Ata 2011, s. 111` (eslesen: _İÇRE aŞSıZ TaŞRA TONSuZ_)
    > ...ile türetilmiş yer zarfları: asra ‘aşağıda, altta’, içre ‘içerde, içinde’, taşra ‘dışarı, dışarıda’, öŋre ‘ön tarafta, ileride, doğuda’, kisre ‘geride, batıda’. üze teŋri basmasar asra yir telinmeser “yukarıda gök çökmedikçe, aşağıda yer delinmedikçe” KT D22 içre aşsız taşra tonsuz “içeride aşı (yiyeceği) olmayan, dışarıda elbisesi bulunmayan” KT D26 [s. 112] taşra yorıyur teyin kü eşidip “dışarıya yürüyor (baş kaldırıyor) diye haber işitip” KT D11 öŋre kün tugsıkda “doğuda gün doğacak tarafta” KT D4 kisre kün batsıkıŋa tegi “geride gü...
