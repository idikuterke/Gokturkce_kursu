import React, { useState } from 'react';
import { Download, FileText, ShieldCheck } from 'lucide-react';
import { Unit, UserProgress, OgrenciProfili } from '../types';
import { LeitnerDurumu } from '../utils/leitner';
import { raporKur, raporCsv, raporDosyaAdi } from '../utils/rapor';
import { yansimalariOku } from '../utils/yansima';

/**
 * ÇALIŞMA RAPORU PANELİ — eğitmen görünürlüğü (ISO 29993 §13)
 *
 * İlerleme yalnız tarayıcıda duruyordu. Bu panel öğrencinin kendi
 * verisini indirilebilir dosyaya çeviriyor; öğrenci dosyayı eğitmene
 * iletiyor.
 *
 * NEDEN OTOMATİK GÖNDERİM YOK. Ölçme planı (docs/olcme/olcme-plani.md,
 * "Etik") araştırma verisi için etik kurul onayının ÖNCEDEN alınmasını
 * şart koşuyor. Sessizce sunucuya veri akıtan bir uygulama o şartı
 * öğrencinin haberi olmadan deler. İndirme, öğrencinin kendi eylemidir:
 * ne gönderdiğini görür, göndermeyi seçer.
 *
 * Dosyada ad, e-posta, cihaz ya da IP yok; yalnız öğrencinin girdiği
 * katılımcı kodu var.
 */

interface CalismaRaporuProps {
  progress: UserProgress;
  profil?: OgrenciProfili | null;
  uniteler: Unit[];
  leitner: LeitnerDurumu;
}

const KOD_KEY = 'gokturkce_katilimci_kodu';

export const CalismaRaporu: React.FC<CalismaRaporuProps> = ({
  progress,
  profil,
  uniteler,
  leitner,
}) => {
  const [kod, setKod] = useState(() => {
    try {
      return localStorage.getItem(KOD_KEY) ?? '';
    } catch {
      return '';
    }
  });
  const [sonIndirme, setSonIndirme] = useState<string | null>(null);
  const yansimaSayisi = yansimalariOku().length;

  const kodSakla = (yeni: string) => {
    setKod(yeni);
    try {
      localStorage.setItem(KOD_KEY, yeni);
    } catch {
      // saklanamadıysa oturum boyunca geçerli
    }
  };

  const indir = (bicim: 'json' | 'csv') => {
    let gorevler: Record<string, string> = {};
    try {
      gorevler = JSON.parse(localStorage.getItem('gokturkce_gorevler_v1') ?? '{}');
    } catch {
      gorevler = {};
    }
    const rapor = raporKur(kod, progress, profil ?? null, uniteler, leitner, {
      yansimalar: yansimalariOku(),
      gorevler,
    });
    const icerik =
      bicim === 'json' ? JSON.stringify(rapor, null, 2) : raporCsv(rapor);
    const tur = bicim === 'json' ? 'application/json' : 'text/csv';
    const ad = raporDosyaAdi(rapor, bicim);
    const url = URL.createObjectURL(new Blob([icerik], { type: `${tur};charset=utf-8` }));
    const a = document.createElement('a');
    a.href = url;
    a.download = ad;
    a.click();
    URL.revokeObjectURL(url);
    setSonIndirme(ad);
  };

  return (
    <section
      aria-labelledby="rapor-baslik"
      className="rounded-2xl border border-zemin-4 bg-zemin-2 p-5 space-y-4"
    >
      <div>
        <h2 id="rapor-baslik" className="text-sm font-bold text-white flex items-center gap-2">
          <FileText className="w-4 h-4 text-marka" aria-hidden="true" />
          Çalışma raporu
        </h2>
        <p className="text-xs text-metin-2 mt-1 leading-relaxed">
          İlerlemeni tek dosyaya çıkarır: ihtiyaç analizi yanıtların,
          tamamladığın dersler, kazanım başına ilerleme, tamga kutuların ve
          gün gün çalışma geçmişin. Eğitmenine iletmek istersen bu dosyayı
          gönder.
        </p>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="katilimci-kodu" className="block text-xs font-bold text-metin-2">
          Katılımcı kodu
        </label>
        <input
          id="katilimci-kodu"
          type="text"
          value={kod}
          onChange={(e) => kodSakla(e.target.value)}
          placeholder="örn. KT-07"
          maxLength={24}
          aria-describedby="kod-aciklama"
          className="w-full px-3 py-2.5 rounded-xl bg-zemin-3 border border-zemin-4 text-white text-sm placeholder:text-metin-4 focus:border-marka focus:outline-none transition-colors"
        />
        <p id="kod-aciklama" className="text-[11px] text-metin-3">
          Eğitmenin verdiği kod. Boş bırakırsan rapor "kodsuz" olarak çıkar.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => indir('csv')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-marka hover:bg-marka-koyu text-zemin font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5" aria-hidden="true" />
          CSV indir
        </button>
        <button
          type="button"
          onClick={() => indir('json')}
          className="flex-1 py-2.5 px-3 rounded-xl bg-zemin-3 border border-zemin-4 text-metin-2 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5" aria-hidden="true" />
          JSON indir
        </button>
      </div>

      {sonIndirme && (
        <p className="text-[11px] text-basari" role="status">
          İndirildi: {sonIndirme}
        </p>
      )}

      <p className="text-[11px] text-metin-3 leading-relaxed flex gap-2 rounded-xl border border-zemin-4 bg-zemin-3 p-3">
        <ShieldCheck className="w-4 h-4 text-marka shrink-0 mt-px" aria-hidden="true" />
        <span>
          Dosyada <strong className="text-metin-2">ad, e-posta, cihaz ya da IP yok</strong>;
          yalnız yazdığın katılımcı kodu var. Veri kendiliğinden hiçbir yere
          gönderilmiyor — gönderip göndermemeye sen karar veriyorsun.
          {yansimaSayisi > 0 && (
            <>
              {' '}Ders sonlarında yazdığın <strong className="text-metin-2">{yansimaSayisi} not</strong>{' '}
              da rapora giriyor; serbest metin olduğu için içlerinde ad geçiyorsa
              o da dosyaya girer.
            </>
          )}
        </span>
      </p>
    </section>
  );
};
