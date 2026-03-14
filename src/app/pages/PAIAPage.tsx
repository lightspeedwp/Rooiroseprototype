import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { Shield, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { POLICY_PAIA } from '../data/policies/policyPaia';

/* ── rooi rose Magazine PAIA Page ──────────────────────────────
 * Editorial design: Access to Information law document
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

const D = POLICY_PAIA;
const C = D.popiaCompliance;

export const PAIAPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: D.title }
        ]}
        noPadding
      >
        {/* Editorial Hero with Icon Badge */}
        <div className="bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900 dark:from-background dark:via-brand-navy dark:to-background py-20 lg:py-24">
          <div className="alignwide">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon Badge */}
              <div className="w-20 h-20 rounded-full bg-brand-red/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-brand-red" strokeWidth={2} />
              </div>
              
              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {D.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <strong>{D.subtitle}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="alignwide py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <section className="mb-12">
                <p className="leading-relaxed text-lg mb-4">{D.intro}</p>
                <p className="leading-relaxed text-base">{D.purpose}</p>
              </section>

              {/* PDF Download CTA */}
              <div className="bg-gray-50 dark:bg-card border-2 border-gray-200 dark:border-border rounded-xl p-10 text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-brand-red" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-3 has-brand-serif-font-family" style={H3}>
                  {D.pdfDownload.heading}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto leading-relaxed">
                  {D.pdfDownload.description}
                </p>
                <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold py-3 px-8 text-base">
                  <Download className="mr-2 h-5 w-5" />
                  {D.pdfDownload.buttonLabel}
                </Button>
              </div>

              {/* POPIA Compliance Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family mt-12 mb-6 border-b-2 border-brand-red pb-3 inline-block" style={H2}>
                  {C.heading}
                </h2>
                <p className="leading-relaxed text-base mb-6">{C.intro}</p>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.personalInfo.heading}
                </h3>
                <p className="leading-relaxed text-base mb-4">{C.personalInfo.description}</p>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.personalInfo.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
                </ul>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.purposes.heading}
                </h3>
                <p className="leading-relaxed text-base mb-4">{C.purposes.description}</p>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.purposes.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
                </ul>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.lawfulness.heading}
                </h3>
                <p className="leading-relaxed text-base mb-4">{C.lawfulness.description}</p>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.lawfulness.items.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
                </ul>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.rights.heading}
                </h3>
                <p className="leading-relaxed text-base mb-4">{C.rights.description}</p>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.rights.items.map((item, i) => (
                    <li key={i} className="leading-relaxed"><strong>{item.bold}:</strong> {item.text}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.sharing.heading}
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.sharing.sections.map((s, i) => (
                    <li key={i} className="leading-relaxed"><strong>{s.bold}:</strong> {s.text}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.security.heading}
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-base">
                  {C.security.measures.map((m, i) => <li key={i} className="leading-relaxed">{m}</li>)}
                </ul>
                <p className="mt-4 leading-relaxed">{C.security.breach}</p>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.retentionHeading}
                </h3>
                <p className="leading-relaxed">{C.retention}</p>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.paiaAccessHeading}
                </h3>
                <p className="leading-relaxed">{C.paiaAccess}</p>

                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 has-brand-serif-font-family" style={H3}>
                  {C.updatesHeading}
                </h3>
                <p className="leading-relaxed">{C.updates}</p>
              </section>

              {/* Information Officer Contact */}
              <section className="mb-12">
                <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={H2}>{D.informationOfficer.heading}</h2>
                <div className="bg-white dark:bg-card border-l-4 border-primary p-6 shadow-sm dark:shadow-[var(--shadow-dark-200)]">
                  <p className="mb-2"><strong>{D.informationOfficer.nameLabel}</strong> {D.informationOfficer.name}</p>
                  <p className="mb-0"><strong>{D.informationOfficer.emailLabel}</strong> <a href={`mailto:${D.informationOfficer.email}`} className="text-text-link-red font-bold hover:underline">{D.informationOfficer.email}</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};