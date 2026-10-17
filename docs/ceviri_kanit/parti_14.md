# Ceviri istek paketi 14 - Orhun cumlecikleri

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


## KT-KD-1#6 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (5 kelime)

- **transkripsiyon:** `KÖLTİGiN : ÖZİ : KIRK : aRTUKI : YİTİ`
- **kelime karsiliklari:** KÜLTİĞİNİN : ÖZÜ : KIRK : ARTI : YEDİ
- **kanit:**
  - `Olmez 2017, s. 76` (eslesen: _ÖZİ KIRK_)
    > ..., 47 yaşında ölmüştür. Ölümü ve sonrası düzenlenen törenleri şu satırlardan izleyebiliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşın...
  - `Tekin 1998, s. 23` (eslesen: _KIRK aRTUKI_)
    > ...is Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağank...
  - `Tekin 2003, s. 129` (eslesen: _KIRK aRTUKI_)
    > ...3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Elegest I 5), *tokuz on* "90" (IB 29), *biş yüz* "500" (BK G 11), *yeti yüz* "700" (T 4), *eki bıŋ* "2...
  - `Ata 2011, s. 114` (eslesen: _KIRK aRTUKI_)
    > ...ayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ö...
  - `Ata 2011, s. 107` (eslesen: _KIRK aRTUKI_)
    > ...kiz otuz denkliğini kolayca bulabiliriz. d. [[s. 107]] Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün...
  - `Tanyeri, s. 20` (eslesen: _aRTUKI YİTİ_)
    > ...” sayısını, “yirmi beş” biçiminde günümüz sayı sistemine aktarıyoruz. 2- Herhangi bir onluk sayıdan “sonra”, “artukı” (bugünkü artı gibi) bağlacını takip eden bir birlik sayı gelirse; onluk sayının üzerine birlik sayı doğrudan eklenir. Örneğin “yigirmi artukı yiti” sayısını, “yirmi yedi” biçiminde günümüz sayı sistemine aktarabiliriz. 3- Göktürk yazısındaki yüzlük ve binlik sayılar, günümüzdeki gibidir. “Biş yüz” sayısı, bugünkü “beş yüz” sayısıyla aynıdır. Aynı şekilde “üç bin” sayısı da günümüzdeki gibidir....


## KT-KD-1#7 - Kül Tigin Yazıtı, Kuzeydoğu 1. satir  (8 kelime, TAS KIRIGI)

