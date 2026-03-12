import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  type?: 'website' | 'article';
  canonical?: string;
  noindex?: boolean; // New: prevent search engine indexing
}

/**
 * SEO Component
 * Manages meta tags for SEO and social media sharing
 * 
 * Usage:
 * <SEO 
 *   title="Article Title" 
 *   description="Article description"
 *   image="https://..."
 *   type="article"
 * />
 */
export const SEO = ({
  title,
  description = "*rooi rose* - Jou betroubare bron vir die jongste Afrikaanse nuus, lewenstyl, sake en meer.",
  keywords = "nuus, afrikaans, suid-afrika, lewenstyl, sake, tydskrif, opinie",
  image = "/og-image.jpg", // Add default OG image to public folder
  author,
  publishedTime,
  modifiedTime,
  type = 'website',
  canonical,
  noindex = false, // Default: allow indexing
}: SEOProps) => {
  const location = useLocation();
  
  // Construct full title
  const fullTitle = title ? `${title} | *rooi rose*` : '*rooi rose* - Afrikaanse Tydskrif';
  
  // Construct canonical URL
  const baseUrl = 'https://rooirose.co.za'; // Update with your actual domain
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
  
  // Construct full image URL
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    if (author) {
      updateMetaTag('author', author);
    }

    // Robots meta tag for indexing control
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      // Remove noindex if it exists (when navigating from noindex to indexed page)
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.remove();
      }
    }

    // Open Graph Tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', '*rooi rose*', true);
    updateMetaTag('og:locale', 'af_ZA', true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      if (author) {
        updateMetaTag('article:author', author, true);
      }
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Theme color for mobile browsers
    let themeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute('content', '#E82C27');

  }, [fullTitle, description, keywords, image, author, publishedTime, modifiedTime, type, canonicalUrl, fullImageUrl, noindex]);

  return null; // This component doesn't render anything
};

/**
 * Default SEO for home page
 */
export const DefaultSEO = () => (
  <SEO
    description="*rooi rose* - Jou betroubare bron vir die jongste Afrikaanse nuus oor lewenstyl, sake, vermaak, opinie en meer."
    keywords="nuus, afrikaans, suid-afrika, lewenstyl, sake, tydskrif, opinie, rooi rose"
  />
);

/**
 * Generate structured data for articles.
 * Uses a dedicated script#ld-json-article tag to avoid conflicting
 * with the global WebSite/Organization/BreadcrumbList schemas
 * injected by the useRouteSEO hook.
 */
export const generateArticleStructuredData = (article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  imageUrl: string;
  category: string;
}) => {
  const baseUrl = 'https://rooirose.co.za';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.description,
    "image": article.imageUrl.startsWith('http') ? article.imageUrl : `${baseUrl}${article.imageUrl}`,
    "datePublished": article.publishedDate,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "*rooi rose*",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    },
    "articleSection": article.category
  };

  // Use a dedicated ID so we don't overwrite global schemas from useRouteSEO
  const scriptId = 'ld-json-article';
  let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = scriptId;
    scriptTag.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(structuredData);
};