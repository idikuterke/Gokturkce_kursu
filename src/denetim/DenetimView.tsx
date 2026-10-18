import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  BOS_KARAR,
  DenetimKaydi,
  DenetimKarari,
  Karar,
  KUYRUKLAR,
  KuyrukId,
  bayatlariAyikla,
  kararlariOku,
  kararlariYaz,
} from './denetimVeri';

/**
 * Toplu denetim ekranı — yalnızca geliştirme modunda.
 *
 * Kararlar localStorage'da tutulur, "Dışa aktar" ile JSON indirilir,
 * `node engine/denetim-uygula.mjs <dosya>` ile kaynak veriye işlenir.
 *
 * Kısayollar: A onay · R red · ←/→ gezinme · Ctrl+S dışa aktar
 */
/**
 * Runik ölçeği kod noktasına göre — tek kelime büyük, uzun dize küçük.
 * `.length` kullanılamaz: U+10C00 üstü karakterler iki birim sayılır.
 */
/** Eski Türk yazısı tamgası (U+10C00–U+10C4F). */
const TAMGA_DESENI = /[\u{10C00}-\u{10C4F}]/u;

const runikOlcek = (metin: string): string => {
  const n = [...(metin ?? '')].length;
  if (n <= 6) return 'text-6xl';
  if (n <= 14) return 'text-4xl';
  if (n <= 28) return 'text-3xl';
  if (n <= 48) return 'text-2xl';
  return 'text-xl';
};

