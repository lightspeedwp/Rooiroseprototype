import newsletterHero from 'figma:asset/13bd97bf84a483cafad8893ecc09a138455e1126.png';
import subscriptionHero from 'figma:asset/569ae9a1840247e37f1e805be09dbbe5e485f8ea.png';
import complaintsHero from 'figma:asset/47ebc426906125a7f6dae85fea56a0ac9d732c5b.png';
import eEditionsHero from 'figma:asset/55ebffbc5e0c81b1bb8cae2ca178201c8cace8f2.png';
import legalHero from 'figma:asset/90feda5dc244e4dea6c7466332cd65c833bee6e0.png';

export const HERO_IMAGES = {
  newsletter: newsletterHero,
  subscription: subscriptionHero,
  complaints: complaintsHero,
  eEditions: eEditionsHero,
  legal: legalHero,
  advertise: complaintsHero, // Reuse Megaphone image for Advertising
  submit: newsletterHero,   // Reuse Hands image for Submit
  contactMap: 'https://images.unsplash.com/photo-1671917057275-c5014a6addcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NlYmFuayUyMEpvaGFubmVzYnVyZyUyMGFlcmlhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzE0Mzg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};
