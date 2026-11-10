import React, { useState } from 'react';
import { CustomScreenPrintConfig, ApparelSize, GenderType, InkFinish } from '../types/brand';
import { Sparkles, Check, Info, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

interface ScreenPrintAtelierProps {
  onAddCustomToCart: (config: CustomScreenPrintConfig) => void;
  onOpenSizing: () => void;
}

export const ScreenPrintAtelier: React.FC<ScreenPrintAtelierProps> = ({
  onAddCustomToCart,
  onOpenSizing,
}) => {
  const [garmentType, setGarmentType] = useState<CustomScreenPrintConfig['garmentType']>('Heavyweight Luxury Tee');
  const [garmentColor, setGarmentColor] = useState<'Obsidian Black' | 'Chalk White'>('Obsidian Black');
  const [placement, setPlacement] = useState<CustomScreenPrintConfig['placement']>('Oversized Back Center');
  const [roseMotif, setRoseMotif] = useState<CustomScreenPrintConfig['roseMotif']>('Signature Blooming Rose');
  const [inkFinish, setInkFinish] = useState<InkFinish>('High-Density 3D Puff Print');
  const [customDedicationText, setCustomDedicationText] = useState('FOR ROSE · YOU DESERVE YOUR FLOWERS');
  const [customInitials, setCustomInitials] = useState('R.M.');
  const [size, setSize] = useState<ApparelSize>('L');
  const [gender, setGender] = useState<GenderType>('unisex');
  const [isSuccessFeedback, setIsSuccessFeedback] = useState(false);

  const getBasePrice = () => {
    switch (garmentType) {
      case 'Raw Denim Jacket': return 390;
      case 'Selvedge Denim Trouser': return 295;
      case 'Mesh Jersey': return 215;
      case 'Court Shorts': return 165;
      case 'Archival Canvas': return 680;
      case 'Heavyweight Luxury Tee':
      default: return 165;
    }
  };

  const handleCommission = () => {
    onAddCustomToCart({
      garmentType,
      garmentColor,
      placement,
      roseMotif,
      inkFinish,
      customDedicationText: customDedicationText.trim() || 'YOU DESERVE YOUR FLOWERS',
      customInitials: customInitials.trim().toUpperCase() || 'FR',
      size,
      gender,
    });

    setIsSuccessFeedback(true);
    setTimeout(() => setIsSuccessFeedback(false), 3000);
  };

  return (
    <section id="atelier" className="py-20 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.3em] uppercase text-zinc-400 font-technical">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>Screen Print Atelier</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Bespoke 1-of-1 Commission</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal text-balance">
            Craft Your Custom Screen Print
          </h2>

          <p className="font-body text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Every garment tells a story of gratitude. Personalize your silkscreen finish, botanical rose artwork, and dedicated inscription to honor your mother, mentor, or hero.
          </p>
        </div>

        {/* 2-Column Atelier Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Live Screen Print Garment Visualizer */}
          <div className="lg:col-span-6 sticky top-24">
            <div className={`relative aspect-square w-full rounded-none border border-zinc-800 p-8 flex flex-col items-center justify-center transition-colors duration-500 ${
              garmentColor === 'Obsidian Black' ? 'bg-[#0a0a0c]' : 'bg-[#e5e5e7]'
            }`}>
              
              {/* Garment Silhouette Wireframe */}
              <div className="relative w-full h-full max-w-md flex flex-col items-center justify-center">
                
                {/* SVG Garment Outline */}
                <svg
                  viewBox="0 0 400 400"
                  className={`w-full h-full drop-shadow-2xl transition-colors duration-500 ${
                    garmentColor === 'Obsidian Black' ? 'text-zinc-900 fill-zinc-950 stroke-zinc-800' : 'text-zinc-100 fill-zinc-200 stroke-zinc-300'
                  }`}
                  strokeWidth="1.5"
                >
                  {garmentType === 'Raw Denim Jacket' ? (
                    // Jacket Silhouette
                    <path d="M 120 70 L 160 50 L 240 50 L 280 70 L 360 140 L 320 180 L 290 145 L 290 350 L 110 350 L 110 145 L 80 180 L 40 140 Z" />
                  ) : garmentType === 'Selvedge Denim Trouser' ? (
                    // Trouser Silhouette
                    <path d="M 130 60 L 270 60 L 260 360 L 210 360 L 200 170 L 190 360 L 140 360 Z" />
                  ) : garmentType === 'Court Shorts' ? (
                    // Shorts Silhouette
                    <path d="M 120 70 L 280 70 L 290 260 L 220 260 L 200 160 L 180 260 L 110 260 Z" />
                  ) : garmentType === 'Mesh Jersey' ? (
                    // Jersey Silhouette
                    <path d="M 130 50 L 170 50 L 200 90 L 230 50 L 270 50 L 310 130 L 280 140 L 270 120 L 270 350 L 130 350 L 130 120 L 120 140 L 90 130 Z" />
                  ) : garmentType === 'Archival Canvas' ? (
                    // Canvas Silhouette
                    <rect x="70" y="40" width="260" height="320" rx="2" />
                  ) : (
                    // Heavyweight Tee Silhouette (Default)
                    <path d="M 120 70 Q 200 95 280 70 L 350 140 L 305 180 L 280 145 L 280 355 L 120 355 L 120 145 L 95 180 L 50 140 Z" />
                  )}
                </svg>

                {/* Silkscreen Ink Render on Garment */}
                <div className={`absolute flex flex-col items-center justify-center text-center p-4 transition-all duration-300 pointer-events-none ${
                  placement === 'Left Chest Emblem' ? 'top-28 left-24 scale-65' :
                  placement === 'Sleeve & Trouser Stamp' ? 'bottom-20 right-20 scale-75' :
                  placement === 'Full Front Graphic' ? 'inset-0 scale-95' :
                  'inset-0 scale-100' // Oversized Back Center
                }`}>
                  
                  {/* Brand Monogram */}
                  <span className={`font-technical text-[10px] tracking-[0.4em] uppercase mb-1 transition-colors ${
                    garmentColor === 'Obsidian Black' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    FREE ROSE · ATELIER [{customInitials}]
                  </span>

                  {/* Silkscreen Rose Artwork Render */}
                  <div className={`relative my-2 transition-transform duration-300 ${
                    inkFinish === 'High-Density 3D Puff Print' ? 'scale-105 screen-print-puff' :
                    inkFinish === 'Vintage Distressed Crackle' ? 'opacity-85 screen-print-crackle' :
                    inkFinish === 'Silversmith Foil Shimmer' ? 'brightness-125' :
                    'screen-print-discharge'
                  }`}>
                    {roseMotif === 'Signature Blooming Rose' ? (
                      // Botanical Rose Vector
                      <svg viewBox="0 0 100 100" className={`w-32 h-32 ${garmentColor === 'Obsidian Black' ? 'stroke-white fill-none' : 'stroke-black fill-none'}`} strokeWidth="1.5">
                        <path d="M 50 20 C 40 20 30 30 35 45 C 40 55 50 65 50 70 C 50 65 60 55 65 45 C 70 30 60 20 50 20 Z" />
                        <path d="M 45 35 C 40 38 42 48 50 50 C 58 48 60 38 55 35 C 50 30 46 32 45 35 Z" />
                        <circle cx="50" cy="40" r="5" />
                        <path d="M 50 70 L 50 90 M 45 78 L 38 74 M 55 84 L 62 80" strokeLinecap="round" />
                        <circle cx="50" cy="38" r="14" strokeDasharray="3 2" />
                      </svg>
                    ) : roseMotif === 'Rose Stem & Thorns' ? (
                      // Stem & Thorns Vector
                      <svg viewBox="0 0 100 100" className={`w-32 h-32 ${garmentColor === 'Obsidian Black' ? 'stroke-white fill-none' : 'stroke-black fill-none'}`} strokeWidth="1.5">
                        <path d="M 50 15 L 50 85 M 50 35 L 35 30 M 50 50 L 65 45 M 50 65 L 38 68" strokeLinecap="round" />
                        <circle cx="50" cy="20" r="8" />
                        <path d="M 42 20 Q 50 10 58 20" />
                      </svg>
                    ) : roseMotif === 'Geometric Kenyan Rose' ? (
                      // Geometric Diamond Lattice Rose
                      <svg viewBox="0 0 100 100" className={`w-32 h-32 ${garmentColor === 'Obsidian Black' ? 'stroke-white fill-none' : 'stroke-black fill-none'}`} strokeWidth="1.5">
                        <polygon points="50,15 80,50 50,85 20,50" />
                        <polygon points="50,28 68,50 50,72 32,50" />
                        <circle cx="50" cy="50" r="6" />
                        <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="2 2" />
                        <line x1="20" y1="50" x2="80" y2="50" strokeDasharray="2 2" />
                      </svg>
                    ) : (
                      // Abstract Painterly Rose
                      <svg viewBox="0 0 100 100" className={`w-32 h-32 ${garmentColor === 'Obsidian Black' ? 'stroke-white fill-none' : 'stroke-black fill-none'}`} strokeWidth="2">
                        <path d="M 30 40 Q 50 10 70 35 Q 85 60 55 75 Q 25 80 25 55 Q 25 30 50 30" strokeDasharray="6 3" />
                        <path d="M 40 45 Q 50 35 60 48 Q 55 60 45 58" />
                        <line x1="50" y1="75" x2="50" y2="92" strokeWidth="3" />
                      </svg>
                    )}
                  </div>

                  {/* Custom Dedication Typography */}
                  <span className={`font-editorial tracking-[0.2em] uppercase text-xs font-semibold max-w-[200px] leading-tight ${
                    garmentColor === 'Obsidian Black' ? 'text-white' : 'text-black'
                  }`}>
                    {customDedicationText}
                  </span>

                  {/* Silkscreen Technical Badge */}
                  <span className={`font-technical text-[9px] tracking-widest uppercase mt-2 opacity-60 ${
                    garmentColor === 'Obsidian Black' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    SILKSCREEN · {inkFinish}
                  </span>
                </div>
              </div>

              {/* Bottom Visualizer Spec Bar */}
              <div className="w-full flex items-center justify-between pt-4 border-t border-zinc-800 text-[11px] font-technical tracking-wider text-zinc-400">
                <span>SIMULATED SCREEN PRINT MESH: 305</span>
                <span>FINISH: {inkFinish.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Configuration Form */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Step 1: Garment Type */}
            <div className="space-y-3">
              <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase">
                01. Select Garment Canvas
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Heavyweight Luxury Tee',
                  'Raw Denim Jacket',
                  'Selvedge Denim Trouser',
                  'Mesh Jersey',
                  'Court Shorts',
                  'Archival Canvas',
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => setGarmentType(item as any)}
                    className={`py-2.5 px-3 text-xs tracking-wider text-left border transition-all ${
                      garmentType === item
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Base Garment Shade */}
            <div className="space-y-3">
              <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase">
                02. Garment Palette (Pure Monochrome)
              </label>
              <div className="flex gap-4">
                {(['Obsidian Black', 'Chalk White'] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setGarmentColor(color)}
                    className={`flex items-center gap-3 py-2 px-4 border text-xs tracking-widest uppercase transition-all ${
                      garmentColor === color
                        ? 'border-white bg-zinc-900 text-white font-medium ring-1 ring-white'
                        : 'border-zinc-800 bg-black text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-none border ${
                        color === 'Obsidian Black' ? 'bg-black border-zinc-700' : 'bg-white border-zinc-300'
                      }`}
                    />
                    <span>{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Screen Print Placement */}
            <div className="space-y-3">
              <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase">
                03. Silkscreen Placement
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Oversized Back Center',
                  'Left Chest Emblem',
                  'Full Front Graphic',
                  'Sleeve & Trouser Stamp',
                ].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlacement(p as any)}
                    className={`py-2 px-3 text-xs tracking-wider text-left border transition-all ${
                      placement === p
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Botanical Rose Motif */}
            <div className="space-y-3">
              <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase">
                04. Botanical Rose Emblem
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Signature Blooming Rose',
                  'Rose Stem & Thorns',
                  'Geometric Kenyan Rose',
                  'Abstract Painterly Rose',
                ].map((motif) => (
                  <button
                    key={motif}
                    onClick={() => setRoseMotif(motif as any)}
                    className={`py-2 px-3 text-xs tracking-wider text-left border transition-all ${
                      roseMotif === motif
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {motif}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Screen Print Ink Chemistry */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-technical text-xs tracking-widest text-zinc-400 uppercase">
                  05. Silkscreen Ink Chemistry
                </label>
                <span className="text-[11px] font-technical text-zinc-500">Hand-Pulled in Nairobi</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'High-Density 3D Puff Print', desc: 'Tactile raised emboss texture' },
                  { id: 'Matte Water-Base Discharge', desc: 'Penetrates yarn, ultra-soft hand feel' },
                  { id: 'Vintage Distressed Crackle', desc: 'Micro-fractured archival gallery look' },
                  { id: 'Silversmith Foil Shimmer', desc: 'Monochrome metallic reflective highlight' },
                ].map((ink) => (
                  <button
                    key={ink.id}
                    onClick={() => setInkFinish(ink.id as any)}
                    className={`py-2.5 px-3 text-left border transition-all ${
                      inkFinish === ink.id
                        ? 'border-white bg-white text-black'
                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <span className="block text-xs font-semibold tracking-wider">{ink.id}</span>
                    <span className="block text-[11px] opacity-70 mt-0.5">{ink.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Personalized Dedication Text & Monogram */}
            <div className="space-y-4 pt-2">
              <div>
                <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase mb-1.5">
                  06. Commemorative Flower Dedication
                </label>
                <input
                  type="text"
                  maxLength={48}
                  value={customDedicationText}
                  onChange={(e) => setCustomDedicationText(e.target.value)}
                  placeholder="e.g. FOR ROSE · YOU DESERVE YOUR FLOWERS"
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-xs tracking-widest text-white uppercase focus:border-white focus:outline-none"
                />
                <span className="block text-[10px] text-zinc-500 font-technical mt-1">
                  Screen printed in luxury serif typography directly beneath the botanical blossom.
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-technical text-xs tracking-widest text-zinc-400 uppercase mb-1.5">
                    Client Monogram
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    value={customInitials}
                    onChange={(e) => setCustomInitials(e.target.value.toUpperCase())}
                    placeholder="e.g. R.M."
                    className="w-full bg-black border border-zinc-800 px-4 py-2.5 text-xs tracking-widest text-white uppercase focus:border-white focus:outline-none"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-technical text-xs tracking-widest text-zinc-400 uppercase">
                      Gender Tailoring
                    </label>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {(['unisex', 'ladies', 'men'] as const).map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`py-2 text-[11px] uppercase tracking-wider border text-center ${
                          gender === g ? 'border-white bg-white text-black font-semibold' : 'border-zinc-800 text-zinc-400'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7: Sizing Spectrum (S to XL) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-technical text-xs tracking-widest text-zinc-400 uppercase">
                  07. Select Size (Small to Extra Large)
                </label>
                <button
                  onClick={onOpenSizing}
                  className="font-technical text-[11px] text-zinc-400 hover:text-white underline underline-offset-4 tracking-wider uppercase"
                >
                  View Measurements
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {(['S', 'M', 'L', 'XL'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-3 text-center border font-technical text-xs tracking-widest transition-all ${
                      size === s
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-zinc-800 bg-black text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Commission Summary & Order CTA */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-technical text-xs uppercase tracking-widest text-zinc-400 block">
                    Bespoke Atelier Commission
                  </span>
                  <span className="font-editorial text-2xl text-white">
                    1-of-1 Tailored Screen Print
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-technical text-2xl tabular-nums text-white">
                    ${getBasePrice()}
                  </span>
                  <span className="block text-[11px] font-technical text-zinc-500 uppercase">
                    Free Atelier Delivery
                  </span>
                </div>
              </div>

              <button
                onClick={handleCommission}
                className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-4 px-6 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-3 focus:outline-none focus:ring-1 focus:ring-white"
              >
                {isSuccessFeedback ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>Commission Added to Bag</span>
                  </>
                ) : (
                  <>
                    <span>Commission Custom Screen Print</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 text-[11px] font-technical tracking-wider text-zinc-500 uppercase">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Archival Screen Burn
                </span>
                <span>·</span>
                <span>Crafted in 4-6 Atelier Days</span>
                <span>·</span>
                <span>Rose Dedicated Box Included</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
