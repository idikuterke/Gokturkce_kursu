# Ceviri istek paketi 29 - Orhun cumlecikleri

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


## BK-K-9#4 - Bilge Kağan Yazıtı, Kuzey 9. satir  (12 kelime, TAS KIRIGI)

- **transkripsiyon:** `MeN : TÜRGiŞ : KaGaNKA : KıZıMIN : --- : eRTİŊÜ : ULuG : TÖRÜN : aLI : BİRTiM : TÜRGiŞ : KaGaN`
- **kelime karsiliklari:** BEN : TÜRGİŞ : KAĞANINA : KIZIMI : --- : YÜCE : ULU : TÖREN [İLE] : ALI : VERDİM : TÜRGİŞ : KAĞANININ
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _eRTİŊÜ ULuG TÖRÜN aLI_)
    > ...taki halkları defalarca tanzim etmiş, defalarca düzene sokmuşlar. Tanrı lütfettiği için, tahta oturduğumda (ben de) dört bucaktaki halkları tanzim ettim (ve) düzene soktum Sart yaptım. [s. 32] 60 BİLGE KAĞAN YAZITI Men (Tlürgiş kağanka kızımlın .......... | ertinğü uluğ törün alı birtim. Türlgiş kağan) (K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengri aslra| yer ya...
  - `Tekin 2003, s. 117` (eslesen: _aLI BİRTiM TÜRGiŞ_)
    > ...i ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok büyük bir törenle oğluma alıverdim" (BK K 9-10) 4. Bağlaç görevinde: *ingäk köläk+in toglada oguz kälti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *igidmiş bilgä kaganıŋ+ın ärm...
  - `Tekin 1998, s. 13` (eslesen: _TÜRGiŞ KaGaN_)
    > ...teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi y...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGiŞ KaGaN_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] B...
  - `Tekin 2003, s. 116` (eslesen: _TÜRGiŞ KaGaN_)
    > .... 116 — TALAT TEKİN ## Eşitlik Durumu **268.** Adların eşitlik durumu {+çA} eki ile kurulur. Bir adın eşitlik durumu eşitlik-karşılaştırma, yaklaşıklık ve görecelik zarfları olarak görev yapar (bk. **Zarflar**): 1. Eşitlik ve karşılaştırma zarfı görevinde: *türgiş kagan süsi ot+ça bor+ça kälti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *buzkun+ça kälir ärtimiz* "Fırtına gibi geliyorduk" (O 9-10) *kanıŋ sub+ça yügürti süŋöküŋ tag+ça yatdı* "Kanın sular gibi aktı, kemiklerin dağ gibi yığıldı...
  - `Tanyeri, s. 24` (eslesen: _TÜRGiŞ KaGaN_)
    > ...yle seslenişi, anlam boyutunda estetik ve ahengin gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli...


## BK-K-10#1 - Bilge Kağan Yazıtı, Kuzey 10. satir  (7 kelime)

- **transkripsiyon:** `KIZIN : eRTİŊÜ : ULuG : TÖRÜN : OGLıMA : aLI : BİRTiM`
- **kelime karsiliklari:** KIZINI : YÜCE : ULU : TÖRENLE : OĞLUMA : ALI : VERDİM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _KIZIN eRTİŊÜ ULuG TÖRÜN_)
    > ...e sokmuşlar. Tanrı lütfettiği için, tahta oturduğumda (ben de) dört bucaktaki halkları tanzim ettim (ve) düzene soktum Sart yaptım. [s. 32] 60 BİLGE KAĞAN YAZITI Men (Tlürgiş kağanka kızımlın .......... | ertinğü uluğ törün alı birtim. Türlgiş kağan) (K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengri aslra| yer yarlıkaduk üçlün)|, (K 11) közün körmedük, kulkakın eşidm...
  - `Tekin 2003, s. 117` (eslesen: _aLI BİRTiM_)
    > ...i ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok büyük bir törenle oğluma alıverdim" (BK K 9-10) 4. Bağlaç görevinde: *ingäk köläk+in toglada oguz kälti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *igidmiş bilgä kagan...
  - `Tekin 1998, s. 23` (eslesen: _BİRTiM_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşl...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiM_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti...
  - `Ata 2011, s. 112` (eslesen: _BİRTiM_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövde...
  - `Ata 2011, s. 105` (eslesen: _BİRTiM_)
    > ...s. 105] bodun+ıŋ ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. [[s. 105]] +(I)n: İyelik ekli gövdeler ü...


## BK-K-10#2 - Bilge Kağan Yazıtı, Kuzey 10. satir  (6 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : eRTİŊÜ : ULuG : TÖRÜN : aLI : BİRTiM`
- **kelime karsiliklari:** --- : YÜCE : ULU : TÖRENLE : ALI : VERDİM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _eRTİŊÜ ULuG TÖRÜN aLI BİRTiM_)
    > ...taki halkları defalarca tanzim etmiş, defalarca düzene sokmuşlar. Tanrı lütfettiği için, tahta oturduğumda (ben de) dört bucaktaki halkları tanzim ettim (ve) düzene soktum Sart yaptım. [s. 32] 60 BİLGE KAĞAN YAZITI Men (Tlürgiş kağanka kızımlın .......... | ertinğü uluğ törün alı birtim. Türlgiş kağan) (K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengri aslra| yer yarlıkadu...
  - `Tekin 2003, s. 117` (eslesen: _aLI BİRTiM_)
    > ...i ile (elinde silahı ile) tuttu" (KT D 32) *yir sayu barmiş bodun ölü yitü yadag+ın yalaŋ+ın yana kälti* "(Ben kendim tahta çıktığımda) her yere gitmiş olan halk, öle yite, yayan yapıldak dönüp geldi" (KT D 27-28) *türgiş kagan kızın ärtiŋü ulug törö+n ogluma alı birtim* "Türgiş [s. 118] # s. 118 — TALAT TEKİN Hakanının kızını çok büyük bir törenle oğluma alıverdim" (BK K 9-10) 4. Bağlaç görevinde: *ingäk köläk+in toglada oguz kälti* "İngek gölcüğü ile Tola ırmağından Oğuzlar (üzerimize) geldi" (T 15) *igidmiş bilgä kagan...
  - `Tekin 1998, s. 23` (eslesen: _BİRTiM_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşl...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiM_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti...
  - `Ata 2011, s. 112` (eslesen: _BİRTiM_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövde...
  - `Tekin 1998, s. 24` (eslesen: _TÖRÜN_)
    > ...uğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Süngüğlüğ kantan kelipen süre eltdi? Iduk Ötüken yfış bodun,...


## BK-K-10#3 - Bilge Kağan Yazıtı, Kuzey 10. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `Ya --- T : eRTÜRTüM : --- : BaŞLıGıG : YÜKüNTüRTüM`
- **kelime karsiliklari:** YA --- T : ERDİRDİM : --- : BAŞLIYI : YÜKÜNDÜRDÜM
- **kanit:**
  - `Tekin 1998, s. 23` (eslesen: _BaŞLıGıG YÜKüNTüRTüM_)
    > ...üğüz, Şantung yazıka teği süledimiz, kurığaru Temir Kapığka teği süledimiz; Köğmen aşa Klırkız yiringe teği süledimiz). (D 18) Kamağı biş otuz süledimiz, üç yeğirmi süngüşdümiz. [[s. 23]] İlliğiğ ilsiretdimiz, kağanlığığ kağansıratdımız; tizliğiğ sökürtümiz, başlığığ yüküntürtümiz. Türgiş Kağan Türükümiz, |bodunumız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20...
  - `Tekin 1998, s. 28` (eslesen: _eRTÜRTüM_)
    > ...ağanta Makaraç tamgaçı Oğuz Bilge tamgaçı kelti. Kırkız kağanta Tarduş Inançu Çor kelti. [[s. 28]] Bark itgüçi bediz yaratığma bitiğ taş itgüçi Tabgaç kağan çıkanı Çağ Senğün kelti. (K-D) Kül Tigin Kony yılka, yiti yeğirmike uçdı. Tokuzunç ay yeti otuzka yoğ ertürtümiz. Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigi...
  - `Olmez 2017, s. 42` (eslesen: _eRTÜRTüM_)
    > ...* | ıt çıl | noqai | ᠨᠣᠬᠠᠢ | | 12 | domuz | 豬 zhu | *lagzın* / *toŋuz yıl* | havan çıl | ġaqai | ᠭᠠᠬᠠᠢ | [s. 42] # s. 042 — Mehmet Ölmez (basılı sayfa 44) *bonça kazganıp kayım kagan ıt yıl onunç ay altı otuzka uça bardı lazgin yıl bėşinç ay yėti otuzka yog ertürtüm* "Bu kadar şeyi temin edip babam hakan köpek yılında, onuncu ay, yirmi altıncı gün vefat etti (25 Kasım 734). Domuz yılının beşinci ayının yirmi yedisinde cenaze törenini yaptırdım (22 Haziran 735)." (BK G 10) [Görsel: Louis Bazin'in *Les Systèmes Chronologi...
  - `Tekin 1998, s. 11` (eslesen: _BaŞLıGıG_)
    > ...mak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “içi aşsız, dışı giysisiz” (karnı aç, sırtı çıplak), körür közi körmez teğ, bilir biliği bilmez teğ bol- “gören gözleri görmez gibi, eren a...
  - `Tekin 2003, s. 182` (eslesen: _BaŞLıGıG_)
    > ...35) - *kırkızıg uka bas-dımız [usı]n süŋügün aç-dımız* "Kırgız halkını uykuda bastırdık, uykularını mızraklarımızla açtık" (T 27-28) - *kırkız kaganin ölür-tümüz ilin al-tımız* "Kırgız hakanını öldürdük, devletini zapt ettik" (KT D 36) - *tizligig sökür-tümüz başlıgıg yüküntür-tümüz* "Dizliyi (güçlüyü) çökerttik, başlıya (mağrura) baş eğdirdik" (KT D 18, BK D 15-16) - *bir yılka beş yolı süŋüş-dümüz* "Bir yılda beş kez savaştık" (KT K 4) - *kagan at bunta biz bir-timiz* "Hakan unvanını burada (ona) biz verdik" (KT D 20) [...
  - `Ata 2011, s. 47` (eslesen: _BaŞLıGıG_)
    > ...ra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılmış başlıgıg yüküntürmiş tizligig sökürmiş … “Üstte mavi gök altta kara toprak yaratıldığında, ikisinin arasında insanoğlu yaratılmış. İnsanoğullarının üzerinde atalarım dedelerim Bumın Kağan (ve) İştemi Kağan tahta oturmuş. Tahta oturarak, Türk halkının devletini,...


## BK-K-10#4 - Bilge Kağan Yazıtı, Kuzey 10. satir  (8 kelime)

- **transkripsiyon:** `TİZLiGiG : SÖKüRTüM : ÜZE : TeŊRİ : aSRA : YiR : YaRLıKaDUK : ÜÇüN`
- **kelime karsiliklari:** DİZLİYİ : ÇÖKTÜRDÜM : ÜSTTE : TANRI : ALTTA : YER : BUYURDUĞU : İÇİN
- **kanit:**
  - `Ata 2011, s. 121` (eslesen: _ÜZE TeŊRİ aSRA_)
    > ...erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde...
  - `Ata 2011, s. 114` (eslesen: _ÜZE TeŊRİ aSRA_)
    > ...duk erinç “andan sonra erkek kardeşleri ağabeyleri gibi yaratılmamış şüphesiz” KT D4; antag külüg kagan ermiş ‘onca ünlü hükümdar imiş’ KT D4 üçün: türük bodun üçün tün udımadım küntüz olurmadım “Türk halkı için geceleri uyumadım, gündüzleri oturmadım” KT D27 üze teŋri asra yagız yer yarlıkaduk üçün “yukarıda gök aşağıda kara toprak buyurduğu için” BK K10 Açıklama: [[s. 114]] Bu sontakı, kişi zamirleri ile iyelik gövdelerinin nesne durumunu yönetir: a+nı üçün ilig ança tutmış erinç “onun için devleti öylece ellerinde tutmuşlar...
  - `Ogel C2, s. 167` (eslesen: _ÜZE TeŊRİ aSRA_)
    > ...ktedir. F. W. Müller, eski Uy gur yazılarındaki, “Tengriler Tengrisi yerinte”” sözünün çin cekarşılığımı, ““Göğün yüceliği”'”' (T'ien-shang) olarak teeshit etmişti: (Uig.,1,24). [[s. 167]] “Üze” sözümüz de, yine çince “shang” karşılığı olarak gösterilmişti: “Üze Tengri, asra yer, izin verdiği (yarlıkadukın) üçün, “Közün görmediği (közün körmedük), kulağın işitmedik...” (IIKİ1-12). 2) “*Ediz”'”' sözü ikinci devrede görülüyordu. Edizde, Yücelik ve çince karşılığı (shang) idi. Kutadgu Bilig'de görülüyordu. Uygur el yazılarında, bun...
  - `Radloff, s. 220` (eslesen: _ÜZE TeŊRİ aSRA_)
    > ...zümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze tengri asra yer yarlıkaduk üçün ... ). Tonyukuk ya zıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakan lığı devrinde maddf bir varlık tasavvur edilen "gök" ile onun sa hibi olan ruh birbirinden a...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _ÜZE TeŊRİ aSRA_)
    > ...tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş.. . [[s. 32]] ; üze tengri asra yer yarlıkaduk ü çün ...). Tonyukuk yazıtının bir yerinde tanrı ile beraber Umay, yer-su zikrolunuyor (tengri, umay, yer-sub basa berti). Gök Türk ve ilk Uygur hakanlığı devrinde maddî bir varlık tasavvur edilen “ gök” ile onun sahibi olan ruh bir birinden ay...


