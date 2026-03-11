import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserPlus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { PageContainer } from '../components/common/PageContainer';
import { toast } from 'sonner';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Wagwoorde stem nie ooreen nie.');
      return;
    }
    if (!agreed) {
      toast.error('Jy moet die terme en voorwaardes aanvaar.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dankie-vir-registrasie');
    }, 1500);
  };

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <PageContainer
        breadcrumbs={[
          { label: 'Registreer' }
        ]}
      >
        <div className="max-w-lg mx-auto py-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-brand-navy dark:bg-muted flex items-center justify-center mx-auto mb-4">
              <UserPlus size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-normal text-brand-navy dark:text-foreground font-heading mb-2" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>
              Registreer
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Skep 'n rekening om toegang te kry tot eksklusiewe inhoud, jou intekeninge te bestuur en meer.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white dark:bg-card rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-100)] border border-gray-100 dark:border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Naam <span className="text-primary">*</span></Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Jou naam"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-background dark:border-border dark:text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Van <span className="text-primary">*</span></Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Jou van"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 dark:bg-background dark:border-border dark:text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-posadres <span className="text-primary">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jou@e-pos.co.za"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 dark:bg-background dark:border-border dark:text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Wagwoord <span className="text-primary">*</span></Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Kies 'n wagwoord"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  className="bg-gray-50 dark:bg-background dark:border-border dark:text-foreground"
                />
                <p className="text-xs text-gray-400 dark:text-gray-500">Minstens 8 karakters, met ten minste een hoofletter en een syfer.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Bevestig wagwoord <span className="text-primary">*</span></Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Herhaal jou wagwoord"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 dark:bg-background dark:border-border dark:text-foreground"
                />
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="newsletter"
                    checked={newsletter}
                    onCheckedChange={(checked) => setNewsletter(checked === true)}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Ek wil <em>Die Papier</em> se nuusbrief ontvang met die jongste nuus en aanbiedings.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked === true)}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                    Ek het die{' '}
                    <Link to="/beleid/terme-en-voorwaardes" className="text-text-link-red hover:underline">
                      Terme en voorwaardes
                    </Link>{' '}
                    en{' '}
                    <Link to="/beleid/privaatheidsbeleid" className="text-text-link-red hover:underline">
                      Privaatheidsbeleid
                    </Link>{' '}
                    gelees en stem daartoe in. <span className="text-primary">*</span>
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg mt-2"
              >
                {loading ? 'Rekening word geskep...' : 'Skep my rekening'}
              </Button>
            </form>

            {/* Login link */}
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-border text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Het jy reeds 'n rekening?{' '}
                <Link to="/my-rekening" className="text-text-link-red font-medium hover:underline">
                  Teken in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};