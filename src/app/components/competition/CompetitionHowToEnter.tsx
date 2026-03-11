import React from 'react';

export const CompetitionHowToEnter = () => {
  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6">
      <h2 className="text-xl font-normal text-brand-navy dark:text-foreground mb-5 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Hoe om in te skryf</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { step: '1', text: 'Lees die kompetisie-besonderhede en reëls', icon: '📋' },
          { step: '2', text: 'Vul die inskrywingsvorm volledig in', icon: '✏️' },
          { step: '3', text: 'Beantwoord die maklike vraag korrek', icon: '💡' },
          { step: '4', text: 'Wag vir die trekking en wenner-aankondiging', icon: '🎉' },
        ].map((item) => (
          <div key={item.step} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-background border border-gray-100 dark:border-border">
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="w-8 h-8 rounded-full bg-custom-primary text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">
              {item.step}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
