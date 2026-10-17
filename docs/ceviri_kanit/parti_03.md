# Ceviri istek paketi 3 - Orhun cumlecikleri

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


## KT-G-12#2 - Kül Tigin Yazıtı, Güney 12. satir  (4 kelime)

- **transkripsiyon:** `aŊaR : aDıNÇIG : BaRK : YaRaTURTuM`
- **kelime karsiliklari:** ONA : ADINÇI : BARK : YARATTIRDIM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _aŊaR aDıNÇIG BaRK_)
    > ...u yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s. 32]] |..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ ıttı. Anğar adınçığ bark yarat<ıt>dım. İçin taşın adınçığ bediz ulrturtJum. (Taş tokıtdım, köfngülteki slJabımın (Çurturtum. ............... | (K 15) On-Ok oğlınga Tatıfiğa teği bunı körü biling. Bengglü) taş tokıtdım nun | tokıtdım, bititdim. Bulnı körüp ança biling. [[s. 32]] Ol) t...
  - `Olmez 2017, s. 97` (eslesen: _aŊaR aDıNÇIG BaRK_)
    > ...nra gelen belirtme durumu eki **sımadı** < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındak...
  - `Tekin 1998, s. 21` (eslesen: _aDıNÇIG BaRK YaRaTURTuM_)
    > ...kı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körü...


## KT-G-12#3 - Kül Tigin Yazıtı, Güney 12. satir  (5 kelime)

- **transkripsiyon:** `İÇİN : TaŞIN : aDıNÇIG : BeDiZ : URTURTuM`
- **kelime karsiliklari:** İÇİNE : DIŞINA : ADINÇI : BEZE : VURDURDUM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İÇİN TaŞIN aDıNÇIG BeDiZ URTURTuM_)
    > ...de (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl....
  - `Olmez 2017, s. 97` (eslesen: _İÇİN TaŞIN aDıNÇIG BeDiZ URTURTuM_)
    > ...* < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırd...
  - `Tekin 1998, s. 10` (eslesen: _İÇİN TaŞIN_)
    > ...ğunda da ses tekrarı, yani alliteration vardır: âçsık tosık “acıkma doyma”, ağış barım “mal mülk”, arkış tirkiş “kervan kafile”, eb bark “ev bark”, eçüm apam “atalarım ve dedelerim, ecdadım”, ıda taşda “ormanda ve kayalıklarda, dağda bayırda”, [[s. 10]] için taşın “içini dışını”, il törü “devlet ve töreler”, iş küç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli...
  - `Tekin 2003, s. 219` (eslesen: _İÇİN TaŞIN_)
    > ...m. Aŋar körü biliŋ! Türük matı bodun, bäglär, bödkä körügmä bäglär gü yaŋıltaçı siz? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol...
  - `Roux, Altay Turklerinde Olum, s. 242` (eslesen: _İÇİN TaŞIN_)
    > ...erin seçiminde sergilendiği gibi, isLisnai nitelikteydi. [[s. 242]] Tabut, çoğu kez son derece basit bir şekilde yapılmaktaydı: Heftalitlerde kalın tahtadan yapılmıştı.''” Tu-polarda da aynı malzemeden yapılmış ve cesedin “ağaçlar üzerinde sergilenmek dağlara için” taşınmasına yarıyordu;''* Yi-leularda, birbirine geçirilmiş dallardan yapılmıştır.” De Guignes, bu şatafat ve süsleme farklarının, ölülerin güçleri ve zenginlikleriyle ilişkili olduğunu kaydetmekte haklıydı. '*? [[s. 242]] Mezar üzerindeki toprak yığınları, tumulu...
  - `Tanyeri, s. 24` (eslesen: _İÇİN TaŞIN_)
    > ...tadır. 5. İkilemeler: Yazıtlarda anlatımı güçlü ve etkili kılarak güzelleştirmek için eş, yakın ya da karşıt anlamlı ikilemeler sıkça kullanılmıştır. “Açsık tosık” (açlık tokluk), “arkış tirkiş” (kervan kafile), “eb bark” (ev bark), “iş küç” (iş güç), “için taşın” (içini dışını) ve “tünli künli” (geceli gündüzlü), yazıtlardaki söz varlığının ikilemeler açısından ne kadar zengin olduğunu göstermektedir. 6. Deyimler: Orhun Yazıtları'nın dili, deyimler açısından da oldukça zengindir. “Adak kamşat-” (gerçek anlamda...


## KT-G-12#4 - Kül Tigin Yazıtı, Güney 12. satir  (5 kelime)

- **transkripsiyon:** `TaŞ : TOKITDıM : KÖŊüLTeKİ : SaBıMıN : URTURTuM`
- **kelime karsiliklari:** TAŞ : DOKUTTUM : GÖNÜLDEKİ : SAVIMI : [TAŞA] VURDURDUM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TaŞ TOKITDıM KÖŊüLTeKİ SaBıMıN_)
    > ...r) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme...
  - `Tekin 2003, s. 145` (eslesen: _TaŞ TOKITDıM_)
    > ...öpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä* (*nä* zamirinin eşitlik durumu): - *[kaŋım] kagan eçim kagan olortokınta tört buluŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve a...
  - `Ata 2011, s. 122` (eslesen: _TaŞ TOKITDıM_)
    > ...zu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar...
  - `Olmez 2017, s. 97` (eslesen: _TaŞ TOKITDıM_)
    > ...anı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırdım. İçini dışın...
  - `Tekin 2003, s. 219` (eslesen: _SaBıMıN URTURTuM_)
    > ...glär gü yaŋıltaçı siz? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol [...tokıt]dım. Bu bitig bitigmä atısi Yol(l)ug Tigin b[itidim]. [...
  - `Ata 2011, s. 115` (eslesen: _TaŞ TOKITDıM_)
    > ...lanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme:...


## KT-G-12#5 - Kül Tigin Yazıtı, Güney 12. satir  (11 kelime, TAS KIRIGI)

- **transkripsiyon:** `OL --- : ON : OŊ : OGLIŊA : TaTIŊA : TeGİ : BUNI : KÖRÜ : BİLiŊ : BeŊGÜ : TaŞ`
- **kelime karsiliklari:** OL --- : ON : ONG : OĞLUNA : TATINA : DEĞİN : BUNU : GÖRÜP : BİLİN : BENGÜ : TAŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TaTIŊA TeGİ BUNI KÖRÜ_)
    > ...ğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefi...
  - `Olmez 2017, s. 97` (eslesen: _KÖRÜ BİLiŊ BeŊGÜ TaŞ_)
    > ...*[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırdım. İçini dışını muhteşem şekilde süslettim, taşlar yonturttum, aklımdaki sözleri yazdırttım. ... On Okların oğullarına, yab...
  - `Tekin 2003, s. 122` (eslesen: _BUNI KÖRÜ BİLiŊ_)
    > ...a benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) çok iyidir" (IB 5, vb.) *añıg yablak ol* "(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; on...


## KT-G-13#1 - Kül Tigin Yazıtı, Güney 13. satir  (15 kelime, TAS KIRIGI)

- **transkripsiyon:** `TOKITDıM : BU --- İL : eRSeR : aNÇA : --- M : TaKI : eRİG : YiRTE : İRSeR : aNÇA : eRiG : YiRTE : BeŊGÜ : TaŞ : TOKITDıM`
- **kelime karsiliklari:** DOKUTTUM : BU --- İL : İSE : ANCA : --- M : TAKİ : ERİŞİLİR : YERDE : İSE : ANCA : ERİŞİLİR : YERDE : BENGÜ : TAŞ : DOKUTTUM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _eRSeR aNÇA TaKI eRİG_)
    > ...sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlı...
  - `Ata 2011, s. 122` (eslesen: _eRSeR aNÇA TaKI eRİG_)
    > ...tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Ta...
  - `Ata 2011, s. 115` (eslesen: _eRSeR aNÇA TaKI eRİG_)
    > ...ğlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga T...


