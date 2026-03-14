import React, { useState } from 'react';
import { Link } from 'react-router';
import { Heart, Mail, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';
import { toast } from 'sonner';

export const NewsletterReEngagementPage = () => {
  const [status, setStatus] = useState<'pending' | 'resubscribed' | 'declined'>('pending');

  const handleReSubscribe = () => {
    setStatus('resubscribed');
    toast.success("Welkom terug! Jy sal weer ons nuusbriewe ontvang.");
  };

  const handleDecline = () => {
    setStatus('declined');
    toast.info("Jou voorkeure is opgedateer.");
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
          { label: 'Herbetrokkenheid' }
        ]}
      >
        <div className="max-w-xl mx-auto py-8">
          {/* Pending State */}
          {status === 'pending' && (
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-brand-red to-red-600 dark:bg-brand-red p-10 text-center">
                <Heart size={64} className="mx-auto mb-4 text-white" />
                <h1 className="text-4xl font-normal text-white has-brand-serif-font-family mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Ons mis jou!
                </h1>
                <p className="text-white/90 text-lg">
                  Dit lyk of jy al 'n ruk lank nie ons nuusbriewe gelees het nie.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Ons het opgemerk dat jy onlangs nie ons nuusbriewe oopgemaak het nie. Ons wil seker maak dat jy steeds ons nuusbriewe wil ontvang.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    As jy ons nuusbriewe wil aanhou ontvang, klik asseblief op die knoppie hieronder. Andersins sal ons jou van ons poslys verwyder om jou inkassie skoon te hou.
                  </p>
                </div>

                {/* What you're missing */}
                <div className="bg-gray-50 dark:bg-card rounded-lg p-6 mb-8 border border-gray-100 dark:border-border">
                  <h3 className="font-normal text-brand-navy dark:text-foreground mb-3 text-sm uppercase tracking-wider font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    Wat jy mis:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Die jongste nuus en ontledings uit Suid-Afrika</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Eksklusiewe sportdekking en -kommentaar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Plaaslike verhale en gebeure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Spesiale aanbiedings en kompetisies</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={handleReSubscribe}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg"
                  >
                    <Mail size={20} className="mr-2" />
                    Ja, hou my ingeskryf!
                  </Button>
                  <Button
                    onClick={handleDecline}
                    variant="ghost"
                    className="w-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Nee dankie, skryf my uit
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Re-subscribed State */}
          {status === 'resubscribed' && (
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border p-12 text-center">
              <CheckCircle size={56} className="mx-auto mb-6 text-green-500" />
              <h1 className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                Welkom terug!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Ons is bly dat jy besluit het om te bly. Jy sal voortgaan om ons nuusbriewe te ontvang.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Jou volgende nuusbrief sal binnekort in jou inkassie wees.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                  <Link to="/">Terug na tuisblad</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/bestuur-my-nuusbriewe">Bestuur my nuusbriewe</Link>
                </Button>
              </div>
            </div>
          )}

          {/* Declined State */}
          {status === 'declined' && (
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border p-12 text-center">
              <XCircle size={56} className="mx-auto mb-6 text-gray-400" />
              <h1 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                Ons verstaan
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Jy is van ons nuusbrieflys verwyder. Ons sal jou nie meer e-posse stuur nie.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Jy kan enige tyd weer inteken deur ons nuusbrief-bladsy te besoek.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white font-bold">
                  <Link to="/">Terug na tuisblad</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Link to="/nuusbrief-inteken">Teken weer in</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </div>
  );
};