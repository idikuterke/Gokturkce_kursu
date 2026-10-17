# Ceviri istek paketi 24 - Orhun cumlecikleri

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


## BK-D-36#2 - Bilge Kağan Yazıtı, Doğu 36. satir  (3 kelime)

- **transkripsiyon:** `KÜSİ : YOK : BOLDI`
- **kelime karsiliklari:** SANI : YOK : OLDU
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KÜSİ YOK_)
    > ....3. Deyimler Orhon yazıtlarının dili deyimler açısından da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu deyimlerden bazıları: adak kamşat- “ayağı burkulmak, ayağı dolaşmak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (g...
  - `Tekin 2003, s. 107` (eslesen: _KÜSİ YOK_)
    > ...ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye” (KT D 25); krş. *türük bodun ati küsi* “Türk halkının adı sanı” (KT D 25, BK D 20, 21) **258.** /+ın/. İlgi durumu eki şu örnekte de ikinci kişi iyelik ekinden sonra /+ın/ biçimindedir: *igidmiş bilgä...
  - `Ata 2011, s. 171` (eslesen: _KÜSİ YOK_)
    > ...TRANSKRİPSİYONLU METİN TÜRKİYE TÜRKÇESİNE AKTARMA D21 ög(ü)m k(a)tun(u)g köt(ü)r(ü)gme annem hatunu yücelten (yukarı t(e)ŋri il b(e)r(i)g[me t](e)ŋri türü͡k bod(u)n (a)tı küsi yok͡ bolm(a)zun kaldıran) Tanrı, vatan veren Tanrı tiy(i)n öz(ü)m(i)n ol t(e)ŋri k(a)g(a)n ol(u)rtdı [neŋ y]ıls(ı)g bod(u)nt͡ a üze Türk halkının adı sanı yok olmasın ol(u)rm(a)d(ı)m içre (a)şs(ı)z t(a)şra diye beni o Tanrı, kağan (olarak) tons(u)z...
  - `Ata 2011, s. 164` (eslesen: _KÜSİ YOK_)
    > ...e ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. [[s. 164]] BİLGE KAĞAN YAZITI (DOĞU YÜZÜ 21-25) TRANSKRİPSİYONLU METİN TÜRKİYE TÜRKÇESİNE AKTARMA D21 ög(ü)m k(a)tun(u)g köt(ü)r(ü)gme t(e)ŋri il b(e)r(i)g[me t](e)ŋri türü͡k bod(u)n (a)tı küsi yo͡k bolm(a)zun tiy(i)n öz(ü)m(i)n ol t(e)ŋri k(a)g(a)n ol(u)rtdı [neŋ y]ıls(ı)g bod(u)n͡ta üze ol(u)rm(a)d(ı)m içre (a)şs(ı)z t(a)şra tons(u)z y(a)b(ı)z y(a)bl(a)k bod(u)n͡ta [üze olurtum t]ig(i)n (e)ki ş(a)d in(i)m k͡öö[l tigin bir]le sözl(e)şd(i)m(i)z k(a)ŋ(ı)m...
  - `Tanyeri, s. 24` (eslesen: _KÜSİ YOK_)
    > ...söz varlığının ikilemeler açısından ne kadar zengin olduğunu göstermektedir. 6. Deyimler: Orhun Yazıtları'nın dili, deyimler açısından da oldukça zengindir. “Adak kamşat-” (gerçek anlamda ayağı burkmak, mecaz anlamda şaşırtıp yanlış hareket etmek), “atı küsi yok bol-” (adı sanı yok olmak), “ot sub kıl-” (ateş ile su gibi birbirine düşman etmek) ve “uça bar-” (uçup gitmek, ölmek) gibi deyimler, yazıtlardaki anlatımı güçlü ve etkili kılmak için kullanılmıştır. 7. Atasözleri: Orhun Yazıtları'nda Bilge Kağan, Türk u...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...


## BK-D-36#3 - Bilge Kağan Yazıtı, Doğu 36. satir  (4 kelime)

- **transkripsiyon:** `BU : YiRDE : MaŊA : KUR`
- **kelime karsiliklari:** BU : YERDE : BANA : KUR
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BU YiRDE_)
    > ...m; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, ö...
  - `Ata 2011, s. 151` (eslesen: _BU YiRDE_)
    > ...irke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle Bu yerde oturup Çin halkı ile G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti barış yaptım (ilişkileri düzelttim). k͡uut(a)y buŋs(u)z (a)nça birür...
  - `Ata 2011, s. 144` (eslesen: _BU YiRDE_)
    > ...k͡uurıg(a)ru y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi sül(e)d(i)m yır(ı)g(a)ru y(i)r b(a)y(ı)rk͡uu yiriŋe t(e)gi sül(e)d(i)m bun͡ça yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n [[s. 144]] yışda yig idi yo͡k (e)rm(i)ş il tuts(ı)k yir ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p t(a)bg(a)ç bod(u)n birle G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti k͡uut(a)y buŋs(u)z (a)nça birür t(a)bg(a)ç bod(u)n s(a)bı süçig (a)gısi yimşak (e)rm(i)ş süçig s(a)b(ı)n y(i)mş(ak) (a)gın (a)r(ı)p ır(a)k bod(u)n(u)g an͡ça y(a)gutir (e)rm(i)ş y(a)...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 161` (eslesen: _BU YiRDE_)
    > ...i burla)V,, didiler uzun boylu — burlu | 10 banı)Vya vaz pı4 DA [s. 161] vas vas Dl5 148 DEDE KORKUT KİTABI ellerin 1? yinine çekdi | gözükmesün diyü, oyuna girdi, ayıtdı: Mere *? delü ozan çal, ere varan kız menem, oynayayım didi. Beyrek aydur : Men bu yirden gideli delü olmuş 13 Delim ağça karlar yağmış dize yetmiş Han kızınuü ivinde ! kul halayık dükenmiş Maşraba almış şuya varmış Bileginden ? on parmağını şovuk almış Kızıl altun getürüü han kızına 9 tırnak yonuü “Ayıbluça han kızı ere varmak “ayıb olur d...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 417` (eslesen: _MaŊA KUR_)
    > ...Aleks:mder Durov( ?)allında ant içermiz. [[s. 417]] Uzun uzak barış yarış hulurmız, hiç yamanlık bulmastur, muhkem inangaysız. Alay bulsa kirektir kim: İki hazineni tilegimizçe yibermey hulmagaysız; hazineden başka kultkanı hem virgeysiz. Takı üç köbeni hem Osmanga kürkizip, yahşısını yibergeysiz. Uluğ çapkunımız Osman'nı revan·ı tacil yiberip hildirgeysiz. Uşlay bilgeysiz dip bitildi. Bakı üd'dua fi evvel-i (evail-i) mahı Cemadiyelevel, sene 1038. (1-10 Ücf,k 1629). [[s. 417]] Bemakam·ı Bahçesaray Mühür: Canihekgerey Han B...
  - `Ata 2011, s. 122` (eslesen: _YiRDE_)
    > ...e tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan …...


