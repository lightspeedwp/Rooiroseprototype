/**
 * Subcategory Links for Mega Menus
 * Displays subcategory navigation in 1 or 2 column layout
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.0.0
 * @date 2026-03-15
 */

import React from 'react';
import { Link } from 'react-router';
import type { SubcategoryGroup } from '../../../types/navigation';

interface SubcategoryLinksProps {
  groups: SubcategoryGroup[];
  className?: string;
}

export const SubcategoryLinks: React.FC<SubcategoryLinksProps> = ({ 
  groups, 
  className = '' 
}) => {
  if (!groups || groups.length === 0) return null;

  return (
    <div className={className}>
      {groups.map((group, groupIndex) => {
        const useColumns = group.columns === 2;
        
        return (
          <div key={groupIndex} className={groupIndex > 0 ? 'mt-6' : ''}>
            {/* Optional Group Title */}
            {group.title && (
              <h5 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-3">
                {group.title}
              </h5>
            )}

            {/* Links Grid */}
            <ul className={`space-y-1 ${useColumns ? 'columns-2 gap-6' : ''}`}>
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex} className={useColumns ? 'break-inside-avoid' : ''}>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 py-2 px-3 rounded-md text-sm text-brand-navy dark:text-foreground hover:bg-gray-50 dark:hover:bg-muted hover:text-brand-red dark:hover:text-brand-red transition-colors"
                  >
                    {/* Link Label */}
                    <span className="flex-1">
                      {link.label}
                    </span>

                    {/* Optional Badge */}
                    {link.badge && (
                      <span className="flex-shrink-0 px-2 py-0.5 bg-brand-red text-white text-[10px] font-bold uppercase tracking-wide rounded-sm">
                        {link.badge}
                      </span>
                    )}

                    {/* Optional Icon */}
                    {link.icon && (
                      <span className="flex-shrink-0 text-gray-400 group-hover:text-brand-red transition-colors">
                        {/* Icon rendering would go here if needed */}
                      </span>
                    )}
                  </Link>

                  {/* Optional Description */}
                  {link.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-500 px-3 pb-2 leading-snug">
                      {link.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
