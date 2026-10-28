import { Unit, UserProgress, OgrenciProfili, KazanimKodu } from '../types';
import { LeitnerDurumu, kutuDagilimi, KUTU_SAYISI } from './leitner';
import { dersKazanimlari } from '../data/kazanimlar';
import { YansimaNotu } from './yansima';
import { TAMGALAR } from '../data/tamgalarData';

/**
 * ÇALIŞMA RAPORU — eğitmen görünürlüğü (ISO 29993 §13, izleme)
 *
 * İlerleme yalnız tarayıcıda duruyordu; eğitmen hiçbir şey göremiyordu.
 * Bu modül, öğrencinin kendi verisini indirilebilir bir rapora çeviriyor.
 *
 * KİMLİK YOK. Ölçme planı (docs/olcme/olcme-plani.md, "Etik") açık:
 * "Katılımcı kodu kullanılır, ad soyad analiz dosyasına girmez."
 * Rapor ad, e-posta, cihaz ya da IP taşımaz; yalnız öğrencinin kendi
 * girdiği katılımcı kodunu taşır. Kod boşsa rapor yine üretilir,
 * "kodsuz" olarak işaretlenir.
 *
 * Saf modül: ne localStorage okur ne ağ kullanır. Bileşen veriyi verir,
 * burası yalnız dönüştürür — böylece sınanabilir.
 */

export interface KazanimSayaci {
  kod: KazanimKodu;
  /** Bu kazanımı içeren ders sayısı. */
  ders: number;
  /** Bunların kaçı tamamlandı. */
  tamamlanan: number;
}

export interface CalismaRaporu {
  surum: 1;
  uretildi: string;
  katilimciKodu: string;
  /** İhtiyaç analizi yanıtları; yanıtlanmadıysa null. */
  profil: {
    amaclar: string[];
    onBilgi: string;
    baslangic: string;
    haftalikDakika: number;
    tarih: string;
    atlandi: boolean;
  } | null;
  ilerleme: {
    xp: number;
    seri: number;
    tamamlananDers: number;
    toplamDers: number;
    ogrenilenSozcuk: number;
    rutbe: string;
  };
  kazanimlar: KazanimSayaci[];
  /** Leitner kutu dağılımı: [1. kutu, 2. kutu, …]. */
  tamgaKutulari: number[];
  /** Gün gün etkinlik; boş günler de duruyor ki devamsızlık görünsün. */
  gunluk: { tarih: string; xp: number; ders: number; sozcuk: number }[];
  /**
   * Ders sonu yansıtma notları. SERBEST METİN: öğrenci kendi adını ya da
   * başka bir kimlik bilgisini yazmış olabilir. Biz ayıklamıyoruz —
   * sessizce kırpılan not, öğrencinin yazdığını sandığı not olmaz.
   * Arayüz bunu indirmeden önce söylüyor.
   */
  yansimalar: { tarih: string; ders: string; metin: string }[];
  /** Öğrencinin "yaptım" dediği üretim görevleri. Beyan, ölçüm değil. */
  gorevler: { id: string; tarih: string }[];
}

