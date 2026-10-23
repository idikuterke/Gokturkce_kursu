# Büyük harfli 40 madde — karar listesi

`05_Kaynak_DB/sozluk-anlamlar.json` içinde id'si büyük harfli 40 madde var;
ayrı bir partide eklenmiş görünüyorlar. Üçe ayrıldılar. Hiçbiri değiştirilmedi.

**Durum (23.10.2026):** üç grubun hepsi uygulandı. 2 ve 3
(`node engine/sozluk-kategori-duzen.mjs`), 1'in 12 maddesinden 9'u
(`node engine/sozluk-kok-ekle.mjs`). Kalan 3 madde iki kök daha
istiyor; aşağıda.

## 1 · Çekimli biçim — sözlük maddesi değil (12) — ✅ 9 UYGULANDI, 3 BEKLİYOR

Bunlar kök değil, çekim. Yerleri kendi köklerinin `bicimler` listesi.

| Madde | Yazım | Anlam | Kökü | Not |
|---|---|---|---|---|
| BODuNuG | 𐰉𐰆𐰑𐰣𐰍 | boylar, kabileler, halk  (bodun + ug) | bodun 𐰉𐰆𐰑𐰣 | ✅ köke taşındı |
| BeGLeR | 𐰋𐰏𐰠𐰼 | bey, lord  (beg + ler) | beg 𐰋𐰏 | ✅ köke taşındı |
| SÜLeDiM | 𐰾𐰇𐰠𐰓𐰢 | ordu sevk etmek, ordu ile sefere çıkmak  | süle- 𐰾𐰇𐰠𐰀 | ✅ köke taşındı |
| KeLTİ | 𐰚𐰠𐱅𐰃 | gelmek  (kel + ti) | kel- (yok) | ✅ kök eklendi, taşındı |
| KILDıM | 𐰴𐰃𐰡𐰢 | kılmak, yapmak, etmek  (kıl + dım) | kıl- (yok) | ✅ kök eklendi, taşındı |
| BOLDI | 𐰉𐰆𐰡𐰃 | Oldu | bol- (yok) | ✅ kök eklendi, taşındı |
| BOLMıS | 𐰉𐰆𐰞𐰢𐰾 | olmuş | bol- (yok) | ✅ kök eklendi, taşındı |
| ÖLTİ | 𐰇𐰠𐱅𐰃 | öldü | öl- (yok) | ✅ kök eklendi, taşındı |
| ÖZüM | 𐰇𐰔𐰢 | kendim | öz (yok) | ✅ kök eklendi, taşındı |
| eRTİ | 𐰼𐱅𐰃 | idi | er- "olmak" (yok) | ⏳ DİKKAT: sözlükteki «er» ismi (asker) BAŞKA sözcük |
| eRMiŞ | 𐰼𐰢𐰾 | "İmiş, İdi, Öyleymiş" Anlamında Ek-Fiil  | er- "olmak" (yok) | ⏳ DİKKAT: sözlükteki «er» ismi (asker) BAŞKA sözcük |
| İLİN | 𐰃𐰠𐰃𐰤 | yakalanmak | il- "yakalanmak" (yok) | ⏳ DİKKAT: sözlükteki «il» (devlet) BAŞKA sözcük |

## 2 · Gramer ögesi (19) — ✅ UYGULANDI

Zamir, edat, bağlaç, ek-fiil. **Önerim: kalsın.** Öğrenen bunları bilmeden
kitabe okuyamaz; sözlükten çıkarmak ürüne zarar verir. Yalnız kategorileri
`gramer` olarak işaretlensin ki isim/fiil dağarcığıyla karışmasın.

| Madde | Yazım | Anlam |
|---|---|---|
| OL | 𐰆𐰞 | o, onlar; -dır |
| BU | 𐰉𐰆 | bu |
| BeN | 𐰋𐰤 | ben |
| ÜZE | 𐰇𐰔𐰀 | yukarıda, üstte; üzerine |
| BİRLE | 𐰋𐰃𐰼𐰠𐰀 | ile, birlikte |
| TeG | 𐱅𐰏 | gibi |
| TeGİ | 𐱅𐰏𐰃 | -a kadar |
| TaPA | 𐱃𐰯𐰀 | -e doğru, yönünde |
| ÜÇÜN | 𐰇𐰲𐰇𐰤 | için, nedeniyle, uğruna |
| YiME | 𐰘𐰢𐰀 | ve, dahi; da/de |
| aNDA | 𐰦𐰀 | orada,  o anda, oracıkta |
| aNÇA | 𐰨𐰀 | öyle, onca, o kadar; şöyle |
| eRSeR | 𐰼𐰾𐰼 | ise |
| eRiNÇ | 𐰼𐰨 | şüphesiz, muhakkak ki, gerçekten |
| TİYiN | 𐱅𐰃𐰘𐰤 | diye, diyerek; bk. teyin |
| İLGeRÜ | 𐰃𐰠𐰏𐰼𐰇 | ileriye, ileride, doğuda |
| KOP | 𐰸𐰆𐰯 | hep; tümüyle, tamamiyle |
| BUNÇA | 𐰉𐰆𐰨𐰀 | bunca, bu kadar |
| YOK | 𐰖𐰸 | yok |

