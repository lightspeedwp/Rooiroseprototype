import React from 'react';
import { NewsCard } from './NewsCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { Article } from '../../types';

interface CategorySectionProps {
    title: string;
    link: string;
    articles: Article[];
    bgColor?: 'white' | 'blush' | 'beige' | 'grey';
}

/* ── rooi rose Magazine Category Section ──────────────────────────────
 * Editorial design: Generous white space, Playfair Display SC headings
 * Background colors: Alternating editorial accent tones
 * ────────────────────────────────────────────────────────────────── */

export const CategorySection = React.memo(({ title, link, articles, bgColor = 'white' }: CategorySectionProps) => {
  // Background color mapping (rooi rose editorial accents)
  const bgColorMap = {
    white: 'bg-[var(--base)]',
    blush: 'bg-[#f4e5e0] dark:bg-[#3a2a28]', // --accent-blush
    beige: 'bg-[#f8f4f0] dark:bg-[#2e2a26]', // --accent-warm-beige
    grey: 'bg-[#e8e5e2] dark:bg-[#2d2d2d]',  // --accent-soft-grey
  };

  return (
    <section className={`py-16 ${bgColorMap[bgColor]}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header - Magazine style with Playfair Display SC */}
        <div className="flex justify-between items-end mb-8 pb-4 border-b border-[var(--custom-primary)]">
          <h2 
            className="font-display font-normal text-[var(--contrast)] dark:text-foreground uppercase tracking-[0.15em] text-2xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
          >
            {title}
          </h2>
          <Link 
            to={link} 
            className="text-[var(--custom-primary-accessible)] hover:text-[var(--custom-primary-hover)] font-body font-semibold text-sm flex items-center gap-1 whitespace-nowrap transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Sien alles <ChevronRight size={16} />
          </Link>
        </div>
        
        {/* Magazine 3-column grid with generous spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.slice(0, 3).map((article) => (
            <NewsCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
});

CategorySection.displayName = 'CategorySection';