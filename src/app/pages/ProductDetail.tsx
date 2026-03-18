import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { ShoppingCart, Check, ChevronLeft, Star, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { getProductBySlug, PRODUCTS } from '../data/products';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/parts/Breadcrumbs';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

/* ── rooi rose Product Detail Page ────────────────────────────────
 * Single product detail view with full information and purchase options
 * Typography: Playfair Display SC headings, Karla body
 * Layout: Product image + details + related products
 * ────────────────────────────────────────────────────────────── */

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem, items } = useCart();
  
  const product = slug ? getProductBySlug(slug) : null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes?.[0] || ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0] || ''
  );

  if (!product) {
    return <Navigate to="/winkel" replace />;
  }

  const cartProductId = `product-${product.id}-${selectedSize}-${selectedColor}`;
  const isInCart = items.some((item) => item.productId === cartProductId);

  const handleAddToCart = () => {
    addItem({
      productId: cartProductId,
      title: product.name,
      price: product.salePrice || product.price,
      type: 'product',
      quantity: 1,
      variantSlug: `${selectedSize}-${selectedColor}`,
      variantLabel: `${selectedSize}${selectedColor ? ` - ${selectedColor}` : ''}`,
    });
    toast.success(`${product.name} is by jou mandjie gevoeg!`);
  };

  // Get related products from same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  // Color mapping
  const getColorValue = (color: string) => {
    const colorMap: Record<string, string> = {
      Wit: '#ffffff',
      Swart: '#000000',
      Navy: '#142135',
      Rooi: '#e01e12',
      Grys: '#6b7280',
      Bruin: '#92400e',
      Goud: '#d97706',
      Silver: '#9ca3af',
      Naturel: '#f5f5dc',
      Deursigtig: 'transparent',
      Helder: 'transparent',
      'Rooi/Wit': '#e01e12',
      'Navy/Wit': '#142135',
      Gemeng: '#e5e7eb',
    };
    return colorMap[color] || '#e5e7eb';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background pb-24">
      <SEO
        title={`${product.name} - rooi rose Winkel`}
        description={product.description}
        keywords={`rooi rose, winkel, shop, ${product.name}, ${product.category}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-background border-b border-gray-200 dark:border-border">
        <Breadcrumbs
          items={[
            { label: 'Tuis', href: '/' },
            { label: 'Winkel', href: '/winkel' },
            { label: product.name },
          ]}
        />
      </div>

      {/* Back to Shop Link */}
      <div className="alignwide pt-6">
        <Link
          to="/winkel"
          className="inline-flex items-center gap-2 text-brand-navy dark:text-brand-navy-light hover:text-brand-red dark:hover:text-red-400 transition-colors text-sm font-medium"
        >
          <ChevronLeft size={16} />
          Terug na winkel
        </Link>
      </div>

      {/* Product Section */}
      <section className="alignwide py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative aspect-square bg-gray-50 dark:bg-card rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-border">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.salePrice && (
                <div className="absolute top-4 right-4 bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                </div>
              )}
              {product.featured && (
                <div className="absolute top-4 left-4 bg-brand-navy dark:bg-card text-white dark:text-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star size={14} className="fill-current" />
                  Gewild
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h1
              className="text-brand-navy dark:text-foreground font-normal has-brand-serif-font-family mb-3"
              style={{
                fontVariationSettings: 'var(--fvs-h1)',
                fontSize: 'var(--text-h1)',
                lineHeight: 'var(--lh-h1)',
                letterSpacing: 'var(--ls-h1)',
              }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              {product.salePrice ? (
                <>
                  <span
                    className="text-brand-red font-bold"
                    style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}
                  >
                    R{product.salePrice}
                  </span>
                  <span
                    className="text-gray-500 dark:text-gray-400 line-through"
                    style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                  >
                    R{product.price}
                  </span>
                </>
              ) : (
                <span
                  className="text-brand-navy dark:text-foreground font-bold"
                  style={{ fontSize: 'var(--text-h2)', lineHeight: 'var(--lh-h2)' }}
                >
                  R{product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p
              className="text-gray-700 dark:text-gray-300 mb-8"
              style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}
            >
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <label
                  className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 mb-3 font-bold"
                  style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                >
                  Grootte
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-brand-navy dark:border-brand-navy-light bg-brand-navy dark:bg-brand-navy-light text-white'
                          : 'border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 hover:border-brand-navy dark:hover:border-brand-navy-light'
                      }`}
                      style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <label
                  className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 mb-3 font-bold"
                  style={{ fontSize: 'var(--text-p2)', lineHeight: 'var(--lh-p2)' }}
                >
                  Kleur: <span className="font-normal text-gray-600 dark:text-gray-400">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-4 transition-all ${
                        selectedColor === color
                          ? 'border-brand-navy dark:border-brand-navy-light scale-110'
                          : 'border-gray-300 dark:border-border hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            {product.inStock ? (
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span
                  className="text-green-700 dark:text-green-400 font-medium"
                  style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}
                >
                  Op voorraad
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span
                  className="text-red-700 dark:text-red-400 font-medium"
                  style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}
                >
                  Nie op voorraad nie
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto">
              {isInCart ? (
                <Button
                  asChild
                  className="bg-brand-navy hover:bg-brand-navy-dark dark:bg-brand-navy-light dark:hover:bg-brand-navy text-white h-12 px-6 rounded-lg"
                >
                  <Link to="/mandjie" className="flex items-center gap-2">
                    <ShoppingCart size={18} />
                    Gaan na mandjie
                  </Link>
                </Button>
              ) : (
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Voeg by mandjie
                </Button>
              )}
              <Button
                asChild
                variant="outline"
                className="h-12 px-6 rounded-lg border-gray-300 dark:border-border text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Link to="/winkel">Hou aan inkopies doen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="alignwide pb-8">
        <div className="bg-brand-navy dark:bg-brand-navy-dark rounded-xl overflow-hidden shadow-lg">
          <div className="p-[32px] md:p-[48px]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-yellow-400" />
              <span
                className="uppercase tracking-widest text-yellow-400 font-bold"
                style={{ fontSize: 'var(--text-p4)', lineHeight: 'var(--lh-p4)' }}
              >
                Produk besonderhede
              </span>
            </div>
            <h3
              className="text-white font-normal font-heading mb-8"
              style={{
                fontVariationSettings: 'var(--fvs-h3)',
                fontSize: 'var(--text-h3)',
                lineHeight: 'var(--lh-h3)',
                letterSpacing: 'var(--ls-h3)',
              }}
            >
              Meer oor hierdie produk
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Check size={24} />,
                  title: 'Premium gehalte',
                  desc: 'Al ons produkte word vervaardig met hooggehalte materiale vir langdurige gebruik.',
                },
                {
                  icon: <Sparkles size={24} />,
                  title: 'Eksklusief ontwerp',
                  desc: 'Unieke rooi rose branding wat jou liefde vir Afrikaanse leefstyl wys.',
                },
                {
                  icon: <Star size={24} />,
                  title: 'Ondersteun plaaslike',
                  desc: 'Deur rooi rose swag te koop, ondersteun jy Afrikaanse joernalistiek en kultuurbehoud.',
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold" style={{ fontSize: 'var(--text-p1)', lineHeight: 'var(--lh-p1)' }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-300" style={{ fontSize: 'var(--text-p3)', lineHeight: 'var(--lh-p3)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="alignwide pb-8">
          <div className="border-t border-gray-200 dark:border-border pt-10">
            <h2
              className="text-brand-navy dark:text-foreground font-normal font-heading mb-6"
              style={{
                fontVariationSettings: 'var(--fvs-h2)',
                lineHeight: 'var(--lh-h2)',
                letterSpacing: 'var(--ls-h2)',
                fontSize: 'var(--text-h2)',
              }}
            >
              Jy sal ook hou van
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/winkel/${relatedProduct.slug}`}
                  className="group block bg-white dark:bg-card border border-gray-200 dark:border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary dark:hover:border-primary transition-[box-shadow,border-color]"
                >
                  {/* Square Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-background">
                    <img
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {relatedProduct.salePrice && (
                      <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round(((relatedProduct.price - relatedProduct.salePrice) / relatedProduct.price) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-5">
                    <h3 className="font-normal text-lg mb-2 text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      {relatedProduct.salePrice ? (
                        <>
                          <span className="text-xl font-bold text-brand-red">
                            R{relatedProduct.salePrice}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            R{relatedProduct.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-xl font-bold text-brand-navy dark:text-foreground">
                          R{relatedProduct.price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
