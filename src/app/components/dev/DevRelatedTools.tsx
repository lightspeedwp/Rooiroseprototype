import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export interface RelatedTool {
  path: string;
  labelAf: string;
  labelEn: string;
  descAf: string;
  descEn: string;
  icon: React.FC<{ size?: number; className?: string }>;
  color: string;
}

interface DevRelatedToolsProps {
  tools: RelatedTool[];
}

/**
 * DevRelatedTools — Related dev tool links displayed at the bottom of each page.
 * Provides logical navigation flow between dev tool pages.
 */
export const DevRelatedTools: React.FC<DevRelatedToolsProps> = ({ tools }) => {
  const { locale } = useDevLanguage();
  const isAf = locale === 'af';
  const t = (key: string) => getTranslation(key, locale);

  if (!tools || tools.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/[0.06]">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-white/25 mb-4">
        {t('common.relatedTools')}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.path}
              to={tool.path}
              className="group flex items-start gap-3 p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:border-gray-300 dark:hover:border-white/20 transition-all"
            >
              <div className={`w-8 h-8 rounded-lg ${tool.color} flex items-center justify-center shrink-0`}>
                <Icon size={14} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm text-gray-800 dark:text-white group-hover:text-brand-red transition-colors">
                    {isAf ? tool.labelAf : tool.labelEn}
                  </span>
                  <ArrowRight size={10} className="text-gray-300 dark:text-white/20 group-hover:text-brand-red transition-colors" />
                </div>
                <p className="text-[11px] text-gray-500 dark:text-white/40 mt-0.5 leading-relaxed">
                  {isAf ? tool.descAf : tool.descEn}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};