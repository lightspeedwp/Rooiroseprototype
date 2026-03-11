import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { useTabRoute, type TabSlugMap } from '../../hooks/useTabRoute';
import {
  Check, Info, Copy, Download, Sun, Moon, Code, Layers, Type, Palette,
  Move, LayoutDashboard, Maximize2, Search, Paintbrush, LayoutGrid, FolderOpen,
  Mail, Trash2, Plus, X, AlertTriangle, BookOpen, FileCode, LayoutTemplate,
  CheckSquare
} from 'lucide-react';
import { toast } from 'sonner';
import { copyToClipboard } from '../../utils/clipboard';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import {
  COLOR_TOKENS,
  TYPOGRAPHY_TOKENS,
  SPACING_TOKENS,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
  BREAKPOINT_TOKENS,
  LAYOUT_TOKENS,
  FONT_TOKENS,
  extractDesignTokensJSON,
  type ColorToken,
} from '../../data/designTokens';

// Component imports for the Components tab
import { Logo } from '../../components/common/Logo';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';


// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToLuminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(hex1: string, hex2: string): number {
  const l1 = hexToLuminance(hex1);
  const l2 = hexToLuminance(hex2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function contrastLevel(ratio: number) {
  if (ratio >= 7) return { label: 'AAA', pass: true };
  if (ratio >= 4.5) return { label: 'AA', pass: true };
  return { label: 'Fail', pass: false };
}

function needsDarkText(hex: string): boolean {
  return hexToLuminance(hex) > 0.5;
}

// ─── Tabs ────────────────────────────────────────────────────────────────────

type TabId = 'colors' | 'typography' | 'spacing' | 'shadows' | 'components' | 'export' | 'wp-tokens';

const TABS: { id: TabId; labelAf: string; labelEn: string; icon: React.ElementType }[] = [
  { id: 'colors', labelAf: 'Kleure', labelEn: 'Colors', icon: Palette },
  { id: 'typography', labelAf: 'Tipografie', labelEn: 'Typography', icon: Type },
  { id: 'spacing', labelAf: 'Spasiëring & Uitleg', labelEn: 'Spacing & Layout', icon: Move },
  { id: 'shadows', labelAf: 'Skaduwees & Ronde', labelEn: 'Shadows & Borders', icon: Layers },
  { id: 'components', labelAf: 'Komponente', labelEn: 'Components', icon: BookOpen },
  { id: 'export', labelAf: 'Uitvoer', labelEn: 'Export', icon: Download },
  { id: 'wp-tokens', labelAf: 'WP Token-kartering', labelEn: 'WP Token Mapping', icon: FileCode },
];

/** Tab ID → URL slug mapping for sub-tab routing */
const DS_TAB_SLUGS: TabSlugMap = {
  'colors': 'kleure',
  'typography': 'tipografie',
  'spacing': 'spasiering',
  'shadows': 'skaduwees',
  'components': 'komponente',
  'export': 'uitvoer',
  'wp-tokens': 'wp-tokens',
};

// ─── WP Token Mapping Data ──────────────────────────────────────────────────

interface MappedToken {
  section: string;
  preview?: string;
  previewColor?: string;
  dpToken: string;
  value: string;
  wpSlug: string;
  wpVariable: string;
  notes?: string;
}

const MAPPED_TOKENS: MappedToken[] = [
  // Colors
  ...COLOR_TOKENS.map((t) => ({
    section: 'Colors',
    previewColor: t.light,
    dpToken: `--${t.cssVar}`,
    value: t.light,
    wpSlug: t.cssVar.replace('custom-', ''),
    wpVariable: `--wp--preset--color--${t.cssVar.replace('custom-', '')}`,
    notes: t.usage,
  })),
  // Typography
  ...TYPOGRAPHY_TOKENS.map((t) => ({
    section: 'Typography',
    dpToken: t.cssVars?.fontSize || `--text-${t.name.toLowerCase()}`,
    value: t.size,
    wpSlug: t.name.toLowerCase().replace(/\s+/g, '-'),
    wpVariable: `--wp--preset--font-size--${t.name.toLowerCase().replace(/\s+/g, '-')}`,
    notes: `${t.family} ${t.weight}`,
  })),
  // Spacing
  ...SPACING_TOKENS.map((t) => ({
    section: 'Spacing',
    dpToken: `--${t.cssVar}`,
    value: t.value,
    wpSlug: t.name.replace('space.', ''),
    wpVariable: `--wp--preset--spacing--${t.name.replace('space.', '')}`,
    notes: t.usage,
  })),
  // Radii
  ...RADIUS_TOKENS.map((t) => ({
    section: 'Border Radius',
    dpToken: `--radius-${t.name.replace('radius.', '')}`,
    value: t.value,
    wpSlug: t.name.replace('radius.', ''),
    wpVariable: `--wp--custom--border-radius--${t.name.replace('radius.', '')}`,
    notes: '',
  })),
  // Shadows
  ...SHADOW_TOKENS.map((t) => ({
    section: 'Shadows',
    dpToken: `--shadow-${t.name.replace('elevation.', '')}`,
    value: (t.lightValue || '').substring(0, 40) + (t.lightValue && t.lightValue.length > 40 ? '...' : ''),
    wpSlug: t.name.replace('shadow.', '').replace('elevation.', ''),
    wpVariable: `--wp--preset--shadow--${t.name.replace('shadow.', '').replace('elevation.', '')}`,
    notes: '',
  })),
];

const WP_TOKEN_SECTIONS = [...new Set(MAPPED_TOKENS.map((t) => t.section))];



// ─── Main Component ──────────────────────────────────────────────────────────

export const DesignSystem = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);

  const { activeTab, setActiveTab } = useTabRoute<TabId>('/ontwikkelaar/ontwerpstelsel', DS_TAB_SLUGS, 'colors');
  const [colorFilter, setColorFilter] = useState<'all' | 'brand' | 'neutral' | 'system'>('all');
  const [search, setSearch] = useState('');
  const [liveValues, setLiveValues] = useState<Record<string, string>>({});

  // Extract live CSS computed values
  useEffect(() => {
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const values: Record<string, string> = {};
    COLOR_TOKENS.forEach((token) => {
      values[token.cssVar] = computed.getPropertyValue(`--${token.cssVar}`).trim();
    });
    SPACING_TOKENS.forEach((token) => {
      values[token.cssVar] = computed.getPropertyValue(`--${token.cssVar}`).trim();
    });
    setLiveValues(values);
  }, []);

  const copyText = useCallback((text: string) => {
    copyToClipboard(text);
    toast.success(`${isAf ? 'Gekopieer' : 'Copied'}: ${text}`);
  }, [isAf]);

  const handleExportJSON = useCallback(() => {
    const data = extractDesignTokensJSON();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'die-papier-design-tokens.json';
    a.click();
    URL.revokeObjectURL(url);
    toast.success(isAf ? 'Ontwerp-tokens JSON afgelaai' : 'Design tokens JSON downloaded');
  }, [isAf]);

  const handleCopyCSS = useCallback(() => {
    const lines: string[] = [':root {'];
    COLOR_TOKENS.filter(t => t.category !== 'chart' && t.category !== 'sidebar').forEach(t => {
      lines.push(`  --${t.cssVar}: ${t.light};`);
    });
    SPACING_TOKENS.forEach(t => {
      lines.push(`  ${t.cssVar}: ${t.value};`);
    });
    lines.push('}');
    lines.push('');
    lines.push('.dark {');
    COLOR_TOKENS.filter(t => t.category !== 'chart' && t.category !== 'sidebar').forEach(t => {
      lines.push(`  --${t.cssVar}: ${t.dark};`);
    });
    lines.push('}');
    copyToClipboard(lines.join('\n'));
    toast.success(isAf ? 'CSS veranderlikes gekopieer' : 'CSS variables copied');
  }, [isAf]);

  const filteredColors = useMemo(() => {
    let tokens = COLOR_TOKENS;
    if (colorFilter !== 'all') tokens = tokens.filter(t => t.category === colorFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      tokens = tokens.filter(t => t.label.toLowerCase().includes(q) || t.cssVar.toLowerCase().includes(q) || t.usage.toLowerCase().includes(q));
    }
    return tokens;
  }, [colorFilter, search]);

  return (
    <div>
      {/* Hero */}
      <DevToolHero
        icon={HERO_META.designSystem.icon}
        iconColor={HERO_META.designSystem.iconColor}
        title={resolveHeroMeta(HERO_META.designSystem, locale).title}
        description={resolveHeroMeta(HERO_META.designSystem, locale).description}
        stats={[
          { label: isAf ? 'Kleur-tokens' : 'Color tokens', value: COLOR_TOKENS.length },
          { label: isAf ? 'Tipografie' : 'Typography', value: TYPOGRAPHY_TOKENS.length },
          { label: isAf ? 'Spasiëring' : 'Spacing', value: SPACING_TOKENS.length },
          { label: isAf ? 'Skaduwees' : 'Shadows', value: SHADOW_TOKENS.length },
        ]}
      />

      {/* Export buttons */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={handleExportJSON}
          className="flex items-center gap-2 bg-gray-800 dark:bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs hover:bg-gray-700 dark:hover:bg-white/15 transition-colors"
        >
          <Download size={12} /> JSON
        </button>
        <button
          onClick={handleCopyCSS}
          className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/60 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-lg text-xs hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
        >
          <Code size={12} /> {isAf ? 'Kopieer CSS' : 'Copy CSS'}
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-white/10 mb-6">
        <div className="flex gap-0 overflow-x-auto -mb-px">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-brand-red text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60'
                }`}
              >
                <Icon size={13} />
                {isAf ? tab.labelAf : tab.labelEn}
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: COLORS
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'colors' && (
        <div>
          {/* Filter + Search */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex gap-1.5">
              {([['all', 'Alles', 'All'], ['brand', 'Handelsmerk', 'Brand'], ['neutral', 'Neutraal', 'Neutral'], ['system', 'Stelsel', 'System']] as const).map(([key, af, en]) => (
                <button
                  key={key}
                  onClick={() => setColorFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                    colorFilter === key ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
                >
                  {isAf ? af : en}
                </button>
              ))}
            </div>
            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={isAf ? 'Soek tokens...' : 'Search tokens...'}
                className="w-full pl-9 pr-4 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredColors.map(token => (
              <ColorCard key={token.cssVar} token={token} onCopy={copyText} liveValue={liveValues[token.cssVar]} isAf={isAf} />
            ))}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: TYPOGRAPHY
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'typography' && (
        <div className="space-y-8">
          {/* Font families */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FONT_TOKENS.map(font => (
              <div key={font.name} className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-2xl text-gray-800 dark:text-white cursor-pointer hover:text-brand-red transition-colors"
                    style={{ fontFamily: `'${font.family}', ${font.fallback}` }}
                    onClick={() => copyText(font.cssVar)}
                  >
                    {font.family}
                  </h3>
                  <span className="text-[10px] bg-gray-100 dark:bg-white/5 px-2 py-1 rounded font-mono text-gray-500 dark:text-white/40">
                    {font.cssVar}
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-white/40 mb-3">{font.usage}</p>
                <div className="flex flex-wrap gap-1.5">
                  {font.weights.map(w => (
                    <span
                      key={w}
                      className="text-[10px] bg-gray-50 dark:bg-white/5 px-2 py-1 rounded font-mono text-gray-500 dark:text-white/40"
                      style={{ fontFamily: `'${font.family}', ${font.fallback}`, fontWeight: w }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Type scale */}
          <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-white/30 text-[10px] uppercase tracking-wider">
                  <tr>
                    <th className="p-3 border-b border-gray-100 dark:border-white/10 w-[150px]">Token</th>
                    <th className="p-3 border-b border-gray-100 dark:border-white/10 w-[130px]">CSS Vars</th>
                    <th className="p-3 border-b border-gray-100 dark:border-white/10 w-[120px]">{isAf ? 'Spesifikasie' : 'Spec'}</th>
                    <th className="p-3 border-b border-gray-100 dark:border-white/10">{isAf ? 'Voorbeeld' : 'Preview'}</th>
                    <th className="p-3 border-b border-gray-100 dark:border-white/10 w-[80px]">Element</th>
                  </tr>
                </thead>
                {/* Group headers — each group is a separate tbody to avoid React.Fragment prop warnings */}
                  {(['heading-serif', 'heading-sans', 'body'] as const).map(group => (
                    <tbody key={group} className="divide-y divide-gray-100 dark:divide-white/[0.06]">
                      <tr>
                        <td colSpan={5} className="px-3 py-2 bg-gray-50 dark:bg-white/[0.03] border-b border-gray-100 dark:border-white/10">
                          <span className="text-[10px] text-gray-600 dark:text-white/40 tracking-wider uppercase">
                            {group === 'heading-serif' ? (isAf ? 'Vloeiende Opskrifte — Roboto Serif 400' : 'Fluid Headings — Roboto Serif 400') :
                             group === 'heading-sans' ? (isAf ? 'UI Opskrifte — Inter 600/700' : 'UI Headings — Inter 600/700') :
                             (isAf ? 'Liggaamsteks — Inter 400' : 'Body Text — Inter 400')}
                          </span>
                        </td>
                      </tr>
                      {TYPOGRAPHY_TOKENS.filter(t => t.group === group).map(type => (
                        <tr key={type.name} className="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors">
                          <td className="p-3">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="font-mono text-xs text-brand-red cursor-pointer hover:underline" onClick={() => copyText(type.name)}>
                                {type.name}
                              </span>
                              {type.fluid && <span className="text-[8px] bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 px-1 py-0.5 rounded-full uppercase">Fluid</span>}
                              {type.textTransform && <span className="text-[8px] bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 px-1 py-0.5 rounded-full uppercase">UC</span>}
                            </div>
                            <span className="text-[10px] text-gray-400 dark:text-white/25 block">{type.label}</span>
                          </td>
                          <td className="p-3 text-[10px] text-gray-500 dark:text-white/30 font-mono space-y-0.5">
                            <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fontSize})`)}>{type.cssVars.fontSize}</div>
                            <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.lineHeight})`)}>{type.cssVars.lineHeight}</div>
                            {type.cssVars.letterSpacing && <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.letterSpacing})`)}>{type.cssVars.letterSpacing}</div>}
                            {type.cssVars.fvs && <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fvs})`)}>{type.cssVars.fvs}</div>}
                          </td>
                          <td className="p-3 text-[10px] text-gray-500 dark:text-white/30 font-mono space-y-0.5">
                            <div>{type.sizePx}px{type.sizeMobilePx ? ` → ${type.sizeMobilePx}px` : ''}</div>
                            <div>LH: {type.lineHeightPx}px</div>
                            <div>Wt: {type.weight}</div>
                          </td>
                          <td className="p-3">
                            <p
                              style={{
                                fontSize: `var(${type.cssVars.fontSize})`,
                                fontWeight: Number(type.weight),
                                lineHeight: `var(${type.cssVars.lineHeight})`,
                                letterSpacing: type.cssVars.letterSpacing ? `var(${type.cssVars.letterSpacing})` : undefined,
                                fontFamily: group === 'heading-serif' ? "'Roboto Serif', serif" : "'Inter', sans-serif",
                                fontVariationSettings: type.fontVariationSettings || undefined,
                                textTransform: type.textTransform as React.CSSProperties['textTransform'],
                              }}
                              className="text-gray-800 dark:text-white"
                            >
                              {type.sample}
                            </p>
                          </td>
                          <td className="p-3">
                            <code className="text-[10px] bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded text-gray-500 dark:text-white/30">{type.element}</code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: SPACING & LAYOUT
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'spacing' && (
        <div className="space-y-10">
          {/* Spacing tokens */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">{isAf ? 'Spasiëring Skaal' : 'Spacing Scale'}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SPACING_TOKENS.map(space => (
                <div
                  key={space.name}
                  className="bg-white dark:bg-white/[0.03] p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-brand-red/30 transition-colors cursor-pointer"
                  onClick={() => copyText(space.cssVar)}
                >
                  <div className="flex justify-between mb-2 text-xs">
                    <span className="font-mono text-brand-red">{space.name}</span>
                    <span className="text-gray-400 dark:text-white/30">{space.px}px</span>
                  </div>
                  <div className="bg-brand-red/15 rounded-sm mb-2" style={{ height: `${space.px}px`, minHeight: '4px' }} />
                  <p className="text-[10px] text-gray-500 dark:text-white/40">{space.value}</p>
                  <p className="text-[10px] text-gray-400 dark:text-white/25 mt-0.5">{space.usage}</p>
                  {liveValues[space.cssVar] && (
                    <p className="text-[9px] text-gray-300 dark:text-white/15 mt-1 font-mono">{isAf ? 'Lewendig' : 'Live'}: {liveValues[space.cssVar]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Breakpoints */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">{isAf ? 'Breekpunte' : 'Breakpoints'}</h3>
            <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 p-5 space-y-3">
              {BREAKPOINT_TOKENS.map((bp, i) => {
                const maxWidth = BREAKPOINT_TOKENS[BREAKPOINT_TOKENS.length - 1].px;
                const widthPct = (bp.px / maxWidth) * 100;
                return (
                  <div key={bp.name} className="flex items-center gap-3">
                    <div className="w-24 shrink-0">
                      <span className="text-xs text-gray-700 dark:text-white">{bp.label}</span>
                      <div className="text-[10px] text-gray-400 dark:text-white/30 font-mono">{bp.tailwindPrefix}</div>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-5">
                        <div
                          className="h-5 rounded-r-full"
                          style={{
                            width: `${widthPct}%`,
                            backgroundColor: `color-mix(in oklch, var(--custom-primary) ${30 + i * 12}%, #1A3A5F)`,
                          }}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-white/80">{bp.value}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-white/25 w-28 shrink-0 hidden md:block">{bp.usage}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Layout tokens */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">{isAf ? 'Uitleg Patrone' : 'Layout Patterns'}</h3>
            <div className="space-y-2">
              {LAYOUT_TOKENS.map(layout => (
                <div
                  key={layout.name}
                  className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 p-4 hover:border-brand-red/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h4 className="text-sm text-gray-800 dark:text-white">{layout.label}</h4>
                      <p className="text-[11px] text-gray-500 dark:text-white/40">{layout.usage}</p>
                    </div>
                    <code
                      className="text-[10px] bg-gray-50 dark:bg-white/5 px-2.5 py-1.5 rounded font-mono text-brand-red cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors whitespace-nowrap"
                      onClick={() => copyText(layout.classes)}
                    >
                      {layout.classes}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: SHADOWS & BORDERS
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'shadows' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Radii */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">Radius</h3>
            <div className="space-y-3">
              {RADIUS_TOKENS.map(r => (
                <div
                  key={r.name}
                  className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 p-4 flex justify-between items-center cursor-pointer hover:border-brand-red/30 transition-colors"
                  style={{ borderRadius: `${r.px}px` }}
                  onClick={() => copyText(r.tailwind)}
                >
                  <div>
                    <span className="font-mono text-xs text-gray-800 dark:text-white">{r.name}</span>
                    <span className="text-[10px] text-gray-400 dark:text-white/25 ml-2">({r.px}px)</span>
                    <p className="text-[10px] text-gray-400 dark:text-white/30 mt-0.5">{r.usage}</p>
                  </div>
                  <div
                    className="w-8 h-8 bg-brand-red/10 border border-brand-red/30 shrink-0"
                    style={{ borderRadius: `${r.px}px` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">{isAf ? 'Skaduwees (Elevations)' : 'Shadows (Elevations)'}</h3>
            <div className="grid grid-cols-2 gap-4">
              {SHADOW_TOKENS.map(s => (
                <div
                  key={s.name}
                  className="bg-white dark:bg-white/[0.03] p-5 rounded-xl text-center cursor-pointer hover:scale-105 transition-transform"
                  style={{ boxShadow: s.lightValue }}
                  onClick={() => copyText(s.tailwind)}
                >
                  <p className="text-xs text-gray-700 dark:text-white">{s.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-white/25 mt-1">{s.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: COMPONENTS (from Style Guide)
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'components' && (
        <div className="space-y-8">
          {/* Logos */}
          <ComponentSection title={isAf ? 'Logo-variante' : 'Logo Variants'}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-200">
                <Logo variant="default" className="h-10 w-auto" />
              </div>
              <div className="bg-[#142135] rounded-xl p-6 flex items-center justify-center">
                <Logo variant="white" className="h-10 w-auto" />
              </div>
              <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-6 flex items-center justify-center border border-gray-200 dark:border-white/10">
                <Logo variant="default" className="h-6 w-auto" />
              </div>
            </div>
            <p className="text-[10px] text-gray-400 dark:text-white/25 mt-2">Variants: default, white. Sizes: h-6 (compact), h-10 (standard), h-14 (hero)</p>
          </ComponentSection>

          {/* Buttons */}
          <ComponentSection title={isAf ? 'Knoppie Variante' : 'Button Variants'}>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-gray-400 dark:text-white/25 uppercase tracking-widest mb-2">Variants</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-white/25 uppercase tracking-widest mb-2">Sizes</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus size={16} /></Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-white/25 uppercase tracking-widest mb-2">Brand</p>
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white">Brand Red</Button>
                  <Button className="bg-brand-navy hover:bg-brand-navy-light text-white">Brand Navy</Button>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 dark:text-white/25 uppercase tracking-widest mb-2">{isAf ? 'Met Ikone' : 'With Icons'}</p>
                <div className="flex flex-wrap gap-2">
                  <Button><Mail size={16} className="mr-2" /> Subscribe</Button>
                  <Button variant="outline"><Download size={16} className="mr-2" /> Download</Button>
                  <Button variant="destructive"><Trash2 size={16} className="mr-2" /> Delete</Button>
                </div>
              </div>
            </div>
          </ComponentSection>

          {/* Forms */}
          <ComponentSection title={isAf ? 'Vorm-elemente' : 'Form Elements'}>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-[10px] text-gray-400 dark:text-white/25 mb-1 block">Text Input</label>
                <Input placeholder="Enter text..." />
              </div>
              <div>
                <label className="text-[10px] text-gray-400 dark:text-white/25 mb-1 block">Search Input</label>
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
                  <Input placeholder="Search..." className="pl-9" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Switch />
                <span className="text-xs text-gray-600 dark:text-white/50">Toggle option</span>
              </div>
            </div>
          </ComponentSection>

          {/* Badges */}
          <ComponentSection title={isAf ? 'Kentekens' : 'Badges'}>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-brand-red text-white">Nuus</Badge>
                <Badge className="bg-blue-600 text-white">Sport</Badge>
                <Badge className="bg-amber-600 text-white">Sake</Badge>
                <Badge className="bg-green-600 text-white">Leefstyl</Badge>
                <Badge className="bg-purple-600 text-white">Dink</Badge>
                <Badge className="bg-orange-600 text-white">Skole</Badge>
              </div>
            </div>
          </ComponentSection>

          {/* Cards */}
          <ComponentSection title={isAf ? 'Kaart Variante' : 'Card Variants'}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-4">
                <h4 className="text-sm text-gray-800 dark:text-foreground mb-1">{isAf ? 'Standaard Kaart' : 'Standard Card'}</h4>
                <p className="text-[11px] text-gray-500 dark:text-muted-foreground">Standard card with default styling.</p>
              </div>
              <div className="bg-[#142135] rounded-xl p-4 text-white">
                <h4 className="text-sm mb-1">Navy Kaart</h4>
                <p className="text-[11px] text-white/60">Dark navy variant for footers and dev tools.</p>
              </div>
              <div className="bg-brand-red rounded-xl p-4 text-white">
                <h4 className="text-sm mb-1">Rooi CTA Kaart</h4>
                <p className="text-[11px] text-white/80">Red call-to-action card for promotions.</p>
              </div>
            </div>
          </ComponentSection>

          {/* Alerts */}
          <ComponentSection title={isAf ? 'Waarskuwings' : 'Alerts'}>
            <div className="space-y-2">
              {[
                { icon: Info, label: isAf ? 'Inligting' : 'Info', desc: 'Informational alert with helpful details.', colors: 'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20', iconColor: 'text-blue-500', textColor: 'text-blue-700 dark:text-blue-300' },
                { icon: AlertTriangle, label: isAf ? 'Waarskuwing' : 'Warning', desc: 'Warning alert requiring attention.', colors: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20', iconColor: 'text-amber-500', textColor: 'text-amber-700 dark:text-amber-300' },
                { icon: Check, label: isAf ? 'Sukses' : 'Success', desc: 'Success alert confirming an action.', colors: 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20', iconColor: 'text-green-500', textColor: 'text-green-700 dark:text-green-300' },
                { icon: X, label: isAf ? 'Fout' : 'Error', desc: 'Error alert indicating a problem.', colors: 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20', iconColor: 'text-red-500', textColor: 'text-red-700 dark:text-red-300' },
              ].map(({ icon: Icon, label, desc, colors, iconColor, textColor }) => (
                <div key={label} className={`flex items-start gap-3 p-3 border rounded-xl ${colors}`}>
                  <Icon size={14} className={`${iconColor} shrink-0 mt-0.5`} />
                  <div>
                    <p className={`text-xs ${textColor}`}>{label}</p>
                    <p className={`text-[10px] ${textColor} opacity-70`}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ComponentSection>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: EXPORT
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'export' && (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 p-4 rounded-xl flex items-start gap-3">
            <Info className="text-blue-500 shrink-0 mt-0.5" size={16} />
            <div className="text-xs text-blue-700 dark:text-blue-300">
              <p className="mb-1">{isAf ? 'Token-uitvoer funksionaliteit:' : 'Token export functionality:'}</p>
              <ul className="list-disc pl-4 space-y-0.5 text-blue-600 dark:text-blue-300/80">
                <li>{isAf ? 'JSON Uitvoer — alle tokens as .json lêer vir Figma-sinkronisering' : 'JSON Export — all tokens as .json file for Figma syncing'}</li>
                <li>{isAf ? 'CSS Kopieer — :root en .dark veranderlikes na knipbord' : 'CSS Copy — :root and .dark variables to clipboard'}</li>
                <li>{isAf ? 'Lewendige waardes — CSS veranderlikes soos tans bereken deur die blaaier' : 'Live values — CSS variables as currently computed by the browser'}</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleExportJSON}
              className="flex items-center gap-2 bg-brand-red hover:bg-brand-red/90 text-white px-4 py-2 rounded-xl text-xs transition-colors"
            >
              <Download size={14} /> {isAf ? 'Laai JSON af' : 'Download JSON'}
            </button>
            <button
              onClick={handleCopyCSS}
              className="flex items-center gap-2 bg-gray-800 dark:bg-white/10 text-white px-4 py-2 rounded-xl text-xs hover:bg-gray-700 dark:hover:bg-white/15 transition-colors"
            >
              <Code size={14} /> {isAf ? 'Kopieer CSS' : 'Copy CSS'}
            </button>
          </div>

          {/* Token mapping table */}
          <div>
            <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">
              {isAf ? 'Token Kartering — CSS → Tailwind → Figma' : 'Token Mapping — CSS → Tailwind → Figma'}
            </h3>
            <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead className="bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-white/30 text-[10px] uppercase tracking-wider">
                    <tr>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">CSS</th>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">{isAf ? 'Lig' : 'Light'}</th>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">{isAf ? 'Donker' : 'Dark'}</th>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">Tailwind</th>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">Figma</th>
                      <th className="p-3 border-b border-gray-100 dark:border-white/10">{isAf ? 'Lewendig' : 'Live'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-white/[0.06] text-xs">
                    {COLOR_TOKENS.filter(t => t.category !== 'chart' && t.category !== 'sidebar').map(token => (
                      <tr key={token.cssVar} className="hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors">
                        <td className="p-3 font-mono text-[10px]">
                          <span className="text-brand-red cursor-pointer hover:underline" onClick={() => copyText(`var(--${token.cssVar})`)}>
                            --{token.cssVar}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded border border-gray-200 dark:border-white/10 shrink-0" style={{ backgroundColor: token.light }} />
                            <span className="font-mono text-[10px] text-gray-500 dark:text-white/30 cursor-pointer" onClick={() => copyText(token.light)}>{token.light}</span>
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded border border-gray-200 dark:border-white/10 shrink-0" style={{ backgroundColor: token.dark }} />
                            <span className="font-mono text-[10px] text-gray-500 dark:text-white/30 cursor-pointer" onClick={() => copyText(token.dark)}>{token.dark}</span>
                          </span>
                        </td>
                        <td className="p-3">
                          <code className="text-[10px] bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-white/10" onClick={() => copyText(token.tailwind.split('/')[0].trim())}>
                            {token.tailwind.split('/')[0].trim()}
                          </code>
                        </td>
                        <td className="p-3 font-mono text-[10px] text-gray-400 dark:text-white/25">{token.figmaName}</td>
                        <td className="p-3 font-mono text-[9px] text-gray-300 dark:text-white/15">{liveValues[token.cssVar] || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Link to WP Token Mapping tab */}
          <div className="text-center pt-4">
            <button
              onClick={() => setActiveTab('wp-tokens')}
              className="text-xs text-brand-red hover:text-brand-red/80 transition-colors inline-flex items-center gap-1"
            >
              <FileCode size={12} />
              {isAf ? 'Gaan na WP Token-kartering tab vir CSS → WP theme.json' : 'Go to WP Token Mapping tab for CSS → WP theme.json'}
            </button>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          TAB: WP TOKEN MAPPING
          ═══════════════════════════════════════════════════════════════════════ */}
      {activeTab === 'wp-tokens' && (
        <WpTokenMappingTab isAf={isAf} onCopy={copyText} />
      )}

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.designSystem} />
    </div>
  );
};

// ─── Sub-Components ──────────────────────────────────────────────────────────

const ComponentSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-xs text-gray-400 dark:text-white/25 uppercase tracking-wider mb-3">{title}</h3>
    {children}
  </div>
);

interface ColorCardProps {
  token: ColorToken;
  onCopy: (text: string) => void;
  liveValue?: string;
  isAf: boolean;
}

const ColorCard: React.FC<ColorCardProps> = ({ token, onCopy, liveValue, isAf }) => {
  const lightOnWhite = contrastRatio(token.light, '#ffffff');
  const darkOnDark = contrastRatio(token.dark, '#0F1923');
  const lightLevel = contrastLevel(lightOnWhite);
  const darkLevel = contrastLevel(darkOnDark);

  return (
    <div className="bg-white dark:bg-white/[0.03] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden group">
      {/* Dual colour preview */}
      <div className="flex h-24">
        <div
          className="flex-1 relative flex flex-col items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
          style={{ backgroundColor: token.light }}
          onClick={() => onCopy(token.light)}
          title={isAf ? 'Lig — klik om te kopieer' : 'Light — click to copy'}
        >
          <Sun size={12} className={`mb-0.5 ${needsDarkText(token.light) ? 'text-black/30' : 'text-white/30'}`} />
          <span className={`font-mono text-[10px] ${needsDarkText(token.light) ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {token.light}
          </span>
        </div>
        <div
          className="flex-1 relative flex flex-col items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
          style={{ backgroundColor: token.dark }}
          onClick={() => onCopy(token.dark)}
          title={isAf ? 'Donker — klik om te kopieer' : 'Dark — click to copy'}
        >
          <Moon size={12} className={`mb-0.5 ${needsDarkText(token.dark) ? 'text-black/30' : 'text-white/30'}`} />
          <span className={`font-mono text-[10px] ${needsDarkText(token.dark) ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {token.dark}
          </span>
        </div>
      </div>

      <div className="p-3">
        <div className="flex justify-between items-start mb-0.5">
          <h3
            className="text-xs text-gray-800 dark:text-white cursor-pointer hover:text-brand-red transition-colors"
            onClick={() => onCopy(token.figmaName)}
          >
            {token.label}
          </h3>
          <span className="text-[9px] bg-gray-100 dark:bg-white/5 px-1.5 py-0.5 rounded font-mono text-gray-400 dark:text-white/25">
            --{token.cssVar}
          </span>
        </div>
        <p className="text-[10px] text-gray-500 dark:text-white/30 mb-0.5 font-mono">{token.figmaName}</p>
        <p className="text-[10px] text-gray-500 dark:text-white/40 mb-2">{token.usage}</p>

        {/* Live value */}
        {liveValue && (
          <p className="text-[9px] text-gray-300 dark:text-white/15 font-mono mb-2">{isAf ? 'Lewendig' : 'Live'}: {liveValue}</p>
        )}

        {/* Contrast badges */}
        <div className="flex gap-2 text-[9px] border-t border-gray-100 dark:border-white/[0.06] pt-2">
          <div className="flex items-center gap-1">
            <Sun size={9} className="text-gray-400 dark:text-white/20" />
            <span className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded ${
              lightLevel.pass
                ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10'
                : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10'
            }`}>
              {lightLevel.pass && <Check size={8} />} {lightLevel.label} ({lightOnWhite.toFixed(1)}:1)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Moon size={9} className="text-gray-400 dark:text-white/20" />
            <span className={`flex items-center gap-0.5 px-1.5 py-0.5 rounded ${
              darkLevel.pass
                ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-500/10'
                : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10'
            }`}>
              {darkLevel.pass && <Check size={8} />} {darkLevel.label} ({darkOnDark.toFixed(1)}:1)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── WP Token Mapping Tab ────────────────────────────────────────────────────

const WpTokenMappingTab = ({ isAf, onCopy }: { isAf: boolean; onCopy: (text: string) => void }) => {
  const [wpSearch, setWpSearch] = React.useState('');
  const [wpSection, setWpSection] = React.useState('all');

  const filteredTokens = React.useMemo(() => {
    return MAPPED_TOKENS.filter((token) => {
      const matchSection = wpSection === 'all' || token.section === wpSection;
      const matchSearch =
        !wpSearch ||
        token.dpToken.toLowerCase().includes(wpSearch.toLowerCase()) ||
        token.wpSlug.toLowerCase().includes(wpSearch.toLowerCase()) ||
        token.wpVariable.toLowerCase().includes(wpSearch.toLowerCase());
      return matchSection && matchSearch;
    });
  }, [wpSearch, wpSection]);

  const handleDownloadThemeJson = () => {
    const themeJson = {
      $schema: 'https://schemas.wp.org/trunk/theme.json',
      version: 3,
      settings: {
        color: {
          defaultPalette: false,
          palette: COLOR_TOKENS.map((c) => ({
            slug: c.cssVar.replace('custom-', ''),
            color: c.light,
            name: c.label,
          })),
        },
        typography: {
          fontSizes: TYPOGRAPHY_TOKENS.map((t) => ({
            slug: t.name.toLowerCase().replace(/\s+/g, '-'),
            size: t.size,
            name: t.name,
            fluid: t.fluid ? { min: t.sizeMobilePx ? `${t.sizeMobilePx}px` : t.size, max: t.size } : false,
          })),
        },
        spacing: {
          spacingSizes: SPACING_TOKENS.map((s) => ({
            slug: s.name.replace('space.', ''),
            size: s.value,
            name: s.name,
          })),
        },
      },
    };
    const blob = new Blob([JSON.stringify(themeJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme.json';
    a.click();
    URL.revokeObjectURL(url);
    toast.success(isAf ? 'theme.json afgelaai' : 'theme.json downloaded');
  };

  return (
    <div className="space-y-6">
      {/* Info banner */}
      <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 p-4 rounded-xl flex items-start gap-3">
        <FileCode className="text-indigo-500 shrink-0 mt-0.5" size={16} />
        <div className="text-xs text-indigo-700 dark:text-indigo-300">
          <p className="mb-1">{isAf ? 'Volledige kartering tussen Die Papier se CSS-veranderlikes en WordPress theme.json-voorinstellings.' : "Complete mapping between Die Papier's CSS variables and WordPress theme.json presets."}</p>
          <p className="text-indigo-600 dark:text-indigo-300/80">{isAf ? 'Gebruik hierdie verwysing om tokens konsekwent tussen die prototipe en produksie te hou.' : 'Use this reference to keep tokens consistent between prototype and production.'}</p>
        </div>
      </div>

      {/* Stats + Download */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-xs text-gray-500 dark:text-white/40">
          <span>{isAf ? 'Totaal Tokens' : 'Total Tokens'}: <strong className="text-gray-800 dark:text-white">{MAPPED_TOKENS.length}</strong></span>
          <span>{isAf ? 'Afdelings' : 'Sections'}: <strong className="text-gray-800 dark:text-white">{WP_TOKEN_SECTIONS.length}</strong></span>
          <span>{filteredTokens.length} {isAf ? 'resultate' : 'results'}</span>
        </div>
        <button
          onClick={handleDownloadThemeJson}
          className="text-xs px-3 py-1.5 bg-brand-red hover:bg-brand-red/80 rounded-lg text-white transition-colors flex items-center gap-1 shrink-0"
        >
          <Download size={12} />
          {isAf ? 'Laai theme.json af' : 'Download theme.json'}
        </button>
      </div>

      {/* Search + Section filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
          <input
            type="text"
            placeholder={isAf ? 'Soek tokens, slugs, veranderlikes...' : 'Search tokens, slugs, variables...'}
            value={wpSearch}
            onChange={(e) => setWpSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setWpSection('all')}
            className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
              wpSection === 'all' ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white'
            }`}
          >
            {isAf ? 'Alles' : 'All'}
          </button>
          {WP_TOKEN_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => setWpSection(section)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                wpSection === section ? 'bg-brand-red text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Token Table */}
      <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 text-left text-xs text-gray-400 dark:text-white/30 uppercase tracking-widest bg-gray-50 dark:bg-white/[0.03]">
                <th className="px-4 py-3">{isAf ? 'Voorskou' : 'Preview'}</th>
                <th className="px-4 py-3">DP Token</th>
                <th className="px-4 py-3">{isAf ? 'Waarde' : 'Value'}</th>
                <th className="px-4 py-3">WP Slug</th>
                <th className="px-4 py-3">WP {isAf ? 'Veranderlike' : 'Variable'}</th>
                <th className="px-4 py-3">{isAf ? 'Notas' : 'Notes'}</th>
              </tr>
            </thead>
            <tbody>
              {filteredTokens.map((token, i) => (
                <tr key={`${token.dpToken}-${i}`} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.03]">
                  <td className="px-4 py-3">
                    {token.previewColor ? (
                      <div className="w-6 h-6 rounded border border-gray-200 dark:border-white/10" style={{ backgroundColor: token.previewColor }} />
                    ) : (
                      <span className="text-gray-300 dark:text-white/20">&mdash;</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onCopy(`var(${token.dpToken})`)}
                      className="font-mono text-xs text-brand-red hover:text-brand-red/70 transition-colors flex items-center gap-1"
                    >
                      <Copy size={10} />
                      {token.dpToken}
                    </button>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-500 dark:text-white/50">{token.value}</td>
                  <td className="px-4 py-3 font-mono text-xs text-indigo-600 dark:text-indigo-300">{token.wpSlug}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onCopy(`var(${token.wpVariable})`)}
                      className="font-mono text-[11px] text-gray-400 dark:text-white/40 hover:text-gray-700 dark:hover:text-white transition-colors flex items-center gap-1"
                    >
                      <Copy size={10} />
                      {token.wpVariable}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-400 dark:text-white/30 max-w-[200px] truncate">{token.notes || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredTokens.length === 0 && (
          <div className="text-center py-12 text-gray-400 dark:text-white/30">
            <p>{isAf ? 'Geen tokens gevind nie' : 'No tokens found'}</p>
          </div>
        )}
      </div>

      {/* Implementation Checklist */}
      <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl p-6">
        <h3 className="text-gray-800 dark:text-white mb-4 flex items-center gap-2">
          <CheckSquare size={16} className="text-brand-red" />
          {isAf ? 'Implementasie Kontrolelys' : 'Implementation Checklist'}
        </h3>
        <ul className="space-y-2">
          {[
            isAf ? 'Gebruik numeriese slugs vir grootte-gebaseerde voorinstellings (spasiëring, lettertipe-groottes, skadu, randstraal).' : 'Use numeric slugs for size-based presets (spacing, font sizes, shadows, border radius).',
            isAf ? 'Hou semantiese slugs vir kernkleurrolle; gebruik voorvoegsel numeriese rampe vir neutrale/aksente.' : 'Keep semantic slugs for core color roles; use prefixed numeric ramps for neutrals/accents.',
            isAf ? 'Verseker alle numeriese slugs is strings in JSON (aangehaal).' : 'Ensure all numeric slugs are strings in JSON (quoted).',
            isAf ? 'Deaktiveer verstekwaardes waar streng kurering nodig is (shadow.defaultPresets: false, color.defaultPalette: false).' : 'Disable defaults where strict curation needed (shadow.defaultPresets: false, color.defaultPalette: false).',
            isAf ? 'Dokumenteer die kartering tussen Figma-tokens en theme.json-slugs (dieselfde benamings + dieselfde skaal).' : 'Document mapping between Figma tokens and theme.json slugs (same naming + same scale).',
            isAf ? 'Gebruik settings.custom vir tokens wat WordPress nog nie as UI-voorinstellings ondersteun nie (randbreedtes, z-indeks, beweging).' : 'Use settings.custom for tokens WP does not yet support as UI presets (border widths, z-index, motion).',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-white/50">
              <span className="text-brand-red mt-0.5">&#9642;</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};