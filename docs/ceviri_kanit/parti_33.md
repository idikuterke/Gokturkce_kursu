# Ceviri istek paketi 33 - Orhun cumlecikleri

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


## TY1-D-1#3 - Tonyukuk Yazıtı, Doğu 1. satir  (7 kelime)

- **transkripsiyon:** `TÜRK : BODuN : OLuRGaLI : TÜRK : KaGaN : OLuRGalI : ŞaNTUŊ`
- **kelime karsiliklari:** TÜRK : BOYLARI : OTURALI : TÜRK : KAĞANI : OTURALI : ŞANTUNG
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRK KaGaN OLuRGalI ŞaNTUŊ_)
    > ...UK YAZITI (G 10) Tülfrk kağanığ), Türk bodunuğ Ötüken yerke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız...
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Tekin 1998, s. 4` (eslesen: _TÜRK KaGaN_)
    > ...lu-İSTANBUL Tel: (490.212) 292 27 12 Faks: (490.212) 292 27 13 Talat Tekin Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk — SİMURG İSTANBUL 1998 [s. 4] İÇİNDEKİLER ÖNSÖZ er arat Ere MENNAN NDEN MEKE İNN Ğİ 6 ÇİTİ Şire ee RAE RAM GERBER ERER 9 1. İlk Türk Kağanlıkları............ 2.0 9 2. Orhon Yazmları. sun RER ELER 10 2.1. Kül Tigin (684-731) Anitt. sess serce 11 2.2. Bilge Kağan (683-734) Anıtı.......... eee 12 Sed LUNMUKUK BANU akis erene sikerek ÜNE ke a Belke 13 3, Yazıtların Yazarı ve Yazıcısı................


## TY1-D-1#4 - Tonyukuk Yazıtı, Doğu 1. satir  (4 kelime)

- **transkripsiyon:** `BaLIKA : TaLUY : ÖGüZKE : TeGMiŞ`
- **kelime karsiliklari:** BALIĞA : TALUYA : ÖGÜZE : DEĞMİŞ[LİĞİ]
- **kanit:**
  - `Ogel C1, s. 480` (eslesen: _TaLUY ÖGüZKE TeGMiŞ_)
    > ...karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan da Amu-Derya'ya verilen bir addır. Böyle olmasına rağmen, Amu ırmağının başına “Taluy” şeklinde bir sıfatın eklenilmiş olması, şimdilik pek...
  - `Ergin 1970, s. 28` (eslesen: _BaLIKA_)
    > ...a Türgişe doğru Altın ormanını aşarak İrtiş nehrini geçip yürüdüm. Türgiş kavmini uykuda bastım. Türgiş kağanının ordusu ateş gibi, fırtına gibi geldi. | Bolçuda savaştık. Kağanını, yabgusunu, şadını orda öldürdüm. [[s. 28]] İlini orda aldım. Otuz yaşımda Beş Balıka doğru ordu sevk ettim. Altı defa savaştım......... askerini hep öldürdüm. Onun içindeki ne kadar insan ........ yok olacaktı ........ çağırmak için geldi. Beş Balık onun için kurtuldu. Otuz bir yaşımda Karluk milleti sıkıntısız, hür ve serbest iken, düşman ol...
  - `Tekin 1998, s. 26` (eslesen: _TeGMiŞ_)
    > ...ğ Tabarda kolnturtuMİZ era | (D 39) Soğdak bodun iteyin tiyin Yinçü üğüzüğ keçe Temir Kapığka teği süledimiz. Anta kisre kara Türgiş bodun yağı bolmış, Kengeres tapa bardı. Bizin8 sü atı toruk, azukı yök erti. Yablak kişi erls. ....... | (D 40) alp er bizinge teğmiş erti. [[s. 26]] Antağ ödke ökünüp Kül Tiginiğ az erin irtürü ıttımız. Uluğ süngüş sünğgüşmiş. Alp Şalçı ak atın binip teğmiş. Kara Türgiş bodunuğ anta ölürmiş, almış. Yana yorıp |............... | (Ki) Bel | birle, Koşu Totok birle süüğüşmiş. Erin kop ölürmi...
  - `Ata 2011, s. 140` (eslesen: _TeGMiŞ_)
    > ...ndeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğ...
  - `Olmez 2017, s. 57` (eslesen: _TeGMiŞ_)
    > ...ltan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-sol...
  - `Ata 2011, s. 133` (eslesen: _TeGMiŞ_)
    > .... 133]] Günümüz Türkçesindeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı [[s. 133]] ordusu evi barkı yağmalamak için gitti, (diğer) ya...


## TY1-D-1#5 - Tonyukuk Yazıtı, Doğu 1. satir  (6 kelime)

- **transkripsiyon:** `YOK : eRMiŞ : KaGaNıMA : ÖTüNüP : SÜ : iLeTDiM`
- **kelime karsiliklari:** YOK : İMİŞ : KAĞANIMA : ÖTÜNÜP : SÜ : İLETTİM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _YOK eRMiŞ KaGaNıMA ÖTüNüP_)
    > ...ke ben özüm, Bilge Turiyukuk, <kelürtüm>. Ötüken yeriğ konmiş teyin eşidip biryeki bodun, kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Alt...
  - `Tekin 1998, s. 19` (eslesen: _YOK eRMiŞ_)
    > ...g yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; kurığaru Yençü üğlüz) (G 4) keçe Temir Kapığka teği süledim; yırgaru Yir Bayırku yirinğe teği süledim; bunça yirke teği yorıtdım. Ötüken yışda yiğ idi yok ermiş! İl tutsık yir Ötüken yış ermiş! Bu yirde olurup Tabgaç bodun birle (G 5) tüzültüm. [[s. 19]] Altun, kümüş, işgiti kutay bungğsuz ança birür. Tabgaç bodun sabı KÜL TİGİN YAZITI (G 1) (Ben), Tanrı gibi (ve) Tanrı'dan olmuş Türk Bilge Hakan, bu devirde (taht...
  - `Ata 2011, s. 140` (eslesen: _YOK eRMiŞ_)
    > ...AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı ordusu evi barkı yağmalamak için gitti, (diğer) yarı o...
  - `Olmez 2017, s. 84` (eslesen: _YOK eRMiŞ_)
    > ...** < *töpöt+ke* "Tibet'e" töpöt: isim tabanı +ke: yaklaşma/ bulunma durumu eki [?] [?] [?] [?] ***G 4.*** *keçe : temir kapigka[?] tegi : süledim : yırıgaru : yır bayurk[?] yėriye : tegi : süledim : bonça yėrke : tegi : yoritdım : ötüken : yışda : yèg : idi yok : ermiş : ėl tutsık : yėr : ötüken : yış ermiş : bo yėrde : olorup : tavgaç[?] bodun : birle :* "geçip Temir Kapığ'a kadar sefer ettim. Kuzeyde Yır Bayırkların topraklarına kadar sefer ettim. Bu kadar yere sefer ettirdim. Ötüken topraklarından daha iyisi kesinlikle...
  - `Ata 2011, s. 133` (eslesen: _YOK eRMiŞ_)
    > ...Günümüz Türkçesindeki –AlI eki, bu ekten gelişmiştir: öd teŋri aysar kişi oglı kop ölgeli törimiş “ Zaman Tanrısı buyurduğunda insan oğlu hep ölümlü/ölmek üzere yaratılmış” KT K 10 türk bodun kılın-galı türk kagan olur-galı şantuŋ balıkka taloy ügüzke tegmiş yok ermiş “Türk halkı yaratılalı, Türk kağanı tahta oturalı Şantung şehrine (ve) büyük denize kadar gittiği hiç olmamış” T 18 sıŋar süsi ebig barkıg yul-galı bardı sıŋar süsi süŋüş-geli kelti “yarı [[s. 133]] ordusu evi barkı yağmalamak için gitti, (diğer) yarı ordusu...
  - `Tekin 1998, s. 44` (eslesen: _KaGaNıMA_)
    > ...Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge (G 7) yoğun bolsar üzgülük a...


## TY1-D-2#1 - Tonyukuk Yazıtı, Doğu 2. satir  (5 kelime)

- **transkripsiyon:** `ŞaNTUŊ : BaLıKA : TaLUY : ÖGüZKE : TeGüRTiM`
- **kelime karsiliklari:** ŞANTUNG : BALIĞA : TALUYA : ÖGÜZE : DEĞDİRDİM
- **kanit:**
  - `Ogel C1, s. 480` (eslesen: _TaLUY ÖGüZKE_)
    > ...karşılığı idi. Büyük Göktürk Kağanı Çin denizine, yani Büyük Okyanus kıyılarına karşı yaptığı akınlardan söz açarken “Taluyka kicig tegmedim,” yani, “Okyanus'un kıyısına kadar değemedim. varmadım” diyordu. [[s. 480]] Bol sulu Amu ırmağından bahsederken ise, “Taluy Ögüzke tegmiş”, yani, “Amu ırmalına kadar değmiş, varmış”, cümlesini kullanıyordu. Ögüz, eski Türkçede “ırmak” demektir. Diğer yandan da Amu-Derya'ya verilen bir addır. Böyle olmasına rağmen, Amu ırmağının başına “Taluy” şeklinde bir sıfatın eklenilmiş olması, şimdi...
  - `Tekin 1998, s. 11` (eslesen: _ŞaNTUŊ_)
    > ...n ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ teğmedim “Doğuda Şantung ovasına kadar sefer ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar sefer ettim, Tibet'e az kala durdum”, (Tabgaç bodun) sabı süçiğ, ağısı yımşak ermiş “(Çin halkının) sözleri tatlı, ipekli kumaşları yumuşak imiş”, [[s. 11]] Süçiğ sabın yımşak ağı...
  - `Ergin 1970, s. 12` (eslesen: _ŞaNTUŊ_)
    > ...da gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk ettim. Bunca yere kadar y...
  - `Tekin 2003, s. 66` (eslesen: _ŞaNTUŊ_)
    > ..."30", *ügüz* "ırmak", *yabız* "kötü", *yutuz* "kadın", vb. ## /ş/ Ünsüzü **110.** Ötümsüz öndamak sızıcısı /ş/ öz sözcüklerde yalnız söz içinde ve sonunda bulunur. Alıntı sözcüklerde ise söz başında da bulunabilir. 1. Söz başında: *şad* (unvan) (< İranca), *şantuŋ* "Şantung" (< Çince), vb. 2. Söz içinde: *taşık-* "çıkmak", *yaşa-*, *kışla-*, *taşra* "dışarıya", *aşsız* [s. 67] # s. 67 — ORHON TÜRKÇESİ GRAMERİ "yiyeceksiz", *kamşat-* "sarsılmak, sendelemek", *yimşak* "yumuşak", vb. 3. Söz sonunda: *aş* "yiyecek", *baş...
  - `Ata 2011, s. 118` (eslesen: _ŞaNTUŊ_)
    > ...eki ile türetilmiş yer zarfları: ilgerü ‘ileri, öne doğru, doğuya doğru’, kurıgaru ‘geriye doğru, batıya doğru’, birgerü ‘güneye doğru, güneyde’, yırgaru ‘kuzeye doğru, kuzeyde’, yok(k)aru ‘yukarı doğru’, yüg(g)erü ‘yukarı doğru’. ilgerü şantuŋ yazıka tegi süledim “doğuda Şantung ovasına kadar sefer ettim.” KT G3 kurıgaru … temir kapıgka tegi süledim “batıda Demir Kapı’ya kadar sefer ettim” BK K3 birgerü kün ortusıŋaru “güneyde gün ortasına doğru” KT G2 yırgaru tün ort...
  - `Olmez 2017, s. 21` (eslesen: _ŞaNTUŊ_)
    > ...n, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) içerisindeki halkın tamamı bana bağlıdır. Bu kadar halkın tamamını düzene soktum" (KT G 2-3) *ilgerü şantuŋ yazıka tegi süledim taloyka kiçig tegmedim bėrigerü tokuz ersinke tegi süledim töpötke kiçig tegmedim kurıgaru yėnçü ügüz keçe temir kapıgka tegi süledim yırıgaru yir bayırku yėriŋe tegi süledim bonça yėrke tegi yorıtdım* "Doğuda Şantung ovasına kadar sefer...


## TY1-D-2#2 - Tonyukuk Yazıtı, Doğu 2. satir  (4 kelime)

- **transkripsiyon:** `ÜÇ : OTuZ : BaLıK : SIDI`
- **kelime karsiliklari:** ÜÇ : OTUZ : BALIK : KIRILDI
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _ÜÇ OTuZ BaLıK SIDI_)
    > ...kuryakı, yıryakı, öngreki bodun kelti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temi...
  - `Tekin 2003, s. 105` (eslesen: _ÜÇ OTuZ BaLıK SIDI_)
    > ...ogluŋ küŋ boltı* "Bey olmaya layık erkek çocukların köle oldu, hanım olmaya layık kız çocukların cariye oldu" (KT D 24) - *to[kuz og]uz mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) 3. Bir cümleciğin ya da cümlenin belirsiz nesnesi olur: - *üç otuz balık sıdı* "(Hakan) yirmi üç şehir tahrip etti" (T 19) - *[anç]a bodun kop itdim* "Bunca halkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü he...
  - `Ata 2011, s. 114` (eslesen: _ÜÇ OTuZ_)
    > ...girmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK G9, bir otuz ‘21’ KT D32, eki otuz ‘22’ BK D25, üç otuz ‘23’ T 19, biş otuz ‘25’ KT D18, altı otuz ‘26’ BK D26, yiti otuz ‘27’ KT K1, bir kırk ‘31’ KT K2 vb. Açıklama: Yukarıda sıralanan iki haneli sayılar şu kalıba göre ifade edilirdi: {Sayı Sözü + Onluk Hane}. Örneğin, ‘28’ sayısını söylemek için önce...
  - `Ata 2011, s. 107` (eslesen: _ÜÇ OTuZ_)
    > ...Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegirmi ‘16’ KT D31, yeti yegirmi ‘17’ T 49, sekiz yegirmi ‘18’ KT D32, tokuz yegirmi ‘19’ BK G9, bir otuz ‘21’ KT D32, eki otuz ‘22’ BK D25, üç otuz ‘23’ T 19, biş otuz ‘25’ KT D18, altı otuz ‘26’ BK D26, yiti otuz ‘27’ KT K1, bir kırk ‘31’ KT K2 vb. [[s. 107]] Açıklama: Yukarıda sıralanan iki haneli sayılar şu kalıba göre ifade edilirdi: {Sayı Sözü + Onluk Hane}. Örneğin, ‘28’ sayısını söylemek için önc...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 87` (eslesen: _ÜÇ OTuZ_)
    > ...bitinçe bitmese yig. Adam içmez acı şular şızınça şızmasa yig.* Ata: adını yorıtmayan boyrad oğul ata bilinden ininçe inmese yig,!? ana rahmine düşinçe toğmasa yig. Ata adın yorıdanda devletlü © oğul yig. Yalan söz bu dünyede olınça olmasa yig.!? Girçeklerüğ üç otuz on yaşını toldursa yig. Üç otuz * on yaşuğuz tolsun, Hak yaman getürmesün, devletüüüz! pâyende olsun hanum hey. güyegü... [[s. 87]] olmaz) D'de yok || 7 kadın)V, kafun || 8 yapağulu gökçe)”, yapağulı gökce | 9 gana pamuk || 10 kızağuça kaymayınça |V3 kara ko...
  - `Tekin 1998, s. 11` (eslesen: _BaLıK_)
    > ...deyimler açısından da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu deyimlerden bazıları: adak kamşat- “ayağı burkulmak, ayağı dolaşmak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsı...


