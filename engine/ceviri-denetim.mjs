// Dize çevirisi denetim aracı.
//
// Dize çevirisi alıştırmaları `dogrulama.ceviri === "gecti"` olan dizelerden
// üretilir; şu an 0 dize geçmiş durumda, bu yüzden hiç üretilmiyor. Bu betik
// denetimi yapılabilir kılar: sırayla dize gösterir, kararı kaydeder.
//
// Kullanım:
//   node engine/ceviri-denetim.mjs liste            — denetlenmemişleri sırala
//   node engine/ceviri-denetim.mjs goster KT-G-1    — tek dizeyi tam göster
//   node engine/ceviri-denetim.mjs gecti KT-G-1 "Tekin 2003, s. 20"
//   node engine/ceviri-denetim.mjs okuma  KT-G-1 "Tekin 2003, s. 20"
//   node engine/ceviri-denetim.mjs hatali KT-G-1 "çeviri eksik"
//
// Üç karar var, ikisi değil:
//   gecti  — gerçek çeviri, alıştırmada anlam öğretir.
//   okuma  — GÜNÜMÜZ OKUMASI. Yanlış değil ama çeviri de değil
//            (SIGUN → SIĞUN). Kabul edilir; alıştırmada bu şekilde
//            ETİKETLENİR, çeviri gibi sunulmaz.
//   hatali — kullanılamaz (taş kırığı, eksik/yanlış çeviri).
//
// Öncelik sırası: alıştırmaya dönüşebilecek dizeler önce. Uzun ve yıpranmış
// dizeler tek alıştırmaya sığmadığı için listenin sonunda.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Windows'ta URL.pathname "/E:/..." dondurur; path.join ile birlesince
// "E:\\E:\\..." olur ve betik ENOENT ile oler. fileURLToPath her
// platformda dogru yerel yolu verir.
const KOK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DB = path.join(KOK, "05_Kaynak_DB/orhun-db-v1.json");

const db = JSON.parse(fs.readFileSync(DB, "utf8"));
const yaz = () => fs.writeFileSync(DB, JSON.stringify(db, null, 2) + "\n", "utf8");
const bul = (id) => db.dizeler.find((d) => d.id === id);

const [komut, id, ...kalan] = process.argv.slice(2);
const aciklama = kalan.join(" ");

const durumYaz = (d) => {
  const v = d.dogrulama || {};
  return `${d.id.padEnd(10)} ${String(d.kelime_sayisi).padStart(2)} kelime  ` +
    `iskelet=${(v.iskelet || "?").padEnd(12)} ceviri=${v.ceviri || "?"}` +
    (d.yipranma ? "  [yıpranmış]" : "");
};

if (komut === "liste") {
  const bekleyen = db.dizeler.filter((d) => d.dogrulama?.ceviri === "denetlenmedi");
  // Alıştırmaya dönüşebilecekler önce: kısa, yıpranmamış, iskeleti geçmiş.
  const puan = (d) =>
    (d.kelime_sayisi <= 12 ? 0 : 1000) +
    (d.yipranma ? 500 : 0) +
    (d.dogrulama?.iskelet === "gecti" ? 0 : 200) +
    d.kelime_sayisi;
  bekleyen.sort((a, b) => puan(a) - puan(b));
  const uygun = bekleyen.filter((d) => d.kelime_sayisi <= 12 && !d.yipranma);
  console.log(`denetlenmemiş dize: ${bekleyen.length}`);
  console.log(`bunlardan alıştırmaya uygun (≤12 kelime, yıpranmamış): ${uygun.length}`);
  console.log(`\nönce bunlara bakmak en verimlisi:\n`);
  bekleyen.slice(0, 25).forEach((d) => console.log("  " + durumYaz(d)));
  if (bekleyen.length > 25) console.log(`  … ${bekleyen.length - 25} dize daha`);
} else if (komut === "goster") {
  const d = bul(id);
  if (!d) { console.error(`dize yok: ${id}`); process.exit(1); }
  console.log(`${d.id} — ${d.kaynak_ad} ${d.yuz} ${d.satir}. satır`);
  console.log(`durum: ${durumYaz(d)}\n`);
  console.log("RUNİK:\n  " + d.gokturkce);
  console.log("\nTRANSKRİPSİYON:\n  " + d.transkripsiyon);
  console.log("\nTÜRKÇE (denetlenecek olan):\n  " + d.turkce);
  console.log("\nkaynakça: " + JSON.stringify(d.kaynakca));
} else if (komut === "gecti" || komut === "hatali" || komut === "okuma") {
  const d = bul(id);
  if (!d) { console.error(`dize yok: ${id}`); process.exit(1); }
  if ((komut === "gecti" || komut === "okuma") && !aciklama) {
    console.error(`kaynak zorunlu: node engine/ceviri-denetim.mjs ${komut} <id> "Tekin 2003, s. 20"`);
    process.exit(1);
  }
  d.dogrulama = d.dogrulama || {};
  d.dogrulama.ceviri =
    komut === "gecti" ? "gecti" : komut === "okuma" ? "gunumuz_okumasi" : "hatali";
  d.dogrulama.kaynak = aciklama || null;
  d.dogrulama.tarih = new Date().toISOString().slice(0, 10);
  yaz();
  const gecen = db.dizeler.filter((x) => x.dogrulama?.ceviri === "gecti").length;
  const okumalar = db.dizeler.filter((x) => x.dogrulama?.ceviri === "gunumuz_okumasi").length;
  console.log(`${id} → ceviri=${d.dogrulama.ceviri}`);
  console.log(`çeviri olarak geçen: ${gecen} | günümüz okuması: ${okumalar} | toplam ${db.dizeler.length}`);
  console.log(`alıştırmaları üretmek için: npm run icerik:uret`);
} else {
  console.log(`kullanım:
  node engine/ceviri-denetim.mjs liste
  node engine/ceviri-denetim.mjs goster <dize-id>
  node engine/ceviri-denetim.mjs gecti  <dize-id> "<kaynak>"   — gerçek çeviri
  node engine/ceviri-denetim.mjs okuma  <dize-id> "<kaynak>"   — günümüz okuması (etiketlenir)
  node engine/ceviri-denetim.mjs hatali <dize-id> "<neden>"    — kullanılamaz`);
}
