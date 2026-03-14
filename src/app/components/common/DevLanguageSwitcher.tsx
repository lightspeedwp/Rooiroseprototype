import React from 'react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { Languages } from 'lucide-react';

/**
 * A compact language toggle for dev tools pages.
 * Switches between Afrikaans (AF) and English (EN).
 */
export const DevLanguageSwitcher = () => {
  const { locale, toggleLocale } = useDevLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-bold tracking-wide transition-colors bg-gray-200/80 hover:bg-gray-300 text-gray-700 hover:text-gray-900 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80 dark:hover:text-white border border-gray-300 dark:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2"
      title={locale === 'af' ? 'Switch to English' : 'Skakel na Afrikaans'}
      aria-label={locale === 'af' ? 'Switch to English' : 'Skakel na Afrikaans'}
    >
      <Languages size={14} />
      <span className="uppercase">{locale === 'af' ? 'EN' : 'AF'}</span>
    </button>
  );
};