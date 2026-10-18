/**
 * Denetim ekranının veri modeli.
 *
 * Bu ekran SADECE geliştirme modunda açılır (import.meta.env.DEV).
 * Üretim derlemesine girmez; App.tsx içinde koşullu lazy import edilir.
 */

export type KuyrukId = "cumlecik" | "dize" | "sozluk" | "makine" | "gundelik";
export type Karar = "beklemede" | "onay" | "red";

/** Ekranda gösterilen, kuyruktan bağımsız tek kayıt biçimi. */
export interface DenetimKaydi {
  id: string;
  baslik: string;
  altBaslik: string;
  runik: string;
  transkripsiyon: string;
  /** Kelime kelime karşılık ya da tanık dize metni — salt okunur bağlam. */
  baglam: string;
  /** Sıklık / kelime sayısı gibi rozetler. */
  rozetler: string[];
  /** Dikkat çekilmesi gereken durumlar (yıpranma, lacuna, düşük güven). */
  uyarilar: string[];
  /**
   * Kaydın İÇERİK SÜRÜMÜ. Karar bu sürüme verilir; kayıt sonradan
   * değişirse (imla kuralı düzelip yazım farklılaşırsa) eski karar
   * geçersiz sayılır ve kayıt yeniden sorulur.
   *
   * Dosyadaki mühür zaten böyle çalışıyordu; tarayıcıdaki karar
   * çalışmıyordu — kural düzeltmesinden sonra 35 kelime "karar
   * verilmiş" görünüp listede çıkmadı.
   */
  surum?: string;
  /**
   * Makine önerisi. Doluysa form bu değerlerle açılır; insan düzeltir
   * ya da olduğu gibi onaylar. Onay yine insanındır — ön dolgu bir
   * iddia değil, yazma yükünü azaltan bir taslaktır.
   */
  onDolgu?: { metin?: string; tur?: string; kaynak?: string };
}

/** Kullanıcının bir kayıt için verdiği karar. localStorage'da tutulur. */
export interface DenetimKarari {
  karar: Karar;
  /** Günümüz Türkçesi (cümlecik/dize) veya anlam (sözlük). */
  metin: string;
  /** "ceviri" | "gunumuz_okumasi" (cümlecik/dize) veya kategori (sözlük). */
  tur: string;
  kaynak: string;
  not: string;
  /** Runik düzeltmesi. Korpus esastır; doldurulursa ayrıca işaretlenir. */
  runikDuzeltme: string;
  tarih: string;
  /** Kararın verildiği içerik sürümü — DenetimKaydi.surum ile eşleşmeli. */
  surum?: string;
}

export const BOS_KARAR: DenetimKarari = {
  karar: "beklemede",
  metin: "",
  tur: "",
  kaynak: "",
  not: "",
  runikDuzeltme: "",
  tarih: "",
};

export interface KuyrukTanimi {
  id: KuyrukId;
  /**
   * Dışa aktarımda yazılacak kuyruk adı — `engine/denetim-uygula.mjs`
   * yalnız dize | cumlecik | sozluk tanır. "Makine önerisi" sekmesi
   * cümlecik kayıtları gösterdiği için cumlecik olarak aktarılır.
   * "gundelik" ayrı bir uygulayıcıya gider (gundelik-denetim-uygula.mjs).
   */
  uygulaKuyrugu?: "dize" | "cumlecik" | "sozluk" | "gundelik";
  ad: string;
  aciklama: string;
  metinEtiketi: string;
  turEtiketi: string;
  turSecenekleri: { deger: string; etiket: string }[];
  yukle: () => Promise<DenetimKaydi[]>;
}

const ceviriTurleri = [
  { deger: "ceviri", etiket: "Çeviri" },
  { deger: "gunumuz_okumasi", etiket: "Günümüz okuması" },
];

