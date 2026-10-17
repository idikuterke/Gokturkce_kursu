# Ceviri istek paketi 10 - Orhun cumlecikleri

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


## KT-D-34#3 - Kül Tigin Yazıtı, Doğu 34. satir  (6 kelime)

- **transkripsiyon:** `aNI : YaYNıP : TÜRGİ : YaRGUN : KÖLTE : BOZDuMuZ`
- **kelime karsiliklari:** ONU : YAYINIP : TÜRGİ : YARGÜN : GÖLÜNDE : BOZDUK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _TÜRGİ YaRGUN KÖLTE_)
    > ...zırhından (ve) [s. 26] 48 KÜLTİGİN YAZITI rıkınta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlı...
  - `Ergin 1970, s. 19` (eslesen: _TÜRGİ YaRGUN_)
    > ...k ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz. O orduyu orda yok ettik. Ondan sonra Yir Bayırkunun Uluğ Irkini düşman O R H U N Â B İ D E L E R İ [s. 19] M U H A R R E M E R G İ N oldu. Onu dagıtıpp Türgı Yargun Gölünde bozduk. Uluğ İrkin azıcık erle kaçıp gitti. Kül Tigin yirmi altı | yaşında iken Kırgıza doğru ordu sevk ettik. Mızrak batımı karı söküp, Kögmen ormanını aşarak yürüyüp Kırgız kavmini uykuda bastık. Kağanı ile Songa ormanında savaştık. Kül Tigin, Bayır...
  - `Tekin 2003, s. 123` (eslesen: _TÜRGİ YaRGUN_)
    > ...ece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123] # s. 123 — ORHON TÜRKÇESİ GRAMERİ *anı yañıp türgi yargun költä buzdumuz* "Onları dağıtıp Türgi Yargun gölde bozguna uğrattık" (KT D 34) 3. Verme durumu: *aŋar körü biliŋ* "Ona bakın ve öğrenin!" (KT G 11, BK K 8) *aŋar adınç(ç)ıg bark yarat(t)urtum* (KT G 12) = *aŋar adınç(ç)ıg bark yaratı(d)dım* (BK K 1)) "Ona ol...
  - `Ogel C2, s. 424` (eslesen: _TÜRGİ YaRGUN_)
    > ...üşünceler olmalıdırlar. Ancak 11. yüzyıl Türkleri, bunların böyle olduklarına inanıyor ve öyle diyorlardı. [[s. 424]] TÜRKLERİN “GÖL” ANLAYIŞI Göktürk çağındaki göller Göl anlayışı konusunda Türkler, 14 yüzyıldır değişmemişlerdir. Kültegin yazıtı içindeki, “Türgi Yargun köl”, bunların en ünlüsüdür. Yine aynı Göktür k yazıtındaki, “Kara köl*“ adlı gölü de, bunlara katabiliriz. Burası, adını bu gölden alan, bir yer adıdır. Uygur çağındaki göller ve göl eğlenceleri: U y gu r çağında da bu anlayış değişmiyordu. [[s. 424]] Ancak...


## KT-D-34#4 - Kül Tigin Yazıtı, Doğu 34. satir  (6 kelime)

- **transkripsiyon:** `ULuG : İRKiN : aZKIYNA : eRiN : TeZiP : BaRDI`
- **kelime karsiliklari:** ULU : İRKİN : AZICIK : ERLE : TEZİP : VARDI
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _eRiN TeZiP BaRDI_)
    > ...nta yalmasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bi...
  - `Ergin 1970, s. 18` (eslesen: _ULuG İRKiN_)
    > ...gen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz. O orduyu orda yok ettik. Ondan sonra Yir Bayırkunun Uluğ Irkini düşman O R H U N Â B İ D E L E R İ [s. 19] M U H A R R E M E R G İ N oldu. Onu dagıtıpp Türgı Yargun Gölünde bozduk. Uluğ İrkin azıcık erle kaçıp gitti. Kül Tigin yirmi altı | yaşında iken Kırgıza doğru ordu sevk ettik. Mızrak batımı karı söküp, Kögmen...
  - `Tekin 2003, s. 117` (eslesen: _ULuG İRKiN_)
    > ...n açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) *kugu kuş kanatıŋa urup an+ın kalıyu barıpan ögiŋä kaŋıŋa tägürm...
  - `Ata 2011, s. 139` (eslesen: _TeZiP BaRDI_)
    > ...iş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birlikte kaçıp gitti” BK D41 yuyka kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 1...
  - `Ata 2011, s. 132` (eslesen: _TeZiP BaRDI_)
    > ...e kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. [[s. 132]] tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birlikte kaçıp gitti” BK D41 yuyka kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üzgü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. [[s. 132]] -gUçI sıfat-fiil...
  - `Ata 2011, s. 113` (eslesen: _TeZiP_)
    > ...inde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk et” yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +ArU, +rA a. +gArU: Yalın durumdaki isim gövdelerine ulanır: oguz+garu sü taşıkdımız KT K8 “Oğuzlara doğru sefere çıktık” ben eb+gerü tüşeyin T 30 “ben...


## KT-D-34#5 - Kül Tigin Yazıtı, Doğu 34. satir  (3 kelime)

- **transkripsiyon:** `KÖLTİGiN : aLTI : OTuZ`
- **kelime karsiliklari:** KÜLTİĞİN : ALTI : OTUZ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aLTI OTuZ_)
    > ...urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki e...
  - `Tekin 2003, s. 129` (eslesen: _aLTI OTuZ_)
    > ...5), *biş yigirmi* "15" (MÇ D 6), *altı yegirmi* "16" (KT D 31), *yeti yegirmi* "17" (T 49), *säkiz yegirmi* "18" (KT D 32), *tokuz yegirmi* "19" (BK G 9), *bir otuz* "21" (KT D 32), *eki otuz* "22" (BK D 25), *üç otuz* "23" (T 19), *biş otuz* "25" (KT D 18), *altı otuz* "26" (BK D 26), *yiti otuz* "27" (KT K 1), *tokuz otuz* "29" (Miran A 1), *bir kırk* "31" (KT K 2), vb. 2. Yenisey yazıtlarında 80'e kadar olan ara sayıların da aynı biçimde adlandırıldığı görülür: *eki älig* "42" (Tuva I 3), *üç yetm[iş]* "63" (Uyuk-Turan...
  - `Ata 2011, s. 75` (eslesen: _aLTI OTuZ_)
    > ...ır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki o...
  - `Olmez 2017, s. 42` (eslesen: _aLTI OTuZ_)
    > ...aa çıl | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (...
  - `Ata 2011, s. 68` (eslesen: _aLTI OTuZ_)
    > ...ır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki olayl...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...


## KT-D-35#1 - Kül Tigin Yazıtı, Doğu 35. satir  (4 kelime)

- **transkripsiyon:** `YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ`
- **kelime karsiliklari:** YAŞINDA : KIRGIZ : TARAFINA : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YaŞIŊA KIRKıZ TaPA SÜLeDiMiZ_)
    > ...şıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırk...
  - `Tekin 1998, s. 25` (eslesen: _TaPA SÜLeDiMiZ_)
    > ...a törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilk...
  - `Tekin 1998, s. 23` (eslesen: _SÜLeDiMiZ_)
    > ...al tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _SÜLeDiMiZ_)
    > ...yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...
  - `Olmez 2017, s. 45` (eslesen: _SÜLeDiMiZ_)
    > ...n the Origin of the Old Turkic 12-year Cycle", *CAJ*, 48/1. ### Eski Türk Yazıtlarına Göre Türklerde Sayı Sistemi Eski Türk takvimi gibi sayı sistemi de bugünden bir ölçüde farklıdır. Ondalık sayılarda "10"un üzeri bir üst rakam ile ifade edilir: *bėş otuz süledimiz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėt...
  - `Tekin 1998, s. 16` (eslesen: _YaŞIŊA_)
    > ...nimarkalı ünlü dilci (ve sonra türkolog) Vilhelm Thomsen eski Türk runik yazısını çözdü ve Kopenhag Bilimler Akademisi'nin 15 Aralık 1893'te yaptığı özel bir toplantıda Orhon ve Yenisey yazıtlarında kullanılan eski Türk runik alfabesini çözdüğünü tüm bilim dünyasına duyurdu. Thomsen'in eski Türk runik yazısının çözümlenmesi ile ilgili raporu çok geçmeden Akademi bülteninde yayımlandı. 9. [[s. 16]] Yazıtlar Üzerine Yayınlar Eski Türk runik yazısının çözümlenmesi türkologlar arasında büyük bir heyecan yaratmıştı. İlk ola...


