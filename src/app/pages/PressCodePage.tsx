import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { FileText } from 'lucide-react';
import { POLICY_PRESS_CODE } from '../data/policies/policyPressCode';

/* ── rooi rose Magazine Press Code Page ──────────────────────────────
 * Editorial design: Journalism ethics document
 * Typography: Playfair Display SC headings with red underlines
 * Layout: Gradient hero with icon + max-width prose content
 * ────────────────────────────────────────────────────────────── */

const H2: React.CSSProperties = { 
  fontVariationSettings: "var(--fvs-h2)", 
  lineHeight: 'var(--lh-h2)', 
  letterSpacing: 'var(--ls-h2)', 
  fontSize: 'var(--text-h2)' 
};

const H3: React.CSSProperties = { 
  fontVariationSettings: "var(--fvs-h3)", 
  lineHeight: 'var(--lh-h3)', 
  letterSpacing: 'var(--ls-h3)', 
  fontSize: 'var(--text-h3)' 
};

const D = POLICY_PRESS_CODE;

export const PressCodePage = () => {
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
                <FileText className="w-10 h-10 text-brand-red" strokeWidth={2} />
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
              <p className="leading-relaxed text-lg mb-8">{D.intro}</p>

              {/* Ombudsman Contact Card */}
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-brand-red p-6 my-8 rounded-r-lg">
                <p className="font-bold text-brand-navy dark:text-foreground mb-2 text-lg">{D.ombudBox.label}</p>
                <p className="text-base">
                  {D.ombudBox.name} — <a href={`mailto:${D.ombudEmail}`} className="text-text-link-red hover:underline font-medium">{D.ombudEmail}</a>
                </p>
              </div>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                {D.principles.heading}
              </h2>
              <p className="leading-relaxed text-base mb-6">{D.principles.intro}</p>

              {D.principles.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>{section.heading}</h3>
                  {'intro' in section && section.intro && <p className="leading-relaxed text-base mb-4">{section.intro}</p>}
                  {'text' in section && section.text && <p className="leading-relaxed text-base mb-4">{section.text}</p>}
                  {'items' in section && section.items && (
                    <ul className="list-disc pl-6 space-y-3 text-base">
                      {section.items.map((item: any, ii: number) => (
                        <li key={ii} className="leading-relaxed">
                          {typeof item === 'string' ? item : (
                            <><strong>{item.bold}</strong> {item.text}</>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                {D.membership.heading}
              </h2>
              <p className="leading-relaxed text-base mb-6">{D.membership.text}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                {D.learnMore.heading}
              </h2>
              <ul className="list-disc pl-6 space-y-3 text-base">
                {D.learnMore.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
              </ul>
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