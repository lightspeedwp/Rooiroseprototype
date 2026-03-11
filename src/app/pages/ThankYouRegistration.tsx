import React from 'react';
import { CheckCircle, UserCheck, Mail } from 'lucide-react';
import { ThankYouLayout } from '../components/layouts/ThankYouLayout';
import { THANKYOU_REGISTRATION_FAQS } from '../data/pageFaqs';

export const ThankYouRegistrationPage = () => {
  return (
    <ThankYouLayout
      breadcrumbs={[
        { label: 'Registreer', href: '/registreer' },
        { label: 'Dankie vir jou registrasie' },
      ]}
      title={<>Welkom by <em>Die Papier</em>!</>}
      subtitle="Jou rekening is suksesvol geskep."
      primaryAction={{ label: 'Gaan na my rekening', href: '/my-rekening' }}
      secondaryAction={{ label: 'Begin lees', href: '/' }}
      faqItems={THANKYOU_REGISTRATION_FAQS}
      faqDescription="Vrae oor jou Die Papier-rekening."
    >
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8 flex gap-4 items-start">
        <UserCheck size={24} className="text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-green-800 dark:text-green-300 font-medium mb-1">Registrasie voltooi!</p>
          <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
            Dankie dat jy by <em>Die Papier</em> geregistreer het. Jou rekening is gereed om te gebruik.
          </p>
        </div>
      </div>

      {/* Activation notice */}
      <div className="flex items-start gap-4 mb-8 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg">
        <Mail size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-900 dark:text-blue-300 font-medium text-sm mb-1">Aktiveer jou rekening</p>
          <p className="text-blue-700 dark:text-blue-400 text-sm leading-relaxed">
            Ons het 'n bevestigings-e-pos na jou gestuur. Klik op die aktiveringsskakel in die e-pos om jou rekening te aktiveer en volle toegang te kry.
          </p>
        </div>
      </div>

      {/* What you can do */}
      <div className="bg-gray-50 dark:bg-background rounded-lg p-6 border border-gray-100 dark:border-border mb-8">
        <h3 className="font-normal text-brand-navy dark:text-foreground mb-3 text-sm uppercase tracking-wider font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          Met jou nuwe rekening kan jy:
        </h3>
        <ul className="space-y-2.5">
          {[
            <>Inteken op die e-uitgawe van <em>Die Papier</em></>,
            'Kommentaar lewer op artikels',
            'Jou intekeninge en bestellings bestuur',
            'Vinniger deur die betaalpunt beweeg',
            'Aan kompetisies deelneem',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </ThankYouLayout>
  );
};
