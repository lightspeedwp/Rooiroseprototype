import { Mail, Phone, CreditCard } from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import type { LucideIcon } from 'lucide-react';

interface DepartmentLink {
  label: string;
  href: string;
  type: 'email' | 'phone';
}

interface Department {
  icon: LucideIcon;
  title: string;
  description: string;
  links: DepartmentLink[];
}

export const CONTACT_HERO = {
  title: 'Kontak ons',
  subtitle: "Het jy 'n vraag, nuuswenk of terugvoer? Ons span is hier om te help. Kontak ons gerus per e-pos, telefoon of deur die vorm hieronder in te vul.",
  image: '',
};

export const CONTACT_PAGE_CONTENT = {
  help_title: 'Hoe kan ons help?',
  form_title: "Stuur vir ons 'n boodskap",
  form_description: 'Vul die vorm hieronder in en ons sal so spoedig moontlik terugvoer. Vir dringende sake, skakel ons gerus direk.',
  social_proof_title: 'Volg ons op sosiale media',
  social_proof_text: 'Bly op hoogte van die jongste nuus, sport en plaaslike gebeure deur ons sosiale media-kanale te volg.',
};

export const DEPARTMENTS: Department[] = [
  {
    icon: Newspaper,
    title: 'Redaksie',
    description: 'Nuuswenke, regstellings of redaksionele navrae.',
    links: [
      { label: 'nuus@diepapier.co.za', href: 'mailto:nuus@diepapier.co.za', type: 'email' },
    ],
  },
  {
    icon: CreditCard,
    title: 'Advertensies',
    description: 'Adverteer in druk, aanlyn of digitale platforms.',
    links: [
      { label: 'nico.flietoor@diepapier.co.za', href: 'mailto:nico.flietoor@diepapier.co.za', type: 'email' },
    ],
  },
  {
    icon: Mail,
    title: 'Lesersnavrae',
    description: 'Intekeninge, aflewerings of algemene vrae.',
    links: [
      { label: 'lesers@diepapier.co.za', href: 'mailto:lesers@diepapier.co.za', type: 'email' },
      { label: '011 713 9000', href: 'tel:+27117139000', type: 'phone' },
    ],
  },
];

export const OFFICE_DETAILS = {
  address: {
    line1: 'The Zone @ Rosebank',
    line2: 'Bakerstraat 177, Rosebank',
    line3: 'Johannesburg, 2196',
  },
  contacts: [
    { label: 'Tel', value: '011 713 9000', href: 'tel:+27117139000' },
    { label: 'E-pos', value: 'lesers@diepapier.co.za', href: 'mailto:lesers@diepapier.co.za' },
  ],
};

export const OFFICE_HOURS = [
  { day: 'Maandag \u2013 Vrydag', hours: '08:00 \u2013 17:00', highlight: false },
  { day: 'Saterdae', hours: '09:00 \u2013 13:00', highlight: false },
  { day: 'Son- & Vakansiedae', hours: 'Gesluit', highlight: true },
];

export const CONTACT_FORM = {
  labels: {
    name: "Naam",
    email: "E-posadres",
    subject: "Onderwerp",
    message: "Boodskap"
  },
  placeholders: {
    name: "Jou naam",
    email: "jou@e-pos.co.za",
    subject: "Waaroor gaan dit?",
    message: "Skryf jou boodskap hier..."
  },
  validation: {
    nameMin: "Naam moet ten minste 2 karakters wees.",
    emailInvalid: "Voer asseblief 'n geldige e-posadres in.",
    subjectMin: "Onderwerp moet ten minste 5 karakters wees.",
    messageMin: "Boodskap moet ten minste 10 karakters wees."
  },
  buttons: {
    submit: "Stuur boodskap",
    submitting: "Besig om te stuur..."
  },
  success: {
    title: "Boodskap suksesvol gestuur!",
    description: "Ons sal binnekort terugvoer gee."
  }
};