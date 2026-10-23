#!/usr/bin/env node
/**
 * ELLE DÜZENLEME KATMANINI MEVCUT VERİ TABANINDAN ÇIKARIR
 *
 * orhun-db-v1.json ham HTML'den üretilmişti, sonra elle düzeltildi:
 * akıcı Türkçe çeviriler, Tekin yazımı (TÜRÜK), denetim kayıtları.
 * Ham sayfadan yeniden üretim bunları eziyordu.
 *
 * Bu betik, mevcut veri tabanını ham üretimle karşılaştırıp farkları
 * 05_Kaynak_DB/orhun-db-elle.json'a yazar. orhun_db_uret.mjs onları
 * üretimden sonra geri bindirir.
 *
 * Her kayıt, çıkarıldığı andaki ÜRETİLEN değeri de saklar. Ham sayfa
 * ya da bir düzeltme yaması o alanı sonradan değiştirirse üretici bunu
 * çatışma sayar ve yazmayı reddeder — ne çeviri kaybolur ne düzeltme
 * sessizce yutulur.
 *
 *   node engine/orhun-db-elle-cikar.mjs [--kuru]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { uret, ELLE_ALANLAR, ELLE_SON_ALANLAR, TASINAN_ALANLAR } from "./orhun_db_uret.mjs";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const kuru = process.argv.includes("--kuru");
const MEVCUT = path.join(ROOT, "05_Kaynak_DB/orhun-db-v1.json");
const ELLE = path.join(ROOT, "05_Kaynak_DB/orhun-db-elle.json");

const mevcut = JSON.parse(fs.readFileSync(MEVCUT, "utf8"));
const { kayitlar: ham } = uret({ elleUygula: false, sessiz: true });
const hamDizin = new Map(ham.map((k) => [k.id, k]));

const duzenlemeler = [];
const eksik = [];
const ayni = (a, b) => JSON.stringify(a) === JSON.stringify(b);

for (const k of mevcut.dizeler) {
  const h = hamDizin.get(k.id);
  if (!h) { eksik.push(k.id); continue; }
  for (const alan of [...ELLE_ALANLAR, ...ELLE_SON_ALANLAR]) {
    if (ayni(k[alan], h[alan])) continue;
    duzenlemeler.push({ id: k.id, alan, deger: k[alan], uretilen: h[alan] });
  }
}

const sayim = {};
for (const e of duzenlemeler) sayim[e.alan] = (sayim[e.alan] ?? 0) + 1;
console.log(`${mevcut.dizeler.length} dize tarandı, ${duzenlemeler.length} elle düzenleme bulundu:`);
for (const [alan, n] of Object.entries(sayim)) console.log(`  ${alan.padEnd(15)} ${n}`);
if (eksik.length) console.log(`⚠ ham üretimde olmayan dize: ${eksik.join(", ")}`);

// Türetilmiş alanlarda fark kalıyor mu? Kalıyorsa ELLE_ALANLAR eksiktir.
const kalan = new Set();
for (const k of mevcut.dizeler) {
  const h = hamDizin.get(k.id);
  if (!h) continue;
  for (const alan of Object.keys(k)) {
    if (ELLE_ALANLAR.includes(alan) || ELLE_SON_ALANLAR.includes(alan) || TASINAN_ALANLAR.includes(alan)) continue;
    if (["kelime_sayisi", "tamga_sayisi", "dusen_unlu", "yipranma", "duzeltmeler"].includes(alan)) continue;
    if (!ayni(k[alan], h[alan])) kalan.add(alan);
  }
}
if (kalan.size) console.log(`⚠ ELLE_ALANLAR dışında kalan farklı alan: ${[...kalan].join(", ")}`);

if (!kuru) {
  fs.writeFileSync(
    ELLE,
    JSON.stringify(
      {
        aciklama:
          "orhun-db-v1.json'daki elle düzenlemeler. orhun_db_uret.mjs bunları ham " +
          "HTML üretiminin ÜSTÜNE bindirir. 'uretilen', düzenleme çıkarıldığı andaki " +
          "üretilen değerdir; üretim onunla uyuşmazsa üretici çatışma verir.",
        cikarildi: new Date().toISOString().slice(0, 10),
        duzenlemeler,
      },
      null,
      1
    ) + "\n",
    "utf8"
  );
  console.log(`→ 05_Kaynak_DB/orhun-db-elle.json`);
}
