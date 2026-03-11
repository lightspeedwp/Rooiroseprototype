/**
 * Page-specific FAQ data for Die Papier
 * Each page has its own FAQ section with relevant questions in Afrikaans
 */

export interface PageFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PageFAQSection {
  pageId: string;
  title: string;
  description?: string;
  items: PageFAQItem[];
}

// ─── Oor Ons (About) ───────────────────────────────────────
export const ABOUT_FAQS: PageFAQItem[] = [
  {
    id: 'about-1',
    question: 'Hoe teken ek in op <em>Die Papier</em>?',
    answer: 'Vir huisaflewering klik op die knoppie "Huisaflewering" bo-aan die tuisblad. Die skakel vir die e-koerant is op die tuisblad.'
  },
  {
    id: 'about-2',
    question: 'Wat kos \'n intekening?',
    answer: 'Huisaflewering kos vanaf R140 per maand. Die e-koerant kos R35 per uitgawe.'
  },
  {
    id: 'about-3',
    question: 'Wanneer word die koerant afgelewer?',
    answer: 'Koerante word Vrydagoggende afgelewer. Dit is ook Vrydae in winkels te koop, waar dit vir etlike dae daarna op die rak sal bly.'
  },
  {
    id: 'about-4',
    question: 'In watter gebiede lewer julle af?',
    answer: 'Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. Bel 087 353 1291 of stuur \'n e-pos na <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a> om dekking te bevestig.'
  },
  {
    id: 'about-5',
    question: 'Hoe plaas ek \'n advertensie?',
    answer: 'Besoek ons \'Adverteer\'-bladsy vir tariewe en kontakbesonderhede, of stuur \'n e-pos na <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a>.'
  },
  {
    id: 'about-6',
    question: 'Hoe stuur ek \'n brief aan die redakteur?',
    answer: 'Briewe kan gestuur word na <a href="mailto:lesers@diepapier.co.za">lesers@diepapier.co.za</a>. Hou asseblief briewe korter as 300 woorde.'
  }
];

// ─── Kontak (Contact) ───────────────────────────────────────
export const CONTACT_FAQS: PageFAQItem[] = [
  {
    id: 'contact-1',
    question: 'Wat is <em>Die Papier</em> se kantoorure?',
    answer: 'Ons kantoor is oop Maandag tot Vrydag van 08:00 tot 17:00. Naweke en openbare vakansiedae is ons gesluit, maar u kan steeds \'n e-pos stuur en ons sal so gou moontlik reageer.'
  },
  {
    id: 'contact-2',
    question: 'Hoe lank neem dit om \'n antwoord te kry?',
    answer: 'Ons streef daarna om binne 24-48 werkure op alle navrae te reageer. Dringende nuuswenke word onmiddellik hanteer.'
  },
  {
    id: 'contact-3',
    question: 'Hoe stuur ek \'n nuuswenk?',
    answer: 'Stuur jou nuuswenk na <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> of gebruik die "Stuur Nuus" vorm op ons webwerf. Voeg asseblief soveel inligting as moontlik by, insluitend foto\'s indien beskikbaar.'
  },
  {
    id: 'contact-4',
    question: 'Hoe stuur ek \'n brief aan die redakteur?',
    answer: 'Lesersbriewe kan gestuur word na <a href="mailto:lesers@diepapier.co.za">lesers@diepapier.co.za</a>. Hou asseblief briewe korter as 300 woorde en sluit jou volle naam en kontaknommer in.'
  },
  {
    id: 'contact-5',
    question: 'Hoe plaas ek \'n regskennisgewing?',
    answer: 'Vir regskennisgewings, stuur \'n e-pos na <a href="mailto:nico.flietoor@diepapier.co.za">nico.flietoor@diepapier.co.za</a>.'
  }
];

// ─── Adverteer (Advertise) ──────────────────────────────────
export const ADVERTISE_FAQS: PageFAQItem[] = [
  {
    id: 'adv-1',
    question: 'Watter advertensie-opsies bied <em>Die Papier</em> aan?',
    answer: 'Ons bied \'n wye reeks advertensie-opsies aan, insluitend vertoonadvertensies (druk en aanlyn), geklassifiseerde advertensies, geborgde inhoud, pamflette, bylaes en borgskappe. Elke opsie kan aangepas word om by jou begroting en doelgehoor te pas.'
  },
  {
    id: 'adv-2',
    question: 'Hoe groot is <em>Die Papier</em> se leserstal?',
    answer: 'Novus Media se publikasies het \'n gesamentlike weeklikse bereik van byna 4 miljoen lesers in beide druk- en aanlynformate. <em>Die Papier</em> bied \'n nasionale platform wat spesifiek Afrikaanse lesers teiken.'
  },
  {
    id: 'adv-3',
    question: 'Hoe kontak ek die advertensiespan?',
    answer: 'Stuur \'n e-pos na <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a> of <a href="mailto:coleen.cilliers@diepapier.co.za">coleen.cilliers@diepapier.co.za</a>. U kan ook die advertensienavorsingsvorm op ons webwerf invul en ons sal u kontak.'
  },
  {
    id: 'adv-4',
    question: 'Wat is die sluitingsdatums vir advertensies?',
    answer: 'Advertensiemateriaal moet gewoonlik teen Woensdagoggend ingedien word vir die Vrydag-uitgawe. Kontak ons advertensiespan vir spesifieke sluitingsdatums en vereistes.'
  },
  {
    id: 'adv-5',
    question: 'Bied julle digitale advertensie-opsies aan?',
    answer: 'Ja, ons bied verskeie digitale advertensie-opsies aan, insluitend banieradvertensies op ons webwerf, nuusbrief-borgskappe, en sosiale media-veldtogte. Kontak ons vir \'n pasgemaakte digitale advertensiestrategie.'
  }
];

