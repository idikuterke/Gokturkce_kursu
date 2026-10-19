# Gece raporu — 19/20 Ekim 2026

> **DÜZELTME (20 Ekim).** Bu raporda "BK D 1 kaynak çatışması" diye
> bildirdiğim şey **çatışma değilmiş**. Belge pasajı yanlış satıra
> bağlamış: metin BK D 1'de değil **BK K 1**'de (Bilge Kağan *Kuzey*
> yüzü). İki satırın tamgaları farklı (𐰖𐰺𐱃𐰢𐱁 *yaratmış* ≠ 𐰉𐰆𐰞𐰢𐱁
> *bolmuş*), yani ayrı metinler. Hizalamanın tutmamasının sebebi
> sıradan transkripsiyon farkıydı (*türk ~ türük*, *bolmış ~ bolmuş*).
> Eşleştirici düzeltildi; 30 → **32 birim** kursa girdi.
> Ayrıntı: `docs/kurs-birimleri-dogrulama.md`.

Beş iş de bitti, hepsi `claude/proje-guncelleme-aiwfd3` dalında. Altı commit.

| # | İş | Durum |
|---|---|---|
| 1 | Sayı kuralları (Tekin §280-290) | ✅ 117 öğe, kural tabanına H1-H13 |
| 2 | Sayı ünitesi | ✅ 4 ünite, 135 alıştırma |
| 3 | Dereceli kurs birimleri | ✅ 30/35 birim, 54 alıştırma |
| 4 | Fazla parçalanan sözcükler | ✅ kuyruğa döndü, arama kademeli |
| 5 | Kural tabanı denetim önerileri | ✅ uygulandı, döngüsel atıf kalmadı |

Güvenlik kapısı geçiyor, build temiz, tarayıcıda konsol hatası yok.

---

## 1 · Sayılar — kural tabanı

`engine/sayi-tara.mjs` → `docs/sayilar.json`. Tekin 2003 s. 128-135, dokuz alt
bölüm, 117 öğe. Kural tabanına yeni **H bölümü** (13 kural).

En kritik olanı **H2**: ara sayılar toplamayla kurulmuyor, **hedef onluğa
atılan adım** olarak adlandırılıyor. *eki yegirmi* 22 değil **12**. Bunu
bilmeyen okur kitabedeki her tarihi yanlış okur.

Diğerleri: *artukı* katması (*otuz artukı säkiz* = 38), niteleme öbekleri
(*säkiz on* = 80), kesir (*sıŋar*), yaklaşıklık (+çA), sıra (+(X)nç),
topluluk (+AgU(n)), katlama (*tört yolı*), belirsizlik (*üküş, azkıńa*).

Runik katman korpustan eşlendi — kitabın metin katmanında tamga yok.
94/117 öğe runikli. Göktürk yazısı o~u ve ö~ü'yü ayırmadığı için eşleme
kademeli; her öğede hangi kademede eşleştiği kayıtlı.

> **Not:** `00_Kaynaklar/göktürkçe sayılar.txt` bir kurs çalışma yaprağı,
> kaynak olarak kullanılmadı. İçinde doğrulanabilir bir hata da var:
> "z: 𐰯". 𐰯 **p**'dir, z 𐰔'dir. Yaprağı dağıtmadan önce düzeltmek gerek.

## 2 · Sayı modülü — 4 ünite, 135 alıştırma

Yolda **gündelik ile kitabe arasında**.

| Ünite | Alıştırma |
|---|---|
| Sayı Tamgaları | 47 |
| Ara Sayılar | 44 |
| artukı Katması | 16 |
| Sıra ve Katlama | 28 |

Çeldiriciler rastgele değil, **yanılgıyı öğretiyor**: "eki yegirmi kaç
eder" sorusunda 22 şıklarda duruyor — bugünün toplama mantığının verdiği
cevap bu. artukı sorusunda tersi: orada gerçekten toplama var, ara sayı
gibi okunsaydı 21 çıkardı; o da şık.

Kapıya sayı modülü denetimi eklendi: her runik dizi korpusta tanıklı
olmalı, her tamga kaynak kümesinde ve yazı tipinde bulunmalı. 75/75.

## 3 · Dereceli kurs birimleri — 30 birim, 54 alıştırma

Yolun **en sonunda**: tamlama (12) → cümlecik (15) → paragraf (3).

**Belgedeki tamga katmanını kullanmadım.** Elle kopyalanmış ve 7 birimde
korpustan farklı. Örnek: *ötüken yış* için belge 𐰘𐱁 yazmış, korpus
𐰖𐰃𐱁 — hem ince y yerine kalın y, hem eksik 𐰃. Tamga katmanı korpustan
yeniden kuruldu, belgenin yazdığı kayıtta saklanıyor.

