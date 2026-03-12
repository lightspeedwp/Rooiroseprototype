import React, { useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, Eye, Code, ChevronDown, ChevronRight } from 'lucide-react';
import { useDevLanguage } from '../../context/DevLanguageContext';
import { getTranslation } from '../../data/devTranslations';

import { Logo } from '../../components/common/Logo';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import {
  Search, Mail, ChevronLeft, ArrowRight, Bell, Heart, Star, Share2, Bookmark,
  Calendar, MapPin, Clock, User, Settings, Download, Upload, Trash2, Edit, Plus, X, Check, AlertTriangle, Info
} from 'lucide-react';

interface StyleSection {
  id: string;
  title: string;
  titleEn: string;
}

const SECTIONS: StyleSection[] = [
  { id: 'logos', title: 'Logos', titleEn: 'Logos' },
  { id: 'buttons', title: 'Knoppies', titleEn: 'Buttons' },
  { id: 'forms', title: 'Vorms', titleEn: 'Forms' },
  { id: 'badges', title: 'Kentekens', titleEn: 'Badges' },
  { id: 'typography', title: 'Tipografie', titleEn: 'Typography' },
  { id: 'icons', title: 'Ikone', titleEn: 'Icons' },
  { id: 'colors', title: 'Kleure', titleEn: 'Colors' },
  { id: 'cards', title: 'Kaarte', titleEn: 'Cards' },
  { id: 'alerts', title: 'Waarskuwings', titleEn: 'Alerts' },
];