## BK-D-36#4 - Bilge Kağan Yazıtı, Doğu 36. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `BOLDI : MeN : ÖZüM : KaGaN : OLuRTUKuM : ÜÇüN : TÜRK : BODuNuG : --- Ü --- : KıLMaDıM`
- **kelime karsiliklari:** OLDU : BEN : ÖZÜM : KAĞAN : OTURDUĞUM : İÇİN : TÜRK : BOYLARINI : --- Ü --- : KILMADIM
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuM_)
    > ...5] 46 KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri y...
  - `Ata 2011, s. 172` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuM_)
    > ...e Türk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b(a)rm(ı)ş bod(u)n [yadagın dım. Öylece çabalayıp birleşik halkı yalaŋın] ölü yitü [yana] ateş (ile) su etmedim (birbirine düş-...
  - `Ata 2011, s. 165` (eslesen: _MeN ÖZüM KaGaN OLuRTUKuM_)
    > ...)m(i)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s. 165]] ilg(e)rü k͡ııt(a)ń t(a)t(a)bı bod(u)n t(a)pa bir(i)gerü t(a)bg(a)ç t(a)pa (e)ki y(e)g(i)rmi sül(e...


## BK-D-36#5 - Bilge Kağan Yazıtı, Doğu 36. satir  (4 kelime)

- **transkripsiyon:** `İLiG : TÖRÜG : YiGDİ : KaZGaNDıM`
- **kelime karsiliklari:** İLİ : TÖREYİ : İYİCE : KAZANDIM
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _İLiG TÖRÜG_)
    > ...ağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda kaltım. Ol (tJörüde üze eçim kağan olurtı. Olurupan Türük bodunuğ yiçe itdi, yiçe iğitti. Çığariyığ bay kıltı, azığ üküş kıltı. Eçim kağ...
  - `Ata 2011, s. 119` (eslesen: _İLiG TÖRÜG_)
    > ...a’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almış yadagın ‘yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı...
  - `Ata 2011, s. 112` (eslesen: _İLiG TÖRÜG_)
    > ...ice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini almış yadagın ‘yayan, yaya olarak’ gibi sözcükler tarz zarfı olarak kullanılmıştır. [[s. 112]] ança yagutır ermiş “öylece yaklaştırırmış” KT G5 edgüti eşid katıgdı tıŋla “iyice işit, sıkıca dinle” KT G2 ilig törüg yegdi kazgantım “devleti ve töreyi daha iyi kazandım” BK D36 bodun ölü yitü yadagın yalaŋın yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 [s. 113] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’...
  - `Tekin 2003, s. 230` (eslesen: _KaZGaNDıM_)
    > ...Begre (Malov E 11) 1. Tör Apa İçräki bän. Beş yegirmi yaşda alınmışım kunçuyuma, buŋ a, adrıldım a! 2. Üç ogluma adrıldım. Yıta! Bökmädim! Katıglangıl! 3. Beş yegirmi yaşımda Tabgaç kanga bardım. Är ärdämim üçün alpun (?), altun, kümüşüg ägri täbä, eldä kişi kazgandım. 4. Yeti böri ölürdüm. Barsıg, kökmäkig ölürmädim. 5. Yerimä, yıta, subuma adrıldım a! Buŋ a! Äsizim ä! Yıta! 6. Bodunuma, kinimä, kadaşıma adrıldım! Bökmädim! 7. Elimä kanıma bökmädim! Yaşım yeti yetmiş. Azdım. 8. Yatda tüŋürümä adrıldım. 9. Antlıg adaşıma,...
  - `Tekin 1998, s. 21` (eslesen: _TÖRÜG_)
    > ...rü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI...
  - `Tekin 2003, s. 106` (eslesen: _TÖRÜG_)
    > .../ biçiminde geçer. İki örnekte de, tekil ikinci kişi iyelik ekinden sonra /+n/ olarak bulunur. Bir adın ilgi durumu üçüncü kişi iyelik eki almış bir addan önce belirli iyelik niteleyicisi olarak görev yapar. **256.** /+(n)Iŋ/: - *yigän silig bäg+iŋ kädimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan...


## BK-D-36#6 - Bilge Kağan Yazıtı, Doğu 36. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `ID --- : TİRiLiP : Yi ---`
- **kelime karsiliklari:** --- : DİRİLİP : Yİ ---
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _TİRiLiP_)
    > ...dun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz. Akılsız hakanlar t...
  - `Tekin 2003, s. 150` (eslesen: _TİRiLiP_)
    > ...bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı, Dokuz Tatarlar ile birlikte toparlanıp (üzerimize) geldi" (BK D 34) *eçim kagan birlä ilgärü yaşıl ügüz şantuŋ yazıka tägi sülädimiz* "Amcam hakan ile doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik" (KT D 17) *bilgä tuñukuk buyla...
  - `Ata 2011, s. 52` (eslesen: _TİRiLiP_)
    > ...kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş ka...
  - `Ata 2011, s. 45` (eslesen: _TİRiLiP_)
    > ...etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46]...
  - `Roux, Altay Turklerinde Olum, s. 223` (eslesen: _TİRiLiP_)
    > ...ştir: “Yakut Türklerinden bazıları çıplak cesedi ormanda dört kazıkla taşınan tahta levha üzerine yerleştirip bir öküz ya da at derisiyle sarmaktaydı.”'” Bu açıklamada şu ilginç yorum yer almaktadır: ceset, ormanda, bir iskele üzerine değil de bir ağaca yerleştirilip, ağaç yerine doğrudan kazıklara dayandırılmaktadır. Bu, kuşkusuz çok eski bir özelliktir. [[s. 223]] Daha iyi bir gözlemci olan Gmelin, Yakutların değişik türdeki cenaze törenlerini yazmış ve şunları açıklamıştır: “Eskiden, Yakutlar ölülerini yakarlar ya da b...
  - `Roux, Eski Turk Mitolojisi, s. 16` (eslesen: _TİRiLiP_)
    > ...ştığımız —»Cehennem ise, belkide hiçbir zaman ölülerin bir ikamet yeri olmamıştır. Her ne kadar dünyevi hizmetler karşılığında ahirette bir ödül yoksa da, cezalar henüz bu dünyada ölüm şeklinde verildiğinden, kişinin ölüm şekli ve ritüellerin yerine getirilip getirilmemesi ölünün kaderini belirleyebilmektedir: —»Kan ve —»Kemikle ilgili her şey bu açıdan büyük önem taşımaktadır. Her ne kadar ölülerin asıl ikamet yeri gökyüzü ise de, mutlaka tarihsel açıdan daha eski başka ikamet yerleri de vardır; örneğin o soy...


## BK-D-37#1 - Bilge Kağan Yazıtı, Doğu 37. satir  (4 kelime)

- **transkripsiyon:** `aNDA : SÜŊüŞDüM : SÜSİN : SaNÇDıM`
- **kelime karsiliklari:** ANDA : SÜNGÜŞDÜM : SÜSİNİ : SANÇTIM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _SÜŊüŞDüM SÜSİN SaNÇDıM_)
    > ...rtim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin ile konuşup anlaştık: Babamızın (ve) (D 22) amcamızın kazanmış oldukları halkın adı sanı yok olmasın diye Türk halkı için gece uyumadım, gündüz oturmadım; kardeşim Kül T...
  - `Tekin 1998, s. 27` (eslesen: _SÜSİN SaNÇDıM_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sünğüşdümiz...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...
  - `Tekin 2003, s. 112` (eslesen: _SÜŊüŞDüM_)
    > ...efat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüM_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayıs...
  - `Olmez 2017, s. 45` (eslesen: _SÜŊüŞDüM_)
    > ...ld Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47...


## BK-D-37#2 - Bilge Kağan Yazıtı, Doğu 37. satir  (4 kelime)

- **transkripsiyon:** `İÇiKiGME : İÇiKDİ : BODuN : BOLDI`
- **kelime karsiliklari:** İÇİGEN : İÇİGDİ : BOY : OLDU
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _İÇiKiGME İÇiKDİ BODuN_)
    > .... 0 emsRN bilrye Tabgaçda atı küsi yok boltı. Bu yerde manga kul boltı. Men özüm kağan olurtukum üçün Türük bodunuğ Vkee kk esen Ji kılmadım. (İliğ tJörüğ yeğdi kazgantım. [[s. 39]] Idfuk ÜRETKE | tirilip yl ..accaca) (KD 37) fanta süüğlüşdüm, süsin sançdım. İçikiğme içikdi, bodun boltı; ölüğme ölti. Selefiğe kudı yorıpan Karağan kısılta, ebin barkın anta buzdum Frm kSA, | yışka ağdı. Uygur Elteber yüzçe erin ilglerlü ORHON YAZITLARI 5 (O yılın) ilkbaharında (D 32) Oğuz'lara doğru sefer ettim. Birinci ordu (sefere) çıkmış idi, ikinci...
  - `Tekin 2003, s. 168` (eslesen: _İÇiKDİ BODuN_)
    > ...ti* "Yedi yüz kişiyi sevkeden büyükleri Şad idi" (T 4-5) 2. Ad olarak: *ilgärü [bar-ıgma] bardıg kurgaru bar-ıgma bardıg* "Doğuya gidenleriniz (doğuya) gittiniz, batıya gidenleriniz (batıya) gittiniz" (BK D 19-20) [s. 168] # s. 168 — TALAT TEKİN *içik-igmä içikdi bodun boltı* "Bağımlı olmak isteyenler bağımlı oldu, halk oldu" (BK D 37) *bädiz yarat-ıgma* "süsleme sanatçıları (ressam ve heykeltraşlar)" (KT K 13) *bu bitig biti-gmä atısi yol(l)ug tigin* "Bu yazıları yazan (Prens Kül'ün) yeğeni Prens Yollug" (KT G 13) *udı-gma...
  - `Tekin 1998, s. 26` (eslesen: _İÇiKDİ_)
    > ...a, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp...
  - `Tekin 2003, s. 109` (eslesen: _İÇiKDİ_)
    > ...çün* "öyle olduğun için" (KT G 8, BK K 6) *eliŋ+in töröŋ+in käm artatı [udaçı ärti]* "devletini ve törelerini kim [s. 109] # s. 109 — ORHON TÜRKÇESİ GRAMERİ yıkabilecek idi?" (KT D 22) = *iliŋ+in törög+in käm artatı [udaçı ärt]i* (BK D 19) *[kanıŋ+in] kodup içikdiŋ* "Hanını bırakıp (başkalarına) bağımlı oldun" (T 3) *kürägüŋ+in üçün* "ele avuca sığmaz olduğun için" (KT D 23, BK D 19) *bäglik urı ogluŋ+ın kul kıltıg* "Bey olmaya layık erkek çocuklarını köle yaptın" (BK D 20) *türük [bodun ti]rip il tutsıkıŋ+ın bunta urt...
  - `Ata 2011, s. 145` (eslesen: _İÇiKDİ_)
    > ...bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış...
  - `Olmez 2017, s. 55` (eslesen: _İÇiKDİ_)
    > ...antung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam hakan vefat etti." (MÇ K...