## TY1-D-2#3 - Tonyukuk Yazıtı, Doğu 2. satir  (4 kelime)

- **transkripsiyon:** `USıN : BUNTaTU : YURTDA : YaTU`
- **kelime karsiliklari:** USU : BUNADI : YURTTA : YATIP
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _YURTDA YaTU_)
    > ...elti. (D 1) Eki bıfiğ ertimiz. (Eki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan...
  - `Tekin 1998, s. 10` (eslesen: _YURTDA_)
    > ...siz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, bitmek, tükenmek”, emget- tolgat- “eza ve cefa etmek”, içik- yükün- “bağ...
  - `Tekin 2003, s. 72` (eslesen: _YURTDA_)
    > ...t(t)ı* "tahta oturttu" (KÇ D 12) < **olortdı* - *sämrit(t)i* "semirtti" (IB 16) < **sämritdi* - *yoglat(t)ı* "cenaze töreni düzenledi" (KÇ D 12) < **yōglatdı* - *yunt(t)a* "(erkek) attan" (IB 24) < **yuntda* - *yurt(t)a* "terkedilmiş kamp yerinde" (IB 13) < **yūrtda* 4. /gt/ > /gd/: - *katıgdı* "sıkıca" (IB 33, vb.) < *katıgtı* (IB 14); krş. *ädgüti* "iyice" - *yaraklıgdı* "silahlı olarak" (KT D 32) < **yaraklıgtı* - *yegdi* "daha iyi bir şekilde" (KT GD; BK D 36) < **yegti* [s. 73] # s. 73 — ORHON TÜRKÇESİ GRAMERİ 5....
  - `Ata 2011, s. 142` (eslesen: _YURTDA_)
    > ...ı kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋ...
  - `Olmez 2017, s. 57` (eslesen: _YURTDA_)
    > ...ri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp er biziŋe tegmiş erti* "yiğit askerler bize saldırmışlardı."(KT D 40) **Gerçekleşmeyecek olan zaman, -taçı erti :** *yavlak boltaçı erti* "kötü olacaktı" (KT K 7); *tirigi küŋ boltaçı erti ölügi yurtda yolta yatu kaltaçı ertiŋiz* "dirisi cariye olacak, ölüsü de sağda-solda ortalıkta kalakalacaktı." (KT K 9) ### Emir – İstek Çekimi | | teklik | çokluk | | :--- | :--- | :--- | | **1. kişi** | -(A)yIn | -(A)lIm | | **2. kişi** | Ø, -(X)ŋ; -gIl | -(X)ŋ, -(X)ŋ...
  - `Ata 2011, s. 135` (eslesen: _YURTDA_)
    > ...devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl eylemin sürüp gittiğini anlatır: bunça yeme tirigi kün boltaçı erti ölügi yurtda yolta yat-u kal-taçı [[s. 135]] ertigiz “bunca hayatta kalanları cariye olacak idi, ölenleri yazıda yabanda yatıp kalacak idiniz” KT K9 elt- ve ıd- tasvirî fiilleri, asıl eylemin kolayca gerçekleştiğini anlatır: yaraklıg kantan kelip yañ-a elt-di süŋüglüg kan...


## TY1-D-2#4 - Tonyukuk Yazıtı, Doğu 2. satir  (6 kelime)

- **transkripsiyon:** `KaLUR : eRTİ : TaBGaÇ : KaGaN : YaGıMıZ : eRTİ`
- **kelime karsiliklari:** KALIR : İDİ : TABGAÇ : KAĞANI : YAĞIMIZ : İDİ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TaBGaÇ KaGaN YaGıMıZ eRTİ_)
    > ...ki) sümlüz bljoltı. Türk bodun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş)...
  - `Tanyeri, s. 19` (eslesen: _TaBGaÇ KaGaN YaGıMıZ eRTİ_)
    > ...miş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fiili kullanılır: “Tabgaç kagan yagımız erti.” (Çin milleti düşmanımız idi.) Sayfa: 18 [s. 20] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com Göktürk Yazısında Sayılar Orhun Yazıtları'nda sayılar, yazı ile...
  - `Tekin 1998, s. 21` (eslesen: _TaBGaÇ KaGaN_)
    > ...rak (bu sözleri) öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser,...
  - `Tekin 2003, s. 107` (eslesen: _TaBGaÇ KaGaN_)
    > ...dimlig torug at* "Yeğen Silig Beyin kuşamlı doru at(ı)" (KT D 33) [s. 107] # s. 107 — ORHON TÜRKÇESİ GRAMERİ *türük bodun+ıŋ ilin törösin...* “Türk halkının devletini ve törelerini...” (KT D 11, BK D 3) *bilgä kagan+ıŋ boduni* “Bilge Hakan’ın halkı” (O 11) *tabgaç kagan+ıŋ içerki bädizçig...* “Çin İmparatorunun saray ressam ve heykeltraşlarını...” (KT G 12) *kül tigin+iŋ altunın kümüşin* “Prens Kül’ün altınlarını, gümüşlerini...” (KT GB) *bayırku+n(i)ŋ ak adgırıg* “Bayırku’ların ak aygırını” (KT D 36) *bayırku+n[ıŋ]...* “Bay...
  - `Ata 2011, s. 51` (eslesen: _TaBGaÇ KaGaN_)
    > ...in üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarını- yerleştirmişler. İki-sınır- arasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdar...
  - `Ata 2011, s. 44` (eslesen: _TaBGaÇ KaGaN_)
    > ...ürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç [[s. 44]] bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları’na kadar batıda Demir Kapı’ya kadar - halklarınıyerleştirmişler. İki-sınırarasında pek örgütsüz Köktürkleri düzene sokarak öylece hüküm sürerler imiş. (Onlar) akıllı hükümdarlar imiş, cesur hükümdarl...


