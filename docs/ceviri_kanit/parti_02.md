# Ceviri istek paketi 2 - Orhun cumlecikleri

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


## KT-G-6#1 - Kül Tigin Yazıtı, Güney 6. satir  (8 kelime)

- **transkripsiyon:** `eDGÜ : BİLGE : KİŞİG : eDGÜ : aLP : KİŞİG : YORITMAZ : eRMiŞ`
- **kelime karsiliklari:** İYİ : BİLGE : KİŞİYİ : İYİ : ALP : KİŞİYİ : YÜRÜTMEZ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ aLP KİŞİG YORITMAZ eRMiŞ_)
    > ...kumaşları güçlük çıkarmaksızın öylece (bize) veriyorlar. Çin halkının sözleri tatlı, [s. 20] 36 KÜLTİGİN YAZITI süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança bo...
  - `Ata 2011, s. 137` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...KT D10 ańıg bilig anta ö-yür er-miş “(Çinliler) kötülüğü o zaman düşünürler imiş” KT G7 ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese)...
  - `Olmez 2017, s. 88` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...(basılı sayfa numarası 88) ö-: fiil tabanı -(y)ür: geniş zaman eki er-: fiil tabanı -miş: öğrenilen geçmiş zaman eki **Runic** (5 lines; the number **6** at the end of the first line is the line number of the inscription): *Runic text — 5 lines* **G 6.** *edgü bilge : kişiğ : edgü : alp kişiğ : yorıt-maz : ermiş : bir kişi : yaŋılsar : uguşı : bodunı : böşükiŋe tegi : kıd-maz ermiş : süçig : savıŋa : yemşak : agısıŋa : arturup : üküş : türʰk : bodun : öltiiŋ türʰk : bodun : ölsikiŋ : bėriye : çugay : yış : tögültün :* > "Bilgili ve yi...
  - `Ata 2011, s. 130` (eslesen: _eDGÜ BİLGE KİŞİG eDGÜ_)
    > ...rakayım der imiş” KT D10 ańıg bilig anta ö-yür er-miş “(Çinliler) kötülüğü o zaman düşünürler imiş” KT G7 [[s. 130]] ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6...


## KT-G-6#2 - Kül Tigin Yazıtı, Güney 6. satir  (9 kelime)

- **transkripsiyon:** `BİR : KİŞİ : YaŊıLSaR : OGuŞI : BODUNI : BİŞÜKİŊE : TeGİ : KIDMaZ : eRMiŞ`
- **kelime karsiliklari:** BİR : KİŞİ : YANILSA : OĞUŞUNA : BOYLARINA : BEŞİĞİNE : DEĞİN : KIYMAZ : İMİŞ
- **kanit:**
  - `Tekin 2003, s. 187` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...bir todsar āçsık ö-mäz sän* "Acıkırsan doyacağını düşünmezsin, bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) 3. kişi: *ädgü bilgä kişig ädgü alp kişig yorıt-maz ärmiş* "(Çinliler) iyi ve akıllı kişileri, iyi ve yiğit kişileri ilerletmez imiş" (KT G 6) *bir kişi yaŋılsar uguşi boduni bişükiŋä tägi kıd-maz ärmiş* "(Öte yandan), bir kişi suç işlese onun soyuna sopuna ve akrabalarına kadar (herkesi) öldürmez imiş" (KT G 6) ## {-DAçI} Ekli Gelecek Zaman **440.** {-DAçI} ekli gelecek zaman eylem sıfatı sona alınmış kişi zamirler...
  - `Ata 2011, s. 137` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6 edgü bilge kişig edgü alp kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişiler...
  - `Olmez 2017, s. 88` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...man eki er-: fiil tabanı -miş: öğrenilen geçmiş zaman eki **Runic** (5 lines; the number **6** at the end of the first line is the line number of the inscription): *Runic text — 5 lines* **G 6.** *edgü bilge : kişiğ : edgü : alp kişiğ : yorıt-maz : ermiş : bir kişi : yaŋılsar : uguşı : bodunı : böşükiŋe tegi : kıd-maz ermiş : süçig : savıŋa : yemşak : agısıŋa : arturup : üküş : türʰk : bodun : öltiiŋ türʰk : bodun : ölsikiŋ : bėriye : çugay : yış : tögültün :* > "Bilgili ve yiğit insanları ilerletmezlermiş. Bir kişi suç işlerse b...
  - `Ata 2011, s. 130` (eslesen: _BİR KİŞİ YaŊıLSaR_)
    > ...[s. 130]] ırak bodunug ança yagut-ır er-miş “(Çinliler) uzak(ta yaşayan) halkları öylece yaklaştırırlarmış” Bu çekimin olumsuzu da -mAz eki ile yapılır: edgü bilge kişig edgü alp kişig yorıt-maz er-miş “iyi akıllı kişiyi, iyi alp kişiyi ilerletmez imiş” BK K4 bir kişi yaŋılsar uguşı bodunı bişükiŋe tegi kıd-maz ermiş “bir kişi yanıldığında (suç işlediğinde) (onun) soyuna sopuna (ve) akrabalarına kadar (herkese) kıymaz imiş” KT G6 [[s. 130]] edgü bilge kişig edgü alp kişig yorıt-maz ermiş “(Çinliler) iyi (ve) akıllı kişileri, iyi (v...


## KT-G-6#3 - Kül Tigin Yazıtı, Güney 6. satir  (12 kelime)

- **transkripsiyon:** `SÜÇİG : SaBıŊA : YıMŞaK : aGISIŊA : aRTURuP : ÖKÜŞ : TÜRK : BODuN : ÖLTüG : TÜRK : BODuN : ÖLSiKiŊ`
- **kelime karsiliklari:** SÜÇİ : SÖZÜNE : YUMUŞAK : AĞISINA : ARTURUP : ÇOK : TÜRK : BOYLARI : ÖLDÜ : TÜRK : BOYLARI : ÖLECEKSİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SÜÇİG SaBıŊA YıMŞaK aGISIŊA_)
    > ...süçiğ, ağısı yımşak ermiş. Süçiğ sabın yımşak ağın arıp ırak bodunuğ ança yağutır ermiş. Yağru kontukda kisre aniyığ biliğ anta öyür ermiş. (G 6) Edgü bilge kişiğ, edgü alp kişiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş...
  - `Ata 2011, s. 127` (eslesen: _SÜÇİG SaBıŊA YıMŞaK aGISIŊA_)
    > ...sıfat yapma b. Fiilden isim yapma c. İsimden fiil yapma d. Aynı yapı ve görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süle...
  - `Ata 2011, s. 120` (eslesen: _SÜÇİG SaBıŊA YıMŞaK aGISIŊA_)
    > ...idir? a. İsimden sıfat yapma b. Fiilden isim yapma c. İsimden fiil yapma d. Aynı yapı ve görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. [[s. 120]] süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşık...


