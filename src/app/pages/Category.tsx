import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { User, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { getArticlesByCategory, getFeaturedArticles } from '../data/categoryArticles';
import { LATEST_NEWS } from '../data/articles';
import { ArticleLink } from '../components/common/ArticleLink';
import { ArticleCardProps } from '../types';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/common/SEO';
import { CategoryGridSkeleton, HeroArticleSkeleton } from '../components/common/Skeletons';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { SubsectionFilter } from '../components/category/SubsectionFilter';
import { PageContainer } from '../components/common/PageContainer';
import { getCategorySlug } from '../utils/navigation';
import { injectCollectionPageSchema, cleanupCollectionPageSchema } from '../utils/structuredData';
import { getResponsiveProps } from '../utils/responsiveImage';
import { HeroSlideCard } from '../components/common/HeroSlideCard';
import { NewsCard } from '../components/home/NewsCard';

/* ── rooi rose Magazine Category Page ──────────────────────────────
 * Editorial design: Magazine grid layout with generous spacing
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Hero slider + 3-column masonry grid + sidebar
 * ────────────────────────────────────────────────────────────────── */

/** Hero slider for featured articles — falls back to single hero if ≤1 featured */
const HeroSlider = ({ articles: rawArticles }: { articles: ArticleCardProps[] }) => {
  // Filter out any falsy/undefined entries defensively
  const articles = rawArticles.filter((a): a is ArticleCardProps => a != null && a.id != null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Create a stable key from article IDs to detect real changes (not reference changes)
  const articlesKey = articles.map(a => a.id).join(',');

  // Reset slide index when articles array changes (e.g. category switch)
  useEffect(() => {
    setCurrent(0);
  }, [articlesKey]);

  const goTo = useCallback((index: number) => {
    setCurrent((index + articles.length) % articles.length);
  }, [articles.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || articles.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, isPaused, articles.length]);

  if (articles.length <= 1) {
    const a = articles[0];
    return a && a.id != null ? (
      <div className="relative mb-3 overflow-hidden rounded-lg md:h-[440px] shadow-sm dark:shadow-[var(--shadow-dark-200)]">
        <HeroSlideCard
          id={a.id} title={a.title} excerpt={a.excerpt}
          category={a.category} image={a.image} date={a.date}
          author={a.author} readTime={a.readTime} fillHeight
        />
      </div>
    ) : null;
  }

  // Safety clamp — protects against stale index during render before effect fires
  const safeIndex = current < articles.length ? current : 0;
  const slide = articles[safeIndex];

  if (!slide) return null;

  return (
    <div
      className="relative mb-3 group/slider overflow-hidden rounded-lg md:h-[440px] shadow-sm dark:shadow-[var(--shadow-dark-200)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <HeroSlideCard
        key={slide.id}
        id={slide.id} title={slide.title} excerpt={slide.excerpt}
        category={slide.category} image={slide.image} date={slide.date}
        author={slide.author} readTime={slide.readTime} fillHeight
      >
        {/* Navigation arrows — overlaid on image */}
        <button
          onClick={(e) => { e.preventDefault(); prev(); }}
          className="absolute left-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2"
          aria-label="Vorige artikel"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={(e) => { e.preventDefault(); next(); }}
          className="absolute right-3 bottom-3 w-10 h-10 rounded-md bg-black/50 text-white/80 flex items-center justify-center hover:bg-black/70 hover:text-white transition-colors backdrop-blur-sm z-10 p-2"
          aria-label="Volgende artikel"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {articles.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                idx === current
                  ? 'w-6 bg-brand-red'
                  : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Gaan na artikel ${idx + 1}`}
            />
          ))}
        </div>
      </HeroSlideCard>
    </div>
  );
};

const ArticleCard = ({ id, title, excerpt, category, image, date, author, readTime, sponsored, sponsorName, sponsorLogo }: ArticleCardProps) => (
  <ArticleLink id={id} title={title} className="block group">
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-5 border-b border-gray-300 dark:border-input last:border-b-0 hover:bg-gray-50/50 dark:hover:bg-muted/50 transition-colors relative px-[0px] py-[16px]">
      {/* Thumbnail - Square 185x185 on desktop (approx w-48), full width on mobile */}
      <div className="flex-shrink-0 w-full sm:w-48 h-60 sm:h-48 bg-gray-200 dark:bg-secondary overflow-hidden relative">
        <ImageWithFallback 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {sponsored && sponsorLogo && (
          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-tl shadow-sm w-8 h-8 flex items-center justify-center">
             <ImageWithFallback src={sponsorLogo} alt="Sponsor" className="w-full h-full object-contain" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-2.5">
        <div className="flex items-center gap-2 mb-1">
          {sponsored ? (
            <span className="inline-block bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 uppercase rounded">
              Geborg
            </span>
          ) : (
             <span className="hidden"></span>
          )}
        </div>

        {/* Title - 24px Roboto Serif SemiBold like NovaNews */}
        <h3
          className="text-xl sm:text-2xl font-normal text-contrast dark:text-foreground line-clamp-2 group-hover:text-brand-red dark:group-hover:text-primary transition-colors font-heading"
          style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}
        >
          {title}
        </h3>
        
        {/* Excerpt - 16px Inter Regular like NovaNews */}
        <p className="text-contrast dark:text-gray-300 text-sm sm:text-base leading-6 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        {/* Author and meta info */}
        <div className="flex items-center gap-1.5 text-xs text-contrast dark:text-gray-400 mt-auto flex-wrap">
          {sponsored ? (
             <>
               <span>Deur</span>
               <span className="font-bold text-brand-navy dark:text-foreground">{sponsorName}</span>
             </>
          ) : (
             <>
               <span>deur</span>
               <span className="font-bold text-brand-navy dark:text-foreground">{author}</span>
               <span>in</span>
               <span className="font-bold text-brand-navy dark:text-foreground">{category}</span>
               <span className="flex-1 min-w-fit">op {date}</span>
             </>
          )}
        </div>
      </div>
    </article>
  </ArticleLink>
);

const CompactArticleCard = ({ id, title, category, date }: { id: number; title: string; category: string; date: string }) => (
  <ArticleLink id={id} title={title} className="block group py-4 border-b border-gray-100 dark:border-secondary last:border-0 hover:bg-gray-50 dark:hover:bg-secondary transition-colors px-4 -mx-4">
    <div className="flex items-start gap-3">
      <span className="inline-block bg-gray-100 dark:bg-secondary text-brand-red dark:text-primary text-[10px] font-bold px-2 py-1 uppercase rounded shrink-0 mt-0.5">
        {category}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="font-normal text-sm text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-primary transition-colors leading-snug mb-1 line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          {title}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">{date}</span>
      </div>
    </div>
  </ArticleLink>
);

const PopularArticleCard = ({ id, title, category, time }: { id: number; title: string; category: string; time: string }) => (
  <ArticleLink id={id} title={title} className="block group py-3 border-b border-gray-100 dark:border-secondary last:border-0 hover:bg-gray-50 dark:hover:bg-secondary transition-colors">
    <h4 className="font-normal text-sm text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-primary transition-colors leading-snug mb-1 line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
      {title}
    </h4>
    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
      <span className="text-[10px] font-bold text-brand-red dark:text-primary uppercase">{category}</span>
      <span>•</span>
      <span>{time}</span>
    </div>
  </ArticleLink>
);

export const CategoryPage = ({ categoryName = "Nuus" }: { categoryName?: string }) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ARTICLES_PER_PAGE = 12;
  
  // Get articles for the specific category
  const categoryArticles = getArticlesByCategory(categoryName);
  
  // Featured articles for the hero slider
  const featuredArticles = getFeaturedArticles(categoryName);
  
  // Build hero slides: use featured articles if any, otherwise use first article
  const heroSlides: ArticleCardProps[] = (featuredArticles.length > 0
    ? featuredArticles.map(a => ({
        id: a.id, title: a.title, excerpt: a.excerpt,
        category: a.category, image: a.imageUrl, date: a.date,
        author: a.author, readTime: a.readTime, featured: true,
        sponsored: a.sponsored, sponsorName: a.sponsorName,
        sponsorLogo: a.sponsorLogo,
      }))
    : categoryArticles.length > 0 && categoryArticles[0]
    ? [{
        id: categoryArticles[0].id, title: categoryArticles[0].title,
        excerpt: categoryArticles[0].excerpt, category: categoryArticles[0].category,
        image: categoryArticles[0].imageUrl, date: categoryArticles[0].date,
        author: categoryArticles[0].author, readTime: categoryArticles[0].readTime,
        sponsored: categoryArticles[0].sponsored, sponsorName: categoryArticles[0].sponsorName,
        sponsorLogo: categoryArticles[0].sponsorLogo,
      }]
    : []
  ).filter(a => a != null && a.id != null);
  
  // Rest articles: everything not in the hero slider
  const heroIds = new Set(heroSlides.map(a => a.id));
  const restArticles = categoryArticles.filter(a => a != null && a.id != null && !heroIds.has(a.id));

  // Calculate pagination
  const totalPages = Math.ceil(restArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = restArticles.slice(startIndex, endIndex);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    /* ── rooi rose Magazine Categories ──────────────────────────────
     * Updated for lifestyle magazine positioning (Phase 0)
     * ──────────────────────────────────────────────────────────────── */
    'Kos': 'Heerlike resepte, kook-wenke en kuliniese inspirasie vir elke geleentheid.',
    'Mode': 'Die nuutste modeneigings, stylwenke en mode-inspirasie vir elke seisoen.',
    'Skoonheid': 'Skoonheidsprodukte, velsorg, grimering en skoonheidsroetines vir die moderne vrou.',
    'Gesondheid': 'Gesonde leefstyl, oefeningswenke, voeding en welstandsadvies.',
    'Bekendes': 'Eksklusiewe onderhoude, profiele en stories van Suid-Afrikaanse bekendes.',
    'Leefstyl': 'Kuns, kultuur, kos en alles wat die lewe lekker maak.',
    'Jou lewe': 'Werk-lewe balans, finansiële beplanning, verhoudings en persoonlike groei.',
    'Ontspanning': 'Resensies, reis-idees, boeke, films en vermaak vir die hele gesin.',
    'Wen': 'Kompetisies, pryse en wenners — neem deel en wen groot!',
    'Rooiwarm wenners': 'Sien wie onlangs groot gewen het in ons Rooiwarm-kompetisies.',
    
    /* Legacy categories (redirected to homepage) */
    'Nuus': 'Die jongste plaaslike en internasionale nuus.',
    'Skole': 'Opvoeding, skoolgebeure en prestasies van ons leerlinge.',
    'Sport': 'Al die aksie op en af van die veld.',
    'Sake': 'Alle verwikkelings op die sakefront wat vir jou saak maak.',
    'Dink': 'Ontledings van die sake van die dag, met \'n persoonlike aanslag',
    'NetNuus': 'Tegnologie, digitale tendense en aanlyn nuus.',
    'Skole rugby': 'Skolerugby wedstryde, uitslae en nuus van plaaslike skole.',
    'Kompetisies': 'Kompetisies, pryse en wenners — neem deel en wen!',
  };

  // Capitalize the category name for breadcrumbs
  const capitalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  
  // Check if this is a premium section
  const isPremium = categoryName === 'Sake' || categoryName === 'Dink';

  // Inject structured data
  useEffect(() => {
    const categorySlug = getCategorySlug(categoryName);
    injectCollectionPageSchema({
      name: categoryName,
      description: categoryDescriptions[categoryName] || `Lees die jongste ${categoryName.toLowerCase()} nuus en artikels op rooi rose.`,
      url: `https://diepapier.co.za/${categorySlug}`,
      articles: categoryArticles.filter(a => a != null && a.id != null).map(article => ({
        id: article.id,
        title: article.title,
        imageUrl: article.imageUrl,
        date: article.date,
        author: article.author,
      })),
    });
    return () => cleanupCollectionPageSchema();
    // eslint-disable-next-line react-hooks/exhaustive-deps — categoryArticles is derived from categoryName; including it would cause object-identity churn
  }, [categoryName, currentPage]);

  const canonicalUrl = `https://diepapier.co.za/${getCategorySlug(categoryName)}`;

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen w-full px-[0px] pt-[0px] pb-[60px]">
      <SEO 
        title={`${categoryName} | rooi rose`}
        description={categoryDescriptions[categoryName] || `Lees die jongste ${categoryName.toLowerCase()} artikels op rooi rose.`}
        keywords={`${categoryName.toLowerCase()}, rooi rose, leefstyl, afrikaans, tydskrif, suid-afrika`}
        canonical={canonicalUrl}
      />
      
      {/* Header Leaderboard Ad */}
      <LeaderboardAd section={categoryName.toLowerCase()} />
      
      <PageContainer breadcrumbs={[{ label: capitalizedCategory }]}>
        {/* Category Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1
              className="font-display font-normal text-[var(--contrast)] dark:text-foreground uppercase tracking-[0.15em] text-4xl md:text-5xl mb-3"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
            >
              {categoryName}
            </h1>
            <p 
              className="text-[var(--muted-foreground)] text-base md:text-lg mb-6 max-w-[680px]"
              style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
            >
              {categoryDescriptions[categoryName] || `Die jongste ${categoryName.toLowerCase()} nuus en verhale.`}
            </p>
          </div>
        </div>

        {/* Subsection Filters */}
        <SubsectionFilter category={categoryName} />

        {/* Hero Slider — featured articles or single hero */}
        {heroSlides.length > 0 ? (
          <HeroSlider articles={heroSlides} />
        ) : (
          <HeroArticleSkeleton />
        )}

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Article Grid - Magazine 3-column layout */}
          <div className="flex-1 min-w-0">
            {/* Magazine Grid - 3 columns with generous spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
              {paginatedArticles.filter(a => a != null && a.id != null).map((article, index) => (
                <React.Fragment key={article.id}>
                  <NewsCard 
                    article={{
                      id: article.id,
                      title: article.title,
                      excerpt: article.excerpt,
                      category: article.category,
                      imageUrl: article.imageUrl,
                      date: article.date,
                      time: article.date,
                      author: article.author,
                      readTime: article.readTime,
                      tags: article.tags || [article.category],
                      sponsored: article.sponsored,
                      sponsorName: article.sponsorName,
                      sponsorLogo: article.sponsorLogo,
                    }}
                    variant="compact"
                  />
                  {/* Mobile In-Feed Ad after every 6 articles */}
                  {(index + 1) % 6 === 0 && index < paginatedArticles.length - 1 && (
                    <div className="col-span-full my-4">
                      <InFeedAd section={categoryName.toLowerCase()} premium={isPremium} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 border-t border-gray-200 dark:border-border flex flex-col sm:flex-row items-center justify-between gap-4 px-[0px] py-[32px]">
                {/* Page Info */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bladsy <span className="font-bold">{currentPage}</span> van <span className="font-bold">{totalPages}</span>
                  <span className="mx-2">•</span>
                  Totaal: <span className="font-bold">{restArticles.length}</span> artikels
                </p>

                {/* Pagination Controls */}
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 dark:bg-muted text-gray-400 cursor-not-allowed'
                        : 'bg-white dark:bg-card border-2 border-brand-red dark:border-primary text-brand-red dark:text-primary hover:bg-brand-red hover:text-white'
                    }`}
                  >
                    <ChevronLeft size={18} />
                    <span className="hidden sm:inline">Vorige</span>
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
                      // Show first page, last page, current page, and pages around current
                      const showPage = 
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

                      // Show ellipsis
                      const showEllipsisBefore = pageNum === currentPage - 2 && currentPage > 3;
                      const showEllipsisAfter = pageNum === currentPage + 2 && currentPage < totalPages - 2;

                      if (showEllipsisBefore || showEllipsisAfter) {
                        return (
                          <span key={pageNum} className="px-2 text-gray-400">...</span>
                        );
                      }

                      if (!showPage) return null;

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                            currentPage === pageNum
                              ? 'bg-brand-red text-white'
                              : 'bg-white dark:bg-card border border-gray-200 dark:border-border text-gray-700 dark:text-gray-300 hover:border-brand-red dark:hover:border-primary hover:text-brand-red dark:hover:text-primary'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg font-bold transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-100 dark:bg-muted text-gray-400 cursor-not-allowed'
                        : 'bg-white dark:bg-card border-2 border-brand-red dark:border-primary text-brand-red dark:text-primary hover:bg-brand-red hover:text-white'
                    }`}
                  >
                    <span className="hidden sm:inline">Volgende</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 w-full lg:w-[320px] shrink-0">
            {/* Latest from this category */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 border border-gray-100 dark:border-border">
              <h3
                className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-3 border-b-2 border-brand-red dark:border-primary font-heading"
                style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
              >
                Jongste in {categoryName}
              </h3>
              <div className="space-y-1">
                {restArticles.slice(0, 4).map((article) => (
                  <CompactArticleCard 
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    category={article.category}
                    date={article.date}
                  />
                ))}
              </div>
            </div>

            {/* Popular/Trending */}
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 border border-gray-200 dark:border-border">
              <h3
                className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-3 border-b-2 border-brand-red dark:border-primary font-heading flex items-center gap-2"
                style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
              >
                <TrendingUp size={20} className="text-brand-red dark:text-primary" />
                Gewild nou
              </h3>
              <div className="space-y-1">
                {LATEST_NEWS.map((item) => (
                  <PopularArticleCard 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    category={item.category}
                    time={item.time}
                  />
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-lg shadow-sm p-6 text-white">
              <h3
                className="text-xl font-normal mb-3 font-heading"
                style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
              >
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

            {/* Sidebar Ads */}
            <SidebarAds 
              section={categoryName.toLowerCase()} 
              premium={isPremium}
              variant="category"
            />
          </aside>
        </div>

        {/* Empty State */}
        {categoryArticles.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Geen artikels beskikbaar vir hierdie kategorie nie.</p>
            <Link to="/" className="inline-block mt-4 text-brand-red dark:text-text-link-red font-bold hover:underline">
              Terug na tuisblad
            </Link>
          </div>
        )}
      </PageContainer>
      
      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section={categoryName.toLowerCase()} />
    </div>
  );
};

export default CategoryPage;