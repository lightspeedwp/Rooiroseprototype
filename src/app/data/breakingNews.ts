export interface BreakingNewsItem {
  id: string;
  title: string;
  category: string;
  publishedAt: string; // ISO date string
}

export const BREAKING_NEWS_ITEMS: BreakingNewsItem[] = [
  {
    id: '1',
    title: 'Brand by Willows-vakansieoord onder beheer',
    category: 'Nuus',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
  },
  {
    id: '2',
    title: 'Munisipaliteit kondig waterbeperkings aan vir Paarl-Oos',
    category: 'Plaaslik',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
  },
  {
    id: '3',
    title: 'Springbokke kondig span aan vir komende toetsreeks',
    category: 'Sport',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
  },
  {
    id: '4',
    title: 'N1 gesluit na ernstige ongeluk naby Hugenote-tonnel',
    category: 'Verkeer',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(), // 25 hours ago (Yesterday)
  },
  {
    id: '5',
    title: 'Plaaslike skole presteer uitstekend in matriekeindeksamen',
    category: 'Onderwys',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(), // 28 hours ago
  },
  {
    id: '6',
    title: 'Nuwe winkelsentrum open deure in Wellington',
    category: 'Sake',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
  },
  {
    id: '7',
    title: 'Boland Krieket kondig nuwe afrigter aan',
    category: 'Sport',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(), // 2 days ago
  },
  {
    id: '8',
    title: 'Weerdiens waarsku teen hittegolf in Boland',
    category: 'Weer',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
  },
  {
    id: '9',
    title: 'Kragonderbreking in Paarl-Noord na substasie fout',
    category: 'Munisipale',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // 1 hour ago
  },
  {
    id: '10',
    title: 'Ernstige donderstorm waarskuwing uitgereik vir Kaapse Wynlande',
    category: 'Weer',
    publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
  },
  {
    id: '11',
    title: 'Polisie soek getuies na gewapende roof in Hoofstraat',
    category: 'Misdaad',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
  }
];

export const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  const hours = Math.floor(diffInSeconds / 3600);
  
  if (hours < 24) {
    return `${hours} uur gelede`;
  } else {
    return 'Gister'; // Or date format if older
  }
};
