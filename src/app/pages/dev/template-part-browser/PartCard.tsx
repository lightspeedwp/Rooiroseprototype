import React from 'react';
import { ChevronDown, ChevronRight, Puzzle, Info, Code, BookOpen } from 'lucide-react';
import type { TemplatePartEntry } from '../../../data/templatePartBrowserData';
import type { DiskFileStats } from '../../../hooks/useDiskFileStats';
import { WpCodeViewer } from '../../../components/dev/WpCodeViewer';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { PartInfoTab } from './PartInfoTab';
import { AREA_COLORS, AREA_ICONS, PRIORITY_COLORS } from './constants';

interface PartCardProps {
  part: TemplatePartEntry;
  isOpen: boolean;
  activeTab: 'info' | 'code' | 'guideline';
  diskStats: DiskFileStats | null;
  diskLoading: boolean;
  copiedId: string | null;
  wpPartsGlob: Record<string, () => Promise<unknown>>;
  wpGuidelinesGlob: Record<string, () => Promise<unknown>>;
  onToggle: () => void;
  onTabChange: (tab: 'info' | 'code' | 'guideline') => void;
  onCopy: (text: string, id: string) => void;
  onLoadStats: (filename: string) => void;
  isAf: boolean;
  locale: 'en' | 'af';
  t: (key: string) => string;
}

export const PartCard: React.FC<PartCardProps> = ({
  part,
  isOpen,
  activeTab,
  diskStats,
  diskLoading,
  copiedId,
  wpPartsGlob,
  wpGuidelinesGlob,
  onToggle,
  onTabChange,
  onCopy,
  onLoadStats,
  isAf,
  locale,
  t,
}) => {
  const AreaIcon = AREA_ICONS[part.area];

  return (
    <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors text-left"
      >
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${AREA_COLORS[part.area]}`}>
          <AreaIcon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">{part.name}</h3>
            <span className={`px-1.5 py-0.5 rounded text-[10px] ${PRIORITY_COLORS[part.priority]}`}>{part.priority}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-white/40">
            <span className="font-mono text-[11px]">parts/{part.filename}</span>
            <span className="flex items-center gap-1"><Puzzle size={12} /> {part.blocks.length} blocks</span>
          </div>
        </div>
        <div className="shrink-0">
          {isOpen ? <ChevronDown size={16} className="text-gray-400" /> : <ChevronRight size={16} className="text-gray-400" />}
        </div>
      </button>

      {isOpen && (() => {
        // Trigger disk stats load
        onLoadStats(part.filename);

        return (
          <div className="border-t border-gray-200 dark:border-white/10">
            {/* Tab bar */}
            <div className="flex items-center border-b border-gray-200 dark:border-white/10 px-4 bg-gray-50/50 dark:bg-white/[0.02]">
              {[
                { key: 'info' as const, label: t('pb.info'), icon: Info },
                { key: 'code' as const, label: isAf ? 'Blok Kode' : 'Block Code', icon: Code },
                { key: 'guideline' as const, label: isAf ? 'Riglyn' : 'Guideline', icon: BookOpen },
              ].map(tab => (
                <button key={tab.key} onClick={() => onTabChange(tab.key)}
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

            <div className="p-5">
              {activeTab === 'info' && (
                <PartInfoTab
                  part={part}
                  diskStats={diskStats}
                  diskLoading={diskLoading}
                  copiedId={copiedId}
                  onCopy={onCopy}
                  isAf={isAf}
                />
              )}

              {activeTab === 'code' && (
                <WpCodeViewer
                  glob={wpPartsGlob}
                  filename={part.filename}
                  label={part.filename}
                  maxHeight={400}
                />
              )}

              {activeTab === 'guideline' && (
                <WpMarkdownViewer
                  glob={wpGuidelinesGlob}
                  filename={part.guidelinePath}
                  label={part.guidelinePath}
                  maxHeight={400}
                  locale={locale}
                />
              )}
            </div>
          </div>
        );
      })()}
    </div>
  );
};