## TY1-D-2#5 - Tonyukuk Yazıtı, Doğu 2. satir  (5 kelime)

- **transkripsiyon:** `ON : OK : KaGaNI : YaGıMıZ : eRTİ`
- **kelime karsiliklari:** ON : OK : KAĞANI : YAĞIMIZ : İDİ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _ON OK KaGaNI YaGıMıZ eRTİ_)
    > ...dun kı- (lnga)lı, Türk kağan olurgalı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaç...
  - `Ergin 1970, s. 38` (eslesen: _ON OK KaGaNI_)
    > ...ürk milleti kılınalı, Türk kağanı oturalı Şantung şehrine, denize ulaşmış olan yok imiş. Kağanıma arz edip ordu gönderdim | Şantung şehrine, denize ulaştırdım. Yirmi üç şehir zaptetti. Uykusunu burda terk edip, yurtta yatıp kalırdı. Çin kağanı düşmanımız idi. On Ok kağanı düşmanımız idi. | Fazla olarak Kırgızın kuvvetli kağanı düşmanımız oldu. O üç kağan akıl akıla verip Altun ormanı üstünde buluşalım demiş. [[s. 38]] Şöyle akıl akıla vermişler: Doğuda Türk kağanına karşı ordu sevk edelim. Ona karşı ordu sevk etmezsek, ne zama...
  - `Kafesoglu, s. 69` (eslesen: _ON OK KaGaNI_)
    > ...os'da "6 Eyâlet" arazisinde) Türklerin anavatana iadesi349. Sonra Kapgan Yenisey bölgesini işgal etmekte olan Kırgızlara yöneldi. [[s. 69]] Mevsim kış (696-697), yol uzun ve meşakkatli idi, fakat bu sefere zaruret vardı: "Kuvvetli Kırgız kağanı, Çin kağanı ve On-ok kağanı anlaşıp; Altun-yış (Altun ormanı = Altay dağları)'da buluşalım, ordularımızı birleştirelim, doğuda Türk kağanına saldıralım, (yoksa) kağan cesur ve aygucı'sı bilge olduğundan o bizi mahveder demişler"350. [[s. 69]] Kapgan ile Tonyukuk idaresindeki Gök-Türk or...


## TY1-D-3#1 - Tonyukuk Yazıtı, Doğu 3. satir  (6 kelime)

