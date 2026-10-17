# Ceviri istek paketi 21 - Orhun cumlecikleri

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


## BK-D-25#5 - Bilge Kağan Yazıtı, Doğu 25. satir  (7 kelime)

- **transkripsiyon:** `YiGiRMİ : YaŞıMA : BaSMıL : IDıKUT : OGuŞuM : BODuN : eRTİ`
- **kelime karsiliklari:** YİRMİ : YAŞIMDA : BASMIL : IDIKUT : OĞUŞUM : BOYUM : İDİ
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _YaŞıMA BaSMıL_)
    > ...pa süledim. Tangut bodunuğ buzdum. Oğlun, yultuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı...
  - `Tekin 1998, s. 22` (eslesen: _BODuN eRTİ_)
    > ...tupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ bi...
  - `Ata 2011, s. 119` (eslesen: _BODuN eRTİ_)
    > ...a doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç dur...
  - `Olmez 2017, s. 22` (eslesen: _BODuN eRTİ_)
    > ...-5). Çin yönetimi boyunduruğu altına aldığı Türkleri kullanarak Mançurya, Moğolistan ve İpek Yolu bölgesinde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir ha...
  - `Ata 2011, s. 112` (eslesen: _BODuN eRTİ_)
    > ...“ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39 ol yıl küzün ilgerü yorıdım “o yıl güzün doğuya doğru yürüdüm” Moyın Çor 8 [[s. 112]] illig bodun ertim ilim amtı kanı “devleti olan halk idim, devletim şimdi nerede?” KT D9 Tarz Zarfları Orhun Türkçesinde +çA eşitlik durumu ekini almış ança ‘öyle, öylece’, +DI ekini almış edgüti ‘iyice’, katıgdı ‘iyice, sıkıca’, yegdi ‘daha iyi’ ve +(X)n araç durum ekini alm...
  - `Tekin 1998, s. 28` (eslesen: _YiGiRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...


## BK-D-25#6 - Bilge Kağan Yazıtı, Doğu 25. satir  (4 kelime)

- **transkripsiyon:** `aRKıŞ : IDMaZ : TİYiN : SÜLeDiM`
- **kelime karsiliklari:** ARKIŞ : İDMEZ : DİYE : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _aRKıŞ IDMaZ TİYiN SÜLeDiM_)
    > ...ltuzlın, yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keç...
  - `Ata 2011, s. 123` (eslesen: _aRKıŞ IDMaZ TİYiN SÜLeDiM_)
    > ...me ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 115 [s. 123] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer et...
  - `Ata 2011, s. 116` (eslesen: _aRKıŞ IDMaZ TİYiN SÜLeDiM_)
    > ...ndanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT D3 [s. 116] Yan Cümle Bağlaçları (tiyin, tip) tiyin: arkış ıdmaz tiyin süledim “kervan göndermiyor diye sefer ettim” BK D25 bodunug igideyin tiyin … ulug sü eki yegirmi süledim “halkı doyurayım diye … büyük ordularla on iki kez sefer ettim” KT D28 tip: anı ayıtayın tip süledim “onu sorayım diye sefer ettim” BK D41 EDAT Pekiştirme Edat...


## BK-D-25#7 - Bilge Kağan Yazıtı, Doğu 25. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `K --- : --- T : İÇGeRTiM`
- **kelime karsiliklari:** K --- : --- T : İÇGERTTİM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _İÇGeRTiM_)
    > ...mi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğ...


## BK-D-25#8 - Bilge Kağan Yazıtı, Doğu 25. satir  (3 kelime)

- **transkripsiyon:** `KaLıŊıN : BiRÜ : KeLÜRTüM`
- **kelime karsiliklari:** KALINGINI : BERİ : GETİRDİM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _BiRÜ KeLÜRTüM_)
    > ...pa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım...
  - `Tekin 1998, s. 21` (eslesen: _KeLÜRTüM_)
    > ...) her ne sözüm var ise ebedi taşa hâkkettim. Ona bakarak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13)...
  - `Ata 2011, s. 113` (eslesen: _KeLÜRTüM_)
    > ...n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gi...
  - `Olmez 2017, s. 96` (eslesen: _KeLÜRTüM_)
    > ...sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anlayın. Şu anki Türk halkı, beyleri, halihazırdaki beyler, sizler mi yanılacaksınız? Ben bengi taş diktim. Çin hakanından sanatçı getirtti...
  - `Ata 2011, s. 106` (eslesen: _KeLÜRTüM_)
    > ...tif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. [[s. 106]] Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga g...
  - `Tanyeri, s. 13` (eslesen: _KeLÜRTüM_)
    > ...Ü” harfi “ük” sesini karşıladığı için, yeniden “ü” harfini kullanmaya gerek kalmamıştır. “QLB” (balık) örneğinde de bu kullanımı görebiliriz. 5. İlk hecenin düz ünlüsünden sonra gelen yuvarlak ünlüler, genellikle gösterilir. “NuTL“ (altun) ve “mtrülk” (kelürtüm) sözcüklerinde “a” ve “e” düz ünlülerinden sonra gelen “u” ve “ü” yuvarlak ünlülerinin gösterildiğini görebiliriz. 6. İlk hecedeki yuvarlak ünlülerden sonra gelen düz ünlüler de genellikle gösterilir. “ıTıLGo“ (oglıtı) ve “giçüs” (süçig) sözcüklerinde...


## BK-D-25#9 - Bilge Kağan Yazıtı, Doğu 25. satir  (4 kelime)

- **transkripsiyon:** `iKİ : OTuZ : YaŞIMA : TaBGaÇ`
- **kelime karsiliklari:** İKİ : OTUZ : YAŞIMDA : TABGAÇ
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _OTuZ YaŞIMA TaBGaÇ_)
    > ...m. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37...
  - `Tekin 2003, s. 151` (eslesen: _OTuZ YaŞIMA TaBGaÇ_)
    > ...egirmi sülädim* "Kuzeyde Oğuz halkına doğru, doğuda Kıtany ve Tatabı halklarına doğru, günede (de) Çin'e doğru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *eki otuz yaşıma tabgaç tapa sülädim* "Yirmi iki yaşımda Çin'e doğru sefer ettim" (BK D 25-26) *ançıp bars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğ...
  - `Ata 2011, s. 121` (eslesen: _OTuZ YaŞIMA TaBGaÇ_)
    > ...n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören...
  - `Ata 2011, s. 114` (eslesen: _OTuZ YaŞIMA TaBGaÇ_)
    > ...ılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 [[s. 114]] yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören gözlerim görmez gibi, eren a...


## BK-D-26#1 - Bilge Kağan Yazıtı, Doğu 26. satir  (9 kelime)

