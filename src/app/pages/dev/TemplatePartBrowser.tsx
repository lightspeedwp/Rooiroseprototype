import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Puzzle } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { TEMPLATE_PARTS, PART_AREAS, type TemplatePartEntry } from '../../data/templatePartBrowserData';
import { DevToolHero } from '../../components/dev/DevToolHero';
import { DevRelatedTools } from '../../components/dev/DevRelatedTools';
import { DevSearchBar } from '../../components/dev/DevSearchBar';
import { DevFilterBar } from '../../components/dev/DevFilterBar';
import { wpParts, wpAllGuidelines } from '../../data/wpFileLoader';
import { HERO_META, RELATED_TOOLS_MAP, resolveHeroMeta } from '../../data/devToolHeroData';
import { useDiskFileStats } from '../../hooks/useDiskFileStats';
import { PartCard } from './template-part-browser/PartCard';

export const TemplatePartBrowser = () => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);
  const { area: urlArea } = useParams<{ area?: string }>();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [activeArea, setActiveArea] = useState<TemplatePartEntry['area'] | 'all'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTabs, setActiveTabs] = useState<Record<string, 'info' | 'code' | 'guideline'>>({});

  const { loadStats, getStats, isLoading } = useDiskFileStats(wpParts);

  // Sync URL → state on mount/URL change
  useEffect(() => {
    if (urlArea && urlArea !== 'all') {
      // Validate area is valid
      const isValidArea = PART_AREAS.some(a => a.key === urlArea);
      if (isValidArea) {
        setActiveArea(urlArea as TemplatePartEntry['area']);
      }
    } else {
      setActiveArea('all');
    }
  }, [urlArea]);

  // Update area with URL sync
  const handleAreaChange = (area: TemplatePartEntry['area'] | 'all') => {
    setActiveArea(area);
    // Update URL
    if (area === 'all') {
      navigate('/ontwikkelaar/sjablone-onderdeel', { replace: true });
    } else {
      navigate(`/ontwikkelaar/sjablone-onderdeel/${area}`, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    let parts = TEMPLATE_PARTS;
    if (activeArea !== 'all') parts = parts.filter(p => p.area === activeArea);
    if (search.trim()) {
      const q = search.toLowerCase();
      parts = parts.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.filename.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.blocks.some(b => b.toLowerCase().includes(q)) ||
        p.patterns.some(pa => pa.toLowerCase().includes(q))
      );
    }
    return parts;
  }, [activeArea, search]);

  const copyToClipboard = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }, []);

  const heroMeta = HERO_META.templatePartBrowser;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DevToolHero
        icon={resolveHeroMeta(heroMeta, locale).icon}
        iconColor={heroMeta.iconColor}
        title={resolveHeroMeta(heroMeta, locale).title}
        description={resolveHeroMeta(heroMeta, locale).description}
        stats={PART_AREAS.filter(a => a.key !== 'all').map(area => ({
          label: isAf ? area.labelAf : area.labelEn,
          value: area.count,
        }))}
      />

      {/* Search + Filters */}
      <div className="space-y-3 mb-5">
        <DevSearchBar
          value={search}
          onChange={setSearch}
          placeholder={isAf ? 'Soek sjablone-onderdele...' : 'Search template parts...'}
        />
        <DevFilterBar
          options={PART_AREAS.filter(a => a.key !== 'all').map(area => ({
            key: area.key,
            label: isAf ? area.labelAf : area.labelEn,
            count: area.count,
          }))}
          active={activeArea}
          onSelect={(key) => handleAreaChange(key as TemplatePartEntry['area'] | 'all')}
          allLabel={isAf ? 'Almal' : 'All'}
          allCount={TEMPLATE_PARTS.length}
        />
      </div>

      {/* Part Cards */}
      <div className="space-y-3">
        {filtered.map(part => {
          const isOpen = expandedId === part.id;
          const activeTab = activeTabs[part.id] || 'info';

          return (
            <PartCard
              key={part.id}
              part={part}
              isOpen={isOpen}
              activeTab={activeTab}
              diskStats={getStats(part.filename)}
              diskLoading={isLoading(part.filename)}
              copiedId={copiedId}
              wpPartsGlob={wpParts}
              wpGuidelinesGlob={wpAllGuidelines}
              onToggle={() => setExpandedId(isOpen ? null : part.id)}
              onTabChange={(tab) => setActiveTabs(prev => ({ ...prev, [part.id]: tab }))}
              onCopy={copyToClipboard}
              onLoadStats={loadStats}
              isAf={isAf}
              locale={locale}
              t={t}
            />
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Puzzle size={40} className="mx-auto text-gray-300 dark:text-white/10 mb-4" />
          <p className="text-gray-500 dark:text-white/40">{isAf ? 'Geen onderdele gevind nie.' : 'No template parts found.'}</p>
        </div>
      )}

      <DevRelatedTools tools={RELATED_TOOLS_MAP.templatePartBrowser} />
    </div>
  );
};