## KT-D-35#2 - Kül Tigin Yazıtı, Doğu 35. satir  (12 kelime)

- **transkripsiyon:** `SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ : BODuNuG : UDA : BaSDıMıZ`
- **kelime karsiliklari:** SÜNGÜ : BATIMI [DERİNLİKTE] : KARI : SÖKÜP : KÖGMEN : YIŞI : DOĞA : YÜRÜYÜP : KIRGIZ : BOYLARINI : UYKUDA : BASTIK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KÖGMeN YIŞıG TOGA YORIP_)
    > ..., kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ö...
  - `Tekin 2003, s. 175` (eslesen: _SÜŊÜG BaTıMI KaRıG_)
    > ...uluŋdakı bodunug kop almiş kop baz kılmiş* "Ordular sevkederek dört taraftaki halkları hep almış, hep (kendilerine) bağımlı kılmışlar" (KT D 2) *süŋüglüg kantan käl-ipän sürä eltdi* "Mızraklı (düşman) nereden gelip (seni yerinden yurdundan) sürdü?" (KT D 23) *süŋüg batımi karıg sök-üpän...* "Mızrak boyu karları sökerek..." BK D 26) *tabgaçgı bäglär tabgaç ātin tut-upan tabgaç kaganka körmiş* "Çinlilerin (hizmetine giren Türk) beyleri Çin unvanları alarak Çin imparatoruna tabi olmuşlar" (KT D 7-8) *säläŋä kudı yorı-pan...* "Selenga ı...
  - `Tekin 2003, s. 182` (eslesen: _KIRKıZ BODuNuG UDA_)
    > ...da, äsizim ä, kit-(t)im ök* "Otuz yaşımda, ne yazık, gittim işte!" (Çaa-Höl III 1-2) - *kızıl kanım töküti kara tärim yügürti işig küçüg ber-tim ök* "... kızıl kanımı döktürerek, kara terimi akıtarak çok hizmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devl...


## KT-D-35#3 - Kül Tigin Yazıtı, Doğu 35. satir  (5 kelime)

- **transkripsiyon:** `KaGaNıN : BİRLE : SUŊA : YIŞDA : SÜŊüŞDüMüZ`
- **kelime karsiliklari:** KAĞANI : İLE : SUNGA : YIŞDA : SÜNGÜŞDÜK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KaGaNıN BİRLE_)
    > ...rklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun...
  - `Tekin 2003, s. 150` (eslesen: _YIŞDA SÜŊüŞDüMüZ_)
    > ...ng ovasına kadar sefer ettik" (KT D 17) *bilgä tuñukuk buyla baga tarkan birlä ilteriş kagan boluyın...* "İlteriş Bilge Tunyukuk Buyla Baga Tarkan ile hakan olarak..." (T 6-7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *kaganin birlä soŋa yışda süŋüşdümüz* "Hakanları ile Songa dağında savaştık" (KT D 35) *kaganin birlä soŋa yışda süŋüşdüm* "Hakanları ile Songa dağında savaştım" (BK D 27) *[yı]ta äsiz är iki oglın birlä ölti* "Eyvah! Yazık! Adam iki oğlu ile birlikte öldü" (Uybat II 5) **351.** *kudı* "aşağı,...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNıN_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı y...
  - `Ergin 1970, s. 6` (eslesen: _KaGaNıN_)
    > ...lidir. Doğu ve batı cephelerinin genişliği aşağıda 132, yukarıda 122 santimdir. Güney ve kuzey cepheleri ise aşağıda 46, yukarıda 44 santimdir. [[s. 6]] Âbidenin üstü kemer şeklinde bitmektedir ve yukarı kısımda beş kenarlı olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu c...


## KT-D-35#4 - Kül Tigin Yazıtı, Doğu 35. satir  (4 kelime)

- **transkripsiyon:** `KÖLTİGiN : BaYıRKUNuŊ : aK : aDGIRIG`
- **kelime karsiliklari:** KÜLTİĞİN : BAYIRKUNUN : AK : AYGIRINA
- **kanit:**
  - `Ergin 1970, s. 19` (eslesen: _BaYıRKUNuŊ aK_)
    > ...argun Gölünde bozduk. Uluğ İrkin azıcık erle kaçıp gitti. Kül Tigin yirmi altı | yaşında iken Kırgıza doğru ordu sevk ettik. Mızrak batımı karı söküp, Kögmen ormanını aşarak yürüyüp Kırgız kavmini uykuda bastık. Kağanı ile Songa ormanında savaştık. Kül Tigin, Bayırkunun ak aygırına | binip atılarak hücum etti. Bir eri ok ile vurdu, iki eri kovalayıp takip ederek mızrakladı. [[s. 19]] O hücum ettiğinde, Bayırkunun ak aygırını, uyluğunu kırarak, vurdular. Kırgız kağanını öldürdük, ilini aldık. O yılda Türgişe doğru Altın ormanını...
  - `Tekin 1998, s. 26` (eslesen: _aK aDGIRIG_)
    > ...üğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip te...
  - `Tekin 2003, s. 107` (eslesen: _aK aDGIRIG_)
    > ...D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bayırku’ların...” (KT D 35) **257.** /+ıg/. Şu örnekte *bodun* sözcüğü ilgi durumu ekini bu biçimde almış olmalı: *türük bodun+ıg ati küsi yok bolmazun tiyin* “Türk halkının adı sanı yok olmasın diye...
  - `Ata 2011, s. 93` (eslesen: _aK aDGIRIG_)
    > ...Orhun Türkçesinde düzlük-yuvarlaklık uyumuna girmeyen ekler pek çoktur. Bunların başlıcaları aşağıda gösterilmiştir. Tamlayan durumu eki: türük bodun+ıŋ ilin törüsin KT D1 “Türk halkının devletini ve töresini” bayırku+nıŋ ak adgırıg KT D36 “Bayırku’ların ak aygırını” 3. tekil kişi iyelik eki: eçüm apam törü+si+n+çe yaratmış boşgurmış KT D13 “atalarım dedelerimin töresince (yeniden) yaratmış, eğitmiş” beglik urı ogl+i+n kul boltı KT D7 “bey olmaya lâyık erkek...
  - `Olmez 2017, s. 50` (eslesen: _aK aDGIRIG_)
    > ...zdir.** Türk dillerinde yalın durum eksizdir. Yazıtların dilinde de aynı şekildedir. **İlgi Durumu: +Iŋ/+nIŋ** Ünsüzle biten kelimelere {+Iŋ}, ünlü ile bitenlere ise {+nIŋ} olarak gelir: *bilge kaganıŋ bodunı* "Bilge Hakan'ın halkı" (O 11) *bayırkunıŋ ak adgırıg* "Bayırkuların ak aygırını" (KT D 36) Günümüz Türk dillerinin neredeyse tamamına yakını *+nIŋ* şeklini takip ederken Oğuz dilleri ise yazıtlarla benzer şekilde, ünsüzlerden sonra *+Iŋ*, ünlülerden sonra da *+nIŋ*'lı şekilleri izler. **Belirtme Durumu: +(X)g...
  - `Ata 2011, s. 86` (eslesen: _aK aDGIRIG_)
    > ...eklinde yer almaktadır. 3. [[s. 86]] Orhun Türkçesinde düzlük-yuvarlaklık uyumuna girmeyen ekler pek çoktur. Bunların başlıcaları aşağıda gösterilmiştir. Tamlayan durumu eki: türük bodun+ıŋ ilin törüsin KT D1 “Türk halkının devletini ve töresini” bayırku+nıŋ ak adgırıg KT D36 “Bayırku’ların ak aygırını” 3. [[s. 86]] tekil kişi iyelik eki: eçüm apam törü+si+n+çe yaratmış boşgurmış KT D13 “atalarım dedelerimin töresince (yeniden) yaratmış, eğitmiş” beglik urı ogl+i+n kul boltı KT D7 “bey olmaya lâyık erkek evladı ile kul ol...


