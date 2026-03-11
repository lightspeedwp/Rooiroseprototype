import React from 'react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';
import { HERO_META, resolveHeroMeta, RELATED_TOOLS_MAP } from '../../data/devToolHeroData';
import { GUIDELINES_DATA, GUIDELINES_TOTAL_FILES } from '../../data/guidelinesContent';
import { FileBrowserShell } from '../../components/dev/FileBrowserShell';

export const GuidelinesBrowser = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const isAf = locale === 'af';
  const heroMeta = HERO_META.guidelinesBrowser;
  const hero = resolveHeroMeta(heroMeta, locale);

  return (
    <FileBrowserShell
      data={GUIDELINES_DATA}
      totalFiles={GUIDELINES_TOTAL_FILES}
      pathPrefix="/guidelines/"
      internalLinkPrefix="/guidelines/"
      defaultFile="Guidelines.md"
      defaultExpanded={['root']}
      hero={{
        icon: heroMeta.icon,
        iconColor: heroMeta.iconColor,
        title: hero.title,
        description: hero.description,
        stats: [
          { label: t('common.files'), value: GUIDELINES_TOTAL_FILES },
        ],
        badge: `${GUIDELINES_TOTAL_FILES} ${t('common.filesLower')}`,
      }}
      relatedTools={RELATED_TOOLS_MAP.guidelinesBrowser}
      locale={locale as 'af' | 'en'}
    />
  );
};