## BK-D-37#3 - Bilge Kağan Yazıtı, Doğu 37. satir  (4 kelime)

- **transkripsiyon:** `ÖLüGME : ÖLTİ : SeLeŊE : KODI`
- **kelime karsiliklari:** ÖLEN : ÖLDÜ : SELENGEDEN : KOYI
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _ÖLüGME ÖLTİ_)
    > ...küsi yok boltı. Bu yerde manga kul boltı. Men özüm kağan olurtukum üçün Türük bodunuğ Vkee kk esen Ji kılmadım. (İliğ tJörüğ yeğdi kazgantım. [[s. 39]] Idfuk ÜRETKE | tirilip yl ..accaca) (KD 37) fanta süüğlüşdüm, süsin sançdım. İçikiğme içikdi, bodun boltı; ölüğme ölti. Selefiğe kudı yorıpan Karağan kısılta, ebin barkın anta buzdum Frm kSA, | yışka ağdı. Uygur Elteber yüzçe erin ilglerlü ORHON YAZITLARI 5 (O yılın) ilkbaharında (D 32) Oğuz'lara doğru sefer ettim. Birinci ordu (sefere) çıkmış idi, ikinci ordu yurtta idi. Ü...
  - `Ata 2011, s. 63` (eslesen: _SeLeŊE_)
    > ...III, S. 3, Türk Tarih Kurumu Basımevi, Ankara 1950, s. 373-379. Giraud, R., Göktürk İmparatorluğu: İlteriş, Kapgan ve Bilge’nin Hükümdarlıkları 680-734, Ötüken Yayınları, Ankara 1999. Gumilëv, L. N, Eski Türkler, (Çeviren: Ahsen Batur) Selenge Yayınları, İstanbul 2002. Sinor, Denis, “[Kök]Türk İmparatorluğunun Kuruluşu ve Yıkılışı, (Çeviren: Talat Tekin), Erken İç Asya Tarihi, (Derleyen: Denis Sinor), İletişim Yayınları, İstanbul 2000. Taşağıl, Ahmet, Gök-Türkler, T...
  - `Ata 2011, s. 56` (eslesen: _SeLeŊE_)
    > ...Dergisi, C. VIII, S. 3, Türk Tarih Kurumu Basımevi, Ankara 1950, s. 373-379. [[s. 56]] Giraud, R., Göktürk İmparatorluğu: İlteriş, Kapgan ve Bilge’nin Hükümdarlıkları 680-734, Ötüken Yayınları, Ankara 1999. Gumilëv, L. N, Eski Türkler, (Çeviren: Ahsen Batur) Selenge Yayınları, İstanbul 2002. Sinor, Denis, “[Kök]Türk İmparatorluğunun Kuruluşu ve Yıkılışı, (Çeviren: Talat Tekin), Erken İç Asya Tarihi, (Derleyen: Denis Sinor), İletişim Yayınları, İstanbul 2000. Taşağıl, Ahmet, Gök-Türkler, Türk Tarih Kurumu Yayınları, Ankar...
  - `Tasagil, s. 61` (eslesen: _SeLeŊE_)
    > ...e Sui hanedanı aleyhine gelişen bu tehlike ortadan kalktığı sıralarda, ülke içinde başka hadiseler de cereyan ediyordu. Tou-lan Kagani n kardeşi olup gittikçe kuwedenen Ch'in-yü Şad, bir tehlike durumuna gelmişti. [[s. 61]] Onun aleyhine kuvvetlenmesinden endişelenen Tou-lan, üzerine yürüyüp, yaptığı savaşta kardeşini öldürdü. Aynı yıl annesinin kardeşi Ju-tan Tegin'i gönderip Hoten'in yeşim taşlı asalarından sundu. Çin'e geldikten sonra bu tegine K'ang-kuo düklüğü ve de Shang-chu-kuo unvanı verildi. Bunu takip eden yıld...
  - `Ogel C1, s. 85` (eslesen: _SeLeŊE_)
    > ...... derler. Onlardan bazı kimseleri de getirdiler ve bu yazıların, onlara ait olduğu anlaşıldı. Uygurların türeyişi : Taşa oyulmuş olan bu yazıtta, şöyle deniyordu : “Kara-Korum çaylarından sayılan iki nehir vardı. Bunlardan birine Taoğla ve diğerlerine de Selenge adı verilirdi. Bu nehirler akarak, Kamlancu adlı bir yerde birleşirlerdi. [[s. 85]] Bu iki ırmağın arasında iki tane ağaç vardı. Bu ağaçlardan biri fusuk ve diğeri de farsların naj dedikleri ağaca benziyordu. Kışın bile bunların yaprakları, servi gibi dökülme...
  - `Ogel C2, s. 333` (eslesen: _SeLeŊE_)
    > ...n bir tercüme mi olduğunu, burada belirtemiyeceğiz. “IİIRMAKLAR' Irmaklar da, birer akarsudur. Ancak akarsuların, en büyüğüdür. Irmaklar da, büyüklüğüne göre, bir boyun veya bir kavmin, kendi suyudur. [[s. 333]] Nitekim Uygur Bayançur Kağan yazıtında, “subı Selenge ermiş'; yani “(onların) suyu, Selenge (ırmağı) imiş”, deniyordu”. Selen ge ırmağının kutluluğundan, kuşkumuz yoktur. Yine Göktürk Tonyukuk yazıtında Anı adını taşıyan bir ırmaktan söz açılırken, “dnı subug baralım', yani “Anı suyuna erişelim””, deniyordu'". A...


## BK-D-37#4 - Bilge Kağan Yazıtı, Doğu 37. satir  (7 kelime)

