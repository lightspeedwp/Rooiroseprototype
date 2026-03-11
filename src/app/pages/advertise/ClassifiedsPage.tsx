import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { CLASSIFIEDS_FAQS } from '../../data/pageFaqs';
import { CLASSIFIED_CATEGORIES, CLASSIFIED_PRICING } from '../../data/advertising';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  FileText,
  List,
  Mail,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';

export const ClassifiedsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Geklassifiseerde advertensies' },
        ]}
        noPadding
      />

      <ContentHero
        title="Geklassifiseerde advertensies"
        subtitle="Bereik duisende lesers nasionaal met 'n bekostigbare geklassifiseerde advertensie in Die Papier — gedruk en aanlyn."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <em>Die Papier</em> se geklassifiseerde afdeling is die ideale plek om jou boodskap voor die regte mense te kry. 
            Of jy nou 'n pos adverteer, eiendom bemark, of 'n diens aanbied — ons bekostigbare tariewe en 
            wye verspreiding verseker dat jou advertensie gesien word.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-8 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Kategorieë
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSIFIED_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow group hover:border-primary dark:hover:border-primary bg-white dark:bg-card"
              >
                <div className="w-12 h-12 bg-gray-50 dark:bg-background rounded-lg flex items-center justify-center mb-4 text-primary dark:text-primary group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="font-normal text-lg mb-2 text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Tariewe
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Kies die pakket wat die beste by jou behoeftes pas. Alle pryse sluit BTW in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {CLASSIFIED_PRICING.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? 'bg-brand-navy dark:bg-background text-white shadow-xl ring-2 ring-primary dark:ring-primary scale-[1.02]'
                    : 'bg-white dark:bg-card border border-gray-200 dark:border-border'
                }`}
              >
                {tier.highlighted && (
                  <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full self-start mb-4">
                    Gewild
                  </span>
                )}
                <h3
                  className={`text-xl font-normal mb-2 font-heading ${
                    tier.highlighted ? 'text-white' : 'text-brand-navy dark:text-foreground'
                  }`}
                >
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span
                    className={`text-sm ml-1 ${tier.highlighted ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}
                  >
                    {tier.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          tier.highlighted ? 'text-primary' : 'text-green-600'
                        }`}
                      />
                      <span className={tier.highlighted ? 'text-gray-200' : 'text-gray-600 dark:text-gray-400'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full font-bold ${
                    tier.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white'
                  }`}
                >
                  <Link to="/adverteer#contact-form">Plaas advertensie</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-10 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Hoe dit werk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Kies jou kategorie',
                description: "Besluit in watter afdeling jou advertensie moet verskyn.",
                icon: <List size={24} />,
              },
              {
                step: '2',
                title: 'Skryf jou advertensie',
                description: 'Stel jou advertensieteks op volgens die woordbeperking van jou pakket.',
                icon: <FileText size={24} />,
              },
              {
                step: '3',
                title: 'Stuur & betaal',
                description: 'Stuur jou advertensie deur en maak betaling via ons veilige stelsel.',
                icon: <ArrowRight size={24} />,
              },
              {
                step: '4',
                title: 'Ons publiseer',
                description: "Jou advertensie verskyn in die volgende beskikbare uitgawe én aanlyn.",
                icon: <CheckCircle size={24} />,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deadlines */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Spertyd</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <em>Die Papier</em> verskyn elke Vrydag. Om jou geklassifiseerde advertensie in die volgende uitgawe te plaas, 
                moet ons dit voor Dinsdag 12:00 ontvang.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-primary shrink-0" />
                  <span className="text-gray-200 text-sm">Spertyd: <strong>Dinsdae om 12:00</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-primary shrink-0" />
                  <span className="text-gray-200 text-sm">Publikasie: <strong>Vrydae</strong> (gedruk en aanlyn)</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="font-normal text-lg mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Kontak ons</h3>
              <div className="space-y-3">
                <a
                  href="mailto:advertensies@diepapier.co.za"
                  className="text-gray-300 hover:text-white flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail size={16} className="text-primary" />
                  advertensies@diepapier.co.za
                </a>
              </div>
              <div className="mt-6">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 font-bold">
                  <Link to="/adverteer#contact-form">Stuur navraag</Link>
                </Button>
              </div>
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
      <PageFAQSection items={CLASSIFIEDS_FAQS} description="Vrae oor geklassifiseerde advertensies in Die Papier." />
    </div>
  );
};