/**
 * Rooi Rose Categories
 * 
 * All 10 editorial categories with subcategory references.
 * Used for navigation, mega menus, and category landing pages.
 */

import { Category } from './models/Category';

/**
 * All Categories Array
 */
export const categories: Category[] = [
  {
    id: 'kos',
    title: 'Kos',
    slug: 'kos',
    description: 'Resepte en inspirasie vir elke dag.',
    heroImage: 'https://source.unsplash.com/1200x800/?food,magazine,editorial&sig=kos',
    subcategories: [
      'begin-hier',
      'kook-vir-die-seisoen',
      'soet-spesiaal',
      'maklik-vinnig',
      'aandetes-vir-die-week',
      'somerkos',
      'winterkos',
      'laekoolhidraat',
      'vegetaries',
      'gebak',
      'nagereg',
      'drankies',
    ],
  },
  {
    id: 'mode',
    title: 'Mode',
    slug: 'mode',
    description: 'Style en neigings vir die moderne vrou.',
    heroImage: 'https://source.unsplash.com/1200x800/?fashion,magazine,editorial&sig=mode',
    subcategories: [
      'nuutste-neigings',
      'style-gidse',
      'rooi-loper',
      'kapsule-kas',
      'seisoenale-mode',
      'ontwerpers',
    ],
  },
  {
    id: 'skoonheid',
    title: 'Skoonheid',
    slug: 'skoonheid',
    description: 'Jou gids vir skoonheid en selfversorging.',
    heroImage: 'https://source.unsplash.com/1200x800/?beauty,skincare,magazine&sig=skoonheid',
    subcategories: [
      'velversorging',
      'grimering',
      'haarversorging',
      'naelversorging',
      'produkresensies',
    ],
  },
  {
    id: 'gesondheid',
    title: 'Gesondheid',
    slug: 'gesondheid',
    description: 'Leef gesond, voel beter.',
    heroImage: 'https://source.unsplash.com/1200x800/?wellness,fitness,healthy&sig=gesondheid',
    subcategories: [
      'fiksheid',
      'voeding',
      'simptome',
      'geestesgesondheid',
    ],
  },
  {
    id: 'bekendes',
    title: 'Bekendes',
    slug: 'bekendes',
    description: 'Die jongste nuus oor jou gunsteling sterre.',
    heroImage: 'https://source.unsplash.com/1200x800/?celebrity,red carpet,stars&sig=bekendes',
    subcategories: [
      'onderhoude',
      'tv-dekking',
      'agter-die-skerms',
      'kultuur',
    ],
  },
  {
    id: 'leefstyl',
    title: 'Leefstyl',
    slug: 'leefstyl',
    description: 'Idees om jou lewe te verryk.',
    heroImage: 'https://source.unsplash.com/1200x800/?home,interior,lifestyle&sig=leefstyl',
    subcategories: [
      'dekor',
      'diy',
      'tuin',
      'klein-spasies',
      'ambag',
    ],
  },
  {
    id: 'jou-lewe',
    title: 'Jou lewe',
    slug: 'jou-lewe',
    description: 'Refleksies oor verhoudings, familie en groei.',
    heroImage: 'https://source.unsplash.com/1200x800/?family,relationship,life&sig=jou-lewe',
    subcategories: [
      'verhoudings',
      'ouerskap',
      'finansies',
      'inspirasie',
      'mening',
    ],
  },
  {
    id: 'ontspanning',
    title: 'Ontspanning',
    slug: 'ontspanning',
    description: 'Reis, lees, kyk en luister.',
    heroImage: 'https://source.unsplash.com/1200x800/?travel,books,relaxation&sig=ontspanning',
    subcategories: [
      'reis',
      'boeke',
      'podsendings',
      'flieks',
      'gebeure',
      'blogs',
    ],
  },
  {
    id: 'rooiwarm-wenners',
    title: 'Rooiwarm wenners',
    slug: 'rooiwarm-wenners',
    description: 'Die beste produkte soos gekies deur ons redaksie.',
    heroImage: 'https://source.unsplash.com/1200x800/?award,trophy,winner&sig=rooiwarm',
    subcategories: [
      'skoonheid',
      'welstand',
      'redakteur-se-keuse',
    ],
  },
  {
    id: 'wen',
    title: 'Wen',
    slug: 'wen',
    description: 'Kompetisies en geskenke.',
    heroImage: 'https://source.unsplash.com/1200x800/?gift,giveaway,prize&sig=wen',
    subcategories: [
      'kompetisies',
    ],
  },
];

/**
 * Get Category by ID
 */
export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

/**
 * Get Category by Slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
