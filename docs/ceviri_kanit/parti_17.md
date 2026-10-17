# Ceviri istek paketi 17 - Orhun cumlecikleri

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


## BK-D-11#3 - Bilge Kağan Yazıtı, Doğu 11. satir  (4 kelime)

- **transkripsiyon:** `YaGISI : KOYN : TeG : eRMiŞ`
- **kelime karsiliklari:** YAĞISI : KOYUN : DEK : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 12` (eslesen: _TeG eRMiŞ_)
    > ...inçge erkliğ üzgeli uçuz. 5.5. [[s. 12]] Edebi Sanatlar (Benzetmeler) Orhon yazıtlarında anlatımı zenginleştiren ve güzelleştiren öğelerden biri de sık sık başvurulan benzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı)...
  - `Ata 2011, s. 52` (eslesen: _TeG eRMiŞ_)
    > ...rü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kulad...
  - `Ata 2011, s. 45` (eslesen: _TeG eRMiŞ_)
    > ...lteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe ya...
  - `Tanyeri, s. 24` (eslesen: _TeG eRMiŞ_)
    > ...Üstte mavi gök çökmedikçe, altta yağız yer delinmedikçe, senin ilini ve töreni kim bozabilir?” ifadesiyle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanıl...
  - `Tekin 2003, s. 151` (eslesen: _YaGISI_)
    > ...ars yılka çik tapa yorıdım* "Sonra, Pars yılında Çik'lere doğru yürüdüm" (MÇ D 7) Bu sontakı 3. kişi iyelik ekli adların nesne durumunu yönetir: *yerin tapa bardı* "Ülkelerine doğru gittiler" (MÇ G 2) **354.** *täg* "gibi": *kaŋım kagan süsi böri täg ärmiş, yagısı koñ täg ärmiş* "(Tanrı güç vermiş olduğu için) babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş" (KT D 12) *umay täg ögüm katun* "(Tanrıça) Umay gibi (olan) annem Hatun" (KT D 31) *körür közüm körmäz täg, bilir biligim bilmäz täg boltı* "Gören...
  - `Tekin 1998, s. 9` (eslesen: _eRMiŞ_)
    > ...larda konuşan ve olayları anlatan kişi Bilge Kağan'ın kendisi olduğuna göre [s. 9] 14 GİRİŞ bunların yazarı da o olmalıdır. Büyük bir olasılıkla, Bilge Kağan yazıtların metnini önceden hazırlamış, sonra da bunları taşlar üzerine yazması için Yolluğ Tigin'e vermiştir. Tunyukuk yazıtına gelince bu yazıtta olaylar Bilge Tunyukuk'un ağzından anlatıldığına göre metnin yazarı kendisidir. Yazıcının kim olduğu ise yazıtta belirtilmemiştir. 4. [[s. 9]] Yazıtların İçeriği Orhon yazıtları İkinci Doğu Türk Kağanlığı'nın birinc...


## BK-D-11#4 - Bilge Kağan Yazıtı, Doğu 11. satir  (4 kelime)

- **transkripsiyon:** `İLGeRÜ : KURıGaRU : SÜLeP : TİRMiŞ`
- **kelime karsiliklari:** İLERİ : GERİ : SÜLEYİP : DERLEMİŞ
- **kanit:**
  - `Tekin 1998, s. 34` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ_)
    > ...erinç. Kafiğım kağan yeti yeğirmi erin taşlıklmlış. “Taşra) yolrı|- yur” (tiyin kü eşidip blallık|dlakı)| tağlıkmış, tağdakı| (D 11) inmiş, tirilip yetmiş er bolmış. [[s. 34]] Tengri küç birtük üçün, kafığım Kağan süsi böri teğ ermiş, yağısı kotiy teğ ermiş. İlgerü kurığaru sülep tirmiş kubratmış. Kamağı yeti yüz er bolmış. Yeti yüz er bolup elfsiremiş kağansıramış bodunuğ, küngedmiş, ORHON YAZITLARI 65 imişler şüphesiz, kötü imişler şüphesiz. [[s. 34]] Beyleri (ve) halkı itaatkâr olmadığı için, Çin halkı hilekâr (ve) sahtekâr olduğu için,...
  - `Ata 2011, s. 52` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ_)
    > ...ti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratm...
  - `Ata 2011, s. 45` (eslesen: _İLGeRÜ KURıGaRU SÜLeP TİRMiŞ_)
    > ...unug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal y...


## BK-D-11#5 - Bilge Kağan Yazıtı, Doğu 11. satir  (9 kelime)

- **transkripsiyon:** `KUBRaTMıŞ : KaMaGI : YeTİYüZ : eR : BOLMıS : YeTİYüZ : eR : BOLıP : iLSiReMiŞ`
- **kelime karsiliklari:** TOPARLAMIŞ : TAMAMI : YEDİYÜZ : ER : OLMUŞ : YEDİYÜZ : ER : OLUP : İLSİREMİŞ
- **kanit:**
  - `Tekin 1998, s. 34` (eslesen: _KUBRaTMıŞ KaMaGI_)
    > ...ğirmi erin taşlıklmlış. “Taşra) yolrı|- yur” (tiyin kü eşidip blallık|dlakı)| tağlıkmış, tağdakı| (D 11) inmiş, tirilip yetmiş er bolmış. [[s. 34]] Tengri küç birtük üçün, kafığım Kağan süsi böri teğ ermiş, yağısı kotiy teğ ermiş. İlgerü kurığaru sülep tirmiş kubratmış. Kamağı yeti yüz er bolmış. Yeti yüz er bolup elfsiremiş kağansıramış bodunuğ, küngedmiş, ORHON YAZITLARI 65 imişler şüphesiz, kötü imişler şüphesiz. [[s. 34]] Beyleri (ve) halkı itaatkâr olmadığı için, Çin halkı hilekâr (ve) sahtekâr olduğu için, (aldatıcı ve kand...
  - `Ata 2011, s. 52` (eslesen: _KUBRaTMıŞ KaMaGI_)
    > ...a yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış...
  - `Tekin 1998, s. 23` (eslesen: _eR BOLMıS_)
    > ...p (daha) yükseğe kaldırmışlar muhakkak ki. Babam Hakan on yedi adamla baş kaldırmış. (İlteriş) baş (D 12) kaldırıyor diye haber alıp şehirdekiler dağa çıkmış, dağdakiler (şehire) inmiş, derlenip toplanıp yetmiş kişi olmuşlar. [s. 23] 42 KÜLTİGİN YAZITI miş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıç...
  - `Olmez 2017, s. 20` (eslesen: _eR BOLMıS_)
    > ...rk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler. Babam hakan on yedi savaşçıyla isyan etmiş. 'İsyan başlıyor' diye haber gelince şehirdekiler (de) isyan etmişler. Dağda...
  - `Ata 2011, s. 45` (eslesen: _KUBRaTMıŞ KaMaGI_)
    > ...gerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları...
  - `Ogel C2, s. 158` (eslesen: _eR BOLıP_)
    > ...pek v', girerek; kara köpek gibi çıktı”': Yani sövüp, saydı. Söylemediğini bırakmadı. 9 “Teeret (taharet) kıldı, namasokidi'": Proben.İV, 5s. 102/133. [[s. 158]] * Sihirli yüzük için, ““keremetli yüzük** deniliyor: A. eaer. a. yer. 9 Don değiştirme, “Kepter bolıp”, “laçın bolıp", yani güvercin olup. laçın (atmaca) olup gibi, günlük sözlerle söyleniyordu: Proben, IV, a. 101133. “ Don değiştirtm e, “kılmak” sözü ile anlatılıyordu: **.. Onbir kuş kılıp, koydu...'”:Proben, IV, e. 122/158, # Radlof, Hörterbuch, 1, s. 564...


## BK-D-11#6 - Bilge Kağan Yazıtı, Doğu 11. satir  (3 kelime)

- **transkripsiyon:** `KaGaNSıRaMıŞ : BODuNıG : KÜŊeDMiŞ`
- **kelime karsiliklari:** KAĞANSIRAMIŞ : BOYLARI : CARİYE EDİLMİŞ
- **kanit:**
  - `Olmez 2017, s. 64` (eslesen: _KaGaNSıRaMıŞ BODuNıG KÜŊeDMiŞ_)
    > ...Tar B 3); *teŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I revived and nu...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNSıRaMıŞ_)
    > ...halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ...
  - `Tekin 2003, s. 170` (eslesen: _KaGaNSıRaMıŞ_)
    > ...tig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve mecalsiz bir halde yürüyor idiniz" (KT G 9) *ıda taşda kalmişi kubranıp yeti yüz boltı* "Dağda bayırda kalmış olanları toplanıp yedi yüz (kişi) oldu" (T 4) 2. Eylem sıfatı olarak: *elsirämiş kagansıramiş bodun* "devletsiz ve hakansız kalmış halk" (KT D 13) *yir sayu barmiş bo[dun]* "her yere gitmiş halk" (BK D 22) *igidmiş kaganıŋın sabin almatin* "(seni) doyurmuş olan hakanının sözünü dinlemeden" (KT G 9) *äçümüz apamız tutmiş yir sub* "atalarımızın dedeleri...
  - `Ata 2011, s. 52` (eslesen: _KaGaNSıRaMıŞ_)
    > ...ip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz:...
  - `Tekin 1998, s. 23` (eslesen: _KÜŊeDMiŞ_)
    > ...ar. [s. 23] 42 KÜLTİGİN YAZITI miş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kur...
  - `Ata 2011, s. 45` (eslesen: _KaGaNSıRaMıŞ_)
    > ...yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, hal...


## BK-D-11#7 - Bilge Kağan Yazıtı, Doğu 11. satir  (5 kelime)

- **transkripsiyon:** `KULaDMıŞ : BODuNıG : TÜRK : TÖRÜSÜN : IÇGıNMıŞ`
- **kelime karsiliklari:** KUL EDİLMİŞ : BOYLARI : TÜRK : TÖRESİNİ : TERK ETMİŞ
- **kanit:**
  - `Olmez 2017, s. 64` (eslesen: _KULaDMıŞ BODuNıG_)
    > ...çün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I revived and nurtured the people...
  - `Tekin 1998, s. 23` (eslesen: _TÖRÜSÜN IÇGıNMıŞ_)
    > ...ş er bolmış. Tefnğri küç birtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı...
  - `Tekin 1998, s. 11` (eslesen: _KULaDMıŞ_)
    > ...kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağın (arıp) “Tatlı sözlerle, yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? S...
  - `Ata 2011, s. 53` (eslesen: _KULaDMıŞ_)
    > ...ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge H...
  - `Tekin 2003, s. 154` (eslesen: _IÇGıNMıŞ_)
    > ...ar Çin'e) yaklaşıp yerleştikten sonra (Çinliler) kötü niyetlerini düşünürlermiş" (KT G 5) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) *ol kan yok boltokda kisrä el yitmiş ıçgınmiş* "O han öldükten sonra (da) devlet yok olup gitmiş" (O ön 1) [s. 155] # s. 155 — ORHON TÜRKÇESİ GRAMERİ *anta kisrä kaŋım kagan uçdı* "Ondan sonra babam hakan vefat etti" (MÇ K 12) **362.** *üzä* "üstüne, üzerine; -a göre, gereğince": *kişi oglınta üzä äçü...
  - `Ata 2011, s. 46` (eslesen: _KULaDMıŞ_)
    > ...yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde...


## BK-D-12#1 - Bilge Kağan Yazıtı, Doğu 12. satir  (5 kelime)

- **transkripsiyon:** `BODuNıG : eÇÜM : aPAM : TÖRÜSİNÇE : YaRaTMıŞ`
- **kelime karsiliklari:** BOYLARI : EÇÜM : APAM : TÖRESİNCE : YARATMIŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...irtük üçün, kangım kağan süsi böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla .............
  - `Ata 2011, s. 53` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. Baba...
  - `Ata 2011, s. 46` (eslesen: _eÇÜM aPAM TÖRÜSİNÇE YaRaTMıŞ_)
    > ...an süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş Şad: Köktürklerde yüksek bir unvan. [s. 46] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. [[s. 46]] Babam Hakan on...


## BK-D-12#2 - Bilge Kağan Yazıtı, Doğu 12. satir  (6 kelime)

- **transkripsiyon:** `BOŞGURMıŞ : TÖLİS : TaRDUŞ : BODuNıG : aNDA : iTMiŞ`
- **kelime karsiliklari:** BOŞGURMUŞ : TÖLİS : TARDUŞ : BOYLARINI : [O] ANDA : [DÜZEN] ETMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BOŞGURMıŞ TÖLİS TaRDUŞ_)
    > ...böri teğ ermiş, yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artu...
  - `Ergin 1970, s. 16` (eslesen: _TÖLİS TaRDUŞ_)
    > ...un gibi imiş. Doğuya, batıya asker sevk edip toplamış yığmış. Hepsi | yedi yüz er olmuş. Yedi yüz er olup ilsizleşmiş, kağansızlaşmış milleti, cariye olmuş, kul olmuş milleti, Türk töresini bırakmış milleti, ecdadımın töresince yaratmış, [s. 16] yetiştirmiş. Tölis, Tarduş milletini orda tanzim etmiş. | Yabguyu, şadı orda vermiş. Güneyde Çin milleti düşman imiş. Kuzeyde Baz Kağan, Dokuz Oğuz kavmi düşman imiş. Kırgız, Kunkan, Otuz Tatar, Kitay, Tatabı hep düşman imiş. Babam kağan bunca...... | Kırk yedi defa ordu sevk etmiş, yi...
  - `Tekin 2003, s. 116` (eslesen: _BOŞGURMıŞ_)
    > ...görevinde: *älig+çä är tutdumuz* "Elli kadar asker yakaladık" (T 2) *uygur il[t]äbär yüz+çä ärin ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla doğuya kaçıp gitti" (BK D 37) 3. Görecelik zarfı görevinde: *...bodunug äçüm apam törösin+çä yaratmiş boşgurmiş* "...halkı atalarımın dedelerimin töresince (yeniden) yaratmış (ve) eğitmiş" (KT D 13) *köŋlüŋ+çä uduz* "Dilediğin gibi sevk et!" (T 15) *kıyınıg köŋlüŋ+çä ay* "(Suç işleyenlerin) cezalarını dilediğin gibi ver!" (T 32) *oglanım ärdä marımin+ça bol* "Oğullarım...
  - `Ata 2011, s. 53` (eslesen: _BOŞGURMıŞ_)
    > ...bratmış kamagı yeti yüz er bolmış yeti yüz er bolup elsiremiş kagansıramış bodunug küŋedmiş 45 [s. 53] kuladmış bodunug türük törüsin ıçgınmış bodunug eçüm apam törüsinçe yaratmış boşgurmış “Türk tanrısı (ve) Türk kutsal yer ve su (ruhları) şöyle yapmışlar şüphesiz: Türk halkı yok olmasın diye, halk olsun diye babam İlteriş Kağanı, annem İlbilge Hatunu göğün tepesinde tutup (daha) yukarı kaldırdılar şüphesiz. Babam Hakan on...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...
  - `Tekin 2003, s. 105` (eslesen: _TaRDUŞ_)
    > ...sär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek istese..." (T 5-6) 2. Bir cümleciğin ya da cümlenin yüklem adı olur: - *anta kisrä inisi kagan bolmiş ärinç* "Ondan sonra erkek kardeşleri hakan olmuşlar, şüphesiz" (KT D 4) - *eçim kagan olortokda özüm tarduş bodun üzä şad ärtim* "Amcam hakan tahta çıktığında ben Tarduş halkı üzerine Şad idim" (KT D 17) - *bäglik urı ogluŋ kul boltı, eşilik kız ogluŋ küŋ boltı* "Bey olmaya layık erkek çocukların köle oldu, hanım olmaya layık kız çocukların cariye oldu" (KT D 24) -...


## BK-D-12#3 - Bilge Kağan Yazıtı, Doğu 12. satir  (4 kelime)

- **transkripsiyon:** `YaBGUG : ŞaDıG : aNDA : BiRMiŞ`
- **kelime karsiliklari:** YABGUYU : ŞADI : [O] ANDA : [GÖREV] VERMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YaBGUG ŞaDıG_)
    > ...aru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğü...
  - `Tekin 1998, s. 21` (eslesen: _BiRMiŞ_)
    > ...taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük...
  - `Tekin 2003, s. 108` (eslesen: _BiRMiŞ_)
    > ...(Türk halkını) besledim" (BK D 38) *başlıg+ıg yüküntürmiş, tizlig+ig sökürmiş* "Mağrurlara baş eğdirmişler, güçlülere diz çöktürmüşler" (KT D 2) *bunça bädizçi+g tuygun eltäbär kälü[r]ti* "Bunca sanatçıyı Tuygun Elteber getirdi" (KT KD) *älig yıl iş+ig küç+üg birmiş* "Elli yıl hizmet etmiş" (KT D 8) *kırkız+ıg uka basdımız* "Kırgız'ları uykuda bastırdık" (T 27), vb. **261.** {+(I)n} eki iyelik gövdelerine eklenir. Ek ile gövde sonu ünsüzü arasına giren bağlama ünlüsü genellikle artlık-önlük uyumuna girmez. Şu örnekler b...
  - `Ata 2011, s. 47` (eslesen: _BiRMiŞ_)
    > ...baren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde...
  - `Ata 2011, s. 37` (eslesen: _ŞaDıG_)
    > ...29 [s. 37] olmak üzere üç alt gruba ayrılmıştır. Johanson’da da Orta Dönem, Róna- Tas’ta olduğu gibi XIII. yy’dan itibaren başlar ve çeşitli yazı dillerini kapsar. Eski Türkçe döneminin yukarıda söz ettiğimiz şekilde üç yazı dilini kapsadığına tanık verebileceğimiz diğer bir çalışma, Marcel Erdal’ın A Grammar of Old Turkic (Brill, Leiden-Boston 2004) adlı kitabıdır. Bu kitapta Erdal, Karahanlı Türkçesinin ilk dönem metinlerini Eski Türkçe içinde değerlendirmiştir. Türkiye’de bu konuda en son...
  - `Olmez 2017, s. 29` (eslesen: _ŞaDıG_)
    > ...ap durumdadır. Toplamı 70 satırı aşan yazıt içerik olarak çoğunlukla KT ile örtüşür. Yazıtın KT yazıtından sonra dikildiği tahmin edilmektedir. #### Tunyukuk Yazıtı Tunyukuk yazıtı iki ayrı taştan oluşur. Dikildiği tarih kesin belli değilse de Tunyukuk'un yaşadığı dönem hesap edildiğinde 8. yüzyılın ilk çeyreğinde dikilmiş olması gerekir. Her iki taşın toplamı 62 satırdır. İlk taş daha iyi korunmuş, ikinci taş ise bir hayli yıpranmıştır. Tunyukuk, Göktürk devletinin kurucuları arasında yer alır. Kendi ifadesinden hare...


## BK-D-12#4 - Bilge Kağan Yazıtı, Doğu 12. satir  (5 kelime)

- **transkripsiyon:** `BiRiyE : TaBGaÇ : BODuN : YaGI : eRMiŞ`
- **kelime karsiliklari:** BERİDE : TABGAÇ : BOYLARI : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...3) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağa...
  - `Ata 2011, s. 118` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...+A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısında...
  - `Ata 2011, s. 111` (eslesen: _TaBGaÇ BODuN YaGI eRMiŞ_)
    > ...llanılır. a. +A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Bu...


## BK-D-12#5 - Bilge Kağan Yazıtı, Doğu 12. satir  (7 kelime)

- **transkripsiyon:** `YIRıYA : BaZ : KaGaN : TOKUZOGuZ : BODUN : YaGI : eRMiŞ`
- **kelime karsiliklari:** YIRIDA : BAZ : KAĞAN : DOKUZ-OĞUZ : BOYLARI : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağa...
  - `Ata 2011, s. 118` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısında...
  - `Ata 2011, s. 111` (eslesen: _BODUN YaGI eRMiŞ_)
    > ...r. a. +A eki ile türetilmiş yer zarfları: üze ‘yukarıda, üstte’, bir(i)ye ‘güneyde’, yır(ı)ya ‘kuzeyde’, kur(ı)ya ‘geride, batıda’. üze kök teŋri asra yagız yer kılındukta “yukarıda mavi gök, aşağıda kara toprak yaratıldığında …” [[s. 111]] KT D1 birye tabgaç bodun yagı ermiş “güneyde Çin halkı düşman imiş” BK D12 yırya baz kagan tokuz oguz bodun yagı ermiş “kuzeyde (bize) bağımlı Hakan, Dokuz Oğuz halkı düşman imiş” KT D14 kurya kün batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Bu...


## BK-D-12#6 - Bilge Kağan Yazıtı, Doğu 12. satir  (8 kelime)

- **transkripsiyon:** `KIRKıZ : KURIKaN : OTuZTaTaR : KITaYN : TaTaBI : KOP : YaGI : eRMiŞ`
- **kelime karsiliklari:** KIRGIZ : KURIKAN : OTUZ-TATAR : KITAY : TATABI : HEP : YAĞI : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TaTaBI KOP YaGI eRMiŞ_)
    > ...örüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ)...
  - `Tekin 1998, s. 21` (eslesen: _KOP YaGI eRMiŞ_)
    > ...ğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş,...
  - `Ata 2011, s. 47` (eslesen: _KOP YaGI eRMiŞ_)
    > ...urulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İ...
  - `Olmez 2017, s. 56` (eslesen: _KOP YaGI eRMiŞ_)
    > ...duyu) oradan geri çevirdik." (T 45) **Öğrenilen geçmiş zaman *-mIş* ekiyle kurulur:** *kişi oglınta üze eçüm apam bumın kagan iştemi kagan olormış* "İnsanoğullarının da üzerine atam, dedem Bumın Kağan, İştemi Kağan tahta çıkmışlar." (KT D 1); *tört buluŋ kop yagı ermiş* "(O zamanlar) dört taraf hep düşmanmış." (BK D 3); *kani süsi tėrilmiş* "Hanları, orduları toplandı." (T 28); *uygur kanım tutulmış* "Uygur hanım tutulmuş" (Tes B 4) **Gelecek zaman *-DAçI* ekiyle kurulur:** Gelecek zamanın az sayıda örnekte, özellikl...
  - `Ata 2011, s. 40` (eslesen: _KOP YaGI eRMiŞ_)
    > ...nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … [[s. 40]] “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (v...


## BK-D-12#7 - Bilge Kağan Yazıtı, Doğu 12. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `KaŊıM : KaGaN : BUNÇA --- : KIRK : aRTUKI`
- **kelime karsiliklari:** BABAM : KAĞAN : BUNCA --- : KIRK : ARTI
- **kanit:**
  - `Tekin 2003, s. 133` (eslesen: _KaŊıM KaGaN KIRK aRTUKI_)
    > .... Asıl sayı + *yolı* ( < *yōl* "yol, sefer" + 3. kişi iyelik eki): *bir yılka tört yolı süŋüşdüm* "Bir yılda dört kez savaştım" (BK D 30) *bir yılka biş yolı süŋüşdümüz* "Bir yılda beş kez savaştık" (KT K 4) *altı yolı süŋüşdüm* "Altı kez savaştım" (BK D 28) *kanım kagan... kırk artukı yeti yolı sülämiş* "Babam Hakan (hakanlığı süresince) kırk yedi kez ordu sevketmiş" (KT D 15) 2. Asıl sayı + *kata* (< *kat-* "katmak, ilave etmek"): *elimdä beş kata tägzindim* "Ülkemde beş kez dolandım" (Elegest III 2) *üç kata tägzinti* "... üç kez doland...
  - `Tekin 1998, s. 11` (eslesen: _KaŊıM KaGaN_)
    > ..., yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp...
  - `Tekin 2003, s. 117` (eslesen: _KaŊıM KaGaN_)
    > ...ay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla...
  - `Ata 2011, s. 52` (eslesen: _KaŊıM KaGaN_)
    > ...türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _KaŊıM KaGaN_)
    > ...a isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Tekin 1998, s. 23` (eslesen: _KIRK aRTUKI_)
    > ...is Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağank...


