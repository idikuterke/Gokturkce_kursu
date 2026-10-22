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
