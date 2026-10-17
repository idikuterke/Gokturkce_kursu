# Ceviri istek paketi 36 - Orhun cumlecikleri

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


## TY1-K-9#6 - Tonyukuk Yazıtı, Kuzey 9. satir  (3 kelime)

- **transkripsiyon:** `KaNDaYıN : SaBıG : YaNA`
- **kelime karsiliklari:** KAĞANDAN : SÖZE : YANIT
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _SaBıG YaNA_)
    > ...körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak, yaya vaziyette ağaçlara tutuna tutuna (askerleri) dağa ağdırdım. Öncü askerleri (K 2) (karları) yoğururcasına...
  - `Tekin 2003, s. 156` (eslesen: _SaBıG YaNA_)
    > ...ır: *tabgaç birdin-yän täg, kıtañ öŋdün-yän täg, bän yırdınta-yan tägäyin* "(Siz) Çinliler (Türklere) güney tarafından saldırın, (siz) Kıtaylar doğu tarafından saldırın, ben (de) kuzey tarafından saldırayım" (T 11) [s. 156] # s. 156 — TALAT TEKİN *kanta yan sabıg yana käl<ür>ti* "Han tarafından (şu) yanıtı getirdiler" (T 33-34) ## Bağlaçlar ## Sıradaş Bağlaçlar **367.** Orhon Türkçesinde sıradaş bağlaçlar ya da bağlaç görevinde kullanılan sözcükler şunlardır: *azu, artukı, takı, udu, ulayu* ve *yämä*. **368.** *azu* "v...
  - `Tekin 1998, s. 20` (eslesen: _SaBıG_)
    > ...un, öltüğ! Türük bodun, ölsiking! Birye Çuğay yış Töğültün (G 7) yazı konayınm tiser, Türük bodun ölsikiğ! [[s. 20]] Anta anyığ kişi ança boşgurur ermiş: “Trak erser, yablak ağı birür, yağuk erser edgü ağı birür” tip ança boşgurur ermiş. Biliğ bilmez kişi, ol sabığ alıp, yağru barıp, üküş kişi öltüğ. (G 8) Ol yergerü barsar, Türük bodun, ölteçi sen! Ötüken yir olurup arkış tirkiş ısar, nefğ bufiğuğ yok. Ötüken yış olursar beniğgü il tuta olurtaçı sen. Türük bodun, tokurkak sen: Açsık tosık ömez sen; bir todsar âçsık öme...
  - `Tekin 2003, s. 142` (eslesen: _SaBıG_)
    > ...içä käŋränür* "Sabahleyin mırıldanır, akşamleyin sızlanır" (IB 22) 2. /+tüz/. Bu ek yalnız *küntüz* "gündüz, gündüzün" sözcüğünde görülür: *türük bodun üçün tün udımadım küntüz olormadım* "Türk halkı için geceleri uyumadım gündüzleri oturmadım" (BK D 22) *ol sabıg äşidip tün udısıkım kälmädi küntüz olorsıkım kälmädi* "O haberi işitince gece uyuyasım gelmedi, gündüz oturasım gelmedi" (T 12) *tün udımatı küntüz olormatı* "gece uyumadan, gündüz oturmadan" (T 51-52) 3. Araç durumu eki {+(X)n} ile türetilmiş zaman zarfları...
  - `Ata 2011, s. 139` (eslesen: _SaBıG_)
    > ...kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9....
  - `Ata 2011, s. 132` (eslesen: _SaBıG_)
    > ...ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil ek...


## TY1-K-10#1 - Tonyukuk Yazıtı, Kuzey 10. satir  (4 kelime)