## KT-D-36#1 - Kül Tigin Yazıtı, Doğu 36. satir  (7 kelime)

- **transkripsiyon:** `BİNiP : OPLaYU : TeGDİ : BİR : eRiG : OKuN : URTI`
- **kelime karsiliklari:** BİNİP : [H]OPLAYIP : [YAĞIYA] DEĞDİ : BİR : ERİ : OKU [İLE] : VURDU
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _BİNiP OPLaYU TeGDİ BİR eRiG OKuN URTI_)
    > ...ıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça...
  - `Tekin 2003, s. 225` (eslesen: _BİNiP OPLaYU_)
    > ..... tapa sü]lädökdä, beş süŋüş süŋüşdökdä, Küli Çor ançak bilgäsi, çabışı ärti. (18) [Kü]li Çor yeti yaşıŋa yägir ölürti, tokuz yaşıŋa azıglıg toŋuz ölürti. Karluk yagı(t)tokda, Täzdä süŋüşdökdä (19) Küli Çor anta k(i)srä Karlukka yäm[ä] süŋüş[dök]dä İdil akin binip, oplayu tägip, sança ıdıp, topulu ünti. Yana agıtıp (20) [s]ü sürti. Karlukug içg(i)ntökin (?) sançdı. Karluk tapa [......]galı barıp, azın ärig yana äbiŋä sü[ŋüş] kigürti. Karluk atlantı. Ança sön (21) [K]arluk yägrän ärmälig arkasin sıyu urtı. Karluk anin turup ......
  - `Tekin 1998, s. 25` (eslesen: _OPLaYU TeGDİ_)
    > ...a kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ bin...
  - `Olmez 2017, s. 53` (eslesen: _BİR eRiG_)
    > ...ırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalarda araç veya vasıta durumu da denir. *bir erig ok+un urdı* "(Prens Kül) bir askeri ok ile vurdu" (KT D 36) [s. 54] # s. 054 — Mehmet Ölmez (basılı sayfa 56) *az totokug elig+in tutdı* "(Prens Kül) Azların askeri valisini eli ile tutdu" (KT D 38) *bu yol+un yorısar yaramaçı* "Bu yoldan yürürsek (bizim...
  - `Tekin 2003, s. 131` (eslesen: _OKuN URTI_)
    > ...zip bardı* "Uygur valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) 2. Yaklaşıklık sayıları sözdizimi yolu ile de ifade edilir: *korıgu eki üç kişiligü täzip bardı* "Kale muhafızı (?) iki üç kişi ile kaçıp gitti" (BK D 41) *yarıkınta yalmasınta yüz artuk okun urtı* "(Prens Kül'ü) zırhından ve kaftanından yüzden fazla ok ile vurdular (KT D 33) ## Sıra Sayıları **286.** Sıra sayıları şunlardır: *ilki* "birinci" (< *il+ki*), *äŋ ilk ~ äŋ ilki, ekin ~ ekinti* "ikinci", *üçünç* "üçüncü", *törtünç* "dördüncü", *bişinç* "be...
  - `Tekin 2003, s. 224` (eslesen: _OPLaYU_)
    > ...Işbara Çıkan Küli Çor bolmiş.... Tunyukuk (3) [Kap]gan Kagan elintä karıp ädgü bäŋi körti. Ulug Küli Çor sekiz on yaşap yok bol[tı]. (4) ... özlüki boz at ärti. Kädim ..... alpi ärdämi anta tükädi. Türk bodunka.... (5) Sag(ı)r Çulugan yagı(t)tokda [Küli] Çor [oplayu tägi]p, sançıp, ölürüp, oglin kisisin buln[adı]. (6) bulup Az elig tutdı. Kerü Az ........... ärti. Küli Çor Türk bodun..... (7) [k]aganıŋa eli[n törösin...........] Bilgäsin üçün, alpin ärdämin [üçü]n kaz[g]antı...... (8) Tür[k..................] Işbara bilg...


## KT-D-36#2 - Kül Tigin Yazıtı, Doğu 36. satir  (4 kelime)

- **transkripsiyon:** `iKİ : eRiG : UDaŞıRU : SaNÇDI`
- **kelime karsiliklari:** İKİ : ERİ : KOVALAYIP : SANÇTI
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _SaNÇDI_)
    > ...şınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşd...
  - `Tekin 2003, s. 40` (eslesen: _SaNÇDI_)
    > ...TEKİN ## /nç/ Çift Ünsüz İşareti **40.** Bu işaret /anç/, /änç/ ses öbekleri ile /nç/ ünsüz çiftini yazmak için kullanılır. 1. /anç/ ses öbeği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 211` (eslesen: _SaNÇDI_)
    > ...a ürküntü çakta),( İŞİ le ürker « ürkmek). [[y. 211]] >) irktdı" GK er tavar irkti > adam mal topladı". Başkası da böyledir , (AŞİ) - 313) irker - örkmek). Sie sürçdir "ŞARZ İİ at sürçdi - at sürç- tü", Başkası da böyledir, ( -345 A sürçer - sürçmek). SİZ sançdı ne ŞAŞI gi İ! oz anı biçekin ia so, ona Biçayıya sançtı". Başkası da böyledir; LZ; AE Beg yagısın sançdı - Bey duşmanını yendi", İZ > sançar - sançmak). [[y. 211]] SALŞ küradt: Se ES yazıt kanga kürsdi - delikanlı, kanlandı, etlendi", (kendisinden erkeklik b...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 173` (eslesen: _SaNÇDI_)
    > ...engil ve hem bize puşu olğıl oğul didi. Uruz © babasınun sözin şımadı, kayıdup girü döndi, © Yirden yüce tağlar başına yoldaşların alup çıkdı ? Ol zamanda oğul ata sözin iki eylemez-idi, iki * eylese ol oğlanı kabul eylemezler-idi. Uruz giğ * yakadan süğüsin şançdı turdı. [[s. 173]] Kazan Big gördi * ki kâfir katı yaklandı. Atından indi, aru sudan abdest aldı, * ağ alnın yire kodı iki rik'at namaz 1 görelüm... me) V'de yok | şoylamış) D'de kalın yazı ile V'de yok | a big) Vız begüm | 2 işidürem) Ve i. ne dirsin | amma...


