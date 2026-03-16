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

export const DEPARTMENTS: Department[] = [
  {
    icon: MessageSquare,
    title: 'Redaksie',
    description: 'Nuuswenke, regstellings of redaksionele navrae.',
    links: [
      { label: 'nuus@diepapier.co.za', href: 'mailto:nuus@diepapier.co.za', type: 'email' },
    ],
  },
  {
    icon: TrendingUp,
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