- **transkripsiyon:** `KeLTİ : OLuRuŊ : TİYiN : TiMiŞ`
- **kelime karsiliklari:** GELDİ : OTURUN : DİYE : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 46` (eslesen: _OLuRuŊ TİYiN_)
    > ...sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak, yaya vaziyette ağaçlara tutuna tutuna (askerleri) dağa ağdırdım. Öncü askerleri (K 2) (karları) yoğururcasına yürütüp ormanla kaplı doruğu aştık...
  - `Tekin 1998, s. 13` (eslesen: _KeLTİ_)
    > ...babam hakanın askerleri kurt gibi, düşmanları da koyun gibi imiş”, Yağımız teğre oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birk...
  - `Tekin 2003, s. 239` (eslesen: _KeLTİ_)
    > ...*batur** yiğit, bahadır (Altınköl II 5) - **bay** zengin - **Bayça Saŋun** kişi adı ve unvanı (Barık III 1) - **Bayırku** etnik ad - **baz** bağımlı, tabi - **bazlan-** bağımlı olmak, tabi olmak (Tes 11) - **bädiz** süs, resim, heykel - **bädizçi** ressam, heykeltıraş - **bädizlä-** süslemek (IB 43) - **bädük** büyük (O 6) - **bädzät-** süsletmek - **bäg** bey, lord - **bägiç** beycik (Abakan 6) - **bäglik** bey olmaya layık - **bälgü** işaret, alamet, nişan - **bältir** kavşak (yol ya da ırmak) - **bän** ben (bk. **män...
  - `Ata 2011, s. 56` (eslesen: _KeLTİ_)
    > ...n tarafından düzenlenen cenaze törenine Köktürklerin komşularının tamamı katılır. Özellikle Çin hükümdarı, Köl Tigin’in mezar külliyesinde inşa edilen tapınağın duvarla- rını Köl Tigin’in dövüştüğü savaş resimleri ile süslemesi için altı ünlü ressam ve heykeltıraş ile birlikte Köl Tigin anıtının kazınması için 3.75m. yüksekliğinde, tepesi oymacılık sanatıyla süslenmiş boş bir mermer sütun gönderir. Daha sonra bu sütunun batı yüzüne Çince, doğu yüzüne ise Türkçe yazıtlar hâkkedilir ve 732’de Bilge Kağan külliyede...
  - `Olmez 2017, s. 53` (eslesen: _KeLTİ_)
    > ...(< *\*as+ra*) ve *üze* zıtlığı da burada bir *+rA*'nın (*\*üzre < \*ür+re*) varlığına delalettir (Erdal 2004'ten özetlenmiştir). ### Eşitlik Durumu: +çA Yazıtlar döneminde benzerlik, gibilik anlamları veren bu ek zarf türetir: *türgėş kagan süsi otça borça kelti* "Türgiş hakanının ordusu ateş gibi, fırtına gibi (üzerimize) geldi" (BK D 27) *eligçe er tutdumuz* "Elli kadar askerini tutsak aldık" (T II B 7) *könlünçe uduz* "Dilediğin gibi sevk et!" (T 15) ### Birliktelik / Beraberlik Durumu: +(X)n Bazı çalışmalard...
  - `Tekin 1998, s. 22` (eslesen: _TİYiN_)
    > ...(D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...


## TY1-K-10#2 - Tonyukuk Yazıtı, Kuzey 10. satir  (4 kelime)

- **transkripsiyon:** `YeLME : KaRGU : eDGÜTİ : URGıL`
- **kelime karsiliklari:** YELME[Yİ] : KARGUYU : İYİCE : IRGALA
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _YeLME KaRGU eDGÜTİ URGıL_)
    > ...efere çıktı. [[s. 46]] On-Ok ordusu tümüyle sefere çıktı diyorlar. Yarış ovasında toplanalım!” demiş. Bu sözleri işitip kağana bu haberi gönderdim. Kağan tarafın- dan yanıtı (şöyle) (K 10) getirdiler: “Oturun!” diye, demiş. “Atlı [s. 47] 90 TUNYUKUK YAZITI “Yelme kargu edgüti urgıl. Basıtma!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün ak...
  - `Tekin 1998, s. 15` (eslesen: _eDGÜTİ_)
    > ...yazılmaz: BUDN (bodun) “boylar, halk”, ULG (uluğ) “ulu”, kÜR81 (köfiğül) “gönül, arzu”, Üçn (üçün) “için”, Ülgm (ülüğüm) “bahtım, talihim” vb. 7. [[s. 15]] Sözcük sonundaki bütün ünlüler genellikle yazılır: KRA (kara), bllgA (bilge), YzI (yazı) “ova”, dgÜtl (edgüti) “iyice” SYU (sayu) “her”, büğgÜ (benğgü) “sonsuz, ebedi” vb. , 7.2. Ünsüzlerle ilgili yazım kuralları ş 8. Art (kalın) ünsüz işaretleri (B, D, G,K,L, N,R, S,T, Y) art ünlülü sözcüklerdeki, ön (ince) ünsüz işaretleri (b, d, g, k, 1, n, T, s, t, y) ön ünlül...
  - `Ata 2011, s. 112` (eslesen: _eDGÜTİ_)
    > ...rı ağaçlara bağlıyorduk” ol yılkı+g alıp igittim BK D38 “o at sürülerini alıp besledim” elig yıl iş+ig küç+üg birmiş KTD8 “elli yıl hizmet etmiş” b. +(I)n: İyelik ekli gövdeler üzerine ulanır. 1. tekil kişi iyelik ekinden sonra: sab+ım+ın edgüti eşid KT G2 “sözümü iyice işit” seb-dük+üm+in yiyür men IB 4 “sevdiğimi yiyorum” 2. tekil kişi iyelik ekinden sonra: türük bodun il+iŋ+in törü+g+in kem artatı udaçı erti BK D19 “Türk halkı (senin) devletini ve yasalarını kim bozabilir idi”...
  - `Olmez 2017, s. 21` (eslesen: _eDGÜTİ_)
    > ...dar, güneyde Çin'in iç kesimlerine ve Tibet'e kadar, batıda Semerkant'ı geçip Afganistan'a kadar, kuzeyde Altay, Tuva bölgelerine kadar geniş bir bölgeye seferler düzenlemiş bu bölgeleri eğemenlikleri altına almışlardır: *tokuz oguz begleri bodunı bo savımın edgüti ėşid katıgdı tıŋla ilgerü kün tugsıkka bėrigerü kün ortosıŋaru kurıgaru kün batsıkıŋa yırıgaru tün ortosıŋaru anta içreki bodun kop maŋa körür ança bodun kop ėtdim ol.* "Tokuz Oğuz Beyleri ve halkı, bu sözümü iyice işitin, sıkıca dinleyin! Doğuda güneşin d...
  - `Olmez 2017, s. 65` (eslesen: _YeLME_)
    > ...who were about to die" (KT D 29); *ölteçiçe sakınışma türⁱk begler* "the Türk beys who were so distraught as if about to die" (BK D 2) ## erkli: *kёçe yaruk batar erkli süŋüşdüm* "I fought as the sun was setting in the evening" (MÇ D 1); *tuğ taşıkar erkli yëlme eri kelti* "As the banner was being hoisted, the vanguard soldiers came" (MÇ D 5-6); *yuyka erkli topulgalı uçuz ermiş yinçge erklig üzgeli uçuz* "It appears easy to pierce the flaky one. The slender one is easy to break off." (T 13) --- # Word Formation (...
  - `Tekin 2003, s. 109` (eslesen: _KaRGU_)
    > ...**262.** {+nI}. Bu ek birkaç örnekte görülür: *yoguŋ koragıŋ+nı* "cenaze törenini" (O 12) *ku+nı säŋün+üg ıdmiş* "(Çin'e) General Ku'yu göndermiş" (T 9) Aşağıdaki örneklerde belirli nesne eki söz öbeğinin yalnız ikinci (sonuncu) üyesine eklenmiştir: *arkuy kargu+g* "müstahkem mevkiler(i) ve gözetleme kulelerini" (T 53) *yoguŋ koragıŋ+nı* "cenaze törenini" (O 12) *bäg+li bodun+lı+g* "beyler ile halkını" (KT D 6); krş. Uyg. *täŋri+li yir+li+dä* "gök(te) ve yerde" (TT VI 02) [s. 110] # s. 110 — TALAT TEKİN Bu kural {+...


## TY1-K-10#3 - Tonyukuk Yazıtı, Kuzey 10. satir  (7 kelime)

- **transkripsiyon:** `BaSıTMA : TiMiŞ : BÖG : KaGaN : BaŊaRU : aNÇA : YIDMıŞ`
- **kelime karsiliklari:** BASITMA : DEMİŞ : BÖGÜ : KAĞAN : BANA : ANCA : YIDMIŞ
- **kanit:**
  - `Tekin 2003, s. 121` (eslesen: _KaGaN BaŊaRU aNÇA YIDMıŞ_)
    > ...ma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki kanadı bizden yarı yarıya fazla idi" (T 0) *ötükän eli sizdä* "Ötüken ülkesi sizin elinizde" (Tar. G 5) *sin sizdä* "(Atalarımızın) mezarları sizin elinizde" (Tar. G 5) 6. Yönelme durumu: *bög[ü] kagan baŋaru ança yıdmış* "Bögü Hakan bana böyle (bir mesaj) iletmiş" (T 3) ## İşaret Zamirleri **272.** Orhon Türkçesinde iki işaret zamiri vardır: *bu* ve *ol* "o". Sonuncu zamir üçüncü kişi zamiri olarak da kullanılır. İşaret zamirlerinin çekim gövdeleri de sırasiyle *bun+* ve *...
  - `Tekin 1998, s. 47` (eslesen: _aNÇA YIDMıŞ_)
    > ...Yarış ovasında toplanalım!” demiş. Bu sözleri işitip kağana bu haberi gönderdim. Kağan tarafın- dan yanıtı (şöyle) (K 10) getirdiler: “Oturun!” diye, demiş. “Atlı [s. 47] 90 TUNYUKUK YAZITI “Yelme kargu edgüti urgıl. Basıtma!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B...
  - `Tekin 2003, s. 69` (eslesen: _BaŊaRU_)
    > ...mak", *ulug* "ulu", *yog* "cenaze töreni", vb.; *bäg* "bey", *bitig* "yazı", *çärig* "ordu", *ög* "anne", *ölüg* "ölü", *tirig* "diri, canlı", vb. ## /ŋ/ Ünsüzü **118.** Damak genizsili /ŋ/ söz içinde ve sonunda bulunur. 1. Söz içinde: *aŋaru* "ona doğru", *baŋaru* "bana doğru", *buŋad-* "bunalmak", *ärtiŋü* "pek, pek çok", *siŋil* "kız kardeş", *süŋök* "kemik", *süŋüş-* "savaşmak", vb.; *öŋdün* "doğu, doğuda", *täŋri* "gök; tanrı", *tıŋla-* "dinlemek", vb. 2. Söz sonunda: *äŋ* "en", *bıŋ* "1000", *buŋ* "sıkıntı, dert"...
  - `Ata 2011, s. 116` (eslesen: _BaŊaRU_)
    > ...bizinte T 40 Gösterme Durumu sizde Tar. G5 baŋaru T 3 Yukarıdaki tabloda en dikkat çekici özellik 1. tekil kişi zamirindedir. b- ile başlayan sözcüklerde genizsi bir ses olan /n/ ve /ŋ/ var ise söz başındaki b- > m- olur: ben ~ men gibi. T yazıtı bu söz...
  - `Olmez 2017, s. 54` (eslesen: _BaŊaRU_)
    > ...imleri #### Kişi Zamirleri | Yalın | İlgi | Belirtme | Yaklaşma-bulunma | Bulunma-Ayrılma | Eşitlik | Birlik-telik | Yönelme | | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | | *ben ~ men* | *beniŋ ~ meniŋ* | *bini* | *baŋa ~ maŋa* | | | | *baŋaru* | | *sen* | ø | *sini* | | | | | | | *ol* | | *anı* | | *anta* | *ança* | *anın* | *aŋar, aŋaru, ıngaru* | | *biz* | *biziŋ* | *bizni* | *biziŋe* | *bizinte* | | | | | *siz* | *siziŋ* | ø | | *sizde* | | | | *(T. Tekin, 2003; M. Erdal, 2004: 192)* Gerçekte...
  - `Ata 2011, s. 109` (eslesen: _BaŊaRU_)
    > ...Tamlayan Durumu beniŋ T 21, meniŋ KT G11, BK D29 biziŋ KT D39 Nesne Durumu bini T 10 sini T 10 bizni T 20 Yönelme Durumu baŋa T 31, maŋa KT D30, BK D36 saŋa T 32 biziŋe KT D19, 40; BK D16 BulunmaÇıkma Durumu bizinte T 40 sizde Tar. G5 Yön Gösterme Durumu baŋaru T 3 Yukarıdaki tabloda en dikkat çekici özellik 1. tekil kişi zamirindedir. b- ile başlayan sözcüklerde genizsi bir ses olan /n/ ve /ŋ/ var ise söz başındaki b- > m- olur: ben ~ men gibi. [[s. 109]] T yazıtı bu sözcüğün asıl şeklini korurken BK ve KT yazıtla...


## TY1-K-10#4 - Tonyukuk Yazıtı, Kuzey 10. satir  (5 kelime)

- **transkripsiyon:** `aPA : TaRKaNGaRU : İÇRE : SaB : IDMıŞ`
- **kelime karsiliklari:** APA : TARKANA : İÇERE : SÖZ : İTMİŞ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _aPA TaRKaNGaRU İÇRE SaB IDMıŞ_)
    > ...a toplanalım!” demiş. Bu sözleri işitip kağana bu haberi gönderdim. Kağan tarafın- dan yanıtı (şöyle) (K 10) getirdiler: “Oturun!” diye, demiş. “Atlı [s. 47] 90 TUNYUKUK YAZITI “Yelme kargu edgüti urgıl. Basıtma!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ:...
  - `Tekin 2003, s. 139` (eslesen: _aPA TaRKaNGaRU_)
    > ...gizli": 1. *içrä aşsız taşra tonsuz yabız yablak bodun* "karnı aç, sırtı çıplak, yoksul ve sefil halk" (KT D 26) *sagır içrä älik kiyik kirmiş* "(Bu arada) av alanının içine yaban geyiği girmiş" (IB 63), vb. 2. *içrä* zarfı niteleyici olarak da kullanılır: *apa tarkangaru içrä sab ıdmiş* "Apa Tarkan'a gizli mesaj göndermiş" (T 34) Bu zarfa {+kI} eki de eklenebilir: *içräki bädizçig ı(t)tı* "(Çin İmparatoru) saray sanatçılarını gönderdi" (BK K 14) *anta içräki bodun kop maŋa körür* "Bu sınırlar içindeki halklar hep bana tabidi...
  - `Tekin 2003, s. 115` (eslesen: _SaB IDMıŞ_)
    > ...çıktık" (KT K 8) *tabgaç+garu kunı säŋünüg ıdmiş, kıtań+garu toŋra äşimig ıdmiş* "Çin'e doğru General Ku'yu, Kıtay'lara doğru da Tongra Eşim'i göndermiş" (T 9) *ötükän yış+garu uduztum* "(Orduyu) Ötüken dağlarına doğru sevk ettim" (T 15) *apa tarkan+garu içrä sab ıdmiş* "(Hakan), Apa Tarkan'a gizli bir mesaj göndermiş" (T 34) *ol yer+gärü barsar, türük bodun, öltäçi sän* "O yerlere doğru gidersen, (ey) Türk halkı, öleceksin!" (KT G 8), vb. Bk. **Yer Zarfları**. 2. {+ŋArU}. Daha eski bir {-n+gArU} biçiminden gelişmiş olan b...
  - `Tekin 1998, s. 11` (eslesen: _IDMıŞ_)
    > ...şüphesiz”, (Anta kisre) inisi eçisin teğ kılınmaduk erinç, oğlu kafnğın teğ kılınmaduk erinç “(Ondan sonra) kardeşleri ağabeyleri gibi yaratılmamış şüphesiz, oğulları babaları gibi yaratılmamış [s. 11] 18 GİRİŞ şüphesiz”, (Türük bodun) illedük ilin ıçgınu ıdmış, kağanladuk kağanın yitürü ıdmış “(Türk halkı) kurduğu devleti elden çıkarıvermiş, tahta çıkardığı hakanını kaybedivermiş”, İlgerü kün tuğsıkka, birgerü kün ortusıfğaru; kurığaru kün batsıkınğa, yırgaru tün ortusıngaru... [[s. 11]] “doğuda gün doğusuna, güne...
  - `Tekin 2003, s. 92` (eslesen: _IDMıŞ_)
    > ...MÇ D 6) < *yäl-* "(at) dörtnal gitmek" **209.** {-mAk}: - *armakçısin* sözcüğündeki (KT D 6) *armak* "aldatmak" < *\*ar-* **210.** {-mAn}: - *tuman* "duman, sis" (IB 20) < *tu-* "kapanmak" (T 23) **211.** {-miş}. Geçmiş zaman eylem sıfatı türeten ek: - *igidmiş* "beslemiş" (BK K 6) < *igid-* "beslemek" - *kalmiş* "(hayatta) kalanlar" (KT G 9) < *\*kāl-* "kalmak" - *tägmiş* "erişme, varma" (T 18) < *täg-* "erişmek, varmak"; bk. **Eylem Adları**. **212.** {-(X)n}. Eylem sonucu adlar türeten ek: - *bulun* "tutsak, esi...
  - `Ata 2011, s. 51` (eslesen: _IDMıŞ_)
    > ...olurmış erinç buyrukı yeme biligsiz ermiş erinç yablak ermiş erinç begleri bodunı tüzsüz üçün tabgaç bodun tebligin kürlügin üçün armakçısın üçün inili eçili kikşürtükin üçün begli bodunlıg yoŋaşurtukın üçün türük bodun illedük ilin ıçgınu ıdmış kaganladuk kaganın yitürü ıdmış tabgaç bodunka beglik urı oglın kul boltı eşilik kız oglın kün boltı türük begler türük atın ıttı tabgaçgı begler tabgaç atın tutupan tabgaç kaganka körmiş elig yıl işig küçüg birmiş “Doğuda Kingan Dağları...


## TY1-K-10#5 - Tonyukuk Yazıtı, Kuzey 10. satir  (7 kelime)

- **transkripsiyon:** `BİLGE : TONYUKUK : aYNIG : OL : ÖZ : OL : aŊıLıR`
- **kelime karsiliklari:** BİLGE : TONYUKUK : ANYI : O : ÖZ[Ü] : O : YANILIR
- **kanit:**
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK_)
    > ...ı cephesi Bilge Kağan kitâbesini Yollug Tigin, yazdım. Bunca türbeyi, resimi, sanatı.........kağanın yeğeni Yollug Tigin ben bir ay dört gün oturup yazdım, resimledim ........... M U H A R R E M E R G İ N [s. 36] TONYUKUK ÂBİDESİ (Birinci Taş) Doğu cephesi Bilge Tonyukuk ben kendim Çin ilinde kılındım. Türk milleti Çine tâbi idi. | Türk milleti hanını bulmayıp Çinden ayrıldı, hanlandı. Hanını bırakıp Çine tekrar teslim oldu. Tanrı şöyle demiştir: Han verdim, | hanını bırakıp teslim oldun. Teslim olduğun için Tanrı öldürmüştür...
  - `Ata 2011, s. 117` (eslesen: _BİLGE TONYUKUK_)
    > ...örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme...
  - `Ata 2011, s. 110` (eslesen: _BİLGE TONYUKUK_)
    > ...urumunda bugün için bize yabancı gelen bir kullanımı daha vardır. Aşağıdaki örnek ifadeler dikkatle incelenecek olursa ol’un; ek eylemin geniş zaman çekiminde 3. [[s. 110]] tekil kişi eki işleyişinde olduğu görülecektir: ańıg yablak ol “kötü felakettir” IB 5 bilge tonyukuk ańıg ol “bilge tonyukuk aksi mizaçlıdır” T 3 yeme tarkınç ol “yine daralmıştır (huzursuzdur)” T 22 Tablo 6.3.’te görüldüğü gibi ol işaret zamirinin yönelme durumundaki çekimi aŋar, yön gösterme durumundaki çekimi ise aŋaru biçimindedir. [[s. 110]] Buradan yo...
  - `Tanyeri, s. 3` (eslesen: _BİLGE TONYUKUK_)
    > ...nleyip ordular göndererek başlıya baş eğdirmiş, dizliye diz çöktürmüştür. Kapgan Kağan'dan sonra yaşanan kısa bir geçiş döneminden sonra; Bilge Kağan ve Kül Tigin'in devleti birlikte yönettikleri, 716 - 734 yıllarını kapsayan parlak bir dönem başlamıştır. Bilge Tonyukuk'un vezir olduğu bu dönemde, Çin üzerinde mutlak egemenlik sağlanmış ve Çin'deki bütün Türkler getirilerek Türk birliği sağlamlaştırılmıştır. Orhun Yazıtları, İkinci Göktürk Devleti'nin bu döneminde dikilmiştir ve yazılı metinlerden takip edebildiğimiz Türk...
  - `Ogel C2, s. 383` (eslesen: _BİLGE TONYUKUK_)
    > ...ı, alttan kaynayan kaynaklardan alan, bir göl vardır. Bunun için de çok şey söylenmiştir. [[s. 382]] 3** Radlof, Proben, V, s. 530: Bk. TepeBöz bölümü, [s. 383] 30. BÖLÜM BÜYÜK TÜRK İLLERİNİN ULU IRMAKLARI “İrtiş ırmağının, geçit vermez yerleri geçti...” Bilge Tonyukuk yazıtı 1. GÖKTÜRK ÇAĞI IRMAKLARI Göktürk çağı, Türk düşünce ve bilgisinin, en aydın ve gerçekçi bir çafıdır.Coğraf ya bilgisi de, gerçek dünya görüşü temellerine oturmuştur. Türkçe *“*Öğgüz”'”' sözü, artık yalnızca büyük ülkeler ile büyük kavimlerin ırmakla...
  - `Kafesoglu, s. 75` (eslesen: _BİLGE TONYUKUK_)
    > ...rden kalma bir millî tarih kaynağı olarak değil, aynı zamanda, Türk dili ve edebiyatının uzun ve kolayca okunabilen ilk âbidesi olarak da kültür tarihinde mühim yer tutan bu kitabe426 metninin bizzat Tonyukuk tarafından kaleme alınmış olması ihtimali, Aygucı, bilge Tonyukuk'a Türk edebiyatının adı ve şahsiyeti bilinen ilk siması olmak şerefini kazandırmaktadır427. 731 yılında da prens Kül Tegin öldü (27 Şubat 731)428. 47 yaşında idi. [[s. 75]] 7 yaşından beri ömrünü Türk milletinin yücelmesine hasreden, cesareti, savaşçılığı hem...


## TY1-K-11#1 - Tonyukuk Yazıtı, Kuzey 11. satir  (9 kelime)

- **transkripsiyon:** `SÜ : YORILıM : TiDiÇİ : ONAMaŊ : OL : SaBıG : eŞiDiP : SÜ : YORıTDıM`
- **kelime karsiliklari:** SÜ : YÖR[ÜT]ELİM : DEDİYSE : ONAMAYIN : O : SÖZÜ : İŞİTİP : SÜ : YÖRÜTTÜM
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _OL SaBıG eŞiDiP SÜ_)
    > ...K 10) getirdiler: “Oturun!” diye, demiş. “Atlı [s. 47] 90 TUNYUKUK YAZITI “Yelme kargu edgüti urgıl. Basıtma!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalı...
  - `Tekin 1998, s. 44` (eslesen: _OL SaBıG eŞiDiP_)
    > ..., sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kal...
  - `Tekin 2003, s. 166` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ğını) tokluğu (doyacağını) düşünmezsin" (KT G 8) *türük bodun tokurkak sän āçsar to-sık ömäz sän bir todsar āç-sık ömäz sän* "(Ey) Türk halkı! Sen kendini hep tok sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *b...
  - `Ata 2011, s. 139` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sı...
  - `Ata 2011, s. 132` (eslesen: _OL SaBıG eŞiDiP_)
    > ...ok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eyle...


## TY1-K-11#2 - Tonyukuk Yazıtı, Kuzey 11. satir  (4 kelime)

- **transkripsiyon:** `aLTUN : YIŞıG : YOLSuZuN : aŞDıM`
- **kelime karsiliklari:** ALTIN : YIŞI : YOLSUZUN : AŞTIM
- **kanit:**
  - `Tekin 1998, s. 11` (eslesen: _aLTUN YIŞıG_)
    > ...devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya l...
  - `Tekin 2003, s. 117` (eslesen: _aLTUN YIŞıG_)
    > ...yacak" (T 32) *süçig sab+ın yimşak agı+n arıp...* "(Çinliler) tatlı sözlerle ve yumuşak hediyelerle kandırıp..." (KT G 5) *köz+ün körmädök kulkak+ın eşidmädök bodunumın...* "...göz ile görülmemiş, kulak ile işitilmemiş (kadar kalabalık) halkımı..." (BK K 11) *altun yışıg yolsız+ın aşdımız ärtiş ügüzüg käçigsiz+in käçdimiz* "Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın...
  - `Ogel C2, s. 385` (eslesen: _aLTUN YIŞıG_)
    > ...ş milletini (budunıg), uykuda (uda) bastık*? ..” [[s. 385]] -b) Tonyukuk yazıtında: ““İrtiş ırmağının (ögüzüğ), geçitsizini (keçi ksizin), (yani geçit vermeyen yerini), geçtik*...” Yani Tonyukuk yazıtınınbaşkabir yerinde: “*..Ben Bilge Tonyukuk, Altın ormanı (Altun yışıg) aşarak, geldik. İr ti ş ırmağını, geçerek (keçe) geldik*,.” [[s. 385]] -c) Uygur kağanlığının, ikinci kağanı Bayan-Çur yazıtı olan Şi ne Üsu yazıtında da, şöyle deniliyordu* “**.., Erti ş ırmağını (ögüzüz), Arkar-Ba şı yakınında (tuşı)), Er-Kamış*ın altında...
  - `Tekin 1998, s. 47` (eslesen: _YOLSuZuN_)
    > ...a!”, demiş. Bögü Kağan, bana böyle (haber) göndermiş. Apa Tarkan'a (ise) gizli mesaj göndermiş: “Bilge Tunyukuk, aksi mizaçlıdır, öfkelidir. (K 11) Orduyu sevk edelim, diyecektir. Kabul etmeyin!” [[s. 47]] Bu haberi duyunca orduyu sevk ettim. Altay dağiarını yolsuzun aştık, İrtiş ırmağını geçitsizin geçtik. Geceleri akın ettik. Bolçu'ya tan atarken vardık. İKİNCİ TAŞ (B 1) (Bu arada bir) haberci getirdiler. Sözleri şöyle: “Yarış ovasında yüz bin asker toplandı” diyor. Bu haberi duyunca beyler hep birlikte (B 2) “Dönelim...
  - `Ergin 1970, s. 38` (eslesen: _aLTUN_)
    > ...nderdim | Şantung şehrine, denize ulaştırdım. Yirmi üç şehir zaptetti. Uykusunu burda terk edip, yurtta yatıp kalırdı. Çin kağanı düşmanımız idi. On Ok kağanı düşmanımız idi. | Fazla olarak Kırgızın kuvvetli kağanı düşmanımız oldu. O üç kağan akıl akıla verip Altun ormanı üstünde buluşalım demiş. [[s. 38]] Şöyle akıl akıla vermişler: Doğuda Türk kağanına karşı ordu sevk edelim. Ona karşı ordu sevk etmezsek, ne zaman bir şey olsa o bizi | -kağanı kahraman imiş, müşaviri bilici imiş- ne zaman bir şey olsa öldürecektir. He...
  - `Tekin 2003, s. 24` (eslesen: _aLTUN_)
    > ...i ünsüzle sona eren heceleri göstermekte olması gerçeğinden kaynaklanır: - /T/ *at* “at” (KT D 33) - /K/ *ak* “ak, kır” (KT D 36) - /b/ *äb* “ev, çadır” (BK D 32) - /r/ *är* “adam” (KT D 12) - /DK/ *ad-ak*, yani *adak* “ayak” (KT K 7) - /LTUN/ *al-tun*, yani *altun* “altın” (BK G 11) - /RTUK/ *ar-tuk*, yani *artuk* “çok, pek çok” (KÇ D 13) - /dgÜ/ *äd-gü*, yani *ädgü* “iyi” (BK G 12) - /rn/ *är-än*, yani *ärän* “adamlar” (KT K 9, BK G 11) [s. 25] # s. 025 — ORHON TÜRKÇESİ GRAMERİ /mgk/ *äm-g-äk*, yani *ämgäk* “acı, ıs...


## TY1-K-11#3 - Tonyukuk Yazıtı, Kuzey 11. satir  (4 kelime)

- **transkripsiyon:** `iRTiŞ : ÖGüZüG : KeÇiGSiZiN : KeÇDiMiZ`
- **kelime karsiliklari:** İRTİŞ : ÖGÜZÜ : GEÇİTSİZİN : GEÇTİK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _KeÇiGSiZiN KeÇDiMiZ_)
    > ...“Yelme kargu edgüti urgıl. Basıtma!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışı...
  - `Tekin 1998, s. 11` (eslesen: _KeÇiGSiZiN_)
    > ...mış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya...
  - `Tekin 1998, s. 43` (eslesen: _ÖGüZüG_)
    > ...rakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu...
  - `Tekin 2003, s. 120` (eslesen: _ÖGüZüG_)
    > ...n sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärkli...
  - `Ata 2011, s. 123` (eslesen: _ÖGüZüG_)
    > .... ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındak...
  - `Ata 2011, s. 116` (eslesen: _ÖGüZüG_)
    > ...ile yapılır. ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. [[s. 116]] bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındaki ünlü düşer. [[...


## TY1-K-11#4 - Tonyukuk Yazıtı, Kuzey 11. satir  (6 kelime)

- **transkripsiyon:** `TÜN : KaTDıMıZ : BOLÇUKA : TAŊ : ÖNTÜRÜ : TEGDİMİZ`
- **kelime karsiliklari:** GECE : GİTTİK : BOLÇUYA : TAN : ÖNCESİ : DEĞDİK
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _BOLÇUKA TAŊ_)
    > ...!”, temiş. Böğ<ü> Kağan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 256` (eslesen: _TEGDİMİZ_)
    > ...mm am am az m az az mz m m 2S8 kudrukı kudruk: narak "35 S3 kat kadrak" denir ki "yan, yamaç" demektir. Bütün hayvanların kuyruğunu anlatan at kudrukı" denir. Şu parçada dahi gelmiştir : GİLLİ 2İ Kudruk katığ tügdümiz Tenğriğ öküş ögdümiz Kemşip atığ tegdimiz Aldap yana kaçtımız "Kuyruğu sıkı düğdük, Tanrıyı çok öğdük, gemi çekerek atı özengiledik, aldatarak yine kaçtık". (Atların kuyruğunu sıkı sıkı bağladık. [[y. 256]] Tanrıya çok hamd ettik, gâvurlarla savaş yaparken tekbir getirdik, Atları özengileyerek üzerl...