## BK-K-11#1 - Bilge Kağan Yazıtı, Kuzey 11. satir  (15 kelime, TAS KIRIGI)

- **transkripsiyon:** `KÖZüN : KÖRMeDüK : KULKaKıN : eŞiDMeDüK : BODuNuMuN : İLGeRÜ : KÜN : TOGSıKıŊA : BİRiGeRÜ : --- KA : KURıGaRU : --- : SaRIG : aLTUNIN : ÜRüŊ`
- **kelime karsiliklari:** GÖZÜN : GÖRMEDİĞİ : KULAĞIN : İŞİTMEDİĞİ : BOYLARIMI : İLERİ : GÜN : DOĞUSUNA : BERİDE : --- KA : GERİDE : --- : SARI : ALTININI : ÜRÜNG
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _KÖZüN KÖRMeDüK KULKaKıN eŞiDMeDüK_)
    > ...K 10) kızın ertinğü uluğ törün oğluma alı birtim: lx aurucacn | ertinğü uluğ törün alı birtim.. Yla az Jt ertülr)tüm. Törlt bulungdakı bodunuğ) baz (kıltım. Blaş(Ilığığ yüküntürtüm, tizliğiğ sökürtüm. [[s. 32]] Üze tengri aslra| yer yarlıkaduk üçlün)|, (K 11) közün körmedük, kulkakın eşidmedük bodunumın ilgerü kün tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodu...
  - `Tekin 1998, s. 11` (eslesen: _İLGeRÜ KÜN_)
    > ...gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güneyde gün ortasına doğru; batıda gün batısına, kuzeyde gece ortasına doğru...”, İlgerü Şantufiğ yazıka teği süledim, taluyka kiçiğ teğmed...
  - `Olmez 2017, s. 21` (eslesen: _İLGeRÜ KÜN_)
    > ...mlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın...
  - `Ogel C2, s. 167` (eslesen: _KÖZüN KÖRMeDüK_)
    > ...te”” sözünün çin cekarşılığımı, ““Göğün yüceliği”'”' (T'ien-shang) olarak teeshit etmişti: (Uig.,1,24). [[s. 167]] “Üze” sözümüz de, yine çince “shang” karşılığı olarak gösterilmişti: “Üze Tengri, asra yer, izin verdiği (yarlıkadukın) üçün, “Közün görmediği (közün körmedük), kulağın işitmedik...” (IIKİ1-12). 2) “*Ediz”'”' sözü ikinci devrede görülüyordu. Edizde, Yücelik ve çince karşılığı (shang) idi. Kutadgu Bilig'de görülüyordu. Uygur el yazılarında, bunun yanında “yüksek ediz” esözleri,aynımanayı tamamlıyorlardı: (KP,61,5)....
  - `Ogel C2, s. 483` (eslesen: _İLGeRÜ KÜN_)
    > ...oğularında, belki de Kadırgan ormanları üzerindeki geri Proto-Moğolkavimlerdi. Kül Tegin yazıtında da şöyle deniliyordu: “.. Doğuda, gün doğusunda, Bö kli Kağan'a kadar, asker gönderivermiş, (akın yapmış)...” Bu sözlerin eski türkçesi şöyledir: “.. [[s. 483]] İlgerü, kün togsıkka. Bökli Kagan'ka tegi, süleyi bermiş...”' 2.**Ormanlıvebozkırlı halk””' deyişini de, yine Kültegin yazıtında görüyoruz. Bunlar da yine, doğudaki Proto-Moğol kavimleri olabilirlerdi. Yazıtta, bozkırlı yerine, “çöl(1)iğ”, yani çöl1 ü sözü kullanılıyord...


## BK-K-11#2 - Bilge Kağan Yazıtı, Kuzey 11. satir  (10 kelime)

- **transkripsiyon:** `KÜMüŞİN : KIRGaGLıG : KUTaYIN : KİNLiG : iŞGiTİSİN : ÖZLüK : aTIN : aDGıRIN : KaRA : KİŞİN`
- **kelime karsiliklari:** GÜMÜŞÜNÜ : KIRGALI : KUTAYINI : KİNLİ : İŞGİTİSİNİ : ÖZLÜK : ATINI : AYGIRINI : KARA : KİŞİNİ
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _KÜMüŞİN KIRGaGLıG KUTaYIN KİNLiG_)
    > ...tizliğiğ sökürtüm. [[s. 32]] Üze tengri aslra| yer yarlıkaduk üçlün)|, (K 11) közün körmedük, kulkakın eşidmedük bodunumın ilgerü kün tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; em...
  - `Tekin 2003, s. 146` (eslesen: _ÖZLüK aTIN_)
    > ...kümüş kärgäksiz kälürti* “On binlerce ipekli kumaş, altın ve gümüşleri eksiksiz olarak getirdiler” (KT K 12) - *altun kümüş kärgäksiz kälürti* “Ziyadesiyle altın ve gümüş getirdiler” (BK G 11), vb. **333.** *sansız* “sayısız” < *sān* “sayı” + *sız*: - *ädgü özlük atin kara kişin kök täyänin sansız kälürüp kop kot(t)ı* “(Onlar) iyi binek atlarını, kara samurları ve mavi sincapları pek çok sayıda getirip bıraktılar” (BK G 12), vb. **334.** *üküş* “çok” (bk. **Belirsizlik Sayıları**). **335.** *antag* “onca, o kadar” < *anı...
  - `Tekin 1998, s. 41` (eslesen: _KaRA KİŞİN_)
    > ...esasa (G 11) kanğı Lisün Tay-Sefiğün başadlu) biş yüz eren kelti. Kokulık Öl... 3 0.0 | altun kümüş kergeksiz kelürti. [[s. 41]] Yoğ yıparığ kelürüp tike birti. Çıntan ığaç kelürüp Öz Yarlı:.500n | (G 12) Bunça bodun saçın kulkakın (blıçdı. Edgü özlik atın, kara kişin, kök teyefiğin sansız kelürüp kop kottı. (G 13) Tengri teğ, Tefngri yarlatlmış Türük Bilge |Kağan)| sabım: Kanğım Türük Bilge Kağan olurtukınta Türük matı beğler, kisre Tarduş beğler, Kül Çor başlayu ulayu Şadapıt ORHON YAZITLARI 79 kadınlarını yok ettim T...
  - `08_Pertev_Naili_Boratav_100_Soruda_Turk_Halk_Folkloru, s. 39` (eslesen: _KaRA KİŞİN_)
    > ...limesi olmalı imiş: «Kara-Köyden geliyorum...» v.b.; yoksa karşısındakini, kafasına elindeki kocaman tarakla vurarak, öldürürmüş. Bu günlerde evlerde bütün taraklan kilitlerler, Kancalar'ın eline geçmesin diye. - Yozgatta bu varlığın adı Congolos'tur; evlere, kara-kışın sonu, zemherinin başında, bir hafta süresince (10 ocakla 17 ocak arası) uğrarmış; bu yedi günlük süreye de congolos derler, bunun için. [[s. 39]] Congolos, açık kalmış yiyecek küplerine tükürür, işer, böylece hastalıklara sebep olurmuş; kimi insanları da, yak...
  - `Tekin 2003, s. 246` (eslesen: _KIRGaGLıG_)
    > ...*kıd-** kıymak, öldürmek (KT G 6, BK K 4) - **kıl-** kılmak, yapmak, etmek - **kılıç** kılıç (IB 8) - **kılıçla-** kılıçtan geçirmek - **kılın-** yaratılmak, doğmak - **kılınç (?)** iş, amel (MÇ K 12) - **kılınçlıg** mizaçlı, yaratılışlı (Toyok I arka 3) - **kırgaglıg** kenarları işlenmiş, kıyılanmış (kumaş) - **kırk** kırk - **Kırkız** etnik ad (Kırgız'lar) - **kıs-** kısmak, bastırmak, hükmü altına almak - **kısga** kısa - **kısıl** dar dağ geçidi (BK D 37) - **kış** kış - **kış-** birlikte yapmak, etmek (KT D 32, vb.) -...
  - `Tekin 1998, s. 28` (eslesen: _KÜMüŞİN_)
    > ...ğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin olmasaydı) annem hatun başta olmak üzere (diğer) annelerim, ablalarım, gelinlerim, prenseslerim, bunca hayatta kalanlar cariye olacak idi, ölenler (de) yazıda yabanda yata kalacak idiniz; (K 10) K...


