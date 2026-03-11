import React from 'react';
import { Copy, Check, Download } from 'lucide-react';
import type { IconEntry } from '../../../data/iconBrowserData';
import { ICON_COMPONENTS, TYPE_COLORS, TYPE_LABELS } from './iconComponents';

interface IconDetailPanelProps {
  icon: IconEntry;
  previewSize: number;
  copiedField: string | null;
  svgRef: React.RefObject<HTMLDivElement>;
  onPreviewSizeChange: (size: number) => void;
  onCopy: (text: string, field: string) => void;
  onDownloadSvg: (icon: IconEntry) => void;
  onTagClick: (tag: string) => void;
  isAf: boolean;
}

export const IconDetailPanel: React.FC<IconDetailPanelProps> = ({
  icon,
  previewSize,
  copiedField,
  svgRef,
  onPreviewSizeChange,
  onCopy,
  onDownloadSvg,
  onTagClick,
  isAf,
}) => {
  const IconComp = ICON_COMPONENTS[icon.name];

  return (
    <div className="w-80 shrink-0 border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/[0.03] p-5 space-y-4 sticky top-4 max-h-[calc(100vh-8rem)] overflow-y-auto hidden md:block">
      {/* Preview */}
      <div className="flex flex-col items-center gap-3 pb-4 border-b border-gray-200 dark:border-white/10">
        <div ref={svgRef} className="w-20 h-20 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
          {IconComp && <IconComp size={previewSize} className="text-gray-800 dark:text-white" />}
        </div>
        <h3 className="text-sm text-gray-800 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{icon.label}</h3>
        <span className={`px-2 py-0.5 rounded border text-[10px] ${TYPE_COLORS[icon.type]}`}>
          {isAf ? TYPE_LABELS[icon.type].af : TYPE_LABELS[icon.type].en}
        </span>
        {/* Size slider */}
        <div className="flex items-center gap-2 w-full">
          <span className="text-[10px] text-gray-400 dark:text-white/30 w-6">{previewSize}</span>
          <input
            type="range"
            min={12}
            max={48}
            value={previewSize}
            onChange={e => onPreviewSizeChange(Number(e.target.value))}
            className="flex-1 accent-brand-red"
          />
          <span className="text-[10px] text-gray-400 dark:text-white/30">px</span>
        </div>
      </div>

      {/* Meta */}
      <div className="space-y-3">
        <div>
          <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{isAf ? 'Bron' : 'Source'}</div>
          <span className="text-xs font-mono text-gray-600 dark:text-white/60">{icon.source}</span>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">{isAf ? 'Groottes gebruik' : 'Sizes used'}</div>
          <div className="flex gap-1">
            {icon.sizes.map(s => (
              <button key={s} onClick={() => onPreviewSizeChange(s)} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-[10px] text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10">{s}px</button>
            ))}
          </div>
        </div>
        {icon.wpDashicon && (
          <div>
            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1">WP Dashicon</div>
            <button onClick={() => onCopy(icon.wpDashicon!, icon.id + '-dash')} className="flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300">
              {icon.wpDashicon}
              {copiedField === icon.id + '-dash' ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
            </button>
          </div>
        )}
      </div>

      {/* Copy buttons */}
      <div className="space-y-1.5 pt-2 border-t border-gray-200 dark:border-white/10">
        <button onClick={() => onCopy(icon.importStatement, icon.id + '-import')}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors">
          <span>{isAf ? 'Kopieer import' : 'Copy import'}</span>
          {copiedField === icon.id + '-import' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
        </button>
        <button onClick={() => onCopy(icon.jsxExample, icon.id + '-jsx')}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors">
          <span>{isAf ? 'Kopieer JSX' : 'Copy JSX'}</span>
          {copiedField === icon.id + '-jsx' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
        </button>
        <button onClick={() => onCopy(icon.wpExport, icon.id + '-svg')}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-xs text-gray-600 dark:text-white/50 transition-colors">
          <span>{isAf ? 'Kopieer SVG' : 'Copy SVG'}</span>
          {copiedField === icon.id + '-svg' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
        </button>
        <button onClick={() => onDownloadSvg(icon)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-xs text-blue-400 transition-colors">
          <span>{isAf ? 'Laai SVG af' : 'Download SVG'}</span>
          <Download size={12} />
        </button>
      </div>

      {/* Usages */}
      <div className="pt-2 border-t border-gray-200 dark:border-white/10">
        <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-2">{isAf ? 'Gebruik in' : 'Used in'} ({icon.usages.length})</div>
        <div className="space-y-1.5">
          {icon.usages.map((u, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`mt-0.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                u.type === 'interface' ? 'bg-blue-400' :
                u.type === 'content' ? 'bg-green-400' :
                u.type === 'social' ? 'bg-pink-400' : 'bg-amber-400'
              }`} />
              <div>
                <span className="text-[11px] font-mono text-gray-700 dark:text-white/70">{u.file}</span>
                <p className="text-[10px] text-gray-400 dark:text-white/30">{u.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="pt-2 border-t border-gray-200 dark:border-white/10">
        <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5">{isAf ? 'Etikette' : 'Tags'}</div>
        <div className="flex flex-wrap gap-1">
          {icon.tags.map(tag => (
            <button key={tag} onClick={() => onTagClick(tag)} className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-[9px] text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10">{tag}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
