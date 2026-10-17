# Ceviri istek paketi 35 - Orhun cumlecikleri

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


## TY1-K-5#2 - Tonyukuk Yazıtı, Kuzey 5. satir  (7 kelime)

- **transkripsiyon:** `SaBI : aNTeG : ÖŊDiN : KaGaNGaRU : SÜ : YORILıM : TiMiŞ`
- **kelime karsiliklari:** SÖZÜ : ANTAG : ÖNDEN : KAĞANADOĞRU : SÜ : YÖRÜTELİM : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KaGaNGaRU SÜ YORILıM_)
    > ...ız. (K 4) (Usıjn süngüğün açdımız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi...
  - `Tekin 2003, s. 136` (eslesen: _KaGaNGaRU SÜ YORILıM_)
    > ...lmiş yer zarfları şunlardır: *öŋdün* "doğuda, doğuya", *kur(ı)dın* "batıda, batıdan", *kedin ~ kidin* "batıda, batıdan", *birdin* "güneyde, güneyden", *yırdın* "kuzeyde, kuzeyden". Bu zarflar ad ve niteleyici olarak da kullanılır. 1. Yer zarfı olarak: *öŋdün kagangaru sü yorılım* "(Biz) doğuya, Hakan'a doğru orduyla yürüyelim" (T 29) *kur(ı)dın sog(u)d örti* "Batıda, Soğdlar ayaklandı" (KT B 1) [s. 137] # s. 137 — ORHON TÜRKÇESİ GRAMERİ *tabgaç birdin yän täg kıtań öŋdün yän täg bän yırdınta yan tägäyin* "(Siz) Çinliler (onlara) gü...
  - `Ata 2011, s. 118` (eslesen: _KaGaNGaRU SÜ YORILıM_)
    > ...akı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. öŋdün kagangaru sü yorılım “(biz) doğuya, Hakan’a doğru orduyla yürüyelim” T 29 kurıdın sogud örti “batıda Soğdlar ayaklandı” KT B1 tabgaç birdin yen teg kıtań öŋdün yen teg ben yırdınta yan tegeyin “Çinliler güney tarafından saldırın, Kıtaylılar doğu tarafından...
  - `Ata 2011, s. 111` (eslesen: _KaGaNGaRU SÜ YORILıM_)
    > ...n batsıkdakı sogud berçik er bukarak uluş bodunta “geride gün batısındaki Soğdlar, İranlılar (ve) Buhara şehri halkından …” KT K12 b. +DIn eki ile türetilmiş yer zarfları: öŋdün ‘doğuya’, kurıdın ‘batıda, batıdan’, birdin ‘güneyde, güneyden’. [[s. 111]] öŋdün kagangaru sü yorılım “(biz) doğuya, Hakan’a doğru orduyla yürüyelim” T 29 kurıdın sogud örti “batıda Soğdlar ayaklandı” KT B1 tabgaç birdin yen teg kıtań öŋdün yen teg ben yırdınta yan tegeyin “Çinliler güney tarafından saldırın, Kıtaylılar doğu tarafından saldırın, ben (de) kuze...


## TY1-K-5#3 - Tonyukuk Yazıtı, Kuzey 5. satir  (5 kelime)

- **transkripsiyon:** `YORıMaSaR : BİZNİ : KaGaNI : aLP : eRMiŞ`
- **kelime karsiliklari:** YÜRÜTMEZSEK : [O] BİZİ : KAĞANI : ALP : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _YORıMaSaR BİZNİ KaGaNI aLP eRMiŞ_)
    > ...mız. Kanı süsi terilmiş. [[s. 46]] Sünğüşdümiz, sançdımız. Kanın ölürtümiz. Kağanka Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “An...
  - `Tekin 2003, s. 216` (eslesen: _YORıMaSaR BİZNİ KaGaNI aLP_)
    > ...bir söz öbeği sokulabilir: - *[anta] kisrä - täŋri yarlıkazu - kutum bar üçün, ülügüm bar üçün, öltäçi bodunug tirgürü igi(t)tim* "Ondan sonra - Tanrı bağışlasın - ilahi lutfum olduğu için, talihim olduğu için, ölecek halkı diriltip doyurdum" (KT D 28-29) - *yorımasar bizni - kagani alp ärmiş, ayguçısi bilgä ärmiş - kaça(n) näŋ ärsär bizni ölürtäçi-k ök temiş* "Sefer etmezsek bizi - hakanı cesur imiş, sözcüsü akıllı imiş - nasıl olsa bizi öldürecektir demiş" (T 29-30) Aşağıdaki örnekte temel cümlenin zarf öbeği *kaçan näŋ ärsär* "ne zaman o...
  - `Tekin 1998, s. 44` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...rti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte,...
  - `Ata 2011, s. 139` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...gu+luk alp ermiş yinçge yogan bolsar üz- gü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesi...
  - `Olmez 2017, s. 63` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...: **{-gUlUk}:** *uçuz yuyka kalın bolsar topulguluk alp ermiş* "Yufka kalın olsa delmesi zormuş" (T 13); [s. 63] # s. 061 — Köktürkçe Dersleri (basılı sayfa numarası 63) *yogun bolsar üzgülik alp ermiş* "yoğun olsa koparması zormuş" (T 14) **{-gUçI}** *kağanı alp ermiş ayguçısı bilge ermiş* "Hakanları kahramanmış, danışmanı bilgeymiş." (T 10); *anta ayguçısı yeme ben ök ertim yağıçı(si) yeme ben ök ertim* "O zamanki danışmanı da bendim, savaşçısı da yine bendim." (T 49-50); *bark étgüçi bediz yaratıgma bitig taş étgüçi*...
  - `Ata 2011, s. 132` (eslesen: _KaGaNI aLP eRMiŞ_)
    > ...a kalın bolsar topul-gu+luk alp ermiş yinçge yogan bolsar üzgü+lük alp ermiş “yufka kalın olursa (onu) delmek zor imiş, ince yoğun olursa (onu) kırmak zor imiş” T 13-14 10. [[s. 132]] -gUçI sıfat-fiil eki, -gU eylem adı yapan ek ile +çI ekinden türetilmiştir: kaganı alp ermiş ay-guçı+sı bilge ermiş “kağanları cesur imiş, (onun) sözcüsü akıllı imiş” T 29 bark it-güçi bediz yaratıgma bitig taş it-güçi “türbe yapıcı, süsleme sanatçısı (ve) kitabe taşı ustası” KT K13 Hem Orhun Türkçesinde hem de Türkiye Türkçesinde geçen sıfat-fiil e...


## TY1-K-5#4 - Tonyukuk Yazıtı, Kuzey 5. satir  (3 kelime)

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


## TY1-K-5#5 - Tonyukuk Yazıtı, Kuzey 5. satir  (3 kelime)

