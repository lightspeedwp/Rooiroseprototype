import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { PageContainer } from '../components/common/PageContainer';
import { ContentHero } from '../components/patterns/ContentHero';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { ADVERTISE_FAQS } from '../data/pageFaqs';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { HERO_IMAGES } from '../data/heroImages';
import { AD_OPTIONS, AD_BENEFITS } from '../data/advertising';
import { 
  ArrowRight,
  Map,
  Users,
  Mail,
  BookOpen,
  Globe,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { SEO } from '../components/common/SEO';
import { QuoteSlider } from '../components/brand-quotes/QuoteSlider';

/* ── rooi rose Magazine Advertise Page ──────────────────────────────
 * Editorial design: Full-width hero, pricing cards, editorial form
 * Typography: Playfair Display SC headings
 * Layout: Hero + benefits + pricing + form + FAQ
 * ────────────────────────────────────────────────────────────── */

export const Advertise = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dankie-advertensie-navraag');
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Adverteer"
        description="Adverteer in rooi rose - bereik duisende lesers met geklassifiseerde, vertoon-, digitale en gedrukte advertensies."
        keywords="adverteer, advertensies, geklassifiseerd, vertoon, tariewe, media, rooi rose"
      />
      <PageContainer breadcrumbs={[{ label: 'Adverteer' }]} noPadding />

      {/* Full-Width Editorial Hero */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <img 
          src={HERO_IMAGES.advertise}
          alt="Adverteer met rooi rose"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              Versterk jou handelsmerk
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Wil jou handelsmerk uitbrei? By rooi rose bied ons dinamiese advertensie-oplossings wat jou met gehoor regoor Suid-Afrika verbind.
            </p>
            <a href="#advertensie-navraag" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-red-hover transition-colors shadow-lg">
              Kry 'n kwotasie
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="alignwide py-12">
        
        {/* Ad Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AD_OPTIONS.map((option, index) => {
            const content = (
              <>
                <div className="w-12 h-12 bg-white dark:bg-card rounded-lg flex items-center justify-center mb-4 text-primary dark:text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <option.icon className="w-6 h-6" />
                </div>
                <h3
                  className="font-normal text-lg mb-2 text-brand-navy dark:text-foreground font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
                >{option.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{renderWithBrandItalics(option.description)}</p>
                {option.link ? (
                  <span className="inline-flex items-center gap-1.5 text-text-link-red text-sm font-bold mt-auto group-hover:gap-2.5 transition-[gap]">
                    Lees meer <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                ) : (
                  <button
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center gap-1.5 text-gray-400 text-sm mt-auto hover:text-primary transition-colors"
                  >
                    Navraag <ArrowRight size={14} />
                  </button>
                )}
              </>
            );

            if (option.link) {
              return (
                <Link
                  key={index}
                  to={option.link}
                  className="border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-lg transition-[box-shadow,border-color] bg-gray-50/50 dark:bg-card group hover:border-primary dark:hover:border-primary flex flex-col"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 dark:bg-card group hover:border-primary dark:hover:border-primary flex flex-col"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Leaflet Feature */}
        <div className="bg-brand-navy rounded-2xl p-8 md:p-12 mb-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Map size={14} />
                Ho&#235; Impak
              </div>
              <h2
                className="text-3xl font-normal mb-4 font-heading"
                style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
              >Maksimeer jou impak met pamflet-advertering</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Kry jou boodskap direk in die hande van betrokke lesers met pasgemaakte koerant-insetsels en pamflette. 
                Of dit nou 'n promosie-flyer, katalogus of spesiale aanbod is, ons pamflet-advertering verseker ho&#235; sigbaarheid en geteikende bereik.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-white text-brand-navy hover:bg-gray-100 font-bold px-8">
                  <Link to="/adverteer/pamflette">Lees meer oor pamflette</Link>
                </Button>
                <Button 
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-bold px-8"
                >
                  Vra meer inligting
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <BookOpen className="w-48 h-48 text-white/10" />
            </div>
          </div>
        </div>

        {/* Why rooi rose */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading"
              style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
            >Waarom <em>rooi rose</em>?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Om jou advertering uit te brei is 'n kragtige manier om te verseker dat jou handelsmerkboodskap 
              oor diverse markte aanklank vind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AD_BENEFITS.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-100 dark:border-border hover:border-primary/20 dark:hover:border-primary/20 hover:bg-gray-50 dark:hover:bg-card transition-colors">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary dark:text-primary">
                  {index === 0 ? <Globe size={32} /> : index === 1 ? <CheckCircle size={32} /> : <TrendingUp size={32} />}
                </div>
                <h3
                  className="text-xl font-normal mb-3 text-brand-navy dark:text-foreground font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
                >{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Quote Slider — full-width brand reinforcement */}
      <section className="w-full overflow-hidden">
        <QuoteSlider className="min-h-[350px] md:min-h-[450px]" />
      </section>

      <div className="alignwide py-12">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" id="contact-form">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)]">
              <h2
                className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading"
                style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
              >Begin 'n gesprek</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Vul die vorm hieronder in en een van ons advertensie-spesialiste sal binnekort met jou in verbinding tree.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Naam *</label>
                    <Input required placeholder="Jou naam" className="bg-gray-50 dark:bg-background dark:border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Van *</label>
                    <Input required placeholder="Jou van" className="bg-gray-50 dark:bg-background dark:border-border" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-posadres *</label>
                    <Input required type="email" placeholder="jou@epos.co.za" className="bg-gray-50 dark:bg-background dark:border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Telefoonnommer *</label>
                    <Input required type="tel" placeholder="082 123 4567" className="bg-gray-50 dark:bg-background dark:border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Maatskappynaam</label>
                  <Input placeholder="Jou maatskappy" className="bg-gray-50 dark:bg-background dark:border-border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tipe advertering</label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 dark:bg-background dark:border-border">
                        <SelectValue placeholder="Kies 'n opsie" />
                      </SelectTrigger>
                      <SelectContent>
                        {AD_OPTIONS.map((opt, i) => (
                          <SelectItem key={i} value={opt.title}>{opt.title}</SelectItem>
                        ))}
                        <SelectItem value="Other">Ander</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Streek</label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 dark:bg-background dark:border-border">
                        <SelectValue placeholder="Kies 'n streek" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Nasionaal">Nasionaal</SelectItem>
                        <SelectItem value="Kaapse Skiereiland">Kaapse Skiereiland</SelectItem>
                        <SelectItem value="Boland">Boland</SelectItem>
                        <SelectItem value="Oos-Kaap">Oos-Kaap</SelectItem>
                        <SelectItem value="Vrystaat & Noord-Kaap">Vrystaat & Noord-Kaap</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Vertel ons meer oor jou behoeftes</label>
                  <Textarea placeholder="Beskryf jou veldtog of vereistes..." className="bg-gray-50 dark:bg-background dark:border-border min-h-[120px]" />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Ek stem in tot die <a href="/beleid/terme-en-voorwaardes" className="text-text-link-red hover:underline">Terme en voorwaardes</a>.
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400 leading-none">
                      Teken in op ons nuusbrief vir die jongste nuus en stories.
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox id="privacy" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400 leading-none">
                      Ek stem in tot die <a href="/beleid/privaatheidsbeleid" className="text-text-link-red hover:underline">Privaatheidsbeleid</a>.
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 font-bold py-6 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Besig om te stuur..." : "Stuur navraag"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[--brand-navy-light] text-white p-8 rounded-2xl shadow-lg sticky top-6">
              <h3
                className="text-xl font-normal mb-6 font-heading border-b border-white/20 pb-4"
                style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}
              >
                Kontak ons direk
              </h3>
              <p className="text-gray-300 text-sm mb-8">
                Ons span advertensie-spesialiste is gereed om saam met jou te werk. Kontak die relevante afdeling hieronder.
              </p>

              <div className="space-y-6">
                <div className="group">
                  <h4 className="font-normal text-white mb-2 flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                    <Map size={16} className="text-primary" />
                    Nasionaal
                  </h4>
                  <div className="flex flex-col gap-3 pl-6">
                    <a 
                      href="mailto:advertensies@diepapier.co.za" 
                      className="text-gray-300 hover:text-white hover:underline text-sm flex items-center gap-2 transition-colors"
                    >
                      <Mail size={14} />
                      advertensies@diepapier.co.za
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                 <div className="bg-primary rounded-xl p-6 text-center">
                   <Users className="w-8 h-8 text-white mx-auto mb-3" />
                   <h4 className="font-normal text-lg mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Het jy hulp nodig?</h4>
                   <p className="text-sm text-white/90 mb-4">
                     Onseker watter pakket reg is vir jou? Stuur vir ons 'n algemene navraag.
                   </p>
                   <a 
                    href="mailto:advertensies@diepapier.co.za"
                    className="inline-block bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors w-full"
                   >
                     E-pos ons
                   </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <PageFAQSection
        items={ADVERTISE_FAQS}
        description="Vrae oor advertensie-opsies, tariewe en sluitingsdatums."
      />
    </div>
  );
};