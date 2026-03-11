import React from 'react';
import { InFeedAd } from '../components/ads';

/**
 * Injects ads into article content at specific positions.
 * Strategy: after every 3 paragraphs (3, 6, 9, …) per Advanced Ads guideline.
 * 
 * @param content HTML content string
 * @param category Article category for targeting
 * @param articleId Article ID for unique keys
 * @returns Array of React nodes including content parts and ads
 */
export const injectArticleAds = (content: string, category: string, articleId: number): React.ReactNode[] => {
  // If content is empty, return empty array
  if (!content) return [];

  // Split content by closing paragraph tag
  // This is a simple heuristic for demo purposes
  const parts = content.split('</p>');
  
  return parts.map((part, index) => {
    // If part is empty (e.g. trailing split), skip
    if (!part.trim()) return null;
    
    // Re-add the closing tag that was removed by split
    const htmlPart = part.endsWith('>') ? part : part + '</p>';
    
    // Inject ad after every 3rd paragraph (index 2, 5, 8, …)
    // This maps to paragraphs 3, 6, 9, … in 1-based counting
    const paragraphNumber = index + 1; // 1-based
    if (paragraphNumber % 3 === 0) {
       return (
         <div key={`part-${index}`}>
           <div dangerouslySetInnerHTML={{ __html: htmlPart }} />
           <div className="my-8 flex justify-center">
             <InFeedAd section={category} variant={paragraphNumber === 6 ? 'square' : undefined} />
           </div>
         </div>
       );
    }
    
    return <div key={`part-${index}`} dangerouslySetInnerHTML={{ __html: htmlPart }} />;
  });
};