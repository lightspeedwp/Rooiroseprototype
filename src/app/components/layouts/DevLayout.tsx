import React, { useState, useMemo, Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { ChevronRight, Wrench, Home } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { SEO } from '../common/SEO';
import { DevToolHeader } from '../dev/DevToolHeader';
import { DevFullScreenMenu } from '../dev/DevFullScreenMenu';
import { DevToolFooter } from '../dev/DevToolFooter';
import { BackToTop } from '../dev/BackToTop';

/**
 * Route-to-translation-key mapping for breadcrumb page titles.
 */
const PAGE_TITLE_KEYS: Record<string, string> = {
  '/ontwikkelaar/komponente': 'cb.title',
  '/ontwikkelaar/roetes': 'rm.title',
  '/ontwikkelaar/data': 'db.headerTitle',
  '/ontwikkelaar/wordpress': 'wp.headerTitle',
  '/ontwikkelaar/ontwerpstelsel': 'ds.title',
  '/ontwikkelaar/tokens': 'ds.title',
  '/ontwikkelaar/token-kartering': 'tm.title',
  '/ontwikkelaar/stylgids': 'ds.title',
  '/ontwikkelaar/afdeling-style': 'ss.title',
  '/ontwikkelaar/riglyne': 'gb.title',
  '/ontwikkelaar/inhoud': 'contentbrowser.title',
  '/ontwikkelaar/e-pos-voorskou': 'ep.title',
  '/ontwikkelaar/stelselkonfig': 'systemconfig.title',
  '/ontwikkelaar/beelde': 'iab.title',
  '/ontwikkelaar/patrone': 'pb.title',
  '/ontwikkelaar/lansering': 'launch.title',
  '/ontwikkelaar/blok-styl': 'bsb.title',
  '/ontwikkelaar/sjablone': 'tmb.title',
  '/ontwikkelaar/sjablone-onderdeel': 'tpb.title',
  '/ontwikkelaar/inc-map': 'ifb.title',
  '/ontwikkelaar/ikone': 'ib.title',
  '/ontwikkelaar/temaJson': 'themeJsonViewer.title',
  '/ontwikkelaar/voorinstellings': 'presetsBrowser.title',
  '/ontwikkelaar/ollie': 'ollieThemeReference.title',
  '/ontwikkelaar/prototipe': 'prototypeLanding.title',
  '/ontwikkelaar/verwysings': 'referenceLanding.title',
  '/ontwikkelaar/bedrywighede': 'operationsLanding.title',
  '/ontwikkelaar/e-editions-handel': 'eec.title',
  '/ontwikkelaar/form-builder-preview': 'formBuilderPreview.title',
};

/**
 * Section mapping — maps each tool base path to its parent section.
 * Used for 3-level breadcrumbs: Dev Hub > Section > Tool
 */
interface SectionInfo {
  path: string;
  titleAf: string;
  titleEn: string;
}

const SECTION_MAP: Record<string, SectionInfo> = {
  // Prototype tools
  '/ontwikkelaar/ontwerpstelsel': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/tokens': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/token-kartering': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/stylgids': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/komponente': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/roetes': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/data': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  '/ontwikkelaar/ikone': { path: '/ontwikkelaar/prototipe', titleAf: 'Prototipe', titleEn: 'Prototype' },
  // WordPress tools
  '/ontwikkelaar/wordpress': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/temaJson': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/voorinstellings': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/ollie': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/patrone': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/afdeling-style': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/blok-styl': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/sjablone': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/sjablone-onderdeel': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/inc-map': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  '/ontwikkelaar/e-editions-handel': { path: '/ontwikkelaar/wordpress', titleAf: 'WordPress', titleEn: 'WordPress' },
  // Reference tools
  '/ontwikkelaar/riglyne': { path: '/ontwikkelaar/verwysings', titleAf: 'Verwysings', titleEn: 'Reference' },
  '/ontwikkelaar/inhoud': { path: '/ontwikkelaar/verwysings', titleAf: 'Verwysings', titleEn: 'Reference' },
  '/ontwikkelaar/beelde': { path: '/ontwikkelaar/verwysings', titleAf: 'Verwysings', titleEn: 'Reference' },
  // Operations tools
  '/ontwikkelaar/lansering': { path: '/ontwikkelaar/bedrywighede', titleAf: 'Bedrywighede', titleEn: 'Operations' },
  '/ontwikkelaar/e-pos-voorskou': { path: '/ontwikkelaar/bedrywighede', titleAf: 'Bedrywighede', titleEn: 'Operations' },
  '/ontwikkelaar/stelselkonfig': { path: '/ontwikkelaar/bedrywighede', titleAf: 'Bedrywighede', titleEn: 'Operations' },
  '/ontwikkelaar/form-builder-preview': { path: '/ontwikkelaar/bedrywighede', titleAf: 'Bedrywighede', titleEn: 'Operations' },
};

/**
 * Resolve tool base path from a full pathname.
 * E.g. "/ontwikkelaar/ontwerpstelsel/kleure" → "/ontwikkelaar/ontwerpstelsel"
 */
function resolveToolBasePath(pathname: string): string {
  // Check for exact match first
  if (PAGE_TITLE_KEYS[pathname]) return pathname;

  // Try progressively shorter paths (for sub-tab URLs)
  const parts = pathname.split('/');
  while (parts.length > 2) {
    parts.pop();
    const candidate = parts.join('/');
    if (PAGE_TITLE_KEYS[candidate]) return candidate;
  }
  return pathname;
}

/**
 * DevLayout — Shared layout wrapper for all developer tool pages.
 *
 * Architecture:
 * - Sticky DevToolHeader (logo, burger menu, theme toggle, language switcher)
 * - DevFullScreenMenu (immersive overlay triggered by burger)
 * - Breadcrumbs / utility bar (breadcrumbs on sub-pages, "back to site" on all pages)
 * - Page container (max-w-[1400px], consistent padding)
 * - Outlet for page content
 */
export const DevLayout = () => {
  const { locale } = useDevLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDevHub = location.pathname === '/ontwikkelaar';
  const isAf = locale === 'af';

  // Resolve tool base path (strips sub-tab segments)
  const toolBasePath = useMemo(() => resolveToolBasePath(location.pathname), [location.pathname]);
  const pageTitleKey = PAGE_TITLE_KEYS[toolBasePath];
  const pageTitle = pageTitleKey ? getTranslation(pageTitleKey, locale) : '';

  // Section breadcrumb (3-level)
  const section = SECTION_MAP[toolBasePath];
  const isSectionLanding = ['/ontwikkelaar/prototipe', '/ontwikkelaar/verwysings', '/ontwikkelaar/bedrywighede'].includes(toolBasePath);
  // WordPress section: wordpress IS its own landing page, so don't show section crumb for it
  const isWpLanding = toolBasePath === '/ontwikkelaar/wordpress';
  const showSectionCrumb = section && !isSectionLanding && !isWpLanding;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F1923] text-gray-900 dark:text-white">
      <SEO
        title={pageTitle ? `${pageTitle} — Dev Tools` : 'Dev Tools — *rooi rose*'}
        description="*rooi rose* developer tools and migration dashboard"
        noindex
      />

      {/* Sticky header */}
      <DevToolHeader onMenuOpen={() => setMenuOpen(true)} />

      {/* Full-screen menu overlay */}
      <DevFullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Breadcrumbs / utility bar — always visible */}
      <div className="border-b border-gray-200 dark:border-white/[0.06] bg-white/80 dark:bg-[#0F1923]/80 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-2.5 flex items-center justify-between text-xs">
          {/* Left: breadcrumbs */}
          <div className="flex items-center gap-2 min-w-0">
            <Wrench size={12} className="text-brand-red shrink-0" />
            {!isDevHub && pageTitle ? (
              <>
                <Link
                  to="/ontwikkelaar"
                  className="text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50 transition-colors"
                >
                  Dev Hub
                </Link>
                {/* Section crumb (middle level) */}
                {showSectionCrumb && section && (
                  <>
                    <ChevronRight size={10} className="text-gray-300 dark:text-white/15 shrink-0" />
                    <Link
                      to={section.path}
                      className="text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50 transition-colors"
                    >
                      {isAf ? section.titleAf : section.titleEn}
                    </Link>
                  </>
                )}
                <ChevronRight size={10} className="text-gray-300 dark:text-white/15 shrink-0" />
                <span className="text-gray-700 dark:text-white/70 truncate">{pageTitle}</span>
              </>
            ) : (
              <span className="text-gray-700 dark:text-white/70">Dev Hub</span>
            )}
          </div>

          {/* Right: back to site */}
          <Link
            to="/"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/60 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors shrink-0"
          >
            <Home size={12} />
            <span className="hidden sm:inline">{getTranslation('common.backToSite', locale)}</span>
          </Link>
        </div>
      </div>

      {/* Page container */}
      <main className="max-w-[1400px] mx-auto px-6 sm:px-8 py-10 sm:py-16">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto" role="status" aria-label="Loading" />
              <p className="text-sm text-muted-foreground">Laai...</p>
            </div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      {/* Shared footer */}
      <DevToolFooter />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
};