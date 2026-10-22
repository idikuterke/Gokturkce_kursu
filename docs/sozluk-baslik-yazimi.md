# Sözlük başlık yazımı

Sözlük birleştiricisi gevşek katlama (ö=o, ü=u) kullanıyordu. Runikte bu iki
ses ayrı tamga (𐰇 ve 𐰆), dolayısıyla "ög" ile "oguz" aynı anahtara düşüyor,
tam eşleşme yoksa EN SIK GEÇEN biçim başlık yazımı oluyordu. Sözlükte bambaşka
bir sözcüğün ya da çekimli bir biçimin yazımı görünüyordu.

Birleştirici düzeltildi (`engine/sozluk-birlestir.mjs`): sıkı katlama, ve
başlık runiği yalnız tam eşleşmeden. Mevcut veri `engine/sozluk-baslik-onar.mjs`
ile onarıldı.

## Onarım nasıl çalışıyor

Kök **uydurulmuyor**. Tanıklı bir çekimli biçimin runik dizisi soldan
kısaltılıyor ve her kısaltmanın tamga-ses karşılığı maddenin okunuşuyla
karşılaştırılıyor; tam oturan en uzun ön ek kök sayılıyor. Eşleme, ünsüz
işaretinin ünlüyü önünde ya da ardında yazmadan taşıyabilmesini hesaba
katıyor (Eski Türkçede ünlü çoğu zaman yazılmaz).

Oturmazsa yazım boş bırakılıyor: yanlış yazım göstermektense hiç
göstermemek yeğdir.

## İnsan onaylı (2)

| Madde | Eski | Yeni | Dayanak |
|---|---|---|---|
| ög | 𐰆𐰍𐰔 *(oguz)* | 𐰇𐰏 | ÖGüM 𐰇𐰏𐰢, +(ü)m |
| törü | 𐱃𐰆𐰺𐰆 *(kalın sıralı)* | 𐱅𐰇𐰼𐰇 | TÖRÜG 𐱅𐰇𐰼𐰇𐰏, +(X)g |

## Makine türetimi — teyit bekliyor (17)

Hepsi `teyitGerek: true`; sözlük ekranında uyarı rozetiyle görünüyorlar.
Tamga-ses eşlemesi **yazımın okunuşa oturduğunu** söyler, o biçimin bu
maddenin çekimi olduğunu söylemez. Özellikle *yaz* (← YaZIKA, kökü *yazı*
olabilir) ve *kuş* (← KUŞaLGuKDA, kökü *kuşa-* olabilir) gözden geçirilmeli.

| Madde | Eski yazım | Yeni | Kaynak biçim | Tanık |
|---|---|---|---|---|
| adgır | 𐰑𐰍𐰃𐰺𐰍 | 𐰑𐰍𐰃𐰺 | aDGIRIG 𐰑𐰍𐰃𐰺𐰍 | KT-D-35 |
| armakçı | 𐰺𐰢𐰴𐰲𐰃𐰾𐰃𐰤 | 𐰺𐰢𐰴𐰲𐰃 | aRMaKÇISIN 𐰺𐰢𐰴𐰲𐰃𐰾𐰃𐰤 | KT-D-6 |
| barım | 𐰉𐰺𐰢𐰃𐰤 | 𐰉𐰺𐰢 | BaRıMıN 𐰉𐰺𐰢𐰤 | BK-G-3 |
| eçi | 𐰲𐰃𐰢 | 𐰲𐰃 | eÇİM 𐰲𐰃𐰢 | KT-D-1 |
| kaŋ | 𐰴𐰭𐰢 | 𐰴𐰭 | KaŊıM 𐰴𐰭𐰢 | KT-D-11 |
| kum | 𐰚𐰇𐰢𐱁 | 𐰴𐰆𐰢 | KUMuG 𐰴𐰆𐰢𐰍 | TY1-B-7 |
| kut | 𐰸𐰆𐱃𐰢 | 𐰸𐰆𐱃 | KUTuM 𐰸𐰆𐱃𐰢 | KT-G-9 |
| kuş | 𐰚𐰇𐰾𐰃 | 𐰴𐰆𐱁 | KUŞaLGuKDA 𐰴𐰆𐱁𐰞𐰍𐰴𐰑𐰀 | KT-K-5 |
| kümiş | 𐰚𐰇𐰢𐱁𐰃𐰤 | 𐰚𐰇𐰢𐱁 | KÜMiŞİN 𐰚𐰇𐰢𐱁𐰃𐰤 | KT-GB-1 |
| kış | 𐰚𐰃𐰾𐰃 | 𐰶𐰃𐱁 | KIŞıN 𐰶𐰃𐱁𐰣 | BK-G-2 |
| sanç- | 𐰽𐰨𐰑𐰃 | 𐰽𐰨 | SaNÇDI 𐰽𐰨𐰑𐰃 | KT-K-2 |
| tag | 𐱃𐰍𐰲𐰀 | 𐱃𐰍 | TaGÇA 𐱃𐰍𐰲𐰀 | KT-D-24 |
| tokı- | 𐱃𐰸𐰃𐱃𐰑𐰢 | 𐱃𐰸𐰃 | TOKITDıM 𐱃𐰸𐰃𐱃𐰑𐰢 | KT-G-13 |
| yaz | 𐰖𐰔𐰃𐰴𐰀 | 𐰖𐰔 | YaZIKA 𐰖𐰔𐰃𐰴𐰀 | KT-G-3 |
| yol | 𐰖𐰆𐰞𐰃 | 𐰖𐰆𐰞 | YOLI 𐰖𐰆𐰞𐰃 | KT-D-15 |
| yılkı | 𐰘𐰃𐰞𐰴𐰃𐰾𐰃𐰤 | 𐰘𐰃𐰞𐰴𐰃 | YILKIG 𐰘𐰃𐰞𐰴𐰃𐰍 | BK-D-38 |
| ırk | 𐰃𐰼𐰚𐰤 | 𐰃𐰺𐰴 | IRKDA 𐰃𐰺𐰴𐰑𐰀 | TY1-B-5 |

