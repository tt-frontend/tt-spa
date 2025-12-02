import { useEffect } from 'react';

export function useEnterToTab() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      e.preventDefault();

      // Все потенциально фокусируемые элементы
      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          'input:not([type="hidden"]), select, textarea, button, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter(
        (el) =>
          !el.hasAttribute('disabled') &&
          el.getAttribute('aria-hidden') !== 'true' &&
          el.offsetParent !== null,
      );

      // Реальный target (Edge возвращает внутренние элементы)
      const targetEl = ((e.target as HTMLElement).closest(
        'input, select, textarea, button, [tabindex]:not([tabindex="-1"])',
      ) || (e.target as HTMLElement)) as HTMLElement;

      // Сортируем по табиндексу как это делает браузер
      focusable.sort((a, b) => {
        const ta = a.tabIndex || 0;
        const tb = b.tabIndex || 0;

        if (ta === tb) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        return ta - tb;
      });

      const index = focusable.indexOf(targetEl);
      const next = focusable[index + 1];

      if (next) {
        requestAnimationFrame(() => next.focus());
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);
}
