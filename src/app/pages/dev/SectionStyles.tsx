import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import {
  ChevronDown, ChevronRight, Copy, Check, Search, X, Palette,
  LayoutTemplate, LayoutDashboard, Paintbrush, FolderOpen, Layers, LayoutGrid,
  AlertTriangle, CheckCircle, HardDrive, Database, Component
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { CodeBlock, type CodeLanguage } from '../../components/dev/CodeBlock';
import { WpCodeViewer } from '../../components/dev/WpCodeViewer';
import { wpSectionStyles, wpAllGuidelines } from '../../data/wpFileLoader';
import { ALL_SECTION_STYLES, type SectionStyleEntry, type WpThemeJsonSectionStyle, loadSectionStyleJson, countBlockOverrides, countElements } from '../../data/sectionStylesData';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import { WpMarkdownViewer } from '../../components/dev/WpMarkdownViewer';

// Use the shared type alias
type SectionStyle = SectionStyleEntry;

const generateCSS = (style: SectionStyle): string => {
  if (style.category === 'gradient') {
    return `/**
 * Section Style: ${style.label}
 * Block: ${style.wpBlock}
 * Handle: dp-${style.name}
 * File: ${style.wpFilePath}
 */

.wp-block-group.is-style-${style.name} {
  background: ${style.cssGradient};
  color: #ffffff;
  padding-top: var(--wp--preset--spacing--large);
  padding-bottom: var(--wp--preset--spacing--large);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
}

@media (min-width: 768px) {
  .wp-block-group.is-style-${style.name} {
    padding-top: var(--wp--preset--spacing--xxx-large);
    padding-bottom: var(--wp--preset--spacing--xxx-large);
  }
}

html.dark .wp-block-group.is-style-${style.name} {
  background: ${style.darkGradient};
}

.wp-block-group.is-style-${style.name} > .wp-block-group__inner-container {
  max-width: var(--wp--style--global--wide-size);
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1rem, 4vw, 2rem);
  padding-right: clamp(1rem, 4vw, 2rem);
}`;
  }

  return `/**
 * Section Style: ${style.label}
 * Block: ${style.wpBlock}
 * Handle: dp-${style.name}
 * File: ${style.wpFilePath}
 */

.wp-block-group.is-style-${style.name} {
  background-color: ${style.cssBackground ? `var(${style.cssBackground})` : 'var(--wp--preset--color--base)'};
  ${style.cssText ? `color: ${style.cssText.startsWith('#') ? style.cssText : `var(${style.cssText})`};` : ''}
  padding-top: var(--wp--preset--spacing--large);
  padding-bottom: var(--wp--preset--spacing--large);
  ${style.category === 'background' ? `margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;` : ''}
}

@media (min-width: 768px) {
  .wp-block-group.is-style-${style.name} {
    padding-top: var(--wp--preset--spacing--xxx-large);
    padding-bottom: var(--wp--preset--spacing--xxx-large);
  }
}

html.dark .wp-block-group.is-style-${style.name} {
  ${style.darkBg ? `background-color: ${style.darkBg};` : ''}
  ${style.darkText ? `color: ${style.darkText};` : ''}
}

.wp-block-group.is-style-${style.name} > .wp-block-group__inner-container {
  max-width: var(--wp--style--global--wide-size);
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(1rem, 4vw, 2rem);
  padding-right: clamp(1rem, 4vw, 2rem);
}`;
};

const generateWPMarkup = (style: SectionStyle): string => {
  return `<!-- wp:group {"align":"full","className":"is-style-${style.name}","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull is-style-${style.name}">
  <!-- wp:heading {"level":2} -->
  <h2>Voorbeeld opskrif</h2>
  <!-- /wp:heading -->

  <!-- wp:paragraph -->
  <p>Inhoud gaan hier. Die constrained layout hou binne-blokke binne 1280px.</p>
  <!-- /wp:paragraph -->
</div>
<!-- /wp:group -->`;
};

const generatePHPRegistration = (style: SectionStyle): string => {
  return `// Register in inc/block-styles.php
register_block_style(
    '${style.wpBlock}',
    array(
        'name'         => '${style.name}',
        'label'        => __( '${style.labelEn}', 'die-papier' ),
        'style_handle' => 'dp-${style.name}',
    )
);

// Enqueue CSS in functions.php
wp_enqueue_block_style(
    '${style.wpBlock}',
    array(
        'handle' => 'dp-${style.name}',
        'src'    => get_theme_file_uri( '${style.wpFilePath}' ),
        'path'   => get_theme_file_path( '${style.wpFilePath}' ),
    )
);`;
};

export const SectionStyles = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const { usage: urlUsage } = useParams<{ usage?: string }>();
  const navigate = useNavigate();

  const [expandedStyle, setExpandedStyle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeUsage, setActiveUsage] = useState<string | 'all'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [codeTab, setCodeTab] = useState<Record<string, 'css' | 'json' | 'wp' | 'php' | 'guidelines'>>({});

  // Sync URL → state on mount/URL change
  useEffect(() => {
    if (urlUsage && urlUsage !== 'all') {
      // Validate usage is valid
      const validUsages = ['template', 'part', 'pattern', 'react'];
      if (validUsages.includes(urlUsage)) {
        setActiveUsage(urlUsage);
      }
    } else {
      setActiveUsage('all');
    }
  }, [urlUsage]);

  // Update usage with URL sync
  const handleUsageChange = (usage: string) => {
    setActiveUsage(usage);
    // Update URL
    if (usage === 'all') {
      navigate('/ontwikkelaar/afdeling-style', { replace: true });
    } else {
      navigate(`/ontwikkelaar/afdeling-style/${usage}`, { replace: true });
    }
  };

  const toggleStyle = (id: string) => {
    setExpandedStyle(expandedStyle === id ? null : id);
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getActiveTab = (id: string) => codeTab[id] || 'css';
  const setActiveTab = (id: string, tab: 'css' | 'json' | 'wp' | 'php' | 'guidelines') => {
    setCodeTab(prev => ({ ...prev, [id]: tab }));
  };

  const filteredStyles = ALL_SECTION_STYLES.filter((style) => {
    const matchesSearch =
      style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.labelEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.reactClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.patterns.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      style.parts.some((pt) => pt.toLowerCase().includes(searchQuery.toLowerCase())) ||
      style.templates.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesUsage =
      activeUsage === 'all' ||
      (activeUsage === 'template' && style.templates.length > 0) ||
      (activeUsage === 'part' && style.parts.length > 0) ||
      (activeUsage === 'pattern' && style.patterns.length > 0) ||
      (activeUsage === 'react' && style.usedInReact.length > 0);

    return matchesSearch && matchesUsage;
  });

  const backgroundStyles = filteredStyles.filter((s) => s.category === 'background');
  const gradientStyles = filteredStyles.filter((s) => s.category === 'gradient');
  const componentStyles = filteredStyles.filter((s) => s.category === 'component');
  const infrastructureStyles = filteredStyles.filter((s) => s.category === 'infrastructure');

  const heroMeta = HERO_META.sectionStyles;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <div>
      {/* Hero */}
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={hero.title}
        description={hero.description}
        stats={[
          { label: t('ss.totalStyles'), value: ALL_SECTION_STYLES.length },
          { label: t('ss.background'), value: ALL_SECTION_STYLES.filter(s => s.category === 'background').length },
          { label: t('ss.gradients'), value: ALL_SECTION_STYLES.filter(s => s.category === 'gradient').length },
          { label: t('ss.component'), value: ALL_SECTION_STYLES.filter(s => s.category === 'component').length },
          { label: isAf ? 'Infrastruktuur' : 'Infrastructure', value: ALL_SECTION_STYLES.filter(s => s.category === 'infrastructure').length },
        ]}
      />

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <DevSearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('ss.searchPlaceholder')}
          />
        </div>
        <div className="shrink-0">
          <select
            value={activeUsage}
            onChange={(e) => handleUsageChange(e.target.value)}
            className="w-full md:w-48 px-3 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          >
            <option value="all">{isAf ? 'Alle Gebruik' : 'All Usage'}</option>
            <option value="template">{isAf ? 'Gebruik in Templates' : 'Used in Templates'}</option>
            <option value="part">{isAf ? 'Gebruik in Dele' : 'Used in Parts'}</option>
            <option value="pattern">{isAf ? 'Gebruik in Patrone' : 'Used in Patterns'}</option>
            <option value="react">{isAf ? 'Gebruik in React' : 'Used in React'}</option>
          </select>
        </div>
      </div>

      {/* Conversion Process */}
      <div className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-xl p-5 mb-8">
        <h2 className="text-sm text-gray-800 dark:text-white mb-3 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white">&#10003;</span>
          {t('ss.conversionTitle')}
        </h2>
        <ol className="space-y-1.5 text-xs text-gray-600 dark:text-white/60">
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">1.</span>
            <span>{t('ss.step1')}</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">2.</span>
            <span>{t('ss.step2')}</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">3.</span>
            <span>{t('ss.step3')}</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">4.</span>
            <span>{t('ss.step4')} <Link to="/ontwikkelaar/inc-map" className="underline text-indigo-600 dark:text-indigo-400 hover:no-underline">{t('ss.step4Link')}</Link></span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">5.</span>
            <span>{t('ss.step5')} <Link to="/ontwikkelaar/patrone" className="underline text-indigo-600 dark:text-indigo-400 hover:no-underline">{t('ss.step5Link')}</Link></span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-indigo-600 dark:text-indigo-300">6.</span>
            <span>{t('ss.step6')}</span>
          </li>
        </ol>
      </div>

      {/* Style Sections */}
      {[
        { styles: backgroundStyles, label: t('ss.backgroundStyles'), dot: 'bg-blue-500' },
        { styles: gradientStyles, label: t('ss.gradientStyles'), dot: 'bg-gradient-to-r from-purple-500 to-pink-500' },
        { styles: componentStyles, label: t('ss.componentStyles'), dot: 'bg-green-500' },
        { styles: infrastructureStyles, label: isAf ? 'Infrastruktuur Afdelings' : 'Infrastructure Sections', dot: 'bg-amber-500' },
      ].map(({ styles, label, dot }) =>
        styles.length > 0 ? (
          <div key={label} className="mb-8">
            <h2 className="text-sm text-gray-800 dark:text-white mb-3 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${dot}`}></span>
              {label}
              <span className="text-xs text-gray-400 dark:text-white/30">({styles.length})</span>
            </h2>
            <div className="space-y-2">
              {styles.map((style) => (
                <StyleCard
                  key={style.id}
                  style={style}
                  isExpanded={expandedStyle === style.id}
                  onToggle={() => toggleStyle(style.id)}
                  onCopy={copyToClipboard}
                  copiedId={copiedId}
                  isAf={isAf}
                  t={t}
                  activeTab={getActiveTab(style.id)}
                  onTabChange={(tab) => setActiveTab(style.id, tab)}
                />
              ))}
            </div>
          </div>
        ) : null
      )}

      {filteredStyles.length === 0 && (
        <div className="text-center py-12 text-gray-400 dark:text-white/40">
          {t('ss.noResults')}
        </div>
      )}

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.sectionStyles} />
    </div>
  );
};

