import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import { POLICY_COOKIE } from '../data/policies/policyCookie';

const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H4: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_COOKIE;
const SH = D.sectionHeadings;
const CL = D.contactLabels;

export const CookiePolicyPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO 
        title={D.seo.title} 
        description={D.seo.description}
        keywords={D.seo.keywords}
      />

      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.title }
        ]}
        noPadding
      >
        <ContentHero 
          title={D.title}
          subtitle={D.subtitle}
          image={HERO_IMAGES.legal}
        />

        <div className="max-w-[1000px] mb-12 pt-8 px-4 md:px-0 mx-auto">
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
            {SH.lastUpdatedLabel} {D.lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 px-4 md:px-0 mx-auto w-full md:max-w-[1000px]">
          <p>{D.intro}</p>
          <p>{D.preamble}</p>
          <ul className="list-disc pl-5 space-y-2">
            {D.preambleItems.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p>{D.preambleFootnote}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.whatAreCookies}</h3>
          <p>{D.cookieDefinition}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.cookieTypes}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {D.cookieTypes.map((ct, i) => (
              <li key={i}><strong>{ct.type}:</strong> {ct.description}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.cookieManagement}</h3>
          <p>{D.cookieManagement}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.dataSecurity}</h3>
          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{SH.securityMeasures}</h4>
          <p>{D.dataSecurity}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.userRights}</h3>
          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{SH.accessAndCorrection}</h4>
          <ul className="list-disc pl-5 space-y-2"><li>{D.userRights.accessAndCorrection}</li></ul>
          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{SH.deletionAndObjection}</h4>
          <ul className="list-disc pl-5 space-y-2"><li>{D.userRights.deletionAndObjection}</li></ul>
          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{SH.optOut}</h4>
          <ul className="list-disc pl-5 space-y-2"><li>{D.userRights.optOut}</li></ul>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.thirdPartyLinks}</h3>
          <p>{D.thirdPartyLinks}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.policyChanges}</h3>
          <p>{D.policyChanges}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.dataPurposes}</h3>
          <p>{SH.dataPurposesIntro}</p>

          <div className="space-y-6 mt-6">
            {D.dataPurposes.map((dp) => (
              <div key={dp.number} className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-100 dark:border-border">
                <h4 className="text-lg font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={H4}>{dp.number} {dp.heading}</h4>
                <p>{SH.dataPurposeLabel}</p>
                <ul className="list-disc pl-5 mb-2">
                  {dp.data.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
                <p><strong>{SH.retentionLabel}</strong> {dp.retention}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.noDataProvided}</h3>
          <p>{D.noDataProvided}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.cookies}</h3>
          <p>{SH.cookiesText}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.disclosure}</h3>
          {D.disclosure.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.security}</h3>
          <p>{D.securityCommitment}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.thirdPartyWebsites}</h3>
          <p>{D.thirdPartyWebsites}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.amendments}</h3>
          <p>{D.amendments}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.dataAccess}</h3>
          <p>{D.dataAccess}</p>
          <ul className="list-disc pl-5 space-y-2">
            {D.dataAccessRights.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <p className="mt-4">{D.dataAccessNote}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.complaint}</h3>
          <p>{D.complaint.text}</p>
          <div className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border">
            <p>{D.complaint.address}</p>
            <p><strong>{SH.complaintEmailLabel}</strong> <a href={`mailto:${D.complaint.email}`} className="text-text-link-red hover:underline">{D.complaint.email}</a></p>
          </div>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.children}</h3>
          <p>{D.children}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{SH.contactDetails}</h3>
          <div className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border">
            <p className="font-bold text-lg mb-2"><em>{D.contact.entity}</em></p>
            <p className="mb-1"><strong>{CL.address}</strong> {D.contact.address}</p>
            <p className="mb-1"><strong>{CL.advertising}</strong> {D.contact.advertising}</p>
            <p className="mb-1"><strong>{CL.editorial}</strong> <a href={`mailto:${D.contact.editorial}`} className="text-text-link-red hover:underline">{D.contact.editorial}</a></p>
            <p className="mb-1"><strong>{CL.subscribers}</strong> <a href={`mailto:${D.contact.subscribers}`} className="text-text-link-red hover:underline">{D.contact.subscribers}</a></p>
            <p className="mb-0"><strong>{CL.ombudsman}</strong> <a href={`mailto:${D.contact.ombudsman}`} className="text-text-link-red hover:underline">{D.contact.ombudsman}</a></p>
          </div>
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