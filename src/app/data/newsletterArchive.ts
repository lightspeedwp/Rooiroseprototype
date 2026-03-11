export interface NewsletterEdition {
  id: string;
  type: 'friday' | 'tuesday';
  title: string;
  date: string;
  description: string;
  link: string;
}

export const NEWSLETTER_EDITIONS: NewsletterEdition[] = [
  {
    id: 'fri-2026-02-13',
    type: 'friday',
    title: 'Die Papier Vrydag E-uitgawe',
    date: '13 Februarie 2026',
    description: 'Begroting 2026 ontleding, Currie Cup-halfeindstryd, en die nuutste eiendomsmark-tendense.',
    link: '/templates/newsletter/friday',
  },
  {
    id: 'tue-2026-02-11',
    type: 'tuesday',
    title: 'Die Papier Leefstyl & Nuus',
    date: '11 Februarie 2026',
    description: 'Valentynsdag-spesial, resepte vir twee, en die beste plekke om uit te eet.',
    link: '/templates/newsletter/tuesday',
  },
  {
    id: 'fri-2026-02-06',
    type: 'friday',
    title: 'Die Papier Vrydag E-uitgawe',
    date: '6 Februarie 2026',
    description: 'Provinsiale debat oor waterbeperking, Stormers-span aangekondig, en nuwe KI-beleid.',
    link: '/templates/newsletter/friday',
  },
  {
    id: 'tue-2026-02-04',
    type: 'tuesday',
    title: 'Die Papier Leefstyl & Nuus',
    date: '4 Februarie 2026',
    description: 'Somermode op die Kaapse voorstrand, Wes-Kaap wynoes-vooruitsig, en boekbesprekings.',
    link: '/templates/newsletter/tuesday',
  },
  {
    id: 'fri-2026-01-30',
    type: 'friday',
    title: 'Die Papier Vrydag E-uitgawe',
    date: '30 Januarie 2026',
    description: 'Terug-na-skool-fokus, verkeersplan vir 2026, en onderwysbeleid-hersiening.',
    link: '/templates/newsletter/friday',
  },
  {
    id: 'tue-2026-01-28',
    type: 'tuesday',
    title: 'Die Papier Leefstyl & Nuus',
    date: '28 Januarie 2026',
    description: 'Nuwe restaurant-openings, vakansie-terugvoer, en gesondheid-wenke vir die somer.',
    link: '/templates/newsletter/tuesday',
  },
  {
    id: 'fri-2026-01-23',
    type: 'friday',
    title: 'Die Papier Vrydag E-uitgawe',
    date: '23 Januarie 2026',
    description: 'Droogtewaarskuwing Noord-Kaap, Bulls se nuwe aankope, en rentekoersbesluit.',
    link: '/templates/newsletter/friday',
  },
  {
    id: 'tue-2026-01-21',
    type: 'tuesday',
    title: 'Die Papier Leefstyl & Nuus',
    date: '21 Januarie 2026',
    description: 'Kunsfees-aankondigings, wintergewasse om nou te plant, en die beste podcasts van 2026.',
    link: '/templates/newsletter/tuesday',
  },
];
