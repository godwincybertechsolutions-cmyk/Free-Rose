import React from 'react';
import { HERO_EDITORIAL_IMAGE } from '../data/products';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreCollections: () => void;
  onOpenAtelier: () => void;
  onOpenStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollections,
  onOpenAtelier,
  onOpenStory,
}) => {
  return (
    <section className="relative w-full border-b border-zinc-900 bg-black overflow-hidden">
      {/* Editorial Split Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Brand Statement & Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-zinc-400 font-technical">
                <span>Monochrome Series</span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] text-balance">
                You Deserve Your Flowers.
              </h1>


            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreCollections}
                className="inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-200 transition-colors px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase focus:outline-none focus:ring-1 focus:ring-white"
              >
                <span>View The 6 Collections</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAtelier}
                className="inline-flex items-center justify-center gap-2.5 bg-zinc-950 text-white hover:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors px-6 py-4 text-xs font-medium tracking-[0.2em] uppercase"
              >
                <span>Custom Atelier</span>
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
                alt="Free Rose Editorial Monochrome Campaign featuring Screen Printed Apparel and Tailored Denim"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale contrast-110 hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Editorial Caption */}
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
                  onClick={onOpenStory}
                  className="text-[11px] tracking-[0.2em] uppercase font-technical text-zinc-300 hover:text-white underline underline-offset-4"
                >
                  Read The Story
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
