# Ceviri istek paketi 26 - Orhun cumlecikleri

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


## BK-G-8#4 - Bilge Kağan Yazıtı, Güney 8. satir  (3 kelime)

- **transkripsiyon:** `ÜÇ [TÜMeN] : SÜG : ÖLüRTüM`
- **kelime karsiliklari:** ÜÇ [TÜMEN] : SÜ : ÖLDÜRDÜM
- **kanit:**
  - `Ata 2011, s. 114` (eslesen: _ÜÇ [TÜMeN]_)
    > ...ğınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yeg...
  - `Ata 2011, s. 107` (eslesen: _ÜÇ [TÜMeN]_)
    > ...ırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. [[s. 107]] sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. [[s. 107]] bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14...
  - `Tekin 1998, s. 19` (eslesen: _ÖLüRTüM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _ÖLüRTüM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...
  - `Ata 2011, s. 115` (eslesen: _ÖLüRTüM_)
    > ...ı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdü...
  - `Ata 2011, s. 108` (eslesen: _ÖLüRTüM_)
    > ...dir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta s...


## BK-G-8#5 - Bilge Kağan Yazıtı, Güney 8. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `BİR : TÜMeN : --- eRSeR --- : ÖKTüM : TaTaBI : ---`
- **kelime karsiliklari:** BİR : TÜMEN[İNİ] : --- İSE --- : ÖKTÜM : TATABI : ---
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _BİR TÜMeN_)
    > ...ngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu...
  - `Ata 2011, s. 114` (eslesen: _BİR TÜMeN_)
    > ...ırlamaya çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi...
  - `Tekin 1998, s. 41` (eslesen: _ÖKTüM TaTaBI_)
    > .... Elli yaşımda Tatabı halkı Kıtay'lardan ayrıldı ....... Töügğker. dağında ..........ele (G 8) General Ku kumandasında kırk bin (kişilik bir) ordu geldi. Töngker dağında hücum edip vuruştum, otuz bin askeri. öldürdüm. Bir ......>.......... ise ASAL del Mahal söktüm. Tatabı ................... (G 9) öldürdü. [[s. 41]] Büyük oğlum hastalanıp ölünce Ku'yu, Generali, balbal (olarak) dikiverdim. - Ben on dokuz yıl şad (olarak) hüküm sürdüm, on dokuz yıl (da) hakan (olarak) hüküm sürdüm, devlet yönettim. Otuz: bir yaşımda! saz (G 10...
  - `Ergin 1970, s. 31` (eslesen: _ÖKTüM TaTaBI_)
    > ...raman erini öldürüp balbal kılı verdim. Elli yaşımda Tatabı milleti Kıtaydan ayrıldı. .......... İker dağına .......... | Kugeneral kumandasında kırk bin asker geldi. Töngkes dağında hücum edip vurdum. Otuz bin askeri öldürdüm. On bin ......... ise .......... öktüm. Tatabı .......... | öldürdü. Büyük oğlum hastalanıp yok olunca Ku'yu, generali balbal olarak diki verdim. [[s. 31]] Ben on dokuz yıl şad olarak oturdum, on dokuz yıl kağan olarak oturdum, il tuttum. Otuz bir...........| Türküm için, milletim için iyisini öylece kaza...
  - `Ata 2011, s. 107` (eslesen: _BİR TÜMeN_)
    > ...atırlamaya çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. [[s. 107]] sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. [[s. 107]] bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’...
  - `Ogel C1, s. 19` (eslesen: _BİR TÜMeN_)
    > ...örünce, hemen koşup Mete'yi öldürmek istediler. Fakat (Mete'nin) çok iyi bir atı vardı. Atına atladığı gibi (Yüe-çilerin arasından sıyrılıp kaçtı ve) yurduna döndü. Babası Tuman (sevinir gibi göründü) ve onun bu bahadırlığının bir mükâfatı olarak, 10,000 atlı bir tümenin komutasını ona verdi. [s. 20] BÜYÜK HUN DEVLETİ ii “Mete, bundan sonra vızlayan bir ok icad etti ve askerlerini talim ettirmeğe başladı. (Tamamen atlı olan) askerlerine, nereye ok atma emredilirse, hemen oraya dönüp ok atmalarını emretti. Kim bunu yapmaz...


## BK-G-9#1 - Bilge Kağan Yazıtı, Güney 9. satir  (11 kelime)