- **transkripsiyon:** `KaÇaN : NeŊ : eRSeR`
- **kelime karsiliklari:** KAÇAR [İSEK] : NE [REDE] : İSE[K]
- **kanit:**
  - `Tekin 1998, s. 45` (eslesen: _KaÇaN NeŊ eRSeR_)
    > ...rti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme tarkınç ol” temiş. Ol sabın eşidip tün yeme udısıkım kelmez erti,...
  - `Tekin 2003, s. 41` (eslesen: _KaÇaN_)
    > .../bItItdm/ *bititd(i)m* (T 58) 6. /L/, /l/ = l(l): - /YULG/ *Yol(lu)g* (KT G 13, vb.), fakat /YULLG/ *Yoll(u)g* (KT GB) - /çÜlg/ *çöl(lü)g* (KT D 4, BK D 5) - /IldÜk/ *il(l)ädök* (BK D 7), fakat /IlldÜk/ *illädök* (KT D 6), vb. 7. /N/, /n/ = n(n): - /KçNŋ/ *kaçan (n)äŋ* (T 21), /Kçnŋ/ *kaça(n) näŋ* (T 20, 29) 8. Şu örnekte söz içindeki /şs/ ünsüz öbeği yalnızca bir art /S/ harfi ile gösterilmiştir: - /KBSR/ *kab(ış)sar* (T 12) Bu tür yazımın istisnaları da vardır: - /çURKKA/ *çorakka* (BK GD), /IllgdA/ *ill(i)gdä* (...
  - `Ata 2011, s. 136` (eslesen: _KaÇaN_)
    > ...1. -(X)r / -Ar er-ti (geniş zamanın hikâyesi) Geniş-şimdiki zaman ekleri ve er- yardımcı fiili üzerine belirli geçmiş zaman eki -DI getirilerek yapılır: yanıgma yagıg kelür-ür er-tim “dönen (kaçan) düşmanı getirir idim” T 53 anta kalmışı yir sayu kop toru ölü yorı-yur er-tig “orada kalanlar (olarak siz) her yere bitkin mecalsiz yürüyordunuz” KT G9 atı ıka ba...
  - `Olmez 2017, s. 10` (eslesen: _KaÇaN_)
    > ...ınlara göre ayrıntılı olarak genişletemedim. Bu baskıda yer vermek isteyip de tamamlayamadığım en önemli bölüm "ekler dizini"dir. Kitap şeklindeki yeni yayınları yalnızca kaynaklar kısmında zikredebildim. Kitabın kapsamı, hazırlanışı sırasında elbette gözden kaçan, kısmen ayrıntısına girilmeyen, girilemeyen konular oldu. Bir ders kitabının çerçevesi dışına çıkılmamaya çalışıldı. Okuyucunun, kullanıcının önerisi, çevirisi, düzeltisi ile daha iyisini hazırlamak dileğiyle her tür öneri ve düzeltinin yazılması beni sevindi...
  - `Tekin 1998, s. 4` (eslesen: _eRSeR_)
    > ...k BİĞç 15 TEZEK O ŞU UN S ce sente n Ünen Kerem e eN ERER EE İlan Ör 17 İzi > DEPİMLEN erir ERMAK ÜRÜR RR 19 İd. SALASÖZLEPÜ. veneer ARMEN NET KENE EREK AREREĞ 20 9.0. Edebi Sanatlar (BEenzetmeler)i ccs RENK 21 6. Eski Türk Runik Yaazısı................ ne cerser neee 22 TT. Yazım Kurallatı. see RA ÜRER ARAN RDERRERĞÜ 25 7.1. Ünlülerle ilgili yazım kuralları............. 0s 25 7.2. [[s. 4]] Ünsüzlerle ilgili yazım kuralları............ 0 26 7.3.. Noktalama işareti ....oseerkarorsa erener KE KEKeN 28 8. Orhon Alfabes...
  - `Ata 2011, s. 94` (eslesen: _eRSeR_)
    > ...ak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki karışıklığın habercisi gibidir. ben ‘ben’ T 1 ~ bini ‘beni’ T 10 sen ‘sen’ KT G8 ~ sini ‘seni’ T 10 erser ‘ise’ KT G7 ~ irser KT G13 Ünsüzler 1. Orhun Türkçesinin ünsüzleri (konsonları) şunlardır: b ç d g k l m n ŋ ń p r s ş t y z Bu ünsüzlerden b,...


## TY1-K-6#1 - Tonyukuk Yazıtı, Kuzey 6. satir  (4 kelime)

- **transkripsiyon:** `BİZNİ : ÖLüRTeÇİ : KÖK : TiMiŞ`
- **kelime karsiliklari:** BİZİ : ÖLDÜRÜR : HEP : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _BİZNİ ÖLüRTeÇİ_)
    > ...a Kırkız bodunı içikdi, yükünti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,”...
  - `Tekin 1998, s. 44` (eslesen: _ÖLüRTeÇİ_)
    > ...tağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısı...
  - `Ata 2011, s. 123` (eslesen: _ÖLüRTeÇİ_)
    > ...inlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındaki ünlü düşer. bini oguzug ölürteçi-k tir men “Beni, Oğuz’u mutlak öldürecektir diyorum” T 10-11 Yukarıda görülen pekiştirmeli yapılar üzerine bir daha ok/ök edatı gelebilir. yańduk yolta yeme ölti-k ök “bozguna uğrayıp dağılanlar yollarda yine ölüp kaldılar” T16 Olasılık Eda...
  - `Tekin 1998, s. 45` (eslesen: _BİZNİ_)
    > ...45]] Tabgaç kağan yağımız erti, On Ok kağanı yağımız erti, (D 3) artuk (Kırkız| küçflüğ kağan yağımız| boltı. Ol üç kağan öğleşip “Altun yış üze kabışalım!” temiş. Ança öğleşmiş: “Öfgğre Türk kağangaru sülelim” temiş, “Afğaru sülemeser, kaçan nefiğ erser, ol bizni, (D 4) (Kağanı alp ermiş), ayguçısı bilge ermiş, kaçan neng erser, ölürteçik ök. Üçeğün kabışıp sülelim, edi yok kışalım!” temiş. Türgiş kağan ança temiş: “Bening bodunum anta erür” temiş. [[s. 45]] (D 5) “Türk bodunı yeme) bulganç (01)” temiş, “Oğuzı yeme t...
  - `Tekin 2003, s. 118` (eslesen: _BİZNİ_)
    > ...başlayu kazganmasar...* "Ben, erkek kardeşimle birlikte (halkıma) önderlik edip bunca çalışmasam ve başarılı olmasaydım..." (BK D 33) *korıgu eki üç kişi+ligü täzip bardı* "(Kale) muhafızı iki üç kişi ile birlikte kaçıp gitti" (BK D 41) *tört ini+ligü ärtimiz bizni ärklig adırtı* "Biz hep birlikte dört erkek kardeştik. Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I sağ 2) Birliktelik eki {+lIgU}, Uygurcada {+lUgUn} biçimindedir. [s. 119] # s. 119 — ORHON TÜRKÇESİ GRAMERİ ## Zamirler ## Kişi zamirleri **271.** Or...
  - `Ata 2011, s. 116` (eslesen: _BİZNİ_)
    > ...siz Durumu men BK G 9 sini T 10 T 16 beniŋ T 21, biziŋ KT D39 Nesne meniŋ KT Durumu G11, BK D29 bizni T 20 Yönelme Durumu bini T 10 Bulunma- baŋa T 31, saŋa T 32 biziŋe KT Çıkma maŋa KT D19, 40; BK Durumu...


## TY1-K-6#2 - Tonyukuk Yazıtı, Kuzey 6. satir  (3 kelime)

