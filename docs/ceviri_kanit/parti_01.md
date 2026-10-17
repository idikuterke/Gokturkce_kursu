# Ceviri istek paketi 1 - Orhun cumlecikleri

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


## KT-G-1#1 - Kül Tigin Yazıtı, Güney 1. satir  (4 kelime)

- **transkripsiyon:** `TeŊRİ : TeG : TeŊRİDE : BOLMuŞ`
- **kelime karsiliklari:** TANRI : DEK : TANRIDAN : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 15` (eslesen: _TeŊRİ TeG_)
    > ...a”, YULG BALI (yolluğ) “Yolluğ” vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince ya...
  - `Ata 2011, s. 153` (eslesen: _TeŊRİ TeG_)
    > ...ı)p öls(i)k(i)ŋ(i)n y(e)me KÖL TİGİN GÜNEY 1-10 (Muharrem Ergin, Orhun Abideleri, Boğaziçi Yayınları, 25. Baskı, İstanbul 2000’den) 145 [s. 153] Metinde Geçen Sözcüklerin Çözümlemeleri: teŋri “1. gök, gökyüzü; 2. tanrı” teŋri teg “tanrı gibi” teŋride bol- “gökyüzünde yaratılmak” +de [bulunma-çıkma durumu eki] –mış [geçmiş zaman sıfat-fiil eki] türük “Türk” (“Türk” adının Orhun Türkçesinde iki heceli olduğu yazımından anlaşılmaktadır.) öd “zaman” + ke [yönelme durumu...
  - `Olmez 2017, s. 102` (eslesen: _TeŊRİ TeG_)
    > ...ğu yüzünde 41, güney yüzünde 15 satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : s...
  - `Tekin 1998, s. 19` (eslesen: _TeG TeŊRİDE_)
    > ...z; Cz,2 M LA alt, İt > N anç, enç, nçÇ 9(T9) NE ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığd...
  - `Ata 2011, s. 146` (eslesen: _TeŊRİ TeG_)
    > ...senin) yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de KÖL TİGİN GÜNEY 1-10 (Muharrem Ergin, Orhun Abideleri, Boğaziçi Yayınları, 25. Baskı, İstanbul 2000’den) [s. 146] Metinde Geçen Sözcüklerin Çözümlemeleri: teŋri “1. gök, gökyüzü; 2. tanrı” teŋri teg “tanrı gibi” teŋride bol- “gökyüzünde yaratılmak” +de [bulunma-çıkma durumu eki] –mış [geçmiş zaman sıfat-fiil eki] türük “Türk” (“Türk” adının Orhun Türkçesinde iki heceli olduğu yazımından anlaşılmaktadır.) öd “zaman” + ke [yönelme durumu eki] olur- “oturma...
  - `Ogel C2, s. 90` (eslesen: _TeŊRİ TeG_)
    > ...den yücesin! Kimse bilmez nicesin!*” Bizce bu eöz, Türk düşüncesinde *“*“v âcibül-Vücüd”'”' anlayışının, başka bir anlatışı olsa gerektir. Eski Türklerde, Tanrı'nın vücudu için, “vâcib ül-vücüd” anlayışı var mıydı? [[s. 90]] W.Thomsen'in de yorumuna uyarak, ““Tengri teg Tengri” sözü, Göktürk yazıtlarında, “göğe veya kendine benzer Tanrı ””'inanışının bir ifadesi olmalıydı. 9) Babanın oğlundan canını esirgemesi: Bilindiği üzere, Azrail Deli Dumrul'dan canını istemesi üzerine, babası ile annesine gider ve kendisi yerine, onla...


## KT-G-1#2 - Kül Tigin Yazıtı, Güney 1. satir  (6 kelime)

- **transkripsiyon:** `TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM`
- **kelime karsiliklari:** TÜRK : BİLGE : KAĞAN : BU : ÖDE : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _TÜRÜK BİLGE KaGaN BU_)
    > ...> N anç, enç, nçÇ 9(T9) NE ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkk...
  - `Tekin 1998, s. 15` (eslesen: _TÜRÜK BİLGE KaGaN_)
    > ...vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince yazıt iyi durumda olduğundan hemen okunmuş ve...
  - `Olmez 2017, s. 102` (eslesen: _TÜRÜK BİLGE KaGaN_)
    > ...satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip...


## KT-G-1#3 - Kül Tigin Yazıtı, Güney 1. satir  (3 kelime)

- **transkripsiyon:** `SaBıMıN : TÜKeTİ : eŞİDGiL`
- **kelime karsiliklari:** SAVIMI : TÜKETE[NE-DEK] : İŞİT[İN]
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _SaBıMıN TÜKeTİ eŞİDGiL_)
    > ..., nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru...
  - `Ata 2011, s. 146` (eslesen: _SaBıMıN TÜKeTİ eŞİDGiL_)
    > ...138 [s. 146] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz c. türk sir bodun yerinte idi yorımazun d. tögültün yazı konayın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ı...
  - `Ata 2011, s. 139` (eslesen: _SaBıMıN TÜKeTİ eŞİDGiL_)
    > ...ag yabız boltı tip algalı kelti [s. 139] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz c. türk sir bodun yerinte idi yorımazun d. tögültün yazı konayın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür y...


## KT-G-1#4 - Kül Tigin Yazıtı, Güney 1. satir  (16 kelime)

- **transkripsiyon:** `ULaYU : İN : YeGÜNüM : OGLaNıM : BİRiKİ : OGuŞuM : BODuNuM : BİRiYE : ŞaDPIT : BeGLeR : YIRıYA : TaRKaT : BUYRUK : BeGLeR : OTuZ : TaTaR`
- **kelime karsiliklari:** EVVELA : KARDEŞ : YEĞENİM : OĞLUM : BERİKİ : OĞUŞUM : BOYLARIM : BERİDE : ŞADPIT : BEĞLERİ : YIRIDA : TARKAT : BUYRUK : BEĞLERİ : OTUZ : TATAR
- **kanit:**
  - `Ata 2011, s. 163` (eslesen: _BeGLeR YIRıYA TaRKaT BUYRUK_)
    > ...b. Emir kipi, ikinci tekil kişi c. Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi 155 [s. 163] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangi- sinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +an, +um, +ler, +t e. +gün, +an, +ya...
  - `Tekin 1998, s. 19` (eslesen: _TaRKaT BUYRUK BeGLeR OTuZ_)
    > ...; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop i...
  - `Ata 2011, s. 156` (eslesen: _BeGLeR YIRıYA TaRKaT BUYRUK_)
    > ...ştır? a. Gelecek zaman, birinci tekil kişi b. Emir kipi, ikinci tekil kişi c. [[s. 155]] Geniş zaman, ikinci tekil kişi d. Gelecek zaman, üçüncü tekil kişi e. Gelecek zaman, ikinci tekil kişi [s. 156] 6. iniygünüm oglanım biriki uguşum bodunum biriye şadapıt begler yırıya tarkat buyruk begler ifadesinde geçen çokluk ekleri aşağıdakilerin hangisinde, sırasıyla ve doğru olarak verilmiştir? a. -+an, +ki, +ler, +t b. +gün, +an, +ler, +t c. +gün, +an, +ye, +ler, +t d. +an, +um, +ler, +t e. +gün, +an, +ya, +t 7. ve 8. sorular aşağıdaki cümleye g...


## KT-G-2#1 - Kül Tigin Yazıtı, Güney 2. satir  (28 kelime)

- **transkripsiyon:** `TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : BİRiGeRÜ : KÜN : ORTUSIŊaRU : KURIGaRI : KÜN : BaTSIKIŊA : YIRıGaRI : TÜN : ORTUSIŊaRU : aNDA : İÇReKİ : BODuN : KOP : MaŊA : KÖRüR`
- **kelime karsiliklari:** DOKUZ : OĞUZ : BEĞLERİ : BOYLARI : BU : SAVIMI : İYİCE : İŞİT : KATICA : DİNLE : İLERİ : GÜN : DOĞUSUNA : BERİDE : GÜN : ORTASINA : GERİDE : GÜN : BATISINA : YIRIDA : GECE : ORTASINA : [O] ANDA : İÇİNDEKİ : BOYLAR : HEP : BANA : GÖRÜR
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _TOKUZ OGuZ BeGLeRİ BODuNI_)
    > ...üzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış...
  - `Ata 2011, s. 154` (eslesen: _TOKUZ OGuZ BeGLeRİ BODuNI_)
    > ...e durumu eki] tarkan “yüksek bir unvan” +t [çokluk eki] (/n/ ile sonlanan adlara bu ek ulanırken /n/ düşer ve onun yerine ek ünsüzü /t/ gelir). buyruk “kumandan, vezir” < buy(u)r- “buyurmak, emir vermek” –uk [isimden fiil yapım eki] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10,...
  - `Olmez 2017, s. 21` (eslesen: _TOKUZ OGuZ BeGLeRİ BODuNI_)
    > ...e Moğolistan'ın doğusundan Kore'ye kadar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin...
  - `Ata 2011, s. 147` (eslesen: _TOKUZ OGuZ BeGLeRİ BODuNI_)
    > ...r(ı) “kuzey” +(y)a [yönelme durumu eki] tarkan “yüksek bir unvan” +t [çokluk eki] (/n/ ile sonlanan adlara bu ek ulanırken /n/ düşer ve onun yerine ek ünsüzü /t/ gelir). buyruk “kumandan, vezir” < buy(u)r- “buyurmak, emir vermek” –uk [isimden fiil yapım eki] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. [[s. 147]] tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, ta...


## KT-G-2#2 - Kül Tigin Yazıtı, Güney 2. satir  (2 kelime)

- **transkripsiyon:** `BUNÇA : BODuN`
- **kelime karsiliklari:** BUNCA : BOYLARI
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _BUNÇA BODuN_)
    > ...eri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler) benim sözümü kırmadılar (ve) (G 12) Çin hakanının has sanatçıların...
  - `Tekin 2003, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...anta yası taşka yaratıtdım* "Bin yıllık on bin günlük yazıtımı ve damgamı orada yassı taş üzerine yazdırttım" (MÇ D 9-10) **290.** *bu* gösterme zamirinin eşitlik durumu olan *bunça* "bunca, bu kadar" sözcüğü de belirsizlik sayısı görevi ile kullanılabilir: *bunça bodun kälipän sıgtamiş yoglamiş* "...bunca halk(ların temsilcileri) gelip ağlamış ve yas tutmuş" (KT D 4, BK D 5) *bunça bädizçig tuygun eltäbär käl(ür)ti* "Bunca ressam ve heykeltraşı [s. 135] # s. 135 — ORHON TÜRKÇESİ GRAMERİ Tuygun Elteber getirdi" (KT KD) *bu...
  - `Ata 2011, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre ini...
  - `Ata 2011, s. 127` (eslesen: _BUNÇA BODuN_)
    > ...kılın-mış “yukarıda mavi gök, aşağıda kara toprak yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 [[s. 127]] kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmad...
  - `Roux, Altay Turklerinde Olum, s. 247` (eslesen: _BUNÇA BODuN_)
    > ...uygulamanın ayrıca Beltirlerde, Gotlarda, Ostiaklarda MO KATANOV, Über die Best., s. 290 ve 275. Hİ JORDANES, XLİX. MR HARVA, s. 291. 1 RUDENKO, Kul'tura, s. 159. [s. 247] CENAZE TÖRENLERİ bir kalıntı olarak bulunduğu görülmektedir." Orhun Yazıtları'nda, bunça bodun saçin ... |bliçdi, tüm bu insanlar saçlarını kestiler! şeklinde bir cümleyi okumak mümkündür. Orhun Yazıtları, saçların bu şekilde kesilip atılması işleminin, ölüm sırasında değil de cenaze töreninin düzenlendiği sırada yapılmış olması gerektiğini göstermekte...
  - `Tekin 1998, s. 19` (eslesen: _BUNÇA_)
    > ...Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve...


## KT-G-3#1 - Kül Tigin Yazıtı, Güney 3. satir  (4 kelime)

- **transkripsiyon:** `KOP : İTDiM : OL : aMTI`
- **kelime karsiliklari:** HEP : [DÜZEN] ETDİM : O[NLARIN] : ŞİMDİ
- **kanit:**
  - `Tekin 1998, s. 30` (eslesen: _KOP İTDiM OL aMTI_)
    > ...dke olurtum. Sabımın tüketi eşid, ulayu iniygünüm oğlanım, birki uğuşum, (bodunum ................... ilgerü kün) (K 2) tuğsıkıfğğa, birgerü kün ortusıfğaru, kurığaru kün batsıkınga, yırgaru tün ortusıfığaru... anta içreki bodun kop mahfga körür. (Bunça bodun kop itdim). Ol amtı ariylığ yok. TJürük (Kağlan Ötüken |yılş olursar il)te |bung) yok. [[s. 30]] İlglerü Şlantunğ Iyazıka teği süledim, taluyka kiçiğ teğmedim;) blilrg<er>ü Tfokuz| (K 3) Ersinke teği süledim, Tüpütke kiçiğ teğmedim; kurığaru Yinçü üğüz keçe Temir Kapığka teği s...
  - `Tekin 2003, s. 218` (eslesen: _KOP İTDiM OL aMTI_)
    > ...buyruk bäglär, otuz................. (G 2) Tokuz Oguz bägläri bodunı, bu sabımin ädgüti eşid, katıgdı tıŋla! İlgärü kün tugsıkka, birgärü kün ortosıŋaru, kurıgaru kün batsıkıŋa, yırgaru tün ortosıŋaru, anta içräki bodun ko[p] m[aŋa] körür. Ança bodun (G 3) kop itdim. Ol amtı añıg yok. Türük kagan Ötükän yış olorsar iltä buŋ yok. İlgärü Şantuŋ yazıka tägi sülädim, taloyka kiçig tägmädim; birgärü Tokuz Ärsinkä tägi sülädim, Töpötkä kiçig tägmädim; kurıgaru Yençü üg[üz] (G 4) käçä Tämir Kapıgka tägi sülädim; yırgaru Yir Bayırku yir...
  - `Tekin 1998, s. 19` (eslesen: _KOP İTDiM_)
    > ...Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim...
  - `Tekin 2003, s. 105` (eslesen: _KOP İTDiM_)
    > ...ık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *b...
  - `Tekin 2003, s. 142` (eslesen: _OL aMTI_)
    > ...rda", *yayın* "yazın" ve *küzün* "güzün" için bk. **Araç Durumu**. 4. /+tI/. Bu ek yalnız *amtı* "şimdi" zarfında görülür (krş. Tuv. *am* "şu an, şimdiki zaman"): *illig bodun ärtim ilim amtı kanı* "Devleti olan bir halk idim; devletim şimdi hani?" (KT D 9) *ol amtı ańıg yok* "Onlar şimdi fena (durumda) değiller" (KT G 3, BK K 2) 5. {+kAn} eki {-mAz} ekli olumsuz sıfat-fiillere eklenir. Örnekler Irk Bitig'de bulunmaktadır. *tanım tüsi takı tükämäzkän* "Vücudumun tüyleri henüz tümüyle bitmemişken" (IB 3) *karı üpgük yıl...
  - `Olmez 2017, s. 83` (eslesen: _OL aMTI_)
    > ...Runik: : [?] : [?] : [?] : [?] : [?] : [?] : [?] : [?] ³ *(Sayfada görünür bir dipnot metni yoktur; satır sonunda yalnızca ³ işareti bulunmaktadır.)* [s. 83] # s. 081 — Runik metin ( satır Runik harf çevirisi) (basılı sayfa numarası 83) > *kᵒp : ėtdim : ol amtı ańıg yok : türᶦk : kagan : ötüken yış : olorsar : ėlte : bun yok : ilgerü : śantun : yazıka tegi : süledim : taloyka kičig : tegmedim : bėrigerü : tokuz : ersinke : tegi : süledim : töpötke : kičig tegmedim : kᵘrıgaru : yeńčü ügüz* --- G 3. *kᵒp : ėtdim : o...


## KT-G-3#2 - Kül Tigin Yazıtı, Güney 3. satir  (9 kelime)

- **transkripsiyon:** `aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ`
- **kelime karsiliklari:** ANYI : YOK : TÜRK : KAĞANI : ÖTÜKEN : YIŞDA : OTURSA : İLDE : BUNG
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _KaGaN ÖTÜKeN YIŞ OLuRSaR_)
    > ...uz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği y...
  - `Olmez 2017, s. 83` (eslesen: _YOK TÜRK KaGaN_)
    > ...üken yış : olorsar : ėlte : bun yok : ilgerü : śantun : yazıka tegi : süledim : taloyka kičig : tegmedim : bėrigerü : tokuz : ersinke : tegi : süledim : töpötke : kičig tegmedim : kᵘrıgaru : yeńčü ügüz* “tamamını düzene soktum. Şimdi onların (hiçbir) kaygısı yok. Türk Kağanı Ötüken topraklarında hüküm sürerse ülkede sıkıntı çıkmaz. Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet’e bir kez bile varmadım. Batıda Sır Derya’yi” --- **kop ėtdim** < \**ėt-...
  - `Ata 2011, s. 53` (eslesen: _ÖTÜKeN YIŞ OLuRSaR_)
    > ...cak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orho...
  - `Ata 2011, s. 46` (eslesen: _ÖTÜKeN YIŞ OLuRSaR_)
    > ...yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. [[s. 46]] Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orhon Yazıtları, Türk Dil Kurumu...


## KT-G-3#3 - Kül Tigin Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `YOK : İLGeRÜ : ŞaNTUŊ`
- **kelime karsiliklari:** YOK : İLERİ : ŞANTUNG
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _YOK İLGeRÜ ŞaNTUŊ_)
    > ...i eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi y...
  - `Olmez 2017, s. 83` (eslesen: _YOK İLGeRÜ ŞaNTUŊ_)
    > ...a görünür bir dipnot metni yoktur; satır sonunda yalnızca ³ işareti bulunmaktadır.)* [s. 83] # s. 081 — Runik metin ( satır Runik harf çevirisi) (basılı sayfa numarası 83) > *kᵒp : ėtdim : ol amtı ańıg yok : türᶦk : kagan : ötüken yış : olorsar : ėlte : bun yok : ilgerü : śantun : yazıka tegi : süledim : taloyka kičig : tegmedim : bėrigerü : tokuz : ersinke : tegi : süledim : töpötke : kičig tegmedim : kᵘrıgaru : yeńčü ügüz* --- G 3. *kᵒp : ėtdim : ol amtı ańıg yok : türᶦk : kagan : ötüken yış : olorsar : ėlte : bun yok : ilgerü :...
  - `Ata 2011, s. 118` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...sterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ort...
  - `Olmez 2017, s. 21` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...e işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer...
  - `Ata 2011, s. 111` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...]] T 11 c.+gArU yön gösterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … [[s. 111]] temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gec...
  - `Ogel C2, s. 420` (eslesen: _İLGeRÜ ŞaNTUŊ_)
    > ...larak durmuştuk” Ancak o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s....


## KT-G-3#4 - Kül Tigin Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `YaZIKA : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** OVASINA : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...dığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 118` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gec...
  - `Olmez 2017, s. 21` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...ca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Ata 2011, s. 111` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...U yön gösterme eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … [[s. 111]] temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ortusıŋaru “kuzeyde gece ortasına doğru” BK...
  - `Ogel C2, s. 420` (eslesen: _YaZIKA TeGİ SÜLeDiM_)
    > ...Ancak o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...


