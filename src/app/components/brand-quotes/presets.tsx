import React from 'react';
import { BrandQuote } from './BrandQuote';

export const QuoteWatVereis = () => (
  <BrandQuote 
    quote="Wat vereis hierdie oomblik?" 
    subtext="Meer lig. Minder hitte." 
    variant="black" 
  />
);

export const QuoteVeerkragtigeGemeenskapSwart = () => (
  <BrandQuote 
    quote="Hoe lyk ’n veerkragtige samelewing?" 
    subtext="Jou nuwe gedrukte Afrikaanse koerant." 
    variant="black" 
  />
);

export const QuoteVeerkragtigeGemeenskapRooi = () => (
  <BrandQuote 
    quote="Hoe lyk ’n veerkragtige samelewing?" 
    subtext="Jou nuwe gedrukte Afrikaanse koerant." 
    variant="red" 
  />
);

export const QuoteVeerkragtigeGemeenskapWit = () => (
  <BrandQuote 
    quote="Hoe lyk ’n veerkragtige samelewing?" 
    subtext="Jou nuwe gedrukte Afrikaanse koerant." 
    variant="white" 
  />
);

export const QuoteWereldwyeStorie = () => (
  <BrandQuote 
    quote="Hoe word ’n wêreldwye storie hier by ons relevant?" 
    subtext="In gesprek met Suid-Afrika." 
    variant="navy" 
  />
);

export const QuoteWieInJouHuis = () => (
  <BrandQuote 
    quote={
      <>
        Wie in jou huis gaan <span className="italic">rooi rose</span> eerste deurblaai?
      </>
    }
    subtext="Jou nuwe gedrukte Afrikaanse koerant." 
    variant="black" 
  />
);

export const ALL_QUOTES = [
  { id: 'wat-vereis', Component: QuoteWatVereis },
  { id: 'veerkragtige-swart', Component: QuoteVeerkragtigeGemeenskapSwart },
  { id: 'veerkragtige-rooi', Component: QuoteVeerkragtigeGemeenskapRooi },
  { id: 'veerkragtige-wit', Component: QuoteVeerkragtigeGemeenskapWit },
  { id: 'wereldwye-storie', Component: QuoteWereldwyeStorie },
  { id: 'wie-in-jou-huis', Component: QuoteWieInJouHuis },
];