// ─── Gebeure (Events) ───────────────────────────────────────
export const EVENTS_FAQS: PageFAQItem[] = [
  {
    id: 'events-1',
    question: 'Hoe dien ek \'n gebeurtenis in?',
    answer: 'Gebruik die "Dien gebeurtenis in" knoppie op ons geburtenisbladsy om jou gebeurtenis in te dien. Vul die vorm volledig in met die datum, tyd, plek en \'n kort beskrywing. Ons redaksie sal dit hersien voordat dit gepubliseer word.'
  },
  {
    id: 'events-2',
    question: 'Is dit gratis om \'n gebeurtenis te lys?',
    answer: 'Ja, basiese gebeurtenislysting is gratis. Vir prominente plasing of geborgte gebeurtenisse, kontak ons advertensiespan vir tariewe.'
  },
  {
    id: 'events-3',
    question: 'Hoe lank voor die tyd moet ek \'n gebeurtenis indien?',
    answer: 'Ons beveel aan dat jy jou gebeurtenis minstens twee weke voor die datum indien om voldoende tyd vir hersiening en publisering te gee.'
  },
  {
    id: 'events-4',
    question: 'Kan ek my ingediende gebeurtenis wysig?',
    answer: 'Kontak ons by <a href="mailto:gebeure@diepapier.co.za">gebeure@diepapier.co.za</a> met die besonderhede van die wysiging wat jy wil maak. Ons sal die veranderinge vir jou aanbring.'
  }
];

// ─── E-Uitgawes (E-Editions) ────────────────────────────────
export const EEDITIONS_FAQS: PageFAQItem[] = [
  {
    id: 'eed-1',
    question: 'Wat is \'n e-uitgawe?',
    answer: '\'n e-uitgawe is \'n volledige digitale weergawe van <em>Die Papier</em> se gedrukte koerant. Dit bevat alle inhoud van die drukkoerant en kan op enige toestel gelees word — rekenaars, tablette en slimfone. Die drukkoerant verskyn Vrydag in die winkels.'
  },
  {
    id: 'eed-2',
    question: 'Hoe koop ek \'n e-uitgawe?',
    answer: '\'n Enkele e-uitgawe kos R35 — dit is \'n eenmalige aankoop, geen intekening nodig nie. Klik op die "Koop" knoppie by die uitgawe van u keuse. Wil u eerder inteken vir deurlopende toegang, besoek die Inteken-bladsy vir pakkette vanaf R140 per maand.'
  },
  {
    id: 'eed-3',
    question: 'Kan ek \'n e-uitgawe aflaai?',
    answer: 'Ja, nadat u \'n e-uitgawe gekoop het, kan u dit aflaai as \'n PDF-lêer om vanlyn te lees. Die aflaai is onbeperkte kere beskikbaar.'
  },
  {
    id: 'eed-4',
    question: 'Hoe lank het ek toegang tot \'n gekoopte e-uitgawe?',
    answer: 'Nadat u \'n e-uitgawe gekoop het, het u onbeperkte toegang daartoe. Dit sal altyd in u "My Biblioteek" beskikbaar wees.'
  },
  {
    id: 'eed-5',
    question: 'Wat is die verskil tussen \'n enkele e-uitgawe en \'n intekening?',
    answer: '\'n Enkele e-uitgawe kos R35 en is \'n eenmalige aankoop — u koop net die spesifieke uitgawe wat u wil lees. \'n Intekening (vanaf R140/maand) gee u toegang tot alle e-uitgawes wat gepubliseer word vanaf u intekeningdatum. Kies u streek by intekening.'
  }
];

// ─── Weer (Weather) ─────────────────────────────────────────
export const WEATHER_FAQS: PageFAQItem[] = [
  {
    id: 'weer-1',
    question: 'Hoe gereeld word die weervoorspelling opgedateer?',
    answer: 'Ons weerdata word elke paar uur opgedateer om die mees akkurate voorspelling moontlik te bied. Die 7-dag vooruitsig word daagliks hersien.'
  },
  {
    id: 'weer-2',
    question: 'Watter streke se weer word gedek?',
    answer: 'Ons dek die weer vir alle groot stede en dorpe in Suid-Afrika, met \'n fokus op die streke waar <em>Die Papier</em> se lesers woon, insluitend die Vrystaat, Kaapse Skiereiland, Boland, Oos-Kaap en Noord-Kaap.'
  },
  {
    id: 'weer-3',
    question: 'Waar kom die weerdata vandaan?',
    answer: 'Ons weerdata word verskaf deur betroubare meteorologiese dienste en word aangevul deur die Suid-Afrikaanse Weerdiens se amptelike voorspellings.'
  }
];

// ─── Span (Team) ────────────────────────────────────────────
export const TEAM_FAQS: PageFAQItem[] = [
  {
    id: 'team-1',
    question: 'Hoe kontak ek \'n spesifieke joernalis?',
    answer: 'U kan \'n joernalis direk bereik deur \'n e-pos na die redaksie te stuur by <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> met die joernalis se naam in die onderwerplyn.'
  },
  {
    id: 'team-2',
    question: 'Aanvaar <em>Die Papier</em> vryskutwerk?',
    answer: 'Ja, ons is altyd op die uitkyk vir talentvolle vryskutjoernaliste en bydraers. Stuur jou CV en voorbeelde van vorige werk na <a href="mailto:redaksie@diepapier.co.za">redaksie@diepapier.co.za</a>.'
  },
  {
    id: 'team-3',
    question: 'Hoe word die redaksionele onafhanklikheid verseker?',
    answer: '<em>Die Papier</em> se redaksie werk onafhanklik van die besigheids- en advertensie-afdelings. Alle redaksionele besluite word geneem op grond van nuuswaardigheid en joernalistieke meriete.'
  }
];

