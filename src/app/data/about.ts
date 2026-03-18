import {
  Users,
  Target,
  Shield,
  Award,
  Lightbulb
} from 'lucide-react';
import { Newspaper } from '../components/icons/NewspaperIcon';
import { HERO_IMAGES } from './heroImages';
import { CONTACT_EMAILS } from './contactInfo';

export const ABOUT_HERO = {
  label: "Sedert 2026",
  title: "Gehalte-joernalistiek in Afrikaans",
  subtitle: "rooi rose is jou nuwe Afrikaanse leefstyl-tydskrif wat inspirerende verhale, stylvolle wenke en deurdagte diskoers oor die aspirasies en leefwêreld van moderne Afrikaanse vroue bied.",
  image: HERO_IMAGES.about
};

export const QUICK_LINKS = [
  {
    title: 'Ons span',
    description: 'Ontmoet die redaksionele span van rooi rose.',
    href: '/oor-ons/redaksie',
    icon: Users,
    color: 'bg-blue-50 text-blue-700',
  },
  {
    title: 'Adverteer',
    description: 'Bereik ons invloedryke Afrikaanse leserskap met jou boodskap.',
    href: '/adverteer',
    icon: Target,
    color: 'bg-red-50 text-[#D70025]',
  },
  {
    title: 'Teken in',
    description: 'Kry rooi rose digitaal, of by jou voordeur afgelewer.',
    href: '/inteken',
    icon: Newspaper,
    color: 'bg-green-50 text-green-700',
  },
  {
    title: 'E-uitgawes',
    description: 'Blaai deur ons argief van digitale uitgawes.',
    href: '/e-uitgawes',
    icon: Shield,
    color: 'bg-amber-50 text-amber-700',
  },
  {
    title: 'Kontak ons',
    description: 'Stuur navrae, nuuswenke of terugvoering. Ons hoor graag van jou!',
    href: '/kontak',
    icon: Award,
    color: 'bg-teal-50 text-teal-700',
  },
];

export const ABOUT_INTRO = {
  title: "Meer oor ons",
  paragraphs: [
    "rooi rose is 'n weeklikse nasionale koerant op die voorpunt van die week se nuus en die naweek se gebeure. Dit verskyn Vrydae.",
    "Ons nooi oud en jonk op 'n opwindende reis wat nuus, vermaak, leefstyl, sport, skole en nuusontledings van gehalte insluit.",
    "rooi rose bevorder diskoers oor verskillende standpunte vir 'n ingeligte leserskap. Ons voel sterk oor 'n vrye media in 'n regverdige samelewing, met 'n sterk fokus op lesers se frustrasies en aspirasies \u2013 en is meermale ietwat omstrede."
  ]
};

export const NOVUS_MEDIA = {
  title: "Novus Media",
  paragraphs: [
    "rooi rose is 'n publikasie van Novus Media, 'n afdeling van Novus Holdings. Ons is daartoe verbind om betroubare, relevante nuus aan lesers oor Suid-Afrika heen in 'n gedrukte formaat en aanlyn te lewer.",
    "Novus Media publiseer 21 gratis plaaslike nuustitels oor die Kaapse Skiereiland, Boland, Oos-Kaap, Vrystaat en Noord-Kaap heen. Novus Media bereik elke week sowat 4 miljoen lesers aanlyn en in druk.",
    "novanews.co.za is ons webwerf vir internasionale, nasionale en plaaslike nuus, in Afrikaans en Engels. Dit bied gratis toegang tot nuus vir ons diverse leserskap.",
    "Deur rooi rose bied ons 'n nasionale platform vir Afrikaanse nuus wat saak maak.",
    "Ons missie is om 'n volhoubare nuusmedia-onderneming te bedryf wat die behoeftes en belange van lesers en adverteerders bevorder. Terwyl ons gedrukte plaaslike koerant steeds relevante nuus van gehalte lewer, benut ons innoverende digitale platforms om optimale nuusinhoud te verseker vir 'n diverse leserskap.",
    "Die gewilde publikasies rooi rose, Soccer Laduma en Kick Off is ook publikasies van Novus Media."
  ]
};

