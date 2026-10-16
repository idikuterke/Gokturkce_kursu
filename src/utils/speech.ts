// Web Speech API Integration for Göktürk tamgas, words, and inscriptions

import { TAMGALAR } from '../data/tamgalarData';
import { kayitCal } from './sesKayitlari';

// Runic word mappings for accurate pronunciation of ancient terms
const RUNIC_WORD_MAP: Record<string, string> = {
  '𐱅𐰇𐰼𐰜': 'Türk',
  '𐱅𐰭𐰼𐰃': 'Tengri',
  '𐰴𐰍𐰣': 'Kağan',
  '𐰋𐰃𐰠𐰏𐰀': 'Bilge',
  '𐰉𐰆𐰑𐰣': 'Bodun',
  '𐰚𐰇𐰠 𐱅𐰃𐰏𐰤': 'Kül Tigin',
  '𐰚𐰇𐰠𐱅𐰃𐰏𐰤': 'Kül Tigin',
  '𐱃𐰆𐰪𐰆𐰸𐰆𐰸': 'Tonyukuk',
  '𐰋𐰭𐰇 𐱃𐰉': 'Bengü Taş',
  '𐰃𐰠': 'İl',
  '𐱅𐰇𐰼𐰜 𐰋𐰃𐰠𐰏𐰀 𐰴𐰍𐰣': 'Türk Bilge Kağan',
  '𐰋𐰃𐰼': 'Bir',
  '𐰇𐰏𐰇𐰕': 'Ögüz',
  '𐰆𐰺𐰴𐰆𐰣': 'Orhun',
  '𐰴𐰆𐱃': 'Kut',
  '𐰋𐰏': 'Beg',
  '𐰽𐰇': 'Sü',
  '𐰖𐰆𐰞': 'Yol',
  '𐱃𐰀': 'Ata',
  '𐰀𐰣𐰀': 'Ana',
  '𐰚𐰇𐰜': 'Kök',
  '𐰖𐰃𐰠': 'Yıl',
  '𐰉𐰞𐰴': 'Balık',
  '𐱅𐰇𐰼𐰜𐰱𐰀': 'Türkçe',
  '𐰋𐰃𐱅𐰃𐰏': 'Bitig',
  '𐰃𐰺𐰴 𐰋𐰃𐱅𐰃𐰏': 'Irk Bitig',
  '𐰋𐰃𐱅𐰃𐰓𐰃𐰢': 'Bitidim',
  '𐰀𐰞𐱃𐰆𐰣': 'Altun',
  '𐰋𐰇𐰼𐰇': 'Börü',
  '𐰖𐰍𐰃': 'Yağı',
  '𐱅𐰇𐰼𐰜 : 𐰉𐰆𐰑𐰣': 'Türk Bodun',
  '𐱅𐰇𐰼𐰜 : 𐰋𐰃𐰠𐰏𐰀 : 𐰴𐰍𐰣': 'Türk Bilge Kağan',
  '𐰚𐰇𐰠 : 𐱅𐰃𐰏𐰤': 'Kül Tigin'
};

// Map single runes to phonetic explanations
const RUNIC_TAMGA_SPOKEN: Record<string, string> = {
  '𐰀': 'A veya E',
  '𐰃': 'I veya İ',
  '𐰆': 'O veya U',
  '𐰇': 'Ö veya Ü',
  '𐰉': 'Kalın B, ab veya ba',
  '𐰋': 'İnce B, eb veya be',
  '𐰑': 'Kalın D, ad veya da',
  '𐰓': 'İnce D, ed veya de',
  '𐰴': 'Kalın K, ak veya ka',
  '𐰚': 'İnce K, ek veya ke',
  '𐰞': 'Kalın L, al veya la',
  '𐰠': 'İnce L, el veya le',
  '𐰢': 'M sesi, em veya me',
  '𐰣': 'Kalın N, an veya na',
  '𐰤': 'İnce N, en veya ne',
  '𐰭': 'Geniz N\'si, eng veya ang',
  '𐰯': 'P sesi, ep veya pe',
  '𐰺': 'Kalın R, ar veya ra',
  '𐰼': 'İnce R, er veya re',
  '𐰽': 'Kalın S, as veya sa',
  '𐰾': 'İnce S, es veya se',
  '𐱁': 'Ş sesi, aş veya eş',
  '𐱃': 'Kalın T, at veya ta',
  '𐱅': 'İnce T, et veya te',
  '𐰖': 'Kalın Y, ay veya ya',
  '𐰘': 'İnce Y, ey veya ye',
  '𐰕': 'Z sesi, ez veya ze',
  '𐰲': 'Ç sesi, aç veya eç',
  '𐰨': 'NÇ sesi, enç',
  '𐰪': 'NY sesi, eny',
  '𐰡': 'LT sesi, alt veya elt',
  '𐰦': 'NT sesi, ant veya ent',
  '𐰸': 'OK veya UK sesi',
  '𐰜': 'ÖK veya ÜK sesi',
  '𐰶': 'IK veya KI sesi',
  '𐰝': 'İK sesi',
  '𐰧': 'BAŞ tamgası',
  ':': 'Kelime ayırıcı iki nokta'
};

/**
 * Tamga → tek heceli kısa okunuş; TAMGALAR verisinden türetilir.
 *
 * RUNIC_TAMGA_SPOKEN açıklama metnidir ("Kalın B, ab veya ba") ve kataloğa
 * uygundur; ama her telaffuz düğmesinde onu okutmak tek harf için beş kelime
 * demek. Haritada olmayan çok tamgalı kelimelerde bu açıklamalar birleşince
 * dört tamgalık bir kelime on beş kelimelik cümleye dönüşüyordu.
 * Kısa biçim veriden türetildiği için katalogla kendiliğinden tutarlı kalır.
 */