export const DenetimView: React.FC = () => {
  const [kuyrukId, setKuyrukId] = useState<KuyrukId>('cumlecik');
  const [kayitlar, setKayitlar] = useState<DenetimKaydi[]>([]);
  const [kararlar, setKararlar] = useState<Record<string, DenetimKarari>>({});
  const [indeks, setIndeks] = useState(0);
  const [yukleniyor, setYukleniyor] = useState(true);
  const [hata, setHata] = useState<string | null>(null);
  const [sadeceBekleyen, setSadeceBekleyen] = useState(true);
  const [kotaUyarisi, setKotaUyarisi] = useState(false);
  /** Kural değiştiği için kararı düşen kayıtlar — kullanıcıya söylenir. */
  const [bayatlar, setBayatlar] = useState<string[]>([]);
  const metinRef = useRef<HTMLTextAreaElement>(null);

  const kuyruk = KUYRUKLAR.find((k) => k.id === kuyrukId)!;

  useEffect(() => {
    let iptal = false;
    setYukleniyor(true);
    setHata(null);
    kuyruk
      .yukle()
      .then((v) => {
        if (iptal) return;
        setKayitlar(v);
        // İçeriği değişmiş kayıtların eski kararı düşer; yoksa kayıt
        // "karar verilmiş" görünüp listede hiç çıkmaz.
        const { kararlar: temiz, dusen } = bayatlariAyikla(kararlariOku(kuyrukId), v);
        if (dusen.length) kararlariYaz(kuyrukId, temiz);
        setKararlar(temiz);
        setBayatlar(dusen);
        setIndeks(0);
      })
      .catch((e: unknown) => {
        if (!iptal) setHata(e instanceof Error ? e.message : 'Veri yüklenemedi');
      })
      .finally(() => {
        if (!iptal) setYukleniyor(false);
      });
    return () => {
      iptal = true;
    };
  }, [kuyrukId, kuyruk]);

  const gorunen = useMemo(
    () =>
      sadeceBekleyen
        ? kayitlar.filter((k) => (kararlar[k.id]?.karar ?? 'beklemede') === 'beklemede')
        : kayitlar,
    [kayitlar, kararlar, sadeceBekleyen]
  );

  const aktif = gorunen[Math.min(indeks, Math.max(0, gorunen.length - 1))];
  // Kayıtlı karar varsa o kazanır; yoksa makine ön dolgusu forma düşer.
  // Ön dolgu localStorage'a yazılmaz — insan bir şey değiştirene ya da
  // onaylayana kadar karar "beklemede" kalır.
  const aktifKarar: DenetimKarari = aktif
    ? kararlar[aktif.id] ?? { ...BOS_KARAR, ...(aktif.onDolgu ?? {}) }
    : BOS_KARAR;

  const sayim = useMemo(() => {
    let onay = 0;
    let red = 0;
    for (const k of kayitlar) {
      const d = kararlar[k.id]?.karar;
      if (d === 'onay') onay++;
      else if (d === 'red') red++;
    }
    return { onay, red, toplam: kayitlar.length, kalan: kayitlar.length - onay - red };
  }, [kayitlar, kararlar]);

  const guncelle = useCallback(
    (yama: Partial<DenetimKarari>) => {
      if (!aktif) return;
      setKararlar((onceki) => {
        const yeni = {
          ...onceki,
          [aktif.id]: {
            ...BOS_KARAR,
            ...(aktif.onDolgu ?? {}),
            ...onceki[aktif.id],
            ...yama,
            surum: aktif.surum,
            tarih: new Date().toISOString(),
          },
        };
        if (!kararlariYaz(kuyrukId, yeni)) setKotaUyarisi(true);
        return yeni;
      });
    },
    [aktif, kuyrukId]
  );

  const ilerle = useCallback(
    (adim: number) => {
      setIndeks((i) => {
        const sinir = sadeceBekleyen ? gorunen.length : gorunen.length - 1;
        return Math.max(0, Math.min(sinir, i + adim));
      });
    },
    [gorunen.length, sadeceBekleyen]
  );

  const kararVer = useCallback(
    (karar: Karar) => {
      if (!aktif) return;
      guncelle({ karar });
      // "sadece bekleyen" açıkken kayıt listeden düşer, indeks sabit kalmalı
      if (!sadeceBekleyen) ilerle(1);
    },
    [aktif, guncelle, ilerle, sadeceBekleyen]
  );

  const disaAktar = useCallback(() => {
    const govde = {
      kuyruk: kuyruk.uygulaKuyrugu ?? kuyrukId,
      uretim: new Date().toISOString(),
      kararlar: Object.entries(kararlar)
        .filter(([, d]) => d.karar !== 'beklemede')
        .map(([id, d]) => ({
          id,
          ...d,
          // Denetleyenin ekranda GÖRDÜĞÜ yazım. Kural sonradan düzelirse
          // üretilen yazım bundan ayrılır ve mühür düşer.
          gorulenRunik: kayitlar.find((k) => k.id === id)?.runik ?? '',
        })),
    };
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(govde, null, 2)], { type: 'application/json' })
    );
    const a = document.createElement('a');
    a.href = url;
    a.download = `denetim-${kuyrukId}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [kararlar, kayitlar, kuyruk, kuyrukId]);

  useEffect(() => {
    const dinle = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        disaAktar();
        return;
      }
      const yaziyor =
        e.target instanceof HTMLElement &&
        ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName);
      if (yaziyor) return;
      if (e.key === 'ArrowRight') ilerle(1);
      else if (e.key === 'ArrowLeft') ilerle(-1);
      else if (e.key.toLowerCase() === 'a') kararVer('onay');
      else if (e.key.toLowerCase() === 'r') kararVer('red');
    };
    window.addEventListener('keydown', dinle);
    return () => window.removeEventListener('keydown', dinle);
  }, [disaAktar, ilerle, kararVer]);

  const girdi =
    'w-full rounded-xl border-2 border-[#E3EAF2] px-4 py-3 text-[#1F3147] focus:border-marka focus:outline-none';

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
    <div className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold text-[#1F3147]">Denetim Ekranı</h1>
          <span className="rounded-full bg-[#FFE8B0] px-3 py-1 text-xs font-semibold text-[#7A5A00]">
            yalnızca geliştirme
          </span>
        </div>
        <p className="mt-1 text-sm text-metin-3">
          Kısayollar: <kbd>A</kbd> onay · <kbd>R</kbd> red · <kbd>←</kbd>/<kbd>→</kbd> gezinme ·{' '}
          <kbd>Ctrl+S</kbd> dışa aktar
        </p>
      </header>

      <div className="mb-5 flex flex-wrap gap-2">
        {KUYRUKLAR.map((k) => (
          <button
            key={k.id}
            onClick={() => setKuyrukId(k.id)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
              k.id === kuyrukId
                ? 'bg-marka text-white'
                : 'bg-[#EEF3F8] text-metin-5 hover:bg-[#E0E9F3]'
            }`}
          >
            {k.ad}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-metin-3">{kuyruk.aciklama}</p>

      {bayatlar.length > 0 && (
        <p className="mb-4 rounded-xl bg-[#FFF4D6] px-4 py-3 text-sm text-[#7A5A00]">
          <b>{bayatlar.length} kaydın yazımı</b> imla kuralı düzeltildikten sonra
          değişti; o kayıtlara verdiğin eski karar düştü ve listeye geri geldiler.
          Yeni yazımı görüp bir daha karar ver.
        </p>
      )}

      {kotaUyarisi && (
        <p className="mb-4 rounded-xl bg-[#FFE1E1] px-4 py-3 text-sm text-[#9B1C1C]">
          Tarayıcı depolama kotası doldu. Hemen <b>Dışa aktar</b> ile kaydet, sonra
          uygulanan kararları temizle.
        </p>
      )}

      <div className="mb-5 flex flex-wrap items-center gap-4 rounded-2xl bg-[#F6F9FC] px-4 py-3 text-sm">
        <span className="font-semibold text-[#1F3147]">
          {sayim.onay} onay · {sayim.red} red · {sayim.kalan} kaldı / {sayim.toplam}
        </span>
        <div className="h-2 min-w-40 flex-1 overflow-hidden rounded-full bg-[#E3EAF2]">
          <div
            className="h-full bg-marka transition-all"
            style={{
              width: `${sayim.toplam ? ((sayim.onay + sayim.red) / sayim.toplam) * 100 : 0}%`,
            }}
          />
        </div>
        <label className="flex items-center gap-2 text-metin-5">
          <input
            type="checkbox"
            checked={sadeceBekleyen}
            onChange={(e) => {
              setSadeceBekleyen(e.target.checked);
              setIndeks(0);
            }}
          />
          sadece bekleyenler
        </label>
        <button
          onClick={disaAktar}
          className="rounded-xl bg-[#1F3147] px-4 py-2 font-semibold text-white"
        >
          Dışa aktar
        </button>
      </div>

      {yukleniyor && <p className="text-metin-3">Yükleniyor…</p>}
      {hata && (
        <p className="rounded-xl bg-[#FFE1E1] px-4 py-3 text-sm text-[#9B1C1C]">{hata}</p>
      )}

      {!yukleniyor && !hata && !aktif && (
        <p className="rounded-2xl bg-[#E8F8F0] px-4 py-6 text-center text-[#1B6E4B]">
          Bu kuyrukta bekleyen kayıt kalmadı. <b>Dışa aktar</b> ile kararları indir.
        </p>
      )}

      {aktif && (
        <article className="rounded-3xl border-2 border-[#E3EAF2] bg-white p-6">
          <div className="mb-4 flex flex-wrap items-baseline gap-3">
            <h2 className="font-mono text-lg font-bold text-[#1F3147]">{aktif.baslik}</h2>
            <span className="text-sm text-metin-3">{aktif.altBaslik}</span>
            {aktif.rozetler.map((r) => (
              <span
                key={r}
                className="rounded-full bg-[#EEF3F8] px-3 py-1 text-xs font-semibold text-metin-5"
              >
                {r}
              </span>
            ))}
          </div>

          {aktif.uyarilar.length > 0 && (
            <ul className="mb-4 space-y-1 rounded-xl bg-[#FFF4D6] px-4 py-3 text-sm text-[#7A5A00]">
              {aktif.uyarilar.map((u) => (
                <li key={u}>⚠ {u}</li>
              ))}
            </ul>
          )}

          <p
            dir="rtl"
            lang="otk"
            className={`mb-3 break-words rounded-2xl bg-[#F6F9FC] px-5 py-6 text-center leading-relaxed text-[#1F3147] ${runikOlcek(
              aktif.runik
            )}`}
          >
            {aktif.runik}
          </p>
          <p className="mb-2 break-words font-mono text-sm text-metin-5">
            {aktif.transkripsiyon}
          </p>
          {aktif.baglam && (
            <p className="mb-5 break-words text-sm text-metin-3">{aktif.baglam}</p>
          )}

          <div className="space-y-3">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-metin-5">
                {kuyruk.metinEtiketi}
              </span>
              <textarea
                ref={metinRef}
                rows={2}
                value={aktifKarar.metin}
                onChange={(e) => guncelle({ metin: e.target.value })}
                className={girdi}
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-metin-5">
                  {kuyruk.turEtiketi}
                </span>
                <select
                  value={aktifKarar.tur}
                  onChange={(e) => guncelle({ tur: e.target.value })}
                  className={girdi}
                >
                  <option value="">— seç —</option>
                  {kuyruk.turSecenekleri.map((s) => (
                    <option key={s.deger} value={s.deger}>
                      {s.etiket}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-semibold text-metin-5">
                  Kaynak (zorunlu)
                </span>
                <input
                  value={aktifKarar.kaynak}
                  onChange={(e) => guncelle({ kaynak: e.target.value })}
                  placeholder="Tekin 2003, s. 54"
                  className={girdi}
                />
              </label>
            </div>

            {/* İki not kutusu kafa karıştırıyordu: gündelik kuyruğunda
              açıklama zaten üstteki alandan alınıyor. */}
          {kuyrukId !== 'gundelik' && (
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-metin-5">Not</span>
              <input
                value={aktifKarar.not}
                onChange={(e) => guncelle({ not: e.target.value })}
                placeholder="Red sebebi, doğru cümlecik sınırı, vb."
                className={girdi}
              />
            </label>
          )}

          {/*
            Runik düzeltmesi eskiden <details> içinde kapalıydı. Denetimde
            görüldü ki düzeltmeler oraya değil, açıkta duran not alanına
            yazılıyor — ve uygulayıcı onları göremiyor. Alan artık açık.
          */}
          <label className="block rounded-xl bg-[#FFF4D6] px-4 py-3">
            <span className="mb-1 block text-sm font-semibold text-[#7A5A00]">
              Runik düzeltmesi — doğru yazımı BURAYA yaz
            </span>
            <input
              dir="rtl"
              lang="otk"
              value={aktifKarar.runikDuzeltme}
              onChange={(e) => guncelle({ runikDuzeltme: e.target.value })}
              placeholder={aktif.runik}
              className={`${girdi} text-3xl`}
            />
            <p className="mt-2 text-xs text-[#7A5A00]">
              Korpus esastır — yalnız gerçek hata varsa doldur. Notu yukarıdaki
              alana yaz; tamgalar buraya.
            </p>
          </label>

          {/*
            Not alanına tamga yazılmışsa uyar: oraya yazılan düzeltme
            uygulayıcıya ulaşmaz.
          */}
          {TAMGA_DESENI.test(`${aktifKarar.metin} ${aktifKarar.not}`) &&
            !aktifKarar.runikDuzeltme.trim() && (
              <p className="rounded-xl bg-[#FDECEC] px-4 py-3 text-sm text-[#9B1C1C]">
                Not alanına tamga yazmışsın ama “Runik düzeltmesi” boş. Düzeltme
                yalnız o alandan okunuyor — tamgaları oraya taşı.
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => kararVer('onay')}
              disabled={!aktifKarar.kaynak.trim()}
              className="rounded-xl bg-[#1B9E62] px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              Onayla (A)
            </button>
            <button
              onClick={() => kararVer('red')}
              className="rounded-xl bg-[#D14343] px-5 py-3 font-semibold text-white"
            >
              Reddet (R)
            </button>
            <span className="ml-auto text-sm text-metin-3">
              {Math.min(indeks + 1, gorunen.length)} / {gorunen.length}
            </span>
            <button
              onClick={() => ilerle(-1)}
              className="rounded-xl bg-[#EEF3F8] px-4 py-3 font-semibold text-metin-5"
            >
              ←
            </button>
            <button
              onClick={() => ilerle(1)}
              className="rounded-xl bg-[#EEF3F8] px-4 py-3 font-semibold text-metin-5"
            >
              →
            </button>
          </div>

          {!aktifKarar.kaynak.trim() && (
            <p className="mt-3 text-xs text-[#9B1C1C]">
              Kaynaksız onay kabul edilmiyor — bu kural güvenlik kapısıyla aynı.
            </p>
          )}
        </article>
      )}
    </div>
    </div>
  );
};

export default DenetimView;