// ─── Intekeningsopsies (Subscribe Options) ────────────────
export const SUBSCRIBE_FAQS: PageFAQItem[] = [
  {
    id: 'sub-1',
    question: 'Watter intekeningsopsies is beskikbaar?',
    answer: 'Ons bied twee hoofopsies: (1) Huisaflewering van \'n gedrukte koerant is vanaf R140 per maand — kontak On the Dot direk by 087 353 1291 of diepapierintekening@onthedot.co.za. (2) \'n Elektroniese e-koerant kos R35 per uitgawe, of teken in vanaf R140 per maand vir toegang tot alle e-uitgawes vanaf u intekeningdatum. Aflewering en digitale intekening is afsonderlike produkte.'
  },
  {
    id: 'sub-2',
    question: 'Kan ek my intekening enige tyd kanselleer?',
    answer: 'Ja, u kan u intekening enige tyd kanselleer. Indien u binne die eerste 14 dae kanselleer, ontvang u \'n volle terugbetaling. Daarna word u intekening aan die einde van die huidige betaalperiode gestaak.'
  },
  {
    id: 'sub-3',
    question: 'Hoe werk tuisaflewering?',
    answer: 'Tuisaflewering word hanteer deur On the Dot, ons afleweringsmaatskappy. Die koerant word elke Vrydag voor 10:00 by u voordeur afgelewer. Huisaflewering begin vanaf R140 per maand. Aflewering sluit nie digitale e-uitgawe-toegang in nie — dit is \'n afsonderlike produk. Vir navrae, e-pos <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a>.'
  },
  {
    id: 'sub-4',
    question: 'Watter betaalmetodes word aanvaar?',
    answer: 'Ons aanvaar kredietkaarte (Visa, Mastercard), debietorders, en EFT-betalings. Alle aanlyn betalings word deur \'n veilige betaalplatform verwerk.'
  },
  {
    id: 'sub-5',
    question: 'Kan ek \'n geskenk-intekening koop?',
    answer: 'Ja, ons bied geskenk-intekenings aan. Kontak ons by <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a> vir meer besonderhede.'
  },
  {
    id: 'sub-6',
    question: 'Hoeveel kos \'n enkele e-koerant?',
    answer: '\'n Enkele elektroniese e-koerant kos R35 per uitgawe. U kan dit koop by die E-uitgawes bladsy en onmiddellik aflaai as \'n PDF om op enige toestel te lees.'
  },
  {
    id: 'sub-7',
    question: 'Wat is die verskil tussen die e-koerant-intekening en huisaflewering?',
    answer: 'Die e-koerant-intekening (vanaf R140/maand) gee u digitale toegang tot elke uitgawe vanaf u intekeningdatum. Huisaflewering (ook vanaf R140/maand) lewer die gedrukte koerant elke Vrydag by u huis af. Dit is twee afsonderlike produkte — huisaflewering sluit nie digitale toegang in nie. Vir huisaflewering, kontak On the Dot direk.'
  }
];

// ─── Inteken Aflewering (Subscribe Delivery) ────────────────
export const SUBSCRIBE_DELIVERY_FAQS: PageFAQItem[] = [
  {
    id: 'del-1',
    question: 'Hoeveel kos huisaflewering?',
    answer: 'Huisaflewering van \'n gedrukte koerant is vanaf R140 per maand (debietorder). Langer intekenperiodes: 3 maande vir R455, 6 maande vir R910, of 12 maande vir R1 820 (debietorder of EFT). Aflewering word hanteer deur On the Dot en sluit nie digitale e-uitgawe-toegang in nie.'
  },
  {
    id: 'del-2',
    question: 'In watter areas word aflewering aangebied?',
    answer: 'Ons lewer af in die groter metro-gebiede en sommige omliggende dorpe. Bel 087 353 1291 of stuur \'n e-pos na <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a> om te bevestig of ons in jou area aflewer.'
  },
  {
    id: 'del-3',
    question: 'Wanneer word die koerant afgelewer?',
    answer: '<em>Die Papier</em> word elke Vrydag tussen 05:00 en 08:00 by jou voordeur afgelewer. In sommige landelike gebiede kan aflewering tot 10:00 neem.'
  },
  {
    id: 'del-4',
    question: 'Wat gebeur as ek met vakansie gaan?',
    answer: 'U kan u aflewering tydelik opskort deur ons by <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a> in kennis te stel minstens 5 werksdae voor die tyd. U intekening word verleng met die tydperk wat u dit opskort.'
  },
  {
    id: 'del-5',
    question: 'Sluit aflewering digitale toegang in?',
    answer: 'Nee, huisaflewering en digitale e-uitgawe-toegang is afsonderlike produkte. Vir digitale toegang, koop individuele e-uitgawes vir R35 elk by die E-uitgawes bladsy, of teken in vanaf R140 per maand by die Inteken bladsy.'
  },
  {
    id: 'del-6',
    question: 'Hoe kanselleer ek my afleveringsintekening?',
    answer: 'U kan u intekening enige tyd kanselleer deur \'n e-pos te stuur na <a href="mailto:diepapierintekening@onthedot.co.za">diepapierintekening@onthedot.co.za</a>. Indien u binne die eerste 14 dae kanselleer, ontvang u \'n volle terugbetaling. Daarna word u intekening aan die einde van die huidige betaalperiode gestaak.'
  }
];

// ─── Ontwerp Grondslag (Design Foundations) ─────────────────
export const FOUNDATIONS_FAQS: PageFAQItem[] = [
  {
    id: 'found-1',
    question: 'Wat is die doel van hierdie bladsy?',
    answer: 'Die Ontwerp Grondslag-bladsy dokumenteer die ontwerp-tokens en standaarde vir <em>Die Papier</em> se webwerf. Dit dien as verwysing vir ontwerpers en ontwikkelaars om konsekwente visuele implementering te verseker.'
  },
  {
    id: 'found-2',
    question: 'Watter lettertipes gebruik <em>Die Papier</em>?',
    answer: '<em>Die Papier</em> gebruik twee hooflettertipes: Roboto Serif vir opskrifte en merknaam-elemente, en Inter vir liggaamsteks en UI-elemente. Beide lettertipes word via Google Fonts gelaai.'
  },
  {
    id: 'found-3',
    question: 'Wat is die handelsmerkkleure?',
    answer: 'Die primêre handelsmerkkleure is Navy (#172134) vir hoofopskrifte en die hoofkop, en Rooi (#E82C27) vir aksent-elemente, knoppies en interaktiewe hoogtepunte.'
  }
];