- **transkripsiyon:** `TÜRGİŞ : KaGaNI : TAŞIKMıŞ`
- **kelime karsiliklari:** TÜRGİŞ : KAĞANI : TAŞIKMIŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _TÜRGİŞ KaGaNI TAŞIKMıŞ_)
    > ...nti. Yantımız. Köğmen yışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şa...
  - `Tekin 1998, s. 45` (eslesen: _TÜRGİŞ KaGaNI_)
    > ...ordu sevk edelim!” demişler, “Eğer onların üzerine ordu sevk etmezsek, ne zaman olsa, onlar bizi, (D 4) kağanları cesur imiş, sözcüleri de akıllı imiş, ne zaman olsa, öldüreceklerdir. Üçümüz birleşip ordu sevk edelim, (onları) tümüyle yok edelim!” demişler. Türgiş kağanı şöyle demiş: “Benim halkım orada olacaktır!” demiş. (D 5) “(Türk halkı) kargaşa içindedir; Oğuz'ları da huzursuzdur” demiş. [[s. 45]] (Türgiş kağanının) bu sözlerini işitince gece uyuyasım gelmiyordu. (gündüz) oturasım gelmiyordu. O zaman düşündüm işte: (D...
  - `Ergin 1970, s. 16` (eslesen: _TÜRGİŞ KaGaNI_)
    > ...Kapıca kadar ordu sevk ettik. [[s. 16]] Kögmeni aşarak Kırgız ülkesine kadar ordu sevk ettik. | Yekûn olarak yirmi beş defa ordu sevk ettik, on üç defa savaştık, illiyi ilsizleştirdik, kağanlıyı kağansızlaştırdık. Dizliye diz çöktürdük, başlıya baş eğdirdik. Türgiş Kağanı Türkümüz, milletimiz idi. Bilmediği | için, bize karşı yanlış hareket ettiği için kağanı öldü. Buyruku, beyleri de öldü. On Ok kavmi eziyet gördü. Ecdadımızın tutmuş olduğu yer, su sahipsiz olmasın diye Az milletini tanzim ve tertip edip. ....... [[s. 16]] Ba...
  - `Tanyeri, s. 24` (eslesen: _TÜRGİŞ KaGaNI_)
    > ...in gelişmiş olduğunu göstermektedir. Bunun yanı sıra yazıtlarda “benzetme” sanatı; “Kangım kaġan süsi böri teg ermiş, yaġısı kony teg ermiş.” (Babam hakanın askerleri kurt gibi, düşmanları da koyun gibiymiş.); “Türgiş kaġan süsi Bolçuda otça borça kelti.” (Türgiş kağanının ordusu Bolçu'dan ateş gibi, bora gibi üzerimize geldi.) cümlelerinde görüldüğü üzere sıkça kullanılmıştır. 9. Koşutluk: Orhun Yazıtları'nda kullanılan dilin tipik bir özelliği olan koşutluk, eşit ögeli birimlerden oluşan cümle parçalarını ifade etme...
  - `Kafesoglu, s. 86` (eslesen: _TÜRGİŞ KaGaNI_)
    > ..."kağan" yapılmasını istediği Su-lu'nun oğlunu ortadan kaldırarak kendini "kağan" ilân etti. Bu arada, Çin'in On-ok'lar "kağanı" tâyin ettiği, Aşına ailesinden, Hin'i mağlup edip öldürmesi (739) , Çin'i bu defa Kara-Türgişleri desteklemeğe sevk etti. 742'deki Türgiş kağanı İl-etmiş Kutlug Bilge bir Kara-Türgi§ başbuğu idi. [[s. 86]] 753'de hakan olan ye Uygur hakanı Moyen-çor'un himayesine giren Tannda Bolmış da bir Ka-raTürgiş idi. Uzun süren iki taraf arasındaki mücadeleye Kartuklar da karışmışlar, böylece, ihtimal Peçenekler...
  - `Tekin 1998, s. 22` (eslesen: _TAŞIKMıŞ_)
    > ...ş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Ondan sonra erkek kardeşleri ağabeyleri g...


## TY1-K-6#3 - Tonyukuk Yazıtı, Kuzey 6. satir  (4 kelime)

- **transkripsiyon:** `TİDİ : ON : OK : BONuDI`
- **kelime karsiliklari:** DEDİ : ON : OK : BOYLARI
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _TİDİ ON OK_)
    > ...ışığ ebirü keltimiz. (K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” ted...
  - `Tekin 1998, s. 6` (eslesen: _ON OK_)
    > ...nların [s. 6] içeriğidir. Orhon yazıtlarından öğrendiğimize göre Türkler Çinliler, Kıtaylar (Moğollar), Tatabılar vb. gibi yalnız yabancı halklarla değil, kendi öz soydaşları ve dildaşları Oğuzlar, Kırgızlar, Bayırkular, Uygurlar, Basmıllar ve Batı Türkleri (On-Ok'lar, Türgiş'ler) ile de savaşmışlardır. Moğolistan'daki İkinci Doğu Türk Kağanlığına 744'te son verenler soydaş Uygurlar'dan başkası değildir. Bu Uygur devletini 840'ta yıkanlar da yine soydaş Kırgızlar olmuştur! [[s. 6]] İşte yukarıda açıklamaya çalıştığım...
  - `Ergin 1970, s. 14` (eslesen: _ON OK_)
    > ...bedî taş yontturdum.... Çin kağanından resimci getirdim, resimlettim. Benim sözümü kırmadı, | Çin kağanının maiyetindeki resimciyi gönderdi. Ona bambaşka türbe yaptırdım. İçine dışına bambaşka resim vurdurdum. Taş yontturdum. Gönüldeki sözümü vurdurdum....... On Ok oğluna, yabancına kadar bunu görüp bilin. Ebedî taş | yontturdum..... il ise, şöyle daha erişilir yerde ise, işte öyle erişilir yerde ebedî taş yontturdum, yazdırdım. Onu görüp öyle bilin. Şu taş....dım. [[s. 14]] Bu yazıyı yazan yeğeni Yollug Tigin. Doğu cep...
  - `Tekin 2003, s. 111` (eslesen: _ON OK_)
    > ...ekinden sonra verme-bulunma durumu eki {+ŋA} biçimindedir. Bu biçim, hiç kuşkusuz, daha eski bir {+n+gA} ya da [s. 111] # s. 111 — ORHON TÜRKÇESİ GRAMERİ {+n+kA} biçiminden geliyor olmalıdır: *kurıgaru kün batsıkı+ŋa* "Geride gün batısına (kadar)" (KT G 2) *on ok oglı+ŋa tatı+ŋa tägi* "On Ok oğullarına ve (onlara bağımlı olan) yabancılara kadar" (BK K 15) *süçig sabı+ŋa yimşak agısı+ŋa arturup* "Tatlı sözlerine (ve) yumuşak ipekli kumaşlarına aldanıp" (KT G 6) *yazı+ŋa oguzgaru sü taşıkdımız* "(O yılın) ilkbaharında o...
  - `Ata 2011, s. 120` (eslesen: _ON OK_)
    > ...ce, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört...
  - `Olmez 2017, s. 97` (eslesen: _ON OK_)
    > ...bilinen geçmiş zaman eki **Runik** — 12 *[Runik yazı — 4 satır]* *G 12. tavgaç : kaganıŋ : içreki : bedizçig : ıdtı : aŋar : adınçığ : bark :* *yaratturtum : için : taşın : adınçığ : bediz : urturtum : taş tokıtdım : körülteki :* *savımın : urturtum .... **on ok oğluya** : tatıya : tegi : bonı : körü : biliŋ :* *bengü taş :* [s. 98] # s. 096 — Mehmet Ölmez (basılı sayfa numarası 98) "sarayındaki has sanatçısını yolladı. Ona muazzam bir anıtkabir yaptırdım. İçini dışını muhteşem şekilde süslettim, taşlar yonturttum,...


## TY1-K-6#4 - Tonyukuk Yazıtı, Kuzey 6. satir  (7 kelime)

- **transkripsiyon:** `KaLISıZ : TaŞIKMıŞ : TİR : TaBGaÇ : SÜSİ : BaR : eRMiŞ`
- **kelime karsiliklari:** KALISIZ : TAŞIKMIŞ : DER : TABGAÇ : SÜSİ[DE] : VAR : İMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KaLISıZ TaŞIKMıŞ TİR TaBGaÇ SÜSİ BaR eRMiŞ_)
    > ...(K 5) Kırkızda yantımız. Türgiş kağanta küreğ kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ ele...
  - `Tekin 2003, s. 146` (eslesen: _KaLISıZ TaŞIKMıŞ_)
    > ...sarı altınları ve beyaz gümüşleri, kızları ve cariyeleri, hörgüçlü develeri ve ipekli kumaşları fazlasıyla getirdiler” (T 48), vb. [s. 146] # s. 146 — TALAT TEKİN **331.** *kalısız* “eksiksiz, pek çok” < *\*kālı* “kalan, artık” + *sız*: - *on ok süsi boduni kalısız taşıkmiş* “On Ok ordusu ve halkı geride hiç kimse kalmamasıya sefere çıkmış” (T 30) - *on ok süsi kalısız taşıkdı* “On Ok ordusu geride hiç kimse kalmamasıya sefere çıktı” (T 33) - *äbin barımın kalısız kop kälürti* “Çadırlarını ve mal mülklerini geride hiçbir şey bır...
  - `Ata 2011, s. 120` (eslesen: _KaLISıZ TaŞIKMıŞ_)
    > ...ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok d...
  - `Tekin 1998, s. 44` (eslesen: _TİR TaBGaÇ_)
    > ...y kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; b...
  - `Tekin 2003, s. 155` (eslesen: _TİR TaBGaÇ_)
    > ...aru basmıl karluk yok boltı* "Ondan sonra Basmıllar ve Karluklar yok oldu" (MÇ B 2) ## Ad Kökenli Sontakı **366.** *yan* sözcüğü Tunyukuk yazıtında hiçbir ek almaksızın bulunma-çıkma durumundaki adlardan sonra uyuma giren bir ek-sontakı olarak da kullanılmıştır: *tabgaç birdin-yän täg, kıtañ öŋdün-yän täg, bän yırdınta-yan tägäyin* "(Siz) Çinliler (Türklere) güney tarafından saldırın, (siz) Kıtaylar doğu tarafından saldırın, ben (de) kuzey tarafından saldırayım" (T 11) [s. 156] # s. 156 — TALAT TEKİN *kanta yan sabıg yana...
  - `Ata 2011, s. 113` (eslesen: _KaLISıZ TaŞIKMıŞ_)
    > ...ce, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne...


## TY1-K-6#5 - Tonyukuk Yazıtı, Kuzey 6. satir  (9 kelime)

- **transkripsiyon:** `OL : SaBıG : eŞiDiP : KaGaNıM : BeN : eB : GeRÜ : TÜŞeYiN : TİDİ`
- **kelime karsiliklari:** O : SÖZÜ : İŞİTİP : KAĞANIM : BEN : EVE : GERİ : DÜŞEYİM : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _OL SaBıG eŞiDiP KaGaNıM_)
    > ...kelti. Sabı anteğ: “Öfiğdün kağangaru sü yorılım” temiş, “Yorımasar, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüng...
  - `Ata 2011, s. 113` (eslesen: _BeN eB GeRÜ TÜŞeYiN_)
    > ...yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +ArU, +rA a. +gArU: Yalın durumdaki isim gövdelerine ulanır: oguz+garu sü taşıkdımız KT K8 “Oğuzlara doğru sefere çıktık” ben eb+gerü tüşeyin T 30 “ben karargâha ineyim” ol yer+gerü barsar KT G8 “o yere giderse” b. +ŋArU (< +n + +garu): Üçüncü kişi iyelik ekinden sonra kullanılmıştır: birgerü kün ortu+sı+ŋaru BK K2 “güneyde gün ortasına” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “kendi top...
  - `Ata 2011, s. 106` (eslesen: _BeN eB GeRÜ TÜŞeYiN_)
    > ...lünce sevk et” yüz+çe erin ilgerü tezip BK D37 “yüz kadar adamla doğuya doğru kaçıp” 7. Yön Gösterme (Direktif): +gArU, +ŋArU, +ArU, +rA a. [[s. 106]] +gArU: Yalın durumdaki isim gövdelerine ulanır: oguz+garu sü taşıkdımız KT K8 “Oğuzlara doğru sefere çıktık” ben eb+gerü tüşeyin T 30 “ben karargâha ineyim” ol yer+gerü barsar KT G8 “o yere giderse” b. +ŋArU (< +n + +garu): Üçüncü kişi iyelik ekinden sonra kullanılmıştır: birgerü kün ortu+sı+ŋaru BK K2 “güneyde gün ortasına” yer+i+ŋerü sub+ı+ŋaru kontı BK D40 “kendi topraklarına (ve) s...


