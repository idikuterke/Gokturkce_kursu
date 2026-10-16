#!/usr/bin/env node
/**
 * Orhun dizelerini cümlecik (clause) adaylarına böler.
 *
 * Neden: dizeler ortalama 27 kelime. Çeviri alıştırması için üst sınır
 * 12 kelime olduğundan 214 dizenin yalnız 15'i kullanılabiliyordu.
 * Cümlecik birimi hem alıştırmaya hem de insan denetimine uygun.
 *
 * Yöntem: Köktürkçede yüklem cümle sonundadır. Çekimli fiil ekiyle
 * biten kelimeden SONRA sınır konur. Bu bir ÖNERİDİR; her aday
 * `onay` alanıyla çıkar ve insan denetiminden geçmeden kullanılmaz.
 *
 * Çıktı: docs/cumlecik-adaylari.json, docs/cumlecik-adaylari.md
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const db = JSON.parse(readFileSync(join(kok, "05_Kaynak_DB/orhun-db-v1.json"), "utf8"));

const MIN = 3;   // bundan kısa cümlecik önceki ile birleşir
const MAX = 12;  // alıştırma üst sınırı

/** Çekimli yüklem eki kalıpları (transkripsiyon büyük harfe çevrilmiş halde). */
const YUKLEM = [
  /M[IİıiUÜuü]Ş$/,          // -mIş   (öğrenilen geçmiş)
  /D[IİıiUÜuü]M$/,          // -dIm
  /T[IİıiUÜuü]M$/,          // -tIm
  /D[IİıiUÜuü]M[IİıiUÜuü]Z$/,
  /[DT][IİıiUÜuü]M[IİıiUÜuü]Z$/,
  /[DT][IİıiUÜuü]Ŋ$/,       // -dIŋ
  /[DT][IİıiUÜuü]$/,        // -dI / -tI
  /^ERT[IİıiUÜuü]$/,        // erti
  /^ERM[IİıiUÜuü]Ş$/,       // ermiş
  /R[IİıiUÜuü]NÇ$/,         // -rInç
  /[UÜuü]R$/,               // -ur / -ür (geniş zaman)
  /G[İiIı]L$/,              // -gIl (emir)
  /[^D T][IİıiUÜuü]Ŋ$/,     // -(X)ŋ (emir, 2. çoğul)
];

/** Çekimli fiil gibi görünen ama zarf/isim olan kalıplar. */
const YUKLEM_DEGIL = [
  /G[DdTt][İiIı]$/,         // KaTıGDI "katıca" — zarf
  /GÜT[İi]$/,               // eDGÜTİ "iyice" — zarf
  /ÇA$/,                    // aNÇA, BUNÇA — zarf
];

/** Sınır konmaz: bunlar bağlayıcı/edat, cümleyi devam ettirir. */
const DEVAM = new Set(["ÜÇÜN", "TEGİ", "YIME", "OK", "ERİNÇ"]);

const yuklemMi = (w) => {
  const u = w.toUpperCase().replace(/[^A-ZÇĞİIÖŞÜŊ]/g, "");
  if (!u || u.length < 3) return false;
  if (DEVAM.has(u)) return false;
  if (YUKLEM_DEGIL.some((r) => r.test(u))) return false;
  return YUKLEM.some((r) => r.test(u));
};

const parcala = (s) => (s || "").split(":").map((x) => x.trim()).filter(Boolean);

const cumlecikler = [];
const atlanan = [];

for (const d of db.dizeler) {
  const run = parcala(d.gokturkce);
  const tr = parcala(d.transkripsiyon);
  const tu = parcala(d.turkce);

  if (tr.length !== tu.length || tr.length !== run.length) {
    atlanan.push({ id: d.id, sebep: "kelime sayıları hizalı değil", run: run.length, tr: tr.length, tu: tu.length });
    continue;
  }

  // sınır indeksleri
  const gruplar = [];
  let bas = 0;
  for (let i = 0; i < tr.length; i++) {
    const sonMu = i === tr.length - 1;
    if (yuklemMi(tr[i]) || sonMu) {
      if (i - bas + 1 >= MIN || sonMu) {
        gruplar.push([bas, i]);
        bas = i + 1;
      }
    }
  }
  if (bas < tr.length) {
    if (gruplar.length) gruplar[gruplar.length - 1][1] = tr.length - 1;
    else gruplar.push([0, tr.length - 1]);
  }
  // MIN'den kısa kalan son grubu öncekine bağla
  while (gruplar.length > 1) {
    const son = gruplar[gruplar.length - 1];
    if (son[1] - son[0] + 1 >= MIN) break;
    const onceki = gruplar[gruplar.length - 2];
    // birleştirme MAX'i aşacaksa kısa kuyruğu olduğu gibi bırak
    if (son[1] - onceki[0] + 1 > MAX) break;
    onceki[1] = son[1];
    gruplar.pop();
  }

  gruplar.forEach(([a, b], n) => {
    const dilim = (arr) => arr.slice(a, b + 1);
    const kelimeSayisi = b - a + 1;
    const trMetin = dilim(tr).join(" : ");
    const tuMetin = dilim(tu).join(" : ");
    cumlecikler.push({
      id: `${d.id}#${n + 1}`,
      dizeId: d.id,
      yazit: d.kaynak_ad,
      yuz: d.yuz,
      satir: d.satir,
      kelimeAraligi: [a, b],
      kelimeSayisi,
      runik: dilim(run).join(" : "),
      transkripsiyon: trMetin,
      kelimeKarsiliklari: tuMetin,
      yipranma: /---/.test(trMetin) || /---/.test(tuMetin),
      alistirmayaUygun: kelimeSayisi <= MAX && !/---/.test(trMetin) && !/---/.test(tuMetin),
      sonKelimeYuklem: yuklemMi(tr[b]),
      // ↓ insan dolduracak
      onay: "beklemede",        // "onay" | "red" | "beklemede"
      gunumuzTurkcesi: "",
      tur: "",                  // "ceviri" | "gunumuz_okumasi"
      kaynak: "",
    });
  });
}