## BK-D-13#1 - Bilge Kağan Yazıtı, Doğu 13. satir  (3 kelime)

- **transkripsiyon:** `YeTİ : YOLI : SÜLeMiŞ`
- **kelime karsiliklari:** YEDİ : YOLU : SÜLEMİŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YeTİ YOLI SÜLeMiŞ_)
    > ...odunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağa...
  - `Ata 2011, s. 116` (eslesen: _YeTİ YOLI SÜLeMiŞ_)
    > ...yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez...
  - `Olmez 2017, s. 45` (eslesen: _YeTİ YOLI SÜLeMiŞ_)
    > ...miz üç yėgirmi sünüşdümiz* "25 defa sefer ettik, 13 defa savaştık", *altı yėgirmi* "16", *altı otuz* "26", *yėti yėgirmi erin taştıkmış* "17 kişiyle ayaklanmış". Otuz veya kırktan sonrası söz konusu olunca *artokı* "artığı, fazlası" kullanılır: *kırk artokı yėti yolı sülemiş* "47 defa sefer etmiş", *otuz artokı bir yaşıma* "31 yaşımda", *otuz artokı üç yaşıma* "33 yaşımda". Bazin'in belirttiğine göre *artokı* ile kurulan sayı sisteminin kalıntıları Yakutlar arasında 19. yüzyıla kadar sürmüştür: *uon orduga bir* (= *\*on artokı b...
  - `Ata 2011, s. 109` (eslesen: _YeTİ YOLI SÜLeMiŞ_)
    > ...biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol, sefer” + 3. kişi iyelik eki): bir yılka tört yolı süŋüşdüm BK D30 “bir yılda dört kez savaştım” bir yılka biş yolı süŋüşdümüz KT K4 “bir yılda beş kez savaştık” kırk artukı yeti yolı sülemiş KT D15 “kırk yedi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak...


