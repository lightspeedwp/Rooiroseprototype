import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/common/SEO';
import { 
  LANDING_PAGE_HERO,
  LANDING_PAGE_FEATURES,
  LANDING_PAGE_TESTIMONIALS,
  LANDING_PAGE_CTA,
  LANDING_PAGE_STATS
} from '../data/editorialDemo';
import {
  Palette,
  Smartphone,
  Zap,
  Accessibility,
  Package,
  BookOpen,
  ArrowRight,
  Quote,
  Star
} from 'lucide-react';

/* ── Editorial Landing Page — rooi rose ───────────────────────────────
 * Marketing-focused landing page for the editorial design system
 * Features: Hero with parallax, feature cards, testimonials, stats, CTA
 * Purpose: Showcase design system value and drive engagement
 * ────────────────────────────────────────────────────────────────────── */

/* ── Parallax Hero Component ───────────────────────────────────────── */
const ParallaxHero: React.FC<{
  backgroundImage: string;
  children: React.ReactNode;
}> = ({ backgroundImage, children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};

/* ── Fade In Section ───────────────────────────────────────────────── */
const FadeInSection: React.FC<{ 
  children: React.ReactNode; 
  delay?: number 
}> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

/* ── Feature Card ──────────────────────────────────────────────────── */
const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Palette,
    Smartphone,
    Zap,
    Accessibility,
    Package,
    BookOpen,
  };

  const Icon = iconMap[icon] || Palette;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
      <div 
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: 'rgba(224, 30, 18, 0.1)' }}
      >
        <Icon className="w-7 h-7" style={{ color: 'var(--custom-primary)' }} />
      </div>

      <h3 
        className="font-display text-xl font-semibold mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>

      <p 
        className="font-body text-gray-600 dark:text-gray-300 leading-relaxed"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {description}
      </p>
    </div>
  );
};

/* ── Testimonial Card ──────────────────────────────────────────────── */
const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role: string;
  avatar: string;
}> = ({ quote, author, role, avatar }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
      {/* Quote Icon */}
      <div className="mb-6" style={{ color: 'var(--custom-primary)', opacity: 0.2 }}>
        <Quote className="w-10 h-10" />
      </div>

      {/* Quote Text */}
      <blockquote 
        className="font-body text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div 
            className="font-body font-semibold text-gray-900 dark:text-white"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {author}
          </div>
          <div 
            className="font-body text-sm text-gray-500 dark:text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {role}
          </div>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: 'var(--custom-primary)' }}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Main Component ────────────────────────────────────────────────── */
export const EditorialLandingPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="rooi rose Redaksionele Ontwerpstelsel — Skep Beeldskone Magazine Ervarings"
        description="Alles wat jy nodig het om magazine-kwaliteit webbladsye te bou. Volledig responsive, toeganklik, en prestasie-geoptimeer."
        keywords="editorial design system, magazine layout, responsive design, rooi rose, web design"
      />

      {/* Hero Section with Parallax — FULL WIDTH */}
      <ParallaxHero backgroundImage={LANDING_PAGE_HERO.image}>
        <div className="w-full px-6 md:px-10 py-20 md:py-32 text-center">
          <FadeInSection>
            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {LANDING_PAGE_HERO.title}
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p 
              className="font-body text-2xl md:text-3xl mb-4 max-w-3xl mx-auto"
              style={{ 
                color: 'var(--custom-primary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600
              }}
            >
              {LANDING_PAGE_HERO.subtitle}
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <p 
              className="font-body text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {LANDING_PAGE_HERO.description}
            </p>
          </FadeInSection>

          <FadeInSection delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={LANDING_PAGE_HERO.cta.primary.href}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-body font-bold text-white text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                style={{ 
                  backgroundColor: 'var(--custom-primary)',
                  fontFamily: 'var(--font-body)' 
                }}
              >
                {LANDING_PAGE_HERO.cta.primary.text}
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to={LANDING_PAGE_HERO.cta.secondary.href}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-body font-bold text-white text-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {LANDING_PAGE_HERO.cta.secondary.text}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </ParallaxHero>

      {/* Stats Section — FULL WIDTH */}
      <section 
        className="py-16 md:py-24 text-white"
        style={{ backgroundColor: 'var(--custom-primary)' }}
      >
        <div className="w-full px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {LANDING_PAGE_STATS.map((stat, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="text-center">
                  <div 
                    className="font-display text-4xl md:text-6xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="font-body text-sm md:text-base uppercase tracking-wider opacity-90"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section — FULL WIDTH */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                style={{ 
                  color: 'var(--custom-primary)',
                  fontFamily: 'var(--font-display)' 
                }}
              >
                Kragtige Kenmerke
              </h2>
              <p 
                className="font-body text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Alles wat jy nodig het om beeldskone, professionele webbladsye te skep
              </p>
            </div>
          </FadeInSection>

          {/* Responsive grid: 1-2-3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LANDING_PAGE_FEATURES.map((feature, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <FeatureCard {...feature} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section — FULL WIDTH */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-800">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 
                className="font-display text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Wat Gebruikers Sê
              </h2>
              <p 
                className="font-body text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Hoor van spanne wat die ontwerpstelsel gebruik
              </p>
            </div>
          </FadeInSection>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {LANDING_PAGE_TESTIMONIALS.map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <TestimonialCard {...testimonial} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — FULL WIDTH */}
      <section 
        className="py-24 md:py-40 text-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--custom-contrast)' }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 30% 50%, var(--custom-primary) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <h2 
              className="font-display text-4xl md:text-6xl font-bold text-white mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {LANDING_PAGE_CTA.title}
            </h2>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p 
              className="font-body text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {LANDING_PAGE_CTA.description}
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to={LANDING_PAGE_CTA.primaryButton.href}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-body font-bold text-lg bg-white hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105"
                style={{ 
                  color: 'var(--custom-primary)',
                  fontFamily: 'var(--font-body)' 
                }}
              >
                {LANDING_PAGE_CTA.primaryButton.text}
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to={LANDING_PAGE_CTA.secondaryButton.href}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-body font-bold text-lg text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {LANDING_PAGE_CTA.secondaryButton.text}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};
