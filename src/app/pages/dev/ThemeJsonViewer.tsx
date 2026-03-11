import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { useTabRoute, type TabSlugMap } from '../../hooks/useTabRoute';
import {
  FileJson, Palette, Type, RulerIcon as Ruler, Sun, Square,
  LayoutDashboard, Puzzle, Copy, Check, Download, ChevronDown, ChevronRight,
  ExternalLink, Eye,
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { WpCodeViewer } from '../../components/dev/WpCodeViewer';
import { wpThemeJson } from '../../data/wpFileLoader';
import {
  DIE_PAPIER_THEME_JSON,
  THEME_JSON_SUMMARY,
  THEME_JSON_SECTIONS,
} from '../../data/themeJsonData';

// ─── Tab definition ─────────────────────────────────────────────────────────

type TabKey = 'overview' | 'settings' | 'styles' | 'templates' | 'raw';

const TABS: { key: TabKey; labelAf: string; labelEn: string; icon: React.FC<{ size?: number; className?: string }> }[] = [
  { key: 'overview', labelAf: 'Oorsig', labelEn: 'Overview', icon: Eye },
  { key: 'settings', labelAf: 'Instellings', labelEn: 'Settings', icon: FileJson },
  { key: 'styles', labelAf: 'Style', labelEn: 'Styles', icon: Palette },
  { key: 'templates', labelAf: 'Sjablone', labelEn: 'Templates', icon: LayoutDashboard },
  { key: 'raw', labelAf: 'Redigeer JSON', labelEn: 'Raw JSON', icon: FileJson },
];

const TJV_TAB_SLUGS: TabSlugMap = {
  'overview': 'oorsig',
  'settings': 'instellings',
  'styles': 'style',
  'templates': 'sjablone',
  'raw': 'json',
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function CopyButton({ text, id, copiedId, onCopy }: {
  text: string; id: string; copiedId: string | null;
  onCopy: (text: string, id: string) => void;
}) {
  return (
    <button
      onClick={() => onCopy(text, id)}
      className="flex items-center gap-1 text-[10px] text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/60 transition-colors"
      title="Copy"
    >
      {copiedId === id ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
    </button>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export const ThemeJsonViewer = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const { activeTab, setActiveTab } = useTabRoute<TabKey>('/ontwikkelaar/temaJson', TJV_TAB_SLUGS, 'overview');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['colors', 'typography']));

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const fullJson = useMemo(() => JSON.stringify(DIE_PAPIER_THEME_JSON, null, 2), []);

  const handleDownload = () => {
    const blob = new Blob([fullJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'theme.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleSection = (key: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const heroMeta = HERO_META.themeJsonViewer;

  return (
    <div className="space-y-0">
      {heroMeta && (
        <DevToolHero
          icon={heroMeta.icon}
          iconColor={heroMeta.iconColor}
          title={resolveHeroMeta(heroMeta, locale).title}
          description={resolveHeroMeta(heroMeta, locale).description}
          stats={[
            { label: isAf ? 'Kleure' : 'Colors', value: THEME_JSON_SUMMARY.colorCount },
            { label: isAf ? 'Lettertipes' : 'Fonts', value: THEME_JSON_SUMMARY.fontFamilyCount },
            { label: isAf ? 'Font-groottes' : 'Font Sizes', value: THEME_JSON_SUMMARY.fontSizeCount },
            { label: isAf ? 'Spasiëring' : 'Spacing', value: THEME_JSON_SUMMARY.spacingSizeCount },
            { label: isAf ? 'Skaduwees' : 'Shadows', value: THEME_JSON_SUMMARY.shadowCount },
            { label: isAf ? 'Sjablone' : 'Templates', value: THEME_JSON_SUMMARY.templatePartCount + THEME_JSON_SUMMARY.customTemplateCount },
          ]}
          badge={`v${THEME_JSON_SUMMARY.version}`}
        />
      )}

      {/* Tab bar */}
      <div className="flex items-center gap-1 border-b border-gray-200 dark:border-white/10 mb-6 overflow-x-auto">
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'border-brand-red text-gray-900 dark:text-white'
                  : 'border-transparent text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/70'
              }`}
            >
              <Icon size={14} />
              {isAf ? tab.labelAf : tab.labelEn}
            </button>
          );
        })}
      </div>

      {/* ─── OVERVIEW TAB ─── */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-5">
            <h2 className="text-sm text-gray-900 dark:text-white mb-1">
              {isAf ? 'Die Papier theme.json — Weergawe 3' : 'Die Papier theme.json — Version 3'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-white/40 leading-relaxed">
              {isAf
                ? 'Hierdie lêer definieer die volledige ontwerpstelsel vir die WordPress FSE-tema. Dit beheer kleure, tipografie, spasiëring, skaduwees, rande, element-style, en sjablone. Gebaseer op die Ollie-tema met Die Papier aanpassings.'
                : 'This file defines the complete design system for the WordPress FSE theme. It controls colors, typography, spacing, shadows, borders, element styles, and templates. Based on the Ollie theme with Die Papier customizations.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {THEME_JSON_SECTIONS.map(section => (
              <button
                key={section.key}
                onClick={() => { setActiveTab('settings'); toggleSection(section.key); }}
                className="group bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 rounded-xl p-4 text-left transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{section.icon}</span>
                  <span className="text-sm text-brand-red">{section.itemCount}</span>
                </div>
                <h3 className="text-sm text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                  {isAf ? section.labelAf : section.labelEn}
                </h3>
                <p className="text-[11px] text-gray-500 dark:text-white/40 mt-1 leading-relaxed">
                  {isAf ? section.descAf : section.descEn}
                </p>
              </button>
            ))}
          </div>

          {/* Key info */}
          <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-xl p-4">
            <h3 className="text-xs text-blue-700 dark:text-blue-400 mb-2">
              {isAf ? 'Kernbesluite' : 'Key Decisions'}
            </h3>
            <ul className="space-y-1 text-[11px] text-blue-600 dark:text-blue-300/80">
              <li>* {isAf ? 'Numeriese slugs vir font-groottes (100-900), spasiëring (10-100), skaduwees (100-600), rande' : 'Numeric slugs for font sizes (100-900), spacing (10-100), shadows (100-600), borders'}</li>
              <li>* {isAf ? 'Semantiese slugs vir kleure (primary, base, contrast, ens.)' : 'Semantic slugs for colors (primary, base, contrast, etc.)'}</li>
              <li>* {isAf ? 'Roboto Serif vir koppe (h1-h4), Inter vir liggaam en UI (h5-h6, knoppies)' : 'Roboto Serif for headings (h1-h4), Inter for body and UI (h5-h6, buttons)'}</li>
              <li>* {isAf ? 'Veranderlike lettertipes met font-variation-settings (GRAD, wdth, opsz)' : 'Variable fonts with font-variation-settings (GRAD, wdth, opsz)'}</li>
              <li>* {isAf ? 'Vloeiende tipografie met clamp() vir h1, h2, en font-grootte 800-900' : 'Fluid typography with clamp() for h1, h2, and font sizes 800-900'}</li>
            </ul>
          </div>
        </div>
      )}

      {/* ─── SETTINGS TAB ─── */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          {/* Layout */}
          <ExpandableCard
            title={isAf ? 'Uitleg' : 'Layout'}
            subtitle={`contentSize: ${DIE_PAPIER_THEME_JSON.settings.layout.contentSize} | wideSize: ${DIE_PAPIER_THEME_JSON.settings.layout.wideSize}`}
            expanded={expandedSections.has('layout')}
            onToggle={() => toggleSection('layout')}
          >
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(DIE_PAPIER_THEME_JSON.settings.layout).map(([k, v]) => (
                <div key={k} className="flex items-center gap-2">
                  <code className="text-xs text-purple-600 dark:text-purple-400 font-mono">{k}</code>
                  <span className="text-xs text-gray-600 dark:text-white/60">{v}</span>
                  <CopyButton text={v} id={`layout-${k}`} copiedId={copiedId} onCopy={handleCopy} />
                </div>
              ))}
            </div>
          </ExpandableCard>

          {/* Colors */}
          <ExpandableCard
            title={isAf ? 'Kleure' : 'Colors'}
            subtitle={`${THEME_JSON_SUMMARY.colorCount} ${isAf ? 'palette-inskrywings' : 'palette entries'}`}
            expanded={expandedSections.has('colors')}
            onToggle={() => toggleSection('colors')}
          >
            <div className="space-y-1.5">
              {DIE_PAPIER_THEME_JSON.settings.color.palette.map(c => (
                <div key={c.slug} className="flex items-center gap-3 py-1">
                  <div
                    className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/20 shrink-0"
                    style={{ backgroundColor: c.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-gray-800 dark:text-white">{c.slug}</code>
                      <span className="text-[10px] text-gray-400 dark:text-white/30">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <code className="text-[10px] font-mono text-gray-500 dark:text-white/40">{c.color}</code>
                      <code className="text-[10px] font-mono text-blue-500 dark:text-blue-400">--wp--preset--color--{c.slug}</code>
                      <CopyButton text={`var(--wp--preset--color--${c.slug})`} id={`color-${c.slug}`} copiedId={copiedId} onCopy={handleCopy} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>

          {/* Typography — Font Families */}
          <ExpandableCard
            title={isAf ? 'Tipografie — Lettertipe Families' : 'Typography — Font Families'}
            subtitle={`${THEME_JSON_SUMMARY.fontFamilyCount} ${isAf ? 'families' : 'families'}`}
            expanded={expandedSections.has('typography')}
            onToggle={() => toggleSection('typography')}
          >
            <div className="space-y-3">
              {DIE_PAPIER_THEME_JSON.settings.typography.fontFamilies.map(ff => (
                <div key={ff.slug} className="bg-gray-50 dark:bg-white/[0.02] rounded-lg p-3 border border-gray-100 dark:border-white/5">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-xs font-mono text-purple-600 dark:text-purple-400">{ff.slug}</code>
                    <span className="text-[10px] text-gray-400 dark:text-white/30">{ff.name}</span>
                    {ff.fontFace && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400">
                        {ff.fontFace.length} {isAf ? 'vlakke' : 'faces'}
                      </span>
                    )}
                    {!ff.fontFace && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40">alias</span>
                    )}
                  </div>
                  <code className="text-[11px] text-gray-500 dark:text-white/40 font-mono">{ff.fontFamily}</code>
                  <div className="mt-1">
                    <code className="text-[10px] text-blue-500 dark:text-blue-400 font-mono">--wp--preset--font-family--{ff.slug}</code>
                    <CopyButton text={`var(--wp--preset--font-family--${ff.slug})`} id={`ff-${ff.slug}`} copiedId={copiedId} onCopy={handleCopy} />
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>

          {/* Typography — Font Sizes */}
          <ExpandableCard
            title={isAf ? 'Tipografie — Font Groottes' : 'Typography — Font Sizes'}
            subtitle={`${THEME_JSON_SUMMARY.fontSizeCount} ${isAf ? 'groottes' : 'sizes'}`}
            expanded={expandedSections.has('fontSizes')}
            onToggle={() => toggleSection('fontSizes')}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10">
                    <th className="px-3 py-2 text-left text-gray-500 dark:text-white/40">Slug</th>
                    <th className="px-3 py-2 text-left text-gray-500 dark:text-white/40">{isAf ? 'Grootte' : 'Size'}</th>
                    <th className="px-3 py-2 text-left text-gray-500 dark:text-white/40">{isAf ? 'Naam' : 'Name'}</th>
                    <th className="px-3 py-2 text-left text-gray-500 dark:text-white/40">CSS Variable</th>
                    <th className="px-3 py-2 text-left text-gray-500 dark:text-white/40">{isAf ? 'Voorskou' : 'Preview'}</th>
                  </tr>
                </thead>
                <tbody>
                  {DIE_PAPIER_THEME_JSON.settings.typography.fontSizes.map(fs => (
                    <tr key={fs.slug} className="border-b border-gray-100 dark:border-white/5">
                      <td className="px-3 py-2 font-mono text-purple-600 dark:text-purple-400">{fs.slug}</td>
                      <td className="px-3 py-2 font-mono text-gray-700 dark:text-white/70">{fs.size}</td>
                      <td className="px-3 py-2 text-gray-500 dark:text-white/40">{fs.name}</td>
                      <td className="px-3 py-2 font-mono text-blue-500 dark:text-blue-400 text-[10px]">
                        --wp--preset--font-size--{fs.slug}
                        <CopyButton text={`var(--wp--preset--font-size--${fs.slug})`} id={`fs-${fs.slug}`} copiedId={copiedId} onCopy={handleCopy} />
                      </td>
                      <td className="px-3 py-2">
                        <span style={{ fontSize: fs.size.startsWith('clamp') ? undefined : fs.size }} className="text-gray-800 dark:text-white">
                          Aa
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ExpandableCard>

          {/* Spacing */}
          <ExpandableCard
            title={isAf ? 'Spasiëring' : 'Spacing'}
            subtitle={`${THEME_JSON_SUMMARY.spacingSizeCount} ${isAf ? 'groottes' : 'sizes'}`}
            expanded={expandedSections.has('spacing')}
            onToggle={() => toggleSection('spacing')}
          >
            <div className="space-y-2">
              {DIE_PAPIER_THEME_JSON.settings.spacing.spacingSizes.map(sp => (
                <div key={sp.slug} className="flex items-center gap-3">
                  <code className="text-xs font-mono text-purple-600 dark:text-purple-400 w-8">{sp.slug}</code>
                  <div
                    className="h-4 bg-brand-red/20 border border-brand-red/30 rounded"
                    style={{ width: sp.size }}
                  />
                  <span className="text-xs text-gray-500 dark:text-white/40">{sp.size}</span>
                  <span className="text-[10px] text-gray-400 dark:text-white/30">{sp.name}</span>
                  <CopyButton text={`var(--wp--preset--spacing--${sp.slug})`} id={`sp-${sp.slug}`} copiedId={copiedId} onCopy={handleCopy} />
                </div>
              ))}
            </div>
          </ExpandableCard>

          {/* Shadows */}
          <ExpandableCard
            title={isAf ? 'Skaduwees' : 'Shadows'}
            subtitle={`${THEME_JSON_SUMMARY.shadowCount} ${isAf ? 'voorinstellings' : 'presets'}`}
            expanded={expandedSections.has('shadows')}
            onToggle={() => toggleSection('shadows')}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DIE_PAPIER_THEME_JSON.settings.shadow.presets.map(sh => (
                <div key={sh.slug} className="bg-white dark:bg-white/[0.03] rounded-xl p-4 border border-gray-200 dark:border-white/10" style={{ boxShadow: sh.shadow }}>
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-xs font-mono text-purple-600 dark:text-purple-400">{sh.slug}</code>
                    <span className="text-[10px] text-gray-400 dark:text-white/30">{sh.name}</span>
                  </div>
                  <code className="text-[10px] text-gray-500 dark:text-white/40 font-mono block break-all">{sh.shadow}</code>
                  <div className="mt-2 flex items-center gap-1">
                    <code className="text-[10px] text-blue-500 dark:text-blue-400 font-mono">--wp--preset--shadow--{sh.slug}</code>
                    <CopyButton text={`var(--wp--preset--shadow--${sh.slug})`} id={`sh-${sh.slug}`} copiedId={copiedId} onCopy={handleCopy} />
                  </div>
                </div>
              ))}
            </div>
          </ExpandableCard>

          {/* Border Radii & Widths */}
          <ExpandableCard
            title={isAf ? 'Rande & Rondings' : 'Borders & Radii'}
            subtitle={`${THEME_JSON_SUMMARY.borderRadiusCount} radii + ${THEME_JSON_SUMMARY.borderWidthCount} widths`}
            expanded={expandedSections.has('borders')}
            onToggle={() => toggleSection('borders')}
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-2">{isAf ? 'Rondings' : 'Border Radius'}</h4>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(DIE_PAPIER_THEME_JSON.settings.custom.borderRadius).map(([slug, val]) => (
                    <div key={slug} className="flex flex-col items-center gap-1">
                      <div
                        className="w-12 h-12 bg-brand-red/10 border-2 border-brand-red/40"
                        style={{ borderRadius: val }}
                      />
                      <code className="text-[10px] text-purple-600 dark:text-purple-400 font-mono">{slug}</code>
                      <span className="text-[10px] text-gray-400 dark:text-white/30">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 mb-2">{isAf ? 'Randwydtes' : 'Border Widths'}</h4>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(DIE_PAPIER_THEME_JSON.settings.custom.borderWidth).map(([slug, val]) => (
                    <div key={slug} className="flex items-center gap-2">
                      <div className="w-16 border-brand-red" style={{ borderTopWidth: val, borderTopStyle: 'solid' }} />
                      <code className="text-[10px] font-mono text-purple-600 dark:text-purple-400">{slug}</code>
                      <span className="text-[10px] text-gray-400 dark:text-white/30">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ExpandableCard>
        </div>
      )}

      {/* ─── STYLES TAB ─── */}
      {activeTab === 'styles' && (
        <div className="space-y-4">
          {/* Global styles */}
          <ExpandableCard
            title={isAf ? 'Globale Style' : 'Global Styles'}
            subtitle={isAf ? 'Kleur, tipografie, lynhoogte' : 'Color, typography, line-height'}
            expanded={true}
            onToggle={() => {}}
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-24">Background</span>
                <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{DIE_PAPIER_THEME_JSON.styles.color.background}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-24">Text</span>
                <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{DIE_PAPIER_THEME_JSON.styles.color.text}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-24">Font Family</span>
                <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{DIE_PAPIER_THEME_JSON.styles.typography.fontFamily}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-24">Font Size</span>
                <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{DIE_PAPIER_THEME_JSON.styles.typography.fontSize}</code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-24">Line Height</span>
                <code className="text-xs font-mono text-gray-600 dark:text-white/60">{DIE_PAPIER_THEME_JSON.styles.typography.lineHeight}</code>
              </div>
            </div>
          </ExpandableCard>

          {/* Element Styles */}
          {Object.entries(DIE_PAPIER_THEME_JSON.styles.elements).map(([element, style]) => (
            <ExpandableCard
              key={element}
              title={`<${element}>`}
              subtitle={
                element === 'button'
                  ? isAf ? 'Kleur + rand + tipografie' : 'Color + border + typography'
                  : `${style.typography?.fontFamily?.includes('serif') ? 'Roboto Serif' : 'Inter'} — ${style.typography?.fontSize || ''}`
              }
              expanded={expandedSections.has(`el-${element}`)}
              onToggle={() => toggleSection(`el-${element}`)}
            >
              <div className="space-y-2">
                {style.typography && Object.entries(style.typography).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-28 shrink-0">typography.{k}</span>
                    <code className="text-xs font-mono text-blue-500 dark:text-blue-400 break-all">{v}</code>
                  </div>
                ))}
                {style.color && Object.entries(style.color).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-28 shrink-0">color.{k}</span>
                    <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{v}</code>
                  </div>
                ))}
                {style.border && Object.entries(style.border).map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25 w-28 shrink-0">border.{k}</span>
                    <code className="text-xs font-mono text-blue-500 dark:text-blue-400">{v}</code>
                  </div>
                ))}
                {style.css && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/25">css</span>
                    <code className="text-[11px] font-mono text-amber-600 dark:text-amber-400 block mt-1 break-all">{style.css}</code>
                  </div>
                )}
              </div>
            </ExpandableCard>
          ))}
        </div>
      )}

      {/* ─── TEMPLATES TAB ─── */}
      {activeTab === 'templates' && (
        <div className="space-y-6">
          {/* Template Parts */}
          <div>
            <h2 className="text-sm text-gray-900 dark:text-white mb-3">
              {isAf ? 'Sjabloon Onderdele' : 'Template Parts'} ({DIE_PAPIER_THEME_JSON.templateParts.length})
            </h2>
            <div className="space-y-1.5">
              {DIE_PAPIER_THEME_JSON.templateParts.map(tp => (
                <div key={tp.name} className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
                  <Puzzle size={14} className={`shrink-0 ${tp.area === 'header' ? 'text-blue-500' : tp.area === 'footer' ? 'text-green-500' : 'text-gray-400'}`} />
                  <code className="text-xs font-mono text-gray-800 dark:text-white flex-1">{tp.name}</code>
                  <span className="text-xs text-gray-500 dark:text-white/40">{tp.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    tp.area === 'header' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                    tp.area === 'footer' ? 'bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400' :
                    'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40'
                  }`}>
                    {tp.area}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/ontwikkelaar/sjablone-onderdeel"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={12} />
              {isAf ? 'Bekyk in Template Part Browser' : 'View in Template Part Browser'}
            </Link>
          </div>

          {/* Custom Templates */}
          <div>
            <h2 className="text-sm text-gray-900 dark:text-white mb-3">
              {isAf ? 'Pasgemaakte Sjablone' : 'Custom Templates'} ({DIE_PAPIER_THEME_JSON.customTemplates.length})
            </h2>
            <div className="space-y-1.5">
              {DIE_PAPIER_THEME_JSON.customTemplates.map(ct => (
                <div key={ct.name} className="flex items-center gap-3 px-3 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg">
                  <LayoutDashboard size={14} className="text-indigo-500 shrink-0" />
                  <code className="text-xs font-mono text-gray-800 dark:text-white flex-1">{ct.name}</code>
                  <span className="text-xs text-gray-500 dark:text-white/40">{ct.title}</span>
                  <div className="flex gap-1">
                    {ct.postTypes.map(pt => (
                      <span key={pt} className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">{pt}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/ontwikkelaar/sjablone"
              className="inline-flex items-center gap-1.5 mt-3 text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={12} />
              {isAf ? 'Bekyk in Template Browser' : 'View in Template Browser'}
            </Link>
          </div>
        </div>
      )}

      {/* ─── RAW JSON TAB ─── */}
      {activeTab === 'raw' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500 dark:text-white/40">
              {isAf
                ? 'Volledige theme.json — bron: /wordpress-export/themes/die-papier-theme/theme.json'
                : 'Full theme.json — source: /wordpress-export/themes/die-papier-theme/theme.json'}
            </p>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-xs text-gray-600 dark:text-white/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors"
            >
              <Download size={12} />
              {isAf ? 'Aflaai theme.json' : 'Download theme.json'}
            </button>
          </div>
          <WpCodeViewer
            glob={wpThemeJson}
            filename="theme.json"
            label="theme.json"
            maxHeight={600}
          />
        </div>
      )}

      {RELATED_TOOLS_MAP.themeJsonViewer && (
        <DevRelatedTools tools={RELATED_TOOLS_MAP.themeJsonViewer} />
      )}
    </div>
  );
};

// ─── Expandable Card sub-component ──────────────────────────────────────────

function ExpandableCard({
  title,
  subtitle,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  subtitle: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors text-left"
      >
        {expanded ? (
          <ChevronDown size={14} className="text-gray-400 dark:text-white/30 shrink-0" />
        ) : (
          <ChevronRight size={14} className="text-gray-400 dark:text-white/30 shrink-0" />
        )}
        <span className="text-sm text-gray-900 dark:text-white">{title}</span>
        <span className="text-[11px] text-gray-400 dark:text-white/30 ml-auto">{subtitle}</span>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 dark:border-white/5 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default ThemeJsonViewer;