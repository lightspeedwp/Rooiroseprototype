import React, { useState, useEffect } from 'react';

/** Parse an Afrikaans date string into a Date object */
const parseAfrikaansDate = (dateStr: string): Date => {
  const months: Record<string, number> = {
    'Januarie': 0, 'Februarie': 1, 'Maart': 2, 'April': 3,
    'Mei': 4, 'Junie': 5, 'Julie': 6, 'Augustus': 7,
    'September': 8, 'Oktober': 9, 'November': 10, 'Desember': 11,
  };
  const parts = dateStr.split(' ');
  if (parts.length < 3) return new Date();
  
  const day = parseInt(parts[0]);
  const month = months[parts[1]] ?? 0;
  const year = parseInt(parts[2]);
  return new Date(year, month, day);
};

/** Countdown timer hook */
const useCountdown = (closingDateStr: string) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, expired: false });

  useEffect(() => {
    if (!closingDateStr) return;
    
    const target = parseAfrikaansDate(closingDateStr);
    target.setHours(23, 59, 59);

    const calculate = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, expired: true };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        expired: false,
      };
    };

    setTimeLeft(calculate());
    const interval = setInterval(() => setTimeLeft(calculate()), 60_000);
    return () => clearInterval(interval);
  }, [closingDateStr]);

  return timeLeft;
};

export const CompetitionCountdown = ({ closingDate }: { closingDate: string }) => {
  const countdown = useCountdown(closingDate);

  if (countdown.expired) return null;

  return (
    <div className="bg-brand-navy rounded-lg p-6 mb-6 text-center shadow-sm dark:shadow-[var(--shadow-dark-200)]">
      <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-3">Tyd oor om in te skryf</p>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {[
          { value: countdown.days, label: 'Dae' },
          { value: countdown.hours, label: 'Ure' },
          { value: countdown.minutes, label: 'Min' },
        ].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="bg-white/10 rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-1">
              <span className="text-2xl md:text-3xl font-normal text-white font-heading" style={{ fontVariationSettings: "var(--fvs-h3)" }}>
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
