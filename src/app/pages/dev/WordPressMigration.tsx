// @version 2026-02-26-v2 cache-bust
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { useTabRoute, type TabSlugMap } from '../../hooks/useTabRoute';
import { Search, Copy, ChevronRight, CheckCircle2, ChevronDown, ChevronUp, ShoppingCart, Shield, CreditCard, Package, Zap, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { CodeBlock } from '../../components/dev/CodeBlock';

import { copyToClipboard } from '../../utils/clipboard';
import {
  COLOR_TOKENS,
  TYPOGRAPHY_TOKENS,
  SPACING_TOKENS,
  LAYOUT_TOKENS,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
  FONT_TOKENS,
} from '../../data/designTokens';
import {
  EXTENDED_THEME_FILES,
  EXTENDED_PLUGIN_FILES,
  CPT_DEFINITIONS,
  POST_EXTENSIONS,
  TAXONOMY_DEFINITIONS,
  GUIDELINE_FILES,
  GUIDELINE_CATEGORIES,
  BLOCK_STYLES,
  COLOR_BLOCK_STYLES,
  COLOR_UTILITY_CLASSES,
} from '../../data/wpMigrationData';
import { PATTERNS } from '../../data/patternBrowserData';
import { loadStatuses, getStatus, getProgressByPriority, getOverallProgress } from '../../data/patternStatusStore';

const TABS: { id: string; key?: string; label?: string }[] = [
  { id: 'overview', key: 'wp.tab.overview' },
  { id: 'contentModel', label: 'Content Model' },
  { id: 'tokens', key: 'wp.tab.tokens' },
  { id: 'typography', key: 'wp.tab.typography' },
  { id: 'themeFiles', key: 'wp.tab.themeFiles' },
  { id: 'pluginFiles', key: 'wp.tab.pluginFiles' },
  { id: 'blockMapping', key: 'wp.tab.blockMapping' },
  { id: 'blockStyles', label: 'Block Styles' },
  { id: 'riglyne', label: 'Riglyne' },
  { id: 'contentExport', label: 'Content Export' },
  { id: 'searchFilters', key: 'wp.tab.searchFilters' },
  { id: 'sponsorships', key: 'wp.tab.sponsorships' },
  { id: 'faqCpt', key: 'wp.tab.faqCpt' },
  { id: 'themeJson', key: 'wp.tab.themeJson' },
  { id: 'commerce', label: 'eCommerce' },
  { id: 'seo', label: 'SEO' },
  { id: 'forms', label: 'Forms' },
];

/** Tab ID → URL slug mapping for sub-tab routing */
const WP_TAB_SLUGS: TabSlugMap = {
  'overview': 'oorsig',
  'contentModel': 'inhoud-model',
  'tokens': 'tokens',
  'typography': 'tipografie',
  'themeFiles': 'tema-leers',
  'pluginFiles': 'inprop-leers',
  'blockMapping': 'blok-kartering',
  'blockStyles': 'blok-style',
  'riglyne': 'riglyne',
  'contentExport': 'inhoud-uitvoer',
  'searchFilters': 'soek-filters',
  'sponsorships': 'borgskappe',
  'faqCpt': 'faq-cpt',
  'themeJson': 'tema-json',
  'commerce': 'e-handel',
  'seo': 'seo',
  'forms': 'vorms',
};

// Theme and Plugin file inventories are now imported from wpMigrationData.ts
// as EXTENDED_THEME_FILES and EXTENDED_PLUGIN_FILES

// ChecklistItem, RoadmapPhase, ROADMAP, and renderStatusIcon moved to LaunchChecklist.tsx — DTE-124/DTE-126

// (ROADMAP data fully removed — ~290 lines — see LaunchChecklist.tsx for the canonical version)
const BLOCK_MAPPINGS = [
  { react: 'Header', strategy: 'pattern', wp: 'parts/header.html', attributes: ['logo', 'nav_menu'] },
  { react: 'Footer', strategy: 'pattern', wp: 'parts/footer.html', attributes: ['columns', 'social_links'] },
  { react: 'HeroSlider', strategy: 'custom', wp: 'dp/hero-slider', attributes: ['slides', 'autoplay', 'interval'] },
  { react: 'NewsCard', strategy: 'pattern', wp: 'die-papier/news-card', attributes: ['variant', 'show_image'] },
  { react: 'PageFAQSection', strategy: 'core', wp: 'core/details + dp_faq query', attributes: ['category', 'limit'] },
  { react: 'NewsletterCTA', strategy: 'custom', wp: 'dp/newsletter-cta', attributes: ['title', 'description'] },
  { react: 'WeatherWidget', strategy: 'custom', wp: 'dp/weather-widget', attributes: ['location', 'days'] },
  { react: 'TrafficWidget', strategy: 'custom', wp: 'dp/traffic-widget', attributes: ['routes'] },
  { react: 'EEditionAccess', strategy: 'custom', wp: 'dp/eedition-access', attributes: ['product_id', 'type'] },
  { react: 'AdMrec', strategy: 'asset', wp: 'HTML block / ad plugin', attributes: ['section'] },
  { react: 'SocialShare', strategy: 'pattern', wp: 'die-papier/social-share', attributes: ['platforms'] },
  { react: 'PricingTable', strategy: 'pattern', wp: 'die-papier/pricing-table', attributes: ['plans'] },
  { react: 'CategoryBadge', strategy: 'core', wp: 'core/post-terms', attributes: ['taxonomy'] },
  { react: 'Breadcrumbs', strategy: 'core', wp: 'core/query-title + Yoast', attributes: [] },
];

// Expandable card component to avoid useState inside .map()
const ExpandableStyleCard = ({ children, labelContent }: {
  children: React.ReactNode;
  labelContent: React.ReactNode;
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
      >
        {labelContent}
        <div className="flex items-center gap-1">
          {expanded ? <ChevronUp size={16} className="text-gray-400 dark:text-white/40" /> : <ChevronDown size={16} className="text-gray-400 dark:text-white/40" />}
        </div>
      </button>
      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-gray-200 dark:border-white/10">
          {children}
        </div>
      )}
    </div>
  );
};