## KT-G-13#2 - Kül Tigin Yazıtı, Güney 13. satir  (5 kelime)

- **transkripsiyon:** `BİTiDDiM : aNI : KÖRüP : aNÇA : BİLiŊ`
- **kelime karsiliklari:** YAZDIRDIM : ONU : GÖRÜP : ANCA : BİLİN
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNI KÖRüP aNÇA BİLiŊ_)
    > ...raturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin...
  - `Tekin 2003, s. 122` (eslesen: _aNI KÖRüP aNÇA BİLiŊ_)
    > ...ıg ädgü ol* "(Bu fal) çok iyidir" (IB 5, vb.) *añıg yablak ol* "(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädi...
  - `Olmez 2017, s. 99` (eslesen: _aNI KÖRüP aNÇA BİLiŊ_)
    > ...işi iyelik eki - +ņa: üçüncü kişi iyelik ekinden sonra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı ya...


## KT-G-13#3 - Kül Tigin Yazıtı, Güney 13. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `OL : TaŞ : --- DıM`
- **kelime karsiliklari:** O : TAŞ : --- DIM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _OL TaŞ_)
    > ...z urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta bir...
  - `Tekin 2003, s. 189` (eslesen: _OL TaŞ_)
    > ...arında geçer. *kün orto yütürüp tün orto kanta nägüdä bul-gay ol* "Gün ortasında yitirip geceyarısı nerede bulacak?" IB 24) *kan(ı)gı nälök öl-gäy ol* "(Onun) gözde sevgilisi niçin ölecekmiş?" (IB 57) *könäki nälök toŋ-gay* "Kovası niçin donacakmış?" (IB 57) *ol taşıg özi üzä t[?ut]sar kopka ut-gay* "O (değerli) taşı kendi üzerinde tutarsa her şeyden kazançlı çıkar" (Toyok 16-18) ## Birleşik Eylem Biçimleri **444.** Birleşik eylem biçimleri yüklem görevinde bir eylem sıfatı ile onu izleyen çekimli *är-* yardımcı eylemi...
  - `Olmez 2017, s. 99` (eslesen: _OL TaŞ_)
    > ...ncü kişi iyelik ekinden sonra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı yazan yeğen...
  - `Ogel C2, s. 101` (eslesen: _OL TaŞ_)
    > ...Türk masallarında, çok sık olarak görülür. Bu motifi, tüm olarak şiir halinde söylenen, Sayın-Batır destanında görüyoruz: Yaşlı bir kadın, Kozu-Körpös'e, şöyle bir öğüd veriyordu: **Atı niledo - nunu bırakarak git. Özün dahi don değiştirip (kubulup), bir kel ol (taşşa bol)”: Burada biraz da kötü elbise giyme ile kel donu, birbirine karıştırılıyordu*?*. [[s. 101]] Yiğit yaşlı kadına, “sıkışırsam, senin gelmen için atımın yelesinden bir kıl yakarım, diye de bir söz veriyor.Bu da, Anadolu masallarının, tanınmış bir motifidi...
  - `Radloff, s. 255` (eslesen: _OL TaŞ_)
    > ...söylemezler). Bizim şamanlarımız (yani Sa gay kamları) ayin yaparken okudukları dualarda bu dağın adı nı zikrederler. Diyorlar ki bu Karatag' da taştan yapılmış beşik bulunmuş, fakat şimdi gören yok. [[s. 255]] O beşik bizim kadimki atala rımızın beşiği imiş (ol tas pezik purungı pisting übekkilerding pezigi pal tur). Karadağ'ın bu yanında Padın denilen bir dağ vardır. Bu dağ Miras suyunun ·bu tarafında, Taştıp ırmağının başlarında biraz ötededir. Bu dağın yamaçlarında Sibicin oyma ğının ataları yaşamışlardır. Bu oymağın...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 158` (eslesen: _OL TaŞ_)
    > ...oklatsssı £ o, ok atmak istedi", Başkası da böyledir ; [y. 158] GULE - SLM atsar - mak) « le ötmedir ". $5lDİ-751)| oz öttün ötsedi » o, delikten öte geçmek istedi", gli İULÜİ ötser - ötsemek). Herhangi bir Şeyden öte geçmek te böyledir, > Lİ) #tsedi: e Nİ ol taşığ itsedi - o, taşı itmek istedi", Başkası da böyledirş (JULAN - SLAŞ itser - itsemek). ŞUT açsadı: "ELİ er kapuğ açsadı - adam kapıyı açmak istedi", Her şeyi açmak istemek te böyledir; GUL - La açsar - açsamak). [[y. 158]] 3» Le içsedi: " 5» Lu Lea Ni ol su...


## KT-G-13#4 - Kül Tigin Yazıtı, Güney 13. satir  (5 kelime)

- **transkripsiyon:** `BU : BİTiG : BİTiGME : aTISI : YOLUGTİGiN`
- **kelime karsiliklari:** BU : YAZIYI : YAZAN : ATISI : YOLUĞTİGİN
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _BU BİTiG BİTiGME aTISI_)
    > ...ngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı...
  - `Olmez 2017, s. 99` (eslesen: _BİTiG BİTiGME aTISI_)
    > ...onra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı yazan yeğeni Yollug Tėgin." **tokitdım** < *tokı-t-d...
  - `Tekin 2003, s. 168` (eslesen: _BU BİTiG_)
    > ...iz, batıya gidenleriniz (batıya) gittiniz" (BK D 19-20) [s. 168] # s. 168 — TALAT TEKİN *içik-igmä içikdi bodun boltı* "Bağımlı olmak isteyenler bağımlı oldu, halk oldu" (BK D 37) *bädiz yarat-ıgma* "süsleme sanatçıları (ressam ve heykeltraşlar)" (KT K 13) *bu bitig biti-gmä atısi yol(l)ug tigin* "Bu yazıları yazan (Prens Kül'ün) yeğeni Prens Yollug" (KT G 13) *udı-gma+g odguru* "uyuyanları uyandırarak" (IB 20), vb. ## {-(X)r} ve {-Ar} Ekli Eylem Sıfatı **406.** "Yapar, eder" anlamındaki bu eylem sıfatı seyrek olarak n...
  - `Ata 2011, s. 138` (eslesen: _BU BİTiG_)
    > ...er-igme teŋri “devlet veren Tanrı” KT D25 bödke kör-ügme begler gü yaŋıltaçı siz “Bu dönemde tabi olan beyler, (siz) yanılacak mısınız” KT G11 yeti yüz kişig uduz-ugma ulugı şad erti “yedi yüz kişiyi sevk eden büyükleri Şad idi” T 4-5 bu bitig biti-gme atısı yollug tigin “bu yazıları yazan, yeğeni Yolluğ Tigin” KT G13 bediz yarat-ıgma “süsleme yaratanlar (ressam ve heykeltıraşlar)” KT K13 4. -(I)glI sıfat-fiil eki eylemi yapanı ifade eder. Üç büyük yazıtta geçmeyen bu ek, Ir...
  - `Ata 2011, s. 131` (eslesen: _BU BİTiG_)
    > ...eden” anlamı verir: il ber-igme teŋri “devlet veren Tanrı” KT D25 bödke kör-ügme begler gü yaŋıltaçı siz “Bu dönemde tabi olan beyler, (siz) yanılacak mısınız” KT G11 yeti yüz kişig uduz-ugma ulugı şad erti “yedi yüz kişiyi sevk eden büyükleri Şad idi” T 4-5 bu bitig biti-gme atısı yollug tigin “bu yazıları yazan, yeğeni Yolluğ Tigin” KT G13 bediz yarat-ıgma “süsleme yaratanlar (ressam ve heykeltıraşlar)” KT K13 4. [[s. 131]] -(I)glI sıfat-fiil eki eylemi yapanı ifade eder. Üç büyük yazıtta geçmeyen bu ek, Irk Bitig’de şu...
  - `Olmez 2017, s. 63` (eslesen: _BİTiGME_)
    > ...ıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen b...


## KT-D-1#1 - Kül Tigin Yazıtı, Doğu 1. satir  (12 kelime)

- **transkripsiyon:** `ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ`
- **kelime karsiliklari:** ÜSTTE : GÖK : TANRI : ALTTA : YAĞIZ : YER : KILINDIĞINDA : İKİSİ : ARASINDA : KİŞİ : OĞLU : KILINMIŞ
- **kanit:**
  - `Ogel C1, s. 290` (eslesen: _ÜZE KÖK TeŊRİ aSRA YaGıZ YeR KILıNDUKDA iKİN aRA KİŞİ OGLI KILıNMıŞ_)
    > ...ı. Göktürk yazıtlarında bu sıralama şöyle yapılıyor: Bu metin üzerinde, dünyanın yaratılışı ile ilgili bölümümüzde de durmuştuk. [[s. 290]] Fakat bu metin öyle önemli bir metindir ki, bir çok meselelerde ancak onun tuttuğu ışıkla doğru yolda yürüyebiliriz : “Üze Kök Tengri, asra yağız yer kılındukda, ikin ara kişi oğlı kılınmış. Kişi oğlunda üze, eçüm apam Bumın Kağan, İstemi Kağan olurmış”. Yani, “Yukarıdaki mavi gök, aşağıdaki yağız yer yaratıldığında, ikisi arasında kişi oğlu, yani insanlar yaratılmış. Kişi oğlunun üzerine de büyük amcalarım Bumın Kağan ve İstemi Kağan (hükümdar)...
  - `Tekin 1998, s. 1` (eslesen: _ÜZE KÖK TeŊRİ aSRA_)
    > ...[s. 1] Üze kök tengri, asra yağız yer kılıntukda, ekin ara kişi oğlu kılınmış. rl CANA “ “Üstte mavi gök, altta yağız yer yaratıldığında, ikisinin arasında insanoğulları yaratılmış.” Bu sözler bilinen en eski Türkçe yazılı anıtlara, Moğolistan'da Orhon Irmağı kıyısında bulunan laş üstü...
  - `Ata 2011, s. 47` (eslesen: _ÜZE KÖK TeŊRİ aSRA_)
    > ...eminde yani Bumın Kağan’ın ilk devleti kurmasından yaklaşık 180 yıl sonra dikilen Köl Tigin Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış ba...
  - `Olmez 2017, s. 102` (eslesen: _ÜZE KÖK TeŊRİ aSRA_)
    > ...ürük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır törög : tört : buluŋdakı ....................dim : üze : kök teŋri asra yagız yėr kılıntokda ėkin ara kişi oglı kılınmış* "(D 1) İlahî göğün yarattığı Türk Bilge Kağan, sözüm: babam Türk Bilge Kağan ... ... Altı Sir, Tokuz Oğuz, keçe (?) çadırlı beyleri, halkı [... ...] Türk Tanrısı ... ... (D 2) üstüne hakan olarak tahta çıktım...
  - `Ata 2011, s. 40` (eslesen: _ÜZE KÖK TeŊRİ aSRA_)
    > ...e yani Bumın Kağan’ın ilk devleti kurmasından yaklaşık 180 yıl sonra dikilen Köl Tigin Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıg...
  - `Tanyeri, s. 24` (eslesen: _ÜZE KÖK TeŊRİ aSRA_)
    > ...u Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parçalarını ifade etmektedir. “Üze kök Tengri, asra yaġız yer” veya “Çıgany bodunuġ bay kıltım, az bodunuġ üküş kıltım.” gibi ifadelerde görüldüğü üzere, eşit ögeli birimlerle koşutluk sağlanarak anlatım güçlü ve etkili kılınmıştır. Yukarıda sıralanan maddeler altında verilen bilgiler, yazıtlar döneminde...


## KT-D-1#2 - Kül Tigin Yazıtı, Doğu 1. satir  (10 kelime)

- **transkripsiyon:** `KİŞİ : OGLıNDA : ÜZE : eÇİM : aPAM : BUMıN : KaGaN : İSTeMİ : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** KİŞİ : OĞLUNUNDA : ÜZE[RİNE] : EÇÜM : APAM : BUMIN : KAĞAN : İSTEMİ : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aPAM BUMıN KaGaN İSTeMİ_)
    > ...ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kir...
  - `Ata 2011, s. 47` (eslesen: _aPAM BUMıN KaGaN İSTeMİ_)
    > ...n Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikis...
  - `Olmez 2017, s. 56` (eslesen: _aPAM BUMıN KaGaN İSTeMİ_)
    > ..."Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18); *temir kapıgka tegi ertimiz anta yanturtumuz* "Temir Kapıg'a kadar ulaştık. (Orduyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygu...
  - `Ata 2011, s. 40` (eslesen: _aPAM BUMıN KaGaN İSTeMİ_)
    > ...ıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında,...
  - `Ogel C1, s. 290` (eslesen: _aPAM BUMıN KaGaN İSTeMİ_)
    > ...ilgili bölümümüzde de durmuştuk. [[s. 290]] Fakat bu metin öyle önemli bir metindir ki, bir çok meselelerde ancak onun tuttuğu ışıkla doğru yolda yürüyebiliriz : “Üze Kök Tengri, asra yağız yer kılındukda, ikin ara kişi oğlı kılınmış. Kişi oğlunda üze, eçüm apam Bumın Kağan, İstemi Kağan olurmış”. Yani, “Yukarıdaki mavi gök, aşağıdaki yağız yer yaratıldığında, ikisi arasında kişi oğlu, yani insanlar yaratılmış. Kişi oğlunun üzerine de büyük amcalarım Bumın Kağan ve İstemi Kağan (hükümdar) olarak tahta çıkmış.” [[s. 290]] Başka yerlerde...


