import React from 'react';
import { Layers } from 'lucide-react';
import { type BlockDomain, DOMAIN_ICONS, DOMAIN_LABELS, getBlocksByDomain } from '../../../data/blockBrowserData';

interface BlockDomainTabsProps {
  activeDomain: BlockDomain | 'all';
  onDomainChange: (domain: BlockDomain | 'all') => void;
  isAf: boolean;
  totalCount: number;
}

export const BlockDomainTabs: React.FC<BlockDomainTabsProps> = ({
  activeDomain,
  onDomainChange,
  isAf,
  totalCount,
}) => {
  const domains: BlockDomain[] = ['react', 'core', 'woocommerce', 'third-party'];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onDomainChange('all')}
        className={`px-4 py-2 rounded-lg transition-all duration-200 ${
          activeDomain === 'all'
            ? 'bg-neutral-900/80 text-white dark:bg-white/15 dark:text-white shadow-sm'
            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:shadow-sm dark:bg-white/5 dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white/70'
        }`}
      >
        <span className="flex items-center gap-2">
          <Layers size={16} />
          {isAf ? 'Almal' : 'All'} ({totalCount})
        </span>
      </button>
      {domains.map(domain => {
        const Icon = DOMAIN_ICONS[domain];
        const count = getBlocksByDomain(domain).length;
        return (
          <button
            key={domain}
            onClick={() => onDomainChange(domain)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              activeDomain === domain
                ? 'bg-neutral-900/80 text-white dark:bg-white/15 dark:text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:shadow-sm dark:bg-white/5 dark:text-white/50 dark:hover:bg-white/10 dark:hover:text-white/70'
            }`}
          >
            <span className="flex items-center gap-2">
              <Icon size={16} />
              {DOMAIN_LABELS[domain][isAf ? 'af' : 'en']} ({count})
            </span>
          </button>
        );
      })}
    </div>
  );
};
