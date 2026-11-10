import React from 'react';
import { Product } from '../types/brand';
import { Sparkles, Eye, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
}) => {
  return (
    <article className="group relative flex flex-col bg-zinc-950 border border-zinc-900 hover:border-zinc-700 transition-all duration-300">
      {/* Product Image Frame */}
      <div 
        onClick={() => onSelect(product)}
        className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-zinc-900 cursor-pointer"
      >
        <img
          src={product.image}
          alt={`${product.name} - ${product.categoryName}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:scale-103 group-hover:contrast-115 transition-all duration-500"
        />

        {/* Edition Stamp */}
        {product.editionLimit && (
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-technical tracking-[0.2em] uppercase text-zinc-300 border border-zinc-800">
            {product.editionLimit}
          </div>
        )}

        {/* Ink Finish Overlay Badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-black/90 text-zinc-300 px-2.5 py-1 text-[10px] font-technical tracking-wider uppercase border border-zinc-800">
            {product.screenPrintInk}
          </span>
          <span className="bg-white text-black px-2.5 py-1 text-[10px] font-technical tracking-wider uppercase font-bold">
            Inspect Detail
          </span>
        </div>
      </div>

      {/* Card Info Area */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-1.5">
          {/* Metadata Row: Category · Gender · Sizes */}
          <div className="flex items-center gap-2 text-[11px] font-technical text-zinc-400 uppercase tracking-widest">
            <span>{product.collectionName}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{product.gender}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelect(product)}
            className="font-editorial text-lg sm:text-xl font-normal text-white group-hover:text-zinc-200 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="font-body text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-technical text-zinc-500 uppercase tracking-wider block">Price</span>
            <span className="font-technical text-base text-white tabular-nums tracking-wide">
              ${product.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(product)}
              className="p-2 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white transition-colors text-xs"
              title="Inspect Product & Silk Screen Details"
              aria-label={`Inspect ${product.name}`}
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => onQuickAdd(product)}
              className="px-3 py-2 bg-zinc-900 hover:bg-white text-zinc-200 hover:text-black border border-zinc-800 hover:border-white transition-colors text-xs font-technical tracking-wider uppercase flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Select Size</span>
            </button>
          </div>
        </div>

        {/* Available Sizes Indicator */}
        <div className="flex items-center gap-1.5 pt-1 text-[10px] font-technical text-zinc-400">
          <span className="tracking-widest uppercase">Sizes:</span>
          {product.availableSizes.map((s) => (
            <span key={s} className="px-1 border border-zinc-800 text-zinc-400">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