## TY1-K-7#1 - Tonyukuk Yazıtı, Kuzey 7. satir  (3 kelime)

- **transkripsiyon:** `KATuN : YOK : BoLMıŞ`
- **kelime karsiliklari:** HATUN : YOK : OLMUŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KATuN YOK BoLMıŞ_)
    > ...r, bizni, kağanı alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür;...
  - `Tekin 2003, s. 105` (eslesen: _KATuN YOK BoLMıŞ_)
    > ..., araç durumu ve birliktelik durumudur. ##### Yalın Durum **254.** Yalın durum eksizdir, gövde ile bir ve aynıdır. Bir adın yalın durumu şu görevlerde bulunur: 1. Bir cümleciğin ya da cümlenin öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, B...
  - `Ata 2011, s. 145` (eslesen: _KATuN YOK BoLMıŞ_)
    > ...ŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. bilig bilmez kişi...
  - `Olmez 2017, s. 57` (eslesen: _KATuN YOK BoLMıŞ_)
    > ...7); *idi oksuz kök türük (ėti) ança olorur ermiş* "dağınık halde öylecene yaşıyorlarmış." (KT D 3); *ırak bodunug ança yagutir ermiş* "uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış" (BK K 4) **Uzak geçmiş zaman: -mIş erti ; -mIş ermiş** *katun yok bolmış erti* "Sultan aramızdan ayrılmıştı." (T 31); *türk bodun ati yok bolu barmış erti* "Türk halkının adı yok olup gidiyor idi." (O B 3); *ol üdke kul kullug bolmış erti* "O vakitler kölelerin köleleri, cariyelerin (de) cariyeleri olmuştu." (KT D 21); *alp...
  - `Ata 2011, s. 138` (eslesen: _KATuN YOK BoLMıŞ_)
    > ...la c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig küçüg bertim 5. Aşağıdaki ifadelerin hangisinde zarf-fiil eki kullanılmamıştır? a. sü sülepen tört buluŋdakı bodunug kop almış b. igidmiş kaganıŋın sabın almatın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp y...


## TY1-K-7#2 - Tonyukuk Yazıtı, Kuzey 7. satir  (4 kelime)

- **transkripsiyon:** `eRTİ : aNI : YUGLaTaYIN : TiDİ`
- **kelime karsiliklari:** İDİ : ONU : YUĞLATAYIM : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _eRTİ aNI_)
    > ...alp ermiş, ayguçısı bilge ermiş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erse...


## TY1-K-7#3 - Tonyukuk Yazıtı, Kuzey 7. satir  (3 kelime)

- **transkripsiyon:** `SÜ : BaRıŊ : TiDİ`
- **kelime karsiliklari:** SÜ[LEYİP] : VARIN : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SÜ BaRıŊ_)
    > ...ş, kaçan nefiğ erser (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi....
  - `Ergin 1970, s. 13` (eslesen: _BaRıŊ_)
    > ...muşak imiş. Tatlı sözle, yumuşak ipek kumaşla aldatıp uzak milleti öylece yaklaştırırmış. Yaklaştırıp, konduktan sonra, kötü şeyleri o zaman düşünürmüş. | İyi bilgili insanı, iyi cesur insanı yürütmezmiş. Bir insan yanılsa, kabilesi, milleti, akrabasına kadar barındırmazmış. [[s. 13]] Tatlı sözüne, yumuşak ipek kumaşına aldanıp çok çok, Türk milleti, öldün; Türk milleti, öleceksin! Güneyde Çogay ormanına, Tögültün | ovasına konayım dersen, Türk milleti, öleceksin! Orda kötü kişi şöyle öğretiyormuş: Uzak ise kötü mal ver...
  - `Tekin 2003, s. 59` (eslesen: _BaRıŊ_)
    > ...ülkünü" (MÇ D 3) < *barım-in* - *barkın* "konutlarını" (MÇ D 2) < *bark-in* - *başın* "doruğunu" (MÇ D 4) < *baş-in* - *katunın* "hatununu" (MÇ K 10) < *katun-in* - *kızın* "kızlarını" (MÇ D 3) < *kız-in* - *kod(u)zın* "kadınlarını" (MÇ D 3) < *koduz-in* - *tabarın* "hayvanlarını" (MÇ G 5) - *yılkısın* "at sürülerini" (MÇ D 2, 3), vb. Bu ekin ünlü uyumuna girme eğilimi için Irk Bitig'de de örnekler vardır: - *ayakın* "kaplarını" (IB 42) < *ayak-in* - *karş(ı)sın* "rakibini" (IB 19) < *karşı-sin* - *kudrukın* "kuyruğunu...
  - `Roux, Eski Din, s. 154` (eslesen: _BaRıŊ_)
    > ...şitli güçlerin birikim yeri olabilmesi ve sırasıyla hem bir birim olarak hem de birleşik bir güç olarak ortaya çıkması her zaman için mümkündür. [[s. 154]] Bu durum özellikle insan için söz konusudur ve işte bu nedenle günlük konuşmada onun birçok ruhu içinde barındırdığı söylenir. 1 Levy-Bruhl, daha uygun düşecek "başka bir isim bulunamadığından" "ruh" kelimesinin kullanıldığını daha önce belirtmişti (P.46, s. 86). Blondel için ruhlann çokluğu "gerçeğin asıl ifadesinden çok bir ifade oyunudur. [[s. 154]] Eğer bir çoklu...
  - `Roux, Altay Turklerinde Olum, s. 203` (eslesen: _BaRıŊ_)
    > ...ümseği, âile mezarlığı, ruhlara sunulan yiyecekler, bir evin koruyucu ruhları, koruyucu tanrılar?” şeklinde çevirmektedir. Ramstedt, daha çekincelidir, bu sözcüğü aziz, ilahi şeklinde** çevirmiştir; Grönbech ve Krueger ise bunu saf, kutsal, maddi bir nesneyi barındıran ruh şeklinde çevirmektedirler.*” P, Mostaert, bu sözcükte aziz, halkın taptığı büyük bir şahsiyetin [[s. 203]] mezarı |gömüt yeri), tanrılara, obo'ya adanmış anlamlarını yüklemektedir.#* Burada ongon'u ancak ata ruhu ve ruhları betimleyen tasvir olarak a...
  - `Roux, Eski Turk Mitolojisi, s. 40` (eslesen: _BaRıŊ_)
    > ...cinler olarak tanımlamalarıdır. Dolayısıyla biz onları, ancak sonraki dönemlere ait bilgilerden hareketle açıklayabileceğiz. Temel düşünce çok basittir: Her nesne, her mekan içinde sadece "bir töz, bir varlık, bir ruh" [s. 40] === Eski Türk Mitolojisi barındırmakla kalmıyor, ayrıca değişik zamanlarda değişik biçimlerde tasarlanmış daha üst bir güce de bağlı oluyor. îdhik (izik veya djiin) diye adlandırılansa işte bu ruhlar ve güçlerdir. Bunlar mekanların ve nesnelerin "asıl sahipleredir. Elbette bunların v...


## TY1-K-7#4 - Tonyukuk Yazıtı, Kuzey 7. satir  (3 kelime)

