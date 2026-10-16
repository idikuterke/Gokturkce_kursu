#!/usr/bin/env node
/**
 * Çeviri denetimi bekleyen dizeleri, kullanıcının günümüz Türkçesi
 * karşılıklarını doldurabilmesi için öncelik sırasına dizilmiş bir
 * istek listesine dönüştürür.
 *
 * Çıktı:
 *   docs/ceviri-bekleyen-dizeler.json  — doldurulacak kayıtlar
 *   docs/ceviri-istek-promptu.md       — modele/insana verilecek yönerge
 *
 * Kural: id / runik / transkripsiyon ALANLARI DEĞİŞTİRİLEMEZ.
 * Bunlar korpustan gelir ve iskelet denetiminden geçmiştir.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const oku = (p) => JSON.parse(readFileSync(join(kok, p), "utf8"));

const db = oku("05_Kaynak_DB/orhun-db-v1.json");
let kalite = { lacunalar: [], cevirilmemisler: [] };
try {
  kalite = oku("docs/ceviri-kalite-raporu.json");
} catch {
  console.warn("uyarı: docs/ceviri-kalite-raporu.json yok, kalite notları boş kalacak.");
}

const lacunali = new Set(kalite.lacunalar.map((l) => l.id));
const cevirilmemis = new Map(kalite.cevirilmemisler.map((c) => [c.id, c]));

const bekleyen = db.dizeler.filter(
  (d) => (d.dogrulama?.ceviri ?? "denetlenmedi") === "denetlenmedi"
);

/** Alıştırmaya uygunluk: küçük puan = önce denetlensin. */
function oncelik(d) {
  let p = 0;
  if (d.kelime_sayisi > 12) p += 100;          // uzun dize alıştırmaya girmiyor
  if (d.yipranma) p += 50;                      // taş kırığı var
  if (lacunali.has(d.id)) p += 40;              // Türkçe alanda --- var
  const c = cevirilmemis.get(d.id);
  if (c) p += Math.round(c.oran / 10);          // çevrilmemiş kelime oranı
  p += d.kelime_sayisi;                         // kısa dizeler önce
  return p;
}

const kayitlar = bekleyen
  .map((d) => {
    const c = cevirilmemis.get(d.id);
    const notlar = [];
    if (d.yipranma) notlar.push("Taşta yıpranma var.");
    if (lacunali.has(d.id)) notlar.push("Mevcut Türkçe alanda lacuna (---) var.");
    if (c) notlar.push(`Mevcut Türkçe alanda %${c.oran} kelime çevrilmemiş görünüyor.`);
    if (d.kelime_sayisi > 12) notlar.push("12 kelimeden uzun — alıştırmaya alınmıyor, düşük öncelik.");
    return {
      id: d.id,
      yazit: d.kaynak_ad,
      yuz: d.yuz,
      satir: d.satir,
      kelimeSayisi: d.kelime_sayisi,
      runik: d.gokturkce,
      transkripsiyon: d.transkripsiyon,
      mevcutTurkce: d.turkce,
      notlar,
      // ↓ DOLDURULACAK ALANLAR
      gunumuzTurkcesi: "",
      tur: "",      // "ceviri" | "gunumuz_okumasi"
      kaynak: "",   // ör. "Tekin 2003, s. 54"
      _oncelik: oncelik(d),
    };
  })
  .sort((a, b) => a._oncelik - b._oncelik || a.id.localeCompare(b.id))
  .map(({ _oncelik, ...k }) => k);

const alistirmayaUygun = kayitlar.filter(
  (k) => k.kelimeSayisi <= 12 && !k.notlar.some((n) => n.startsWith("Taşta") || n.startsWith("Mevcut Türkçe alanda lacuna"))
);

writeFileSync(
  join(kok, "docs/ceviri-bekleyen-dizeler.json"),
  JSON.stringify(
    {
      uretim: new Date().toISOString().slice(0, 10),
      kaynak: "05_Kaynak_DB/orhun-db-v1.json",
      toplamDize: db.dizeler.length,
      denetimBekleyen: kayitlar.length,
      alistirmayaUygun: alistirmayaUygun.length,
      degistirilemez: ["id", "runik", "transkripsiyon"],
      dizeler: kayitlar,
    },
    null,
    2
  ) + "\n"
);

const ornek = alistirmayaUygun[0];
writeFileSync(
  join(kok, "docs/ceviri-istek-promptu.md"),
  `# Çeviri İstek Promptu — Orhun Dizeleri

Üretim: ${new Date().toISOString().slice(0, 10)}
Veri: \`docs/ceviri-bekleyen-dizeler.json\` (${kayitlar.length} dize, ${alistirmayaUygun.length} tanesi alıştırmaya uygun)

## Görev

Her dize için **günümüz Türkçesi** karşılığını yaz.

## Değiştirilmeyecek alanlar

\`id\`, \`runik\`, \`transkripsiyon\` korpustan gelir ve iskelet denetiminden geçmiştir.
**Bunlara dokunma.** Değiştirilmiş kayıt reddedilir.

## Doldurulacak alanlar

| Alan | Açıklama |
|---|---|
| \`gunumuzTurkcesi\` | Akıcı, anlaşılır günümüz Türkçesi. Kelime kelime gloss değil, cümle. |
| \`tur\` | \`ceviri\` → gerçek çeviri. \`gunumuz_okumasi\` → eski sözcükler korunmuş modernleştirilmiş okunuş. |
| \`kaynak\` | Dayandığın yayın ve sayfa. Ör. \`Tekin 2003, s. 54\` |

## Kurallar

1. \`mevcutTurkce\` alanı çoğu dizede **çeviri değil, iki nokta ile ayrılmış kelime kelime karşılıktır**. Onu düzeltmen bekleniyor.
2. Özel adlar (Türk, Bilge, Kağan, Tonyukuk, Oğuz, Tabgaç…) aynen kalır; bu "çevrilmemiş" sayılmaz.
3. Sözcüğü modernleştirmeden bıraktıysan (ör. "sü", "bodun"), \`tur\` alanını \`gunumuz_okumasi\` yap. Uygulama bunu kullanıcıya "Bu karşılık bir çeviri değil, günümüz okumasıdır." diye bildirir.
4. Taş kırığı (\`---\`) olan dizeleri **boş bırak**; eksik metin uydurulmaz.
5. Kaynaksız kayıt kabul edilmez.

## Öncelik

Liste alıştırmaya uygunluk sırasındadır: önce ≤12 kelimelik, yıpranmasız dizeler.
Zaman kısıtlıysa **baştan itibaren** ilerle; ilk ${Math.min(50, alistirmayaUygun.length)} kayıt doğrudan alıştırmaya dönüşür.

## Örnek kayıt

\`\`\`json
${ornek ? JSON.stringify(ornek, null, 2) : "(alıştırmaya uygun dize kalmadı)"}
\`\`\`

## Teslim sonrası

\`\`\`bash
node engine/ceviri-denetim.mjs gecti  <id> "<kaynak>"   # tur = ceviri
node engine/ceviri-denetim.mjs okuma  <id> "<kaynak>"   # tur = gunumuz_okumasi
node engine/icerik-uret.mjs
\`\`\`
`
);

console.log(`denetim bekleyen : ${kayitlar.length}`);
console.log(`alıştırmaya uygun: ${alistirmayaUygun.length}`);
console.log("yazıldı: docs/ceviri-bekleyen-dizeler.json, docs/ceviri-istek-promptu.md");
