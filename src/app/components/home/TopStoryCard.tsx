import React from 'react';
import { Clock } from 'lucide-react';
import { ArticleLink } from '../common/ArticleLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';

/* ── Top Story Card - Clean & Tight Spacing ────────────────────────
 * Designed specifically for the Top Stories / Feature Grid section
 * NO excessive spacing between elements
 * Clean, magazine-style layout with precise control
 * ────────────────────────────────────────────────────────────────── */

interface TopStoryCardProps {
  id: number;
  title: string;
  excerpt?: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime?: string;
  variant?: 'large' | 'medium' | 'small';
}

export const TopStoryCard: React.FC<TopStoryCardProps> = ({
  id,
  title,
  excerpt,
  category,
  imageUrl,
  date,
  author,
  readTime,
  variant = 'medium',
}) => {
  // Variant-specific classes
  const imageAspect = variant === 'large' ? 'aspect-[16/9]' : variant === 'small' ? 'aspect-[4/3]' : 'aspect-[3/2]';
  const titleSize = variant === 'large' ? 'text-3xl md:text-4xl' : variant === 'small' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl';
  const excerptSize = variant === 'large' ? 'text-base md:text-lg' : 'text-base';
  const showExcerpt = variant !== 'small' && excerpt;

  return (
    <ArticleLink id={id} title={title} className="block group h-full">
      <article className="flex flex-col h-full">
        {/* Image Container */}
        <div className={`relative overflow-hidden bg-gray-200 dark:bg-muted ${imageAspect}`}>
          <ImageWithFallback 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 shadow-lg">
              {category}
            </span>
          </div>
        </div>
        
        {/* Content - TIGHT SPACING */}
        <div className="flex flex-col flex-1 pt-4">
          {/* Title - small gap below */}
          <h3 
            className={`font-normal text-brand-navy dark:text-foreground leading-tight group-hover:text-brand-red dark:group-hover:text-primary transition-colors has-brand-serif-font-family ${titleSize}`}
            style={{ 
              fontVariationSettings: "var(--fvs-h3)", 
              letterSpacing: 'var(--ls-h3)',
              marginBottom: showExcerpt ? '0.5rem' : '0.75rem'
            }}
          >
            {title}
          </h3>
          
          {/* Excerpt - controlled spacing */}
          {showExcerpt && (
            <p 
              className={`text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 ${excerptSize}`}
              style={{ marginBottom: '0.75rem' }}
            >
              {excerpt}
            </p>
          )}
          
          {/* Meta - auto-pushed to bottom */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-auto">
            <span className="font-bold text-brand-navy dark:text-foreground">{author}</span>
            <span>•</span>
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

export default TopStoryCard;
