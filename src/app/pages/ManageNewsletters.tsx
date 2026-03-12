import React, { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Settings, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';
import { toast } from 'sonner';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { INITIAL_NEWSLETTERS } from '../data/newsletterOptions';
import type { NewsletterOption } from '../data/newsletterOptions';

export const ManageNewslettersPage = () => {
  const [newsletters, setNewsletters] = useState<NewsletterOption[]>(INITIAL_NEWSLETTERS);
  const [saved, setSaved] = useState(false);

  const handleToggle = (id: string) => {
    setNewsletters(prev =>
      prev.map(nl =>
        nl.id === id ? { ...nl, subscribed: !nl.subscribed } : nl
      )
    );
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    toast.success('Jou nuusbrief-voorkeure is opgedateer.');
  };

  const handleUnsubscribeAll = () => {
    setNewsletters(prev => prev.map(nl => ({ ...nl, subscribed: false })));
    setSaved(false);
    toast.info('Alle nuusbriewe is gedeaktiveer. Klik "Stoor voorkeure" om te bevestig.');
  };

  const subscribedCount = newsletters.filter(nl => nl.subscribed).length;

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
          { label: 'Bestuur my nuusbriewe' }
        ]}
      >
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <Settings size={40} className="mx-auto mb-4 text-brand-navy dark:text-brand-navy-light" />
            <h1 className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Bestuur my nuusbriewe
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Kies watter nuusbriewe jy van <em>rooi rose</em> wil ontvang.
              Jy is tans op <strong className="text-primary">{subscribedCount}</strong> nuusbrief{subscribedCount !== 1 ? 'e' : ''} ingeteken.
            </p>
          </div>

          {/* Newsletter Options */}
          <div className="space-y-4 mb-8">
            {newsletters.map((nl) => (
              <div
                key={nl.id}
                className={`bg-white dark:bg-card rounded-lg border p-5 transition-[border-color,box-shadow] cursor-pointer ${
                  nl.subscribed
                    ? 'border-primary/30 dark:border-primary/30 shadow-sm dark:shadow-[var(--shadow-dark-100)]'
                    : 'border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-border'
                }`}
                onClick={() => handleToggle(nl.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Toggle */}
                  <div className="pt-0.5 shrink-0">
                    <div
                      className={`w-12 h-7 rounded-full relative transition-colors ${
                        nl.subscribed ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                          nl.subscribed ? 'translate-x-5.5' : 'translate-x-0.5'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Mail size={16} className={nl.subscribed ? 'text-primary' : 'text-gray-400'} />
                      <h3 className={`font-normal ${nl.subscribed ? 'text-brand-navy dark:text-foreground' : 'text-gray-500 dark:text-gray-400'} font-heading`} style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                        {nl.name}
                      </h3>
                      {nl.subscribed && (
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                          Aktief
                        </span>
                      )}
                    </div>
                    <p className={`text-sm mb-2 ${nl.subscribed ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500'}`}>
                      {renderWithBrandItalics(nl.description)}
                    </p>
                    <p className="text-xs text-gray-400">
                      <strong>Frekwensie:</strong> {nl.frequency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              onClick={handleSave}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-5"
            >
              {saved ? (
                <span className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  Voorkeure gestoor!
                </span>
              ) : (
                'Stoor voorkeure'
              )}
            </Button>
            <Button
              onClick={handleUnsubscribeAll}
              variant="outline"
              className="text-gray-500 hover:text-primary hover:border-primary"
            >
              Skryf uit van alles
            </Button>
          </div>

          {/* Footer info */}
          <div className="bg-gray-50 dark:bg-card rounded-lg p-5 border border-gray-100 dark:border-border text-center">
            <p className="text-xs text-gray-500">
              Jou e-posadres word gebruik in ooreenstemming met ons{' '}
              <Link to="/beleid/privaatheidsbeleid" className="text-text-link-red hover:underline">
                Privaatheidsbeleid
              </Link>
              . Jy kan enige tyd jou voorkeure verander of heeltemal uitskryf.
            </p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};