import { CONTACT_PHONES, EXTERNAL_SERVICE_EMAILS } from '../data/contactInfo';

/**
 * Structured Data (JSON-LD) Utilities for rooi rose
 *
 * Generates Schema.org structured data for:
 * - WebSite (global, with SearchAction for sitelinks search box)
 * - Organization / NewsMediaOrganization (global publisher info)
 * - BreadcrumbList (per-route navigation trail)
 *
 * NOTE: "rooi rose" is NOT italicised in structured data (Rule 13 exception).
 */

/**
 * Canonical Base URL for the application
 */

const BASE_URL = 'https://rooirose.co.za';

// ── Route → Breadcrumb label mapping ─────────────────────────────
// Maps path segments to their Afrikaans display names.
// Multi-segment paths are matched first, then single segments.
const SEGMENT_LABELS: Record<string, string> = {
  // Top-level categories
  'nuus': 'Nuus',
  'sport': 'Sport',
  'skole': 'Skole',
  'sake': 'Sake',
  'leefstyl': 'Lewenstyl',
  'dink': 'Dink',
  'skolerugby': 'Skole rugby',
  'netnuus': 'NetNuus',

  // Informational
  'oor-ons': 'Oor ons',
  'redaksie': 'Ons span',
  'kontak': 'Kontak ons',

  // Advertise
  'adverteer': 'Adverteer',
  'geklassifiseerd': 'Geklassifiseerde advertensies',
  'vertoonadvertensies': 'Vertoonadvertensies',
  'pamflette': 'Pamflette',
  'geborgde-inhoud': 'Geborgde inhoud',
  'borgskappe': 'Borgskappe',
  'bylaes': 'Bylaes',

  // Policies
  'beleid': 'Beleid',
  'privaatheidsbeleid': 'Privaatheidsbeleid',
  'koekiebeleid': 'Koekiebeleid',
  'terme-en-voorwaardes': 'Terme en voorwaardes',
  'paia': 'PAIA-handleiding',
  'gebruikersreels': 'Gebruikersreëls',
  'advertensie-riglyne': 'Advertensie-riglyne',
  'perskode': 'Perskode',
  'ki-beleid': 'KI (AI) beleid',
  'kommentaarbeleid': 'Kommentaarbeleid',
  'terugsendingsbeleid': 'Terugsendingsbeleid',
  'klagteprosedure': 'Klagteprosedure',

  // E-Editions & subscriptions
  'e-uitgawes': 'E-Uitgawes',
  'my-e-uitgawes': 'My E-Uitgawes',
  'inteken': 'Inteken',
  'e-uitgawe': 'E-uitgawe',
  'aflewering': 'Aflewering',

  // Submit
  'stuur-in': 'Stuur in',
  'storie': 'Stuur \'n storie in',
  'lesersbrief': 'Stuur \'n lesersbrief',
  'terugvoer': 'Stuur terugvoer',
  'shoutout': 'Stuur \'n shoutout',

  // Events
  'gebeure': 'Gebeure',
  'dien-in': 'Dien in',

  // Other pages
  'vrae': 'Algemene vrae',
  'kompetisies': 'Kompetisies',
  'kompetisie-terme-en-voorwaardes': 'Kompetisie terme en voorwaardes',
  'doodsberrigte': 'Doodsberrigte',
  'multimedia': 'Multimedia',
  'nuusbrief-argief': 'Nuusbrief-argief',
  'soek': 'Soek',
  'inhoudsopgawe': 'Inhoudsopgawe',
  'weer': 'Weer',
  'verkeer': 'Verkeer',
  'nuusbrief-inteken': 'Nuusbrief-inskrywing',
  'my-rekening': 'My rekening',
  'registreer': 'Registreer',
  'mandjie': 'Mandjie',
  'betaal': 'Betaal',

  // Styleguide
  'stylgids': 'Stylgids',

  // Geborgde inhoud
  'geborgde-inhoud-argief': 'Geborgde inhoud-argief',
};

/**
 * Generate BreadcrumbList structured data for a given pathname.
 * Automatically builds the trail from the path segments.
 *
 * Example: /adverteer/geklassifiseerd →
 *   [ Tuisblad → /,  Adverteer → /adverteer,  Geklassifiseerde advertensies → /adverteer/geklassifiseerd ]
 */
