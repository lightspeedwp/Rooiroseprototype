import React from 'react';
import { Info, LayoutGrid, Zap, Copy, Check } from 'lucide-react';
import type { TemplatePartEntry } from '../../../data/templatePartBrowserData';
import type { DiskFileStats } from '../../../hooks/useDiskFileStats';
import { DiskStatsPanel } from '../../../components/dev/DiskStatsPanel';

interface PartInfoTabProps {
  part: TemplatePartEntry;
  diskStats: DiskFileStats | null;
  diskLoading: boolean;
  copiedId: string | null;
  onCopy: (text: string, id: string) => void;
  isAf: boolean;
}

export const PartInfoTab: React.FC<PartInfoTabProps> = ({
  part,
  diskStats,
  diskLoading,
  copiedId,
  onCopy,
  isAf,
}) => {
  return (
    <div className="space-y-6">
      {/* Meta Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-2 flex items-center gap-1.5">
              <Info size={12} /> {isAf ? 'Beskrywing' : 'Description'}
            </h4>
            <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
              {part.description}
            </p>
          </div>

          <DiskStatsPanel stats={diskStats} loading={diskLoading} isAf={isAf} />
        </div>

        <div className="space-y-4">
          {/* Blocks */}
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
              <LayoutGrid size={12} /> {isAf ? 'Blokke Gebruik' : 'Blocks Used'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {part.blocks.map(block => (
                <span key={block} className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono border border-blue-200/50 dark:border-blue-500/20">
                  {block}
                </span>
              ))}
            </div>
          </div>

          {/* Patterns */}
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-purple-400 mb-2 flex items-center gap-1.5">
              <Zap size={12} /> {isAf ? 'Patrone Geroep' : 'Patterns Called'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {part.patterns.map(pattern => (
                <span key={pattern} className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono border border-purple-200/50 dark:border-purple-500/20">
                  {pattern}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copy snippet */}
      <div className="pt-2 border-t border-gray-100 dark:border-white/5">
        <button
          onClick={() => onCopy(`<!-- wp:template-part {"slug":"${part.id}","theme":"die-papier-theme","area":"${part.area}"} /-->`, `wp-${part.id}`)}
          className="flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          {copiedId === `wp-${part.id}` ? <Check size={10} className="text-green-500" /> : <Copy size={10} />}
          {isAf ? 'Kopieer WP Kode' : 'Copy WP Code'}
        </button>
      </div>
    </div>
  );
};
