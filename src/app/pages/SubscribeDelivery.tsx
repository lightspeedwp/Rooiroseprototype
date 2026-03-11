import React from 'react';
import { Button } from '../components/ui/button';
import { Check, Truck, FileText, Calendar, ArrowRight, MapPin, Star } from 'lucide-react';
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
        title="Teken in op aflewering - Die Papier" 
        description="Kry Die Papier elke week by jou voordeur afgelewer. Hanteer deur On the Dot."
        keywords="koerant aflewering, die papier, inteken, newspaper delivery"
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
                  'n Enkele e-uitgawe kos R35 — 'n eenmalige aankoop, geen intekening nodig nie. Of teken in en lees <em>Die Papier</em> digitaal op jou rekenaar, tablet of foon.
                </p>
              </div>
              
              <div className="flex items-center text-brand-red font-bold group-hover:gap-3 transition-[gap] whitespace-nowrap">
                Bekyk e-uitgawe opsies <ArrowRight size={20} className="ml-2" />
              </div>
            </div>
        </Link>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Aflewerings Areas</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. Vir huisaflewering, bel die On the Dot afleweringspan by{' '}
            <a href="tel:0873531291" className="text-brand-red hover:underline font-medium">087 353 1291</a>{' '}
            of stuur 'n e-pos na{' '}
            <a href="mailto:diepapierintekening@onthedot.co.za" className="text-brand-red hover:underline">diepapierintekening@onthedot.co.za</a>.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-md hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-10 h-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Metro-gebiede</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe.</p>
            </div>
            <div className="p-6 bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-md hover:shadow-xl transition-shadow duration-300">
              <Truck className="w-10 h-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Vrydag Oggende</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Aflewering vind plaas tussen 05:00 en 08:00 elke Vrydag.</p>
            </div>
            <div className="p-6 bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-md hover:shadow-xl transition-shadow duration-300">
              <Calendar className="w-10 h-10 text-brand-red mx-auto mb-4" />
              <h4 className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Vakansie Reëlings</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stel jou aflewering tydelik uit wanneer jy met vakansie gaan.</p>
            </div>
          </div>
        </div>

      </div>
      <PageFAQSection items={SUBSCRIBE_DELIVERY_FAQS} />
    </div>
  );
};