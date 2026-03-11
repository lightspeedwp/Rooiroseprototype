import React, { useState } from 'react';
import { useLocation, Link } from 'react-router';
import { Check, Download, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';

export const OrderConfirmationPage = () => {
  const location = useLocation();
  // Initialize from location state, default to true (guest) if not provided
  const [isGuestMode, setIsGuestMode] = useState(location.state?.isGuest ?? true);
  
  const orderNumber = Math.floor(1000 + Math.random() * 9000); // Mock order number
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Mock data - in a real app this would come from the order creation response
  const orderDetails = {
    id: orderNumber,
    date: currentDate,
    total: 35.00,
    email: "ashley@lightspeedwp.agency", // Mock email
    paymentMethod: "PayFast",
    products: [
      { name: "Die Papier E-uitgawe — Vrydag, 7 Maart 2026", quantity: 1, price: 35.00, region: "Gauteng en Vrystaat" },
    ],
    billing: {
      name: "Ash Shaw",
      company: "LightSpeed",
      address: "46 Devon Street",
      suburb: "Woodstock",
      city: "Cape Town",
      province: "Western Cape",
      postalCode: "7925",
      phone: "+27845656767",
      email: "ashley@lsdev.biz"
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500 relative">
        {/* Demo Mode Toggle */}
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-card shadow-lg dark:shadow-[var(--shadow-dark-300)] border border-gray-200 dark:border-border p-2 rounded-lg flex items-center gap-2">
        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Demo View:</span>
        <Button 
            size="sm" 
            variant={isGuestMode ? 'default' : 'outline'} 
            className={isGuestMode ? 'bg-brand-navy text-white hover:bg-brand-navy-light dark:hover:bg-brand-navy-light' : ''}
            onClick={() => setIsGuestMode(true)}
        >
            Guest
        </Button>
        <Button 
            size="sm" 
            variant={!isGuestMode ? 'default' : 'outline'} 
             className={!isGuestMode ? 'bg-brand-navy text-white hover:bg-brand-navy-light dark:hover:bg-brand-navy-light' : ''}
            onClick={() => setIsGuestMode(false)}
        >
            Logged In
        </Button>
      </div>
      
      {/* Header Message */}
      <div className="space-y-4">
        <h1 className="font-heading text-5xl md:text-6xl text-brand-navy dark:text-foreground">Bestelling ontvang</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-light">Dankie. Jou bestelling is ontvang.</p>
      </div>

      {/* Order Overview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 border-2 border-dashed border-gray-200 dark:border-border p-1">
        
        <div className="p-6 border-r-2 border-dashed border-gray-200 dark:border-border md:col-span-1 col-span-2">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-foreground mb-2">Bestelling #:</p>
          <p className="font-bold text-brand-navy dark:text-foreground">{orderDetails.id}</p>
        </div>

        <div className="p-6 border-r-2 border-dashed border-gray-200 dark:border-border md:col-span-1 col-span-2 border-t-2 md:border-t-0">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-foreground mb-2">Datum:</p>
          <p className="font-bold text-brand-navy dark:text-foreground">{orderDetails.date}</p>
        </div>

        <div className="p-6 border-r-2 border-dashed border-gray-200 dark:border-border md:col-span-1 col-span-2 border-t-2 md:border-t-0">
           <p className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-foreground mb-2">Totaal:</p>
           <p className="font-bold text-brand-navy dark:text-foreground">R {orderDetails.total.toFixed(2)}</p>
        </div>

        <div className="p-6 border-r-2 border-dashed border-gray-200 dark:border-border md:col-span-1 col-span-2 border-t-2 md:border-t-0">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-foreground mb-2">E-pos:</p>
          <p className="font-bold text-brand-navy dark:text-foreground truncate">{orderDetails.email}</p>
        </div>

        <div className="p-6 col-span-2 md:col-span-1 border-t-2 md:border-t-0 border-dashed border-gray-200 dark:border-border">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-navy dark:text-foreground mb-2">Betaling:</p>
          <p className="font-bold text-brand-navy dark:text-foreground">{orderDetails.paymentMethod === 'Direct bank transfer' ? 'EFT' : 'PayFast'}</p>
        </div>

      </div>

      {/* Downloads Section (Mock) */}
      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Aflaaie</h2>
        <div className="border-2 border-gray-200 dark:border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-white dark:bg-card border-b-2 border-gray-200 dark:border-border p-4 font-bold text-sm text-brand-navy dark:text-foreground">
            <div className="col-span-4">Produk</div>
            <div className="col-span-4">Verstryk</div>
            <div className="col-span-4 text-right">Aflaai</div>
          </div>
          <div className="grid grid-cols-12 p-4 items-center">
            <div className="col-span-4 font-medium text-brand-navy dark:text-foreground"><em>Die Papier</em>: Vrydag, 7 Maart 2026</div>
            <div className="col-span-4 text-gray-500 dark:text-gray-400">Nooit</div>
            <div className="col-span-4 text-right">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                <Download size={14} className="mr-2" />
                Laai af (PDF)
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Account Banner (Guest Only) */}
      {isGuestMode && (
        <div className="border-2 border-gray-200 dark:border-border rounded-lg p-8 bg-white dark:bg-card flex flex-col md:flex-row gap-8 items-start md:items-center justify-between animate-in fade-in slide-in-from-bottom-4">
          <div className="space-y-4 max-w-lg">
            <h3 className="font-heading text-2xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Skep 'n rekening by <em>Die Papier</em></h3>
             <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-5 flex justify-center"><Check size={16} className="text-green-600" /></div>
                    Vinniger aankope in die toekoms
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-5 flex justify-center"><Check size={16} className="text-green-600" /></div>
                    Stoor betalingsinligting veilig
                </li>
                 <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-5 flex justify-center"><Check size={16} className="text-green-600" /></div>
                    Volg bestellings en sien geskiedenis
                </li>
             </ul>
          </div>
          
          <div className="w-full md:w-auto flex flex-col items-center gap-3">
             <Button className="w-full md:w-64 py-6 bg-brand-navy hover:bg-primary text-white font-bold text-base">
                Skep rekening
             </Button>
             <p className="text-[10px] text-gray-400 max-w-xs text-center leading-tight">
                Gaan jou e-pos na by {orderDetails.email} vir die skakel om 'n rekening op te stel.
             </p>
          </div>
        </div>
      )}

      {/* Order Details */}
      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Bestellingbesonderhede</h2>
        
        <div className="border-t-2 border-gray-200 dark:border-border">
            {/* Header */}
            <div className="flex justify-between py-4 border-b border-gray-100 dark:border-border font-bold text-brand-navy dark:text-foreground">
                <span>Produk</span>
                <span>Totaal</span>
            </div>
            
            {/* Products */}
            <div className="divide-y divide-gray-100 dark:divide-border">
                {orderDetails.products.map((product, idx) => (
                    <div key={idx} className="flex justify-between py-4 text-gray-600 dark:text-gray-400">
                        <div>
                          <span>{product.name} <span className="font-bold text-brand-navy dark:text-foreground">× {product.quantity}</span></span>
                          {product.region && (
                            <p className="text-[11px] text-blue-600 dark:text-blue-400 mt-0.5 flex items-center gap-1">
                              <MapPin size={10} />
                              Streek: {product.region}
                            </p>
                          )}
                        </div>
                        <span className="font-medium text-brand-navy dark:text-foreground">R {product.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            {/* Subtotals */}
            <div className="border-t-2 border-gray-100 dark:border-border py-4 flex justify-between items-start">
                <span className="font-bold text-brand-navy dark:text-foreground">Aflewering:</span>
                <div className="text-right">
                    <span className="text-gray-600 dark:text-gray-400 block">Digitale produk — geen aflewering</span>
                </div>
            </div>

            {/* Total */}
            <div className="border-t-2 border-gray-100 dark:border-border py-6 flex justify-between items-center text-xl">
                 <span className="font-bold text-brand-navy dark:text-foreground">Totaal:</span>
                 <span className="font-bold text-brand-navy dark:text-foreground">R {orderDetails.total.toFixed(2)}</span>
            </div>
        </div>
      </div>

      {/* Billing Address */}
      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Faktureringadres</h2>
        <div className="border-2 border-gray-200 dark:border-border rounded-lg p-6 bg-gray-50 dark:bg-card text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <p className="font-bold text-brand-navy dark:text-foreground">{orderDetails.billing.name}</p>
            <p>{orderDetails.billing.company}</p>
            <p>{orderDetails.billing.address}</p>
            <p>{orderDetails.billing.suburb}, {orderDetails.billing.city}</p>
            <p>{orderDetails.billing.province}</p>
            <p>{orderDetails.billing.postalCode}</p>
            <p>{orderDetails.billing.phone}</p>
            <p className="mt-2 text-brand-navy dark:text-foreground">{orderDetails.billing.email}</p>
        </div>
      </div>

      {/* Additional Fields */}
      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Addisionele velde</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="font-normal text-brand-navy dark:text-foreground text-sm mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Geskenkboodskap</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Veels geluk! Hoop jy geniet die items.</p>
            </div>
             <div>
                <h3 className="font-normal text-brand-navy dark:text-foreground text-sm mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Afleweringsinstruksies</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Los asseblief by die hek as niemand tuis is nie.</p>
            </div>
        </div>
      </div>

       {/* Additional Information */}
      <div className="space-y-6">
        <h2 className="font-heading text-3xl font-normal text-brand-navy dark:text-foreground" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>Addisionele inligting</h2>
         <div>
            <h3 className="font-normal text-brand-navy dark:text-foreground text-sm mb-2 font-heading" style={{ fontVariationSettings: "var(--fvs-h3)", lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)' }}>Bestellingnotas</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">Geen bestellingnotas bygevoeg nie.</p>
        </div>
      </div>

      <div className="pt-12 flex justify-center">
        <Link to="/">
            <Button variant="outline" className="border-brand-navy dark:border-brand-navy-light text-brand-navy dark:text-brand-navy-light hover:bg-gray-50 dark:hover:bg-muted px-8 py-6">
                Terug na Tuisblad
            </Button>
        </Link>
      </div>

    </div>
  );
};