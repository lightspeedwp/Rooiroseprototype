import React from 'react';

/**
 * Renders text with "rooi rose" wrapped in <em> for brand italicisation.
 * The brand name MUST be italicised throughout ALL visible website content:
 * headings, body text, FAQs, footers, copyright, social posts, etc.
 *
 * Exceptions (do NOT use this for):
 * - SVG logo text (styled separately)
 * - SEO meta tags (title, description, keywords — not visible)
 * - HTML alt text / aria-label attributes (accessibility)
 * - "ROOI ROSE" uppercase masthead/logo treatments
 * - Code comments and data object keys
 */
export const renderWithBrandItalics = (text: string): React.ReactNode => {
  const parts = text.split(/(rooi rose)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part === 'rooi rose' ? <em key={i}>rooi rose</em> : part
  );
};