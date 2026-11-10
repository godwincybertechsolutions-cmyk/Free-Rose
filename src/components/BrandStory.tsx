import React from 'react';
import { HERO_EDITORIAL_IMAGE } from '../data/products';
import { Heart, Flower2, Quote } from 'lucide-react';

interface BrandStoryProps {
  onOpenAtelier: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onOpenAtelier }) => {
  return (
    <section id="story" className="py-24 bg-black border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical mb-6">
          <Heart className="w-3.5 h-3.5 text-zinc-400" />
          <span>The Origin &amp; Homage</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>The Rose Behind Free Rose</span>
        </div>

        {/* 2-Column Story Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: The Manifesto Text */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-editorial text-4xl sm:text-6xl text-white font-normal leading-[1.1] text-balance">
              "My mum has been the greatest thing in my life, and she is called Rose."
            </h2>

            <div className="space-y-6 font-body text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              <p className="text-zinc-300 font-editorial text-xl italic leading-relaxed">
                "Too often in this world, flowers are brought when it is too late. We wait for milestones, eulogies, or distant moments to speak the love that should be whispered and celebrated every single day. Everybody deserves their flowers while they can still smell them."
              </p>

              <p>
                <strong>Free Rose</strong> was born out of this purest maternal devotion. Rose represents every mother, every nurturer, every quiet hero whose sacrifices paved our runways. When you wear a Free Rose screen-printed garment, you are not merely wearing luxury streetwear—you are carrying a wearable dedication of gratitude and love.
              </p>

              <p>
                Rooted in Nairobi’s vibrant spirit of <em>Mashujaa</em> (heroes) and engineered to the aesthetic standards of leading European couture houses, our screen printing atelier uses pure titanium water-based discharge inks, 3D puff formulations, and heavy unbleached cotton canvases. Each rose motif is individually pulled by hand—no two garments are identical, just as no two acts of unconditional love can ever be duplicated.
              </p>
            </div>

            {/* Key Mantras */}
            <div className="pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="font-technical text-xs tracking-widest uppercase text-zinc-300 block">
                  The Tagline
                </span>
                <span className="font-editorial text-2xl text-white block">
                  You Deserve Your Flowers.
                </span>
                <span className="text-xs text-zinc-500 font-light block">
                  A universal call to honor our loved ones and champions today.
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-technical text-xs tracking-widest uppercase text-zinc-300 block">
                  The Philosophy
                </span>
                <span className="font-editorial text-2xl text-white block">
                  Wearable Gratitude.
                </span>
                <span className="text-xs text-zinc-500 font-light block">
                  Monochrome luxury screen print apparel for Ladies, Men, and Unisex.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAtelier}
                className="px-6 py-3.5 bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-semibold uppercase tracking-[0.2em]"
              >
                Commission a Floral Dedication Piece
              </button>
            </div>
          </div>

          {/* Right: Architectural Image Frame & Quote Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-10 bg-zinc-950 border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-editorial text-2xl tracking-widest uppercase text-white">
                  ROSE
                </span>
                <span className="font-technical text-[10px] tracking-widest uppercase text-zinc-500">
                  Maternal Dedication
                </span>
              </div>

              <Quote className="w-8 h-8 text-zinc-600" />

              <p className="font-editorial text-lg text-zinc-200 leading-relaxed italic">
                "For Rose, who gave without counting, who held our hands through the darkest hours, and whose grace blooms forever in every thread of Free Rose."
              </p>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-technical tracking-wider text-zinc-400">
                <span>FOUNDER OF FREE ROSE</span>
                <span>NAIROBI · ATELIER 2026</span>
              </div>
            </div>

            {/* Decorative background rose watermark */}
            <div className="mt-6 aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden relative">
              <img
                src={HERO_EDITORIAL_IMAGE}
                alt="Free Rose Campaign Dedication"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-bottom grayscale contrast-125 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-[10px] font-technical tracking-[0.3em] uppercase text-zinc-400">
                Free Rose · The Matriarch's Legacy
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
