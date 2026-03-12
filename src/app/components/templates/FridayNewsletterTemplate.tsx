import React from 'react';
import { NewsletterContainer } from '../newsletter/NewsletterContainer';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Logo } from '../common/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export default function FridayNewsletterTemplate() {
  return (
    <NewsletterContainer title="Goeiemôre Ash! - *rooi rose* E-uitgawe">
      {/* Header */}
      <div className="bg-white p-6 border-b border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <Logo className="h-10 w-auto" />
          <span className="text-sm text-gray-500">19 Desember 2025</span>
        </div>
      </div>

      {/* Intro */}
      <div className="p-6 bg-gray-50 dark:bg-background">
        <h2 className="has-brand-serif-font-family font-normal mb-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Goeiemôre Ash!</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Hier is die hoofopskrifte van die week.
        </p>
      </div>

      {/* Section: Hoofnuus */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Hoofnuus</h3>
        
        {/* Story 1 */}
        <div className="flex gap-4 mb-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1619950514689-96f890058677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
            alt="Drakenstein Municipality" 
            className="w-32 h-32 object-cover rounded"
            loading="lazy"
          />
          <div>
            <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Drakenstein-munisipaliteit beplan om 50 poste te vries</h4>
            <p className="text-xs text-gray-600 mb-2 line-clamp-3">
              PAARL - Die Drakenstein-munisipaliteit (DM) het verlede week op 'n raadsvergadering onthul dat hulle beplan om minstens 50 poste te vries, wat onrus veroorsaak het.
            </p>
            <Button size="sm" className="bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white text-xs h-7 px-3">Lees meer</Button>
          </div>
        </div>

        {/* Story 2 */}
        <div className="flex gap-4 mb-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1601568587516-eed640f4a8ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
            alt="Paarl Landscape" 
            className="w-32 h-32 object-cover rounded"
            loading="lazy"
          />
          <div>
            <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Paarl-polisie soek verdagtes na plaasmoorde</h4>
            <p className="text-xs text-gray-600 mb-2 line-clamp-3">
              Die Paarl-polisie is op soek na verdagtes na 'n reeks plaasmoorde die afgelope maand inwoners geskok het.
            </p>
            <Button size="sm" className="bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white text-xs h-7 px-3">Lees meer</Button>
          </div>
        </div>

         {/* Story 3 */}
         <div className="flex gap-4 mb-2">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765853301989-a9b0ad2ac0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
            alt="Holiday Resort" 
            className="w-32 h-32 object-cover rounded"
            loading="lazy"
          />
          <div>
            <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>Willows-vakansieoord bly oop ten spyte van brandskade</h4>
            <p className="text-xs text-gray-600 mb-2 line-clamp-3">
              GQEBERHA - Die gewilde Willows-vakansieoord langs die Gqeberha-kuslyn sal hierdie vakansieseisoen soos gewoonlik oop bly, ten spyte van 'n brand.
            </p>
            <Button size="sm" className="bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white text-xs h-7 px-3">Lees meer</Button>
          </div>
        </div>
        
        <div className="text-center mt-4 mb-8">
           <a href="#" className="text-xs text-gray-500 underline decoration-gray-400">Lees meer hoofnuus</a>
        </div>
      </div>

      <Separator className="my-0" />

      {/* Sport */}
      <div className="p-6">
        <h3 className="has-brand-serif-font-family font-normal uppercase border-b border-dashed border-gray-300 pb-2 mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Sport</h3>
        <div className="flex gap-4 mb-6">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1613330524291-3330afe5920e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200" 
            alt="Rugby" 
            className="w-32 h-32 object-cover rounded"
            loading="lazy"
          />
          <div>
            <h4 className="has-brand-serif-font-family font-normal text-sm mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)' }}>JSA-inlywing groot vir somerseisoen vir Boland-sportveld</h4>
            <p className="text-xs text-gray-600 mb-2 line-clamp-3">
              Die plaaslike Boland-sportveld kyk uit na 'n besige somer na die suksesvolle JSA-inlywing verlede naweek.
            </p>
            <Button size="sm" className="bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white text-xs h-7 px-3">Lees meer</Button>
          </div>
        </div>
      </div>

      <Separator className="my-0" />

      {/* E-Editions - PROMINENT */}
      <div className="p-6 bg-gray-50 dark:bg-background">
        <h3 className="has-brand-serif-font-family font-normal uppercase mb-4 border-b border-gray-200 pb-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>E-Uitgawes</h3>
        
        {/* Large Prominent E-edition Image */}
        <div className="bg-white p-1 shadow-md mb-6 relative group cursor-pointer">
             <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                 <ImageWithFallback 
                   src="https://images.unsplash.com/photo-1647580287585-fa0c00d97de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                   alt="Paarl Post Cover" 
                   className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <span className="bg-white/90 px-4 py-2 font-bold text-lg shadow-sm">Lees aanlyn</span>
                 </div>
             </div>
             <div className="p-3 text-center">
                <h4 className="has-brand-serif-font-family font-normal mb-1 text-brand-navy-light" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)', fontSize: 'var(--text-h4)' }}><em>rooi rose</em></h4>
                <p className="text-sm text-gray-500">19 Desember 2025</p>
             </div>
        </div>

        <div className="bg-red-50 border border-red-100 p-4 rounded text-center mb-6">
            <h4 className="has-brand-serif-font-family font-normal text-red-700 mb-2" style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)', fontSize: 'var(--text-h4)' }}>Moenie uitmis op die digitale uitgawe nie!</h4>
            <p className="text-xs text-gray-600 mb-3">Kry volle toegang tot alle plaaslike nuus, geklassifiseerde advertensies en spesiale aanbiedinge direk op jou toestel.</p>
        </div>
      </div>

       {/* Community News Links */}
       <div className="p-6 bg-white">
        <h3 className="has-brand-serif-font-family font-normal mb-4 border-b border-dashed border-gray-300 pb-2" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Plaaslike nuus</h3>
        <ul className="list-disc pl-5 space-y-2 text-xs text-gray-700 underline decoration-gray-400">
            <li><a href="#">Paarl Proms-konsert samel R2.5 miljoen in vir liefdadigheid</a></li>
            <li><a href="#">Inwoners verwyder 1000 bome per dag om hitte te bekamp</a></li>
            <li><a href="#">Vrou gearresteer by akwatiese terminaal na haatmisdaad-aanval</a></li>
            <li><a href="#">Finale OIE-verslag vir nuwe lughawe buite Durbanville ingedien</a></li>
            <li><a href="#">Agt pendelaars beseer in petrolbom-aanval op Golden Arrow-bus</a></li>
        </ul>
        <div className="text-center mt-4">
             <a href="#" className="text-xs text-gray-500 underline">Lees meer plaaslike nuus</a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-6 border-t border-gray-200 text-center">
         <div className="flex justify-center mb-4">
            <Logo className="h-8 w-auto" />
         </div>
         <div className="flex justify-center gap-4 mb-6">
            <a href="https://facebook.com/diepapier" className="text-gray-400 hover:text-brand-navy-light transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com/diepapier" className="text-gray-400 hover:text-brand-navy-light transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com/diepapier" className="text-gray-400 hover:text-brand-navy-light transition-colors">
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