## KT-G-6#4 - Kül Tigin Yazıtı, Güney 6. satir  (4 kelime)

- **transkripsiyon:** `BeRiYE : ÇOGaY : YIŞ : TÖGüLTüN`
- **kelime karsiliklari:** BERİDE : ÇOĞAY : YIŞA : TÖGÜLTÜN
- **kanit:**
  - `Tekin 2003, s. 135` (eslesen: _ÇOGaY YIŞ TÖGüLTüN_)
    > ...ağıdaki) Yer ve Su (ruhları ile) amcam hakanın ruhu, şüphesiz ki, doğru bulmadılar" (BK D 35) **294.** *biryä* "güneyde" < *\*biriyä* < *\*biri* "bu yan, güney": *biryä tabgaç bodun yagı ärmiş* "Güneyde Çin halkı (bize) düşman imiş" (KT D 14, BK D 12) *biryä çogay yış tögültün yazı konayin tisär...* "Güneyde Çoğay dağlarına (ve) Tögültün ovasına konayım dersen..." (KT G 6-7) *biryä tabgaçıg öŋrä kıtańıg yırya oguzug üküş ök ölürti* "Güneyde [s. 136] # s. 136 — TALAT TEKİN Çinlileri, doğuda Kıtaylıları, kuzeyde (de) Oğuzları çok ö...
  - `Ata 2011, s. 135` (eslesen: _ÇOGaY YIŞ TÖGüLTüN_)
    > ...i kişi ekleri ile çekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. -çI Ekli Gelecek Zaman...
  - `Ata 2011, s. 128` (eslesen: _ÇOGaY YIŞ TÖGüLTüN_)
    > ...elecekte mutlak olarak yapılacak veya olacak eylemlerle kullanılır. İyelik kökenli kişi ekleri ile çekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. [[s. 128]] -çI Ekli Gelecek Zaman Daha çok olumsuz eylem gövdelerine ulanan bu eke Köktürk harfli metinle...


## KT-G-7#1 - Kül Tigin Yazıtı, Güney 7. satir  (11 kelime)

- **transkripsiyon:** `YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aNYıG : KİŞİ : aNÇA : BOŞGURUR`
- **kelime karsiliklari:** YAZINA : KONAYIM : DESEN : TÜRK : BOYLARI : ÖLECEK[SİN] : [O] ANDA : ANYI : KİŞİ : ANCA : BOŞGURUR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _aNYıG KİŞİ aNÇA BOŞGURUR_)
    > ...şiğ yorıtmaz ermiş; bir kişi yafığılsar, uğuşı, bodunı, bişükiüge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok....
  - `Ata 2011, s. 135` (eslesen: _YaZI KONaYIN TİSeR_)
    > ...ekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. -çI Ekli Gelecek Zaman Daha ç...
  - `Ata 2011, s. 128` (eslesen: _YaZI KONaYIN TİSeR_)
    > ...rak yapılacak veya olacak eylemlerle kullanılır. İyelik kökenli kişi ekleri ile çekimlenir. 2. tekil kişi çekimine örnekler vardır: türük bodun öl-sik-iŋ “Türk halkı öleceksin!” BK K5 türük bodun öl-sik-ig “Türk halkı öleceksin” KT G6 birye çogay yış tögültün yazı konayın tiser türük bodun öl-sik-ig “güneyde Çogay dağları ve Tögültün ovasına yerleşeyim der isen, (ey) Türk halkı, mutlak öleceksin! BK K5 2.3.3. [[s. 128]] -çI Ekli Gelecek Zaman Daha çok olumsuz eylem gövdelerine ulanan bu eke Köktürk harfli metinlerde seyrek rastlanı...


## KT-G-7#2 - Kül Tigin Yazıtı, Güney 7. satir  (6 kelime)

- **transkripsiyon:** `eRMiŞ : IRaK : eRSeR : YaBLaK : aGI : BİRÜR`
- **kelime karsiliklari:** İMİŞ : IRAK : İSEN : YAVLAK : AĞI : VERİR
- **kanit:**
  - `Tekin 1998, s. 31` (eslesen: _eRMiŞ IRaK eRSeR YaBLaK aGI BİRÜR_)
    > ...abasına [s. 31] 58 BİLGE KAĞAN YAZITI teği kıdimaz) (K 5) ermiş. Süçiğ sabınğa yımşak ağısıng a arturup üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün yazı (kolnayın (tiser), Türük bodun, ölsikiğ! Anta aniyığ Iklişi ança boşglurur) ermiş: “Irak erser yablak ağı birür; yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Billiğ) (K 6) bilmez kişi, ol sabığ alıp, yağru barıp üküş kişi öltüğ. Ol yerlgerlü barsar, Türük bodun, ölteçi sen! [[s. 31]] Ötüken yer ollJurup (arkış) tirkiş ısar, nefiğ bulaâğuğ yolk. Öltüken ylış olu...
  - `Ata 2011, s. 146` (eslesen: _IRaK eRSeR YaBLaK aGI_)
    > ...l 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir...
  - `Ata 2011, s. 139` (eslesen: _IRaK eRSeR YaBLaK aGI_)
    > ...yın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc....


## KT-G-7#3 - Kül Tigin Yazıtı, Güney 7. satir  (5 kelime)

- **transkripsiyon:** `YaGuK : eRSeR : eDGÜ : aGI : BİRÜR`
- **kelime karsiliklari:** YAKIN : İSEN : İYİ : AĞI : VERİR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...ge teği kıdmaz ermiş. Süçiğ sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, to...
  - `Ata 2011, s. 146` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...n hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u-...
  - `Ata 2011, s. 139` (eslesen: _YaGuK eRSeR eDGÜ aGI BİRÜR_)
    > ...l 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc. itd. açe. al- 10. Tasvirî fiilli...


## KT-G-7#4 - Kül Tigin Yazıtı, Güney 7. satir  (3 kelime)