## BK-D-13#2 - Bilge Kağan Yazıtı, Doğu 13. satir  (3 kelime)

- **transkripsiyon:** `YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ`
- **kelime karsiliklari:** YİRMİ : SÜNGÜŞ : SÜNGÜŞMÜŞ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _YiGiRMİ SÜŊüŞ_)
    > ...ığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyeti| otuz ........ Na e erti. Kapgan Kağan olurtdum. Tün u...
  - `Tekin 1998, s. 23` (eslesen: _SÜŊüŞ SÜŊüŞMiŞ_)
    > ...Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol tör...
  - `Tekin 1998, s. 28` (eslesen: _YiGiRMİ_)
    > ...tiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (...
  - `Tekin 2003, s. 128` (eslesen: _YiGiRMİ_)
    > ...bizni ölürtäçik-ök* "Er veya geç bizi mutlak öldürecektir" (T 29-30) ## Sayılar ## Asıl sayılar **280.** Asıl sayılar (1-10 arası sayılar ve onluklar, yüzlükler vb.) şunlardır: *bir, eki, üç, tört, beş ~ biş, altı, yeti ~ yiti, säkiz, tokuz, on, yegirmi ~ yigirmi, otuz, kırk, älig, altmış, yetmiş, säkiz on, tokuz on, yüz, bıŋ ~ biŋ ~ miŋ, bir tümän* (BK G 1) ## Onluklararası Sayılar **281.** Onluklararası sayılar bir sonraki onluğa atılacak adımlar olarak düşünülür ve buna göre adlandırılır. [s. 129] # s. 129 — ORH...
  - `Ata 2011, s. 75` (eslesen: _YiGiRMİ_)
    > ...sun’da, Orhun ırmağının eski yatağı yakınlarında, Koço Çaydam Gölü civarında birtakım heykeller, balballar ve yıkıntılar arasında Köl Tigin ve Bilge Kağan yazıtlarını bulur. İki yazıt arasındaki mesafe 1 km kadardır. Köl Tigin yazıtı, koń yılka yiti yigirmi (“koyun yılının on yedisi”) yani 27 Şubat 731’de ölen Köl Tigin adına kardeşi hükümdar Bilge Kağan tarafından 732’de diktirilmiştir. Yazıtta konuşan Bilge Kağan’dır. Bilge Kağan yazıtı ise ıt yıl onunç ay altı otuzka (“köpek yılının onuncu ayının yirmi al...
  - `Tekin 2003, s. 32` (eslesen: _SÜŊüŞ_)
    > ...eki /ş/ ünsüzü: - /kIsI/ *kişi* (genellikle) ~ *kişi* (KT G 7, BK D 28, 34, vb.) - /bIs/ *biş* "5" (genellikle) ~ *biş* (KT K 4, D 18) - /ükÜs/ *üküş* "çok" (KT G 6) ~ *üküş* (genellikle) - /kÜms/ *küm(ü)ş* "gümüş" (BK G 11) ~ *küm(ü)ş* (genellikle) - /sÜŋs/ *süŋüş* "savaş" (KT D 15) ~ *süŋ(ü)ş* (genellikle) Geçmiş zaman sıfat-fiili eki {-mIş} Bilge Kağan yazıtında genellikle /ş/ harfi ile, fakat Kül Tigin yazıtı ile öbür runik metinlerde ön /s/ harfi ile yazılmıştır. Bu yazım {-mIş} ekinin Orhon Türkçesinde genellikle...


## BK-D-13#3 - Bilge Kağan Yazıtı, Doğu 13. satir  (5 kelime)

- **transkripsiyon:** `TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLSiReTMiŞ`
- **kelime karsiliklari:** TANRI : BUYURDUĞU : İÇİN : İLLİYİ : İLSİRETMİŞ
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN İLLiGiG iLSiReTMiŞ_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda kaltım. Ol (tJörüde ü...
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmi...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş...


## BK-D-13#4 - Bilge Kağan Yazıtı, Doğu 13. satir  (5 kelime)

- **transkripsiyon:** `KaGaNLıGıG : KaGaNSıRaTMıŞ : YaGIG : BaZ : KILMıŞ`
- **kelime karsiliklari:** KAĞANLIYI : KAĞANSIRATMIŞ : YAĞIYI : BAZ : KILMIŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ YaGIG BaZ KILMıŞ_)
    > ...rmiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çı...
  - `Tekin 1998, s. 11` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ_)
    > ...Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip...
  - `Tekin 2003, s. 215` (eslesen: _KaGaNLıGıG KaGaNSıRaTMıŞ_)
    > ...için, ölecek halkı diriltip doyurdum" (BK D 33) - *üzä täŋri as[ra] yer yarlıkadok üç[ün]... bodunumın... konturtum* "Yukarıda gök aşağıda (da) toprak (öyle) buyurduğu için... halkımı... yerleştirdim" (BK K 10-11) - *täŋri yarlıkadok üçün, illigig ilsirätmiş, kaganlıgıg kagansıratmiş...* "(Babam Hakan), Tanrı (öyle) buyurduğu için devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış..." (KT D 15, BK D 13), vb. [s. 216] # s. 216 — TALAT TEKİN ## Ara Cümle **491.** Bir birleşik cümlenin ya bağımlı yan cümlesi ya da temel cümlesi iç...
  - `Tekin 1998, s. 21` (eslesen: _BaZ KILMıŞ_)
    > ...ız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmiş, iti birmiş. (D 2) Tört bulung kop yağı ermiş. Sü sülepen, tört bulungdakı bodunuğ kop almış, kop baz kılmış. Başlığığ yüküntürmiş, tizliğiğ sökürmiş. [[s. 21]] İlgerü Kadırkan yışka teği, kirü Temir Kapığka teği konturmış. Ekin ara (D 3) idi oksuz Kök Türük <iti> ança olurur ermiş. Bil<g>e kağan ermiş, alp kağan ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erin...
  - `Tekin 2003, s. 144` (eslesen: _BaZ KILMıŞ_)
    > ...k", *takı* "daha, daha çok", *idi/edi* "hiç", *kiçig* "pek az", *näŋ* "hiç". **324.** *kop* "hep, tümüyle" < ? *ko-* "koymak, bırakmak" *tört buluŋ kop yagı ärmiş* "Dört taraf hep (bize) düşman imiş" (KT D 2) *sü süläpän tört buluŋdakı bodunug kop almiş, kop baz kılmiş* "Ordular sevk ederek dört taraftaki (düşman) halkları hep almış, hep bağımlı kılmış" (KT D 2) *kara türgiş bodun kop içikdi* "Türgiş avam halkı hep (bize) bağımlı oldu" (KT D 38) *ärin kop ölürmiş* "(Onların) adamlarını hep öldürmüş" (KT K 1) *kişi oglı kop...
  - `Ata 2011, s. 47` (eslesen: _BaZ KILMıŞ_)
    > ...ök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının de...


## BK-D-13#5 - Bilge Kağan Yazıtı, Doğu 13. satir  (4 kelime)

- **transkripsiyon:** `TİZLiGiG : SÖKÜRMiŞ : BaŞLıGıG : YÜKüNDÜRMiŞ`
- **kelime karsiliklari:** DİZLİYİ : ÇÖKTÜRMÜŞ : BAŞLIYI : YÜKÜNDÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _TİZLiGiG SÖKÜRMiŞ BaŞLıGıG_)
    > ...ı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş...
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


