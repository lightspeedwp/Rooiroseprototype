/**
 * PresetsBrowser — Theme.json Presets Browser dev tool page.
 *
 * Route: /ontwikkelaar/voorinstellings
 * 9 tabs: Typography Presets, Colors, Font Sizes, Spacing, Shadows, Border Radius, Border Widths, Aspect Ratios, Guidelines
 * Each preset shows: slug, value, CSS variable, theme.json reference, used-in block styles.
 * Typography Presets show: live preview, element detail table, full JSON, diff from default.
 * Copy-to-clipboard for CSS var, theme.json ref, and raw value.
 *
 * Split into sub-components for memory optimization (Task #33):
 * - presets-browser/TypographyPresetsTab.tsx
 * - presets-browser/ColorsTab.tsx
 * - presets-browser/GuidelinesTab.tsx
 * - presets-browser/SharedComponents.tsx
 * - presets-browser/utils.ts
 */

import React, { useState } from 'react';
import { useTabRoute } from '../../hooks/useTabRoute';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import {
  PRESET_TABS,
  PRESET_SUMMARY,
  COLOR_PRESETS,
  FONT_SIZE_PRESETS,
  SPACING_PRESETS,
  SHADOW_PRESETS,
  BORDER_RADIUS_PRESETS,
  BORDER_WIDTH_PRESETS,
  ASPECT_RATIO_PRESETS,
  type PresetCategory,
} from '../../data/themeJsonPresetsData';

// Sub-components
import { TypographyPresetsTab } from './presets-browser/TypographyPresetsTab';
import { ColorsTab } from './presets-browser/ColorsTab';
import { GuidelinesTab } from './presets-browser/GuidelinesTab';
import { CopyButton, UsageBadges } from './presets-browser/SharedComponents';
import { useCopy, PRESETS_TAB_SLUGS } from './presets-browser/utils';

// ─── Tab: Font Sizes ────────────────────────────────────────────────────────

