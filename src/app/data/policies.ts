import {
  Lock,
  Cookie,
  FileText,
  Users,
  Megaphone,
  Cpu,
  MessageCircle,
  RotateCcw,
  Trophy,
  AlertTriangle
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { HERO_IMAGES } from './heroImages';

export const POLICIES_HERO = {
  title: "Beleid & Bepalings",
  subtitle: "Ons is toegewyd aan die beskerming van jou privaatheid en die verskaffing van 'n veilige, deursigtige diens.",
  image: HERO_IMAGES.legal
};

export const POLICIES_SUMMARY = {
  title: "Vinnige opsomming",
  items: [
    "Ons verkoop nooit jou persoonlike inligting aan derde partye nie.",
    "Jou data word veilig gestoor met industrie-standaard enkripsie.",
    "Jy het volle beheer oor jou rekening en kan dit enige tyd kanselleer.",
    "Ons gebruik koekies om jou ervaring te verbeter, maar jy kan dit afskakel.",
    "Ons voldoen aan POPIA (Protection of Personal Information Act) regulasies."
  ]
};

export const POLICIES = [
  {
    title: "Privaatheidsbeleid",
    description: "Hoe ons jou data versamel, gebruik, deel, en beskerm regoor al ons platforms.",
    icon: Lock,
    link: "/beleid/privaatheidsbeleid"
  },
  {
    title: "Koekiebeleid",
    description: "Persoonlike inligting en koekies — wat ons versamel en hoe jy dit kan bestuur.",
    icon: Cookie,
    link: "/beleid/koekiebeleid"
  },
  {
    title: "PAIA-handleiding",
    description: "Wet op Bevordering van Toegang tot Inligting (Wet 2 van 2000) en POPIA-nakoming.",
    icon: FileText,
    link: "/beleid/paia"
  },
  {
    title: "Terme en voorwaardes",
    description: "Verstaan die terme en voorwaardes van die gebruik van ons dienste.",
    icon: FileText,
    link: "/beleid/terme-en-voorwaardes"
  },
  {
    title: "Algemene gebruikersreëls",
    description: "Riglyne vir 'n inklusiewe, respekvolle en boeiende ruimte vir alle gebruikers.",
    icon: Users,
    link: "/beleid/gebruikersreels"
  },
  {
    title: "Advertensie-riglyne",
    description: "Novus Media advertensie- en borgskap-riglyne vir promosie-inhoud.",
    icon: Megaphone,
    link: "/beleid/advertensie-riglyne"
  },
  {
    title: "Perskode",
    description: "Ons verbintenis tot joernalistieke integriteit, akkuraatheid en etiese standaarde.",
    icon: Newspaper,
    link: "/beleid/perskode"
  },
  {
    title: "KI (AI)-riglyne",
    description: "Ons verbintenis tot joernalistieke integriteit en KI-etiek.",
    icon: Cpu,
    link: "/beleid/ki-beleid"
  },
  {
    title: "Kommentaarbeleid",
    description: "Welkom by die gesprek — riglyne vir konstruktiewe en respekvolle besprekings.",
    icon: MessageCircle,
    link: "/beleid/kommentaarbeleid"
  },
  {
    title: "Terugsendingsbeleid",
    description: "Ons terugsendingsbeleid vir digitale en gedrukte produkte.",
    icon: RotateCcw,
    link: "/beleid/terugsendingsbeleid"
  },
  {
    title: "Kompetisie voorwaardes",
    description: "Terme en voorwaardes wat van toepassing is op alle kompetisies wat deur rooi rose aangebied word.",
    icon: Trophy,
    link: "/kompetisie-terme-en-voorwaardes"
  },
  {
    title: "Klagteprosedure",
    description: "Hoe om 'n klagte in te dien oor redaksionele inhoud, advertensies of dienste.",
    icon: AlertTriangle,
    link: "/beleid/klagteprosedure"
  }
];