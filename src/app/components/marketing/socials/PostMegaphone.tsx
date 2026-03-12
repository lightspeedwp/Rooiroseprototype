import React from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Megaphone } from 'lucide-react';
import { SOCIAL_POSTS } from '../../../data/marketing';

export const PostMegaphone = () => {
  return (
    <div className="relative w-full aspect-[4/5] bg-brand-warm-gray overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
      {/* Top Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="font-heading font-normal text-3xl md:text-4xl text-black leading-tight tracking-tight mb-4" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
          {SOCIAL_POSTS.megaphone.title}
        </h3>
        
        <div className="flex flex-col items-center gap-1">
          <span className="text-primary font-heading font-normal text-3xl tracking-tight italic" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
            rooi rose
          </span>
          <p className="font-heading font-normal text-sm text-black" style={{ fontVariationSettings: "var(--fvs-h4)" }}>
            {SOCIAL_POSTS.megaphone.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Visual - Split Background */}
      <div className="relative h-1/2 w-full flex">
        {/* Left Side - Black */}
        <div className="w-1/2 bg-black relative flex items-end justify-center overflow-hidden">
          {/* Decorative Lines (CSS) */}
          <div className="absolute top-4 left-4 w-8 h-1 bg-primary rotate-[-45deg] rounded-full opacity-80" />
          <div className="absolute top-8 left-8 w-6 h-1 bg-primary rotate-[-30deg] rounded-full opacity-80" />
          
          <div className="mb-[-10%] mr-[-20%] transform rotate-[-15deg] w-full h-full flex items-end justify-center">
             <Megaphone 
               className="w-48 h-48 text-white opacity-90 stroke-1" 
               strokeWidth={1}
               fill="currentColor"
             />
          </div>
        </div>

        {/* Right Side - Red */}
        <div className="w-1/2 bg-primary relative flex items-end justify-center overflow-hidden">
          {/* Decorative Lines (CSS) */}
          <div className="absolute top-4 right-4 w-8 h-1 bg-white rotate-[45deg] rounded-full opacity-80" />
          <div className="absolute top-8 right-8 w-6 h-1 bg-white rotate-[30deg] rounded-full opacity-80" />

          <div className="mb-[-10%] ml-[-20%] transform rotate-[15deg] scale-x-[-1] w-full h-full flex items-end justify-center">
             <Megaphone 
               className="w-48 h-48 text-white opacity-90 stroke-1" 
               strokeWidth={1}
               fill="currentColor"
             />
          </div>
        </div>
      </div>
    </div>
  );
};