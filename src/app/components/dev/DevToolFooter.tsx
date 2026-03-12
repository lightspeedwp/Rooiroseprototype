import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import React from 'react';
import { Link } from 'react-router';
import { Wrench } from 'lucide-react';

/**
 * DevToolFooter — Shared footer for all developer tool pages.
 *
 * Rendered by DevLayout below the page container.
 * Shows branding, quick links, and copyright.
 */
export const DevToolFooter: React.FC = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);

  return (
    <footer className="border-t border-gray-200 dark:border-white/[0.06] bg-white/50 dark:bg-[#0a1018]/50 mt-16">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center">
              <Wrench size={14} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-800 dark:text-white/70">
                <em>rooi rose</em> — Dev Tools
              </p>
              <p className="text-[10px] text-gray-400 dark:text-white/30">
                {isAf
                  ? 'Interne ontwikkelaar-hulpmiddels vir die WordPress-migrasie'
                  : 'Internal developer tools for the WordPress migration'}
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link
              to="/ontwikkelaar"
              className="text-gray-500 dark:text-white/40 hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              Dev Hub
            </Link>
            <Link
              to="/ontwikkelaar/ontwerpstelsel"
              className="text-gray-500 dark:text-white/40 hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              {t('footer.designSystem')}
            </Link>
            <Link
              to="/ontwikkelaar/wordpress"
              className="text-gray-500 dark:text-white/40 hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              WordPress
            </Link>
            <Link
              to="/ontwikkelaar/patrone"
              className="text-gray-500 dark:text-white/40 hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              {t('footer.patterns')}
            </Link>
            <Link
              to="/"
              className="text-gray-500 dark:text-white/40 hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              {t('footer.backToSite')}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/[0.04]">
          <p className="text-[10px] text-gray-400 dark:text-white/20">
            &copy; {new Date().getFullYear()} <em>rooi rose</em> / Novus Media.{' '}
            {isAf
              ? 'Alle regte voorbehou. Hierdie gereedskap is slegs vir interne gebruik.'
              : 'All rights reserved. These tools are for internal use only.'}
          </p>
        </div>
      </div>
    </footer>
  );
};