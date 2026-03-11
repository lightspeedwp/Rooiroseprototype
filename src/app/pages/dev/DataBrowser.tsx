import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Search, Database, Copy, FileCode, ChevronDown, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';

interface DataFileEntry {
  file: string;
  description: string;
  exports: string[];
  records?: number;
  shape: string;
  typed: boolean;
}

const DATA_FILES: DataFileEntry[] = [
  { file: 'articles.ts', description: 'Featured and trending articles', exports: ['FEATURED_ARTICLES', 'TRENDING_ARTICLES'], records: 25, shape: 'Article[]', typed: true },
  { file: 'categoryArticles.ts', description: 'Category-specific article collections', exports: ['CATEGORY_ARTICLES'], records: 80, shape: 'Record<string, Article[]>', typed: true },
  { file: 'articleContent.ts', description: 'Full article body content', exports: ['ARTICLE_CONTENT'], records: 5, shape: 'ArticleContent[]', typed: true },
  { file: 'about.ts', description: 'About page content', exports: ['ABOUT_CONTENT'], records: 1, shape: 'AboutContent', typed: true },
  { file: 'ads.ts', description: 'Ad slot configuration', exports: ['AD_SLOTS'], records: 6, shape: 'AdSlot[]', typed: true },
  { file: 'advertising.ts', description: 'Advertise page data', exports: ['ADVERTISING_DATA'], records: 1, shape: 'AdvertisingData', typed: true },
  { file: 'breakingNews.ts', description: 'Breaking news ticker items', exports: ['BREAKING_NEWS'], records: 5, shape: 'BreakingNews[]', typed: true },
  { file: 'comments.ts', description: 'Article comment data', exports: ['COMMENTS'], records: 12, shape: 'Comment[]', typed: true },
  { file: 'competitions.ts', description: 'Competition entries', exports: ['COMPETITIONS'], records: 6, shape: 'Competition[]', typed: true },
  { file: 'contact.ts', description: 'Contact page data', exports: ['CONTACT_DATA'], records: 1, shape: 'ContactData', typed: true },
  { file: 'cookieBanner.ts', description: 'Cookie consent config', exports: ['COOKIE_BANNER_CONFIG'], records: 1, shape: 'CookieConfig', typed: true },
  { file: 'designTokens.ts', description: 'V2 design system tokens', exports: ['COLOR_TOKENS', 'TYPOGRAPHY_TOKENS', 'SPACING_TOKENS', 'RADIUS_TOKENS', 'SHADOW_TOKENS', 'BREAKPOINT_TOKENS', 'LAYOUT_TOKENS', 'FONT_TOKENS'], records: 50, shape: 'DesignTokens', typed: true },
  { file: 'devTranslations.ts', description: 'Dev tools bilingual translations', exports: ['getTranslation', 'createTranslator'], records: 450, shape: 'TranslationMap', typed: true },
  { file: 'eEditions.ts', description: 'E-edition archive data', exports: ['E_EDITIONS', 'FEATURED_EDITION'], records: 24, shape: 'EEdition[]', typed: true },
  { file: 'events.ts', description: 'Event listings', exports: ['EVENTS'], records: 10, shape: 'Event[]', typed: true },
  { file: 'header.ts', description: 'Header navigation config', exports: ['HEADER_NAV'], records: 1, shape: 'HeaderNav', typed: true },
  { file: 'heroImages.ts', description: 'Hero slider images', exports: ['HERO_IMAGES'], records: 5, shape: 'HeroImage[]', typed: true },
  { file: 'home.ts', description: 'Homepage section configuration', exports: ['HOME_SECTIONS'], records: 1, shape: 'HomeSections', typed: true },
  { file: 'marketing.ts', description: 'Social post marketing grid data', exports: ['MARKETING_POSTS'], records: 6, shape: 'MarketingPost[]', typed: true },
  { file: 'mockUserAccess.ts', description: 'E-edition mock ownership data', exports: ['MOCK_USER_ACCESS'], records: 1, shape: 'MockUserAccess', typed: true },
  { file: 'multimedia.ts', description: 'Multimedia archive', exports: ['MULTIMEDIA_ITEMS'], records: 12, shape: 'MultimediaItem[]', typed: true },
  { file: 'navigation.ts', description: 'Site-wide navigation & footer', exports: ['MAIN_NAV', 'FOOTER_LINK_COLUMNS', 'FOOTER_LEGAL_LINKS', 'SITEMAP_DEV_TOOLS'], records: 1, shape: 'NavigationConfig', typed: true },
  { file: 'newsletter.ts', description: 'Newsletter content', exports: ['NEWSLETTER_DATA'], records: 2, shape: 'NewsletterData', typed: true },
  { file: 'obituaries.ts', description: 'Obituary listings', exports: ['OBITUARIES'], records: 8, shape: 'Obituary[]', typed: true },
  { file: 'pageFaqs.ts', description: 'Page-level FAQ collections', exports: ['HOME_FAQS', 'EEDITIONS_FAQS', 'FOUNDATIONS_FAQS'], records: 40, shape: 'FAQ[]', typed: true },
  { file: 'policies.ts', description: 'Policy page content', exports: ['POLICIES'], records: 11, shape: 'Policy[]', typed: true },
  { file: 'search.ts', description: 'Search results mock data', exports: ['SEARCH_RESULTS'], records: 15, shape: 'SearchResult[]', typed: true },
  { file: 'sitemap.ts', description: 'Sitemap page data', exports: ['SITEMAP_PAGES', 'SITEMAP_CATEGORIES'], records: 60, shape: 'SitemapData', typed: true },
  { file: 'sponsors.ts', description: 'Sponsor data', exports: ['SPONSORS'], records: 6, shape: 'Sponsor[]', typed: true },
  { file: 'subscriptions.ts', description: 'Subscription plans and pricing', exports: ['SUBSCRIPTION_PLANS'], records: 4, shape: 'SubscriptionPlan[]', typed: true },
  { file: 'taxonomies.ts', description: 'Category and tag taxonomy definitions', exports: ['ARTICLE_CATEGORIES', 'EVENT_CATEGORIES'], records: 15, shape: 'Taxonomy[]', typed: true },
  { file: 'team.ts', description: 'Editorial team members', exports: ['TEAM_MEMBERS'], records: 13, shape: 'TeamMember[]', typed: true },
  { file: 'traffic.ts', description: 'Traffic page data', exports: ['TRAFFIC_DATA'], records: 5, shape: 'TrafficData', typed: true },
  { file: 'trendingArticles.ts', description: 'Trending sidebar articles', exports: ['TRENDING'], records: 10, shape: 'Article[]', typed: true },
  { file: 'weather.ts', description: 'Weather forecast data', exports: ['WEATHER_DATA'], records: 7, shape: 'WeatherData', typed: true },
];

