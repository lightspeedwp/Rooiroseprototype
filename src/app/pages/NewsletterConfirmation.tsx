import React from 'react';
import { Link } from 'react-router';
import { MailCheck, Inbox, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';

export const NewsletterConfirmationPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
          { label: 'Inskrywing-bevestiging' }
        ]}
      >
        <div className="alignwide py-16">
          <div className="max-w-xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
              {/* Header */}
              <div className="bg-brand-navy dark:bg-brand-navy p-8 text-center">
                <MailCheck size={56} className="mx-auto mb-4 text-green-400" />
                <h1 className="text-3xl font-normal text-white font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Byna daar!
                </h1>
                <p className="text-gray-300">
                  Bevestig jou inskrywing om ons nuusbrief te ontvang.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Confirmation message */}
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg p-6 mb-8">
                  <div className="flex gap-4 items-start">
                    <Inbox size={24} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h2 className="font-normal text-blue-900 dark:text-blue-300 mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Gaan jou e-pos na</h2>
                      <p className="text-blue-800 dark:text-blue-300 text-sm leading-relaxed">
                        Ons het 'n bevestigings-e-pos na jou gestuur. Klik op die skakel in die e-pos om jou inskrywing te bevestig en ons nuusbrief te begin ontvang.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <h3 className="font-normal text-brand-navy dark:text-foreground mb-4 text-sm uppercase tracking-wider font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  Stappe om te voltooi:
                </h3>
                <ol className="space-y-4 mb-8">
                  <li className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-bold">1</span>
                    <div>
                      <p className="font-medium text-brand-navy dark:text-foreground">Maak jou e-posbus oop</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Soek vir 'n e-pos van <em>Die Papier</em>.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-bold">2</span>
                    <div>
                      <p className="font-medium text-brand-navy dark:text-foreground">Klik op die bevestigingskakel</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Die skakel in die e-pos sal jou inskrywing bevestig.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 text-sm font-bold">3</span>
                    <div>
                      <p className="font-medium text-brand-navy dark:text-foreground">Geniet ons nuusbrief!</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Jy sal ons volgende nuusbrief direk in jou inkassie ontvang.</p>
                    </div>
                  </li>
                </ol>

                {/* Help text */}
                <div className="bg-gray-50 dark:bg-background rounded-lg p-5 border border-gray-100 dark:border-border">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <strong>Het jy nie die e-pos ontvang nie?</strong>
                  </p>
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1 list-disc list-inside">
                    <li>Gaan jou gemorspos- of ongewenste-pos-gids na.</li>
                    <li>Maak seker dat die e-posadres korrek was.</li>
                    <li>Wag 'n paar minute — dit kan 'n rukkie neem.</li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <Link to="/">
                      Terug na tuisblad
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/kontak">Kontak ons vir hulp</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};