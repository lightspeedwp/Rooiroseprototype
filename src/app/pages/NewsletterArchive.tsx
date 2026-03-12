import React from 'react';
import { Link } from 'react-router';
import { Mail, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { NEWSLETTER_ARCHIVE_FAQS } from '../data/pageFaqs';
import { NEWSLETTER_EDITIONS } from '../data/newsletterArchive';
import { Button } from '../components/ui/button';
import { renderWithBrandItalics } from '../utils/brandItalics';

export const NewsletterArchivePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen font-inter">
      <SEO
        title="Nuusbrief-argief - rooi rose"
        description="Blaai deur vorige uitgawes van rooi rose se nuusbriewe. Lees ons Vrydag- en Dinsdag-uitgawes aanlyn."
        keywords="nuusbrief, argief, archive, newsletter, die papier, afrikaans, wekelijks"
      />

      <PageContainer breadcrumbs={[{ label: 'Nuusbrief-argief' }]}>
        <div className="pt-8 pb-12">
          {/* Page Header */}
          <header className="mb-10">
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Nuusbrief-argief
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
              Blaai deur vorige uitgawes van ons nuusbriewe. Ons stuur twee keer per week — Dinsdae
              ('n Leefstyl & Nuus-fokus) en Vrydae (die volledige e-uitgawe).
            </p>
          </header>

          {/* CTA Banner */}
          <div className="bg-brand-navy rounded-xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Mail size={28} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-white font-normal text-xl font-heading mb-1" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Nog nie ingeteken nie?
              </h2>
              <p className="text-gray-300 text-sm">
                Ontvang <em>rooi rose</em> se nuusbrief gratis in jou inkassie — elke Dinsdag en Vrydag.
              </p>
            </div>
            <Link to="/nuusbrief-inteken">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg whitespace-nowrap">
                Teken nou in
              </Button>
            </Link>
          </div>

          {/* Type Legend */}
          <div className="flex gap-4 mb-8 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-gray-600 dark:text-gray-400">Vrydag E-uitgawe</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-navy" />
              <span className="text-gray-600 dark:text-gray-400">Dinsdag Leefstyl & Nuus</span>
            </span>
          </div>

          {/* Newsletter List */}
          <div className="space-y-4">
            {NEWSLETTER_EDITIONS.map((edition) => (
              <Link
                key={edition.id}
                to={edition.link}
                className="block bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg p-5 md:p-6 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-input transition-[box-shadow,border-color] group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Type indicator */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    edition.type === 'friday'
                      ? 'bg-red-50 dark:bg-red-950/30 text-primary'
                      : 'bg-blue-50 dark:bg-blue-950/30 text-brand-navy dark:text-brand-navy-light'
                  }`}>
                    {edition.type === 'friday' ? <BookOpen size={22} /> : <Mail size={22} />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-[10px] uppercase tracking-widest font-bold ${
                        edition.type === 'friday' ? 'text-primary' : 'text-brand-navy dark:text-brand-navy-light'
                      }`}>
                        {edition.type === 'friday' ? 'Vrydag' : 'Dinsdag'}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={11} />
                        {edition.date}
                      </span>
                    </div>
                    <h3 className="font-normal text-brand-navy dark:text-foreground mb-1 group-hover:text-primary transition-colors font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                      {renderWithBrandItalics(edition.title)}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-1">
                      {edition.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="flex items-center text-primary text-sm font-bold gap-1 group-hover:gap-2 transition-[gap] flex-shrink-0">
                    Lees <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination hint */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              Vertoon die 8 mees onlangse nuusbriewe. Ouer uitgawes is per e-pos beskikbaar vir intekenare.
            </p>
          </div>
        </div>
      </PageContainer>

      <PageFAQSection items={NEWSLETTER_ARCHIVE_FAQS} />
    </div>
  );
};

export default NewsletterArchivePage;