export const DataBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const [search, setSearch] = useState('');
  const [expandedFile, setExpandedFile] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search) return DATA_FILES;
    const q = search.toLowerCase();
    return DATA_FILES.filter(
      (f) =>
        f.file.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.exports.some((e) => e.toLowerCase().includes(q)) ||
        f.shape.toLowerCase().includes(q)
    );
  }, [search]);

  const totalRecords = useMemo(() => DATA_FILES.reduce((sum, f) => sum + (f.records || 0), 0), []);
  const typedCount = useMemo(() => DATA_FILES.filter((f) => f.typed).length, []);

  const handleCopyImport = (file: string, exportName: string) => {
    const importStr = `import { ${exportName} } from '../data/${file.replace('.ts', '')}';`;
    copyToClipboard(importStr);
    toast.success(`${t('common.copiedPrefix')} ${exportName}`);
  };

  const heroMeta = HERO_META.dataBrowser;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div>
      <DevToolHero
        icon={hero.icon}
        iconColor={hero.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('stats.dataFiles'), value: DATA_FILES.length },
          { label: t('stats.records'), value: `${totalRecords}+` },
          { label: t('stats.typed'), value: typedCount },
        ]}
        badge={`${DATA_FILES.length} ${t('stats.files')}`}
      />

      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
        <input
          type="text"
          placeholder={t('common.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-gray-400 dark:focus:border-white/30"
        />
      </div>

      {/* File List */}
      <div className="space-y-2">
        {filtered.map((dataFile) => (
          <div
            key={dataFile.file}
            className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setExpandedFile(expandedFile === dataFile.file ? null : dataFile.file)}
              className="w-full text-left px-5 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <FileCode size={16} className="text-brand-red shrink-0" />
                <div className="min-w-0">
                  <span className="font-mono text-sm text-gray-900 dark:text-white">{dataFile.file}</span>
                  <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">{dataFile.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0 ml-4">
                {dataFile.records && (
                  <span className="text-xs text-gray-400 dark:text-white/30">{dataFile.records} {t('db.records')}</span>
                )}
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40 font-mono">
                  {dataFile.shape}
                </span>
                {expandedFile === dataFile.file ? <ChevronDown size={14} className="text-gray-400 dark:text-white/30" /> : <ChevronRight size={14} className="text-gray-400 dark:text-white/30" />}
              </div>
            </button>
            {expandedFile === dataFile.file && (
              <div className="px-5 pb-4 border-t border-gray-100 dark:border-white/5">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mt-3 mb-2">{t('db.exportsSection')}</p>
                <div className="flex flex-wrap gap-2">
                  {dataFile.exports.map((exp) => (
                    <button
                      key={exp}
                      onClick={() => handleCopyImport(dataFile.file, exp)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs font-mono text-brand-red hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Copy size={10} />
                      {exp}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-white/30 mt-3 mb-1">{t('db.shape')}</p>
                <code className="text-xs text-gray-600 dark:text-white/60">{dataFile.shape}</code>
              </div>
            )}
          </div>
        ))}
      </div>

      <DevRelatedTools tools={RELATED_TOOLS_MAP.dataBrowser} />
    </div>
  );
};