import React from 'react';
import { Link } from 'react-router';
import {
  MessageSquare,
  PenLine,
  Heart,
  Send,
  ChevronRight,
  FileText,
  Info,
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { ContentHero } from '../components/patterns/ContentHero';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { SUBMIT_FAQS } from '../data/pageFaqs';
import { SUBMIT_OPTIONS } from '../data/submit';
import { HERO_IMAGES } from '../data/heroImages';

export const SubmitHubPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-16">
      <SEO
        title="Stuur in - rooi rose"
        description="Stuur 'n nuuswenk, lesersbrief, terugvoer of shoutout aan rooi rose. Jou stem maak saak."
        keywords="instuur, submit, nuuswenk, lesersbrief, shoutout, terugvoer, die papier"
      />

      <PageContainer breadcrumbs={[{ label: 'Stuur in' }]} noPadding />

      <ContentHero
        title="Stuur in"
        subtitle="rooi rose nooi jou uit om deel te wees van ons redaksionele proses. Kies hieronder watter tipe indiening jy wil maak."
        image={HERO_IMAGES.hero_submit}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Submission Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SUBMIT_OPTIONS.map((option) => (
            <Link
              key={option.href}
              to={option.href}
              className="group bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border p-6 hover:shadow-lg hover:border-primary/20 transition-[box-shadow,border-color]"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <option.icon size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 group-hover:text-primary transition-colors font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                    {option.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm group-hover:gap-2.5 transition-[gap]">
                    {option.cta}
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-brand-navy rounded-xl p-6 md:p-8 text-white">
          <div className="flex items-start gap-4">
            <Info size={24} className="text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-normal mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Belangrike Inligting</h3>
              <ul className="text-gray-300 text-sm space-y-2 list-disc list-inside">
                <li>Alle inskrywings word deur ons redaksie hersien voor publikasie.</li>
                <li>Maak seker dat jy die reg het om enige foto's of inhoud te deel.</li>
                <li>Deur in te dien, gee jy toestemming vir <em>rooi rose</em> om die inhoud te publiseer.</li>
                <li>Ons behou die reg voor om inskrywings te redigeer vir lengte en duidelikheid.</li>
                <li>
                  Wil jy 'n gebeurtenis indien?{' '}
                  <Link to="/gebeure/dien-in" className="text-text-link-red hover:underline font-bold">
                    Dien 'n gebeurtenis in →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <PageFAQSection
        items={SUBMIT_FAQS}
        description="Vrae oor hoe om inhoud by rooi rose in te dien."
      />
    </div>
  );
};