## KT-D-36#3 - Kül Tigin Yazıtı, Doğu 36. satir  (3 kelime)

- **transkripsiyon:** `OL : TeGDÜKDE : BaYıRKUNuŊ`
- **kelime karsiliklari:** O : DEĞDİĞİNDE : BAYIRKUNUN
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _OL TeGDÜKDE_)
    > ...rkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tig...
  - `Ata 2011, s. 140` (eslesen: _OL TeGDÜKDE_)
    > ...g küçüg berdim “kızıl kanımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adgırıg udlukın sı-yu urtı “o hücumda (düşman) Bayırkuların kır aygırının kalçasını kırıp vurdu” BK D36 2. -(X)p fiil zarfı, asıl eylemden önce işlenmiş bir eylemi gösterir. Bugünkü Türkçede de sıkça kullanılan –p ekinin ünlü ile so...
  - `Ata 2011, s. 133` (eslesen: _OL TeGDÜKDE_)
    > ...ızıl kanım töküt-i kara terim yügürt-i işig küçüg berdim “kızıl kanımı [[s. 132]] dökerek, kara terimi akıtarak hizmet ettim” T 52 [s. 133] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adgırıg udlukın sı-yu urtı “o hücumda (düşman) Bayırkuların kır aygırının kalçasını kırıp vurdu” BK D36 2. -(X)p fiil zarfı, asıl eylemden önce işlenmiş bir eylemi gösterir. [[s. 133]] Bugünkü Türkçede de sıkça kullanılan –p ekinin ünlü ile sonl...
  - `Ergin 1970, s. 18` (eslesen: _BaYıRKUNuŊ_)
    > ...ü olarak Yigen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz. O orduyu orda yok ettik. Ondan sonra Yir Bayırkunun Uluğ Irkini düşman O R H U N Â B İ D E L E R İ [s. 19] M U H A R R E M E R G İ N oldu. Onu dagıtıpp Türgı Yargun Gölünde bozduk. Uluğ İrkin azıcık erle kaçıp gitti. Kül Tigin yirmi altı | yaşında iken Kırgıza doğru ordu sevk ettik. Mızrak batımı karı sök...


## KT-D-36#4 - Kül Tigin Yazıtı, Doğu 36. satir  (5 kelime)

- **transkripsiyon:** `aK : aDGıRıG : UDLuKIN : SIYU : URTI`
- **kelime karsiliklari:** AK : AYGIRI : UYLUĞUNU : KIRI : VERDİ
- **kanit:**
  - `Tekin 2003, s. 174` (eslesen: _aK aDGıRıG UDLuKIN_)
    > ...8) *kül tigin yadagın opla-yu tägdi* "Prens Kül yayan olarak atılıp saldırdı" (KT D 32) *kül tigin az yagızin binip opla-yu tägip bir ärig sançdı* "Prens Kül Azların yağız atına binip atılarak saldırdı, bir askeri mızrakladı" (KT K 5) *ol tägdökdä bayırkunıŋ ak adgırıg udlukin sı-yu urtı* "O hücumda (düşman) Bayırkuların kır aygırını kalçasından yaralayıp vurdu" (BK D 36) *kugu kuş... anın kalı-yu barıpan ögiŋä kaŋına tägürmiş* "Kuğu kuşu onunla birlikte yükselerek (onu) annesine ve babasına götürmüş" (IB 35), vb. ## {-(X)p} Ekli...
  - `Ata 2011, s. 140` (eslesen: _aK aDGıRıG UDLuKIN_)
    > ...anımı dökerek, kara terimi akıtarak hizmet ettim” T 52 132 [s. 140] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adgırıg udlukın sı-yu urtı “o hücumda (düşman) Bayırkuların kır aygırının kalçasını kırıp vurdu” BK D36 2. -(X)p fiil zarfı, asıl eylemden önce işlenmiş bir eylemi gösterir. Bugünkü Türkçede de sıkça kullanılan –p ekinin ünlü ile sonlanan fiillere ulanışınd...
  - `Ata 2011, s. 133` (eslesen: _aK aDGıRıG UDLuKIN_)
    > ...terim yügürt-i işig küçüg berdim “kızıl kanımı [[s. 132]] dökerek, kara terimi akıtarak hizmet ettim” T 52 [s. 133] at yet-e yadagın ıgaç tutun-u agturtum “atları yedeklerine alarak yayan olarak ağaçlara tutunup yukarı tırmandım” T 25 ol tegdükde bayırkunıŋ ak adgırıg udlukın sı-yu urtı “o hücumda (düşman) Bayırkuların kır aygırının kalçasını kırıp vurdu” BK D36 2. -(X)p fiil zarfı, asıl eylemden önce işlenmiş bir eylemi gösterir. [[s. 133]] Bugünkü Türkçede de sıkça kullanılan –p ekinin ünlü ile sonlanan fiillere ulanışında fark...


## KT-D-36#5 - Kül Tigin Yazıtı, Doğu 36. satir  (3 kelime)

- **transkripsiyon:** `KIRKıZ : KaGaNıN : ÖLüRTüMüZ`
- **kelime karsiliklari:** KIRGIZ : KAĞANINI : ÖLDÜRDÜK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KIRKıZ KaGaNıN_)
    > ...yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 2...
  - `Tekin 2003, s. 182` (eslesen: _KIRKıZ KaGaNıN_)
    > ...zmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devletini zapt ettik" (KT D 36) - *tizligig sökür-tümüz başlıgıg yüküntür-tümüz* "Dizliyi (güçlüyü) çökerttik, başlıya (mağrura) baş eğdirdik" (KT D 18, BK D 15-16) - *bir yılka beş yolı süŋüş-dümüz* "Bir y...
  - `Tekin 1998, s. 47` (eslesen: _ÖLüRTüMüZ_)
    > ...yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfk...
  - `Tekin 2003, s. 209` (eslesen: _ÖLüRTüMüZ_)
    > ...Sİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzl...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNıN_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı y...
  - `Ergin 1970, s. 6` (eslesen: _KaGaNıN_)
    > ...lidir. Doğu ve batı cephelerinin genişliği aşağıda 132, yukarıda 122 santimdir. Güney ve kuzey cepheleri ise aşağıda 46, yukarıda 44 santimdir. [[s. 6]] Âbidenin üstü kemer şeklinde bitmektedir ve yukarı kısımda beş kenarlı olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu c...


## KT-D-36#6 - Kül Tigin Yazıtı, Doğu 36. satir  (8 kelime)