export const StyleGuide = () => {
  const { locale } = useDevLanguage();
  const t = (key: string) => getTranslation(key, locale);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? null : id);
  };

  const sectionTitle = (section: StyleSection) => locale === 'af' ? section.title : section.titleEn;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1
          className="text-3xl font-normal font-heading mb-2"
          style={{ fontVariationSettings: 'var(--fvs-h2)', lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}
        >
          {t('devhub.styleGuide')}
        </h1>
        <p className="text-white/50 text-sm mb-8">{t('devhub.styleGuideDesc')}</p>

        <div className="space-y-4">
          {SECTIONS.map((section) => (
            <div key={section.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h2 className="font-bold text-white">{sectionTitle(section)}</h2>
                {activeSection === section.id ? (
                  <ChevronDown size={16} className="text-white/30" />
                ) : (
                  <ChevronRight size={16} className="text-white/30" />
                )}
              </button>

              {activeSection === section.id && (
                <div className="px-6 pb-6 border-t border-white/10 pt-6">

                  {/* ─── Logos ─── */}
                  {section.id === 'logos' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-8 flex items-center justify-center">
                          <Logo variant="default" className="h-10 w-auto" />
                        </div>
                        <div className="bg-brand-navy rounded-lg p-8 flex items-center justify-center border border-white/10">
                          <Logo variant="white" className="h-10 w-auto" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                          <Logo variant="default" className="h-6 w-auto" />
                        </div>
                      </div>
                      <p className="text-xs text-white/40">Variants: default, white. Sizes: h-6 (compact), h-10 (standard), h-14 (hero)</p>
                    </div>
                  )}

                  {/* ─── Buttons ─── */}
                  {section.id === 'buttons' && (
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Variants</p>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="default">Default</Button>
                          <Button variant="destructive">Destructive</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="link">Link</Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Sizes</p>
                        <div className="flex flex-wrap items-center gap-3">
                          <Button size="sm">Small</Button>
                          <Button size="default">Default</Button>
                          <Button size="lg">Large</Button>
                          <Button size="icon"><Plus size={16} /></Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Brand</p>
                        <div className="flex flex-wrap gap-3">
                          <Button className="bg-brand-red hover:bg-brand-red/90 text-white">Brand Red</Button>
                          <Button className="bg-brand-navy hover:bg-brand-navy-light text-white">Brand Navy</Button>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">With Icons</p>
                        <div className="flex flex-wrap gap-3">
                          <Button><Mail size={16} className="mr-2" /> Subscribe</Button>
                          <Button variant="outline"><Download size={16} className="mr-2" /> Download</Button>
                          <Button variant="destructive"><Trash2 size={16} className="mr-2" /> Delete</Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─── Forms ─── */}
                  {section.id === 'forms' && (
                    <div className="space-y-6 max-w-md">
                      <div>
                        <label className="text-xs text-white/50 mb-1.5 block">Text Input</label>
                        <Input placeholder="Enter text..." className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div>
                        <label className="text-xs text-white/50 mb-1.5 block">Search Input</label>
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                          <Input placeholder="Search..." className="pl-10 bg-white/5 border-white/10 text-white" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-white/50 mb-1.5 block">Email Input</label>
                        <Input type="email" placeholder="email@example.com" className="bg-white/5 border-white/10 text-white" />
                      </div>
                      <div className="flex items-center gap-3">
                        <Switch />
                        <span className="text-sm text-white/70">Toggle option</span>
                      </div>
                    </div>
                  )}

                  {/* ─── Badges ─── */}
                  {section.id === 'badges' && (
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-brand-red text-white">Nuus</Badge>
                        <Badge className="bg-blue-600 text-white">Sport</Badge>
                        <Badge className="bg-amber-600 text-white">Sake</Badge>
                        <Badge className="bg-green-600 text-white">Leefstyl</Badge>
                        <Badge className="bg-purple-600 text-white">Dink</Badge>
                        <Badge className="bg-orange-600 text-white">Skole</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">Breaking</Badge>
                        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">Gesponsord</Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Fluid</Badge>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Nuut</Badge>
                      </div>
                    </div>
                  )}

                  {/* ─── Typography ─── */}
                  {section.id === 'typography' && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H1 — Roboto Serif 400 (Fluid)</p>
                          <h1 className="font-heading font-normal" style={{ fontSize: 'var(--text-h1)', lineHeight: 'var(--lh-h1)', fontVariationSettings: 'var(--fvs-h1)', letterSpacing: 'var(--ls-h1)' }}>
                            rooi rose Opskrif Een
                          </h1>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H2 — Roboto Serif 400 (Fluid)</p>
                          <h2 className="font-heading font-normal" style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)', fontVariationSettings: 'var(--fvs-h2)', letterSpacing: 'var(--ls-h2)' }}>
                            Opskrif Twee Voorbeeld
                          </h2>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H3 — Roboto Serif 400</p>
                          <h3 className="font-heading font-normal" style={{ fontSize: 'var(--text-h3)', lineHeight: 'var(--lh-h3)', fontVariationSettings: 'var(--fvs-h3)', letterSpacing: 'var(--ls-h3)' }}>
                            Artikel Opskrif Drie
                          </h3>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H4 — Roboto Serif 400</p>
                          <h4 className="font-heading font-normal" style={{ fontSize: 'var(--text-h4)', lineHeight: 'var(--lh-h4)', fontVariationSettings: 'var(--fvs-h4)', letterSpacing: 'var(--ls-h4)' }}>
                            Kaart Opskrif Vier
                          </h4>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H5 — Inter Bold 700</p>
                          <h5 className="font-inter" style={{ fontSize: 'var(--text-h5)', lineHeight: 'var(--lh-h5)', letterSpacing: 'var(--ls-h5)', fontWeight: 700 }}>
                            UI Opskrif Vyf
                          </h5>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">H6 — Inter SemiBold 600 + UPPERCASE</p>
                          <h6 className="font-inter uppercase" style={{ fontSize: 'var(--text-h6)', lineHeight: 'var(--lh-h6)', letterSpacing: 'var(--ls-h6)', fontWeight: 600 }}>
                            Afdeling Titel Ses
                          </h6>
                        </div>
                        <Separator className="bg-white/10" />
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">P1 — Inter 400 (Body)</p>
                          <p className="font-inter text-white/70" style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}>
                            Dit is liggaamsteks in P1-grootte. rooi rose is &apos;n weeklikse nasionale tydskrif op die voorpunt van die week se leefstyl en stories.
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">P2 — Inter 400 (Default body)</p>
                          <p className="font-inter text-white/70" style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}>
                            Standaard liggaamsteks in P2-grootte. Gebruik vir meeste paragrawe en inhoud.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─── Icons ─── */}
                  {section.id === 'icons' && (
                    <div className="space-y-4">
                      <p className="text-xs text-white/40">Lucide React icon library. Standard sizes: 14, 16, 18, 20, 24</p>
                      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-3">
                        {[Search, Mail, Bell, Heart, Star, Share2, Bookmark, Calendar, MapPin, Clock, User, Settings,
                          Download, Upload, Trash2, Edit, Plus, X, Check, AlertTriangle, Info, ArrowRight, ChevronLeft, Eye].map((Icon, i) => (
                          <div key={i} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors">
                            <Icon size={18} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ─── Colors ─── */}
                  {section.id === 'colors' && (
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Brand</p>
                        <div className="flex gap-2">
                          <div className="flex-1 h-16 rounded-lg bg-brand-red flex items-end p-2">
                            <span className="text-[10px] text-white/80 font-mono">brand-red</span>
                          </div>
                          <div className="flex-1 h-16 rounded-lg bg-brand-navy flex items-end p-2">
                            <span className="text-[10px] text-white/80 font-mono">brand-navy</span>
                          </div>
                          <div className="flex-1 h-16 rounded-lg bg-brand-navy-light flex items-end p-2">
                            <span className="text-[10px] text-white/80 font-mono">brand-navy-light</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-white/30 uppercase tracking-widest mb-3">System</p>
                        <div className="flex gap-2">
                          <div className="flex-1 h-16 rounded-lg bg-background border border-border flex items-end p-2">
                            <span className="text-[10px] text-foreground/80 font-mono">background</span>
                          </div>
                          <div className="flex-1 h-16 rounded-lg bg-card border border-border flex items-end p-2">
                            <span className="text-[10px] text-foreground/80 font-mono">card</span>
                          </div>
                          <div className="flex-1 h-16 rounded-lg bg-muted border border-border flex items-end p-2">
                            <span className="text-[10px] text-foreground/80 font-mono">muted</span>
                          </div>
                          <div className="flex-1 h-16 rounded-lg bg-accent border border-border flex items-end p-2">
                            <span className="text-[10px] text-foreground/80 font-mono">accent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─── Cards ─── */}
                  {section.id === 'cards' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-card border border-border rounded-xl p-5">
                        <h3 className="font-bold text-foreground mb-2">Standaard Kaart</h3>
                        <p className="text-sm text-muted-foreground">Standard card with default styling from the design system.</p>
                      </div>
                      <div className="bg-brand-navy border border-white/10 rounded-xl p-5 text-white">
                        <h3 className="font-bold mb-2">Navy Kaart</h3>
                        <p className="text-sm text-white/60">Dark navy card variant used in footer and dev tools.</p>
                      </div>
                      <div className="bg-brand-red rounded-xl p-5 text-white">
                        <h3 className="font-bold mb-2">Rooi CTA Kaart</h3>
                        <p className="text-sm text-white/80">Red call-to-action card for promotions and highlights.</p>
                      </div>
                    </div>
                  )}

                  {/* ─── Alerts ─── */}
                  {section.id === 'alerts' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-blue-300">Inligting</p>
                          <p className="text-xs text-blue-300/70">This is an informational alert with helpful details.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                        <AlertTriangle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-amber-300">Waarskuwing</p>
                          <p className="text-xs text-amber-300/70">This is a warning alert requiring attention.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-green-300">Sukses</p>
                          <p className="text-xs text-green-300/70">This is a success alert confirming an action.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-red-300">Fout</p>
                          <p className="text-xs text-red-300/70">This is an error alert indicating a problem.</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};