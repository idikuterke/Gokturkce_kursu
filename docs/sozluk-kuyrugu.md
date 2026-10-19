# Sözlük anlam kuyruğu

232 madde, 2026-10-19. Korpusta geçip anlamı henüz onaylanmamış
sözcükler, sıklığa göre sıralı.

**Ön dolgu onay değildir.** Katmanı `kitap`; bir insan onaylayana kadar
alıştırmaya girmez. Onay `#denetim` ekranından verilir, karar
`engine/denetim-uygula.mjs` ile işlenir.

Üretim:
```bash
npm run sozluk:liste        # kuyruğu yeniden kurar
node engine/sozluk-belirsizlik.mjs   # çoklu okuma taraması
node engine/sozluk-kuyruk-raporu.mjs # bu belge
```

## Öbekler

| Öbek | Madde | Ne gerektiriyor |
|---|---:|---|
| E · Önerisiz | 52 | Ön dolgu yok: anlamı kaynağıyla birlikte sen yazacaksın. |
| D · Yazım farkı | 10 | Sözlük maddesi korpus yazımıyla birebir değil, ünlü katlamasıyla eşleşti. |
| B · Birden çok okuma | 41 | Biçim hem başsözcük hem bir başka sözcüğün çekimli hâli olabilir. |
| C · Kök + ek eşleşmesi | 35 | Sözlükte tam madde yok; kök + çekim eki diye çözülüp kökün anlamı önerildi. |
| A · Hızlı onay | 94 | Tam eşleşme, yazım farkı yok, başka okuması yok. |

Önerilen sıra: **B → D → C → E → A.** İlk üçü yanlış ön dolgunun sessizce
onaylanma riskini taşıyor; A'da o risk en düşük, en sona bırakılabilir.

## E · Önerisiz — 52 madde

Ön dolgu yok: anlamı kaynağıyla birlikte sen yazacaksın. Çoğu çekimli biçim (BİNiP, OLuRuP) — kökü sözlükte varsa kuyruğa hiç girmemeliydi, girenler çözümlenemeyenler.

| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |
|---|---|---:|---|---|---|---|
| BİNiP | 𐰋𐰃𐰤𐰯 | 14× | — |  | KT-D-32 | KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI : YaRaKLıGDI : KaGaNKA :… |
| aT | 𐱃 | 13× | — |  | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |
| BaR | 𐰉𐰺 | 12× | — |  | KT-G-9 | ÜÇÜN : İGiDMiŞ : KaGaNıŊıN : SaBIN : aLMaTIN : YİR : SaYU : BaRDıG : KOP : aNDA : aLKıNTıG : aRıLTıG : aNDA : … |
| OGLI | 𐰆𐰍𐰞𐰃 | 11× | — |  | KT-D-1 | ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ : KİŞİ : OGLıNDA : Ü… |
| YaŞıMA | 𐰖𐱁𐰢𐰀 | 10× | — |  | BK-D-24 | aZ : BODuNuG : ÖKüŞ : KILTıM : IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM : TÖRT : BULuŊDaKI : KaGaNLıG… |
| TONYUKUK | 𐱃𐰆𐰪𐰸𐰸 | 9× | — |  | TY1-B-1 | BİLGE : TONYUKUK : BeN : ÖZüM : TaBGaÇ : İLiŊE : KILıNDıM : TÜRK : BODuN : TaBGaÇKA : KÖRüR : eRTİ : |
| İŞiG | 𐰃𐰾𐰏 | 8× | — |  | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| OLuRuP | 𐰆𐰞𐰺𐰯 | 8× | — |  | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| OPLaYU | 𐰆𐰯𐰞𐰖𐰆 | 7× | — |  | KT-D-32 | KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI : YaRaKLıGDI : KaGaNKA :… |
| IDMıŞ | 𐰃𐰑𐰢𐰾 | 7× | — |  | KT-D-6 | BeGLeRİ : BODuNI : TÜZSüZ : ÜÇÜN : TaBGaÇ : BODuN : TeBLiGİN : KÜRLüG : ÜÇÜN : aRMaKÇISIN : ÜÇÜN : İNiLİ : eÇİ… |
| KÜSİ | 𐰚𐰇𐰾𐰃 | 7× | — |  | KT-D-25 | BaŞLayU : KIRKıZ : KaGaNıG : BaLBaL : TİKDiM : TÜRK : BODuNuG : aTI : KÜSİ : YOK : BOLMaZUN : TİYiN : KaŊıM : … |
| BİLMeZ | 𐰋𐰃𐰠𐰢𐰔 | 7× | — |  | KT-G-7 | YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aNYıG : KİŞİ : aNÇA : BOŞGURUR : eRMiŞ : IRaK : eRSeR… |
| KaZGaNıP | 𐰴𐰔𐰍𐰣𐰯 | 7× | — |  | KT-D-16 | TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ : KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ : OL : TÖRÜDE : … |
| aY | 𐰖 | 6× | — |  | KT-KD-1 | KÖLTİGiN : KOYN : YILKA : YİTİ : YiGiRMiKE : UÇDI : TOKuZuNÇ : aY : YiTİ : OTuZKA : YUG : eRTÜRTüMüZ : BaRKIN … |
| URTuM | 𐰆𐰺𐱃𐰢 | 6× | — |  | KT-G-10 | YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM : ÇIGaYN : BODuNuG : BaY : KILDıM : aZ : BODuNuG : ÖKÜŞ : KILDıM : aZ… |
| BİLiŊ | 𐰋𐰃𐰠𐰭 | 6× | — |  | KT-G-11 | BUNDA : URTuM : NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM : aŊaR : KÖRÜ : BİLiŊ : TÜRK : aMTI : BODuN … |
| İTiP | 𐰃𐱅𐰯 | 5× | — |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| KaZGaNMaSaR | 𐰴𐰔𐰍𐰣𐰢𐰽𐰺 | 5× | — |  | BK-D-33 | YaYNıDıM : TeŊRİ : YaRLuKaDUK : ÜÇüN : MeN : KaZGaNDUK : ÜÇüN : TÜRK : BODuN : KaZGaNMıŞ : eRiNÇ : MeN : İNiLi… |
| ÖMeZ | 𐰇𐰢𐰔 | 4× | — |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| OŊ | 𐰆𐰭 | 4× | — |  | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| İDSiZ | 𐰃𐰓𐰾𐰔 | 4× | — |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| BiŞ | 𐰋𐰾 | 4× | — |  | BK-D-25 | TaPA : SÜLeDİM : BODuNuG : aNDA : BOZDuM : TaBGaÇ : OŊ : TUTUK : BiŞ : TÜMeN : SÜ : KeLTİ : IDUK : BaŞDA : SÜŊ… |
| ŞaDPIT | 𐱁𐰑𐰯𐰃𐱃 | 4× | — |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| OGLIN | 𐰆𐰍𐰞𐰃𐰤 | 4× | — |  | KT-D-7 | KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ : TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI : iŞİLiK : KIZ :… |
| SÜLeYÜ | 𐰾𐰇𐰠𐰘𐰇 | 4× | — |  | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| KaPaGaN | 𐰴𐰯𐰍𐰣 | 4× | — |  | TY2-D-1 | KaPaGaN : KaGaN : YiTİ : OTuZ : YaŞKA : --- : eRTİ : KaPaGaN : KaGaN : OLuRDuM : TÜN : UDuMaTI : |
| YeTİYüZ | 𐰘𐱅𐰃𐰘𐰔 | 4× | — |  | KT-D-13 | YeTİYüZ : eR : BOLMıS : YeTİYüZ : eR : BOLıP : iLSiReMiŞ : KaGaNSıRaMıŞ : BODuNıG : KÜŊeDMiŞ : KULaDMıŞ : BODu… |
| YOTuZIN | 𐰖𐰆𐱃𐰔𐰃𐰤 | 4× | — |  | BK-D-24 | aZ : BODuNuG : ÖKüŞ : KILTıM : IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM : TÖRT : BULuŊDaKI : KaGaNLıG… |
| TUTA | 𐱃𐰆𐱃𐰀 | 4× | — |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| ITI | 𐰃𐱃𐰃 | 4× | — |  | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| YİTÜ | 𐰘𐰃𐱅𐰇 | 4× | — |  | KT-D-27 | TİYiN : TÜRK : BODuN : ÜÇÜN : TÜN : UDuMaDıM : KÜNTüZ : OLuRMaDıM : İNiM : KÖLTİGiN : BİRLE : iKİ : ŞaD : BİRL… |
| UDA | 𐰆𐰑𐰀 | 4× | — |  | KT-D-35 | YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ : SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ… |
| BİRiKİ | 𐰋𐰃𐰼𐰚𐰃 | 4× | — |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| YIRıYA | 𐰘𐰃𐰺𐰖𐰀 | 4× | — |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| YaGuRU | 𐰖𐰍𐰺𐰆 | 4× | — |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| YaRaTıP | 𐰖𐰺𐱃𐰯 | 4× | — |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| TeZiP | 𐱅𐰔𐰯 | 4× | — |  | KT-D-34 | TeKDÜKİN : TÜRK : BeGLeR : KOP : BİLİRSİZ : OL : SÜG : aNDA : YOK : KıŞDıMıZ : aNDA : KİSRE : YeR : BaYıRKU : … |
| KURIGaRI | 𐰸𐰆𐰺𐰃𐰍𐰺𐰃 | 4× | — |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| ORTUSIŊaRU | 𐰆𐰺𐱃𐰆𐰾𐰃𐰭𐰺𐰆 | 4× | — |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| BULuŊDaKI | 𐰉𐰆𐰞𐰭𐰑𐰴𐰃 | 4× | — |  | KT-D-29 | KİSRE : TeŊRİ : YaRLıKaZU : KUTuM : BaR : ÜÇüN : ÜLÜGüM : BaR : ÜÇÜN : ÖLTeÇİ : BODuNuG : TİRGüRÜ : İGiTiM : Y… |
| ÇOGaY | 𐰲𐰆𐰍𐰖 | 3× | — |  | KT-G-6 | eDGÜ : BİLGE : KİŞİG : eDGÜ : aLP : KİŞİG : YORITMAZ : eRMiŞ : BİR : KİŞİ : YaŊıLSaR : OGuŞI : BODUNI : BİŞÜKİ… |
| OGuŞuM | 𐰆𐰍𐱁𐰢 | 3× | — |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| TİNSİ | 𐱅𐰃𐰤𐰾𐰃 | 3× | — |  | TY2-B-9 | BİZ : YiME : SÜLeDiMiZ : aNI : eRTiMiZ : YiNÇÜ : öGüZüG : KeÇE : TİNSİ : OGLI : YaTıGMA : BeŊiLiG : eK : TaGaG… |
| SÜLeLiM | 𐰾𐰇𐰠𐰠𐰢 | 3× | — |  | TY1-D-3 | aRTUK : KIRKıZ : KÜÇLüG : KaGaN : YaGıZıM : BOLDI : OL : ÜÇ : KaGaN : ÖGLeŞiP : aLTUN : YIŞ : ÜZE : KaBıŞaLıM … |
| KaGaNGaRU | 𐰴𐰍𐰣𐰍𐰺𐰆 | 3× | — |  | TY1-D-3 | aRTUK : KIRKıZ : KÜÇLüG : KaGaN : YaGıZıM : BOLDI : OL : ÜÇ : KaGaN : ÖGLeŞiP : aLTUN : YIŞ : ÜZE : KaBıŞaLıM … |
| TOGA | 𐱃𐰆𐰍𐰀 | 3× | — |  | KT-D-35 | YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ : SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ… |
| eBİN | 𐰋𐰃𐰤 | 3× | — |  | KT-K-1 | --- : BİRLE : KOŞU : TUTuK : BİRLE : SÜŊüŞMüŞ : eRİN : KOP : ÖLÜRMüŞ : eBİN : BaRıMıN : KaLISıZ : KOP : KeLÜRT… |
| YaŊıLıP | 𐰖𐰭𐰞𐰯 | 3× | — |  | KT-G-10 | YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM : ÇIGaYN : BODuNuG : BaY : KILDıM : aZ : BODuNuG : ÖKÜŞ : KILDıM : aZ… |
| TOŊRA | 𐱃𐰆𐰭𐰺𐰀 | 3× | — |  | KT-K-7 | BODuN : aDaK : KaMŞaTDI : YaBLaK : BOLDAÇI : ERTİ : OZA : KeLMiŞ : SÜSİN : KÖLTİGiN : aGTıP : TOŊRA : BİR : OG… |
| YeGÜNüM | 𐰘𐰏𐰇𐰤𐰢 | 3× | — |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| TİRiLiP | 𐱅𐰃𐰼𐰠𐰯 | 3× | — |  | KT-D-12 | YORuYOR : TİYiN : KÜ : eŞiDiP : BaLIKDaKI : TaGIKMıŞ : TaGDakI : İNMiS : TİRiLiP : YeTMiŞ : eR : BOLMıS : TeŊR… |
| KaLMaZUN | 𐰴𐰞𐰢𐰔𐰆𐰣 | 3× | — |  | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |

