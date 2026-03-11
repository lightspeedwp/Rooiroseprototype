import React from 'react';

/**
 * Skip to Content Link
 * Allows keyboard users to skip navigation and go directly to main content
 * Essential for accessibility compliance
 */
export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-brand-red focus:text-white focus:font-bold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-4 focus:ring-brand-red/50 transition-[transform,opacity]"
    >
      Spring na hoofinhoud
    </a>
  );
};

/**
 * Main Content Wrapper
 * Wraps main content to provide a skip-to target
 */
export const MainContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-grow bg-gray-50 dark:bg-background"
      style={{ paddingTop: '32px', paddingRight: '32px', paddingBottom: '32px', paddingLeft: '32px' }}
    >
      {children}
    </main>
  );
};