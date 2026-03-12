import React from 'react';
import { Tag, Banknote, House } from 'lucide-react';
import { SOCIAL_POSTS } from '../../../data/marketing';

export const PostCostOfLiving = () => {
  return (
    <div className="relative w-full aspect-[4/5] bg-brand-warm-gray overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300">
      
      {/* Top Visual - Red Background & Mountain */}
      <div className="relative h-[55%] w-full bg-primary flex items-end overflow-hidden">
        {/* Abstract Mountain Silhouette */}
        <div className="w-full h-24 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent relative z-10 clip-mountain" />
        
        {/* Floating Icons */}
        <div className="absolute top-8 right-8 bg-white p-3 rounded-xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform">
          <Banknote className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-20 right-20 bg-white p-2 rounded-lg shadow-md transform -rotate-6 opacity-80">
          <Tag className="w-6 h-6 text-primary" />
        </div>
        
        {/* Background Building Overlay (CSS gradient for now) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent mix-blend-multiply" />
      </div>

      {/* Bottom Content */}
      <div className="flex-1 bg-brand-warm-gray flex flex-col items-center justify-center p-6 text-center z-20 -mt-6 rounded-t-3xl shadow-negative">
        <h3 className="font-heading font-normal text-3xl md:text-4xl text-black leading-tight tracking-tight mb-4 max-w-xs" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
          {SOCIAL_POSTS.costOfLiving.title}
        </h3>
        
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary font-heading font-normal text-3xl tracking-tight italic" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
            rooi rose
          </span>
          <p className="font-heading font-normal text-sm text-black max-w-[200px] leading-tight" style={{ fontVariationSettings: "var(--fvs-h4)" }}>
            {SOCIAL_POSTS.costOfLiving.subtitle}
          </p>
        </div>
      </div>

      <style>{`
        .clip-mountain {
          clip-path: polygon(0% 100%, 20% 60%, 40% 90%, 60% 50%, 80% 80%, 100% 40%, 100% 100%);
        }
        .shadow-negative {
          box-shadow: 0 -10px 20px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
};