// ─── StyleCard Component ───────────────────────────────────────────────────

interface StyleCardProps {
  style: SectionStyle;
  isExpanded: boolean;
  onToggle: () => void;
  onCopy: (text: string, id: string) => void;
  copiedId: string | null;
  isAf: boolean;
  t: (key: string) => string;
  activeTab: 'css' | 'json' | 'wp' | 'php' | 'guidelines';
  onTabChange: (tab: 'css' | 'json' | 'wp' | 'php' | 'guidelines') => void;
}

const StyleCard: React.FC<StyleCardProps> = ({ style, isExpanded, onToggle, onCopy, copiedId, isAf, t, activeTab, onTabChange }) => {
  const [diskJson, setDiskJson] = useState<WpThemeJsonSectionStyle | null>(null);
  const [diskLoading, setDiskLoading] = useState(false);

  // Load disk JSON when card is expanded
  useEffect(() => {
    if (isExpanded && !diskJson && !diskLoading) {
      setDiskLoading(true);
      loadSectionStyleJson(style.id).then(json => {
        setDiskJson(json);
        setDiskLoading(false);
      }).catch(() => setDiskLoading(false));
    }
  }, [isExpanded, style.id, diskJson, diskLoading]);

  // Compute inline vs disk diff
  const inlineBlocks = countBlockOverrides(style.wpThemeJson);
  const inlineElements = countElements(style.wpThemeJson);
  const diskBlocks = diskJson ? countBlockOverrides(diskJson) : null;
  const diskElements = diskJson ? countElements(diskJson) : null;
  const hasDrift = diskJson !== null && (diskBlocks !== inlineBlocks || diskElements !== inlineElements);

  const CODE_TABS = [
    { key: 'css' as const, label: 'CSS' },
    { key: 'json' as const, label: 'JSON' },
    { key: 'wp' as const, label: t('ss.wpMarkup') },
    { key: 'php' as const, label: 'PHP' },
    { key: 'guidelines' as const, label: t('ss.guidelines') },
  ];

  const getCode = (): string => {
    switch (activeTab) {
      case 'css': return generateCSS(style);
      case 'wp': return generateWPMarkup(style);
      case 'php': return generatePHPRegistration(style);
      default: return '';
    }
  };

  const getCodeLanguage = (): CodeLanguage => {
    switch (activeTab) {
      case 'css': return 'css';
      case 'wp': return 'html';
      case 'php': return 'php';
      default: return 'text';
    }
  };

  return (
    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex items-center gap-3">
          {isExpanded ? <ChevronDown size={14} className="text-gray-400 dark:text-white/30" /> : <ChevronRight size={14} className="text-gray-400 dark:text-white/30" />}
          {/* Visual swatch */}
          {style.category === 'gradient' ? (
            <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/20" style={{ background: style.cssGradient }}></div>
          ) : style.cssBackground?.startsWith('--') ? (
            <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/20 bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[8px] font-mono text-gray-400 dark:text-white/30">
              var
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg border border-gray-200 dark:border-white/20" style={{ background: style.cssBackground || '#ffffff' }}></div>
          )}
          <div className="text-left">
            <div className="font-mono text-sm text-gray-800 dark:text-white">{style.name}</div>
            <div className="text-[11px] text-gray-500 dark:text-white/40">{isAf ? style.label : style.labelEn}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-gray-400 dark:text-white/30">{style.templates.length}T / {style.parts.length}PT / {style.patterns.length}P</span>
          <code className="text-[10px] bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/50 px-2 py-0.5 rounded">.is-style-{style.name}</code>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-white/10 p-4 space-y-4">
          {/* Code tabs — moved higher for mobile */}
          <div className="md:order-last">
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1 flex-wrap">
                {CODE_TABS.map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`px-2.5 py-1 rounded text-[10px] transition-colors ${
                      activeTab === tab.key
                        ? 'bg-gray-800 dark:bg-white/15 text-white'
                        : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {activeTab !== 'guidelines' && (
                <button
                  onClick={() => onCopy(getCode(), `${activeTab}-${style.id}`)}
                  className="flex items-center gap-1.5 text-[10px] text-gray-500 dark:text-white/40 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  {copiedId === `${activeTab}-${style.id}` ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                  {copiedId === `${activeTab}-${style.id}` ? t('common.copiedToast') : t('common.copy')}
                </button>
              )}
            </div>
            {activeTab === 'json' ? (
              <WpCodeViewer
                glob={wpSectionStyles}
                filename={style.wpFilePath.split('/').pop()!}
                label={style.wpFilePath.split('/').pop()!}
                maxHeight={400}
              />
            ) : activeTab === 'guidelines' ? (
              <WpMarkdownViewer
                glob={wpAllGuidelines}
                filename="SECTION-STYLES-CSS-TO-JSON.md"
                label="Section Styles Architecture Guide"
                maxHeight={500}
                locale={isAf ? 'af' : 'en'}
              />
            ) : (
              <CodeBlock code={getCode()} language={getCodeLanguage()} editable label={`${style.name}.${activeTab === 'wp' ? 'html' : activeTab}`} />
            )}
          </div>

          {/* Metadata grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div>
              <div className="text-gray-400 dark:text-white/30 mb-1">{t('ss.reactClass')}</div>
              <code className="text-gray-700 dark:text-white/70 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded block text-[11px]">{style.reactClass}</code>
            </div>
            <div>
              <div className="text-gray-400 dark:text-white/30 mb-1">{t('ss.wpBlock')}</div>
              <code className="text-gray-700 dark:text-white/70 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded block text-[11px]">{style.wpBlock}</code>
            </div>
            <div>
              <div className="text-gray-400 dark:text-white/30 mb-1">{t('ss.cssFile')}</div>
              <code className="text-gray-700 dark:text-white/70 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded block text-[11px] truncate">{style.wpFilePath}</code>
            </div>
            {style.keyProperties && (
              <div>
                <div className="text-gray-400 dark:text-white/30 mb-1">{t('ss.properties')}</div>
                <div className="text-gray-600 dark:text-white/50 text-[11px]">{style.keyProperties}</div>
              </div>
            )}
          </div>

          {/* Disk vs Inline enrichment panel */}
          <div className="rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-3">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive size={11} className="text-gray-500 dark:text-white/40" />
              <span className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-wider">
                {isAf ? 'Skyf vs Inlyn Vergelyking' : 'Disk vs Inline Comparison'}
              </span>
              {diskLoading && <span className="text-[9px] text-gray-400 dark:text-white/20 animate-pulse">Loading...</span>}
              {hasDrift && (
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400 inline-flex items-center gap-1">
                  <AlertTriangle size={9} />{isAf ? 'Verskil' : 'Drift'}
                </span>
              )}
              {diskJson && !hasDrift && (
                <span className="px-1.5 py-0.5 rounded text-[9px] bg-green-500/10 text-green-400 inline-flex items-center gap-1">
                  <CheckCircle size={9} />{isAf ? 'Gesink' : 'Synced'}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Database size={10} className="text-blue-400 shrink-0" />
                <span className="text-gray-500 dark:text-white/40">{isAf ? 'Inlyn blokke' : 'Inline blocks'}:</span>
                <span className="font-mono text-gray-700 dark:text-white/70">{inlineBlocks}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HardDrive size={10} className="text-cyan-400 shrink-0" />
                <span className="text-gray-500 dark:text-white/40">{isAf ? 'Skyf blokke' : 'Disk blocks'}:</span>
                <span className={`font-mono ${hasDrift && diskBlocks !== null && diskBlocks > inlineBlocks ? 'text-amber-400' : 'text-gray-700 dark:text-white/70'}`}>
                  {diskBlocks !== null ? diskBlocks : '...'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database size={10} className="text-blue-400 shrink-0" />
                <span className="text-gray-500 dark:text-white/40">{isAf ? 'Inlyn elemente' : 'Inline elements'}:</span>
                <span className="font-mono text-gray-700 dark:text-white/70">{inlineElements}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HardDrive size={10} className="text-cyan-400 shrink-0" />
                <span className="text-gray-500 dark:text-white/40">{isAf ? 'Skyf elemente' : 'Disk elements'}:</span>
                <span className={`font-mono ${hasDrift && diskElements !== null && diskElements > inlineElements ? 'text-amber-400' : 'text-gray-700 dark:text-white/70'}`}>
                  {diskElements !== null ? diskElements : '...'}
                </span>
              </div>
            </div>
            {hasDrift && diskBlocks !== null && (
              <div className="mt-2 text-[10px] text-amber-500/80 dark:text-amber-400/60 flex items-start gap-1.5">
                <AlertTriangle size={10} className="shrink-0 mt-0.5" />
                <span>
                  {isAf
                    ? `Die skyf-JSON het ${diskBlocks - inlineBlocks} meer blok-oorskrywings as die inlyn data. Klik "JSON" om die volle skyf-weergawe te sien.`
                    : `Disk JSON has ${diskBlocks - inlineBlocks} more block overrides than inline data. Click "JSON" to see full disk version.`}
                </span>
              </div>
            )}
          </div>

          {/* Templates used in */}
          <div>
            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <LayoutDashboard size={9} /> {t('ss.usedInTemplates')}
            </div>
            <div className="flex flex-wrap gap-1">
              {style.templates.length > 0 ? style.templates.map(tmpl => (
                <Link key={tmpl} to="/ontwikkelaar/sjablone" className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono hover:bg-blue-200 dark:hover:bg-blue-500/20 transition-colors inline-flex items-center gap-1">
                  <LayoutDashboard size={8} />{tmpl}
                </Link>
              )) : <span className="text-[10px] text-gray-400 dark:text-white/20 italic">{isAf ? 'Geen direkte gebruik' : 'No direct usage'}</span>}
            </div>
          </div>

          {/* Template Parts used in */}
          <div>
            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Component size={9} /> {t('ss.usedInParts')}
            </div>
            <div className="flex flex-wrap gap-1">
              {style.parts.length > 0 ? style.parts.map(pt => (
                <Link key={pt} to="/ontwikkelaar/sjabloon-onderdele" className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono hover:bg-emerald-200 dark:hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1">
                  <Component size={8} />{pt}
                </Link>
              )) : <span className="text-[10px] text-gray-400 dark:text-white/20 italic">{isAf ? 'Geen direkte gebruik' : 'No direct usage'}</span>}
            </div>
          </div>

          {/* Patterns used in */}
          <div>
            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <LayoutTemplate size={9} /> {t('ss.usedInPatterns')}
            </div>
            <div className="flex flex-wrap gap-1">
              {style.patterns.length > 0 ? style.patterns.map(pattern => (
                <Link key={pattern} to="/ontwikkelaar/patrone" className="px-2 py-0.5 rounded bg-fuchsia-100 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 text-[10px] font-mono hover:bg-fuchsia-200 dark:hover:bg-fuchsia-500/20 transition-colors inline-flex items-center gap-1">
                  <LayoutTemplate size={8} />{pattern}
                </Link>
              )) : <span className="text-[10px] text-gray-400 dark:text-white/20 italic">{isAf ? 'Geen direkte gebruik' : 'No direct usage'}</span>}
            </div>
          </div>

          {/* React usage */}
          <div>
            <div className="text-[10px] text-gray-400 dark:text-white/30 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <Layers size={9} /> {t('ss.reactComponents')}
            </div>
            <div className="flex flex-wrap gap-1">
              {style.usedInReact.map(comp => (
                <Link key={comp} to="/ontwikkelaar/komponente" className="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/50 text-[10px] font-mono hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                  {comp}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};