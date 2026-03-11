import React from 'react';
import { Button } from '../components/ui/button';
import { Check, Truck, FileText, ArrowRight, Star, ChevronRight } from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { Link, useLocation } from 'react-router';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { SUBSCRIBE_FAQS } from '../data/pageFaqs';
import { PageContainer } from '../components/common/PageContainer';
import { HERO_IMAGES } from '../data/heroImages';
import { QuoteSlider } from '../components/brand-quotes/QuoteSlider';
import { E_EDITION_SUBSCRIPTIONS } from '../data/subscriptions';
import { DemoStateSwitcher } from '../components/common/DemoStateSwitcher';

export const SubscribeEEdition = () => {
  const location = useLocation();
  
  // Demo state switcher
  type SubscribeDemoState = 'logged-out' | 'subscriber' | 'expired-subscriber';
  const [demoState, setDemoState] = React.useState<SubscribeDemoState>('logged-out');
  
  // Determine if we are on the e-edition specific route or the main subscription page
  const isEEditionRoute = location.pathname.includes('/e-uitgawe') || location.pathname.includes('/e-edition');
  
  // Select the appropriate hero image based on the route
  const heroImage = isEEditionRoute ? HERO_IMAGES.eEditions : HERO_IMAGES.subscription;

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-24 font-inter">
      <SEO 
        title="Teken in - Die Papier" 
        description="Teken in op Die Papier se digitale e-koerant. Kies uit ons buigsame opsies."
        keywords="teken in, subscribe, die papier, e-koerant, e-uitgawe"
      />
      
      <PageContainer 
        breadcrumbs={[
          { label: 'Teken in' }
        ]}
        noPadding
      />
      
      {/* Modern Hero Section */}
      <div className="relative border-b border-gray-100 dark:border-border pb-20 pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            key={heroImage}
            src={heroImage}
            alt={isEEditionRoute ? "Reading newspaper" : "Building with price tag"} 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:from-transparent dark:via-transparent dark:to-background"></div>
        </div>

        <div className="alignwide text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
            Kies jou pakket
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-normal text-brand-navy dark:text-foreground mb-6" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            <em>Die Papier</em> se e-koerant
          </h1>
          <p className="text-xl text-gray-500 dark:text-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Kry toegang tot die e-koerant elke week. Bevat alle inhoud van die drukkoerant. <em>Die Papier</em> is Vrydag op die rak in uitgesoekte winkels.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Volledige inhoud van drukkoerant</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Lees op enige toestel</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-green-600" /> R35 per enkele e-uitgawe</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-green-600" /> Kies jou streek by intekening</span>
          </div>
        </div>
      </div>

      <div className="alignwide relative z-10 pt-12 lg:pt-20 pb-8 lg:pb-12">
        
        {/* ─── Active Subscriber Banner ─── */}
        {demoState === 'subscriber' && (
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <Check size={24} className="text-green-600 dark:text-green-400 shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-normal text-green-900 dark:text-green-200 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Jy is reeds 'n intekenaar</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">Jou intekening is aktief. Besoek jou biblioteek om e-uitgawes te lees.</p>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold shrink-0">
              <Link to="/my-e-uitgawes">My biblioteek</Link>
            </Button>
          </div>
        )}

        {/* ─── Expired Subscriber Banner ─── */}
        {demoState === 'expired-subscriber' && (
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <Star size={24} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-normal text-amber-900 dark:text-amber-200 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Jou intekening het verstryk</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">Hernieu jou intekening om weer toegang tot nuwe e-uitgawes te kry.</p>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center mb-8">
          {E_EDITION_SUBSCRIPTIONS.map((option) => (
            <div 
              key={option.months}
              className={`
                relative flex flex-col rounded-2xl transition-[box-shadow,border-color] duration-300 border
                ${option.popular 
                  ? 'bg-brand-navy text-white shadow-2xl border-brand-red border-2 z-20 py-12' 
                  : 'bg-white dark:bg-card text-gray-900 dark:text-foreground shadow-md hover:shadow-xl dark:hover:shadow-[var(--shadow-dark-400)] border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-muted z-10'}
              `}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Star size={12} fill="currentColor" />
                  Gewildste
                </div>
              )}

              <div className="p-8 flex-grow">
                <h3 className={`text-xl font-normal font-heading mb-2 ${option.popular ? 'text-white' : 'text-brand-navy dark:text-foreground'}`} style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  {option.title}
                </h3>
                <p className={`text-sm mb-6 ${option.popular ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                  {option.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-2xl font-semibold ${option.popular ? 'text-gray-300' : 'text-gray-400'}`}>R</span>
                  <span className={`text-6xl font-black tracking-tight ${option.popular ? 'text-white' : 'text-brand-navy dark:text-foreground'}`}>
                    {option.price}
                  </span>
                </div>

                {option.perIssue && (
                  <p className={`text-sm mb-4 -mt-6 ${option.popular ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'}`}>
                    = {option.perIssue}
                  </p>
                )}

                <div className={`h-px w-full mb-8 ${option.popular ? 'bg-white/10' : 'bg-gray-100 dark:bg-muted'}`}></div>

                <ul className="space-y-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`
                        flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                        ${option.popular ? 'bg-brand-red text-white' : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'}
                      `}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`font-medium ${option.popular ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <Button 
                  asChild
                  className={`
                    w-full h-14 rounded-xl text-lg font-bold transition-[background-color,box-shadow] duration-200
                    ${option.popular 
                      ? 'bg-brand-red hover:bg-brand-red-hover text-white hover:shadow-lg shadow-red-900/20' 
                      : 'bg-gray-100 dark:bg-muted hover:bg-gray-200 dark:hover:bg-muted text-brand-navy dark:text-foreground'}
                  `}
                >
                  <Link to={`/inteken/e-uitgawe/${option.months}`} className="flex items-center justify-center gap-2">
                    Teken In
                    <ChevronRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Quote Slider */}
        <section className="w-full overflow-hidden">
          <QuoteSlider className="min-h-[350px] md:min-h-[450px]" />
        </section>

        {/* Secondary Options - More visual separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 alignwide mb-8 mt-8">
          
          {/* Single Issue */}
          <Link to="/e-uitgawes" className="group relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border p-8 shadow-md hover:shadow-xl transition-[box-shadow,border-color] duration-300 hover:border-brand-red/30">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <FileText size={120} className="text-brand-navy dark:text-brand-navy-light" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-50 dark:bg-muted rounded-xl flex items-center justify-center text-brand-navy dark:text-brand-navy-light mb-6 group-hover:bg-brand-navy dark:group-hover:bg-foreground group-hover:text-white dark:group-hover:text-background transition-colors">
                <Newspaper size={24} />
              </div>
              
              <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Enkele e-uitgawe
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Soek jy 'n spesifieke koerant? Koop 'n enkele e-uitgawe vir R35 — 'n eenmalige aankoop, geen intekening nodig nie.
              </p>
              <p className="text-brand-navy dark:text-foreground font-bold text-lg mb-6">
                R35 <span className="text-sm text-gray-500 dark:text-gray-400 font-normal">per uitgawe</span>
              </p>
              
              <div className="flex items-center text-brand-red font-bold group-hover:gap-2 transition-[gap]">
                Bekyk e-uitgawes <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
          </Link>

          {/* Print Delivery */}
          <Link to="/inteken/aflewering" className="block max-w-4xl mx-auto group relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border p-8 shadow-md hover:shadow-xl dark:hover:shadow-[var(--shadow-dark-400)] transition-[box-shadow,border-color] duration-300 hover:border-brand-red/30 dark:hover:border-brand-red/30">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <Truck size={120} className="text-brand-navy dark:text-brand-navy-light" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 dark:bg-muted rounded-2xl flex items-center justify-center text-brand-navy dark:text-brand-navy-light group-hover:bg-brand-navy dark:group-hover:bg-foreground group-hover:text-white dark:group-hover:text-background transition-colors flex-shrink-0">
                <Truck size={24} />
              </div>
              
              <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                Papier Aflewering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Verkies jy die reuk van ink op papier? Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand en jy kry jou koerant elke Vrydag. Aflewering sluit nie digitale e-uitgawe-toegang in nie.
              </p>
              <p className="text-brand-navy dark:text-foreground font-bold text-lg mb-6">
                Vanaf R140<span className="text-sm text-gray-500 dark:text-gray-400 font-normal">/maand</span>
              </p>
              
              <div className="flex items-center text-brand-red font-bold group-hover:gap-2 transition-[gap]">
                Bekyk aflewerings opsies <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* FAQ Section */}
      <PageFAQSection
        items={SUBSCRIBE_FAQS}
        description="Vrae oor ons intekenopsies, aflewering en betaalmetodes."
      />

      {/* ─── Demo State Switcher ─── */}
      <DemoStateSwitcher
        value={demoState}
        onChange={(v) => setDemoState(v as SubscribeDemoState)}
        options={[
          { value: 'logged-out', label: 'Uitgelogd' },
          { value: 'subscriber', label: 'Aktiewe intekenaar' },
          { value: 'expired-subscriber', label: 'Verstrykte intekenaar' },
        ]}
      />
    </div>
  );
};
