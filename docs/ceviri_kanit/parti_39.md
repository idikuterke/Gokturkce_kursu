# Ceviri istek paketi 39 - Orhun cumlecikleri

Kaynak veri: `docs/cumlecik-adaylari.json`  -  Bu pakette 3 cumlecik
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


## TY2-K-2#2 - Tonyukuk Yazıtı, Kuzey 2. satir  (3 kelime)

- **transkripsiyon:** `YOK : eRTeÇİ : eRTİ`
- **kelime karsiliklari:** YOK : EDECEK : İDİ
- **kanit:**
  - `Tekin 1998, s. 48` (eslesen: _YOK eRTeÇİ eRTİ_)
    > ...rkuy karguğ olgurtdum ok. Yanığma yağığ kelürlülr ertim. Kağanımın sü eletdimiz. Tefiğri yarlıkazu, (D 4) bu Türük bodun ara yarıklığ yağığ yeltürmedim, tüğünlüğ atığ yüğürtmedim. İlteriş Kağan kazganmasar, (D 5) udu ben özüm kazganmasar, il yeme bodun yeme yok erteçi erti. Kazgantukın üçün udu özüm kazgantukum üçün, (D 6) il yeme il boltı, bodun yeme bodun boltı. Özüm karı boltum, uluğ boltum. [[s. 48]] Nefğ yerdeki kağanlığ bodunka (D 7) bünteği bar erser, ne bungı bar erteçi ermiş? ORHON YAZITLARI 93 İnel Kağan'a, öylece...


## TY2-K-3#1 - Tonyukuk Yazıtı, Kuzey 3. satir  (13 kelime)

- **transkripsiyon:** `İLTeRiŞ : KaGaN : BİLGE : TONYUKUK : KaZGaNDUK : ÜÇüN : KaPaGaN : KaGaN : TÜRK : SİR : BODuN : YORIDUKI : BU`
- **kelime karsiliklari:** İLTERİŞ : KAĞAN : BİLGE : TONYUKUK : KAZANDIĞI : İÇİN : KAPAĞAN : KAĞANIN : TÜRK : SİR : BOYLARININ : YÜRÜDÜĞÜ : BU[NDANDIR]
- **kanit:**
  - `Tekin 2003, s. 158` (eslesen: _KaGaN TÜRK SİR BODuN_)
    > ...halk oldu" (T 55-56) *ol sabın eşidip tün yämä udısıkım kälmäz ärti < kün yämä> olorsıkım kälmäz ärti* "O sözleri işittikten (sonra) geceleri uyuyasım gelmiyordu, gündüzleri oturasım gelmiyordu" (T 22), vb. 3. *yämä* bağlacı üç kez de yinelenebilir: *kapgan kagan türk sir bodun yerintä bod yämä bodun yämä kişi yämä yok ärtäçi ärti* "(İlteriş Hakan kazanmamış olsaydı ya da hiç olmasaydı, ben kendim Bilge Tunyukuk kazanmamış olsaydım ya da hiç olmasaydım), Kapgan Hakanın Türk Sir halkı ülkesinde boy da halk da bir kişi de hiç olmayaca...
  - `Tekin 1998, s. 49` (eslesen: _SİR BODuN YORIDUKI BU_)
    > ...Kağan kazganmasar, yok erti erser, ben özüm Bilge Turnyukuk kazganmasar, ben yok ertim erser, (K 2) Kapgan Kağan Türük Sir bodun yerinte bod yeme, bodun yeme, kişi yeme idi yok erteçi erti. (K 3) İlteriş Kağan Bilge Turiyukuk kazgantuk üçün Kapgan Kağan Türük Sir bodun yorıdukı bu. (K 4) Türük Bilge Kağan, Türük Sir bodunuğ, Oğuz bodunuğ iğidü olurur. [[s. 49]] ORHON YAZITLARI 95 (D 8) Türk Bilge Kağan(ın) hükümdarlığında yazdırttım. Ben Bilge Tunyukuk. (K 1) İlteriş Kağan kazanmasa (idi), (ya da hiç) olmasa idi, ben kendim Bilge T...
  - `Tekin 1998, s. 48` (eslesen: _İLTeRiŞ KaGaN BİLGE_)
    > ...dak bodun kop kelti, yükünti, (öğtü?). Türük bodun Temir Kapığka, Tinsi Oğlı (G 3) Tinsi Oğlı aytığma tağka teğmiş idi yok ermiş. Ol yerke ben Bilge Turiyukuk teğürtük üçün (G 4) sarığ altun, ürünğ kümüş, kız koduz, eğri tebi, ağı bungsız kelürti. [[s. 48]] İlteriş Kağan bilgesin üçün, (G 5) alpın üçün, Tabgaçka yeti yiğirmi süngüşdi, Kıtanyka yeti süngüşdi, Oğuzka beş süngüşdi. Anta ayguçılsı?) (G 6) yeme ben ök ertim, yağıçısı yeme ben ök ertim. İlteriş Kağanka, Türük Böğü Kağanka, Türük Bilge Klaganka)| (D 1) Kapgan Kağan İyet...
  - `Ata 2011, s. 116` (eslesen: _İLTeRiŞ KaGaN BİLGE_)
    > ...zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi...
  - `Ata 2011, s. 109` (eslesen: _İLTeRiŞ KaGaN BİLGE_)
    > ...edi kez ordu sevk etmiş” b. Asıl sayı + kata (< kat- “katmak, ilave etmek” + -a zarf-fiil eki): üç kata tegzinti Uybat II 4 “üç kez dolandı” ikinti kata Toyok IV 2-3 “ikinci kez” c. [[s. 109]] Asıl sayılar da tek başlarına katlama sayısı olarak kullanılırlar. ilteriş kagan bilgesin üçün alpin üçün tabgaçka yeti yegirmi süŋüşdi kıtańka yeti süŋüşdi, oguzka beş süŋüşdi T 48-49 “İlteriş Hakan akıllı olduğu için, cesur olduğu için Çinlilerle on yedi (kez), Kıtaylarla yedi (kez), Oguzlarla (da) beş (kez) savaştı” 11 sayısını Orhun Türkçe...


