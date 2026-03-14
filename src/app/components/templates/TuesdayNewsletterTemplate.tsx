import { CONTACT_EMAILS, createMailtoLink } from '../../data/contactInfo';
import React from 'react';
import { NewsletterContainer } from '../newsletter/NewsletterContainer';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Logo } from '../common/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { TRENDING_ARTICLES } from '../../data/trendingArticles';
import { CATEGORY_ARTICLES } from '../../data/categoryArticles';
import { LATEST_EDITIONS } from '../../data/eEditions';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function TuesdayNewsletterTemplate() {
  const topStories = TRENDING_ARTICLES.slice(0, 3);
  const featuredStories = TRENDING_ARTICLES.slice(3, 5);
  const sportStories = CATEGORY_ARTICLES.Sport ? CATEGORY_ARTICLES.Sport.slice(0, 2) : [];
  const latestEdition = LATEST_EDITIONS[0];

  return (
    <NewsletterContainer title="*rooi rose*: Leefstyl & Nuus - 17 Desember 2025">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <Logo className="h-10 w-auto" />
          <span className="text-sm text-gray-500">17 Desember 2025</span>
        </div>
        <div className="text-xs text-gray-400 mb-2">
          Antwoord aan: <a href={createMailtoLink(CONTACT_EMAILS.letters)} className="text-blue-500 hover:underline">{CONTACT_EMAILS.letters}</a>
        </div>
      </div>

      {/* Intro */}
      <div className="p-6 bg-gray-50 dark:bg-background">
        <h2 className="has-brand-serif-font-family font-normal mb-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Hallo Zared!</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Bly op hoogte met 'n vars mengsel van plaaslike en internasionale hoofopskrifte, inspirerende plaaslike verhale, en brekende nuus – direk in jou e-posbus afgelewer.
          <br /><br />
          <strong className="text-gray-900">Wees ingelig. Wees betrokke. Wees deel van die gesprek.</strong>
        </p>
      </div>

      {/* Top Stories */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Hoofnuus</h3>
        
        {topStories.map((story) => (
          <div key={story.id} className="flex gap-4 mb-6">
            <ImageWithFallback
              src={story.imageUrl} 
              alt={story.title} 
              className="w-32 h-32 object-cover rounded"
              loading="lazy"
            />
            <div>
              <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>{story.title}</h4>
              <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                {story.excerpt}
              </p>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white text-xs h-7 px-3">Lees meer</Button>
            </div>
          </div>
        ))}
        
        <div className="text-center mt-4 mb-8">
           <a href="#" className="text-xs text-gray-500 underline decoration-gray-400">Lees meer hoofnuus</a>
        </div>
      </div>

      <Separator className="my-0" />

      {/* Featured */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Uitgesonder</h3>
        
        {featuredStories.map((story) => (
          <div key={story.id} className="flex gap-4 mb-6">
            <ImageWithFallback
              src={story.imageUrl} 
              alt={story.title} 
              className="w-32 h-32 object-cover rounded"
              loading="lazy"
            />
            <div>
              <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>{story.title}</h4>
              <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                {story.excerpt}
              </p>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white text-xs h-7 px-3">Lees meer</Button>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-0" />

      {/* Sport */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Sport</h3>
        
        {sportStories.map((story) => (
          <div key={story.id} className="flex gap-4 mb-6">
            <ImageWithFallback
              src={story.imageUrl} 
              alt={story.title} 
              className="w-32 h-32 object-cover rounded"
              loading="lazy"
            />
            <div>
              <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>{story.title}</h4>
              <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                {story.excerpt}
              </p>
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white text-xs h-7 px-3">Lees meer</Button>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-0" />

      {/* Catalogues */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Katalogusse</h3>
        <div className="bg-blue-900 text-white p-4 rounded text-center">
            <h4 className="has-brand-serif-font-family font-normal mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)', fontSize: 'var(--text-h4)' }}>Die uitgebreide geskenk in een boks – 'n kerswens!</h4>
            <div className="bg-blue-800 h-48 w-full flex items-center justify-center mb-4">
                <span className="text-sm">Katalogus Voorbeeld</span>
            </div>
            <Button size="sm" className="bg-black hover:bg-gray-800 text-white text-xs h-7 px-3">Lees meer</Button>
        </div>
      </div>

      <Separator className="my-0" />

      {/* E-Editions */}
      <div className="p-6 bg-gray-50 dark:bg-background">
        <h3 className="has-brand-serif-font-family font-normal uppercase mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Jongste E-uitgawes</h3>
        <div className="bg-white p-2 shadow-sm mb-4">
             <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative overflow-hidden">
                {latestEdition && (
                  <ImageWithFallback 
                    src={latestEdition.coverImage} 
                    alt="Newspaper Cover" 
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    loading="lazy"
                  />
                )}
                <div className="relative z-10 text-center">
                    <h2 className="has-brand-serif-font-family font-normal text-brand-red" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}><em>rooi rose</em></h2>
                    <p className="font-normal uppercase tracking-wider">Jongste E-Uitgawes</p>
                </div>
             </div>
        </div>
        <div className="text-center">
             <Button className="bg-custom-contrast hover:bg-black text-white w-full max-w-xs">Lees die jongste E-Uitgawes</Button>
        </div>
      </div>

      <Separator className="my-0" />

      {/* WhatsApp Promo */}
      <div className="p-6 bg-custom-base-2">
        <div className="border-2 border-dashed border-gray-400 p-4 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-black text-brand-red uppercase leading-none mb-2">NOU WAAR OP AARDE</h3>
                <p className="text-xs text-gray-700 max-w-[200px]">
                    kan ek brekende nuus, plaaslike nuus, skoolnuus lees, pryse wen... en dis <span className="font-bold text-brand-red">gratis?</span>
                </p>
                <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">WA</div>
                    <div className="text-xs font-bold">Rol Minder.<br/>Weet Meer!<br/>Sluit aan by <em>rooi rose</em><br/>op WhatsApp</div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                 <div className="w-24 h-24 bg-white p-1 mb-2">
                    <div className="w-full h-full bg-black"></div>
                 </div>
                 <Button size="sm" className="bg-custom-contrast text-white text-[10px] h-6">Sluit aan by WhatsApp</Button>
            </div>
        </div>
      </div>

       {/* Lifestyle News Links */}
       <div className="p-6 bg-gray-50 dark:bg-background">
        <h3 className="has-brand-serif-font-family font-normal mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Leefstylnuus</h3>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-700 underline decoration-gray-400">
            {CATEGORY_ARTICLES.Leefstyl && CATEGORY_ARTICLES.Leefstyl.slice(0, 5).map(article => (
              <li key={article.id}><a href={`/artikel/${article.id}`}>{article.title}</a></li>
            ))}
        </ul>
        <div className="text-center mt-4">
             <a href="#" className="text-xs text-gray-500 underline">Lees meer leefstyl nuus</a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-6 border-t border-gray-200 text-center">
         <div className="flex justify-center mb-4">
            <Logo className="h-8 w-auto" />
         </div>
         <div className="flex justify-center gap-4 mb-6">
            <a href="https://facebook.com/diepapier" className="text-gray-400 hover:text-brand-red transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/diepapier" className="text-gray-400 hover:text-brand-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com/diepapier" className="text-gray-400 hover:text-brand-red transition-colors">
              <Twitter size={20} />
            </a>
         </div>
         <div className="text-[10px] text-gray-400 space-x-2">
            <a href="#" className="hover:text-gray-600"><em>rooi rose</em></a> |
            <a href="#" className="hover:text-gray-600">Kanselleer</a> |
            <a href="#" className="hover:text-gray-600">Bestuur intekening</a> |
            <a href="#" className="hover:text-gray-600">Besigtig in webblaaier</a>
         </div>
      </div>

    </NewsletterContainer>
  );
}