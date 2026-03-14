import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import { Cpu } from 'lucide-react';
import { POLICY_AI } from '../data/policies/policyAI';

/* ── rooi rose Magazine AI Policy Page ──────────────────────────────
 * Editorial design: Transparency document about AI usage
 * Typography: Playfair Display SC headings with red underlines
 * Layout: Hero + max-width prose content
 * ────────────────────────────────────────────────────────────── */

const H2: React.CSSProperties = { 
  fontVariationSettings: "var(--fvs-h2)", 
  lineHeight: 'var(--lh-h2)', 
  letterSpacing: 'var(--ls-h2)', 
  fontSize: 'var(--text-h2)' 
};

const D = POLICY_AI;

export const AIPolicyPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.breadcrumbLabel }
        ]}
        noPadding
      >
        {/* Editorial Hero with Icon Badge */}
        <div className="bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900 dark:from-background dark:via-brand-navy dark:to-background py-20 lg:py-24">
          <div className="alignwide">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="w-20 h-20 rounded-full bg-brand-red/20 flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-brand-red" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {D.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">{D.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="alignwide py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed text-lg mb-4">{D.intro}</p>
              <p className="leading-relaxed text-base mb-8">{D.preamble}</p>

              {D.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed text-base mb-4">{section.intro}</p>
                  {section.items && (
                    <ul className="list-disc pl-6 space-y-3 text-base">
                      {section.items.map((item, ii) => <li key={ii} className="leading-relaxed">{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                {D.promise.heading}
              </h2>
              <p className="leading-relaxed text-base mb-4">{D.promise.text}</p>
              <p className="leading-relaxed text-base">{D.promise.moreInfo}</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="alignwide pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-navy dark:bg-brand-navy text-white p-10 lg:p-12 rounded-xl text-center">
              <h3 className="text-3xl font-normal mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                {D.cta.heading}
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {D.cta.text}
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};