/**
 * ⚠️ DEPRECATED FOR WORDPRESS MIGRATION ⚠️
 * 
 * This component handles client-side form submission which is NOT used in the WordPress theme.
 * In the WordPress environment, this will be replaced by the native Gravity Forms block.
 * 
 * See: /guidelines/wordpress-migration/gravity-forms-strategy.md
 */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { NEWSLETTER_FAQS } from '../data/pageFaqs';
import { ContentHero } from '../components/patterns/ContentHero';
import { HERO_IMAGES } from '../data/heroImages';
import {
  Mail,
  Shield,
  Lock,
  UserX,
  LogOut,
  Scale,
  Database,
  Zap,
  Gift,
  SlidersHorizontal,
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';

/* ── rooi rose Magazine Newsletter Subscribe ──────────────────────────────
 * Editorial design: Full-width hero, editorial form
 * Typography: Playfair Display SC headings
 * Layout: Hero + benefits + form + privacy + FAQ
 * ────────────────────────────────────────────────────────────── */

export const NewsletterSubscribe = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dankie-vir-nuusbrief-inskrywing');
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-background min-h-screen pb-20">
      <SEO
        title="Teken in op ons gratis nuusbrief | rooi rose"
        description="Teken in op rooi rose se gratis nuusbrief en ontvang die jongste nuus, eksklusiewe stories en opdaterings direk in jou inkassie."
        keywords="nuusbrief, inteken, subscribe, newsletter, rooi rose, afrikaans"
      />

      <PageContainer breadcrumbs={[{ label: 'Nuusbrief Inskrywing' }]} noPadding />

      {/* Full-Width Editorial Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <img
          src={HERO_IMAGES.newsletter}
          alt="Teken in op ons nuusbrief"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 bg-brand-red px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
              <Mail size={16} />
              Gratis Nuusbrief
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              Bly ingelig
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Teken in op rooi rose se gratis nuusbrief en ontvang die jongste nuus, eksklusiewe stories en opdaterings direk in jou inkassie.
            </p>
          </div>
        </div>
      </div>

      <div className="alignwide py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ─── Left Column: Form ─── */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
                Nuusbrief-inskrywing
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Alles wat jy moet en wil weet — gratis
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Teken in op ons gratis nuusbrief en ontvang die jongste nuus, eksklusiewe stories en
                belangrike opdaterings direk in jou inkassie.
              </p>
            </div>

            {/* ─── Join Mailing List ─── */}
            <div className="mb-10">
              <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-6 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Sluit aan by ons posbus
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div>
                  <Label className="text-sm font-medium text-foreground mb-3 block">Naam</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Input
                        placeholder="Voornaam"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red"
                      />
                      <p className="text-xs text-muted-foreground">Voornaam</p>
                    </div>
                    <div className="space-y-1.5">
                      <Input
                        placeholder="Van"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red"
                      />
                      <p className="text-xs text-muted-foreground">Van</p>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <Label className="text-sm font-medium text-foreground mb-1.5 block">
                    E-posadres <span className="text-brand-red">*</span>
                  </Label>
                  <Input
                    type="email"
                    placeholder="jou@e-pos.co.za"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-red hover:bg-brand-red-hover text-white font-bold px-10 py-5"
                >
                  {isSubmitting ? 'Besig om in te teken...' : 'Teken in'}
                </Button>
              </form>
            </div>

            {/* ─── Privacy & Data Assurance ─── */}
            <div className="border border-border rounded-xl p-6 md:p-8 dark:bg-card">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="text-brand-red shrink-0" size={24} />
                <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  Privaatheid en data-versekering
                </h3>
              </div>

              <ul className="space-y-5 text-sm text-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <Lock size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Jou data is veilig:</strong> Ons neem jou privaatheid ernstig op. Jou
                    e-posadres word veilig gestoor en beskerm met bedryfsstandaard-enkripsie en
                    sekuriteitsmaatreëls.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Uitsluitlik vir nuusbriewe:</strong> Ons gebruik jou e-pos slegs om
                    ons nuusbrief en belangrike opdaterings te stuur. Dit sal nie gedeel, verkoop
                    of vir enige ander doel gebruik word nie.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <UserX size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Geen derdeparty-deling:</strong> Ons deel nie jou persoonlike
                    inligting met derde partye of adverteerders nie. Jou data bly by ons.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <LogOut size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Maklike uitskrywing:</strong> Jy kan te eniger tyd uitskryf deur die
                    blokkie in die Nuusbriewe-oortjie van jou{' '}
                    <Link
                      to="/my-rekening"
                      className="text-brand-red dark:text-brand-red hover:underline font-medium"
                    >
                      My rekening
                    </Link>{' '}
                    bladsy af te merk.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Scale size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Nakoming van databeskermingswette:</strong> Ons voldoen aan POPIA
                    (Wet op die Beskerming van Persoonlike Inligting) en GDPR-standaarde om te
                    verseker dat jou data verantwoordelik hanteer word.
                    <br />
                    <Link
                      to="/beleid/paia"
                      className="text-brand-red dark:text-brand-red hover:underline font-medium"
                    >
                      Lees ons POPIA-beleid hier
                    </Link>
                    .
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <Database size={16} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-brand-navy dark:text-foreground">Minimale data-insameling:</strong> Ons versamel slegs die nodige
                    besonderhede vir nuusbriefverspreiding — geen ekstra persoonlike inligting
                    word versoek nie.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Right Column: Why Subscribe ─── */}
          <div className="lg:col-span-1">
            <div className="bg-brand-navy dark:bg-card dark:border dark:border-border text-white p-6 md:p-8 rounded-xl shadow-lg sticky top-6">
              <h3 className="text-xl md:text-2xl font-normal mb-6 font-heading uppercase tracking-wide text-white" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Waarom inteken?
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Zap size={18} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">Jongste nuuswaarskuwings</strong>
                    <p className="text-sm text-gray-300 leading-relaxed m-0">
                      Wees die eerste om te weet van belangrike stories en opdaterings regoor
                      Suid-Afrika.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Newspaper size={18} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">
                      Eksklusiewe verhale en ontledings
                    </strong>
                    <p className="text-sm text-gray-300 leading-relaxed m-0">
                      Ontvang diepgaande verslaggewing, rubrieke en kundige ontledings wat jy
                      nêrens anders sal vind nie.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gift size={18} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">Spesiale aanbiedinge</strong>
                    <p className="text-sm text-gray-300 leading-relaxed m-0">
                      Ontvang eksklusiewe aanbiedinge, promosies en uitnodigings na gebeure.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <SlidersHorizontal size={18} className="text-brand-red dark:text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-1">
                      Persoonlike opdaterings
                    </strong>
                    <p className="text-sm text-gray-300 leading-relaxed m-0">
                      Pas jou nuusbriefvoorkeure aan op grond van wat vir jou die belangrikste
                      is.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="border-t border-white/10 mt-6 pt-5">
                <p className="text-xs text-gray-400">
                  Deur <em>rooi rose</em>-span &middot; Februarie 2026
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FAQ Section */}
      <PageFAQSection
        items={NEWSLETTER_FAQS}
        description="Vrae oor ons nuusbrief en hoe om jou voorkeure te bestuur."
      />
    </div>
  );
};