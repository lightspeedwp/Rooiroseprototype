import React from 'react';
import { ArrowRight, Facebook, Twitter, Linkedin, MessageCircle, Tag, ExternalLink, Info } from 'lucide-react';
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
 * Editorial design: Single-column magazine article template
 * Typography: Playfair Display SC headings, Karla body text
 * Layout: Hero image → Editorial typography → Related articles grid
 * Features: Pull quotes, author bio, magazine spacing
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
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO 
        title={articleData.title}
        description={articleData.excerpt}
        image={articleData.imageUrl}
        author={articleData.author}
        type="article"
        publishedTime={articleData.date}
        canonical={`https://diepapier.co.za/artikel/${slug}`}
      />
      
      {/* Header Leaderboard Ad */}
      <LeaderboardAd section={articleData.category.toLowerCase()} />
      
      <PageContainer 
        breadcrumbs={[
          { label: articleData.category, href: `/${getCategorySlug(articleData.category)}` },
          { label: articleData.title }
        ]}
        noPadding
      />
      
      <div className="alignwide pt-6 pb-16">
        {/* Hero Section - NovaNews Style: Title LEFT, Image RIGHT */}
        <div className="bg-white dark:bg-background border-b border-gray-300 dark:border-border p-[32px] mx-[0px] mt-[0px] mb-[32px]">
          <div className="w-full mx-auto">
            <div className="flex flex-col lg:flex-row gap-5 items-start">
              {/* LEFT COLUMN: Title, Meta, Social */}
              <div className="flex-1 flex flex-col justify-between min-h-[400px]">
                {/* Title and Meta */}
                <div className="flex flex-col gap-5 pt-7">
                  <h1
                    className="text-3xl md:text-4xl font-normal text-foreground font-heading tracking-tight"
                    style={{
                      fontVariationSettings: "var(--fvs-h1)",
                      lineHeight: 'var(--lh-h1)',
                      letterSpacing: 'var(--ls-h1)',
                    }}
                  >
                    {articleData.title}
                  </h1>
                  
                  {/* Meta Info */}
                  <div className="flex flex-col gap-2.5">
                    {/* Author and Date */}
                    <div className="flex items-center gap-1.5 text-xs text-foreground dark:text-gray-300">
                      {isSponsored ? (
                         <>
                           <span className="font-bold text-white bg-gray-600 px-2 py-0.5 rounded uppercase text-[10px]">Geborg</span>
                           <span>Deur</span>
                           <Link to={`/geborg/${sponsorSlug}`} className="font-bold text-brand-navy dark:text-foreground hover:underline flex items-center gap-1">
                             {sponsorName}
                             <ArrowRight size={10} />
                           </Link>
                         </>
                      ) : (
                        <>
                          <span>deur</span>
                          <span className="font-bold text-brand-navy dark:text-foreground">
                            <AuthorLink authorName={articleData.author} />
                          </span>
                          <span>in</span>
                          <Link to={`/${getCategorySlug(articleData.category)}`} className="font-bold text-brand-navy dark:text-foreground hover:underline">
                            {articleData.category}
                          </Link>
                        </>
                      )}
                      <span className="flex-1">op {articleData.date}</span>
                    </div>
                    
                    {/* Last Updated */}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Laas opgedateer op {articleData.date}
                    </p>
                  </div>
                </div>

                {/* Overview Box - Excerpt */}
                <p className="text-xl leading-[30px] dark:text-gray-300 py-5">
                  {articleData.excerpt}
                </p>
                
                {/* Social Sharing - NovaNews circular style at bottom */}
                <div className="flex items-center gap-2.5 mt-auto">
                  <span className="font-medium text-base text-foreground dark:text-foreground">Deel hierdie artikel:</span>
                  <div className="flex gap-2.5">
                    <button 
                      onClick={() => handleShare('Facebook')} 
                      className="w-10 h-10 flex items-center justify-center bg-brand-navy dark:bg-muted text-white rounded-full hover:bg-brand-red transition-colors" 
                      title="Deel op Facebook"
                    >
                      <Facebook size={20} />
                    </button>
                    <button 
                      onClick={() => handleShare('Twitter')} 
                      className="w-10 h-10 flex items-center justify-center bg-brand-navy dark:bg-muted text-white rounded-full hover:bg-brand-red transition-colors" 
                      title="Deel op X"
                    >
                      <Twitter size={20} />
                    </button>
                    <button 
                      onClick={() => handleShare('WhatsApp')} 
                      className="w-10 h-10 flex items-center justify-center bg-brand-navy dark:bg-muted text-white rounded-full hover:bg-brand-red transition-colors" 
                      title="Deel op WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </button>
                    <button 
                      onClick={() => handleShare('LinkedIn')} 
                      className="w-10 h-10 flex items-center justify-center bg-brand-navy dark:bg-muted text-white rounded-full hover:bg-brand-red transition-colors" 
                      title="Deel via e-pos"
                    >
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* RIGHT COLUMN: Featured Image - 400x400 square */}
              <div className="w-full lg:w-[400px] h-[300px] lg:h-[400px] flex-shrink-0 relative overflow-hidden bg-gray-200 dark:bg-muted">
                <ImageWithFallback 
                  src={articleData.imageUrl} 
                  alt={articleData.title} 
                  className="w-full h-full object-cover"
                />
                {/* Image Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-brand-navy p-2.5">
                  <p className="text-white text-sm font-medium leading-6">
                    {articleData.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Content + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Article Content */}
          <article className="flex-1 min-w-0">
            {/* Sponsor Disclosure Banner */}
            {isSponsored && (
              <div className="flex items-start gap-3 bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-lg p-4 mb-5">
                <Info size={16} className="text-gray-400 dark:text-gray-500 shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    {sponsorLogo && (
                      <div className="w-8 h-8 rounded bg-white dark:bg-card border border-gray-200 dark:border-border p-1 flex items-center justify-center shrink-0">
                        <ImageWithFallback src={sponsorLogo} alt={sponsorName} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Hierdie is geborgde inhoud, geskep in samewerking met <strong className="text-brand-navy dark:text-foreground">{sponsorName}</strong>.
                      {sponsorLink && (
                        <>
                          {' '}
                          <a href={sponsorLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-brand-red hover:underline">
                            Besoek {sponsorName} <ExternalLink size={10} />
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Article Content with Injected Ads */}
            <div className="bg-white dark:bg-card p-6 md:p-8 rounded-lg shadow-[var(--wp--preset--shadow--200)] dark:shadow-[var(--shadow-dark-200)]"
              style={{ borderRadius: 'var(--wp--custom--border-radius--400)' }}
            >
              <div className="article-content">
                {contentWithAds}
              </div>

              {/* Bottom: Tags (left) + Social Share (right) */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-border">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  {/* Tags — left */}
                  {articleData.tags && articleData.tags.length > 0 && (
                    <div className="flex items-start gap-2 flex-wrap">
                      <Tag size={16} className="text-gray-400 dark:text-gray-500 mt-1.5 shrink-0" />
                      {articleData.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/onderwerp/${slugify(tag)}`}
                          className="inline-block bg-gray-100 dark:bg-muted text-brand-navy dark:text-gray-300 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-brand-red hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Social Share — right */}
                  <div className="sm:ml-auto shrink-0">
                    <SocialShare title={articleData.title} description={articleData.excerpt} />
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section — below content box, in main column */}
            <CommentsSection articleId={articleData.id} />
          </article>

          {/* Sidebar - Starts at same level as featured image */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            {/* Sidebar Ads */}
            <SidebarAds 
              section={articleData.category.toLowerCase()}
              articleId={String(articleData.id)}
              premium={isPremium}
              variant="article"
            />

            {/* Related Articles / Trending */}
            <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg p-6 shadow-sm dark:shadow-[var(--shadow-dark-200)]">
              <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 border-b border-brand-red pb-2 inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Verwante artikels
              </h3>
              <ul className="space-y-4">
                {relatedArticles.map((item, i) => (
                  <li key={i} className="group cursor-pointer">
                    <ArticleLink id={item.id} title={item.title} className="block">
                      <span className="text-xs text-brand-red font-bold uppercase block mb-1">{item.category}</span>
                      <h4 className="font-medium text-sm text-gray-800 dark:text-gray-300 group-hover:text-brand-red transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </ArticleLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Box */}
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light text-white p-6 rounded-lg shadow-sm">
              <h3 className="font-heading font-normal text-xl mb-2">Bly op hoogte</h3>
              <p className="text-sm text-gray-300 mb-4">Ontvang die jongste nuus direk in jou e-posbus.</p>
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Jou e-posadres" 
                  className="w-full px-4 py-2 rounded text-gray-900 border-none focus:ring-2 focus:ring-brand-red"
                  required
                />
                <button className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-2 px-4 rounded transition-colors">
                  Teken in
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="bg-white dark:bg-background border-t border-gray-200 dark:border-border py-8">
          <div className="alignwide">
            {/* V2: uppercase section label → Inter SemiBold H6 style */}
            <h2
              className="font-inter font-semibold text-brand-navy dark:text-foreground uppercase border-b-2 border-brand-red pb-2 inline-block mb-6"
              style={{ fontSize: 'var(--text-h6)', letterSpacing: 'var(--ls-h6)' }}
            >
              Verwante artikels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <ArticleLink
                  key={relatedArticle.id} 
                  id={relatedArticle.id}
                  title={relatedArticle.title}
                  className="block group"
                >
                  <article className="flex flex-col gap-3">
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-muted">
                      <ImageWithFallback 
                        src={relatedArticle.imageUrl} 
                        alt={relatedArticle.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <span className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 uppercase">
                        {relatedArticle.category}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-base font-normal text-brand-navy dark:text-foreground mb-2 leading-tight group-hover:text-brand-red transition-colors line-clamp-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{relatedArticle.author}</span>
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

      {/* Meer van [Sponsor] Section — shows other articles from the same sponsor */}
      {isSponsored && sponsorArticles.length > 0 && (
        <div className="bg-gray-50 dark:bg-background border-t border-gray-200 dark:border-border py-8">
          <div className="alignwide">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {sponsorLogo && (
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-card border border-gray-200 dark:border-border p-1.5 flex items-center justify-center shrink-0">
                    <ImageWithFallback src={sponsorLogo} alt={sponsorName} className="w-full h-full object-contain" />
                  </div>
                )}
                <h2
                  className="font-normal text-brand-navy dark:text-foreground font-heading"
                  style={{
                    fontVariationSettings: "var(--fvs-h2)",
                    lineHeight: 'var(--lh-h2)',
                    letterSpacing: 'var(--ls-h2)',
                    fontSize: 'var(--text-h2)',
                  }}
                >
                  Meer van {sponsorName}
                </h2>
              </div>
              <Link
                to={`/geborg/${sponsorSlug}`}
                className="text-sm text-brand-red font-bold hover:underline flex items-center gap-1"
              >
                Sien alles <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sponsorArticles.map((sa) => (
                <ArticleLink key={sa.id} id={sa.id} title={sa.title} className="block group">
                  <article className="flex flex-col gap-3">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-muted rounded-lg">
                      <ImageWithFallback
                        src={sa.imageUrl}
                        alt={sa.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-gray-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                        Geborg
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-normal text-brand-navy dark:text-foreground mb-1 leading-tight group-hover:text-brand-red transition-colors line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                        {sa.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-2">
                        {sa.excerpt}
                      </p>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{sa.date}</span>
                    </div>
                  </article>
                </ArticleLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Related Content (Events & E-Editions) */}
      <div className="alignwide py-8">
        <RelatedContent
          events={EVENTS.slice(0, 3)}
          eEditions={LATEST_EDITIONS.slice(0, 4)}
        />
      </div>
      
      {/* Sticky Mobile Footer Ad */}
      <StickyMobileFooter section={articleData.category.toLowerCase()} />
    </div>
  );
};

export default ArticlePage;