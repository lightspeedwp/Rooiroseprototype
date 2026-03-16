/**
 * Article data — *rooi rose*
 *
 * @wordpress-patterns page-home (hero, feature grid), archive-default, archive-category-*
 * @wordpress-cards card-post-grid-3col, card-post-list, card-post-featured-hero
 * @wordpress-queries query-posts-latest, query-posts-sticky, query-posts-category
 * @see /guidelines/components/patterns/card/README.md
 */
import { Article, LatestNewsItem } from '../types';

export const TOP_STORIES: Article[] = [
  {
    id: 1,
    title: "Die voorjaar se mooiste mode-neigings vir 2026",
    category: "Mode",
    tags: ["Mode", "Neigings", "Voorjaar"],
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    excerpt: "Van pastelkleure tot bloeiselpatrone — ontdek die hotste style vir die nuwe seisoen.",
    author: "Johan Smit",
    date: "19 Des 2025",
    readTime: "4 min",
    isBreaking: true,
    subtitle: "R500 miljoen bewillig vir padinstandhouding",
    isFeatured: true
  },
  {
    id: 2,
    title: "Hoërskool wen jaarlikse rugby derby teen buurskool",
    category: "Sport",
    tags: ["Skolesport", "Rugby"],
    imageUrl: "https://images.unsplash.com/photo-1643096809267-38765bbfd989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdieSUyMG1hdGNofGVufDF8fHx8MTc2NjA1NzkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "In 'n naelbytstryd het die plaaslike span met 24-21 geseëvier voor 'n skare van duisende.",
    author: "Pieter van der Merwe",
    date: "18 Des 2025",
    readTime: "3 min",
    subtitle: "Grootste skare nog by derby-wedstryd"
  },
  {
    id: 900,
    title: "Vyf slim maniere om jou persoonlike finansies te bestuur",
    category: "Geld & Sukses",
    tags: ["Finansies", "Beplanning"],
    imageUrl: "https://images.unsplash.com/photo-1554224311-88c736d7de4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    excerpt: "Praktiese wenke om jou maandelikse begroting te beplan, skuld te vermy, en jou finansiële doelwitte te bereik.",
    author: "Marlize Botha",
    date: "18 Des 2025",
    sponsored: true,
    sponsorName: "Nedbank",
    sponsorSlug: "nedbank",
    sponsorLogo: "https://ui-avatars.com/api/?name=NB&background=004F32&color=fff&size=128&bold=true",
    sponsorLink: "https://www.nedbank.co.za",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "Die nuutste mode en skoonheid handelsmerke kom Suid-Afrika toe",
    category: "Mode",
    tags: ["Mode", "Skoonheid", "Inkopies"],
    imageUrl: "https://images.unsplash.com/photo-1580793241553-e9f1cce181af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    excerpt: "Van internasionale skoonheidsmerke tot luukse mode-winkels — alles wat jy moet weet oor die nuutste winkel-optredes.",
    author: "Sandra Botha",
    date: "18 Des 2025",
    readTime: "6 min",
    isFeatured: true
  },
  {
    id: 4,
    title: "Plaaslike kunstenaar se werk word internasionaal erken",
    category: "Leefstyl",
    tags: ["Kuns en kultuur"],
    imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc2NjEwNTUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Sarah Jansen se jongste uitstalling het aandag getrek van versamelaars in Londen en New York.",
    author: "Marius Nel",
    date: "17 Des 2025",
    readTime: "2 min"
  },
  {
    id: 901,
    title: "Vars produkte binne 60 minute by jou voordeur",
    category: "Leefstyl",
    tags: ["Inkopies", "Tegnologie"],
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwZGVsaXZlcnl8ZW58MXx8fHwxNzY2MDU3OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Ontdek hoe tegnologie die manier waarop ons inkopies doen revolusioneer en tyd bespaar vir besige gesinne.",
    author: "Geborg",
    date: "17 Des 2025",
    sponsored: true,
    sponsorName: "Checkers Sixty60",
    sponsorSlug: "checkers-sixty60",
    sponsorLogo: "https://ui-avatars.com/api/?name=CS&background=009FA3&color=fff&size=128&bold=true",
    sponsorLink: "https://www.checkers.co.za",
    readTime: "3 min"
  },
  {
    id: 5,
    title: "Woordfees lok rekordgetalle na Stellenbosch",
    category: "Kuns & Vermaak",
    tags: ["Kuns en kultuur", "Vermaak"],
    imageUrl: "https://images.unsplash.com/photo-1665592016610-f6e73e938e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwZmVzdGl2YWwlMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Die jaarlikse literêre fees het vanjaar meer as 30 000 besoekers van regoor die land gelok.",
    author: "Lize Venter",
    date: "17 Des 2025",
    readTime: "4 min",
    subtitle: "Grootste literêre fees in Afrika"
  },
  {
    id: 6,
    title: "Wynbedryf verwag uitstekende oesjaar ondanks uitdagings",
    category: "Landbou",
    tags: ["Landbou", "Ekonomie"],
    imageUrl: "https://images.unsplash.com/photo-1706700700231-91a762a35531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHNvdXRoJTIwYWZyaWNhJTIwc3RlbGxlbmJvc2NofGVufDF8fHx8MTc2OTUyMzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Gunster weersomstandighede in die laat somer het bygedra tot druiwe van hoë gehalte vir die 2026-oes.",
    author: "Kobus van Zyl",
    date: "16 Des 2025",
    readTime: "5 min",
    bylineOverride: "Kobus van Zyl (Landboukundige)"
  },
  {
    id: 7,
    title: "Plaaslike boere skakel oor na sonkrag",
    category: "Tegnologie",
    tags: ["Landbou", "Omgewing"],
    imageUrl: "https://images.unsplash.com/photo-1671917057421-677f9cd99721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZhcm0lMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    excerpt: "Meer as 50% van plase in die distrik wek nou hul eie krag op om beurtkrag teen te werk.",
    author: "Thandi Nkosi",
    date: "15 Des 2025",
    readTime: "4 min"
  }
];

