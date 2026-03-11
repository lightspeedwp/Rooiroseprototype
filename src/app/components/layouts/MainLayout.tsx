import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../parts/Header';
import { Footer } from '../parts/Footer';
import { BackToTopButton } from '../common/BackToTopButton';
import { NewsletterModal } from '../patterns/NewsletterModal';
import { CookieBanner } from '../common/CookieBanner';
import { SkipToContent, MainContentWrapper } from '../common/SkipToContent';
import { RouteSEOProvider } from '../common/RouteSEOProvider';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-red border-r-transparent mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Laai...</p>
    </div>
  </div>
);

/**
 * MainLayout — standard site chrome (Header, Footer, etc.)
 *
 * Supports two modes:
 * - **Outlet mode** (no children): renders `<Outlet />` for createBrowserRouter child routes.
 * - **Children mode** (legacy): renders `{children}` passed directly.
 */
export const MainLayout = ({ children }: { children?: React.ReactNode }) => (
  <div className="min-h-screen bg-background antialiased flex flex-col transition-colors">
    <RouteSEOProvider />
    <SkipToContent />
    <Header />
    <MainContentWrapper>
      <Suspense fallback={<PageLoader />}>
        {children ?? <Outlet />}
      </Suspense>
    </MainContentWrapper>
    <Footer />
    <BackToTopButton />
    <NewsletterModal />
    <CookieBanner />
  </div>
);