// ─── Doodsberrigte (Obituaries) ─────────────────────────────
export const OBITUARIES_FAQS: PageFAQItem[] = [
  {
    id: 'obit-1',
    question: 'Hoe plaas ek \'n doodsberig in <em>Die Papier</em>?',
    answer: 'Stuur die oorledene se besonderhede, \'n kort lewensbeskrywing, en \'n foto (opsioneel) na <a href="mailto:doodsberrigte@diepapier.co.za">doodsberrigte@diepapier.co.za</a>. Ons sal u kontak om die plasing en koste te bespreek.'
  },
  {
    id: 'obit-2',
    question: 'Hoeveel kos \'n doodsberig?',
    answer: 'Tariewe wissel na gelang van die grootte en formaat van die plasing. Kontak ons by <a href="mailto:doodsberrigte@diepapier.co.za">doodsberrigte@diepapier.co.za</a> vir \'n kwotasie.'
  },
  {
    id: 'obit-3',
    question: 'Hoe lank bly \'n doodsberig aanlyn?',
    answer: 'Alle doodsberrigte bly permanent op ons webwerf beskikbaar as \'n blywende aandenking aan die oorledene.'
  }
];

// ─── Multimedia ─────────────────────────────────────────────
export const MULTIMEDIA_FAQS: PageFAQItem[] = [
  {
    id: 'media-1',
    question: 'Watter tipe multimedia-inhoud bied <em>Die Papier</em> aan?',
    answer: 'Ons bied video-verslae, foto-galerye en podcasts aan. Dit sluit in nuusonderhoude, dokumentêre kortverhale, foto-essays van plaaslike gebeure, en ons weeklikse podcast-reeks.'
  },
  {
    id: 'media-2',
    question: 'Hoe gereeld word nuwe video\'s en podcasts gepubliseer?',
    answer: 'Ons publiseer nuwe video-inhoud daagliks met die groot nuusverhale van die dag. Podcasts verskyn weekliks, gewoonlik op Dinsdae en Vrydae.'
  },
  {
    id: 'media-3',
    question: 'Kan ek my eie video of foto\'s instuur?',
    answer: 'Ja! Stuur u beeldmateriaal na <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a>. Sluit asseblief \'n beskrywing, die datum, en u kontakbesonderhede in. Ons sal u krediet gee indien dit gepubliseer word.'
  }
];

// ─── Nuusbrief (Newsletter) ─────────────────────────────────
export const NEWSLETTER_FAQS: PageFAQItem[] = [
  {
    id: 'news-1',
    question: 'Wat ontvang ek in die nuusbrief?',
    answer: 'Ons daaglikse nuusbrief bevat \'n opsomming van die dag se belangrikste stories, eksklusiewe inhoud, en skakels na ons topverhale. U sal ook spesiale aanbiedinge en gebeurtenisskakels ontvang.'
  },
  {
    id: 'news-2',
    question: 'Hoe gereeld word die nuusbrief gestuur?',
    answer: 'Ons stuur \'n daaglikse nuusbrief Maandag tot Vrydag, plus \'n weeklikse weekendopsomming elke Saterdagoggend.'
  },
  {
    id: 'news-3',
    question: 'Hoe teken ek af van die nuusbrief?',
    answer: 'U kan enige tyd afteken deur op die "Teken af" skakel onderaan enige nuusbrief te klik, of deur u nuusbriefvoorkeure op u rekeningbladsy te bestuur.'
  }
];

// ─── Nuusbrief-argief (Newsletter Archive) ──────────────────
export const NEWSLETTER_ARCHIVE_FAQS: PageFAQItem[] = [
  {
    id: 'narch-1',
    question: 'Hoe ver terug gaan die nuusbrief-argief?',
    answer: 'Ons nuusbrief-argief bevat alle uitgawes sedert die eerste een. U kan deur vorige uitgawes blaai en hulle aanlyn lees.'
  },
  {
    id: 'narch-2',
    question: 'Kan ek inteken op die nuusbrief?',
    answer: 'Ja! Besoek ons nuusbrief-inskrywingsbladsy of klik op "Teken in" op enige argief-uitgawe. U sal dan elke week ons nuusbrief per e-pos ontvang.'
  },
  {
    id: 'narch-3',
    question: 'In watter formate is die nuusbrief beskikbaar?',
    answer: 'Ons nuusbriewe kan aanlyn in u blaaier gelees word. U ontvang ook \'n volledige HTML-weergawe per e-pos wanneer u ingeteken is.'
  }
];

// ─── Beleid (Policies) ──────────────────────────────────────
export const POLICIES_FAQS: PageFAQItem[] = [
  {
    id: 'pol-1',
    question: 'Hoe beskerm <em>Die Papier</em> my persoonlike inligting?',
    answer: 'Ons voldoen aan die Beskerming van Persoonlike Inligting Wet (POPIA) en neem streng maatreëls om u data te beskerm. Lees ons volledige Privaatheidsbeleid vir meer besonderhede.'
  },
  {
    id: 'pol-2',
    question: 'Wat is <em>Die Papier</em> se kommentaarbeleid?',
    answer: 'Ons moedig respekvolle dialoog aan. Kommentare word gemodereer en moet voldoen aan ons Kommentaarbeleid. Haatspraak, beledigings en misleidende inligting word nie toegelaat nie.'
  },
  {
    id: 'pol-3',
    question: 'Hoe dien ek \'n klagte oor \'n artikel in?',
    answer: 'U kan \'n klagte rig aan die Persraad van Suid-Afrika by <a href="mailto:enquiries@ombudsman.org.za">enquiries@ombudsman.org.za</a>. U kan ook direk aan ons redaksie skryf by <a href="mailto:lesers@diepapier.co.za">lesers@diepapier.co.za</a>.'
  }
];

