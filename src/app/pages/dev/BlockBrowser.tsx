import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Blocks } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import {
  ALL_BLOCKS,
  type BlockDomain,
  type BlockCategory,
  getCategoriesForDomain,
  getBlockStats,
} from '../../data/blockBrowserData';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import { BlockDomainTabs } from './BlockBrowser/BlockDomainTabs';
import { BlockCategorySearch } from './BlockBrowser/BlockCategorySearch';
import { BlockListItem } from './BlockBrowser/BlockListItem';
import { BlockSummaryStats } from './BlockBrowser/BlockSummaryStats';

export const BlockBrowser = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);
  const { domain: urlDomain } = useParams<{ domain?: string }>();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeDomain, setActiveDomain] = useState<BlockDomain | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<BlockCategory | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredBlockId, setHoveredBlockId] = useState<string | null>(null);

  // Sync URL → state
  useEffect(() => {
    if (urlDomain && urlDomain !== 'all') {
      const validDomains: string[] = ['react', 'core', 'woocommerce', 'third-party'];
      if (validDomains.includes(urlDomain)) {
        setActiveDomain(urlDomain as BlockDomain);
      }
    } else {
      setActiveDomain('all');
    }
  }, [urlDomain]);

  // ─── Helper Functions ───────────────────────────────────────────────────
  const handleDomainChange = useCallback((domain: BlockDomain | 'all') => {
    setActiveDomain(domain);
    setActiveCategory('all');
    setExpandedId(null); // Collapse any expanded blocks
    if (domain === 'all') {
      navigate('/ontwikkelaar/blokke', { replace: true });
    } else {
      navigate(`/ontwikkelaar/blokke/${domain}`, { replace: true });
    }
  }, [navigate]);

  const handleCategoryChange = useCallback((category: BlockCategory | 'all') => {
    setActiveCategory(category);
    setExpandedId(null); // Collapse any expanded blocks
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setExpandedId(null); // Collapse any expanded blocks when searching
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearch('');
    setExpandedId(null);
  }, []);

  const toggleBlockExpansion = useCallback((blockId: string) => {
    setExpandedId(prev => prev === blockId ? null : blockId);
  }, []);

  // ─── Filtering ──────────────────────────────────────────────────────────
  const filteredBlocks = useMemo(() => {
    let result = ALL_BLOCKS;
    if (activeDomain !== 'all') {
      result = result.filter(b => b.domain === activeDomain);
    }
    if (activeCategory !== 'all') {
      result = result.filter(b => b.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        (b.wpBlock || '').toLowerCase().includes(q) ||
        (b.reactFile || '').toLowerCase().includes(q) ||
        b.patterns.some(p => p.toLowerCase().includes(q)) ||
        b.blockStyles.some(s => s.toLowerCase().includes(q)) ||
        b.sectionStyles.some(s => s.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeDomain, activeCategory, search]);

  // Available categories for current domain
  const availableCategories = useMemo(() => {
    if (activeDomain === 'all') {
      return [...new Set(ALL_BLOCKS.map(b => b.category))];
    }
    return getCategoriesForDomain(activeDomain);
  }, [activeDomain]);

  const stats = useMemo(() => getBlockStats(), []);

  // ─── Hero ───────────────────────────────────────────────────────────────
  const heroMeta = HERO_META.blockBrowser;
  const hero = heroMeta ? resolveHeroMeta(heroMeta, locale) : null;
  const relatedTools = RELATED_TOOLS_MAP.blockBrowser || [];

  return (
    <div className="min-h-screen">
      {hero && (
        <DevToolHero
          title={hero.title}
          description={hero.description}
          icon={hero.icon}
          iconColor={hero.iconColor}
          badge={hero.badge}
          stats={[
            { label: isAf ? 'Totaal' : 'Total', value: stats.total },
            { label: 'React', value: stats.react },
            { label: isAf ? 'WP Kern' : 'WP Core', value: stats.core },
            { label: 'WooCommerce', value: stats.woocommerce },
            { label: isAf ? 'Derdeparty' : 'Third-Party', value: stats.thirdParty },
          ]}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ─── Domain Filter Tabs ─────────────────────────────────────── */}
        <BlockDomainTabs
          activeDomain={activeDomain}
          onDomainChange={handleDomainChange}
          isAf={isAf}
          totalCount={stats.total}
        />

        {/* ─── Category Filter + Search ─────────────────────────────── */}
        <BlockCategorySearch
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          availableCategories={availableCategories}
          search={search}
          onSearchChange={handleSearchChange}
          onSearchClear={handleSearchClear}
          isAf={isAf}
        />

        {/* ─── Results count ──────────────────────────────────────── */}
        <p className="text-neutral-500 dark:text-white/40 mb-4 text-sm">
          {filteredBlocks.length} {isAf ? 'blokke gevind' : 'blocks found'}
          {search && <span className="ml-1">({isAf ? 'gefiltreer' : 'filtered'})</span>}
        </p>

        {/* ─── Block List ─────────────────────────────────────────── */}
        <div className="space-y-2">
          {filteredBlocks.map(block => (
            <BlockListItem
              key={block.id}
              block={block}
              isExpanded={expandedId === block.id}
              isHovered={hoveredBlockId === block.id}
              onToggleExpansion={toggleBlockExpansion}
              onMouseEnter={() => setHoveredBlockId(block.id)}
              onMouseLeave={() => setHoveredBlockId(null)}
              isAf={isAf}
            />
          ))}

          {filteredBlocks.length === 0 && (
            <div className="text-center py-16 text-neutral-400 dark:text-white/30">
              <Blocks size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium mb-1">{isAf ? 'Geen blokke gevind nie.' : 'No blocks found.'}</p>
              <p className="text-sm">{isAf ? 'Probeer \'n ander soekterm of filter.' : 'Try a different search term or filter.'}</p>
            </div>
          )}
        </div>

        {/* ─── Summary Stats Panel ────────────────────────────────── */}
        <BlockSummaryStats isAf={isAf} />

        {/* ─── Related Tools ──────────────────────────────────────── */}
        <DevRelatedTools tools={relatedTools} locale={locale} className="mt-12" />
      </div>
    </div>
  );
};