- **transkripsiyon:** `aLTUN : YIŞDA : OLuRuŊ`
- **kelime karsiliklari:** ALTIN : YIŞDA : OTURUN
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _aLTUN YIŞDA OLuRuŊ_)
    > ...r (K 6) bizni ölürteçik ök” temiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9...
  - `Tekin 2003, s. 180` (eslesen: _aLTUN YIŞDA_)
    > ...-gıl* "Atlı muhafızları ve gözetleme kulelerini iyice yerleştir!" (T 34) *yiçä işig küçüg bir-gil* "Yine (bana) hizmet et!" (MÇ D 5), vb. **430.** Buyurma kipinin çoğul 2. kişi biçimi {-(X)ŋ} eki ile kurulur: [s. 180] # s. 180 — TALAT TEKİN - *sü bar-ıŋ... altun yışda olor-uŋ* "(Siz), askerler, gidin... Altay dağlarında oturun!" (T 31) - *türük oguz bäglär eşid-iŋ* "(Siz), Türk ve Oğuz beyleri, işitin!" (KT D 22) - *bunı körü bil-iŋ* "Bu (yazıtları) görün ve (iyi) öğrenin!" (KT G 12) - *anı körüpança bil-iŋ* "Onu görün ve...
  - `Tekin 1998, s. 11` (eslesen: _aLTUN_)
    > ...devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey ol...
  - `Ergin 1970, s. 38` (eslesen: _aLTUN_)
    > ...nderdim | Şantung şehrine, denize ulaştırdım. Yirmi üç şehir zaptetti. Uykusunu burda terk edip, yurtta yatıp kalırdı. Çin kağanı düşmanımız idi. On Ok kağanı düşmanımız idi. | Fazla olarak Kırgızın kuvvetli kağanı düşmanımız oldu. O üç kağan akıl akıla verip Altun ormanı üstünde buluşalım demiş. [[s. 38]] Şöyle akıl akıla vermişler: Doğuda Türk kağanına karşı ordu sevk edelim. Ona karşı ordu sevk etmezsek, ne zaman bir şey olsa o bizi | -kağanı kahraman imiş, müşaviri bilici imiş- ne zaman bir şey olsa öldürecektir. He...
  - `Tekin 2003, s. 24` (eslesen: _aLTUN_)
    > ...i ünsüzle sona eren heceleri göstermekte olması gerçeğinden kaynaklanır: - /T/ *at* “at” (KT D 33) - /K/ *ak* “ak, kır” (KT D 36) - /b/ *äb* “ev, çadır” (BK D 32) - /r/ *är* “adam” (KT D 12) - /DK/ *ad-ak*, yani *adak* “ayak” (KT K 7) - /LTUN/ *al-tun*, yani *altun* “altın” (BK G 11) - /RTUK/ *ar-tuk*, yani *artuk* “çok, pek çok” (KÇ D 13) - /dgÜ/ *äd-gü*, yani *ädgü* “iyi” (BK G 12) - /rn/ *är-än*, yani *ärän* “adamlar” (KT K 9, BK G 11) [s. 25] # s. 025 — ORHON TÜRKÇESİ GRAMERİ /mgk/ *äm-g-äk*, yani *ämgäk* “acı, ıs...
  - `Ata 2011, s. 93` (eslesen: _aLTUN_)
    > ...- yuvarlaklık uyumu = dudak benzeşmesi = assimilation labiale) bu dönemde çok az örnekte görülmektedir. Bugün altın, kuru- ve yürü- şeklinde küçük ünlü uyumuna uygun şekilde söylediğimiz sözler, Orhun Türkçesi ile yazılı metinlerde altun, kurı- ve yorı- şeklinde yer almaktadır. 3. Orhun Türkçesinde düzlük-yuvarlaklık uyumuna girmeyen ekler pek çoktur. Bunların başlıcaları aşağıda gösterilmiştir. Tamlayan durumu eki: türük bodun+ıŋ ilin törüsin KT D1 “Türk halk...


## TY1-K-7#5 - Tonyukuk Yazıtı, Kuzey 7. satir  (9 kelime)

- **transkripsiyon:** `TiDİ : SÜ : BaŞI : İNeL : KaGaN : TaRDUŞ : ŞaD : BaRZUN : TiDİ`
- **kelime karsiliklari:** DEDİ : SÜ : BAŞI : İNEL : KAĞAN : TARDUŞ : ŞAD : VARSIN : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SÜ BaŞI İNeL KaGaN_)
    > ...emiş. “Türgiş kağanı taşıkmış” tidi, “On-Ok bodunı kalısız taşıkmış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı...
  - `Olmez 2017, s. 58` (eslesen: _SÜ BaŞI İNeL KaGaN_)
    > ...T 5) **Teklik 2. kişi: Ø, -(X)ŋ; -gIl** *bo savımın edgüti eşid katıgdı tıŋla* "bu sözümü iyice işitin, sıkıca dinleyin" (KT G 2); *anı algıl tėdi* "onu yakala dedi" (Tar D 6); *aygıl tėdi* "akıl ver! dedi" (T 5) **Teklik 3. kişi: -zUn, -zu, -çun** *sü başi inel kagan tarduş şad barzun tėdi* "Ordunun komutanı (olarak) İnel Kağan (ile) Tarduş Şad gitsin dedi." (T 31); *türük bodun yok bolmazun* "Türk halkı yok olmasın" (KT D 11) *teŋri yarlıkazu* "tanrı lütfettiği (için)" (KT D 29) *bodun bolçun tėyin* "halk olsun diy...
  - `Ergin 1970, s. 40` (eslesen: _BaŞI İNeL KaGaN TaRDUŞ_)
    > ...çıkmış der. [[s. 39]] Çin ordusu var imiş. O sözü işitip kağanım, ben eve ineyim dedi. | Hatun yok olmuştu. Ona yas töreni yaptırayım dedi. M U H A R R E M E R G İ N [s. 40] O R H U N Â B İ D E L E R İ Ordu, gidin dedi, Altun ormanında oturun dedi. Ordu başı İnel Kağan, Tarduş şadı gitsin dedi. Bilge Tonyukuka, bana şöyle dedi: | Bu orduyu sevk et dedi. Cezayı gönlünce söyle. Ben sana ne söyleyeyim dedi. Gelirse hile toparlanır, gelmezse haberciyi, sözü alarak otur dedi. Altun ormanında oturduk. | Üç casus geldi. Sözü bir: Kağan or...


## TY1-K-7#6 - Tonyukuk Yazıtı, Kuzey 7. satir  (4 kelime)

