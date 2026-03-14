/**
 * Rooi Rose Subcategories
 * 
 * All 44 subcategories mapped to parent categories.
 * Used for filtering, navigation, and mega menu links.
 */

import { Subcategory } from './models/Subcategory';

/**
 * All Subcategories Array
 */
export const subcategories: Subcategory[] = [
  // Kos subcategories (12)
  {
    id: 'begin-hier',
    title: 'Begin hier',
    slug: 'begin-hier',
    parent: 'kos',
    description: 'Die beste beginpunt vir nuwe resepte.',
  },
  {
    id: 'kook-vir-die-seisoen',
    title: 'Kook vir die seisoen',
    slug: 'kook-vir-die-seisoen',
    parent: 'kos',
    description: 'Seisoenale resepte met vars bestanddele.',
  },
  {
    id: 'soet-spesiaal',
    title: 'Soet & spesiaal',
    slug: 'soet-spesiaal',
    parent: 'kos',
    description: 'Spesiale geleentheid resepte en lekkernye.',
  },
  {
    id: 'maklik-vinnig',
    title: 'Maklik & vinnig',
    slug: 'maklik-vinnig',
    parent: 'kos',
    description: 'Vinnige resepte vir druk weeksdae.',
  },
  {
    id: 'aandetes-vir-die-week',
    title: 'Aandetes vir die week',
    slug: 'aandetes-vir-die-week',
    parent: 'kos',
    description: 'Weeklikse maaltydplanne en aandete idees.',
  },
  {
    id: 'somerkos',
    title: 'Somerkos',
    slug: 'somerkos',
    parent: 'kos',
    description: 'Vars en ligte resepte vir warm dae.',
  },
  {
    id: 'winterkos',
    title: 'Winterkos',
    slug: 'winterkos',
    parent: 'kos',
    description: 'Warmkos en troosgeregte vir koue dae.',
  },
  {
    id: 'laekoolhidraat',
    title: 'Laekoolhidraat',
    slug: 'laekoolhidraat',
    parent: 'kos',
    description: 'Gesonde resepte met min koolhidrate.',
  },
  {
    id: 'vegetaries',
    title: 'Vegetaries',
    slug: 'vegetaries',
    parent: 'kos',
    description: 'Plantgebaseerde en vegetariese resepte.',
  },
  {
    id: 'gebak',
    title: 'Gebak',
    slug: 'gebak',
    parent: 'kos',
    description: 'Brood, koek en bakresepte.',
  },
  {
    id: 'nagereg',
    title: 'Nagereg',
    slug: 'nagereg',
    parent: 'kos',
    description: 'Soet nagereg idees en resepte.',
  },
  {
    id: 'drankies',
    title: 'Drankies',
    slug: 'drankies',
    parent: 'kos',
    description: 'Verfrissende drankies en koeldrank resepte.',
  },

  // Mode subcategories (6)
  {
    id: 'nuutste-neigings',
    title: 'Nuutste neigings',
    slug: 'nuutste-neigings',
    parent: 'mode',
    description: 'Die jongste mode neigings en style.',
  },
  {
    id: 'style-gidse',
    title: 'Style gidse',
    slug: 'style-gidse',
    parent: 'mode',
    description: 'Hoe om jou persoonlike styl te ontwikkel.',
  },
  {
    id: 'rooi-loper',
    title: 'Rooi loper',
    slug: 'rooi-loper',
    parent: 'mode',
    description: 'Rooi loper mode en stylanalise.',
  },
  {
    id: 'kapsule-kas',
    title: 'Kapsule kas',
    slug: 'kapsule-kas',
    parent: 'mode',
    description: 'Bou die perfekte kapsule kabinet.',
  },
  {
    id: 'seisoenale-mode',
    title: 'Seisoenale mode',
    slug: 'seisoenale-mode',
    parent: 'mode',
    description: 'Modevooruitsigte vir elke seisoen.',
  },
  {
    id: 'ontwerpers',
    title: 'Ontwerpers',
    slug: 'ontwerpers',
    parent: 'mode',
    description: 'Profiele van top mode-ontwerpers.',
  },

  // Skoonheid subcategories (5)
  {
    id: 'velversorging',
    title: 'Velversorging',
    slug: 'velversorging',
    parent: 'skoonheid',
    description: 'Velversorging roetines en produkte.',
  },
  {
    id: 'grimering',
    title: 'Grimering',
    slug: 'grimering',
    parent: 'skoonheid',
    description: 'Grimering tutoriale en tegnieke.',
  },
  {
    id: 'haarversorging',
    title: 'Haarversorging',
    slug: 'haarversorging',
    parent: 'skoonheid',
    description: 'Haarversorging wenke en style.',
  },
  {
    id: 'naelversorging',
    title: 'Naelversorging',
    slug: 'naelversorging',
    parent: 'skoonheid',
    description: 'Naelversorging en nael kuns.',
  },
  {
    id: 'produkresensies',
    title: 'Produkresensies',
    slug: 'produkresensies',
    parent: 'skoonheid',
    description: 'Eerlike resensies van skoonheidsprodukte.',
  },

  // Gesondheid subcategories (4)
  {
    id: 'fiksheid',
    title: 'Fiksheid',
    slug: 'fiksheid',
    parent: 'gesondheid',
    description: 'Oefeninge en fiksheidswenke.',
  },
  {
    id: 'voeding',
    title: 'Voeding',
    slug: 'voeding',
    parent: 'gesondheid',
    description: 'Voedingsinligting en gesonde eetgewoontes.',
  },
  {
    id: 'simptome',
    title: 'Simptome',
    slug: 'simptome',
    parent: 'gesondheid',
    description: 'Verstaan algemene gesondheidsimptome.',
  },
  {
    id: 'geestesgesondheid',
    title: 'Geestesgesondheid',
    slug: 'geestesgesondheid',
    parent: 'gesondheid',
    description: 'Geestesgesondheid en welstand wenke.',
  },

  // Bekendes subcategories (4)
  {
    id: 'onderhoude',
    title: 'Onderhoude',
    slug: 'onderhoude',
    parent: 'bekendes',
    description: 'Eksklusiewe onderhoude met bekendes.',
  },
  {
    id: 'tv-dekking',
    title: 'TV dekking',
    slug: 'tv-dekking',
    parent: 'bekendes',
    description: 'Die jongste nuus oor TV-programme en -sterre.',
  },
  {
    id: 'agter-die-skerms',
    title: 'Agter die skerms',
    slug: 'agter-die-skerms',
    parent: 'bekendes',
    description: 'Agter-die-skerms insig en stories.',
  },
  {
    id: 'kultuur',
    title: 'Kultuur',
    slug: 'kultuur',
    parent: 'bekendes',
    description: 'Kultuurkommentaar en -analise.',
  },

  // Leefstyl subcategories (5)
  {
    id: 'dekor',
    title: 'Dekor',
    slug: 'dekor',
    parent: 'leefstyl',
    description: 'Huisdekordrag en -idees.',
  },
  {
    id: 'diy',
    title: 'DIY',
    slug: 'diy',
    parent: 'leefstyl',
    description: 'Doen-dit-self projekte vir die huis.',
  },
  {
    id: 'tuin',
    title: 'Tuin',
    slug: 'tuin',
    parent: 'leefstyl',
    description: 'Tuinmaak wenke en plantgidse.',
  },
  {
    id: 'klein-spasies',
    title: 'Klein spasies',
    slug: 'klein-spasies',
    parent: 'leefstyl',
    description: 'Slim idees vir klein wonings.',
  },
  {
    id: 'ambag',
    title: 'Ambag',
    slug: 'ambag',
    parent: 'leefstyl',
    description: 'Kreatiewe ambag projekte en tutoriale.',
  },

  // Jou lewe subcategories (5)
  {
    id: 'verhoudings',
    title: 'Verhoudings',
    slug: 'verhoudings',
    parent: 'jou-lewe',
    description: 'Raad oor verhoudings en liefde.',
  },
  {
    id: 'ouerskap',
    title: 'Ouerskap',
    slug: 'ouerskap',
    parent: 'jou-lewe',
    description: 'Ouerskapswenke en familie-lewe.',
  },
  {
    id: 'finansies',
    title: 'Finansies',
    slug: 'finansies',
    parent: 'jou-lewe',
    description: 'Persoonlike finansies en besparing.',
  },
  {
    id: 'inspirasie',
    title: 'Inspirasie',
    slug: 'inspirasie',
    parent: 'jou-lewe',
    description: 'Inspirerende stories en quote.',
  },
  {
    id: 'mening',
    title: 'Mening',
    slug: 'mening',
    parent: 'jou-lewe',
    description: 'Redaksionele menings en kommentaar.',
  },

  // Ontspanning subcategories (6)
  {
    id: 'reis',
    title: 'Reis',
    slug: 'reis',
    parent: 'ontspanning',
    description: 'Reisbeskrywings en reisplanne.',
  },
  {
    id: 'boeke',
    title: 'Boeke',
    slug: 'boeke',
    parent: 'ontspanning',
    description: 'Boekresensies en aanbevelings.',
  },
  {
    id: 'podsendings',
    title: 'Podsendings',
    slug: 'podsendings',
    parent: 'ontspanning',
    description: 'rooi rose podsendings en episodes.',
  },
  {
    id: 'flieks',
    title: 'Flieks',
    slug: 'flieks',
    parent: 'ontspanning',
    description: 'Filmresensies en aanbevelings.',
  },
  {
    id: 'gebeure',
    title: 'Gebeure',
    slug: 'gebeure',
    parent: 'ontspanning',
    description: 'Aanstaande gebeure en vertonings.',
  },
  {
    id: 'blogs',
    title: 'Blogs',
    slug: 'blogs',
    parent: 'ontspanning',
    description: 'Persoonlike blogs en refleksies.',
  },

  // Rooiwarm wenners subcategories (3)
  {
    id: 'skoonheid',
    title: 'Skoonheid',
    slug: 'skoonheid',
    parent: 'rooiwarm-wenners',
    description: 'Top skoonheidsprodukte wat gewen het.',
  },
  {
    id: 'welstand',
    title: 'Welstand',
    slug: 'welstand',
    parent: 'rooiwarm-wenners',
    description: 'Beste welstandsprodukte van die jaar.',
  },
  {
    id: 'redakteur-se-keuse',
    title: 'Redakteur se keuse',
    slug: 'redakteur-se-keuse',
    parent: 'rooiwarm-wenners',
    description: 'Redaksie se gunsteling produkte.',
  },

  // Wen subcategories (1)
  {
    id: 'kompetisies',
    title: 'Kompetisies',
    slug: 'kompetisies',
    parent: 'wen',
    description: 'Huidige kompetisies en wenke.',
  },
];

/**
 * Get Subcategories by Parent Category
 */
export function getSubcategoriesByParent(parentId: string): Subcategory[] {
  return subcategories.filter((sub) => sub.parent === parentId);
}

/**
 * Get Subcategory by ID
 */
export function getSubcategoryById(id: string): Subcategory | undefined {
  return subcategories.find((sub) => sub.id === id);
}

/**
 * Get Subcategory by Slug
 */
export function getSubcategoryBySlug(slug: string): Subcategory | undefined {
  return subcategories.find((sub) => sub.slug === slug);
}
