import React from 'react';
import { getBlockStats } from '../../../data/blockBrowserData';

interface BlockSummaryStatsProps {
  isAf: boolean;
}

export const BlockSummaryStats: React.FC<BlockSummaryStatsProps> = ({ isAf }) => {
  const stats = getBlockStats();

  return (
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-4 text-center hover:bg-neutral-100 dark:hover:bg-white/[0.07] transition-all duration-200 hover:shadow-sm">
        <div className="text-2xl font-bold text-neutral-900 dark:text-white/90">{stats.withStyles}</div>
        <div className="text-neutral-500 dark:text-white/40 text-xs mt-1">{isAf ? 'Met Blok-style' : 'With Block Styles'}</div>
      </div>
      <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-4 text-center hover:bg-neutral-100 dark:hover:bg-white/[0.07] transition-all duration-200 hover:shadow-sm">
        <div className="text-2xl font-bold text-neutral-900 dark:text-white/90">{stats.withGuidelines}</div>
        <div className="text-neutral-500 dark:text-white/40 text-xs mt-1">{isAf ? 'Met Riglyne' : 'With Guidelines'}</div>
      </div>
      <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-4 text-center hover:bg-neutral-100 dark:hover:bg-white/[0.07] transition-all duration-200 hover:shadow-sm">
        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{stats.missingCss}</div>
        <div className="text-neutral-500 dark:text-white/40 text-xs mt-1">{isAf ? 'CSS Ontbrekend' : 'CSS Missing'}</div>
      </div>
      <div className="bg-neutral-50 dark:bg-white/5 rounded-lg p-4 text-center hover:bg-neutral-100 dark:hover:bg-white/[0.07] transition-all duration-200 hover:shadow-sm">
        <div className="text-2xl font-bold text-neutral-900 dark:text-white/90">{stats.total}</div>
        <div className="text-neutral-500 dark:text-white/40 text-xs mt-1">{isAf ? 'Totale Blokke' : 'Total Blocks'}</div>
      </div>
    </div>
  );
};