## KT-G-3#5 - Kül Tigin Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `TaLUYKA : KİÇiG : TeGMeDiM`
- **kelime karsiliklari:** TALUYA : GEÇİP : DEĞMEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TaLUYKA KİÇiG TeGMeDiM_)
    > ...vermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözl...
  - `Ogel C1, s. 480` (eslesen: _TaLUYKA KİÇiG TeGMeDiM_)
    > ...lsa gerekti. Bu bölüme girerken Türklerde Okyanus karşılığı olarak kullanılan asıl deyimin Taluy olduğunu söylemiştik. Taluy tam bir Okyanus karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan d...
  - `Olmez 2017, s. 21` (eslesen: _KİÇiG TeGMeDiM_)
    > ...doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye...
  - `Ogel C2, s. 420` (eslesen: _KİÇiG TeGMeDiM_)
    > ...eni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy sözü, türkçeye çoktan yerleşmi...
  - `Tekin 2003, s. 110` (eslesen: _KİÇiG_)
    > ...1) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şantung ovasına kadar sefer ettim" (KT G 3) 2. {+ŋA}. Üçüncü kişi iyelik ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da...
  - `Ata 2011, s. 95` (eslesen: _KİÇiG_)
    > ...z başı ünsüzleri şunlardır: b-: bar ‘var’, bol- ‘olmak’, biş ‘beş’, böri ‘kurt’, bilig ‘bilgi’, ben ‘ben’ ç-: çıgań ‘yoksul’, çorak ‘çorak yer, çöl’, çıkan ‘kuzen, teyzezade’ 87 [s. 95] k-: kentü ‘kendi’, kişi ‘kişi’, kiçig ‘küçük’, kör- ‘görmek; tabi olmak’, katun ‘hatun’ s-: sebin- ‘sevinmek’, sı- ‘kırmak’, sub ‘su, ırmak’, sü ‘asker, ordu’ t-: taşra ‘dışarı, dışta’, takı ‘daha’, teŋri ‘tanrı’, tirig ‘diri’ y-: yıl ‘yıl’, yegirmi ‘20’, yaz ‘...


