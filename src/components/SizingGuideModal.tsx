import React, { useState } from 'react';
import { SIZING_GUIDE_DATA } from '../data/products';
import { X, Ruler, Check } from 'lucide-react';

interface SizingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizingGuideModal: React.FC<SizingGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'tops' | 'bottoms'>('tops');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 my-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-colors"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-technical tracking-[0.25em] uppercase text-zinc-500">
            <Ruler className="w-3.5 h-3.5 text-zinc-400" />
            <span>Atelier Sizing &amp; Fit Specifications</span>
          </div>

          <h2 className="font-editorial text-3xl text-white font-normal">
            Garment Measurements (S to XL)
          </h2>

          <p className="font-body text-xs text-zinc-400 font-light">
            Free Rose garments are engineered with relaxed luxury proportions and slight boxy drape. Fits Ladies, Men, and Unisex wearers comfortably.
          </p>
        </div>

        {/* Controls: Category & Unit */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          {/* Tops / Bottoms Tabs */}
          <div className="flex border border-zinc-800 bg-black">
            <button
              onClick={() => setActiveTab('tops')}
              className={`px-4 py-2 text-xs font-technical uppercase tracking-wider transition-colors ${
                activeTab === 'tops' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Tops, Jackets &amp; Jerseys
            </button>
            <button
              onClick={() => setActiveTab('bottoms')}
              className={`px-4 py-2 text-xs font-technical uppercase tracking-wider transition-colors ${
                activeTab === 'bottoms' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Denim Trousers &amp; Shorts
            </button>
          </div>

          {/* Unit Toggle */}
          <div className="flex items-center gap-2 text-xs font-technical">
            <span className="text-zinc-500 uppercase">Unit:</span>
            <div className="flex border border-zinc-800 bg-black">
              <button
                onClick={() => setUnit('in')}
                className={`px-2.5 py-1 text-[11px] uppercase transition-colors ${
                  unit === 'in' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Inches
              </button>
              <button
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1 text-[11px] uppercase transition-colors ${
                  unit === 'cm' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                CM
              </button>
            </div>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse font-technical text-xs">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-widest text-[11px]">
                <th className="py-3 px-3">Size</th>
                {activeTab === 'tops' ? (
                  <>
                    <th className="py-3 px-3">Chest Width</th>
                    <th className="py-3 px-3">Body Length</th>
                    <th className="py-3 px-3">Shoulder Span</th>
                  </>
                ) : (
                  <>
                    <th className="py-3 px-3">Waist (Relaxed)</th>
                    <th className="py-3 px-3">Inseam</th>
                    <th className="py-3 px-3">Hip Circumference</th>
                  </>
                )}
                <th className="py-3 px-3">Silhouettes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 text-zinc-300">
              {activeTab === 'tops' ? (
                SIZING_GUIDE_DATA.tops.map((row) => (
                  <tr key={row.size} className="hover:bg-zinc-900/40">
                    <td className="py-3 px-3 font-bold text-white text-sm">{row.size}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.chest.split('(')[0] : row.chest.split('(')[1]?.replace(')', '') || row.chest}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.length.split('(')[0] : row.length.split('(')[1]?.replace(')', '') || row.length}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.shoulder.split('(')[0] : row.shoulder.split('(')[1]?.replace(')', '') || row.shoulder}</td>
                    <td className="py-3 px-3 text-zinc-400 italic font-editorial text-sm">{row.fit}</td>
                  </tr>
                ))
              ) : (
                SIZING_GUIDE_DATA.bottoms.map((row) => (
                  <tr key={row.size} className="hover:bg-zinc-900/40">
                    <td className="py-3 px-3 font-bold text-white text-sm">{row.size}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.waist.split('(')[0] : row.waist.split('(')[1]?.replace(')', '') || row.waist}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.inseam.split('(')[0] : row.inseam.split('(')[1]?.replace(')', '') || row.inseam}</td>
                    <td className="py-3 px-3 tabular-nums">{unit === 'in' ? row.hip.split('(')[0] : row.hip.split('(')[1]?.replace(')', '') || row.hip}</td>
                    <td className="py-3 px-3 text-zinc-400 italic font-editorial text-sm">{row.fit}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Tailoring & Care Notes */}
        <div className="mt-8 p-4 bg-black border border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body text-zinc-400">
          <div>
            <span className="font-technical text-zinc-200 block uppercase tracking-wider mb-1">
              Gender Fit Recommendations
            </span>
            <p className="font-light leading-relaxed">
              <strong>Ladies:</strong> For a true fitted silhouette, size down one size (e.g. S for regular fit). For runway oversized drape, choose your standard size.
            </p>
          </div>
          <div>
            <span className="font-technical text-zinc-200 block uppercase tracking-wider mb-1">
              Screen Print Garment Care
            </span>
            <p className="font-light leading-relaxed">
              Turn garments inside-out. Wash on delicate cycle in cold water. Hang dry or flat dry. Never iron directly on 3D puff print.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white text-black text-xs font-technical uppercase tracking-widest hover:bg-zinc-200 transition-colors font-medium"
          >
            Acknowledge Sizing &amp; Return
          </button>
        </div>

      </div>
    </div>
  );
};