- **transkripsiyon:** `TİP : aNÇA : BOŞGURUR`
- **kelime karsiliklari:** DEYİP : ANCA : BOŞGURUR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _TİP aNÇA BOŞGURUR_)
    > ...sabınğa yımşak ağısınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık t...
  - `Tekin 2003, s. 218` (eslesen: _TİP aNÇA BOŞGURUR_)
    > ...ärmiş. Süçig sabıŋa, y(i)mşak agısıŋa arturup üküş Türük bodun öltüg! Türk bodun, ölsikig! Biryä Çogay yış, Tögültün (G 7) yazı konayin tisär, Türük bodun, ölsikig! Anta añıg kişi ança boşgurur ärmiş: "Irak ärsär yablak agı birür, yaguk ärsär ädgü agı birür" tip ança boşgurur ärmiş. Bilig bilmäz kişi ol sabıg alıp, yagru barıp, üküş kişi öltüg. (G 8) Ol yirgärü barsar, Türük bodun, öltäçi sän! Ötükän yir olorup arkış tirkiş ısar, näŋ buŋug yok. Ötükän yış olorsar, bäŋgü il tuta olortaçı sän. Türk bodun, tokurkak sän. Āçsar tosık...
  - `Tekin 2003, s. 141` (eslesen: _aNÇA BOŞGURUR_)
    > ...t(it)dim* "Otağ(ımı) burada kurdurtdum" (Tar. G 6) *örgin bunta yarat(ıt)dım çıt bunta tokıtdım* "Otağ(ımı) burada kurdurtdum, ordugah çitlerini (de) burada vurdurttum" (Tar. B 2) **316.** *anta* "orada, o yerde" (bk. **Gösterme Zamirleri**): *anta ańıg kişi ança boşgurur ärmiş* "Orada kötü (niyetli) kişiler şöyle akıl verirler imiş" (KT G 7) *ol süg anta yok kışdımız* "O orduyu orda yok ettik" (KT D 32) *üküş öltäçi anta tirilti* "(Aksi halde) ölecek olan birçok kişi orada hayatta kaldı" (BK D 31) *bäniŋ bodunum anta ärür* "B...
  - `Olmez 2017, s. 89` (eslesen: _aNÇA BOŞGURUR_)
    > ...eki - +(i)ŋ: teklik ikinci kişi eki **bėriye çugay yış töğültün** "güneye Çugay dağlarına Töğültün" **Runik** (dört satır runik yazı; ilk satırın sağ kenarında **7** satır numarası): *G 7. yazı : k°onayın tėser : türⁿk : bodun : ölsikiŋ anta : aŋıg kişi : ança : boşgurur : ermiş : ırak erser : yavlak : agı bėrür : yaguk : erser : edgü : agı bėrür : tėp ança : boşgurur : ermiş : bilig : bilmez : kişi : ol savıg : alıp : yagru : barıp : üküş kişi : öltüŋ :* "ovasına yerleşeyim dersen, Türk halkı, mutlaka öleceksin. Kötü insanl...
  - `Ata 2011, s. 151` (eslesen: _BOŞGURUR_)
    > ...ksin. Güneyde Çugay yaylası, Tögültün G7 y(a)zı ko͡ on(a)yin tis(e)r türük͡ bod(u)n Ovasına konayım der isen Türk halkı öls(i)k(i)g (a)n͡ta (a)ń(ı)g kişi (a)n͡ça öleceksin. Orada kötü kişi öylece boşgurur (e)rm(i)ş ır(a)k (e)rs(e)r öğretirmiş. “(Çinliler, bir halk) uzak y(a)bl(a)k (a)gı birür y(a)gu͡k (e)rs(e)r ise kötü armağan verir, yakın ise iyi (e)dgü (a)gı birür tip (a)nça boşgurur armağan verir” diyerek öylece akıl (e)rmiş bil(i)g...
  - `Ata 2011, s. 144` (eslesen: _BOŞGURUR_)
    > ...ü͡kiŋe t(e)gi k͡ııdm(a)z (e)rm(i)ş süçig s(a)bıŋa y(i)mş(a)k (a)gısıŋa (a)rtur(u)p ü͡küş türü͡k bod(u) ölt(ü)g türü͡k bod(u)n öls(i)k(i)g bir(i)ye çug(a)y yış tög(ü)lt(ü)n G7 y(a)zı k͡oon(a)yin tis(e)r türü͡k bod(u)n öls(i)k(i)g (a)n͡ta (a)ń(ı)g kişi (a)n͡ça boşgurur (e)rm(i)ş ır(a)k (e)rs(e)r y(a)bl(a)k (a)gı birür y(a)gu͡k (e)rs(e)r (e)dgü (a)gı birür tip (a)nça boşgurur (e)rmiş bil(i)g bilm(e)z kişi ol s(a)b(ı)g [[s. 144]] (a)l(ı)p y(a)gru b(a)r(ı)p ük(ü)ş kişi ölt(ü)g Onca halkı hep düzene soktum. O şimdi kötü (durum...


## KT-G-7#5 - Kül Tigin Yazıtı, Güney 7. satir  (12 kelime)

- **transkripsiyon:** `eRMiŞ : BİLiG : BİLMeZ : KİŞİ : OL : SaBıG : aLıP : YaGuRU : BaRıP : ÖKüŞ : KİŞİ : ÖLTüG`
- **kelime karsiliklari:** İMİŞ : BİLGİ : BİLMEZ : KİŞİ : O : SÖZÜ : ALIP : YAKINA : VARIP : ÇOK : KİŞİ : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _eRMiŞ BİLiG BİLMeZ KİŞİ_)
    > ...sınğa arturup, üküş Türük bodun, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar...
  - `Olmez 2017, s. 89` (eslesen: _eRMiŞ BİLiG BİLMeZ KİŞİ_)
    > ...t satır runik yazı; ilk satırın sağ kenarında **7** satır numarası): *G 7. yazı : k°onayın tėser : türⁿk : bodun : ölsikiŋ anta : aŋıg kişi : ança : boşgurur : ermiş : ırak erser : yavlak : agı bėrür : yaguk : erser : edgü : agı bėrür : tėp ança : boşgurur : ermiş : bilig : bilmez : kişi : ol savıg : alıp : yagru : barıp : üküş kişi : öltüŋ :* "ovasına yerleşeyim dersen, Türk halkı, mutlaka öleceksin. Kötü insanlar söylece akıl verirlermiş: "Uzakta isen Çinliler ipeklinin kötüsünü verirler, [s. 90] # s. 088 — Mehmet Ölmez (basılı sayfa numa...
  - `Ata 2011, s. 140` (eslesen: _BİLiG BİLMeZ KİŞİ OL_)
    > ...llanılan –p ekinin ünlü ile sonlanan fiillere ulanışında fark vardır: Orhun Türkçesinde fiil kök veya gövdesi üzerine doğrudan –p olarak gelirken, Türkiye Türkçesinde araya /y/ kaynaştırma ünsüzü girer: Orh. Tü. yorı-p > T. Tü. yürü-y-üp bilig bilmez kişi ol sabıg al-ıp yagru bar-ıp üküş kişi öltüg “cahil kişiler o sözü alıp, (Çin’e) yakın gidip, pek çok kişi öldünüz” KT G7 kaŋ yorı-p ilteriş kaganka adrılmaduk yaŋılmaduk “babam (ardı sıra) yürüyüp İlteriş Kağan’dan ayrılmamış, (ona karşı) yanlış...
  - `Olmez 2017, s. 64` (eslesen: _BİLiG BİLMeZ KİŞİ OL_)
    > ...olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar az bilsem de bildiğim, düşündüğüm kadarıyla bu yazıtı hakkettim." (KÇ G 28); *bilig bilmez kişi ol savıg alıp* "Cahil insanlar, bu sözleri ciddiye alıp" (KT G 7); *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen bilincim bilmez gibi oldu." (KT K 10) **{-DOk} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim...
  - `Ata 2011, s. 133` (eslesen: _BİLiG BİLMeZ KİŞİ OL_)
    > ...de sıkça kullanılan –p ekinin ünlü ile sonlanan fiillere ulanışında fark vardır: Orhun Türkçesinde fiil kök veya gövdesi üzerine doğrudan –p olarak gelirken, Türkiye Türkçesinde araya /y/ kaynaştırma ünsüzü girer: Orh. Tü. yorı-p > T. Tü. [[s. 133]] yürü-y-üp bilig bilmez kişi ol sabıg al-ıp yagru bar-ıp üküş kişi öltüg “cahil kişiler o sözü alıp, (Çin’e) yakın gidip, pek çok kişi öldünüz” KT G7 kaŋ yorı-p ilteriş kaganka adrılmaduk yaŋılmaduk “babam (ardı sıra) yürüyüp İlteriş Kağan’dan ayrılmamış, (ona karşı) yanlış iş yapmamış” Ong...


