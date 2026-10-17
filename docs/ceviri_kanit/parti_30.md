# Ceviri istek paketi 30 - Orhun cumlecikleri

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


## BK-B-2#1 - Bilge Kağan Yazıtı, Batı 2. satir  (4 kelime)

- **transkripsiyon:** `BİLGE : KaGaN : UÇA : BaRDI`
- **kelime karsiliklari:** BİLGE : KAĞAN : UÇA : VARDI
- **kanit:**
  - `Tekin 1998, s. 24` (eslesen: _KaGaN UÇA BaRDI_)
    > ...ış bodun, bardığ. [[s. 24]] İlgerü barığma|) (D 24) bardığ, kurığaru barığma bardığ. Barduk yirde edgüğ ol, erinç: Kanıng subça yüğürti, singüküng tağça yatdı; beğlik uri oğlung kul boltı, eşilik kız oğlung küng boltı. Bilmedük üçün, (yablakınğın üçün, eçim kağan uça bardı|. (D 25) Başlayu Kırkız kağanığ balbal tikdim. [[s. 24]] Türük bodunuğ atı küsi yok bolmazun tiyin, kanğım kağanığ öğüm katunuğ kötürmiş Tengri, il biriğme Tengri, Türük bodun atı küsi yok bollmazun tiyin, özümin ol Tengri) (D 26) kağan olurtdı, erinç. Nefg...
  - `Tekin 2003, s. 153` (eslesen: _KaGaN UÇA BaRDI_)
    > ...D 3) *beş balık anı üçün ozdı* "Beşbalık (şehri) onun için (yıkılmaktan) kurtuldu" (BK D 28) *antagıŋın üçün...* "Öyle olduğun için..." (KT G 8-9) *kürägüŋin üçün...* "İtaatkar olmadığın için..." (KT D 23, BK D 19) *ol bilmädökügin üçün, yablakıŋın üçün eçim kagan uça bardı* "O cehaletiniz yüzünden, kötü davranışlarınız yüzünden amcam hakan uçup gitti (vefat etti)" (BK D 20) *täŋri yir bulgakin üçün, ödiŋä küni tägdök üçün yagı boltı* "Gök ile yer karıştığı için, ödlerine kıskançlık girdiği için düşman oldular" (BK D 29-30) *ilt...
  - `Roux, Eski Din, s. 271` (eslesen: _BİLGE KaGaN UÇA_)
    > ...rekiyordu. [[s. 271]] Bilge Kağan'ın oğlunun gözyaşlarında aniden ortaya çıkan bir acının ifadelerini bulmak mümkündür. Ancak bu üzüntüler, kayanın bunları aktarabilmesi için taş üzerine kazınmış, böylece canlılar tarafından tekrar okunması için yazılmıştır. "Bilge Kağan uçarak gitti, yaz geldiğinde, yukarıda Gök Köprüsü'nde, gökkuşağı yüksel diğinde, geyik dağa kaçtığında, onu düşünürüm" (M.11, B, satır 1-7). [[s. 271]] Bilge Kağan da daha önce, aynı koşullar altında kendi kardeşine şöyle ağlamıştı: "Düşündüm ki, iyice düşündüm...


## BK-B-3#1 - Bilge Kağan Yazıtı, Batı 3. satir  (4 kelime)

- **transkripsiyon:** `YaY : BOLSaR : ÜZE : TeŊRİ`
- **kelime karsiliklari:** YAZ : OLSA : ÜSTTE : TANRI
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _YaY BOLSaR ÜZE_)
    > ...in|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, ançla|, (B 5) tağda sığun etser, alnça (?)), (B 6) sakınur men. Kafnğım Klağan (?)) (B 7) taşın özüm Kağan | ... | (B 8) PAN SORERER RM ). (BG -9) ls co 1 ORHON YAZITLARI 81 Ataman Tarkan, Tunyukuk Buyla Bağa Tarkan ve k...
  - `Tekin 1998, s. 24` (eslesen: _ÜZE TeŊRİ_)
    > ...urtumız, ança itdimiz. Kurığaru Kengü Tarmanka teği Türük bodunuğ ança konturtumız, ança etdimiz. Ol ödke kul kulluğ bolmış (erti, künğ künglüğ bolmış erti). [[s. 24]] (D 22) An kazganmış, <ança> itmiş elimiz törümiz erti. Türük, Oğuz beğleri bodun, eşiding! Üze tengri basmasar, asra yir telinmeser, Türük bodun, elingin törünsin kem artatı (udaçı erti? Türük bodun, ertin) (D 23) ökün! Küreğüngin üçün, iğidmiş bilge kağanıngın ermiş barmış edgü elingle) kentü yangıltığ, yablak kiğürtüğ. Yaraklığ kantan kelip yanya eltdi? Sün...
  - `Ata 2011, s. 77` (eslesen: _ÜZE TeŊRİ_)
    > ...ş tizligig sökürmiş. “Dört bucak hep düşman imiş. Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22,...
  - `Ata 2011, s. 70` (eslesen: _ÜZE TeŊRİ_)
    > ...ıg yüküntürmiş tizligig sökürmiş. “Dört bucak hep düşman imiş. [[s. 70]] Ordular sevk ederek dört taraftaki halkları hep almış, hep kendisine bağımlı kılmış. Başlılara baş eğdirmiş, dizlilere diz çöktürmüş.” (KD D 2, BK D 13). türük oguz begleri bodun eşidiŋ üze teŋri basmasar asra yir telinmeser türük bodun eliŋin törüŋin kem artatı udaçı erti. “Ey Türk, Oğuz beyleri ve halkı, işitin: Üstteki gök çökmedikçe, alttaki yer delinmedikçe, Türk milleti, senin devletini ve töreni kim bozabilirdi!” (KD D 22, BK D 18-19). [[s. 70]...
  - `Roux, Altay Turklerinde Olum, s. 97` (eslesen: _ÜZE TeŊRİ_)
    > ...ı) olarak kabul ettiği, etnografinin çok iyi tanıdığı ünlü Erklik'e rastlamıştır. * Gerçekten de Erdik, güç- “dü, kuvvetli anlamında, fakat bir sıfat olarak (örn. [[s. 97]] Irk Bitig'de XII ve LXV), eski Türk metinlerinde sıkça görülmektedir.'** Ikhe Aşete'de üze tengri erklik'i açıkça okumaktayız. Eski tarihteki bu ilahı, tanrıların tapınağına ancak ihtiyatla kaydedebiliriz. Öd tengri, yani zaman tanrısından daha eminiz. Von Gabain, bunun insanın kaderini ve yaşam süresini belirlediğini söylemektedir. Ayrıca bu, iki metinle...
  - `Ogel C2, s. 163` (eslesen: _ÜZE TeŊRİ_)
    > ...cısı, yaratıcısı, hâliki”'” vardı. Ancak Göktürk yazıtlarında, o yaratıcının adı anılmıyordu. Çin'dedünya,(T'ien-hsia), yani “gök ve yer” olarak tanımlanıyordu. Bu ç in c e sözü tam olarak tercüme edersek, “Gök ve aşağısı”, demektir. Gök - tür k çağında da, “Üze tengri (gök) * asra yer”; Uygur el yazmalarında ise, “üstün tengri (gök) * altın yer”ikilie i , ber zaman birlikte görülüyordu. [[s. 163]] Yukarıda gök, aşağıda yer birliği: Bu iki büyük varlık birbirlerinden ay- “<re-”) rılmıyorlardı. “Üze”, Bizim bugünkü “üze-ri...


## BK-B-4#1 - Bilge Kağan Yazıtı, Batı 4. satir  (4 kelime)

- **transkripsiyon:** `KöBüRGeSİ : öTeRÇE : aNÇA : TaKI`
- **kelime karsiliklari:** KÖBÜRGESİ : ÖTERCE : ANCA : DAHİ
- **kanit:**
  - `Tekin 1998, s. 21` (eslesen: _aNÇA TaKI_)
    > ...sımadı, (G 12) Tabgaç kağanıng içreki bedizçiğ ıttı. Afiğar adınçığ bark yaraturtum; için taşın adınçığ bediz urturtum. Taş tokıtdım. Köngülteki sabımın ulrturtum ... On-Ok oğlfüğ)a Tatınğa teği bunı körü bilinğ. Benğgü taş (G 13) tokıtdım. Yfağluk el erser, ança takı eriğ yerte irser, ança eriğ yerte beng gü taş tokıtdım, bititdim. Anı körüp ança biling. [[s. 21]] Ol taşığl.......tokıtJdım. Bu bitiğ bitiğme atısı Yolluğ Tfiğin) blitidim|. (D 1) Üze kök tefiğri asra yağız yer kılıntukda, ekin ara kişi oğli kılınmış. Kişi...
  - `Tekin 2003, s. 219` (eslesen: _aNÇA TaKI_)
    > ...sımadı, (G 12) Tabgaç kaganıŋ içräki bädizçig ı(t)tı. Aŋar adınç(ç)ıg bark yarat(t)urtum; için taşin adınç(ç)ıg bädiz urturtum; taş tokıtdım; köŋültäki sabımın urturtum... On Ok oglıŋa Tatıŋa tägi bunı körü biliŋ! Bäŋgü taş (G 13) tokıtdım. Y[ag]uk el ärsär, ança takı erig yertä ärsär, ança erig yertä bäŋgü taş tokıtdım, biti(t)dim. Anı körüp ança biliŋ! Ol [...tokıt]dım. Bu bitig bitigmä atısi Yol(l)ug Tigin b[itidim]. [s. 220] # s. 220 — ORHON TÜRKÇESİ GRAMERİ (basılı sayfa numarası 221) # Bilge Kagan Yazıtı (735) ##...
  - `Ata 2011, s. 122` (eslesen: _aNÇA TaKI_)
    > ...‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Atam...
  - `Ata 2011, s. 115` (eslesen: _aNÇA TaKI_)
    > ...larak tiyin ‘diye, için’ ve tip ‘diye’ sözleri kullanılır. azu: çıgań bodunug bay kıltım az bodunug üküş kıltım azu bu sabımda igid bar gu “yoksul halkı zengin kıldım, az halkı çoğalttım. Yoksa bu sözümde yalan var mı!” [[s. 115]] KT G10 takı: yaguk el erser, ança takı erig yirde irser, ança erig yerte beŋgü taş tokıtdım “yakın memleket olduğundan, ve de erişilir yer olduğundan, böyle erişilir yerde ebedi taş yazdırdım” KT G13 ulayu: ataman tarkan … tonyukuk buyla baga tarkan ulayu buyruk … “Ataman Tarkan … Tonyukuk Buyla B...
  - `01_Ceren_Sungur_Sibirya_dan_Balkanlara_Samanlar_ve_Cadicilar_I, s. 393` (eslesen: _aNÇA TaKI_)
    > ...ırvatlar arasında, bahar döneminde Aziz George günü civan, bebeği cadılardan korumak için beşiğe, küçük porsuk ağacından haçlar ve aynca yaban mersini koymak adettendi. [[s. 393]] Geçmişte Bosna Hersek'teki Müslümanlar, cadıların, bebeğin meme ucuna bir nevi kanca takıp onu öldürene kadar kanını so ğuracaklarına inanıyorlardı. Koruma gayesiyle bebeğin meme [s. 394] uçlan sanmsakla ovulur yahut ağzı katlanmayan bir bıçakla be raber bir diş sarımsak beşiğinin alhna konurdu. Aynca kadınla rın ölü çocuklar doğurmasının nedenin...
  - `Tekin 1998, s. 42` (eslesen: _KöBüRGeSİ_)
    > ...rkığ, bediziğ, uzuğ |..........2renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, ançla|, (B 5) tağda sığun etser, alnça (?)), (B 6) sakınur men. Kafnğım Klağan (?)) (B 7) taşın özüm Kağan | ... | (B 8) PAN SORERER RM ). (BG -9) ls co 1 ORHON YAZITLARI 81 Ataman Tarkan, Tunyukuk Buyla Bağa Tarkan ve kumandanlar ERERRRRE TE Hassa...


