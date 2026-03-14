/**
 * Category-specific article data for *rooi rose*
 * Each category has its own set of articles with relevant content
 * Updated: 2026-01-18
 */

import { TOP_STORIES } from './articles';

export interface CategoryArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
  // SEO metadata (optional - auto-generated from title/excerpt if not provided)
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  // Sponsored Content
  sponsored?: boolean;
  sponsorName?: string;
  sponsorLink?: string;
  sponsorLogo?: string;
  sponsorSlug?: string;
}

export function getArticlesByCategory(category: string) {
  return CATEGORY_ARTICLES[category] || [];
}

export function getFeaturedArticles(category: string): CategoryArticle[] {
  const articles = CATEGORY_ARTICLES[category] || [];
  return articles.filter(a => a.featured === true);
}

export function getArticlesByTag(tag: string) {
  // Combine category articles and TOP_STORIES for tag search
  const categoryArticles = Object.values(CATEGORY_ARTICLES).flat();
  
  // Normalize TOP_STORIES to match CategoryArticle interface if needed
  // (They are mostly compatible, TOP_STORIES has 'imageUrl' vs 'image' in some contexts, but here both use imageUrl)
  // We cast as any to avoid strict type issues if minor props differ, or just merge.
  const allArticles = [...categoryArticles, ...TOP_STORIES] as CategoryArticle[];
  
  // Remove duplicates by ID
  const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.id, item])).values());

  // Filter case insensitive
  return uniqueArticles.filter(article => 
    article.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export function getArticlesBySponsor(sponsorSlug: string) {
  const categoryArticles = Object.values(CATEGORY_ARTICLES).flat();
  const allArticles = [...categoryArticles, ...TOP_STORIES] as CategoryArticle[];
  const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.id, item])).values());

  return uniqueArticles.filter(article => 
    article.sponsored && article.sponsorSlug === sponsorSlug
  );
}

/**
 * Returns all sponsored articles across all categories, deduplicated.
 * Use for homepage injection and sponsored content feeds.
 */
export function getAllSponsoredArticles(): CategoryArticle[] {
  const categoryArticles = Object.values(CATEGORY_ARTICLES).flat();
  const allArticles = [...categoryArticles, ...TOP_STORIES] as CategoryArticle[];
  const uniqueArticles = Array.from(new Map(allArticles.map(item => [item.id, item])).values());
  return uniqueArticles.filter(article => article.sponsored === true);
}

/**
 * Returns a single sponsored article for homepage inline placement.
 * Rotates based on current day of the week to vary content.
 */
export function getHomepageSponsoredArticle(): CategoryArticle | null {
  const sponsored = getAllSponsoredArticles();
  if (sponsored.length === 0) return null;
  const dayIndex = new Date().getDay();
  return sponsored[dayIndex % sponsored.length];
}

