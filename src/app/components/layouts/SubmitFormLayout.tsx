/**
 * SubmitFormLayout — Shared layout for all "Stuur in" submission form pages.
 *
 * Provides: SEO, PageContainer + breadcrumbs, ContentHero, white card with form wrapper,
 * name/email grid, submit button with loading state, FAQ section.
 * Form fields (middle section) are passed via `children`.
 *
 * Extracted for DRY (2026-03-05 memory optimization, Task #48).
 * Used by: SubmitFeedback, SubmitLetter, SubmitShoutout, SubmitStory.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { PageContainer } from '../common/PageContainer';
import { SEO } from '../common/SEO';
import { ContentHero } from '../patterns/ContentHero';
import { PageFAQSection } from '../patterns/PageFAQSection';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubmitFormLayoutProps {
  /** SEO metadata */
  seo: { title: string; description: string; keywords: string };
  /** Breadcrumb trail — "Stuur in" is NOT auto-prepended (allows flexibility) */
  breadcrumbs: BreadcrumbItem[];
  /** Hero section — if provided, renders ContentHero + noPadding on PageContainer */
  hero?: { title: string; subtitle: string; image: string };
  /** Inline header — if hero is not provided, renders an h1 with optional icon and description */
  inlineHeader?: { title: string; description: string; icon?: React.ReactNode };
  /** Submit button label (default: "Stuur in") */
  submitLabel?: string;
  /** Loading button label (default: "Word gestuur...") */
  loadingLabel?: string;
  /** Redirect path after submit (default: "/dankie-vir-jou-indiening") */
  redirectTo?: string;
  /** Info box content (blue AlertCircle box above submit button) */
  infoBox?: React.ReactNode;
  /** FAQ items for bottom section */
  faqItems: Array<{ question: string; answer: string }>;
  /** FAQ section description */
  faqDescription: string;
  /** Whether to show the standard Name & Email grid (default: true) */
  showNameEmail?: boolean;
  /** Variable form fields (between name/email and info box) */
  children: React.ReactNode;
}

export function SubmitFormLayout({
  seo,
  breadcrumbs,
  hero,
  inlineHeader,
  submitLabel = 'Stuur in',
  loadingLabel = 'Word gestuur...',
  redirectTo = '/dankie-vir-jou-indiening',
  infoBox,
  faqItems,
  faqDescription,
  showNameEmail = true,
  children,
}: SubmitFormLayoutProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      navigate(redirectTo);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-16">
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

      <PageContainer breadcrumbs={breadcrumbs} noPadding />

      {hero && (
        <ContentHero title={hero.title} subtitle={hero.subtitle} image={hero.image} />
      )}

      {!hero && inlineHeader && (
        <div className="alignwide pt-8">
          <div className="max-w-2xl">
            {inlineHeader.icon ? (
              <div className="flex items-center gap-3 mb-4">
                {inlineHeader.icon}
                <h1
                  className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading"
                  style={{
                    fontVariationSettings: 'var(--fvs-h1)',
                    lineHeight: 'var(--lh-h1)',
                    letterSpacing: 'var(--ls-h1)',
                  }}
                >
                  {inlineHeader.title}
                </h1>
              </div>
            ) : (
              <h1
                className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-4"
                style={{
                  fontVariationSettings: 'var(--fvs-h1)',
                  lineHeight: 'var(--lh-h1)',
                  letterSpacing: 'var(--ls-h1)',
                }}
              >
                {inlineHeader.title}
              </h1>
            )}
            <p className="text-gray-600 dark:text-gray-400 mb-8">{inlineHeader.description}</p>
          </div>
        </div>
      )}

      <div className="alignwide py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border p-6 md:p-8 shadow-sm dark:shadow-[var(--shadow-dark-100)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {showNameEmail && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam & Van *</Label>
                    <Input id="name" required placeholder="Jou volle naam" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posadres *</Label>
                    <Input id="email" required type="email" placeholder="naam@voorbeeld.co.za" />
                  </div>
                </div>
              )}

              {children}

              {infoBox && (
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg flex gap-3 text-sm text-blue-800 dark:text-blue-300">
                  <AlertCircle className="shrink-0 w-5 h-5 mt-0.5" />
                  <div>{infoBox}</div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-custom-primary hover:bg-custom-primary-2 text-white py-3 text-base font-bold"
              >
                {isSubmitting ? loadingLabel : submitLabel}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <PageFAQSection items={faqItems} description={faqDescription} />
    </div>
  );
}
