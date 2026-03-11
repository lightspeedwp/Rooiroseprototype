import React from 'react';
import { Link } from 'react-router';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { NEWSLETTER_CTA } from '../../data/newsletter';

export const NewsletterCTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy/80 to-brand-navy py-16 md:py-20 text-white w-full"
      style={{ paddingLeft: 'clamp(1rem, 4vw, 2rem)', paddingRight: 'clamp(1rem, 4vw, 2rem)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 mx-[0px] mt-[0px] mb-[32px] p-[64px]">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-red rounded-full blur-3xl"></div>
      </div>

      <div className="alignwide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-red rounded-full mb-8">
            <Mail size={40} className="text-white" />
          </div>

          {/* Heading */}
          <h2 className="is-style-display text-white mb-4">
            {NEWSLETTER_CTA.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {NEWSLETTER_CTA.description}
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-white">
            {NEWSLETTER_CTA.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center">
                  <Check size={16} />
                </div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link 
            to="/nuusbrief-inteken" 
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg text-lg transition-[background-color,transform] hover:scale-105 shadow-2xl"
          >
            {NEWSLETTER_CTA.buttonText}
            <ArrowRight size={20} />
          </Link>

          {/* Social proof */}
          <p className="text-sm text-gray-400 mt-6">
            {NEWSLETTER_CTA.socialProof}
          </p>

        </div>
      </div>
    </section>
  );
};