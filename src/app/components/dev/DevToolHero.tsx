import React from 'react';
// Motion removed — simple fade+slide replaced with CSS animation (PERF-042)
import { useDevLanguage } from '../../context/DevLanguageContext';

export interface HeroStat {
  label: string;
  value: string | number;
}

export interface DevToolHeroProps {
  /** Page icon component */
  icon: React.FC<{ size?: number; className?: string }>;
  /** Icon background color class (e.g. 'bg-blue-500') */
  iconColor: string;
  /** Page title */
  title: string;
  /** Page description (plain text) */
  description?: string;
  /** Page description as HTML (rendered with dangerouslySetInnerHTML) */
  descriptionHtml?: string;
  /** Optional stats row */
  stats?: HeroStat[];
  /** Optional badge text (e.g. "21 templates") */
  badge?: string;
  /** Optional children rendered below description */
  children?: React.ReactNode;
}

/**
 * DevToolHero — Consistent hero section for all developer tool pages.
 *
 * Provides:
 * - Icon with colored background
 * - Title & description (plain text or HTML)
 * - Optional stats row with animated mount, responsive grid
 * - Optional badge
 *
 * Used inside the dev tools page container (padding is handled by DevLayout).
 */
export const DevToolHero: React.FC<DevToolHeroProps> = ({
  icon: Icon,
  iconColor,
  title,
  description,
  descriptionHtml,
  stats,
  badge,
  children,
}) => {
  const { locale } = useDevLanguage();

  return (
    <div className="mb-8">
      {/* Title row */}
      <div className="flex items-start gap-4 mb-3">
        <div
          className={`w-11 h-11 rounded-xl ${iconColor} flex items-center justify-center shrink-0`}
        >
          <Icon size={22} className="text-white" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl text-gray-900 dark:text-white leading-tight">
              {title}
            </h1>
            {badge && (
              <span className="px-2 py-0.5 rounded-md text-[10px] bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-white/50 border border-gray-300 dark:border-white/10">
                {badge}
              </span>
            )}
          </div>
          {descriptionHtml ? (
            <p
              className="text-sm text-gray-500 dark:text-white/50 mt-1 max-w-2xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
          ) : description ? (
            <p className="text-sm text-gray-500 dark:text-white/50 mt-1 max-w-2xl leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {/* Stats row — compact inline pills with animated mount */}
      {stats && stats.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 dp-stagger-item"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-sm text-brand-red leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] text-gray-500 dark:text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Optional children (e.g. action buttons) */}
      {children}
    </div>
  );
};