## BK-B-5#1 - Bilge Kağan Yazıtı, Batı 5. satir  (4 kelime)

- **transkripsiyon:** `TaGDA : SIGUN : öTSeR : aNÇA`
- **kelime karsiliklari:** DAĞDA : SIĞUN : ÖTSE : ANCA
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _TaGDA SIGUN_)
    > ...renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, ançla|, (B 5) tağda sığun etser, alnça (?)), (B 6) sakınur men. Kafnğım Klağan (?)) (B 7) taşın özüm Kağan | ... | (B 8) PAN SORERER RM ). (BG -9) ls co 1 ORHON YAZITLARI 81 Ataman Tarkan, Tunyukuk Buyla Bağa Tarkan ve kumandanlar ERERRRRE TE Hassa Kumandanı Sebiğ Kül İrkin başta ol...
  - `Tekin 2003, s. 177` (eslesen: _TaGDA SIGUN_)
    > ...önl(üm)den feryat etmek gelince (onu) geri çevirterek yas tuttum" (KT K 11) *süŋüş bol-sar çärig itär ärti, ab abla-sar ärmäli täg ärti* "Savaş olunca orduyu düzenler idi, av avlasa yarış atı (?) gibi idi" (KÇ B 9) *yay bol-sar üzä täŋri köbürg(ä)si ätärçä... tagda sıgun ät-sär [ança] sakınur män* "Yaz gelince yukarıda gök davulu nasıl gümbürderse... dağlarda geyikler nasıl böğürürse (işte öyle) yas tutuyorum" (BK B 3-6) *öd täŋri ay-sar kişi oglı kop ölgäli törümiş* "Zaman tanrısı buyurunca insanoğulları hep ölümlü yaratılmı...
  - `Ogel C2, s. 439` (eslesen: _TaGDA SIGUN_)
    > ...düşüncesi artık, mitelo ji çağından kurtulmuştur. Göktürk yazıtlarında “Töngeş tag” ve Uygur Bayan-çur Kağan yazıtında da “Kömür tag” gibi, gerçek dağlardan söz açılmaktadır. [[s. 439]] Bunlar, normal dağ adlarıdır. Çince yazıta yazılan Göktür k yazılarında, “tagda sıgun”, yani tağda sığın veya geyik sözlerini de, görüyoruz. Bu söyleyişler de normaldır. Tun h ua n gtürkçe el yazmasında, yine Gök - tür k yazılarıyla, “dağ yerinde” karşılığı olarak, çevresi silinmiş olarak, “tag yerke” sözü görülüyordu. Anlaşılıyor ki bunlardan...
  - `Tekin 1998, s. 11` (eslesen: _TaGDA_)
    > ...n da çok zengindir. İşte anlatımı zenginleştiren ve güzelleştiren bu deyimlerden bazıları: adak kamşat- “ayağı burkulmak, ayağı dolaşmak, sendelemek (morali bozulmak, şaşırıp yanlış hareket etmek)”, atı küsi yok bol- “adı sanı yok olmak”, balıkdakı tağık-, tağdakı in- “şehirdekiler dağa çıkmak, [[s. 11]] dağdakiler inmek” (köşedeki bucaktaki derlenip toplanmak, herkes bir araya gelmek), başlığığ yüküntür-, tizliğiğ sökür- “başlıya (mağrura) baş eğdirmek, dizliye (güçlüye) diz çöktürmek”, içre aşsız taşra tonsuz “iç...
  - `Ata 2011, s. 52` (eslesen: _TaGDA_)
    > ...bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er bolmış yeti yüz er bo...
  - `Olmez 2017, s. 20` (eslesen: _TaGDA_)
    > ...mıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler. Babam hakan on yedi savaşçıyla isyan etmiş. 'İsyan başlıyor' diye haber gelince şehi...


## BK-B-6#1 - Bilge Kağan Yazıtı, Batı 6. satir  (4 kelime)

- **transkripsiyon:** `SaKıNUR : MeN : KaŊıM : KaGaN`
- **kelime karsiliklari:** SAKINIRIM : BEN : BABAM : KAĞAN[I]
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _SaKıNUR MeN_)
    > ...ğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, ançla|, (B 5) tağda sığun etser, alnça (?)), (B 6) sakınur men. Kafnğım Klağan (?)) (B 7) taşın özüm Kağan | ... | (B 8) PAN SORERER RM ). (BG -9) ls co 1 ORHON YAZITLARI 81 Ataman Tarkan, Tunyukuk Buyla Bağa Tarkan ve kumandanlar ERERRRRE TE Hassa Kumandanı Sebiğ Kül İrkin başta olmak üzere (bütün) kumandanlar, bunca...
  - `Tekin 1998, s. 11` (eslesen: _KaŊıM KaGaN_)
    > ..., yumuşak kumaşlarla (aldatıp)”, Çığany bodunuğ bay kıltım, az bodunuğ üküş kıltım “Yoksul halkı zengin yaptım, az halkı çok yaptım”, Elsiremiş kağansıramış bodunuğ, küfğedmiş kuladmış bodunuğ “devletsiz hakansız kalmış halkı, kul olmuş köle olmuş halkı”, (Kangım kağan) illiğiğ ilsiretmiş, kağanlığığ kağansıratmış | “(babam hakan) devletliyi devletsiz bırakmış, hakanlıyı hakansız bırakmış”, [[s. 11]] | Yarıklığ kantan kelip yariya eltdi? Süngüğlüğ kantan kelipen süre eltdi ? “Zırhlı (düşmanlar) nereden gelip (sizi) dağıtıp...
  - `Tekin 2003, s. 117` (eslesen: _KaŊıM KaGaN_)
    > ...ay dağlarını yolsuz olarak aştık, İrtiş ırmağını geçitsiz olarak geçtik" (T 35) *[usı]n süŋüg+ün açdımız* "Uykularını mızraklar(ımız)la açtık" (T 28) 2. Eylemin kiminle birlikte işlendiği: *kaganım+ın sü eltdimiz* "Hakanımla birlikte ordu sevk ettik" (T 53) *kaŋım kagan yiti yegirmi är+in taşıkmiş* "Babam Hakan on yedi er ile (dağa) çıkmış" (KT D 11) *ulug irkin azkıńa är+in täzip bardı* "Uluğ İrkin azıcık adamla kaçıp gitti" (KT D 34) *uygur el[t]äbär yüz+çä är+in ilg[är]ü t[äzip bardı]* "Uygurların valisi yüz kadar adamla...
  - `Ata 2011, s. 52` (eslesen: _KaŊıM KaGaN_)
    > ...türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş...
  - `Olmez 2017, s. 20` (eslesen: _KaŊıM KaGaN_)
    > ...a isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükseltmişler....
  - `Ata 2011, s. 45` (eslesen: _KaŊıM KaGaN_)
    > ...r araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti yüz er b...


## BK-B-7#1 - Bilge Kağan Yazıtı, Batı 7. satir  (3 kelime)

