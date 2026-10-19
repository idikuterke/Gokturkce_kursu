# Sözlük denetim kuyruğu: 432 → 225

Geri bildirim: *"denetim sözlükte bir kısmına baktım zaman kaybı gibi çoğu
sözlüklerde var olmayanların neredeyse tamamı ek almış sözcükler."*

Doğru saptama. Ölçüldü: 432 maddenin 139'u bodun+ıg, kagan+ka, kel+ti
türünden dilbilgisel biçimdi; sözlükte başsözcük olmadıkları için ön dolgu
da bulamıyor, denetleyenin önüne boş geliyorlardı.

## Ne değişti

| | önce | sonra |
|---|---|---|
| kuyruk | 432 | **225** |
| ön dolgulu | 266 (%62) | **166 (%74)** |
| ekli biçim | kuyrukta | 139'u kuyruk dışı |
| yazım yinelemesi | 29 | 0 |
| onaylanmış sözcük | kuyrukta kalıyordu | çıkarıldı (42) |

## Kural

Bir biçim **sözlükte başsözcükse** kalır — yapım ekiyle kurulmuş olsa bile
(`bilig`, `birle`, `tapa` böyle korunur; ölçüt sözlüğün kendisidir, bizim
sezgimiz değil).

Başsözcük değil ve **bilinen kök + bilinen ek**e ayrılıyorsa düşer. Ekler
sondan soyularak en çok üç adımda çözümlenir (`kagan+ı+ŋa`,
`olur+ma+dım`); köke bitişik ek çekim eki olmalı, yoksa sözcük parçalanıyor
(`öküş` → `ök+ü+ş` gibi).

**Kök hiçbir yerde kayıtlı değilse** biçimlerin tamamı atılmaz: korpus
`kel-` fiilini yalın hâlde hiç geçirmiyor, yalnız *kelti / kelip / kelmedi*
diye geçiyor. Öbekten en sık biçim temsilci olarak kuyrukta kalır, gerisi
düşer — 10 soru yerine 1.

Düşenler silinmiyor: `docs/sozluk-cekimli-bicimler.json` her biçimi
çözümlemesi ve düşme sebebiyle tutuyor. Yanlış ayrılmış bir biçim görülürse
geri alınabilir.

## Yan bulgu: ŋ ~ n katlaması hatalıydı

Eşleştirme ŋ'yi n'ye katlıyordu. Orhun Türkçesinde ŋ ayrı sestir ve ayrı
sözcükler kurar: **kaŋ** "baba" / **kan** "kan, han", **küŋ** "cariye" /
**kün** "gün", **oŋ** / **on**.

Sonuç: `kaŋım` sözlükteki `kanı` + m ile eşleşti, ön dolgu **"hani, nerede"**
önerdi. Doğrusu "babam" (KT D-11: *kaŋım İlteriş kagan*). Bu öneri denetimde
onaylanmıştı; kayda **yazılmadı**, geri çekildi. Katlama artık ń/ñ/ŋ üçlüsünü
tek bir ŋ'de topluyor, n'ye karıştırmıyor.

`kaŋ` "baba" zaten projenin sözlüğünde kayıtlı olduğu için `kaŋım` kuyruğa
geri girmiyor.
