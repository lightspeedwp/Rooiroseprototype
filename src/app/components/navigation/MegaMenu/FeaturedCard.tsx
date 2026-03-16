/**
 * Featured Content Card for Mega Menus
 * Displays featured article with image, title, excerpt, and metadata
 * 
 * @see /prompts/redesign/00-ORCHESTRATOR.md
 * @version 1.0.0
 * @date 2026-03-15
 */

import React from 'react';
import { Link } from 'react-router';
import type { FeaturedContent } from '../../../types/navigation';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface FeaturedCardProps {
  content: FeaturedContent;
  className?: string;
}

export const FeaturedCard: React.FC<FeaturedCardProps> = ({ content, className = '' }) => {
  // Handle Unsplash placeholder URLs
  const imageUrl = content.imageUrl.startsWith('unsplash://')
    ? `https://source.unsplash.com/600x400/?${content.imageUrl.replace('unsplash://', '')}`
    : content.imageUrl;

  return (
    <Link
      to={content.href}
      className={`group block bg-white dark:bg-card rounded-lg overflow-hidden border border-gray-100 dark:border-border hover:border-brand-red dark:hover:border-brand-red transition-all duration-200 hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-500)] ${className}`}
    >
      {/* Featured Image */}
      <div className="relative aspect-[3/2] overflow-hidden bg-gray-100 dark:bg-muted">
        <ImageWithFallback
          src={imageUrl}
          alt={content.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-bold uppercase tracking-wider rounded-sm">
            {content.categoryLabel}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h4 className="font-normal text-base mb-2 text-brand-navy dark:text-foreground has-brand-serif-font-family group-hover:text-brand-red dark:group-hover:text-brand-red transition-colors line-clamp-2" style={{ fontVariationSettings: 'var(--fvs-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>
          {content.title}
        </h4>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {content.excerpt}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
          {content.author && (
            <>
              <span>{content.author}</span>
              <span>•</span>
            </>
          )}
          {content.date && (
            <time dateTime={content.date}>
              {new Date(content.date).toLocaleDateString('af-ZA', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </time>
          )}
          {content.readTime && (
            <>
              <span>•</span>
              <span>{content.readTime}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