- **transkripsiyon:** `ÖLüRTİ : ULuG : OGLuM : aGRıP : YOK : BOLÇA : KUG : SeŊÜNüG : BaLBaL : TİKE : BİRTiM`
- **kelime karsiliklari:** ÖLDÜRDÜ : ULU : OĞLUM : AĞRILANIP : YOK : OLUNCA : KUĞ : SENGÜNÜ : BALBAL : DİKİ : VERDİM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _ULuG OGLuM aGRıP YOK_)
    > ...AAA 1) (G 6) sünglüşdüm SEİR ERĞNRÜNÜĞEE ERKİN 1) (G 7) (berltim. Alp erin ölürüp balbal kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunç...
  - `Tekin 2003, s. 178` (eslesen: _ULuG OGLuM aGRıP YOK_)
    > ...(Altınköl I 1) [s. 178] # s. 178 — TALAT TEKİN *kolı ās tut-sar küç üç eçim ä* "Ey, elleri kakım tutacak kadar güçlü üç ağabeyim! (Uybat III 1) ## {-çA} Ekli Eylem Zarfı **424.** Bu eylem zarfı asıl eylemden önce işlenen ya da oluşan bir eylemi belirtir: *ulug oglum agrıp yok bol-ça kug säŋünüg balbal tikä birtim* "Büyük oğlum hastalanıp yok olunca, General Ku'yu (onun kabrine) taş heykel olarak dikiverdim" (BK G 9) ## {-gInçA} Ekli Eylem Zarfı **425.** Bu eylem zarfı asıl eylemin işlenmesi için geçecek zaman sınırını belirtir....
  - `Ata 2011, s. 141` (eslesen: _ULuG OGLuM aGRıP YOK_)
    > ...belirtir. Orhun Türkçesinde bir yerde tespit edilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün...
  - `Olmez 2017, s. 62` (eslesen: _ULuG OGLuM aGRıP YOK_)
    > ...ag yavız boltı tép algalı kelti* "Yaya olanları perişan oldu diyerek teslim almak amacıyla geldiler" (BK D 32); *yuyka erkli topulgalı uçuz ermiş yinçge erklig üzgeli uçuz* "Yufka olanı delmek kolaymış. İnce olanı koparması kolaymış." (T 13) **{-çA} :** *ulug oglum agrip yok bolça k²og seyünüg balbal tike bértim* "Büyük oğlum hastalanıp vefat edince General Kog'u balbal dikiverdim." (BK G 9); *yugur<ur>ça tédip 1 bar baş aşdımız yuvulu éntimiz* "güç bela ormanlık dağı aştık, yuvarlanarak aşağı indik." (T 26) **Şart Eki** **{-...
  - `Ata 2011, s. 134` (eslesen: _ULuG OGLuM aGRıP YOK_)
    > ...k zaman sınırını belirtir. Orhun Türkçesinde bir yerde tespit edilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. [[s. 134]] Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “ge...


## BK-G-9#2 - Bilge Kağan Yazıtı, Güney 9. satir  (6 kelime)

- **transkripsiyon:** `MeN : TOKuZ : YiGiRMİ : YIL : ŞaD : OLuRTuM`
- **kelime karsiliklari:** BEN : DOKUZ : YİRMİ : YIL : ŞAD : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _YIL ŞaD OLuRTuM_)
    > ...kılu bertim. Eliğ yaşıma Tatabı bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç a...
  - `Ergin 1970, s. 31` (eslesen: _YIL ŞaD_)
    > ...ndasında kırk bin asker geldi. Töngkes dağında hücum edip vurdum. Otuz bin askeri öldürdüm. On bin ......... ise .......... öktüm. Tatabı .......... | öldürdü. Büyük oğlum hastalanıp yok olunca Ku'yu, generali balbal olarak diki verdim. [[s. 31]] Ben on dokuz yıl şad olarak oturdum, on dokuz yıl kağan olarak oturdum, il tuttum. Otuz bir...........| Türküm için, milletim için iyisini öylece kazanı verdim. Bu kadar kazanıp babam kağan köpek yılı, onuncu ay, yirmi altıda uçup gitti. Domuz yılı, beşinci ay, yirmi yedide yas t...
  - `Tekin 2003, s. 119` (eslesen: _YIL ŞaD_)
    > ...bağlayıcısı olarak kullanılır: a) Cümlenin öznesi olarak: *bän äbgärü tüşäyin* "Ben karargaha ineyim" (T 30) *bän saŋa nä ayayin* "Ben sana (daha başka) ne diyeyim?" (T 32) *bän yırdınta yan tägäyin* "Ben kuzey tarafından saldırayım" (T 11) *män tokuz yegirmi yıl şad olortum* "Ben on dokuz yıl Şad (olarak) hüküm sürdüm" (BK G 9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (...
  - `Tekin 1998, s. 35` (eslesen: _ŞaD OLuRTuM_)
    > ...m. Ol (tJörüde üze eçim kağan olurtı. Olurupan Türük bodunuğ yiçe itdi, yiçe iğitti. Çığariyığ bay kıltı, azığ üküş kıltı. Eçim kağan olurtukka özüm tiğin erkl....... [[s. 35]] VE 5, ANAMA | Tefnğri yarlıkaduk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Şad olurtum. Eçim kağan birle ilgerü Yaşıl üğüz Şantuünğ yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz, Köğmen aşa Kırkız yirinğe teği sülledimiz. Kamağı| biş otuz sülledimliz, lüç yeğir|mi (süngüşdümiz. İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız. Ti...
  - `Tanyeri, s. 5` (eslesen: _YIL ŞaD_)
    > ...dır. Yalnızca Kül Tigin'in olmadığı zamanlarda geçen olaylar farklıdır. İlteriş Kağan'ın oğlu, Kapgan Kağan'ın yeğeni, Tonyukuk'un damadı ve Köl Tigin'in ağabeyi olan Bilge Kağan; 19 yıl şadlık, 19 yıl da kağanlık yapmış olan büyük bir devlet adamıdır. Türk tarihinin en büyük hükümdarlarından biri ve Türk hitabet sanatının ilk büyük ismidir. Türk edebiyatının ilk isimleri olan...
  - `Tekin 1998, s. 28` (eslesen: _YiGiRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...


## BK-G-9#3 - Bilge Kağan Yazıtı, Güney 9. satir  (5 kelime)

- **transkripsiyon:** `TOKUZ : YİGiRMİ : YIL : KaGaN : OLuRTuM`
- **kelime karsiliklari:** DOKUZ : YİRMİ : YIL : KAĞAN : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _YIL KaGaN OLuRTuM_)
    > ...bodun Kıtanyda adrlıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "...
  - `Ergin 1970, s. 31` (eslesen: _YIL KaGaN_)
    > ...ngkes dağında hücum edip vurdum. Otuz bin askeri öldürdüm. On bin ......... ise .......... öktüm. Tatabı .......... | öldürdü. Büyük oğlum hastalanıp yok olunca Ku'yu, generali balbal olarak diki verdim. [[s. 31]] Ben on dokuz yıl şad olarak oturdum, on dokuz yıl kağan olarak oturdum, il tuttum. Otuz bir...........| Türküm için, milletim için iyisini öylece kazanı verdim. Bu kadar kazanıp babam kağan köpek yılı, onuncu ay, yirmi altıda uçup gitti. Domuz yılı, beşinci ay, yirmi yedide yas töreni yaptırdım. Bukağ vali ..........
  - `Tekin 1998, s. 20` (eslesen: _KaGaN OLuRTuM_)
    > ...Açsık tosık ömez sen; bir todsar âçsık ömez sen. [[s. 20]] Antağınğın (G 9) üçün, iğidmiş kağanınğın sabın almatın yir sayu bardığ, kop anta alkıntığ arıltığ. Anta kalmışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G...
  - `Kafesoglu, s. 76` (eslesen: _YIL KaGaN_)
    > ...üyordu440. Fakat bu evlenme gerçekleşmedi, çünkü Bilge yukarıda adı geçen Buyruk-çor tararından zehirlendi441. Ölünceye kadar, başta bu nazır olmak üzere işbirlikçilerini bertaraf eden Bilge nihayet 25 Kasım 734'de öldü442, 50 yaşında idi. 19 sene "şad" ve 19 yıl kağan olmuş, Çin kaynaklarında da belirtildiği üzere, "Türk milletini çok sevmek" ile temayüz etmiş idi. [[s. 76]] Türk milletinin ebedîliğine olan inancını "Ey Türk milleti, üstte gök yıkılmaz, altta yer delirtmezse, devletini, töreni kim bozabilir?"443 diye ifade...
  - `Tekin 1998, s. 28` (eslesen: _YİGiRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...
  - `Tekin 2003, s. 128` (eslesen: _YİGiRMİ_)
    > ...bizni ölürtäçik-ök* "Er veya geç bizi mutlak öldürecektir" (T 29-30) ## Sayılar ## Asıl sayılar **280.** Asıl sayılar (1-10 arası sayılar ve onluklar, yüzlükler vb.) şunlardır: *bir, eki, üç, tört, beş ~ biş, altı, yeti ~ yiti, säkiz, tokuz, on, yegirmi ~ yigirmi, otuz, kırk, älig, altmış, yetmiş, säkiz on, tokuz on, yüz, bıŋ ~ biŋ ~ miŋ, bir tümän* (BK G 1) ## Onluklararası Sayılar **281.** Onluklararası sayılar bir sonraki onluğa atılacak adımlar olarak düşünülür ve buna göre adlandırılır. [s. 129] # s. 129 — ORH...


## BK-G-9#4 - Bilge Kağan Yazıtı, Güney 9. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `İL : TUTDuM : OTuZ : aRTUKI : BİR ---`
- **kelime karsiliklari:** İL : TUTTUM : OTUZ : ARTI : BİR ---
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _İL TUTDuM OTuZ aRTUKI_)
    > ...ıltı .............ı. Te Tölüğker tağka |............) (G8) Ku Senğün başadu tüm. TPatabi. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı L...
  - `Tekin 1998, s. 38` (eslesen: _OTuZ aRTUKI_)
    > .... Kağanın, Yabgulsıln şadın anta ölürtüm, ilin anta altım. Otuz yaşıma Beş balık tapa süledim. [[s. 38]] Altı yoli sünğgüşdüm DERSTE Slüsin kop ölllürtüm. Anta içreki ne kişi tinl..-:<::: Ji yok Iboltlaçı erlti sas Ja okığalı kelti. Beş balık anı üçün ozdı. Otuz artukı (D 29) bir yaşıma Karluk bodun bufigsuz (erlür barur erkli yağı boltı. Tamağ Iduk Başda süngüşdümiz. Karluk bodunuğ ölürtüm, anta altım |............... Jdım (Baslmıl kara |.. ÖRER | Karluk bodun tirlilip kelti ................)m öllürtüm)|. Tolkuz Oğluz men...
  - `Tekin 2003, s. 129` (eslesen: _OTuZ aRTUKI_)
    > ...iş* "67" (Begre b 27), *säkiz yetmiş* "68" (Hem.-Çır. 9), *tokuz säkiz on* "79" (Elegest I 5), vb. 3. Asıl Orhon yazıtlarında 30'dan sonraki sayılar genellikle katmalı yapılardır. Bu yapılarda *artukı* "fazlası, artı" sözcüğü birleştirici olarak kullanılır: *otuz artukı bir* "31" (BK G 9), fakat *bir kırk* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Eleg...
  - `Ata 2011, s. 114` (eslesen: _OTuZ aRTUKI_)
    > ...unu anlarız ve kalıptaki onluk hane yerine 30’u koyarız. Böylece, T. Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer:...
  - `Ata 2011, s. 107` (eslesen: _OTuZ aRTUKI_)
    > ...olduğunu anlarız ve kalıptaki onluk hane yerine 30’u koyarız. Böylece, T. Tü. yirmi sekiz = Orh. Tü. sekiz otuz denkliğini kolayca bulabiliriz. d. [[s. 107]] Orhun yazıtlarında 30’dan sonraki sayılar artukı ‘fazlası, artı’ sözcüğü getirilerek de yapılmıştır: otuz artukı bir ‘31’ BK G9 (Bu sayı KT K2’de bir kırk olarak geçmektedir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükl...
  - `Tanyeri, s. 20` (eslesen: _OTuZ aRTUKI_)
    > ...3- Göktürk yazısındaki yüzlük ve binlik sayılar, günümüzdeki gibidir. “Biş yüz” sayısı, bugünkü “beş yüz” sayısıyla aynıdır. Aynı şekilde “üç bin” sayısı da günümüzdeki gibidir. Şimdi öğrenmeyi pekiştirmek için birkaç örnek verelim: bir toksan [81]; otuz artukı eki [32]; altı yüz artukı tört kırk [634]; üç bin yiti yüz artukı biş yigirmi [3715]; tört yüz artukı sekiz elli [448] Sayfa: 19 [s. 21] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com...


## BK-G-10#1 - Bilge Kağan Yazıtı, Güney 10. satir  (6 kelime)

- **transkripsiyon:** `TÜRÜKüME : BODuNuMA : YiGiN : aNÇA : KaZGaNU : BİRTiM`
- **kelime karsiliklari:** TÜRKÜME : BOYLARIMA : YEĞİNİ : ANCA : KAZANI : VERDİM
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _aNÇA KaZGaNU BİRTiM_)
    > ...i. Borsası 1(G 9) ölllürti. Uluğ oğlum ağrıp yok bolça Kuğ, Senğünüğ, balbal tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kerg...
  - `Tekin 2003, s. 111` (eslesen: _aNÇA KaZGaNU BİRTiM_)
    > ...elik eki almış adlara eklenir. a) Tekil birinci kişi ekli sözcüklerde: *olortokum+a* "(Tahta) oturduğumda" (BK D 2, K 9) *säkiz yegirmi yaşım+a...* "On sekiz yaşımda..." (BK D 24) ~ *tört yegirmi yaşım+ka* "On dört yaşımda" (BK D 15) *türüküm+ä bodunum+a yeginança kazganu birtim* "Türklerime (ve) halkıma daha iyi bir şekilde öylece kazanıverdim" (BK G 10) *yeti yegirmi yaşım+a...* "On yedi yaşımda..." (BK D 24) Orhon yazıtlarında, Bilge Kağan D 15'teki tek *yaşım+ka* örneğinden başka, şu örnek de vardır: *[ataç]ım+ka* "babacığıma" (...
  - `Tekin 1998, s. 32` (eslesen: _TÜRÜKüME BODuNuMA_)
    > ...kın eşidmedük bodunumın ilgerü kün tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ................
  - `Tekin 2003, s. 109` (eslesen: _KaZGaNU BİRTiM_)
    > ...ya hakkettim" (KT G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg altu]ni+n, ürüŋ kümüşi+n, kırgaklıg kotayi+n kinlig eşgitisi+n özlük ati+n adgıri+n kara kişi+n kök täyäŋi+n türükümä bodunuma kazganu birtim, iti birtim* "Sarı altınlarını, beyaz gümüşlerini, kenarları işlenmiş ipek kumaşlarını, kokulu ipeklilerini, has atlarını, aygırlarını, kara samurlarını ve mavi renkli sincaplarını Türklerime ve halkıma kazanıverdim, ediniverdim" (BK K 11-12) *kül tiginiŋ alt...
  - `Tekin 1998, s. 22` (eslesen: _KaZGaNU_)
    > ...yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüre...
  - `Ata 2011, s. 167` (eslesen: _KaZGaNU_)
    > ...etini (töresini) almışlar. t(a)bg(a)ç k(a)g(a)nka ilin tör(ü)sin (a)lı Türk avam (cahil) halkı şöyle demiş: birm(i)ş türü͡k k(a)ra k(a)m(a)g bod(u)n (a)n͡ça tim(i)ş ill(i)g bod(u)n [ertim ilim “Vatanı olan millet idim, vatanım amtı kanı kimke ilig kazganur men tir şimdi nerede? Kime (kim için) vatan ermiş] kazanırım (fetih yaparım)?” der imiş. 160 [s. 168] D9 k(a)g(a)nl(ı)g bod(u)n (e)rt(i)m “Kağanlı millet idim, kağanım hani?...


## BK-G-10#2 - Bilge Kağan Yazıtı, Güney 10. satir  (9 kelime)

- **transkripsiyon:** `BUNÇA : KaZGaNıP : KaNGıM : KaGaN : IT : YIL : ONuNÇ : aY : aLTI`
- **kelime karsiliklari:** BUNCA : KAZANIP : BABAM : KAĞAN : İT : YILININ : ONUNCU : AYININ : ALTI
- **kanit:**
  - `Tekin 2003, s. 145` (eslesen: _BUNÇA KaZGaNıP KaNGıM KaGaN_)
    > ...birlikte “Dönelim!” dediler” (T 36) **326.** *tükäti* “tümüyle, tamamiyle” < *tükät-i* - *sabımın tükäti eşidgil* “Sözlerimi tümüyle işit!” (KT G 1) - *sabımın tükäti eşid* “Sözlerimi tümüyle işit!” (BK K 1) **327.** *bunça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca...
  - `Olmez 2017, s. 42` (eslesen: _KaGaN IT YIL ONuNÇ_)
    > ...i | *takıgu yıl* | dagaa çıl | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haz...
  - `Tekin 1998, s. 41` (eslesen: _IT YIL ONuNÇ aY_)
    > ...tike birtim. [[s. 41]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelü...
  - `Ata 2011, s. 75` (eslesen: _IT YIL ONuNÇ aY_)
    > ...safe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden...
  - `Ata 2011, s. 68` (eslesen: _IT YIL ONuNÇ aY_)
    > ...safe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden son...


## BK-G-10#3 - Bilge Kağan Yazıtı, Güney 10. satir  (3 kelime)

- **transkripsiyon:** `OTuZKA : UÇA : BaRDI`
- **kelime karsiliklari:** OTUZDA : UÇA : VARDI
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _OTuZKA UÇA BaRDI_)
    > ...]] Men tokuz yeğirmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n |...
  - `Tekin 2003, s. 132` (eslesen: _OTuZKA UÇA BaRDI_)
    > ...ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay altı otuzka uça bardı* "(Babam hakan) Köpek yılının yirmi altısında uçup gitti" (KT KD) *bir yegirminç ay yegirmikä* "on birinci ayın yirmisinde" (MÇ G 11) 2. Bir zarf tümleci olarak: *äŋ ilk togu balıkda süŋüşdümüz* "İlk önce Togu Balık'ta savaştık" (KT K 4) *äŋ ilki togu balıkd...
  - `Ata 2011, s. 115` (eslesen: _OTuZKA UÇA BaRDI_)
    > ...uz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittiniz” ıt yıl onunç ay altı otuzka uça bardı KT KD “köpek yılının onuncu ayının yirmi altısında uçup gitti (vefat etti)” bir yegirminç ay yegirmike Mayan Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. bo...
  - `Olmez 2017, s. 42` (eslesen: _OTuZKA UÇA BaRDI_)
    > ...l | takiy-a | ᠲᠠᠬᠢᠶ᠎ᠠ | | 11 | köpek | 狗 gou | *ıt yıl* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (BK G 10) [G...
  - `Ata 2011, s. 108` (eslesen: _OTuZKA UÇA BaRDI_)
    > ...türdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 [[s. 108]] “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp gittiniz” ıt yıl onunç ay altı otuzka uça bardı KT KD “köpek yılının onuncu ayının yirmi altısında uçup gitti (vefat etti)” bir yegirminç ay yegirmike Mayan Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. [[s. 108]] bodun ilig ikegü (< i...


## BK-G-10#4 - Bilge Kağan Yazıtı, Güney 10. satir  (5 kelime)

- **transkripsiyon:** `LaGZIN : YIL : BiŞİNÇ : aY : YİTİ`
- **kelime karsiliklari:** LAĞZIN : YILININ : BEŞİNCİ : AYININ : YEDİ
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _LaGZIN YIL BiŞİNÇ aY YİTİ_)
    > ...rmi yıl şad olurtum, tokuz |yeğirlmi yıl kağan olurtum, il tutdum. Otüz artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın ku...
  - `Tekin 2003, s. 132` (eslesen: _LaGZIN YIL BiŞİNÇ aY YİTİ_)
    > ...lki kün ölürtüm* "On yedi bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl on...
  - `Ata 2011, s. 115` (eslesen: _LaGZIN YIL_)
    > ...ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayr...
  - `Olmez 2017, s. 43` (eslesen: _LaGZIN YIL_)
    > ...ayının yirmi yedisinde tamamen bitirdik (21 Ağustos 732). KT K-D 10. **takıgu yıl:** *... evime ėkinti ay altı yanıka tüşdüm takıgu yılka olortum ...* "... karargahıma ikinci ayın altısında geri döndüm. Tavuk yılında (757) ...." MÇ B 4 11. **ıt yıl;** 12. **lagzin yıl::** *..... kayım kagan ıt yıl onunç ay altı otuzka uça bardı lagzin yıl bėşinç ay yėti otuzka yog ertürtüm* "babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayında yirmi yedisinde cenaze törenini yaptır...
  - `Tekin 1998, s. 28` (eslesen: _aY YİTİ_)
    > ...a Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka...
  - `Ata 2011, s. 108` (eslesen: _LaGZIN YIL_)
    > ...: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçuda oguz birle süŋüşdümüz KT K6 “üçüncü (olarak) Bolçu’da Oğuz ile savaştık” törtünç ezgenti kadızda süŋüşdüm BK D31 “dördüncü (olarak) Ezgenti Kadız’da savaştım” lagzın yıl biş+inç ay yiti otuzka yog ertürdüm BK G10 “domuz yılı beşinci ayının yirmi yedinci gününde cenaze töreni yaptırdım” koń yılka yeti+nç ay küçlüg alp kaganımda adrılu bardıŋız Ongin 12 [[s. 108]] “koyun yılının yedinci ayı güçlü (ve) cesur hakanımdan ayrılıp g...


## BK-G-10#5 - Bilge Kağan Yazıtı, Güney 10. satir  (3 kelime)

- **transkripsiyon:** `OTuZKA : YUG : eRTÜRTüM`
- **kelime karsiliklari:** OTUZUNDA : YÜ : ERDİRDİM
- **kanit:**
  - `Tekin 1998, s. 28` (eslesen: _eRTÜRTüM_)
    > ...ağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigi...
  - `Olmez 2017, s. 42` (eslesen: _eRTÜRTüM_)
    > ...* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (BK G 10) [Görsel: Louis Bazin'in *Les Systèmes Chronologi...
  - `Tekin 2003, s. 132` (eslesen: _OTuZKA_)
    > ...bin askeri birinci gün öldürdüm" (BK G 1) *yadag süsin ekinti kün kop [ölür]tüm* "Piyade askerini ikinci gün tümüyle öldürdüm" (BK G 1) *ekinti kün örtçä kızıp kälti* "(Düşman) ikinci gün ateş gibi kızıp (üzerimize) geldi" (T 39-40) *lagzın yıl bişinç ay yiti otuzka yog ärtürdüm* "Domuz yılı beşinci ayının yirmi yedinci gününde cenaze törenini yaptırdım" (BK G 10) *koń yılka yetinç ay küçlüg alp kaganımda adrılu bardıŋız* "Koyun yılının yedinci ayında güçlü ve cesur hakanımdan ayrılıp gittiniz" (O 12) *[ı]t yıl onunç ay...
  - `Ata 2011, s. 75` (eslesen: _OTuZKA_)
    > ...Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki ola...
  - `Ata 2011, s. 68` (eslesen: _OTuZKA_)
    > ...öl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. [[s. 68]] Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi altısı”) yani 25 Kasım 734’te ölen Bilge Kağan adına oğlu Tenri Tigin tarafından 735’te diktirilmiştir. Bilge Kağan yazıtının büyük bölümü Köl Tigin yazıtıyla aynıdır. Çok az bir kısım Köl Tigin’in ölümünden sonraki olaylar...


## BK-G-10#6 - Bilge Kağan Yazıtı, Güney 10. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `BUKaG : TUTUK : ---`
- **kelime karsiliklari:** BUKAĞ : TUTUK : ---
- **kanit:**
  - `Ergin 1970, s. 31` (eslesen: _BUKaG_)
    > ...on dokuz yıl kağan olarak oturdum, il tuttum. Otuz bir...........| Türküm için, milletim için iyisini öylece kazanı verdim. Bu kadar kazanıp babam kağan köpek yılı, onuncu ay, yirmi altıda uçup gitti. Domuz yılı, beşinci ay, yirmi yedide yas töreni yaptırdım. Bukağ vali ......... | babası Lisün Tay generalin başkanlığında beş yüz yiğit geldi. Kokuluk .......... altın, gümüş fazla fazla getirdi. Yas töreni kokusunu getirip diki verdi. [[s. 31]] Sandal ağacı getirip öz ............ | Bunca millet saçını, kulağını ...........
  - `Tekin 2003, s. 185` (eslesen: _BUKaG_)
    > ...RHON TÜRKÇESİ GRAMERİ *ärinç* "Ondan sonra erkek kardeşler ağabeyleri gibi yaratılmamış şüphesiz, oğullar babaları gibi yaratılmamış şüphesiz" (KT D 5) *kan yorıp ilteriş kaganka adrıl-madok* "Han (ardı sıra) yürüyüp İlteriş Hakan'dan ayrılmamış" (O sağ 3) *[bükäg]ükdä säkiz oguz tokuz tatar kal-madok* "Bükegük'te Sekiz Oğuz ve Dokuz Tatarlar(dan kimse) kalmamış" (MÇ D 1) *karluk işiŋä käl-mädök* "Karluklar müttefiklerine (buluşacaklarını söyledikleri yere) gelmemişler" (MÇ G 1) *kamış ara kalmiş, täŋri una-madok* "(Bi...
  - `Roux, Altay Turklerinde Olum, s. 20` (eslesen: _TUTUK_)
    > ...eyahatler, XVIL yüzyılda yeniden başladı, ben de bunlardan oldukça yararlandım: Tüccar Jean Struys (öyküleri 1669 tarihlidir); Holstein dükünün elçisi Olearius (1633), Isbrand (1692-1694); ve bir sonraki yüzyılda özellikle J. G. Gmelin (1733-1743), Sibirya'da tutuklanan İsveçli Strahlenberg; J. G. [[s. 20]] Georgi; İL. Katerina tarafından gönderilen bilgin, Pallas (1768). Bazen de, Timkowski (1820-1821) ve P. Huc (1844-1846) gibi şahsiyetlerle [s. 21] BELGELER XIX. yüzyıl gezginlerine değindim. IV. YABANCI TARİHLER V...
  - `Ogel C1, s. 364` (eslesen: _BUKaG_)
    > ...söz ve ünvanlarının tesiri altında idiler. Eski türkçedeki bügü, moğolcaya bögâ ve bö'â şeklinde geçmiştir. Bunu da, ““pehlivan” anlamına moğ. bökâ ile karıştırmamak lâzımdır. Bu sözün türkçe karşılığı bükâ'dir. [[s. 364]] Bu sebeple moğ. bö'eül'ün, türkçesi, bükâgül'dür. Bükâ sözü türkçede, pehlivan “muhafız”, ve hem de yiğit ve alp sözleri gibi “hizmetkâr” anlamına gelebilir. Prof. Bang, türkçede bügâ ve bükü sözleri üzerinde derin olarak durmamıştır. Şekil 42 : Geyikleri kovalıyan Hun ve Macar kartalları, Bu durum...
  - `Tasagil, s. 29` (eslesen: _TUTUK_)
    > ...ıye Eesedy de bakmadığı için, bu elçilik hakkında bilgi vermemektedir, ayrıca hatalı olarak, bu sırada Batı Wei'nin Gök-Tüı klere yardım ettiğini ileri sürmektedir, bkz. aynı makale s. [s. 29] A H M E T TAS AĞIL elçiyle görüştükten sonra, Kuzey Ch'i elçisini tutukladı. Elçi K'u Ti-ch'i'nin kağanı nasıl ikna ettiği açık değildir. Ortaya çıkan sonuç ise Mukan'ın devletinin eski dostu Batı Wei'i doğudaki Ch'ilere karşı tercih etmesidir. Bau Wei devleti Bu geliş meden çok memnun olmuş, elçilikteki başarısından dolayı dönüş...
  - `Ogel C1, s. 160` (eslesen: _TUTUK_)
    > ...iaa, Philadelpbia, 1949, s. 41, 46, 47, 81, 84 n., v.s. [[s. 159]] * Sekiz-Oğuz'lar ikinci Uygur Kağan'ı Mo-Yen Ch'u (Bayan-Çur) Kağan'ın diktirdiği ve ilim âleminde Şine-Usu yazıtı diye anılan yazıtta geçer. [s. 160] OĞUZ DESTANI 149 1. Yafes, 2. Türk, 3. Tutuk, 4. Bulca (veya Abulca)-Han '*, 5. Dib- Yabgu, 6. Kök (veya Kuyuk)-Han !!, 7. Alınca-Han !*, Burada da görülüyor ki, “Yedi-Soy” pirensibi, soykütüğünün kurulmasında bir rol oynamıştır. Şunu unutmamalıyız ki, bizim kitabımız bir tarih eseri değil; Türk mitolo...


## BK-G-11#1 - Bilge Kağan Yazıtı, Güney 11. satir  (5 kelime)

- **transkripsiyon:** `KaŊI : LİSÜN : TaY : SeŊÜN : BaŞaDU`
- **kelime karsiliklari:** BABASI : LİSÜN : TAY : SENGÜ : BAŞTA
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _KaŊI LİSÜN TaY_)
    > ...artukı bir (yaşımaş.................. | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin san...
  - `Ergin 1970, s. 31` (eslesen: _LİSÜN TaY_)
    > ...dum, il tuttum. Otuz bir...........| Türküm için, milletim için iyisini öylece kazanı verdim. Bu kadar kazanıp babam kağan köpek yılı, onuncu ay, yirmi altıda uçup gitti. Domuz yılı, beşinci ay, yirmi yedide yas töreni yaptırdım. Bukağ vali ......... | babası Lisün Tay generalin başkanlığında beş yüz yiğit geldi. Kokuluk .......... altın, gümüş fazla fazla getirdi. Yas töreni kokusunu getirip diki verdi. [[s. 31]] Sandal ağacı getirip öz ............ | Bunca millet saçını, kulağını .......... kesti. İyi binek atını, kara sa...
  - `Tekin 2003, s. 67` (eslesen: _LİSÜN_)
    > ...lnız söz içinde ve sonunda bulunur. Alıntı sözcüklerde ise söz başında bulunabilir. 1. Söz başında: *lagzın* (MÇ K 11), *lagzin* (BK G 10), *lakz(ı)n* "domuz" (İhe-Ashete b 2) < ?, *lü* "ejderha" (O Ek 4) < Çince *lung*, *likän* kişi adı < Çince *Liu-hiang*, *lisün* kişi adı < Çince *Li-ts'ün*. 2. Söz içinde: *balık* "şehir", *älig* "50", *ilig* "hükümdar", *kılıç*, *ölüg* "ölü", *altun* "altın", *alk-* "yok etmek, mahvetmek", *alp*, *ilk*, vb. 3. Söz sonunda: *kısıl* "dar dağ geçidi", *kızıl*, *bol-* "olmak", *bil-*, *...
  - `Tekin 1998, s. 28` (eslesen: _SeŊÜN_)
    > .... (K 11) Ança sakıntım. Közde yaş kelser tıda, köngülte sığıt kelser yanturu sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğ...
  - `Ata 2011, s. 112` (eslesen: _SeŊÜN_)
    > ...z+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkın...
  - `Ata 2011, s. 105` (eslesen: _SeŊÜN_)
    > ...yutuz+ı+n yılkı+sı+n barım+ı+n anta altım BK D24 “çocuklarını, kadınlarını, at sürülerini (ve) mallarını orada aldım” c. +nı: Çok seyrek kullanılan bir ektir. Yalın durumdaki isimlere ulanan bu ek ile belirli nesne durumu yapılır. [[s. 105]] tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka...


## BK-G-11#2 - Bilge Kağan Yazıtı, Güney 11. satir  (4 kelime)

- **transkripsiyon:** `BİŞ : YÜZ : eReN : KeLTİ`
- **kelime karsiliklari:** BEŞ : YÜZ : ERİYLE : GELDİ
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _BİŞ YÜZ eReN KeLTİ_)
    > ........ | (G 10) Türüküme bodunuma yeğin ança kazganu birtim. (Tengri Kağan Yazıtı) Bunça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengr...
  - `Tekin 2003, s. 129` (eslesen: _BİŞ YÜZ_)
    > ...* "31" (KT K 2) *otuz artukı säkiz* "38" (BK G 2) *kırk artukı yeti* "47" (KT KD) ## Niteleme Yapıları **282.** "80" ve "90" onlukları ile yüzler ve binler niteleme yapıları ya da öbekleridir: *säkiz on* "80" (KÇ B 3, Elegest I 5), *tokuz on* "90" (IB 29), *biş yüz* "500" (BK G 11), *yeti yüz* "700" (T 4), *eki bıŋ* "2000" (T 16, 18), *yeti biŋ* "7000" (BK G 1), *bir tümän* "10,000" (KT K 1), *üç tümän* "30,000" (BK G 8), *tört tümän* "40,000" (BK G 8), *beş tümän* "50,000" (BK D 25), *säkiz tümän* "80,000" (BK D 26), *...
  - `Ata 2011, s. 114` (eslesen: _BİŞ YÜZ_)
    > ...açtık” elig+in tutdı KT D38 “elle tuttu” Orhun Türkçesinde isim durum eklerini hatırlamaya çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen...
  - `Ata 2011, s. 107` (eslesen: _BİŞ YÜZ_)
    > ...akla açtık” elig+in tutdı KT D38 “elle tuttu” Orhun Türkçesinde isim durum eklerini hatırlamaya çalışınız. Hatırladığınız ekleri taş ‘dış; taş’ sözcüğüne ekleyiniz. Sayılar 1. Asıl Sayılar a. [[s. 107]] sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000...
  - `Tanyeri, s. 20` (eslesen: _BİŞ YÜZ_)
    > ...den bir birlik sayı gelirse; onluk sayının üzerine birlik sayı doğrudan eklenir. Örneğin “yigirmi artukı yiti” sayısını, “yirmi yedi” biçiminde günümüz sayı sistemine aktarabiliriz. 3- Göktürk yazısındaki yüzlük ve binlik sayılar, günümüzdeki gibidir. “Biş yüz” sayısı, bugünkü “beş yüz” sayısıyla aynıdır. Aynı şekilde “üç bin” sayısı da günümüzdeki gibidir. Şimdi öğrenmeyi pekiştirmek için birkaç örnek verelim: bir toksan [81]; otuz artukı eki [32]; altı yüz artukı tört kırk [634]; üç bin yiti yüz artukı biş...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 128` (eslesen: _BİŞ YÜZ_)
    > ...neme saldı | 11-12 kazan... sancağını)Dı-13 kaz sancağıV;.ş kâfirün tuğiyle şancağını kasan kardaşı kara göne || 12 derelerde depelerde) V'de yok || 13 kâfire... üşdi) V'de yok [s. 128] METİN lis girdi, leşine kuzgun üşdi. On 1 iki bii kâfir kılıçdan kiçdi. Biş yüz Oğuz yigitleri ? şehid oldu. Kaçanını Kazan Big komadı, aman diyenini ? öldürmedi. Kalın Oğuz bigleri toyum oldı. Kazan 4 Big ordusını oğlanını uşağını hazinesini aldı girü * döndi. Altun tahtında yine ivini dikdi. Karaçuk Çobanı © imrabor eyledi. Yidi gün yi...


## BK-G-11#3 - Bilge Kağan Yazıtı, Güney 11. satir  (4 kelime, TAS KIRIGI)

- **transkripsiyon:** `KOKuLuK : Ö --- : aLTUN : KÜMüŞ`
- **kelime karsiliklari:** KOKULUK : Ö --- : ALTIN : GÜMÜŞ
- **kanit:**
  - `Tekin 1998, s. 19` (eslesen: _aLTUN KÜMüŞ_)
    > ...im; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (tahta) oturdum. Sözlerimi baştan sona işitin, önce (siz) erkek kardeşlerim, (ve) oğullarım, birleşik boyum (ve)...
  - `Tekin 2003, s. 145` (eslesen: _aLTUN KÜMüŞ_)
    > ...ŋdakı bodunug nänçä itm[iş] nänçä yaratmiş* “(Babam) Hakan ve amcam Hakan tahta oturduklarında dört bucaktaki halkları ne çok düzenlemiş, ne çok örgütlemişler” (BK K 9) **330.** *buŋsız* “eksiksiz, bol bol, fazla fazla” < *buŋ* “eksiklik, yokluk” + *sız*: - *altun kümüş işgiti kotay buŋsız ança birür* “(Çinliler bize) bol bol altın gümüş ve ipekli kumaşlar veriyor” (KT G 5) - *sarıg altun ürüŋ kümüş kız koduz ägri täbi agı buŋsız kälürti* “(Onlar bize) sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü devele...
  - `Ata 2011, s. 120` (eslesen: _aLTUN KÜMüŞ_)
    > ...lerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dön...
  - `Olmez 2017, s. 22` (eslesen: _aLTUN KÜMüŞ_)
    > ...lay yönetmesi C. Findley'in çalışmasına da yansır (2006, s. 54): Taizong strateji olarak bir yandan Batı Türklerine şirin görünürken bir yandan da Doğu Türkleriyle aralarına nifak sokar. Bu görüş yazıtlardaki şu satırlarda kendisini bulur: *tavgaç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verir...
  - `Ata 2011, s. 113` (eslesen: _aLTUN KÜMüŞ_)
    > ...gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dedil...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 205` (eslesen: _aLTUN KÜMüŞ_)
    > ...kelenmiş ise de yazma nüshada "İÜ nelik" imlâsındadır. Yine bu ira mebDv.I, 412, 13 te ". İĞ nelek", II, 209, oda”, > lek", I11,285,2 de "— “İl nelik" şekillerinde geçmektedir; düşünülsün. * B.A. (#1 Bu kelime basma nüshada gördüğünüz şekilde ise de yazmar Altun kümüş yudhurdum Süyi kalın kim öter "Koç yiğitlerini seçtim, boyunlarını büktürdüm, altınlarını, gümüşlerini aldım; askeri çok kim geçer 7". [[y. 205]] (Bir savaşı anlatarak diyor ki: Tuşman eskerini ayırdım, boyunlarını oğdirdim, bazivelerindeki altın ve gümüşleri...


