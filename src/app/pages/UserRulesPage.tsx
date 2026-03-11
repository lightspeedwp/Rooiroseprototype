import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { Users, Facebook } from 'lucide-react';
import { POLICY_USER_RULES } from '../data/policies/policyUserRules';

const PH3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const PH4: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_USER_RULES;

export const UserRulesPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.title }
        ]}
      >
        <div className="max-w-[1000px] pt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg italic">
            {D.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1 prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">{D.intro}</p>

            {D.sections.map((section, si) => (
              <div key={si}>
                <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={PH3}>{section.heading}</h3>

                {section.subsections?.map((sub, ssi) => (
                  <div key={ssi}>
                    <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={PH4}>{sub.heading}</h4>

                    {'paragraph' in sub && sub.paragraph && (
                      <p className="mb-4">{sub.paragraph}</p>
                    )}

                    {'items' in sub && sub.items && (
                      <ul className="list-disc pl-5 space-y-2">
                        {sub.items.map((item: any, ii: number) => (
                          <li key={ii}>
                            {typeof item === 'string' ? item : (
                              <><strong>{item.bold}</strong> {item.text}</>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Sidebar / Blue Block */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-brand-navy text-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{D.sidebar.heading}</h3>
              <p className="mb-6 text-gray-300">
                {D.sidebar.text}
              </p>
              <a 
                href={D.sidebar.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-4 rounded transition-colors"
              >
                <Facebook size={20} />
                {D.sidebar.buttonLabel}
              </a>
            </div>
          </div>
        </div>

        {/* Black Block at Bottom */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{D.cta.heading}</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {D.cta.text}
          </p>
        </div>
      </PageContainer>
    </div>
  );
};