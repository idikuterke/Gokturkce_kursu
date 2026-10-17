# Ceviri istek paketi 25 - Orhun cumlecikleri

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


## BK-D-41#1 - Bilge Kağan Yazıtı, Doğu 41. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : aRKıŞI : KeLMeDİ`
- **kelime karsiliklari:** --- : ARKIŞI : GELMEDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _KeLMeDİ_)
    > ...(D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli...
  - `Ata 2011, s. 119` (eslesen: _KeLMeDİ_)
    > ...z verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı e...
  - `Ata 2011, s. 112` (eslesen: _KeLMeDİ_)
    > ...biz verdik” KT D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin...
  - `Roux, Eski Din, s. 113` (eslesen: _aRKıŞI_)
    > ...tahta geçirdi" (M.1 ve M.11, D, satır 26). Tengri aynı zamanda tüm insanların tanrısı, biricik tanrıdır. Yeryüzünün tama mını ve hatta O'nun oturmadığı, dünyanın dört bir köşesinde bulunan düşmanları kapsar, onları kendisine bağlar. [[s. 113]] Bir Türk halk şarkısı, dağların zirvesinde yaşayan ve tüm dünyayı örtmek için kanatlarını gerdiğinde Göğün temsili olan görkemli kartaldan söz ederken onu anımsamaktadır (M. 12, s. 193 vd; N.44, s. 26). Türklerin ve Moğolların, kendi eski "paganizm"lerinde dini bir savaş tasarlama...
  - `Roux, Altay Turklerinde Olum, s. 265` (eslesen: _aRKıŞI_)
    > ...içim değişikliğine neden olmasıdır. [[s. 265]] Ben bu görüşü paylaşmıyorum. Bu inceleme sırasında, birçok kez, Jordanes'ten alıntılar yapmak durumunda kaldık ve ünlü Got yazarın öyküsüne çok daha fazla güvenmek zorunda olduğumuzu biliyoruz. Jordanes, cenaze şarkısının esas amacının ölünün eylemlerini anlatmak olduğunu belirtmektedir. Dolayısıyla, yazıtları ölenin hayatını ve belirgin fiillerini anımsatan mezar taşlarının tümünün ağıtlar olduğu düşünülebilir. [[s. 265]] Bunun fazla ileriye gitmek olduğunu düşünüyorum ve...
  - `Ogel C1, s. 589` (eslesen: _aRKıŞI_)
    > ...i de yerde otururmuş 4, Avrupa Hunlarınım geyikli efsaneleri: Anadolu masallarının çok tanınmış bir olayıdır. Bir avcı düşer bir geyiğin peşine, bu dağ benim, bu dağ senin derken yolunu şaşırır ve bilmediği yerlere gelir. “Geyik de çekti,beni kendi dağına” şarkısı hâlâ kulaklarımızda çınlamaktadır. Türkler islâmiyete girdikten sonra da, kendi efsanelerini peygamberlerin hikâyelerine uydurmuş ve devam ettirmişlerdir. [[s. 589]] Anadolu'da bilhassa Ramazan geceleri okunan Muhammediye v.s. gibi kitaplarda, Hazreti Muhamme...


## BK-D-41#2 - Bilge Kağan Yazıtı, Doğu 41. satir  (4 kelime)

- **transkripsiyon:** `aNI : aYNıTaYıN : TİP : SÜLeDiM`
- **kelime karsiliklari:** ONU : ANYITAYIM : DEYİP : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _TİP SÜLeDiM_)
    > ...gakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz...
  - `Ata 2011, s. 123` (eslesen: _TİP SÜLeDiM_)
    > ...tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kuman...
  - `Ata 2011, s. 116` (eslesen: _TİP SÜLeDiM_)
    > ...116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edatı (ok/ök ) Orhun Türkçesinde pekiştirme edatı ok/ök ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. [[s. 116]] bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı...
  - `Tekin 1998, s. 11` (eslesen: _SÜLeDiM_)
    > ...ı kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 112` (eslesen: _SÜLeDiM_)
    > ...l Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Olmez 2017, s. 21` (eslesen: _SÜLeDiM_)
    > ...Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...


## BK-D-41#3 - Bilge Kağan Yazıtı, Doğu 41. satir  (6 kelime)

- **transkripsiyon:** `KORıGU : iKİ : ÜÇ : KİŞiLGeN : TeZiP : BaRDI`
- **kelime karsiliklari:** KORUĞU : İKİ : ÜÇ : KİŞİYLE : TEZİP : VARDI
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _iKİ ÜÇ_)
    > ...yerleşti. “Güneyde Karluk halkına doğru sefer” et diye Tudun Yamtar'ı gönderdim, gitti ...........nr Karluk Elteberi yok olmuş. Kardeşi bir kaleye kaçıp gitmiş........... (Di AV) sere nş kervanı gelmedi. Onları korkutayım diye sefer ettim. (Kale) muhafızı iki üç kişi ile kaçıp gitti. [[s. 40]] Avam halkı (ise) “Hakanım geldi” diye kıvanıp sevindi (.............. ünvansıza) ünvan verdim. Küçük üÜünvanlıyı terfi ettirdim... (G-D) ............... Gök Öng (ırmağını) geçerek ordu (ile) yürüyüp geceli gündüzlü yedi vakitt...
  - `Ergin 1970, s. 30` (eslesen: _iKİ ÜÇ_)
    > ...suyuna doğru kondu. Güneyde Karluk milletine doğru ordu sevk et diyip Tudun Yamtarı gönderdim, gitti. .......... Karluk valisi yok olmuş, küçük kardeşi bir kaleye ..................... kervanı koşmadı. Onu korkutayım diyip ordu sevk ettim. [[s. 30]] Koruyucu iki üç kişi ile beraber kaçıp gitti. Halk kütlesi kağanım geldi diyip övdü ........... ad verdim. Küçük adlı .......... Güney-doğu cephesi ..... Gök Öngü çiğneyerek ordu yürüyüp, gece ve gündüz yedi zamanda susuzu geçtim. Çorağa ulaşıp yağmacı askeri .......... Keçi...
  - `Tekin 2003, s. 17` (eslesen: _iKİ ÜÇ_)
    > ...ası: *oglanıŋız-da* “oğullarınızdan”, *kurıdın-ta* “batıdan”, *tabgaç-da* “Çin’den”, vb. 7. Adların birliktelik (*comitative*) durumunun bulunması ve bu durumun {-LIgU} eki ile kurulması: *män ini-ligü* “ben erkek kardeş(im) ile birlikte”, *eki üç kişi-ligü* “iki üç kişi ile birlikte”, vb.; 8. Şimdiki zaman eylem sıfatının {-gmA} eki ile kurulması: *bar-ı-gma* “giden”, *käl-i-gmä* “gelen”, *biti-gmä* “yazan”, vb.; [s. 18] # s. 018 — TALAT TEKİN 9. Gelecek zaman kipinin {-DAçI} eki ile kurulması: *olor-taçı sän* “yaşaya...
  - `Ata 2011, s. 139` (eslesen: _iKİ ÜÇ_)
    > ...ge kaganıŋın ermiş barmış edgü iliŋe kentü yaŋıldıg “disiplinsiz olduğun için (seni) beslemiş olan bilge kağanınla hür ve müstakil iyi iline kendin hata ettin” KT D23 (+ŋ 2. tekil kişi iyelik eki ve +(ü)n belirtme durumu eki) korı-gu iki üç kişiligü tezip bardı “muhafız iki-üç kişi ile birlikte kaçıp gitti” BK D41 yuyka kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak z...
  - `Olmez 2017, s. 64` (eslesen: _iKİ ÜÇ_)
    > ...z teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10); *karluk bodun erür barur erkli yağı boltı* "Karluk halkı gelişip düşman oldu" (KT K 1) **bar Yüklem Adı:** *oguzda ėki üç bıŋ sümiüz kelteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar az bilsem de bildiğim, düşü...
  - `Tekin 1998, s. 26` (eslesen: _TeZiP BaRDI_)
    > ...almasınta yüz artuk okun urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bi...