- **transkripsiyon:** `aRTUK : KIRKıZ : KÜÇLüG : KaGaN : YaGıZıM : BOLDI`
- **kelime karsiliklari:** ARTISI : KIRKIZIN : GÜÇLÜ : KAĞANI : YAĞIMIZ : OLDU
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _aRTUK KIRKıZ_)
    > ...galı, Şantung balıkka, taluy üğüzke teğmiş yok ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürte...
  - `Tekin 2003, s. 146` (eslesen: _KÜÇLüG KaGaN_)
    > ...ız kälürüp kop kot(t)ı* “(Onlar) iyi binek atlarını, kara samurları ve mavi sincapları pek çok sayıda getirip bıraktılar” (BK G 12), vb. **334.** *üküş* “çok” (bk. **Belirsizlik Sayıları**). **335.** *antag* “onca, o kadar” < *anı täg* “onun gibi”: - *antag küçlüg kagan ärmiş* “(Onlar) onca kudretli hakanlar imiş” (KT D 4). Bk. **Sontakılar**. **336.** *ärtiŋü* “pek, pek çok” < *ärtin-* “geçmek, ileri gitmek” + *-gü* - *tür[giş kagan] kızın ärtiŋü ulug törön ogluma alı birtim* “Türgiş hakanının kızını pek büyük bir törenle...
  - `Tekin 1998, s. 21` (eslesen: _KIRKıZ_)
    > ...ermiş; buyrukı yeme bilge ermiş erinç, alp ermiş erinç. Beğleri yeme bodunı yeme tüz ermiş. Anı üçün iliğ ança tutmış erinç; iliğ tutup törüğ itmiş. Özi ança (D 4) kergek bolmış. Yoğçı sığıtçı öfgre, kün tuğsıkda Bükli Çöllüğ el, Tabgaç, Tüpüt, Apar, Purum, Kırkız, Üç Kurıkan, Otuz Tatar, Kıtariy, Tatabı... [[s. 21]] bunça bodun kelipen sığtamış, yoğlamış. Antağ külüğ kağan ermiş. ORHON YAZITLARI 39 Ben ebedi taş diktim, Çin hakanından ressam ve heykeltraşlar getirttim, (Kül Tigin'in türbesini) süslettim. (Çinliler)...
  - `Tekin 2003, s. 35` (eslesen: _KIRKıZ_)
    > ...ıl(ı)p* (O 10) - /KısdI/ *kışdı* "kıldı" (O 3), vb. 3. Söz başında ve /ı/ ünlüsünden önce art damaksıl /k/ değerinde: - /KıIlntm/ *kıl(ı)nt(ı)m* (T 1) - /KıIltI/ *kıltı* (BK D 14) - /KıILçLDI/ *kıl(ı)çladı* (KT K 5) - /KıIrK/ *kırk* (KT D 15, KD) - /KıIrkz/ *Kırkız* (T 27, vb.) - /KıIsGA/ *kısga* (KÇ D 11) [s. 36] # s. 36 — TALAT TEKİN - /KıISLTA/ *kısılta* (BK D 37) - /KıIşN/ *kışın* (BK G 2) - /KıIz/ *kız* (T 48, vb.) - /KıIzL/ *kız(ı)l* (T 52), vb. ## /iç, çi/ Hece İşareti **30.** Yazıtlarda çok seyrek olarak kul...
  - `Ata 2011, s. 112` (eslesen: _KIRKıZ_)
    > ...daki isimlere ulanan bu ek ile belirli nesne durumu yapılır. tabgaçgaru ku+nı seŋün+üg ıdmış T 9 “ Çin’e General Ku’yu göndermiş” 4. Yönelme Durumu (Verme-bulunma, Datif): +kA, +ŋA, +A a. +kA: Yönelme durumu çoğunlukla bu ek ile yapılır: kırkızıg u+ka basdımız T 27 “Kırgızları uykuda bastık” tabgaç bodun+ka KT D7 “Çin halkına” temir kapıg+ka tegi süledim KT G4 “Demir Kapı’ya kadar asker sevk ettim” b. +ŋA: Üçüncü kişi iyelik ekinden sonra gelen ektir: süçig sab+ı+ŋa yımşak agı+s...
  - `Olmez 2017, s. 51` (eslesen: _KIRKıZ_)
    > ...A, +A Runik harfli yazıtlarda ve genelde de Eski Türkçede yaklaşma ve bulunma için ayrı ayrı, bağımsız ekler bulunmaz, tek bir ek iki işlevde de kullanılabilir. *+kA* yalın durumdaki sözcüklere gelir: *atıg ıka bayur ertimiz* "atları ağaçlara bağlardık" *kırkızıg uka basdımız* "Kırgızları uykuda baskına uğrattık" *şantuŋ yazıka tegi süledim* "Şantung ovasına kadar sefer ettim" Birinci ve ikinci kişi iyelik eki almış sözcüklerden sonra ek *+A*, üçüncü kişi iyelik ekli adlardan sonra ise *+ŋA* şeklinde görülür. Üçü...


## TY1-D-3#2 - Tonyukuk Yazıtı, Doğu 3. satir  (9 kelime)

- **transkripsiyon:** `OL : ÜÇ : KaGaN : ÖGLeŞiP : aLTUN : YIŞ : ÜZE : KaBıŞaLıM : TiMiŞ`
- **kelime karsiliklari:** O : ÜÇ : KAĞAN : ÖĞLEŞİP : ALTIN : YIŞ : ÜZE[RİNDE] : KAVUŞALIM : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _OL ÜÇ KaGaN ÖGLeŞiP_)
    > ...k ermiş. Kağanıma ötünüp sü eletdim. (D 2) Şantunğ blalıkka), Taluy lüğüzkle teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” t...
  - `Olmez 2017, s. 58` (eslesen: _aLTUN YIŞ ÜZE_)
    > ...ük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋl...
  - `Ergin 1970, s. 38` (eslesen: _ÜÇ KaGaN_)
    > ...Kağanıma arz edip ordu gönderdim | Şantung şehrine, denize ulaştırdım. Yirmi üç şehir zaptetti. Uykusunu burda terk edip, yurtta yatıp kalırdı. Çin kağanı düşmanımız idi. On Ok kağanı düşmanımız idi. | Fazla olarak Kırgızın kuvvetli kağanı düşmanımız oldu. O üç kağan akıl akıla verip Altun ormanı üstünde buluşalım demiş. [[s. 38]] Şöyle akıl akıla vermişler: Doğuda Türk kağanına karşı ordu sevk edelim. Ona karşı ordu sevk etmezsek, ne zaman bir şey olsa o bizi | -kağanı kahraman imiş, müşaviri bilici imiş- ne zaman bir şe...
  - `Olmez 2017, s. 23` (eslesen: _ÜÇ KaGaN_)
    > ...yani yine Ötüken'i merkez edinmişler, yazıtlarını da yine aynı alfabeyle aynı üslupla dikmişlerdir. Tes yazıtı K 2. satırda yer alan *anıŋ ėli üç yüz yıl ėl tutmış* "onun hanedanı 300 yıl ülkeyi yönetmiş" ifadesi; Taryat D 2'de yer alan *(...) bumın kagan üç kagan olormış* "(...) Bumin Kağan, bu üç kağan hüküm sürmüş" ifadesi; Moyun Çor K 3. satırda yer alan *on uygur tokuz oguz üze yüz yıl olorup* "On Uygurlar ve Tokuz Oğuzlar ile yüz yıl (birlikte) yaşayıp" ifadeleri kendilerini ilk Türk devletinden de, II. Türk devl...
  - `Tekin 1998, s. 11` (eslesen: _aLTUN YIŞ_)
    > ...devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya...
  - `Tekin 2003, s. 113` (eslesen: _aLTUN YIŞ_)
    > ...glärig+[dä bu yeriŋ+dä su]buŋ+da adrılmasar* "Bu hakanından, bu beylerinden, bu topraklarından ve sularından ayrılmaz isen" (BK K 13) *yurt+da yatu kalur ärti* "yurtta yata kalıyor idi" (T 19) *özüm säkiz yaş+da kaltım* "ben sekiz yaş(ım)da kaldım" (BK D 14) *altun yış+da* "Altay dağlarında" (T 31, 32) *köz+dä yaş kälsär* "gözler(im)den yaş gelse" (KT K 11) 2. {+tA}: *il+tä* "ülkede" (KT G 3) *kara köl+tä* "Kara gölde" (KT D 34) *köŋül+tä* "gönülden" (KT K 11), *köŋül+tä+ki* "gönüldeki" (KT G 12) *yurt+da yol+ta* "yurtta v...


## TY1-D-3#3 - Tonyukuk Yazıtı, Doğu 3. satir  (7 kelime)

- **transkripsiyon:** `aNÇA : ÖGLeŞMiŞ : ÖŊRE : TÜRK : KaGaNGaRU : SÜLeLiM : TiMiŞ`
- **kelime karsiliklari:** ANCA : ÖĞLEŞMİŞ : ÖNDE : TÜRK : KAĞANINA : SÜLEYELİM : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRK KaGaNGaRU SÜLeLiM_)
    > ...teğürtüm. Üç otuz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5...
  - `Tekin 2003, s. 140` (eslesen: _TÜRK KaGaNGaRU_)
    > ...") diye haber alıp..." (KT D 11-12) **309.** *öŋrä* "ön tarafta, ileride, doğuda" < *\*öŋ* "ön": *öŋrä kün tugsıkda* "doğuda, gün doğar tarafta" (KT D 4, BK D 5) *öŋrä töliş bäglär* "doğuda(ki) Töliş beyleri" (BK G 13) [s. 140] # s. 140 — TALAT TEKİN *öŋrä türk kagangaru sülälim* "Doğuda(ki) Türk hakanına doğru sefer edelim" (T 20) Bu sözcüğe niteleyici eki {+kI} de eklenebilir: *öŋräki är* "öncü askerler" (T 25) *kuryakı yıryakı öŋräki bodun* "batıdaki, kuzeydeki ve doğudaki boylar" (T 17) **310.** *kisrä ~ kesrä* "geride,...
  - `Tekin 2003, s. 136` (eslesen: _KaGaNGaRU_)
    > ...lmiş yer zarfları şunlardır: *öŋdün* "doğuda, doğuya", *kur(ı)dın* "batıda, batıdan", *kedin ~ kidin* "batıda, batıdan", *birdin* "güneyde, güneyden", *yırdın* "kuzeyde, kuzeyden". Bu zarflar ad ve niteleyici olarak da kullanılır. 1. Yer zarfı olarak: *öŋdün kagangaru sü yorılım* "(Biz) doğuya, Hakan'a doğru orduyla yürüyelim" (T 29) *kur(ı)dın sog(u)d örti* "Batıda, Soğdlar ayaklandı" (KT B 1) [s. 137] # s. 137 — ORHON TÜRKÇESİ GRAMERİ *tabgaç birdin yän täg kıtań öŋdün yän täg bän yırdınta yan tägäyin* "(Siz) Çinliler...
  - `Ata 2011, s. 118` (eslesen: _KaGaNGaRU_)
    > ...akı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. öŋdün kagangaru sü yorılım “(biz) doğuya, Hakan’a doğru orduyla yürüyelim” T 29 kurıdın sogud örti “batıda Soğdlar ayaklandı” KT B1 tabgaç birdin yen teg kıtań öŋdün yen teg ben yırdınta yan tegeyin “Çinliler güney tarafından saldırın, Kıtaylılar doğu...
  - `Ata 2011, s. 115` (eslesen: _SÜLeLiM_)
    > ...Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 1...
  - `Ata 2011, s. 111` (eslesen: _KaGaNGaRU_)
    > ...n batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. [[s. 111]] öŋdün kagangaru sü yorılım “(biz) doğuya, Hakan’a doğru orduyla yürüyelim” T 29 kurıdın sogud örti “batıda Soğdlar ayaklandı” KT B1 tabgaç birdin yen teg kıtań öŋdün yen teg ben yırdınta yan tegeyin “Çinliler güney tarafından saldırın, Kıtaylılar doğu tarafından saldırın, be...


## TY1-D-3#4 - Tonyukuk Yazıtı, Doğu 3. satir  (7 kelime)

