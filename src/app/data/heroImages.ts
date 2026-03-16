import newsletterHero from 'figma:asset/13bd97bf84a483cafad8893ecc09a138455e1126.png';
import subscriptionHero from 'figma:asset/569ae9a1840247e37f1e805be09dbbe5e485f8ea.png';
import complaintsHero from 'figma:asset/47ebc426906125a7f6dae85fea56a0ac9d732c5b.png';
import eEditionsHero from 'figma:asset/55ebffbc5e0c81b1bb8cae2ca178201c8cace8f2.png';
import legalHero from 'figma:asset/90feda5dc244e4dea6c7466332cd65c833bee6e0.png';

/* ── rooi rose Hero Images ────────────────────────────────────────
 * Luxury editorial-style hero images for all static pages
 * Aligned with women's lifestyle magazine aesthetic
 * All images from Unsplash with luxury, elegant, editorial theme
 * ────────────────────────────────────────────────────────────── */

export const HERO_IMAGES = {
  // Original Figma assets (legacy)
  newsletter: newsletterHero,
  subscription: subscriptionHero,
  complaints: complaintsHero,
  eEditions: eEditionsHero,
  legal: legalHero,
  
  // New luxury editorial hero images (Unsplash)
  contact: 'https://images.unsplash.com/photo-1770871820934-daf713c304af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBjdXN0b21lciUyMHNlcnZpY2UlMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc3MzYxMjg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  about: 'https://images.unsplash.com/photo-1702047076267-6719aadd2807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlZGl0b3JpYWwlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MzYxMjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  advertise: 'https://images.unsplash.com/photo-1761052677126-2c7138069d44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib3V0aXF1ZSUyMGFkdmVydGlzaW5nJTIwbWFya2V0aW5nfGVufDF8fHx8MTc3MzYxMjg2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  team: 'https://images.unsplash.com/photo-1758691736664-0b83e4f1215e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwbWVldGluZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzczNjEyODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  submit: 'https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGFuZHMlMjB0eXBpbmclMjBjcmVhdGl2ZSUyMHdvcmt8ZW58MXx8fHwxNzczNjEyODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  policies: 'https://images.unsplash.com/photo-1701321584501-9a4c01999264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVzayUyMHN0YXRpb25lcnklMjBtYWdhemluZXxlbnwxfHx8fDE3NzM2MTI4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  shop: 'https://images.unsplash.com/photo-1761164920874-555955ee3c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBsdXh1cnklMjBtYWdhemluZSUyMG9mZmljZXxlbnwxfHx8fDE3NzM2MTI4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  editorial: 'https://images.unsplash.com/photo-1759090888952-c7935687a6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMGVkaXRvcmlhbCUyMHBob3Rvc2hvb3QlMjBsdXh1cnl8ZW58MXx8fHwxNzczNjEyODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  lifestyle: 'https://images.unsplash.com/photo-1619225379807-e9002c44c462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjBtYWdhemluZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MzYxMjg2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  beauty: 'https://images.unsplash.com/photo-1771620886948-3887ba3223f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWdhemluZSUyMGxpZmVzdHlsZSUyMGJlYXV0eXxlbnwxfHx8fDE3NzM2MTI4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  reading: 'https://images.unsplash.com/photo-1742808683263-79abc190986d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjByZWFkaW5nJTIwbWFnYXppbmV8ZW58MXx8fHwxNzczNjEyODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  magazineSpread: 'https://images.unsplash.com/photo-1643068478856-2543ca1abd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlZGl0b3JpYWwlMjBtYWdhemluZSUyMHNwcmVhZHxlbnwxfHx8fDE3NzM2MTI4Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  creative: 'https://images.unsplash.com/photo-1582201942930-53fea460eeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3BoaXN0aWNhdGVkJTIwd29tYW4lMjB3cml0aW5nJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzczNjEyODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  
  // Map for contact page (existing)
  contactMap: 'https://images.unsplash.com/photo-1671917057275-c5014a6addcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NlYmFuayUyMEpvaGFubmVzYnVyZyUyMGFlcmlhbCUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzE0Mzg1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  
  // Legacy aliases (backwards compatibility)
  hero_submit: 'https://images.unsplash.com/photo-1650978813673-df28319b04f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaGFuZHMlMjB0eXBpbmclMjBjcmVhdGl2ZSUyMHdvcmt8ZW58MXx8fHwxNzczNjEyODY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};