- **transkripsiyon:** `TaPA : SÜLeDiM : ÇaÇA : SEŊÜN : SeKiZ : TÜMeN : SÜ : BİRLE : SÜŊüŞDüM`
- **kelime karsiliklari:** TARAFINA : SÜLEDİM : ÇAÇA : SENGÜN : SEKİZ : TÜMEN : SÜ : İLE : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _TaPA SÜLeDiM ÇaÇA SEŊÜN_)
    > ...tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin...
  - `Tekin 1998, s. 25` (eslesen: _TaPA SÜLeDiM_)
    > ...a törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng i...
  - `Ata 2011, s. 119` (eslesen: _TaPA SÜLeDiM_)
    > ...raç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39...
  - `Olmez 2017, s. 54` (eslesen: _TaPA SÜLeDiM_)
    > ..."Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *anta ötrü oguz kop+ın kelti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *ingek kölek+in toglada oguz kelti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birl...
  - `Ata 2011, s. 114` (eslesen: _SeKiZ TÜMeN_)
    > ...aş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigir...
  - `Tekin 1998, s. 27` (eslesen: _BİRLE SÜŊüŞDüM_)
    > ...inip oplayu teğdi. Altı eriğ sançdı. Sü |tlJeğişinte yitinç eriğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğir...


## BK-D-26#2 - Bilge Kağan Yazıtı, Doğu 26. satir  (3 kelime)

- **transkripsiyon:** `SÜSİN : aNDA : ÖLüRTüM`
- **kelime karsiliklari:** SÜSÜNÜ : [O] ANDA : ÖLDÜRDÜM
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _ÖLüRTüM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _ÖLüRTüM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...
  - `Ata 2011, s. 115` (eslesen: _ÖLüRTüM_)
    > ...ı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdü...
  - `Tekin 1998, s. 27` (eslesen: _SÜSİN_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sün...
  - `Tekin 2003, s. 132` (eslesen: _SÜSİN_)
    > ...anılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...
  - `Ata 2011, s. 108` (eslesen: _ÖLüRTüM_)
    > ...dir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta s...


## BK-D-26#3 - Bilge Kağan Yazıtı, Doğu 26. satir  (9 kelime)

- **transkripsiyon:** `aLTI : OTuZ : YaŞıMA : ÇİK : BODuN : KIRKıZ : BİRLE : YaGI : BOLTI`
- **kelime karsiliklari:** ALTI : OTUZ : YAŞIMDA : ÇİK : BOYLARI : KIRGIZ : İLE [BİRLEŞİP] : [BİZE] YAĞI : OLDU
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _aLTI OTuZ YaŞıMA ÇİK BODuN KIRKıZ BİRLE YaGI BOLTI_)
    > ...smıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin ile konuşup anlaştık: Babamızın (ve) (D 22) amcamızın kazanmış oldukları halkın adı sanı yok olmasın diye Tü...
  - `Tekin 2003, s. 150` (eslesen: _aLTI OTuZ YaŞıMA ÇİK_)
    > ...iki (sınır) arasında benim vadilerim ve tarlalarım (var)" (Tar. B 4) *kamış āra kalmiş* "(Bir cariye) kamışlar arasında kalmış" (IB 38) *busanç āra mäŋi kälmiş* "keder arasında mutluluk gelmiş" (IB 52), vb. **350.** *birlä* "ile, ile birlikte" < *\*bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı, Do...
  - `Tekin 1998, s. 26` (eslesen: _aLTI OTuZ_)
    > ...urtı, yüzlinğe) başıfğa bir ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki e...
  - `Tekin 2003, s. 129` (eslesen: _aLTI OTuZ_)
    > ...5), *biş yigirmi* "15" (MÇ D 6), *altı yegirmi* "16" (KT D 31), *yeti yegirmi* "17" (T 49), *säkiz yegirmi* "18" (KT D 32), *tokuz yegirmi* "19" (BK G 9), *bir otuz* "21" (KT D 32), *eki otuz* "22" (BK D 25), *üç otuz* "23" (T 19), *biş otuz* "25" (KT D 18), *altı otuz* "26" (BK D 26), *yiti otuz* "27" (KT K 1), *tokuz otuz* "29" (Miran A 1), *bir kırk* "31" (KT K 2), vb. 2. Yenisey yazıtlarında 80'e kadar olan ara sayıların da aynı biçimde adlandırıldığı görülür: *eki älig* "42" (Tuva I 3), *üç yetm[iş]* "63" (Uyuk-Turan...
  - `Ata 2011, s. 75` (eslesen: _aLTI OTuZ_)
    > ...ır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki o...
  - `Olmez 2017, s. 42` (eslesen: _aLTI OTuZ_)
    > ...aa çıl | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (...


## BK-D-26#4 - Bilge Kağan Yazıtı, Doğu 26. satir  (5 kelime)

- **transkripsiyon:** `KeM : KeÇE : ÇİK : TaPA : SÜLeDiM`
- **kelime karsiliklari:** KEM [IRMAĞINI] : GEÇİP : ÇİK : TARAFINA : SÜLEDİM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _KeM KeÇE ÇİK TaPA SÜLeDiM_)
    > ...süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin ile konuşup anlaştık: Babamızın (ve) (D 22) amcamızın kazanmış oldukları halkın adı sanı yok olmasın diye Türk halkı için gece uyumadım...
  - `Tekin 2003, s. 151` (eslesen: _ÇİK TaPA_)
    > ...ru on iki (kez) büyük ordularla sefer ettim" (KT D 28) *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *eki otuz yaşıma tabgaç tapa sülädim* "Yirmi iki yaşımda Çin'e doğru sefer ettim" (BK D 25-26) *ançıp bars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärm...
  - `Olmez 2017, s. 42` (eslesen: _ÇİK TaPA_)
    > ...sında" Eski Uygurcadan (SUK-Sa05/1; Ayazlı 2016, 523) [Dîvânu Lugâti't-Turk: *sıçgan yıl*] 2. **ud yıl:** *ud yıl altınç ay bir yanıka (...)* "İnek yılı, altıncı (ay), ilk oruç günü" Eski Uygurcadan (HT VI 1823, Ölmez 1993, 161) 3. **bars yıl:** *bars yılka çik tapa yorıdım* "Kaplan yılında Çiklere doğru sefer ettim" MÇ D7 4. **tavışgan yıl;** 5. **ulu yıl:** *tavışgan yıl bėşinç ayka ulu yılka ötüken yış başınta ...* "Tavşan yılının beşinci ayında (751), ejderha yılında Ötüken ormanının zirvesinde ..." MÇ D8-9 [Dîvânu...
  - `Tekin 1998, s. 25` (eslesen: _TaPA SÜLeDiM_)
    > ...a törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng i...
  - `Ata 2011, s. 119` (eslesen: _TaPA SÜLeDiM_)
    > ...raç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “elçisi, iyi haberi, ricası gelmiyor diye yazın sefer ettim” BK D39...
  - `Olmez 2017, s. 54` (eslesen: _TaPA SÜLeDiM_)
    > ..."Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *anta ötrü oguz kop+ın kelti* "Ondan sonra Oğuzlar hep birlikte geldiler" (T 16) *ingek kölek+in toglada oguz kelti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *kış+ın kıtań tapa süledim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) ### Topluluk Durumu: +lIgU Bu eke 'birliktelik' (comitative) dendiği de olur. Eklendiği sözcüğe 'ile beraber, birlikte' anlamları katar: *men iniligü bunça başlayu kazganmasar...* "Ben, küçük erkek kardeşimle birl...