- **transkripsiyon:** `aŊaRU : SÜLeMeSeR : KaÇa : NeŊ : eRSeR : OL : BiZNİ`
- **kelime karsiliklari:** ONADOĞRU : SÜLEMESEK : KAÇAR[SAK] : NE : EDER : O : BİZİ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _NeŊ eRSeR OL_)
    > ...D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün...
  - `Tekin 2003, s. 120` (eslesen: _OL BiZNİ_)
    > ...atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärklig adırtı* "Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I 8) 4. Verme-Bulunma durumu: *bilgä tuñukuk(k)a baŋa aydı* "(Hakan), Bilge Tunyukuk'a, bana, (şöyle) emretti:" (T 31) *...
  - `Tekin 2003, s. 69` (eslesen: _aŊaRU_)
    > ...g* "dağ", *tug-* "doğmak", *ulug* "ulu", *yog* "cenaze töreni", vb.; *bäg* "bey", *bitig* "yazı", *çärig* "ordu", *ög* "anne", *ölüg* "ölü", *tirig* "diri, canlı", vb. ## /ŋ/ Ünsüzü **118.** Damak genizsili /ŋ/ söz içinde ve sonunda bulunur. 1. Söz içinde: *aŋaru* "ona doğru", *baŋaru* "bana doğru", *buŋad-* "bunalmak", *ärtiŋü* "pek, pek çok", *siŋil* "kız kardeş", *süŋök* "kemik", *süŋüş-* "savaşmak", vb.; *öŋdün* "doğu, doğuda", *täŋri* "gök; tanrı", *tıŋla-* "dinlemek", vb. 2. Söz sonunda: *äŋ* "en", *bıŋ* "1000",...
  - `Ata 2011, s. 116` (eslesen: _aŊaRU_)
    > ...bizinte T 40 Gösterme Durumu sizde Tar. G5 baŋaru T 3 Yukarıdaki tabloda en dikkat çekici özellik 1. tekil kişi zamirindedir. b- ile başlayan sözcüklerde genizsi bir ses olan /n/ ve /ŋ/ var ise söz başındaki b- > m- olur: ben ~ men gibi. T yazıtı bu söz...
  - `Olmez 2017, s. 54` (eslesen: _aŊaRU_)
    > ...mleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | | *ben ~ men* | *beniŋ ~ meniŋ* | *bini* | *baŋa ~ maŋa* | | | | *baŋaru* | | *sen* | ø | *sini* | | | | | | | *ol* | | *anı* | | *anta* | *ança* | *anın* | *aŋar, aŋaru, ıngaru* | | *biz* | *biziŋ* | *bizni* | *biziŋe* | *bizinte* | | | | | *siz* | *siziŋ* | ø | | *sizde* | | | | *(T. Tekin, 2003; M. Erdal, 2004: 192)* Gerçekte...
  - `Tekin 1998, s. 4` (eslesen: _eRSeR_)
    > ...k BİĞç 15 TEZEK O ŞU UN S ce sente n Ünen Kerem e eN ERER EE İlan Ör 17 İzi > DEPİMLEN erir ERMAK ÜRÜR RR 19 İd. SALASÖZLEPÜ. veneer ARMEN NET KENE EREK AREREĞ 20 9.0. Edebi Sanatlar (BEenzetmeler)i ccs RENK 21 6. Eski Türk Runik Yaazısı................ ne cerser neee 22 TT. Yazım Kurallatı. see RA ÜRER ARAN RDERRERĞÜ 25 7.1. Ünlülerle ilgili yazım kuralları............. 0s 25 7.2. [[s. 4]] Ünsüzlerle ilgili yazım kuralları............ 0 26 7.3.. Noktalama işareti ....oseerkarorsa erener KE KEKeN 28 8. Orhon Alfabes...


## TY1-D-4#1 - Tonyukuk Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `KaGaNI : aLP : eRMiŞ`
- **kelime karsiliklari:** KAĞANI : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...rti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte,...
  - `Ata 2011, s. 139` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesi...
  - `Olmez 2017, s. 63` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...: **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi*...
  - `Ata 2011, s. 132` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...a kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üzgü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. [[s. 132]] -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesinde geçen sıfat-fiil e...


## TY1-D-4#2 - Tonyukuk Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `aYGUÇISI : BİLGE : eRMiŞ`
- **kelime karsiliklari:** AYGUÇISI : BİLGE : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar,...
  - `Ata 2011, s. 190` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...182 [s. 190] 5. Oguzduntan küreg kelti “Oguzdan….geldi” cümlesindeki boşluğu aşağıdaki sözcüklerden hangisi en uygun şekilde tamamlar? a. Kürek b. Kumandan c. Bey d. Kaçak e. Kardeş 6. Kaganı alp ermiş ayguçısı bilge ermiş cümlesindeki ayguçısı sözcüğündeki ekler aşağıdakilerin hangisinde sırasıyla ve doğru olarak verilmiştir? a. Sıfat-fiil eki, üçüncü tekil kişi iyelik eki b. Zarf-fiil eki, üçüncü tekil kişi iyelik eki c. Sıfat-fiil eki, belirtme durumu eki...
  - `Olmez 2017, s. 63` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...*uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi* "Türbe ustası, tezyi...
  - `Ata 2011, s. 183` (eslesen: _aYGUÇISI BİLGE eRMiŞ_)
    > ...Doğu d. Doğu, Güney, Kuzey e. [[s. 182]] Güney, Doğu, Kuzey [s. 183] 5. Oguzduntan küreg kelti “Oguzdan….geldi” cümlesindeki boşluğu aşağıdaki sözcüklerden hangisi en uygun şekilde tamamlar? a. Kürek b. Kumandan c. Bey d. Kaçak e. Kardeş 6. Kaganı alp ermiş ayguçısı bilge ermiş cümlesindeki ayguçısı sözcüğündeki ekler aşağıdakilerin hangisinde sırasıyla ve doğru olarak verilmiştir? a. Sıfat-fiil eki, üçüncü tekil kişi iyelik eki b. Zarf-fiil eki, üçüncü tekil kişi iyelik eki c. Sıfat-fiil eki, belirtme durumu eki d. [[s. 183]] Zarf-...


## TY1-D-4#3 - Tonyukuk Yazıtı, Doğu 4. satir  (8 kelime)

