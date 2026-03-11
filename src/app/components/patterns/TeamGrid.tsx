import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  email?: string;
  social?: {
    x?: string;
    linkedin?: string;
  };
}

interface TeamGridProps {
  members: TeamMember[];
  columns?: 2 | 3 | 4;
}

export const TeamGrid = ({ members, columns = 3 }: TeamGridProps) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {members.map((member) => (
        <div key={member.id} className="flex flex-col items-center text-center group">
          <div className="mb-4 relative overflow-hidden rounded-full w-40 h-40 border-4 border-gray-100 dark:border-border group-hover:border-brand-red transition-colors">
            <ImageWithFallback
              src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>{member.name}</h3>
          <p className="text-brand-red font-medium mb-3 text-sm uppercase tracking-wide">{member.role}</p>
          {member.bio && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed max-w-xs">{member.bio}</p>
          )}
          <div className="flex gap-3 text-gray-400 dark:text-gray-500">
            {member.email && (
              <a href={`mailto:${member.email}`} className="hover:text-brand-red transition-colors">
                <Mail size={18} />
              </a>
            )}
            {member.social?.x && (
              <a href={member.social.x} className="hover:text-brand-red transition-colors">
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.social?.linkedin && (
              <a href={member.social.linkedin} className="hover:text-brand-red transition-colors">
                <Linkedin size={18} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};