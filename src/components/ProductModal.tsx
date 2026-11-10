import React, { useState } from 'react';
import { Product, ApparelSize, GenderType } from '../types/brand';
import { X, Check, ShieldCheck, Ruler, Heart, Sparkles, Plus, Minus } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: ApparelSize, gender: GenderType, quantity: number, giftMessage?: string) => void;
  onOpenSizing: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizing,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<ApparelSize>(product.availableSizes[0] || 'M');
  const [selectedGender, setSelectedGender] = useState<GenderType>(product.gender);
  const [quantity, setQuantity] = useState(1);
  const [includeGiftCard, setIncludeGiftCard] = useState(false);
  const [giftCardMessage, setGiftCardMessage] = useState('To the one who deserves their flowers — with eternal love.');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(
      product,
      selectedSize,
      selectedGender,
      quantity,
      includeGiftCard ? giftCardMessage : undefined
    );
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 my-8 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
          aria-label="Close product view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Left Column: Image & Silk Screen Texture Zoom */}
          <div className="lg:col-span-6 bg-zinc-900 relative border-b lg:border-b-0 lg:border-r border-zinc-800">
            <div 
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative aspect-[3/4] w-full overflow-hidden cursor-zoom-in"
              title="Click to toggle high-detail screen print inspection"
            >
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center grayscale contrast-110 transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
              />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="bg-black/90 text-zinc-300 text-[10px] font-technical tracking-widest uppercase px-2.5 py-1 border border-zinc-800">
                  {isZoomed ? 'Screen Print Texture Zoomed' : 'Click to Inspect Ink Texture'}
                </span>
                <span className="bg-white text-black text-[10px] font-technical tracking-widest uppercase px-2 py-1 font-bold">
                  {product.screenPrintInk}
                </span>
              </div>
            </div>

            {/* Micro Details Footnote */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-[11px] font-technical text-zinc-400 flex items-center justify-between">
              <span>EDITION: {product.editionLimit || 'ATELIER RUN'}</span>
              <span>ORIGIN: NAIROBI SILKSCREEN ATELIER</span>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 max-h-[85vh] overflow-y-auto">
            
            {/* Header info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-technical tracking-[0.25em] text-zinc-400 uppercase">
                <span>{product.collectionName}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>{product.categoryName}</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-4 pt-1">
                <span className="font-technical text-2xl text-white tabular-nums tracking-wide">
                  ${product.price}
                </span>
                <span className="text-xs font-technical text-zinc-500 uppercase tracking-widest">
                  Includes Custom Rose Box
                </span>
              </div>

              <p className="font-body text-xs sm:text-sm text-zinc-300 font-light leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            {/* Screen Print & Fabric Craftsmanship Specs */}
            <div className="space-y-3 p-4 bg-zinc-900/60 border border-zinc-800">
              <div className="flex items-center gap-2 text-[11px] font-technical tracking-wider text-zinc-300 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                <span>Screen Print Formulation &amp; Textiles</span>
              </div>
              <p className="font-body text-xs text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-200 font-medium">Ink Chemistry: </strong>
                {product.screenPrintStory}
              </p>
              <p className="font-body text-xs text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-200 font-medium">Textile Specs: </strong>
                {product.fabricDetails}
              </p>
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <label className="block text-xs font-technical tracking-widest text-zinc-400 uppercase">
                Gender Silhouette
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['unisex', 'ladies', 'men'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`py-2 px-3 text-xs tracking-wider uppercase border transition-all ${
                      selectedGender === g
                        ? 'border-white bg-white text-black font-semibold'
                        : 'border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector (S, M, L, XL) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-technical tracking-widest text-zinc-400 uppercase">
                  Select Size (Small to Extra Large)
                </label>
                <button
                  onClick={onOpenSizing}
                  className="flex items-center gap-1.5 text-[11px] font-technical text-zinc-400 hover:text-white uppercase tracking-wider underline underline-offset-4"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Size Chart</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.availableSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-2.5 text-center border font-technical text-xs tracking-widest transition-all ${
                      selectedSize === s
                        ? 'border-white bg-white text-black font-bold'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* "Send Flowers" Gift Box Note */}
            <div className="pt-2 border-t border-zinc-900 space-y-3">
              <div 
                onClick={() => setIncludeGiftCard(!includeGiftCard)}
                className="flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                    includeGiftCard ? 'border-white bg-white text-black' : 'border-zinc-700 bg-black'
                  }`}>
                    {includeGiftCard && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-technical uppercase tracking-wider text-zinc-300 group-hover:text-white">
                    Send as a Gift ("Give Someone Their Flowers")
                  </span>
                </div>
                <Heart className={`w-3.5 h-3.5 transition-colors ${includeGiftCard ? 'text-white' : 'text-zinc-600'}`} />
              </div>

              {includeGiftCard && (
                <div className="space-y-2 bg-black p-3 border border-zinc-800">
                  <label className="block text-[11px] font-technical uppercase tracking-wider text-zinc-400">
                    Complimentary Embossed Card Dedication:
                  </label>
                  <textarea
                    rows={2}
                    maxLength={140}
                    value={giftCardMessage}
                    onChange={(e) => setGiftCardMessage(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 p-2 text-xs font-editorial text-zinc-200 italic focus:border-white focus:outline-none"
                  />
                  <span className="text-[10px] font-technical text-zinc-500 block">
                    Hand-inscribed on archival cotton paper in our Nairobi studio.
                  </span>
                </div>
              )}
            </div>

            {/* Quantity Stepper & Add to Bag */}
            <div className="pt-4 border-t border-zinc-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-zinc-800 bg-black">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                    className="p-2.5 text-zinc-400 hover:text-white disabled:opacity-30"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 font-technical text-xs text-white tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-zinc-400 hover:text-white"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={isAdded}
                  className="flex-1 bg-white hover:bg-zinc-200 text-black py-3.5 px-6 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-1 focus:ring-white"
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 text-black" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag · ${(product.price * quantity)}</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-technical tracking-wider text-zinc-500 uppercase pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Screen Printed in Kenya
                </span>
                <span>Worldwide Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