- **transkripsiyon:** `YaŞıG : BOLIT : TaŞ --- : BuNÇA : BeDiZÇİG : TOYGuN : iLTeBeR : KeLÜRTİ`
- **kelime karsiliklari:** YAŞINDA : BULUT [OLDU] : TAŞ --- : BUNCA : BEZECİYİ : TOYGUN : İLTEBER : GETİRDİ
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BuNÇA BeDiZÇİG_)
    > ...ün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiç...
  - `Tekin 1998, s. 21` (eslesen: _BeDiZÇİG_)
    > ...n. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte ben...
  - `Olmez 2017, s. 76` (eslesen: _BeDiZÇİG_)
    > ...ri şu satırlardan izleyebiliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bi...
  - `Tekin 1998, s. 27` (eslesen: _iLTeBeR_)
    > ...sabırsızca hücum etti. İki eri kovalayıp mızrakladı. Karluk'ları öldürdük, (tutsak) aldık. (O sırada) Az halkı (da) düşman oldu. (Onlarla) Kara göl'de savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı kır (atına (K 3) binip sabırsızca hücum etti. Az'ların İlteber'ini tuttu. Az halkı orada yok oldu. Amcam hakanın devleti sarsıldığında, halk (ve) hükümdar ikiye ayrıldığında, İzgil halkı ile savaştık. [[s. 27]] Kül Tigin Alp Şalçı kır (atjına binip (K 4) sabırsızca hücum etti. O at orada düştü. İzgil halkı öldü. Dokuz...
  - `Ergin 1970, s. 20` (eslesen: _iLTeBeR_)
    > ...savaşta otuz yaşında idi. Alp Şalçı ata binip atılarak hücum etti. İki eri takip edip kovalayarak mızrakladı. Karluku öldürdük, yendik. Az milleti düşman oldu. Kara Gölde savaştık. Kül Tigin otuz bir yaşında idi. Alp Şalçı atına binip atılarak hücum etti. Az ilteberini tuttu. Az milleti orda yok oldu. [[s. 20]] Amcam kağanın ili sarsıldığında: millet, hükümdar ikiye ayrıldığında, İzgil milleti ile savaştık. Kül Tigin Alp Şalçı atına binip atılarak hücum etti. O at orda düştü. İzgil milleti öldü. Dokuz Oğuz milleti kendi...
  - `Tekin 1998, s. 26` (eslesen: _KeLÜRTİ_)
    > ...ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmiş, ebin barımın kalısız kop kelürti. ORHON YAZITLARI 49 kaftanından yüzden fazla okla vurdular, (ama) yüzüne (ve) başına bir (ok bile) değmedi ........... (D 34) hücum ettiğini, (ey) Türk beyleri, hepiniz bilirsiniz. [[s. 26]] O orduyu orada yok ettik. Ondan sonra, Yir Bayırku'ların Ulu İrkin...


## KT-GD-1#1 - Kül Tigin Yazıtı, Güneydoğu 1. satir  (7 kelime)

- **transkripsiyon:** `BUNÇA : BİTiG : BİTiGME : KÖLTİGiN : aTISI : YOLuGTİGiN : BİTİDiM`
- **kelime karsiliklari:** BUNCA : BİTİ : BİTİMEYİ : KÜLTİĞİNİN : ATISI : YOLUĞTİGİN : [BEN] BİTİDİM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BUNÇA BİTiG BİTiGME_)
    > ...rmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, küm...
  - `Tekin 2003, s. 106` (eslesen: _BUNÇA BİTiG_)
    > ...m* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük...
  - `Tekin 1998, s. 21` (eslesen: _BİTiG BİTiGME_)
    > ...lteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop...
  - `Olmez 2017, s. 99` (eslesen: _BİTiG BİTiGME_)
    > ...onra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı yazan yeğeni Yollug Tėgin." **tokitdım** < *...
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Olmez 2017, s. 63` (eslesen: _BİTiGME_)
    > ...ıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Ölmez (basılı sayfa numarası 64) **{-(X)r} ve {-Ar} :** *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bilen b...


## KT-GD-1#2 - Kül Tigin Yazıtı, Güneydoğu 1. satir  (10 kelime)

- **transkripsiyon:** `YİGiRMİ : KÜN : OLuRuP : BU : TaŞKA : BU : TaMKA : KOP : YOLuGTİGiN : BİTİDiM`
- **kelime karsiliklari:** YİRMİ : GÜN : OTURUP : BU : TAŞA : BU : DAMGA[YI] : HEP : YOLLUĞTİGİN : YAZDIM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _YİGiRMİ KÜN OLuRuP BU_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin olma...
  - `Tekin 2003, s. 205` (eslesen: _YİGiRMİ KÜN_)
    > ...ünç yigän silig bägiŋ kädimlig torug at binip...* "Üçüncü olarak Yigen Silig Bey'in doru atına binip..." (KT D 33) - *törtünç äzginti kadızda süŋüşdüm* "Dördüncü olarak Ezginti Kadız'da savaştım" (BK D 31), vb. 6. Bir zaman süresi gösteren niteleme öbeği: - *yigirmi kün olorup...* "Yirmi gün oturup..." (KT GD) - *ay artukı tört kün olorup...* "Bir ay artı dört gün oturup..." (BK GB), vb. 7. Bir sontakı öbeği: (bk. **Sontakılar**). [s. 206] # s. 206 — TALAT TEKİN 8. Bir eylem zarfı ya da öbeği: - *ulug oglum agrıp yok bolç...
  - `Tekin 2003, s. 128` (eslesen: _YİGiRMİ_)
    > ...bizni ölürtäçik-ök* "Er veya geç bizi mutlak öldürecektir" (T 29-30) ## Sayılar ## Asıl sayılar **280.** Asıl sayılar (1-10 arası sayılar ve onluklar, yüzlükler vb.) şunlardır: *bir, eki, üç, tört, beş ~ biş, altı, yeti ~ yiti, säkiz, tokuz, on, yegirmi ~ yigirmi, otuz, kırk, älig, altmış, yetmiş, säkiz on, tokuz on, yüz, bıŋ ~ biŋ ~ miŋ, bir tümän* (BK G 1) ## Onluklararası Sayılar **281.** Onluklararası sayılar bir sonraki onluğa atılacak adımlar olarak düşünülür ve buna göre adlandırılır. [s. 129] # s. 129 — ORH...
  - `Ata 2011, s. 75` (eslesen: _YİGiRMİ_)
    > ...sun’da, Orhun ırmağının eski yatağı yakınlarında, Koço Çaydam Gölü civarında birtakım heykeller, balballar ve yıkıntılar arasında Köl Tigin ve Bilge Kağan yazıtlarını bulur. İki yazıt arasındaki mesafe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi al...
  - `Tekin 2003, s. 106` (eslesen: _BİTİDiM_)
    > ...lkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük bodun ü...
  - `Olmez 2017, s. 64` (eslesen: _BİTİDiM_)
    > ...lteçimiz bar mu ne* "Oğuzlardan gelecek iki-üç bin kadar askerimiz var." T1 G7 (14) [Soru cümlesi olarak kurulmuş; ancak soru eki burada kesin, emin olunan bir ifadeyi tasdik için kullanılmıştır.] **{-mAz} :** *bilmez biligin biltökümün ödökümün bonça bitig bitidim* "ne kadar az bilsem de bildiğim, düşündüğüm kadarıyla bu yazıtı hakkettim." (KÇ G 28); *bilig bilmez kişi ol savıg alıp* "Cahil insanlar, bu sözleri ciddiye alıp" (KT G 7); *körür közüm körmez teg bilir biligim bilmez teg boltı* "Gören gözlerim görmez, bil...


## KT-GD-1#3 - Kül Tigin Yazıtı, Güneydoğu 1. satir  (5 kelime)

- **transkripsiyon:** `IGaR : OGLaNıŊuZDA : TaYGUNuŊuZDA : YiGDE : İGiDÜR`
- **kelime karsiliklari:** DEĞERLİ : OĞULLARINIZDAN : TAYGUNUNUZDAN : YEĞ : İGİDİR
- **kanit:**
  - `Tekin 2003, s. 144` (eslesen: _TaYGUNuŊuZDA_)
    > ...ca bağla!" (IB 33) *katıgtı bā* "sıkıca bağla" (IB 14) 3. *yegdi* "daha iyi (biçimde)" < *yeg* "daha iyi": [s. 144] # s. 144 — TALAT TEKİN *[ilig] törög yegdi kazgantım* "Devleti ve töreleri (öbür hakanlardan) daha iyi kazandım" (BK D 36) *ıgar oglanıŋızda taygunuŋuzda yegdi igidür ärtigiz* "(Halkınızı) sevgili çocuklarınızdan, tay 'gibi' oğullarınızdan daha iyi besliyor idiniz" (KT GD) 4. *yaraklıgdı* "silahlı olarak" < *yaraklıg* "silahlı": *oŋ totok yurçin yaraklıg äligin tutdı, yaraklıgdı kaganka ançoladı* "(Prens Kül)...
  - `Tekin 1998, s. 28` (eslesen: _İGiDÜR_)
    > ...ılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin olmasaydı) annem hatun başta olmak üzere (diğer) annelerim, ablalarım, gelinlerim, prensesleri...
  - `Tekin 2003, s. 114` (eslesen: _İGiDÜR_)
    > ...in* "ben (de) kuzey tarafından saldırayım" (T 11) 5. Adların bulunma-çıkma durumu karşılaştırma yapmak için de kullanılır: *ötükän yış+da yig idi yok ärmiş* "Ötüken dağlarından daha iyi (bir yer) asla yok imiş" (KT G 4) *ıgar oglanıŋız+da taygunuŋuz+da yegdi igidür ärtigiz* "(Halkınızı) değerli evladınızdan, tay (gibi) oğullarınızdan daha iyi besliyor idiniz" (KT GD) [s. 115] # s. 115 — ORHON TÜRKÇESİ GRAMERİ ## Yönelme Durumu **267.** Orhon Türkçesinde adların yönelme durumu şu eklerle kurulur: 1. {+gArU}, 2. {+ŋArU...


## KT-GD-1#4 - Kül Tigin Yazıtı, Güneydoğu 1. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `eRTiGiZ : UÇA : BaRDıGıZ : TeŊRi : TİRiGDİÇE : ---`
- **kelime karsiliklari:** İDİNİZ : UÇA : VARDINIZ : TANRI[DAKİ] : DİRİLDİĞİNİZDE : ---
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _eRTiGiZ UÇA BaRDıGıZ_)
    > ...?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin olmasaydı) annem hatun başta olmak üzere (diğer) annelerim, ablalarım, gelinlerim, prenseslerim, bunca hayatta kalan...
  - `Tekin 2003, s. 209` (eslesen: _UÇA BaRDıGıZ_)
    > ...zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzleri (de) oturasım (dinlenesim) gelmedi" (T 12) - *tün yämä udısıkım kälmäz...
  - `Tekin 2003, s. 17` (eslesen: _BaRDıGıZ_)
    > ..., bir diyalektte de /y/ye değişecek olan öndamaksıl /ń/ sesinin korunması: *añıg* “kötü, fena”, *çıgań* “yoksul”, *koń* “koyun”, vb.; 4. Genizsil damak ünsüzü /ŋ/nin ötümlü art- ve öndamak sızıcıları /g/ ve /g/ ile nöbetleşme eğilimi göstermesi: *bardıŋız* ~ *bardıgız* “gittiniz”, *süŋöküŋ* ~ *süŋöküg* “kemiklerin”, vb.; 5. Adların ilgi durumunun ünsüzlerden sonra {-Iŋ}, ünlülerden sonra da {-nIŋ} ile kurulması: *bilgä kagan-ıŋ* “Bilge Hakanın”, *kül tigin-iŋ* “Prens Kül’ün”, *bayırku-nıŋ* “Bayırkuların”, vb.; 6. Adların ç...
  - `Ata 2011, s. 96` (eslesen: _BaRDıGıZ_)
    > ...ança (> anca), uçuz (> ucuz), törüsinçe (> töresince), oçuk (> ocak) 11. Orhun Türkçesinde geniz ünsüzü /ŋ/ söz içinde ve sonunda /g/ ile nöbetleşir. Bu ses değişmesi, 2. kişi iyelik ekleri ile kişi eklerinde görülür: bardıgız ‘vardınız, gittiniz’ ~ bardıŋız süŋüküg ‘kemiklerin’ ~ süŋüküŋ ölsikig ‘öleceksin’ ~ ölsikiŋ törügin ‘(senin) törelerini’ ~ törüŋin Ünsüzler konusunda Orhun Türkçesi ile Türkiye Türkçesi arasındaki farkları sıralayınız....
  - `Ata 2011, s. 142` (eslesen: _eRTiGiZ_)
    > ...on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kantan kelipen sür-e elt-di...
  - `Ata 2011, s. 89` (eslesen: _BaRDıGıZ_)
    > ...er, /ç/’lidir. [[s. 89]] bunça (> bunca), ança (> anca), uçuz (> ucuz), törüsinçe (> töresince), oçuk (> ocak) 11. Orhun Türkçesinde geniz ünsüzü /ŋ/ söz içinde ve sonunda /g/ ile nöbetleşir. Bu ses değişmesi, 2. kişi iyelik ekleri ile kişi eklerinde görülür: bardıgız ‘vardınız, gittiniz’ ~ bardıŋız süŋüküg ‘kemiklerin’ ~ süŋüküŋ ölsikig ‘öleceksin’ ~ ölsikiŋ törügin ‘(senin) törelerini’ ~ törüŋin Ünsüzler konusunda Orhun Türkçesi ile Türkiye Türkçesi arasındaki farkları sıralayınız. [[s. 89]] SÖZ YAPIMI İsimden İsim Ya...


## KT-GB-1#1 - Kül Tigin Yazıtı, Güneybatı 1. satir  (17 kelime, TAS KIRIGI)

- **transkripsiyon:** `KÖLTİGiNiŊ : aLTUNIN : KÜMiŞİN : aGIŞIN : BaRıMIN : TÜRK : aÇIGıYN : KaRNIN : YaGMA : TOYuG : TaBU : --- BeGiM : TİGiN : YÜKeRÜ : TeŊRİ : --- TaŞ : BİTiDiM`
- **kelime karsiliklari:** KÜLTİĞİNİN : ALTININI : GÜMÜŞÜNÜ : AĞIŞINI : VARINI : TÜRK : AÇIGINYINI : KARANINI : YAĞMA[LARINI] : TOYU : TAPU : --- BEĞİM : TİGİN : YUKARIDAKİ : TANRI : --- TAŞ : BİTİDİM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _aGIŞIN BaRıMIN_)
    > ...Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin olmasaydı) annem hatun başta olmak üzere (diğer) annelerim, ablalarım, gelinlerim, prenseslerim, bunca hayatta kalanlar cariye olacak idi, ölenler (de) yazıda yabanda yata kalacak idiniz; (K 10) Kül Tigin olmasa (...
  - `Tekin 2003, s. 59` (eslesen: _aLTUNIN_)
    > ...em de uzak ünlü benzeşmeleri için örnekler vardır. 1. Orhon yazıtlarında 3. kişi iyelik eki /+(s)i/ art ünlülü sözcüklerde ünlü uyumuna girme eğilimi gösterir: - *agışın* "servetini" (KT GB) < **agış-in* - *bar(ı)mın* "malını mülkünü" (KT GB) < **barım-in* - *altunın* "altınlarını" (BK K 1) < *[altuni]n* (BK N 11) - *kaganın* "hakanını" (KT D 7) < *kagan-in* (KT D 35 vb.) - *kızın* "kızlarını" (BK K 10 vb.) < **kız-in* - *sabın* "sözlerini" (T 22, 58 < *sab-in* (KT G 9, BK K 14) - *taş(ı)n* "dışını" (T 13) < *taş-in* (KT...
  - `Ata 2011, s. 112` (eslesen: _aLTUNIN_)
    > ...limelere de +nIŋ olarak eklenmektedir. bayırku+nıŋ ak adgırıg KT D36 “Bayırkuların ak aygırını” 104 [s. 112] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27...
  - `Ata 2011, s. 105` (eslesen: _aLTUNIN_)
    > ...)I yagı+sı ‘düşmanı’ agı+sı ‘ipekli kumaşları’, altun+ı+n ‘altınlarını’, at+ı+n ‘adını’ oglıt+ı ‘oğulları’ kız+ı+n koduz+ı+n ‘kızlarını, kadınlarını’ Tablo 6.1: İyelik Ekleri [s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara...


## KT-GB-1#2 - Kül Tigin Yazıtı, Güneybatı 1. satir  (2 kelime)

- **transkripsiyon:** `YOLLuG : TİGiN`
- **kelime karsiliklari:** YOLLUĞ : TİGİN
- **kanit:**
  - `Tekin 1998, s. 8` (eslesen: _YOLLuG TİGiN_)
    > ...ları arasında, büyük bir olasılıkla da 720-725 yılları arasında yazılıp dikildiği sanılmaktadır. 3. [[s. 8]] Yazıtların Yazarı ve Yazıcısı Kül Tigin ve Bilge Kağan yazıtlarının yazıcısı, yani yazıları taş üzerine kazıyarak yazan kişi, bu iki kardeşin yeğeni Yolluğ Tigin'dir. Prens Yolluğ, Kül Tigin yazıtını yirmi günde, Bilge Kağan yazıtını da otuz dört günde yazmıştır. Bu iki yazıtın yazarına gelince, bu yazıtlarda konuşan ve olayları anlatan kişi Bilge Kağan'ın kendisi olduğuna göre [s. 9] 14 GİRİŞ bunların yazarı da o...
  - `Ergin 1970, s. 7` (eslesen: _YOLLuG TİGiN_)
    > ...kel parçaları arasında son zamanlarda Kül Tigin'in başı ile karısının gövdesi ve yüzünün bir kısmı da bulunmuştur. [[s. 7]] Âbidenin ve türbenin inşâsında Türk ve Çin sanatkârları beraber çalışmışlardır. Âbidedeki kitabeleri Bilge Kağan ve Kül Tigin'in yeğeni Yollug Tigin yazmıştır. Bilge Kağan âbidesi, aynı yerde Kül Tigin âbidesinin bir kilometre uzağındadır. Şekli, tertibi ve yapısı tamamiyle birincisine benzemektedir. Yalnız bu bir kaç santim daha yüksektir. Bu yüzden doğu cephesinde 41 ve dar cephelerinde de 15'er satır v...
  - `Tekin 2003, s. 259` (eslesen: _YOLLuG TİGiN_)
    > ...bir yeri geçmek - **yōk, yok** yok - **yokad-** yok olmak - **yok(k)aru, yokaru** yukarı - **yokla-** yükselmek, yukarı çıkmak (ölmek) (Ozn. I 6, Uybat III 3, 6) - **yol** yol - **yolagçı** öncü (?) (BK GD) - **yolı** kez, kere, defa - **Yollug** kişi adı (**Yollug Tigin**) - **yoluk-** yolda karşılaşmak (MÇ G 1, Elegest I 10) - **yoŋaşur-** karşılıklı iftira ettirmek - **yorı-** yürümek; ilerlemek, gelişmek; yaşamak - **yorıt-** yürütmek; ilerletmek, geliştirmek - **yubul-** yuvarlanmak - **yugur-** yoğurmak - **yulı-, yul-*...
  - `Ata 2011, s. 75` (eslesen: _YOLLuG TİGiN_)
    > ...de 13’er satır vardır. Bilge Kağan yazıtı, Köl Tigin yazıtından birkaç cm. daha yüksektir. Ancak bu yazıtta okunamaz durumda olan satırlar diğer yazıta göre çok daha fazladır. Her iki yazıtı taşlar üzerine kazıyarak yazan Köl Tigin’in atısı (yeğeni) Yolluğ Tigin’dir. 68 [s. 76] Resim 4. 5 Tonyukuk yazıtı, F. Klementz Tonyukuk Yazıtı tarafından 1897’de Moğolistan’da, Tola Kaynak: Cengiz Alyılmaz, Orhun ırmağı kenarında bulunmuşt...
  - `Ata 2011, s. 68` (eslesen: _YOLLuG TİGiN_)
    > ...de 13’er satır vardır. Bilge Kağan yazıtı, Köl Tigin yazıtından birkaç cm. daha yüksektir. Ancak bu yazıtta okunamaz durumda olan satırlar diğer yazıta göre çok daha fazladır. [[s. 68]] Her iki yazıtı taşlar üzerine kazıyarak yazan Köl Tigin’in atısı (yeğeni) Yolluğ Tigin’dir. [s. 69] Resim 4. 5 Tonyukuk Yazıtı Kaynak: Cengiz Alyılmaz, Orhun Yazıtlarının Bugünkü Durumu, Kurmay Yayınları, Ankara 2005, s.181’den. Resim 4. 6 ‘Tonyukuk Yazıtı’ndan detay Tonyukuk yazıtı, F. Klementz tarafından 1897’de Moğolistan’da, Tola ırmağı...
  - `Tanyeri, s. 4` (eslesen: _YOLLuG TİGiN_)
    > ...nistan'daki Demir Kapı'ya; Tibet'ten Sibirya'ya kadar uzanan geniş coğrafyada birçok kavim üzerine 20'den fazla akın düzenlemiş, Türk tarihinin en büyük kahramanlarından biridir. Bilge Kağan, 71 satırdan oluşan Kül Tigin Yazıtı'nı yeğeni Yollug Tigin'e yazdırmıştır. Olaylar Bilge Kağan tarafından anlatılmıştır. Kül Tigin âbidesi, kaplumbağa şeklindeki oyuk bir kaide taşına oturtulmuştur ve yazıt bu kaidenin yanına devrilmiş bir şekilde bulunmuştur. Özellikle devrik vaziy...


## KT-B-1#1 - Kül Tigin Yazıtı, Batı 1. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `KORuDuNuG --- İNiM : KÖLTİGiN : ÖLTİ ---`
- **kelime karsiliklari:** KORUDUĞUNDAN --- İNİM : KÜLTİĞİN : ÖLDÜ ---
- **kanit:**
  - `Ata 2011, s. 40` (eslesen: _KÖLTİGiN_)
    > ...ili kimliğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni Tü...
  - `Ata 2011, s. 33` (eslesen: _KÖLTİGiN_)
    > ...liğini kazanmış en eski ve en önemli dilidir. Türk dilinin tarihlendirilmiş en eski yazıtı, VII. [[s. 33]] yy’a ait Çoyren (Çoyr, 688-692) yazıtı olsa da Türk dilinin en az tahribata uğrayan, en uzun ve en fazla anlaşılabilen ilk yazıtları Orhun yazıtlarıdır (Költigin, Bilge Kagan, Tonyukuk). Dilimizin ve tarihimizin en önemli belgeleri ise Orhun yazıtlarıdır. [[s. 33]] Türk dilinin dönemlendirilmesindeki kronolojik sıralama şöyledir: Ana Altayca → İlk Türkçe → Ana Türkçe ve Ana Çuvaşça → Eski Türkçe → Orta Türkçe → Yeni T...


## KT-B-1#2 - Kül Tigin Yazıtı, Batı 1. satir  (11 kelime)

- **transkripsiyon:** `İŞiG : KÜÇüG : BİRTÜK : ÜÇüN : TÜRK : BİLGE : KaGaN : aYUKIKA : İNiM : KÖLTİGiNiG : KÖZeDÜ`
- **kelime karsiliklari:** İŞİ : GÜCÜ : VERDİĞİ : İÇİN : TÜRK : BİLGE : KAĞANIN : AYUĞU [GEÇER-OLDU] : KARDEŞİM : KÜLTİĞİNİ : GÖZETE[REK]
- **kanit:**
  - `Tekin 1998, s. 29` (eslesen: _İŞiG KÜÇüG BİRTÜK ÜÇüN_)
    > ...ını, gümüşlerini, servetini, malını [s. 29] 54 KÜLTİGİN YAZITI törlt bıfiğ) yılkfıslın ayağma Tuygut bü (sucu | beğim tiğin yüğerü Tefiğri bolça |...........ee ) taş bitidim. Yolluğ Tigin bitidimiz. (B) Kurdın (SlJoğud örti. İnim. Kül Tigin Çene. öekrike | işiğ küçüğ birtük üçün, Türük Bilge Kağan laylukılüğla (2), inim Kül Tiginiğ küzedü olurtlum!. İnançu Apa Yargan Tarkan âtığ (bilrtim, Çanlı öğtürtlüm|. (Mermer Kaplumbağa Üzerindeki Yazıt) (1) (blodun ..... (2) (bleğler bodun K .... (3) Plyi Kül Tigin B. [[s. 29]] 0.5: (4) Isıl...
  - `Kafesoglu, s. 153` (eslesen: _BİLGE KaGaN aYUKIKA İNiM_)
    > ...nvanların sahipleri, sorumlulukları gereği, aynı zamanda toy üyeleri olduklarına göre (bk. yk. Devlet Meclisi-Toy), buyrukların toygunlar arasından seçildikleri düşünülebilir, nitekim buyruk olmayan toy üyeleri de vardır288. [[s. 153]] Kitabe, I, batı: "Tunik Bilge Kağan ayukıka inim Kül Tigmig küzedü olurtum" « "(Ben) Türk Bilge Kağan, Hükümet (dominion, realm)'e küçük kardeşim Kül-Tegin'i gözetici yaptım" (bk. T. Tekin, A. Grammar..., s. 238, 273, 306). 716 yılında bir ihtilâl hareketi sonucunda tahta çıkan Bilge, kardeşi Kül-Tegin'e or...
  - `Tekin 1998, s. 22` (eslesen: _İŞiG KÜÇüG BİRTÜK_)
    > ...iğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tu...
  - `Ata 2011, s. 177` (eslesen: _İŞiG KÜÇüG BİRTÜK_)
    > ...deki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bunca işl...
  - `Ata 2011, s. 170` (eslesen: _İŞiG KÜÇüG BİRTÜK_)
    > ...7. Kara kamag bodun ifadesindeki kara kamag sözcüğünün doğru anlamı aşağıdakilerden hangisidir? a. Avam tabaka b. Zenci c. Kara Kamag (halkı) d. Asil tabaka e. Devlet adamı 8. 9. ve 10. [[s. 170]] sorular aşağıdaki cümleye göre cevaplandırılacaktır. [Bunça işig küçüg birtükkerü sakınmatı türük bodunug ölüreyin urugsıratayın tir ermiş] 8. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangisidir? a. Bunca işi gücü verdiğini düşünmedi; Türk halkını öldüreyim, yok edeyim der imiş. b. Bunca işle güçle uğraştıktan sonra...


## KT-B-1#3 - Kül Tigin Yazıtı, Batı 1. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `OLuRT --- : INaNÇU : aPA : YaRGaN : TaRKaN : ATıG : BİRDiM : aNI : ÖGTüRTDiM`
- **kelime karsiliklari:** OTURT --- : [ONA] INANÇU : APA : YARGAN : TARKAN : ADINI : VERDİM : ONU : ÖĞDÜRTTÜM
- **kanit:**
  - `Tekin 1998, s. 29` (eslesen: _INaNÇU aPA YaRGaN TaRKaN_)
    > ...Tuygut bü (sucu | beğim tiğin yüğerü Tefiğri bolça |...........ee ) taş bitidim. Yolluğ Tigin bitidimiz. (B) Kurdın (SlJoğud örti. İnim. Kül Tigin Çene. öekrike | işiğ küçüğ birtük üçün, Türük Bilge Kağan laylukılüğla (2), inim Kül Tiginiğ küzedü olurtlum!. İnançu Apa Yargan Tarkan âtığ (bilrtim, Çanlı öğtürtlüm|. (Mermer Kaplumbağa Üzerindeki Yazıt) (1) (blodun ..... (2) (bleğler bodun K .... (3) Plyi Kül Tigin B. [[s. 29]] 0.5: (4) Isılğıtımın basdım. (5) Iklözüm ...... g giseşe (6) Tolürl ssmnnşer €7)' b TEN TT TM ORHON YAZITLARI...
  - `Ergin 1970, s. 22` (eslesen: _INaNÇU aPA YaRGaN TaRKaN_)
    > ....... Beyim prens yukarı gök..........taş yazdım. Yollug Tigin. Batı cephesi Batıdan Soğd baş kaldırdı. Küçük kardeşim Kül Tigin......... için, öle yite işi gücü verdiği için, Türk Bilge Kağanı, nezaret etmek üzere, küçük kardeşim Kül Tigini gözeterek oturdum, Inançu Apa Yargan Tarkan adını verdim. Onu övdürdüm. O R H U N Â B İ D E L E R İ [s. 23] BİLGE KAĞAN ÂBİDESİ Doğu cephesi Tanrı gibi Tanrı yaratmış Türk Bilge Kağanı sözüm: Babam Türk Bilge Kağanı.......... Sir, Dokuz Oğuz, İki Ediz çadırlı beyleri, milleti .......... Türk tanrısı...
  - `Tekin 2003, s. 257` (eslesen: _INaNÇU aPA YaRGaN TaRKaN_)
    > ...k, yaratmak, düzenlemek - **yaratın-** kendini örgütlemek (BK D 9); bk. **yaratun-** - **yaratıt-** (yazıt) diktirmek (BK K 14) - **yaratun-** kendini örgütlemek (KT D 10); bk. **yaratın-** - **yarat(t)ur-** (yazıt) diktirtmek - **Yargan** yüksek bir unvan: **İnänçu Apa Yargan Tarkan** (KT B 2); **Buyla Kutlug Yargan** (Suci 2-3) - **yargun** bir tür geyik (IB 62) - **Yargun** yer adı (**Türgi Yargun Köl**) (KT D 34) - **yarık** zırh (KT D 33, vb.) - **yarıklıg** zırhlı - **yarıl-** yarılmak (IB 6) - **yarın** sabahleyin (IB 22, 40) - **Y...
  - `Kafesoglu, s. 153` (eslesen: _INaNÇU aPA YaRGaN TaRKaN_)
    > ...ve diplomasiden anlayan kişi..". Ancak 11. asır Kara-Hanlı devletinde bu bakımdan bazı görev ayrılıkları da meydana gelmiş görünüyor (bk. beyit, 4140-4142). [[s. 153]] Kitabede yukarıdaki cümlenin -bir satırlık okunamayan kısmından sonra yer alan- devamında "İnançu apa yargan tarkan" unvanları zikredilir ki, bunları Kül-Tegin'e bağlamak doğru değildir (Gök-Türk prensleri ancak hakan, han, yabgu, şad olabilirlerdi). [[s. 153]] Sayılan unvanlar ise yüksek devlet memurlarına mahsus olup, burada Tonyukuk'u göstermesi ihtimal içindedir, zira...


## BK-D-1#1 - Bilge Kağan Yazıtı, Doğu 1. satir  (4 kelime)

- **transkripsiyon:** `TeŊRİ : TeG : TeŊRİ : YaRaTMıŞ`
- **kelime karsiliklari:** TANRI : DEK : TANRI : YARATMIŞ
- **kanit:**
  - `Tekin 1998, s. 15` (eslesen: _TeŊRİ TeG TeŊRİ YaRaTMıŞ_)
    > ...a”, YULG BALI (yolluğ) “Yolluğ” vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince yazıt iyi durumda oldu...
  - `Olmez 2017, s. 102` (eslesen: _TeŊRİ TeG TeŊRİ YaRaTMıŞ_)
    > ...ğu yüzünde 41, güney yüzünde 15 satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük :...
  - `Ogel C2, s. 90` (eslesen: _TeŊRİ TeG TeŊRİ_)
    > ...den yücesin! Kimse bilmez nicesin!*” Bizce bu eöz, Türk düşüncesinde *“*“v âcibül-Vücüd”'”' anlayışının, başka bir anlatışı olsa gerektir. Eski Türklerde, Tanrı'nın vücudu için, “vâcib ül-vücüd” anlayışı var mıydı? [[s. 90]] W.Thomsen'in de yorumuna uyarak, ““Tengri teg Tengri” sözü, Göktürk yazıtlarında, “göğe veya kendine benzer Tanrı ””'inanışının bir ifadesi olmalıydı. 9) Babanın oğlundan canını esirgemesi: Bilindiği üzere, Azrail Deli Dumrul'dan canını istemesi üzerine, babası ile annesine gider ve kendisi yerine, onların can...


## BK-D-1#2 - Bilge Kağan Yazıtı, Doğu 1. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `TÜRK : BİLGE : KaGaN : SaBıM : KaŊıM : TÜRK : BİLGE : --- NDA : aL --- TI`
- **kelime karsiliklari:** TÜRK : BİLGE : KAĞAN[I]; : SAVIM : BABAM : TÜRK : BİLGE : --- NDA : AL --- TI
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _BİLGE KaGaN SaBıM KaŊıM_)
    > ...müş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tarduş beğler, Kül Çor başlayu ulayu Şadapıt ORHON YAZITLARI 79 kadınlarını yok ettim TET TE (G 5) yürüyüp [[s. 41]] VKDRr SUR SERER Tr ME SARAN Taşan Dae Gelme KART 1 ON KG (G 6) SAVAŞİÜM se .trsemn —...
  - `Tekin 1998, s. 48` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...kıllı olduğu için, (G 5) cesur olduğu için, Çinlilerle on yedi (kez) savaştı, Kıtay'larla yedi (kez) savaştı, Oğuz'larla (da) beş (kez) savaştı. Bu sırada sözcüsü (G 6) de ben idim, düşmanla savaşanı da ben idim. [[s. 48]] İlteriş Kağan'a, Türk Bögü Kağan'a, Türk Bilge Kağan'a (D 1) Kapgan Kağan yirmi (yedi yaşında?) ........... idi. (Onu ben) Kapgan Kağan (olarak) tahta oturttum. Geceleri uyumadan, (D 2) gündüzleri oturmadan, kızıl kanımı akıtarak, kara terimi döktürerek hizmet ettim. Uzak mesafelere keşif devriyeleri gön- derdi...
  - `Ergin 1970, s. 12` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...kamlar, âbidelerdeki asıl metnin satır numaralarıdır. Ortaya gelen satır başları dik çizgilerle gösterilmiştir. Noktalı yerler, metindeki eksik yerleri göstermektedir. M U H A R R E M E R G İ N [s. 12] KÜL TİGİN ÂBİDESİ Güney cephesi Tanrı gibi gökte olmuş Türk Bilge Kağanı, bu zamanda oturdum. Sözümü tamamiyle işit. Bilhassa küçük kardeş yeğenim, oğlum, bütün soyum, milletim, güneydeki şadpıt beyleri, kuzeydeki tarkat, buyruk beyleri, Otuz Tatar...... | Dokuz Oğuz beyleri, milleti! Bu sözümü iyice işit, adamakıllı dinle: Doğud...
  - `Ata 2011, s. 150` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...PSİYONLU METİN TÜRKİYE TÜRKÇESİNE G1 AKTARMA Tanrı gibi gökte olmuş (yaratılmış) t(e)ŋri t(e)g t(e)ŋride bolm(ı)ş türük̮ Türk Bilge Kağan, bu zamanda bilge k(a)g(a)n bu ödke ol(u)rt(u)m sab(ı)m(ı)n tük(e)ti (e)şidg(i)l ul(a)yu oturdum (tahta çıktım). Sözlerimi in(i)ygün(ü)m ogl(a)n(ı)m bir(i)ki tamamıyla işit. Ve erkek kardeşim, ug(u)ş(u)m bod(u)n(u)m bir(i)ye oğu...
  - `Olmez 2017, s. 78` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...*G 1. teȳri teg : teȳride : bolmuš : tür²ük : bilge² kağan : bo üdke : olortum²* *savımın : tüketi : ešidgil : ulayı : iniygünüüm² oglanım² birki² ugušum²* *bodunum² bėriye² şadapıt begler : yurya² tarkat² buyruk : begler² otuz //////* "İlahî göğün yarattığı Türk Bilge Kağan, bu devirde tahta çıktım. Sözlerimin tamamını dinleyin, özellikle küçük erkek kardeşlerim, çocuklarım, birleşik soyum, halkım, güneyde Şadlar, kuzeyde tarkanlar, beyler, komutanlar, Otuz [Tatar halkı ... ... ...]" **teȳri teg** "İlahi" - teg: "gibi" anlamı k...
  - `Ata 2011, s. 143` (eslesen: _TÜRK BİLGE KaGaN_)
    > ...b(ı)m(i)n (e)dgüti (e)şid k(a)t(ı)gdı tıŋla ilg(e)rü kün tugs(ı)k(k)a bir(i)g(e)rü kün ortusıŋ(a)ru k͡uurıg(a)ru kün b(a)tsı͡kıŋa yır(ı)g(a)ru tün ortusıŋ(a)ru (a)n͡ta içr(e)ki bod(u)n k͡oo[p] m[aŋ]a kör[ür (a)n͡ç]a bod(u)n Tanrı gibi gökte olmuş (yaratılmış) Türk Bilge Kağan, bu zamanda oturdum (tahta çıktım). Sözlerimi tamamıyla işit. [[s. 143]] Ve erkek kardeşim, oğullarım, birleşik boyum (soyumsopum), halkım güneyde Şadapıt beyler, kuzeyde Tarkanlar, kumandan beyler, Otuz (Tatar ……………… Dokuz Oğuz beyleri ve halkı, bu sözlerim...


## BK-D-1#3 - Bilge Kağan Yazıtı, Doğu 1. satir  (11 kelime, TAS KIRIGI)

- **transkripsiyon:** `SİR : TOKuZ : OGuZ : eYİ : eDiZ : KeReKÜLüG : BeGLeRİ : BODuNI : --- : TÜRK : TeŊRİ ---`
- **kelime karsiliklari:** SİR : DOKUZ : OĞUZ : EYİ : EDİZ : ÇADIRLI : BEĞLERİ : BOYLARI : --- : TÜRK : TANRI[SI] ---
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _eDiZ KeReKÜLüG BeGLeRİ BODuNI_)
    > ............01nanı hâkkettirdim (ve) yazdırttım. Bunu görün (ve) öylece öğrenin. (O) taş tapınağını [s. 33] 62 BİLGE KAĞAN YAZITI (D 1) Teügğri teğ, Tengri yaratmış, Türük Bilge Kağan sabım: (Klangğım Türük Bilgle Kağan ........... Al|tı Sir, Tokuz Oğuz, Eki Ediz kerekülüğ beğleri bodunı |.......Tüjrük T(efglri bene |) (D2) üze kağan olurtum. Olurtukuma, ölteçiçe sakınığma Türük beğler bodun (ölgirip sebinip tofngıtmış közi yüğerü körti. Bödke özüm olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntuk...
  - `Olmez 2017, s. 102` (eslesen: _SİR TOKuZ OGuZ_)
    > ...kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır...
  - `Kafesoglu, s. 58` (eslesen: _SİR TOKuZ OGuZ_)
    > ...Hazar'lar (aş. bk.), Ogur'lar (aş. bk.), Peçenek'ler (aş. bk.) ve ihtimal Kıpçak-Kuman'lar (aş. bk.)vb. 7. Kırgız'lar. Baykal'm batısında, Yenisey nehrinin kaynakları bölgesinde idiler (aş. bk.). Burada Sir-tarduş olarak geçen ve Bilge kitâbesindeki (1 defa) "Sir Tokuz-Oğuz" ve Tonyukuk kitabesinde Türk Sir bodun" şeklinde (5 defa) kullanılan Sir (veya sır/=sıra/, şir?) [[s. 58]] deyimi (şimdiye kadar verilen çeşitli mânalar: iyi, astt, batı, sülâle, birUşik) arasında en isabetlisi "birleşik" olsa gerektir. Bu mâna devlet yapısı...


## BK-D-2#1 - Bilge Kağan Yazıtı, Doğu 2. satir  (3 kelime)

- **transkripsiyon:** `ÜZE : KaGaN : OLuRTuM`
- **kelime karsiliklari:** ÜZE[RİNE] : KAĞAN : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _ÜZE KaGaN OLuRTuM_)
    > ...ce öğrenin. (O) taş tapınağını [s. 33] 62 BİLGE KAĞAN YAZITI (D 1) Teügğri teğ, Tengri yaratmış, Türük Bilge Kağan sabım: (Klangğım Türük Bilgle Kağan ........... Al|tı Sir, Tokuz Oğuz, Eki Ediz kerekülüğ beğleri bodunı |.......Tüjrük T(efglri bene |) (D2) üze kağan olurtum. Olurtukuma, ölteçiçe sakınığma Türük beğler bodun (ölgirip sebinip tofngıtmış közi yüğerü körti. Bödke özüm olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntukda, ekin ara kişi oğlı kılınmış). [[s. 33]] (D 3) Kişi...
  - `Olmez 2017, s. 102` (eslesen: _ÜZE KaGaN_)
    > ...5'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır törög : tört : buluŋdakı ....................dim : üze : kök teŋri asra yagız yėr kılıntokda ėkin a...
  - `Tekin 1998, s. 20` (eslesen: _KaGaN OLuRTuM_)
    > ...Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G...
  - `Ata 2011, s. 161` (eslesen: _ÜZE KaGaN_)
    > ...irür m(e)n tir (e)rm(i)ş (a)n͡ça tip t(a)bg(a)ç k(a)g(a)nka y(a)gı bolm(ı)ş y(a)gı bol(u)p it(i)nü y(a)r(a)t(ı)nu um(a)du͡k y(a)na i͡ç(i)km(i)ş bun͡ça iş(i)g küç(ü)g birtü͡k(ke)rü s(a)k(ı)nm(a)tı türü͡k bod(u)n(u)g öl(ü)r[eyin urugsır](a)t(a)yin tir (e)rm(i)ş üze “Kağanlı millet idim, kağanım hani? [[s. 161]] Hangi kağana işi gücü veriyorum (hizmet ediyorum)?” dermiş. Böyle deyip Çin kağanına düşman olmuş, düşman olup kendini düzene sokup örgütlenememiş, yine (Çinlilere) bağımlı olmuş.(Çin halkı) bunca işi gücü vermesini (hi...
  - `Tekin 1998, s. 19` (eslesen: _OLuRTuM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _OLuRTuM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...


## BK-D-2#2 - Bilge Kağan Yazıtı, Doğu 2. satir  (9 kelime)

- **transkripsiyon:** `OLuRTUKuMA : ÖLTeÇİÇE : SaKıNıGMA : TÜRK : BeGLeR : BODuN : öGüRüP : SeBiNiP : TOŊTaMıŞ`
- **kelime karsiliklari:** OTURDUĞUMDA : ÖLECEĞİNİ : SAKINAN : TÜRK : BEĞLERİ : BOYLARI : ÖĞÜRÜP : SEVİNİP : TONGTAMIŞ
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _OLuRTUKuMA ÖLTeÇİÇE SaKıNıGMA_)
    > ...tapınağını [s. 33] 62 BİLGE KAĞAN YAZITI (D 1) Teügğri teğ, Tengri yaratmış, Türük Bilge Kağan sabım: (Klangğım Türük Bilgle Kağan ........... Al|tı Sir, Tokuz Oğuz, Eki Ediz kerekülüğ beğleri bodunı |.......Tüjrük T(efglri bene |) (D2) üze kağan olurtum. Olurtukuma, ölteçiçe sakınığma Türük beğler bodun (ölgirip sebinip tofngıtmış közi yüğerü körti. Bödke özüm olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntukda, ekin ara kişi oğlı kılınmış). [[s. 33]] (D 3) Kişi oğlınta üze eçüm apam Bumın Kağan...
  - `Olmez 2017, s. 102` (eslesen: _ÖLTeÇİÇE SaKıNıGMA_)
    > ...1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır törög : tört : buluŋdakı ....................dim : üze : kök teŋri asra yagız yėr kılıntokda ėkin ara kişi oglı kılınmış* "(D 1) İlahî göğün yar...
  - `Tekin 1998, s. 20` (eslesen: _BeGLeR BODuN_)
    > .... Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZ...
  - `Ata 2011, s. 139` (eslesen: _BeGLeR BODuN_)
    > ...yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “pek çok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o...
  - `Olmez 2017, s. 58` (eslesen: _BeGLeR BODuN_)
    > ...lge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinleyin" (KT G 10) ### Zarffiil ekleri: **-A, -I, -U ünlüleri (günümüz Türkçesine benzer şekilde) zarffiil eki olarak kullanılırlar:** **-A :** *ıya basıp olortı* "basıp hüküm sürdü" (Tes D 6); *teŋri tuta bėrti*...
  - `Ata 2011, s. 132` (eslesen: _BeGLeR BODuN_)
    > ...gelecek zaman sıfat-fiil eki, eylem sıfatı yapar ve eylemi yapanı gösterir: öl-teçi bodunug tirgürü igittim “ölecek (olan) halkı diriltip doyurdum” KT D29 üküş öl-teçi anta tirildi “pek çok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip ge...


## BK-D-2#3 - Bilge Kağan Yazıtı, Doğu 2. satir  (12 kelime, TAS KIRIGI)

- **transkripsiyon:** `KÖZİ : YÜGeRiKÖRTİ : BÖDKE : ÖZüM : OLıRıP : BUNÇA : aGıR : TÖRüG : TÖRT : BOLuŊDaKI : --- : İTDiM`
- **kelime karsiliklari:** GÖZÜ : YUKARI GÖRDÜ : [BU] DEVİRDE : ÖZÜM : [KAGAN] OTURUP : BUNCA : AĞIR : TÖREYİ : DÖRT : TARAFDAKI : [BOYLARI] --- : [DÜZEN] ETDİM
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _BUNÇA aGıR TÖRüG TÖRT_)
    > ...Türük Bilgle Kağan ........... Al|tı Sir, Tokuz Oğuz, Eki Ediz kerekülüğ beğleri bodunı |.......Tüjrük T(efglri bene |) (D2) üze kağan olurtum. Olurtukuma, ölteçiçe sakınığma Türük beğler bodun (ölgirip sebinip tofngıtmış közi yüğerü körti. Bödke özüm olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntukda, ekin ara kişi oğlı kılınmış). [[s. 33]] (D 3) Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük (bloduniüğ ilin törüsin tuta birmiş, iti birmiş. Tört bulung kop y...
  - `Olmez 2017, s. 102` (eslesen: _BÖDKE ÖZüM_)
    > ............... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük : begler : bodun : ögirip : sevinip : toŋıtmış : közi : yügerü körti : bödke : özüm olorup : bonça : agır törög : tört : buluŋdakı ....................dim : üze : kök teŋri asra yagız yėr kılıntokda ėkin ara kişi oglı kılınmış* "(D 1) İlahî göğün yarattığı Türk Bilge Kağan, sözüm: babam Türk Bilge Kağan ... ... Altı Sir, Tokuz Oğuz, keçe (?...
  - `Ergin 1970, s. 23` (eslesen: _BUNÇA aGıR_)
    > ...anı.......... Sir, Dokuz Oğuz, İki Ediz çadırlı beyleri, milleti .......... Türk tanrısı.......... | üzerine kağan oturdum. Oturduğumda ölecek gibi düşünen Türk beyleri, milleti memnun olup sevinip, yere dikilmiş gözü yukarı baktı. Bu zamanda kendim oturup bunca ağır töreyi dört taraftaki.......... dim. [[s. 23]] Üstte mavi gök, altta yağız yer kılındıkta, iki si arasında insan oğlu kılınmış. | İnsan oğlunun üzerine ecdadım Bumin Kağan, İstemi Kağan oturmuş. Oturarak Türk milletinin ilini, töresini tutu vermiş, düzene sok...
  - `Tekin 2003, s. 108` (eslesen: _BUNÇA aGıR_)
    > ...ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti* "(Babam Hakan için bunca) ağır taşları ve kalın ağaçları Türk beyleri ve halkı... [getir]di" (BK G 15) *[sıŋ]ar süsi äb+ig bark+ıg yulgalı bardı* "Yarı ordusu (da bizim) evimizi barkımızı yağmalamak için gitti" (BK D 32) *az totok+ug äligin tutdı* "(Prens Kül) Az'ların askeri valisini eliy...


## BK-D-2#4 - Bilge Kağan Yazıtı, Doğu 2. satir  (12 kelime)

- **transkripsiyon:** `ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ`
- **kelime karsiliklari:** ÜSTTE : GÖK : TANRI : ALTTA : YAĞIZ : YER : KILINDIĞINDA : İKİ[Sİ] : ARA[SINDA] : KİŞİ : OĞLU : KILINMIŞ
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


## BK-D-3#1 - Bilge Kağan Yazıtı, Doğu 3. satir  (10 kelime)

- **transkripsiyon:** `KİŞİ : OGLINDA : ÜZE : eÇÜM : aPAM : BUMıN : KaGaN : İSTeMİ : KaGaN : OLuRMıŞ`
- **kelime karsiliklari:** KİŞİ : OĞLUN[UN] DA : ÜZE[RİNE] : EÇÜM : APAM : BUMIN : KAĞAN : İSTEMİ : KAĞAN : OTURMUŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _ÜZE eÇÜM aPAM BUMıN_)
    > ...te irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan y...
  - `Ata 2011, s. 47` (eslesen: _ÜZE eÇÜM aPAM BUMıN_)
    > ...Köl Tigin Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıl...
  - `Olmez 2017, s. 56` (eslesen: _ÜZE eÇÜM aPAM BUMıN_)
    > ...atdımız* "Ülkesi olanı ülkesiz, hakanı olanı hakansız bıraktık." (KT D 18); *temir kapıgka tegi ertimiz anta yanturtumuz* "Temir Kapıg'a kadar ulaştık. (Orduyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T...
  - `Ata 2011, s. 40` (eslesen: _ÜZE eÇÜM aPAM BUMıN_)
    > ...Tigin Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. [[s. 40]] satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yar...
  - `Ogel C1, s. 290` (eslesen: _ÜZE eÇÜM aPAM BUMıN_)
    > ...tılışı ile ilgili bölümümüzde de durmuştuk. [[s. 290]] Fakat bu metin öyle önemli bir metindir ki, bir çok meselelerde ancak onun tuttuğu ışıkla doğru yolda yürüyebiliriz : “Üze Kök Tengri, asra yağız yer kılındukda, ikin ara kişi oğlı kılınmış. Kişi oğlunda üze, eçüm apam Bumın Kağan, İstemi Kağan olurmış”. Yani, “Yukarıdaki mavi gök, aşağıdaki yağız yer yaratıldığında, ikisi arasında kişi oğlu, yani insanlar yaratılmış. Kişi oğlunun üzerine de büyük amcalarım Bumın Kağan ve İstemi Kağan (hükümdar) olarak tahta çıkmış.” [[s. 290]]...


## BK-D-3#2 - Bilge Kağan Yazıtı, Doğu 3. satir  (3 kelime)

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


## BK-D-3#3 - Bilge Kağan Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `İLİN : TÖRÜSÜN : TUTA : BİRMiŞ`
- **kelime karsiliklari:** İLİNİ : TÖRESİNİ : TUTU : VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TUTA BİRMiŞ_)
    > ...] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük...
  - `Tekin 2003, s. 220` (eslesen: _TUTA BİRMiŞ_)
    > ...sılı sayfa numarası 221) # Bilge Kagan Yazıtı (735) ## Doğu Yüzünden (D 2).... Üzä kök täŋri, as[ra yagız yer kılıntokda ekin ara kişi oglı kılınmış]. (D 3) Kişi oglınta üzä äçüm apam İştämi Kagan, Bumın Kagan olormış. Olorupan Türük [b]odunıŋ ilin törösin tuta birmiş, iti birmiş. Tört buluŋ kop yagı ärmiş. Sü süläpän tört buluŋdakı bodunug kop almış, kop baz kılmış. Başlıgıg yüküntürmiş, tizligig sökürmiş. İlgärü Kadırkan yışka tägi, kirü (D 4) Tämir Kapıgka tägi konturmiş. Ekin ara idi oksuz Kök Türük iti ança olorur är...
  - `Ata 2011, s. 47` (eslesen: _TUTA BİRMiŞ_)
    > ...n itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde...
  - `Ata 2011, s. 40` (eslesen: _TUTA BİRMiŞ_)
    > ...rından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzeri...
  - `Tanyeri, s. 19` (eslesen: _TUTA BİRMiŞ_)
    > ...(cariye olmak), “baz kıl-” (tâbi kılmak) 2. “Fiil + zarf fiil eki + tasvir fiili”: - “Fiil + -A~-I/-U + bir-”: Kesinlik bildirir. “Ver-” tasvir fiili Türkiye Türkçesinde tezlik bildirir. Göktürkçede tezlik değil, kesinlik bildirir: “Tuta birmiş” (tutmuştur), “alı birmiş” (almış) - “Fiil + -I/-U + u-”: Yeterlik bildirir: “kim artatı udaçı erti” (kim bozabilecek idi), “itini yaratunu umaduk yana içikmiş” (teşkilâtlanmadığı için tekrar tâbi olmuş) - “Fiil + -U + ıd-”:...
  - `Tekin 1998, s. 23` (eslesen: _TÖRÜSÜN_)
    > ...ş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı...


## BK-D-3#4 - Bilge Kağan Yazıtı, Doğu 3. satir  (4 kelime)

- **transkripsiyon:** `İTİ : BİRMiŞ : TÖRT : BULıŊ`
- **kelime karsiliklari:** [DÜZEN] EDİ : VERMİŞ : DÖRT : TARAF
- **kanit:**
  - `Tekin 1998, s. 33` (eslesen: _İTİ BİRMiŞ TÖRT_)
    > ...olurup bunça ağır törüğ tört bulunğdaki Tessa |Jdim. Üze kök tefiğri aslra yağız yer kılıntukda, ekin ara kişi oğlı kılınmış). [[s. 33]] (D 3) Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük (bloduniüğ ilin törüsin tuta birmiş, iti birmiş. Tört bulung kop yağı ermiş. Sü sülepen, tört bulufüğdakı bodunuğ (kop almış, kop baz kılmış). Başlığığ (yülküntürmiş, tizliğliğ sökürmiş. İlgerü Kadırkan yışka teği, kirü) (D 4) Temir Kapığka teği konturmış. Ekin ara, idi oksuz Kök Türük iti ança olurur ermiş. [[s...
  - `Tekin 2003, s. 220` (eslesen: _İTİ BİRMiŞ TÖRT_)
    > ...marası 221) # Bilge Kagan Yazıtı (735) ## Doğu Yüzünden (D 2).... Üzä kök täŋri, as[ra yagız yer kılıntokda ekin ara kişi oglı kılınmış]. (D 3) Kişi oglınta üzä äçüm apam İştämi Kagan, Bumın Kagan olormış. Olorupan Türük [b]odunıŋ ilin törösin tuta birmiş, iti birmiş. Tört buluŋ kop yagı ärmiş. Sü süläpän tört buluŋdakı bodunug kop almış, kop baz kılmış. Başlıgıg yüküntürmiş, tizligig sökürmiş. İlgärü Kadırkan yışka tägi, kirü (D 4) Tämir Kapıgka tägi konturmiş. Ekin ara idi oksuz Kök Türük iti ança olorur ärmiş. Bilgä kagan är...
  - `Ata 2011, s. 47` (eslesen: _İTİ BİRMiŞ TÖRT_)
    > ...öktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedeler...
  - `Ata 2011, s. 40` (eslesen: _İTİ BİRMiŞ TÖRT_)
    > ...ren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım ded...


## BK-D-3#5 - Bilge Kağan Yazıtı, Doğu 3. satir  (3 kelime)

- **transkripsiyon:** `KOP : YaGI : eRMiŞ`
- **kelime karsiliklari:** HEP : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _KOP YaGI eRMiŞ_)
    > ...ğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş,...
  - `Ata 2011, s. 47` (eslesen: _KOP YaGI eRMiŞ_)
    > ...urulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İ...
  - `Olmez 2017, s. 56` (eslesen: _KOP YaGI eRMiŞ_)
    > ...duyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygur kanım tutulmış* "Uygur hanım tutulmuş" (Tes B 4) **Gelecek zaman *-DAçI* ekiyle kurulur:** Gelecek zamanın az sayıda örnekte, özellikl...
  - `Ata 2011, s. 40` (eslesen: _KOP YaGI eRMiŞ_)
    > ...nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (v...


## BK-D-3#6 - Bilge Kağan Yazıtı, Doğu 3. satir  (7 kelime)

- **transkripsiyon:** `SÜ : SÜLePeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ`
- **kelime karsiliklari:** SÜ : SÜLEYİP : DÖRT : TARAFDAKİ : BOYLARI : HEP : ALMIŞ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _SÜ SÜLePeN TÖRT_)
    > ...Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; b...
  - `Ata 2011, s. 47` (eslesen: _SÜ SÜLePeN TÖRT_)
    > ...Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan taht...
  - `Olmez 2017, s. 103` (eslesen: _SÜ SÜLePeN TÖRT_)
    > ........." ve satır içinde "......" ile gösterilen bozuk/eksik bölümler var) *D 3. kişi : oglınta : üze : eçüm apam : bumin kagan : iśtemi kagan : olormış : olorupan : tür̂k bodunıŋ : ėlin : törösün : tuta bėrmiş : èti bėrmiş : tört : buluŋ : kop : yağı ermiş : sǖ sülepen : tört buluŋdaki : bodunug kop almış : kop baz kılmış başlıgıŋ yüküntürmiş : tizligig : sökürmiş : ilgerū : kaḍırkan : yışka tegi : kėrü* "İnsanoğullarının da üzerine atam, dedem Bumin Kağan, İstemi Kağan tahta çıkmışlar. Tahta çıktıktan sonra Türk halkının ülkesin...
  - `Ata 2011, s. 40` (eslesen: _SÜ SÜLePeN TÖRT_)
    > ...Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan...


## BK-D-3#7 - Bilge Kağan Yazıtı, Doğu 3. satir  (3 kelime)

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
