# Ceviri istek paketi 31 - Orhun cumlecikleri

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


## TY1-B-4#4 - Tonyukuk Yazıtı, Batı 4. satir  (3 kelime)

- **transkripsiyon:** `YiTİ : YÜZ : KİŞİG`
- **kelime karsiliklari:** YEDİ : YÜZ : KİŞİYİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _YÜZ KİŞİG_)
    > ...ertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ be...
  - `Tekin 2003, s. 167` (eslesen: _YÜZ KİŞİG_)
    > ...gü yaŋıltaçı siz* "Bu dönemde (tahta) sadık olan beyler, (siz) mi yanılacaksınız?" (KT G 11) *öltäçiçä sakın-ıgma türük bäglär bodun* "ölecekmiş gibi düşünüp duran Türk halkı ve beyleri" (BK D 2) *tensi oglı ayt-ıgma tag* "Tensi oğlu denilen dağ" (T 47) *yeti yüz kişig uduz-ugma ulugı şad ärti* "Yedi yüz kişiyi sevkeden büyükleri Şad idi" (T 4-5) 2. Ad olarak: *ilgärü [bar-ıgma] bardıg kurgaru bar-ıgma bardıg* "Doğuya gidenleriniz (doğuya) gittiniz, batıya gidenleriniz (batıya) gittiniz" (BK D 19-20) [s. 168] # s. 168 — T...
  - `Ata 2011, s. 138` (eslesen: _YÜZ KİŞİG_)
    > ...il) kişi” KT G7 3. -(X)gmA sıfat-fiil eki, ulandığı eyleme “yapan, eden” anlamı verir: il ber-igme teŋri “devlet veren Tanrı” KT D25 bödke kör-ügme begler gü yaŋıltaçı siz “Bu dönemde tabi olan beyler, (siz) yanılacak mısınız” KT G11 yeti yüz kişig uduz-ugma ulugı şad erti “yedi yüz kişiyi sevk eden büyükleri Şad idi” T 4-5 bu bitig biti-gme atısı yollug tigin “bu yazıları yazan, yeğeni Yolluğ Tigin” KT G13 bediz yarat-ıgma “süsleme yaratanlar (ressam ve heykeltıraşlar)” KT K13...
  - `Ata 2011, s. 131` (eslesen: _YÜZ KİŞİG_)
    > ...meyen (cahil) kişi” KT G7 3. [[s. 131]] -(X)gmA sıfat-fiil eki, ulandığı eyleme “yapan, eden” anlamı verir: il ber-igme teŋri “devlet veren Tanrı” KT D25 bödke kör-ügme begler gü yaŋıltaçı siz “Bu dönemde tabi olan beyler, (siz) yanılacak mısınız” KT G11 yeti yüz kişig uduz-ugma ulugı şad erti “yedi yüz kişiyi sevk eden büyükleri Şad idi” T 4-5 bu bitig biti-gme atısı yollug tigin “bu yazıları yazan, yeğeni Yolluğ Tigin” KT G13 bediz yarat-ıgma “süsleme yaratanlar (ressam ve heykeltıraşlar)” KT K13 4. [[s. 131]] -(I)glI sıf...
  - `Tanyeri, s. 20` (eslesen: _YiTİ YÜZ_)
    > ...i gibidir. “Biş yüz” sayısı, bugünkü “beş yüz” sayısıyla aynıdır. Aynı şekilde “üç bin” sayısı da günümüzdeki gibidir. Şimdi öğrenmeyi pekiştirmek için birkaç örnek verelim: bir toksan [81]; otuz artukı eki [32]; altı yüz artukı tört kırk [634]; üç bin yiti yüz artukı biş yigirmi [3715]; tört yüz artukı sekiz elli [448] Sayfa: 19 [s. 21] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com Göktürk Alfabesinin Kökeni...
  - `Tekin 1998, s. 20` (eslesen: _KİŞİG_)
    > ...üçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[...


## TY1-B-5#1 - Tonyukuk Yazıtı, Batı 5. satir  (3 kelime)

- **transkripsiyon:** `UDuZuGMA : ULuGI : ŞaDeRTİ`
- **kelime karsiliklari:** UDUZAN : ULU : ŞAD İDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _UDuZuGMA ULuGI_)
    > ...ınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök ka...
  - `Tekin 2003, s. 221` (eslesen: _UDuZuGMA ULuGI_)
    > ...n bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerintä (4) bod kalmadı. Ida taşda kalmişi kubranıp yeti yüz boltı. Eki ülügi atlıg ärti, bir ülügi yadag ärti. Yeti yüz kişig (5) uduzugma ulugı Şad ärti. "Aygıl!" tedi. Ayıgmasi bän ärtim, Bilgä Tuñukuk. "Kagan mu kışayin?" tedim, sakıntım: "Toruk būkalı sämiz būkalı ırakda (6) bilsär, sämiz būka toruk buka teyin bilmäz ärmiş" teyin, ança sakıntım. Anta kisrä Täŋri bilig bertök üçün özüm ök kagan kış...
  - `Ata 2011, s. 145` (eslesen: _UDuZuGMA ULuGI_)
    > ...ğıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. bilig bilmez kişi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti 138 [s. 146] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz...
  - `Olmez 2017, s. 63` (eslesen: _UDuZuGMA ULuGI_)
    > ...urtum* "Türk halkını derleyip ülke kuracağınızı buraya kazıdım" (KT G 10); *yayılıp ölsikijin yeme bonta urtum* "hata edip öleceğinizi de buraya kazıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Öl...
  - `Ata 2011, s. 138` (eslesen: _UDuZuGMA ULuGI_)
    > ...m 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti [s. 139] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz c. türk sir bodun yerinte idi yorımazun d. tögültün...
  - `Tekin 2003, s. 124` (eslesen: _ULuGI_)
    > ...ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışarısını tutmuş gibiyiz" (T 13), vb. [s. 125] # s. 125 — ORHON TÜRKÇESİ GRAMERİ ## Soru Zamirleri **275.** Soru zamirleri şunlardır...


## TY1-B-5#2 - Tonyukuk Yazıtı, Batı 5. satir  (3 kelime)

