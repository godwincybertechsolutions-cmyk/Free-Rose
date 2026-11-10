import React from 'react';
import { Layers, Sparkles, Shield, Palette } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="craft" className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
            <Palette className="w-3.5 h-3.5 text-zinc-400" />
            <span>Atelier Standards</span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>The Screen Printing Discipline</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl text-white font-normal text-balance">
            Hand-Pulled Silk Screen Printing &amp; Haute Garment Engineering
          </h2>

          <p className="font-body text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every garment from Free Rose is hand-pulled through high-mesh silk screens using environmentally responsible, high-durability inks formulated specifically for luxury raw textiles.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Pillar 1 */}
          <div className="p-6 bg-black border border-zinc-900 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-technical text-zinc-600 text-xs">01</span>
              <Layers className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-editorial text-xl text-white">Water-Base Discharge Inks</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Instead of sitting like heavy plastic on the fabric, our discharge inks chemically replace the dark dye of the yarn with pure pigment, leaving a feather-light hand feel that softens with every wash.
            </p>
            <span className="block font-technical text-[10px] tracking-wider uppercase text-zinc-500 pt-2 border-t border-zinc-900">
              Zero Cracking · Breathable
            </span>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 bg-black border border-zinc-900 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-technical text-zinc-600 text-xs">02</span>
              <Sparkles className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-editorial text-xl text-white">High-Density 3D Puff</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Formulated with expanding micro-spheres heat-cured at 330°F, creating a sculptural, tactile 3D relief on jerseys, tees, and denim jackets that mimics couture embroidery.
            </p>
            <span className="block font-technical text-[10px] tracking-wider uppercase text-zinc-500 pt-2 border-t border-zinc-900">
              Sculptural Relief · High-Impact
            </span>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 bg-black border border-zinc-900 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-technical text-zinc-600 text-xs">03</span>
              <Shield className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-editorial text-xl text-white">14oz Japanese Selvedge</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Milled in Okayama, Japan on vintage shuttle looms. Raw, unwashed black denim that molds to the wearer's anatomy, providing an architectural canvas for our screen-printed rose emblems.
            </p>
            <span className="block font-technical text-[10px] tracking-wider uppercase text-zinc-500 pt-2 border-t border-zinc-900">
              Kurabo Shuttle Loom · 14.5oz
            </span>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 bg-black border border-zinc-900 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-technical text-zinc-600 text-xs">04</span>
              <Palette className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-editorial text-xl text-white">Archival 480 GSM Canvas</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Heavy unbleached artist cotton stretched over solid pine stretcher bars. Silkscreened with lightfast museum inks to preserve the message "You Deserve Your Flowers" for generations.
            </p>
            <span className="block font-technical text-[10px] tracking-wider uppercase text-zinc-500 pt-2 border-t border-zinc-900">
              Museum Grade · Archival Varnish
            </span>
          </div>

        </div>

        {/* The 6 Collections Breakdown Bar */}
        <div className="p-8 bg-black border border-zinc-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <h3 className="font-editorial text-2xl text-white">
              The Architecture of the 6 Collections
            </h3>
            <span className="font-technical text-xs tracking-widest uppercase text-zinc-500">
              Sizing: Small · Medium · Large · Extra Large
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">01. Wanisa Collection</span>
              <p className="text-zinc-500 font-light leading-relaxed">Dedicated to Rose. Botanical fine-line silkscreen on raw denim jackets, tailored pleated denim trousers, and luxury tees.</p>
            </div>
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">02. Mashujaa Collection</span>
              <p className="text-zinc-500 font-light leading-relaxed">Honoring heroes. Heavyweight double-layer athletic mesh jerseys, court warm-up shorts, and bold Swahili typography.</p>
            </div>
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">03. Kenyan Culture Collection</span>
              <p className="text-zinc-500 font-light leading-relaxed">Maasai geometric lattice screen prints translated into black &amp; white haute streetwear, raw selvedge trousers, and heritage tees.</p>
            </div>
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">04. Creative Art Collection</span>
              <p className="text-zinc-500 font-light leading-relaxed">Wearable gallery pieces, crackle discharge ink denim jackets, and large-scale 480 GSM stretched cotton canvas paintings.</p>
            </div>
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">05. Athletes &amp; Ballers Collection</span>
              <p className="text-zinc-500 font-light leading-relaxed">Engineered for basketballers and footballers. Heavy perforated mesh, varsity numbers, court shorts, and athletic silhouettes.</p>
            </div>
            <div className="space-y-1">
              <span className="font-technical text-zinc-300 uppercase tracking-wider block">06. Custom Bespoke Atelier</span>
              <p className="text-zinc-500 font-light leading-relaxed">1-of-1 screen print commissions. Select garment, placement, ink chemistry, and inscribe a personalized flower dedication.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
