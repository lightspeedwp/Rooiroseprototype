import React from 'react';
import { User, Clock } from 'lucide-react';
import { ArticleLink } from './ArticleLink';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { getResponsiveProps } from '../../utils/responsiveImage';

export interface HeroSlideCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime?: string;
  /** Fill parent height on desktop (for slider containers) */
  fillHeight?: boolean;
  /** Enable hover scale on image (TagArchive style) */
  showHoverScale?: boolean;
  /** Use responsive image srcset */
  responsive?: boolean;
  /** Optional controls (arrows, dots) rendered inside the image container */
  children?: React.ReactNode;
}

/**
 * HeroSlideCard — shared hero article card with responsive text placement.
 *
 * - Mobile (< md / 768px): Image block + text block below on solid bg
 * - Desktop (≥ md / 768px): Text overlays image with gradient
 *
 * Nav arrows and dot indicators can be passed as `children` —
 * they render inside the image container so they stay overlaid on the image at all sizes.
 */
export const HeroSlideCard = ({
  id,
  title,
  excerpt,
  category,
  image,
  date,
  author,
  readTime,
  fillHeight = false,
  showHoverScale = false,
  responsive = true,
  children,
}: HeroSlideCardProps) => {
  const responsiveProps = responsive ? getResponsiveProps(image, 'heroConstrained') : {};

  return (
    <ArticleLink
      id={id}
      title={title}
      className={`block group ${fillHeight ? 'md:h-full' : ''}`}
    >
      {/* ─── Image container ─── */}
      <div className={`relative overflow-hidden ${fillHeight ? 'aspect-[16/9] md:aspect-auto md:h-full' : 'aspect-[16/9] md:aspect-[21/9]'}`}>
        <ImageWithFallback
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${showHoverScale ? 'transition-transform duration-700 group-hover:scale-105' : ''}`}
          loading="eager"
          {...responsiveProps}
        />

        {/* Gradient overlay — desktop only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent hidden md:block" />

        {/* ─── Desktop text overlay (≥ md) ─── */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 pb-14 md:pb-16 hidden md:block">
          <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 mb-3 uppercase tracking-wider">
            {category}
          </span>
          <h2
            className="text-white font-normal font-heading mb-3 max-w-4xl text-[36px]"
            style={{
              fontVariationSettings: "'GRAD' 0, 'wdth' 64, 'opsz' 48",
              lineHeight: '1.08',
              letterSpacing: 'var(--ls-h1)',
              textShadow: '0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)',
            }}
          >
            {title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-normal font-inter leading-relaxed mb-4 line-clamp-2 max-w-3xl">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <User size={12} />
              {author}
            </span>
            <span>{date}</span>
            {readTime && <span>{readTime} lees</span>}
          </div>
        </div>

        {/* Optional controls (arrows, dots) — rendered inside image container */}
        {children}
      </div>

      {/* ─── Mobile text block (< md) — below image on solid bg ─── */}
      <div className="md:hidden bg-white dark:bg-card pt-3 pb-2">
        <span className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 mb-2 uppercase tracking-wider">
          {category}
        </span>
        <h2
          className="text-brand-navy dark:text-foreground font-normal font-heading mb-1.5 text-2xl"
          style={{
            fontVariationSettings: "'GRAD' 0, 'wdth' 64, 'opsz' 48",
            lineHeight: '1.15',
            letterSpacing: 'var(--ls-h1)',
          }}
        >
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal font-inter leading-relaxed mb-2 line-clamp-2 max-w-3xl">
          {excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <User size={12} />
            {author}
          </span>
          <span>{date}</span>
          {readTime && <span>{readTime} lees</span>}
        </div>
      </div>
    </ArticleLink>
  );
};