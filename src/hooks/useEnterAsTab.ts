import { useEffect } from 'react';

export function useEnterToTab() {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        const focusable = Array.from(
          document.querySelectorAll<HTMLElement>(
            'input, select, textarea, button, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter(
          (el) =>
            !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
        );

        const index = focusable.indexOf(e.target as HTMLElement);
        if (index > -1) {
          const next = focusable[index + 1];
          next?.focus();
        }
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);
}
