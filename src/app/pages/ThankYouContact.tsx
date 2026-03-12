import React from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import { ThankYouLayout } from '../components/layouts/ThankYouLayout';
import { THANKYOU_CONTACT_FAQS } from '../data/pageFaqs';

export const ThankYouContactPage = () => {
  return (
    <ThankYouLayout
      breadcrumbs={[
        { label: 'Kontak', href: '/kontak' },
        { label: 'Dankie vir jou boodskap' },
      ]}
      title="Dankie dat jy ons gekontak het!"
      subtitle="Ons het jou boodskap ontvang."
      primaryAction={{ label: 'Terug na tuisblad', href: '/' }}
      secondaryAction={{ label: 'Lees die nuus', href: '/nuus' }}
      faqItems={THANKYOU_CONTACT_FAQS}
      faqDescription="Vrae oor kontak met rooi rose."
    >
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8 flex gap-4 items-start">
        <MessageCircle size={24} className="text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-green-800 dark:text-green-300 font-medium mb-1">Boodskap suksesvol gestuur</p>
          <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
            Dankie dat jy <em>rooi rose</em> gekontak het. Ons span het jou boodskap ontvang en sal so spoedig moontlik daarop reageer.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 mb-8 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg">
        <Clock size={20} className="text-blue-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-blue-900 dark:text-blue-300 font-medium text-sm mb-1">Wat gebeur volgende?</p>
          <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1.5 list-disc list-inside">
            <li>Ons span sal jou boodskap binne <strong>24–48 uur</strong> beantwoord.</li>
            <li>Jy sal 'n antwoord per e-pos ontvang.</li>
            <li>Vir dringende sake, skakel ons gerus direk.</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-8">
        Vir dringende navrae, kontak ons by{' '}
        <a href="mailto:redaksie@diepapier.co.za" className="text-text-link-red hover:underline font-medium">
          redaksie@diepapier.co.za
        </a>
      </p>
    </ThankYouLayout>
  );
};