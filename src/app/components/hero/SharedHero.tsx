import React from 'react';
import { Link } from 'react-router';
import { HeroProps, formatDateAfrikaans } from '../../data/models/HeroProps';

/**
 * SharedHero Component
 * 
 * Universal hero component with 6 variants for all page templates.
 * Variants: home, category, subcategory, article, competition, award
 */
export function SharedHero(props: HeroProps) {
  const { variant, title, subtitle, image, category, breadcrumbs, meta, prize, awardCategory } = props;
  
  // Variant-specific rendering
  switch (variant) {
    case 'home':
      return <HomeHero title={title} image={image} />;
    case 'category':
      return <CategoryHero title={title} subtitle={subtitle} image={image} breadcrumbs={breadcrumbs} />;
    case 'subcategory':
      return <SubcategoryHero title={title} image={image} category={category} breadcrumbs={breadcrumbs} />;
    case 'article':
      return <ArticleHero title={title} subtitle={subtitle} image={image} category={category} breadcrumbs={breadcrumbs} meta={meta} />;
    case 'competition':
      return <CompetitionHero title={title} image={image} category={category} prize={prize} breadcrumbs={breadcrumbs} />;
    case 'award':
      return <AwardHero title={title} image={image} category={category} awardCategory={awardCategory} breadcrumbs={breadcrumbs} />;
    default:
      return null;
  }
}

/**
 * Breadcrumbs Component
 */
function Breadcrumbs({ breadcrumbs }: { breadcrumbs?: Array<{ label: string; href: string }> }) {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex gap-2 text-sm text-gray-600">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link to={crumb.href} className="hover:text-brand-primary transition-colors">
                  {crumb.label}
                </Link>
                <span>/</span>
              </>
            ) : (
              <span aria-current="page" className="text-gray-900 font-semibold">
                {crumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Home Hero (Variant 1)
 * 
 * Full-width hero slider with title overlay.
 * Used on homepage with featured posts.
 */
function HomeHero({ title, image }: { title: string; image: string }) {
  return (
    <div className="hero-home relative h-[60vh] md:h-[70vh] overflow-hidden">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex items-end h-full container mx-auto px-4 md:px-6 py-8 md:py-12">
        <h1 className="has-brand-serif-font-family text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg max-w-4xl">
          {title}
        </h1>
      </div>
    </div>
  );
}

/**
 * Category Hero (Variant 2)
 * 
 * Category landing page hero with title + description.
 * Includes breadcrumbs and subcategory quick links below (via CategoryHeroLinks).
 */
function CategoryHero({ 
  title, 
  subtitle, 
  image, 
  breadcrumbs 
}: { 
  title: string; 
  subtitle?: string; 
  image: string; 
  breadcrumbs?: Array<{ label: string; href: string }> 
}) {
  return (
    <div className="hero-category relative h-[40vh] md:h-[50vh] overflow-hidden">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex items-end h-full container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className="has-brand-serif-font-family text-white text-4xl md:text-5xl font-bold mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="has-brand-sans-font-family text-white/90 text-lg md:text-xl max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Subcategory Hero (Variant 3)
 * 
 * Similar to category hero but with subcategory context.
 */
function SubcategoryHero({ 
  title, 
  image, 
  category, 
  breadcrumbs 
}: { 
  title: string; 
  image: string; 
  category?: string; 
  breadcrumbs?: Array<{ label: string; href: string }> 
}) {
  return (
    <div className="hero-subcategory relative h-[40vh] md:h-[50vh] overflow-hidden">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 flex items-end h-full container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          {category && (
            <p className="text-white/80 text-sm md:text-base mb-2 uppercase tracking-wide">
              {category}
            </p>
          )}
          <h1 className="has-brand-serif-font-family text-white text-4xl md:text-5xl font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

/**
 * Article Hero (Variant 4)
 * 
 * Single article hero with metadata (author, date, category, tags).
 */
function ArticleHero({ 
  title, 
  subtitle, 
  image, 
  category, 
  breadcrumbs, 
  meta 
}: { 
  title: string; 
  subtitle?: string; 
  image: string; 
  category?: string; 
  breadcrumbs?: Array<{ label: string; href: string }>;
  meta?: { author: string; date: string; readTime?: number; tags?: string[] }
}) {
  return (
    <div className="hero-article">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={image} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          
          {category && (
            <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs md:text-sm font-semibold rounded-full mb-4">
              {category}
            </span>
          )}
          
          <h1 className="has-brand-serif-font-family text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          
          {subtitle && (
            <p className="has-brand-sans-font-family text-white/90 text-lg md:text-xl mb-6">
              {subtitle}
            </p>
          )}
          
          {meta && (
            <div className="flex flex-wrap gap-4 text-white/80 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {meta.author}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDateAfrikaans(meta.date)}
              </span>
              {meta.readTime && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {meta.readTime} min
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Competition Hero (Variant 5)
 * 
 * Competition entry page hero with prize callout + CTA button.
 */
function CompetitionHero({ 
  title, 
  image, 
  category, 
  prize, 
  breadcrumbs 
}: { 
  title: string; 
  image: string; 
  category?: string; 
  prize?: string; 
  breadcrumbs?: Array<{ label: string; href: string }> 
}) {
  return (
    <div className="hero-competition relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 flex items-end h-full container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          
          {category && (
            <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs md:text-sm font-semibold rounded-full mb-4">
              {category}
            </span>
          )}
          
          <h1 className="has-brand-serif-font-family text-white text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          
          {prize && (
            <p className="text-brand-primary text-xl md:text-2xl font-bold mb-6 bg-white/10 backdrop-blur-sm inline-block px-4 py-2 rounded">
              Wen: {prize}
            </p>
          )}
          
          <button className="bg-brand-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
            Neem deel
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Award Hero (Variant 6)
 * 
 * Award winner page hero with winner badge.
 */
function AwardHero({ 
  title, 
  image, 
  category, 
  awardCategory, 
  breadcrumbs 
}: { 
  title: string; 
  image: string; 
  category?: string; 
  awardCategory?: string; 
  breadcrumbs?: Array<{ label: string; href: string }> 
}) {
  return (
    <div className="hero-award relative h-[50vh] md:h-[60vh] overflow-hidden">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="relative z-10 flex items-end h-full container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-3xl">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-4 py-2 bg-brand-primary text-white text-sm md:text-base font-bold rounded-full flex items-center gap-2">
              <span role="img" aria-label="trophy">🏆</span>
              Rooiwarm Wenner
            </span>
            {awardCategory && (
              <span className="text-white/80 text-sm md:text-base">
                {awardCategory}
              </span>
            )}
          </div>
          
          <h1 className="has-brand-serif-font-family text-white text-3xl md:text-5xl font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
