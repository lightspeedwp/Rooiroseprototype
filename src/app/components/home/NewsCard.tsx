import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { generateArticleSlug } from '../../utils/slugify';
import { Article } from '../../types';
import { getResponsiveProps } from '../../utils/responsiveImage';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'list' | 'featured';
}

/* ── V2 Heading Styles ──────────────────────────────────────────────
 * Phase 2 Typography Alignment: All heading styles now use element
 * defaults or `.is-style-*` classes from theme.css. No inline styles.
 * ────────────────────────────────────────────────────────────────── */

export const NewsCard = React.memo(({ article, variant = 'default' }: NewsCardProps) => {
  const articleSlug = generateArticleSlug(article.id, article.title);
  
  // Sponsored Logic
  const displayTag = article.sponsored ? "GEBORG" : (article.tags && article.tags.length > 0 ? article.tags[0] : article.category);
  const tagColor = article.sponsored ? "bg-brand-navy" : "bg-brand-red";
  const isSponsored = article.sponsored;
  
  // Helper to render the tag
  const TagBadge = ({ className = "" }) => (
    <span className={`inline-block ${tagColor} text-white text-xs font-bold px-2 py-0.5 uppercase mb-1 ${className}`}>
      {displayTag}
    </span>
  );

  // Helper for sponsored link or internal link
  const ArticleLink = ({ children, className }: { children: React.ReactNode, className?: string }) => (
     <Link to={`/artikel/${articleSlug}`} className={className}>
      {children}
    </Link>
  );

  // ── List variant — small thumbnail left, text right ───────────────────
  if (variant === 'list') {
    return (
      <article className="flex gap-3 py-3 border-b border-border transition-colors relative">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="flex-shrink-0 relative">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-20 h-20 object-cover"
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
          <TagBadge />
          
          <h3 className="font-normal text-brand-navy dark:text-foreground mb-1 line-clamp-2 group-hover:text-brand-red transition-colors font-heading is-style-card-compact">
            <Link to={`/artikel/${articleSlug}`}>
              {article.title}
            </Link>
          </h3>
          
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            {isSponsored ? (
               <span className="flex items-center gap-1 text-muted-foreground font-medium">
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

  // ── Compact variant — smaller card, no shadow ─────────────────────────
  if (variant === 'compact') {
    return (
      <article className="group h-full flex flex-col">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="block mb-2 relative">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-40 object-cover"
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
           <TagBadge />
        </div>
        
        <h3 className="font-normal text-brand-navy dark:text-foreground mb-2 line-clamp-2 group-hover:text-brand-red transition-colors font-heading">
          <Link to={`/artikel/${articleSlug}`}>
            {article.title}
          </Link>
        </h3>
        
        {article.excerpt && (
          <p className="text-gray-600 dark:text-muted-foreground text-xs mb-2 line-clamp-2 flex-grow">
            {article.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-auto">
           {isSponsored ? (
               <span className="flex items-center gap-1 text-muted-foreground font-medium">
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

  // ── Featured variant — larger, more prominent ─────────────────────────
  if (variant === 'featured') {
    return (
      <article className="group h-full flex flex-col">
        {article.imageUrl && (
          <Link to={`/artikel/${articleSlug}`} className="block mb-3 relative">
            <ImageWithFallback 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-64 object-cover"
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
          <TagBadge className="text-xs px-2 py-1" />
        </div>
        
        {/* Featured uses H2 (highest prominence on section) */}
        <h2 className="font-normal text-brand-navy dark:text-foreground mb-3 group-hover:text-brand-red transition-colors font-heading">
          <Link to={`/artikel/${articleSlug}`}>
            {article.title}
          </Link>
        </h2>
        
        {article.excerpt && (
          <p className="text-gray-600 dark:text-muted-foreground text-sm mb-3 line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-auto">
           {isSponsored ? (
               <span className="flex items-center gap-1 text-muted-foreground font-medium">
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

  // ── Default variant — clean borders, no shadow ────────────────────────
  return (
    <article className="group border-b border-border pb-4 last:border-b-0 last:pb-0 h-full flex flex-col">
      {article.imageUrl && (
        <Link to={`/artikel/${articleSlug}`} className="block mb-3 relative">
          <ImageWithFallback 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-48 object-cover"
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
        <TagBadge />
      </div>
      
      <h3 className="font-normal text-brand-navy dark:text-foreground mb-2 group-hover:text-brand-red transition-colors font-heading">
        <Link to={`/artikel/${articleSlug}`}>
          {article.title}
        </Link>
      </h3>
      
      {article.excerpt && (
        <p className="text-gray-600 dark:text-muted-foreground text-sm mb-2 line-clamp-2 flex-grow">
          {article.excerpt}
        </p>
      )}
      
      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-auto">
         {isSponsored ? (
               <span className="flex items-center gap-1 text-muted-foreground font-medium">
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