const tamgaKisaOkunus = (() => {
  const harita: Record<string, string> = {};
  for (const t of TAMGALAR) {
    const ilk = (t.sound || '').split(',')[0].trim();
    if (ilk) harita[t.rune] = ilk;
  }
  return harita;
})();

/**
 * Checks whether Web Speech API is supported in current browser
 */
export function isSpeechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

/**
 * Convert a rune, runic word, or transcription into clear spoken Turkish text
 */
export function getSpokenTextForRuneOrWord(
  input: string,
  contextSound?: string,
  /** true: kataloğa uygun açıklamalı okunuş ("Kalın B, ab veya ba"). */
  ayrintili = false
): string {
  if (!input) return '';
  const trimmed = input.trim();

  // If explicit context sound is provided (e.g. "a / e", "b¹ (Kalın)"), prioritize it if clean
  if (contextSound && !hasRunes(contextSound)) {
    return cleanPhoneticForSpeech(contextSound);
  }

  // Check known runic words
  const normalized = trimmed.replace(/:/g, ' ').replace(/\s+/g, ' ').trim();
  if (RUNIC_WORD_MAP[normalized]) {
    return RUNIC_WORD_MAP[normalized];
  }

  // Tek tamga: varsayılan kısa okunuş, istendiğinde açıklamalı.
  if (!ayrintili && tamgaKisaOkunus[trimmed]) {
    return tamgaKisaOkunus[trimmed];
  }
  if (RUNIC_TAMGA_SPOKEN[trimmed]) {
    return RUNIC_TAMGA_SPOKEN[trimmed];
  }

  // Check in TAMGALAR catalog
  const foundTamga = TAMGALAR.find(t => t.rune === trimmed);
  if (foundTamga) {
    if (foundTamga.type) {
      return `${foundTamga.type} ${foundTamga.sound}`;
    }
    return foundTamga.sound;
  }

  // If input contains only latin characters, clean and speak directly
  if (!hasRunes(trimmed)) {
    return cleanPhoneticForSpeech(trimmed);
  }

  // Çok tamgalı ve haritada yok: tamgalar TEK TEK hecelenir, birleştirilmez.
  //
  // Birleştirme yanlış kelime üretiyor: 𐰘𐰢𐰀 asıl okunuşu "yime" iken
  // heceler yan yana konunca "yemaa" çıkıyordu. Göktürkçede ünlülerin bir
  // kısmı yazılmadığı için okunuş tamgalardan kurulamaz; doğru kaynak
  // transkripsiyondur ve çağıran onu `contextSound` ile verebilir.
  // Veremiyorsa uydurma bir kelime okutmaktansa tamgaları hecelemek doğru.
  const parts: string[] = [];
  for (const char of trimmed) {
    if (ayrintili && RUNIC_TAMGA_SPOKEN[char]) {
      parts.push(RUNIC_TAMGA_SPOKEN[char]);
    } else if (tamgaKisaOkunus[char]) {
      parts.push(tamgaKisaOkunus[char]);
    } else if (char !== ' ' && char !== ':') {
      parts.push(char);
    }
  }
  return parts.length > 0 ? parts.join(', ') : trimmed;
}

/**
 * Clean strings like "b¹ (Kalın B)", "b²/eb/be", "a/e" into natural speech
 */
function cleanPhoneticForSpeech(text: string): string {
  return text
    .replace(/[¹²³⁴]/g, '')
    .replace(/\//g, ' veya ')
    .replace(/[()]/g, '')
    .replace(/—.*$/, '')
    .trim();
}

/**
 * Check if a string contains Old Turkic Unicode runes (\u10C00-\u10C48)
 */
export function hasRunes(text: string): boolean {
  return /[\u{10C00}-\u{10C48}]/u.test(text);
}

/**
 * Speaks the text using Web Speech API with Turkish voice preference
 */
export function speakText(textToSpeak: string, onEnd?: () => void) {
  if (!isSpeechAvailable()) {
    console.warn('Speech synthesis not supported in this browser environment');
    if (onEnd) onEnd();
    return;
  }

  try {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'tr-TR';
    utterance.rate = 0.95; // Slightly slower for clear phonetic articulation
    utterance.pitch = 1.0;

    // Try finding a native Turkish voice if available
    const voices = window.speechSynthesis.getVoices();
    const trVoice = voices.find(v => v.lang.startsWith('tr') || v.lang === 'tr-TR');
    if (trVoice) {
      utterance.voice = trVoice;
    }

    if (onEnd) {
      utterance.onend = () => onEnd();
      utterance.onerror = () => onEnd();
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error('Speech synthesis error:', err);
    if (onEnd) onEnd();
  }
}

/**
 * High-level helper: pronounces any rune, word, or sentence
 */
export function speakTamgaOrWord(
  runeOrWord: string,
  contextSound?: string,
  onEnd?: () => void,
  ayrintili = false
) {
  // Önce insan kaydı aranır; yoksa konuşma sentezine düşülür.
  kayitCal(runeOrWord, onEnd).then((calindi) => {
    if (calindi) return;
    const speechText = getSpokenTextForRuneOrWord(runeOrWord, contextSound, ayrintili);
    if (speechText) {
      speakText(speechText, onEnd);
    } else if (onEnd) {
      onEnd();
    }
  });
}
