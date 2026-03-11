/**
 * Sponsored content data for Die Papier
 * Tracks sponsors and their associated content
 *
 * @wordpress-patterns archive-sponsors, archive-sponsor-tier
 * @wordpress-cards card-sponsor-gold, card-sponsor-silver, card-sponsor-bronze
 * @wordpress-queries query-sponsors-tier
 * @wordpress-cpt dp_sponsor (taxonomy: dp_sponsor_tier — gold, silver, bronze)
 * @see /guidelines/components/patterns/card/README.md
 */

export interface Sponsor {
  slug: string;
  name: string;
  logoUrl: string;
  description: string;
  websiteUrl: string;
  tier: 'gold' | 'silver' | 'bronze';
}

export const SPONSORS: Sponsor[] = [
  {
    slug: 'makro',
    name: 'Makro',
    logoUrl: 'https://ui-avatars.com/api/?name=MK&background=003DA5&color=fff&size=128&bold=true',
    description: 'Makro is een van Suid-Afrika se voorste groothandel- en kleinhandelwinkels wat kwaliteitprodukte teen mededingende pryse aanbied.',
    websiteUrl: 'https://www.makro.co.za',
    tier: 'gold',
  },
  {
    slug: 'vodacom',
    name: 'Vodacom',
    logoUrl: 'https://ui-avatars.com/api/?name=VC&background=E60000&color=fff&size=128&bold=true',
    description: 'Vodacom is Suid-Afrika se voorste digitale kommunikasie-maatskappy wat mobiele, vaste en internet-dienste lewer.',
    websiteUrl: 'https://www.vodacom.co.za',
    tier: 'gold',
  },
  {
    slug: 'checkers',
    name: 'Checkers',
    logoUrl: 'https://ui-avatars.com/api/?name=CH&background=D42B1E&color=fff&size=128&bold=true',
    description: 'Checkers bied vars, bekostigbare kruideniersware en huishoudelike produkte regoor Suid-Afrika.',
    websiteUrl: 'https://www.checkers.co.za',
    tier: 'silver',
  },
  {
    slug: 'fnb',
    name: 'FNB',
    logoUrl: 'https://ui-avatars.com/api/?name=FNB&background=009A44&color=fff&size=128&bold=true',
    description: "First National Bank is 'n toonaangewende Suid-Afrikaanse bank met innoverende digitale bankoplossings.",
    websiteUrl: 'https://www.fnb.co.za',
    tier: 'silver',
  },
  {
    slug: 'sanlam',
    name: 'Sanlam',
    logoUrl: 'https://ui-avatars.com/api/?name=SL&background=003B5C&color=fff&size=128&bold=true',
    description: "Sanlam is 'n toonaangewende finansiële diensgroep wat versekering, beleggings en finansiële beplanning bied.",
    websiteUrl: 'https://www.sanlam.co.za',
    tier: 'bronze',
  },
];

export function getSponsorBySlug(slug: string): Sponsor | undefined {
  return SPONSORS.find((s) => s.slug === slug);
}

export function getSponsorsByTier(tier: Sponsor['tier']): Sponsor[] {
  return SPONSORS.filter((s) => s.tier === tier);
}