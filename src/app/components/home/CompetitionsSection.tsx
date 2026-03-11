import React from 'react';
import { Gift, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { getActiveCompetitions } from '../../data/competitions';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const CompetitionsSection = () => {
  // Use the first active competition as the featured one
  const activeCompetitions = getActiveCompetitions();
  const featured = activeCompetitions[0];
  const others = activeCompetitions.slice(1, 4);

  if (!featured) return null;

  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 dark:from-background to-white dark:to-background">
      <div className="alignwide">
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-orange-500">
          <div className="flex items-center gap-3">
            <Gift className="text-orange-600" size={32} />
            {/* V2: editorial H2 — Roboto Serif font-normal, GRAD -50 */}
            <h2
              className="font-normal text-brand-navy dark:text-foreground font-heading"
              style={{
                fontVariationSettings: "var(--fvs-h2)",
                lineHeight: 'var(--lh-h2)',
                letterSpacing: 'var(--ls-h2)',
                fontSize: 'var(--text-h2)',
              }}
            >
              Pryse & Kompetisies
            </h2>
          </div>
          <Link
            to="/kompetisies"
            className="text-brand-red font-bold hover:underline text-sm"
          >
            Sien alles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Competition */}
          <Link
            key={featured.id}
            to={`/kompetisies/${featured.slug}`}
            className="group md:col-span-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow relative"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Trophy size={16} />
                LESERSKOMPETISIE
              </span>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="md:w-1/2 p-8 flex flex-col justify-center text-white">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                  {featured.category}
                </span>

                {/* V2: featured card H3 — Roboto Serif font-normal, GRAD -50 */}
                <h3
                  className="font-normal mb-4 font-heading text-white"
                  style={{
                    fontVariationSettings: "var(--fvs-h3)",
                    lineHeight: 'var(--lh-h3)',
                    letterSpacing: 'var(--ls-h3)',
                    fontSize: 'var(--text-h3)',
                  }}
                >
                  {featured.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Gift className="text-yellow-300" size={20} />
                    <span className="text-lg font-bold">Prys: {featured.prizeValue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-yellow-300" size={20} />
                    <span>Sluit: {featured.closingDate}</span>
                  </div>
                </div>

                <span className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors w-fit">
                  Neem nou deel!
                </span>
              </div>
            </div>
          </Link>

          {/* Other Active Competitions */}
          {others.map((comp) => (
            <Link
              key={comp.id}
              to={`/kompetisies/${comp.slug}`}
              className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)] hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={comp.imageUrl}
                  alt={comp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Wen
                  </span>
                </div>
              </div>

              <div className="p-5">
                {/* Card H3 — compact article card, font-normal per V2 */}
                <h3
                  className="font-normal text-brand-navy dark:text-foreground mb-3 line-clamp-2 group-hover:text-brand-red transition-colors font-heading"
                  style={{ fontVariationSettings: "var(--fvs-h4)", lineHeight: 'var(--lh-h4)', letterSpacing: 'var(--ls-h4)', fontSize: 'var(--text-h4)' }}
                >
                  {comp.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <Gift size={16} className="text-orange-500" />
                    <span className="font-semibold">{comp.prizeValue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Clock size={16} className="text-gray-400 dark:text-gray-500" />
                    <span>Sluit: {comp.closingDate}</span>
                  </div>
                </div>

                <span className="block w-full text-center bg-brand-red text-white py-2 rounded font-bold group-hover:bg-brand-red-hover transition-colors text-sm">
                  Neem nou deel
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-100 dark:from-competition-dark-from to-orange-100 dark:to-competition-dark-to rounded-lg p-6 border-2 border-yellow-300 dark:border-yellow-700/50">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              {/* V2: CTA H3 — Roboto Serif font-normal, GRAD -50 */}
              <h3
                className="font-normal text-brand-navy dark:text-foreground mb-2 font-heading"
                style={{
                  fontVariationSettings: "var(--fvs-h3)",
                  lineHeight: 'var(--lh-h3)',
                  letterSpacing: 'var(--ls-h3)',
                  fontSize: 'var(--text-h3)',
                }}
              >
                Sluit aan by ons kompetisies!
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nuwe kompetisies word gereeld bygevoeg. Moenie misloop nie!
              </p>
            </div>
            <Link
              to="/kompetisies"
              className="bg-brand-red text-white px-8 py-3 rounded font-bold hover:bg-brand-red-hover transition-colors"
            >
              Sien alle kompetisies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};