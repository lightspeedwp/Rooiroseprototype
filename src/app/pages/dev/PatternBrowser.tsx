import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { wpPatterns, getWpFilePaths } from '../../data/wpFileLoader';
import {
  PATTERNS, FOLDER_META,
  getPatternsByFolder, getFolderFileCounts,
  type PatternStatus
} from '../../data/patternBrowserData';
import {
  loadStatuses, getOverallProgress
} from '../../data/patternStatusStore';
import { PatternAllTab } from './pattern-browser/PatternAllTab';
import { PatternSubfolderView } from './pattern-browser/PatternSubfolderView';
import { FOLDER_ICONS } from './pattern-browser/constants';

export const PatternBrowser = () => {
  const { subfolder } = useParams<{ subfolder?: string }>();
  const navigate = useNavigate();
  const { locale } = useDevLanguage();

  // Determine active tab based on URL:
  // - /ontwikkelaar/patrone → 'folders' (default)
  // - /ontwikkelaar/patrone/alles → 'all'
  // - /ontwikkelaar/patrone/:subfolder → subfolder detail view
  const isAllPatternsView = subfolder === 'alles';
  const [activeTab, setActiveTab] = useState<'folders' | 'all'>(isAllPatternsView ? 'all' : 'folders');

  // Sync tab state with URL on mount and when subfolder param changes
  useEffect(() => {
    if (subfolder === 'alles') {
      setActiveTab('all');
    } else if (!subfolder) {
      setActiveTab('folders');
    }
  }, [subfolder]);

  // Validate subfolder param (exclude 'alles' from folder validation)
  const activeFolder = !isAllPatternsView && subfolder ? FOLDER_META.find(f => f.key === subfolder)?.key || null : null;

  // If an invalid subfolder is provided, redirect to landing
  useEffect(() => {
    if (subfolder && !activeFolder && !isAllPatternsView) {
      navigate('/ontwikkelaar/patrone', { replace: true });
    }
  }, [subfolder, activeFolder, isAllPatternsView, navigate]);

  return activeFolder ? (
    <PatternSubfolderView folder={activeFolder} />
  ) : (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LandingHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'folders' ? <SubfolderLandingView /> : <PatternAllTab />}
      </div>
    </div>
  );
};

// ─── Landing Header ────────────────────────────────────────────────────────

const LandingHeader = ({ activeTab, setActiveTab }: { activeTab: 'folders' | 'all'; setActiveTab: (t: 'folders' | 'all') => void }) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const navigate = useNavigate();
  const [statuses] = useState<Record<number, PatternStatus>>(loadStatuses);
  const overall = useMemo(() => getOverallProgress(statuses), [statuses]);
  const heroMeta = HERO_META.patternBrowser;

  // Handle tab changes with URL navigation
  const handleTabChange = (tab: 'folders' | 'all') => {
    if (tab === 'all') {
      navigate('/ontwikkelaar/patrone/alles');
    } else {
      navigate('/ontwikkelaar/patrone');
    }
  };

  return (
    <div className="mb-8">
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={resolveHeroMeta(heroMeta, locale).title}
        description={resolveHeroMeta(heroMeta, locale).description}
        stats={[
          { label: t('pb.patterns'), value: PATTERNS.length },
          { label: isAf ? 'Op Skyf' : 'On Disk', value: Object.keys(wpPatterns).length },
          { label: isAf ? 'Vouers' : 'Folders', value: FOLDER_META.length },
          { label: t('lc.done'), value: overall.complete },
        ]}
        badge={`${PATTERNS.length} ${t('pb.patternsLower')}`}
      />

      <div className="flex items-center gap-4 border-b border-gray-200 dark:border-white/10 mb-6">
        <button
          onClick={() => handleTabChange('folders')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'folders'
              ? 'border-brand-red text-gray-900 dark:text-white'
              : 'border-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
          }`}
        >
          {isAf ? 'Vouers' : 'Folders'}
        </button>
        <button
          onClick={() => handleTabChange('all')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
            activeTab === 'all'
              ? 'border-brand-red text-gray-900 dark:text-white'
              : 'border-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
          }`}
        >
          {isAf ? 'Alle Patrone' : 'All Patterns'}
        </button>
      </div>

      {/* Overall Progress */}
      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs text-gray-900 dark:text-white">{t('pb.migrationProgress')}</h3>
          <span className="text-xs text-gray-500 dark:text-white/40">{overall.complete}/{overall.total} ({overall.percent}%)</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div className="h-full flex">
            <div className="bg-green-500 transition-all duration-500" style={{ width: `${overall.percent}%` }} />
            <div className="bg-amber-500/50 transition-all duration-500" style={{ width: `${Math.round((overall.inProgress / overall.total) * 100)}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Subfolder Landing View — Grid of folder cards
// ═══════════════════════════════════════════════════════════════════════════════

const SubfolderLandingView = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const [statuses] = useState<Record<number, PatternStatus>>(loadStatuses);

  const grouped = useMemo(() => getPatternsByFolder(), []);
  const diskFileCounts = useMemo(() => getFolderFileCounts(getWpFilePaths(wpPatterns)), []);

  return (
    <div>
      {/* Folder Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {FOLDER_META.map(folder => {
          const patterns = grouped[folder.key] || [];
          const diskCount = diskFileCounts[folder.key] || 0;
          const complete = patterns.filter(p => (statuses[p.id] || 'not-started') === 'complete').length;
          const inProgress = patterns.filter(p => (statuses[p.id] || 'not-started') === 'in-progress').length;
          const FolderIcon = FOLDER_ICONS[folder.key];
          const pct = patterns.length > 0 ? Math.round((complete / patterns.length) * 100) : 0;

          return (
            <Link
              key={folder.key}
              to={`/ontwikkelaar/patrone/${folder.key}`}
              className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 hover:border-gray-400 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-8 h-8 rounded-lg ${folder.color} flex items-center justify-center`}>
                  <FolderIcon size={16} className="text-white" />
                </span>
                <div>
                  <h3 className="text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {isAf ? folder.labelAf : folder.labelEn}
                  </h3>
                  <span className="text-[10px] text-gray-400 dark:text-white/30 font-mono">/{folder.key}/</span>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 dark:text-white/40 mb-3 line-clamp-2">
                {isAf ? folder.descriptionAf : folder.descriptionEn}
              </p>

              <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-white/30 mb-2">
                <span>{patterns.length} {isAf ? 'patrone' : 'patterns'}</span>
                <span>{diskCount} {isAf ? 'lêers' : 'files'}</span>
              </div>

              {/* Mini progress bar */}
              <div className="h-1.5 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full flex">
                  <div className="bg-green-500 transition-all" style={{ width: `${pct}%` }} />
                  <div className="bg-amber-500/50 transition-all" style={{ width: `${patterns.length > 0 ? Math.round((inProgress / patterns.length) * 100) : 0}%` }} />
                </div>
              </div>
              <div className="flex items-center justify-between text-[9px] text-gray-400 dark:text-white/25 mt-1">
                <span>{complete}/{patterns.length}</span>
                <span>{pct}%</span>
              </div>
            </Link>
          );
        })}
      </div>

      <DevRelatedTools tools={RELATED_TOOLS_MAP.patternBrowser} />
    </div>
  );
};

export default PatternBrowser;
