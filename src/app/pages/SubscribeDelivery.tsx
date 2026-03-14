import { CONTACT_PHONES, EXTERNAL_SERVICE_EMAILS, createTelLink, createMailtoLink } from '../data/contactInfo';
import React from 'react';
import { Button } from '../components/ui/button';
import { Check, Truck, FileText, Calendar, ArrowRight, MapPin, Star, Coffee, BookOpen, Heart, Package, Globe, Zap } from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { useNavigate, Link } from 'react-router';
import { PageContainer } from '../components/common/PageContainer';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/common/SEO';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { SUBSCRIBE_DELIVERY_FAQS } from '../data/pageFaqs';
import { HERO_IMAGES } from '../data/heroImages';
import { PRINT_SUBSCRIPTIONS } from '../data/subscriptions';

export const SubscribeDelivery = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  // Always use the subscription hero (Building) for delivery page as per guidelines
  const heroImage = HERO_IMAGES.subscription;

  const handleSubscribe = (period: number, price: number, title: string) => {
    addItem({
      productId: `delivery-subscription-${period}-month`,
      title: title,
      price: price,
      type: 'subscription'
    });
    navigate('/betaal');
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-24 font-inter">
      <SEO 
        title="Teken in op aflewering - rooi rose" 
        description="Kry rooi rose elke week by jou voordeur afgelewer. Hanteer deur On the Dot."
        keywords="teken in, aflewering, subscribe, delivery, die papier, huisaflewering, home delivery"
      />
      
      <PageContainer 
        breadcrumbs={[
          { label: 'Teken in', href: '/inteken' },
          { label: 'Aflewering' }
        ]}
        noPadding
      />
      
      {/* Hero Section */}
      <div className="relative border-b border-gray-100 dark:border-border pb-20 pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src={heroImage}
            alt="Building with price tag" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-background/90 dark:via-background/80 dark:to-background"></div>
        </div>

        <div className="alignwide text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-red-50 dark:bg-red-950/30 text-brand-red text-xs font-bold tracking-widest uppercase mb-4">
            Koerant by die Huis
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-normal text-brand-navy dark:text-foreground mb-6" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Tradisionele Nuus.<br/>Moderne Gerief.
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Niks klop die gevoel van 'n vars koerant en koffie op 'n Vrydagoggend nie. Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand — aflewering en digitale toegang ingesluit.
          </p>
        </div>
      </div>

      <div className="alignwide text-center relative z-10">
        
        {/* ─── Tactile Magazine Benefits Section ─── */}
        <div className="mb-16 pt-12 lg:pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal font-heading text-brand-navy dark:text-foreground mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Die mag van papier
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ervaar <em>rooi rose</em> soos dit bedoel is — met al jou sintuie.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center mb-4">
                <Coffee size={24} className="text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                Koffietafelwaarde
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                'n Pragtige, tasbare publikasie wat jou woonruimte verfraai en gesprekke aanmoedig.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-950/30 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                Geen skermtyd
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Rus jou oë en geniet dieper fokus — perfek vir ontspanning sonder digitale afleiding.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-4">
                <Heart size={24} className="text-brand-red" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                Versamelkwaliteit
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Hou kosbare uitgawes, knip jou gunsteling resepte uit, en skep 'n erfenis om te bewaar.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-950/30 flex items-center justify-center mb-4">
                <Package size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                By jou deur
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Elke Vrydag oggend — vars en vroeg afgelewer sodat jy jou naweek kan begin met <em>rooi rose</em>.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                Tasbare ervaring
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Die reuk van vars drukwerk, die tekstuur van kwaliteit papier — 'n sintuiglike ervaring.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-xl p-6 border border-gray-200 dark:border-border">
              <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                <Heart size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-normal font-heading text-brand-navy dark:text-foreground mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                Deel met gesin
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Een kopie wat die hele huishouding kan geniet — niks klop 'n fisiese koerant om rond te gee nie.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Comparison Table ─── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-normal font-heading text-brand-navy dark:text-foreground mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Papier vs. E-uitgawe
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Kies die opsie wat by jou leefstyl pas — of kry albei vir die volledige <em>rooi rose</em> ervaring.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-border">
                    <th className="text-left p-6 font-normal text-gray-600 dark:text-gray-400 text-sm uppercase tracking-wider">Kenmerk</th>
                    <th className="text-center p-6 bg-amber-50 dark:bg-amber-950/30">
                      <span className="text-lg font-normal font-heading text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)' }}>Papier</span>
                    </th>
                    <th className="text-center p-6">
                      <span className="text-lg font-normal font-heading text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)' }}>E-uitgawe</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Prys per maand</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30 font-bold text-brand-navy dark:text-foreground">Vanaf R140</td>
                    <td className="p-6 text-center font-bold text-brand-navy dark:text-foreground">Vanaf R140</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Fisiese kopie</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30"><Check size={20} className="mx-auto text-green-600" /></td>
                    <td className="p-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Aflewering by jou deur</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30"><Check size={20} className="mx-auto text-green-600" /></td>
                    <td className="p-6 text-center text-gray-400">Nie nodig nie</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Tasbare leeservaring</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30 text-green-600 font-medium">Vars drukwerk</td>
                    <td className="p-6 text-center text-gray-400">Digitaal</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Versamelwaarde</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30"><Check size={20} className="mx-auto text-green-600" /></td>
                    <td className="p-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-border/50">
                    <td className="p-6 text-gray-700 dark:text-gray-300">Lees op enige toestel</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30 text-gray-400">Slegs papier</td>
                    <td className="p-6 text-center"><Check size={20} className="mx-auto text-green-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-700 dark:text-gray-300">Deursigbaar argief</td>
                    <td className="p-6 text-center bg-amber-50 dark:bg-amber-950/30 text-gray-400">—</td>
                    <td className="p-6 text-center"><Check size={20} className="mx-auto text-green-600" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ─── Delivery Zones Information ─── */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-xl p-6 md:p-8 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-blue-700 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-normal font-heading text-blue-900 dark:text-blue-200 mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)' }}>
                4 Streekuitgawes — Aflewering beskikbaar
              </h3>
              <p className="text-blue-800 dark:text-blue-300 mb-4 leading-relaxed">
                <em>rooi rose</em> word in 4 streekuitgawes gepubliseer. Aflewering is beskikbaar in die volgende gebiede:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-800 dark:text-blue-300">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Boland</strong> — Paarl, Stellenbosch, Wellington</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Overberg</strong> — Hermanus, Gansbaai, Bredasdorp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Breede Rivier</strong> — Worcester, Robertson, Montagu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span><strong>Langeberg</strong> — Swellendam, Heidelberg, Riversdale</span>
                </li>
              </ul>
              <p className="text-blue-700 dark:text-blue-400 text-sm mt-4 italic">
                Aflewering vind elke Vrydag tussen 05:00-08:00 plaas. Kontak{' '}
                <a href={createTelLink(CONTACT_PHONES.delivery)} className="text-brand-red hover:underline font-medium">{CONTACT_PHONES.delivery}</a>{' '}
                om te bevestig of ons in jou area aflewer.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-center mb-8">
          {PRINT_SUBSCRIPTIONS.map((option) => (
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
                  onClick={() => handleSubscribe(option.months, option.price, `${option.title} Aflewering Intekening`)}
                  className={`
                    w-full h-14 rounded-xl text-lg font-bold transition-[background-color,box-shadow] duration-200
                    ${option.popular 
                      ? 'bg-brand-red hover:bg-brand-red-hover text-white hover:shadow-lg shadow-red-900/20' 
                      : 'bg-gray-100 dark:bg-muted hover:bg-gray-200 dark:hover:bg-muted text-brand-navy dark:text-foreground'}
                  `}
                >
                  Kies Pakket
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Digital */}
        <Link to="/inteken/e-uitgawe" className="block max-w-4xl mx-auto group relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-gray-200 dark:border-border p-8 shadow-md hover:shadow-xl dark:hover:shadow-[var(--shadow-dark-400)] transition-[box-shadow,border-color] duration-300 hover:border-brand-red/30 dark:hover:border-brand-red/30 mb-8">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
              <FileText size={200} className="text-brand-navy dark:text-brand-navy-light" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-blue-50 dark:bg-muted rounded-2xl flex items-center justify-center text-brand-navy dark:text-brand-navy-light group-hover:bg-brand-navy dark:group-hover:bg-foreground group-hover:text-white dark:group-hover:text-background transition-colors flex-shrink-0">
                <Newspaper size={32} />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                  Verkies jy net digitaal?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                  'n Enkele e-uitgawe kos R35 — 'n eenmalige aankoop, geen intekening nodig nie. Of teken in en lees <em>rooi rose</em> digitaal op jou rekenaar, tablet of foon.
                </p>
              </div>
              
              <div className="flex items-center text-brand-red font-bold group-hover:gap-3 transition-[gap] whitespace-nowrap">
                Bekyk e-uitgawe opsies <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
        </Link>

      </div>
      <PageFAQSection items={SUBSCRIBE_DELIVERY_FAQS} />
    </div>
  );
};