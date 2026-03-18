import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import {
  ShoppingCart,
  Calendar,
  FileText,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Eye,
  Archive,
  Zap,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '../components/parts/Breadcrumbs';
import { SEO } from '../components/common/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SocialShare } from '../components/common/SocialShare';
import { LATEST_EDITIONS, EDITION_REGIONS, type EditionRegion, getIssuuEmbedUrl } from '../data/eEditions';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { getOwnershipStatus, MOCK_SUBSCRIPTION } from '../data/mockUserAccess';
import { DemoStateSwitcher } from '../components/common/DemoStateSwitcher';

/* ── rooi rose Magazine Single E-Edition Page ──────────────────────────────
 * Editorial design: Full-width preview, large cover, CTA sidebar
 * Typography: Playfair Display SC headings
 * Layout: Large preview + product sidebar + benefits
 * ────────────────────────────────────────────────────────────── */

/** Fallback Issuu embed — used when no region-specific pdfUrl is available */
const FALLBACK_ISSUU_URL =
  'https://e.issuu.com/embed.html?d=diepapier-gauteng_06_03_2026&u=novusmedianewspapers';

export const SingleEEditionPage = () => {
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const editionId = slug || id;
  const { addItem, items } = useCart();

  // Regional variant selection (WooCommerce variable product)
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [regionError, setRegionError] = useState(false);

  // Demo state switcher — controls which user/purchase state is displayed.
  // In production, this would be replaced by real auth + WooCommerce Memberships API.
  type DemoState = 'logged-out' | 'logged-in-buy' | 'logged-in-subscription' | 'logged-in-purchased' | 'expired-subscriber';
  const [demoState, setDemoState] = useState<DemoState>('logged-out');

  const edition = LATEST_EDITIONS.find((e) => e.id === editionId);

  if (!edition) {
    return <Navigate to="/e-uitgawes" replace />;
  }

  // Derive ownership from demo state instead of mock data
  let ownership: 'subscription' | 'purchase' | null;
  switch (demoState) {
    case 'logged-in-subscription':
      ownership = 'subscription';
      break;
    case 'logged-in-purchased':
      ownership = 'purchase';
      break;
    default:
      ownership = null;
  }
  const isPurchased = ownership !== null;
  const isExpired = demoState === 'expired-subscriber';
  const isLoggedIn = demoState !== 'logged-out';
  const isInCart = items.some((item) => item.productId === (edition.productId || edition.id));

  /** Build a unique cart product ID that includes the variant */
  const cartProductId = selectedRegion
    ? `${edition.productId || edition.id}-${selectedRegion}`
    : (edition.productId || edition.id);

  const isVariantInCart = items.some((item) => item.productId === cartProductId);

  const handleAddToCart = () => {
    if (!selectedRegion) {
      setRegionError(true);
      return;
    }
    setRegionError(false);
    const regionLabel = EDITION_REGIONS.find(r => r.slug === selectedRegion)?.label || selectedRegion;
    addItem({
      productId: cartProductId,
      title: `${edition.title} (${regionLabel})`,
      price: edition.priceValue,
      image: edition.coverImage,
      type: 'single',
      variantSlug: selectedRegion,
      variantLabel: regionLabel,
    });
  };

  // Related editions (exclude current)
  const relatedEditions = LATEST_EDITIONS.filter((e) => e.id !== edition.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background">
      <SEO
        title={edition.metaTitle || edition.title}
        description={edition.metaDescription || edition.description}
        keywords={edition.metaKeywords}
      />

      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border">
        <Breadcrumbs
          items={[
            { label: 'Tuis', href: '/' },
            { label: 'E-uitgawes', href: '/e-uitgawes' },
            { label: edition.title },
          ]}
        />
      </div>

      {/* ─── Expired Subscriber Banner ─── */}
      {isExpired && (
        <div className="alignwide mt-4">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <Archive size={24} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-normal text-amber-900 dark:text-amber-200 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h4)", fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Jou intekening het verstryk</h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">Hernieu jou intekening om weer toegang te kry tot hierdie en ander e-uitgawes.</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold shrink-0">
              <Link to="/inteken/e-uitgawe">Hernieu intekening</Link>
            </Button>
          </div>
        </div>
      )}

      {/* ─── Product Section ─── */}
      <section className="alignwide px-[0px] py-[32px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Cover Image */}
          <div className="w-full md:w-[340px] lg:w-[400px] shrink-0">
            <div className="relative aspect-[3/4] bg-white dark:bg-card rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 dark:border-border">
              {/* Newspaper cover mock-up */}
              <div className="w-full h-full flex flex-col">
                <div className="bg-primary p-3 text-center">
                  <h2
                    className="text-white font-normal font-heading"
                    style={{
                      fontVariationSettings: "'GRAD' -50, 'wdth' 64, 'opsz' 24",
                      letterSpacing: 'var(--ls-h3)',
                      fontSize: 'var(--text-h3)',
                      lineHeight: 'var(--lh-h3)',
                    }}
                  >
                    DIE PAPIER
                  </h2>
                  <p className="text-white/80 text-xs">{edition.date}</p>
                </div>
                <div className="flex-1 overflow-hidden">
                  <ImageWithFallback
                    src={edition.coverImage}
                    alt={edition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-brand-navy p-2 text-center">
                  <p className="text-white text-xs font-bold flex items-center justify-center gap-1">
                    <Calendar size={12} />
                    {edition.date}
                  </p>
                </div>
              </div>

              {/* Purchased badge overlay */}
              {isPurchased && (
                <div className={`absolute top-14 right-0 ${ownership === 'subscription' ? 'bg-blue-600' : 'bg-green-600'} text-white text-xs font-bold px-3 py-1.5 rounded-l-full shadow-md flex items-center gap-1.5`}>
                  <CheckCircle2 size={14} />
                  {ownership === 'subscription' ? 'Intekening' : 'Gekoop'}
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h1
              className="text-brand-navy dark:text-foreground font-normal font-heading mb-2"
              style={{
                fontVariationSettings: 'var(--fvs-h1)',
                fontSize: 'var(--text-h1)',
                lineHeight: 'var(--lh-h1)',
                letterSpacing: 'var(--ls-h1)',
              }}
            >
              {renderWithBrandItalics(edition.title)}
            </h1>

            {/* Date & page count */}
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-6" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {edition.date}
              </span>
              {edition.pageCount && (
                <span className="flex items-center gap-1.5">
                  <FileText size={14} />
                  {edition.pageCount} bladsye
                </span>
              )}
              {edition.editionNumber && (
                <span className="flex items-center gap-1.5">
                  <BookOpen size={14} />
                  Uitgawe #{edition.editionNumber}
                </span>
              )}
            </div>

            {/* Description / Excerpt */}
            <p
              className="text-gray-700 dark:text-gray-300 mb-8"
              style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}
            >
              {renderWithBrandItalics(edition.description)}
            </p>

            {/* Price + Actions */}
            <div className="mt-auto">
              {isPurchased ? (
                /* ─── Purchased state ─── */
                <div className="flex flex-col gap-4">
                  <div className={`inline-flex items-center gap-2 ${ownership === 'subscription' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800' : 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'} border rounded-lg px-4 py-3`}>
                    <CheckCircle2 size={20} />
                    <span style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}>
                      {ownership === 'subscription'
                        ? 'Hierdie uitgawe is ingesluit by jou digitale intekening.'
                        : 'Jy het hierdie uitgawe reeds gekoop.'}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="bg-brand-navy hover:bg-brand-navy-dark dark:bg-brand-navy-light dark:hover:bg-brand-navy text-white h-12 px-6 rounded-lg"
                    >
                      <a href="#reader" className="flex items-center gap-2">
                        <Eye size={18} />
                        Lees nou
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 px-6 rounded-lg border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Link to="/my-e-uitgawes" className="flex items-center gap-2">
                        <BookOpen size={18} />
                        My biblioteek
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                /* ─── Not purchased state ─── */
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-brand-navy dark:text-foreground font-bold"
                      style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}
                    >
                      {edition.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                      eenmalige aankoop
                    </span>
                  </div>

                  {/* ─── Region Selector (Variable Product) ─── */}
                  <div className="max-w-sm">
                    <label
                      htmlFor="region-select"
                      className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 mb-2 font-bold"
                      style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                    >
                      <MapPin size={16} />
                      Kies jou streek
                    </label>
                    <select
                      id="region-select"
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
                      style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)', backgroundImage: `url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
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
                        Kies asseblief 'n streek voordat jy die uitgawe by jou mandjie voeg.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {isVariantInCart ? (
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
                      >
                        <ShoppingCart size={18} className="mr-2" />
                        Voeg by mandjie — {edition.price}
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      className="h-12 px-6 rounded-lg border-primary dark:border-primary text-primary dark:text-primary hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                    >
                      <Link to="/inteken/e-uitgawe/3" className="flex items-center gap-2">
                        Teken eerder in
                        <ChevronRight size={16} />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400" style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}>
                    Of teken in vanaf R140 per maand vir toegang tot alle nuwe e-uitgawes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Reader Section (purchased only) ─── */}
      {isPurchased && (() => {
        // Determine the Issuu embed URL based on the user's region + this specific edition
        const userRegion = ownership === 'subscription'
          ? MOCK_SUBSCRIPTION.region
          : 'gauteng-vrystaat'; // default for purchased demo
        const regionData = EDITION_REGIONS.find(r => r.slug === userRegion);
        // Prefer per-edition generated URL; fall back to static region URL, then global fallback
        const embedUrl = getIssuuEmbedUrl(userRegion, edition.id)
          || regionData?.pdfUrl
          || FALLBACK_ISSUU_URL;
        return (
        <section id="reader" className="alignwide pb-8">
          {/* Region indicator */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
              <MapPin size={14} />
              Jy lees die <span className="font-bold text-brand-navy dark:text-foreground">{regionData?.label}</span> uitgawe
            </p>
          </div>
          <div className="bg-white dark:bg-card rounded-xl shadow-lg dark:shadow-[var(--shadow-dark-400)] overflow-hidden border border-gray-200 dark:border-border">
            <div
              style={{
                position: 'relative',
                paddingTop: 'max(60%, 326px)',
                height: 0,
                width: '100%',
              }}
            >
              <iframe
                allow="clipboard-write"
                sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
                allowFullScreen
                style={{
                  position: 'absolute',
                  border: 'none',
                  width: '100%',
                  height: '100%',
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                src={embedUrl}
                title="Issuu E-Edition Viewer"
              />
            </div>
          </div>
        </section>
        );
      })()}

      {/* ─── Subscription CTA (not purchased only) ─── */}
      {!isPurchased && (
        <section className="alignwide pb-8">
          <div className="bg-brand-navy dark:bg-brand-navy-dark rounded-xl overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Left — Value proposition */}
              <div className="flex-1 text-white p-[32px]">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={20} className="text-yellow-400" />
                  <span
                    className="uppercase tracking-widest text-yellow-400 font-bold"
                    style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
                  >
                    Digitale intekening
                  </span>
                </div>
                <h3
                  className="text-white font-normal font-heading mb-3"
                  style={{
                    fontVariationSettings: 'var(--fvs-h3)',
                    fontSize: 'var(--text-h3)',
                    lineHeight: 'var(--lh-h3)',
                    letterSpacing: 'var(--ls-h3)',
                  }}
                >
                  Kry onbeperkte toegang tot nuwe e-uitgawes
                </h3>
                <p
                  className="text-gray-300 mb-6 max-w-lg"
                  style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                >
                  Met 'n digitale intekening kry jy toegang tot elke nuwe uitgawe vanaf jou intekeningdatum — op enige toestel.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { icon: <Archive size={16} />, text: 'Toegang tot alle uitgawes vanaf jou intekeningdatum' },
                    { icon: <Zap size={16} />, text: 'Nuwe uitgawes onmiddellik beskikbaar' },
                    { icon: <BookOpen size={16} />, text: 'Lees op foon, tablet of rekenaar' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-200" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                      <span className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-8 rounded-lg"
                >
                  <Link to="/inteken/e-uitgawe" className="flex items-center gap-2">
                    Bekyk intekeningplanne
                    <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>

              {/* Right — Plan highlights */}
              <div className="w-full md:w-[280px] lg:w-[320px] bg-white/5 border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-center p-[32px]">
                <p
                  className="text-gray-400 uppercase tracking-widest font-bold mb-4"
                  style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
                >
                  Planne vanaf
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-white font-bold" style={{ fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)' }}>R140</span>
                  <span className="text-gray-400" style={{ fontSize: 'var(--text-p3)' }}>/maand</span>
                </div>
                <p className="text-gray-400 mb-6" style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}>
                  of bespaar met 3- en 12-maand planne
                </p>
                <div className="space-y-2">
                  {[
                    { period: '1 Maand', price: 'R140' },
                    { period: '3 Maande', price: 'R390', tag: 'Gewild' },
                    { period: '12 Maande', price: 'R1 400', tag: 'Beste waarde' },
                  ].map((plan) => (
                    <div
                      key={plan.period}
                      className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3 border border-white/10"
                    >
                      <span className="text-white" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                        {plan.period}
                      </span>
                      <div className="flex items-center gap-2">
                        {plan.tag && (
                          <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                            {plan.tag}
                          </span>
                        )}
                        <span className="text-white font-bold" style={{ fontSize: 'var(--text-p2)' }}>
                          {plan.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Social Share ─── */}
      <div className="alignwide pb-8">
        <SocialShare title={edition.title} description={edition.description} />
      </div>

      {/* ─── Related Editions ─── */}
      <section className="alignwide pb-12">
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
            Ander onlangse uitgawes
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedEditions.map((relEdition) => {
              const relOwnership = isLoggedIn ? getOwnershipStatus(relEdition.id, relEdition.date) : null;
              return (
                <Link
                  key={relEdition.id}
                  to={`/e-uitgawe/${relEdition.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] bg-white dark:bg-card rounded-lg shadow-sm border border-gray-200 dark:border-border overflow-hidden mb-3 group-hover:shadow-md transition-[box-shadow,border-color] group-hover:border-primary">
                    <ImageWithFallback
                      src={relEdition.coverImage}
                      alt={relEdition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    {relOwnership && (
                      <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={10} className="inline mr-0.5" />
                        {relOwnership === 'subscription' ? 'Intekening' : 'Gekoop'}
                      </div>
                    )}
                  </div>
                  <h3
                    className="font-normal text-gray-800 dark:text-foreground group-hover:text-primary transition-colors font-heading"
                    style={{
                      fontVariationSettings: 'var(--fvs-h3)',
                      lineHeight: 'var(--lh-h3)',
                      letterSpacing: 'var(--ls-h3)',
                      fontSize: 'var(--text-p3)',
                    }}
                  >
                    {relEdition.date}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400" style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}>
                    {relEdition.title}
                  </p>
                  {!relOwnership && (
                    <p className="text-brand-navy dark:text-foreground font-bold mt-1" style={{ fontSize: 'var(--text-p3)' }}>
                      {relEdition.price}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Demo State Switcher ─── */}
      <DemoStateSwitcher
        value={demoState}
        onChange={(v) => setDemoState(v as DemoState)}
        options={[
          { value: 'logged-out', label: 'Uitgelogd' },
          { value: 'logged-in-buy', label: 'Ingelogd: Koop' },
          { value: 'logged-in-subscription', label: 'Intekening' },
          { value: 'logged-in-purchased', label: 'Gekoop' },
          { value: 'expired-subscriber', label: 'Verstrykte intekenaar' },
        ]}
      />
    </div>
  );
};

export default SingleEEditionPage;