import React from 'react';

/**
 * Skeleton Components
 * Provide visual loading placeholders for content
 */

// Base skeleton component
const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-muted rounded ${className}`} />
);

// Article Card Skeleton
export const ArticleCardSkeleton = () => (
  <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg overflow-hidden">
    <Skeleton className="w-full aspect-[16/10]" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-4/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-border">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);

// Hero Article Skeleton
export const HeroArticleSkeleton = () => (
  <div className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)]">
    <Skeleton className="w-full aspect-[16/9]" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-5 w-24" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-5/6" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-4/5" />
      <Skeleton className="h-5 w-3/4" />
      <div className="flex items-center gap-4 pt-4">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);

// Sidebar Article Skeleton
export const SidebarArticleSkeleton = () => (
  <div className="space-y-3">
    <Skeleton className="h-3 w-16" />
    <Skeleton className="h-5 w-full" />
    <Skeleton className="h-5 w-4/5" />
  </div>
);

// Category Page Grid Skeleton
export const CategoryGridSkeleton = ({ count = 9 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <ArticleCardSkeleton key={i} />
    ))}
  </div>
);

// Article Content Skeleton
export const ArticleContentSkeleton = () => (
  <div className="bg-white dark:bg-card rounded-lg shadow-sm p-8 space-y-6">
    {/* Breadcrumbs */}
    <Skeleton className="h-4 w-48" />
    
    {/* Title */}
    <div className="space-y-3">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-4/5" />
    </div>
    
    {/* Meta */}
    <div className="flex items-center gap-4 flex-wrap">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-4 w-20" />
    </div>
    
    {/* Image */}
    <Skeleton className="w-full aspect-[16/9] rounded-lg" />
    
    {/* Content */}
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" style={{ width: `${85 + Math.random() * 15}%` }} />
      ))}
    </div>
    
    {/* Share buttons */}
    <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-border">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-10 rounded" />
      ))}
    </div>
  </div>
);

// Search Results Skeleton
export const SearchResultSkeleton = () => (
  <div className="space-y-4 p-4 border-b border-gray-100 dark:border-border">
    <Skeleton className="h-4 w-20" />
    <Skeleton className="h-6 w-full" />
    <Skeleton className="h-6 w-4/5" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="flex items-center gap-4">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
  </div>
);

// E-Edition Card Skeleton
export const EEditionCardSkeleton = () => (
  <div className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)]">
    <Skeleton className="w-full aspect-[3/4]" />
    <div className="p-4 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  </div>
);

// Newsletter Preview Skeleton
export const NewsletterSkeleton = () => (
  <div className="bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border overflow-hidden">
    <Skeleton className="w-full h-48" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-7 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-10 w-32 rounded-md" />
    </div>
  </div>
);

// Table Row Skeleton (for My Account)
export const TableRowSkeleton = ({ columns = 4 }: { columns?: number }) => (
  <tr className="border-b border-gray-100 dark:border-border">
    {Array.from({ length: columns }).map((_, i) => (
      <td key={i} className="px-4 py-4">
        <Skeleton className="h-4 w-full" />
      </td>
    ))}
  </tr>
);

// List Item Skeleton
export const ListItemSkeleton = () => (
  <div className="flex items-start gap-3 p-3">
    <Skeleton className="h-4 w-4 rounded-full flex-shrink-0 mt-1" />
    <div className="flex-1 space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  </div>
);

// Author Profile Skeleton
export const AuthorProfileSkeleton = () => (
  <div className="bg-white dark:bg-card rounded-lg shadow-md dark:shadow-[var(--shadow-dark-300)] p-8">
    <div className="flex items-start gap-6 mb-8">
      <Skeleton className="h-24 w-24 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex gap-2 pt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-8 rounded" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Inline Loading Spinner
export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-solid border-brand-red border-r-transparent ${sizeClasses[size]}`} />
  );
};

// Full Page Loading
export const PageLoadingSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-background">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="text-gray-600 dark:text-gray-400 mt-4">Laai...</p>
    </div>
  </div>
);