## BK-D-26#5 - Bilge Kağan Yazıtı, Doğu 26. satir  (4 kelime)

- **transkripsiyon:** `ÖRPeNTE : SÜŊüŞDüM : SÜSİN : SaNÇDıM`
- **kelime karsiliklari:** ÖRPENDE : SÜNGÜŞDÜM : SÜSÜNÜ : SANÇTIM
- **kanit:**
  - `Tekin 1998, s. 37` (eslesen: _ÖRPeNTE SÜŊüŞDüM SÜSİN SaNÇDıM_)
    > ...|t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim. [[s. 37]] ORHON YAZITLARI Mn Kül Tigin ile konuşup anlaştık: Babamızın (ve) (D 22) amcamızın kazanmış oldukları halkın adı sanı yok olmasın diye Türk halkı için gece uyumadım, gündüz oturmadım; kardeşim Kül T...
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


## BK-D-26#6 - Bilge Kağan Yazıtı, Doğu 26. satir  (3 kelime)

- **transkripsiyon:** `aZ : BODuNuG : aLTıM`
- **kelime karsiliklari:** AZ : BOYLARINI : ALDIM
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


## BK-D-26#7 - Bilge Kağan Yazıtı, Doğu 26. satir  (9 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- iLGeRTiM : YiTİ : OTuZ : YaŞIMA : KIRKıZ : TaPA : SÜLeDiM : SÜŊüG : BaTıMI`
- **kelime karsiliklari:** --- İLGERTDİM : YEDİ : OTUZ : YAŞIMDA : KIRGIZ : TARAFINA : SÜLEDİM : SÜNGÜ : BATIMI [DERİNLİKTE]
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KIRKıZ TaPA SÜLeDiM SÜŊüG_)
    > ...k halkı, Kırgız'larla birlikte (bize) düşman oldu. Yenisey (nehrini) geçerek Çiklilere doğru sefer ettim. (Onlarla) Örpen'de savaştım. Askerlerini mızrakladım, Az halkını zaptettim............ bağımlı kıldım. [s. 38] Ta BİLGE KAĞAN YAZITI Yeti oltuz yaşlıma Kırkız tapa süledim. Süngüğ batımı (D 27) karığ söküpen, Köğmen yışığ toğa yolrıp| Kırkız bodunuğ uda basdım. Kağanın birle Sonğa yışda süngüşdüm. Kağanın ölürtüm, ilin anta altım. Ol yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağ...
  - `Tekin 1998, s. 26` (eslesen: _KIRKıZ TaPA SÜLeDiM_)
    > ...r ileğmedi --...:... | (D 34) teğdükin Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayı...
  - `Tekin 1998, s. 27` (eslesen: _YiTİ OTuZ_)
    > ...iş. Türgiş avam halkını orada öldürmüş, (tutsak) almış. [[s. 26]] Yine yürüyüp ...........e (KI) Viristerer ane rü sercan | ile, Koşu Totok ile savaşmış. Adamlarını hep öldürmüş, evlerini mallarını eksiksiz hep getirdi. [s. 27] 50 KÜLTİGİN YAZITI Kül Tigin yiti otuz yaşınğa Karluk bodun erür barur erkli yağı boltı. Tamağ ıduk başda süünğüşdümiz. (K 2) (Kül) Tigin ol süngüşde otuz yaşayur erti. Alp Şalçı akın binip oplayu teğdi. Eki eriğ udşuru sançdı. Karlukuğ ölürtümiz, altımız. Az bodun yağı boltı. Kara költe sünğüşdü...
  - `Tekin 2003, s. 129` (eslesen: _YiTİ OTuZ_)
    > ...6), *altı yegirmi* "16" (KT D 31), *yeti yegirmi* "17" (T 49), *säkiz yegirmi* "18" (KT D 32), *tokuz yegirmi* "19" (BK G 9), *bir otuz* "21" (KT D 32), *eki otuz* "22" (BK D 25), *üç otuz* "23" (T 19), *biş otuz* "25" (KT D 18), *altı otuz* "26" (BK D 26), *yiti otuz* "27" (KT K 1), *tokuz otuz* "29" (Miran A 1), *bir kırk* "31" (KT K 2), vb. 2. Yenisey yazıtlarında 80'e kadar olan ara sayıların da aynı biçimde adlandırıldığı görülür: *eki älig* "42" (Tuva I 3), *üç yetm[iş]* "63" (Uyuk-Turan b 1), *yeti yetmiş* "67" (Be...
  - `Ata 2011, s. 114` (eslesen: _YiTİ OTuZ_)
    > ...D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK G9, bir otuz ‘21’ KT D32, eki otuz ‘22’ BK D25, üç otuz ‘23’ T 19, biş otuz ‘25’ KT D18, altı otuz ‘26’ BK D26, yiti otuz ‘27’ KT K1, bir kırk ‘31’ KT K2 vb. Açıklama: Yukarıda sıralanan iki haneli sayılar şu kalıba göre ifade edilirdi: {Sayı Sözü + Onluk Hane}. Örneğin, ‘28’ sayısını söylemek için önce sayı sözü yerine 8’i koyarız. Sonra da sayı ifadesi 20’yi aştığı için...
  - `Tekin 1998, s. 37` (eslesen: _OTuZ YaŞIMA_)
    > ...m. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim....


## BK-D-27#1 - Bilge Kağan Yazıtı, Doğu 27. satir  (10 kelime)

