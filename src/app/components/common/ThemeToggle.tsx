import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  /** Compact mode shows only the icon button (for header) */
  variant?: 'icon' | 'full';
  className?: string;
}

export const ThemeToggle = ({ variant = 'icon', className = '' }: ThemeToggleProps) => {
  const { theme, setTheme, toggleTheme } = useTheme();

  if (variant === 'full') {
    return (
      <div className={`inline-flex items-center rounded-lg border border-gray-200 dark:border-border bg-gray-100 dark:bg-card p-1 ${className}`}>
        <button
          onClick={() => setTheme('light')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 ${
            theme === 'light'
              ? 'bg-white dark:bg-background text-brand-navy dark:text-foreground shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-foreground'
          }`}
          title="Lig modus"
          aria-label="Lig modus"
        >
          <Sun size={14} />
          <span className="hidden sm:inline">Lig</span>
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 ${
            theme === 'dark'
              ? 'bg-white dark:bg-background text-brand-navy dark:text-foreground shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-foreground'
          }`}
          title="Donker modus"
          aria-label="Donker modus"
        >
          <Moon size={14} />
          <span className="hidden sm:inline">Donker</span>
        </button>
      </div>
    );
  }

  // Icon-only variant (for header)
  return (
    <button
      onClick={toggleTheme}
      className={`flex p-2 items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      title={`Tema: ${theme === 'light' ? 'Lig' : 'Donker'}`}
      aria-label={`Wissel tema (tans: ${theme})`}
    >
      {theme === 'dark' ? (
        <Moon size={22} className="text-yellow-300" />
      ) : (
        <Sun size={22} />
      )}
    </button>
  );
};