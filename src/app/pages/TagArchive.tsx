import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Clock, User, TrendingUp, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { getArticlesByTag } from '../data/categoryArticles';
import { LATEST_NEWS } from '../data/articles';
import { PageContainer } from '../components/common/PageContainer';
import { ArticleLink } from '../components/common/ArticleLink';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '../components/common/SEO';
import { HeroArticleSkeleton } from '../components/common/Skeletons';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { ArticleCardProps } from '../types';
import { HeroSlideCard } from '../components/common/HeroSlideCard';
import { MagazineArticleCard } from '../components/category/MagazineArticleCard';

/* ── rooi rose Magazine Tag Archive ──────────────────────────────
 * Editorial design: Visual magazine grid with large cards
 * Typography: Playfair Display SC headings
 * Layout: Hero article + 3-column magazine grid
 * ────────────────────────────────────────────────────────────────── */

const ArticleCard = ({ id, title, excerpt, category, image, date, author, readTime }: ArticleCardProps) => (
  <ArticleLink id={id} title={title} className="block group">
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-5 py-5 border-b border-gray-300 dark:border-border last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-muted/50 transition-colors">
      <div className="flex-shrink-0 w-full sm:w-[185px] h-[240px] sm:h-[185px] bg-gray-200 dark:bg-muted overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      <div className="flex-1 min-w-0 flex flex-col gap-2.5">
        <h3 className="text-xl sm:text-2xl font-normal text-foreground dark:text-foreground leading-tight sm:leading-normal group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-2 tracking-tight font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>
          {title}
        </h3>
        
        <p className="text-black dark:text-gray-300 text-sm sm:text-base leading-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-1.5 text-xs text-foreground dark:text-gray-400 mt-auto flex-wrap">
          <span>deur</span>
          <span className="font-bold text-brand-navy dark:text-foreground">{author}</span>
          <span>in</span>
          <span className="font-bold text-brand-navy dark:text-foreground">{category}</span>
          <span className="flex-1 min-w-fit">op {date}</span>
        </div>
      </div>
    </article>
  </ArticleLink>
);

const CompactArticleCard = ({ id, title, category, date }: { id: number; title: string; category: string; date: string }) => (
  <ArticleLink id={id} title={title} className="block group py-4 border-b border-gray-100 dark:border-border last:border-0 hover:bg-gray-50 dark:hover:bg-muted transition-colors px-4 -mx-4">
    <div className="flex items-start gap-3">
      <span className="inline-block bg-gray-100 dark:bg-muted text-primary dark:text-primary text-[10px] font-bold px-2 py-1 uppercase rounded shrink-0 mt-0.5">
        {category}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-normal text-sm text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug mb-1 line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          {title}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
      </div>
    </div>
  </ArticleLink>
);

