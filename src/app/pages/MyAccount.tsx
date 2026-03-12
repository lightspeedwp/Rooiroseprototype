import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { 
  User, 
  ShoppingBag, 
  MapPin, 
  LogOut, 
  CreditCard, 
  Home,
  LayoutDashboard,
  Settings,
  FileText,
  Mail,
  BookOpen
} from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { PageContainer } from '../components/common/PageContainer';
import { MOCK_USER, MOCK_SUBSCRIPTION, MOCK_ORDERS } from '../data/user';

export const MyAccount = () => {
  // State for "Simulated Auth"
  // In a real app, this would be handled by Supabase Auth Context
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
      toast.success("Suksesvol ingeteken");
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info("Jy is uitgeteken");
    setActiveTab('dashboard');
  };

  // Render content based on logged in state
  if (!isLoggedIn) {
    return (
      <PageContainer breadcrumbs={[{ label: 'My rekening' }]}>
        <div className="py-8">
          <h1
            className="text-3xl font-normal text-center text-brand-navy dark:text-foreground mb-12 font-heading"
            style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
          >My rekening</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Login Form */}
            <div className="bg-white dark:bg-card p-8 rounded-lg shadow-sm dark:shadow-[var(--shadow-dark-200)] border border-gray-200 dark:border-border h-full">
              <h2 className="text-xl font-normal mb-6 text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Teken in</h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posadres of gebruikersnaam</Label>
                  <Input id="email" type="email" placeholder="naam@voorbeeld.co.za" required />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Wagwoord</Label>
                    <button type="button" className="text-xs text-brand-red hover:underline" onClick={() => toast.info("Wagwoord herstel e-pos gestuur.")}>
                      Wagwoord vergeet?
                    </button>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full bg-brand-navy-light dark:bg-brand-navy hover:bg-brand-navy dark:hover:bg-brand-navy-dark text-white font-bold h-10 mt-4" disabled={loading}>
                  {loading ? "Besig om in te teken..." : "Teken in"}
                </Button>
              </form>
            </div>

            {/* Register Info */}
            <div className="bg-white dark:bg-card p-8 rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] h-full flex flex-col justify-center">
              <h2 className="text-xl font-normal mb-4 text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontSize: 'var(--text-h2)' }}>Registreer</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Registreer op hierdie webwerf om jou bestellings te bestuur, jou intekeninge by te werk en vinniger deur die betaalpunt te beweeg.
              </p>
              <div className="space-y-4">
                 <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                   Deur te registreer bevestig jy dat jy ons privaatheidsbeleid aanvaar.
                 </p>
                 <Button asChild variant="outline" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors">
                   <Link to="/registreer">Skep 'n rekening</Link>
                 </Button>
              </div>
              
              {/* Dev Tool Helper */}
              <div className="mt-8 pt-4 border-t border-dashed border-gray-300 dark:border-input">
                 <p className="text-xs text-gray-400 dark:text-gray-500 mb-2 text-center uppercase tracking-wide">Ontwikkelaar Opsies</p>
                 <Button variant="ghost" size="sm" className="w-full text-xs text-gray-500 dark:text-gray-400" onClick={() => setIsLoggedIn(true)}>
                   [Dev] Slaan login oor
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  // Logged In View
  return (
    <PageContainer breadcrumbs={[{ label: 'My rekening' }]}>
      <div className="py-8">
        <h1
          className="text-3xl font-normal text-center text-brand-navy dark:text-foreground mb-12 font-heading"
          style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
        >My rekening</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <nav className="w-full md:w-64 flex-shrink-0">
             <div className="bg-white dark:bg-card rounded-lg border border-gray-200 dark:border-border overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)]">
               <div className="p-4 bg-gray-50 dark:bg-background border-b border-gray-200 dark:border-border flex items-center gap-3">
                 <div className="h-10 w-10 rounded-full bg-brand-navy-light dark:bg-brand-navy text-white flex items-center justify-center font-bold text-lg">
                   {MOCK_USER.name.charAt(0)}
                 </div>
                 <div className="overflow-hidden">
                   <p className="text-sm font-bold truncate dark:text-foreground">{MOCK_USER.name}</p>
                   <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{MOCK_USER.email}</p>
                 </div>
               </div>
               
               <div className="flex flex-col">
                 <NavButton 
                   active={activeTab === 'dashboard'} 
                   onClick={() => setActiveTab('dashboard')} 
                   icon={<LayoutDashboard size={18} />} 
                   label="Paneelbord" 
                 />
                 <NavButton 
                   active={activeTab === 'orders'} 
                   onClick={() => setActiveTab('orders')} 
                   icon={<ShoppingBag size={18} />} 
                   label="Bestellings" 
                 />
                 <NavButton 
                   active={activeTab === 'subscriptions'} 
                   onClick={() => setActiveTab('subscriptions')} 
                   icon={<CreditCard size={18} />} 
                   label="Intekeninge" 
                 />
                 <NavButton 
                   active={activeTab === 'addresses'} 
                   onClick={() => setActiveTab('addresses')} 
                   icon={<MapPin size={18} />} 
                   label="Adresse" 
                 />
                 <NavButton 
                   active={activeTab === 'account'} 
                   onClick={() => setActiveTab('account')} 
                   icon={<Settings size={18} />} 
                   label="Rekeningbesonderhede" 
                 />
                 <NavButton 
                   active={activeTab === 'newsletters'} 
                   onClick={() => setActiveTab('newsletters')} 
                   icon={<Mail size={18} />} 
                   label="Nuusbriewe" 
                 />
                 <NavButton 
                   active={false} 
                   onClick={() => navigate('/my-e-uitgawes')} 
                   icon={<BookOpen size={18} />} 
                   label="My Biblioteek" 
                 />
                 <div className="border-t border-gray-100 dark:border-border mt-2">
                   <button 
                     onClick={handleLogout}
                     className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-3"
                   >
                     <LogOut size={18} />
                     Teken uit
                   </button>
                 </div>
               </div>
             </div>
          </nav>

          {/* Content Area */}
          <div className="flex-grow">
            <div className="bg-white dark:bg-card p-6 md:p-8 rounded-lg border border-gray-200 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] min-h-[400px]">
              {activeTab === 'dashboard' && (
                <div className="space-y-6 fade-in">
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Hallo <strong className="text-brand-navy dark:text-foreground">{MOCK_USER.name}</strong> (nie <strong>{MOCK_USER.name}</strong> nie? <button onClick={handleLogout} className="text-brand-red hover:underline">Teken uit</button>)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vanuit jou rekeningpaneelbord kan jy jou <button onClick={() => setActiveTab('orders')} className="text-brand-red hover:underline">onlangse bestellings</button> sien, jou <button onClick={() => setActiveTab('addresses')} className="text-brand-red hover:underline">versendings- en faktuuradresse</button> bestuur, en jou <button onClick={() => setActiveTab('account')} className="text-brand-red hover:underline">wagwoord en rekeningbesonderhede</button> wysig.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <DashboardCard 
                      title="Intekeninge" 
                      count="1 Aktief" 
                      icon={<CreditCard className="text-brand-navy-light" />} 
                      onClick={() => setActiveTab('subscriptions')}
                    />
                    <DashboardCard 
                      title="My Biblioteek" 
                      count="Bekyk" 
                      icon={<BookOpen className="text-brand-navy-light" />} 
                      onClick={() => navigate('/my-e-uitgawes')}
                    />
                    <DashboardCard 
                      title="Bestellings" 
                      count="3 Onlangs" 
                      icon={<ShoppingBag className="text-brand-navy-light" />} 
                      onClick={() => setActiveTab('orders')}
                    />
                    <DashboardCard 
                      title="Nuusbriewe" 
                      count="Bestuur" 
                      icon={<Mail className="text-brand-navy-light" />} 
                      onClick={() => setActiveTab('newsletters')}
                    />
                    <DashboardCard 
                      title="Adresse" 
                      count="Bestuur" 
                      icon={<MapPin className="text-brand-navy-light" />} 
                      onClick={() => setActiveTab('addresses')}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-6 fade-in">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground border-b border-gray-100 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Bestellings</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-border text-gray-500 dark:text-gray-400">
                          <th className="py-3 px-2">Bestelling</th>
                          <th className="py-3 px-2">Datum</th>
                          <th className="py-3 px-2">Status</th>
                          <th className="py-3 px-2">Totaal</th>
                          <th className="py-3 px-2 text-right">Aksies</th>
                        </tr>
                      </thead>
                      <tbody>
                        {MOCK_ORDERS.map((order) => (
                          <tr key={order.id} className="border-b border-gray-100 dark:border-border last:border-0 hover:bg-gray-50 dark:hover:bg-muted">
                            <td className="py-3 px-2 font-medium text-brand-red">{order.id}</td>
                            <td className="py-3 px-2 dark:text-gray-300">{order.date}</td>
                            <td className="py-3 px-2"><span className="bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-bold">{order.status}</span></td>
                            <td className="py-3 px-2 dark:text-gray-300">{order.total}</td>
                            <td className="py-3 px-2 text-right">
                              <Button variant="outline" size="sm" className="h-8 text-xs">Bekyk</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'subscriptions' && (
                <div className="space-y-6 fade-in">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground border-b border-gray-100 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>My intekeninge</h3>
                  
                  <div className="bg-white dark:bg-card border border-gray-200 dark:border-border rounded-lg overflow-hidden shadow-sm dark:shadow-[var(--shadow-dark-200)]">
                     <div className="bg-gray-50 dark:bg-background p-4 border-b border-gray-200 dark:border-border flex justify-between items-center">
                        <span className="font-bold text-brand-navy-light dark:text-brand-navy-light">{MOCK_SUBSCRIPTION.plan}</span>
                        <span className="bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold uppercase">{MOCK_SUBSCRIPTION.status}</span>
                     </div>
                     <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500 dark:text-gray-400">Begin datum</p>
                            <p className="font-medium dark:text-foreground">19 Desember 2025</p>
                          </div>
                          <div>
                            <p className="text-gray-500 dark:text-gray-400">Volgende betaling</p>
                            <p className="font-medium dark:text-foreground">{MOCK_SUBSCRIPTION.nextPayment}</p>
                          </div>
                          <div>
                            <p className="text-gray-500 dark:text-gray-400">Bedrag</p>
                            <p className="font-medium dark:text-foreground">{MOCK_SUBSCRIPTION.amount} / week</p>
                          </div>
                          <div>
                            <p className="text-gray-500 dark:text-gray-400">Aksies</p>
                            <div className="flex gap-2">
                               <button className="text-brand-red text-xs hover:underline font-medium">Verander plan</button>
                               <button className="text-gray-500 dark:text-gray-400 text-xs hover:underline">Kanselleer</button>
                            </div>
                          </div>
                        </div>
                     </div>
                     <div className="bg-gray-50 dark:bg-background p-3 border-t border-gray-200 dark:border-border text-center">
                       <Link to="/e-uitgawes" className="text-sm font-bold text-brand-red hover:underline">
                         Lees nuutste uitgawe →
                       </Link>
                     </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100 dark:border-border text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Wil jy 'n ander intekening byvoeg?</p>
                    <Button onClick={() => window.location.href = '/subscribe/e-edition'}>
                      Bekyk opsies
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="space-y-6 fade-in">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground border-b border-gray-100 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Adresse</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Die volgende adresse sal by verstek gebruik word op die afrekenbladsy.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 dark:border-border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-normal text-lg dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Faktuuradres</h4>
                        <button className="text-brand-red text-sm hover:underline">Wysig</button>
                      </div>
                      <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {MOCK_USER.name} Van Der Merwe<br/>
                        123 Hoofstraat<br/>
                        Paarl<br/>
                        7646<br/>
                        Wes-Kaap
                      </address>
                    </div>
                    
                    <div className="border border-gray-200 dark:border-border rounded-lg p-6 bg-gray-50 dark:bg-background opacity-75">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="font-normal text-lg dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Versendingsadres</h4>
                        <button className="text-brand-red text-sm hover:underline">Wysig</button>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">Jy het nog nie hierdie adres tipe opgestel nie.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'account' && (
                <div className="space-y-6 fade-in">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground border-b border-gray-100 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Rekeningbesonderhede</h3>
                  <form className="space-y-4 max-w-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Naam</Label>
                        <Input id="firstName" defaultValue={MOCK_USER.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Van</Label>
                        <Input id="lastName" defaultValue="Van Der Merwe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Vertoonnaam</Label>
                      <Input id="displayName" defaultValue={MOCK_USER.name} />
                      <p className="text-xs text-gray-500 dark:text-gray-400">Dit is hoe jou naam in die rekening afdeling en resensies sal verskyn.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="accountEmail">E-posadres</Label>
                      <Input id="accountEmail" type="email" defaultValue={MOCK_USER.email} />
                    </div>

                    <Separator className="my-6" />

                    <h4 className="font-normal dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Wagwoord verandering</h4>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentPass">Huidige wagwoord (laat leeg om onveranderd te bly)</Label>
                      <Input id="currentPass" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPass">Nuwe wagwoord (laat leeg om onveranderd te bly)</Label>
                      <Input id="newPass" type="password" />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="bg-brand-red hover:bg-brand-red-hover">Stoor veranderinge</Button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'newsletters' && (
                <div className="space-y-6 fade-in">
                  <h3 className="text-xl font-normal text-brand-navy dark:text-foreground border-b border-gray-100 dark:border-border pb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontSize: 'var(--text-h3)' }}>Nuusbriewe</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Bestuur jou nuusbrief-voorkeure. Jy kan te eniger tyd in- of uitteken.
                  </p>

                  {/* Current subscription status */}
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 rounded-lg p-4 flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/40 rounded-full p-1.5">
                      <Mail size={16} className="text-green-700 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-300">
                        Jy is tans ingeteken op <strong><em>rooi rose</em> Nuusbrief</strong>
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">
                        Ingeteken sedert 19 Desember 2025
                      </p>
                    </div>
                  </div>

                  {/* Newsletter info card */}
                  <div className="border border-gray-200 dark:border-border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-background p-4 border-b border-gray-200 dark:border-border flex justify-between items-center">
                      <span className="font-bold text-brand-navy-light dark:text-brand-navy-light"><em>rooi rose</em> Nuusbrief</span>
                      <span className="bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 px-2 py-1 rounded text-xs font-bold uppercase">Aktief</span>
                    </div>
                    <div className="p-4 space-y-3">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ontvang die jongste nuus, eksklusiewe stories en belangrike opdaterings direk in jou inkassie.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">E-posadres</p>
                          <p className="font-medium dark:text-foreground">{MOCK_USER.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 dark:text-gray-400">Frekwensie</p>
                          <p className="font-medium dark:text-foreground">Weeklikse oorsig</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-background p-3 border-t border-gray-200 dark:border-border flex justify-between items-center">
                      <button
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:underline transition-colors"
                        onClick={() => toast.info('Uitskryf-versoek sal via e-pos bevestig word.')}
                      >
                        Skryf uit
                      </button>
                      <Link to="/bestuur-my-nuusbriewe" className="text-sm font-bold text-brand-red hover:underline">
                        Bestuur voorkeure →
                      </Link>
                    </div>
                  </div>

                  {/* Quick links */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-border">
                    <h4 className="text-sm font-normal text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Vinnige skakels</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Link
                        to="/bestuur-my-nuusbriewe"
                        className="text-sm text-brand-navy-light dark:text-brand-navy-light hover:text-brand-red flex items-center gap-2 p-3 rounded-lg border border-gray-100 dark:border-border hover:border-brand-red/20 transition-colors"
                      >
                        <Settings size={16} className="shrink-0" />
                        Bestuur my nuusbriewe
                      </Link>
                      <Link
                        to="/nuusbrief-inteken"
                        className="text-sm text-brand-navy-light dark:text-brand-navy-light hover:text-brand-red flex items-center gap-2 p-3 rounded-lg border border-gray-100 dark:border-border hover:border-brand-red/20 transition-colors"
                      >
                        <Mail size={16} className="shrink-0" />
                        Nuusbrief-inskrywing
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

// Sub-component for nav links
const NavButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors border-l-4 ${
      active 
        ? 'bg-gray-50 dark:bg-background font-bold text-brand-navy dark:text-foreground border-brand-red' 
        : 'border-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-muted'
    }`}
  >
    <span className={active ? 'text-brand-red' : 'text-gray-400 dark:text-gray-500'}>{icon}</span>
    {label}
  </button>
);

// Dashboard Quick Cards
const DashboardCard = ({ title, count, icon, onClick }: { title: string, count: string, icon: React.ReactNode, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="bg-white dark:bg-card p-6 rounded-lg border border-gray-100 dark:border-border shadow-sm dark:shadow-[var(--shadow-dark-200)] cursor-pointer hover:shadow-md hover:border-brand-navy-light dark:hover:border-brand-navy-light transition-all flex flex-col items-center text-center gap-2 group"
  >
    <div className="h-12 w-12 rounded-full bg-white dark:bg-card shadow-sm dark:shadow-[var(--shadow-dark-100)] flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-normal text-brand-navy dark:text-foreground font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>{title}</h4>
    <p className="text-sm text-brand-red font-medium">{count}</p>
  </div>
);