- **transkripsiyon:** `YaGıL : TİDİ : YaGMıŞIBeneRTiM`
- **kelime karsiliklari:** YAĞIL : DEDİ : YAĞMIŞI BEN İDİM
- **kanit:**
  - `Tekin 2003, s. 233` (eslesen: _YaGıL_)
    > ...ı bän. Külüg Togan bän. ## Kejeelig-Hovu (Malov E 45) 1. Oglan atım Çobuç Inal. ...ka atım Kümül Ögä. 2. Beş yāşımda kaŋsız kalıp tokuz yegirmi yāşımga ögsüz 3. bolup, katıglanıp, otuz yāşımg[a] Ögä boltum. Kırk yıl 4. el tut(t)um, bodun başladım. Taş yagıg yagıladım, el(l)ädim. 5. Bir yetmiş yāşımga kök täŋridä küngä āzdım. Äsizim ä! 6. Kürsi Yāmda elim, äsizim ä! Yerim subum äsizim ä! Kuyda kunçuyum tul kaltı. Äsizim ä! 7. Kinim kadaşım, äsizim ä! Oglanım kızım a! Ürüŋüm karam, äsiz! Yüz elig ärim ä! Äsizim ä! 8. Bı...
  - `Ogel C1, s. 251` (eslesen: _YaGıL_)
    > ...yurtların hepsini aldı ve kendine tâbi kıldı (baktırdı) : “Kurt koyuna, pars geyiğe, “Böri koyğa, yolbars keyikke, “Kartal tavşana, şâhin kekliğe * Bürküt koyanğa, karcığay keklikke zarar vermedi. “İlini düzenleyip, *İllerini tüzüb, “Düşmanlarını bozup, “ Yağılarnı bozub, “Padişahları kırıp, “O zamanındakı padişahların üzüb “Doksan yıl padişahlık kılıp, “Doksan yıl padişahlık kılıb, ölti. öldü. [[s. 251]] 108 Kanlı-Yavı'nın farsça metindeki hükümdarlık ünvanı, Tiken-Bif(r)le ErBiçgen Kayı-Yabgu'dur (F. Sümer, a....
  - `Kafesoglu, s. 77` (eslesen: _YaGıL_)
    > ...r İlte-berlik durumuna giren Uygur boyu 740'larda Hakanlığın Yabgu'luğu hâline gelmişti. A- UYGUR HAKANLIĞI 745'de, Gök-Türk iktidannı yıkarak, Ötüken'de devlet kuran Uygurlar şu 9 urug'dan meydana gelen bir birlik idi: YaglaqarlYag\zqp - hakan uruğu (ihtimal yagıla + qır=düşman ile savaşmak)/; Hu-tu-ko (Uturqar ihtimal ut [[s. 77]] (kazanmak) + r + gar); Hu (Kiu-lo-vu (po)= Kürebir); Küremür (ihtimal Küre (korunmak) + bir); Mo-ko-si-ki (Bagasıgır?); A-vu-çö (Ebirçeg veya [s. 78] Abırçak?); Hu-vu-su; Yo-vu-ku (Yagmur-q...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 40` (eslesen: _YaGıL_)
    > ...40]] Yuşulmak) , Sab yuşıldı; Alak TE anınğ eligi ışka yı. Şıldı - onun eli işe yatıştı, eli işe udumlaştı", Sirke veya boza 11 gibi şeyler güğümün emziğinden akıtılırsa yine böyle denir; çel SL Ze yüşlldi > yüşilür - yüşilmek) (447, i Saw yazıldı; MİR yan yagıldı > yağmur Yağdıraldın, Başkası da böyledir, > ( Sus İL yamur - yazılmak), Sy yığıldı: » Salli er ıştın yığıldı < g- dam işten şekindi, kaçındı", Başkası başka bas; - cü ma are az S li Alİ 283 eümlenindek? [[y. 40]] LR $öyle olacaktır; ,. AMİ (**7 Basma n...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 382` (eslesen: _YaGıL_)
    > ...nğan. (Rad., Çağ.; Müh.; Rab.; K. B.J. — lığ — fili olan; filci. — tegin — sahış adı. yağı — düşman. Bk: Düzelt : yagı, yagı — düşman. /Rad, Uyg, Kom.; Yaz.; Caf, T. [[y. 382]] T, An. İnd, U.; Müh.; K. B; Rab.; İd., Hou.J. yagık — — düşmanlaşmak. /Rad.). yagıl — — yağdırılmak. yağıla — — düşmanlık etmek; düşmanla savaşmak, çarpışmak. Bk: yagıt —, yaguş —. /Rad, Uyg.; Yaz.; Müh.), yağ (i) r — al, kalır ve eşek gibi hayvanların sırtında semer, eğer ve yük vurmasından meydana gelen yara, yağır. /Rad.; İd.J. Krş.: Ra...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 241` (eslesen: _YaGıL_)
    > ...1 228 DEDE KORKUT KİTABI Kardaşlu yigitler kalkar kopar olur Kardaşsuz * miskin yigit eüsesine yumruk tokınsa Ağlayuban dört 10 yanına bakar olur Ala gözden acı yaşın döker olur Ala © gözlü oğlunuz görinçe Big baba hatun ana esen 1? kaluğ didi. Ata ana yağılış haberdür gitme oğul didiler. 1? [[s. 241]] Oğlan aydur: Meni yolumdan ayırmağ, ağam tutılan kal'aya 1 varmayınça, ağamuü ölüsin dirisin bilmeyinçe, öldi-y-ise $ kanın almayınça kalın Oğuz iline gelmegüm yoh didi. Ata 9 ana ağlaşap Kazana adam şaldılar. Oğl...


## TY1-B-5#3 - Tonyukuk Yazıtı, Batı 5. satir  (4 kelime)

- **transkripsiyon:** `BİLGE : TONYUKUK : KaGaNMUKISaYiN : TİDiM`
- **kelime karsiliklari:** BİLGE : TONYUKUK : KAĞAN MI KILAYIM : DEDİM
- **kanit:**
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK_)
    > ...ı cephesi Bilge Kağan kitâbesini Yollug Tigin, yazdım. Bunca türbeyi, resimi, sanatı.........kağanın yeğeni Yollug Tigin ben bir ay dört gün oturup yazdım, resimledim ........... M U H A R R E M E R G İ N [s. 36] TONYUKUK ÂBİDESİ (Birinci Taş) Doğu cephesi Bilge Tonyukuk ben kendim Çin ilinde kılındım. Türk milleti Çine tâbi idi. | Türk milleti hanını bulmayıp Çinden ayrıldı, hanlandı. Hanını bırakıp Çine tekrar teslim oldu. Tanrı şöyle demiştir: Han verdim, | hanını bırakıp teslim oldun. Teslim olduğun için Tanrı öldürmüştür...
  - `Ata 2011, s. 117` (eslesen: _BİLGE TONYUKUK_)
    > ...örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme...
  - `Ata 2011, s. 110` (eslesen: _BİLGE TONYUKUK_)
    > ...urumunda bugün için bize yabancı gelen bir kullanımı daha vardır. Aşağıdaki örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. [[s. 110]] tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme durumundaki çekimi ise aŋaru biçimindedir. [[s. 110]] Buradan yo...
  - `Tanyeri, s. 3` (eslesen: _BİLGE TONYUKUK_)
    > ...nleyip ordular göndererek başlıya baş eğdirmiş, dizliye diz çöktürmüştür. Kapgan Kağan'dan sonra yaşanan kısa bir geçiş döneminden sonra; Bilge Kağan ve Kül Tigin'in devleti birlikte yönettikleri, 716 - 734 yıllarını kapsayan parlak bir dönem başlamıştır. Bilge Tonyukuk'un vezir olduğu bu dönemde, Çin üzerinde mutlak egemenlik sağlanmış ve Çin'deki bütün Türkler getirilerek Türk birliği sağlamlaştırılmıştır. Orhun Yazıtları, İkinci Göktürk Devleti'nin bu döneminde dikilmiştir ve yazılı metinlerden takip edebildiğimiz Türk...
  - `Ogel C2, s. 383` (eslesen: _BİLGE TONYUKUK_)
    > ...ı, alttan kaynayan kaynaklardan alan, bir göl vardır. Bunun için de çok şey söylenmiştir. [[s. 382]] 3** Radlof, Proben, V, s. 530: Bk. TepeBöz bölümü, [s. 383] 30. BÖLÜM BÜYÜK TÜRK İLLERİNİN ULU IRMAKLARI “İrtiş ırmağının, geçit vermez yerleri geçti...” Bilge Tonyukuk yazıtı 1. GÖKTÜRK ÇAĞI IRMAKLARI Göktürk çağı, Türk düşünce ve bilgisinin, en aydın ve gerçekçi bir çafıdır.Coğraf ya bilgisi de, gerçek dünya görüşü temellerine oturmuştur. Türkçe *“*Öğgüz”'”' sözü, artık yalnızca büyük ülkeler ile büyük kavimlerin ırmakla...
  - `Kafesoglu, s. 75` (eslesen: _BİLGE TONYUKUK_)
    > ...rden kalma bir millî tarih kaynağı olarak değil, aynı zamanda, Türk dili ve edebiyatının uzun ve kolayca okunabilen ilk âbidesi olarak da kültür tarihinde mühim yer tutan bu kitabe426 metninin bizzat Tonyukuk tarafından kaleme alınmış olması ihtimali, Aygucı, bilge Tonyukuk'a Türk edebiyatının adı ve şahsiyeti bilinen ilk siması olmak şerefini kazandırmaktadır427. 731 yılında da prens Kül Tegin öldü (27 Şubat 731)428. 47 yaşında idi. [[s. 75]] 7 yaşından beri ömrünü Türk milletinin yücelmesine hasreden, cesareti, savaşçılığı hem...


## TY1-B-5#4 - Tonyukuk Yazıtı, Batı 5. satir  (4 kelime)

- **transkripsiyon:** `SaKıNDıM : TORuKBUKuLI : SeMiZBUKuLI : IRKDA`
- **kelime karsiliklari:** SAKINDIM : DORUK BOĞA : SEMİZ BOĞA : ARKAYA
- **kanit:**
  - `Roux, Altay Turklerinde Olum, s. 263` (eslesen: _SaKıNDıM_)
    > ...nin yapıldığını biliyorlardı. Eski Türk metinlerinin çoğunda ağlayıp sızlanmalardan söz edilmektedir, fakat ilk aşamada ölünün ardından yapılan sızlanmalarla ilgili daha fazla bilgi verilmemektedir: Kardeşinin ölümü üzerine, Bil- ge Kağan yakınmakta ve özüm sakındım”'“ ifadesini kullanmaktadır. [[s. 263]] Fakat cenaze törenine katılan yabancılar da ağlayıp yakınmaktaydılar: 207 ONGİN, satır 12; H. N. ORKUN, |, s. 130 (yazar bunu okumamışur). Sir G. CLAUSON, JRAS, 0.c., metin s. 183, çeviri s. 189, yorumlar s. 187. 208...
  - `Kafesoglu, s. 75` (eslesen: _SaKıNDıM_)
    > ...kardeşim Kül Tegin öldü, görür gözüm görmez oldu, bilir bilgim bilmez oldu... Zamanın takdiri Tanrınındır. Kişi-oğlu ölmek için yaratılmıştır. Yaslandım, gözden yas, gönülden feryat gelerek yanıp yakıldım... Milletimin gözü, kası (ağlamaktan) fena olacak diye sakındım114 °. [[s. 75]] Çin'de de aynı üzüntü duyulmuş, imparator hususî elçi ile Ötüken'e baş sağlığı mektubu göndermiş, Kül Tegin'in hâtırasına dikilecek âbidede Çince bir metnin de bulunmasını arzu etmişti431. Bilge Kagan'm isteği ile hazırlanan Kül Tegin kitabesi...
  - `Radloff, s. 399` (eslesen: _SaKıNDıM_)
    > ...büyük yas tuttular." Aynı eserin başka bir yerinde "karalar giyip gök sarındılar" denilmektedir. (215) Yaslı çadırın üzerine bayrak asmak Oğuz- (214) Yazıttaki " .. [[s. 399]] .iki şad, ulayu inigünim, oğlanım, beglerim, bu dunım közi, kaşı yablak boldaçı tip sakındım" cümlesinden bu şahısla rın yalnız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat etmelerinden hakanın telaşa düştüğü anlaşılmaktadır. Bilge Ha kan yazıtındaki "saçlarını kulaklarını biçtiler" cümlesi de bunu teyit eder. [s. 400] !ard...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 202` (eslesen: _SaKıNDıM_)
    > ...mumiyetle Kırgız-Kazaklarda yas tutma töreni ve âdetleri eski Gök Türk ve Oğuzlar’da olduğu gibidir. X IX . yüzyılın ortalarına kadar devam etmiştir. [[s. 202]] Yazıttaki “ ...ik i şad, ulayu inigünim, oğlanım, begleriın, budunım közi, kaşı yablak boldaçı tip sakındım” cümlesinden bu şahısların yal nız ağlamaktan değil, fakat bıçakla yüzlerini, kaşlarını, gözlerini berbat et melerinden hakanın telâşa düştüğü anlaşılmaktadır. Bilge Hakan yazıtın daki “ saçlarını kulaklarım........................ biçtiler” cümlesi de Bunu t...


