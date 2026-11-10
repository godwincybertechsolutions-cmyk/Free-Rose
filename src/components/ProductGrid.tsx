import React, { useState, useMemo } from 'react';
import { Product, CollectionId, CategoryId, GenderType, ApparelSize } from '../types/brand';
import { COLLECTIONS_DATA, CATEGORIES_DATA } from '../data/products';
import { ProductCard } from './ProductCard';
import { Filter, RotateCcw, Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAddProduct: (product: Product) => void;
  onOpenAtelier: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  onQuickAddProduct,
  onOpenAtelier,
}) => {
  const [selectedCollection, setSelectedCollection] = useState<CollectionId | 'all'>('all');
  const [selectedGender, setSelectedGender] = useState<GenderType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [selectedSize, setSelectedSize] = useState<ApparelSize | 'all'>('all');

  const activeCollectionInfo = useMemo(() => {
    if (selectedCollection === 'all') return null;
    return COLLECTIONS_DATA.find((c) => c.id === selectedCollection);
  }, [selectedCollection]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCollection !== 'all' && p.collectionId !== selectedCollection) {
        return false;
      }
      if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'unisex') {
        return false;
      }
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedSize !== 'all' && !p.availableSizes.includes(selectedSize)) {
        return false;
      }
      return true;
    });
  }, [products, selectedCollection, selectedGender, selectedCategory, selectedSize]);

  const resetFilters = () => {
    setSelectedCollection('all');
    setSelectedGender('all');
    setSelectedCategory('all');
    setSelectedSize('all');
  };

  const isFiltered = selectedCollection !== 'all' || selectedGender !== 'all' || selectedCategory !== 'all' || selectedSize !== 'all';

  return (
    <section id="collections" className="py-20 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
            <span>Free Rose Atelier</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>Six Core Collections</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl text-white font-normal text-balance">
            The Apparel &amp; Canvas Catalogue
          </h2>

          <p className="font-body text-sm text-zinc-400 font-light leading-relaxed">
            Screen-printed with artisanal precision. Tailored in raw denim, double-layer athletic mesh, 320 GSM combed organic cotton, and archival fine-art unbleached canvas.
          </p>
        </div>

        {/* 6 Collections Segmented Navigation Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-technical text-[11px] tracking-widest text-zinc-400 uppercase">
              Curated Collections
            </span>
            <button
              onClick={onOpenAtelier}
              className="text-[11px] font-technical tracking-wider uppercase text-zinc-400 hover:text-white flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Custom Studio</span>
            </button>
          </div>

          {/* Clean Segmented Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            <button
              onClick={() => setSelectedCollection('all')}
              className={`py-3 px-3 text-xs tracking-wider uppercase text-left sm:text-center border transition-all ${
                selectedCollection === 'all'
                  ? 'border-white bg-white text-black font-semibold'
                  : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              All Pieces ({products.length})
            </button>

            {COLLECTIONS_DATA.map((col) => {
              const count = products.filter((p) => p.collectionId === col.id).length;
              return (
                <button
                  key={col.id}
                  onClick={() => setSelectedCollection(col.id)}
                  className={`py-3 px-3 text-xs tracking-wider uppercase text-left sm:text-center border transition-all ${
                    selectedCollection === col.id
                      ? 'border-white bg-white text-black font-semibold'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="block truncate">{col.name.replace(' Collection', '')}</span>
                  <span className="text-[10px] opacity-60 font-technical">{count} pieces</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Collection Highlight Banner (if single collection chosen) */}
        {activeCollectionInfo && (
          <div className="p-6 bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-technical tracking-[0.25em] uppercase text-zinc-400 block">
                {activeCollectionInfo.featuredTag}
              </span>
              <h3 className="font-editorial text-2xl text-white">
                {activeCollectionInfo.name} — {activeCollectionInfo.tagline}
              </h3>
              <p className="font-body text-xs text-zinc-400 max-w-2xl font-light">
                {activeCollectionInfo.description}
              </p>
            </div>
            {activeCollectionInfo.id === 'custom' && (
              <button
                onClick={onOpenAtelier}
                className="self-start md:self-center shrink-0 px-5 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
              >
                Open Atelier Configurator
              </button>
            )}
          </div>
        )}

        {/* Refined Filter Strip (Gender, Category, Sizing, Reset) */}
        <div className="p-4 bg-zinc-950 border border-zinc-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-technical">
            
            {/* Gender Filter */}
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

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 uppercase tracking-widest text-[11px]">Garment:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                aria-label="Filter by garment category"
                className="bg-black border border-zinc-800 text-zinc-300 text-[11px] uppercase tracking-wider px-2.5 py-1 focus:border-white focus:outline-none"
              >
                <option value="all">All Categories</option>
                {CATEGORIES_DATA.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Filter (S, M, L, XL) */}
            <div className="flex items-center gap-2">
              <span className="text-zinc-400 uppercase tracking-widest text-[11px]">Size:</span>
              <div className="flex border border-zinc-800 bg-black">
                {(['all', 'S', 'M', 'L', 'XL'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s as any)}
                    className={`px-2 py-1 text-[11px] uppercase tracking-wider transition-colors ${
                      selectedSize === s ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Active Results Count & Reset */}
          <div className="flex items-center gap-4 text-xs font-technical">
            <span className="text-zinc-400 uppercase tracking-wider">
              Showing <strong className="text-white font-medium">{filteredProducts.length}</strong> creations
            </span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-zinc-400 hover:text-white flex items-center gap-1.5 uppercase tracking-wider transition-colors underline underline-offset-4"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onQuickAdd={onQuickAddProduct}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-zinc-800 p-8 space-y-4">
            <h3 className="font-editorial text-2xl text-white">No creations match this selection</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto font-light">
              Try adjusting the gender, garment category, or size filter, or commission a bespoke 1-of-1 piece in our atelier.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 border border-zinc-700 text-xs font-technical uppercase tracking-widest text-white hover:border-white transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
