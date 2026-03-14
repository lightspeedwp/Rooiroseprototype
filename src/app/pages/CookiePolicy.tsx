import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import { POLICY_COOKIE } from '../data/policies/policyCookie';

/* ── rooi rose Magazine Cookie Policy Page ──────────────────────────────
 * Editorial design: GDPR-compliant legal document with cookie categories
 * Typography: Playfair Display SC headings with red underlines
 * Layout: Hero + max-width prose content
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

        <div className="alignwide py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              <strong>{SH.lastUpdatedLabel}</strong> {D.lastUpdated}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="leading-relaxed text-lg mb-4">{D.intro}</p>
              <p className="leading-relaxed text-base mb-4">{D.preamble}</p>
              <ul className="list-disc pl-6 space-y-3 text-base mb-4">
                {D.preambleItems.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
              </ul>
              <p className="leading-relaxed text-base mb-8">{D.preambleFootnote}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.whatAreCookies}</h2>
              <p className="leading-relaxed text-base">{D.cookieDefinition}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.cookieTypes}</h2>
              <ul className="list-disc pl-6 space-y-3 text-base">
                {D.cookieTypes.map((ct, i) => (
                  <li key={i} className="leading-relaxed"><strong>{ct.type}:</strong> {ct.description}</li>
                ))}
              </ul>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.cookieManagement}</h2>
              <p className="leading-relaxed text-base">{D.cookieManagement}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.dataSecurity}</h2>
              <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>{SH.securityMeasures}</h3>
              <p className="leading-relaxed text-base">{D.dataSecurity}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.userRights}</h2>
              
              <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>{SH.accessAndCorrection}</h3>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li className="leading-relaxed">{D.userRights.accessAndCorrection}</li>
              </ul>
              
              <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>{SH.deletionAndObjection}</h3>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li className="leading-relaxed">{D.userRights.deletionAndObjection}</li>
              </ul>
              
              <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>{SH.optOut}</h3>
              <ul className="list-disc pl-6 space-y-3 text-base">
                <li className="leading-relaxed">{D.userRights.optOut}</li>
              </ul>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.thirdPartyLinks}</h2>
              <p className="leading-relaxed text-base">{D.thirdPartyLinks}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.policyChanges}</h2>
              <p className="leading-relaxed text-base">{D.policyChanges}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.dataPurposes}</h2>
              <p className="leading-relaxed text-base mb-6">{SH.dataPurposesIntro}</p>

              <div className="space-y-6 mt-6 mb-12">
                {D.dataPurposes.map((dp) => (
                  <div key={dp.number} className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border">
                    <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-3 has-brand-serif-font-family" style={H3}>
                      {dp.number} {dp.heading}
                    </h3>
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">{SH.dataPurposeLabel}</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2 text-base">
                      {dp.data.map((d, i) => <li key={i} className="leading-relaxed">{d}</li>)}
                    </ul>
                    <p className="text-base"><strong>{SH.retentionLabel}</strong> {dp.retention}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.noDataProvided}</h2>
              <p className="leading-relaxed text-base">{D.noDataProvided}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.cookies}</h2>
              <p className="leading-relaxed text-base">{SH.cookiesText}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.disclosure}</h2>
              {D.disclosure.split('\n\n').map((p, i) => <p key={i} className="leading-relaxed text-base">{p}</p>)}

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.security}</h2>
              <p className="leading-relaxed text-base">{D.securityCommitment}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.thirdPartyWebsites}</h2>
              <p className="leading-relaxed text-base">{D.thirdPartyWebsites}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.amendments}</h2>
              <p className="leading-relaxed text-base">{D.amendments}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.dataAccess}</h2>
              <p className="leading-relaxed text-base">{D.dataAccess}</p>
              <ul className="list-disc pl-6 space-y-3 text-base">
                {D.dataAccessRights.map((r, i) => <li key={i} className="leading-relaxed">{r}</li>)}
              </ul>
              <p className="mt-4 leading-relaxed text-base">{D.dataAccessNote}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.complaint}</h2>
              <p className="leading-relaxed text-base">{D.complaint.text}</p>
              <div className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border">
                <p className="leading-relaxed text-base">{D.complaint.address}</p>
                <p className="leading-relaxed text-base"><strong>{SH.complaintEmailLabel}</strong> <a href={`mailto:${D.complaint.email}`} className="text-text-link-red hover:underline">{D.complaint.email}</a></p>
              </div>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.children}</h2>
              <p className="leading-relaxed text-base">{D.children}</p>

              <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>{SH.contactDetails}</h2>
              <div className="bg-gray-50 dark:bg-card p-6 rounded-lg border border-gray-200 dark:border-border">
                <p className="font-bold text-lg mb-2"><em>{D.contact.entity}</em></p>
                <p className="mb-1 leading-relaxed text-base"><strong>{CL.address}</strong> {D.contact.address}</p>
                <p className="mb-1 leading-relaxed text-base"><strong>{CL.advertising}</strong> {D.contact.advertising}</p>
                <p className="mb-1 leading-relaxed text-base"><strong>{CL.editorial}</strong> <a href={`mailto:${D.contact.editorial}`} className="text-text-link-red hover:underline">{D.contact.editorial}</a></p>
                <p className="mb-1 leading-relaxed text-base"><strong>{CL.subscribers}</strong> <a href={`mailto:${D.contact.subscribers}`} className="text-text-link-red hover:underline">{D.contact.subscribers}</a></p>
                <p className="mb-0 leading-relaxed text-base"><strong>{CL.ombudsman}</strong> <a href={`mailto:${D.contact.ombudsman}`} className="text-text-link-red hover:underline">{D.contact.ombudsman}</a></p>
              </div>
            </div>
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