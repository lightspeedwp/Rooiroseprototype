import React, { useState } from 'react';
import { Link } from 'react-router';
import { PageContainer } from '../components/common/PageContainer';
import { SEO } from '../components/common/SEO';
import { PRODUCTS, PRODUCT_CATEGORIES, ProductCategory } from '../data/products';
import { ShoppingCart, Star, Filter, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { HERO_IMAGES } from '../data/heroImages';

/* ── rooi rose Shop Page ────────────────────────────────────────
 * Magazine swag merchandise with square product images
 * Typography: Playfair Display SC headings
 * Layout: Hero + category filters + product grid
 * ────────────────────────────────────────────────────────────── */

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const { addItem } = useCart();

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof PRODUCTS[0]) => {
    addItem({
      productId: `product-${product.id}`,
      title: product.name,
      price: product.salePrice || product.price,
      type: 'product',
      quantity: 1
    });
    toast.success(`${product.name} is by jou mandjie gevoeg!`);
  };

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <SEO
        title="Winkel - rooi rose Swag"
        description="Koop rooi rose handelsmerk-produkte - klere, drinkgoed, tasse, en meer. Eksklusiewe swag vir rooi rose-lesers."
        keywords="winkel, shop, rooi rose swag, merchandise, klere, t-hemde, hoodies, koffiebekers"
      />
      <PageContainer breadcrumbs={[{ label: 'Winkel' }]} noPadding />

      {/* Full-Width Editorial Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="rooi rose winkel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-4 has-brand-serif-font-family uppercase tracking-wider" style={{ letterSpacing: '0.15em' }}>
              rooi rose winkel
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Eksklusiewe rooi rose handelsmerk-produkte. Wys jou liefde vir Afrikaanse leefstyl met ons premium swag-versamelung.
            </p>
          </div>
        </div>
      </div>

      <div className="alignwide pb-16">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className="rounded-full"
          >
            Alles
          </Button>
          {PRODUCT_CATEGORIES.map(cat => (
            <Button
              key={cat.slug}
              variant={selectedCategory === cat.slug ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.slug as ProductCategory)}
              className="rounded-full"
            >
              {cat.icon} {cat.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group bg-white dark:bg-card rounded-lg overflow-hidden border border-gray-100 dark:border-border hover:shadow-lg transition-shadow"
            >
              {/* Square Product Image (1:1) */}
              <Link to={`/winkel/${product.slug}`} className="block relative aspect-square overflow-hidden bg-gray-50 dark:bg-background">
                <img 
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.salePrice && (
                  <div className="absolute top-3 right-3 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                  </div>
                )}
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-brand-navy dark:bg-card text-white dark:text-foreground px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={14} className="fill-current" />
                    Gewild
                  </div>
                )}
              </Link>

              {/* Product Info */}
              <div className="p-5">
                <Link to={`/winkel/${product.slug}`}>
                  <h3 className="font-normal text-lg mb-2 text-brand-navy dark:text-foreground group-hover:text-brand-red dark:group-hover:text-red-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  {product.salePrice ? (
                    <>
                      <span className="text-2xl font-bold text-brand-red">
                        R{product.salePrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        R{product.price}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-brand-navy dark:text-foreground">
                      R{product.price}
                    </span>
                  )}
                </div>

                {/* Colors */}
                {product.colors && product.colors.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {product.colors.map(color => (
                      <div 
                        key={color}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"
                        style={{
                          backgroundColor: 
                            color === 'Wit' ? '#ffffff' :
                            color === 'Swart' ? '#000000' :
                            color === 'Navy' ? '#142135' :
                            color === 'Rooi' ? '#e01e12' :
                            color === 'Grys' ? '#6b7280' :
                            color === 'Bruin' ? '#92400e' :
                            color === 'Goud' ? '#d97706' :
                            color === 'Silver' ? '#9ca3af' :
                            '#e5e7eb'
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                )}

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
                >
                  <ShoppingCart size={18} />
                  {product.inStock ? 'Voeg by mandjie' : 'Nie op voorraad'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <h3 className="text-xl font-bold text-gray-600 dark:text-gray-400 mb-2">
              Geen produkte gevind nie
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Probeer 'n ander kategorie.
            </p>
            <Button onClick={() => setSelectedCategory('all')}>
              Wys alles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
