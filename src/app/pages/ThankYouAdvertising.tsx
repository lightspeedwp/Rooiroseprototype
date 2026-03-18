import React from 'react';
import { Megaphone, Clock } from 'lucide-react';
import { ThankYouLayout } from '../components/layouts/ThankYouLayout';
import { THANKYOU_ADVERTISING_FAQS } from '../data/pageFaqs';

export const ThankYouAdvertisingPage = () => {
  return (
    <ThankYouLayout
      breadcrumbs={[
        { label: 'Adverteer', href: '/adverteer' },
        { label: 'Dankie vir jou navraag' },
      ]}
      title="Dankie vir jou navraag!"
      subtitle="Ons het jou advertensie-navraag ontvang."
      primaryAction={{ label: 'Terug na tuisblad', href: '/' }}
      secondaryAction={{ label: 'Meer oor adverteer', href: '/adverteer' }}
      faqItems={THANKYOU_ADVERTISING_FAQS}
      faqDescription="Vrae oor advertensie-navrae by rooi rose."
    >
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8 flex gap-4 items-start">
        <Megaphone size={24} className="text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-green-800 dark:text-green-300 font-medium mb-1">Navraag suksesvol gestuur</p>
          <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
            Jou advertensie-navraag is suksesvol ontvang. Ons advertensiespan sal jou binnekort kontak met meer inligting oor ons advertensietariewe en -opsies.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg">
        <Clock size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-900 dark:text-blue-300 font-medium text-sm mb-1">Wat gebeur volgende?</p>
          <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1.5 list-disc list-inside">
            <li>Ons advertensiespan sal jou navraag binne <strong>24–48 werkure</strong> hersien.</li>
            <li>Jy sal 'n persoonlike aanbod via e-pos ontvang.</li>
            <li>Ons sal gepaste advertensieplekke vir jou besigheid aanbeveel.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-8">
        As jy enige vrae het in die tussentyd, kontak ons gerus by{' '}
        <a href="mailto:adverteer@rooirose.co.za" className="text-text-link-red hover:underline font-medium">
          adverteer@rooirose.co.za
        </a>
      </p>
    </ThankYouLayout>
  );
};