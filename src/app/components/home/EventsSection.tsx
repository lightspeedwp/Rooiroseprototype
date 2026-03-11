import React from 'react';
import { Calendar, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { EVENTS } from '../../data/events';

export const EventsSection = () => {
  const upcomingEvents = EVENTS.slice(0, 4);

  return (
    <section className="alignwide my-6">
      <div className="p-6 bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)]">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-2 border-b-2 border-brand-red">
          <div className="flex items-center gap-3">
            <Calendar className="text-brand-red" size={28} />
            <h2 className="text-brand-navy dark:text-foreground">
              Komende Gebeure
            </h2>
          </div>
          <Link
            to="/gebeure"
            className="text-brand-red font-bold text-sm hover:underline flex items-center gap-1"
          >
            Alle gebeure <ChevronRight size={16} />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              to={`/gebeure/${event.id}`}
              className="group flex bg-white dark:bg-card rounded-lg overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-100 dark:border-border hover:shadow-md hover:border-brand-red/20 dark:hover:border-primary/30 transition-[box-shadow,border-color]"
            >
              {/* Date Box */}
              <div className="bg-brand-red text-white p-5 flex flex-col items-center justify-center min-w-[90px] w-[90px] shrink-0">
                <span className="text-2xl font-normal font-heading leading-none mb-0.5" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
                  {event.date.includes(' ')
                    ? event.date.split(' ')[0]
                    : event.date}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-medium opacity-90">
                  {event.date.includes(' ')
                    ? event.date.split(' ').slice(1).join(' ')
                    : ''}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 min-w-0">
                <span className="text-[10px] font-bold uppercase text-brand-red tracking-wider bg-red-50 dark:bg-primary/10 px-2 py-0.5 rounded inline-block mb-2">
                  {event.category}
                </span>
                <h3 className="is-style-card-compact text-brand-navy dark:text-foreground group-hover:text-brand-red transition-colors line-clamp-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {event.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/gebeure"
            className="inline-block bg-brand-red text-white font-bold px-8 py-3 rounded hover:bg-brand-red-hover transition-colors text-sm"
          >
            Sien alle gebeure
          </Link>
          <Link
            to="/gebeure/dien-in"
            className="inline-block border-2 border-brand-navy dark:border-muted-foreground text-brand-navy dark:text-foreground font-bold px-8 py-3 rounded hover:bg-brand-navy dark:hover:bg-muted hover:text-white transition-colors text-sm"
          >
            Dien jou gebeurtenis in
          </Link>
        </div>
      </div>
    </section>
  );
};