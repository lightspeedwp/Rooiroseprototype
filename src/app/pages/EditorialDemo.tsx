import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/common/SEO';
import { PullQuoteSection } from '../components/home/PullQuoteSection';
import { 
  EDITORIAL_DEMO_HERO, 
  EDITORIAL_PATTERNS,
  EDITORIAL_DEMO_STATS,
  EDITORIAL_DEMO_QUOTES,
  EDITORIAL_DEMO_GALLERY_IMAGES,
  EDITORIAL_DEMO_CALLOUTS,
  EDITORIAL_DEMO_FAQS
} from '../data/editorialDemo';
import { 
  Palette, 
  Layout, 
  Type, 
  MousePointer,
  CheckCircle,
  Info,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

/* ── Editorial Demo Page — rooi rose ──────────────────────────────────
 * Showcases all editorial patterns with full-width layout
 * Features: WebGL hero, masonry grids, scrollytelling, interactive elements
 * Purpose: Demonstrate design system capabilities and editorial excellence
 * ────────────────────────────────────────────────────────────────────── */

// Lazy load accordion for better performance
const Accordion = lazy(() => import('../components/ui/accordion').then(m => ({ 
  default: m.Accordion 
})));
const AccordionItem = lazy(() => import('../components/ui/accordion').then(m => ({ 
  default: m.AccordionItem 
})));
const AccordionTrigger = lazy(() => import('../components/ui/accordion').then(m => ({ 
  default: m.AccordionTrigger 
})));
const AccordionContent = lazy(() => import('../components/ui/accordion').then(m => ({ 
  default: m.AccordionContent 
})));

/* ── WebGL Animated Hero Background ────────────────────────────────── */
const WebGLHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 30, 18, ${particle.alpha})`; // rooi rose red
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(224, 30, 18, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.3 }}
    />
  );
};

/* ── Fade-In on Scroll Component ──────────────────────────────────── */
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, 
  delay = 0 
}) => {
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
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

/* ── Callout Box Component ──────────────────────────────────────────── */
const CalloutBox: React.FC<{
  type: 'info' | 'success' | 'warning';
  title?: string;
  children: React.ReactNode;
}> = ({ type, title, children }) => {
  const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
  };

  const styles = {
    info: 'bg-blue-50 dark:bg-blue-950/30 border-blue-600 dark:border-blue-500',
    success: 'bg-green-50 dark:bg-green-950/30 border-green-600 dark:border-green-500',
    warning: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-600 dark:border-yellow-500',
  };

  const Icon = icons[type];

  return (
    <div className={`p-6 md:p-8 border-l-4 rounded ${styles[type]} my-6`}>
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 flex-shrink-0 mt-1" />
        <div className="flex-1">
          {title && (
            <strong className="block mb-2 font-body text-base">{title}</strong>
          )}
          <div className="font-body text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

/* ── Stats Block Component ──────────────────────────────────────────── */
const StatsBlock: React.FC<{ 
  stats: Array<{ number: string; label: string }> 
}> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 my-12">
      {stats.map((stat, index) => (
        <FadeInSection key={index} delay={index * 100}>
          <div className="text-center">
            <div 
              className="font-display text-4xl md:text-5xl font-bold mb-2"
              style={{ 
                color: 'var(--custom-primary)',
                fontFamily: 'var(--font-display)' 
              }}
            >
              {stat.number}
            </div>
            <div 
              className="font-body text-sm uppercase tracking-wider"
              style={{ 
                color: 'var(--custom-tagline-grey)',
                fontFamily: 'var(--font-body)' 
              }}
            >
              {stat.label}
            </div>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
};

/* ── Pattern Card Component ──────────────────────────────────────────── */
const PatternCard: React.FC<{
  pattern: typeof EDITORIAL_PATTERNS[0];
}> = ({ pattern }) => {
  const categoryIcons = {
    'Heroes': Sparkles,
    'Typography': Type,
    'Layouts': Layout,
    'Content Blocks': Palette,
    'Scrollytelling': MousePointer,
    'Interactive': MousePointer,
  };

  const Icon = categoryIcons[pattern.category as keyof typeof categoryIcons] || Palette;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div 
          className="p-2 rounded-lg"
          style={{ backgroundColor: 'var(--custom-primary)', opacity: 0.1 }}
        >
          <Icon className="w-5 h-5" style={{ color: 'var(--custom-primary)' }} />
        </div>
        <div className="flex-1">
          <h3 
            className="font-display text-xl font-semibold mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {pattern.name}
          </h3>
          <span 
            className="inline-block text-xs uppercase tracking-wider px-2 py-1 rounded"
            style={{ 
              color: 'var(--custom-primary)',
              backgroundColor: 'rgba(224, 30, 18, 0.1)'
            }}
          >
            {pattern.category}
          </span>
        </div>
      </div>

      <p className="font-body text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {pattern.description}
      </p>

      <div className="mb-4">
        <h4 className="font-body text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Features:
        </h4>
        <ul className="space-y-1">
          {pattern.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm font-body text-gray-700 dark:text-gray-200">
              <CheckCircle className="w-4 h-4" style={{ color: 'var(--custom-primary)' }} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="font-body text-xs text-gray-500 dark:text-gray-400">
          <strong>Usage:</strong> {pattern.usage}
        </p>
      </div>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────────────────── */
export const EditorialDemo: React.FC = () => {
  return (
    <>
      <SEO 
        title="Redaksionele Demo — rooi rose Ontwerpstelsel"
        description="Verken alle redaksionele patrone en komponente in die rooi rose ontwerpstelsel. Van heroes tot galleries, pull quotes tot interaktiewe elemente."
        keywords="editorial design, magazine layout, design patterns, rooi rose, design system"
      />

      {/* Hero Section with WebGL Background — FULL WIDTH */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <WebGLHero />
        
        <div className="relative z-10 w-full px-6 md:px-10 py-20 md:py-32 text-center">
          <FadeInSection>
            <h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {EDITORIAL_DEMO_HERO.title}
            </h1>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p 
              className="font-body text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {EDITORIAL_DEMO_HERO.subtitle}
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <p 
              className="font-body text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {EDITORIAL_DEMO_HERO.description}
            </p>
          </FadeInSection>

          <FadeInSection delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={EDITORIAL_DEMO_HERO.cta.primary.href}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--custom-primary)',
                  fontFamily: 'var(--font-body)' 
                }}
              >
                {EDITORIAL_DEMO_HERO.cta.primary.text}
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                to={EDITORIAL_DEMO_HERO.cta.secondary.href}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white border-2 border-white/30 hover:border-white/60 transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {EDITORIAL_DEMO_HERO.cta.secondary.text}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Section — FULL WIDTH */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <StatsBlock stats={EDITORIAL_DEMO_STATS} />
        </div>
      </section>

      {/* Pull Quote 1 */}
      <PullQuoteSection 
        quote={EDITORIAL_DEMO_QUOTES[0].quote}
        author={`${EDITORIAL_DEMO_QUOTES[0].author}, ${EDITORIAL_DEMO_QUOTES[0].role}`}
        bgColor="grey"
      />

      {/* Patterns Grid — FULL WIDTH with responsive columns */}
      <section 
        id="patterns" 
        className="py-16 md:py-24 bg-white dark:bg-gray-900"
      >
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 
                className="font-display text-3xl md:text-5xl font-bold mb-6"
                style={{ 
                  color: 'var(--custom-primary)',
                  fontFamily: 'var(--font-display)' 
                }}
              >
                Redaksionele Patrone
              </h2>
              <p 
                className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Verken die volledige versameling van herbruikbare ontwerp-komponente
              </p>
            </div>
          </FadeInSection>

          {/* Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop, 4 cols wide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {EDITORIAL_PATTERNS.map((pattern, index) => (
              <FadeInSection key={pattern.id} delay={index * 50}>
                <PatternCard pattern={pattern} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote 2 */}
      <PullQuoteSection 
        quote={EDITORIAL_DEMO_QUOTES[1].quote}
        author={`${EDITORIAL_DEMO_QUOTES[1].author}, ${EDITORIAL_DEMO_QUOTES[1].role}`}
        bgColor="blush"
      />

      {/* Callouts Section — FULL WIDTH */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <h2 
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Beste Praktyke
            </h2>
          </FadeInSection>

          <div className="max-w-4xl mx-auto space-y-6">
            {EDITORIAL_DEMO_CALLOUTS.map((callout, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <CalloutBox type={callout.type} title={callout.title}>
                  {callout.content}
                </CalloutBox>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid — FULL WIDTH Masonry */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <h2 
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Visuele Galery
            </h2>
          </FadeInSection>

          {/* CSS Columns Masonry — responsive columns increase with width */}
          <div 
            className="masonry-grid"
            style={{
              columnCount: 1,
              columnGap: '1.5rem',
            }}
          >
            <style>{`
              @media (min-width: 640px) {
                .masonry-grid { column-count: 2; }
              }
              @media (min-width: 1024px) {
                .masonry-grid { column-count: 3; }
              }
              @media (min-width: 1280px) {
                .masonry-grid { column-count: 4; }
              }
              @media (min-width: 1536px) {
                .masonry-grid { column-count: 5; }
              }
              .masonry-grid > div {
                break-inside: avoid;
                margin-bottom: 1.5rem;
              }
            `}</style>
            {EDITORIAL_DEMO_GALLERY_IMAGES.map((image, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <p className="font-body text-sm text-gray-600 dark:text-gray-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote 3 */}
      <PullQuoteSection 
        quote={EDITORIAL_DEMO_QUOTES[2].quote}
        author={`${EDITORIAL_DEMO_QUOTES[2].author}, ${EDITORIAL_DEMO_QUOTES[2].role}`}
        bgColor="grey"
      />

      {/* FAQ Section — FULL WIDTH */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <h2 
              className="font-display text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Algemene Vrae
            </h2>
          </FadeInSection>

          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<div>Loading...</div>}>
              <Accordion type="single" collapsible className="w-full">
                {EDITORIAL_DEMO_FAQS.map((faq, index) => (
                  <FadeInSection key={index} delay={index * 50}>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger 
                        className="font-body text-lg font-semibold text-left"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="font-body text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </FadeInSection>
                ))}
              </Accordion>
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section — FULL WIDTH */}
      <section 
        className="py-20 md:py-32 text-center text-white"
        style={{ backgroundColor: 'var(--custom-primary)' }}
      >
        <div className="w-full px-6 md:px-10 lg:px-20">
          <FadeInSection>
            <h2 
              className="font-display text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Gereed om te begin?
            </h2>
          </FadeInSection>

          <FadeInSection delay={200}>
            <p 
              className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Verken die volledige dokumentasie en begin skep beeldskone redaksionele ervarings
            </p>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ontwikkelaar/patrone"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold bg-white hover:bg-gray-100 transition-all duration-300"
                style={{ 
                  color: 'var(--custom-primary)',
                  fontFamily: 'var(--font-body)' 
                }}
              >
                Bekyk Patrone
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/ontwikkelaar/riglyne"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-white border-2 border-white/30 hover:border-white transition-all duration-300"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Lees Riglyne
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};
