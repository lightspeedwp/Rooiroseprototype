import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

/**
 * Default context value — used as fallback when module duplication
 * (Figma proxy HMR) causes provider/consumer context mismatch.
 */
const defaultContext: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

const STORAGE_KEY = 'dp-theme';

function getInitialTheme(): Theme {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
      // Migrate legacy 'system' value
      if (stored === 'system') {
        const prefersDark =
          typeof window.matchMedia === 'function' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        const resolved: Theme = prefersDark ? 'dark' : 'light';
        try { localStorage.setItem(STORAGE_KEY, resolved); } catch {}
        return resolved;
      }
    }
  } catch {
    // localStorage not available (e.g. sandboxed iframe)
  }
  return 'light';
}

function applyTheme(theme: Theme) {
  try {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  } catch {
    // SSR or sandbox — no document
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try { localStorage.setItem(STORAGE_KEY, newTheme); } catch {}
    applyTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  // Apply on mount
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Memoize context value to prevent unnecessary consumer re-renders (PERF-047)
  const contextValue = useMemo<ThemeContextType>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};