import React from 'react';
import { ChevronDown, ChevronRight, LayoutDashboard, Info, Code, BookOpen } from 'lucide-react';
import type { TemplateEntry } from '../../../data/templateBrowserData';
import type { DiskFileStats } from '../../../hooks/useDiskFileStats';
import type { SectionStyleEntry } from '../../../data/sectionStylesData';
import { WpCodeViewer } from '../../../components/dev/WpCodeViewer';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { TemplateInfoTab } from './TemplateInfoTab';
import { PRIORITY_COLORS, CAT_COLORS } from './constants';

interface TemplateCardProps {
  template: TemplateEntry;
  isOpen: boolean;
  activeTab: 'info' | 'code' | 'guideline';
  diskStats: DiskFileStats | null;
  diskLoading: boolean;
  sectionStyles: SectionStyleEntry[];
  copiedField: string | null;
  wpTemplatesGlob: Record<string, () => Promise<unknown>>;
  wpGuidelinesGlob: Record<string, () => Promise<unknown>>;
  onToggle: () => void;
  onTabChange: (tab: 'info' | 'code' | 'guideline') => void;
  onCopy: (text: string, field: string) => void;
  onLoadStats: (filename: string) => void;
  isAf: boolean;
  locale: 'en' | 'af';
  t: (key: string) => string;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  template: tmpl,
  isOpen,
  activeTab,
  diskStats,
  diskLoading,
  sectionStyles,
  copiedField,
  wpTemplatesGlob,
  wpGuidelinesGlob,
  onToggle,
  onTabChange,
  onCopy,
  onLoadStats,
  isAf,
  locale,
  t,
}) => {
  return (
    <div className="border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
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
        onLoadStats(tmpl.filename);

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

            <div className="p-4 space-y-4">
              {activeTab === 'info' && (
                <TemplateInfoTab
                  template={tmpl}
                  diskStats={diskStats}
                  diskLoading={diskLoading}
                  sectionStyles={sectionStyles}
                  copiedField={copiedField}
                  onCopy={onCopy}
                  isAf={isAf}
                  t={t}
                />
              )}

              {activeTab === 'code' && (
                <WpCodeViewer
                  glob={wpTemplatesGlob}
                  filename={tmpl.filename}
                  label={tmpl.filename}
                  maxHeight={500}
                />
              )}

              {activeTab === 'guideline' && (
                <WpMarkdownViewer
                  glob={wpGuidelinesGlob}
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
};
