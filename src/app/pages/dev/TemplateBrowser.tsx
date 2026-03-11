import React, { useState, useMemo, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import {
  Copy, Check, FileCode, Layers, Link2,
  ChevronDown, ChevronRight, LayoutDashboard, Puzzle, Tag,
  LayoutTemplate, LayoutGrid, Code, BookOpen, Info
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import {
  TEMPLATES,
  TEMPLATE_CATEGORIES,
  type TemplateEntry,
  type TemplateCategory,
} from '../../data/templateBrowserData';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { WpCodeViewer } from '../../components/dev/WpCodeViewer';
import { WpMarkdownViewer } from '../../components/dev/WpMarkdownViewer';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { DevFilterBar } from '../../components/dev/DevFilterBar';
import { DevEmptyState } from '../../components/dev/DevEmptyState';
import { wpTemplates, wpAllGuidelines } from '../../data/wpFileLoader';
import { RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { useDiskFileStats } from '../../hooks/useDiskFileStats';
import { DiskStatsPanel } from '../../components/dev/DiskStatsPanel';
import { ALL_SECTION_STYLES } from '../../data/sectionStylesData';

const PRIORITY_COLORS: Record<string, string> = {
  P0: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  P1: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  P2: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  P3: 'bg-gray-100 dark:bg-gray-500/20 text-gray-600 dark:text-gray-300',
};

const CAT_COLORS: Record<TemplateCategory, string> = {
  standard: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  archive: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300',
  single: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300',
  page: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  taxonomy: 'bg-teal-100 dark:bg-teal-500/20 text-teal-600 dark:text-teal-300',
  special: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
};

export const TemplateBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const { category: urlCategory } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | 'all'>('all');
  const [activeSectionStyle, setActiveSectionStyle] = useState<string | 'all'>('all');
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<string, 'info' | 'code' | 'guideline'>>({});

  const { loadStats, getStats, isLoading } = useDiskFileStats(wpTemplates);

  // Sync URL → state on mount/URL change
  React.useEffect(() => {
    if (urlCategory && urlCategory !== 'all') {
      // Validate category is valid
      const isValidCategory = TEMPLATE_CATEGORIES.some(c => c.key === urlCategory);
      if (isValidCategory) {
        setActiveCategory(urlCategory as TemplateCategory);
      }
    } else {
      setActiveCategory('all');
    }
  }, [urlCategory]);

  // Update category with URL sync
  const handleCategoryChange = (cat: TemplateCategory | 'all') => {
    setActiveCategory(cat);
    // Update URL
    if (cat === 'all') {
      navigate('/ontwikkelaar/sjablone', { replace: true });
    } else {
      navigate(`/ontwikkelaar/sjablone/${cat}`, { replace: true });
    }
  };

  // Build reverse maps: template filename → section styles / block styles
  const templateToSectionStyles = useMemo(() => {
    const map = new Map<string, typeof ALL_SECTION_STYLES>();
    for (const ss of ALL_SECTION_STYLES) {
      for (const tf of ss.templates) {
        const existing = map.get(tf) || [];
        existing.push(ss);
        map.set(tf, existing);
      }
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let templates = TEMPLATES;
    if (activeCategory !== 'all') templates = templates.filter(t => t.category === activeCategory);
    
    // Filter by Section Style usage
    if (activeSectionStyle !== 'all') {
      templates = templates.filter(t => {
        const styles = templateToSectionStyles.get(t.filename) || [];
        return styles.some(s => s.name === activeSectionStyle);
      });
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      templates = templates.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.nameAf.toLowerCase().includes(q) ||
        t.filename.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.reactRoutes.some(r => r.toLowerCase().includes(q)) ||
        t.reactComponents.some(c => c.toLowerCase().includes(q)) ||
        t.patterns.some(p => p.toLowerCase().includes(q)) ||
        t.templateParts.some(p => p.toLowerCase().includes(q))
      );
    }
    return templates;
  }, [activeCategory, activeSectionStyle, search, templateToSectionStyles]);

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  }, []);

  return (
    <div>
      {/* Hero */}
      <DevToolHero
        icon={LayoutDashboard}
        iconColor="bg-indigo-500"
        title={t('tb.title')}
        description={isAf
          ? 'Volledige verwysing vir alle WordPress FSE templates — hiërargie, patroonsamestelling, React roete kruisverwysing, en kode-uitvoer.'
          : 'Complete reference for all WordPress FSE templates — hierarchy, pattern composition, React route cross-reference, and code export.'
        }
        stats={TEMPLATE_CATEGORIES.filter(c => c.key !== 'all').map(cat => ({
          label: isAf ? cat.labelAf : cat.labelEn,
          value: cat.count,
        }))}
      />

      {/* Search + Filters */}
      <div className="space-y-3 mb-5">
        <DevSearchBar
          value={search}
          onChange={setSearch}
          placeholder={t('tb.searchPlaceholder')}
        />
        <DevFilterBar
          options={TEMPLATE_CATEGORIES.filter(c => c.key !== 'all').map(cat => ({
            key: cat.key,
            label: isAf ? cat.labelAf : cat.labelEn,
            count: cat.count,
          }))}
          active={activeCategory}
          onSelect={(key) => handleCategoryChange(key as TemplateCategory | 'all')}
          allLabel={isAf ? 'Almal' : 'All'}
          allCount={TEMPLATES.length}
        />
        
        {/* New Filter: Section Style Usage */}
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5 ml-1">
            {isAf ? 'Filter volgens Afdeling-styl' : 'Filter by Section Style'}
          </label>
          <select
            value={activeSectionStyle}
            onChange={e => setActiveSectionStyle(e.target.value)}
            className="w-full md:w-64 px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/40"
          >
            <option value="all">{isAf ? 'Alle Afdeling-style' : 'All Section Styles'}</option>
            {ALL_SECTION_STYLES.map(s => (
              <option key={s.id} value={s.name}>{s.name} ({isAf ? s.label : s.labelEn})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Template Cards */}
      <div className="space-y-2">
        {filtered.map(tmpl => {
          const isOpen = expandedTemplate === tmpl.id;
          return (
            <div key={tmpl.id} className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedTemplate(isOpen ? null : tmpl.id)}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors text-left"
              >
                {isOpen ? <ChevronDown size={14} className="text-gray-400 dark:text-white/30 shrink-0" /> : <ChevronRight size={14} className="text-gray-400 dark:text-white/30 shrink-0" />}
                <LayoutDashboard size={14} className="text-blue-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-800 dark:text-white font-mono">{tmpl.filename}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] ${PRIORITY_COLORS[tmpl.priority]}`}>{tmpl.priority}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] ${CAT_COLORS[tmpl.category]}`}>{tmpl.category}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5 truncate">{isAf ? tmpl.nameAf : tmpl.name}</p>
                </div>
                <span className="text-[10px] text-gray-400 dark:text-white/30 shrink-0">{tmpl.patterns.length} {t('tb.patternsLower')}</span>
              </button>

              {isOpen && (() => {
                // Trigger disk stats load
                loadStats(tmpl.filename);
                const diskStats = getStats(tmpl.filename);
                const diskLoading = isLoading(tmpl.filename);
                const sectionStyles = templateToSectionStyles.get(tmpl.filename) || [];
                const activeTab = activeTabs[tmpl.id] || 'info';

                return (
                <div className="border-t border-gray-200 dark:border-white/10">
                  {/* Tab bar */}
                  <div className="flex items-center border-b border-gray-200 dark:border-white/10 px-4 bg-gray-50/50 dark:bg-white/[0.02]">
                    {[
                      { key: 'info' as const, label: t('pb.info'), icon: Info },
                      { key: 'code' as const, label: isAf ? 'Blok Kode' : 'Block Code', icon: Code },
                      { key: 'guideline' as const, label: isAf ? 'Riglyn' : 'Guideline', icon: BookOpen },
                    ].map(tab => (
                      <button key={tab.key} onClick={() => setActiveTabs(prev => ({ ...prev, [tmpl.id]: tab.key }))}
                        className={`flex items-center gap-1.5 px-3 py-2 text-xs border-b-2 transition-colors ${
                          activeTab === tab.key
                            ? 'border-brand-red text-gray-900 dark:text-white'
                            : 'border-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
                        }`}>
                        <tab.icon size={12} />
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 space-y-4">
                    {activeTab === 'info' && (
                      <>
                        <p className="text-xs text-gray-600 dark:text-white/60 leading-relaxed">{tmpl.description}</p>
                        <p className="text-[10px] text-gray-400 dark:text-white/30 italic flex items-center gap-1">
                          <Tag size={9} /> {tmpl.hierarchyNote}
                        </p>

                        {/* Disk File Analysis */}
                        <DiskStatsPanel stats={diskStats} loading={diskLoading} isAf={isAf} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* React Routes */}
                          <div>
                            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                              <Link2 size={9} /> React {t('tb.routes')}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {tmpl.reactRoutes.map(route => (
                                <Link key={route} to="/ontwikkelaar/roetes" className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-mono hover:bg-green-200 dark:hover:bg-green-500/20 transition-colors">
                                  {route}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* React Components */}
                          <div>
                            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                              <Layers size={9} /> {t('tb.components')}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {tmpl.reactComponents.map(comp => (
                                <Link key={comp} to="/ontwikkelaar/komponente" className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-colors inline-flex items-center gap-1">
                                  <FileCode size={8} />{comp}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Template Parts */}
                          <div>
                            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                              <Puzzle size={9} /> Template Parts
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {tmpl.templateParts.map(part => (
                                <Link key={part} to="/ontwikkelaar/sjablone-onderdeel" className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono hover:bg-purple-200 dark:hover:bg-purple-500/20 transition-colors inline-flex items-center gap-1">
                                  <Puzzle size={8} />{part}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Patterns */}
                          {tmpl.patterns.length > 0 && (
                            <div>
                              <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                <LayoutTemplate size={9} /> {t('pb.patterns')}
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {tmpl.patterns.map(pattern => (
                                  <Link key={pattern} to="/ontwikkelaar/patrone" className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono hover:bg-amber-200 dark:hover:bg-amber-500/20 transition-colors inline-flex items-center gap-1">
                                    <LayoutTemplate size={8} />{pattern}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Section Styles cross-reference */}
                          {sectionStyles.length > 0 && (
                            <div>
                              <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                <LayoutGrid size={9} /> {isAf ? 'Afdeling Style' : 'Section Styles'} ({sectionStyles.length})
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {sectionStyles.map(ss => (
                                  <Link key={ss.id} to="/ontwikkelaar/afdeling-style" className="px-2 py-0.5 rounded bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 text-[10px] font-mono hover:bg-violet-200 dark:hover:bg-violet-500/20 transition-colors inline-flex items-center gap-1">
                                    <LayoutGrid size={8} />{ss.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Copy filename */}
                        <div className="pt-2 border-t border-gray-100 dark:border-white/5">
                          <button onClick={() => copyToClipboard(tmpl.filename, tmpl.id)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors">
                            {copiedField === tmpl.id ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                            {copiedField === tmpl.id ? t('common.copied') : t('tb.copyFilename')}
                          </button>
                        </div>
                      </>
                    )}

                    {activeTab === 'code' && (
                      <WpCodeViewer
                        glob={wpTemplates}
                        filename={tmpl.filename}
                        label={tmpl.filename}
                        maxHeight={500}
                      />
                    )}

                    {activeTab === 'guideline' && (
                      <WpMarkdownViewer
                        glob={wpAllGuidelines}
                        filename={tmpl.guidelinePath}
                        label={tmpl.guidelinePath}
                        maxHeight={500}
                        locale={locale}
                      />
                    )}
                  </div>
                </div>
                );
              })()}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <DevEmptyState
          title={t('tb.noTemplates')}
          resetLabel={t('common.clearFilters')}
          onReset={() => {
            setSearch('');
            setActiveCategory('all');
            setActiveSectionStyle('all');
          }}
        />
      )}

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.templateBrowser} />
    </div>
  );
};