- **transkripsiyon:** `TaŞIN : ÖZüM : KaGaN`
- **kelime karsiliklari:** TAŞINI : ÖZÜM : KAĞAN ---
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _TaŞIN ÖZüM KaGaN_)
    > ...up bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, ançla|, (B 5) tağda sığun etser, alnça (?)), (B 6) sakınur men. Kafnğım Klağan (?)) (B 7) taşın özüm Kağan | ... | (B 8) PAN SORERER RM ). (BG -9) ls co 1 ORHON YAZITLARI 81 Ataman Tarkan, Tunyukuk Buyla Bağa Tarkan ve kumandanlar ERERRRRE TE Hassa Kumandanı Sebiğ Kül İrkin başta olmak üzere (bütün) kumandanlar, bunca sadık beyler babam hakana pek çok (G 15) pek...
  - `Tekin 1998, s. 25` (eslesen: _ÖZüM KaGaN_)
    > ...KÜLTİGİN YAZITI sözleşdimiz. Kafığımız, eçimiz kaz|ganmış bodun atı küsi yok bolmazun| (D 27) tiyin, Türük bodun üçün tün udımadım, küntüz olurmad<ım>. İnim Kül Tigin birle, eki Şad birle ölü yitü kazgantım. Ança kazganıp birki bodunuğ ot sub kılmadım. Men (özüm kağan olurtukuma, yir sayu) (D 28) barmış bodun, ölü yitü, yadağın yalangın yana kelti. [[s. 25]] Bodunuğ iğideyin tiyin yırgaru Oğuz bodun tapa, ilgerü Kıtariy Tatabı bodun tapa, birgerü Tabgaç tapa uluğ sü eki yeğirlmi süledim ...... süngüşdüm. Anta) (D 29) kisre...
  - `Tekin 2003, s. 123` (eslesen: _ÖZüM KaGaN_)
    > ...rmek için kullanılır. 1. *käntü* "kendi": *ädgü eliŋä käntü yaŋıltıg* "İyi ülkene kendin ihanet ettin" (KT D 23, BK D 19) 2. *özüm* "kendim", *özi* "kendisi, kendileri": *bän özüm tabgaç iliŋä kılıntım* "Ben kendim Çin egemenliği döneminde doğdum" (T 1) *män özüm kagan olortokum üçün...* "Ben kendim hakan olarak tahta oturduğum için..." (BK D 3) *türk bodunug ötükän yerkä bän özüm bilgä tuñukuk [kälürtüm]* "Türk [s. 124] # s. 124 — TALAT TEKİN halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, (getirdim)" (T 17) *ilteriş...
  - `Ata 2011, s. 172` (eslesen: _ÖZüM KaGaN_)
    > ...rk halkı künt͡ (ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü için gece uyumadım, gündüz oturma- k(a)zg(a)nt͡ (ı)m (a)nça k(a)zg(a)n(ı)p dım. Kardeşim Köl Tigin ile, iki şad bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir ile (birlikte) ölesiye yitesiye çabala- s(a)yu b(a)rm(ı)ş bod(u)n [yadagın dım. Öylece çabalayıp birleşik halkı yalaŋın] ölü yitü [yana] ateş (ile) su etmedim (birbirine düş-...
  - `Ata 2011, s. 165` (eslesen: _ÖZüM KaGaN_)
    > ...)z kazg(a)nm(ı)ş bod(u)n (a)tı küsi yo͡k bo[lmazun] tiy(i)n türü͡k bod(u)n üç(ü)n tün udım(a)d(ı)m kün͡t(ü)z ol(u)rm(a)d(ı)m in(i)m k͡ööl t[igin] birle [eki şad] birle ölü yitü k(a)zg(a)n͡t(ı)m (a)nça k(a)zg(a)n(ı)p bir(i)ki bod(u)n(u)g ot sub kılm(a)dım [men özüm kagan olurtu͡kuma] yir s(a)yu b(a)rm(ı)ş bod(u)n [yadagın yalaŋın] ölü yitü [yana] D23 k(e)lti bod(u)n(u)g ig(i)d(e)y(i)n tiy(i)n yır(ı)g(a)ru [o]g(u)z bod(u)n t(a)pa [[s. 165]] ilg(e)rü k͡ııt(a)ń t(a)t(a)bı bod(u)n t(a)pa bir(i)gerü t(a)bg(a)ç t(a)pa (e)ki y(e)g(...
  - `Tekin 1998, s. 7` (eslesen: _TaŞIN_)
    > ...unyukuk yazıtı 1897'de ve Klementz tarafından Orhon yazıtlarından çok daha doğuda, Moğolistan'ın başkenti Ulan-Bator'un 50 kilometre kadar güney-batısında, Nalayha kenti ile Tola ırmağının sağ kıyısı arasında, Bayn -Tsokto denilen yerde bulunmuştur. İki büyük taşın dört yüzüne yazılmış olan Tunyukuk yazıtı Orhon yazıtlarından daha eski bir tarihte, büyük bir olasılıkla 720 ile 725 yılları arasında yazılıp dikilmiştir. [[s. 7]] Moğolistan'da İkinci Kağanlık döneminden kalma birkaç küçük yazıt daha vardır. Bunların en ön...


## BK-B-8#1 - Bilge Kağan Yazıtı, Batı 8. satir  (1 kelime, TAS KIRIGI)

- **transkripsiyon:** `---`
- **kelime karsiliklari:** ---
- **kanit:** _(korpusta eslesme yok - bos birak)_


## BK-B-9#1 - Bilge Kağan Yazıtı, Batı 9. satir  (1 kelime, TAS KIRIGI)

- **transkripsiyon:** `---`
- **kelime karsiliklari:** ---
- **kanit:** _(korpusta eslesme yok - bos birak)_


## BK-GB-1#1 - Bilge Kağan Yazıtı, Güneybatı 1. satir  (6 kelime)

- **transkripsiyon:** `BİLGE : KaGaN : BİTiGİN : YOLuG : TİGiN : BİTiDiM`
- **kelime karsiliklari:** BİLGE : KAĞANIN : BİTİĞİNİ : YOLLUĞ : TİGİN : BİTİDİM
- **kanit:**
  - `Tanyeri, s. 13` (eslesen: _BİLGE KaGaN BİTiGİN_)
    > ...sözcükleri ayırmada, iki nokta kullanılması anlamlıdır. Ayrıca yazıtlarda kullanılan iki nokta (:) imi (tamgası), Göktürk yazısındaki tek noktalama işaretidir. Bu noktalama işaretinin örnek kullanımı şöyledir: “mdtib : ngitGLuY : nigtib : NGq : eglib” (Bilge Kaġan bitigin Yolluġ Tigin bitidim.) Sayfa: 12 [s. 14] Göktürk Yazısını Öğrenme Kılavuzu | Yavuz TANYERİ www.bilgicik.com Yazım Kurallarıyla İlgili Alıştırmalar Göktürk yazısında ünlü - ünsüz harflerin kullanımlarını düzenleyen...
  - `Tekin 1998, s. 3` (eslesen: _BİLGE KaGaN_)
    > ...ürk Dilleri - Les Langues Turgues, 1995 (M. Ölmez ile); Les inscriptions de VOrkhon, Kul Tighine, Bilgh& Daghan, Tounyougoug, 1995; Tarih Boyunca Türkçenin Yazımı, 1997; Türkoloji Eleştirileri, 1997 (genişletilmiş 2. baskı). [s. 3] Orhon Yazıtları Kül Tigin, Bilge Kağan, Tunyukuk Talat Tekin Derleyip yayına hazırlayan: Mehmet Ölmez Simurg Dil ve Edebiyat Dizisi: 1 Yayımlayan: Mehmet Ölmez E-mail: olmez &hun.edu.tr http://yunus.hun.edu.tr”olmez İstanbul 1998 ISBN 975-7172-04-9 2. baskı, 1. baskı 1995 Kapak Tasarımı: 2...
  - `Ergin 1970, s. 3` (eslesen: _BİLGE KaGaN_)
    > ...ına izin verilmiştir. Herhangi bir yolla çoğaltılması ya da ticarî amaçlarla kullanılması kanunen yasaktır. HİSAR [s. 3] İÇİNDEKİLER Ön Söz ............................................... Kül Tigin Âbidesi ............................................... Bilge Kağan Âbidesi ............................................... Tonyukuk Âbidesi ............................................... [s. 4] Ön Söz Türk adının, Türk milletinin isminin geçtiği ilk Türkçe metin.. İlk Türk tarihi.. Taşlar üzerine yazılmış tarih.. Türk de...
  - `Tekin 2003, s. 12` (eslesen: _BİLGE KaGaN_)
    > ................................. 216 METİN ÖRNEKLERİ ....................................................................................... 217 Kül Tigin Yazıtı (732) .................................................................................... 219 Bilge Kagan Yazıtı (735) ................................................................................ 221 [s. 13] # s. 013 — İÇİNDEKİLER Tunyukuk Yazıtı (725 ?) ................................................................................. 222 Ongin Yazıtı (732?...
  - `Ata 2011, s. 5` (eslesen: _BİLGE KaGaN_)
    > ...K KAĞANLIĞI (682-744) ……………….……………….. 45 Yazıtlarda II. Köktürk Kağanlığı’nın Kuruluşu ……….………….…….. 45 İlteriş Kağan ve Vezir Tonyukuk ……………….…………….…...… 46 Kapgan Kağan Dönemi ………………………….…………….…...… 47 Bilge Kağan ve Köl Tigin Dönemi …………………………...…...… 47 Yazıtlarda Bilge Kağan ve Köl Tigin Dönemi ………….…….…...… 48 II. Köktürk Kağanlığı’nın Yıkılışı ………………….….………….…….. 49 Özet ………………………..…………….……………………………… 50 Kendimizi Sın...
  - `Olmez 2017, s. 5` (eslesen: _BİLGE KaGaN_)
    > ...3 - Sıfatfiiller • 62, 245 - İsimen İsim Türeten Ekler • 65 - Söz Yapımı • 65, 246 - Fiilden İsim Türeten Ekler. • 67 - Konuyla İlgili Başvuru Kaynakları • 72 - Eski Türk Alfabesiyle Yazılmış Yazıtlardan Seçmeler • 76 - Kül Tègin Yazıtı • 76 - Bilge Kağan Yazıtı • 101 - Tunyukuk Yazıtı • 132 - Moyun Çor / Şine Us(u) Yazıtı (759-760) • 142 - Kısaltmalar ve İşaretler • 161 - Kaynaklar ve Eser Kısaltmaları • 162 - EK: Runik Harfli Eski Türkçe Yazıtlar için Örnekler • 169 [s. 6] # s. 004 — Mehmet Ölmez...


## BK-GB-1#2 - Bilge Kağan Yazıtı, Güneybatı 1. satir  (15 kelime, TAS KIRIGI)

- **transkripsiyon:** `BUNÇA : BaRKıG : BeDiZiG : UZuG : --- KaGaN : aTISI : YOLuG : TİGiN : MeN : aY : aRTUKI : TÖRT : KÜN : OLuRuP : BİTİDiM`
- **kelime karsiliklari:** BUNCA : BARKI : BEZEYİ : UZU : --- KAĞAN[IN] : ATISI : YOLUĞ : TİGİN : BEN : [BİR] AY : ARTI : DÖRT : GÜN : OTURUP : BİTİDİM
- **kanit:**
  - `Tekin 1998, s. 42` (eslesen: _BUNÇA BaRKıG BeDiZiG UZuG_)
    > ...ı. Kaniğım kağan Tjürük beğlerin bodunın ertingü ti mağ itdi öğdli..... [[s. 42]] ())) IKlafiğım Kağan (üçün) ağır taşığ yoğun ığ Türük beğler bodun |itip yaratıp kellürti. Özüme bunça |...:....0004 ) (G-B) |... Bilge) kağan blitiğin|) Yolluğ Tigin bitidim. Bunça barkığ, bediziğ, uzuğ |..........2renrereerrrRara .. Klağan atısı Yolluğ Tigin, men, ay artukı tört kün follurup bitidim, bedizettim ylaratdım (?)1. ğ (B 1) 1.......... Düze Teri | (B 2) Bilge Kağan ulçdı (01 (B 3). [[s. 42]] Yay bolsar, üze tlengri (?)) (B 4) köbürgesi eterçe, a...
  - `Tekin 2003, s. 156` (eslesen: _aY aRTUKI TÖRT KÜN_)
    > ...arak: *azu turuk sub ärsär opayın, azu itmiş yaratmış tatıglıg aş ärsär aşayın* "Ya duru su olsun içip yutayım ya da yapılmış edilmiş tatlı yemek olsun yiyeyim" (Toyok 1 ön 1-8) **369.** *artukı* "fazlası, artı" ( < *artuk+ı* < *\*art-* "artmak, çoğalmak"): *ay artukı tört kün [ol]orup...* "otuz dört gün oturup..." (BK GB) *otuz artukı bir* "otuz bir" (BK G 9), vb. Bk. **Asıl Sayılar**. **370.** *takı* "ve, dahi" (< *\*tak-*): *y[ag]uk el ärsär, anç(a) takı erig yertä irsär, ança erig yertä bäŋgü taş tokıtdım* "(Burası) yakın bir...
  - `Tekin 2003, s. 135` (eslesen: _BUNÇA BaRKıG_)
    > ...ileri) gelip ağlamış ve yas tutmuş" (KT D 4, BK D 5) *bunça bädizçig tuygun eltäbär käl(ür)ti* "Bunca ressam ve heykeltraşı [s. 135] # s. 135 — ORHON TÜRKÇESİ GRAMERİ Tuygun Elteber getirdi" (KT KD) *bunça bitig bitigmä* "Bunca yazılar(ı) yazan..." (KT GD) *bunça barkıg bädizig uzug...* "Bunca binayı, resim ve heykelleri, süslemeleri..." (BK GB) *bunça matı bäglär* "... bunca sadık beyler..." (BK G 14), vb. ## Zarflar ## Yer Zarfları **291.** Orhon Türkçesinde yer zarfları şu eklerle türetilir: {+A}, [+DXn}, {+gArU}, {+rA...
  - `Olmez 2017, s. 7` (eslesen: _MeN aY_)
    > ...lışmalar Eski Türkçe döneminin iki ayrı devrini oluşturan Köktürkçe ve Eski Uygurcayı ilgilendiren çalışmalar olmakla birlikte her iki dönemi içine alan çalışmalar şeklinde de karşımıza çıkmaktadır. Köktürkçe ve Eski Uygurca üzerine yapılan çalışmalar hemen hemen aynı yıllarda yapılmaya başlamış olsa da genel olarak hep iki ayrı kolda ilerlemiştir. Bununla birlikte Eski Türkçenin bu iki dönemi birbirini her zaman beslemiş, doğal olarak hep yan yana olmuştur. Üniversitelerimizin Türkoloji bölümlerinde Türk Dilinin bu devr...
  - `Tekin 1998, s. 40` (eslesen: _aRTUKI TÖRT_)
    > ...idinde, evini barkını orada bozdum ............... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. B...
  - `Tekin 1998, s. 28` (eslesen: _KÜN OLuRuP_)
    > ...ın| Biçin yılka, yitinç ay yiti otuzka kop alkdlımlız. Kül Tigin ölzi| (?) kırk artuklı yliti yaşılnğal(?) boltı. Taş (bark itgüçiğ), bunça bedizçiğ Tuygun Elteber kelü<r>ti. (G-D) Bunça bitiğ bitiğme: Kül Tigin atısı Yolluğ Tigin, bitidim. [[s. 28]] Yiğirmi kün olurup bu taşka, bu tüimka kop Yolluğ Tigin, bitidim. Iğar oğlanınğızda, taygunungızda yeğdi iğidür ertiğiz. Uça bardığız. Tengrlide) tiriğdekiçe |............... | (G-B) Kül Tigininğ altunın, kümüşin, ağışın, barımın ORHON YAZITLARI 53 di. [[s. 28]] (Kül Tigin o...


## BK-GB-1#3 - Bilge Kağan Yazıtı, Güneybatı 1. satir  (2 kelime, TAS KIRIGI)

- **transkripsiyon:** `BeDiZeTiM : YaG ---`
- **kelime karsiliklari:** BEZEDİM : YAĞ ---
- **kanit:** _(korpusta eslesme yok - bos birak)_


## TY1-B-1#1 - Tonyukuk Yazıtı, Batı 1. satir  (7 kelime)

- **transkripsiyon:** `BİLGE : TONYUKUK : BeN : ÖZüM : TaBGaÇ : İLiŊE : KILıNDıM`
- **kelime karsiliklari:** BİLGE : TONYUKUK : BEN : ÖZÜM : TABGAÇ : İLİNDE : KILINDIM
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BeN ÖZüM TaBGaÇ İLiŊE_)
    > ...lece), (B 6) yas tutuyorum. Babam (hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun...
  - `Ergin 1970, s. 36` (eslesen: _BİLGE TONYUKUK BeN_)
    > ...ı cephesi Bilge Kağan kitâbesini Yollug Tigin, yazdım. Bunca türbeyi, resimi, sanatı.........kağanın yeğeni Yollug Tigin ben bir ay dört gün oturup yazdım, resimledim ........... M U H A R R E M E R G İ N [s. 36] TONYUKUK ÂBİDESİ (Birinci Taş) Doğu cephesi Bilge Tonyukuk ben kendim Çin ilinde kılındım. Türk milleti Çine tâbi idi. | Türk milleti hanını bulmayıp Çinden ayrıldı, hanlandı. Hanını bırakıp Çine tekrar teslim oldu. Tanrı şöyle demiştir: Han verdim, | hanını bırakıp teslim oldun. Teslim olduğun için Tanrı öldürmüştür. Tü...
  - `Ata 2011, s. 182` (eslesen: _BİLGE TONYUKUK BeN_)
    > ...182] Orhun Türkçesi- Metin III TONYUKUK YAZITI (BATI YÜZÜ 1-7) TRANSKRİPSİYONLU METİN TÜRKİYE TÜRKÇESİNE B1 AKTARMA bilge tony͡ u͡ku͡k b(e)n öz(ü)m t(a)bg(a)ç Bilge Tonyukuk, ben kendim, Çin il(i)ŋe kı͡ ıl(ı)nt͡ ım türk bod(u)n memleketinde doğdum. (O zaman) t(a)bg(a)çka k͡öör(ü)r (e)rti Türk milleti Çin’e tâbi idi. B2 Türk milleti (kendi) hükümdarını türk bod(u)...
  - `Ata 2011, s. 175` (eslesen: _BİLGE TONYUKUK BeN_)
    > ...öl t(e)m(i)ş [[s. 175]] (e)r(i)n͡ç türk bod(u)n ölti (a)lk(ı)n͡tı yo͡k bol͡tı türk sir bod(u)n y(e)rinte B4 bod k(a)lm(a)dı ıda t(a)şda k(a)lm(i)şi k͡uubr(a)n(ı)p y(e)ti yüz bol͡tı (e)ki ül(ü)gi (a)tl(ı)g (e)rti bir ül(ü)gi y(a)d(a)g (e)rti y(e)ti yüz kişig Bilge Tonyukuk, ben kendim, Çin memleketinde doğdum. (O zaman) Türk milleti Çin’e tâbi idi. Türk milleti (kendi) hükümdarını bulmayınca Çin’den ayrıldı, hükümdar sahibi oldu. Hükümdarını bırakıp Çin’e yine bağımlı hâle geldi. [[s. 175]] Tanrı öylece demiş şüphesiz: “Han verdim,...