- **transkripsiyon:** `İLİN : aLTıMıZ : OL : YILKA : TÜRGiŞ : TaPA : aLTUN : YIŞıG`
- **kelime karsiliklari:** İLİNİ : ALDIK : O : YILDA : TÜRGİŞ : TARAFINA : ALTIN : YIŞI
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _İLİN aLTıMıZ OL YILKA TÜRGiŞ TaPA aLTUN YIŞıG_)
    > ...dunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kir...
  - `Tekin 1998, s. 11` (eslesen: _aLTUN YIŞıG_)
    > ...devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya l...
  - `Tekin 2003, s. 117` (eslesen: _aLTUN YIŞıG_)
    > ...yacak" (T 32) *süçig sab+ın yimşak agı+n arıp...* "(Çinliler) tatlı sözlerle ve yumuşak hediyelerle kandırıp..." (KT G 5) *köz+ün körmädök kulkak+ın eşidmädök bodunumın...* "...göz ile görülmemiş, kulak ile işitilmemiş (kadar kalabalık) halkımı..." (BK K 11) *altun yışıg yolsız+ın aşdımız ärtiş ügüzüg käçigsiz+in käçdimiz* "Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın...
  - `Ogel C2, s. 385` (eslesen: _aLTUN YIŞıG_)
    > ...ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (tuşı)), Er-Kamış*ın altında...
  - `Tekin 2003, s. 209` (eslesen: _aLTıMıZ_)
    > ...Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzleri (de)...
  - `Tekin 1998, s. 6` (eslesen: _TÜRGiŞ_)
    > ...6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur! [[s. 6]] İşte yukarıda açıklamaya çalıştığım nedenlerden...


## KT-D-37#1 - Kül Tigin Yazıtı, Doğu 37. satir  (5 kelime)

- **transkripsiyon:** `TOGA : iRTiŞ : ÖGüZüG : KeÇE : YORIDıMıZ`
- **kelime karsiliklari:** DOĞA : İRTİŞ : ÖZÜĞÜ : GEÇİP : YÜRÜDÜK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KeÇE YORIDıMıZ_)
    > ...n Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin...
  - `Ogel C2, s. 385` (eslesen: _KeÇE YORIDıMıZ_)
    > ...yordu. Cöktürkler ile Türgeşler arasında savaş başlıyor ve böylece Türgeşler, Göktürk idaresine yeniden girmiş oluyorlardı. İrt i ş ırmağı ile ilgili bilgileri, aşağıda şöyle sıralayacağız: a) Kültegin yazıtında: “**Erti ş urmağını (ögüzüg) geçerek yürürdük (keçe yorıdımız). T'ü r gi ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Al...
  - `Tekin 1998, s. 43` (eslesen: _ÖGüZüG_)
    > ...rakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu...
  - `Tekin 2003, s. 120` (eslesen: _ÖGüZüG_)
    > ...n sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärkli...
  - `Ata 2011, s. 123` (eslesen: _ÖGüZüG_)
    > .... ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındak...
  - `Tekin 1998, s. 11` (eslesen: _iRTiŞ_)
    > ...süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye yaptı” vb. vb. gibi. 5.3. Deyimler Orhon yazı...


## KT-D-37#2 - Kül Tigin Yazıtı, Doğu 37. satir  (4 kelime)

- **transkripsiyon:** `TÜRGiŞ : BODuNuG : UDA : BaSDıMıZ`
- **kelime karsiliklari:** TÜRGİŞ : BOYLARINI : UYKUDA : BASTIK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _TÜRGiŞ BODuNuG UDA BaSDıMıZ_)
    > ...k adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz...
  - `Tekin 2003, s. 149` (eslesen: _TÜRGiŞ BODuNuG_)
    > ...yana içikmiş* “Düşman olmuş, (fakat) kendini düzene sokup (iyi) örgütlenememiş, yine (Çinlilere) bağımlı olmuş” (KT D 10) - *kanin kodup tabgaçka yana içikdi* “Hanını bırakıp Çin’e yeniden bağımlı oldu” (T 2) [s. 149] # s. 149 — ORHON TÜRKÇESİ GRAMERİ *kara türgiş bodunug anta ölürmiş almış yana yorıp...* “Türgiş avam halkını orada öldürmüş, almış. Yine yürüyüp...” (KT D 40), vb. Öbür sayı zarfları *ekinti* “ikinci olarak”, *üçünç* “üçüncü olarak” vb. için bk. **Sıra Sayıları**. ## Soru Zarfları **346.** Çok eski *\*ka* sor...
  - `Tekin 2003, s. 182` (eslesen: _BODuNuG UDA_)
    > ...zim ä, kit-(t)im ök* "Otuz yaşımda, ne yazık, gittim işte!" (Çaa-Höl III 1-2) - *kızıl kanım töküti kara tärim yügürti işig küçüg ber-tim ök* "... kızıl kanımı döktürerek, kara terimi akıtarak çok hizmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devl...
  - `Tekin 2003, s. 108` (eslesen: _BaSDıMıZ_)
    > ...ş, tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler bu gerçeği kanıtlamaya yeter: /UGLmn/ *oglum+in* "oğlumu" (...
  - `Ata 2011, s. 112` (eslesen: _BaSDıMıZ_)
    > ...ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT...
  - `Olmez 2017, s. 51` (eslesen: _BaSDıMıZ_)
    > ...arfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlardan sonra ise *+ŋA* şeklinde görülür. Üçüncü kişide, ger...


## KT-D-37#3 - Kül Tigin Yazıtı, Doğu 37. satir  (7 kelime)

- **transkripsiyon:** `TÜRGiŞ : KaGaN : SÜSİ : BOLÇUDA : OTÇA : BORÇA : KeLTİ`
- **kelime karsiliklari:** TÜRGİŞ : KAĞANININ : SÜSİ : BOLÇUDA : ATEŞCE : BORACA : GELDİ
- **kanit:**
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KaGaN SÜSİ BOLÇUDA OTÇA BORÇA KeLTİ_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KaGaN SÜSİ BOLÇUDA OTÇA BORÇA KeLTİ_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parça...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KaGaN SÜSİ_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı" (KT...


## KT-D-37#4 - Kül Tigin Yazıtı, Doğu 37. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `SÜŊüŞDüMüZ : KÖLTİGiN : BaŞGU : BOZ : aT : BİNiP : TeGDİ : BaŞGU : BOZ : Ke ---`
- **kelime karsiliklari:** SÜNGÜŞDÜK : KÜLTİĞİN : BAŞI : BOZ : ATA : BİNİP : [YAĞIYA] DEĞDİ : BAŞI : BOZ : KE ---
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _BaŞGU BOZ aT BİNiP_)
    > ...ayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39)...
  - `Tekin 1998, s. 25` (eslesen: _aT BİNiP TeGDİ_)
    > ...dı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at anta) (D 33) ölti. Ekinti Işbara Yamtar boz atığ binip teğdi. Ol at anta ölti. Üçünç Yeğen Siliğ Beğinö kedimliğ toruğ at binip teğdi. Ol at anta ölti. Ya- ORHON YAZITLARI 47 konuşup anlaştık. Babamızın, amcamızın kazanmış oldukları halkın adı sanı yok olmasın (D 27) diye, Türk halkı için gece uyumadım, gündüz oturmadım. [[s. 25]] Kardeşim Kül Tigin ile, iki Şad ile (birlikte) ölesiye yit...
  - `Ergin 1970, s. 18` (eslesen: _BOZ aT_)
    > ...ayın biraderini, silâhlı, elle tuttu, silahlı olarak kağana takdim etti. O orduyu orda yok ettik. Yirmi bir yaşında iken, Çaça generale karşı savaştık. [[s. 18]] En önce Tadıgın, Çorun bozatına binip hücum etti. O at orda | Öldü. İkinci olarak İşbara Yamtarın boz atına binip hücum etti. O at orda öldü. Üçüncü olarak Yigen Silig beyin giyimli doru atına binip hücum etti. O at orda öldü. Zırhından kaftanından yüzden fazla ok ile vurdular, yüzüne başına bir tane değdirmedi. ..... Hücum ettiğini, Türk beyleri, hep bilirsiniz...
  - `Tekin 2003, s. 107` (eslesen: _BOZ aT_)
    > ...igidmiş bilgä kaganıŋ+ın sabin almatin...* “(Seni) besleyip doyurmuş olan akıllı hakanlarının sözlerini dinlemeden...” (KT G 8) Aşağıdaki örnekte ilgi durumu eki, iyelik öbeğinin sahibini gösteren söz öbeğinin her iki üyesine de eklenmiştir: *tadık+ıŋ çor+ıŋ boz [at]* “Tadık Çor’un boz (atı)” (KT D 32) ## Belirli Nesne Durumu **259.** Orhon Türkçesinde belirli nesne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur...
  - `Ata 2011, s. 115` (eslesen: _BOZ aT_)
    > ...ış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kel...
  - `Tekin 2003, s. 205` (eslesen: _aT BİNiP_)
    > ...savaştı" (T 45) - *tabgaçka yeti yegirmi süŋüşdi* "Çinlilerle on yedi (kez) savaştı" (T 49) 5. Bir sıra sayısı: - *ekinti ışbara yamtar boz atıg binip...* "İkinci olarak Işbara Yamtar'ın boz atına binip..." (KT D 33) - *üçünç yigän silig bägiŋ kädimlig torug at binip...* "Üçüncü olarak Yigen Silig Bey'in doru atına binip..." (KT D 33) - *törtünç äzginti kadızda süŋüşdüm* "Dördüncü olarak Ezginti Kadız'da savaştım" (BK D 31), vb. 6. Bir zaman süresi gösteren niteleme öbeği: - *yigirmi kün olorup...* "Yirmi gün oturup..."...


