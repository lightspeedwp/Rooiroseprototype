import React from 'react';
import { NewsCard } from './NewsCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Article } from '../../types';

interface CategorySectionProps {
    title: string;
    link: string;
    articles: Article[];
    bgColor?: string;
}

export const CategorySection = React.memo(({ title, link, articles, bgColor = "bg-white" }: CategorySectionProps) => {
  return (
    <section className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
      <div>
        {/* Section Header - Newspaper style with thick border */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-brand-navy dark:border-brand-navy-light">
          {/* V2: uppercase section label → Inter SemiBold, H6 token scale */}
          <h2 className="font-inter font-semibold text-brand-navy dark:text-custom-contrast uppercase is-style-section-title">{title}</h2>
          <Link to={link} className="text-brand-red font-bold text-sm hover:underline flex items-center gap-1 whitespace-nowrap">
            Sien alles <ChevronRight size={16} />
          </Link>
        </div>
        
        {/* Compact 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
});

CategorySection.displayName = 'CategorySection';