export const KUYRUKLAR: KuyrukTanimi[] = [
  {
    id: "cumlecik",
    ad: "Cümlecik",
    aciklama:
      "Dizelerden otomatik ayrılmış cümlecik adayları. Sınır yanlışsa reddet, nota doğru sınırı yaz.",
    metinEtiketi: "Günümüz Türkçesi",
    turEtiketi: "Tür",
    turSecenekleri: ceviriTurleri,
    yukle: async () => {
      const m = await import("../../docs/cumlecik-adaylari.json");
      const veri = (m.default ?? m) as { cumlecikler: Record<string, unknown>[] };
      return veri.cumlecikler.map((c) => {
        const uyarilar: string[] = [];
        if (!c.sonKelimeYuklem) uyarilar.push("Son kelime çekimli fiil değil — sınır şüpheli");
        if (c.yipranma) uyarilar.push("Yıpranma / lacuna var");
        if ((c.kelimeSayisi as number) > 12) uyarilar.push("12 kelimeden uzun — bölünmeli");
        return {
          id: String(c.id),
          baslik: String(c.id),
          altBaslik: `${c.yazit} · ${c.yuz} yüzü · ${c.satir}. satır`,
          runik: String(c.runik),
          transkripsiyon: String(c.transkripsiyon),
          baglam: String(c.kelimeKarsiliklari),
          rozetler: [`${c.kelimeSayisi} kelime`],
          uyarilar,
        };
      });
    },
  },
  {
    id: "dize",
    ad: "Dize",
    aciklama: "Çeviri denetiminden geçmemiş tam dizeler.",
    metinEtiketi: "Günümüz Türkçesi",
    turEtiketi: "Tür",
    turSecenekleri: ceviriTurleri,
    yukle: async () => {
      const m = await import("../../docs/ceviri-bekleyen-dizeler.json");
      const veri = (m.default ?? m) as { dizeler: Record<string, unknown>[] };
      return veri.dizeler.map((d) => ({
        id: String(d.id),
        baslik: String(d.id),
        altBaslik: `${d.yazit} · ${d.yuz} yüzü · ${d.satir}. satır`,
        runik: String(d.runik),
        transkripsiyon: String(d.transkripsiyon),
        baglam: String(d.mevcutTurkce ?? ""),
        rozetler: [`${d.kelimeSayisi} kelime`],
        uyarilar: (d.notlar as string[]) ?? [],
      }));
    },
  },
  {
    id: "sozluk",
    ad: "Sözlük",
    aciklama: "Korpusta geçen ama anlamı girilmemiş kelimeler. Sıklığa göre sıralı.",
    metinEtiketi: "Anlam",
    turEtiketi: "Kategori",
    turSecenekleri: [
      { deger: "devlet", etiket: "devlet / yönetim" },
      { deger: "savas", etiket: "savaş / ordu" },
      { deger: "doga", etiket: "doğa / coğrafya" },
      { deger: "zaman", etiket: "zaman" },
      { deger: "akrabalik", etiket: "akrabalık" },
      { deger: "fiil", etiket: "fiil" },
      { deger: "sifat", etiket: "sıfat / zarf" },
      { deger: "sayi", etiket: "sayı" },
      { deger: "ozel", etiket: "özel ad" },
      { deger: "diger", etiket: "diğer" },
    ],
    yukle: async () => {
      const m = await import("../../docs/sozluk-anlam-bekleyenler.json");
      const veri = (m.default ?? m) as Record<string, unknown>[];
      return veri.map((k) => ({
        id: String(k.transcription),
        baslik: String(k.transcription),
        altBaslik: `Tanık: ${k.attestation}`,
        runik: String(k.runic),
        transkripsiyon: String(k.transcription),
        baglam: String(k.attestation_text ?? ""),
        rozetler: [`${k.frequency}× geçiyor`],
        uyarilar: [],
      }));
    },
  },
];

/**
 * Makine üretimi karşılıklar.
 *
 * `denetim-uygula.mjs --denetleyen makine` ile işlenen kayıtlar
 * cumlecikler-onayli.json'a yazılır ama içerik üreticisi onları
 * alıştırmaya ALMAZ. Bu kuyruk onları insan önüne getirir: metin
 * önceden dolu gelir, insan okur, düzeltir ya da onaylar.
 *
 * Onaylananlar `--denetleyen insan` ile yeniden işlenince kapıdan geçer.
 */
