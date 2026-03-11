import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ErrorBoundary } from '../common/ErrorBoundary';
import { CartProvider } from '../../context/CartContext';
import { ThemeProvider } from '../../context/ThemeContext';
import { DevLanguageProvider } from '../../context/DevLanguageContext';
import { Toaster } from '../ui/sonner';

/**
 * ScrollToTop — resets scroll position on route change.
 * Must be inside the router context (RouterProvider).
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * RootSuspenseFallback — shown while lazy-loaded layouts (DevLayout, CheckoutLayout) are loading.
 */
const RootSuspenseFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center space-y-4">
      <div
        className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto"
        role="status"
        aria-label="Loading"
      />
      <p className="text-sm text-muted-foreground">Laai...</p>
    </div>
  </div>
);

/**
 * RootLayout — top-level layout rendered inside RouterProvider.
 *
 * Provides:
 * - React ErrorBoundary (catches render errors)
 * - Cart, Theme, and DevLanguage context providers
 * - Scroll-to-top on navigation
 * - Outlet for child routes (MainLayout, CheckoutLayout, or bare pages)
 */
export const RootLayout = () => (
  <ErrorBoundary>
    <CartProvider>
      <ThemeProvider>
        <DevLanguageProvider>
          <ScrollToTop />
          <Suspense fallback={<RootSuspenseFallback />}>
            <Outlet />
          </Suspense>
          <Toaster />
        </DevLanguageProvider>
      </ThemeProvider>
    </CartProvider>
  </ErrorBoundary>
);