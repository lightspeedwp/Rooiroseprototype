/**
 * Event data — Die Papier
 *
 * @wordpress-patterns archive-events, archive-event-category
 * @wordpress-cards card-event-grid, card-event-meta
 * @wordpress-queries query-events-upcoming
 * @wordpress-cpt dp_event (SCF fields: event_date, event_time, event_location, event_price)
 * @see /guidelines/components/patterns/card/README.md
 */
import { Event } from '../types';

export const EVENTS: Event[] = [
  { 
    id: 1, 
    title: 'Kersmark in die park', 
    date: '20 Des', 
    time: '16:00 - 21:00', 
    location: 'Stadspark, Bloemfontein', 
    category: 'Plaaslik',
    description: "Kom geniet 'n aand van feestelike musiek, handgemaakte geskenke en heerlike kos. Daar sal stalletjies wees met unieke geskenke, heerlike plaaslike kos en vermaak vir die hele gesin. Moenie die kersliedere om 19:00 misloop nie!",
    imageUrl: "https://images.unsplash.com/photo-1543329241-7db1352e825a?auto=format&fit=crop&q=80&w=800",
    eventDate: "2025-12-20",
    address: "Stadspark, Bloemfontein",
    organiser: "Bloemfontein Inwoners",
    isFree: false,
    price: "R50 volwassenes, R20 kinders"
  },
  { 
    id: 2, 
    title: 'Rugby derby: Hoërskool Sentraal vs Grey', 
    date: '15 Jan', 
    time: '14:00 - 17:00', 
    location: 'Sentraal Sportgronde', 
    category: 'Sport',
    description: 'Die grootste skolerugby wedstryd van die jaar. Kom ondersteun ons seuns in hierdie reuse stryd. Hekke open om 12:00. Kaartjies by die hek beskikbaar.',
    imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-01-15",
    organiser: "Hoërskool Sentraal",
    isFeatured: true,
    price: "R30"
  },
  { 
    id: 3, 
    title: 'Vrystaat Kunstefees bekendstelling', 
    date: '28 Feb', 
    time: '10:00 - 13:00', 
    location: 'Sand du Plessis Teater', 
    category: 'Kuns',
    description: 'Die amptelike bekendstelling van vanjaar se kunstefees program. Kom kyk eerste na die program en bespreek jou kaartjies voor die publiek.',
    imageUrl: "https://images.unsplash.com/photo-1620841713101-702334812312?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-02-28",
    organiser: "Vrystaat Kunstefees",
    isFree: true,
    isFeatured: true
  },
  {
    id: 4,
    title: 'Munisipale begrotingsvergadering',
    date: '05 Mrt',
    time: '18:00 - 20:00',
    location: 'Stadsaal',
    category: 'Sake',
    description: 'Publieke deelname vergadering oor die nuwe munisipale begroting en tariewe. Jou stem saak, kom luister en vra vrae.',
    imageUrl: "https://images.unsplash.com/photo-1640580171716-4474b9114ef4?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-05",
    organiser: "Mangaung Metro",
    isFree: true
  },
  {
    id: 5,
    title: 'Saterdag boeremark',
    date: 'Elke Sat',
    time: '07:00 - 13:00',
    location: 'Langenhoven Park',
    category: 'Mark',
    description: 'Vars produkte, tuisgebak en handwerk direk van die boer en vervaardiger. Die beste plek vir jou Saterdagoggend koffie en pannekoek.',
    imageUrl: "https://images.unsplash.com/photo-1760008018988-9a8d0bf45552?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-07", // Representative next date
    organiser: "Vrystaat Boeremark",
    isFree: true
  },
  {
    id: 6,
    title: 'Vrystaat boekebeurs',
    date: '15 Mrt',
    time: '09:00 - 17:00',
    location: 'Universiteit van die Vrystaat',
    category: 'Literatuur',
    description: 'Ontmoet jou gunsteling skrywers en vind winskopies by die jaarlikse boekebeurs. Paneelbesprekings, boekbekendstellings en werkswinkels.',
    imageUrl: "https://images.unsplash.com/photo-1739133087944-0a6311a2319b?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-15",
    organiser: "UV Letterkunde Departement",
    price: "R20"
  },
  {
    id: 7,
    title: 'Vrystaat marathon 2026',
    date: '22 Mrt',
    time: '06:00 - 12:00',
    location: 'Bloemfontein Stadsaal (Begin)',
    category: 'Sport',
    description: "Die jaarlikse Vrystaat Marathon lok hardlopers van reg oor die land. Volledige marathon (42km), halfmarathon (21km) en 'n 10km pretloop. Inskrywings sluit 15 Maart.",
    imageUrl: "https://images.unsplash.com/photo-1616898492025-a13444053721?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-22",
    organiser: "Vrystaat Atletiek",
    price: "R150 - R250"
  },
  {
    id: 8,
    title: 'Kosskool: Tradisionele Suid-Afrikaanse bak',
    date: '08 Mrt',
    time: '09:00 - 13:00',
    location: 'Oliewenhuis Kunstesentrum',
    category: 'Kos',
    description: "Leer hoe om melktert, koeksisters en beskuit te maak by hierdie interaktiewe kosskool. Alle bestanddele ingesluit. Beperk tot 20 deelnemers — bespreek vroeg.",
    imageUrl: "https://images.unsplash.com/photo-1655655555559-70610bfe5598?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-08",
    organiser: "Oliewenhuis",
    price: "R450"
  },
  {
    id: 9,
    title: 'Langenhovenpark straatmark',
    date: '01 Mrt',
    time: '08:00 - 14:00',
    location: 'Langenhoven Park, Bloemfontein',
    category: 'Mark',
    description: "Die kwartaallikse straatmark met meer as 80 stalletjies, lewendige musiek, kinder-vermaak en heerlike straatkos. Gratis toegang.",
    imageUrl: "https://images.unsplash.com/photo-1543329241-7db1352e825a?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-01",
    organiser: "Langenhovenpark Inwoners",
    isFree: true
  },
  {
    id: 10,
    title: 'Bloemfontein Filmsomerfees',
    date: '14 Mrt',
    time: '18:00 - 23:00',
    location: 'Naval Hill, Bloemfontein',
    category: 'Kuns',
    description: "Buite-filmvertonings onder die sterre op Naval Hill. Vanjaar se program sluit Suid-Afrikaanse kortfilms en 'n klassieke Afrikaanse rolprent in. Bring jou eie kombers en picknickmand.",
    imageUrl: "https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-14",
    organiser: "Film Vrystaat",
    price: "R80"
  },
  {
    id: 11,
    title: 'Entrepreneursdag vir vroue',
    date: '10 Mrt',
    time: '08:30 - 16:00',
    location: 'Protea Hotel, Bloemfontein',
    category: 'Sake',
    description: "Inspirerende praatjies, besigheidswerkwinkels en netwerksessies spesifiek gemik op vroulike entrepreneurs. Registrasie sluit gratis middagete in.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-10",
    organiser: "Sakevroue van die Vrystaat",
    price: "Gratis (Registrasie verpligtend)",
    isFree: true
  },
  {
    id: 12,
    title: 'Interhoërskole atletiek',
    date: '28 Feb',
    time: '08:00 - 17:00',
    location: 'Free State Stadion',
    category: 'Sport',
    description: "Die jaarlikse interhoerskole atletiekbyeenkoms met deelnemers van meer as 30 skole in die Vrystaat. Kom ondersteun ons jong atlete.",
    imageUrl: "https://images.unsplash.com/photo-1552674605-46f991f80459?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-02-28",
    organiser: "Vrystaat Skole Atletiek",
    price: "R40"
  },
  {
    id: 13,
    title: 'Kerkbasaar: NG Kerk Fichardtpark',
    date: '19 Mrt',
    time: '07:00 - 14:00',
    location: 'NG Kerk Fichardtpark',
    category: 'Plaaslik',
    description: "Die jaarlikse kerkbasaar met tuisgebak, boerewors, pannekoek, handwerk en 'n kinderhoek. Alle opbrengs gaan na die kerk se behoeftige fonds.",
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-19",
    organiser: "NG Kerk Fichardtpark",
    isFree: true
  },
  {
    id: 14,
    title: 'Kunswandeling deur Bloemfontein',
    date: '12 Mrt',
    time: '10:00 - 13:00',
    location: 'President Brand Straat (Begin)',
    category: 'Kuns',
    description: "Ontdek Bloemfontein se versteekte kunswerke op hierdie begeleide staptour. Besoek galerye, straatkuns en historiese geboue. R50 per persoon.",
    imageUrl: "https://images.unsplash.com/photo-1561059488-916d69792237?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-12",
    organiser: "Bloemfontein Kunsvereniging",
    price: "R50"
  },
  {
    id: 15,
    title: 'Vrystaat fotografie-uitstalling',
    date: '25 Mrt',
    time: '09:00 - 17:00',
    location: 'Oliewenhuis Kunstesentrum',
    category: 'Kuns',
    description: "Foto-uitstalling deur plaaslike fotograwe wat die skoonheid van die Vrystaat vasgevang het. Vrye toegang. Die uitstalling loop tot 15 April.",
    imageUrl: "https://images.unsplash.com/photo-1760008018988-9a8d0bf45552?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-25",
    organiser: "Oliewenhuis",
    isFree: true
  },
  {
    id: 16,
    title: 'Senior geselligheid',
    date: 'Elke Woe',
    time: '10:00 - 12:00',
    location: 'Gemeenskapsaal, Westdene',
    category: 'Plaaslik',
    description: "Weeklikse geselligheid vir senior burgers. Tee, koek, speletjies en goeie geselskap. Vervoer kan gereël word.",
    contactEmail: "info@diepapier.co.za",
    imageUrl: "https://images.unsplash.com/photo-1628155930542-4d7499648939?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-04",
    organiser: "Die Papier",
    isFree: true
  },
  {
    id: 17,
    title: 'Tegnologie-werkwinkel vir seniors',
    date: '05 Mrt',
    time: '09:00 - 11:00',
    location: 'Bloemfontein Biblioteek',
    category: 'Plaaslik',
    description: "Gratis werkwinkel om senior burgers te help met slimfone, WhatsApp en aanlyn-bankwese. Bring jou eie foon — geduld en koffie word verskaf!",
    imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-05",
    organiser: "Bloemfontein Biblioteek",
    isFree: true
  },
  {
    id: 18,
    title: 'Vrystaat gholfdag',
    date: '20 Mrt',
    time: '07:00 - 15:00',
    location: 'Bloemfontein Gholfklub',
    category: 'Sport',
    description: "Jaarlikse liefdadigheids-gholfdag ten bate van die Vrystaat Kinderhuis. Vierbal-formaat, R800 per speler (sluit middagete in). Borgskappe welkom.",
    imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=800",
    eventDate: "2026-03-20",
    organiser: "Vrystaat Kinderhuis",
    price: "R800"
  },
];