- **transkripsiyon:** `YORıPaN : KaRGaN : KISıLTA : eBİN : BaRKIN : aNDA : BOZDuM`
- **kelime karsiliklari:** YÜRÜYÜP : KARGAN : KISILDA : EVİNİ : BARKINI : [O] ANDA : BOZDUM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _KISıLTA eBİN BaRKIN_)
    > ...Men özüm kağan olurtukum üçün Türük bodunuğ Vkee kk esen Ji kılmadım. (İliğ tJörüğ yeğdi kazgantım. [[s. 39]] Idfuk ÜRETKE | tirilip yl ..accaca) (KD 37) fanta süüğlüşdüm, süsin sançdım. İçikiğme içikdi, bodun boltı; ölüğme ölti. Selefiğe kudı yorıpan Karağan kısılta, ebin barkın anta buzdum Frm kSA, | yışka ağdı. Uygur Elteber yüzçe erin ilglerlü ORHON YAZITLARI 5 (O yılın) ilkbaharında (D 32) Oğuz'lara doğru sefer ettim. Birinci ordu (sefere) çıkmış idi, ikinci ordu yurtta idi. Üç Oğuz ordusu baskın yaptı. [[s. 39]] “(Türklerin) p...
  - `Tekin 2003, s. 150` (eslesen: _YORıPaN_)
    > ...yışda süŋüşdüm* "Hakanları ile Songa dağında savaştım" (BK D 27) *[yı]ta äsiz är iki oglın birlä ölti* "Eyvah! Yazık! Adam iki oğlu ile birlikte öldü" (Uybat II 5) **351.** *kudı* "aşağı, (bir ırmağın) aşağı mecrası boyunca" < *\*kud-* "dökmek": *säläŋä kudı yorıpan...* "Selenga (ırmağı boyunca) aşağıya yürüyüp..." (BK D 37) *ol sub kudı bardımız* "O ırmak (boyunca) aşağı gittik" (T 27) *üküşi säläŋä kudı bardı* "Onların çoğu Selenga boyunca aşağı gitti" (MÇ D 4) [s. 151] # s. 151 — ORHON TÜRKÇESİ GRAMERİ **352.** *say...
  - `Tekin 2003, s. 36` (eslesen: _KISıLTA_)
    > ...damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga* (KÇ D 11) [s. 36] # s. 36 — TALAT TEKİN - /KıISLTA/ *kısılta* (BK D 37) - /KıIşN/ *kışın* (BK G 2) - /KıIz/ *kız* (T 48, vb.) - /KıIzL/ *kız(ı)l* (T 52), vb. ## /iç, çi/ Hece İşareti **30.** Yazıtlarda çok seyrek olarak kullanılan hece işaretlerinden biri de /iç, çi/ hece işaretidir. Bu işaret /iç/ ve /çi/ ses öbekle...
  - `Ergin 1970, s. 30` (eslesen: _KaRGaN_)
    > ...kul oldu. Ben kendim kağan oturduğum için Türk milletim .......... kılmadım, ili, töreyi çok iyi kazandım .......... toplanıp ........ orda savaştım. [[s. 30]] Askerini mızrakladım. Teslim olan teslim oldu, millet oldu; Ölen öldü. Selengadan aşağıya yürüyerek Kargan vadisinde evini, barkını orda bozdum. ........ ormana çıktı. Uygur valisi yüz kadar askerle doğuya kaçıp gitti. .......... | ......... Türk milleti aç idi. O at sürüsünü alıp besledim. Otuz dört yaşımda Oğuz kaçıp Çine girdi. Eseflenip ordu sevk ettim. Hiddet...
  - `Tekin 2003, s. 231` (eslesen: _KaRGaN_)
    > ...tım. ## Oznaçennoye (Malov E 25) 1. Kunçuyum, kadaşım adrıltım. Buŋ a! Açıg a! Törünüm! 2. Kü Çäküŋ Totok. Äsizim ä! Adrıltım. 3. Elim kanım, äsizim ä! Adrıldım. Altun keş adrıldım. 4. Beş kırk är ölürtüm... 5. El Inançı... 6. Kanıŋız yoklayur, kadaşlarıŋız karganur. Äsniŋiz! 7. Yagım ança ärmiş. Adrıldımız. ## Açura (Malov E 26) 1. İl ögäsi Inançu Bilgä İrig ölügin... 2. Oglı atı küç. Urı oglan tugdı. 3. ... İliŋiz üçün kazganu öz kuy, yıta äsiz! 4. ... är, äsiz! Atıŋız Or bäg, äsiz! 5. Yiti yegirmi ärdämi yaşında ä...
  - `Roux, Eski Din, s. 185` (eslesen: _KaRGaN_)
    > ...erin kralı, halkının Hiung-nu İmparatorluğuna sığınmaya mecbur olmasından kısa bir süre önce doğmuştu. [[s. 185]] Bakıcısı çocuğu kolla rının arasına aldı ve çöle kaçtı. Yiyecek aramak için bir süre uzaklaştı ve dönüşünde, bir kurdun çocuğu emzirdiğini ve bir karganın gagasında bir parça etle üzerinde süzülerek uçtuğunu gördü. Bu nedenlerle çocuğu kutsal kişi olarak kabul etti ve sonuçta Hiung-nulara götürmeye karar verdi. Şanyu onu sevdi ve büyüttü. Büyü düğü zaman babasına ait olan halkı ona verdi ve bir ordunun başına...