KUYRUKLAR.push({
  id: "makine",
  uygulaKuyrugu: "cumlecik",
  ad: "Makine önerisi",
  aciklama:
    "Makine üretimi karşılıklar — alıştırmaya GİRMİYOR. Metin önceden dolu; " +
    "oku, gerekiyorsa düzelt, onayla. Onayladıkların --denetleyen insan ile işlenir.",
  metinEtiketi: "Günümüz Türkçesi",
  turEtiketi: "Tür",
  turSecenekleri: ceviriTurleri,
  yukle: async () => {
    // Dosya isteğe bağlı: paket işlenmeden önce yok. Bu yüzden statik
    // import değil fetch — Vite dev sunucusu proje kökünü servis eder.
    const yanit = await fetch("/05_Kaynak_DB/cumlecikler-onayli.json");
    if (!yanit.ok) {
      throw new Error(
        "05_Kaynak_DB/cumlecikler-onayli.json bulunamadı. Önce makine paketini işle:  " +
          "node engine/denetim-uygula.mjs <paket.json> --denetleyen makine"
      );
    }
    const veri = (await yanit.json()) as { cumlecikler?: Record<string, unknown>[] };
    const makineler = (veri.cumlecikler ?? []).filter((c) => c.denetleyen !== "insan");
    return makineler.map((c) => {
      const uyarilar = ["Makine üretimi — insan onayı yok, alıştırmaya girmiyor."];
      if (c.yipranma) uyarilar.push("Yıpranma / lacuna var");
      return {
        id: String(c.id),
        baslik: String(c.id),
        altBaslik: `${c.dizeId} · kaynak: ${c.kaynak ?? "—"}`,
        runik: String(c.runik),
        transkripsiyon: String(c.transkripsiyon),
        baglam: String(c.kelimeKarsiliklari ?? ""),
        rozetler: [`${c.kelimeSayisi} kelime`, String(c.denetleyen ?? "makine")],
        uyarilar,
        onDolgu: {
          metin: String(c.turkce ?? ""),
          tur: String(c.tur ?? ""),
          kaynak: String(c.kaynak ?? ""),
        },
      };
    });
  },
});

/**
 * GÜNDELİK YAZIMLAR.
 *
 * Gündelik modülün 134 kelimesinden 20'si korpusta tanıklı (yazıtta
 * geçiyor, denetim gerekmez); kalanı 13 maddelik imla kuralından
 * ÜRETİLDİ. Motor korpusla sınandı ama her yazım tek tek görülmedi.
 *
 * Bu kuyruk onları insan önüne getirir: yazım büyük puntoyla, tamga
 * tamga dökümüyle ve UYGULANAN KURALLARLA birlikte. Yanlış olan bir
 * yazımda hangi kuralın hata verdiği de görünür — düzeltme tek tek
 * kelimede değil KURALDA yapılır, aynı hata başka kelimede tekrarlanmasın.
 *
 * Kaynak alanı önceden dolu gelir (imla kuralı dosyası): onay için
 * tek tek kaynak yazmak gerekmez.
 */