## BK-D-41#4 - Bilge Kağan Yazıtı, Doğu 41. satir  (4 kelime)

- **transkripsiyon:** `KaRA : BODuN : KaGaNıM : KeLTİ`
- **kelime karsiliklari:** KARA : BOYLARI : KAĞANIM : GELDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _KaRA BODuN KaGaNıM KeLTİ_)
    > ...k bodun tapa süle!” tip Tudun Yamtarığ ıttım, bardı Çzcerise teren önenn Karluk) İlteber yok bolmış. İnisi bir korglanka tezip barmış ............eeen en | (D 41) |............ arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ sü...
  - `Tekin 2003, s. 214` (eslesen: _KaRA BODuN KaGaNıM_)
    > ...ru sefer et!' deyip Tudun Yamtar'ı gönderdim" (BK D 40) - *täŋri bilgä kaganta adrılmalım azmalım teyin ança ötlädim* "Kutsal Bilge Hakan'dan ayrılmayalım!" diye, öylece öğüt verdim" (O sağ 3), vb. 2. Aktarma söz temel cümlenin içine de yerleştirilebilir: - *kara bodun kaganım kälti tip ög[irip säbinti]* "Avam halk "Hakanım geldi!" diye sevindi" (BK D 41), vb. 3. Düşünme, işitme, vb. gibi eylemler bu eylemlerin sonucunu belirten yan cümleye *teyin / tiyin* ile bağlanır: - *kögmän yolı bir ärmiş, tumiş teyin eşidip...* "Kögmen dağl...
  - `Tekin 2003, s. 153` (eslesen: _KaRA BODuN_)
    > ...Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez) savaştı" (T 48-49) *alpin ärdämin üçün kü bunça tutdı* "(Küli Çor), cesur ve erdem sahibi olduğu için bunca ün kazandı" (KÇ B 12) *tay bilgä totok yablakın üçün, bir eki atlıg yablakın üçün kara bodunum öldüŋ yitdiŋ* "Tay Bilge Totok kötü olduğu için, bir iki atlı kötü olduğu için, (ey) avam halkım, öldün yittin" (MÇ D 5) Sontakı *üçün* bağlaç olarak da kullanılır (bk. **Bağlaçlar**). **356.** *üzä* "üzerine, üzerinde" < *\*üz* "üst" + *ä* (bk. **Yer Zar...
  - `Kafesoglu, s. 141` (eslesen: _KaRA BODuN_)
    > ...anlar, bk. aş. Hükümet) beylerden önce yer almaktadır143. Türkçe'de "kara" sıfatının, asanda, aşağı bir dereceyi değil, aksine, büyük, kudretli, yüksek, saygı değer seviyeyi belirttiği hususuna da aynca dikkat çekilmiştir144. [[s. 141]] Buna göre, kitabedeki "kara-bodun" ifadesini, "asıl, büyük, kalabalık bodun" diye mânalandırmak gerçeğe daha yakın görünmektedir ve ihtimal, sayısı az olanlar "ak" sayılmıştır143. Eski Türk devletlerinde bazı yüksek memuriyetlerin irsî olduğu iddia edilmiş ise de, "bey"liğin babadan oğula geç...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNıM_)
    > ...ıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş...
  - `Ergin 1970, s. 15` (eslesen: _KaGaNıM_)
    > ...doğusunda Bökli kağana kadar ordu sevk edi vermiş. Batıda Demir Kapıya kadar ordu sevk edi vermiş. Çin kağanına ilini, töresini alı vermiş. Türk halk | kitlesi şöyle demiş: illi millet idim, ilim şimdi hani, kime ili kazanıyorum der imiş. Kağanlı millet idim, kağanım hani, ne kağana işi gücü veriyorum der imiş. Öyle diyip Çin kağanına düşman olmuş. [[s. 15]] | Düşman olup, kendisini tanzim ve tertip edemediğinden yine teslim olmuş. Bunca işi gücü verdiğini düşünmeden, Türk milletini öldüreyim, kökünü kurutayım der imiş. Y...


