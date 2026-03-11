import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { renderWithBrandItalics } from '../../utils/brandItalics';

interface NewsletterContainerProps {
  children: React.ReactNode;
  title: string;
}

export const NewsletterContainer = ({ children, title }: NewsletterContainerProps) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-background py-12 px-4">
      <div className="mx-auto max-w-[600px] mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-brand-red font-medium text-sm transition-colors">
           <ArrowLeft size={16} />
           Terug na Tuisblad
        </Link>
      </div>

      <div className="mx-auto max-w-[600px] bg-white dark:bg-card shadow-xl dark:shadow-[var(--shadow-dark-600)] overflow-hidden font-sans text-gray-800 dark:text-foreground">
        {/* Email Client Header Simulation (Optional) */}
        <div className="bg-gray-50 dark:bg-background border-b border-gray-200 dark:border-border p-4 text-xs text-gray-500 dark:text-gray-400 flex justify-between items-center">
          <span>Subject: {renderWithBrandItalics(title)}</span>
          <span>View in browser</span>
        </div>
        
        {/* Email Content */}
        <div className="email-body">
          {children}
        </div>
      </div>
    </div>
  );
};