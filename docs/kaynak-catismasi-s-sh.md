# Kaynak çatışması: ş sesinin tamgası

**Durum:** açık karar bekliyor. Motor şu an Çavdar'ı izliyor.

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

**Öneri: B.** Gündelik modül bugünün Türkçesini yazmak için; orada tek ve
tutarlı bir kural gerekir. Kitabe tarafı zaten korpus yazımını kullanıyor,
üretim yapmıyor — yani iki taraf birbirine karışmıyor. C ise "doğru cevap"
kavramını bulanıklaştırır.