## KT-D-38#1 - Kül Tigin Yazıtı, Doğu 38. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : TUTuZTI : iKİSİN : ÖZİ : aLDıZDI`
- **kelime karsiliklari:** --- : TUTTURTTU : İKİSİNİ : ÖZÜ : ALDIRTTI
- **kanit:**
  - `Tekin 1998, s. 1` (eslesen: _iKİSİN_)
    > ...[s. 1] Üze kök tengri, asra yağız yer kılıntukda, ekin ara kişi oğlu kılınmış. rl CANA “ “Üstte mavi gök, altta yağız yer yaratıldığında, ikisinin arasında insanoğulları yaratılmış.” Bu sözler bilinen en eski Türkçe yazılı anıtlara, Moğolistan'da Orhon Irmağı kıyısında bulunan laş üstüne yazılmış Orhon yazıtlarına aittir. Ulusal kültürümüzün temel *taş'larından biri, taşlar üzerine yazılmış bir tari...
  - `Ergin 1970, s. 8` (eslesen: _iKİSİN_)
    > ...a büyük olan taşta 35, ikinci taşta 27 satır vardır. İkinci taşta yazılar daha itinasızdır ve aşınma da daha çoktur. [[s. 8]] Bu âbidenin yazıları Kül Tigin ve Bilge Kağan'ınki kadar düzgün değildir. Bu âbidede de yazı yukarıdan aşağı yazılmıştır. Fakat diğer ikisinin aksine satırlar soldan sağa doğru istif edilmiştir. Tezyinatı da diğer kitâbelerdeki kadar sanatkarâne değildir. Tonyukuk âbidesinin yanında da büyük bir türbe kalıntısı, heykeller, balballar ve taşlar vardır. [[s. 8]] Tonyukuk âbidesini, İltiriş Kağan'ın i...
  - `Tekin 2003, s. 124` (eslesen: _iKİSİN_)
    > ...abam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi"...
  - `Ata 2011, s. 46` (eslesen: _iKİSİN_)
    > .... Köktürklerin ortaya çıkışı 540’lı yıllardadır. Söz konusu dönem için birinci derece kaynak olan Çin kaynaklarındaki bilgilere göre, Köktürklerin lideri Bumın Kağan (Çince kaynaklarda Tu-mın veya T’u- men)’dır. Bumın Kağan’ın siyasi bir güç olarak ortaya çıkışından birkaç yıl sonra Çin ile resmî ilişkilere girdiği anlaşılmaktadır, ancak o yıllarda Köktürkler, Avarlara (Ruan-ruanlar) bağımlıdır. Bumın Kağan, Çin Seddi’nin kuzeyinde ipek ticaretiyle meşgulken bir yandan da Avarlara karşı başlatılan Tölis isyanını b...
  - `Olmez 2017, s. 102` (eslesen: _iKİSİN_)
    > ...düşünceli olan Türk beyleri, halkı sevinip kıvanıp yere bakan gözlerini yukarı kaldırdı. Böylesi bir vakitte ben kendim tahta çıkıp bunca önemli yasayı, dört taraftaki halkı [yoluna koydum, düzene sok]tum. Yukarıda mavi gök, aşağıda kara toprak yaratıldığında ikisinin arasında (da) insanoğlu yaratılmış" **asra** < *\*as+ra* "aşağıda" - \*as: isim tabanı [s. 103] # s. 101 — Köktürkçe Dersleri (basılı sayfa numarası 103) +ra: yer ve zaman zarfı eki (burada yer zarfı) **kılintokda** < *kıl-(ı)n-tok+da* "yaratıldığında...
  - `Roux, Eski Din, s. 38` (eslesen: _iKİSİN_)
    > ...e geçiren Curçenler tarafından Çin'den kovulduklarında) ve Kara Hıtay krallığını (1 130-1 1 35} kurmak için sonradan Rus Türkistanı ismini alacak olan yerin kuzeydoğusuna gitme konu sunda gösterdikleri mükemmel yetenek, bizi bu Çinlileşmenin ve ulus olmaktan çıkışın belirtilmeye çalışıldığı kadar kesin olmadığına inanmaya yönlendirmektedir. [[s. 38]] Genel olarak tarih, geleneklerin hemen her yerde ve her zaman, en yüksek kültürlerin saldırılarına bile büyük bir dirençle karşı koyduğunu göstermektedir.12 Hıtaylar Moğolis...


## KT-D-38#2 - Kül Tigin Yazıtı, Doğu 38. satir  (10 kelime)

