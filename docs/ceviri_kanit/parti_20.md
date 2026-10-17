# Ceviri istek paketi 20 - Orhun cumlecikleri

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


## BK-D-21#5 - Bilge Kağan Yazıtı, Doğu 21. satir  (9 kelime)

- **transkripsiyon:** `İNiM : KÖLTİGiN : iKİ : ŞaD : İNiM : KÖLTİGiN : BİRLE : SÖZLeŞDiMiZ : KaŊıMıZ`
- **kelime karsiliklari:** İNİM : KÜLTİĞİN : İKİ : ŞAD : İNİM : KÜLTİĞİN : İLE : SÖZLEŞDİK : BABAMIZIN
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _iKİ ŞaD_)
    > ...ğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olmasın (D 27) diye, Türk halkı için gece uyumadım, gündüz oturmadım. [[s. 25]] Kardeşim Kül Tigin ile, iki Şad ile (birlikte) ölesiye yitesiye çalıştım, çabaladım. Öylece çalışıp çabalayıp birleşik halkı ateş (ile) su (gibi birbirlerine düşman) etmedim. Ben kendim hükümdar olduğumda, her yere (D 28) gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi. Halkı besleyi...
  - `Ergin 1970, s. 18` (eslesen: _iKİ ŞaD_)
    > ...perişan milletin üzerine oturdum. Küçük kardeşim Kül Tigin ile konuştuk. Babamızın, amcamızın kazanmış olduğu milletin adı sanı yok olmasın | diye, Türk milleti için gece 1. elbisesiz, çıplak [s. 18] uyumadım, gündüz oturmadım. Küçük kardeşim Kül Tigin ile, iki şad ile öle yite kazandım, öyle kazanıp bütün milleti ateş, su kılmadım. Ben kendim kağan oturduğumda, her yere | gitmiş olan millet öle yite, yaya olarak, çıplak olarak dönüp geldi. Milleti besleyeyim diye, kuzeyde Oğuz kavmine doğru, doğuda Kıtay, Tatabı kavmin...
  - `Tekin 2003, s. 157` (eslesen: _iKİ ŞaD_)
    > ...** *ulayu* "ve" (< *\*ula-* "birleştirmek"): 1. Tek başına: *ögüm katun ulayu öglärim äkälärim käliŋünüm kunçuylarım* "Annem Hatun ve (üvey) annelerim, ablalarım, gelinlerim, prenseslerim" (KT K 9) *eki şad ulayu iniygünüm oglanım bäglärim bodunum közi kaşi* "İki Şadın ve erkek kardeşlerimin, oğullarımın, beylerimin ve halkımın gözleri kaşları..." (KT K 11) *ataman tarkan...tunyukuk buyla baga tarkan ulayu buyruk...* "Ataman Tarkan... Tunyukuk Buyla Baga Tarkan ve kumandanlar..." (BK G 14) 2. *başlayu* ile biten bir zarf...
  - `Ata 2011, s. 139` (eslesen: _iKİ ŞaD_)
    > ...nlatır. Bu zarf-fiil eki, birleşik fiillerde tasvirî fiili asıl fiile bağlayan ektir. Bugün olduğu gibi Orhun Türkçesinde de en işlek zarf- fiil ekidir: inim köl tigin birle eki şad birle öl-ü yit-ü kazgantım “kardeşim Köl Tigin ile, iki şad ile (birlikte) öle (ölesiye) yite (yitesiye) kazandım (çabaladım)” KT D27 kızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140]...
  - `Tekin 1998, s. 36` (eslesen: _ŞaD İNiM_)
    > ...kanğım Kağanığ, (D 21) öğüm katunuğ kötürüğme Tehfğri, il beriğlme TJengri, Türük bodun atı küsi yok bolmazun tiyin, özümin ol Tengri kağan olurtdı. INeâgğ ylılsığ bodunta üze olurmadım. İçre aşsız, taşra tonsuz yabız yablak bodunta (üze olurtum. TJigin eki şad inim ORHON YAZITLARI 69 burada (ona) biz verdik. (Eş olarak da) kız kardeşim prensesi verdik. (Buna rağmen) kendisi hata işledi. [[s. 36]] (Sonuç olarak Az'ların) hakanları öldü, halkı (da) kul köle oldu. Köğmen ülkesi sahipsiz kalmasın diye Az (ve) Kırgız halkl...
  - `Ata 2011, s. 120` (eslesen: _BİRLE SÖZLeŞDiMiZ_)
    > ...mavi gök aşağıda yagız yer yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 bu türük bodun ara yarıklıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17...


## BK-D-22#1 - Bilge Kağan Yazıtı, Doğu 22. satir  (4 kelime)

- **transkripsiyon:** `eÇiMiZ : KaZGaNMıŞ : BODuN : aTI`
- **kelime karsiliklari:** EÇÜMÜZÜN : KAZANDIĞI : BOYLARIN : ADI
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _eÇiMiZ KaZGaNMıŞ BODuN aTI_)
    > ...de zengin ve müreffeh (bir) halk üzerine hükümdar olmadım. (Tam tersine), karnı aç, sırtı çıplak yoksul (ve) sefil (bir) halk üzerine hükümdar oldum. Prens iki şad (ve) kardeşim [s. 37] 70 BİLGE KAĞAN YAZITI Kül)! Tigin (bir)le sözleşdimiz: Kanğımız (D 22) eçimiz kazganmış bodun atı küsi yok bollmazun| tiyin Türük bodun üçün tün udımadım, küntüz olurmadım; inim Kül Tl(igin birle, eki şad) birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. (Men özüm kağan olurtukuma|, yir sayu barmış bodun (yadağın yalafığın)| ölü yit...
  - `Tekin 1998, s. 24` (eslesen: _BODuN aTI_)
    > ..., eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tigin birle ORHON YAZITLARI 45 (Eş olarak da) kız kardeşim prensesi verdik. (Buna...
  - `Tekin 2003, s. 107` (eslesen: _BODuN aTI_)
    > ...ını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sabin almatin...* “(Seni) besleyip doyurmuş olan akıllı hakanlarının sözlerini...
  - `Ata 2011, s. 137` (eslesen: _BODuN aTI_)
    > ...ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu bar-mış er-ti “Türk halkının adı yok olup gitmiş idi” Ongin ön 3 2. -mış ermiş (belirsiz geçmiş zamanın rivayeti) adıglı toŋuzlı art üze sokuş-mış er-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen G...
  - `Olmez 2017, s. 57` (eslesen: _BODuN aTI_)
    > ...ecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT...
  - `Ata 2011, s. 130` (eslesen: _BODuN aTI_)
    > ...hikâyesi) ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun [[s. 130]] cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu bar-mış er-ti “Türk halkının adı yok olup gitmiş idi” Ongin ön 3 2. -mış ermiş (belirsiz geçmiş zamanın rivayeti) adıglı toŋuzlı art üze sokuş-mış er-miş “ayı ile domuz dağ geçidinde (sırtta) karşılaşmış imiş” IB 6 Gerçekleşmeyen Gelecek Zaman -tAçI...


## BK-D-22#2 - Bilge Kağan Yazıtı, Doğu 22. satir  (9 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLMaZUN : TİYiN : TÜRK : BODuN : ÜÇÜN : TÜN : UDuMaDıM`
- **kelime karsiliklari:** KÜSİ : YOK : OLMASIN : DİYE : TÜRK : BOYLARI : İÇİN : GECE : UYUMADIM
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefgğ yılsığ bodunka olurmadım. İçre aşsız, taşra tonsuz, yabız yablak bodunta üze olurtum. İnim Kül Tig...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK BOLMaZUN TİYiN_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä kaganıŋ+ın sab...
  - `Ata 2011, s. 176` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > .... Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi...
  - `Ata 2011, s. 169` (eslesen: _KÜSİ YOK BOLMaZUN_)
    > ...rden hangisidir? a. Ölteçi b. Bodunug c. Tirgürü d. İgittim e. Bay 2. İl berigme teŋri ifadesinde, aşağıdaki eklerden hangisi kullanılmıştır? a. Sıfat-fiil b. Zarf-fiil c. İsimden fiil yapım eki d. İsimden isim yapım eki e. İsim çekim eki 3. Türük bodun atı küsi yok bolmazun cümlesinin eylemi, aşağıdaki fiil çekim eklerinden hangisini almıştır? a. [[s. 169]] Birinci tekil kişi emir eki b. Üçüncü tekil kişi emir eki c. Üçüncü tekil kişi gelecek zaman eki d. Üçüncü tekil kişi geniş zaman eki e. İkinci tekil kişi emir eki 4. Sü sül...


## BK-D-22#3 - Bilge Kağan Yazıtı, Doğu 22. satir  (10 kelime)

- **transkripsiyon:** `KÜNTüZ : OLuRMaDıM : İNiM : KÖLTİGiN : BİRLE : iKİ : ŞaD : BİRLE : ÖLÜ : YİTÜ`
- **kelime karsiliklari:** GÜNDÜZ : OTURMADIM : İNİM : KÜLTİĞİN : İLE : İKİ : ŞAD : İLE : ÖLE : YİTE
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...l ve sefil (bir) halk üzerine hükümdar oldum. Kardeşim Kül Tigin ile [s. 25] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabga...
  - `Ata 2011, s. 172` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...)ç(i)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı amcamızın kazanmış oldukları halkın küsi yok͡ bo[lmazun] tiy(i)n türük͡ bod(u)n üç(ü)n tün udım(a)d(ı)m adı sanı yok olmasın diye Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b...
  - `Ata 2011, s. 165` (eslesen: _ŞaD BİRLE ÖLÜ YİTÜ_)
    > ...r oldum. Prens iki şad ve kardeşim Költigin ile anlaştık (konuştuk): Babamızın [s. 165] D22 (e)ç(i)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s...