## TY1-B-1#2 - Tonyukuk Yazıtı, Batı 1. satir  (5 kelime)

- **transkripsiyon:** `TÜRK : BODuN : TaBGaÇKA : KÖRüR : eRTİ`
- **kelime karsiliklari:** TÜRK : BOYLARI : TABGAÇA : GÖRÜR : İDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN TaBGaÇKA KÖRüR eRTİ_)
    > ...(hakanın?) (B 7) (mezar) taşını bizzat (ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun...
  - `Tekin 2003, s. 221` (eslesen: _TÜRK BODuN TaBGaÇKA KÖRüR_)
    > ...içikmiş. Bunça işig küçüg birtök(k)ärü sakınmatı "Türük bodunug ölüräyin, urugsıratayin!" tir ärmiş. [s. 221] # s. 221 — TALAT TEKİN (basılı sayfa numarası 222) # Tunyukuk Yazıtı (725 ?) ## I. Batı Yüzü (1) Bilgä Tuñukuk, bän özüm, Tabgaç iliŋä kılıntım. Türk bodun Tabgaçka körür ärti. (2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerin...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...
  - `Ata 2011, s. 120` (eslesen: _TÜRK BODuN_)
    > ...ŋügüg ıdmış d. ol yılkıg alıp igittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. [[s. 120]] tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olması b. Kö...


## TY1-B-2#1 - Tonyukuk Yazıtı, Batı 2. satir  (6 kelime)

- **transkripsiyon:** `TÜRK : BODuN : KaNIN : BULMaYıN : TaBGaÇDA : aDRıLDI`
- **kelime karsiliklari:** TÜRK : BOYLARI : KAĞAN : BULAMAYIP : TABGAÇDAN : AYRILDI
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK BODuN KaNIN BULMaYıN_)
    > ...(ben) hakan ........... (B ES) bida ERER ELLA. BD) serilen RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida ta...
  - `Tekin 2003, s. 221` (eslesen: _TÜRK BODuN KaNIN BULMaYıN_)
    > ...rü sakınmatı "Türük bodunug ölüräyin, urugsıratayin!" tir ärmiş. [s. 221] # s. 221 — TALAT TEKİN (basılı sayfa numarası 222) # Tunyukuk Yazıtı (725 ?) ## I. Batı Yüzü (1) Bilgä Tuñukuk, bän özüm, Tabgaç iliŋä kılıntım. Türk bodun Tabgaçka körür ärti. (2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerintä (4) bod kalmadı. Ida taşda kalmiş...
  - `Ata 2011, s. 146` (eslesen: _TÜRK BODuN KaNIN BULMaYıN_)
    > ...şi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti 138 [s. 146] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz c. türk sir bodun yerinte idi yorımazun d. tögültün yazı konayın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp...
  - `Olmez 2017, s. 59` (eslesen: _TÜRK BODuN KaNIN BULMaYıN_)
    > ...) **{-(X)pAn} :** *tavgaç ātin tutupan* "Çinlilere özgü unvanları kullanarak" (KT D 7); *ėçim kagan olorupan* "Amcam hakan tahta oturup" (KT D 16) **{-(X)yIn} :** *ötüken yėrig konmiş tėyin eşidip* "Ötüken topraklarına yerleştiğimizi duyan" (T 17); *türk bodun kanin bulmayin tavgaçda adrıltı* "Türk halkı hanını bulamadığı için Çin'den ayrıldı" (T 2) **{-mAtI(n)} :** *kaganıŋın savin almatin yėr sayu bardıŋ* "hakanının sözlerini dikkate almayıp her yöne gittin." (KT G 9); [s. 62] # s. 060 — Mehmet Ölmez (basılı sayfa numarası...
  - `Ata 2011, s. 139` (eslesen: _TÜRK BODuN KaNIN BULMaYıN_)
    > ...atın yir sayu bardıg c. [[s. 138]] bilig bilmez kişi ol sabıg alıp yagru barıp üküş kişi öltüg d. yeti yüz kişig uduzugma ulugı şad erti e. yadag yabız boltı tip algalı kelti [s. 139] 6. Aşağıdaki ifadelerin hangisinde 1. tekil kişi çekimi kullanılmıştır? a. türk bodun kanın bulmayın tabgaçda adrıltı b. tabışgan yeyü olurur ertimiz c. türk sir bodun yerinte idi yorımazun d. tögültün yazı konayın e. sabımın tüketi eşidgil 7. Aşağıdaki sözcüklerin hangisinde sıfat-fiil eki kullanılmıştır? a. yitü b. barıp c. teyin d. bolça e. korıgu 8. Aş...


## TY1-B-2#2 - Tonyukuk Yazıtı, Batı 2. satir  (6 kelime)

