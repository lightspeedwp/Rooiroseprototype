/**
 * rooi rose Shop Products Data
 * Swag merchandise with square product images
 */

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  category: ProductCategory;
  inStock: boolean;
  featured?: boolean;
  sizes?: string[];
  colors?: string[];
}

export type ProductCategory = 'klere' | 'drinkgoed' | 'tasse' | 'leesstof' | 'aksessories';

export const PRODUCT_CATEGORIES = [
  { slug: 'klere', name: 'Klere', icon: '👕' },
  { slug: 'drinkgoed', name: 'Drinkgoed', icon: '☕' },
  { slug: 'tasse', name: 'Tasse & Sakke', icon: '👜' },
  { slug: 'leesstof', name: 'Leesstof', icon: '📚' },
  { slug: 'aksessories', name: 'Aksessories', icon: '✨' },
];

export const PRODUCTS: Product[] = [
  // Klere
  {
    id: 1,
    slug: 'rooi-rose-t-hemp-wit',
    name: 'rooi rose T-hemp (Wit)',
    description: 'Premium katoen T-hemp met die rooi rose logo in rooi. Perfek vir casual daaglikse drag.',
    price: 250,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    category: 'klere',
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Wit', 'Swart', 'Navy']
  },
  {
    id: 2,
    slug: 'rooi-rose-hoodie',
    name: 'rooi rose Hoodie',
    description: 'Warm en stylvolle hoodie met geborduurde rooi rose logo. 80% katoen, 20% poliëster.',
    price: 550,
    salePrice: 450,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7',
    category: 'klere',
    inStock: true,
    featured: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Grys', 'Swart']
  },
  {
    id: 3,
    slug: 'rooi-rose-cap',
    name: 'rooi rose Cap',
    description: 'Klassieke baseball cap met verstelbare band en geborduurde logo. Een grootte pas almal.',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b',
    category: 'klere',
    inStock: true,
    sizes: ['One Size'],
    colors: ['Rooi', 'Navy', 'Wit']
  },
  {
    id: 4,
    slug: 'rooi-rose-polo-hemp',
    name: 'rooi rose Polo Hemp',
    description: 'Slim-fit polo hemp met klein rooi rose logo op die bors. Ideaal vir smart-casual geleenthede.',
    price: 350,
    imageUrl: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99',
    category: 'klere',
    inStock: true,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Wit', 'Rooi']
  },

  // Drinkgoed
  {
    id: 5,
    slug: 'rooi-rose-koffiebekerkeramiek',
    name: 'rooi rose Koffiebeker (Keramiek)',
    description: 'Klassieke keramiek koffiebeker met die rooi rose logo. 350ml kapasiteit.',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
    category: 'drinkgoed',
    inStock: true,
    featured: true,
    colors: ['Wit', 'Rooi', 'Navy']
  },
  {
    id: 6,
    slug: 'rooi-rose-thermos-beker',
    name: 'rooi rose Thermos Beker',
    description: 'Geïsoleerde RVS thermos beker. Hou drankies warm vir 6 ure, koud vir 12 ure. 500ml.',
    price: 280,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'drinkgoed',
    inStock: true,
    featured: true,
    colors: ['Rooi', 'Swart', 'Silver']
  },
  {
    id: 7,
    slug: 'rooi-rose-waterbottel',
    name: 'rooi rose Waterbottel',
    description: 'BPA-vrye sportbottel met rooi rose branding. 750ml. Perfek vir gimnasium of oefening.',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
    category: 'drinkgoed',
    inStock: true,
    colors: ['Rooi', 'Deursigtig']
  },
  {
    id: 8,
    slug: 'rooi-rose-wynglas-stel',
    name: 'rooi rose Wynglas Stel (2)',
    description: 'Premium wynglas stel met gegraveerde rooi rose logo. Perfek geskenk vir wynliefhebbers.',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    category: 'drinkgoed',
    inStock: true,
    colors: ['Helder']
  },

  // Tasse & Sakke
  {
    id: 9,
    slug: 'rooi-rose-tote-bag',
    name: 'rooi rose Tote Bag',
    description: 'Ekologiese katoen tote bag met rooi rose logo. Perfek vir inkopies of daggebruik.',
    price: 180,
    imageUrl: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    category: 'tasse',
    inStock: true,
    featured: true,
    colors: ['Naturel', 'Swart', 'Rooi']
  },
  {
    id: 10,
    slug: 'rooi-rose-rugtas',
    name: 'rooi rose Rugtas',
    description: 'Stylvolle rugtas met gepolsterde skouerbande en laptop-kompartement (15"). Waterbestande materiaal.',
    price: 650,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    category: 'tasse',
    inStock: true,
    colors: ['Navy', 'Swart', 'Grys']
  },
  {
    id: 11,
    slug: 'rooi-rose-toilettas',
    name: 'rooi rose Toilettas',
    description: 'Kompakte toilettas met waterbestande voering. Ideaal vir reis.',
    price: 220,
    imageUrl: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d',
    category: 'tasse',
    inStock: true,
    colors: ['Navy', 'Rooi']
  },

  // Leesstof
  {
    id: 12,
    slug: 'rooi-rose-notaboek-leer',
    name: 'rooi rose Notaboek (Leer)',
    description: 'Premium leer-gebonde notaboek met rooi rose logo. A5 formaat, 200 bladsye.',
    price: 380,
    imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57',
    category: 'leesstof',
    inStock: true,
    featured: true,
    colors: ['Bruin', 'Swart', 'Navy']
  },
  {
    id: 13,
    slug: 'rooi-rose-pen-stel',
    name: 'rooi rose Pen Stel',
    description: 'Elegante metaal balpen en vulpen stel in geskenk-boks met rooi rose gravering.',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1586943759066-0b82da478374',
    category: 'leesstof',
    inStock: true,
    colors: ['Silver', 'Goud', 'Rooi']
  },
  {
    id: 14,
    slug: 'rooi-rose-leeswyser',
    name: 'rooi rose Leeswyser Stel',
    description: 'Metaal leeswyser stel (3 stuks) met rooi rose-ontwerp. Perfek vir boekliefhebbers.',
    price: 95,
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73',
    category: 'leesstof',
    inStock: true,
    colors: ['Goud', 'Silver', 'Rooi']
  },

  // Aksessories
  {
    id: 15,
    slug: 'rooi-rose-sleutelhouer',
    name: 'rooi rose Sleutelhouer',
    description: 'Premium leer sleutelhouer met metaal rooi rose logo. Duursaam en stylvol.',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1591561954555-607968d99d57',
    category: 'aksessories',
    inStock: true,
    colors: ['Swart', 'Bruin', 'Navy']
  },
  {
    id: 16,
    slug: 'rooi-rose-muismat',
    name: 'rooi rose Muismat',
    description: 'Premium muismat met anti-gly basis en rooi rose-ontwerp. 250mm x 200mm.',
    price: 85,
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7',
    category: 'aksessories',
    inStock: true,
    colors: ['Swart', 'Navy']
  },
  {
    id: 17,
    slug: 'rooi-rose-enamel-pin',
    name: 'rooi rose Enamel Pin',
    description: 'Gestyleerde enamel pin met rooi rose logo. Voeg flair by enige jas of tas.',
    price: 65,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3',
    category: 'aksessories',
    inStock: true,
    colors: ['Rooi/Wit', 'Navy/Wit']
  },
  {
    id: 18,
    slug: 'rooi-rose-fridge-magnet',
    name: 'rooi rose Yskasmagnet Stel',
    description: 'Stel van 4 premie yskasmagneте met rooi rose logo en Afrikaanse spreuke.',
    price: 75,
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3',
    category: 'aksessories',
    inStock: true,
    colors: ['Gemeng']
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured);

export const getProductsByCategory = (category: ProductCategory) => {
  return PRODUCTS.filter(p => p.category === category);
};

export const getProductBySlug = (slug: string) => {
  return PRODUCTS.find(p => p.slug === slug);
};
