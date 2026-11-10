import React, { useState, useMemo } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CollectionId, Product, CategoryId, GenderType, ApparelSize } from '../types/brand';
import { 
  COLLECTIONS_DATA, 
  CATEGORIES_DATA, 
  PRODUCTS_CATALOG,
  PRODUCT_WANISA_JACKET,
  PRODUCT_MASHUJAA_JERSEY,
  PRODUCT_CANVAS_ART,
  HERO_EDITORIAL_IMAGE
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Sparkles, Ruler, ShieldCheck } from 'lucide-react';

interface CollectionDetailPageProps {
  collectionId: CollectionId;
  onSelectProduct: (product: Product) => void;
  onQuickAddProduct: (product: Product) => void;
}

export const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({
  collectionId,
  onSelectProduct,
  onQuickAddProduct,
}) => {
  const { navigateTo } = useNavigation();

  const collection = useMemo(() => {
    return COLLECTIONS_DATA.find((c) => c.id === collectionId) || COLLECTIONS_DATA[0];
  }, [collectionId]);

  const [selectedGender, setSelectedGender] = useState<GenderType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  const collectionProducts = useMemo(() => {
    return PRODUCTS_CATALOG.filter((p) => {
      if (p.collectionId !== collection.id) return false;
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'unisex') return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      return true;
    });
  }, [collection.id, selectedGender, selectedCategory]);

  const heroImage = 
    collection.id === 'wanisa' ? PRODUCT_WANISA_JACKET :
    collection.id === 'mashujaa' ? PRODUCT_MASHUJAA_JERSEY :
    collection.id === 'creative-art' ? PRODUCT_CANVAS_ART :
    collection.id === 'athletes' ? PRODUCT_MASHUJAA_JERSEY :
    HERO_EDITORIAL_IMAGE;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      
      {/* Breadcrumbs & Navigation */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4 text-xs font-technical uppercase tracking-widest text-zinc-500">
        <div className="flex items-center gap-2">
          <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <span aria-hidden="true">/</span>
          <button onClick={() => navigateTo('collections')} className="hover:text-white transition-colors">
            Collections
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-300">{collection.name}</span>
        </div>

        <button
          onClick={() => navigateTo('collections')}
          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All 6 Collections</span>
        </button>
      </div>

      {/* Collection Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-technical tracking-[0.3em] uppercase text-zinc-400 block">
              Collection Dossier // {collection.featuredTag}
            </span>
            <h1 className="font-editorial text-4xl sm:text-6xl text-white font-normal text-balance">
              {collection.name}
            </h1>
            <p className="font-editorial text-xl italic text-zinc-300">
              "{collection.tagline}"
            </p>
          </div>

          <p className="font-body text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            {collection.description}
          </p>

          <div className="p-4 bg-zinc-950 border border-zinc-800 grid grid-cols-3 gap-4 text-[11px] font-technical uppercase tracking-wider text-zinc-400">
            <div>
              <span className="text-zinc-600 block">Cut</span>
              <span className="text-zinc-200">Ladies · Men · Unisex</span>
            </div>
            <div>
              <span className="text-zinc-600 block">Sizing</span>
              <span className="text-zinc-200">S, M, L, XL</span>
            </div>
            <div>
              <span className="text-zinc-600 block">Printing</span>
              <span className="text-zinc-200">Discharge &amp; 3D Puff</span>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('atelier')}
              className="px-5 py-3 bg-white text-black text-xs font-semibold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Atelier Commission</span>
            </button>
            <button
              onClick={() => navigateTo('sizing')}
              className="px-5 py-3 border border-zinc-800 text-zinc-300 text-xs font-technical uppercase tracking-widest hover:border-white hover:text-white transition-colors flex items-center gap-2"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Size Chart</span>
            </button>
          </div>
        </div>

        {/* Collection Editorial Frame */}
        <div className="lg:col-span-5 aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden relative">
          <img
            src={heroImage}
            alt={collection.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-technical uppercase tracking-wider text-zinc-400">
            <span>Free Rose Archive</span>
            <span>Nairobi Atelier</span>
          </div>
        </div>
      </div>

      {/* Filter Bar within this collection */}
      <div className="p-4 bg-zinc-950 border border-zinc-900 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs font-technical">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 uppercase tracking-widest text-[11px]">Gender:</span>
            <div className="flex border border-zinc-800 bg-black">
              {(['all', 'ladies', 'men', 'unisex'] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
                    selectedGender === g ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-400 uppercase tracking-widest text-[11px]">Garment:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="bg-black border border-zinc-800 text-zinc-300 text-[11px] uppercase tracking-wider px-2.5 py-1 focus:border-white focus:outline-none"
            >
              <option value="all">All Garments</option>
              {CATEGORIES_DATA.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <span className="text-xs font-technical text-zinc-400 uppercase tracking-wider">
          {collectionProducts.length} Creations in this collection
        </span>
      </div>

      {/* Collection Products Grid */}
      {collectionProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAddProduct}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-zinc-800 p-8 space-y-4">
          <h3 className="font-editorial text-2xl text-white">No items match this sub-filter</h3>
          <p className="text-xs text-zinc-400">Reset your filters or commission a bespoke 1-of-1 piece in our Atelier.</p>
          <button
            onClick={() => { setSelectedGender('all'); setSelectedCategory('all'); }}
            className="px-6 py-2 border border-zinc-700 text-xs font-technical uppercase tracking-widest text-white"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Quick Switch to Other Collections */}
      <div className="pt-12 border-t border-zinc-900 space-y-6">
        <h3 className="font-editorial text-2xl text-white">
          Other Free Rose Collections
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {COLLECTIONS_DATA.filter(c => c.id !== collection.id).map((other) => (
            <button
              key={other.id}
              onClick={() => navigateTo('collection-detail', other.id)}
              className="p-4 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 text-left transition-colors"
            >
              <span className="text-[10px] font-technical uppercase tracking-wider text-zinc-500 block">
                {other.featuredTag}
              </span>
              <span className="font-editorial text-lg text-white block mt-1">
                {other.name.replace(' Collection', '')}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