## KT-G-8#1 - Kül Tigin Yazıtı, Güney 8. satir  (38 kelime)

- **transkripsiyon:** `OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BUŊuG : YoK : ÖTÜKeN : YIŞ : OLuRSaR : BeŊGÜ : İL : TUTA : OLuRTaÇI : SeN : TÜRK : BODuN : TOKuRKaK : SeN : AÇSıK : TOSıK : ÖMeZ : SeN : BİR : TODSaR : AÇSıK : ÖMeZ : SeN : aNTaGıŊıN`
- **kelime karsiliklari:** O : YERLERE : VARIRSAN : TÜRK : BOYLARI : ÖLECEK : SEN : ÖTÜKEN : YERİNDE : OTURUP : ARKIŞ : TİRGİŞ : [GÖNDERİR] İSEN : NE : BUNGUN : YOK : ÖTÜKEN : YIŞDA : OTURSAN : BENGÜ : İL : TUTUP : OTURACAK : SEN : TÜRK : BOYLARI : TOKSAN : SEN : AÇLIĞI : TOKLUĞU : DÜŞÜNMEZ : SEN : BİR : DOYSAN : AÇLIĞI : DÜŞÜNMEZ : SEN : ÖYLE [OLDUĞUN]
- **kanit:**
  - `Olmez 2017, s. 90` (eslesen: _BaRSaR TÜRK BODuN ÖLTeÇİ_)
    > ...ler" - yavlak: muhtemel bir \**yav*+ kökü için krş. *yavız* ve *yavrı-* **yaguk erser** < *yagu-k* "yakında isen" - yagu-: fiil tabanı - -k: fiilden isim yapma eki [Runik metin — 5 satır; ilk satırın sonunda yazıt satır numarası: 8] --- *G 8. ol yėrgerü : barsar : türk : bodun : ölteci sen : ötüken : yėr : olorup : arkış : tėrkis isar : neŋ buyuŋ yok ötüken : yiş : olorsar : beŋgü ėl tuta : olortaçı sen : türk : bodun : tokurkak sen : açsık : tosik ömez sen : bir : todsar : açsık : ömez sen : antağıyın :* "Oralara gidersen, Türk halkı mutl...
  - `Tekin 1998, s. 20` (eslesen: _BODuN ÖLTeÇİ SeN ÖTÜKeN_)
    > ...ayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop...
  - `Ata 2011, s. 53` (eslesen: _ÖTÜKeN YİR OLuRuP aRKıŞ_)
    > ...sık yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi...
  - `Ata 2011, s. 46` (eslesen: _ÖTÜKeN YİR OLuRuP aRKıŞ_)
    > ...k yir ötüken yış ermiş! KT G4 (“il, devlet tutacak yer Ötüken dağ çayırları imiş!”) sözünü Tonyukuk, yaklaşık elli yıl sonra Köktürk Kağanı’nın ağzından Türk milletine söyletmiştir. [[s. 46]] Ayrıca yazıtlarda Tonyukuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (...


## KT-G-9#1 - Kül Tigin Yazıtı, Güney 9. satir  (20 kelime)

- **transkripsiyon:** `ÜÇÜN : İGiDMiŞ : KaGaNıŊıN : SaBIN : aLMaTIN : YİR : SaYU : BaRDıG : KOP : aNDA : aLKıNTıG : aRıLTıG : aNDA : KaLMıŞI : YİR : SaYU : KOP : TORU : ÖLÜ : YORıYUR`
- **kelime karsiliklari:** İÇİN : [SENİ] YEDİRMİŞ : KAĞANININ : SÖZÜNÜ : ALMADAN : YERE : HER : VARDIN : HEP : [O] ANDA : ALKINDIN : ARILDIN : [O] ANDA : KALMIŞI : YERE : HER : HEP : DORUP : ÖLÜP : YÜRÜYOR
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _ÜÇÜN İGiDMiŞ KaGaNıŊıN SaBIN_)
    > ...ğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodun...
  - `Tekin 2003, s. 176` (eslesen: _ÜÇÜN İGiDMiŞ KaGaNıŊıN SaBIN_)
    > ...işig küçüg birtökgärü sakın-matı...* "(Türk halkının kendilerine) bunca hizmet ettiğini (hiç) düşünmeden..." (KT D 10) *säkiz oguz tokuz tatar kal-matı kälti* "Sekiz Oğuzlar ve Dokuz Tatarlar eksiksiz (geride hiç kimse kalmadan) geldiler" (MÇ D 3) *antagıŋın üçün igidmiş kaganıŋın sabin al-matin...* "Öyle olduğun için (seni) doyurmuş olan hakanının sözünü dinlemeden (rızasını almadan) her yere gittin" (KT D 8-9) *yämä yıra-matın yagıd[ur är]miş* "Yine çok geçmeden düşman olurmuş" (MÇ D 10) *kalın yagıka kay-matın tägipän...* "Kalabalık düşma...
  - `Ata 2011, s. 141` (eslesen: _ÜÇÜN İGiDMiŞ KaGaNıŊıN SaBIN_)
    > ...onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “geceleri uyumadan gündüzleri oturmadan (dinlenmeden)” T 51-52 antagıŋın üçün igidmiş kaganıŋın sabın al-matın yir sayu bardıg “(sen) öyle olduğun için (seni) doyurmuş (beslemiş) kağanının sözünü almadan (dinlemeden) her yere gittin” KT G8-9 10. erkli “iken” zarfı, -(X)r / -Ar ekli geniş-şimdiki zaman eylem adlarından sonra gelerek zarf gru...
  - `Ata 2011, s. 134` (eslesen: _ÜÇÜN İGiDMiŞ KaGaNıŊıN SaBIN_)
    > ...nca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “geceleri uyumadan gündüzleri oturmadan (dinlenmeden)” T 51-52 antagıŋın üçün igidmiş kaganıŋın sabın al-matın yir sayu bardıg “(sen) [[s. 134]] öyle olduğun için (seni) doyurmuş (beslemiş) kağanının sözünü almadan (dinlemeden) her yere gittin” KT G8-9 10. erkli “iken” zarfı, -(X)r / -Ar ekli geniş-şimdiki zaman eylem adlarından sonra gelerek zarf grubu öylec...