## TY2-B-1#1 - Tonyukuk Yazıtı, Batı 1. satir  (10 kelime)

- **transkripsiyon:** `TıLıG : KeLÜRTİ : SaBI : aNTaG : YaRıŞ : YaZıDA : ON : TÜMeN : SÜ : TiRiLTİ`
- **kelime karsiliklari:** TILI : GELDİ : SÖZÜ : ANTAG : YARIŞ : YAZINDA : ON : TÜMEN : SÜ : DİRİLDİ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _TıLıG KeLÜRTİ SaBI aNTaG_)
    > ...a Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay,...
  - `Tekin 1998, s. 44` (eslesen: _SaBI aNTaG_)
    > ...danı ben idim. [s. 44] 84 TUNYUKUK YAZITI Çuğay kuzın, Kara Kumuğ olurur ertimiz. (G 1) Keyik yiyü, tabışgan yeyü olurur ertimiz. Bodun boğuzı tok erti. Yağımız teğre oçuk teğ erti; biz aş <t>eğ ertimiz. Ança olurur erkli Oğuzduntan küreğ kelti. (G 2) Küreğ sabı antağ: “Tokuz Oğuz bodun üze kağan olurtı” tir. “Tabgaçgaru Kunı Sengünüğ ıdmış; Kıtaniygaru Tonğra Eşimiğ ıdmış. Sab ança ıdmış: “Azkınya Türk (bodun?) (G 3) yorıyur ermiş. Kağanı alp ermiş, ayguçısı bilge ermiş. [[s. 44]] Ol eki kişi bar erser, sini, Tabgaçığ ölü...
  - `Tekin 2003, s. 152` (eslesen: _SaBI aNTaG_)
    > ...bi yaratılmamış şüphesiz" (KT D 4-5) *bakırı buŋsız ärti kara saçın täg* "Onun bakırı sayısız idi, kara saçları gibi" (Açura 8) Bu sontakı ile türetilmiş *antag* / *antäg* "onun gibi, öyle" zarfı da daha eski bir *\*anı täg* söz öbeğinden gelişmiştir: *küräg sabi antag* "Kaçağın sözleri şöyle (idi)" (T 9) *türgiş kaganta küräg kälti, sabi antäg* "Türgiş hakanından bir kaçak geldi; (kaçağın) sözleri şöyle (idi)" (T 29) *tılıg kälürti, sabi antag* "(Düşman saflarından bir) haberci getirdiler, sözleri şöyle" (T 36) *antagıŋın...
  - `Tekin 1998, s. 46` (eslesen: _YaRıŞ YaZıDA_)
    > ...: (K 8) “Bu süğ elet,” tidi, “kıyınığ könğlüngçe ay. Ben sanğa ne ayayın?” tidi, “Kelir erser körü kelür; kelmez erser tılığ sabığ alı olur” tidi. Altun yışda olurtumız. (K 9) Üç küreğ kişi kelti. Sabı bir: “Kağanı sü taşıkdı. On-Ok süsi kalısız taşıkdı tir. Yarış yazıda tirilelim!” temiş. [[s. 46]] Ol sabığ eşidip kağangaru ol sabığ ıttım. Kanta yan sabığ yana (K 10) kel<ür>ti: “Olurung!” tiyin, temiş. ORHON YAZITLARI 89 (Askerleri) at üzerine bindirip karları söktüm. Yukarıya doğru, atları yedeğe alarak, yaya vaziyette ağ...
  - `Olmez 2017, s. 58` (eslesen: _YaRıŞ YaZıDA_)
    > ...Kişi: -(A)lIm** *usar idi yok kışalım* "Mümkünse tamamen yok edelim" (T 11); *altun yış üze kavışalım* "Altay dağlarında birleşelim" (T 20); *teŋri bilge kaganta adrılmalım azmalım* "Efendimiz Bilge Kağandan ayrılmayalım, yoldan çıkmayalım" (O G 3); *yarış yazıda tėrilelim tėmiş* "Yarış Yazı'da toplanalım" (T 33) **Çokluk 2. kişi: -(X)ŋ, -(X)ŋlAr** *siz taşıkıŋ* "Siz isyan çıkarın" (MÇ D 10); *türük begler bodun bonı eşidiŋ* "Türk Beyleri, halkı bunu dinleyin" (KT G 10) ### Zarffiil ekleri: **-A, -I, -U ünlüleri...
  - `Ata 2011, s. 114` (eslesen: _ON TÜMeN_)
    > ...ar 1. Asıl Sayılar a. sekiz on ‘80’ Küli Çor 3, tokuz on ‘90’ Irk Bitig 29, biş yüz ‘500’ BK G11, yeti yüz ‘700’ T 4, eki bıŋ ‘2000’ T 16, yeti biŋ ‘7000’ BK G1, bir tümen ‘10000’ KT K1, üç tümen ‘30000’ BK G8, sekiz tümen ‘80000’ BK D26, on tümen ‘100000’ T 36 b. BK G1’de ayrıca şöyle bir kullanım da vardır: bir tümen artukı yeti biŋ ‘17000’ c. bir yegirmi ‘11’ Mayan Çor G8, eki yegirmi ‘12’ KT D28, üç yegirmi ‘13’ KT D28, tört yegirmi ‘14’ BK D15, biş yigirmi ‘15’ MÇ D6, altı yegir...