## BK-D-37#5 - Bilge Kağan Yazıtı, Doğu 37. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : YıŞKA : aGDI : UYGuR`
- **kelime karsiliklari:** --- : YIŞA : AĞDI : UYGUR
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _YıŞKA aGDI UYGuR_)
    > ...Vkee kk esen Ji kılmadım. (İliğ tJörüğ yeğdi kazgantım. [[s. 39]] Idfuk ÜRETKE | tirilip yl ..accaca) (KD 37) fanta süüğlüşdüm, süsin sançdım. İçikiğme içikdi, bodun boltı; ölüğme ölti. Selefiğe kudı yorıpan Karağan kısılta, ebin barkın anta buzdum Frm kSA, | yışka ağdı. Uygur Elteber yüzçe erin ilglerlü ORHON YAZITLARI 5 (O yılın) ilkbaharında (D 32) Oğuz'lara doğru sefer ettim. Birinci ordu (sefere) çıkmış idi, ikinci ordu yurtta idi. Üç Oğuz ordusu baskın yaptı. [[s. 39]] “(Türklerin) piyadesi bozuldu” diyerek (bizi) zaptetmek...
  - `Tekin 1998, s. 21` (eslesen: _YıŞKA_)
    > ...n Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; il...
  - `Tekin 2003, s. 50` (eslesen: _YıŞKA_)
    > .../ *bulmay(i)n* "bulmayıp" (T 2) < **bulmayın* - /tIDA/ *tida* "tutarak" (KT K 11) < **tīd-* "tutmak, engel olmak" - /tIŋLA/ *tiŋla* "dinle!" (KT G 2) ~ *tıŋla* (IB 58) - /TItIn/ *tıtın-* "yırtılmak" (IB 44) < **tītın-* - /yImşK/ *yimşak* "yumuşak" (KT G 5) - /yIşKA/ *yişka* (KT D 1, 37) < **yışka* - /yIşDA/ *yişda* (KT G 4, D 35) ~ *yışda* (T 31, 32) - /yIşG/ *yiş(i)g* (KT D 21, 35; BK D 27, 27) ~ *yış(i)g* (T 28, 35, 37) Öndamaksıllaşma sonucu uyumdan çıkma tekil 1. kişi gönüllülük eki almış sözcüklerde de görülür: *a...
  - `Ata 2011, s. 51` (eslesen: _YıŞKA_)
    > ...907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig...
  - `Olmez 2017, s. 103` (eslesen: _YıŞKA_)
    > ...iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönderip dört taraftaki halkları h...
  - `Tekin 1998, s. 6` (eslesen: _UYGuR_)
    > ...n en güçlü kanıtları da yazıtlardır, onların [s. 6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur! [[s. 6]]...


## BK-D-37#6 - Bilge Kağan Yazıtı, Doğu 37. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `iLTeBeR : YÜZÇE : eRiG : İLGeRÜ : TeZiP : BaRDI : ---`
- **kelime karsiliklari:** İLBAŞISI : YÜZCE : ERLE : İLERİ : TEZİP : VARDI : ---
- **kanit:**
  - `Ata 2011, s. 113` (eslesen: _İLGeRÜ TeZiP_)
    > ...n ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk et” yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +ArU, +rA a. +gArU: Yalın durumdaki isim gövdelerine ulanır: oguz+garu sü taşıkdımız KT K8 “Oğuzlara doğru sefere çıktık” ben eb+gerü tüşeyin T 30 “ben...
  - `Tekin 1998, s. 26` (eslesen: _TeZiP BaRDI_)
    > ...almasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bi...
  - `Ata 2011, s. 139` (eslesen: _TeZiP BaRDI_)
    > ...iş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birlikte kaçıp gitti” BK D41 yuyka kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 1...
  - `Ata 2011, s. 106` (eslesen: _İLGeRÜ TeZiP_)
    > ...“Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. [[s. 106]] Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk et” yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +ArU, +rA a. [[s. 106]] +gArU: Yalın durumdaki isim gövdelerine ulanır: oguz+garu sü taşıkdımız KT K8 “Oğuzlara doğru sefere çıktık” ben eb+gerü tüşeyin T 30 “ben karargâha...
  - `Ata 2011, s. 132` (eslesen: _TeZiP BaRDI_)
    > ...e kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. [[s. 132]] tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birlikte kaçıp gitti” BK D41 yuyka kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üzgü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. [[s. 132]] -gUçI sıfat-fiil...
  - `Tekin 1998, s. 27` (eslesen: _iLTeBeR_)
    > ...sabırsızca hücum etti. İki eri kovalayıp mızrakladı. Karluk'ları öldürdük, (tutsak) aldık. (O sırada) Az halkı (da) düşman oldu. (Onlarla) Kara göl'de savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı kır (atına (K 3) binip sabırsızca hücum etti. Az'ların İlteber'ini tuttu. Az halkı orada yok oldu. Amcam hakanın devleti sarsıldığında, halk (ve) hükümdar ikiye ayrıldığında, İzgil halkı ile savaştık. [[s. 27]] Kül Tigin Alp Şalçı kır (atjına binip (K 4) sabırsızca hücum etti. O at orada düştü. İzgil halkı öldü. Dokuz...


## BK-D-38#1 - Bilge Kağan Yazıtı, Doğu 38. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- Tİ : TÜRK : BODuN : AÇ : eRTİ`
- **kelime karsiliklari:** --- Tİ : TÜRK : BOYLARI : AÇ : İDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _BODuN AÇ eRTİ_)
    > ...a (nehri boyunca) aşağıya yürüyüp Karağan geçidinde, evini barkını orada bozdum ............... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edg...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Tekin 2003, s. 204` (eslesen: _BODuN AÇ_)
    > ...e ile uyuşur. Yüklem bağlayıcısız eşitleme tümleçleri de vardır. 1. Bağlayıcılı yüklem: a. Bağlayıcı bir yardımcı eylem: - *özüm / ... şad ärtim* "Ben ... (Tarduş halkı üzerinde) Şad idim" (KT D 17) - *biz / eki bıŋ ärtimiz* "Biz iki bin idik" (T 16) - *türük bodun / āç ärti* "Türk halkı aç idi" (BK D 38) - *ulugı / şad ärti* "büyükleri Şad idi" (T 5) - *bodun boguzi / tok ärti* "Halkın boğazı tok idi" (T 8) b. Bağlayıcı sona alınmış bir zamir: - *biz / az biz* "Biz azız" (O ön 7) - *bilgä tuñukuk / añıg ol* "Bilge Tunyukuk...


## BK-D-38#2 - Bilge Kağan Yazıtı, Doğu 38. satir  (4 kelime)

- **transkripsiyon:** `OL : YILKIG : aLıP : İGitTiM`
- **kelime karsiliklari:** O : YILKIYI : ALIP : YEDİRDİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _OL YILKIG aLıP İGitTiM_)
    > ...) aşağıya yürüyüp Karağan geçidinde, evini barkını orada bozdum ............... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyi...
  - `Ata 2011, s. 127` (eslesen: _OL YILKIG aLıP İGitTiM_)
    > ...zcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk b...
  - `Ata 2011, s. 120` (eslesen: _OL YILKIG aLıP İGitTiM_)
    > ...e görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. [[s. 120]] süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürk...


## BK-D-38#3 - Bilge Kağan Yazıtı, Doğu 38. satir  (8 kelime)

- **transkripsiyon:** `OTuZ : aRTUKI : TÖRT : YaŞıMA : OGuZ : TeZiP : TaBGaÇKA : KİRTİ`
- **kelime karsiliklari:** OTUZ : ARTI : DÖRT : YAŞIMDA : OĞUZ : TEZİP : TABGAÇA : GİRDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _OTuZ aRTUKI TÖRT YaŞıMA OGuZ TeZiP TaBGaÇKA KİRTİ_)
    > ...n geçidinde, evini barkını orada bozdum ............... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın bar...
  - `Tekin 1998, s. 38` (eslesen: _OTuZ aRTUKI_)
    > .... Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz men...
  - `Tekin 2003, s. 129` (eslesen: _OTuZ aRTUKI_)
    > ...iş* "67" (Begre b 27), *säkiz yetmiş* "68" (Hem.-Çır. 9), *tokuz säkiz on* "79" (Elegest I 5), vb. 3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Eleg...
  - `Ata 2011, s. 114` (eslesen: _OTuZ aRTUKI_)
    > ...unu anlarız ve kalıptaki onluk hane yerine 30’u koyarız. Böylece, T. Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer:...
  - `Tekin 2003, s. 156` (eslesen: _aRTUKI TÖRT_)
    > ...k: *azu turuk sub ärsär opayın, azu itmiş yaratmış tatıglıg aş ärsär aşayın* "Ya duru su olsun içip yutayım ya da yapılmış edilmiş tatlı yemek olsun yiyeyim" (Toyok 1 ön 1-8) **369.** *artukı* "fazlası, artı" ( < *artuk+ı* < *\*art-* "artmak, çoğalmak"): *ay artukı tört kün [ol]orup...* "otuz dört gün oturup..." (BK GB) *otuz artukı bir* "otuz bir" (BK G 9), vb. Bk. **Asıl Sayılar**. **370.** *takı* "ve, dahi" (< *\*tak-*): *y[ag]uk el ärsär, anç(a) takı erig yertä irsär, ança erig yertä bäŋgü taş tokıtdım* "(Burası) yakın...
  - `Tekin 2003, s. 205` (eslesen: _TaBGaÇKA KİRTİ_)
    > ...ıltı* "(Bunca sadık beyler) babam hakanı uzun uzun alkışladılar" (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* "Babam hakan Türk beylerini ve halkını uzun uzun alkışladı ve övdü" (BK G 15) 2. Durum ekli bir ad: - *oguz täzip tabgaçka kirti* "Oğuzlar kaçıp Çin'e girdiler" (BK D 38) - *kara költä süŋüşdümüz* "Kara gölde savaştık" (KT K 2) Bk. **Verme-Bulunma, Bulunma-çıkma, Yönelme, Eşitlik, Araç ve Birliktelik durumları**. 3. Bir zaman birimini gösteren ad: - *türük bodun üçün tün udımadım* "T...


## BK-D-38#4 - Bilge Kağan Yazıtı, Doğu 38. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÖKüNüP : SÜLeDiM : SUKuN : --- : OGLIN : YOTuZIN : aNDA : aLTıM`
- **kelime karsiliklari:** ÖKÜNÜP : SÜLEDİM : SOYUNU : --- : OĞLUNU : YOTUZUNU : [O] ANDA : ALDIM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _ÖKüNüP SÜLeDiM SUKuN_)
    > ....... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....)...
  - `Tekin 1998, s. 11` (eslesen: _SÜLeDiM_)
    > ...ı kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 112` (eslesen: _SÜLeDiM_)
    > ...l Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Olmez 2017, s. 21` (eslesen: _SÜLeDiM_)
    > ...Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Tekin 1998, s. 26` (eslesen: _ÖKüNüP_)
    > ...) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürt...
  - `Ata 2011, s. 105` (eslesen: _SÜLeDiM_)
    > ...mış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...


## BK-D-38#5 - Bilge Kağan Yazıtı, Doğu 38. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `iKİ : iLTeBeRLiG : BODuN : ---`
- **kelime karsiliklari:** İKİ : İLTEBERLİ : BOYLAR : ---
- **kanit:**
  - `Tekin 1998, s. 5` (eslesen: _BODuN_)
    > ...zmüştür. Bununla birlikte Ergin'in benim bütün okuyuş ve yorumlarımı kabul ettiği söylenemez. [[s. 5]] Sayın Ergin'in kabul etmediği yeni okuyuş ve yorumlardan biri ve belki de en önemlisi öteden beri budun okunagelen sözcüğü benim Giraud (1961) gibi /o/ ile bodun okumam ve bunu “tribes, people”, yani “boylar, halk” olarak çevirmemdir. Ergin'in bu sözcüğü ısrarla /u/ ile budun biçiminde okuyup her yerde “millet” diye çevirmesi bence büyük bir yanlıştır. [[s. 5]] Çünkü bu sözcük açık olarak “boy, kabile” anlamındaki Esk...
  - `Tekin 2003, s. 73` (eslesen: _BODuN_)
    > ...ga* "ağıma" (Hem.-Çır. 9) - *artımga* "ardıma" (Hem.-Çır. 10), vb.; fakat *yaşımka* "yaşımda" (BK D 15), *ataçımka* "babacığıma" (Uybat III 14), *oglumka* "oğullarıma" (Barık III 4), vb. 6. /nk/ > /ng/: - *kagangı* "hakanınki" (Tar. B 5) < **kagankı*; fakat *bodunkı* "boylarınki" (Tar. B 5), *biryäki* "güneydeki", *kuryakı* "batıdaki", *yıryakı* "kuzeydeki", *öŋräki* "doğudaki" (T 17), *bärüki* "berideki" (T 46), vb. 7. /lk/ > /lg/: - *çölgi* "bozkırdaki" (T 23) < **çölki*; fakat *tabgaçgı* (KT D 7) ve *[tab]gaçgı* "Ç...
  - `Ata 2011, s. 47` (eslesen: _BODuN_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış....
  - `Olmez 2017, s. 20` (eslesen: _BODuN_)
    > ...anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Ata 2011, s. 40` (eslesen: _BODuN_)
    > ...üzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratıl...
  - `Roux, Altay Turklerinde Olum, s. 247` (eslesen: _BODuN_)
    > ...manın ayrıca Beltirlerde, Gotlarda, Ostiaklarda MO KATANOV, Über die Best., s. 290 ve 275. Hİ JORDANES, XLİX. MR HARVA, s. 291. 1 RUDENKO, Kul'tura, s. 159. [s. 247] CENAZE TÖRENLERİ bir kalıntı olarak bulunduğu görülmektedir." Orhun Yazıtları'nda, bunça bodun saçin ... |bliçdi, tüm bu insanlar saçlarını kestiler! şeklinde bir cümleyi okumak mümkündür. Orhun Yazıtları, saçların bu şekilde kesilip atılması işleminin, ölüm sırasında değil de cenaze töreninin düzenlendiği sırada yapılmış olması gerektiğini göstermekte...