## BK-D-41#5 - Bilge Kağan Yazıtı, Doğu 41. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `TİP : ÖGDİ : --- KA : AT : BİRTiM : KİÇiG : aTLıG ---`
- **kelime karsiliklari:** DEYİP : [BENİ] ÖVDÜ : --- KA : AD : VERDİM : KÜÇÜK : ADLI ---
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _AT BİRTiM_)
    > ...birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua MAYAN | kazganıp: Yanığı Deran ceryan ji bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s....
  - `Tekin 2003, s. 228` (eslesen: _AT BİRTiM_)
    > ...käzü süŋüşdüm. Anta sançdım. Anta udu yorıdım. Ol ay biş yegirmikä Käyrä başı, Üç Birküdä Tatar birlä katı tokıdım. Sıŋarı bodun (D 7) içikdi, sıŋarı bodun [....k]a kirti. Anta yana tüşdüm. Ötükän irin kışladım. Yagıda boşuna boşnuldum. Eki ogluma yabgu, şad at birtim; Tarduş, Töliş bodunka birtim. Ançıp bars yılka Çik tapa yorıdım. Ekinti ay tört yegirmikä Kämdä (D 8) tokıdım. Ol y[ıl.....................T]äz başı anta, Kasar kurıdın örgin anta ititdim, çıt anta tokıtdım. Yay anta yayladım, yaka anta yakaladım. Bälgümin...
  - `Tekin 1998, s. 23` (eslesen: _BİRTiM_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşl...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiM_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti...
  - `Ata 2011, s. 112` (eslesen: _BİRTiM_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövde...
  - `Tekin 1998, s. 11` (eslesen: _KİÇiG_)
    > ...İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkı...


## BK-GD-1#1 - Bilge Kağan Yazıtı, Güneydoğu 1. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- KÖK : ÖŊüG : YOGuRU : SÜ : YORıP : TÜNLİ : KÜNLİ : YİTİ`
- **kelime karsiliklari:** --- KÖK : ÖNGÜ : YOĞURUP : SÜ : YÖRÜTÜP : DÜNLÜ : GÜNLÜ : YEDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _ÖŊüG YOGuRU SÜ YORıP TÜNLİ KÜNLİ YİTİ_)
    > ............. arljkışı kelmedi. Anı anyıtayın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma...
  - `Tekin 2003, s. 112` (eslesen: _TÜNLİ KÜNLİ YİTİ_)
    > ...bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. **Yer ve Zaman Zarfları**. [s. 113] # s. 113 — ORHON TÜRKÇESİ GRAMERİ ## Bulunma-Çıkma Durumu **265.** Orhon Türkçesinde adların bulunma-çıkma durumu {+DA} eki il...
  - `Tekin 2003, s. 222` (eslesen: _ÖŊüG YOGuRU_)
    > ...; yinçgä (14) yogan bolsar, üzgülük alp ärmiş. Öŋrä Kıtañda, biryä Tabgaçda, kurya kurdınta, yırya Oguzda eki üç biŋ sümüz, kältäçimiz, bar mu nä?" Ança ötüntüm. (15) Kaganım, bän özüm, Bilgä Tuñukuk, ötüntök ötünçümin eşidü berti. "Köŋlüŋçä uduz!" tedi. Kök Öŋüg yoguru Ötükän yışgaru uduztum. İngäk kölükin Toglada Oguz kälti. (16) [Süsi altı biŋ] ärmiş. Biz eki bıŋ ärtimiz. Süŋüşdümüz. Täŋri yarlı(k)kadı, yañdımız. Ügüzkä tüşdi, yañdok yolta yämä öltik-ök. Anta ötrü Oguz kopın kälti. (17) Tü[rk kaganıg], Türk bodunug Ötük...
  - `Tekin 1998, s. 10` (eslesen: _TÜNLİ KÜNLİ_)
    > ...için taşın “içini dışını”, il törü “devlet ve töreler”, iş küç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda y...
  - `Tanyeri, s. 24` (eslesen: _TÜNLİ KÜNLİ_)
    > ...arda anlatımı güçlü ve etkili kılarak güzelleştirmek için eş, yakın ya da karşıt anlamlı ikilemeler sıkça kullanılmıştır. “Açsık tosık” (açlık tokluk), “arkış tirkiş” (kervan kafile), “eb bark” (ev bark), “iş küç” (iş güç), “için taşın” (içini dışını) ve “tünli künli” (geceli gündüzlü), yazıtlardaki söz varlığının ikilemeler açısından ne kadar zengin olduğunu göstermektedir. 6. Deyimler: Orhun Yazıtları'nın dili, deyimler açısından da oldukça zengindir. “Adak kamşat-” (gerçek anlamda ayağı burkmak, mecaz anlamda şa...
  - `Tekin 2003, s. 63` (eslesen: _YOGuRU_)
    > ...k - *näçök* "nasıl" (IB 45) < *näçä ök - *nälök* "niçin" (IB 57) < *nälä ök - *ançıp* "öyle olunca, sonra, imdi" (MÇ D 7, B 1; IB 65) < *ança ärip ? ## Benzer Hece Yitimi **100.** Aşağıdaki örnekte benzer hece yitimi meydana gelmiştir: - *yug(u)rça* "(kanı) yoğururcasına" (T 26) < *yugur-ur-ça [s. 64] # s. 64 — TALAT TEKİN ## Ünsüzler **101.** Orhon Türkçesinde şu ünsüz fonemler vardır: /p, b, t, d, k, g, ç, s, z, ş, m, n, ŋ, ń, l, r, y/. Bu ünsüz fonemler boğumlanma yerlerine göre şöyle sınıflandırılabilir: 1. dud...


## BK-GD-1#2 - Bilge Kağan Yazıtı, Güneydoğu 1. satir  (3 kelime)

- **transkripsiyon:** `ÖDüŞKE : SUBSuZ : KeÇDiM`
- **kelime karsiliklari:** ÖDÜŞTE : SUSUZA : GEÇTİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _ÖDüŞKE SUBSuZ KeÇDiM_)
    > ...ın tip süledim. Korığu eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa sü...
  - `Tekin 2003, s. 56` (eslesen: _SUBSuZ_)
    > ...l bol" (T 48) - /YULszn/ *yols(ı)z(ı)n* "yolsuz olarak" (T 35) Ancak, bazı Yenisey yazıtları ile Irk Bitig'de bu ekin dudak uyumuna girdiğini gösteren örnekler vardır: - *buŋusuz* "dertsiz, sıkıntısız" (Barık II 3, Barık 6 III 2) - *otsuz* "otsuz" (IB 45) - *subsuz* "susuz" (IB 45), vb. **78.** Addan eylem türeten {+sIrA-} eki: - *ur(u)gs(ı)rat-* "dölsüz bırakmak" (KT D 10) vb.; krş. Uyg. *kutsıra-*, *küçsirä-*, *ögsirä-* vb. **79.** Gelecek zaman-gereklilik sıfat-fiil eki {-sIK}: - /ULRsKm/ *ol(o)rs(ı)k(ı)m* "oturası...
  - `Tekin 1998, s. 11` (eslesen: _KeÇDiM_)
    > ...n kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye y...


## BK-GD-1#3 - Bilge Kağan Yazıtı, Güneydoğu 1. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÇORaKKA : TeGiP : YULıGÇI : eRİG : K --- BeS : KeÇiNKE : TeGİ : ---`
- **kelime karsiliklari:** ÇORAKA : DEĞİP : YULIGÇI : ERİ : K --- BES : KEÇİNE : DEĞİN : ---
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _ÇORaKKA TeGiP_)
    > ...eki üç kişiliğü tezip bardı. Kara bodun “Kağanım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “S...
  - `Tekin 2003, s. 41` (eslesen: _ÇORaKKA_)
    > ...vb. 7. /N/, /n/ = n(n): - /KçNŋ/ *kaçan (n)äŋ* (T 21), /Kçnŋ/ *kaça(n) näŋ* (T 20, 29) 8. Şu örnekte söz içindeki /şs/ ünsüz öbeği yalnızca bir art /S/ harfi ile gösterilmiştir: - /KBSR/ *kab(ış)sar* (T 12) Bu tür yazımın istisnaları da vardır: - /çURKKA/ *çorakka* (BK GD), /IllgdA/ *ill(i)gdä* (KT D 29, BK D 24), /Illgg/ *ill(i)g(i)g* (KT D 15, 18; BK D 13), /KRLUKKA/ *Karlukka* (KÇ D 4), [s. 42] # s. 42 — TALAT TEKİN /KUULLG/ *kull(u)g* (KT D 21, BK D 18), /tzkkA/ *Täz(i)kkä* (KÇ D 4), vb. gibi. ## Noktalama **42...


