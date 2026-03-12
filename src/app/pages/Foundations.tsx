import React, { useState, useCallback, useMemo } from 'react';
import { Check, Info, Copy, Download, Sun, Moon, Code, Layers, Type, Palette, Move, LayoutDashboard, Maximize2 } from 'lucide-react';
import { toast } from 'sonner';
import { copyToClipboard } from '../utils/clipboard';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { FOUNDATIONS_FAQS } from '../data/pageFaqs';
import { QuoteSlider } from '../components/brand-quotes/QuoteSlider';
import { MarketingGrid } from '../components/marketing/MarketingGrid';
import { ALL_QUOTES } from '../components/brand-quotes/presets';
import { Megaphone as MegaphoneIcon } from 'lucide-react';
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
} from '../data/designTokens';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Approximate WCAG 2.1 relative luminance from a hex colour.
 */
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
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function contrastLevel(ratio: number): { label: string; pass: boolean; level: 'AAA' | 'AA' | 'Misluk' } {
  if (ratio >= 7) return { label: 'AAA', pass: true, level: 'AAA' };
  if (ratio >= 4.5) return { label: 'AA', pass: true, level: 'AA' };
  return { label: 'Misluk', pass: false, level: 'Misluk' };
}

function needsDarkText(hex: string): boolean {
  return hexToLuminance(hex) > 0.5;
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

const SectionHeader = ({ icon: Icon, number, title, badge }: { icon: React.ElementType; number: string; title: string; badge?: string }) => (
  <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-border pb-4">
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-red/10 text-brand-red">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>{number}. {title}</h2>
    {badge && (
      <span className="bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs font-mono">{badge}</span>
    )}
  </div>
);

const ColorCard = ({ token, onCopy }: { token: ColorToken; onCopy: (t: string) => void }) => {
  const lightOnWhite = contrastRatio(token.light, '#ffffff');
  const darkOnDark = contrastRatio(token.dark, '#0F1923');
  const lightLevel = contrastLevel(lightOnWhite);
  const darkLevel = contrastLevel(darkOnDark);

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden group">
      {/* Dual colour preview */}
      <div className="flex h-28">
        <div
          className="flex-1 relative flex flex-col items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
          style={{ backgroundColor: token.light }}
          onClick={() => onCopy(token.light)}
          title="Lig — klik om te kopieer"
        >
          <Sun size={14} className={`mb-1 ${needsDarkText(token.light) ? 'text-black/40' : 'text-white/40'}`} />
          <span className={`font-mono text-xs ${needsDarkText(token.light) ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {token.light}
          </span>
        </div>
        <div
          className="flex-1 relative flex flex-col items-center justify-center cursor-pointer transition-opacity hover:opacity-90"
          style={{ backgroundColor: token.dark }}
          onClick={() => onCopy(token.dark)}
          title="Donker — klik om te kopieer"
        >
          <Moon size={14} className={`mb-1 ${needsDarkText(token.dark) ? 'text-black/40' : 'text-white/40'}`} />
          <span className={`font-mono text-xs ${needsDarkText(token.dark) ? 'text-black' : 'text-white'} opacity-0 group-hover:opacity-100 transition-opacity`}>
            {token.dark}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3
            className="font-bold text-[15px] text-brand-navy dark:text-foreground cursor-pointer hover:text-brand-red font-inter"
            onClick={() => onCopy(token.figmaName)}
          >
            {token.label}
          </h3>
          <span className="text-[10px] bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded font-mono text-gray-500 dark:text-gray-400">
            --{token.cssVar}
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 font-mono">{token.figmaName}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{token.usage}</p>

        {/* Contrast badges */}
        <div className="flex gap-2 text-[10px] border-t border-gray-100 dark:border-border pt-3">
          <div className="flex items-center gap-1">
            <Sun size={10} className="text-gray-400" />
            {lightLevel.pass ? (
              <span className="flex items-center gap-0.5 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 px-1.5 py-0.5 rounded">
                <Check size={10} /> {lightLevel.label} ({lightOnWhite.toFixed(1)}:1)
              </span>
            ) : (
              <span className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-1.5 py-0.5 rounded">
                <Info size={10} /> {lightOnWhite.toFixed(1)}:1
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Moon size={10} className="text-gray-400" />
            {darkLevel.pass ? (
              <span className="flex items-center gap-0.5 text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 px-1.5 py-0.5 rounded">
                <Check size={10} /> {darkLevel.label} ({darkOnDark.toFixed(1)}:1)
              </span>
            ) : (
              <span className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-1.5 py-0.5 rounded">
                <Info size={10} /> {darkOnDark.toFixed(1)}:1
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

export const DesignFoundations = () => {
  const [colorFilter, setColorFilter] = useState<'all' | 'brand' | 'neutral' | 'system'>('all');

  const copyText = useCallback((text: string) => {
    copyToClipboard(text);
    toast.success(`Gekopieer: ${text}`);
  }, []);

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
    toast.success('Ontwerp-tokens JSON afgelaai');
  }, []);

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
    toast.success('CSS veranderlikes gekopieer');
  }, []);

  const filteredColors = useMemo(() => {
    if (colorFilter === 'all') return COLOR_TOKENS;
    return COLOR_TOKENS.filter(t => t.category === colorFilter);
  }, [colorFilter]);

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20 font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Ontwerp grondslag' }
        ]}
      >
        {/* ── Header ── */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', fontSize: 'var(--text-h1)' }}>
              Ontwerp grondslag
            </h1>
            <div className="flex gap-2">
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-2 bg-brand-navy dark:bg-foreground text-white dark:text-brand-navy px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> JSON Uitvoer
              </button>
              <button
                onClick={handleCopyCSS}
                className="flex items-center gap-2 bg-white dark:bg-card text-brand-navy dark:text-foreground border border-gray-200 dark:border-border px-4 py-2 rounded-lg text-sm font-medium hover:border-brand-red transition-colors"
              >
                <Code size={16} /> Kopieer CSS
              </button>
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Hierdie bladsy dokumenteer alle ontwerp-tokens vir <em>rooi rose</em>.
            Lig- en donkermodus-waardes word langs mekaar vertoon.
            Alle waardes stem ooreen met <code className="bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-sm">theme.css</code>.
          </p>

          <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 p-4 rounded-lg flex items-start gap-3">
            <Info className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" size={18} />
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <p className="font-bold mb-1">Ontwikkelaar-nota:</p>
              <p>Klik op enige kleur, tokennaam of waarde om dit na die knipbord te kopieer. Gebruik die JSON Uitvoer-knoppie om alle tokens as 'n lêer af te laai vir Figma-sinkronisering.</p>
            </div>
          </div>
        </div>

        <div className="space-y-20">

          {/* ═══════════════════════════════════════════════════════
              1. KLEURE
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Palette} number="1" title="Kleure (Colours)" badge="variable: color.*" />

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {([
                ['all', 'Alles'],
                ['brand', 'Handelsmerk'],
                ['neutral', 'Neutraal'],
                ['system', 'ShadCN Stelsel'],
              ] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setColorFilter(key)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    colorFilter === key
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-muted'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColors.map(token => (
                <ColorCard key={token.cssVar} token={token} onCopy={copyText} />
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              2. TIPOGRAFIE
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Type} number="2" title="Tipografie (Typography)" badge="V2 — theme.css tokens" />

            {/* Font families */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {FONT_TOKENS.map(font => (
                <div key={font.name} className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3
                      className="text-2xl text-brand-navy dark:text-foreground cursor-pointer hover:text-primary dark:hover:text-primary"
                      style={{ fontFamily: `'${font.family}', ${font.fallback}` }}
                      onClick={() => copyText(font.cssVar)}
                    >
                      {font.family}
                    </h3>
                    <span className="text-xs bg-gray-100 dark:bg-muted px-2 py-1 rounded font-mono text-gray-500 dark:text-gray-400">
                      {font.cssVar}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{font.usage}</p>
                  <div className="flex flex-wrap gap-2">
                    {font.weights.map(w => (
                      <span
                        key={w}
                        className="text-xs bg-gray-50 dark:bg-background px-2 py-1 rounded font-mono text-gray-500 dark:text-gray-400"
                        style={{ fontFamily: `'${font.family}', ${font.fallback}`, fontWeight: w }}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* V2 Type scale table with group headers */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead className="bg-gray-50 dark:bg-background text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-4 border-b border-gray-100 dark:border-border w-[160px]">Token</th>
                      <th className="p-4 border-b border-gray-100 dark:border-border w-[140px]">CSS Vars</th>
                      <th className="p-4 border-b border-gray-100 dark:border-border w-[140px]">Spesifikasie</th>
                      <th className="p-4 border-b border-gray-100 dark:border-border">Voorbeeld</th>
                      <th className="p-4 border-b border-gray-100 dark:border-border w-[120px]">Element</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-border">
                    {/* Group: Fluid Headings (Roboto Serif) */}
                    <tr>
                      <td colSpan={5} className="px-4 py-2 bg-brand-navy/5 dark:bg-brand-navy-light/5 border-b border-gray-100 dark:border-border">
                        <span className="text-xs text-brand-navy dark:text-foreground tracking-wider uppercase">Vloeiende Opskrifte — Roboto Serif 400</span>
                      </td>
                    </tr>
                    {TYPOGRAPHY_TOKENS.filter(t => t.group === 'heading-serif').map(type => (
                      <tr key={type.name} className="hover:bg-gray-50 dark:hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="font-mono text-sm text-brand-red cursor-pointer hover:underline"
                              onClick={() => copyText(type.name)}
                            >
                              {type.name}
                            </span>
                            {type.fluid && (
                              <span className="text-[9px] bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 px-1.5 py-0.5 rounded-full tracking-wide uppercase">Fluid</span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500 block">{type.label}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 block mt-0.5 cursor-pointer hover:text-brand-red" onClick={() => copyText(type.usage)}>{type.usage}</span>
                        </td>
                        <td className="p-4 text-[10px] text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fontSize})`)}>{type.cssVars.fontSize}</div>
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.lineHeight})`)}>{type.cssVars.lineHeight}</div>
                          {type.cssVars.letterSpacing && <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.letterSpacing})`)}>{type.cssVars.letterSpacing}</div>}
                          {type.cssVars.fvs && <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fvs})`)}>{type.cssVars.fvs}</div>}
                        </td>
                        <td className="p-4 text-xs text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div>{type.sizePx}px{type.sizeMobilePx ? ` → ${type.sizeMobilePx}px` : ''}</div>
                          <div>LH: {type.lineHeightPx}px</div>
                          <div>Wt: {type.weight}</div>
                          <div>LS: {type.letterSpacing}</div>
                          {type.fontVariationSettings && <div className="text-[10px] italic mt-1">FVS: {type.fontVariationSettings}</div>}
                        </td>
                        <td className="p-4">
                          <p
                            style={{
                              fontSize: `var(${type.cssVars.fontSize})`,
                              fontWeight: Number(type.weight),
                              lineHeight: `var(${type.cssVars.lineHeight})`,
                              letterSpacing: type.cssVars.letterSpacing ? `var(${type.cssVars.letterSpacing})` : undefined,
                              fontFamily: "'Roboto Serif', serif",
                              fontVariationSettings: type.fontVariationSettings || undefined,
                              textTransform: type.textTransform as React.CSSProperties['textTransform'],
                            }}
                            className="text-brand-navy dark:text-foreground"
                          >
                            {type.sample}
                          </p>
                        </td>
                        <td className="p-4">
                          <code className="text-xs bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">
                            {type.element}
                          </code>
                        </td>
                      </tr>
                    ))}

                    {/* Group: UI Headings (Inter) */}
                    <tr>
                      <td colSpan={5} className="px-4 py-2 bg-brand-navy/5 dark:bg-brand-navy-light/5 border-b border-gray-100 dark:border-border">
                        <span className="text-xs text-brand-navy dark:text-foreground tracking-wider uppercase">UI Opskrifte — Inter 600 / 700</span>
                      </td>
                    </tr>
                    {TYPOGRAPHY_TOKENS.filter(t => t.group === 'heading-sans').map(type => (
                      <tr key={type.name} className="hover:bg-gray-50 dark:hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="font-mono text-sm text-brand-red cursor-pointer hover:underline"
                              onClick={() => copyText(type.name)}
                            >
                              {type.name}
                            </span>
                            {type.textTransform && (
                              <span className="text-[9px] bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-full tracking-wide uppercase">UC</span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400 dark:text-gray-500 block">{type.label}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 block mt-0.5 cursor-pointer hover:text-brand-red" onClick={() => copyText(type.usage)}>{type.usage}</span>
                        </td>
                        <td className="p-4 text-[10px] text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fontSize})`)}>{type.cssVars.fontSize}</div>
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.lineHeight})`)}>{type.cssVars.lineHeight}</div>
                          {type.cssVars.letterSpacing && <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.letterSpacing})`)}>{type.cssVars.letterSpacing}</div>}
                        </td>
                        <td className="p-4 text-xs text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div>{type.sizePx}px</div>
                          <div>LH: {type.lineHeightPx}px</div>
                          <div>Wt: {type.weight}</div>
                          <div>LS: {type.letterSpacing}</div>
                          {type.textTransform && <div className="text-[10px] italic">text-transform: {type.textTransform}</div>}
                        </td>
                        <td className="p-4">
                          <p
                            style={{
                              fontSize: `var(${type.cssVars.fontSize})`,
                              fontWeight: Number(type.weight),
                              lineHeight: `var(${type.cssVars.lineHeight})`,
                              letterSpacing: type.cssVars.letterSpacing ? `var(${type.cssVars.letterSpacing})` : undefined,
                              fontFamily: "'Inter', sans-serif",
                              textTransform: type.textTransform as React.CSSProperties['textTransform'],
                            }}
                            className="text-brand-navy dark:text-foreground"
                          >
                            {type.sample}
                          </p>
                        </td>
                        <td className="p-4">
                          <code className="text-xs bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">
                            {type.element}
                          </code>
                        </td>
                      </tr>
                    ))}

                    {/* Group: Body Text (Inter) */}
                    <tr>
                      <td colSpan={5} className="px-4 py-2 bg-brand-navy/5 dark:bg-brand-navy-light/5 border-b border-gray-100 dark:border-border">
                        <span className="text-xs text-brand-navy dark:text-foreground tracking-wider uppercase">Liggaamsteks — Inter 400</span>
                      </td>
                    </tr>
                    {TYPOGRAPHY_TOKENS.filter(t => t.group === 'body').map(type => (
                      <tr key={type.name} className="hover:bg-gray-50 dark:hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <span
                            className="font-mono text-sm text-brand-red cursor-pointer hover:underline block mb-1"
                            onClick={() => copyText(type.name)}
                          >
                            {type.name}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 block">{type.label}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 block mt-0.5 cursor-pointer hover:text-brand-red" onClick={() => copyText(type.usage)}>{type.usage}</span>
                        </td>
                        <td className="p-4 text-[10px] text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.fontSize})`)}>{type.cssVars.fontSize}</div>
                          <div className="cursor-pointer hover:text-brand-red" onClick={() => copyText(`var(${type.cssVars.lineHeight})`)}>{type.cssVars.lineHeight}</div>
                        </td>
                        <td className="p-4 text-xs text-gray-500 dark:text-gray-400 font-mono space-y-0.5">
                          <div>{type.sizePx}px</div>
                          <div>LH: {type.lineHeightPx}px ({(type.lineHeightPx / type.sizePx).toFixed(2)}x)</div>
                          <div>Wt: {type.weight}</div>
                        </td>
                        <td className="p-4">
                          <p
                            style={{
                              fontSize: `var(${type.cssVars.fontSize})`,
                              fontWeight: Number(type.weight),
                              lineHeight: `var(${type.cssVars.lineHeight})`,
                              fontFamily: "'Inter', sans-serif",
                            }}
                            className="text-brand-navy dark:text-foreground"
                          >
                            {type.sample}
                          </p>
                        </td>
                        <td className="p-4">
                          <code className="text-xs bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-gray-600 dark:text-gray-400">
                            {type.element}
                          </code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              3. SPASIËRING
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Move} number="3" title="Spasiëring (Spacing)" badge="variable: space.*" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SPACING_TOKENS.map(space => (
                <div
                  key={space.name}
                  className="bg-white dark:bg-card p-4 rounded-lg border border-gray-100 dark:border-border hover:border-brand-red/30 transition-colors"
                >
                  <div className="flex justify-between mb-2 text-sm">
                    <span
                      className="font-mono font-bold text-brand-red cursor-pointer hover:underline"
                      onClick={() => copyText(space.cssVar)}
                    >
                      {space.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">{space.px}px</span>
                  </div>
                  <div
                    className="bg-brand-red/15 rounded-sm mb-2"
                    style={{ height: `${space.px}px`, minHeight: '4px' }}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">{space.value}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{space.usage}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              4. RONDINGS & SKADUWEES
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Layers} number="4" title="Rondings & Skaduwees" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Radii */}
              <div>
                <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Radius</h3>
                <div className="flex flex-col gap-4">
                  {RADIUS_TOKENS.map(r => (
                    <div
                      key={r.name}
                      className="bg-white dark:bg-card border border-gray-200 dark:border-border p-4 flex justify-between items-center cursor-pointer hover:border-primary dark:hover:border-primary transition-colors"
                      style={{ borderRadius: `${r.px}px` }}
                      onClick={() => copyText(r.tailwind)}
                    >
                      <div>
                        <span className="font-mono text-sm text-brand-navy dark:text-foreground">{r.name}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">({r.px}px)</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{r.usage}</p>
                      </div>
                      <div
                        className="w-10 h-10 bg-primary/10 dark:bg-primary/10 border border-primary/30 dark:border-primary/30 shrink-0"
                        style={{ borderRadius: `${r.px}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Shadows */}
              <div>
                <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Skaduwees (Elevations)</h3>
                <div className="grid grid-cols-2 gap-6">
                  {SHADOW_TOKENS.map(s => (
                    <div
                      key={s.name}
                      className="bg-white dark:bg-card p-6 rounded-lg text-center cursor-pointer hover:scale-105 transition-transform"
                      style={{ boxShadow: s.lightValue }}
                      onClick={() => copyText(s.tailwind)}
                    >
                      <p className="text-sm font-medium text-brand-navy dark:text-foreground">{s.label}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{s.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              5. UITLEG PATRONE
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={LayoutDashboard} number="5" title="Uitleg Patrone (Layout)" />

            <div className="space-y-4">
              {LAYOUT_TOKENS.map(layout => (
                <div
                  key={layout.name}
                  className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border p-5 hover:border-primary/30 dark:hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h4 className="font-normal text-brand-navy dark:text-foreground mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{layout.label}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{layout.usage}</p>
                    </div>
                    <code
                      className="text-xs bg-gray-50 dark:bg-background px-3 py-2 rounded font-mono text-primary dark:text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-muted transition-colors whitespace-nowrap"
                      onClick={() => copyText(layout.classes)}
                    >
                      {layout.classes}
                    </code>
                  </div>
                </div>
              ))}

              {/* Align-wide visual demo */}
              <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border p-6">
                <h4 className="font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Align-wide visuele demo</h4>
                <div className="bg-gray-100 dark:bg-background rounded-lg p-4 relative">
                  <div className="bg-primary/10 dark:bg-primary/10 border-2 border-dashed border-primary/30 dark:border-primary/30 rounded-lg mx-auto" style={{ maxWidth: '1440px', padding: 'clamp(1rem, 4vw, 2rem)' }}>
                    <div className="bg-white dark:bg-card rounded p-4 text-center text-sm text-gray-600 dark:text-gray-400">
                      max-w-[1440px] met px-[clamp(1rem,4vw,2rem)]
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-400 dark:text-gray-500 font-mono px-2">
                    <span>0px</span>
                    <span>1280px maks</span>
                    <span>100vw</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              6. BREEKPUNTE
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Maximize2} number="6" title="Breekpunte (Breakpoints)" />

            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden">
              <div className="p-6 space-y-4">
                {BREAKPOINT_TOKENS.map((bp, i) => {
                  const maxWidth = BREAKPOINT_TOKENS[BREAKPOINT_TOKENS.length - 1].px;
                  const widthPct = (bp.px / maxWidth) * 100;
                  return (
                    <div key={bp.name} className="flex items-center gap-4">
                      <div className="w-28 shrink-0">
                        <span className="font-bold text-sm text-brand-navy dark:text-foreground">{bp.label}</span>
                        <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">{bp.tailwindPrefix}</div>
                      </div>
                      <div className="flex-1">
                        <div className="relative h-6">
                          <div
                            className="h-6 rounded-r-full transition-[width]"
                            style={{
                              width: `${widthPct}%`,
                              backgroundColor: `color-mix(in oklch, var(--custom-primary) ${30 + i * 12}%, #1A3A5F)`,
                            }}
                          />
                          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-white/80">
                            {bp.value}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 w-32 shrink-0 hidden md:block">{bp.usage}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              7. TOKEN KARTERING TABEL
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={Code} number="7" title="Token Kartering (Mapping)" badge="CSS → Tailwind → Figma" />

            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead className="bg-gray-50 dark:bg-background text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3 border-b border-gray-100 dark:border-border">CSS Veranderlike</th>
                      <th className="p-3 border-b border-gray-100 dark:border-border">Lig</th>
                      <th className="p-3 border-b border-gray-100 dark:border-border">Donker</th>
                      <th className="p-3 border-b border-gray-100 dark:border-border">Tailwind</th>
                      <th className="p-3 border-b border-gray-100 dark:border-border">Figma Pad</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-border text-sm">
                    {COLOR_TOKENS.filter(t => t.category !== 'chart' && t.category !== 'sidebar').map(token => (
                      <tr key={token.cssVar} className="hover:bg-gray-50 dark:hover:bg-muted/50 transition-colors">
                        <td className="p-3 font-mono text-xs">
                          <span
                            className="text-primary dark:text-primary cursor-pointer hover:underline"
                            onClick={() => copyText(`var(--${token.cssVar})`)}
                          >
                            --{token.cssVar}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded border border-gray-200 dark:border-border shrink-0"
                              style={{ backgroundColor: token.light }}
                            />
                            <span className="font-mono text-xs text-gray-600 dark:text-gray-400 cursor-pointer" onClick={() => copyText(token.light)}>
                              {token.light}
                            </span>
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center gap-2">
                            <span
                              className="w-4 h-4 rounded border border-gray-200 dark:border-border shrink-0"
                              style={{ backgroundColor: token.dark }}
                            />
                            <span className="font-mono text-xs text-gray-600 dark:text-gray-400 cursor-pointer" onClick={() => copyText(token.dark)}>
                              {token.dark}
                            </span>
                          </span>
                        </td>
                        <td className="p-3">
                          <code
                            className="text-xs bg-gray-100 dark:bg-background px-1.5 py-0.5 rounded cursor-pointer hover:bg-gray-200 dark:hover:bg-muted"
                            onClick={() => copyText(token.tailwind.split('/')[0].trim())}
                          >
                            {token.tailwind.split('/')[0].trim()}
                          </code>
                        </td>
                        <td className="p-3 font-mono text-xs text-gray-500 dark:text-gray-400">{token.figmaName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              8. HANDELSMERK VISUELE KOMPONENTE
              ═══════════════════════════════════════════════════════ */}
          <section>
            <SectionHeader icon={MegaphoneIcon} number="8" title="Handelsmerk Visuele Komponente" badge="QuoteSlider + MarketingGrid" />
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
              Hierdie afdeling vertoon die herbruikbare handelsmerk-komponente wat regoor die webwerf gebruik word:
              die <code className="bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-sm">QuoteSlider</code> vir veldtogstellings 
              en die <code className="bg-gray-100 dark:bg-muted px-1.5 py-0.5 rounded text-sm">MarketingGrid</code> sosiale kaarte-karrousel.
            </p>

            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Quote Slider</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Volskerm veldtog-stellings met Roboto Serif tipografie. {ALL_QUOTES.length} variante beskikbaar. Gebruik op: Oor ons, Inteken, Adverteer.
            </p>
            <div className="mb-12 border border-gray-200 dark:border-border rounded-xl overflow-hidden shadow-sm">
              <QuoteSlider />
            </div>

            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Marketing Grid (sosiale kaarte)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              2-kolom karrousel van sosiale media-kaarte (1-kolom op selfoon). 4 unieke kaarte met outomatiese draai en navigasiepyle. Gebruik op: Oor ons, Kontak.
            </p>
            <div className="mb-4">
              <MarketingGrid />
            </div>
          </section>

        </div>
      </PageContainer>
      <PageFAQSection items={FOUNDATIONS_FAQS} />
    </div>
  );
};