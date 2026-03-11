import React from 'react';
import { Link } from 'react-router';
import { Clock, Calendar, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ArticleLink } from './ArticleLink';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

interface RelatedArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

interface RelatedEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image?: string;
}

interface RelatedEEdition {
  id: string;
  title: string;
  date: string;
  coverImage: string;
}

interface RelatedContentProps {
  articles?: RelatedArticle[];
  events?: RelatedEvent[];
  eEditions?: RelatedEEdition[];
  className?: string;
}

/**
 * Related content section for single post pages.
 * Shows related articles, events, and/or e-editions in tabs.
 */
export const RelatedContent = ({
  articles = [],
  events = [],
  eEditions = [],
  className = '',
}: RelatedContentProps) => {
  // Determine which tabs to show based on available content
  const tabs: { value: string; label: string; icon: React.ReactNode }[] = [];
  if (articles.length > 0) tabs.push({ value: 'articles', label: 'Verwante Artikels', icon: <Clock size={14} /> });
  if (events.length > 0) tabs.push({ value: 'events', label: 'Komende Gebeure', icon: <Calendar size={14} /> });
  if (eEditions.length > 0) tabs.push({ value: 'editions', label: 'E-uitgawes', icon: <BookOpen size={14} /> });

  if (tabs.length === 0) return null;

  return (
    <section className={`bg-white dark:bg-card p-6 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] mt-10 ${className}`}>
      <Tabs defaultValue={tabs[0].value} className="gap-0">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="font-normal text-brand-navy dark:text-foreground font-heading"
            style={{
              fontVariationSettings: "var(--fvs-h2)",
              lineHeight: 'var(--lh-h2)',
              letterSpacing: 'var(--ls-h2)',
              fontSize: 'var(--text-h2)',
            }}
          >Meer inhoud</h2>
          <TabsList className="bg-gray-100 dark:bg-muted h-10 gap-0 rounded-lg">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-xs font-bold px-3 py-2 rounded-lg gap-1.5 data-[state=active]:bg-brand-navy data-[state=active]:text-white"
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Related Articles */}
        {articles.length > 0 && (
          <TabsContent value="articles">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.slice(0, 3).map((article) => (
                <ArticleLink
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  className="group block bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <ImageWithFallback
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 uppercase">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-normal text-brand-navy dark:text-foreground text-sm leading-snug line-clamp-2 group-hover:text-brand-red transition-colors mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{article.date}</span>
                      <span>&middot;</span>
                      <span>{article.readTime} lees</span>
                    </div>
                  </div>
                </ArticleLink>
              ))}
            </div>
          </TabsContent>
        )}

        {/* Related Events */}
        {events.length > 0 && (
          <TabsContent value="events">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {events.slice(0, 3).map((event) => (
                <Link
                  key={event.id}
                  to={`/gebeure/${event.id}`}
                  className="group block bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  {event.image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded">{event.date}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{event.category}</span>
                    </div>
                    <h3 className="font-normal text-brand-navy dark:text-foreground text-sm leading-snug line-clamp-2 group-hover:text-brand-red transition-colors mb-1 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-gray-400">{event.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        )}

        {/* Related E-Editions */}
        {eEditions.length > 0 && (
          <TabsContent value="editions">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {eEditions.slice(0, 4).map((edition) => (
                <Link
                  key={edition.id}
                  to={`/e-uitgawes/${edition.id}`}
                  className="group block bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={edition.coverImage}
                      alt={edition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-normal text-brand-navy dark:text-foreground text-xs leading-snug line-clamp-1 group-hover:text-brand-red transition-colors font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      {edition.title}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-1">{edition.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </section>
  );
};