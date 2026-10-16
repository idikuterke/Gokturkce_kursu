/**
 * Fisher-Yates karıştırma. Diziyi kopyalar, kaynağı değiştirmez.
 *
 * `[...dizi].sort(() => Math.random() - 0.5)` yerine bunu kullanın:
 * o yöntem karşılaştırma fonksiyonu tutarsız olduğu için düzgün
 * dağılım üretmez ve öğeleri ilk sıralarına yakın bırakma eğilimindedir.
 */
export const shuffle = <T,>(items: readonly T[]): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

/**
 * Sırası kaynaktan farklı olması garanti edilen bir karıştırma.
 *
 * Eşleştirme alıştırmalarında gerekir: sütunlardan biri kaynakla aynı
 * sırada kalırsa doğru cevap hep tam karşıya denk gelir ve alıştırma
 * okumadan çözülebilir hale gelir. Tek öğeli dizilerde farklı bir sıra
 * mümkün olmadığından kopya aynen döner.
 */
export const shuffleDistinct = <T,>(items: readonly T[]): T[] => {
  if (items.length < 2) return [...items];

  const isSameOrder = (candidate: T[]) =>
    candidate.every((item, index) => item === items[index]);

  // Olasılıksal: her tur aynı sırayı üretme ihtimali hızla düşer.
  // Üst sınır, beklenmedik bir durumda sonsuz döngüyü engeller.
  for (let attempt = 0; attempt < 20; attempt++) {
    const candidate = shuffle(items);
    if (!isSameOrder(candidate)) return candidate;
  }

  // Son çare: en az bir öğenin yer değiştirmesini garanti et.
  const fallback = [...items];
  [fallback[0], fallback[fallback.length - 1]] = [fallback[fallback.length - 1], fallback[0]];
  return fallback;
};
