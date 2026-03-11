import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import { POLICY_PRIVACY } from '../data/policies/policyPrivacy';

const H2: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_PRIVACY;
const FL = D.footnoteLabels;
const TT = D.templateText;
const CL = D.contactLabels;

export const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.title }
        ]}
        noPadding
      />

      <ContentHero 
        title={D.title}
        subtitle={D.subtitle}
        image={HERO_IMAGES.legal}
      />

      <div className="alignwide py-10">
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">{D.intro}</p>

          {/* Overview sections */}
          {D.overview.map((section, si) => (
            <div key={`ov-${si}`}>
              <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H2}>{section.heading}</h3>
              {section.subsections.map((sub, ssi) => (
                <div key={`ov-${si}-${ssi}`}>
                  <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{sub.heading}</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {sub.items.map((item, ii) => <li key={ii}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="my-8 h-px bg-gray-200 dark:bg-border"></div>

          {/* Numbered sections */}
          {D.numberedSections.map((section) => (
            <div key={`ns-${section.number}`}>
              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mt-10 mb-6 font-heading" style={H2}>
                {section.number}. {section.heading}
              </h2>

              {'paragraph' in section && section.paragraph && (
                <p className="mb-4">{section.paragraph}</p>
              )}

              {'subsections' in section && section.subsections?.map((sub, ssi) => (
                <div key={ssi}>
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{sub.heading}</h3>
                  {'paragraph' in sub && sub.paragraph && <p className="mb-4">{sub.paragraph}</p>}
                  {'items' in sub && sub.items && (
                    <ul className="list-disc pl-5 space-y-2">
                      {sub.items.map((item, ii) => <li key={ii}>{item}</li>)}
                    </ul>
                  )}
                </div>
              ))}

              {'items' in section && section.items && (
                <ul className="list-disc pl-5 space-y-2">
                  {section.items.map((item, ii) => <li key={ii}>{item}</li>)}
                </ul>
              )}

              {'footnote' in section && section.footnote && (
                <div className={`${section.number === 3 ? 'bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-400 dark:border-yellow-500/40' : section.number === 5 ? 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 dark:border-blue-500/40' : ''} p-4 mt-4`}>
                  {section.number === 3 && <p className="font-bold">{FL.important}</p>}
                  {section.number === 5 && <p className="font-bold">{FL.note}</p>}
                  <p>{section.footnote}</p>
                </div>
              )}

              {'contactEmail' in section && section.contactEmail && (
                <p className="mt-4">
                  {TT.exerciseRights} <a href={`mailto:${section.contactEmail}`} className="text-text-link-red hover:underline font-bold">{section.contactEmail}</a>
                </p>
              )}

              {'contact' in section && section.contact && (
                <div className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border mt-4">
                  <p className="font-bold text-lg mb-2"><em>{section.contact.entity}</em></p>
                  <p className="mb-1"><strong>{CL.email}</strong> <a href={`mailto:${section.contact.email}`} className="text-text-link-red hover:underline">{section.contact.email}</a></p>
                  <p className="mb-1"><strong>{CL.office}</strong> {section.contact.office}</p>
                  <p className="mb-1"><strong>{CL.advertising}</strong> {section.contact.advertising}</p>
                  <p className="mb-0"><strong>{CL.delivery}</strong> {section.contact.delivery} {CL.deliveryConnector} <a href={`mailto:${section.contact.deliveryEmail}`} className="text-text-link-red hover:underline">{section.contact.deliveryEmail}</a></p>
                </div>
              )}
            </div>
          ))}

          <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{D.cta.heading}</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {D.cta.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};