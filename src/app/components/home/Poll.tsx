import React, { useState } from 'react';
import { toast } from 'sonner';

interface PollOption {
  id: string;
  text: string;
}

interface PollLabels {
  title: string;
  voteButton: string;
  votedButton: string;
  errorSelection: string;
  successTitle: string;
  successDesc: string;
}

interface PollProps {
  question: string;
  options: PollOption[];
  labels: PollLabels;
}

export const Poll: React.FC<PollProps> = ({ question, options, labels }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!selectedOption) {
      toast.error(labels.errorSelection);
      return;
    }
    
    setHasVoted(true);
    toast.success(labels.successTitle, {
      description: labels.successDesc
    });
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] overflow-hidden">
      <div className="p-6">
        {/* Title */}
        {/* V2: widget label → Inter SemiBold uppercase, H6 token scale */}
        <h3 className="font-inter font-semibold text-brand-red uppercase mb-4 is-style-section-title">
          {labels.title}
        </h3>
        
        {/* Question */}
        <p className="text-base font-normal text-custom-contrast dark:text-custom-contrast mb-4 font-inter leading-normal">
          {question}
        </p>
        
        {/* Options */}
        <div className="space-y-2.5 mb-5">
          {options.map((option) => (
            <label
              key={option.id}
              className={`flex items-start gap-2 cursor-pointer group ${
                hasVoted ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              <div className="flex items-center pt-0.5">
                <input
                  type="radio"
                  name="poll-option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={(e) => !hasVoted && setSelectedOption(e.target.value)}
                  disabled={hasVoted}
                  className="w-5 h-5 text-brand-red border-gray-400 dark:border-gray-600 focus:ring-brand-red focus:ring-2"
                />
              </div>
              <span className="flex-1 text-base text-custom-contrast dark:text-custom-contrast font-inter leading-normal group-hover:text-brand-red transition-colors">
                {option.text}
              </span>
            </label>
          ))}
        </div>
        
        {/* Vote Button */}
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`w-full py-2 px-6 rounded font-medium text-base text-white font-inter transition-colors ${
            hasVoted
              ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
              : 'bg-custom-contrast dark:bg-custom-base-3 hover:bg-black dark:hover:bg-input'
          }`}
        >
          {hasVoted ? labels.votedButton : labels.voteButton}
        </button>
      </div>
    </div>
  );
};