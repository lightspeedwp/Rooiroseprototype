import React from 'react';
import { Search } from 'lucide-react';
import type { IconEntry } from '../../../data/iconBrowserData';
import { DevEmptyState } from '../../../components/dev/DevEmptyState';
import { ICON_COMPONENTS } from './iconComponents';

interface IconGridProps {
  icons: IconEntry[];
  selectedIcon: IconEntry | null;
  onSelectIcon: (icon: IconEntry | null) => void;
  onClearFilters: () => void;
  isAf: boolean;
}

export const IconGrid: React.FC<IconGridProps> = ({
  icons,
  selectedIcon,
  onSelectIcon,
  onClearFilters,
  isAf,
}) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-1">
        {icons.map(icon => {
          const IconComp = ICON_COMPONENTS[icon.name];
          const isSelected = selectedIcon?.id === icon.id;
          return (
            <button
              key={icon.id}
              onClick={() => onSelectIcon(isSelected ? null : icon)}
              className={`group relative aspect-square flex flex-col items-center justify-center rounded-lg border transition-all ${
                isSelected
                  ? 'bg-brand-red/10 border-brand-red/40 dark:bg-brand-red/20 dark:border-brand-red/40'
                  : 'bg-white dark:bg-white/[0.03] border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.06] hover:border-gray-300 dark:hover:border-white/20'
              }`}
              title={icon.label}
            >
              {IconComp ? (
                <IconComp size={20} className={isSelected ? 'text-brand-red' : 'text-gray-600 dark:text-white/60 group-hover:text-gray-900 dark:group-hover:text-white'} />
              ) : (
                <span className="text-[10px] text-gray-400 dark:text-white/30">SVG</span>
              )}
              <span className={`absolute bottom-0.5 left-0 right-0 text-[7px] truncate px-1 text-center ${
                isSelected ? 'text-brand-red' : 'text-gray-400 dark:text-white/30 opacity-0 group-hover:opacity-100'
              } transition-opacity`}>
                {icon.name}
              </span>
              {/* Type dot */}
              <span className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full ${
                icon.type === 'interface' ? 'bg-blue-400' :
                icon.type === 'content' ? 'bg-green-400' :
                icon.type === 'social' ? 'bg-pink-400' :
                'bg-amber-400'
              }`} />
            </button>
          );
        })}
      </div>

      {icons.length === 0 && (
        <DevEmptyState
          icon={Search}
          title={isAf ? 'Geen ikone gevind nie' : 'No icons found'}
          description={isAf ? 'Probeer \'n ander soekterm of filter' : 'Try a different search term or filter'}
          action={{
            label: isAf ? 'Wis alle filters' : 'Clear all filters',
            onClick: onClearFilters
          }}
        />
      )}
    </div>
  );
};
