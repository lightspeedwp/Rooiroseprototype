/**
 * OperationsLanding — Section landing page for Operations & Launch tools.
 *
 * Route: /ontwikkelaar/bedrywighede
 * Shows: Launch Checklist, Email Previews, System Config, Form Builder Preview (planned)
 */

import React from 'react';
import { ClipboardCheck, Mail, Settings, FormInput, ArrowRight } from 'lucide-react';
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
  badge?: string;
}

const TOOLS: ToolCard[] = [
  {
    titleAf: 'Lanseringskontrolelys',
    titleEn: 'Launch Checklist',
    descAf: '10-fase lanseringskontrolelys — van voorafbeplanning tot na-lansering monitering.',
    descEn: '10-phase launch checklist — from pre-launch planning to post-launch monitoring.',
    icon: ClipboardCheck,
    color: 'bg-lime-500',
    path: '/ontwikkelaar/lansering',
  },
  {
    titleAf: 'E-pos Voorskou',
    titleEn: 'Email Previews',
    descAf: 'Nuusbrief e-pos sjablone — voorskou, stuur toets, en HTML-uitvoer.',
    descEn: 'Newsletter email templates — preview, send test, and HTML export.',
    icon: Mail,
    color: 'bg-rose-500',
    path: '/ontwikkelaar/e-pos-voorskou',
  },
  {
    titleAf: 'Stelselkonfigurasie',
    titleEn: 'System Config',
    descAf: 'WooCommerce, Issuu, en stelselkonfigurasie verwysing.',
    descEn: 'WooCommerce, Issuu, and system configuration reference.',
    icon: Settings,
    color: 'bg-purple-500',
    path: '/ontwikkelaar/stelselkonfig',
  },
  {
    titleAf: 'Vormbouer Voorskou',
    titleEn: 'Form Builder Preview',
    descAf: 'Alle vorms regoor die webwerf — kontak, kompetisie, inteken, stuur storie.',
    descEn: 'All forms across the site — contact, competition, subscribe, submit story.',
    icon: FormInput,
    color: 'bg-teal-500',
    path: '/ontwikkelaar/form-builder-preview',
  },
];

export function OperationsLanding() {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';

  const stats: HeroStat[] = [
    { label: isAf ? 'kontrolelys fases' : 'checklist phases', value: 10 },
    { label: isAf ? 'e-pos sjablone' : 'email templates', value: '5+' },
    { label: isAf ? 'konfig afdelings' : 'config sections', value: 4 },
  ];

  return (
    <div>
      <DevToolHero
        icon={ClipboardCheck}
        iconColor="bg-lime-500"
        title={isAf ? 'Bedrywighede & Lansering' : 'Operations & Launch'}
        description={isAf
          ? 'Lanseringskontrolelys, e-pos sjablone, stelselkonfigurasie, en vorms — alles vir produksie-gereedheid.'
          : 'Launch checklist, email templates, system config, and forms — everything for production readiness.'
        }
        stats={stats}
        badge={isAf ? `${TOOLS.length} gereedskap` : `${TOOLS.length} tools`}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {TOOLS.map(tool => {
          const Icon = tool.icon;
          const isPlanned = tool.badge !== undefined;
          return (
            <Link
              key={tool.path}
              to={isPlanned ? '#' : tool.path}
              className={`group p-5 rounded-xl bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] transition-all ${
                isPlanned ? 'opacity-60 cursor-not-allowed' : 'hover:border-gray-300 dark:hover:border-white/10 hover:shadow-md dark:hover:shadow-none'
              }`}
              onClick={isPlanned ? (e: React.MouseEvent) => e.preventDefault() : undefined}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg ${tool.color} flex items-center justify-center shrink-0`}>
                  <Icon size={18} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm text-gray-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-brand-red transition-colors">
                      {isAf ? tool.titleAf : tool.titleEn}
                    </h3>
                    {tool.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-white/40">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>
                {!isPlanned && (
                  <ArrowRight size={14} className="text-gray-300 dark:text-white/15 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                )}
              </div>
              <p className="text-[12px] text-gray-500 dark:text-white/40 leading-relaxed">
                {isAf ? tool.descAf : tool.descEn}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default OperationsLanding;