## BK-G-11#4 - Bilge Kağan Yazıtı, Güney 11. satir  (7 kelime)

- **transkripsiyon:** `KeRGeKSiZ : KeLÜRTİ : YUG : YıPaRIG : KeLÜRüP : TİKE : BİRTİ`
- **kelime karsiliklari:** GEREĞİNDEN : GETİRDİ : YUĞ : YIPARI : GETİRİP : DİKİ : VERDİ
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _YıPaRIG KeLÜRüP TİKE BİRTİ_)
    > ...ça kazganıp kafiğlım Klağan (It yıl onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türü...
  - `Tekin 1998, s. 28` (eslesen: _KeRGeKSiZ KeLÜRTİ_)
    > ...sakıntım. Katığdı sakıntım. [[s. 28]] Eki Şad ulayu iniygünüm, oğlanım, beğlerim bodunum közi kaşı yablak boltaçı tip sakıntım. Yoğçı sığıtçı Kıtany, Tatabı bodun başlayu (K 12) Udar Senğün kelti. Tabgaç kağanta İşiyi Likeng kelti; bir tümen ağı, altun kümüş kergeksiz kelürti. Tüpüt Kağanta Bölön kelti. Kurya, kün batsıkdakı Soğud, Berçik er, Bukarak uluş bodunta Nek Seüğün, Oğul Tarkan kelti. (K 13) On-Ok oğlum Türgiş kağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi b...
  - `Ata 2011, s. 120` (eslesen: _KeRGeKSiZ KeLÜRTİ_)
    > ...ı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T...
  - `Ata 2011, s. 141` (eslesen: _TİKE BİRTİ_)
    > ...dilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “geceleri u...
  - `Ata 2011, s. 113` (eslesen: _KeRGeKSiZ KeLÜRTİ_)
    > ...letimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T SONTAKI İsi...
  - `Ata 2011, s. 134` (eslesen: _TİKE BİRTİ_)
    > ...r yerde tespit edilmiştir: tokuz kat üçürgüŋ topul-gınça teritzün “Dokuz kat keçen delininceye kadar terlesin” IB 50 8. -çA zarf-fiil eki tek örnektedir. [[s. 134]] Asıl eylemden önce işlenen bir eylemi belirtir: ulug oglum agrıp yok bol-ça kug seŋünüg balbal tike birtim “büyük oğlum hastalanıp yok olunca (ölünce) General Ku’yu (öldürüp onun kabrine) taş heykelini diktim” BK G9 9. -mAtI(n) zarf-fiil eki, bugünkü –mAdAn yapılı olumsuz eylem zarfları yapar: tün udı-matı küntüz olur-matı “geceleri uyumadan gündüzleri oturmadan...


## BK-G-11#5 - Bilge Kağan Yazıtı, Güney 11. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `ÇINDaN : IGaÇ : KeLÜRüP : ÖZ : YaRaŞ ---`
- **kelime karsiliklari:** ÇINDAN : AĞACI : GETİRİP : ÖZ : YARAŞ ---
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _IGaÇ KeLÜRüP ÖZ_)
    > ...onunç ay altı otuzka uça bardı. Lağzın yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tar...
  - `Ata 2011, s. 37` (eslesen: _ÇINDaN_)
    > ...ın bulundukları yerlerde 1200’lerden önce yerleşmiş oldukları iddiasına karşılık onlara şimdiki görünümlerini veren birleştirici tarihî olayın Cengiz çağı ve onun kargaşa dolu yılları olduğu tarihçilerin ortak görüşüdür. Orta Türkçe döneminin başlangıcından XV. yy’a kadarki dönem içinde doğuda Harezm Türkçesi ve batıda Eski Oğuz Türkçesi (Eski Anadolu Türkçesi) varken, XV. yy’dan XX. yy’a kadarki dönemde doğuda Çağatayca ve batıda Osmanlıca hâkim olmuştur. Bu iki yazı dili yani Osmanlıca ve Çağatayca XX. yy’...
  - `Olmez 2017, s. 75` (eslesen: _ÇINDaN_)
    > ...özellikle ele alınan alfabelerle ilgili uzun bir de kaynakça yer alır, kısaca değerlendirilişi için bk. M. ÖLMEZ, *TDA* 3, 1993: 322. s. SARTKOJAULI → JOLDASBEKOV TEKİN, Talat, *Boyunca Türkçenin Yazımı*, TDAD 19, Ankara 1997. USER, Hatice Şirin, *Başlangıcından Günümüze Türk Yazı Sistemleri*, Ankara 2006. [s. 76] # s. 074 — Mehmet Ölmez (basılı sayfa numarası 76) 76 Mehmet Ölmez # Eski Türk Alfabesiyle Yazılmış Yazıtlardan Seçmeler ## Kül Têgin Yazıtı **Kül Têgin:** Adına yazıt dikilen Kül Têgin II. Doğu Türk K...
  - `Roux, Eski Din, s. 87` (eslesen: _ÇINDaN_)
    > ...lar." Bir bağ çubuk taşıyan bir erkeği tasvir eden Oxus Hazinesi'ndeki bir eşya L 'Enquete'de anlatılanlara uymaktadır (N.24, s. 86). [[s. 87]] Hunlar da bu kehaneti biliyorlardı ve Anunianus Marcellius'un anlatınu Hero dot'unkini hatırlatmaktadır: "Sorgun ağacından yapılnuş çubuklan demet şeklinde bir araya topluyorlar ve bunların eğri olmamasına dikkat ediyorlar. Daha sonra belirli bazı günlerde bunları birbirinden ayırarak büyü yapıyorlar ve gelecek hakkında bilgi ediniyorlar" (G.l, kitap XXXI). Bu kehanet yöntemi, Na...
  - `Ata 2011, s. 30` (eslesen: _ÇINDaN_)
    > ...Uygurların bulundukları yerlerde 1200’lerden önce yerleşmiş oldukları iddiasına karşılık onlara şimdiki görünümlerini veren birleştirici tarihî olayın Cengiz çağı ve onun kargaşa dolu yılları olduğu tarihçilerin ortak görüşüdür. Orta Türkçe döneminin başlangıcından XV. yy’a kadarki dönem içinde doğuda Harezm Türkçesi ve batıda Eski Oğuz Türkçesi (Eski Anadolu Türkçesi) varken, XV. yy’dan XX. [[s. 30]] yy’a kadarki dönemde doğuda Çağatayca ve batıda Osmanlıca hâkim olmuştur. Bu iki yazı dili yani Osmanlıca ve Çağatayca X...
  - `Roux, Altay Turklerinde Olum, s. 120` (eslesen: _ÇINDaN_)
    > ...ını ve alevden kömürlerin topraktan fışkıracağını söyleyen” “krallar kralının” sözleri olduğuna inanan Bar Hebraeus'un açıklamasına en ufak bir önem verilmemelidir.” Arapların korkusu burada konu dışıdır. Olsa olsa yazar, söz edildiğini işittiği bir Moğol inancından söz ediyor (çünkü kanın toprağa akması halinde bir şeyler olacağına inanılıyor), ancak bu bir varsayımdan öteye gitmemektedir. [[s. 120]] Çevirmenin de daha önce işaret etmiş olduğu üzere, bu varsayım, Havari Pavlus'un Romalılara yazmış olduğu bir mektubu (X...


## BK-G-12#1 - Bilge Kağan Yazıtı, Güney 12. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `BUNÇA : BODuN : SaÇIN : KULKaKIN : Ya --- : BIÇDI`
- **kelime karsiliklari:** BUNCA : BOYLAR : SAÇINI : KULAĞINI : YA[NAĞINI] : BİÇTİ
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _BUNÇA BODuN SaÇIN KULKaKIN_)
    > ...n yıl bişinç ay yiti otuzka yoğ ertürtüm. Bukuğ "BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tarduş beğler, Kül Çor başlayu ulayu Şadapıt ORHON...
  - `Roux, Altay Turklerinde Olum, s. 247` (eslesen: _BUNÇA BODuN SaÇIN_)
    > ...uygulamanın ayrıca Beltirlerde, Gotlarda, Ostiaklarda MO KATANOV, Über die Best., s. 290 ve 275. Hİ JORDANES, XLİX. MR HARVA, s. 291. 1 RUDENKO, Kul'tura, s. 159. [s. 247] CENAZE TÖRENLERİ bir kalıntı olarak bulunduğu görülmektedir." Orhun Yazıtları'nda, bunça bodun saçin ... |bliçdi, tüm bu insanlar saçlarını kestiler! şeklinde bir cümleyi okumak mümkündür. Orhun Yazıtları, saçların bu şekilde kesilip atılması işleminin, ölüm sırasında değil de cenaze töreninin düzenlendiği sırada yapılmış olması gerektiğini göstermektedir. [...
  - `Tekin 1998, s. 21` (eslesen: _BUNÇA BODuN_)
    > ...eri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler) benim sözümü kırmadılar (ve) (G 12) Çin hakanının has sanatçıların...
  - `Tekin 2003, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...anta yası taşka yaratıtdım* "Bin yıllık on bin günlük yazıtımı ve damgamı orada yassı taş üzerine yazdırttım" (MÇ D 9-10) **290.** *bu* gösterme zamirinin eşitlik durumu olan *bunça* "bunca, bu kadar" sözcüğü de belirsizlik sayısı görevi ile kullanılabilir: *bunça bodun kälipän sıgtamiş yoglamiş* "...bunca halk(ların temsilcileri) gelip ağlamış ve yas tutmuş" (KT D 4, BK D 5) *bunça bädizçig tuygun eltäbär käl(ür)ti* "Bunca ressam ve heykeltraşı [s. 135] # s. 135 — ORHON TÜRKÇESİ GRAMERİ Tuygun Elteber getirdi" (KT KD) *bu...
  - `Ata 2011, s. 134` (eslesen: _BUNÇA BODuN_)
    > ...insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre ini...
  - `Ata 2011, s. 127` (eslesen: _BUNÇA BODuN_)
    > ...kılın-mış “yukarıda mavi gök, aşağıda kara toprak yaratıldığında ikisinin arasında insanoğlu yaratılmış” KT D1 terilip yetmiş er bol-mış “toplanıp yetmiş er (kişi) olmuş” BK D11 [[s. 127]] kişi oglı kop ölgeli törü-miş “insanoğlu hep ölümlü yaratılmış” KT K10 bunça bodun kelipen yogla-mış sıgta-mış “bunca halk gelerek yas tutmuşlar, ağlamışlar” KT D4 Bu zamanın olumsuzu -mA-mIş şeklinde değil de –mAdUk şeklinde çekimlenmektedir. anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmad...


## BK-G-12#2 - Bilge Kağan Yazıtı, Güney 12. satir  (11 kelime)

- **transkripsiyon:** `eDGÜ : ÖZLüK : ATIN : KaRA : KİŞİN : KÖK : TeYeŊİN : SaNSıZ : KeLÜRüP : KOP : KOTI`
- **kelime karsiliklari:** İYİ : ÖZLÜK : ATINI : KARA : KİŞİNİ : GÖK : TEYENGİNİ : SANSIZ : GETİRİP : HEP : KOYDU
- **kanit:**
  - `Tekin 2003, s. 146` (eslesen: _ÖZLüK ATIN KaRA KİŞİN_)
    > ...kümüş kärgäksiz kälürti* “On binlerce ipekli kumaş, altın ve gümüşleri eksiksiz olarak getirdiler” (KT K 12) - *altun kümüş kärgäksiz kälürti* “Ziyadesiyle altın ve gümüş getirdiler” (BK G 11), vb. **333.** *sansız* “sayısız” < *sān* “sayı” + *sız*: - *ädgü özlük atin kara kişin kök täyänin sansız kälürüp kop kot(t)ı* “(Onlar) iyi binek atlarını, kara samurları ve mavi sincapları pek çok sayıda getirip bıraktılar” (BK G 12), vb. **334.** *üküş* “çok” (bk. **Belirsizlik Sayıları**). **335.** *antag* “onca, o kadar” < *anı täg* “onun...
  - `Tekin 1998, s. 41` (eslesen: _ATIN KaRA KİŞİN KÖK_)
    > ..."BOOK esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tarduş beğler, Kül Çor başlayu ulayu Şadapıt ORHON YAZITLARI 79 kadınlarını yok ettim TET TE...
  - `Tekin 1998, s. 32` (eslesen: _KÖK TeYeŊİN_)
    > ...rmedük, kulkakın eşidmedük bodunumın ilgerü kün tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodun...
  - `08_Pertev_Naili_Boratav_100_Soruda_Turk_Halk_Folkloru, s. 39` (eslesen: _KaRA KİŞİN_)
    > ...limesi olmalı imiş: «Kara-Köyden geliyorum...» v.b.; yoksa karşısındakini, kafasına elindeki kocaman tarakla vurarak, öldürürmüş. Bu günlerde evlerde bütün taraklan kilitlerler, Kancalar'ın eline geçmesin diye. - Yozgatta bu varlığın adı Congolos'tur; evlere, kara-kışın sonu, zemherinin başında, bir hafta süresince (10 ocakla 17 ocak arası) uğrarmış; bu yedi günlük süreye de congolos derler, bunun için. [[s. 39]] Congolos, açık kalmış yiyecek küplerine tükürür, işer, böylece hastalıklara sebep olurmuş; kimi insanları da, yak...
  - `Tekin 2003, s. 85` (eslesen: _SaNSıZ_)
    > ...I 3, Barık III 2) < *buŋ* "dert, sıkıntı" - *idisiz* "sahipsiz" (KT D 20, vb.) < **ēdi* "sahip" - *kalısız* "tümüyle, tamamiyle, artıksız" (KT K 1, vb.) < **kālı* "kalıntı, artık" - *kärgäksiz* "gereksizce, fazlasiyle" (KT K 12, BK G 11) < *kärgäk* "gerek" - *sansız* "sayısız" (BK G 12) < **sān* "sayı" - *ögs(ü)z* "öksüz, anasız" (KT K 9) - *otsuz* "otsuz" (IB 45) - *subsuz* "susuz" (IB 45), vb. bk. {+sIrA-}. **176.** {+Aş}: - *künäş* "gün ışığı, güneşli yer, güneşli taraf" (IB 57) < *kün* "gün" **177.** {+(X)ş}: - *ag...
  - `Ata 2011, s. 120` (eslesen: _SaNSıZ_)
    > ...n yana kelti “halk öle yite yayan çıplak yine geldi” KT D28 112 [s. 120] Miktar Zarfları Orhun Türkçesinde miktar zarfı olarak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz va...


## BK-G-13#1 - Bilge Kağan Yazıtı, Güney 13. satir  (4 kelime)

- **transkripsiyon:** `TeŊRİ : TeG : TeŊRİ : YaRaTMıŞ`
- **kelime karsiliklari:** TANRI : DEK : TANRI : YARATMIŞ
- **kanit:**
  - `Tekin 1998, s. 15` (eslesen: _TeŊRİ TeG TeŊRİ YaRaTMıŞ_)
    > ...a”, YULG BALI (yolluğ) “Yolluğ” vb. 7.3. Noktalama İşareti Orhon yazıtlarında kullanılan biricik noktalama işareti // işaretidir. [[s. 15]] Bu işaret sözcükleri ya da sözcük öbeklerini ayırmada kullanılır: tüğrl tg : tüğrl : YRTmş : tÜrök : blilgA: KGN : (tengri teğ : tengri : yaratmış : türük : bilge : kağan :) 8. Orhon Alfabesinin Çözümü [s. 16] 28 GİRİŞ Kül Tigin ve Bilge Kağan yazıtlarının 1889 yılında Yadrintsev tarafından bulunmuş olduğunu yukarıda söylemiştik. Bu yazıtlardan birincisinin batı yüzündeki Çince yazıt iyi durumda oldu...
  - `Olmez 2017, s. 102` (eslesen: _TeŊRİ TeG TeŊRİ YaRaTMıŞ_)
    > ...ğu yüzünde 41, güney yüzünde 15 satır vardır. Arada kalan güneydoğu ve güneybatı yüzlerinde birer, batı yüzünde ise kısa yedi satır vardır. Aşağıda metnin doğu yüzünden bir bölüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): (Runik metin: BK D 1-2) *D 1. teŋri teg : teŋri : yaratmış : türük : bilge : kagan : savım : kaŋım : türük bilge kagan .................... altı sir : tokuz oguz : kidiz kerekülüg : begleri : bodunı ............ türük : teŋri ..............* *D 2. üze : kagan : olortum : olortokuma : ölteçiçe : sakınıgma : türük :...
  - `Ogel C2, s. 90` (eslesen: _TeŊRİ TeG TeŊRİ_)
    > ...den yücesin! Kimse bilmez nicesin!*” Bizce bu eöz, Türk düşüncesinde *“*“v âcibül-Vücüd”'”' anlayışının, başka bir anlatışı olsa gerektir. Eski Türklerde, Tanrı'nın vücudu için, “vâcib ül-vücüd” anlayışı var mıydı? [[s. 90]] W.Thomsen'in de yorumuna uyarak, ““Tengri teg Tengri” sözü, Göktürk yazıtlarında, “göğe veya kendine benzer Tanrı ””'inanışının bir ifadesi olmalıydı. 9) Babanın oğlundan canını esirgemesi: Bilindiği üzere, Azrail Deli Dumrul'dan canını istemesi üzerine, babası ile annesine gider ve kendisi yerine, onların can...


## BK-G-13#2 - Bilge Kağan Yazıtı, Güney 13. satir  (11 kelime)

- **transkripsiyon:** `TÜRK : BİLGE : KaGaN : SaBıM : KaŊıM : TÜRK : BİLGE : KaGaN : OLuRTuKINDA : TÜRK : aMTI`
- **kelime karsiliklari:** TÜRK : BİLGE : KAĞAN : SABIM : BABAM : TÜRK : BİLGE : KAĞAN : OTURDUĞUNDA : TÜRKÜN : ŞİMDİ[Kİ]
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


## BK-G-13#3 - Bilge Kağan Yazıtı, Güney 13. satir  (15 kelime)

- **transkripsiyon:** `BeGLeR : KİSRE : TaRDUŞ : BeGLeR : KÖL : ÇOR : BaŞLaYU : ULaYU : ŞaDPIT : BeGLeR : ÖŊRE : TÖLiS : BeGLeR : aPA : TaRKaN`
- **kelime karsiliklari:** BEĞLERİ[NDEN] : SONRA : TARDUŞ : BEĞLERİ : KÖL : ÇOR : BAŞTA : EVVELA : ŞADPIT : BEĞLERİ : ÖNDE : TÖLİS : BEĞLERİ : APA : TARKAN
- **kanit:**
  - `Tekin 1998, s. 41` (eslesen: _BeGLeR KİSRE TaRDUŞ BeGLeR_)
    > ...n ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tarduş beğler, Kül Çor başlayu ulayu Şadapıt ORHON YAZITLARI 79 kadınlarını yok ettim TET TE (G 5) yürüyüp [[s. 41]] VKDRr SUR SERER Tr ME SARAN Taşan Dae Gelme KART 1 ON KG (G 6) SAVAŞİÜM se .trsemn — EMELE ENR Ü ERER REREİRAN (G 7) verdim. Yiğit erlerini öldürüp balba...
  - `Tekin 1998, s. 42` (eslesen: _BeGLeR ÖŊRE TÖLiS BeGLeR_)
    > ...ürk beyleri, batıdaki Tarduş beyleri, Kül Çor başta olmak üzere (bütün) Şadapıt beyler, doğudaki Tölis beyleri, Apa Tarkan (G 14) başta olmak üzere (bütün) Şadapıt beyler, .............. * Bundan sonra Tefiğri Kağan konuşuyor. [s. 42] 80 BİLGE KAĞAN YAZITI beğler, öngre Tölis beğler, Apa Tarklan| (G 14) başlayu ulayu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ...
  - `Tekin 2003, s. 157` (eslesen: _ÇOR BaŞLaYU ULaYU_)
    > ...ve halkımın gözleri kaşları..." (KT K 11) *ataman tarkan...tunyukuk buyla baga tarkan ulayu buyruk...* "Ataman Tarkan... Tunyukuk Buyla Baga Tarkan ve kumandanlar..." (BK G 14) 2. *başlayu* ile biten bir zarf-eylem öbeğinden sonra: *kisrä tarduş bäglär, kül çor başlayu, ulayu şadapıt bäglär...* "Batıda, Tarduş beyleri, Kül Çor önderliğinde, ve Şadapıt beyler..." (BK G 13) *öŋrä töliş bäglär, apa tarkan başlayu, ulayu şad[apıt] bäglär...* "Doğuda, Töliş beyleri, Apa Tarkan önderliğinde, ve Şadapıt beyler..." (BK G 13) *[...] iç buy...


## BK-G-14#1 - Bilge Kağan Yazıtı, Güney 14. satir  (23 kelime, TAS KIRIGI)

- **transkripsiyon:** `BaŞLaYU : ULaYU : ŞaDPIT : BeGLeR : BU --- : TaMaN : TaRKaN : TONYUKUK : BOYLA : BaGA : TaRKaN : ULaYU : BUYRUK : --- IÇ : BUYRUKI : SeBiG : KÖL : İRKiN : BaŞLaYU : ULaYU : BUYRUK : BUNÇA : aMTI`
- **kelime karsiliklari:** BAŞTA : EVVELA : ŞADPIT : BEĞLERİ : BU --- : TAMAN : TARKAN : TONYUKUK : BOYLA : BAĞA : TARKAN : İLE : BUYRUK : --- IÇ : BUYRUĞU : SEBİG : KÖL : İRKİN : BAŞTA : EVVELA : BUYRUK[ÇU] : BUNCA : ŞİMDİ[Kİ]
- **kanit:**
  - `Ergin 1970, s. 32` (eslesen: _TaMaN TaRKaN TONYUKUK BOYLA_)
    > .... 32] O R H U N Â B İ D E L E R İ sözüm: Babam Türk Bilge Kağanı oturduğunda şimdiki Türk beyleri, sonra Tarduş beyleri; Kül Çor başta olarak, arkasından şadpıt beyleri; önde Tölis beyleri; Apa Tarkan | başta olarak, arkasından şadpıt beyleri; bu .......... Taman Tarkan, Tonyukuk Boyla Baga Tarkan ve buyruk .......... iç buyruk; Sebig Kül İrkin başta olarak, arkasından buyruk; bunca şimdiki beyler, babam kağana fevkalade | fevkalade çok iltica etti. .......... [[s. 32]] Türk beylerini, milletini fevkalade çok yüceltti. Övdü .......... babam...
  - `Tekin 1998, s. 42` (eslesen: _BaGA TaRKaN ULaYU BUYRUK_)
    > ...aşta olmak üzere (bütün) Şadapıt beyler, .............. * Bundan sonra Tefiğri Kağan konuşuyor. [s. 42] 80 BİLGE KAĞAN YAZITI beğler, öngre Tölis beğler, Apa Tarklan| (G 14) başlayu ulayu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşı...
  - `Tekin 2003, s. 157` (eslesen: _BaGA TaRKaN ULaYU BUYRUK_)
    > ...e (üvey) annelerim, ablalarım, gelinlerim, prenseslerim" (KT K 9) *eki şad ulayu iniygünüm oglanım bäglärim bodunum közi kaşi* "İki Şadın ve erkek kardeşlerimin, oğullarımın, beylerimin ve halkımın gözleri kaşları..." (KT K 11) *ataman tarkan...tunyukuk buyla baga tarkan ulayu buyruk...* "Ataman Tarkan... Tunyukuk Buyla Baga Tarkan ve kumandanlar..." (BK G 14) 2. *başlayu* ile biten bir zarf-eylem öbeğinden sonra: *kisrä tarduş bäglär, kül çor başlayu, ulayu şadapıt bäglär...* "Batıda, Tarduş beyleri, Kül Çor önderliğinde, ve Şadapıt bey...
  - `Ata 2011, s. 122` (eslesen: _BaGA TaRKaN ULaYU BUYRUK_)
    > ...” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halk...
  - `Ata 2011, s. 115` (eslesen: _BaGA TaRKaN ULaYU BUYRUK_)
    > ...n var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme: kaganı ölti, buyrukı begleri yeme ölti “Hakanları öldü, kumandanları, beyleri de öldü” BK D16 begleri yeme bodunı yeme tüz ermiş “beyleri de halkı da uyum içinde imiş” KT...


## BK-G-14#2 - Bilge Kağan Yazıtı, Güney 14. satir  (4 kelime)

- **transkripsiyon:** `BeGLeR : KaŊıM : KaGaNKA : eRTiŊÜ`
- **kelime karsiliklari:** BEĞLER : BABAM : KAĞANI : YÜCE
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _BeGLeR KaŊıM KaGaNKA eRTiŊÜ_)
    > ...42] 80 BİLGE KAĞAN YAZITI beğler, öngre Tölis beğler, Apa Tarklan| (G 14) başlayu ulayu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan...
  - `Tekin 2003, s. 146` (eslesen: _KaŊıM KaGaNKA_)
    > ...D 4). Bk. **Sontakılar**. **336.** *ärtiŋü* “pek, pek çok” < *ärtin-* “geçmek, ileri gitmek” + *-gü* - *tür[giş kagan] kızın ärtiŋü ulug törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle oğluma alıverdim” (BK K 9) - *bunça matı bäglär kaŋım kaganka ärtiŋü ti mag kıltı* “Bunca sadık beyler babam hakana pek çok övgü yağdırdılar” (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* “(Babam Hakan), Türk beylerini ve halkını pek çok alkışladı ve övdü” (BK G 15) **337.** *takı* “da...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA_)
    > ...li bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?"...
  - `Ata 2011, s. 51` (eslesen: _KaGaNKA_)
    > ...i bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarla...
  - `Olmez 2017, s. 22` (eslesen: _KaGaNKA_)
    > ...nde birçok fetihte bulunur (Findley s. 54). Çin yönetimi adına bu fetihleri yapan Türk halkı zamanla şöyle der: *türk kara kamag bodun ança tėmiş, ėllig bodun ertim, ėlim amtı kanı, kemke ėlig kazganur men, tėr ermiş, kaganlıg bodun ertim, kaganım kanı, ne kaganka işig küçüg bėrür men, tėr ermiş, ança tėp tavgaç kaganka yagı bolmış* "Türk halkı içerisindeki sıradan insanların tamamı şöyle düşünmüş: 'Ülkesi olan bir halktım, ülkem şimdi nerede! Kimin için ülkeler fethediyorum!' dermiş. 'Hakanı olan bir halktım, hakanım...


## BK-G-15#1 - Bilge Kağan Yazıtı, Güney 15. satir  (4 kelime)

- **transkripsiyon:** `eRTiŊÜ : Tİ : eMiG : İTDİ`
- **kelime karsiliklari:** YÜCE : DE : EMİ : ETTİ
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _eRTiŊÜ Tİ_)
    > ...er, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrr...
  - `Tekin 1998, s. 32` (eslesen: _eRTiŊÜ_)
    > ...taki halkları defalarca tanzim etmiş, defalarca düzene sokmuşlar. Tanrı lütfettiği için, tahta oturduğumda (ben de) dört bucaktaki halkları tanzim ettim (ve) düzene soktum Sart yaptım. [s. 32] 60 BİLGE KAĞAN YAZITI Men (Tlürgiş kağanka kızımlın .......... | ertinğü uluğ törün alı birtim. Türlgiş kağan) (K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengr...
  - `Ogel C1, s. 370` (eslesen: _eRTiŊÜ_)
    > ...y/Turumtai|Torumtay kuşu. Metinlerde Turumtay/Turumtai şeklinde geçer. Türkçede turum, “tay”; forum ise “deve yavrusu” anlamına gelir. Bundan da anlaşılıyor ki, sözün orijinal şekli yine “torumtay”' olmalı idi. [[s. 370]] Kırgızlar ise yalnızca, ( Falco vespertinus) cinsinden doğanlara turumtay derlerdi 9, Radlof da turumtay cinsinden olan atmacaların küçük olduklarını ilâve etmeği unutmamıştır $!. Öyle anlaşılıyor ki Kalmuklar da Türk halklarının tesirinde kalarak bu cins doğanlara aynı adı vermişlerdir *?. Kalmukları...
  - `Ogel C2, s. 420` (eslesen: _eRTiŊÜ_)
    > ...an u& anlayışı vardır. Bunun için zaman zaman bu sonsuz denize, “iyilik suyu”, eski türkçesiyle, edgülüğ suvı'' da denmiştir". Ancak bu ok yan us,çok korkunç ve içinde türlü tehlikeleri topluyordu; * * .. korkınçıg, adalıg”'... [[s. 420]] ..Ol Talu y suvı, ertinü Ulu ırmak anlayışı, Uygur çağının sonlarına doğru, eski okya - n u 6 'un yerini almağa başladı. Büyük ırmaklara da, “taluy ögüz” denmeğe ve yazılmağa doğru gidildi*?. Uygur yazılarıyla yazılmış O ğ u z destanı içinde de, bu anlayış devam eder. Ancak Çingiz...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 119` (eslesen: _eRTiŊÜ_)
    > ...manasına gelip başka bir anlam beklenmez: " si kurtuldı", " ya sarmaldı" sözleri gibi ki,"kurtuldu", "sa- [[y. 119]] iz bertindi: M.$İZ eliğ bertindi - el berj tindi", (el, bir geye çarpması yüzün“den veya başka şeyle berelendi ve dermansızlaştı)ş ( e - YE” bertinür - bertinmek). 53077 pürlenâti "SXİZ £lüe yıgaç pürlendi * ağaç tomurcuklandı, pürlendi". Ağaç filiz- lenirse yine böyle denir; EZ iz, [y. 120] pürlenür - pürlenmek). 4) LA Şİ SAL boşgundu: " SAAB Şİ Siler eliği boşgundı - adamın eli boşaldı", (işten adamın...
