export const COMMENTS_UI = {
  header: "Kommentaar",
  auth: {
    loggedInAs: "Aangemeld as",
    demoTag: "Demo",
    visitorView: "Besoeker-aansig",
    toggleTitle: "Wissel tussen aangemelde en afgemelde aansig (demonstrasie)"
  },
  loggedOut: {
    title: "Sluit aan by die gesprek",
    description: "Om kommentaar te lewer op artikels moet jy geregistreer en aangemeld wees. Registrasie is gratis en neem slegs 'n minuut. Deur te registreer kan jy deelneem aan besprekings, artikels stoor en 'n persoonlike leeservaring geniet op <em>Die Papier</em>.",
    registerButton: "Registreer gratis",
    loginPrompt: "Reeds geregistreer?",
    loginLink: "Meld aan"
  },
  loggedIn: {
    placeholder: "Deel jou gedagtes oor hierdie artikel...",
    prompt: "Laat jou kommentaar hieronder",
    submitButton: "Plaas kommentaar"
  },
  moderation: {
    prefix: "Alle kommentare word gemodereer volgens ons",
    linkText: "kommentaarbeleid"
  },
  actions: {
    reply: "Antwoord",
    report: "Rapporteer",
    reportTooltip: "Rapporteer kommentaar",
    cancel: "Kanselleer"
  },
  messages: {
    empty: "Wees die eerste om kommentaar te lewer op hierdie artikel",
    registerToComment: "Registreer om te kommentaar",
    submitSuccess: "Jou kommentaar is ingedien en sal gemodereer word voordat dit gepubliseer word.",
    replySuccess: "Jou antwoord is ingedien vir moderering.",
    loginRequiredLike: "Meld asseblief aan om artikels te hou.",
    loginRequiredReply: "Meld asseblief aan om te antwoord.",
    reportComingSoon: "Rapporteer funksionaliteit kom binnekort beskikbaar",
    enterComment: "Voer asseblief 'n kommentaar in"
  },
  mockUser: "Jan de Wet"
};

export const MOCK_COMMENTS = [
  {
    id: 1,
    author: 'Pieter van der Merwe',
    avatarColor: 'bg-primary',
    content: 'Baie interessante artikel! Dankie vir die insiggewende verslagdoening. Ek waardeer die deeglike navorsing.',
    timestamp: '2 uur gelede',
    likes: 12,
    replies: [
      {
        id: 2,
        author: 'Anna Kruger',
        avatarColor: 'bg-[var(--wp--preset--color--secondary-accent)]',
        content: 'Ek stem saam, uitstekende werk deur die span!',
        timestamp: '1 uur gelede',
        likes: 5,
      }
    ]
  },
  {
    id: 3,
    author: 'Johan Botha',
    avatarColor: 'bg-[#2D6A4F]',
    content: 'Sal graag meer wil lees oor hierdie onderwerp. Is daar opvolgartikels beplan?',
    timestamp: '4 uur gelede',
    likes: 8,
  },
  {
    id: 4,
    author: 'Marietjie de Villiers',
    avatarColor: 'bg-[var(--wp--preset--color--secondary-accent)]',
    content: 'Dankie vir die objektiewe verslagdoening. Dit is verfrissend om goed-nagevorsde joernalistiek te lees.',
    timestamp: '6 uur gelede',
    likes: 15,
  }
];