- **transkripsiyon:** `KaNLaNDI : KaNIN : KODuP : TaBGaÇKA : YaNA : İÇiKDİ`
- **kelime karsiliklari:** KAĞANLANDI : KAĞANI : KOYUP : TABGAÇA : YANA : İÇİKDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _KaNIN KODuP TaBGaÇKA YaNA_)
    > ...len RR ARA * “pek çok” yani ertinğü metnin aslında iki kez yazılmış. [s. 43] TUNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülü...
  - `Tekin 2003, s. 148` (eslesen: _KaNIN KODuP TaBGaÇKA YaNA_)
    > ...rim, oğullarım, (sonra) birleşik boyum ve halkım,...” (KT G 1) **345.** *yana* < *yan-* “dönmek”: - *yagı bolup itinü yaratunu umadok yana içikmiş* “Düşman olmuş, (fakat) kendini düzene sokup (iyi) örgütlenememiş, yine (Çinlilere) bağımlı olmuş” (KT D 10) - *kanin kodup tabgaçka yana içikdi* “Hanını bırakıp Çin’e yeniden bağımlı oldu” (T 2) [s. 149] # s. 149 — ORHON TÜRKÇESİ GRAMERİ *kara türgiş bodunug anta ölürmiş almış yana yorıp...* “Türgiş avam halkını orada öldürmüş, almış. Yine yürüyüp...” (KT D 40), vb. Öbür sayı zarfları *ekin...
  - `Olmez 2017, s. 55` (eslesen: _KaNIN KODuP_)
    > ...ka tegi süledim* "Doğuda Şantung ovasına kadar sefer ettim" (KT G 3); *uygur yėrinte yaglakar kanta keltim* "Uygurların ülkesinden Yağlakar Han'dan geldim." (S 1); *ol töröde üze eçim kagan olortı* "Gelenekler üzre amcam hakan tahta çıkmış." (BK D 14); *kanin kodup tavgaçka yana içikdi* "(Sonra da) hanını terkedip yine Çin hakimiyetine girdi." (T 2); [s. 56] # s. 056 — Mehmet Ölmez (basılı sayfa 58) *alp erin balbal kışdı* "Güçlü adamlarını balbal yaptı." (O B 3); *anta kėsre kaŋım kagan uçdı* "Daha sonra babam haka...
  - `Ata 2011, s. 189` (eslesen: _KaNLaNDI_)
    > ...aşağıdaki cümleye göre cevaplandırılacaktır. [Türk bodun kanın bulmayın tabgaçda adrıltı kanlantı] 1. Yukarıdaki cümlenin Türkçe doğru karşılığı aşağıdakilerden hangidir? a. Türk halkı döktüğü kanı bulamadan Çin’den ayrıldı, daha sonra kanlandı. b. Türk ileri gelenleri hükümdarını bulamayarak Sogd ülkesinden ayrıldı, hakan sahibi oldu. c. Türk halkı hükümdarının kime hükmettiğini bulamayarak Çin’den ayrıldı, kağan sahibi oldu. d. Türk halkı döktüğü kanın kim(ler)...
  - `Tekin 1998, s. 40` (eslesen: _TaBGaÇKA_)
    > ...zdum ............... dağa tırmandılar. Uygur'ların Elteber'i yüz kadar adamla doğuya [s. 40] 76 BİLGE KAĞAN YAZITI tlezip bardı ................ 1. AD .SS) Terane ezerek |ti Tülfrlük bodun, âç erti. Ol yılkığ alıp iğittim. Otuz artukı tört yaşıma Oğuz tezip Tabgaçka kirti. Ökünüp süledim. Sukun |1............ olğlın yutuziın anta altım. Eki Elteberliğ bodlfun ............... | (D 39) Tesirli öneme | Tlfatabliı bodun Tabgaç kağanka körti. Yalabaçı, edgü sabı ötüği kelmez tiyin yayın süledim. Bodunuğ anta buzdum; yılkfıs...
  - `Tekin 2003, s. 130` (eslesen: _TaBGaÇKA_)
    > ..."yedi adam" (O 5) *biş yüz ärän* "beş yüz adam" (BK G 11) 2. Üçüncü kişi iyelik eki ile ad olarak: *ekisin özi altızdı* "İkisini (de) kendisi aldırttı" (KT D 38) 3. Eylemin süresini ya da sıklık derecesini gösteren bir zarf tümleci olarak: *ilteriş kagan... tabgaçka yeti yegirmi süŋüşdi, kıtańka yeti süŋüşdi, oguzka beş süŋüşdi* "İlteriş Hakan ... Çinlilerle on yedi (kez) savaştı, Kıtay ile yedi (kez) savaştı, Oğuzlarla da beş (kez) savaştı" (T 48-49) *kül tigin bir kırk yaşayur ärti* "Prens Kül (o zaman) otuz bir yaşınd...


## TY1-B-2#3 - Tonyukuk Yazıtı, Batı 2. satir  (3 kelime)

- **transkripsiyon:** `TeŊRİ : aNÇA : TiMiŞ`
- **kelime karsiliklari:** TANRI : ANCA : DEMİŞ
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _aNÇA TiMiŞ_)
    > ...ler, Tabgaç âtın tutupan Tabgaç kağanka (D 8) körmiş. Eliğ yıl işiğ küçüğ birmiş. [[s. 22]] İlgerü, kün tuğsıkda Bükli kağanka teği süleyü birmiş, kurığaru Temir Kapığka teği süleyü birmiş; Tabgaç kağanka ilin törüsin alı birmiş. Türük kara kamağ (D 9) bodun ança timiş: “İlliğ bodun ertim; ilim amtı kanı? Kemke iliğ kazganur men?” tir ermiş. “Kağanlığ bodun ertim; kağanım kanı? Ne kağanka işiğ küçüğ birür men?” tir ermiş. Ança tip Tabgaç kağanka yağı bolmış. (D 10) Yağı bolup, itinü yaratunu umaduk, yana içikmiş. [[s. 22]]...
  - `Tekin 2003, s. 209` (eslesen: _aNÇA TiMiŞ_)
    > ...- *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Orada kalmış olanlarınız her yöne doğru (gitgide) zayıflayarak ve ölerek yürüyor idiniz" (KT G 9), vb. 5. Özne ad öbeği: - *bodun boguzi tok ärti* "Halkın boğazı tok idi" (T 8) - *türük kara kamag bodun / ança timiş* "Türk avam tabakası şöyle demiş" (KT D 8-9), vb. 6. Özne yüklemli bir yapı (cümle): [s. 210] # s. 210 — TALAT TEKİN *türük bodun tämir kapıgka tinsi oglı aytıgma tagka tägmiş / idi yok ärmiş* "Türk halkının Demir Kapı'ya ve Tensi oğlu (Tanrı oğlu) denilen...
  - `Radloff, s. 219` (eslesen: _TeŊRİ aNÇA_)
    > ...)" demeyi ihmal etmemişler. [[s. 219]] Dikkate değer ki bu yazıtların birçok yerinde "tanrı" adı tek başına, başka tanrılarla . (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün ... ; özümni ol tengri kağan olurttı; tengri anca temiş ... gibi). "Tanrı" adı bazan "yer", "gök" ve ba zan "yer-su" ile beraber zikroluyor (gök tengri, asra yağız yer ... ; tengri yer bulgakın üçün ... ; Türk tengrisi Türk ıduk yer subı an- [s. 220] ca itmiş ... ; üze tengri asra yer yarlıkaduk üçün ... )....
  - `01_Abdulkadir_Inan_Tarihte_ve_Bugun_Samanizm, s. 32` (eslesen: _TeŊRİ aNÇA_)
    > ...[[s. 32]] ) ” demeyi ihmal etmemişler* Dikkate değer ki bu yazıtların birçok yerinde “ tanrı” adı tek başına, başka tanrılarla (yer-su, gök) karıştırmadan, söylenmektedir (tengri il berigme tengri; tengri yarlıkaduk üçün. . . ; özümni ol tengri kağan olurttı; tengri ança temiş. , . gibi). “ Tanrı” adı bazan “ yer” , “gök” ve bazan “ yer su” ile beraber zikroluyor (gök tengri, asra yağız y e r .. . ; tengri yer bulgakm ü çü n .. . ; Türk tengrisi Türk ıduk yer subı ança itm iş.. . [[s. 32]] ; üze tengri asra yer yarlıkaduk ü ç...
  - `Tekin 1998, s. 1` (eslesen: _TeŊRİ_)
    > ...[s. 1] Üze kök tengri, asra yağız yer kılıntukda, ekin ara kişi oğlu kılınmış. rl CANA “ “Üstte mavi gök, altta yağız yer yaratıldığında, ikisinin arasında insanoğulları yaratılmış.” Bu sözler bilinen en eski Türkçe yazılı anıtlara, Moğolistan'da Orhon Irmağı kıyısında bulunan la...
  - `Ergin 1970, s. 9` (eslesen: _TeŊRİ_)
    > ...retmişlerdir. Bu atlas yayınları ile âbidelerin okunması çalışmaları hızlanmış ve daha başka yazıları da çözmüş bulunan Danimarkalı büyük âlim Thomsen, kısa bir zaman sonra, 1893'te Orhun yazısını çözmeğe muvaffak olmuştur. [[s. 9]] Önce, âbidelerde çok geçen tengri, Türk ve Kül Tigin kelimelerini çözen Thomsen, sonra bütün âbideleri okumuş ve böylece Türk milletinin, ebedî minnettarlığına mazhar olmuştur. M U H A R R E M E R G İ N [s. 10] Artık bu çözümden sonra bir yandan Thomsen, bir yandan Radloff âbidelerin metni...


## TY1-B-2#4 - Tonyukuk Yazıtı, Batı 2. satir  (3 kelime)

- **transkripsiyon:** `eRiNÇ : KaN : BiRTiM`
- **kelime karsiliklari:** GERÇEK : KAĞAN : VERDİM
- **kanit:**
  - `Tekin 1998, s. 22` (eslesen: _eRiNÇ KaN_)
    > ...k bodun ölüreyin, uruğsıratayın” tir ermiş. Yokadu barır ermiş. Üze Türük Teüğrisi, Türük ıduk yiri (D 11) subı ança etmiş: Türük bodun yök bolmazun tiyin, bodun bolçun tiyin, kanğım İlteriş Kağanığ öğüm İlbilge Katunuğ tengri töpüsinte tutup yüğerü kötürmiş erinç. Kangım Kağan yiti yeğlir)mi erin taşıkmış. [[s. 22]] Taşra (D 12) yorıyur tiyin kü eşidip balıkdakı tağıkmış, tağdakı inmiş, tirilip yet- ORHON YAZITLARI 41 Ondan sonra, erkek kardeşleri hükümdar (D 5) olmuşlar şüphesiz, oğulları hükümdar olmuşlar şüphesiz. Onda...
  - `Ata 2011, s. 52` (eslesen: _eRiNÇ KaN_)
    > ...ır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń...
  - `Olmez 2017, s. 20` (eslesen: _eRiNÇ KaN_)
    > ...nuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmış.* "Belli ki Türk halkı yok olmasın diye, halk olsun diye babam Eltėriş Kağanı, annem Elbilge sultanı göğün tepesinden çekip yükselt...
  - `Ata 2011, s. 45` (eslesen: _eRiNÇ KaN_)
    > ...sıl bir araya getirdiği, KT D10-13’te ve BK D10-12’de şu şekilde anlatılır: türük teŋrisi türük ıduk yiri subı ança etmiş erinç türük bodun yok bolmazun tiyin bodun bolçun tiyin kaŋım ilteriş kaganıg ögüm ilbilge katunug teŋri töpüsinte tutup yügerü kötürti erinç kaŋım kagan yeti yegirmi erin taşıkmış taşra yorıyur tiyin kü eşidip [[s. 45]] balıkdakı tagıkmış tagdakı inmiş tirilip yetmiş er bolmış teŋri küç birtük üçün kaŋım kagan süsi böri teg ermiş yagısı koń teg ermiş ilgerü kurıgaru sülep tirmiş kubratmış kamagı yeti...
  - `Tekin 1998, s. 23` (eslesen: _BiRTiM_)
    > ...mız erti. Bilmedükin| (D 19) üçün, bizinge yangğıl<t>ukın üçün, kağanı ölti, buyrukı beğleri yeme ölti. On-Ok bodun emgek körti. Eçümiz apamız tutmiş yir sub idisiz bolmazun tiyin Az bodunuğ itip yarlatıp .. TEL i SM | (D 20) Bars beğ erti. Kağan at bunta biz birtimiz. [[s. 23]] * törüsin yerine ORHON YAZITLARI 43 Tanrı güç vermiş (olduğu) için, babam hakanın askerleri kurt gibi imiş, düşmanları (da) koyun gibi imiş. Doğuya (ve) batıya sefer edip (adam) toplamış (ve) yığmış. (Sonunda) hepsi (D 13) yedi yüz kişi olmuşl...
  - `Tekin 2003, s. 107` (eslesen: _BiRTiM_)
    > ...esne durumu eki iyelik eksiz gövdelerde {+(X)g}, iyelik ekli gövdelerde de {+(I)n} biçimindedir. Belirli nesne durumu çok seyrek olarak {+nI} eki ile de kurulur. Belirli nesne durumunda adlar belirli nesneyi gösterir. **260.** {+(X)g}: *kagan at+ıg bunta biz birtimiz* “Hakan unvanını (ona) burada biz verdik” (BK D 17) = *kagan at bunta biz birtimiz* (KT D 20) *siŋlim kunçuy+ug birtimiz* “(Ona) kız kardeşim prensesi verdik” (KT D 20) [s. 108] # s. 108 — TALAT TEKİN *agır taş+ıg yogan ı+g türük bäglär bodun... [kälür]ti...


