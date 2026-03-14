import React from 'react';
import { Link } from 'react-router';
import { WifiOff, Home, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/common/SEO';

/* ── rooi rose Magazine Offline Page ──────────────────────────────
 * Editorial design: Network error page
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Centered error + action buttons
 * ────────────────────────────────────────────────────────────── */

export const OfflinePage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background flex flex-col items-center justify-center p-4 text-center">
      <SEO 
        title="Geen internetverbinding - rooi rose" 
        description="Dit lyk of jy nie aan die internet gekoppel is nie."
      />
      
      <div className="w-32 h-32 bg-gray-100 dark:bg-card rounded-full flex items-center justify-center mb-8 border-2 border-gray-200 dark:border-border">
        <WifiOff size={56} className="text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
      </div>
      
      <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
        Jy is vanlyn
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        Dit lyk of jy nie aan die internet gekoppel is nie. Gaan asseblief jou verbinding na en probeer weer.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={handleRefresh}
          className="bg-brand-red hover:bg-brand-red/90 text-white h-12 px-8 font-bold flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Probeer Weer
        </Button>
        
        <Link to="/">
          <Button variant="outline" className="border-2 border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-foreground hover:bg-brand-navy hover:text-white h-12 px-8 font-bold flex items-center gap-2">
            <Home size={18} />
            Tuisblad
          </Button>
        </Link>
      </div>
    </div>
  );
};