import React, { useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router';
import {
  ShoppingCart,
  Check,
  MapPin,
  ChevronRight,
  FileText,
  BookOpen,
  Archive,
  Zap,
  Star,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '../components/parts/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { EDITION_REGIONS } from '../data/eEditions';
import { E_EDITION_SUBSCRIPTIONS } from '../data/subscriptions';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { SUBSCRIBE_FAQS } from '../data/pageFaqs';
import { HERO_IMAGES } from '../data/heroImages';
import { DemoStateSwitcher } from '../components/common/DemoStateSwitcher';

/* ── rooi rose Magazine Single Subscription Product Page ──────────────────────────────
 * Editorial design: E-edition subscription with regional variants
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Product showcase with pricing tiers
 * ────────────────────────────────────────────────────────────── */

/**
 * Single Subscription Product Page
 *
 * Similar to SingleEEdition but for subscriptions — a WooCommerce variable product
 * with two variant axes: region (pa_streek) and subscription period.
 *
 * Route: /inteken/e-uitgawe/:planId (planId = months: 1, 3, 12)
 */
export const SingleSubscriptionProduct = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { addItem, items } = useCart();

  // Find the plan from URL param, default to 3-month (popular)
  const initialMonths = planId ? parseInt(planId, 10) : 3;
  const [selectedPeriod, setSelectedPeriod] = useState<number>(initialMonths);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [regionError, setRegionError] = useState(false);

  // Demo state
  type DemoState = 'logged-out' | 'subscriber' | 'expired-subscriber';
  const [demoState, setDemoState] = useState<DemoState>('logged-out');

  const plan = E_EDITION_SUBSCRIPTIONS.find((p) => p.months === selectedPeriod);

  if (!plan) {
    return <Navigate to="/inteken" replace />;
  }

  // Build cart product ID that includes region + period
  const cartProductId = selectedRegion
    ? `subscription-${plan.months}-month-${selectedRegion}`
    : `subscription-${plan.months}-month`;

  const isInCart = items.some((item) => item.productId === cartProductId);

  const handleAddToCart = () => {
    if (!selectedRegion) {
      setRegionError(true);
      return;
    }
    setRegionError(false);
    const regionLabel = EDITION_REGIONS.find((r) => r.slug === selectedRegion)?.label || selectedRegion;
    addItem({
      productId: cartProductId,
      title: `${plan.title} E-uitgawe Intekening (${regionLabel})`,
      price: plan.price,
      type: 'subscription',
      variantSlug: selectedRegion,
      variantLabel: regionLabel,
    });
    navigate('/betaal');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background pb-24">
      <SEO
        title={`${plan.title} E-uitgawe Intekening - rooi rose`}
        description={`Teken in op rooi rose se e-tydskrif vir ${plan.months} ${plan.months === 1 ? 'maand' : 'maande'}. ${plan.description}.`}
        keywords="inteken, subscribe, rooi rose, e-tydskrif, e-uitgawe"
      />

      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border">
        <Breadcrumbs
          items={[
            { label: 'Tuis', href: '/' },
            { label: 'Teken in', href: '/inteken' },
            { label: `${plan.title} Intekening` },
          ]}
        />
      </div>

      {/* ─── Active Subscriber Banner ─── */}
      {demoState === 'subscriber' && (
        <div className="alignwide mt-6">
          <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-500 dark:border-green-700 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <Check size={24} className="text-white" strokeWidth={3} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-green-900 dark:text-green-200 mb-1">Jy is reeds 'n intekenaar</h3>
              <p className="text-green-700 dark:text-green-300 text-sm">Jou intekening is aktief. Besoek jou biblioteek om e-uitgawes te lees.</p>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-bold shrink-0">
              <Link to="/my-e-uitgawes">My biblioteek</Link>
            </Button>
          </div>
        </div>
      )}

      {/* ─── Expired Subscriber Banner ─── */}
      {demoState === 'expired-subscriber' && (
        <div className="alignwide mt-6">
          <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500 dark:border-amber-700 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shrink-0">
              <Star size={24} className="text-white" strokeWidth={2} fill="white" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">Jou intekening het verstryk</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">Hernieu jou intekening om weer toegang tot nuwe e-uitgawes te kry.</p>
            </div>
          </div>
        </div>
      )}

      {/* ─── Product Section ─── */}
      <section className="alignwide py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Cover Image — magazine mock */}
          <div className="w-full md:w-[340px] lg:w-[400px] shrink-0">
            <div className="relative aspect-[3/4] bg-white dark:bg-card rounded-xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-border">
              <div className="w-full h-full flex flex-col">
                {/* Magazine Header */}
                <div className="bg-brand-red p-4 text-center">
                  <h2
                    className="text-white font-normal has-brand-serif-font-family uppercase tracking-widest"
                    style={{
                      fontVariationSettings: "var(--fvs-h3)",
                      letterSpacing: 'var(--ls-h3)',
                      fontSize: 'var(--text-h3)',
                      lineHeight: 'var(--lh-h3)',
                    }}
                  >
                    rooi rose
                  </h2>
                  <p className="text-white/90 text-xs mt-1 uppercase tracking-wide">E-uitgawe Intekening</p>
                </div>
                
                {/* Cover Image */}
                <div className="flex-1 overflow-hidden relative">
                  <ImageWithFallback
                    src={HERO_IMAGES.eEditions}
                    alt="E-uitgawe intekening"
                    className="w-full h-full object-cover"
                  />
                  {/* Price Badge Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-8">
                    <div className="bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-xl px-6 py-4 text-center shadow-2xl border-2 border-brand-red">
                      <p className="text-brand-navy dark:text-foreground font-bold has-brand-serif-font-family" style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}>
                        R{plan.price}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs font-medium mt-1">
                        {plan.title} intekening
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Footer Badge */}
                <div className="bg-brand-navy p-3 text-center">
                  <p className="text-white text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wide">
                    <Sparkles size={14} />
                    Digitale intekening
                  </p>
                </div>
              </div>

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-16 right-0 bg-brand-red text-white text-xs font-bold px-4 py-2 rounded-l-full shadow-lg flex items-center gap-2">
                  <Star size={14} fill="currentColor" />
                  Gewildste
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h1
              className="text-brand-navy dark:text-foreground font-normal has-brand-serif-font-family mb-3"
              style={{
                fontVariationSettings: 'var(--fvs-h1)',
                fontSize: 'var(--text-h1)',
                lineHeight: 'var(--lh-h1)',
                letterSpacing: 'var(--ls-h1)',
              }}
            >
              {plan.title} E-uitgawe Intekening
            </h1>

            {/* Subtitle / description */}
            <p
              className="text-gray-500 dark:text-gray-400 mb-6"
              style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}
            >
              {plan.description}
            </p>

            {/* Description */}
            <p
              className="text-gray-700 dark:text-gray-300 mb-8"
              style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}
            >
              Met 'n digitale intekening kry jy toegang tot elke nuwe <em>rooi rose</em> e-uitgawe
              vir die duur van jou intekening — op enige toestel, oral en altyd.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300" style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price + Selectors + Actions */}
            <div className="mt-auto">
              <div className="flex flex-col gap-5">
                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-brand-navy dark:text-foreground font-bold"
                    style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}
                  >
                    R{plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                    {plan.perIssue && `(${plan.perIssue})`}
                  </span>
                </div>

                {/* ─── Subscription Period Selector ─── */}
                <div className="max-w-sm">
                  <label
                    htmlFor="period-select"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 mb-2 font-bold"
                    style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                  >
                    <Archive size={16} />
                    Intekeningtydperk
                  </label>
                  <select
                    id="period-select"
                    value={selectedPeriod}
                    onChange={(e) => {
                      const newPeriod = parseInt(e.target.value, 10);
                      setSelectedPeriod(newPeriod);
                      // Update URL to reflect new plan
                      navigate(`/inteken/e-uitgawe/${newPeriod}`, { replace: true });
                    }}
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-border hover:border-brand-navy dark:hover:border-brand-navy-light bg-white dark:bg-card text-gray-900 dark:text-foreground appearance-none cursor-pointer transition-colors"
                    style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                  >
                    {E_EDITION_SUBSCRIPTIONS.map((option) => (
                      <option key={option.months} value={option.months}>
                        {option.title} — R{option.price} {option.perIssue ? `(${option.perIssue})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ─── Region Selector (Variable Product) ─── */}
                <div className="max-w-sm">
                  <label
                    htmlFor="subscription-region-select"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 mb-2 font-bold"
                    style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                  >
                    <MapPin size={16} />
                    Kies jou streek
                  </label>
                  <select
                    id="subscription-region-select"
                    value={selectedRegion}
                    onChange={(e) => {
                      setSelectedRegion(e.target.value);
                      if (e.target.value) setRegionError(false);
                    }}
                    className={`w-full h-12 px-4 rounded-lg border bg-white dark:bg-card text-gray-900 dark:text-foreground appearance-none cursor-pointer transition-colors ${
                      regionError
                        ? 'border-red-500 dark:border-red-500 ring-2 ring-red-200 dark:ring-red-900/30'
                        : 'border-gray-300 dark:border-border hover:border-brand-navy dark:hover:border-brand-navy-light'
                    }`}
                    style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                  >
                    <option value="">— Kies 'n streek —</option>
                    {EDITION_REGIONS.map((region) => (
                      <option key={region.slug} value={region.slug}>
                        {region.label}
                      </option>
                    ))}
                  </select>
                  {regionError && (
                    <p className="text-red-600 dark:text-red-400 mt-1.5" style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}>
                      Kies asseblief 'n streek voordat jy die intekening by jou mandjie voeg.
                    </p>
                  )}
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                    Jou intekening geld vir een streek. Jy sal die e-uitgawe van daardie streek ontvang vir die duur van jou intekening.
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {isInCart ? (
                    <Button
                      asChild
                      className="bg-brand-navy hover:bg-brand-navy-dark dark:bg-brand-navy-light dark:hover:bg-brand-navy text-white h-12 px-6 rounded-lg"
                    >
                      <Link to="/mandjie" className="flex items-center gap-2">
                        <ShoppingCart size={18} />
                        Gaan na mandjie
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      onClick={handleAddToCart}
                      className="bg-primary hover:bg-primary/90 text-white h-12 px-6 rounded-lg"
                      disabled={demoState === 'subscriber'}
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Teken in — R{plan.price}
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-6 rounded-lg border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <Link to="/e-uitgawes" className="flex items-center gap-2">
                      <FileText size={18} />
                      Koop eerder 'n enkele uitgawe
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's Included ─── */}
      <section className="alignwide pb-8">
        <div className="bg-brand-navy dark:bg-brand-navy-dark rounded-xl overflow-hidden shadow-lg">
          <div className="p-[32px] md:p-[48px]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-yellow-400" />
              <span
                className="uppercase tracking-widest text-yellow-400 font-bold"
                style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
              >
                Wat kry jy
              </span>
            </div>
            <h3
              className="text-white font-normal font-heading mb-8"
              style={{
                fontVariationSettings: 'var(--fvs-h3)',
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--lh-h3)',
                letterSpacing: 'var(--ls-h3)',
              }}
            >
              Alles ingesluit by jou digitale intekening
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Archive size={24} />, title: 'Alle nuwe uitgawes', desc: 'Toegang tot elke nuwe e-uitgawe wat gepubliseer word tydens jou intekeningperiode.' },
                { icon: <Zap size={24} />, title: 'Onmiddellik beskikbaar', desc: 'Nuwe uitgawes verskyn outomaties in jou biblioteek sodra dit gepubliseer word.' },
                { icon: <BookOpen size={24} />, title: 'Lees oral', desc: 'Toegang op jou foon, tablet of rekenaar — enige tyd, oral.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold" style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-300" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Plans ─── */}
      <section className="alignwide pb-8">
        <div className="border-t border-gray-200 dark:border-border pt-10">
          <h2
            className="text-brand-navy dark:text-foreground font-normal font-heading mb-6"
            style={{
              fontVariationSettings: 'var(--fvs-h2)',
              lineHeight: 'var(--lh-h2)',
              letterSpacing: 'var(--ls-h2)',
              fontSize: 'var(--text-h2)',
            }}
          >
            Ander intekeningplanne
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {E_EDITION_SUBSCRIPTIONS.filter((p) => p.months !== plan.months).map((otherPlan) => (
              <Link
                key={otherPlan.months}
                to={`/inteken/e-uitgawe/${otherPlan.months}`}
                className="group block bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl p-6 hover:shadow-md hover:border-primary dark:hover:border-primary transition-[box-shadow,border-color]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-normal text-brand-navy dark:text-foreground font-heading group-hover:text-primary transition-colors"
                    style={{
                      fontVariationSettings: 'var(--fvs-h4)',
                      fontSize: 'var(--text-h4)',
                      lineHeight: 'var(--lh-h4)',
                      letterSpacing: 'var(--ls-h4)',
                    }}
                  >
                    {otherPlan.title}
                  </h3>
                  {otherPlan.popular && (
                    <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      Gewild
                    </span>
                  )}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{otherPlan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-brand-navy dark:text-foreground font-bold" style={{ fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-h3)' }}>
                    R{otherPlan.price}
                  </span>
                  {otherPlan.perIssue && (
                    <span className="text-gray-400 text-sm ml-1">({otherPlan.perIssue})</span>
                  )}
                </div>
                <div className="flex items-center text-primary font-bold mt-3 text-sm group-hover:gap-1 transition-[gap]">
                  Kies hierdie plan <ChevronRight size={16} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <PageFAQSection
        items={SUBSCRIBE_FAQS}
        description="Vrae oor ons intekenopsies, aflewering en betaalmetodes."
      />

      {/* ─── Demo State Switcher ─── */}
      <DemoStateSwitcher
        value={demoState}
        onChange={(v) => setDemoState(v as DemoState)}
        options={[
          { value: 'logged-out', label: 'Uitgelogd' },
          { value: 'subscriber', label: 'Aktiewe intekenaar' },
          { value: 'expired-subscriber', label: 'Verstrykte intekenaar' },
        ]}
      />
    </div>
  );
};

export default SingleSubscriptionProduct;