## BK-D-13#6 - Bilge Kağan Yazıtı, Doğu 13. satir  (8 kelime)

- **transkripsiyon:** `KaŊıM : KaGaN : aNÇA : İLiG : TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ`
- **kelime karsiliklari:** BABAM : KAĞAN : ANCAK : İLİ : TÖREYİ : KAZANIP : UÇA : VARMIŞ
- **kanit:**
  - `Ata 2011, s. 142` (eslesen: _KaŊıM KaGaN aNÇA İLiG_)
    > ...a (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylem...
  - `Tekin 1998, s. 35` (eslesen: _İLiG TÖRÜG KaZGaNıP UÇA_)
    > ...ağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda kaltım. Ol (tJörüde üze eçim kağan olurtı. Olurupan Türük bodunuğ yiçe itdi, yiçe iğitti. Çığariyığ bay kıltı, azığ üküş kıltı. Eçim kağan olurtukka...
  - `Ata 2011, s. 135` (eslesen: _KaŊıM KaGaN aNÇA İLiG_)
    > ...yü bir-miş “doğuda (gün doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 [[s. 135]] bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini a...


## BK-D-13#7 - Bilge Kağan Yazıtı, Doğu 13. satir  (8 kelime)

- **transkripsiyon:** `KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ : KaŊıM`
- **kelime karsiliklari:** BABAM : KAĞANIN : BAŞINA : BAZ : KAĞANI : BALBAL : DİKMİŞ : BABAM
- **kanit:**
  - `Tekin 2003, s. 148` (eslesen: _KaŊıM KaGaNKA BaŞLaYU BaZ_)
    > ...ay., *ekinti* “ikinci olarak”, *yana* “yine, tekrar, ikinci kez”, *äŋ ilk*, *äŋ ilki* “ilk olarak, ilk önce”. **343.** *başlayu* < *\*başla-* “başlamak”: - *başlayu kırkız kaganıg balbal tikdim* “İlk olarak Kırgız hakanının taş heykelini diktim” (KT D 25) - *kaŋım kaganka başlayu baz kaganıg balbal tikmiş* “(Amcam hakan), babam hakan için ilk olarak bağımlı hakanın taş heykelini dikmiş” (KT D 16) **344.** *ulayu* < *\*ula-* “birleştirmek” < *\*ul* “temel, esas, başlangıç”: - *sabımın tükäti eşidgil ulayu iniygünüm oglanım birki uguşum bo...
  - `Tekin 1998, s. 23` (eslesen: _KaGaNKA BaŞLaYU BaZ KaGaNıG_)
    > ...artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka...
  - `Tekin 1998, s. 42` (eslesen: _KaŊıM KaGaNKA_)
    > ...BİLGE KAĞAN YAZITI beğler, öngre Tölis beğler, Apa Tarklan| (G 14) başlayu ulayu Şadlapıt| beğler, bu |............. | Ataman Tarkan, Turnyukuk Buyla Bağa Tarkan ulayu buyruk 1............. |) İç Buyruk Sebiğ Kül Erkin başlayu ulayu buyruk, bunça matı beğler kanğım kağanka ertinğü (G 15) ertiniğü ti mağ (?) kılltı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge...
  - `Tekin 2003, s. 146` (eslesen: _KaŊıM KaGaNKA_)
    > ...D 4). Bk. **Sontakılar**. **336.** *ärtiŋü* “pek, pek çok” < *ärtin-* “geçmek, ileri gitmek” + *-gü* - *tür[giş kagan] kızın ärtiŋü ulug törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle oğluma alıverdim” (BK K 9) - *bunça matı bäglär kaŋım kaganka ärtiŋü ti mag kıltı* “Bunca sadık beyler babam hakana pek çok övgü yağdırdılar” (BK G 14-15) - *[kaŋım kagan t]ürük bäglärin bodunin ärtiŋü ti mag itdi ögd[i]* “(Babam Hakan), Türk beylerini ve halkını pek çok alkışladı ve övdü” (BK G 15) **337.** *takı* “da...
  - `Tekin 1998, s. 22` (eslesen: _KaGaNKA_)
    > ...li bodunlığ yofngğaşurtukın üçün, Türük bodun, illedük ilin ıçgınu ıdmış, (D 7) kağanladuk kağanın yitürü ıdmış. Tabgaç bodunka, beğlik uri oğlın kul boltı, eşilik kız oğlin küng boltı. Türük beğler Türük âtın ıttı; Tabgaçgı beğler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim am...
  - `Tekin 2003, s. 126` (eslesen: _KaGaNKA_)
    > ...TALAT TEKİN 7. *nälök* "niçin?" < *\*nälä ök*: *kanıgı nälök ölgäy ol* "Yavuklusu niçin ölecek?" (IB 57) *könäki nälök toŋgay* "Kovası niçin donacak?" (IB 57) **276.** *nä* zamiri niteleyici olarak ve zarf görevinde de kullanılır. 1. Niteleyici olarak: *nä kaganka işig küçüg birür män* "Hangi hakana hizmet ediyorum?" (KT D 9, BK D 9) *näŋ yerdäki kaganlıg bodunka büntägi bar ärsär nä buŋi bar ärtäçi ärmiş* "Herhangi bir ülkedeki hakanlı bir halkın böylesi bir (yöneticisi) olursa (o halkın) ne sıkıntısı olacakmış (ki)?"...


## BK-D-14#1 - Bilge Kağan Yazıtı, Doğu 14. satir  (6 kelime)

- **transkripsiyon:** `KaGaN : UÇDUKDA : ÖZüM : SeKİZ : YaŞDA : KaLTıM`
- **kelime karsiliklari:** KAĞAN : UÇTUĞUNDA : ÖZÜM : SEKİZ : YAŞINDA : KALDIM
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _KaGaN UÇDUKDA ÖZüM SeKİZ YaŞDA KaLTıM_)
    > ...[[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda kaltım. Ol (tJörüde üze eçim kağan olurtı. Olurupan Türük bodunuğ yiçe itdi, yiçe iğitti. Çığariyığ bay kıltı, azığ üküş kıltı. Eçim kağan olurtukka özüm tiğin erkl....... [[s. 35]] VE 5, ANAMA | Tefnğri yarlıkaduk üçün (D 15) tört yeğirmi yaşımka Tarduş bodun üze Ş...
  - `Tekin 1998, s. 25` (eslesen: _KaGaN UÇDUKDA_)
    > ...ğ bay kıltım. Az bodunuğ üküş kıltım; ığar elliğde, fığar kağanlığda yiğ kıltım. Tört bulungdakı|) (D 30) bodunuğ kop baz kıltım, yağısız kıltım. Kop mahga körti, işiğ küçüğ birür. [[s. 25]] Bunça törüğ kazganıp inim Kül Tigin özi ança kergek boltı. Kafiğım kağan uçdukda inim Kül Tigin yitli yaşda kaltı. iLe 1) (D 31) Umay teğ öğüm katun kutınga, inim Kül Tigin er at bultı. Altı yeğirmi yaşınğa, eçim kağan ilin törüsin ança kazgantı: Altı çub Soğdak tapa süledimiz buzdumız. Tabgaç Ofüğ Totok, biş tümen sü kelti; sünğüşdümiz)....
  - `Tekin 2003, s. 124` (eslesen: _YaŞDA KaLTıM_)
    > ...uğunda ben Tarduş halkının üzerine Şad idim" (KT D 17) *özüm karı boltum ulug boltum* "Ben yaşlandım, ihtiyar oldum" (T 56) *inim kül tigin kärgäk boltı özüm sakıntım* "Kardeşim Prens Kül vefat etti; ben yas tuttum" (KT K 10) *[kaŋım] kagan uçdokda özüm säkiz yaşda kaltım* "(Babam) Hakan vefat ettiğinde ben sekiz yaşımda kaldım" (BK D 1[?4]) *anta kisrä täŋri bilig bertök üçün özüm ök kagan kışdım* "Ondan sonra, Tanrı (bana) akıl verdiği için (onu) ben kendim hakan yaptım" (T 6) 2. *özi* "kendisi, o, onlar": *ekisin özi altız...
  - `Tekin 2003, s. 75` (eslesen: _KaLTıM_)
    > ..."yolda" (KT K 9; T 16, IB 35) < **yōlda* - *boltokda* "olduğunda" (O ön 1, 6) < **bōldokda* ~ *boldum* "oldum" (Barık II 1) - *adrıltım* "ayrıldım" (Uyuk-Turan 1, Kızıl Çıra I 2, vb.) ~ *adrıldım* (Begre 2, vb.) - *altım* "aldım" (BK D 24, vb.) < **aldım* - *kaltım* "kaldım" (BK D 14) < **kāldım* - *kälti* "geldi" (KT K 12, vb.) < **käldi* - *ölti* "öldü" (KT D 19, vb.) < **öldi* ~ *öldüm* (Elegest I 10) - *boltaçı* "olacak" (KT K 9, vb.) < **bōldaçı* - *öltäçi* "ölecek" (KT D 29, vb.) < **öldäçi* **134.** /nd/ > /nt/:...
  - `Tekin 1998, s. 3` (eslesen: _KaGaN_)
    > ...lleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarımı: 2...
  - `Ergin 1970, s. 3` (eslesen: _KaGaN_)
    > ...in verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. Türk de...


