import React, { useMemo } from 'react';
import { TOP_STORIES } from '../../data/articles';
import { HOME_CONTENT } from '../../data/home';
import { NewsCard } from './NewsCard';
import { MagazineArticleCard } from '../category/MagazineArticleCard';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { LeaderboardAd } from '../ads';

/* ── rooi rose Magazine Feature Grid ──────────────────────────────
 * Editorial design: Large featured article + magazine grid
 * Typography: Playfair Display SC headings
 * Layout: Asymmetric grid with visual hierarchy
 * ────────────────────────────────────────────────────────────────── */

export const FeatureGrid = () => {
  const navigate = useNavigate();

  // Memoize featured articles
  const featuredStory = useMemo(() => TOP_STORIES[0], []);
  const secondaryStories = useMemo(() => TOP_STORIES.slice(1, 7), []);

  return (
    <section className="py-16">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-normal text-brand-navy dark:text-foreground uppercase tracking-[0.15em] text-3xl md:text-4xl has-brand-serif-font-family border-b-4 border-brand-red pb-2">
            {HOME_CONTENT.featureGrid.title}
          </h2>
          <Link to="/nuus" className="text-brand-red hover:text-brand-red-hover font-bold text-sm flex items-center gap-1 transition-colors">
            {HOME_CONTENT.featureGrid.viewAll} <ChevronRight size={16} />
          </Link>
        </div>
        
        {/* Grid Layout: 1 large featured + 6 magazine cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          {/* Featured Story - Larger card on left */}
          <div>
            <MagazineArticleCard 
              id={featuredStory.id}
              title={featuredStory.title}
              excerpt={featuredStory.excerpt}
              category={featuredStory.category}
              imageUrl={featuredStory.imageUrl}
              date={featuredStory.date}
              author={featuredStory.author}
              readTime={featuredStory.readTime}
              variant="featured"
            />
          </div>
          
          {/* Right Column - 3 compact stories stacked */}
          <div className="space-y-8">
            {secondaryStories.slice(0, 3).map((article) => (
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
                variant="compact"
              />
            ))}
          </div>
        </div>

        {/* Bottom Row - 3 magazine cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-10 border-t border-gray-200 dark:border-border">
          {secondaryStories.slice(3, 6).map((article) => (
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
              variant="standard"
            />
          ))}
        </div>
      </div>
    </section>
  );
};