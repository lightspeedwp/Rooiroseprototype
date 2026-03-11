import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { POLICIES_FAQS } from '../data/pageFaqs';
import { POLICIES, POLICIES_HERO, POLICIES_SUMMARY } from '../data/policies';
import { Link } from 'react-router';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { SEO } from '../components/common/SEO';
import { ContentHero } from '../components/patterns/ContentHero';

export const PoliciesPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title={POLICIES_HERO.title}
        description={POLICIES_HERO.subtitle}
      />
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid' }
        ]}
        noPadding
      >
        <ContentHero 
          title={POLICIES_HERO.title}
          subtitle={POLICIES_HERO.subtitle}
          image={POLICIES_HERO.image}
        />

        <div className="alignwide py-10">
          {/* Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {POLICIES.map((policy) => (
            <Link
              key={policy.link}
              to={policy.link}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] rounded-lg p-8 hover:border-primary dark:hover:border-primary hover:shadow-xl dark:hover:shadow-[var(--shadow-dark-400)] transition-[border-color,box-shadow] group flex flex-col h-full"
            >
              <div className="flex-grow">
                <policy.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                  {policy.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {renderWithBrandItalics(policy.description)}
                </p>
              </div>
              <span className="text-text-link-red font-bold group-hover:underline mt-auto pt-4">
                Lees meer →
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Summary */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            {POLICIES_SUMMARY.title}
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {POLICIES_SUMMARY.items.map((item, index) => (
              <div key={index} className="flex gap-3">
                <div className="text-primary font-bold shrink-0">✓</div>
                <p dangerouslySetInnerHTML={{ __html: item.replace('nooit', '<strong>nooit</strong>') }} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </PageContainer>

      {/* FAQ Section */}
      <PageFAQSection
        items={POLICIES_FAQS}
        description="Vrae oor ons beleid, privaatheid en klagteprosedures."
      />
    </div>
  );
};