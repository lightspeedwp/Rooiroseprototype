/**
 * Image Asset Registry — Catalogue of all hero images, figma assets,
 * and Unsplash images used across the Die Papier site.
 *
 * Used by the Image Asset Browser dev tool at /ontwikkelaar/beelde
 */

import newsletterHero from 'figma:asset/13bd97bf84a483cafad8893ecc09a138455e1126.png';
import subscriptionHero from 'figma:asset/569ae9a1840247e37f1e805be09dbbe5e485f8ea.png';
import complaintsHero from 'figma:asset/47ebc426906125a7f6dae85fea56a0ac9d732c5b.png';
import eEditionsHero from 'figma:asset/55ebffbc5e0c81b1bb8cae2ca178201c8cace8f2.png';
import legalHero from 'figma:asset/90feda5dc244e4dea6c7466332cd65c833bee6e0.png';

// Team member photos
import barnardImg from 'figma:asset/0c2924c05ac313745f82994014d1725229f424bd.png';
import luciaImg from 'figma:asset/7c85c047fbdde8adee5b17cfb9211c718b88c10c.png';
import vernonImg from 'figma:asset/a75f8c0a9499677a09afa389a3d6a45e544ec10c.png';
import gerrieImg from 'figma:asset/29ff260289f38b2a986a638476e9b3250556115e.png';
import ilseImg from 'figma:asset/b1fa9ddb0f23903f70bd874a0568bba679a1debe.png';
import janaImg from 'figma:asset/b9653bed7172f2139fc48c674c17a66bd4ad34c8.png';
import stehanImg from 'figma:asset/dd241e58ec1836c6ab3468cd41b3df86498afb2d.png';
import bohemiaImg from 'figma:asset/393ff7cca7b9274bdb0c792b17c83b8be2337800.png';
import rasaadImg from 'figma:asset/4091778c150f65692b9e3163a4c554af6e88582c.png';
import kaylieImg from 'figma:asset/6fd3b783c69f6fdb50f7feb924531e6f95f83253.png';
import shanellImg from 'figma:asset/c73ccf90a626fd49ac10b4a45a57a652b34f4730.png';

export type ImageAssetCategory = 'hero' | 'team' | 'unsplash' | 'figma';

export type ImageRole = 'hero' | 'article-featured' | 'team-photo' | 'newsletter' | 'ad' | 'page-element';

export interface ImageAsset {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Afrikaans display name */
  nameAf: string;
  /** The resolved image src (URL or imported asset) */
  src: string;
  /** Alt text for the image */
  alt: string;
  /** Category for filtering */
  category: ImageAssetCategory;
  /** Semantic role — enables segmenting heroes from article featured images */
  role: ImageRole;
  /** Source type */
  sourceType: 'figma-asset' | 'unsplash';
  /** Original filename or identifier */
  filename: string;
  /** Pages/components that use this image */
  usedBy: string[];
  /** Data file where this is imported/referenced */
  dataFile: string;
  /** WordPress media library filename recommendation */
  wpFilename: string;
  /** SEO description */
  description: string;
  /** Recommended dimensions for WordPress */
  wpDimensions?: string;
}

// ─── Hero Images (from heroImages.ts) ─────────────────────────────────────────

