import React from 'react';
import { Flower2, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { OBITUARIES } from '../../data/obituaries';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const ObituariesSection = () => {
  const latestObituaries = OBITUARIES.slice(0, 6);

  return (
    <section className="alignwide my-6">
      <div className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-brand-red">
          <div className="flex items-center gap-3">
            <Flower2 className="text-brand-red" size={28} />
            <h2 className="font-normal text-brand-navy dark:text-foreground font-heading">
              Doodsberrigte
            </h2>
          </div>
          <Link
            to="/doodsberrigte"
            className="text-brand-red font-bold text-sm hover:underline flex items-center gap-1"
          >
            Alle doodsberrigte <ChevronRight size={16} />
          </Link>
        </div>

        {/* Obituaries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestObituaries.map((obit) => (
            <Link
              key={obit.id}
              to={`/doodsberrigte/${obit.slug}`}
              className="group flex items-start gap-4 bg-gray-50 dark:bg-card rounded-lg p-5 border border-gray-100 dark:border-border hover:border-brand-red/30 dark:hover:border-primary/30 hover:shadow-sm transition-[box-shadow,border-color]"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200 dark:border-border group-hover:border-brand-red dark:group-hover:border-primary transition-colors">
                <ImageWithFallback
                  src={obit.imageUrl}
                  alt={obit.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-normal text-brand-navy dark:text-foreground group-hover:text-brand-red transition-colors line-clamp-1 mb-1 font-heading is-style-card-compact">
                  {obit.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 line-clamp-2 leading-relaxed">
                  {obit.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {obit.dateOfDeath}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} /> {obit.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/doodsberrigte"
            className="inline-block bg-brand-navy text-white font-bold px-8 py-3 rounded hover:bg-brand-navy-light dark:hover:bg-brand-navy-light transition-colors text-sm"
          >
            Sien alle doodsberrigte
          </Link>
        </div>
      </div>
    </section>
  );
};