## BK-K-12#1 - Bilge Kağan Yazıtı, Kuzey 12. satir  (6 kelime)

- **transkripsiyon:** `KÖK : TeYeŊİN : TÜRÜKüME : BODuNuMA : KaZGaNU : BİRTİM`
- **kelime karsiliklari:** GÖK : TEYENİNİ : TÜRKÜME : BOYLARIMA : KAZANI : VERDİM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _KÖK TeYeŊİN TÜRÜKüME BODuNuMA KaZGaNU BİRTİM_)
    > ...rmedük, kulkakın eşidmedük bodunumın ilgerü kün tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at bir...
  - `Tekin 2003, s. 109` (eslesen: _BODuNuMA KaZGaNU BİRTİM_)
    > ...i de buraya hakkettim" (KT G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg altu]ni+n, ürüŋ kümüşi+n, kırgaklıg kotayi+n kinlig eşgitisi+n özlük ati+n adgıri+n kara kişi+n kök täyäŋi+n türükümä bodunuma kazganu birtim, iti birtim* "Sarı altınlarını, beyaz gümüşlerini, kenarları işlenmiş ipek kumaşlarını, kokulu ipeklilerini, has atlarını, aygırlarını, kara samurlarını ve mavi renkli sincaplarını Türklerime ve halkıma kazanıverdim, ediniverdim" (BK K 11-12) *kül tiginiŋ alt...