## KT-G-3#6 - Kül Tigin Yazıtı, Güney 3. satir  (5 kelime)

- **transkripsiyon:** `BİRiGeRÜ : TOKUZ : eRSiNKE : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** BERİDE : DOKUZ : ERSİNE : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TOKUZ eRSiNKE TeGİ SÜLeDiM_)
    > ...irgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak...
  - `Olmez 2017, s. 21` (eslesen: _TOKUZ eRSiNKE TeGİ SÜLeDiM_)
    > ...dınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer e...
  - `Ata 2011, s. 112` (eslesen: _TeGİ SÜLeDiM_)
    > ...eneral Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Ata 2011, s. 105` (eslesen: _TeGİ SÜLeDiM_)
    > ...üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...
  - `Ogel C2, s. 420` (eslesen: _TeGİ SÜLeDiM_)
    > ...o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...
  - `Ogel C2, s. 384` (eslesen: _SÜLeDiM_)
    > ...uyyynun çeşitli kollarıyla ayakları vardı. Her ne olursa"olsun, bunlar da büyük ırmaklardı. Battı Türkistan'ı temsil eden sulardı. Külte gi n yazıtında, şöyle deniyordu: “.. Batıda, Ye n çü ırmağını (ögüz) geçerek (keçe), D e - mir Kapı *ya kadar akın yaptım (süledim)*. [[s. 384]] Aynı sözler, -küçük gramer ayrılığıyla-, Ton yu ku k yazıtı içinde de görülüyordu*?. 2) Çin'de: “Yaşıl Ögüz'? Yeşil ırmak. Bu, Çin'in ünlü S ar ırmağı idi. Bu ırmağa Batı ile biz, “sarı” rengi vermiş ve “Sarı ırmak” demişizdir. Çin'de ise buna,...