export const HERO_ASSETS: ImageAsset[] = [
  {
    id: 'hero-newsletter',
    name: 'Newsletter Hero',
    nameAf: 'Nuusbrief Hero',
    src: newsletterHero,
    alt: 'Hande wat saamwerk — nuusbrief aanmelding',
    category: 'hero',
    role: 'hero',
    sourceType: 'figma-asset',
    filename: '13bd97bf84a483cafad8893ecc09a138455e1126.png',
    usedBy: ['NewsletterSubscribe.tsx', 'SubmitContent.tsx (reuse)'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'hero-nuusbrief.png',
    description: "Hands collaborating — used for the newsletter subscription page hero and reused for content submission page.",
    wpDimensions: '1920 x 600',
  },
  {
    id: 'hero-subscription',
    name: 'Subscription Hero',
    nameAf: 'Intekening Hero',
    src: subscriptionHero,
    alt: 'Gebou — intekening bladsy',
    category: 'hero',
    role: 'hero',
    sourceType: 'figma-asset',
    filename: '569ae9a1840247e37f1e805be09dbbe5e485f8ea.png',
    usedBy: ['SubscribeEEdition.tsx (print route)'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'hero-intekening.png',
    description: "Building image — used for the print subscription page hero.",
    wpDimensions: '1920 x 600',
  },
  {
    id: 'hero-complaints',
    name: 'Complaints / Advertise Hero',
    nameAf: 'Klagtes / Adverteer Hero',
    src: complaintsHero,
    alt: 'Megafoon — klagtes en advertensie bladsy',
    category: 'hero',
    role: 'hero',
    sourceType: 'figma-asset',
    filename: '47ebc426906125a7f6dae85fea56a0ac9d732c5b.png',
    usedBy: ['Advertise.tsx (reuse)'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'hero-adverteer.png',
    description: "Megaphone image — used for the advertising page hero. Originally from complaints, reused.",
    wpDimensions: '1920 x 600',
  },
  {
    id: 'hero-eeditions',
    name: 'E-Editions Hero',
    nameAf: 'E-uitgawes Hero',
    src: eEditionsHero,
    alt: 'Digitale koerant lees — e-uitgawes',
    category: 'hero',
    role: 'hero',
    sourceType: 'figma-asset',
    filename: '55ebffbc5e0c81b1bb8cae2ca178201c8cace8f2.png',
    usedBy: ['EEditions.tsx', 'SubscribeEEdition.tsx (e-edition route)'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'hero-e-uitgawes.png',
    description: "Digital newspaper reading — used for the e-editions archive page and e-edition subscription page hero.",
    wpDimensions: '1920 x 600',
  },
  {
    id: 'hero-legal',
    name: 'Legal / Policy Hero',
    nameAf: 'Regs / Beleid Hero',
    src: legalHero,
    alt: 'Wetlike dokument — beleid bladsye',
    category: 'hero',
    role: 'hero',
    sourceType: 'figma-asset',
    filename: '90feda5dc244e4dea6c7466332cd65c833bee6e0.png',
    usedBy: ['Policies.tsx', 'PrivacyPolicy.tsx', 'TermsAndConditions.tsx', 'CookiePolicy.tsx'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'hero-beleid.png',
    description: "Legal document image — shared hero for all policy pages (privacy, terms, cookies, policies hub).",
    wpDimensions: '1920 x 600',
  },
];

// ─── Unsplash Hero Images ─────────────────────────────────────────────────────

export const UNSPLASH_HERO_ASSETS: ImageAsset[] = [
  {
    id: 'hero-about',
    name: 'About Us Hero (Printing Press)',
    nameAf: 'Oor Ons Hero (Drukpers)',
    src: 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBwcmludGluZyUyMHByZXNzJTIwYWZyaWthYW5zfGVufDF8fHx8MTc3MDk3MzE4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Moderne koerantdrukpers',
    category: 'unsplash',
    role: 'hero',
    sourceType: 'unsplash',
    filename: 'novus-media-drukpers.jpg',
    usedBy: ['About.tsx'],
    dataFile: '/src/app/data/about.ts',
    wpFilename: 'novus-media-drukpers.jpg',
    description: "'n Industriele drukpers wat koerante druk. Used for the About Us page hero section.",
    wpDimensions: '1920 x 800',
  },
  {
    id: 'hero-contact-map',
    name: 'Contact Map (Rosebank Aerial)',
    nameAf: 'Kontak Kaart (Rosebank Lugfoto)',
    src: 'https://images.unsplash.com/photo-1671917057275-c5014a6addcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NlYmFuayUyMEpvaGFubmVzYnVyZyUyMGFlcmlhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzE0Mzg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Lugfoto van Rosebank, Johannesburg',
    category: 'unsplash',
    role: 'hero',
    sourceType: 'unsplash',
    filename: 'rosebank-johannesburg-aerial.jpg',
    usedBy: ['Contact.tsx'],
    dataFile: '/src/app/data/heroImages.ts',
    wpFilename: 'rosebank-johannesburg-lugfoto.jpg',
    description: "Aerial view of Rosebank, Johannesburg. Used on the Contact page for the office map card.",
    wpDimensions: '800 x 400',
  },
  {
    id: 'hero-team',
    name: 'Team Page Hero',
    nameAf: 'Span Bladsy Hero',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
    alt: 'Span wat saamwerk',
    category: 'unsplash',
    role: 'hero',
    sourceType: 'unsplash',
    filename: 'team-collaboration.jpg',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'hero-redaksie-span.jpg',
    description: "Team collaboration photo. Used for the editorial team page hero.",
    wpDimensions: '1920 x 600',
  },
];

// ─── Team Member Photos ────────────────────────────────────────────────────────

export const TEAM_PHOTO_ASSETS: ImageAsset[] = [
  {
    id: 'team-barnard',
    name: 'Barnard Beukman',
    nameAf: 'Barnard Beukman',
    src: barnardImg,
    alt: 'Barnard Beukman — Redakteur',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '0c2924c05ac313745f82994014d1725229f424bd.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'barnard-beukman.png',
    description: 'Barnard Beukman profile photo. Editor.',
  },
  {
    id: 'team-lucia',
    name: 'Lucia Soboleska',
    nameAf: 'Lucia Soboleska',
    src: luciaImg,
    alt: 'Lucia Soboleska',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '7c85c047fbdde8adee5b17cfb9211c718b88c10c.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'lucia-soboleska.png',
    description: 'Lucia Soboleska profile photo.',
  },
  {
    id: 'team-vernon',
    name: 'Vernon Moodley',
    nameAf: 'Vernon Moodley',
    src: vernonImg,
    alt: 'Vernon Moodley',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: 'a75f8c0a9499677a09afa389a3d6a45e544ec10c.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'vernon-moodley.png',
    description: 'Vernon Moodley profile photo.',
  },
  {
    id: 'team-gerrie',
    name: 'Gerrie van Zyl',
    nameAf: 'Gerrie van Zyl',
    src: gerrieImg,
    alt: 'Gerrie van Zyl',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '29ff260289f38b2a986a638476e9b3250556115e.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'gerrie-van-zyl.png',
    description: 'Gerrie van Zyl profile photo.',
  },
  {
    id: 'team-ilse',
    name: 'Ilse Gillmore',
    nameAf: 'Ilse Gillmore',
    src: ilseImg,
    alt: 'Ilse Gillmore',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: 'b1fa9ddb0f23903f70bd874a0568bba679a1debe.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'ilse-gillmore.png',
    description: 'Ilse Gillmore profile photo.',
  },
  {
    id: 'team-jana',
    name: 'Jana Morkel',
    nameAf: 'Jana Morkel',
    src: janaImg,
    alt: 'Jana Morkel',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: 'b9653bed7172f2139fc48c674c17a66bd4ad34c8.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'jana-morkel.png',
    description: 'Jana Morkel profile photo.',
  },
  {
    id: 'team-stehan',
    name: 'Stehan Louw',
    nameAf: 'Stehan Louw',
    src: stehanImg,
    alt: 'Stehan Louw',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: 'dd241e58ec1836c6ab3468cd41b3df86498afb2d.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'stehan-louw.png',
    description: 'Stehan Louw profile photo.',
  },
  {
    id: 'team-bohemia',
    name: 'Bohemia Browne',
    nameAf: 'Bohemia Browne',
    src: bohemiaImg,
    alt: 'Bohemia Browne',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '393ff7cca7b9274bdb0c792b17c83b8be2337800.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'bohemia-browne.png',
    description: 'Bohemia Browne profile photo.',
  },
  {
    id: 'team-rasaad',
    name: 'Rasaad Soboleska',
    nameAf: 'Rasaad Soboleska',
    src: rasaadImg,
    alt: 'Rasaad Soboleska',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '4091778c150f65692b9e3163a4c554af6e88582c.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'rasaad-soboleska.png',
    description: 'Rasaad Soboleska profile photo.',
  },
  {
    id: 'team-kaylie',
    name: 'Kaylie Davids',
    nameAf: 'Kaylie Davids',
    src: kaylieImg,
    alt: 'Kaylie Davids',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: '6fd3b783c69f6fdb50f7feb924531e6f95f83253.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'kaylie-davids.png',
    description: 'Kaylie Davids profile photo.',
  },
  {
    id: 'team-shanell',
    name: 'Shanell Pieterse',
    nameAf: 'Shanell Pieterse',
    src: shanellImg,
    alt: 'Shanell Pieterse',
    category: 'team',
    role: 'team-photo',
    sourceType: 'figma-asset',
    filename: 'c73ccf90a626fd49ac10b4a45a57a652b34f4730.png',
    usedBy: ['Team.tsx'],
    dataFile: '/src/app/data/team.ts',
    wpFilename: 'shanell-pieterse.png',
    description: 'Shanell Pieterse profile photo.',
  },
];

// ─── All Assets Combined ──────────────────────────────────────────────────────

// ─── Unsplash Article Images (from articles.ts + categoryArticles.ts) ──────────

/** Extract unique Unsplash photo IDs from URL */
function unsplashPhotoId(url: string): string {
  const match = url.match(/photo-([a-zA-Z0-9_-]+)/);
  return match ? match[1] : url.slice(0, 40);
}

/** Build a standardised asset from a raw Unsplash URL + context */
function makeArticleAsset(url: string, context: string, files: string[], idx: number): ImageAsset {
  const photoId = unsplashPhotoId(url);
  const isNewsletter = files.some(f => f.includes('Newsletter') || f.includes('newsletter'));
  return {
    id: `article-${photoId}`,
    name: context,
    nameAf: context,
    src: url,
    alt: context,
    category: 'unsplash',
    role: isNewsletter ? 'newsletter' : 'article-featured',
    sourceType: 'unsplash',
    filename: `unsplash-${photoId}.jpg`,
    usedBy: files,
    dataFile: files.map(f => f.endsWith('.tsx') && !f.includes('articles') ? `/src/app/components/templates/${f}` : `/src/app/data/${f}`).join(', '),
    wpFilename: `unsplash-${photoId}.jpg`,
    description: `Unsplash article image: ${context}`,
    wpDimensions: '800 x 600',
  };
}

// All unique Unsplash URLs from articles.ts data
const ARTICLE_UNSPLASH_ENTRIES: { url: string; context: string; files: string[] }[] = [
  { url: 'https://images.unsplash.com/photo-1640580171716-4474b9114ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmclMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3NjYxMzA3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'City Council Meeting', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1643096809267-38765bbfd989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdieSUyMG1hdGNofGVufDF8fHx8MTc2NjA1NzkwOHww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Rugby Match', files: ['articles.ts'] },
  { url: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZ3Jvd3RofGVufDF8fHx8MTc2NjA1NzkwOHww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Finance Growth', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGx8ZW58MXx8fHwxNzY2MTE3MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Shopping Mall', files: ['articles.ts'] },
  { url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NjEwNTUwMHww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Art Gallery', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MDU3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Grocery Delivery', files: ['articles.ts'] },
  { url: 'https://images.unsplash.com/photo-1665592016610-f6e73e938e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwZmVzdGl2YWwlMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Arts Festival South Africa', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1706700700231-91a762a35531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHNvdXRoJTIwYWZyaWNhJTIwc3RlbGxlbmJvc2NofGVufDF8fHx8MTc2OTUyMzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Vineyard Stellenbosch', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1671917057421-677f9cd99721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZhcm0lMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Solar Panels Farm South Africa', files: ['articles.ts', 'categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1761207850834-69151e9bc810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBzYXZpbmdzJTIwc3VwZXJtYXJrZXR8ZW58MXx8fHwxNzcxMzM3MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Grocery Shopping Savings', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', context: 'Environmental Conservation', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800', context: 'Traffic & Roads', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce9?auto=format&fit=crop&q=80&w=800', context: 'Business & Economy', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800', context: 'Festival Celebrations', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800', context: 'Science & Research', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800', context: 'Infrastructure Development', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800', context: 'Healthcare & Medicine', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1596510915830-72e871d3f5d5?auto=format&fit=crop&q=80&w=800', context: 'Agriculture & Farming', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800', context: 'Agriculture Landscape', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800', context: 'Public Transport', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=80&w=800', context: 'Community Events', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800', context: 'Celebration Party', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800', context: 'Travel & Aviation', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800', context: 'Art & Culture', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1509390144746-12d2fdcf5237?auto=format&fit=crop&q=80&w=800', context: 'Nature & Wildlife', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800', context: 'Library & Books', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800', context: 'Water & River', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', context: 'Business Meeting', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800', context: 'Heritage & History', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1523431255346-9d4b4fd94998?auto=format&fit=crop&q=80&w=800', context: 'Food & Cooking', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800', context: 'Music & Performance', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', context: 'Fitness & Gym', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800', context: 'Reading & Books', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800', context: 'Environment & Recycling', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800', context: 'Garden & Plants', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1563212034-de645255a00c?auto=format&fit=crop&q=80&w=800', context: 'Dance Performance', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1710615159028-e5e1b4890358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBzY2hvb2x8ZW58MXx8fHwxNzY2MTY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Graduation Students', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1763627516727-2ca3e324fa59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzY2MTY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'School Choir', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjYxNjQyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'School Classroom', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1647667436195-6954ef8b27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjA3Njk0NHww&ixlib=rb-4.1.0&q=80&w=1080', context: 'School Building', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbiUyMHJlYWRpbmd8ZW58MXx8fHwxNzY2MTY4OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Library Children Reading', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1742549586702-c23994895082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGNvbXBldGl0aW9uJTIwc3R1ZGVudHM8ZW58MXx8fHwxNzY2MTY4OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Mathematics Competition', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=800', context: 'Swimming Pool', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800', context: 'Trail Running', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800', context: 'School Sports', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1609619385004-f8d4f9c318c8?auto=format&fit=crop&q=80&w=800', context: 'Horse Racing', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800', context: 'Robotics & Tech', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800', context: 'Education & Learning', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800', context: 'Farming Equipment', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw1RyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwbW9iaWxlJTIwY29ubmVjdGl2aXR5fGVufDF8fHx8MTc3MTMzNzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080', context: '5G Network Technology', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1613330524291-3330afe5920e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdieSUyMG1hdGNoJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzY2MTQzOTYxfDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Rugby Match South Africa', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzcG9ydHN8ZW58MXx8fHwxNzY2MTY4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Cricket Match', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1761684887056-f76bdb852d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjayUyMGZpZWxkJTIwYXRobGV0ZSUyMHJ1bm5pbmd8ZW58MXx8fHwxNzY2MTY4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Track & Field Athlete', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1694233015263-b905b9d75b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRiYWxsJTIwZ2FtZSUyMHNwb3J0c3xlbnwxfHx8fDE3NjYxNjg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Netball Game', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1572594505398-97a384b34ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBhdGhsZXRlfGVufDF8fHx8MTc2NjExMzY0NXww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Swimming Athlete', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1568495019994-e9f1045bf0ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMG1hdGNofGVufDF8fHx8MTc2NjEwMTc0NHww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Soccer Football Match', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800', context: 'Cycling', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800', context: 'Golf Course', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800', context: 'Cricket Batting', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800', context: 'Rugby Training', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800', context: 'Athletics Track', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800', context: 'Swimming Pool Training', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1593261166082-e50b6a6c9b3c?auto=format&fit=crop&q=80&w=800', context: 'Outdoor Fitness', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=800', context: 'Mountain Trail', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1624953336495-0b5af4d962f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBmaW5hbmNpYWwlMjBhZHZpc29yJTIwbWVldGluZ3xlbnwxfHx8fDE3NzEzMzcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Retirement Planning', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1700294229506-93d0b9e00f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMGhhcmJvciUyMHdhdGVyZnJvbnR8ZW58MXx8fHwxNzY5NTIzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080', context: 'Cape Town Waterfront', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1695866648647-ab341ee14b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHRoZWF0ZXIlMjBwb3Bjb3JufGVufDF8fHx8MTc2OTUyMzQwOXww&ixlib=rb-4.1.0&q=80&w=1080', context: 'Cinema Movie Theater', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800', context: 'Community Concert', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', context: 'City Skyline Business', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', context: 'Restaurant Dining', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=800', context: 'Hotel & Tourism', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', context: 'Technology & Innovation', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', context: 'Tech Startup', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', context: 'Retail Shop', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', context: 'Digital Marketing', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=800', context: 'City Night', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800', context: 'Real Estate', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800', context: 'Wine & Dining', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', context: 'Manufacturing', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800', context: 'Open Book Reading', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800', context: 'Garden Market', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=800', context: 'Community Park', files: ['categoryArticles.ts'] },
  { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800', context: 'Office Work', files: ['categoryArticles.ts'] },
  // Newsletter template images
  { url: 'https://images.unsplash.com/photo-1619950514689-96f890058677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', context: 'Drakenstein Municipality Ad', files: ['FridayNewsletterTemplate.tsx'] },
  { url: 'https://images.unsplash.com/photo-1601568587516-eed640f4a8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', context: 'Paarl Landscape', files: ['FridayNewsletterTemplate.tsx'] },
  { url: 'https://images.unsplash.com/photo-1765853301989-a9b0ad2ac0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200', context: 'Holiday Resort', files: ['FridayNewsletterTemplate.tsx'] },
  { url: 'https://images.unsplash.com/photo-1647580287585-fa0c00d97de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600', context: 'Paarl Post Cover', files: ['FridayNewsletterTemplate.tsx'] },
];

export const ARTICLE_IMAGE_ASSETS: ImageAsset[] = ARTICLE_UNSPLASH_ENTRIES.map((e, i) => makeArticleAsset(e.url, e.context, e.files, i));

export const ALL_IMAGE_ASSETS: ImageAsset[] = [
  ...HERO_ASSETS,
  ...UNSPLASH_HERO_ASSETS,
  ...TEAM_PHOTO_ASSETS,
  ...ARTICLE_IMAGE_ASSETS,
];

export const IMAGE_ASSET_CATEGORIES: { key: ImageAssetCategory | 'all'; labelAf: string; labelEn: string; count: number }[] = [
  { key: 'all', labelAf: 'Alles', labelEn: 'All', count: ALL_IMAGE_ASSETS.length },
  { key: 'hero', labelAf: 'Hero-beelde', labelEn: 'Hero Images', count: HERO_ASSETS.length },
  { key: 'unsplash', labelAf: 'Unsplash', labelEn: 'Unsplash', count: UNSPLASH_HERO_ASSETS.length + ARTICLE_IMAGE_ASSETS.length },
  { key: 'team', labelAf: 'Spanfoto\'s', labelEn: 'Team Photos', count: TEAM_PHOTO_ASSETS.length },
];

/** Role-based sub-filter options for the Image Asset Browser */
export const IMAGE_ROLE_FILTERS: { key: ImageRole | 'all'; labelAf: string; labelEn: string; count: number }[] = [
  { key: 'all', labelAf: 'Alle rolle', labelEn: 'All roles', count: ALL_IMAGE_ASSETS.length },
  { key: 'hero', labelAf: 'Hero-beelde', labelEn: 'Hero Images', count: ALL_IMAGE_ASSETS.filter(a => a.role === 'hero').length },
  { key: 'article-featured', labelAf: 'Artikel-uitgeligte', labelEn: 'Article Featured', count: ALL_IMAGE_ASSETS.filter(a => a.role === 'article-featured').length },
  { key: 'team-photo', labelAf: 'Spanfoto\'s', labelEn: 'Team Photos', count: ALL_IMAGE_ASSETS.filter(a => a.role === 'team-photo').length },
  { key: 'newsletter', labelAf: 'Nuusbrief', labelEn: 'Newsletter', count: ALL_IMAGE_ASSETS.filter(a => a.role === 'newsletter').length },
];

/** WP Media Library Export Summary */
export function getWpMediaSummary() {
  const byRole: Record<ImageRole, ImageAsset[]> = {
    'hero': ALL_IMAGE_ASSETS.filter(a => a.role === 'hero'),
    'article-featured': ALL_IMAGE_ASSETS.filter(a => a.role === 'article-featured'),
    'team-photo': ALL_IMAGE_ASSETS.filter(a => a.role === 'team-photo'),
    'newsletter': ALL_IMAGE_ASSETS.filter(a => a.role === 'newsletter'),
    'ad': ALL_IMAGE_ASSETS.filter(a => a.role === 'ad'),
    'page-element': ALL_IMAGE_ASSETS.filter(a => a.role === 'page-element'),
  };
  const bySource = {
    figma: ALL_IMAGE_ASSETS.filter(a => a.sourceType === 'figma-asset').length,
    unsplash: ALL_IMAGE_ASSETS.filter(a => a.sourceType === 'unsplash').length,
  };
  return { total: ALL_IMAGE_ASSETS.length, byRole, bySource };
}