// Sınav sonucu gönderimi — GKTracker web modunun React karşılığı.
// Aç / kapat: VITE_GK_SONUC_URL ortam değişkeni (ör. https://solid-chess-oasis.glitch.me/api/sonuc)
// Sunucu: `npm run sonuc-sunucu` (engine/sonuc-sunucu.mjs, PORT 8787, SONUC_TOKEN zorunlu)
// Ağ yoksa sonuc localStorage kuyruğuna alınır; sonraki açılışta otomatik yeniden denenir.

const GONDER_URL_KEY = 'gokturkce_sonuc_kuyrugu';
const GONDER_URL: string = (import.meta.env.VITE_GK_SONUC_URL as string | undefined) ?? '';

export const sonucHattiAcik = (): boolean => Boolean(GONDER_URL);

/**
 * Sonuç kaydını gönderir; sunucu alan adlarıyla birebir örtüşür:
 * POST /api/sonuc ← { kurs, modul, ad, puan, dogru, soru, gecti, cevaplar, cihaz, surum }
 * Eğitmen adı/epostası VITE_GK_EPOSTA ile etiketlenebilir; kursiyer adı istenmiyorsa boş bırakılır.
 */
function at(s: string, n = 200): string {
  return String(s ?? '').slice(0, n);
}

export type SonucKaydi = {
  modul: string;
  ad: string;
  eposta: string;
  puan: number | null;
  dogru: number | null;
  soru: number | null;
  gecti: boolean;
};

function cihazKimligi(): string {
  try {
    let id = localStorage.getItem('gokturkce_cihaz_id');
    if (!id) {
      id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      localStorage.setItem('gokturkce_cihaz_id', id);
    }
    return id;
  } catch {
    return 'anon-cihaz';
  }
}

function kuyrukcuk(kayit: SonucKaydi): void {
  try {
    const ham = localStorage.getItem(GONDER_URL_KEY);
    const kuyruk: SonucKaydi[] = ham ? JSON.parse(ham) : [];
    kuyruk.push(kayit);
    // 60 kayıtta eskisi düşer (KVKK ölçülü tutma ilkesi: kayıt en az azaltıldı).
    localStorage.setItem(GONDER_URL_KEY, JSON.stringify(kuyruk.slice(-60)));
  } catch {
    // localStorage yoksa sessiz geç
  }
}

async function gonder(kayit: SonucKaydi): Promise<boolean> {
  const govde = JSON.stringify({
    kurs: at('Göktürkçe Öğreneği (web)'),
    modul: at(kayit.modul, 40),
    ad: at(kayit.ad, 120),
    eposta: at(kayit.eposta, 120),
    puan: kayit.puan,
    dogru: kayit.dogru,
    soru: kayit.soru,
    gecti: kayit.gecti,
    cevaplar: {},
    cihaz: at(cihazKimligi(), 64),
    surum: at('react-web-v1', 40)
  });
  try {
    const cevap = await fetch(GONDER_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: govde
    });
    return cevap.ok;
  } catch {
    return false;
  }
}

/** Sınav sonucu verildiği an çağrılır. Hat kapalıysa hiçbir şey yapmaz. */
export async function sonucGonder(kayit: SonucKaydi): Promise<void> {
  if (!GONDER_URL) return;
  const ok = await gonder(kayit);
  if (!ok) kuyrukcuk(kayit);
}

/** Sayfa açılışında kuyruğu boşaltmaya çalışır (çevrimdışı kalan gönderiler). */
export function kuyrukTasi(): void {
  if (!GONDER_URL) return;
  try {
    const ham = localStorage.getItem(GONDER_URL_KEY);
    if (!ham) return;
    const kuyruk: SonucKaydi[] = JSON.parse(ham);
    if (!kuyruk.length) return;
    localStorage.setItem(GONDER_URL_KEY, JSON.stringify([]));
    (async () => {
      const kalan: SonucKaydi[] = [];
      for (const kayit of kuyruk) {
        const ok = await gonder(kayit);
        if (!ok) kalan.push(kayit);
      }
      if (kalan.length) kuyrukcukBirdenCok(kalan);
    })();
  } catch {
    // bozuk kayıt: temizle
    try { localStorage.removeItem(GONDER_URL_KEY); } catch { /* yok say */ }
  }
}

function kuyrukcukBirdenCok(kayitlar: SonucKaydi[]): void {
  try {
    localStorage.setItem(GONDER_URL_KEY, JSON.stringify(kayitlar.slice(-60)));
  } catch {
    // yok say
  }
}