// ─── Verkeer (Traffic) ──────────────────────────────────────
export const TRAFFIC_FAQS: PageFAQItem[] = [
  {
    id: 'traffic-1',
    question: 'Hoe gereeld word verkeersinligting opgedateer?',
    answer: 'Ons verkeerskaart en waarskuwings word intyds opgedateer. Padsluitings en ongelukke word so gou moontlik gerapporteer sodra ons dit bevestig het.'
  },
  {
    id: 'traffic-2',
    question: 'Hoe kan ek \'n padongeluk of padsluiting rapporteer?',
    answer: 'Stuur \'n WhatsApp-boodskap na ons nuuslynommer of e-pos <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> met die ligging, tyd en \'n kort beskrywing. Foto\'s is baie welkom.'
  },
  {
    id: 'traffic-3',
    question: 'Dek julle alle hoofpaaie?',
    answer: 'Ons fokus op die hoofroetes en snelweë in die streke waar ons lesers woon. Dit sluit nasionale roetes (N-paaie) en belangrike streeksroetes in.'
  }
];

// ─── Kompetisies (Competitions) ──────────────────────────────
export const COMPETITIONS_FAQS: PageFAQItem[] = [
  {
    id: 'comp-1',
    question: 'Hoe skryf ek in vir \'n kompetisie?',
    answer: 'Besoek die kompetisiebladsy, vul die inskrywingsvorm in met jou besonderhede, en beantwoord die maklike vraag. Maak seker jy lees die volledige terme en voorwaardes voordat jy inskryf.'
  },
  {
    id: 'comp-2',
    question: 'Hoeveel keer mag ek inskryf?',
    answer: 'Slegs een inskrywing per persoon per kompetisie word toegelaat, tensy anders vermeld in die spesifieke kompetisie se terme en voorwaardes.'
  },
  {
    id: 'comp-3',
    question: 'Hoe word wenners aangekondig?',
    answer: 'Wenners word per e-pos en/of telefoon in kennis gestel. Wenneraankondigings word ook op ons webwerf en sosiale media gepubliseer.'
  },
  {
    id: 'comp-4',
    question: 'Is die pryse oordraagbaar?',
    answer: 'Nee, pryse is nie oordraagbaar of vir kontant inwisselbaar nie, tensy anders vermeld in die spesifieke kompetisie se terme en voorwaardes.'
  }
];

// ─── Stuur in (Submit Content) ───────────────────────────────
export const SUBMIT_FAQS: PageFAQItem[] = [
  {
    id: 'submit-1',
    question: 'Wat kan ek by <em>Die Papier</em> instuur?',
    answer: 'Jy kan nuusstories, lesersbriefs (briefs aan die redakteur), terugvoer oor ons dekking, en shoutouts aan spesiale mense instuur. Besoek die "Stuur in" bladsy vir al die opsies.'
  },
  {
    id: 'submit-2',
    question: 'Hoe lank neem dit voordat my inskrywing gepubliseer word?',
    answer: 'Alle inskrywings word deur ons redaksionele span nagegaan. Lesersbriefs en stories word gewoonlik binne 1-2 weke verwerk. Ons sal jou kontak as jou storie gekies word vir publikasie.'
  },
  {
    id: 'submit-3',
    question: 'Word my persoonlike inligting vertroulik gehou?',
    answer: 'Ja, jou persoonlike besonderhede word vertroulik hanteer volgens <em>Die Papier</em> se privaatheidsbeleid. Ons publiseer slegs jou naam en dorp as jy toestemming gee.'
  }
];

// ─── Stuur Storie In (Submit Story) ─────────────────────────
export const SUBMIT_STORY_FAQS: PageFAQItem[] = [
  {
    id: 'story-1',
    question: 'Watter soort stories soek <em>Die Papier</em>?',
    answer: '<em>Die Papier</em> verwelkom nuuswenke, menseverhale, ondersoekende joernalistiek-wenke en plaaslike nuus wat ons lesers raak. Ons fokus op stories wat relevant is vir Afrikaanse lesers regoor Suid-Afrika.'
  },
  {
    id: 'story-2',
    question: 'Moet ek \'n joernalis wees om \'n storie in te stuur?',
    answer: 'Nee, enigeen kan \'n nuuswenk of storie by <em>Die Papier</em> instuur. Ons redaksionele span sal die inhoud verwerk en verfyn vir publikasie. Ons waardeer bydraes van alle lesers.'
  },
  {
    id: 'story-3',
    question: 'Kan ek foto\'s saam met my storie stuur?',
    answer: 'Ja, foto\'s word sterk aangemoedig. Laai hoëresolusie-beelde op saam met jou storie-indiening. Maak seker dat jy die reg het om die foto\'s te deel.'
  },
  {
    id: 'story-4',
    question: 'Word ek betaal vir my storie?',
    answer: 'Nuuswenke en lesersbydraes word gewoonlik nie vergoed nie. Vir vryskutjoernaliste wat gereeld wil bydra, kontak die redaksie by <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> vir moontlike reëlings.'
  }
];

// ─── Stuur Lesersbrief In (Submit Letter) ───────────────────
export const SUBMIT_LETTER_FAQS: PageFAQItem[] = [
  {
    id: 'letter-1',
    question: 'Hoe lank mag my lesersbrief wees?',
    answer: '<em>Die Papier</em> beveel aan dat lesersbriefs korter as 300 woorde is. Langer briewe mag ingekort word deur die redaksie.'
  },
  {
    id: 'letter-2',
    question: 'Sal my brief geredigeer word?',
    answer: 'Ja, <em>Die Papier</em> behou die reg om briewe te redigeer vir lengte, grammatika en styl. Die kernboodskap van jou brief sal behoue bly.'
  },
  {
    id: 'letter-3',
    question: 'Word my volle naam gepubliseer?',
    answer: 'Ja, lesersbriefs word gewoonlik met jou volle naam en woonplek gepubliseer. Anonieme briewe word slegs in uitsonderlike gevalle oorweeg — kontak die redaksie direk as jy bekommerd is.'
  }
];

