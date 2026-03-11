import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { Megaphone } from 'lucide-react';
import { POLICY_ADVERTISING } from '../data/policies/policyAdvertising';

const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H4: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_ADVERTISING;

export const AdvertisingGuidelinesPage = () => {
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
            <Megaphone className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{D.subtitle}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">{D.intro}</p>
          <p>{D.scope}</p>

          {D.sections.map((section, si) => (
            <div key={si}>
              <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{section.heading}</h3>

              {'subsections' in section && section.subsections ? (
                section.subsections.map((sub, ssi) => (
                  <div key={ssi}>
                    <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{sub.heading}</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {sub.items.map((item: any, ii: number) => (
                        <li key={ii}><strong>{item.bold}</strong> {item.text}</li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : 'items' in section && section.items ? (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item: any, ii: number) => (
                    <li key={ii}><strong>{item.bold}</strong> {item.text}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.contact.heading}</h3>
          <p>{D.contact.text}</p>
          <p>{D.contact.closing}</p>
        </div>

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