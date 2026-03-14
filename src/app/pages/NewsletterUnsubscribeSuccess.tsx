import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, MailX, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';

export const NewsletterUnsubscribeSuccessPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Nuusbrief', href: '/nuusbrief-inteken' },
          { label: 'Uitskrywing suksesvol' }
        ]}
      >
        <div className="alignwide py-16">
          <div className="max-w-xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 dark:bg-gray-800 p-10 text-center">
                <MailX size={64} className="mx-auto mb-4 text-gray-300" />
                <h1 className="text-4xl font-normal text-white has-brand-serif-font-family mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Suksesvol uitgeskryf
                </h1>
                <p className="text-gray-200 text-lg">
                  Jou nuusbrief-inskrywing is gekanselleer.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 text-center">
                <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 rounded-lg p-6 mb-8 flex gap-4 items-start text-left">
                  <CheckCircle size={24} className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-300 font-medium mb-1">Uitskrywing bevestig</p>
                    <p className="text-green-700 dark:text-green-400 text-sm">
                      Jy is suksesvol van <em className="font-bold not-italic">rooi rose</em> se nuusbrieflys verwyder. Jy sal nie meer nuusbrief-e-posse van ons ontvang nie.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Dit kan tot <strong>48 uur</strong> neem vir die veranderinge om ten volle in werking te tree. Gedurende hierdie tyd mag jy nog 'n laaste nuusbrief ontvang.
                </p>

                <p className="text-sm text-gray-500 mb-8">
                  Ons sal jou mis! Onthou, jy kan enige tyd weer inteken.
                </p>

                {/* Re-subscribe option */}
                <div className="bg-gray-50 dark:bg-card rounded-lg p-6 border border-gray-100 dark:border-border mb-8">
                  <h3 className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Het jy van plan verander?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Geen probleem nie! Jy kan dadelik weer inteken deur op die knoppie hieronder te klik.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <Link to="/nuusbrief-inteken">
                      Teken weer in
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </div>

                {/* Back to homepage */}
                <Button asChild variant="outline" className="w-full">
                  <Link to="/">Terug na tuisblad</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};