## BK-D-14#2 - Bilge Kağan Yazıtı, Doğu 14. satir  (6 kelime)

- **transkripsiyon:** `OL : TÖRÜDE : ÜZE : eÇİM : KaGaN : OLuRTI`
- **kelime karsiliklari:** O : TÖRE : ÜZE[RİNE] : EÇÜM : KAĞAN : OTURDU
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _OL TÖRÜDE ÜZE eÇİM KaGaN OLuRTI_)
    > ...ğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süle...
  - `Ata 2011, s. 122` (eslesen: _ÜZE eÇİM KaGaN OLuRTI_)
    > ...a: Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. 114 [s. 122] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bun...
  - `Ata 2011, s. 115` (eslesen: _ÜZE eÇİM KaGaN OLuRTI_)
    > ...uş halkı üzerine şad idim” BK D15 Açıklama: [[s. 114]] Bu sontakı, bulunma-çıkma durumu ekiyle de kullanılır. [s. 115] kişi ogl+ı+n+ta üze eçüm apam bumın kagan iştemi kagan “insanoğlunun üstüne atalarım dedelerim Bumın Kağan, İştemi Kağan” KT D1 ol törü+de üze eçim kagan olurtı “o töreye göre amcam hükümdar olarak tahta oturdu” KT D 16 Yönelme Durumuyla Kullanılan Sontakılar (tegi) tegi: ilgerü şantuŋ yazı+ka tegi süledim “doğuda Şantung ovasına kadar sefer ettim” KT G3 bunça yir+ke tegi yorıtdım “bunca yere kadar (orduyu) yürüttüm...