## 3 · Gerçek sözcük (9) — ✅ UYGULANDI

| Madde | Yazım | Anlam | Not |
|---|---|---|---|
| TÜRK | 𐱅𐰇𐰼𐰜 | etnik ad; bk. Türük | türük 𐱅𐰇𐰼𐰜 ile AYNI yazım — birleştir |
| KİŞİ | 𐰚𐰃𐰾𐰃 | insan | kalsın |
| TaBGaÇ | 𐱃𐰉𐰍𐰲 | Çin, Çinli | kalsın |
| TÜRGiŞ | 𐱅𐰇𐰼𐰏𐰾 | etnik ad | kalsın |
| KÖLTİGiN | 𐰚𐰇𐰠𐱅𐰃𐰏𐰤 | Kültigin | kalsın (özel ad) |
| YİR | 𐰘𐰃𐰼 | yer, dünya; toprak, ülke; bk. **yer* | «yer» maddesiyle karşılaştır |
| aZ | 𐰔 | az , etnik ad (Az'lar) | kalsın |
| BİR | 𐰋𐰃𐰼 | bir; bir kez; aynı, 1 | kalsın (sayı) |
| iKİ | 𐰚𐰃 | iki; bk. eki, ekin | kalsın (sayı); «eki» ile karşılaştır |

## Özet önerim

| Grup | Sayı | Öneri |
|---|---:|---|
| 1 · Çekimli biçim | 12 | **Çıksın**, kökün biçim listesine taşınsın. Altısının kökü sözlükte yok, önce o eklenmeli. |
| 2 · Gramer ögesi | 19 | **Kalsın**, kategorisi `gramer` yapılsın. |
| 3 · Gerçek sözcük | 9 | **Kalsın.** Yalnız TÜRK, `türük` ile birleştirilsin (aynı yazım). |

---

## Uygulananlar (23.10.2026)

**Gramer (19)** — hepsi kaldı, kategorileri ayrıldı: `gramer / zamir`
(OL, BU, BeN, ÖZüM), `gramer / edat` (ÜZE, BİRLE, TeG, TeGİ, TaPA, ÜÇÜN,
İLGeRÜ), `gramer / bağlaç` (YiME, TİYiN, eRSeR), `gramer / zarf` (aNDA,
aNÇA, KOP, BUNÇA, eRiNÇ), `gramer / yüklem` (YOK).

Sözlük ekranına **"Edat & Zamir"** süzgeci eklendi; `icerik-uret.mjs`'teki
kategori eşlemesi bu etiketleri `gramer`e indirgiyor. Ayrışmanın ikinci
faydası: çeldirici üreticisi aynı kategoriden şık seçiyor, artık bir isim
sorusuna edat şıkkı gelmiyor.

**TÜRK → türük** — "bk. Türük" diyen yönlendirme maddesiydi, yazımı
türük ile birebir aynı (𐱅𐰇𐰼𐰜), hiç biçimi yoktu. Kaldırıldı, kaynağı
türük'e ikinci atıf olarak geçti.

**YİR → yer / yir** — madde kaldırıldı ama **yazım korundu**: 𐰘𐰃𐰼
korpusta 17× geçiyor, `yer`in kendi yazımı 𐰘𐰼 ise 9×. Yani daha sık
olanı siliyor olurduk. Yazım, tanığıyla birlikte `yer`in biçim listesine
en üst sıraya eklendi.

**Sayılar** — BİR ve iKİ `diger` kategorisindeydi, sayı süzgecinde
çıkmıyorlardı; `sayı` yapıldı. iKİ'nin anlamındaki "bk. eki, ekin"
yönlendirmesi silindi: sözlükte eki/ekin maddesi yok, ölü bağlantıydı.

**Etnik ve özel adlar** — KİŞİ `insan`, TaBGaÇ/TÜRGiŞ/aZ `toplum / millet`,
KÖLTİGiN `ozel` oldu.

Madde sayısı 140 → 138 (iki yönlendirme maddesi birleşti);
uygulamaya giden sözlük 121 → 119.


## Uygulananlar — 1. grup (23.10.2026)

`node engine/sozluk-kok-ekle.mjs` altı kök ekledi (kel-, kıl-, bol-, öl-,
öz, bar-), dokuz çekimli maddeyi köklerinin `bicimler` listesine taşıdı,
sonra kalan çekimleri köklere topladı.

**öz'ün yazımı düzeltildi.** Kaynakta 𐰇𐰕 verilmişti; U+10C15 Yenisey
"ez" bölgesel biçimi, projenin kendi `tamga-siniflari-v1-kilitli.json`
dosyasında da öyle etiketli, alfabe tablosunda ve korpusta hiç geçmiyor.
Orhon z'si U+10C14 𐰔: **öz 𐰇𐰔**, korpusta ÖZ olarak 3× tanıklı.

**kıl-'ın kaynak sayfası çelişkili.** Metinde Clauson EDPT s. 718,
tabloda s. 616 verildi. İkisi de `kaynak` alanına yazıldı, madde
`teyitGerek: true` bırakıldı — biri doğrulanınca öbürü silinmeli.

**Biçim toplarken sahiplik koruması.** Kök, kendi runik yazımıyla
başlayan biçimleri topluyor; ama BaRKIN *bark* 𐰉𐰺𐰴'ın çekimi, bar-'ın
değil. Daha uzun bir kök de o biçimle başlıyorsa biçim ona bırakılıyor.

### Kalan üç madde — iki kök gerekiyor

| Madde | Gereken kök | Neden karışmamalı |
|---|---|---|
| eRTİ, eRMiŞ | er- "olmak" (ek-fiil) | sözlükteki **er** 𐰼 "asker" başka sözcük |
| İLİN | il- "yakalanmak" | sözlükteki **il** 𐰃𐰠 "devlet" başka sözcük |

İkisi de kaynak bekliyor; kaynak gelince `sozluk-kok-ekle.mjs`'in
`YENI_KOKLER` listesine eklenip yeniden çalıştırılması yeter.

## Yanlış maddeye yazılmış biçimler (23.10.2026)

Sözlük ekranındaki "KİTABELERDEKİ BİÇİMLERİ" listesi vaktiyle
**katlanmış** çevriyazı ön ekiyle toplanmış: `kum` 𐰴𐰆𐰢 maddesinin
altında KÜMüŞ, `kış` 𐰶𐰃𐱁'ın altında KİŞİ duruyordu.

`node engine/sozluk-bicim-ayikla.mjs` ı/i ve ö/o ayrımını **koruyarak**
yeniden bağladı — katlama olmadan "kişi" okunuşu "kış" ile başlamıyor:

* **11 biçim sahibine taşındı** — KİŞİ/KİŞİG/KİŞİN → KİŞİ, SUB → sub/suv,
  OGuZ → oguz, OGLI/OGLIN → ogul, KÜMüŞ/KÜMiŞİN/KÜMüŞİN → kümiş.
* **15 biçim sahipsiz çıktı** — hiçbir maddeye bağlanmadı, maddeden
  alınıp `05_Kaynak_DB/sozluk-sahipsiz-bicimler.json` dosyasına yazıldı.
  Silinmediler; karar bekliyorlar.

Sahipsizlerin çoğu sözlükte **maddesi olmayan** sözcükler: ögüz "ırmak"
(𐰇𐰏𐰔, ög 𐰇𐰏 değil), küŋ "cariye" (𐰚𐰇𐰭, kün 𐰚𐰇𐰤 değil), kisre "sonra",
irkin, toruk. Madde eklenince biçimleri kendiliğinden yerine oturur.

**Denenip bırakılan kural:** runik ön eki. Tek tamgalı maddeler
(ay 𐰖, āt 𐱃, eb 𐰋) kendilerinden sonra gelen her şeyin ön eki oluyor;
ölçüldüğünde "yagımız" biçimini yagı'dan alıp ay'a veriyordu.
Uygulanmadı. Runik yalnızca **son çare** olarak, üç ve daha çok tamgalı
maddeler için kullanılıyor — KÜMüŞ 𐰚𐰇𐰢𐱁'i kümiş 𐰚𐰇𐰢𐱁'e o bağladı.

## Sahipsiz biçimlerin maddeleri eklendi (23.10.2026)

`node engine/sozluk-sahipsiz-madde-ekle.mjs` — 15 sahipsiz biçimin 14'ü
çözüldü, sözlük 135 → 142 madde (uygulamaya giden: 116 → 123).

**Anlamın kaynağı neden turkbitig.** `05_Kaynak_DB/ham/turkbitig/*.html`
her dizeyi üç hizalı satır olarak veriyor: runik, çevriyazı, Türkçe
çeviri; üçü de `:` ile sözcük sözcük ayrılmış. Anlamlar oradan, sözcüğün
kendi dizelerinden **okundu** — tahminle konmadı. Kaynak basılı bir
dilbilgisi olmadığı için **yedi maddenin hepsi `teyitGerek`** ile girdi;
ekranda "Anlamın kaynağı doğrulanmadı" uyarısı çıkıyor.

| Madde | Yazım | Anlam | Çeviri ne diyor |
|---|---|---|---|
| kisre | 𐰚𐰃𐰾𐰼𐰀 | sonra, ondan sonra | 13 dizede «SONRA» — doğrudan |
| küŋ | 𐰚𐰇𐰭 | cariye, kadın köle | 8 dizede «CARİYE» — doğrudan |
| ögüz | 𐰇𐰏𐰔 | ırmak, nehir | çevirmiyor; «İrtiş ögüzüg keçe» bağlamından |
| irkin | 𐰃𐰼𐰚𐰤 | boy beyi unvanı | çevirmiyor; hep boy adıyla geçmesinden |
| toruk | 𐱃𐰆𐰺𐰸 | arık, zayıf | çevirmiyor; «semiz buka ~ toruk buka» karşıtlığından |
| toru- | 𐱃𐰆𐰺𐰆 | arıklamak, zayıflamak | çevirmiyor; toruk ile kök bağından |
| kısa- | 𐰶𐰃𐰽 | yok etmek | çeviri «KILALIM» diyor, çevriyazı KISaLıM — okuma tartışmalı |

Son üçünün anlamı bağlamdan çıkarıldı; her birinin `kaynak` alanı bunu
açıkça yazıyor. **kısa-** ayrıca korpusta yalın geçmiyor: yazımı
KISaLıM 𐰶𐰃𐰽𐰞𐰢'dan -lım eki düşürülerek kuruldu.

**Yazım varyantları elle bağlandı.** KÜMüŞ 𐰚𐰇𐰢𐰾 ve 𐰝𐰇𐰢𐰾 ne çevriyazı
ne runik ön ekiyle kümiş'e bağlanıyor, ama çeviri ikisine de «GÜMÜŞ»
diyor. `ELLE_SAHİP` ile bağlandılar; `sozluk-bicim-ayikla.mjs`'teki
`ELLE_KALSIN` sökülmelerini engelliyor.

**Kalan tek sahipsiz: KOKuLuK 𐰸𐰆𐰴𐰞𐰴 ×1** (BK-G-11). Dize yıpranmış
(«eren kelti kokuluk ö --- altun kümüş»), çeviri de sözcüğü
çevirmiyor. Dayanak yok; madde uydurulmadı,
`05_Kaynak_DB/sozluk-sahipsiz-bicimler.json`'da bekliyor.

### İki betik düzeltmesi

**`sozluk-bicim-ayikla.mjs` artık yeniden çalıştırılabilir.** Eskiden
ikinci koşu, elle bağlanmış biçimleri (OGLI → ogul, KÜMüŞ varyantları)
geri söküyordu: 1. kural yalnız çevriyazı ön ekine bakıyordu. Artık
maddenin **runik** ön eki de (üç tamga alt sınırıyla) biçimi yerinde
tutuyor, `ELLE_KALSIN` de öyle. İki ardışık kuru koşu aynı sonucu
veriyor: 0 taşıma, 0 sahipsiz.

**Denenip bırakılan ikinci kural.** "Biçim, en iyi eşleşen maddeye gider"
kuralı yazıldı ve ölçüldü: `ay-` fiilinin çekimlerini (aYDI, aYGUÇI)
`ay` maddesine veriyor, `ogul` kendi OGLI'sını kaybediyor, 28 biçim
yer değiştiriyordu. Uygulanmadı.

**Betik sırası önemli.** Sıfırdan kurulumda `sozluk-bicim-ayikla.mjs`
önce, `sozluk-sahipsiz-madde-ekle.mjs` sonra çalışmalı: ikincisi
birincinin ayırdığı listeyi okuyor.
