import React from 'react';
import { Link } from 'react-router';
import { Link2, Layers, Puzzle, LayoutTemplate, LayoutGrid, FileCode, Tag, Check, Copy } from 'lucide-react';
import type { TemplateEntry } from '../../../data/templateBrowserData';
import type { DiskFileStats } from '../../../hooks/useDiskFileStats';
import { DiskStatsPanel } from '../../../components/dev/DiskStatsPanel';
import type { SectionStyleEntry } from '../../../data/sectionStylesData';

interface TemplateInfoTabProps {
  template: TemplateEntry;
  diskStats: DiskFileStats | null;
  diskLoading: boolean;
  sectionStyles: SectionStyleEntry[];
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
  isAf: boolean;
  t: (key: string) => string;
}

export const TemplateInfoTab: React.FC<TemplateInfoTabProps> = ({
  template: tmpl,
  diskStats,
  diskLoading,
  sectionStyles,
  copiedField,
  onCopy,
  isAf,
  t,
}) => {
  return (
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
        <button onClick={() => onCopy(tmpl.filename, tmpl.id)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors">
          {copiedField === tmpl.id ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
          {copiedField === tmpl.id ? t('common.copied') : t('tb.copyFilename')}
        </button>
      </div>
    </>
  );
};