## BK-K-12#2 - Bilge Kağan Yazıtı, Kuzey 12. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `İTİ : BİRTiM : --- : BUŊSuZ : KILTıM`
- **kelime karsiliklari:** EDİ : VERDİM : --- : BUNGSUZ : KILDIM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _İTİ BİRTiM_)
    > ...tulğsıkınğa), birgerü (kün ortusıfğ)a, kurığaru (kün batsıkınğa, yırgaru tün ortusınğa teği konturtum. Sarığ altujnın, ürüng kümüşin, kırgağlığ kutayın, kinliğ eşgitisin, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İk...
  - `Tekin 2003, s. 109` (eslesen: _İTİ BİRTiM_)
    > ...T G 10), vb. 3. Nesne durumu eki, üçüncü kişi iyelik eki almış sözcüklerde, doğal olarak, yalnızca /+n/dir: *[sarıg altu]ni+n, ürüŋ kümüşi+n, kırgaklıg kotayi+n kinlig eşgitisi+n özlük ati+n adgıri+n kara kişi+n kök täyäŋi+n türükümä bodunuma kazganu birtim, iti birtim* "Sarı altınlarını, beyaz gümüşlerini, kenarları işlenmiş ipek kumaşlarını, kokulu ipeklilerini, has atlarını, aygırlarını, kara samurlarını ve mavi renkli sincaplarını Türklerime ve halkıma kazanıverdim, ediniverdim" (BK K 11-12) *kül tiginiŋ altunı+n kümüşi...
  - `Tekin 1998, s. 23` (eslesen: _BİRTiM_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşl...
  - `Tekin 2003, s. 107` (eslesen: _BİRTiM_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti...
  - `Ata 2011, s. 112` (eslesen: _BİRTiM_)
    > ...ilin törüsin KT D1 “halkın devletini ve yasalarını” köl tigin+iŋ altunın kümüşin KT GB “Köl Tigin’in altınını gümüşünü” 3. Belirtme Durumu (Yükleme, Akuzatif): +(X)g, +(I)n, +nI a. +(X)g: Yalın hâldeki isimler üzerine gelir. kagan at+ıg bunta birtimiz BK D17 “kağan adını burada verdik” at+ıg ıka bayu ertimiz T 27 “atları ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövde...
  - `Tekin 2003, s. 241` (eslesen: _BUŊSuZ_)
    > ...ALAT TEKİN (basılı sayfa numarası 242) - **bunı** bunu - **bunta** burada - **bunt(u)t-** (?) (uykusunu) kaçırtmak (?) (T 19) - **buŋ** ihtiyaç, yokluk; dert, sıkıntı - **buŋad-** bunalmak, sıkılmak - **buŋsız** fazlasiyle, bol bol, esirgemeden (T 48); bk. **buŋsuz** - **buŋsuz** bk. **buŋsız** - **buŋusuz** (Barık II 3); bk. **buŋsız, buŋsuz** - **Burgu** yer adı (MÇ D 3, Tar. B 4) - **busanç** acı, ıstırap (IB 52) - **busuşlug** kederli, üzgün (IB 52) - **buyruk** yüksek görevli, kumandan - **Buyla** yüksek bir unvan...


## BK-K-12#3 - Bilge Kağan Yazıtı, Kuzey 12. satir  (13 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : --- RTİ : eRKLiG : --- : aNÇA : TÜMeN : OGLI : --- YA : aLMıN : --- ÜN : BeGLeRiG : BODuNuNDA : ---`
- **kelime karsiliklari:** --- : --- RDİ : ERKLİ : --- : ONCA : TÜMEN : OĞLU : --- YA : ALMIN[?] : --- ÜN : BEĞLERİ : BOYLARINA : ---
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _BeGLeRiG_)
    > ...lrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua MAYAN | kazganıp: Yanığı Deran ceryan ji bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s. 32]] |..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ...
  - `Tekin 1998, s. 12` (eslesen: _eRKLiG_)
    > ...2]] Tunyukuk, Şad ünvanını taşıyan ve sadece yedi yüz kişilik küçük bir kuvveti olan Kutluğ'u kağan ilan etmenin isabetli bir karar olup olmayacağını düşünürken duruma uygun olan bu atasözünü hatırlıyor ve kullanıyor. Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka kalın bolsar topulgalı alp ermiş, yinçge yoğun bolsar üzgülük alp ermiş “(Bir şey) yufka iken (onu) delmek kolay imiş; ince olanı kırmak kolay; yufka kalın olursa (onu) delmek zor [[s. 12]] ORHON YAZITLARI 21 imiş, ince yoğun olursa (onu)...
  - `Tekin 2003, s. 118` (eslesen: _eRKLiG_)
    > ...a çalışmasam ve başarılı olmasaydım..." (BK D 33) *korıgu eki üç kişi+ligü täzip bardı* "(Kale) muhafızı iki üç kişi ile birlikte kaçıp gitti" (BK D 41) *tört ini+ligü ärtimiz bizni ärklig adırtı* "Biz hep birlikte dört erkek kardeştik. Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I sağ 2) Birliktelik eki {+lIgU}, Uygurcada {+lUgUn} biçimindedir. [s. 119] # s. 119 — ORHON TÜRKÇESİ GRAMERİ ## Zamirler ## Kişi zamirleri **271.** Orhon Türkçesindeki gerçek kişi zamirleri şunlardır: *bän* ~ *män* "ben", *sän* "sen",...
  - `Olmez 2017, s. 62` (eslesen: _eRKLiG_)
    > ...kelti* "Sekiz Oğuz, Tokuz Tatar'dan (geride hiç kimse) kalmaksızın geldi." (MÇ D 3) **{-gAlI} :** *yadag yavız boltı tép algalı kelti* "Yaya olanları perişan oldu diyerek teslim almak amacıyla geldiler" (BK D 32); *yuyka erkli topulgalı uçuz ermiş yinçge erklig üzgeli uçuz* "Yufka olanı delmek kolaymış. İnce olanı koparması kolaymış." (T 13) **{-çA} :** *ulug oglum agrip yok bolça k²og seyünüg balbal tike bértim* "Büyük oğlum hastalanıp vefat edince General Kog'u balbal dikiverdim." (BK G 9); *yugur<ur>ça tédip...
  - `Roux, Eski Din, s. 155` (eslesen: _eRKLiG_)
    > ...ılamaz ilişkiler içindedir ve her an tekrar geri gelebilir. [[s. 155]] Bu olgudan birçok ritüel ortaya çıkmıştır. Beden yok olduğu zaman ruh serbest kalır ve başıboş bir ruh olur veya başka bir yere yerleşerek belki de bedenin oluşmasından önce sahip olduğu özerkliğe tekrar kavuşur. Bütün bunları değerlendirdiğimizde Türkler ve Moğolların, kesin veya göreli bir devamlılığı bulunan nesnelerle (ve işte bu nedenle taşı ölümsüz olarak nitelendirirler) doğuma ve ölüme bağımlı olan [[s. 155]] nesneler arasında yapılması gereke...
  - `Radloff, s. 164` (eslesen: _eRKLiG_)
    > ...adını verirler. Yer alhnda yaşadıklarına inanılan ve birtakım korkunç şekillerde tasavvur edilen ayna, ada, aza yör, üzüt, gek vs. gibi ruhlar da vardır. [[s. 164]] Kötü ruhların başında, yer alh dünyasının hakimi sayılan Erlik Kan gelir. Uy gur metinlerinde Erklig Kan "kuvvetli han" diye geçen Erlik, Budistlerde yer altı hükümdarı olan Yama'ya tekabül eder. Mi nusinsk havalisindeki Türklerin İrle Kan veya İl Kan'ı, Buryatla rın Erlen Kan'ı da Erlik Kan' dan başka bir şey değildir. Yakutlar da yer altının hakimi olarak...


## BK-K-13#1 - Bilge Kağan Yazıtı, Kuzey 13. satir  (5 kelime)

- **transkripsiyon:** `YiME : İGiDiŊ : eMGeTMeŊ : TOLGaTMaŊ : OLuRTuM`
- **kelime karsiliklari:** YİNE : İGİDİP : EMEKLETMEDEN : TOLGATMADAN : OTURDUM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _TOLGaTMaŊ_)
    > ...in, özlik atın, adgırın, kara klişin| (K 12) kök teyenğin Türüküme bodunuma kazganu birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua MAYAN | kazganıp: Yanığı Deran ceryan ji bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14)...
  - `Tekin 1998, s. 19` (eslesen: _OLuRTuM_)
    > ...ant, ent, nt D aş aş Dd baş baş YAZITLAR Kısaltmalar G Güney Yüzü; D Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kü...
  - `Tekin 2003, s. 76` (eslesen: _OLuRTuM_)
    > ...**kälürdi* [s. 76] # s. 76 — TALAT TEKİN - *körti* "gördü" (KT D 19) < **kördi* - *kötürti* "kaldırdı, yükseltti" (BK D 10) < **kötürdi* - *olortum* "tahta oturdum" (KT D 26, vb) < **olordum*, *olortokda* "tahta oturduğunda" (KT D 17, vb.) < **olordokda* - *ölürtüm* "öldürdüm" (BK D 26, vb.) ~ *ölürdüm* (Bay Bulun I 3, vb.) - *yertä* "yerde" (KT G 13, 13; BK K 15) ~ *yerdä* (BK D 35, 36), *yerdäki* (T 56), *yirdä* (IB 16, 17, 49), vb. İstisnalar: *adırdım*, *ölürdüm* ve *yerdä* örneklerine ek olarak *bar-* eyleminin çe...
  - `Ata 2011, s. 115` (eslesen: _OLuRTuM_)
    > ...ı yeti ‘47’ KT D 15 107 [s. 115] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdü...
  - `Ata 2011, s. 108` (eslesen: _OLuRTuM_)
    > ...dir) otuz artukı sekiz ‘38’ BK G2 kırk artukı yeti ‘47’ KT D 15 [s. 108] 2. Sıra Sayıları Orhun Türkçesinde sıra sayıları şu şekillerde geçer: a. ‘birinci, ilk önce’ için ilki, eŋ ilk ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta s...
  - `Kafesoglu, s. 153` (eslesen: _OLuRTuM_)
    > ...aynı zamanda toy üyeleri olduklarına göre (bk. yk. Devlet Meclisi-Toy), buyrukların toygunlar arasından seçildikleri düşünülebilir, nitekim buyruk olmayan toy üyeleri de vardır288. [[s. 153]] Kitabe, I, batı: "Tunik Bilge Kağan ayukıka inim Kül Tigmig küzedü olurtum" « "(Ben) Türk Bilge Kağan, Hükümet (dominion, realm)'e küçük kardeşim Kül-Tegin'i gözetici yaptım" (bk. T. Tekin, A. Grammar..., s. 238, 273, 306). 716 yılında bir ihtilâl hareketi sonucunda tahta çıkan Bilge, kardeşi Kül-Tegin'e ordu kumandanlığı vb... gibi...


