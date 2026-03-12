import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

/**
 * Determine if we are in development mode safely
 */
const isDev = (() => {
  try {
    // Check vite/modern way
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
      return true;
    }
  } catch (e) {
    // Ignore
  }
  
  return false;
})();

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Error has been caught
    
    this.setState({
      error,
      errorInfo,
    });

    // In production, you could send this to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-background flex items-center justify-center px-4 py-12">
          <div className="max-w-2xl w-full bg-white dark:bg-card rounded-lg shadow-lg dark:shadow-[var(--shadow-dark-400)] p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
              <AlertTriangle className="w-8 h-8 text-brand-red" />
            </div>
            
            <h1
              className="font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family"
              style={{
                fontVariationSettings: "var(--fvs-h1)",
                lineHeight: 'var(--lh-h1)',
                letterSpacing: 'var(--ls-h1)',
                fontSize: 'var(--text-h1)',
              }}
            >
              Oeps! Iets het verkeerd geloop
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              Ons is jammer, maar daar was 'n fout met die bladsy. Ons span is bewus van die probleem 
              en werk daaraan om dit reg te stel.
            </p>

            {/* Show error details in development mode */}
            {isDev && this.state.error && (
              <details className="text-left mb-8 bg-gray-50 dark:bg-background rounded-lg p-4 border border-gray-200 dark:border-border">
                <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tegniese besonderhede (slegs sigbaar in ontwikkelingsmodus)
                </summary>
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p className="font-mono text-xs text-red-600 break-all">
                    <strong>Fout:</strong> {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="mt-2 p-2 bg-gray-100 dark:bg-card rounded text-xs overflow-auto max-h-48">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                className="bg-brand-red hover:bg-brand-red-hover text-white px-6 py-3 rounded-md font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                Probeer weer
              </Button>
              
              <Button
                onClick={this.handleGoHome}
                variant="outline"
                className="border-brand-navy dark:border-muted-foreground text-brand-navy dark:text-foreground hover:bg-gray-50 dark:hover:bg-muted px-6 py-3 rounded-md font-bold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Home size={18} />
                Terug na tuisblad
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              As die probleem voortduur, kontak ons gerus by{' '}
              <a href="mailto:redaksie@diepapier.co.za" className="text-brand-red hover:underline">
                redaksie@diepapier.co.za
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}