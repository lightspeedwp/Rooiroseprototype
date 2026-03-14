import React from 'react';
import { Link } from 'react-router';
import { Home, Search, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { SEO } from '../components/common/SEO';
import { NOT_FOUND_CONTENT } from '../data/notFound';

/* ── rooi rose Magazine 404 Page ──────────────────────────────
 * Editorial design: Error page with brand styling
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Centered error + action buttons + popular pages
 * ────────────────────────────────────────────────────────────── */

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-background flex items-center justify-center px-4 py-12">
      <SEO title={`${NOT_FOUND_CONTENT.code} - ${NOT_FOUND_CONTENT.title}`} description={NOT_FOUND_CONTENT.description} />
      <div className="max-w-3xl w-full text-center">
        {/* Error Card */}
        <div className="mb-12">
          <h1 className="text-9xl font-normal text-brand-red mb-6 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h1)", letterSpacing: 'var(--ls-h1)' }}>
            {NOT_FOUND_CONTENT.code}
          </h1>
          
          <h2 className="text-4xl font-normal text-brand-navy dark:text-foreground mb-6 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            {NOT_FOUND_CONTENT.title}
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            {NOT_FOUND_CONTENT.description}
          </p>
        </div>

        {/* Action Buttons — 1 primary + 2 outline */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/">
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white h-12 px-8 font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto">
              <Home size={18} />
              {NOT_FOUND_CONTENT.buttons.home}
            </Button>
          </Link>
          
          <Link to="/soek">
            <Button
              variant="outline"
              className="border-2 border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-foreground hover:bg-brand-navy hover:text-white dark:hover:bg-brand-navy-light h-12 px-8 font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <Search size={18} />
              {NOT_FOUND_CONTENT.buttons.search}
            </Button>
          </Link>

          <Link to="/kontak">
            <Button
              variant="outline"
              className="border-2 border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-foreground hover:bg-brand-navy hover:text-white dark:hover:bg-brand-navy-light h-12 px-8 font-bold transition-colors inline-flex items-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} />
              {NOT_FOUND_CONTENT.buttons.contact}
            </Button>
          </Link>
        </div>

        {/* Popular Pages — shaded section */}
        <div className="bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border shadow-md dark:shadow-[var(--shadow-dark-300)] p-8">
          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-8 has-brand-serif-font-family border-b-2 border-brand-red pb-3 inline-block" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
            {NOT_FOUND_CONTENT.popularPages.title}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {NOT_FOUND_CONTENT.popularPages.links.map((page) => (
              <Link
                key={page.href}
                to={page.href}
                className="group p-5 bg-white dark:bg-background border-2 border-gray-200 dark:border-border rounded-lg hover:border-brand-red dark:hover:border-brand-red hover:bg-red-50 dark:hover:bg-red-950/20 transition-all text-center shadow-sm hover:shadow-md"
              >
                <span className="text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-brand-red font-medium transition-colors">
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