## TY2-B-1#2 - Tonyukuk Yazıtı, Batı 1. satir  (6 kelime)

- **transkripsiyon:** `TİR : OL : SABIG : EŞİDİP : BEGLER : KOPUN`
- **kelime karsiliklari:** DER : O : SÖZÜ : İŞİTİP : BEĞLERİN : HEP[S]İ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _OL SABIG EŞİDİP BEGLER_)
    > ...lım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke kork...
  - `Tekin 1998, s. 44` (eslesen: _OL SABIG EŞİDİP_)
    > ..., sini, Tabgaçığ ölürteçi tir men; öngre Kıtariyığ ölürteçi tir men; bini, Oğuzuğ (G 4) ölürteçik, tir men. Tabgaç birdin yen teğ, Kıtariy öngdün yen teğ, ben yırdınta yan teğeyin. Türk Sir bodun, yerinte, idi yorımazun. Usar, idi yok kışalım (G 5) tir men.” Ol sabığ eşidip tün udısıkım kelmedi, küntüz olursıkım kelmedi. Anta ötrü kağanıma ötüntüm. Ança ötüntüm: “Tabgaç, Oğuz, Kıtariy, buçeğü kabışsar (G 6) kaltaçı biz. Öz içi taşın tutmış teğ biz. [[s. 44]] Yuyka erkli topulgalı uçuz ermiş, yinçge erkliğ üzgeli uçuz; yuyka, kal...
  - `Tekin 2003, s. 166` (eslesen: _OL SABIG EŞİDİP_)
    > ...ğını) tokluğu (doyacağını) düşünmezsin" (KT G 8) *türük bodun tokurkak sän āçsar to-sık ömäz sän bir todsar āç-sık ömäz sän* "(Ey) Türk halkı! Sen kendini hep tok sayarsın, acıkırsan doyacağını düşünmezsin; bir (de) doyarsan acıkacağını düşünmezsin" (BK K 6) *ol sabıg eşidip tün udı-sık+ım kälmädi küntüz olor-sık+ım kälmädi* "O haberi işitince, gece uyuyasım gelmedi, gündüz oturasım (dinlenesim) gelmedi" (T 12) *türük bodun tirip il tut-sık+ıŋın bunta urtum yaŋılıp öl-sik+iŋin yämä* [s. 167] # s. 167 — ORHON TÜRKÇESİ GRAMERİ *b...
  - `Ata 2011, s. 139` (eslesen: _OL SABIG EŞİDİP_)
    > ...ta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. -gU sı...
  - `Ata 2011, s. 132` (eslesen: _OL SABIG EŞİDİP_)
    > ...ok ölecek (kişi) orada hayatta kaldı” BK D31 öl-teçi+çe sakınıgma türük begler bodun “ölecekmiş gibi kaygılanan Türk beyleri ve halkı” BK D2 8. [[s. 132]] -sIk gelecek zaman sıfat-fiil ekidir: açsar to-sık ömez sen “aç kaldığında doyacağını düşünmezsin” BK K6 ol sabıg eşidip tün udı-sık+ım kel-medi küntüz olur-sık+ım kelmedi “o sözü işitip gece uyuyacağım gelmedi, gündüz oturacağım (dinlenesim) gelmedi” T 12 il tut-sık+ıŋ+ın bunta urtum “(senin) devlet sahibi olacağını buraya kazıdım” KT G10 9. [[s. 132]] -gU sıfat-fiil eki, eyle...


