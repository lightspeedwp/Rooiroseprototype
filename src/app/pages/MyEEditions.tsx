import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  BookOpen,
  Calendar,
  Eye,
  Crown,
  ShoppingBag,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Filter,
  Grid3X3,
  List,
  Search,
  X,
  LogIn,
  UserX,
  MapPin,
} from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { LATEST_EDITIONS, EEdition } from '../data/eEditions';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  MOCK_SUBSCRIPTION,
  SUBSCRIPTION_CUTOFF,
  INDIVIDUAL_PURCHASE_IDS,
  parseEditionDate,
  buildUserLibrary,
  type UserSubscription,
  type OwnedEdition,
} from '../data/mockUserAccess';
import { DemoStateSwitcher } from '../components/common/DemoStateSwitcher';

// ─────────────────────────────────────────────────────────
// Edition card component
// ─────────────────────────────────────────────────────────

const EditionCard = ({
  edition,
  viewMode,
}: {
  edition: OwnedEdition;
  viewMode: 'grid' | 'list';
}) => {
  if (viewMode === 'list') {
    return (
      <Link
        to={`/e-uitgawe/${edition.id}`}
        className="group flex items-center gap-4 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border hover:border-primary p-3 transition-[border-color,box-shadow] hover:shadow-md"
      >
        {/* Small thumbnail */}
        <div className="w-16 h-20 sm:w-20 sm:h-26 rounded overflow-hidden shrink-0 bg-gray-100 dark:bg-muted relative">
          <div className="bg-brand-navy text-center py-0.5">
            <span className="text-white text-[7px] font-normal font-heading tracking-wide" style={{ fontVariationSettings: "var(--fvs-h4)" }}>DIE PAPIER</span>
          </div>
          <img
            src={edition.coverImage}
            alt={edition.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-normal text-sm text-gray-800 dark:text-foreground group-hover:text-primary transition-colors truncate font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
            {edition.title}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
            <Calendar size={10} />
            {edition.date}
          </p>
          <p className="text-xs text-gray-400 mt-1 line-clamp-1 hidden sm:block">
            {edition.description}
          </p>
        </div>

        {/* Badge + action */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
              edition.acquiredVia === 'subscription'
                ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
            }`}
          >
            {edition.acquiredVia === 'subscription' ? 'INTEKENING' : 'GEKOOP'}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center gap-1">
            <MapPin size={9} />
            {edition.purchasedRegionLabel}
          </span>
          <Button
            size="sm"
            className="h-7 text-xs bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/e-uitgawe/${edition.id}`;
            }}
          >
            <Eye size={12} className="mr-1" />
            Lees
          </Button>
        </div>
      </Link>
    );
  }

  // Grid mode
  return (
    <div className="group flex flex-col">
      <Link
        to={`/e-uitgawe/${edition.id}`}
        className="block relative aspect-[3/4] bg-white dark:bg-card rounded-lg overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] mb-3 border border-gray-200 dark:border-border group-hover:border-primary transition-[border-color]"
      >
        <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-brand-navy p-2.5 text-center">
            <h3 className="text-white font-normal text-sm md:text-lg font-heading leading-tight" style={{ fontVariationSettings: "var(--fvs-h3)", letterSpacing: 'var(--ls-h3)' }}>
              DIE PAPIER
            </h3>
            <p className="text-white/70 text-[9px] md:text-[10px] truncate">{edition.title}</p>
          </div>

          {/* Cover */}
          <div className="flex-1 overflow-hidden relative">
            <img
              src={edition.coverImage}
              alt={edition.title}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
              loading="lazy"
            />
            {/* Locked overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="bg-white/90 text-brand-navy font-bold text-[10px] px-3 py-1 rounded shadow-sm">
                {edition.price}
              </span>
            </div>
            {/* Badge */}
            <div
              className={`absolute top-2 right-2 text-[9px] font-bold px-2 py-1 rounded shadow-sm ${
                edition.acquiredVia === 'subscription'
                  ? 'bg-amber-400 text-amber-900'
                  : 'bg-green-500 text-white'
              }`}
            >
              {edition.acquiredVia === 'subscription' ? (
                <span className="flex items-center gap-1">
                  <Crown size={10} /> INTEKENING
                </span>
              ) : (
                'GEKOOP'
              )}
            </div>
          </div>

          {/* Date strip */}
          <div className="bg-gray-100 dark:bg-muted p-2 text-center border-t border-gray-200 dark:border-border">
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-bold flex items-center justify-center gap-1">
              <Calendar size={12} />
              {edition.date}
            </p>
          </div>

          {/* Region badge (bottom-left) */}
          <div className="absolute bottom-12 left-2 text-[9px] font-bold px-2 py-1 rounded shadow-sm bg-blue-500 text-white flex items-center gap-1">
            <MapPin size={9} />
            {edition.purchasedRegionLabel}
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <span className="text-white font-bold text-lg flex items-center gap-2">
            <BookOpen size={20} />
            Lees
          </span>
        </div>
      </Link>

      <div className="flex flex-col flex-1">
        <h3 className="font-normal text-gray-800 dark:text-foreground text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2 mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
          <Link to={`/e-uitgawe/${edition.id}`}>{edition.title}</Link>
        </h3>

        <div className="mt-auto pt-2 flex items-center gap-2">
          <Button
            className="w-full h-9 text-xs bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white"
            onClick={() => (window.location.href = `/e-uitgawe/${edition.id}`)}
          >
            <Eye size={14} className="mr-1" />
            Lees Nou
          </Button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// Main page
// ─────────────────────────────────────────────────────────

export const MyEEditionsPage = () => {
  type LibraryDemoState = 'logged-in' | 'logged-out' | 'expired';
  const [demoState, setDemoState] = useState<LibraryDemoState>('logged-in');
  const isLoggedIn = demoState !== 'logged-out';
  const isExpired = demoState === 'expired';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterType, setFilterType] = useState<'all' | 'subscription' | 'purchase'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllSubscription, setShowAllSubscription] = useState(false);

  // Build the user's library
  const userLibrary = buildUserLibrary(LATEST_EDITIONS, MOCK_SUBSCRIPTION, INDIVIDUAL_PURCHASE_IDS);

  // Split into subscription vs purchased
  const subscriptionEditions = userLibrary.filter((e) => e.acquiredVia === 'subscription');
  const purchasedEditions = userLibrary.filter((e) => e.acquiredVia === 'purchase');

  // Filter by type and search
  const filteredLibrary = userLibrary
    .filter((e) => {
      if (filterType === 'subscription') return e.acquiredVia === 'subscription';
      if (filterType === 'purchase') return e.acquiredVia === 'purchase';
      return true;
    })
    .filter((e) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        e.title.toLowerCase().includes(q) ||
        e.date.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
      );
    });

  // For subscription section, show only first N unless expanded
  const SUBSCRIPTION_INITIAL_COUNT = 6;
  const visibleSubscription = showAllSubscription
    ? subscriptionEditions
    : subscriptionEditions.slice(0, SUBSCRIPTION_INITIAL_COUNT);

  return (
    <PageContainer
      breadcrumbs={[
        { label: 'E-uitgawes', href: '/e-uitgawes' },
        { label: 'My Biblioteek' },
      ]}
    >
      {/* Demo Auth Toggle */}
      <DemoStateSwitcher
        value={demoState}
        onChange={(v) => setDemoState(v as LibraryDemoState)}
        options={[
          { value: 'logged-in', label: 'Aangemeld' },
          { value: 'logged-out', label: 'Nie aangemeld' },
          { value: 'expired', label: 'Verstryk' },
        ]}
      />

      {/* Logged-out CTA */}
      {!isLoggedIn ? (
        <div className="text-center py-16 md:py-24">
          <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-card mx-auto mb-6 flex items-center justify-center">
            <UserX size={36} className="text-gray-400 dark:text-gray-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Meld aan om jou biblioteek te sien
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
            Meld aan met jou rekening om toegang te kry tot jou gekochte en intekeninge-uitgawes, of registreer om te begin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/meld-aan">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 h-12">
                <LogIn size={18} className="mr-2" />
                Meld Aan
              </Button>
            </Link>
            <Link to="/registreer">
              <Button variant="outline" className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light px-8 h-12">
                Registreer
              </Button>
            </Link>
          </div>
          <div className="mt-10 border-t border-gray-200 dark:border-border pt-8 max-w-md mx-auto">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Of begin dadelik blaai:</p>
            <Link to="/e-uitgawes">
              <Button variant="outline" className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light">
                <ShoppingBag size={16} className="mr-2" />
                Bekyk E-Uitgawes Argief
              </Button>
            </Link>
          </div>
        </div>
      ) : (
      <>
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            My Biblioteek
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Al jou e-uitgawes op een plek — intekeninge en individuele aankope.
          </p>
        </div>
        <Link to="/e-uitgawes">
          <Button variant="outline" className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light">
            <ShoppingBag size={16} className="mr-2" />
            Koop meer uitgawes
          </Button>
        </Link>
      </header>

      {/* ─── Subscription Status Banner ─── */}
      {MOCK_SUBSCRIPTION.status === 'active' && !isExpired && (
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light rounded-xl p-6 md:p-8 text-white mb-8 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center">
                <Crown size={28} className="text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-normal font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>{MOCK_SUBSCRIPTION.plan}</h2>
                  <span className="bg-green-400/20 text-green-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Aktief
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Intekening #{MOCK_SUBSCRIPTION.id} &middot; Sedert {MOCK_SUBSCRIPTION.startDate}
                </p>
              </div>
            </div>

            <div className="md:ml-auto flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Volgende betaling</p>
                <p className="font-bold">{MOCK_SUBSCRIPTION.nextPayment}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Bedrag</p>
                <p className="font-bold">{MOCK_SUBSCRIPTION.amount}/pm</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Uitgawes ingesluit</p>
                <p className="font-bold">{subscriptionEditions.length} uitgawes</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
            <Link to="/my-rekening">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <CreditCard size={12} className="mr-1" />
                Bestuur intekening
              </Button>
            </Link>
            <Link to="/inteken/e-uitgawe">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Verander plan
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* ─── Expired Subscription Banner ─── */}
      {isExpired && (
        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Crown size={28} className="text-red-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-normal text-red-900 dark:text-red-200 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>{MOCK_SUBSCRIPTION.plan}</h2>
                  <span className="bg-red-200 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Verstryk
                  </span>
                </div>
                <p className="text-red-600 dark:text-red-400 text-sm">
                  Jou intekening het verstryk. Hernieu om weer toegang te kry tot alle e-uitgawes.
                </p>
              </div>
            </div>
            <div className="md:ml-auto">
              <Link to="/inteken/e-uitgawe">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 h-12">
                  Hernieu intekening
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── Stats bar ─── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-card p-4 rounded-lg border border-gray-200 dark:border-border text-center">
          <p className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)" }}>{userLibrary.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Totale uitgawes</p>
        </div>
        <div className="bg-white dark:bg-card p-4 rounded-lg border border-gray-200 dark:border-border text-center">
          <p className="text-2xl font-normal text-amber-600 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)" }}>{subscriptionEditions.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Via intekening</p>
        </div>
        <div className="bg-white dark:bg-card p-4 rounded-lg border border-gray-200 dark:border-border text-center">
          <p className="text-2xl font-normal text-green-600 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)" }}>{purchasedEditions.length}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Individueel gekoop</p>
        </div>
        <div className="bg-white dark:bg-card p-4 rounded-lg border border-gray-200 dark:border-border text-center">
          <p className="text-2xl font-normal text-primary font-heading" style={{ fontVariationSettings: "var(--fvs-h2)" }}>
            R{(subscriptionEditions.length * 15 + purchasedEditions.length * 15).toFixed(0)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Waarde van biblioteek</p>
        </div>
      </div>

      {/* ─── Toolbar ─── */}
      <div className="bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 w-full sm:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Soek in biblioteek..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-9 text-sm bg-gray-50 dark:bg-background"
          />
          {searchQuery && (
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setSearchQuery('')}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter chips */}
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-gray-400" />
          {(['all', 'subscription', 'purchase'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                filterType === type
                  ? 'bg-brand-navy dark:bg-foreground text-white dark:text-brand-navy'
                  : 'bg-gray-100 dark:bg-muted text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-muted'
              }`}
            >
              {type === 'all' && `Alles (${userLibrary.length})`}
              {type === 'subscription' && `Intekening (${subscriptionEditions.length})`}
              {type === 'purchase' && `Gekoop (${purchasedEditions.length})`}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'grid' ? 'bg-brand-navy dark:bg-foreground text-white dark:text-brand-navy' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-muted'
            }`}
          >
            <Grid3X3 size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'list' ? 'bg-brand-navy dark:bg-foreground text-white dark:text-brand-navy' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-muted'
            }`}
          >
            <List size={16} />
          </button>
        </div>
      </div>

      {/* ─── Filtered / search view (flat list) ─── */}
      {(filterType !== 'all' || searchQuery) && (
        <>
          {filteredLibrary.length > 0 ? (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mb-12">
                {filteredLibrary.map((edition) => (
                  <EditionCard key={edition.id} edition={edition} viewMode="grid" />
                ))}
              </div>
            ) : (
              <div className="space-y-3 mb-12">
                {filteredLibrary.map((edition) => (
                  <EditionCard key={edition.id} edition={edition} viewMode="list" />
                ))}
              </div>
            )
          ) : (
            <EmptyState
              message={searchQuery ? 'Geen uitgawes pas by jou soektog nie.' : 'Geen uitgawes in hierdie kategorie nie.'}
            />
          )}
        </>
      )}

      {/* ─── Grouped view (default) ─── */}
      {filterType === 'all' && !searchQuery && (
        <>
          {/* Subscription editions */}
          {subscriptionEditions.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Crown size={16} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                    Intekening-uitgawes
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {subscriptionEditions.length} uitgawes ingesluit by jou aktiewe intekening
                  </p>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {visibleSubscription.map((edition) => (
                    <EditionCard key={edition.id} edition={edition} viewMode="grid" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {visibleSubscription.map((edition) => (
                    <EditionCard key={edition.id} edition={edition} viewMode="list" />
                  ))}
                </div>
              )}

              {subscriptionEditions.length > SUBSCRIPTION_INITIAL_COUNT && (
                <div className="text-center mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllSubscription(!showAllSubscription)}
                    className="text-sm"
                  >
                    {showAllSubscription ? (
                      <>
                        Wys minder <ChevronUp size={16} className="ml-1" />
                      </>
                    ) : (
                      <>
                        Wys alle {subscriptionEditions.length} uitgawes{' '}
                        <ChevronDown size={16} className="ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </section>
          )}

          {/* Individually purchased editions */}
          {purchasedEditions.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <ShoppingBag size={16} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                    Individuele aankope
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {purchasedEditions.length} uitgawes individueel aangekoop
                  </p>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                  {purchasedEditions.map((edition) => (
                    <EditionCard key={edition.id} edition={edition} viewMode="grid" />
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {purchasedEditions.map((edition) => (
                    <EditionCard key={edition.id} edition={edition} viewMode="list" />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Empty library state */}
          {userLibrary.length === 0 && (
            <EmptyState message="Jy het nog geen e-uitgawes in jou biblioteek nie." />
          )}
        </>
      )}

      {/* ─── Upsell: editions not owned ─── */}
      <EditionsNotOwned ownedIds={userLibrary.map((e) => e.id)} />
      </>
      )}
    </PageContainer>
  );
};

// ─────────────────────────────────────────────────────────
// Empty state
// ─────────────────────────────────────────────────────────

const EmptyState = ({ message }: { message: string }) => (
  <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-dashed border-gray-300 dark:border-border mb-10">
    <BookOpen className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
    <h3 className="text-xl font-normal text-gray-900 dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen uitgawes gevind nie</h3>
    <p className="text-gray-500 mb-6">{message}</p>
    <Link to="/e-uitgawes">
      <Button className="bg-primary hover:bg-primary/90">Blaai deur uitgawes</Button>
    </Link>
  </div>
);

// ───────────────────────────────────────────────────────
// Upsell: editions NOT in user library
// ─────────────────────────────────────────────────────────

const EditionsNotOwned = ({ ownedIds }: { ownedIds: string[] }) => {
  const notOwned = LATEST_EDITIONS.filter((e) => !ownedIds.includes(e.id));

  if (notOwned.length === 0) return null;

  return (
    <section className="mt-4 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-border p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <div>
          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
            Ouer uitgawes beskikbaar
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {notOwned.length} uitgawes wat nie in jou biblioteek is nie
          </p>
        </div>
        <Link to="/e-uitgawes">
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white text-xs">
            Bekyk alles in winkel
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {notOwned.map((edition) => (
          <Link
            key={edition.id}
            to={`/e-uitgawe/${edition.id}`}
            className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-gray-200 dark:border-border hover:border-primary transition-[border-color]"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex flex-col">
              <div className="bg-primary py-1.5 text-center">
                <span className="text-white font-normal text-[10px] md:text-xs font-heading tracking-wide" style={{ fontVariationSettings: "var(--fvs-h4)" }}>
                  DIE PAPIER
                </span>
              </div>
              <div className="flex-1 overflow-hidden relative">
                <img
                  src={edition.coverImage}
                  alt={edition.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
                {/* Locked overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="bg-white/90 text-brand-navy font-bold text-[10px] px-3 py-1 rounded shadow-sm">
                    {edition.price}
                  </span>
                </div>
              </div>
              <div className="bg-gray-800 py-1.5 text-center">
                <p className="text-white text-[10px] font-medium">{edition.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};