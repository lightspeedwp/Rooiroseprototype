import React from 'react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router';
import {
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Mail,
  HelpCircle,
} from 'lucide-react';

export const ReturnsPolicyPage = () => {
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Terugsendingsbeleid - rooi rose"
        description="Lees ons terugsendingsbeleid vir digitale en gedrukte produkte by rooi rose."
        keywords="terugsending, returns, refund, terugbetalings, die papier"
      />

      <PageContainer
        breadcrumbs={[
          { label: 'Beleid', href: '/beleid' },
          { label: 'Terugsendingsbeleid' },
        ]}
      >
        <div className="mb-12 mt-8 border-b border-gray-100 dark:border-border pb-8">
          <div className="flex items-center gap-4 mb-4">
            <RotateCcw className="w-10 h-10 text-primary" />
            <h1 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Terugsendingsbeleid
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-3xl">
            Ons terugsendingsbeleid vir digitale en gedrukte produkte
          </p>
          <p className="text-sm text-gray-500 mt-4">Laas opgedateer: 8 Februarie 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-10">
          {/* Introduction */}
          <section>
            <p className="text-lg leading-relaxed">
              By <em>rooi rose</em> streef ons daarna om uitstekende produkte en dienste te lewer. Ons
              verstaan egter dat daar omstandighede kan wees waar jy 'n terugbetaling of
              kansellasie wil versoek. Hierdie beleid uiteensit jou regte en ons prosedures.
            </p>
          </section>

          {/* Digital Products */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-sm">1</span>
              </div>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading m-0" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Digitale produkte (E-uitgawes)
              </h2>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-700/40 rounded-lg p-5 mb-6 flex items-start gap-3">
              <AlertCircle className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" size={20} />
              <p className="text-sm text-amber-800 dark:text-amber-300 m-0">
                <strong>Belangrik:</strong> Weens die aard van digitale produkte is alle verkope
                van e-uitgawes finaal nadat die inhoud afgelaai of oopgemaak is.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border border-green-200 dark:border-green-800/40 bg-green-50 dark:bg-green-950/30 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="text-green-600 dark:text-green-400" size={18} />
                  <h4 className="font-normal text-green-800 dark:text-green-300 m-0 text-sm uppercase tracking-wider font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    Terugbetaling moontlik
                  </h4>
                </div>
                <ul className="text-sm text-green-800 dark:text-green-300 space-y-2 m-0 list-none p-0">
                  <li>• Dubbele aankoop (dieselfde uitgawe twee keer aangekoop)</li>
                  <li>• Tegniese foute wat verhoed dat die inhoud gelees kan word</li>
                  <li>• Verkeerde uitgawe gelewer (nie wat bestel is nie)</li>
                </ul>
              </div>

              <div className="border border-red-200 dark:border-red-800/40 bg-red-50 dark:bg-red-950/30 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="text-red-600 dark:text-red-400" size={18} />
                  <h4 className="font-heading font-normal text-red-800 dark:text-red-300 m-0 text-sm uppercase tracking-wider" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>
                    Geen terugbetaling
                  </h4>
                </div>
                <ul className="text-sm text-red-800 dark:text-red-300 space-y-2 m-0 list-none p-0">
                  <li>• Die e-uitgawe is reeds afgelaai en gelees</li>
                  <li>• Ontevredenheid met die inhoud van die uitgawe</li>
                  <li>• Versoek meer as 14 dae na aankoop</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Subscriptions */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-sm">2</span>
              </div>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading m-0" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Intekenings (Digitaal & Druk)
              </h2>
            </div>

            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              2.1 Digitale intekenings
            </h3>
            <ul className="space-y-2">
              <li>Jy mag jou digitale intekening te eniger tyd kanselleer.</li>
              <li>
                Kansellasie tree in werking aan die einde van jou huidige faktureringssiklus.
              </li>
              <li>
                Geen pro rata terugbetalings word gemaak vir die res van die huidige periode nie.
              </li>
              <li>
                Jy behou toegang tot reeds-afgelaaide uitgawes na kansellasie.
              </li>
            </ul>

            <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mt-6 mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
              2.2 Druk-intekenings (Huisaflewering)
            </h3>
            <ul className="space-y-2">
              <li>
                Druk-intekenings kan binne <strong>7 dae</strong> na aanvang gekanselleer word
                vir 'n volle terugbetaling, mits geen uitgawes nog afgelewer is nie.
              </li>
              <li>
                Na 7 dae kan intekenings gekanselleer word met 'n pro rata terugbetaling vir
                onafgelewerde uitgawes.
              </li>
              <li>
                Beskadigde of ontbrekende gedrukte uitgawes sal gratis vervang word — kontak ons
                binne 48 uur na verwagte aflewering.
              </li>
            </ul>
          </section>

          {/* Process */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-sm">3</span>
              </div>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading m-0" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Hoe om 'n terugbetaling te versoek
              </h2>
            </div>

            <div className="bg-gray-50 dark:bg-card rounded-xl p-6 border border-gray-100 dark:border-border">
              <ol className="space-y-4 m-0 list-none p-0">
                <li className="flex items-start gap-4">
                  <span className="bg-brand-navy text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong>Stuur 'n e-pos</strong> na{' '}
                    <a
                      href="mailto:intekenings@diepapier.co.za"
                      className="text-text-link-red hover:underline"
                    >
                      intekenings@diepapier.co.za
                    </a>{' '}
                    met die onderwerp "Terugbetalingversoek".
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-brand-navy text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong>Verskaf die volgende inligting:</strong> Jou volle naam,
                    e-posadres, bestellingnommer, en die rede vir die versoek.
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-brand-navy text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong>Ons sal binne 120 werkure reageer</strong> met ons besluit en, indien
                    goedgekeur, die terugbetaling binne 240 werkure verwerk.
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Timeframes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-sm">4</span>
              </div>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading m-0" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Tydlyne
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 dark:bg-card rounded-lg p-5 text-center border border-gray-100 dark:border-border">
                <Clock className="mx-auto text-primary mb-2" size={24} />
                <p className="text-2xl font-bold text-brand-navy dark:text-foreground mb-1">14 dae</p>
                <p className="text-xs text-gray-500">
                  Maksimum tyd na aankoop om 'n versoek in te dien
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-card rounded-lg p-5 text-center border border-gray-100 dark:border-border">
                <Mail className="mx-auto text-primary mb-2" size={24} />
                <p className="text-2xl font-bold text-brand-navy dark:text-foreground mb-1">120 werkure</p>
                <p className="text-xs text-gray-500">Om jou versoek te evalueer en te reageer</p>
              </div>
              <div className="bg-gray-50 dark:bg-card rounded-lg p-5 text-center border border-gray-100 dark:border-border">
                <RotateCcw className="mx-auto text-primary mb-2" size={24} />
                <p className="text-2xl font-bold text-brand-navy dark:text-foreground mb-1">240 werkure</p>
                <p className="text-xs text-gray-500">
                  Om goedgekeurde terugbetalings te verwerk
                </p>
              </div>
            </div>
          </section>

          {/* CRA */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0">
                <span className="font-bold text-sm">5</span>
              </div>
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading m-0" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                Wet op verbruikersbeskerming
              </h2>
            </div>
            <p>
              Hierdie beleid is in ooreenstemming met die Suid-Afrikaanse Wet op
              Verbruikersbeskerming (Wet 68 van 2008), wat verbruikers beskerm teen onregverdige
              handelspraktyke. Jou regte ingevolge hierdie wet word nie deur hierdie beleid
              beperk nie.
            </p>
          </section>

          {/* Contact */}
          <section>
            <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-2xl p-8 text-center text-white">
              <HelpCircle className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="text-2xl font-normal mb-3 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Het jy vrae oor hierdie beleid?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
                Ons kliëntediens-span is beskikbaar om enige vrae te beantwoord.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontak"
                  className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors no-underline"
                >
                  Kontak ons
                </Link>
                <a
                  href="mailto:intekenings@diepapier.co.za"
                  className="inline-block bg-white/10 hover:bg-white/20 text-text-link-red hover:underline"
                >
                  E-pos ons
                </a>
              </div>
            </div>
          </section>
        </div>
      </PageContainer>
    </div>
  );
};