## TY2-B-2#1 - Tonyukuk Yazıtı, Batı 2. satir  (3 kelime)

- **transkripsiyon:** `YaNaLıM : aRIG : UBuTI`
- **kelime karsiliklari:** YANALIM : ARI : UBUTLU [OLMAK]
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _YaNaLıM aRIG UBuTI_)
    > ...dip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Te...
  - `Tekin 2003, s. 105` (eslesen: _YaNaLıM_)
    > ...r. Bir adın yalın durumu şu görevlerde bulunur: 1. Bir cümleciğin ya da cümlenin öznesi olur: - *ol at anta ölti* "O at orada öldü" (KT D 33) - *katun yok bolmiş ärti* "Hatun yok olmuş idi" (T 31) - *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) - *bäglär kopın yanalım tedi* "Beyler hep birlikte "Dönelim" dediler" (T 36-37) - *ol törödä üzä eçim kagan olortı* "O töre gereğince amcam kağan olarak tahta oturdu" (KT D 16, BK D 14) - *toruk būkalı sämiz būkalı ırakda bilsär...* "(İnsan) zayıf ve semiz boğaları uzaktan bilmek is...
  - `Ata 2011, s. 120` (eslesen: _YaNaLıM_)
    > ...sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T 36 SONTAKI İsim, isim soylu sözler ve sıfat-fiilerden sonra gelerek bağlı olduğu bu türden sözler ile cümlenin öteki öğeleri arasında zaman, mekân, yön, tarz, benzerlik, başkalık vb. gibi bakımlardan...
  - `Ata 2011, s. 113` (eslesen: _YaNaLıM_)
    > ...imse kalmamasıya sefere çıkmış” T 30 altun kümüş kergeksiz kelürti “altın (ve) gümüş, gereğinden çok getirdi” BK G11 tört buluŋdakı bodunug nençe itmiş nençe yaratmış “dört taraftaki [[s. 113]] halkı ne çok düzenlemiş, ne çok örgütlemişler” BK K9 begler kopın yanalım tedi “beyler hep birlikte dönelim, dediler” T SONTAKI İsim, isim soylu sözler ve sıfat-fiilerden sonra gelerek bağlı olduğu bu türden sözler ile cümlenin öteki öğeleri arasında zaman, mekân, yön, tarz, benzerlik, başkalık vb. gibi bakımlardan çeşitli ilgiler...


## TY2-B-2#2 - Tonyukuk Yazıtı, Batı 2. satir  (13 kelime)

- **transkripsiyon:** `YiG : TiDİ : BeN : aNÇA : TiR : MeN : BeN : BİLGE : TONYUKUK : aLTUN : YIŞıG : aŞA : KeLTiMiZ`
- **kelime karsiliklari:** YEĞ : DEDİ[LER] : BEN : ANCA : DER[İM] : BEN : BEN : BİLGE : TONYUKUK : ALTIN : YIŞI : AŞIP : GELDİK
- **kanit:**
  - `Ergin 1970, s. 40` (eslesen: _BeN BİLGE TONYUKUK aLTUN_)
    > ...eçtik. Geceyi gündüze kattık. [[s. 40]] Bolçuya şafak sökerken ulaştık. (İkinci Taş) Batı cephesi Haberci getirdiler. Sözü şöyle: Yarış ovasında yüz bin asker toplandı der. O sözü işitip beyler bütün | dönelim, temiz edepli olmak iyidir dedi. Ben şöyle derim, ben Bilge Tonyukuk: Altun ormanını aşarak [s. 41] geldik. İrtiş nehrini | geçerek geldik. Geleni cesur dedi, duymadı. Tanrı, Umay ilâhe, mukaddes yer, su, üzerine çökü verdi her halde. Niye kaçıyoruz? | Çok diye niye korkuyoruz? Az diye ne kendimizi hor görelim? Hücum edelim dedim. H...
  - `Tekin 1998, s. 47` (eslesen: _aLTUN YIŞıG aŞA KeLTiMiZ_)
    > ...n keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süü...
  - `Tanyeri, s. 19` (eslesen: _MeN BeN BİLGE TONYUKUK_)
    > ...(uçup gitmiş, vefat etmiş), “yokadu barır ermiş” (yok olup gidermiş) İSİM CÜMLESİ Göktürkçede isim cümlesi iki şekilde kurulur. Birincisinde cümlenin sonuna doğrudan isim soylu bir sözcük getirilir: “Bilge Tonyukuk men.” (Ben Bilge Tonyukuk'um.) İkincisinde “er-” fiili kullanılır: “Tabgaç kagan yagımız erti.” (Çin milleti düşmanımız idi.) Sayfa: 18 [s. 20] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com...


## TY2-B-2#3 - Tonyukuk Yazıtı, Batı 2. satir  (2 kelime)

- **transkripsiyon:** `iRTiŞ : ÖGüZüG`
- **kelime karsiliklari:** İRTİŞ : ÖGÜZÜ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _ÖGüZüG_)
    > ...rakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre, Tengri biliğ bertük üçün, özüm ök kağan kışdım. [[s. 43]] Bilge Turiyukuk Buyla Bağa Tarkan (B 7) birle İlteriş kağan boluyın birye Tabgaçığ, öngre Kıtanyığ, yırya Oğuzuğ üküş ök ölürti. Bilgesi çabışı ben ök ertim. TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tunyukuk, ben kendim, Çin yönetimi sırasında doğdum. Türk halkı (o zaman) Çin'e bağımlı idi. (B 2) Türk halkı, (kendi) hanını bulmayınca, Çin'den ayrıldı; han sahibi oldu...
  - `Tekin 2003, s. 120` (eslesen: _ÖGüZüG_)
    > ...n sımadı* "Benim sözümü kırmadı" (KT G 11) *t[okuz ogu]z mäniŋ bodunum ärti* "Dokuz Oğuzlar benim halkım idi" (BK D 29) *biziŋ sü ati toruk azukı yōk ärti* "Bizim askerlerimizin atları zayıftı, yiyecekleri de yok idi" (KT D 39) 3. Belirli nesne durumu: *bini oguzug ölürtäçik tir män* "Beni, Oğuzu, öldürecektir şüphesiz, derim" (T 10-11) *sini tabgaçıg ölürtäçi tir män* "Seni, Çinlileri, öldürecektir, derim" (T 10) *kaça(n) näŋ ärsär ol bizni... ölürtäçi-k ök* "Er veya geç, o bizi mutlak öldürecektir" (T 21) *bizni ärkli...
  - `Ata 2011, s. 123` (eslesen: _ÖGüZüG_)
    > .... ok/ök edatı ile bir zamir, bir zarf ya da bir eylem pekiştirilir. bilgesi çabışı ben ök ertim “onun danışmanı ve kumandanı bizzat ben idim” T 7 özüm ök kagan kışdım “(onu) ben kendim kağan yaptım” T 6 birye tabgaçıg öŋre kıtańıg yırya oguzug üküş ök ölürti “güneyde Çinlileri, doğuda Kıtayları, kuzeyde Oğuzları pek çok öldürdü” T 7 otuz yaşımda esizim e, kittim ök “otuz yaşımda, ne yazık, gittim (işte)!” Çaa-Höl III 1-2 Ünlü ile biten bir sözcüğe ulandığında ok/ök edatının başındak...
  - `Tekin 1998, s. 11` (eslesen: _iRTiŞ_)
    > ...süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp püskürttü? Mızraklı (düşmanlar) nereden gelip (sizi) sürüp götürdü?”, i Altun yışığ yolsızın aşdı<mız>, Ertiş üğüzüğ keçiğsizin ORHON YAZITLARI 19 keçdimiz “Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik”, (Türük bodun) beğlik urı oğlun kul kıltı, eşilik kız oğlın küng [[s. 11]] kıltı “(Türk halkı) bey olmaya layık erkek evladını köle yaptı, hanım olmaya layık kız evladını cariye yaptı” vb. vb. gibi. 5.3. Deyimler Orhon yazı...
  - `Ergin 1970, s. 19` (eslesen: _iRTiŞ_)
    > ...| binip atılarak hücum etti. Bir eri ok ile vurdu, iki eri kovalayıp takip ederek mızrakladı. [[s. 19]] O hücum ettiğinde, Bayırkunun ak aygırını, uyluğunu kırarak, vurdular. Kırgız kağanını öldürdük, ilini aldık. O yılda Türgişe doğru Altın ormanını aşarak, İrtiş nehrini geçerek yürüdük. Türgiş kavmini uykuda bastık. Türgiş kağanının ordusu Bolçuda ateş gibi, fırtına gibi geldi. Savaştık. Kül Tigin alnı beyaz boz ata binip hücum etti. Alnı beyaz boz...... | ... tutturdu. İkisini kendisi yakalattı. Ondan sonra tekrar g...
  - `Tekin 2003, s. 117` (eslesen: _iRTiŞ_)
    > ...dırıp..." (KT G 5) *köz+ün körmädök kulkak+ın eşidmädök bodunumın...* "...göz ile görülmemiş, kulak ile işitilmemiş (kadar kalabalık) halkımı..." (BK K 11) *altun yışıg yolsız+ın aşdımız ärtiş ügüzüg käçigsiz+in käçdimiz* "Altay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş...


## TY2-B-3#1 - Tonyukuk Yazıtı, Batı 3. satir  (5 kelime)

- **transkripsiyon:** `KeÇE : KeLTiMiZ : KeLMiŞİ : aLP : TİDİ`
- **kelime karsiliklari:** GEÇİP : GELDİK : GELMİŞ[LER]İ : ALP : DEDİ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _KeÇE KeLTiMiZ KeLMiŞİ aLP TİDİ_)
    > ...ü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s....
  - `Tekin 1998, s. 24` (eslesen: _KeLTiMiZ_)
    > ...yerek ............ (D 20) Bars bey idi. Hakan ünvanını burada (ona) biz verdik. [s. 24] 44 KÜLTİGİN YAZITI Singilim kunçuyuğ birtimiz. Özi yafnıgıltı. Kağanı ölti, bodunı küng kul boltı. Köğmen yir sub idisiz kalmazun tiyin Az Kırkız bodunuğ <itip> yaratlıp keltimiz sünğgüşdümiz ............. (b 21) yana birtimiz. İlgerü Kadırkan yışığ aşa bodunuğ ança konturtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]]...


