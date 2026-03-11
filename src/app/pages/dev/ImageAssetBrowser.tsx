import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router';
import {
  Search, X, Download, Copy, Check, Image as ImageIcon,
  Eye, FileImage, Tag, FolderOpen, Filter, Link2, BarChart3,
  Layers, Globe, CheckSquare, Square
} from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import {
  ALL_IMAGE_ASSETS,
  IMAGE_ASSET_CATEGORIES,
  IMAGE_ROLE_FILTERS,
  getWpMediaSummary,
  type ImageAsset,
  type ImageAssetCategory,
  type ImageRole,
} from '../../data/imageAssets';

const ROLE_COLORS: Record<ImageRole, string> = {
  'hero': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'article-featured': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'team-photo': 'bg-green-500/20 text-green-300 border-green-500/30',
  'newsletter': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'ad': 'bg-red-500/20 text-red-300 border-red-500/30',
  'page-element': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
};

/** Map file names to their site routes for click-through links */
const FILE_ROUTE_MAP: Record<string, string> = {
  'About.tsx': '/oor-ons',
  'Contact.tsx': '/kontak',
  'Team.tsx': '/oor-ons/redaksie',
  'Advertise.tsx': '/adverteer',
  'EEditions.tsx': '/e-uitgawes',
  'Policies.tsx': '/beleid',
  'PrivacyPolicy.tsx': '/beleid/privaatheidsbeleid',
  'TermsAndConditions.tsx': '/beleid/terme-en-voorwaardes',
  'CookiePolicy.tsx': '/beleid/koekiebeleid',
  'NewsletterSubscribe.tsx': '/nuusbrief-inteken',
  'SubscribeEEdition.tsx': '/inteken/e-uitgawe',
};