## BK-D-22#4 - Bilge Kağan Yazıtı, Doğu 22. satir  (8 kelime)

- **transkripsiyon:** `KaZGaNDıM : aNÇA : KaZGaNıP : BİRiKİ : BODuNuG : OT : SUB : KILMaDıM`
- **kelime karsiliklari:** KAZANDIM : ANCA : KAZANIP : BÜTÜN : BOYLARI : ATEŞ : SU [GİBİ ZIT] : KILMADIM
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


## BK-D-22#5 - Bilge Kağan Yazıtı, Doğu 22. satir  (7 kelime)

- **transkripsiyon:** `MeN : ÖZüM : KaGaN : OLuRTUKuMA : YİR : SaYU : BaRMıŞ`
- **kelime karsiliklari:** BEN : ÖZÜM : KAĞAN : OTURDUĞUMDA : [HER] YERE : SAYU : VARMIŞ
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA YİR SaYU BaRMıŞ_)
    > ...I Kül)! Tigin (bir)le sözleşdimiz: Kanğımız (D 22) eçimiz kazganmış bodun atı küsi yok bollmazun| tiyin Türük bodun üçün tün udımadım, küntüz olurmadım; inim Kül Tl(igin birle, eki şad) birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. (Men özüm kağan olurtukuma|, yir sayu barmış bodun (yadağın yalafığın)| ölü yitü Iyana) (D 23) kelti. [[s. 37]] Bodunuğ iğideyin tiyin yırgaru |OJğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa birgerü Tabgaç tapa eki yeğirmli süledim|, sünğüşdüm. Anta kisre Tefiğri yarlıkaduk üçün, kutum ülüğüm bar üç...
  - `Tekin 1998, s. 25` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA_)
    > ...5] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri ya...
  - `Ata 2011, s. 172` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA_)
    > ...e Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b(a)rm(ı)ş bod(u)n [yadagın dım. Öylece çabalayıp birleşik halkı yalaŋın] ölü yitü [yana] ateş (ile) su etmedim (birbirine düş-...
  - `Ata 2011, s. 165` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuMA_)
    > ...)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s. 165]] ilg(e)rü k͡ııt(a)ń t(a)t(a)bı bod(u)n t(a)pa bir(i)gerü t(a)bg(a)ç t(a)pa (e)ki y(e)g(i)rmi sül(e)...


