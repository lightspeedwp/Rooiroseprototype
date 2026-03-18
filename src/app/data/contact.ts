import { Phone, Mail, MessageSquare, TrendingUp, FileText, Edit } from 'lucide-react';
import { HERO_IMAGES } from './heroImages';

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
  image: HERO_IMAGES.contact,
};

export const CONTACT_PAGE_CONTENT = {
  help_title: 'Hoe kan ons help?',
  form_title: "Stuur vir ons 'n boodskap",
  form_description: 'Vul die vorm hieronder in en ons sal so spoedig moontlik terugvoer. Vir dringende sake, skakel ons gerus direk.',
  social_proof_title: 'Volg ons op sosiale media',
  social_proof_text: 'Bly op hoogte van die jongste nuus, sport en plaaslike gebeure deur ons sosiale media-kanale te volg.',
};

export const CONTACT_FORM = {
  labels: {
    name: 'Naam',
    email: 'E-pos',
    subject: 'Onderwerp',
    message: 'Boodskap',
  },
  placeholders: {
    name: 'Jou volle naam',
    email: 'jou.epos@example.com',
    subject: 'Waaroor gaan dit?',
    message: 'Skryf jou boodskap hier...',
  },
  validation: {
    nameMin: 'Naam moet ten minste 2 karakters lank wees.',
    emailInvalid: 'Voer asseblief \'n geldige e-posadres in.',
    subjectMin: 'Onderwerp moet ten minste 5 karakters lank wees.',
    messageMin: 'Boodskap moet ten minste 10 karakters lank wees.',
  },
  buttons: {
    submit: 'Stuur boodskap',
    submitting: 'Stuur...',
  },
  success: {
    title: 'Boodskap gestuur!',
    description: 'Dankie vir jou boodskap. Ons sal so spoedig moontlik terugvoer.',
  },
};

export const DEPARTMENTS: Department[] = [
  {
    icon: MessageSquare,
    title: 'Redaksie',
    description: 'Nuuswenke, regstellings of redaksionele navrae.',
    links: [
      { label: 'nuus@rooirose.co.za', href: 'mailto:nuus@rooirose.co.za', type: 'email' },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Advertensies',
    description: 'Adverteer in druk, aanlyn of digitale platforms.',
    links: [
      { label: 'nico.flietoor@rooirose.co.za', href: 'mailto:nico.flietoor@rooirose.co.za', type: 'email' },
    ],
  },
  {
    icon: Mail,
    title: 'Lesersnavrae',
    description: 'Intekeninge, aflewerings of algemene vrae.',
    links: [
      { label: 'lesers@rooirose.co.za', href: 'mailto:lesers@rooirose.co.za', type: 'email' },
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
    { label: 'E-pos', value: 'lesers@rooirose.co.za', href: 'mailto:lesers@rooirose.co.za' },
  ],
};

export const OFFICE_HOURS = {
  title: 'Kantoorure',
  hours: [
    { day: 'Maandag – Vrydag', time: '08:00 – 17:00' },
    { day: 'Saterdag', time: '09:00 – 13:00' },
    { day: 'Sondag', time: 'Gesluit' },
  ],
};