// ─── Stuur Terugvoer In (Submit Feedback) ───────────────────
export const SUBMIT_FEEDBACK_FAQS: PageFAQItem[] = [
  {
    id: 'feedback-1',
    question: 'Watter tipe terugvoer kan ek stuur?',
    answer: 'Jy kan terugvoer stuur oor <em>Die Papier</em> se dekking, feitlike foute in artikels, voorstelle vir verbetering, of algemene kommentaar. Ons waardeer alle konstruktiewe terugvoer.'
  },
  {
    id: 'feedback-2',
    question: 'Sal ek \'n antwoord ontvang op my terugvoer?',
    answer: '<em>Die Papier</em> se redaksie lees alle terugvoer, maar ons kan nie op elke boodskap individueel reageer nie. As jou terugvoer \'n spesifieke regstelling vereis, sal ons jou kontak.'
  },
  {
    id: 'feedback-3',
    question: 'Hoe verskil terugvoer van \'n formele klagte?',
    answer: 'Terugvoer is informeel en help ons om te verbeter. Vir \'n formele klagte oor \'n artikel, gebruik <em>Die Papier</em> se klagteprosedure of kontak die Persraad van Suid-Afrika direk.'
  }
];

// ─── Stuur Shoutout In (Submit Shoutout) ────────────────────
export const SUBMIT_SHOUTOUT_FAQS: PageFAQItem[] = [
  {
    id: 'shoutout-1',
    question: 'Wat is \'n shoutout?',
    answer: '\'n Shoutout is \'n kort erkenning of gelukwensing aan \'n spesiale persoon wat in <em>Die Papier</em> gepubliseer word. Dit kan vir \'n verjaarsdag, prestasie, of bloot om iemand te bedank wees.'
  },
  {
    id: 'shoutout-2',
    question: 'Kos dit iets om \'n shoutout te plaas?',
    answer: 'Basiese shoutouts word gratis geplaas in <em>Die Papier</em> se aanlynuitgawe. Vir plasing in die gedrukte koerant, kontak ons advertensiespan vir tariewe.'
  },
  {
    id: 'shoutout-3',
    question: 'Hoe lank neem dit voor my shoutout verskyn?',
    answer: 'Aanlyn-shoutouts word gewoonlik binne 2-3 werksdae verwerk. Gedrukte shoutouts verskyn in die volgende beskikbare Vrydag-uitgawe van <em>Die Papier</em>.'
  }
];

// ─── Stuur Gebeurtenis In (Submit Event) ────────────────────
export const SUBMIT_EVENT_FAQS: PageFAQItem[] = [
  {
    id: 'event-sub-1',
    question: 'Watter tipe gebeurtenisse kan ek indien?',
    answer: 'Jy kan enige plaaslike of streeksgebeurtenis by <em>Die Papier</em> indien, insluitend plaaslike geleenthede, sportwedstryde, kunsfeeste, markte, sake-geleenthede, skoolaktiwiteite en meer.'
  },
  {
    id: 'event-sub-2',
    question: 'Is dit gratis om \'n gebeurtenis te lys?',
    answer: 'Ja, basiese gebeurtenislysting op <em>Die Papier</em> se webwerf is gratis. Vir prominente plasing of geborgte gebeurtenisse in die gedrukte koerant, kontak ons advertensiespan vir tariewe.'
  },
  {
    id: 'event-sub-3',
    question: 'Hoe lank voor die tyd moet ek \'n gebeurtenis indien?',
    answer: 'Ons beveel aan dat jy jou gebeurtenis minstens twee weke voor die datum by <em>Die Papier</em> indien om voldoende tyd vir hersiening en publisering te gee.'
  },
  {
    id: 'event-sub-4',
    question: 'Kan ek \'n plakkaat of foto saam stuur?',
    answer: 'Ja, laai \'n hoëresolusie-beeld (JPG of PNG, tot 5MB) op saam met jou indiening. Dit sal saam met jou gebeurtenis op <em>Die Papier</em> se kalender vertoon word.'
  },
  {
    id: 'event-sub-5',
    question: 'Kan ek my ingediende gebeurtenis wysig of kanselleer?',
    answer: 'Kontak <em>Die Papier</em> by <a href="mailto:gebeure@diepapier.co.za">gebeure@diepapier.co.za</a> met die besonderhede van die wysiging of kansellasie. Ons sal die veranderinge vir jou aanbring.'
  }
];

// ─── Adverteer: Geklassifiseerd (Classifieds) ───────────────
export const CLASSIFIEDS_FAQS: PageFAQItem[] = [
  {
    id: 'class-1',
    question: 'Hoe plaas ek \'n geklassifiseerde advertensie in <em>Die Papier</em>?',
    answer: 'Stuur jou advertensieteks na <a href="mailto:geklassifiseerd@diepapier.co.za">geklassifiseerd@diepapier.co.za</a> of vul die navraagvorm op <em>Die Papier</em> se adverteerbladsy in. Ons span sal jou binnekort kontak met \'n kwotasie.'
  },
  {
    id: 'class-2',
    question: 'Watter kategorieë is beskikbaar vir geklassifiseerde advertensies?',
    answer: '<em>Die Papier</em> bied geklassifiseerde kategorieë aan soos Vakatures, Eiendom, Voertuie, Dienste, Kennisgewings en meer. Kontak ons vir die volledige lys.'
  },
  {
    id: 'class-3',
    question: 'Verskyn my geklassifiseerde advertensie ook aanlyn?',
    answer: 'Ja, alle geklassifiseerde advertensies in <em>Die Papier</em> se gedrukte uitgawe word ook outomaties aanlyn gelys vir bykomende blootstelling.'
  },
  {
    id: 'class-4',
    question: 'Wat is die spertyd vir geklassifiseerde advertensies?',
    answer: 'Geklassifiseerde materiaal moet teen Dinsdag om 12:00 ontvang word vir plasing in <em>Die Papier</em> se Vrydag-uitgawe.'
  }
];

