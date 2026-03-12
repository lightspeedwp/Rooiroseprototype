import React from 'react';
import { Upload } from 'lucide-react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { SubmitFormLayout } from '../../components/layouts/SubmitFormLayout';
import { SUBMIT_STORY_FAQS } from '../../data/pageFaqs';
import { HERO_IMAGES } from '../../data/heroImages';

export const SubmitStoryPage = () => {
  return (
    <SubmitFormLayout
      seo={{
        title: "Stuur 'n Storie In - rooi rose",
        description: "Het jy 'n nuuswenk of storie? Deel dit met rooi rose se redaksie.",
        keywords: 'storie, nuuswenk, stuur in, die papier',
      }}
      breadcrumbs={[
        { label: 'Stuur in', href: '/stuur-in' },
        { label: 'Nuuswenk of storie' },
      ]}
      hero={{
        title: 'Nuuswenk of storie',
        subtitle: "Het jy 'n nuuswenk, 'n sportuitslag of 'n storie om te deel? Vul die vorm hieronder in. Ons redaksie sal dit hersien en indien goedgekeur, sal dit op rooi rose gepubliseer word.",
        image: HERO_IMAGES.submit,
      }}
      submitLabel="Stuur in"
      infoBox={
        <p>
          Deur in te dien, bevestig jy dat hierdie inhoud jou eie werk is en dat jy toestemming gee vir
          <em> rooi rose</em> om dit te publiseer op alle platforms.
        </p>
      }
      faqItems={SUBMIT_STORY_FAQS}
      faqDescription="Vrae oor stories instuur by rooi rose."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefoonnommer</Label>
          <Input id="phone" type="tel" placeholder="012 345 6789" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Kategorie *</Label>
          <select
            id="category"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none bg-white dark:bg-background dark:text-foreground text-sm"
          >
            <option value="">Kies 'n kategorie</option>
            <option>Algemene Nuus</option>
            <option>Sport</option>
            <option>Skole</option>
            <option>Sake</option>
            <option>Leefstyl</option>
            <option>Misdaad</option>
            <option>Plaaslike Nuus</option>
            <option>Ander</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Opskrif / Onderwerp *</Label>
        <Input id="title" required placeholder="Gee jou storie 'n kort, beskrywende titel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Jou Storie *</Label>
        <textarea
          id="content"
          required
          rows={8}
          className="w-full px-4 py-2 border border-gray-300 dark:border-input rounded-md focus:ring-2 focus:ring-custom-primary focus:border-transparent outline-none resize-y text-sm dark:bg-background dark:text-foreground"
          placeholder="Skryf jou storie hier... Sluit soveel detail as moontlik in: wie, wat, waar, wanneer en hoekom."
        />
      </div>

      <div className="space-y-2">
        <Label>Foto / Dokument (Opsioneel)</Label>
        <div className="border-2 border-dashed border-gray-300 dark:border-input rounded-lg p-8 text-center hover:bg-gray-50 dark:hover:bg-muted transition-colors cursor-pointer">
          <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600 dark:text-gray-400">Klik om te laai, of sleep lêer hierheen</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Maksimum 5MB. JPG, PNG of PDF.</p>
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
          Ek bevestig dat ek die reg het om hierdie inhoud en foto's te deel en ek gee toestemming vir publikasie in <em>rooi rose</em>. *
        </label>
      </div>
    </SubmitFormLayout>
  );
};