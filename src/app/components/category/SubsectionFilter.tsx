import React from 'react';
import { Link, useLocation } from 'react-router';

interface SubsectionFilterProps {
  category: string;
}

/**
 * SubsectionFilter Component
 * Shows subsection/tag filter chips for category pages that link to Tag Archive pages
 */
export const SubsectionFilter: React.FC<SubsectionFilterProps> = ({ category }) => {
  const { pathname } = useLocation();

  const subsections: Record<string, string[]> = {
    Nuus: ['Aktueel', 'Politiek', 'Misdaad', 'Wêreld', 'Omgewing'],
    Sport: ['Rugby', 'Sokker', 'Krieket', 'Skolesport', 'Motorsport', 'Ander'],
    Dink: ['Aktueel', 'Rubrieke', 'Profiele', 'Kommentaar', 'Spotprente', 'Menings'],
    Sake: ['Ekonomie', 'Landbou', 'Geldsake', 'Markte', 'Maatskappye'],
    Leefstyl: ['Vermaak', 'Kos en resepte', 'Reis en buitelewe', 'Kuns en kultuur', 'Blokkiesraaisels'],
  };

  const categorySubsections = subsections[category];

  if (!categorySubsections) return null;

  return (
    <div className="subsection-filter mb-6">
      <div className="subsection-filter__wrapper flex flex-wrap gap-2">
        {/* All Link (back to category main) */}
        <Link
          to={`/${category.toLowerCase()}`}
          className={`subsection-filter__item ${
            !pathname.includes('/onderwerp/')
              ? 'subsection-filter__item--active'
              : ''
          } px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            !pathname.includes('/onderwerp/')
              ? 'bg-brand-red text-white'
              : 'bg-white dark:bg-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-muted border border-gray-300 dark:border-input'
          }`}
        >
          Alles
        </Link>

        {/* Tag Links */}
        {categorySubsections.map((subsection) => {
          // Slugify the tag
          const tagSlug = subsection.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
          
          return (
            <Link
              key={subsection}
              to={`/onderwerp/${tagSlug}`}
              className="subsection-filter__item px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white dark:bg-card text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-muted border border-gray-300 dark:border-input"
            >
              {subsection}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubsectionFilter;