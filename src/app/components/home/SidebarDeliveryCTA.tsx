import React from 'react';
import { Link } from 'react-router';
import { Truck, ArrowRight } from 'lucide-react';
import { HOME_CONTENT } from '../../data/home';

export const SidebarDeliveryCTA = () => {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-card border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)]">
      <Link
        to="/inteken/aflewering"
        className="group block rounded-md overflow-hidden"
      >
        <div className="bg-gradient-to-br from-brand-red to-brand-red-hover px-5 py-5 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-shrink-0 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center">
              <Truck size={20} className="text-white" />
            </div>
            <h4 className="text-lg has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h4)" }}>
              {HOME_CONTENT.sidebar.delivery.title}
            </h4>
          </div>
          <p className="text-white/80 text-xs leading-relaxed mb-4">
            {HOME_CONTENT.sidebar.delivery.description}
          </p>
          <span className="inline-flex items-center gap-2 bg-white text-brand-red font-bold text-sm px-4 py-2 rounded group-hover:bg-gray-100 transition-colors w-full justify-center">
            {HOME_CONTENT.sidebar.delivery.button}
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </div>
  );
};