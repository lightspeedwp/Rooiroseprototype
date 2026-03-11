import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { Search, Layers, ChevronRight, Copy, PanelLeftClose, PanelLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';

import { copyToClipboard } from '../../utils/clipboard';

interface ComponentEntry {
  name: string;
  file: string;
  category: string;
  props?: string[];
  tags?: string[];
  description?: string;
}

const CATEGORIES = [
  { id: 'all', key: 'cb.cat.all', descKey: 'cb.cat.allDesc' },
  { id: 'ui', key: 'cb.cat.ui', descKey: 'cb.cat.uiDesc' },
  { id: 'common', key: 'cb.cat.common', descKey: 'cb.cat.commonDesc' },
  { id: 'layouts', key: 'cb.cat.layouts', descKey: 'cb.cat.layoutsDesc' },
  { id: 'patterns', key: 'cb.cat.patterns', descKey: 'cb.cat.patternsDesc' },
  { id: 'home', key: 'cb.cat.home', descKey: 'cb.cat.homeDesc' },
  { id: 'category', key: 'cb.cat.category', descKey: 'cb.cat.categoryDesc' },
  { id: 'ads', key: 'cb.cat.ads', descKey: 'cb.cat.adsDesc' },
  { id: 'brand', key: 'cb.cat.brand', descKey: 'cb.cat.brandDesc' },
  { id: 'newsletter', key: 'cb.cat.newsletter', descKey: 'cb.cat.newsletterDesc' },
  { id: 'parts', key: 'cb.cat.parts', descKey: 'cb.cat.partsDesc' },
  { id: 'templates', key: 'cb.cat.templates', descKey: 'cb.cat.templatesDesc' },
];

const COMPONENTS: ComponentEntry[] = [
  // UI Primitives
  { name: 'Button', file: 'components/ui/button.tsx', category: 'ui', props: ['variant', 'size', 'asChild'], tags: ['interactive', 'form'] },
  { name: 'Card', file: 'components/ui/card.tsx', category: 'ui', props: ['className'], tags: ['container', 'layout'] },
  { name: 'Badge', file: 'components/ui/badge.tsx', category: 'ui', props: ['variant'], tags: ['label', 'status'] },
  { name: 'Input', file: 'components/ui/input.tsx', category: 'ui', props: ['type', 'placeholder'], tags: ['form', 'interactive'] },
  { name: 'Tabs', file: 'components/ui/tabs.tsx', category: 'ui', props: ['defaultValue'], tags: ['navigation', 'interactive'] },
  { name: 'Dialog', file: 'components/ui/dialog.tsx', category: 'ui', props: ['open', 'onOpenChange'], tags: ['modal', 'overlay'] },
  { name: 'Accordion', file: 'components/ui/accordion.tsx', category: 'ui', props: ['type', 'collapsible'], tags: ['disclosure', 'faq'] },
  { name: 'Select', file: 'components/ui/select.tsx', category: 'ui', props: ['value', 'onValueChange'], tags: ['form', 'dropdown'] },
  { name: 'Tooltip', file: 'components/ui/tooltip.tsx', category: 'ui', props: ['content'], tags: ['overlay', 'hint'] },
  { name: 'Progress', file: 'components/ui/progress.tsx', category: 'ui', props: ['value', 'max'], tags: ['feedback', 'loading'] },
  { name: 'Switch', file: 'components/ui/switch.tsx', category: 'ui', props: ['checked', 'onCheckedChange'], tags: ['form', 'toggle'] },
  { name: 'Checkbox', file: 'components/ui/checkbox.tsx', category: 'ui', props: ['checked', 'onCheckedChange'], tags: ['form', 'selection'] },
  { name: 'Separator', file: 'components/ui/separator.tsx', category: 'ui', props: ['orientation'], tags: ['layout', 'divider'] },
  { name: 'ScrollArea', file: 'components/ui/scroll-area.tsx', category: 'ui', props: ['className'], tags: ['container', 'overflow'] },
  { name: 'Skeleton', file: 'components/ui/skeleton.tsx', category: 'ui', props: ['className'], tags: ['loading', 'placeholder'] },
  { name: 'Avatar', file: 'components/ui/avatar.tsx', category: 'ui', props: ['src', 'alt'], tags: ['media', 'user'] },
  { name: 'Popover', file: 'components/ui/popover.tsx', category: 'ui', props: ['open', 'onOpenChange'], tags: ['overlay', 'dropdown'] },
  { name: 'Table', file: 'components/ui/table.tsx', category: 'ui', props: ['className'], tags: ['data', 'grid'] },
  // Common
  { name: 'Logo', file: 'components/common/Logo.tsx', category: 'common', props: ['variant', 'className'], tags: ['brand', 'identity'] },
  { name: 'PageContainer', file: 'components/common/PageContainer.tsx', category: 'common', props: ['title', 'subtitle', 'breadcrumbs'], tags: ['layout', 'wrapper'] },
  { name: 'CategoryBadge', file: 'components/common/CategoryBadge.tsx', category: 'common', props: ['category', 'size'], tags: ['label', 'taxonomy'] },
  { name: 'ShareButtons', file: 'components/common/ShareButtons.tsx', category: 'common', props: ['url', 'title'], tags: ['social', 'sharing'] },
  { name: 'AuthorCard', file: 'components/common/AuthorCard.tsx', category: 'common', props: ['author'], tags: ['user', 'attribution'] },
  { name: 'DevLanguageSwitcher', file: 'components/common/DevLanguageSwitcher.tsx', category: 'common', props: [], tags: ['dev', 'i18n'] },
  // Layouts
  { name: 'RootLayout', file: 'components/layouts/RootLayout.tsx', category: 'layouts', props: [], tags: ['router', 'provider'] },
  { name: 'MainLayout', file: 'components/layouts/MainLayout.tsx', category: 'layouts', props: [], tags: ['header', 'footer', 'chrome'] },
  { name: 'CheckoutLayout', file: 'components/layouts/CheckoutLayout.tsx', category: 'layouts', props: [], tags: ['commerce', 'minimal'] },
  // Patterns
  { name: 'NewsCard', file: 'components/patterns/NewsCard.tsx', category: 'patterns', props: ['article', 'variant'], tags: ['article', 'card'] },
  { name: 'PageFAQSection', file: 'components/patterns/PageFAQSection.tsx', category: 'patterns', props: ['items', 'description'], tags: ['faq', 'accordion'] },
  { name: 'NewsletterCTA', file: 'components/patterns/NewsletterCTA.tsx', category: 'patterns', props: [], tags: ['cta', 'marketing'] },
  { name: 'SocialShare', file: 'components/patterns/SocialShare.tsx', category: 'patterns', props: ['url', 'title'], tags: ['social', 'sharing'] },
  // Home
  { name: 'HeroSlider', file: 'components/home/HeroSlider.tsx', category: 'home', props: ['articles'], tags: ['carousel', 'featured'] },
  { name: 'LatestNewsGrid', file: 'components/home/LatestNewsGrid.tsx', category: 'home', props: ['articles'], tags: ['grid', 'article'] },
  { name: 'TrendingBar', file: 'components/home/TrendingBar.tsx', category: 'home', props: ['articles'], tags: ['ticker', 'breaking'] },
  // Parts
  { name: 'Header', file: 'components/parts/Header.tsx', category: 'parts', props: [], tags: ['navigation', 'masthead'] },
  { name: 'Footer', file: 'components/parts/Footer.tsx', category: 'parts', props: [], tags: ['navigation', 'links'] },
  { name: 'MobileMenu', file: 'components/parts/MobileMenu.tsx', category: 'parts', props: ['isOpen', 'onClose'], tags: ['navigation', 'responsive'] },
  { name: 'Breadcrumbs', file: 'components/parts/Breadcrumbs.tsx', category: 'parts', props: ['items'], tags: ['navigation', 'hierarchy'] },
  // Ads
  { name: 'AdMrec', file: 'components/ads/AdMrec.tsx', category: 'ads', props: ['section'], tags: ['advertising', 'slot'] },
  { name: 'LeaderboardAd', file: 'components/ads/LeaderboardAd.tsx', category: 'ads', props: ['section'], tags: ['advertising', 'banner'] },
  { name: 'InFeedAd', file: 'components/ads/InFeedAd.tsx', category: 'ads', props: ['section'], tags: ['advertising', 'native'] },
  // Brand
  { name: 'QuoteSlider', file: 'components/brand-quotes/QuoteSlider.tsx', category: 'brand', props: ['quotes', 'variant'], tags: ['brand', 'testimonial'] },
  { name: 'MarketingGrid', file: 'components/marketing/MarketingGrid.tsx', category: 'brand', props: [], tags: ['marketing', 'social'] },
  // Newsletter
  { name: 'TuesdayNewsletterTemplate', file: 'components/templates/TuesdayNewsletterTemplate.tsx', category: 'templates', props: [], tags: ['email', 'newsletter'] },
  { name: 'FridayNewsletterTemplate', file: 'components/templates/FridayNewsletterTemplate.tsx', category: 'templates', props: [], tags: ['email', 'newsletter'] },
];

export const ComponentBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<ComponentEntry | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [visibleCount, setVisibleCount] = useState(30);

  const filtered = useMemo(() => {
    return COMPONENTS.filter((c) => {
      const matchCategory = activeCategory === 'all' || c.category === activeCategory;
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.tags?.some((tag) => tag.toLowerCase().includes(search.toLowerCase())) ||
        c.props?.some((p) => p.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  // Reset visible count when filters change
  useEffect(() => { setVisibleCount(30); }, [search, activeCategory]);

  const visibleComponents = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: COMPONENTS.length };
    COMPONENTS.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCopyImport = (file: string) => {
    const importPath = `import { ... } from './${file.replace('.tsx', '')}';`;
    copyToClipboard(importPath);
    toast.success(t('common.importCopied'));
  };

  const heroMeta = HERO_META.componentBrowser;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div>
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('stats.components'), value: COMPONENTS.length },
          { label: t('stats.categories'), value: CATEGORIES.length - 1 },
          { label: t('stats.results'), value: filtered.length },
        ]}
        badge={`${COMPONENTS.length} ${t('common.components')}`}
      />

      {/* Search + Stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
          <input
            type="text"
            placeholder={t('cb.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-gray-400 dark:focus:border-white/30"
          />
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-white/40">
          <span>{t('cb.totalComponents')}: <strong className="text-gray-900 dark:text-white">{COMPONENTS.length}</strong></span>
          <span>{filtered.length} {t('common.results')}</span>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center gap-1 text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {showSidebar ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
            <span>{showSidebar ? t('cb.hideSidebar') : t('cb.showSidebar')}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        {showSidebar && (
          <div className="w-56 shrink-0 hidden lg:block">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/30 mb-3">
              {t('common.categories')}
            </h3>
            <nav className="space-y-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                    activeCategory === cat.id
                      ? 'bg-brand-red text-white'
                      : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{t(cat.key)}</span>
                  <span className="text-xs opacity-60">{categoryCounts[cat.id] || 0}</span>
                </button>
              ))}
            </nav>
          </div>
        )}

        {/* Main Grid */}
        <div className="flex-1 min-w-0">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400 dark:text-white/30">
              <Layers size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-bold">{t('cb.noResults')}</p>
              <p className="text-sm mt-1">{t('cb.noResultsHint')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {visibleComponents.map((comp) => (
                <div
                  key={comp.file}
                  onClick={() => setSelectedComponent(selectedComponent?.file === comp.file ? null : comp)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedComponent(selectedComponent?.file === comp.file ? null : comp); } }}
                  className={`text-left bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border rounded-xl p-4 transition-all cursor-pointer ${
                    selectedComponent?.file === comp.file
                      ? 'border-brand-red'
                      : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-900 dark:text-white">{comp.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40 uppercase">
                      {comp.category}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 dark:text-white/30 font-mono mb-3 truncate">{comp.file}</p>
                  {comp.tags && (
                    <div className="flex flex-wrap gap-1">
                      {comp.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-gray-200 dark:bg-white/5 text-gray-400 dark:text-white/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {selectedComponent?.file === comp.file && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-1">{t('cb.filePath')}</p>
                        <button
                          onClick={(e) => { e.stopPropagation(); handleCopyImport(comp.file); }}
                          className="flex items-center gap-2 text-xs font-mono text-brand-red hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Copy size={12} />
                          {comp.file}
                        </button>
                      </div>
                      {comp.props && comp.props.length > 0 && (
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mb-1">{t('cb.propsLabel')}</p>
                          <div className="flex flex-wrap gap-1">
                            {comp.props.map((p) => (
                              <code key={p} className="text-[11px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                                {p}
                              </code>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {visibleCount < filtered.length && (
                <button
                  onClick={() => setVisibleCount(prev => prev + 30)}
                  className="col-span-full py-3 mt-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                >
                  {t('common.showMore') || 'Show more'} ({filtered.length - visibleCount})
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      
      <DevRelatedTools tools={RELATED_TOOLS_MAP.componentBrowser} />
    </div>
  );
};