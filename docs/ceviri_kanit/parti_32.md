# Ceviri istek paketi 32 - Orhun cumlecikleri

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


## TY1-G-4#2 - Tonyukuk Yazıtı, Güney 4. satir  (5 kelime)

- **transkripsiyon:** `YORuMaZUN : USaR : İDİ : YOK : KISaLıM`
- **kelime karsiliklari:** YÜRÜMESİN : [TÜRKÜ] : HEP : YOK : KILALIM
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _USaR İDİ YOK KISaLıM_)
    > ...ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinç...
  - `Tekin 2003, s. 147` (eslesen: _USaR İDİ YOK KISaLıM_)
    > ...ekin ara idi oksız kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç kabile örgütü olmayan Doğu Türklerini düzene sokup öylece hükmederlermiş” (BK D 4) - *türk sir bodun yirintä idi yorımazun* “Türk Sir halkı ülkesinde hiç ilerlemesin” (T 11) - *usar idi yok kışalım* “Mümkünse, onları tümüyle yok edelim” (T 11) - *üçägün kabışıp sülälim edi yok kışalım* “Üçümüz birlikte ordu sevk edelim, (onları) tümüyle yok edelim” (T 21) - *türük bodun tämir kapıgka tensi oglı aytıgma tagka tägmiş idi yok ärmiş* “Türk halkının Demir Ka...
  - `Olmez 2017, s. 58` (eslesen: _USaR İDİ YOK KISaLıM_)
    > ...larak) İnel Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yaz...


## TY1-G-5#1 - Tonyukuk Yazıtı, Güney 5. satir  (8 kelime)

- **transkripsiyon:** `TİR : MeN : OL : SaBıG : eŞiDiP : TÜN : UDıSIKıM : KeLMeDİ`
- **kelime karsiliklari:** DER[İM] : BEN : O : SÖZÜ : İŞİTİP : GECE : UYUYASIM : GELMEDİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _TİR MeN OL SaBıG eŞiDiP TÜN UDıSIKıM KeLMeDİ_)
    > ...i bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk...
  - `Tekin 2003, s. 166` (eslesen: _OL SaBıG eŞiDiP TÜN_)
    > ...ğını) tokluğu (doyacağını) düşünmezsin" (KT G 8) *türük bodun tokurkak sän āçsar to-sık ömäz sän bir todsar āç-sık ömäz sän* "(Ey) Türk halkı! Sen kendini hep tok sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *bunta...
  - `Ata 2011, s. 139` (eslesen: _OL SaBıG eŞiDiP TÜN_)
    > ...ta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sıfat-...
  - `Ata 2011, s. 132` (eslesen: _OL SaBıG eŞiDiP TÜN_)
    > ...ok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eylem ad...


## TY1-G-5#2 - Tonyukuk Yazıtı, Güney 5. satir  (3 kelime)

- **transkripsiyon:** `KÜNTüZ : OLuRSıKıM : KeLMeDİ`
- **kelime karsiliklari:** GÜNDÜZ : OTURASIM : GELMEDİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _KÜNTüZ OLuRSıKıM KeLMeDİ_)
    > ...re Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yo...
  - `Ata 2011, s. 119` (eslesen: _KÜNTüZ OLuRSıKıM KeLMeDİ_)
    > ...” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiy...
  - `Ata 2011, s. 112` (eslesen: _KÜNTüZ OLuRSıKıM KeLMeDİ_)
    > ...dik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, i...


## TY1-G-5#3 - Tonyukuk Yazıtı, Güney 5. satir  (4 kelime)