export const ImageAssetBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ImageAssetCategory | 'all'>('all');
  const [activeRole, setActiveRole] = useState<ImageRole | 'all'>('all');
  const [selectedAsset, setSelectedAsset] = useState<ImageAsset | null>(ALL_IMAGE_ASSETS[0] ?? null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showSummary, setShowSummary] = useState(false);
  const [selectedForBulk, setSelectedForBulk] = useState<Set<string>>(new Set());

  const filteredAssets = useMemo(() => {
    let assets = ALL_IMAGE_ASSETS;
    if (activeCategory !== 'all') assets = assets.filter(a => a.category === activeCategory);
    if (activeRole !== 'all') assets = assets.filter(a => a.role === activeRole);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      assets = assets.filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.nameAf.toLowerCase().includes(q) ||
        a.alt.toLowerCase().includes(q) ||
        a.filename.toLowerCase().includes(q) ||
        a.wpFilename.toLowerCase().includes(q) ||
        a.src.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.usedBy.some(u => u.toLowerCase().includes(q)) ||
        a.dataFile.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q)
      );
    }
    return assets;
  }, [activeCategory, activeRole, searchQuery]);

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  }, []);

  const handleDownload = useCallback((asset: ImageAsset) => {
    const link = document.createElement('a');
    link.href = asset.src;
    link.download = asset.wpFilename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const catColor = (cat: ImageAssetCategory) => {
    const colors: Record<ImageAssetCategory, string> = {
      hero: 'bg-purple-500/20 text-purple-300',
      team: 'bg-green-500/20 text-green-300',
      unsplash: 'bg-blue-500/20 text-blue-300',
      figma: 'bg-amber-500/20 text-amber-300',
    };
    return colors[cat] || 'bg-gray-500/20 text-gray-300';
  };

  const toggleBulk = (id: string) => {
    setSelectedForBulk(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const bulkCopy = () => {
    const items = ALL_IMAGE_ASSETS.filter(a => selectedForBulk.has(a.id));
    const lines = items.map(a =>
      a.sourceType === 'figma-asset'
        ? `import img from "figma:asset/${a.filename}";`
        : a.src
    ).join('\n');
    copyToClipboard(lines, 'bulk');
    setSelectedForBulk(new Set());
  };

  const wpSummary = useMemo(() => getWpMediaSummary(), []);

  const heroMeta = HERO_META.imageAssetBrowser;

  return (
    <div className="space-y-0">
      <DevToolHero
        icon={heroMeta.icon}
        iconColor={heroMeta.iconColor}
        title={resolveHeroMeta(heroMeta, locale).title}
        description={resolveHeroMeta(heroMeta, locale).description}
        stats={[
          { label: t('ia.images'), value: ALL_IMAGE_ASSETS.length },
          { label: t('stats.categories'), value: IMAGE_ASSET_CATEGORIES.length },
          { label: t('ia.wpMedia'), value: wpSummary.totalAssets },
          { label: t('stats.results'), value: filteredAssets.length },
        ]}
        badge={`${ALL_IMAGE_ASSETS.length} ${t('ia.imagesLower')}`}
      />

      {/* ─── Toolbar ─── */}
      <div className="space-y-3 mb-5">
        {/* Search */}
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={t('ia.searchPlaceholder')}
            className="w-full pl-9 pr-9 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-white/30 hover:text-gray-600 dark:hover:text-white">
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-1.5">
          {IMAGE_ASSET_CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                activeCategory === cat.key
                  ? 'bg-brand-red text-white'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {isAf ? cat.labelAf : cat.labelEn} ({cat.count})
            </button>
          ))}
        </div>

        {/* Role sub-filter tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <Filter size={12} className="text-gray-400 dark:text-white/30 mr-1" />
          {IMAGE_ROLE_FILTERS.map(r => (
            <button
              key={r.key}
              onClick={() => setActiveRole(r.key)}
              className={`px-2.5 py-1 rounded text-[11px] border transition-all ${
                activeRole === r.key
                  ? 'border-blue-500/50 bg-blue-500/20 text-blue-300'
                  : 'border-transparent bg-gray-100 dark:bg-white/[0.03] text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {isAf ? r.labelAf : r.labelEn} ({r.count})
            </button>
          ))}
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-white/40">{filteredAssets.length} {t('ia.imagesLower')}</span>
            {selectedForBulk.size > 0 && (
              <button onClick={bulkCopy} className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-xs hover:bg-blue-500/30">
                <Copy size={11} /> {isAf ? `Kopieer ${selectedForBulk.size} gekose` : `Copy ${selectedForBulk.size} selected`}
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowSummary(!showSummary)} className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] transition-all ${showSummary ? 'bg-amber-500/20 text-amber-300' : 'bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40'}`}>
              <BarChart3 size={11} /> WP {t('ia.summary')}
            </button>
            <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')} className="px-2.5 py-1 rounded text-[11px] bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/40 hover:bg-gray-200 dark:hover:bg-white/10">
              {viewMode === 'grid' ? t('ia.list') : t('ia.grid')}
            </button>
          </div>
        </div>
      </div>

      {/* ─── WP Media Summary Panel ─── */}
      {showSummary && (
        <div className="mb-5 p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-sm text-amber-300 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>WordPress Media Library {t('ia.summary')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-2xl text-white">{wpSummary.total}</div>
              <div className="text-[10px] text-white/40 uppercase">{t('ia.total')}</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-2xl text-purple-300">{wpSummary.byRole.hero.length}</div>
              <div className="text-[10px] text-white/40 uppercase">Hero</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-2xl text-blue-300">{wpSummary.byRole['article-featured'].length}</div>
              <div className="text-[10px] text-white/40 uppercase">{t('ia.articles')}</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/5">
              <div className="text-2xl text-green-300">{wpSummary.byRole['team-photo'].length}</div>
              <div className="text-[10px] text-white/40 uppercase">{t('ia.team')}</div>
            </div>
          </div>
          <div className="flex gap-4 mt-3 text-[11px] text-white/50">
            <span><Globe size={10} className="inline mr-1" />Unsplash: {wpSummary.bySource.unsplash}</span>
            <span><Layers size={10} className="inline mr-1" />Figma: {wpSummary.bySource.figma}</span>
            <span><Tag size={10} className="inline mr-1" />{t('ia.newsletter')}: {wpSummary.byRole.newsletter.length}</span>
          </div>
        </div>
      )}

      {/* ─── Content ─── */}
      <div className="flex gap-5">
        {/* Left: Grid/List */}
        <div className="flex-1 min-w-0">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2">
              {filteredAssets.map(asset => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`group relative rounded-lg overflow-hidden border transition-all text-left cursor-pointer ${
                    selectedAsset?.id === asset.id
                      ? 'border-blue-500/50 ring-2 ring-blue-500/20'
                      : 'border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="aspect-[4/3] bg-gray-100 dark:bg-black/30 relative">
                    <img src={asset.src} alt={asset.alt} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-1 left-1 flex gap-1">
                      <span className={`px-1.5 py-0.5 rounded text-[8px] border ${ROLE_COLORS[asset.role]}`}>{asset.role}</span>
                    </div>
                    {/* Bulk select checkbox */}
                    <button
                      onClick={e => { e.stopPropagation(); toggleBulk(asset.id); }}
                      className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {selectedForBulk.has(asset.id) ? <CheckSquare size={14} className="text-blue-400" /> : <Square size={14} className="text-white/50" />}
                    </button>
                  </div>
                  <div className="p-2">
                    <p className="text-[11px] text-gray-700 dark:text-white/70 truncate">{isAf ? asset.nameAf : asset.name}</p>
                    <p className="text-[9px] text-gray-400 dark:text-white/30 truncate">{asset.wpFilename}</p>
                  </div>
                  {/* Quick download */}
                  <button onClick={e => { e.stopPropagation(); handleDownload(asset); }}
                    className="absolute bottom-10 right-1.5 p-1.5 rounded-lg text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 shrink-0">
                    <Download size={14} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-1">
              {filteredAssets.map(asset => (
                <div
                  key={asset.id}
                  onClick={() => setSelectedAsset(asset)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg border transition-all text-left cursor-pointer ${
                    selectedAsset?.id === asset.id
                      ? 'border-blue-500/50 bg-blue-500/5'
                      : 'border-transparent hover:bg-gray-50 dark:hover:bg-white/[0.03]'
                  }`}
                >
                  <button onClick={e => { e.stopPropagation(); toggleBulk(asset.id); }} className="shrink-0">
                    {selectedForBulk.has(asset.id) ? <CheckSquare size={14} className="text-blue-400" /> : <Square size={14} className="text-gray-300 dark:text-white/20" />}
                  </button>
                  <div className="w-12 h-9 rounded overflow-hidden bg-gray-100 dark:bg-black/30 shrink-0">
                    <img src={asset.src} alt={asset.alt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-700 dark:text-white/70 truncate">{isAf ? asset.nameAf : asset.name}</p>
                    <p className="text-[10px] text-gray-400 dark:text-white/30 truncate font-mono">{asset.wpFilename}</p>
                  </div>
                  <span className={`px-1.5 py-0.5 rounded text-[8px] border shrink-0 ${ROLE_COLORS[asset.role]}`}>{asset.role}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] shrink-0 ${catColor(asset.category)}`}>{asset.category}</span>
                </div>
              ))}
            </div>
          )}

          {filteredAssets.length === 0 && (
            <div className="text-center py-16">
              <Search size={32} className="mx-auto text-gray-300 dark:text-white/10 mb-3" />
              <p className="text-gray-500 dark:text-white/40 text-sm">{t('ia.noResults')}</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); setActiveRole('all'); }}
                className="mt-2 text-xs text-blue-500 hover:text-blue-400">
                {t('ia.clearFilters')}
              </button>
            </div>
          )}
        </div>

        {/* Right: Detail Panel */}
        {selectedAsset && (
          <div className="w-[380px] shrink-0 hidden lg:block">
            <div className="sticky top-4 space-y-4">
              <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03]">
                <div className="aspect-video bg-gray-100 dark:bg-black/30 relative">
                  <img src={selectedAsset.src} alt={selectedAsset.alt} className="w-full h-full object-contain" />
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <h2 className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {isAf ? selectedAsset.nameAf : selectedAsset.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider ${catColor(selectedAsset.category)}`}>{selectedAsset.category}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] border ${ROLE_COLORS[selectedAsset.role]}`}>{selectedAsset.role}</span>
                      <span className="text-[10px] text-gray-400 dark:text-white/40">{selectedAsset.sourceType === 'unsplash' ? 'Unsplash' : 'Figma Asset'}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => handleDownload(selectedAsset)} className="flex-1 flex items-center justify-center gap-2 bg-brand-red hover:opacity-90 text-white text-xs px-4 py-2.5 rounded-lg transition-opacity" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Download size={14} /> {t('ia.download')}
                    </button>
                    <button onClick={() => window.open(selectedAsset.src, '_blank')} className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 text-gray-700 dark:text-white text-xs px-4 py-2.5 rounded-lg transition-colors">
                      <Eye size={14} /> {t('ia.full')}
                    </button>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-gray-200 dark:border-white/10">
                    <MRow icon={<Tag size={12} />} label={t('ia.wpFilename')} value={selectedAsset.wpFilename} onCopy={() => copyToClipboard(selectedAsset.wpFilename, 'wpFilename')} copied={copiedField === 'wpFilename'} />
                    <MRow icon={<ImageIcon size={12} />} label="Alt" value={selectedAsset.alt} onCopy={() => copyToClipboard(selectedAsset.alt, 'alt')} copied={copiedField === 'alt'} />
                    {selectedAsset.wpDimensions && <MRow icon={<ImageIcon size={12} />} label={t('ia.dimensions')} value={selectedAsset.wpDimensions} />}
                    <MRow icon={<FolderOpen size={12} />} label={t('ia.dataFile')} value={selectedAsset.dataFile} onCopy={() => copyToClipboard(selectedAsset.dataFile, 'dataFile')} copied={copiedField === 'dataFile'} />
                    <MRow icon={<FileImage size={12} />} label={t('ia.sourceFile')} value={selectedAsset.filename} onCopy={() => copyToClipboard(selectedAsset.filename, 'filename')} copied={copiedField === 'filename'} />
                  </div>

                  {/* Used By — with click-through links */}
                  <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                    <p className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-wider mb-2">{t('ia.usedBy')}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAsset.usedBy.map(page => {
                        const cleanName = page.replace(/\s*\(.*?\)/, '');
                        const route = FILE_ROUTE_MAP[cleanName];
                        return route ? (
                          <Link key={page} to={route} className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-400 px-2 py-1 rounded text-[11px] font-mono hover:bg-blue-500/20 transition-colors">
                            <Link2 size={9} />{page}
                          </Link>
                        ) : (
                          <span key={page} className="bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white/70 px-2 py-1 rounded text-[11px] font-mono">{page}</span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                    <p className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-wider mb-1.5">{t('ia.description')}</p>
                    <p className="text-xs text-gray-600 dark:text-white/60 leading-relaxed">{selectedAsset.description}</p>
                  </div>

                  {/* Copy URL / Import */}
                  {selectedAsset.sourceType === 'unsplash' && (
                    <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                      <button onClick={() => copyToClipboard(selectedAsset.src, 'url')}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/70 text-xs px-3 py-2 rounded-lg transition-colors">
                        {copiedField === 'url' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                        {copiedField === 'url' ? t('ia.urlCopied') : t('ia.copyUrl')}
                      </button>
                    </div>
                  )}
                  {selectedAsset.sourceType === 'figma-asset' && (
                    <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                      <button onClick={() => copyToClipboard(`import img from "figma:asset/${selectedAsset.filename}";`, 'import')}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/70 text-xs px-3 py-2 rounded-lg transition-colors font-mono">
                        {copiedField === 'import' ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                        {copiedField === 'import' ? t('ia.importCopied') : t('ia.copyImport')}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <DevRelatedTools tools={RELATED_TOOLS_MAP.imageAssetBrowser} />
    </div>
  );
};

function MRow({ icon, label, value, onCopy, copied }: { icon: React.ReactNode; label: string; value: string; onCopy?: () => void; copied?: boolean }) {
  return (
    <div className="flex items-start gap-2 group">
      <span className="text-gray-400 dark:text-white/30 mt-0.5 shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-gray-400 dark:text-white/40 uppercase tracking-wider">{label}</p>
        <p className="text-xs text-gray-700 dark:text-white/80 break-all leading-relaxed">{value}</p>
      </div>
      {onCopy && (
        <button onClick={onCopy} className="shrink-0 opacity-0 group-hover:opacity-100 text-gray-400 dark:text-white/30 hover:text-gray-700 dark:hover:text-white transition-all mt-3" title={copied ? 'Copied!' : 'Copy'}>
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
        </button>
      )}
    </div>
  );
}