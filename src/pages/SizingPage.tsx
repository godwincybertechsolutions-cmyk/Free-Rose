import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { SIZING_GUIDE_DATA } from '../data/products';
import { Ruler, Sparkles, Check, ArrowRight } from 'lucide-react';

export const SizingPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const [activeTab, setActiveTab] = useState<'tops' | 'bottoms'>('tops');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14 pb-24">
      
      {/* Breadcrumb Header */}
      <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-4">
        <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-zinc-300">Sizing &amp; Tailoring Matrix (S to XL)</span>
      </div>

      {/* Hero statement */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
          <Ruler className="w-3.5 h-3.5 text-zinc-400" />
          <span>Atelier Proportion Guidelines</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Small to Extra Large</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl text-white font-normal text-balance">
          Tailoring &amp; Measurement Matrix
        </h1>

        <p className="font-body text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
          Free Rose garments are engineered with relaxed luxury proportions, drop shoulders, and balanced silhouettes. All styles are crafted across Ladies, Men, and Unisex sizing from Small (S) to Extra Large (XL).
        </p>
      </div>

      {/* Interactive Sizing Table Box */}
      <div className="p-6 sm:p-10 bg-zinc-950 border border-zinc-800 space-y-8">
        
        {/* Toggle Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
          <div className="flex border border-zinc-800 bg-black">
            <button
              onClick={() => setActiveTab('tops')}
              className={`px-5 py-2.5 text-xs font-technical uppercase tracking-wider transition-colors ${
                activeTab === 'tops' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tops, Denim Jackets &amp; Jerseys
            </button>
            <button
              onClick={() => setActiveTab('bottoms')}
              className={`px-5 py-2.5 text-xs font-technical uppercase tracking-wider transition-colors ${
                activeTab === 'bottoms' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Denim Trousers &amp; Court Shorts
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-technical">
            <span className="text-zinc-500 uppercase">Unit Measurement:</span>
            <div className="flex border border-zinc-800 bg-black">
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1.5 text-xs uppercase transition-colors ${
                  unit === 'in' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Inches (in)
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1.5 text-xs uppercase transition-colors ${
                  unit === 'cm' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Centimeters (cm)
              </button>
            </div>
          </div>
        </div>

        {/* The Matrix */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-technical text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-widest text-[11px]">
                <th className="py-4 px-4">Size Code</th>
                {activeTab === 'tops' ? (
                  <>
                    <th className="py-4 px-4">Chest Width</th>
                    <th className="py-4 px-4">Body Length</th>
                    <th className="py-4 px-4">Shoulder Span</th>
                  </>
                ) : (
                  <>
                    <th className="py-4 px-4">Waist (Relaxed)</th>
                    <th className="py-4 px-4">Inseam</th>
                    <th className="py-4 px-4">Hip Circumference</th>
                  </>
                )}
                <th className="py-4 px-4">Tailoring Silhouette</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-300">
              {activeTab === 'tops' ? (
                SIZING_GUIDE_DATA.tops.map((row) => (
                  <tr key={row.size} className="hover:bg-zinc-900/50">
                    <td className="py-4 px-4 font-bold text-white text-base">{row.size}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.chest.split('(')[0] : row.chest.split('(')[1]?.replace(')', '') || row.chest}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.length.split('(')[0] : row.length.split('(')[1]?.replace(')', '') || row.length}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.shoulder.split('(')[0] : row.shoulder.split('(')[1]?.replace(')', '') || row.shoulder}</td>
                    <td className="py-4 px-4 text-zinc-400 italic font-editorial text-base">{row.fit}</td>
                  </tr>
                ))
              ) : (
                SIZING_GUIDE_DATA.bottoms.map((row) => (
                  <tr key={row.size} className="hover:bg-zinc-900/50">
                    <td className="py-4 px-4 font-bold text-white text-base">{row.size}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.waist.split('(')[0] : row.waist.split('(')[1]?.replace(')', '') || row.waist}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.inseam.split('(')[0] : row.inseam.split('(')[1]?.replace(')', '') || row.inseam}</td>
                    <td className="py-4 px-4 tabular-nums text-sm">{unit === 'in' ? row.hip.split('(')[0] : row.hip.split('(')[1]?.replace(')', '') || row.hip}</td>
                    <td className="py-4 px-4 text-zinc-400 italic font-editorial text-base">{row.fit}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Gender Styling Guidance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-800 text-xs font-body text-zinc-400">
          <div className="p-4 bg-black border border-zinc-900 space-y-2">
            <span className="font-technical text-white block uppercase tracking-wider">Ladies Tailoring</span>
            <p className="font-light leading-relaxed">
              For a tailored high-fashion fit that hugs the torso, we recommend choosing one size smaller than your regular unisex size (e.g., select S if you normally wear M). For an effortless runway drape, select your true size.
            </p>
          </div>
          <div className="p-4 bg-black border border-zinc-900 space-y-2">
            <span className="font-technical text-white block uppercase tracking-wider">Men's Tailoring</span>
            <p className="font-light leading-relaxed">
              Cut true to luxury streetwear standards with structured drop shoulders and generous chest breadth. If you prefer an exaggerated Fear of God or Louis Vuitton oversized silhouette, size up one grade (e.g. L to XL).
            </p>
          </div>
          <div className="p-4 bg-black border border-zinc-900 space-y-2">
            <span className="font-technical text-white block uppercase tracking-wider">Unisex Proportions</span>
            <p className="font-light leading-relaxed">
              All jerseys, tees, and raw denim trucker jackets are engineered with universal proportion balance, featuring neutral armscye depths and straight side hems that flatter any gender identity.
            </p>
          </div>
        </div>

      </div>

      {/* Sizing Support & Custom Tailoring */}
      <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="font-editorial text-2xl text-white block">Need Custom Tailoring Advice?</span>
          <span className="text-xs text-zinc-400 font-light">Our Nairobi atelier tailors can accommodate bespoke proportion requests on 1-of-1 commissions.</span>
        </div>
        <button
          onClick={() => navigateTo('atelier')}
          className="px-6 py-3.5 bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap"
        >
          Commission Custom Fit
        </button>
      </div>

    </div>
  );
};