- **transkripsiyon:** `aNDA : ÖTRÜ : KaGaNıMA : ÖTüNTüM`
- **kelime karsiliklari:** ONDAN : ÖTÜRÜ : KAĞANIMA : ÖTÜNDÜM
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _ÖTRÜ KaGaNıMA ÖTüNTüM_)
    > ...bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş...
  - `Tekin 2003, s. 154` (eslesen: _ÖTRÜ KaGaNıMA ÖTüNTüM_)
    > ...ucağına kadar (hiçbir şey) kalmamış" (IB 16) ## Bulunma-Çıkma Durumunu Yöneten Sontakılar **359.** Adların bulunma-çıkma durumunu yöneten sontakılar şunlardır: *ötrü, kisrä, üzä, adın, öŋi* ve *ıngaru*. **360.** *ötrü* "sonra" < *\*ötür-* "geçirmek": *anta ötrü kaganıma ötüntüm* "Ondan sonra hakanıma ricada bulundum" (T 12) *anta ötrü oguz kopın kälti* "Ondan sonra Oğuzların hepsi geldi" (T 16) **361.** *kisrä* "sonra" (bk. **Yer Zarfları**): *yagru kontokda kisrä añıg bilig anta öyür ärmiş* "(Bu halklar Çin'e) yaklaşıp yerleştikte...
  - `Ata 2011, s. 122` (eslesen: _ÖTRÜ KaGaNıMA ÖTüNTüM_)
    > ...kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç, sırtı çıplak, yoksul ve sefil bir halk üzerine hükümdar oldum” KT D 26 ötrü: an+ta ötrü kaganıma ötüntüm “ondan sonra hakanıma ricada bulundum” T 12 BAĞLAÇ Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. az...
  - `Ata 2011, s. 115` (eslesen: _ÖTRÜ KaGaNıMA ÖTüNTüM_)
    > ...o zaman düşünürmüş” KT G5 an+ta kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç, sırtı çıplak, yoksul ve sefil bir halk üzerine hükümdar oldum” KT D ötrü: an+ta ötrü kaganıma ötüntüm “ondan sonra hakanıma ricada bulundum” T 12 BAĞLAÇ [[s. 115]] Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıg...


## TY1-G-5#4 - Tonyukuk Yazıtı, Güney 5. satir  (8 kelime)

- **transkripsiyon:** `aNÇA : ÖTüNTüM : TaBGaÇ : OGuZ : KITaYN : BU : üÇKÜ : KaBıSaR`
- **kelime karsiliklari:** ANCA : ÖTÜNDÜM : TABGAÇ : OĞUZ : KITAY : BU : ÜÇÜ : KAVUŞSA
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _aNÇA ÖTüNTüM TaBGaÇ OGuZ_)
    > ...teçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabg...
  - `Tekin 2003, s. 222` (eslesen: _ÖTüNTüM TaBGaÇ OGuZ_)
    > ...bän yırdınta yan tägäyin, Türk Sir bodun yerintä idi yorımazun! Usar, idi yok kışalım!" (12) tir män. Ol sabıg eşidip tün udısıkım kälmädi, küntüz olorsıkım kälmädi. Anta ötrü [s. 222] # s. 222 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 223) kaganıma ötüntüm: "Tabgaç, Oguz, Kıtañ, buçägü kabış(s)ar, (13) kaltaçı biz. Öz (i)çi taşın tutmiş täg biz. Yuyka ärkli topulgalı uçuz ärmiş, yinçgä ärklig üzgäli uçuz; yuyka kalın bolsar, topulguluk alp ärmiş; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya...
  - `Tekin 2003, s. 120` (eslesen: _TaBGaÇ OGuZ_)
    > ...BK B 6) *ol yerimin subumın konar köçär bän* "O topraklarım üzerinde ve bu sularım boyunca konup göçerim" (Tar. B 4) *öltäçi sän* "öleceksin" KT G 8) *türük bodun tokurkak sän* "Türk halkı, sen kendini hep tok sayarsın" (KT G 8) *biz az biz* "Biz azız" (O 7) *tabgaç oguz kıtań buçägü kabışsar kaltaçı biz* "Çinliler, Oğuzlar ve Hıtaylılar... Bu üçü birleşirse (biz) çaresiz kalırız" (T 12) *bödkä körügmä bäglär gü yaŋıltaçı siz* "Bu dönemde (bana) itaat eden beyler, (sizler) mi yanılacaksınız?" (KT G 11, BK K 8) 2. İlgi durumu...
  - `Ata 2011, s. 115` (eslesen: _TaBGaÇ OGuZ_)
    > ...Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 116] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “...
  - `Ata 2011, s. 108` (eslesen: _TaBGaÇ OGuZ_)
    > ...3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. [[s. 108]] bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm...
  - `Tekin 2003, s. 154` (eslesen: _ÖTüNTüM_)
    > ...(hiçbir şey) kalmamış" (IB 16) ## Bulunma-Çıkma Durumunu Yöneten Sontakılar **359.** Adların bulunma-çıkma durumunu yöneten sontakılar şunlardır: *ötrü, kisrä, üzä, adın, öŋi* ve *ıngaru*. **360.** *ötrü* "sonra" < *\*ötür-* "geçirmek": *anta ötrü kaganıma ötüntüm* "Ondan sonra hakanıma ricada bulundum" (T 12) *anta ötrü oguz kopın kälti* "Ondan sonra Oğuzların hepsi geldi" (T 16) **361.** *kisrä* "sonra" (bk. **Yer Zarfları**): *yagru kontokda kisrä añıg bilig anta öyür ärmiş* "(Bu halklar Çin'e) yaklaşıp yerleştikte...


## TY1-G-6#1 - Tonyukuk Yazıtı, Güney 6. satir  (6 kelime)

- **transkripsiyon:** `KaLTaÇI : BiZ : ÖZ : İÇİ : TaŞıN : TUTMıŞ`
- **kelime karsiliklari:** [YALNIZ] KALACAĞIZ : BİZ : ÖZ[Ü] : İÇİ : DIŞINDAN : TUTULMUŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _KaLTaÇI BiZ ÖZ İÇİ TaŞıN TUTMıŞ_)
    > ...ğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz b...
  - `Tekin 1998, s. 12` (eslesen: _ÖZ İÇİ TaŞıN TUTMıŞ_)
    > ...tı sınırına, kuzeyde de Oğuz sınırına yığmışlar, yani orduyu dört tarafa dağıtmışlardır. [[s. 12]] Bu üç düşman Türk kağanlığına karşı birleşip birlikte saldırmayı planlayınca Tunyukuk sınırlardaki bu kuvvetleri merkezde toplamanın uygun olacağını düşünmüş ve Öz içi taşın tutmış teğ biz “(Biz) kendi iç (kuvvetlerimiz) ile dışarısını tutmuş gibiyiz” dedikten sonra kuvvetin birlikten doğacağı fikrini ifade eden şu atasözünü kullanmıştır: Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz. 5.5. [[s. 12]] Edebi Sanatlar (Benzet...
  - `Ata 2011, s. 121` (eslesen: _ÖZ İÇİ TaŞıN TUTMıŞ_)
    > ...m” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılma...
  - `Ata 2011, s. 114` (eslesen: _ÖZ İÇİ TaŞıN TUTMıŞ_)
    > ...mda Çin’e doğru sefer ettim” BK D25-26 [[s. 114]] yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. [[s. 114]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yarat...


## TY1-G-6#2 - Tonyukuk Yazıtı, Güney 6. satir  (7 kelime)

- **transkripsiyon:** `TeG : BİZ : YUYKA : eRKLiG : TUPuLGaLI : UÇuZ : eRMiŞ`
- **kelime karsiliklari:** DEK : BİZ : YUFKA : ERKLİYİ : TUBULMAK : UCUZ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _TeG BİZ_)
    > ...de Oğuz sınırına yığmışlar, yani orduyu dört tarafa dağıtmışlardır. [[s. 12]] Bu üç düşman Türk kağanlığına karşı birleşip birlikte saldırmayı planlayınca Tunyukuk sınırlardaki bu kuvvetleri merkezde toplamanın uygun olacağını düşünmüş ve Öz içi taşın tutmış teğ biz “(Biz) kendi iç (kuvvetlerimiz) ile dışarısını tutmuş gibiyiz” dedikten sonra kuvvetin birlikten doğacağı fikrini ifade eden şu atasözünü kullanmıştır: Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz. 5.5. [[s. 12]] Edebi Sanatlar (Benzetmeler)...
  - `Ata 2011, s. 121` (eslesen: _TeG BİZ_)
    > ...yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüph...
  - `Tekin 2003, s. 222` (eslesen: _BİZ YUYKA_)
    > ...tir män. Ol sabıg eşidip tün udısıkım kälmädi, küntüz olorsıkım kälmädi. Anta ötrü [s. 222] # s. 222 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 223) kaganıma ötüntüm: "Tabgaç, Oguz, Kıtañ, buçägü kabış(s)ar, (13) kaltaçı biz. Öz (i)çi taşın tutmiş täg biz. Yuyka ärkli topulgalı uçuz ärmiş, yinçgä ärklig üzgäli uçuz; yuyka kalın bolsar, topulguluk alp ärmiş; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya kurdınta, yırya Oguzda eki üç biŋ sümüz, kältäçimiz, bar mu nä?" Ança ötüntüm. (1...
  - `Ata 2011, s. 186` (eslesen: _BİZ YUYKA_)
    > ...çaresiz kalırız. (Bir şeyin) içi, dışını tutmuş (kaplamış) gibiyiz. (Bir şey) k(a)l͡t(a)çı b(i)z öz (i)çi t(a)ş(ı)n tutm(i)ş yufka (ince) iken delmek kolay imiş, t(e)g biz yuyka (e)rkli top(u)lg(a)lı uç(u)z (e)rm(i)ş y(i)nçge (e)rkl(i)g ince olanı kırmak kolay, yufka kalın üzg(e)li uç(u)z yuyka k(a)l(ı)n bols(a)r olursa delmek zor imiş, ince top(u)lgulu͡k (a)lp (e)rm(i)ş y(i)nçge G14...
  - `Olmez 2017, s. 62` (eslesen: _UÇuZ eRMiŞ_)
    > ...kuz tatar kalmatı kelti* "Sekiz Oğuz, Tokuz Tatar'dan (geride hiç kimse) kalmaksızın geldi." (MÇ D 3) **{-gAlI} :** *yadag yavız boltı tép algalı kelti* "Yaya olanları perişan oldu diyerek teslim almak amacıyla geldiler" (BK D 32); *yuyka erkli topulgalı uçuz ermiş yinçge erklig üzgeli uçuz* "Yufka olanı delmek kolaymış. İnce olanı koparması kolaymış." (T 13) **{-çA} :** *ulug oglum agrip yok bolça k²og seyünüg balbal tike bértim* "Büyük oğlum hastalanıp vefat edince General Kog'u balbal dikiverdim." (BK G 9); *yug...
  - `Ata 2011, s. 114` (eslesen: _TeG BİZ_)
    > ...r ettim” BK D25-26 [[s. 114]] yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren aklım ermez gibi oldu” KT K10 öz içi taşın tutmış teg biz “kendi içi dışını tutmuş gibiyiz” T 13 Açıklama: Bu sontakı, zamirler ve 3. [[s. 114]] kişi iyelik ekli isimlerin nesne durumu ekinden sonra da gelir: anta kisre inisi eçi+si+n teg kılınmaduk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış...


## TY1-G-6#3 - Tonyukuk Yazıtı, Güney 6. satir  (11 kelime)

- **transkripsiyon:** `YiNÇGE : eRKLiG : ÖZGüLİ : UÇuZ : YUYKA : KaLıN : BOLSaR : TUPuLGULUK : aLP : eRMiŞ : YiNÇGE`
- **kelime karsiliklari:** İNCE : ERKLİYİ : ÖZGÜLEMEK : UCUZ : YUFKA : KALIN : OLSA : DELİNMESİ : ALP : İMİŞ : İNCE
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _UÇuZ YUYKA KaLıN BOLSaR_)
    > ...Şad ünvanını taşıyan ve sadece yedi yüz kişilik küçük bir kuvveti olan Kutluğ'u kağan ilan etmenin isabetli bir karar olup olmayacağını düşünürken duruma uygun olan bu atasözünü hatırlıyor ve kullanıyor. Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka kalın bolsar topulgalı alp ermiş, yinçge yoğun bolsar üzgülük alp ermiş “(Bir şey) yufka iken (onu) delmek kolay imiş; ince olanı kırmak kolay; yufka kalın olursa (onu) delmek zor [[s. 12]] ORHON YAZITLARI 21 imiş, ince yoğun olursa (onu) kırmak zor imiş” (TI G 6-7). Bu...
  - `Tekin 2003, s. 222` (eslesen: _UÇuZ YUYKA KaLıN BOLSaR_)
    > ...ıkım kälmädi. Anta ötrü [s. 222] # s. 222 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 223) kaganıma ötüntüm: "Tabgaç, Oguz, Kıtañ, buçägü kabış(s)ar, (13) kaltaçı biz. Öz (i)çi taşın tutmiş täg biz. Yuyka ärkli topulgalı uçuz ärmiş, yinçgä ärklig üzgäli uçuz; yuyka kalın bolsar, topulguluk alp ärmiş; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya kurdınta, yırya Oguzda eki üç biŋ sümüz, kältäçimiz, bar mu nä?" Ança ötüntüm. (15) Kaganım, bän özüm, Bilgä Tuñukuk, ötüntök ötünçümin eşidü berti. "Köŋlü...
  - `Olmez 2017, s. 62` (eslesen: _UÇuZ YUYKA KaLıN BOLSaR_)
    > ...*ol yolun yorisar unç tédim* ""mümkünse sen de o yoldan git" diye emrettim" (T 24); *süŋüş bolsar çerig éter erti* "Savaş çıksa asker toplardı" (KÇ B 9) **Sıfatfiiller** Yazıtlarda görülen sıfatfiiller şunlardır (T. Tekin 2003: s. 165): **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hak...


## TY1-G-7#1 - Tonyukuk Yazıtı, Güney 7. satir  (5 kelime)

- **transkripsiyon:** `YOGUN : BOLSAR : ÜZGÜLÜK : ALP : ERMİŞ`
- **kelime karsiliklari:** YOĞUN : OLSA : ÖZGÜLEMEK : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _YOGUN BOLSAR ÜZGÜLÜK ALP ERMİŞ_)
    > ...bir kuvveti olan Kutluğ'u kağan ilan etmenin isabetli bir karar olup olmayacağını düşünürken duruma uygun olan bu atasözünü hatırlıyor ve kullanıyor. Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka kalın bolsar topulgalı alp ermiş, yinçge yoğun bolsar üzgülük alp ermiş “(Bir şey) yufka iken (onu) delmek kolay imiş; ince olanı kırmak kolay; yufka kalın olursa (onu) delmek zor [[s. 12]] ORHON YAZITLARI 21 imiş, ince yoğun olursa (onu) kırmak zor imiş” (TI G 6-7). Bu parçada da bir atasözünün anıldığı açıktır. Bu eski atasöz...
  - `Tekin 2003, s. 213` (eslesen: _BOLSAR ÜZGÜLÜK ALP_)
    > ...şüphesiz" (KT D 4-5) - *özi yaŋıltı, kagani ölti, boduni küŋ kul boltı* "Kendisi (bize) ihanet etti, hakanı öldü, halkı (da) cariye (ve) köle oldu" (KT D 20) [s. 213] # s. 213 — ORHON TÜRKÇESİ GRAMERİ - *yuyka kalın bolsar topulguluk alp ärmiş, yinçgä yogan bolsar üzgülük alp ärmiş* "Yufka kalın olursa delmek zor imiş, ince yoğun olursa kırmak zor imiş" (T 13), vb. **485.** Öznesi zamir olan bu tür birleşiklerde ikinci cümlenin öznesi kaldırılır: - *biz az ärtimiz, yabız ärtimiz* "Biz az idik, kötü (durumda) idik" (BK D 32), vb....
  - `Olmez 2017, s. 63` (eslesen: _YOGUN BOLSAR_)
    > ...**Sıfatfiiller** Yazıtlarda görülen sıfatfiiller şunlardır (T. Tekin 2003: s. 165): **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim...
  - `Tekin 1998, s. 10` (eslesen: _ALP ERMİŞ_)
    > ...r anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçi...
  - `Ata 2011, s. 51` (eslesen: _ALP ERMİŞ_)
    > ...-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın...
  - `Olmez 2017, s. 62` (eslesen: _ALP ERMİŞ_)
    > ...künse sen de o yoldan git" diye emrettim" (T 24); *süŋüş bolsar çerig éter erti* "Savaş çıksa asker toplardı" (KÇ B 9) **Sıfatfiiller** Yazıtlarda görülen sıfatfiiller şunlardır (T. Tekin 2003: s. 165): **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, d...


