import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { DISPLAY_ADS_FAQS } from '../../data/pageFaqs';
import { DISPLAY_PRINT_OPTIONS, DISPLAY_DIGITAL_OPTIONS, DISPLAY_BENEFITS } from '../../data/advertising';
import { Monitor, Maximize2, Mail, CheckCircle } from 'lucide-react';
import { Newspaper } from '../../components/icons/NewspaperIcon';
import { HERO_IMAGES } from '../../data/heroImages';

const H2_STYLE = { fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' };
const H3_STYLE = { fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' };

export const DisplayAdvertisingPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Vertoonadvertensies' },
        ]}
        noPadding
      />

      <ContentHero
        title="Vertoonadvertensies"
        subtitle="Maak 'n impak met visueel kragtige advertensies in rooi rose se gedrukte en digitale platforms."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <em>rooi rose</em> se vertoonadvertensies bied jou die geleentheid om jou handelsmerk visueel te vertoon
            aan ons betrokke lesersmark. Van volbladsy gedrukte advertensies tot dinamiese digitale baniere — 
            ons bied plasing-opsies wat by elke begroting en veldtog pas.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DISPLAY_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-xl border border-gray-100 dark:border-border hover:border-primary/20 dark:hover:border-primary/20 hover:bg-gray-50 dark:hover:bg-card transition-[border-color,background-color]"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary dark:text-primary">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-normal mb-3 text-brand-navy dark:text-foreground font-heading" style={H3_STYLE}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Print Options */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center text-white">
              <Newspaper size={20} />
            </div>
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading" style={H2_STYLE}>
              Gedrukte advertensies
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            Ons gedrukte vertoonadvertensies verskyn in <em>rooi rose</em> se weeklikse uitgawe wat nasionaal versprei word.
            Kies uit verskeie groottes en plasingsopsies om jou teikenmark te bereik.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISPLAY_PRINT_OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow hover:border-primary dark:hover:border-primary group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-normal text-brand-navy dark:text-foreground font-heading" style={H3_STYLE}>{opt.name}</h3>
                  <Maximize2
                    size={16}
                    className="text-gray-400 group-hover:text-primary transition-colors shrink-0 mt-1"
                  />
                </div>
                <p className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded inline-block mb-3">
                  {opt.size}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Options */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <Monitor size={20} />
            </div>
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading" style={H2_STYLE}>
              Digitale advertensies
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
            Bereik ons aanlyn lesers met geteikende digitale vertoonadvertensies op diepapier.co.za.
            Ons bied verskeie formate en plasingsopsies met gedetailleerde prestasieverslae.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISPLAY_DIGITAL_OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow hover:border-primary dark:hover:border-primary group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-normal text-brand-navy dark:text-foreground font-heading" style={H3_STYLE}>{opt.name}</h3>
                  <Monitor
                    size={16}
                    className="text-gray-400 group-hover:text-primary transition-colors shrink-0 mt-1"
                  />
                </div>
                <p className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded inline-block mb-3">
                  {opt.size}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            Tegniese spesifikasies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-normal text-brand-navy dark:text-foreground mb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                <Newspaper size={18} className="text-primary dark:text-primary" />
                Drukwerk
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {[
                  'Formaat: PDF (drukgereed, hoë resolusie)',
                  'Kleurmodel: CMYK',
                  'Resolusie: Minimum 300 dpi',
                  'Snymerke: 3mm aftrek (bleed)',
                  'Lettertipes moet ingebed wees',
                ].map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-normal text-brand-navy dark:text-foreground mb-4 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                <Monitor size={18} className="text-primary dark:text-primary" />
                Digitaal
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {[
                  'Formate: JPG, PNG, GIF of HTML5',
                  'Kleurmodel: RGB / sRGB',
                  'Maksimum lêergrootte: 150KB (statiese), 200KB (geanimeerd)',
                  'Animasie: Maksimum 15 sekondes, 3 loops',
                  'SSL-versoenbare klikskakel vereis',
                ].map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-normal mb-4 font-heading" style={H2_STYLE}>
            Gereed om jou handelsmerk te vertoon?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Kontak ons advertensiespanne vir 'n pasgemaakte kwotasie of laai ons volledige tariewekaart af.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 font-bold px-8">
              <Link to="/adverteer#contact-form">Kry 'n kwotasie</Link>
            </Button>
            <a
              href="mailto:advertensies@diepapier.co.za"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-2 rounded-md font-bold text-sm transition-colors"
            >
              <Mail size={16} />
              advertensies@diepapier.co.za
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/adverteer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-bold"
          >
            &larr; Terug na Adverteer-oorsig
          </Link>
        </div>
      </div>
      <PageFAQSection items={DISPLAY_ADS_FAQS} description="Vrae oor vertoonadvertensies in rooi rose." />
    </div>
  );
};