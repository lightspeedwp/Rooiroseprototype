import React from 'react';
import { ArrowRight, Facebook, Twitter, Linkedin, MessageCircle, Tag, ExternalLink, Info, Clock, Eye, Home, ChevronRight } from 'lucide-react';
import { useParams, Link, Navigate } from 'react-router';
import { toast } from 'sonner';
import { copyToClipboard } from '../utils/clipboard';
import { PageContainer } from '../components/common/PageContainer';
import { getArticleById, getArticlesByCategory } from '../data/categoryArticles';
import { getArticleContent } from '../data/articleContent';
import { getIdFromSlug } from '../utils/slugify';
import { slugify } from '../utils/slugify';
import { getCategorySlug } from '../utils/navigation';
import { ArticleLink } from '../components/common/ArticleLink';
import { AuthorLink } from '../components/common/AuthorLink';
import { SEO, generateArticleStructuredData } from '../components/common/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CommentsSection } from '../components/patterns/CommentsSection';
import { LeaderboardAd, SidebarAds, StickyMobileFooter } from '../components/ads';
import { injectArticleAds } from '../utils/injectArticleAds';
import { RelatedContent } from '../components/common/RelatedContent';
import { SocialShare } from '../components/common/SocialShare';
import { NewsCard } from '../components/home/NewsCard';
import { EVENTS } from '../data/events';
import { LATEST_EDITIONS } from '../data/eEditions';
import { getAllSponsoredArticles } from '../data/categoryArticles';

/* ── rooi rose Magazine Article Page ──────────────────────────────
 * Editorial design: Full-bleed hero, centered narrow column, visual storytelling
 * Typography: Playfair Display SC headings, Karla body text, drop caps
 * Layout: Hero image → Centered content → Pull quotes → Related grid
 * Features: Full-width images, generous white space, magazine spacing
 * ────────────────────────────────────────────────────────────────── */

