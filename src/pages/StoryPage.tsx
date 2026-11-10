import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { BrandStory } from '../components/BrandStory';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

export const StoryPage: React.FC = () => {
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
          <span className="text-zinc-300">The Homage to Rose &amp; Brand Manifesto</span>
        </div>
      </div>

      {/* Hero statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
          <Heart className="w-3.5 h-3.5 text-zinc-400" />
          <span>The Matriarch's Legacy</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Manifesto</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl text-white font-normal text-balance">
          "My mum has been the greatest thing in my life, and she is called Rose."
        </h1>

        <p className="font-editorial italic text-2xl text-zinc-300 max-w-2xl font-light">
          "You deserve your flowers."
        </p>
      </div>

      {/* Brand Story Core Spread */}
      <BrandStory onOpenAtelier={() => navigateTo('atelier')} />

      {/* Cultural Heritage & Nairobi Mashujaa Roots */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-zinc-900 pb-6">
          <h2 className="font-editorial text-3xl text-white">
            The Three Pillars of Free Rose
          </h2>
          <p className="text-xs font-technical uppercase tracking-wider text-zinc-500 mt-1">
            Maternal Devotion · Mashujaa Strength · Luxury Screen Printing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-zinc-500 text-xs">PILLAR 01</span>
            <h3 className="font-editorial text-2xl text-white">The Living Rose</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              Why do we wait for funerals or farewells to give people their flowers? Free Rose is a living testimony. It encourages sons, daughters, partners, and friends to give their heroes flowers while their hands are warm to hold them.
            </p>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-zinc-500 text-xs">PILLAR 02</span>
            <h3 className="font-editorial text-2xl text-white">Mashujaa (The Champions)</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              In Kenya, Mashujaa Day honors the courageous men and women who fought for our freedom. To us, mothers and caregivers are the ultimate Mashujaa. The collection honors this quiet, unshakeable African bravery.
            </p>
          </div>

          <div className="p-8 bg-zinc-950 border border-zinc-900 space-y-4">
            <span className="font-technical text-zinc-500 text-xs">PILLAR 03</span>
            <h3 className="font-editorial text-2xl text-white">Haute Silk Screen Craft</h3>
            <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
              We reject cheap fast-fashion vinyl transfers. Every petal, thorn, and letter is hand-pulled through fine silk mesh with water-based discharge inks and high-density puff formulas that endure through decades of wear.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-editorial text-2xl text-white block">Dedicate a Garment to Your Rose</span>
            <span className="text-xs text-zinc-400 font-light">Custom silkscreen inscriptions and complimentary floral gift box included.</span>
          </div>
          <button
            onClick={() => navigateTo('atelier')}
            className="px-6 py-3.5 bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Commission in Atelier
          </button>
        </div>
      </section>

    </div>
  );
};