## BK-D-39#1 - Bilge Kağan Yazıtı, Doğu 39. satir  (5 kelime)

- **transkripsiyon:** `TaTaBI : BODuN : TaBGaÇ : KaGaNKA : KÖRTİ`
- **kelime karsiliklari:** TATABI : BOYLARI : TABGAÇ : KAĞANINA : GÖRDÜ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _BODuN TaBGaÇ KaGaNKA KÖRTİ_)
    > ...Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun ta...
  - `Tekin 1998, s. 25` (eslesen: _TaTaBI BODuN_)
    > ...in birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elli...
  - `Tekin 2003, s. 151` (eslesen: _TaTaBI BODuN_)
    > ...r: *äligçä är tutdumuz ol ok tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa ulug sü eki yegirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzla...
  - `Tekin 2003, s. 221` (eslesen: _BODuN TaBGaÇ_)
    > ...miş. Bunça işig küçüg birtök(k)ärü sakınmatı "Türük bodunug ölüräyin, urugsıratayin!" tir ärmiş. [s. 221] # s. 221 — TALAT TEKİN (basılı sayfa numarası 222) # Tunyukuk Yazıtı (725 ?) ## I. Batı Yüzü (1) Bilgä Tuñukuk, bän özüm, Tabgaç iliŋä kılıntım. Türk bodun Tabgaçka körür ärti. (2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bod...
  - `Tekin 1998, s. 22` (eslesen: _TaBGaÇ KaGaNKA_)
    > ...ün, beğli bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 175` (eslesen: _TaBGaÇ KaGaNKA_)
    > ...ne) bağımlı kılmışlar" (KT D 2) *süŋüglüg kantan käl-ipän sürä eltdi* "Mızraklı (düşman) nereden gelip (seni yerinden yurdundan) sürdü?" (KT D 23) *süŋüg batımi karıg sök-üpän...* "Mızrak boyu karları sökerek..." BK D 26) *tabgaçgı bäglär tabgaç ātin tut-upan tabgaç kaganka körmiş* "Çinlilerin (hizmetine giren Türk) beyleri Çin unvanları alarak Çin imparatoruna tabi olmuşlar" (KT D 7-8) *säläŋä kudı yorı-pan...* "Selenga ırmağı boyunca aşağı yürüyüp..." (BK D 37) *kara kanka bar-ıpan yalabaç bar-ıpan kälmädiŋiz bägimiz* "Kara Ha...


## BK-D-39#2 - Bilge Kağan Yazıtı, Doğu 39. satir  (8 kelime)

- **transkripsiyon:** `YaLaBaÇI : eDGÜ : SaBI : ÖTüGİ : KeLMeZ : TİYiN : YaYıN : SÜLeDiM`
- **kelime karsiliklari:** YALABAÇI : İYİ : SÖZÜ : ÖTÜĞÜ : GELMEZ : DİYE : YAZIN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _YaLaBaÇI eDGÜ SaBI ÖTüGİ KeLMeZ TİYiN YaYıN SÜLeDiM_)
    > ...odun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise te...
  - `Ata 2011, s. 119` (eslesen: _YaLaBaÇI eDGÜ SaBI ÖTüGİ KeLMeZ TİYiN YaYıN SÜLeDiM_)
    > ...ım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9...
  - `Ata 2011, s. 112` (eslesen: _YaLaBaÇI eDGÜ SaBI ÖTüGİ KeLMeZ TİYiN YaYıN SÜLeDiM_)
    > ...ılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Or...


## BK-D-39#3 - Bilge Kağan Yazıtı, Doğu 39. satir  (3 kelime)

- **transkripsiyon:** `BONuDuG : aNDA : BOZDuM`
- **kelime karsiliklari:** BOYLARINI : [O] ANDA : BOZDUM
- **kanit:**
  - `Tekin 1998, s. 39` (eslesen: _BOZDuM_)
    > ...rkek kardeşimle beraber bu kadar önderlik edip çalışmasa ve muvaffak olmasa idim, Türk halkı ölecek idi, yok olacak idi. Türk beyleri (ve) halkı şöylece düşünün (ve) şöylece bilin: Oğuz. halki se. rer senn göndermiyeyim diye sefer ettim, (D 34) evini barkını bozdum. Oğuz halkı, Dokuz Tatar'larla birlikte toparlanıp geldi. Ağu'da iki büyük savaş verdim. Askerlerini bozdum, ülkelerini orada zaptettim. [[s. 39]] Öylece kazanıp ..........ıu (Tanrı) buyurduğu için, ben Otuz ÜÇ YAŞIMCA serisine ARAR YOK İdi ss kişi (D 35) be...
  - `Ergin 1970, s. 27` (eslesen: _BOZDuM_)
    > ...Fakir milleti zengin kıldım. | Az milleti çok kıldım. Değerli illiden, değerli kağanlıdan daha iyi kıldım. Dört taraftaki milleti hep tâbi kıldım, düşmansız kıldım. Hep bana itaat etti. [[s. 27]] On yedi yaşımda Tanguta doğru ordu sevk ettim. Tangut milletini bozdum. Oğlunu, karısını, at sürüsünü, servetini orda aldım. On sekiz yaşımda Altı Çub Soğdaka doğru ordu sevk ettim. Milleti orda bozdum. Çinli Ong vali, elli bin asker geldi. Iduk Başta M U H A R R E M E R G İ N 1. elbisesiz, çıplak [s. 28] O R H U N Â B İ D...


## BK-D-39#4 - Bilge Kağan Yazıtı, Doğu 39. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `YILKISIN : --- : SÜSİ : TİRiLiP : KeLTİ`
- **kelime karsiliklari:** YILKISINI : --- : SÜSİ : DİRİLİP : GELDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _SÜSİ TİRiLiP KeLTİ_)
    > ........ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen...
  - `Tekin 1998, s. 39` (eslesen: _TİRiLiP KeLTİ_)
    > ...)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteçi erti, yok boltaçı erti. (Türük) beğler |bodun ançla sakınıng, ança bilin: Oğuz bo İdÜN kasa |d ıdmayın tiyin sülledim). (D 34) Ebin barkın buzdum. Olğluz bodun, Tokuz Tatar birle tirilip kelti. Ağuda eki uluğ sünğüş sünğüşdüm. Süsin bulz|)dum, elin anta altım. Ança kazganıp |. Teüğri|) yarlıkaduk üçün, men otuz artukı üç (yaşıma s.s le ylok erti. Ödsiğ ötülüğ ki (şil (D 35) iğidmiş alfp kağanınğa ylanığıltı. [[s. 39]] Üze Tengri, ıduk Yer Sub (eç...
  - `Tekin 1998, s. 37` (eslesen: _YILKISIN_)
    > ...uğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyi...
  - `Tekin 2003, s. 59` (eslesen: _YILKISIN_)
    > ...D 35 vb.) - *kızın* "kızlarını" (BK K 10 vb.) < **kız-in* - *sabın* "sözlerini" (T 22, 58 < *sab-in* (KT G 9, BK K 14) - *taş(ı)n* "dışını" (T 13) < *taş-in* (KT G 12, BK K 14) - *usın* "uykusunu" (T 19) < **ū-sin* - *y[ıl]k[ıs]ın* "at sürülerini" (BK GB) < *yılkısin* (BK D 24) Uygur yazıtlarında da art ünlülü sözcüklere eklenen 3. kişi iyelik eki genellikle ünlü uyumuna girer: - *atın* "adlarını" (Tar. K 5) < *āt-in* - *bar(ı)mın* "malını mülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *ba...
  - `Ata 2011, s. 172` (eslesen: _YILKISIN_)
    > ...iyi yaptım. Dört taraftaki halkı hep kı[l͡t](ı)m ko͡ op m(a)ŋa körti y(e)ti y(e)g(i)rmi y(a)ş(ı)ma t(a)ŋut t(a)pa kendime tabî ettim, (halkımı) sül(e)d(i)m t(a)ŋut bod(u)n(u)g düşmansız hâle getirdim, (bu buzd(u)m og(u)lin yu[tuz]in yılkısin halkların) hepsi bana bağımlı oldu. b(a)r(ı)min (a)nt͡ a (a)lt(ı)m s(e)k(i)z On yedi yaşımda Tangut tarafına y(e)g(i)rmi y(a)ş(ı)ma (a)ltı çub sogdak doğru asker sevk ettim, Tangut hal- kını bozg...
  - `Tekin 1998, s. 22` (eslesen: _TİRiLiP_)
    > ...dun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış şüphesiz. Akılsız hakanlar t...


## BK-D-39#5 - Bilge Kağan Yazıtı, Doğu 39. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `KaDıRKaN : YIŞDA : KON ---`
- **kelime karsiliklari:** KADIRKAN : YIŞDA : KON ---
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KaDıRKaN_)
    > ...apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış eri...
  - `Ergin 1970, s. 14` (eslesen: _KaDıRKaN_)
    > ...dım Bumin Kağan, İstemi Kağan oturmuş. Oturarak Türk milletinin ilini töresini tutu vermiş, düzenleyi vermiş. | Dört taraf hep düşman imiş. Ordu sevk ederek dört taraftaki milleti hep almış, hep tâbi kılmış. Başlıya baş eğdirmiş, dizliye diz çöktürmüş. Doğuda Kadırkan ormanına kadar, batıda Demir Kapıya kadar kondurmuş. [[s. 14]] İkisi arasında pek teşkilâtsız Gök Türk öylece oturuyormuş. Bilgili kağan imiş, cesur kağan imiş. Buyruku yine bilgili imiş tabiî, cesur imiş tabiî. Beyleri de milleti de doğru imiş. Onun için ili...
  - `Tekin 2003, s. 82` (eslesen: _KaDıRKaN_)
    > ...geri" (KÇ D 9) < **ār*; krş. *ārt* "dağ yolu, dağ beli" (IB 10), Mo. *aru* "geri, arka". **163.** {+kAn}. Yalnız unvanlarda ve özel adlarda: - *täŋrikän* "tanrısal, tanrı gibi (kağan unvanı)" (O 5, vb.) - *tarkan* "yüksek bir rütbe" (KT B 2, vb.) < **tar* - *kadırkan* "Kingan dağları" (KT D 2, vb.) < **kadır* "sert, sarp"; krş. Uyg., MK *kadır* ay."). **164.** {+kI}, {+gI}. Aitlik, ilişkinlik sıfatları türetir. - *içräki* (BK K 14, vb.) "içerdeki, saraya mensup" < *içrä* "içinde" ~ *içrägi*, (Tuba III 1) *öŋräki* "öndeki...
  - `Ata 2011, s. 51` (eslesen: _KaDıRKaN_)
    > ...anı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç...
  - `Olmez 2017, s. 66` (eslesen: _KaDıRKaN_)
    > ...rı türetir: *edgü* "iyi; yarar, kazanç" (BK K 5, vb.) < *\*ed* "mal, değerli şey"; krş. Uyg. *edsiz* "faydasız", *edlig* "değerli, kıymetli". **{+kAn}:** Yalnız unvanlarda ve özel adlarda görülür: *teŋriken* "tanrısal, tanrı gibi (kağan unvanı)" (O 5, vb.); *kadırkan* "Kingan dağları" (KT D 2, vb.) < *\*kadır* "sert, sarp"; krş. Uyg., MK *kadır* ay."). **{+kİñA}:** Küçültme isimleri türetir. Yalnız şu sözcükte görülür: *azkına* "azıcık, (sayıca) çok az" (KT D 34, T 9) < *az* "az"; Şu tamamlanmış şekilde de var olduğu söy...
  - `Tekin 1998, s. 19` (eslesen: _YIŞDA_)
    > ...İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan...


## BK-D-40#1 - Bilge Kağan Yazıtı, Doğu 40. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- GaKıŊA : YiRiŊeRÜ : SUBIŊaRU : KONTI`
- **kelime karsiliklari:** --- GAKINGA : YERİNE : SUYUNA : KONDU
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _SUBIŊaRU KONTI_)
    > ...| Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğ...
  - `Tekin 2003, s. 115` (eslesen: _KONTI_)
    > ...**. 2. {+ŋArU}. Daha eski bir {-n+gArU} biçiminden gelişmiş olan bu biçim 3. kişi iyelik eki almış adlara eklenir: *birgärü kün ortosı+ŋaru, yırgaru tün ortosı+ŋaru* "Güneyde gün ortasına, kuzeyde gece ortasına kadar..." (KT G 2, BK K 2) *yeri+ŋärü subı+ŋaru kontı* "Kendi topraklarına ve sularına kondu" (BK D 40) 3. {+ArU}. Bu ek tekil 1. kişi iyelik eki almış sözcüklere eklenir: *basmıl yagıdıp äbim+ärü bardı* "Basmıllar bize düşman olup benim yurduma doğru gittiler" (MÇ 4) 4. {+rA}. Bu ek şu örneklerde bulunur: *ta...
  - `Ata 2011, s. 93` (eslesen: _KONTI_)
    > ...kul oldu” Açıklama: oglin: Sözün sonunda ince ünlülü seslerle kullanılan n2 yer almaktadır. Yön gösterme eki: ol yer+gerü barsar türük bodun ölteçi sen KT G8 “o yere doğru gidersen Türk halkı öleceksin” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “(kendi) toprağına suyuna kondu” Belirsiz geçmiş zaman eki: kişi oglı kop ölgeli törü-miş KT K10 “insanoğlu hep ölümlü yaratılmış” tabgaç kaganka kör-miş KT D8 “Çin hakanına tâbi olmuşlar” 3. tekil ve çoğul...
  - `Olmez 2017, s. 53` (eslesen: _KONTI_)
    > ...rumu eki gibidir, içerisinde bir zamir *n*'si yer alır ve üçüncü kişi iyelik eki almış kelimelerden sonra görülür: *kün ortosıŋaru* "güneşin / aydınlığın ortasına kadar" (KT G 2) *tün ortosıŋaru* "gece ortasına kadar" (KT G 2, BK K 2) *yėriŋerü suvıŋaru kontı* "topraklarına yerleşti" (BK D 40) *+ArU* şekli birinci kişi iyelik ekinden sonra ve sadece bir örnekte görülür: *basmıl yagıdıp evimerü bardı* "Basmıllar bize düşman olup benim yurduma doğru gittiler" (MÇ G 4) *+rA*. Bu ek şu örneklerde bulunur: *taşra...
  - `Ata 2011, s. 86` (eslesen: _KONTI_)
    > ...lâyık erkek evladı ile kul oldu” Açıklama: oglin: Sözün sonunda ince ünlülü seslerle kullanılan n2 yer almaktadır. [[s. 86]] Yön gösterme eki: ol yer+gerü barsar türük bodun ölteçi sen KT G8 “o yere doğru gidersen Türk halkı öleceksin” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “(kendi) toprağına suyuna kondu” Belirsiz geçmiş zaman eki: kişi oglı kop ölgeli törü-miş KT K10 “insanoğlu hep ölümlü yaratılmış” tabgaç kaganka kör-miş KT D8 “Çin hakanına tâbi olmuşlar” 3. [[s. 86]] tekil ve çoğul belirli geçmiş zaman eki: türük b...
  - `Ogel C2, s. 272` (eslesen: _SUBIŊaRU_)
    > ...emli idiler. Türklerde yerler ile sulara, ““Türk milletinin koruyucusu” olarak kişiHik ve ilâhi güç veriliyor: Bu kitabımızda Türklerin bu anlayışı üzerinde çok durduk. [[s. 272]] Ancak Göktürk yazıtlarında, “Türk milleti, kendi yerine (yeringerü) ve suyuna (subıngaru) kondu ” sözü', vat an düşüncesinin en yüce bir gelişmesidir. Konuyu uzatmıyacağız. Gök ile yer, karıştığı için: Türk milleti ile devletinin düzeni, bozuluyor. “Kök yer bulgakın üçün” sözü*, millet ve devlet düzeninin, “gök ile yer *Radlof, a. eser, s. 138....