## TY2-B-3#2 - Tonyukuk Yazıtı, Batı 3. satir  (8 kelime)

- **transkripsiyon:** `TUYMaDI : TeŊRİ : UMaY : IDUK : YiR : SUB : BaSA : BiRTİ`
- **kelime karsiliklari:** DUYMADI : TANRI : UMAY : KUTLU : YER : SU : BASA : VERDİ
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _TeŊRİ UMaY IDUK_)
    > .... Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün,...
  - `Tekin 2003, s. 161` (eslesen: _UMaY IDUK_)
    > ...eriş kaganıg ögüm ilbilgä katunug täŋri töpösintä tutup yüg(g)ärü kötürti ärinç* "(Yukarıdaki Türk Tanrısı ve Türk kutsal Yer-Su ruhları) babam İlteriş Hakanı ve annem İlbilge Hatunu gökyüzünün tepesinde tutup yukarı kaldırdılar şüphesiz ki" (BK D 9-1) *täŋri umay ıduk yer sub basa berti ärinç* "Tanrı Umay, kutsal Yer ve Su (ruhları bize) yardımcı oluverdiler muhakkak ki" (T 38) 3. {-DOk} ekli geçmiş zamanla: *anta kisrä inisi eçisin täg kılınmadok ärinç oglı kaŋin täg kılınmadok ärinç* "Ondan sonra erkek kardeşleri ağabey...
  - `Tekin 1998, s. 22` (eslesen: _IDUK YiR_)
    > ...birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip b...
  - `Tekin 2003, s. 42` (eslesen: _IDUK YiR_)
    > ...n ara* (KT D 1) : bIzŋsÜ : *biz(i)ŋ sü* (KT D 39) : YUKrtI : *yok ärti* : (KT D 39) 3. Birleşikler ve söz öbekleri genellikle birlikte yazılır: : yItIyIgrmIrn : *yiti yig(i)rmi är(i)n* (KT D 11) : ytIyÜzr : *yeti yüz är* (KT D 13) : tÜrÜkIDUKyIrISUBI: *türük ıduk yiri subı* (KT D 10-11), vb. 4. Bazı Yenisey yazıtlarında bir sözcüğün noktalama işareti ile ikiye bölündüğü de olur: : KUnç : YmA : *kunç(u)y(u)ma* (Elegest I 1) : Üçye : tmş : *üç yetm(i)ş* (Uyuk-Turan 4), vb. [s. 43] # s. 43 — TALAT TEKİN # SES BİLGİSİ ##...
  - `Ata 2011, s. 52` (eslesen: _IDUK YiR_)
    > ...Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi eri...
  - `Tekin 1998, s. 10` (eslesen: _YiR SUB_)
    > ...lesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az değildir: adrıl- az- “ayrılmak ve sapmak”, ORHON YAZITLARI 17 alkın- arıl- “tükenmek ve mahvolmak, b...


## TY2-B-3#3 - Tonyukuk Yazıtı, Batı 3. satir  (4 kelime)

- **transkripsiyon:** `eRiNÇ : NeKE : TeZeR : BİZ`
- **kelime karsiliklari:** GERÇEK : NEKİ : TEZER[İZ] : BİZ?
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _eRiNÇ NeKE TeZeR BİZ_)
    > ...sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümi...
  - `Olmez 2017, s. 55` (eslesen: _NeKE TeZeR BİZ_)
    > ...an* "ne zaman", *kanı* "hani, nerede", *kança* "nereye", *kanta* "nerede", *kantan* "nereden", *kem* "kim", *ne* "ne; niçin", *neçök* "nasıl", *neke* "niye, niçin". ### Fiil Çekimi #### Zaman Ekleri **Geniş zaman *-Ar/-Ir/-Ur* ve *-r* ekleriyle kurulur:** *neke tezer biz* "ne diye kaçacağız?" (T 38) *konar köçer ben* "konar göçerim" (Tar B 4) *kelir erser körü kelür kelmez erser tılıg savıg alı olor tėdi* "Gelirlerse görünerek gelirler, gelmezlerse casuslardan haber alıp bekleyin dedi." (T 32); *yagı kelir tėdi* "düşman...
  - `Tekin 1998, s. 10` (eslesen: _eRiNÇ_)
    > ...cümleler anlatıma etkinlik ve güzellik katar: Üze kök tehgri, asra yağız yer (kılıntukda) “Yukarıda mavi gök, aşağıda yağız yer (yaratıldığında)”, Bilge kağan ermiş, alp kağan ermiş “ Akıllı hakanlar imiş, cesur hakanlar imiş”, | (Buyrukı yeme) bilge ermiş erinç, alp ermiş erinç (Kumandanları da) akıllı imişler şüphesiz, cesur imişler şüphesiz”, (Anta kisre) inisi kağan bolmış erinç, oğlıtı kağan bolmış [[s. 10]] erinç “(Ondan sonra) kardeşleri hakan olmuşlar şüphesiz, oğulları hakan olmuşlar şüphesiz”, (Anta kisre...
  - `Tekin 2003, s. 160` (eslesen: _eRiNÇ_)
    > ...ım töküti kara tärim yügürti işig küçüg bertim ök* "Kızıl kanımı akıtarak, kara terimi döktürerek (ona) hizmet ettim" (T 52) *uzun yälmäg yämä ı(t)tım ok, arkuy kargug olgurtdum ok* "Uzak mesafelere keşif devriyeleri gönderdim, gözetleme kulelerini de (yerli yerince) yerleştirdim" (T 52-53) *otuz yaşımda, äsizim ä, kit(t)im ök* "Otuz yaşımda, ne yazık, gittim (işte)!" (Çaa-Höl III 1-2) Pekiştirme edatı *ok/ök* ünlü ile biten bir sözcüğe eklendiğinde ünlüsünü yitirir: *bini oguzug ölürtäçi-k tir män* "Beni, Oğuz'u mutla...
  - `Ata 2011, s. 51` (eslesen: _eRiNÇ_)
    > ...KT D2-8’de ve BK D5-8’de Bilge Kağanın ağzından şöyle dile getirilir: ilgerü kadırkan yışka tegi kirü temir kapıgka tegi konturmış ekin ara idi oksuz kök türük iti ança olurur ermiş bilge kagan ermiş alp kagan ermiş buyrukı yeme bilge ermiş erinç alp ermiş erinç begleri yeme bodunı yeme tüz ermiş anı üçün ilig ança tutmış erinç ilig tutup törüg itmiş özi ança kergek bolmış … anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç anta kisre inisi eçisin teg kılınmaduk erinç o...
  - `Olmez 2017, s. 20` (eslesen: _eRiNÇ_)
    > ...nuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yü...


## TY2-B-4#1 - Tonyukuk Yazıtı, Batı 4. satir  (4 kelime)

- **transkripsiyon:** `ÖKÜŞ : TiYiN : NeKE : KORKUR`
- **kelime karsiliklari:** [DÜŞMAN] ÖKÜŞ : DİYE : NEKİ : KORKAR[IZ]
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _NeKE KORKUR_)
    > ...ip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız....
  - `Tekin 2003, s. 34` (eslesen: _KORKUR_)
    > ...ir: - /KUUntR/ *kontur-* (genellikle) - /KUUTI/ *ko(t)tı* (BK G 12) - /KUBRT/ *kubrat-* (KT G 10, vb.) - /KUUL/ *kul* (genellikle) - /KUUTM/ *kut(u)m* (KT D 29, vb.) - /KUULKKN/ *kulkak(ı)n* "kulak ile" (BK K 11) - /BYRKUU/ *bay(ı)rku* (KT D 34) - /KUURKUUR/ *korkur* (T 39), vb. ## /Ük, kÜ/ Hece İşareti **28.** /Ük, kÜ/ hece işaretinin seslik değerleri şunlardır: 1. /ök, ük/ ve /kö, kü/ ses öbekleri, 2. /kö/ ve /kü/ ses öbekleri, 3. ön /k/ ünsüzü. 1. /ök/ ve /ük/ ses öbekleri: a) /Ükn/ *ök(ü)n* (BK D 19), /ÜKnp/ *ök(ü...
  - `Tekin 1998, s. 22` (eslesen: _TiYiN_)
    > ...(D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]] Bunça işiğ küçüğ birtükgerü sakınmatı “Türük bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YA...
  - `Tekin 2003, s. 12` (eslesen: _TiYiN_)
    > ...212 Bağlaçlı Birleşik Cümleler ......................................................................... 213 Yan Cümleli Birleşik Cümleler ........................................................................ 214 Aktarma Söz ve *tip*, *teyin* / *tiyin* ............................................................ 214 Yan Cümle Bağlacı olarak *üçün* ................................................................ 215 Ara Cümle ...............................................................................
  - `Ata 2011, s. 52` (eslesen: _TiYiN_)
    > ...değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tag...
  - `Ata 2011, s. 45` (eslesen: _TiYiN_)
    > ...Yazıtlarda II. [[s. 45]] Köktürk Kağanlığı’nın Kuruluşu İlteriş’in değişik boylardan oluşan milletini nasıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük...


## TY2-B-4#2 - Tonyukuk Yazıtı, Batı 4. satir  (7 kelime)

