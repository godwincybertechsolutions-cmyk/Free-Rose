import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LookbookSection } from '../components/LookbookSection';
import { 
  HERO_EDITORIAL_IMAGE, 
  PRODUCT_WANISA_JACKET, 
  PRODUCT_MASHUJAA_JERSEY, 
  PRODUCT_CANVAS_ART 
} from '../data/products';
import { Camera, Sparkles, ArrowRight } from 'lucide-react';

export const LookbookPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="space-y-16 pb-20">
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center gap-2 text-xs font-technical uppercase tracking-widest text-zinc-500 border-b border-zinc-900 pb-4">
          <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-300">Lookbook AW26 Campaign</span>
        </div>
      </div>

      {/* Hero statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
          <Camera className="w-3.5 h-3.5 text-zinc-400" />
          <span>Autumn / Winter Lookbook</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Nairobi &amp; Global Runway</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl text-white font-normal text-balance">
          Flowers in Brutalism: The Autumn/Winter Lookbook
        </h1>

        <p className="font-body text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
          Screen printed apparel captured against stark architectural concrete. Discover how raw Japanese denim, heavyweight athletic mesh, and unbleached cotton canvas coexist in an unapologetic black and white visual discipline.
        </p>
      </div>

      {/* Editorial Spread Component */}
      <LookbookSection onExploreCollections={() => navigateTo('collections')} />

      {/* Curated Styling Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-zinc-900 pb-6">
          <h2 className="font-editorial text-3xl text-white">
            Styling Directives &amp; Silhouettes
          </h2>
          <p className="text-xs font-technical uppercase tracking-wider text-zinc-500 mt-1">
            Engineered for Ladies, Men, and Unisex Layering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Directive 1 */}
          <div className="p-6 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-[10px] tracking-widest uppercase text-zinc-500 block">
              Directive 01 // Ladies
            </span>
            <h3 className="font-editorial text-2xl text-white">The Pleated Botanical Silhouette</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Pair the high-waisted Wanisa botanical denim trousers with an oversized boxy 320 GSM tee tucked at the front. Layer with the Raw Denim Trucker draped over the shoulders for an effortless Paris runway proportion.
            </p>
          </div>

          {/* Directive 2 */}
          <div className="p-6 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-[10px] tracking-widest uppercase text-zinc-500 block">
              Directive 02 // Men
            </span>
            <h3 className="font-editorial text-2xl text-white">Architectural Athletic Stacking</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Layer the double-layer perforated Mashujaa basketball jersey over a longline monochrome long-sleeve, paired with heavy loopback French terry court shorts and heavyweight boots for high-contrast street couture.
            </p>
          </div>

          {/* Directive 3 */}
          <div className="p-6 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-[10px] tracking-widest uppercase text-zinc-500 block">
              Directive 03 // Unisex
            </span>
            <h3 className="font-editorial text-2xl text-white">The 1-of-1 Atelier Monogram</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Commission a tailored heavyweight tee in our atelier with your custom dedication text. Styled clean with straight selvedge denim trousers, emphasizing the hand-pulled silk screen artwork on the back.
            </p>
          </div>
        </div>

        <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-editorial text-2xl text-white block">Ready to Commission Your Piece?</span>
            <span className="text-xs text-zinc-400 font-light">Enter our interactive screen print atelier or explore all ready-to-wear garments.</span>
          </div>
          <button
            onClick={() => navigateTo('atelier')}
            className="px-6 py-3.5 bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Enter Custom Atelier
          </button>
        </div>
      </section>

    </div>
  );
};
