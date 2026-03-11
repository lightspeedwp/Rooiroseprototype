import React from 'react';
import { COLOR_PRESETS } from '../../../data/themeJsonPresetsData';
import { CopyButton, UsageBadges } from './SharedComponents';
import { useCopy } from './utils';

interface ColorsTabProps {
  search: string;
}

export const ColorsTab: React.FC<ColorsTabProps> = ({ search }) => {
  const { copied, copy } = useCopy();
  const filtered = COLOR_PRESETS.filter(c =>
    `${c.slug} ${c.name} ${c.hex} ${c.role}`.toLowerCase().includes(search.toLowerCase())
  );
  const groups = ['brand', 'neutral', 'accent', 'semantic'] as const;
  const groupLabels = { brand: 'Brand', neutral: 'Neutral', accent: 'Accent', semantic: 'Semantic' };

  return (
    <div className="space-y-6">
      {groups.map(group => {
        const items = filtered.filter(c => c.group === group);
        if (items.length === 0) return null;
        return (
          <div key={group}>
            <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3">{groupLabels[group]}</h3>
            <div className="grid gap-3">
              {items.map(c => (
                <div key={c.slug} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
                  {/* Swatch */}
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg border border-gray-200 dark:border-white/10 shadow-sm" style={{ backgroundColor: c.hex }} />
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-gray-900 dark:text-white">{c.name}</span>
                      <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{c.hex}</code>
                      {c.darkPair && <span className="text-[10px] text-gray-400 dark:text-white/25">dark pair: {c.darkPair}</span>}
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-white/40">{c.role}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{c.cssVariable}</code>
                      <CopyButton text={`var(${c.cssVariable})`} id={`css-${c.slug}`} copied={copied} copy={copy} label="CSS" />
                      <CopyButton text={c.themeJsonRef} id={`ref-${c.slug}`} copied={copied} copy={copy} label="JSON" />
                      <CopyButton text={c.hex} id={`hex-${c.slug}`} copied={copied} copy={copy} label="HEX" />
                    </div>
                    <UsageBadges styles={c.usedInBlockStyles} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
