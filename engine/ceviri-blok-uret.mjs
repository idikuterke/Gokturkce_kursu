#!/usr/bin/env node
/**
 * Cümlecikleri 10'arlı bloklara böler — çoklu kaynak tarama hattı için.
 *
 *   node engine/ceviri-blok-uret.mjs            # 10'arlı, tümü
 *   node engine/ceviri-blok-uret.mjs --boyut 25 # blok boyutu
 *   node engine/ceviri-blok-uret.mjs --uygun    # yalnız alıştırmaya uygun olanlar
 *
 * Çıktı: docs/ceviri-bloklari/blok-001.json ... + indeks.json
 *
 * Her blok bağımsızdır: bir modele/tarayıcıya tek başına verilebilir.
 * `adaylar` dizisi birden çok kitaptan gelen karşılıkları yan yana tutar;
 * tarayıcı doldurur, sonra engine/ceviri-blok-birlestir.mjs uzlaşmayı ölçer.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const kok = join(dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const sayiArg = (ad, varsayilan) => {
  const i = argv.indexOf(ad);
  if (i === -1) return varsayilan;
  const n = Number(argv[i + 1]);
  if (!Number.isInteger(n) || n < 1) throw new Error(`${ad} için geçersiz değer: ${argv[i + 1]}`);
  return n;
};
const BOYUT = sayiArg("--boyut", 10);
const sadeceUygun = argv.includes("--uygun");

const kaynak = JSON.parse(readFileSync(join(kok, "docs/cumlecik-adaylari.json"), "utf8"));
const hepsi = sadeceUygun
  ? kaynak.cumlecikler.filter((c) => c.alistirmayaUygun)
  : kaynak.cumlecikler;

const dizin = join(kok, "docs/ceviri-bloklari");
if (existsSync(dizin)) rmSync(dizin, { recursive: true });
mkdirSync(dizin, { recursive: true });

const blokSayisi = Math.ceil(hepsi.length / BOYUT);
const indeks = [];

for (let b = 0; b < blokSayisi; b++) {
  const dilim = hepsi.slice(b * BOYUT, (b + 1) * BOYUT);
  const no = String(b + 1).padStart(3, "0");
  const ad = `blok-${no}.json`;

  const govde = {
    blok: b + 1,
    blokSayisi,
    dosya: ad,
    uretim: new Date().toISOString().slice(0, 10),
    kaynak: "05_Kaynak_DB/orhun-db-v1.json → docs/cumlecik-adaylari.json",

    talimat:
      "Her kayıt için `adaylar` dizisine, taradığın her kitaptan bir giriş ekle. " +
      "id / runik / transkripsiyon / kelimeAraligi DEĞİŞTİRİLEMEZ — korpustan gelir. " +
      "Eksik metni (---) tamamlama; o kaydı boş bırak.",

    adayAlanlari: {
      kitap: "Yayın adı. Ör. 'Tekin, Orhon Yazıtları, 2003'",
      sayfa: "Sayfa numarası. Ör. 's. 54'",
      metin: "O kitaptaki günümüz Türkçesi karşılığı",
      tur: "'ceviri' (gerçek çeviri) | 'gunumuz_okumasi' (eski sözcükler korunmuş)",
      guven: "0-1 arası. Tarayıcı eşleşme skorun.",
    },

    kayitlar: dilim.map((c) => ({
      // --- KİLİTLİ ALANLAR ---
      id: c.id,
      dizeId: c.dizeId,
      yazit: c.yazit,
      yuz: c.yuz,
      satir: c.satir,
      kelimeAraligi: c.kelimeAraligi,
      runik: c.runik,
      transkripsiyon: c.transkripsiyon,
      // --- BAĞLAM (salt okunur) ---
      kelimeKarsiliklari: c.kelimeKarsiliklari,
      kelimeSayisi: c.kelimeSayisi,
      yipranma: c.yipranma,
      sonKelimeYuklem: c.sonKelimeYuklem,
      alistirmayaUygun: c.alistirmayaUygun,
      // --- DOLDURULACAK ---
      adaylar: [],
    })),
  };

  writeFileSync(join(dizin, ad), JSON.stringify(govde, null, 2) + "\n");
  indeks.push({
    blok: b + 1,
    dosya: ad,
    kayit: dilim.length,
    ilkId: dilim[0].id,
    sonId: dilim[dilim.length - 1].id,
    yazitlar: [...new Set(dilim.map((c) => c.yazit))],
  });
}

writeFileSync(
  join(dizin, "indeks.json"),
  JSON.stringify(
    {
      uretim: new Date().toISOString().slice(0, 10),
      blokBoyutu: BOYUT,
      blokSayisi,
      toplamKayit: hepsi.length,
      suzgec: sadeceUygun ? "yalnız alıştırmaya uygun" : "tümü",
      bloklar: indeks,
    },
    null,
    2
  ) + "\n"
);

console.log(`kayıt      : ${hepsi.length}${sadeceUygun ? " (yalnız alıştırmaya uygun)" : ""}`);
console.log(`blok       : ${blokSayisi} × ${BOYUT}`);
console.log(`yazıldı    : docs/ceviri-bloklari/ (blok-001.json … blok-${String(blokSayisi).padStart(3, "0")}.json + indeks.json)`);
