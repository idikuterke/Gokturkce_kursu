# Çeviri İstek Promptu — Orhun Dizeleri

Üretim: 2026-10-16
Veri: `docs/ceviri-bekleyen-dizeler.json` (207 dize, 4 tanesi alıştırmaya uygun)

## Görev

Her dize için **günümüz Türkçesi** karşılığını yaz.

## Değiştirilmeyecek alanlar

`id`, `runik`, `transkripsiyon` korpustan gelir ve iskelet denetiminden geçmiştir.
**Bunlara dokunma.** Değiştirilmiş kayıt reddedilir.

## Doldurulacak alanlar

| Alan | Açıklama |
|---|---|
| `gunumuzTurkcesi` | Akıcı, anlaşılır günümüz Türkçesi. Kelime kelime gloss değil, cümle. |
| `tur` | `ceviri` → gerçek çeviri. `gunumuz_okumasi` → eski sözcükler korunmuş modernleştirilmiş okunuş. |
| `kaynak` | Dayandığın yayın ve sayfa. Ör. `Tekin 2003, s. 54` |

## Kurallar

1. `mevcutTurkce` alanı çoğu dizede **çeviri değil, iki nokta ile ayrılmış kelime kelime karşılıktır**. Onu düzeltmen bekleniyor.
2. Özel adlar (Türk, Bilge, Kağan, Tonyukuk, Oğuz, Tabgaç…) aynen kalır; bu "çevrilmemiş" sayılmaz.
3. Sözcüğü modernleştirmeden bıraktıysan (ör. "sü", "bodun"), `tur` alanını `gunumuz_okumasi` yap. Uygulama bunu kullanıcıya "Bu karşılık bir çeviri değil, günümüz okumasıdır." diye bildirir.
4. Taş kırığı (`---`) olan dizeleri **boş bırak**; eksik metin uydurulmaz.
5. Kaynaksız kayıt kabul edilmez.

## Öncelik

Liste alıştırmaya uygunluk sırasındadır: önce ≤12 kelimelik, yıpranmasız dizeler.
Zaman kısıtlıysa **baştan itibaren** ilerle; ilk 4 kayıt doğrudan alıştırmaya dönüşür.

## Örnek kayıt

```json
{
  "id": "BK-B-6",
  "yazit": "Bilge Kağan Yazıtı",
  "yuz": "Batı",
  "satir": 6,
  "kelimeSayisi": 4,
  "runik": "𐰽𐰴𐰣𐰆𐰺 : 𐰢𐰤 : 𐰴𐰭𐰢 : 𐰴𐰍𐰣 :",
  "transkripsiyon": "SaKıNUR : MeN : KaŊıM : KaGaN :",
  "mevcutTurkce": "SAKINIRIM : BEN : BABAM : KAĞAN[I] :",
  "notlar": [],
  "gunumuzTurkcesi": "",
  "tur": "",
  "kaynak": ""
}
```

## Teslim sonrası

```bash
node engine/ceviri-denetim.mjs gecti  <id> "<kaynak>"   # tur = ceviri
node engine/ceviri-denetim.mjs okuma  <id> "<kaynak>"   # tur = gunumuz_okumasi
node engine/icerik-uret.mjs
```
