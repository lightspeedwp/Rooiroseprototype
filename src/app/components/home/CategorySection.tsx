import React from 'react';
import { NewsCard } from './NewsCard';
import { MagazineArticleCard } from '../category/MagazineArticleCard';
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
 * Layout: Large Magazine Article Cards with visual hierarchy
 * ────────────────────────────────────────────────────────────────── */

export const CategorySection = React.memo(({ title, link, articles, bgColor = 'white' }: CategorySectionProps) => {
  // Background color mapping (rooi rose editorial accents)
  const bgColorMap = {
    white: 'bg-white dark:bg-background',
    blush: 'bg-[#f4e5e0] dark:bg-[#3a2a28]', // --accent-blush
    beige: 'bg-[#f8f4f0] dark:bg-[#2e2a26]', // --accent-warm-beige
    grey: 'bg-[#e8e5e2] dark:bg-[#2d2d2d]',  // --accent-soft-grey
  };

  return (
    <section className={`py-16 md:py-20 ${bgColorMap[bgColor]}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header - Magazine style with Playfair Display SC */}
        <div className="flex justify-between items-center mb-10">
          <h2 
            className="font-normal text-brand-navy dark:text-foreground uppercase tracking-[0.15em] text-3xl md:text-4xl has-brand-serif-font-family border-b-4 border-brand-red pb-2"
            style={{ letterSpacing: '0.15em' }}
          >
            {title}
          </h2>
          <Link 
            to={link} 
            className="text-brand-red hover:text-brand-red-hover font-bold text-sm flex items-center gap-1 whitespace-nowrap transition-colors"
          >
            Sien alles <ChevronRight size={16} />
          </Link>
        </div>
        
        {/* Magazine 3-column grid with generous spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.slice(0, 3).map((article) => (
            <MagazineArticleCard 
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              imageUrl={article.imageUrl}
              date={article.date}
              author={article.author}
              readTime={article.readTime}
              sponsored={article.sponsored}
              sponsorName={article.sponsorName}
              sponsorLogo={article.sponsorLogo}
              variant="standard"
            />
          ))}
        </div>
      </div>
    </section>
  );
});

CategorySection.displayName = 'CategorySection';