## KT-G-3#7 - Kül Tigin Yazıtı, Güney 3. satir  (3 kelime)

- **transkripsiyon:** `TÜPÜTKE : KİÇiG : TeGMeDiM`
- **kelime karsiliklari:** TİBETE : GEÇİP : DEĞMEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TÜPÜTKE KİÇiG TeGMeDiM_)
    > ...ğaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ...
  - `Olmez 2017, s. 21` (eslesen: _KİÇiG TeGMeDiM_)
    > ...doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye...
  - `Ogel C1, s. 480` (eslesen: _KİÇiG TeGMeDiM_)
    > ...kti. Bu bölüme girerken Türklerde Okyanus karşılığı olarak kullanılan asıl deyimin Taluy olduğunu söylemiştik. Taluy tam bir Okyanus karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan d...
  - `Ogel C2, s. 420` (eslesen: _KİÇiG TeGMeDiM_)
    > ...eni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy sözü, türkçeye çoktan yerleşmi...
  - `Ata 2011, s. 151` (eslesen: _TÜPÜTKE_)
    > ...t(a)luyka kiç(i)g denize pek az kala durdum. Güney t(e)gm(e)d(i)m bir(i)g(e)rü to͡kuz yönünde Dokuz Ersin’e kadar asker (e)rs(i)nke t(e)gi sül(e)d(i)m tüpütke sevk ettim, Tibet’e ulaşmama az kaldı. Batıda İnci (Sır Derya) kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru ırmağını y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi geçerek Dem...
  - `Tekin 2003, s. 110` (eslesen: _KİÇiG_)
    > ...1) *ilgärü kadırkan yış+ka tägi* "Doğuda Kingan dağlarına kadar" (KT D 2) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27) *tabgaç bodun+ka* "Çin halkına" (KT D 7) *tämir kapıg+ka tägi sülädim* "Demir Kapı'ya kadar sefer ettim" (KT G 4) *töpöt+kä kiçig barmadım* "Tibet'e hiç varmadım" (KT G 3) *şantuŋ yazı+ka tägi sülädim* "Şantung ovasına kadar sefer ettim" (KT G 3) 2. {+ŋA}. Üçüncü kişi iyelik ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da...


