import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { User, Mail, Facebook, Twitter, Linkedin, Calendar, FileText } from 'lucide-react';
import { getAllArticles } from '../data/categoryArticles';
import { PageContainer } from '../components/common/PageContainer';
import { ArticleLink } from '../components/common/ArticleLink';
import { renderWithBrandItalics } from '../utils/brandItalics';
import { SEO } from '../components/common/SEO';
import { MagazineArticleCard } from '../components/category/MagazineArticleCard';

/* ── rooi rose Magazine Author Archive ──────────────────────────────
 * Editorial design: Large author hero, magazine article grid
 * Typography: Playfair Display SC headings
 * Layout: Author bio + 3-column magazine grid by category
 * ────────────────────────────────────────────────────────────────── */

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
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title={`${decodedAuthor} - Skrywer`}
        description={`Artikels deur ${decodedAuthor} op rooi rose. ${authorArticles.length} artikels beskikbaar.`}
        keywords={`${decodedAuthor}, skrywer, joernalis, artikels, rooi rose`}
      />
      
      <PageContainer
        breadcrumbs={[
          { label: 'Skrywers', href: '/oor-ons/redaksie' },
          { label: decodedAuthor }
        ]}
      >
        {/* Author Hero Section - Magazine Style */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-background rounded-lg p-8 md:p-12 mb-16 border border-gray-100 dark:border-border">
          <div className="max-w-4xl mx-auto text-center">
            {/* Large Author Avatar */}
            <div className="inline-block mb-6">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-red to-brand-navy flex items-center justify-center text-white text-5xl md:text-6xl font-bold shadow-lg">
                {decodedAuthor.charAt(0).toUpperCase()}
              </div>
            </div>
            
            {/* Author Name - Large Editorial Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-brand-navy dark:text-foreground mb-3 capitalize has-brand-serif-font-family" style={{ letterSpacing: '0.02em' }}>
              {decodedAuthor}
            </h1>
            
            {/* Role */}
            <p className="text-brand-red text-lg md:text-xl font-bold mb-6 uppercase tracking-wider">
              {authorInfo.role}
            </p>
            
            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {renderWithBrandItalics(authorInfo.bio)}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <FileText size={18} className="text-brand-red" />
                <span><strong className="text-brand-navy dark:text-foreground">{authorArticles.length}</strong> artikels</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-brand-red" />
                <span>Lid sedert 2020</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-red hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </button>
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#3b5998] hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </button>
              <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div>
          {/* Section Title */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family uppercase tracking-wider mb-3" style={{ letterSpacing: '0.15em' }}>
              Artikels
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">{authorArticles.length} artikels deur {decodedAuthor}</p>
          </div>
          
          {/* Group by Category */}
          {Object.keys(articlesByCategory).map(category => (
            <div key={category} className="mb-16">
              {/* Category Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground has-brand-serif-font-family uppercase tracking-wider inline-block border-b-4 border-brand-red pb-2" style={{ letterSpacing: '0.15em' }}>
                  {category}
                </h3>
              </div>
              
              {/* Magazine Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {articlesByCategory[category].map(article => (
                  <MagazineArticleCard
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    excerpt={article.excerpt}
                    category={article.category}
                    imageUrl={article.imageUrl}
                    date={article.date}
                    author={article.author}
                    readTime={article.readTime}
                    variant="standard"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {authorArticles.length === 0 && (
          <div className="text-center py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-background rounded-lg border border-gray-200 dark:border-border">
            <User size={64} className="mx-auto text-gray-300 dark:text-gray-600 mb-6" />
            <h3 className="text-2xl md:text-3xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family">Geen artikels gevind</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Hierdie skrywer het nog geen artikels gepubliseer nie.
            </p>
            <Link to="/" className="inline-block bg-brand-red text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-red-hover transition-colors">
              Terug na tuisblad
            </Link>
          </div>
        )}
      </PageContainer>
    </div>
  );
};

export default AuthorPage;