/** Rapor nesnesini kurar. Hiçbir kimlik alanı eklenmez. */
export const raporKur = (
  katilimciKodu: string,
  progress: UserProgress,
  profil: OgrenciProfili | null,
  uniteler: Unit[],
  leitner: LeitnerDurumu,
  // Kuyrukta dört konumsal parametre birikmişti ve çağrı yerleri
  // sessizce kaymaya başladı: tarih, yansıma listesinin yerine geçti.
  // İsimli seçenek bu sınıf hatayı tipte yakalıyor.
  ek: { yansimalar?: YansimaNotu[]; gorevler?: Record<string, string>; simdi?: Date } = {}
): CalismaRaporu => {
  const { yansimalar = [], gorevler = {}, simdi = new Date() } = ek;
  const dersler = uniteler.flatMap((u) => u.lessons);
  const tamam = (id: string) => !!progress.completedLessons?.[id];

  // Kazanım başına: kaç derste geçiyor, kaçı tamamlandı.
  const sayac = new Map<KazanimKodu, KazanimSayaci>();
  for (const d of dersler) {
    for (const k of dersKazanimlari(d)) {
      const mevcut = sayac.get(k.kod) ?? { kod: k.kod, ders: 0, tamamlanan: 0 };
      mevcut.ders++;
      if (tamam(d.id)) mevcut.tamamlanan++;
      sayac.set(k.kod, mevcut);
    }
  }

  return {
    surum: 1,
    uretildi: simdi.toISOString(),
    katilimciKodu: katilimciKodu.trim() || 'kodsuz',
    profil: profil
      ? {
          amaclar: profil.amaclar,
          onBilgi: profil.onBilgi,
          baslangic: profil.baslangic,
          haftalikDakika: profil.haftalikDakika,
          tarih: profil.tarih,
          atlandi: !!profil.atlandi,
        }
      : null,
    ilerleme: {
      xp: progress.xp ?? 0,
      seri: progress.streak ?? 0,
      tamamlananDers: dersler.filter((d) => tamam(d.id)).length,
      toplamDers: dersler.length,
      ogrenilenSozcuk: Object.keys(progress.learnedWords ?? {}).length,
      rutbe: progress.rank ?? '',
    },
    kazanimlar: [...sayac.values()].sort((a, b) => a.kod.localeCompare(b.kod)),
    tamgaKutulari: TAMGALAR.length ? kutuDagilimi(TAMGALAR, leitner) : Array(KUTU_SAYISI).fill(0),
    gunluk: Object.values(progress.activityHistory ?? {})
      .map((g) => ({ tarih: g.date, xp: g.xp, ders: g.lessonsCompleted, sozcuk: g.wordsLearned }))
      .sort((a, b) => a.tarih.localeCompare(b.tarih)),
    yansimalar: yansimalar.map((y) => ({ tarih: y.tarih, ders: y.dersAdi, metin: y.metin })),
    gorevler: Object.entries(gorevler).map(([id, tarih]) => ({ id, tarih })).sort((a, b) => a.id.localeCompare(b.id)),
  };
};

/** Bir CSV hücresini kaçırır. */
const h = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;

/**
 * Raporu CSV'ye çevirir. Tek tablo değil, bölümlü: Excel'de de
 * okunabilsin diye her bölüm kendi başlık satırıyla geliyor.
 * BOM ile başlar, yoksa Excel Türkçe harfleri bozuyor.
 */
export const raporCsv = (r: CalismaRaporu): string => {
  const satir: string[] = [];
  satir.push(['bolum', 'alan', 'deger'].join(';'));
  const ekle = (bolum: string, alan: string, deger: unknown) =>
    satir.push([h(bolum), h(alan), h(deger)].join(';'));

  ekle('kimlik', 'katilimciKodu', r.katilimciKodu);
  ekle('kimlik', 'uretildi', r.uretildi);
  ekle('kimlik', 'raporSurumu', r.surum);

  if (r.profil) {
    ekle('profil', 'amaclar', r.profil.amaclar.join('|'));
    ekle('profil', 'onBilgi', r.profil.onBilgi);
    ekle('profil', 'baslangic', r.profil.baslangic);
    ekle('profil', 'haftalikDakika', r.profil.haftalikDakika);
    ekle('profil', 'atlandi', r.profil.atlandi ? 'evet' : 'hayir');
  } else {
    ekle('profil', 'durum', 'yanitlanmadi');
  }

  for (const [k, v] of Object.entries(r.ilerleme)) ekle('ilerleme', k, v);
  for (const k of r.kazanimlar) ekle('kazanim', k.kod, `${k.tamamlanan}/${k.ders}`);
  r.tamgaKutulari.forEach((n, i) => ekle('tamgaKutusu', `${i + 1}. kutu`, n));
  for (const g of r.gunluk) ekle('gunluk', g.tarih, `xp=${g.xp};ders=${g.ders};sozcuk=${g.sozcuk}`);
  for (const y of r.yansimalar) ekle('yansima', `${y.tarih.slice(0, 10)} · ${y.ders}`, y.metin);
  for (const g of r.gorevler) ekle('gorev', g.id, g.tarih.slice(0, 10));

  return '﻿' + satir.join('\r\n');
};

/** İndirilecek dosya adı; katılımcı kodunu dosya adına güvenli yazar. */
export const raporDosyaAdi = (r: CalismaRaporu, uzanti: 'json' | 'csv'): string => {
  const kod = r.katilimciKodu.replace(/[^\p{L}\p{N}_-]/gu, '').slice(0, 24) || 'kodsuz';
  return `gokturkce-rapor-${kod}-${r.uretildi.slice(0, 10)}.${uzanti}`;
};
