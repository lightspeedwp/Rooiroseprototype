export interface NewsletterOption {
  id: string;
  name: string;
  description: string;
  frequency: string;
  subscribed: boolean;
}

export const INITIAL_NEWSLETTERS: NewsletterOption[] = [
  {
    id: 'daily-news',
    name: 'Nuusoorsig',
    description: "Die belangrikste nuusverhale uit Suid-Afrika en die wêreld, saamgevat in een gemaklike e-pos.",
    frequency: 'Elke Dinsdag en Vrydag',
    subscribed: true,
  },
  {
    id: 'weekly-digest',
    name: 'Weeklikse Opsomming',
    description: "Die hoogtepunte van die week se nuus, sport en kultuur — alles op een plek.",
    frequency: 'Weekliks (Vrydae)',
    subscribed: true,
  },
  {
    id: 'sport',
    name: 'Sportflits',
    description: 'Die jongste sportuitslae, ontledings en vooruitskouings. Van rugby tot krieket en alles tussenin.',
    frequency: 'Twee keer per week',
    subscribed: false,
  },
  {
    id: 'lifestyle',
    name: 'Leefstyl & Kultuur',
    description: 'Resepte, reisverhale, kunsbesprekings en alles wat die lewe lekker maak.',
    frequency: 'Weekliks (Woensdae)',
    subscribed: false,
  },
  {
    id: 'breaking',
    name: 'Dringende Nuus',
    description: 'Kry onmiddellike kennisgewings wanneer groot nuusgebeure plaasvind.',
    frequency: 'Soos dit gebeur',
    subscribed: true,
  },
  {
    id: 'special',
    name: 'Spesiale Aanbiedinge & Kompetisies',
    description: 'Eksklusiewe aanbiedings, afslag en kompetisies vir rooi rose-lesers.',
    frequency: 'Geleentheid',
    subscribed: false,
  },
];