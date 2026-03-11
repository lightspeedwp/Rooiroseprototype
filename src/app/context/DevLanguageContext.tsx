import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export type DevLocale = 'af' | 'en';

interface DevLanguageContextValue {
  locale: DevLocale;
  setLocale: (locale: DevLocale) => void;
  toggleLocale: () => void;
}

const DevLanguageContext = createContext<DevLanguageContextValue>({
  locale: 'af',
  setLocale: () => {},
  toggleLocale: () => {},
});

export const useDevLanguage = () => useContext(DevLanguageContext);

export const DevLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<DevLocale>(() => {
    try {
      const saved = localStorage.getItem('dp-dev-locale');
      return saved === 'en' ? 'en' : 'af';
    } catch {
      return 'af';
    }
  });

  const handleSetLocale = useCallback((newLocale: DevLocale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem('dp-dev-locale', newLocale);
    } catch {}
  }, []);

  const toggleLocale = useCallback(() => {
    handleSetLocale(locale === 'af' ? 'en' : 'af');
  }, [locale, handleSetLocale]);

  // Memoize context value to prevent unnecessary consumer re-renders (PERF-047)
  const contextValue = useMemo<DevLanguageContextValue>(
    () => ({ locale, setLocale: handleSetLocale, toggleLocale }),
    [locale, handleSetLocale, toggleLocale]
  );

  return (
    <DevLanguageContext.Provider value={contextValue}>
      {children}
    </DevLanguageContext.Provider>
  );
};