- **transkripsiyon:** `BİLGE : TONYUKUKA : BaŊA : aYDI`
- **kelime karsiliklari:** BİLGE : TONYUKUKA : BANA : AYDI
- **kanit:**
  - `Ergin 1970, s. 40` (eslesen: _BİLGE TONYUKUKA BaŊA_)
    > .... O sözü işitip kağanım, ben eve ineyim dedi. | Hatun yok olmuştu. Ona yas töreni yaptırayım dedi. M U H A R R E M E R G İ N [s. 40] O R H U N Â B İ D E L E R İ Ordu, gidin dedi, Altun ormanında oturun dedi. Ordu başı İnel Kağan, Tarduş şadı gitsin dedi. Bilge Tonyukuka, bana şöyle dedi: | Bu orduyu sevk et dedi. Cezayı gönlünce söyle. Ben sana ne söyleyeyim dedi. Gelirse hile toparlanır, gelmezse haberciyi, sözü alarak otur dedi. Altun ormanında oturduk. | Üç casus geldi. Sözü bir: Kağan ordu çıkardı, On Ok ordusu eksiksiz dışarı...
  - `Tekin 1998, s. 46` (eslesen: _BaŊA aYDI_)
    > ...ış tir; Tabgaç süsi bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir....
  - `Tekin 2003, s. 120` (eslesen: _BaŊA aYDI_)
    > ...eni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärklig adırtı* "Bizi (yeraltı tanrısı) Erklig ayırdı" (Altınköl I 8) 4. Verme-Bulunma durumu: *bilgä tuñukuk(k)a baŋa aydı* "(Hakan), Bilge Tunyukuk'a, bana, (şöyle) emretti:" (T 31) *bu yerdä maŋa kul boltı* "Burada bana köle oldu" (BK D 36) *kop maŋa körti* "Hepsi bana tabi oldu" (KT D 30) *anta içräki bodun [kop] m[aŋa] k[örür]* "O sınırlar içindeki halklar hep bana tabidir" (...
  - `Tekin 1998, s. 3` (eslesen: _BİLGE_)
    > ...ürk Dilleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarı...
  - `Ergin 1970, s. 3` (eslesen: _BİLGE_)
    > ...ına izin verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. T...
  - `Tekin 2003, s. 12` (eslesen: _BİLGE_)
    > ................................. 216 METİN ÖRNEKLERİ ....................................................................................... 217 Kül Tigin Yazıtı (732) .................................................................................... 219 Bilge Kagan Yazıtı (735) ................................................................................ 221 [s. 13] # s. 013 — İÇİNDEKİLER Tunyukuk Yazıtı (725 ?) ................................................................................. 222 Ongin Yazıtı...


## TY1-K-8#1 - Tonyukuk Yazıtı, Kuzey 8. satir  (4 kelime)

- **transkripsiyon:** `BU : SÜG : iLeT : TİDİ`
- **kelime karsiliklari:** BU : SÜYÜ : İLET : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _BU SÜG_)
    > ...bar ermiş”. Ol sabığ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda ti...
  - `Tekin 2003, s. 122` (eslesen: _BU SÜG_)
    > ...Tunyukuk (çalışıp çabalayıp) kazandıkları için Kapgan Kaganın Türk Sir halkının gelişmesi (işte) bu(dur)" (T 61) [s. 122] # s. 122 — TALAT TEKİN *bardok yirdä ädgüg ol ärinç* "Gittiğin yerlerde (tek) kazancın şu oldu:" (KT D 2) b) Gösterme sıfatı olarak: *bu süg elt tidi* "Bu orduyu sevk et dedi" (T 32) *bu yolun yorısar yaramaçı* "Bu yoldan gidersek yaramıyacak" (T 23) *bu türük bodun ara yarıklıg yagıg yältürmädim tügünlüg atıg yügürtmädim* "Bu Türk halkı arasına zırhlı düşmanları akın ettirmedim, (kuyrukları) düğü...
  - `06_Akdes_Nimet_Kurat_Turk_Kavimleri_ve_Devletleri, s. 104` (eslesen: _BU SÜG_)
    > ...mandanı arasında bazı müzakerelerin cereyan ettiği ve Ruslar için bazı menfaat· lar sağlıyan bir anlaşmaya varıldığı da anlaşılıyor. Her halde bunlar ticaretle ilgili olsa gerektir. Bunun üzerine Ruslar ve Kumanlar Suğdak yanından çekilip gittiler. [[s. 104]] Bu Suğdak seferinden ancak iki yıl sonra, Kumanlar ile Ruslar yeniden askeri bir işbirliği yapacaklardır. Bu olay Moğol-Tatar istilası ile bağlıdır. 1 A. J. Yakubovııkiy, Rasslcaıı lbn-ül-Bibi o pokhode maloaııiyatskikh Turok na Sudalc (Anadolu Türklerinin Sudak sef...


## TY1-K-8#2 - Tonyukuk Yazıtı, Kuzey 8. satir  (8 kelime)

- **transkripsiyon:** `KIYıNıG : KÖŊLüŊÇE : aY : BeN : SaŊA : NE : aYaYIN : TİDİ`
- **kelime karsiliklari:** KIYINI : GÖNLÜNCE : AY : BEN : SANA : NE : AYAYIM : DEDİ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KIYıNıG KÖŊLüŊÇE aY BeN SaŊA NE aYaYIN TİDİ_)
    > ...ğ eşidip kağanım “Ben ebgerü tüşeyin” tidi. [[s. 46]] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıt...
  - `Ergin 1970, s. 40` (eslesen: _BeN SaŊA NE_)
    > ...aptırayım dedi. M U H A R R E M E R G İ N [s. 40] O R H U N Â B İ D E L E R İ Ordu, gidin dedi, Altun ormanında oturun dedi. Ordu başı İnel Kağan, Tarduş şadı gitsin dedi. Bilge Tonyukuka, bana şöyle dedi: | Bu orduyu sevk et dedi. Cezayı gönlünce söyle. Ben sana ne söyleyeyim dedi. Gelirse hile toparlanır, gelmezse haberciyi, sözü alarak otur dedi. Altun ormanında oturduk. | Üç casus geldi. Sözü bir: Kağan ordu çıkardı, On Ok ordusu eksiksiz dışarı çıktı der. Yarış ovasında toplanalım demiş. [[s. 40]] O sözü işitip, kağ...
  - `Ogel C1, s. 320` (eslesen: _BeN SaŊA NE_)
    > ...zımda bir dilim var ! Bunlardan başka da bir dostum yok. Tanrıdan dilerim, gökteki melekler de bana rehber olsunlar. [[s. 320]] Çok şükür, Oyrat ilinin ne ala renk atlarını alıp kaçırdım ve ne de kula renk atlarını yağma ettim, Ey Tanrım, hayatı veren sensin. Ben sana ne suç işledim!” “Alman-Bet bir eteğini bir yanına kaldırır, öbür eteğini de öbür yanına kaldırır. Sonra da : “Kökçö! Kökçöl” Diye Kökçe-Han'ı çağırır. Ama Kökçe-ilan'a yardım eden melekler az olur. Bunun için de talihi yaver gitmez. (Herhalde mağlüp olmuş olac...


## TY1-K-8#3 - Tonyukuk Yazıtı, Kuzey 8. satir  (3 kelime)

- **transkripsiyon:** `KeLİR : eRSeR : KÜR`
- **kelime karsiliklari:** [DÜŞMAN] GELİR : İSE : GÜR[CE]
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KeLİR eRSeR_)
    > ...] (K 7) Katun yok bolmiş erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan...
  - `Olmez 2017, s. 55` (eslesen: _KeLİR eRSeR_)
    > ..., *kem* "kim", *ne* "ne; niçin", *neçök* "nasıl", *neke* "niye, niçin". ### Fiil Çekimi #### Zaman Ekleri **Geniş zaman *-Ar/-Ir/-Ur* ve *-r* ekleriyle kurulur:** *neke tezer biz* "ne diye kaçacağız?" (T 38) *konar köçer ben* "konar göçerim" (Tar B 4) *kelir erser körü kelür kelmez erser tılıg savıg alı olor tėdi* "Gelirlerse görünerek gelirler, gelmezlerse casuslardan haber alıp bekleyin dedi." (T 32); *yagı kelir tėdi* "düşman geliyor dedi." (MÇ D 6); *anta içreki bodun kop maŋa görür* "bu (sınırların) içerisinde...
  - `Ata 2011, s. 113` (eslesen: _KeLİR_)
    > ...i) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülke...
  - `Tekin 1998, s. 4` (eslesen: _eRSeR_)
    > ...k BİĞç 15 TEZEK O ŞU UN S ce sente n Ünen Kerem e eN ERER EE İlan Ör 17 İzi > DEPİMLEN erir ERMAK ÜRÜR RR 19 İd. SALASÖZLEPÜ. veneer ARMEN NET KENE EREK AREREĞ 20 9.0. Edebi Sanatlar (BEenzetmeler)i ccs RENK 21 6. Eski Türk Runik Yaazısı................ ne cerser neee 22 TT. Yazım Kurallatı. see RA ÜRER ARAN RDERRERĞÜ 25 7.1. Ünlülerle ilgili yazım kuralları............. 0s 25 7.2. [[s. 4]] Ünsüzlerle ilgili yazım kuralları............ 0 26 7.3.. Noktalama işareti ....oseerkarorsa erener KE KEKeN 28 8. Orhon Alfabes...
  - `Ata 2011, s. 94` (eslesen: _eRSeR_)
    > ...ak atılıp saldırdı” 4. Orhun Türkçesindeki e ~ i nöbetleşmesi, daha sonraki dönem Türk yazı dillerinde bu seslerin yazımındaki karışıklığın habercisi gibidir. ben ‘ben’ T 1 ~ bini ‘beni’ T 10 sen ‘sen’ KT G8 ~ sini ‘seni’ T 10 erser ‘ise’ KT G7 ~ irser KT G13 Ünsüzler 1. Orhun Türkçesinin ünsüzleri (konsonları) şunlardır: b ç d g k l m n ŋ ń p r s ş t y z Bu ünsüzlerden b,...
  - `Ata 2011, s. 106` (eslesen: _KeLİR_)
    > ...a KT D23 “(seni) beslemiş kağanına” eb+iŋ+e kirteçi sen BK K14 “evine gireceksin” 5. [[s. 106]] Bulunma-Çıkma Durumu (Kalma-Ayrılma, Lokatif-Ablatif): +dA (r, l, n harflerinden sonra +tA) köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G...


## TY1-K-8#4 - Tonyukuk Yazıtı, Kuzey 8. satir  (7 kelime)

- **transkripsiyon:** `ÖKüLÜR : KeLMeZ : eRSeR : TİLiG : SaBıG : aLI : OLUR`
- **kelime karsiliklari:** ÖKÜLÜR : GELMEZ : İSE : DİLİ : SÖZÜ : ALIP : OTUR
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _KeLMeZ eRSeR TİLiG SaBıG_)
    > ...erti. “Anı yoğlatayın” tedi. “Sü, barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurun...
  - `Olmez 2017, s. 55` (eslesen: _KeLMeZ eRSeR TİLiG_)
    > ...; niçin", *neçök* "nasıl", *neke* "niye, niçin". ### Fiil Çekimi #### Zaman Ekleri **Geniş zaman *-Ar/-Ir/-Ur* ve *-r* ekleriyle kurulur:** *neke tezer biz* "ne diye kaçacağız?" (T 38) *konar köçer ben* "konar göçerim" (Tar B 4) *kelir erser körü kelür kelmez erser tılıg savıg alı olor tėdi* "Gelirlerse görünerek gelirler, gelmezlerse casuslardan haber alıp bekleyin dedi." (T 32); *yagı kelir tėdi* "düşman geliyor dedi." (MÇ D 6); *anta içreki bodun kop maŋa görür* "bu (sınırların) içerisindeki halkın tamamı bana bağlıdır...
  - `Tekin 2003, s. 179` (eslesen: _TİLiG SaBıG aLI_)
    > ...pinin iki türü vardır: 1. Normal buyurma, 2. pekiştirmeli buyurma. Normal buyurma kipinin özel bir eki yoktur, eylem kök ve gövdesiyle bir ve aynıdır. Pekiştirmeli buyurma ise {-gIl} eki ile kurulur. 1. Normal buyurma: *bu süg elt* "Bu orduyu sevket!" (T 32) *tılıg sabıg alı olor* "Habercileri ve mesajlarını alıp otur!" (T 32) *täŋri öl temiş ärinç* "Tanrı 'Öl!' " demiş herhalde" (T 2) *tabgaç birdin-yän täg, kıtañ öŋdün-yän täg* "(Siz) Çinliler güney tarafından saldırın, (siz) Kıtaylar doğu tarafından saldırın!" (T 11) *sabımın...


## TY1-K-8#5 - Tonyukuk Yazıtı, Kuzey 8. satir  (4 kelime)