## TY1-B-6#1 - Tonyukuk Yazıtı, Batı 6. satir  (6 kelime)

- **transkripsiyon:** `BÖLSeR : SeMiZ BUKA : TORUK : BUKA : TiYiN : BİLMeZeRMiŞ`
- **kelime karsiliklari:** TEPSE : SEMİZ BOĞA [MI] : DORUK : BOĞA [MI TEPTİ] : DİYE : BİL[İN]MEZ İMİŞ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _SeMiZ BUKA TORUK BUKA_)
    > ...doyarsan (bir daha) acıkacağını düşünmezsin' (KT G 8). Bu cümle âç tosık ömez, tok âçsık ömez “Aç doyacağını düşünmez (sanmaz), tok acıkacağını düşünmez (sanmaz)” gibi bir atasözü üzerine kurulmuş olmalıdır. [[s. 12]] Toruk bükalı semiz bükalı ırakda bilser, semiz büka toruk buka teyin bilmez ermiş “(İnsan) zayıf boğalarla semiz boğaları uzaktan bilmek zorunda kalsa (hangilerinin) semiz (hangilerinin) zayıf olduğunu bilmez imiş” (T I B 5-6). Bu cümle, sonuna ermiş “imiş” sözcüğünün eklendiği bir atasözü olmalıdır. [[s. 12]] Tunyukuk,...
  - `Tekin 2003, s. 104` (eslesen: _TORUK BUKA_)
    > ...nci ada eklenir. Bu gramer kategorisinin Orhon Türkçesinde pek yaygın olmadığı anlaşılıyor; çünkü bu ekle birleştirilmiş adlar oldukça azdır: - *ini+li eçi+li* "erkek kardeşler ve ağabeyler" (KT D 6) - *bäg+li bodun+lı+g* "beyleri ve kabileleri" (KT D 6) - *toruk būka+lı sämiz būka+lı* "zayıf boğalar ve semiz boğalar" (T 5) - *tün+li kün+li* "gece ve gündüz" (BK GD) - *adıg+lı toŋuz+lı* "(bir) ayı ve (bir) domuz" (IB 6), vb. [s. 105] # s. 105 — ORHON TÜRKÇESİ GRAMERİ #### Ad Durumları **253.** Orhon Türkçesinde dokuz ad...
  - `Ata 2011, s. 111` (eslesen: _TORUK BUKA_)
    > ...ni getiriniz. Birliktelik (Bağlama) Eki Orhun Türkçesinde aynı yapı ve görevde iki sözcük +lI eki ile bağlanır. Bu ek, her iki isme ulanır, ancak durum ekleri ikinci isim üzerine eklenir. toruk buka+lı semiz buka+lı T 5 “zayıf boğalar ve semiz boğalar” beg+li bodun+lı+g KT D6 “beyleri ve boyları” tün+li kün+li BK GD “gece ve gündüz” İsim Durum Ekleri 1. Yalın Durum: Eksizdir, g...
  - `Ata 2011, s. 104` (eslesen: _TORUK BUKA_)
    > ...İyelik Ekleri Orhun Türkçesinde eb ‘ev’ sözcüğü üzerine iyelik eklerini getiriniz. Birliktelik (Bağlama) Eki Orhun Türkçesinde aynı yapı ve görevde iki sözcük +lI eki ile bağlanır. Bu ek, her iki isme ulanır, ancak durum ekleri ikinci isim üzerine eklenir. toruk buka+lı semiz buka+lı T 5 “zayıf boğalar ve semiz boğalar” beg+li bodun+lı+g KT D6 “beyleri ve boyları” tün+li kün+li BK GD “gece ve gündüz” İsim Durum Ekleri 1. Yalın Durum: Eksizdir, gövde ile bir ve aynıdır. [[s. 104]] 2. Tamlayan Durumu (İlgi, Genitif): +Iŋ /...


## TY1-B-6#2 - Tonyukuk Yazıtı, Batı 6. satir  (3 kelime)

