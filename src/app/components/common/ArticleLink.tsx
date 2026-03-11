import React from 'react';
import { Link } from 'react-router';
import { generateArticleSlug } from '../../utils/slugify';

interface ArticleLinkProps {
  id: number;
  title: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * ArticleLink Component
 * Generates proper article URL from ID and title
 */
export const ArticleLink: React.FC<ArticleLinkProps> = ({ id, title, className, children }) => {
  const slug = generateArticleSlug(id, title);
  
  return (
    <Link to={`/artikel/${slug}`} className={className}>
      {children}
    </Link>
  );
};