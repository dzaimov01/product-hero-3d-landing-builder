'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('theme') as ThemeMode | null;
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const nextTheme = stored ?? (prefersLight ? 'light' : 'dark');
      setTheme(nextTheme);
      document.documentElement.dataset.theme = nextTheme;
    } catch {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [mounted, theme]);

  if (!mounted) {
    return (
      <div
        className="h-8 w-20 rounded-full border border-[color:var(--border-strong)]"
        aria-hidden="true"
      />
    );
  }

  const nextLabel = theme === 'dark' ? 'Light mode' : 'Dark mode';

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full border border-[color:var(--border-strong)] px-3 py-1 text-xs text-[color:var(--text-primary)] transition hover:border-[color:var(--accent)]"
      aria-label="Toggle color theme"
    >
      {nextLabel}
    </button>
  );
}
