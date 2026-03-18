import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import {
  Repeat,
  Globe,
  Smartphone,
  Mail,
  CheckCircle,
  Users,
  TrendingUp,
  ArrowRight,
  Target,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import { SEO } from '../../components/common/SEO';

export const SyndicationPage = () => {
  const platforms = [
    {
      title: 'rooi rose Digitale Tydskrif',
      description: 'Bereik lesers op ons premium e-tydskrif platform met volkleur advertensies en interaktiewe inhoud.',
      icon: Smartphone,
      features: [
        'Volkleur-advertensies in digitale formaat',
        'Interaktiewe hiperskakels en video',
        'Responsiewe ontwerp vir alle toestelle',
        'Gedetailleerde lesersanalitiek',
      ],
    },
    {
      title: 'rooi rose Webwerf',
      description: 'Vertoon jou handelsmerk op ons hoë-verkeer webwerf met strepiesprogrammatiese advertensieplasings.',
      icon: Globe,
      features: [
        'Premium posisies bo die vou',
        'Konteks-sensitiewe advertensies',
        'Responsiewe ontwerp vir mobiel en lessenaar',
        'Bereik-gebaseerde prysbepaling',
      ],
    },
    {
      title: 'rooi rose Nuusbrief',
      description: 'Kry direkte toegang tot ons betrokke lesers deur ons weeklikse e-pos nuusbrief.',
      icon: Mail,
      features: [
        '45 000+ ingeskrewe lesers',
        '42% gemiddelde oopkoers',
        'Uitsluitlike advertensieposisies',
        'Gedetailleerde klik-deur statistieke',
      ],
    },
    {
      title: 'rooi rose Sosiale Media',
      description: 'Versterk jou sosiale bereik deur geborgde plasings op ons Facebook, Instagram en Twitter platforms.',
      icon: Users,
      features: [
        '150 000+ gekombineerde volgers',
        'Hoë betrokkenheidskoers (8.2% gemiddeld)',
        'Professionele inhoudskeping',
        'Maandelikse prestasieverslae',
      ],
    },
  ];

  const syndicationPackages = [
    {
      title: 'Basiese Sindikasie',
      price: 'Vanaf R8 500/maand',
      description: 'Ideaal vir besighede wat begin om hul digitale voetspoor te vergroot.',
      features: [
        'Webwerf-advertensies (50 000 vertonings)',
        'Nuusbrief-advertensie (1x per maand)',
        'Sosiale media-plaas (2x per maand)',
        'Maandelikse prestasieverslag',
      ],
    },
    {
      title: 'Premium Sindikasie',
      price: 'Vanaf R18 500/maand',
      description: 'Volledige platformdekking vir maksimum bereik en handelsmerkzigbaarheid.',
      features: [
        'Alles in Basiese Sindikasie',
        'E-tydskrif-advertensies (volkleur)',
        'Nuusbrief-advertensies (4x per maand)',
        'Sosiale media-plasings (8x per maand)',
        'Geborgde inhoud (1 artikel per maand)',
        'Weeklikse prestasieverslae',
        'Toegewyde rekeningbestuurder',
      ],
    },
    {
      title: 'Pasgemaakte Sindikasie',
      price: "Kontak ons vir 'n kwotasie",
      description: 'Volkome aanpasbare veldtogte ontwerp volgens jou unieke behoeftes.',
      features: [
        'Alles in Premium Sindikasie',
        'Pasgemaakte inhoudskeping',
        'Uitgebreide A/B-toetsing',
        'Gevorderde analitiek en insigte',
        'Kwartaallikse strategiese evaluering',
        'Eersteklas advertensieposisies',
      ],
    },
  ];

  const syndicationBenefits = [
    {
      title: 'Verhoogde Bereik',
      description: 'Bereik dieselfde gehoor oor verskeie platforms vir maksimum handelsmerkblootstelling.',
      icon: TrendingUp,
    },
    {
      title: 'Koste-Effektief',
      description: 'Bespaar geld met pakketpryse wat goedkoper is as individuele platform-advertensies.',
      icon: CheckCircle,
    },
    {
      title: 'Konsekwente Boodskap',
      description: "Handhaaf 'n verenigde handelsmerkboodskap oor alle rooi rose platforms.",
      icon: Target,
    },
    {
      title: 'Uitgebreide Analitiek',
      description: 'Verkry volledige insigte oor prestasie oor alle platforms met geïntegreerde verslagdoening.',
      icon: Target,
    },
  ];

  const faqs = [
    {
      question: 'Wat is sindikasie?',
      answer: 'Sindikasie is die proses om jou advertensie of inhoud oor verskeie rooi rose platforms te versprei, insluitend ons webwerf, e-tydskrif, nuusbrief en sosiale media-kanale. Dit verseker maksimum bereik en konsekwente handelsmerkblootstelling oor alle aanrakpunte.',
    },
    {
      question: "Hoeveel kos 'n sindikasie-veldtog?",
      answer: 'Ons sindikasie-pakkette begin by R8 500 per maand vir basiese dekking en gaan tot R18 500+ per maand vir premium volledige platformdekking. Pasgemaakte pakkette is ook beskikbaar gebaseer op jou spesifieke behoeftes en begroting.',
    },
    {
      question: 'Watter platforms is ingesluit?',
      answer: 'Ons sindikasie-pakkette sluit in: rooi rose webwerf, digitale e-tydskrif, weeklikse e-pos nuusbrief, en sosiale media-platforms (Facebook, Instagram, Twitter). Premium pakkette sluit ook geborgde inhoud en uitgebreide analitiek in.',
    },
    {
      question: 'Hoe meet julle sukses?',
      answer: 'Ons verskaf gedetailleerde maandelikse (of weeklikse vir premium pakkette) verslae wat vertonings, klieke, betrokkenheidskoerse, en ander sleutelmaatstawwe oor alle platforms insluit. Jy kry volledige deursigtigheid oor jou veldtogprestasie.',
    },
    {
      question: 'Kan ek my veldtog gedurende die maand wysig?',
      answer: "Ja! Ons verstaan dat bemarkingsbehoeftes verander. Jy kan jou inhoud, teikens of begroting aanpas met 7 dae kennisgewing. Premium pakket-kliënte het toegang tot 'n toegewyde rekeningbestuurder vir vinnige wysigings.",
    },
  ];

  return (
    <>
      <SEO
        title="Sindikasie | Adverteer by rooi rose"
        description="Versterk jou boodskap deur jou inhoud oor veelvuldige rooi rose platforms te sindikeer. Bereik ons welgestelde lesers op webwerf, e-tydskrif, nuusbrief en sosiale media."
        keywords="sindikasie, digitale advertensies, rooi rose, tydskrif advertensies, sosiale media bemarking, nuusbrief advertensies"
        canonicalUrl="/adverteer/sindikasie"
      />
      
      <div className="bg-white dark:bg-background min-h-screen font-inter">
        <PageContainer
          breadcrumbs={[
            { label: 'Adverteer', href: '/adverteer' },
            { label: 'Sindikasie' },
          ]}
          noPadding
        />

        <ContentHero
          title="Sindikasie"
          subtitle="Versterk jou boodskap deur jou inhoud oor veelvuldige rooi rose platforms te sindikeer. Bereik ons welgestelde lesers oral waar hulle is."
          image={HERO_IMAGES.advertise}
          height="small"
        />

        <div className="alignwide py-12">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Sindikasie is die kragtigste manier om jou handelsmerkboodskap te versterk. In plaas van 
              om net een platform te kies, bereik jy {renderWithBrandItalics('rooi rose')} se welgestelde 
              lesers oor ons webwerf, e-tydskrif, nuusbrief en sosiale media — alles met een gekoördineerde 
              veldtog. Maksimeer jou bereik, handhaaf konsekwente handelsmerkblootstelling, en bespaar geld 
              met ons pakketpryse.
            </p>
          </div>

          {/* Stats banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: 'Gekombineerde bereik', value: '200 000+', icon: <Users size={20} /> },
              { label: 'Platform dekking', value: '4+', icon: <Globe size={20} /> },
              { label: 'Gemiddelde ROI', value: '340%', icon: <TrendingUp size={20} /> },
              { label: 'Besparing teenoor enkel', value: '35%', icon: <CheckCircle size={20} /> },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-brand-navy text-white rounded-xl p-5 text-center"
              >
                <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Hoekom sindikasie?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Bereik jou teikenmark oor verskeie aanrakpunte vir maksimum impak.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {syndicationBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="border border-gray-200 dark:border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow hover:border-primary"
                >
                  <div className="w-14 h-14 bg-gray-50 dark:bg-background rounded-xl flex items-center justify-center mb-4 mx-auto text-primary">
                    <benefit.icon size={28} />
                  </div>
                  <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="mb-16">
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Platforms ingesluit
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Jou boodskap bereik {renderWithBrandItalics('rooi rose')} lesers oor al ons platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform) => (
                <div
                  key={platform.title}
                  className="border border-gray-200 dark:border-border rounded-2xl p-8 hover:shadow-lg transition-shadow hover:border-primary group"
                >
                  <div className="w-14 h-14 bg-gray-50 dark:bg-background rounded-xl flex items-center justify-center mb-6 text-primary dark:text-primary group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-white transition-colors">
                    <platform.icon size={28} />
                  </div>
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                    {platform.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={14} className="text-green-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Sindikasie-pakkette
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Kies die pakket wat die beste by jou begroting en doelwitte pas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {syndicationPackages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className={`border rounded-2xl p-8 transition-all ${
                    index === 1
                      ? 'border-primary shadow-xl scale-105 relative'
                      : 'border-gray-200 dark:border-border hover:shadow-lg hover:border-primary'
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Gewildste
                    </div>
                  )}
                  <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    {pkg.title}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/adverteer#contact-form">
                    <Button
                      className={`w-full ${
                        index === 1
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-white dark:bg-card border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      Kry 'n kwotasie
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 dark:bg-muted rounded-2xl p-12 text-center mb-16">
            <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Gereed om te begin?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Kontak ons vandag om jou pasgemaakte sindikasie-veldtog te bespreek en 'n gedetailleerde 
              kwotasie te kry. Ons span is gereed om jou te help om jou handelsmerk te laat groei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/adverteer#contact-form">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Begin 'n gesprek
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link to="/adverteer">
                <Button size="lg" variant="outline">
                  Sien alle advertensie-opsies
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <PageFAQSection faqs={faqs} />
        </div>
      </div>
    </>
  );
};