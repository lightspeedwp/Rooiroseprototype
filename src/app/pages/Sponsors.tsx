import React from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SPONSORS } from '../data/sponsors';
import { ExternalLink } from 'lucide-react';

export const SponsorsPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen">
      <SEO 
        title="Ons Borge"
        description="Ontmoet die maatskappye wat rooi rose moontlik maak. Kyk na hul profiele en jongste artikels."
        keywords="borge, vennote, adverteerders, die papier"
      />
      
      <PageContainer breadcrumbs={[{ label: 'Borge' }]}>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
            Ons Borge
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            rooi rose se borge speel 'n deurslaggewende rol om onafhanklike gemeenskapsjoernalistiek volhoubaar te maak. Ondersteun hulle soos hulle ons ondersteun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPONSORS.map((sponsor) => (
            <Link 
              key={sponsor.slug} 
              to={`/geborg/${sponsor.slug}`}
              className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl overflow-hidden hover:border-brand-red dark:hover:border-brand-red transition-all group shadow-sm hover:shadow-md flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-white border border-gray-100 dark:border-border rounded-lg p-2 flex items-center justify-center shadow-sm">
                    {sponsor.logoUrl ? (
                      <ImageWithFallback 
                        src={sponsor.logoUrl} 
                        alt={sponsor.name} 
                        className="w-full h-full object-contain" 
                      />
                    ) : (
                      <span className="text-2xl font-bold text-gray-400 uppercase">{sponsor.name.substring(0, 2)}</span>
                    )}
                  </div>
                  {sponsor.websiteUrl && (
                    <a 
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-gray-400 hover:text-brand-red transition-colors p-2"
                      title="Besoek webwerf"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-normal text-brand-navy dark:text-white mb-2 group-hover:text-brand-red transition-colors font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                  {sponsor.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                  {sponsor.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-border">
                  <span className="text-sm font-bold text-brand-red flex items-center gap-1 group-hover:gap-2 transition-all">
                    Bekyk Profiel en Artikels →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};