export const NOVUS_HOLDINGS = {
  title: "Novus Holdings",
  paragraphs: [
    "Novus Holdings word al meer as 'n eeu lank bedryf en is op die Johannesburgse aandelebeurs genoteer. Novus Holdings is een van Suider-Afrika se grootste maatskappye op die gebied van drukwerk, uitgewery en verpakkingsvervaardiging. Onder leiding van André van der Veen, uitvoerende hoof, bied Novus uitgebreide oplossings vir kort, medium- en lang termyn drukbehoeftes, insluitend tydskrifte, kleinhandel-invoegsels, katalogusse, boeke, koerante, opvoedkundige materiaal en sekuriteitsprodukte.",
    "Die maatskappy spesialiseer ook in volhoubare papierverpakking, sowel as sekuriteitsprodukte en etikette.",
    "rooi rose is trots om deel te wees van hierdie nalatenskap van uitnemendheid in die Afrikaanse mediabedryf."
  ]
};

export const MISSION = {
  title: "Ons missie",
  description: "Ons missie is om betroubare nuus in druk en aanlyn te lewer wat ons lesers inlig, betrek en bemagtig. Ons is verbind tot die waardes van aanspreeklikheid, die ondersteuning van ons personeel, asook blywende verhoudinge met ons lesers en kli\u00ebnte. Ons glo dat elke plaaslike streek gevier en erken moet word.",
  goals: [
    "Om onpartydige nuus en inligting te verskaf om mense te help om die w\u00eareld rondom hulle te verstaan.",
    "Om die uiteenlopende groepe van Suid-Afrika te weerspie\u00ebl, te verteenwoordig en te dien, en sodoende plaaslike inwoners in alle lewensfere te bemagtig."
  ]
};

export const VALUES = [
  { icon: Shield, title: 'Dapperheid', text: 'Ons is dapper in ons joernalistiek en staan bankvas vir die waarheid.' },
  { icon: Lightbulb, title: 'Innovasie', text: 'Ons beskou nuwe tegnologie en kreatiewe oplossings as die sleutel tot volhoubaarheid.' },
  { icon: Award, title: 'Uitnemendheid', text: 'Ons streef na die hoogste standaarde in alles wat ons doen.' },
];

export const ETHICS = {
  title: 'Perskode en etiek',
  paragraphs: [
    "Novus Media vertoon trots die \"Fair\"-stempel van die Persraad van Suid-Afrika, wat ons verbintenis aandui om te voldoen aan die Kode van Etiek vir Druk- en Aanlyn Media. Ons verseker dat ons verslaggewing waarheidsgetrou, akkuraat en regverdig is.",
    `Indien jy 'n klagte oor ons nuusdekking wil indien, besoek asseblief die Persraad-webwerf, of stuur 'n e-pos aan ons ombudsman, George Claassen, by ${CONTACT_EMAILS.ombudsman}. Jy kan ook die Persraad kontak by 011 484 3612.`
  ]
};

export const MANAGEMENT_TEAM = [
  { name: 'Esm\u00e9 Smit', role: 'Hoofbestuurder van Novus Media' },
  { name: 'Neil Tapinos', role: 'Nasionale verkoopsdirekteur van Novus Media' },
  { name: 'Andries Venter', role: 'Bestuursrekeningkundige van Novus Media' },
  { name: 'Samantha Kroukamp', role: 'Bestuursrekeningkundige van Novus Media' },
  { name: 'Wynette King', role: 'Produksiebestuurder van Novus Media' },
];

export const REGIONAL_MANAGERS = [
  { name: 'Jeannine van Zyl', role: 'Hoofbestuurder: Vrystaat & Noord-Kaap', division: 'Novus Gemeenskapsnuus' },
  { name: 'Bettie Giliomee-Rossouw', role: 'Hoofbestuurder: Oos-Kaap', division: 'Novus Gemeenskapsnuus' },
  { name: 'Alet Ellis', role: 'Hoofbestuurder: Wes-Kaap & Boland', division: 'Novus Gemeenskapsnuus' },
];