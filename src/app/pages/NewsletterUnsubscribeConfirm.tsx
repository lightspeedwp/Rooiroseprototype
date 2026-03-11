import React, { useState } from 'react';
import { Link } from 'react-router';
import { AlertTriangle, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { UNSUBSCRIBE_REASONS } from '../data/newsletterUnsubscribe';

export const NewsletterUnsubscribeConfirmPage = () => {
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUnsubscribe = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = '/nuusbrief-uitskryf-sukses';
    }, 1000);
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
          { label: 'Uitskrywing bevestiging' }
        ]}
      >
        <div className="max-w-xl mx-auto py-8">
          <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border overflow-hidden">
            {/* Header */}
            <div className="bg-brand-navy p-8 text-center">
              <AlertTriangle size={48} className="mx-auto mb-4 text-amber-400" />
              <h1 className="text-3xl font-normal text-white font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                Wil jy uitskryf?
              </h1>
              <p className="text-gray-300">
                Ons is jammer om jou te sien gaan.
              </p>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              {/* Warning */}
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/40 rounded-lg p-5 mb-8">
                <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                  <strong>Let wel:</strong> As jy uitskryf, sal jy nie meer <em>Die Papier</em> se nuusbrief ontvang nie. Jy kan enige tyd weer inteken.
                </p>
              </div>

              {/* Reason Selection */}
              <div className="mb-8">
                <Label className="block mb-3 font-bold text-brand-navy dark:text-foreground">
                  Help ons verbeter — hoekom wil jy uitskryf? <span className="text-gray-400 font-normal">(opsioneel)</span>
                </Label>
                <div className="space-y-2">
                  {UNSUBSCRIBE_REASONS.map((r) => (
                    <label
                      key={r}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                        reason === r
                          ? 'border-primary bg-red-50 dark:bg-red-950/30'
                          : 'border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-card'
                      }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={r}
                        checked={reason === r}
                        onChange={(e) => setReason(e.target.value)}
                        className="accent-primary"
                      />
                      <span className="text-sm text-gray-700 dark:text-foreground">{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Alternative: Manage preferences */}
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 mb-8">
                <div className="flex gap-3 items-start">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900 dark:text-blue-200 font-medium text-sm mb-1">
                      Eerder jou voorkeure aanpas?
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      In plaas van uitskryf, kan jy{' '}
                      <Link to="/bestuur-my-nuusbriewe" className="underline font-medium hover:text-blue-900">
                        jou nuusbrief-voorkeure bestuur
                      </Link>{' '}
                      om net die nuusbriewe te ontvang waarin jy belangstel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleUnsubscribe}
                  disabled={isSubmitting}
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-bold"
                >
                  {isSubmitting ? 'Word verwerk...' : 'Bevestig uitskrywing'}
                </Button>
                <Button asChild className="flex-1 bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white font-bold">
                  <Link to="/">Kanselleer — Hou my ingeskryf</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};