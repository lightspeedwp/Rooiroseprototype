import React from 'react';
import { Link } from 'react-router';
import { CheckCircle, Trophy, ArrowRight, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { THANKYOU_COMPETITION_FAQS } from '../data/pageFaqs';

export const ThankYouCompetitionPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Kompetisies', href: '/kompetisies' },
          { label: 'Dankie vir jou inskrywing' },
        ]}
      >
        <div className="alignwide py-16">
          <div className="max-w-xl mx-auto">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light dark:from-brand-navy dark:to-brand-navy p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-custom-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Trophy size={36} className="text-custom-primary" />
                </div>
                <h1 className="text-3xl font-normal text-white font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Jy is ingeskryf!
                </h1>
                <p className="text-gray-300">
                  Dankie vir jou deelname aan die kompetisie.
                </p>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8 flex gap-4 items-start">
                  <CheckCircle size={24} className="text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 dark:text-green-300 font-medium mb-1">Inskrywing ontvang!</p>
                    <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
                      Jou inskrywing vir die kompetisie is suksesvol ontvang. Sterkte — ons hoop jy wen!
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8 p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 rounded-lg">
                  <Bell size={20} className="text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-900 dark:text-blue-300 font-medium text-sm mb-1">Wat gebeur volgende?</p>
                    <ul className="text-blue-700 dark:text-blue-400 text-sm space-y-1.5 list-disc list-inside">
                      <li>Die wenner sal na die sluitingsdatum ewekansig uit alle geldige inskrywings gekies word.</li>
                      <li>Die wenner sal per e-pos en telefoon in kennis gestel word.</li>
                      <li>Die wenner sal ook op <em>Die Papier</em> se webwerf aangekondig word.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/kompetisies" className="flex-1">
                    <Button className="w-full bg-custom-primary hover:bg-primary/90 text-white font-bold">
                      Sien meer kompetisies
                    </Button>
                  </Link>
                  <Link to="/" className="flex-1">
                    <Button variant="outline" className="w-full border-brand-navy dark:border-border text-brand-navy dark:text-foreground font-bold">
                      Terug na Tuis
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <PageFAQSection items={THANKYOU_COMPETITION_FAQS} description="Vrae oor kompetisies by Die Papier." />
    </div>
  );
};