## KT-G-9#2 - Kül Tigin Yazıtı, Güney 9. satir  (6 kelime)

- **transkripsiyon:** `eRTiG : TeŊRİ : YaRLıKaDUKIN : ÜÇÜN : ÖZüM : KUTuM`
- **kelime karsiliklari:** İDİ[LER] : TANRI : BUYURDUĞU : İÇİN : ÖZÜM : KUTUM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _YaRLıKaDUKIN ÜÇÜN_)
    > ...olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunt...
  - `Tekin 1998, s. 43` (eslesen: _ÜÇÜN ÖZüM_)
    > ...) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yöne...
  - `Tekin 2003, s. 124` (eslesen: _ÜÇÜN ÖZüM_)
    > ..." (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altızdı* "İkisini (de) kendisi tutsak aldı" *özi süsi ögirü säbinü ordusıŋaru kälir* "O ve ordusu güle oynaya karargâ...
  - `Olmez 2017, s. 92` (eslesen: _ÜÇÜN ÖZüM_)
    > ...yle basılmış 4 satır metin; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemiş olan hakanının sözlerini dikkate almayıp her yöne gittin. Oralarda tamamen yok oldun, tükendin. Geride kalanlarınız yarı ölü yarı diri her yere gidiyordunuz. Tanrı lütfettiği için,...
  - `Tekin 2003, s. 215` (eslesen: _ÖZüM KUTuM_)
    > ...ümle Bağlacı olarak *üçün* **490.** *üçün* sontakısı da bir ve birden çok yan cümleyi, yüklemi *bar* ya da {-DOk} ekli bir eylem sıfatı olan yan cümleleri temel cümleye bağlamak için kullanılır: 1. Yüklemi *bar* olan bir ya da daha çok yan cümleyi bağlar: - *özüm kutum bar üçün, kagan olortum* "... benim talihim olduğu için hakan olarak tahta oturdum" (KT G 9) - *kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Talihim olduğu için, şansım olduğu için, ölecek halkı hayatta tutup doyurdum" (KT D 29) - *tört...
  - `Ogel C2, s. 167` (eslesen: _YaRLıKaDUKIN ÜÇÜN_)
    > ...zılarındaki, “Tengriler Tengrisi yerinte”” sözünün çin cekarşılığımı, ““Göğün yüceliği”'”' (T'ien-shang) olarak teeshit etmişti: (Uig.,1,24). [[s. 167]] “Üze” sözümüz de, yine çince “shang” karşılığı olarak gösterilmişti: “Üze Tengri, asra yer, izin verdiği (yarlıkadukın) üçün, “Közün görmediği (közün körmedük), kulağın işitmedik...” (IIKİ1-12). 2) “*Ediz”'”' sözü ikinci devrede görülüyordu. Edizde, Yücelik ve çince karşılığı (shang) idi. Kutadgu Bilig'de görülüyordu. Uygur el yazılarında, bunun yanında “yüksek ediz” esözleri,aynı...


## KT-G-9#3 - Kül Tigin Yazıtı, Güney 9. satir  (6 kelime)

- **transkripsiyon:** `BaR : ÜÇÜN : KaGaN : OLuRTuM : KaGaN : OLuRuP`
- **kelime karsiliklari:** VAR [OLDUĞU] : İÇİN : KAĞAN : OTURDUM : KAĞAN : OTURUP
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BaR ÜÇÜN KaGaN OLuRTuM KaGaN OLuRuP_)
    > ...rkak sen: Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtu...
  - `Tekin 2003, s. 215` (eslesen: _BaR ÜÇÜN KaGaN_)
    > ...ı olarak *üçün* **490.** *üçün* sontakısı da bir ve birden çok yan cümleyi, yüklemi *bar* ya da {-DOk} ekli bir eylem sıfatı olan yan cümleleri temel cümleye bağlamak için kullanılır: 1. Yüklemi *bar* olan bir ya da daha çok yan cümleyi bağlar: - *özüm kutum bar üçün, kagan olortum* "... benim talihim olduğu için hakan olarak tahta oturdum" (KT G 9) - *kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Talihim olduğu için, şansım olduğu için, ölecek halkı hayatta tutup doyurdum" (KT D 29) - *tört oglum bar üçün,...
  - `Olmez 2017, s. 92` (eslesen: _BaR ÜÇÜN KaGaN_)
    > ...n; ilk satır sonunda satır numarası 9] **G 9.** *üçün : igidmiš kaganıŋın : savın : almatın : yėr sayu : bardıŋ : k[?]op anta : alkıntıŋ : arıltıŋ : anta kalmıšı : yėr : sayu k[?]op : turu ölü : yorıyur ertiŋ : teŋri : yarlïkadokïn : üçün : özüm : k[?]utum : bar üçün : kagan : olortum : kagan : olorup* “için seni beslemiş olan hakanının sözlerini dikkate almayıp her yöne gittin. Oralarda tamamen yok oldun, tükendin. Geride kalanlarınız yarı ölü yarı diri her yere gidiyordunuz. Tanrı lütfettiği için, benim de talihim olduğu için...


## KT-G-10#1 - Kül Tigin Yazıtı, Güney 10. satir  (5 kelime)