## TY2-K-4#1 - Tonyukuk Yazıtı, Kuzey 4. satir  (10 kelime)

- **transkripsiyon:** `TÜRK : BİLGE : KaGaN : TÜRK : SİR : BODuNuG : OGuZ : BODuNuG : İGiDÜ : OLuRUR`
- **kelime karsiliklari:** TÜRK : BİLGE : KAĞANI : TÜRK : SİR : BOYLARINI : OĞUZ : BOYLARINI : YEDİRİP : OTURUR
- **kanit:**
  - `Tekin 1998, s. 49` (eslesen: _TÜRK BİLGE KaGaN TÜRK_)
    > ...asa (idim), (ya da) ben hiç olmasa idim, (K 2) Kapgan Kağan Türk Sir halkı ülkesinde boy da, halk da, insan da hiç olmayacak idi. (K 3) İlteriş Kağan ve Bilge Tunyukuk kazandığı için Kapgan Kağan'ın Türk Sir halkının gelişmesi (işte) bu(dur). [[s. 49]] (K 4) Türk Bilge Kağan, Türk Sir halkını, Oğuz halkını besleyerek tahtta oturuyor. [s. 50] / SÖZLÜK Fr a ünlem âç aç, tok değil aç- açmak âç- acıkmak açsık acıkma, acıkacak olma adak ayak adgır aygır adınçığ olağanüstü, harikulade adrıl- ayrılmak ağ- yükselmek, çıkmak ağı ipe...
  - `Tekin 1998, s. 8` (eslesen: _BİLGE KaGaN TÜRK SİR_)
    > ...unyukuk anıtının ne zaman dikildiği yazıtta belirtilmemiştir. [[s. 8]] Ancak bu anıtın, Bilge Kağan'ın, amcası Bögü ya da Kapgan Kağan'ı öldürterek tahta geçtiği 716 yılından sonra dikilmiş olması gerekir. Tunyuyuk, yazıtın sonunda “Ben yaşlandım, koca oldum. Bilge Kağan Türk Sir halkını, Oğuz halkını besleyerek tahtta oturuyor” dediğine göre bu yazıtın Bilge Kağan'ın hükümdarlığı döneminde, yani 716-734 yılları arasında, büyük bir olasılıkla da 720-725 yılları arasında yazılıp dikildiği sanılmaktadır. 3. [[s. 8]] Yazıtların Yazarı v...
  - `Tekin 2003, s. 186` (eslesen: _SİR BODuNuG OGuZ BODuNuG_)
    > ...38) *üküş teyin näkä kork-ur biz* "(Onlar) kalabalık diye niçin korkuyoruz? (T 38) 3. Çoğul 2. kişi: *... tägdökin türük bäglär kop bil-ir siz* "(Prens Kül'ün...-ına ok) değdiğini, Türk beyleri, hep bilirsiniz" (KT D 34) 4. 3. kişi: *türük bilgä kagan türük sir bodunug oguz bodunug igidü olor-ur* "Türk Bilge Hakan, Türk Sir halkını, Oğuz halkını doyurarak tahtta oturuyor" (T 62) *bäniŋ bodunum anta är-ür* "Benim halkım orada olacaktır" (T 21) *uça umatın olor-ur* "Uçamadan oturuyor" (IB 61) *kop ögir-är säbin-ür* "Çok memnun olur ve sev...
