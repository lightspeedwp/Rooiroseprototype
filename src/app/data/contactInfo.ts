/**
 * Contact Information — Single Source of Truth
 * 
 * All contact emails, phone numbers, and social media URLs for rooi rose Magazine.
 * Use these constants throughout the application instead of hardcoding.
 * 
 * Last updated: 2026-03-12
 */

/**
 * Department Email Addresses
 * All @rooirose.co.za addresses
 */
export const CONTACT_EMAILS = {
  general: 'kontak@rooirose.co.za',
  editorial: 'redaksie@rooirose.co.za',
  news: 'nuus@rooirose.co.za',
  advertising: 'advertensies@rooirose.co.za',
  subscriptions: 'intekening@rooirose.co.za',
  letters: 'lesers@rooirose.co.za',
  events: 'gebeure@rooirose.co.za',
  obituaries: 'doodsberrigte@rooirose.co.za',
  classifieds: 'geklassifiseerd@rooirose.co.za',
  privacy: 'privaatheid@rooirose.co.za',
  paia: 'paia@rooirose.co.za',
  support: 'ondersteuning@rooirose.co.za',
  complaints: 'klagtes@rooirose.co.za',
  subscribers: 'diepapierintekening@novusmedia.co.za', // External service
  ombudsman: 'mediaombud@novusmedia.co.za', // External service
} as const;

/**
 * Staff Email Addresses
 * Individual staff member emails
 */
export const STAFF_EMAILS = {
  nicoFlietoor: 'nico.flietoor@rooirose.co.za',
  coleenCilliers: 'coleen.cilliers@rooirose.co.za',
} as const;

/**
 * External Contact Emails
 * Third-party organizations
 */
export const EXTERNAL_CONTACTS = {
  pressOmbudsman: 'enquiries@ombudsman.org.za',
} as const;

/**
 * Phone Numbers
 */
export const CONTACT_PHONES = {
  advertising: '+27 51 404 7600',
  delivery: '087 353 1291',
  whatsappNews: '+27 82 123 4567', // Mock number - replace with real
} as const;

/**
 * Social Media URLs
 * Official rooi rose Magazine social profiles
 */
export const SOCIAL_URLS = {
  facebook: 'https://facebook.com/rooirosemagazine',
  instagram: 'https://instagram.com/rooirose',
  twitter: 'https://twitter.com/rooirose',
  youtube: 'https://youtube.com/@rooirosemagazine',
  linkedin: 'https://linkedin.com/company/rooirose',
  tiktok: 'https://tiktok.com/@rooirose',
} as const;

/**
 * Helper function to create mailto link
 */
export const createMailtoLink = (email: string, subject?: string): string => {
  const params = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${params}`;
};

/**
 * Helper function to create tel link
 */
export const createTelLink = (phone: string): string => {
  return `tel:${phone.replace(/\s/g, '')}`;
};

/**
 * Helper function to create clickable email link HTML
 * Used in FAQ answers and content
 */
export const emailLink = (email: string, displayText?: string): string => {
  const text = displayText || email;
  return `<a href="mailto:${email}">${text}</a>`;
};

/**
 * Physical Address
 */
export const PHYSICAL_ADDRESS = {
  street: 'Loft Office East (LOE4), Tweede verdieping',
  building: 'The Zone',
  address: 'Oxfordstraat 187, Rosebank',
  city: 'Johannesburg',
  province: 'Gauteng',
  country: 'South Africa',
  full: 'Loft Office East (LOE4), Tweede verdieping, The Zone, Oxfordstraat 187, Rosebank',
} as const;

/**
 * External Service Emails
 * (kept as string for now, but could be moved to env vars for production)
 */
export const EXTERNAL_SERVICE_EMAILS = {
  delivery: 'diepapierintekening@onthedot.co.za', // External delivery service
} as const;
