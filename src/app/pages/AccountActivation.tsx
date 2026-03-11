import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckCircle, Loader2, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageContainer } from '../components/common/PageContainer';

export const AccountActivationPage = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'already' | 'error'>('loading');

  // Simulate activation process
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('success');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Rekening-aktivering' }
        ]}
      >
        <div className="alignwide py-16">
          <div className="max-w-xl mx-auto">
            {/* Loading State */}
            {status === 'loading' && (
              <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border p-12 text-center">
                <Loader2 className="mx-auto h-12 w-12 text-primary animate-spin mb-6" />
                <h1 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Rekening word geaktiveer...
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Wag asseblief terwyl ons jou rekening aktiveer.
                </p>
              </div>
            )}

            {/* Success State */}
            {status === 'success' && (
              <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border overflow-hidden">
                <div className="bg-brand-navy dark:bg-brand-navy p-8 text-center">
                  <CheckCircle size={56} className="mx-auto mb-4 text-green-400" />
                  <h1 className="text-3xl font-normal text-white font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                    Rekening Geaktiveer!
                  </h1>
                  <p className="text-gray-300 dark:text-gray-400">
                    Jou rekening is suksesvol geaktiveer.
                  </p>
                </div>

                <div className="p-8 md:p-10 text-center">
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-6 mb-8">
                    <p className="text-green-800 dark:text-green-300">
                      Welkom by <em>Die Papier</em>! Jou rekening is nou aktief en gereed om te gebruik. Jy kan nou inteken, kommentaar lewer en toegang tot eksklusiewe inhoud kry.
                    </p>
                  </div>

                  <h2 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Wat volgende?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <Link
                      to="/my-rekening"
                      className="flex flex-col items-center gap-2 p-5 bg-gray-50 dark:bg-muted rounded-lg border border-gray-100 dark:border-border hover:border-primary dark:hover:border-primary transition-colors group"
                    >
                      <Mail size={24} className="text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                      <span className="font-medium text-sm text-brand-navy dark:text-foreground">My rekening</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Bestuur jou profiel</span>
                    </Link>
                    <Link
                      to="/nuusbrief-inteken"
                      className="flex flex-col items-center gap-2 p-5 bg-gray-50 dark:bg-muted rounded-lg border border-gray-100 dark:border-border hover:border-primary dark:hover:border-primary transition-colors group"
                    >
                      <Mail size={24} className="text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
                      <span className="font-medium text-sm text-brand-navy dark:text-foreground">Nuusbrief</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Teken in op ons nuusbrief</span>
                    </Link>
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                    <Link to="/my-rekening">Gaan na my rekening</Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Already Activated */}
            {status === 'already' && (
              <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border p-12 text-center">
                <CheckCircle size={48} className="mx-auto mb-6 text-blue-500" />
                <h1 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Rekening reeds geaktiveer
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Hierdie rekening is reeds geaktiveer. Jy kan inteken om toegang tot jou rekening te kry.
                </p>
                <Button asChild className="bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white font-bold px-8">
                  <Link to="/my-rekening">Teken in</Link>
                </Button>
              </div>
            )}

            {/* Error State */}
            {status === 'error' && (
              <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary">!</span>
                </div>
                <h1 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                  Aktivering onsuksesvol
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ons kon nie jou rekening aktiveer nie. Die aktiveringsskakel mag verval het of ongeldig wees.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                  Probeer asseblief weer registreer of kontak ons ondersteuningspan vir hulp.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold">
                    <Link to="/my-rekening">Probeer weer</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/kontak">Kontak ons</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};