/**
 * PrototypeLanding — Section landing page for Prototype Development Tools.
 *
 * Route: /ontwikkelaar/prototipe
 * Shows: Design System, Components, Route Map, Data Browser, Icon Browser
 */

import React from 'react';
import { Palette, Layers, Map, Database, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';

interface ToolCard {
  titleAf: string;
  titleEn: string;
  descAf: string;
  descEn: string;
  icon: React.ElementType;
  color: string;
  path: string;
}

const TOOLS: ToolCard[] = [
  {
    titleAf: 'Ontwerpstelsel',
    titleEn: 'Design System',
    descAf: 'Kleure, tipografie, spasiëring, skaduwees, komponente, uitvoer, en WP-tokenkartering — alles in een plek.',
    descEn: 'Colors, typography, spacing, shadows, components, export, and WP token mapping — all in one place.',
    icon: Palette,
    color: 'bg-purple-500',
    path: '/ontwikkelaar/ontwerpstelsel',
  },
  {
    titleAf: 'Komponentblaaier',
    titleEn: 'Component Browser',
    descAf: 'Alle React-komponente — gegroepeer, met invoerpaaie, props, en etikette.',
    descEn: 'All React components — grouped, with import paths, props, and tags.',
    icon: Layers,
    color: 'bg-blue-500',
    path: '/ontwikkelaar/komponente',
  },
  {
    titleAf: 'Roetekaart',
    titleEn: 'Route Map',
    descAf: 'Volledige roete-hiërargie met tipe, komponent, en status.',
    descEn: 'Full route hierarchy with type, component, and status.',
    icon: Map,
    color: 'bg-green-500',
    path: '/ontwikkelaar/roetes',
  },
  {
    titleAf: 'Datablaaier',
    titleEn: 'Data Browser',
    descAf: 'Mock-datastrukture, koppelvlakke, en veldtipes vir elke databron.',
    descEn: 'Mock data structures, interfaces, and field types for each data source.',
    icon: Database,
    color: 'bg-amber-500',
    path: '/ontwikkelaar/data',
  },
  {
    titleAf: 'Ikoonblaaier',
    titleEn: 'Icon Browser',
    descAf: '50+ ikone — Lucide-voorskou, Dashicon-kartering, SVG-uitvoer.',
    descEn: '50+ icons — Lucide preview, Dashicon mapping, SVG export.',
    icon: Sparkles,
    color: 'bg-yellow-500',
    path: '/ontwikkelaar/ikone',
  },
];

export function PrototypeLanding() {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';

  const stats: HeroStat[] = [
    { label: isAf ? 'komponente' : 'components', value: '90+' },
    { label: isAf ? 'roetes' : 'routes', value: '130+' },
    { label: isAf ? 'tokens' : 'tokens', value: '145+' },
    { label: isAf ? 'ikone' : 'icons', value: '50+' },
  ];

  return (
    <div>
      <DevToolHero
        icon={Palette}
        iconColor="bg-purple-500"
        title={isAf ? 'Prototipe Ontwikkelingsgereedskap' : 'Prototype Development Tools'}
        description={isAf
          ? 'Ontwerpstelsel, komponente, roetes, data, en ikone — alles wat die React-prototipe dryf.'
          : 'Design system, components, routes, data, and icons — everything powering the React prototype.'
        }
        stats={stats}
        badge={isAf ? `${TOOLS.length} gereedskap` : `${TOOLS.length} tools`}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map(tool => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.path}
              to={tool.path}
              className="group p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg ${tool.color} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-brand-red transition-colors">
                    {isAf ? tool.titleAf : tool.titleEn}
                  </h3>
                </div>
                <ArrowRight size={14} className="text-gray-300 dark:text-white/15 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </div>
              <p className="text-[12px] text-gray-500 dark:text-white/40 leading-relaxed">
                {isAf ? tool.descAf : tool.descEn}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-500/5 dark:to-blue-500/5 border border-purple-200 dark:border-purple-500/15">
        <h3 className="text-xs text-purple-600 dark:text-purple-300 uppercase tracking-wider mb-2">
          {isAf ? 'Vinnige Gids' : 'Quick Guide'}
        </h3>
        <p className="text-[12px] text-purple-700 dark:text-purple-200/70 leading-relaxed">
          {isAf
            ? 'Begin by die Ontwerpstelsel vir kleure en tipografie-tokens. Gebruik die Komponentblaaier om bestaande komponente te vind voordat jy nuwe skep. Die Roetekaart wys alle bladsye en hul hiërargie.'
            : 'Start at Design System for color and typography tokens. Use Component Browser to find existing components before creating new ones. Route Map shows all pages and their hierarchy.'
          }
        </p>
      </div>
    </div>
  );
}

export default PrototypeLanding;
