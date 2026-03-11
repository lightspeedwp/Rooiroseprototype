import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { PackageOpen, BookOpen, Download } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import {
  ALL_ICONS,
  ICON_TYPE_FILTERS,
  type IconEntry,
  type IconType,
} from '../../data/iconBrowserData';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { WpMarkdownViewer } from '../../components/dev/WpMarkdownViewer';
import { wpAllGuidelines } from '../../data/wpFileLoader';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { DevStatsBar } from '../../components/dev/DevStatsBar';
import { IconGrid } from './icon-browser/IconGrid';
import { IconDetailPanel } from './icon-browser/IconDetailPanel';

export const IconBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const { type: urlType } = useParams<{ type?: string }>();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<IconType | 'all'>('all');
  const [selectedIcon, setSelectedIcon] = useState<IconEntry | null>(null);
  const [previewSize, setPreviewSize] = useState(24);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  // Sync URL → state on mount/URL change
  React.useEffect(() => {
    if (urlType && urlType !== 'all') {
      // Validate type is valid
      const isValidType = ICON_TYPE_FILTERS.some(f => f.key === urlType);
      if (isValidType) {
        setActiveType(urlType as IconType);
      }
    } else {
      setActiveType('all');
    }
  }, [urlType]);

  // Update type with URL sync
  const handleTypeChange = (type: IconType | 'all') => {
    setActiveType(type);
    // Update URL
    if (type === 'all') {
      navigate('/ontwikkelaar/ikone', { replace: true });
    } else {
      navigate(`/ontwikkelaar/ikone/${type}`, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    let icons = ALL_ICONS;
    if (activeType !== 'all') icons = icons.filter(i => i.type === activeType);
    if (search.trim()) {
      const q = search.toLowerCase();
      icons = icons.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.label.toLowerCase().includes(q) ||
        i.tags.some(t => t.toLowerCase().includes(q)) ||
        i.usages.some(u => u.file.toLowerCase().includes(q) || u.context.toLowerCase().includes(q))
      );
    }
    return icons;
  }, [activeType, search]);

  const copyToClipboard = useCallback((text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  }, []);

  const downloadSvg = useCallback((icon: IconEntry) => {
    const blob = new Blob([icon.wpExport], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${icon.id}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const downloadAllIcons = useCallback(() => {
    const iconsToDownload = filtered.length > 0 ? filtered : ALL_ICONS;
    
    // Create a JSON manifest file
    const manifest = {
      exportDate: new Date().toISOString(),
      totalIcons: iconsToDownload.length,
      icons: iconsToDownload.map(icon => ({
        id: icon.id,
        name: icon.name,
        label: icon.label,
        type: icon.type,
        source: icon.source,
        sizes: icon.sizes,
        wpDashicon: icon.wpDashicon,
        importStatement: icon.importStatement,
        jsxExample: icon.jsxExample,
        wpExport: icon.wpExport,
        tags: icon.tags,
      })),
    };

    // Create and download JSON manifest
    const jsonBlob = new Blob([JSON.stringify(manifest, null, 2)], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    const jsonLink = document.createElement('a');
    jsonLink.href = jsonUrl;
    jsonLink.download = `die-papier-icons-manifest-${new Date().toISOString().split('T')[0]}.json`;
    jsonLink.click();
    URL.revokeObjectURL(jsonUrl);
  }, [filtered]);

  const heroMeta = HERO_META.iconBrowser;

  return (
    <div className="space-y-0">
      {/* Hero */}
      <DevToolHero
        icon={resolveHeroMeta(heroMeta, locale).icon}
        iconColor={heroMeta.iconColor}
        title={resolveHeroMeta(heroMeta, locale).title}
        description={resolveHeroMeta(heroMeta, locale).description}
        stats={ICON_TYPE_FILTERS.filter(f => f.key !== 'all').map(filter => ({
          label: isAf ? filter.labelAf : filter.labelEn,
          value: filter.count,
        }))}
        action={{
          label: isAf ? 'Laai alle ikone af (JSON)' : 'Download all icons (JSON)',
          icon: Download,
          onClick: downloadAllIcons,
        }}
      />

      {/* Stats + Search */}
      <div className="space-y-3 mb-5">
        <DevStatsBar
          stats={ICON_TYPE_FILTERS.map(filter => ({
            key: filter.key,
            label: isAf ? filter.labelAf : filter.labelEn,
            count: filter.count,
            color: filter.color,
          }))}
          active={activeType}
          onSelect={(key) => handleTypeChange(key as IconType | 'all')}
        />
        <DevSearchBar
          value={search}
          onChange={setSearch}
          placeholder={isAf ? 'Soek ikone op naam, etiket, of gebruik...' : 'Search icons by name, tag, or usage...'}
        />
      </div>

      <div className="flex gap-5">
        {/* Icon Grid */}
        <IconGrid
          icons={filtered}
          selectedIcon={selectedIcon}
          onSelectIcon={setSelectedIcon}
          onClearFilters={() => { setSearch(''); setActiveType('all'); }}
          isAf={isAf}
        />

        {/* Detail Panel */}
        {selectedIcon && (
          <IconDetailPanel
            icon={selectedIcon}
            previewSize={previewSize}
            copiedField={copiedField}
            svgRef={svgRef}
            onPreviewSizeChange={setPreviewSize}
            onCopy={copyToClipboard}
            onDownloadSvg={downloadSvg}
            onTagClick={setSearch}
            isAf={isAf}
          />
        )}
      </div>

      {/* Related Tools */}
      <DevRelatedTools tools={RELATED_TOOLS_MAP.iconBrowser} />

      {/* Guideline panels — GC-042: link to both iconography.md and icon-block.md */}
      <div className="mt-8 space-y-2">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={14} className="text-amber-500" />
          <span className="text-sm text-gray-600 dark:text-white/50">
            {isAf ? 'Riglyndokumentasie' : 'Guideline Documentation'}
          </span>
        </div>

        <details className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-xl overflow-hidden">
          <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm text-gray-700 dark:text-white/60 select-none">
            <span className="text-base">🎨</span>
            <span>{isAf ? 'Ikonografie — Ontwerp-token verwysing' : 'Iconography — Design token reference'}</span>
            <span className="text-[10px] text-gray-400 dark:text-white/25 font-mono ml-auto">iconography.md</span>
          </summary>
          <div className="border-t border-gray-200 dark:border-white/[0.06]">
            <WpMarkdownViewer
              glob={wpAllGuidelines}
              filename="iconography.md"
              label="iconography.md"
              maxHeight={500}
              locale={locale}
            />
          </div>
        </details>

        <details className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-xl overflow-hidden">
          <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-sm text-gray-700 dark:text-white/60 select-none">
            <span className="text-base">🔌</span>
            <span>{isAf ? 'Ikoon Blok — WordPress integrasiegids' : 'Icon Block — WordPress integration guide'}</span>
            <span className="text-[10px] text-gray-400 dark:text-white/25 font-mono ml-auto">icon-block.md</span>
          </summary>
          <div className="border-t border-gray-200 dark:border-white/[0.06]">
            <WpMarkdownViewer
              glob={wpAllGuidelines}
              filename="icon-block.md"
              label="icon-block.md"
              maxHeight={500}
              locale={locale}
            />
          </div>
        </details>
      </div>
    </div>
  );
};