## BK-D-14#3 - Bilge Kağan Yazıtı, Doğu 14. satir  (5 kelime)

- **transkripsiyon:** `OLuRıPaN : TÜRK : BODuNıG : YİÇE : İTDİ`
- **kelime karsiliklari:** OTURUP : TÜRK : BOYLARINI : YİNE : [DÜZEN] ETDİ
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _YİÇE İTDİ_)
    > ...nsıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledi...
  - `Olmez 2017, s. 64` (eslesen: _BODuNıG_)
    > ...eŋri küč bėrtök üçün* "Tanrı güç verdiği için" (KT D 12) **{-mIş} :** *anta kalmışı bodun* "orada kalmış olan halk" (MÇ K 3); *ıda taşda kalmışı kuvranıp yeti yüz boltı* "dağda taşta kalanlar toplanıp yedi yüz kişi oldular." (T 4); *ėlsiremiş kağanşıramış bodunıg küñedmiş kuladmış bodunıg* "Ülkesiz ve hakansız kalmış olan halkı, cariye ve köle olmuş halkı" (KT D 13) [s. 65] # s. 063 — Köktürkçe Dersleri (Lessons in Köktürk/Old Turkic) (basılı sayfa numarası 65) ## {-DAçı} : *ölteçi bodunug tırgürü igidtim* "I reviv...


