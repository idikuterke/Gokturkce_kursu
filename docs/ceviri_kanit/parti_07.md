# Ceviri istek paketi 7 - Orhun cumlecikleri

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


## KT-D-20#3 - Kül Tigin Yazıtı, Doğu 20. satir  (3 kelime)

- **transkripsiyon:** `SİŊiLiM : KONÇuYUG : BİRTiMiZ`
- **kelime karsiliklari:** SİNGİLİM : KONÇUYU : VERDİK
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BİRTiMiZ_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşlar...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiMiZ_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti*...
  - `Ata 2011, s. 112` (eslesen: _BİRTiMiZ_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövdele...
  - `Tekin 1998, s. 24` (eslesen: _SİŊiLiM_)
    > ...nları (ve) beyleri de öldü. On-Ok halkı ıztırap gördü. Atalarımızın dedelerimizin zaptettiği yurt sahipsiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança it...
  - `Ata 2011, s. 105` (eslesen: _BİRTiMiZ_)
    > ...s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. [[s. 105]] +(I)n: İyelik ekli gövdeler üze...


## KT-D-20#4 - Kül Tigin Yazıtı, Doğu 20. satir  (4 kelime)

- **transkripsiyon:** `ÖZİ : YaŊıLDI : KaGaNI : ÖLTİ`
- **kelime karsiliklari:** ÖZÜ : YANILDI : KAĞANI : ÖLDÜ
- **kanit:**
  - `Ergin 1970, s. 16` (eslesen: _YaŊıLDI KaGaNI_)
    > ...ğanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] Bars bey idi. Kağan adım burda biz verdik. Küçük kız kardeşim prensesi verdik. Kendisi yanıldı, kağanı öldü, milleti cariye, kul oldu. Kögmenin yeri, suyu sahipsiz kalmasın diye Az, Kırgız kavmini düzene sokup geldik. Savaştık. ..... ilini | O R H U N Â B İ D E L E R İ [s. 17] M U H A R R E M E R G İ N geri verdik. Doğuda Kadırkan ormanım aşarak milleti ö...
  - `Tekin 1998, s. 23` (eslesen: _KaGaNI ÖLTİ_)
    > ...(D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş...
  - `Tekin 2003, s. 120` (eslesen: _KaGaNI ÖLTİ_)
    > ...le oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (KT G 2) *bän saŋa nä ayayin* "Ben sana (başka) ne diyeyim?" (T 32) *biziŋä yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı hareket [s. 121] # s. 121 — ORHON TÜRKÇESİ GRAMERİ ettikleri için hakanları öldü" (BK D 16) *alp är biziŋä tägmiş ärti* "Cesur erler bize saldırmıştı" (KT D 0) 5. Bulunma-çıkma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki...
  - `Ata 2011, s. 122` (eslesen: _KaGaNI ÖLTİ_)
    > ...lduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (...
  - `Ata 2011, s. 115` (eslesen: _KaGaNI ÖLTİ_)
    > ...“yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor...
  - `Tekin 1998, s. 46` (eslesen: _YaŊıLDI_)
    > ...oğru, atları yedeğe alarak, yaya vaziyette ağaçlara tutuna tutuna (askerleri) dağa ağdırdım. Öncü askerleri (K 2) (karları) yoğururcasına yürütüp ormanla kaplı doruğu aştık. (Ondan sonra) yuvarlanarak indik. On gecede yandaki engeli dolanarak gittik. Kılavuz yanıldı ve boğazlandı. [[s. 46]] Sıkılıp kağan “Sürün atları!” demiş. (K 3) Anı ırmağına vardık..... O ırmak boyunca yol aldık. Tırmanmak için (askerleri atlardan) indiriyorduk. Atları ağaçlara bağlıyorduk. Gece gündüz dört nala gittik. Kırgız'ları uykuda iken bastık...


## KT-D-20#5 - Kül Tigin Yazıtı, Doğu 20. satir  (4 kelime)

- **transkripsiyon:** `BODuNI : KÜŊ : KUL : BOLDI`
- **kelime karsiliklari:** BOYLARI : CARİYE : KUL : OLDU
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BODuNI KÜŊ KUL_)
    > ...alarımızın dedelerimizin zaptettiği yurt sahipsiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtum...
  - `Tekin 2003, s. 211` (eslesen: _BODuNI KÜŊ KUL_)
    > ...**479.** Cümlede normal sözcük düzeni şöyledir: özne + yüklem. - *katun / yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *özi / yaŋıltı* "Kendisi ihanet etti" (KT D 20) [s. 211] # s. 211 — ORHON TÜRKÇESİ GRAMERİ - *kagani / ölti* "Hakanı öldü" (KT D 20) - *boduni / küŋ kul boltı* "Halkı cariye ve köle oldu" (KT D 20), vb. Tümleç (nesne, vb.), normal olarak yüklemden önce ve özneden sonra gelir: - *oguz yagı / ordug / basdı* "Düşman Oğuz karargâhı bastı" (T 31) Bazı durumlarda, özellikle öznenin vurgulanması istendiğinde, cüml...
  - `Tekin 2003, s. 194` (eslesen: _KÜŊ KUL_)
    > ...iş* "kervanlar" (KT G 8) - *at kü* "ad ve ün, ad ve san" (KT D 25) - *bag bodun* "boylar ve kabileler federasyonu" (Uyuk-Tarlak 2) - *bäglär bodun* "beyler ve halk" (KT G 10, BK K 8) - *äb bark* "ev bark" (BK D 32) - *kız koduz* "kızlar ve kadınlar" (T 48) - *küŋ kul* "cariye ve erkek köle" (KT D 20) - *kurt koŋuz* "börtü böcek" (Toyok 28-29) - *yabız yablak* "sefil ve perişan" (KT D 26) - *yok çıgañ* "yok yoksul" (KT G 10), vb. İki ya da daha çok addan oluşan ad öbeklerinde iyelik ve durum ekleri [s. 195] # s. 195 — OR...
  - `Ogel C1, s. 642` (eslesen: _KÜŊ KUL_)
    > ...krşl. Küldrâ-/ Küld(ü)râ-, 401. Kül-Tegin, 550. Külüg, unvanı, 350. Kümüş-Han, 394, Tegin, 399. Künçe/Künçâ, sözü, 243. Künçek, adı, 243. Küne, sözü, 213. Küneş, k.a., 261. Küngey d., 527. Kün-delen, b.a., 213, Kün-Han, efs. de, 148, 221, 527, 529. Kün-Kulak, 540, bk. Dev. Künin-Körkli Hatun, 268. [[s. 642]] Kür-Han, 60-2, 151, 156 v.d., 221, 287, 473, bk. Gur-Han. Kür-Kalık, 151. Kür-tag, 151, 172. Kürk : Devin k.ü, 60, 577; 8 k., 60. Küsenç, sözü, 227; küsen-mek, a. yer. Küykenek/Küyköntei, kuş, 359....
  - `Tekin 1998, s. 19` (eslesen: _BODuNI_)
    > ...GİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış...
  - `Tekin 2003, s. 107` (eslesen: _BODuNI_)
    > ...6.** /+(n)Iŋ/: - *yigän silig bäg+iŋ kädimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların a...


## KT-D-20#6 - Kül Tigin Yazıtı, Doğu 20. satir  (11 kelime)

- **transkripsiyon:** `KÖGMeN : YİR : SUB : İDSiZ : KaLMaZUN : TİYiN : aZ : KIRKıZ : BODuNıG : YaRaTıP : KeLTiMiZ`
- **kelime karsiliklari:** KÖGMEN : YERİ : SUYU : ISSIZ : KALMASIN : DİYE : AZ : KIRGIZ : BOYLARINI : YARATIP : GELDİK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaLMaZUN TİYiN aZ KIRKıZ_)
    > ...psiz Olmasın diye Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, kün...
  - `Tekin 1998, s. 10` (eslesen: _YİR SUB_)
    > ...lesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, b...
  - `Tekin 2003, s. 80` (eslesen: _YİR SUB_)
    > ...ler. Yalın gövdeler *ab* "av", *taş* "dış", *käl-* "gelmek" gibi daha fazla çözümlenemeyen gövdelerdir. Türeme gövdeler yalın gövdelerden ya ekleme ya da birleştirme yolu ile elde edilen gövdelerdir: *abla-* "avlamak", *taşık-* "çıkmak", *kälür-* "getirmek", *yir-sub* "bölge, ülke" (*yir* "yer, toprak", *sub* "su, ırmak"). Orhon Türkçesi biçimbilgisinin önemli özelliklerinden biri yakın kavramları belirten ad ve eylem gövdelerinin kesin olarak birbirinden ayırt edilmesidir. Eşsesli ad ve eylem gövdeleri son derece azdır:...
  - `Ata 2011, s. 138` (eslesen: _YİR SUB_)
    > ...letsiz kalmış (ve) kağansız kalmış halk” KT D13 yir sayu bar-mış bodun “her yere gitmiş halk” BK D22 er-miş bar-mış edgü eliŋe kentü yaŋıltıg “gelişmiş ilerlemiş (senin) iyi devletine kendin yanlış yaptın” KT D23 eçümüz apamız tut-mış yir sub “atalarımızın dedelerimizin elde ettiği topraklar” KT D19 131 [s. 139] 7. -tAçI gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halk...
  - `Tekin 1998, s. 23` (eslesen: _TİYiN aZ_)
    > ...atdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya...
  - `Ata 2011, s. 131` (eslesen: _YİR SUB_)
    > ...mış bodun “devletsiz kalmış (ve) kağansız kalmış halk” KT D13 yir sayu bar-mış bodun “her yere gitmiş halk” BK D22 er-miş bar-mış edgü eliŋe kentü yaŋıltıg “gelişmiş ilerlemiş (senin) iyi devletine kendin yanlış yaptın” KT D23 [[s. 131]] eçümüz apamız tut-mış yir sub “atalarımızın dedelerimizin elde ettiği topraklar” KT D19 [s. 132] 7. -tAçI gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “...


