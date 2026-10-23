# Alyılmaz'ın Tonyukuk düzeltmeleri — verimizle karşılaştırma

**Kaynak:** Cengiz Alyılmaz, «Bilge Tonyukuk Yazıtları Üzerine Birkaç
Düzeltme», s. 11-18. (Derginin adı elimizdeki sayfalarda yok.)

Yazar 1997-1999'da yazıtların epigrafik belgelemesini yapmış; yedi
sözcükte okuma düzeltmesi öneriyor. Yedisi de korpusumuzla karşılaştırıldı.

## Korpusumuzun zaten doğru olduğu beş madde

| # | Alyılmaz'ın düzeltmesi | Bizdeki | Dize |
|---|---|---|---|
| 1 | bils(e)r / böngs(e)r değil **bölser** | `BÖLSeR` 𐰋𐰃𐰠𐰾𐰼 ✅ | TY1-B-6 |
| 2 | (a)nı değil **edi** | `eDİ` 𐰓𐰃 ✅ | TY1-D-4 |
| 4 | kişi değil **yiyi** "art arda" | `YİYİ` 𐰘𐰃𐰘𐰃 ✅ | TY1-K-9 |
| 6 | ol(u)rdı değil **olurtdum** | `OLuRTDI`/`OLuRTuM` ailesi ✅ | — |
| 7 | bünt(e)gi değil **bintegi** "benim gibisi" | `BİNTeGİ` 𐰋𐰃𐰤𐱅𐰏𐰃 ✅ | TY2-D-7 |

Dördüncüsü dikkate değer: Radloff'un rötuşlu yayını yüzünden herkes
"kişi" okumuş; bizim korpus zaten `YİYİ` diyor.

## Sözlüğe geçen iki düzeltme

**toruk 𐱃𐰆𐰺𐰸 "arık, zayıf" — artık basılı kaynaklı.**
Alyılmaz s. 12-13 doğrudan çeviriyor: «toruk buukalı semiz buukalı» →
«zayıf boğalarla semiz boğaları». Madde `teyitGerek`ten çıktı.

**kısa- → kıs-: anlamı yanlış girmişim.**
"yok etmek" diye kaydetmiştim. Alyılmaz s. 13 «edi yok kışalım»ı
«tümüyle yok edelim» diye çeviriyor — yani "yok etmek" **öbeğin**
anlamı. Fiilin kendi anlamı korpusun kendi çevirisinde duruyor:
TY1-B-6 «özüm ök kagan kısdım» → «ben kendim kağan yaptım»,
TY1-B-5 «kagan mu kısayın» → «kağan mı yapayım». Madde
**kıs- "kılmak, yapmak, etmek"** oldu; KISDıM 𐰴𐰃𐰽𐰑𐰢 biçim olarak
bağlandı (ilk tamga 𐰴 varyantı). Okuma hâlâ tartışmalı (Alyılmaz
kışalım, çevriyazımız KISaLıM), `teyitGerek` açık.

Ayrıca **KISıLTA 𐰶𐰃𐰽𐰞𐱃𐰀 kıs-'ın çekimi değil**: BK-D-37 «Kargan
Kısılta» yer adı, kısıl "dar geçit" + bulunma eki. Biçim listesinden
çıkarıldı.

**TORuKBUKuLI 𐱃𐰆𐰺𐰸𐰉𐰆𐰸𐰞𐰃** korpusta bitişik tek belirteç, oysa iki
sözcük ("toruk buukalı", Alyılmaz s. 12). toruk'un biçim listesinden
çıkarıldı; korpus belirteci olduğu gibi duruyor.

## Korpus düzeltmeleri

| Dize | Bizdeki | Olması gereken | Durum |
|---|---|---|---|
| TY2-B-1 | `KOPUN` | **KOP** / koop | ✅ uygulandı |
| TY1-K-2 | `TUG` | **tuug** | ⏳ alfabeye yeni tamga eklemeyi gerektiriyor |
| TY1-B-5 | `TORuKBUKuLI`, `SeMiZBUKuLI`, `KaGaNMUKISaYiN` | ayrı sözcükler | ⏳ epigrafik karar: taşta ayırıcı var mı? |

