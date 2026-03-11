import React from 'react';
import { Link } from 'react-router';

interface AuthorLinkProps {
  authorName: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * AuthorLink Component
 * Creates a link to the author's profile page
 */
export const AuthorLink: React.FC<AuthorLinkProps> = ({ authorName, className, children }) => {
  const slug = encodeURIComponent(authorName.toLowerCase());
  
  return (
    <Link to={`/author/${slug}`} className={className || 'hover:text-brand-red transition-colors'}>
      {children || authorName}
    </Link>
  );
};