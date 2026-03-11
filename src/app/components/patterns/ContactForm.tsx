/**
 * ⚠️ DEPRECATED FOR WORDPRESS MIGRATION ⚠️
 * 
 * This component handles client-side form submission.
 * In WordPress, use the native Gravity Forms block with the ID specified in the strategy doc.
 * 
 * See: /guidelines/wordpress-migration/gravity-forms-strategy.md
 */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { CONTACT_FORM } from '../../data/contact';

const formSchema = z.object({
  name: z.string().min(2, {
    message: CONTACT_FORM.validation.nameMin,
  }),
  email: z.string().email({
    message: CONTACT_FORM.validation.emailInvalid,
  }),
  subject: z.string().min(5, {
    message: CONTACT_FORM.validation.subjectMin,
  }),
  message: z.string().min(10, {
    message: CONTACT_FORM.validation.messageMin,
  }),
});

export const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit() {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      toast.success(CONTACT_FORM.success.title, {
        description: CONTACT_FORM.success.description,
      });
      form.reset();
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_FORM.labels.name}</FormLabel>
              <FormControl>
                <Input placeholder={CONTACT_FORM.placeholders.name} {...field} className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_FORM.labels.email}</FormLabel>
              <FormControl>
                <Input placeholder={CONTACT_FORM.placeholders.email} {...field} className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_FORM.labels.subject}</FormLabel>
              <FormControl>
                <Input placeholder={CONTACT_FORM.placeholders.subject} {...field} className="bg-secondary dark:bg-background border-input focus-visible:ring-brand-red" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{CONTACT_FORM.labels.message}</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={CONTACT_FORM.placeholders.message}
                  className="min-h-[150px] bg-secondary dark:bg-background border-input focus-visible:ring-brand-red" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-6"
        >
          {isSubmitting ? CONTACT_FORM.buttons.submitting : CONTACT_FORM.buttons.submit}
        </Button>
      </form>
    </Form>
  );
};