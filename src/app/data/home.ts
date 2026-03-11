/**
 * Homepage data — Die Papier
 *
 * @wordpress-pattern page-home (13 sections: hero, feature grid, 6 categories, events, competitions, poll, sponsors, newsletter)
 * @wordpress-queries query-posts-sticky, query-posts-latest, query-posts-category, query-events-upcoming, query-competitions-active
 * @see /guidelines/components/patterns/page/page-home.md — Detailed homepage spec
 */
export interface ArchiveMonth {
  year: number;
  month: string;
  coverImage: string;
  highlight: string;
}

export const HOME_SEO = {
  description: "Die Papier - Jou betroubare bron vir die jongste Afrikaanse nuus oor plaaslike en nasionale gebeure, sport, sake, lewenstyl, opinie en meer.",
  keywords: "nuus, afrikaans, suid-afrika, sport, sake, lewenstyl, opinie, netnuus, skole, e-uitgawes, die papier"
};

export const HOME_CONTENT = {
  hero: {
    sidebarTitle: "Brekende nuus",
    loadMoreButton: "Laai meer nuus"
  },
  featureGrid: {
    title: "Top stories",
    viewAll: "Sien alles"
  },
  sidebar: {
    eEdition: {
      title: "Nuutste e-uitgawe",
      subtitle: "R35 per uitgawe \u2014 alle inhoud van die drukkoerant",
      button: "Koop e-uitgawe",
      image: "https://images.unsplash.com/photo-1722096314740-53439a68d9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBjb3ZlciUyMG1vY2t1cHxlbnwxfHx8fDE3Njg5MjgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    poll: {
      title: "Leserspeiling",
      buttons: {
        vote: "Stem nou",
        voted: "Gestem"
      },
      messages: {
        error: "Kies asseblief 'n opsie",
        successTitle: "Dankie vir jou stem!",
        successDesc: "Jou antwoord is aangeteken."
      }
    },
    competitions: {
      viewAll: "Sien alle kompetisies",
      badge: "LESERSKOMPETISIE",
      closingPrefix: "Sluit",
      button: "Neem nou deel!"
    },
    delivery: {
      title: "Huisaflewering",
      description: "Huisaflewering van 'n gedrukte koerant is vanaf R140 per maand.",
      button: "Teken nou in"
    }
  },
  archive: {
    heading: "Argief toegang",
    subHeading: "Deursoek ons geskiedenis",
    description: "Kry toegang tot meer as 20 jaar se koerante, artikels en stories. Ons digitale argief bevat duisende artikels wat jy kan deursoek en lees.",
    buttons: {
      search: "Deursoek argief",
      eEditions: "E-uitgawes"
    },
    cardAction: "Klik om te bekyk"
  }
};

export const FEATURED_ARCHIVES: ArchiveMonth[] = [
  {
    year: 2025,
    month: 'Desember',
    coverImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    highlight: '30 uitgawes beskikbaar',
  },
  {
    year: 2025,
    month: 'November',
    coverImage: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    highlight: '28 uitgawes beskikbaar',
  },
  {
    year: 2025,
    month: 'Oktober',
    coverImage: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    highlight: '30 uitgawes beskikbaar',
  },
];