## BK-D-40#2 - Bilge Kağan Yazıtı, Doğu 40. satir  (9 kelime)

- **transkripsiyon:** `BİRiYE : KaRLuK : BODuN : TaPA : SÜLE : TİP : TUDuN : YaMTaRıG : ITıM`
- **kelime karsiliklari:** BERİDE : KARLUK : BOYLARI : TARAFINA : SÜLE : DEYİP : TUDUN : YAMTARI : İTTİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _KaRLuK BODuN TaPA SÜLE_)
    > ...kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağan...
  - `Tekin 2003, s. 214` (eslesen: _KaRLuK BODuN TaPA_)
    > ...*tip* ve *üçün* gibi yan cümle bağlaçları ile temel cümleye eklenir: ## Aktarma Söz ve *tip, teyin / tiyin* **489.** Aktarma söz temel cümlenin önüne alınır ve *tip* "deyip" ve *teyin / tiyin* "diye, diyerek" bağlaçları ile temel cümleye bağlanır: 1. *biryä karluk bodun tapa sülä tip tudun yamtarıg ı(t)tım* "'Güneyde Karluk halkına doğru sefer et!' deyip Tudun Yamtar'ı gönderdim" (BK D 40) - *täŋri bilgä kaganta adrılmalım azmalım teyin ança ötlädim* "Kutsal Bilge Hakan'dan ayrılmayalım!" diye, öylece öğüt verdim" (O sağ 3), vb....
  - `Tekin 1998, s. 27` (eslesen: _KaRLuK BODuN_)
    > ...lkını orada öldürmüş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdümiz. Kül Tigin bir kı...
  - `Tekin 2003, s. 168` (eslesen: _KaRLuK BODuN_)
    > ...şturur: *er-ür bar-ur* (< *er-ür bar-ır*). Bu söz öbeğinin sonuna "olan" anlamındaki *ärkli* (< *\*är-igli*) sıfatı da getirilerek "(serbestçe) gelir gider, (serbestçe) hareket eder" anlamında kalıplaşmış bir söz öbeği oluşturulur: *kül tigin yiti otuz yaşıŋa karluk bodun er-ür bar-ur ärkli yagı boltı* "Prens Kül yirmi yedi yaşında (iken) Karluk halkı (serbestçe) gelir gider (hareket eder) bir düşman oldu" (KT K 1) *otuz artukı bir yaşıma karluk bodun buŋsız [er]-ür bar-ur ärkli yagı boltı* "Otuz bir yaşımda Karluk halkı serbe...
  - `Olmez 2017, s. 64` (eslesen: _KaRLuK BODuN_)
    > .... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada...
  - `Tekin 1998, s. 25` (eslesen: _BODuN TaPA_)
    > ...z olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az b...


