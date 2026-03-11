import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Clock, User, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { getArticlesBySponsor } from '../data/categoryArticles';
import { getSponsorBySlug } from '../data/sponsors';
import { LATEST_NEWS } from '../data/articles';
import { PageContainer } from '../components/common/PageContainer';
import { ArticleLink } from '../components/common/ArticleLink';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { SEO } from '../components/common/SEO';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { ArticleCardProps } from '../types';

const HeroArticle = ({ id, title, excerpt, category, image, date, author, readTime, sponsored, sponsorName, sponsorLogo }: ArticleCardProps) => (
  <ArticleLink id={id} title={title} className="block group mb-6">
    <div className="relative overflow-hidden">
      <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-200 dark:bg-muted">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {sponsored && sponsorLogo && (
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-sm w-16 h-16 flex items-center justify-center">
             <ImageWithFallback src={sponsorLogo} alt="Sponsor" className="w-full h-full object-contain" />
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
        <span className="inline-block bg-gray-600 text-white text-xs font-bold px-3 py-1 uppercase mb-2">
          Geborg
        </span>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-normal mb-2 leading-tight group-hover:underline transition-[text-decoration-color] font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
          {title}
        </h2>
        <p className="text-sm md:text-base text-gray-200 mb-3 line-clamp-2 max-w-3xl">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-300">
          <span className="flex items-center gap-1">
            <User size={12} />
            Deur {sponsorName}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {date}
          </span>
          <span>{readTime} lees</span>
        </div>
      </div>
    </div>
  </ArticleLink>
);

const ArticleCard = ({ id, title, excerpt, category, image, date, author, readTime, sponsored, sponsorName }: ArticleCardProps) => (
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
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-block bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 uppercase rounded">
            Geborg
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-normal text-brand-navy dark:text-foreground leading-tight sm:leading-normal group-hover:text-custom-primary dark:group-hover:text-primary transition-colors line-clamp-2 tracking-tight font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          {title}
        </h3>
        
        <p className="text-black dark:text-gray-300 text-sm sm:text-base leading-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-1.5 text-xs text-foreground dark:text-gray-400 mt-auto flex-wrap">
          <span>Deur</span>
          <span className="font-bold text-brand-navy dark:text-foreground">{sponsorName}</span>
          <span className="flex-1 min-w-fit">op {date}</span>
        </div>
      </div>
    </article>
  </ArticleLink>
);

const CompactArticleCard = ({ id, title, category, date }: { id: number; title: string; category: string; date: string }) => (
  <ArticleLink id={id} title={title} className="block group py-4 border-b border-gray-100 dark:border-border last:border-0 hover:bg-gray-50 dark:hover:bg-secondary transition-colors px-4 -mx-4">
    <div className="flex items-start gap-3">
      <span className="inline-block bg-gray-100 dark:bg-muted text-custom-primary dark:text-custom-primary text-[length:var(--text-small)] font-bold px-2 py-1 uppercase rounded shrink-0 mt-0.5">
        {category}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-normal text-sm text-brand-navy dark:text-foreground group-hover:text-custom-primary dark:group-hover:text-custom-primary transition-colors leading-snug mb-1 line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>
          {title}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
      </div>
    </div>
  </ArticleLink>
);

export const SponsorArchivePage = () => {
  const { slug: sponsorSlug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const ARTICLES_PER_PAGE = 12;
  
  // Get articles for the specific sponsor
  const sponsorArticles = getArticlesBySponsor(sponsorSlug || '');
  
  // Get sponsor details from centralized SPONSORS data, with article fallback
  const sponsorData = getSponsorBySlug(sponsorSlug || '');
  const firstArticle = sponsorArticles.length > 0 ? sponsorArticles[0] : null;
  const sponsorName = sponsorData?.name || firstArticle?.sponsorName || sponsorSlug;
  const sponsorLogo = sponsorData?.logoUrl || firstArticle?.sponsorLogo;
  const sponsorDescription = sponsorData?.description;
  const sponsorWebsite = sponsorData?.websiteUrl;

  // Split articles: first one is hero, rest are regular
  const [heroArticle, ...restArticles] = sponsorArticles;

  // Calculate pagination
  const totalPages = Math.ceil(restArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = restArticles.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, sponsorSlug]);

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO 
        title={`${sponsorName} - Geborgde inhoud`}
        description={`Lees die jongste artikels en nuus geborg deur ${sponsorName} op Die Papier.`}
        keywords={`geborg, ${sponsorName}, nuus, afrikaans, die papier`}
      />
      
      <LeaderboardAd section="sponsor" />
      
      <PageContainer 
        breadcrumbs={[
          { label: 'Geborgde inhoud', href: '#' },
          { label: sponsorName || 'Borg' }
        ]}
        noPadding
      />
      
      <div className="alignwide py-6">
        {/* Sponsor Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b border-gray-200 dark:border-border">
          <div className="flex items-center gap-4">
            {sponsorLogo && (
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white p-2 rounded border border-gray-200 dark:border-border shadow-sm flex items-center justify-center">
                <ImageWithFallback src={sponsorLogo} alt={sponsorName || "Sponsor"} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <span className="text-brand-red font-bold text-xs uppercase tracking-wide mb-1 block">
                Geborgde inhoud
              </span>
              <h1 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {sponsorName}
              </h1>
              {sponsorDescription && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-lg">{sponsorDescription}</p>
              )}
            </div>
          </div>
          {sponsorWebsite && (
            <a href={sponsorWebsite} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-red dark:text-primary hover:underline font-medium mt-3 md:mt-0">
              Besoek webwerf →
            </a>
          )}
        </div>

        {/* Hero Article */}
        {heroArticle ? (
          <HeroArticle 
            id={heroArticle.id}
            title={heroArticle.title}
            excerpt={heroArticle.excerpt}
            category={heroArticle.category}
            image={heroArticle.imageUrl}
            date={heroArticle.date}
            author={heroArticle.author}
            readTime={heroArticle.readTime}
            sponsored={heroArticle.sponsored}
            sponsorName={heroArticle.sponsorName}
            sponsorLogo={heroArticle.sponsorLogo}
          />
        ) : (
           <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border mb-8">
              <p className="text-gray-500 dark:text-gray-400 text-lg">Geen artikels gevind vir hierdie borg nie.</p>
              <Link to="/" className="inline-block mt-4 text-brand-red dark:text-primary font-bold hover:underline">
                Terug na tuisblad
              </Link>
            </div>
        )}

        {/* Main Content Grid */}
        {sponsorArticles.length > 0 && (
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
                      sponsored={article.sponsored}
                      sponsorName={article.sponsorName}
                    />
                    {index === 3 && (
                      <div className="my-6">
                        <InFeedAd section="sponsor" />
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
                            : 'bg-white dark:bg-card border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white'
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
                                ? 'bg-brand-red text-white'
                                : 'bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 hover:border-brand-red hover:text-brand-red'
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
                            : 'bg-white dark:bg-card border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white'
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
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 dark:border-border">
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-3 border-b-2 border-brand-red dark:border-primary font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  <TrendingUp size={20} className="text-brand-red dark:text-primary" />
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
                  className="block w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3 px-4 rounded-lg text-center transition-colors"
                >
                  Teken in op nuusbrief
                </Link>
              </div>

              <SidebarAds section="sponsor" variant="category" />
            </aside>
          </div>
        )}
      </div>
      
      <StickyMobileFooter section="sponsor" />
    </div>
  );
};