## D · Yazım farkı — 10 madde

Sözlük maddesi korpus yazımıyla birebir değil, ünlü katlamasıyla eşleşti. Maddenin gerçekten bu sözcük olduğunu doğrula.

| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |
|---|---|---:|---|---|---|---|
| UÇA | 𐰆𐰲𐰀 | 7× | genç (hayvan) (Altınköl I 4) <br><sub>Tekin 2003, s. 250</sub> | uç- + -a → uçmak; (bu dünyadan) göçüp gitmek, ölmek | KT-D-16 | TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ : KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ : OL : TÖRÜDE : … |
| ÖKÜŞ | 𐰜𐰇𐰾 | 5× | çok, sayısız <br><sub>Tekin 2003, s. 257</sub> | katlama: ö~ü/o~u | KT-G-6 | eDGÜ : BİLGE : KİŞİG : eDGÜ : aLP : KİŞİG : YORITMAZ : eRMiŞ : BİR : KİŞİ : YaŊıLSaR : OGuŞI : BODUNI : BİŞÜKİ… |
| iKİN | 𐰚𐰃𐰤 | 5× | iki; bk. eki, iki <br><sub>Tekin 2003, s. 243</sub> | iki + -n → iki; bk. eki, ekin | KT-D-1 | ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ : KİŞİ : OGLıNDA : Ü… |
| eRiN | 𐰼𐰤 | 5× | adamlar <br><sub>Tekin 2003, s. 243</sub> | är + -in → erkek, yiğit, asker, er<br>är- + -in → ermek, erişmek, varmak | KT-D-11 | SUBI : aNÇA : iTMiŞ : TÜRK : BODuN : YOK : BOLMaZUN : TİYiN : BODuN : BOLÇUN : TİYiN : KaŊıM : İLTeRiŞ : KaGaN… |
| aTıG | 𐱃𐰍 | 5× | (?) etnik ad (Çin kaynaklarındaki A-tie etnik adı mı?) (O 5, 6, 10) <br><sub>Tekin 2003, s. 239</sub> | atı + -g → yeğen, kardeş oğlu (KT G 13, vb.)<br>āt + -ıg → ad, unvan, şöhret | KT-D-32 | KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI : YaRaKLıGDI : KaGaNKA :… |
| BÖKLİ | 𐰋𐰇𐰚𐰠𐰃 | 4× | yer adı, ülke adı (Mançurya ovası?) <br><sub>Tekin 2003, s. 242</sub> | katlama: ö~ü/o~u | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| iRTiŞ | 𐰼𐱅𐰾 | 4× | ırmak adı (İrtiş ırmağı) <br><sub>Tekin 2003, s. 243</sub> | katlama: ünlü | KT-D-37 | TOGA : iRTiŞ : ÖGüZüG : KeÇE : YORIDıMıZ : TÜRGiŞ : BODuNuG : UDA : BaSDıMıZ : TÜRGiŞ : KaGaN : SÜSİ : BOLÇUDA… |
| TUTUK | 𐱃𐰆𐱃𐰸 | 3× | askeri vali (< Çin. *Tuo-tuok*) <br><sub>Tekin 2003, s. 255</sub> | tu- + -tuk → kapanmak | KT-D-31 | UMaY : TeG : ÖGüM : KaTUN : KUTıŊA : İNiM : KÖLTİGiN : eR : aT : BOLDI : aLTI : YiGiRMİ : YaŞIŊA : eÇİM : KaGa… |
| YUG | 𐰖𐰆𐰍 | 3× | cenaze töreni <br><sub>Tekin 2003, s. 260</sub> | katlama: ö~ü/o~u | KT-KD-1 | KÖLTİGiN : KOYN : YILKA : YİTİ : YiGiRMiKE : UÇDI : TOKuZuNÇ : aY : YiTİ : OTuZKA : YUG : eRTÜRTüMüZ : BaRKIN … |
| YUGÇI | 𐰖𐰆𐰍𐰲𐰃 | 3× | cenaze törenine katılan <br><sub>Tekin 2003, s. 260</sub> | katlama: ö~ü/o~u | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |

## B · Birden çok okuma — 41 madde

Biçim hem başsözcük hem bir başka sözcüğün çekimli hâli olabilir. Ön dolgu ilkini seçti; doğrusuna tanık cümlesine bakarak karar ver.

| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |
|---|---|---:|---|---|---|---|
| TİR | 𐱅𐰃𐰼 | 14× | dermek, toplamak; bk. teril- <br><sub>Tekin 2003, s. 254</sub> | ti- + -r → demek, söylemek | KT-D-9 | BODuN : aNÇA : TİMiŞ : İLLiG : BODuN : eRTiM : İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ :… |
| KÜN | 𐰚𐰇𐰤 | 12× | güneş, gündüz, gün <br><sub>Tekin 2003, s. 249</sub> | kü + -n → haber; ün, şöhret (KT D 12, KÇ 12, vb.) | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| eRiG | 𐰼𐰏 | 11× | erişilebilir (KT G 13, 13) <br><sub>Tekin 2003, s. 244</sub> | är + -ig → erkek, yiğit, asker, er | KT-G-13 | TOKITDıM : BU --- İL : eRSeR : aNÇA : --- M : TaKI : eRİG : YiRTE : İRSeR : aNÇA : eRiG : YiRTE : BeŊGÜ : TaŞ … |
| TÜN | 𐱅𐰇𐰤 | 10× | gece, karanlık <br><sub>Tekin 2003, s. 256</sub> | tü + -n → tüy (IB 3) | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| İLiG | 𐰃𐰠𐰏 | 10× | hükümdar <br><sub>Tekin 2003, s. 244</sub> | il + -ig → devlet, ülke (bk. el) | KT-D-3 | İDİ : OKSuZ : KÖK : TÜRK : aNÇA : OLuRUR : eRMiŞ : BİLGE : KaGaN : eRMiŞ : aLP : KaGaN : eRMiŞ : BUYRUKI : YiM… |
| ULuG | 𐰆𐰞𐰍 | 10× | ulu, büyük; yaşlı <br><sub>Tekin 2003, s. 256</sub> | ulu + -g → ejderha (< Çin. *lung*) (Tar. B 2); bk. lü | KT-D-28 | BaRMıŞ : BODuN : ÖLÜ : YİTÜ : YaDaGıN : YaLıŊıN : YaNA : KeLTİ : BODuNıG : İGiDeYİN : TİYiN : YIRıGaRU : OGuZ … |
| YiTİ | 𐰘𐱅𐰃 | 9× | yedi; bk. yeti <br><sub>Tekin 2003, s. 260</sub> | yit- + -i → kaybolmak<br>yi- + -ti → yemek; bk. ye- | KT-KD-1 | KÖLTİGiN : KOYN : YILKA : YİTİ : YiGiRMiKE : UÇDI : TOKuZuNÇ : aY : YiTİ : OTuZKA : YUG : eRTÜRTüMüZ : BaRKIN … |
| KeÇE | 𐰚𐰲𐰀 | 8× | öte, ötesinde <br><sub>Tekin 2003, s. 246</sub> | käç- + -e → geçmek | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| İDİ | 𐰃𐰓𐰃 | 8× | hiç, asla; bk. edi <br><sub>Tekin 2003, s. 244</sub> | id- + -i → göndermek (O 2); bk. ıd-, yıd-, ıt- | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| YaNA | 𐰖𐰣𐰀 | 8× | yine, tekrar <br><sub>Tekin 2003, s. 258</sub> | yan- + -a → dönmek, geri dönmek | KT-D-21 | YaNA : BİRTiMiZ : iLGeRÜ : KaDıRKaN : YıŞıG : aŞA : BODuNıG : aNÇA : KONDURTuMıZ : aNÇA : İTDiMiZ : KURıGaRU :… |
| aTI | 𐱃𐰃 | 8× | yeğen, kardeş oğlu (KT G 13, vb.) <br><sub>Tekin 2003, s. 239</sub> | at- + -ı → (ok) atmak; avlanmak (Altınköl I 4)<br>āt + -ı → ad, unvan, şöhret | KT-D-25 | BaŞLayU : KIRKıZ : KaGaNıG : BaLBaL : TİKDiM : TÜRK : BODuNuG : aTI : KÜSİ : YOK : BOLMaZUN : TİYiN : KaŊıM : … |
| aLTI | 𐰞𐱃𐰃 | 8× | altı <br><sub>Tekin 2003, s. 237</sub> | al- + -tı → almak, yakalamak, işgal etmek (BK D 24, vb.) | KT-D-31 | UMaY : TeG : ÖGüM : KaTUN : KUTıŊA : İNiM : KÖLTİGiN : eR : aT : BOLDI : aLTI : YiGiRMİ : YaŞIŊA : eÇİM : KaGa… |
| SaYU | 𐰽𐰖𐰆 | 7× | her <br><sub>Tekin 2003, s. 252</sub> | say + -u → çakıl, çakıl taşı (Hem.-Çır. 5) | KT-G-9 | ÜÇÜN : İGiDMiŞ : KaGaNıŊıN : SaBIN : aLMaTIN : YİR : SaYU : BaRDıG : KOP : aNDA : aLKıNTıG : aRıLTıG : aNDA : … |
| ÖZİ | 𐰇𐰔𐰃 | 7× | kendisi, kendileri <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> | öz + -i → vadi | KT-D-3 | İDİ : OKSuZ : KÖK : TÜRK : aNÇA : OLuRUR : eRMiŞ : BİLGE : KaGaN : eRMiŞ : aLP : KaGaN : eRMiŞ : BUYRUKI : YiM… |
| YOLI | 𐰖𐰆𐰞𐰃 | 7× | kez, kere, defa <br><sub>Tekin 2003, s. 260</sub> | yol + -ı → yol, usül, kural | KT-D-15 | KIRK : aRTUKI : YeTİ : YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ : TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLS… |
| TİGiN | 𐱅𐰃𐰏𐰤 | 6× | prens, kağan oğlu <br><sub>Tekin 2003, s. 254</sub> | ti + -gin → sürekli olarak, uzun süre (BK G 15) | KT-GB-1 | KÖLTİGiNiŊ : aLTUNIN : KÜMiŞİN : aGIŞIN : BaRıMIN : TÜRK : aÇIGıYN : KaRNIN : YaGMA : TOYuG : TaBU : --- BeGiM… |
| aGI | 𐰍𐰃 | 5× | ipek kumaş, kıymetli hediye <br><sub>Tekin 2003, s. 237</sub> | ag + -ı → bacak arası (Hem.-Çır. 9)<br>ag- + -ı → yükselmek, tırmanmak (BK D 37) | KT-G-7 | YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aNYıG : KİŞİ : aNÇA : BOŞGURUR : eRMiŞ : IRaK : eRSeR… |
| aSRA | 𐰽𐰺𐰀 | 5× | aşağıda, altta (KT D 1, vb.) <br><sub>Tekin 2003, s. 238</sub> | as + -ra → cariye, kadın köle (Hem.-Çır. 2); yuk. bk. | KT-D-1 | ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ : KİŞİ : OGLıNDA : Ü… |
| aNTaG | 𐰦𐰍 | 5× | öyle, şöyle; o kadar, onca (bk. andag, antäg) <br><sub>Tekin 2003, s. 238</sub> | anta + -g → orada (/ol/ zamirinin bulunma-çıkma durumu) | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| KaNI | 𐰴𐰣𐰃 | 5× | hani, nerede <br><sub>Tekin 2003, s. 246</sub> | kan + -ı → kan | KT-D-9 | BODuN : aNÇA : TİMiŞ : İLLiG : BODuN : eRTiM : İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ :… |
| aŞA | 𐱁𐰀 | 5× | ötesinde (KT D 17, BK D 15) <br><sub>Tekin 2003, s. 238</sub> | aş- + -a → aşmak (T 26, vb.) | KT-D-17 | eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TaRDUŞ : BODuN : ÜZE : ŞaD : eRTiM : eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL :… |
| BİLiG | 𐰋𐰃𐰠𐰏 | 4× | bilgi, akıl, zeka <br><sub>Tekin 2003, s. 240</sub> | bil + -ig → bel (IB 37); bk. bel | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| BUNI | 𐰉𐰆𐰣𐰃 | 4× | bunu <br><sub>Tekin 2003, s. 242</sub> | bu + -nı → bu | KT-G-10 | YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM : ÇIGaYN : BODuNuG : BaY : KILDıM : aZ : BODuNuG : ÖKÜŞ : KILDıM : aZ… |
| aPAM | 𐰯𐰀𐰢 | 4× | atalarım <br><sub>Ata 2011 (Söz Yapımı/Çözümlemeler)</sub> | apa + -m → abla (Barık II 4); yuk. bk. | KT-D-1 | ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ : KİŞİ : OGLıNDA : Ü… |
| URI | 𐰆𐰺𐰃 | 4× | erkek (çocuk), oğul; genç <br><sub>Tekin 2003, s. 256</sub> | ur- + -ı → vurmak, dövmek; taş üzerine yazmak, hâkketmek… | KT-D-7 | KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ : TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI : iŞİLiK : KIZ :… |
| ATIN | 𐰀𐱃𐰃𐰤 | 4× | adını <br><sub>Ata 2011 (Söz Yapımı/Çözümlemeler)</sub> | atı + -n → yeğen, kardeş oğlu (KT G 13, vb.)<br>at- + -ın → (ok) atmak; avlanmak (Altınköl I 4)<br>āt + -ın → ad, unvan, şöhret | KT-D-7 | KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ : TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI : iŞİLiK : KIZ :… |
| TaŞRA | 𐱃𐱁𐰺𐰀 | 4× | dışarı, dışarıya <br><sub>Tekin 2003, s. 253</sub> | taş + -ra → dış | KT-D-11 | SUBI : aNÇA : iTMiŞ : TÜRK : BODuN : YOK : BOLMaZUN : TİYiN : BODuN : BOLÇUN : TİYiN : KaŊıM : İLTeRiŞ : KaGaN… |
| ÖŊRE | 𐰇𐰭𐰼𐰀 | 4× | önde, doğuda <br><sub>Tekin 2003, s. 251</sub> | Öŋ + -re → meskun olmayan, ıssız yer (IB 17) | BK-G-13 | TeŊRİ : TeG : TeŊRİ : YaRaTMıŞ : TÜRK : BİLGE : KaGaN : SaBıM : KaŊıM : TÜRK : BİLGE : KaGaN : OLuRTuKINDA : T… |
| İÇReKİ | 𐰃𐰲𐰼𐰚𐰃 | 4× | içteki, içindeki; özel, saraya mensup; bk. içiräki <br><sub>Tekin 2003, s. 244</sub> | içrä + -ki → içinde | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| BUŊSuZ | 𐰉𐰆𐰭𐰽𐰔 | 4× | bk. buŋsız <br><sub>Tekin 2003, s. 242</sub> | buŋ + -suz → ihtiyaç, yokluk; dert, sıkıntı | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| AÇSıK | 𐰀𐰲𐰾𐰴 | 3× | acıkacak olma (KT G 8, 8; BK K 6) <br><sub>Tekin 2003, s. 237</sub> | aç- + -sık → acıkmak, aç olmak (BK K 6) | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| BaRK | 𐰉𐰺𐰴 | 3× | anıt, türbe, bark <br><sub>Tekin 2003, s. 239</sub> | bar + -k → var, mevcut | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| aRA | 𐰺𐰀 | 3× | arasında (KT D 1, vb.) <br><sub>Tekin 2003, s. 238</sub> | ar- + -a → yorulmak, yorgun düşmek (IB 17) | KT-D-1 | ÜZE : KÖK : TeŊRİ : aSRA : YaGıZ : YeR : KILıNDUKDA : iKİN : aRA : KİŞİ : OGLI : KILıNMıŞ : KİŞİ : OGLıNDA : Ü… |
| eLiG | 𐰠𐰏 | 3× | elli (50) <br><sub>Tekin 2003, s. 243</sub> | el + -ig → devlet, ülke, halk (bk. il) | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| aRTUK | 𐰺𐱃𐰸 | 3× | fazla, sayıca çok, kalabalık (KT D 33, T 20, 40, vb.) <br><sub>Tekin 2003, s. 238</sub> | ārt + -uk → ard, arka; son (Hem.-Çır. 10, Altınköl I 7); …<br>ar- + -tuk → yorulmak, yorgun düşmek (IB 17) | KT-D-33 | ÖLTİ : iKİNTİ : IŞBaRA : YaMTaR : BOZ : aTıG : BİNiP : TeGDİ : OL : aT : aNDA : ÖLTİ : ÜÇünÇ : YeGeN : SİLiG :… |
| İRKiN | 𐰃𐰼𐰚𐰤 | 3× | yüksek bir unvan; bk. Ulug İrkin, Sir İrkin <br><sub>Tekin 2003, s. 245</sub> | ir + -kin → kuzey (bk. yır) | KT-D-34 | TeKDÜKİN : TÜRK : BeGLeR : KOP : BİLİRSİZ : OL : SÜG : aNDA : YOK : KıŞDıMıZ : aNDA : KİSRE : YeR : BaYıRKU : … |
| İLKİ | 𐰃𐰠𐰚𐰃 | 3× | birinci <br><sub>Tekin 2003, s. 244</sub> | ilk + -i → ilk, önce<br>il + -ki → devlet, ülke (bk. el) | BK-D-30 | KÜNİ : TeGDÜK : ÜÇüN : YaGI : BOLDI : BİR : YILKA : TÖRT : YOLI : SÜŊüŞDüM : eŊ : İLKİ : TOGU : BaLIKDA : SÜŊü… |
| KIZıL | 𐰶𐰃𐰔𐰞 | 3× | kızıl <br><sub>Tekin 2003, s. 247</sub> | kız- + -ıl → kızmak, öfkelenmek (T 40) | TY2-G-4 | KIZıL : aLTUN : ÜRüŊ : KÜMüŞ : KIZıL : UDuZ : GeRİT : aSIGI : BUŊSuZ : KeLÜRTİ : İLTeRiŞ : KaGaN : BİLGESİ : |
| TÖRÜN | 𐱅𐰇𐰼𐰇𐰤 | 3× | akrabalık adı (Ozn. 1) <br><sub>Tekin 2003, s. 255</sub> | törü + -n → sözlü yasa, töre; tören, * merasim törü-, tör…<br>törü- + -n → yaratılmak | BK-K-9 | KaGaN : eÇiM : KaGaN : OLuRTUKINDA : TÖRT : BULuŊDaKI : BODuNıG : BUNÇA : İTMiŞ --- : TeŊRİ : YaRLıKaDUK : ÜÇü… |
| eRKLiG | 𐰼𐰚𐰠𐰏 | 3× | güçlü, kuvvetli, muktedir <br><sub>Tekin 2003, s. 243</sub> | ärkli + -g → olan; iken | BK-K-12 | KÖK : TeYeŊİN : TÜRÜKüME : BODuNuMA : KaZGaNU : BİRTİM : İTİ : BİRTiM : --- : BUŊSuZ : KILTıM : --- : --- RTİ … |
| KaLISıZ | 𐰴𐰞𐰃𐰾𐰔 | 3× | eksiksiz <br><sub>Tekin 2003, s. 245</sub> | kalı + -sız → kalıntı, artık | KT-K-1 | --- : BİRLE : KOŞU : TUTuK : BİRLE : SÜŊüŞMüŞ : eRİN : KOP : ÖLÜRMüŞ : eBİN : BaRıMıN : KaLISıZ : KOP : KeLÜRT… |

