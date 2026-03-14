import React from 'react';
import { Link } from 'react-router';
import { Subcategory } from '../../data/models/Subcategory';

/**
 * CategoryHeroLinks Component
 * 
 * Subcategory quick-link strip displayed below category hero.
 * Horizontal scroll on mobile, wrap on desktop.
 */

interface CategoryHeroLinksProps {
  subcategories: Subcategory[];
  categorySlug: string;
}

export function CategoryHeroLinks({ subcategories, categorySlug }: CategoryHeroLinksProps) {
  if (!subcategories || subcategories.length === 0) return null;
  
  return (
    <nav className="category-hero-links bg-white border-b border-gray-200 py-4" aria-label="Subcategories">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-3 overflow-x-auto md:flex-wrap scrollbar-hide">
          {subcategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/${categorySlug}/${sub.slug}`}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-brand-primary hover:text-brand-primary hover:bg-red-50 transition-all text-sm md:text-base font-medium"
            >
              {sub.title}
            </Link>
          ))}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </nav>
  );
}
