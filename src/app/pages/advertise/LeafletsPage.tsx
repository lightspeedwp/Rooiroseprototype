import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { LEAFLETS_FAQS } from '../../data/pageFaqs';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import {
  Map,
  Package,
  Clock,
  Mail,
  CheckCircle,
  MapPin,
  Users,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import { LEAFLET_DISTRIBUTION_AREAS, LEAFLET_SPECS } from '../../data/advertising';

export const LeafletsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Pamflette' },
        ]}
        noPadding
      />

      <ContentHero
        title="Pamflet-advertering"
        subtitle="Kry jou boodskap direk in die hande van welgestelde, stilbewuste lesers met rooi rose tydskrif-insetsels."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Pamflet-insetsels bied 'n tasbare, hoë-impak manier om jou teikenmark te bereik.
            Jou pamflet, flyer of katalogus word saam met <em>rooi rose</em> se weeklikse premium tydskrif versprei — 
            direk in die hande van welgestelde huishoudings landwyd wat gepassioneererd is oor kwaliteit-leefstyl, mode, 
            skoonheid en kulinêre verfyning. Dit is 'n kragtige manier om jou produk, diens of spesiale aanbod 
            reg voor jou teikenmark te kry.
          </p>
        </div>

        {/* Why Leaflets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Premie-gehoor',
              description: 'Bereik welgestelde huishoudings wat rooi rose se leefstyl-inhoud waardeer — affluente lesers met koopkrag.',
              icon: Users,
            },
            {
              title: 'Geteikende verspreiding',
              description: 'Kies spesifieke streke of gaan nasionaal vir maksimum dekking by jou ideale teikenmark.',
              icon: MapPin,
            },
            {
              title: 'Hoë impak',
              description: 'Jou pamflet word fisies in die hande van lesers geplaas — \'n tasbare, onvermybare teenwoordigheid.',
              icon: Package,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 rounded-xl border border-gray-100 dark:border-border hover:border-primary/20 dark:hover:border-primary/20 hover:bg-gray-50 dark:hover:bg-card transition-[border-color,background-color]"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-normal mb-3 text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Distribution Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Verspreidingsgebiede
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Kies jou teikengebied of kombineer streke vir breër bereik. Ons bied buigsame opsies om by jou veldtog te pas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEAFLET_DISTRIBUTION_AREAS.map((area) => (
              <div
                key={area.region}
                className={`rounded-xl p-6 border ${
                  area.region === 'Nasionaal'
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-white dark:bg-card border-gray-200 dark:border-border hover:border-primary dark:hover:border-primary'
                } hover:shadow-lg transition-[box-shadow,border-color]`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-normal font-heading ${area.region === 'Nasionaal' ? 'text-white' : 'text-brand-navy dark:text-foreground'}`} style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                    {area.region}
                  </h3>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded ${
                      area.region === 'Nasionaal'
                        ? 'bg-primary text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {area.copies}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Map size={14} className={`shrink-0 mt-0.5 ${area.region === 'Nasionaal' ? 'text-gray-400' : 'text-gray-400'}`} />
                  <p className={`text-sm ${area.region === 'Nasionaal' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                    {area.areas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-8 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            Spesifikasies & vereistes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {LEAFLET_SPECS.map((spec) => (
              <div key={spec.label} className="bg-white dark:bg-card rounded-lg p-5 border border-gray-100 dark:border-border">
                <div className="text-primary mb-3"><spec.icon size={18} /></div>
                <h4 className="font-heading font-normal text-brand-navy dark:text-foreground text-sm mb-1" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>{spec.label}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-card rounded-lg p-6 border border-gray-100 dark:border-border">
            <h3 className="font-heading font-normal text-brand-navy dark:text-foreground mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Belangrike notas</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {[
                'Pamflette moet vooraf gedruk by ons drukkery of kantoor afgelewer word.',
                'Minimum bestel: 5 000 pamflette per streek.',
                "Maksimum gewig per pamflet: 50g (vir insetsels bo 50g, kontak ons vir 'n kwotasie).",
                'Afleweringsdatum: Minstens 5 werksdae voor publikasie.',
                'Rooi rose behou die reg om insetsels te weier wat nie aan ons advertensie-riglyne voldoen nie.',
              ].map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                  {renderWithBrandItalics(note)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Gereed om te begin?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Kontak ons pamfletspan vandag vir 'n pasgemaakte kwotasie gebaseer op jou teikengebied, 
                hoeveelheid en spesifikasies.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-primary" />
                  <span className="text-gray-200 text-sm">
                    Spertyd: <strong>Woensdag 12:00</strong> (vir daaropvolgende Vrydag)
                  </span>
                </div>
                <a
                  href="mailto:advertensies@diepapier.co.za"
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  advertensies@diepapier.co.za
                </a>
              </div>
            </div>
            <div className="text-center">
              <Button asChild className="bg-primary hover:bg-primary/90 font-bold px-10 py-6 text-lg">
                <Link to="/adverteer#contact-form">Stuur navraag</Link>
              </Button>
            </div>
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
      <PageFAQSection items={LEAFLETS_FAQS} description="Vrae oor pamfletverspreiding met rooi rose." />
    </div>
  );
};