## BK-D-22#6 - Bilge Kağan Yazıtı, Doğu 22. satir  (3 kelime)

- **transkripsiyon:** `BODuN : ÖLÜ : YİTÜ`
- **kelime karsiliklari:** BOYLAR : ÖLE : YİTE
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...z kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün,...
  - `Tekin 2003, s. 117` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...16) *bäglär kop[ın] yanalım... tedi* "(O haberi işitip) beyler hep birlikte "Dönelim!" dediler" (T 36-37) *oŋ totok yurçin yaraklıg älig+in tutdı* "(Prens Kül) Ong Totok'un kayın biraderini silahlı eli ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok...
  - `Ata 2011, s. 119` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...gibi sözcükler tarz zarfı olarak kullanılmıştır. ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu...
  - `Ata 2011, s. 112` (eslesen: _BODuN ÖLÜ YİTÜ_)
    > ...yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. [[s. 112]] ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 [s. 113] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’,...


## BK-D-22#7 - Bilge Kağan Yazıtı, Doğu 22. satir  (3 kelime)

- **transkripsiyon:** `YaDaGıN : YaLıŊıN : YaNA`
- **kelime karsiliklari:** YAYA : YALIN : YANA
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _YaDaGıN_)
    > ...ç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değild...
  - `Tekin 2003, s. 138` (eslesen: _YaDaGıN_)
    > ...bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıgaç tutunu agturtum* "(Askerleri), atları yederek, yayan ve ağaçlara tutuna tutuna yukarı ağdırdım" (T 25) **304.** *yüg(g)ärü* "yukarı doğru" < *\*yüg* "üst, tepe, yukarı" (krş. MK *yügsä-* "yükselmek", yukarı çıkmak"): 1. *türük bäglär bodun ögirip säbini...
  - `Ata 2011, s. 94` (eslesen: _YaDaGıN_)
    > ...evletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki karışıklığın habercisi gibidir. ben ‘ben’ T 1 ~ bini ‘beni’ T 10...
  - `Ata 2011, s. 87` (eslesen: _YaDaGıN_)
    > ...Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” [[s. 87]] köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki karışıklığın habercisi gibidir. ben ‘ben’ T 1 ~ bini ‘beni’ T 10 sen ‘sen’ KT G8 ~ s...
  - `Tasagil, s. 112` (eslesen: _YaLıŊıN_)
    > ...irdiğinin ilk zamanlarında Siz baba oğul bize yakınlık gösterdiniz. Size mü cevher ve ipekli kumaş sunuldu. Önce ve sonra bunlar aşırı derecede devam etti. Nasıl eskinin bu büyük minnettarlığını unutuyorsunuz. Şimdi seni öldürmem ge rekir." Ssu-li korktu ve hayalının bağışlanmasını rica etd. Men-hsia-sheng'da hapse atıldı. [[s. 112]] T'ai-tsung ile Shih-cbung unvanlı Kao Shih-lien, Chung-shu-ling imranlı Fang Hsüan-ling, general Chou Fan hızla 6 süvari İle karşılıklı müzakere etmeye Wei ırmağının kuzeyine gittiler. Anlaşm...
  - `Kafesoglu, s. 22` (eslesen: _YaLıŊıN_)
    > ...özelliği, sadece kroniklerden sağlanan basit bilgiye veya doğrudan doğruya spekülâsyona değil, fakat kültürün maddî ürünleri olan etnograflk malzemeye dayanmakta oluşudur. Teorinin 1885'lerde temelini atan F. Ratzel (ölm. [[s. 22]] 1904)'in maddî kültür materyalinin, başka toplulukiarca kabul edilerek, yer değiştirmek (göç teorisi) suretiyle vukua gelen kültür yayılması görüşü, öğrencisi L. Frobenius tarafından, benzer materyallerin çok sayıda olması gerekliliği (çokluk kıstası) ilâvesiyle (1898) kuvvetlenmiştir. Nihayet...


## BK-D-23#1 - Bilge Kağan Yazıtı, Doğu 23. satir  (19 kelime)

- **transkripsiyon:** `KeLTİ : BODuNıG : İGiDeYİN : TİYiN : YIRıGaRU : OGuZ : BODuN : TaPA : İLGeRÜ : KITaYN : TaTaBI : BODuN : TaPA : BİRiGeRÜ : TaBGaÇ : TaPA : iKİ : YiGiRMİ : SÜLeDiM`
- **kelime karsiliklari:** GELDİ : BOYLARI : YEDİREYİM : DİYE : YIRIYA : OĞUZ : BOYLARI : TARAFINA : İLERİ : KITAY : TATABI : BOYLARI : TARAFINA : BERİYE : TABGAÇ : TARAFINA : İKİ : YİRMİ : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _OGuZ BODuN TaPA İLGeRÜ_)
    > ...küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ ü...
  - `Tekin 2003, s. 138` (eslesen: _OGuZ BODuN TaPA_)
    > ...e Dokuz Ersin'e kadar sefer ettim" (KT G 3) *birgärü tabgaç tapa* "Güneyde Çin'e doğru..." (KT D 28, BK D 23), vb. **302.** *yırgaru* "kuzeye doğru, kuzeyde" < *\*yırı* "kuzey": *yırgaru tün ortosıŋaru* "kuzeyde gece ortasına doğru" (KT G 2, BK K 2) *yırgaru oguz bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıg...
  - `Tekin 2003, s. 151` (eslesen: _TaTaBI BODuN TaPA_)
    > ...r: *äligçä är tutdumuz ol ok tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa ulug sü eki yegirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara do...