## BK-K-13#2 - Bilge Kağan Yazıtı, Kuzey 13. satir  (7 kelime, TAS KIRIGI)

- **transkripsiyon:** `TÜRK : BeGLeR : TÜRK : BODuNuM : --- : aT : BİRTiM`
- **kelime karsiliklari:** TÜRK : BEĞLERİ : TÜRK : BOYLARIMA : --- : AT : VERDİM
- **kanit:**
  - `Ata 2011, s. 154` (eslesen: _BeGLeR TÜRK_)
    > ...i] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. edgüti “iyice” < ed “mal, mülk” +gü “iyi” [isimd...
  - `Tekin 1998, s. 32` (eslesen: _aT BİRTiM_)
    > ...birtim, iti birtim. ANNAN Kaç Jin bungsuz kıltım. [[s. 32]] Üze Teüğti erkliğ erse çimen RAT tlümen UğĞl Ran J)inlrr sAN beğlleriğ bodunluğ| (K 13) Iyleme iğidinğ; emgetmeüğ tolgatmang . |.............. Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua MAYAN | kazganıp: Yanığı Deran ceryan ji bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s....
  - `Tekin 2003, s. 228` (eslesen: _aT BİRTiM_)
    > ...käzü süŋüşdüm. Anta sançdım. Anta udu yorıdım. Ol ay biş yegirmikä Käyrä başı, Üç Birküdä Tatar birlä katı tokıdım. Sıŋarı bodun (D 7) içikdi, sıŋarı bodun [....k]a kirti. Anta yana tüşdüm. Ötükän irin kışladım. Yagıda boşuna boşnuldum. Eki ogluma yabgu, şad at birtim; Tarduş, Töliş bodunka birtim. Ançıp bars yılka Çik tapa yorıdım. Ekinti ay tört yegirmikä Kämdä (D 8) tokıdım. Ol y[ıl.....................T]äz başı anta, Kasar kurıdın örgin anta ititdim, çıt anta tokıtdım. Yay anta yayladım, yaka anta yakaladım. Bälgümin...
  - `Ata 2011, s. 147` (eslesen: _BeGLeR TÜRK_)
    > ...m eki] tokuz oguz begleri bodunı “Dokuz Oğuz beyleri ve halkı” +ler [çoğul eki] +i [3. [[s. 147]] tekil/çoğul kişi iyelik eki] Açıklama: Bu dönemde, özel adlarla kurulan tamlamalarda genellikle iyelik ekleri kullanılmaz. türük bodun “Türk halkı” KT G6, türük begler “Türk beyleri” KT G10, tabgaç kaganta “Çin hakanından” KT G11, yinçü ügüz keçe “İnci (Sır Derya) ırmağını geçerek” gibi. tokuz oguz begleri bodunı ifadesinde olduğu gibi iyelik eklerinin kullanımı ise nadirdir. [[s. 147]] edgüti “iyice” < ed “mal, mülk” +gü “iyi” [...
  - `Ogel C2, s. 76` (eslesen: _TÜRK BeGLeR_)
    > ...de de, “*Hakan Efrasyab'ın ağıdında, zamanı anlatan şu parça da gelmiştir', diyordu. Bu şiirler hep, “zaman, felek ve acun” üzerine kurulmuş düşüncelerdir. [[s. 76]] Kutadgu Bili gise,onun Tü r k beylerinden olduğunu belirterek söze, şöyle başlıyordu: R “Bu Türk beglerinden atı belgülüg, Tonga Alp Er'di kutı Belgülüg”: (Bu Türk beylerinden adı ün salmış Tonga Alp Er'in ikbal ile kutu da belgelenmişti'?). Bundan sonra hahanlara öğüt, yani bir “siretü'l-mülük'; başlar. Ne bir zaman, ne bir yer ve ne hadise veya ne de bir başk...
  - `Tekin 1998, s. 19` (eslesen: _BODuNuM_)
    > ...Doğu Yüzü; K Kuzey Yüzü; B Batı Yüzü; G-D Güney-Doğu Yüzü; G-B Güney-Batı Yüzü; K-D Kuzey-Doğu Yüzü [s. 19] KÜL TİGİN YAZITI (G 1) Tenöri teğ Tengride bolmış Türük Bilge Kağan, bu ödke olurtum. Sabımın tüketi eşidgil, ulayu iniygünüm, oğlanım, birki uğuşum bodunum, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içr...


## BK-K-13#3 - Bilge Kağan Yazıtı, Kuzey 13. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- Ü --- : aMTIKA : TaŞıG : --- ÜR --- : KaZGaNMıŞ`
- **kelime karsiliklari:** --- Ü --- : ŞİMDİKİ : TAŞI : --- ÜR --- : KAZANMIŞ
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaZGaNMıŞ_)
    > ...iz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edg...
  - `Tekin 2003, s. 145` (eslesen: _KaZGaNMıŞ_)
    > ...ça* “bunca, bu kadar” < *bun+ça*: - *bunça kazganıp [kaŋım kagan ı]t yıl onunç ay altı otuzka uça bardı* “Bu kadar (çok) kazanıp babam Hakan Köpek yılının onuncu ayının yirmi altısında vefat etti.” (BK G 10) **328.** *ança* “onca, o kadar” < *an+ça*: - *ança kazganmiş <ança> etmiş ilimiz törömüz ärti* “Onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” (KT D 22) - *ança erig yertä bäŋgü taş tokıtdım* “Böyle kolayca erişilir bir yerde ebedi taş yazdırttım” (KT G 13) **329.** *nänçä* “nice, pek çok” < *\*nän+çä*...
  - `Ata 2011, s. 120` (eslesen: _KaZGaNMıŞ_)
    > ...arak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış...
  - `Tekin 1998, s. 21` (eslesen: _TaŞıG_)
    > ...rturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta birmi...
  - `Tekin 2003, s. 189` (eslesen: _TaŞıG_)
    > ...nda geçer. *kün orto yütürüp tün orto kanta nägüdä bul-gay ol* "Gün ortasında yitirip geceyarısı nerede bulacak?" IB 24) *kan(ı)gı nälök öl-gäy ol* "(Onun) gözde sevgilisi niçin ölecekmiş?" (IB 57) *könäki nälök toŋ-gay* "Kovası niçin donacakmış?" (IB 57) *ol taşıg özi üzä t[?ut]sar kopka ut-gay* "O (değerli) taşı kendi üzerinde tutarsa her şeyden kazançlı çıkar" (Toyok 16-18) ## Birleşik Eylem Biçimleri **444.** Birleşik eylem biçimleri yüklem görevinde bir eylem sıfatı ile onu izleyen çekimli *är-* yardımcı eylemind...
  - `Ata 2011, s. 113` (eslesen: _KaZGaNMıŞ_)
    > ...rak şu sözcükler kullanılır: ança ‘o kadar, onca’, kop ‘hep, tümüyle’, bunça ‘bu kadar, bunca’, sansız ‘sayısız’, üküş ‘çok’, antag ‘o kadar’, neŋ ‘hiç’, idi ‘hiç’, kalısız ‘eksiksiz, pek çok’, kergeksiz ‘gereğinden çok’, nençe ‘nice, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) ha...


## BK-K-13#4 - Bilge Kağan Yazıtı, Kuzey 13. satir  (14 kelime, TAS KIRIGI)

