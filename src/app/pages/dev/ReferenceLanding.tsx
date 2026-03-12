/**
 * ReferenceLanding — Section landing page for Reference tools.
 *
 * Route: /ontwikkelaar/verwysings
 * Shows: Guidelines Browser, Content Browser, Image Assets
 */

import React from 'react';
import { BookOpen, FileText, FileImage, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { DevToolHero, type HeroStat } from '../../components/dev/DevToolHero';
import { Newspaper } from '../../components/icons/NewspaperIcon';

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
    titleAf: 'Riglyne Blaaier',
    titleEn: 'Guidelines Browser',
    descAf: 'Blaai deur alle riglyn-lêers — ontwerptokens, tipografie, kleure, WordPress-migrasie, en meer.',
    descEn: 'Browse all guideline files — design tokens, typography, colors, WordPress migration, and more.',
    icon: Newspaper,
    color: 'bg-emerald-500',
    path: '/ontwikkelaar/riglyne',
  },
  {
    titleAf: 'Inhoudblaaier',
    titleEn: 'Content Browser',
    descAf: 'Statiese bladsy-inhoud, FAQ\'s, en produksieklaar Afrikaanse teks vir elke afdeling.',
    descEn: 'Static page content, FAQs, and production-ready Afrikaans text for every section.',
    icon: FileText,
    color: 'bg-blue-500',
    path: '/ontwikkelaar/inhoud',
  },
  {
    titleAf: 'Beeldbateblaaier',
    titleEn: 'Image Asset Browser',
    descAf: 'Alle beelde — rol-gebaseerde filters, groepskeuse, WP-mediabiblioteek opsomming.',
    descEn: 'All images — role-based filters, bulk select, WP media library summary.',
    icon: FileImage,
    color: 'bg-sky-500',
    path: '/ontwikkelaar/beelde',
  },
];

export function ReferenceLanding() {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';

  const stats: HeroStat[] = [
    { label: isAf ? 'riglyn-lêers' : 'guideline files', value: '187+' },
    { label: isAf ? 'inhoudbladsye' : 'content pages', value: '70+' },
    { label: isAf ? 'beeldbates' : 'image assets', value: '80+' },
  ];

  return (
    <div>
      <DevToolHero
        icon={BookOpen}
        iconColor="bg-emerald-500"
        title={isAf ? 'Verwysingsgereedskap' : 'Reference Tools'}
        description={isAf
          ? 'Riglyne, inhoud, en beeldbates — die volledige verwysingsbibliotek vir rooi rose.'
          : 'Guidelines, content, and image assets — the complete reference library for rooi rose.'
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

      <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/5 dark:to-teal-500/5 border border-emerald-200 dark:border-emerald-500/15">
        <h3 className="text-xs text-emerald-600 dark:text-emerald-300 uppercase tracking-wider mb-2">
          {isAf ? 'Inhoud-integriteitsreël' : 'Content Integrity Rule'}
        </h3>
        <p className="text-[12px] text-emerald-700 dark:text-emerald-200/70 leading-relaxed">
          {isAf
            ? 'MOENIE inhoud uit riglyn-lêers opsommaak, verkort, of afkort nie. Elke lêer moet woordeliks weergegee word — karakter vir karakter — van die bron-markdown.'
            : 'NEVER summarise, truncate, or abbreviate content from guideline files. Every file must be reproduced verbatim — character for character — from the source markdown.'
          }
        </p>
      </div>
    </div>
  );
}

export default ReferenceLanding;