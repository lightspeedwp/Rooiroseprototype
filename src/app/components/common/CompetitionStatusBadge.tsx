import React from 'react';
import { Trophy, Clock, XCircle } from 'lucide-react';

type CompetitionStatus = 'active' | 'closed' | 'winner-announced';

interface CompetitionStatusBadgeProps {
  status: CompetitionStatus;
  /** 'sm' for listing cards, 'lg' for single page hero */
  size?: 'sm' | 'lg';
  className?: string;
}

const statusConfig: Record<CompetitionStatus, {
  label: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  icon: React.ReactNode;
  pulse: boolean;
}> = {
  active: {
    label: 'Oop vir Inskrywings',
    bgClass: 'bg-green-600',
    textClass: 'text-white',
    borderClass: 'border-green-500',
    icon: <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-green-200" /></span>,
    pulse: true,
  },
  closed: {
    label: 'Gesluit',
    bgClass: 'bg-gray-600',
    textClass: 'text-white',
    borderClass: 'border-gray-500',
    icon: <XCircle size={12} />,
    pulse: false,
  },
  'winner-announced': {
    label: 'Wenner Aangekondig',
    bgClass: 'bg-amber-500',
    textClass: 'text-white',
    borderClass: 'border-amber-400',
    icon: <Trophy size={12} />,
    pulse: false,
  },
};

export const CompetitionStatusBadge: React.FC<CompetitionStatusBadgeProps> = ({
  status,
  size = 'sm',
  className = '',
}) => {
  const config = statusConfig[status];

  const sizeClasses = size === 'lg'
    ? 'px-4 py-1.5 text-sm gap-2'
    : 'px-2.5 py-1 text-xs gap-1.5';

  return (
    <span
      className={`inline-flex items-center font-bold rounded-full ${config.bgClass} ${config.textClass} ${sizeClasses} ${className}`}
    >
      {config.icon}
      {size === 'lg' ? config.label : (
        status === 'active' ? 'Oop' : status === 'winner-announced' ? 'Wenner' : 'Gesluit'
      )}
    </span>
  );
};
