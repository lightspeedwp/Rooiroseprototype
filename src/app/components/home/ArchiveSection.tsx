import React from 'react';
import { Archive, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { FEATURED_ARCHIVES, HOME_CONTENT } from '../../data/home';

export const ArchiveSection = () => {
  return (
    <section className="alignwide my-6">
      <div className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
        <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-teal-600">
          <div className="flex items-center gap-3">
            <Archive className="text-teal-700" size={32} />
            <h2 className="text-brand-navy dark:text-foreground">
              {HOME_CONTENT.archive.heading}
            </h2>
          </div>
        </div>

        <div className="bg-white dark:bg-card rounded-lg p-8 shadow-lg dark:shadow-[var(--shadow-dark-300)] mb-6">
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className="flex-shrink-0">
              <Clock size={64} className="text-teal-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-brand-navy dark:text-foreground mb-3">
                {HOME_CONTENT.archive.subHeading}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {HOME_CONTENT.archive.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/soek"
                  className="inline-block bg-brand-red text-white px-6 py-3 rounded font-bold hover:bg-brand-red-hover transition-colors"
                >
                  {HOME_CONTENT.archive.buttons.search}
                </Link>
                <Link
                  to="/e-uitgawes"
                  className="inline-block bg-brand-navy text-white px-6 py-3 rounded font-bold hover:bg-brand-navy-light dark:hover:bg-brand-navy-light transition-colors"
                >
                  {HOME_CONTENT.archive.buttons.eEditions}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ARCHIVES.map((archive, index) => (
            <Link
              key={index}
              to="/e-uitgawes"
              className="group bg-white dark:bg-card rounded-lg overflow-hidden shadow-md dark:shadow-[var(--shadow-dark-300)] hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-teal-100 dark:from-teal-950/40 to-teal-50 dark:to-teal-900/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-700 dark:text-teal-500 mb-2">{archive.month}</p>
                  <p className="text-2xl font-bold text-teal-900 dark:text-teal-400">{archive.year}</p>
                </div>
              </div>
              <div className="p-4 border-t-4 border-teal-500">
                <p className="font-semibold text-brand-navy dark:text-foreground group-hover:text-brand-red transition-colors">
                  {archive.highlight}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{HOME_CONTENT.archive.cardAction}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};