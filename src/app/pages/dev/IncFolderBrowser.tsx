import React, { useState, useMemo, useCallback } from 'react';
import {
  Search, X, Copy, Check, Code, FolderOpen,
  ChevronDown, ChevronRight, Zap, Tag
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import {
  INC_FILES,
  INC_CATEGORIES,
  type IncFileEntry,
} from '../../data/incFolderData';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { WpCodeViewer } from '../../components/dev/WpCodeViewer';
import { wpPluginInc, wpThemeInc, wpThemeMain, wpPluginMain } from '../../data/wpFileLoader';
import { RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { useDiskFileStats } from '../../hooks/useDiskFileStats';
import { DiskStatsPanel } from '../../components/dev/DiskStatsPanel';

const CAT_COLORS: Record<IncFileEntry['category'], string> = {
  cpt: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
  taxonomy: 'bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300',
  block: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-300',
  meta: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  utility: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300',
  seed: 'bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-300',
  theme: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300',
};

const PRIORITY_COLORS: Record<string, string> = {
  P0: 'bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-300',
  P1: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300',
  P2: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300',
};

/** Get WordPress codex links for hooks */
function getHookDocLinks(hooks: string[]): { hook: string; url: string }[] {
  const hookMap: Record<string, string> = {
    'init': 'https://developer.wordpress.org/reference/hooks/init/',
    'wp_enqueue_scripts': 'https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/',
    'enqueue_block_editor_assets': 'https://developer.wordpress.org/reference/hooks/enqueue_block_editor_assets/',
    'after_switch_theme': 'https://developer.wordpress.org/reference/hooks/after_switch_theme/',
  };

  return hooks.map(hook => {
    const baseHook = hook.split(' ')[0];
    return {
      hook,
      url: hookMap[baseHook] || `https://developer.wordpress.org/reference/hooks/${baseHook}/`,
    };
  });
}

export const IncFolderBrowser = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<IncFileEntry['category'] | 'all'>('all');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [expandedFile, setExpandedFile] = useState<string | null>(null);

  const { loadStats: loadThemeStats, getStats: getThemeStats, isLoading: isThemeLoading } = useDiskFileStats(wpThemeInc);
  const { loadStats: loadPluginStats, getStats: getPluginStats, isLoading: isPluginLoading } = useDiskFileStats(wpPluginInc);

  const filtered = useMemo(() => {
    let files = INC_FILES;
    if (activeCategory !== 'all') files = files.filter(f => f.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      files = files.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.filename.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.functions.some(fn => fn.toLowerCase().includes(q)) ||
        f.hooks.some(h => h.toLowerCase().includes(q))
      );
    }
    return files;
  }, [activeCategory, search]);

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  }, []);

  const t = (key: string) => getTranslation(key, locale);

  return (
    <div>
      {/* Hero */}
      <DevToolHero
        icon={FolderOpen}
        iconColor="bg-orange-500"
        title={t('inc.title')}
        description={isAf
          ? 'PHP inc/ lêers — CPT registrasies, taksonomieë, blok style, meta velde, hooks. Elke lêer met volledige PHP kode, funksie-afbreking, en WP hook dokumentasie.'
          : 'PHP inc/ files — CPT registrations, taxonomies, block styles, meta fields, hooks. Each file with full PHP code, function breakdown, and WP hook documentation.'
        }
        stats={INC_CATEGORIES.filter(c => c.key !== 'all').map(cat => ({
          label: isAf ? cat.labelAf : cat.labelEn,
          value: cat.count,
        }))}
        badge={`${INC_FILES.length} ${t('common.filesLower')}`}
      />

      {/* Search + Filters */}
      <div className="space-y-3 mb-5">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={t('inc.searchPlaceholder')}
            className="w-full pl-9 pr-9 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {INC_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                activeCategory === cat.key
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {isAf ? cat.labelAf : cat.labelEn} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* File Cards */}
      <div className="space-y-2">
        {filtered.map(file => {
          const isOpen = expandedFile === file.id;
          const hookDocs = getHookDocLinks(file.hooks);
          return (
            <div key={file.id} className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              {/* Header row */}
              <button
                onClick={() => setExpandedFile(isOpen ? null : file.id)}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors text-left"
              >
                {isOpen ? <ChevronDown size={14} className="text-gray-400 dark:text-white/30 shrink-0" /> : <ChevronRight size={14} className="text-gray-400 dark:text-white/30 shrink-0" />}
                <FolderOpen size={14} className="text-amber-500 dark:text-amber-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-gray-800 dark:text-white font-mono">{file.filename}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] ${CAT_COLORS[file.category]}`}>{file.category}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] ${PRIORITY_COLORS[file.priority]}`}>{file.priority}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5 truncate">{file.name}</p>
                </div>
                <span className="text-[10px] text-gray-400 dark:text-white/30 shrink-0">{file.functions.length} fn</span>
              </button>

              {/* Expanded details */}
              {isOpen && (() => {
                const glob = (() => {
                  switch (file.source) {
                    case 'theme': return wpThemeInc;
                    case 'theme-root': return wpThemeMain;
                    case 'plugin-root': return wpPluginMain;
                    case 'plugin':
                    default: return wpPluginInc;
                  }
                })();
                const lStats = (() => {
                  switch (file.source) {
                    case 'theme':
                    case 'theme-root': return loadThemeStats;
                    default: return loadPluginStats;
                  }
                })();
                const gStats = (() => {
                  switch (file.source) {
                    case 'theme':
                    case 'theme-root': return getThemeStats;
                    default: return getPluginStats;
                  }
                })();
                const isLoadingFn = (() => {
                  switch (file.source) {
                    case 'theme':
                    case 'theme-root': return isThemeLoading;
                    default: return isPluginLoading;
                  }
                })();
                lStats(file.filename);
                const diskStats = gStats(file.filename);
                const diskLoading = isLoadingFn(file.filename);

                return (
                <div className="p-4 border-t border-gray-200 dark:border-white/10 space-y-4">
                  <p className="text-xs text-gray-600 dark:text-white/60 leading-relaxed">{file.description}</p>

                  {/* Disk File Analysis */}
                  <DiskStatsPanel
                    stats={diskStats}
                    loading={diskLoading}
                    isAf={isAf}
                    inlineFunctionCount={file.functions.length}
                    inlineHookCount={file.hooks.length}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Functions */}
                    <div>
                      <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider flex items-center gap-1 mb-1.5">
                        <Code size={9} /> {t('inc.functions')}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {file.functions.map(fn => (
                          <span key={fn} className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-mono">{fn}</span>
                        ))}
                      </div>
                    </div>

                    {/* Hooks with doc links */}
                    <div>
                      <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider flex items-center gap-1 mb-1.5">
                        <Zap size={9} /> Hooks
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {hookDocs.map(({ hook, url }) => (
                          <a
                            key={hook}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono hover:bg-purple-200 dark:hover:bg-purple-500/20 transition-colors inline-flex items-center gap-1"
                            title={t('inc.wpDocs')}
                          >
                            <Zap size={8} />{hook}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dependencies */}
                  {file.dependencies.length > 0 && (
                    <div>
                      <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider flex items-center gap-1 mb-1.5">
                        <Tag size={9} /> {t('inc.dependencies')}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {file.dependencies.map(dep => (
                          <span key={dep} className="px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono">{dep}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PHP code snippet */}
                  <div>
                    <WpCodeViewer
                      glob={glob}
                      filename={file.filename}
                      label={file.filename}
                      maxHeight={500}
                    />
                  </div>

                  {/* Copy require statement */}
                  <button
                    onClick={() => copyToClipboard(file.requireStatement, file.id)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors font-mono"
                  >
                    {copiedField === file.id ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                    {copiedField === file.id ? t('common.copied') : 'require_once'}
                  </button>
                </div>
                );
              })()}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Search size={32} className="mx-auto text-gray-300 dark:text-white/10 mb-3" />
          <p className="text-gray-500 dark:text-white/40 text-sm">{t('inc.noFiles')}</p>
        </div>
      )}

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.incFolderBrowser} />
    </div>
  );
};