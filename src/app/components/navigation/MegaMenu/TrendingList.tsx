/**
 * Trending Posts List for Mega Menus
 * Displays a compact list of trending articles
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.0.0
 * @date 2026-03-15
 */

import React from 'react';
import { Link } from 'react-router';
import { TrendingUp } from 'lucide-react';
import type { TrendingItem } from '../../../types/navigation';

interface TrendingListProps {
  items: TrendingItem[];
  title?: string;
  className?: string;
}

export const TrendingList: React.FC<TrendingListProps> = ({ 
  items, 
  title = 'Gewild', 
  className = '' 
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={className}>
      {/* Heading */}
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp size={16} className="text-brand-red" />
        <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-navy dark:text-foreground">
          {title}
        </h5>
      </div>

      {/* Trending Items */}
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              className="group flex items-start gap-2 text-sm hover:text-brand-red dark:hover:text-brand-red transition-colors"
            >
              {/* Number Indicator */}
              <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 dark:bg-muted text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:bg-brand-red group-hover:text-white transition-colors">
                {index + 1}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </p>
                
                {/* Category Label or Badge */}
                {(item.categoryLabel || item.badge) && (
                  <div className="flex items-center gap-2 mt-1">
                    {item.categoryLabel && (
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        {item.categoryLabel}
                      </span>
                    )}
                    {item.badge && (
                      <span className="inline-block px-2 py-0.5 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wide rounded-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
