/**
 * Team data for Die Papier
 * Staff profiles and roles
 */

import barnardImg from "figma:asset/0c2924c05ac313745f82994014d1725229f424bd.png";
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
    id: "barnard-beukman",
    name: "Barnard Beukman",
    role: "Redakteur",
    bio: "Ervare joernalis, ook voorheen as uitgewer en redakteur.",
    email: "lesers@diepapier.co.za",
    image: barnardImg,
    department: 'redaksioneel',
    displayOrder: 1
  },
  {
    id: "lucia-poolman",
    name: "Lucia Poolman",
    role: "Nuusredakteur",
    bio: "Voorheen tydskrifredakteur en akademikus. Nou tweede in bevel.",
    email: "nuus@diepapier.co.za",
    image: luciaImg,
    department: 'redaksioneel',
    displayOrder: 2
  },
  {
    id: "vernon-janse-van-rensburg",
    name: "Vernon Janse van Rensburg",
    role: "Inhoudsredakteur",
    bio: "Bekroon vir uitleg en opskrifte.",
    email: "inhoud@diepapier.co.za",
    image: vernonImg,
    department: 'redaksioneel',
    displayOrder: 3
  },
  {
    id: "gerrie-lotriet",
    name: "Gerrie Lotriet",
    role: "Uitlegkunstenaar",
    bio: "Jare ervaring van drukuitleg en elektroniese grafika.",
    email: "uitleg@diepapier.co.za",
    image: gerrieImg,
    department: 'redaksioneel',
    displayOrder: 4
  },
  {
    id: "ilse-salzwedel",
    name: "Ilse Salzwedel",
    role: "Hoofsub",
    bio: "Jare lange ervaring in tydskrifte, boeke, burgerlike aktivisme en radio.",
    email: "sub@diepapier.co.za",
    image: ilseImg,
    department: 'redaksioneel',
    displayOrder: 5
  },
  // Verslaggewers (Next 6)
  {
    id: "jana-marx",
    name: "Jana Marx",
    role: "Politieke redakteur",
    bio: "Bekroon op vele terreine van ondersoekende joernalistiek.",
    email: "politiek@diepapier.co.za",
    image: janaImg,
    department: 'verslaggewers',
    displayOrder: 6
  },
  {
    id: "stehan-schoeman",
    name: "Stehan Schoeman",
    role: "Sportredakteur",
    bio: "Veelsydige joernalis met groot kennis van en passie vir sport.",
    email: "sport@diepapier.co.za",
    image: stehanImg,
    department: 'verslaggewers',
    displayOrder: 7
  },
  {
    id: "bohemia-jumatt",
    name: "Bohemia Jumatt",
    role: "Senior verslaggewer",
    bio: "Reeds merk as ondersoekende joernalis begin maak en sopas vereer deur die Afrikaans Taalraad.",
    email: "bohemia@diepapier.co.za",
    image: bohemiaImg,
    department: 'verslaggewers',
    displayOrder: 8
  },
  {
    id: "rasaad-adams",
    name: "Rasaad Adams",
    role: "Senior verslaggewer",
    bio: "Veelsydige joernalis wat reeds blootstelling aan nasionale, elektroniese en plaaslike media het.",
    email: "rasaad@diepapier.co.za",
    image: rasaadImg,
    department: 'verslaggewers',
    displayOrder: 9
  },
  {
    id: "kaylie-joubert",
    name: "Kaylie Joubert",
    role: "Verslaggewer",
    bio: "Behaal haar graad in kommunikasie (cum laude) terwyl sy by ’n kunsgalery werk.",
    email: "kaylie@diepapier.co.za",
    image: kaylieImg,
    department: 'verslaggewers',
    displayOrder: 10
  },
  {
    id: "shanell-binedell",
    name: "Shanell Binedell",
    role: "Verslaggewer",
    bio: "Redakteur van die NWU-studentekoerant, Die Wapad, terwyl sy joernalistiek studeer het.",
    email: "shanell@diepapier.co.za",
    image: shanellImg,
    department: 'verslaggewers',
    displayOrder: 11
  }
];