## BK-G-1#1 - Bilge Kağan Yazıtı, Güney 1. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : TaBGaÇ : aTLıG : SÜSİ : BİR : TÜMeN : aRTUKI : YiTİ`
- **kelime karsiliklari:** --- : TABGAÇ : ATLI : SÜSİ : BİR : TÜMEN : ARTI : YEDİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _aTLıG SÜSİ BİR TÜMeN_)
    > ...ım kelti” tip öğlirip sebinti .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “SE ALA TANA 1 ORHON YAZITLARI 71 doğru kaçıp! [[s. 40...
  - `Ata 2011, s. 114` (eslesen: _BİR TÜMeN aRTUKI_)
    > ..., biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi...
  - `Ata 2011, s. 107` (eslesen: _BİR TÜMeN aRTUKI_)
    > ...uz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. [[s. 107]] bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK...


## BK-G-1#2 - Bilge Kağan Yazıtı, Güney 1. satir  (5 kelime)

- **transkripsiyon:** `BİŊ : SÜG : İLKİ : KÜN : ÖLüRTüM`
- **kelime karsiliklari:** BİN : ERİNİ : İLK : GÜN : ÖLDÜRDÜM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _BİŊ SÜG İLKİ KÜN ÖLüRTüM_)
    > .............. BİSİZ ecenin |ka ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “SE ALA TANA 1 ORHON YAZITLARI 71 doğru kaçıp! [[s. 40]] giti «sans (Di 38) seeri ren nr nen...
  - `Tekin 2003, s. 205` (eslesen: _BİŊ SÜG İLKİ KÜN ÖLüRTüM_)
    > .... 3. Bir zaman birimini gösteren ad: - *türük bodun üçün tün udımadım* "Türk halkı için geceleri uyumadım" (BK D 22) - *kün yämä tün yämä yälü bardımız* "Gece gündüz dört nala gittik" (T 27) - *tün akıtdımız* "Gece akın ettik" (T 35) - *bir tümän artukı yeti biŋ süg ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1), vb. 4. Bir asıl sayı ya da sayı öbeği: - *kıtañka yeti süŋüşdi* "Kıtaylılarla yedi (kez) savaştı" (T 49) - *oguzka beş süŋüşdi* "Oğuzlarla beş (kez) savaştı" (T 45) - *tabgaçka yeti yegirmi süŋüşdi* "Çinli...
  - `Tekin 2003, s. 132` (eslesen: _İLKİ KÜN ÖLüRTüM_)
    > ...minç* "on birinci", vb. Sıra sayıları niteleyici ve zarf tümleci olarak kullanılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişi...
  - `Ata 2011, s. 115` (eslesen: _İLKİ KÜN ÖLüRTüM_)
    > ...ırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdü...
  - `Ata 2011, s. 108` (eslesen: _İLKİ KÜN ÖLüRTüM_)
    > ...geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta s...


## BK-G-1#3 - Bilge Kağan Yazıtı, Güney 1. satir  (3 kelime)

- **transkripsiyon:** `YaDaG : SÜSİN : iKiNTİ`
- **kelime karsiliklari:** YAYA : SÜSİNİ : İKİNCİ
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _YaDaG SÜSİN_)
    > ...a ât birtim. [[s. 40]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “SE ALA TANA 1 ORHON YAZITLARI 71 doğru kaçıp! [[s. 40]] giti «sans (Di 38) seeri ren nr nene Türk halkı,...
  - `Tekin 2003, s. 132` (eslesen: _YaDaG SÜSİN_)
    > ...k kullanılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...
  - `Ata 2011, s. 115` (eslesen: _YaDaG SÜSİN_)
    > ...+n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu...
  - `Ata 2011, s. 108` (eslesen: _YaDaG SÜSİN_)
    > ...dık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile...
  - `Tekin 1998, s. 19` (eslesen: _iKiNTİ_)
    > ...(ve) kuzeyde gece ortasına kadar, bu (sınırlar) içindeki (bütün) halklar hep bana tabidir. Bunca halkı (G 3) hep düzene soktum. Onlar şimdi (hiç de) kötü (durumda) değiller. Türk(lerin) hakanı Ötüken dağlarında oturur (ve oradan hükmeder) ise ülkede (hiçbir) sıkıntı olmaz. [[s. 19]] Doğuda Şantung ovasına kadar ordu sevk ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar ordu sevk ettim, Tibet'e az kala durdum; batıda İnci (Sır Derya) ırmağı(nı) (G 4) geçerek Demir Kapı 'ya kadar ordu sevk ettim; kuzeyde Yir Bayı...
  - `Ergin 1970, s. 12` (eslesen: _iKiNTİ_)
    > ...adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk et...


## BK-G-1#4 - Bilge Kağan Yazıtı, Güney 1. satir  (3 kelime)

- **transkripsiyon:** `KÜN : KOP : ÖLüRTüM`
- **kelime karsiliklari:** GÜN : HEP : ÖLDÜRDÜM
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _KÜN KOP ÖLüRTüM_)
    > ...“iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık”...
  - `Ata 2011, s. 108` (eslesen: _KÜN KOP ÖLüRTüM_)
    > ...binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgen...
  - `Tekin 1998, s. 40` (eslesen: _KÜN KOP_)
    > ...0]] Kiçiğ atlığlığ ulgartdım ................ ) (G-D) |.......... Kök| Önğüğ yoğuru sü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “SE ALA TANA 1 ORHON YAZITLARI 71 doğru kaçıp! [[s. 40]] giti «sans (Di 38) seeri ren nr nene Türk halkı, aç idi. O at s...
  - `Tekin 2003, s. 132` (eslesen: _KÜN KOP_)
    > ...iteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde...
  - `Tekin 1998, s. 19` (eslesen: _ÖLüRTüM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _ÖLüRTüM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...


## BK-G-1#5 - Bilge Kağan Yazıtı, Güney 1. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `Bİ --- : KeLiP : BarD ---`
- **kelime karsiliklari:** Bİ --- : GELİP : VARD ---
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _KeLiP_)
    > ...ğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimi...
  - `Ata 2011, s. 134` (eslesen: _KeLiP_)
    > ...ratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre inisi kag...
  - `Olmez 2017, s. 108` (eslesen: _KeLiP_)
    > ...ağ ucunda satır numarası "5", son iki satırın başlarında nokta dizileri (..........) var] *D 5. yoqçı : sıgıtçı : öyre : kün : tugsıkdaki : bökküli : çülüg ėl : tavgaç : töpöt : apar purum : kırkız : üç kurıkan : otuz tatar : kıtai : tatavı : bonça : bodun : kelipen : sıgtamış : yoglamış : antag küllüg : kagan ermiş : anta kėsre inisi kagan bolmuş erinç : oglu : kagan bolmuş erinç : anta kėsre : inisi : ėçisin teg* "(Cenazeye) Doğuda, güneşin doğduğu yerlerden Kore halkı, Zhoulular, Tibet, Avar, Bizans, Kırgız, Üç Kur...
  - `Ata 2011, s. 127` (eslesen: _KeLiP_)
    > ...ukarıda mavi gök, aşağıda kara toprak yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 [[s. 127]] kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk eri...
  - `Tanyeri, s. 19` (eslesen: _KeLiP_)
    > ...üre” (sürerek), “bintüre” (bindirerek) • “-(y)U”: “yiyü” (yiyerek), “tutunu” (tutunarak), “yabulu” (yuvarlanarak), “ölü” (ölerek) • “-(X)p”: “kodup” (koyup), “eşidip” (işitip), “olurup” (oturup), “sülep” (asker sevk edip) • “-(X)pAn”: “olurupan” (oturup), “kelipen” (gelip), “sülepen” (asker sevk edip) • “-mAtI(n)”: “udımatı” (uyumadan), “olurmatı” (oturmadan), “sakınmatı” (düşünmeden) • “-yIn”: “bulmayın” (bulmayıp), “tiyin” (diye) • “-sAr”: Göktürkçede şart kipi henüz oluşmamıştır. “-sAr” eki şahıslara bağlanmada...
  - `Ogel C2, s. 138` (eslesen: _KeLiP_)
    > ...ji ile astronomi birbirine girmiştir. Bu inanışları, ayırıp ve ayıklama çok zordur. [[s. 138]] Radlof, sözlüğünde dış kültür tesirlerinin çok az girdiği Te - Veüt Türklerinden, şöyle bir söz veriyordu: ** Yedi günden sonra, yedi kurt gelip, uludu: (Yetti pörö kelip uludu)” Astronomik bir sembol olan bu sözü, yorumlamıyalım**, Göktürk yazıları ile yazılmış Yen is ey mezar yazıtlarında bir Türk, şöyle diyordu: ** Yedi kurt öldürdüm: (Yeti böri ölürtim). Mezarın sahibi, alplık ile yiğitliğinden söz açıyordu. Ancak kurtlar...


