import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { MessageCircle } from 'lucide-react';
import { POLICY_COMMENT } from '../data/policies/policyComment';

const H3: React.CSSProperties = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' };
const H4: React.CSSProperties = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

const D = POLICY_COMMENT;

export const CommentPolicyPage = () => {
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
            <MessageCircle className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {D.title}
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{D.subtitle}</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">{D.intro}</p>

          <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mt-8 mb-4 font-heading" style={H3}>{D.guidelines.heading}</h3>
          {D.guidelines.sections.map((s, i) => (
            <div key={i}>
              <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{s.heading}</h4>
              <p>{s.text}</p>
            </div>
          ))}

          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{D.moderation.heading}</h4>
          <p>{D.moderation.intro}</p>
          <ul className="list-disc pl-5 space-y-2">
            {D.moderation.items.map((item, i) => (
              <li key={i}><strong>{item.bold}</strong> {item.text}</li>
            ))}
          </ul>

          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{D.tips.heading}</h4>
          <ul className="list-disc pl-5 space-y-2">
            {D.tips.items.map((item, i) => (
              <li key={i}><strong>{item.bold}</strong> {item.text}</li>
            ))}
          </ul>

          <h4 className="text-xl font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={H4}>{D.reporting.heading}</h4>
          <p>{D.reporting.text}</p>
        </div>

        <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{D.cta.heading}</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {D.cta.text}
          </p>
          <p className="text-lg text-gray-300 mt-4 font-bold">{D.cta.footnote}</p>
        </div>
      </PageContainer>
    </div>
  );
};