## KT-G-3#8 - Kül Tigin Yazıtı, Güney 3. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `KURIGaRI : YiNÇÜ : ÖGüZ ---`
- **kelime karsiliklari:** GERİDE : İNCİ : ÖGÜZ[Ü] ---
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YiNÇÜ_)
    > ....... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtümiz, ilin altımız. Kara Türgiş bodun kop içikdi. Ol bodunuğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü...
  - `Tekin 2003, s. 159` (eslesen: _YiNÇÜ_)
    > ...odunug... kılmadım* "Ben kendim hakan olarak tahta oturduğum için Türk halkını... yapmadım" (BK D 36) **376.** *tiyin* "diye, için, amacıyla" < *\*tē-yin*: *arkış ıdmaz tiyin sülädim* "Kervan göndermiyor diye sefer ettim" (BK D 25) *sogdak bodun itäyin tiyin yinçü ügüzüg käçä tämir kapıgka tägi sülädimiz* "Soğdak halkını örgütlemek amacıyla İnci ırmağını geçerek Demir Kapı'ya kadar sefer ettik" (KT D 39) *bodunug igidäyin tiyin... ulug sü eki yegir[mi sülädim]* "Halkı doyurmak için... büyük ordular(la) on iki kez sefer...
  - `Ata 2011, s. 154` (eslesen: _YiNÇÜ_)
    > ...ul eki] +i [3. tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. edgüti “iyice” < ed “mal, mülk” +gü “iyi” [isimden isim -sıfat yapım eki] +ti [isimden isim -zarf- yapı...
  - `Ata 2011, s. 147` (eslesen: _YiNÇÜ_)
    > ...oğul eki] +i [3. [[s. 147]] tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. [[s. 147]] edgüti “iyice” < ed “mal, mülk” +gü “iyi” [isimden isim -sıfat yapım eki] +ti [isimden isim -zarf- yapım e...
  - `Kafesoglu, s. 71` (eslesen: _YiNÇÜ_)
    > ...b.) [[s. 71]] basan ile karşı koymakta idiler366. Yine Tonyukuk'un yüksek kumandasında olmak üzere, İnel "kağan" ve Bilge taraflarından sevk ve idare edilen Gök-Türk batı orduları grubu, Altaylar-Bolçu-Yarış Ovası-Çu ve Talaş havzalan-Karadağ kuzeyi üzerinden Yinçü-ögüz (İnci nehri=Seyhun=Sir-derya) kıyılanna ulaştı; nehri geçerek Mâveraünnehir'in Kızıl-kum çölüne daldı ve tam güney istikametini aldı. [[s. 71]] Ordunun bir kısmını, muhtemel bir yan hücuma karşı, İnel idaresinde burada bırakan Tonyukuk güneye ilerledi ve...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 213` (eslesen: _YiNÇÜ_)
    > ...İZ tezike B tiziği İİ teşüki A teşiki İİ düşük: din) tögek: SE, tişeki 2 tölek: W tülek: medikçe iyi, kötüye karışmaz). Halk arasında ürküntü "iz tezik kişi > işten kaçan kimse", Saf, sıra "Bizi J» bir tiziğ tireks bir sıra direk", " EZ bir ti7iğ yincü > bir dizi inci", | Tacık, Faralı.(iki çıkak arasındaki 5 ile). [[y. 213]] Deşik, yarık, Şu savda dahi gelmiştir; " YAZ İS teşk suvda belgürer yarık suda belli olur", Bu sav, bir iş yaptığında öğünen kimseye, işin iyiliği, kötülüğü, meydana çıktığında belli...


## KT-G-4#1 - Kül Tigin Yazıtı, Güney 4. satir  (4 kelime)

- **transkripsiyon:** `KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** GEÇİP : DEMİRKAPIYA : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TeGİ SÜLeDiM_)
    > ...kanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...
  - `Ata 2011, s. 112` (eslesen: _TeGİ SÜLeDiM_)
    > ...eneral Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” 105 [s....
  - `Olmez 2017, s. 21` (eslesen: _TeGİ SÜLeDiM_)
    > ...eyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir ke...
  - `Ata 2011, s. 105` (eslesen: _TeGİ SÜLeDiM_)
    > ...üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. [[s. 105]] +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+sı+ŋa arturup KT G6 “tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp” [s. 106] yaz+ı+ŋa oguzgaru sü taşıkdımız KT...
  - `Ogel C2, s. 420` (eslesen: _TeGİ SÜLeDiM_)
    > ...o zamandan bu zamana, bazı yeni vesikalar bulduk. [[s. 420]] Bu yeni vesikaları da katarak, konuyu biraz olgunlaştırma, herhalde yararlı olacaktır. Göktürkler, *“*Büyük Okyanus'' veya Çin denizi için, “*Taluy” deyimini kullanmıştı: “.. İlgerü, Şantung yazıka tegi süledim. Ta - Vu y “ka kiçig tegmedim...* Göktür k yazıtlarının bu ünlü deyişinin, bu günkü yorumla türkçesi şöyledir: “İleri, (yani doğuya doğru), Ş a nt u n g yazısına kadar akın yaptım. (Ancak), Büyük Okyanus'a azıcık (kiçiz) değmedim...”. [[s. 420]] Burada taluy...
  - `Ogel C2, s. 384` (eslesen: _SÜLeDiM_)
    > ...uyyynun çeşitli kollarıyla ayakları vardı. Her ne olursa"olsun, bunlar da büyük ırmaklardı. Battı Türkistan'ı temsil eden sulardı. Külte gi n yazıtında, şöyle deniyordu: “.. Batıda, Ye n çü ırmağını (ögüz) geçerek (keçe), D e - mir Kapı *ya kadar akın yaptım (süledim)*. [[s. 384]] Aynı sözler, -küçük gramer ayrılığıyla-, Ton yu ku k yazıtı içinde de görülüyordu*?. 2) Çin'de: “Yaşıl Ögüz'? Yeşil ırmak. Bu, Çin'in ünlü S ar ırmağı idi. Bu ırmağa Batı ile biz, “sarı” rengi vermiş ve “Sarı ırmak” demişizdir. Çin'de ise buna,...


## KT-G-4#2 - Kül Tigin Yazıtı, Güney 4. satir  (6 kelime)

- **transkripsiyon:** `YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM`
- **kelime karsiliklari:** YIRIDA : YİR : BAYIRKU : YERİNE : DEĞİN : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _YiR BaYıRKU YİRİŊE TeGİ_)
    > ...] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben),...
  - `Ergin 1970, s. 12` (eslesen: _YiR BaYıRKU_)
    > ...Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk ettim. Bunca yere kadar yürüttüm. Ötüken ormanından daha iyisi hiç yokmuş, il tutacak yer Ötüken ormanı imiş. [[s. 12]] Bu yerde oturup Çin milleti ile | anlaştım. Altını, O R H U N Â B İ D E L E R İ [s. 13] M U H A R R E M E R G İ...
  - `Tekin 2003, s. 138` (eslesen: _YiR BaYıRKU_)
    > ...Çin'e doğru..." (KT D 28, BK D 23), vb. **302.** *yırgaru* "kuzeye doğru, kuzeyde" < *\*yırı* "kuzey": *yırgaru tün ortosıŋaru* "kuzeyde gece ortasına doğru" (KT G 2, BK K 2) *yırgaru oguz bodun tapa* "kuzeyde Oğuz halkına doğru" (KT D 28, BK D 23) *yırgaru yir bayırku yiriŋä tägi* "kuzeyde Yir Bayırku ülkesine kadar" (KT G 4), vb. **303.** *yok(k)aru* "yukarı doğru" < *\*yokgaru* < *\*yok* "yokuş, tepe" (krş. MK *yok* ay.): *yok(k)aru at yetä yadagın ıgaç tutunu agturtum* "(Askerleri), atları yederek, yayan ve ağaçlara tu...
  - `Ata 2011, s. 151` (eslesen: _YiR BaYıRKU_)
    > .... Batıda İnci (Sır Derya) kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru ırmağını y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi geçerek Demir Kapı’ya kadar asker sül(e)d(i)m yır(ı)g(a)ru y(i)r sevk ettim. Kuzeyde Yir Bayırku b(a)y(ı)rku͡ u yiriŋe t(e)gi sül(e)d(i)m yerine (ülkesine) kadar asker sevk bunç͡ a yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından...
  - `Olmez 2017, s. 21` (eslesen: _YiR BaYıRKU_)
    > ...halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer ettim. Denize bir kez bile varmadım. Güneye doğru Tokuz Ersinlere kadar sefer ettim. Tibet'e bir kez bile varmadım. Batıda Sır Derya'yı geçip Temir Kapıg'a kadar sefer ettim....
  - `Tekin 1998, s. 11` (eslesen: _TeGİ SÜLeDiM_)
    > ...kanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak er...