## BK-D-23#2 - Bilge Kağan Yazıtı, Doğu 23. satir  (7 kelime)

- **transkripsiyon:** `SÜŊüŞDüM : aNDA : KİSRE : TeŊRİ : YaRLıKaDUK : ÜÇÜN : KUTuM`
- **kelime karsiliklari:** SÜNGÜŞDÜM : ONDAN : KİRSE : TANRI : BUYURDUĞU : İÇİN : KUTUM
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda k...
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmi...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş...


## BK-D-23#3 - Bilge Kağan Yazıtı, Doğu 23. satir  (7 kelime)

- **transkripsiyon:** `ÜLÜGüM : BaR : ÜÇÜN : ÖLTeÇİ : BODuNuG : TİRGüRÜ : İGiTiM`
- **kelime karsiliklari:** ÜLÜĞÜM : VAR [OLDUĞU] : İÇİN : ÖLECEK : BOYLARI : TİRGÜRÜP : YEDİRDİM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _ÜLÜGüM BaR ÜÇÜN ÖLTeÇİ_)
    > ...bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça...
  - `Ata 2011, s. 55` (eslesen: _ÜLÜGüM BaR ÜÇÜN ÖLTeÇİ_)
    > ...azıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört b...
  - `Ata 2011, s. 48` (eslesen: _ÜLÜGüM BaR ÜÇÜN ÖLTeÇİ_)
    > ...ltürel bakımdan gelişmiş Türk boylarından biri olarak öbür Türklerden önce yerleşik hayata geçerler. [[s. 48]] Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi a...


## BK-D-23#4 - Bilge Kağan Yazıtı, Doğu 23. satir  (4 kelime)

- **transkripsiyon:** `YaLıŊ : BODuNuG : TONLıG : KILDıM`
- **kelime karsiliklari:** YALIN : BOYLARI : DONLU : KILDIM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...
  - `Olmez 2017, s. 22` (eslesen: _BODuNuG_)
    > ...görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu...
  - `Tekin 1998, s. 25` (eslesen: _KILDıM_)
    > ...ı halklarına doğru, güneyde (de) Çin'e doğru on iki kez büyük ordu sevk ettim... savaştım. [[s. 25]] Ondan (D 29) sonra, Tanrı esirgesin, ilâhi lütfum olduğu için, kısmetim olduğu için, ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım. Sayıca az olan halkı çoğalttım; güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki (D 30) halkları hep (kendime) bağımlı kıldım, (Türk halkını) düşmansız kıldım. (Bu halkların) hepsi bana bağımlı oldular, (bana) hizmet ediyorlar. [...
  - `Ergin 1970, s. 13` (eslesen: _KILDıM_)
    > ...yere gittin. Hep orda mahvoldun, yok edildin. Orda, geri kalanınla her yere hep zayıflayarak, ölerek yürüyordun. Tanrı buyurduğu için, kendim devletli olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk mille...


## BK-D-23#5 - Bilge Kağan Yazıtı, Doğu 23. satir  (4 kelime)

- **transkripsiyon:** `ÇIGaYN : BODuNuG : BaY : KILDıM`
- **kelime karsiliklari:** YOKSUL : BOYLARI : BAY : KILDIM
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


## BK-D-24#1 - Bilge Kağan Yazıtı, Doğu 24. satir  (4 kelime)

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


## BK-D-24#2 - Bilge Kağan Yazıtı, Doğu 24. satir  (6 kelime)

- **transkripsiyon:** `IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM`
- **kelime karsiliklari:** IĞAR : İLLİDEN : IĞAR : KAĞANLIDAN : YEĞ : KILDIM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ ö...
  - `Ata 2011, s. 55` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi anç...
  - `Ata 2011, s. 48` (eslesen: _IGaR KaGaNLıGDA YİG_)
    > ...Kağan ve Köl Tigin Dönemi Bilge Kağan dönemini en iyi yansıtan sözler, KT D29-30 ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diril...


## BK-D-24#3 - Bilge Kağan Yazıtı, Doğu 24. satir  (6 kelime)

