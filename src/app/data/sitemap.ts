import { ARTICLE_CATEGORIES, EVENT_CATEGORIES as TAX_EVENT_CATEGORIES } from './taxonomies';

// Define explicit tag mappings for categories to simulate a richer sitemap
const CATEGORY_TAG_MAP: Record<string, string[]> = {
  'nuus': ['aktueel', 'politiek', 'misdaad', 'plaaslik', 'munisipaliteit', 'onderwys', 'omgewing', 'verkeer'],
  'sport': ['rugby', 'sokker', 'krieket', 'atletiek'],
  'sake': ['ekonomie', 'beleggings', 'eiendom', 'landbou'],
  'leefstyl': ['kuns-en-kultuur', 'kos-en-wyn', 'reis', 'vermaak', 'gesondheid'],
  'dink': ['aktueel', 'politiek', 'opinie', 'briewe'],
  'skole': ['onderwys', 'matriek', 'kultuur', 'sport'],
  'skolerugby': ['rugby', 'cravenweek', 'uitslae'],
  'kompetisies': ['pryse', 'kuns-en-kultuur', 'fotografie', 'reis-en-buitelewe'],
};

export const SITEMAP_CATEGORIES = ARTICLE_CATEGORIES.map(cat => ({
  name: cat.name,
  path: `/${cat.slug}`,
  description: cat.description,
  tags: CATEGORY_TAG_MAP[cat.slug] || [] 
}));

export const EVENT_CATEGORIES = TAX_EVENT_CATEGORIES;

export const SITEMAP_PAGES = [
  { name: 'Tuis', path: '/' },
  // Information
  { name: 'Oor ons', path: '/oor-ons' },
  { name: 'Redaksie', path: '/oor-ons/redaksie' },
  { name: 'Kontak', path: '/kontak' },
  { name: 'Algemene vrae', path: '/vrae' },
  { name: 'Weer', path: '/weer' },
  { name: 'Verkeer', path: '/verkeer' },
  // Content Hubs
  { name: 'E-Uitgawes', path: '/e-uitgawes' },
  { name: 'Doodsberrigte', path: '/doodsberrigte' },
  { name: 'Gebeure', path: '/gebeure' },
  { name: 'Multimedia', path: '/multimedia' },
  { name: 'Kompetisies', path: '/kompetisies' },
  // Commerce
  { name: 'Winkel', path: '/winkel' },
  { name: 'Inteken', path: '/inteken' },
  { name: 'My rekening', path: '/my-rekening' },
  { name: 'Registreer', path: '/registreer' },
  // Advertise
  { name: 'Adverteer', path: '/adverteer' },
  { name: 'Geklassifiseerd', path: '/adverteer/geklassifiseerd' },
  { name: 'Vertoonadvertensies', path: '/adverteer/vertoonadvertensies' },
  { name: 'Pamflette', path: '/adverteer/pamflette' },
  { name: 'Geborgde inhoud', path: '/adverteer/geborgde-inhoud' },
  { name: 'Borgskappe', path: '/adverteer/borgskappe' },
  { name: 'Bylaes', path: '/adverteer/bylaes' },
  // Sponsors
  { name: 'Geborg', path: '/geborg' },
  // Submit
  { name: 'Stuur in', path: '/stuur-in' },
  { name: 'Stuur storie', path: '/stuur-in/storie' },
  { name: 'Stuur lesersbrief', path: '/stuur-in/lesersbrief' },
  { name: 'Stuur terugvoer', path: '/stuur-in/terugvoer' },
  { name: 'Stuur shoutout', path: '/stuur-in/shoutout' },
  // Newsletters
  { name: 'Nuusbrief inteken', path: '/nuusbrief-inteken' },
  { name: 'Nuusbrief-argief', path: '/nuusbrief-argief' },
  // Policies
  { name: 'Beleid hub', path: '/beleid' },
  { name: 'Privaatheidsbeleid', path: '/beleid/privaatheidsbeleid' },
  { name: 'Terme en voorwaardes', path: '/beleid/terme-en-voorwaardes' },
  { name: 'Koekiebeleid', path: '/beleid/koekiebeleid' },
  { name: 'PAIA-handleiding', path: '/beleid/paia' },
  { name: 'Perskode', path: '/beleid/perskode' },
  { name: 'Advertensie-riglyne', path: '/beleid/advertensie-riglyne' },
  // Utility
  { name: 'Vanlyn', path: '/vanlyn' },
  { name: 'Kompetisie Terme', path: '/kompetisie-terme' },
];

export const SITEMAP_CPTS = [
  { name: 'Artikels', route: '/artikel/:slug' },
  { name: 'E-Uitgawes', route: '/e-uitgawe/:slug' },
  { name: 'Doodsberrigte', route: '/doodsberrigte/:slug' },
  { name: 'Gebeure', route: '/gebeure/:id' },
  { name: 'Multimedia', route: '/multimedia/:slug' },
  { name: 'Kompetisies', route: '/kompetisies/:slug' },
];