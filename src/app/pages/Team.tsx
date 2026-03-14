import React from 'react';
import { ContentHero } from '../components/patterns/ContentHero';
import { TeamGrid } from '../components/patterns/TeamGrid';
import { CallToAction } from '../components/patterns/CallToAction';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { TEAM_FAQS } from '../data/pageFaqs';
import { TEAM_MEMBERS, TEAM_PAGE_CONTENT } from '../data/team';
import { SEO } from '../components/common/SEO';

/* ── rooi rose Magazine Team Page ──────────────────────────────
 * Editorial design: Large hero, centered sections, team grid
 * Typography: Playfair Display SC headings
 * Layout: Hero + Editorial team + Reporters + CTA + FAQ
 * ────────────────────────────────────────────────────────────── */

export const TeamPage = () => {
  // Filter team members by department
  const editorialDisplay = TEAM_MEMBERS.filter(m => m.department === 'redaksioneel').sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  const reportingDisplay = TEAM_MEMBERS.filter(m => m.department === 'verslaggewers').sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  return (
    <div className="bg-white dark:bg-background min-h-screen pb-20">
      <SEO
        title="Ontmoet ons span"
        description="Die mense agter die verhale wat saak maak vir rooi rose."
        image={TEAM_PAGE_CONTENT.hero.image}
      />
      <PageContainer
        breadcrumbs={[
          { label: 'Oor ons', href: '/oor-ons' },
          { label: 'Ons span' }
        ]}
        noPadding
      />
      
      {/* Hero Section - Full-width editorial hero */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        <img 
          src={TEAM_PAGE_CONTENT.hero.image} 
          alt={TEAM_PAGE_CONTENT.hero.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              {TEAM_PAGE_CONTENT.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {TEAM_PAGE_CONTENT.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <PageContainer>
        {/* Editorial Team Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              {TEAM_PAGE_CONTENT.sections.editorial.title}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              {TEAM_PAGE_CONTENT.sections.editorial.description}
            </p>
          </div>
          <TeamGrid members={editorialDisplay} columns={3} />
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 dark:border-border my-20 max-w-5xl mx-auto"></div>

        {/* Reporters Section */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              {TEAM_PAGE_CONTENT.sections.reporters.title}
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              {TEAM_PAGE_CONTENT.sections.reporters.description}
            </p>
          </div>
          <TeamGrid members={reportingDisplay} columns={3} />
        </div>

        {/* CTA Section */}
        <div className="mt-24 mb-20">
          <CallToAction 
            title={TEAM_PAGE_CONTENT.cta.title}
            description={TEAM_PAGE_CONTENT.cta.description}
            buttonText={TEAM_PAGE_CONTENT.cta.buttonText}
            buttonLink={TEAM_PAGE_CONTENT.cta.buttonLink}
            theme="dark"
          />
        </div>

      </PageContainer>

      {/* FAQ Section */}
      <PageFAQSection
        items={TEAM_FAQS}
        description="Vrae oor ons span, vryskutwerk en redaksionele onafhanklikheid."
      />
    </div>
  );
};