## KT-G-4#3 - Kül Tigin Yazıtı, Güney 4. satir  (4 kelime)

- **transkripsiyon:** `BUNÇA : YİRKE : TeGİ : YORuTDıM`
- **kelime karsiliklari:** BUNCA : YER[LER]E : DEĞİN : [ORDU] YÜRÜTTÜM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BUNÇA YİRKE TeGİ_)
    > ...Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan...
  - `Ata 2011, s. 128` (eslesen: _BUNÇA YİRKE_)
    > ...inti c. tabgaçka yeti yegirmi süŋüşdi d. üçegün kabışıp sülelim e. oguzka beş süŋüşdi 8. Aşağıdakilerden hangisinde işaret zamirinin yönelme durumuyla çekimi vardır? a. aŋar b. anta c. aŋaru d. anı e. anıŋ 9. bunça yirke … yorıttım ‘Bunca yere ... ordularımı yürüttüm.’ cümle- sinde boş bırakılan yere aşağıdaki sontakılardan hangisi getirilmelidir? a. üze b. kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kulla...
  - `Ata 2011, s. 121` (eslesen: _BUNÇA YİRKE_)
    > .... bir yılka biş yolı süŋüşdümüz b. üç kata tegzinti c. tabgaçka yeti yegirmi süŋüşdi d. üçegün kabışıp sülelim e. oguzka beş süŋüşdi 8. Aşağıdakilerden hangisinde işaret zamirinin yönelme durumuyla çekimi vardır? a. aŋar b. anta c. aŋaru d. anı e. anıŋ 9. bunça yirke … yorıttım ‘Bunca yere ... ordularımı yürüttüm.’ cümlesinde boş bırakılan yere aşağıdaki sontakılardan hangisi getirilmelidir? a. üze b. [[s. 121]] kisre c. teg d. tapa e. tegi 10. Aşağıdaki cümlelerin hangisinde pekiştirme edatı kullanılmıştır? a. atıg ıka...
  - `Ergin 1970, s. 12` (eslesen: _BUNÇA_)
    > ...ydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İ...
  - `Tekin 2003, s. 40` (eslesen: _BUNÇA_)
    > ...eği değerinde: - /nçA/ *ança* "öylece" (KT G 5, vb.) - /nçULDI/ *ançoladı* "sundu, takdim etti" (KT D 32) - /SnçDI/ *sançdı* "mızrakladı" (KT K 5), vb. 2. /änç/ ses öbeği değerinde: - /nnçA/ *nänçä* "nice kez" (BK K 9), vb. 3. /nç/ ünsüz çifti değerinde: - /BUnçA/ *bunça* "bunca" (genellikle) - /rnç/ *är(i)nç* "muhakkak ki" (genellikle) ## İkiz Ünsüzler **41.** Sözcük içindeki ikiz ünsüzler runik yazıda seyrek olarak belirtilir. Başka bir deyişle, sözcük içindeki ikiz ünsüzler genellikle tek harf ile gösterilir. 1....
  - `Ata 2011, s. 55` (eslesen: _BUNÇA_)
    > ...üküş kıltım ıgar elligde ıgar kaganlıgda yig kıltım tört buluŋdakı bodunug kop baz kıltım yagısız kıltım kop maŋa körti işig küçüg birür bunça törüg kazganıp inim köl tigin özi ança kergek boltı ….(KT D29-30) Resim 3. 5 Köl Tigin heykelinin gövdesi. Resim 3. 6 “Tanrı bağışlasın, i...


## KT-G-4#4 - Kül Tigin Yazıtı, Güney 4. satir  (4 kelime)

- **transkripsiyon:** `ÖTÜKeN : YIŞDA : YİG : İDİ`
- **kelime karsiliklari:** ÖTÜKEN : YIŞDAN : YEĞ : İDİ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _ÖTÜKeN YIŞDA YİG İDİ_)
    > ...g yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu dev...
  - `Tekin 2003, s. 147` (eslesen: _YIŞDA YİG İDİ_)
    > ...G 15) **337.** *takı* “daha” < *\*tak-* “takmak”: [s. 147] # s. 147 — ORHON TÜRKÇESİ GRAMERİ *täŋri bilgä kaganka [t]akı işig küçüg bersigim bar ärmiş* “Kutsal Bilge Hakana daha hizmet edeceğim var imiş anlaşılan” (O sağ 2) **338.** *idi* “hiç”: - *ötükän yışda yig idi yok ärmiş* “Ötüken dağlarından daha iyi bir yer hiç yok imiş” (KT G 4) - *ekin ara idi oksız kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç kabile örgütü olmayan Doğu Türklerini düzene sokup öylece hükmederlermiş” (BK D 4) - *türk sir bodun y...
  - `Ata 2011, s. 151` (eslesen: _YIŞDA YİG İDİ_)
    > ...asker sül(e)d(i)m yır(ı)g(a)ru y(i)r sevk ettim. Kuzeyde Yir Bayırku b(a)y(ı)rku͡ u yiriŋe t(e)gi sül(e)d(i)m yerine (ülkesine) kadar asker sevk bunç͡ a yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle...
  - `Ata 2011, s. 144` (eslesen: _YIŞDA YİG İDİ_)
    > ...(e)rs(i)nke t(e)gi sül(e)d(i)m tüpütke kiç(i)g [t(e)g]m(e)d(i)m k͡uurıg(a)ru y(e)nçü üg[(ü)z] G4 k(e)çe t(e)m(i)r k(a)p(ı)gka t(e)gi sül(e)d(i)m yır(ı)g(a)ru y(i)r b(a)y(ı)rk͡uu yiriŋe t(e)gi sül(e)d(i)m bun͡ça yirke t(e)gi yor(ı)td(ı)m ötü͡k(e)n [[s. 144]] yışda yig idi yo͡k (e)rm(i)ş il tuts(ı)k yir ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p t(a)bg(a)ç bod(u)n birle G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti k͡uut(a)y buŋs(u)z (a)nça birür t(a)bg(a)ç bod(u)n s(a)bı süçig (a)gısi yimşak (e)rm(i)ş süçig s(a)b(ı)n y(i)mş(ak) (a)gı...


## KT-G-4#5 - Kül Tigin Yazıtı, Güney 4. satir  (8 kelime)

