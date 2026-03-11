import React, { memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Logo } from '../common/Logo';
import { Link } from 'react-router';
import { Lock, ArrowLeft } from 'lucide-react';

// Loading fallback for checkout pages
const CheckoutLoader = () => (
  <div className="min-h-[400px] flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-red border-r-transparent mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400">Laai...</p>
    </div>
  </div>
);

interface CheckoutLayoutProps {
  children?: React.ReactNode;
}

/**
 * CheckoutLayout — minimal header/footer for the checkout flow.
 *
 * Supports two modes:
 * - **Outlet mode** (no children): renders `<Outlet />` for createBrowserRouter child routes.
 * - **Children mode** (legacy): renders `{children}` passed directly.
 */
export const CheckoutLayout = memo(({ children }: CheckoutLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col font-inter text-foreground">
      {/* Header */}
      <header className="bg-white dark:bg-card border-b border-gray-200 dark:border-border h-[72px] sticky top-0 z-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <Logo className="h-10 w-auto" />
            </Link>
            
            <div className="hidden md:flex items-center gap-2 text-brand-navy dark:text-foreground border-l border-gray-200 dark:border-border pl-6 h-8">
              <Lock size={14} />
              <span className="text-xs font-bold tracking-widest uppercase">Veilige Betaling</span>
            </div>
          </div>

          <Link to="/mandjie" className="flex items-center gap-2 text-brand-navy dark:text-foreground hover:text-brand-red transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            <span>Terug na Mandjie</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:py-12">
        <Suspense fallback={<CheckoutLoader />}>
          {children ?? <Outlet />}
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-card border-t border-gray-200 dark:border-border py-8 mt-auto">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} <em>Die Papier</em>. Alle regte voorbehou.</p>
          
          <div className="flex items-center gap-6">
            <Link to="/beleid/privaatheidsbeleid" className="hover:text-brand-red underline">Privaatheidsbeleid</Link>
            <Link to="/beleid/terme-en-voorwaardes" className="hover:text-brand-red underline">Terme & Voorwaardes</Link>
            <Link to="/beleid/terugsendingsbeleid" className="hover:text-brand-red underline">Terugsendingsbeleid</Link>
          </div>

          <div className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-opacity">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Secure SSL</span>
          </div>
        </div>
      </footer>
    </div>
  );
});