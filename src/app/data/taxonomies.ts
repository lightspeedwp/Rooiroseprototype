/**
 * Taxonomy data for Die Papier
 * Defines all categories and tags used across content types
 */

export interface TaxonomyTerm {
  slug: string;
  name: string;
  description?: string;
  count?: number; // Mock post count
  parentId?: string; // For hierarchical taxonomies
}

// 2.1 Article Category (dp_category)
export const ARTICLE_CATEGORIES: TaxonomyTerm[] = [
  { slug: 'nuus', name: 'Nuus', description: 'Algemene nuusberigte' },
  { slug: 'sport', name: 'Sport', description: 'Sportnuus en uitslae' },
  { slug: 'sake', name: 'Sake', description: 'Besigheidsnuus en ekonomie' },
  { slug: 'leefstyl', name: 'Leefstyl', description: 'Kos, reise, en vermaak' },
  { slug: 'dink', name: 'Dink', description: 'Opinies en rubrieke' },
  { slug: 'skole', name: 'Skole', description: 'Skolenuus' },
  { slug: 'skolerugby', name: 'Skole rugby', description: 'Skolerugby wedstryde en nuus', parentId: 'skole' },
];

// 2.2 Article Tag (dp_tag) - Examples
export const ARTICLE_TAGS: TaxonomyTerm[] = [
  { slug: 'aktueel', name: 'Aktueel' },
  { slug: 'politiek', name: 'Politiek' },
  { slug: 'misdaad', name: 'Misdaad' },
  { slug: 'rugby', name: 'Rugby' },
  { slug: 'sokker', name: 'Sokker' },
  { slug: 'ekonomie', name: 'Ekonomie' },
  { slug: 'plaaslik', name: 'Plaaslik' },
  { slug: 'munisipaliteit', name: 'Munisipaliteit' },
  { slug: 'onderwys', name: 'Onderwys' },
  { slug: 'kuns-en-kultuur', name: 'Kuns en Kultuur' },
  { slug: 'omgewing', name: 'Omgewing' },
  { slug: 'verkeer', name: 'Verkeer' },
];

// 2.3 Event Category (dp_event_category)
export const EVENT_CATEGORIES: TaxonomyTerm[] = [
  { slug: 'plaaslik', name: 'Plaaslik' },
  { slug: 'sport', name: 'Sport' },
  { slug: 'kuns', name: 'Kuns' },
  { slug: 'sake', name: 'Sake' },
  { slug: 'mark', name: 'Mark' },
  { slug: 'literatuur', name: 'Literatuur' },
  { slug: 'kos', name: 'Kos' },
];

// 2.4 Competition Category (dp_competition_category)
export const COMPETITION_CATEGORIES: TaxonomyTerm[] = [
  { slug: 'inkopies', name: 'Inkopies' },
  { slug: 'sport', name: 'Sport' },
  { slug: 'reis', name: 'Reis' },
  { slug: 'lewenstyl', name: 'Lewenstyl' },
  { slug: 'tegnologie', name: 'Tegnologie' },
  { slug: 'kos-en-wyn', name: 'Kos & Wyn' },
  { slug: 'buitelug', name: 'Buitelug' },
  { slug: 'vermaak', name: 'Vermaak' },
  { slug: 'kultuur', name: 'Kultuur' },
  { slug: 'gesondheid', name: 'Gesondheid' },
  { slug: 'huis-en-tuin', name: 'Huis & Tuin' },
];

// 2.5 Multimedia Category (dp_multimedia_category)
export const MULTIMEDIA_CATEGORIES: TaxonomyTerm[] = [
  { slug: 'video', name: 'Video' },
  { slug: 'fotogalery', name: 'Fotogalery' },
  { slug: 'podcast', name: 'Podcast' },
];

// 2.6 Content Tag (dp_content_tag) - Shared tag taxonomy
export const CONTENT_TAGS: TaxonomyTerm[] = [
  { slug: 'video', name: 'Video' },
  { slug: 'fotogalery', name: 'Fotogalery' },
  { slug: 'podcast', name: 'Podcast' },
  { slug: 'onderhoud', name: 'Onderhoud' },
  { slug: 'verslag', name: 'Verslag' },
  { slug: 'agter-die-skerms', name: 'Agter die Skerms' },
];