- **transkripsiyon:** `TİDİ : aLTUN : YIŞDA : OLuRTuMuZ`
- **kelime karsiliklari:** DEDİ : ALTIN : YIŞDA : OTURDUK
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _TİDİ aLTUN YIŞDA_)
    > ...barıng” tedi, “Altun yışda olurung,” tedi. “Sü başı İnel Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZI...
  - `Tekin 2003, s. 180` (eslesen: _aLTUN YIŞDA_)
    > ...-gıl* "Atlı muhafızları ve gözetleme kulelerini iyice yerleştir!" (T 34) *yiçä işig küçüg bir-gil* "Yine (bana) hizmet et!" (MÇ D 5), vb. **430.** Buyurma kipinin çoğul 2. kişi biçimi {-(X)ŋ} eki ile kurulur: [s. 180] # s. 180 — TALAT TEKİN - *sü bar-ıŋ... altun yışda olor-uŋ* "(Siz), askerler, gidin... Altay dağlarında oturun!" (T 31) - *türük oguz bäglär eşid-iŋ* "(Siz), Türk ve Oğuz beyleri, işitin!" (KT D 22) - *bunı körü bil-iŋ* "Bu (yazıtları) görün ve (iyi) öğrenin!" (KT G 12) - *anı körüpança bil-iŋ* "Onu görün ve...
  - `Tekin 1998, s. 47` (eslesen: _OLuRTuMuZ_)
    > ...yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sületdim. (B 9) Biz yeme süledimiz. Anı erttimiz. [[s. 47]] Yençü üğüzüğ keçe, “Tinsi Oğlu” aytığma befiğliğ Ek tağığ ertü (G 1) Temir Kapığka teği irtimiz. Anta yanturtumız. * ölürtümüz yerine een Eee a aa zem, EEE ET EE a ORHON YAZITLARI 91 devri- yeleri ve gözetleme kulelerini iyi yerleştir. Baskına uğratma!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfk...
  - `Tekin 2003, s. 209` (eslesen: _OLuRTuMuZ_)
    > ...Sİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kälmädi* "Geceleri uyuyasım gelmedi" (T 12) - *küntüz olorsıkım kälmädi* "gündüzl...
  - `Tekin 1998, s. 11` (eslesen: _aLTUN_)
    > ...devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey ol...
  - `Ergin 1970, s. 38` (eslesen: _aLTUN_)
    > ...nderdim | Şantung şehrine, denize ulaştırdım. Yirmi üç şehir zaptetti. Uykusunu burda terk edip, yurtta yatıp kalırdı. Çin kağanı düşmanımız idi. On Ok kağanı düşmanımız idi. | Fazla olarak Kırgızın kuvvetli kağanı düşmanımız oldu. O üç kağan akıl akıla verip Altun ormanı üstünde buluşalım demiş. [[s. 38]] Şöyle akıl akıla vermişler: Doğuda Türk kağanına karşı ordu sevk edelim. Ona karşı ordu sevk etmezsek, ne zaman bir şey olsa o bizi | -kağanı kahraman imiş, müşaviri bilici imiş- ne zaman bir şey olsa öldürecektir. He...


## TY1-K-9#1 - Tonyukuk Yazıtı, Kuzey 9. satir  (4 kelime)

- **transkripsiyon:** `ÜÇ : KÖRüG : YİYİ : KeLTİ`
- **kelime karsiliklari:** ÜÇ : GÖZCÜ : YİYİ : GELDİ
- **kanit:**
  - `Tekin 1998, s. 20` (eslesen: _KÖRüG_)
    > ...u bu sabımda iğid bar gu? Türük beğler, bodun, bunı eşiding! [[s. 20]] Türük (bodun tilrip il tutsıkınğın bunta urtum; yanığılıp ölsikingin yeme (G 11) bunta urtum. Nefiğ nefiğ sabım erser bengü taşka urtum. Anğar körü biling. Türük matı bodun, beğler, bödke körüğme beğler gü yanfığıltaçı siz? ORHON YAZITLARI 37 ipekli kumaşları (da) yumuşak imiş. Tatlı sözlerle (ve) yumuşak ipekli kumaşlarla kandırıp uzak(larda yaşayan) halkları böylece (kendilerine) yaklaştırırlar imiş. [[s. 20]] (Bu halklar) yaklaşıp yerleştikten...
  - `Tekin 2003, s. 120` (eslesen: _KÖRüG_)
    > ...in" KT G 8) *türük bodun tokurkak sän* "Türk halkı, sen kendini hep tok sayarsın" (KT G 8) *biz az biz* "Biz azız" (O 7) *tabgaç oguz kıtań buçägü kabışsar kaltaçı biz* "Çinliler, Oğuzlar ve Hıtaylılar... Bu üçü birleşirse (biz) çaresiz kalırız" (T 12) *bödkä körügmä bäglär gü yaŋıltaçı siz* "Bu dönemde (bana) itaat eden beyler, (sizler) mi yanılacaksınız?" (KT G 11, BK K 8) 2. İlgi durumu (sıfat olarak): *bäniŋ bodunum anta ärür* "Benim halkım orada olacaktır" (T 21) *mäniŋ sabımın sımadı* "Benim sözümü kırmadı" (KT G...
  - `Ata 2011, s. 146` (eslesen: _KÖRüG_)
    > ...r? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u- c. it- d....
  - `Olmez 2017, s. 96` (eslesen: _KÖRüG_)
    > ...: [?] : [?] : [?] : [?] : [?] : [?] : [?] ``` [s. 96] # s. 094 — Mehmet Ölmez (basılı sayfa numarası 96) (Runik metin: KT G 11) *G 11. bonta : urtum : neŋ neŋ : savım : erser : beŋgü : taşka : urtum : aŋar körü biliŋ : türük : amtı bodun : begler : bödke körügme : beglergü : yaŋıltaçı siz men : beŋgü : taş tikdim : tavgaç : kaganta : bedizçi kelürtüm : bedizettim : meniŋ : savımın : sımadı :* "buraya kazıdım. Söyleyecek ne sözüm varsa bengi taşa kazıdım. Buna bakarak anlayın. Şu anki Türk halkı, beyleri, halihazır...
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tekin 2003, s. 239` (eslesen: _KeLTİ_)
    > ...*batur** yiğit, bahadır (Altınköl II 5) - **bay** zengin - **Bayça Saŋun** kişi adı ve unvanı (Barık III 1) - **Bayırku** etnik ad - **baz** bağımlı, tabi - **bazlan-** bağımlı olmak, tabi olmak (Tes 11) - **bädiz** süs, resim, heykel - **bädizçi** ressam, heykeltıraş - **bädizlä-** süslemek (IB 43) - **bädük** büyük (O 6) - **bädzät-** süsletmek - **bäg** bey, lord - **bägiç** beycik (Abakan 6) - **bäglik** bey olmaya layık - **bälgü** işaret, alamet, nişan - **bältir** kavşak (yol ya da ırmak) - **bän** ben (bk. **män...


## TY1-K-9#2 - Tonyukuk Yazıtı, Kuzey 9. satir  (5 kelime)

- **transkripsiyon:** `SaBI : BİR : KaGaN : SÜ : TaŞIKDI`
- **kelime karsiliklari:** SÖZLERİ : BİR : KAĞAN : ORDU : TAŞIKDI
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SaBI BİR KaGaN_)
    > ...Kağan, Tarduş Şad barzun!” tedi. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktü...
  - `Tekin 2003, s. 207` (eslesen: _SaBI BİR_)
    > ...r" (IB 18) - *añıg ädgü ol* "(Bu fal) çok iyidir" (IB 5) - *yablak ol* "(Bu fal) kötüdür" (IB 6) - *añıg yablak ol* "(Bu fal) çok kötüdür" (IB 36), vb. 3. Bağlayıcısız yüklem: - *küräg sabi antag* "Kaçağın sözleri şöyle (idi)" (T 9) - *üç küräg ki[şi] kälti, sabi bir* "Üç kaçak kişi geldi, sözleri aynı (idi)" (T 33) - *tılıg kälürti, sabi antag* "(Bir) tutsak haberci getirdiler, sözleri şöyle:" (T 36) - *yaylagım ötükän kuzi* "Yaylam Ötüken dağlarının kuzeyi(dir)" (Tar. B 5) [s. 208] # s. 208 — TALAT TEKİN - *ötükän eli...
  - `Tekin 1998, s. 44` (eslesen: _BİR KaGaN_)
    > ...ayvanları yiyerek, tavşan yiyerek yaşıyorduk. Halkın boğazı tok idi. Düşmanlarımız çepeçevre ocak gibi idi; biz (ortadaki) aş gibi idik. Böylece oturur iken Oğuz'lardan bir kaçak geldi. [[s. 44]] (G 2) Kaçağ(ın) sözleri şöyle (idi): “Dokuz Oğuz halkı üzerine (bir) kağan tahta çıktı” diyor. “(Bu kağan) Çin'e General Ku'yu göndermiş; Kıtay'lara Tongra Eşim'i göndermiş. (Bunlarla) şöyle haber göndermiş: “Azıcık Türk (halkı?) (G 3) gelişiyormuş. Kağanları cesur imiş, sözcüleri akıllı imiş. O iki kişi var oldukça, sizi, Çinlileri...
  - `Ergin 1970, s. 5` (eslesen: _BİR KaGaN_)
    > ...nda Avarlar bulunuyordu. 552 tarihinde Bumin Kağan, Avar idaresine son vererek Türk O R H U N Â B İ D E L E R İ [s. 5] devletinin Göktürk hanedanı devrini açtı. O devirde büyük kağanlığın merkezi devletin doğu kısmmda idi ve batı kısmı da doğuya bağlı tabi bir kağanlıkla idare ediliyordu. Bumin Kağan'ın kardeşi İstemi Kağan da 576'ya kadar bu batı bölümünün kağanı idi. Bumin Kağan, Göktürk hakimiyetini kurduğu sene içinde öldü ve sırasıyla üç oğlu, büyük kağanlık yaptılar. Birincisi 553'te, ikincisi 553-572'de, üçuncüsü...
  - `Ata 2011, s. 77` (eslesen: _BİR KaGaN_)
    > ...önemli ve en uzun yazıtlardır. Ayrıca bu yazıtlar, Türk dilinin gramer unsurlarının tespit edilebileceği düzeyde olup Türk dilinin kendi bünyesi içinde, yabancı unsurlarla karışmadan ileri bir düzeye eriştiğini de açıkça göstermektedir. Yazıtlarda, bir kağanın veya bir kahramanın başarı için yapması gerekenler anlatıldığı gibi, iyi bir kağanın veya iyi bir devlet adamının yönetiminde halkın içinde bulunduğu refah ya da içine düştüğü kötü durum dile getirilir. Aynı zamanda bunlar, sadece mezar taşları olmayıp h...
  - `Tekin 1998, s. 12` (eslesen: _KaGaN SÜ_)
    > ...lı uçuz ermiş, yinçge erkliğ üzgeli uçuz. 5.5. [[s. 12]] Edebi Sanatlar (Benzetmeler) Orhon yazıtlarında anlatımı zenginleştiren ve güzelleştiren öğelerden biri de sık sık başvurulan benzetmelerdir. İşte bunlardan birkaçı: (Tehngri küç birtük üçün) kafiğım kağan süsi böri teğ ermiş, yağısı kony teğ ermiş “(Tanrı güç verdiği için), babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortad...


## TY1-K-9#3 - Tonyukuk Yazıtı, Kuzey 9. satir  (5 kelime)

- **transkripsiyon:** `ON : OK : SÜSİ : KaLISıZ : TaŞIKDI`
- **kelime karsiliklari:** ON : OK : ORDUSU : KALISIZ : TAŞIKDI
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _ON OK SÜSİ KaLISıZ TaŞIKDI_)
    > ...i. Bilge Tuniyukukka, banğa aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak,...
  - `Tekin 2003, s. 146` (eslesen: _ON OK SÜSİ KaLISıZ TaŞIKDI_)
    > ...fazlasıyla getirdiler” (T 48), vb. [s. 146] # s. 146 — TALAT TEKİN **331.** *kalısız* “eksiksiz, pek çok” < *\*kālı* “kalan, artık” + *sız*: - *on ok süsi boduni kalısız taşıkmiş* “On Ok ordusu ve halkı geride hiç kimse kalmamasıya sefere çıkmış” (T 30) - *on ok süsi kalısız taşıkdı* “On Ok ordusu geride hiç kimse kalmamasıya sefere çıktı” (T 33) - *äbin barımın kalısız kop kälürti* “Çadırlarını ve mal mülklerini geride hiçbir şey bırakmamasıya getirdiler” (KT K 1), vb. **332.** *kärgäksiz* “gereğinden çok, ziyadesiyle” < *kärgäk +siz*:...
  - `Ata 2011, s. 120` (eslesen: _ON OK SÜSİ_)
    > ...ce, ne çok’. ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraf...
  - `Ata 2011, s. 113` (eslesen: _ON OK SÜSİ_)
    > ...en çok’, nençe ‘nice, ne çok’. [[s. 113]] ança kazganmış ança etmiş ilimiz törümiz erti “onca zengin ve onca gelişmiş devletimiz ve törelerimiz vardı” KT D22 bunça kazganıp “bu kadar kazanıp” BK G10 tört buluŋ kop yagı ermiş “dört taraf hep düşman imiş” KT D2 on ok süsi bodunı kalısız taşıkmış “On Ok ordusu (ve) halkı geride hiç kimse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halk...


