/**
 * PAIA Handleiding — Canonical lawyer-approved content
 * Source: /content/policies/paia.md
 * Route: /beleid/paia
 * Last updated: 2026-03-03
 */

import { CONTACT_EMAILS } from '../contactInfo';

export const POLICY_PAIA = {
  title: 'PAIA Handleiding',
  subtitle: 'Wet op Bevordering van Toegang tot Inligting (Wet 2 van 2000)',
  intro: 'Hierdie handleiding is opgestel in ooreenstemming met Artikel 51 van die Wet op Bevordering van Toegang tot Inligting, Nr. 2 van 2000 ("PAIA"), en Artikel 23 van die Wet op Beskerming van Persoonlike Inligting, Nr. 4 van 2013 ("POPIA").',
  purpose: "Die doel van hierdie handleiding is om die versoek om toegang tot rekords wat deur rooi rose (Edms) Bpk gehou word, te fasiliteer.",

  pdfDownload: {
    heading: 'Laai die volledige handleiding af',
    description: "Ons volledige PAIA-handleiding is beskikbaar as 'n PDF-dokument. Klik op die knoppie hieronder om dit af te laai.",
    buttonLabel: 'Laai PAIA Handleiding af (PDF)',
  },

  popiaCompliance: {
    heading: 'Novus Media POPIA-nakomingsbeleid',
    intro: 'By Novus Media respekteer ons jou privaatheid en is ons verbind tot die beskerming van jou persoonlike inligting ooreenkomstig die Wet op die Beskerming van Persoonlike Inligting (POPIA). Hierdie beleid skets hoe ons persoonlike inligting versamel, verwerk, stoor, en beskerm. Dit is van toepassing op novusmedia.co.za en alle publikasies onder die Novus Media sambreel.',

    personalInfo: {
      heading: 'Persoonlike Inligting wat Ons Versamel',
      description: 'Ons mag verskillende tipes persoonlike inligting van jou versamel, afhangende van jou interaksie met ons dienste. Dit sluit in:',
      items: [
        'Identifikasie-inligting: Naam, e-posadres, kontaknommer, en posadres.',
        'Gebruiksdata: Inligting betreffende jou gebruik van ons webwerwe, soos bladsye gelees, IP-adres, en toestelinligting.',
        'Intekeninginligting: Data verskaf vir nuusbriewe, kompetisies, opnames, of ander interaktiewe kenmerke.',
      ],
    },

    purposes: {
      heading: 'Doel van Versameling van Persoonlike Inligting',
      description: 'Ons versamel en verwerk jou persoonlike inligting vir die volgende doeleindes:',
      items: [
        'Dienslewering: Om toegang tot inhoud te verskaf, op navrae te reageer, en ons dienste te handhaaf.',
        'Kommunikasie: Om jou opdaterings, nuusbriewe, en bemarkingskommunikasie te stuur, waar jy toestemming gegee het.',
        'Analise en Verbetering: Om gebruikersgedrag te analiseer en die inhoud, funksionaliteit, en prestasie van ons platforms te verbeter.',
        'Wetsnakoming: Om aan wetlike en regulatoriese verpligtinge te voldoen en die regte en belange van Novus Media en sy gebruikers te beskerm.',
      ],
    },

    lawfulness: {
      heading: 'Wettigheid van Verwerking',
      description: 'Onder POPIA verseker ons dat persoonlike inligting wettig verwerk word en op \'n manier wat jou regte respekteer:',
      items: [
        'Toestemming: Ons verwerk persoonlike inligting gebaseer op jou toestemming, wat te eniger tyd herroep kan word.',
        "Kontraktuele Noodsaaklikheid: Verwerking mag noodsaaklik wees vir die vervulling van ons verpligtinge onder 'n kontrak met jou.",
        'Wettige Belang: Ons mag ook inligting verwerk vir wettige sakebelange, mits dit nie op jou regte inbreuk maak nie.',
      ],
    },

    rights: {
      heading: 'Jou Regte onder POPIA',
      description: 'POPIA verleen jou sekere regte betreffende jou persoonlike inligting. Dit sluit in:',
      items: [
        { bold: 'Reg tot Toegang', text: 'Jy het die reg om toegang tot die persoonlike inligting wat ons van jou hou, gratis te versoek.' },
        { bold: 'Reg tot Regstelling', text: 'As enige van die inligting wat ons hou verkeerd is, kan jy versoek dat ons dit regstel of opdateer.' },
        { bold: 'Reg van Beswaar', text: 'Jy mag beswaar maak teen die verwerking van jou persoonlike inligting vir sekere doeleindes, soos direkte bemarking.' },
        { bold: 'Reg tot Uitwissing', text: 'Jy kan die uitwissing van jou persoonlike inligting versoek waar daar geen wettige rede is vir ons om dit te behou nie.' },
        { bold: 'Reg om Toestemming te Herroep', text: 'As jy toestemming vir verwerking gegee het, mag jy dit te eniger tyd herroep, wat onmiddellik in werking sal tree.' },
      ],
    },

    sharing: {
      heading: 'Inligtingsdeling en Bekendmaking',
      sections: [
        { bold: 'Diensverskaffers', text: 'Ons mag jou persoonlike inligting deel met vertroude diensverskaffers wat ons help om dienste te lewer, soos analiseverskaffers, e-posverspreidingsdienste, en IT-ondersteuning.' },
        { bold: 'Wetlike Vereistes', text: 'Ons mag persoonlike inligting bekendmaak indien dit deur die wet vereis word of in reaksie op wettige versoeke deur regulatoriese owerhede.' },
        { bold: 'Besigheidsoordragte', text: "In die geval van 'n samesmelting, verwerping, of verkoop van die besigheid, mag persoonlike inligting aan nuwe eienaarskap oorgedra word. Jy sal in kennis gestel word indien so 'n oordrag plaasvind." },
      ],
    },

    security: {
      heading: 'Inligtingsekuriteit',
      measures: [
        "Ons gebruik 'n kombinasie van tegniese, administratiewe, en fisiese veiligheidsmaatreëls om jou inligting teen ongemagtigde toegang, verlies, wysiging, of misbruik te beskerm.",
        'Slegs gemagtigde personeel het toegang tot persoonlike inligting, en hulle word vereis om die vertroulikheid van die data te handhaaf.',
      ],
      breach: "In die onwaarskynlike geval van 'n dataoortreding wat jou persoonlike inligting raak, sal ons jou en die relevante owerhede in kennis stel soos deur die wet vereis.",
    },

    retention: 'Ons behou persoonlike inligting vir so lank as nodig is om die doeleindes wat in hierdie beleid uiteengesit word, te vervul, of soos deur die wet vereis. Sodra inligting nie meer benodig word nie, sal dit veilig uitgevee of anoniem gemaak word.',
    retentionHeading: 'Bewaring van Persoonlike Inligting',

    paiaAccess: 'Ons Wet op die Bevordering van Toegang tot Inligting (WBIT) Handleidings is beskikbaar om jou te help om die prosedures vir toegang tot rekords wat deur Novus Media gehou word, te verstaan. Hierdie handleidings verskaf gedetailleerde inligting oor hoe om \'n formele versoek vir inligting te maak.',
    paiaAccessHeading: 'Toegang tot WBIT-handleidings',

    updates: 'Ons mag hierdie POPIA-nakomingsbeleid van tyd tot tyd opdateer om wetlike vereistes of verbeteringe in ons praktyke te weerspieël. Die nuutste weergawe sal altyd op hierdie bladsy beskikbaar wees.',
    updatesHeading: 'Opdaterings van Hierdie Beleid',
  },

  informationOfficer: {
    heading: 'Kontakbesonderhede van Inligtingsbeampte',
    name: 'Die Inligtingsbeampte',
    email: CONTACT_EMAILS.paia,
    nameLabel: 'Naam:',
    emailLabel: 'E-pos:',
  },
};