export const TagArchivePage = () => {
  const { tagSlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const ARTICLES_PER_PAGE = 12;
  
  // Format tag name from slug
  const tagName = tagSlug ? tagSlug.charAt(0).toUpperCase() + tagSlug.slice(1).replace(/-/g, ' ') : '';
  
  // Get articles for the specific tag
  const tagArticles = getArticlesByTag(tagName);
  
  // Split articles: first one is hero, rest are regular
  const [heroArticle, ...restArticles] = tagArticles;

  // Calculate pagination
  const totalPages = Math.ceil(restArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = restArticles.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, tagSlug]);

  // Tag descriptions
  const tagDescriptions: Record<string, string> = {
    'Aktueel': 'Die jongste aktuele sake en nuusgebeure wat die gesprek lei.',
    'Politiek': 'Politieke nuus, ontleding en kommentaar van plaaslike en nasionale belang.',
    'Misdaad': 'Misdaadnuus en polisieverslae uit jou omgewing.',
    'Wereld': 'Internasionale nuus en gebeure wat die wêreld raak.',
    'Omgewing': 'Nuus oor die natuur, klimaat en omgewingsake.',
    'Rugby': 'Al die jongste rugby nuus, uitslae en wedstrydverslae.',
    'Sokker': 'Sokkernuus van plaaslike ligas tot internasionale toernooie.',
    'Skolesport': 'Hoogtepunte en prestasies van ons skolesportsterre.',
    'Ekonomie': 'Ekonomiese aanwysers, marknuus en finansiële tendense.',
    'Vermaak': 'Nuus oor musiek, film, kuns en plaaslike feeste.',
    'Plaaslik': 'Plaaslike nuus en gebeure wat saak maak vir ons lesers.'
  };

  const tagline = tagDescriptions[tagName] || `Argief van artikels oor ${tagName}.`;

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO 
        title={`${tagName} - rooi rose`}
        description={tagline}
        keywords={`${tagName.toLowerCase()}, nuus, afrikaans, die papier`}
      />
      
      <LeaderboardAd section="tag" />
      
      <PageContainer 
        breadcrumbs={[
          { label: 'Onderwerpe', href: '#' },
          { label: tagName }
        ]}
        noPadding
      />
      
      <div className="alignwide py-6">
        {/* Tag Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-normal text-brand-navy dark:text-foreground font-heading mb-2 flex items-center gap-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              <Tag className="w-8 h-8 md:w-10 md:h-10 text-primary dark:text-primary" />
              {tagName}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
              {tagline}
            </p>
          </div>
        </div>

        {/* Hero Article */}
        {heroArticle ? (
          <div className="mb-3">
            <HeroSlideCard 
              id={heroArticle.id}
              title={heroArticle.title}
              excerpt={heroArticle.excerpt}
              category={heroArticle.category}
              image={heroArticle.imageUrl}
              date={heroArticle.date}
              author={heroArticle.author}
              readTime={heroArticle.readTime}
              showHoverScale
            />
          </div>
        ) : (
          tagArticles.length === 0 && (
            <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border mb-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg">Geen artikels gevind vir "{tagName}" nie.</p>
              <Link to="/" className="inline-block mt-4 text-text-link-red dark:text-text-link-red font-bold hover:underline">
                Terug na tuisblad
              </Link>
            </div>
          )
        )}

        {/* Main Content Grid */}
        {tagArticles.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <div className="bg-white dark:bg-card p-4 border border-gray-100 dark:border-border h-full w-full flex flex-col">
                {paginatedArticles.map((article, index) => (
                  <div key={article.id}>
                    <ArticleCard 
                      id={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category}
                      image={article.imageUrl}
                      date={article.date}
                      author={article.author}
                      readTime={article.readTime}
                    />
                    {index === 3 && (
                      <div className="my-6">
                        <InFeedAd section="tag" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 pt-6 pb-20 border-t border-gray-200 dark:border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bladsy <span className="font-bold">{currentPage}</span> van <span className="font-bold">{totalPages}</span>
                    </p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold transition-colors ${
                          currentPage === 1
                            ? 'bg-gray-100 dark:bg-muted text-gray-400 dark:text-gray-500 cursor-not-allowed'
                            : 'bg-white dark:bg-card border-2 border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                      >
                        <ChevronLeft size={18} />
                        <span className="hidden sm:inline">Vorige</span>
                      </button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                              currentPage === pageNum
                                ? 'bg-primary text-white'
                                : 'bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary'
                            }`}
                          >
                            {pageNum}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold transition-colors ${
                          currentPage === totalPages
                            ? 'bg-gray-100 dark:bg-muted text-gray-400 dark:text-gray-500 cursor-not-allowed'
                            : 'bg-white dark:bg-card border-2 border-primary text-primary hover:bg-primary hover:text-white'
                        }`}
                      >
                        <span className="hidden sm:inline">Volgende</span>
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <aside className="space-y-6 w-full lg:w-[320px] shrink-0">
              <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-gray-100 dark:border-border">
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-3 border-b-2 border-primary dark:border-primary font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  <TrendingUp size={20} className="text-primary dark:text-primary" />
                  Gewild nou
                </h3>
                <div className="space-y-1">
                  {LATEST_NEWS.map((item) => (
                    <CompactArticleCard 
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      category={item.category}
                      date={item.time}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-lg shadow-sm p-6 text-white">
                <h3 className="text-xl font-normal mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  Bly ingelig
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Ontvang die jongste nuus direk in jou inkassie.
                </p>
                <Link 
                  to="/nuusbrief-inteken"
                  className="block w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
                >
                  Teken in op nuusbrief
                </Link>
              </div>

              <SidebarAds section="tag" variant="category" />
            </aside>
          </div>
        )}
      </div>
      
      <StickyMobileFooter section="tag" />
    </div>
  );
};