// ─── Dankie: Advertensie (Thank You: Advertising) ───────────
export const THANKYOU_ADVERTISING_FAQS: PageFAQItem[] = [
  {
    id: 'ty-adv-1',
    question: 'Wanneer kan ek terugvoer verwag?',
    answer: 'Ons advertensiespan streef daarna om binne 24-48 werkure op alle navrae te reageer. Hou jou e-posbus dop vir \'n kwotasie of verdere vrae.'
  },
  {
    id: 'ty-adv-2',
    question: 'Kan ek intussen julle tariefkaart sien?',
    answer: 'Ja, u kan ons nuutste tariefkaart en mediakit aflaai op die "Adverteer"-bladsy terwyl u wag.'
  },
  {
    id: 'ty-adv-3',
    question: 'Wat as ek my navraag wil wysig?',
    answer: 'Indien u enige besonderhede wil verander, stuur asseblief so gou moontlik \'n e-pos na <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a>.'
  }
];

// ─── Dankie: Kompetisie (Thank You: Competition) ───────────
export const THANKYOU_COMPETITION_FAQS: PageFAQItem[] = [
  {
    id: 'ty-comp-1',
    question: 'Wanneer word die wenner aangekondig?',
    answer: 'Wenners word gewoonlik binne 5 werksdae na die sluitingsdatum van die kompetisie aangekondig. Hou ons sosiale media en u e-pos dop.'
  },
  {
    id: 'ty-comp-2',
    question: 'Hoe sal ek weet of ek gewen het?',
    answer: 'Ons sal die wenner direk kontak via die kontakbesonderhede wat tydens inskrywing verskaf is (e-pos of telefoon).'
  },
  {
    id: 'ty-comp-3',
    question: 'Kan ek meer as een keer inskryf?',
    answer: 'Tensy anders vermeld in die spesifieke kompetisie se reëls, word slegs een inskrywing per persoon toegelaat.'
  }
];

// ─── Dankie: Kontak (Thank You: Contact) ────────────────────
export const THANKYOU_CONTACT_FAQS: PageFAQItem[] = [
  {
    id: 'ty-cont-1',
    question: 'Hoe lank neem dit om \'n antwoord te kry?',
    answer: 'Ons reageer gewoonlik binne 1-2 werksdae op algemene navrae via ons kontakvorm.'
  },
  {
    id: 'ty-cont-2',
    question: 'Wie gaan my kontak?',
    answer: '\'n Lid van ons kliëntediens- of redaksionele span sal u kontak, afhangende van die aard van u navraag.'
  },
  {
    id: 'ty-cont-3',
    question: 'Is my boodskap vertroulik?',
    answer: 'Ja, alle boodskappe word vertroulik hanteer volgens ons privaatheidsbeleid.'
  }
];

// ─── Dankie: Nuusbrief (Thank You: Newsletter) ──────────────
export const THANKYOU_NEWSLETTER_FAQS: PageFAQItem[] = [
  {
    id: 'ty-news-1',
    question: 'Wanneer kry ek my eerste nuusbrief?',
    answer: 'U behoort u eerste nuusbrief die volgende weeksdagoggend te ontvang (vir die daaglikse nuusbrief) of die komende naweek (vir die weeklikse opsomming).'
  },
  {
    id: 'ty-news-2',
    question: 'Sal my e-posadres met derde partye gedeel word?',
    answer: 'Nee, ons deel nooit u inligting met derde partye nie. U e-posadres word slegs gebruik om <em>Die Papier</em> se nuusbriewe te stuur.'
  },
  {
    id: 'ty-news-3',
    question: 'Hoe teken ek af?',
    answer: 'Elke nuusbrief bevat \'n "Teken af"-skakel aan die onderkant. U kan ook u voorkeure op u profielbladsy bestuur.'
  }
];

// ─── Dankie: Registrasie (Thank You: Registration) ──────────
export const THANKYOU_REGISTRATION_FAQS: PageFAQItem[] = [
  {
    id: 'ty-reg-1',
    question: 'Wat is die voordele van my rekening?',
    answer: 'Met u gratis rekening kan u artikels stoor, kommentaar lewer, en u nuusbriefvoorkeure bestuur. U kry ook toegang tot beperkte gratis artikels per maand.'
  },
  {
    id: 'ty-reg-2',
    question: 'Is my profiel sigbaar vir ander?',
    answer: 'Nee, u profielinligting is privaat. Slegs u vertoonnaam (indien u kies om een te stel) sal sigbaar wees as u kommentaar lewer.'
  },
  {
    id: 'ty-reg-3',
    question: 'Hoe verander ek my wagwoord?',
    answer: 'U kan u wagwoord en ander besonderhede enige tyd wysig op die "My Profiel"-bladsy.'
  }
];

// ─── Dankie: Inhandiging (Thank You: Submission) ────────────
export const THANKYOU_SUBMISSION_FAQS: PageFAQItem[] = [
  {
    id: 'ty-sub-1',
    question: 'Wanneer sal my bydrae gepubliseer word?',
    answer: 'Ons redaksie hersien alle bydraes. As dit goedgekeur word, verskyn dit gewoonlik binne 2-5 werksdae aanlyn of in die volgende gedrukte uitgawe.'
  },
  {
    id: 'ty-sub-2',
    question: 'Sal ek in kennis gestel word?',
    answer: 'Ja, ons stuur gewoonlik \'n e-pos as ons u storie of brief kies vir publikasie.'
  },
  {
    id: 'ty-sub-3',
    question: 'Kan ek foto\'s agterna stuur?',
    answer: 'Indien u vergeet het om foto\'s aan te heg, e-pos dit asseblief so gou moontlik na <a href="mailto:nuus@diepapier.co.za">nuus@diepapier.co.za</a> met u naam en onderwerp.'
  }
];

