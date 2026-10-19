#!/usr/bin/env node
/**
 * Sözlük kuyruğunu öncelik öbeklerine ayırıp docs/sozluk-kuyrugu.md yazar.
 * Amaç: 232 maddeyi tek tek eşit ağırlıkta gezmek yerine, hızlı onaylanacak
 * olanları ayırıp düşünülmesi gerekenleri öne çıkarmak.
 *
 *   node engine/sozluk-kuyruk-raporu.mjs
 */
import fs from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (...p) => join(kok, ...p);
const kuyruk = JSON.parse(
  fs.readFileSync(P("docs/sozluk-anlam-bekleyenler.json"), "utf8")
);

const kisalt = (s, n) => (s.length > n ? s.slice(0, n) + "…" : s);

/**
 * Öbekler, maddenin kaç dakika düşündüreceğine göre. Sıra önemli: bir madde
 * ilk uyduğu öbeğe girer, böylece her madde tek bir yerde çıkar.
 */
const OBEKLER = [
  {
    ad: "E · Önerisiz",
    not:
      "Ön dolgu yok: anlamı kaynağıyla birlikte sen yazacaksın. Çoğu çekimli " +
      "biçim (BİNiP, OLuRuP) — kökü sözlükte varsa kuyruğa hiç girmemeliydi, " +
      "girenler çözümlenemeyenler.",
    uyar: (m) => !m.oneri,
  },
  {
    ad: "D · Yazım farkı",
    not:
      "Sözlük maddesi korpus yazımıyla birebir değil, ünlü katlamasıyla " +
      "eşleşti. Maddenin gerçekten bu sözcük olduğunu doğrula.",
    uyar: (m) => m.oneri?.yazimFarki,
  },
  {
    ad: "B · Birden çok okuma",
    not:
      "Biçim hem başsözcük hem bir başka sözcüğün çekimli hâli olabilir. " +
      "Ön dolgu ilkini seçti; doğrusuna tanık cümlesine bakarak karar ver.",
    uyar: (m) => m.belirsizlik,
  },
  {
    ad: "C · Kök + ek eşleşmesi",
    not:
      "Sözlükte tam madde yok; kök + çekim eki diye çözülüp kökün anlamı " +
      "önerildi. Biçim kalıplaşmışsa kökün anlamı tutmaz.",
    uyar: (m) => m.oneri?.eslesme === "kök",
  },
  {
    ad: "A · Hızlı onay",
    not:
      "Tam eşleşme, yazım farkı yok, başka okuması yok. Yine de ön dolgu: " +
      "katmanı 'kitap', onaylamadan geçerli sayılmaz — ama hızlı geçilebilir.",
    uyar: () => true,
  },
];

const dagilim = OBEKLER.map((o) => ({ ...o, maddeler: [] }));
for (const m of kuyruk) {
  dagilim.find((o) => o.uyar(m)).maddeler.push(m);
}

const satir = (m) => {
  const o = m.oneri;
  const parcalar = [
    `| ${m.transcription} | ${m.runic} | ${m.frequency}× | `,
    o ? `${kisalt(o.meaning, 70)} <br><sub>${o.source}</sub>` : "—",
    " | ",
    m.belirsizlik
      ? m.belirsizlik.digerOkumalar
          .map((x) => `${x.cozumleme} → ${kisalt(x.anlam, 45)}`)
          .join("<br>")
      : o?.yazimFarki
        ? `katlama: ${o.yazimFarki}`
        : o?.eslesme === "kök"
          ? `kök: ${o.kok ?? "?"} + ${o.ek ?? "?"}`
          : "",
    ` | ${m.attestation} | ${kisalt(String(m.attestation_text), 110)} |`,
  ];
  return parcalar.join("");
};

const bugun = new Date().toISOString().slice(0, 10);
const metin = [
  "# Sözlük anlam kuyruğu",
  "",
  `${kuyruk.length} madde, ${bugun}. Korpusta geçip anlamı henüz onaylanmamış`,
  "sözcükler, sıklığa göre sıralı.",
  "",
  "**Ön dolgu onay değildir.** Katmanı `kitap`; bir insan onaylayana kadar",
  "alıştırmaya girmez. Onay `#denetim` ekranından verilir, karar",
  "`engine/denetim-uygula.mjs` ile işlenir.",
  "",
  "Üretim:",
  "```bash",
  "npm run sozluk:liste        # kuyruğu yeniden kurar",
  "node engine/sozluk-belirsizlik.mjs   # çoklu okuma taraması",
  "node engine/sozluk-kuyruk-raporu.mjs # bu belge",
  "```",
  "",
  "## Öbekler",
  "",
  "| Öbek | Madde | Ne gerektiriyor |",
  "|---|---:|---|",
  ...dagilim.map(
    (o) => `| ${o.ad} | ${o.maddeler.length} | ${o.not.split(".")[0]}. |`
  ),
  "",
  "Önerilen sıra: **B → D → C → E → A.** İlk üçü yanlış ön dolgunun sessizce",
  "onaylanma riskini taşıyor; A'da o risk en düşük, en sona bırakılabilir.",
  "",
];

for (const o of dagilim) {
  if (!o.maddeler.length) continue;
  metin.push(
    `## ${o.ad} — ${o.maddeler.length} madde`,
    "",
    o.not,
    "",
    "| Sözcük | Tamga | Sıklık | Ön dolgu | Not | Tanık | Bağlam |",
    "|---|---|---:|---|---|---|---|",
    ...o.maddeler.map(satir),
    ""
  );
}

fs.writeFileSync(P("docs/sozluk-kuyrugu.md"), metin.join("\n"), "utf8");
console.log(
  dagilim.map((o) => `${o.ad}: ${o.maddeler.length}`).join(" | ") +
    `\n→ docs/sozluk-kuyrugu.md (${kuyruk.length} madde)`
);
