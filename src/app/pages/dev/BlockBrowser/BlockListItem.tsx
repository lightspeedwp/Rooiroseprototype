import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Copy, Check, ChevronDown, ChevronRight, Paintbrush,
  FileCode, AlertTriangle, Eye, BookOpen, ExternalLink
} from 'lucide-react';
import { type BlockEntry, DOMAIN_COLORS, DOMAIN_LABELS, CATEGORY_LABELS, DOMAIN_ICONS } from '../../../data/blockBrowserData';
import { BlockPreview } from '../../../components/dev/BlockPreview';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { wpAllGuidelines } from '../../../data/wpFileLoader';

interface BlockListItemProps {
  block: BlockEntry;
  isExpanded: boolean;
  isHovered: boolean;
  onToggleExpansion: (blockId: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isAf: boolean;
}

const CSS_APPROACH_LABELS: Record<string, { label: string; color: string }> = {
  'tailwind-inline': { label: 'Tailwind', color: 'bg-sky-500/20 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300' },
  'json-only': { label: 'JSON', color: 'bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' },
  'css-file': { label: 'CSS File', color: 'bg-purple-500/20 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300' },
  'none': { label: 'None', color: 'bg-neutral-200 text-neutral-500 dark:bg-white/10 dark:text-white/40' },
};

export const BlockListItem: React.FC<BlockListItemProps> = ({
  block,
  isExpanded,
  isHovered,
  onToggleExpansion,
  onMouseEnter,
  onMouseLeave,
  isAf,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'info' | 'guideline'>('info');

  const DomainIcon = DOMAIN_ICONS[block.domain];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`border rounded-lg overflow-hidden transition-all duration-200 ${
        isExpanded
          ? 'border-neutral-300 dark:border-white/20 bg-white dark:bg-white/[0.04] shadow-md'
          : isHovered
          ? 'border-neutral-300 dark:border-white/15 bg-neutral-50 dark:bg-white/[0.03] shadow-sm'
          : 'border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02]'
      }`}
    >
      {/* ─── Row Header ───────────────────────────────── */}
      <button
        onClick={() => onToggleExpansion(block.id)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left group"
      >
        <span className={`transition-transform duration-200 ${isExpanded ? 'rotate-0' : ''}`}>
          {isExpanded ? (
            <ChevronDown size={16} className="text-neutral-600 dark:text-white/60 shrink-0" />
          ) : (
            <ChevronRight size={16} className="text-neutral-400 dark:text-white/40 group-hover:text-neutral-600 dark:group-hover:text-white/60 shrink-0 transition-colors" />
          )}
        </span>
        
        <DomainIcon size={16} className="text-neutral-600 dark:text-white/60 shrink-0 transition-transform group-hover:scale-110" />
        
        <span className="text-neutral-900 dark:text-white/90 font-mono text-sm group-hover:text-black dark:group-hover:text-white transition-colors">{block.name}</span>

        {/* Badges */}
        <span className={`px-2 py-0.5 rounded text-[11px] shrink-0 transition-all ${DOMAIN_COLORS[block.domain]}`}>
          {DOMAIN_LABELS[block.domain][isAf ? 'af' : 'en']}
        </span>
        <span className="px-2 py-0.5 rounded text-[11px] shrink-0 bg-neutral-100 text-neutral-500 dark:bg-white/5 dark:text-white/40 transition-colors">
          {CATEGORY_LABELS[block.category]?.[isAf ? 'af' : 'en'] || block.category}
        </span>
        {block.styleCount > 0 && (
          <span className="px-2 py-0.5 rounded text-[11px] shrink-0 bg-pink-500/20 text-pink-700 dark:text-pink-300 transition-all hover:bg-pink-500/30">
            <Paintbrush size={10} className="inline mr-1" />
            {block.styleCount} {isAf ? 'style' : 'styles'}
          </span>
        )}
        {block.cssMissing && (
          <span className="px-2 py-0.5 rounded text-[11px] shrink-0 bg-amber-500/20 text-amber-700 dark:text-amber-300 transition-all hover:bg-amber-500/30">
            <AlertTriangle size={10} className="inline mr-1" />
            CSS
          </span>
        )}

        {/* CSS approach tag */}
        <span className={`ml-auto px-2 py-0.5 rounded text-[11px] shrink-0 transition-all ${CSS_APPROACH_LABELS[block.cssApproach]?.color || ''}`}>
          {CSS_APPROACH_LABELS[block.cssApproach]?.label || block.cssApproach}
        </span>
      </button>

      {/* ─── Expanded Detail ─────────────────────────── */}
      {isExpanded && (
        <div className="border-t border-neutral-100 dark:border-white/5 px-4 py-4 animate-fadeIn">
          {/* Block Preview */}
          <div className="mb-4">
            <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">
              {isAf ? 'Voorskou' : 'Preview'}
            </h4>
            <BlockPreview block={block} />
          </div>

          {/* Description */}
          <p className="text-neutral-600 dark:text-white/60 mb-4 leading-relaxed">{block.description}</p>

          {/* Tabs */}
          <div className="flex gap-1 mb-4">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-3 py-1.5 rounded text-sm transition-all duration-200 ${
                activeTab === 'info' 
                  ? 'bg-neutral-900/80 text-white dark:bg-white/15 dark:text-white shadow-sm' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:shadow-sm dark:bg-white/5 dark:text-white/40 dark:hover:bg-white/10'
              }`}
            >
              <Eye size={14} className="inline mr-1.5" />
              {isAf ? 'Besonderhede' : 'Details'}
            </button>
            {block.guidelinePath && (
              <button
                onClick={() => setActiveTab('guideline')}
                className={`px-3 py-1.5 rounded text-sm transition-all duration-200 ${
                  activeTab === 'guideline' 
                    ? 'bg-neutral-900/80 text-white dark:bg-white/15 dark:text-white shadow-sm' 
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:shadow-sm dark:bg-white/5 dark:text-white/40 dark:hover:bg-white/10'
                }`}
              >
                <BookOpen size={14} className="inline mr-1.5" />
                {isAf ? 'Riglyn' : 'Guideline'}
              </button>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-4">
                {/* React file */}
                {block.reactFile && (
                  <div className="group/item">
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">React Component</h4>
                    <div className="flex items-center gap-2">
                      <FileCode size={14} className="text-blue-500 dark:text-blue-400 shrink-0" />
                      <code className="text-blue-600 dark:text-blue-300 text-sm break-all">{block.reactDir}/{block.reactFile}</code>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(`src/app/components/${block.reactDir}/${block.reactFile}`, block.id + '-react');
                        }}
                        className="text-neutral-400 hover:text-neutral-600 dark:text-white/30 dark:hover:text-white/60 p-1 rounded hover:bg-neutral-100 dark:hover:bg-white/10 transition-all shrink-0"
                        title={isAf ? 'Kopieer pad' : 'Copy path'}
                      >
                        {copiedId === block.id + '-react' ? <Check size={12} className="text-green-600 dark:text-green-400" /> : <Copy size={12} />}
                      </button>
                    </div>
                  </div>
                )}

                {/* WordPress block */}
                {block.wpBlock && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">WordPress Block</h4>
                    <code className="text-emerald-600 dark:text-emerald-300 text-sm bg-emerald-50 dark:bg-emerald-950/20 px-2 py-1 rounded">{block.wpBlock}</code>
                  </div>
                )}

                {/* Style directory */}
                {block.styleDir && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Styl-gids' : 'Style Directory'}
                    </h4>
                    <div>
                      <code className="text-pink-600 dark:text-pink-300 text-sm bg-pink-50 dark:bg-pink-950/20 px-2 py-1 rounded">styles/blocks/{block.styleDir}/</code>
                      <span className="ml-2 text-neutral-500 dark:text-white/40 text-xs">({block.styleCount} {isAf ? 'lêers' : 'files'})</span>
                    </div>
                  </div>
                )}

                {/* Block styles */}
                {block.blockStyles.length > 0 && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Blok-style' : 'Block Styles'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {block.blockStyles.map(s => (
                        <Link
                          key={s}
                          to="/ontwikkelaar/blok-styl"
                          className="px-2 py-1 rounded text-xs bg-pink-500/10 text-pink-600 hover:bg-pink-500/20 dark:text-pink-300 transition-all hover:shadow-sm inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          .is-style-{s}
                          <ExternalLink size={10} className="ml-1 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CSS info */}
                <div>
                  <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">CSS</h4>
                  <span className={`px-2 py-1 rounded text-xs ${CSS_APPROACH_LABELS[block.cssApproach]?.color}`}>
                    {CSS_APPROACH_LABELS[block.cssApproach]?.label}
                  </span>
                  {block.cssMissing && (
                    <p className="mt-2 text-amber-600 dark:text-amber-300/70 text-xs flex items-start gap-1 bg-amber-50 dark:bg-amber-950/20 p-2 rounded">
                      <AlertTriangle size={12} className="shrink-0 mt-0.5" />
                      {block.cssMissing}
                    </p>
                  )}
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* Section styles */}
                {block.sectionStyles.length > 0 && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Afdeling-style' : 'Section Styles'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {block.sectionStyles.map(s => (
                        <Link
                          key={s}
                          to="/ontwikkelaar/afdeling-style"
                          className="px-2 py-1 rounded text-xs bg-violet-500/10 text-violet-600 hover:bg-violet-500/20 dark:text-violet-300 transition-all hover:shadow-sm inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {s}
                          <ExternalLink size={10} className="ml-1 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Patterns */}
                {block.patterns.length > 0 && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Patrone' : 'Patterns'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {block.patterns.map(p => (
                        <Link
                          key={p}
                          to="/ontwikkelaar/patrone"
                          className="px-2 py-1 rounded text-xs bg-fuchsia-500/10 text-fuchsia-600 hover:bg-fuchsia-500/20 dark:text-fuchsia-300 transition-all hover:shadow-sm inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {p}
                          <ExternalLink size={10} className="ml-1 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Templates */}
                {block.templates.length > 0 && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Sjablone' : 'Templates'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {block.templates.map(t => (
                        <Link
                          key={t}
                          to="/ontwikkelaar/sjablone"
                          className="px-2 py-1 rounded text-xs bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 dark:text-indigo-300 transition-all hover:shadow-sm inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {t}
                          <ExternalLink size={10} className="ml-1 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Parts */}
                {block.parts.length > 0 && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Onderdele' : 'Parts'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {block.parts.map(p => (
                        <Link
                          key={p}
                          to="/ontwikkelaar/sjablone-onderdeel"
                          className="px-2 py-1 rounded text-xs bg-teal-500/10 text-teal-600 hover:bg-teal-500/20 dark:text-teal-300 transition-all hover:shadow-sm inline-flex items-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {p}
                          <ExternalLink size={10} className="ml-1 opacity-50" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Guideline link */}
                {block.guidelinePath && (
                  <div>
                    <h4 className="text-neutral-500 dark:text-white/40 text-xs uppercase tracking-wider mb-1.5 font-semibold">
                      {isAf ? 'Riglyn' : 'Guideline'}
                    </h4>
                    <code className="text-emerald-600 dark:text-emerald-300/70 text-xs bg-emerald-50 dark:bg-emerald-950/20 px-2 py-1 rounded break-all">/guidelines/{block.guidelinePath}</code>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'guideline' && block.guidelinePath && (
            <div className="border border-neutral-200 dark:border-white/5 rounded-lg overflow-hidden">
              <WpMarkdownViewer
                filename={block.guidelinePath.split('/').pop() || ''}
                glob={wpAllGuidelines}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
