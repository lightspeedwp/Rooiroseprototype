import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X, Cookie } from 'lucide-react';
import { COOKIE_BANNER } from '../../data/cookieBanner';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('die-papier-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('die-papier-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('die-papier-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-card border-t-4 border-brand-red shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[var(--shadow-dark-up)] animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          
          <div className="flex gap-4 flex-1">
            <div className="bg-gray-100 dark:bg-muted p-3 rounded-full h-fit hidden sm:block">
              <Cookie className="w-6 h-6 text-brand-red" />
            </div>
            <div className="space-y-2">
              {/* V2: widget label → Karla SemiBold H6 style */}
              <h3
                className="has-brand-sans-font-family font-semibold text-brand-navy dark:text-foreground"
                style={{ fontSize: 'var(--text-h6)', letterSpacing: 'var(--ls-h6)' }}
              >
                {COOKIE_BANNER.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-3xl">
                <span dangerouslySetInnerHTML={{ __html: COOKIE_BANNER.description }} />{' '}
                <Link to="/beleid/koekiebeleid" className="text-brand-red hover:underline font-medium">
                  {COOKIE_BANNER.links.cookiePolicy}
                </Link>,{' '}
                <Link to="/beleid/paia" className="text-brand-red hover:underline font-medium">
                  {COOKIE_BANNER.links.paia}
                </Link>,{' '}
                <Link to="/beleid/privaatheidsbeleid" className="text-brand-red hover:underline font-medium">
                  {COOKIE_BANNER.links.privacyPolicy}
                </Link>{' '}
                en{' '}
                <Link to="/beleid/terme-en-voorwaardes" className="text-brand-red hover:underline font-medium">
                  {COOKIE_BANNER.links.terms}
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleDecline}
              className="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-muted transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {COOKIE_BANNER.buttons.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 rounded-lg bg-brand-red text-white font-bold hover:bg-brand-red-hover transition-colors shadow-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white dark:focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-brand-red"
            >
              {COOKIE_BANNER.buttons.accept}
            </button>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 md:hidden text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:focus-visible:ring-ring rounded"
            aria-label="Sluit"
          >
            <X size={20} />
          </button>

        </div>
      </div>
    </div>
  );
};