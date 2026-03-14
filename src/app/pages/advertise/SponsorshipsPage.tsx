import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../../components/common/PageContainer';
import { ContentHero } from '../../components/patterns/ContentHero';
import { Button } from '../../components/ui/button';
import { PageFAQSection } from '../../components/patterns/PageFAQSection';
import { SPONSORSHIPS_FAQS } from '../../data/pageFaqs';
import { renderWithBrandItalics } from '../../utils/brandItalics';
import {
  Trophy,
  Mail,
  CheckCircle,
} from 'lucide-react';
import { HERO_IMAGES } from '../../data/heroImages';
import { SPONSORSHIP_TYPES, SPONSORSHIP_BENEFITS } from '../../data/advertising';

export const SponsorshipsPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen font-inter">
      <PageContainer
        breadcrumbs={[
          { label: 'Adverteer', href: '/adverteer' },
          { label: 'Borgskappe' },
        ]}
        noPadding
      />

      <ContentHero
        title="Borgskappe"
        subtitle="Belyn jou handelsmerk met rooi rose se premium leefstyl-inhoud en bereik welgestelde, stilbewuste vroue deur strategiese borgskap."
        image={HERO_IMAGES.advertise}
        height="small"
      />

      <div className="alignwide py-12">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Borgskappe bied 'n unieke geleentheid om jou handelsmerk te assosieer met <em>rooi rose</em> se premium 
            leefstyl-platform en welgestelde, betrokke gehoor (25-55). Deur ons Mode, Skoonheid, Kos of Gesondheid-afdelings 
            te borg, word jou handelsmerk 'n deel van ons aspirerende verhaal — en ons word 'n deel van joune.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SPONSORSHIP_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center p-6 rounded-xl border border-gray-100 dark:border-border hover:border-primary/20 dark:hover:border-primary/20 hover:bg-gray-50 dark:hover:bg-card transition-[border-color,background-color]"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <benefit.icon size={28} />
              </div>
              <h3 className="text-xl font-normal mb-3 text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Sponsorship Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Borgskapspakkette
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Kies die borgskaptipe wat die beste by jou veldtogdoelwitte pas, of kombineer verskeie opsies.
          </p>
          <div className="space-y-8">
            {SPONSORSHIP_TYPES.map((type) => (
              <div
                key={type.title}
                className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-2xl overflow-hidden hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow hover:border-primary dark:hover:border-primary group flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
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
                    <div className="pl-18 mt-4">
                      <h4 className="text-xs font-normal uppercase tracking-wider text-gray-400 mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>
                        Voorbeelde
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.examples.map((ex) => (
                          <span
                            key={ex}
                            className="text-xs bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Includes */}
                  <div className="bg-gray-50 dark:bg-background rounded-xl p-6">
                    <h4 className="text-sm font-normal text-brand-navy dark:text-foreground mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Wat ingesluit is</h4>
                    <ul className="space-y-2">
                      {type.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle size={14} className="text-green-600 shrink-0 mt-0.5" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories (Mock) */}
        <div className="bg-gray-50 dark:bg-card rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-10 font-heading text-center" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Borgskap in aksie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                sponsor: 'Edgars',
                type: 'Mode & Styl-afdelingsborgskap',
                result: '42% toename in handelsmerkbewustheid onder welgestelde vroue 25-55.',
                duration: '6 maande',
              },
              {
                sponsor: 'Woolworths Beauty',
                type: 'Skoonheidsafdeling-borgskap',
                result: '35% hoër betrokkenheid vergeleke met standaard advertensies.',
                duration: '12 maande',
              },
              {
                sponsor: 'Spier Wine Estate',
                type: 'Kos & Wyn-gebeurtenisborgskap',
                result: '18 000+ direkte lesersbelang en 52% oopkoers op geborgde nuusbriewe.',
                duration: '3 maande',
              },
            ].map((story) => (
              <div key={story.sponsor} className="bg-white dark:bg-card rounded-xl p-6 border border-gray-100 dark:border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={18} className="text-primary" />
                  <span className="font-bold text-brand-navy dark:text-foreground">{story.sponsor}</span>
                </div>
                <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">
                  {story.type}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{story.result}</p>
                <p className="text-xs text-gray-400">Duur: {story.duration}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6 italic">
            * Bogenoemde is verteenwoordigende voorbeelde. Werklike resultate mag verskil.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
            Word 'n borgvennoot
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ons borgskapskappe is buigsaam en word ontwerp om jou spesifieke doelwitte te bereik. 
            Kontak ons vandag vir 'n verpligtingsvrye bespreking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary hover:bg-primary/90 font-bold px-8">
              <Link to="/adverteer#contact-form">Kontak ons</Link>
            </Button>
            <a
              href="mailto:borgskappe@diepapier.co.za"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-2 rounded-md font-bold text-sm transition-colors"
            >
              <Mail size={16} />
              borgskappe@diepapier.co.za
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
      <PageFAQSection items={SPONSORSHIPS_FAQS} description="Vrae oor borgskapsopsies by rooi rose." />
    </div>
  );
};