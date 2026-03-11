import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { generateArticleSlug } from '../../utils/slugify';
import { getAllSponsoredArticles } from '../../data/categoryArticles';

/**
 * SponsoredInFeed — Displays a branded sponsored content section
 * on the homepage between category sections.
 * Shows 2 sponsored articles side by side with clear "GEBORG" labelling.
 */
export const SponsoredInFeed: React.FC = () => {
  const sponsored = getAllSponsoredArticles();
  
  if (sponsored.length === 0) return null;

  // Pick 2 sponsored articles from different sponsors when possible
  const seen = new Set<string>();
  const displayArticles = sponsored.filter(a => {
    if (seen.has(a.sponsorSlug || '')) return false;
    seen.add(a.sponsorSlug || '');
    return true;
  }).slice(0, 2);

  return (
    <section className="py-6 bg-white dark:bg-background">
      <div className="alignwide">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4 pb-2 border-b-2 border-gray-400 dark:border-gray-600">
          <h2 className="is-style-section-title text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full" />
            Geborgde inhoud
          </h2>
        </div>

        {/* Sponsored Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayArticles.map((article) => {
            const slug = generateArticleSlug(article.id, article.title);
            return (
              <article key={article.id} className="group flex flex-col sm:flex-row gap-4 bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-lg overflow-hidden hover:shadow-md dark:hover:shadow-[var(--shadow-dark-200)] transition-shadow">
                {/* Image */}
                <Link to={`/artikel/${slug}`} className="flex-shrink-0 w-full sm:w-[200px] h-[180px] sm:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="flex-1 min-w-0 p-4 sm:py-4 sm:pr-4 sm:pl-0 flex flex-col">
                  {/* Sponsor Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Geborg
                    </span>
                    {article.sponsorLogo && (
                      <div className="w-5 h-5 rounded overflow-hidden bg-white flex-shrink-0">
                        <ImageWithFallback
                          src={article.sponsorLogo}
                          alt={article.sponsorName || 'Borg'}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    {article.sponsorName && (
                      <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                        {article.sponsorName}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-brand-navy dark:text-foreground mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
                    <Link to={`/artikel/${slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      to={`/artikel/${slug}`}
                      className="inline-flex items-center gap-1 text-brand-red text-xs font-bold hover:underline"
                    >
                      Lees meer
                      <ArrowRight size={12} />
                    </Link>
                    {article.sponsorSlug && (
                      <Link
                        to={`/geborg/${article.sponsorSlug}`}
                        className="inline-flex items-center gap-1 text-gray-400 dark:text-gray-500 text-[10px] hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                      >
                        Meer van {article.sponsorName}
                        <ExternalLink size={10} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};