KUYRUKLAR.push({
  id: "gundelik",
  uygulaKuyrugu: "gundelik",
  ad: "Gündelik yazım",
  aciklama:
    "Kuraldan üretilen gündelik yazımlar — tanıklı olanlar listede yok. " +
    "Yazım doğruysa onayla; yanlışsa reddet ve 'Runik düzeltmesi'ne doğrusunu yaz.",
  metinEtiketi: "Açıklama — yanlışsa hangi kural hatalı? (isteğe bağlı)",
  turEtiketi: "Sonuç",
  turSecenekleri: [
    { deger: "dogru", etiket: "Yazım doğru" },
    { deger: "duzeltildi", etiket: "Düzeltildi (runik alanını doldur)" },
    { deger: "cikarilsin", etiket: "Bu kelime çıkarılsın" },
  ],
  yukle: async () => {
    const m = await import("../data/generated/gundelik.json");
    const veri = (m.default ?? m) as unknown as { kelimeler: Record<string, unknown>[] };
    return veri.kelimeler
      // Tanıklı yazım korpustan gelir; denetlenecek olan kuraldan üretilendir.
      .filter((k) => !k.tanikli)
      // Mührü geçerli olan kelime tekrar sorulmaz. Mühür, kural
      // değişip yazım farklılaşınca üretici tarafından düşürülür —
      // o zaman kelime kendiliğinden listeye geri gelir.
      .filter((k) => k.insanDenetimi !== "dogru" && k.insanDenetimi !== "duzeltildi")
      .map((k) => {
        const uyarilar: string[] = [];
        const esYazim = (k.esYazim as string[]) ?? [];
        if (esYazim.length) {
          uyarilar.push(
            `Eş yazım: "${esYazim.join('", "')}" aynı tamga dizisine düşüyor ` +
              "(kısa ünlüler yazılmadığı için). Hata değil, yazının özelliği."
          );
        }
        return {
          id: String(k.id),
          baslik: String(k.kelime),
          altBaslik: `${k.tema} · ${k.sira === "kalin" ? "kalın sıra" : "ince sıra"}`,
          runik: String(k.runik),
          transkripsiyon: [...String(k.runik)].join(" "),
          // Uygulanan kurallar: yanlışsa hangi kuralın hata verdiği görünsün.
          baglam: (k.adimlar as string[]).map((a, i) => `${i + 1}. ${a}`).join("   ·   "),
          rozetler: [
            `${k.tamgaSayisi} tamga`,
            k.insanDenetimi === "yeniden" ? "yeniden denetim" : "kuraldan üretildi",
          ],
          uyarilar,
          // Sürüm = yazımın kendisi. Yazım değişirse eski karar düşer.
          surum: String(k.runik),
          onDolgu: {
            tur: "dogru",
            kaynak: "00_Kaynaklar/imla_kurallari_13_madde.md",
          },
        };
      });
  },
});

export const depoAnahtari = (k: KuyrukId) => `gokturkce_denetim_${k}_v1`;

export function kararlariOku(k: KuyrukId): Record<string, DenetimKarari> {
  try {
    const ham = localStorage.getItem(depoAnahtari(k));
    return ham ? (JSON.parse(ham) as Record<string, DenetimKarari>) : {};
  } catch {
    return {};
  }
}

/**
 * İçeriği değişmiş kayıtların kararlarını düşürür.
 *
 * Sürüm taşımayan kuyruklar (cümlecik, dize, sözlük) etkilenmez:
 * orada kayıt da karar da sürümsüz, karşılaştırma yapılmaz.
 * Dönüş: temizlenmiş kararlar + düşen kayıt sayısı.
 */
export function bayatlariAyikla(
  kararlar: Record<string, DenetimKarari>,
  kayitlar: DenetimKaydi[]
): { kararlar: Record<string, DenetimKarari>; dusen: string[] } {
  const surumler = new Map(kayitlar.map((k) => [k.id, k.surum]));
  const temiz: Record<string, DenetimKarari> = {};
  const dusen: string[] = [];
  for (const [id, karar] of Object.entries(kararlar)) {
    const simdiki = surumler.get(id);
    // Kayıt artık listede yok → kararı sakla (başka sebeple süzülmüş olabilir).
    if (!surumler.has(id)) { temiz[id] = karar; continue; }
    // Kayıt sürümsüz → karşılaştırma yok.
    if (simdiki === undefined) { temiz[id] = karar; continue; }
    if (karar.surum === simdiki) { temiz[id] = karar; continue; }
    dusen.push(id);
  }
  return { kararlar: temiz, dusen };
}

export function kararlariYaz(k: KuyrukId, kararlar: Record<string, DenetimKarari>): boolean {
  try {
    localStorage.setItem(depoAnahtari(k), JSON.stringify(kararlar));
    return true;
  } catch {
    // kota dolabilir — çağıran uyarı gösterir
    return false;
  }
}
