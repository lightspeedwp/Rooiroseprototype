import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router';
import { Search, Copy, Download, Palette, Type, Maximize2, LayoutDashboard, Layers, CheckCircle2, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';

import { copyToClipboard } from '../../utils/clipboard';
import {
  COLOR_TOKENS,
  TYPOGRAPHY_TOKENS,
  SPACING_TOKENS,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
  LAYOUT_TOKENS,
  extractDesignTokensJSON,
} from '../../data/designTokens';

const TABS = [
  { id: 'colors', key: 'dse.tab.colors', icon: Palette },
  { id: 'typography', key: 'dse.tab.typography', icon: Type },
  { id: 'spacing', key: 'dse.tab.spacing', icon: Maximize2 },
  { id: 'borderRadius', key: 'dse.tab.borderRadius', icon: Layers },
  { id: 'shadows', key: 'dse.tab.shadows', icon: Layers },
  { id: 'layout', key: 'dse.tab.layout', icon: LayoutDashboard },
];

export const DesignSystemExtractor = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const [activeTab, setActiveTab] = useState('colors');
  const [search, setSearch] = useState('');
  const [liveValues, setLiveValues] = useState<Record<string, string>>({});

  // Extract live computed CSS values
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

  const handleCopy = (value: string, label: string) => {
    copyToClipboard(value);
    toast.success(`${t('common.copiedPrefix')} ${label}`);
  };

  const handleExportCSS = () => {
    const lines = [':root {'];
    COLOR_TOKENS.forEach((token) => lines.push(`  --${token.cssVar}: ${token.light};`));
    SPACING_TOKENS.forEach((token) => lines.push(`  --${token.cssVar}: ${token.value};`));
    lines.push('}');
    lines.push('');
    lines.push('.dark {');
    COLOR_TOKENS.forEach((token) => lines.push(`  --${token.cssVar}: ${token.dark};`));
    lines.push('}');
    copyToClipboard(lines.join('\n'));
    toast.success(t('dse.copiedCss'));
  };

  const handleExportJSON = () => {
    extractDesignTokensJSON();
  };

  const colorsByCategory = useMemo(() => {
    const cats: Record<string, typeof COLOR_TOKENS> = {};
    COLOR_TOKENS.forEach((token) => {
      const cat = token.category;
      if (!cats[cat]) cats[cat] = [];
      if (!search || token.label.toLowerCase().includes(search.toLowerCase()) || token.cssVar.toLowerCase().includes(search.toLowerCase())) {
        cats[cat].push(token);
      }
    });
    return cats;
  }, [search]);

  const categoryLabels: Record<string, string> = {
    brand: t('dse.colors.brand'),
    neutral: t('dse.colors.system'),
    system: t('dse.colors.system'),
    chart: t('dse.colors.charts'),
    sidebar: t('dse.colors.sidebar'),
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Subtitle + Export Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1
              className="text-3xl font-normal font-heading mb-2"
              style={{ fontVariationSettings: 'var(--fvs-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >
              {t('dse.title')}
            </h1>
            <p className="text-white/50 text-sm">{t('dse.subtitle')}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={handleExportCSS} className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/60 hover:text-white transition-colors">
              {t('dse.exportCss')}
            </button>
            <button onClick={handleExportJSON} className="text-xs px-3 py-1.5 bg-brand-red hover:bg-brand-red/80 rounded-lg text-white transition-colors flex items-center gap-1">
              <Download size={12} />
              {t('dse.export')} JSON
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-0 overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-xs font-bold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === tab.id ? 'border-brand-red text-white' : 'border-transparent text-white/40 hover:text-white/70'
                }`}
              >
                <Icon size={14} />
                {t(tab.key)}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder={t('dse.search')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30"
          />
        </div>

        {/* Colors Tab */}
        {activeTab === 'colors' && (
          <div className="space-y-8">
            {Object.entries(colorsByCategory).map(([cat, tokens]) => (
              tokens.length > 0 && (
                <div key={cat}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">
                    {categoryLabels[cat] || cat}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tokens.map((token) => (
                      <button
                        key={token.cssVar}
                        onClick={() => handleCopy(`var(--${token.cssVar})`, token.cssVar)}
                        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex gap-1">
                            <div className="w-8 h-8 rounded-l" style={{ backgroundColor: token.light }} title="Light" />
                            <div className="w-8 h-8 rounded-r" style={{ backgroundColor: token.dark }} title="Dark" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white">{token.label}</p>
                            <p className="text-[10px] font-mono text-white/30">{token.cssVar}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <span>L: {token.light}</span>
                          <span>D: {token.dark}</span>
                        </div>
                        {liveValues[token.cssVar] && (
                          <div className="mt-2 flex items-center gap-1 text-[10px] text-white/20">
                            <span>{t('dse.liveValues')}: {liveValues[token.cssVar]}</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        )}

        {/* Typography Tab */}
        {activeTab === 'typography' && (
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-xs text-white/30 uppercase tracking-widest">
                  <th className="px-4 py-3">{t('dse.typography.preview')}</th>
                  <th className="px-4 py-3">Token</th>
                  <th className="px-4 py-3">{t('dse.typography.family')}</th>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">{t('dse.cssVar')}</th>
                </tr>
              </thead>
              <tbody>
                {TYPOGRAPHY_TOKENS.map((token) => (
                  <tr key={token.name} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3">
                      <span
                        style={{
                          fontFamily: (token as any).family?.includes('Roboto') || (token as any).font?.includes('Roboto') ? 'var(--font-display)' : 'var(--font-body)',
                          fontSize: token.cssVars?.fontSize ? `var(${token.cssVars.fontSize})` : token.size,
                          fontWeight: parseInt(token.weight) || 400,
                          fontVariationSettings: token.fontVariationSettings || undefined,
                          textTransform: token.textTransform as any || undefined,
                        }}
                        className="text-white"
                      >
                        Aa
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-white">{token.name}</td>
                    <td className="px-4 py-3 text-xs text-white/40">{(token as any).family || (token as any).font}</td>
                    <td className="px-4 py-3 font-mono text-xs text-white/60">{token.size}</td>
                    <td className="px-4 py-3">
                      {token.cssVars?.fontSize && (
                        <button
                          onClick={() => handleCopy(`var(${token.cssVars!.fontSize})`, token.name)}
                          className="font-mono text-xs text-brand-red hover:text-white transition-colors flex items-center gap-1"
                        >
                          <Copy size={10} />
                          {token.cssVars.fontSize}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Spacing Tab */}
        {activeTab === 'spacing' && (
          <div className="space-y-3">
            {SPACING_TOKENS.map((token) => (
              <button
                key={token.name}
                onClick={() => handleCopy(`var(--${token.cssVar})`, token.name)}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors text-left flex items-center gap-4"
              >
                <div className="w-20 text-sm font-bold text-white">{token.name}</div>
                <div className="flex-1">
                  <div
                    className="h-4 bg-brand-red/50 rounded"
                    style={{ width: token.value }}
                  />
                </div>
                <div className="font-mono text-xs text-white/40 w-16 text-right">{token.value}</div>
                <div className="font-mono text-xs text-white/20 w-32 text-right">{token.cssVar}</div>
              </button>
            ))}
          </div>
        )}

        {/* Border Radius Tab */}
        {activeTab === 'borderRadius' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RADIUS_TOKENS.map((token) => (
              <button
                key={token.name}
                onClick={() => handleCopy(token.value, token.name)}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors text-center"
              >
                <div
                  className="w-20 h-20 mx-auto mb-4 border-2 border-brand-red"
                  style={{ borderRadius: token.value }}
                />
                <p className="font-bold text-white text-sm">{token.name}</p>
                <p className="font-mono text-xs text-white/40 mt-1">{token.value}</p>
                <p className="font-mono text-[10px] text-white/20 mt-1">{token.tailwind}</p>
              </button>
            ))}
          </div>
        )}

        {/* Shadows Tab */}
        {activeTab === 'shadows' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SHADOW_TOKENS.map((token) => (
              <button
                key={token.name}
                onClick={() => handleCopy(token.lightValue, token.name)}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors text-left"
              >
                <div
                  className="w-full h-16 rounded-lg bg-white/10 mb-4"
                  style={{ boxShadow: token.lightValue }}
                />
                <p className="font-bold text-white text-sm">{token.name}</p>
                <p className="font-mono text-[10px] text-white/30 mt-1 break-all">{token.lightValue}</p>
              </button>
            ))}
          </div>
        )}

        {/* Layout Tab */}
        {activeTab === 'layout' && (
          <div className="space-y-3">
            {LAYOUT_TOKENS.map((token) => (
              <div key={token.name} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-sm">{token.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{token.usage}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-brand-red">{token.value}</span>
                  <button
                    onClick={() => handleCopy(token.value, token.name)}
                    className="text-white/20 hover:text-white transition-colors"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WP Token Mapper link */}
        <div className="mt-8 text-center">
          <Link
            to="/ontwikkelaar/token-kartering"
            className="text-sm text-indigo-400 hover:text-white transition-colors"
          >
            {t('dse.tokenMapperLink')}
          </Link>
        </div>
      </div>
    </div>
  );
};