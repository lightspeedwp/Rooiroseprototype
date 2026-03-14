import React, { useState } from 'react';
import imgImageVisa from "figma:asset/db9cbf487da66aa5710e8224c4c9e167912aa34f.png";
import imgImageMastercard from "figma:asset/6abb5f49639c1cdb9b36421f5ddf7e534a863efd.png";
import { PageContainer } from '../components/common/PageContainer';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Trash2, Plus, Minus, ChevronDown, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { toast } from 'sonner';

/* ── rooi rose Magazine Cart Page ──────────────────────────────
 * Editorial design: WooCommerce shopping cart
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Cart items + sidebar totals
 * ────────────────────────────────────────────────────────────── */

export const CartPage = () => {
  const { items, removeItem, updateQuantity, total } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    toast.success("Koepon kode is toegepas!");
    setCouponCode('');
  };

  const handleCheckout = () => {
    navigate('/betaal');
  };

  const faqs = [
    {
      question: "Hoe gebruik ek 'n promosiekode?",
      answer: "Voer jou promosiekode in die 'Voeg koepon by' veld aan die regterkant in en druk Enter of klik die pyltjie. Die afslag sal outomaties toegepas word op jou totaal."
    },
    {
      question: "Wat as ek my bestelling wil verander?",
      answer: "Jy kan items verwyder of hoeveelhede aanpas direk in jou mandjie. As jy reeds betaal het, kontak asseblief ons kliëntediens by <a href='mailto:advertensies@diepapier.co.za' class='text-primary hover:underline'>advertensies@diepapier.co.za</a>."
    },
    {
      question: "Is aflewering ingesluit?",
      answer: "Vir E-uitgawes is aflewering onmiddellik en digitaal. Vir fisiese produkte word afleweringskoste bereken by die betaalpunt gebaseer op jou adres."
    }
  ];

  const h1Style = {
    fontVariationSettings: "var(--fvs-h1)",
    lineHeight: 'var(--lh-h1)',
    letterSpacing: 'var(--ls-h1)',
  };

  const h2Style = {
    fontVariationSettings: "var(--fvs-h2)",
    lineHeight: 'var(--lh-h2)',
    letterSpacing: 'var(--ls-h2)',
  };

  if (items.length === 0) {
    return (
      <div className="bg-white dark:bg-background min-h-screen">
        <PageContainer breadcrumbs={[{ label: 'Mandjie' }]}>
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-32 h-32 bg-gray-100 dark:bg-card rounded-full flex items-center justify-center mb-8 border-2 border-gray-200 dark:border-border">
              <ShoppingCart className="w-16 h-16 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
            </div>
            <h1
              className="text-4xl font-normal text-brand-navy dark:text-foreground mb-4 has-brand-serif-font-family"
              style={h1Style}
            >Jou mandjie is leeg</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              Dit lyk of jy nog niks bygevoeg het nie. Blaai deur ons e-uitgawes of intekenopsies om te begin.
            </p>
            <Link to="/e-uitgawes">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold h-12 px-8 text-base">
                Blaai deur E-uitgawes
              </Button>
            </Link>
          </div>
        </PageContainer>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-background min-h-screen pb-20">
      <PageContainer breadcrumbs={[{ label: 'Mandjie' }]}>
        <h1
          className="text-4xl md:text-5xl font-normal text-brand-navy dark:text-foreground my-8 md:my-12 has-brand-serif-font-family"
          style={h1Style}
        >Mandjie</h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items Column */}
          <div className="flex-1">
            {/* Header Row (Hidden on mobile) */}
            <div className="hidden md:flex justify-between border-b-2 border-gray-200 dark:border-border pb-4 mb-8">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 tracking-widest uppercase">Produk</span>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 tracking-widest uppercase">Totaal</span>
            </div>

            <div className="space-y-8 md:space-y-10">
              {items.map((item) => (
                <div key={item.productId} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 dark:border-border last:border-0">
                  {/* Image */}
                  <div className="w-full md:w-36 h-36 bg-gray-100 dark:bg-card rounded-xl overflow-hidden flex-shrink-0 border border-gray-200 dark:border-border">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <ShoppingCart size={32} strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between md:block mb-3">
                        <h3 className="text-xl font-normal text-brand-navy dark:text-foreground mb-2 has-brand-serif-font-family leading-tight">
                          {item.title}
                        </h3>
                        {/* Mobile Price */}
                        <div className="md:hidden font-bold text-lg text-brand-navy dark:text-foreground">
                          R {(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-medium text-gray-700 dark:text-gray-300">R {item.price.toFixed(2)}</span>
                        <span className="text-gray-400 dark:text-gray-500 text-sm">per item</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-6 flex-wrap">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide ${item.type === 'subscription' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}>
                          {item.type === 'subscription' ? 'Intekening' : 'Eenmalig'}
                        </span>
                        {item.variantLabel && (
                          <span className="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                            Streek: {item.variantLabel}
                          </span>
                        )}
                      </div>

                      {/* Quantity & Remove Row */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border-2 border-gray-300 dark:border-input rounded-lg overflow-hidden h-11 w-32 bg-white dark:bg-card">
                          <button 
                            onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                            className="px-3 h-full text-gray-600 dark:text-gray-400 hover:text-brand-red hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                          >
                            <Minus size={16} strokeWidth={2.5} />
                          </button>
                          <input 
                            type="text" 
                            value={item.quantity}
                            readOnly
                            className="flex-1 w-full text-center border-none focus:ring-0 p-0 text-sm font-bold text-brand-navy dark:text-foreground bg-transparent"
                          />
                          <button 
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="px-3 h-full text-gray-600 dark:text-gray-400 hover:text-brand-red hover:bg-gray-50 dark:hover:bg-muted transition-colors"
                          >
                            <Plus size={16} strokeWidth={2.5} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => removeItem(item.productId)}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors flex items-center gap-2 font-medium"
                        >
                          <Trash2 size={14} />
                          Verwyder
                        </button>
                      </div>
                    </div>

                    {/* Desktop Total */}
                    <div className="hidden md:block text-right">
                      <div className="font-bold text-2xl text-brand-navy dark:text-foreground has-brand-serif-font-family">
                        R {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Totals Column */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <h2 className="text-sm font-bold text-gray-600 dark:text-gray-400 tracking-widest uppercase mb-6 has-brand-serif-font-family" style={{ fontVariationSettings: "var(--fvs-h2)", lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)' }}>
              Mandjie Totaal
            </h2>
            
            <div className="bg-gray-50 dark:bg-card rounded-xl border border-gray-200 dark:border-border p-8 shadow-md dark:shadow-[var(--shadow-dark-300)]">
              {/* Coupon */}
              <div className="border-b-2 border-gray-200 dark:border-border pb-6 mb-6">
                <form onSubmit={handleApplyCoupon} className="relative">
                  <Input 
                    type="text" 
                    placeholder="Voeg koepon by" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="bg-transparent border-none px-0 text-lg placeholder:text-brand-navy dark:placeholder:text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none dark:text-foreground"
                  />
                  <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary">
                    <ChevronDown size={20} />
                  </button>
                </form>
              </div>

              {/* Subtotals */}
              <div className="space-y-4 mb-6 border-b border-gray-200 dark:border-border pb-6">
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                  <span>Subtotaal</span>
                  <span className="font-medium text-brand-navy dark:text-foreground">R {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-400">
                  <span>Aflewering</span>
                  <span className="font-medium text-brand-navy dark:text-foreground">GRATIS</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-start mb-8">
                <span className="text-xl font-bold text-brand-navy dark:text-foreground">Beraamde totaal</span>
                <span className="text-2xl font-bold text-brand-navy dark:text-foreground">R {total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Button 
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-7 text-lg rounded-none"
              >
                Gaan na Betaling
              </Button>

              {/* Payment Methods */}
              <div className="mt-8 flex flex-col items-center border-t border-gray-200 dark:border-border pt-6">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">Veilige betaling via</p>
                <div className="flex items-center justify-center gap-4">
                  <img src={imgImageVisa} alt="Visa" className="h-6 object-contain opacity-60" loading="lazy" decoding="async" />
                  <img src={imgImageMastercard} alt="Mastercard" className="h-6 object-contain opacity-60" loading="lazy" decoding="async" />
                  <span className="font-bold italic text-gray-500 dark:text-gray-400 text-sm">PayFast</span>
                  <span className="font-bold text-blue-500 text-sm">SnapScan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 md:mt-32">
          <h2
            className="text-3xl font-normal text-brand-navy dark:text-foreground text-center mb-12 font-heading"
            style={h2Style}
          >
            Algemene vrae
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-border rounded-lg mb-4 px-6 bg-white dark:bg-card shadow-sm dark:shadow-[var(--shadow-dark-100)]">
                  <AccordionTrigger className="text-lg font-heading font-normal text-brand-navy dark:text-foreground hover:no-underline hover:text-primary dark:hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 text-base pb-6 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </PageContainer>
    </div>
  );
};