## TY1-G-7#2 - Tonyukuk Yazıtı, Güney 7. satir  (11 kelime)

- **transkripsiyon:** `ÖŊRE : KITAYNDA : BİRİYE : TABGAÇDA : KURıYA : KURıDıNTA : YIRıYA : OGuZDA : iKİ : ÜÇ : BİŊ`
- **kelime karsiliklari:** ÖNDE : KITAYDAN : BERİDE : TABGAÇDAN : GERİDE : GERİLİLERDEN : YIRIDA : OĞUZDAN : İKİ : ÜÇ : BİN
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...uş gibiyiz. (Bir şey) yufka iken (onu) delmek kolay imiş, ince olanı (da) kırmak kolay; yufka, kalın olursa (onu) delmek zor imiş, ince (G 7) yoğun olursa (onu) kırmak zor imiş. Doğuda Kıtay'dan, güneyde Çin'den, batıda batıdan, kuzeyde de Oğuz'lardan gelecek iki üç bin (kadar) askerimiz var mı ne?” Böylece ricada bulundum. (G 8) Kağanım, (benim) kendimin, Bilge Tunyukuk'un arz ettiğim ricamı dinlemek lutfunda bulundu. [[s. 44]] “(Orduyu) gönlünce sevk et!” dedi. Kök Öng (ırmağı)nı geçerek (orduyu) Ötüken dağlarına doğru s...
  - `Ergin 1970, s. 37` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...irse | kala kalacağız. Kendi içi dıştan tutulmuş gibiyiz. Yufka olanın delinmesi kolay imiş, ince olanı kırmak kolay. Yufka kalın olsa delinmesi zor imiş. İnce | yoğun olsa kırmak zor imiş. Doğuda Kıtaydan, güneyde Çinden, batıda batılılardan, kuzeyde Oğuzdan iki üç bin askerimiz, geleceğimiz var mı acaba? Böyle arzettim. [[s. 37]] | Kağanım benim kendimin. Bilge Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken o...
  - `Tekin 2003, s. 126` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...**277.** Soru edatından sonra kullanıldığında *nä* zamiri olasılık bildirir: *öŋrä kıtańda biryä tabgaçda kurya kurdınta yırya oguzda eki üç biŋ sümüz kältäçimiz bar mu nä* "Doğuda Kıtay'dan, güneyde Çin'den, batıda batıdan, kuzeyde de Oğuzlardan gelebilecek iki üç bin kadar askerimiz var mı ne?" (T 14) **278.** Orhon Türkçesinde şu soru sözcükleri de vardır: *kanı* "hani.", *kanta* "nerde?", *kantan* "nereden?", *kaçan* "ne zaman?", *kança* "nereye?", *kaltı* "nasıl?". Bu soru sözcükleri arkaik soru zamiri *\*ka(n)*'ın çe...
  - `Ata 2011, s. 186` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...Doğuda Kıtay’dan, güneyde Çin’den, yog(u)n bols(a)r üzg(ü)lük͡ (a)lp batıda batıdan, kuzeyde Oğuz’dan (e)rm(i)ş öŋre kı͡ ıt(a)ńda b(i)rye t(a)bg(a)çda kurya kur(ı)d(ı)nta yırya (gelecek) iki üç bin askerimiz var mı og(u)zda (e)ki üç biŋ süm(ü)z k(e)lte͡çim(i)z b(a)r mu ne (a)nç͡ a ne?” Öylece arz ettim. öt(ü)nt(ü)m G15 Kağanım ben kendim Bilge Tonyu-...
  - `Olmez 2017, s. 64` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...z teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar az bilsem de bildiğim, düşündüğ...
  - `Ata 2011, s. 179` (eslesen: _iKİ ÜÇ BİŊ_)
    > ...şını tutmuş (kaplamış) gibiyiz. (Bir şey) yufka (ince) iken delmek kolay imiş, ince olanı kırmak kolay, yufka kalın olursa delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş. Doğuda Kıtay’dan, güneyde Çin’den, batıda batıdan, kuzeyde Oğuz’dan (gelecek) iki üç bin askerimiz var mı ne?” Öylece arz ettim. [[s. 179]] Kağanım ben kendim Bilge Tonyukuk’un arz ettiğim ricamı dinledi, “(orduyu) gönlünce sevk et!” dedi. Kök Öng (ırmağın)’ı geçerek Ötüken dağlarına doğru sevk ettim. İngek gölcüğü ile Tola (ırmağın)dan Oğuzlar...


## TY1-G-7#3 - Tonyukuk Yazıtı, Güney 7. satir  (7 kelime)

- **transkripsiyon:** `SÜMüZ : KeLTeÇiMiZ : BaR : MU : NE : aNÇA : ÖTüNTüM`
- **kelime karsiliklari:** SÜMÜZ : GELECEK : VAR : MI : NE? : ANCA : ÖTÜNDÜM
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _SÜMüZ KeLTeÇiMiZ BaR MU NE aNÇA ÖTüNTüM_)
    > ...z içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri...
  - `Olmez 2017, s. 64` (eslesen: _KeLTeÇiMiZ BaR MU NE_)
    > ...körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar...
  - `Tekin 2003, s. 126` (eslesen: _BaR MU_)
    > ...56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39) **277.** Soru edatından sonra kullanıldığında *nä* zamiri olasılık bildirir: *öŋrä kıtańda biryä tabgaçda kurya kurdınta yırya oguzda eki üç biŋ sümüz kältäçimiz bar mu nä* "Doğuda Kıtay'dan, güneyde Çin'den, batıda batıdan, kuzeyde de Oğuzlardan gelebilecek iki üç bin kadar askerimiz var mı ne?" (T 14) **278.** Orhon Türkçesinde şu soru sözcükleri de vardır: *kanı* "hani.", *kanta* "nerde?", *kantan* "nereden?", *kaçan* "n...
  - `Tekin 2003, s. 121` (eslesen: _MU NE_)
    > ...# İşaret Zamirleri **272.** Orhon Türkçesinde iki işaret zamiri vardır: *bu* ve *ol* "o". Sonuncu zamir üçüncü kişi zamiri olarak da kullanılır. İşaret zamirlerinin çekim gövdeleri de sırasiyle *bun+* ve *an+* biçimindedir. - Yalın durum *bu, ol* - İlgi durumu — - Nesne durumu *bunı, anı* - Verme-Bulunma *aŋar* (< *\*an+gar*) - Bulunma-Çıkma durumu *bunta, anta* - Yönelme durumu *aŋaru* (< *\*an+garu*) - Eşitlik durumu *bunça, ança* - Araç durumu *anın* İşaret zamirlerinden türemiş öbür sözcükler de şunlardır: *antag* "o...
  - `Ata 2011, s. 186` (eslesen: _MU NE_)
    > ...yog(u)n bols(a)r üzg(ü)lük͡ (a)lp batıda batıdan, kuzeyde Oğuz’dan (e)rm(i)ş öŋre kı͡ ıt(a)ńda b(i)rye t(a)bg(a)çda kurya kur(ı)d(ı)nta yırya (gelecek) iki üç bin askerimiz var mı og(u)zda (e)ki üç biŋ süm(ü)z k(e)lte͡çim(i)z b(a)r mu ne (a)nç͡ a ne?” Öylece arz ettim. öt(ü)nt(ü)m G15 Kağanım ben kendim Bilge Tonyu- kuk’un arz ettiğim ricamı dinledi, k(a)g(a)n[ım ben] öz(ü)m bilge ton...
  - `Tekin 2003, s. 222` (eslesen: _aNÇA ÖTüNTüM_)
    > ...ş täg biz. Yuyka ärkli topulgalı uçuz ärmiş, yinçgä ärklig üzgäli uçuz; yuyka kalın bolsar, topulguluk alp ärmiş; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya kurdınta, yırya Oguzda eki üç biŋ sümüz, kältäçimiz, bar mu nä?" Ança ötüntüm. (15) Kaganım, bän özüm, Bilgä Tuñukuk, ötüntök ötünçümin eşidü berti. "Köŋlüŋçä uduz!" tedi. Kök Öŋüg yoguru Ötükän yışgaru uduztum. İngäk kölükin Toglada Oguz kälti. (16) [Süsi altı biŋ] ärmiş. Biz eki bıŋ ärtimiz. Süŋüşdümüz. Täŋri yarlı(k)kadı, yañdımız....


