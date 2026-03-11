import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { POLICY_PRESS_CODE } from '../data/policies/policyPressCode';

const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H4: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_PRESS_CODE;

export const PressCodePage = () => {
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
            <Newspaper className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{D.subtitle}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">{D.intro}</p>

          <div className="bg-gray-50 dark:bg-card border-l-4 border-primary p-4 my-6">
            <p className="font-bold text-brand-navy dark:text-foreground">{D.ombudBox.label}</p>
            <p>{D.ombudBox.name} <a href={`mailto:${D.ombudEmail}`} className="text-text-link-red hover:underline">{D.ombudEmail}</a></p>
          </div>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.principles.heading}</h3>
          <p>{D.principles.intro}</p>

          {D.principles.sections.map((section, i) => (
            <div key={i}>
              <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{section.heading}</h4>
              {'intro' in section && section.intro && <p>{section.intro}</p>}
              {'text' in section && section.text && <p>{section.text}</p>}
              {'items' in section && section.items && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item: any, ii: number) => (
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

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.membership.heading}</h3>
          <p>{D.membership.text}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.learnMore.heading}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {D.learnMore.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
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