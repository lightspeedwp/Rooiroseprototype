import React from 'react';

interface DemoStateOption {
  value: string;
  label: string;
}

interface DemoStateSwitcherProps {
  value: string;
  onChange: (value: string) => void;
  options: DemoStateOption[];
}

/**
 * Reusable demo state switcher dropdown.
 * Used by e-edition pages to toggle between user states (logged-out, subscriber, trial, expired, etc.).
 * Fixed bottom-right position, consistent styling across all pages.
 * 
 * In production, this would be replaced by real auth + WooCommerce Memberships API.
 */
export const DemoStateSwitcher: React.FC<DemoStateSwitcherProps> = ({ value, onChange, options }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-card shadow-lg dark:shadow-[var(--shadow-dark-300)] border border-gray-200 dark:border-border rounded-lg p-3 flex items-center gap-2">
      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Demo:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="text-[11px] h-7 px-2 bg-brand-navy text-white rounded border-0 cursor-pointer font-bold appearance-none pr-6"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 6px center',
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
