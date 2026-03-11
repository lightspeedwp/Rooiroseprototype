import {
  PenLine,
  MessageSquare,
  Heart
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';

export const SUBMIT_OPTIONS = [
  {
    title: 'Nuuswenk of storie',
    description: "Het jy 'n nuuswenk of storie vir <em>Die Papier</em>? Deel dit met ons redaksie en ons sal dit ondersoek.",
    icon: Newspaper,
    href: '/stuur-in/storie',
    cta: 'Stuur storie',
  },
  {
    title: 'Lesersbrief',
    description: "Wil jy jou stem laat hoor? Skryf 'n brief aan die redakteur oor 'n saak wat vir jou belangrik is.",
    icon: PenLine,
    href: '/stuur-in/lesersbrief',
    cta: 'Skryf brief',
  },
  {
    title: 'Terugvoer',
    description: "Het jy kommentaar, 'n voorstel of klagte oor <em>Die Papier</em>? Ons waardeer jou terugvoer.",
    icon: MessageSquare,
    href: '/stuur-in/terugvoer',
    cta: 'Gee terugvoer',
  },
  {
    title: 'Shoutout',
    description: "Wil jy iemand spesiaal gelukwens of bedank? Stuur 'n shoutout wat in <em>Die Papier</em> geplaas kan word.",
    icon: Heart,
    href: '/stuur-in/shoutout',
    cta: 'Stuur shoutout',
  },
];