export const CATEGORY_ARTICLES: Record<string, CategoryArticle[]> = {
  Nuus: [
    {
      id: 9010,
      title: "Slim inkopies: Makro se top 10 feestydbesparings",
      excerpt: "Met die feesseisoen op ons stoep, deel Makro hul beste wenke oor hoe om groot te bespaar sonder om kwaliteit in te boet.",
      category: "Nuus",
      tags: ["Verbruiker", "Inkopies"],
      date: "20 Des 2025",
      author: "Geborg",
      imageUrl: "https://images.unsplash.com/photo-1761207850834-69151e9bc810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBzYXZpbmdzJTIwc3VwZXJtYXJrZXR8ZW58MXx8fHwxNzcxMzM3MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "3 min",
      sponsored: true,
      sponsorName: "Makro",
      sponsorSlug: "makro",
      sponsorLogo: "https://ui-avatars.com/api/?name=MK&background=003DA5&color=fff&size=128&bold=true",
      sponsorLink: "https://www.makro.co.za"
    },
    {
      id: 101,
      title: "Munisipaliteit stel nuwe begroting bekend vir komende boekjaar",
      excerpt: "Die plaaslike munisipaliteit het vandag hul planne vir die nuwe finansiële jaar aangekondig, met fokus op infrastruktuur en dienstelewering.",
      category: "Nuus",
      tags: ["Plaaslik", "Politiek"],
      date: "19 Des 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1640580171716-4474b9114ef4?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min",
      featured: true
    },
    {
      id: 102,
      title: "Waterbeperkings ingestel weens lae damvlakke",
      excerpt: "Inwoners word gewaarsku dat vlak 3 waterbeperkings vanaf 1 Januarie van krag sal wees. Die munisipaliteit vra almal om water verantwoordelik te gebruik.",
      category: "Nuus",
      tags: ["Omgewing", "Plaaslik"],
      date: "18 Des 2025",
      author: "Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min",
      featured: true
    },
    {
      id: 103,
      title: "Feesseisoen padveiligheid veldtog geloods",
      excerpt: "Die departement van vervoer het vandag hul jaarlikse 'Arrive Alive' veldtog afgeskop met strenger maatreëls en meer padblokkades.",
      category: "Nuus",
      tags: ["Aktueel", "Veiligheid"],
      date: "18 Des 2025",
      featured: true,
      author: "Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 104,
      title: "Nuwe winkelsentrum open sy deure in sentrale sakedistrik",
      excerpt: "Die langverwagte ontwikkeling is voltooi en beloof om honderde nuwe werksgeleenthede te skep vir die plaaslike inwoners.",
      category: "Nuus",
      tags: ["Sake", "Ekonomie"],
      date: "17 Des 2025",
      author: "Sandra Visser",
      imageUrl: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce9?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 105,
      title: "Plaaslike mark lok rekordgetal besoekers",
      excerpt: "Duisende mense het die naweek opgedaag vir die jaarlikse mark met plaaslike produkte, kuns en vermaak vir die hele gesin.",
      category: "Nuus",
      date: "16 Des 2025",
      author: "Marius Fourie",
      imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 106,
      title: "Polisie waarsku teen feesseisoen bedriegery",
      excerpt: "SAPS het 'n waarskuwing uitgereik oor nuwe bedrogskemas wat tydens die vakansie toeslaan. Wees op jou hoede vir verdagte oproep.",
      category: "Nuus",
      date: "15 Des 2025",
      author: "Elise Kruger",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 107,
      title: "Herstelwerk op hoofpad begin volgende week",
      excerpt: "Motoriste word gewaarsku oor padwerke op die N1 wat maandegelank sal duur. Alternatiewe roetes word aanbeveel tydens spitstye.",
      category: "Nuus",
      date: "14 Des 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 108,
      title: "Hospitaal ontvang nuwe mediese toerusting",
      excerpt: "Die plaaslike hospitaal het 'n skenking ontvang van R5 miljoen aan geavanseerde mediese toerusting wat behandeling sal verbeter.",
      category: "Nuus",
      date: "13 Des 2025",
      author: "Dr. Hannes Meyer",
      imageUrl: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 109,
      title: "Plaaslike helde red gesin uit brandende huis",
      excerpt: "Twee buurtbewoners het 'n gesin van vyf gered toe hulle huis vroegoggend aan die brand gesteek het. Almal is veilig.",
      category: "Nuus",
      date: "12 Des 2025",
      author: "Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1596510915830-72e871d3f5d5?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 110,
      title: "Droogte affekteer plaaslike boere ernstig",
      excerpt: "Boere in die omgewing rapporteer groot verliese weens die aanhoudende droogte. Hulp word benodig om hul oeste te red.",
      category: "Nuus",
      date: "11 Des 2025",
      author: "Piet van der Walt",
      imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 111,
      title: "Nuwe openbare vervoerstelsel aangekondig",
      excerpt: "Die munisipaliteit het planne bekendgemaak vir 'n moderne busdiens wat vanaf Maart sal begin. Dit sal toeganklikheid verbeter.",
      category: "Nuus",
      date: "10 Des 2025",
      author: "Sandra Visser",
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 112,
      title: "Historiese gebou word gerestoureer",
      excerpt: "Die ikoniese stadsaal ondergaan 'n R20 miljoen opknapprojek om dit terug te bring na sy voormalige glorie.",
      category: "Nuus",
      date: "9 Des 2025",
      author: "Marius Fourie",
      imageUrl: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 113,
      title: "Inwoners vier 100 jaar van bestaan",
      excerpt: "Die dorp het vanjaar sy eeufees met 'n groot fees en parade. Duisende het saamgekom om die mylpaal te vier.",
      category: "Nuus",
      date: "8 Des 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 114,
      title: "Lughawe brei uit met nuwe terminale",
      excerpt: "Die plaaslike lughawe het goedkeuring ontvang vir 'n uitbreiding wat dubbeld soveel passasiers sal kan hanteer.",
      category: "Nuus",
      date: "7 Des 2025",
      author: "Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 115,
      title: "Plaaslike kuns-en-kultuur fees trek groot skare",
      excerpt: "Die jaarlikse fees het meer as 10,000 besoekers gelok met vertonings van plaaslike en internasionale kunstenaars.",
      category: "Nuus",
      date: "6 Des 2025",
      author: "Elise Kruger",
      imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 116,
      title: "Kragonderbrekings verwag volgende week",
      excerpt: "Eskom het aangekondig dat beurtkrag vlak 2 vanaf Maandag geïmplementeer sal word weens onderhoud by kragsentrales.",
      category: "Nuus",
      date: "5 Des 2025",
      author: "Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1509390144746-12d2fdcf5237?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 117,
      title: "Nuwe biblioteek geopend in plattelandse dorp",
      excerpt: "Kinders en volwassenes het die opening van die moderne biblioteek gevier wat duisende boeke en digitale hulpbronne bevat.",
      category: "Nuus",
      date: "4 Des 2025",
      author: "Sandra Visser",
      imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 118,
      title: "Plaaslike skilder wen nasionale kompetisie",
      excerpt: "Die jong kunstenaar se werk is gekies uit duisende inskrywings en sal in 'n nasionale galery uitgestal word.",
      category: "Nuus",
      date: "3 Des 2025",
      author: "Marius Fourie",
      imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 119,
      title: "Stormskade affekteer honderde huishoudings",
      excerpt: "Swaar reën en wind het stormskade veroorsaak in verskeie voorstede. Nooddienste werk deur die nag om te help.",
      category: "Nuus",
      date: "2 Des 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 120,
      title: "Inwoners protesteer teen verhoogde munisipale tariewe",
      excerpt: "Honderde inwoners het buite die raadsaal vergader om hul ontevredenheid te lug oor die voorgestelde 15% verhoging.",
      category: "Nuus",
      date: "1 Des 2025",
      author: "Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 121,
      title: "Plaaslike wildreservaat red bedreigde spesies",
      excerpt: "Die reservaat se teelprogram het suksesvol vyf wildebees-kalfies verwelkom, wat hoop gee vir die spesie se voortbestaan.",
      category: "Nuus",
      date: "30 Nov 2025",
      author: "Elise Kruger",
      imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 122,
      title: "Nuwe vuurweervoertuie versterk nooddienste",
      excerpt: "Die brandweer het drie nuwe moderne voertuie ontvang wat gebiede vinniger sal kan bereik en meer lewens sal red.",
      category: "Nuus",
      date: "29 Nov 2025",
      author: "Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1523431255346-9d4b4fd94998?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 123,
      title: "Entrepreneurskap-sentrum help jong besighede",
      excerpt: "Die nuwe sentrum bied gratis opleiding en ondersteuning aan opkomende entrepreneurs wat hul drome wil najaag.",
      category: "Nuus",
      date: "28 Nov 2025",
      author: "Sandra Visser",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 124,
      title: "Plaaslike musikant onderteken platemaatskappy-kontrak",
      excerpt: "Die talentvolle sanger se loopbaan kry 'n hupstoot nadat sy 'n kontrak met 'n groot platemaatskappy geteken het.",
      category: "Nuus",
      date: "27 Nov 2025",
      author: "Marius Fourie",
      imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 125,
      title: "Nuwe sport-kompleks sal duisende bedien",
      excerpt: "Die multimiljoenprojek sluit in 'n olimpiese swembad, gimnasium en atletiekbaan wat binnekort voltooi sal word.",
      category: "Nuus",
      date: "26 Nov 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 126,
      title: "Inwoners vier Geletterdheidsdag met spesiale geleenthede",
      excerpt: "Skole en biblioteke het saamgekom om lees te bevorder met kompetisies, werkswinkels en gratis boeke vir kinders.",
      category: "Nuus",
      date: "25 Nov 2025",
      author: "Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 127,
      title: "Herwinningsprojek verminder stortingsterrein-afval met 40%",
      excerpt: "Die munisipaliteit se nuwe herwinningsprogram toon reeds resultate met aansienlike afname in nie-herwinde afval.",
      category: "Nuus",
      date: "24 Nov 2025",
      author: "Elise Kruger",
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 128,
      title: "Plaaslike wetenskaplikes ontdek nuwe plantesoort",
      excerpt: "Navorsers van die plaaslike universiteit het 'n unieke plantesoort ontdek wat net in hierdie streek voorkom.",
      category: "Nuus",
      date: "23 Nov 2025",
      author: "Dr. Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 129,
      title: "Veteraansdag herdenking trek groot gehore",
      excerpt: "Honderde het saamgekom om hulde te bring aan ons veterane met 'n plegtige seremonie en parade.",
      category: "Nuus",
      date: "22 Nov 2025",
      author: "Marius Fourie",
      imageUrl: "https://images.unsplash.com/photo-1563212034-de645255a00c?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 130,
      title: "Nuwe entrepreneur-mark ondersteun plaaslike vervaardigers",
      excerpt: "Die weeklikse mark bied 'n platform vir klein vervaardigers om hul produkte direk aan verbruikers te verkoop.",
      category: "Nuus",
      date: "21 Nov 2025",
      author: "Sandra Visser",
      imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    }
  ],

  Skole: [
    {
      id: 201,
      title: "Hoërskool behaal uitstekende matriekuitslae",
      excerpt: "Die skool het 'n 98% slaag syfer bereik met meer as 20 leerlinge wat gemiddelde bo 80% behaal het. Die skoolhoof is baie trots.",
      category: "Skole",
      date: "19 Des 2025",
      author: "Marie du Toit",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1710615159028-e5e1b4890358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwc3R1ZGVudHMlMjBzY2hvb2x8ZW58MXx8fHwxNzY2MTY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 202,
      title: "Primêre skool wen nasionale koor kompetisie",
      excerpt: "Die skoolkoor het die eerste plek behaal in die ATKV-Applous finaal in Pretoria. Hulle sal Suid-Afrika verteenwoordig by die internasionale kompetisie.",
      category: "Skole",
      date: "18 Des 2025",
      author: "Hannes Viljoen",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1763627516727-2ca3e324fa59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaG9pciUyMHNpbmdpbmd8ZW58MXx8fHwxNzY2MTY4OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 203,
      title: "Skole sluit vir vakansie met kleuryke funksies",
      excerpt: "Laaste skooldag aktiwiteite het dwarsoor die dorp plaasgevind met talle skole wat hul jaar afgesluit het met prysuitdeling en konserte.",
      category: "Skole",
      date: "17 Des 2025",
      author: "Lizette Steyn",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1573894997713-de07a124df43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjYxNjQyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "3 min"
    },
    {
      id: 204,
      title: "Nuwe skoolgebou ingewy by plaaslike laerskool",
      excerpt: "Die moderne fasiliteit sal plek maak vir 200 addisionele leerlinge en sluit in nuwe laboratoriums en 'n multimediasenter.",
      category: "Skole",
      date: "16 Des 2025",
      author: "Johan de Wet",
      imageUrl: "https://images.unsplash.com/photo-1647667436195-6954ef8b27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjA3Njk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 205,
      title: "Biblioteek hou vakansie program vir kinders",
      excerpt: "Ouers word genooi om hul kinders in te skryf vir die gratis lees- en kuns-werkswinkels hierdie vakansie. Program sluit storievertelling en ambagwerkswinkels in.",
      category: "Skole",
      date: "15 Des 2025",
      author: "Susan Marais",
      imageUrl: "https://images.unsplash.com/photo-1637195141628-f0f75585a07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwYm9va3MlMjBjaGlsZHJlbiUyMHJlYWRpbmd8ZW58MXx8fHwxNzY2MTY4OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "3 min"
    },
    {
      id: 206,
      title: "Leerders blink uit in wiskundeolimpiade",
      excerpt: "Drie leerders van 'n plaaslike hoërskool het medaljes verower in die nasionale wiskundeolimpiade. Die skool vier hul uitstaande prestasie.",
      category: "Skole",
      date: "14 Des 2025",
      author: "Hennie Pretorius",
      imageUrl: "https://images.unsplash.com/photo-1742549586702-c23994895082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGNvbXBldGl0aW9uJTIwc3R1ZGVudHM8ZW58MXx8fHwxNzY2MTY4OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 207,
      title: "Skool se toneelgroep verower gehore met produksie",
      excerpt: "Die leerders se opvoering van 'n klassieke drama het vol sale gelok en staande ovasies ontvang. Die regie en spel was uitstekend.",
      category: "Skole",
      date: "13 Des 2025",
      author: "Louise Bekker",
      imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 208,
      title: "Interhoër atletiek ontlok sterk kompetisie",
      excerpt: "Verskeie rekords is verbreek tydens die jaarlikse interhoër atletiekbyeenkoms. Die deelnemers het almal baie goed presteer.",
      category: "Skole",
      date: "12 Des 2025",
      author: "Jan Coetzee",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 209,
      title: "Skoolraad kyk na uitbreiding van klaskamers",
      excerpt: "Weens die groeiende aantal inskrywings is die skoolraad besig om planne te maak vir addisionele fasiliteite.",
      category: "Skole",
      date: "11 Des 2025",
      author: "Pieter Scholtz",
      imageUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 210,
      title: "Wetenskapfees wek belangstelling by leerders",
      excerpt: "Jong wetenskaplikes het hul projekte uitgestal by die jaarlikse wetenskapfees. Die standaarde was uitstekend.",
      category: "Skole",
      date: "10 Des 2025",
      author: "Dr. Marie Rossouw",
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 211,
      title: "Skoolkos projek voed honderde leerders",
      excerpt: "Die voedingsprogram het vanjaar meer as 500 leerders per dag voorsien van vars, voedsame maaltye.",
      category: "Skole",
      date: "9 Des 2025",
      author: "Annelie Meyer",
      imageUrl: "https://images.unsplash.com/photo-1609619385004-f8d4f9c318c8?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 212,
      title: "Skoolbiblioteek ontvang nuwe digitale boeke",
      excerpt: "Danksy 'n skenking het die biblioteek nou toegang tot duisende e-boeke en aanlyn hulpbronne vir navorsing.",
      category: "Skole",
      date: "8 Des 2025",
      author: "Susan Marais",
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 213,
      title: "Laerskool se robotika-span wen provinsiale kompetisie",
      excerpt: "Die jong ingenieurs het hul selfgeboude robot gebruik om die kompetisie te wen. Hulle gaan nou voort na nasionaal.",
      category: "Skole",
      date: "7 Des 2025",
      author: "Johan de Wet",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 214,
      title: "Hoërskool vier 75 jaar van uitnemendheid",
      excerpt: "Die skool het vanjaar sy 75ste bestaansjaar gevier met 'n groot fees en reünie vir oud-leerlinge.",
      category: "Skole",
      date: "6 Des 2025",
      author: "Marie du Toit",
      imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 215,
      title: "Nuwe sportfasiliteite geopend by primêre skool",
      excerpt: "Die skool se nuwe tennisbane en krieketnet sal leerders help om hul sportvaardighede te ontwikkel.",
      category: "Skole",
      date: "5 Des 2025",
      author: "Francois van Zyl",
      imageUrl: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    }
  ],

  Sport: [
    {
      id: 9011,
      title: "Vodacom se 5G-netwerk bring sportaanhangers nader aan die aksie",
      excerpt: "Met Vodacom se nuwe 5G-stadionervaring kan aanhangers nou lewendige statistieke en herhalings in real-time op hul fone volg.",
      category: "Sport",
      tags: ["Tegnologie", "Sport"],
      date: "19 Des 2025",
      author: "Geborg",
      imageUrl: "https://images.unsplash.com/photo-1703113690885-8caf0c77a7cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHw1RyUyMG5ldHdvcmslMjB0ZWNobm9sb2d5JTIwbW9iaWxlJTIwY29ubmVjdGl2aXR5fGVufDF8fHx8MTc3MTMzNzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min",
      sponsored: true,
      sponsorName: "Vodacom",
      sponsorSlug: "vodacom",
      sponsorLogo: "https://ui-avatars.com/api/?name=VC&background=E60000&color=fff&size=128&bold=true",
      sponsorLink: "https://www.vodacom.co.za"
    },
    {
      id: 301,
      title: "Plaaslike rugbyspan wen derby in naelbyter",
      excerpt: "In 'n spanningvolle wedstryd het die span met 24-21 geseëvier voor 'n skare van duisende ondersteuners. Dit was 'n onvergeetlike aand.",
      category: "Sport",
      date: "19 Des 2025",
      author: "Pieter van der Merwe",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1613330524291-3330afe5920e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydWdieSUyMG1hdGNoJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzY2MTQzOTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 302,
      title: "Krieket seisoen begin met groot vertoning",
      excerpt: "Die plaaslike kieketklub het die seisoen met 'n oorwinning begin. Die topspelers het almal goed presteer en die span lyk sterk.",
      category: "Sport",
      date: "18 Des 2025",
      author: "Andre Bosman",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1730739628091-133de587ad14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzcG9ydHN8ZW58MXx8fHwxNzY2MTY4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 303,
      title: "Atletiekster breek rekord by nasionale kampioenskappe",
      excerpt: "Die jong atleet het die rekord in die 100m vir haar ouderdomsgroep gebreek. Sy is nou die vinnigste in die land.",
      category: "Sport",
      date: "17 Des 2025",
      author: "Francois Joubert",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1761684887056-f76bdb852d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjayUyMGZpZWxkJTIwYXRobGV0ZSUyMHJ1bm5pbmd8ZW58MXx8fHwxNzY2MTY4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 304,
      title: "Netbal toernooi lok spanne van dwarsoor die provinsie",
      excerpt: "Die jaarlikse toernooi was weer 'n groot sukses met spanne wat kompeteer het vir die bekers en medaljes.",
      category: "Sport",
      date: "16 Des 2025",
      author: "Lizelle Pieterse",
      imageUrl: "https://images.unsplash.com/photo-1694233015263-b905b9d75b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRiYWxsJTIwZ2FtZSUyMHNwb3J0c3xlbnwxfHx8fDE3NjYxNjg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "3 min"
    },
    {
      id: 305,
      title: "Swemmers kwalifiseer vir provinsiale kampioenskappe",
      excerpt: "Vyf lede van die plaaslike swemklub het gekwalifiseer vir die provinsiale kampioenskappe wat volgende maand plaasvind.",
      category: "Sport",
      date: "15 Des 2025",
      author: "Kobus Marais",
      imageUrl: "https://images.unsplash.com/photo-1572594505398-97a384b34ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMHBvb2wlMjBhdGhsZXRlfGVufDF8fHx8MTc2NjExMzY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "3 min"
    },
    {
      id: 306,
      title: "Sokker liga kom tot 'n einde met spanningsvolle finale",
      excerpt: "Die seisoen het afgesluit met 'n dramatiese finale wat in strafskops beslis is. Die kampioene vier hul oorwinning.",
      category: "Sport",
      date: "14 Des 2025",
      author: "Danie Muller",
      imageUrl: "https://images.unsplash.com/photo-1568495019994-e9f1045bf0ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMG1hdGNofGVufDF8fHx8MTc2NjEwMTc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 307,
      title: "Fietsryers voltooi honderd kilometer uitdaging",
      excerpt: "Die jaarlikse fietstoer het meer as 200 deelnemers gelok wat die uitdagende roete suksesvol voltooi het.",
      category: "Sport",
      date: "13 Des 2025",
      author: "Werner Louw",
      imageUrl: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 308,
      title: "Boksster bereik nasionale finaal",
      excerpt: "Die jong bokser uit die plaaslike klub het na die nasionale finaal deurgedring na 'n indrukwekkende reeks oorwinnings.",
      category: "Sport",
      date: "12 Des 2025",
      author: "Kobus van Wyk",
      imageUrl: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 309,
      title: "Gholf toernooi trek top spelers",
      excerpt: "Die klubkampioenskappe het vanjaar rekord inskrywings gelok met spelers van verskillende handicaps.",
      category: "Sport",
      date: "11 Des 2025",
      author: "Johan Bothma",
      imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 310,
      title: "Tenniskampioene bring trots vir plaaslike klub",
      excerpt: "Die dubbelspan het die provinsiale tenniskampioenskappe gewen en sal nou aan nasionale kompetisies deelneem.",
      category: "Sport",
      date: "10 Des 2025",
      author: "Lisa Vermeulen",
      imageUrl: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 311,
      title: "Hardloop klub vier tien jaar van sukses",
      excerpt: "Die klub het vanjaar sy tiende verjaardag gevier met 'n spesiale marathon wat deur honderde atlete bygew oon is.",
      category: "Sport",
      date: "9 Des 2025",
      author: "Andre Bosman",
      imageUrl: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 312,
      title: "Jukskei toernooi lok ervare spelers",
      excerpt: "Die tradisionele sport bly gewild met vanjaar se toernooi wat spanne van dwarsoor die provinsie gelok het.",
      category: "Sport",
      date: "8 Des 2025",
      author: "Piet Grobler",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 313,
      title: "Plaaslike triatleet kwalifiseer vir Ironman",
      excerpt: "Na maande se harde oefening het die atleet die kwalifiserende tyd behaal vir die Ironman in Port Elizabeth.",
      category: "Sport",
      date: "7 Des 2025",
      author: "Francois Joubert",
      imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 314,
      title: "Hokkie seisoen begin met groot verwagtinge",
      excerpt: "Die plaaslike hokkie klub het vanjaar 'n sterk span saamgestel en mik op die liga titel.",
      category: "Sport",
      date: "6 Des 2025",
      author: "Michelle Pretorius",
      imageUrl: "https://images.unsplash.com/photo-1593261166082-e50b6a6c9b3c?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 315,
      title: "Veterane span wen legendes toernooi",
      excerpt: "Die oud-spelers het bewys hulle het steeds die vaardighede met 'n oortuigende oorwinning in die legendes rugby toernooi.",
      category: "Sport",
      date: "5 Des 2025",
      author: "Pieter van der Merwe",
      imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    }
  ],

  Sake: [
    {
      id: 900,
      title: "Vyf slim maniere om jou beleggings te laat groei in 2026",
      excerpt: "In 'n vinnig veranderende ekonomiese landskap is dit belangriker as ooit om slim besluite met jou geld te neem.",
      category: "Sake",
      date: "18 Des 2025",
      author: "Geborg",
      imageUrl: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwZ3Jvd3RofGVufDF8fHx8MTc2NjA1NzkwOHww&ixlib=rb-4.1.0&q=80&w=1080",
      readTime: "3 min",
      sponsored: true,
      sponsorName: "Nedbank",
      sponsorSlug: "nedbank",
      sponsorLogo: "https://ui-avatars.com/api/?name=NB&background=004F32&color=fff&size=128&bold=true",
      sponsorLink: "https://www.nedbank.co.za"
    },
    {
      id: 6,
      title: "Wynbedryf verwag uitstekende oesjaar ondanks uitdagings",
      excerpt: "Gunster weersomstandighede in die laat somer het bygedra tot druiwe van hoë gehalte vir die 2026-oes.",
      category: "Sake",
      date: "16 Des 2025",
      author: "Kobus van Zyl",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1706700700231-91a762a35531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHNvdXRoJTIwYWZyaWNhJTIwc3RlbGxlbmJvc2NofGVufDF8fHx8MTc2OTUyMzM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 7,
      title: "Plaaslike boere skakel oor na sonkrag",
      excerpt: "Meer as 50% van plase in die distrik wek nou hul eie krag op om beurtkrag teen te werk.",
      category: "Sake",
      date: "15 Des 2025",
      author: "Thandi Nkosi",
      imageUrl: "https://images.unsplash.com/photo-1671917057421-677f9cd99721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZhcm0lMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 401,
      title: "Nuwe besigheidsentrum open in sentrale sakedistrik",
      excerpt: "Die ontwikkeling sal werkverskaffing bevorder en die plaaslike ekonomie hupstoot gee. Verskeie internasionale maatskappye het reeds in geteken.",
      category: "Sake",
      date: "19 Des 2025",
      author: "Sandra Botha",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 402,
      title: "Plaaslike restaurant ontvang prestigieuse toekenning",
      excerpt: "Die restaurant is aangewys as een van die top 10 eetplekke in die provinsie. Die eienaar is verheug oor die erkenning.",
      category: "Sake",
      date: "18 Des 2025",
      author: "Willem Brink",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 403,
      title: "Toerismebedryf sien toename in vakansiebesprekings",
      excerpt: "Plaaslike gastehuise en B&Bs rapporteer vol besprekings vir die feesseisoen. Dit is goeie nuus vir die plaaslike ekonomie.",
      category: "Sake",
      date: "17 Des 2025",
      author: "Annette Hoffman",
      imageUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 404,
      title: "Nuwe fabriek skep 150 werksgeleenthede",
      excerpt: "Die fabriek, wat volgende maand open, sal vervaardiging bring na die streek. Werkskepping is verwelkom deur inwoners.",
      category: "Sake",
      date: "16 Des 2025",
      author: "Gerhard Smit",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 405,
      title: "Plaaslike entrepreneur ontvang besigheidstoekenning",
      excerpt: "Die jong entrepreneur is erken vir haar innoverende benadering tot landbou. Sy is 'n inspirasie vir ander jong besigheidsmense.",
      category: "Sake",
      date: "15 Des 2025",
      author: "Frans Visagie",
      imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 406,
      title: "Winkelsentrum brei uit met nuwe winkels",
      excerpt: "Tien nuwe winkels sal volgende jaar oopmaak in die sentrum. Dit sluit in mode, elektroniese goedere en restaurants.",
      category: "Sake",
      date: "14 Des 2025",
      author: "Johan Barnard",
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 407,
      title: "Plaaslike handelaar brei uit na aanlyn mark",
      excerpt: "Die besigheid het 'n nuwe webwerf geloods om produkte nasionaal te verkoop. Dit sal nuwe inkomste genereer.",
      category: "Sake",
      date: "13 Des 2025",
      author: "Linda Swart",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 408,
      title: "Bank open nuwe tak in voorstad",
      excerpt: "Die bank se nuwe tak sal moderne bankdienste na inwoners bring en werksgeleenthede skep.",
      category: "Sake",
      date: "12 Des 2025",
      author: "Frederik Marais",
      imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 409,
      title: "Franchise geleenthede lok entrepreneurs",
      excerpt: "Verskeie franchise maatskappye soek plaaslike eienaars om hul besighede in die area te vestig.",
      category: "Sake",
      date: "11 Des 2025",
      author: "Sandra Botha",
      imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 410,
      title: "Plaaslike ambagsmense stig koöperasie",
      excerpt: "Houtwerkers, potmakers en juweliers het saamgekom om 'n koöperasie te stig wat hul produkte gesamentlik bemark.",
      category: "Sake",
      date: "10 Des 2025",
      author: "Willem Brink",
      imageUrl: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 411,
      title: "OU toerusting handelaar open in industriële gebied",
      excerpt: "Die besigheid spesialiseer in die koop en verkoop van gebruikte industriële masjinerie vir plaaslike vervaardigers.",
      category: "Sake",
      date: "9 Des 2025",
      author: "Gerhard Smit",
      imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 412,
      title: "Boekwinkel vier 30 jaar in besigheid",
      excerpt: "Die geliefde plaaslike boekwinkel het vanjaar sy 30ste verjaardag gevier met spesiale afslag en outeur tekeninge.",
      category: "Sake",
      date: "8 Des 2025",
      author: "Annette Hoffman",
      imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 413,
      title: "Plaasprodukte mark groei elke jaar",
      excerpt: "Die weeklikse mark vir plaasprodukte lok al meer verkopers en kopers wat vars, plaaslike produkte waardeer.",
      category: "Sake",
      date: "7 Des 2025",
      author: "Johan Barnard",
      imageUrl: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 414,
      title: "Nuwe motor handelaar vestig in dorp",
      excerpt: "Die handelaar sal verskeie motormerke aanbied en 'n volledige diens sentrum bedryf.",
      category: "Sake",
      date: "6 Des 2025",
      author: "Frans Visagie",
      imageUrl: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 415,
      title: "Beleggingsmaatskappy bied finansiële opleiding",
      excerpt: "Gratis werkswinkels sal inwoners help om beter finansiële besluite te neem en vir die toekoms te spaar.",
      category: "Sake",
      date: "5 Des 2025",
      author: "Sandra Botha",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    }
  ],

  Leefstyl: [
    {
      id: 9012,
      title: "Beplan vandag vir 'n sorgelose aftrede — Sanlam se kenners verduidelik",
      excerpt: "Sanlam se finansiële adviseurs deel praktiese raad oor hoe om jou aftreebeplanning vroeg te begin en slimmer beleggingsbesluite te neem.",
      category: "Leefstyl",
      tags: ["Finansies", "Aftrede"],
      date: "18 Des 2025",
      author: "Geborg",
      imageUrl: "https://images.unsplash.com/photo-1624953336495-0b5af4d962f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwcGxhbm5pbmclMjBmaW5hbmNpYWwlMjBhZHZpc29yJTIwbWVldGluZ3xlbnwxfHx8fDE3NzEzMzcwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min",
      sponsored: true,
      sponsorName: "Sanlam",
      sponsorSlug: "sanlam",
      sponsorLogo: "https://ui-avatars.com/api/?name=SL&background=003B5C&color=fff&size=128&bold=true",
      sponsorLink: "https://www.sanlam.co.za"
    },
    {
      id: 5,
      title: "Woordfees lok rekordgetalle na Stellenbosch",
      excerpt: "Die jaarlikse literêre fees het vanjaar meer as 30 000 besoekers van regoor die land gelok.",
      category: "Leefstyl",
      date: "17 Des 2025",
      author: "Lize Venter",
      imageUrl: "https://images.unsplash.com/photo-1665592016610-f6e73e938e7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRzJTIwZmVzdGl2YWwlMjBzb3V0aCUyMGFmcmljYXxlbnwxfHx8fDE3Njk1MjMzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 516,
      title: "Kaapstadse Hawe wen internasionale toekenning",
      excerpt: "Die V&A Waterfront is weer aangewys as een van die wêreld se top toeristebestemmings.",
      category: "Leefstyl",
      date: "17 Des 2025",
      author: "Sarah Collins",
      imageUrl: "https://images.unsplash.com/photo-1700294229506-93d0b9e00f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdG93biUyMGhhcmJvciUyMHdhdGVyZnJvbnR8ZW58MXx8fHwxNzY5NTIzNDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 517,
      title: "Bekende akteur maak opslae met nuwe rolprent",
      excerpt: "Die plaaslike ster vertel oor die uitdagings van sy nuutste rol in die trefferfliek.",
      category: "Leefstyl",
      date: "17 Des 2025",
      author: "Jacques du Preez",
      imageUrl: "https://images.unsplash.com/photo-1695866648647-ab341ee14b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHRoZWF0ZXIlMjBwb3Bjb3JufGVufDF8fHx8MTc2OTUyMzQwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min"
    },
    {
      id: 501,
      title: "Plaaslike kunstenaar se werk word internasionaal erken",
      excerpt: "Sarah Jansen se jongste uitstalling het aandag getrek van versamelaars in Londen en New York. Haar werk weerspieël die skoonheid van die Karoo.",
      category: "Leefstyl",
      date: "19 Des 2025",
      author: "Marius Nel",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 502,
      title: "Nuwe koffiewinkel 'n treffer by jong professionele mense",
      excerpt: "Die nuwe koffiewinkel in die middedorp is vinnig 'n gunsteling geworden. Die eienaars fokus op ambagskoffie en vars gebak.",
      category: "Leefstyl",
      date: "18 Des 2025",
      author: "Leandi Venter",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 503,
      title: "Tuinskou lok duisende tuinliefhebbers",
      excerpt: "Die jaarlikse tuinskou was weereens 'n groot sukses met pragtige verspreiding en eksotiese plante van dwarsoor die land.",
      category: "Leefstyl",
      date: "17 Des 2025",
      author: "Elsa Lombard",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 504,
      title: "Feesseisoen resepte: Tradisionele Afrikaanse kosse",
      excerpt: "Ons deel van ons lesers se gunsteling resepte vir die feestyd. Van bobotie tot melktert, hierdie geregte sal beslis beïndruk.",
      category: "Leefstyl",
      date: "16 Des 2025",
      author: "Tannie Bettie",
      imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 505,
      title: "Plaaslike wynplaas ontvang internasionale erkenning",
      excerpt: "Die wynplaas se rooiwyn het 'n goudmedalje gewen by 'n internasionale kompetisie in Frankryk. Dit is 'n groot prestasie.",
      category: "Leefstyl",
      date: "15 Des 2025",
      author: "Pierre du Plessis",
      imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 506,
      title: "Vakansie bestemmings binne 2 uur se ry",
      excerpt: "Ontdek die beste plekke om hierdie vakansie te besoek, van strande tot berge. Ons het die top 10 vir jou saamgestel.",
      category: "Leefstyl",
      date: "14 Des 2025",
      author: "Hanlie Rossouw",
      imageUrl: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 507,
      title: "Gesonde eetgewoontes vir die nuwe jaar",
      excerpt: "Voedingkundiges deel hul wenke vir hoe om gesonder te eet sonder om te voel jy ontbeer. Praktiese raad vir almal.",
      category: "Leefstyl",
      date: "13 Des 2025",
      author: "Dr. Marinda Nel",
      imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 508,
      title: "Plaaslike skrywer publiseer debuut roman",
      excerpt: "Die langverwagte boek is nou beskikbaar en het reeds goeie resensies ontvang van kritici en lesers.",
      category: "Leefstyl",
      date: "12 Des 2025",
      author: "Anna-Marie Louw",
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 509,
      title: "Yoga klasse lok al meer deelnemers",
      excerpt: "Die gewildheid van yoga groei vinnig met nuwe klasse wat aangebied word vir beginners en gevorderdes.",
      category: "Leefstyl",
      date: "11 Des 2025",
      author: "Leandi Venter",
      imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 510,
      title: "Ambags mark bied unieke geskenke",
      excerpt: "Van handgemaakte juweliersware tot organiese skoonheidsprodukte, die mark het iets vir almal op jou lys.",
      category: "Leefstyl",
      date: "10 Des 2025",
      author: "Marius Nel",
      imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 511,
      title: "Musiekfestival aankondig indrukwekkende program",
      excerpt: "Die fees sal 'n verskeidenheid van genres aanbied, van klassiek tot rock, met plaaslike en internasionale kunstenaars.",
      category: "Leefstyl",
      date: "9 Des 2025",
      author: "Stefan Muller",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 512,
      title: "Fotografiese uitstalling vier plaaslike talent",
      excerpt: "Die galery wys foto's van opkomende fotografe wat die skoonheid van ons omgewing vasvang.",
      category: "Leefstyl",
      date: "8 Des 2025",
      author: "Elsa Lombard",
      imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 513,
      title: "Huistuin wenke vir die somerseisoen",
      excerpt: "Tuinkundiges vertel hoe om jou tuin te laat floreer tydens die warm somermaande met minder water.",
      category: "Leefstyl",
      date: "7 Des 2025",
      author: "Pieter Blom",
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 514,
      title: "Plaaslike modeontwerpster wen toekenning",
      excerpt: "Haar unieke styl en gebruik van volhoubare materiale het haar 'n plek op die nasionale verhoog besorg.",
      category: "Leefstyl",
      date: "6 Des 2025",
      author: "Michelle Adams",
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 515,
      title: "Beste braaiplekke in en om die dorp",
      excerpt: "Ons verken die mooiste plekke waar jy en jou gesin kan braai en die buitelewe kan geniet.",
      category: "Leefstyl",
      date: "5 Des 2025",
      author: "Hanlie Rossouw",
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    }
  ],

  Dink: [
    {
      id: 601,
      title: "Die toekoms van Afrikaans in 'n veranderende Suid-Afrika",
      excerpt: "Ons moet besin oor hoe ons ons taal en kultuur kan bevorder sonder om eksklusief te wees. Dit is 'n gesprek wat ons almal moet hê.",
      category: "Dink",
      date: "19 Des 2025",
      author: "Prof. Hendrik Smit",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min"
    },
    {
      id: 602,
      title: "Waterbesparing: Ons almal se verantwoordelikheid",
      excerpt: "Met die droogte wat steeds voortduur, moet elke huishouding bydra tot waterbesparing. Hier is praktiese wenke vir almal.",
      category: "Dink",
      date: "18 Des 2025",
      author: "Dr. Annelie Botha",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 603,
      title: "Ondersteuning van plaaslike besighede is kritiek",
      excerpt: "Deur plaaslik te koop, ondersteun ons ons dorp en skep ons werk. Elke rand wat hier spandeer word, maak 'n verskil.",
      category: "Dink",
      date: "17 Des 2025",
      author: "Marius Viljoen",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 604,
      title: "Padveiligheid begin by elke bestuurder",
      excerpt: "Die statistieke is skokkend. Ons moet almal verantwoordelikheid neem vir veiliger paaie, veral gedurende die feesseisoen.",
      category: "Dink",
      date: "16 Des 2025",
      author: "Kaptein Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 605,
      title: "Die belangrikheid van omgee vir mekaar tydens feestyd",
      excerpt: "Soos ons die jaar afsluit, moet ons dink aan diegene wat minder gelukkig is. Saam kan ons 'n verskil maak in mense se lewens.",
      category: "Dink",
      date: "15 Des 2025",
      author: "Dominee Johan Kruger",
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 606,
      title: "Digitale onderwys: Gereed vir die toekoms?",
      excerpt: "Soos tegnologie vorder, moet ons onderwysstelsel aanpas. Die vraag is of ons skole gereed is vir hierdie revolusie.",
      category: "Dink",
      date: "14 Des 2025",
      author: "Dr. Susan Marais",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 607,
      title: "Volhoubaarheid moet 'n prioriteit word",
      excerpt: "Ons kan nie langer die omgewing ignoreer nie. Elke individu en besigheid moet verantwoordelikheid neem.",
      category: "Dink",
      date: "13 Des 2025",
      author: "Prof. Elize van Heerden",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 608,
      title: "Die waarde van diens aan ander",
      excerpt: "Vrywilligerswerk verryk nie net ander se lewens nie, maar ook jou eie. Hier is hoe jy betrokke kan raak.",
      category: "Dink",
      date: "12 Des 2025",
      author: "Ds. Johan Kruger",
      imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 609,
      title: "Jeugwerkeloosheid verg kreatiewe oplossings",
      excerpt: "Ons moet buite die boks dink om geleenthede te skep vir jong mense wat werk soek.",
      category: "Dink",
      date: "11 Des 2025",
      author: "Marius Viljoen",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 610,
      title: "Kultuurerfenis moet bewaar word",
      excerpt: "Ons historiese geboue en tradisies is kosbaar en moet vir toekomstige geslagte bewaar word.",
      category: "Dink",
      date: "10 Des 2025",
      author: "Prof. Hendrik Smit",
      imageUrl: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 611,
      title: "Geestesgesondheid verdien meer aandag",
      excerpt: "Die stigma rondom geestesgesondheid moet verbreek word sodat mense die hulp kan kry wat hulle nodig het.",
      category: "Dink",
      date: "9 Des 2025",
      author: "Dr. Annelie Botha",
      imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 612,
      title: "Die rol van media in 'n demokrasie",
      excerpt: "Onafhanklike joernalistiek is noodsaaklik vir 'n gesonde demokrasie. Ons moet dit ondersteun en beskerm.",
      category: "Dink",
      date: "8 Des 2025",
      author: "Pieter van Zyl",
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
      readTime: "8 min"
    },
    {
      id: 613,
      title: "Sport as instrument vir sosiale verandering",
      excerpt: "Sport kan samelewings transformeer en jeug inspireer. Ons moet meer in sportprogramme belê.",
      category: "Dink",
      date: "7 Des 2025",
      author: "Kaptein Pieter Nel",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 614,
      title: "Energie-onafhanklikheid is bereikbaar",
      excerpt: "Met sonkrag en ander hernubare bronne kan huishoudings en besighede hul krag self opwek.",
      category: "Dink",
      date: "6 Des 2025",
      author: "Ing. Frans Visagie",
      imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 615,
      title: "Die kuns van respekvolle debat",
      excerpt: "Ons moet leer om oor verskille te praat sonder om mekaar af te breek. Respek is die sleutel.",
      category: "Dink",
      date: "5 Des 2025",
      author: "Prof. Hendrik Smit",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    }
  ],

  NetNuus: [
    {
      id: 701,
      title: "Kunsmatige intelligensie verander die werksplek",
      excerpt: "AI-tegnologie word al hoe meer geïntegreer in Suid-Afrikaanse besighede. Ons kyk na die impak op werkverskaffing en produktiwiteit.",
      category: "NetNuus",
      date: "19 Des 2025",
      author: "Thabo Mdluli",
      imageUrl: "https://images.unsplash.com/photo-1618758992242-2d4bc63a1be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwQUl8ZW58MXx8fHwxNzY4NzQyMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "6 min"
    },
    {
      id: 702,
      title: "Kuberveiligheid: Beskerm jou digitale identiteit",
      excerpt: "Met die toename in aanlyn bedriegery, is dit belangriker as ooit om jou persoonlike inligting te beskerm. Hier is praktiese wenke.",
      category: "NetNuus",
      date: "18 Des 2025",
      author: "Lisa van Niekerk",
      imageUrl: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwY29tcHV0ZXIlMjBzZWN1cml0eXxlbnwxfHx8fDE3Njg3NDIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 703,
      title: "Nuwe mobiele app help plaaslike ondernemers",
      excerpt: "Die innoverende app verbind klein besighede direk met kliënte en maak aanlyn verkope maklik en bekostigbaar.",
      category: "NetNuus",
      date: "17 Des 2025",
      author: "Riaan Botha",
      imageUrl: "https://images.unsplash.com/photo-1730818028738-21c19c7103fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc2ODc0MjE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 704,
      title: "Sosiale media tendense vir 2026",
      excerpt: "Van kortvideo-inhoud tot gebruikergedrewe platforms - hier is wat jy moet weet oor die toekoms van sosiale media.",
      category: "NetNuus",
      date: "16 Des 2025",
      author: "Michelle Jacobs",
      imageUrl: "https://images.unsplash.com/photo-1656164630621-8974e3a7e85c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG5ldHdvcmtpbmd8ZW58MXx8fHwxNzY4NzQyMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 705,
      title: "Aanlyn inkopies groei met 45% hierdie feesseisoen",
      excerpt: "E-handel is besig om tradisionele kleinhandel te verby steek. Ons ondersoek hoekom Suid-Afrikaners verkies om aanlyn te koop.",
      category: "NetNuus",
      date: "15 Des 2025",
      author: "Karel Oosthuizen",
      imageUrl: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGVjb21tZXJjZXxlbnwxfHx8fDE3Njg3NDIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "4 min"
    },
    {
      id: 706,
      title: "Vinniger internet bereik landelike gebiede",
      excerpt: "Nuwe infrastruktuur projekte bring hoëspoed internet na afgeleë dele van die land. Dit open nuwe geleenthede vir afstandswerk en onderwys.",
      category: "NetNuus",
      date: "14 Des 2025",
      author: "David Naidoo",
      imageUrl: "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGludGVybmV0fGVufDF8fHx8MTc2ODc0MjE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      readTime: "5 min"
    },
    {
      id: 707,
      title: "Slim huise word al hoe gewilder in Suid-Afrika",
      excerpt: "Tuisoutomatisering groei vinnig met meer mense wat slim slotte, ligte en sekuriteitstelsels installeer.",
      category: "NetNuus",
      date: "13 Des 2025",
      author: "Lisa van Niekerk",
      imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 708,
      title: "Elektriese voertuie: Is SA gereed?",
      excerpt: "Met meer EV-modelle beskikbaar, kyk ons na die infrastruktuur, koste en praktiese oorwegings vir Suid-Afrikaanse bestuurders.",
      category: "NetNuus",
      date: "12 Des 2025",
      author: "Riaan Botha",
      imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 709,
      title: "Streaming vs tradisionele TV: Die syfers praat",
      excerpt: "Nuwe data toon dat streaming-dienste TV-kyk in Suid-Afrika begin oorheers, veral onder jonger kykersgroepe.",
      category: "NetNuus",
      date: "11 Des 2025",
      author: "Michelle Jacobs",
      imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 710,
      title: "Digitale geletterdheid programme bereik platteland",
      excerpt: "Nuwe inisiatiewe leer ouer mense in landelike gebiede hoe om selfone en die internet veilig te gebruik.",
      category: "NetNuus",
      date: "10 Des 2025",
      author: "David Naidoo",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 711,
      title: "SA-ontwikkelaar se app bereik 1 miljoen afladings",
      excerpt: "Die plaaslik-ontwikkelde produktiwiteitsprogram het 'n groot mylpaal bereik en trek internasionale beleggersbelangstelling.",
      category: "NetNuus",
      date: "9 Des 2025",
      author: "Karel Oosthuizen",
      imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 712,
      title: "Blockchain-tegnologie verbeter voorsieningskettings",
      excerpt: "Suid-Afrikaanse landbou- en mynbou-maatskappye gebruik blockchain om deursigtigheid en doeltreffendheid te verbeter.",
      category: "NetNuus",
      date: "8 Des 2025",
      author: "Riaan Botha",
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 713,
      title: "Afstandswerk: Hoe SA se werksmark verander het",
      excerpt: "Drie jaar na die pandemie het hibriede werk die nuwe normaal geword. Ons kyk na die langetermyn-impak op produktiwiteit.",
      category: "NetNuus",
      date: "7 Des 2025",
      author: "Lisa van Niekerk",
      imageUrl: "https://images.unsplash.com/photo-1585974738771-84483dd9f89f?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 714,
      title: "Videospeletjies word erken as e-sport in SA",
      excerpt: "Die Suid-Afrikaanse Sportkonfederasie het e-sport amptelik erken, wat die deur oopmaak vir befondsing en ontwikkeling.",
      category: "NetNuus",
      date: "6 Des 2025",
      author: "Michelle Jacobs",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 715,
      title: "Digitale betalings oorheers kontant in stedelike gebiede",
      excerpt: "Meer as 70% van transaksies in groot stede word nou elektronies verwerk. QR-kode-betalings toon die vinnigste groei.",
      category: "NetNuus",
      date: "5 Des 2025",
      author: "Karel Oosthuizen",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    }
  ],

  "Skole rugby": [
    {
      id: 801,
      title: "Hoërskool wen jaarlikse rugby derby teen buurskool",
      excerpt: "In 'n naelbytstryd het die plaaslike span met 24-21 geseëvier voor 'n skare van duisende.",
      category: "Skole rugby",
      tags: ["Rugby", "Skolesport", "Plaaslik"],
      date: "18 Des 2025",
      author: "Pieter van der Merwe",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1643096809267-38765bbfd989?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 802,
      title: "O/19 Cravenweek span aangekondig",
      excerpt: "Vier spelers van ons streek is gekies vir die provinsiale span wat volgende maand aan die Cravenweek sal deelneem.",
      category: "Skole rugby",
      tags: ["Rugby", "Prestasie"],
      date: "10 Des 2025",
      author: "Stehan Schoeman",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 803,
      title: "Nuwe afrigter vir Hoërskool se Eerste XV",
      excerpt: "Die skool het 'n voormalige provinsiale speler aangestel om rugby by die skool na nuwe hoogtes te neem.",
      category: "Skole rugby",
      tags: ["Rugby", "Afrigting"],
      date: "5 Des 2025",
      author: "Johan Smit",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 804,
      title: "Interskole rugby fees lok duisende ondersteuners",
      excerpt: "Die jaarlikse interskole-rugbyfees het begin met spanne van regoor die provinsie wat vir eer en roem meeding.",
      category: "Skole rugby",
      tags: ["Rugby", "Skolesport", "Interskole"],
      date: "3 Des 2025",
      author: "Danie Muller",
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 805,
      title: "O/16 span verower provinsiale titel",
      excerpt: "Die jong Leeus het 'n onoorwonne seisoen bekroon met 'n oortuigende oorwinning in die provinsiale finaal.",
      category: "Skole rugby",
      tags: ["Rugby", "Prestasie"],
      date: "1 Des 2025",
      author: "Werner Louw",
      imageUrl: "https://images.unsplash.com/photo-1529165980561-86e8b7cbeea4?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 806,
      title: "Skoolrugby-seisoen: Hoogtepunte en teleurstellings",
      excerpt: "Ons blik terug op 'n opwindende seisoen vol verrassings, rekords en onvergeetlike oomblikke op die rugbyveld.",
      category: "Skole rugby",
      tags: ["Rugby", "Skolesport", "Oorsig"],
      date: "28 Nov 2025",
      author: "Pieter van der Merwe",
      imageUrl: "https://images.unsplash.com/photo-1580037040892-7cf5bd14d8c7?auto=format&fit=crop&q=80&w=800",
      readTime: "7 min"
    },
    {
      id: 807,
      title: "Drie skoliere in Springbok-akademie opgeneem",
      excerpt: "Uitblinkers van plaaslike hoërskole is gekies vir SA Rugby se prestigeprogram wat jong talent ontwikkel.",
      category: "Skole rugby",
      tags: ["Rugby", "Prestasie", "Nasionaal"],
      date: "25 Nov 2025",
      author: "Stehan Schoeman",
      imageUrl: "https://images.unsplash.com/photo-1613330524291-3330afe5920e?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 808,
      title: "Vrouens-skoolrugby groei met 200% in streek",
      excerpt: "Al meer meisies neem deel aan georganiseerde rugby by skole. Verskeie ligas is gestig om die groei te akkommodeer.",
      category: "Skole rugby",
      tags: ["Rugby", "Vrouens", "Groei"],
      date: "22 Nov 2025",
      author: "Lizelle Pieterse",
      imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 809,
      title: "Voormalige Bok besoek skool vir mentorskapsdag",
      excerpt: "Die legendariese oud-Springbok het tyd spandeer met jong spelers en raad gedeel oor die pad na professionele rugby.",
      category: "Skole rugby",
      tags: ["Rugby", "Mentorskap"],
      date: "19 Nov 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 810,
      title: "Skakelaar breek 20 jaar oue punterekord",
      excerpt: "Die begaafde skakelaar het 'n langstaande skoolrekord verbreek deur meer as 300 punte in een seisoen aan te teken.",
      category: "Skole rugby",
      tags: ["Rugby", "Rekord", "Prestasie"],
      date: "16 Nov 2025",
      author: "Danie Muller",
      imageUrl: "https://images.unsplash.com/photo-1580037040892-7cf5bd14d8c7?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 811,
      title: "Rugbytoernooi vir liefdadigheid samel R150 000 in",
      excerpt: "Die jaarlikse liefdadigheidstoernooi tussen skole het 'n rekordbedrag ingesamel vir kinderhuise in die omgewing.",
      category: "Skole rugby",
      tags: ["Rugby", "Liefdadigheid"],
      date: "13 Nov 2025",
      author: "Werner Louw",
      imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      readTime: "4 min"
    },
    {
      id: 812,
      title: "Nuwe kunsgras-veld gee skool voordeel",
      excerpt: "Die installasie van 'n moderne kunsgras-rugbyveld beteken spelers kan in alle weersomstandighede oefen en speel.",
      category: "Skole rugby",
      tags: ["Rugby", "Fasiliteite"],
      date: "10 Nov 2025",
      author: "Pieter van der Merwe",
      imageUrl: "https://images.unsplash.com/photo-1529165980561-86e8b7cbeea4?auto=format&fit=crop&q=80&w=800",
      readTime: "3 min"
    },
    {
      id: 813,
      title: "Skoolrugby-span maak geskiedenis met ongeklopte seisoen",
      excerpt: "Vir die eerste keer in 35 jaar het die Eerste XV elke wedstryd van die seisoen gewen, insluitend die interskole.",
      category: "Skole rugby",
      tags: ["Rugby", "Geskiedenis", "Prestasie"],
      date: "7 Nov 2025",
      author: "Stehan Schoeman",
      imageUrl: "https://images.unsplash.com/photo-1643096809267-38765bbfd989?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    },
    {
      id: 814,
      title: "Beserings onder jong rugbyspelers neem toe",
      excerpt: "Kenners waarsku dat beter afrigting en kondisionering nodig is om beserings onder skolerugbyspelers te verminder.",
      category: "Skole rugby",
      tags: ["Rugby", "Gesondheid", "Veiligheid"],
      date: "4 Nov 2025",
      author: "Dr. Hannes Meyer",
      imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=800",
      readTime: "6 min"
    },
    {
      id: 815,
      title: "Plattelandse skool se rugbyprogram inspireer nasie",
      excerpt: "Ondanks beperkte hulpbronne het die klein plattelandse skool se rugbyspan tot in die nasionale halfeindrondes gevorder.",
      category: "Skole rugby",
      tags: ["Rugby", "Inspirasie", "Platteland"],
      date: "1 Nov 2025",
      author: "Johan Smit",
      imageUrl: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?auto=format&fit=crop&q=80&w=800",
      readTime: "5 min"
    }
  ],

  "Kompetisies": [
    {
      id: 901,
      title: "Wen kaartjies na die Woordfees",
      excerpt: "Teken in op ons nuusbrief en staan 'n kans om 'n dubbelkaartjie na die openingsaand te wen.",
      category: "Kompetisies",
      tags: ["Kuns en kultuur", "Vermaak"],
      date: "15 Des 2025",
      author: "Redaksie",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1514525253440-b393452e8d2e?auto=format&fit=crop&q=80&w=800",
      readTime: "1 min"
    },
    {
      id: 902,
      title: "Fotografie Kompetisie: 'My Dorp'",
      excerpt: "Stuur vir ons jou beste foto van ons dorp en wen groot pryse. Sluitingsdatum 31 Januarie.",
      category: "Kompetisies",
      tags: ["Fotografie"],
      date: "10 Des 2025",
      author: "Redaksie",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    },
    {
      id: 903,
      title: "Wen 'n naweek-wegbreek vir twee ter waarde van R15 000",
      excerpt: "Beantwoord drie eenvoudige vrae oor ons streek en jy kan 'n luukse naweek by 'n top-gasteplaas wen.",
      category: "Kompetisies",
      tags: ["Reis en buitelewe", "Pryse"],
      date: "8 Des 2025",
      author: "Redaksie",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    },
    {
      id: 904,
      title: "Skryfkompetisie: Vertel jou storie in 500 woorde",
      excerpt: "Deel jou unieke storie en staan 'n kans om R5 000 kontant te wen. Oop vir alle ouderdomme.",
      category: "Kompetisies",
      tags: ["Skryf", "Kreatief"],
      date: "5 Des 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    },
    {
      id: 905,
      title: "Wen kaartjies vir die Somerkonserreeks",
      excerpt: "Vier van die gewildste Afrikaanse kunstenaars tree op. Wen dubbelkaartjies vir die vertoning van jou keuse.",
      category: "Kompetisies",
      tags: ["Vermaak", "Musiek"],
      date: "2 Des 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800",
      readTime: "1 min"
    },
    {
      id: 906,
      title: "Kos-kompetisie: Deel jou beste feesresep",
      excerpt: "Stuur jou gunsteling feesseisoen-resep in en wen 'n kookkursus ter waarde van R3 000 by 'n top sjefskool.",
      category: "Kompetisies",
      tags: ["Kos en resepte"],
      date: "28 Nov 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    },
    {
      id: 907,
      title: "Wen 'n gesinskaartjie na die Wildtuin",
      excerpt: "Beantwoord ons kwis oor Suid-Afrikaanse wildlife en jy kan 'n gesinskaartjie vir vier na die Kruger Wildtuin wen.",
      category: "Kompetisies",
      tags: ["Natuur", "Gesin"],
      date: "25 Nov 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    },
    {
      id: 908,
      title: "Tekenkunskompetisie vir kinders onder 12",
      excerpt: "Jong kunstenaars kan hul talente wys en pragtige pryse wen. Tema: 'My Droom vir Suid-Afrika'.",
      category: "Kompetisies",
      tags: ["Kuns en kultuur", "Kinders"],
      date: "22 Nov 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
      readTime: "1 min"
    },
    {
      id: 909,
      title: "Wen R10 000 geskenksertifikaat by jou gunsteling winkel",
      excerpt: "Plaas 'n bestelling by ons aanlyn winkel hierdie maand en tree outomaties in vir die gelukstrekking.",
      category: "Kompetisies",
      tags: ["Inkopies", "Pryse"],
      date: "19 Nov 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=800",
      readTime: "1 min"
    },
    {
      id: 910,
      title: "Fiksheid-uitdaging: 30 dae tot 'n gesonder jy",
      excerpt: "Neem deel aan ons 30-dag fiksheids-uitdaging en wen 'n jaar se lidmaatskap by 'n top-gimnasium.",
      category: "Kompetisies",
      tags: ["Gesondheid", "Fiksheid"],
      date: "16 Nov 2025",
      author: "Redaksie",
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      readTime: "2 min"
    }
  ],

  /* ── rooi rose Magazine Categories ──────────────────────────────────
   * Phase 0: Content Architecture Update (2026-03-11)
   * 8 lifestyle magazine categories added for rooi rose redesign
   * Each category includes placeholder content (to be replaced with real data)
   * ──────────────────────────────────────────────────────────────────── */

  Kos: [
    {
      id: 10001,
      title: "10 maklike resepte vir weekaande",
      excerpt: "Van ontbyt tot aandete - hierdie vinnige resepte is perfek vir besige gesinne wat steeds gesonde kos wil geniet.",
      category: "Kos",
      tags: ["Resepte", "Gesin", "Weeksdae"],
      date: "11 Mrt 2026",
      author: "Sarah de Villiers",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1080",
      readTime: "8 min"
    },
    {
      id: 10002,
      title: "Seisoenale groente: 'n Maartgids",
      excerpt: "Ontdek watter vars groente in Maart beskikbaar is en hoe om dit te berei vir optimale smaak en voeding.",
      category: "Kos",
      tags: ["Groente", "Seisoenaal", "Gesond"],
      date: "10 Mrt 2026",
      author: "Annemarie Swart",
      imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    }
  ],

  Mode: [
    {
      id: 10101,
      title: "Herfs 2026: Die nuutste neigings",
      excerpt: "Van warm aanaardjakkies tot klassieke lere, hier is die mode-items wat hierdie seisoen 'n verskil sal maak.",
      category: "Mode",
      tags: ["Mode", "Herfs", "Neigings"],
      date: "11 Mrt 2026",
      author: "Leandri Fourie",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1080",
      readTime: "7 min"
    },
    {
      id: 10102,
      title: "Volhoubare mode: Koop slim, koop less",
      excerpt: "Leer hoe om 'n volhoubare kas te bou met tydlose stukke wat jare lank sal hou.",
      category: "Mode",
      tags: ["Volhoubaarheid", "Minimalisme"],
      date: "9 Mrt 2026",
      author: "Carla Pretorius",
      imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1080",
      readTime: "5 min"
    }
  ],

  Skoonheid: [
    {
      id: 10201,
      title: "Wintervelversorging: Beskerm jou vel",
      excerpt: "Die beste produkte en roetines om droë wintervel te voorkom en 'n gesonde glans te behou.",
      category: "Skoonheid",
      tags: ["Velversorging", "Winter", "Skoonheid"],
      date: "11 Mrt 2026",
      author: "Mia Coetzee",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    },
    {
      id: 10202,
      title: "Die krag van natuurlike skoonheidsprodukte",
      excerpt: "Waarom al hoe meer vroue oorslaan na natuurlike en organiese skoonheidsprodukte - en hoe om die regte keuses te maak.",
      category: "Skoonheid",
      tags: ["Natuurlik", "Organies"],
      date: "8 Mrt 2026",
      author: "Zani du Plessis",
      imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1080",
      readTime: "5 min"
    }
  ],

  Gesondheid: [
    {
      id: 10301,
      title: "5 maniere om stres te verminder",
      excerpt: "Praktiese wenke vir 'n kalmer, meer gebalanseerde lewe in ons besige wêreld.",
      category: "Gesondheid",
      tags: ["Stres", "Welstand", "Gesondheid"],
      date: "11 Mrt 2026",
      author: "Dr. Elna Marais",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1080",
      readTime: "7 min"
    },
    {
      id: 10302,
      title: "Die belangrikheid van gereelde oefening",
      excerpt: "Hoe om 'n oefenroetine te begin wat by jou lewenstyl pas en volhoubaar is.",
      category: "Gesondheid",
      tags: ["Oefening", "Fiksheid"],
      date: "9 Mrt 2026",
      author: "Pieter van Wyk",
      imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    }
  ],

  Bekendes: [
    {
      id: 10401,
      title: "In gesprek met Charlize Theron",
      excerpt: "Die Oscarwenner gesels oor haar nuutste rolprent, moederskap en haar werk in Suid-Afrika.",
      category: "Bekendes",
      tags: ["Onderhoude", "Film", "Internasionaal"],
      date: "11 Mrt 2026",
      author: "Janine Viljoen",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1080",
      readTime: "10 min"
    },
    {
      id: 10402,
      title: "SA-musikante skyn op die wêreldverhoog",
      excerpt: "Hoe Suid-Afrikaanse kunstenaars internasionale sukses behaal en ons kultuur wêreldwyd vier.",
      category: "Bekendes",
      tags: ["Musiek", "Kultuur"],
      date: "10 Mrt 2026",
      author: "Ryno Wessels",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1080",
      readTime: "8 min"
    },
    {
      id: 10403,
      title: "Agter die skerms met 'Binnelanders'",
      excerpt: "Eksklusiewe insigte oor die gewilde sepie se nuutste seisoen en wat kykers kan verwag.",
      category: "Bekendes",
      tags: ["TV dekking", "Agter die skerms", "Drama"],
      date: "9 Mrt 2026",
      author: "Mia Coetzee",
      imageUrl: "https://images.unsplash.com/photo-1574267432644-f74f8ec54b33?auto=format&fit=crop&q=80&w=1080",
      readTime: "7 min"
    },
    {
      id: 10404,
      title: "Dié Hefer: Van radio-aanbieder tot TV-ster",
      excerpt: "Die geliefde persoonlikheid deel haar reis en wat haar dryf om nuwe uitdagings aan te pak.",
      category: "Bekendes",
      tags: ["Onderhoude", "TV", "Radio"],
      date: "8 Mrt 2026",
      author: "Janine Viljoen",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=1080",
      readTime: "9 min"
    },
    {
      id: 10405,
      title: "Die Afrikaanse filmbedryf se nuwe generasie",
      excerpt: "Jong regisseurs en akteurs wat vars perspektiewe na ons stories bring.",
      category: "Bekendes",
      tags: ["Film", "Kultuur", "Jeug"],
      date: "7 Mrt 2026",
      author: "Pieter Marais",
      imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1080",
      readTime: "8 min"
    },
    {
      id: 10406,
      title: "Karen Zoid: 'Ek skep omdat ek moet'",
      excerpt: "Die musikante en TV-aanbieder oor kreatiwiteit, inspirasie en die kuns om relevant te bly.",
      category: "Bekendes",
      tags: ["Onderhoude", "Musiek", "Inspirasie"],
      date: "6 Mrt 2026",
      author: "Ryno Wessels",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1080",
      readTime: "11 min"
    },
    {
      id: 10407,
      title: "Die waarheid agter reality TV",
      excerpt: "Hoe word gewilde reality-programme soos 'Boer Soek 'n Vrou' werklik gemaak? Ons onthul die geheime.",
      category: "Bekendes",
      tags: ["TV dekking", "Agter die skerms", "Reality"],
      date: "5 Mrt 2026",
      author: "Mia Coetzee",
      imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    },
    {
      id: 10408,
      title: "Afrikaanse teater maak 'n comeback",
      excerpt: "Vanaf 'Die Testament' tot nuwe produksies - hoe teater weer gehore trek na die pandemie.",
      category: "Bekendes",
      tags: ["Teater", "Kultuur", "Kuns"],
      date: "4 Mrt 2026",
      author: "Annelize Steyn",
      imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=1080",
      readTime: "7 min"
    },
    {
      id: 10409,
      title: "Bobby van Jaarsveld se nuwe album 'Seisoen'",
      excerpt: "Die sanger-liedjieskrywer gesels oor sy mees persoonlike album tot dusver en sy evolusie as kunstenaar.",
      category: "Bekendes",
      tags: ["Onderhoude", "Musiek", "Album"],
      date: "3 Mrt 2026",
      author: "Ryno Wessels",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1080",
      readTime: "8 min"
    },
    {
      id: 10410,
      title: "Die opkoms van Afrikaanse podsendings",
      excerpt: "Hoe 'n nuwe generasie vertelstories digitale platforms gebruik om stories te deel en gemeenskappe te bou.",
      category: "Bekendes",
      tags: ["Podsendings", "Kultuur", "Media"],
      date: "2 Mrt 2026",
      author: "Janine Viljoen",
      imageUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    }
  ],

  "Jou lewe": [
    {
      id: 10501,
      title: "Balanseer werk en gesinslewe",
      excerpt: "Praktiese strategieë om jou loopbaan en gesinsverantwoordelikhede suksesvol te bestuur.",
      category: "Jou lewe",
      tags: ["Werk", "Gesin", "Balans"],
      date: "11 Mrt 2026",
      author: "Linda Botha",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1080",
      readTime: "7 min"
    },
    {
      id: 10502,
      title: "Finansiële beplanning vir jong gesinne",
      excerpt: "Hoe om jou finansies te bestuur, spaar vir die toekoms en steeds die hede te geniet.",
      category: "Jou lewe",
      tags: ["Finansies", "Gesin"],
      date: "9 Mrt 2026",
      author: "Thabo Mthembu",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1080",
      readTime: "9 min"
    }
  ],

  Ontspanning: [
    {
      id: 10601,
      title: "Top 10 boeke om hierdie maand te lees",
      excerpt: "Van spanningsverhale tot romanses - ons keuse van die beste nuwe boeke vir Maart.",
      category: "Ontspanning",
      tags: ["Boeke", "Lees", "Kultuur"],
      date: "11 Mrt 2026",
      author: "Annelize Steyn",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1080",
      readTime: "6 min"
    },
    {
      id: 10602,
      title: "Wegbreek-gidse: Karoo-avonture",
      excerpt: "Ontdek die skoonheid van die Karoo met hierdie onontdekte juwele wat perfek is vir 'n naweek weg.",
      category: "Ontspanning",
      tags: ["Reis", "Suid-Afrika", "Wegbreek"],
      date: "10 Mrt 2026",
      author: "Johan Roux",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1080",
      readTime: "8 min"
    }
  ],

  "Rooiwarm wenners": [
    {
      id: 10701,
      title: "Wenners van Februarie se groot kompetisie",
      excerpt: "Baie geluk aan al ons gelukkige wenners! Hier is wie die pryse gewen het.",
      category: "Rooiwarm wenners",
      tags: ["Kompetisies", "Wenners"],
      date: "1 Mrt 2026",
      author: "Redaksie",
      featured: true,
      imageUrl: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1080",
      readTime: "3 min"
    }
  ]
};

// Helper function to get all category names
export function getAllCategories(): string[] {
  return Object.keys(CATEGORY_ARTICLES);
}



// Helper function to get a single article by ID across all categories
export function getArticleById(id: number): CategoryArticle | null {
  for (const categoryArticles of Object.values(CATEGORY_ARTICLES)) {
    const article = categoryArticles.find(article => article.id === id);
    if (article) {
      return article;
    }
  }
  return null;
}

// Helper function to get all articles from all categories
export function getAllArticles(): CategoryArticle[] {
  const allArticles: CategoryArticle[] = [];
  Object.values(CATEGORY_ARTICLES).forEach(categoryArticles => {
    allArticles.push(...categoryArticles);
  });
  return allArticles;
};
