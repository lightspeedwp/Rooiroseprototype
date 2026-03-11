import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Copy, Check, AlertTriangle, CheckCircle2, Circle, Zap,
  LayoutGrid, Paintbrush
} from 'lucide-react';
import { useDevLanguage } from '../../../context/DevLanguageContext';
import { getTranslation } from '../../../data/devTranslations';
import { wpPatterns } from '../../../data/wpFileLoader';
import {
  getCorrectWpFile,
  type PatternEntry, type PatternFolder
} from '../../../data/patternBrowserData';
import { useDiskFileStats } from '../../../hooks/useDiskFileStats';
import { DiskStatsPanel } from '../../../components/dev/DiskStatsPanel';
import { PATTERN_TO_BLOCK_STYLES, PATTERN_TO_SECTION_STYLES } from './utils';
import { USAGE_STYLES } from './constants';

export const PatternInfoTab = ({ pattern, folder }: { pattern: PatternEntry; folder: PatternFolder }) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const { loadStats, getStats, isLoading } = useDiskFileStats(wpPatterns);
  const resolvedWpFile = getCorrectWpFile(pattern.slug);
  const wpFilename = resolvedWpFile.split('/').pop() || '';

  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    loadStats(wpFilename);
  }, [wpFilename, loadStats]);

  const diskStats = getStats(wpFilename);
  const diskLoading = isLoading(wpFilename);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CopyBtn = ({ text, id, small = false }: { text: string; id: string; small?: boolean }) => (
    <button
      onClick={(e) => { e.stopPropagation(); handleCopy(text, id); }}
      className={`flex items-center gap-1 text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors ${small ? '' : 'text-xs'}`}
      title={t('common.copy')}
    >
      {copiedId === id ? <Check size={small ? 10 : 12} className="text-green-400" /> : <Copy size={small ? 10 : 12} />}
      {!small && <span>{copiedId === id ? t('common.copied') : t('common.copy')}</span>}
    </button>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left column */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          {[
            { label: 'Slug', value: pattern.slug, copyId: `slug-${pattern.id}` },
            { label: 'React', value: pattern.reactSource },
            { label: 'WP File', value: resolvedWpFile, copyId: `wp-${pattern.id}` },
            { label: 'Folder', value: folder },
            { label: 'Category', value: pattern.patternCategory },
          ].map(row => (
            <div key={row.label} className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-16 shrink-0">{row.label}</span>
              <code className="text-xs text-blue-600 dark:text-blue-400 font-mono">{row.value}</code>
              {row.copyId && <CopyBtn text={row.value} id={row.copyId} small />}
            </div>
          ))}
        </div>

        <DiskStatsPanel stats={diskStats} loading={diskLoading} isAf={isAf} />

        {pattern.description && (
          <p className="text-xs text-gray-600 dark:text-white/60 border-l-2 border-gray-200 dark:border-white/10 pl-3">{pattern.description}</p>
        )}

        {pattern.implementationNotes && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1">
              <Zap size={10} />
              {t('pb.implGuide')}
            </h4>
            <p className="text-xs text-gray-700 dark:text-white/70 leading-relaxed">{pattern.implementationNotes}</p>
          </div>
        )}

        {pattern.typographyNotes && pattern.typographyNotes.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">{t('pb.typography')}</h4>
            <ul className="space-y-0.5">
              {pattern.typographyNotes.map((note, i) => (
                <li key={i} className={`text-xs flex items-start gap-1.5 ${note.includes('Compliant') ? 'text-green-400' : 'text-amber-400'}`}>
                  {note.includes('CRITICAL') ? <AlertTriangle size={10} className="mt-0.5 shrink-0" /> : note.includes('Compliant') ? <CheckCircle2 size={10} className="mt-0.5 shrink-0" /> : <Circle size={10} className="mt-0.5 shrink-0" />}
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}

        {pattern.cssNotes && pattern.cssNotes.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-cyan-400 mb-1.5">{t('pb.cssMapping')}</h4>
            <ul className="space-y-0.5">
              {pattern.cssNotes.map((note, i) => (
                <li key={i} className="text-xs text-gray-600 dark:text-white/50 font-mono">{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right column */}
      <div className="space-y-4">
        {/* Used In */}
        <div>
          <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5">{t('pb.usedIn')}</h4>
          {(!pattern.usedIn || pattern.usedIn.length === 0) ? (
            <span className="text-xs text-gray-400 dark:text-white/25 italic">{t('pb.noDirectUsage')}</span>
          ) : (
            <div className="space-y-1">
              {pattern.usedIn.map((u, i) => {
                const style = USAGE_STYLES[u.type] || USAGE_STYLES.inline;
                return (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider ${style.bg} ${style.color}`}>{u.type}</span>
                    <code className="text-gray-600 dark:text-white/50 font-mono">{u.slug}</code>
                    <span className="text-gray-400 dark:text-white/30">— {u.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sections */}
        {pattern.sections && pattern.sections.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5">{t('pb.sections')} ({pattern.sections.length})</h4>
            <div className="flex flex-wrap gap-1">
              {pattern.sections.map(s => (
                <span key={s} className="px-1.5 py-0.5 bg-gray-100 dark:bg-white/5 text-[10px] text-gray-600 dark:text-white/40 rounded">{s}</span>
              ))}
            </div>
          </div>
        )}

        {/* WP Blocks */}
        {pattern.wpBlocks && pattern.wpBlocks.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5">{t('pb.wpBlocks')} ({pattern.wpBlocks.length})</h4>
            <div className="flex flex-wrap gap-1">
              {pattern.wpBlocks.map(b => (
                <span key={b} className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${b.startsWith('die-papier/') ? 'bg-brand-red/10 text-brand-red dark:text-red-400' : 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'}`}>{b}</span>
              ))}
            </div>
          </div>
        )}

        {/* Section Styles */}
        {(() => {
          const shortSlug = pattern.slug.replace('die-papier/', '');
          const sectionStyles = PATTERN_TO_SECTION_STYLES.get(shortSlug) || [];
          if (sectionStyles.length === 0) return null;
          return (
            <div>
              <h4 className="text-[10px] uppercase tracking-wider text-violet-400 mb-1.5 flex items-center gap-1">
                <LayoutGrid size={10} />
                {t('pb.sectionStylesLabel')} ({sectionStyles.length})
              </h4>
              <div className="flex flex-wrap gap-1">
                {sectionStyles.map(ss => (
                  <Link key={ss.id} to="/ontwikkelaar/afdeling-style" onClick={e => e.stopPropagation()}
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-500/20 transition-colors inline-flex items-center gap-1">
                    <LayoutGrid size={8} />
                    {ss.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Block Styles */}
        {(() => {
          const shortSlug = pattern.slug.replace('die-papier/', '');
          const blockStyles = PATTERN_TO_BLOCK_STYLES.get(shortSlug) || [];
          if (blockStyles.length === 0) return null;
          return (
            <div>
              <h4 className="text-[10px] uppercase tracking-wider text-pink-400 mb-1.5 flex items-center gap-1">
                <Paintbrush size={10} />
                {t('pb.blockStylesLabel')} ({blockStyles.length})
              </h4>
              <div className="flex flex-wrap gap-1">
                {blockStyles.map(bs => (
                  <Link key={bs.id} to="/ontwikkelaar/blok-styl" onClick={e => e.stopPropagation()}
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-pink-50 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-500/20 transition-colors inline-flex items-center gap-1">
                    <Paintbrush size={8} />
                    <span>{bs.label}</span>
                    <span className="text-[8px] text-pink-400/60 dark:text-pink-400/40">({bs.targetBlock})</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Dynamic Features */}
        {pattern.dynamicFeatures && pattern.dynamicFeatures.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1">
              <Zap size={10} />
              {t('pb.dynamicFeatures')}
            </h4>
            <ul className="space-y-0.5">
              {pattern.dynamicFeatures.map((f, i) => (
                <li key={i} className="text-xs text-gray-600 dark:text-white/50 flex items-start gap-1.5">
                  <span className="text-amber-400 mt-0.5">*</span> {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* PHP Parameters */}
        {pattern.phpParams && pattern.phpParams.length > 0 && (
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-1.5">PHP Params ({pattern.phpParams.length})</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10">
                    <th className="px-1.5 py-1 text-left text-gray-400 dark:text-white/30">{t('pb.name')}</th>
                    <th className="px-1.5 py-1 text-left text-gray-400 dark:text-white/30">{t('pb.type')}</th>
                    <th className="px-1.5 py-1 text-left text-gray-400 dark:text-white/30">{t('pb.default')}</th>
                    <th className="px-1.5 py-1 text-left text-gray-400 dark:text-white/30">{t('pb.description')}</th>
                  </tr>
                </thead>
                <tbody>
                  {pattern.phpParams.map(p => (
                    <tr key={p.name} className="border-b border-gray-100 dark:border-white/5">
                      <td className="px-1.5 py-1 font-mono text-purple-600 dark:text-purple-400">${p.name}</td>
                      <td className="px-1.5 py-1 text-gray-500 dark:text-white/40">{p.type}</td>
                      <td className="px-1.5 py-1 font-mono text-gray-500 dark:text-white/40">{p.default}</td>
                      <td className="px-1.5 py-1 text-gray-600 dark:text-white/50">{p.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