const uygun = cumlecikler.filter((c) => c.alistirmayaUygun);
const ozet = {
  uretim: new Date().toISOString().slice(0, 10),
  kaynak: "05_Kaynak_DB/orhun-db-v1.json",
  yontem: "Çekimli yüklem ekinden sonra sınır. ÖNERİDİR, insan onayı gerekir.",
  parametreler: { minKelime: MIN, maxKelime: MAX },
  dize: db.dizeler.length,
  cumlecik: cumlecikler.length,
  alistirmayaUygun: uygun.length,
  yuklemleBiten: cumlecikler.filter((c) => c.sonKelimeYuklem).length,
  atlananDize: atlanan,
  degistirilemez: ["id", "dizeId", "runik", "transkripsiyon", "kelimeAraligi"],
};

writeFileSync(
  join(kok, "docs/cumlecik-adaylari.json"),
  JSON.stringify({ ...ozet, cumlecikler }, null, 2) + "\n"
);

const dagilim = {};
for (const c of cumlecikler) {
  const k = c.kelimeSayisi <= 5 ? "1-5" : c.kelimeSayisi <= 8 ? "6-8" : c.kelimeSayisi <= 12 ? "9-12" : "13+";
  dagilim[k] = (dagilim[k] || 0) + 1;
}

writeFileSync(
  join(kok, "docs/cumlecik-adaylari.md"),
  `# Cümlecik Aday Listesi

Üretim: ${ozet.uretim} · \`npm run cumlecik:ayir\`

| | |
|---|---|
| Dize | ${ozet.dize} |
| Cümlecik adayı | ${ozet.cumlecik} |
| Alıştırmaya uygun (≤${MAX} kelime, yıpranmasız) | **${ozet.alistirmayaUygun}** |
| Yüklemle biten (yüksek güven) | ${ozet.yuklemleBiten} |
| Hizasız olduğu için atlanan dize | ${atlanan.length} |

Uzunluk dağılımı: ${Object.entries(dagilim).sort().map(([k, v]) => `${k} kelime: ${v}`).join(" · ")}

## Yöntem

Köktürkçede yüklem cümle sonundadır. Aday sınırlar şu eklerle biten kelimelerden **sonra** konmuştur:
\`-mIş\`, \`-dI/-tI\`, \`-dIm\`, \`-dImIz\`, \`-dIŋ\`, \`-rInç\`, \`-ur/-ür\`, \`erti\`, \`ermiş\`.

\`üçün\`, \`tegi\`, \`yime\`, \`ok\`, \`erinç\` sınır oluşturmaz (bağlayıcı/edat).
${MIN} kelimeden kısa parçalar önceki cümleciğe bağlanır.

## Bu bir öneridir

Her kayıt \`onay: "beklemede"\` ile çıkar. \`onay\` alanı \`onay\` olmadan
hiçbir cümlecik alıştırmaya girmez. \`id\`, \`runik\`, \`transkripsiyon\`,
\`kelimeAraligi\` korpustan türetilir — değiştirilmez.

## İlk 20 aday

${cumlecikler.slice(0, 20).map((c) => `- \`${c.id}\` (${c.kelimeSayisi} kelime${c.sonKelimeYuklem ? ", yüklemle biter" : ""})\n  - ${c.transkripsiyon}\n  - ${c.kelimeKarsiliklari}`).join("\n")}
`
);

console.log(`cümlecik adayı   : ${ozet.cumlecik}`);
console.log(`alıştırmaya uygun: ${ozet.alistirmayaUygun}  (önce 15 dize vardı)`);
console.log(`yüklemle biten   : ${ozet.yuklemleBiten}`);
console.log(`atlanan dize     : ${atlanan.length}`);
console.log("yazıldı: docs/cumlecik-adaylari.json, docs/cumlecik-adaylari.md");
