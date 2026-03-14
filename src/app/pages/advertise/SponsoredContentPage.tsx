import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { SPONSORED_CONTENT_FAQS } from '../../data/pageFaqs';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import {
  Eye,
  Heart,
  Mail,
  CheckCircle,
  Clock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import { SPONSORED_CONTENT_TYPES, SPONSORED_PROCESS_STEPS } from '../../data/advertising';

export const SponsoredContentPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Geborgde inhoud' },
        ]}
        noPadding
      />

      <ContentHero
        title="Geborgde inhoud"
        subtitle="Vertel jou verhaal deur betroubare, hoë-kwaliteit redaksionele inhoud wat rooi rose se welgestelde lesers boei en jou handelsmerk versterk."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Geborgde inhoud is een van die mees doeltreffende maniere om jou teikenmark te bereik.
            In plaas van 'n tradisionele advertensie, vertel jy jou verhaal deur boeiende, 
            leefstyl-georiënteerde inhoud wat deur <em>rooi rose</em> se ervare redaksionele span geskep word — 
            spesiaal ontwerp om jou handelsmerk op 'n outentieke en betrokke manier te bemark in ons 
            premium tydskrif-konteks. Bereik ons welgestelde lesers met inhoud wat waarde toevoeg terwyl 
            dit jou boodskap kommunikeer in Mode, Skoonheid, Kos en Leefstyl kategorieë.
          </p>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Gemiddelde leestyd', value: '4.2 min', icon: <Clock size={20} /> },
            { label: 'Betrokkenheidskoers', value: '78%', icon: <Heart size={20} /> },
            { label: 'Gemiddelde bereik', value: '45 000+', icon: <Eye size={20} /> },
            { label: 'Sosiale deling', value: '12x hoër', icon: <MessageSquare size={20} /> },
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

        {/* Content Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Inhoudstipes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Kies die formaat wat die beste by jou veldtogdoelwitte pas, of kombineer verskeie tipes vir maksimum impak.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPONSORED_CONTENT_TYPES.map((type) => (
              <div
                key={type.title}
                className="border border-gray-200 dark:border-border rounded-2xl p-8 hover:shadow-lg transition-shadow hover:border-primary group"
              >
                <div className="w-14 h-14 bg-gray-50 dark:bg-background rounded-xl flex items-center justify-center mb-6 text-primary dark:text-primary group-hover:bg-primary dark:group-hover:bg-primary group-hover:text-white transition-colors">
                  <type.icon size={28} />
                </div>
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  {type.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
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

        {/* Process */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-10 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Ons proses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPONSORED_PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-normal text-brand-navy dark:text-foreground mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="border border-gray-200 dark:border-border rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
            Redaksionele standaarde
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Alle geborgde inhoud word duidelik gemerk as "Borginhoud" of "In samewerking met" om 
            deursigtigheid teenoor ons lesers te verseker. Ons handhaaf dieselfde hoë redaksionele 
            standaarde vir geborgde inhoud as vir ons eie joernalistieke werk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Alle inhoud word professioneel geredigeer en nagelees.',
              'Inhoud moet feitelik korrek en nie misleidend wees nie.',
              'rooi rose behou die reg om inhoud te weier wat nie aan ons standaarde voldoen nie.',
              'Geborgde inhoud mag nie as onafhanklike joernalistiek voorgestel word nie.',
            ].map((standard) => (
              <div key={standard} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircle size={14} className="text-primary shrink-0 mt-0.5" />
                {renderWithBrandItalics(standard)}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 dark:border-border">
            <Link
              to="/beleid/advertensie-riglyne"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-bold"
            >
              Lees ons volledige Advertensie-riglyne <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Begin jou geborgde inhoudsveldtog
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ons inhoudspan is gereed om saam met jou 'n kragtige verhaal te skep. Kontak ons vandag vir 'n verpligtingsvrye bespreking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 font-bold px-8">
              <Link to="/adverteer#contact-form">Begin 'n gesprek</Link>
            </Button>
            <a
              href="mailto:inhoud@diepapier.co.za"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-2 rounded-md font-bold text-sm transition-colors"
            >
              <Mail size={16} />
              inhoud@diepapier.co.za
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
      <PageFAQSection items={SPONSORED_CONTENT_FAQS} description="Vrae oor geborgde inhoud in rooi rose." />
    </div>
  );
};