- **transkripsiyon:** `BİZ : aZ : TiYiN : NE : BaSıNaLıM : TeGeLiM : TİDiM`
- **kelime karsiliklari:** BİZ? : AZ[IZ] : DİYE : NE[DEN] : BASMAYALIM? : DEĞELİM : DEDİM
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _NE BaSıNaLıM TeGeLiM TİDiM_)
    > ...alım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe keltimiz. Kelmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) ant...
  - `Tekin 1998, s. 39` (eslesen: _BİZ aZ_)
    > ...a kıtlık oldu. [s. 39] T4 BİLGE KAĞAN YAZITI Yazıfığa (D 32) Oğuz tapa süledim. İlki sü taşlık)Jmış erti, ekin sü ebde erti. Üç Oğuz süsi basa kelti. “Yadağ yabız boltı” tip algalı kelti. Sınğar süsi ebiğ barkığ yulgalı bardı, sıfiğar süsi süngüşgeli kelti. Biz az ertimiz, yabız ertimiz. Oğuz |....... İt YAZİ saksı Tefgğri) küç birtük üçün anta sançdım, (D 33) yarıydım. Tengri yarlıkaduk üçün, men kazgantuk üçün Türük bodun lança) kazganlmış)| erinç. [[s. 39]] Men iniliğü bunça başlayu kazganmlasar), Türük bodun ölteç...
  - `Ergin 1970, s. 29` (eslesen: _BİZ aZ_)
    > ...ldu. İlk baharında | Oğuza doğru ordu sevk ettim. İlk ordu dışarı çıkmıştı, ikinci ordu merkezde idi. Üç Oğuz ordusu basıp geldi. Yaya, kötü oldu diyip yenmek için geldi. Bir kısım ordusu evi barkı yağma etmek için gitti, bir kısım ordusu savaşmak için geldi. Biz az idik, kötü durumda idik. Oğuz.......... düşman .......... [[s. 29]] Tanrı kuvvet verdiği için orda mızrakladım, | dağıttım. Tanrı bahşettiği için, ben kazandığım için Türk milleti kazanmıştır. Ben küçük kardeşimle beraber böyle başa geçip kazanmasam Türk mill...
  - `Tekin 2003, s. 119` (eslesen: _BİZ aZ_)
    > ...saldırayım" (T 11) *män tokuz yegirmi yıl şad olortum* "Ben on dokuz yıl Şad (olarak) hüküm sürdüm" (BK G 9) *ayıgması bän ärtim, bilgä tuńukuk* "Sözcüsü ben idim, Bilge Tunyukuk" (T 5) *bilgäsi çabışi bän ök ärtim* "Danışmanı ve kumandanı da ben idim" (T 7) *biz az ärtimiz, yabız ärtimiz* "Biz az idik (ve) kötü durumda idik" (BK D 32) *biz eki bıŋ ärtimiz* "Biz iki bin (kişi) idik" (T 16) *kagan at bunta biz birtimiz* "(Ona) hakan unvanını buruda biz verdik" (KT D 20) *biz az biz* "Biz azız" (O 7) b) Yüklem bağlayıcısı...
  - `Tekin 1998, s. 37` (eslesen: _aZ TiYiN_)
    > ...yılkısın barımın anta altım. Sekiz yeğirmi yaşıma altı çub (Soğdak| (D 25) tapa süledim. Bodunuğ anta buzdum. Tablgaç Olüğ Totok beş tümen sü kelti. Iduk Başda sünigüşdüm, ol süğ anta yok kışdım. Yeğirmi yaşıma, Basmıl Iduk Kut uğuşum bodun erti, “Arkış ıdmaz” tiyin süledim kl.............enun |t içgertim, kalınğ LI... ART AT Bek | ebirü kelürtüm. [[s. 37]] Eki otuz yaşıma Tabgaç (D 26) tapa süledim. Çaça Sengün sekiz tümen (sü) bilr)le sünğüşdüm, süsin anta ölürtüm. Altı otuz yaşıma Çik bodun, Kırkız birle yağı boltı....
  - `Tekin 2003, s. 118` (eslesen: _aZ TiYiN_)
    > ...ve hatırladıklarımla bunca yazıyı yazdım" (KÇ G 3) 5. Eylemin işlendiği zaman: *kış+ın kıtań tapa sülädim* "Kışın Hıtaya doğru sefer ettim" (BK G 2) *yaz+ın tatabı tapa sülädim* "İlkbaharda Tatabılara doğru sefer ettim" (BK G 2) *yalabaçi ädgü sabi ötügi kälmäz tiyin yay+ın sülädim* "Elçisi, iyi haberleri ve ricaları gelmiyor diye yazın sefer ettim" (BK D 39) *ol yıl küz+ün ilgärü yorıdım tatarıg ayıttım* "O yıl güzün doğuya doğru yürüdüm, Tatarları sordum" (MÇ D 8) ## Birliktelik Durumu **270.** Adların birliktelik (co...


## TY2-B-4#3 - Tonyukuk Yazıtı, Batı 4. satir  (5 kelime)

- **transkripsiyon:** `TeGDiMiZ : YaYIDıMıZ : iKİNTİ : ÖKÜŞ : KeLTİ`
- **kelime karsiliklari:** DEĞDİK : YAYDIK : İKİNCİ [GÜN] : ÇOKÇA : GELDİ[LER]
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _TeGDiMiZ_)
    > ...ğan, bangğaru ança yıdmış. Apa Tarkangaru içre sab ıdmış: “Bilge Turiyukuk anYığ ol, üz ol. (K 11) Sü yorılım, tedeçi. Unamang!” Ol sabığ eşidip sü yorıtdım. Altun yışığ yolsızın aşdım<ız>, Ertiş üğüzüğ keçiğsizin keçdimiz. Tün akıtdımız. Bolçuka tang üntürü teğdimiz. İKİNCİ TAŞ (B 1) Tılığ kelürti. Sabı antağ: “Yarış yazıda on tümen sü terilti” tir. [[s. 47]] Ol sabığ eşidip beğler kopın (B 2) “Yanalım; arığ ubutı yeğ!” tedi. “Ben ança ter men, ben Bilge Tunyukuk: Altun yışığ aşa keltimiz, Ertiş üğüzüğ (B 3) keçe kelti...
  - `Tekin 1998, s. 19` (eslesen: _iKİNTİ_)
    > ...(ve) kuzeyde gece ortasına kadar, bu (sınırlar) içindeki (bütün) halklar hep bana tabidir. Bunca halkı (G 3) hep düzene soktum. Onlar şimdi (hiç de) kötü (durumda) değiller. Türk(lerin) hakanı Ötüken dağlarında oturur (ve oradan hükmeder) ise ülkede (hiçbir) sıkıntı olmaz. [[s. 19]] Doğuda Şantung ovasına kadar ordu sevk ettim, denize az kala durdum; güneyde Dokuz Ersin'e kadar ordu sevk ettim, Tibet'e az kala durdum; batıda İnci (Sır Derya) ırmağı(nı) (G 4) geçerek Demir Kapı 'ya kadar ordu sevk ettim; kuzeyde Yir Bayı...
  - `Ergin 1970, s. 12` (eslesen: _iKİNTİ_)
    > ...adamakıllı dinle: Doğuda gün doğusuna, güneyde gün ortasına, batıda gün batısına, kuzeyde gece ortasına kadar, onun içindeki millet hep bana tâbidir. [[s. 12]] Bunca milleti | hep düzene soktum. O şimdi kötü değildir. Türk kağanı Ötüken ormanında otursa ilde sıkıntı yoktur. Doğuda Şantung ovasına kadar ordu sevk ettim, denize ulaşmama az kaldı. Güneyde Dokuz Ersine kadar ordu sevk ettim, Tibete ulaşmama az kaldı. Batıda İnci nehrini geçerek Demir Kapıya kadar ordu sevk ettim. Kuzeyde, Yir Bayırku yerine kadar ordusevk et...
  - `Tekin 2003, s. 56` (eslesen: _iKİNTİ_)
    > ...ŋsız* "pek çok, bol bol" (Açura 7) - /BUŋsz/ *buŋs(ı)z* "pek çok, bol bol" (T 48) - /YULszn/ *yols(ı)z(ı)n* "yolsuz olarak" (T 35) Ancak, bazı Yenisey yazıtları ile Irk Bitig'de bu ekin dudak uyumuna girdiğini gösteren örnekler vardır: - *buŋusuz* "dertsiz, sıkıntısız" (Barık II 3, Barık 6 III 2) - *otsuz* "otsuz" (IB 45) - *subsuz* "susuz" (IB 45), vb. **78.** Addan eylem türeten {+sIrA-} eki: - *ur(u)gs(ı)rat-* "dölsüz bırakmak" (KT D 10) vb.; krş. Uyg. *kutsıra-*, *küçsirä-*, *ögsirä-* vb. **79.** Gelecek zaman-ger...
  - `Ata 2011, s. 53` (eslesen: _iKİNTİ_)
    > ...kuk’un bu amacı şu şekilde yer almaktadır: ötüken yir olurup arkış tirkiş ısar neŋ buŋug yok ötüken yış olursar beŋgü il tuta olurtaçı sen (KT G8) Ötüken topraklarında oturup (buradan Çin’e ve diğer ülkelere) kervanlar gönderirsen hiç sıkıntı yok. Ötüken yaylasında oturursan sonsuza kadar devlet sahibi olup hükmedeceksin. (Talat Tekin, Orhon Yazıtları, Türk Dil Kurumu Yayınları, Ankara 1988, s. 4-5) Zeki ve plancı bir kişiliğe sahip olan Tonyukuk, askerî işlerdeki başarısı...
  - `Olmez 2017, s. 22` (eslesen: _iKİNTİ_)
    > ...ç bodun ..... altun kümüş eşgiti kotay buŋsuz ança bėrür, tavgaç bodun savı süçig agısı yėmşak ermiş, süçig savın yėmşak agın arıp ırak bodunug ança yagutir ermiş, yagru kontokda kėsre ańıg bilig anta öyür ermiş* "(Çinliler) altını, gümüşü, ipeği, ipeklileri sıkıntısız öylelikle verirler. Çin halkının sözleri tatlı, ipeklileri yumuşakmış. Tatlı sözle, yumuşak ipeklilerle kandırıp uzaktaki halkları bu şekilde (kendilerine) yaklaştırırlarmış. Yakına yerleştikten sonra da gereken kötülüğü orada düşünürlermiş." (KT G 4-5)....


## TY2-B-5#1 - Tonyukuk Yazıtı, Batı 5. satir  (3 kelime)

- **transkripsiyon:** `ÖRTÇE : KIZıP : KeLTİ`
- **kelime karsiliklari:** ÖRTÇE : KIZIP : GELDİ[LER]
- **kanit:**
  - `Tekin 1998, s. 13` (eslesen: _ÖRTÇE KIZıP KeLTİ_)
    > ...oçuk teğ erti, biz aş <t>eğ ertimiz [s. 13] 22 GİRİŞ “Düşmanlarımız etrafımızda ocak gibi idi, biz (de ortadaki) aş (kazanı) gibi idik”, Türgiş kağan süsi Bolçuda otça borça kelti “Türgiş hakanının ordusu Bolçu'dan ateş gibi, bora gibi (üzerimize) geldi”, Örtçe kızıp kelti “(Düşman) ateş gibi kızıp (üzerimize) geldi”, Kanıfğ subça yüğürti, süngüküfng tağça yatdı “Kanın su gibi aktı, kemiklerin dağ gibi yığıldı”, (Ança kazganıp) birki bodunuğ ot sub kılmadım “(Onca [[s. 13]] çalışıp) birleşik halkı ateş(le) su (gibi birbirine...
  - `Ata 2011, s. 115` (eslesen: _ÖRTÇE KIZıP KeLTİ_)
    > ...ıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır....
  - `Ata 2011, s. 108` (eslesen: _ÖRTÇE KIZıP KeLTİ_)
    > ...m” [[s. 108]] eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı üzerine gelerek “ikinci” anlamında sıra sayı adı yapmışlardır. eki+n sü ebde erti BK D32 “ikinci ordu yurtta idi” eki+nti kün örtçe kızıp kelti T 39 “ikinci gün ateş gibi kızıp (üzerimize) geldi” yadag süsin eki+nti kün kop ölürtüm BK G1 “yaya (piyade) askerini ikinci gün hep öldürdüm” c. [[s. 108]] +nç: Orhun Türkçesinde “birinci” ve “ikinci” dışındaki sıra sayıları bu ekle yapılmıştır. üçünç bolçud...


