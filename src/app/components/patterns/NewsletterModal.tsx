import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { toast } from 'sonner';
import { NEWSLETTER_MODAL } from '../../data/newsletter';

export const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Modal disabled - Newsletter popup has been turned off
  // Show modal after 15 seconds if not already seen
  useEffect(() => {
    // Newsletter modal is disabled
    return;
    
    /* Original code - disabled
    const hasSeenModal = sessionStorage.getItem('newsletter_modal_seen');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('newsletter_modal_seen', 'true');
      }, 15000); // 15 seconds

      return () => clearTimeout(timer);
    }
    */
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    toast.success(NEWSLETTER_MODAL.successMessage.title, {
      description: NEWSLETTER_MODAL.successMessage.description,
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-brand-red">
            {NEWSLETTER_MODAL.title}
          </DialogTitle>
          <DialogDescription 
            className="text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: NEWSLETTER_MODAL.description }}
          />
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-left">
              {NEWSLETTER_MODAL.fields.emailLabel}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={NEWSLETTER_MODAL.fields.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white">
              {NEWSLETTER_MODAL.fields.submitButton}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};