## KT-D-1#3 - Kül Tigin Yazıtı, Doğu 1. satir  (3 kelime)

- **transkripsiyon:** `OLuRıPaN : TÜRK : BODuNıŊ`
- **kelime karsiliklari:** OTURUP : TÜRK : BOYLARININ
- **kanit:**
  - `Olmez 2017, s. 103` (eslesen: _TÜRK BODuNıŊ_)
    > ...ı: 3) - Satır 1: Runik - Satır 2: Runik - Satır 3: Runik - Satır 4: Runik (satır başında "........." ve satır içinde "......" ile gösterilen bozuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine...
  - `Tekin 1998, s. 42` (eslesen: _BODuNıŊ_)
    > ...ıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2...
  - `Tekin 2003, s. 146` (eslesen: _BODuNıŊ_)
    > ...törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle oğluma alıverdim” (BK K 9) - *bunça matı bäglär kaŋım kaganka ärtiŋü ti mag kıltı* “Bunca sadık beyler babam hakana pek çok övgü yağdırdılar” (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* “(Babam Hakan), Türk beylerini ve halkını pek çok alkışladı ve övdü” (BK G 15) **337.** *takı* “daha” < *\*tak-* “takmak”: [s. 147] # s. 147 — ORHON TÜRKÇESİ GRAMERİ *täŋri bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş* “Kut...
  - `Ata 2011, s. 47` (eslesen: _BODuNıŊ_)
    > ...oğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İ...
  - `Olmez 2017, s. 63` (eslesen: _BODuNıŊ_)
    > ...bonta urtum* "hata edip öleceğinizi de buraya kazıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim...
  - `Ata 2011, s. 40` (eslesen: _BODuNıŊ_)
    > ...üzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmı...


## KT-D-1#4 - Kül Tigin Yazıtı, Doğu 1. satir  (6 kelime)

- **transkripsiyon:** `İLİN : TÖRÜSİN : TUTA : BİRMiŞ : İTİ : BİRMiŞ`
- **kelime karsiliklari:** İLİNİ : TÖRESİNİ : TUTU : VERMİŞ : [DÜZEN] EDİ : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _İLİN TÖRÜSİN TUTA BİRMiŞ İTİ BİRMiŞ_)
    > ...i yüğerü körti. Bödke özüm olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntukda, ekin ara kişi oğlı kılınmış). [[s. 33]] (D 3) Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük (bloduniüğ ilin törüsin tuta birmiş, iti birmiş. Tört bulung kop yağı ermiş. Sü sülepen, tört bulufüğdakı bodunuğ (kop almış, kop baz kılmış). Başlığığ (yülküntürmiş, tizliğliğ sökürmiş. İlgerü Kadırkan yışka teği, kirü) (D 4) Temir Kapığka teği konturmış. Ekin ara, idi oksuz Kök Türük iti ança olurur ermi...
  - `Ata 2011, s. 47` (eslesen: _İLİN TÖRÜSİN TUTA BİRMiŞ İTİ BİRMiŞ_)
    > ...2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım de...
  - `Ata 2011, s. 40` (eslesen: _İLİN TÖRÜSİN TUTA BİRMiŞ İTİ BİRMiŞ_)
    > ...[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde ataları...


## KT-D-2#1 - Kül Tigin Yazıtı, Doğu 2. satir  (5 kelime)

- **transkripsiyon:** `TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ`
- **kelime karsiliklari:** DÖRT : TARAF : HEP : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KOP YaGI eRMiŞ_)
    > ...ğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş,...
  - `Ata 2011, s. 47` (eslesen: _KOP YaGI eRMiŞ_)
    > ...urulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İ...
  - `Olmez 2017, s. 56` (eslesen: _KOP YaGI eRMiŞ_)
    > ...duyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygur kanım tutulmış* "Uygur hanım tutulmuş" (Tes B 4) **Gelecek zaman *-DAçI* ekiyle kurulur:** Gelecek zamanın az sayıda örnekte, özellikl...
  - `Ata 2011, s. 40` (eslesen: _KOP YaGI eRMiŞ_)
    > ...nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (v...


## KT-D-2#2 - Kül Tigin Yazıtı, Doğu 2. satir  (7 kelime)

- **transkripsiyon:** `SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ`
- **kelime karsiliklari:** SÜ : SÜLEYİP : DÖRT : TARAFDAKI : BOYLARI : HEP : ALMIŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KOP aLMıŞ_)
    > ...efiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç...
  - `Tekin 2003, s. 144` (eslesen: _KOP aLMıŞ_)
    > ...ü* "pek, pek çok", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1)...
  - `Ata 2011, s. 47` (eslesen: _KOP aLMıŞ_)
    > ...tılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak,...
  - `Olmez 2017, s. 103` (eslesen: _KOP aLMıŞ_)
    > ...österilen bozuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenle...
  - `Ata 2011, s. 40` (eslesen: _KOP aLMıŞ_)
    > ...anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturara...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...


