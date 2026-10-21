import React, { useEffect, useState } from 'react';
import { MascotAlp, type SozcukKunyesi } from './MascotAlp';
import { bilgeSozu, type Baglam } from '../data/bilgeSozleri';
import { sozluguYukle } from '../data/generated/yukle';

interface BilgeAlpProps {
  /** Hangi an: karşılama, doğru/yanlış, seri, kuşak bitişi… */
  baglam: Baglam;
  size?: number;
  /** Aynı bağlamda farklı söz istendiğinde değiştir (ör. soru numarası). */
  tazele?: number;
}

/**
 * Oturum boyunca her bağlamın kaçıncı sözünde olduğumuzu tutar. Modül
 * düzeyinde duruyor ki bileşen her bağlandığında baştan başlamasın —
 * yoksa kullanıcı aynı cümleyi üst üste görür.
 */
const sayaclar = new Map<Baglam, number>();

/** Onaylı sözlük bir kez indirilir; sonraki aramalar bellekten. */
let sozlukOnbellek: Map<string, SozcukKunyesi> | null = null;

const sozcukKunyesi = async (id: string): Promise<SozcukKunyesi | null> => {
  if (!sozlukOnbellek) {
    try {
      const sozluk = await sozluguYukle();
      sozlukOnbellek = new Map(
        sozluk
          // Kaynağı olmayan madde künye olarak gösterilmez: maskot
          // kaynaksız anlam söylemez.
          .filter((k): k is typeof k & { kaynak: string } => Boolean(k.kaynak))
          .map((k) => [
            k.id,
            {
              runik: k.runik,
              transkripsiyon: k.transkripsiyon,
              anlam: k.anlam,
              kaynak: k.kaynak,
            },
          ])
      );
    } catch {
      return null; // sözlük inmediyse söz künyesiz gösterilir
    }
  }
  return sozlukOnbellek.get(id) ?? null;
};

/**
 * Bilge Alp'i bağlama göre konuşturur.
 *
 * Söz metni src/data/bilgeSozleri.ts'te; sözde geçen Eski Türkçe sözcüğün
 * anlamı ve kaynağı burada, onaylı sözlükten çalışma anında okunuyor.
 * Böylece sözlük düzeltildiğinde maskot da düzelir.
 */
export const BilgeAlp: React.FC<BilgeAlpProps> = ({ baglam, size = 135, tazele = 0 }) => {
  const [soz] = useState(() => {
    const n = (sayaclar.get(baglam) ?? 0) + tazele;
    sayaclar.set(baglam, n + 1);
    return bilgeSozu(baglam, n);
  });
  const [kunye, setKunye] = useState<SozcukKunyesi | null>(null);

  useEffect(() => {
    if (!soz.sozcuk) return;
    let gecerli = true;
    sozcukKunyesi(soz.sozcuk).then((k) => {
      if (gecerli) setKunye(k);
    });
    return () => {
      gecerli = false;
    };
  }, [soz.sozcuk]);

  return (
    <MascotAlp
      mood={soz.ruh}
      speech={soz.metin}
      size={size}
      sozcuk={kunye ?? undefined}
    />
  );
};