- **transkripsiyon:** `YOK : eRMiŞ : İL : TUTSıK : YİR : ÖTÜKeN : YIŞ : eRMiŞ`
- **kelime karsiliklari:** YOK : İMİŞ : İL : TUTULASI : YER : ÖTÜKEN : YIŞ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _YOK eRMiŞ İL TUTSıK YİR ÖTÜKeN YIŞ eRMiŞ_)
    > ...g yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan son...
  - `Ata 2011, s. 53` (eslesen: _İL TUTSıK YİR ÖTÜKeN_)
    > ...p yanına alır. Tonyukuk, Çin’de büyümüş, Çin terbiyesi alarak Çin’in politikalarını öğrenmişti. Çin’in entrikalarıyla Türklerin başa çıkamayacağını bildiği için daima Çin’den uzakta bulunan bir Türk ili düşünmüş, bunun için de Ötüken’i göstermiştir. il tutsık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olu...
  - `Ata 2011, s. 46` (eslesen: _İL TUTSıK YİR ÖTÜKeN_)
    > ...p yanına alır. Tonyukuk, Çin’de büyümüş, Çin terbiyesi alarak Çin’in politikalarını öğrenmişti. [[s. 46]] Çin’in entrikalarıyla Türklerin başa çıkamayacağını bildiği için daima Çin’den uzakta bulunan bir Türk ili düşünmüş, bunun için de Ötüken’i göstermiştir. il tutsık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. [[s. 46]] Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir o...


## KT-G-4#6 - Kül Tigin Yazıtı, Güney 4. satir  (6 kelime)

- **transkripsiyon:** `BU : YİRDE : OLuRuP : TaBGaÇ : KaGaN : BİRLE`
- **kelime karsiliklari:** BU : YERDE : OTURUP : TABGAÇ : KAĞANI : İLE
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _BU YİRDE OLuRuP TaBGaÇ_)
    > ...m; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erke...
  - `Ata 2011, s. 151` (eslesen: _BU YİRDE_)
    > ...irke t(e)gi yor(ı)td(ı)m ötü͡k(e)n ettim. Bunca yere kadar sefer ettim yışda yig idi yok͡ (e)rm(i)ş il tuts(ı)k yir (ordu yürüttüm), Ötüken yaylasından daha iyisi hiç yok imiş. Memleket ötü͡k(e)n yış ermiş bu yirde ol(u)r(u)p edinilecek yer Ötüken yaylası imiş. t(a)bg(a)ç bod(u)n birle Bu yerde oturup Çin halkı ile G5 tüz(ü)lt(ü)m (a)ltun küm(ü)ş işg(i)ti barış yaptım (ilişkileri düzelttim). k͡uut(a)y buŋs(u)z (a)nça birür...
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ KaGaN_)
    > ...rak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser,...
  - `Tekin 2003, s. 107` (eslesen: _TaBGaÇ KaGaN_)
    > ...dimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bay...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ KaGaN_)
    > ...in üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdar...
  - `Tekin 1998, s. 23` (eslesen: _KaGaN BİRLE_)
    > ...[[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ...


## KT-G-5#1 - Kül Tigin Yazıtı, Güney 5. satir  (3 kelime)

- **transkripsiyon:** `TÜZüLTüM : aLTUN : KÜMüŞ`
- **kelime karsiliklari:** TÜZÜLTTÜM : ALTINI : GÜMÜŞÜ
- **kanit:**
  - `Tekin 2003, s. 218` (eslesen: _TÜZüLTüM aLTUN KÜMüŞ_)
    > ..., Töpötkä kiçig tägmädim; kurıgaru Yençü üg[üz] (G 4) käçä Tämir Kapıgka tägi sülädim; yırgaru Yir Bayırku yiriŋä tägi sülädim, bunça yirkä tägi yorıtdım: Ötükän yışda yig idi yok ärmiş! İl tutsık yir Ötükän yış ärmiş. Bu yirdä olorup Tabgaç bodun birlä (G 5) tüzültüm. Altun kümüş, işgiti kotay buŋsız ança birür. Tabgaç bodun sabı süçig, agısi yimşak ärmiş. Süçig sabın, y(i)mşak agın arıp ırak bodunug ança yagutir ärmiş. Yagru kontokda kisrä añıg bilig anta öyür ärmiş: (G 6) Ädgü bilgä kişig, ädgü alp kişig yorıtmaz ärmiş. Bir kişi ya...
  - `Olmez 2017, s. 86` (eslesen: _TÜZüLTüM aLTUN KÜMüŞ_)
    > .... Tekin 2003, s. 150) *bir+il-e* olarak açıklayan da vardır (Yong-Sŏng Li 2004: 170) - bir: isim tabanı - +le: isimden isim yapma eki **Runik** (4 satır; harf çevirisi aşağıda): > Runik — satır 1 > Runik — satır 2 > Runik — satır 3 > Runik — satır 4 *G 5. tüžültüm : altun : kümüš : ėšgiti : kᵒtay : buŋsuz : anča bėrür : tavgač : bodun : savı : süčig : agısı : yėmšak : ermiš : süčig : savın : yėmšak : agın : arıp : ırak bodunug : anča yagutır : ermiš : yagru : kᵒntokda : kėsre^añg bilig : anta öyür ermiš :* "ilişkileri düzelttim. (Çin...
  - `Tekin 1998, s. 19` (eslesen: _aLTUN KÜMüŞ_)
    > ...im; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve)...
  - `Tekin 2003, s. 145` (eslesen: _aLTUN KÜMüŞ_)
    > ...ŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü devele...
  - `Ata 2011, s. 120` (eslesen: _aLTUN KÜMüŞ_)
    > ...lerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dön...
  - `Olmez 2017, s. 22` (eslesen: _aLTUN KÜMüŞ_)
    > ...lay yönetmesi C. Findley'in çalışmasına da yansır (2006, s. 54): Taizong strateji olarak bir yandan Batı Türklerine şirin görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verir...


## KT-G-5#2 - Kül Tigin Yazıtı, Güney 5. satir  (5 kelime)

- **transkripsiyon:** `İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR`
- **kelime karsiliklari:** İŞGİTİ : KUMAŞI : BUNGSUZ : ANCA : VERİR
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _İŞGiTİ KUTaY_)
    > ...ençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve) halkım, sağdak...
  - `Olmez 2017, s. 22` (eslesen: _BUŊSuZ aNÇA_)
    > ...in çalışmasına da yansır (2006, s. 54): Taizong strateji olarak bir yandan Batı Türklerine şirin görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri...
  - `Tekin 2003, s. 145` (eslesen: _aNÇA BİRÜR_)
    > ...ä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü develeri ve ipekli kumaşları fazlasıy...
  - `Ata 2011, s. 193` (eslesen: _İŞGiTİ_)
    > ...kurıdın batıda ille- küçük erkek kardeş kurya batıda illig ipek, ipekli kumaş kut baht, talih ini(y) düzene sokmak, düzenlemek kutay ipekli kumaş, atlas kumaş işgiti düzenlemek kuz kuzey it- kü şan, şöhret, haber itin- küç güç, kuvvet...
  - `Tekin 1998, s. 32` (eslesen: _BUŊSuZ_)
    > ...ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua...
  - `Tekin 2003, s. 241` (eslesen: _BUŊSuZ_)
    > ...ALAT TEKİN (basılı sayfa numarası 242) - **bunı** bunu - **bunta** burada - **bunt(u)t-** (?) (uykusunu) kaçırtmak (?) (T 19) - **buŋ** ihtiyaç, yokluk; dert, sıkıntı - **buŋad-** bunalmak, sıkılmak - **buŋsız** fazlasiyle, bol bol, esirgemeden (T 48); bk. **buŋsuz** - **buŋsuz** bk. **buŋsız** - **buŋusuz** (Barık II 3); bk. **buŋsız, buŋsuz** - **Burgu** yer adı (MÇ D 3, Tar. B 4) - **busanç** acı, ıstırap (IB 52) - **busuşlug** kederli, üzgün (IB 52) - **buyruk** yüksek görevli, kumandan - **Buyla** yüksek bir unvan...


