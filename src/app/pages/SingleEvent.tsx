import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, Calendar as CalendarIcon, User, Ticket, CreditCard } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EVENTS } from '../data/events';
import { Button } from '../components/ui/button';
import { LeaderboardAd, SidebarAds, InFeedAd, StickyMobileFooter } from '../components/ads';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { SocialShare } from '../components/common/SocialShare';
import { RelatedContent } from '../components/common/RelatedContent';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { CATEGORY_ARTICLES } from '../data/categoryArticles';
import { LATEST_EDITIONS } from '../data/eEditions';
import { injectEventSchema, cleanupEventSchema } from '../utils/structuredData';

export const SingleEventPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const event = EVENTS.find(e => e.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Inject Event JSON-LD structured data for Google rich event snippets
  useEffect(() => {
    if (event) {
      injectEventSchema(event);
    }
    return () => cleanupEventSchema();
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Gebeurtenis nie gevind nie</h2>
        <Button onClick={() => navigate('/gebeure')} className="bg-primary hover:bg-primary/90">
          Terug na Gebeure
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <SEO 
        title={`${event.title} | Gebeure | rooi rose`}
        description={event.description}
        keywords={`gebeure, ${event.category.toLowerCase()}, bloemfontein, ${event.title.toLowerCase()}`}
      />

      {/* Leaderboard Ad */}
      <LeaderboardAd section="gebeure" />

      {/* Full width left-aligned breadcrumbs */}
      <div className="w-full bg-white dark:bg-background border-b border-gray-200 dark:border-border py-3">
        <div className="alignwide">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Tuis</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/gebeure">Gebeure</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">{event.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      <div className="alignwide py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column */}
          <div className="flex-1 min-w-0 space-y-8">
            
            {/* Header Section */}
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-100 dark:border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-red-50 dark:bg-primary/10 text-primary dark:text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wide border border-red-100 dark:border-primary/20">
                  {event.category}
                </span>
                {event.isFree && (
                  <span className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wide border border-green-100 dark:border-green-800/30">
                    Gratis
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-normal text-brand-navy dark:text-foreground font-heading mb-6 leading-tight" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-border pt-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="text-primary dark:text-primary" size={20} />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-primary dark:text-primary" size={20} />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary dark:text-primary" size={20} />
                  <span className="font-medium">{event.location}</span>
                </div>
                {event.price && (
                  <div className="flex items-center gap-2">
                    <CreditCard className="text-primary dark:text-primary" size={20} />
                    <span className="font-medium">{event.price}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-100 dark:border-border">
              <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground mb-6 font-heading border-b-2 border-primary dark:border-primary w-fit pb-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Oor hierdie geleentheid</h2>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg mb-4">{event.description}</p>
                <p>
                  Kom wees deel van hierdie spesiale geleentheid. Dit is 'n wonderlike kans om saam te kuier en deel te wees van die aksie. 
                  Vir meer inligting, kontak gerus die organiseerders.
                </p>
                <p className="mt-4">
                  <strong>Let wel:</strong> Datums en tye kan verander. Bevestig asseblief met die organiseerders.
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 dark:bg-muted rounded-lg h-64 flex items-center justify-center border border-gray-300 dark:border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative z-10 text-center p-4">
                <MapPin size={48} className="mx-auto mb-2 text-brand-navy dark:text-foreground" />
                <p className="font-bold text-brand-navy dark:text-foreground text-lg">{event.location}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{event.address}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address || event.location)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white dark:bg-card px-4 py-2 rounded shadow-sm text-sm font-bold text-primary hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                >
                  Kry Aanwysings
                </a>
              </div>
            </div>

            {/* In-feed ad for mobile */}
            <InFeedAd section="gebeure" />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[300px] shrink-0 space-y-6">
            
            {/* Organizer Card */}
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-100 dark:border-border">
              <h3 className="text-lg font-normal text-brand-navy dark:text-foreground mb-4 flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                <User size={18} className="text-primary dark:text-primary" /> Organiseerder
              </h3>
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">{renderWithBrandItalics(event.organiser)}</p>
              
              {event.contactEmail ? (
                <>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    E-pos: <a href={`mailto:${event.contactEmail}`} className="text-text-link-red dark:text-text-link-red hover:underline">{event.contactEmail}</a>
                  </p>
                  <a href={`mailto:${event.contactEmail}`} className="block w-full">
                    <Button className="w-full bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white">
                      Kontak Organiseerder
                    </Button>
                  </a>
                </>
              ) : (
                <>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Kontak ons vir meer inligting.</p>
                  <Button className="w-full bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white">
                    Kontak Organiseerder
                  </Button>
                </>
              )}
            </div>

            {/* Share Card */}
            <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-100 dark:border-border">
              <SocialShare title={event.title} description={event.description} />
            </div>

            {/* Info Box */}
            <div className="bg-red-50 dark:bg-primary/10 p-6 rounded-lg border border-red-100 dark:border-primary/20">
              <h4 className="font-normal text-primary dark:text-primary mb-2 text-sm uppercase font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Belangrik</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {event.isFree 
                  ? "Toegang is gratis. Onthou om jou eie stoele saam te bring vir buitelug geleenthede." 
                  : `Kaartjies is beskikbaar teen ${event.price}. Bespreek vroegtydig om teleurstelling te voorkom.`}
              </p>
            </div>

            {/* Sidebar Ads */}
            <SidebarAds section="gebeure" variant="standard" />

          </div>
        </div>

        {/* Related Content */}
        <RelatedContent
          articles={(CATEGORY_ARTICLES['Nuus'] || []).slice(0, 3)}
          events={EVENTS.filter(e => e.id !== event.id).slice(0, 3)}
          eEditions={LATEST_EDITIONS.slice(0, 4)}
        />
      </div>

      <StickyMobileFooter section="gebeure" />
    </div>
  );
};