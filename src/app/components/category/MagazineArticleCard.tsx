import React from 'react';
import { Clock } from 'lucide-react';
import { ArticleLink } from '../common/ArticleLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';

/* ── rooi rose Magazine Article Card ──────────────────────────────
 * Editorial design: Large images (3:2), bold headlines, visual hierarchy
 * Typography: Playfair Display SC headings, Karla excerpt
 * Variants: standard (3:2 image), featured (larger), compact (smaller)
 * Features: Hover effects, category badges, sponsored indicators
 * ────────────────────────────────────────────────────────────────── */

interface MagazineArticleCardProps {
  id: number;
  title: string;
  excerpt?: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime?: string;
  sponsored?: boolean;
  sponsorName?: string;
  sponsorLogo?: string;
  variant?: 'standard' | 'featured' | 'compact';
}

export const MagazineArticleCard: React.FC<MagazineArticleCardProps> = ({
  id,
  title,
  excerpt,
  category,
  imageUrl,
  date,
  author,
  readTime,
  sponsored,
  sponsorName,
  sponsorLogo,
  variant = 'standard',
}) => {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <ArticleLink id={id} title={title} className="block group h-full">
      <article className="flex flex-col h-full">
        {/* Image */}
        <div className={`relative overflow-hidden bg-gray-200 dark:bg-muted mb-5 ${
          isFeatured ? 'aspect-[16/9]' : isCompact ? 'aspect-[4/3]' : 'aspect-[3/2]'
        }`}>
          <ImageWithFallback 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Category badge */}
          {!sponsored && (
            <div className="absolute top-4 left-4">
              <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-lg">
                {category}
              </span>
            </div>
          )}

          {/* Sponsored badge */}
          {sponsored && (
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-gray-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-lg">
                Geborg
              </span>
              {sponsorLogo && (
                <div className="bg-white rounded p-1 shadow-lg w-8 h-8 flex items-center justify-center">
                  <ImageWithFallback src={sponsorLogo} alt={sponsorName || ''} className="w-full h-full object-contain" />
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <h3 
            className={`font-normal text-brand-navy dark:text-foreground mb-3 leading-tight group-hover:text-brand-red dark:group-hover:text-primary transition-colors has-brand-serif-font-family ${
              isFeatured 
                ? 'text-2xl md:text-3xl' 
                : isCompact 
                ? 'text-lg' 
                : 'text-xl md:text-2xl'
            }`}
            style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
          >
            {title}
          </h3>
          
          {/* Excerpt - only show for standard and featured */}
          {(variant === 'standard' || variant === 'featured') && excerpt && (
            <p className={`text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1 ${
              isFeatured ? 'text-base md:text-lg line-clamp-3' : 'text-base line-clamp-2'
            }`}>
              {excerpt}
            </p>
          )}
          
          {/* Meta info */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-auto">
            {sponsored ? (
              <>
                <span className="font-bold text-brand-navy dark:text-foreground">{sponsorName}</span>
                <span>•</span>
              </>
            ) : (
              <>
                <span className="font-bold text-brand-navy dark:text-foreground">{author}</span>
                <span>•</span>
              </>
            )}
            <span>{date}</span>
            {readTime && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{readTime}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </ArticleLink>
  );
};

export default MagazineArticleCard;
