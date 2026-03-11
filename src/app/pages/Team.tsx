import React from 'react';
import { ContentHero } from '../components/patterns/ContentHero';
import { TeamGrid } from '../components/patterns/TeamGrid';
import { CallToAction } from '../components/patterns/CallToAction';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { TEAM_FAQS } from '../data/pageFaqs';
import { TEAM_MEMBERS, TEAM_PAGE_CONTENT } from '../data/team';
import { SEO } from '../components/common/SEO';

export const TeamPage = () => {
  // Filter team members by department
  const editorialDisplay = TEAM_MEMBERS.filter(m => m.department === 'redaksioneel').sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  const reportingDisplay = TEAM_MEMBERS.filter(m => m.department === 'verslaggewers').sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

  return (
    <div className="bg-white dark:bg-background min-h-screen pb-20">
      <SEO
        title="Ontmoet ons span"
        description="Die mense agter die stories wat saak maak in Suid-Afrika."
        image={TEAM_PAGE_CONTENT.hero.image}
      />
      <PageContainer
        breadcrumbs={[
          { label: 'Oor ons', href: '/oor-ons' },
          { label: 'Ons span' }
        ]}
        noPadding
      />
      <ContentHero 
        title={TEAM_PAGE_CONTENT.hero.title}
        subtitle={TEAM_PAGE_CONTENT.hero.subtitle}
        image={TEAM_PAGE_CONTENT.hero.image}
      />

      <PageContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            {TEAM_PAGE_CONTENT.sections.editorial.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            {TEAM_PAGE_CONTENT.sections.editorial.description}
          </p>
          <TeamGrid members={editorialDisplay} columns={3} />
        </div>

        <div className="border-t border-gray-100 dark:border-border my-16"></div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            {TEAM_PAGE_CONTENT.sections.reporters.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            {TEAM_PAGE_CONTENT.sections.reporters.description}
          </p>
          <TeamGrid members={reportingDisplay} columns={3} />
        </div>

        <div className="mt-20">
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