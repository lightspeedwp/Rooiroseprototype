/**
 * Team data for rooi rose
 * Staff profiles and roles
 */

import { CONTACT_EMAILS } from './contactInfo';

// Import images
import barnardImg from '../assets/team/barnard-beyers.jpg';
import luciaImg from "figma:asset/7c85c047fbdde8adee5b17cfb9211c718b88c10c.png";
import vernonImg from "figma:asset/a75f8c0a9499677a09afa389a3d6a45e544ec10c.png";
import gerrieImg from "figma:asset/29ff260289f38b2a986a638476e9b3250556115e.png";
import ilseImg from "figma:asset/b1fa9ddb0f23903f70bd874a0568bba679a1debe.png";
import janaImg from "figma:asset/b9653bed7172f2139fc48c674c17a66bd4ad34c8.png";
import stehanImg from "figma:asset/dd241e58ec1836c6ab3468cd41b3df86498afb2d.png";
import bohemiaImg from "figma:asset/393ff7cca7b9274bdb0c792b17c83b8be2337800.png";
import rasaadImg from "figma:asset/4091778c150f65692b9e3163a4c554af6e88582c.png";
import kaylieImg from "figma:asset/6fd3b783c69f6fdb50f7feb924531e6f95f83253.png";
import shanellImg from "figma:asset/c73ccf90a626fd49ac10b4a45a57a652b34f4730.png";
import { TeamMember } from '../types';

export const TEAM_PAGE_CONTENT = {
  hero: {
    title: "Ontmoet ons span",
    subtitle: "Die mense agter die stories wat vir ons lesers saak maak.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
  },
  sections: {
    editorial: {
      title: "Redaksioneel",
      description: "Ons joernaliste is verbind tot onafhanklike, feitelike en gebalanseerde verslaggewing. Ons streef daarna om die stem van ons lesers te wees."
    },
    reporters: {
      title: "Verslaggewers",
      description: "Die span wat hard werk om elke dag vir jou die varsste nuus te bring."
    }
  },
  cta: {
    title: "Ondersteun plaaslike joernalistiek",
    description: "Word deel van ons leserskap en help ons om aan te hou om kwaliteit nuus te lewer. Teken in vir volle toegang.",
    buttonText: "Teken in",
    buttonLink: "/inteken"
  }
};

export const TEAM_MEMBERS: TeamMember[] = [
  // Redaksioneel (First 5)
  {
    id: 2,
    name: "Barnard Beyers",
    role: "Redakteur",
    bio: "Ervare joernalis, ook voorheen as uitgewer en redakteur.",
    email: CONTACT_EMAILS.letters,
    image: barnardImg,
    department: 'redaksioneel',
  },
  {
    id: 3,
    name: "Lucia Peens",
    role: "Nuusredakteur",
    bio: "Voorheen tydskrifredakteur en akademikus. Nou tweede in bevel.",
    email: CONTACT_EMAILS.news,
    image: luciaImg,
    department: 'redaksioneel',
  },
  {
    id: 4,
    name: "Vernon Lourens",
    role: "Inhoudsredakteur",
    bio: "Bekroon vir uitleg en opskrifte.",
    email: 'inhoud@rooirose.co.za',
    image: vernonImg,
    department: 'redaksioneel',
  },
  {
    id: 5,
    name: "Gerrie van den Berg",
    role: "Uitlegkunstenaar",
    bio: "Jare ervaring van drukuitleg en elektroniese grafika.",
    email: 'uitleg@rooirose.co.za',
    image: gerrieImg,
    department: 'redaksioneel',
  },
  {
    id: 6,
    name: "Ilse Wilson",
    role: "Hoofsub",
    bio: "Jare lange ervaring in tydskrifte, boeke, burgerlike aktivisme en radio.",
    email: 'sub@rooirose.co.za',
    image: ilseImg,
    department: 'redaksioneel',
  },
  // Verslaggewers (Next 6)
  {
    id: 7,
    name: "Jana Marx",
    role: "Politieke redakteur",
    bio: "Bekroon op vele terreine van ondersoekende joernalistiek.",
    email: 'politiek@rooirose.co.za',
    image: janaImg,
    department: 'verslaggewers',
  },
  {
    id: 8,
    name: "Stehan Rabie",
    role: "Sportredakteur",
    bio: "Veelsydige joernalis met groot kennis van en passie vir sport.",
    email: 'sport@rooirose.co.za',
    image: stehanImg,
    department: 'verslaggewers',
  },
  {
    id: 9,
    name: "Bohemia Jones",
    role: "Senior verslaggewer",
    bio: "Reeds merk as ondersoekende joernalis begin maak en sopas vereer deur die Afrikaans Taalraad.",
    email: 'bohemia@rooirose.co.za',
    image: bohemiaImg,
    department: 'verslaggewers',
  },
  {
    id: 10,
    name: "Rasaad Pandy",
    role: "Senior verslaggewer",
    bio: "Veelsydige joernalis wat reeds blootstelling aan nasionale, elektroniese en plaaslike media het.",
    email: 'rasaad@rooirose.co.za',
    image: rasaadImg,
    department: 'verslaggewers',
  },
  {
    id: 11,
    name: "Kaylie Goosen",
    role: "Verslaggewer",
    bio: "Behaal haar graad in kommunikasie (cum laude) terwyl sy by 'n kunsgalery werk.",
    email: 'kaylie@rooirose.co.za',
    image: kaylieImg,
    department: 'verslaggewers',
  },
  {
    id: 12,
    name: "Shanell Mouton",
    role: "Verslaggewer",
    bio: "Redakteur van die NWU-studentekoerant, Die Wapad, terwyl sy joernalistiek studeer het.",
    email: 'shanell@rooirose.co.za',
    image: shanellImg,
    department: 'verslaggewers',
  }
];