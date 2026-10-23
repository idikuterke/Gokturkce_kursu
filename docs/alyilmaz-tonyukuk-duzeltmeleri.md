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

## Uygulanmayan üç korpus düzeltmesi

Bunlar `05_Kaynak_DB/orhun-db-v1.json`'a dokunmayı gerektiriyor;
dokunulmadı (nedeni aşağıda).

| Dize | Bizdeki | Olması gereken | Not |
|---|---|---|---|
| TY2-B-1 | `KOPUN` | **KOP** / koop | Runikte 𐰸𐰆𐰯 var, sonda n yok; çevriyazıda fazladan n |
| TY1-K-2 | `TUG` | **tuug** | Alyılmaz ilk tamganın 𐱃'nin ayrı bir biçimi olduğunu söylüyor |
| TY1-B-5 | `TORuKBUKuLI`, `SeMiZBUKuLI`, `KaGaNMUKISaYiN` | ayrı sözcükler | Taşta ayırıcı var mı bilmiyoruz; bölmek epigrafik karar |

## Neden korpusa dokunulmadı: yıkıcı bir betik

`engine/orhun_db_uret.mjs` düzeltme yamalarını uygulayıp korpusu ham
HTML'den yeniden üretiyor. İki sorun ölçüldü:

1. **Sabit sürücü yolu.** `const ROOT = "E:/Gokturkce_kursu"` — betik
   yalnız tek bir makinede çalışıyordu. Depo kökünden hesaplanacak
   şekilde düzeltildi.
2. **Elle düzeltilmiş çevirileri eziyor.** Çalıştırıldığında 214
   dizenin **138'i** değişti: akıcı Türkçe çeviriler ("Tanrı gibi ve
   Tanrı'dan olmuş Türk Bilge Hakan, bu devirde tahta oturdum…") ham
   sözcük hizalı dizelerle ("TANRI : DEK : TANRIDAN : OLMUŞ…") yer
   değiştirdi; `TÜRÜK` de `TÜRK` oldu. Korpus geri yüklendi, birebir
   doğrulandı.

Betik artık varsayılan olarak **yalnızca sağlama** yapıyor; yazmak için
`--yaz` gerekiyor ve başlığında ne ezdiği yazılı. Yukarıdaki üç
düzeltme uygulanacaksa ya JSON'a cerrahi müdahale ile ya da önce
çevirileri koruyacak bir birleştirme yazılarak yapılmalı.
