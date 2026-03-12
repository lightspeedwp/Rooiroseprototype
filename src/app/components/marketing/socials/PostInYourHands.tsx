import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Link, Grip } from 'lucide-react';
import { Newspaper } from '../../icons/NewspaperIcon';
import { SOCIAL_POSTS } from '../../../data/marketing';

export const PostInYourHands = () => {
  return (
    <div className="relative w-full aspect-[4/5] bg-brand-warm-gray overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
      
      {/* Top Content */}
      <div className="relative z-10 p-6 pt-12 text-center flex flex-col items-center">
        <h3 className="font-heading font-normal text-4xl md:text-5xl text-black leading-tight tracking-tight mb-2" style={{ fontVariationSettings: "var(--fvs-h1)" }}>
          <span className="text-primary italic">rooi rose</span>
          {SOCIAL_POSTS.inYourHands.titlePart1}
        </h3>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-primary font-heading font-normal text-3xl tracking-tight italic" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
            rooi rose
          </span>
          <p className="font-heading font-normal text-sm text-black max-w-[200px] leading-tight mt-2" style={{ fontVariationSettings: "var(--fvs-h4)" }}>
            {SOCIAL_POSTS.inYourHands.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Visual - Red Stripes & Hands */}
      <div className="relative flex-1 bg-primary overflow-hidden">
        {/* Striped Background (CSS) */}
        <div className="absolute inset-0 bg-primary" 
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, var(--custom-primary-2), var(--custom-primary-2) 20px, var(--custom-primary) 20px, var(--custom-primary) 40px)',
            opacity: 0.1
          }}
        />

        {/* Hand with Newspaper */}
        <div className="absolute bottom-[-10%] left-[10%] w-[120%] h-[120%] transform rotate-[-15deg] opacity-90 drop-shadow-xl z-20 flex items-center justify-center bg-gray-200 rounded-3xl p-4">
           {/* Placeholder for complex image - simplified to icon */}
           <div className="flex flex-col items-center justify-center text-gray-500">
             <Newspaper className="w-32 h-32 mb-2" />
             <span className="text-xs font-mono uppercase tracking-widest">Koerant</span>
           </div>
        </div>

        {/* Floating Icons/Badges */}
        <div className="absolute bottom-[20%] right-[10%] bg-white p-3 rounded-full shadow-lg z-30 animate-pulse">
           <Link className="w-6 h-6 text-primary" />
        </div>
        
        <div className="absolute top-[20%] left-[10%] bg-white p-2 rounded-full shadow-md z-30 rotate-12">
           <Grip className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};