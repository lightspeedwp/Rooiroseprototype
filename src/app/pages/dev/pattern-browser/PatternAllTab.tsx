import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useDevLanguage } from '../../../context/DevLanguageContext';
import { getTranslation } from '../../../data/devTranslations';
import { DevRelatedTools } from '../../../components/dev/DevRelatedTools';
import { RELATED_TOOLS_MAP } from '../../../data/devToolHeroData';
import { DevSearchBar } from '../../../components/dev/DevSearchBar';
import { DevEmptyState } from '../../../components/dev/DevEmptyState';
import {
  PATTERNS, FOLDER_META,
  type PatternEntry, type PatternFolder, type PatternPriority, type PatternStatus
} from '../../../data/patternBrowserData';
import {
  loadStatuses, saveStatuses,
  cycleStatus as cycleStatusInStore
} from '../../../data/patternStatusStore';
import { PatternRow } from './PatternRow';
import { STATUS_META } from './constants';

export const PatternAllTab = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const [search, setSearch] = useState('');
  const [activePriority, setActivePriority] = useState<PatternPriority | 'all'>('all');
  const [activeStatus, setActiveStatus] = useState<PatternStatus | 'all'>('all');
  const [activeFolder, setActiveFolder] = useState<PatternFolder | 'all'>('all');
  const [activeUsage, setActiveUsage] = useState<string | 'all'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [statuses, setStatuses] = useState<Record<number, PatternStatus>>(loadStatuses);
  const [visibleCount, setVisibleCount] = useState(30);

  useEffect(() => { saveStatuses(statuses); }, [statuses]);

  const getStatus = (id: number): PatternStatus => statuses[id] || 'not-started';

  const cycleStatus = useCallback((id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setStatuses(prev => cycleStatusInStore(prev, id));
  }, []);

  const filtered = useMemo(() => {
    return PATTERNS.filter(p => {
      const q = search.toLowerCase();
      const matchesSearch = !search ||
        p.name.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q) ||
        p.reactSource.toLowerCase().includes(q) || p.wpFile.toLowerCase().includes(q) ||
        (p.description || '').toLowerCase().includes(q) ||
        (p.wpBlocks || []).some(b => b.toLowerCase().includes(q));
      
      const matchesPriority = activePriority === 'all' || p.priority === activePriority;
      const matchesStatus = activeStatus === 'all' || getStatus(p.id) === activeStatus;
      const matchesFolder = activeFolder === 'all' || p.folder === activeFolder;
      
      const matchesUsage = activeUsage === 'all' || (p.usedIn || []).some(u => u.type === activeUsage);

      return matchesSearch && matchesPriority && matchesStatus && matchesFolder && matchesUsage;
    });
  }, [search, activePriority, activeStatus, activeFolder, activeUsage, statuses]);

  // Reset visible count when filters change
  useEffect(() => { setVisibleCount(30); }, [search, activePriority, activeStatus, activeFolder, activeUsage]);

  const visiblePatterns = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-4 space-y-4">
        <DevSearchBar
          value={search}
          onChange={setSearch}
          placeholder={t('pb.searchPlaceholderFull')}
          className="w-full"
        />

        <div className="flex flex-wrap gap-4">
          {/* Priority Filter */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 ml-1">{isAf ? 'Prioriteit' : 'Priority'}</span>
            <div className="flex flex-wrap gap-1">
              {(['P0', 'P1', 'P2', 'P3'] as PatternPriority[]).map(p => (
                <button key={p} onClick={() => setActivePriority(activePriority === p ? 'all' : p)}
                  className={`px-2.5 py-1 rounded text-[10px] transition-colors ${activePriority === p ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 ml-1">{isAf ? 'Status' : 'Status'}</span>
            <div className="flex flex-wrap gap-1">
              {(['not-started', 'in-progress', 'complete'] as PatternStatus[]).map(s => {
                const meta = STATUS_META[s];
                const Icon = meta.icon;
                return (
                  <button key={s} onClick={() => setActiveStatus(activeStatus === s ? 'all' : s)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-[10px] transition-colors ${activeStatus === s ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                    <Icon size={10} />
                    {isAf ? meta.labelAf : meta.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Folder Filter */}
          <div className="space-y-1.5 flex-1 min-w-[200px]">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 ml-1">{isAf ? 'Vouer' : 'Folder'}</span>
            <select
              value={activeFolder}
              onChange={e => setActiveFolder(e.target.value as any)}
              className="w-full px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded text-[10px] text-gray-800 dark:text-white focus:ring-1 focus:ring-brand-red/30"
            >
              <option value="all">{isAf ? 'Alle Vouers' : 'All Folders'}</option>
              {FOLDER_META.map(f => (
                <option key={f.key} value={f.key}>{isAf ? f.labelAf : f.labelEn}</option>
              ))}
            </select>
          </div>

          {/* Usage Filter */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 ml-1">{isAf ? 'Gebruik' : 'Usage'}</span>
            <div className="flex flex-wrap gap-1">
              {['template', 'part', 'page-content', 'inline'].map(u => (
                <button key={u} onClick={() => setActiveUsage(activeUsage === u ? 'all' : u)}
                  className={`px-2.5 py-1 rounded text-[10px] transition-colors capitalize ${activeUsage === u ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'}`}>
                  {u.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-1.5">
        <div className="text-[10px] text-gray-400 dark:text-white/25 px-1 mb-2">
          {filtered.length} {t('pb.patternsLower')} gevind
        </div>
        {visiblePatterns.map(pattern => (
          <PatternRow 
            key={pattern.id} 
            pattern={pattern} 
            folder={pattern.folder} 
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
        <div className="bg-white dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 rounded-xl">
          <DevEmptyState
            title={isAf ? 'Geen patrone gevind nie.' : 'No patterns found.'}
            icon={Search}
            resetLabel={t('common.clearFilters')}
            onReset={() => { setSearch(''); setActivePriority('all'); setActiveStatus('all'); setActiveFolder('all'); setActiveUsage('all'); }}
          />
        </div>
      )}
      
      <DevRelatedTools tools={RELATED_TOOLS_MAP.patternBrowser} />
    </div>
  );
};