- **transkripsiyon:** `TiYiN : aNÇA : SaKıNDıM`
- **kelime karsiliklari:** DİYE : ANCA : SAKINDIM
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TiYiN_)
    > ...(D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Tekin 2003, s. 12` (eslesen: _TiYiN_)
    > ...212 Bağlaçlı Birleşik Cümleler ......................................................................... 213 Yan Cümleli Birleşik Cümleler ........................................................................ 214 Aktarma Söz ve *tip*, *teyin* / *tiyin* ............................................................ 214 Yan Cümle Bağlacı olarak *üçün* ................................................................ 215 Ara Cümle ...............................................................................
  - `Ata 2011, s. 52` (eslesen: _TiYiN_)
    > ...değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tag...
  - `Roux, Altay Turklerinde Olum, s. 263` (eslesen: _SaKıNDıM_)
    > ...nin yapıldığını biliyorlardı. Eski Türk metinlerinin çoğunda ağlayıp sızlanmalardan söz edilmektedir, fakat ilk aşamada ölünün ardından yapılan sızlanmalarla ilgili daha fazla bilgi verilmemektedir: Kardeşinin ölümü üzerine, Bil- ge Kağan yakınmakta ve özüm sakındım”'“ ifadesini kullanmaktadır. [[s. 263]] Fakat cenaze törenine katılan yabancılar da ağlayıp yakınmaktaydılar: 207 ONGİN, satır 12; H. N. ORKUN, |, s. 130 (yazar bunu okumamışur). Sir G. CLAUSON, JRAS, 0.c., metin s. 183, çeviri s. 189, yorumlar s. 187. 208...
  - `Ata 2011, s. 45` (eslesen: _TiYiN_)
    > ...Yazıtlarda II. [[s. 45]] Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük...
  - `Kafesoglu, s. 75` (eslesen: _SaKıNDıM_)
    > ...kardeşim Kül Tegin öldü, görür gözüm görmez oldu, bilir bilgim bilmez oldu... Zamanın takdiri Tanrınındır. Kişi-oğlu ölmek için yaratılmıştır. Yaslandım, gözden yas, gönülden feryat gelerek yanıp yakıldım... Milletimin gözü, kası (ağlamaktan) fena olacak diye sakındım114 °. [[s. 75]] Çin'de de aynı üzüntü duyulmuş, imparator hususî elçi ile Ötüken'e baş sağlığı mektubu göndermiş, Kül Tegin'in hâtırasına dikilecek âbidede Çince bir metnin de bulunmasını arzu etmişti431. Bilge Kagan'm isteği ile hazırlanan Kül Tegin kitabesi...


## TY1-B-6#3 - Tonyukuk Yazıtı, Batı 6. satir  (10 kelime)

- **transkripsiyon:** `aNDA : KİSRE : TeŊRİ : BİLiG : BiRTÜK : ÜÇüN : ÖZüM : ÖK : KaGaN : KISDıM`
- **kelime karsiliklari:** ONDAN : SONRA : TANRI : BİLGİ : VERDİĞİ : İÇİN : ÖZÜM : HEP : KAĞAN : KILDIM
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _ÜÇüN ÖZüM ÖK KaGaN_)
    > ...) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sıra...
  - `Tekin 2003, s. 124` (eslesen: _ÜÇüN ÖZüM ÖK KaGaN_)
    > ..." (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyo...
  - `Ata 2011, s. 123` (eslesen: _ÖZüM ÖK KaGaN KISDıM_)
    > ...41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)...
  - `Ata 2011, s. 116` (eslesen: _ÖZüM ÖK KaGaN KISDıM_)
    > ...fer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. [[s. 116]] bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ü...


## TY1-B-6#4 - Tonyukuk Yazıtı, Batı 6. satir  (5 kelime)

- **transkripsiyon:** `BİLGE : TONYUKUK : BOYLA : BaGA : TaRKaN`
- **kelime karsiliklari:** BİLGE : TONYUKUK : BOYLA : BAĞA : TARKAN
- **kanit:**
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK BOYLA BaGA TaRKaN_)
    > ...dedi. Katılanı ben idim. Bilge Tonyukuk. Kağan mı kılayım, dedim. Düşündüm. Zayıf boğa ve semiz boğa arkada | tekme atsa; semiz boğa, zayıf boğa olduğu bilinmezmiş derler diyip, öyle düşündüm. Ondan sonra Tanrı bilgi verdiği için kendim bizzat ka- ğan kıldım. Bilge Tonyukuk Boyla Baga Tarkan | ile beraber O R H U N Â B İ D E L E R İ [s. 37] İltiriş Kağan olunca güneyde Çini, doğuda Kıtayı, kuzeyde Oğuzu pek çok öldürdü. Bilicisi, yardımcısı bizzat bendim. Çogayın kuzey yamaçları ile Kara Kumda oturuyorduk. Güney cephesi Geyik yiyerek, tavşan...
  - `Ergin 1970, s. 32` (eslesen: _TONYUKUK BOYLA BaGA TaRKaN_)
    > ...N Â B İ D E L E R İ sözüm: Babam Türk Bilge Kağanı oturduğunda şimdiki Türk beyleri, sonra Tarduş beyleri; Kül Çor başta olarak, arkasından şadpıt beyleri; önde Tölis beyleri; Apa Tarkan | başta olarak, arkasından şadpıt beyleri; bu .......... Taman Tarkan, Tonyukuk Boyla Baga Tarkan ve buyruk .......... iç buyruk; Sebig Kül İrkin başta olarak, arkasından buyruk; bunca şimdiki beyler, babam kağana fevkalade | fevkalade çok iltica etti. .......... [[s. 32]] Türk beylerini, milletini fevkalade çok yüceltti. Övdü .......... babam kağan ........
  - `Kafesoglu, s. 141` (eslesen: _BOYLA BaGA TaRKaN_)
    > ...bunu gerektirir. [[s. 141]] Beylerin vergilerden, cezalardan veya başka herhangi bir resmî yükümlülükten muaf tutulduklarına dair bir işaret yoktur: Tabgaçlardan beri mevcut olup da Gök-Türk imparatorluğunda mühim yeri bilinen "tartan"151 (Tonyukuk'un unvanı: Boyla Bağa Tarkan)'lar da, bizim tarih literatüründeki yaygın kanaatin aksine, imtiyazlı değillerdi. [[s. 141]] Tarhanlar, daha sonra, Moğollar devrinde kendilerine hükümdar tarafından "Suyurgal" adı ile verilen ve irsen intikal eden topraklarda donatılmak, vergilerden muaf tu...


## TY1-B-7#1 - Tonyukuk Yazıtı, Batı 7. satir  (13 kelime)

- **transkripsiyon:** `BİRLE : İLTeRiŞ : KaGaN : BOLaYıN : BiRiYE : TaBGaÇıG : ÖŊRE : KITaYNıG : YIRıYA : OGuZuG : ÖKüŞ : ÖK : ÖLüRTİ`
- **kelime karsiliklari:** İLE : İLTERİŞ : KAĞAN : OLUNCA : BERİDE : TABGAÇI : ÖNDE : KITAYI : YIRIDA : OĞUZU : ÇOKÇA : HEP : ÖLDÜRDÜ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BİRLE İLTeRiŞ KaGaN_)
    > .... “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi...
  - `Tekin 1998, s. 6` (eslesen: _İLTeRiŞ KaGaN_)
    > ...anlığı 630'da, Batı Türk Kağanlığı da 659 yılında Çin'in eğemenliği altına girer. [[s. 6]] Ancak, Doğu Türkleri 670 yılında Kutluğ adlı bir liderin öncülüğünde Çinlilere başkaldırır ve uzunca bir mücadeleden sonra başarılı olurlar. Bu başarıdan sonra Kutluğ, İlteriş Kağan ünvanıyla tahta geçer (682). Böylece İkinci Doğu Türk Kağanlığı kurulmuş olur. Ancak bu ikinci kağanlığın da ömrü pek uzun olmaz. [[s. 6]] 740'lı yılların başlarında Uygurlar, liderleri Kül Bilge Han öncülüğünde Türklere başkaldırır ve son Türk prensi Ozmış -...
  - `Tekin 2003, s. 121` (eslesen: _İLTeRiŞ KaGaN_)
    > ...ça, ança* - Araç durumu *anın* İşaret zamirlerinden türemiş öbür sözcükler de şunlardır: *antag* "onun gibi, öyle" (T 9, 36) ~ *antäg* (T 29) < *\*anı täg*, *büntäg+i* "böyle+si" (T 57) < *\*buntäg* < *\*bunı täg*. 1. Yalın durum a) Gösterme zamiri olarak: *ilteriş kagan bilgä tuñukuk kazgantok üçün kapgan kagan türük sir bodun yorıdokı bu* "İlteriş Kağan ve Bilge Tunyukuk (çalışıp çabalayıp) kazandıkları için Kapgan Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädg...
  - `Ata 2011, s. 5` (eslesen: _İLTeRiŞ KaGaN_)
    > ...nlığı’nın Yıkılış Nedenleri …………....… 44 Çin Egemenliğinde Geçen Elli Yıl ………………………………...… 45 II. KÖKTÜRK KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II....
  - `Ata 2011, s. 123` (eslesen: _TaBGaÇıG ÖŊRE_)
    > ...irme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok...
  - `Tekin 2003, s. 134` (eslesen: _ÖK ÖLüRTİ_)
    > ...rdin" (KT G 6, BK K 5) 2. Ad olarak: *azıg üküş kıltı* "(Amcam Hakan) azı çok yaptı" (BK D 14) *azıg üküşüg körtüg* "(Bizim) sayıca az, (düşmanın da) sayıca çok olduğunu (işte) gördünüz" (O 7) 3. Zarf olarak: *biryä tabgaçıg, öŋrä kıtańıg, yırya oguzug üküş ök ölürti* "(İlteriş, hakan olup) güneyde Çinlileri, doğuda Kıtayları, kuzeyde (de) Oğuzları pek çok öldürdü" (T 7) "1000" ve "10,000" gibi pek yüksek sayılar da belirsizlik sayıları gibi kullanılabilir: *bıŋ yıllık tümän künlük bitigimin bälgümin anta yası taşka yara...


## TY1-B-7#2 - Tonyukuk Yazıtı, Batı 7. satir  (5 kelime)

- **transkripsiyon:** `BiLGeSİ : ÇaBıŞI : BeN : ÖK : eRTiM`
- **kelime karsiliklari:** BİLGESİ : ÇAVUŞU : BEN : HEP : İDİM
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BiLGeSİ ÇaBıŞI BeN ÖK eRTiM_)
    > ...iz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu; (fakat) hanını bırakıp Çin'e yeniden bağım...
  - `Ata 2011, s. 123` (eslesen: _BiLGeSİ ÇaBıŞI BeN ÖK eRTiM_)
    > ...sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7...
  - `Ata 2011, s. 116` (eslesen: _BiLGeSİ ÇaBıŞI BeN ÖK eRTiM_)
    > ...iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. [[s. 116]] bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim...


## TY1-B-7#3 - Tonyukuk Yazıtı, Batı 7. satir  (6 kelime)

- **transkripsiyon:** `ÇOGaY : KUZIN : KaRA : KUMuG : OLuRUR : eRTiMiZ`
- **kelime karsiliklari:** ÇOĞAYIN : KUZEYİNDE : KARA : KUMUG[DA] : OTURUR : İDİK
- **kanit:**
  - `Tekin 2003, s. 190` (eslesen: _ÇOGaY KUZIN KaRA KUMuG_)
    > ...lu: *kül tigin bir kırk yaşa-yur är-ti* "Prens Kül (o zaman) otuz bir yaşında idi" KT K 3) *anta kalmişi yir sayu kop toru ölü yorı-yur är-tig* "Oralarda (nasılsa) sağ kalmış olanlarınız da her yöne doğru bitkin ve mecalsiz (bir halde) yürüyordunuz" (KT G 9) *çogay kuzin kara kumug olor-ur är-timiz* "Çogay (dağlarının) kuzeyinde, Kara Kum (denilen) yerde oturuyorduk" (T 7) *buzkunça käl-ir är-timiz* "Şiddetli bir fırtına gibi geliyorduk" (O sağ 2) *atıg ıka ba-yur är-timiz* "Atları ormanda (ağaçlara) bağlıyorduk" (T 27) *[y]anıgma yagıg...
  - `Tekin 1998, s. 44` (eslesen: _KUZIN KaRA KUMuG OLuRUR_)
    > ...çin, (onu) ben kendim kağan yaptım. Bilge Tunyukuk Buyla Bağa Tarkan (B 7) sayesinde İlteriş kağan olarak güneyde Çinlileri, doğuda Kıtay'ları, kuzeyde Oğuz'ları pek çok öldürdü. [[s. 43]] Danışmanı (ve) kumandanı ben idim. [s. 44] 84 TUNYUKUK YAZITI Çuğay kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Seng...
  - `Ata 2011, s. 94` (eslesen: _OLuRUR eRTiMiZ_)
    > ...yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin...
  - `Ata 2011, s. 87` (eslesen: _OLuRUR eRTiMiZ_)
    > ...” bitig taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” [[s. 87]] köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki...
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...
  - `Tekin 2003, s. 234` (eslesen: _eRTiMiZ_)
    > ...[s. 234] # s. 234 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 235) Bägiçim! 8. Ärdämlig elintä bökmädi. Töliş Alp Totok işiŋä bökmädi. Y(i)g(i)t ärkän, äsiz, yıta, açıg a! 9. Yıta! ........... y]agın [al]dıŋız, öltüŋüz. Önçüŋüz bar [üçün bäŋkü]ni tikä bertimiz. Kiş[i]dä yig t(i)kär biz. 10. Ärdämi bar üçün kanınta Kü Totok atka tägmiş bägim, äsiz! Är başı, yıta, açıg a! 11. Tokuz älig yaşda tokuz altmış är ölürmiş är başı Saŋun ölürti. Bilgäm, yıta! 12. İç yer äliki artzun: At(d)açı Alp Totok yōk! Yuş Kadıŋ äliki <...


## TY1-G-1#1 - Tonyukuk Yazıtı, Güney 1. satir  (5 kelime)

- **transkripsiyon:** `KiYiK : YİYÜ : TaBıŞGaN : YiYÜ : OLuRUR`
- **kelime karsiliklari:** GEYİK : YİYE[REK] : TAVŞAN : YİYE[REK] : OTURUR
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _YİYÜ TaBıŞGaN_)
    > ...yukuk Buyla Bağa Tarkan (B 7) sayesinde İlteriş kağan olarak güneyde Çinlileri, doğuda Kıtay'ları, kuzeyde Oğuz'ları pek çok öldürdü. [[s. 43]] Danışmanı (ve) kumandanı ben idim. [s. 44] 84 TUNYUKUK YAZITI Çuğay kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimi...
  - `Tekin 2003, s. 221` (eslesen: _YİYÜ TaBıŞGaN_)
    > ...kıntım. Anta kisrä Täŋri bilig bertök üçün özüm ök kagan kışdım. Bilgä Tuñukuk Buyla Baga Tarkan (7) birlä İlteriş kagan boluyin biryä Tabgaçıg, öŋrä Kıtañıg, yırya Oguzug üküş ök ölürti. Çogay kuzin, Kara Kumug olorur ärtimiz. ## II. Güney Yüzü (8) Keyik yiyü, tabışgan yeyü olorur ärtimiz. Bodun boguzi tok ärti. Yagımız tägrä oçok täg ärti, biz aş ⟨t⟩äg ärtimiz. Ança olorur ärkli Oguzduntan küräg kälti. (9) Küräg sabi antag: "Tokuz Oguz bodun üzä kagan olortı" tir. Tabgaçgaru Kunı, Säŋünüg, ıdmiş, Kıtañgaru Toŋra Äşimig ıd...
  - `Tekin 2003, s. 69` (eslesen: _TaBıŞGaN_)
    > ...ak", *ıgaç* "ağaç", *uguş* "boy, kabile", vb.; *ägir-* "çevirmek, kuşatmak", *igid-* "beslemek", *kigür-* "sokmak", *ügüz* "ırmak", vb.; *agrı-* "hastalanmak", *katıgdı* "sıkıca", *oglan* "oğullar", *adgır* "aygır", *kısga* "kısa", *ıçgın-* "elden çıkarmak", *tabışgan* "tavşan", vb.; *yegdi* "daha iyi", *yüg(g)ärü* "yükseğe", *tägrä* "çepeçevre", *bilgä* "akıllı", *ädgü* "iyi", *ilgärü* "ileriye, doğru, önde", vb. 3. Söz sonunda: *antag* "öyle", *añıg* "kötü", *tag* "dağ", *tug-* "doğmak", *ulug* "ulu", *yog* "cenaze tören...
  - `Ata 2011, s. 94` (eslesen: _TaBıŞGaN_)
    > ...t-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı d...
  - `Olmez 2017, s. 44` (eslesen: _TaBıŞGaN_)
    > ...ulg. | Orhon | Uygur | Kâşgarlı | İbni Mühenna | | :--- | :--- | :--- | :--- | :--- | :--- | | Sıçan | somor' | küsgü | küskü | sıçgan | sıçgan | | Sığır | şegor' | — | ud | ud | sığır | | Kaplan | — | bars | bars | bars | pars, aslan, kaplan | | Tavşan | — | tabışgan | tavışgan | tawışgan | tavışgan | | Ejderha | vereni | ulu | luu | nek | balıg | | Yılan | dilom' | yılan | yılan | yılan | yılan | | At | dvan | yılkı | yunt | yund | at | | Koyun | tekou | kony | koy | koy | koyın | | Maymun | — | biçin | biçin | biçin | b...
  - `Tekin 1998, s. 21` (eslesen: _OLuRUR_)
    > ...ş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Ç...


## TY1-G-1#2 - Tonyukuk Yazıtı, Güney 1. satir  (5 kelime)

- **transkripsiyon:** `eRTiMiZ : BODuN : BOGuZI : ToK : eRTİ`
- **kelime karsiliklari:** İDİK : BOYLARIN : BOĞAZI : TOK : İDİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _eRTiMiZ BODuN BOGuZI ToK eRTİ_)
    > ...7) sayesinde İlteriş kağan olarak güneyde Çinlileri, doğuda Kıtay'ları, kuzeyde Oğuz'ları pek çok öldürdü. [[s. 43]] Danışmanı (ve) kumandanı ben idim. [s. 44] 84 TUNYUKUK YAZITI Çuğay kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bod...
  - `Tekin 2003, s. 204` (eslesen: _BODuN BOGuZI ToK_)
    > ...ıcı bir yardımcı eylem: - *özüm / ... şad ärtim* "Ben ... (Tarduş halkı üzerinde) Şad idim" (KT D 17) - *biz / eki bıŋ ärtimiz* "Biz iki bin idik" (T 16) - *türük bodun / āç ärti* "Türk halkı aç idi" (BK D 38) - *ulugı / şad ärti* "büyükleri Şad idi" (T 5) - *bodun boguzi / tok ärti* "Halkın boğazı tok idi" (T 8) b. Bağlayıcı sona alınmış bir zamir: - *biz / az biz* "Biz azız" (O ön 7) - *bilgä tuñukuk / añıg ol* "Bilge Tunyukuk kötüdür" (T 34) - *oguzi yämä / tarkınç ol* "Oğuzları da huzursuzdur" (T 22) - *türük bodun / tokurkak s...
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...
  - `Tekin 2003, s. 234` (eslesen: _eRTiMiZ_)
    > ...[s. 234] # s. 234 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 235) Bägiçim! 8. Ärdämlig elintä bökmädi. Töliş Alp Totok işiŋä bökmädi. Y(i)g(i)t ärkän, äsiz, yıta, açıg a! 9. Yıta! ........... y]agın [al]dıŋız, öltüŋüz. Önçüŋüz bar [üçün bäŋkü]ni tikä bertimiz. Kiş[i]dä yig t(i)kär biz. 10. Ärdämi bar üçün kanınta Kü Totok atka tägmiş bägim, äsiz! Är başı, yıta, açıg a! 11. Tokuz älig yaşda tokuz altmış är ölürmiş är başı Saŋun ölürti. Bilgäm, yıta! 12. İç yer äliki artzun: At(d)açı Alp Totok yōk! Yuş Kadıŋ äliki <...
  - `Ata 2011, s. 94` (eslesen: _eRTiMiZ_)
    > ...apımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin...
  - `Olmez 2017, s. 51` (eslesen: _eRTiMiZ_)
    > ..."onu". ### Yaklaşma-Bulunma Durumu: +kA, +A Runik harfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlarda...


## TY1-G-1#3 - Tonyukuk Yazıtı, Güney 1. satir  (5 kelime)

- **transkripsiyon:** `YaGıMıZ : TeGRE : OÇUK : TeG : eRTİ`
- **kelime karsiliklari:** YAĞIMIZ : ÇEVREDE : OCAK : DEK : İDİ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _YaGıMıZ TeGRE OÇUK TeG eRTİ_)
    > ...ren öğelerden biri de sık sık başvurulan benzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp k...
  - `Tekin 2003, s. 141` (eslesen: _YaGıMıZ_)
    > ...im halkım orada olacaktır" (T 21) *alpi ärdämi anta kükdi* "Onun yiğitliği ve erdemi orada (ona) ün kazandırdı" (KÇ B 4) **317.** Başka bir yer zarfı da eylemden türeme *tägrä* sözcüğüdür. *tägrä* "dört bir yanda, etrafta" < *\*tägir-* "çevirmek, kuşatmak": *yagımız tägrä oçok täg ärti* "Düşmanlarımız dört bir yan(ımız)da ocak gibi idi" (T 8) Öbür yer zarfları *kanı* "hani? nerede?", *kanta* "nerede?", *kantan* "nereden?" ve *nägüdä* "nerede" için bk. **Belirsizlik Zamirleri**. ## Zaman Zarfları **318.** Zaman zarflar...
  - `Ata 2011, s. 194` (eslesen: _TeGRE_)
    > ...anne teg Tanrı öd pekiştirme edatı (kalın ünlüyle teg- dinlemek ög sonlanan sözlerden sonra ok) tegi yaşamak ök öldürmek tegre yaşatmak, canlandırmak doğu, doğudan teŋri toplanmak ölür- doğu, doğuda tıŋla- kervan, kafile öŋdün arz etmek, rica etmek tir- dizli (mec....
  - `Roux, Eski Din, s. 217` (eslesen: _YaGıMıZ_)
    > ...göre (D. 19, s. 331} Gizli Tarih'te ortaya konmaktadır. O dönemde çağdaş kimseler bundan sık sık söz etmişler ve Piano dei Carpini de bunu en az dört kere belirtmiştir. "Birisi bir prensin evinin eşiğinde yürürse, ölüme mahkum edilir. [ ... ] Kapının eşiğine ayağımızı koymamamız konusunda bizi uyardılar ... [[s. 217]] " (G.29, s. 107-108, 110, 120). Antik "tanrı" günümüzde Türkiye'deki Türklerde kaybolmuştur, ancak tabusu aşağıdaki şekilde bir İslami açıklamayla birlikte Bektaşilerde ve Alevilerde geçerli kalmıştır: "İlmi...
  - `Ata 2011, s. 187` (eslesen: _TeGRE_)
    > ...şad yüksek bir unvan T tabışgan tavşan tagıkdağa çıkmak taluy deniz taş (I) dış, dışarı taş (II) taş; mezar taşı taşıkdışarı çıkmak; isyan etmek, baş kaldırmak taşra dışarı tedemek teblig aldatıcı, hilekâr teg gibi teghücum etmek, saldırmak tegi kadar tegre çevre, çepeçevre teŋri Tanrı [[s. 187]] tıŋladinlemek tiryaşamak tirgüryaşatmak, canlandırmak tiriltoplanmak tirkiş kervan, kafile tizlig dizli (mec. dirençli, inatçı) todoymak toddoymak topuldelmek toraçlıktan ölmek toruk zayıf, cılız töpü tepe törü t...
  - `Tanyeri, s. 19` (eslesen: _YaGıMıZ_)
    > ...İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fiili kullanılır: “Tabgaç kagan yagımız erti.” (Çin milleti düşmanımız idi.) Sayfa: 18 [s. 20] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com Göktürk Yazısında Sayılar Orhun Yazıtları'nda sayılar, yazı...


## TY1-G-1#4 - Tonyukuk Yazıtı, Güney 1. satir  (3 kelime)

- **transkripsiyon:** `BİZ : iSiG : eRTiMiZ`
- **kelime karsiliklari:** BİZ : [İÇİNDE] ATEŞ : İDİK
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...
  - `Tekin 2003, s. 234` (eslesen: _eRTiMiZ_)
    > ...[s. 234] # s. 234 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 235) Bägiçim! 8. Ärdämlig elintä bökmädi. Töliş Alp Totok işiŋä bökmädi. Y(i)g(i)t ärkän, äsiz, yıta, açıg a! 9. Yıta! ........... y]agın [al]dıŋız, öltüŋüz. Önçüŋüz bar [üçün bäŋkü]ni tikä bertimiz. Kiş[i]dä yig t(i)kär biz. 10. Ärdämi bar üçün kanınta Kü Totok atka tägmiş bägim, äsiz! Är başı, yıta, açıg a! 11. Tokuz älig yaşda tokuz altmış är ölürmiş är başı Saŋun ölürti. Bilgäm, yıta! 12. İç yer äliki artzun: At(d)açı Alp Totok yōk! Yuş Kadıŋ äliki <...
  - `Ata 2011, s. 94` (eslesen: _eRTiMiZ_)
    > ...apımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin...
  - `Olmez 2017, s. 51` (eslesen: _eRTiMiZ_)
    > ..."onu". ### Yaklaşma-Bulunma Durumu: +kA, +A Runik harfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlarda...
  - `Ata 2011, s. 87` (eslesen: _eRTiMiZ_)
    > ...taş it-güçi KT K13 “yazıt yapımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” [[s. 87]] köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki...
  - `Tanyeri, s. 18` (eslesen: _eRTiMiZ_)
    > ...kâye, “er-” fiilinin bilinen geçmiş zamanıyla, rivayet “er-” fiilinin öğrenilen geçmiş zamanıyla yapılır. “Er-”, “i-” fiilinin Göktürkçedeki aslî biçimidir. • Hikâye: “bolmış erti” (olmuştu), “tegmiş erti” (değmişti), “kelürür ertim” (getirdim), “bayur ertimiz” (bağlıyorduk), “kaltaçı ertigiz” (kalacaktınız) • Rivayet: “yorıyur ermiş” (yürüyormuş), “yagutur ermiş” (yaklaştırırmış), “olurur ermiş” (oturuyormuş), “yorıtmaz ermiş” (yürütmezmiş) Sayfa: 17 [s. 19] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYE...


## TY1-G-1#5 - Tonyukuk Yazıtı, Güney 1. satir  (6 kelime)

- **transkripsiyon:** `aNÇA : OLuRuR : eRiKLİ : OGuZDıNDıN : KÖRüG : KeLTİ`
- **kelime karsiliklari:** ANCA : OTURUR [İDİK] : ERKLİ : OĞUZDAN : GÖRÜG : GELDİ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNÇA OLuRuR_)
    > ...birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Ç...
  - `Ata 2011, s. 51` (eslesen: _aNÇA OLuRuR_)
    > ...Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç o...
  - `Ata 2011, s. 44` (eslesen: _aNÇA OLuRuR_)
    > ...nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kaga...
  - `Roux, Eski Din, s. 91` (eslesen: _eRiKLİ_)
    > ...yimlerin rüya kitabı) rüya anlatımlarına benzer eski tarihli hiçbir belge elimizde yoktur. Rüyayla ilgili eski bilgilere ender olarak rastlanmaktadır. [[s. 91]] Taberi, Arapların esir aldığı bir Türkün aşağıdaki beyanını aktarmaktadır: "Ben Türkistan'ın en becerikli büyücüsüyüm. Savaşta bir hükümdara refakat ettiğimde, düşmana rüyasında bozgu na uğrayacağını gördürüyorum ve böylece cesaretini kırıyorum" (H.43, 2, s. 263); ancak bu kanıt çeşitli açılardan kuşkulu görünmektedir. Bununla birlikte rüyalara çok eski zamanlard...
  - `Tanyeri, s. 18` (eslesen: _OLuRuR_)
    > ...edeki aslî biçimidir. • Hikâye: “bolmış erti” (olmuştu), “tegmiş erti” (değmişti), “kelürür ertim” (getirdim), “bayur ertimiz” (bağlıyorduk), “kaltaçı ertigiz” (kalacaktınız) • Rivayet: “yorıyur ermiş” (yürüyormuş), “yagutur ermiş” (yaklaştırırmış), “olurur ermiş” (oturuyormuş), “yorıtmaz ermiş” (yürütmezmiş) Sayfa: 17 [s. 19] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com SIFAT-FİİLLER • “-mIş”: “kalmışı” (kalmış olanı), “konmış tiyin” (konmuş diye), “tutmış yir” (tutt...
  - `Tasagil, s. 176` (eslesen: _eRiKLİ_)
    > ...ikey (yukarı aşağı) 20 bin li gidildiğinde varılır. Toplam üç tane yol vardır. Ku zey yolu Hami (İ-wıı)'dan başlar, güney yolu ise Shan-shan'dan çıkar, orta yol ise Kao-ch'ang (Koço)'dan geçer, Genel olarakTun-huang'da birleşirler. Ayrıca söz ile dedi ki:" Becerikli ve hırslı savaşçıları Meng-fang ile K'un-lun ara sına yığalım, o zaman eli tersine çevirmek gibi kolay olur. [[s. 176]] Fakat, Gök-Türkler ve T'u-yü-hun'lar, Ch'iang'larla Hu'ların ülkesini ayrı idare ediyorlar. Onların önünü tıkadıkları için Çin ile vergi mü...


## TY1-G-2#1 - Tonyukuk Yazıtı, Güney 2. satir  (9 kelime)

- **transkripsiyon:** `KÖRüG : SabI : aNTaG : TOKuZ : OGuZ : BODuN : ÜZE : KaGaN : OLuRTI`
- **kelime karsiliklari:** GÖRÜĞÜN : SAVI/SÖZÜ : ŞÖYLE : DOKUZ : OĞUZ : BOYLARI : ÜZE[RİNE] : KAĞAN : OTURDU
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _SabI aNTaG TOKuZ OGuZ_)
    > ...danı ben idim. [s. 44] 84 TUNYUKUK YAZITI Çuğay kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men...
  - `Tekin 2003, s. 221` (eslesen: _SabI aNTaG TOKuZ OGuZ_)
    > ...ya Oguzug üküş ök ölürti. Çogay kuzin, Kara Kumug olorur ärtimiz. ## II. Güney Yüzü (8) Keyik yiyü, tabışgan yeyü olorur ärtimiz. Bodun boguzi tok ärti. Yagımız tägrä oçok täg ärti, biz aş ⟨t⟩äg ärtimiz. Ança olorur ärkli Oguzduntan küräg kälti. (9) Küräg sabi antag: "Tokuz Oguz bodun üzä kagan olortı" tir. Tabgaçgaru Kunı, Säŋünüg, ıdmiş, Kıtañgaru Toŋra Äşimig ıdmiş. Sab ança ıdmiş: "Azkıña Türk [bodun] (10) yorıyur ärmiş. Kagani alp ärmiş, ayguçısi bilgä ärmiş. Ol eki kişi bar ärsär, sini, Tabgaçıg, ölürtäçi!" tir män. Öŋrä Kıtañı...
  - `Tekin 1998, s. 23` (eslesen: _TOKuZ OGuZ BODuN_)
    > ...lsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kıl...
  - `Tekin 2003, s. 124` (eslesen: _TOKuZ OGuZ BODuN_)
    > ...aptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışa...
  - `Ata 2011, s. 118` (eslesen: _TOKuZ OGuZ BODuN_)
    > ...a ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türet...
  - `Ata 2011, s. 111` (eslesen: _TOKuZ OGuZ BODuN_)
    > ...e ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları:...


## TY1-G-2#2 - Tonyukuk Yazıtı, Güney 2. satir  (5 kelime)

- **transkripsiyon:** `TİR : TaBGaÇGaRU : KONI : SeŊÜNüG : IDMıŞ`
- **kelime karsiliklari:** DER : TABGAÇA : KONI : SENGÜNÜ : İTMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _TİR TaBGaÇGaRU_)
    > ...y kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini,...
  - `Tekin 2003, s. 221` (eslesen: _TİR TaBGaÇGaRU_)
    > ...ug olorur ärtimiz. ## II. Güney Yüzü (8) Keyik yiyü, tabışgan yeyü olorur ärtimiz. Bodun boguzi tok ärti. Yagımız tägrä oçok täg ärti, biz aş ⟨t⟩äg ärtimiz. Ança olorur ärkli Oguzduntan küräg kälti. (9) Küräg sabi antag: "Tokuz Oguz bodun üzä kagan olortı" tir. Tabgaçgaru Kunı, Säŋünüg, ıdmiş, Kıtañgaru Toŋra Äşimig ıdmiş. Sab ança ıdmiş: "Azkıña Türk [bodun] (10) yorıyur ärmiş. Kagani alp ärmiş, ayguçısi bilgä ärmiş. Ol eki kişi bar ärsär, sini, Tabgaçıg, ölürtäçi!" tir män. Öŋrä Kıtañıg ölürtäçi!" tir män, "Bini, Oguzug (11)...
  - `Tekin 1998, s. 39` (eslesen: _TaBGaÇGaRU_)
    > ...m. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eçim klağan kutı taplamadı erinç. Tokuz Oğuz bodun yerin subın ıdıp Tabgaçgaru bardı. Tabgaç |..............se | bu yerde kelti. “İğideyin” tiyin saklıntım ..............0lıu J boödünl ..sesa drake |) (D 36) yazuklal....... 0 emsRN bilrye Tabgaçda atı küsi yok boltı. Bu yerde manga kul boltı. Men özüm kağan olurtukum üçün Türük bodunuğ...
  - `Tekin 2003, s. 110` (eslesen: _TaBGaÇGaRU_)
    > ...kları için, beyler ile halkı karşılıklı iftira ettirdikleri için" (KT D 6). Aşağıdaki örneklerlerde ise belirli nesne eki söz öbeğinin her iki üyesine de eklenmiştir: *ku+g säŋün+üg balbal tikä birtim* "General Ku'yu (öldürüp) heykelini dikiverdim" (BK G 9) *tabgaçgaru ku+nı säŋün+üg ıdmiş* "Çin'e General Ku'yu göndermiş" (T 9) ## Verme-Bulunma Durumu **263.** Orhon Türkçesinde adların verme-bulunma durumu genellikle {+kA} eki ile kurulur. Tekil birinci ve ikinci kişi iyelik eki almış sözcükler {+A} ekini alır. Üçüncü kiş...
  - `Ata 2011, s. 112` (eslesen: _TaBGaÇGaRU_)
    > ...ogl+ı+n yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7...
  - `Tekin 1998, s. 41` (eslesen: _SeŊÜNüG_)
    > ...RĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım...


## TY1-G-2#3 - Tonyukuk Yazıtı, Güney 2. satir  (4 kelime)

- **transkripsiyon:** `KITaYNGaRU : TOŊRA : eSiMiG : IDMıŞ`
- **kelime karsiliklari:** KITAYA : TONGRA : ESİMİ : İTMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _TOŊRA eSiMiG IDMıŞ_)
    > ...yü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen t...
  - `Tekin 1998, s. 27` (eslesen: _TOŊRA_)
    > .... Kül Tigin Azman kır (at)ına binip hücum etti, mızrakladı. Askerlerini mızrakladık, ülkelerini aldık. Dördüncü olarak Çuş başında savaştık. Türk (K 7) halkı(nın) ayağı sendeledi. Perişan olacak idi. [[s. 27]] Süratle gelen (düşman) ordusunu Kül Tigin dağıtıp Tongra(lardan) bir grup yiğit on eri Tonga Tigin'in cenaze töreninde kuşatarak öldürdük. Beşinci olarak Ezgenti Kadız'da Oğuz'larla savaştık. Kül Tigin (K 8) Az yağız (at)ına binip hücum etti. İki eri mızrakladı, çamura garketti. O ordu orada öldü. Amga koruganında...
  - `Ergin 1970, s. 20` (eslesen: _TOŊRA_)
    > ...çüncü olarak Bolçuda Oğuz ile savaştık. Kül Tigin Azman atına binip hücum etti, mızrakladı. Askerini mızrakladık, ilini aldık. Dördüncü olarak Çuş başında savaştık. Türk | milleti ayak titretti. Perişan olacaktı. İlerleyip gelmiş ordusunu Kül Tigin püskürtüp, Tongradan bir boyu, yiğit on eri Tonga Tigin mateminde çevirip öldürdük. [[s. 20]] Beşinci olarak Ezginti Kadızda Oğuz ile savaştık. O R H U N Â B İ D E L E R İ [s. 21] M U H A R R E M E R G İ N Kül Tigin Az yağızına binip hücum etti. İki eri mızrakladı, çamura...
  - `Tekin 2003, s. 115` (eslesen: _TOŊRA_)
    > ...övdelerine eklenir: *bän äb+gärü tüşäyin... tedi* "Ben karargaha ineyim... dedi" (T 30) *amga korgan kışlap yazıŋa oguz+garu sü taşıkdımız* "Amga Korgan'da kışlayıp, ilkbaharda Oğuzlara doğru sefere çıktık" (KT K 8) *tabgaç+garu kunı säŋünüg ıdmiş, kıtań+garu toŋra äşimig ıdmiş* "Çin'e doğru General Ku'yu, Kıtay'lara doğru da Tongra Eşim'i göndermiş" (T 9) *ötükän yış+garu uduztum* "(Orduyu) Ötüken dağlarına doğru sevk ettim" (T 15) *apa tarkan+garu içrä sab ıdmiş* "(Hakan), Apa Tarkan'a gizli bir mesaj göndermiş" (T 34...
  - `Ata 2011, s. 185` (eslesen: _TOŊRA_)
    > ...ğın sözü şöyle: Tokuz Oğuz halkı üzerine kağan tahta oturdu” kür(e)g s(a)bi (a)nt͡ (a)g tok(u)z og(u)z der. (Bu kağan) Çin’e General Ku’yu bod(u)n üze k(a)g(a)n ol(u)rtı tir göndermiş, Kıtay’a Tongra Eşim’i t(a)bg(a)çg(a)ru ku͡ unı s(e)ŋün(ü)g göndermiş. (Bunlarla) şöyle haber ıdm(i)ş kıt(a)ńg(a)ru toŋra (e)ş(i)m(i)g (söz) göndermiş: “Azıcık Türk halkı ıdm(i)ş s(a)b (a)nç͡ a ıdm(i)ş (a)zk(ı)ńa türk [bodun] G10...
  - `Olmez 2017, s. 19` (eslesen: _TOŊRA_)
    > ...a ise Ye-tie Kağan unvanı verildi. O da otağını Yen-mo dağına kurdu. > > T'u-küe hakanı Şe-kui tekrar güçlenince, bu ikisi kağan unvanını hiçe sayarak, gelip ona itaat arzettiler. Ötüken dağlarında yaşayan Hui-ho (Uygur), Pa-ye-ku (Bayırku), A-tie, T'ong-lo (Tongra), Pu-ku, Pe-si kabileleri doğudaki Şi-pi Kağan'a bağlandılar; Kin-şan (Altay)da yaşayan I-şi-po ise batıdaki Şe-hu (yabgu) Kağan'a bağlandı. İkinci çeng-kuan yılında (628) Şe-hu (yabgu) Kağan²⁰ öldü; hakanlığında kargaşa çıktı. Bunun üzerine I-şi-po'nun I-nan...


## TY1-G-2#4 - Tonyukuk Yazıtı, Güney 2. satir  (5 kelime)

- **transkripsiyon:** `SaB : aNÇA : aZKıYNA : TÜRK : BODuN`
- **kelime karsiliklari:** SÖZ : ANCA : AZICIK : TÜRK : BOYLARI
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _SaB aNÇA_)
    > ...rur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtari...
  - `Tekin 2003, s. 221` (eslesen: _SaB aNÇA_)
    > ...olorur ärtimiz. Bodun boguzi tok ärti. Yagımız tägrä oçok täg ärti, biz aş ⟨t⟩äg ärtimiz. Ança olorur ärkli Oguzduntan küräg kälti. (9) Küräg sabi antag: "Tokuz Oguz bodun üzä kagan olortı" tir. Tabgaçgaru Kunı, Säŋünüg, ıdmiş, Kıtañgaru Toŋra Äşimig ıdmiş. Sab ança ıdmiş: "Azkıña Türk [bodun] (10) yorıyur ärmiş. Kagani alp ärmiş, ayguçısi bilgä ärmiş. Ol eki kişi bar ärsär, sini, Tabgaçıg, ölürtäçi!" tir män. Öŋrä Kıtañıg ölürtäçi!" tir män, "Bini, Oguzug (11) ölürtäçi-k!" tir män. "Tabgaç birdin-yän täg, Kıtañ öŋdün-yä...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...


## TY1-G-3#1 - Tonyukuk Yazıtı, Güney 3. satir  (5 kelime)

- **transkripsiyon:** `YORIYoR : eRMiŞ : KaGaNI : aLP : eRMiŞ`
- **kelime karsiliklari:** YÜRÜYOR : İMİŞ : KAĞANI : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _eRMiŞ KaGaNI aLP eRMiŞ_)
    > ...k teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte,...
  - `Ata 2011, s. 139` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesi...
  - `Olmez 2017, s. 63` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...: **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi*...
  - `Ata 2011, s. 132` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...a kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üzgü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. [[s. 132]] -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesinde geçen sıfat-fiil e...


## TY1-G-3#2 - Tonyukuk Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `aYGUÇISI : BİLGE : eRMiŞ`
- **kelime karsiliklari:** AYGUÇISI : BİLGE : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar,...
  - `Ata 2011, s. 190` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...182 [s. 190] 5. Oguzduntan küreg kelti “Oguzdan….geldi” cümlesindeki boşluğu aşağıdaki sözcüklerden hangisi en uygun şekilde tamamlar? a. Kürek b. Kumandan c. Bey d. Kaçak e. Kardeş 6. Kaganı alp ermiş ayguçısı bilge ermiş cümlesindeki ayguçısı sözcüğündeki ekler aşağıdakilerin hangisinde sırasıyla ve doğru olarak verilmiştir? a. Sıfat-fiil eki, üçüncü tekil kişi iyelik eki b. Zarf-fiil eki, üçüncü tekil kişi iyelik eki c. Sıfat-fiil eki, belirtme durumu eki...
  - `Olmez 2017, s. 63` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...*uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyi...
  - `Ata 2011, s. 183` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...Doğu d. Doğu, Güney, Kuzey e. [[s. 182]] Güney, Doğu, Kuzey [s. 183] 5. Oguzduntan küreg kelti “Oguzdan….geldi” cümlesindeki boşluğu aşağıdaki sözcüklerden hangisi en uygun şekilde tamamlar? a. Kürek b. Kumandan c. Bey d. Kaçak e. Kardeş 6. Kaganı alp ermiş ayguçısı bilge ermiş cümlesindeki ayguçısı sözcüğündeki ekler aşağıdakilerin hangisinde sırasıyla ve doğru olarak verilmiştir? a. Sıfat-fiil eki, üçüncü tekil kişi iyelik eki b. Zarf-fiil eki, üçüncü tekil kişi iyelik eki c. Sıfat-fiil eki, belirtme durumu eki d. [[s. 183]] Zarf-...


## TY1-G-3#3 - Tonyukuk Yazıtı, Güney 3. satir  (17 kelime)

- **transkripsiyon:** `OL : iKİ : KİŞİ : BaR : eRSeR : SİNİ : TaBGaÇıG : ÖLÜRTeÇİ : TİR : MeN : ÖŊRE : KITaYNıG : ÖLüRTeÇİ : TİR : MeN : BİNİ : OGuZuG`
- **kelime karsiliklari:** O : İKİ : KİŞİ : VAR : İSE : SENİ [DE] : TABGAÇI [DA] : ÖLDÜRECEK : DER[İM] : BEN : ÖNDE : KITAYI : ÖLDÜRECEK : DER[İM] : BEN : BENİ : OĞUZU
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _KİŞİ BaR eRSeR SİNİ_)
    > ...üreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sab...
  - `Olmez 2017, s. 56` (eslesen: _KİŞİ BaR eRSeR SİNİ_)
    > ...Gelecek zamanın az sayıda örnekte, özellikle olumsuz fiil çekiminde *-çI* ile kurulduğu örnekler de vardır: *ötüken yış olorsar beŋgü ėl tuta olortaçı sen* "Ötüken topraklarında yaşarsan kurduğun ülke sonsuza değin ayakta kalacaktır." (KT G 8); *ol ėki kişi bar erser sini tavgaçıg ölörteçi tėr men* "O iki kişi (var olduğu sürece) olduğu sürece seni, (yani) Çinlileri öldürecektir, derim." (T 10); *ol yėrgerü barsar türük bodun ölteçi sen* "Oralara gidersen, Türk halkı mutlaka öleceksin." (KT G 8); *bo yolun yorısar yaramaçı...
  - `Ergin 1970, s. 37` (eslesen: _iKİ KİŞİ_)
    > ...geldi. Casusun sözü şöyle: Dokuz Oğuz milletinin üzerine kağan oturdu der. [[s. 37]] Çine doğru Ku'yu, generali göndermiş, Kıtaya doğru Tongra Esimi göndermiş, sözü şöyle göndermiş: Azıcık Türk milleti | yürüyormuş; kağanı cesur imiş; müşaviri bilici imiş; o iki kişi var olursa, seni, Çini öldürecek derim; doğuda Kıtayı öldürecek derim; beni; Oğuzu | da öldürecek derim; Çin, güney taraftan hücum et; Kıtay, doğu taraftan hücum et; ben kuzey taraftan hücum edeyim; Türk Sir milleti, yerinde hiç yürümesin; mümkünse hep yok ed...
  - `Tekin 2003, s. 199` (eslesen: _iKİ KİŞİ_)
    > ...9), vb. 7. Niteleyici bir sontakı öbeği: - *tänri täg... türük bilgä kagan* "Kutsal (harf. "tanrı gibi") Türk Bilgä Hakan" (KT G 1) - *umay täg / ögüm katun* "Umay gibi annem Hatun" (KT D 31), vb. 8. Öbeğin baş üyesi bir niteleme öbeği: - *ol / eki kişi* "o iki kişi" (T 10) - *bu / türük bodun* "bu Türk halkı" (T 54) - *bäglik / urı ogul* "bey olmaya layık erkek evlat" (KT D 7) - *eşilik / kız ogul* "hanım olmaya layık kız evlat" (KT D 7) - *kädimlig / torug at* "giyimli doru at" (KT D 33), vb. 9. Niteleyici bir özel ad...
  - `Ata 2011, s. 68` (eslesen: _iKİ KİŞİ_)
    > ...rak bu yazıtların Ak-Üs ve Kara-Üs yazıtları olabileceği tahmini yapılmıştır. Yenisey yazıtları, ilk olarak 1721 ve 1722 yıllarında Strahlenberg ve Messerschmidt tarafından Yenisey nehrinin yukarı mecrasında bulunur. Bilim adamı titizliğinde olan bu iki kişi, Yenisey vadisinde araştırma yaparken bir taşa rastlar. Strahlenberg, 1730’da kitabında iki yazıtın ve yazıtlar üzerindeki harflerin şekillerini verir. Kitabın yayımlandığı tarihten itibaren Avrupalı doğu bilimciler, Altayistler ve Türkologlar, bu bilinmey...
  - `Tekin 2003, s. 221` (eslesen: _KİŞİ BaR_)
    > ...ärkli Oguzduntan küräg kälti. (9) Küräg sabi antag: "Tokuz Oguz bodun üzä kagan olortı" tir. Tabgaçgaru Kunı, Säŋünüg, ıdmiş, Kıtañgaru Toŋra Äşimig ıdmiş. Sab ança ıdmiş: "Azkıña Türk [bodun] (10) yorıyur ärmiş. Kagani alp ärmiş, ayguçısi bilgä ärmiş. Ol eki kişi bar ärsär, sini, Tabgaçıg, ölürtäçi!" tir män. Öŋrä Kıtañıg ölürtäçi!" tir män, "Bini, Oguzug (11) ölürtäçi-k!" tir män. "Tabgaç birdin-yän täg, Kıtañ öŋdün-yän täg, bän yırdınta yan tägäyin, Türk Sir bodun yerintä idi yorımazun! Usar, idi yok kışalım!" (12) tir...


## TY1-G-4#1 - Tonyukuk Yazıtı, Güney 4. satir  (19 kelime)

- **transkripsiyon:** `ÖLüRTeÇİK : TİR : MeN : TaBGaÇ : BiRiDiN : YaN : TeG : KITaYN : ÖŊDiN : YaN : TeG : BeN : YIRıDıNTıYaN : TeGeYİN : TÜRK : SİR : BODuN : YiRİNTE : İDİ`
- **kelime karsiliklari:** ÖLDÜRECEK : DER[İM] : BEN : TABGAÇ : BERİDEN : YANA : DEĞSİN : KITAY : ÖNDEN : YANA : DEĞSİN : BEN : YIRIDAN YANA : DEĞEYİM : TÜRK : SİR : BOYLARI : YERİNDE : HİÇ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _ÖLüRTeÇİK TİR MeN TaBGaÇ_)
    > ...ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç,...
  - `Ata 2011, s. 128` (eslesen: _ÖLüRTeÇİK TİR MeN_)
    > ...r? a. üze b. kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kullanılmıştır? a. atıg ıka bayur ertimiz b. sekiz yegirmi yaşıma tegi c. barduk yirde edgüg ol erinç d. bini oguzug ölürteçik tir men e. begleri yeme ölti 121 [s. 129] Kendimizi Sınayalım Yanıt Anahtarı 1. e Yanıtınız doğru değilse, “İsim” başlıklı konuyu yeniden okuyunuz. 2. d Yanıtınız doğru değilse, “İsim” başlıklı konuyu yeniden okuyunuz. 3. a Y...
  - `Ata 2011, s. 121` (eslesen: _ÖLüRTeÇİK TİR MeN_)
    > ...sontakılardan hangisi getirilmelidir? a. üze b. [[s. 121]] kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kullanılmıştır? a. atıg ıka bayur ertimiz b. sekiz yegirmi yaşıma tegi c. barduk yirde edgüg ol erinç d. bini oguzug ölürteçik tir men e. begleri yeme ölti [s. 122] Kendimizi Sınayalım Yanıt Anahtarı 1. e Yanıtınız doğru değilse, “İsim” başlıklı konuyu yeniden okuyunuz. 2. d Yanıtınız doğru değilse, “İsim” başlıklı konuyu yeniden okuyunuz. 3. a Yanıtınız doğru değilse, “İsim” başlıklı konuy...
