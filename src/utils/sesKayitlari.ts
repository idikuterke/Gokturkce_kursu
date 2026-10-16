// İnsan sesi kayıtları katmanı.
//
// Konuşma sentezi (Web Speech API) Göktürkçe için yetersiz: Türkçe sesle
// okunduğu için tamga adları ve kadim sözcükler doğru çıkmıyor. Kalıcı
// çözüm, her tamga ve temel kelime için gerçek kayıt.
//
// Bu dosya kaydın VARLIĞINA göre davranır: kayıt varsa onu çalar, yoksa
// sessizce sentezlemeye düşer. Böylece kayıtlar parça parça eklenebilir —
// hepsi hazır olana kadar beklemek gerekmez, eklenen her dosya anında
// devreye girer.
//
// Dosya düzeni:  public/ses/<anahtar>.<uzantı>
// Anahtar       :  tamga/<kod-noktası>   ör. tamga/10C09
//                  kelime/<harf-anahtar> ör. kelime/bodun
// Biçim         :  webm (opus) birincil, mp3 yedek — bkz.
//                  docs/ses-kayit-rehberi.md

const TABAN = '/ses';
const UZANTILAR = ['webm', 'mp3'] as const;

/** Bir kaydın var olup olmadığı; ağa tekrar tekrar sormamak için. */
const varMi = new Map<string, string | null>();
let acikSes: HTMLAudioElement | null = null;

/** Runik metin → kayıt anahtarı. Tek tamga ise kod noktası, değilse kelime. */
const anahtarUret = (metin: string): string | null => {
  const t = metin.trim();
  if (!t) return null;

  const kodNoktalari = [...t];
  if (kodNoktalari.length === 1) {
    const cp = kodNoktalari[0].codePointAt(0);
    if (cp === undefined) return null;
    return `tamga/${cp.toString(16).toUpperCase()}`;
  }

  // Latin transkripsiyon: dosya adına uygun hale getir.
  if (!/[\u{10C00}-\u{10C4F}]/u.test(t)) {
    const slug = t
      .toLowerCase()
      .replace(/ŋ/g, 'ng')
      .replace(/[ıİ]/g, 'i')
      .replace(/ş/g, 's')
      .replace(/ç/g, 'c')
      .replace(/ö/g, 'o')
      .replace(/ü/g, 'u')
      .replace(/ğ/g, 'g')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return slug ? `kelime/${slug}` : null;
  }

  // Çok tamgalı runik dizi: kod noktalarını birleştir.
  return `tamga/${kodNoktalari.map((c) => c.codePointAt(0)!.toString(16).toUpperCase()).join('-')}`;
};

/** Kayıt dosyasının adresini bulur; yoksa null. Sonuç önbelleğe alınır. */
const adresBul = async (anahtar: string): Promise<string | null> => {
  if (varMi.has(anahtar)) return varMi.get(anahtar) ?? null;

  for (const uzanti of UZANTILAR) {
    const adres = `${TABAN}/${anahtar}.${uzanti}`;
    try {
      const yanit = await fetch(adres, { method: 'HEAD' });
      // Vite geliştirme sunucusu olmayan yol için index.html döndürebilir;
      // içerik türü ses değilse kayıt yok say.
      const tur = yanit.headers.get('content-type') || '';
      if (yanit.ok && tur.startsWith('audio')) {
        varMi.set(anahtar, adres);
        return adres;
      }
    } catch {
      // Ağ hatası: kayıt yok say, sentezlemeye düşülecek.
    }
  }

  varMi.set(anahtar, null);
  return null;
};

/**
 * Kayıt varsa çalar ve true döner; yoksa false döner (çağıran sentezlemeye
 * düşer). Hata hiçbir koşulda yukarı taşınmaz — telaffuz ikincil bir özellik.
 */
export const kayitCal = async (metin: string, bitince?: () => void): Promise<boolean> => {
  const anahtar = anahtarUret(metin);
  if (!anahtar) return false;

  const adres = await adresBul(anahtar);
  if (!adres) return false;

  try {
    acikSes?.pause();
    const ses = new Audio(adres);
    acikSes = ses;
    ses.onended = () => bitince?.();
    ses.onerror = () => bitince?.();
    await ses.play();
    return true;
  } catch {
    return false;
  }
};

/** Kayıt önbelleğini boşaltır — yeni dosyalar eklendiğinde işe yarar. */
export const onbellegiTemizle = () => varMi.clear();