- **transkripsiyon:** `KaRıG : SÖKüPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ : BODuNuG : UDA : BaSDıM`
- **kelime karsiliklari:** KARI : SÖKÜP : KÖGMEN : YIŞI : DOĞA : YÜRÜYÜP : KIRGIZ : BOYLARI : UYKUDA : BASTIM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _KaRıG SÖKüPeN KÖGMeN YIŞıG TOGA YORIP KIRKıZ BODuNuG UDA BaSDıM_)
    > ...n Türük beğler, kop bilir siz. Ol süğ anta yok kışdımız. Anta kisre, Yir Bayırklu) Uluğ İrkin yağı boltı. Anı yariyıp Türgi Yargun költe buzdumız. Uluğ İrkin azkıriya erin tezip bardı. Kül Tigin (altı otuz) (D 35) yaşınğa Kırkız tapa süledimiz. Süngüğ batımı karığ söküpen Köğmen yışığ toğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. O...
  - `Tekin 2003, s. 182` (eslesen: _KIRKıZ BODuNuG UDA_)
    > ...da, äsizim ä, kit-(t)im ök* "Otuz yaşımda, ne yazık, gittim işte!" (Çaa-Höl III 1-2) - *kızıl kanım töküti kara tärim yügürti işig küçüg ber-tim ök* "... kızıl kanımı döktürerek, kara terimi akıtarak çok hizmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devl...
  - `Tekin 1998, s. 24` (eslesen: _KIRKıZ BODuNuG_)
    > ...Az halkını düzene sokup örgütleyerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglü...
  - `Tekin 2003, s. 114` (eslesen: _KIRKıZ BODuNuG_)
    > ...(KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...


## BK-D-27#2 - Bilge Kağan Yazıtı, Doğu 27. satir  (5 kelime)

- **transkripsiyon:** `KaGaNIN : BİRLE : SOŊA : YIŞDA : SÜŊüŞDüM`
- **kelime karsiliklari:** KAĞANI : İLE : SONGA : YIŞDA : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KaGaNIN BİRLE SOŊA YIŞDA SÜŊüŞDüM_)
    > ...arla) Örpen'de savaştım. Askerlerini mızrakladım, Az halkını zaptettim............ bağımlı kıldım. [s. 38] Ta BİLGE KAĞAN YAZITI Yeti oltuz yaşlıma Kırkız tapa süledim. Süngüğ batımı (D 27) karığ söküpen, Köğmen yışığ toğa yolrıp| Kırkız bodunuğ uda basdım. Kağanın birle Sonğa yışda süngüşdüm. Kağanın ölürtüm, ilin anta altım. Ol yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağan süsi otça borça kelti. (D 28) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz y...
  - `Ata 2011, s. 121` (eslesen: _BİRLE SOŊA YIŞDA SÜŊüŞDüM_)
    > ...irlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 113 [s. 121] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa sül...
  - `Ata 2011, s. 114` (eslesen: _BİRLE SOŊA YIŞDA SÜŊüŞDüM_)
    > ...şantuŋ yazıka tegi süledimiz “amcam kağan ile birlikte doğuda Sarı ırmağa ve Şantung ovasına kadar sefer ettik” KT D17 [s. 114] Açıklama: Bu sontakı, aynı zamanda 3. kişi iyelik eki almış adların nesne durumu (belirtme durumu eki) ile kullanılır: kagan+ı+n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki...


## BK-D-27#3 - Bilge Kağan Yazıtı, Doğu 27. satir  (5 kelime)

- **transkripsiyon:** `KaGaNIN : ÖLüRTüM : İLiN : aNDA : aLTıM`
- **kelime karsiliklari:** KAĞANINI : ÖLDÜRDÜM : İLİNİ : [O] ANDA : ALDIM
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _KaGaNIN ÖLüRTüM İLiN_)
    > ...mızrakladım, Az halkını zaptettim............ bağımlı kıldım. [s. 38] Ta BİLGE KAĞAN YAZITI Yeti oltuz yaşlıma Kırkız tapa süledim. Süngüğ batımı (D 27) karığ söküpen, Köğmen yışığ toğa yolrıp| Kırkız bodunuğ uda basdım. Kağanın birle Sonğa yışda süngüşdüm. Kağanın ölürtüm, ilin anta altım. Ol yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağan süsi otça borça kelti. (D 28) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa sü...
  - `Tekin 1998, s. 26` (eslesen: _KaGaNIN ÖLüRTüM_)
    > ...oğa yorıp Kırkız bodunuğ uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s...
  - `Tekin 1998, s. 7` (eslesen: _KaGaNIN_)
    > ...tı yüzüne kazınmıştır. Anıtın kaplumbağa heykeli biçimindeki mermer kaidesi üzerinde de 8 satırlık küçük bir yazıt varsa da bunun ancak 7-8 sözcüğü okunabilmektedir. Kül Tigin anıtı “Koyun yılının on yedisinde', miladi takvimle 27 Şubat 731'de ölen ve Bilge Kağanın kardeşi olan Kül Tigin'in ya da prens Kül'ün anısına dikilmiştir. Prens Kül'ün cenaze töreni “Dokuzuncu ayın yirmi yedisinde', miladi takvimle | [s. 8] 12 GİRİŞ Kasım 731'de yapılmıştır. Anıtın dikiliş tarihi Türkçe yazıtlarda belirtilmemiştir. Ancak batı y...
  - `Ergin 1970, s. 6` (eslesen: _KaGaNIN_)
    > ...lidir. Doğu ve batı cephelerinin genişliği aşağıda 132, yukarıda 122 santimdir. Güney ve kuzey cepheleri ise aşağıda 46, yukarıda 44 santimdir. [[s. 6]] Âbidenin üstü kemer şeklinde bitmektedir ve yukarı kısımda beş kenarlı olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu c...
  - `Tekin 2003, s. 31` (eslesen: _KaGaNIN_)
    > ...ir; başka bir deyişle, bunlar seslik bir durumu ya da gelişmeyi gösterir: - /tIŋLA/ *tıŋla* "dinle!" (KT G 2) ~ *tıŋla-* (IB 58) - /KTGdI/ *kat(ı)gdi* "sıkıca" (KT K 11) ~ *katıgdı* (KT G 2) - /sIYU/ *siyu* "kırarak" (KT D 36, vb.) < *sı-* "kırmak" - /KGNIn/ *kaganin* "hakanını" (KT D 35, vb.) - /SBmn/ *sab(ı)min* "sözlerimi" (KT G 2) - /YGsI/ *yag(ı)si* "düşmanları" (BK E 11, vb) - /BULms/ *bolm(i)ş* "olmuş" (T 31, vb.) Art ünlülü sözcüklerin yazımında yaygın olarak kullanılan harfler ön /s/ ve ön /y/ harfleridir. [s....
  - `Ata 2011, s. 51` (eslesen: _KaGaNIN_)
    > ...lere yerleştirilmiş bazı Köktürk beyleri, T’ang hanedanı (618-907) sarayında muhafızlık rütbesi alırlar. Yazıtlarda I. Köktürk Kağanlığı’nın Yıkılış Nedenleri Buraya kadar anlattığımız Köktürk tarihine ilişkin gerçekler, KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme...


## BK-D-27#4 - Bilge Kağan Yazıtı, Doğu 27. satir  (11 kelime)

- **transkripsiyon:** `LO : YıLKA : TÜRGiŞ : TaPA : aLTUN : YIŞıG : aŞA : iRTiŞ : ÖGüZüG : KeÇE : YORIDıM`
- **kelime karsiliklari:** O : YILDA : TÜRGİŞ : TARAFINA : ALTIN : YIŞI : AŞIP : İRTİŞ : ÖĞÜZÜNÜ : GEÇİP : YÜRÜDÜM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _YıLKA TÜRGiŞ TaPA aLTUN_)
    > .... [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta ya...
  - `Tekin 1998, s. 47` (eslesen: _aLTUN YIŞıG aŞA_)
    > ...n keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp k...
  - `Ogel C2, s. 385` (eslesen: _aLTUN YIŞıG aŞA_)
    > ...ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (tuşı)), Er-Kamış*ın altından sal...