export function generateBreadcrumbListSchema(pathname: string): object | null {
  // Home page gets no breadcrumb schema (it IS the root)
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  // Build breadcrumb items
  const items: Array<{ name: string; url: string }> = [
    { name: 'Tuisblad', url: BASE_URL },
  ];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const label = SEGMENT_LABELS[segment] || decodeURIComponent(segment);
    items.push({
      name: label,
      url: `${BASE_URL}${currentPath}`,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}

/**
 * WebSite schema — enables Google Sitelinks Search Box.
 * Should appear on every page (especially the homepage).
 */
export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'rooi rose',
    'alternateName': 'rooi rose Tydskrif',
    'url': BASE_URL,
    'inLanguage': 'af',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${BASE_URL}/soek?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * NewsMediaOrganization schema — publisher identity for Google News.
 * Includes contact info, social profiles, and logo.
 */
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    'name': 'rooi rose',
    'url': BASE_URL,
    'logo': {
      '@type': 'ImageObject',
      'url': `${BASE_URL}/logo.png`,
      'width': 600,
      'height': 60,
    },
    'sameAs': [
      'https://www.facebook.com/diepapier',
      'https://www.instagram.com/diepapier',
      'https://twitter.com/diepapier',
      'https://www.linkedin.com/company/diepapier',
      'https://www.tiktok.com/@diepapier',
    ],
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'contactType': 'customer service',
        'email': 'lesers@rooirose.co.za',
        'url': `${BASE_URL}/kontak`,
        'availableLanguage': ['af', 'en'],
      },
      {
        '@type': 'ContactPoint',
        'contactType': 'subscription service',
        'telephone': CONTACT_PHONES.delivery,
        'email': EXTERNAL_SERVICE_EMAILS.delivery,
        'availableLanguage': ['af', 'en'],
      },
      {
        '@type': 'ContactPoint',
        'contactType': 'sales',
        'telephone': '+27-51-404-7600',
        'email': 'advertensies@rooirose.co.za',
        'availableLanguage': ['af', 'en'],
      },
    ],
    'publishingPrinciples': `${BASE_URL}/beleid/perskode`,
    'ethicsPolicy': `${BASE_URL}/beleid/ki-beleid`,
    'correctionsPolicy': `${BASE_URL}/beleid/klagteprosedure`,
    'foundingDate': '2026',
  };
}

// ── DOM helpers for injecting/removing JSON-LD script tags ────────

const SCRIPT_IDS = {
  website: 'ld-json-website',
  organization: 'ld-json-organization',
  breadcrumb: 'ld-json-breadcrumb',
  faq: 'ld-json-faq',
  event: 'ld-json-event',
  collection: 'ld-json-collection',
} as const;

/**
 * Inject or update a JSON-LD script tag in the document head.
 * Uses an `id` attribute to avoid duplicates.
 */
function upsertJsonLd(id: string, data: object): void {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Remove a JSON-LD script tag from the document head.
 */
export function removeJsonLd(id: string): void {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

/**
 * Inject all structured data for the current route.
 * Called from useRouteSEO on every navigation.
 *
 * - WebSite + Organization are always injected (global schemas).
 * - BreadcrumbList is injected for non-home pages.
 */
export function injectStructuredData(pathname: string): void {
  // Global schemas (always present)
  upsertJsonLd(SCRIPT_IDS.website, generateWebSiteSchema());
  upsertJsonLd(SCRIPT_IDS.organization, generateOrganizationSchema());

  // Per-route BreadcrumbList
  const breadcrumbSchema = generateBreadcrumbListSchema(pathname);
  if (breadcrumbSchema) {
    upsertJsonLd(SCRIPT_IDS.breadcrumb, breadcrumbSchema);
  } else {
    removeJsonLd(SCRIPT_IDS.breadcrumb);
  }
}

/**
 * Clean up all structured data script tags.
 * Called from useRouteSEO cleanup effect.
 */
export function cleanupStructuredData(): void {
  Object.values(SCRIPT_IDS).forEach(removeJsonLd);
}

// ── Page-level schema generators ─────────────────────────────────

/**
 * FAQPage schema — enables FAQ rich results in Google Search.
 * Call from the PageFAQSection component on mount/unmount.
 */
export function generateFAQPageSchema(
  items: Array<{ question: string; answer: string }>
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': items.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer,
      },
    })),
  };
}

/**
 * Inject FAQPage JSON-LD. Call in PageFAQSection useEffect.
 */
export function injectFAQSchema(
  items: Array<{ question: string; answer: string }>
): void {
  if (!items || items.length === 0) return;
  upsertJsonLd(SCRIPT_IDS.faq, generateFAQPageSchema(items));
}

