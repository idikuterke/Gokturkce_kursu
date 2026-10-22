# Sözlük başlık yazımı — denetim bekleyen maddeler

Sözlük birleştiricisi gevşek katlama (ö=o, ü=u) kullanıyordu. Runikte bu iki
ses ayrı tamga (𐰇 ve 𐰆), dolayısıyla "ög" ile "oguz" aynı anahtara düşüyor,
tam eşleşme yoksa en sık geçen biçim başlık yazımı oluyordu. Böylece sözlükte
bambaşka bir sözcüğün ya da çekimli bir biçimin yazımı görünüyordu.

Birleştirici düzeltildi (`engine/sozluk-birlestir.mjs`): artık sıkı katlama
kullanılıyor ve başlık runiği **yalnız tam eşleşmeden** alınıyor; tam eşleşme
yoksa boş bırakılıp `korpustaYok` işaretleniyor.

İki madde onaylanarak düzeltildi:

| Madde | Eski | Yeni | Dayanak |
|---|---|---|---|
| ög (anne) | 𐰆𐰍𐰔 *(oguz — başka sözcük)* | 𐰇𐰏 | ÖGüM 𐰇𐰏𐰢, +(ü)m çıkarıldı |
| törü (töre) | 𐱃𐰆𐰺𐰆 *(kalın sıralı)* | 𐱅𐰇𐰼𐰇 | TÖRÜG 𐱅𐰇𐰼𐰇𐰏, +(X)g çıkarıldı |

## Kalanlar

Aşağıdaki maddelerin yalın biçimi korpusta tanıklı değil. Şu anki yazım ya
çekimli bir biçimden ya da başka bir sözcükten geliyor. **Hiçbirini kendi
başıma değiştirmedim**: ek çıkarmak dilbilimsel bir karar, kaynağı sen
verirsin. Karar verilene kadar yazımları olduğu gibi duruyor.

| Madde | Anlam | Şu anki yazım | Korpustaki en yakın tanık | Dize |
|---|---|---|---|---|
| tag | dağ | 𐱃𐰍𐰲𐰀 | TaGÇA 𐱃𐰍𐰲𐰀 | KT-D-24 |
| kümiş | gümüş | 𐰚𐰇𐰢𐱁𐰃𐰤 | KÜMiŞİN 𐰚𐰇𐰢𐱁𐰃𐰤 | KT-GB-1 |
| yaz | ilkbahar, yaz mevsimi | 𐰖𐰔𐰃𐰴𐰀 | YaZIKA 𐰖𐰔𐰃𐰴𐰀 | KT-G-3 |
| kış | kış mevsimi | 𐰚𐰃𐰾𐰃 | KİŞİ 𐰚𐰃𐰾𐰃 | KT-G-6 |
| adgır | aygır, damızlık erkek at | 𐰑𐰍𐰃𐰺𐰍 | aDGIRIG 𐰑𐰍𐰃𐰺𐰍 | KT-D-35 |
| yılkı | at sürüsü, binek hayvanı | 𐰘𐰃𐰞𐰴𐰃𐰾𐰃𐰤 | YILKIG 𐰘𐰃𐰞𐰴𐰃𐰍 | BK-D-38 |
| koy | koyun | 𐰸𐰆𐰪 | KOYN 𐰸𐰆𐰪 | KT-D-12 |
| çabış | çavuş, askeri komutan, unvan | 𐰲𐰉𐰾𐰃 | ÇaBıŞI 𐰲𐰉𐰾𐰃 | TY1-B-7 |
| kaŋ | baba | 𐰴𐰭𐰢 | KaŊıM 𐰴𐰭𐰢 | KT-D-11 |
| eçi | ağabey, amca | 𐰲𐰃𐰢 | eÇİM 𐰲𐰃𐰢 | KT-D-1 |
| armakçı | hilekâr, aldatıcı | 𐰺𐰢𐰴𐰲𐰃𐰾𐰃𐰤 | aRMaKÇISIN 𐰺𐰢𐰴𐰲𐰃𐰾𐰃𐰤 | KT-D-6 |
| sanç- | saplamak, mızraklamak, bozguna uğr | 𐰽𐰨𐰑𐰃 | SaNÇDI 𐰽𐰨𐰑𐰃 | KT-K-2 |
| tokı- | savaşmak, vurmak, dövüşmek | 𐱃𐰸𐰃𐱃𐰑𐰢 | TOKITDıM 𐱃𐰸𐰃𐱃𐰑𐰢 | KT-G-13 |
| kum | çöl, kumluk arazi | 𐰚𐰇𐰢𐱁 | KUMuG 𐰴𐰆𐰢𐰍 | TY1-B-7 |
| barım | taşınır servet, mal mülk | 𐰉𐰺𐰢𐰃𐰤 | BaRıMıN 𐰉𐰺𐰢𐰤 | BK-G-3 |
| kuş | kuş | 𐰚𐰇𐰾𐰃 | — | — |
| yol | yol, usül, kural | 𐰖𐰆𐰞𐰃 | YOLI 𐰖𐰆𐰞𐰃 | KT-D-15 |
| kut | kut, saadet, ilahi hükümdarlık güc | 𐰸𐰆𐱃𐰢 | KUTuM 𐰸𐰆𐱃𐰢 | KT-G-9 |
| ırk | fal, kehanet, işaret | 𐰃𐰼𐰚𐰤 | İRKiN 𐰃𐰼𐰚𐰤 | KT-D-34 |

Toplam 19 madde. Üç seçenek:

1. **Ek çıkar** — tanıklı biçimden eki düşürüp kökü kur (ög ve törü'de yaptığımız).
   Her biri için hangi ekin çıktığı kayda geçer.
2. **Kaynaktan al** — Tekin 2003 sözlüğünde yalın biçimin yazımı varsa onu gir.
3. **Boş bırak** — `runik: null`, `korpustaYok: true`. Uygulama o maddenin
   tamgasını göstermez, yalnız okunuş ve anlam görünür.
