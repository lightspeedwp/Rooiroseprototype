import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import {
  ChevronDown, ChevronRight, Paintbrush, Eye, AlertTriangle, CheckCircle,
  BookOpen, BarChart3, TrendingUp, Package, Link2
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { DevFilterBar } from '../../components/dev/DevFilterBar';
import { DevStatsBar } from '../../components/dev/DevStatsBar';
import { DevEmptyState } from '../../components/dev/DevEmptyState';
import { WpMarkdownViewer } from '../../components/dev/WpMarkdownViewer';
import { wpAllGuidelines } from '../../data/wpFileLoader';
import {
  type BlockStyleEntry, type BlockStyleCategory,
  getAllBlockStyles, getBlockStyleCategories, getUniqueTargetBlocks,
} from '../../data/blockStylesData';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import { BlockStyleCard } from './block-style-browser/BlockStyleCard';
import { BlockStyleExportPanel } from './block-style-browser/BlockStyleExportPanel';
import { validateJsonStyle, extractPresetRefs } from './block-style-browser/utils';
import { PRESET_TYPE_LABELS, PRESET_CATEGORY_SLUGS } from './block-style-browser/constants';

export const BlockStyleBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const { category } = useParams<{ category?: string }>();

  // State for dynamically loaded data
  const [allBlockStyles, setAllBlockStyles] = useState<BlockStyleEntry[]>([]);
  const [blockStyleCategories, setBlockStyleCategories] = useState<{ key: BlockStyleCategory | 'all'; labelAf: string; labelEn: string; count: number }[]>([]);
  const [uniqueTargetBlocks, setUniqueTargetBlocks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlockStyleCategory | 'all'>('all');
  const [activeBlockType, setActiveBlockType] = useState<string | 'all'>('all');
  const [activeUsage, setActiveUsage] = useState<string | 'all'>('all');
  const [expandedBlocks, setExpandedBlocks] = useState<Set<string>>(new Set());

  // Load all block styles data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setLoadError(null);

        const [styles, categories, blocks] = await Promise.all([
          getAllBlockStyles(),
          getBlockStyleCategories(),
          getUniqueTargetBlocks(),
        ]);

        setAllBlockStyles(styles);
        setBlockStyleCategories(categories);
        setUniqueTargetBlocks(blocks);
      } catch (error) {
        console.error('Failed to load block styles:', error);
        setLoadError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filtered = useMemo(() => {
    let styles = allBlockStyles;
    if (activeCategory !== 'all') styles = styles.filter(s => s.category === activeCategory);
    if (activeBlockType !== 'all') styles = styles.filter(s => s.targetBlock === activeBlockType);
    if (activeUsage !== 'all') {
      styles = styles.filter(s => 
        s.usedIn.some(u => u.toLowerCase().includes(activeUsage.toLowerCase())) ||
        s.patterns.some(p => p.toLowerCase().includes(activeUsage.toLowerCase()))
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      styles = styles.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.label.toLowerCase().includes(q) ||
        s.targetBlock.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.cssClass.toLowerCase().includes(q) ||
        s.usedIn.some(u => u.toLowerCase().includes(q)) ||
        s.patterns.some(p => p.toLowerCase().includes(q))
      );
    }
    return styles;
  }, [allBlockStyles, activeCategory, activeBlockType, activeUsage, search]);

  const grouped = useMemo(() => {
    const map = new Map<string, BlockStyleEntry[]>();
    for (const style of filtered) {
      const key = style.targetBlock;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(style);
    }
    return map;
  }, [filtered]);

  const toggleBlock = (block: string) => {
    setExpandedBlocks(prev => {
      const next = new Set(prev);
      if (next.has(block)) {
        next.delete(block);
      } else {
        next.add(block);
      }
      return next;
    });
  };

  // BSF-009, BSF-010, BSF-011: Statistics
  const statistics = useMemo(() => {
    const validStyles = allBlockStyles.filter(s => validateJsonStyle(s.jsonStyle).length === 0).length;
    const stylesWithWarnings = allBlockStyles.filter(s => validateJsonStyle(s.jsonStyle).length > 0).length;
    
    const allPresetRefs = allBlockStyles.flatMap(s => extractPresetRefs(s.jsonStyle));
    const totalPresetRefs = allPresetRefs.length;

    // Count preset usage
    const presetUsageMap = new Map<string, number>();
    for (const ref of allPresetRefs) {
      const key = `${ref.type}:${ref.slug}`;
      presetUsageMap.set(key, (presetUsageMap.get(key) || 0) + 1);
    }

    // Top 10 presets
    const topPresets = Array.from(presetUsageMap.entries())
      .map(([key, count]) => {
        const [type, slug] = key.split(':');
        return { type, slug, count };
      })
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Presets by type
    const presetsByType = new Map<string, number>();
    for (const ref of allPresetRefs) {
      presetsByType.set(ref.type, (presetsByType.get(ref.type) || 0) + 1);
    }

    // Block coverage
    const totalBlocks = uniqueTargetBlocks.length;
    const blocksWithCustomStyles = new Set(allBlockStyles.map(s => s.targetBlock)).size;
    const blocksWithOnlyDefaults = totalBlocks - blocksWithCustomStyles;

    return {
      validStyles,
      stylesWithWarnings,
      totalPresetRefs,
      topPresets,
      presetsByType: Array.from(presetsByType.entries()).sort((a, b) => b[1] - a[1]),
      totalBlocks,
      blocksWithCustomStyles,
      blocksWithOnlyDefaults,
    };
  }, [allBlockStyles, uniqueTargetBlocks]);

  const heroMeta = HERO_META.blockStyleBrowser;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-white/50">
        {isAf ? 'Laai blok-style...' : 'Loading block styles...'}
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-2">{isAf ? 'Kon nie blok-style laai nie' : 'Failed to load block styles'}</p>
          <p className="text-sm text-gray-500 dark:text-white/50">{loadError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-0">
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={resolveHeroMeta(heroMeta, locale).title}
        description={resolveHeroMeta(heroMeta, locale).description}
        stats={[
          { label: t('bsb.totalStyles'), value: allBlockStyles.length },
          { label: t('bsb.blockTypes'), value: uniqueTargetBlocks.length },
          { label: t('bsb.defaults'), value: allBlockStyles.filter(s => s.isDefault).length },
        ]}
        badge={`${allBlockStyles.length} ${t('bsb.stylesLower')}`}
      />

      {/* Badge Legend */}
      <div className="mb-5 rounded-lg bg-blue-500/5 border border-blue-500/20 p-3">
        <div className="flex items-start gap-2">
          <Eye size={14} className="text-blue-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <p className="text-xs text-gray-700 dark:text-white/70 leading-relaxed">
              {isAf 
                ? 'Elke blok-styl het merkers wat sy kategorie, status, en geldigheid aandui:' 
                : 'Each block style has badges indicating its category, status, and validity:'}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-blue-500/20 text-blue-300">core</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-300">woocommerce</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-pink-500/20 text-pink-300">third-party</span>
              <span className="text-[10px] text-gray-500 dark:text-white/40 self-center">—</span>
              <span className="text-[10px] text-gray-600 dark:text-white/50 self-center">
                {isAf ? 'Blok kategorie' : 'Block categories'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/20 text-green-300">default</span>
              <span className="text-[10px] text-gray-500 dark:text-white/40 self-center">—</span>
              <span className="text-[10px] text-gray-600 dark:text-white/50 self-center">
                {isAf ? 'Verstek styl vir hierdie blok tipe' : 'Default style for this block type'}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/10 text-green-400 inline-flex items-center gap-1">
                <CheckCircle size={9} />{isAf ? 'geldig' : 'valid'}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400 inline-flex items-center gap-1">
                <AlertTriangle size={9} />{isAf ? 'waarskuwings' : 'warnings'}
              </span>
              <span className="text-[10px] text-gray-500 dark:text-white/40 self-center">—</span>
              <span className="text-[10px] text-gray-600 dark:text-white/50 self-center">
                {isAf ? 'Preset nakoming (geldige style gebruik preset verwysings, waarskuwings het hardgekodeerde waardes)' : 'Preset compliance (valid styles use preset references, warnings have hardcoded values)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="space-y-3 mb-5">
        <DevSearchBar
          value={search}
          onChange={setSearch}
          placeholder={t('bsb.searchPlaceholder')}
        />
        <DevFilterBar
          options={blockStyleCategories.filter(cat => cat.key !== 'all').map(cat => ({
            key: cat.key,
            label: isAf ? cat.labelAf : cat.labelEn,
            count: cat.count,
          }))}
          active={activeCategory}
          onSelect={(key) => setActiveCategory(key as BlockStyleCategory | 'all')}
          allLabel={isAf ? 'Almal' : 'All'}
          allCount={allBlockStyles.length}
        />
        
        {/* New Filters: Block Type & Usage */}
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5 ml-1">
              {isAf ? 'Filter volgens Bloktipe' : 'Filter by Block Type'}
            </label>
            <select
              value={activeBlockType}
              onChange={e => setActiveBlockType(e.target.value)}
              className="w-full px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/40"
            >
              <option value="all">{isAf ? 'Alle Bloktipes' : 'All Block Types'}</option>
              {uniqueTargetBlocks.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5 ml-1">
              {isAf ? 'Filter volgens Gebruik' : 'Filter by Usage'}
            </label>
            <select
              value={activeUsage}
              onChange={e => setActiveUsage(e.target.value)}
              className="w-full px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/40"
            >
              <option value="all">{isAf ? 'Alle Gebruik' : 'All Usage'}</option>
              <option value="template">{isAf ? 'Templates' : 'Templates'}</option>
              <option value="part">{isAf ? 'Template Parts' : 'Template Parts'}</option>
              <option value="pattern">{isAf ? 'Patrone' : 'Patterns'}</option>
            </select>
          </div>
        </div>

        <DevStatsBar
          filtered={filtered.length}
          total={allBlockStyles.length}
          itemLabel={t('bsb.stylesLower')}
        />
      </div>

      {/* BSF-009, BSF-010, BSF-011: Statistics Panel */}
      <details className="mb-5 rounded-lg bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 overflow-hidden">
        <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-blue-500/5 transition-colors text-sm text-gray-700 dark:text-white/70 select-none">
          <BarChart3 size={16} className="text-blue-500 shrink-0" />
          <span className="font-medium">{isAf ? 'Statistieke & Analise' : 'Statistics & Analytics'}</span>
          <span className="ml-auto text-[10px] text-gray-400 dark:text-white/30 bg-gray-200/50 dark:bg-white/10 px-2 py-0.5 rounded">
            {isAf ? 'Klik om uit te brei' : 'Click to expand'}
          </span>
        </summary>
        <div className="p-4 space-y-4 bg-white/30 dark:bg-white/[0.02]">
          {/* BSF-009: Summary Stats */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/40 mb-2 flex items-center gap-1">
              <Package size={12} />{isAf ? 'Opsomming' : 'Summary'}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{allBlockStyles.length}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Totale Style' : 'Total Styles'}</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{statistics.validStyles}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Geldige Style' : 'Valid Styles'}</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{statistics.stylesWithWarnings}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Met Waarskuwings' : 'With Warnings'}</div>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{statistics.totalPresetRefs}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Preset Verwysings' : 'Preset References'}</div>
              </div>
            </div>
          </div>

          {/* BSF-010: Preset Usage Heatmap */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/40 mb-2 flex items-center gap-1">
              <TrendingUp size={12} />{isAf ? 'Mees Gebruikte Presets' : 'Top Preset Usage'}
            </h4>
            <div className="space-y-2">
              {statistics.topPresets.map((preset, i) => {
                const labelInfo = PRESET_TYPE_LABELS[preset.type] || PRESET_TYPE_LABELS.other;
                const percentage = (preset.count / statistics.totalPresetRefs) * 100;
                return (
                  <div key={`${preset.type}-${preset.slug}`} className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 dark:text-white/30 w-4">{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[9px] px-1.5 py-0.5 rounded ${labelInfo.color} bg-gray-100 dark:bg-white/5`}>
                            {isAf ? labelInfo.af : labelInfo.en}
                          </span>
                          <Link
                            to={`/ontwikkelaar/voorinstellings/${PRESET_CATEGORY_SLUGS[preset.type] || ''}`}
                            className="text-[11px] font-mono text-gray-700 dark:text-white/70 hover:text-blue-500 transition-colors"
                          >
                            {preset.slug}
                          </Link>
                        </div>
                        <span className="text-[10px] text-gray-500 dark:text-white/40">{preset.count}× ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500/60 transition-all"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Preset Type Breakdown */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/40 mb-2">{isAf ? 'Presets volgens Tipe' : 'Presets by Type'}</h4>
            <div className="flex flex-wrap gap-2">
              {statistics.presetsByType.map(([type, count]) => {
                const labelInfo = PRESET_TYPE_LABELS[type] || PRESET_TYPE_LABELS.other;
                return (
                  <Link
                    key={type}
                    to={`/ontwikkelaar/voorinstellings/${PRESET_CATEGORY_SLUGS[type] || ''}`}
                    className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400/50 hover:bg-blue-500/5 transition-colors inline-flex items-center gap-2"
                  >
                    <span className={`text-[10px] ${labelInfo.color}`}>{isAf ? labelInfo.af : labelInfo.en}</span>
                    <span className="text-xs text-gray-500 dark:text-white/40">{count}×</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* BSF-011: Coverage Report */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/40 mb-2">{isAf ? 'Blok Dekking' : 'Block Coverage'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-xl font-bold text-gray-800 dark:text-white">{statistics.totalBlocks}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Totale Bloktipes' : 'Total Block Types'}</div>
              </div>
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="text-xl font-bold text-green-600 dark:text-green-400">{statistics.blocksWithCustomStyles}</div>
                <div className="text-[10px] text-green-700 dark:text-green-400/70 uppercase tracking-wider mt-1">{isAf ? 'Met Aangepaste Style' : 'With Custom Styles'}</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                <div className="text-xl font-bold text-gray-600 dark:text-gray-400">{statistics.blocksWithOnlyDefaults}</div>
                <div className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider mt-1">{isAf ? 'Slegs Verstek' : 'Default Only'}</div>
              </div>
            </div>
          </div>
        </div>
      </details>

      {/* BSF-012, BSF-013, BSF-014: Export Buttons */}
      <BlockStyleExportPanel
        allBlockStyles={allBlockStyles}
        filtered={filtered}
        activeCategory={activeCategory}
        activeBlockType={activeBlockType}
        isAf={isAf}
      />

      {/* Block Groups */}
      <div className="space-y-3">
        {Array.from(grouped.entries()).map(([block, styles]) => {
          const isOpen = expandedBlocks.has(block);
          return (
            <div key={block} className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleBlock(block)}
                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-white/[0.03] hover:bg-gray-100 dark:hover:bg-white/[0.05] transition-colors text-left"
              >
                {isOpen ? <ChevronDown size={14} className="text-gray-400 dark:text-white/30 shrink-0" /> : <ChevronRight size={14} className="text-gray-400 dark:text-white/30 shrink-0" />}
                <Paintbrush size={14} className="text-blue-400 shrink-0" />
                <span className="text-sm text-gray-800 dark:text-white font-mono">{block}</span>
                <span className="ml-auto text-[10px] text-gray-400 dark:text-white/30 bg-gray-200 dark:bg-white/10 px-2 py-0.5 rounded">{styles.length} {t('bsb.stylesLower')}</span>
              </button>

              {isOpen && (
                <div className="divide-y divide-gray-200 dark:divide-white/10">
                  {styles.map(style => (
                    <BlockStyleCard key={style.id} style={style} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <DevEmptyState
          title={t('bsb.noStyles')}
          resetLabel={t('common.clearFilters')}
          onReset={() => {
            setSearch('');
            setActiveCategory('all');
            setActiveBlockType('all');
            setActiveUsage('all');
          }}
        />
      )}

      {/* Guideline panel — link-first fallback (GC-041) */}
      <details className="mt-8 mb-2 bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-xl overflow-hidden">
        <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm text-gray-700 dark:text-white/60 select-none">
          <BookOpen size={14} className="text-pink-500 shrink-0" />
          <span>{isAf ? 'Blok-Styl Riglyne' : 'Block Style Guidelines'}</span>
        </summary>
        <div>
          <WpMarkdownViewer
            glob={wpAllGuidelines}
            filename="block-styles.md"
            label={isAf ? 'Blok-Styl Riglyne' : 'Block Style Guidelines'}
            maxHeight={400}
            locale={locale}
          />
        </div>
      </details>

      <DevRelatedTools tools={RELATED_TOOLS_MAP.blockStyleBrowser} />
    </div>
    </div>
  );
};
