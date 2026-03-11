import React from 'react';
import {
  Type, Image, Columns3, LayoutGrid, Search as SearchIcon,
  List, Quote, Table2, Minus, ChevronRight,
  ShoppingCart, CreditCard, Star, Tag, Package,
  Menu, MapPin, Share2, Heart, Mail,
  Megaphone, Play, FileText, MessageSquare, Users,
  Newspaper, Zap, BarChart3, Globe, Shield,
  Layers, BoxSelect, ArrowRight, Check
} from 'lucide-react';
import type { BlockEntry } from '../../data/blockBrowserData';
import { SocialShare } from '../common/SocialShare';

// ─── Visual preview renderers by category/block ────────────────────────────

const PreviewShell: React.FC<{
  children: React.ReactNode;
  bg?: string;
  label?: string;
  interactive?: boolean;
}> = ({ children, bg = 'bg-white/[0.03]', label, interactive = false }) => (
  <div className={`relative rounded-lg ${bg} border ${interactive ? 'border-neutral-200 dark:border-white/10' : 'border-white/[0.06]'} p-3 overflow-hidden`}>
    {label && (
      <div className="absolute top-1.5 right-2 text-[9px] text-white/20 uppercase tracking-widest">
        {label}
      </div>
    )}
    {children}
  </div>
);

// Faux text lines
const TextLine: React.FC<{ w?: string; h?: string; color?: string }> = ({
  w = 'w-full',
  h = 'h-1.5',
  color = 'bg-white/10'
}) => <div className={`${w} ${h} ${color} rounded-full`} />;

const TextBlock: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-1.5">
    {Array.from({ length: lines }).map((_, i) => (
      <TextLine key={i} w={i === lines - 1 ? 'w-3/4' : 'w-full'} />
    ))}
  </div>
);

// Faux heading
const HeadingLine: React.FC<{ w?: string }> = ({ w = 'w-2/3' }) => (
  <div className={`${w} h-2.5 bg-white/15 rounded-full`} />
);

// ─── Category-based preview components ─────────────────────────────────────

const LayoutPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('column') && !block.id.includes('columns')) {
    return (
      <PreviewShell label="column">
        <div className="border border-dashed border-white/15 rounded p-2 min-h-[48px]">
          <TextBlock lines={2} />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('columns')) {
    return (
      <PreviewShell label="columns">
        <div className="flex gap-2">
          <div className="flex-1 border border-dashed border-white/15 rounded p-2">
            <TextBlock lines={2} />
          </div>
          <div className="flex-1 border border-dashed border-white/15 rounded p-2">
            <TextBlock lines={2} />
          </div>
          <div className="flex-1 border border-dashed border-white/15 rounded p-2 hidden sm:block">
            <TextBlock lines={2} />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('group')) {
    return (
      <PreviewShell label="group">
        <div className="border border-dashed border-violet-500/30 rounded p-3 space-y-2">
          <HeadingLine w="w-1/2" />
          <TextBlock lines={2} />
          <div className="flex gap-2 pt-1">
            <div className="px-3 py-1 bg-white/10 rounded text-[10px] text-white/40">Block</div>
            <div className="px-3 py-1 bg-white/10 rounded text-[10px] text-white/40">Block</div>
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('separator')) {
    return (
      <PreviewShell label="separator">
        <div className="py-3">
          <div className="border-t border-white/20" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('buttons')) {
    return (
      <PreviewShell label="buttons">
        <div className="flex gap-2">
          <div className="px-4 py-1.5 bg-[#D70025] rounded text-[10px] text-white">Primary</div>
          <div className="px-4 py-1.5 border border-white/20 rounded text-[10px] text-white/60">Secondary</div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="layout">
      <div className="flex items-center justify-center gap-2 py-2">
        <Layers size={16} className="text-white/20" />
        <span className="text-[10px] text-white/30">Container Block</span>
      </div>
    </PreviewShell>
  );
};

const TextPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('heading')) {
    return (
      <PreviewShell label="heading">
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-white/20 rounded" />
          <div className="h-3 w-1/2 bg-white/12 rounded" />
          <div className="h-2.5 w-2/5 bg-white/8 rounded" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('paragraph')) {
    return (
      <PreviewShell label="paragraph">
        <TextBlock lines={4} />
      </PreviewShell>
    );
  }
  if (block.id.includes('list')) {
    return (
      <PreviewShell label="list">
        <div className="space-y-1.5">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
              <TextLine w={i === 3 ? 'w-2/3' : 'w-full'} />
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('quote') || block.id.includes('pullquote')) {
    return (
      <PreviewShell label={block.id.includes('pull') ? 'pullquote' : 'quote'}>
        <div className="border-l-2 border-white/20 pl-3 py-1 space-y-1.5">
          <TextLine w="w-full" color="bg-white/15" />
          <TextLine w="w-4/5" color="bg-white/15" />
          <div className="pt-1">
            <TextLine w="w-1/3" h="h-1" color="bg-white/8" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('table')) {
    return (
      <PreviewShell label="table">
        <div className="space-y-0">
          <div className="flex gap-1 pb-1 border-b border-white/10">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex-1 h-2 bg-white/15 rounded-sm" />
            ))}
          </div>
          {[1, 2].map(row => (
            <div key={row} className="flex gap-1 py-1 border-b border-white/5">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex-1 h-1.5 bg-white/8 rounded-sm" />
              ))}
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('button') && !block.id.includes('buttons')) {
    return (
      <PreviewShell label="button">
        <div className="space-y-2">
          <div className="px-5 py-2 bg-[#D70025] rounded text-[10px] text-white inline-block">Button Label</div>
          <div className="flex gap-2">
            <div className="px-3 py-1 border border-white/20 rounded text-[9px] text-white/40">outline</div>
            <div className="px-3 py-1 text-[9px] text-white/40 underline">text-link</div>
            <div className="px-3 py-1 text-[9px] text-white/30">ghost</div>
          </div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="text">
      <div className="flex items-center gap-2">
        <Type size={14} className="text-white/20" />
        <TextBlock lines={2} />
      </div>
    </PreviewShell>
  );
};

const MediaPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('cover')) {
    return (
      <PreviewShell label="cover">
        <div className="relative bg-gradient-to-b from-[#142135]/80 to-[#142135] rounded p-4 min-h-[64px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%3E%3Crect%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%20width%3D%2280%22%20height%3D%2280%22%2F%3E%3C%2Fsvg%3E')] opacity-30 rounded" />
          <HeadingLine w="w-3/5" />
          <div className="mt-1.5">
            <TextLine w="w-2/5" h="h-1" color="bg-white/8" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="image">
      <div className="bg-white/[0.04] rounded border border-dashed border-white/10 aspect-video flex items-center justify-center">
        <Image size={20} className="text-white/15" />
      </div>
    </PreviewShell>
  );
};

const WidgetPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('navigation')) {
    return (
      <PreviewShell label="navigation">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white/10 rounded" />
          <div className="flex gap-3">
            {['Nuus', 'Sport', 'Sake', 'Leefstyl'].map(label => (
              <span key={label} className="text-[9px] text-white/40">{label}</span>
            ))}
          </div>
          <div className="ml-auto">
            <SearchIcon size={12} className="text-white/20" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('search')) {
    return (
      <PreviewShell label="search">
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded px-3 py-1.5">
          <SearchIcon size={12} className="text-white/20" />
          <span className="text-[10px] text-white/20">Soek...</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('site-title')) {
    return (
      <PreviewShell label="site-title">
        <div className="text-sm text-white/40" style={{ fontFamily: 'serif' }}>Die Papier</div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="widget">
      <div className="flex items-center gap-2 py-1">
        <BoxSelect size={14} className="text-white/20" />
        <TextLine w="w-2/3" />
      </div>
    </PreviewShell>
  );
};

const QueryPreview: React.FC<{ block: BlockEntry }> = ({ block }) => (
  <PreviewShell label="query">
    <div className="space-y-2">
      {[1, 2, 3].map(i => (
        <div key={i} className="flex gap-2 items-start">
          <div className="w-10 h-7 bg-white/[0.06] rounded shrink-0" />
          <div className="flex-1 space-y-1">
            <TextLine w={i === 2 ? 'w-4/5' : 'w-full'} h="h-1.5" color="bg-white/12" />
            <TextLine w="w-1/3" h="h-1" color="bg-white/6" />
          </div>
        </div>
      ))}
    </div>
  </PreviewShell>
);

const ProductPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('image')) {
    return (
      <PreviewShell label="product-image">
        <div className="bg-white/[0.04] rounded aspect-square flex items-center justify-center max-w-[80px]">
          <Package size={20} className="text-white/15" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('price')) {
    return (
      <PreviewShell label="product-price">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-emerald-400/70">R199.00</span>
          <span className="text-[10px] text-white/30 line-through">R299.00</span>
          <span className="text-[9px] text-[#D70025]/70 ml-1">-33%</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('rating')) {
    return (
      <PreviewShell label="product-rating">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} size={12} className={i <= 4 ? 'text-amber-400/70 fill-amber-400/70' : 'text-white/15'} />
          ))}
          <span className="text-[9px] text-white/30 ml-1">(12)</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('sale-badge')) {
    return (
      <PreviewShell label="sale-badge">
        <div className="inline-block px-2 py-0.5 bg-[#D70025] rounded text-[10px] text-white">Uitverkoping!</div>
      </PreviewShell>
    );
  }
  if (block.id.includes('title')) {
    return (
      <PreviewShell label="product-title">
        <HeadingLine w="w-3/4" />
      </PreviewShell>
    );
  }
  if (block.id.includes('button')) {
    return (
      <PreviewShell label="add-to-cart">
        <div className="px-4 py-1.5 bg-[#D70025] rounded text-[10px] text-white inline-flex items-center gap-1.5">
          <ShoppingCart size={10} />
          Voeg by mandjie
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('summary')) {
    return (
      <PreviewShell label="product-summary">
        <TextBlock lines={3} />
      </PreviewShell>
    );
  }
  if (block.id.includes('results-count')) {
    return (
      <PreviewShell label="results-count">
        <span className="text-[10px] text-white/40">Wys 1-12 van 48 resultate</span>
      </PreviewShell>
    );
  }
  if (block.id.includes('reviews')) {
    return (
      <PreviewShell label="reviews">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={10} className={i <= 5 ? 'text-amber-400/60 fill-amber-400/60' : 'text-white/10'} />
            ))}
          </div>
          <TextBlock lines={2} />
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="product">
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 bg-white/[0.06] rounded flex items-center justify-center shrink-0">
          <Package size={14} className="text-white/15" />
        </div>
        <div className="flex-1 space-y-1">
          <HeadingLine w="w-3/5" />
          <TextLine w="w-1/3" h="h-1" color="bg-emerald-400/20" />
        </div>
      </div>
    </PreviewShell>
  );
};

const CartCheckoutPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('cart')) {
    return (
      <PreviewShell label="cart">
        <div className="space-y-2">
          {[1, 2].map(i => (
            <div key={i} className="flex items-center gap-2 py-1 border-b border-white/5">
              <div className="w-7 h-7 bg-white/[0.06] rounded shrink-0" />
              <div className="flex-1">
                <TextLine w="w-2/3" h="h-1.5" />
              </div>
              <span className="text-[9px] text-white/30">R99</span>
            </div>
          ))}
          <div className="flex justify-between pt-1">
            <span className="text-[9px] text-white/40">Totaal</span>
            <span className="text-[10px] text-white/60">R198.00</span>
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('checkout')) {
    return (
      <PreviewShell label="checkout">
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1.5">
            <div className="space-y-0.5">
              <TextLine w="w-1/2" h="h-1" color="bg-white/6" />
              <div className="h-4 bg-white/5 border border-white/10 rounded" />
            </div>
            <div className="space-y-0.5">
              <TextLine w="w-1/2" h="h-1" color="bg-white/6" />
              <div className="h-4 bg-white/5 border border-white/10 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <CreditCard size={12} className="text-white/20" />
            <TextLine w="w-1/2" h="h-1" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('mini-cart')) {
    return (
      <PreviewShell label="mini-cart">
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <ShoppingCart size={14} className="text-white/40" />
            <div className="absolute -top-1 -right-1.5 w-3 h-3 bg-[#D70025] rounded-full flex items-center justify-center">
              <span className="text-[7px] text-white">2</span>
            </div>
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('order-confirmation')) {
    return (
      <PreviewShell label="order-confirmation">
        <div className="text-center space-y-1.5 py-1">
          <Check size={16} className="text-emerald-400/60 mx-auto" />
          <TextLine w="w-1/2" h="h-1.5" color="bg-emerald-400/20" />
          <TextLine w="w-1/3" h="h-1" color="bg-white/8" />
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="commerce">
      <div className="flex items-center gap-2 py-1">
        <ShoppingCart size={14} className="text-white/20" />
        <TextLine w="w-2/3" />
      </div>
    </PreviewShell>
  );
};

const CommercePreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('breadcrumbs')) {
    return (
      <PreviewShell label="breadcrumbs">
        <div className="flex items-center gap-1.5">
          {['Tuis', 'Winkel', 'Produkte'].map((label, i) => (
            <React.Fragment key={label}>
              {i > 0 && <ChevronRight size={8} className="text-white/15" />}
              <span className="text-[9px] text-white/30">{label}</span>
            </React.Fragment>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('customer-account')) {
    return (
      <PreviewShell label="customer-account">
        <div className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center">
          <Users size={10} className="text-white/30" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('accordion')) {
    return (
      <PreviewShell label="accordion">
        <div className="space-y-1">
          {['Beskrywing', 'Spesifikasies', 'Resensies'].map((label, i) => (
            <div key={label} className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-[9px] text-white/30">{label}</span>
              <ChevronRight size={8} className={`text-white/15 ${i === 0 ? 'rotate-90' : ''}`} />
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="commerce">
      <div className="flex items-center gap-2">
        <ShoppingCart size={14} className="text-amber-400/30" />
        <TextLine w="w-2/3" />
      </div>
    </PreviewShell>
  );
};

const AdsPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('leaderboard')) {
    return (
      <PreviewShell label="728x90">
        <div className="bg-white/[0.03] border border-dashed border-white/10 rounded h-8 flex items-center justify-center">
          <span className="text-[8px] text-white/15 uppercase tracking-wider">Leaderboard 728x90</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('mrec')) {
    return (
      <PreviewShell label="300x250">
        <div className="bg-white/[0.03] border border-dashed border-white/10 rounded w-24 h-20 flex items-center justify-center mx-auto">
          <span className="text-[8px] text-white/15 uppercase tracking-wider">MREC</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('half-page')) {
    return (
      <PreviewShell label="300x600">
        <div className="bg-white/[0.03] border border-dashed border-white/10 rounded w-16 h-24 flex items-center justify-center mx-auto">
          <span className="text-[7px] text-white/15 uppercase tracking-wider text-center">Half<br/>Page</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('sticky-footer')) {
    return (
      <PreviewShell label="sticky-footer">
        <div className="bg-white/[0.03] border-t border-white/10 rounded h-6 flex items-center justify-center">
          <span className="text-[8px] text-white/15 uppercase tracking-wider">Sticky Footer Ad</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('takeover')) {
    return (
      <PreviewShell label="takeover">
        <div className="flex gap-1">
          <div className="w-3 h-16 bg-white/[0.04] border border-dashed border-white/8 rounded" />
          <div className="flex-1 h-16 bg-white/[0.02] border border-white/5 rounded flex items-center justify-center">
            <span className="text-[8px] text-white/10">Content</span>
          </div>
          <div className="w-3 h-16 bg-white/[0.04] border border-dashed border-white/8 rounded" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('in-feed')) {
    return (
      <PreviewShell label="in-feed">
        <div className="space-y-1.5">
          <TextLine />
          <div className="bg-white/[0.03] border border-dashed border-white/10 rounded h-6 flex items-center justify-center">
            <span className="text-[7px] text-white/15 uppercase tracking-wider">In-Feed Ad</span>
          </div>
          <TextLine />
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="ad">
      <div className="bg-white/[0.03] border border-dashed border-white/10 rounded h-10 flex items-center justify-center">
        <Megaphone size={12} className="text-white/10 mr-1.5" />
        <span className="text-[8px] text-white/15 uppercase tracking-wider">Ad Placement</span>
      </div>
    </PreviewShell>
  );
};

const HomePreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('hero') || block.id.includes('feature')) {
    return (
      <PreviewShell label="hero">
        <div className="flex gap-2">
          <div className="flex-[2] bg-gradient-to-b from-[#142135]/60 to-[#142135]/30 rounded p-2 min-h-[56px] flex flex-col justify-end">
            <HeadingLine w="w-4/5" />
            <div className="mt-1"><TextLine w="w-1/2" h="h-1" color="bg-white/6" /></div>
          </div>
          <div className="flex-1 space-y-1.5 hidden sm:block">
            <div className="bg-white/[0.04] rounded p-1.5 h-[26px]"><TextLine w="w-full" h="h-1" /></div>
            <div className="bg-white/[0.04] rounded p-1.5 h-[26px]"><TextLine w="w-full" h="h-1" /></div>
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('breaking')) {
    return (
      <PreviewShell bg="bg-[#142135]/40" label="breaking">
        <div className="flex items-center gap-2">
          <Zap size={10} className="text-[#D70025]" />
          <span className="text-[9px] text-[#D70025]">NUUSFLITS</span>
          <TextLine w="w-2/3" h="h-1" color="bg-white/10" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('category-section')) {
    return (
      <PreviewShell label="category-section">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-[#D70025]/50" />
            <span className="text-[9px] text-white/40 uppercase">Nuus</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-1">
                <div className="h-8 bg-white/[0.04] rounded" />
                <TextLine w="w-full" h="h-1" />
              </div>
            ))}
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('news-card')) {
    return (
      <PreviewShell label="news-card">
        <div className="flex gap-2">
          <div className="w-14 h-10 bg-white/[0.06] rounded shrink-0" />
          <div className="flex-1 space-y-1">
            <TextLine w="w-full" h="h-1.5" color="bg-white/12" />
            <TextLine w="w-3/4" h="h-1" color="bg-white/8" />
            <TextLine w="w-1/4" h="h-1" color="bg-white/5" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('poll')) {
    return (
      <PreviewShell label="poll">
        <div className="space-y-1.5">
          <TextLine w="w-3/4" h="h-1.5" color="bg-white/12" />
          {[85, 60, 30].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-3 bg-[#D70025]/15 rounded-sm" style={{ width: `${w}%` }} />
              <span className="text-[8px] text-white/20">{w}%</span>
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('multimedia')) {
    return (
      <PreviewShell label="multimedia">
        <div className="flex gap-2">
          <div className="w-14 h-10 bg-white/[0.06] rounded flex items-center justify-center shrink-0">
            <Play size={12} className="text-white/15" />
          </div>
          <div className="flex-1 space-y-1">
            <TextLine w="w-full" h="h-1.5" color="bg-white/12" />
            <TextLine w="w-1/2" h="h-1" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('obituar')) {
    return (
      <PreviewShell label="obituaries">
        <div className="flex gap-2 items-center">
          <Heart size={12} className="text-white/15 shrink-0" />
          <div className="flex-1 space-y-1">
            <TextLine w="w-3/4" h="h-1.5" color="bg-white/12" />
            <TextLine w="w-1/3" h="h-1" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('event')) {
    return (
      <PreviewShell label="events">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-white/[0.06] rounded text-center flex flex-col items-center justify-center shrink-0">
            <span className="text-[7px] text-white/20">MAR</span>
            <span className="text-[10px] text-white/40">04</span>
          </div>
          <div className="flex-1 space-y-1">
            <TextLine w="w-3/4" h="h-1.5" color="bg-white/12" />
            <div className="flex items-center gap-1">
              <MapPin size={8} className="text-white/15" />
              <TextLine w="w-1/2" h="h-1" />
            </div>
          </div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="home">
      <div className="flex items-center gap-2 py-1">
        <Newspaper size={14} className="text-white/20" />
        <TextBlock lines={2} />
      </div>
    </PreviewShell>
  );
};

const PatternPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('cta') || block.id.includes('newsletter')) {
    return (
      <PreviewShell bg="bg-[#D70025]/5" label="cta">
        <div className="text-center space-y-2 py-1">
          <HeadingLine w="w-2/3" />
          <div className="mx-auto"><TextLine w="w-4/5" h="h-1" /></div>
          <div className="px-3 py-1 bg-[#D70025]/30 rounded text-[9px] text-white/50 inline-block">
            {block.id.includes('newsletter') ? 'Teken in' : 'Lees meer'}
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('contact')) {
    return (
      <PreviewShell label="contact-form">
        <div className="space-y-1.5">
          <div className="grid grid-cols-2 gap-1">
            <div className="h-4 bg-white/5 border border-white/8 rounded" />
            <div className="h-4 bg-white/5 border border-white/8 rounded" />
          </div>
          <div className="h-8 bg-white/5 border border-white/8 rounded" />
          <div className="px-3 py-1 bg-[#D70025]/30 rounded text-[9px] text-white/40 inline-block">Stuur</div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('hero') || block.id.includes('content-hero')) {
    return (
      <PreviewShell bg="bg-[#142135]/30" label="content-hero">
        <div className="py-2 space-y-2">
          <div className="flex items-center gap-1 text-[8px] text-white/20">
            {['Tuis', 'Bladsy'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <ChevronRight size={6} className="text-white/10" />}
                <span>{label}</span>
              </React.Fragment>
            ))}
          </div>
          <HeadingLine w="w-3/4" />
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('faq')) {
    return (
      <PreviewShell label="faq">
        <div className="space-y-1">
          {['Wat is Die Papier?', 'Hoe teken ek in?', 'Kontak ons'].map((q, i) => (
            <div key={q} className="flex items-center justify-between py-1 border-b border-white/5">
              <span className="text-[9px] text-white/30">{q}</span>
              <ChevronRight size={8} className={`text-white/15 ${i === 0 ? 'rotate-90' : ''}`} />
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('team')) {
    return (
      <PreviewShell label="team">
        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-white/[0.06] mx-auto" />
              <TextLine w="w-full" h="h-1" />
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="pattern">
      <div className="flex items-center gap-2 py-1">
        <LayoutGrid size={14} className="text-white/20" />
        <TextBlock lines={2} />
      </div>
    </PreviewShell>
  );
};

const PartsPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('header')) {
    return (
      <PreviewShell label="header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-[#D70025]/20 rounded" />
            <span className="text-[9px] text-white/30" style={{ fontFamily: 'serif' }}>Die Papier</span>
          </div>
          <div className="flex items-center gap-3">
            {['Nuus', 'Sport', 'Sake'].map(l => (
              <span key={l} className="text-[8px] text-white/20">{l}</span>
            ))}
            <SearchIcon size={10} className="text-white/15" />
            <ShoppingCart size={10} className="text-white/15" />
          </div>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('footer')) {
    return (
      <PreviewShell bg="bg-[#142135]/30" label="footer">
        <div className="grid grid-cols-3 gap-2">
          {['Oor Ons', 'Navigasie', 'Kontak'].map(section => (
            <div key={section} className="space-y-1">
              <span className="text-[8px] text-white/25 uppercase">{section}</span>
              <TextLine w="w-full" h="h-1" />
              <TextLine w="w-3/4" h="h-1" />
            </div>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('breadcrumb')) {
    return (
      <PreviewShell label="breadcrumbs">
        <div className="flex items-center gap-1.5">
          {['Tuis', 'Nuus', 'Artikel'].map((label, i) => (
            <React.Fragment key={label}>
              {i > 0 && <ChevronRight size={8} className="text-white/15" />}
              <span className="text-[9px] text-white/30">{label}</span>
            </React.Fragment>
          ))}
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('mobile-menu')) {
    return (
      <PreviewShell label="mobile-menu">
        <div className="space-y-1.5">
          <Menu size={14} className="text-white/30" />
          <div className="space-y-1 pl-1">
            {['Nuus', 'Sport', 'Sake', 'Leefstyl'].map(label => (
              <div key={label} className="flex items-center gap-1.5">
                <ArrowRight size={8} className="text-white/10" />
                <span className="text-[9px] text-white/25">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="part">
      <div className="flex items-center gap-2 py-1">
        <Layers size={14} className="text-white/20" />
        <TextLine w="w-2/3" />
      </div>
    </PreviewShell>
  );
};

const SocialPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('share') || block.id.includes('sharing')) {
    return (
      <PreviewShell label="social-share" interactive={true} bg="bg-white dark:bg-neutral-900">
        <div className="pt-3">
          <SocialShare 
            title="Die Papier - Latest News" 
            description="Stay up to date with the latest news from Die Papier"
            url="https://diepapier.com"
          />
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="social">
      <div className="flex items-center gap-2">
        {['Fb', 'Ig', 'X', 'Yt', 'Li'].map(platform => (
          <div key={platform} className="w-6 h-6 bg-white/[0.06] rounded-full flex items-center justify-center">
            <span className="text-[7px] text-white/25">{platform}</span>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
};

const BrandPreview: React.FC<{ block: BlockEntry }> = ({ block }) => (
  <PreviewShell bg="bg-[#142135]/30" label={block.id.includes('quote') ? 'quote' : 'brand'}>
    <div className="text-center space-y-1.5 py-1">
      <span className="text-lg text-white/10">&ldquo;</span>
      <TextLine w="w-4/5" h="h-1" color="bg-white/12" />
      <TextLine w="w-3/5" h="h-1" color="bg-white/12" />
      <div className="pt-1"><TextLine w="w-1/4" h="h-1" color="bg-white/6" /></div>
    </div>
  </PreviewShell>
);

const CommonPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  if (block.id.includes('social') || block.id.includes('share')) {
    return <SocialPreview block={block} />;
  }
  if (block.id.includes('logo')) {
    return (
      <PreviewShell label="logo">
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 bg-[#D70025]/15 rounded flex items-center justify-center">
            <span className="text-[7px] text-[#D70025]/40">DP</span>
          </div>
          <span className="text-[10px] text-white/30" style={{ fontFamily: 'serif' }}>Die Papier</span>
        </div>
      </PreviewShell>
    );
  }
  if (block.id.includes('related')) {
    return (
      <PreviewShell label="related-content">
        <div className="space-y-1.5">
          <span className="text-[9px] text-white/30 uppercase">Verwante Artikels</span>
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map(i => (
              <div key={i} className="space-y-0.5">
                <div className="h-6 bg-white/[0.04] rounded" />
                <TextLine h="h-1" />
              </div>
            ))}
          </div>
        </div>
      </PreviewShell>
    );
  }
  return (
    <PreviewShell label="component">
      <div className="flex items-center gap-2 py-1">
        <FileText size={14} className="text-white/20" />
        <TextBlock lines={2} />
      </div>
    </PreviewShell>
  );
};

const FormsPreview: React.FC<{ block: BlockEntry }> = ({ block }) => (
  <PreviewShell label="form">
    <div className="space-y-1.5">
      <div className="space-y-0.5">
        <TextLine w="w-1/4" h="h-1" color="bg-white/6" />
        <div className="h-4 bg-white/5 border border-white/8 rounded" />
      </div>
      <div className="space-y-0.5">
        <TextLine w="w-1/3" h="h-1" color="bg-white/6" />
        <div className="h-8 bg-white/5 border border-white/8 rounded" />
      </div>
      <div className="px-3 py-1 bg-[#D70025]/30 rounded text-[9px] text-white/40 inline-block">Stuur</div>
    </div>
  </PreviewShell>
);

const SeoPreview: React.FC<{ block: BlockEntry }> = ({ block }) => (
  <PreviewShell label="seo">
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5">
        <Globe size={10} className="text-white/20" />
        <TextLine w="w-1/2" h="h-1" color="bg-emerald-400/15" />
      </div>
      <HeadingLine w="w-3/4" />
      <TextBlock lines={2} />
    </div>
  </PreviewShell>
);

const IconsPreview: React.FC<{ block: BlockEntry }> = ({ block }) => (
  <PreviewShell label="icon">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-white/[0.06] rounded flex items-center justify-center">
        <Shield size={14} className="text-white/20" />
      </div>
      <div className="w-8 h-8 bg-white/[0.06] rounded flex items-center justify-center">
        <Mail size={14} className="text-white/20" />
      </div>
      <div className="w-8 h-8 bg-white/[0.06] rounded flex items-center justify-center">
        <Globe size={14} className="text-white/20" />
      </div>
    </div>
  </PreviewShell>
);

// ─── Main dispatcher ───────────────────────────────────────────────────────

export const BlockPreview: React.FC<{ block: BlockEntry }> = ({ block }) => {
  const previewMap: Record<string, React.FC<{ block: BlockEntry }>> = {
    layout: LayoutPreview,
    text: TextPreview,
    media: MediaPreview,
    widgets: WidgetPreview,
    query: QueryPreview,
    product: ProductPreview,
    'cart-checkout': CartCheckoutPreview,
    commerce: CommercePreview,
    ads: AdsPreview,
    home: HomePreview,
    patterns: PatternPreview,
    parts: PartsPreview,
    common: CommonPreview,
    brand: BrandPreview,
    marketing: PatternPreview,
    social: SocialPreview,
    ui: CommonPreview,
    forms: FormsPreview,
    seo: SeoPreview,
    icons: IconsPreview,
  };

  const Renderer = previewMap[block.category] || CommonPreview;
  return <Renderer block={block} />;
};