- **transkripsiyon:** `YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM`
- **kelime karsiliklari:** YOK : ÇIĞANY : BOYLARI : HEP : TOPARLADIM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _BODuNuG KOP KUBRaTDıM_)
    > .... [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka ur...
  - `Tekin 2003, s. 218` (eslesen: _BODuNuG KOP KUBRaTDıM_)
    > ...āçsık ömäz sän. Antagıŋın (G 9) üçün, igidmiş kaganıŋın sabin almatin yir sayu bardıg; kop anta alkıntıg arıltıg. Anta kalmişi yir sayu kop toru ölü yorıyur ärtig. Täŋri yarlık(k)adokin üçün, [ö]züm kutum bar üçün, kagan olortum. Kagan olorup (G 10) yok çıgañ bodunug kop kubratdım. Çıgañ bodunug bay kıltım, az [s. 219] # s. 219 — TALAT TEKİN (basılı sayfa numarası 220) bodunug üküş kıltım. Azu bu sabımda igid bar gu? Türük bäglär, bodun, bunı eşidiŋ! Türük [bodun ti]rip il tutsıkıŋın bunta urtum; yaŋılıp ölsikiŋin yämä (G 11) bunta...
  - `Tekin 2003, s. 144` (eslesen: _BODuNuG KOP_)
    > ..., *ärtiŋü* "pek, pek çok", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (K...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG KOP_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta otura...
  - `Olmez 2017, s. 103` (eslesen: _BODuNuG KOP_)
    > ...." ile gösterilen bozuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesini, yasalarını ele alıp d...
  - `Ata 2011, s. 40` (eslesen: _BODuNuG KOP_)
    > ...şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...


## KT-G-10#2 - Kül Tigin Yazıtı, Güney 10. satir  (4 kelime)

- **transkripsiyon:** `ÇIGaYN : BODuNuG : BaY : KILDıM`
- **kelime karsiliklari:** ÇIĞANY : BOYLARI : BAY : KILDIM
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


## KT-G-10#3 - Kül Tigin Yazıtı, Güney 10. satir  (4 kelime)

- **transkripsiyon:** `aZ : BODuNuG : ÖKÜŞ : KILDıM`
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


## KT-G-10#4 - Kül Tigin Yazıtı, Güney 10. satir  (11 kelime)

- **transkripsiyon:** `aZU : BU : SaBıMDA : İGiD : BaR : GU : TÜRK : BeGLeR : BODuN : BUNI : eŞİDiŊ`
- **kelime karsiliklari:** AZU : BU : SÖZÜMDE : İGİD : VAR : MI? : TÜRK : BEĞLERİ : BOYLARI : BUNU : İŞİTİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _aZU BU SaBıMDA İGiD_)
    > ...u bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü...
  - `Tekin 2003, s. 156` (eslesen: _aZU BU SaBıMDA İGiD_)
    > ...ş Bağlaçlar **367.** Orhon Türkçesinde sıradaş bağlaçlar ya da bağlaç görevinde kullanılan sözcükler şunlardır: *azu, artukı, takı, udu, ulayu* ve *yämä*. **368.** *azu* "veya, yoksa, yahut" (= Tuva *azı* ay. < *\*āz-* "azmak, yoldan sapmak ya da çıkmak"): *azu bu sabımda igid bar gu* "(Yoksul halkı zengin ettim, az halkı çoğalttım); yoksa, bu sözlerimde yalan var mı?" (KT G 10) Yinelemeli olarak: *azu turuk sub ärsär opayın, azu itmiş yaratmış tatıglıg aş ärsär aşayın* "Ya duru su olsun içip yutayım ya da yapılmış edilmiş tatlı y...
  - `Ata 2011, s. 122` (eslesen: _aZU BU SaBıMDA İGiD_)
    > ...12 BAĞLAÇ Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer ol...
  - `Ata 2011, s. 115` (eslesen: _aZU BU SaBıMDA İGiD_)
    > ...BAĞLAÇ [[s. 115]] Orhun Türkçesinde bağlaç olarak azu ‘veya, yoksa, yahut’, takı ‘ve, dahi’, ulayu ‘ve’, yeme ‘ve, dahi, … da’, yan cümle bağlacı olarak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle eri...


## KT-G-10#5 - Kül Tigin Yazıtı, Güney 10. satir  (7 kelime)

- **transkripsiyon:** `TÜRK : BODuN : TİRiP : İL : TUTSıKıŊıN : BUNDA : URTuM`
- **kelime karsiliklari:** TÜRK : BOYLARININ : DİRİLİP : İL : TUTACAĞINI : BUNDA(TAŞA) : VURDUM
- **kanit:**
  - `Tekin 2003, s. 166` (eslesen: _BODuN TİRiP İL_)
    > ...sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *bunta urtum* "(Ey) Türk halkı! Hayatta kalıp (nasıl) devlet sahibi olacağını buraya kaydettim, yanılıp (nasıl) öleceğini (de) buraya kaydettim" (KT G 10-11) *kün...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Tekin 1998, s. 20` (eslesen: _İL TUTSıKıŊıN_)
    > ...i yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerl...


## KT-G-10#6 - Kül Tigin Yazıtı, Güney 10. satir  (3 kelime)

- **transkripsiyon:** `YaŊıLıP : ÖLSiKiŊiN : YiME`
- **kelime karsiliklari:** YANILIP : ÖLECEĞİNİ : YİNE
- **kanit:**
  - `Tekin 2003, s. 141` (eslesen: _YaŊıLıP ÖLSiKiŊiN_)
    > ...* "orada" (< *an+ta*). [s. 141] # s. 141 — ORHON TÜRKÇESİ GRAMERİ **315.** *bunta* "burada, bu yerde" (bk. **İşaret Zamirleri**): *kagan at bunta biz birtimiz* "(Ona) Hakan unvanını burada biz verdik" (KT D 20) *türük [bodun ti]rip il tutsıkıŋın bunta urtum yaŋılıp ölsikiŋin yämä bunta urtum* "(Ey) Türk halkı! Senin (nasıl) hayatta kalarak devlet sahibi olacağını burada (taş üzerine) kazdırttım; (nasıl) yanılıp öleceğini de burada (taş üzerine) kazdırttım" (KT G 10-11) *örgin bunta et(it)dim* "Otağ(ımı) burada kurdurtdum" (Tar. G...
  - `Tekin 1998, s. 20` (eslesen: _ÖLSiKiŊiN_)
    > ...üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla k...
  - `Olmez 2017, s. 95` (eslesen: _ÖLSiKiŊiN_)
    > ...tabanı - +n: zamir n'si - +ta: bulunma/ ayrılma durumu eki **urtum** < *ur-tu+m* "kazıdım" - ur-: fiil tabanı - -tu: bilinen geçmiş zaman eki - +m: teklik birinci kişi eki **yaŋılıp** < *yaŋıl-(ı)p* "hata edip" - yaŋıl-: fiil tabanı - -(ı)p: zarffiil eki **ölsıkiŋin yeme** < *yem-e* "öleceğinizi de" - yem-: fiil tabanı - -e: zarffiil eki; kalıplaşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayf...
  - `Ergin 1970, s. 13` (eslesen: _YaŊıLıP_)
    > ...olduğum için, kağan oturdum. Kağan oturup | aç, fakir milleti hep toplattım. [[s. 13]] Fakir milleti zengin kıldım. Az milleti çok kıldım. Yoksa, bu sözümde yalan var mı ? Türk beyleri, milleti, bunu işitin! Türk milletini toplayıp il tutacağını burda vurdum. Yanılıp öleceğini yine | burda vurdum. Her ne sözüm varsa ebedî taşa vurdum. Ona bakarak bilin. Şimdiki Türk milleti, beyleri, bu zamanda itaat eden beyler olarak mı yanılacaksınız? [s. 14] Ben ebedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. B...
  - `Tekin 2003, s. 109` (eslesen: _YaŊıLıP_)
    > ...Hanını bırakıp (başkalarına) bağımlı oldun" (T 3) *kürägüŋ+in üçün* "ele avuca sığmaz olduğun için" (KT D 23, BK D 19) *bäglik urı ogluŋ+ın kul kıltıg* "Bey olmaya layık erkek çocuklarını köle yaptın" (BK D 20) *türük [bodun ti]rip il tutsıkıŋ+ın bunta urtum, yaŋılıp ölsikiŋ+in yämä bunta urtum* "Türk halkı, yaşayıp (nasıl) devlet sahibi olacağını buraya hakkettim, yanılıp öleceğini de buraya hakkettim" (KT G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg a...
  - `Ata 2011, s. 152` (eslesen: _YaŊıLıP_)
    > ...yalan var mı? Türk beyleri, Türk ulusu bunu işitin! Türk halkı (senin) ku͡ ubr(a)td(ı)m çıg(a)ń bod(u)n(u)g yaşayıp vatan tutacağını buraya kazıdım, yanılıp öleceğini de b(a)y kıl͡tım az bod(u)n(u)g üküş kıl͡t(ı)m (a)zu bu s(a)b(ı)mda ig(i)d b(a)rgu türük͡ b(e)gl(e)r bod(u)n bunı (e)şid(i)ŋ türük [bodun ti]r(i)p il tuts(ı)k(ı)ŋ(ı)n bunt͡ a urt(u)m y(a)ŋ(ı)l(ı)p öls(i)k(i)ŋ(i)n y(e)me KÖ...


## KT-G-11#1 - Kül Tigin Yazıtı, Güney 11. satir  (9 kelime)

- **transkripsiyon:** `BUNDA : URTuM : NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM`
- **kelime karsiliklari:** BUNDA(TAŞA) : VURDUM : NE[CE] : NE[CE] : SÖZÜM : [VAR] İSE : BENGÜ : TAŞA : VURDUM
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _SaBıM eRSeR BeŊGÜ TaŞKA_)
    > ...ariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) y...
  - `Olmez 2017, s. 96` (eslesen: _eRSeR BeŊGÜ TaŞKA URTuM_)
    > ...aşarak edat oluşturmuştur Runik: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım...
  - `Tekin 2003, s. 128` (eslesen: _TaŞKA URTuM_)
    > ...lkesinde oturup oradan) kervanlar gönderirsen hiç derdin olmaz" (KT G 8) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär...* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa..." (T 56-57) Yinelemeli olarak: *näŋ näŋ sabım ärsär bäŋgü taşka urtum* "(Söylenecek) ne kadar sözüm var ise (hepsini bu) ebedi taşa vurdum" (KT G 11, BK K 8) Daha önce gelen *kaçan* "ne zaman?" ile daha sonra gelen *ärsär* "ise" sözcüğü ile birlikte "ne zaman olsa, er veya geç" anlamına gelir: *kaçan (n)äŋ ärsär bizni... ölürt...
  - `Tekin 1998, s. 17` (eslesen: _BUNDA_)
    > ...ıçevrimli metnini vermiştir: Alttürkische Grammatik, Leipzig 1941, ss. 247-257. Orhon yazıtları von Gabain'den sonra Rus türkologlarından S. Ye. Malov tarafından yayımlanmıştır: Pamyatniki drevnetyurkskoy pis'mennosti, Moskva-Leningrad 1951. Tunyukuk yazıtı bundan sonra Pentti Aalto, G. J. Ramstedt ve J. G. [[s. 17]] Granö tarafından yayımlanmıştır: “Materialien zu den alttürkischen Inschriften der Mongolei”, JSFOu LX: 7 (1958), ss. 30-66. Tunyukuk yazıtını, harfçevrimi, yazıçevrimi, Fransızca çevirisi, açıklamaları...
  - `Ergin 1970, s. 8` (eslesen: _BUNDA_)
    > ...24 satırları ise Kül Tigin âbidesinin doğu cephesinin mukabil satırlarına benzemektedir. Bu âbidede ayrıca Kül Tigin'in ölümünden sonraki vakaların ilave edildiği görülür. Bilge Kağan âbidesi hem devrilmiş, hem de parçalanmıştır. Onun için tahribat ve silinti bunda çok fazladır. Bu âbideyi de yeğeni Yollug Tigin yazmıştır. [[s. 8]] Her iki âbidede de Bilge Kağan'ın sözlerinin dışında Yollug Tigin'in kitâbe kayıtları ve ilâveleri yer almaktadır. Bu âbidenin etrafında da yine türbe enkazı ve daha az olmak üzere heykeller,...
  - `Ata 2011, s. 11` (eslesen: _BUNDA_)
    > ...Asya’nın Büyük Okyanus kıyılarından, Orta Avrupa’ya ve Akdeniz kıyılarına kadar uzanan alanda konuşulan Ural-Altay dil ailesi, Ural ve Altay dilleri olmak üzere iki gruba ayrılır. Türk dili, Altay grubundadır. Ural-Altay Dil Ailesi Tablo 1.1 Ural Dilleri Altay Dilleri Ural-Altay Dil Ailesi 1. Fin-Ugor Dilleri 1. Türkçe 2. Moğolca...


## KT-G-11#2 - Kül Tigin Yazıtı, Güney 11. satir  (3 kelime)

- **transkripsiyon:** `aŊaR : KÖRÜ : BİLiŊ`
- **kelime karsiliklari:** ONU : GÖRÜP : BİLİN
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...ariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) yaklaştırırlar imiş. [[s....
  - `Tekin 2003, s. 123` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...i yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123] # s. 123 — ORHON TÜRKÇESİ GRAMERİ *anı yañıp türgi yargun költä buzdumuz* "Onları dağıtıp Türgi Yargun gölde bozguna uğrattık" (KT D 34) 3. Verme durumu: *aŋar körü biliŋ* "Ona bakın ve öğrenin!" (KT G 11, BK K 8) *aŋar adınç(ç)ıg bark yarat(t)urtum* (KT G 12) = *aŋar adınç(ç)ıg bark yaratı(d)dım* (BK K 1)) "Ona olağanüstü bir anıt-mezar yaptırdım" 4. Bulunma-Çıkma durumu: Bk. **Yer Zarfları**. 5. Yönelme durumu: *aŋaru sülä...
  - `Olmez 2017, s. 96` (eslesen: _aŊaR KÖRÜ BİLiŊ_)
    > ...: ``` : [?] : [?] : [?] : [?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anl...


## KT-G-11#3 - Kül Tigin Yazıtı, Güney 11. satir  (14 kelime, TAS KIRIGI)

- **transkripsiyon:** `TÜRK : aMTI : BODuN : BeGLeR : BÖDKE : KÖRüGME : BeGLeR : GÜ : YaŊıLDaÇI : SİZ : MeN : BeŊGÜ : TaŞ : TOKıTDıM ---`
- **kelime karsiliklari:** TÜRK[ÜN] : ŞİMDİ[Kİ] : BOYLARI : BEĞLERİ : BÖYLE : GÖRÜĞÜMDEKİ : BEĞLER [OLARAK] : MI : YANILACAK : SİZ? : BEN : BENGÜ : TAŞ : DOKUTTUM. ---
- **kanit:**
  - `Olmez 2017, s. 96` (eslesen: _aMTI BODuN BeGLeR BÖDKE_)
    > ...[?] : [?] : [?] : [?] 11 : [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anlayın. Şu anki Türk halkı, beyleri, hal...
  - `Tekin 1998, s. 20` (eslesen: _BODuN BeGLeR BÖDKE KÖRüGME_)
    > ...dunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) yaklaştırırlar imiş. [[s. 20]] (Bu halklar) yaklaşıp yerleştikten s...
  - `Ata 2011, s. 146` (eslesen: _BÖDKE KÖRüGME BeGLeR GÜ_)
    > ...lmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u- c. it- d. aç- e....
  - `Ata 2011, s. 139` (eslesen: _BÖDKE KÖRüGME BeGLeR GÜ_)
    > ...ngisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc. itd. açe. al- 10. Tasvirî fiilli birleşik fiil yapılarında,...


## KT-G-11#4 - Kül Tigin Yazıtı, Güney 11. satir  (4 kelime)

- **transkripsiyon:** `TaBGaÇ : KaGaNDA : BeDiZÇİ : KeLÜRTüM`
- **kelime karsiliklari:** TABGAÇ : KAĞANINDAN : BEZECİ : GETİRDİM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _BeDiZÇİ KeLÜRTüM_)
    > ...yliyecek) her ne sözüm var ise ebedi taşa hâkkettim. Ona bakarak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13)...
  - `Ata 2011, s. 113` (eslesen: _BeDiZÇİ KeLÜRTüM_)
    > ...l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gi...
  - `Olmez 2017, s. 96` (eslesen: _BeDiZÇİ KeLÜRTüM_)
    > ...(basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anlayın. Şu anki Türk halkı, beyleri, halihazırdaki beyler, sizler mi yanılacaksınız? Ben bengi taş diktim. Çin hakanından sanatçı getirtti...
  - `Ata 2011, s. 106` (eslesen: _BeDiZÇİ KeLÜRTüM_)
    > ...ma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. [[s. 106]] Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga g...
  - `Tekin 2003, s. 75` (eslesen: _KaGaNDA_)
    > ...ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/: - *bizintä* "bizimkinden" (T 40) < **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök...
  - `Olmez 2017, s. 58` (eslesen: _KaGaNDA_)
    > ...bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinl...


## KT-G-11#5 - Kül Tigin Yazıtı, Güney 11. satir  (4 kelime)

- **transkripsiyon:** `BeDiZeTiM : MeNiŊ : SaBıMıN : SIMaDI`
- **kelime karsiliklari:** BEZETTİM : BENİM : SAVIMI : KIRMADI
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _MeNiŊ SaBıMıN SIMaDI_)
    > ...bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s. 32]] |..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ ıttı. Anğar adınçığ bark yarat<ıt>dım. İçin taşın adınçığ bediz ulrturtJum. (Taş tokıtdım, köfngülteki slJabımın (Çurturtum. ............... | (K 15) On-Ok oğlınga Tatıfiğa teği bunı körü biling. Bengglü) taş tokıtdım nun | tokıtdım, bititdim...
  - `Tekin 1998, s. 21` (eslesen: _SaBıMıN SIMaDI_)
    > ...aşa hâkkettim. Ona bakarak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança ta...
  - `Tekin 2003, s. 120` (eslesen: _SaBıMıN SIMaDI_)
    > ...e (biz) çaresiz kalırız" (T 12) *bödkä körügmä bäglär gü yaŋıltaçı siz* "Bu dönemde (bana) itaat eden beyler, (sizler) mi yanılacaksınız?" (KT G 11, BK K 8) 2. İlgi durumu (sıfat olarak): *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *mäniŋ sabımın sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ö...
  - `Tekin 1998, s. 19` (eslesen: _SaBıMıN_)
    > ..., nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusın...
  - `Tekin 2003, s. 60` (eslesen: _SaBıMıN_)
    > ...BK D 7, vb.) - *sabın* "sözlerini" (IB 58) < *sab-in*, vb. [s. 60] # s. 60 — TALAT TEKİN 2. Aynı ilerleyici benzeşme tekil 1. kişi iyelik eki almış sözcüklerin belirli nesne durumlarında da meydana gelmiş olmalıdır: - *başımın* "başımı" (IB 8) < *başimin - *sabımın* "sözlerimi" (KT G 1, 11, 12; BK K 1) < *sabimin* (KT G 2) - *atımın* "adımı" (Tar. D 4) < *ātimin vb. 3. Orhon yazıtlarında genellikle uyuma girmediği yazımdan anlaşılan /-miş/ ekinin Uygur yazıtlarında uyuma girme eğiliminde olduğunu gösteren az sayıda örn...
  - `Ata 2011, s. 127` (eslesen: _SaBıMıN_)
    > ...pma c. İsimden fiil yapma d. Aynı yapı ve görevde iki sözcüğü bağlama e. Aynı yapıda iki fiilin art arda kullanımını sağlama 3. Aşağıdaki ifadelerin hangisinde belirtme durumu eki kullanılmamıştır? a. süçig sabıŋa yımşak agısıŋa b. sabımın edgüti eşid c. tabgaçgaru kunı seŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazı...