## BK-D-40#3 - Bilge Kağan Yazıtı, Doğu 40. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `BaRDI : --- : KaRLuK : iLTeBeR : YoK : BOLMıŞ`
- **kelime karsiliklari:** VARDI : --- : KARLUK : İLTEBERİ : YOK : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _KaRLuK iLTeBeR YoK BOLMıŞ_)
    > ...anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]]...
  - `Tekin 2003, s. 105` (eslesen: _YoK BOLMıŞ_)
    > ...durumu ve birliktelik durumudur. ##### Yalın Durum **254.** Yalın durum eksizdir, gövde ile bir ve aynıdır. Bir adın yalın durumu şu görevlerde bulunur: 1. Bir cümleciğin ya da cümlenin öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, B...
  - `Ata 2011, s. 145` (eslesen: _YoK BOLMıŞ_)
    > ...dup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. bilig bilmez kişi...
  - `Olmez 2017, s. 57` (eslesen: _YoK BOLMıŞ_)
    > ...*idi oksuz kök türük (ėti) ança olorur ermiş* "dağınık halde öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp...
  - `Ata 2011, s. 138` (eslesen: _YoK BOLMıŞ_)
    > ...[[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp y...
  - `Tekin 1998, s. 27` (eslesen: _iLTeBeR_)
    > ...sabırsızca hücum etti. İki eri kovalayıp mızrakladı. Karluk'ları öldürdük, (tutsak) aldık. (O sırada) Az halkı (da) düşman oldu. (Onlarla) Kara göl'de savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı kır (atına (K 3) binip sabırsızca hücum etti. Az'ların İlteber'ini tuttu. Az halkı orada yok oldu. Amcam hakanın devleti sarsıldığında, halk (ve) hükümdar ikiye ayrıldığında, İzgil halkı ile savaştık. [[s. 27]] Kül Tigin Alp Şalçı kır (atjına binip (K 4) sabırsızca hücum etti. O at orada düştü. İzgil halkı öldü. Dokuz...


## BK-D-40#4 - Bilge Kağan Yazıtı, Doğu 40. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `İNiSİ : BİR : KORGaNKA : ---`
- **kelime karsiliklari:** İNİSİ : BİR : KURGANA : ---
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _İNiSİ BİR_)
    > ...ın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığ...
  - `Tekin 1998, s. 10` (eslesen: _İNiSİ_)
    > ...gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyle...
  - `Tekin 2003, s. 102` (eslesen: _İNiSİ_)
    > ...arkat* "tarkanlar" (KT G 1) < *tarkan* - *tigit* "prensler" (Tar. K 2) < *tigin* - *säŋüt* "generaller" (Tar. K 2, G 4) < *säŋün* **245.** /+s/. Belki yalnız *oglıtı kagan bolmiş ärinç* "oğulları hakan olmuş şüphesiz" cümlesine koşut olarak kullanılmış olan *inisi kagan bolmiş ärinç* cümlesinde geçen şu örnekte: - *in(i)s+i* "erkek kardeşleri" (KT D 4) < *ini* #### İyelik **246.** Orhon Türkçesinde adlar kişi için de çekimlenir, başka bir deyişle, adlar sahip olan kişiyi belirten iyelik ekleri alırlar. İyelik ekleri...
  - `Ata 2011, s. 51` (eslesen: _İNiSİ_)
    > ...oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri...
  - `Olmez 2017, s. 108` (eslesen: _İNiSİ_)
    > ...(..........) var] *D 5. yoqçı : sıgıtçı : öyre : kün : tugsıkdaki : bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu yerlerden Kore halkı, Zhoulular, Tibet, Avar, Bizans, Kırgız, Üç Kurıkan, Otuz Tatar, Kıtany, Tatavı bunca halk yasçı, ağıtçı olarak gelmiş,...
  - `Roux, Eski Din, s. 73` (eslesen: _İNiSİ_)
    > ...40). Burada, günümüzdeki Şaman seanslarının özünü oluşturan axis mundi [dünya ekseni], dağ veya kuyunun kullanıldığı ve bunun Türk-Moğol kozmografısi çerçevesi içinde olduğu dikkati çekmektedir. [[s. 73]] Ayrıca bilinmeyen bir kökenden alınmadıkça, "cehenneme inişin" yani yeraltı evrensel bölge kavramının, Türkler ve Moğollar tarafından ikinci binyılın başlarında benimsenmesinin hiç de imkansız olmadığı anlaşılmaktadır. MOGOLLARIN ORTAÇAG ŞAMANİZMİ Yukarıda Cüveyni ve Bar İbraya'nın Moğol Şamanizmini Uygurlarınkinden ür...
