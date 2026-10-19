# Dereceli kurs birimleri: 35 birimin 32'si kursa girdi

Kaynak belge: `00_Kaynaklar/orhon-kurs-birimleri.md` (Tekin 1998'den seçilmiş
35 birim; okunuş + çeviri + sayfa atfı + tamga katmanı).

Çıkarıcı: `engine/kurs-birimleri-tara.mjs` → `05_Kaynak_DB/kurs-birimleri.json`

---

## ÖNCEKİ RAPORDAKİ HATA — düzeltme

İlk taramada 5 birim elenmişti ve üçü için **"Tekin 1998 ile korpus aynı
satırı farklı okuyor, kaynak çatışması"** demiştim. **Bu yanlıştı.**

Gerçek şu: belge o üç birimi **BK D 1**'e bağlıyor, ama pasaj
**BK K 1**'de (Bilge Kağan, *Kuzey* yüzü, 1. satır). Korpusta iki satır
şöyle:

| Satır | Tamgalar | Okunuş |
|---|---|---|
| BK **D** 1 | 𐱅𐰭𐰼𐰃 𐱅𐰏 𐱅𐰭𐰼𐰃 **𐰖𐰺𐱃𐰢𐱁** | täŋri täg täŋri **yaratmış** |
| BK **K** 1 | 𐱅𐰭𐰼𐰃 𐱅𐰏 𐱅𐰭𐰼𐰃𐰓𐰀 **𐰉𐰆𐰞𐰢𐱁** | täŋri täg täŋride **bolmuş** |

Tamgalar farklı (𐰖𐰺𐱃𐰢𐱁 ≠ 𐰉𐰆𐰞𐰢𐱁) — yani bunlar **iki ayrı metin**, aynı
satırın iki okuyuşu değil. Belgenin pasajı BK K 1'dir, atıf yanlış
yazılmış. Çatışma diye sunduğum şey bir atıf hatasıydı.

Hizalamanın bunu bulamamasının sebebi de çatışma değil, sıradan
transkripsiyon farkıydı: *türk ~ türük*, *bolmış ~ bolmuş*,
*olurtum ~ olurtım*. Eşleştiriciye ünlü iskeleti kademesi eklenince
ikisi de yerine oturdu.

---

## Yöntem: tamga katmanı belgeden DEĞİL korpustan

Belgede tamgalar elle kopyalanmış ve **7 birimde korpustan farklı**.
Örnek: *ötüken yış* için belge 𐰘𐱁 yazmış, korpus 𐰖𐰃𐱁 — hem ince y yerine
kalın y, hem eksik 𐰃. Bu yüzden tamga katmanı atılıp korpustan yeniden
kuruldu; belgenin yazdığı `belgeTamgaFarki` alanında saklanıyor.

Hizalama kitabın okunuşu ile korpus transkripsiyonu arasında yapılıyor.
İkisi aynı sözcüğü farklı yazabiliyor, çünkü **ünlülerin çoğu taşa
yazılmıyor** — hangi ünlüyle okunacağı yayımcının kararı. Bu yüzden
hizalama kademeli ve her birimde hangi kademede hizalandığı kayıtlı:

| Kademe | Ne katlanıyor | Birim |
|---|---|---|
| tam | — (birebir) | 20 |
| ünlü | o~u, ö~ü (yazıda ayrılmaz) | 3 |
| ünlü+ünsüz | ayrıca d~t, g~k, b~p | 3 |
| tüm ünlü | bütün ünlüler tek sayılır | 4 |
| bitişik | sözcük sınırı farkı (*kül tigin* ~ KÖLTİGiN) | 1 |
| ünsüz iskeleti | ünlüler atılır (*türk* ~ *türük*) | 1 |

İskelet eşleşmesi kısa birimde yanlış pasaja oturabileceği için yalnız
6+ sözcüklük birimlerde deneniyor. Pencerenin tamamı uymak zorunda;
komşu sözcükler yanlış hizalamayı tutuyor.

## Okuyuş farkları öğretiliyor (C seçeneği)

32 birimin **12'sinde** kitabın okuyuşu korpus transkripsiyonundan
ayrılıyor. Bunlar saklanmıyor, alıştırma açıklamasında **not olarak**
gösteriliyor:

> Okuyuş farkı (bolmış ~ bolmuş): tamgalar aynı, okuyuş farklı.
> Ünlülerin çoğu taşa yazılmadığı için aynı satır iki yayımda farklı
> okunabiliyor; burada soldaki Tekin 1998, sağdaki korpus okuyuşu.

| Birim | Fark |
|---|---|
| KT-T-5 | sözcük sınırı: *kül tigin* ~ KÖLTİGiN |
| BK-T-1 | bolmış ~ bolmuş |
| KT-T-3, KT-C-2 | ekin ~ ikin |
| TY-C-4 | keyik ~ kiyik · yeyü ~ yiyü |
| KT-C-1 | kılıntukda ~ kılındukda |
| KT-C-4, KT-P-2 | udımadım ~ udumadım |
| TY-C-1 | kılıntım ~ kılındım |
| BK-C-1 | bolmış ~ bolmuş · türk ~ türük · olurtum ~ olurtım |
| TY-P-1 | kılıntım ~ kılındım · bertim ~ birtim |
| KT-P-1 | kılıntukda ~ kılındukda · ekin ~ ikin · olurupan ~ olurıpan · boluŋ ~ bolıŋ · sülüpen ~ sülipen |

23 alıştırma bu notu taşıyor.

## Kursa alınmayan 3 birim

Üçü de aynı kusurda: **pasaj yazıtta ardışık değil**, belge araya giren
bölümü atlamış.

| Birim | Sebep |
|---|---|
| BK-P-2 | Okunuşta `...` var — iki ayrı parça birleştirilmiş |
| TY-P-2 | Aynı: `...` ile birleştirilmiş |
| BK-P-1 | İlk 18 sözcük BK K 1 ile uyuyor, *ilgerü* sözcüğünde ayrılıyor — araya giren ~14 sözcük (*biriye şadpıt begler yırıya tarkat…*) atlanmış ama `...` konmamış |

Bunlar kursa bütün bir pasaj diye konamaz. Düzeltmek için belgedeki
okunuşları yazıttaki tam hâline tamamlamak ya da `...` ile işaretlemek
yeterli; ikisi de belge tarafında bir düzeltme.

## Kursa giren 32 birim

| Kademe | Birim | Alıştırma |
|---|---|---|
| Tamlama (2-4 sözcük) | 13 | 20 |
| Cümlecik (4-10) | 16 | 32 |
| Paragraf (10+) | 3 | 6 |

Soru tipleri: **okunuş** (tamgalar verilir, doğru okunuş seçilir) ve
**eksik sözcük** (pasajdan bir sözcük çıkarılır, tamgası sorulur).

**Anlam sorulmuyor.** Cümle ve cümlecik düzeyinde yalnız okunuş sorulur;
Türkçe karşılık cevaptan sonra bilgi olarak gösterilir.
