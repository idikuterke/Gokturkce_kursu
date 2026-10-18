#!/usr/bin/env node
/**
 * Gündelik modülün ürettiği yazımları insan denetimine sunar.
 *
 *   node engine/gundelik-denetim-listesi.mjs
 *   node engine/gundelik-denetim-listesi.mjs --boyut 20
 *
 * Çıktı: docs/gundelik-denetim/blok-01.md … + ozet.md
 *
 * Neden gerekli: 136 kelimenin 116'sı kural motorundan çıktı, yani
 * TANIKLI DEĞİL. Motor korpusla sınandı (23 birebir eşleşme) ama her
 * yazım tek tek görülmedi. Tanıklı olanlar listeye alınmaz — onlar
 * zaten yazıttan geliyor.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const argv = process.argv.slice(2);
const bI = argv.indexOf("--boyut");
const BOYUT = bI === -1 ? 10 : Number(argv[bI + 1]);
if (!Number.isInteger(BOYUT) || BOYUT < 1) throw new Error(`--boyut geçersiz: ${argv[bI + 1]}`);

const veri = JSON.parse(readFileSync(P("src/data/generated/gundelik.json"), "utf8"));
// Tanıklı olanlar denetim gerektirmez: yazıttan geliyorlar.
const denetlenecek = veri.kelimeler.filter((k) => !k.tanikli);
const tanikli = veri.kelimeler.filter((k) => k.tanikli);

const dizin = P("docs/gundelik-denetim");
if (existsSync(dizin)) rmSync(dizin, { recursive: true });
mkdirSync(dizin, { recursive: true });

const blokSayisi = Math.ceil(denetlenecek.length / BOYUT);
for (let b = 0; b < blokSayisi; b++) {
  const dilim = denetlenecek.slice(b * BOYUT, (b + 1) * BOYUT);
  const no = String(b + 1).padStart(2, "0");
  const satirlar = dilim.map((k, i) => {
    const tamgalar = [...k.runik].join(" ");
    return [
      `### ${b * BOYUT + i + 1}. ${k.kelime}  _(${k.tema})_`,
      "",
      `| | |`,
      `|---|---|`,
      `| Yazım | <span lang="otk">${k.runik}</span> |`,
      `| Tamga tamga | ${tamgalar} |`,
      `| Sıra | ${k.sira === "kalin" ? "kalın" : "ince"} · ${k.tamgaSayisi} tamga |`,
      "",
      "Uygulanan kurallar:",
      ...k.adimlar.map((a) => `- ${a}`),
      "",
      "**Karar:** ☐ doğru  ☐ yanlış → doğrusu: `____________`",
      "",
      "---",
      ""
    ].join("\n");
  });

  writeFileSync(
    join(dizin, `blok-${no}.md`),
    [
      `# Gündelik Yazım Denetimi — Blok ${no} / ${blokSayisi}`,
      "",
      `${dilim.length} kelime · kural motorundan üretildi, **tanıklı değil**`,
      "",
      "Her kelimede yazımın doğru olup olmadığını işaretle. Yanlışsa",
      "doğrusunu yaz — tamga tamga ya da transkripsiyon olarak, ikisi de olur.",
      "",
      "---",
      "",
      ...satirlar
    ].join("\n")
  );
}

const temalar = {};
for (const k of denetlenecek) temalar[k.tema] = (temalar[k.tema] ?? 0) + 1;

writeFileSync(
  join(dizin, "ozet.md"),
  [
    "# Gündelik Yazım Denetimi — Özet",
    "",
    `Üretim: ${new Date().toISOString().slice(0, 10)} · \`npm run gundelik:denetim\``,
    "",
    "| | |",
    "|---|---|",
    `| Toplam kelime | ${veri.kelimeler.length} |`,
    `| Tanıklı (yazıtta geçiyor, denetim gerekmez) | ${tanikli.length} |`,
    `| **Denetlenecek (kuraldan üretildi)** | **${denetlenecek.length}** |`,
    `| Blok | ${blokSayisi} × ${BOYUT} |`,
    "",
    `Tema dağılımı: ${Object.entries(temalar).map(([t, n]) => `${t} ${n}`).join(" · ")}`,
    "",
    "## Tanıklı kelimeler (denetim dışı)",
    "",
    tanikli.map((k) => `- **${k.kelime}** <span lang="otk">${k.runik}</span> — ${k.tanikDize}`).join("\n"),
    "",
    "## Nasıl denetlenir",
    "",
    "**Tercih edilen yol — tarayıcıda.** `npm run dev` → `localhost:3000/#denetim`",
    "→ **Gündelik yazım** sekmesi. Yazım büyük puntoyla, tamga dökümüyle ve",
    "uygulanan kurallarla gelir; kaynak alanı önceden dolu. `A` onay, `R` red,",
    "yanlışsa \"Runik düzeltmesi\" alanına doğrusunu yaz. Bitince **Dışa aktar**:",
    "",
    "```",
    "npm run gundelik:uygula     # indirilen paketi 05_Kaynak_DB/gundelik-istisnalar.json'a işler",
    "npm run gundelik:uret       # modülü yeniden üretir",
    "```",
    "",
    "**Kâğıt üstünde.** Bu blokları sırayla aç, yanlışları not et, listeyi bana ver.",
    "",
    "Her iki yolda da düzeltmeyi tek tek elle yapmam: **kuralı** düzeltirim ki",
    "aynı hata başka kelimelerde tekrarlanmasın. İstisna dosyası yalnızca kuralın",
    "doğru çalışıp da sonucun yanlış olduğu (düzensiz) durumlar içindir.",
    ""
  ].join("\n")
);

console.log(`toplam kelime  : ${veri.kelimeler.length}`);
console.log(`tanıklı        : ${tanikli.length}  (denetim gerekmez)`);
console.log(`denetlenecek   : ${denetlenecek.length}`);
console.log(`blok           : ${blokSayisi} × ${BOYUT}`);
console.log(`\nyazıldı: docs/gundelik-denetim/`);