## BK-G-2#1 - Bilge Kağan Yazıtı, Güney 2. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : YOLI : SÜLeDiM`
- **kelime karsiliklari:** --- : YOL : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _SÜLeDiM_)
    > ...ı kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 112` (eslesen: _SÜLeDiM_)
    > ...l Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Olmez 2017, s. 21` (eslesen: _SÜLeDiM_)
    > ...Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Ata 2011, s. 105` (eslesen: _SÜLeDiM_)
    > ...mış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...
  - `Ogel C2, s. 384` (eslesen: _SÜLeDiM_)
    > ...uyyynun çeşitli kollarıyla ayakları vardı. Her ne olursa"olsun, bunlar da büyük ırmaklardı. Battı Türkistan'ı temsil eden sulardı. Külte gi n yazıtında, şöyle deniyordu: “.. Batıda, Ye n çü ırmağını (ögüz) geçerek (keçe), D e - mir Kapı *ya kadar akın yaptım (süledim)*. [[s. 384]] Aynı sözler, -küçük gramer ayrılığıyla-, Ton yu ku k yazıtı içinde de görülüyordu*?. 2) Çin'de: “Yaşıl Ögüz'? Yeşil ırmak. Bu, Çin'in ünlü S ar ırmağı idi. Bu ırmağa Batı ile biz, “sarı” rengi vermiş ve “Sarı ırmak” demişizdir. Çin'de ise buna,...


## BK-G-2#2 - Bilge Kağan Yazıtı, Güney 2. satir  (8 kelime)

- **transkripsiyon:** `OTuZ : aRTUKI : SeKiZ : YaŞıMA : KIŞıN : KITaYN : TaPA : SÜLeDiM`
- **kelime karsiliklari:** OTUZ : ARTI : SEKİZ : YAŞIMDA : KIŞIN : KITAY : TARAFINA : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 40` (eslesen: _OTuZ aRTUKI SeKiZ YaŞıMA_)
    > ...ü yorıp tünli künli yiti ödüşke subsuz keçdim. Çorakka teğip yolağçı (erliğ (G VI... Tablgaç atlığ süsi bir tümen artukı yeti bing süğ ilki kün ölürtüm. Yadağ süsin ekinti kün kop (ölür|tüm bi|.. Feri İşıp bardlı ........) (G2) |............ ylolı süledim. Otuz artukı sekiz yaşıma kışın Kıtaniy tapa süledim. |.... “SE ALA TANA 1 ORHON YAZITLARI 71 doğru kaçıp! [[s. 40]] giti «sans (Di 38) seeri ren nr nene Türk halkı, aç idi. O at sürüsünü alıp (onları) doyurdum. Otuz dört yaşımda Oğuz'lar kaçıp Çin'e gittiler. (Buna) üzülüp sefer e...
  - `Ata 2011, s. 114` (eslesen: _OTuZ aRTUKI SeKiZ_)
    > ...= Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen...
  - `Ata 2011, s. 107` (eslesen: _OTuZ aRTUKI SeKiZ_)
    > ...Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. [[s. 107]] Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi...


## BK-G-2#3 - Bilge Kağan Yazıtı, Güney 2. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : OTuZ : aRTUKI : TOKuZ : YaŞıMA : YaZıN : TaTaBI : TaPA : SÜLeDiM`
- **kelime karsiliklari:** --- : OTUZ : ARTI : DOKUZ : YAŞIMDA : YAZIN : TATABI : TARAFINA : SÜLEDİM
- **kanit:**
  - `Ata 2011, s. 119` (eslesen: _YaZıN TaTaBI TaPA SÜLeDiM_)
    > ...yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın...
  - `Ata 2011, s. 112` (eslesen: _YaZıN TaTaBI TaPA SÜLeDiM_)
    > ...da’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig...
  - `Tekin 1998, s. 38` (eslesen: _OTuZ aRTUKI_)
    > .... Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz men...
  - `Tekin 2003, s. 129` (eslesen: _OTuZ aRTUKI_)
    > ...iş* "67" (Begre b 27), *säkiz yetmiş* "68" (Hem.-Çır. 9), *tokuz säkiz on* "79" (Elegest I 5), vb. 3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Eleg...
  - `Ata 2011, s. 114` (eslesen: _OTuZ aRTUKI_)
    > ...unu anlarız ve kalıptaki onluk hane yerine 30’u koyarız. Böylece, T. Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer:...
  - `Tekin 2003, s. 118` (eslesen: _TaTaBI TaPA_)
    > ...n" (K D 23) *bilmäz bilig+in biltöküm+ün ödöküm+ün bunça bitig bitidim* "Cehalet ile, bildiklerim ile ve hatırladıklarımla bunca yazıyı yazdım" (KÇ G 3) 5. Eylemin işlendiği zaman: *kış+ın kıtań tapa sülädim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) *yaz+ın tatabı tapa sülädim* "İlkbaharda Tatabılara doğru sefer ettim" (BK G 2) *yalabaçi ädgü sabi ötügi kälmäz tiyin yay+ın sülädim* "Elçisi, iyi haberleri ve ricaları gelmiyor diye yazın sefer ettim" (BK D 39) *ol yıl küz+ün ilgärü yorıdım tatarıg ayıttım* "O yıl güzün doğuya...


## BK-G-3#1 - Bilge Kağan Yazıtı, Güney 3. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- MeN : ÖLüRTüM : OGLIN : YOTuZIN : YILKıSIN : BaRıMıN : --- RA : KO ---`
- **kelime karsiliklari:** --- BEN : ÖLDÜRDÜM : OĞLUNU : YOTUZUNU : YILKISINI : VARINI : --- AR : KO ---
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _YILKıSIN BaRıMıN_)
    > ...uğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledi...
  - `Tekin 2003, s. 227` (eslesen: _YILKıSIN BaRıMıN_)
    > ...ŋ]ri tuta birti. Kara İgil bodunug yok kılmadım, äbin barkın yılkısın [y]ul(ı)madım. Kıyın aydım, turguru ko(t)tum. "Käntü bodunum," tidim, "udu käliŋ!" tidim. Kodup bardım. Kälmädi. Yiçä (D 3) irtim. Burguda yetdim. Törtünç ay tokuz yaŋıka süŋüşdüm, sançdım. Yılkısın barımın, kızın koduzın kälürtüm. Bişinç ay udu kälti. Säkiz Oguz, Tokuz Tatar kalmatı kälti. Säläŋä kidin, Yılun Kol birdin sıŋar Şıp başıŋa tägi çärig itdim. (D 4) Kärgün Sakışın, Şıp başın yürä kälti.... uçı Säläŋäkä tägi çärig itdi. Bişinç ay tokuz otuzka süŋüşdü...
  - `Tekin 2003, s. 59` (eslesen: _YILKıSIN_)
    > ...D 35 vb.) - *kızın* "kızlarını" (BK K 10 vb.) < **kız-in* - *sabın* "sözlerini" (T 22, 58 < *sab-in* (KT G 9, BK K 14) - *taş(ı)n* "dışını" (T 13) < *taş-in* (KT G 12, BK K 14) - *usın* "uykusunu" (T 19) < **ū-sin* - *y[ıl]k[ıs]ın* "at sürülerini" (BK GB) < *yılkısin* (BK D 24) Uygur yazıtlarında da art ünlülü sözcüklere eklenen 3. kişi iyelik eki genellikle ünlü uyumuna girer: - *atın* "adlarını" (Tar. K 5) < *āt-in* - *bar(ı)mın* "malını mülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *ba...
  - `Ata 2011, s. 172` (eslesen: _YILKıSIN_)
    > ...iyi yaptım. Dört taraftaki halkı hep kı[l͡t](ı)m ko͡ op m(a)ŋa körti y(e)ti y(e)g(i)rmi y(a)ş(ı)ma t(a)ŋut t(a)pa kendime tabî ettim, (halkımı) sül(e)d(i)m t(a)ŋut bod(u)n(u)g düşmansız hâle getirdim, (bu buzd(u)m og(u)lin yu[tuz]in yılkısin halkların) hepsi bana bağımlı oldu. b(a)r(ı)min (a)nt͡ a (a)lt(ı)m s(e)k(i)z On yedi yaşımda Tangut tarafına y(e)g(i)rmi y(a)ş(ı)ma (a)ltı çub sogdak doğru asker sevk ettim, Tangut hal- kını bozg...
  - `Tekin 1998, s. 19` (eslesen: _ÖLüRTüM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _ÖLüRTüM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...


## BK-G-4#1 - Bilge Kağan Yazıtı, Güney 4. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `BODuN --- : --- : YOTuZIN : YOK : KILDıM : ---`
- **kelime karsiliklari:** BOYLARINI : --- : YOTUZUNU : YOK : KILDIM : ---
- **kanit:**
  - `Ergin 1970, s. 31` (eslesen: _YOK KILDıM_)
    > ...ettim. Otuz sekiz yaşımda kışın Kitaya doğru ordu sevk ettim ......... Otuz dokuz yaşımda ilk baharda Tatabıya doğru ordu sevk ettim. .................... ben ......... öldürdüm. Oğlunu, karısını, at sürüsünü, servetini ........... | millet ......... karısını yok kıldım............ | .......... [[s. 31]] | savaştım. .......... verdim. Kahraman erini öldürüp balbal kılı verdim. Elli yaşımda Tatabı milleti Kıtaydan ayrıldı. .......... İker dağına .......... | Kugeneral kumandasında kırk bin asker geldi. Töngkes dağında hücum e...
  - `Tekin 1998, s. 25` (eslesen: _KILDıM_)
    > ...ı halklarına doğru, güneyde (de) Çin'e doğru on iki kez büyük ordu sevk ettim... savaştım. [[s. 25]] Ondan (D 29) sonra, Tanrı esirgesin, ilâhi lütfum olduğu için, kısmetim olduğu için, ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım. Sayıca az olan halkı çoğalttım; güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki (D 30) halkları hep (kendime) bağımlı kıldım, (Türk halkını) düşmansız kıldım. (Bu halkların) hepsi bana bağımlı oldular, (bana) hizmet ediyorlar. [...
  - `Ergin 1970, s. 13` (eslesen: _KILDıM_)
    > ...yere gittin. Hep orda mahvoldun, yok edildin. Orda, geri kalanınla her yere hep zayıflayarak, ölerek yürüyordun. Tanrı buyurduğu için, kendim devletli olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk mille...
  - `Ata 2011, s. 55` (eslesen: _KILDıM_)
    > ...eykelinin kırık olan başı. olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki halkları hep (kendime)...
  - `Ata 2011, s. 48` (eslesen: _KILDıM_)
    > ...ltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) “Tanrı [[s. 48]] bağışlasın, ilahî lutfum olduğu için, kısmetim olduğu için ölecek halkı diriltip doyurdum. Çıplak halkı giyimli, yoksul halkı zengin kıldım; sayıca az olan halkı çoğalttım, güçlü devleti olandan, güçlü hakanı olandan daha iyi kıldım. Dört bucaktaki halkları hep (kendime) bağımlı kıldım, (Türk halkını) düşmansız kıldım. (Bu halkların) hepsi bana bağımlı oldular, bana hizmet ediyorlar. Bunca çalışı...
  - `Roux, Eski Turk Mitolojisi, s. 65` (eslesen: _KILDıM_)
    > ...10 7 tedir. O, "Türk halkının adı ve itibarının zarar görmemesini" sağlamaktadır. Onun müdahalesi sayesinde hükümdar şöyle diyebilmektedir: "Ben, ölüm döşeğinde yatan halkı sağaltarak tekrar yaşama döndürdüm. Çıplak halkı giydirdim, fakir halkı varlıklı kıldım ve küçük halkı büyüttüm." Dolayısıyla, halk onu kendine ait olarak görebilir ve onu "tanrım" (Tengrim) olarak adlandırabilir. Ne var ki, daha düşük seviyelerdeki tanrılara ilgi duyan asıl kitlelerin, görünüşe göre Tengri ile doğrudan bir ilgileri yok. Onu...


## BK-G-5#1 - Bilge Kağan Yazıtı, Güney 5. satir  (1 kelime, TAS KIRIGI)

- **transkripsiyon:** `YOR ---`
- **kelime karsiliklari:** YOR ---
- **kanit:** _(korpusta eslesme yok - bos birak)_


## BK-G-6#1 - Bilge Kağan Yazıtı, Güney 6. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `SÜŊüŞDüM : --- : --- ÜÇiN ---`
- **kelime karsiliklari:** SÜNGÜŞDÜM : --- : --- İÇİN ---
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


## BK-G-7#1 - Bilge Kağan Yazıtı, Güney 7. satir  (7 kelime)

- **transkripsiyon:** `BiRTiM : aLP : eRİN : ÖLüRüP : BaLBaL : KILU : BiRTiM`
- **kelime karsiliklari:** VERDİM : ALP : ERİNİ : ÖLDÜRÜP : BALBAL : KILI : VERDİM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _aLP eRİN ÖLüRüP BaLBaL_)
    > ...sürülerini (ve) (tüm) varlıklarını aldım ........ 2.20 (8 4). Halk kumun [s. 41] 78 BİLGE KAĞAN YAZITI BARET yujtuzin: yok kıltımi Çessescnarcnecezndı GG 5S) yorlıp KASTAN 7 AR SAĞA YTR YAAA AAA 1) (G 6) sünglüşdüm SEİR ERĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi...
  - `Ata 2011, s. 142` (eslesen: _aLP eRİN ÖLüRüP BaLBaL_)
    > ...unıŋ ilin törüsin tut-a bir-miş it-i bir-miş “Türk halkının devletini (ve) törelerini tutmuş, düzenlemiş” BK D3, KT D1 kün tugsıkda bükli kaganka tegi süle-yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasalar...
  - `Ata 2011, s. 135` (eslesen: _aLP eRİN ÖLüRüP BaLBaL_)
    > ...anlamı katar: türük bodunıŋ ilin törüsin tut-a bir-miş it-i bir-miş “Türk halkının devletini (ve) törelerini tutmuş, düzenlemiş” BK D3, KT D1 kün tugsıkda bükli kaganka tegi süle-yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 [[s. 135]] bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp...