## TY1-G-8#1 - Tonyukuk Yazıtı, Güney 8. satir  (8 kelime)

- **transkripsiyon:** `KaGaNıM : BeN : ÖZüM : BİLGE : TONYUKUK : ÖTüNTÜK : ÖTüNÇüMüN : iŞiDÜ`
- **kelime karsiliklari:** KAĞANIM : BEN : ÖZÜM : BİLGE : TONYUKUK : ÖTÜNDÜK : [KAĞAN] ÖTÜNÇÜMÜ : İŞİTİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _BeN ÖZüM BİLGE_)
    > ...uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi...
  - `Ergin 1970, s. 37` (eslesen: _KaGaNıM BeN_)
    > ...mesi kolay imiş, ince olanı kırmak kolay. Yufka kalın olsa delinmesi zor imiş. İnce | yoğun olsa kırmak zor imiş. Doğuda Kıtaydan, güneyde Çinden, batıda batılılardan, kuzeyde Oğuzdan iki üç bin askerimiz, geleceğimiz var mı acaba? Böyle arzettim. [[s. 37]] | Kağanım benim kendimin. Bilge Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken ormanına doğru sevk ettim. İnek, yük hayvanı ile Toglada | Oğuz geldi. Askeri...
  - `Ata 2011, s. 186` (eslesen: _KaGaNıM BeN_)
    > ...i)rye t(a)bg(a)çda kurya kur(ı)d(ı)nta yırya (gelecek) iki üç bin askerimiz var mı og(u)zda (e)ki üç biŋ süm(ü)z k(e)lte͡çim(i)z b(a)r mu ne (a)nç͡ a ne?” Öylece arz ettim. öt(ü)nt(ü)m G15 Kağanım ben kendim Bilge Tonyu- kuk’un arz ettiğim ricamı dinledi, k(a)g(a)n[ım ben] öz(ü)m bilge tonyu͡kuk͡ öt(ü)ntük öt(ü)nç͡ (ü)m(i)n “(orduyu) gönlünce sevk et!” dedi. (e)ş(i)dü b(e)rti köŋl(ü)ŋçe ud(u)z t(...
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖZüM_)
    > ...lece), (B 6) yas tutuyorum. Babam (hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş er...
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK_)
    > ...ı cephesi Bilge Kağan kitâbesini Yollug Tigin, yazdım. Bunca türbeyi, resimi, sanatı.........kağanın yeğeni Yollug Tigin ben bir ay dört gün oturup yazdım, resimledim ........... M U H A R R E M E R G İ N [s. 36] TONYUKUK ÂBİDESİ (Birinci Taş) Doğu cephesi Bilge Tonyukuk ben kendim Çin ilinde kılındım. Türk milleti Çine tâbi idi. | Türk milleti hanını bulmayıp Çinden ayrıldı, hanlandı. Hanını bırakıp Çine tekrar teslim oldu. Tanrı şöyle demiştir: Han verdim, | hanını bırakıp teslim oldun. Teslim olduğun için Tanrı öldürmüştür...
  - `Ata 2011, s. 117` (eslesen: _BİLGE TONYUKUK_)
    > ...örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme...


## TY1-G-8#2 - Tonyukuk Yazıtı, Güney 8. satir  (4 kelime)

- **transkripsiyon:** `BiRTİ : KÖŊLüŊÇE : UDuZ : TiDİ`
- **kelime karsiliklari:** VERDİ : GÖNLÜNCE : [ORDUYU] UDUZ : DEDİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _KÖŊLüŊÇE UDuZ_)
    > ...topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelt...
  - `Olmez 2017, s. 53` (eslesen: _KÖŊLüŊÇE UDuZ_)
    > ...ıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalarda araç veya vasıta durumu da denir. *bir erig ok+un urdı* "(Prens Kül) bir askeri ok ile vurdu" (KT D 36) [s. 54] # s. 054 — Mehmet Ölmez (basılı sayfa 56) *az t...
  - `Tekin 1998, s. 23` (eslesen: _BiRTİ_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuş...
  - `Tekin 2003, s. 107` (eslesen: _BiRTİ_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]t...
  - `Ata 2011, s. 112` (eslesen: _BiRTİ_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövd...
  - `Ata 2011, s. 105` (eslesen: _BiRTİ_)
    > ...s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. [[s. 105]] +(I)n: İyelik ekli gövdeler...


## TY1-G-8#3 - Tonyukuk Yazıtı, Güney 8. satir  (6 kelime)

- **transkripsiyon:** `KÖK : ÖŊüG : YOGuRU : ÖTüKeN : YIŞGARU : UDuZTıM`
- **kelime karsiliklari:** KÖK : ÖNGÜ : YUKARI : ÖTÜKEN : YIŞ [YÖNÜNE] : UDUZDUM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _KÖK ÖŊüG YOGuRU_)
    > ...) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim...
  - `Tekin 2003, s. 222` (eslesen: _KÖK ÖŊüG YOGuRU_)
    > ...rmiş; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya kurdınta, yırya Oguzda eki üç biŋ sümüz, kältäçimiz, bar mu nä?" Ança ötüntüm. (15) Kaganım, bän özüm, Bilgä Tuñukuk, ötüntök ötünçümin eşidü berti. "Köŋlüŋçä uduz!" tedi. Kök Öŋüg yoguru Ötükän yışgaru uduztum. İngäk kölükin Toglada Oguz kälti. (16) [Süsi altı biŋ] ärmiş. Biz eki bıŋ ärtimiz. Süŋüşdümüz. Täŋri yarlı(k)kadı, yañdımız. Ügüzkä tüşdi, yañdok yolta yämä öltik-ök. Anta ötrü Oguz kopın kälti. (17) Tü[rk kaganıg], Türk bodunug Ötük...
  - `Tekin 1998, s. 44` (eslesen: _YOGuRU ÖTüKeN YIŞGARU_)
    > ...yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelti. ORHON YAZITLARI 85 Çuğay (dağlarının)...


## TY1-G-8#4 - Tonyukuk Yazıtı, Güney 8. satir  (5 kelime)

