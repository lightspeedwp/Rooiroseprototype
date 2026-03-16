import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router';
import { getRouter } from './routes';

/**
 * App — root component for *rooi rose*.
 *
 * v11.9 Static Preview Approach:
 * - Figma iframe: React never loads (prevented by index.html + main.tsx)
 * - Figma iframe: Shows static preview message (no React, no routing)
 * - Production: Full RouterProvider with data routes
 * 
 * This component should ONLY run in standard (non-iframe) environments.
 * All route definitions live in /src/app/routes.tsx.
 * 
 * @version 2026-03-15 — v11.9: Static preview (React disabled in Figma iframe)
 */
function App() {
  const [router, setRouter] = useState<ReturnType<typeof getRouter> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  
  // Initialize router (safe because we're never in iframe at this point)
  useEffect(() => {
    let mounted = true;
    
    const initRouter = () => {
      if (!mounted) return;
      
      try {
        console.log('[App v11.9] Initializing router...');
        const routerInstance = getRouter();
        setRouter(routerInstance);
        console.log('[App v11.9] Router initialized successfully');
      } catch (err) {
        console.error('[App v11.9] Router initialization failed:', err);
        setError(err instanceof Error ? err : new Error('Unknown router error'));
      }
    };
    
    // Small delay for DOM ready
    setTimeout(initRouter, 100);
    
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