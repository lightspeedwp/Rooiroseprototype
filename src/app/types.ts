export interface Article {
  id: number;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
  excerpt: string;
  author: string;
  date: string;
  // SCF Fields
  readTime?: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  subtitle?: string;
  bylineOverride?: string;
  // Sponsored
  sponsored?: boolean;
  sponsorName?: string;
  sponsorLink?: string;
  sponsorLogo?: string;
  sponsorSlug?: string;
}

export interface LatestNewsItem {
  id: number;
  title: string;
  category: string;
  time: string;
  tags: string[];
  sponsored?: boolean;
}

export interface EEditionRegion {
  slug: string;
  label: string;
  /** Optional: different Issuu embed URL per region */
  pdfUrl?: string;
}

export interface EEdition {
  id: string;
  productId?: number;
  title: string;
  date: string;
  coverImage: string;
  pdfUrl: string;
  price: string;
  priceValue: number;
  description: string;
  /** Regional variants (streke) — variable product */
  regions: EEditionRegion[];
  // SCF Fields
  editionNumber?: number;
  isFree?: boolean;
  pageCount?: number;
  publicationDate?: string;
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface Obituary {
  id: number;
  slug: string;
  name: string;
  age: number;
  dateOfBirth: string;
  dateOfDeath: string;
  location: string;
  imageUrl: string;
  excerpt: string;
  biography: string;
  survivedBy: string; // Renamed from survived_by
  funeralDetails: string; // Renamed from funeral_details
  published: string;
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image?: string; // Rename to imageUrl to be consistent? Or keep image? Let's use imageUrl
  imageUrl?: string;
  // SCF Fields
  eventDate?: string;
  eventEndDate?: string;
  address?: string;
  mapUrl?: string;
  organiser?: string;
  contactEmail?: string;
  contactPhone?: string;
  ticketUrl?: string;
  price?: string;
  isFree?: boolean;
  isFeatured?: boolean;
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

export type MultimediaCategory = 'Video' | 'Fotogalery' | 'Podcast';

export interface MultimediaItem {
  id: number;
  slug: string;
  title: string;
  category: MultimediaCategory;
  description: string;
  imageUrl: string;
  time: string;
  published: string;
  author: string;
  // SCF Fields
  duration?: string;
  videoUrl?: string;
  podcastUrl?: string; // audioUrl
  photoGallery?: string[]; // photos
  photoCount?: number;
  episodeNumber?: string; // episode
  views?: number;
  // Tags
  tags: string[];
}

export interface Competition {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  prize: string;
  prizeValue: string;
  sponsor: string;
  sponsorLogo?: string;
  imageUrl: string;
  openDate: string;
  closingDate: string;
  winnerAnnouncementDate: string;
  status: 'active' | 'closed' | 'winner-announced';
  winner?: { name: string; location: string };
  rules: string[];
  category: string;
  // SCF Fields
  entryQuestion?: string;
  faqs?: { id: string; question: string; answer: string }[];
  // SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  image: string;
  // SCF Fields
  department?: 'redaksioneel' | 'verslaggewers';
  displayOrder?: number;
}

// ─── Shared UI Props ────────────────────────────────────────────────────────

/**
 * Shared props for article card components used across
 * Category, TagArchive, and SponsorArchive pages.
 */
export interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
  sponsored?: boolean;
  sponsorName?: string;
  sponsorLogo?: string;
}