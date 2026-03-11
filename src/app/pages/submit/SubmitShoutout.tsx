import React from 'react';
import { Heart, Upload } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { SubmitFormLayout } from '../../components/layouts/SubmitFormLayout';
import { SUBMIT_SHOUTOUT_FAQS } from '../../data/pageFaqs';

export const SubmitShoutoutPage = () => {
  return (
    <SubmitFormLayout
      seo={{
        title: 'Shoutout stuur - Die Papier',
        description: "Stuur 'n shoutout om iemand spesiaal geluk te wens of te bedank via Die Papier.",
        keywords: 'shoutout, gelukwensing, bedanking, stuur in, die papier',
      }}
      breadcrumbs={[
        { label: 'Stuur in', href: '/stuur-in' },
        { label: 'Shoutout' },
      ]}
      inlineHeader={{
        title: "Stuur 'n Shoutout",
        description: "Wil jy iemand spesiaal gelukwens, bedank of erken? Stuur 'n shoutout en ons plaas dit in Die Papier. Perfek vir verjaarsdae, prestasies, bedankings en meer.",
        icon: <Heart size={28} className="text-custom-primary" />,
      }}
      showNameEmail
      submitLabel="Stuur shoutout"
      infoBox={
        <p>
          Shoutouts is gratis en word onderhewig aan beskikbare spasie in Die Papier gepubliseer.
          Die redaksie behou die reg voor om inhoud te redigeer.
        </p>
      }
      faqItems={SUBMIT_SHOUTOUT_FAQS}
      faqDescription="Vrae oor shoutouts in Die Papier."
    >
      <div className="space-y-2">
        <Label htmlFor="recipientName">Aan wie is die Shoutout? *</Label>
        <Input id="recipientName" required placeholder="Die persoon se naam" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="occasion">Geleentheid *</Label>
        <select
          id="occasion"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none bg-white dark:bg-background dark:text-foreground text-sm"
        >
          <option value="">Kies 'n geleentheid</option>
          <option>Verjaardag</option>
          <option>Bedanking</option>
          <option>Prestasie / Gelukwensing</option>
          <option>Troue / Huweliksherdenking</option>
          <option>Baba-aankondiging</option>
          <option>In Memoriam</option>
          <option>Ander</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Jou Boodskap *</Label>
        <textarea
          id="message"
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none resize-y text-sm dark:bg-background dark:text-foreground"
          placeholder="Skryf jou shoutout-boodskap hier... (Maksimum 200 woorde)"
        />
        <p className="text-xs text-gray-400">Maksimum 200 woorde.</p>
      </div>

      <div className="space-y-2">
        <Label>Foto (Opsioneel)</Label>
        <div className="border-2 border-dashed border-gray-300 dark:border-input rounded-lg p-8 text-center hover:bg-gray-50 dark:hover:bg-muted transition-colors cursor-pointer">
          <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Klik om te laai, of sleep lêer hierheen</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Maksimum 5MB. JPG of PNG.</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 text-custom-primary rounded border-gray-300 dark:border-border focus:ring-custom-primary"
        />
        <label htmlFor="consent" className="text-sm text-gray-700 dark:text-gray-300">
          Ek gee toestemming vir Die Papier om hierdie boodskap en foto te publiseer. *
        </label>
      </div>
    </SubmitFormLayout>
  );
};
