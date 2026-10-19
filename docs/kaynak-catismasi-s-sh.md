# Kaynak çatışması: ş sesinin tamgası

**Durum: KARARA BAĞLANDI — seçenek B (Çavdar).** 19.10.2026, proje sahibi.

> *"Kelime başında bazı kalın y olması gereken yerde ince y olması ve kelime
> sonunda kalın n olması gerekirken ince n kullanılması gibi istisnalardan.
> Çavdar'a göre kalsın."*

Yani korpustaki ince ş, **kural değil yazıt istisnasıdır** — tıpkı söz başı
ince y (md. 16 bu yüzden kaldırıldı) ve söz sonu ince n gibi. Üretim kuralı
Çavdar md. 10'dur: ş her yerde 𐱁.

## Çatışma

| Kaynak | Diyor ki |
|---|---|
| **Korpus** (`05_Kaynak_DB/orhun-db-v1.json`, runik metin turkbitig.com'dan aynen) | ş'nin kalın/ince biçimi **var**: ince sözcükte 𐰾, kalın sözcükte 𐱁 |
| **Tuğrul Çavdar**, KökTürük Abacasınıŋ Yazım Kuralları, md. 10 | "ç, lt/ld, m, ŋ, ny/yn, nç, p, **ş**, z, nd/nt harflerinin kalını/incesi **yoktur**" → her yerde 𐱁 |

## Korpus sayımı

```
ince sözcük  → 𐰾   320 geçiş
kalın sözcük → 𐱁   204
kalın sözcük → 𐰾    58
ince sözcük  → 𐱁    37
```

Dağılım rastlantı değil: korpus ş'yi ünlü uyumuna göre yazıyor.

## Neden önemli

`05_Kaynak_DB/tamga-siniflari-v1-kilitli.json` içinde **𐰾 = ince s**'dir. Korpus
aynı tamgayı ş için de kullanınca, alfabe dersiyle kitabe okuması çelişiyor:

- Ders: "𐰾 ince s'dir"
- Kitabe: KİŞİ = 𐰚𐰃**𐰾**𐰃, BİŞ = 𐰋𐰃**𐰾**

Ayrıca ince s ile ş aynı tamgaya düştüğü için çeldirici olarak birbirinden
ayırt edilemez hâle gelir (eş yazım çatışması).

## Seçenekler

- **A — Korpusu izle.** Motor ince sözcüklerde ş'yi 𐰾 yazar. Kitabe okumasıyla
  tam uyum; alfabe dersine "𐰾 ince sözcükte ş de okunabilir" notu eklenir.
- **B — Çavdar'ı izle (şimdiki).** ş her yerde 𐱁. Gündelik modül tutarlı kalır,
  kitabe okumasında 320 yerde korpustan ayrılır — ama orada zaten korpus
  yazımı kullanılıyor, üretilen yazım değil, yani çakışma yok.
- **C — İkisini de doğru say.** Alıştırmada her iki yazım kabul edilir.

**Seçilen: B.** Gündelik modül bugünün Türkçesini yazmak için; orada tek ve
tutarlı bir kural gerekir. Kitabe tarafı zaten korpus yazımını kullanıyor,
üretim yapmıyor — yani iki taraf birbirine karışmıyor. C ise "doğru cevap"
kavramını bulanıklaştırırdı.

## Uygulamada ne oluyor

Motor zaten B'yi izliyordu; karar bunu kalıcı kıldı. Gündelik modülde ş'li
13 sözcüğün 12'si kuraldan üretiliyor ve hepsi 𐱁 alıyor.

Tek çakışma **beş**: yazıtlarda tanıklı ve orada 𐰋**𐰾** geçiyor, kuraldan
𐰋**𐱁** çıkıyor. Burada *korpus esastır* kuralı işliyor — ekranda tanıklı
biçim gösteriliyor, altında da şu not çıkıyor:

> Kurallardan 𐰋𐱁 çıkıyor, ama yazıtta 𐰋𐰾 geçiyor — tanıklı biçim esastır.

Yani öğrenci iki tamgayı da görüyor ama hangisinin kural hangisinin yazıt
tanığı olduğunu biliyor. Ek bir iş gerekmiyor.