- **transkripsiyon:** `aGIMIN : TÜRK : BODuN : --- I : BU : KaGaNıŊDA : BU : BeGLeRiGDE : --- : --- : SUBuŊDA : aDRıLMaSaR : TÜRK : BODuNuNTA`
- **kelime karsiliklari:** AĞIMIN : TÜRK : BOYLARI : --- I : BU : KAĞANINDAN : BU : BEĞLERİNDEN : --- : --- : SUYUNDAN : AYRILMAZSAN : TÜRK : BOYLARINDA
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok b...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Tekin 1998, s. 20` (eslesen: _BODuN BU_)
    > ...almışı yir sayu kop toru ölü yorıyur ertiğ. Tefiğri yarlıkadukın üçün, (ölzüm kutum bar üçün, kağan olurtum. Kağan olurup (G 10) yok çığariy bodunuğ kop kubratdım: Çığariy bodunuğ bay kıltım, az bodunuğ üküş kıltım. Azu bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLA...
  - `Ergin 1970, s. 34` (eslesen: _BU KaGaNıŊDA_)
    > ...anı verdim, tanzim edi verdim. .......... kedersiz kıldım. Üstte Tanrı kudretli ............ Türk beylerini, milletini .......... besleyin, zahmet çektirmeyin, incitmeyin! ......... benim Türk beylerim, Türk milletim,.......... kazanıp .......... bu.......... bu kağanından, bu beylerinden......... [[s. 34]] suyundan ayrılmazsan, Türk milleti, kendin iyilik göreceksin, evine gireceksin, dertsiz olacaksın. .......... Ondan sonra Çin kağanından resimciyi hep getirttim. Benim sözü mü kırmadı, maiyetindeki resimciyi gönderdi. Ona b...


## BK-K-14#1 - Bilge Kağan Yazıtı, Kuzey 14. satir  (17 kelime)

- **transkripsiyon:** `ÖZüŊ : eDGÜ : KÖRTeÇİ : SeN : eBGE : KİRTeÇİ : SeN : BUŊSuZ : BOLDaÇI : SeN : aNDA : KİSRE : TaBGaÇ : KaGaNDA : BeDiZÇİG : KOP : KeLÜRTüM`
- **kelime karsiliklari:** ÖZÜNDE : İYİ[LİK] : GÖRECEK : SEN : EVE : GİRECEK : SEN : BUNGSUZ : OLACAK : SEN : ONDAN : SONRA : TABGAÇ : KAĞANINDAN : BEZECİ : HEP : GETİRTTİM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _eDGÜ KÖRTeÇİ SeN_)
    > ...Jm Türük beğler, Türük bodunum Tİ.................. |) at birtim. Visa İka: taşığ Ürscnnanı i Lua MAYAN | kazganıp: Yanığı Deran ceryan ji bü Susmak Ja Bu kağanıfığda bu beğleriğlde, bu yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s. 32]] |..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ ıttı. Anğar adınçığ bark yarat<ıt>dım. İçin taşın adınçığ bediz ulrturtJum. (Taş tokıtdım, köfngü...
  - `Ata 2011, s. 113` (eslesen: _KİRTeÇİ SeN_)
    > ...ş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse ge...
  - `Olmez 2017, s. 52` (eslesen: _KİRTeÇİ SeN_)
    > ...vardır: ~ *tört yėgirmi yaşımka* "On dört yaşımda"; iyelik eklerinden sonra da *+kA*'lı şekillerin kullanılması Yenisey yazıtlarında yaygın bir durumdur: *üç yetmiş yaşımka adrıltım* "altmış üç yaşımda (bu dünyadan) ayrıldım", Uyuk-Turan 4. 2. kişi: *eviŋe kirteçi sen* "evine/çadırına gireceksin" (BK K 14) 3. kişi: *süçig savıŋa yėmşak agısıŋa arturup* "(onların, Çinlilerin) tatlı sözlerine, yumuşak ipeklilerine kanıp" ### Bulunma-Ayrılma Durumu: +DA, + (çok nadir olarak +DAn) Yazıtlarda bulunma ve ayrılma tek bir ekti...
  - `Ata 2011, s. 106` (eslesen: _KİRTeÇİ SeN_)
    > ...den sonra: sekiz yegirmi yaş+ım+a BK D24 “onsekiz yaşıma” türük+üm+e bodun+um+a BK G10 “Türklerime (ve) halkıma” tört yegirmi yaşım+ka BK D15 “on dört yaşıma” 2. Teklik 2. kişi iyelik ekinden sonra: igidmiş kagan+ıŋ+a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. [[s. 106]] Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevi...
  - `Tekin 1998, s. 21` (eslesen: _BeDiZÇİG_)
    > ...n. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte ben...
  - `Olmez 2017, s. 76` (eslesen: _BeDiZÇİG_)
    > ...ri şu satırlardan izleyebiliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bi...


## BK-K-14#2 - Bilge Kağan Yazıtı, Kuzey 14. satir  (3 kelime)

- **transkripsiyon:** `MeNiŊ : SaBıMıN : SIMaDI`
- **kelime karsiliklari:** BENİM : SÖZÜMÜ : SIMADI
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


## BK-K-14#3 - Bilge Kağan Yazıtı, Kuzey 14. satir  (3 kelime)

- **transkripsiyon:** `İÇReKİ : BeDiZÇİG : ITI`
- **kelime karsiliklari:** IÇERDEKİ : BEZECİSİNİ : İDİ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İÇReKİ BeDiZÇİG_)
    > ...öğrenin. (Ey) sadık Türk halkı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte ben...
  - `Olmez 2017, s. 97` (eslesen: _İÇReKİ BeDiZÇİG_)
    > ...- +(ı)n: iyelik ekinden sonra gelen belirtme durumu eki **sımadı** < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı...
  - `Olmez 2017, s. 76` (eslesen: _BeDiZÇİG_)
    > ...ri şu satırlardan izleyebiliriz: *kül têgin koñ yılka yêti yêgirmike uçdı, tokuzunç ay yêti otuzka yog ertürtümiz, barkın bedizin bitig taşıŋ bêçin yılka yêtinç ay yêti otuzka kop alıkdımız, kül têgin özi kırk artoki yêti yaşıya boltı, taş bark êtgüçig boñça bedizçig tuygun êltever kelürti.* "Kül Têgin koyun yılının (27 Şubat 731) on yedisinde (sonsuzluğa) uçtu. Dokuzuncu ayın yirmi yedisinde matemini tamamladık (1 Kasım 731). Türbesini, süslemelerini, yazıt taşını maymun yılının yedinci ayının yirmi yedisinde tamamen bi...
  - `Tekin 1998, s. 19` (eslesen: _İÇReKİ_)
    > ...num, birye Şadapıt beğler, yırya Tarkat buyruk beğler, Otuz (Tatar......... 0.00 eee ) (G 2) Tokuz Oğuz beğleri bodunı, bu sabımın edgüti eşid katığdı tığla: İlgerü, kün tuğsıkka, birgerü kün ortusınğaru, kurığaru kün batsıkınğa yırgaru tün ortusıngaru, anta içreki bodun kolp| mlanğla körlür. Bunçla bodun (G 3) kop itdim. [[s. 19]] Ol amtı ariyığ yok. Türük kağan Ötüken yış olursar ilte bung yok. İlgerü Şantung yazıka teği süledim, taluyka kiçiğ teğmedim; birgerü Tokuz Ersinke teği süledim, Tüpütke kiçiğ (teğlmedim; ku...
  - `Olmez 2017, s. 21` (eslesen: _İÇReKİ_)
    > ...lerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin doğduğu yere, güneyde aydınlığın ortasına, batıda güneşin battığı yere, kuzeyde karanlığın ortasına kadar, bu (sınırların) i...


## BK-K-14#4 - Bilge Kağan Yazıtı, Kuzey 14. satir  (4 kelime)

- **transkripsiyon:** `aŊaR : aDıNÇıG : BaRK : YaRaTıDıM`
- **kelime karsiliklari:** ONA : ADINÇIĞ : BARK : YAPTIRTTIM
- **kanit:**
  - `Tekin 1998, s. 32` (eslesen: _aŊaR aDıNÇıG BaRK_)
    > ...u yerinöğde su)bungdla adrılmasar), Türük Tbodunl, (K 14) 1..0.2...05... | edgü körteçi sen, ebinge kirteçi sen, bufiğsuz boltaçı sen. [[s. 32]] |..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ ıttı. Anğar adınçığ bark yarat<ıt>dım. İçin taşın adınçığ bediz ulrturtJum. (Taş tokıtdım, köfngülteki slJabımın (Çurturtum. ............... | (K 15) On-Ok oğlınga Tatıfiğa teği bunı körü biling. Bengglü) taş tokıtdım nun | tokıtdım, bititdim. Bulnı körüp ança biling. [[s. 32]] Ol) t...
  - `Olmez 2017, s. 97` (eslesen: _aŊaR aDıNÇıG BaRK_)
    > ...nra gelen belirtme durumu eki **sımadı** < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındak...
  - `Tekin 1998, s. 21` (eslesen: _aDıNÇıG BaRK_)
    > ...kı (ve) beyleri, bu devirde (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdi...
  - `Tekin 2003, s. 236` (eslesen: _aDıNÇıG_)
    > ...- **açıg a** ne acı! (Ozn. I 1, vb.) - **āçsık** acıkacak olma (KT G 8, 8; BK K 6) - **adak** ayak (KT K 7, BK D 30) - **adart-** zarar vermek (Toy. 24, 29) - **adaş** arkadaş, yoldaş (Açura 10, vb.) - **adgır** aygır (KT D 36, vb.) - **adıg** ayı (IB 6) - **adınçıg** şaşılası, olağanüstü (KT G 12, BK K 14) - **adrıl-** ayrılmak (T 12, vb.) - **adrın-** ayrılmak (Uybat III 10, 11) - **ag** bacak arası (Hem.-Çır. 9) - **ag-** yükselmek, tırmanmak (BK D 37) - **agı** ipekli kumaş (KT G 5, vb.) - **agıl** ağıl (Suci 5) - **...


## BK-K-14#5 - Bilge Kağan Yazıtı, Kuzey 14. satir  (5 kelime)

- **transkripsiyon:** `İÇİN : TaŞIN : aDıNÇıG : BeDiZ : URTURTuM`
- **kelime karsiliklari:** İÇİNE : DIŞINA : ADINÇIĞ : BEZE : VURDURTTUM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _İÇİN TaŞIN aDıNÇıG BeDiZ URTURTuM_)
    > ...de (bana) itaat eden beyler, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl....
  - `Olmez 2017, s. 97` (eslesen: _İÇİN TaŞIN aDıNÇıG BeDiZ URTURTuM_)
    > ...* < *sı-ma-dı* **"kırmadı"** - sı-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırd...
  - `Tekin 1998, s. 10` (eslesen: _İÇİN TaŞIN_)
    > ...ğunda da ses tekrarı, yani alliteration vardır: âçsık tosık “acıkma doyma”, ağış barım “mal mülk”, arkış tirkiş “kervan kafile”, eb bark “ev bark”, eçüm apam “atalarım ve dedelerim, ecdadım”, ıda taşda “ormanda ve kayalıklarda, dağda bayırda”, [[s. 10]] için taşın “içini dışını”, il törü “devlet ve töreler”, iş küç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli...
  - `Tekin 2003, s. 219` (eslesen: _İÇİN TaŞIN_)
    > ...m. Aŋar körü biliŋ! Türük matı bodun, bäglär, bödkä körügmä bäglär gü yaŋıltaçı siz? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol...
  - `Roux, Altay Turklerinde Olum, s. 242` (eslesen: _İÇİN TaŞIN_)
    > ...erin seçiminde sergilendiği gibi, isLisnai nitelikteydi. [[s. 242]] Tabut, çoğu kez son derece basit bir şekilde yapılmaktaydı: Heftalitlerde kalın tahtadan yapılmıştı.''” Tu-polarda da aynı malzemeden yapılmış ve cesedin “ağaçlar üzerinde sergilenmek dağlara için” taşınmasına yarıyordu;''* Yi-leularda, birbirine geçirilmiş dallardan yapılmıştır.” De Guignes, bu şatafat ve süsleme farklarının, ölülerin güçleri ve zenginlikleriyle ilişkili olduğunu kaydetmekte haklıydı. '*? [[s. 242]] Mezar üzerindeki toprak yığınları, tumulu...
  - `Tanyeri, s. 24` (eslesen: _İÇİN TaŞIN_)
    > ...tadır. 5. İkilemeler: Yazıtlarda anlatımı güçlü ve etkili kılarak güzelleştirmek için eş, yakın ya da karşıt anlamlı ikilemeler sıkça kullanılmıştır. “Açsık tosık” (açlık tokluk), “arkış tirkiş” (kervan kafile), “eb bark” (ev bark), “iş küç” (iş güç), “için taşın” (içini dışını) ve “tünli künli” (geceli gündüzlü), yazıtlardaki söz varlığının ikilemeler açısından ne kadar zengin olduğunu göstermektedir. 6. Deyimler: Orhun Yazıtları'nın dili, deyimler açısından da oldukça zengindir. “Adak kamşat-” (gerçek anlamda...


## BK-K-14#6 - Bilge Kağan Yazıtı, Kuzey 14. satir  (5 kelime)

- **transkripsiyon:** `TaŞ : TOKITTıM : KÖŊüLKeTİ : SaBıNıM : URTURTuM`
- **kelime karsiliklari:** TAŞ : DOKUTTUM : GÖNÜLDEKİ : SÖZÜMÜ : [TAŞA] VURDURTTUM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _URTURTuM_)
    > ...er, (sizler) mi yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl....
  - `Tekin 2003, s. 219` (eslesen: _URTURTuM_)
    > ...tı bodun, bäglär, bödkä körügmä bäglär gü yaŋıltaçı siz? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol [...tokıt]dım. Bu bitig...
  - `Olmez 2017, s. 97` (eslesen: _URTURTuM_)
    > ...-: fiil tabanı - -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırd...
  - `Roux, Altay Turklerinde Olum, s. 304` (eslesen: _TOKITTıM_)
    > ...iti (Çinceden pi<*”piet — fırça)*? kelimesinin kanıtladığı üzere, muhakkak ki fırçayla yazılmış olup, daha sonra kazınmış, tok-, tam olarak dövülmüştür. [[s. 304]] Oysa kendi yazılının metnini hazırlayan Tonyukuk (bu yazıt politik bir vasiyettir) hiçbir zaman tokittim, kazıttım de- #2! demiştir. Buna karşın, memiş, fakat fiilen bittitdim, yani yazdırdım Bilge Kağan'ın taşı kendisi tarafından tasarlanmamıştır. Bu fark kaydedilmeye değer. Metinde açıkça şu ifade yer almaktadır: “Bilge Kagan'ın yazıtını ben Yolliğ Tekin yaz...


## BK-K-15#1 - Bilge Kağan Yazıtı, Kuzey 15. satir  (8 kelime)

- **transkripsiyon:** `ON : oK : OGLIŊA : TaTIŊA : TeGİ : BUNI : KÖRÜ : BİLiŊ`
- **kelime karsiliklari:** ON : OK : OĞLUNA : TATINA : DEĞİN : BUNU : GÖRÜP : BİLİN
- **kanit:**
  - `Tekin 2003, s. 219` (eslesen: _ON oK OGLIŊA TaTIŊA_)
    > ...z? Män b[äŋgü taş tikdim. Tabg]aç kaganta bädizçi kälürtüm, bädzät(t)im. Mäniŋ sabımın sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol [...tokıt]dım. Bu bitig bitigmä atısi Yol(l)ug Tigin b[itidim]. [s. 220] # s. 220 — ORHO...
  - `Tekin 1998, s. 21` (eslesen: _TaTIŊA TeGİ BUNI KÖRÜ_)
    > ...ğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefi...
  - `Tekin 1998, s. 32` (eslesen: _ON oK OGLIŊA_)
    > ...|..........e | (Anta) kisre Tabgaç klağlanta bedizçi kop klelürtüm. Mening) sabımın sımadı, içreki bedizçiğ ıttı. Anğar adınçığ bark yarat<ıt>dım. İçin taşın adınçığ bediz ulrturtJum. (Taş tokıtdım, köfngülteki slJabımın (Çurturtum. ............... | (K 15) On-Ok oğlınga Tatıfiğa teği bunı körü biling. Bengglü) taş tokıtdım nun | tokıtdım, bititdim. Bulnı körüp ança biling. [[s. 32]] Ol) taş bakü Vps numan umu | ORHON YAZITLARI 61 Ben Türgiş hakanına kızımı pek büyük (bir) törenle alıverdim. Türgiş hakanı(nın) (K 10) kızını...


## BK-K-15#2 - Bilge Kağan Yazıtı, Kuzey 15. satir  (3 kelime)

- **transkripsiyon:** `BeŊGÜ : TaŞ : TOKITDıM`
- **kelime karsiliklari:** BENGÜ : TAŞ : DOKUTTUM
- **kanit:**
  - `Ata 2011, s. 122` (eslesen: _BeŊGÜ TaŞ TOKITDıM_)
    > ...ır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar...
  - `Olmez 2017, s. 99` (eslesen: _BeŊGÜ TaŞ TOKITDıM_)
    > ...isim tabanı - +ı: teklik üçüncü kişi iyelik eki - +ņa: üçüncü kişi iyelik ekinden sonra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabr...
  - `Ata 2011, s. 115` (eslesen: _BeŊGÜ TaŞ TOKITDıM_)
    > ...ri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar …” [[s. 115]] BK G14 yeme:...


## BK-K-15#3 - Bilge Kağan Yazıtı, Kuzey 15. satir  (3 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : TOKITDıM : BİTİDiM`
- **kelime karsiliklari:** --- : DOKUTTUM : BİTİDİM
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _TOKITDıM_)
    > ...i yanılacaksınız? — [s. 21] 38 KÜLTİGİN YAZITI Men blefiğgü taş tikdim, Tabglaç kağanta bedizçi kelürtüm, bedizettim. Menifiğ sabımın sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdı...
  - `Tekin 2003, s. 141` (eslesen: _TOKITDıM_)
    > ...in (nasıl) hayatta kalarak devlet sahibi olacağını burada (taş üzerine) kazdırttım; (nasıl) yanılıp öleceğini de burada (taş üzerine) kazdırttım" (KT G 10-11) *örgin bunta et(it)dim* "Otağ(ımı) burada kurdurtdum" (Tar. G 6) *örgin bunta yarat(ıt)dım çıt bunta tokıtdım* "Otağ(ımı) burada kurdurtdum, ordugah çitlerini (de) burada vurdurttum" (Tar. B 2) **316.** *anta* "orada, o yerde" (bk. **Gösterme Zamirleri**): *anta ańıg kişi ança boşgurur ärmiş* "Orada kötü (niyetli) kişiler şöyle akıl verirler imiş" (KT G 7) *ol süg a...
  - `Ata 2011, s. 122` (eslesen: _TOKITDıM_)
    > ...unug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla Baga Tarkan ve kumandanlar...
  - `Olmez 2017, s. 97` (eslesen: _TOKITDıM_)
    > ...- -ma-: fiilden fiil yapma eki (olumsuzluk) - -dı: bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırdım. İçini dışın...
  - `Tekin 1998, s. 28` (eslesen: _BİTİDiM_)
    > ...Barkın, bedizin bitiğ taşlın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI...
  - `Tekin 2003, s. 106` (eslesen: _BİTİDiM_)
    > ...lkı hep düzene soktum" (KT G 2-3) - *ırak ärsär yablak agı birür, yaguk ärsär ädgü agı birür* "(Çinliler, bir [s. 106] # s. 106 — TALAT TEKİN halk) uzak(ta yaşıyor) ise kötü hediyeler verir, yakın(da yaşıyor) ise iyi hediyeler verir" (KT G 7) - *bunça bitig bitidim* "Bunca yazılar(ı) yazdım" (KÇ G 3) 4. Bir sontakı ile zarf tümleci oluşturur: - *ol sub kudı bardımız* "O ırmak boyunca aşağı doğru gittik" (T 27) - *yazıŋa oguz tapa sülädim* "(O yılın) ilkbaharında Oğuzlara doğru sefer ettim" (BK D 31-32) - *türük bodun ü...


## BK-K-15#4 - Bilge Kağan Yazıtı, Kuzey 15. satir  (5 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- : OL : TaŞ : BaRKIN : ---`
- **kelime karsiliklari:** --- : O : TAŞ : BARKINI : ---
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _OL TaŞ_)
    > ...z urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi oğlınta üze eçüm apam Bumın Kağan, İştemi Kağan olurmış. Olurupan, Türük boduniüg ilin törlüslin tuta bir...
  - `Tekin 2003, s. 189` (eslesen: _OL TaŞ_)
    > ...arında geçer. *kün orto yütürüp tün orto kanta nägüdä bul-gay ol* "Gün ortasında yitirip geceyarısı nerede bulacak?" IB 24) *kan(ı)gı nälök öl-gäy ol* "(Onun) gözde sevgilisi niçin ölecekmiş?" (IB 57) *könäki nälök toŋ-gay* "Kovası niçin donacakmış?" (IB 57) *ol taşıg özi üzä t[?ut]sar kopka ut-gay* "O (değerli) taşı kendi üzerinde tutarsa her şeyden kazançlı çıkar" (Toyok 16-18) ## Birleşik Eylem Biçimleri **444.** Birleşik eylem biçimleri yüklem görevinde bir eylem sıfatı ile onu izleyen çekimli *är-* yardımcı eylemi...
  - `Olmez 2017, s. 99` (eslesen: _OL TaŞ_)
    > ...ncü kişi iyelik ekinden sonra gelen yaklaşma/bulunma durumu eki > **Runik** (üç satır; satır numarası: 13) — harf çevirisi aşağıda: *G 13. tokitdım : ....... : ėrig yėrte : ėrser añça : ėrig yerte : beñgü taş : tokitdım : bititdim : anı körüp : añça biliŋ : ol taş ... tokitdım : bo bitig : bitigme : atısı : yolluğ tėgin bitidim* "kazıttım. (...) ulaşılabilir yerde ise, böylesi ulaşılabilir bir yerde bengi taş kazıttım, yazdırdım. Buna bakıp böylece öğrenin. O taşı, anıtkabri kazdırdım, yaptırdım. Bu yazıyı yazan yeğen...
  - `Ogel C2, s. 101` (eslesen: _OL TaŞ_)
    > ...Türk masallarında, çok sık olarak görülür. Bu motifi, tüm olarak şiir halinde söylenen, Sayın-Batır destanında görüyoruz: Yaşlı bir kadın, Kozu-Körpös'e, şöyle bir öğüd veriyordu: **Atı niledo - nunu bırakarak git. Özün dahi don değiştirip (kubulup), bir kel ol (taşşa bol)”: Burada biraz da kötü elbise giyme ile kel donu, birbirine karıştırılıyordu*?*. [[s. 101]] Yiğit yaşlı kadına, “sıkışırsam, senin gelmen için atımın yelesinden bir kıl yakarım, diye de bir söz veriyor.Bu da, Anadolu masallarının, tanınmış bir motifidi...
  - `Radloff, s. 255` (eslesen: _OL TaŞ_)
    > ...söylemezler). Bizim şamanlarımız (yani Sa gay kamları) ayin yaparken okudukları dualarda bu dağın adı nı zikrederler. Diyorlar ki bu Karatag' da taştan yapılmış beşik bulunmuş, fakat şimdi gören yok. [[s. 255]] O beşik bizim kadimki atala rımızın beşiği imiş (ol tas pezik purungı pisting übekkilerding pezigi pal tur). Karadağ'ın bu yanında Padın denilen bir dağ vardır. Bu dağ Miras suyunun ·bu tarafında, Taştıp ırmağının başlarında biraz ötededir. Bu dağın yamaçlarında Sibicin oyma ğının ataları yaşamışlardır. Bu oymağın...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 158` (eslesen: _OL TaŞ_)
    > ...oklatsssı £ o, ok atmak istedi", Başkası da böyledir ; [y. 158] GULE - SLM atsar - mak) « le ötmedir ". $5lDİ-751)| oz öttün ötsedi » o, delikten öte geçmek istedi", gli İULÜİ ötser - ötsemek). Herhangi bir Şeyden öte geçmek te böyledir, > Lİ) #tsedi: e Nİ ol taşığ itsedi - o, taşı itmek istedi", Başkası da böyledirş (JULAN - SLAŞ itser - itsemek). ŞUT açsadı: "ELİ er kapuğ açsadı - adam kapıyı açmak istedi", Her şeyi açmak istemek te böyledir; GUL - La açsar - açsamak). [[y. 158]] 3» Le içsedi: " 5» Lu Lea Ni ol su...


## BK-B-1#1 - Bilge Kağan Yazıtı, Batı 1. satir  (1 kelime, TAS KIRIGI)

- **transkripsiyon:** `--- ÜZE ---`
- **kelime karsiliklari:** --- ÜSTTE ---
- **kanit:** _(korpusta eslesme yok - bos birak)_