// ─── Adverteer: Vertoonadvertensies (Display Ads) ───────────
export const DISPLAY_ADS_FAQS: PageFAQItem[] = [
  {
    id: 'disp-1',
    question: 'Watter vertoonadvertensie-formate bied <em>Die Papier</em> aan?',
    answer: '<em>Die Papier</em> bied verskeie formate aan, insluitend volbladsy, halfbladsy, kwartbladsy en strookadvertensies in beide die gedrukte koerant en aanlyn. Digitale opsies sluit banier- en mediumreghoekadvertensies in.'
  },
  {
    id: 'disp-2',
    question: 'Kan ek \'n spesifieke posisie in die koerant kies?',
    answer: 'Ja, voorkeursposisies soos die voorblad, agterblad en spesifieke afdelings is beskikbaar teen \'n premietarief. Kontak <em>Die Papier</em> se advertensiespan vir beskikbaarheid.'
  },
  {
    id: 'disp-3',
    question: 'Bied <em>Die Papier</em> ontwerpsdienste vir advertensies aan?',
    answer: 'Ja, <em>Die Papier</em> se kreatiewe span kan jou advertensie ontwerp teen \'n addisionele fooi. Stuur jou logo, beelde en teks na <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a>.'
  }
];

// ─── Adverteer: Pamflette (Leaflets) ────────────────────────
export const LEAFLETS_FAQS: PageFAQItem[] = [
  {
    id: 'leaf-1',
    question: 'Hoe werk pamfletverspreiding met <em>Die Papier</em>?',
    answer: 'Jou pamflette word saam met <em>Die Papier</em> se weeklikse gedrukte uitgawe versprei aan intekenare en winkelpunte. Dit verseker direkte bereiking van ons aktiewe lesersmark.'
  },
  {
    id: 'leaf-2',
    question: 'Wat is die minimum bestelling vir pamflette?',
    answer: 'Die minimum bestelling hang af van die verspreidingsgebied. Kontak <em>Die Papier</em> se advertensiespan by <a href="mailto:advertensies@diepapier.co.za">advertensies@diepapier.co.za</a> vir spesifieke hoeveelhede en tariewe.'
  },
  {
    id: 'leaf-3',
    question: 'Kan ek kies in watter areas my pamflette versprei word?',
    answer: 'Ja, <em>Die Papier</em> bied geografiese teikening aan. Jy kan spesifieke streke of dorpe kies waar jou pamflette versprei moet word.'
  }
];

// ─── Adverteer: Geborgde Inhoud (Sponsored Content) ─────────
export const SPONSORED_CONTENT_FAQS: PageFAQItem[] = [
  {
    id: 'spon-cont-1',
    question: 'Wat is geborgde inhoud by <em>Die Papier</em>?',
    answer: 'Geborgde inhoud is redaksioneel-gestileerde artikels wat deur jou besigheid geborg word. <em>Die Papier</em> se joernaliste skryf die inhoud in samewerking met jou om jou boodskap outentiek oor te dra.'
  },
  {
    id: 'spon-cont-2',
    question: 'Word geborgde inhoud duidelik gemerk?',
    answer: 'Ja, alle geborgde inhoud word duidelik as "Geborgde inhoud" gemerk in ooreenstemming met <em>Die Papier</em> se redaksionele riglyne en die Perskode van Suid-Afrika.'
  },
  {
    id: 'spon-cont-3',
    question: 'Hoe lank bly geborgde inhoud aanlyn?',
    answer: 'Geborgde artikels op <em>Die Papier</em> se webwerf bly permanent beskikbaar, net soos enige ander artikel. Dit bied langtermyn-sigbaarheid vir jou handelsmerk.'
  }
];

// ─── Adverteer: Borgskappe (Sponsorships) ───────────────────
export const SPONSORSHIPS_FAQS: PageFAQItem[] = [
  {
    id: 'spons-1',
    question: 'Watter borgskapsopsies bied <em>Die Papier</em> aan?',
    answer: '<em>Die Papier</em> bied borgskappe aan vir ons nuusbriewe, webwerfafdelings, spesiale beriggewing-projekte, podcasts en gebeure. Elke borgskap word pasgemaak vir jou handelsmerk se behoeftes.'
  },
  {
    id: 'spons-2',
    question: 'Wat is die minimum borgskaptermyn?',
    answer: 'Borgskappe by <em>Die Papier</em> begin tipies by \'n minimum van 3 maande om effektiewe handelsmerkbou te verseker. Korter termyne is beskikbaar vir spesifieke projekte of gebeure.'
  },
  {
    id: 'spons-3',
    question: 'Watter verslagdoening ontvang ek as borg?',
    answer: '<em>Die Papier</em> verskaf maandelikse prestasieverslagte wat bereik, bladsyvertonings, klik-deur-koerse en gehoordemografie insluit. Ons glo in deursigtige vennootskappe.'
  }
];

// ─── Adverteer: Bylaes (Supplements) ────────────────────────
export const SUPPLEMENTS_FAQS: PageFAQItem[] = [
  {
    id: 'supp-1',
    question: 'Wat is \'n koerantbylae?',
    answer: '\'n Bylae is \'n aparte, temagedrewe afdeling wat saam met <em>Die Papier</em> se hoofkoerant gedruk en versprei word. Dit bied \'n eksklusiewe platform vir diepgaande inhoud oor \'n spesifieke onderwerp.'
  },
  {
    id: 'supp-2',
    question: 'Kan ek \'n hele bylae borg?',
    answer: 'Ja, <em>Die Papier</em> bied eksklusiewe bylaeborgskap aan. Jou handelsmerk kry prominente plasing deur die hele bylae, insluitend die voorblad en interne advertensiespasie.'
  },
  {
    id: 'supp-3',
    question: 'Watter temas dek <em>Die Papier</em> se bylaes?',
    answer: '<em>Die Papier</em> publiseer gereeld bylaes oor onderwerpe soos eiendom, motors, gesondheid, onderwys, landbou en feestyddekorasies. Pasgemaakte temas is ook moontlik.'
  }
];