import React from 'react';

/**
 * RouteLoader - Loading state for lazy-loaded routes
 * 
 * Usage:
 * - Shows while lazy route component is being loaded
 * - Branded loading spinner matching *rooi rose* design
 * - Optional title for context
 * 
 * Note: The LazyRoute wrapper was removed (2026-03-03) because
 * RootLayout and DevLayout both provide their own <Suspense>
 * boundaries around <Outlet />, making per-route wrappers redundant.
 */

interface RouteLoaderProps {
  title?: string;
}

export const RouteLoader = ({ title }: RouteLoaderProps) => (
  <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      {/* Loading spinner */}
      <div 
        className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto"
        role="status"
        aria-label="Loading"
      />
      
      {/* Optional title */}
      {title && (
        <p className="text-lg font-medium text-foreground">{title}</p>
      )}
      
      {/* Loading text */}
      <p className="text-sm text-muted-foreground">Laai...</p>
    </div>
  </div>
);