## BK-D-14#4 - Bilge Kağan Yazıtı, Doğu 14. satir  (4 kelime)

- **transkripsiyon:** `İGiTİ : ÇIGaNYıG : BaY : KILDI`
- **kelime karsiliklari:** YEDİRDİ : ÇIĞANYI : BAY : KILDI
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _ÇIGaNYıG BaY_)
    > ...ış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 20` (eslesen: _BaY KILDI_)
    > ...n sonra Wuhammed oğlu Hüseyn, Hüseyn oğlu Mahmud der Xi : "Tanrının devlet güneşini Türk burçlarında doğdurmuş olduğunu ve onların milkleri üzerinde göklerin bütün teğrelerini döndürmüş bulunduğunu gördüm#). Tanrı onlara Türk adını verdi ve onları yaryüzüne ilbay kıldı. Zamanımızın HKakanlarını onlardan çıkardış dünya milletlerinin idare yularını onların ellerine verdi; onları herkese üstün eyledi; kendilerini hak üzere kuvvetlendirdi. [[y. 20]] Onlarla birlikte çalışam, onlardan yana olanı aziz kıldı ve Türkler yüzünden on...
  - `Tekin 1998, s. 8` (eslesen: _KILDI_)
    > ...ittir. 2.3. Tunyukuk Anıtı Tunyukuk anıtı bugün de yerinde dikili duran ve biri öbüründen biraz daha büyük olan iki taştan oluşur. Daha büyük olan birinci taşta 35 satır, daha küçük olan ikinci taşta ise 27 satır bulunmaktadır. Tunyukuk anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğu...
  - `Ergin 1970, s. 9` (eslesen: _KILDI_)
    > ...elerinin bulunuşu insanlığın en büyük O R H U N Â B İ D E L E R İ [s. 9] keşiflerinden biridir. Orhun harfleri ile yazılı kitabelerden daha 12. asırda tarihçi Cuveynî Târih-î Cihangüşâ'sında bahsetmişti, ayrıca Çin kaynakları da çok eskiden bu âbidelerin dikildiğini bildirmekte idi. Fakat 18. ve 19. asırlara kadar Orhun harfli yazılar ve âbideler ilim âleminin meçhulü olarak kalmıştı. Önce Kırgızlara ait mezar taşlarından ibaret bulunan ve tek tük kelimelerle isimleri ihtiva eden Yenisey kitâbeleri bulunmuştur. [[s....
  - `Tekin 2003, s. 35` (eslesen: _KILDI_)
    > ...(BK K 2) - /TGıK/ *tagık-* (KT D 12) - /TşıK/ *taşık-* (BK D 32) - /UDsıKm/ *ud(ı)sık(ı)m* (T 22), vb. 2. Söz başında ve içinde /kı/ ses öbeği değerinde: - /zKıñA/ *azkıña* (KT D 34), fakat /zKñA/ *azk(ı)ña* (T 9) - /KıLp/ *kıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga*...
  - `Ata 2011, s. 21` (eslesen: _KILDI_)
    > ...r, Osman Nedim Tuna ve Talat Tekin. Bunlar içersinde en fazla yayın yapan kişi ise Talat Tekin’dir. Onun özellikle zetasizm ve sigmatizm konularında pek çok yazısı vardır. Konuyla ilgili kaynakçaya bakıldığında adı geçenlerin bu konuda yapmış oldukları çalışmaların bazıları görülecektir. Altay Dil Teorisinin Bugünkü Durumu Yukarıda görüldüğü gibi; başlangıçta Ural-Altay, daha sonra Altay dil...


## BK-D-14#5 - Bilge Kağan Yazıtı, Doğu 14. satir  (3 kelime)

- **transkripsiyon:** `aZIG : ÖKÜŞ : KILDI`
- **kelime karsiliklari:** AZI : ÇOK : KILDI
- **kanit:**
  - `Tekin 1998, s. 8` (eslesen: _KILDI_)
    > ...ittir. 2.3. Tunyukuk Anıtı Tunyukuk anıtı bugün de yerinde dikili duran ve biri öbüründen biraz daha büyük olan iki taştan oluşur. Daha büyük olan birinci taşta 35 satır, daha küçük olan ikinci taşta ise 27 satır bulunmaktadır. Tunyukuk anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğu...
  - `Ergin 1970, s. 9` (eslesen: _KILDI_)
    > ...elerinin bulunuşu insanlığın en büyük O R H U N Â B İ D E L E R İ [s. 9] keşiflerinden biridir. Orhun harfleri ile yazılı kitabelerden daha 12. asırda tarihçi Cuveynî Târih-î Cihangüşâ'sında bahsetmişti, ayrıca Çin kaynakları da çok eskiden bu âbidelerin dikildiğini bildirmekte idi. Fakat 18. ve 19. asırlara kadar Orhun harfli yazılar ve âbideler ilim âleminin meçhulü olarak kalmıştı. Önce Kırgızlara ait mezar taşlarından ibaret bulunan ve tek tük kelimelerle isimleri ihtiva eden Yenisey kitâbeleri bulunmuştur. [[s....
  - `Tekin 2003, s. 35` (eslesen: _KILDI_)
    > ...(BK K 2) - /TGıK/ *tagık-* (KT D 12) - /TşıK/ *taşık-* (BK D 32) - /UDsıKm/ *ud(ı)sık(ı)m* (T 22), vb. 2. Söz başında ve içinde /kı/ ses öbeği değerinde: - /zKıñA/ *azkıña* (KT D 34), fakat /zKñA/ *azk(ı)ña* (T 9) - /KıLp/ *kıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga*...
  - `Ata 2011, s. 21` (eslesen: _KILDI_)
    > ...r, Osman Nedim Tuna ve Talat Tekin. Bunlar içersinde en fazla yayın yapan kişi ise Talat Tekin’dir. Onun özellikle zetasizm ve sigmatizm konularında pek çok yazısı vardır. Konuyla ilgili kaynakçaya bakıldığında adı geçenlerin bu konuda yapmış oldukları çalışmaların bazıları görülecektir. Altay Dil Teorisinin Bugünkü Durumu Yukarıda görüldüğü gibi; başlangıçta Ural-Altay, daha sonra Altay dil...
  - `Olmez 2017, s. 11` (eslesen: _KILDI_)
    > .... Sir G. Clauson'a göre *mete* (*matun/motun* Çince 冒頓 *maodun*), bugün Farsçadan ödünçlediğimiz *bahadır* sözünün en eski şeklidir. *bahadır* ise Moğolca *bagatur*'dan gelmektedir. Moğolca kelime ise Türklerin unuttuğu, Moğolların Türkçeden ödünçlediği bir şekildir. Çince kaynaklarda söz konusu kelime 莫賀咄 *moheduo* olarak görülür. Özetle Clauson'un görüşü bu şekildedir (Clauson 1972: 313b). Bir başka konu da MS tarih sahnesine çıkan Avrupa Hunları ile Asya Hunlarının ırk ve dil bakımından bağlarının bulunmadığıdır. Ço...
  - `Roux, Eski Din, s. 47` (eslesen: _KILDI_)
    > ...sinde odaklanan ve en eskisi 1 1 15 yılına tarihlenen pek çok yazma nüshası günümüze ulaşan Ebu Müslim'e (C.23) ait Köroğlu destanının (C. 7; C.4) bu açıdan zengin olduğu görül mektedir; buna karşın Melik Danişmend Destanı [Danişmendname] (C.22) aynı açıdan bakıldığında hiç de zengin değildir. [[s. 47]] Çok sayıdaki Türk-İran destansı öykünün yanı sıra konuyla uğraşanlar tarafından bilindiği gibi gerçekten belirgin arkaik yapısı olan birçok Türk eseri vardır (C.23, s. 77; Q.88; Q.89; Q.90). "Türk destanları arasında en...


## BK-D-14#6 - Bilge Kağan Yazıtı, Doğu 14. satir  (10 kelime, TAS KIRIGI)

- **transkripsiyon:** `eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TİGiN : eRK --- : İY --- : TeŊRİ : YaRLıKaDUK : ÜÇÜN`
- **kelime karsiliklari:** EÇÜM : KAĞAN : OTURDUĞUNDA : ÖZÜM : TİGİN : ERK --- : İY --- : TANRI : BUYURDUĞU : İÇİN
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _eÇİM KaGaN OLuRTUKDA ÖZüM_)
    > ...Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukda özüm Tarduş bodun üze Şad ertim. Eçim kağan birle ilgerü Yaşıl üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsir...
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda k...
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmi...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇÜN_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş...
