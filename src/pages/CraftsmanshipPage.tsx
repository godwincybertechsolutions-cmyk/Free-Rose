import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { CraftsmanshipSection } from '../components/CraftsmanshipSection';
import { Palette, Shield, Layers, Sparkles, Check } from 'lucide-react';

export const CraftsmanshipPage: React.FC = () => {
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
          <span className="text-zinc-300">Screen Printing Science &amp; Craftsmanship</span>
        </div>
      </div>

      {/* Hero statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-500 font-technical">
          <Palette className="w-3.5 h-3.5 text-zinc-400" />
          <span>Atelier Technical Dossier</span>
          <span aria-hidden="true" className="text-zinc-700">·</span>
          <span>Screen Print Engineering</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl text-white font-normal text-balance">
          The Science of Hand-Pulled Silk Screen Printing
        </h1>

        <p className="font-body text-sm sm:text-base text-zinc-400 font-light max-w-2xl leading-relaxed">
          How Free Rose merges master hand-pulled silk screen craft with 14oz Japanese raw selvedge denim and 480 GSM archival artist canvas in a strict monochrome palette.
        </p>
      </div>

      {/* Craftsmanship Pillars */}
      <CraftsmanshipSection />

      {/* Screen Mesh & Ink Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-zinc-900 pb-6">
          <h2 className="font-editorial text-3xl text-white">
            Silkscreen Mesh Counts &amp; Ink Formulations
          </h2>
          <p className="text-xs font-technical uppercase tracking-wider text-zinc-500 mt-1">
            Engineered specifically for each textile substrate
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-technical text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-widest text-[11px]">
                <th className="py-3 px-3">Silk Mesh Count</th>
                <th className="py-3 px-3">Ink Chemistry</th>
                <th className="py-3 px-3">Primary Substrate</th>
                <th className="py-3 px-3">Tactile Finish</th>
                <th className="py-3 px-3">Longevity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-300">
              <tr className="hover:bg-zinc-900/40">
                <td className="py-4 px-3 font-bold text-white">110 Mesh</td>
                <td className="py-4 px-3">High-Density 3D Puff Compound</td>
                <td className="py-4 px-3">Heavy Mesh Jerseys &amp; French Terry</td>
                <td className="py-4 px-3 text-zinc-400">Sculptural raised relief (2mm height)</td>
                <td className="py-4 px-3">Heat-cured at 330°F · Permanent</td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-4 px-3 font-bold text-white">160 Mesh</td>
                <td className="py-4 px-3">Vintage Distressed Crackle Base</td>
                <td className="py-4 px-3">14oz Raw Denim Jackets</td>
                <td className="py-4 px-3 text-zinc-400">Archival museum patina with micro-fractures</td>
                <td className="py-4 px-3">Wears with age like selvedge denim</td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-4 px-3 font-bold text-white">230 Mesh</td>
                <td className="py-4 px-3">Water-Base Titanium Discharge</td>
                <td className="py-4 px-3">320 GSM Combed Cotton Tees</td>
                <td className="py-4 px-3 text-zinc-400">Zero hand-feel · Soft as the underlying cotton</td>
                <td className="py-4 px-3">Immune to cracking or peeling</td>
              </tr>
              <tr className="hover:bg-zinc-900/40">
                <td className="py-4 px-3 font-bold text-white">305 Mesh</td>
                <td className="py-4 px-3">Fine Art Archival Monochromatic Ink</td>
                <td className="py-4 px-3">480 GSM Cotton Canvas Art Pieces</td>
                <td className="py-4 px-3 text-zinc-400">Microscopic botanical petal resolution</td>
                <td className="py-4 px-3">Museum archival varnish · 75+ years</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Washing & Preservation Guide */}
        <div className="p-8 bg-zinc-950 border border-zinc-800 space-y-4">
          <h3 className="font-editorial text-2xl text-white">
            Preserving Your Screen-Printed Creations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-zinc-400 font-body">
            <div className="space-y-1">
              <strong className="text-zinc-200 block font-technical uppercase">01. Wash Cold &amp; Inverted</strong>
              <p className="font-light">Always turn your tees, denim jackets, and jerseys inside-out before washing in cold water on gentle spin.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-zinc-200 block font-technical uppercase">02. Air / Line Dry</strong>
              <p className="font-light">High dryer heat can damage high-density 3D puff prints and shrink raw denim fibers. Flat line-dry in the shade.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-zinc-200 block font-technical uppercase">03. Never Iron Directly</strong>
              <p className="font-light">If ironing raw denim trousers or jackets, iron on the reverse side or place a cotton towel over the screen print.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