## C · Kök + ek eşleşmesi — 35 madde

Sözlükte tam madde yok; kök + çekim eki diye çözülüp kökün anlamı önerildi. Biçim kalıplaşmışsa kökün anlamı tutmaz.

| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |
|---|---|---:|---|---|---|---|
| SÜŊüŞDüMüZ | 𐰾𐰇𐰭𐱁𐰓𐰢𐰔 | 14× | savaşmak  (süŋüş + dümüz) <br><sub>Tekin 2003, s. 252</sub> | kök: ? + ? | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |
| İNiM | 𐰃𐰤𐰢 | 10× | erkek kardeş (küçük)  (ini + m) <br><sub>Tekin 2003, s. 245</sub> | kök: ? + ? | KT-D-26 | KaGaN : OLuRTDI : eRiNÇ : NeŊ : YILSıG : BODuNKA : OLuRMaDıM : İÇRE : aŞSıZ : TaŞRA : TONSuZ : YaBıZ : YaBLaK … |
| SaKıNDıM | 𐰽𐰴𐰦𐰢 | 8× | düşünmek; yas tutmak  (sakın + dım) <br><sub>Tekin 2003, s. 251</sub> | kök: ? + ? | KT-K-10 | KÖLTİGiN : YOK : eRSeR : KOP : ÖLTeÇİ : eRTiGiZ : İNiM : KÖLTİGiN : KeRGeK : BOLDI : ÖZüM : SaKıNDıM : KÖRÜR :… |
| ÖLüRTüM | 𐰇𐰠𐰼𐱅𐰢 | 8× | öldürmek  (ölür + tüm) <br><sub>Tekin 2003, s. 251</sub> | kök: ? + ? | BK-D-26 | TaPA : SÜLeDiM : ÇaÇA : SEŊÜN : SeKiZ : TÜMeN : SÜ : BİRLE : SÜŊüŞDüM : SÜSİN : aNDA : ÖLüRTüM : aLTI : OTuZ :… |
| aLTıM | 𐰞𐱃𐰢 | 7× | altı  (altı + m) <br><sub>Tekin 2003, s. 237</sub> | kök: ? + ? | BK-D-24 | aZ : BODuNuG : ÖKüŞ : KILTıM : IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM : TÖRT : BULuŊDaKI : KaGaNLıG… |
| BaŞLıGıG | 𐰉𐱁𐰞𐰍𐰍 | 7× | başı (dik) olan, mağrur; lideri olan  (başlıg + ıg) <br><sub>Tekin 2003, s. 240</sub> | kök: ? + ? | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| TİZLiGiG | 𐱅𐰃𐰔𐰠𐰏𐰏 | 7× | güçlü, kuvvetli (harf. "dizli, dizi olan")  (tizlig + ig) <br><sub>Tekin 2003, s. 254</sub> | kök: ? + ? | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| BOLMaZUN | 𐰉𐰆𐰞𐰢𐰔𐰆𐰤 | 6× | olmamak  (bolma + zun) <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> | kök: ? + ? | KT-D-25 | BaŞLayU : KIRKıZ : KaGaNıG : BaLBaL : TİKDiM : TÜRK : BODuNuG : aTI : KÜSİ : YOK : BOLMaZUN : TİYiN : KaŊıM : … |
| KeLÜRTİ | 𐰚𐰠𐰇𐰼𐱅𐰃 | 6× | getirmek  (kelür + ti) <br><sub>Tekin 2003, s. 247</sub> | kök: ? + ? | KT-K-1 | --- : BİRLE : KOŞU : TUTuK : BİRLE : SÜŊüŞMüŞ : eRİN : KOP : ÖLÜRMüŞ : eBİN : BaRıMıN : KaLISıZ : KOP : KeLÜRT… |
| YaRLıKaDUK | 𐰖𐰺𐰞𐰴𐰑𐰸 | 6× | lutfetmek; (Tanrı) buyurmak  (yarlıka + duk) <br><sub>Tekin 2003, s. 258</sub> | kök: ? + ? | KT-D-15 | KIRK : aRTUKI : YeTİ : YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ : TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLS… |
| TeMiRKaPıGKA | 𐱅𐰢𐰼𐰴𐰯𐰍𐰴𐰀 | 6× | yer adı  (temirkapıg + ka) <br><sub>Tekin 2003, s. 254</sub> | kök: ? + ? | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| KÜÇüG | 𐰚𐰇𐰲𐰏 | 5× | güç, kuvvet; güçlü  (küç + üg) <br><sub>Tekin 2003, s. 249</sub> | kök: ? + ? | KT-D-9 | BODuN : aNÇA : TİMiŞ : İLLiG : BODuN : eRTiM : İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ :… |
| KİŞİG | 𐰚𐰃𐰾𐰃𐰏 | 5× | insan  (kişi + g) <br><sub>Tekin 2003, s. 248</sub> | kök: ? + ? | KT-G-6 | eDGÜ : BİLGE : KİŞİG : eDGÜ : aLP : KİŞİG : YORITMAZ : eRMiŞ : BİR : KİŞİ : YaŊıLSaR : OGuŞI : BODUNI : BİŞÜKİ… |
| KÖRTİ | 𐰚𐰇𐰼𐱅𐰃 | 5× | görmek; tabi olmak  (kör + ti) <br><sub>Tekin 2003, s. 248</sub> | kök: ? + ? | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| ÖGüZüG | 𐰇𐰏𐰔𐰏 | 5× | ırmak, nehir, deniz  (ögüz + üg) <br><sub>Tanyeri, Sözlük</sub> | kök: ? + ? | KT-D-37 | TOGA : iRTiŞ : ÖGüZüG : KeÇE : YORIDıMıZ : TÜRGiŞ : BODuNuG : UDA : BaSDıMıZ : TÜRGiŞ : KaGaN : SÜSİ : BOLÇUDA… |
| KaPıGKA | 𐰴𐰯𐰍𐰴𐰀 | 5× | kapı, geçit (Tämir Kapıg yer adında)  (kapıg + ka) <br><sub>Tekin 2003, s. 246</sub> | kök: ? + ? | KT-D-17 | eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TaRDUŞ : BODuN : ÜZE : ŞaD : eRTiM : eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL :… |
| iLTDİ | 𐰠𐱅𐰓𐰃 | 4× | iletmek (Altun Köl I 1); bk. elt-  (ilt + di) <br><sub>Tekin 2003, s. 245</sub> | kök: ? + ? | KT-D-23 | ÖKÜN : KÜReGÜŊiN : ÜÇÜN : İGiDMiŞ : BİLGE : KaGaNıŊA : eRMiŞ : BaRMıŞ : eDGÜ : iLiŊE : KeNTÜ : YaŊıLDıG : YaBL… |
| KaMaGI | 𐰴𐰢𐰍𐰃 | 4× | tüm, bütün, hepsi  (kamag + ı) <br><sub>Tekin 2003, s. 245</sub> | kök: ? + ? | KT-D-12 | YORuYOR : TİYiN : KÜ : eŞiDiP : BaLIKDaKI : TaGIKMıŞ : TaGDakI : İNMiS : TİRiLiP : YeTMiŞ : eR : BOLMıS : TeŊR… |
| KaNDıN | 𐰴𐰦𐰣 | 4× | kan  (kan + dın) <br><sub>Tekin 2003, s. 246</sub> | kök: ? + ? | KT-D-23 | ÖKÜN : KÜReGÜŊiN : ÜÇÜN : İGiDMiŞ : BİLGE : KaGaNıŊA : eRMiŞ : BaRMıŞ : eDGÜ : iLiŊE : KeNTÜ : YaŊıLDıG : YaBL… |
| URTURTuM | 𐰆𐰺𐱃𐰆𐰺𐱃𐰢 | 4× | taş üzerine yazdırtmak  (urtur + tum) <br><sub>Tekin 2003, s. 256</sub> | kök: ? + ? | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| TOKITDıM | 𐱃𐰸𐰃𐱃𐰑𐰢 | 4× | yazıt yazdırmak  (tokıt + dım) <br><sub>Tekin 2003, s. 255</sub> | kök: ? + ? | KT-G-13 | TOKITDıM : BU --- İL : eRSeR : aNÇA : --- M : TaKI : eRİG : YiRTE : İRSeR : aNÇA : eRiG : YiRTE : BeŊGÜ : TaŞ … |
| İLLiGiG | 𐰃𐰠𐰠𐰏𐰏 | 4× | devleti olan, bağımsız  (illig + ig) <br><sub>Tekin 2003, s. 244</sub> | kök: ? + ? | KT-D-15 | KIRK : aRTUKI : YeTİ : YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ : TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLS… |
| BİTİDiM | 𐰋𐰃𐱅𐰃𐰓𐰢 | 4× | yazmak  (biti + dim) <br><sub>Tekin 2003, s. 241</sub> | kök: ? + ? | KT-GD-1 | BUNÇA : BİTiG : BİTiGME : KÖLTİGiN : aTISI : YOLuGTİGiN : BİTİDiM : YİGiRMİ : KÜN : OLuRuP : BU : TaŞKA : BU :… |
| ÖTüNTüM | 𐰇𐱅𐰤𐱅𐰢 | 4× | arz etmek, rica etmek  (ötün + tüm) <br><sub>Tekin 2003, s. 251</sub> | kök: ? + ? | TY1-G-5 | TİR : MeN : OL : SaBıG : eŞiDiP : TÜN : UDıSIKıM : KeLMeDİ : KÜNTüZ : OLuRSıKıM : KeLMeDİ : aNDA : ÖTRÜ : KaGa… |
| BOŞGURUR | 𐰉𐰆𐱁𐰍𐰆𐰺𐰆𐰺 | 4× | öğretmek, akıl vermek; yapmak, düzene sokmak  (boşgur + ur) <br><sub>Tekin 2003, s. 241</sub> | kök: ? + ? | KT-G-7 | YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aNYıG : KİŞİ : aNÇA : BOŞGURUR : eRMiŞ : IRaK : eRSeR… |
| KILıNMaDUK | 𐰴𐰃𐰞𐰣𐰢𐰑𐰸 | 4× | yaratılmamak  (kılınma + duk) <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> | kök: ? + ? | KT-D-5 | BOLMıS : eRiNÇ : OGLITI : KaGaN : BOLMıS : eRiNÇ : aNDA : KİSRE : İNİSİ : eÇİSİN : TeG : KILıNMaDUK : eRiNÇ : … |
| eÇÜM | 𐰲𐰇𐰢 | 3× | ata, dede, ecdat  (eçü + m) <br><sub>Tekin 2003, s. 242</sub> | kök: ? + ? | KT-D-13 | YeTİYüZ : eR : BOLMıS : YeTİYüZ : eR : BOLıP : iLSiReMiŞ : KaGaNSıRaMıŞ : BODuNıG : KÜŊeDMiŞ : KULaDMıŞ : BODu… |
| KaRıG | 𐰴𐰺𐰍 | 3× | yaşlı, ihtiyar (T 56)  (karı + g) <br><sub>Tekin 2003, s. 246</sub> | kök: ? + ? | KT-D-35 | YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ : SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ… |
| OGLaNıM | 𐰆𐰍𐰞𐰣𐰢 | 3× | oğullar  (oglan + ım) <br><sub>Tekin 2003, s. 250</sub> | kök: ? + ? | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| İGiDMiŞ | 𐰃𐰏𐰓𐰢𐱁 | 3× | beslemek, doyurmak  (igid + miş) <br><sub>Tekin 2003, s. 244</sub> | kök: ? + ? | KT-G-9 | ÜÇÜN : İGiDMiŞ : KaGaNıŊıN : SaBIN : aLMaTIN : YİR : SaYU : BaRDıG : KOP : aNDA : aLKıNTıG : aRıLTıG : aNDA : … |
| SÖKÜRMiŞ | 𐰾𐰇𐰚𐰇𐰼𐰢𐰾 | 3× | (diz) çökdürmek, kendine tabi kılmak  (sökür + miş) <br><sub>Tekin 2003, s. 252</sub> | kök: ? + ? | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| BaSDıMıZ | 𐰉𐰽𐰑𐰢𐰔 | 3× | baskın yapmak; hükmü altında tutmak  (bas + dımız) <br><sub>Tekin 2003, s. 239</sub> | kök: ? + ? | KT-D-35 | YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ : SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ… |
| BOLÇUDA | 𐰉𐰆𐰞𐰲𐰆𐰑𐰀 | 3× | yer adı (T 35)  (bolçu + da) <br><sub>Tekin 2003, s. 241</sub> | kök: ? + ? | KT-D-37 | TOGA : iRTiŞ : ÖGüZüG : KeÇE : YORIDıMıZ : TÜRGiŞ : BODuNuG : UDA : BaSDıMıZ : TÜRGiŞ : KaGaN : SÜSİ : BOLÇUDA… |
| aYGUÇISI | 𐰖𐰍𐰆𐰲𐰃𐰾𐰃 | 3× | hakan adına emir veren, sözcü (T 10, 29, vb)  (ayguçı + sı) <br><sub>Tekin 2003, s. 239</sub> | kök: ? + ? | TY1-G-3 | YORIYoR : eRMiŞ : KaGaNI : aLP : eRMiŞ : aYGUÇISI : BİLGE : eRMiŞ : OL : iKİ : KİŞİ : BaR : eRSeR : SİNİ : TaB… |
| eRTÜRTüM | 𐰼𐱅𐰇𐰼𐱅𐰢 | 3× | yaptırmak  (ertür + tüm) <br><sub>Tekin 2003, s. 243</sub> | kök: ? + ? | BK-G-10 | TÜRÜKüME : BODuNuMA : YiGiN : aNÇA : KaZGaNU : BİRTiM : BUNÇA : KaZGaNıP : KaNGıM : KaGaN : IT : YIL : ONuNÇ :… |