- **transkripsiyon:** `TÖRT : BULuŊDaKI : KaGaNLıGDA : KOP : BaZ : KILDıM`
- **kelime karsiliklari:** DÖRT : TARAFDAKI : KAĞANLIKLARIDA : HEP : BAZ : KILDIM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TÖRT BULuŊDaKI_)
    > ...tidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme...
  - `Tekin 2003, s. 144` (eslesen: _TÖRT BULuŊDaKI_)
    > ..."onca, o kadar", *ärtiŋü* "pek, pek çok", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep...
  - `Ata 2011, s. 47` (eslesen: _TÖRT BULuŊDaKI_)
    > ...ğzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş....
  - `Olmez 2017, s. 102` (eslesen: _TÖRT BULuŊDaKI_)
    > ...kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır törög : tört : buluŋdakı ....................dim : üze : kök teŋri asra yagız yėr kılıntokda ėkin ara kişi oglı kılınmış* "(D 1) İlahî göğün yarattığı Türk Bilge Kağan, sözüm: babam Türk Bilge Kağan ... ... Altı Sir, Tokuz Oğuz, keçe (?) çadırlı beyleri, halkı [... ...] Türk Tanrısı...
  - `Olmez 2017, s. 103` (eslesen: _KOP BaZ_)
    > ...zuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O...
  - `Ata 2011, s. 40` (eslesen: _TÖRT BULuŊDaKI_)
    > ...’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta otur...


## BK-D-24#4 - Bilge Kağan Yazıtı, Doğu 24. satir  (5 kelime)

- **transkripsiyon:** `YaGıSIZ : KILDıM : KOP : MaŊA : KÖRTİ`
- **kelime karsiliklari:** YAĞISIZ : KILDIM : HEP : BANA : GÖRDÜ[LER]
- **kanit:**
  - `Tekin 2003, s. 120` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...(T 21) *bizni ärklig adırtı* "Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I 8) 4. Verme-Bulunma durumu: *bilgä tuñukuk(k)a baŋa aydı* "(Hakan), Bilge Tunyukuk'a, bana, (şöyle) emretti:" (T 31) *bu yerdä maŋa kul boltı* "Burada bana köle oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı ha...
  - `Ata 2011, s. 55` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...ań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6...
  - `Ata 2011, s. 48` (eslesen: _KOP MaŊA KÖRTİ_)
    > ...ve BK D23’tedir: teŋri yarlıkazun kutum bar üçün ülügüm bar üçün ölteçi bodunug tirgürü igittim yalaŋ bodunug tonlug çıgań bodunug bay kıltım az bodunug üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az o...


## BK-D-24#5 - Bilge Kağan Yazıtı, Doğu 24. satir  (6 kelime)

- **transkripsiyon:** `YiTİ : YeGiRMİ : YaŞıMA : TaŊUT : TaPA : SÜLeDiM`
- **kelime karsiliklari:** YEDİ : YİRMİ : YAŞIMDA : TANGUT : TARAFINA : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _YiTİ YeGiRMİ_)
    > ...n, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bun...
  - `Tekin 2003, s. 112` (eslesen: _YiTİ YeGiRMİ_)
    > ...rense Yollug, yazdım" (KT GD), vb. 5. Eylemin işlendiği zamanı gösteren zarf tümleci olur: *ol öd+kä kul kullug, küŋ küŋlüg bolmiş ärti* "O dönemde köleler (bile) köle sahibi, cariyeler (bile) kadın hizmetkar sahibi olmuş idi" (KT D 21) *kül tigin koń yıl+ka yiti yegirmi+kä uçdı* "Prens Kül Koyun yılında, on yedi(nci gün)de vefat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süres...
  - `Ata 2011, s. 164` (eslesen: _YiTİ YeGiRMİ_)
    > ...le [isimden fiil yapım eki] –dim [1. tekil kişi belirli geçmiş zaman] Sıra Sizde 2 k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş “Babam Kağan on yedi adamla dışarı çıkmış (baş kaldırmış).” kaŋ “baba” +(ı)m [1. tekil kişi iyelik eki] yiti yegirmi “on yedi” (VI. Ünitedeki Sayılar başlıklı bölümü yeniden okuyunuz). er “adam, erkek” +(i)n [araç durumu eki] taşık- “dışarı çıkmak, baş kaldırmak” < taş “dış, dışarı” +(ı)k [isimden fiil yapım eki] –mış [3. tekil kişi belirsiz geçmiş zaman eki] Yararla...
  - `Tekin 1998, s. 37` (eslesen: _YeGiRMİ YaŞıMA_)
    > ...ölteçi bodunuğ tfirglürü iğittim. Yalang bodunuğ tonluğ kıltım, çığariy bodunuğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım...
  - `Ata 2011, s. 127` (eslesen: _YeGiRMİ YaŞıMA_)
    > ...ügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /...
  - `Olmez 2017, s. 52` (eslesen: _YeGiRMİ YaŞıMA_)
    > ...ir süreç olabilir) ortaya *+ŋA* şekli çıkmış olmalıdır (*\*+n+kA* >> *+ŋA*), burada bugün için açıkça görülemeyen bir zamir *n*'si vardır: [s. 52] # s. 052 — Mehmet Ölmez (basılı sayfa 54) 1. kişi: *olortokuma* "(tahta) oturduğumda" (BK D 2, K 9) *sekiz yėgirmi yaşıma...* "On sekiz yaşımda..." *+kA*'lı örnek de vardır: ~ *tört yėgirmi yaşımka* "On dört yaşımda"; iyelik eklerinden sonra da *+kA*'lı şekillerin kullanılması Yenisey yazıtlarında yaygın bir durumdur: *üç yetmiş yaşımka adrıltım* "altmış üç yaşımda (bu dünyada...