- **transkripsiyon:** `İNiG : KÖKLüKüN : TOGuLDA : OGuZ : KeLTİ`
- **kelime karsiliklari:** İNİG : KÖKLÜKÜN : TOĞULDA : OĞUZ [ORDUSU] : GELDİ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _OGuZ KeLTİ_)
    > ...e Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelti. ORHON YAZITLARI 85 Çuğay (dağlarının) kuzeyinde, Karakum'da oturuyor idik. (G 1...
  - `Olmez 2017, s. 54` (eslesen: _OGuZ KeLTİ_)
    > ...tdimiz* "Hakanımla birlikte orduyu sevk ettik" (T 53) *kaŋım kagan yėti yėgirmi er+in taşıkmış* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *anta ötrü oguz kop+ın kelti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *ingek kölek+in toglada oguz kelti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlik...
  - `Kafesoglu, s. 68` (eslesen: _OGuZ KeLTİ_)
    > ...re savaştığı bildirilen İlteriş Kağan341 kuzeyde Kögmen (Tannu-ula) dağlarına, doğuda Kerulen ve Onon nehirlerinin yüksek vadilerine, batıda Altaylara kadar uzanan sahadaki Türk *" Tonyukuk, str. 10-15. Bu kitabenin str. [[s. 68]] 15'deki "İngek kölke Toglada Oğuz kelti" ibaresinin "Oğuzlar yük hayvanları ve inekleri ile (!) geldiler" şeklinde çevrilmesi herhalde garip ve hatalıdır. Doğrusu "Togla'dan inekler gölü'ne geldiler" olmalıdır. Bk. R. Giraud, L'lnscription de Ba-inTsokto, s. 84 vd. Adı geçen gölün yeri, ayn. müell....
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tekin 2003, s. 239` (eslesen: _KeLTİ_)
    > ...*batur** yiğit, bahadır (Altınköl II 5) - **bay** zengin - **Bayça Saŋun** kişi adı ve unvanı (Barık III 1) - **Bayırku** etnik ad - **baz** bağımlı, tabi - **bazlan-** bağımlı olmak, tabi olmak (Tes 11) - **bädiz** süs, resim, heykel - **bädizçi** ressam, heykeltıraş - **bädizlä-** süslemek (IB 43) - **bädük** büyük (O 6) - **bädzät-** süsletmek - **bäg** bey, lord - **bägiç** beycik (Abakan 6) - **bäglik** bey olmaya layık - **bälgü** işaret, alamet, nişan - **bältir** kavşak (yol ya da ırmak) - **bän** ben (bk. **män...
  - `Ata 2011, s. 56` (eslesen: _KeLTİ_)
    > ...n tarafından düzenlenen cenaze törenine Köktürklerin komşularının tamamı katılır. Özellikle Çin hükümdarı, Köl Tigin’in mezar külliyesinde inşa edilen tapınağın duvarla- rını Köl Tigin’in dövüştüğü savaş resimleri ile süslemesi için altı ünlü ressam ve heykeltıraş ile birlikte Köl Tigin anıtının kazınması için 3.75m. yüksekliğinde, tepesi oymacılık sanatıyla süslenmiş boş bir mermer sütun gönderir. Daha sonra bu sütunun batı yüzüne Çince, doğu yüzüne ise Türkçe yazıtlar hâkkedilir ve 732’de Bilge Kağan külliyede...


## TY1-G-9#1 - Tonyukuk Yazıtı, Güney 9. satir  (3 kelime)

- **transkripsiyon:** `SÜSİ : ÜÇ : BİŊ`
- **kelime karsiliklari:** SÜSİ : ÜÇ : BİN
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _ÜÇ BİŊ_)
    > ...ı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]]...
  - `Ergin 1970, s. 37` (eslesen: _ÜÇ BİŊ_)
    > ...| kala kalacağız. Kendi içi dıştan tutulmuş gibiyiz. Yufka olanın delinmesi kolay imiş, ince olanı kırmak kolay. Yufka kalın olsa delinmesi zor imiş. İnce | yoğun olsa kırmak zor imiş. Doğuda Kıtaydan, güneyde Çinden, batıda batılılardan, kuzeyde Oğuzdan iki üç bin askerimiz, geleceğimiz var mı acaba? Böyle arzettim. [[s. 37]] | Kağanım benim kendimin. Bilge Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken o...
  - `Tekin 2003, s. 126` (eslesen: _ÜÇ BİŊ_)
    > ...ısı olacakmış (ki)?" (T 56-57) 2. Zarf görevinde: *az teyin nä basınalım* "Az olduğumuz için ne diye yenilelim?" (T 39) **277.** Soru edatından sonra kullanıldığında *nä* zamiri olasılık bildirir: *öŋrä kıtańda biryä tabgaçda kurya kurdınta yırya oguzda eki üç biŋ sümüz kältäçimiz bar mu nä* "Doğuda Kıtay'dan, güneyde Çin'den, batıda batıdan, kuzeyde de Oğuzlardan gelebilecek iki üç bin kadar askerimiz var mı ne?" (T 14) **278.** Orhon Türkçesinde şu soru sözcükleri de vardır: *kanı* "hani.", *kanta* "nerde?", *kantan...
  - `Ata 2011, s. 186` (eslesen: _ÜÇ BİŊ_)
    > ...Doğuda Kıtay’dan, güneyde Çin’den, yog(u)n bols(a)r üzg(ü)lük͡ (a)lp batıda batıdan, kuzeyde Oğuz’dan (e)rm(i)ş öŋre kı͡ ıt(a)ńda b(i)rye t(a)bg(a)çda kurya kur(ı)d(ı)nta yırya (gelecek) iki üç bin askerimiz var mı og(u)zda (e)ki üç biŋ süm(ü)z k(e)lte͡çim(i)z b(a)r mu ne (a)nç͡ a ne?” Öylece arz ettim. öt(ü)nt(ü)m G15 Kağanım ben kendim Bilge Tonyu-...
  - `Olmez 2017, s. 64` (eslesen: _ÜÇ BİŊ_)
    > ...e {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bo...
  - `Ata 2011, s. 179` (eslesen: _ÜÇ BİŊ_)
    > ...top(u)lg(a)lı uç(u)z (e)rm(i)ş y(i)nçge (e)rkl(i)g üzg(e)li uç(u)z yuyka k(a)l(ı)n bols(a)r top(u)lgulu͡k (a)lp (e)rm(i)ş y(i)nçge G14 yog(u)n bols(a)r üzg(ü)lü͡k (a)lp (e)rm(i)ş öŋre k͡ııt(a)ńda b(i)rye t(a)bg(a)çda kurya kur(ı)d(ı)nta yırya og(u)zda (e)ki üç biŋ süm(ü)z k(e)lte͡çim(i)z b(a)r mu ne (a)n͡ça öt(ü)nt(ü)m G15 k(a)g(a)n[ım ben] öz(ü)m bilge tonyu͡ku͡k öt(ü)ntük öt(ü)n͡ç(ü)m(i)n (e)ş(i)dü b(e)rti köŋl(ü)ŋçe ud(u)z t(e)di [[s. 179]] kök öŋ(ü)g yog(u)ru öt(ü)k(e)n yışg(a)ru ud(u)zt(u)m in(i)g(e)k köl(e)k(i)n...


## TY1-G-9#2 - Tonyukuk Yazıtı, Güney 9. satir  (4 kelime)

- **transkripsiyon:** `eRMiŞ : BİZ : iKİ : BİŊ`
- **kelime karsiliklari:** İMİŞ : BİZ : İKİ : BİN
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _BİZ iKİ BİŊ_)
    > ...ttiğim ricamı dinlemek lutfunda bulundu. [[s. 44]] “(Orduyu) gönlünce sevk et!” dedi. Kök Öng (ırmağı)nı geçerek (orduyu) Ötüken dağlarına doğru sevk ettim. İngek gölcüğü ile Tola (ırmağın)dan Oğuz'lar (üzerimize) geldi. (G 9) Ordusu (altı bin kişilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerk...
  - `Ergin 1970, s. 38` (eslesen: _BİZ iKİ BİŊ_)
    > ...Bilge Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken ormanına doğru sevk ettim. İnek, yük hayvanı ile Toglada | Oğuz geldi. Askeri üç bin imiş. Biz iki bin idik. Savaştık. Tanrı lûtfetti, dağıttık. Nehire düştü. Dağıttığımız, yolda yine öldü hep. Ondan sonra Oğuz tamamiyle geldi. | Türk milletini Ötüken yerine, ben kendim Bilge Tonyukuku ötüken yerine konmuş diye işitip güneydeki millet, batidaki, kuzeydeki, doğ...
  - `Tekin 2003, s. 119` (eslesen: _BİZ iKİ BİŊ_)
    > ...BK G 9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (ve) kötü durumda idik" (BK D 32) *biz eki bıŋ ärtimiz* "Biz iki bin (kişi) idik" (T 16) *kagan at bunta biz birtimiz* "(Ona) hakan unvanını buruda biz verdik" (KT D 20) *biz az biz* "Biz azız" (O 7) b) Yüklem bağlayıcısı olarak: *bän ança ter män* "Ben şöyle diyorum" (T 37) [s. 120] # s. 120 — TALAT TEKİN *sakınur män* "ya...
  - `05_Ceren_Sungur_Samanizm_ve_Islam, s. 17` (eslesen: _BİZ iKİ BİŊ_)
    > ...gri muharebelerde Göktürk ordularına güç verir: (§4): "Tanrı güç verdiği için, babam kağanın ordusu kurtlara benzerdi, düşmanınkiler koyuna benzerdi." [[s. 17]] (§13): "Tanrı güç verdiği için, (Oğuz) düşmanı katlettim ve onların kaçmalarını sağladım." (§25): "Biz iki bin kişiydik, çarpıştık, Tanrı lütfetti ve onların [sayıca bizden üstün olan Oğuz ordusunun] kaç malarını sağladık." (§27): "Tanrı lütfettiği için, sayıca daha ka labalık düşmandan korkmadık, onlarla çarpıştık." 1 17 [s. 18] (b) Kağan imparatorluğunu Tengri'nin...


## TY1-G-9#3 - Tonyukuk Yazıtı, Güney 9. satir  (4 kelime)

- **transkripsiyon:** `eRTiMiZ : SÜŊüŞDüMüZ : TeŊRİ : YaRLıKaDI`
- **kelime karsiliklari:** İDİK : SÜNGÜŞDÜK : TANRI : YARLIKADI
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _TeŊRİ YaRLıKaDI_)
    > ...ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelti. ORHON YAZITLARI 85 Çuğay (dağlarının) kuzeyinde, Karakum'da oturuyor idik. (G 1) Yaban hayvanları yiyerek, tavşan yiyerek yaşıyorduk. Halkın boğazı tok idi. Düşmanlarımız ç...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 12` (eslesen: _eRTiMiZ_)
    > ...enzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gi...
  - `Tekin 2003, s. 234` (eslesen: _eRTiMiZ_)
    > ...[s. 234] # s. 234 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 235) Bägiçim! 8. Ärdämlig elintä bökmädi. Töliş Alp Totok işiŋä bökmädi. Y(i)g(i)t ärkän, äsiz, yıta, açıg a! 9. Yıta! ........... y]agın [al]dıŋız, öltüŋüz. Önçüŋüz bar [üçün bäŋkü]ni tikä bertimiz. Kiş[i]dä yig t(i)kär biz. 10. Ärdämi bar üçün kanınta Kü Totok atka tägmiş bägim, äsiz! Är başı, yıta, açıg a! 11. Tokuz älig yaşda tokuz altmış är ölürmiş är başı Saŋun ölürti. Bilgäm, yıta! 12. İç yer äliki artzun: At(d)açı Alp Totok yōk! Yuş Kadıŋ äliki <...
  - `Ata 2011, s. 94` (eslesen: _eRTiMiZ_)
    > ...apımcısı” türük bodun ille-dük ilin ıçgınu ıdmış KT D6 “Türk halkı kurduğu devletini elinden çıkarıvermiş” teŋri yarlıka-duk+ı+n üçün KT G9 “Tanrı buyurduğu için” Yuvarlak ünlülü zarf-fiil ekleri: keyik yi-yü tabışgan yi-yü olurur ertimiz T 8 “Yabani hayvan yiyerek, tavşan yiyerek oturuyorduk” köl tigin yadagın opla-yu tegdi KT D32 “Prens Köl Tigin yayan olarak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin...


## TY1-G-9#4 - Tonyukuk Yazıtı, Güney 9. satir  (3 kelime)

