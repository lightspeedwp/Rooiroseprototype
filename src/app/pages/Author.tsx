import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { User, Mail, Facebook, Twitter, Linkedin, Calendar, FileText } from 'lucide-react';
import { getAllArticles } from '../data/categoryArticles';
import { PageContainer } from '../components/common/PageContainer';
import { ArticleLink } from '../components/common/ArticleLink';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { SEO } from '../components/common/SEO';

/**
 * Author Profile Page
 * Shows all articles by a specific author
 */
export const AuthorPage = () => {
  const { authorName } = useParams();
  
  if (!authorName) {
    return <Navigate to="/" replace />;
  }
  
  // Decode URL-encoded author name
  const decodedAuthor = decodeURIComponent(authorName);
  
  // Get all articles by this author
  const allArticles = getAllArticles();
  const authorArticles = allArticles.filter(
    article => article.author.toLowerCase() === decodedAuthor.toLowerCase()
  );
  
  if (authorArticles.length === 0) {
    return <Navigate to="/" replace />;
  }
  
  // Author bio data (in a real app, this would come from a database)
  const authorBios: Record<string, { bio: string; role: string; image?: string }> = {
    'redaksie': {
      role: 'Redaksie',
      bio: 'rooi rose se toegewyde span van joernaliste wat werk aan die jongste nuus en stories vir ons lesers.',
    },
    'johan bekker': {
      role: 'Senior Joernalis',
      bio: "Johan is 'n bekroonde joernalis met meer as 15 jaar ondervinding in verslagdoening oor sport en plaaslike sake.",
    },
    'annelie venter': {
      role: 'Opvoedkundige Korrespondent',
      bio: 'Annelie spesialiseer in opvoedkundige stories en dekking van plaaslike skoolgebeure.',
    },
    'pieter steyn': {
      role: 'Sportsjoernalis',
      bio: "Pieter dek alle aspekte van plaaslike en nasionale sport met 'n passie vir rugby en krieket.",
    },
    'marie du toit': {
      role: 'Lewenstyl Skrywer',
      bio: "Marie bring stories oor kuns, kultuur en plaaslike gebeure met 'n vars perspektief.",
    },
  };
  
  const authorInfo = authorBios[decodedAuthor.toLowerCase()] || {
    role: 'Joernalis',
    bio: `${decodedAuthor} is 'n joernalis vir rooi rose wat verskeie onderwerpe dek.`,
  };

  // Group articles by category
  const articlesByCategory: Record<string, typeof authorArticles> = {};
  authorArticles.forEach(article => {
    if (!articlesByCategory[article.category]) {
      articlesByCategory[article.category] = [];
    }
    articlesByCategory[article.category].push(article);
  });

  return (
    <PageContainer
      breadcrumbs={[
        { label: 'Skrywers', href: '/oor-ons/redaksie' },
        { label: decodedAuthor }
      ]}
    >
      <SEO
        title={`${decodedAuthor} - Skrywer`}
        description={`Artikels deur ${decodedAuthor} op rooi rose. ${authorArticles.length} artikels beskikbaar.`}
        keywords={`${decodedAuthor}, skrywer, joernalis, artikels, die papier`}
      />
      {/* Author Header */}
      <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Author Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-brand-navy flex items-center justify-center text-white text-4xl md:text-5xl font-bold">
              {decodedAuthor.charAt(0).toUpperCase()}
            </div>
          </div>
          
          {/* Author Info */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-2 capitalize" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              {decodedAuthor}
            </h1>
            <p className="text-primary font-medium mb-3">
              {authorInfo.role}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {renderWithBrandItalics(authorInfo.bio)}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-primary" />
                <span><strong>{authorArticles.length}</strong> artikels</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>Lid sedert 2020</span>
              </div>
            </div>
          </div>
          
          {/* Contact/Social (Placeholder) */}
          <div className="flex gap-2">
            <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </button>
            <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#3b5998] transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </button>
            <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#1DA1F2] transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div>
        <h2 className="text-2xl font-normal text-brand-navy dark:text-foreground font-heading mb-6" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
          Artikels deur {decodedAuthor} ({authorArticles.length})
        </h2>
        
        {/* Group by Category */}
        {Object.keys(articlesByCategory).map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 pb-2 border-b-2 border-primary inline-block font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {articlesByCategory[category].map(article => (
                <ArticleLink
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  className="block group bg-white dark:bg-card border border-gray-100 dark:border-border rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-[var(--shadow-dark-400)] transition-shadow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-muted">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 uppercase rounded-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-normal text-brand-navy dark:text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                      {article.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-border">
                      <span>{article.date}</span>
                      <span className="font-medium">{article.readTime} lees</span>
                    </div>
                  </div>
                </ArticleLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {authorArticles.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border">
          <User size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Geen artikels gevind</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Hierdie skrywer het nog geen artikels gepubliseer nie.
          </p>
          <Link to="/" className="inline-block text-primary font-bold hover:underline">
            Terug na tuisblad
          </Link>
        </div>
      )}
    </PageContainer>
  );
};

export default AuthorPage;