## A · Hızlı onay — 94 madde

Tam eşleşme, yazım farkı yok, başka okuması yok. Yine de ön dolgu: katmanı 'kitap', onaylamadan geçerli sayılmaz — ama hızlı geçilebilir.

| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |
|---|---|---:|---|---|---|---|
| YaBLaK | 𐰖𐰉𐰞𐰴 | 14× | fena, kötü; kötülük, nifak <br><sub>Tekin 2003, s. 257</sub> |  | KT-G-7 | YaZI : KONaYIN : TİSeR : TÜRK : BODuN : ÖLSiKiG : aNDA : aNYıG : KİŞİ : aNÇA : BOŞGURUR : eRMiŞ : IRaK : eRSeR… |
| SeN | 𐰾𐰤 | 13× | sen (yüklem bağlayıcısı olarak) <br><sub>Tekin 2003, s. 252</sub> |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| TÖRT | 𐱅𐰇𐰼𐱅 | 13× | dört <br><sub>Tekin 2003, s. 255</sub> |  | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| KİSRE | 𐰚𐰃𐰾𐰼𐰀 | 13× | geri, geride, batıda; sonra <br><sub>Tekin 2003, s. 247</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| İL | 𐰃𐰠 | 12× | devlet, ülke (bk. el) <br><sub>Tekin 2003, s. 244</sub> |  | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| NeŊ | 𐰤𐰭 | 12× | hiç, hiç de; herhangi <br><sub>Tekin 2003, s. 250</sub> |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| ON | 𐰆𐰣 | 12× | on (T 26, vb.) <br><sub>Tekin 2003, s. 250</sub> |  | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| aNI | 𐰣𐰃 | 11× | /ol/ zamirinin nesne durumu <br><sub>Tekin 2003, s. 238</sub> |  | KT-G-13 | TOKITDıM : BU --- İL : eRSeR : aNÇA : --- M : TaKI : eRİG : YiRTE : İRSeR : aNÇA : eRiG : YiRTE : BeŊGÜ : TaŞ … |
| KaRA | 𐰴𐰺𐰀 | 11× | kara; sıradan (halk), avam <br><sub>Tekin 2003, s. 246</sub> |  | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| BİZ | 𐰋𐰃𐰔 | 11× | biz <br><sub>Tekin 2003, s. 241</sub> |  | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |
| TaTaBI | 𐱃𐱃𐰉𐰃 | 11× | etnik ad <br><sub>Tekin 2003, s. 253</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| ÖTÜKeN | 𐰇𐱅𐰜𐰤 | 10× | Ötüken (kutsal devlet merkezi) <br><sub>Tekin 2003, s. 251</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| BaZ | 𐰉𐰔 | 10× | bağımlı, tabi <br><sub>Tekin 2003, s. 240</sub> |  | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| KITaYN | 𐰶𐰃𐱃𐰪 | 10× | etnik ad (Hıtay'lar) <br><sub>Tekin 2003, s. 247</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| OK | 𐰸 | 10× | ok; boy, kabile, kabile örgütü <br><sub>Tekin 2003, s. 250</sub> |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| TOKUZ | 𐱃𐰸𐰆𐰔 | 9× | dokuz <br><sub>Tekin 2003, s. 255</sub> |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| TaŞ | 𐱃𐱁 | 9× | dış <br><sub>Tekin 2003, s. 253</sub> |  | KT-G-11 | BUNDA : URTuM : NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM : aŊaR : KÖRÜ : BİLiŊ : TÜRK : aMTI : BODuN … |
| IDUK | 𐰃𐰑𐰸 | 9× | kutsal, mübarek <br><sub>Tekin 2003, s. 244</sub> |  | KT-D-10 | YaGI : BOLuP : İTiNÜ : YaRaTUNU : UMaDUK : YaNA : İÇiKMiŞ : BUNÇA : İŞiG : KÜÇüG : BİRTÜKGeRÜ : SaKıNMaTI : TÜ… |
| TÜMeN | 𐱅𐰇𐰢𐰤 | 9× | on bin (10000), tümen <br><sub>Tekin 2003, s. 256</sub> |  | KT-D-31 | UMaY : TeG : ÖGüM : KaTUN : KUTıŊA : İNiM : KÖLTİGiN : eR : aT : BOLDI : aLTI : YiGiRMİ : YaŞIŊA : eÇİM : KaGa… |
| KURıGaRU | 𐰸𐰆𐰺𐰍𐰺𐰆 | 9× | batıda, batıya doğru (KT G 2, D 24) <br><sub>Tekin 2003, s. 249</sub> |  | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| ULaYU | 𐰆𐰞𐰖𐰆 | 8× | önce, ilk önce; ve <br><sub>Tekin 2003, s. 256</sub> |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| YIŞ | 𐰘𐰃𐱁 | 8× | ormanlık dağ, orman <br><sub>Tekin 2003, s. 259</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| BeŊGÜ | 𐰋𐰭𐰏𐰇 | 8× | ebedi, sonsuz, abide <br><sub>Tekin 2003, s. 240</sub> |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| KÜŊ | 𐰚𐰇𐰭 | 8× | kadın köle, cariye <br><sub>Tekin 2003, s. 249</sub> |  | KT-D-7 | KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ : TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI : iŞİLiK : KIZ :… |
| SUB | 𐰽𐰆𐰉 | 8× | su; ırmak <br><sub>Tekin 2003, s. 252</sub> |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| ÜÇ | 𐰇𐰲 | 8× | üç <br><sub>Tekin 2003, s. 257</sub> |  | BK-D-32 | OGuZ : TaPA : SÜLeDiM : İLKİ : SÜ : TaŞIKMıŞ : eRTİ : iKİN : SÜ : eBDE : eRTİ : ÜÇ : OGuZ : SÜSİ : BaSA : KeLT… |
| BaŞLaYU | 𐰉𐱁𐰞𐰖𐰆 | 8× | önce, ilk önce <br><sub>Tekin 2003, s. 240</sub> |  | KT-D-16 | TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ : KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ : OL : TÖRÜDE : … |
| ŞaD | 𐱁𐰑 | 7× | şad (yüksek dereceli veliaht/prens unvanı) <br><sub>Tekin 2003, s. 253</sub> |  | KT-D-17 | eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TaRDUŞ : BODuN : ÜZE : ŞaD : eRTiM : eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL :… |
| ÖK | 𐰝 | 7× | pekiştirme edatı <br><sub>Tekin 2003, s. 251</sub> |  | TY1-B-6 | BÖLSeR : SeMiZ BUKA : TORUK : BUKA : TiYiN : BİLMeZeRMiŞ : TiYiN : aNÇA : SaKıNDıM : aNDA : KİSRE : TeŊRİ : Bİ… |
| İLTeRiŞ | 𐰃𐰠𐱅𐰼𐰾 | 7× | Kutluğ'un ünvanı <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-D-11 | SUBI : aNÇA : iTMiŞ : TÜRK : BODuN : YOK : BOLMaZUN : TİYiN : BODuN : BOLÇUN : TİYiN : KaŊıM : İLTeRiŞ : KaGaN… |
| YiGiRMİ | 𐰘𐰏𐰼𐰢𐰃 | 7× | yirmi; bk. yegirmi <br><sub>Tekin 2003, s. 259</sub> |  | KT-D-15 | KIRK : aRTUKI : YeTİ : YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ : TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLS… |
| BİRiGeRÜ | 𐰋𐰃𐰼𐰏𐰼𐰇 | 7× | (Tar. B 5); bk. birgärü <br><sub>Tekin 2003, s. 241</sub> |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| aMTI | 𐰢𐱃𐰃 | 6× | şimdi (KT G 3, vb.) <br><sub>Tekin 2003, s. 237</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| ÇIGaYN | 𐰲𐰃𐰍𐰪 | 6× | yoksul, fakir <br><sub>Tekin 2003, s. 242</sub> |  | KT-G-10 | YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM : ÇIGaYN : BODuNuG : BaY : KILDıM : aZ : BODuNuG : ÖKÜŞ : KILDıM : aZ… |
| BaY | 𐰉𐰖 | 6× | zengin <br><sub>Tekin 2003, s. 240</sub> |  | KT-G-10 | YOK : ÇIGaYN : BODuNuG : KOP : KUBRaTDıM : ÇIGaYN : BODuNuG : BaY : KILDıM : aZ : BODuNuG : ÖKÜŞ : KILDıM : aZ… |
| YIL | 𐰘𐰃𐰞 | 6× | yıl, sene <br><sub>Tekin 2003, s. 259</sub> |  | KT-D-8 | KÖRMiŞ : eLiG : YIL : İŞiG : KÜÇiG : BİRMiŞ : İLGeRÜ : KÜN : TOGSuKDA : BÖKLİ : KaGaNKA : TeGİ : SÜLeYÜ : BİRM… |
| NE | 𐰤𐰀 | 6× | ne; niçin <br><sub>Tekin 2003, s. 250</sub> |  | KT-D-9 | BODuN : aNÇA : TİMiŞ : İLLiG : BODuN : eRTiM : İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ :… |
| SİR | 𐰾𐰃𐰼 | 6× | etnik ad (BK D 1, vb.) <br><sub>Tekin 2003, s. 252</sub> |  | BK-D-1 | TeŊRİ : TeG : TeŊRİ : YaRaTMıŞ : TÜRK : BİLGE : KaGaN : SaBıM : KaŊıM : TÜRK : BİLGE : --- NDA : aL --- TI : S… |
| SÜÇİG | 𐰾𐰇𐰲𐰃𐰏 | 6× | tatlı <br><sub>Tekin 2003, s. 252</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| TaRDUŞ | 𐱃𐰺𐰑𐰆𐱁 | 6× | etnik ad <br><sub>Tekin 2003, s. 253</sub> |  | KT-D-13 | YeTİYüZ : eR : BOLMıS : YeTİYüZ : eR : BOLıP : iLSiReMiŞ : KaGaNSıRaMıŞ : BODuNıG : KÜŊeDMiŞ : KULaDMıŞ : BODu… |
| BaLBaL | 𐰉𐰞𐰉𐰞 | 6× | balbal (şahıs heykeli taş) <br><sub>Tekin 2003, s. 239</sub> |  | KT-D-16 | TÖRÜG : KaZGaNıP : UÇA : BaRMıŞ : KaŊıM : KaGaNKA : BaŞLaYU : BaZ : KaGaNıG : BaLBaL : TİKMiŞ : OL : TÖRÜDE : … |
| TaRKaN | 𐱃𐰺𐰴𐰣 | 6× | tarkan (soylu unvanı, komutan) <br><sub>Tekin 2003, s. 253</sub> |  | KT-K-12 | UDaR : SeŊÜN : KeLTİ : TaBGaÇ : KaGaNDA : İSiyİ : LİKeŊ : KeLTİ : BİR : TÜMeN : aGI : aLTUN : KÜMüŞ : KeRGeSİZ… |
| MaŊA | 𐰢𐰭𐰀 | 5× | bana (bk. baŋa) <br><sub>Tekin 2003, s. 250</sub> |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| KİÇiG | 𐰚𐰃𐰲𐰏 | 5× | az, pek az, hiç; küçük <br><sub>Tekin 2003, s. 247</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| IGaR | 𐰃𐰍𐰺 | 5× | değerli, sevgili, kıymetli <br><sub>Tekin 2003, s. 244</sub> |  | KT-D-29 | KİSRE : TeŊRİ : YaRLıKaZU : KUTuM : BaR : ÜÇüN : ÜLÜGüM : BaR : ÜÇÜN : ÖLTeÇİ : BODuNuG : TİRGüRÜ : İGiTiM : Y… |
| SeŊÜN | 𐰾𐰭𐰇𐰤 | 5× | general (< Çin. *tsiang-kün*); bk. saŋun <br><sub>Tekin 2003, s. 252</sub> |  | KT-K-12 | UDaR : SeŊÜN : KeLTİ : TaBGaÇ : KaGaNDA : İSiyİ : LİKeŊ : KeLTİ : BİR : TÜMeN : aGI : aLTUN : KÜMüŞ : KeRGeSİZ… |
| KaDıRKaN | 𐰴𐰑𐰺𐰴𐰣 | 5× | yer adı (Kingan dağları) Kadız, Kadiz yer adı <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-D-2 | TÖRT : BOLıŊ : KOP : YaGI : eRMiŞ : SÜ : SÜLiPeN : TÖRT : BOLuŊDaKI : BODuNıG : KOP : aLMıŞ : KOP : BaZ : KILM… |
| ŞaNTUŊ | 𐱁𐰦𐰆𐰭 | 4× | yer adı (Şantung ovası) <br><sub>Tekin 2003, s. 253</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| YİG | 𐰘𐰃𐰏 | 4× | daha iyi; bk. yeg <br><sub>Tekin 2003, s. 259</sub> |  | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| IRaK | 𐰃𐰺𐰴 | 4× | uzak <br><sub>Tekin 2003, s. 244</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| aYNıG | 𐰪𐰍 | 4× | kötü, fena; çok, pek (KT G 3, vb.; IB 5, vb.) <br><sub>Tekin 2003, s. 238</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| aŊaR | 𐰭𐰺 | 4× | /ol/ zamirinin verme durumu (KT G 11, vb.) <br><sub>Tekin 2003, s. 238</sub> |  | KT-G-11 | BUNDA : URTuM : NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM : aŊaR : KÖRÜ : BİLiŊ : TÜRK : aMTI : BODuN … |
| BOZ | 𐰉𐰆𐰔 | 4× | boz <br><sub>Tekin 2003, s. 241</sub> |  | KT-D-32 | KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI : YaRaKLıGDI : KaGaNKA :… |
| YÜZ | 𐰘𐰇𐰔 | 4× | yüz (100) <br><sub>Tekin 2003, s. 260</sub> |  | KT-D-33 | ÖLTİ : iKİNTİ : IŞBaRA : YaMTaR : BOZ : aTıG : BİNiP : TeGDİ : OL : aT : aNDA : ÖLTİ : ÜÇünÇ : YeGeN : SİLiG :… |
| ŞaLÇI | 𐱁𐰞𐰲𐰃 | 4× | kişi adı (Alp Şalçı) <br><sub>Tekin 2003, s. 253</sub> |  | KT-D-40 | aLP : eR : BİZiŊE : TeGMiŞ : eRTİ : aNTaG : ÖDKE : ÖKüNüP : KÖLTİGiNiG : aZ : eRiN : İRTÜRÜ : ITıMıZ : ULuG : … |
| BİŊ | 𐰋𐰃𐰭 | 4× | bin (1000) <br><sub>Tekin 2003, s. 241</sub> |  | BK-G-1 | --- : TaBGaÇ : aTLıG : SÜSİ : BİR : TÜMeN : aRTUKI : YiTİ : BİŊ : SÜG : İLKİ : KÜN : ÖLüRTüM : YaDaG : SÜSİN :… |
| BUYRUK | 𐰉𐰆𐰖𐰺𐰸 | 4× | buyruk, vezir, bakan, emredici <br><sub>Tekin 2003, s. 242</sub> |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| YIMŞaK | 𐰘𐰃𐰢𐱁𐰴 | 4× | yumuşak <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| BÖDKE | 𐰋𐰇𐰓𐰚𐰀 | 4× | bu zamanda, bu devirde (< bu ödke) <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-G-11 | BUNDA : URTuM : NeŊ : NeŊ : SaBıM : eRSeR : BeŊGÜ : TaŞKA : URTuM : aŊaR : KÖRÜ : BİLiŊ : TÜRK : aMTI : BODuN … |
| KeRGeK | 𐰚𐰼𐰏𐰚 | 4× | gerek, yok, namevcut <br><sub>Tekin 2003, s. 247</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| BeGLiK | 𐰋𐰏𐰠𐰚 | 4× | bey olmaya layık <br><sub>Tekin 2003, s. 240</sub> |  | KT-D-7 | KaGaNLaDUK : KaGaNIN : YİTüRÜ : IDMıŞ : TaBGaÇ : BODuNKA : BeGLiK : URI : OGLIN : KUL : BOLDI : iŞİLiK : KIZ :… |
| TeMiR | 𐱅𐰢𐰼 | 4× | Kapığ) <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-D-17 | eÇİM : KaGaN : OLuRTUKDA : ÖZüM : TaRDUŞ : BODuN : ÜZE : ŞaD : eRTiM : eÇİM : KaGaN : BİRLE : İLGeRÜ : YaŞıL :… |
| KÖGMeN | 𐰚𐰇𐰏𐰢𐰤 | 4× | Kögmen Dağı, ormanı, Sayan Dağı <br><sub>Tanyeri, Sözlük</sub> |  | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |
| YaBıZ | 𐰖𐰉𐰔 | 4× | fena, kötü <br><sub>Tekin 2003, s. 257</sub> |  | KT-D-26 | KaGaN : OLuRTDI : eRiNÇ : NeŊ : YILSıG : BODuNKA : OLuRMaDıM : İÇRE : aŞSıZ : TaŞRA : TONSuZ : YaBıZ : YaBLaK … |
| BaLıK | 𐰉𐰞𐰶 | 4× | şehir, kale kent <br><sub>Tekin 2003, s. 239</sub> |  | BK-D-28 | BOLÇUDA : SÜŊüŞDüMüZ : KaGaNIN : YaBGUSIN : ŞaDIN : aNDA : ÖLüRTüM : İLiN : aNDA : aLTıM : OTuZ : YaŞıMA : BiŞ… |
| YaRaKLıG | 𐰖𐰺𐰴𐰞𐰍 | 4× | silahlı <br><sub>Tekin 2003, s. 258</sub> |  | KT-D-23 | ÖKÜN : KÜReGÜŊiN : ÜÇÜN : İGiDMiŞ : BİLGE : KaGaNıŊA : eRMiŞ : BaRMıŞ : eDGÜ : iLiŊE : KeNTÜ : YaŊıLDıG : YaBL… |
| OTuZTaTaR | 𐰆𐱃𐰔𐱃𐱃𐰺 | 4× | etnik ad <br><sub>Tekin 2003, s. 250</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| YiNÇÜ | 𐰘𐰨𐰇 | 3× | bk. yençü <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-G-3 | KOP : İTDiM : OL : aMTI : aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ : YOK : İLGeRÜ : Şa… |
| KÜMüŞ | 𐰚𐰇𐰢𐱁 | 3× | gümüş <br><sub>Tekin 2003, s. 249</sub> |  | KT-G-5 | TÜZüLTüM : aLTUN : KÜMüŞ : İŞGiTİ : KUTaY : BUŊSuZ : aNÇA : BİRÜR : TaBGaÇ : BODuN : SaBI : SÜÇİG : aGISI : YI… |
| BİTiG | 𐰋𐰃𐱅𐰏 | 3× | yazı, kitap, kitabe, el yazması <br><sub>Tekin 2003, s. 241</sub> |  | KT-G-13 | TOKITDıM : BU --- İL : eRSeR : aNÇA : --- M : TaKI : eRİG : YiRTE : İRSeR : aNÇA : eRiG : YiRTE : BeŊGÜ : TaŞ … |
| KOYN | 𐰸𐰆𐰪 | 3× | koyun <br><sub>Tekin 2003, s. 248</sub> |  | KT-D-12 | YORuYOR : TİYiN : KÜ : eŞiDiP : BaLIKDaKI : TaGIKMıŞ : TaGDakI : İNMiS : TİRiLiP : YeTMiŞ : eR : BOLMıS : TeŊR… |
| KIRK | 𐰶𐰃𐰺𐰴 | 3× | kırk (40) <br><sub>Tekin 2003, s. 247</sub> |  | KT-D-15 | KIRK : aRTUKI : YeTİ : YOLI : SÜLeMiŞ : YiGiRMİ : SÜŊüŞ : SÜŊüŞMiŞ : TeŊRİ : YaRLıKaDUK : ÜÇÜN : İLLiGiG : iLS… |
| BeG | 𐰋𐰏 | 3× | bey, soylu lider, komutan <br><sub>Tekin 2003, s. 240</sub> |  | KT-D-20 | BaRS : BeG : eRTİ : KaGaN : aT : BUNDA : BİZ : BİRTiMiZ : SİŊiLiM : KONÇuYUG : BİRTiMiZ : ÖZİ : YaŊıLDI : KaGa… |
| eŊ | 𐰭 | 3× | büyük baş av hayvanı <br><sub>Tekin 2003, s. 243</sub> |  | KT-D-32 | KÖLTİGiN : YaDaGıN : OPLaYU : TeGDİ : OŊ : TUTuK : YURÇİN : YaRaKLıG : eLiGiN : TUTDI : YaRaKLıGDI : KaGaNKA :… |
| aK | 𐰴 | 3× | ak, kır (at donu) (KT D 36, vb.) <br><sub>Tekin 2003, s. 237</sub> |  | KT-D-35 | YaŞIŊA : KIRKıZ : TaPA : SÜLeDiMiZ : SÜŊÜG : BaTıMI : KaRıG : SÖKiPeN : KÖGMeN : YIŞıG : TOGA : YORIP : KIRKıZ… |
| eDiZ | 𐰓𐰔 | 3× | etnik ad (Eki Ädiz) <br><sub>Tekin 2003, s. 242</sub> |  | KT-K-5 | KÖLTİGiN : aZMaNKaG : BİNiP : OPLaYU : TeGDİ : aLTI : eRiG : SaNÇDI : SÜ : TeGİŞİNDE : YİTiNÇ : eRiG : KILıÇLa… |
| aPA | 𐰯𐰀 | 3× | abla (Barık II 4); yuk. bk. <br><sub>Tekin 2003, s. 238</sub> |  | KT-B-1 | KORuDuNuG --- İNiM : KÖLTİGiN : ÖLTİ --- : İŞiG : KÜÇüG : BİRTÜK : ÜÇüN : TÜRK : BİLGE : KaGaN : aYUKIKA : İNi… |
| KARLUK | 𐰴𐰺𐰞𐰸 | 3× | etnik ad <br><sub>Tekin 2003, s. 246</sub> |  | BK-D-29 | BİR : YAŞIMA : KARLUK : BODuN : BUŊSUZ : ERÜR : BARUR : ERKLİ : YAGI : BOLDI : TAMAG : IDUK : BAŞDA : SÜŊÜŞDÜM… |
| ÖZ | 𐰇𐰔 | 3× | vadi <br><sub>Tekin 2003, s. 251</sub> |  | BK-G-11 | KaŊI : LİSÜN : TaY : SeŊÜN : BaŞaDU : BİŞ : YÜZ : eReN : KeLTİ : KOKuLuK : Ö --- : aLTUN : KÜMüŞ : KeRGeKSiZ :… |
| TaTaR | 𐱃𐱃𐰺 | 3× | etnik ad (Otuz Tatar, Tokuz Tatar) <br><sub>Tekin 2003, s. 253</sub> |  | KT-G-1 | TeŊRİ : TeG : TeŊRİDE : BOLMuŞ : TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM : SaBıMıN : TÜKeTİ : eŞİDGiL : UL… |
| eDGÜTİ | 𐰓𐰏𐰇𐱅𐰃 | 3× | iyice <br><sub>Tekin 2003, s. 242</sub> |  | KT-G-2 | TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : Bİ… |
| aRKıŞ | 𐰺𐰴𐱁 | 3× | alkış, övgü (Tuva I 3) <br><sub>Tekin 2003, s. 238</sub> |  | KT-G-8 | OL : YiRGeRÜ : BaRSaR : TÜRK : BODuN : ÖLTeÇİ : SeN : ÖTÜKeN : YİR : OLuRuP : aRKıŞ : TİRKiŞ : ISaR : NeŊ : BU… |
| BeDiZ | 𐰋𐰓𐰔 | 3× | süs, resim, heykel, süsleme <br><sub>Tekin 2003, s. 240</sub> |  | KT-G-12 | TaBGaÇ : KaGaNıŊ : İÇReKİ : BeDiZÇİG : ITI : aŊaR : aDıNÇIG : BaRK : YaRaTURTuM : İÇİN : TaŞIN : aDıNÇIG : BeD… |
| TÜPÜT | 𐱅𐰇𐰯𐰇𐱅 | 3× | yer adı (Tibet) <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| BİZiŊE | 𐰋𐰃𐰔𐰭𐰀 | 3× | bize (KT D 19, 40; BK D 16) <br><sub>Tekin 2003, s. 241</sub> |  | KT-D-19 | ÜÇÜN : BİZiŊE : YaŊıLDUKIN : ÜÇÜN : KaGaNI : ÖLTİ : BUYRUKI : BeGLeRİ : YiME : ÖLTİ : ON : OK : BODuN : eMGeK … |
| KÜNTüZ | 𐰚𐰇𐰤𐱅𐰔 | 3× | gündüz <br><sub>Tekin 2003, s. 249</sub> |  | KT-D-27 | TİYiN : TÜRK : BODuN : ÜÇÜN : TÜN : UDuMaDıM : KÜNTüZ : OLuRMaDıM : İNiM : KÖLTİGiN : BİRLE : iKİ : ŞaD : BİRL… |
| iLTeBeR | 𐰠𐱅𐰋𐰼 | 3× | yüksek bir ünvan <br><sub>Tekin 1998, Sözlük (s. 97-116)</sub> |  | KT-KD-1 | KÖLTİGiN : KOYN : YILKA : YİTİ : YiGiRMiKE : UÇDI : TOKuZuNÇ : aY : YiTİ : OTuZKA : YUG : eRTÜRTüMüZ : BaRKIN … |
| SeKiZ | 𐰾𐰚𐰔 | 3× | sekiz <br><sub>Tekin 2003, s. 252</sub> |  | BK-D-24 | aZ : BODuNuG : ÖKüŞ : KILTıM : IGaR : iLLiGDE : IGaR : KaGaNLıGDA : YİG : KILDıM : TÖRT : BULuŊDaKI : KaGaNLıG… |
| YaDaG | 𐰖𐰑𐰍 | 3× | yaya; piyade <br><sub>Tekin 2003, s. 257</sub> |  | BK-D-32 | OGuZ : TaPA : SÜLeDiM : İLKİ : SÜ : TaŞIKMıŞ : eRTİ : iKİN : SÜ : eBDE : eRTİ : ÜÇ : OGuZ : SÜSİ : BaSA : KeLT… |
| aTLıG | 𐱃𐰞𐰍 | 3× | unvanı ya da rütbesi olan (BK D 41) <br><sub>Tekin 2003, s. 239</sub> |  | BK-G-1 | --- : TaBGaÇ : aTLıG : SÜSİ : BİR : TÜMeN : aRTUKI : YiTİ : BİŊ : SÜG : İLKİ : KÜN : ÖLüRTüM : YaDaG : SÜSİN :… |
| eRTiŊÜ | 𐰼𐱅𐰭𐰇 | 3× | pek, çok, aşırı derecede <br><sub>Tekin 2003, s. 243</sub> |  | BK-G-14 | BaŞLaYU : ULaYU : ŞaDPIT : BeGLeR : BU --- : TaMaN : TaRKaN : TONYUKUK : BOYLA : BaGA : TaRKaN : ULaYU : BUYRU… |
| BaYıRKU | 𐰉𐰖𐰺𐰸𐰆 | 3× | etnik ad <br><sub>Tekin 2003, s. 240</sub> |  | KT-G-4 | KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM : YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM : BUNÇA : YİRKE : Te… |
| SIGıTÇI | 𐰾𐰃𐰍𐱃𐰲𐰃 | 3× | yasçı, ağlayıcı <br><sub>Tekin 2003, s. 252</sub> |  | KT-D-4 | KeRGeK : BOLMıS : YUGÇI : SIGıTÇI : ÖŊRE : KÜN : TOGSıKDA : BÖKLİ : ÇÖLüGiL : TaBGaÇ : TÜPÜT : aPaR : PURuM : … |
| KaGaNLıG | 𐰴𐰍𐰣𐰞𐰍 | 3× | hakanı olan, bağımsız <br><sub>Tekin 2003, s. 245</sub> |  | KT-D-9 | BODuN : aNÇA : TİMiŞ : İLLiG : BODuN : eRTiM : İLiM : ıMTI : KaNI : KiMKE : İLiG : KaZGaNURMeN : TİR : eRMiŞ :… |
