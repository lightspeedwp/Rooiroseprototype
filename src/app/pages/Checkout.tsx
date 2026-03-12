import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { ChevronDown, Info, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from 'sonner';

export const CheckoutPage = () => {
  const { items, total } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'eft' | 'payfast' | 'cod'>('eft');
  // Mock login state - toggle this to see different views
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const mockUser = {
    firstName: "John",
    lastName: "Doe",
    company: "rooi rose",
    address: "123 Kerk Straat",
    city: "Kaapstad",
    province: "wc",
    zip: "8001",
    phone: "+27 82 123 4567"
  };

  const handlePlaceOrder = () => {
    // In a real app, validate form here
    toast.success("Bestelling suksesvol geplaas!");
    navigate('/bestelling-bevestiging', { state: { isGuest: !isLoggedIn } });
  };

  if (items.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] font-inter">
            <h1 className="text-2xl font-normal mb-4 font-heading" style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}>Jou mandjie is leeg</h1>
            <Button onClick={() => navigate('/e-uitgawes')} className="bg-primary hover:bg-primary/90">Gaan terug na winkel</Button>
        </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 font-inter text-foreground dark:text-foreground">
      
      {/* Left Column - Checkout Form */}
      <div className="flex-1 space-y-12">
        <h1
          className="font-heading font-normal text-5xl md:text-6xl text-brand-navy dark:text-foreground mb-8"
          style={{ fontVariationSettings: "var(--fvs-h1)", lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)' }}
        >Checkout</h1>

        {/* Step 1: Contact Information */}
        <section className="relative pl-10 md:pl-14">
          <div className="absolute left-0 top-1 text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground">1.</div>
          
          <div className="flex justify-between items-baseline mb-4">
            <h2 className="text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground">Kontakbesonderhede</h2>
            <div className="flex gap-2 items-center bg-gray-100 dark:bg-muted px-3 py-1 rounded-full">
                <span className="text-xs uppercase font-bold text-gray-500 dark:text-gray-400">Demo:</span>
                <select
                  value={isLoggedIn ? 'logged-in' : 'logged-out'}
                  onChange={(e) => setIsLoggedIn(e.target.value === 'logged-in')}
                  className="text-[11px] h-7 px-2 bg-brand-navy text-white rounded border-0 cursor-pointer font-bold appearance-none pr-6"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center' }}
                >
                  <option value="logged-in">Ingelogd</option>
                  <option value="logged-out">Nie ingelogd</option>
                </select>
            </div>
          </div>
          
          {isLoggedIn ? (
            <div className="bg-gray-50 dark:bg-card border border-gray-100 dark:border-border p-4 rounded text-gray-600 dark:text-gray-400">
               Ingelog as <span className="font-semibold text-foreground dark:text-foreground">John Doe</span> (john.doe@example.com)
            </div>
          ) : (
            <>
              <p className="text-gray-600 dark:text-gray-400 mb-6 font-light">Ons sal hierdie e-posadres gebruik om vir jou besonderhede en opdaterings oor jou bestelling te stuur.</p>
              
              <div className="space-y-4 max-w-2xl">
                <div className="relative">
                  <Input 
                    id="email" 
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card rounded-md focus-visible:ring-0 focus-visible:border-foreground dark:focus-visible:border-foreground text-base"
                  />
                  <Label 
                    htmlFor="email" 
                    className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400"
                  >
                    E-posadres
                  </Label>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Jy betaal tans as 'n gas.</p>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox id="create-account" className="border-gray-300 dark:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-white" />
                  <Label htmlFor="create-account" className="text-lg font-light cursor-pointer text-foreground">Skep 'n rekening by <em>rooi rose</em></Label>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Step 2: Billing Address (Renamed from Shipping Address, and Delivery removed) */}
        <section className="relative pl-10 md:pl-14">
          <div className="absolute left-0 top-1 text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground">2.</div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground mb-4">Faktureringadres</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 font-light text-lg">Voer die adres in vir jou faktuur.</p>

          <div className="space-y-4 max-w-2xl" key={isLoggedIn ? 'logged-in' : 'guest'}>
            {/* Country Select */}
            <div className="relative">
                <Select defaultValue="za">
                  <SelectTrigger className="h-14 border-gray-300 dark:border-border bg-white dark:bg-card focus:ring-0 focus:border-foreground dark:focus:border-foreground">
                    <SelectValue placeholder="Kies land" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="za">Suid-Afrika</SelectItem>
                    <SelectItem value="na">Namibië</SelectItem>
                  </SelectContent>
                </Select>
                <Label className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium z-10 pointer-events-none">Land / Streek</Label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Input 
                    id="fname" 
                    defaultValue={isLoggedIn ? mockUser.firstName : ''}
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground" 
                />
                <Label htmlFor="fname" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Naam</Label>
              </div>
              <div className="relative">
                <Input 
                    id="lname" 
                    defaultValue={isLoggedIn ? mockUser.lastName : ''}
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground" 
                />
                <Label htmlFor="lname" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Van</Label>
              </div>
            </div>

            <div className="relative">
              <Input 
                id="company" 
                defaultValue={isLoggedIn ? mockUser.company : ''}
                placeholder=" " 
                className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground" 
              />
              <Label htmlFor="company" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Maatskappy (opsioneel)</Label>
            </div>

            <div className="relative">
              <Input 
                id="address" 
                defaultValue={isLoggedIn ? mockUser.address : ''}
                placeholder=" " 
                className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground" 
              />
              <Label htmlFor="address" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Adres</Label>
            </div>

            <button className="text-lg font-light text-foreground dark:text-foreground flex items-center gap-2 py-2">
              + Voeg woonstel, suite, ens. by
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="relative">
                <Input 
                    id="city" 
                    defaultValue={isLoggedIn ? mockUser.city : ''}
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground" 
                />
                <Label htmlFor="city" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Stad</Label>
              </div>
               <div className="relative">
                <Select defaultValue={isLoggedIn ? mockUser.province : undefined}>
                  <SelectTrigger className="h-14 border-gray-300 dark:border-border bg-white dark:bg-card pt-6 focus:ring-0 focus:border-foreground dark:focus:border-foreground">
                    <SelectValue placeholder=" " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wc">Wes-Kaap</SelectItem>
                    <SelectItem value="gt">Gauteng</SelectItem>
                    <SelectItem value="kzn">KwaZulu-Natal</SelectItem>
                  </SelectContent>
                </Select>
                <Label className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium z-10 pointer-events-none">Provinsie</Label>
              </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="relative">
                <Input 
                    id="zip" 
                    defaultValue={isLoggedIn ? mockUser.zip : ''}
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground dark:focus-visible:border-foreground" 
                />
                <Label htmlFor="zip" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Poskode</Label>
              </div>
               <div className="relative">
                <Input 
                    id="phone" 
                    defaultValue={isLoggedIn ? mockUser.phone : ''}
                    placeholder=" " 
                    className="peer h-14 pt-6 pb-2 px-3 border-gray-300 dark:border-border dark:bg-card focus-visible:ring-0 focus-visible:border-foreground dark:focus-visible:border-foreground" 
                />
                <Label htmlFor="phone" className="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 font-medium transition-[top,font-size,color] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500 dark:peer-focus:text-gray-400">Telefoon (opsioneel)</Label>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Payment Options */}
        <section className="relative pl-10 md:pl-14">
          <div className="absolute left-0 top-1 text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground">3.</div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-normal text-brand-navy dark:text-foreground mb-4">Betaalopsies</h2>
          
          <div className="max-w-2xl border border-gray-200 dark:border-border rounded-sm overflow-hidden">
             {/* Option 1: EFT */}
            <div className={`p-6 border-b border-gray-200 dark:border-border transition-colors ${paymentMethod === 'eft' ? 'bg-white dark:bg-card' : 'bg-white dark:bg-card'}`}>
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <input 
                    type="radio" 
                    name="payment" 
                    id="payment-eft" 
                    className="w-4 h-4 accent-primary"
                    checked={paymentMethod === 'eft'}
                    onChange={() => setPaymentMethod('eft')}
                  />
                </div>
                <div>
                  <label htmlFor="payment-eft" className="block text-xl font-light text-foreground dark:text-foreground mb-2 cursor-pointer">
                    Direkte bankoorplasing
                  </label>
                  {paymentMethod === 'eft' && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2">
                      Maak jou betaling direk in ons bankrekening. Gebruik asseblief jou Bestelling ID as betalingsverwysing. Jou bestelling sal nie versend word totdat die fondse in ons rekening weerspieël nie.
                    </p>
                  )}
                </div>
              </div>
            </div>

             {/* Option 2: PayFast / Card */}
            <div className={`p-6 border-b border-gray-200 dark:border-border transition-colors ${paymentMethod === 'payfast' ? 'bg-white dark:bg-card' : 'bg-white dark:bg-card'}`}>
              <div className="flex items-start gap-4">
                 <div className="pt-1">
                  <input 
                    type="radio" 
                    name="payment" 
                    id="payment-payfast" 
                    className="w-4 h-4 accent-primary"
                    checked={paymentMethod === 'payfast'}
                    onChange={() => setPaymentMethod('payfast')}
                  />
                </div>
                <div>
                   <label htmlFor="payment-payfast" className="block text-xl font-light text-foreground dark:text-foreground mb-2 cursor-pointer">
                    PayFast / Kredietkaart
                  </label>
                  {paymentMethod === 'payfast' && (
                     <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2">
                       Betaal veilig met jou kredietkaart of tjekkaart via PayFast.
                     </p>
                  )}
                </div>
              </div>
            </div>

            {/* Option 3: Check / COD (Mocking screenshot) */}
            {/* Keeping it simple as per screenshot style "Check payments" / "Cash on delivery" but using PayFast as more realistic */}
          </div>

          <div className="mt-8 max-w-2xl">
            <div className="flex items-center space-x-2 mb-8">
              <Checkbox id="order-note" className="border-gray-300 dark:border-border data-[state=checked]:bg-foreground data-[state=checked]:text-white" />
              <Label htmlFor="order-note" className="text-lg font-light cursor-pointer text-foreground dark:text-foreground">Voeg 'n nota by jou bestelling</Label>
            </div>

            <div className="pt-4 mb-8">
              <p className="text-base text-foreground dark:text-foreground">
                Deur voort te gaan met jou aankoop stem jy in tot ons <Link to="/beleid/terme-en-voorwaardes" className="underline hover:text-primary">Terme en voorwaardes</Link> en <Link to="/beleid/privaatheidsbeleid" className="underline hover:text-primary">Privaatheidsbeleid</Link>.
              </p>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
              <Link to="/mandjie" className="flex items-center gap-2 text-foreground dark:text-foreground font-medium hover:text-primary dark:hover:text-primary">
                <ChevronDown className="rotate-90" size={20} />
                Terug na Mandjie
              </Link>
              
              <Button 
                onClick={handlePlaceOrder}
                className="w-full md:w-auto px-12 py-8 bg-brand-navy hover:bg-brand-navy-dark text-white text-base font-normal rounded-none"
              >
                Plaas Bestelling
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column - Order Summary */}
      <div className="lg:w-[400px] flex-shrink-0">
         <div className="sticky top-24 border border-gray-200 dark:border-border p-6 lg:p-8 shadow-sm dark:shadow-[var(--shadow-dark-100)] bg-white dark:bg-card">
            <h2 className="font-heading font-normal text-3xl text-brand-navy dark:text-foreground mb-6">Bestellingopsomming</h2>

            <div className="space-y-6 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {items.map((item) => (
                <div key={item.productId} className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-muted flex-shrink-0 overflow-hidden relative">
                    {item.image ? (
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                        <div className="w-full h-full bg-gray-200 dark:bg-muted" />
                    )}
                    <div className="absolute -top-2 -right-2 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                        {item.quantity}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-foreground dark:text-foreground text-sm line-clamp-2 leading-tight">{item.title}</h4>
                      <span className="font-bold text-foreground dark:text-foreground text-sm ml-2">R {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.type === 'subscription' ? 'Intekening' : 'Produk'}</p>
                    {item.variantLabel && (
                      <p className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5 flex items-center gap-1">
                        <MapPin size={9} />
                        Streek: {item.variantLabel}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 dark:border-border pt-4 mb-4">
               <button className="flex justify-between items-center w-full text-left text-sm text-foreground dark:text-foreground hover:text-primary dark:hover:text-primary">
                  <span>Voeg koepon by</span>
                  <ChevronDown size={16} />
               </button>
            </div>

            <div className="border-t border-gray-100 dark:border-border pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Subtotaal</span>
                <span className="font-bold text-foreground dark:text-foreground">R {total.toFixed(2)}</span>
              </div>
              {/* Shipping removed or shown as Free/Digital */}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Aflewering</span>
                <span className="font-bold text-foreground dark:text-foreground">GRATIS (Digitaal)</span>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-border mt-6 pt-6 flex justify-between items-end">
              <span className="text-xl font-bold text-foreground dark:text-foreground">Totaal</span>
              <span className="text-2xl font-bold text-foreground dark:text-foreground">
                  R {total.toFixed(2)}
              </span>
            </div>
         </div>
      </div>
    </div>
  );
};