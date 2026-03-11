import React from 'react';
import { Link } from 'react-router';
import { Sun, Moon, Menu, Wrench } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevLanguageSwitcher } from '../common/DevLanguageSwitcher';
import { useTheme } from '../../context/ThemeContext';

/**
 * Props for the shared DevToolHeader component.
 */
export interface DevToolHeaderProps {
  /** Callback to open the full-screen navigation menu */
  onMenuOpen: () => void;
}

/**
 * DevToolHeader — Persistent header bar for all developer tool pages.
 *
 * Contains:
 * - Dev Portal logo (links to /ontwikkelaar)
 * - Burger menu trigger (opens full-screen nav)
 * - Theme toggle (light / dark)
 * - Language switcher (AF / EN)
 *
 * "Back to site" link has been moved to the breadcrumbs bar in DevLayout.
 * Rendered by DevLayout for ALL dev tool pages including DevHub.
 */
export const DevToolHeader: React.FC<DevToolHeaderProps> = ({
  onMenuOpen,
}) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const { theme, setTheme } = useTheme();

  const themeIcon =
    theme === 'light' ? (
      <Sun size={14} />
    ) : (
      <Moon size={14} />
    );
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const themeLabel =
    theme === 'light' ? 'Light' : 'Dark';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0B111D]/95 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-3">
          {/* Burger */}
          <button
            onClick={onMenuOpen}
            className="p-1.5 -ml-1.5 rounded-lg text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label={locale === 'af' ? 'Maak spyskaart oop' : 'Open menu'}
          >
            <Menu size={18} />
          </button>

          {/* Logo */}
          <Link
            to="/ontwikkelaar"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-7 h-7 rounded-lg bg-brand-red flex items-center justify-center transition-transform group-hover:scale-105">
              <Wrench size={14} className="text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white leading-none">
                Dev Tools
              </span>
              <span className="text-[9px] text-gray-400 dark:text-white/30 leading-none mt-0.5">
                Die Papier
              </span>
            </div>
          </Link>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(nextTheme)}
            className="p-1.5 rounded-lg text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label={`Switch to ${nextTheme} mode`}
            title={`${themeLabel} mode`}
          >
            {themeIcon}
          </button>

          {/* Language */}
          <DevLanguageSwitcher />
        </div>
      </div>
    </header>
  );
};