## BK-D-27#5 - Bilge Kağan Yazıtı, Doğu 27. satir  (4 kelime)

- **transkripsiyon:** `TÜRGiŞ : BODuNuG : UDA : BaSDıM`
- **kelime karsiliklari:** TÜRGİŞ : BOYLARINI : UYKUDA : BASTIM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _TÜRGiŞ BODuNuG UDA BaSDıM_)
    > ...k adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuztlı,| ekisin özi altızdı. Anta yana kirip Türgiş Kağan buyrukı Az Totokuğ eliğin tutdı. Kağanın anta ölürtüm...
  - `Tekin 2003, s. 149` (eslesen: _TÜRGiŞ BODuNuG_)
    > ...yana içikmiş* “Düşman olmuş, (fakat) kendini düzene sokup (iyi) örgütlenememiş, yine (Çinlilere) bağımlı olmuş” (KT D 10) - *kanin kodup tabgaçka yana içikdi* “Hanını bırakıp Çin’e yeniden bağımlı oldu” (T 2) [s. 149] # s. 149 — ORHON TÜRKÇESİ GRAMERİ *kara türgiş bodunug anta ölürmiş almış yana yorıp...* “Türgiş avam halkını orada öldürmüş, almış. Yine yürüyüp...” (KT D 40), vb. Öbür sayı zarfları *ekinti* “ikinci olarak”, *üçünç* “üçüncü olarak” vb. için bk. **Sıra Sayıları**. ## Soru Zarfları **346.** Çok eski *\*ka* sor...
  - `Tekin 2003, s. 182` (eslesen: _BODuNuG UDA_)
    > ...zim ä, kit-(t)im ök* "Otuz yaşımda, ne yazık, gittim işte!" (Çaa-Höl III 1-2) - *kızıl kanım töküti kara tärim yügürti işig küçüg ber-tim ök* "... kızıl kanımı döktürerek, kara terimi akıtarak çok hizmet ettim" (T 52) 2. Çoğul 1. kişi eki {-DXmXz}: - *kırkız bodunug uda bas-dımız* "Kırgız halkını uykuda bastırdık" (KT D 35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devl...
  - `Tekin 1998, s. 11` (eslesen: _BODuNuG_)
    > ...Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağ...
  - `Tekin 2003, s. 114` (eslesen: _BODuNuG_)
    > ...2) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Eylem süresinde nesnenin içinde bulunduğu durumu gösteren zarf tümleci olarak: *kırkız bodunug u+da basdımız* "Kırgız halkını uykuda (iken) bastırdık" (KT D 35) 3. Bir eylemin başlangıç noktasını gösteren zarf tümleci olarak: *[tabgaç] kagan+ta bädizçi kälürtüm* "Çin İmparatorundan sanatçılar getirttim" (KT G 12) *köz+dä yaş kälsär tida, köŋül+tä sıgı...
  - `Ata 2011, s. 47` (eslesen: _BODuNuG_)
    > ...lde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta o...


## BK-D-27#6 - Bilge Kağan Yazıtı, Doğu 27. satir  (6 kelime)

- **transkripsiyon:** `TÜRGiŞ : KaGaN : SÜSİ : OTÇA : BORÇA : KeLTİ`
- **kelime karsiliklari:** TÜRGİŞ : KAĞANININ : SÜSİ : ATEŞCE : BORACA : [ÜSTÜMÜZE] GELDİ
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _TÜRGiŞ KaGaN SÜSİ OTÇA BORÇA KeLTİ_)
    > ...im. Süngüğ batımı (D 27) karığ söküpen, Köğmen yışığ toğa yolrıp| Kırkız bodunuğ uda basdım. Kağanın birle Sonğa yışda süngüşdüm. Kağanın ölürtüm, ilin anta altım. Ol yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağan süsi otça borça kelti. (D 28) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti...
  - `Olmez 2017, s. 53` (eslesen: _KaGaN SÜSİ OTÇA BORÇA_)
    > ...yoktur. Ayrıca *asra* (< *\*as+ra*) ve *üze* zıtlığı da burada bir *+rA*'nın (*\*üzre < \*ür+re*) varlığına delalettir (Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalış...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KaGaN SÜSİ_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıld...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KaGaN SÜSİ_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı" (KT...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KaGaN SÜSİ_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli biri...


## BK-D-28#1 - Bilge Kağan Yazıtı, Doğu 28. satir  (7 kelime)

