import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { getRouter } from './routes';
import { Home } from './pages/Home';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { DevLanguageProvider } from './context/DevLanguageContext';
import { Toaster } from './components/ui/sonner';

/**
 * App — root component for *rooi rose*.
 *
 * Uses React Router v7 Data Mode (RouterProvider) in standard environments.
 * In Figma Make iframe: Disables routing and shows Home directly to prevent IframeMessageAbortError.
 * All route definitions live in /src/app/routes.tsx.
 * Providers (Cart, Theme, DevLanguage) and the ErrorBoundary
 * are rendered inside RootLayout (the router's top-level Route element).
 * @version 2026-03-14 — v11.0: Hybrid approach (delayed load + no routing in iframe)
 */
function App() {
  // Check if we're in Figma Make iframe
  const isInFigmaIframe = (() => {
    try {
      return window.self !== window.top;
    } catch {
      return true; // If we can't check, assume we're in iframe
    }
  })();

  // v11.0: In iframe, skip routing entirely and show Home directly
  if (isInFigmaIframe) {
    console.log('[App] Figma iframe detected - using single page mode (no routing)');
    console.log('[App] This prevents IframeMessageAbortError while maintaining preview functionality');
    
    return (
      <ErrorBoundary>
        <CartProvider>
          <ThemeProvider>
            <DevLanguageProvider>
              <div style={{ minHeight: '100vh' }}>
                <Home />
              </div>
              <Toaster />
            </DevLanguageProvider>
          </ThemeProvider>
        </CartProvider>
      </ErrorBoundary>
    );
  }

  // Standard environment: Use full React Router
  const [router, setRouter] = useState<ReturnType<typeof getRouter> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  
  // Defer router creation until after Figma iframe message channel is ready
  useEffect(() => {
    let mounted = true;
    
    // Function to wait for iframe to be ready
    const waitForIframeReady = () => {
      return new Promise<void>((resolve) => {
        if (isInFigmaIframe) {
          // In iframe: additional safety delay (HTML already waited for window.load + 30s)
          console.log('[App] Detected iframe environment, adding final 10s safety delay...');
          setTimeout(resolve, 10000); // v9.0: 10 second additional delay (after window.load event)
        } else {
          // Not in iframe: can initialize immediately
          console.log('[App] Standard environment detected');
          setTimeout(resolve, 100); // Minimal delay for DOM ready
        }
      });
    };
    
    // Initialize router after environment is ready
    waitForIframeReady().then(() => {
      if (!mounted) return;
      
      try {
        console.log('[App] Initializing router...');
        const routerInstance = getRouter();
        setRouter(routerInstance);
        console.log('[App] Router initialized successfully');
      } catch (err) {
        console.error('[App] Router initialization failed:', err);
        setError(err instanceof Error ? err : new Error('Unknown router error'));
      }
    });
    
    return () => {
      mounted = false;
    };
  }, []);
  
  // Show error state if router creation failed
  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#e01e12',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <div style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Router Error
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6B7280', marginBottom: '1rem' }}>
            {error.message}
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              padding: '0.5rem 1rem',
              background: '#e01e12',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Herlaai bladsy
          </button>
        </div>
      </div>
    );
  }
  
  // Show loading state while router is being created
  if (!router) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#142135'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>Laai...</div>
          <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>
            rooi rose
          </div>
        </div>
      </div>
    );
  }
  
  return <RouterProvider router={router} />;
}

export default App;