export const ArticlePage = () => {
  const { slug } = useParams();
  
  // Extract article ID from slug
  const articleId = slug ? getIdFromSlug(slug) : null;
  
  // Get article data
  const articleData = articleId ? getArticleById(articleId) : null;
  
  // If no article found, redirect to home
  if (!articleData) {
    return <Navigate to="/" replace />;
  }
  
  // Get full article content
  const fullContent = getArticleContent(articleData.id);
  
  // Check if premium section
  const isPremium = articleData.category === 'Sake' || articleData.category === 'Opinie';

  // Generate structured data for SEO
  React.useEffect(() => {
    if (articleData) {
      generateArticleStructuredData({
        title: articleData.title,
        description: articleData.excerpt,
        author: articleData.author,
        publishedDate: articleData.date,
        imageUrl: articleData.imageUrl,
        category: articleData.category,
      });
    }
    // Clean up article JSON-LD when navigating away
    return () => {
      const scriptTag = document.getElementById('ld-json-article');
      if (scriptTag) scriptTag.remove();
    };
  }, [articleData]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = articleData.title;
    
    switch(platform) {
      case 'Facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'Twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'LinkedIn':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'WhatsApp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
      case 'Klipbord':
        copyToClipboard(url);
        toast.success('Skakel gekopieer na klipbord!');
        return;
    }
    toast.info(`Gedeel op ${platform}`);
  };

  const handlePrint = () => {
    window.print();
    toast.info('Druk venster geopen');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to subscribe page or show success
    window.location.href = '/subscribe/e-edition';
  };

  // Sponsored content helpers
  const isSponsored = (articleData as any).sponsored === true;
  const sponsorName = (articleData as any).sponsorName || '';
  const sponsorSlug = (articleData as any).sponsorSlug || '';
  const sponsorLogo = (articleData as any).sponsorLogo || '';
  const sponsorLink = (articleData as any).sponsorLink || '';

  // Get other articles from same sponsor
  const sponsorArticles = React.useMemo(() => {
    if (!isSponsored || !sponsorSlug) return [];
    return getAllSponsoredArticles()
      .filter(a => a.sponsorSlug === sponsorSlug && a.id !== articleData.id)
      .slice(0, 3);
  }, [isSponsored, sponsorSlug, articleData.id]);

  // Get related articles from the same category
  const relatedArticles = React.useMemo(() => {
    const categoryArticles = getArticlesByCategory(articleData.category) || [];
    // Filter out current article and get first 3
    return categoryArticles.filter((a: any) => a.id !== articleData.id).slice(0, 3);
  }, [articleData.category, articleData.id]);

  // Inject ads into article content
  const contentWithAds = React.useMemo(() => {
    return injectArticleAds(fullContent, articleData.category.toLowerCase(), articleData.id);
  }, [fullContent, articleData.category, articleData.id]);

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO 
        title={articleData.title}
        description={articleData.excerpt}
        image={articleData.imageUrl}
        author={articleData.author}
        type="article"
        publishedTime={articleData.date}
        canonical={`https://rooirose.co.za/artikel/${slug}`}
      />
      
      {/* Header Leaderboard Ad */}
      <LeaderboardAd section={articleData.category.toLowerCase()} />
      
      {/* Breadcrumbs - Above hero */}
      <div className="alignwide pt-4 pb-0">
        <nav className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumbs">
          <Link to="/" className="flex items-center gap-1.5 hover:text-brand-red transition-colors" aria-label="Terug na tuisblad">
            <Home size={16} className="shrink-0" />
            <span>Tuis</span>
          </Link>
          <ChevronRight size={14} className="text-gray-400 dark:text-gray-500 shrink-0" />
          <Link to={`/${getCategorySlug(articleData.category)}`} className="hover:text-brand-red transition-colors capitalize">
            {articleData.category}
          </Link>
        </nav>
      </div>
      
      {/* Full-Bleed Hero Image */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden bg-gray-900">
        <ImageWithFallback 
          src={articleData.imageUrl} 
          alt={articleData.title} 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Hero Content - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-[24px]">
          <div className="alignwide">
            <div className="max-w-4xl">
              {/* Category Badge */}
              <Link 
                to={`/${getCategorySlug(articleData.category)}`}
                className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-4 py-2 mb-4 hover:bg-brand-red-hover transition-colors"
              >
                {articleData.category}
              </Link>
              
              {/* Title */}
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-normal text-white has-brand-serif-font-family leading-tight mx-[0px] mt-[0px] mb-[4px]"
                style={{
                  fontVariationSettings: "var(--fvs-h1)",
                  letterSpacing: '-0.02em',
                }}
              >
                {articleData.title}
              </h1>
              
              {/* Excerpt */}
              <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed max-w-3xl">
                {articleData.excerpt}
              </p>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                {isSponsored ? (
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold uppercase">Geborg</span>
                    <span>Deur</span>
                    <Link to={`/geborg/${sponsorSlug}`} className="font-bold text-white hover:text-brand-red transition-colors flex items-center gap-1">
                      {sponsorName}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <span className="font-bold text-white">
                      <AuthorLink authorName={articleData.author} className="hover:text-brand-red transition-colors" />
                    </span>
                    <span>•</span>
                  </>
                )}
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{articleData.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>5 min lees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Article Content - Centered Column */}
      <div className="alignwide py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          {/* Sponsor Disclosure */}
          {isSponsored && (
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-card border-l-4 border-gray-400 dark:border-border p-5 mb-10">
              <Info size={18} className="text-gray-400 dark:text-gray-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {sponsorLogo && (
                    <div className="w-10 h-10 rounded bg-white dark:bg-card border border-gray-200 dark:border-border p-1.5 flex items-center justify-center shrink-0">
                      <ImageWithFallback src={sponsorLogo} alt={sponsorName} className="w-full h-full object-contain" />
                    </div>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong className="text-brand-navy dark:text-foreground">Geborgde inhoud.</strong>
                    {' '}Hierdie artikel is geskep in samewerking met {sponsorName}.
                  </p>
                </div>
                {sponsorLink && (
                  <a href={sponsorLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-brand-red font-bold hover:underline">
                    Besoek {sponsorName} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Social Share - Sticky on desktop */}
          <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => handleShare('Facebook')} 
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-full hover:bg-brand-red hover:text-white transition-all hover:scale-110" 
                title="Deel op Facebook"
              >
                <Facebook size={18} />
              </button>
              <button 
                onClick={() => handleShare('Twitter')} 
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-full hover:bg-brand-red hover:text-white transition-all hover:scale-110" 
                title="Deel op X"
              >
                <Twitter size={18} />
              </button>
              <button 
                onClick={() => handleShare('WhatsApp')} 
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-full hover:bg-brand-red hover:text-white transition-all hover:scale-110" 
                title="Deel op WhatsApp"
              >
                <MessageCircle size={18} />
              </button>
              <button 
                onClick={() => handleShare('LinkedIn')} 
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-full hover:bg-brand-red hover:text-white transition-all hover:scale-110" 
                title="Deel op LinkedIn"
              >
                <Linkedin size={18} />
              </button>
              <div className="h-px bg-gray-300 dark:bg-border my-2" />
              <button 
                onClick={handlePrint}
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-full hover:bg-brand-navy hover:text-white transition-all hover:scale-110" 
                title="Druk"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <article className="article-content article-editorial prose prose-lg dark:prose-invert max-w-none">
            {contentWithAds}
          </article>

          {/* Tags */}
          {articleData.tags && articleData.tags.length > 0 && (
            <div className="flex items-start gap-3 flex-wrap mt-12 pt-8 border-t border-gray-200 dark:border-border">
              <Tag size={18} className="text-gray-400 dark:text-gray-500 mt-2 shrink-0" />
              <div className="flex flex-wrap gap-2">
                {articleData.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/onderwerp/${slugify(tag)}`}
                    className="inline-block bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-300 text-sm font-bold px-4 py-2 rounded-full hover:bg-brand-red hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Social Share */}
          <div className="lg:hidden mt-8 pt-8 border-t border-gray-200 dark:border-border">
            <p className="text-sm font-bold text-brand-navy dark:text-foreground mb-4">Deel hierdie artikel:</p>
            <div className="flex gap-3">
              <button 
                onClick={() => handleShare('Facebook')} 
                className="flex-1 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-lg hover:bg-brand-red hover:text-white transition-colors" 
                title="Deel op Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => handleShare('Twitter')} 
                className="flex-1 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-lg hover:bg-brand-red hover:text-white transition-colors" 
                title="Deel op X"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleShare('WhatsApp')} 
                className="flex-1 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-lg hover:bg-brand-red hover:text-white transition-colors" 
                title="Deel op WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
              <button 
                onClick={() => handleShare('LinkedIn')} 
                className="flex-1 h-12 flex items-center justify-center bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-400 rounded-lg hover:bg-brand-red hover:text-white transition-colors" 
                title="Deel op LinkedIn"
              >
                <Linkedin size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio Section */}
      {!isSponsored && (
        <div className="bg-gray-50 dark:bg-card border-y border-gray-200 dark:border-border py-12">
          <div className="alignwide">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-start gap-6">
                {/* Author Avatar */}
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-muted shrink-0 flex items-center justify-center text-3xl font-bold text-brand-navy dark:text-foreground has-brand-serif-font-family">
                  {articleData.author.charAt(0)}
                </div>
                {/* Author Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-2 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
                    <AuthorLink authorName={articleData.author} className="hover:text-brand-red transition-colors" />
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {articleData.author} is 'n joernalis by rooi rose met 'n fokus op {articleData.category.toLowerCase()}. 
                    Volg vir meer artikels oor leefstyl, kos, en die nuutste tendense.
                  </p>
                  <Link
                    to={`/skrywer/${articleData.author.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-red hover:underline"
                  >
                    Sien alle artikels deur {articleData.author}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comments Section */}
      <div className="alignwide py-12">
        <div className="max-w-3xl mx-auto">
          <CommentsSection articleId={articleData.id} />
        </div>
      </div>

      {/* Related Articles - Large Visual Grid */}
      {relatedArticles.length > 0 && (
        <div className="bg-white dark:bg-background border-t border-gray-200 dark:border-border py-16">
          <div className="alignwide">
            <h2
              className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground mb-12 has-brand-serif-font-family"
              style={{ fontVariationSettings: "var(--fvs-h2)" }}
            >
              Meer artikels oor {articleData.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <ArticleLink
                  key={relatedArticle.id} 
                  id={relatedArticle.id}
                  title={relatedArticle.title}
                  className="block group"
                >
                  <article className="flex flex-col">
                    {/* Large Thumbnail */}
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-200 dark:bg-muted mb-5">
                      <ImageWithFallback 
                        src={relatedArticle.imageUrl} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <span className="text-xs text-brand-red font-bold uppercase tracking-wider block mb-3">
                        {relatedArticle.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-normal text-brand-navy dark:text-foreground mb-3 leading-tight group-hover:text-brand-red transition-colors has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base mb-4 leading-relaxed line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-bold">{relatedArticle.author}</span>
                        <span>•</span>
                        <span>{relatedArticle.date}</span>
                      </div>
                    </div>
                  </article>
                </ArticleLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sponsor Articles Section */}
      {isSponsored && sponsorArticles.length > 0 && (
        <div className="bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-border py-16">
          <div className="alignwide">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                {sponsorLogo && (
                  <div className="w-16 h-16 rounded-lg bg-white dark:bg-card border border-gray-200 dark:border-border p-2 flex items-center justify-center shrink-0">
                    <ImageWithFallback src={sponsorLogo} alt={sponsorName} className="w-full h-full object-contain" />
                  </div>
                )}
                <h2
                  className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family"
                  style={{ fontVariationSettings: "var(--fvs-h2)" }}
                >
                  Meer van {sponsorName}
                </h2>
              </div>
              <Link
                to={`/geborg/${sponsorSlug}`}
                className="text-sm text-brand-red font-bold hover:underline flex items-center gap-2"
              >
                Sien alles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorArticles.map((sa) => (
                <ArticleLink key={sa.id} id={sa.id} title={sa.title} className="block group">
                  <article className="flex flex-col">
                    <div className="relative aspect-[3/2] overflow-hidden bg-gray-200 dark:bg-muted mb-5">
                      <ImageWithFallback
                        src={sa.imageUrl}
                        alt={sa.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-gray-600 text-white text-xs font-bold px-3 py-1.5 rounded uppercase">
                        Geborg
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 leading-tight group-hover:text-brand-red transition-colors has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
                        {sa.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-2 mb-3">
                        {sa.excerpt}
                      </p>
                      <span className="text-sm text-gray-400 dark:text-gray-500">{sa.date}</span>
                    </div>
                  </article>
                </ArticleLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup - Full Width */}
      <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white py-16">
        <div className="alignwide">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h2)" }}>
              Bly op hoogte met rooi rose
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Ontvang die jongste artikels oor kos, mode, skoonheid, en meer direk in jou e-posbus.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Jou e-posadres" 
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 border-none focus:ring-2 focus:ring-brand-red text-base"
                required
              />
              <button className="bg-brand-red hover:bg-brand-red-hover text-white font-bold py-4 px-8 rounded-lg transition-colors whitespace-nowrap">
                Teken in
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section={articleData.category.toLowerCase()} />
    </div>
  );
};

export default ArticlePage;