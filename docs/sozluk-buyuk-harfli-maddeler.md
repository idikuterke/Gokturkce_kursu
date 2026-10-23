# Büyük harfli 40 madde — karar listesi

`05_Kaynak_DB/sozluk-anlamlar.json` içinde id'si büyük harfli 40 madde var;
ayrı bir partide eklenmiş görünüyorlar. Üçe ayrıldılar. Hiçbiri değiştirilmedi.

**Durum (23.10.2026):** 2. ve 3. grup uygulandı
(`node engine/sozluk-kategori-duzen.mjs`). 1. grup bekliyor — önce eksik
kök maddeleri eklenmeli.

## 1 · Çekimli biçim — sözlük maddesi değil (12) — ⏳ BEKLİYOR

Bunlar kök değil, çekim. Yerleri kendi köklerinin `bicimler` listesi.

| Madde | Yazım | Anlam | Kökü | Not |
|---|---|---|---|---|
| BODuNuG | 𐰉𐰆𐰑𐰣𐰍 | boylar, kabileler, halk  (bodun + ug) | bodun 𐰉𐰆𐰑𐰣 | kök VAR — biçim olarak köke taşı |
| BeGLeR | 𐰋𐰏𐰠𐰼 | bey, lord  (beg + ler) | beg 𐰋𐰏 | kök VAR — biçim olarak köke taşı |
| SÜLeDiM | 𐰾𐰇𐰠𐰓𐰢 | ordu sevk etmek, ordu ile sefere çıkmak  | süle- 𐰾𐰇𐰠𐰀 | kök VAR — biçim olarak köke taşı |
| KeLTİ | 𐰚𐰠𐱅𐰃 | gelmek  (kel + ti) | kel- (yok) | kök maddesi eklenmeli, sonra taşı |
| KILDıM | 𐰴𐰃𐰡𐰢 | kılmak, yapmak, etmek  (kıl + dım) | kıl- (yok) | kök maddesi eklenmeli, sonra taşı |
| BOLDI | 𐰉𐰆𐰡𐰃 | Oldu | bol- (yok) | kök maddesi eklenmeli, sonra taşı |
| BOLMıS | 𐰉𐰆𐰞𐰢𐰾 | olmuş | bol- (yok) | kök maddesi eklenmeli, sonra taşı |
| ÖLTİ | 𐰇𐰠𐱅𐰃 | öldü | öl- (yok) | kök maddesi eklenmeli, sonra taşı |
| ÖZüM | 𐰇𐰔𐰢 | kendim | öz (yok) | kök maddesi eklenmeli, sonra taşı |
| eRTİ | 𐰼𐱅𐰃 | idi | er- "olmak" | DİKKAT: sözlükteki «er» ismi (asker) BAŞKA sözcük |
| eRMiŞ | 𐰼𐰢𐰾 | "İmiş, İdi, Öyleymiş" Anlamında Ek-Fiil  | er- "olmak" | DİKKAT: sözlükteki «er» ismi (asker) BAŞKA sözcük |
| İLİN | 𐰃𐰠𐰃𐰤 | yakalanmak | il- "yakalanmak" | DİKKAT: sözlükteki «il» (devlet) BAŞKA sözcük |

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