## Yazımı boş bırakılan (17)

Yalın biçim korpusta tanıklı değil ve çekimli biçimlerden de güvenle kök
çıkarılamadı. Uygulamada bu maddelerin tamgası gösterilmiyor; okunuş ve
anlam duruyor.

| Madde | Eski yazım |
|---|---|
| bitigçi | — |
| kadaş | — |
| koy | 𐰸𐰆𐰪 |
| kunçuy | — |
| orun | — |
| sekizon | — |
| söŋüş / süŋüş | — |
| taryat | — |
| tevey | — |
| tokuzon | — |
| türük sir | — |
| yeyil | — |
| çabış | 𐰲𐰉𐰾𐰃 |
| çerig | — |
| örgin | — |
| özen | — |
| ügüz / oguz | — |

Üretim: `node engine/sozluk-baslik-onar.mjs` (`--kuru` ile yazmadan rapor).

## Gözden geçirilen ikisi (insan onaylı)

Bağımsız kaynakla (turkbitig.com, Kültigin anıtı) denetlendi.

**yaz** — YaZIKA'dan türetilmişti; o biçim *yazı* "ova" sözcüğünün:
KT-D-17 "Şantung : yazığa : değin : süledik". Mevsim anlamının gerçek tanığı
BK-G-2: "otuz artukı tokuz yaşıma **yazın** Tatabı tapa süledim". Yazım aynı
kaldı (𐰖𐰔) ama dayanak YaZıN 𐰖𐰔𐰣 oldu. Runik ikisini zaten ayırıyor:
yaz 𐰖𐰔, yazı 𐰖𐰔𐰃.

**kuş** — KUŞaLGuKDA'dan türetilmişti; o bir yer adı + bulunma hâli:
KT-K-5 "ikinti : Kuşalgukda : Ediz : birle : süŋüşdümüz". Korpusta *kuş*
sözcüğünün kendisi hiç geçmiyor. Yazım boşaltıldı; madde uygulamada
gösterilmiyor.

## Biçim listesi kirliliği — karar bekliyor

Sözlük ekranındaki "Kitabelerdeki biçimleri" listesi çevriyazı ön ekiyle
toplanıyor. "yaz" maddesinin altında *yazı* "ova"nın çekimleri duruyordu
(YaZIKA, YaZIDA). Aynı karışma 41 maddede görünüyor.

**Mekanik süzgeç denendi ve bırakıldı.** "Biçimin runiği maddenin runiğiyle
başlamalı" kuralı kış/kişi gibi apaçık ayrı sözcüklerde doğru çalışıyor ama
gerçek çekimlerin çoğunu da siliyor:

| Madde | Kural silerdi | Oysa |
|---|---|---|
| süle- 𐰾𐰇𐰠𐰀 | SÜLeDiM 𐰾𐰇𐰠𐰓𐰢 | gerçek çekim; kökün son ünlüsü çekimde yazılmıyor |
| teŋri 𐱅𐰭𐰼𐰃 | TeŊRİ 𐱅𐰏𐰼𐰃 | aynı sözcük, tamga varyantı (𐰭 ~ 𐰏) |
| yagı 𐰖𐰍𐰃 | YaGıMıZ 𐰖𐰍𐰢𐰔 | gerçek çekim; ı yazılmamış |

Birkaç doğru ayıklama için onlarca doğru biçimi silmek veriyi bozar, o yüzden
uygulanmadı. `node engine/sozluk-baslik-onar.mjs` çalıştığında liste rapor
olarak basılıyor; ayıklama insan kararıyla yapılmalı.

### Tam liste

| Madde | Başlık | Şüpheli biçimler |
|---|---|---|
| kış | 𐰶𐰃𐱁 | KİŞİ 𐰚𐰃𐰾𐰃, KİSRE 𐰚𐰃𐰾𐰼𐰀, KİŞİG 𐰚𐰃𐰾𐰃𐰏, KİŞİ 𐰚𐰃𐱁𐰃, KİŞİN 𐰚𐰃𐰾𐰃𐰤, KISaLıM 𐰶𐰃𐰽𐰞𐰢 |
| kök | 𐰚𐰇𐰚 | KÖK 𐰜𐰇𐰚, KÖK 𐰝𐰝, KÖK 𐰝𐰜, KÖK 𐰚𐰝, KOKuLuK 𐰸𐰆𐰴𐰞𐰴 |
| süle- | 𐰾𐰇𐰠𐰀 | SÜLeDiM 𐰾𐰇𐰠𐰓𐰢, SÜLeYÜ 𐰾𐰇𐰠𐰘𐰇, SÜLeLiM 𐰾𐰇𐰠𐰠𐰢, SÜLeP 𐰾𐰇𐰠𐰯, SÜLeMiŞ 𐰾𐰇𐰠𐰢𐰾 |
| kum | 𐰴𐰆𐰢 | KÜMüŞ 𐰚𐰇𐰢𐱁, KÜMüŞ 𐰚𐰇𐰢𐰾, KÜMüŞ 𐰝𐰇𐰢𐰾, KÜMiŞİN 𐰚𐰇𐰢𐱁𐰃𐰤, KÜMüŞİN 𐰚𐰇𐰢𐱁𐰃𐰤 |
| kün | 𐰚𐰇𐰤 | KÜŊ 𐰚𐰇𐰭, KÜN 𐰜𐰇𐰤, KÜŊLiG 𐰚𐰇𐰭𐰠𐰍, KÜN 𐰝𐰇𐰤 |
| ini | 𐰃𐰤𐰃 | İNiM 𐰃𐰤𐰢, İNiLİ 𐰃𐰤𐰠𐰃, İNiSİ 𐰃𐰤𐰾𐰃, İNiG 𐰃𐰤𐰏 |
| eşid- | 𐰾𐰃𐰓 | eŞiDiP 𐰾𐰓𐰯, eŞiD 𐰾𐰓, EŞİDİP 𐰾𐰓𐰯, eŞiDiŊ 𐰾𐰓𐰭 |
| yagı | 𐰖𐰍𐰃 | YaGıMıZ 𐰖𐰍𐰢𐰔, YaGıZ 𐰖𐰍𐰔, YaGıSIZ 𐰖𐰍𐰾𐰃𐰔 |
| yış | 𐰘𐰃𐱁 | YIŞıG 𐰖𐰃𐰽𐰍, YIŞ 𐰖𐰃𐱁, YıŞıG 𐰘𐱁𐰍 |
| ög | 𐰇𐰏 | OGuZ 𐰆𐰍𐰔, OGLI 𐰆𐰍𐰞𐰃, OGLIN 𐰆𐰍𐰞𐰃𐰤 |
| tokı- | 𐱃𐰸𐰃 | TOKIDıM 𐱃𐰆𐰴𐰃𐰑𐰢, TOKITDıM 𐱃𐰆𐰴𐰃𐱃𐰑𐰢, TOKITTıM 𐱃𐰆𐰶𐰃𐱃𐱃𐰢 |
| oguz | 𐰆𐰍𐰔 | ÖGüZüG 𐰇𐰏𐰔𐰏, ÖGüZKE 𐰇𐰏𐰔𐰚𐰀, ÖGüZ 𐰇𐰏𐰔 |
| teŋri | 𐱅𐰭𐰼𐰃 | TeŊRİ 𐱅𐰏𐰼𐰃, TeŊRi 𐱅𐰏𐰼𐰃 |
| törü | 𐱅𐰇𐰼𐰇 | TORU 𐱃𐰆𐰺𐰆, TORUK 𐱃𐰆𐰺𐰸 |
| kız | 𐰶𐰃𐰔 | KIZ 𐰴𐰃𐰔, KıZıMIN 𐰴𐰔𐰢𐰃𐰣 |
| ay | 𐰖 | aYNıG 𐰪𐰍, aYNIG 𐰪𐰃𐰍 |
| ötüken | 𐰇𐱅𐰜𐰤 | ÖTüKeN 𐰇𐱅𐰚𐰤, ÖTÜKeN 𐰇𐱅𐰇𐰚𐰤 |
| yıl | 𐰘𐰃𐰞 | YILKA 𐰖𐰃𐰞𐰴𐰀, YıLKA 𐰘𐰞𐰴𐰀 |
| adgır | 𐰑𐰍𐰃𐰺 | aDGıRıG 𐰑𐰍𐰺𐰍, aDGıRIN 𐰑𐰍𐰺𐰃𐰤 |
| şad | 𐱁𐰑 | ŞaD 𐰽𐰑, ŞADIN 𐰽𐰑𐰃𐰤 |
| eçi | 𐰲𐰃 | eÇiMiZ 𐰲𐰢𐰔, eÇiM 𐰲𐰢 |
| ay- | 𐰖 | aYNıG 𐰪𐰍, aYNIG 𐰪𐰃𐰍 |
| ti- | 𐱅𐰃 | TiMiŞ 𐱅𐰢𐰾, TiYiN 𐱅𐰘𐰤 |
| kırk | 𐰶𐰃𐰺𐰴 | KIRKıZ 𐰴𐰃𐰺𐰴𐰔, KIRK 𐰴𐰃𐰺𐰴 |
| tonyukuk / tuŋukuk | 𐱃𐰆𐰪𐰸𐰸 | TONYUKUK 𐱃𐰆𐰣𐰪𐰸𐰸, TONYUKUK 𐱃𐰆𐰣𐰖𐰸𐰸 |
| kagan | 𐰴𐰍𐰣 | KaGaNDA 𐰴𐰍𐰦𐰀 |
| bilge | 𐰋𐰃𐰠𐰏𐰀 | BiLGeSİ 𐰋𐰠𐰏𐰾𐰃 |
| il / el | 𐰃𐰠 | iLTDİ 𐰠𐱅𐰓𐰃 |
| sü | 𐰾𐰇 | SUB 𐰽𐰆𐰉 |
| āt | 𐱃 | ATIN 𐰀𐱃𐰃𐰤 |
| yer / yir | 𐰘𐰼 | YeR 𐰘𐰺 |
| sub / suv | 𐰽𐰆𐰉 | SUB 𐰾𐰆𐰉 |
| agı | 𐰍𐰃 | aGıR 𐰍𐰺 |
| yılkı | 𐰘𐰃𐰞𐰴𐰃 | YILKıSIN 𐰖𐰃𐰞𐰴𐰾𐰃𐰤 |
| biŋ | 𐰋𐰃𐰭 | BİŊ 𐰉𐰃𐰭 |
| korgan | 𐰴𐰆𐰺𐰍𐰣 | KORGaNKA 𐰸𐰆𐰺𐰍𐰣𐰴𐰀 |
| yazı | 𐰖𐰔𐰃 | YaZıŊA 𐰖𐰔𐰭𐰀 |
| balık | 𐰉𐰞𐰶 | BaLIKA 𐰉𐰞𐰃𐰶𐰀 |
| yol | 𐰖𐰆𐰞 | YOLTA 𐰖𐰆𐰡𐰀 |
| kırkız | 𐰶𐰃𐰺𐰴𐰔 | KIRKıZ 𐰴𐰃𐰺𐰴𐰔 |
| ırk | 𐰃𐰺𐰴 | İRKiN 𐰃𐰼𐰚𐰤 |