## KT-G-12#1 - Kül Tigin Yazıtı, Güney 12. satir  (5 kelime)

- **transkripsiyon:** `TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI`
- **kelime karsiliklari:** TABGAÇ : KAĞANI : İÇİNDEKİ : BEZECİ : İTDİ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ KaGaNıŊ İÇReKİ BeDiZÇİG_)
    > ...rak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte ben...
  - `Olmez 2017, s. 97` (eslesen: _KaGaNıŊ İÇReKİ BeDiZÇİG_)
    > ...iyelik eki - +(ı)n: iyelik ekinden sonra gelen belirtme durumu eki **sımadı** < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı...
  - `Tekin 2003, s. 219` (eslesen: _TaBGaÇ KaGaNıŊ_)
    > ...lıp ölsikiŋin yämä (G 11) bunta urtum. Näŋ näŋ sabım ärsär bäŋgü taşka urtum. Aŋar körü biliŋ! Türük matı bodun, bäglär, bödkä körügmä bäglär gü yaŋıltaçı siz? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, a...
  - `Olmez 2017, s. 76` (eslesen: _BeDiZÇİG_)
    > ...ri şu satırlardan izleyebiliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bi...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNıŊ_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı y...
  - `Ergin 1970, s. 6` (eslesen: _KaGaNıŊ_)
    > ...lidir. Doğu ve batı cephelerinin genişliği aşağıda 132, yukarıda 122 santimdir. Güney ve kuzey cepheleri ise aşağıda 46, yukarıda 44 santimdir. [[s. 6]] Âbidenin üstü kemer şeklinde bitmektedir ve yukarı kısımda beş kenarlı olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu c...
