import React, { useState } from 'react';
import { FileJson, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { TYPOGRAPHY_PRESETS } from '../../../data/themeJsonPresetsData';
import { CopyButton } from './SharedComponents';
import { useCopy, parseCssString } from './utils';

interface TypographyPresetsTabProps {
  search: string;
  isAf: boolean;
}

export const TypographyPresetsTab: React.FC<TypographyPresetsTabProps> = ({ search, isAf }) => {
  const { copied, copy } = useCopy();
  const [expandedPreset, setExpandedPreset] = useState<string | null>(null);
  const filtered = TYPOGRAPHY_PRESETS.filter(p =>
    `${p.slug} ${p.title} ${p.titleAf} ${p.tags.join(' ')}`.toLowerCase().includes(search.toLowerCase())
  );

  const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
  const sampleText = isAf ? 'rooi rose — verhale wat aanraak' : 'rooi rose — stories that matter';

  return (
    <div className="space-y-6">
      {/* Intro note */}
      <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20">
        <div className="flex items-start gap-2 text-xs text-blue-700 dark:text-blue-300">
          <FileJson size={14} className="mt-0.5 shrink-0" />
          <div>
            <p>
              {isAf
                ? 'Tipografie-voorinstellings is WordPress FSE-styl variasies wat in die styles/typography/ gids woon. Kies een in die Site Editor onder Styl → Tipografie.'
                : 'Typography presets are WordPress FSE style variations that live in the styles/typography/ directory. Select one in the Site Editor under Styles → Typography.'}
            </p>
            <p className="mt-1 text-blue-600 dark:text-blue-400">
              {isAf
                ? 'Bron: OllieWP/ollie styl variasie patroon (theme.json v3)'
                : 'Source: OllieWP/ollie style variation pattern (theme.json v3)'}
            </p>
          </div>
        </div>
      </div>

      {filtered.map(preset => {
        const isExpanded = expandedPreset === preset.slug;
        return (
          <div
            key={preset.slug}
            className={`rounded-xl border-2 transition-all ${
              preset.isDefault
                ? 'border-brand-red/40 bg-red-50/30 dark:bg-red-500/5'
                : 'border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02]'
            }`}
          >
            {/* Header */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-gray-900 dark:text-white">
                    {isAf ? preset.titleAf : preset.title}
                  </h3>
                  {preset.isDefault && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-brand-red/10 text-brand-red">
                      <Star size={10} className="fill-brand-red" />
                      {isAf ? 'Standaard' : 'Default'}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <CopyButton
                    text={preset.json}
                    id={`json-${preset.slug}`}
                    copied={copied}
                    copy={copy}
                    label="JSON"
                  />
                  <CopyButton
                    text={preset.filePath}
                    id={`path-${preset.slug}`}
                    copied={copied}
                    copy={copy}
                    label={isAf ? 'Pad' : 'Path'}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-white/40 mb-4">
                {isAf ? preset.descriptionAf : preset.descriptionEn}
              </p>
              <code className="block text-[10px] text-gray-400 dark:text-white/25 font-mono mb-4">
                {preset.filePath}
              </code>

              {/* Key differences */}
              {!preset.isDefault && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(isAf ? preset.differencesAf : preset.differencesEn).map((diff, i) => (
                    <span key={i} className="inline-flex px-2 py-0.5 rounded text-[10px] bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">
                      {diff}
                    </span>
                  ))}
                </div>
              )}

              {/* Live preview — heading scale */}
              <div className="rounded-lg border border-gray-200 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] p-5 space-y-3">
                <div className="text-[10px] text-gray-400 dark:text-white/25 uppercase tracking-wider mb-2">
                  {isAf ? 'Lewendige Voorskou' : 'Live Preview'}
                </div>
                {headingLevels.map(level => {
                  const el = preset.elements[level];
                  const cssProps = parseCssString(el.css || '');
                  return (
                    <div key={level} className="flex items-baseline gap-3">
                      <span className="text-[10px] text-gray-400 dark:text-white/25 w-6 shrink-0 uppercase">{level}</span>
                      <span
                        className="text-gray-900 dark:text-white"
                        style={{
                          fontFamily: el.fontFamily,
                          fontSize: el.fontSize || '1rem',
                          fontWeight: el.fontWeight,
                          textTransform: (el.textTransform || 'none') as React.CSSProperties['textTransform'],
                          ...cssProps,
                        }}
                      >
                        {sampleText}
                      </span>
                    </div>
                  );
                })}
                {/* Body sample */}
                <div className="flex items-baseline gap-3 pt-2 border-t border-gray-200 dark:border-white/[0.06]">
                  <span className="text-[10px] text-gray-400 dark:text-white/25 w-6 shrink-0">body</span>
                  <span
                    className="text-gray-700 dark:text-white/70 text-sm"
                    style={{
                      fontFamily: preset.bodyFontFamily,
                      lineHeight: preset.bodyLineHeight,
                    }}
                  >
                    {isAf
                      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ons missie is om die gemeenskap te dien met betroubare, diepgaande joernalistiek in Afrikaans.'
                      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our mission is to serve the community with reliable, in-depth journalism in Afrikaans.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Expand/collapse for full JSON */}
            <div className="border-t border-gray-200 dark:border-white/[0.06]">
              <button
                onClick={() => setExpandedPreset(isExpanded ? null : preset.slug)}
                className="w-full flex items-center justify-center gap-1.5 text-xs py-2.5 text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors rounded-b-xl"
              >
                {isAf ? 'Volledige JSON' : 'Full JSON'}
                {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
              {isExpanded && (
                <div className="px-5 pb-5">
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-gray-900 text-gray-100 text-xs font-mono overflow-x-auto max-h-[400px]">
                      {preset.json}
                    </pre>
                    <div className="absolute top-2 right-2">
                      <CopyButton
                        text={preset.json}
                        id={`fulljson-${preset.slug}`}
                        copied={copied}
                        copy={copy}
                        label={isAf ? 'Kopieer' : 'Copy'}
                      />
                    </div>
                  </div>
                  {/* Element detail table */}
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-white/10">
                          <th className="text-left py-2 px-2 text-gray-400 dark:text-white/30">{isAf ? 'Element' : 'Element'}</th>
                          <th className="text-left py-2 px-2 text-gray-400 dark:text-white/30">{isAf ? 'Lettertipe' : 'Font'}</th>
                          <th className="text-left py-2 px-2 text-gray-400 dark:text-white/30">{isAf ? 'Grootte' : 'Size'}</th>
                          <th className="text-left py-2 px-2 text-gray-400 dark:text-white/30">{isAf ? 'Gewig' : 'Weight'}</th>
                          <th className="text-left py-2 px-2 text-gray-400 dark:text-white/30">CSS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {headingLevels.map(level => {
                          const el = preset.elements[level];
                          return (
                            <tr key={level} className="border-b border-gray-100 dark:border-white/5">
                              <td className="py-2 px-2 text-gray-900 dark:text-white uppercase">{level}</td>
                              <td className="py-2 px-2 text-gray-600 dark:text-white/60 font-mono text-[10px]">{el.fontFamily.split(',')[0].replace(/"/g, '')}</td>
                              <td className="py-2 px-2 text-gray-600 dark:text-white/60 font-mono text-[10px]">{el.fontSize || 'inherit'}</td>
                              <td className="py-2 px-2 text-gray-600 dark:text-white/60">{el.fontWeight}</td>
                              <td className="py-2 px-2 text-gray-500 dark:text-white/40 font-mono text-[10px] max-w-[200px] truncate">{el.css || '—'}</td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td className="py-2 px-2 text-gray-900 dark:text-white">body</td>
                          <td className="py-2 px-2 text-gray-600 dark:text-white/60 font-mono text-[10px]">{preset.bodyFontFamily.split(',')[0].replace(/"/g, '')}</td>
                          <td className="py-2 px-2 text-gray-600 dark:text-white/60 font-mono text-[10px]">1rem</td>
                          <td className="py-2 px-2 text-gray-600 dark:text-white/60">400</td>
                          <td className="py-2 px-2 text-gray-500 dark:text-white/40 font-mono text-[10px]">line-height: {preset.bodyLineHeight}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};