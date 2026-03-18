import React, { useState } from 'react';
import { Badge } from '../ui/badge';
import { TrendingUp, ChevronRight, FileText } from 'lucide-react';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { TOP_STORIES, LATEST_NEWS } from '../../data/articles';
import { Link, useNavigate } from 'react-router';
import { ArticleLink } from '../common/ArticleLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { generateArticleSlug } from '../../utils/slugify';
import { getResponsiveProps } from '../../utils/responsiveImage';

export const Hero = () => {
  const mainStory = TOP_STORIES[0];
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <section className="hero py-4 bg-gray-50 dark:bg-custom-base">
      <div className="hero__container alignwide">
        <div className="hero__layout flex flex-col md:flex-row gap-6">
          
          {/* Main Hero Article - Takes up remaining space */}
          <div className="hero__main flex-1 relative group cursor-pointer">
            <ArticleLink id={mainStory.id} title={mainStory.title} className="hero__link block">
              <div className="hero__image-wrapper relative h-[350px] md:h-[450px] overflow-hidden">
                <ImageWithFallback 
                  src={mainStory.imageUrl} 
                  alt={mainStory.title}
                  className="hero__image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  {...getResponsiveProps(mainStory.imageUrl, 'heroConstrained')}
                />
                <div className="hero__overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="hero__content absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="hero__category inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 mb-3 uppercase tracking-wider">
                    {mainStory.category}
                  </span>
                  <h1
                    className="hero__title text-white text-2xl md:text-3xl lg:text-4xl font-normal mb-3 has-brand-serif-font-family"
                    style={{
                      fontVariationSettings: "var(--fvs-h1)",
                      lineHeight: 'var(--lh-h1)',
                      letterSpacing: 'var(--ls-h1)',
                    }}
                  >
                    {mainStory.title}
                  </h1>
                  <p className="hero__excerpt text-gray-200 text-base md:text-lg mb-4 line-clamp-2 max-w-2xl has-brand-sans-font-family">
                    {mainStory.excerpt}
                  </p>
                  <div className="hero__actions flex flex-col sm:flex-row gap-4">
                    <span className="hero__cta bg-brand-red hover:bg-brand-red-hover text-white px-6 py-2.5 rounded font-bold transition-colors flex items-center gap-2 w-fit text-sm">
                      Lees meer
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </ArticleLink>
          </div>

          {/* Right Sidebar - Fixed 300px width */}
          <div className="hero__sidebar w-full lg:w-[300px] flex-shrink-0">
            
            {/* Nuusflitse Section (Moved from Home.tsx) */}
            <div className="news-flash bg-white dark:bg-custom-base-2 p-6 rounded-lg border border-gray-200 dark:border-custom-base-3 h-full">
              <div className="news-flash__header flex items-center gap-2 mb-6 border-b border-gray-200 dark:border-custom-base-3 pb-4">
                <div className="news-flash__accent w-2 h-8 bg-brand-red"></div>
                <h2
                  className="news-flash__title font-normal text-brand-navy dark:text-custom-contrast has-brand-serif-font-family"
                  style={{
                    fontVariationSettings: "var(--fvs-h2)",
                    lineHeight: 'var(--lh-h2)',
                    letterSpacing: 'var(--ls-h2)',
                    fontSize: 'var(--text-h2)',
                  }}
                >Nuusflitse</h2>
              </div>
              
              <div className="news-flash__items flex flex-col gap-0 divide-y divide-gray-200 dark:divide-custom-base-3">
                {LATEST_NEWS.slice(0, 4).map((news) => (
                  <div key={news.id} className="news-flash__item py-3 first:pt-0 last:pb-0 group cursor-pointer">
                    <div className="news-flash__meta flex items-center gap-2 mb-1">
                      <span className="news-flash__category text-brand-red text-xs font-bold uppercase">{news.category}</span>
                      <span className="news-flash__separator text-gray-400 dark:text-gray-600 text-xs">•</span>
                      <span className="news-flash__time text-gray-500 dark:text-gray-400 text-xs">{news.time}</span>
                    </div>
                    <h3 className="news-flash__item-title text-sm text-brand-navy dark:text-custom-contrast group-hover:text-brand-red transition-colors has-brand-sans-font-family leading-snug">
                      <Link to={`/artikel/${generateArticleSlug(news.id, news.title)}`}>{news.title}</Link>
                    </h3>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/nuus')}
                className="news-flash__cta w-full mt-4 py-2 text-center text-brand-navy-light dark:text-brand-navy-light border border-brand-navy-light dark:border-brand-navy-light rounded font-bold hover:bg-brand-navy-light dark:hover:bg-input hover:text-white transition-colors text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Laai meer nuus
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};