**Alınmayan 5 birim** ve sebepleri `docs/kurs-birimleri-dogrulama.md`'de.
İkisi `...` ile birleştirilmiş, yazıtta ardışık olmayan parçalar. Üçü ise
**kaynak çatışması** ve senin kararını bekliyor:

Belge bunları BK D 1'e bağlayıp *täŋri täg täŋridä bolmış türk bilge
kagan bödke olurtum* okuyor. Korpusta BK D 1 şöyle: *TeŊRİ TeG TeŊRİ
**YaRaTMıŞ** TÜRK BİLGE KaGaN SaBıM*. O formül korpusta **KT G 1**'de
geçiyor. Yani Tekin 1998 ile korpus aynı satırı farklı okuyor.
Önerim: ikisini de göster, çatışmayı öğretici bir not yap — ama karar senin.

Soru tipleri **okunuş** ve **eksik sözcük**. Anlam sorulmuyor; Türkçe
karşılık cevaptan sonra bilgi olarak veriliyor.

## 4 · Sözlük kuyruğu — arama kademeli

Dün fazla parçalanan sözcükler geri geldi. Kök neden: sözlük başsözcüğü
ile korpus transkripsiyonu aynı sözcüğü farklı yazıyor.

| korpus | sözlük | fark |
|---|---|---|
| ÖKÜŞ | üküş | ö ile ü aynı tamga |
| aYNıG | añıg | 𐰪 hem "ny" hem "ñ" yazılıyor |
| iRTiŞ | Ärtiş | yazılmayan ünlünün okunuşu |

Arama artık kademeli. Kuyruk 225 → **232**, ön dolgu 166 → **180 (%78)**.
Birebir olmayan eşleşmelerde denetim ekranı *"DİKKAT: sözlük maddesi
korpus yazımıyla birebir değil"* uyarısını basıyor — 10 sözcükte var,
onaylarken bir bakmanı istiyorum.

## 5 · Kural tabanı — döngüsel atıflar temizlendi

- **D6** (söz başı ligatür yasağı) işaret başına bölündü. Toptan yasak
  korpusla çelişiyordu: ko/ku %75 ligatür, kı %57 ligatür, kö/kü %92 düz.
  Toptan hâlini destekleyen tek atıf kurs içeriğiydi. D9 ile çelişkisi
  böylece çözüldü.
- **G1, G2, G3** "yaygın hata" olmaktan çıkarıldı — üçü de korpusta
  geçiyor, hata değil varyant. Gerekçeleriyle ayrı tabloda duruyorlar.
- **G6**'nın kapsamı kitabe okumasıyla sınırlandı (gündelikte gök = 𐰏 ile).
- **C1**'e Tekin ("ilk hece") ile Çavdar ("önündeki ünlü") çatışması açıkça
  yazıldı, motorun hangisini niçin izlediği belirtildi.
- Kural tabanında artık **kurs içeriğine atıf yapan hiçbir madde yok**.

---

## Tarayıcı doğrulaması

7 yeni ünite yolda görünüyor, dersler açılıyor, konsol hatası yok.
İki UI sorunu bulundu ve düzeltildi:

1. Paragraf sorularında doğru cevap **uzunluğundan belli oluyordu** —
   20 sözcüklük pasajın yanına 2 sözcüklük çeldirici konuyordu. Artık
   doğru cevap bozularak aynı uzunlukta çeldirici üretiliyor.
2. 350 tamgalık paragraflar kutuya sığmıyordu; punto kademeleri eklendi,
   kaydırma yalnız tamga alanına alındı.

---

## Sırada ne var

**Karar bekleyenler (senin):**
1. BK D 1 kaynak çatışması — 3 birim kursa girmiyor (yukarıda).
2. `göktürkçe sayılar.txt` çalışma yaprağındaki "z: 𐰯" hatası.
3. Sözlük denetimi: 232 maddenin 180'i ön dolgulu, tek tıkla onaylanır.

**Başlanmadı (karar gerekiyordu, kendi başıma başlatmadım):**
abonelik/ödeme, mobil mağaza paketleme, KVKK/gizlilik/iade metinleri,
ses kayıtları (315 kayıt), mini oyunlar, SRL / Bilge Alp müdahale motoru.

**Senin yapman gereken:** Firebase test hesabını sil —
`claude-test-silinebilir@ornek-test.com`.