## KT-D-2#3 - Kül Tigin Yazıtı, Doğu 2. satir  (3 kelime)

- **transkripsiyon:** `KOP : BaZ : KILMıŞ`
- **kelime karsiliklari:** HEP : BAZ : KILMIŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KOP BaZ KILMıŞ_)
    > ...yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erin...
  - `Tekin 2003, s. 144` (eslesen: _KOP BaZ KILMıŞ_)
    > ...k çok", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop...
  - `Ata 2011, s. 47` (eslesen: _KOP BaZ KILMıŞ_)
    > ...üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının de...
  - `Olmez 2017, s. 103` (eslesen: _KOP BaZ KILMıŞ_)
    > ...zuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanl...
  - `Ata 2011, s. 40` (eslesen: _KOP BaZ KILMıŞ_)
    > ...: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkını...


## KT-D-2#4 - Kül Tigin Yazıtı, Doğu 2. satir  (4 kelime)

- **transkripsiyon:** `BaŞLıGıG : YÜKüNDüRMiŞ : TİZLiGiG : SÖKÜRMiŞ`
- **kelime karsiliklari:** BAŞLIYI : YÜKÜNDÜRMÜŞ : DİZLİYİ : [DİZ] ÇÖKTÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. An...
  - `Tekin 2003, s. 220` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...i oglı kılınmış]. (D 3) Kişi oglınta üzä äçüm apam İştämi Kagan, Bumın Kagan olormış. Olorupan Türük [b]odunıŋ ilin törösin tuta birmiş, iti birmiş. Tört buluŋ kop yagı ärmiş. Sü süläpän tört buluŋdakı bodunug kop almış, kop baz kılmış. Başlıgıg yüküntürmiş, tizligig sökürmiş. İlgärü Kadırkan yışka tägi, kirü (D 4) Tämir Kapıgka tägi konturmiş. Ekin ara idi oksuz Kök Türük iti ança olorur ärmiş. Bilgä kagan ärmiş, alp kagan ärmiş. Buyrukı < yämä > bilgä ärmiş ärinç, alp ärmiş ärinç. Bägläri yämä boduni yämä tüz ärmiş. Anı üçün ili...
  - `Ata 2011, s. 47` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenlemiş...
  - `Olmez 2017, s. 103` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönder...
  - `Ata 2011, s. 40` (eslesen: _TİZLiGiG SÖKÜRMiŞ_)
    > ...ndukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini, yasalarını yönetmiş düzenl...
  - `Tekin 1998, s. 11` (eslesen: _BaŞLıGıG_)
    > ...mak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren a...