**KOPUN → KOP.** Runikte 𐰸𐰆𐰯 (k-o-p) var, sonda n yok; çevriyazıda
fazladan bir n duruyordu. `orhun-db-istisna.json`'da zaten "inceleme"
damgasıyla bekliyordu ("runik 𐰸𐰆𐰯 sonda n yok; transkripsiyon kopun").
Alyılmaz s. 15-16 çözüyor. Yama `orhun-db-duzeltmeler.json`'a eklendi,
bayatlayan istisna kaldırıldı (24 → 23). `kop` 𐰸𐰆𐰯 sıklığı 18 → 19.

Kalan ikisi veri değil **karar** istiyor: biri alfabeye tamga eklemek,
öbürü taştaki sözcük ayırıcısı hakkında epigrafik hüküm vermek.

## Yeniden üretim artık çevirileri koruyor

Yukarıdaki yamanın uygulanabilmesi için `orhun_db_uret.mjs`'in yıkıcı
olmaktan çıkması gerekiyordu. Üç katmanlı hale getirildi:

1. **Ham üretim** — turkbitig HTML'inden dizeler kurulur.
2. **Düzeltme yamaları** — `orhun-db-duzeltmeler.json`, kelime bazında.
3. **Elle katman** — `orhun-db-elle.json`, alan bazında, üretimden sonra
   bindirilir. İçinde 139 düzenleme var: 136 akıcı Türkçe çeviri, 2
   çevriyazı (TÜRÜK, TÜRK değil), 1 elle yazılmış dize notu.

`dogrulama` ve `etiketler` düzeltme değil, başka betiklerin yazdığı dize
durumu; onlar elle dosyasına girmez, mevcut veri tabanından **taşınır**
(428 alan). Üst düzey elle yazılmış notlar da korunur.

**Çatışma denetimi.** Her elle düzenleme, çıkarıldığı andaki *üretilen*
değeri de saklıyor. Ham sayfa ya da bir yama o alanı değiştirirse
üretilen değer tutmaz; betik çatışma verir, **dosyayı yazmaz** ve 1 ile
çıkar. Sınandı: KT-G-1'in çevriyazısına dokunan sahte bir yama eklendi,
betik yazmayı reddetti. Böylece ne çeviri sessizce kaybolur ne de yeni
bir düzeltme sessizce yutulur. Çatışmayı bilerek geçmek için
`--catismaya-ragmen` var.

**Yuvarlak sağlama.** Elle katman çıkarıldıktan sonra yeniden üretim
mevcut veri tabanını birebir veriyor; fark yalnızca üretim tarihi, iki
yeni üretilen not ve bir hata düzeltmesi: KT-K-13'ün `dusen_unlu`
dizisinde 13. değer 2'ydi, oysa sözcük `TaRDUŞ` ve tek küçük harfi var.
Eski değer, çevriyazı elle düzeltildiğinde yeniden hesaplanmadığı için
bayat kalmış. Türetilmiş alanlar artık bindirmeden **sonra** hesaplanıyor.

İki yardımcı düzeltme: alan sırası ve girinti mevcut dosyayla eşitlendi
(yoksa yeniden üretim 13 bin satırlık sahte fark veriyordu), çeviri
kelime sayısı uyarısı akıcı çeviriler için susturuldu (":" ile
bölünmedikleri için her dizede uyarı veriyordu).

### Betikler

    node engine/orhun-db-elle-cikar.mjs   # mevcut DB'den elle katmanı çıkar
    node engine/orhun_db_uret.mjs         # sağlama (yazmaz)
    node engine/orhun_db_uret.mjs --yaz   # çatışma yoksa yaz
