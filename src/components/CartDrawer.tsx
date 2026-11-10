import React, { useState } from 'react';
import { CartItem } from '../types/brand';
import { X, Trash2, Plus, Minus, ShieldCheck, ArrowRight, Check, Heart, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOpenAtelier: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenAtelier,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [customerName, setCustomerName] = useState('Godwin');
  const [customerEmail, setCustomerEmail] = useState('godwincybertechsolutions@gmail.com');
  const [shippingAddress, setShippingAddress] = useState('Nairobi / International Priority');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      const generatedOrder = `FR-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsCheckingOut(false);
      setOrderConfirmed(true);
      onClearCart();
    }, 1500);
  };

  const handleReset = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-zinc-950 border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-editorial text-2xl text-white">Your Atelier Bag</span>
            <span className="block text-[11px] font-technical text-zinc-500 uppercase tracking-widest">
              {items.length} {items.length === 1 ? 'Creation' : 'Creations'} · Free Worldwide Courier
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          
          {orderConfirmed ? (
            /* Post-Order Confirmation View */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-white text-black flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-technical tracking-[0.25em] uppercase text-zinc-500 block">
                  Order Confirmed · Preparing Silkscreen
                </span>
                <h3 className="font-editorial text-3xl text-white">
                  Thank You, {customerName}
                </h3>
                <p className="font-editorial text-xl italic text-zinc-300">
                  "You deserve your flowers."
                </p>
              </div>

              {/* Order Certificate */}
              <div className="p-5 bg-black border border-zinc-800 text-left space-y-3 font-technical text-xs">
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 uppercase">Order Dossier:</span>
                  <span className="text-white font-bold">{orderNumber}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 uppercase">Dedicated To:</span>
                  <span className="text-zinc-300">Rose &amp; Client Dedication</span>
                </div>
                <div className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-zinc-500 uppercase">Dispatch Destination:</span>
                  <span className="text-zinc-300 truncate max-w-[180px]">{shippingAddress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 uppercase">Confirmation Sent:</span>
                  <span className="text-zinc-300 truncate max-w-[180px]">{customerEmail}</span>
                </div>
              </div>

              <p className="font-body text-xs text-zinc-400 font-light leading-relaxed">
                Your screen-printed piece is queued for hand-pulling at the Free Rose Atelier. Each creation is packed in an archival matte black box with a fresh-pressed scented flower card.
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3.5 bg-white text-black font-semibold uppercase tracking-[0.2em] text-xs hover:bg-zinc-200 transition-colors"
              >
                Return to Collections
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Bag State */
            <div className="py-16 text-center space-y-4">
              <span className="font-editorial text-4xl text-zinc-700 block">∅</span>
              <h3 className="font-editorial text-2xl text-white">Your Bag is Empty</h3>
              <p className="font-body text-xs text-zinc-400 font-light max-w-xs mx-auto">
                Explore our six collections or commission a bespoke 1-of-1 screen printed garment dedicated to Rose or your loved one.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-white text-black text-xs font-technical uppercase tracking-widest hover:bg-zinc-200 transition-colors"
                >
                  Browse Creations
                </button>
                <button
                  onClick={() => { onClose(); onOpenAtelier(); }}
                  className="px-6 py-3 border border-zinc-800 text-zinc-300 text-xs font-technical uppercase tracking-widest hover:border-white hover:text-white transition-colors"
                >
                  Custom Screen Print Atelier
                </button>
              </div>
            </div>
          ) : (
            /* Items List */
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 bg-black border border-zinc-900 flex gap-4 items-start"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-zinc-900 border border-zinc-800 shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.productName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-technical uppercase tracking-widest text-zinc-500">
                        {item.collectionName}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-zinc-600 hover:text-zinc-300 transition-colors"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="font-editorial text-base text-white font-normal line-clamp-1">
                      {item.productName}
                    </h4>

                    {/* Size & Gender & Ink */}
                    <div className="flex items-center gap-2 text-[11px] font-technical text-zinc-400">
                      <span>Size: <strong className="text-white">{item.size}</strong></span>
                      <span>·</span>
                      <span className="uppercase">{item.gender}</span>
                    </div>

                    {item.inkFinish && (
                      <span className="block text-[10px] font-technical text-zinc-500">
                        Ink: {item.inkFinish}
                      </span>
                    )}

                    {item.customDetails && (
                      <div className="text-[10px] font-technical text-zinc-400 bg-zinc-950 p-2 border border-zinc-800 mt-1 space-y-0.5">
                        <span className="block text-zinc-300">Custom Inscription: "{item.customDetails.customDedicationText}"</span>
                        <span className="block text-zinc-500">Placement: {item.customDetails.placement} [{item.customDetails.customInitials}]</span>
                      </div>
                    )}

                    {item.giftCardMessage && (
                      <div className="text-[10px] font-editorial italic text-zinc-300 border-l border-zinc-700 pl-2 mt-1">
                        Card: "{item.giftCardMessage}"
                      </div>
                    )}

                    {/* Price & Stepper */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-technical text-sm text-white tabular-nums">
                        ${item.price * item.quantity}
                      </span>

                      <div className="flex items-center border border-zinc-800 bg-zinc-950">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="p-1 text-zinc-400 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-technical text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="p-1 text-zinc-400 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

              {/* Complimentary Gift Box Guarantee */}
              <div className="p-4 bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <Heart className="w-4 h-4 text-zinc-300 shrink-0" />
                <div className="text-xs font-body text-zinc-400">
                  <span className="text-zinc-200 block font-medium">Complimentary "Flowers" Presentation Box</span>
                  Every order includes an archival presentation box with pressed rose botanical cards.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Bottom Checkout Section (Only if items exist and not confirmed) */}
        {!orderConfirmed && items.length > 0 && (
          <div className="p-6 bg-zinc-950 border-t border-zinc-800 space-y-4">
            
            <div className="space-y-1.5 text-xs font-technical">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span className="text-white tabular-nums">${subtotal}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Worldwide Insured Courier</span>
                <span className="text-white uppercase">Complimentary</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Hand-Screened Certificate</span>
                <span className="text-white uppercase">Included</span>
              </div>
              <div className="flex justify-between text-base font-editorial text-white pt-2 border-t border-zinc-900">
                <span>Total Investment</span>
                <span className="font-technical font-bold tabular-nums text-lg">${subtotal}</span>
              </div>
            </div>

            {/* Quick Checkout Form */}
            <form onSubmit={handleCompleteOrder} className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Your Name"
                  className="bg-black border border-zinc-800 px-3 py-2 text-xs font-technical text-white focus:border-white focus:outline-none"
                />
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Your Email"
                  className="bg-black border border-zinc-800 px-3 py-2 text-xs font-technical text-white focus:border-white focus:outline-none"
                />
              </div>

              <input
                type="text"
                required
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Shipping Address (City, Country)"
                className="w-full bg-black border border-zinc-800 px-3 py-2 text-xs font-technical text-white focus:border-white focus:outline-none"
              />

              <button
                type="submit"
                disabled={isCheckingOut}
                className="w-full bg-white hover:bg-zinc-200 text-black py-4 px-6 text-xs font-semibold tracking-[0.25em] uppercase flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Reserving Atelier Capacity...</span>
                ) : (
                  <>
                    <span>Confirm Atelier Acquisition</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 text-[10px] font-technical uppercase tracking-wider text-zinc-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Guaranteed Hand-Pulled Screen Print
              </span>
              <span>·</span>
              <span>Dedicated to Rose</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