## KT-D-2#5 - Kül Tigin Yazıtı, Doğu 2. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `İLGeRÜ : KaDıRKaN : YİŞKA : TeGİ : KİRÜ : TeMiRKaPıGKA : TeGİ : KONDuRMıŞ : iKİN : aRA ---`
- **kelime karsiliklari:** İLERİ : KADIRKAN : YIŞA : DEĞİN : GERİ[DE] : DEMİRKAPIYA : DEĞİN : KONDURMUŞ : İKİSİ : ARASINA ---
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İLGeRÜ KaDıRKaN YİŞKA TeGİ_)
    > ...e eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tu...
  - `Ata 2011, s. 51` (eslesen: _İLGeRÜ KaDıRKaN YİŞKA TeGİ_)
    > ...g hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig t...
  - `Olmez 2017, s. 103` (eslesen: _İLGeRÜ KaDıRKaN YİŞKA TeGİ_)
    > ...pam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönderip dört taraftaki halkları hep el...
  - `Ata 2011, s. 44` (eslesen: _İLGeRÜ KaDıRKaN YİŞKA TeGİ_)
    > ...eyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg...


## KT-D-3#1 - Kül Tigin Yazıtı, Doğu 3. satir  (6 kelime)

- **transkripsiyon:** `İDİ : OKSuZ : KÖK : TÜRK : aNÇA : OLuRUR`
- **kelime karsiliklari:** İDİ : OKSUZ : GÖK : TÜRK : ANCA : OTURUR
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İDİ OKSuZ KÖK_)
    > ...örlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfg...
  - `Tekin 2003, s. 149` (eslesen: _İDİ OKSuZ KÖK_)
    > ...rasından geçmek, içinden geçmek”; krş. MK *argula-* “arasından geçmek”): - *üzä kök täŋri asra yagız yer kılıntokda ekin ara kişi oglı kılınmiş* “Yukarıda mavi gök aşağıda kara toprak yaratıldığında ikisinin arasında insanoğlu yaratılmış” (KT D 1) - *ekin ara idi oksuz kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç boy örgütü olmayan Doğu Türklerini örgütleyerek öylece [s. 150] # s. 150 — TALAT TEKİN hüküm sürerlermiş" (BK D 14) *bu türük bodun ara yarıklıg yagıg yältürmädim* "Bu Türk halkı içinde zırhlı düşm...
  - `Ata 2011, s. 51` (eslesen: _İDİ OKSuZ KÖK_)
    > .... Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kag...
  - `Olmez 2017, s. 57` (eslesen: _İDİ OKSuZ KÖK_)
    > ...gidiyordunuz." (KT G 9); *kėyik yėyü tavışgan yėyü olorur ertimiz* "Yaban hayvanları yiyerek, tavşan yiyerek yaşayıp gidiyorduk." (T 8) **Sürekli geçmiş zaman (II): -(y)(X)r ermiş** *amtı beglerime tėr ermiş* "Ey huzurumdaki beylerim dermiş." (O B 7); *idi oksuz kök türük (ėti) ança olorur ermiş* "dağınık halde öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış ert...
  - `Ata 2011, s. 44` (eslesen: _İDİ OKSuZ KÖK_)
    > ...da I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bo...


