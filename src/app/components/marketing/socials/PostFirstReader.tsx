import React from 'react';
import { Newspaper } from '../../icons/NewspaperIcon';
import { SOCIAL_POSTS } from '../../../data/marketing';

export const PostFirstReader = () => {
  return (
    <div className="relative w-full aspect-[4/5] bg-black text-white flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      
      {/* Top Content */}
      <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-start">
        <h3 className="font-heading font-normal text-[10vw] md:text-[5rem] leading-[0.9] tracking-tight mb-8" style={{ fontVariationSettings: "'wdth' 50, 'GRAD' -50" }}>
          {SOCIAL_POSTS.firstReader.titlePart1}<br />
          <span className="font-heading italic font-light">Die Papier</span><br />
          {SOCIAL_POSTS.firstReader.titlePart2}
        </h3>
      </div>

      {/* Bottom Visual */}
      <div className="relative p-8 md:p-12 flex flex-col items-center md:items-start border-t border-white/10 mt-auto">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-heading font-normal text-4xl tracking-tight italic" style={{ fontVariationSettings: "var(--fvs-h1)" }}>
            Die Papier
          </span>
          <p className="font-heading font-normal text-lg max-w-sm" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
            {SOCIAL_POSTS.firstReader.subtitle}
          </p>
          <p className="font-heading font-normal text-sm text-gray-400 mt-1">
            {SOCIAL_POSTS.firstReader.date}
          </p>
        </div>

        {/* Decorative Newspaper Icon - Subtle Background */}
        <div className="absolute bottom-[-10%] right-[-10%] opacity-10 transform rotate-12">
          <Newspaper className="w-64 h-64 text-white" />
        </div>
      </div>
    </div>
  );
};