export const LATEST_NEWS: LatestNewsItem[] = [
  {
    id: 5,
    title: "Volhoubare skoonheid: Eco-vriendelike produkte wat werk",
    category: "Skoonheid",
    time: "2 uur gelede",
    tags: ["Skoonheid", "Volhoubaarheid"]
  },
  {
    id: 6,
    title: "Vrouedag vieringe beplan vir Augustus",
    category: "Plaaslik",
    time: "4 uur gelede",
    tags: ["Plaaslik"]
  },
  {
    id: 7,
    title: "Plaaslike mark lok rekordgetal besoekers",
    category: "Leefstyl",
    time: "5 uur gelede",
    tags: ["Vermaak"]
  },
  {
    id: 8,
    title: "Polisie waarsku teen nuwe bedrogskema",
    category: "Misdaad",
    time: "Gister",
    tags: ["Misdaad"]
  },
  {
    id: 9,
    title: "Skole sluit vir vakansie",
    category: "Onderwys",
    time: "Gister",
    tags: ["Skolesport"]
  },
  {
    id: 10,
    title: "Verkeersvloei belemmer deur ongeluk op R44",
    category: "Verkeer",
    time: "1 uur gelede",
    tags: ["Plaaslik"]
  },
  {
    id: 11,
    title: "Plaaslike biblioteek loods vakansieprogram",
    category: "Plaaslik",
    time: "3 uur gelede",
    tags: ["Kuns en kultuur"]
  },
  {
    id: 12,
    title: "Somerseisoen tuinwenke: Hou jou tuin pragtig",
    category: "Leefstyl",
    time: "6 uur gelede",
    tags: ["Tuinmaak", "Somer"]
  }
];