import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Upload, Calendar, Clock, MapPin, User, Mail, CheckCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Button } from '../components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../components/ui/breadcrumb';
import { PageFAQSection } from '../components/patterns/PageFAQSection';
import { SUBMIT_EVENT_FAQS } from '../data/pageFaqs';

export const SubmitEventPage = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    title: string;
    category: string;
    date: string;
    time: string;
    location: string;
    description: string;
    organizer: string;
    email: string;
    image: string | null;
  }>({
    title: '',
    category: '',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
    email: '',
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
        <SEO title="Dankie | Gebeure | Die Papier" />
        <div className="w-full bg-white dark:bg-background border-b border-gray-200 dark:border-border py-3 mb-10">
          <div className="alignwide">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Tuis</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/gebeure">Gebeure</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium">Sukses</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="alignwide">
          <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-card p-12 rounded-lg shadow-sm border border-gray-100 dark:border-border">
            <CheckCircle className="mx-auto text-green-500 mb-6" size={64} />
            <h1 className="text-3xl font-normal text-brand-navy dark:text-foreground mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Dankie vir jou inskrywing!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Ons het jou gebeurtenis ontvang en dit sal hersien word voordat dit op die webwerf verskyn.
              Ons sal jou kontak indien ons enige verdere inligting benodig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/gebeure')} className="bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark">
                Terug na Gebeure
              </Button>
              <Button onClick={() => { setSubmitted(false); setFormData({ title: '', category: '', date: '', time: '', location: '', description: '', organizer: '', email: '', image: null }); }} variant="outline">
                Dien nog 'n gebeurtenis in
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PageFAQSection items={SUBMIT_EVENT_FAQS} description="Vrae oor gebeurtenisse indien by Die Papier." />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-background min-h-screen pb-20">
      <SEO 
        title="Dien gebeurtenis in | Die Papier" 
        description="Dien jou plaaslike gebeurtenis, sportbyeenkoms of fees in vir plasing op Die Papier se kalender."
      />

      {/* Full width left-aligned breadcrumbs */}
      <div className="w-full bg-white dark:bg-background border-b border-gray-200 dark:border-border py-3 mb-8">
        <div className="alignwide">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Tuis</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/gebeure">Gebeure</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Dien in</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="alignwide">
        <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-normal text-brand-navy dark:text-foreground font-heading mb-3" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Dien jou gebeurtenis in</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Deel jou plaaslike gebeurtenis, sportwedstryd of fees met ons lesers. Vul die vorm hieronder in.
          </p>
        </div>

        <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-gray-100 dark:border-border overflow-hidden">
          <div className="bg-brand-navy-light dark:bg-brand-navy px-6 py-4 border-b border-gray-200 dark:border-border">
            <h2 className="text-white font-normal text-lg flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              <Calendar size={20} /> Gebeurtenis Besonderhede
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-bold text-gray-700 dark:text-foreground">Titel van Gebeurtenis *</label>
                  <input
                    required
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="bv. Kersmark in die Park"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-bold text-gray-700 dark:text-foreground">Kategorie *</label>
                  <select
                    required
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] bg-white"
                  >
                    <option value="">Kies 'n kategorie</option>
                    <option value="Plaaslik">Plaaslik</option>
                    <option value="Sport">Sport</option>
                    <option value="Kuns">Kuns & Kultuur</option>
                    <option value="Musiek">Musiek</option>
                    <option value="Sake">Sake</option>
                    <option value="Skole">Skole</option>
                    <option value="Mark">Markte</option>
                    <option value="Ander">Ander</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-bold text-gray-700 dark:text-foreground">Datum *</label>
                  <div className="relative">
                    <input
                      required
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] pl-10"
                    />
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="block text-sm font-bold text-gray-700 dark:text-foreground">Tyd *</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="bv. 14:00 - 17:00"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] pl-10"
                    />
                    <Clock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-bold text-gray-700 dark:text-foreground">Plek *</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="bv. Stadsaal"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] pl-10"
                    />
                    <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-bold text-gray-700 dark:text-foreground">Beskrywing *</label>
                <textarea
                  required
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Vertel ons meer oor die gebeurtenis..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] resize-y"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 dark:text-foreground">Foto / Plakkaat</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-border rounded-lg p-8 text-center hover:bg-gray-50 dark:hover:bg-muted transition-colors cursor-pointer group">
                  <Upload className="mx-auto text-gray-400 group-hover:text-primary mb-2" size={32} />
                  <p className="text-sm text-gray-500">Klik om op te laai of sleep en los lêer hier</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG tot 5MB</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-border">
              <h3 className="font-normal text-brand-navy dark:text-foreground mb-4 flex items-center gap-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>
                <User size={20} className="text-primary" /> Kontak Inligting (Vir navrae)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="organizer" className="block text-sm font-bold text-gray-700 dark:text-foreground">Naam van Organiseerder *</label>
                  <input
                    required
                    type="text"
                    id="organizer"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-foreground">E-posadres *</label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-border dark:bg-card dark:text-foreground rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-[border-color,box-shadow] pl-10"
                    />
                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-bold">
                Dien Gebeurtenis In
              </Button>
            </div>
          </form>
        </div>
        </div>
      </div>

      <PageFAQSection items={SUBMIT_EVENT_FAQS} description="Vrae oor gebeurtenisse indien by Die Papier." />
    </div>
  );
};