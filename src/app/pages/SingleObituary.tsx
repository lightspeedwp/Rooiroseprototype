import React from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { Calendar, MapPin, Heart, Clock, Share2, Printer, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { getObituaryBySlug, OBITUARIES } from '../data/obituaries';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';
import { SocialShare } from '../components/common/SocialShare';
import { copyToClipboard } from '../utils/clipboard';

export const SingleObituaryPage = () => {
  const { slug } = useParams();
  const obituary = slug ? getObituaryBySlug(slug) : undefined;

  if (!obituary) {
    return <Navigate to="/doodsberrigte" replace />;
  }

  // Get other obituaries for sidebar (excluding current)
  const otherObituaries = OBITUARIES.filter((o) => o.id !== obituary.id).slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Doodsberig: ${obituary.name}`,
        url: window.location.href,
      });
    } else {
      copyToClipboard(window.location.href);
      toast.success('Skakel gekopieer');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen font-inter">
      <SEO
        title={`${obituary.name} - Doodsberig | rooi rose`}
        description={obituary.excerpt}
        keywords={`doodsberig, ${obituary.name}, ${obituary.location}, begrafnis`}
      />

      <PageContainer
        breadcrumbs={[
          { label: 'Doodsberrigte', href: '/doodsberrigte' },
          { label: obituary.name },
        ]}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Header Card */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] overflow-hidden mb-8">
              {/* Photo + Name Banner */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-navy-light dark:bg-background p-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-lg flex-shrink-0">
                  <ImageWithFallback
                    src={obituary.imageUrl}
                    alt={obituary.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl font-normal text-white has-brand-serif-font-family mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
                    {obituary.name}
                  </h1>
                  <p className="text-white/80 text-lg">
                    {obituary.dateOfBirth} &mdash; {obituary.dateOfDeath}
                  </p>
                  <p className="text-white/60 text-sm mt-1">
                    Ouderdom: {obituary.age} jaar
                  </p>
                </div>
              </div>

              {/* Meta Bar */}
              <div className="flex flex-wrap gap-4 px-8 py-4 border-b border-gray-100 dark:border-border text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gray-400 dark:text-gray-500" />
                  {obituary.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gray-400 dark:text-gray-500" />
                  Gepubliseer: {obituary.published}
                </span>
              </div>

              {/* Biography */}
              <div className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 italic border-l-4 border-primary dark:border-primary pl-4">
                  {obituary.excerpt}
                </p>

                <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  {obituary.biography.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Survived By */}
                <div className="mt-8 bg-gray-50 dark:bg-background rounded-lg p-6 border border-gray-100 dark:border-border">
                  <h2 className="font-normal text-brand-navy dark:text-foreground font-heading mb-3 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                    <Heart size={18} className="text-primary dark:text-primary" />
                    Nagelate Familie
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{obituary.survivedBy}</p>
                </div>

                {/* Funeral Details */}
                <div className="mt-4 bg-gray-50 dark:bg-background rounded-lg p-6 border border-gray-100 dark:border-border">
                  <h2 className="font-normal text-brand-navy dark:text-foreground font-heading mb-3 flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
                    <Clock size={18} className="text-primary dark:text-primary" />
                    Begrafnisbesonderhede
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{obituary.funeralDetails}</p>
                </div>

                {/* Social Sharing */}
                <div className="px-8 py-5 border-t border-gray-100 dark:border-border">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <Link
                      to="/doodsberrigte"
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft size={14} />
                      Terug na Doodsberrigte
                    </Link>
                    <SocialShare
                      title={`Doodsberig: ${obituary.name}`}
                      description={obituary.excerpt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-6">
            {/* Condolence Note */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
              <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Medelye oordra
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Wil u u medelye aan die familie oordra? Stuur 'n boodskap aan die redaksie en ons sal dit aan die naasbestaandes oorhandig.
              </p>
              <Button asChild className="w-full bg-brand-navy hover:bg-brand-navy-light dark:hover:bg-brand-navy-light text-white">
                <Link to="/kontak">Stuur medelye-boodskap</Link>
              </Button>
            </div>

            {/* Place an Obituary */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
              <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Plaas 'n doodsberig
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Stuur die oorledene se besonderhede, lewensbeskrywing en foto aan ons.
              </p>
              <a
                href="mailto:doodsberrigte@diepapier.co.za"
                className="text-text-link-red dark:text-text-link-red text-sm font-bold hover:underline"
              >
                doodsberrigte@diepapier.co.za
              </a>
            </div>

            {/* Other Obituaries */}
            <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6">
              <h3 className="font-normal text-brand-navy dark:text-foreground font-heading mb-4" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
                Ander Doodsberrigte
              </h3>
              <div className="space-y-4">
                {otherObituaries.map((obit) => (
                  <Link
                    key={obit.id}
                    to={`/doodsberrigte/${obit.slug}`}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={obit.imageUrl}
                        alt={obit.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-navy dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors line-clamp-1">
                        {obit.name}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {obit.location} &middot; {obit.dateOfDeath}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to="/doodsberrigte"
                className="block text-center text-sm text-text-link-red dark:text-text-link-red font-bold mt-4 hover:underline"
              >
                Alle doodsberrigte
              </Link>
            </div>
          </aside>
        </div>
      </PageContainer>
    </div>
  );
};

export default SingleObituaryPage;