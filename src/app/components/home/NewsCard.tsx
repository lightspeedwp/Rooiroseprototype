import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { generateArticleSlug } from '../../utils/slugify';
import { Article } from '../../types';
import { getResponsiveProps } from '../../utils/responsiveImage';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'list' | 'featured' | 'hero';
}

/* ── rooi rose Magazine Card Styles ──────────────────────────────────
 * Editorial typography: Playfair Display SC for headings, Karla for body
 * Magazine spacing: Generous padding and white space
 * 3:2 aspect ratios for featured images
 * ────────────────────────────────────────────────────────────────── */

export const NewsCard = React.memo(({ article, variant = 'default' }: NewsCardProps) => {
  const articleSlug = generateArticleSlug(article.id, article.title);
  
  // Category badge styling (rooi rose red)
  const displayTag = article.sponsored ? "GEBORG" : (article.tags && article.tags.length > 0 ? article.tags[0] : article.category);
  const tagColor = article.sponsored ? "bg-[var(--muted-foreground)]" : "bg-[var(--custom-primary)]";
  const isSponsored = article.sponsored;
  
  // Helper to render the category label (magazine style)
  const CategoryLabel = ({ className = "" }) => (
    <span 
      className={`inline-block ${tagColor} text-white text-[0.75rem] font-display font-normal tracking-[0.1em] uppercase px-2 py-0.5 mb-2 ${className}`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {displayTag}
    </span>
  );

  // Helper for article link
  const ArticleLink = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <Link to={`/artikel/${articleSlug}`} className={className}>
      {children}
    </Link>
  );

  // ── List variant — small thumbnail left, text right ───────────────────
  if (variant === 'list') {
    return (
      <article className="flex gap-4 py-4 border-b border-[var(--muted)] last:border-b-0 transition-colors relative">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="flex-shrink-0 relative overflow-hidden">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-24 h-24 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            {isSponsored && article.sponsorLogo && (
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-white p-0.5 rounded-tl shadow-sm">
                <ImageWithFallback src={article.sponsorLogo} alt="Sponsor" className="w-full h-full object-contain" />
              </div>
            )}
          </Link>
        )}
        
        <div className="flex-1 min-w-0">
          <CategoryLabel />
          
          <h3 
            className="font-display font-normal text-[var(--contrast)] dark:text-foreground mb-1 line-clamp-2 hover:text-[var(--custom-primary-hover)] transition-colors text-base leading-tight"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
          >
            <Link to={`/artikel/${articleSlug}`}>
              {article.title}
            </Link>
          </h3>
          
          <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]" style={{ fontFamily: 'var(--font-body)' }}>
            {isSponsored ? (
              <span className="flex items-center gap-1">
                {article.sponsorName && `Deur ${article.sponsorName}`}
              </span>
            ) : (
              <>
                <Clock size={11} />
                <span>{article.date || article.time}</span>
              </>
            )}
          </div>
        </div>
      </article>
    );
  }

  // ── Compact variant — magazine card style ─────────────────────────
  if (variant === 'compact') {
    return (
      <article className="group h-full flex flex-col bg-[var(--base)] transition-all duration-300 relative">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="block mb-3 relative overflow-hidden aspect-[3/2]">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {isSponsored && article.sponsorLogo && (
              <div className="absolute top-2 right-2 bg-white/90 p-1 rounded shadow-sm">
                <ImageWithFallback src={article.sponsorLogo} alt="Sponsor" className="w-8 h-8 object-contain" />
              </div>
            )}
          </Link>
        )}
        
        <div className="mb-2">
          <CategoryLabel />
        </div>
        
        <h3 
          className="font-display font-normal text-[var(--contrast)] dark:text-foreground mb-2 line-clamp-3 group-hover:text-[var(--custom-primary-hover)] transition-colors text-lg leading-tight"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
        >
          <Link to={`/artikel/${articleSlug}`}>
            {article.title}
          </Link>
        </h3>
        
        {article.excerpt && (
          <p 
            className="text-[var(--body-text)] dark:text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow"
            style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
          >
            {article.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] mt-auto" style={{ fontFamily: 'var(--font-body)' }}>
          {isSponsored ? (
            <span className="flex items-center gap-1">
              {article.sponsorName && `Geborg deur ${article.sponsorName}`}
            </span>
          ) : (
            <>
              <Clock size={11} />
              <span>{article.date || article.time}</span>
            </>
          )}
        </div>
      </article>
    );
  }

  // ── Featured variant — larger, editorial prominence ─────────────────────────
  if (variant === 'featured') {
    return (
      <article className="group h-full flex flex-col bg-[var(--base)] relative">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="block mb-4 relative overflow-hidden aspect-[3/2]">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              {...getResponsiveProps(article.imageUrl, 'featured')}
            />
            {isSponsored && article.sponsorLogo && (
              <div className="absolute top-4 right-4 bg-white/95 p-1.5 rounded shadow-md">
                <ImageWithFallback src={article.sponsorLogo} alt="Sponsor" className="w-12 h-12 object-contain" />
              </div>
            )}
          </Link>
        )}
        
        <div className="mb-3">
          <CategoryLabel className="text-sm px-3 py-1" />
        </div>
        
        {/* Featured uses larger Playfair Display SC heading */}
        <h2 
          className="font-display font-normal text-[var(--contrast)] dark:text-foreground mb-3 group-hover:text-[var(--custom-primary-hover)] transition-colors text-2xl leading-tight"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          <Link to={`/artikel/${articleSlug}`}>
            {article.title}
          </Link>
        </h2>
        
        {article.excerpt && (
          <p 
            className="text-[var(--body-text)] dark:text-muted-foreground text-base mb-4 line-clamp-3 flex-grow"
            style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
          >
            {article.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] mt-auto" style={{ fontFamily: 'var(--font-body)' }}>
          {isSponsored ? (
            <span className="flex items-center gap-1">
              {article.sponsorName && `In samewerking met ${article.sponsorName}`}
            </span>
          ) : (
            <>
              <Clock size={12} />
              <span>{article.date || article.time}</span>
            </>
          )}
        </div>
      </article>
    );
  }

  // ── Hero variant (NEW) — full-width magazine hero ────────────────────────
  if (variant === 'hero') {
    return (
      <article className="group relative h-[500px] overflow-hidden">
        {article.imageUrl && (
          <div className="absolute inset-0">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
        )}
        
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 max-w-[680px]">
          <div className="mb-3">
            <CategoryLabel className="text-sm px-3 py-1" />
          </div>
          
          <h2 
            className="font-display font-normal text-white mb-4 text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            <Link to={`/artikel/${articleSlug}`} className="hover:text-[var(--custom-primary)] transition-colors">
              {article.title}
            </Link>
          </h2>
          
          {article.excerpt && (
            <p 
              className="text-white/90 text-base md:text-lg mb-4 line-clamp-2"
              style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
            >
              {article.excerpt}
            </p>
          )}
          
          <div className="flex items-center gap-2 text-sm text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            <Clock size={12} />
            <span>{article.date || article.time}</span>
          </div>
        </div>
      </article>
    );
  }

  // ── Default variant — clean editorial card ────────────────────────
  return (
    <article className="group border-b border-[var(--muted)] pb-6 last:border-b-0 last:pb-0 h-full flex flex-col relative">
      {article.imageUrl && (
        <Link to={`/artikel/${articleSlug}`} className="block mb-3 relative overflow-hidden aspect-[3/2]">
          <ImageWithFallback 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            {...getResponsiveProps(article.imageUrl, 'card')}
          />
          {isSponsored && article.sponsorLogo && (
            <div className="absolute top-2 right-2 bg-white/90 p-1 rounded shadow-sm">
              <ImageWithFallback src={article.sponsorLogo} alt="Sponsor" className="w-10 h-10 object-contain" />
            </div>
          )}
        </Link>
      )}
      
      <div className="mb-2">
        <CategoryLabel />
      </div>
      
      <h3 
        className="font-display font-normal text-[var(--contrast)] dark:text-foreground mb-2 group-hover:text-[var(--custom-primary-hover)] transition-colors text-lg leading-tight"
        style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}
      >
        <Link to={`/artikel/${articleSlug}`}>
          {article.title}
        </Link>
      </h3>
      
      {article.excerpt && (
        <p 
          className="text-[var(--body-text)] dark:text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow"
          style={{ fontFamily: 'var(--font-body)', lineHeight: '1.6' }}
        >
          {article.excerpt}
        </p>
      )}
      
      <div className="flex items-center gap-1 text-xs text-[var(--muted-foreground)] mt-auto" style={{ fontFamily: 'var(--font-body)' }}>
        {isSponsored ? (
          <span className="flex items-center gap-1">
            {article.sponsorName && `Geborg deur ${article.sponsorName}`}
          </span>
        ) : (
          <>
            <Clock size={12} />
            <span>{article.date || article.time}</span>
          </>
        )}
      </div>
    </article>
  );
});

NewsCard.displayName = 'NewsCard';