- **transkripsiyon:** `YaYıNDıMıZ : ÖGüZKE : TÜŞDİ`
- **kelime karsiliklari:** YAYDIK : ÖGÜZE : DÜŞTÜ
- **kanit:**
  - `Ogel C2, s. 390` (eslesen: _ÖGüZKE TÜŞDİ_)
    > ...benzetmelerinde, tabiat güçleri, büyük bir rol oynuyorlardı. [[s. 390]] “Savaşta, düşmanı yenip, ırmağa dökme” de söz konusu ediliyordu. To n - yu ku k yazıtında, düşmandan söz açılırken, *“Tanriı yarlık, (izin verdi), (düşmanı) dağıttık ve ırmağa düştüler (ögüzke tüşdi)**”, ““Balıklı ırmak”'”,yani eski türkçesiyle, “balıklıg Ögüz'' deyişi de, eski Türk kaynaklarında sık sık geçer. Yani balığı çok olan, ırmak demektir. Aynı zamanda, çamurlu ve bataklık olan yerlere de, bu ad verilirmiş”, 2 Aynı eser, İİİ, e. 160. Krş. [[s....
  - `Tekin 1998, s. 44` (eslesen: _TÜŞDİ_)
    > ...Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelti. ORHON YAZITLARI 85 Çuğay (dağlarının) kuzeyinde, Karakum'da oturuyor idik. (G 1) Yaban hayvanları yiyerek, tavşan yiyerek yaşıyorduk. Halkın boğazı tok idi. Düşmanlarımız çepeçevre ocak gibi idi; bi...
  - `Tekin 2003, s. 157` (eslesen: _TÜŞDİ_)
    > ...ürük bo[dun ti]rip il tutsıkıŋın bunta urtum, yaŋılıp ölsikiŋin yämä bunta urtum* "(Ey) Türk halkı, (nasıl) hayatta kalıp devlet sahibi olacağını burada (taş üzerine) kaydettim; yanılıp (nasıl) öleceğini de burada (taş üzerine) kaydettim" (KT G 10-11) *ügüzkä tüşdi, yañdok yolta yämä öltik-ök* "Irmağa düştüler; bozguna uğrayıp etrafa dağılanlar da yollarda ölüp gittiler" (T 16) *kızıl kanım töküti kara tärim yügürti (i)şig küçüg bertim ök, uzun yälmäg yämä ı(t)tım ok* "... kızıl kanımı akıtarak, kara terimi dökerek (hak...
  - `Ogel C1, s. 480` (eslesen: _ÖGüZKE_)
    > ...lığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan da Amu-Derya'ya verilen bir addır. Böyle olmasına rağmen, Amu ırmağının başına “Taluy” şeklinde bir sıfatın eklenilmiş olması, şimdi...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 110` (eslesen: _TÜŞDİ_)
    > ...i - o, benimle öpüştü"; ( — ,Sel i öpüşür - öpüşmek). V ataşdır "SİA, LZ İİ oz meninğ birle ok atışdı - o, benimle ok atışdı". Herhangi bir şey atmak için de böyle denir; Gl s ei atışur - atışmak). utuşda? [[y. 110]] MGEİYUZOYZUZ İİ oz mening birle yarmak utuşdı - o, benimle para yutuştu"; GE > JA utaşur - utuşmak). itAgdi: " ŞAk3) YL ĞMİİN oz anıng birle itişdi > o, onunla itiştin; ( —77-23) İŞLE itişür - itişmek), Bir şeyi müdafaada yardımlaşmak, yahut yarışmak için de böyle denir, açışdı: İkİ yi ol manğa kapuğ a...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 7` (eslesen: _TÜŞDİ_)
    > ..., olması için kımız tulumunu sal- a ir a ladı", (3 - oi pışmaz - pış- aşiş ei z tencere kayn , dı, taştı"! “a ie SU taşdı. [[y. 7]] > su taştı"; su, kaptan veyâ am ta- şarsa yine böyle denir. 3 taşar - taşmak). gym! in GEN Nİ TALİ tuşar? NA BEZİ 01 manğa tuşdı > o, bana duş oldu, bana rastladı, beni gördü", 33 tuşar - tuşmak). mile Sı tüşdi: " abi zi er attın tüşdi - adam attan inin” “ Sabğuli! er tamdın tüşdi > adam damdan düştü", Attan düş- mek te böyledir. Yerinden düşen her- hangi bir şey için dahi böyle...


## TY1-G-9#5 - Tonyukuk Yazıtı, Güney 9. satir  (4 kelime)

