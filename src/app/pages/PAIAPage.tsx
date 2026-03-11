import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { FileText, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { POLICY_PAIA } from '../data/policies/policyPaia';

const H2: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

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
      >
        <div className="max-w-[900px] pt-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            <strong>{D.subtitle}</strong>
          </p>
        </div>

        <div className="prose prose-lg max-w-none dark:text-gray-300">
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{D.intro}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{D.purpose}</p>
          </section>

          {/* PDF Download CTA */}
          <div className="bg-gray-50 dark:bg-card border border-gray-200 dark:border-border rounded-lg p-8 text-center mb-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={H3}>{D.pdfDownload.heading}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">{D.pdfDownload.description}</p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 text-lg">
              <Download className="mr-2 h-5 w-5" />
              {D.pdfDownload.buttonLabel}
            </Button>
          </div>

          {/* POPIA Compliance Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={H2}>{C.heading}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{C.intro}</p>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.personalInfo.heading}</h3>
            <p>{C.personalInfo.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {C.personalInfo.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.purposes.heading}</h3>
            <p>{C.purposes.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {C.purposes.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.lawfulness.heading}</h3>
            <p>{C.lawfulness.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {C.lawfulness.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.rights.heading}</h3>
            <p>{C.rights.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {C.rights.items.map((item, i) => (
                <li key={i}><strong>{item.bold}:</strong> {item.text}</li>
              ))}
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.sharing.heading}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {C.sharing.sections.map((s, i) => (
                <li key={i}><strong>{s.bold}:</strong> {s.text}</li>
              ))}
            </ul>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.security.heading}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {C.security.measures.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
            <p className="mt-4">{C.security.breach}</p>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.retentionHeading}</h3>
            <p>{C.retention}</p>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.paiaAccessHeading}</h3>
            <p>{C.paiaAccess}</p>

            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H3}>{C.updatesHeading}</h3>
            <p>{C.updates}</p>
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
      </PageContainer>
    </div>
  );
};