## KT-D-20#7 - Kül Tigin Yazıtı, Doğu 20. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `SÜŊüŞDüMüZ : --- : İLİN`
- **kelime karsiliklari:** SÜNGÜŞDÜK : --- : İLİNİ
- **kanit:**
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Ata 2011, s. 108` (eslesen: _SÜŊüŞDüMüZ_)
    > ...i, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “...


## KT-D-21#1 - Kül Tigin Yazıtı, Doğu 21. satir  (9 kelime)

- **transkripsiyon:** `YaNA : BİRTiMiZ : iLGeRÜ : KaDıRKaN : YıŞıG : aŞA : BODuNıG : aNÇA : KONDURTuMıZ`
- **kelime karsiliklari:** YANA : VERDİK : İLERİ : KADIRKAN : YIŞI : AŞIP : BOYLARI : ANCA : KONDURDUK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _YaNA BİRTiMiZ iLGeRÜ KaDıRKaN_)
    > ...an ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, O...
  - `Tekin 1998, s. 21` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...e eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış eri...
  - `Ata 2011, s. 51` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...g hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç...
  - `Olmez 2017, s. 103` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...pam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp düzenlemişler. (O zamanlar) dört taraf hep düşmanmış. Orduyu gönderip dört taraftaki ha...
  - `Ata 2011, s. 44` (eslesen: _iLGeRÜ KaDıRKaN_)
    > ...eyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin [[s. 44]] ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig...
  - `Ogel C2, s. 385` (eslesen: _YıŞıG aŞA_)
    > ...etini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (tuşı)), Er-Kamış*ın altından sal...


## KT-D-21#2 - Kül Tigin Yazıtı, Doğu 21. satir  (10 kelime)

- **transkripsiyon:** `aNÇA : İTDiMiZ : KURıGaRU : KeŊÜ : TaRMaNKA : TeGİ : TÜRK : BODuNıG : aNÇA : KONDuRTuMıZ`
- **kelime karsiliklari:** ANCA : [DÜZEN] ETDİK : GERİDE : KENGÜ : TARMANA : DEĞİN : TÜRK : BOYLARINI : ANCA : KONDURDUK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _aNÇA İTDiMiZ KURıGaRU KeŊÜ_)
    > ...ingilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinme...
  - `Tekin 1998, s. 11` (eslesen: _KURıGaRU_)
    > ...gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpü...
  - `Tekin 2003, s. 62` (eslesen: _KURıGaRU_)
    > ...*türük* (genellikle) ## Sonseste Ünlü Düşmesi **96.** Sonseste ünlü düşmesi şu örneklerde meydana gelmiş olmalıdır: - *birdin* "güneyden", *biryä* "güneyde", *birgärü* "güneye doğru" sözcüklerinin kökü *bir* "güney" < *biri - *kurgaru* (KT D 24, G 2, 3) ~ *kurıgaru* "batıya doğru" (KT D 8, 12, 17, 21, vb.) < *kurı "geri, batı" - *yırgaru* "kuzeye doğru", *yırd(ı)nta* "kuzeyden" sözcüklerinin kökü *yır* "kuzey" (KT, BK, T) ~ *ir* (MÇ D 7, 11) < *yırı - *kül tigin* "Prens Kül" (KT, BK), *kül çor* "Kül Çor" (BK G 13) ~ *kü...
  - `Ata 2011, s. 52` (eslesen: _KURıGaRU_)
    > ...rmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam tör...
  - `Olmez 2017, s. 21` (eslesen: _KURıGaRU_)
    > ...geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, ku...
  - `Tekin 2003, s. 138` (eslesen: _TaRMaNKA_)
    > ...kurgaru... tämir kapıgka tägi sülädim* "Batıda Demir Kapı'ya kadar sefer ettim" (BK K 3) [s. 138] # s. 138 — TALAT TEKİN *ilgärü [barıgma] bardıg kurgaru barıgma bardıg* "Doğuya gidenleriniz gittiniz, batıya gidenleriniz gittiniz" (BK D 19-20) *kurgaru käŋü tarmanka tägi...* "Batıda Kengü Tarman'a kadar..." (KT D 21) **301.** *birgärü* "güneye doğru, güneyde" < *\*biri* "bu yan, güney": *birgärü kün ortosıŋaru* "güneyde gün ortasına (kadar)..." (KT G 2) *birgärü tokuz ärsinkä tägi sülädim* "Güneyde Dokuz Ersin'e kadar s...


## KT-D-21#3 - Kül Tigin Yazıtı, Doğu 21. satir  (8 kelime)

- **transkripsiyon:** `aNÇA : iTDiMiZ : OL : ÖDKE : KUL : KULLuG : BOLMıS : eRTİ`
- **kelime karsiliklari:** ANCA : [DÜZEN] ETTİK : O : DEVİRDE : KUL : KULLU : OLMUŞ : İDİ
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _aNÇA iTDiMiZ OL ÖDKE_)
    > ...n yir sub idisiz kalI)mazun tiyin Az Kırkız bodunuğ iltip) yaratıp keltimliz sJünğüşldümiz......... yana birtimiz. İlgerü) Kadırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin...
  - `Tekin 1998, s. 24` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin)...
  - `Ata 2011, s. 137` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (ve) yiğit kişileri ilerletmez imiş” KT G6 Uzak Geçmiş Zaman mIş ekli anlatılan geçmiş zaman eki üzerine er- yardımcı fiili getirilerek yapılır: 1. -mIş erti (belirsiz geçmiş zamanın hikâyesi) ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu b...
  - `Ata 2011, s. 130` (eslesen: _OL ÖDKE KUL KULLuG_)
    > ...p kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (ve) yiğit kişileri ilerletmez imiş” KT G6 Uzak Geçmiş Zaman mIş ekli anlatılan geçmiş zaman eki üzerine er- yardımcı fiili getirilerek yapılır: 1. -mIş erti (belirsiz geçmiş zamanın hikâyesi) ol ödke kul kullug küŋ küŋlüg bol-mış er-ti “O zamanda köleler köle sahibi, cariyeler hizmetçi sahibi olmuş idi” BK D18 katun yok bol-mış er-ti anı yoglatayın tedi “Hatun vefat etmişti, onun [[s. 130]] cenaze törenini yaptırayım, dedi” BK D18 türük bodun atı yok bolu bar-mış er...


## KT-D-21#4 - Kül Tigin Yazıtı, Doğu 21. satir  (4 kelime)

- **transkripsiyon:** `KÜŊ : KÜŊLiG : BOLMıS : eRTİ`
- **kelime karsiliklari:** CARİYE : CARİYELİK : OLMUŞ : İDİ
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


## KT-D-21#5 - Kül Tigin Yazıtı, Doğu 21. satir  (4 kelime)

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


## KT-D-21#6 - Kül Tigin Yazıtı, Doğu 21. satir  (4 kelime)

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


## KT-D-22#1 - Kül Tigin Yazıtı, Doğu 22. satir  (3 kelime)

- **transkripsiyon:** `aNÇA : KaZGaNMıŞ : İTMiŞ`
- **kelime karsiliklari:** ANCA : KAZANILMIŞ : [DÜZEN] EDİLMİŞ
- **kanit:**
  - `Tekin 1998, s. 36` (eslesen: _aNÇA KaZGaNMıŞ_)
    > ...dırkan yılşığ aşa) blodJunuğ ança kontur (tumız, ança itdimiz). Kurığaru (D 18) Kengğü Tarbanka teği Türük bodunuğ ança kontur|tJumız, ança itdimiz. Ol ödke kul kulluğ, küfiğ küüğlüğ bolmiş erti. [[s. 36]] İnisi feçlisin bilmez erti, oğlı kafiğın bilmez erti. Ança kazganmış, ança itmiş ilimiz (törümiz etti. Türük, Oğuz beğleri boldun, eşid! Üze tefiğri basmlasar, asra) yer telinmeser, (D 19) Türük bodun, ilinğin törüğin kem artatı udaçı (ertJi? Türük bodun, ertin, ökün! Küreğüügin üçün, iğidmiş <bilge> kağanınğa, ermiş barlmış...
  - `Tekin 2003, s. 145` (eslesen: _aNÇA KaZGaNMıŞ_)
    > ...*bunça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä*...
  - `Ata 2011, s. 120` (eslesen: _aNÇA KaZGaNMıŞ_)
    > ...fı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış...
  - `Ata 2011, s. 113` (eslesen: _aNÇA KaZGaNMıŞ_)
    > ...ı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) ha...
  - `Tekin 1998, s. 24` (eslesen: _KaZGaNMıŞ_)
    > ...iz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edg...
  - `Tekin 1998, s. 12` (eslesen: _İTMiŞ_)
    > ...n başlıca düşmanları güneyde Çinliler, doğuda Kıtaylar yani Moğollar, kuzeyde de Oğuzlardır. Türkler de kuvvetlerini doğal olarak güneyde Çin sınırına, doğuda Kıtay sınırına, batıda batı sınırına, kuzeyde de Oğuz sınırına yığmışlar, yani orduyu dört tarafa dağıtmışlardır. [[s. 12]] Bu üç düşman Türk kağanlığına karşı birleşip birlikte saldırmayı planlayınca Tunyukuk sınırlardaki bu kuvvetleri merkezde toplamanın uygun olacağını düşünmüş ve Öz içi taşın tutmış teğ biz “(Biz) kendi iç (kuvvetlerimiz) ile dışarısını tutmuş...


## KT-D-22#2 - Kül Tigin Yazıtı, Doğu 22. satir  (3 kelime)

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


## KT-D-22#3 - Kül Tigin Yazıtı, Doğu 22. satir  (5 kelime)

- **transkripsiyon:** `TÜRK : OGuZ : BeGLeRİ : BODuN : eŞiDiŊ`
- **kelime karsiliklari:** TÜRK : OĞUZ : BEĞLERİ : BOYLARI : İŞİTİN
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _OGuZ BeGLeRİ BODuN eŞiDiŊ_)
    > ...n yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yany...
  - `Ata 2011, s. 77` (eslesen: _OGuZ BeGLeRİ BODuN eŞiDiŊ_)
    > ...kılmış başlıgıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!”...
  - `Ata 2011, s. 70` (eslesen: _OGuZ BeGLeRİ BODuN eŞiDiŊ_)
    > ...lmış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. [[s. 70]] Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-19)...


## KT-D-22#4 - Kül Tigin Yazıtı, Doğu 22. satir  (12 kelime)

- **transkripsiyon:** `ÜZE : TeŊRİ : BaSMaSaR : aSRA : YİR : TeLiNMeSeR : TÜRK : BODuN : iLiŊiN : TÖRÜŊiN : KiM : aRTaTI`
- **kelime karsiliklari:** ÜSTTE : TANRI : BASMASA : ALTTA : YER : DELİNMESE : TÜRK : BOYLARI : [SENİN] İLİNİ : TÖRENİ : KİM : DAĞITIP
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _ÜZE TeŊRİ BaSMaSaR aSRA_)
    > ...urtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan k...
  - `Ata 2011, s. 77` (eslesen: _ÜZE TeŊRİ BaSMaSaR aSRA_)
    > ...ş tizligig sökürmiş. “Dört bucak hep düşman imiş. Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-19)....
  - `Ata 2011, s. 70` (eslesen: _ÜZE TeŊRİ BaSMaSaR aSRA_)
    > ...ıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. [[s. 70]] Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-19). [[s. 70]] Bu kahraman...


## KT-D-22#5 - Kül Tigin Yazıtı, Doğu 22. satir  (5 kelime)

- **transkripsiyon:** `UDAÇI : eRTİ : TÜRK : BODuN : eRTiN`
- **kelime karsiliklari:** YIKACAK : İDİ? : TÜRK : BOYLARI : İDİN
- **kanit:**
  - `Olmez 2017, s. 59` (eslesen: _UDAÇI eRTİ TÜRK_)
    > ...tuta bėrti* "yer (öyle) emretti" (MÇ D 2); [s. 59] # s. 059 — Köktürkçe Dersleri (basılı sayfa 61) *yėnçü ügüz keçe temir kapıgka tegi süledim* "Sır Derya'yı geçip Temir Kapıg'a kadar sefer ettim" (KT G 4) **-I :** *türük bodun ėliŋin töröŋin kem artatı udaçı erti* "Türk halkı, ülkeni ve yasalarını kim bozabilir ki!" (BK D 19) **-U :** *turu ölü yorıyur ertiŋ* "yarı ölü yarı diri (her yere) gidiyordunuz" (KT G9); *ıgaç tutunu agturtum* "ağaçlara tutunarak (askerleri) tırmandırdım" (T 25); *küçlüg alp kaganımda adrılu b...
  - `Tekin 1998, s. 24` (eslesen: _UDAÇI eRTİ_)
    > ...ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü b...
  - `Ata 2011, s. 77` (eslesen: _UDAÇI eRTİ_)
    > ...taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-19). Bu kahramanlık ifadeleri, Türk milletinin sonsuza kadar yaşama...
  - `Olmez 2017, s. 51` (eslesen: _UDAÇI eRTİ_)
    > ...imlerden sonra görülür. Birinci kişi iyelik eki almış sözcüklerden sonra: *meniŋ savımın sımadı* "benim sözümü kırmadı" İkinci kişi iyelik eki almış sözcüklerden sonra: [s. 51] # s. 051 — Köktürkçe Dersleri (basılı sayfa 53) *ėliŋin töröŋin kem artatı [udaçı erti]* "devletini ve yasalarını kim bozabilecekti?" Üçüncü kişi iyelik eki almış sözcüklerden sonra: *evin barımın* "evlerini ve mallarını" *ėlin törösin* "ülkesini, yasalarını" Özellikle 3. kişi belirtme iyelik ekinden sonra belirtme durumu eki almış olan k...
  - `Ata 2011, s. 142` (eslesen: _eRTİ TÜRK_)
    > ...edir olmayı anlatır: yagı bolmış yagı bolup itin-ü yaratın-u u-maduk yana içikmiş “düşman olmuş, düşman olup kendini düzene sokup (iyi) örgütlenememiş yine (Çinlilere) bağımlı olmuş” BK D9 türük bodun iliŋin törügin kem artat-ı u-daçı erti “Türk halkı, senin devletini ve yasalarını kim bozabilecek idi?” BK D19 Açıklama: Bu u- yeterlik fiili bugün sadece Batı Oğuzcasındaki olumsuz çekimlerde yaşamaktadır (kel-ü u-madı > gel-eme-di). 135 [s. 143] Özet Orhun T...
  - `Olmez 2017, s. 57` (eslesen: _eRTİ TÜRK_)
    > ...D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek o...


## KT-D-23#1 - Kül Tigin Yazıtı, Doğu 23. satir  (4 kelime)

- **transkripsiyon:** `ÖKÜN : KÜReGÜŊiN : ÜÇÜN : İGiDMiŞ`
- **kelime karsiliklari:** ÖKÜN : GÜRLÜĞÜN : İÇİN : YEDİRMİŞ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _ÖKÜN KÜReGÜŊiN ÜÇÜN İGiDMiŞ_)
    > ...(erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yir...
  - `Tekin 1998, s. 20` (eslesen: _ÜÇÜN İGiDMiŞ_)
    > ...ğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay...
  - `Tekin 2003, s. 176` (eslesen: _ÜÇÜN İGiDMiŞ_)
    > ...işig küçüg birtökgärü sakın-matı...* "(Türk halkının kendilerine) bunca hizmet ettiğini (hiç) düşünmeden..." (KT D 10) *säkiz oguz tokuz tatar kal-matı kälti* "Sekiz Oğuzlar ve Dokuz Tatarlar eksiksiz (geride hiç kimse kalmadan) geldiler" (MÇ D 3) *antagıŋın üçün igidmiş kaganıŋın sabin al-matin...* "Öyle olduğun için (seni) doyurmuş olan hakanının sözünü dinlemeden (rızasını almadan) her yere gittin" (KT D 8-9) *yämä yıra-matın yagıd[ur är]miş* "Yine çok geçmeden düşman olurmuş" (MÇ D 10) *kalın yagıka kay-matın tägipän...*...
  - `Ata 2011, s. 139` (eslesen: _ÜÇÜN İGiDMiŞ_)
    > ...sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sıfat-fiil eki, eylem adları yapar: küre-gü+ŋ+ün üçün igidmiş bilge kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı...
  - `Olmez 2017, s. 92` (eslesen: _ÜÇÜN İGiDMiŞ_)
    > ...mezsin. Böyle olduğun” antag: isim tabanı (antag < \*anı teg) +(ı)ŋ: teklik ikinci kişi eki +(ı)n: iyelik ekinden sonra gelen belirtme durumu eki [Levha: Köktürk (runiform) harfleriyle basılmış 4 satır metin; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemi...
  - `Ata 2011, s. 132` (eslesen: _ÜÇÜN İGiDMiŞ_)
    > ...üz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eylem adları yapar: küre-gü+ŋ+ün üçün igidmiş bilge kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. [[s. 132]] tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişi...


## KT-D-23#2 - Kül Tigin Yazıtı, Doğu 23. satir  (3 kelime)

- **transkripsiyon:** `BİLGE : KaGaNıŊA : eRMiŞ`
- **kelime karsiliklari:** BİLGİLİ : KAĞANINA : ERMİŞ
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


## KT-D-23#3 - Kül Tigin Yazıtı, Doğu 23. satir  (4 kelime)

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


## KT-D-23#4 - Kül Tigin Yazıtı, Doğu 23. satir  (8 kelime)

- **transkripsiyon:** `YaŊıLDıG : YaBLaK : KİGÜRTüG : YaRaKLıG : KaNDıN : KeLiP : YaNYA : iLTDİ`
- **kelime karsiliklari:** YANILDIN : YAVLAK : KÖTÜLÜK [ETTİN] : KILIÇLI [DÜŞMAN] : NEREDEN : GELİP : [SENİ] YAYIP : İTDİ
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


## KT-D-23#5 - Kül Tigin Yazıtı, Doğu 23. satir  (5 kelime)

- **transkripsiyon:** `SÜŊüGLüG : KaNDıN : KeLiPeN : SÜRE : iLTDİ`
- **kelime karsiliklari:** SÜNGÜLÜ : NEREDEN : GELİP : [SENİ] SÜRÜP : İTDİ
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


## KT-D-23#6 - Kül Tigin Yazıtı, Doğu 23. satir  (7 kelime)

- **transkripsiyon:** `IDUK : ÖTÜKeN : YIŞ : BODuN : BaRDıG : İLGeRÜ : BaRIGMA`
- **kelime karsiliklari:** KUTLU : ÖTÜKEN : YIŞIN : BOYLARI : VARDI : İLERİ : VARAN
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
  - `Roux, Eski Din, s. 150` (eslesen: _ÖTÜKeN YIŞ_)
    > ...tay' da, Turfan çöküntüsünün kuzeyinde bulunmakta ve altının sihirli madde olarak önemi dolayısıyla Altun Kiş, "Altın Orman", "Yüce Orman", "Işıklı Orman" şeklinde adlandırılmaktaydı. Tu kiuların ideolojisini aynen koruyan Maniheizm öncesi Uygurlar sırasıyla, ötüken yiş başi, "Ötüken ormanının yamacı" ve komşu iduk baş, yani "serbest bırakılan" dağın yamacından söz etmektedirler (Tar., satır 17; SU, D, satır 9). Ötüken ağaçlı bir dağdır (bkz. [[s. 150]] K.12; Q.149; 0.78) ve ağaçların varlığının ısrarla belirtilmesi, ağaçlar...


## KT-D-24#1 - Kül Tigin Yazıtı, Doğu 24. satir  (9 kelime)

- **transkripsiyon:** `BaRDıG : KURIGaRU : BaRIGMA : BaRDıG : BaRDUK : YİRDE : eDGÜG : OL : eRiNÇ`
- **kelime karsiliklari:** VARDI : GERİ : VARAN : VARDI : VARDIĞIN : YERDE : İYİ[CE] : O : GERÇEK
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _BaRDıG KURIGaRU BaRIGMA BaRDıG BaRDUK YİRDE eDGÜG OL eRiNÇ_)
    > ...rtin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiy...
  - `Ata 2011, s. 123` (eslesen: _BaRDUK YİRDE eDGÜG OL_)
    > ...ı kaldırdılar şüphesiz” BK D10 anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç “ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamışlar şüphesiz, oğulları babaları gibi yaratılmamışlar şüphesiz” KT D5 barduk yirde edgüg ol erinç “Gittiğin yerde kazancın o şüphesiz” KT D24 116 [s. 124] Özet Orhun Türkçesinde isim çekim eklerini yapı ve işleyiş bakımından tanımak ve açıklamak İsim Çekim Ekleri Çokluk (Topluluk) Ekleri: +lAr, +gUn, +...
  - `Ata 2011, s. 116` (eslesen: _BaRDUK YİRDE eDGÜG OL_)
    > ...nün tepesinde tutup yukarı kaldırdılar şüphesiz” BK D10 anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç “ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamışlar şüphesiz, oğulları babaları gibi yaratılmamışlar şüphesiz” KT D5 barduk yirde edgüg ol erinç “Gittiğin yerde kazancın o şüphesiz” KT D24 [s. 117] Özet Orhun Türkçesinde isim çekim eklerini yapı ve işleyiş bakımından tanımak ve açıklamak İsim Çekim Ekleri Çokluk (Topluluk) Ekleri: +lAr, +gUn, +An, +(X)t İyelik Ekleri: 1. tekil: +(X)m; 1. çoğ...


## KT-D-24#2 - Kül Tigin Yazıtı, Doğu 24. satir  (3 kelime)

- **transkripsiyon:** `KaNıN : SUBÇA : YÜGüRTİ`
- **kelime karsiliklari:** KANIN : SUCA : YÜĞÜRDÜ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaNıN SUBÇA YÜGüRTİ_)
    > ...miş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğü...
  - `Tekin 1998, s. 13` (eslesen: _SUBÇA YÜGüRTİ_)
    > ...rafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine düşman) etmedim” vb. 6. Eski Türk Runik Yazısı Orhon yazıtları, Tü...
  - `Tekin 2003, s. 116` (eslesen: _YÜGüRTİ_)
    > ...par (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı" (KT D 2) *kanıŋ ügüz+çä yügürti* "Kanın ırmak gibi aktı" (BK D 20) *ekinti kün ört+çä kızıp kälti* "(Düşman) ikinci gün alevli ateş gibi kızıp (üzerimize) geldi" (T 39-40) *tirigdäki+ç...
  - `Tekin 1998, s. 11` (eslesen: _KaNıN_)
    > ...) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği...
  - `Ergin 1970, s. 17` (eslesen: _KaNıN_)
    > ...e karşı kendin hata ettin, kötü hale soktun. Silâhlı nereden gelip dağıtarak gönderdi? Mızraklı nereden gelerek sürüp gönderdi. Mukaddes ötüken ormanının milleti, gittin. Doğuya giden, | gittin. Batıya giden, gittin. [[s. 17]] Gittiğin yerde hayrın şu olmalı: Kanın su gibi koştu, kemiğin dağ gibi yattı. Beylik erkek evladın kul oldu, hanımlık kız evladın cariye oldu. Bilmediğin için, kötülüğün yüzünden amcam kağan uçup gitti. Önce Kırgız kağanını balbal olarak diktim. Türk milletinin adı sanı yok olmasın diye, babam kağ...
  - `Tekin 2003, s. 17` (eslesen: _KaNıN_)
    > ...ndamak sızıcıları /g/ ve /g/ ile nöbetleşme eğilimi göstermesi: *bardıŋız* ~ *bardıgız* “gittiniz”, *süŋöküŋ* ~ *süŋöküg* “kemiklerin”, vb.; 5. Adların ilgi durumunun ünsüzlerden sonra {-Iŋ}, ünlülerden sonra da {-nIŋ} ile kurulması: *bilgä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, vb.; 6. Adların çıkma durumu için ayrı bir ek olmaması, bu durumun yer ya da bulunma durumu eki ile kurulması: *oglanıŋız-da* “oğullarınızdan”, *kurıdın-ta* “batıdan”, *tabgaç-da* “Çin’den”, vb. 7...


## KT-D-24#3 - Kül Tigin Yazıtı, Doğu 24. satir  (3 kelime)

- **transkripsiyon:** `SÜŊÜKÜŊ : TaGÇA : YaTDI`
- **kelime karsiliklari:** SÜNGÜN : DAĞCA : YATTI
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
