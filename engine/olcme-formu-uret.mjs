#!/usr/bin/env node
/**
 * Ön-test / son-test PARALEL FORM üreticisi (A ve B).
 *
 * Neden iki form: aynı 12 soruyu kurs başında ve sonunda sormak "test
 * etkisi" yaratır — öğrenci soruyu hatırlar, ölçüm şişer. Paralel form
 * aynı kazanımı aynı zorlukta FARKLI maddelerle ölçer.
 *
 * Paralellik üç şartla sağlanıyor:
 *   1) Aynı plan (blueprint): her kazanımdan aynı sayıda madde.
 *   2) Aynı zorluk bandı: her hücrede A ve B maddesi aynı banttan.
 *   3) Madde çakışması yok: bir madde yalnız bir formda.
 *
 * Bütün maddeler DOĞRULANMIŞ veriden: tamga sınıfları (kilitli dosya),
 * insan denetiminden geçmiş gündelik yazımlar, Tekin 2003'ten çıkarılan
 * sayılar, korpusta doğrulanmış kurs birimleri, insan onaylı sözlük.
 * Kurs içeriği (ders, quiz) kaynak olarak kullanılmaz.
 *
 * Üretim DETERMİNİSTİK: sabit tohumlu karıştırıcı kullanılır, aynı
 * veriyle aynı formlar çıkar. Yoksa her çalıştırmada form değişir ve
 * basılı formla ekrandaki uyuşmaz.
 *
 * Çıktı: docs/olcme/  (form-A.md, form-B.md, cevap-anahtari.md,
 *                      olcme-plani.md, formlar.json)
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (p) => join(KOK, p);
const oku = (p) => JSON.parse(readFileSync(P(p), "utf8"));

// ── Deterministik karıştırıcı (mulberry32) ─────────────────────────────────
function tohumlu(tohum) {
  let a = tohum >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rastgele = tohumlu(20261020);
const karistir = (d) => {
  const k = [...d];
  for (let i = k.length - 1; i > 0; i--) {
    const j = Math.floor(rastgele() * (i + 1));
    [k[i], k[j]] = [k[j], k[i]];
  }
  return k;
};

// ── Kaynaklar ───────────────────────────────────────────────────────────────
const siniflar = (() => {
  const c = oku("05_Kaynak_DB/tamga-siniflari-v1-kilitli.json").classes;
  return Array.isArray(c) ? c : Object.entries(c).map(([id, v]) => ({ id, ...v }));
})();
const gundelik = (() => {
  const g = oku("src/data/generated/gundelik.json");
  return (Array.isArray(g) ? g : g.kelimeler ?? []).filter((k) => k.insanDenetimi === "dogru" || k.tanikli);
})();
const sayilar = oku("src/data/generated/sayilar.json").ogeler ?? [];
const birimler = oku("src/data/generated/kursBirimleri.json").birimler ?? [];
// Sözcük maddeleri için havuz. Üç süzgeç:
//  - yalnız insan onaylı kayıtlar
//  - transkripsiyon korpus biçeminde olmalı (ÖZüM gibi); çekirdek
//    sözlükten gelen "teŋri" tarzı küçük harfli kayıtlar aynı soruda
//    yan yana gelince biçem karmaşası oluyordu
//  - anlamında "(bodun + ug)" gibi çözümleme parantezi olan ekli
//    biçimler alınmaz: hem cevabı ele veriyor hem kökün tekrarı
const korpusBicimleri = new Set(
  oku("src/data/generated/kelimeler.json").map((k) => k.transkripsiyon)
);
// Sözlük anlamı test şıkkı olacak: kısa ve tek satır olmalı. Denetimde
// bazı maddelere uzun açıklama yazılmış ("er- fiili, bugünkü Türkiye
// Türkçesindeki i- ek-eyleminin..."), bunlar şık olarak kullanılamaz.
// "bk. X" sözlük göndermesi de test metninde anlamsız, atılır.
const temizAnlam = (x) =>
  String(x)
    .replace(/[;,]?\s*bk\.\s*[^;,.]+/gi, "")
    .replace(/\s+/g, " ")
    .replace(/[;,]\s*$/, "")
    .trim();
const anlamUygun = (x) => {
  const t = temizAnlam(x);
  return t.length >= 2 && t.length <= 60 && !/\n/.test(String(x));
};
const sozluk = (() => {
  const s = oku("05_Kaynak_DB/sozluk-anlamlar.json");
  const liste = Array.isArray(s) ? s : s.kelimeler ?? [];
  return liste
    .filter(
      (k) =>
        k.anlam &&
        k.runik &&
        k.denetleyen === "insan" &&
        korpusBicimleri.has(k.transkripsiyon ?? k.id) &&
        !/\([^)]*\+[^)]*\)/.test(k.anlam) &&
        anlamUygun(k.anlam)
    )
    .map((k) => ({ ...k, anlam: temizAnlam(k.anlam) }));
})();

const glif = (x) => x.glyph_ref?.core_orhun ?? "";
const unluler = siniflar.filter((x) => x.category === "vowel");
const unsuzler = siniflar.filter((x) => x.category === "consonant");
const heceler = siniflar.filter((x) => x.category === "syllable");
const kutuplu = unsuzler.filter((x) => x.harmony === "back" || x.harmony === "front");

// ── Plan (blueprint) ────────────────────────────────────────────────────────
// Her hücrede iki madde üretilir: biri A formuna, biri B'ye.
const PLAN = [
  { kod: "K1", kazanim: "Ünlü tamgasını tanıma", adet: 2, zorluk: 1 },
  { kod: "K2", kazanim: "Kalın/ince ünsüz ayrımı", adet: 2, zorluk: 2 },
  { kod: "K3", kazanim: "Hece damgasını okuma", adet: 1, zorluk: 3 },
  { kod: "K4", kazanim: "İmla: sözcüğü tamgalarla yazma", adet: 2, zorluk: 3 },
  { kod: "K5", kazanim: "Sayı mantığı (hedef onluk)", adet: 2, zorluk: 3 },
  { kod: "K6", kazanim: "Yazıt sözcüğünü okuma", adet: 1, zorluk: 4 },
  { kod: "K7", kazanim: "Sözcük anlamı", adet: 1, zorluk: 4 },
  { kod: "K8", kazanim: "Yazıt pasajını okuma", adet: 1, zorluk: 5 },
];

let sayac = 0;
const madde = (kod, zorluk, soru, siklar, dogru, kaynak, not = null) => ({
  no: ++sayac,
  kazanim: kod,
  zorluk,
  soru,
  siklar: karistir([...new Set(siklar)]).slice(0, 4),
  dogru,
  kaynak,
  ...(not ? { not } : {}),
});
// Doğru şık karıştırmada düşmüş olabilir; garanti altına al.
const duzelt = (m) => {
  if (!m.siklar.includes(m.dogru)) m.siklar = karistir([m.dogru, ...m.siklar.slice(0, 3)]);
  return m;
};

// ── Madde üreticileri ───────────────────────────────────────────────────────
function k1(havuz, n) {
  // "Bu tamga hangi sesleri gösterir?" — ünlü tamgası tanıma.
  return havuz.slice(0, n).map((u) =>
    duzelt(
      madde(
        "K1",
        1,
        `Bu tamga hangi ses(ler)i gösterir?  ${glif(u)}`,
        [u.sound.join(" / "), ...unluler.filter((x) => x.id !== u.id).map((x) => x.sound.join(" / "))],
        u.sound.join(" / "),
        "Tamga sınıfları (kilitli kaynak dosyası)"
      )
    )
  );
}

function k2(havuz, n) {
  // Bir madde kalın, bir madde ince olsun: ikisi de aynı taraftan
  // gelince kazanımın yarısı ölçülmüyordu.
  const kalin = havuz.filter((x) => x.harmony === "back");
  const ince = havuz.filter((x) => x.harmony === "front");
  if (n === 2 && kalin.length && ince.length) havuz = [kalin[0], ince[0]];
  // "Kalın sıradan bir sözcükte /b/ için hangi tamga kullanılır?"
  return havuz.slice(0, n).map((c) => {
    const es = kutuplu.find((x) => x.sound[0] === c.sound[0] && x.harmony !== c.harmony);
    const sira = c.harmony === "back" ? "kalın (art)" : "ince (ön)";
    const digerleri = kutuplu
      .filter((x) => x.sound[0] !== c.sound[0])
      .map(glif);
    return duzelt(
      madde(
        "K2",
        2,
        `${sira} sıradan bir sözcükte /${c.sound[0]}/ sesi için hangi tamga kullanılır?`,
        [glif(c), es ? glif(es) : null, ...digerleri].filter(Boolean),
        glif(c),
        "Tamga sınıfları (kilitli kaynak dosyası); kutupluluk kuralı C1",
        es ? `Eşi: ${glif(es)} (${es.harmony === "back" ? "kalın" : "ince"})` : null
      )
    );
  });
}

function k3(havuz, n) {
  // Hece damgası: "𐰸 hangi heceleri yazar?"
  return havuz.slice(0, n).map((h) =>
    duzelt(
      madde(
        "K3",
        3,
        `Bu hece damgası hangi heceleri yazabilir?  ${glif(h)}`,
        [h.sound.join(", "), ...heceler.filter((x) => x.id !== h.id).map((x) => x.sound.join(", "))],
        h.sound.join(", "),
        "Tamga sınıfları (kilitli kaynak dosyası); hece damgaları D1-D4"
      )
    )
  );
}

function k4(havuz, n) {
  // İmla: bugünün Türkçesinden bir sözcüğün tamga yazımı.
  const tumYazimlar = [...new Set(gundelik.map((k) => k.runik))];
  return havuz.slice(0, n).map((k) => {
    const ayni = tumYazimlar.filter(
      (r) => r !== k.runik && Math.abs([...r].length - [...k.runik].length) <= 1
    );
    return duzelt(
      madde(
        "K4",
        3,
        `"${k.kelime}" sözcüğü Göktürk harfleriyle nasıl yazılır?`,
        [k.runik, ...karistir(ayni).slice(0, 3)],
        k.runik,
        k.tanikli
          ? `Yazıtlarda tanıklı (${k.tanikDize ?? "korpus"})`
          : "İmla kuralından üretildi, insan denetiminden geçti"
      )
    );
  });
}

function k5(havuz, n) {
  // Sayı mantığı: ara sayının değeri. Çeldiricilerden biri toplama hatası.
  const asil = new Map(
    sayilar.filter((o) => o.bolum === "Asıl sayılar" && o.deger !== undefined).map((o) => [o.okunus, o.deger])
  );
  return havuz.slice(0, n).map((o) => {
    const [birlik, ...kalan] = o.okunus.split(/\s+/);
    const onluk = asil.get(kalan.join(" ")) ?? asil.get(kalan[0]);
    const b = asil.get(birlik);
    const celdirici = [];
    if (b !== undefined && onluk !== undefined) celdirici.push(b + onluk, onluk, b);
    while (celdirici.length < 3) celdirici.push(o.deger + celdirici.length + 1);
    return duzelt(
      madde(
        "K5",
        3,
        `"${o.okunus}" kaç eder?`,
        [String(o.deger), ...celdirici.map(String)],
        String(o.deger),
        `Tekin 2003, §${o.madde}, s. ${o.sayfa}${o.atif ? ` (${o.atif})` : ""}`,
        b !== undefined && onluk !== undefined
          ? `Toplama mantığı ${b + onluk} verirdi; doğrusu ${o.deger}.`
          : null
      )
    );
  });
}

function k6(havuz, n) {
  // Yazıt sözcüğünü okuma: tamgalar verilir, okunuş seçilir.
  const tum = [...new Set(sozluk.map((k) => k.transkripsiyon ?? k.id))];
  return havuz.slice(0, n).map((k) => {
    const ad = k.transkripsiyon ?? k.id;
    const yakin = tum.filter((x) => x !== ad && Math.abs(x.length - ad.length) <= 2);
    return duzelt(
      madde(
        "K6",
        4,
        `Bu sözcük nasıl okunur?  ${k.runik}`,
        [ad, ...karistir(yakin).slice(0, 3)],
        ad,
        `${k.kaynak ?? "Denetimden geçmiş sözlük"}`
      )
    );
  });
}

function k7(havuz, n) {
  // Sözcük anlamı — tek sözcük düzeyinde. Cümle anlamı SORULMAZ.
  const tumAnlamlar = [...new Set(sozluk.map((k) => k.anlam))];
  return havuz.slice(0, n).map((k) => {
    const ad = k.transkripsiyon ?? k.id;
    return duzelt(
      madde(
        "K7",
        4,
        `"${ad}" (${k.runik}) ne anlama gelir?`,
        [k.anlam, ...karistir(tumAnlamlar.filter((a) => a !== k.anlam)).slice(0, 3)],
        k.anlam,
        k.kaynak ?? "Denetimden geçmiş sözlük"
      )
    );
  });
}

function k8(havuz, n) {
  // Yazıt pasajı: yalnız OKUNUŞ sorulur, anlam değil.
  const tum = birimler.map((b) => b.okunus);
  return havuz.slice(0, n).map((b) => {
    const yakin = tum.filter(
      (x) => x !== b.okunus && Math.abs(x.split(/\s+/).length - b.kelimeSayisi) <= 1
    );
    return duzelt(
      madde(
        "K8",
        5,
        `Bu pasajın okunuşu hangisidir?  ${b.runik}`,
        [b.okunus, ...karistir(yakin).slice(0, 3)],
        b.okunus,
        `${b.dizeler.join(", ")} · ${b.kaynaklar?.[0] ?? "Tekin 1998"}`,
        `Anlamı: ${b.ceviri}`
      )
    );
  });
}

// ── Havuzları ikiye böl: A ve B çakışmasın ─────────────────────────────────
// Önce deterministik sırala, sonra tek/çift indislere ayır. Böylece iki form
// aynı havuzdan, benzer zorlukta ama ayrık maddeler alır.
const ikiyeBol = (liste) => {
  const s = karistir(liste);
  return [s.filter((_, i) => i % 2 === 0), s.filter((_, i) => i % 2 === 1)];
};

const [unluA, unluB] = ikiyeBol(unluler);
const [kutupluA, kutupluB] = ikiyeBol(kutuplu);
const [heceA, heceB] = ikiyeBol(heceler);
const [gunA, gunB] = ikiyeBol(gundelik.filter((k) => k.zorluk >= 2 && k.zorluk <= 4));
const [sayiA, sayiB] = ikiyeBol(
  sayilar.filter((o) => o.bolum === "Onluklararası Sayılar" && o.deger !== undefined && !/artukı/.test(o.okunus))
);
const [sozA, sozB] = ikiyeBol(sozluk.filter((k) => [...k.runik].length >= 3));
const [birimA, birimB] = ikiyeBol(birimler.filter((b) => b.kademe === "tamlama"));

function formKur(havuzlar) {
  sayac = 0;
  return [
    ...k1(havuzlar.unlu, 2),
    ...k2(havuzlar.kutuplu, 2),
    ...k3(havuzlar.hece, 1),
    ...k4(havuzlar.gundelik, 2),
    ...k5(havuzlar.sayi, 2),
    ...k6(havuzlar.sozluk, 1),
    ...k7(havuzlar.sozluk.slice(1), 1),
    ...k8(havuzlar.birim, 1),
  ];
}

const A = formKur({ unlu: unluA, kutuplu: kutupluA, hece: heceA, gundelik: gunA, sayi: sayiA, sozluk: sozA, birim: birimA });
const B = formKur({ unlu: unluB, kutuplu: kutupluB, hece: heceB, gundelik: gunB, sayi: sayiB, sozluk: sozB, birim: birimB });

// ── Denetim: paralellik gerçekten sağlandı mı? ─────────────────────────────
const sorunlar = [];
if (A.length !== 12 || B.length !== 12) sorunlar.push(`madde sayısı A=${A.length} B=${B.length} (12 olmalı)`);
for (let i = 0; i < Math.min(A.length, B.length); i++) {
  if (A[i].kazanim !== B[i].kazanim) sorunlar.push(`${i + 1}. madde kazanımı farklı: ${A[i].kazanim} / ${B[i].kazanim}`);
  if (A[i].zorluk !== B[i].zorluk) sorunlar.push(`${i + 1}. madde zorluğu farklı`);
}
const anahtarla = (m) => `${m.kazanim}|${m.soru}`;
const kesisim = A.filter((a) => B.some((b) => anahtarla(a) === anahtarla(b)));
if (kesisim.length) sorunlar.push(`${kesisim.length} madde iki formda da var — çakışma`);
for (const m of [...A, ...B]) {
  if (m.siklar.length !== 4) sorunlar.push(`${m.kazanim} ${m.no}: ${m.siklar.length} şık`);
  if (!m.siklar.includes(m.dogru)) sorunlar.push(`${m.kazanim} ${m.no}: doğru şık listede yok`);
}

// ── Çıktılar ───────────────────────────────────────────────────────────────
mkdirSync(P("docs/olcme"), { recursive: true });

const harf = ["A", "B", "C", "D"];
// Denetimde bazı kayıtlara paragraf uzunluğunda kaynak notu yazılmış;
// cevap anahtarı tablosunu okunmaz hâle getiriyor.
const kisaKaynak = (x) => {
  const t = String(x ?? "").replace(/\s+/g, " ").trim();
  return t.length > 80 ? t.slice(0, 77) + "…" : t;
};
const formMetni = (ad, maddeler) =>
  `# Göktürk Yazısı — Bilgi Testi, Form ${ad}\n\n` +
  `Ad soyad: ............................................   Tarih: ............\n\n` +
  `Katılımcı kodu: ..................   (Ön test / Son test — işaretleyiniz)\n\n` +
  `**Yönerge:** 12 soru vardır, her sorunun bir doğru cevabı vardır. ` +
  `Süre sınırı yoktur, yaklaşık 10 dakika sürer. Bilmediğiniz soruyu boş bırakabilirsiniz.\n\n---\n\n` +
  maddeler
    .map(
      (m) =>
        `**${m.no}.** ${m.soru}\n\n` +
        m.siklar.map((s, i) => `   ${harf[i]}) ${s}`).join("\n") +
        "\n"
    )
    .join("\n") +
  `\n---\n\n*Maddeler doğrulanmış kaynaklardan üretilmiştir (Talat Tekin 2003/1998, ` +
  `Orhun yazıtları korpusu, denetimden geçmiş imla kuralları).*\n`;

writeFileSync(P("docs/olcme/form-A.md"), formMetni("A", A), "utf8");
writeFileSync(P("docs/olcme/form-B.md"), formMetni("B", B), "utf8");

const anahtar =
  `# Cevap anahtarı — Form A ve Form B\n\n` +
  ["A", "B"]
    .map((ad, i) => {
      const f = [A, B][i];
      return (
        `## Form ${ad}\n\n| Soru | Kazanım | Doğru cevap | Kaynak |\n|---|---|---|---|\n` +
        f
          .map(
            (m) =>
              `| ${m.no} | ${m.kazanim} | ${harf[m.siklar.indexOf(m.dogru)]}) ${m.dogru} | ${kisaKaynak(m.kaynak)} |`
          )
          .join("\n") +
        "\n"
      );
    })
    .join("\n") +
  `\n## Puanlama\n\nHer madde 1 puan, toplam 12. Kazanım bazında alt puan da alınabilir:\n\n` +
  PLAN.map((p) => `- **${p.kod}** ${p.kazanim}: ${p.adet} madde`).join("\n") +
  `\n\nÖn test ile son test arasındaki farkı kazanım bazında karşılaştırmak, ` +
  `toplam puana bakmaktan daha bilgilendiricidir: hangi kazanımın ilerlediği görülür.\n`;
writeFileSync(P("docs/olcme/cevap-anahtari.md"), anahtar, "utf8");

const plan =
  `# Ölçme planı — ön test / son test\n\n` +
  `## Neden iki form\n\n` +
  `Aynı soruları kurs başında ve sonunda sormak **test etkisi** yaratır: ` +
  `öğrenen soruyu hatırlar, artış öğrenmeden değil tanıdıklıktan gelir. ` +
  `Paralel form aynı kazanımı aynı zorlukta farklı maddelerle ölçer.\n\n` +
  `Kullanım: katılımcıların yarısına önce A sonra B, diğer yarısına önce B sonra A ` +
  `(karşıt dengeleme). Böylece formlar arasında kalan küçük zorluk farkı da sonucu etkilemez.\n\n` +
  `## Plan\n\n| Kazanım | Tanım | Madde | Zorluk |\n|---|---|---|---|\n` +
  PLAN.map((p) => `| ${p.kod} | ${p.kazanim} | ${p.adet} | ${p.zorluk}/5 |`).join("\n") +
  `\n\nToplam 12 madde. Her iki form da bu planı birebir izler.\n\n` +
  `## Madde eşleşmesi\n\n| # | Kazanım | Zorluk | Form A | Form B |\n|---|---|---|---|---|\n` +
  A.map(
    (m, i) =>
      `| ${m.no} | ${m.kazanim} | ${m.zorluk} | ${m.soru.replace(/\|/g, "")} | ${B[i]?.soru.replace(/\|/g, "") ?? "—"} |`
  ).join("\n") +
  `\n\n## Kaynak güvencesi\n\n` +
  `Maddelerin tamamı doğrulanmış veriden üretildi:\n\n` +
  `- Tamga sınıfları: \`05_Kaynak_DB/tamga-siniflari-v1-kilitli.json\` (kilitli kaynak)\n` +
  `- Gündelik yazımlar: insan denetiminden geçmiş ya da yazıtta tanıklı olanlar\n` +
  `- Sayılar: Tekin 2003 §280-290, runik katman korpustan\n` +
  `- Sözcükler: insan onaylı sözlük kayıtları\n` +
  `- Pasajlar: Tekin 1998, tamgalar korpusta doğrulanmış\n\n` +
  `Kurs içeriği (ders, quiz, çalışma yaprağı) madde kaynağı olarak **kullanılmadı** — ` +
  `kendi ürettiğimiz malzemeyle kendi öğretimimizi ölçmek dairesel olurdu.\n\n` +
  `## Etik\n\n` +
  `Bu formlardan toplanan veri araştırmada kullanılacaksa **etik kurul onayı önceden** ` +
  `alınmalıdır. Onaydan önce toplanan veri yayında kullanılamaz. Katılımcı kodu kullanılır, ` +
  `ad soyad analiz dosyasına girmez.\n`;
writeFileSync(P("docs/olcme/olcme-plani.md"), plan, "utf8");

writeFileSync(
  P("docs/olcme/formlar.json"),
  JSON.stringify({ uretim: new Date().toISOString(), plan: PLAN, formA: A, formB: B }, null, 2) + "\n",
  "utf8"
);

console.log(`Form A: ${A.length} madde · Form B: ${B.length} madde → docs/olcme/`);
for (const p of PLAN) console.log(`  ${p.kod} ${p.kazanim.padEnd(34)} ${p.adet} madde · zorluk ${p.zorluk}`);
if (sorunlar.length) {
  console.error(`\nPARALELLİK SORUNU (${sorunlar.length}):`);
  for (const s of sorunlar) console.error("  " + s);
  process.exit(1);
}
console.log("\nparalellik denetimi: GEÇTİ (aynı plan, aynı zorluk, çakışma yok)");