- **transkripsiyon:** `aNDA : YaNA : KİRiP : TÜRGiŞ : KaGaN : BUYRUKI : aZ : TUTUKUG : eLGiN : TUTDI`
- **kelime karsiliklari:** [O] ANDA : YANA : GİRİP : TÜRGİŞ : KAĞANIN : BUYRUĞUNDAKİ : AZ : TUTUĞUNU : ELİYLE : TUTTU
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YaNA KİRiP TÜRGiŞ KaGaN_)
    > ...un yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmı...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KaGaN_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi y...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGiŞ KaGaN_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] B...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KaGaN_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KaGaN_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli...
  - `Kafesoglu, s. 72` (eslesen: _TÜRGiŞ KaGaN_)
    > .... 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıllar (711-714) Mâveraünnehir'de meşhur Kuteybe b. Müsl...


## KT-D-38#3 - Kül Tigin Yazıtı, Doğu 38. satir  (3 kelime)

- **transkripsiyon:** `KaGaNIN : aNDA : ÖLüRTüMüZ`
- **kelime karsiliklari:** KAĞANINI : [O] ANDA : ÖLDÜRDÜK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _ÖLüRTüMüZ_)
    > ...yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfk...
  - `Tekin 2003, s. 209` (eslesen: _ÖLüRTüMüZ_)
    > ...Sİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzl...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNIN_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı y...
  - `Ergin 1970, s. 6` (eslesen: _KaGaNIN_)
    > ...lidir. Doğu ve batı cephelerinin genişliği aşağıda 132, yukarıda 122 santimdir. Güney ve kuzey cepheleri ise aşağıda 46, yukarıda 44 santimdir. [[s. 6]] Âbidenin üstü kemer şeklinde bitmektedir ve yukarı kısımda beş kenarlı olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu c...
  - `Tekin 2003, s. 31` (eslesen: _KaGaNIN_)
    > ...ir; başka bir deyişle, bunlar seslik bir durumu ya da gelişmeyi gösterir: - /tIŋLA/ *tıŋla* "dinle!" (KT G 2) ~ *tıŋla-* (IB 58) - /KTGdI/ *kat(ı)gdi* "sıkıca" (KT K 11) ~ *katıgdı* (KT G 2) - /sIYU/ *siyu* "kırarak" (KT D 36, vb.) < *sı-* "kırmak" - /KGNIn/ *kaganin* "hakanını" (KT D 35, vb.) - /SBmn/ *sab(ı)min* "sözlerimi" (KT G 2) - /YGsI/ *yag(ı)si* "düşmanları" (BK E 11, vb) - /BULms/ *bolm(i)ş* "olmuş" (T 31, vb.) Art ünlülü sözcüklerin yazımında yaygın olarak kullanılan harfler ön /s/ ve ön /y/ harfleridir. [s....
  - `Ata 2011, s. 51` (eslesen: _KaGaNIN_)
    > ...lere yerleştirilmiş bazı Köktürk beyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme...


## KT-D-38#4 - Kül Tigin Yazıtı, Doğu 38. satir  (7 kelime)

- **transkripsiyon:** `İLİN : aLTıMıZ : KaRA : TÜRGiŞ : BODuN : KOP : İÇiKDİ`
- **kelime karsiliklari:** İLİNİ : ALDIK : KARA : TÜRGİŞ : BOYLARI : HEP : İÇİKTİ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _İLİN aLTıMıZ KaRA TÜRGiŞ BODuN KOP İÇiKDİ_)
    > ...Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp...
  - `Tekin 2003, s. 144` (eslesen: _KaRA TÜRGiŞ BODuN KOP_)
    > ...< ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop ölgäli törümiş* "İnsan oğlu hep ölümlü yaratılmış" (KT K 10) [s. 145] # s. 145 — ORHON TÜRKÇESİ GRAMERİ *kül tigin y...
  - `Tekin 2003, s. 105` (eslesen: _BODuN KOP_)
    > ...ya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7...
  - `Olmez 2017, s. 21` (eslesen: _BODuN KOP_)
    > ...kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindek...
  - `Kafesoglu, s. 72` (eslesen: _KaRA TÜRGiŞ_)
    > ...r, Türgi-yargın gölü savaşında bozguna uğratıldı380. 711 alında, yine itaatten çıkmış olan Türgişler darbelendi; "ateş ve fırtına" gibi saldıran Türgiş kuvvetleri mağlûp edilerek, Türgiş yabgu'su, şad'ı ile birlikte, tâbi "kağan" durumundaki So-ko öldürüldü, "Kara Türgiş" itaate alındı381. [[s. 72]] Bars Beğ, Türgiş "kagan"ı tâyin edilerek Bilge'nin kızkardeşi ile evlendirildi ve Mâveraünnehir'e bir yürüyüş yapıldı; sebebi, kitabelere göre, "Sogdak (Semerkand bölgesi) kavmini tanzim etmek" idi383. Bu seferin icra edildiği yıl...
  - `Tekin 2003, s. 209` (eslesen: _aLTıMıZ_)
    > ...Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzleri (de)...


## KT-D-38#5 - Kül Tigin Yazıtı, Doğu 38. satir  (4 kelime)

- **transkripsiyon:** `OL : BODuNuG : TaBaRDA : KONTuRTuMuZ`
- **kelime karsiliklari:** O : BOYLARI : TABARDA : KONDURDUK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _OL BODuNuG TaBaRDA_)
    > .... Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş er...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...
  - `Olmez 2017, s. 22` (eslesen: _BODuNuG_)
    > ...görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu...
  - `Ergin 1970, s. 19` (eslesen: _TaBaRDA_)
    > ...ı beyaz boz ata binip hücum etti. Alnı beyaz boz...... | ... tutturdu. İkisini kendisi yakalattı. Ondan sonra tekrar girip Türgiş kağanının buyruku Az valisini elle tuttu. [[s. 19]] Kağanını orda öldürdük, ilini aldık. Türgiş avam halkı hep tâbi oldu. O kavmi Tabarda kondurduk.......... Soğd milletini düzene sokayım diye İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettik. Ondan sonra Türgiş avam halkı düşman olmuş. Kengerise doğru gitti. Bizim askerin atı zayıf, azığı yok idi. Kötü kimse er.......... | kahraman er bi...


## KT-D-39#1 - Kül Tigin Yazıtı, Doğu 39. satir  (10 kelime)