- **transkripsiyon:** `YaYıNDUK : YOLTA : YiME : ÖLTİ`
- **kelime karsiliklari:** YAYDIKLARIMIZ : YOLDA : YİNE : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _YOLTA_)
    > ...rak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, bitmek, tükenmek”, emget- tolgat- “eza ve cefa etmek”, içik- yükün- “bağımlı o...
  - `Tekin 2003, s. 39` (eslesen: _YOLTA_)
    > ...nda" (O 1, 6) - /BULTm/ *bolt(u)m* "oldum" (T 56, 56) [s. 39] # s. 39 — ORHON TÜRKÇESİ GRAMERİ - /KILTI/ *kıltı* "kıldı" (BK D 7, 14), fakat /KILTI/ (BK D 7) - /YŋLTçI/ *yaŋ(ı)ltaçı* "yanılacak" (KT G 11) - /YŋLTI/ *yaŋ(ı)ltı* "yanıldı" (KT D 20) - /YULTA/ *yolta* "yolda" (T 16), fakat /YULTA/ (KT K 9), vb. 3. /LT/ çift ünsüz işareti yalnızca bir kez ön ünlülü bir sözcükteki /lt/ ünsüz çiftini yazmak için de kullanılmıştır: - /yrltm/ *y(i)r(i)lt(i)m* "ayrıldım" (Hem.-Çır. 6) ## /nt/ Çift Ünsüz İşareti **39.** Bu iş...
  - `Ata 2011, s. 123` (eslesen: _YOLTA_)
    > ...Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındaki ünlü düşer. bini oguzug ölürteçi-k tir men “Beni, Oğuz’u mutlak öldürecektir diyorum” T 10-11 Yukarıda görülen pekiştirmeli yapılar üzerine bir daha ok/ök edatı gelebilir. yańduk yolta yeme ölti-k ök “bozguna uğrayıp dağılanlar yollarda yine ölüp kaldılar” T16 Olasılık Edatı (erinç) Türkçeye “herhalde, muhakkak, şüphesiz ki” olarak çevrilen ve kuvvetli bir olasılık bildiren edattır. Çoğunlukla -mIş ekli geçmiş zamanla kullanılı...
  - `Olmez 2017, s. 57` (eslesen: _YOLTA_)
    > ...iyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-solda ortalıkta kalakalacaktı." (KT K 9) ### Emir – İstek Çekimi | | teklik | çokluk | | :--- | :--- | :--- | | **1. kişi** | -(A)yIn | -(A)lIm | | **2. kişi** | Ø, -(X)ŋ; -gIl | -(X)ŋ, -(X)ŋlAr |...
  - `Ata 2011, s. 116` (eslesen: _YOLTA_)
    > ...I 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındaki ünlü düşer. [[s. 116]] bini oguzug ölürteçi-k tir men “Beni, Oğuz’u mutlak öldürecektir diyorum” T 10-11 Yukarıda görülen pekiştirmeli yapılar üzerine bir daha ok/ök edatı gelebilir. yańduk yolta yeme ölti-k ök “bozguna uğrayıp dağılanlar yollarda yine ölüp kaldılar” T16 Olasılık Edatı (erinç) Türkçeye “herhalde, muhakkak, şüphesiz ki” olarak çevrilen ve kuvvetli bir olasılık bildiren edattır. Çoğunlukla -mIş ekli geçmiş zamanla kullanılır. [[s. 116]...
  - `Ogel C1, s. 515` (eslesen: _YOLTA_)
    > ...uğum, Yayma-Kökül. Sen, ey Bay'ın oğlu Bakuay. Ak-Boltong'un oğlu Bolot. Arkadaşım Bauke. Sen, ey benim, Yaysan. soylu ailelerin çocukları, ey siz! Benim elbisem, sen ey kahraman Bürküt, Benim suyum, sen ey kahraman Sasam. Geriye bile sıçrayan, Kan-Keldi, KaraYoltay, Yan-Keldi. Sen ey, benim şarkıcım, Alamandı. [[s. 515]] Çözülenleri ören, kırılanları düzelten, sen ey keskin dilli Acı-Bay, Kenân'in oğlu. Sen ey, Kenâş oğlu Kan-Canbay. Benim falcım, Kara-Tölök. Kırk yiğidin arkadaşı, Bölök... Kazak'dan gelen Kolman-Bet....


## TY1-G-9#6 - Tonyukuk Yazıtı, Güney 9. satir  (6 kelime)

- **transkripsiyon:** `KÖK : aNDA : ÖTRÜ : OGuZ : KOPıN : KeLTİ`
- **kelime karsiliklari:** HEP : ONDAN : ÖTÜRÜ : OĞUZUN : HEPSİ : GELDİ [BİZE KATILDI]
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _ÖTRÜ OGuZ KOPıN KeLTİ_)
    > ...ti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi. Yariyduk yolta yeme ölti kök. Anta ötrü Oğuz kopın kelti. ORHON YAZITLARI 85 Çuğay (dağlarının) kuzeyinde, Karakum'da oturuyor idik. (G 1) Yaban hayvanları yiyerek, tavşan yiyerek yaşıyorduk. Halkın boğazı tok idi. Düşmanlarımız çepeçevre ocak gibi idi; biz (ortadaki) aş gibi idik. Böylece oturur iken Oğuz'lardan...
  - `Tekin 2003, s. 145` (eslesen: _ÖTRÜ OGuZ KOPıN_)
    > ...ep ölümlü yaratılmış" (KT K 10) [s. 145] # s. 145 — ORHON TÜRKÇESİ GRAMERİ *kül tigin yok ärsär kop öltäçi ärtigiz* “Prens Kül olmasa(ydı) hep ölecek idiniz” (KT K 10), vb. **325.** *kopın* “hep birlikte, tümüyle, toptan” < *kop* + araç durumu eki: - *anta ötrü oguz kopın kälti* “Ondan sonra Oğuzlar toptan geldi” - *bäglär kopın yanalım tedi* “Beyler hep birlikte “Dönelim!” dediler” (T 36) **326.** *tükäti* “tümüyle, tamamiyle” < *tükät-i* - *sabımın tükäti eşidgil* “Sözlerimi tümüyle işit!” (KT G 1) - *sabımın tükäti eşid* “...
  - `Tekin 2003, s. 117` (eslesen: _ÖTRÜ OGuZ_)
    > ...arın valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) *kugu kuş kanatıŋa urup an+ın kalıyu barıpan ögiŋä kaŋıŋa tägürmiş* "Kuğu kuşu (onu) kanatına vurup onunla havalanıp gitmiş, (onu) anasına babasına ulaştırmış" (IB 35) 3. Eylemin işlenme tarzı: *anta ötrü oguz kop+ın kälti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *bäglär kop[ın] yanalım... tedi* "(O haberi işitip) beyler hep birlikte "Dönelim!" dediler" (T 36-37) *oŋ totok yurçin yaraklıg älig+in tutdı* "(Prens Kül) Ong Totok'un kayın biraderini silahlı...
  - `Olmez 2017, s. 54` (eslesen: _ÖTRÜ OGuZ_)
    > ...u yol+un yorısar yaramaçı* "Bu yoldan yürürsek (bizim için) iyi olmayacak" (T 32) *kaganım+ın sü ėltdimiz* "Hakanımla birlikte orduyu sevk ettik" (T 53) *kaŋım kagan yėti yėgirmi er+in taşıkmış* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *anta ötrü oguz kop+ın kelti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *ingek kölek+in toglada oguz kelti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk D...
  - `Tekin 2003, s. 29` (eslesen: _KOPıN_)
    > ...gösterilebilir: - /sÜkdm/ *sökd(ü)m* “söktüm” (T 25) - /tÜktI/ *tök(ü)ti* “dökerek” (T 52) - /yÜkntI/ *yük(ü)nti* “boyun eğdi” (T 28, 46), vb. **16.** Sözbaşı ünsüzü artdamaksıl /k/ ise /ko/ ve /ku/ ses öbekleri /UK, KU/ işareti ile gösterilebilir: - /KUpn/ *kopın* “hep birlikte, hep birden” (T 16) - /KUT/ *kut* “talih” (O ön 8), vb. **17.** Sözbaşı ünsüzü öndamaksıl /k/ ise /kö/ ve /kü/ ses öbekleri /Ük, KÜ/ işareti ile gösterilebilir: - /kÜrtg/ *kört(ü)g* “gördünüz” (O ön 7) - /kÜLkn/ *köläk(i)n* “gölcüğü ile” (T 15...
  - `Ata 2011, s. 120` (eslesen: _KOPıN_)
    > ...masıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T 36 SONTAKI İsim, isim soylu sözler ve sıfat-fiilerden sonra gelerek bağlı olduğu bu türden sözler ile cümlenin öteki öğeleri arasında zaman, mekân, yön, tarz, benzerlik, başkalık vb. gibi bakı...


## TY1-G-10#1 - Tonyukuk Yazıtı, Güney 10. satir  (13 kelime)

- **transkripsiyon:** `KeLÜRTüM : ÖK : TÜRK : BODuNuG : ÖTüKeN : YiRKE : BeN : ÖZüM : BİLGE : TONYUKUK : ÖTüKeN : YiRiG : KONMıŞ`
- **kelime karsiliklari:** GETİRDİM : HEP : TÜRK : BOYLARININI : ÖTÜKEN : YERİNE : BEN : ÖZÜM : BİLGE : TONYUKUK : ÖTÜKEN : YERE : KONMUŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRK BODuNuG ÖTüKeN_)
    > ...şilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğ...
  - `Tekin 1998, s. 44` (eslesen: _BeN ÖZüM BİLGE_)
    > ...uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük alp ermiş. Öngre Kıtariyda, birye Tabgaçda, kurya kurdınta, yırya Oğuzda eki üç binğ sümüz kelteçimiz bar mu ne?” Ança ötüntüm. (G 8) Kağanlım, ben| özüm, Bilge Tunyukuk ötüntük ötünçümin eşidü berti. “Könglüngçe uduz!” tedi. Kök Öfiğüğ yoğuru Ötüken yışgaru uduztum. İngek kölekin Toğlada Oğuz kelti. (G 9) (Süsi altı bing) ermiş. [[s. 44]] Biz eki bınğ ertimiz. Sünğüşdümiz. Tengri yarlıkadı, yarıydımız; üğüzke tüşdi...
  - `Tekin 1998, s. 5` (eslesen: _ÖK TÜRK_)
    > ...ıtlarında yeni bazı düzeltmeler ve değişiklikler de yapmıştım. [[s. 5]] Bu çalışmaların sonucu olarak yalnız iki büyük Orhon yazıtını konu edinen yeni bir yapıt ortaya çıktı ve bu yapıt TDK tarafından yayımlandı: Orhon Yazıtları, Ankara 1988. Ancak, bu daha çok Türkoloji ile ilgili olanlara hitap eden bilimsel bir yayındı. Az sayıda basılan bu yayın kısa sürede tükendi. Bu arada Prof. Dr. Muharrem Ergin'in Orhun Abideleri adlı küçük popüler yapıtını (İstanbul 1970) da anmak gerekir. [[s. 5]] Bu yapıtta Ergin'in benim AB...
  - `Ergin 1970, s. 13` (eslesen: _ÖK TÜRK_)
    > ...aklaştırırmış. Yaklaştırıp, konduktan sonra, kötü şeyleri o zaman düşünürmüş. | İyi bilgili insanı, iyi cesur insanı yürütmezmiş. Bir insan yanılsa, kabilesi, milleti, akrabasına kadar barındırmazmış. [[s. 13]] Tatlı sözüne, yumuşak ipek kumaşına aldanıp çok çok, Türk milleti, öldün; Türk milleti, öleceksin! Güneyde Çogay ormanına, Tögültün | ovasına konayım dersen, Türk milleti, öleceksin! Orda kötü kişi şöyle öğretiyormuş: Uzak ise kötü mal verir, yakın ise iyi mal verir diyip öyle öğretiyormuş. Bilgi bilmez kişi o sözü...
  - `Tekin 2003, s. 18` (eslesen: _ÖK TÜRK_)
    > ...lik özellikleri bunlar olan bu en eski Türk diyalektine geçen yüzyıl sonlarından beri türlü adlar verilmiştir. W. Radloff Orhon yazıtları dilini baştan beri “Eski Türkçe” (*Alttürkisch*) olarak adlandırmıştır. W. Bang ise “Bilge Han, halkı için birçok yerde *kök Türk* deyimini kullanıyor” gerekçesiyle bu dile “Kök Türkçe” (*Köktürkisch*) adını vermiştir (bk. *Über die köktürkische Inschrift auf der Südseite des Kül-Tägin-Denkmals*, Leipzig 1896, Vorwort). Ne var ki *kök Türk*, daha doğrusu *kök Türük* adı yazıtlarda birço...
  - `Ata 2011, s. 12` (eslesen: _ÖK TÜRK_)
    > ...ikle de hazırlayıp Rus Çarı’na takdim ettiği Sibirya ve Orta boşaltır. Nehir Türkler Asya haritası ile dikkatleri çekmiştir. Bu arada Rusya tarafından yine açısından tarihî önem de Tobolsk’a araştırma yapmak üzere gönderilen Daniel Gottlieb taşır, birçok Türk ve Messerschmidt (1685-1735)’in yanına yardımcı olarak verilmiştir. Moğol devleti bu nehrin Sibirya’da toplamış olduğu bilgi ve gözlemlerle ülkesine dönünce kısa kenarlarında adı Türkiye Türkçesine Asya ve Avrupa’nın Kuzey ve Doğu Kısı...


## TY1-G-10#2 - Tonyukuk Yazıtı, Güney 10. satir  (9 kelime)

- **transkripsiyon:** `TiYiN : eŞiDiP : BiRiYeKİ : BODuN : KURıYaKI : YIRıYaKI : ÖŊReKİ : BODuN : KeLTİ`
- **kelime karsiliklari:** DİYE : İŞİTİP : BERİDEKİ : BOYLARI : GERİDEKİ : YIRIDAKI : ÖNDEKİ : BOYLAR : GELDİ [BİZE KATILDI]
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _ÖŊReKİ BODuN KeLTİ_)
    > ...a yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurt...
  - `Tekin 2003, s. 248` (eslesen: _KURıYaKI_)
    > ...- **kunla-** çalmak, yağmalamak - **kurıdın, kurdın** batıda, batıdan (KT B 1, T 14) - **kurıgaru, kurgaru** batıda, batıya doğru (KT G 2, D 24) - **Kurıkan** etnik ad (**Üç Kurıkan**) (KT D 4, vb.) - **kurıya, kurya** batıda, batıya (T 14, KT K 12, vb.) - **kurıyakı, kuryakı** batıdaki (T 17) - **kurt** kurt, solucan (Toyok 28-29) - **kurtga** yaşlı kadın (IB 13) - **kurugsak** kursak, mide (IB 8) - **kuş** kuş (IB 3, vb.) - **kuşla-** kuş avlamak (IB 43) - **kut** kut, talih, tanrının lutfu - **kutlug** talihli, kutlanm...


