import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { 
  HERO_EDITORIAL_IMAGE, 
  PRODUCT_WANISA_JACKET, 
  PRODUCT_MASHUJAA_JERSEY, 
  PRODUCT_CANVAS_ART, 
  COLLECTIONS_DATA, 
  PRODUCTS_CATALOG 
} from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types/brand';
import { ArrowRight, Sparkles, Heart, Layers, Ruler } from 'lucide-react';

interface HomePageProps {
  onSelectProduct: (product: Product) => void;
  onQuickAddProduct: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProduct,
  onQuickAddProduct,
}) => {
  const { navigateTo } = useNavigation();

  const featuredProducts = PRODUCTS_CATALOG.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Grand Editorial Split Hero */}
      <section className="relative w-full border-b border-zinc-900 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Brand Statement & Editorial Typography */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-zinc-400 font-technical">
                  <span>Atelier Edition</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>Nairobi &amp; Global Runway</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>Monochrome Series</span>
                </div>

                <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] text-balance">
                  You Deserve Your Flowers.
                </h1>

                <p className="font-editorial italic text-xl sm:text-2xl text-zinc-300 font-light max-w-xl">
                  "My mother Rose is the greatest presence in my life. We do not wait for tomorrow to honor the ones who gave us roots."
                </p>
              </div>

              <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg font-light">
                Free Rose crafts high-fashion screen printed apparel and archival canvas art in an uncompromising black and white palette. Curated into six thematic collections spanning Ladies, Men, and Unisex tailoring from Small to Extra Large.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => navigateTo('collections')}
                  className="inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase focus:outline-none focus:ring-1 focus:ring-white"
                >
                  <span>Explore The 6 Collections</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigateTo('atelier')}
                  className="inline-flex items-center justify-center gap-2.5 bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors px-6 py-4 text-xs font-medium tracking-[0.2em] uppercase"
                >
                  <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Custom Screen Print Atelier</span>
                </button>
              </div>

              {/* Craft Specs Strip */}
              <div className="pt-6 border-t border-zinc-900 grid grid-cols-3 gap-6 text-left">
                <div>
                  <span className="block font-technical text-[11px] tracking-wider text-zinc-500 uppercase">Ink Finish</span>
                  <span className="font-editorial text-base text-zinc-200">Discharge &amp; 3D Puff</span>
                </div>
                <div>
                  <span className="block font-technical text-[11px] tracking-wider text-zinc-500 uppercase">Materials</span>
                  <span className="font-editorial text-base text-zinc-200">14oz Denim &amp; 320 GSM</span>
                </div>
                <div>
                  <span className="block font-technical text-[11px] tracking-wider text-zinc-500 uppercase">Sizing Spectrum</span>
                  <span className="font-editorial text-base text-zinc-200">Small to XL (Unisex)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Fashion Photography Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-zinc-950 border border-zinc-800">
                <img
                  src={HERO_EDITORIAL_IMAGE}
                  alt="Free Rose Editorial Monochrome Campaign"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale contrast-110 hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="font-technical text-[10px] tracking-[0.25em] uppercase text-zinc-400 block">
                      Campaign AW26
                    </span>
                    <span className="font-editorial text-lg tracking-wide text-white">
                      Homage to Rose · The Botanical Silk Screen
                    </span>
                  </div>
                  <button
                    onClick={() => navigateTo('collections')}
                    className="text-[11px] tracking-[0.2em] uppercase font-technical text-zinc-300 hover:text-white underline underline-offset-4"
                  >
                    Explore Collections
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The 6 Dedicated Collections Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-technical tracking-[0.3em] uppercase text-zinc-500 block">
              Curated Universes
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Explore The Six Collections
            </h2>
          </div>
          <button
            onClick={() => navigateTo('collections')}
            className="text-xs font-technical uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 underline underline-offset-4"
          >
            <span>View All Garments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 6 Collections Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTIONS_DATA.map((col, index) => {
            const count = PRODUCTS_CATALOG.filter((p) => p.collectionId === col.id).length;
            const previewImage = 
              col.id === 'wanisa' ? PRODUCT_WANISA_JACKET :
              col.id === 'mashujaa' ? PRODUCT_MASHUJAA_JERSEY :
              col.id === 'creative-art' ? PRODUCT_CANVAS_ART :
              col.id === 'athletes' ? PRODUCT_MASHUJAA_JERSEY :
              HERO_EDITORIAL_IMAGE;

            return (
              <div
                key={col.id}
                onClick={() => navigateTo('collection-detail', col.id)}
                className="group relative bg-zinc-950 border border-zinc-900 hover:border-zinc-700 p-6 flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-zinc-900">
                    <img
                      src={previewImage}
                      alt={col.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-technical uppercase tracking-widest text-zinc-500">
                      <span>0{index + 1} // {col.featuredTag}</span>
                      <span>{count} Pieces</span>
                    </div>
                    <h3 className="font-editorial text-2xl text-white group-hover:text-zinc-200 transition-colors">
                      {col.name}
                    </h3>
                    <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
                      {col.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-technical uppercase tracking-wider text-zinc-400 group-hover:text-white">
                  <span>Enter Collection</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Screen-Printed Pieces Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-technical tracking-[0.3em] uppercase text-zinc-500 block">
              Atelier Highlights
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
              Signature Screen-Printed Editions
            </h2>
          </div>
          <button
            onClick={() => navigateTo('collections')}
            className="text-xs font-technical uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 underline underline-offset-4"
          >
            <span>Browse Complete Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAddProduct}
            />
          ))}
        </div>
      </section>

      {/* 4. Atelier Studio Invitation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 sm:p-14 bg-zinc-950 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-technical tracking-[0.25em] uppercase text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
              <span>Bespoke 1-of-1 Service</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-5xl text-white font-normal text-balance">
              The Free Rose Screen Print Atelier
            </h3>
            <p className="font-body text-xs sm:text-sm text-zinc-400 font-light max-w-xl leading-relaxed">
              Design a personalized piece. Select your garment canvas (Tee, Denim Jacket, Mesh Jersey, Denim Trouser, Shorts, or Stretched Canvas), screen print placement, botanical rose artwork, and inscribe your personal flower dedication.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <button
              onClick={() => navigateTo('atelier')}
              className="w-full py-4 px-6 bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors text-center"
            >
              Open Atelier Configurator
            </button>
            <button
              onClick={() => navigateTo('sizing')}
              className="w-full py-3 px-6 border border-zinc-800 text-zinc-400 uppercase tracking-widest text-xs hover:border-zinc-600 hover:text-white transition-colors text-center"
            >
              View Sizing Matrix (S to XL)
            </button>
          </div>
        </div>
      </section>

      {/* 5. The Rose Homage Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-zinc-900 bg-black p-8 sm:p-12">
          <div className="md:col-span-4 aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden">
            <img
              src={PRODUCT_CANVAS_ART}
              alt="You Deserve Your Flowers Canvas"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-115"
            />
          </div>
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-technical tracking-widest text-zinc-500 uppercase">
              <Heart className="w-3.5 h-3.5 text-zinc-400" />
              <span>The Founder's Dedication</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-4xl text-white">
              "Everybody deserves their flowers while they can still smell them."
            </h3>
            <p className="font-body text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Named in honoring homage to Rose, the founder's mother. Free Rose was established to turn floral gratitude into an enduring, wearable art form.
            </p>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('atelier')}
                className="text-xs font-technical uppercase tracking-widest text-white hover:text-zinc-300 underline underline-offset-4 flex items-center gap-2"
              >
                <span>Commission Bespoke Atelier Piece</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