export const WordPressMigration = () => {
  // === ALL HOOKS MUST BE CALLED FIRST — no non-hook code between them ===
  const { locale } = useDevLanguage();
  const { activeTab, setActiveTab } = useTabRoute('/ontwikkelaar/wordpress', WP_TAB_SLUGS, 'overview');
  const [fileSearch, setFileSearch] = useState('');
  const [filePriority, setFilePriority] = useState('all');
  const [guidelineCategory, setGuidelineCategory] = useState('all');
  const [expandedCpt, setExpandedCpt] = useState<string | null>(null);
  const [showThemeJsonRaw, setShowThemeJsonRaw] = useState(false);

  const filteredThemeFiles = useMemo(() => {
    return EXTENDED_THEME_FILES.filter((f) => {
      const matchSearch = !fileSearch || f.file.toLowerCase().includes(fileSearch.toLowerCase()) || f.description.toLowerCase().includes(fileSearch.toLowerCase());
      const matchPriority = filePriority === 'all' || f.priority === filePriority;
      return matchSearch && matchPriority;
    });
  }, [fileSearch, filePriority]);

  const filteredPluginFiles = useMemo(() => {
    return EXTENDED_PLUGIN_FILES.filter((f) => {
      const matchSearch = !fileSearch || f.file.toLowerCase().includes(fileSearch.toLowerCase()) || f.description.toLowerCase().includes(fileSearch.toLowerCase());
      const matchPriority = filePriority === 'all' || f.priority === filePriority;
      return matchSearch && matchPriority;
    });
  }, [fileSearch, filePriority]);

  const filteredGuidelines = useMemo(() => {
    return GUIDELINE_FILES.filter((f) => {
      const matchCategory = guidelineCategory === 'all' || f.category === guidelineCategory;
      const matchSearch = !fileSearch || f.label.toLowerCase().includes(fileSearch.toLowerCase()) || f.path.toLowerCase().includes(fileSearch.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [guidelineCategory, fileSearch]);
  // === END HOOKS — all hooks above, derived values and helpers below ===

  const t = (key: string) => getTranslation(key, locale);

  const renderPriorityBadge = (priority: string) => {
    const colors: Record<string, string> = {
      critical: 'bg-red-500/20 text-red-300',
      important: 'bg-amber-500/20 text-amber-300',
      optional: 'bg-green-500/20 text-green-300',
    };
    return (
      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${colors[priority] || 'bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/40'}`}>
        {t(`wp.priority.${priority}`)}
      </span>
    );
  };

  const renderStrategyBadge = (strategy: string) => {
    const colors: Record<string, string> = {
      core: 'bg-blue-500/20 text-blue-300',
      pattern: 'bg-purple-500/20 text-purple-300',
      custom: 'bg-orange-500/20 text-orange-300',
      asset: 'bg-gray-500/20 text-gray-300',
    };
    return (
      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase ${colors[strategy] || 'bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/40'}`}>
        {t(`wp.blocks.${strategy}`)}
      </span>
    );
  };

  const isAf = locale === 'af';
  const heroMeta = HERO_META.wordPressMigration;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero */}
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('stats.themeFiles'), value: EXTENDED_THEME_FILES.length },
          { label: t('stats.pluginFiles'), value: EXTENDED_PLUGIN_FILES.length },
          { label: t('stats.patterns'), value: PATTERNS.length },
        ]}
      />

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-brand-red text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
              }`}
            >
              {tab.key ? t(tab.key) : tab.label || tab.id}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ─── Overview ─── */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-2">{t('wp.overview.title')}</h2>
              <p className="text-gray-500 dark:text-white/50 leading-relaxed">{t('wp.overview.subtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">{t('wp.overview.blockTheme')}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 mb-4">{t('wp.overview.blockThemeDesc')}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{EXTENDED_THEME_FILES.length} {t('wp.overview.files')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-orange-500 dark:text-orange-400 mb-2">{t('wp.overview.blockPlugin')}</h3>
                <p className="text-sm text-gray-500 dark:text-white/50 mb-4">{t('wp.overview.blockPluginDesc')}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{EXTENDED_PLUGIN_FILES.length} {t('wp.overview.files')}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-4">
                {t('wp.overview.keyPrinciples')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {['tokenEquivalence', 'blockFirst', 'afrikaansThrough', 'scfFields', 'restApi', 'progressiveMigration'].map((key) => (
                  <div key={key} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{t(`wp.overview.${key}`)}</h4>
                    <p className="text-xs text-gray-400 dark:text-white/40">{t(`wp.overview.${key}Desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access to Standalone Tools */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-4">
                {locale === 'af' ? 'Selfstandige Gereedskap' : 'Standalone Tools'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  to="/ontwikkelaar/afdeling-style"
                  className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 hover:border-purple-500/30 rounded-xl p-6 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-lg">🎨</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 dark:text-white/30 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {locale === 'af' ? 'Afdeling Style' : 'Section Styles'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-white/50 mb-3">
                    {locale === 'af' ? 'Volledige verwysing vir al 18 afdeling style met CSS, JSON, en WP blok kode' : 'Complete reference for all 18 section styles with CSS, JSON, and WP block code'}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">18 {locale === 'af' ? 'style' : 'styles'}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-300">36 {locale === 'af' ? 'lêers' : 'files'}</span>
                  </div>
                </Link>

                <Link
                  to="/ontwikkelaar/riglyne"
                  className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 border border-green-500/20 hover:border-green-500/30 rounded-xl p-6 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-white text-lg">📚</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 dark:text-white/30 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-300 transition-colors">
                    {locale === 'af' ? 'Riglyne Blaaier' : 'Guidelines Browser'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-white/50 mb-3">
                    {locale === 'af' ? 'Blaaier deur alle .md riglynlêers met voubare boom en markdown weergawe' : 'Browse all .md guideline files with collapsible tree and markdown rendering'}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">50+ {locale === 'af' ? 'riglyne' : 'guidelines'}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300">{locale === 'af' ? 'Soek' : 'Search'}</span>
                  </div>
                </Link>

                <Link
                  to="/ontwikkelaar/token-kartering"
                  className="group bg-gradient-to-br from-teal-500/10 to-cyan-500/10 hover:from-teal-500/20 hover:to-cyan-500/20 border border-teal-500/20 hover:border-teal-500/30 rounded-xl p-6 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white text-lg">🔗</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 dark:text-white/30 group-hover:text-teal-500 dark:group-hover:text-teal-300 transition-colors" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                    {locale === 'af' ? 'Token Kartering' : 'Token Mapping'}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-white/50 mb-3">
                    {locale === 'af' ? 'CSS token → WP theme.json karteringstabel met aflaai funksionaliteit' : 'CSS token → WP theme.json mapping table with download functionality'}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-300">145+ {locale === 'af' ? 'tokens' : 'tokens'}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">JSON</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ─── Typography ─── */}
        {activeTab === 'typography' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t('wp.typo.title')}</h2>
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                    <th className="px-4 py-3">Token</th>
                    <th className="px-4 py-3">Size</th>
                    <th className="px-4 py-3">LH</th>
                    <th className="px-4 py-3">Weight</th>
                    <th className="px-4 py-3">Font</th>
                    <th className="px-4 py-3">{t('wp.typo.wpMapping')}</th>
                    <th className="px-4 py-3">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {TYPOGRAPHY_TOKENS.map((token) => (
                    <tr key={token.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{token.name}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{token.size}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{token.lineHeight}</td>
                      <td className="px-4 py-3 text-gray-500 dark:text-white/60">{token.weight}</td>
                      <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{token.family}</td>
                      <td className="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-300">
                        {token.cssVars?.fontSize ? `var(${token.cssVars.fontSize})` : '—'}
                      </td>
                      <td className="px-4 py-3">
                        {token.fluid ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300 uppercase">
                            {t('wp.typo.fluidBadge')}
                          </span>
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/30 uppercase">
                            {t('wp.typo.fixed')}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        )}

        {/* ─── Token Mapping ─── */}
        {activeTab === 'tokens' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="flex items-center gap-6 text-xs text-gray-400 dark:text-white/40">
              <span>{locale === 'af' ? 'Kleure' : 'Colors'}: <strong className="text-gray-900 dark:text-white">{COLOR_TOKENS.length}</strong></span>
              <span>{locale === 'af' ? 'Tipografie' : 'Typography'}: <strong className="text-gray-900 dark:text-white">{TYPOGRAPHY_TOKENS.length}</strong></span>
              <span>{locale === 'af' ? 'Spasiëring' : 'Spacing'}: <strong className="text-gray-900 dark:text-white">{SPACING_TOKENS.length}</strong></span>
              <span>{locale === 'af' ? 'Radius' : 'Radius'}: <strong className="text-gray-900 dark:text-white">{RADIUS_TOKENS.length}</strong></span>
              <span>{locale === 'af' ? 'Skaduwees' : 'Shadows'}: <strong className="text-gray-900 dark:text-white">{SHADOW_TOKENS.length}</strong></span>
              <span>{locale === 'af' ? 'Uitleg' : 'Layout'}: <strong className="text-gray-900 dark:text-white">{LAYOUT_TOKENS.length}</strong></span>
            </div>

            {/* Colors — ALL tokens, not sliced */}
            <div>
              <h2 className="text-xl font-bold mb-2">{t('wp.tokens.colorTitle')}</h2>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-4">{t('wp.tokens.colorSubtitle')}</p>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                        <th className="px-4 py-3">{t('wp.tokens.color')}</th>
                        <th className="px-4 py-3">{locale === 'af' ? 'CSS Veranderlike' : 'CSS Variable'}</th>
                        <th className="px-4 py-3">{t('wp.tokens.light')}</th>
                        <th className="px-4 py-3">{t('wp.tokens.dark')}</th>
                        <th className="px-4 py-3">{locale === 'af' ? 'WP Veranderlike' : 'WP Variable'}</th>
                        <th className="px-4 py-3">Tailwind</th>
                        <th className="px-4 py-3">{t('wp.tokens.usage')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COLOR_TOKENS.map((token) => (
                        <tr key={token.cssVar} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                          <td className="px-4 py-3 flex items-center gap-2">
                            <div className="w-4 h-4 rounded shrink-0" style={{ backgroundColor: token.light }} />
                            <span className="text-gray-600 dark:text-white/70 text-xs">{token.label}</span>
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-brand-red">--{token.cssVar}</td>
                          <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-white/40">{token.light}</td>
                          <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-white/40">{token.dark}</td>
                          <td className="px-4 py-3 font-mono text-[10px] text-indigo-600 dark:text-indigo-300">--wp--preset--color--{token.cssVar.replace('custom-', '')}</td>
                          <td className="px-4 py-3 font-mono text-[10px] text-gray-300 dark:text-white/25 max-w-[150px] truncate">{token.tailwind}</td>
                          <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/30 max-w-[180px] truncate">{token.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <h2 className="text-xl font-bold mb-2">{t('wp.tokens.spacingTitle')}</h2>
              <p className="text-sm text-gray-500 dark:text-white/50 mb-4">{t('wp.tokens.spacingSubtitle')}</p>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Token</th>
                      <th className="px-4 py-3">{t('wp.tokens.value')}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'CSS Veranderlike' : 'CSS Variable'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'WP Veranderlike' : 'WP Variable'}</th>
                      <th className="px-4 py-3">{t('wp.tokens.usage')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SPACING_TOKENS.map((token) => (
                      <tr key={token.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{token.name}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{token.value}</td>
                        <td className="px-4 py-3 font-mono text-xs text-brand-red">--{token.cssVar}</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-indigo-600 dark:text-indigo-300">--wp--preset--spacing--{token.name.replace('space.', '')}</td>
                        <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{token.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </div>

            {/* Border Radius */}
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Grensradius' : 'Border Radius'}</h2>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Token</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Voorskou' : 'Preview'}</th>
                      <th className="px-4 py-3">{t('wp.tokens.value')}</th>
                      <th className="px-4 py-3">px</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'WP Veranderlike' : 'WP Variable'}</th>
                      <th className="px-4 py-3">Tailwind</th>
                      <th className="px-4 py-3">{t('wp.tokens.usage')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RADIUS_TOKENS.map((token) => (
                      <tr key={token.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{token.name}</td>
                        <td className="px-4 py-3">
                          <div className="w-8 h-8 border-2 border-indigo-400" style={{ borderRadius: `${token.px}px` }} />
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{token.value}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-400 dark:text-white/40">{token.px}px</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-indigo-600 dark:text-indigo-300">--wp--custom--border-radius--{token.name.replace('radius.', '')}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-300 dark:text-white/25">{token.tailwind}</td>
                        <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{token.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shadows */}
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Skaduwees' : 'Shadows'}</h2>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Token</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Voorskou' : 'Preview'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Lig Waarde' : 'Light Value'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Donker Waarde' : 'Dark Value'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'WP Veranderlike' : 'WP Variable'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHADOW_TOKENS.map((token) => (
                      <tr key={token.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{token.label}</td>
                        <td className="px-4 py-3">
                          <div className="w-12 h-8 bg-gray-200 dark:bg-white/10 rounded" style={{ boxShadow: token.lightValue }} />
                        </td>
                        <td className="px-4 py-3 font-mono text-[10px] text-gray-400 dark:text-white/40 max-w-[200px] truncate">{token.lightValue}</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-gray-400 dark:text-white/40 max-w-[200px] truncate">{token.darkValue}</td>
                        <td className="px-4 py-3 font-mono text-[10px] text-indigo-600 dark:text-indigo-300">--wp--preset--shadow--{token.name.replace('elevation.', '')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Layout */}
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Uitleg' : 'Layout'}</h2>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Token</th>
                      <th className="px-4 py-3">{t('wp.tokens.value')}</th>
                      <th className="px-4 py-3">Tailwind</th>
                      <th className="px-4 py-3">{t('wp.tokens.usage')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LAYOUT_TOKENS.map((token) => (
                      <tr key={token.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{token.label}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{token.value}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-300 dark:text-white/25">{token.classes}</td>
                        <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{token.usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Font Stacks */}
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Lettertipes' : 'Font Stacks'}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FONT_TOKENS.map((font) => (
                  <div key={font.name} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{font.family}</h3>
                    <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1.5">
                      <li><span className="text-gray-400 dark:text-white/30">CSS:</span> <code className="text-brand-red">{font.cssVar}</code></li>
                      <li><span className="text-gray-400 dark:text-white/30">Fallback:</span> <code className="text-gray-400 dark:text-white/40">{font.fallback}</code></li>
                      <li><span className="text-gray-400 dark:text-white/30">Weights:</span> {font.weights.join(', ')}</li>
                      <li><span className="text-gray-400 dark:text-white/30">WP Slug:</span> <code className="text-indigo-600 dark:text-indigo-300">{font.name === 'font.inter' ? 'brand-sans' : 'brand-serif'}</code></li>
                      <li><span className="text-gray-400 dark:text-white/30">WP Var:</span> <code className="text-indigo-600 dark:text-indigo-300">--wp--preset--font-family--{font.name === 'font.inter' ? 'brand-sans' : 'brand-serif'}</code></li>
                      <li><span className="text-gray-400 dark:text-white/30">{locale === 'af' ? 'Gebruik' : 'Usage'}:</span> {font.usage}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Theme Files ─── */}
        {activeTab === 'themeFiles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{t('wp.files.themeTitle')}</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
                  <input
                    type="text"
                    placeholder={t('wp.files.searchPlaceholder')}
                    value={fileSearch}
                    onChange={(e) => setFileSearch(e.target.value)}
                    className="pl-9 pr-3 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none w-48"
                  />
                </div>
                <select
                  value={filePriority}
                  onChange={(e) => setFilePriority(e.target.value)}
                  className="px-3 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-900 dark:text-white focus:outline-none"
                >
                  <option value="all">{t('wp.files.allPriorities')}</option>
                  <option value="critical">{t('wp.priority.critical')}</option>
                  <option value="important">{t('wp.priority.important')}</option>
                  <option value="optional">{t('wp.priority.optional')}</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              {filteredThemeFiles.map((file) => (
                <div key={file.file} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-gray-900 dark:text-white">{file.file}</span>
                    <span className="text-xs text-gray-400 dark:text-white/30">{file.description}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {file.react !== '—' && (
                      <span className="text-xs text-gray-300 dark:text-white/20">{t('wp.files.reactEquivalent')} {file.react}</span>
                    )}
                    {renderPriorityBadge(file.priority)}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-white/30">
              {filteredThemeFiles.length} {t('wp.files.showing')} {EXTENDED_THEME_FILES.length} {t('wp.files.filesShown')}
            </p>
          </div>
        )}

        {/* ─── Plugin Files ─── */}
        {activeTab === 'pluginFiles' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t('wp.files.pluginTitle')}</h2>
            <div className="space-y-2">
              {filteredPluginFiles.map((file) => (
                <div key={file.file} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-gray-900 dark:text-white">{file.file}</span>
                    <span className="text-xs text-gray-400 dark:text-white/30">{file.description}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {file.react !== '—' && (
                      <span className="text-xs text-gray-300 dark:text-white/20">{t('wp.files.reactEquivalent')} {file.react}</span>
                    )}
                    {renderPriorityBadge(file.priority)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Sponsorships ─── */}
        {activeTab === 'sponsorships' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t('wp.spon.title')}</h2>
            <p className="text-gray-500 dark:text-white/50">{t('wp.spon.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{t('wp.spon.cpt')}</h3>
                <code className="text-xs text-brand-red">dp_sponsor</code>
                <p className="text-xs text-gray-400 dark:text-white/40 mt-2">{t('wp.spon.desc')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{t('wp.spon.fields')}</h3>
                <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1">
                  <li><code className="text-indigo-600 dark:text-indigo-300">_dp_sponsor_logo</code> — Logo URL</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">_dp_sponsor_url</code> — Website</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">_dp_sponsor_tier</code> — Tier</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">_dp_sponsor_description</code> — Bio</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{t('wp.spon.logic')}</h3>
                <p className="text-xs text-gray-400 dark:text-white/40">Sponsored articles linked via <code className="text-indigo-600 dark:text-indigo-300">_dp_sponsor</code> relationship field on posts. Banner placement determined by tier taxonomy.</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── Search Filters ─── */}
        {activeTab === 'searchFilters' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t('wp.search.title')}</h2>
            <p className="text-gray-500 dark:text-white/50">{t('wp.search.subtitle')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{t('wp.search.blocks')}</h3>
                <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1.5">
                  <li><code className="text-brand-red">dp/search-filters</code> — Faceted filter sidebar</li>
                  <li><code className="text-brand-red">dp/filter-bar</code> — Horizontal filter bar</li>
                  <li><code className="text-brand-red">core/search</code> — WordPress core search</li>
                  <li><code className="text-brand-red">core/query-loop</code> — Archive query with filters</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{t('wp.search.taxonomies')}</h3>
                <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1.5">
                  <li><code className="text-indigo-600 dark:text-indigo-300">category</code> — Nuus, Sport, Sake, etc.</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">post_tag</code> — Content tags</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">dp_event_category</code> — Event types</li>
                  <li><code className="text-indigo-600 dark:text-indigo-300">dp_edition_type</code> — Weekliks, Daagliks</li>
                </ul>
                <p className="text-xs text-gray-400 dark:text-white/40 mt-2">{t('wp.search.desc')}</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── FAQ CPT ─── */}
        {activeTab === 'faqCpt' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{t('wp.faq.title')}</h2>
            <p className="text-gray-500 dark:text-white/50">{t('wp.faq.subtitle')}</p>
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{t('wp.faq.architecture')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">{t('wp.faq.reactCurrent')}</p>
                  <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1.5 font-mono">
                    <li>pageFaqs.ts → static FAQ arrays per page</li>
                    <li>PageFAQSection.tsx → Accordion renderer</li>
                    <li>Each page imports its own FAQ array</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">{t('wp.faq.wpNew')}</p>
                  <ul className="text-xs text-gray-500 dark:text-white/50 space-y-1.5 font-mono">
                    <li>dp_faq CPT → each Q&A is a post</li>
                    <li>dp_faq_category taxonomy → page assignment</li>
                    <li>WP Query Loop block → dynamic rendering</li>
                    <li>~80 Q&A pairs across ~30 categories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Content Model ─── */}
        {activeTab === 'contentModel' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'WordPress Inhoudmodel' : 'WordPress Content Model'}</h2>
              <p className="text-gray-500 dark:text-white/50">{locale === 'af' ? 'Volledige definisies vir pasgemaakte postipes, velde, en taksonomieë.' : 'Complete definitions for custom post types, fields, and taxonomies.'}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{CPT_DEFINITIONS.length}</p>
                <p className="text-xs text-gray-400 dark:text-white/40">{locale === 'af' ? 'Pasgemaakte Postipes' : 'Custom Post Types'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{CPT_DEFINITIONS.reduce((sum, c) => sum + c.fields.length, 0) + POST_EXTENSIONS.length}</p>
                <p className="text-xs text-gray-400 dark:text-white/40">{locale === 'af' ? 'Meta Velde' : 'Meta Fields'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{TAXONOMY_DEFINITIONS.length}</p>
                <p className="text-xs text-gray-400 dark:text-white/40">{locale === 'af' ? 'Taksonomieë' : 'Taxonomies'}</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{TAXONOMY_DEFINITIONS.reduce((sum, t) => sum + t.terms.length, 0)}</p>
                <p className="text-xs text-gray-400 dark:text-white/40">{locale === 'af' ? 'Terme' : 'Terms'}</p>
              </div>
            </div>

            {/* CPT Cards */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-4">{locale === 'af' ? 'Pasgemaakte Postipes' : 'Custom Post Types'}</h3>
              <div className="space-y-3">
                {CPT_DEFINITIONS.map((cpt) => {
                  const isOpen = expandedCpt === cpt.slug;
                  return (
                    <div key={cpt.slug} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedCpt(isOpen ? null : cpt.slug)}
                        className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-left"
                      >
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                          <span className="text-orange-500 dark:text-orange-300 text-sm">CPT</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <code className="text-sm font-bold text-gray-900 dark:text-white">{cpt.slug}</code>
                            <span className="text-xs text-gray-400 dark:text-white/40">—</span>
                            <span className="text-xs text-gray-500 dark:text-white/60">{locale === 'af' ? `${cpt.singular} / ${cpt.plural}` : `${cpt.singularEn} / ${cpt.pluralEn}`}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">{cpt.fields.length} {locale === 'af' ? 'velde' : 'fields'}</span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">{cpt.taxonomies.length} {locale === 'af' ? 'taks' : 'tax'}</span>
                          </div>
                          <p className="text-xs text-gray-400 dark:text-white/40 mt-0.5">{locale === 'af' ? cpt.description : cpt.descriptionEn}</p>
                        </div>
                        <div className="shrink-0">
                          {isOpen ? <ChevronUp size={16} className="text-gray-400 dark:text-white/30" /> : <ChevronDown size={16} className="text-gray-400 dark:text-white/30" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="border-t border-gray-200 dark:border-white/10 px-5 py-4 space-y-4">
                          {/* Supports & Taxonomies */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">Supports</p>
                              <div className="flex flex-wrap gap-1.5">
                                {cpt.supports.map((s) => (
                                  <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/15 text-green-300">{s}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">{locale === 'af' ? 'Taksonomieë' : 'Taxonomies'}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {cpt.taxonomies.map((t) => (
                                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 font-mono">{t}</span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">React Source</p>
                              <code className="text-xs text-gray-400 dark:text-white/40">{cpt.reactSource}</code>
                            </div>
                          </div>

                          {/* Taxonomy Terms Inline */}
                          {cpt.taxonomies.length > 0 && (
                            <div className="space-y-3">
                              <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30">{locale === 'af' ? 'Taksonomie Terme' : 'Taxonomy Terms'}</p>
                              {cpt.taxonomies.map((taxSlug) => {
                                const taxDef = TAXONOMY_DEFINITIONS.find((td) => td.slug === taxSlug);
                                if (!taxDef) return null;
                                return (
                                  <div key={taxSlug} className="bg-gray-100 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 rounded-lg p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                      <code className="text-[11px] font-mono text-purple-600 dark:text-purple-300">{taxSlug}</code>
                                      <span className="text-[10px] text-gray-400 dark:text-white/30">—</span>
                                      <span className="text-[10px] text-gray-400 dark:text-white/40">{locale === 'af' ? taxDef.label : taxDef.labelEn}</span>
                                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300/60">{taxDef.terms.length} {locale === 'af' ? 'terme' : 'terms'}</span>
                                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/30">{taxDef.hierarchical ? 'hiërargies' : 'plat'}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                      {taxDef.terms.map((term) => (
                                        <span key={term.slug} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default">
                                          {term.name}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {/* Fields Table */}
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-2">{locale === 'af' ? 'ACF / Meta Velde' : 'ACF / Meta Fields'}</p>
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200 dark:border-white/10 text-left text-[10px] text-gray-300 dark:text-white/20 uppercase tracking-widest">
                                  <th className="px-3 py-2">{locale === 'af' ? 'Sleutel' : 'Key'}</th>
                                  <th className="px-3 py-2">{locale === 'af' ? 'Tipe' : 'Type'}</th>
                                  <th className="px-3 py-2">{locale === 'af' ? 'Beskrywing' : 'Description'}</th>
                                  <th className="px-3 py-2">Req</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cpt.fields.map((field) => (
                                  <tr key={field.key} className="border-b border-gray-100 dark:border-white/5">
                                    <td className="px-3 py-2 font-mono text-xs text-brand-red">{field.key}</td>
                                    <td className="px-3 py-2 text-xs text-indigo-600 dark:text-indigo-300">{field.type}</td>
                                    <td className="px-3 py-2 text-xs text-gray-400 dark:text-white/40">{field.description}</td>
                                    <td className="px-3 py-2 text-xs">{field.required ? <span className="text-amber-500 dark:text-amber-300">*</span> : <span className="text-gray-200 dark:text-white/15">—</span>}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Standard Post Extensions */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-4">{locale === 'af' ? 'Standaard Pos Uitbreidings' : 'Standard Post Extensions'}</h3>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">{locale === 'af' ? 'Sleutel' : 'Key'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Tipe' : 'Type'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Beskrywing' : 'Description'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POST_EXTENSIONS.map((field) => (
                      <tr key={field.key} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-mono text-xs text-brand-red">{field.key}</td>
                        <td className="px-4 py-3 text-xs text-indigo-600 dark:text-indigo-300">{field.type}</td>
                        <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{field.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Taxonomy Definitions */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-4">{locale === 'af' ? 'Taksonomieë & Terme' : 'Taxonomies & Terms'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {TAXONOMY_DEFINITIONS.map((tax) => (
                  <div key={tax.slug} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <code className="text-sm font-bold text-gray-900 dark:text-white">{tax.slug}</code>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                        {tax.hierarchical ? 'hierarchical' : 'flat'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-white/50 mb-1">{locale === 'af' ? tax.label : tax.labelEn}</p>
                    <p className="text-[10px] text-gray-300 dark:text-white/25 mb-3">{locale === 'af' ? 'Pos-tipes' : 'Post types'}: {tax.postTypes.join(', ')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {tax.terms.map((term) => (
                        <span key={term.slug} className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50">
                          {term.name}{term.parent ? ` (→ ${term.parent})` : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── Block Mapping ─── */}
        {activeTab === 'blockMapping' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">{locale === 'af' ? 'Blok-kartering' : 'Block Mapping'}</h2>
            <p className="text-gray-500 dark:text-white/50">{locale === 'af' ? 'React-komponent na WordPress Blok/Patroon kartering — strategie en eienskappe.' : 'React component to WordPress Block/Pattern mapping — strategy and attributes.'}</p>
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                    <th className="px-4 py-3">{locale === 'af' ? 'React Komponent' : 'React Component'}</th>
                    <th className="px-4 py-3">{locale === 'af' ? 'Strategie' : 'Strategy'}</th>
                    <th className="px-4 py-3">{locale === 'af' ? 'WP Konstruk' : 'WP Construct'}</th>
                    <th className="px-4 py-3">{locale === 'af' ? 'Eienskappe' : 'Attributes'}</th>
                  </tr>
                </thead>
                <tbody>
                  {BLOCK_MAPPINGS.map((mapping) => (
                    <tr key={mapping.react} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                      <td className="px-4 py-3 font-mono text-xs text-gray-900 dark:text-white">{mapping.react}</td>
                      <td className="px-4 py-3">{renderStrategyBadge(mapping.strategy)}</td>
                      <td className="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-300">{mapping.wp}</td>
                      <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{mapping.attributes.join(', ') || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { strategy: 'core', label: locale === 'af' ? 'Kern Blokke' : 'Core Blocks', desc: locale === 'af' ? 'Standaard WP blokke met theme.json style' : 'Standard WP blocks with theme.json styles', count: BLOCK_MAPPINGS.filter((m) => m.strategy === 'core').length },
                { strategy: 'pattern', label: locale === 'af' ? 'Patrone' : 'Patterns', desc: locale === 'af' ? 'Saamgestelde groepe van kernblokke' : 'Pre-composed groups of core blocks', count: BLOCK_MAPPINGS.filter((m) => m.strategy === 'pattern').length },
                { strategy: 'custom', label: locale === 'af' ? 'Pasgemaakte Blokke' : 'Custom Blocks', desc: locale === 'af' ? 'React-gebaseerde blokke via block.json' : 'React-based blocks via block.json', count: BLOCK_MAPPINGS.filter((m) => m.strategy === 'custom').length },
                { strategy: 'asset', label: locale === 'af' ? 'Bates' : 'Assets', desc: locale === 'af' ? 'HTML blokke of advertensie-inprop' : 'HTML blocks or ad plugin', count: BLOCK_MAPPINGS.filter((m) => m.strategy === 'asset').length },
              ].map((item) => (
                <div key={item.strategy} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    {renderStrategyBadge(item.strategy)}
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{item.count}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</h4>
                  <p className="text-[10px] text-gray-400 dark:text-white/30 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Pattern Migration Progress (cross-reference from Pattern Browser) */}
            {(() => {
              const statuses = loadStatuses();
              const progress = getProgressByPriority(statuses);
              const overall = getOverallProgress(statuses);
              return (
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{locale === 'af' ? 'Patroon Migrasie Vordering' : 'Pattern Migration Progress'}</h3>
                    <Link to="/ontwikkelaar/patrone" className="flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                      <ExternalLink size={10} />
                      {locale === 'af' ? 'Patroonblaaier' : 'Pattern Browser'}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-2 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full flex">
                        <div className="bg-green-500 transition-all" style={{ width: `${overall.percent}%` }} />
                        <div className="bg-amber-500/50 transition-all" style={{ width: `${Math.round((overall.inProgress / overall.total) * 100)}%` }} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-white/50">{overall.complete}/{overall.total} ({overall.percent}%)</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {progress.map(p => (
                      <div key={p.priority} className="text-center">
                        <span className={`text-xs font-bold ${p.priority === 'P0' ? 'text-red-400' : p.priority === 'P1' ? 'text-amber-400' : p.priority === 'P2' ? 'text-blue-400' : 'text-gray-400'}`}>{p.priority}</span>
                        <div className="h-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden mt-1 mb-0.5">
                          <div className="h-full bg-green-500 transition-all" style={{ width: `${p.percent}%` }} />
                        </div>
                        <span className="text-[10px] text-gray-400 dark:text-white/30">{p.complete}/{p.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ─── Block Styles ─── */}
        {activeTab === 'blockStyles' && (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Blok Style' : 'Block Styles'}</h2>
              <p className="text-gray-500 dark:text-white/50">{locale === 'af' ? 'JSON-gebaseerde blok style variasies — per-blok styling wat redakteurs kan kies.' : 'JSON-based block style variations — per-block styling that editors can select.'}</p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-xs text-gray-400 dark:text-white/40">
              <span>{locale === 'af' ? 'Blok Types' : 'Block Types'}: <strong className="text-gray-900 dark:text-white">{[...new Set(BLOCK_STYLES.map(s => s.block))].length}</strong></span>
              <span>{locale === 'af' ? 'Totale Style' : 'Total Styles'}: <strong className="text-gray-900 dark:text-white">{BLOCK_STYLES.length}</strong></span>
              <span>{locale === 'af' ? 'Kleur Variasies' : 'Color Variations'}: <strong className="text-gray-900 dark:text-white">{COLOR_BLOCK_STYLES.length}</strong></span>
              <span>{locale === 'af' ? 'Nutsklas' : 'Utility Classes'}: <strong className="text-gray-900 dark:text-white">{COLOR_UTILITY_CLASSES.text.length + COLOR_UTILITY_CLASSES.background.length}</strong></span>
            </div>

            {/* Block Styles — Grouped by Block */}
            <div className="space-y-6">
              {[...new Set(BLOCK_STYLES.map(s => s.block))].map(blockType => (
                <div key={blockType} className="space-y-3">
                  <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    <span className="font-mono text-sm">{blockType}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/40">
                      {BLOCK_STYLES.filter(s => s.block === blockType).length} {locale === 'af' ? 'style' : 'styles'}
                    </span>
                  </h3>

                  <div className="space-y-3">
                    {BLOCK_STYLES.filter(s => s.block === blockType).map((style, idx) => (
                        <ExpandableStyleCard
                          key={`${blockType}-${style.name}`}
                          labelContent={
                            <>
                              <div className="flex items-center gap-3 text-left">
                                <span className="font-bold text-gray-900 dark:text-white">{style.name}</span>
                                <span className="text-sm text-gray-500 dark:text-white/50">{locale === 'af' ? style.label : style.labelEn}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-400 dark:text-white/30">{locale === 'af' ? style.description : style.descriptionEn}</span>
                              </div>
                            </>
                          }
                        >
                              {/* JSON Schema */}
                              <div>
                                <div className="flex items-center justify-between mb-2 mt-4">
                                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40">JSON Schema</h4>
                                  <button
                                    onClick={() => {
                                      copyToClipboard(JSON.stringify(style.json, null, 2));
                                      toast.success(locale === 'af' ? 'JSON gekopieer' : 'JSON copied');
                                    }}
                                    className="text-xs text-brand-red hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1"
                                  >
                                    <Copy size={12} />
                                    {locale === 'af' ? 'Kopieer' : 'Copy'}
                                  </button>
                                </div>
                                <CodeBlock code={JSON.stringify(style.json, null, 2)} language="json" label="JSON Schema" maxHeight={240} editable />
                              </div>

                              {/* CSS Output */}
                              <div>
                                <CodeBlock code={style.css} language="css" label="CSS Class" maxHeight={240} editable />
                              </div>

                              {/* Usage Context */}
                              <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">{locale === 'af' ? 'Gebruik' : 'Usage'}</h4>
                                <p className="text-xs text-gray-500 dark:text-white/50">{locale === 'af' ? style.usage : style.usageEn}</p>
                              </div>

                              {/* WordPress Block Markup */}
                              <div>
                                <CodeBlock code={style.wpMarkup} language="html" label="WordPress Markup" maxHeight={240} editable />
                              </div>
                        </ExpandableStyleCard>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Color-Based Block Style Variations */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-orange-500 dark:text-orange-400">{locale === 'af' ? 'Kleur-Gebaseerde Blok Style Variasies' : 'Color-Based Block Style Variations'}</h3>
              <p className="text-xs text-gray-500 dark:text-white/50">{locale === 'af' ? 'Algemene ontwerp patrone met kleur-spesifieke styling.' : 'Common design patterns with color-specific styling.'}</p>

              <div className="space-y-3">
                {COLOR_BLOCK_STYLES.map((style) => (
                    <ExpandableStyleCard
                      key={style.name}
                      labelContent={
                        <>
                          <div className="flex items-center gap-3 text-left">
                            <span className="font-mono text-sm text-gray-900 dark:text-white">.is-style-{style.name}</span>
                            <span className="text-sm text-gray-500 dark:text-white/50">{locale === 'af' ? style.label : style.labelEn}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-400 dark:text-white/30">{locale === 'af' ? style.description : style.descriptionEn}</span>
                          </div>
                        </>
                      }
                    >
                          {/* JSON Schema */}
                          <div className="mt-4">
                            <CodeBlock code={JSON.stringify(style.json, null, 2)} language="json" label="JSON Schema" maxHeight={240} editable />
                          </div>

                          {/* CSS Output */}
                          <div>
                            <CodeBlock code={style.css} language="css" label="CSS Class" maxHeight={240} editable />
                          </div>

                          {/* Usage Context */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-2">{locale === 'af' ? 'Gebruik' : 'Usage'}</h4>
                            <p className="text-xs text-gray-500 dark:text-white/50">{locale === 'af' ? style.usage : style.usageEn}</p>
                          </div>

                          {/* WordPress Block Markup */}
                          <div>
                            <CodeBlock code={style.wpMarkup} language="html" label="WordPress Markup" maxHeight={240} editable />
                          </div>
                    </ExpandableStyleCard>
                ))}
              </div>
            </div>

            {/* Color Utility Classes */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">{locale === 'af' ? 'Kleur Nutsklas' : 'Color Utility Classes'}</h3>
                <p className="text-xs text-gray-500 dark:text-white/50 mb-4">{locale === 'af' ? 'WordPress genereer nutsklas uit theme.json kleur presets. Hierdie laat blok redakteurs toe om kleure toe te pas via die kleur plukker UI.' : 'WordPress generates utility classes from theme.json color presets. These allow block editors to apply colors via the color picker UI.'}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Text Color Classes */}
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Teks Kleur Klas (21)' : 'Text Color Classes (21)'}</h4>
                  <div className="space-y-1">
                    {COLOR_UTILITY_CLASSES.text.map(cls => (
                      <div key={cls} className="flex items-center justify-between text-xs">
                        <code className="text-indigo-600 dark:text-indigo-300">.{cls}</code>
                        <button
                          onClick={() => {
                            copyToClipboard(cls);
                            toast.success(locale === 'af' ? 'Klas gekopieer' : 'Class copied');
                          }}
                          className="text-brand-red hover:text-white transition-colors"
                        >
                          <Copy size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background Color Classes */}
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Agtergrond Kleur Klas (21)' : 'Background Color Classes (21)'}</h4>
                  <div className="space-y-1">
                    {COLOR_UTILITY_CLASSES.background.map(cls => (
                      <div key={cls} className="flex items-center justify-between text-xs">
                        <code className="text-orange-300">.{cls}</code>
                        <button
                          onClick={() => {
                            copyToClipboard(cls);
                            toast.success(locale === 'af' ? 'Klas gekopieer' : 'Class copied');
                          }}
                          className="text-brand-red hover:text-white transition-colors"
                        >
                          <Copy size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Example Usage */}
              <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-3">{locale === 'af' ? 'Voorbeeld: Blok Redakteur Kleur Plukker Uitvoer' : 'Example: Block Editor Color Picker Output'}</h4>
                <p className="text-xs text-gray-500 dark:text-white/50 mb-3">{locale === 'af' ? 'Wanneer \'n gebruiker "Brand Navy" agtergrond en "Base" (wit) teks kies vir \'n opskrif blok:' : 'When a user selects "Brand Navy" background and "Base" (white) text for a heading block:'}</p>
                <CodeBlock code={`<h2 class="has-brand-navy-background-color has-base-color">\n  rooi rose — Afrikaanse Weeklikse Tydskrif\n</h2>`} language="html" label="Block Editor Output" maxHeight={120} />
              </div>
            </div>
          </div>
        )}

        {/* ─── theme.json ─── */}
        {activeTab === 'themeJson' && (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-xl font-bold mb-2">{t('wp.themeJson.title')}</h2>
              <p className="text-gray-500 dark:text-white/50 mb-4">{t('wp.themeJson.subtitle')}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-white/40">
                <span>{locale === 'af' ? 'Skema' : 'Schema'}: <strong className="text-gray-900 dark:text-white">v3</strong></span>
                <span>{locale === 'af' ? 'Kleure' : 'Colors'}: <strong className="text-gray-900 dark:text-white">10</strong></span>
                <span>{locale === 'af' ? 'Font Grotes' : 'Font Sizes'}: <strong className="text-gray-900 dark:text-white">9</strong></span>
                <span>{locale === 'af' ? 'Spasiëring' : 'Spacing'}: <strong className="text-gray-900 dark:text-white">9</strong></span>
                <span>{locale === 'af' ? 'Skaduwees' : 'Shadows'}: <strong className="text-gray-900 dark:text-white">6</strong></span>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4">{locale === 'af' ? 'Kleur Palet' : 'Color Palette'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { slug: 'primary', color: '#E82C27', name: 'Brand Red' },
                  { slug: 'primary-hover', color: '#C41F20', name: 'Brand Red (Darker)' },
                  { slug: 'brand-navy', color: '#172134', name: 'Brand Navy' },
                  { slug: 'brand-navy-light', color: '#1A3A5F', name: 'Brand Navy Light' },
                  { slug: 'base', color: '#FFFFFF', name: 'Base (White)' },
                  { slug: 'base-2', color: '#F0F0F0', name: 'Surface (Light Gray)' },
                  { slug: 'base-3', color: '#DDDDDD', name: 'Border (Gray)' },
                  { slug: 'contrast', color: '#2c2c2c', name: 'Text (Black)' },
                  { slug: 'contrast-2', color: '#636375', name: 'Text (Muted)' },
                  { slug: 'text-link-red', color: '#C41F20', name: 'Accessible Link Red' },
                ].map((preset) => (
                  <div key={preset.slug} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                    <div className="h-20" style={{ backgroundColor: preset.color }} />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{preset.name}</span>
                        <button
                          onClick={() => {
                            copyToClipboard(preset.color);
                            toast.success(locale === 'af' ? 'Kleur gekopieer' : 'Color copied');
                          }}
                          className="text-brand-red hover:text-white transition-colors"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-gray-500 dark:text-white/50">slug: <code className="text-indigo-600 dark:text-indigo-300">{preset.slug}</code></div>
                        <div className="text-xs text-gray-500 dark:text-white/50">hex: <code className="text-orange-500 dark:text-orange-300">{preset.color}</code></div>
                        <div className="text-xs text-gray-500 dark:text-white/50">var: <code className="text-green-600 dark:text-green-300">--wp--preset--color--{preset.slug}</code></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-orange-500 dark:text-orange-400">{locale === 'af' ? 'Tipografie' : 'Typography'}</h3>
              
              {/* Font Families */}
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-200 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{locale === 'af' ? 'Font Families (4)' : 'Font Families (4)'}</h4>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Slug</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Naam' : 'Name'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Font Familie' : 'Font Family'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Lêers' : 'Files'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { slug: 'brand-serif', name: 'Brand Serif', family: 'Roboto Serif, serif', files: 2 },
                      { slug: 'brand-sans', name: 'Brand Sans', family: 'Inter, sans-serif', files: 1 },
                      { slug: 'heading', name: 'Heading (alias)', family: 'Roboto Serif, serif', files: 0 },
                      { slug: 'body', name: 'Body (alias)', family: 'Inter, sans-serif', files: 0 },
                    ].map((font) => (
                      <tr key={font.slug} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-300">{font.slug}</td>
                        <td className="px-4 py-3 text-gray-900 dark:text-white">{font.name}</td>
                        <td className="px-4 py-3 text-gray-500 dark:text-white/60">{font.family}</td>
                        <td className="px-4 py-3 text-gray-400 dark:text-white/40">{font.files > 0 ? `${font.files} @font-face` : 'alias'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Font Sizes */}
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-200 dark:border-white/10">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{locale === 'af' ? 'Font Grotes (9)' : 'Font Sizes (9)'}</h4>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">Slug</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Grootte' : 'Size'}</th>
                      <th className="px-4 py-3">px</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Soort' : 'Type'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Voorskou' : 'Preview'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { slug: '100', size: '0.6875rem', px: '11px', fluid: false },
                      { slug: '200', size: '0.75rem', px: '12px', fluid: false },
                      { slug: '300', size: '0.875rem', px: '14px', fluid: false },
                      { slug: '400', size: '1rem', px: '16px', fluid: false },
                      { slug: '500', size: '1.125rem', px: '18px', fluid: false },
                      { slug: '600', size: '1.25rem', px: '20px', fluid: false },
                      { slug: '700', size: '1.5rem', px: '24px', fluid: false },
                      { slug: '800', size: 'clamp(1.75rem, 1.69rem + 0.22vw, 1.875rem)', px: '28–30px', fluid: true },
                      { slug: '900', size: 'clamp(2.25rem, 1.92rem + 1.35vw, 3rem)', px: '36–48px', fluid: true },
                    ].map((fontSize) => (
                      <tr key={fontSize.slug} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-300">{fontSize.slug}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/60">{fontSize.size}</td>
                        <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/40">{fontSize.px}</td>
                        <td className="px-4 py-3">
                          {fontSize.fluid ? (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300 uppercase">Fluid</span>
                          ) : (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/30 uppercase">Fixed</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <span style={{ fontSize: fontSize.fluid ? '1rem' : fontSize.size }} className="text-gray-900 dark:text-white">Aa</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Spacing */}
            <div>
              <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-4">{locale === 'af' ? 'Spasiëring (9)' : 'Spacing (9)'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { slug: '10', size: '0.25rem', px: '4px', name: 'Tiny' },
                  { slug: '20', size: '0.5rem', px: '8px', name: 'XS' },
                  { slug: '30', size: '0.75rem', px: '12px', name: 'Small' },
                  { slug: '40', size: '1rem', px: '16px', name: 'Medium' },
                  { slug: '50', size: '1.25rem', px: '20px', name: 'Large' },
                  { slug: '60', size: '1.5rem', px: '24px', name: 'XL' },
                  { slug: '70', size: '1.75rem', px: '28px', name: 'XL+' },
                  { slug: '80', size: '2rem', px: '32px', name: '2XL' },
                  { slug: '100', size: '2.5rem', px: '40px', name: '3XL' },
                ].map((spacing) => (
                  <div key={spacing.slug} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{spacing.name}</span>
                        <code className="text-xs text-indigo-600 dark:text-indigo-300">{spacing.slug}</code>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-white/40">{spacing.px}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 bg-brand-red rounded" style={{ width: spacing.size }} />
                      <code className="text-xs text-gray-500 dark:text-white/60">{spacing.size}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadow Presets */}
            <div>
              <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400 mb-4">{locale === 'af' ? 'Skaduwee Presets (6)' : 'Shadow Presets (6)'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { slug: '100', name: 'Subtle', shadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
                  { slug: '200', name: 'Small', shadow: '0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px 0 rgb(0 0 0 / 0.06)' },
                  { slug: '300', name: 'Medium', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)' },
                  { slug: '400', name: 'Large', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)' },
                  { slug: '500', name: 'XL', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.12), 0 10px 10px -5px rgb(0 0 0 / 0.08)' },
                  { slug: '600', name: '2XL', shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
                ].map((shadowPreset) => (
                  <div key={shadowPreset.slug} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{shadowPreset.name}</span>
                      <code className="text-xs text-indigo-600 dark:text-indigo-300">{shadowPreset.slug}</code>
                    </div>
                    <div className="bg-brand-navy rounded-lg p-4 flex items-center justify-center mb-2">
                      <div className="w-16 h-16 bg-white rounded-lg" style={{ boxShadow: shadowPreset.shadow }} />
                    </div>
                    <code className="text-[10px] text-gray-400 dark:text-white/40 break-all">{shadowPreset.shadow}</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Tokens */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{locale === 'af' ? 'Pasgemaakte Tokens' : 'Custom Tokens'}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Border Widths */}
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Grens Wydtes (3)' : 'Border Widths (3)'}</h4>
                  <div className="space-y-3">
                    {[
                      { slug: '100', value: '1px' },
                      { slug: '200', value: '2px' },
                      { slug: '300', value: '4px' },
                    ].map((border) => (
                      <div key={border.slug} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <code className="text-xs text-indigo-600 dark:text-indigo-300">{border.slug}</code>
                          <span className="text-xs text-gray-500 dark:text-white/60">{border.value}</span>
                        </div>
                        <div className="h-4 w-20 bg-brand-red" style={{ borderBottom: `${border.value} solid white` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Border Radii */}
                <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Grens Radii (7)' : 'Border Radii (7)'}</h4>
                  <div className="space-y-3">
                    {[
                      { slug: '100', value: '0.125rem', px: '2px' },
                      { slug: '200', value: '0.25rem', px: '4px' },
                      { slug: '300', value: '0.375rem', px: '6px' },
                      { slug: '400', value: '0.5rem', px: '8px' },
                      { slug: '500', value: '0.75rem', px: '12px' },
                      { slug: '600', value: '1rem', px: '16px' },
                      { slug: '9999', value: '9999px', px: 'Full' },
                    ].map((radius) => (
                      <div key={radius.slug} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <code className="text-xs text-indigo-600 dark:text-indigo-300">{radius.slug}</code>
                          <span className="text-xs text-gray-500 dark:text-white/60">{radius.value}</span>
                          <span className="text-[10px] text-gray-400 dark:text-white/30">({radius.px})</span>
                        </div>
                        <div className="h-8 w-8 bg-brand-red" style={{ borderRadius: radius.value }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Element Styles */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 dark:text-pink-400 mb-4">{locale === 'af' ? 'Element Style (Verstekwaardes)' : 'Element Styles (Defaults)'}</h3>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-3">{locale === 'af' ? 'Element' : 'Element'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Familie' : 'Family'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Grootte' : 'Size'}</th>
                      <th className="px-4 py-3">{locale === 'af' ? 'Gewig' : 'Weight'}</th>
                      <th className="px-4 py-3">fvs / CSS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { element: 'h1', family: 'brand-serif', size: '900 (36–48px)', weight: '400', extra: "'GRAD' -50, 'wdth' 64, 'opsz' 48" },
                      { element: 'h2', family: 'brand-serif', size: '800 (28–30px)', weight: '400', extra: "'GRAD' -50, 'wdth' 64, 'opsz' 30" },
                      { element: 'h3', family: 'brand-serif', size: '700 (24px)', weight: '400', extra: "'GRAD' 0, 'wdth' 64, 'opsz' 24" },
                      { element: 'h4', family: 'brand-serif', size: '600 (20px)', weight: '400', extra: "'GRAD' 0, 'wdth' 64, 'opsz' 20" },
                      { element: 'h5', family: 'brand-sans', size: '500 (18px)', weight: '700', extra: 'letter-spacing: -0.09px' },
                      { element: 'h6', family: 'brand-sans', size: '400 (16px)', weight: '600', extra: 'text-transform: uppercase, letter-spacing: 0.8px' },
                      { element: 'button', family: '—', size: '—', weight: '700', extra: 'bg: primary, color: base, radius: 200' },
                    ].map((el) => (
                      <tr key={el.element} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-3 font-mono text-gray-900 dark:text-white font-bold">{el.element}</td>
                        <td className="px-4 py-3 text-xs text-gray-500 dark:text-white/60">{el.family}</td>
                        <td className="px-4 py-3 text-xs text-gray-500 dark:text-white/60">{el.size}</td>
                        <td className="px-4 py-3 text-gray-500 dark:text-white/60">{el.weight}</td>
                        <td className="px-4 py-3 text-[10px] text-gray-400 dark:text-white/40 max-w-xs truncate">{el.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Template Parts */}
            <div>
              <h3 className="text-lg font-bold text-cyan-600 dark:text-cyan-400 mb-4">{locale === 'af' ? 'Sjabloon Dele (9)' : 'Template Parts (9)'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'header', title: 'Kopstuk', area: 'header' },
                  { name: 'header-transparent', title: 'Deursigtige kopstuk', area: 'header' },
                  { name: 'footer', title: 'Voetskrif', area: 'footer' },
                  { name: 'footer-simple', title: 'Eenvoudige voetskrif', area: 'footer' },
                  { name: 'sidebar', title: 'Sybalk', area: 'uncategorized' },
                  { name: 'sidebar-event', title: 'Gebeurtenis Sybalk', area: 'uncategorized' },
                  { name: 'breadcrumbs', title: 'Broodkrummels', area: 'uncategorized' },
                  { name: 'comments', title: 'Kommentaar', area: 'uncategorized' },
                  { name: 'post-meta', title: 'Pos Metadata', area: 'uncategorized' },
                ].map((part) => (
                  <div key={part.name} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{part.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 uppercase">{part.area}</span>
                    </div>
                    <code className="text-xs text-gray-400 dark:text-white/40">/parts/{part.name}.html</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Templates */}
            <div>
              <h3 className="text-lg font-bold text-rose-600 dark:text-rose-400 mb-4">{locale === 'af' ? 'Pasgemaakte Sjablone (2)' : 'Custom Templates (2)'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'page-no-title', title: 'Bladsy (Sonder Titel)', postTypes: ['page'] },
                  { name: 'page-full-width', title: 'Bladsy (Volwydte)', postTypes: ['page'] },
                ].map((template) => (
                  <div key={template.name} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{template.title}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 uppercase">{template.postTypes.join(', ')}</span>
                    </div>
                    <code className="text-xs text-gray-400 dark:text-white/40">/templates/{template.name}.html</code>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Style Variations Note */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5">
              <h4 className="text-sm font-bold text-blue-500 dark:text-blue-300 mb-2">{locale === 'af' ? 'Globale Style Variasies' : 'Global Style Variations'}</h4>
              <p className="text-xs text-gray-500 dark:text-white/50 mb-3">{locale === 'af' ? 'Hierdie tema ondersteun 3 globale style variasies:' : 'This theme supports 3 global style variations:'}</p>
              <ul className="text-xs text-gray-400 dark:text-white/40 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <strong className="text-gray-900 dark:text-white">dark.json</strong> — {locale === 'af' ? 'Donker modus (blou-grys agtergronde, lig teks)' : 'Dark mode (blue-gray backgrounds, light text)'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <strong className="text-gray-900 dark:text-white">high-contrast.json</strong> — {locale === 'af' ? 'Hoë kontras (swart/wit, verhoogde leesbaarheid)' : 'High contrast (black/white, enhanced readability)'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <strong className="text-gray-900 dark:text-white">serif.json</strong> — {locale === 'af' ? 'Volserifliggaam (Roboto Serif vir liggaamsteks)' : 'All-serif body (Roboto Serif for body text)'}
                </li>
              </ul>
            </div>

            {/* JSON Preview Panel */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{locale === 'af' ? 'JSON Voorskou' : 'JSON Preview'}</h3>
                <button
                  onClick={() => setShowThemeJsonRaw(!showThemeJsonRaw)}
                  className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {showThemeJsonRaw
                    ? (locale === 'af' ? 'Versteek JSON' : 'Hide JSON')
                    : (locale === 'af' ? 'Wys Rou JSON' : 'Show Raw JSON')}
                </button>
              </div>
              {showThemeJsonRaw && (
                <CodeBlock
                  code={`{\n  "$schema": "https://schemas.wp.org/trunk/theme.json",\n  "version": 3,\n  "settings": {\n    "appearanceTools": true,\n    "layout": {\n      "contentSize": "1280px",\n      "wideSize": "1400px"\n    },\n    "color": {\n      "defaultPalette": false,\n      "palette": [\n        { "slug": "primary", "color": "#E82C27", "name": "Brand Red" },\n        { "slug": "primary-hover", "color": "#C41F20", "name": "Brand Red (Darker)" },\n        { "slug": "brand-navy", "color": "#172134", "name": "Brand Navy" },\n        { "slug": "brand-navy-light", "color": "#1A3A5F", "name": "Brand Navy Light" },\n        { "slug": "base", "color": "#FFFFFF", "name": "Base (White)" },\n        { "slug": "base-2", "color": "#F0F0F0", "name": "Surface (Light Gray)" },\n        { "slug": "base-3", "color": "#DDDDDD", "name": "Border (Gray)" },\n        { "slug": "contrast", "color": "#2c2c2c", "name": "Text (Black)" },\n        { "slug": "contrast-2", "color": "#636375", "name": "Text (Muted)" },\n        { "slug": "text-link-red", "color": "#C41F20", "name": "Accessible Link Red" }\n      ]\n    },\n    "typography": {\n      "fontFamilies": [\n        { "slug": "brand-serif", "name": "Brand Serif", "fontFamily": "\\"Roboto Serif\\", serif" },\n        { "slug": "brand-sans", "name": "Brand Sans", "fontFamily": "\\"Inter\\", sans-serif" }\n      ],\n      "fontSizes": [\n        { "slug": "100", "size": "0.75rem", "name": "Small (12px)" },\n        { "slug": "200", "size": "0.875rem", "name": "Caption (14px)" },\n        { "slug": "300", "size": "1rem", "name": "Body (16px)" },\n        { "slug": "400", "size": "1.125rem", "name": "Body Large (18px)" },\n        { "slug": "500", "size": "clamp(1.25rem, ...)", "name": "H5 (20px)" },\n        { "slug": "600", "size": "clamp(1.375rem, ...)", "name": "H4 (22→24px)" },\n        { "slug": "700", "size": "clamp(1.5rem, ...)", "name": "H3 (24→28px)" },\n        { "slug": "800", "size": "clamp(1.75rem, ...)", "name": "H2 (28→30px)" },\n        { "slug": "900", "size": "clamp(2.25rem, ...)", "name": "H1 (36→48px)" }\n      ]\n    },\n    "spacing": {\n      "spacingScale": { "operator": "*", "increment": 1.5, "mediumStep": 1.5, "steps": 7, "unit": "rem" },\n      "units": [ "px", "em", "rem", "%", "vw" ]\n    }\n  },\n  "styles": { "..." : "Element defaults, typography, colors" },\n  "customTemplates": [ "..." ],\n  "templateParts": [ "..." ]\n}`}
                  language="json"
                  label="theme.json (v3)"
                  maxHeight={500}
                  editable
                />
              )}
            </div>

            {/* File Location */}
            <div className="bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 dark:text-white/40">
                {locale === 'af' ? 'Volledige theme.json beskikbaar by' : 'Full theme.json available at'} <code className="text-brand-red">/wordpress-export/themes/die-papier-theme/theme.json</code>
              </p>
            </div>
          </div>
        )}

        {/* ─── Riglyne (Guidelines Browser) ─── */}
        {activeTab === 'riglyne' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Riglyne Blaaier' : 'Guidelines Browser'}</h2>
                <p className="text-gray-500 dark:text-white/50">{locale === 'af' ? 'Alle .md riglynlêers gegroepeer per kategorie.' : 'All .md guideline files grouped by category.'}</p>
              </div>
              <span className="text-xs text-gray-400 dark:text-white/30">{GUIDELINE_FILES.length} {locale === 'af' ? 'lêers' : 'files'}</span>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setGuidelineCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  guidelineCategory === 'all' ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {locale === 'af' ? 'Alles' : 'All'} ({GUIDELINE_FILES.length})
              </button>
              {GUIDELINE_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGuidelineCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    guidelineCategory === cat ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {cat} ({GUIDELINE_FILES.filter((f) => f.category === cat).length})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
              <input
                type="text"
                placeholder={locale === 'af' ? 'Soek riglyne...' : 'Search guidelines...'}
                value={fileSearch}
                onChange={(e) => setFileSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none"
              />
            </div>

            {/* File List */}
            <div className="space-y-1.5">
              {filteredGuidelines.map((file) => (
                <div key={file.path} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 shrink-0">{file.category}</span>
                    <span className="text-sm text-gray-900 dark:text-white truncate">{file.label}</span>
                  </div>
                  <button
                    onClick={() => { copyToClipboard(file.path); toast.success(`${locale === 'af' ? 'Gekopieer' : 'Copied'}: ${file.path}`); }}
                    className="flex items-center gap-1.5 text-[10px] text-gray-300 dark:text-white/25 hover:text-gray-500 dark:hover:text-white/60 transition-colors font-mono shrink-0 ml-3"
                  >
                    <Copy size={10} />
                    {file.path}
                  </button>
                </div>
              ))}
            </div>

            {filteredGuidelines.length === 0 && (
              <div className="text-center py-12 text-gray-400 dark:text-white/30">
                <p>{locale === 'af' ? 'Geen resultate gevind.' : 'No results found.'}</p>
              </div>
            )}
          </div>
        )}

        {/* ─── Content Export ─── */}
        {activeTab === 'contentExport' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold mb-2">{locale === 'af' ? 'Inhoud Uitvoer' : 'Content Export'}</h2>
            <p className="text-gray-500 dark:text-white/50">{locale === 'af' ? 'Dokumentasie vir die uitvoer van React-inhoud na WordPress WXR-formaat.' : 'Documentation for exporting React content to WordPress WXR format.'}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: locale === 'af' ? 'Meester Inhoud Uitvoer' : 'Master Content Export', path: '/guidelines/content/master-content-export.md', desc: locale === 'af' ? 'Statiese bladsy-inhoud en globale VGVs' : 'Static page content and global FAQs' },
                { title: locale === 'af' ? 'Uitvoer Strategie' : 'Export Strategy', path: '/guidelines/content/export-strategy.md', desc: locale === 'af' ? 'Hoe om inhoud uit te voer' : 'How to export content' },
                { title: locale === 'af' ? 'Prototipe Uitvoer Riglyne' : 'Prototype Export Guidelines', path: '/guidelines/content/PROTOTYPE-CONTENT-EXPORT-GUIDELINES.md', desc: locale === 'af' ? 'Riglyne vir prototipe-inhoud uitvoer' : 'Guidelines for prototype content export' },
                { title: locale === 'af' ? 'Data Migrasie' : 'Data Migration', path: '/guidelines/wordpress-migration/content/data-migration.md', desc: locale === 'af' ? 'React data/*.ts na WordPress WXR/WP-CLI' : 'React data/*.ts to WordPress WXR/WP-CLI' },
                { title: locale === 'af' ? 'Taksonomie Kartering' : 'Taxonomy Mapping', path: '/guidelines/wordpress-migration/content/taxonomy-mapping.md', desc: locale === 'af' ? 'React kategorieë/merkers na WP taksonomieë' : 'React categories/tags to WP taxonomies' },
                { title: locale === 'af' ? 'Media Invoer' : 'Media Import', path: '/guidelines/wordpress-migration/content/media-import.md', desc: locale === 'af' ? 'Unsplash/plaaslike beelde na WP mediabiblioteek' : 'Unsplash/local images to WP media library' },
                { title: locale === 'af' ? 'Invoer Uitvoering' : 'Import Execution', path: '/guidelines/wordpress-migration/content/import-execution.md', desc: locale === 'af' ? 'WP-CLI invoer bevele en na-invoer verifikasie' : 'WP-CLI import commands and post-import verification' },
                { title: locale === 'af' ? 'CPT Definisies' : 'CPT Definitions', path: '/guidelines/wordpress-migration/content/cpt-definitions.md', desc: locale === 'af' ? 'Gedetailleerde veldspesifikasies per CPT' : 'Detailed field specifications per CPT' },
                { title: locale === 'af' ? 'Kieslys Strategie' : 'Menu Strategy', path: '/guidelines/wordpress-migration/content/menu-strategy.md', desc: locale === 'af' ? 'React nav na WP kieslys registrasie (9 areas)' : 'React nav to WP menu registration (9 locations)' },
                { title: locale === 'af' ? 'VGV Inhoud' : 'FAQ Content', path: '/guidelines/content/FAQs.md', desc: locale === 'af' ? '~80 V&A pare vir dp_faq CPT invoer' : '~80 Q&A pairs for dp_faq CPT import' },
                { title: locale === 'af' ? 'Media Invoer Strategie' : 'Media Import Strategy', path: '/guidelines/content/media-import-strategy.md', desc: locale === 'af' ? 'Beeldoptimering en CDN-strategie' : 'Image optimization and CDN strategy' },
                { title: locale === 'af' ? 'WordPress Datamodel' : 'WordPress Data Model', path: '/guidelines/data-structure/wordpress-data-model.md', desc: locale === 'af' ? 'Produksie CPTs en velde' : 'Production CPTs and fields' },
              ].map((doc) => (
                <div key={doc.path} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{doc.title}</h3>
                  <p className="text-xs text-gray-400 dark:text-white/40 mb-3">{doc.desc}</p>
                  <button
                    onClick={() => { copyToClipboard(doc.path); toast.success(`${locale === 'af' ? 'Pad gekopieer' : 'Path copied'}`); }}
                    className="flex items-center gap-1.5 text-[10px] text-indigo-600 dark:text-indigo-300 hover:text-gray-900 dark:hover:text-white transition-colors font-mono"
                  >
                    <Copy size={10} />
                    {doc.path}
                  </button>
                </div>
              ))}
            </div>

            {/* Data Mapping Summary */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4">{locale === 'af' ? 'Data Kartering Opsomming' : 'Data Mapping Summary'}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest">
                      <th className="px-4 py-2">{locale === 'af' ? 'React Bron' : 'React Source'}</th>
                      <th className="px-4 py-2">{locale === 'af' ? 'WP Pos-tipe' : 'WP Post Type'}</th>
                      <th className="px-4 py-2">{locale === 'af' ? 'Sleutelvelde' : 'Key Fields'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { react: 'articles.ts', wp: 'post', fields: 'title, excerpt, content, date, author, image, _read_time, _is_featured' },
                      { react: 'events.ts', wp: 'dp_event', fields: 'event_date (Ymd), event_time, event_location, ticket_url' },
                      { react: 'competitions.ts', wp: 'dp_competition', fields: 'prize, dates, sponsor_id, entry_form_id, status' },
                      { react: 'obituaries.ts', wp: 'dp_obituary', fields: 'date_of_birth, date_of_death, location, funeral_details' },
                      { react: 'mockEEditions.ts', wp: 'dp_eedition', fields: 'publication_date, pdf_file, edition_number, linked_product_id' },
                      { react: 'sponsors.ts', wp: 'dp_sponsor', fields: 'website_url, contact_email, primary_color' },
                      { react: 'pageFaqs.ts', wp: 'dp_faq', fields: 'faq_answer (WYSIWYG), dp_faq_category taxonomy' },
                    ].map((row) => (
                      <tr key={row.react} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5">
                        <td className="px-4 py-2 font-mono text-xs text-brand-red">{row.react}</td>
                        <td className="px-4 py-2 font-mono text-xs text-indigo-600 dark:text-indigo-300">{row.wp}</td>
                        <td className="px-4 py-2 text-xs text-gray-400 dark:text-white/40">{row.fields}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Roadmap + Launch Checklist tabs moved to /ontwikkelaar/lansering — DTE-124 */}

        {/* ─── eCommerce Tab ─── */}
        {activeTab === 'commerce' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{locale === 'af' ? 'E-Handel Konfigurasie' : 'eCommerce Configuration'}</h2>
              <p className="text-sm text-gray-500 dark:text-white/50">{locale === 'af' ? 'WooCommerce Subscriptions, Memberships, Payfast, en Issuu-integrasie' : 'WooCommerce Subscriptions, Memberships, Payfast, and Issuu integration'}</p>
            </div>

            {/* Plugin Dependencies */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Package size={16} className="text-indigo-400" /> {locale === 'af' ? 'Vereiste Inproppe' : 'Required Plugins'}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { name: 'WooCommerce', version: '9.x+', purpose: locale === 'af' ? 'Basis-e-handel, mandjie, betaling, bestellings' : 'Base e-commerce, cart, checkout, orders', free: true },
                  { name: 'WC Subscriptions', version: '6.x+', purpose: locale === 'af' ? 'Herhalende fakturering-enjin' : 'Recurring billing engine', free: false },
                  { name: 'WC Memberships', version: '1.26+', purpose: locale === 'af' ? 'Inhoudtoegangsbeheerlaag' : 'Content access control layer', free: false },
                  { name: 'Payfast Gateway', version: locale === 'af' ? 'Nuutste' : 'Latest', purpose: locale === 'af' ? 'Betaling via kaart, EFT (Suid-Afrika)' : 'SA payment: card, EFT', free: true },
                ].map((plugin) => (
                  <div key={plugin.name} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{plugin.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${plugin.free ? 'bg-green-500/20 text-green-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {plugin.free ? (locale === 'af' ? 'Gratis' : 'Free') : (locale === 'af' ? 'Betaald' : 'Paid')}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-white/40">{plugin.version} — {plugin.purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Architecture */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><ShoppingCart size={16} className="text-green-400" /> {locale === 'af' ? 'Produkargitektuur' : 'Product Architecture'}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Produk' : 'Product'}</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Tipe' : 'Type'}</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Prys' : 'Price'}</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Siklus' : 'Cycle'}</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Proeftydperk' : 'Trial'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: locale === 'af' ? 'Maandelikse Intekening' : 'Monthly Subscription', type: 'Subscription', price: 'R140/mo', cycle: locale === 'af' ? 'Maandeliks' : 'Monthly', trial: locale === 'af' ? '14 dae (kaart vereis)' : '14 days (card required)' },
                      { name: locale === 'af' ? '6-Maande Intekening' : '6-Month Subscription', type: 'Subscription', price: 'R130/mo', cycle: locale === 'af' ? '6-Maandeliks' : '6-Monthly', trial: locale === 'af' ? '14 dae (kaart vereis)' : '14 days (card required)' },
                      { name: locale === 'af' ? 'Jaarlikse Intekening' : 'Annual Subscription', type: 'Subscription', price: 'R116.67/mo', cycle: locale === 'af' ? 'Jaarliks' : 'Annual', trial: locale === 'af' ? '14 dae (kaart vereis)' : '14 days (card required)' },
                      { name: locale === 'af' ? 'Enkele E-Uitgawe' : 'Single E-Edition', type: 'Simple', price: 'R35', cycle: locale === 'af' ? 'Eenmalig' : 'One-time', trial: '—' },
                    ].map((product) => (
                      <tr key={product.name} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5">
                        <td className="py-2 px-3 text-gray-900 dark:text-white">{product.name}</td>
                        <td className="py-2 px-3"><span className={`text-[10px] px-2 py-0.5 rounded-full ${product.type === 'Subscription' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'}`}>{product.type}</span></td>
                        <td className="py-2 px-3 text-amber-300 font-mono">{product.price}</td>
                        <td className="py-2 px-3 text-gray-500 dark:text-white/50">{product.cycle}</td>
                        <td className="py-2 px-3 text-gray-500 dark:text-white/50">{product.trial}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Membership Plan */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Shield size={16} className="text-purple-400" /> {locale === 'af' ? 'Lidmaatskapplan' : 'Membership Plan'}</h3>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">E-Uitgawe Intekenaar</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">{locale === 'af' ? 'Enkele Plan' : 'Single Plan'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Toegang:' : 'Access:'}</span> <span className="text-gray-900 dark:text-white">{locale === 'af' ? 'E-uitgawes vanaf intekeningsdatum' : 'E-editions from sign-up date'}</span></div>
                  <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Argief:' : 'Archive:'}</span> <span className="text-gray-900 dark:text-white">{locale === 'af' ? 'Slegs vanaf intekeningsdatum' : 'Only from sign-up date'}</span></div>
                  <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Inhoudbeperking:' : 'Content restriction:'}</span> <span className="text-gray-900 dark:text-white">WC Memberships access gate</span></div>
                  <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Proeftydperk:' : 'Trial:'}</span> <span className="text-gray-900 dark:text-white">{locale === 'af' ? '14 dae gratis (kaart vereis)' : '14 days free (card required)'}</span></div>
                </div>
              </div>
            </div>

            {/* Payfast Config */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><CreditCard size={16} className="text-green-400" /> Payfast {locale === 'af' ? 'Konfigurasie' : 'Configuration'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { label: locale === 'af' ? 'Betaalmetodes' : 'Payment methods', value: locale === 'af' ? 'Kaart, EFT, Mobicred' : 'Card, EFT, Mobicred' },
                  { label: 'Sandbox URL', value: 'sandbox.payfast.co.za' },
                  { label: 'Production URL', value: 'www.payfast.co.za' },
                  { label: locale === 'af' ? 'Intekeningondersteuning' : 'Subscription support', value: locale === 'af' ? 'Ja — via herhalende fakturering-API' : 'Yes — via recurring billing API' },
                  { label: locale === 'af' ? 'Valuta' : 'Currency', value: 'ZAR (Suid-Afrikaanse Rand)' },
                  { label: locale === 'af' ? 'Gasaankope' : 'Guest checkout', value: locale === 'af' ? 'Gedeaktiveer — registrasie vereis' : 'Disabled — registration required' },
                ].map((item) => (
                  <div key={item.label} className="bg-white dark:bg-white/5 rounded-lg p-3">
                    <span className="text-gray-400 dark:text-white/40 block mb-0.5">{item.label}</span>
                    <span className="text-gray-900 dark:text-white font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Issuu Integration */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2"><Zap size={16} className="text-amber-400" /> Issuu {locale === 'af' ? 'Integrasie' : 'Integration'}</h3>
              <div className="text-xs space-y-2">
                <p className="text-gray-500 dark:text-white/50">{locale === 'af'
                  ? "Elke e-uitgawe word as 'n Issuu-flipbook ingebed. Die flipbook-URL word gestoor as 'n SCF-veld op die dp_eedition CPT."
                  : 'Each e-edition is embedded as an Issuu flipbook. The flipbook URL is stored as an SCF field on the dp_eedition CPT.'}</p>
                <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-3 font-mono text-gray-600 dark:text-white/70">
                  <p>{'<iframe src="https://e.issuu.com/embed.html?d={documentId}" ... />'}</p>
                </div>
                <p className="text-gray-400 dark:text-white/40">{locale === 'af'
                  ? "Produkskep: Handmatig in WooCommerce — elke uitgawe vereis 'n nuwe eenvoudige produk (R35) gekoppel aan die dp_eedition CPT via die _dp_wc_product_id meta-veld."
                  : 'Product creation: Manual in WooCommerce — each issue requires a new simple product (R35) linked to the dp_eedition CPT via the _dp_wc_product_id meta field.'}</p>
              </div>
            </div>

            {/* Related Guidelines */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Verwante Riglyne' : 'Related Guidelines'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { path: '/guidelines/wordpress-migration/woocommerce/woocommerce-subscriptions-memberships.md', label: 'WC Subscriptions & Memberships Spec' },
                  { path: '/guidelines/wordpress-migration/third-party-plugins/woocommerce.md', label: locale === 'af' ? 'WooCommerce Integrasie' : 'WooCommerce Integration' },
                  { path: '/guidelines/content/e-editions-user-journeys.md', label: locale === 'af' ? 'Gebruikersreise' : 'User Journeys' },
                  { path: '/guidelines/content/pricing.md', label: locale === 'af' ? 'Pryse (Kanoniek)' : 'Pricing (Canonical)' },
                ].map((doc) => (
                  <button
                    key={doc.path}
                    onClick={() => { copyToClipboard(doc.path); toast.success(locale === 'af' ? 'Pad gekopieer' : 'Path copied'); }}
                    className="flex items-center gap-2 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg p-3 text-left transition-colors group"
                  >
                    <ExternalLink size={12} className="text-gray-300 dark:text-white/30 group-hover:text-gray-500 dark:group-hover:text-white/60 shrink-0" />
                    <div>
                      <span className="text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-300 transition-colors block">{doc.label}</span>
                      <span className="text-gray-400 dark:text-white/30 font-mono text-[10px]">{doc.path}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── SEO Tab ─── */}
        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{locale === 'af' ? 'SEO Migrasie-strategie' : 'SEO Migration Strategy'}</h2>
              <p className="text-sm text-gray-500 dark:text-white/50">{locale === 'af' ? 'Yoast SEO, meta-etikette, gestruktureerde data, en Google News' : 'Yoast SEO, meta tags, structured data, and Google News'}</p>
            </div>

            {/* Meta Tag Mapping */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Meta-etiketkartering' : 'Meta Tag Mapping'}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">React Prop</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">Yoast SEO Meta Key</th>
                      <th className="text-left py-2 px-3 text-gray-500 dark:text-white/50">{locale === 'af' ? 'Notas' : 'Notes'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prop: 'title', key: '_yoast_wpseo_title', note: locale === 'af' ? 'Terugval na %title% %%sep%% %sitename%' : 'Fallback to %title% %%sep%% %sitename%' },
                      { prop: 'description', key: '_yoast_wpseo_metadesc', note: locale === 'af' ? 'Terugval na %excerpt%' : 'Fallback to %excerpt%' },
                      { prop: 'canonical', key: '_yoast_wpseo_canonical', note: locale === 'af' ? 'Standaard na permalink' : 'Defaults to permalink' },
                      { prop: 'image', key: '_yoast_wpseo_opengraph-image', note: 'Open Graph image' },
                      { prop: 'author', key: 'post_author', note: locale === 'af' ? 'WordPress hanteer dit inheems' : 'WordPress handles natively' },
                      { prop: 'publishedTime', key: 'post_date', note: locale === 'af' ? 'Inheemse WP-veld' : 'Native WP field' },
                    ].map((row) => (
                      <tr key={row.prop} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5">
                        <td className="py-2 px-3 text-amber-300 font-mono">{row.prop}</td>
                        <td className="py-2 px-3 text-green-300 font-mono">{row.key}</td>
                        <td className="py-2 px-3 text-gray-500 dark:text-white/50">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Structured Data */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Gestruktureerde Data (Schema.org)' : 'Structured Data (Schema.org)'}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { schema: 'NewsArticle', desc: locale === 'af' ? 'Elke artikel — Yoast genereer outomaties' : 'Every article — Yoast generates automatically', status: 'auto' },
                  { schema: 'Product', desc: locale === 'af' ? 'E-Uitgawes — prys, beskikbaarheid in ZAR' : 'E-Editions — price, availability in ZAR', status: 'custom' },
                  { schema: 'BreadcrumbList', desc: locale === 'af' ? 'Alle bladsye behalwe Tuisblad' : 'All pages except Home', status: 'auto' },
                ].map((item) => (
                  <div key={item.schema} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono font-semibold text-gray-900 dark:text-white">{item.schema}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.status === 'auto' ? 'bg-green-500/20 text-green-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {item.status === 'auto' ? 'Yoast Auto' : 'Custom'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-white/40">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Yoast Config Checklist */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Yoast SEO Konfigurasie-kontrolelys' : 'Yoast SEO Config Checklist'}</h3>
              <ul className="space-y-2 text-xs">
                {[
                  locale === 'af' ? 'Stel Organisasienaam en Logo in (Yoast > Algemeen > Webwerf Verteenwoordiging)' : 'Set Organization Name and Logo (Yoast > General > Site Representation)',
                  locale === 'af' ? 'Aktiveer Open Graph data (Yoast > Social > Facebook)' : 'Enable Open Graph data (Yoast > Social > Facebook)',
                  locale === 'af' ? 'Stel standaard Social Image (Yoast > Social > Facebook)' : 'Set default Social Image (Yoast > Social > Facebook)',
                  locale === 'af' ? 'Aktiveer broodkrummels (Yoast > Instellings > Broodkrummels)' : 'Enable breadcrumbs (Yoast > Settings > Breadcrumbs)',
                  locale === 'af' ? 'Stel Artikels in as NewsArticle (Yoast > Inhoudtipes > Poste)' : 'Set Articles to NewsArticle (Yoast > Content Types > Posts)',
                  locale === 'af' ? 'Voeg webwerf by Google Search Console en dien sitemap.xml in' : 'Add site to Google Search Console and submit sitemap.xml',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-gray-300 dark:text-white/20 mt-0.5 shrink-0" />
                    <span className="text-gray-600 dark:text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
              <p className="text-xs text-indigo-300">{locale === 'af'
                ? 'Volledige SEO-migrasiespesifikasie:'
                : 'Full SEO migration spec:'} <span className="font-mono text-gray-500 dark:text-white/50">/guidelines/wordpress-migration/seo-strategy.md</span></p>
            </div>
          </div>
        )}

        {/* ─── Forms Tab ─── */}
        {activeTab === 'forms' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Gravity Forms {locale === 'af' ? 'Integrasie' : 'Integration'}</h2>
              <p className="text-sm text-gray-500 dark:text-white/50">{locale === 'af'
                ? 'React-vorms migreer na Gravity Forms — geen aangepaste React-vorms in WordPress nie'
                : 'React forms migrate to Gravity Forms — no custom React forms in WordPress'}</p>
            </div>

            {/* Form Mapping */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Vormkartering' : 'Form Mapping'}</h3>
              <div className="space-y-3">
                {[
                  {
                    id: 1,
                    name: locale === 'af' ? 'Nuusbrief Intekening' : 'Newsletter Subscribe',
                    react: 'NewsletterSubscribe.tsx',
                    fields: locale === 'af' ? 'Naam, Van, E-pos' : 'Name, Surname, Email',
                    submit: locale === 'af' ? 'Teken in' : 'Subscribe',
                    integration: 'MailPoet',
                  },
                  {
                    id: 2,
                    name: locale === 'af' ? 'Kontakvorm' : 'Contact Form',
                    react: 'ContactForm.tsx',
                    fields: locale === 'af' ? 'Naam, E-pos, Onderwerp, Boodskap' : 'Name, Email, Subject, Message',
                    submit: locale === 'af' ? 'Stuur Boodskap' : 'Send Message',
                    integration: locale === 'af' ? 'E-pos kennisgewing' : 'Email notification',
                  },
                  {
                    id: 3,
                    name: locale === 'af' ? 'Kompetisie Inskrywing' : 'Competition Entry',
                    react: 'CompetitionSingle.tsx',
                    fields: locale === 'af' ? 'Naam & Van, E-pos, Selnommer, Antwoord' : 'Name & Surname, Email, Cell, Answer',
                    submit: locale === 'af' ? 'Skryf In' : 'Enter',
                    integration: locale === 'af' ? 'Versteekte veld: competition_slug' : 'Hidden field: competition_slug',
                  },
                ].map((form) => (
                  <div key={form.id} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">GF #{form.id}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{form.name}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div><span className="text-gray-400 dark:text-white/40">React:</span> <span className="text-amber-600 dark:text-amber-300 font-mono">{form.react}</span></div>
                      <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Velde:' : 'Fields:'}</span> <span className="text-gray-600 dark:text-white/70">{form.fields}</span></div>
                      <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Stuur-knop:' : 'Submit:'}</span> <span className="text-gray-600 dark:text-white/70">"{form.submit}"</span></div>
                      <div><span className="text-gray-400 dark:text-white/40">{locale === 'af' ? 'Integrasie:' : 'Integration:'}</span> <span className="text-gray-600 dark:text-white/70">{form.integration}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Styling Strategy */}
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{locale === 'af' ? 'Stylstrategie' : 'Styling Strategy'}</h3>
              <div className="space-y-2 text-xs text-gray-600 dark:text-white/60">
                <p>{locale === 'af'
                  ? 'Gravity Forms word gestyld deur theme.json-tokens — geen aangepaste CSS nodig nie.'
                  : 'Gravity Forms is styled via theme.json tokens — no custom CSS needed.'}</p>
                <div className="bg-gray-100 dark:bg-white/5 rounded-lg p-3 font-mono text-gray-500 dark:text-white/50 space-y-1">
                  <p>{'.gform_wrapper { font-family: var(--wp--preset--font-family--brand-sans); }'}</p>
                  <p>{'.gfield input { border-radius: var(--wp--custom--radius--md); }'}</p>
                  <p>{'.gform_button { background: var(--wp--preset--color--primary); }'}</p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
              <p className="text-xs text-indigo-300">{locale === 'af'
                ? 'Volledige Gravity Forms-strategie:'
                : 'Full Gravity Forms strategy:'} <span className="font-mono text-gray-500 dark:text-white/50">/guidelines/wordpress-migration/gravity-forms-strategy.md</span></p>
            </div>
          </div>
        )}

        {/* Launch Checklist tab moved to /ontwikkelaar/lansering — DTE-124. Dead code fully removed — DTE-126. */}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 dark:border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-400 dark:text-white/30">{t('wp.footer')} &mdash; {t('common.internalOnly')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DevRelatedTools tools={RELATED_TOOLS_MAP.wordPressMigration} />
      </div>
    </div>
  );
};