## TY1-K-9#4 - Tonyukuk Yazıtı, Kuzey 9. satir  (5 kelime)

- **transkripsiyon:** `TİR : YaRıŞ : YaZIDA : TİRiLeLiM : TiMiŞ`
- **kelime karsiliklari:** DER : YARIŞ : YAZINDA : DİRİLELİM : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _TİR YaRıŞ YaZIDA TİRiLeLiM_)
    > ...aydı: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak, yaya vaziyette ağaçlara tut...
  - `Olmez 2017, s. 58` (eslesen: _YaRıŞ YaZIDA_)
    > ...Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinleyin" (KT G 10) ### Zarffiil ekleri: **-A, -I, -U ünlüleri...
  - `Ogel C2, s. 356` (eslesen: _TİR YaRıŞ_)
    > ...adeh, eski Türk geleneklerinde büyük bir yer tutuyordu. “âb-ı hayat”'a, “tirigliğ suyu”, yani dirilik suyu deniyordu. [[s. 356]] Kadehdeki bu suyu, tüketerek tüm içtim, Bunu hayatla yordun, sen yaşımı uzattın. (KB, 6057) Senin dediğin gibi, bu su hayat demektir: Yarısı içilir de, yarısı da (yarım ülüg) kalırsa, (6058) Yarısını içip de, yarısını (yarımı) koyduysam, Hayatımın yarısı, ancak kalmış demektir! (6059) Ben ise kadehteki, suyu tastamam (ftükel) içtim, Hayatımı tükettim, artık esen hoşça kal! (6060)... «Tükenmiştir...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_2, s. 47` (eslesen: _TİR YaRıŞ_)
    > ...ıganr m ŞA Le yl olar bir biriğ tıdhışdı s onlar birbirini alıkoymakta, birbirine e olmakta yarıştılar", di (VE) -- 5 V tidhışur - tıdhışmak), SALIĞ kadışdır "SİL EİYİ oz manga ton kadişdı - o, bana elbise dikmekte yardım et,ti". "Kadıma" bir çeşit sık dikiştir, Yarış ta böyledir; ( İNE kadı mak) fal. [[y. 47]] SAZ kıdışdız Eği ol manğa börk kıdış- dı * o, bana börk dikmekte yardım et- (4) 'SİSS mastarının mızarii yazma nüshada olmadığı halde Bay Kilisli basma nüshada " > S kadışur" diye bir muzari göstermiştir, B.A, [...
  - `Tekin 1998, s. 10` (eslesen: _YaZIDA_)
    > ...li künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, bitmek, tükenmek”, emget- tolgat- “eza ve cefa etmek”, içik- yükün- “bağımlı olmak ve baş eğmek”, it...
  - `Tekin 2003, s. 20` (eslesen: _YaZIDA_)
    > ...erin her biri ikişer ünlüyü gösterir: a/ä, ı/i, o/u ve /ö/ü. Alfabedeki çifte ünsüz işaretleri sistemi ve Türkçedeki ünlü uyumu /a/ ve /ä/ ünlüleri ile /ı/ ve /i/ ünlülerini yanlış okumayı önler. Ancak yuvarlak /o/ ve /u/ ünlüleri ile /ö/ ve /ü/ ünlülerini bu yazıda ayırt etmek olanaksızdır. Kalan harflerin 20 tanesi çifte “ünsüz işaretleri” diye adlandırılabilir. Bunlar /a/ ya da /ä/ ünlüsü ile başlayıp ilgili ünsüzle sona eren hece işaretleri gibidir. Hece işaretlerinden farkı bunların yalnız ilgili ünsüz değerinde de...


## TY1-K-9#5 - Tonyukuk Yazıtı, Kuzey 9. satir  (7 kelime)

- **transkripsiyon:** `OL : SaBıG : eŞiDiP : KaGaNGaRU : OL : SaBıG : ITıM`
- **kelime karsiliklari:** O : SÖZÜ : İŞİTİP : KAĞANA : O : SÖZÜ : İTTİM
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _OL SaBıG eŞiDiP KaGaNGaRU_)
    > ...lüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak, yaya vaziyette ağaçlara tutuna tutuna (askerleri) dağa ağdırdım. Öncü as...
  - `Tekin 1998, s. 44` (eslesen: _OL SaBıG eŞiDiP_)
    > ..., sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kal...
  - `Tekin 2003, s. 166` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ğını) tokluğu (doyacağını) düşünmezsin" (KT G 8) *türük bodun tokurkak sän āçsar to-sık ömäz sän bir todsar āç-sık ömäz sän* "(Ey) Türk halkı! Sen kendini hep tok sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *b...
  - `Ata 2011, s. 139` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sı...
  - `Ata 2011, s. 132` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eyle...
