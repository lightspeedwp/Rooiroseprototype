import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Copy, Check, Code, FileJson, Tag, HardDrive, FileCode, Braces,
  BookOpen, AlertTriangle, CheckCircle, Palette, Link2
} from 'lucide-react';
import { useDevLanguage } from '../../../context/DevLanguageContext';
import { getTranslation } from '../../../data/devTranslations';
import { CodeBlock } from '../../../components/dev/CodeBlock';
import { WpCodeViewer } from '../../../components/dev/WpCodeViewer';
import { WpMarkdownViewer } from '../../../components/dev/WpMarkdownViewer';
import { wpBlockStyles, wpAllGuidelines } from '../../../data/wpFileLoader';
import { loadBlockStyleJson, type BlockStyleEntry } from '../../../data/blockStylesData';
import { validateJsonStyle, extractPresetRefs, resolveBlockGuideline, countJsonKeys } from './utils';
import { CAT_COLORS, PRESET_TYPE_LABELS, PRESET_CATEGORY_SLUGS } from './constants';

interface BlockStyleCardProps {
  style: BlockStyleEntry;
}

export const BlockStyleCard: React.FC<BlockStyleCardProps> = ({ style }) => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [expandedJson, setExpandedJson] = useState(false);
  const [codeTab, setCodeTab] = useState<'file' | 'code' | 'guidelines'>('file');
  const [diskJsonMap, setDiskJsonMap] = useState<{ loaded: boolean; keys: number } | null>(null);

  const warnings = validateJsonStyle(style.jsonStyle);
  const presetRefs = extractPresetRefs(style.jsonStyle);
  const hasWarnings = warnings.length > 0;

  // Load disk JSON on mount to compare inline vs disk
  useEffect(() => {
    const loadDiskJson = async () => {
      try {
        const diskData = await loadBlockStyleJson(style.wpFilePath);
        if (diskData) {
          const diskKeys = countJsonKeys(diskData.styles?.blocks || {});
          setDiskJsonMap({ loaded: true, keys: diskKeys });
        } else {
          setDiskJsonMap({ loaded: false, keys: 0 });
        }
      } catch {
        setDiskJsonMap({ loaded: false, keys: 0 });
      }
    };
    loadDiskJson();
  }, [style.wpFilePath]);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const toggleJson = () => {
    setExpandedJson(prev => !prev);
  };

  const guideline = resolveBlockGuideline(style.targetBlock, wpAllGuidelines);

  return (
    <div className="p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm text-gray-800 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              {style.label}
            </h3>
            <span className={`px-1.5 py-0.5 rounded text-[9px] ${CAT_COLORS[style.category]}`}>
              {style.category}
            </span>
            {style.isDefault && (
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/20 text-green-300">
                default
              </span>
            )}
            {/* BSP-015: Validation badge */}
            {hasWarnings ? (
              <span
                className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400 inline-flex items-center gap-1"
                title={warnings.map(w => `${w.type}: ${w.path} = ${w.value}`).join('\n')}
              >
                <AlertTriangle size={9} />
                {warnings.length} {warnings.length === 1 ? t('bsb.warning') : t('bsb.warnings')}
              </span>
            ) : (
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/10 text-green-400 inline-flex items-center gap-1">
                <CheckCircle size={9} />
                {t('bsb.valid')}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-white/50 leading-relaxed">{style.description}</p>
        </div>
      </div>

      {/* BSP-015: Validation warnings detail (shown when there are warnings) */}
      {hasWarnings && (
        <div className="rounded-lg bg-amber-500/5 border border-amber-500/20 p-3 space-y-1.5">
          <span className="text-[10px] text-amber-400 uppercase tracking-wider flex items-center gap-1">
            <AlertTriangle size={10} />
            {t('bsb.presetViolations')}
          </span>
          {warnings.map((w, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px]">
              <span className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] ${
                w.type === 'hardcoded-hex' ? 'bg-red-500/15 text-red-400' :
                w.type === 'hardcoded-px' ? 'bg-orange-500/15 text-orange-400' :
                'bg-yellow-500/15 text-yellow-400'
              }`}>
                {w.type === 'hardcoded-hex' ? 'HEX' : w.type === 'hardcoded-px' ? 'PX' : 'CSS VAR'}
              </span>
              <span className="font-mono text-gray-600 dark:text-white/50">{w.path}</span>
              <span className="text-gray-400 dark:text-white/20">=</span>
              <span className="font-mono text-amber-400 break-all">{w.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* CSS Class + WP File */}
      <div className="flex flex-wrap gap-3">
        {style.cssClass && (
          <button
            onClick={() => copyToClipboard(style.cssClass, style.id + '-class')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-white/5 text-xs font-mono text-gray-600 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors group"
          >
            <Code size={10} />
            {style.cssClass}
            {copiedField === style.id + '-class' ? (
              <Check size={10} className="text-green-400" />
            ) : (
              <Copy size={10} className="opacity-0 group-hover:opacity-100" />
            )}
          </button>
        )}
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-white/5 text-[10px] font-mono text-gray-500 dark:text-white/40">
          <Tag size={10} />
          {style.wpFilePath}
        </span>
      </div>

      {/* File / Code / Guidelines Tabs */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={toggleJson}
            className="flex items-center gap-1.5 text-[11px] text-blue-500 hover:text-blue-400 transition-colors"
          >
            <FileJson size={11} />
            {expandedJson ? (isAf ? 'Versteek Lêer/Kode' : 'Hide File/Code') : (isAf ? 'Wys Lêer/Kode' : 'Show File/Code')}
          </button>
          {diskJsonMap && (
            <span className={`px-1.5 py-0.5 rounded text-[9px] inline-flex items-center gap-1 ${
              diskJsonMap.loaded
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            }`}>
              <HardDrive size={9} />
              {diskJsonMap.loaded
                ? `${isAf ? 'Skyf' : 'Disk'}: ${diskJsonMap.keys} ${isAf ? 'waardes' : 'values'}`
                : (isAf ? 'Nie op skyf' : 'Not on disk')}
            </span>
          )}
        </div>
        {expandedJson && (
          <div className="rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
            {/* Tab Buttons */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 bg-gray-50 dark:bg-white/[0.02] border-b border-gray-200 dark:border-white/10">
              <div className="flex gap-1">
                {[
                  { key: 'file' as const, label: isAf ? 'Lêer' : 'File', icon: FileCode },
                  { key: 'code' as const, label: isAf ? 'Kode' : 'Code', icon: Braces },
                  { key: 'guidelines' as const, label: isAf ? 'Riglyne' : 'Guidelines', icon: BookOpen }
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setCodeTab(tab.key)}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors inline-flex items-center gap-1 ${
                      codeTab === tab.key
                        ? 'bg-gray-800 dark:bg-white/15 text-white'
                        : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    <tab.icon size={10} />
                    {tab.label}
                  </button>
                ))}
              </div>
              {codeTab !== 'guidelines' && (
                <button
                  onClick={() => copyToClipboard(
                    codeTab === 'code' ? style.cssFallback : JSON.stringify(style.wpThemeJson, null, 2),
                    `${codeTab}-${style.id}`
                  )}
                  className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-white/40 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  {copiedField === `${codeTab}-${style.id}` ? (
                    <Check size={12} className="text-green-500" />
                  ) : (
                    <Copy size={12} />
                  )}
                  {copiedField === `${codeTab}-${style.id}` ? t('common.copiedToast') : t('common.copy')}
                </button>
              )}
            </div>
            {/* Tab Content */}
            {codeTab === 'file' ? (
              <WpCodeViewer
                glob={wpBlockStyles}
                filename={`/wordpress-export/themes/die-papier-theme/${style.wpFilePath}`}
                isFullPath={true}
                label="theme.json v3"
                maxHeight={320}
              />
            ) : codeTab === 'guidelines' ? (
              <div>
                {guideline.isSpecific && (
                  <div className="px-3 py-1.5 bg-green-500/5 border-b border-green-500/10 text-[10px] text-green-600 dark:text-green-400 flex items-center gap-1.5">
                    <CheckCircle size={10} />
                    {isAf ? `Blok-spesifieke riglyn: ${style.targetBlock}` : `Block-specific guideline: ${style.targetBlock}`}
                  </div>
                )}
                <WpMarkdownViewer
                  glob={wpAllGuidelines}
                  filename={guideline.filename}
                  label={guideline.isSpecific ? `${style.targetBlock} Guide` : 'Block Style Variations Guide'}
                  maxHeight={320}
                  locale={locale}
                />
              </div>
            ) : (
              <CodeBlock
                code={style.cssFallback || '/* No CSS fallback defined */'}
                language="css"
                label="CSS Fallback"
                maxHeight={320}
                editable
              />
            )}
          </div>
        )}
      </div>

      {/* BSP-016: Preset References (shown in expanded view) */}
      {expandedJson && presetRefs.length > 0 && (
        <div className="rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-3 space-y-2">
          <span className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider flex items-center gap-1">
            <Palette size={10} />
            {t('bsb.presetRefs')} ({presetRefs.length})
          </span>
          <div className="flex flex-wrap gap-1.5">
            {presetRefs.map((ref, i) => {
              const labelInfo = PRESET_TYPE_LABELS[ref.type] || PRESET_TYPE_LABELS.other;
              return (
                <Link
                  key={i}
                  to={`/ontwikkelaar/voorinstellings/${PRESET_CATEGORY_SLUGS[ref.type] || ''}`}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-400/50 hover:bg-blue-500/5 transition-colors group"
                >
                  <span className={`text-[9px] ${labelInfo.color}`}>
                    {isAf ? labelInfo.af : labelInfo.en}
                  </span>
                  <span className="text-[10px] font-mono text-gray-700 dark:text-white/70 group-hover:text-blue-400 transition-colors">
                    {ref.slug}
                  </span>
                  <Link2 size={8} className="text-gray-300 dark:text-white/15 group-hover:text-blue-400 transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Used In + Patterns */}
      <div className="flex flex-wrap gap-4">
        {style.usedIn.length > 0 && (
          <div>
            <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider">
              {t('bsb.usedIn')}
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {style.usedIn.map(f => (
                <span key={f} className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-[10px] font-mono text-gray-500 dark:text-white/40">
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}
        {style.patterns.length > 0 && (
          <div>
            <span className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider">
              {t('pb.patterns')}
            </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {style.patterns.map(p => (
                <Link
                  key={p}
                  to="/ontwikkelaar/patrone"
                  className="px-1.5 py-0.5 rounded bg-blue-500/10 text-[10px] font-mono text-blue-400 hover:bg-blue-500/20 transition-colors inline-flex items-center gap-1"
                >
                  <Link2 size={8} />
                  {p}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
