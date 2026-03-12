import React, { useMemo } from 'react';
import { TOP_STORIES } from '../../data/articles';
import { HOME_CONTENT } from '../../data/home';
import { NewsCard } from './NewsCard';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { LeaderboardAd } from '../ads';

export const FeatureGrid = () => {
  const navigate = useNavigate();

  // Memoize featured articles
  const featuredStory = useMemo(() => TOP_STORIES[0], []);
  const secondaryStories = useMemo(() => TOP_STORIES.slice(1, 7), []);

  return (
    <section className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-brand-red">
          {/* V2: uppercase section label → Karla SemiBold, H6 token scale */}
          <h2 className="has-brand-sans-font-family font-semibold text-brand-navy dark:text-custom-contrast uppercase is-style-section-title">{HOME_CONTENT.featureGrid.title}</h2>
          <Link to="/nuus" className="text-brand-red font-bold text-sm hover:underline flex items-center gap-1">
            {HOME_CONTENT.featureGrid.viewAll} <ChevronRight size={16} />
          </Link>
        </div>
        
        {/* Grid Layout: 1 large featured + 6 compact stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Featured Story - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <NewsCard article={featuredStory} variant="featured" />
          </div>
          
          {/* Right Column - 3 compact stories stacked */}
          <div className="space-y-6 border-l-0 lg:border-l lg:border-gray-200 dark:lg:border-custom-base-3 lg:pl-6">
            {secondaryStories.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} variant="list" />
            ))}
          </div>
        </div>

        {/* Bottom Row - 3 compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-custom-base-3">
          {secondaryStories.slice(3, 6).map((article) => (
            <NewsCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
};