/**
 * Clean up FAQPage JSON-LD. Call in PageFAQSection useEffect cleanup.
 */
export function cleanupFAQSchema(): void {
  removeJsonLd(SCRIPT_IDS.faq);
}

// ── Afrikaans month abbreviation → month number mapping ──────────
const MONTH_MAP: Record<string, string> = {
  'Jan': '01', 'Feb': '02', 'Mrt': '03', 'Apr': '04',
  'Mei': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
  'Sep': '09', 'Okt': '10', 'Nov': '11', 'Des': '12',
};

/**
 * Parse an Afrikaans date string like "20 Des" into ISO 8601.
 * Returns null for recurring/unparseable dates like "Elke Sat".
 */
function parseAfrikaansDate(dateStr: string, year = 2026): string | null {
  const parts = dateStr.trim().split(/\s+/);
  if (parts.length !== 2) return null;
  const [day, monthAbbr] = parts;
  const month = MONTH_MAP[monthAbbr];
  if (!month || isNaN(Number(day))) return null;
  return `${year}-${month}-${day.padStart(2, '0')}`;
}

/**
 * Parse a time range like "16:00 - 21:00" into start/end ISO 8601 datetime strings.
 */
function parseTimeRange(
  dateStr: string,
  timeStr: string,
  year = 2026
): { startDate: string; endDate: string } | null {
  const isoDate = parseAfrikaansDate(dateStr, year);
  if (!isoDate) return null;

  const times = timeStr.split(/\s*-\s*/);
  if (times.length !== 2) return null;

  const startTime = times[0].trim();
  const endTime = times[1].trim();

  // South Africa is UTC+2 (SAST)
  return {
    startDate: `${isoDate}T${startTime}:00+02:00`,
    endDate: `${isoDate}T${endTime}:00+02:00`,
  };
}

/**
 * Event schema — enables rich event snippets in Google Search.
 */
export function generateEventSchema(event: {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image?: string;
  id: number;
}): object | null {
  const parsed = parseTimeRange(event.date, event.time);
  if (!parsed) return null; // Recurring or unparseable — skip schema

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': event.title,
    'description': event.description,
    'startDate': parsed.startDate,
    'endDate': parsed.endDate,
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'eventStatus': 'https://schema.org/EventScheduled',
    'location': {
      '@type': 'Place',
      'name': event.location,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Bloemfontein',
        'addressRegion': 'Vrystaat',
        'addressCountry': 'ZA',
      },
    },
    ...(event.image && {
      'image': event.image.startsWith('http')
        ? event.image
        : `${BASE_URL}${event.image}`,
    }),
    'organizer': {
      '@type': 'Organization',
      'name': 'rooi rose',
      'url': BASE_URL,
    },
    'url': `${BASE_URL}/gebeure/${event.id}`,
  };
}

/**
 * Inject Event JSON-LD. Call in SingleEvent useEffect.
 */
export function injectEventSchema(event: Parameters<typeof generateEventSchema>[0]): void {
  const schema = generateEventSchema(event);
  if (schema) {
    upsertJsonLd(SCRIPT_IDS.event, schema);
  }
}

/**
 * Clean up Event JSON-LD.
 */
export function cleanupEventSchema(): void {
  removeJsonLd(SCRIPT_IDS.event);
}

/**
 * CollectionPage schema — helps Google understand category archive pages.
 * Lists the articles currently visible on the page.
 */
export function generateCollectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  articles: Array<{
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    author: string;
  }>;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': opts.name,
    'description': opts.description,
    'url': opts.url,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'rooi rose',
      'url': BASE_URL,
    },
    'mainEntity': {
      '@type': 'ItemList',
      'numberOfItems': opts.articles.length,
      'itemListElement': opts.articles.map((article, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': `${BASE_URL}/artikel/${article.id}`,
        'name': article.title,
      })),
    },
  };
}

/**
 * Inject CollectionPage JSON-LD. Call in Category useEffect.
 */
export function injectCollectionPageSchema(opts: Parameters<typeof generateCollectionPageSchema>[0]): void {
  upsertJsonLd(SCRIPT_IDS.collection, generateCollectionPageSchema(opts));
}

/**
 * Clean up CollectionPage JSON-LD.
 */
export function cleanupCollectionPageSchema(): void {
  removeJsonLd(SCRIPT_IDS.collection);
}