## KT-D-3#2 - Kül Tigin Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `eRMiŞ : BİLGE : KaGaN : eRMiŞ`
- **kelime karsiliklari:** İMİŞ : BİLGE : KAĞAN : İMİŞ
- **kanit:**
  - `Ata 2011, s. 51` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...nleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç...
  - `Olmez 2017, s. 106` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...burada yer zarfi) [s. 106] # s. 104 — Mehmet Ölmez (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu)...
  - `Ata 2011, s. 44` (eslesen: _eRMiŞ BİLGE KaGaN eRMiŞ_)
    > ...Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisr...


## KT-D-3#3 - Kül Tigin Yazıtı, Doğu 3. satir  (3 kelime)

- **transkripsiyon:** `aLP : KaGaN : eRMiŞ`
- **kelime karsiliklari:** ALP : KAĞAN : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...lerinden biridir. [[s. 10]] Eşit öğeli birimlerden oluşan cümle parçaları ile birleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) k...
  - `Ata 2011, s. 51` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...lattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçi...
  - `Olmez 2017, s. 106` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...s. 104 — Mehmet Ölmez (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki...
  - `Ata 2011, s. 44` (eslesen: _aLP KaGaN eRMiŞ_)
    > ...nlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin t...


## KT-D-3#4 - Kül Tigin Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `BUYRUKI : YiME : BİLGE : eRMiŞ`
- **kelime karsiliklari:** BUYRUĞU : YİNE : BİLGE : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _BİLGE eRMiŞ_)
    > ...rleşik sıra cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta...
  - `Ata 2011, s. 51` (eslesen: _BİLGE eRMiŞ_)
    > ...n gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk e...
  - `Olmez 2017, s. 63` (eslesen: _BİLGE eRMiŞ_)
    > ...uyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyi...
  - `Ata 2011, s. 44` (eslesen: _BİLGE eRMiŞ_)
    > ...ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı...
  - `Tekin 2003, s. 157` (eslesen: _BUYRUKI_)
    > ......Saray kumandanları, Sebig Kül İrkin önderliğinde, ve (diğer) kumandanlar..." (BK G 14) **373.** *yämä* "ve, dahi, ... da" (< *\*yäm-* "ilave etmek, eklemek"; krş. Mo. *neme-* ay.; bk. Poppe 1960, s. 38): 1. Tek başına: *bilgä kagan ärmiş, alp kagan ärmiş; buyrukı yämä bilgä ärmiş ärinç, alp ärmiş ärinç* "Akıllı hakanlar imiş, yiğit hakanlar imiş; kumandanları da akıllı imişler şüphesiz, yiğit imişler şüphesiz" (KT D 3) *kagani ölti, buyrukı bägläri yämä ölti* "Hakanları öldü, kumandanları ve beyleri de öldü" (KT D 19,...
  - `Olmez 2017, s. 106` (eslesen: _BUYRUKI_)
    > ...z (basılı sayfa numarası 106) [Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede da...


## KT-D-3#5 - Kül Tigin Yazıtı, Doğu 3. satir  (3 kelime)

- **transkripsiyon:** `eRiNÇ : aLP : eRMiŞ`
- **kelime karsiliklari:** GERÇEK : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 10` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre) inisi eçi...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın...
  - `Olmez 2017, s. 106` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...[Runik yazı satırı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede dağınık halde Kök Türkler öylecene yaşıyo...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ aLP eRMiŞ_)
    > ...ekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınm...


## KT-D-3#6 - Kül Tigin Yazıtı, Doğu 3. satir  (7 kelime)

- **transkripsiyon:** `eRiNÇ : BeGLeRİ : YiME : BODuNI : YiME : TÜZ : eRMiŞ`
- **kelime karsiliklari:** GERÇEK : BEĞLERİ : YİNE : BOYLARI : YİNE : DÜZ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...lmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bun...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk...
  - `Olmez 2017, s. 106` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...rı] 4 [Runik yazı satırı] [Runik yazı satırı] [Runik yazı satırı] *D 4. temir kapığka : tegi : konturmuş : ėkin ara : idi oksuz : kök tür[?]k : ėti ança : olorur ermiş : bilge : kagan ermiş : alp kagan : ermiş : buyrukı (yeme) bilge : ermiş erinç : alp ermiş erinç: begleri yeme : bodunı yeme tüz ermiş anı üçün : ėlig : ança tutmış erinç ėlig tutup törög : ėtmış : özi ança : kergek bolmuş* "batıda Temir Kapıg (geçid)ine kadar yerleştirmiş. (Bu) ikisinin arasındaki bölgede dağınık halde Kök Türkler öylecene yaşıyorlarmış. Bilge...
  - `Ata 2011, s. 44` (eslesen: _eRiNÇ BeGLeRİ_)
    > ...de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç bil...
  - `Tekin 1998, s. 19` (eslesen: _BeGLeRİ_)
    > ...] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötük...
  - `Olmez 2017, s. 21` (eslesen: _BeGLeRİ_)
    > ...n'ın doğusundan Kore'ye kadar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca d...


## KT-D-3#7 - Kül Tigin Yazıtı, Doğu 3. satir  (5 kelime)

- **transkripsiyon:** `aNI : ÜÇÜN : İLiG : aNÇA : TUTMıŞ`
- **kelime karsiliklari:** ONUN : İÇİN : İLİ : ANCA : TUTMUŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...iş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan...
  - `Tekin 2003, s. 122` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123] # s. 123 — ORHON...
  - `Ata 2011, s. 51` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...etirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olur...
  - `Ata 2011, s. 44` (eslesen: _aNI ÜÇÜN İLiG aNÇA TUTMıŞ_)
    > ...öyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç...


## KT-D-3#8 - Kül Tigin Yazıtı, Doğu 3. satir  (7 kelime)

- **transkripsiyon:** `eRiNÇ : İLiG : TUTıP : TÖRÜG : İTMiŞ : ÖZİ : aNÇA`
- **kelime karsiliklari:** GERÇEK : İLİ : TUTUP : TÖRE : [DÜZEN] ETMİŞ : ÖZÜ : ANCA
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TÖRÜG İTMiŞ ÖZİ aNÇA_)
    > ...rü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi ta...
  - `Ata 2011, s. 51` (eslesen: _TÖRÜG İTMiŞ ÖZİ aNÇA_)
    > ...temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş...
  - `Ata 2011, s. 44` (eslesen: _TÖRÜG İTMiŞ ÖZİ aNÇA_)
    > ...tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … [[s. 44]] anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç yablak kagan olurmış erinç buyrukı yeme biligsiz ermiş erinç yabl...