## BK-G-7#2 - Bilge Kağan Yazıtı, Güney 7. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `eLiG : YaŞıMA : TaTaBI : BODuN : KITaYNDA : aDKıG --- : --- Ka --- : TÖŊüKeR : TaGKA`
- **kelime karsiliklari:** ELLİ : YAŞIMDA : TATABI : BOYLARI : KITAYDAN : AYRILDI --- : --- KA --- : TÖNGÜKER : DAĞINA
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _eLiG YaŞıMA TaTaBI BODuN_)
    > ...dım ........ 2.20 (8 4). Halk kumun [s. 41] 78 BİLGE KAĞAN YAZITI BARET yujtuzin: yok kıltımi Çessescnarcnecezndı GG 5S) yorlıp KASTAN 7 AR SAĞA YTR YAAA AAA 1) (G 6) sünglüşdüm SEİR ERĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl k...
  - `Tekin 1998, s. 25` (eslesen: _TaTaBI BODuN_)
    > ...in birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre, Tengri yarlıkazu, kutum bar üçün, ülüğüm bar üçün, ölteçi bodunuğ tirgürü iğittim. Yalang bodunuğ tonluğ, çığany bodunuğ bay kıltım. Az bodunuğ üküş kıltım; ığar elli...
  - `Tekin 2003, s. 151` (eslesen: _TaTaBI BODuN_)
    > ...r: *äligçä är tutdumuz ol ok tün bodunin sayu ı(t)tımız* "Elli kadar asker yakaladık; hemen o gece hepsinin halkına (onlarla haber) gönderdik" (T 42) **353.** *tapa* "-a doğru, yönünde" < *tap-* "bulmak, arayıp bulmak": *yırgaru oguz bodun tapa, ilgärü kıtañ tatabı bodun tapa, birgärü tabgaç tapa ulug sü eki yegirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzla...
  - `Tekin 1998, s. 37` (eslesen: _YaŞıMA_)
    > ...bodunuğ tfirglürü iğittim. Yalang bodunuğ tonluğ kıltım, çığariy bodunuğ bay kıltım. (D 24) Az bodunuğ üküş kıltım, ığar elliğde, (ıJğar kağanlığda yeğ kıltım. Tört bulungdakı bodunuğ kop baz kıltım, yağısız kıfltJim. Kop mahıga körti. [[s. 37]] Yeti yeğirmi yaşıma Tafiğut tapa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım...
  - `Tekin 2003, s. 150` (eslesen: _YaŞıMA_)
    > ...) arasında benim vadilerim ve tarlalarım (var)" (Tar. B 4) *kamış āra kalmiş* "(Bir cariye) kamışlar arasında kalmış" (IB 38) *busanç āra mäŋi kälmiş* "keder arasında mutluluk gelmiş" (IB 52), vb. **350.** *birlä* "ile, ile birlikte" < *\*bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı...
  - `Ata 2011, s. 113` (eslesen: _YaŞıMA_)
    > ...eklik 1. ve 2. kişi iyelik eklerinden sonra geldiği örnekler vardır. Fakat söz konusu iyelik eki almış isimlerden sonra aynı ek +kA şeklinde de gelebilmektedir. 1. Teklik 1. kişi iyelik ekinden sonra: sekiz yegirmi yaş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gir...


