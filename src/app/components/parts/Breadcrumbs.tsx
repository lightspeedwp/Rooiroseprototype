import React from 'react';
import { Link } from 'react-router';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs component for navigation hierarchy
 * @param items - Array of breadcrumb items with label and optional href
 * @param className - Optional additional CSS classes
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const isWhiteText = className.includes('text-white');
  
  return (
    <div className="w-full border-b border-gray-200 dark:border-border">
      <div className="w-full max-w-[1440px] mx-auto p-[0px]">
        <nav aria-label="Breadcrumb" className={`py-2 text-left ${className} m-[0px]`}>
          <ol className="flex items-center flex-wrap gap-2 text-sm">
            <li className="flex items-center">
              <Link 
                to="/" 
                className={`flex items-center gap-1 transition-colors ${
                  isWhiteText 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-brand-red'
                }`}
                aria-label="Tuisblad"
              >
                <Home size={14} />
                <span>Tuisblad</span>
              </Link>
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const hasHref = Boolean(item.href);
              const shouldShowLink = hasHref && !isLast;
              
              return (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight 
                    size={14} 
                    className="text-gray-400 dark:text-gray-500" 
                    aria-hidden="true" 
                  />
                  {shouldShowLink ? (
                    <Link 
                      to={item.href || '/'}
                      className={`transition-colors ${
                        isWhiteText 
                          ? 'text-gray-200 hover:text-white' 
                          : 'text-gray-600 dark:text-gray-400 hover:text-brand-red'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={
                      isLast 
                        ? (isWhiteText ? 'text-white font-medium' : 'text-brand-navy dark:text-foreground font-medium') 
                        : (isWhiteText ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400')
                    }>
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};