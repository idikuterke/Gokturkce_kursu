# Cümlecik Aday Listesi

Üretim: 2026-10-16 · `npm run cumlecik:ayir`

| | |
|---|---|
| Dize | 214 |
| Cümlecik adayı | 953 |
| Alıştırmaya uygun (≤12 kelime, yıpranmasız) | **812** |
| Yüklemle biten (yüksek güven) | 799 |
| Hizasız olduğu için atlanan dize | 1 |

Uzunluk dağılımı: 1-5 kelime: 545 · 13+ kelime: 43 · 6-8 kelime: 243 · 9-12 kelime: 122

## Yöntem

Köktürkçede yüklem cümle sonundadır. Aday sınırlar şu eklerle biten kelimelerden **sonra** konmuştur:
`-mIş`, `-dI/-tI`, `-dIm`, `-dImIz`, `-dIŋ`, `-rInç`, `-ur/-ür`, `erti`, `ermiş`.

`üçün`, `tegi`, `yime`, `ok`, `erinç` sınır oluşturmaz (bağlayıcı/edat).
3 kelimeden kısa parçalar önceki cümleciğe bağlanır.

## Bu bir öneridir

Her kayıt `onay: "beklemede"` ile çıkar. `onay` alanı `onay` olmadan
hiçbir cümlecik alıştırmaya girmez. `id`, `runik`, `transkripsiyon`,
`kelimeAraligi` korpustan türetilir — değiştirilmez.

## İlk 20 aday

- `KT-G-1#1` (4 kelime, yüklemle biter)
  - TeŊRİ : TeG : TeŊRİDE : BOLMuŞ
  - TANRI : DEK : TANRIDAN : OLMUŞ
- `KT-G-1#2` (6 kelime, yüklemle biter)
  - TÜRÜK : BİLGE : KaGaN : BU : ÖDKE : OLuRTıM
  - TÜRK : BİLGE : KAĞAN : BU : ÖDE : OTURDUM
- `KT-G-1#3` (3 kelime, yüklemle biter)
  - SaBıMıN : TÜKeTİ : eŞİDGiL
  - SAVIMI : TÜKETE[NE-DEK] : İŞİT[İN]
- `KT-G-1#4` (16 kelime)
  - ULaYU : İN : YeGÜNüM : OGLaNıM : BİRiKİ : OGuŞuM : BODuNuM : BİRiYE : ŞaDPIT : BeGLeR : YIRıYA : TaRKaT : BUYRUK : BeGLeR : OTuZ : TaTaR
  - EVVELA : KARDEŞ : YEĞENİM : OĞLUM : BERİKİ : OĞUŞUM : BOYLARIM : BERİDE : ŞADPIT : BEĞLERİ : YIRIDA : TARKAT : BUYRUK : BEĞLERİ : OTUZ : TATAR
- `KT-G-2#1` (28 kelime, yüklemle biter)
  - TOKUZ : OGuZ : BeGLeRİ : BODuNI : BU : SaBıMıN : eDGÜTİ : iŞİD : KaTıGDI : TIŊLA : İLGeRÜ : KÜN : TOGSıKA : BİRiGeRÜ : KÜN : ORTUSIŊaRU : KURIGaRI : KÜN : BaTSIKIŊA : YIRıGaRI : TÜN : ORTUSIŊaRU : aNDA : İÇReKİ : BODuN : KOP : MaŊA : KÖRüR
  - DOKUZ : OĞUZ : BEĞLERİ : BOYLARI : BU : SAVIMI : İYİCE : İŞİT : KATICA : DİNLE : İLERİ : GÜN : DOĞUSUNA : BERİDE : GÜN : ORTASINA : GERİDE : GÜN : BATISINA : YIRIDA : GECE : ORTASINA : [O] ANDA : İÇİNDEKİ : BOYLAR : HEP : BANA : GÖRÜR
- `KT-G-2#2` (2 kelime)
  - BUNÇA : BODuN
  - BUNCA : BOYLARI
- `KT-G-3#1` (4 kelime, yüklemle biter)
  - KOP : İTDiM : OL : aMTI
  - HEP : [DÜZEN] ETDİM : O[NLARIN] : ŞİMDİ
- `KT-G-3#2` (9 kelime, yüklemle biter)
  - aNYıG : YOK : TÜRK : KaGaN : ÖTÜKeN : YIŞ : OLuRSaR : İLTE : BUŊ
  - ANYI : YOK : TÜRK : KAĞANI : ÖTÜKEN : YIŞDA : OTURSA : İLDE : BUNG
- `KT-G-3#3` (3 kelime, yüklemle biter)
  - YOK : İLGeRÜ : ŞaNTUŊ
  - YOK : İLERİ : ŞANTUNG
- `KT-G-3#4` (3 kelime, yüklemle biter)
  - YaZIKA : TeGİ : SÜLeDiM
  - OVASINA : DEĞİN : SÜLEDİM
- `KT-G-3#5` (3 kelime, yüklemle biter)
  - TaLUYKA : KİÇiG : TeGMeDiM
  - TALUYA : GEÇİP : DEĞMEDİM
- `KT-G-3#6` (5 kelime, yüklemle biter)
  - BİRiGeRÜ : TOKUZ : eRSiNKE : TeGİ : SÜLeDiM
  - BERİDE : DOKUZ : ERSİNE : DEĞİN : SÜLEDİM
- `KT-G-3#7` (3 kelime, yüklemle biter)
  - TÜPÜTKE : KİÇiG : TeGMeDiM
  - TİBETE : GEÇİP : DEĞMEDİM
- `KT-G-3#8` (3 kelime)
  - KURIGaRI : YiNÇÜ : ÖGüZ ---
  - GERİDE : İNCİ : ÖGÜZ[Ü] ---
- `KT-G-4#1` (4 kelime, yüklemle biter)
  - KeÇE : TeMiRKaPıGKA : TeGİ : SÜLeDiM
  - GEÇİP : DEMİRKAPIYA : DEĞİN : SÜLEDİM
- `KT-G-4#2` (6 kelime, yüklemle biter)
  - YIRıGaRI : YiR : BaYıRKU : YİRİŊE : TeGİ : SÜLeDiM
  - YIRIDA : YİR : BAYIRKU : YERİNE : DEĞİN : SÜLEDİM
- `KT-G-4#3` (4 kelime, yüklemle biter)
  - BUNÇA : YİRKE : TeGİ : YORuTDıM
  - BUNCA : YER[LER]E : DEĞİN : [ORDU] YÜRÜTTÜM
- `KT-G-4#4` (4 kelime, yüklemle biter)
  - ÖTÜKeN : YIŞDA : YİG : İDİ
  - ÖTÜKEN : YIŞDAN : YEĞ : İDİ
- `KT-G-4#5` (8 kelime, yüklemle biter)
  - YOK : eRMiŞ : İL : TUTSıK : YİR : ÖTÜKeN : YIŞ : eRMiŞ
  - YOK : İMİŞ : İL : TUTULASI : YER : ÖTÜKEN : YIŞ : İMİŞ
- `KT-G-4#6` (6 kelime)
  - BU : YİRDE : OLuRuP : TaBGaÇ : KaGaN : BİRLE
  - BU : YERDE : OTURUP : TABGAÇ : KAĞANI : İLE