- **transkripsiyon:** `SOGDaK : BODuN : İTeYİN : TİYiN : YİNÇÜ : ÖGÜZüG : KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiMiZ`
- **kelime karsiliklari:** SOĞDAK : BOYLARINI : [DÜZEN] EDEYİM : DİYE : İNCİ : ÖZÜĞÜ : GEÇİP : DEMİRKAPIYA : DEĞİN : SÜLEDİK
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _SOGDaK BODuN İTeYİN TİYiN_)
    > ...teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin...
  - `Tekin 2003, s. 140` (eslesen: _SOGDaK BODuN_)
    > ...dar..." KT D 2) *kerü barıgma bardı* "geri gitmek isteyenler gitti" (O 11) *anta kerü barıp* "Oradan batıya doğru gidip..." (KÇ 16) **313.** *bärü* "beri, bu yana doğru" < *\*bā+rü* (krş. Trkm. *bāri* ay.): *mançud saka täzik tokar... anta bärüki aşok başlıg sogdak bodun* "Mançudlar, Sakalar, Tacikler, Toharlar... onlardan daha berideki Aşok başlı Soğd halkı..." (T 46) **314.** {+DA} eki ile türetilmiş yer zarfları şunlardır: *bunta* "burada" (< *bun+ta*) ve *anta* "orada" (< *an+ta*). [s. 141] # s. 141 — ORHON TÜRKÇESİ GRA...
  - `Ata 2011, s. 119` (eslesen: _SOGDaK BODuN_)
    > ...kisre kün batsıkıŋa tegi “geride gün batısına kadar” (Ongin 2) e. +rü eki ile türetilmiş yer zarfları: kirü ‘geri, geriye doğru, batıya doğru’, berü ‘beri, bu yana’. kirü barıgma bardı “geri giden gitti” (Ongin 11) anta berüki aşok başlıg sogdak bodun “ondan berideki Aşok başkanlığındaki Soğd halkı” T 46 f. +da eki ile türetilmiş yer zarfları: bunta ‘burada, bu yerde’, anta ‘orada, o yerde’. ol süg anta yok kışdımız “o orduyu orada yok ettik” KT D32 kagan at bunta biz birtimiz “hakan...
  - `Tekin 2003, s. 159` (eslesen: _TİYiN YİNÇÜ_)
    > ...ürük bodunug... kılmadım* "Ben kendim hakan olarak tahta oturduğum için Türk halkını... yapmadım" (BK D 36) **376.** *tiyin* "diye, için, amacıyla" < *\*tē-yin*: *arkış ıdmaz tiyin sülädim* "Kervan göndermiyor diye sefer ettim" (BK D 25) *sogdak bodun itäyin tiyin yinçü ügüzüg käçä tämir kapıgka tägi sülädimiz* "Soğdak halkını örgütlemek amacıyla İnci ırmağını geçerek Demir Kapı'ya kadar sefer ettik" (KT D 39) *bodunug igidäyin tiyin... ulug sü eki yegir[mi sülädim]* "Halkı doyurmak için... büyük ordular(la) on iki kez sefer...
  - `Tekin 1998, s. 23` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağa...
  - `Ata 2011, s. 120` (eslesen: _TeGİ SÜLeDiMiZ_)
    > ...klıg yagıg yeltürmedim “bu Türk halkı içinde zırhlı düşmanların akınına hiç imkan vermedim” T 54 birle: inim köl tegin birle sözleşdimiz “erkek kardeşim Prens Köl ile konuştuk” BK D6 eçim kagan birle ilgerü yaşıl ügüz şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) i...


## KT-D-39#2 - Kül Tigin Yazıtı, Doğu 39. satir  (7 kelime)

- **transkripsiyon:** `aNDA : KİSRE : KaRA : TÜRGiŞ : BODuN : YaGI : BOLMuŞ`
- **kelime karsiliklari:** ONDAN : SONRA : KARA : TÜRGİŞ : BOYLARI : YAĞI : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KİSRE KaRA TÜRGiŞ BODuN_)
    > ...ızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara...
  - `Tekin 2003, s. 144` (eslesen: _KaRA TÜRGiŞ BODuN_)
    > ...< ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop ölgäli törümiş* "İnsan oğlu hep ölümlü yaratılmış" (KT K 10) [s. 145] # s. 145 — ORHON TÜRKÇESİ GRAMERİ *kül tig...
  - `Tekin 1998, s. 23` (eslesen: _BODuN YaGI_)
    > ...yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş...
  - `Tekin 2003, s. 135` (eslesen: _BODuN YaGI_)
    > ...k yer sub [eçim k]agan kutı taplamadı ärinç* "(Bu hareketi) yukarıda(ki) Tanrı, (aşağıdaki) Yer ve Su (ruhları ile) amcam hakanın ruhu, şüphesiz ki, doğru bulmadılar" (BK D 35) **294.** *biryä* "güneyde" < *\*biriyä* < *\*biri* "bu yan, güney": *biryä tabgaç bodun yagı ärmiş* "Güneyde Çin halkı (bize) düşman imiş" (KT D 14, BK D 12) *biryä çogay yış tögültün yazı konayin tisär...* "Güneyde Çoğay dağlarına (ve) Tögültün ovasına konayım dersen..." (KT G 6-7) *biryä tabgaçıg öŋrä kıtańıg yırya oguzug üküş ök ölürti* "Güneyde...
  - `Ata 2011, s. 118` (eslesen: _BODuN YaGI_)
    > ...ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün bat...
  - `Ata 2011, s. 111` (eslesen: _BODuN YaGI_)
    > ...r. a. +A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (...


## KT-D-39#3 - Kül Tigin Yazıtı, Doğu 39. satir  (3 kelime)

- **transkripsiyon:** `KeŊeRiS : TaPA : BaRDI`
- **kelime karsiliklari:** KENGERİS : TARAFINA : VARDI[LAR]
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _TaPA BaRDI_)
    > ...Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almı...
  - `Tekin 2003, s. 151` (eslesen: _TaPA BaRDI_)
    > ...32) *eki otuz yaşıma tabgaç tapa sülädim* "Yirmi iki yaşımda Çin'e doğru sefer ettim" (BK D 25-26) *ançıp bars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça)...
  - `Ergin 1970, s. 19` (eslesen: _KeŊeRiS_)
    > ...tuttu. [[s. 19]] Kağanını orda öldürdük, ilini aldık. Türgiş avam halkı hep tâbi oldu. O kavmi Tabarda kondurduk.......... Soğd milletini düzene sokayım diye İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettik. Ondan sonra Türgiş avam halkı düşman olmuş. Kengerise doğru gitti. Bizim askerin atı zayıf, azığı yok idi. Kötü kimse er.......... | kahraman er bize hücum etmişti. Öyle bir zamanda pişman olup Kül Tigini az erle eriştirip gönderdik. Büyük savaş savaşmış. [[s. 19]] Alp Şalçı ak atına binip hücum etmiş. Türgiş a...
  - `Tekin 1998, s. 20` (eslesen: _BaRDI_)
    > ...sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu...
  - `Tekin 2003, s. 17` (eslesen: _BaRDI_)
    > ...alektte /n/ye, bir diyalektte de /y/ye değişecek olan öndamaksıl /ń/ sesinin korunması: *añıg* “kötü, fena”, *çıgań* “yoksul”, *koń* “koyun”, vb.; 4. Genizsil damak ünsüzü /ŋ/nin ötümlü art- ve öndamak sızıcıları /g/ ve /g/ ile nöbetleşme eğilimi göstermesi: *bardıŋız* ~ *bardıgız* “gittiniz”, *süŋöküŋ* ~ *süŋöküg* “kemiklerin”, vb.; 5. Adların ilgi durumunun ünsüzlerden sonra {-Iŋ}, ünlülerden sonra da {-nIŋ} ile kurulması: *bilgä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, v...
  - `Ata 2011, s. 96` (eslesen: _BaRDI_)
    > ...ança (> anca), uçuz (> ucuz), törüsinçe (> töresince), oçuk (> ocak) 11. Orhun Türkçesinde geniz ünsüzü /ŋ/ söz içinde ve sonunda /g/ ile nöbetleşir. Bu ses değişmesi, 2. kişi iyelik ekleri ile kişi eklerinde görülür: bardıgız ‘vardınız, gittiniz’ ~ bardıŋız süŋüküg ‘kemiklerin’ ~ süŋüküŋ ölsikig ‘öleceksin’ ~ ölsikiŋ törügin ‘(senin) törelerini’ ~ törüŋin Ünsüzler konusunda Orhun Türkçesi ile Türkiye Türkçesi arasındaki farkları sıralayınız....