## TY1-D-1#1 - Tonyukuk Yazıtı, Doğu 1. satir  (3 kelime)

- **transkripsiyon:** `iKİ : BİŊ : eRTiMiZ`
- **kelime karsiliklari:** [BİZ] İKİ : BİN : İDİK
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _iKİ BİŊ_)
    > ...im ricamı dinlemek lutfunda bulundu. [[s. 44]] “(Orduyu) gönlünce sevk et!” dedi. Kök Öng (ırmağı)nı geçerek (orduyu) Ötüken dağlarına doğru sevk ettim. İngek gölcüğü ile Tola (ırmağın)dan Oğuz'lar (üzerimize) geldi. (G 9) Ordusu (altı bin kişilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerk...
  - `Ergin 1970, s. 38` (eslesen: _iKİ BİŊ_)
    > ...e Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken ormanına doğru sevk ettim. İnek, yük hayvanı ile Toglada | Oğuz geldi. Askeri üç bin imiş. Biz iki bin idik. Savaştık. Tanrı lûtfetti, dağıttık. Nehire düştü. Dağıttığımız, yolda yine öldü hep. Ondan sonra Oğuz tamamiyle geldi. | Türk milletini Ötüken yerine, ben kendim Bilge Tonyukuku ötüken yerine konmuş diye işitip güneydeki millet, batidaki, kuzeydeki, doğ...
  - `Tekin 2003, s. 119` (eslesen: _iKİ BİŊ_)
    > ...9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (ve) kötü durumda idik" (BK D 32) *biz eki bıŋ ärtimiz* "Biz iki bin (kişi) idik" (T 16) *kagan at bunta biz birtimiz* "(Ona) hakan unvanını buruda biz verdik" (KT D 20) *biz az biz* "Biz azız" (O 7) b) Yüklem bağlayıcısı olarak: *bän ança ter män* "Ben şöyle diyorum" (T 37) [s. 120] # s. 120 — TALAT TEKİN *sakınur män* "ya...
  - `Roux, Eski Din, s. 43` (eslesen: _iKİ BİŊ_)
    > ...reliler ile paleo-Asyalıların birlikte yaşaması kültür alışverişine yol açmıştır. Mordv ve Çeremis, yani Fino-ugrik ayinlerin Altaylıların kültürüne sızdığı son zamanlarda Chich-lo tarafından ortaya konmuştur {0.28}. Aslında bu etkileşim tek örnek değildir ve iki bin yıllık olaylara ait izlerle karşılaştığımızda hayretler içinde kalıyoruz; ayrıca bugün Sibirya nüfusunun onda dokuzunun Rus olduğunu da unutmamak gerekir. [[s. 43]] Topraklarının aynı dere cede geniş ve yerli halkın yoğunluğunun düşük olmasına karşın bugün Ka...
  - `Roux, Altay Turklerinde Olum, s. 219` (eslesen: _iKİ BİŊ_)
    > ...arının cenaze töreni geleneklerinin, Orta Asya'nın tarih öncesi (Paleo-asya, Altay veya Hint-Avrupa) geleneklerinin bir devamı olduğunu söyleyebiliriz. [[s. 219]] MÖ üç bin yılına ait höyüklerin kazılarından o dönemde cesetlerin gömüldüğünü öğrenmekteyiz. MÖ iki bin yılında Andoronovo uygarlığında, ceset yakma olayının ortaya çıktığı sanılmaktadır.” Yakma olayı, MÖ 1200 ve 700 yılları arasında Karasuk döneminde, Minusinsk havzasında (Kırgızların sonradan yaşayacağı Yenisey vadisi) yeniden karşımıza çıkmaktadır. MÖ 700 ve...
  - `Tasagil, s. 64` (eslesen: _iKİ BİŊ_)
    > ...lunda kalabalık bir Çin Ordusu Tardu'yla sa vaşmak üzere yola çıktı. [[s. 64]] Tou-lan-Tardu ittifakında Batı Gök-Türk kağanı olmasına rağmen, Tardu'nun ön planda olduğu görülmektedir. Yang Su, Tardu'nun akınla rını ilk anda durdurduğu için Çin imparatorundan iki bin top ipek ve yüz chin sarı alUn mükâfat aldı. Bu orduda bulunan bütün kumandanlar. Gök-Türklerin aniden kaçıp giden süvarileri için bir plan yaptı. Bu plana göre savaş arabaları ve süvariler birlikte hareket edecekti. [[s. 64]] Neticede geyik boynuzu gibi düze...


## TY1-D-1#2 - Tonyukuk Yazıtı, Doğu 1. satir  (4 kelime)

- **transkripsiyon:** `BİZ : iKİ : SÜ : BOLDI`
- **kelime karsiliklari:** BİZ : İKİ : SÜ : OLDU[K]
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _BİZ iKİ_)
    > ...ttiğim ricamı dinlemek lutfunda bulundu. [[s. 44]] “(Orduyu) gönlünce sevk et!” dedi. Kök Öng (ırmağı)nı geçerek (orduyu) Ötüken dağlarına doğru sevk ettim. İngek gölcüğü ile Tola (ırmağın)dan Oğuz'lar (üzerimize) geldi. (G 9) Ordusu (altı bin kişilik) imiş. Biz iki bin (kişi) idik. Savaştık. Tanrı buyurdu, (Oğuz'ları) bozguna uğrattık; ırmağa düştüler. Bozguna uğrayanları da yollarda ölüp kaldılar. Ondan sonra Oğuz'ların hepsi geldi, (boyun eğdi). [s. 45] 86 TUNYUKUK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken...
  - `Ergin 1970, s. 38` (eslesen: _BİZ iKİ_)
    > ...Bilge Tonyukukun arz ettiği maruzatımı işiti verdi. Gönlünce sevk et didi. M U H A R R E M E R G İ N [s. 38] O R H U N Â B İ D E L E R İ Kök Öngü çiğneyerek Ötüken ormanına doğru sevk ettim. İnek, yük hayvanı ile Toglada | Oğuz geldi. Askeri üç bin imiş. Biz iki bin idik. Savaştık. Tanrı lûtfetti, dağıttık. Nehire düştü. Dağıttığımız, yolda yine öldü hep. Ondan sonra Oğuz tamamiyle geldi. | Türk milletini Ötüken yerine, ben kendim Bilge Tonyukuku ötüken yerine konmuş diye işitip güneydeki millet, batidaki, kuzeydeki,...
  - `Tekin 2003, s. 119` (eslesen: _BİZ iKİ_)
    > ...BK G 9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (ve) kötü durumda idik" (BK D 32) *biz eki bıŋ ärtimiz* "Biz iki bin (kişi) idik" (T 16) *kagan at bunta biz birtimiz* "(Ona) hakan unvanını buruda biz verdik" (KT D 20) *biz az biz* "Biz azız" (O 7) b) Yüklem bağlayıcısı olarak: *bän ança ter män* "Ben şöyle diyorum" (T 37) [s. 120] # s. 120 — TALAT TEKİN *sakınur män*...
  - `Roux, Eski Din, s. 318` (eslesen: _iKİ SÜ_)
    > ...ırmaları Dergisi, sayı 6, 1990; İstanbul, 1991, s. 85-91. - "Islamiyetten Önceki Türk Sanatında Hayvan Mücadele Sahneleri," Sanat Tarihinde ikonogra.fik Araştırmalar: Güneş inal'a Armağan, Ankara, 1993, s. 1 17-141. [[s. 318]] - "Nagyazentmiklos Hazinesindeki İki Sürahi Üzerinde Bulunan Yırtıcı Kuş (Kartal/ Garuda) Figürlü Kompozisyonların Türk Sanatı ve İkonografisindeki Yeri," Selçuk Üniversitesi, Selçuklu Araştırmaları Merkezi Prof. Dr. Yılmaz Ônge Armağanı, Konya, 1993, s. 319-337. - "Kültigin'in Baş Heykelinin İkono...
  - `Roux, Altay Turklerinde Olum, s. 43` (eslesen: _iKİ SÜ_)
    > ...ir ayırım yapılmaksızın mutluluk anlamında kullanılmıştır.” Bizi en çok ilgilendiren, göndermeler yaptığımız ,* Kotwicz tarafından iyice incelenen Cengiz Han belgelerinin ilk formülleridir. Metinlerin kökenini ve kullanış amacını göz önüne alırsak, yalnızca iki su'yu ayırt edebiliriz. [[s. 43]] Biri, hükümdarlık süren imparatora ait olan önünde nitelemesi bulunmayan su'dur; ” diğeriyse, büyük bir olasılıkla bizzat Cengiz Han'a ait olan ulu alev-ruh denen yeke su |u| zali'dir.'” Bu, hiçbir şekilde, Moğol döneminde yaşa...
  - `Ogel C1, s. 161` (eslesen: _iKİ SÜ_)
    > ...de okumak istemektedir (Aynı esr., 8s. 82, n. 29). Ayrıca Kononov, bu yer adını niçin böyle okuduğunu da, inandırıcı bir delille göstermemektedir. [[s. 161]] Kaşgarlı Mahmud'a göre, Kuyas şehrinden çıkan ve İli nehrine dökülen Ulug-Keyken ve Kiçig-Keyken adlı iki su vardır (Kaşgari, terc., III, 8s. 175). Fakat İli bölgesi Üç-o k'ların yaylasıdır. Reşideddin'e göre Kakiyan ise, Boz-ok bölgesinde, yani batıda bulunuyordu. 1? Cüveyni, s. 41. [s. 162] OĞUZ DESTANI 1S1 böyle tercüme edilmiştir !*, Türkçede “or-” kökü ile b...