- **transkripsiyon:** `KaÇaNeŊ : eRSeR : ÖLüRTeÇİ : KÖK : ÜÇüGÜN : KaBıŞıP : SÜLeLiM : eDİ`
- **kelime karsiliklari:** KAÇAR [İSEK] NE : İSE : [BİZİ] ÖLDÜRECEK : HEP : ÜÇÜ : KAVUŞUP : SÜLEYELİM : ONU
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _KaBıŞıP SÜLeLiM eDİ_)
    > ...yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sak...
  - `Ata 2011, s. 115` (eslesen: _KaBıŞıP SÜLeLiM_)
    > ...e Mayan Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 1...
  - `Ata 2011, s. 108` (eslesen: _KaBıŞıP SÜLeLiM_)
    > ...girminç ay yegirmike Mayan Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. [[s. 108]] bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” [s. 109] 4. Katlama Sayıları a. Asıl sayı + yolı (< yol “yol,...
  - `Tekin 1998, s. 44` (eslesen: _ÖLüRTeÇİ_)
    > ...tağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısı...
  - `Ata 2011, s. 123` (eslesen: _ÖLüRTeÇİ_)
    > ...inlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındaki ünlü düşer. bini oguzug ölürteçi-k tir men “Beni, Oğuz’u mutlak öldürecektir diyorum” T 10-11 Yukarıda görülen pekiştirmeli yapılar üzerine bir daha ok/ök edatı gelebilir. yańduk yolta yeme ölti-k ök “bozguna uğrayıp dağılanlar yollarda yine ölüp kaldılar” T16 Olasılık Eda...
  - `Tekin 2003, s. 132` (eslesen: _KaBıŞıP_)
    > ...rlikte", *üçägün* "üçü(müz) birlikte". 1. *buçägü* "bu üçü birlikte" (< *bu üçägü*) sözcüğü içindeki *üçägü*: *tabgaç oguz kıtań buçägü kabış(s)ar kaltaçı biz* "Eğer Çinliler, Oğuzlar ve Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız" (T 12-13) *üçägün kabışıp sülälim* "(Biz) üçümüz birleşip ordu sevk edelim" (T 21) 2. Şu örnekte topluluk sayısı *ikägü* sözcüğü "ikisi birlikte" değil "iki parça" anlamındadır: [s. 133] # s. 133 — ORHON TÜRKÇESİ GRAMERİ *eçim kagan eli kamşag boltokınta, bodun ilig ikäg[ü] boltokı...


## TY1-D-4#4 - Tonyukuk Yazıtı, Doğu 4. satir  (3 kelime)

- **transkripsiyon:** `YOK : KISaLıM : TiMiŞ`
- **kelime karsiliklari:** YOK : KILALIM : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 44` (eslesen: _YOK KISaLıM_)
    > ...s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinç...
  - `Tekin 2003, s. 147` (eslesen: _YOK KISaLıM_)
    > ...idi oksız kök türük iti ança olorur ärmiş* “(Bu) iki (sınır) arasında hiç kabile örgütü olmayan Doğu Türklerini düzene sokup öylece hükmederlermiş” (BK D 4) - *türk sir bodun yirintä idi yorımazun* “Türk Sir halkı ülkesinde hiç ilerlemesin” (T 11) - *usar idi yok kışalım* “Mümkünse, onları tümüyle yok edelim” (T 11) - *üçägün kabışıp sülälim edi yok kışalım* “Üçümüz birlikte ordu sevk edelim, (onları) tümüyle yok edelim” (T 21) - *türük bodun tämir kapıgka tensi oglı aytıgma tagka tägmiş idi yok ärmiş* “Türk halkının Demir Ka...
  - `Olmez 2017, s. 58` (eslesen: _YOK KISaLıM_)
    > ...el Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diye" (KT D 11) **Çokluk 1. Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yaz...
  - `Ata 2011, s. 129` (eslesen: _YOK KISaLıM_)
    > ...1, eşid-gil KT G1, urgıl ‘vur, savaş’ T 34 3. [[s. 129]] tekil kişi -zU(n) / -çUn bar-zun ‘gitsin’ T 31, yarlıka-zu ‘bağışlasın’ T 53, yorıma-zun ‘yürümesin, ilerlemesin’ T 11, bol-çun ‘olsun’ KT D11 (BK D10) 1. çoğul kişi -(A)lIm yorı-lım ‘yürüyelim’ T 29, yok kışalım ‘yok edelim’ T 11, yan-alım ‘dönelim’ T 37 2. çoğul kişi -(I)ŋ / -Ø bil-iŋ ‘bilin, öğrenin’ BK D33, olur-uŋ ‘oturun’ T 31, unama-ŋ ‘onaylamayın’ T 35 3. çoğul kişi -zU(n) / -çUn Tablo 7. 7 Emir Kipi Çekimi [s. 130] 2. -(X)r / -Ar ermiş (geniş zamanın riva...
  - `Tekin 1998, s. 22` (eslesen: _TiMiŞ_)
    > ...Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]]...
  - `Tekin 2003, s. 173` (eslesen: _TiMiŞ_)
    > ...olarak ve ağaçlara tutunarak yukarı tırmandırttım" (T 25) *kuş oglı uç-a āztı kiyik oglı yügür-ü āztı* "Kuş yavrusu uçarak yolu kaybetti, geyik yavrusu da koşarak yolu kaybetti" (IB 15) Birçok yardımcı eylemin tümleyicileri {-A}, {-I} ve {-U} ekleri ile türetimiş eylem zarflarıdır: *al-ı bir-* "alıvermek", *uç-a bar-* "uçup gitmek", vb. (bk. **Birleşik Eylemler**). Sontakıların ve bağlaçların çoğu aslında ünlülü eylem zarflarıdır: *tapa* "-a doğru" < *tap-* "bulmak", *tägi* "-a kadar" < *täg-i* "erişmek, varmak", *az...


## TY1-D-4#5 - Tonyukuk Yazıtı, Doğu 4. satir  (4 kelime)

- **transkripsiyon:** `TÜRGiŞ : KaGaN : aNÇA : TiMiŞ`
- **kelime karsiliklari:** TÜRGİŞ : KAĞANI : ANCA : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TÜRGiŞ KaGaN aNÇA_)
    > ...yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KaGaN_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi y...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGiŞ KaGaN_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] B...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KaGaN_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı...
  - `Tekin 1998, s. 23` (eslesen: _KaGaN aNÇA_)
    > ...abı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artukı yeti yolı sülemiş, yeğirmi sünğüş sünğüşmiş. Teügri yarlıkaduk üçün, illiğiğ elsiretmiş, kağanlığığ kağansıratmış; yağığ baz kılmış; tizliğiğ sökürmiş, başlığığ yüküntülrmiş. Kafğım kağan, ança iliğ) (D 16) törüğ kazganıp uça barmış. [[s. 23]] Kafiğım kağanka başlayu baz Kağanığ balbal tikmiş. Ol törüde üze eçim kağan olurtı. Eçim kağan olurupan Türük bodunuğ yiçe itdi <yiçe> iğitti. Çığanyığ (bay kıltı, azığ üküş kıltı). (D 17) Eçim kağan olurtukd...
  - `Ata 2011, s. 142` (eslesen: _KaGaN aNÇA_)
    > ...doğusunda) Bükli Kağanına kadar asker sevk etmiş” KT D8 alp erin ölürüp balbal kıl-u ber-tim “yiğit erlerini öldürüp balbal yaptım” BK G7 bar- tasvirî fiili ile kurulan birleşik fiiller, asıl eylemin tamamlandığını gösterir: kaŋım kagan ança ilig törüg kazganıp uç-a bar-mış “babam kağan, öylece devleti (ve ) yasaları kazanıp vefat etmiş” KT D16 on tünke yantakı tug ebir-ü bar-dımız “on gecede yandaki engeli dolanarak gittik (dolandık)” T 26 kel- ve kal- tasvirî fiilleri, asıl...


## TY1-D-4#6 - Tonyukuk Yazıtı, Doğu 4. satir  (5 kelime)

- **transkripsiyon:** `BeNiŊ : BODuNuM : aNDA : eRÜR : TiMiŞ`
- **kelime karsiliklari:** BENİM : BOYLARIM : ORAYA : ER[İŞ]İR : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _BeNiŊ BODuNuM_)
    > .... Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “K...
  - `Tekin 1998, s. 19` (eslesen: _BODuNuM_)
    > ...Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içr...
  - `Tekin 2003, s. 79` (eslesen: _BODuNuM_)
    > ...vurgusu vardı; orta hece ise vurgusuzdu. Bu nedenledir ki orta hecenin kısa dar ünlüsü [s. 79] # s. 79 — ORHON TÜRKÇESİ GRAMERİ zayıftı ve birçok durumda düşüyordu: *adrı́l-* < **adırıl-*, vb. Eklenmede sözcük vurgusu son heceye kayıyordu: *bodún* "halk", *bodunúm* "halkım", *bodunumín* "halkımı", vb. Ancak, belirli ekler vurguyu üzerlerine çekmiyor, vurgu ekten önceki hece üzerinde kalıyordu: *bírmädi* "vermedi", *udímatı* "uyumayarak", *kılínmadok* "yaratılmamış", *bíliŋ* "bilin!", *ánın* "onun ile", *ókun* "ok ile"...
  - `Ata 2011, s. 138` (eslesen: _BODuNuM_)
    > ...(+üg 2. tekil kişi iyelik eki ve +in belirtme durumu eki) kaŋım kagan uç-duk+da “babam kağan vefat ettiğinde” BK D13-14 bar-duk yirde edgüg ol erinç “vardığın yerde (senin) kazancın o şüphesiz” KT D24 közün körme-dük kulkakın eşidme-dük bodunumın “gözle görmedik kulakla işitmedik (kadar çok) halkımı” BK K11 6. -mIş sıfat-fiil eki, geçmiş zaman eylem sıfatı ve aynı zamanda eylem adı yapar: ıda taşda kal-mış+ı kubranıp yeti yüz boltı “(ağaçta dışarıda) dağda bayırda kalmış olanla...
  - `Olmez 2017, s. 78` (eslesen: _BODuNuM_)
    > ...lüm ve çözümlemesi yer almaktadır (Ölmez 2015'ten): **KT G 1-13** *(Runik — Runic script, 4 lines)* *G 1. teȳri teg : teȳride : bolmuš : tür²ük : bilge² kağan : bo üdke : olortum²* *savımın : tüketi : ešidgil : ulayı : iniygünüüm² oglanım² birki² ugušum²* *bodunum² bėriye² şadapıt begler : yurya² tarkat² buyruk : begler² otuz //////* "İlahî göğün yarattığı Türk Bilge Kağan, bu devirde tahta çıktım. Sözlerimin tamamını dinleyin, özellikle küçük erkek kardeşlerim, çocuklarım, birleşik soyum, halkım, güneyde Şadlar, kuze...
  - `Ergin 1970, s. 7` (eslesen: _BeNiŊ_)
    > ...olmaktadır. Doğu cephesinin üstünde kağanın işareti vardır. Batı cephesi O R H U N Â B İ D E L E R İ [s. 7] büyük bir Çince kitâbe ile kaplıdır. Diğer üç cephesi Türkçe kitâbelerle doludur. Cepheler arasında kalan ve keskin olmayan kenarlarda ve Çince kitabenin yanında da Orhun yazısı vardır. Doğu cephesinde 40, güney ve kuzey cephelerinde 13'er satır vardır. Satırlar yukarıdan aşağıya doğru yazılmış ve sağdan sola doğru istif edilmiştir. Satırların uzunluğu aşağı yukarı 235 santim kadardır. Cetvelden çıkmış gibi, ç...


## TY1-D-5#1 - Tonyukuk Yazıtı, Doğu 5. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : BODuN : YiME : BuLGaNÇ : OL : TiMiŞ`
- **kelime karsiliklari:** TÜRK : BOYLARI : YİNE : BULANGAÇ : O : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Ata 2011, s. 120` (eslesen: _TÜRK BODuN_)
    > ...ŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. [[s. 120]] tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olması b. Kö...
  - `Kafesoglu, s. 59` (eslesen: _TÜRK BODuN_)
    > ...ında. Bk. S.G. KIjastorny, - V. A. Livsic, TheSogdian İnscription ofBugut, s. 7i, n. 2. 251 Liu, ayn. esr., s. 40, n. 209; ayn. müell, Kıüscha..., s. 165 vd. 252 Ed. Chavannes, Documents., s. 49, 220, n. 3; Uu, Die Ckinesischen..., I, s. 9, 59, 181; "Üç tuğlu Türk bodun" = II. Gök-Türk hakanlığı?, bk. Kitabe, Şine-ttsıt, kuzey, sır. 3. 253 Bk. Liu, ayn. esr., I, s. 6 254 Liu, ayn. esr., I, s. 6 vd. [[s. 59]] 255Liu,am. esr., I, s. 52, II. s. 528. 256İl-kagan (=el khagan). Veya İ-li khagan (bk. Liu, ayn. esr., I, s. 7,41) = i...


## TY1-D-5#2 - Tonyukuk Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `OGuZI : YiME : TaRKıNÇ : OL : TiMiŞ`
- **kelime karsiliklari:** OĞUZU : YİNE : DARGIN : O : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _TaRKıNÇ OL_)
    > ...i, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çöl...
  - `Tekin 2003, s. 122` (eslesen: _TaRKıNÇ OL_)
    > ...konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) çok iyidir" (IB 5, vb.) *añıg yablak ol* "(Bu fal)...
  - `Ata 2011, s. 117` (eslesen: _TaRKıNÇ OL_)
    > ...n çekiminde 3. tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme durumundaki çekimi ise aŋaru biçimindedir. Buradan yola çıkarak, aŋ...
  - `Ata 2011, s. 110` (eslesen: _TaRKıNÇ OL_)
    > ...Aşağıdaki örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. [[s. 110]] tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme durumundaki çekimi ise aŋaru biçimindedir. [[s. 110]] Buradan yola çıkarak, aŋar şeklinin sonundaki /r/’nin, direktif eklerin...
  - `Tekin 2003, s. 61` (eslesen: _TaRKıNÇ_)
    > ...- "karşılıklı çekişmek" - *oglan* "oğullar, evlatlar" (KT K 11, vb.) < *og(ı)l* - *oglıt* "oğullar" (KT D 5, BK D 5) < *og(ı)l* - *ötrü* "sonra" (T 12, 16) < *ötür-ü, *ötür- "geçirmek" - *sıgta-* "yas tutmak, ağlamak" (KT D 4, BK D 5) < *sıgıt* "ağıt, yas" - *tarkınç* "dargın, öfkeli, ters" (T 22) < *tarık- "darılmak, öfkelenmek" - *tägrä* "çepeçevre" (T 48) < *tägir- "çevirmek" - *udşur-u* "izleyerek, takip ederek" (KT D 36, K 2) < *uduş-ur-* - *yabrıt-* "bozguna uğratmak, tahrip etmek" (BK D 31) < *yabır+ı-t- (krş. *yab...
  - `Olmez 2017, s. 68` (eslesen: _TaRKıNÇ_)
    > ...Ç G 10) **{-(X)nç}:** *bulganç* "karışık, isyankâr, düzensiz" (T 22) < *bulga-* "karıştırmak, karışıklık çıkartmak"; *erinç* "olmalı, muhakkak ki" (KT D 3, vb.) < *er-* "olmak"; *ötünç* "rica, maruzat" (T 15) < *ötün-* "arzetmek, maruzatta bulunmak" (T 15); *tarkınç* "isyankâr, gayrimemnun" (T 22) < *tarık-* "memnun olmamak"; *unç* "mümkün, olabilir" (T 24) < *u-* "muktedir olmak" **{-(X)nçU}:** "yapan, eden" anlamında adları türeten ektir: *ezençü* "öncü" (Altünköl I, ön 2) < *eze-* "keşfe çıkmak, gözetleme yapmak; krş...


## TY1-D-5#3 - Tonyukuk Yazıtı, Doğu 5. satir  (8 kelime)

- **transkripsiyon:** `OL : SaBIN : eŞiDiP : TÜN : YiME : UDSIKıM : KeLMeZ : eRTİ`
- **kelime karsiliklari:** O : SÖZÜ : İŞİTİP : GECE : YİNE : UYUYASIM : GELMEZ : İDİ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _OL SaBIN eŞiDiP TÜN_)
    > ...ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşitt...
  - `Tekin 2003, s. 158` (eslesen: _OL SaBIN eŞiDiP TÜN_)
    > ...e ben kazanmasa idim) devlet de halk da olmayacak idi" (T 55) *kazgantokin üçün udu bän özüm kazgantokum üçün il yämä il boltı, bodun yämä bodun boltı* "(Hakan) kazandığı için ve ben kendim kazandığım için, devlet de devlet oldu, halk da halk oldu" (T 55-56) *ol sabın eşidip tün yämä udısıkım kälmäz ärti < kün yämä> olorsıkım kälmäz ärti* "O sözleri işittikten (sonra) geceleri uyuyasım gelmiyordu, gündüzleri oturasım gelmiyordu" (T 22), vb. 3. *yämä* bağlacı üç kez de yinelenebilir: *kapgan kagan türk sir bodun yerintä bod yämä bodu...
  - `Tekin 1998, s. 44` (eslesen: _eŞiDiP TÜN_)
    > ...abgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın b...
  - `Ata 2011, s. 139` (eslesen: _eŞiDiP TÜN_)
    > ...BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sıfat-...
  - `Ata 2011, s. 132` (eslesen: _eŞiDiP TÜN_)
    > ...(kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eylem ad...
  - `Tekin 1998, s. 22` (eslesen: _eŞiDiP_)
    > ...ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gib...


## TY1-D-5#4 - Tonyukuk Yazıtı, Doğu 5. satir  (5 kelime)

- **transkripsiyon:** `OLuRSıKıM : KeLMeZ : eRTİ : aNDA : SaKıNDıMA`
- **kelime karsiliklari:** OTURASIM : GELMEZ : İDİ : [O] ANDA : SAKINDIM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _OLuRSıKıM KeLMeZ eRTİ_)
    > ...ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermi...
  - `Tekin 1998, s. 44` (eslesen: _OLuRSıKıM_)
    > ...riyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kalın bolsar topulguluk alp ermiş, yinçge...
  - `Ata 2011, s. 119` (eslesen: _OLuRSıKıM_)
    > ...0 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi ke...
  - `Tekin 1998, s. 40` (eslesen: _KeLMeZ_)
    > ...lıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfısın barımın anta altım. .....) [[s. 40]] Süsi tirilip kelti. Kadırkan yış koln...........eeee | (D 40) T........ tur)jgakınga, yeringerü subıngaru kontı. “Birye Karluk bodun tapa süle!” tip Tudun Yamtarığ ıttım...
  - `Olmez 2017, s. 55` (eslesen: _KeLMeZ_)
    > ...; niçin", *neçök* "nasıl", *neke* "niye, niçin". ### Fiil Çekimi #### Zaman Ekleri **Geniş zaman *-Ar/-Ir/-Ur* ve *-r* ekleriyle kurulur:** *neke tezer biz* "ne diye kaçacağız?" (T 38) *konar köçer ben* "konar göçerim" (Tar B 4) *kelir erser körü kelür kelmez erser tılıg savıg alı olor tėdi* "Gelirlerse görünerek gelirler, gelmezlerse casuslardan haber alıp bekleyin dedi." (T 32); *yagı kelir tėdi* "düşman geliyor dedi." (MÇ D 6); *anta içreki bodun kop maŋa görür* "bu (sınırların) içerisindeki halkın tamamı b...
  - `Ata 2011, s. 112` (eslesen: _OLuRSıKıM_)
    > ...D20 Zaman Zarfları Orhun Türkçesinde kün ‘gün’, tün ‘gece’, küntüz ‘gündüz’, amtı ‘şimdi’ ve araç durumu ekini almış kışın, yazın ‘ilkbaharda’, yayın ‘yazın’, küzün ‘güzün’ gibi sözcükler zaman zarfı olarak kullanılır. [[s. 112]] tün udısıkım kelmedi küntüz olursıkım kelmedi “gece uyuyacağım gelmedi, gündüz oturacağım gelmedi” T 12 kışın kıtań tapa süledim “kışın Hıtay’a doğru sefer ettim” BK G2 yazın tatabı tapa süledim “ilkbaharda Tatabılara doğru sefer ettim” BK G2 yalabaçı edgü sabı ötügi kelmez tiyin yayın süledim “e...


## TY1-D-6#1 - Tonyukuk Yazıtı, Doğu 6. satir  (5 kelime)

- **transkripsiyon:** `iLK : KIRKıZKA : SÜLeLiM : YiG : eRMiŞ`
- **kelime karsiliklari:** İLK : KIRGIZA : SÜLE[YE]LİM : YEĞ : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _SÜLeLiM_)
    > ...uz balık sıdı. Usın buntutu yurtda yatu kalur erti. [[s. 45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5...
  - `Ata 2011, s. 115` (eslesen: _SÜLeLiM_)
    > ...Çor G11 “on birinci ayın yirmisine” 3. Topluluk Sayıları Orhun Türkçesinde topluluk sayıları +AgU(n) eki ile yapılır. bodun ilig ikegü (< iki+egü) boltukınta KT K3 “halk ve hükümdar iki parça olduğunda” üçegün (< üç+egün) kabışıp sülelim T 21 “(biz) üçümüz birleşip ordu sevk edelim” tabgaç oguz kıtań buçegü (< bu üç+egü) kabışsar kaltaçı biz T 12 “(eğer) Çinliler, Oğuzlar (ve) Kıtaylar, bu üçü birleşirlerse biz (çaresiz) kalırız” 108 [s. 1...
  - `Tekin 1998, s. 9` (eslesen: _eRMiŞ_)
    > ...larda konuşan ve olayları anlatan kişi Bilge Kağan'ın kendisi olduğuna göre [s. 9] 14 GİRİŞ bunların yazarı da o olmalıdır. Büyük bir olasılıkla, Bilge Kağan yazıtların metnini önceden hazırlamış, sonra da bunları taşlar üzerine yazması için Yolluğ Tigin'e vermiştir. Tunyukuk yazıtına gelince bu yazıtta olaylar Bilge Tunyukuk'un ağzından anlatıldığına göre metnin yazarı kendisidir. Yazıcının kim olduğu ise yazıtta belirtilmemiştir. 4. [[s. 9]] Yazıtların İçeriği Orhon yazıtları İkinci Doğu Türk Kağanlığı'nın birinc...
  - `Ergin 1970, s. 14` (eslesen: _eRMiŞ_)
    > .......dım. [[s. 14]] Bu yazıyı yazan yeğeni Yollug Tigin. Doğu cephesi Üstte mavi gök, altta yağız yer kılındıkta, ikisi arasında insan oğlu kılınmış, insan oğlunun üzerine ecdadım Bumin Kağan, İstemi Kağan oturmuş. Oturarak Türk milletinin ilini töresini tutu vermiş, düzenleyi vermiş. | Dört taraf hep düşman imiş. Ordu sevk ederek dört taraftaki milleti hep almış, hep tâbi kılmış. Başlıya baş eğdirmiş, dizliye diz çöktürmüş. Doğuda Kadırkan ormanına kadar, batıda Demir Kapıya kadar kondurmuş. [[s. 14]] İkisi arasında pek...
  - `Tekin 2003, s. 18` (eslesen: _eRMiŞ_)
    > ...ürlü adlar verilmiştir. W. Radloff Orhon yazıtları dilini baştan beri “Eski Türkçe” (*Alttürkisch*) olarak adlandırmıştır. W. Bang ise “Bilge Han, halkı için birçok yerde *kök Türk* deyimini kullanıyor” gerekçesiyle bu dile “Kök Türkçe” (*Köktürkisch*) adını vermiştir (bk. *Über die köktürkische Inschrift auf der Südseite des Kül-Tägin-Denkmals*, Leipzig 1896, Vorwort). Ne var ki *kök Türk*, daha doğrusu *kök Türük* adı yazıtlarda birçok kez değil, ancak bir kez geçmektedir (KT D 3 = BK D 4). Belki de bu nedenle Radloff...
  - `Ata 2011, s. 3` (eslesen: _eRMiŞ_)
    > ...reserved No part of this book may be reproduced or stored in a retrieval system, or transmitted in any form or by any means mechanical, electronic, photocopy, magnetic, tape or otherwise, without permission in writing from the University. UZAKTAN ÖĞRETİM TASARIM BİRİMİ Genel Koordinatör Prof.Dr. Levend Kılıç...


## TY1-D-6#2 - Tonyukuk Yazıtı, Doğu 6. satir  (5 kelime)

- **transkripsiyon:** `TiDiM : KÖGMeN : YOLI : BİR : eRMiŞ`
- **kelime karsiliklari:** DEDİM : KÖGMENİN : YOLU : BİR : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _KÖGMeN YOLI BİR eRMiŞ_)
    > ...m anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. S...
  - `Tekin 2003, s. 130` (eslesen: _YOLI BİR_)
    > ...e başına bir (ok bile) d[eğmedi]" (KT D 33) *kamagı biş otuz sülädimiz, üç yegirmi süŋüşdümüz* "Toplam yirmi beş (kez) sefer ettik, on üç (kez) savaştık" (KT D 8), vb. 4. Bir cümlenin yüklem adı olarak: *biz eki bıŋ ärtimiz* "Biz iki bin idik" (T 16) *kögmän yolı bir ärmiş, tumiş* "Kögmen yolu bir imiş, (karla) kapanmış" (T 23) [s. 131] # s. 131 — ORHON TÜRKÇESİ GRAMERİ ## Kesir Sayıları **284.** Runik metinlerde geçen tek kesir sayısı yarım, yarı, bir çiftin teki anlamındaki *sıŋar* sözcüğüdür (krş. Kırg. *sıŋar* ay.,...
  - `Roux, Eski Din, s. 47` (eslesen: _BİR eRMiŞ_)
    > ...niteliklerini almadan çok önce bile Allah'a benzetil miştir. [[s. 47]] Gök-Tanrı'nın hayattaki uzantısı olan kut, tanrının lütfu oldu; emri olan yarlık, şefaat ya da af oldu. Paganizmin tanrıları veya şeytanları, cinlere ve perilere benzetildi ya da ayinleri bir ermişinkine göre değiştirildi. Aslında bu konuyla ilgili olarak dinler tarihi uzmanlarının iyi bilmediği hiçbir şey kalmamıştır. Türk halk kitlelerinin ikiyüzlü davranışları olmuştur. Yapabildikleri ölçüde ancak ismen Müslümanlaştılar. [[s. 47]] Sonradan yazılmış o...
  - `Ogel C1, s. 122` (eslesen: _BİR eRMiŞ_)
    > ...sanki daldır. “Git de bul bu kartalı, tüyünden getir bana, “O zaman düşünmeden, veririm kızı sana!” [s. 122] UYGURLARIN TÜREYİŞ EFSANESİ nı “Genç almış silahını, dağlara çıkmış ava, “Aramağa başlamış, böyle büyük bir yuva. “Sora sora giderken, yolda görmüş bir ermiş, “Derdini ona dökmüş, o da bir öğüt vermiş. “Aksakallı ihtiyar, demiş bu yoldan sapma, “Bunu bilen bir benim, kim ne derse hiç yapma! “Bu yolu tutan oğlan, ak bir dağa ulaşmuş, “Etrafında dolaşmış, eteğine yanaşmış. “Nasılsa yerle gökler, birden bire aklaşmış...
  - `Ogel C2, s. 133` (eslesen: _BİR eRMiŞ_)
    > ...çok a & ây iş bakımından söylenmiştir. [s. 133] KURT VE TÜRKLER n? 7) “Kurt kürkü” motifi de, Ortaasya Türk halk edebiyatında çok yaygındır. “Yiğitler, kurt kürkü, (yani, karışkır tonu) giyiniyorlardı** 8) “Yerde veya alçakta 30 kurt, gökte ise 40 kurt”, “bir ermişin rüyasında görülüyor ve her kurda, bir atış yapılıyor?" Din veastronomi bakımından mânâsı olan bu masal, derin olarak incelenmelidir?*. 9) “Kötü bir rub olarak kurt”? motifi de, Ortaasya Türk edebiyatında çok yaygındır. [[s. 133]] Örnek olarak “kaskır-alp”,...
  - `03_Muharrem_Ergin_Dede_Korkut_Kitabi, s. 113` (eslesen: _YOLI BİR_)
    > ...vsa vss 100 DEDE KORKUT KİTABI letüğdür, kar ile yağmur didügüü leşkerüüdür, şaç * kayğudur, kan karadur, kalanısın yora bilmen Allah yorsun 19 didi. Böyle digeç Kazan aydur: Menüm avumu bozma, leşkerümi tağıtma, 11 ben bugün koğur ata kakıram, üç günlik yolı bir günde aluram, 12 öyle olmadın yurdum üstine varuram, eger şağdur esen!?dür abşam olmadın gine ben safa gelürem, ordum şağ esen * degül ise başufuza çara idüü, men dahı gitdüm didi. [[s. 113]] * Köğur atın mahmuzladı Kazan Big yola gitdi. * Geli geli yurdınun...


## TY1-D-6#3 - Tonyukuk Yazıtı, Doğu 6. satir  (8 kelime)

- **transkripsiyon:** `TUMıŞ : TiYiN : eŞiDiP : BU : YOLuN : YORISaR : YaRaMaÇI : TiDiM`
- **kelime karsiliklari:** TU[TUK]MUŞ : DİYE : İŞİTİP : BU : YOLU : YÜRÜSE[K] : YARAMIYACAK : DEDİM
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _eŞiDiP BU YOLuN YORISaR_)
    > ...“Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti, <kün yeme> olursıkım kelmez erti. Anta sakıntım a: (D 6) “(İlk Kırkızkla süllesler Iyeğ er)miş” tedim. “Köğmen yolı bir ermiş, tumış” teyin eşidip “Bu yolun yorısar yaramaçı” tedim. Yerçi tiledim. Çölgi Az eri bultum. (D 7) Eşittim: Az yir yloh?| Anı blirle? .... erlmiş. Bir at oruki ermiş. Anın barmış. [[s. 45]] Afğar aytıp “Bir atlığ barmış” teyin “Ol yolun yorısar unç” tedim. Sakıntım. Kağanıma (K 1) ötüntüm. Sü yor...
  - `Tekin 2003, s. 122` (eslesen: _BU YOLuN YORISaR YaRaMaÇI_)
    > ...pgan Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädgüg ol ärinç* "Gittiğin yerlerde (tek) kazancın şu oldu:" (KT D 2) b) Gösterme sıfatı olarak: *bu süg elt tidi* "Bu orduyu sevk et dedi" (T 32) *bu yolun yorısar yaramaçı* "Bu yoldan gidersek yaramıyacak" (T 23) *bu türük bodun ara yarıklıg yagıg yältürmädim tügünlüg atıg yügürtmädim* "Bu Türk halkı arasına zırhlı düşmanları akın ettirmedim, (kuyrukları) düğümlü (düşman) atlarını (da) koşturtmadım" (T 5) *bu ırk bitig* "bu fal...
  - `Ata 2011, s. 145` (eslesen: _BU YOLuN YORISaR YaRaMaÇI_)
    > ...çekimlerinde, kişi ekleri olarak kişi zamirleri ve iyelik ekleri kullanılır. 2. Aşağıdaki ifadelerin hangisinde gelecek zaman eki kullanılmamıştır? a. türük bodun yok bolmazun tiyin bodun bolçun tiyin b. oguzug ölürteçik tir men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bod...
  - `Ata 2011, s. 138` (eslesen: _BU YOLuN YORISaR YaRaMaÇI_)
    > .... [[s. 138]] Gelecek zaman çekimlerinde, kişi ekleri olarak kişi zamirleri ve iyelik ekleri kullanılır. 2. Aşağıdaki ifadelerin hangisinde gelecek zaman eki kullanılmamıştır? a. türük bodun yok bolmazun tiyin bodun bolçun tiyin b. oguzug ölürteçik tir men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan m...
