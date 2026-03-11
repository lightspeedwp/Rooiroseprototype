import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { SUPPLEMENTS_FAQS } from '../../data/pageFaqs';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import {
  Mail,
  CheckCircle,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import { SUPPLEMENT_TYPES, SUPPLEMENT_SERVICES, SUPPLEMENT_TIMELINE } from '../../data/advertising';

export const SupplementsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Bylaes' },
        ]}
        noPadding
      />

      <ContentHero
        title="Bylaes"
        subtitle="Vertoon jou handelsmerk met 'n toegewyde advertensiebylaag — professioneel ontwerp, gedruk en by winkels regoor die land versprei."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            'n Bylaag in <em>Die Papier</em> is the uiteindelike manier om jou handelsmerk, produk of geleentheid 
            met diepte en detail aan ons lesers voor te stel. Met professionele ontwerp, redaksionele inhoud 
            en nasionale verspreiding, bied bylaes 'n premium advertensie-ervaring wat lank na die publikasiedatum waarde lewer.
          </p>
        </div>

        {/* Services */}
        <div className="bg-brand-navy rounded-2xl p-8 md:p-12 mb-16 text-white">
          <h2 className="text-3xl font-normal mb-8 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Volledige dienspakket
          </h2>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Van konsep tot verspreiding — ons span hanteer elke aspek van jou bylaag.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPLEMENT_SERVICES.map((service) => (
              <div key={service.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-primary mb-3"><service.icon size={18} /></div>
                <h3 className="font-normal mb-2 text-sm font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{renderWithBrandItalics(service.description)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supplement Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Tipes bylaes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Kies die bylaagtipe wat die beste by jou behoeftes pas, of werk met ons span om 'n pasgemaakte oplossing te skep.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUPPLEMENT_TYPES.map((type) => (
              <div
                key={type.title}
                className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl p-8 hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow hover:border-primary dark:hover:border-primary group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-50 dark:bg-background rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <type.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                      {type.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                      {renderWithBrandItalics(type.description)}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 bg-gray-50 dark:bg-background rounded-lg p-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Bladsye</p>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">{type.pages}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Formaat</p>
                    <p className="text-sm font-bold text-brand-navy dark:text-foreground">{type.format}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Ideaal vir</p>
                    <p className="text-sm font-bold text-primary">{type.ideal.split(',')[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-10 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Tipiese tydlyn
          </h2>
          <div className="max-w-3xl mx-auto">
            {SUPPLEMENT_TIMELINE.map((item, index) => (
              <div key={item.week} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  {index < SUPPLEMENT_TIMELINE.length - 1 && (
                    <div className="w-px flex-grow bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {item.week}
                  </span>
                  <h3 className="font-normal text-brand-navy dark:text-foreground mt-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{item.task}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{renderWithBrandItalics(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="border border-gray-200 dark:border-border rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            Tegniese spesifikasies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Drukspesifikasies</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {[
                  'Formaat: PDF/X-1a (drukgereed)',
                  'Kleurmodel: CMYK',
                  'Resolusie: 300 dpi',
                  'Snymerke: 5mm aftrek (bleed)',
                  'Papiertipes: 80gsm (binnebladsye), 170gsm (omslag)',
                  'Bindmetode: Saalsteek of parfek-binding',
                ].map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Belangrike notas</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {[
                  'Minimum bestelling: 10 000 kopieë per streek.',
                  'Finale materiaal moet 10 werksdae voor publikasie ingedien word.',
                  'Proefdrukke word vir goedkeuring voorsien.',
                  'Die Papier se advertensie-riglyne is van toepassing.',
                  'BTW word bygereken by alle kwotasies.',
                  'Kansellasie: 5 werksdae voor drukdatum.',
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                    {renderWithBrandItalics(note)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Skep jou bylaag met <em>Die Papier</em>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ons ervare span is gereed om jou bylaag van konsep tot verspreiding te hanteer. 
            Kontak ons vandag vir 'n verpligtingsvrye kwotasie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 font-bold px-8">
              <Link to="/adverteer#contact-form">Kry 'n kwotasie</Link>
            </Button>
            <a
              href="mailto:bylaes@diepapier.co.za"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-2 rounded-md font-bold text-sm transition-colors"
            >
              <Mail size={16} />
              bylaes@diepapier.co.za
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
      <PageFAQSection items={SUPPLEMENTS_FAQS} description="Vrae oor koerantbylaes by Die Papier." />
    </div>
  );
};