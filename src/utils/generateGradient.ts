/**
 * Генератор пары красивых цветов из строки.
 * Чистая функция: одинаковая строка → одинаковые цвета.
 */
export function generateColorsFromString(
  str: string,
  opts: {
    colorCount?: number;
    saturation?: number;
    lightness?: number;
  } = {},
): [string, string] {
  const { colorCount = 3, saturation = 60, lightness = 50 } = opts;

  // 1) Простой 32-bit хеш строки (djb2-like)
  function hashString(s: string): number {
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
      h = (h << 5) + h + s.charCodeAt(i); // h * 33 + c
      h &= 0xffffffff; // удерживаем 32-бита
    }
    return h >>> 0;
  }

  // 2) Mulberry32 seeded PRNG (детерминированный)
  function mulberry32(seed: number): () => number {
    return function (): number {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // 3) HSL -> HEX
  function hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const color =
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  // --- Генерация ---
  const seed = hashString(str) || 1;
  const rnd = mulberry32(seed);
  const baseHue = Math.floor(seed % 360);
  const golden = 0.618033988749895;

  interface HSL {
    h: number;
    s: number;
    l: number;
  }

  const hues: HSL[] = [];

  for (let i = 0; i < colorCount; i++) {
    const hue = Math.round((baseHue + 360 * ((rnd() + i * golden) % 1)) % 360);
    const satDisp = Math.round(saturation + (rnd() - 0.5) * 20); // ±10
    const lightDisp = Math.round(lightness + (rnd() - 0.5) * 16); // ±8
    hues.push({
      h: hue,
      s: Math.max(20, Math.min(100, satDisp)),
      l: Math.max(8, Math.min(92, lightDisp)),
    });
  }

  const colors = hues.map((hsl) => hslToHex(hsl.h, hsl.s, hsl.l));

  // Возвращаем только первые два цвета
  return [colors[0], colors[1]];
}
