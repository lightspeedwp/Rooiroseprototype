import React from 'react';
import { Search, X, Filter } from 'lucide-react';
import { type BlockCategory, CATEGORY_LABELS } from '../../../data/blockBrowserData';

interface BlockCategorySearchProps {
  activeCategory: BlockCategory | 'all';
  onCategoryChange: (category: BlockCategory | 'all') => void;
  availableCategories: BlockCategory[];
  search: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
  isAf: boolean;
}

export const BlockCategorySearch: React.FC<BlockCategorySearchProps> = ({
  activeCategory,
  onCategoryChange,
  availableCategories,
  search,
  onSearchChange,
  onSearchClear,
  isAf,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      {/* Category dropdown */}
      <div className="relative">
        <select
          value={activeCategory}
          onChange={e => onCategoryChange(e.target.value as BlockCategory | 'all')}
          className="appearance-none bg-white border border-neutral-300 text-neutral-900 dark:bg-white/5 dark:border-white/10 rounded-lg px-4 py-2.5 pr-10 dark:text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all cursor-pointer hover:border-neutral-400 dark:hover:border-white/20"
        >
          <option value="all">{isAf ? 'Alle kategorieë' : 'All categories'}</option>
          {availableCategories.map(cat => (
            <option key={cat} value={cat}>
              {CATEGORY_LABELS[cat]?.[isAf ? 'af' : 'en'] || cat}
            </option>
          ))}
        </select>
        <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-white/40 pointer-events-none" />
      </div>

      {/* Search */}
      <div className="relative flex-1">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-white/40 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder={isAf ? 'Soek blokke...' : 'Search blocks...'}
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-neutral-300 text-neutral-900 placeholder-neutral-400 dark:bg-white/5 dark:border-white/10 rounded-lg dark:text-white dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-neutral-400 dark:hover:border-white/20"
        />
        {search && (
          <button 
            onClick={onSearchClear} 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:text-white/40 dark:hover:text-white transition-colors p-1 rounded hover:bg-neutral-100 dark:hover:bg-white/10"
            aria-label={isAf ? 'Maak skoon' : 'Clear'}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
