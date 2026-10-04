import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme = 'dark', onToggleTheme, className = "" }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      className={`group relative inline-flex h-8 w-14 items-center rounded-full border border-slate-200 bg-white/80 shadow-[0_6px_18px_-12px_rgba(15,23,42,0.3)] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 ${className}`}
      aria-label={isDark ? 'Switch to Day Mode' : 'Switch to Night Mode'}
      title={isDark ? 'Switch to Day Mode (Light Theme)' : 'Switch to Night Mode (Dark Theme)'}
    >
      <span
        className={`absolute inset-y-1 left-1 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 ${
          isDark ? 'translate-x-6 bg-slate-800 text-amber-300' : 'translate-x-0 bg-slate-100 text-amber-500'
        }`}
      >
        {isDark ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
