import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, Mail, Inbox } from 'lucide-react';
import { ThankYouLayout } from '../components/layouts/ThankYouLayout';
import { THANKYOU_NEWSLETTER_FAQS } from '../data/pageFaqs';

export const ThankYouNewsletterPage = () => {
  return (
    <ThankYouLayout
      breadcrumbs={[
        { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
        { label: 'Dankie vir jou inskrywing' },
      ]}
      title="Dankie vir jou inskrywing!"
      subtitle={<>Jy is nou ingeteken op <em>Die Papier</em> se nuusbrief.</>}
      primaryAction={{ label: 'Begin lees', href: '/' }}
      secondaryAction={{ label: 'Bestuur my nuusbriewe', href: '/bestuur-my-nuusbriewe' }}
      faqItems={THANKYOU_NEWSLETTER_FAQS}
      faqDescription="Vrae oor Die Papier se nuusbrief."
    >
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8 flex gap-4 items-start">
        <Mail size={24} className="text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-green-800 dark:text-green-300 font-medium mb-1">Inskrywing bevestig!</p>
          <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
            Welkom by <em>Die Papier</em> se nuusbrief! Jy sal voortaan die jongste nuus, sport en plaaslike verhale direk in jou inkassie ontvang.
          </p>
        </div>
      </div>

      {/* Check email notice */}
      <div className="flex items-start gap-4 mb-8 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg">
        <Inbox size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-900 dark:text-blue-300 font-medium text-sm mb-1">Gaan jou inkassie na</p>
          <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
            Ons het 'n bevestigings-e-pos na jou gestuur. Maak asseblief seker dat jy dit ontvang het. Kyk ook in jou gemorspos- of ongewenste-pos-gids as jy dit nie in jou inkassie sien nie.
          </p>
        </div>
      </div>

      {/* What to expect */}
      <div className="bg-gray-50 dark:bg-background rounded-lg p-6 border border-gray-100 dark:border-border mb-8">
        <h3 className="font-normal text-brand-navy dark:text-foreground mb-3 text-sm uppercase tracking-wider font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          Wat kan jy verwag:
        </h3>
        <ul className="space-y-2.5">
          {[
            'Die dag se belangrikste nuusverhale, saamgevat',
            'Eksklusiewe ontledings en meningsbydraes',
            'Sport-hoogtepunte en uitslae',
            'Spesiale aanbiedings en kompetisies',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
        Jy kan enige tyd jou{' '}
        <Link to="/bestuur-my-nuusbriewe" className="text-text-link-red hover:underline">
          nuusbrief-voorkeure bestuur
        </Link>{' '}
        of uitskryf deur die skakel onderaan elke e-pos te gebruik.
      </p>
    </ThankYouLayout>
  );
};
