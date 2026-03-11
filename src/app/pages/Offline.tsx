import React from 'react';
import { Link } from 'react-router';
import { WifiOff, Home, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/common/SEO';

/**
 * Offline Page
 * Shown when the user has no internet connection
 */
export const OfflinePage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col items-center justify-center p-4 text-center">
      <SEO 
        title="Geen internetverbinding - Die Papier" 
        description="Dit lyk of jy nie aan die internet gekoppel is nie."
      />
      
      <div className="w-24 h-24 bg-gray-200 dark:bg-muted rounded-full flex items-center justify-center mb-6">
        <WifiOff size={48} className="text-gray-500 dark:text-gray-400" />
      </div>
      
      <h1 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
        Jy is vanlyn
      </h1>
      
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Dit lyk of jy nie aan die internet gekoppel is nie. Gaan asseblief jou verbinding na en probeer weer.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={handleRefresh}
          className="bg-custom-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Probeer Weer
        </Button>
        
        <Link to="/">
          <Button variant="outline" className="border-gray-300 dark:border-border flex items-center gap-2">
            <Home size={18} />
            Tuisblad
          </Button>
        </Link>
      </div>
    </div>
  );
};