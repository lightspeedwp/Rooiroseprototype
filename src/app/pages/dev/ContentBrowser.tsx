import React from 'react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { CONTENT_DATA, CONTENT_TOTAL_FILES } from '../../data/contentData';
import { FileBrowserShell } from '../../components/dev/FileBrowserShell';

/**
 * ContentBrowser — Browse All Static Content Files
 *
 * Similar to GuidelinesBrowser but scoped to /content/ directory.
 * Auto-discovers all .md files and renders them with markdown formatting.
 *
 * Route: /ontwikkelaar/inhoud
 */

export const ContentBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const heroMeta = HERO_META.contentBrowser;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <FileBrowserShell
      data={CONTENT_DATA}
      totalFiles={CONTENT_TOTAL_FILES}
      pathPrefix="/content/"
      internalLinkPrefix="/content/"
      defaultFile="pages/home.md"
      defaultExpanded={['root', 'pages']}
      hero={{
        icon: heroMeta.icon,
        iconColor: heroMeta.iconColor,
        title: hero.title,
        description: hero.description,
        stats: [
          { label: t('common.files'), value: CONTENT_TOTAL_FILES },
        ],
        badge: `${CONTENT_TOTAL_FILES} ${t('common.filesLower')}`,
      }}
      relatedTools={RELATED_TOOLS_MAP.contentBrowser}
      locale={locale as 'af' | 'en'}
    />
  );
};