## KT-G-5#3 - Kül Tigin Yazıtı, Güney 5. satir  (7 kelime)

- **transkripsiyon:** `TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YIMŞaK : eRMiŞ`
- **kelime karsiliklari:** TABGAÇ : BOYLARININ : SAVI : SÜÇİ : İPEĞİ : YUMUŞAK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > .....”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Els...
  - `Ata 2011, s. 162` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > ...siz geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. 154 [s. 162] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak mill...
  - `Ata 2011, s. 155` (eslesen: _TaBGaÇ BODuN SaBI SÜÇİG aGISI YIMŞaK eRMiŞ_)
    > ...i] –mış [3. [[s. 154]] tekil kişi belirsiz geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. [s. 155] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırı...


## KT-G-5#4 - Kül Tigin Yazıtı, Güney 5. satir  (10 kelime)

- **transkripsiyon:** `SÜÇİG : SaBıN : YIMŞaK : aGIN : aRıP : IRaK : BoDuNuG : aNÇA : YaGUTIR : eRMiŞ`
- **kelime karsiliklari:** SÜÇİ : SAVINI : YUMUŞAK : İPEĞİNİ : ARIP : UZAK : BOYLARI : ANCA : YAKLAŞTIRIR : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > .... 19]] Bu yerde oturup Çin halkı ile (G 5) (ilişkileri) düzelttim. (Çinliler) altın(1), gümüşlü), ipeğ(i) (ve) ipekli kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking!...
  - `Ata 2011, s. 162` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > ...yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. 154 [s. 162] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırırmış. b. Çin halkının sözü keskin, ze...
  - `Ata 2011, s. 155` (eslesen: _SÜÇİG SaBıN YIMŞaK aGIN aRıP IRaK BoDuNuG aNÇA YaGUTIR eRMiŞ_)
    > ...geçmiş zaman eki] k(a)ŋ(ı)m k(a)g(a)n yiti y(e)g(i)rmi (e)r(i)n t(a)ş(ı)km(ı)ş cümlesini Türkiye Türkçesi ile ifade ediniz ve cümlede geçen sözcükleri/sözcük gruplarını çözümleyiniz. [s. 155] Kendimizi Sınayalım 1. tabgaç bodun sabı süçig agısı yımşak ermiş süçig sabın yımşak agın arıp ırak bodunug ança yagutır ermiş ifadesinin tam ve doğru Türkçe karşılığı aşağıdakilerden hangisidir? a. Çin halkının sözü tatlı ipekli kumaşı yumuşakmış, tatlı sözle yumuşak ipekli kumaşla aldatıp uzak milleti böylece yakınlaştırırmış. b. Çin halkının sözü keskin, zehri öldürücü olduğu için...


## KT-G-5#5 - Kül Tigin Yazıtı, Güney 5. satir  (8 kelime)

- **transkripsiyon:** `YaGuRU : KONDUKDA : KİSRE : aYNıG : BİLiG : aNDA : ÖYÜR : eRMiŞ`
- **kelime karsiliklari:** YAKLAŞIP : KONDUKTAN : SONRA : ANYI : BİLGİ[Yİ] : [O] ANDA : ÖYÜR : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _ÖYÜR eRMiŞ_)
    > ...eğ(i) (ve) ipekli kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser,...
  - `Ata 2011, s. 122` (eslesen: _ÖYÜR eRMiŞ_)
    > ...da Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm” KT G4 Bulunma-Çıkma Durumuyla Kullanılan Sontakılar (kisre, üze, ötrü) kisre: yagru kontuk+da kisre ańıg bilig anta öyür ermiş “yaklaşıp yerleştikten sonra kötülükleri o zaman düşünürmüş” KT G5 an+ta kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç,...
  - `Olmez 2017, s. 22` (eslesen: _ÖYÜR eRMiŞ_)
    > ...Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış. Yakına yerleştikten sonra...
  - `Ata 2011, s. 115` (eslesen: _ÖYÜR eRMiŞ_)
    > ...ı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm” KT G4 Bulunma-Çıkma Durumuyla Kullanılan Sontakılar [[s. 115]] (kisre, üze, ötrü) kisre: yagru kontuk+da kisre ańıg bilig anta öyür ermiş “yaklaşıp yerleştikten sonra kötülükleri o zaman düşünürmüş” KT G5 an+ta kisre teŋri bilig bertük üçün “ondan sonra, Tanrı akıl verdiği için” T 6 üze: içre aşsız taşra tonsuz yabız yablak bodun+ta üze olurtum “karnı aç, sırtı çıplak, yoksul ve sefil bir halk...
  - `Olmez 2017, s. 87` (eslesen: _YaGuRU_)
    > ...ı" > bod: isim tabanı > +un: kalıplaşmış çokluk eki > +ug: belirtme durumu eki **ança yagutır ermîş** < *yagu-t-ır* "bu şekilde (kendilerine) yaklaştırırlarmış" > yagu-: fiil tabanı > -t-: fiilden fiil (geçişlilik) yapma eki > -ır: geniş zaman eki **yagru / yaguru** < *yagu-r-u* "yakına, yakın" > yagu-: fiil tabanı > -r-: fiilden fiil (orta çatı eki) yapma eki > -u: zarfiil eki; kalıplaşıp zarf yapmıştır **kontokda** < *ko-n-tok-da* "yerleştikten" > ko-: fiil tabanı > -n-: fiilden fiil (dönüşlülük) yapma eki > -tok: s...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_3, s. 35` (eslesen: _YaGuRU_)
    > ...ı da böyledir; (-)/3/ uyar yakurur - yakurmak). ga yakurdı : Sık sık soludu. L— kişi yakurdı - adam sık sık soludu, onu yüksek bir soluma aldı", ( — 3, “4 aa yakurur - yakurmak), SIZ yagurdiz Koştu, seğirtti, SS er yali gürdi x adam seğirtti, koştu". (017 UST yagürür - yüzürmek). [[y. 35]] Şu beyitte dahi gelmiştir: YES Ündeb uluğ tabaru tawrak kelip yügürgil Kurgak yılın budhun kör kanda tüşer kodı ıl "Seni, yaşlı bir adam çağırırsa davranarak koş? Kuraklık yıllarda millete bak: Nereye konarlarsa sen de birlikte kon 4...