## BK-D-24#6 - Bilge Kağan Yazıtı, Doğu 24. satir  (3 kelime)

- **transkripsiyon:** `TaŊUT : BODuNuG : BOZDuM`
- **kelime karsiliklari:** TANGUT : BOYLARINI : BOZDUM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _TaŊUT BODuNuG_)
    > ...lang bodunuğ tonluğ kıltım, çığariy bodunuğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğ...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...
  - `Olmez 2017, s. 22` (eslesen: _BODuNuG_)
    > ...görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu...
  - `Tekin 1998, s. 39` (eslesen: _BOZDuM_)
    > ...rkek kardeşimle beraber bu kadar önderlik edip çalışmasa ve muvaffak olmasa idim, Türk halkı ölecek idi, yok olacak idi. Türk beyleri (ve) halkı şöylece düşünün (ve) şöylece bilin: Oğuz. halki se. rer senn göndermiyeyim diye sefer ettim, (D 34) evini barkını bozdum. Oğuz halkı, Dokuz Tatar'larla birlikte toparlanıp geldi. Ağu'da iki büyük savaş verdim. Askerlerini bozdum, ülkelerini orada zaptettim. [[s. 39]] Öylece kazanıp ..........ıu (Tanrı) buyurduğu için, ben Otuz ÜÇ YAŞIMCA serisine ARAR YOK İdi ss kişi (D 35) be...


## BK-D-24#7 - Bilge Kağan Yazıtı, Doğu 24. satir  (6 kelime)

- **transkripsiyon:** `OGLIN : YOTuZIN : YILKISIN : BaRıMIN : aNDA : aLTıM`
- **kelime karsiliklari:** OĞLUNU : YUTUZUNU : YILKISINI : VARINI : [O] ANDA : ALDIM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _YILKISIN BaRıMIN_)
    > ...uğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledi...
  - `Tekin 2003, s. 227` (eslesen: _YILKISIN BaRıMIN_)
    > ...ŋ]ri tuta birti. Kara İgil bodunug yok kılmadım, äbin barkın yılkısın [y]ul(ı)madım. Kıyın aydım, turguru ko(t)tum. "Käntü bodunum," tidim, "udu käliŋ!" tidim. Kodup bardım. Kälmädi. Yiçä (D 3) irtim. Burguda yetdim. Törtünç ay tokuz yaŋıka süŋüşdüm, sançdım. Yılkısın barımın, kızın koduzın kälürtüm. Bişinç ay udu kälti. Säkiz Oguz, Tokuz Tatar kalmatı kälti. Säläŋä kidin, Yılun Kol birdin sıŋar Şıp başıŋa tägi çärig itdim. (D 4) Kärgün Sakışın, Şıp başın yürä kälti.... uçı Säläŋäkä tägi çärig itdi. Bişinç ay tokuz otuzka süŋüşdü...
  - `Tekin 2003, s. 59` (eslesen: _YILKISIN_)
    > ...D 35 vb.) - *kızın* "kızlarını" (BK K 10 vb.) < **kız-in* - *sabın* "sözlerini" (T 22, 58 < *sab-in* (KT G 9, BK K 14) - *taş(ı)n* "dışını" (T 13) < *taş-in* (KT G 12, BK K 14) - *usın* "uykusunu" (T 19) < **ū-sin* - *y[ıl]k[ıs]ın* "at sürülerini" (BK GB) < *yılkısin* (BK D 24) Uygur yazıtlarında da art ünlülü sözcüklere eklenen 3. kişi iyelik eki genellikle ünlü uyumuna girer: - *atın* "adlarını" (Tar. K 5) < *āt-in* - *bar(ı)mın* "malını mülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *ba...
  - `Ata 2011, s. 172` (eslesen: _YILKISIN_)
    > ...iyi yaptım. Dört taraftaki halkı hep kı[l͡t](ı)m ko͡ op m(a)ŋa körti y(e)ti y(e)g(i)rmi y(a)ş(ı)ma t(a)ŋut t(a)pa kendime tabî ettim, (halkımı) sül(e)d(i)m t(a)ŋut bod(u)n(u)g düşmansız hâle getirdim, (bu buzd(u)m og(u)lin yu[tuz]in yılkısin halkların) hepsi bana bağımlı oldu. b(a)r(ı)min (a)nt͡ a (a)lt(ı)m s(e)k(i)z On yedi yaşımda Tangut tarafına y(e)g(i)rmi y(a)ş(ı)ma (a)ltı çub sogdak doğru asker sevk ettim, Tangut hal- kını bozg...
  - `Tekin 1998, s. 26` (eslesen: _BaRıMIN_)
    > ...[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bay...
  - `Tekin 2003, s. 146` (eslesen: _BaRıMIN_)
    > ...pek çok” < *\*kālı* “kalan, artık” + *sız*: - *on ok süsi boduni kalısız taşıkmiş* “On Ok ordusu ve halkı geride hiç kimse kalmamasıya sefere çıkmış” (T 30) - *on ok süsi kalısız taşıkdı* “On Ok ordusu geride hiç kimse kalmamasıya sefere çıktı” (T 33) - *äbin barımın kalısız kop kälürti* “Çadırlarını ve mal mülklerini geride hiçbir şey bırakmamasıya getirdiler” (KT K 1), vb. **332.** *kärgäksiz* “gereğinden çok, ziyadesiyle” < *kärgäk +siz*: - *bir tümän agı altun kümüş kärgäksiz kälürti* “On binlerce ipekli kumaş, altın...


## BK-D-24#8 - Bilge Kağan Yazıtı, Doğu 24. satir  (6 kelime)

- **transkripsiyon:** `SeKiZ : YeGiRMİ : YaŞıMA : aLTI : ÇUB : SOGDaK`
- **kelime karsiliklari:** SEKİZ : YİRMİ : YAŞIMDA : ALTI : ÇUB : SOĞDAK
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _SeKiZ YeGiRMİ YaŞıMA aLTI ÇUB SOGDaK_)
    > ...uğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART...
  - `Ata 2011, s. 127` (eslesen: _SeKiZ YeGiRMİ YaŞıMA_)
    > ...nı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /...
  - `Olmez 2017, s. 52` (eslesen: _SeKiZ YeGiRMİ YaŞıMA_)
    > ...llık bir süreç olabilir) ortaya *+ŋA* şekli çıkmış olmalıdır (*\*+n+kA* >> *+ŋA*), burada bugün için açıkça görülemeyen bir zamir *n*'si vardır: [s. 52] # s. 052 — Mehmet Ölmez (basılı sayfa 54) 1. kişi: *olortokuma* "(tahta) oturduğumda" (BK D 2, K 9) *sekiz yėgirmi yaşıma...* "On sekiz yaşımda..." *+kA*'lı örnek de vardır: ~ *tört yėgirmi yaşımka* "On dört yaşımda"; iyelik eklerinden sonra da *+kA*'lı şekillerin kullanılması Yenisey yazıtlarında yaygın bir durumdur: *üç yetmiş yaşımka adrıltım* "altmış üç yaşımda (bu dünyada...
  - `Ata 2011, s. 120` (eslesen: _SeKiZ YeGiRMİ YaŞıMA_)
    > ...ın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. [[s. 120]] tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nö...


