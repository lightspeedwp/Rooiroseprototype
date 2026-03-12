/**
 * OllieThemeReference — Ollie Theme Reference dev tool page.
 *
 * Route: /ontwikkelaar/ollie
 * 7 tabs: Overview, Templates & Parts, Patterns, Block Styles, Style Variations, Migration Plan
 * Comprehensive inventory of Ollie v1.5.4 — sourced from GitHub OllieWP/ollie.
 */

import React, { useState, useMemo } from 'react';
import {
  ExternalLink, Check, X, ArrowRight, RefreshCw, Palette, Info, FileCode,
  Layers, Trash2, Plus, FolderOpen, ChevronDown, ChevronRight, Search,
  Copy, CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { useTabRoute, type TabSlugMap } from '../../hooks/useTabRoute';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { Blocks } from 'lucide-react';
import {
  OLLIE_PATTERNS,
  OLLIE_PARTS,
  OLLIE_TEMPLATES,
  DP_NEW_TEMPLATES,
  OLLIE_BLOCK_STYLES,
  OLLIE_STYLE_VARIATIONS,
  OLLIE_PATTERN_CATEGORIES,
  computeStats,
  type MigrationDecision,
} from '../../data/ollieThemeData';

// ─── Tab definitions ────────────────────────────────────────────────────────

type TabKey = 'overview' | 'templatesParts' | 'patterns' | 'blockStyles' | 'styleVariations' | 'migrationPlan';

const OTR_TAB_SLUGS: TabSlugMap = {
  overview: 'oorsig',
  templatesParts: 'sjablone-dele',
  patterns: 'patrone',
  blockStyles: 'blokstyle',
  styleVariations: 'stylvariasies',
  migrationPlan: 'migrasieplan',
};

const TABS: { key: TabKey; labelAf: string; labelEn: string; icon: string }[] = [
  { key: 'overview',         labelAf: 'Oorsig',              labelEn: 'Overview',            icon: '📋' },
  { key: 'templatesParts',   labelAf: 'Sjablone & Dele',     labelEn: 'Templates & Parts',   icon: '📄' },
  { key: 'patterns',         labelAf: 'Patrone',             labelEn: 'Patterns',            icon: '🧩' },
  { key: 'blockStyles',      labelAf: 'Blokstyle',           labelEn: 'Block Styles',        icon: '🎨' },
  { key: 'styleVariations',  labelAf: 'Stylvariasies',       labelEn: 'Style Variations',    icon: '🎭' },
  { key: 'migrationPlan',    labelAf: 'Migrasieplan',        labelEn: 'Migration Plan',      icon: '🚀' },
];

// ─── Decision badge ─────────────────────────────────────────────────────────

function DecisionBadge({ decision }: { decision: MigrationDecision }) {
  const config: Record<MigrationDecision, { bg: string; icon: React.ReactNode; label: string }> = {
    keep:    { bg: 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300', icon: <Check size={10} />, label: 'Keep' },
    modify:  { bg: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300', icon: <RefreshCw size={10} />, label: 'Modify' },
    replace: { bg: 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300', icon: <ArrowRight size={10} />, label: 'Replace' },
    delete:  { bg: 'bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-300', icon: <Trash2 size={10} />, label: 'Delete' },
    new:     { bg: 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300', icon: <Plus size={10} />, label: 'New' },
  };
  const c = config[decision];
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] ${c.bg}`}>
      {c.icon} {c.label}
    </span>
  );
}

// ─── Decision filter pills ──────────────────────────────────────────────────

function FilterPills({
  counts,
  active,
  onToggle,
  isAf,
}: {
  counts: Record<string, number>;
  active: Set<string>;
  onToggle: (key: string) => void;
  isAf: boolean;
}) {
  const labels: Record<string, { af: string; en: string }> = {
    keep:    { af: 'Behou', en: 'Keep' },
    modify:  { af: 'Wysig', en: 'Modify' },
    replace: { af: 'Vervang', en: 'Replace' },
    delete:  { af: 'Verwyder', en: 'Delete' },
    new:     { af: 'Nuut', en: 'New' },
  };
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.entries(counts).filter(([, v]) => v > 0).map(([key, count]) => (
        <button
          key={key}
          onClick={() => onToggle(key)}
          className={`
            inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all border
            ${active.has(key)
              ? 'bg-white dark:bg-white/10 shadow-sm border-gray-300 dark:border-white/20 text-gray-900 dark:text-white'
              : 'bg-transparent border-gray-200 dark:border-white/[0.06] text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50'
            }
          `}
        >
          <DecisionBadge decision={key as MigrationDecision} />
          <span>{isAf ? labels[key]?.af : labels[key]?.en}: {count}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Search bar ──────────────────────────────────────────────────────────────

function SearchBar({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div className="relative">
      <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-3 py-2 rounded-lg text-xs bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/25 focus:outline-none focus:border-gray-400 dark:focus:border-white/20"
      />
    </div>
  );
}

// ─── Expandable row ──────────────────────────────────────────────────────────

function ExpandableRow({
  title,
  subtitle,
  badges,
  decision,
  children,
  isExpanded,
  onToggle,
}: {
  title: string;
  subtitle: string;
  badges?: React.ReactNode;
  decision: MigrationDecision;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors text-left"
      >
        <DecisionBadge decision={decision} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-900 dark:text-white">{title}</span>
            {badges}
          </div>
          <p className="text-[11px] text-gray-500 dark:text-white/40 mt-0.5">{subtitle}</p>
        </div>
        {isExpanded
          ? <ChevronDown size={14} className="text-gray-300 dark:text-white/20 shrink-0 mt-1" />
          : <ChevronRight size={14} className="text-gray-300 dark:text-white/20 shrink-0 mt-1" />
        }
      </button>
      {isExpanded && (
        <div className="border-t border-gray-100 dark:border-white/[0.04] px-4 py-4 space-y-3 bg-gray-50/50 dark:bg-white/[0.01]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Section label ───────────────────────────────────────────────────────────

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <h5 className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-white/30 mb-1.5 flex items-center gap-1">
      {icon} {label}
    </h5>
  );
}

// ─── Tab: Overview ──────────────────────────────────────────────────────────

function OverviewTab({ isAf }: { isAf: boolean }) {
  const stats = computeStats();

  return (
    <div className="space-y-6">
      {/* About Ollie */}
      <div className="p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🦉</span>
          <h3 className="text-sm text-gray-900 dark:text-white">
            {isAf ? 'Ollie v1.5.4 — Volledige Inventaris' : 'Ollie v1.5.4 — Complete Inventory'}
          </h3>
        </div>
        <p className="text-[13px] text-gray-600 dark:text-white/50 leading-relaxed">
          {isAf
            ? 'Hierdie bladsy bevat die volledige inventaris van die Ollie WordPress FSE-tema (v1.5.4), direk vanaf die GitHub-bewaarplek. Dit sluit alle patrone, sjablone, sjabloon-onderdele, blokstyle, en stylvariasies in, elk met \'n rooi rose migrasie-besluit: Behou, Wysig, Vervang, of Verwyder.'
            : 'This page contains the complete inventory of the Ollie WordPress FSE theme (v1.5.4), sourced directly from the GitHub repository. It covers all patterns, templates, template parts, block styles, and style variations, each with a rooi rose migration decision: Keep, Modify, Replace, or Delete.'
          }
        </p>
        <div className="flex gap-2 mt-3">
          <a
            href="https://github.com/OllieWP/ollie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-brand-red hover:underline"
          >
            GitHub Repository <ExternalLink size={10} />
          </a>
          <a
            href="https://demo.olliewp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-brand-red hover:underline"
          >
            Live Demo <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Migration overview grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            titleEn: 'Patterns', titleAf: 'Patrone', emoji: '🧩',
            total: stats.patterns.total,
            keep: stats.patterns.keep || 0, modify: stats.patterns.modify || 0,
            replace: stats.patterns.replace || 0, del: stats.patterns.delete || 0,
          },
          {
            titleEn: 'Templates', titleAf: 'Sjablone', emoji: '📄',
            total: stats.templates.total,
            keep: stats.templates.keep || 0, modify: stats.templates.modify || 0,
            replace: stats.templates.replace || 0, del: stats.templates.delete || 0,
            extra: `+${stats.templates.newDP} new`,
          },
          {
            titleEn: 'Parts', titleAf: 'Onderdele', emoji: '🔧',
            total: stats.parts.total,
            keep: stats.parts.keep || 0, modify: stats.parts.modify || 0,
            replace: stats.parts.replace || 0, del: stats.parts.delete || 0,
          },
          {
            titleEn: 'Block Styles', titleAf: 'Blokstyle', emoji: '🎨',
            total: stats.blockStyles.total,
            keep: stats.blockStyles.keep || 0, modify: stats.blockStyles.modify || 0,
            replace: stats.blockStyles.replace || 0, del: stats.blockStyles.delete || 0,
          },
          {
            titleEn: 'Style Variations', titleAf: 'Stylvariasies', emoji: '🎭',
            total: stats.styleVariations.total,
            keep: stats.styleVariations.keep || 0, modify: stats.styleVariations.modify || 0,
            replace: stats.styleVariations.replace || 0, del: stats.styleVariations.delete || 0,
          },
          {
            titleEn: 'Pattern Categories', titleAf: 'Patroonkategorieë', emoji: '📂',
            total: OLLIE_PATTERN_CATEGORIES.length,
            keep: OLLIE_PATTERN_CATEGORIES.length, modify: 0, replace: 0, del: 0,
          },
        ].map(card => (
          <div key={card.titleEn} className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs text-gray-900 dark:text-white flex items-center gap-1.5">
                <span>{card.emoji}</span> {isAf ? card.titleAf : card.titleEn}
              </h4>
              <span className="text-lg text-gray-900 dark:text-white">
                {card.total}
                {card.extra && <span className="text-[10px] text-blue-500 ml-1">{card.extra}</span>}
              </span>
            </div>
            <div className="flex gap-1.5">
              {card.keep > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300">
                  ✓ {card.keep}
                </span>
              )}
              {card.modify > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300">
                  ↻ {card.modify}
                </span>
              )}
              {card.replace > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300">
                  → {card.replace}
                </span>
              )}
              {card.del > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-300">
                  ✕ {card.del}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Theme.json highlights from actual Ollie repo */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/5 dark:to-blue-500/5 border border-indigo-200 dark:border-indigo-500/15">
        <h4 className="text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider mb-3">
          {isAf ? 'Ollie theme.json v3 Hoogtepunte' : 'Ollie theme.json v3 Highlights'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
          {[
            { label: isAf ? 'Kleurpalet' : 'Color Palette', value: '11 colors' },
            { label: isAf ? 'Lettergroottes' : 'Font Sizes', value: '7 fluid' },
            { label: isAf ? 'Spasiëring' : 'Spacing', value: '7 clamp()' },
            { label: isAf ? 'Skaduwees' : 'Shadows', value: '8 presets' },
            { label: isAf ? 'Lettertipe' : 'Font Family', value: 'Mona Sans' },
            { label: isAf ? 'Inhoudwydte' : 'Content Width', value: '740px' },
            { label: isAf ? 'Breë Wydte' : 'Wide Width', value: '1260px' },
            { label: isAf ? 'Duoklank' : 'Duotone', value: '12 presets' },
          ].map(item => (
            <div key={item.label} className="text-center p-2 rounded-lg bg-white/60 dark:bg-white/[0.03]">
              <span className="text-indigo-700 dark:text-indigo-200">{item.value}</span>
              <p className="text-indigo-500 dark:text-indigo-400/70 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ollie repo structure */}
      <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
        <h4 className="text-xs text-gray-900 dark:text-white mb-3 flex items-center gap-1.5">
          <FolderOpen size={14} /> {isAf ? 'Ollie Bewaarplek Struktuur' : 'Ollie Repository Structure'}
        </h4>
        <div className="font-mono text-[11px] text-gray-600 dark:text-white/40 space-y-0.5">
          {[
            'ollie/',
            '├── patterns/          (59 PHP pattern files)',
            '├── parts/',
            '│   ├── header.html    → ollie/header-light',
            '│   ├── footer.html    → ollie/footer-light',
            '│   └── sidebar.html   → inline blocks',
            '├── templates/',
            '│   ├── 404.html       → ollie/template-page-404',
            '│   ├── archive.html   → ollie/template-page-archive',
            '│   ├── index.html     → ollie/template-index-grid',
            '│   ├── page.html      → ollie/template-page-centered',
            '│   ├── page-no-title.html → ollie/template-page-full',
            '│   ├── page-with-sidebar.html → ollie/template-page-right-sidebar',
            '│   ├── search.html    → ollie/template-page-search',
            '│   └── single.html    → ollie/template-post-centered',
            '├── styles/',
            '│   ├── agency.json, creator.json, startup.json, studio.json',
            '│   ├── colors/        (7 color palettes)',
            '│   ├── typography/    (9 typography presets)',
            '│   └── blocks/button/ (button overrides)',
            '├── assets/fonts/mona-sans/',
            '├── functions.php      (block styles, pattern categories)',
            '├── theme.json         (v3 — design tokens)',
            '└── style.css          (CSS reset, helper classes)',
          ].map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Templates & Parts ──────────────────────────────────────────────────

function TemplatesPartsTab({ isAf }: { isAf: boolean }) {
  const [expandedIdx, setExpandedIdx] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Template Parts */}
      <div>
        <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          🔧 {isAf ? 'Sjabloon-onderdele (3 lêers)' : 'Template Parts (3 files)'}
        </h3>
        <div className="space-y-2">
          {OLLIE_PARTS.map((part, i) => (
            <ExpandableRow
              key={part.file}
              title={isAf ? part.nameAf : part.nameEn}
              subtitle={`parts/${part.file} → ${part.patternSlug}`}
              decision={part.decision}
              badges={
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/25">
                  {part.area}
                </span>
              }
              isExpanded={expandedIdx === `part-${i}`}
              onToggle={() => setExpandedIdx(expandedIdx === `part-${i}` ? null : `part-${i}`)}
            >
              <div>
                <SectionLabel icon={<FileCode size={10} />} label={isAf ? 'Migrasie Riglyn' : 'Migration Guide'} />
                <p className="text-[12px] text-gray-600 dark:text-white/50 leading-relaxed">
                  {isAf ? part.noteAf : part.noteEn}
                </p>
              </div>
              {part.dpSlug && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] text-gray-400 dark:text-white/30">DP →</span>
                  <code className="text-[11px] px-2 py-0.5 rounded bg-brand-red/10 text-brand-red font-mono">
                    {part.dpSlug}
                  </code>
                </div>
              )}
            </ExpandableRow>
          ))}
        </div>
      </div>

      {/* Ollie Templates */}
      <div>
        <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          📄 {isAf ? `Ollie Sjablone (${OLLIE_TEMPLATES.length} lêers)` : `Ollie Templates (${OLLIE_TEMPLATES.length} files)`}
        </h3>
        <div className="space-y-2">
          {OLLIE_TEMPLATES.map((t, i) => (
            <ExpandableRow
              key={t.file}
              title={isAf ? t.nameAf : t.nameEn}
              subtitle={`templates/${t.file} → ${t.patternSlug}`}
              decision={t.decision}
              badges={
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  t.templateType === 'custom'
                    ? 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/25'
                }`}>
                  {t.templateType}
                </span>
              }
              isExpanded={expandedIdx === `tpl-${i}`}
              onToggle={() => setExpandedIdx(expandedIdx === `tpl-${i}` ? null : `tpl-${i}`)}
            >
              <div>
                <SectionLabel icon={<FileCode size={10} />} label={isAf ? 'Migrasie Riglyn' : 'Migration Guide'} />
                <p className="text-[12px] text-gray-600 dark:text-white/50 leading-relaxed">
                  {isAf ? t.noteAf : t.noteEn}
                </p>
              </div>
              {t.dpPatternsUsed && t.dpPatternsUsed.length > 0 && (
                <div>
                  <SectionLabel icon={<Layers size={10} />} label={isAf ? 'DP Patroon Samestelling' : 'DP Pattern Composition'} />
                  <div className="flex flex-wrap gap-1.5">
                    {t.dpPatternsUsed.map(p => (
                      <span key={p} className="text-[10px] px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </ExpandableRow>
          ))}
        </div>
      </div>

      {/* New rooi rose Templates */}
      <div>
        <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          ✨ {isAf ? `Nuwe rooi rose Sjablone (${DP_NEW_TEMPLATES.length})` : `New rooi rose Templates (${DP_NEW_TEMPLATES.length})`}
        </h3>
        <div className="space-y-2">
          {DP_NEW_TEMPLATES.map((t, i) => (
            <ExpandableRow
              key={t.file}
              title={isAf ? t.nameAf : t.nameEn}
              subtitle={`templates/${t.file}`}
              decision="new"
              isExpanded={expandedIdx === `new-${i}`}
              onToggle={() => setExpandedIdx(expandedIdx === `new-${i}` ? null : `new-${i}`)}
            >
              <div>
                <SectionLabel icon={<FileCode size={10} />} label={isAf ? 'Beskrywing' : 'Description'} />
                <p className="text-[12px] text-gray-600 dark:text-white/50 leading-relaxed">
                  {isAf ? t.noteAf : t.noteEn}
                </p>
              </div>
              {t.dpPatternsUsed && t.dpPatternsUsed.length > 0 && (
                <div>
                  <SectionLabel icon={<Layers size={10} />} label={isAf ? 'Patroon Samestelling' : 'Pattern Composition'} />
                  <div className="flex flex-wrap gap-1.5">
                    {t.dpPatternsUsed.map(p => (
                      <span key={p} className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 font-mono">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </ExpandableRow>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Tab: Patterns ──────────────────────────────────────────────────────────

function PatternsTab({ isAf }: { isAf: boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [activeCategoryFilters, setActiveCategoryFilters] = useState<Set<string>>(new Set());

  const decisionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    OLLIE_PATTERNS.forEach(p => { counts[p.decision] = (counts[p.decision] || 0) + 1; });
    return counts;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    OLLIE_PATTERNS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });
    return counts;
  }, []);

  const toggleFilter = (key: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const toggleCategoryFilter = (key: string) => {
    setActiveCategoryFilters(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const filtered = useMemo(() => {
    return OLLIE_PATTERNS.filter(p => {
      if (activeFilters.size > 0 && !activeFilters.has(p.decision)) return false;
      if (activeCategoryFilters.size > 0 && !activeCategoryFilters.has(p.category)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          p.nameEn.toLowerCase().includes(q) ||
          p.nameAf.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.dpSlug || '').toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, activeFilters, activeCategoryFilters]);

  // Group by category
  const grouped = useMemo(() => {
    const groups: Record<string, typeof filtered> = {};
    filtered.forEach(p => {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="space-y-5">
      {/* Strategy guide */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-500/5 dark:to-blue-500/5 border border-indigo-200 dark:border-indigo-500/15">
        <div className="flex items-start gap-2">
          <Info size={14} className="text-indigo-500 dark:text-indigo-400 mt-0.5 shrink-0" />
          <p className="text-[11px] text-indigo-600 dark:text-indigo-400/80 leading-relaxed">
            {isAf
              ? `${OLLIE_PATTERNS.length} patrone geïnventariseer vanuit Ollie v1.5.4. Elke patroon het \\'n migrasie-besluit. Klik om gedetailleerde riglyne, blok-samestelling en rooi rose vervangingspatrone te sien.`
              : `${OLLIE_PATTERNS.length} patterns inventoried from Ollie v1.5.4. Each has a migration decision. Click to see detailed guidelines, block composition, and rooi rose replacement patterns.`
            }
          </p>
        </div>
      </div>

      {/* Filters & search */}
      <div className="space-y-3">
        <FilterPills counts={decisionCounts} active={activeFilters} onToggle={toggleFilter} isAf={isAf} />
        {/* Category filter pills */}
        <div className="flex gap-2 flex-wrap">
          {OLLIE_PATTERN_CATEGORIES.map(cat => {
            const count = categoryCounts[cat.labelEn] || 0;
            if (count === 0) return null;
            const isActive = activeCategoryFilters.has(cat.labelEn);
            return (
              <button
                key={cat.slug}
                onClick={() => toggleCategoryFilter(cat.labelEn)}
                className={`
                  inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all border
                  ${isActive
                    ? 'bg-white dark:bg-white/10 shadow-sm border-gray-300 dark:border-white/20 text-gray-900 dark:text-white'
                    : 'bg-transparent border-gray-200 dark:border-white/[0.06] text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white/50'
                  }
                `}
              >
                <span className="text-[10px]">📂</span>
                <span>{isAf ? cat.labelAf : cat.labelEn}: {count}</span>
              </button>
            );
          })}
        </div>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={isAf ? 'Soek patrone...' : 'Search patterns...'}
        />
      </div>

      {/* Grouped pattern list */}
      {grouped.map(([category, patterns]) => (
        <div key={category}>
          <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            📂 {category} <span className="text-[10px] text-gray-300 dark:text-white/20">({patterns.length})</span>
          </h3>
          <div className="space-y-2 mb-4">
            {patterns.map((p) => {
              const globalIdx = OLLIE_PATTERNS.indexOf(p);
              return (
                <ExpandableRow
                  key={p.slug}
                  title={isAf ? p.nameAf : p.nameEn}
                  subtitle={isAf ? p.descAf : p.descEn}
                  decision={p.decision}
                  badges={
                    <code className="text-[10px] text-gray-300 dark:text-white/15 font-mono">{p.slug}</code>
                  }
                  isExpanded={expandedIdx === globalIdx}
                  onToggle={() => setExpandedIdx(expandedIdx === globalIdx ? null : globalIdx)}
                >
                  <div>
                    <SectionLabel icon={<FileCode size={10} />} label={isAf ? 'Migrasie Riglyn' : 'Migration Guide'} />
                    <p className="text-[12px] text-gray-600 dark:text-white/50 leading-relaxed">
                      {isAf ? p.noteAf : p.noteEn}
                    </p>
                  </div>

                  {p.blocks && p.blocks.length > 0 && (
                    <div>
                      <SectionLabel icon={<Layers size={10} />} label={isAf ? 'Blok Tipes' : 'Block Types'} />
                      <div className="flex flex-wrap gap-1.5">
                        {p.blocks.map(block => (
                          <span key={block} className="text-[10px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 font-mono">
                            {block}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {p.dpSlug && (
                    <div className="flex items-center gap-2 pt-1">
                      <span className="text-[10px] text-gray-400 dark:text-white/30">DP →</span>
                      <code className="text-[11px] px-2 py-0.5 rounded bg-brand-red/10 text-brand-red font-mono">
                        {p.dpSlug}
                      </code>
                      <Link
                        to="/ontwikkelaar/patrone"
                        className="text-[10px] text-brand-red hover:underline flex items-center gap-0.5"
                      >
                        {isAf ? 'Sien Patroonblaaier' : 'View Pattern Browser'} <ArrowRight size={8} />
                      </Link>
                    </div>
                  )}
                </ExpandableRow>
              );
            })}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-8 text-gray-400 dark:text-white/25 text-xs">
          {isAf ? 'Geen patrone pas by jou soektog nie.' : 'No patterns match your search.'}
        </div>
      )}
    </div>
  );
}

// ─── Tab: Block Styles ──────────────────────────────────────────────────────

function BlockStylesTab({ isAf }: { isAf: boolean }) {
  // Group by block type
  const grouped = useMemo(() => {
    const groups: Record<string, typeof OLLIE_BLOCK_STYLES> = {};
    OLLIE_BLOCK_STYLES.forEach(bs => {
      if (!groups[bs.block]) groups[bs.block] = [];
      groups[bs.block].push(bs);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const decisionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    OLLIE_BLOCK_STYLES.forEach(bs => { counts[bs.decision] = (counts[bs.decision] || 0) + 1; });
    return counts;
  }, []);

  return (
    <div className="space-y-5">
      <div className="p-4 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-500/5 dark:to-purple-500/5 border border-pink-200 dark:border-pink-500/15">
        <div className="flex items-start gap-2">
          <Info size={14} className="text-pink-500 dark:text-pink-400 mt-0.5 shrink-0" />
          <p className="text-[11px] text-pink-600 dark:text-pink-400/80 leading-relaxed">
            {isAf
              ? `${OLLIE_BLOCK_STYLES.length} blokstylvariasies geregistreer in Ollie se functions.php via register_block_style(). Hierdie style word as CSS-klasse (.is-style-{name}) op blokke toegepas in die Site Editor.`
              : `${OLLIE_BLOCK_STYLES.length} block style variations registered in Ollie's functions.php via register_block_style(). These styles are applied as CSS classes (.is-style-{name}) to blocks in the Site Editor.`
            }
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="flex gap-3 flex-wrap">
        {Object.entries(decisionCounts).map(([key, count]) => (
          <span key={key} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
            <DecisionBadge decision={key as MigrationDecision} /> {count}
          </span>
        ))}
      </div>

      {/* Block styles table */}
      {grouped.map(([block, styles]) => (
        <div key={block}>
          <h4 className="text-xs text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <code className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 font-mono">
              {block}
            </code>
            <span className="text-[10px] text-gray-400 dark:text-white/25">({styles.length} styles)</span>
          </h4>
          <div className="rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] overflow-hidden mb-3">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/[0.04]">
                  <th className="text-left py-2 px-3 text-gray-400 dark:text-white/30">{isAf ? 'Styl' : 'Style'}</th>
                  <th className="text-left py-2 px-3 text-gray-400 dark:text-white/30">{isAf ? 'Etiket' : 'Label'}</th>
                  <th className="text-left py-2 px-3 text-gray-400 dark:text-white/30 hidden sm:table-cell">{isAf ? 'Notas' : 'Notes'}</th>
                  <th className="text-left py-2 px-3 text-gray-400 dark:text-white/30">{isAf ? 'Besluit' : 'Decision'}</th>
                </tr>
              </thead>
              <tbody>
                {styles.map(bs => (
                  <tr key={bs.styleName} className="border-b border-gray-50 dark:border-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.02]">
                    <td className="py-2 px-3">
                      <code className="text-[10px] text-gray-600 dark:text-white/50 font-mono">
                        .is-style-{bs.styleName}
                      </code>
                    </td>
                    <td className="py-2 px-3 text-gray-900 dark:text-white">{bs.label}</td>
                    <td className="py-2 px-3 text-gray-500 dark:text-white/40 hidden sm:table-cell">
                      {isAf ? bs.noteAf : bs.noteEn}
                    </td>
                    <td className="py-2 px-3"><DecisionBadge decision={bs.decision} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Tab: Style Variations ──────────────────────────────────────────────────

function StyleVariationsTab({ isAf }: { isAf: boolean }) {
  // Group by type
  const grouped = useMemo(() => {
    const groups: Record<string, typeof OLLIE_STYLE_VARIATIONS> = {};
    OLLIE_STYLE_VARIATIONS.forEach(sv => {
      if (!groups[sv.type]) groups[sv.type] = [];
      groups[sv.type].push(sv);
    });
    return groups;
  }, []);

  const typeLabels: Record<string, { af: string; en: string; emoji: string }> = {
    global: { af: 'Globale Stylvariasies', en: 'Global Style Variations', emoji: '🌐' },
    color: { af: 'Kleurpaletvariasies', en: 'Color Palette Variations', emoji: '🎨' },
    typography: { af: 'Tipografie-voorinstellings', en: 'Typography Presets', emoji: '📝' },
    block: { af: 'Blok-vlak Oorskrywings', en: 'Block-level Overrides', emoji: '🧱' },
  };

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-xl bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-500/5 dark:to-fuchsia-500/5 border border-violet-200 dark:border-violet-500/15">
        <div className="flex items-start gap-2">
          <Info size={14} className="text-violet-500 dark:text-violet-400 mt-0.5 shrink-0" />
          <p className="text-[11px] text-violet-600 dark:text-violet-400/80 leading-relaxed">
            {isAf
              ? `Ollie bevat ${OLLIE_STYLE_VARIATIONS.length} stylvariasies in die styles/ gids — 4 globale variasies, 7 kleurpalette, 9 tipografie-voorinstellings, en 1 blok-vlak oorskrywing. rooi rose verwyder die meeste hiervan en vervang dit met eie brand-spesifieke variasies.`
              : `Ollie ships ${OLLIE_STYLE_VARIATIONS.length} style variations in the styles/ directory — 4 global variations, 7 color palettes, 9 typography presets, and 1 block-level override. rooi rose deletes most of these, replacing them with brand-specific variations.`
            }
          </p>
        </div>
      </div>

      {['global', 'color', 'typography', 'block'].map(type => {
        const items = grouped[type] || [];
        if (items.length === 0) return null;
        const meta = typeLabels[type];
        return (
          <div key={type}>
            <h3 className="text-xs text-gray-400 dark:text-white/30 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              {meta.emoji} {isAf ? meta.af : meta.en} ({items.length})
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(sv => (
                <div key={sv.file} className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] space-y-2">
                  {/* Color preview */}
                  {sv.preview && sv.preview.length > 0 && (
                    <div className="flex rounded-lg overflow-hidden h-8">
                      {sv.preview.map(c => (
                        <div key={c.name} className="flex-1" style={{ backgroundColor: c.value }} title={`${c.name}: ${c.value}`} />
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900 dark:text-white">{isAf ? sv.nameAf : sv.nameEn}</span>
                    <DecisionBadge decision={sv.decision} />
                  </div>
                  <code className="text-[10px] text-gray-400 dark:text-white/25 font-mono block">{sv.file}</code>
                  <p className="text-[11px] text-gray-500 dark:text-white/40">
                    {isAf ? sv.noteAf : sv.noteEn}
                  </p>
                  {sv.preview && (
                    <div className="flex flex-wrap gap-1.5">
                      {sv.preview.map(c => (
                        <span key={c.name} className="inline-flex items-center gap-1 text-[10px] text-gray-500 dark:text-white/40">
                          <span className="w-3 h-3 rounded-full border border-gray-200 dark:border-white/10" style={{ backgroundColor: c.value }} />
                          {c.value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Tab: Migration Plan ─────────────────────────────────────────────────────

function MigrationPlanTab({ isAf }: { isAf: boolean }) {
  const stats = computeStats();

  // Build a unified file-level view
  const allFiles = useMemo(() => {
    const files: { path: string; type: string; decision: MigrationDecision; noteEn: string; noteAf: string; dpSlug?: string }[] = [];

    // Templates
    OLLIE_TEMPLATES.forEach(t => {
      files.push({
        path: `templates/${t.file}`, type: 'Template', decision: t.decision,
        noteEn: t.noteEn, noteAf: t.noteAf, dpSlug: t.dpSlug,
      });
    });

    // Parts
    OLLIE_PARTS.forEach(p => {
      files.push({
        path: `parts/${p.file}`, type: 'Part', decision: p.decision,
        noteEn: p.noteEn, noteAf: p.noteAf, dpSlug: p.dpSlug,
      });
    });

    // Style variations
    OLLIE_STYLE_VARIATIONS.forEach(sv => {
      files.push({
        path: sv.file, type: 'Style Variation', decision: sv.decision,
        noteEn: sv.noteEn, noteAf: sv.noteAf,
      });
    });

    // New DP templates
    DP_NEW_TEMPLATES.forEach(t => {
      files.push({
        path: `templates/${t.file}`, type: 'New Template', decision: 'new' as MigrationDecision,
        noteEn: t.noteEn, noteAf: t.noteAf,
      });
    });

    return files.sort((a, b) => {
      const order: Record<MigrationDecision, number> = { delete: 0, replace: 1, modify: 2, keep: 3, new: 4 };
      return (order[a.decision] ?? 5) - (order[b.decision] ?? 5);
    });
  }, []);

  const deleteCount = allFiles.filter(f => f.decision === 'delete').length;
  const keepCount = allFiles.filter(f => f.decision === 'keep').length;
  const modifyCount = allFiles.filter(f => f.decision === 'modify').length;
  const replaceCount = allFiles.filter(f => f.decision === 'replace').length;
  const newCount = allFiles.filter(f => f.decision === 'new').length;

  const [copiedJSON, setCopiedJSON] = useState(false);

  const handleCopyJSON = () => {
    const json = JSON.stringify({
      delete: allFiles.filter(f => f.decision === 'delete').map(f => f.path),
      replace: allFiles.filter(f => f.decision === 'replace').map(f => f.path),
      modify: allFiles.filter(f => f.decision === 'modify').map(f => f.path),
      keep: allFiles.filter(f => f.decision === 'keep').map(f => f.path),
      create: allFiles.filter(f => f.decision === 'new').map(f => f.path),
    }, null, 2);
    navigator.clipboard.writeText(json);
    setCopiedJSON(true);
    setTimeout(() => setCopiedJSON(false), 2000);
  };

  return (
    <div className="space-y-5">
      {/* Summary bar */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-500/5 dark:to-orange-500/5 border border-rose-200 dark:border-rose-500/15">
        <h4 className="text-xs text-rose-700 dark:text-rose-300 uppercase tracking-wider mb-3">
          {isAf ? 'Lêer-vlak Migrasie Opsomming' : 'File-level Migration Summary'}
        </h4>
        <div className="grid grid-cols-5 gap-3 text-center">
          {[
            { label: isAf ? 'Verwyder' : 'Delete', count: deleteCount, color: 'text-red-600 dark:text-red-300' },
            { label: isAf ? 'Vervang' : 'Replace', count: replaceCount, color: 'text-orange-600 dark:text-orange-300' },
            { label: isAf ? 'Wysig' : 'Modify', count: modifyCount, color: 'text-amber-600 dark:text-amber-300' },
            { label: isAf ? 'Behou' : 'Keep', count: keepCount, color: 'text-green-600 dark:text-green-300' },
            { label: isAf ? 'Nuut' : 'New', count: newCount, color: 'text-blue-600 dark:text-blue-300' },
          ].map(item => (
            <div key={item.label}>
              <span className={`text-lg ${item.color}`}>{item.count}</span>
              <p className="text-[10px] text-gray-500 dark:text-white/30 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Copy JSON button */}
      <div className="flex justify-end">
        <button
          onClick={handleCopyJSON}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] text-gray-600 dark:text-white/50 hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors"
        >
          {copiedJSON ? <CheckCircle size={12} className="text-green-500" /> : <Copy size={12} />}
          {copiedJSON ? (isAf ? 'Gekopieer!' : 'Copied!') : (isAf ? 'Kopieer as JSON' : 'Copy as JSON')}
        </button>
      </div>

      {/* File list table */}
      <div className="rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/[0.06]">
                <th className="text-left py-2.5 px-3 text-gray-400 dark:text-white/30">{isAf ? 'Besluit' : 'Decision'}</th>
                <th className="text-left py-2.5 px-3 text-gray-400 dark:text-white/30">{isAf ? 'Lêerpad' : 'File Path'}</th>
                <th className="text-left py-2.5 px-3 text-gray-400 dark:text-white/30 hidden sm:table-cell">{isAf ? 'Tipe' : 'Type'}</th>
                <th className="text-left py-2.5 px-3 text-gray-400 dark:text-white/30 hidden md:table-cell">{isAf ? 'Aksie' : 'Action'}</th>
              </tr>
            </thead>
            <tbody>
              {allFiles.map((f, i) => (
                <tr key={`${f.path}-${i}`} className={`border-b border-gray-50 dark:border-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.02] ${
                  f.decision === 'delete' ? 'bg-red-50/30 dark:bg-red-500/[0.02]' : ''
                }`}>
                  <td className="py-2 px-3"><DecisionBadge decision={f.decision} /></td>
                  <td className="py-2 px-3">
                    <code className={`text-[11px] font-mono ${
                      f.decision === 'delete'
                        ? 'text-red-400 dark:text-red-400/60 line-through'
                        : 'text-gray-700 dark:text-white/60'
                    }`}>
                      {f.path}
                    </code>
                  </td>
                  <td className="py-2 px-3 text-gray-500 dark:text-white/40 hidden sm:table-cell">{f.type}</td>
                  <td className="py-2 px-3 text-gray-500 dark:text-white/40 hidden md:table-cell text-[11px]">
                    {f.dpSlug && (
                      <span className="text-brand-red">→ {f.dpSlug}</span>
                    )}
                    {f.decision === 'new' && <span className="text-blue-500">{isAf ? 'Skep' : 'Create'}</span>}
                    {f.decision === 'delete' && <span className="text-red-400">{isAf ? 'Verwyder lêer' : 'Remove file'}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pattern-level summary (not file-level) */}
      <div className="p-4 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06]">
        <h4 className="text-xs text-gray-900 dark:text-white mb-3">
          {isAf ? 'Patroon-vlak Besluite' : 'Pattern-level Decisions'}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {[
            { label: 'Keep', count: stats.patterns.keep || 0, bg: 'bg-green-50 dark:bg-green-500/5', text: 'text-green-700 dark:text-green-300' },
            { label: 'Modify', count: stats.patterns.modify || 0, bg: 'bg-amber-50 dark:bg-amber-500/5', text: 'text-amber-700 dark:text-amber-300' },
            { label: 'Replace', count: stats.patterns.replace || 0, bg: 'bg-orange-50 dark:bg-orange-500/5', text: 'text-orange-700 dark:text-orange-300' },
            { label: 'Delete', count: stats.patterns.delete || 0, bg: 'bg-red-50 dark:bg-red-500/5', text: 'text-red-700 dark:text-red-300' },
            { label: 'Total', count: stats.patterns.total, bg: 'bg-gray-50 dark:bg-white/5', text: 'text-gray-700 dark:text-white/60' },
          ].map(item => (
            <div key={item.label} className={`p-3 rounded-lg ${item.bg} text-center`}>
              <span className={`text-lg ${item.text}`}>{item.count}</span>
              <p className="text-[10px] text-gray-500 dark:text-white/30 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function OllieThemeReference() {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const { activeTab, setActiveTab } = useTabRoute<TabKey>('/ontwikkelaar/ollie', OTR_TAB_SLUGS, 'overview');

  const heroMeta = HERO_META.ollieThemeReference;
  const hero = heroMeta ? resolveHeroMeta(heroMeta, locale) : null;
  const related = RELATED_TOOLS_MAP.ollieThemeReference || [];

  const stats = computeStats();

  const heroStats: HeroStat[] = [
    { label: isAf ? 'patrone' : 'patterns', value: stats.patterns.total },
    { label: isAf ? 'sjablone' : 'templates', value: `${stats.templates.total}+${stats.templates.newDP}` },
    { label: isAf ? 'blokstyle' : 'block styles', value: stats.blockStyles.total },
    { label: isAf ? 'stylvariasies' : 'style variations', value: stats.styleVariations.total },
  ];

  return (
    <div className="contents">
      <DevToolHero
        icon={heroMeta?.icon || Blocks}
        iconColor={heroMeta?.iconColor || 'bg-blue-500'}
        title={hero?.title || (isAf ? 'Ollie Tema Verwysing' : 'Ollie Theme Reference')}
        description={hero?.description || ''}
        stats={heroStats}
        badge="Ollie v1.5.4"
      />

      {/* Tab bar */}
      <div className="flex flex-wrap gap-1.5 mb-6 p-1 rounded-xl bg-gray-100 dark:bg-white/[0.04]">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-all
              ${activeTab === tab.key
                ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-white/40 hover:text-gray-700 dark:hover:text-white/60 hover:bg-white/50 dark:hover:bg-white/5'
              }
            `}
          >
            <span>{tab.icon}</span>
            <span className="hidden sm:inline">{isAf ? tab.labelAf : tab.labelEn}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && <OverviewTab isAf={isAf} />}
      {activeTab === 'templatesParts' && <TemplatesPartsTab isAf={isAf} />}
      {activeTab === 'patterns' && <PatternsTab isAf={isAf} />}
      {activeTab === 'blockStyles' && <BlockStylesTab isAf={isAf} />}
      {activeTab === 'styleVariations' && <StyleVariationsTab isAf={isAf} />}
      {activeTab === 'migrationPlan' && <MigrationPlanTab isAf={isAf} />}

      {/* Related Tools */}
      <div className="mt-12">
        <DevRelatedTools tools={related} />
      </div>
    </div>
  );
}

export default OllieThemeReference;