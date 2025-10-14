/**
 * Генератор пары красивых цветов из строки.
 * Чистая функция: одинаковая строка -> одинаковые цвета.
 */
export function generateColorsFromString(
  str: string,
  opts: {
    saturation?: number; // 0–100, default 60
    lightness?: number; // 0–100, default 50
  } = {},
): [string, string] {
  const { saturation = 60, lightness = 50 } = opts;

  // --- 1) 32-bit хеш строки (djb2) ---
  function hashString(s: string): number {
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
      h = (h << 5) + h + s.charCodeAt(i);
      h &= 0xffffffff;
    }
    return h >>> 0;
  }

  // --- 2) PRNG (Mulberry32) ---
  function mulberry32(seed: number) {
    return function (): number {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // --- 3) HSL → HEX ---
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

  // --- 4) Генерация двух цветов ---
  const seed = hashString(str) || 1;
  const rnd = mulberry32(seed);
  const baseHue = seed % 360;

  // Второй цвет смещён на ~120–180°, чтобы получился контраст, но не яд.
  const hue1 = baseHue;
  const hue2 = (baseHue + 120 + rnd() * 60) % 360;

  const color1 = hslToHex(hue1, saturation, lightness);
  const color2 = hslToHex(hue2, saturation, lightness);

  return [color1, color2];
}