## TY2-B-5#2 - Tonyukuk Yazıtı, Batı 5. satir  (7 kelime)

- **transkripsiyon:** `SÜŊüŞDüMüZ : BİZiNTE : iKİ : UÇI : SIŊaRÇA : aRTUK : eRTİ`
- **kelime karsiliklari:** SÜNGÜŞDÜK : BİZDEN : İKİ : ÜÇ : SINGARCA : ARTI : İDİ[LER]
- **kanit:**
  - `Tekin 2003, s. 121` (eslesen: _UÇI SIŊaRÇA aRTUK_)
    > ...yaŋıltokin yazıntokin üçün kagani ölti* "Bize karşı hatalı hareket [s. 121] # s. 121 — ORHON TÜRKÇESİ GRAMERİ ettikleri için hakanları öldü" (BK D 16) *alp är biziŋä tägmiş ärti* "Cesur erler bize saldırmıştı" (KT D 0) 5. Bulunma-çıkma durumu: *bizintä eki uçı sıŋarça artuk ärti* "(Onların) iki kanadı bizden yarı yarıya fazla idi" (T 0) *ötükän eli sizdä* "Ötüken ülkesi sizin elinizde" (Tar. G 5) *sin sizdä* "(Atalarımızın) mezarları sizin elinizde" (Tar. G 5) 6. Yönelme durumu: *bög[ü] kagan baŋaru ança yıdmış* "Bögü Hakan ban...
  - `Tekin 1998, s. 47` (eslesen: _aRTUK eRTİ_)
    > ...elmişi “Alp! tidi, taymadı. Tenğri Umay, ıduk Yer Sub basa berti erinç. Neke tezer biz? (B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8)...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Ata 2011, s. 116` (eslesen: _BİZiNTE_)
    > ...31, saŋa T 32 biziŋe KT Çıkma maŋa KT D19, 40; BK Durumu D16 Yön D30, BK D36 bizinte T 40 Gösterme Durumu sizde Tar. G5 baŋaru T 3...
  - `Olmez 2017, s. 54` (eslesen: _BİZiNTE_)
    > ...-: | :---: | :---: | :---: | :---: | | *ben ~ men* | *beniŋ ~ meniŋ* | *bini* | *baŋa ~ maŋa* | | | | *baŋaru* | | *sen* | ø | *sini* | | | | | | | *ol* | | *anı* | | *anta* | *ança* | *anın* | *aŋar, aŋaru, ıngaru* | | *biz* | *biziŋ* | *bizni* | *biziŋe* | *bizinte* | | | | | *siz* | *siziŋ* | ø | | *sizde* | | | | *(T. Tekin, 2003; M. Erdal, 2004: 192)* Gerçekte yazıtlarda 3. kişi zamiri yer almaz. Bunun yerini işaret zamiri olan *ol* ve yalın biçimi yalnızca çekimli biçimi var olan *a(n)+* kullanılmıştır. Olması ger...


## TY2-B-5#3 - Tonyukuk Yazıtı, Batı 5. satir  (6 kelime)

- **transkripsiyon:** `TeŊRİ : YaRLıKaDUK : ÜÇüN : ÖKÜŞ : TiYiN : BİZ`
- **kelime karsiliklari:** TANRI : YARLIKADIĞI : İÇİN : ÇOKÇA : DİYE : BİZ
- **kanit:**
  - `Tekin 1998, s. 35` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN_)
    > ...Birye Tabgaç bodun yağı ermiş, yırya baz kağan, Tokuz Oğuz bodun yağı ermiş. Kılrkız, Kurıkan, Otuz Tatar, Kıtany, Tatabı kop yağı ermiş.Kanglım klağan bunça ......... bodunuğ lö |) kırlk artukı) (D 13) yiti yolı sülemiş, yeğirmi süüğüş sülüğüş|miş. [[s. 35]] Tengri yarlıkaduk üçün, illiğiğ ilsiretmiş, kağ anlığığ kağansıratmış, yağığ baz kılmış, tizliğiğ sökürmiş, başlığığ yüküntürmiş. Kafığım (kağan, iliğ törüğ kazganıp uça barmış). Kafiğım Ikağanka| başlayu baz kağanığ balbal tiklmiş. Kafğım) (D 14) kağan uçdukda özüm sekiz yaşda k...
  - `Radloff, s. 219` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN_)
    > ...ler daima "tanrının inayeti iİe (tengri yarıl kaduk üçün ... )" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmi...
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ YaRLıKaDUK ÜÇüN_)
    > ...er daima “ tanrının inayeti ile (tengri yarılkaduk üçün . . . [[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş...


## TY2-B-6#1 - Tonyukuk Yazıtı, Batı 6. satir  (5 kelime)

- **transkripsiyon:** `KORKMaDıMıZ : SÜŊüŞDüMüZ : TaRDUŞ : ŞaDRA : UDI`
- **kelime karsiliklari:** KORKMADIK : SÜNGÜŞDÜK : TARDUŞ : ŞADARA [KADAR] : UDUP [KOVUP]
- **kanit:**
  - `Tekin 1998, s. 47` (eslesen: _TaRDUŞ ŞaDRA UDI_)
    > ...B 4) Üküş teyin neke korkur biz? Az teyin ne basınalım? Teğelim!” tidim. Teğdimiz. Yulıdımız. Ekinti kün (B 5) örtçe kızıp kelti. Süünğüşdümiz. Bizinte eki uçı sıfığarça artuk erti. [[s. 47]] Tengri yarlıkaduk üçün, üküş teyin (B 6) korkmadımız. Sünğüşdümiz. Tarduş Şadra udı yanydımız. Kağanın tutdumız. Yabgusın, Şadın (B 7) anta ölürti.* Eliğçe er tutdumız. Ol ok tün bodunın sayu ıttımız. Ol sabığ eşidip On-Ok beğleri bodunı kop (B 8) kelti, yükünti. Keliğme beğlerin bodunın itip yığıp, azça bodun tezmiş erti, On-Ok süsin sület...
  - `Olmez 2017, s. 53` (eslesen: _TaRDUŞ ŞaDRA UDI_)
    > ...şi iyelik ekinden sonra ve sadece bir örnekte görülür: *basmıl yagıdıp evimerü bardı* "Basmıllar bize düşman olup benim yurduma doğru gittiler" (MÇ G 4) *+rA*. Bu ek şu örneklerde bulunur: *taşra yorıyur teyin* "İsyan başlıyor diye (...)" (KT D 11-12) *tarduş şadra udı yarıdımız* "(Düşmanı) Tarduş Şadına doğru kovalayıp onları dağıttık" (T 41) *+yA ve üze Hakkında Not:* *+rA* eki /r/ ile biten kelimelere geldiğinde *r* ünsüzünün aykırılaşmasıyla (dissimilation) *+yA* ortaya çıkar. Bir örnekte de *r*'nin kaybolduğu görülü...
  - `Tekin 2003, s. 114` (eslesen: _SÜŊüŞDüMüZ_)
    > ...rfında görülür: *taşdın+tan* "dışarıdan" (MÇ G 4) [s. 114] # s. 114 — TALAT TEKİN *oguzdun+tan* "Oğuzların tarafından" (T 8) **266.** Bulunma-çıkma durumunda bir adın şu görevleri vardır: 1. Eylemin işlendiği yeri belirten zarf tümleci olarak: *kara köl+tä süŋüşdümüz* "Kara Gölde savaştık" (KT K 2) *ekin sü äbdä ärti* "İkinci ordu yurtta idi" (KT D 32) *[bi]ryä tabgaç+da ati küsi yok boltı* "Güneyde, Çin'de adı sanı yok oldu" (BK D 36) *azu bu sabım+da igid bar gu* "Yoksa bu sözlerimde yalan var mı?" (KT G 10), vb. 2. Ey...
  - `Ata 2011, s. 115` (eslesen: _SÜŊüŞDüMüZ_)
    > ...k ~ eŋ ilki sözcükleri kullanılmıştır. bir tümen artukı yeti biŋ sü ilki kün ölürtüm BK G1 “on yedi bin askeri birinci gün öldürdüm” ilki sü taşıkmış erti BK D32 “ilk kez ordu dışarı çıkmış (sefere çıkmış) idi” eŋ ilk togu balıkda süŋüşdümüz KT K4 “ilk önce Togu Balık’ta savaştık” eŋ ilki togu balıkda süŋüşdüm BK D30 “ilk önce Togu Balık’ta savaştım” eŋ ilki tadıkıŋ çorıŋ boz atıg binip KT D32 “ilk önce Tadık Çor’un boz atına binip” b. +n, +nti: Bu ekler, “iki” sayısı...
  - `Tekin 1998, s. 23` (eslesen: _TaRDUŞ_)
    > ...yağısı koriy teğ ermiş. İlgerü kurığaru sülep tilr)miş kubratlmış. Klamağı (D 13) yeti yüz er bolmış. Yeti yüz er bolup elsiremiş, kağansıramış bodunuğ, küngedmiş, kuladmış bodunuğ, Türük törüsün* ıçgınmış bodunuğ eçüm apam törüsinçe yaratmış boşgurmış. Tölis Tarduş (bodunuğ anta etmiş|, (D 14) Yabguğ Şadığ anta bermiş. [[s. 23]] Birye Tabgaç bodun yağı ermiş, yırya Baz kağan, Tokuz Oğuz bodun, yağı ermiş, Kırkız, Kurıkan, Otuz Tatar, Kıtaniy, Tatabı kop yağı ermiş. Kanğım kağan bunçla ................ |(D 15) kırk artu...
  - `Ergin 1970, s. 16` (eslesen: _TaRDUŞ_)
    > ...imiş. Doğuya, batıya asker sevk edip toplamış yığmış. Hepsi | yedi yüz er olmuş. Yedi yüz er olup ilsizleşmiş, kağansızlaşmış milleti, cariye olmuş, kul olmuş milleti, Türk töresini bırakmış milleti, ecdadımın töresince yaratmış, [s. 16] yetiştirmiş. Tölis, Tarduş milletini orda tanzim etmiş. | Yabguyu, şadı orda vermiş. Güneyde Çin milleti düşman imiş. Kuzeyde Baz Kağan, Dokuz Oğuz kavmi düşman imiş. Kırgız, Kunkan, Otuz Tatar, Kitay, Tatabı hep düşman imiş. Babam kağan bunca...... | Kırk yedi defa ordu sevk etmiş, yi...