## TY1-B-3#1 - Tonyukuk Yazıtı, Batı 3. satir  (3 kelime)

- **transkripsiyon:** `KaNıŊıN : KODuP : İÇiKDiŊ`
- **kelime karsiliklari:** KAĞANI : KOYUP : İÇİKDİN
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _KaNıŊıN KODuP İÇiKDiŊ_)
    > ...UNYUKUK YAZITI BİRİNCİ TAŞ (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad”...
  - `Tekin 2003, s. 209` (eslesen: _KaNıŊıN KODuP İÇiKDiŊ_)
    > ...in idik" (T 16) - *biz / az biz* "Biz azız" (O ön 7), vb. [s. 209] # s. 209 — ORHON TÜRKÇESİ GRAMERİ Özne zamir sık sık ihmal edilir, çünkü o zaten sona alınmış zamirden ya da eylem asıllı yüklemden anlaşılır: - *kan bertim* "(Ben sana) han verdim" (T 2) - *kanıŋin kodup içikdiŋ* "(Sen) hanını bırakıp (yine Çin'e) bağımlı oldun" (T 3) - *karlukug ölürtümüz, altımız* "(Biz) Karlukları öldürdük, zapt ettik" (KT K 2) - *uça bardıgız* "(Siz) vefat ettiniz", (*harf.* "uçup gittiniz") (KT GD), vb. 3. Özne bir eylem adı: - *tün udısıkım kä...
  - `Ata 2011, s. 145` (eslesen: _KaNıŊıN KODuP İÇiKDiŊ_)
    > ...r men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış...
  - `Ata 2011, s. 138` (eslesen: _KaNıŊıN KODuP İÇiKDiŊ_)
    > .... oguzug ölürteçik tir men c. bu yolun yorısar yaramaçı d. türük bodun ölsikig e. beŋgü il tuta olurtaçı sen 3. Aşağıdaki ifadelerin hangisinde 2. tekil kişi çekimi yoktur? a. türük bodun öltüg b. bu sabımın edgüti eşid katıgdı tıŋla c. [[s. 138]] kan bertim kanıŋın kodup içikdiŋ d. türük bodun ölsikig e. kagan mu kışayın tedim sakıntım 4. Aşağıdaki ifadelerin hangisinde geniş zaman ve şimdiki zamanın hikâyesi vardır? a. köl tigin bir kırk yaşayur erti b. ańıg bilig anta öyür ermiş c. katun yok bolmış erti d. yok boltaçı erti e. işig...


## TY1-B-3#2 - Tonyukuk Yazıtı, Batı 3. satir  (4 kelime)

- **transkripsiyon:** `İÇiKDÜK : ÜÇüN : TeŊRİ : ÖLüTMüŞ`
- **kelime karsiliklari:** İÇİKDİĞİN : İÇİN : TANRI : ÖLDÜRMÜŞ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _İÇiKDÜK ÜÇüN_)
    > ...Ş (B 1) Bilge Tuniyukuk, ben özüm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!”...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 63` (eslesen: _ÜÇüN TeŊRİ_)
    > ...ETLİ OLANLAR Aya, avuç içi. Yuva, kuş yuvası. Kardeş, hısım. Şu sözde de gelmiştir : (4)Basma nüshada nak kıldı" şeklinde çıkan bu kelime yazma nüshada doğru olarak . Şi kaldı'dır. B.A, [y. 63] aba aba aba aba Abı oba obu ata ata eçe SLİM a ENE Tawar uçun Tenğri odhlamağhıp Uya kadaş oğlını çınla boğar "Mal için, Tanrıyı aklına getirmeyip kardeş oğlunu gerçekten boğar". (Kardeşler arasındaki saygısızlığı anlatmak için : Kişi ancak gözüne malı almıştır. Allahtan korkmadan mal için kardeş çocuğunu boğar) demek istiyor...
  - `05_Ceren_Sungur_Samanizm_ve_Islam, s. 21` (eslesen: _ÜÇüN TeŊRİ_)
    > ...ğulları ölümlü yaratılmışlar. Bir imparatorluğun Dini mi Yoksa Şamanik Dünya Görüşü mü? Yazıtlar incelendiğinde ortaya çıkan işlevler sistemi, im paratorluğa en güçlü ve en yaygın bağları olanın Tengri ol duğunu gösterir. [[s. 21]] Cevaplanacak ilk soru bu sonucun tengrici liği tek tanrılı bir imparatorluk dini olarak adlandırmak için sağlam bir temel sağlayıp sağlamadığıdır.12 Ancak, bu me seleyi ele almadan önce, her ne kadar terimin çok genel bir tatbikine izin veren yeterli tanımlamalara sahip olsa da din terimini kullanm...
  - `Tekin 1998, s. 1` (eslesen: _TeŊRİ_)
    > ...[s. 1] Üze kök tengri, asra yağız yer kılıntukda, ekin ara kişi oğlu kılınmış. rl CANA “ “Üstte mavi gök, altta yağız yer yaratıldığında, ikisinin arasında insanoğulları yaratılmış.” Bu sözler bilinen en eski Türkçe yazılı anıtlara, Moğolistan'da Orhon Irmağı kıyısında bulunan la...
  - `Ergin 1970, s. 9` (eslesen: _TeŊRİ_)
    > ...retmişlerdir. Bu atlas yayınları ile âbidelerin okunması çalışmaları hızlanmış ve daha başka yazıları da çözmüş bulunan Danimarkalı büyük âlim Thomsen, kısa bir zaman sonra, 1893'te Orhun yazısını çözmeğe muvaffak olmuştur. [[s. 9]] Önce, âbidelerde çok geçen tengri, Türk ve Kül Tigin kelimelerini çözen Thomsen, sonra bütün âbideleri okumuş ve böylece Türk milletinin, ebedî minnettarlığına mazhar olmuştur. M U H A R R E M E R G İ N [s. 10] Artık bu çözümden sonra bir yandan Thomsen, bir yandan Radloff âbidelerin metni...
  - `Ata 2011, s. 47` (eslesen: _TeŊRİ_)
    > ...ani Bumın Kağan’ın ilk devleti kurmasından yaklaşık 180 yıl sonra dikilen Köl Tigin Yazıtı doğu yüzü 1. satırı ile Bilge Kağan Yazıtı doğu yüzü 2. satırından itibaren Köktürk Kağanlığı’nın kurulması, Bilge Kağan’ın ağzından şu şekilde anlatılır: üze kök teŋri asra yagız yer kılındukta ekin ara kişi oglı kılınmış kişi oglınta üze eçüm apam bumın kagan iştemi kagan olurmış olurupan türük bodunıŋ ilin törüsin tuta birmiş iti birmiş tört buluŋ kop yagı ermiş sü sülepen tört buluŋdakı bodunug kop almış kop baz kılm...


## TY1-B-3#3 - Tonyukuk Yazıtı, Batı 3. satir  (4 kelime)

- **transkripsiyon:** `eRiNÇ : TÜRK : BODuN : ÖLTİ`
- **kelime karsiliklari:** GERÇEK : TÜRK : BOYLARI : ÖLDÜ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _eRiNÇ TÜRK BODuN ÖLTİ_)
    > ...üm, Tabgaç ilinge kılıntım. Türk bodun Tabgaçka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk...
  - `Tekin 2003, s. 221` (eslesen: _TÜRK BODuN ÖLTİ_)
    > ...än özüm, Tabgaç iliŋä kılıntım. Türk bodun Tabgaçka körür ärti. (2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerintä (4) bod kalmadı. Ida taşda kalmişi kubranıp yeti yüz boltı. Eki ülügi atlıg ärti, bir ülügi yadag ärti. Yeti yüz kişig (5) uduzugma ulugı Şad ärti. "Aygıl!" tedi. Ayıgmasi bän ärtim, Bilgä Tuñukuk. "Kagan mu kışayi...
  - `Ata 2011, s. 123` (eslesen: _eRiNÇ TÜRK_)
    > ...men “Beni, Oğuz’u mutlak öldürecektir diyorum” T 10-11 Yukarıda görülen pekiştirmeli yapılar üzerine bir daha ok/ök edatı gelebilir. yańduk yolta yeme ölti-k ök “bozguna uğrayıp dağılanlar yollarda yine ölüp kaldılar” T16 Olasılık Edatı (erinç) Türkçeye “herhalde, muhakkak, şüphesiz ki” olarak çevrilen ve kuvvetli bir olasılık bildiren edattır. Çoğunlukla -mIş ekli geçmiş zamanla kullanılır. anta kisre inisi kagan bolmış erinç oglıtı kagan bolmış erinç “ondan sonra erkek kardeşleri kağan olm...
  - `Tekin 2003, s. 122` (eslesen: _TÜRK BODuN_)
    > ...halkı, öleceksin!" (KT G 8) *ol yerimin subumın konar köçär bän* "O topraklarımda ve sularımda konup göçerim" (Tar. B 4) c) *ol* zamiri yüklem bağlayıcısı olarak da kullanılır: *bilgä tuñukuk añıg ol üz ol* "Bilge Tunyukuk aksi mizaçlıdır, öfkelidir" (T 3) *[türk boduni yämä] bulganç ol [tem]iş oguzi yämä tarkınç ol* "Türk halkı kargaşa içindedir, Oğuzları da huzursuzdur demiş" (T 22) *yaşıl kaya yaylagım kızıl kaya kışlagım ol* "Yeşil kaya benim yaylam, kızıl kaya (da) kışladığım yerdir" (IB 51) *añıg ädgü ol* "(Bu fal) ço...
  - `Ata 2011, s. 127` (eslesen: _TÜRK BODuN_)
    > ...gittim e. kanın öltürdümüz 4. Aşağıdaki ifadelerin hangisinde yönelme durumu eki kullanılmamıştır? a. atıg ıka bayur ertimiz b. temir kapıgka tegi süledim c. yazıŋa oguzgaru sü taşıkdımız d. sekiz yegirmi yaşıma tegi e. azkıńa türk bodun yorıyur ermiş 5. Köktürkçede 1. tekil kişi zamirinin bazen ben bazen men şeklinde söz başında /b/ ve /m/’li gelişinin sebebi aşağıdakilerden hangisidir? a. Köktürkçede /b/ ile başlayan tek heceli kelimelerde /b/ > /m/ nöbetleşmesinin olm...
  - `Olmez 2017, s. 20` (eslesen: _TÜRK BODuN_)
    > ...da da anlatıldığı gibi, Eltėriş Kağan 17 kişiyle başkaldırmış, isyanı duyan çevredekiler de buna katılıp sayıları 70 kişiyi bulmuş, sonuçta da isyan Türklerin yok olmasını istemeyen, bir kavim olmasını isteyen Göğün/Tanrı'nın yardımıyla başarıya ulaşmıştır: *Türk bodun yok bolmazun tėyin, bodun bolçun tėyin, kaŋım ėltėriş kaganıg ögüm ėlbilge katunug teŋri töpösinte tutup yügerü kötürmiş erinç. Kaŋım kagan yėti yėgirmi erin taşıkmış. Taşra yorıyur tėyin kü eşidip balıkdakı taşıkmış. Tagdakı ėnmiş, tėrilip yetmiş er bolmı...


## TY1-B-3#4 - Tonyukuk Yazıtı, Batı 3. satir  (3 kelime)

- **transkripsiyon:** `aLKıNDI : YOK : BOLDI`
- **kelime karsiliklari:** ALKINDI : YOK : OLDU
- **kanit:**
  - `Tekin 2003, s. 75` (eslesen: _aLKıNDI_)
    > ...< **bizindä* - *başınta* "başında" (IB 57) < **başında* - *bodunta* "halkın (üzerine)" (KT D 26, vb.) < **bodunda* - *kaganta* "(Çin) imparatorundan" (KT K 12, vb.) < **kaganda* - *örpäntä* "Örpen'de" (BK D 26) - *alkıntı* "yok oldular, mahvoldular" (T 3) < **alkındı* - *yükünti* "baş eğdi, boyun eğdi" (T 28, 43, 46) < **yükündi* - *kazgantok* "kazandığı(1)" (T 61, BK D 33) < **kazgandok* - *ötüntök* "arz ettiğim" (T 15) < **ötündök* - *säçlintim* "ayrıldım" (Kızıl Çıra I 2) < **säçlindim* İstisnalar: *käçändä* "Keçen'de...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...
  - `Roux, Eski Din, s. 247` (eslesen: _BOLDI_)
    > ...am gerek ortaçağ sözlüklerinde gerekse Codex Comanicus'ta aynı şekilde yer alnuştır (B. 7, s. 263; B.11, s. 205). [[s. 247]] Halen ölüme uçan ruhun shungkur, sungur şeklinde algılannuş olup olmadığını saptama olanağınuz yok, ancak "öldü" demek yerine shungkur boldi, "sungur haline geldi" deyiminin İslam dinini kabul ettikten sonra bile Batı Türklerinde kullanıldığı görülmektedir (0.8, s. 15). Babür bu deyimi kendi döneminde kullannuştır. Bu deyim sadece büyükler için mi kullanılmaktadır? [[s. 247]] Bu konuda herhangi bi...
  - `Ata 2011, s. 131` (eslesen: _BOLDI_)
    > ...LER Sıfat-fiiller, fiilin sıfat şekilleridir, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. [s. 131] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gözüm görmez gibi” KT K10...
  - `Ogel C1, s. 334` (eslesen: _BOLDI_)
    > ...olmuştur *. Aynı burç adları Kutadgu-Bilig'de de vardır. Fakat KutadguBilig'deki burç adları daha ziyade eski telâffuzlara ve Uygur üslübuna göre yazılmıştır. [[s. 334]] Mesela şu mısrada, bu burçların durumu çok güzel bir şekilde anlatılmaktadır : Basa Ülgü boldı, Çadhan, Ya eşi?, “Terazi, Çıyan, yani Akreb burçları ile Yay burcu, yine oldular eş ve arkadaş”, * Aynı esr., HI, s. 1. 5 Aynı esr., s. 4. * Aynı esr., 1l1, 4-6. ? Kutadgu-Bilig, Radlof neşr., 16, 10; R. Arat neşr., s. 30, 140. [s. 335] 324 TÜRK MİTOLOJ...
  - `Ogel C2, s. 26` (eslesen: _BOLDI_)
    > ...mmedi(emükemmedi). Annesinin südü ise, hiçdamlamadı (südi tammadı). Ancak annesi Müslüman olduktan sonra, O ğuz süt istedi (tiledi). [[s. 26]] Annesi de, oğlunun başını silip, okşayarak, ona süt verdi (emüzdi)**...'”” Bir yıl sonra oğlan büyüdü, (oğlan ulug boldı)... 8) “*..Yeni doğan çocuk, (yani Sayın Batur),annesinin verdiği memeyi emmedi: (Emçek berse emmedi). Et verdiler, yemedi. Belki annesinin yaşlılığı, onun hoşuna gitmedi... No g a y halkı düşündü (kengeşip), üç günde bir kısrak kestirdi. Böylece (doğan çocu...


## TY1-B-3#5 - Tonyukuk Yazıtı, Batı 3. satir  (4 kelime)

- **transkripsiyon:** `TÜRK : SİR : BODuN : YiRİNTE`
- **kelime karsiliklari:** TÜRK : SİR : BOYLARININ : YERİNDE
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _TÜRK SİR BODuN_)
    > ...çka körür erti. (B 2) Türk bodun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntı...
  - `Tekin 2003, s. 113` (eslesen: _TÜRK SİR BODuN_)
    > ...a yol+ta* "yurtta ve yollarda" (KT K 9) *bodun+ta üzä* "halkın üzerine" (KT D 26) *tabgaç kagan+ta* "Çin İmparatorundan" (KT G 11) *yarıkın+ta yalmasın+ta* "zırhından ve kaftanından" (KT D 33) *toŋa tigin yogın+ta* "Prens Tonga'nın cenaze töreninde" (KT K 7) *türk sir bodun yerin+tä* "Türk Sir halkının ülkesinde" (T 3, 60) *yırdın+ta yan* "kuzey taraftan" (T 11) *erig yer+tä* "kolayca erişilen yerde" (KT G 13, 13; BK K 15), fakat genellikle *yer+dä, yir+dä*. 3. {+tAn}. Birkaç yer zarfında görülür: *taşdın+tan* "dışarıdan" (MÇ G...
  - `Ata 2011, s. 113` (eslesen: _TÜRK SİR BODuN_)
    > ...te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gö...
  - `Ata 2011, s. 106` (eslesen: _TÜRK SİR BODuN_)
    > ...köz+de yaş kelser tıda köŋül+te sıgıt kelser yanturu KT K11 “gözden yaş kelirse engel olarak, gönülden feryat kelirse geri çevirerek” ekin sü eb+de erti BK D32 “ikinci ordu yurtta idi” tabgaç kagan+ta bedizçi kelürtüm KT G11 “Çin hakanından ressam getirttim” türk sir bodun yer+i+n+te T 3 “Türk Sir halkının ülkesinde” il+te buŋ yok KT G3 “ilde sıkıntı yok” 6. [[s. 106]] Eşitlik Durumu (Ekvatif): +çA süsi bolçuda ot+ça bor+ça kelti KT D37 “ordusu Bolçu’da ateş gibi kasırga gibi geldi” köŋl+üŋ+çe uduz T 15 “(orduyu) gönlünce sevk...
  - `Kafesoglu, s. 58` (eslesen: _TÜRK SİR BODuN_)
    > ...Peçenek'ler (aş. bk.) ve ihtimal Kıpçak-Kuman'lar (aş. bk.)vb. 7. Kırgız'lar. Baykal'm batısında, Yenisey nehrinin kaynakları bölgesinde idiler (aş. bk.). Burada Sir-tarduş olarak geçen ve Bilge kitâbesindeki (1 defa) "Sir Tokuz-Oğuz" ve Tonyukuk kitabesinde Türk Sir bodun" şeklinde (5 defa) kullanılan Sir (veya sır/=sıra/, şir?) [[s. 58]] deyimi (şimdiye kadar verilen çeşitli mânalar: iyi, astt, batı, sülâle, birUşik) arasında en isabetlisi "birleşik" olsa gerektir. Bu mâna devlet yapısı ile açıklanabilir (bk. Sir-yabgu). K. C...


## TY1-B-4#1 - Tonyukuk Yazıtı, Batı 4. satir  (7 kelime)

- **transkripsiyon:** `BOD : KaLMaDI : IDA : TaŞDA : KaLMıŞI : KUBRaNıP : YiTİ`
- **kelime karsiliklari:** BOY : KALMADI : UZAKTA : DIŞDA : KALMIŞI : TOPLANIP : YEDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BOD KaLMaDI IDA TaŞDA_)
    > ...odun, kanın bulmayın Tabgaçda adrıltı, kanlantı; kanın kodup Tabgaçka yana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B...
  - `Tekin 2003, s. 221` (eslesen: _BOD KaLMaDI IDA TaŞDA_)
    > ...(2) Türk bodun kanin bulmayin Tabgaçda adrıltı, kanlantı. Kanin kodup Tabgaçka yana içikdi. Täŋri ança temiş ärinç: "Kan bertim; (3) kanıŋin kodup içikdiŋ." İçikdök üçün Täŋri "Öl!" temiş ärinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerintä (4) bod kalmadı. Ida taşda kalmişi kubranıp yeti yüz boltı. Eki ülügi atlıg ärti, bir ülügi yadag ärti. Yeti yüz kişig (5) uduzugma ulugı Şad ärti. "Aygıl!" tedi. Ayıgmasi bän ärtim, Bilgä Tuñukuk. "Kagan mu kışayin?" tedim, sakıntım: "Toruk būkalı sämiz būkalı ırakda (6) bilsär, sämiz...
  - `Tekin 2003, s. 170` (eslesen: _IDA TaŞDA KaLMıŞI KUBRaNıP_)
    > ...lkının (daha önce) Demir Kapı'ya ve Tensi oğlu denilen dağa (kadar) ulaştığı hiç yok imiş" (T 46-47) *anta kalmişi yir sayu kop toru ölü yorıyur ärtig* "Oralarda (nasılsa) sağ kalmış olanlarınız her yönde bitkin ve mecalsiz bir halde yürüyor idiniz" (KT G 9) *ıda taşda kalmişi kubranıp yeti yüz boltı* "Dağda bayırda kalmış olanları toplanıp yedi yüz (kişi) oldu" (T 4) 2. Eylem sıfatı olarak: *elsirämiş kagansıramiş bodun* "devletsiz ve hakansız kalmış halk" (KT D 13) *yir sayu barmiş bo[dun]* "her yere gitmiş halk" (BK D 22) *igidmiş kagan...
  - `Ata 2011, s. 146` (eslesen: _IDA TaŞDA KaLMıŞI KUBRaNıP_)
    > ...fadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. ut- b. u- c. it- d. aç- e. al- 10. Tasvirî fiilli birleşik fiil yapılarında, asıl fiil üzerine gelen eklerden hangis...
  - `Ata 2011, s. 139` (eslesen: _IDA TaŞDA KaLMıŞI KUBRaNıP_)
    > ...8. Aşağıdaki ifadelerin hangisinde sıfat-fiil eki kullanılmamıştır? a. bilir biligim bilmez teg boldı b. [[s. 139]] ırak erser yablak agı birür yaguk erser edgü agı birür c. bödke körügme begler gü yaŋıltaçı siz d. udıgmag odguru yatıglıg turguru yorır men e. ıda taşda kalmışı kubranıp yeti yüz boltı 9. Aşağıdaki fiillerden hangisi Orhun Türkçesinde kullanılan bir tasvir fiilidir? a. utb. uc. itd. açe. al- 10. Tasvirî fiilli birleşik fiil yapılarında, asıl fiil üzerine gelen eklerden hangisi fiili, tasvirî fiile bağlar? a. Zarf-fiil eki b...


## TY1-B-4#2 - Tonyukuk Yazıtı, Batı 4. satir  (6 kelime)

- **transkripsiyon:** `YÜZ : BOLDI : iKİ : ÜLüGİ : aTLıG : eRTİ`
- **kelime karsiliklari:** YÜZ [KİŞİ] : OLDU : İKİ : [B]ÖLÜĞÜ : ATLI : İDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _ÜLüGİ aTLıG eRTİ_)
    > ...ana içikdi. fefiğri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança...
  - `Tekin 2003, s. 130` (eslesen: _ÜLüGİ aTLıG_)
    > ..." (BK G 1) **283.** Asıl sayılar şu görevlerde kullanılır: [s. 130] # s. 130 — TALAT TEKİN 1. Bir ad ya da başka bir sayının niteleyicisi olarak: *bir ärig sançdı* "(Prens Kül) bir adamı mızrakladı" (KT K 5) *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) *eki ülügi atlıg ärti bir ülügi yadag ärti* "Onların üçte ikisi (*harf.* iki kısmı) atlı idi, üçte biri (*harf.* bir kısmı) piyade idi" (T 4) *eki ulug süŋüş* "İki büyük savaş" (BK D 34) *üç otuz balık* "yirmi üç şehir" (T 19) *yeti yüz* "700" (T 4) *eki bıŋ* "2000" (T 16, 18...
  - `02_Kasgarli_Mahmud_Divanu_Lugatit_Turk_Atalay_Cilt_1, s. 44` (eslesen: _BOLDI iKİ_)
    > ...onulan toprağa "öllük" derler. B.A. yi da Aİ! on N İyi ün izl an kanadıdır. [[y. 44]] Atlara bakan seyise " sk &l başı" derler, "vilâyetin başı" demektir; bununla ata bakan kimse murad edilir, İki Bey arasında barışıklık. " YS SW Şi SİL iki Beg birle 81 boldı - iki Bey birbiriyle barıştı", .» sh 81 kişi - kötü, değersiz kişi", "4k 81 kuş x kartala benziyen alacalı bir kuş". Karın şişkinliği, kursak bozukluğu, "ŞİŞ AŞIYI er um boldı - adam kursak bozukluğuna uğradı, adamın çok et yemekten midesi bozuldu, bulandı", Sa...
  - `Ata 2011, s. 138` (eslesen: _BOLDI_)
    > ...r, isim gibi çekime girerler. Ayrıca fiilin belirttiği eylemi yapanı da ifade ederler. 130 [s. 138] 1. -(X)r / -Ar geniş zaman sıfat-fiil eki “yapar, eder” anlamı katar: kör-ür közüm körmez teg bil-ir biligim bilmez teg boldı “gören gözüm görmez gibi, bilen aklım bilmez gibi oldu” KT K10 üze teŋri köbürgesi et-er+çe “yukarıda gök davulu gümbürder gibi” BK B4 2. -mAz sıfat-fiil eki, geniş zaman sıfat-fiili ekinin olumsuzudur: körür közüm kör-mez teg “gören gö...
  - `Tekin 2003, s. 124` (eslesen: _ÜLüGİ_)
    > ...ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışarısını tutmuş gibiyiz" (T 13), vb. [s. 125] # s. 125 — ORHON TÜRKÇESİ GRAMERİ ## Soru Zamirleri **275.** Soru zamirleri şunlardır...
  - `Olmez 2017, s. 63` (eslesen: _ÜLüGİ_)
    > ...ürk halkını derleyip ülke kuracağınızı buraya kazıdım" (KT G 10); *yayılıp ölsikijin yeme bonta urtum* "hata edip öleceğinizi de buraya kazıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Öl...


## TY1-B-4#3 - Tonyukuk Yazıtı, Batı 4. satir  (4 kelime)

- **transkripsiyon:** `BİR : ÜLüGİ : YaDaG : eRTİ`
- **kelime karsiliklari:** BİR : [B]ÖLÜĞÜ : YAYA : İDİ
- **kanit:**
  - `Tekin 1998, s. 43` (eslesen: _BİR ÜLüGİ YaDaG eRTİ_)
    > ...ri ança temiş erinç: “Kan bertim, (B 3) kanınğın kodup içikdinğ.” İçikdük üçün Teüğri “Öl!” temiş erinç. Türk bodun ölti, alkıntı, yok boltı. Türk Sir bodun yerinte (B 4) bod kalmadı. Ida taşda kalmışı kubranıp yeti yüz boltı. [[s. 43]] Eki ülüği atlığ erti, bir ülüği yadağ erti. Yeti yüz kişiğ (B 5) uduzuğma uluğı “Şad” erti. “Aygıl!” tidi. Ayığması ben ertim, Bilge Turiyukuk. “Kağan mu kışayın?” tedim, sakıntım: Toruk bükalı semiz bükalı ırakda (B 6) bilser, semiz büka, toruk buka teyin bilmez ermiş teyin ança sakıntım. Anta kisre,...
  - `Tekin 2003, s. 130` (eslesen: _BİR ÜLüGİ YaDaG_)
    > ....** Asıl sayılar şu görevlerde kullanılır: [s. 130] # s. 130 — TALAT TEKİN 1. Bir ad ya da başka bir sayının niteleyicisi olarak: *bir ärig sançdı* "(Prens Kül) bir adamı mızrakladı" (KT K 5) *bir atlıg barmiş* "Bir atlı gitmiş" (T 24) *eki ülügi atlıg ärti bir ülügi yadag ärti* "Onların üçte ikisi (*harf.* iki kısmı) atlı idi, üçte biri (*harf.* bir kısmı) piyade idi" (T 4) *eki ulug süŋüş* "İki büyük savaş" (BK D 34) *üç otuz balık* "yirmi üç şehir" (T 19) *yeti yüz* "700" (T 4) *eki bıŋ* "2000" (T 16, 18) Aşağıdaki üç örnek...
  - `Tekin 2003, s. 124` (eslesen: _ÜLüGİ_)
    > ...ve ordusu güle oynaya karargâha geliyor" (IB 3[?4]) 3. *käntü* ve *öz* zamirleri niteleyici olarak da kullanılır: *tokuz oguz bodun käntü bodunum ärti* "Dokuz Oğuz halkı kendi halkım idi" (KT K [?4]) *käntü bodunum* "kendi halkım" (MÇ D 2) *ançıp alku käntü ülügi ärklig ol* "Böylece, herkes kendi kaderinin sahibidir" (IB 6[?]) *öz (i)çi taşin tutmiş täg biz* "Kendi iç (kuvvetleriyle) dışarısını tutmuş gibiyiz" (T 13), vb. [s. 125] # s. 125 — ORHON TÜRKÇESİ GRAMERİ ## Soru Zamirleri **275.** Soru zamirleri şunlardır...
  - `Ata 2011, s. 138` (eslesen: _ÜLüGİ_)
    > ...-(X)gmA sıfat-fiil eki, ulandığı eyleme “yapan, eden” anlamı verir: il ber-igme teŋri “devlet veren Tanrı” KT D25 bödke kör-ügme begler gü yaŋıltaçı siz “Bu dönemde tabi olan beyler, (siz) yanılacak mısınız” KT G11 yeti yüz kişig uduz-ugma ulugı şad erti “yedi yüz kişiyi sevk eden büyükleri Şad idi” T 4-5 bu bitig biti-gme atısı yollug tigin “bu yazıları yazan, yeğeni Yolluğ Tigin” KT G13 bediz yarat-ıgma “süsleme yaratanlar (ressam ve heykeltıraşlar)” KT K13 4. -(I)glI sı...
  - `Olmez 2017, s. 63` (eslesen: _ÜLüGİ_)
    > ...ürk halkını derleyip ülke kuracağınızı buraya kazıdım" (KT G 10); *yayılıp ölsikijin yeme bonta urtum* "hata edip öleceğinizi de buraya kazıdım." (KT G 10-11) **{-(I)gmA} :** *kurıgaru barıgma bardıŋ* "Batıya gidenleriniz gittiniz" (KT D 24); *uduzugma uluğı şad erti* "kumanda edenlerin başı Şad unvanını taşıyordu." (T 5); *keligme beglerin bodunın* "Gelen beyleri ve halkı" (T 43); *... bitigme bonı yaratıgma bilge kutlug tarkan* "... yazan, yaratan Bilge Kutlug Tarkan" (Tar K 5) [s. 64] # s. 062 — Mehmet Öl...
  - `Tekin 1998, s. 10` (eslesen: _YaDaG_)
    > ...ç “iş güç”, kız koduz “kız kadın”, küfng kul “cariye ve köle, kul köle”, ölü yiti “öle yite, ölesiye”, tebliğ kürlüğ “hilekar ve sahtekar”, toru ölü “bitkin ve mecalsiz olarak, düşe kalka”, tünli künli “geceli gündüzlü”, yabız yablak “kötü ve berbat”, yadağın yalanğın “yayan ve çıplak, yayan yapıldak”, yarıkınta yalmasınta “zırhında kaftanında”, yir sub “yer ve su, ülke, anayurt”, [[s. 10]] yok çığany “yok yoksul”, yurtda yolta “dağda bayırda, yazıda yabanda” vb. gibi. Yazıtlarda eylem ikilemeleri de az deği...
