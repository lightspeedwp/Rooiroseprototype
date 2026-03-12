import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Trophy } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const CompetitionEntryForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      navigate('/dankie-vir-kompetisie-inskrywing');
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg border-2 border-custom-primary/20 shadow-sm dark:shadow-[var(--shadow-dark-200)] p-6 mb-6" id="inskrywing">
      <h2 className="text-xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading flex items-center gap-2" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>
        <Trophy size={20} className="text-custom-primary" />
        Skryf nou in
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="firstName">Naam *</Label>
            <Input id="firstName" required placeholder="Jou naam" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Van *</Label>
            <Input id="lastName" required placeholder="Jou van" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">E-posadres *</Label>
            <Input id="email" required type="email" placeholder="naam@voorbeeld.co.za" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefoonnommer *</Label>
            <Input id="phone" required type="tel" placeholder="012 345 6789" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="answer">Beantwoord die vraag: Waar kan jy <em>rooi rose</em> koop? *</Label>
          <Input
            id="answer"
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Jou antwoord"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="terms"
            type="checkbox"
            required
            className="mt-1 w-4 h-4 text-custom-primary rounded border-gray-300 dark:border-border focus:ring-custom-primary"
          />
          <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
            Ek stem in tot die{' '}
            <Link to="/kompetisie-terme-en-voorwaardes" className="text-custom-primary hover:underline font-bold">
              kompetisie terme en voorwaardes
            </Link>{' '}
            en gee toestemming dat <em>rooi rose</em> my mag kontak. *
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-custom-primary hover:bg-custom-primary-2 text-white py-3 text-base font-bold"
        >
          {isSubmitting ? 'Word gestuur...' : 'Skryf in vir kompetisie'}
        </Button>
      </form>
    </div>
  );
};