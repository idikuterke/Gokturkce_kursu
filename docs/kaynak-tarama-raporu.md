# Kaynak Tarama Raporu

Üretim: 2026-10-17 · eşik 0.55 · `npm run kaynak:tara`

| | |
|---|---|
| Taranan çeviri kalıbı | 4146 |
| Atıfsız (eşleştirilemez) | 1430 |
| Atıfı çözülemeyen | 628 |
| Eşleşen cümlecik | **231** / 953 |

Kitaba göre: Tekin, Orhon Türkçesi Grameri, 2003 — 218 · Ölmez, Köktürkçe ve Eski Uygurca Dersleri, 2017 — 13

Eşleşme gücü: 0.65-0.74: 51 · 0.75-0.89: 45 · 0.90+: 72 · eşik-0.64: 63

## Nasıl işlenir

```bash
node engine/denetim-uygula.mjs docs/kaynak-tarama-paketi.json --denetleyen makine
npm run dev   # Denetim → "Makine önerisi" sekmesi
```

Metin, tür ve kaynak önceden dolu gelir. `not` alanında eşleşme skoru ve
kitaptaki transkripsiyon yazar — doğru satırla eşleşip eşleşmediğini
oradan denetlersin.

## En düşük skorlu 15 (önce bunlara bak)

- `KT-G-6#4` **0.55** · s. 135
  - korpus: `BeRiYE : ÇOGaY : YIŞ : TÖGüLTüN`
  - kitap : `biryä çogay yış tögültün yazı konayin tisär...`
  - çeviri: Güneyde Çoğay dağlarına (ve) Tögültün ovasına konayım dersen...
- `KT-D-3#1` **0.556** · s. 57
  - korpus: `İDİ : OKSuZ : KÖK : TÜRK : aNÇA : OLuRUR`
  - kitap : `idi oksuz kök türük (ėti) ança olorur ermiş`
  - çeviri: dağınık halde öylecene yaşıyorlarmış.
- `TY1-K-7#2` **0.556** · s. 181
  - korpus: `eRTİ : aNI : YUGLaTaYIN : TiDİ`
  - kitap : `anı yoglat-ayin`
  - çeviri: Onun cenaze törenini yaptırayım!
- `KT-G-9#2` **0.556** · s. 169
  - korpus: `eRTiG : TeŊRİ : YaRLıKaDUKIN : ÜÇÜN : ÖZüM : KUTuM`
  - kitap : `täŋri yarlıkadokin üçün`
  - çeviri: Tanrı luftettiği için
- `TY2-D-4#1` **0.556** · s. 150
  - korpus: `BU : TÜRK : BODuNKA : YaRaKLıG : YaGIG : KeLTÜRMeDiM`
  - kitap : `bu türük bodun ara yarıklıg yagıg yältürmädim`
  - çeviri: Bu Türk halkı içinde zırhlı düşmanların akınına (hiç) imkan vermedim
- `TY1-G-5#1` **0.556** · s. 142
  - korpus: `TİR : MeN : OL : SaBıG : eŞiDiP : TÜN : UDıSIKıM : KeLMeDİ`
  - kitap : `ol sabıg äşidip tün udısıkım kälmädi küntüz olorsıkım kälmädi`
  - çeviri: O haberi işitince gece uyuyasım gelmedi, gündüz oturasım gelmedi
- `BK-D-32#9` **0.556** · s. 119
  - korpus: `BİZ : aZ : eRTiMiZ`
  - kitap : `biz az ärtimiz, yabız ärtimiz`
  - çeviri: Biz az idik (ve) kötü durumda idik
- `BK-D-17#1` **0.556** · s. 107
  - korpus: `eRTİ : KaGaN : aTıG : BUNDA : BİZ : BİRTiMiZ`
  - kitap : `kagan at+ıg bunta biz birtimiz`
  - çeviri: Hakan unvanını (ona) burada biz verdik
- `KT-D-23#3` **0.563** · s. 170
  - korpus: `BaRMıŞ : eDGÜ : iLiŊE : KeNTÜ`
  - kitap : `ermiş barmiş ädgü eliŋä käntü yaŋıltıg`
  - çeviri: gelişmiş, ilerlemiş iyi devletine kendin ihanet ettin
- `TY1-G-8#3` **0.563** · s. 115
  - korpus: `KÖK : ÖŊüG : YOGuRU : ÖTüKeN : YIŞGARU : UDuZTıM`
  - kitap : `ötükän yış+garu uduztum`
  - çeviri: (Orduyu) Ötüken dağlarına doğru sevk ettim
- `TY1-G-10#1` **0.564** · s. 197
  - korpus: `KeLÜRTüM : ÖK : TÜRK : BODuNuG : ÖTüKeN : YiRKE : BeN : ÖZüM : BİLGE : TONYUKUK : ÖTüKeN : YiRiG : KONMıŞ`
  - kitap : `türk bodunug ötükän yerkä, bän özüm, bilgä tuñukuk, <kälürtüm>`
  - çeviri: Türk halkını Ötüken ülkesine ben kendim, Bilge Tunyukuk, <getirdim>
- `BK-K-10#4` **0.565** · s. 152
  - korpus: `TİZLiGiG : SÖKüRTüM : ÜZE : TeŊRİ : aSRA : YiR : YaRLıKaDUK : ÜÇüN`
  - kitap : `üzä täŋri asra yer yarlıkadok üç[ün]...`
  - çeviri: Yukarıda gök ve aşağıda yer (öyle) buyurduğu için...
- `BK-D-35#5` **0.571** · s. 214
  - korpus: `İGiDeYiN : TİYiN : SaKıNıP : --- : BODuN : ---`
  - kitap : `igidäyin tiyin sakıntım`
  - çeviri: Doyurayım diye düşündüm
- `TY1-B-2#4` **0.571** · s. 209
  - korpus: `eRiNÇ : KaN : BiRTiM`
  - kitap : `kan bertim`
  - çeviri: (Ben sana) han verdim
- `BK-D-25#9` **0.571** · s. 151
  - korpus: `iKİ : OTuZ : YaŞIMA : TaBGaÇ`
  - kitap : `eki otuz yaşıma tabgaç tapa sülädim`
  - çeviri: Yirmi iki yaşımda Çin'e doğru sefer ettim
