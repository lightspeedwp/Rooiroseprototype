import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { Cpu } from 'lucide-react';
import { POLICY_AI } from '../data/policies/policyAI';

const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };

const D = POLICY_AI;

export const AIPolicyPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.breadcrumbLabel }
        ]}
      >
        <div className="max-w-[1000px] pt-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{D.subtitle}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">{D.intro}</p>
          <p>{D.preamble}</p>

          {D.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{section.heading}</h3>
              <p>{section.intro}</p>
              {section.items && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item, ii) => <li key={ii}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.promise.heading}</h3>
          <p>{D.promise.text}</p>
          <p>{D.promise.moreInfo}</p>
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