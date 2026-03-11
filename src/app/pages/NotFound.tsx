import React from 'react';
import { Link } from 'react-router';
import { Home, Search, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/common/SEO';
import { NOT_FOUND_CONTENT } from '../data/notFound';

/**
 * 404 Not Found Page
 * Canonical layout: centred card → 3 buttons → shaded popular pages
 */
export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background flex items-center justify-center px-4 py-12">
      <SEO title={`${NOT_FOUND_CONTENT.code} - ${NOT_FOUND_CONTENT.title}`} description={NOT_FOUND_CONTENT.description} />
      <div className="max-w-3xl w-full text-center">
        {/* Error Card */}
        <div className="mb-8">
          <h1 className="text-8xl font-normal text-primary mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", letterSpacing: 'var(--ls-h1)' }}>
            {NOT_FOUND_CONTENT.code}
          </h1>
          
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            {NOT_FOUND_CONTENT.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            {NOT_FOUND_CONTENT.description}
          </p>
        </div>

        {/* Action Buttons — 1 primary + 2 outline */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/">
            <Button className="bg-primary hover:bg-brand-red-hover text-white px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto">
              <Home size={18} />
              {NOT_FOUND_CONTENT.buttons.home}
            </Button>
          </Link>
          
          <Link to="/soek">
            <Button
              variant="outline"
              className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-foreground hover:bg-gray-50 dark:hover:bg-muted px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <Search size={18} />
              {NOT_FOUND_CONTENT.buttons.search}
            </Button>
          </Link>

          <Link to="/kontak">
            <Button
              variant="outline"
              className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-foreground hover:bg-gray-50 dark:hover:bg-muted px-8 py-3 rounded-md font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} />
              {NOT_FOUND_CONTENT.buttons.contact}
            </Button>
          </Link>
        </div>

        {/* Popular Pages — shaded section */}
        <div className="bg-white dark:bg-card rounded-lg shadow-md dark:shadow-[var(--shadow-dark-300)] p-8">
          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
            {NOT_FOUND_CONTENT.popularPages.title}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {NOT_FOUND_CONTENT.popularPages.links.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group p-4 border border-gray-200 dark:border-border rounded-lg hover:border-primary dark:hover:border-primary hover:bg-red-50 dark:hover:bg-primary/10 transition-[border-color,background-color] text-center"
              >
                <span className="text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary font-medium transition-colors">
                  {page.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