- **transkripsiyon:** `BOLÇUDA : SÜŊüŞDüMüZ : KaGaNIN : YaBGUSIN : ŞaDIN : aNDA : ÖLüRTüM`
- **kelime karsiliklari:** BOLÇUDA : SÜNGÜŞDÜK : KAĞANINI : YABGUSUNU : ŞADINI : [O] ANDA : ÖLDÜRDÜM
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _YaBGUSIN ŞaDIN_)
    > ...asınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz....
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 13` (eslesen: _BOLÇUDA_)
    > ...güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (An...
  - `Ergin 1970, s. 19` (eslesen: _BOLÇUDA_)
    > ...zrakladı. [[s. 19]] O hücum ettiğinde, Bayırkunun ak aygırını, uyluğunu kırarak, vurdular. Kırgız kağanını öldürdük, ilini aldık. O yılda Türgişe doğru Altın ormanını aşarak, İrtiş nehrini geçerek yürüdük. Türgiş kavmini uykuda bastık. Türgiş kağanının ordusu Bolçuda ateş gibi, fırtına gibi geldi. Savaştık. Kül Tigin alnı beyaz boz ata binip hücum etti. Alnı beyaz boz...... | ... tutturdu. İkisini kendisi yakalattı. Ondan sonra tekrar girip Türgiş kağanının buyruku Az valisini elle tuttu. [[s. 19]] Kağanını orda öldürdük,...
  - `Ata 2011, s. 113` (eslesen: _BOLÇUDA_)
    > ...nci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk et” yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +A...


## BK-D-28#2 - Bilge Kağan Yazıtı, Doğu 28. satir  (3 kelime)

- **transkripsiyon:** `İLiN : aNDA : aLTıM`
- **kelime karsiliklari:** İLİNİ : [O] ANDA : ALDIM
- **kanit:**
  - `Tekin 1998, s. 26` (eslesen: _aLTıM_)
    > ...uda basdımız. [[s. 26]] Kağanın birle Sofğa yışda süngüşdümiz. Kül Tigin Bayırkunlıng ak adeglırlığ) (D 36) binip oplayu teğdi. Bir eriğ okun urtı, eki eriğ udşuru sançdı. Ol teğdükde, Bayırkunıng ak adgırığ, udlıkın sıyu urti. Kırkız Kağanın ölürtümiz, ilin altımız. Ol yılka Türgiş (tapa, Altun yışığ) (D 37) toğa, Ertiş üğüzüğ keçe yorıdımız. Türgiş bodunuğ uda basdımız. Türgiş Kağan süsi Bolçuda otça, borça, kelti. Süünğüşdümiz. Kül Tigin başgu boz at binip teğdi. Başgu boz kl........... [[s. 26]] s.s 1 (D 38) tutuz...
  - `Tekin 2003, s. 75` (eslesen: _aLTıM_)
    > ...T G 3) ~ *eldä* (Tele 3) < **ēldä* - *yolta* "yolda" (KT K 9; T 16, IB 35) < **yōlda* - *boltokda* "olduğunda" (O ön 1, 6) < **bōldokda* ~ *boldum* "oldum" (Barık II 1) - *adrıltım* "ayrıldım" (Uyuk-Turan 1, Kızıl Çıra I 2, vb.) ~ *adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT...
  - `Ata 2011, s. 112` (eslesen: _aLTıM_)
    > ...zıdım” Açıklama: törü+g+in örneğinde ŋ ~ g nöbetleşmesi ile +g ikinci teklik kişi iyelik ekidir. Bk. Tablo 6.1 3. tekil kişi iyelik ekinden sonra: kan+ı+n öltürdümüz T 28 “kağanlarını öldürdük” ogl+ı+n yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku...
  - `Ata 2011, s. 105` (eslesen: _aLTıM_)
    > ...buraya kazıdım” Açıklama: [[s. 105]] törü+g+in örneğinde ŋ ~ g nöbetleşmesi ile +g ikinci teklik kişi iyelik ekidir. Bk. Tablo 6.1 3. tekil kişi iyelik ekinden sonra: kan+ı+n öltürdümüz T 28 “kağanlarını öldürdük” ogl+ı+n yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. [[s. 105]] tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu g...
  - `Roux, Eski Turk Mitolojisi, s. 37` (eslesen: _aLTıM_)
    > ...geistigen Grundlagen des Hochasiatischen Tierstiles [Orta-Güney Asyadaki Hayvan Biçeminin Düşünsel Esasları], Forschungen und Fortschritte, VII, 20, 1931, s. 278. A. v. Gabain, Inhalt und magische Bedeutung [İçerik ve Gizemli Anlamı], s. 554. Gizemli Sağaltım —»Şamanizm Gök Gürlemesi. Fırtına ve ona eşlik eden en dikkat çekici olaylar olan yıldırım ve gök gürlemesi, eski Türk halklarım oldum olası derinden etkilemiştir. Kâşgarlı Mahmud'a göre, bunlar bizzat gök tanrı —»Tengri tarafından gerçekleştirilmekte...
  - `Ogel C1, s. 21` (eslesen: _aLTıM_)
    > ...karşısında rakip olarak görür ve babasına karşı şuur altında bir kin duyardı. Çünkü annesi, babasına aitti. Bu hisleri açığa vuramıyan erkek çocuklar, hislerini şuur altında saklar ve bazan da bu hal çocukda hastalık bile yapardı. [[s. 21]] Freud'a göre şuur altıma atılan bu hisler tesirlerini gerçek hayatta değil; masal ve efsanelerde göstermiş ve bu efsaneler de zamanımıza kadar gelmiştir. Bizim rüya [s. 22] BÜYÜK HUN DEVLETİ 9 Harita 1 : Hun ve Göktürk soylularının yaşadığı Altay bölgesi, [s. 23] 10 TÜRK MİTOLOJİ...


## BK-D-28#3 - Bilge Kağan Yazıtı, Doğu 28. satir  (6 kelime)

- **transkripsiyon:** `OTuZ : YaŞıMA : BiŞ : BaLıK : TaPA : SÜLeDiM`
- **kelime karsiliklari:** OTUZ : YAŞIMDA : BEŞ : BALIK : TARAFINA : SÜLEDİM
- **kanit:**
  - `Tekin 2003, s. 182` (eslesen: _OTuZ YaŞıMA BiŞ BaLıK_)
    > ...(iyelik eklerinden) anlaşılacağı üzere kesin geçmiş zaman biçimi aslında eylem kök ve gövdelerinden {-d} ya da {-δ} eki ile türetilmiş bir eylem adıdır: *bardım* < **barıd+ım*, *bardıŋ* < **barıd+ıŋ*, *bardı* < *barıd+i*, vb. 1. Tekil 1. kişi eki {-DXm}: - *otuz yaşıma biş balık tapa sülä-dim* "Otuz yaşımda Beşbalık (şehrine) doğru sefer ettim" (BK D 28) - *süsin sanç-dım yabrıt-dım* "(Orada) askerlerini mızrakladım ve bozguna uğrattım" (BK D 31) - *yerçi tilä-dim çölgi az äri bul-tum* "Kılavuz istedim, bozkırlı (bir) Az eri buldum"...
  - `Tekin 1998, s. 38` (eslesen: _BaLıK TaPA SÜLeDiM_)
    > ...ölürtüm, ilin anta altım. Ol yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağan süsi otça borça kelti. (D 28) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk...
  - `Tekin 1998, s. 37` (eslesen: _OTuZ YaŞıMA_)
    > ...m. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı. Kem keçe Çik tapa süledim. Örpente sünğüşdüm. Süsin sançdım, Az (bloldunuğ altlım T.............. iç|gertim....
  - `Tekin 2003, s. 150` (eslesen: _OTuZ YaŞıMA_)
    > ...sınır) arasında benim vadilerim ve tarlalarım (var)" (Tar. B 4) *kamış āra kalmiş* "(Bir cariye) kamışlar arasında kalmış" (IB 38) *busanç āra mäŋi kälmiş* "keder arasında mutluluk gelmiş" (IB 52), vb. **350.** *birlä* "ile, ile birlikte" < *\*bīr+lä*: *altı otuz yaşıma çik bodun kırkız birlä yagı boltı* "Yirmi beş yaşımda Çik halkı ve Kırgızlar (bize) düşman oldular" (BK D 26) *inim kül tigin birlä sözläşdimiz* "Erkek kardeşim Prens Kül ile (durumu) konuştuk" (KT D 6) *oguz bodun tokuz tatar birlä tirilip kälti* "Oğuz halkı...
  - `Ata 2011, s. 121` (eslesen: _OTuZ YaŞıMA_)
    > ...n birle soŋa yışda süŋüşdüm “kağanları ile Songa dağında savaştım” BK D27 kudı: ol sub kudı bardımız “o ırmak boyunca aşağı gittik” T 27 sayu: yir sayu bardıg “her yere gittin” KT G9 yir sayu barmış bodun “her yere gitmiş halk” BK D22 tapa: eki otuz yaşıma tabgaç tapa süledim “yirmi iki yaşımda Çin’e doğru sefer ettim” BK D25-26 yazıŋa oguz tapa süledim “(o yılın) ilkbaharında Oğuzlara doğru sefer ettim” BK D31-32 teg: körür közüm körmez teg bilir biligim bilmez teg boltı “gören...
  - `Tekin 1998, s. 25` (eslesen: _TaPA SÜLeDiM_)
    > ...a törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz). (D 32) Kül Tigin yadağın oplayu teğdi. Ong Totok yurçın yaraklığ eliğin tutdı, yaraklığdı kağanka ançuladı. Ol süğ anta yok kışdımız. [[s. 25]] Bir otuz yaşınğa Çaça Seüğünke süngüşdümiz. Eng i...


## BK-D-28#4 - Bilge Kağan Yazıtı, Doğu 28. satir  (3 kelime)

- **transkripsiyon:** `aLTI : YOLI : SÜŊüŞDüM`
- **kelime karsiliklari:** ALTI : YOL : SÜNGÜŞDÜM
- **kanit:**
  - `Tekin 2003, s. 133` (eslesen: _aLTI YOLI SÜŊüŞDüM_)
    > ...II 4), *beş kata* "beş kez" (Elegest III 2), vb. 1. Asıl sayı + *yolı* ( < *yōl* "yol, sefer" + 3. kişi iyelik eki): *bir yılka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *bir yılka biş yolı süŋüşdümüz* "Bir yılda beş kez savaştık" (KT K 4) *altı yolı süŋüşdüm* "Altı kez savaştım" (BK D 28) *kanım kagan... kırk artukı yeti yolı sülämiş* "Babam Hakan (hakanlığı süresince) kırk yedi kez ordu sevketmiş" (KT D 15) 2. Asıl sayı + *kata* (< *kat-* "katmak, ilave etmek"): *elimdä beş kata tägzindim* "Ülkemde beş kez dola...
  - `Tekin 1998, s. 38` (eslesen: _aLTI YOLI_)
    > ...yılka Türgiş tapa Altun yışığ (aşla Ertiş üğüzüğ keçe yorıIdım. Türgiş bodunuğ| uda basdım. Türgiş kağan süsi otça borça kelti. (D 28) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Ka...
  - `Tekin 2003, s. 112` (eslesen: _YOLI SÜŊüŞDüM_)
    > ...)de vefat etti" (KT KD) *yazı+ŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) *kırkızıg u+ka basdımız* "Kırgızları uykuda bastırdık" (T 27), vb. 6. Eylemin işlenme süresini gösteren zarf tümleci olarak: *bir yıl+ka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *on tün+kä yantakı tug äbirü bardımız* "yandaki (dağ yamacı) engelini on gecede dolanarak gittik" (T 26) *tünli künli yiti ödüş+kä subsız käçdim* "geceli gündüzlü yedi vakitte susuz (araziyi) geçtim" (BK GD), vb. Bk. *...
  - `Ata 2011, s. 116` (eslesen: _YOLI SÜŊüŞDüM_)
    > ...r, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 116] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< k...
  - `Ata 2011, s. 109` (eslesen: _YOLI SÜŊüŞDüM_)
    > ...” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞDüM_)
    > ...ı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emg...


## BK-D-28#5 - Bilge Kağan Yazıtı, Doğu 28. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : SÜSiN : KOP : ÖLüRTüM`
- **kelime karsiliklari:** --- : SÜSİNİ : HEP : ÖLDÜRDÜM
- **kanit:**
  - `Ata 2011, s. 115` (eslesen: _KOP ÖLüRTüM_)
    > ...” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık”...
  - `Ata 2011, s. 108` (eslesen: _KOP ÖLüRTüM_)
    > ...ip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgen...
  - `Tekin 1998, s. 19` (eslesen: _ÖLüRTüM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _ÖLüRTüM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...
  - `Tekin 1998, s. 27` (eslesen: _SÜSiN_)
    > ...riğ kılıçladı. Ekinti Koşulgakda Ediz birle süünğüşdümiz. [[s. 27]] Kül Tigin Az yağızın binip oplayu teğip bir eriğ sançdı, (K 6) tokuz eriğ eğire tokıdı. Ediz bodun anta ölti. Üçünç Bollçulda Oğuz birle sünğüşdümiz. Kül Tigin Azman akığ binip teğdi, sançdı. Süsin sançdımız, ilin altımız. Törtünç Çuş başınta süünğüşdümiz. Türük (K 7) bodun adak kamşatdı. Yablak boltlaçlı erti. Oza (klJelmiş süsin Kül Tigin ağıtıp Tofiğra bir uğuş alpağu on eriğ Tonga Tigin yoğınta eğirip ölürtümiz. Bişinç Ezgenti Kadızda Oğuz birle sün...
  - `Tekin 2003, s. 132` (eslesen: _SÜSiN_)
    > ...anılır. 1. Niteleyici olarak: *ilki sü* "birinci ordu" (BK D 32) [s. 132] # s. 132 — TALAT TEKİN *ekin* (*ekinti* yerine) *sü* "ikinci ordu" (BK D 32) *bir tümän artukı yeti biŋ sü ilki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi...


## BK-D-28#6 - Bilge Kağan Yazıtı, Doğu 28. satir  (12 kelime, TAS KIRIGI)

- **transkripsiyon:** `BiŞ : BaLıK : İÇReKİNE : KİŞİTİN : --- ÜK : YOK : ÜÇüN : KİŞİ : BaLıKDA : MAŊA : OKıGLI : KeLTİ`
- **kelime karsiliklari:** BEŞ : BALIK : İÇİNDE : [ÇOK] KİŞİ : --- : YOK [OLACAĞI] : İÇİN : KİŞİ[LER] : BALIKDAN : BANA : ANLAŞMAYA : GELDİ
- **kanit:**
  - `Tekin 2003, s. 182` (eslesen: _BiŞ BaLıK_)
    > ...erinden) anlaşılacağı üzere kesin geçmiş zaman biçimi aslında eylem kök ve gövdelerinden {-d} ya da {-δ} eki ile türetilmiş bir eylem adıdır: *bardım* < **barıd+ım*, *bardıŋ* < **barıd+ıŋ*, *bardı* < *barıd+i*, vb. 1. Tekil 1. kişi eki {-DXm}: - *otuz yaşıma biş balık tapa sülä-dim* "Otuz yaşımda Beşbalık (şehrine) doğru sefer ettim" (BK D 28) - *süsin sanç-dım yabrıt-dım* "(Orada) askerlerini mızrakladım ve bozguna uğrattım" (BK D 31) - *yerçi tilä-dim çölgi az äri bul-tum* "Kılavuz istedim, bozkırlı (bir) Az eri buldum"...
  - `Roux, Eski Din, s. 162` (eslesen: _ÜÇüN KİŞİ_)
    > ...rarak azaltmak durumunda bulunduklarına işaret etmek gerekir. Yöntemlerin birini veya diğe rini kullanmaya iten nedenler bilinmemektedir. [[s. 162]] Ancak şurası açık ki savaşlarda ilk düşünülen öldürmektir: Kan döküldükten sonra, bundan bir anda elde edilen gücün kişisel olarak kullanımı konusunda diğer çareler aranabilirdi. Bunları cenaze törenlerine değindiğimizde göreceğiz. Özellikle arkeolojik nitelikli olmak üzere bazı belgeler, kafatasına ait gücün saç ve sakallara yansıdığını düşündürmektedir. [[s. 162]] Bu nedenle...
  - `Tekin 1998, s. 11` (eslesen: _BaLıKDA_)
    > ...deyimler açısından da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu deyimlerden bazıları: adak kamşat- “ayağı burkulmak, ayağı dolaşmak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız...
  - `Tekin 2003, s. 132` (eslesen: _BaLıKDA_)
    > ...cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay altı otuzka uça bardı* "(Babam hakan) Köpek yılının yirmi altısında uçup gitti" (KT KD) *bir yegirminç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkda süŋüşdüm* "İlk önce Togu Balık'ta savaştım" (BK D 30) *ekinti ışbara yamtar boz atıg binip tägdi* "İkinci olarak Işbara Yamtar'ın boz atına binip hücum etti" (KT D 32) *törtünç çuş b...
  - `Ata 2011, s. 52` (eslesen: _BaLıKDA_)
    > ...olmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış...
  - `Olmez 2017, s. 20` (eslesen: _BaLıKDA_)
    > ...öğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler. Babam hakan on yedi savaşçıyla isyan etmiş. 'İsyan başlıyor' diye...


## BK-D-28#7 - Bilge Kağan Yazıtı, Doğu 28. satir  (7 kelime)

- **transkripsiyon:** `BiŞ : BaLıK : aNI : ÜÇüN : OZDI : OTuZ : aRTUKI`
- **kelime karsiliklari:** BEŞ : BALIK : ONUN : İÇİN : KURTULDU : OTUZ : ARTI
- **kanit:**
  - `Tekin 1998, s. 38` (eslesen: _BaLıK aNI ÜÇüN OZDI_)
    > ...8) Bolçuda süüğüşdümiz. Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. To...
  - `Tekin 2003, s. 153` (eslesen: _BaLıK aNI ÜÇüN OZDI_)
    > ...İtaçuk için yazdım" (IB hatime) [s. 153] # s. 153 — ORHON TÜRKÇESİ GRAMERİ Bu sontakı kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece ellerinde tutmuşlar hiç şüphesiz" (KT D 3) *beş balık anı üçün ozdı* "Beşbalık (şehri) onun için (yıkılmaktan) kurtuldu" (BK D 28) *antagıŋın üçün...* "Öyle olduğun için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletini...
  - `Tekin 2003, s. 182` (eslesen: _BiŞ BaLıK_)
    > ...erinden) anlaşılacağı üzere kesin geçmiş zaman biçimi aslında eylem kök ve gövdelerinden {-d} ya da {-δ} eki ile türetilmiş bir eylem adıdır: *bardım* < **barıd+ım*, *bardıŋ* < **barıd+ıŋ*, *bardı* < *barıd+i*, vb. 1. Tekil 1. kişi eki {-DXm}: - *otuz yaşıma biş balık tapa sülä-dim* "Otuz yaşımda Beşbalık (şehrine) doğru sefer ettim" (BK D 28) - *süsin sanç-dım yabrıt-dım* "(Orada) askerlerini mızrakladım ve bozguna uğrattım" (BK D 31) - *yerçi tilä-dim çölgi az äri bul-tum* "Kılavuz istedim, bozkırlı (bir) Az eri buldum"...
  - `Tekin 1998, s. 21` (eslesen: _aNI ÜÇüN_)
    > ...iş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış....
  - `Tekin 2003, s. 122` (eslesen: _aNI ÜÇüN_)
    > ...(Bu fal) çok kötüdür" (IB 36) 2. Nesne durumu: *türük bäglär bodun bunı eşidiŋ* "(Ey) Türk halkı ve beyleri, bunu işitin" (KT G 10) *bunı körü biliŋ* "Bunu görün ve öğrenin!" (KT G 12, BK K 15) *anı körüp ança biliŋ* "Onu görün ve öylece öğrenin!" (KT G 13) *anı üçün ilig ança tutmiş ärinç* "Onun için devleti öylece yönetmişler" (KT D 3) *katun yok bolmiş ärti anı yoglatayin tedi* "Hatun yok olmuş idi; onun cenaze törenini yaptırayım dedi" (T 31) *anı ayıtayin tip sülädim* "Onu sorayım diye sefer ettim" (BK D 1) [s. 123]...
  - `Ata 2011, s. 51` (eslesen: _aNI ÜÇüN_)
    > ...etirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç oglı kaŋın teg kılınmaduk erinç biligsiz kagan olurmış erinç...
