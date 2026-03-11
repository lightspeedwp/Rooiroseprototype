import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight,
  Download, Save, RotateCcw, Filter,
  ChevronsDown, ChevronsUp,
} from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { Button } from '../../components/ui/button';
import {
  ALL_CHECKLIST_PHASES,
  CHECKLIST_STORAGE_KEY,
  type ChecklistPhase,
  type ChecklistItem,
} from '../../data/launchChecklistData';

// ─── Filter Types ───

type FilterMode = 'all' | 'pending' | 'done';

// ─── Component ───

export const LaunchChecklist = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  // ─── Checklist state with localStorage persistence ───
  const [phases, setPhases] = useState<ChecklistPhase[]>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge saved checked states with current data (handles new items added after save)
        return ALL_CHECKLIST_PHASES.map(phase => {
          const savedPhase = parsed.find((p: ChecklistPhase) => p.id === phase.id);
          if (savedPhase) {
            return {
              ...phase,
              expanded: savedPhase.expanded,
              items: phase.items.map(item => {
                const savedItem = savedPhase.items.find((i: ChecklistItem) => i.id === item.id);
                return savedItem ? { ...item, checked: savedItem.checked } : item;
              }),
            };
          }
          return phase;
        });
      }
    } catch { /* ignore */ }
    return ALL_CHECKLIST_PHASES;
  });

  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(phases));
    } catch { /* ignore */ }
  }, [phases]);

  // ─── Actions ───

  const togglePhaseExpanded = useCallback((phaseId: string) => {
    setPhases(prev =>
      prev.map(phase =>
        phase.id === phaseId ? { ...phase, expanded: !phase.expanded } : phase
      )
    );
  }, []);

  const toggleItemChecked = useCallback((phaseId: string, itemId: string) => {
    setPhases(prev =>
      prev.map(phase =>
        phase.id === phaseId
          ? {
              ...phase,
              items: phase.items.map(item =>
                item.id === itemId ? { ...item, checked: !item.checked } : item
              ),
            }
          : phase
      )
    );
  }, []);

  const expandAll = useCallback(() => {
    setPhases(prev => prev.map(p => ({ ...p, expanded: true })));
  }, []);

  const collapseAll = useCallback(() => {
    setPhases(prev => prev.map(p => ({ ...p, expanded: false })));
  }, []);

  const resetChecklist = useCallback(() => {
    if (confirm(t('lc.confirmReset'))) {
      setPhases(ALL_CHECKLIST_PHASES);
      try { localStorage.removeItem(CHECKLIST_STORAGE_KEY); } catch { /* ignore */ }
      toast.success(t('lc.resetSuccess'));
    }
  }, [locale]);

  const exportProgress = useCallback(() => {
    const data = JSON.stringify(phases, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `die-papier-launch-checklist-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(t('lc.exportSuccess'));
  }, [phases, locale]);

  const saveProgress = useCallback(() => {
    try {
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(phases));
    } catch { /* ignore */ }
    toast.success(t('lc.saveSuccess'));
  }, [phases, locale]);

  // ─── Statistics ───

  const stats = useMemo(() => {
    const totalItems = phases.reduce((sum, p) => sum + p.items.length, 0);
    const checkedItems = phases.reduce((sum, p) => sum + p.items.filter(i => i.checked).length, 0);
    const percentage = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    const completedPhases = phases.filter(p => p.items.every(i => i.checked)).length;
    return { totalItems, checkedItems, percentage, completedPhases };
  }, [phases]);

  // ─── Filtered items helper ───
  const getFilteredItems = useCallback((items: ChecklistItem[]) => {
    if (filterMode === 'pending') return items.filter(i => !i.checked);
    if (filterMode === 'done') return items.filter(i => i.checked);
    return items;
  }, [filterMode]);

  // Hero config
  const heroMeta = HERO_META.launchChecklist;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <DevToolHero
          icon={heroMeta.icon}
          iconColor={heroMeta.iconColor}
          title={resolveHeroMeta(heroMeta, locale).title}
          description={resolveHeroMeta(heroMeta, locale).description}
          stats={[
            { label: isAf ? 'Vordering' : 'Progress', value: `${stats.percentage}%` },
            { label: isAf ? 'Items voltooi' : 'Items done', value: `${stats.checkedItems}/${stats.totalItems}` },
            { label: isAf ? 'Fases' : 'Phases', value: `${stats.completedPhases}/${phases.length}` },
            { label: isAf ? 'Oorbly' : 'Remaining', value: `${stats.totalItems - stats.checkedItems}` },
          ]}
        />
      </div>

      {/* Toolbar */}
      <div className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-brand-navy sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2 gap-2">
          {/* Filter pills */}
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-gray-400 dark:text-white/30 shrink-0" />
            {([
              { mode: 'all' as FilterMode, label: isAf ? 'Alles' : 'All', count: stats.totalItems },
              { mode: 'pending' as FilterMode, label: isAf ? 'Hangende' : 'Pending', count: stats.totalItems - stats.checkedItems },
              { mode: 'done' as FilterMode, label: isAf ? 'Voltooi' : 'Done', count: stats.checkedItems },
            ]).map(f => (
              <button
                key={f.mode}
                onClick={() => setFilterMode(f.mode)}
                className={`px-3 py-1 text-xs rounded-full border transition-colors whitespace-nowrap ${
                  filterMode === f.mode
                    ? 'bg-brand-red/10 border-brand-red/30 text-brand-red'
                    : 'bg-transparent border-gray-200 dark:border-white/10 text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60'
                }`}
              >
                {f.label} ({f.count})
              </button>
            ))}
          </div>
          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button onClick={expandAll} className="p-1.5 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/60" title={isAf ? 'Vou alles oop' : 'Expand all'}>
              <ChevronsDown size={16} />
            </button>
            <button onClick={collapseAll} className="p-1.5 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white/60" title={isAf ? 'Vou alles toe' : 'Collapse all'}>
              <ChevronsUp size={16} />
            </button>
            <div className="w-px h-5 bg-gray-200 dark:bg-white/10 mx-1 hidden sm:block" />
            <Button onClick={saveProgress} variant="outline" size="sm" className="hidden sm:flex">
              <Save size={14} />
              {t('common.save')}
            </Button>
            <Button onClick={exportProgress} variant="outline" size="sm">
              <Download size={14} />
              <span className="hidden sm:inline">{t('common.export')}</span>
            </Button>
            <Button onClick={resetChecklist} variant="destructive" size="sm">
              <RotateCcw size={14} />
              <span className="hidden sm:inline">{t('common.reset')}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Global Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold font-heading mb-1">
                {isAf ? 'Algehele Vordering' : 'Overall Progress'}
              </h2>
              <p className="text-sm text-gray-500 dark:text-white/50">
                {stats.checkedItems} / {stats.totalItems} {isAf ? 'items voltooi' : 'items completed'}
                {' \u2014 '}{stats.completedPhases} / {phases.length} {isAf ? 'fases voltooi' : 'phases complete'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-brand-red">{stats.percentage}%</div>
              <p className="text-xs text-gray-400 dark:text-white/40 mt-1">
                {isAf ? 'Voltooi' : 'Complete'}
              </p>
            </div>
          </div>
          <div className="h-4 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-red to-red-400 transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Phase Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        {phases.map((phase) => {
          const filteredItems = getFilteredItems(phase.items);
          const checkedCount = phase.items.filter(i => i.checked).length;
          const phasePercentage = Math.round((checkedCount / phase.items.length) * 100);
          const isComplete = phasePercentage === 100;

          // Hide phase if filter has no matching items
          if (filteredItems.length === 0 && filterMode !== 'all') return null;

          return (
            <div
              key={phase.id}
              className={`bg-gray-50 dark:bg-white/5 border rounded-xl overflow-hidden transition-all ${
                isComplete ? 'border-green-500/50' : 'border-gray-200 dark:border-white/10'
              }`}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhaseExpanded(phase.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 text-left min-w-0">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg shrink-0 ${
                    isComplete
                      ? 'bg-green-500/20 text-green-400'
                      : checkedCount > 0
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-brand-red/20 text-brand-red'
                  }`}>
                    {phase.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {isAf ? phase.title : phase.titleEn}
                      </h3>
                      {phase.duration && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-400 dark:text-white/30 shrink-0">
                          {phase.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 dark:text-white/40 mt-0.5 truncate">
                      {isAf ? phase.description : phase.descriptionEn}
                    </p>
                    {/* Mini progress bar */}
                    <div className="w-full max-w-xs bg-gray-200 dark:bg-white/10 rounded-full h-1 mt-2">
                      <div
                        className={`h-1 rounded-full transition-all ${
                          isComplete ? 'bg-green-400' : checkedCount > 0 ? 'bg-amber-400' : 'bg-gray-200 dark:bg-white/10'
                        }`}
                        style={{ width: `${phasePercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0 ml-4">
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${
                      isComplete ? 'text-green-400' : 'text-gray-900 dark:text-white'
                    }`}>
                      {phasePercentage}%
                    </div>
                    <p className="text-[10px] text-gray-400 dark:text-white/40">
                      {checkedCount}/{phase.items.length}
                    </p>
                  </div>
                  {phase.expanded ? (
                    <ChevronDown size={20} className="text-gray-400 dark:text-white/40" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400 dark:text-white/40" />
                  )}
                </div>
              </button>

              {/* Phase Items */}
              {phase.expanded && (
                <div className="px-6 pb-6 space-y-1">
                  {phase.guideline && (
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200 dark:border-white/10">
                      <span className="text-[10px] text-gray-300 dark:text-white/20 font-mono">{phase.guideline}</span>
                    </div>
                  )}
                  {filteredItems.map(item => (
                    <label
                      key={item.id}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 cursor-pointer transition-colors group"
                    >
                      <button
                        onClick={(e) => { e.preventDefault(); toggleItemChecked(phase.id, item.id); }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        {item.checked ? (
                          <CheckCircle2 size={20} className="text-green-400" />
                        ) : (
                          <Circle size={20} className="text-gray-300 dark:text-white/20 group-hover:text-gray-400 dark:group-hover:text-white/40 transition-colors" />
                        )}
                      </button>
                      <span
                        className={`text-sm flex-1 transition-all ${
                          item.checked ? 'text-gray-400 dark:text-white/50 line-through' : 'text-gray-900 dark:text-white'
                        }`}
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {item.text}
                      </span>
                    </label>
                  ))}
                  {filteredItems.length === 0 && (
                    <p className="text-xs text-gray-400 dark:text-white/30 text-center py-4">
                      {isAf ? 'Geen items om te wys nie' : 'No items to show'}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-xs text-gray-400 dark:text-white/30" style={{ fontFamily: 'var(--font-inter)' }}>
          {isAf
            ? 'Kontrolelys-vordering word outomaties gestoor in jou blaaier. Voer uit vir rugsteun.'
            : 'Checklist progress is automatically saved in your browser. Export for backup.'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <DevRelatedTools tools={RELATED_TOOLS_MAP.launchChecklist} />
      </div>
    </div>
  );
};
