#!/usr/bin/env node
/**
 * ERİŞİLEBİLİRLİK DENETİMİ
 *
 * Uygulamanın dört ana ekranını gerçek tarayıcıda gezip yapısal
 * erişilebilirlik hatalarını sayar. Kaynak kodu okumak yetmiyordu:
 * düğmenin adı olup olmadığı, simgenin gizlenip gizlenmediği ancak
 * boyandıktan sonra belli oluyor.
 *
 * Denetlenenler:
 *   · adı olmayan düğme / bağlantı (ekran okuyucu "düğme" der, geçer)
 *   · alt'ı olmayan görsel
 *   · etiketi olmayan form girdisi
 *   · sayfada birden çok ya da hiç h1
 *   · <main> bölgesi ve içeriğe atlama bağlantısı
 *   · :focus-visible ve prefers-reduced-motion kuralları
 *
 * Bulgu varsa 1 ile çıkar. Kapıya bağlanmadı: tarayıcı ve derlenmiş
 * dist gerekiyor, kapı ise saf node. Yayından önce elle çalıştırılır:
 *
 *   npm run build && npm run erisim:denetim
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KOK = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.ERISIM_PORT ?? 4199);
const EKRANLAR = ["Öğren", "Alıştırma", "Keşfet", "Profil"];

const { chromium } = await import("/opt/node-tools/node_modules/playwright/index.mjs").catch(
  () => import("playwright")
);

// dist'i yerel olarak sun.
const sunucu = spawn("python3", ["-m", "http.server", String(PORT)], {
  cwd: path.join(KOK, "dist"),
  stdio: "ignore",
});
const bekle = (ms) => new Promise((r) => setTimeout(r, ms));
await bekle(1500);

const tarayici = await chromium.launch({
  executablePath: process.env.CHROMIUM ?? "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
});
const sayfa = await tarayici.newPage({ viewport: { width: 430, height: 950 } });
await sayfa.emulateMedia({ reducedMotion: "reduce" });

const bulgular = [];
try {
  await sayfa.goto(`http://localhost:${PORT}/index.html`, { waitUntil: "networkidle" });
  // Giriş kapısını atla: denetim ana ekranları gezecek.
  await sayfa.evaluate(() =>
    localStorage.setItem(
      "gokturkce_profil_v1",
      JSON.stringify({ amaclar: [], onBilgi: "sifir", baslangic: "alfabe", haftalikDakika: 0, tarih: new Date().toISOString(), atlandi: true })
    )
  );
  await sayfa.reload({ waitUntil: "networkidle" });

  const stilDenetimi = await sayfa.evaluate(() => {
    const kural = (metin) =>
      [...document.styleSheets].some((s) => {
        try {
          return [...s.cssRules].some((r) => r.cssText?.includes(metin));
        } catch {
          return false;
        }
      });
    return { odak: kural("focus-visible"), hareket: kural("prefers-reduced-motion") };
  });
  if (!stilDenetimi.odak) bulgular.push("genel: :focus-visible kuralı yok — klavye odağı görünmüyor");
  if (!stilDenetimi.hareket) bulgular.push("genel: prefers-reduced-motion kuralı yok");

  for (const ekran of EKRANLAR) {
    await sayfa.evaluate((ad) => {
      [...document.querySelectorAll("button")].find((e) => e.textContent.trim() === ad)?.click();
    }, ekran);
    await bekle(1000);

    const r = await sayfa.evaluate(() => {
      const gorunur = (e) => {
        const k = e.getBoundingClientRect();
        return k.width > 0 && k.height > 0;
      };
      const ad = (e) =>
        (e.getAttribute("aria-label") || e.getAttribute("title") || e.innerText || "").trim();
      const etkilesimli = [...document.querySelectorAll('button,[role="button"],a[href]')].filter(gorunur);
      return {
        adsiz: etkilesimli
          .filter((e) => !ad(e) && !e.querySelector('img[alt]:not([alt=""])'))
          .slice(0, 5)
          .map((e) => e.className.toString().slice(0, 60)),
        adsizSayi: etkilesimli.filter((e) => !ad(e) && !e.querySelector('img[alt]:not([alt=""])')).length,
        altsiz: [...document.querySelectorAll("img")].filter(gorunur).filter((e) => !e.hasAttribute("alt")).length,
        etiketsiz: [...document.querySelectorAll("input,select,textarea")]
          .filter(gorunur)
          .filter((e) => !e.getAttribute("aria-label") && !e.getAttribute("aria-labelledby") && !(e.id && document.querySelector(`label[for="${e.id}"]`))).length,
        h1: document.querySelectorAll("h1").length,
        ana: !!document.querySelector("main"),
        atla: !!document.querySelector('a[href^="#"]'),
      };
    });

    if (r.adsizSayi) bulgular.push(`${ekran}: adı olmayan ${r.adsizSayi} düğme/bağlantı · örn. ${r.adsiz[0]}`);
    if (r.altsiz) bulgular.push(`${ekran}: alt niteliği olmayan ${r.altsiz} görsel`);
    if (r.etiketsiz) bulgular.push(`${ekran}: etiketi olmayan ${r.etiketsiz} form girdisi`);
    if (r.h1 !== 1) bulgular.push(`${ekran}: sayfada ${r.h1} adet h1 (tam 1 olmalı)`);
    if (!r.ana) bulgular.push(`${ekran}: <main> bölgesi yok`);
    if (!r.atla) bulgular.push(`${ekran}: içeriğe atlama bağlantısı yok`);
    console.log(
      `${ekran.padEnd(10)} adsız ${String(r.adsizSayi).padStart(3)} · alt'sız ${r.altsiz} · etiketsiz ${r.etiketsiz} · h1 ${r.h1}`
    );
  }
} finally {
  await tarayici.close();
  sunucu.kill();
}

if (bulgular.length) {
  console.error(`\nERİŞİLEBİLİRLİK DENETİMİ BAŞARISIZ (${bulgular.length} bulgu):`);
  for (const b of bulgular) console.error("  " + b);
  process.exit(1);
}
console.log("\nERİŞİLEBİLİRLİK DENETİMİ: GEÇTİ");
