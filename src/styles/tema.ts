// OTOMATİK ÜRETİLİR — elle düzenleme.
// Kaynak: src/styles/tema.json · Üretici: engine/tema-uygula.mjs
//
// Tailwind sınıfı yazabildiğin yerde sınıfı kullan (bg-marka).
// Bu modül yalnız sınıf yazılamayan yerler içindir:
// SVG fill/stroke, recharts renk propları, inline style.

export const TEMA = {
  "marka": "#2BC4C4", // ana vurgu — düğme, aktif sekme, ilerleme
  "marka-acik": "#2DD4BF", // vurgu açık tonu — degrade ucu, hover
  "marka-koyu": "#25ADAD", // vurgu koyu tonu — basılı hâl
  "marka-derin": "#0D9488", // vurgu en koyu ton — kenarlık
  "zemin": "#0B1320", // sayfa zemini (en koyu)
  "zemin-2": "#101B2C", // bölüm zemini
  "zemin-3": "#152338", // kart zemini
  "zemin-4": "#233754", // kart kenarlığı / ayırıcı
  "metin": "#E6EDF5", // birincil metin
  "metin-2": "#9FB0C6", // ikincil metin
  "metin-3": "#6C7F99", // üçüncül metin / ipucu
  "metin-4": "#94A3B8", // soluk metin
  "metin-5": "#42597A", // en soluk metin / pasif
  "metin-acik": "#E2E8F0", // açık yüzey üzerinde metin
  "basari": "#37B36A", // doğru cevap, tamamlandı
  "uyari": "#F59E0B", // uyarı, seri (streak), enerji
  "uyari-acik": "#FBBF24", // uyarı açık tonu
  "bilgi": "#3B82F6", // bilgi, bağlantı
  "altin": "#C9A24A", // rozet, başarım
  "derin": "#1E4D57", // turkuaz-koyu yüzey
  "derin-2": "#102B33", // turkuaz-koyu yüzey 2
  "derin-3": "#0C242A", // turkuaz-koyu yüzey 3
  "derin-4": "#0B2026", // turkuaz-koyu yüzey 4
  "derin-5": "#042023", // turkuaz-koyu yüzey 5 (en koyu)
  "toprak": "#271C19", // taş/toprak dokusu — kitabe görünümü
  "toprak-2": "#381E02", // taş/toprak dokusu 2
} as const;

export type TemaRengi = keyof typeof TEMA;
