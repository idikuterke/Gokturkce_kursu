/**
 * Denetim ekranının veri modeli.
 *
 * Bu ekran SADECE geliştirme modunda açılır (import.meta.env.DEV).
 * Üretim derlemesine girmez; App.tsx içinde koşullu lazy import edilir.
 */

export type KuyrukId = "cumlecik" | "dize" | "sozluk" | "makine";
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

export const depoAnahtari = (k: KuyrukId) => `gokturkce_denetim_${k}_v1`;

export function kararlariOku(k: KuyrukId): Record<string, DenetimKarari> {
  try {
    const ham = localStorage.getItem(depoAnahtari(k));
    return ham ? (JSON.parse(ham) as Record<string, DenetimKarari>) : {};
  } catch {
    return {};
  }
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
