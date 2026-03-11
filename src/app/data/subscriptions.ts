export interface SubscriptionOption {
  months: number;
  title: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
  color?: string;
  perIssue?: string;
}

export const E_EDITION_SUBSCRIPTIONS: SubscriptionOption[] = [
  {
    months: 1,
    title: "1 Maand",
    price: 140,
    description: "Perfek vir nuwe lesers",
    perIssue: "R35 per uitgawe",
    features: [
      "4 e-uitgawes",
      "Toegang tot alle uitgawes vanaf intekeningdatum",
      "Kanselleer enige tyd",
      "Kies jou streek by intekening"
    ],
    popular: false,
    color: "bg-gray-50"
  },
  {
    months: 3,
    title: "3 Maande",
    price: 390,
    description: "Ons gewildste keuse",
    perIssue: "R32.50 per uitgawe",
    features: [
      "12 e-uitgawes",
      "Toegang tot alle uitgawes vanaf intekeningdatum",
      "Spaar R30",
      "Kies jou streek by intekening"
    ],
    popular: true,
    color: "bg-[var(--wp--preset--color--secondary)] text-white"
  },
  {
    months: 12,
    title: "12 Maande",
    price: 1400,
    description: "Maksimum waarde",
    perIssue: "~R26.92 per uitgawe",
    features: [
      "52 e-uitgawes",
      "Toegang tot alle uitgawes vanaf intekeningdatum",
      "Spaar R420",
      "Kies jou streek by intekening"
    ],
    popular: true,
    color: "bg-[var(--wp--preset--color--secondary)] text-white"
  },
];

export const PRINT_SUBSCRIPTIONS: SubscriptionOption[] = [
  {
    months: 1,
    title: "1 Maand",
    price: 140,
    description: "Debietorder",
    features: [
      "4 Gedrukte uitgawes",
      "Aflewering ingesluit",
      "Hanteer deur On the Dot",
      "Digitale e-uitgawe nie ingesluit nie"
    ],
    popular: false,
    color: "bg-gray-50"
  },
  {
    months: 3,
    title: "3 Maande",
    price: 455,
    description: "Debietorder of EFT",
    features: [
      "12 Gedrukte uitgawes",
      "Aflewering ingesluit",
      "Hanteer deur On the Dot",
      "Digitale e-uitgawe nie ingesluit nie"
    ],
    popular: false,
    color: "bg-gray-50"
  },
  {
    months: 6,
    title: "6 Maande",
    price: 910,
    description: "Debietorder of EFT",
    features: [
      "26 Gedrukte uitgawes",
      "Aflewering ingesluit",
      "Hanteer deur On the Dot",
      "Beste waarde",
      "Digitale e-uitgawe nie ingesluit nie"
    ],
    popular: true,
    color: "bg-[var(--wp--preset--color--secondary)] text-white"
  },
  {
    months: 12,
    title: "12 Maande",
    price: 1820,
    description: "Debietorder of EFT",
    features: [
      "52 Gedrukte uitgawes",
      "Aflewering ingesluit",
      "Hanteer deur On the Dot",
      "Digitale e-uitgawe nie ingesluit nie"
    ],
    popular: true,
    color: "bg-[var(--wp--preset--color--secondary)] text-white"
  }
];