## BK-G-8#1 - Bilge Kağan Yazıtı, Güney 8. satir  (3 kelime)

- **transkripsiyon:** `KUG : SeŊÜN : BaŞadU`
- **kelime karsiliklari:** KUĞ : SENGÜN : BAŞINDA
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _KUG SeŊÜN_)
    > ...EİR ERĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlı...
  - `Ata 2011, s. 141` (eslesen: _KUG SeŊÜN_)
    > ...bir yerde tespit edilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz o...
  - `Ata 2011, s. 134` (eslesen: _KUG SeŊÜN_)
    > ...rhun Türkçesinde bir yerde tespit edilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. [[s. 134]] Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “geceleri uyumadan g...
  - `Tekin 1998, s. 28` (eslesen: _SeŊÜN_)
    > .... (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğ...
  - `Ata 2011, s. 112` (eslesen: _SeŊÜN_)
    > ...z+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkın...
  - `Ata 2011, s. 105` (eslesen: _SeŊÜN_)
    > ...yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. [[s. 105]] tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka...


## BK-G-8#2 - Bilge Kağan Yazıtı, Güney 8. satir  (4 kelime)

- **transkripsiyon:** `TÖRT : TÜMeN : SÜ : KeLTİ`
- **kelime karsiliklari:** DÖRT : TÜMEN : SÜ : GELDİ
- **kanit:**
  - `Tekin 1998, s. 25` (eslesen: _TÜMeN SÜ KeLTİ_)
    > ...boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng ilki Tadıkıfiğ Çorifiğ boz (atığ binip teğdi. Ol at...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_4, s. 284` (eslesen: _TÜMeN SÜ_)
    > ...k için elini koynuna sokmak. Bk: soglıt —, sograt —, sugrat — soglıt — — aramak için elini koynuna sokturmak. Bk: soglı—, sograt—, sugrat—. sograş — — sormak, emmek. sograt — — aratmak, aratarak her şeyi görmek. Bk: sog—, soglı—, soglıt—, sogur—. Krş.: Rad., Tümen— suk — — aramak, soguk — soğuk. /Rad.; Caf./. [[y. 284]] — luk — soğukluk için hazırlanmış. soguklan — — soğuk bulmak veya soğuk saymak. sogul — — -su- toprağa sızıp kaybolmak, soğulmak, -su, süt-çekilmek, azalmak. Krş.: Caf.— sugul — — kurumak, su çekilmek....
  - `03_Codex_Cumanicus_Kuun_1880, s. 411` (eslesen: _SÜ KeLTİ_)
    > ...97. Kelanedir ? «trahit» pag. 228. Kelepen s. keleppen «ieprosus»pag. Keliyrir «venit» pag. 143, keji i. e. kelejir idem pag. 144, kelgay «ve- niat» ibid., keluyorler «veniunt» pag. [[y. 411]] 221, — keltiristi perf. formae fact., e. g. sukeltiristi i. e. su keltiristi «juvavit in gerenda aqua» Kyk «incendium» pag. 148. Kyce «parvusB» pag. 146, cf. chi^i. Kic^iyder ma «pruritum sentio» pag. Ky^kerir «clamat pag. 169. Kijgil «indue» pag. 66, cf. keyic. Kiynarsen «affligens» pag. 213, cf. kinahp. Kigir «nictatur» pag...
  - `Ata 2011, s. 114` (eslesen: _TÜMeN_)
    > ...çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi...
  - `Olmez 2017, s. 13` (eslesen: _TÜMeN_)
    > ...2000: 384))* Türkler tarih sahnesine çıkana kadar Rouranlara bağlı 柔然 (Juan-juan / Ruanruan 蠕蠕, Ruru 茹茹 olarak da bilinirler) vassal bir kavimdiler. Türk devletinin kuruluşuyla ilgili yaygın anlatı, sonradan Türk devletinin kurucusu olan Bumin Kağan'ın (土門 *Tümen/Tumin ?*) Rouran prensesi ile evlenmek istemesi ve hükümdar Anaguy'un (阿那瓌 *anagui*) bu isteği reddedişi ile başlar. Bunun üzerine Türkler Bumin'in öncülüğünde ayaklanırlar ve böylelikle ilk Türk devleti kurulur (Weiers s. 46). Bir başka görüşe göre de, Roura...
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...


## BK-G-8#3 - Bilge Kağan Yazıtı, Güney 8. satir  (4 kelime)

- **transkripsiyon:** `TÖŊüKeR : TaGDA : TeGiP : TOKIDıM`
- **kelime karsiliklari:** TÖNGÜKER : DAĞINDA : DEĞİP : DOKUNDUM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _TOKIDıM_)
    > ...targuda sünğüşdüm. Süsin sançdım |............... Ülçünç (Çuş başınta süjüğüşdüm. Türük bodun adak kamşattı, yablak (D 31) boltaçı erti. Oza yaniya keliğme süsin ağıttım. Üküş ölteçi anta tirilti. Anta Tongra yılpağutı bir uğuşuğ Tofgğa Tigin yoğlınta| eğire tokıdım. [[s. 38]] Törtünç Ezgenti Kadızda sünğüşdüm. Süsin anta sançdım, yabrıtdim. Çor | Otuz artukı eki yaşıma Amgı korgan kışladukda yut boltı. ORHON YAZITLARI 73 Yirmi yedi yaşımda Kırgız'lara doğru sefer ettim. Mızrak batımı (D 27) karı sökerek, Köğmen dağl...
  - `Tekin 2003, s. 227` (eslesen: _TOKIDıM_)
    > ...çgärip yana yorıdım. Käyrä başınta Üç Birküdä kan süsi [birlä] katıltım. Anta .... (K 8) irtim. Kara Kum aşmiş, Kügürdä, Kömür tagda, Yar ügüzdä üç tuglug Türük bodun ..... (K 9) Ozmiş Tigin kan bolmiş. Koñ yılka yorıdım. Ekinti süŋüş [äŋ il]ki ay altı yaŋıka tokıdım ..... (K 10) tutdum. Katunın anta altım. Türük bodun anta ıngaru yok boltı. Anta kisrä takagu yılka .......... bodun ............. (K 11) Üç Karluk yablak sakınıp täzä bardı, kur(ı)ya, On Ok(k)a kirti. Lagzın yılka t[okıdım] .....................................
  - `Tekin 1998, s. 11` (eslesen: _TaGDA_)
    > ...n da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu deyimlerden bazıları: adak kamşat- “ayağı burkulmak, ayağı dolaşmak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “iç...
  - `Tekin 2003, s. 177` (eslesen: _TaGDA_)
    > ...önl(üm)den feryat etmek gelince (onu) geri çevirterek yas tuttum" (KT K 11) *süŋüş bol-sar çärig itär ärti, ab abla-sar ärmäli täg ärti* "Savaş olunca orduyu düzenler idi, av avlasa yarış atı (?) gibi idi" (KÇ B 9) *yay bol-sar üzä täŋri köbürg(ä)si ätärçä... tagda sıgun ät-sär [ança] sakınur män* "Yaz gelince yukarıda gök davulu nasıl gümbürderse... dağlarda geyikler nasıl böğürürse (işte öyle) yas tutuyorum" (BK B 3-6) *öd täŋri ay-sar kişi oglı kop ölgäli törümiş* "Zaman tanrısı buyurunca insanoğulları hep ölümlü yar...
  - `Ata 2011, s. 52` (eslesen: _TaGDA_)
    > ...bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bo...
  - `Olmez 2017, s. 20` (eslesen: _TaGDA_)
    > ...mıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler. Babam hakan on yedi savaşçıyla isyan etmiş. 'İsyan başlıyor' diye haber gelince şehi...