function FontSizesTab({ search }: { search: string }) {
  const { copied, copy } = useCopy();
  const filtered = FONT_SIZE_PRESETS.filter(f =>
    `${f.slug} ${f.name} ${f.value} ${f.typicalUsage}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filtered.map(f => (
        <div key={f.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Live preview */}
          <div className="w-20 shrink-0 flex items-center justify-center">
            <span
              className="text-gray-900 dark:text-white leading-none"
              style={{ fontSize: f.value, fontFamily: f.typicalFamily === 'Roboto Serif' ? '"Roboto Serif", serif' : '"Inter", sans-serif' }}
            >
              Aa
            </span>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-900 dark:text-white">{f.name}</span>
              <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{f.value}</code>
              <span className="text-[10px] text-gray-400 dark:text-white/25">{f.pxApprox}</span>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-white/40">{f.typicalFamily} — {f.typicalUsage}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{f.cssVariable}</code>
              <CopyButton text={`var(${f.cssVariable})`} id={`css-${f.slug}`} copied={copied} copy={copy} label="CSS" />
              <CopyButton text={f.themeJsonRef} id={`ref-${f.slug}`} copied={copied} copy={copy} label="JSON" />
            </div>
            <UsageBadges styles={f.usedInBlockStyles} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Spacing ───────────────────────────────────────────────────────────

function SpacingTab({ search }: { search: string }) {
  const { copied, copy } = useCopy();
  const filtered = SPACING_PRESETS.filter(s =>
    `${s.slug} ${s.name} ${s.value}`.toLowerCase().includes(search.toLowerCase())
  );
  const maxPx = Math.max(...SPACING_PRESETS.map(s => s.pxValue), 1);

  return (
    <div className="space-y-3">
      {filtered.map(s => (
        <div key={s.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Visual bar */}
          <div className="w-32 shrink-0">
            <div
              className="h-5 rounded bg-blue-500/20 dark:bg-blue-400/20 border border-blue-500/30"
              style={{ width: `${Math.max((s.pxValue / maxPx) * 100, 8)}%` }}
            />
            <span className="text-[10px] text-gray-400 dark:text-white/25 mt-0.5 block">{s.pxValue}px</span>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-900 dark:text-white">{s.name}</span>
              <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{s.value}</code>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{s.cssVariable}</code>
              <CopyButton text={`var(${s.cssVariable})`} id={`css-${s.slug}`} copied={copied} copy={copy} label="CSS" />
              <CopyButton text={s.themeJsonRef} id={`ref-${s.slug}`} copied={copied} copy={copy} label="JSON" />
              <CopyButton text={s.value} id={`raw-${s.slug}`} copied={copied} copy={copy} label="clamp()" />
            </div>
            <UsageBadges styles={s.usedInBlockStyles} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Shadows ───────────────────────────────────────────────────────────

function ShadowsTab({ search }: { search: string }) {
  const { copied, copy } = useCopy();
  const filtered = SHADOW_PRESETS.filter(s =>
    `${s.slug} ${s.name} ${s.value}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filtered.map(s => (
        <div key={s.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Visual preview */}
          <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-lg">
            <div
              className="w-12 h-12 rounded-lg bg-white dark:bg-white/90"
              style={{ boxShadow: s.value }}
            />
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <span className="text-sm text-gray-900 dark:text-white">{s.name}</span>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{s.cssVariable}</code>
              <CopyButton text={`var(${s.cssVariable})`} id={`css-${s.slug}`} copied={copied} copy={copy} label="CSS" />
              <CopyButton text={s.themeJsonRef} id={`ref-${s.slug}`} copied={copied} copy={copy} label="JSON" />
            </div>
            <UsageBadges styles={s.usedInBlockStyles} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Border Radius ─────────────────────────────────────────────────────

function BorderRadiusTab({ search }: { search: string }) {
  const { copied, copy } = useCopy();
  const filtered = BORDER_RADIUS_PRESETS.filter(r =>
    `${r.slug} ${r.name} ${r.value}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filtered.map(r => (
        <div key={r.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Visual preview */}
          <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-lg">
            <div
              className="w-12 h-12 bg-custom-primary/20 border-2 border-custom-primary"
              style={{ borderRadius: r.value }}
            />
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-900 dark:text-white">{r.name}</span>
              <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{r.value}</code>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{r.cssVariable}</code>
              <CopyButton text={`var(${r.cssVariable})`} id={`css-${r.slug}`} copied={copied} copy={copy} label="CSS" />
              <CopyButton text={r.themeJsonRef} id={`ref-${r.slug}`} copied={copied} copy={copy} label="JSON" />
            </div>
            <UsageBadges styles={r.usedInBlockStyles} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Border Widths ─────────────────────────────────────────────────────

function BorderWidthsTab({ search }: { search: string }) {
  const { copied, copy } = useCopy();
  const filtered = BORDER_WIDTH_PRESETS.filter(w =>
    `${w.slug} ${w.name} ${w.value}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filtered.map(w => (
        <div key={w.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Visual preview */}
          <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gray-50 dark:bg-white/5 rounded-lg">
            <div
              className="w-12 h-12 bg-white dark:bg-white/90 border-custom-primary rounded"
              style={{ borderWidth: w.value, borderStyle: 'solid' }}
            />
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-900 dark:text-white">{w.name}</span>
              <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{w.value}</code>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <code className="text-[10px] text-gray-500 dark:text-white/30 font-mono">{w.cssVariable}</code>
              <CopyButton text={`var(${w.cssVariable})`} id={`css-${w.slug}`} copied={copied} copy={copy} label="CSS" />
              <CopyButton text={w.themeJsonRef} id={`ref-${w.slug}`} copied={copied} copy={copy} label="JSON" />
            </div>
            <UsageBadges styles={w.usedInBlockStyles} />
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Aspect Ratios ─────────────────────────────────────────────────────

function AspectRatiosTab({ search }: { search: string }) {
  const filtered = ASPECT_RATIO_PRESETS.filter(a =>
    `${a.slug} ${a.name} ${a.usage}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-4">
      {filtered.map(a => (
        <div key={a.slug} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
          {/* Visual preview */}
          <div className="shrink-0" style={{ width: '120px' }}>
            <div
              className="bg-custom-primary/10 border-2 border-custom-primary/30 rounded flex items-center justify-center text-[10px] text-custom-primary"
              style={{ aspectRatio: a.ratio }}
            >
              {a.ratio}
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-900 dark:text-white">{a.name}</span>
              <code className="text-[11px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50">{a.ratio}</code>
            </div>
            <p className="text-[11px] text-gray-500 dark:text-white/40">{a.usage}</p>
            <code className="block text-[10px] text-gray-400 dark:text-white/25 font-mono">{a.cssClass}</code>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export const PresetsBrowser = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const { activeTab, setActiveTab } = useTabRoute<PresetCategory>('/ontwikkelaar/voorinstellings', PRESETS_TAB_SLUGS, 'typographyPresets');
  const [search, setSearch] = useState('');

  const heroMeta = resolveHeroMeta(HERO_META.presetsBrowser, isAf);
  const stats: HeroStat[] = [
    { label: isAf ? 'Kleure' : 'Colors', value: String(PRESET_SUMMARY.colors) },
    { label: isAf ? 'Lettergroottes' : 'Font Sizes', value: String(PRESET_SUMMARY.fontSizes) },
    { label: isAf ? 'Spasiering' : 'Spacing', value: String(PRESET_SUMMARY.spacing) },
    { label: isAf ? 'Totaal' : 'Total', value: String(PRESET_SUMMARY.totalPresets) },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'typographyPresets': return <TypographyPresetsTab search={search} isAf={isAf} />;
      case 'colors': return <ColorsTab search={search} />;
      case 'fontSizes': return <FontSizesTab search={search} />;
      case 'spacing': return <SpacingTab search={search} />;
      case 'shadows': return <ShadowsTab search={search} />;
      case 'borderRadius': return <BorderRadiusTab search={search} />;
      case 'borderWidth': return <BorderWidthsTab search={search} />;
      case 'aspectRatios': return <AspectRatiosTab search={search} />;
      case 'guidelines': return <GuidelinesTab search={search} isAf={isAf} />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      <DevToolHero {...heroMeta} stats={stats} />

      {/* Tab Bar */}
      <div className="flex flex-wrap gap-1 border-b border-gray-200 dark:border-white/[0.06] pb-px">
        {PRESET_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setSearch(''); }}
            className={`px-3 py-2 text-xs rounded-t-lg transition-colors ${
              activeTab === tab.key
                ? 'bg-white dark:bg-white/[0.06] text-custom-primary border border-b-0 border-gray-200 dark:border-white/[0.06]'
                : 'text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60'
            }`}
          >
            <span className="mr-1">{tab.icon}</span>
            {isAf ? tab.labelAf : tab.labelEn}
            <span className="ml-1.5 text-[10px] text-gray-400 dark:text-white/25">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <DevSearchBar
        value={search}
        onChange={setSearch}
        placeholder={isAf ? 'Soek voorinstellings...' : 'Search presets...'}
      />

      {/* Active Tab Content */}
      {renderActiveTab()}

      {/* Related Tools */}
      <DevRelatedTools
        tools={RELATED_TOOLS_MAP.presetsBrowser}
        currentSlug="voorinstellings"
        isAf={isAf}
      />
    </div>
  );
};
