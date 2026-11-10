import React from 'react';
import { 
  HERO_EDITORIAL_IMAGE, 
  PRODUCT_WANISA_JACKET, 
  PRODUCT_MASHUJAA_JERSEY, 
  PRODUCT_CANVAS_ART 
} from '../data/products';
import { Camera, ArrowRight } from 'lucide-react';

interface LookbookSectionProps {
  onExploreCollections: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onExploreCollections }) => {
  return (
    <section id="lookbook" className="py-24 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
              <Camera className="w-3.5 h-3.5 text-zinc-400" />
              <span>Editorial Campaign</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>Autumn / Winter Series</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl text-white font-normal text-balance">
              The Monochrome Campaign: Flowers in Concrete
            </h2>

            <p className="font-body text-sm text-zinc-400 font-light leading-relaxed">
              Photographed inside brutalist architectural spaces. The collection bridges high-density screen printing with structured raw denim, relaxed tailoring, and archival cotton canvas.
            </p>
          </div>

          <button
            onClick={onExploreCollections}
            className="self-start md:self-end px-5 py-3 border border-zinc-800 hover:border-white text-xs font-technical uppercase tracking-widest text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Shop The Editorial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Large Editorial Card */}
          <div className="md:col-span-8 group relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-zinc-800">
            <img
              src={HERO_EDITORIAL_IMAGE}
              alt="Free Rose AW26 Monochrome Editorial"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale contrast-115 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="font-technical text-[10px] tracking-[0.3em] uppercase text-zinc-400 block">Look 01 · Unisex</span>
                <span className="font-editorial text-2xl text-white">Botanical Rose Heavy Tee &amp; Raw Denim Trouser</span>
              </div>
              <span className="font-technical text-xs text-zinc-400 uppercase tracking-widest hidden sm:inline">
                Atelier 320 GSM
              </span>
            </div>
          </div>

          {/* Right Column: 2 Stacked Looks */}
          <div className="md:col-span-4 flex flex-col gap-8">
            
            {/* Denim Jacket Look */}
            <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-zinc-800 flex-1">
              <img
                src={PRODUCT_WANISA_JACKET}
                alt="Wanisa Raw Denim Jacket back silkscreen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-technical text-[10px] tracking-[0.25em] uppercase text-zinc-400 block">Look 02 · Wanisa</span>
                <span className="font-editorial text-lg text-white">Raw Denim Jacket with Back Rose Discharge</span>
              </div>
            </div>

            {/* Mashujaa Jersey Look */}
            <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 border border-zinc-800 flex-1">
              <img
                src={PRODUCT_MASHUJAA_JERSEY}
                alt="Mashujaa Athletic Mesh Jersey"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-technical text-[10px] tracking-[0.25em] uppercase text-zinc-400 block">Look 03 · Mashujaa</span>
                <span className="font-editorial text-lg text-white">High-Density Mesh Jersey &amp; Court Shorts</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Gallery Banner: Canvas Art */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-zinc-950 p-8 border border-zinc-800">
          <div className="md:col-span-5 aspect-[4/3] overflow-hidden border border-zinc-800">
            <img
              src={PRODUCT_CANVAS_ART}
              alt="Archival Canvas Painting 'You Deserve Your Flowers'"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale contrast-115"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-technical tracking-widest text-zinc-500 uppercase">
              <span>Fine Art Series</span>
              <span>·</span>
              <span>480 GSM Cotton Canvas</span>
            </div>
            <h3 className="font-editorial text-3xl text-white">
              Wearable Apparel &amp; Gallery Paintings
            </h3>
            <p className="font-body text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              In addition to our wearable denim and jersey collections, the Free Rose Creative Art series includes hand-stretched museum-grade canvas paintings. Silkscreened in limited editions of 50, each artwork cements the brand's core truth: <em>"You deserve your flowers."</em>
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-technical uppercase tracking-wider text-zinc-300 block">
                Standard Dimensions: 36 x 48 inches (Stretched on 1.5" Pine)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
