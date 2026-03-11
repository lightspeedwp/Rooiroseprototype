import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  ChevronDown, ChevronRight, FileCode, Info, Code, AlertTriangle,
  Zap, ArrowRight, Eye, BookOpen
} from 'lucide-react';
import { useDevLanguage } from '../../../context/DevLanguageContext';
import { getTranslation } from '../../../data/devTranslations';
import { WpCodeViewer } from '../../../components/dev/WpCodeViewer';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { wpPatterns, wpAllGuidelines, getWpFileNames } from '../../../data/wpFileLoader';
import {
  getCorrectWpFile,
  type PatternEntry, type PatternFolder, type PatternStatus
} from '../../../data/patternBrowserData';
import { PATTERN_ROUTE_MAP } from '../../../data/patternStatusStore';
import { PatternInfoTab } from './PatternInfoTab';
import { STATUS_META, PRIORITY_COLORS, SYNC_COLORS } from './constants';

interface PatternRowProps {
  pattern: PatternEntry;
  folder: PatternFolder;
  isExpanded: boolean;
  onToggle: () => void;
  status: PatternStatus;
  onCycleStatus: (e: React.MouseEvent) => void;
}

export const PatternRow = ({ pattern, folder, isExpanded, onToggle, status, onCycleStatus }: PatternRowProps) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);

  const [activeTab, setActiveTab] = useState<'info' | 'php' | 'guideline'>('info');

  const statusMeta = STATUS_META[status];
  const StatusIcon = statusMeta.icon;
  const resolvedWpFile = getCorrectWpFile(pattern.slug);
  const wpFilename = resolvedWpFile.split('/').pop() || '';
  const hasFileOnDisk = getWpFileNames(wpPatterns).includes(wpFilename);
  const hasImpl = !!pattern.implementationNotes;

  return (
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
      {/* Row header */}
      <button onClick={onToggle}
        className="w-full flex items-center gap-2 px-3 py-2.5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-left">
        {isExpanded ? <ChevronDown size={12} className="text-gray-400 dark:text-white/30 shrink-0" /> : <ChevronRight size={12} className="text-gray-400 dark:text-white/30 shrink-0" />}

        {/* Status button */}
        <span role="button" tabIndex={0} onClick={onCycleStatus} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onCycleStatus(e as any); } }} title={t('pb.clickToChangeStatus')}
          className={`p-0.5 rounded shrink-0 ${statusMeta.bgColor} hover:opacity-80 transition-opacity cursor-pointer`}>
          <StatusIcon size={12} className={statusMeta.color} />
        </span>

        <span className="text-[10px] text-gray-400 dark:text-white/25 w-5 text-right shrink-0">{pattern.id}</span>
        <span className="text-sm text-gray-900 dark:text-white truncate flex-1 min-w-0">{pattern.name}</span>

        {/* Indicators */}
        {hasFileOnDisk && <Code size={10} className="text-cyan-400 shrink-0" title={t('pb.blockHtmlAvailable')} />}
        {hasImpl && <Zap size={10} className="text-purple-400 shrink-0" title={t('pb.implNotesAvailable')} />}
        {pattern.typographyNotes && pattern.typographyNotes.some(n => n.includes('CRITICAL')) && (
          <AlertTriangle size={10} className="text-red-400 shrink-0" title={t('pb.typoCorrection')} />
        )}

        <span className={`px-1.5 py-0.5 rounded text-[10px] shrink-0 ${PRIORITY_COLORS[pattern.priority]}`}>{pattern.priority}</span>
        <span className={`px-1.5 py-0.5 rounded text-[10px] shrink-0 ${SYNC_COLORS[pattern.syncType]}`}>
          {pattern.syncType === 'Full' ? 'Sync' : pattern.syncType === 'Part' ? 'Dynamic' : 'Unsync'}
        </span>
        <span className="text-[10px] text-gray-400 dark:text-white/25 shrink-0">{(pattern.usedIn || []).length}u</span>
        {pattern.phpParams && pattern.phpParams.length > 0 && <span className="text-[10px] text-purple-400 shrink-0">{pattern.phpParams.length}P</span>}
      </button>

      {/* Expanded detail */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-white/10">
          {/* Tab bar */}
          <div className="flex items-center border-b border-gray-200 dark:border-white/10 px-4">
            {[
              { key: 'info' as const, label: t('pb.info'), icon: Info },
              { key: 'php' as const, label: 'PHP', icon: FileCode },
              { key: 'guideline' as const, label: locale === 'af' ? 'Riglyn' : 'Guideline', icon: BookOpen },
            ].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'border-brand-red text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
                }`}>
                <tab.icon size={12} />
                {tab.label}
              </button>
            ))}

            {/* Right side: actions */}
            <div className="ml-auto flex items-center gap-2 py-2">
              <Link to="/ontwikkelaar/wordpress" onClick={e => e.stopPropagation()}
                className="flex items-center gap-1 px-2 py-1 rounded text-[10px] bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors">
                <ArrowRight size={10} />
                {t('pb.blockMapping')}
              </Link>
              {PATTERN_ROUTE_MAP[pattern.reactSource] && (
                <Link to={PATTERN_ROUTE_MAP[pattern.reactSource]} onClick={e => e.stopPropagation()} target="_blank"
                  className="flex items-center gap-1 px-2 py-1 rounded text-[10px] bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors">
                  <Eye size={10} />
                  {t('pb.preview')}
                </Link>
              )}
            </div>
          </div>

          {/* Tab content */}
          <div className="p-4">
            {activeTab === 'info' && (
              <PatternInfoTab pattern={pattern} folder={folder} />
            )}

            {activeTab === 'php' && (
              <div className="space-y-4">
                <WpCodeViewer
                  glob={wpPatterns}
                  filename={wpFilename}
                  label={resolvedWpFile}
                  maxHeight={400}
                />
              </div>
            )}

            {activeTab === 'guideline' && (
              <GuidelineViewer pattern={pattern} folder={folder} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// Guideline Viewer — Loads and displays formatted markdown guidelines for a pattern
// ═══════════════════════════════════════════════════════════════════════════════

const GuidelineViewer = ({ pattern, folder }: { pattern: PatternEntry; folder: PatternFolder }) => {
  const { locale } = useDevLanguage();
  const shortSlug = pattern.slug.replace('die-papier/', '');
  const guidelineFilename = pattern.guidelinePath || `${folder}/${shortSlug}.md`;

  return (
    <WpMarkdownViewer
      glob={wpAllGuidelines}
      filename={guidelineFilename}
      label={`guidelines/components/patterns/${guidelineFilename}`}
      maxHeight={600}
      locale={locale}
    />
  );
};
