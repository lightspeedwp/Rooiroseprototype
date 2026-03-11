import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { useDevLanguage } from '../../../context/DevLanguageContext';
import { getTranslation } from '../../../data/devTranslations';
import { DevRelatedTools } from '../../../components/dev/DevRelatedTools';
import { RELATED_TOOLS_MAP } from '../../../data/devToolHeroData';
import { DevSearchBar } from '../../../components/dev/DevSearchBar';
import { wpAllGuidelines, loadWpFile } from '../../../data/wpFileLoader';
import {
  PATTERNS, FOLDER_META,
  resolveFolder,
  type PatternFolder, type PatternPriority, type PatternStatus
} from '../../../data/patternBrowserData';
import {
  loadStatuses, saveStatuses,
  cycleStatus as cycleStatusInStore
} from '../../../data/patternStatusStore';
import { PatternRow } from './PatternRow';
import { FOLDER_ICONS, STATUS_META } from './constants';

interface SubfolderViewProps {
  folder: PatternFolder;
}

export const PatternSubfolderView = ({ folder }: SubfolderViewProps) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const folderMeta = FOLDER_META.find(f => f.key === folder)!;
  const FolderIcon = FOLDER_ICONS[folder];

  const [search, setSearch] = useState('');
  const [activePriority, setActivePriority] = useState<PatternPriority | 'all'>('all');
  const [activeStatus, setActiveStatus] = useState<PatternStatus | 'all'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [statuses, setStatuses] = useState<Record<number, PatternStatus>>(loadStatuses);
  const [guidelineContent, setGuidelineContent] = useState<string | null>(null);
  const [guidelineLoading, setGuidelineLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(30);

  useEffect(() => { saveStatuses(statuses); }, [statuses]);

  const getStatus = (id: number): PatternStatus => statuses[id] || 'not-started';

  const cycleStatus = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setStatuses(prev => cycleStatusInStore(prev, id));
  }, []);

  // Load guideline README for this subfolder
  useEffect(() => {
    setGuidelineLoading(true);
    const readmePath = `${folder}/README.md`;
    loadWpFile(wpAllGuidelines, readmePath).then(content => {
      setGuidelineContent(content);
      setGuidelineLoading(false);
    }).catch(() => {
      setGuidelineContent(null);
      setGuidelineLoading(false);
    });
  }, [folder]);

  const folderPatterns = useMemo(() => {
    return PATTERNS.filter(p => resolveFolder(p) === folder);
  }, [folder]);

  const filtered = useMemo(() => {
    return folderPatterns.filter(p => {
      const q = search.toLowerCase();
      const matchesSearch = !search ||
        p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q) ||
        p.reactSource.toLowerCase().includes(q) || p.wpFile.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        (p.implementationNotes || '').toLowerCase().includes(q) ||
        (p.wpBlocks || []).some(b => b.toLowerCase().includes(q));
      const matchesPriority = activePriority === 'all' || p.priority === activePriority;
      const matchesStatus = activeStatus === 'all' || getStatus(p.id) === activeStatus;
      return matchesSearch && matchesPriority && matchesStatus;
    });
  }, [search, activePriority, activeStatus, statuses, folderPatterns]);

  // Reset visible count when filters change
  useEffect(() => { setVisibleCount(30); }, [search, activePriority, activeStatus]);

  const visiblePatterns = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  const stats = useMemo(() => {
    const byPriority: Record<string, number> = {};
    const byStatus: Record<PatternStatus, number> = { 'not-started': 0, 'in-progress': 0, 'complete': 0 };
    folderPatterns.forEach(p => {
      byPriority[p.priority] = (byPriority[p.priority] || 0) + 1;
      byStatus[getStatus(p.id)]++;
    });
    return { total: folderPatterns.length, byPriority, byStatus };
  }, [statuses, folderPatterns]);

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Back navigation + folder header */}
        <div className="mb-6">
          <Link
            to="/ontwikkelaar/patrone"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70 transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            {isAf ? 'Terug na Patrone' : 'Back to Patterns'}
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className={`w-10 h-10 rounded-lg ${folderMeta.color} flex items-center justify-center`}>
              <FolderIcon size={20} className="text-white" />
            </span>
            <div>
              <h1 className="text-2xl text-gray-900 dark:text-white">
                {isAf ? folderMeta.labelAf : folderMeta.labelEn}
              </h1>
              <p className="text-sm text-gray-500 dark:text-white/40">
                patterns/{folder}/ — {stats.total} {isAf ? 'patrone' : 'patterns'}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-white/50">
            {isAf ? folderMeta.descriptionAf : folderMeta.descriptionEn}
          </p>
        </div>

        {/* Guideline README panel */}
        {guidelineContent && (
          <details className="mb-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
            <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm text-gray-700 dark:text-white/60">
              <BookOpen size={14} className="text-blue-500" />
              <span>{isAf ? 'Riglyn Dokumentasie' : 'Guideline Documentation'}</span>
              <span className="text-[10px] text-gray-400 dark:text-white/30 font-mono ml-auto">{folder}/README.md</span>
            </summary>
            <div className="border-t border-gray-200 dark:border-white/10 px-4 py-3">
              <pre className="text-xs text-gray-700 dark:text-white/60 whitespace-pre-wrap overflow-x-auto">{guidelineContent}</pre>
            </div>
          </details>
        )}

        {/* Stats Row */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { label: isAf ? 'Totaal' : 'Total', value: stats.total, color: 'text-blue-500' },
            { label: 'P0', value: stats.byPriority['P0'] || 0, color: 'text-red-500' },
            { label: 'P1', value: stats.byPriority['P1'] || 0, color: 'text-amber-500' },
            { label: 'P2', value: stats.byPriority['P2'] || 0, color: 'text-blue-500' },
            { label: t('pb.notStarted'), value: stats.byStatus['not-started'], color: 'text-gray-400' },
            { label: t('lc.inProgress'), value: stats.byStatus['in-progress'], color: 'text-amber-500' },
            { label: t('lc.done'), value: stats.byStatus['complete'], color: 'text-green-500' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <span className={`text-sm ${s.color} leading-none`}>{s.value}</span>
              <span className="text-[11px] text-gray-500 dark:text-white/40">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="space-y-3 mb-6">
          <DevSearchBar
            value={search}
            onChange={setSearch}
            placeholder={t('pb.searchPlaceholderFull')}
            className="w-full"
          />

          <div className="flex flex-wrap gap-1.5">
            {(['P0', 'P1', 'P2', 'P3'] as PatternPriority[]).map(p => (
              <button key={p} onClick={() => setActivePriority(activePriority === p ? 'all' : p)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${activePriority === p ? 'bg-brand-navy text-white dark:bg-white/20' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                {p}
              </button>
            ))}
            <span className="w-px bg-gray-200 dark:bg-white/10 mx-1" />
            {(['not-started', 'in-progress', 'complete'] as PatternStatus[]).map(s => {
              const meta = STATUS_META[s];
              const Icon = meta.icon;
              return (
                <button key={s} onClick={() => setActiveStatus(activeStatus === s ? 'all' : s)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors ${activeStatus === s ? 'bg-brand-navy text-white dark:bg-white/20' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                  <Icon size={10} />
                  {isAf ? meta.labelAf : meta.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results count */}
        <div className="text-xs text-gray-500 dark:text-white/40 mb-3">
          {filtered.length} {t('pb.patternsLower')}
          {search && ` — "${search}"`}
        </div>

        {/* Pattern List */}
        <div className="space-y-1.5">
          {visiblePatterns.map(pattern => (
            <PatternRow 
              key={pattern.id} 
              pattern={pattern} 
              folder={folder} 
              isExpanded={expandedId === pattern.id}
              onToggle={() => setExpandedId(expandedId === pattern.id ? null : pattern.id)}
              status={getStatus(pattern.id)}
              onCycleStatus={(e) => cycleStatus(pattern.id, e)}
            />
          ))}
          {visibleCount < filtered.length && (
            <button
              onClick={() => setVisibleCount(prev => prev + 30)}
              className="w-full py-3 mt-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              {isAf ? `Wys meer (${filtered.length - visibleCount} oor)` : `Show more (${filtered.length - visibleCount} remaining)`}
            </button>
          )}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Search size={32} className="mx-auto text-gray-300 dark:text-white/10 mb-3" />
            <p className="text-gray-500 dark:text-white/40 text-sm">{t('pb.noResults')}</p>
            <button onClick={() => { setSearch(''); setActivePriority('all'); setActiveStatus('all'); }}
              className="mt-2 text-xs text-blue-500 hover:text-blue-400">
              {t('common.clearFilters')}
            </button>
          </div>
        )}

        <DevRelatedTools tools={RELATED_TOOLS_MAP.patternBrowser} />
      </div>
    </div>
  );
};