## BK-D-25#1 - Bilge Kağan Yazıtı, Doğu 25. satir  (5 kelime)

- **transkripsiyon:** `TaPA : SÜLeDİM : BODuNuG : aNDA : BOZDuM`
- **kelime karsiliklari:** TARAFINA : SÜLEDİM : BOYLARINI : [O] ANDA : BOZDUM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _TaPA SÜLeDİM BODuNuG_)
    > ...a yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s....
  - `Tekin 1998, s. 25` (eslesen: _TaPA SÜLeDİM_)
    > ...a törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng i...
  - `Ata 2011, s. 119` (eslesen: _TaPA SÜLeDİM_)
    > ...raç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39...
  - `Olmez 2017, s. 54` (eslesen: _TaPA SÜLeDİM_)
    > ..."Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *anta ötrü oguz kop+ın kelti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *ingek kölek+in toglada oguz kelti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birl...
  - `Ata 2011, s. 112` (eslesen: _TaPA SÜLeDİM_)
    > ...di’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıd...
  - `Tekin 1998, s. 11` (eslesen: _SÜLeDİM_)
    > ...ı kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...


## BK-D-25#2 - Bilge Kağan Yazıtı, Doğu 25. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇ : OŊ : TUTUK : BiŞ : TÜMeN : SÜ : KeLTİ`
- **kelime karsiliklari:** TABGAÇ : ONG : PAŞA : BEŞ : TÜMEN : SÜ : [İLE] GELDİ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _BiŞ TÜMeN SÜ KeLTİ_)
    > ...gek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at...
  - `Kafesoglu, s. 71` (eslesen: _OŊ TUTUK_)
    > ...s'da Sogd kolonileri(Chao-wu),nin bulunduğu "Altı eyâlet" (=Liu Hu Çu. Kül Tegin ve Bilge Kitabelerinde: Altı Çub Sogdak) üzerine açtığı sefere (702 Şubat) Bilge ile Kül Tegin de katümışlardı. [[s. 71]] Sogdluların dağılması üzerine karşı çıkan Çinli kumandan Ong-tutuk idaresindeki 50 bin kişilik ordu da mağlûp edildi ve Çinli general, henüz 16 yaşlarında bulunan Kül Tegin tarafından elinde silâhı ile yakalanarak getirilip hâ-kan'a teslim edildi (702 sonbahar)373. Kapgan Çin'e akınlarına devam etti. 702'de Yen-çu, Hia-u, Şi...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 284` (eslesen: _TÜMeN SÜ_)
    > ...k için elini koynuna sokmak. Bk: soglıt —, sograt —, sugrat — soglıt — — aramak için elini koynuna sokturmak. Bk: soglı—, sograt—, sugrat—. sograş — — sormak, emmek. sograt — — aratmak, aratarak her şeyi görmek. Bk: sog—, soglı—, soglıt—, sogur—. Krş.: Rad., Tümen— suk — — aramak, soguk — soğuk. /Rad.; Caf./. [[y. 284]] — luk — soğukluk için hazırlanmış. soguklan — — soğuk bulmak veya soğuk saymak. sogul — — -su- toprağa sızıp kaybolmak, soğulmak, -su, süt-çekilmek, azalmak. Krş.: Caf.— sugul — — kurumak, su çekilmek....
  - `03_Codex_Cumanicus_Kuun_1880, s. 411` (eslesen: _SÜ KeLTİ_)
    > ...97. Kelanedir ? «trahit» pag. 228. Kelepen s. keleppen «ieprosus»pag. Keliyrir «venit» pag. 143, keji i. e. kelejir idem pag. 144, kelgay «ve- niat» ibid., keluyorler «veniunt» pag. [[y. 411]] 221, — keltiristi perf. formae fact., e. g. sukeltiristi i. e. su keltiristi «juvavit in gerenda aqua» Kyk «incendium» pag. 148. Kyce «parvusB» pag. 146, cf. chi^i. Kic^iyder ma «pruritum sentio» pag. Ky^kerir «clamat pag. 169. Kijgil «indue» pag. 66, cf. keyic. Kiynarsen «affligens» pag. 213, cf. kinahp. Kigir «nictatur» pag...
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zen...
  - `Tekin 2003, s. 17` (eslesen: _TaBGaÇ_)
    > ...gä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, vb.; 6. Adların çıkma durumu için ayrı bir ek olmaması, bu durumun yer ya da bulunma durumu eki ile kurulması: *oglanıŋız-da* “oğullarınızdan”, *kurıdın-ta* “batıdan”, *tabgaç-da* “Çin’den”, vb. 7. Adların birliktelik (*comitative*) durumunun bulunması ve bu durumun {-LIgU} eki ile kurulması: *män ini-ligü* “ben erkek kardeş(im) ile birlikte”, *eki üç kişi-ligü* “iki üç kişi ile birlikte”, vb.; 8. Şimdiki zaman eylem sıfatının {-gm...


## BK-D-25#3 - Bilge Kağan Yazıtı, Doğu 25. satir  (3 kelime)

- **transkripsiyon:** `IDUK : BaŞDA : SÜŊüŞDüM`
- **kelime karsiliklari:** IDUK : BAŞDA : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _IDUK BaŞDA SÜŊüŞDüM_)
    > ...ledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz mening bodunum etti. [[s. 38]] Tefgri yer bulgakın üçün, ödifiğle) (D 30) küni teğdük üçün, yağı bolt...
  - `Tekin 1998, s. 27` (eslesen: _IDUK BaŞDA_)
    > ...Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kırk yaşayur erti. Alp Şalçı akın (K 3) binip op...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...
  - `Tekin 2003, s. 112` (eslesen: _SÜŊüŞDüM_)
    > ...efat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüM_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayıs...
  - `Olmez 2017, s. 45` (eslesen: _SÜŊüŞDüM_)
    > ...ld Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47...


## BK-D-25#4 - Bilge Kağan Yazıtı, Doğu 25. satir  (5 kelime)

- **transkripsiyon:** `OL : SÜG : aNDA : YOK : KILDıM`
- **kelime karsiliklari:** O : SÜYÜ : [O] ANDA : YOK : KILDIM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _OL SÜG_)
    > ...ı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip t...
  - `Tekin 2003, s. 141` (eslesen: _OL SÜG_)
    > ...tokıtdım* "Otağ(ımı) burada kurdurtdum, ordugah çitlerini (de) burada vurdurttum" (Tar. B 2) **316.** *anta* "orada, o yerde" (bk. **Gösterme Zamirleri**): *anta ańıg kişi ança boşgurur ärmiş* "Orada kötü (niyetli) kişiler şöyle akıl verirler imiş" (KT G 7) *ol süg anta yok kışdımız* "O orduyu orda yok ettik" (KT D 32) *üküş öltäçi anta tirilti* "(Aksi halde) ölecek olan birçok kişi orada hayatta kaldı" (BK D 31) *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *alpi ärdämi anta kükdi* "Onun yiğitliği ve...
  - `Ata 2011, s. 119` (eslesen: _OL SÜG_)
    > ...’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın...
  - `Ergin 1970, s. 31` (eslesen: _YOK KILDıM_)
    > ...ettim. Otuz sekiz yaşımda kışın Kitaya doğru ordu sevk ettim ......... Otuz dokuz yaşımda ilk baharda Tatabıya doğru ordu sevk ettim. .................... ben ......... öldürdüm. Oğlunu, karısını, at sürüsünü, servetini ........... | millet ......... karısını yok kıldım............ | .......... [[s. 31]] | savaştım. .......... verdim. Kahraman erini öldürüp balbal kılı verdim. Elli yaşımda Tatabı milleti Kıtaydan ayrıldı. .......... İker dağına .......... | Kugeneral kumandasında kırk bin asker geldi. Töngkes dağında hücum e...
  - `Ata 2011, s. 112` (eslesen: _OL SÜG_)
    > ...rü ‘beri, bu yana’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. [[s. 112]] +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan adını burada biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’,...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 5` (eslesen: _aNDA YOK_)
    > ...mıştı 1 - Kutadgu-Biliğ - SAblylys - SAL Ale -— AYAYLA AN oYi oLML ia a desi! a! APİ izl, Yin. " aaa sw 8 - İbnü Mühennanın bahsettiği bir eser (Celâleddin Harzemşah adına yazılan bu eser bize kadar gelmemiştir). [[y. 5]] 9- —İNİAĞ AN, a) (kitap meydanda yoktur) v- —4AŞ UĞ)JLEAYI (kitap meydanda yoktur) 11 - ES) liz) Nİ (kitap bize kadar gelmemiştir) 12 - SAğ Yal al A, yi zi 13 - Bilik (Bu kitaptan Ebu Hayyan bahsetmekte ise de bugün eser meydanda yoktur). 14 - yelekli mil) > Çfbnü Mühenna bahsederse de eser...
