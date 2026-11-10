import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Heart, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4500);
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Elegant Minimalist Newsletter Subscription Section */}
        <div className="border border-zinc-900 bg-zinc-950 p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Society Editorial Invitation */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-[10px] font-technical tracking-[0.35em] uppercase text-zinc-500">
                <span>The Inner Circle</span>
                <span aria-hidden="true" className="text-zinc-700">·</span>
                <span>Private Salon Access</span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal text-balance">
                Join the Free Rose Society
              </h3>

              <p className="font-body text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-lg">
                Receive confidential private invitations to hand-pulled limited screen print drops, archival canvas vernissages, and atelier salon previews. Dedicated to those who give people their flowers.
              </p>
            </div>

            {/* Right: Minimalist Form */}
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 bg-black border border-zinc-800 flex items-center gap-3 text-xs font-technical uppercase tracking-wider text-white animate-fade-in">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span>Welcome to the Society. Your invitation to private drops has been recorded.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row border border-zinc-800 bg-black focus-within:border-white transition-colors">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      className="flex-1 bg-transparent px-4 py-3.5 text-xs font-technical text-white placeholder:text-zinc-600 uppercase focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-zinc-200 text-black px-6 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors whitespace-nowrap shrink-0 focus:outline-none focus:ring-1 focus:ring-white flex items-center justify-center gap-2"
                    >
                      <span>Join the Society</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-technical text-zinc-500 uppercase tracking-widest px-1">
                    <span>Confidential Atelier Invitations</span>
                    <span>Zero Spam · Unsubscribe Anytime</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <button
                onClick={() => navigateTo('home')}
                className="text-left font-editorial text-3xl sm:text-4xl tracking-[0.2em] uppercase font-light text-white block hover:text-zinc-300 transition-colors"
              >
                FREE ROSE
              </button>
              <p className="font-editorial text-xl italic text-zinc-400">
                "You deserve your flowers."
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              Luxury screen print apparel and archival gallery art inspired by maternal devotion to Rose. Crafted in Nairobi using discharge inks, 3D puff formulations, and heavyweight Japanese selvedge denim.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-technical text-zinc-500 uppercase tracking-widest">
              <span>Ladies</span>
              <span>·</span>
              <span>Men</span>
              <span>·</span>
              <span>Unisex</span>
              <span>·</span>
              <span>Sizes S to XL</span>
            </div>
          </div>

          {/* 6 Collections Column */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-technical text-xs tracking-widest uppercase text-zinc-400 block">
              The Six Collections
            </span>
            <ul className="space-y-2 text-xs font-technical text-zinc-400">
              <li>
                <button 
                  onClick={() => navigateTo('collection-detail', 'wanisa')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Wanisa Collection (Rose Homage)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('collection-detail', 'mashujaa')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Mashujaa Collection (Heroes)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('collection-detail', 'kenyan-culture')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Kenyan Culture Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('collection-detail', 'creative-art')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Creative Art Collection (Canvas Paintings)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('collection-detail', 'athletes')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Athletes &amp; Ballers Collection
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('atelier')}
                  className="text-white hover:text-zinc-300 transition-colors uppercase tracking-wider font-semibold text-left"
                >
                  Bespoke Custom Atelier Piece
                </button>
              </li>
            </ul>
          </div>

          {/* Maison & Ateliers Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-technical text-xs tracking-widest uppercase text-zinc-400 block">
              Maison &amp; Atelier
            </span>
            <ul className="space-y-2 text-xs font-technical text-zinc-400">
              <li>
                <button 
                  onClick={() => navigateTo('story')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  The Story of Rose
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('lookbook')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Autumn / Winter Lookbook
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('craftsmanship')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Silkscreen Science &amp; Inks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('sizing')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  Sizing Matrix (S to XL)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('atelier')}
                  className="hover:text-white transition-colors uppercase tracking-wider text-left"
                >
                  1-of-1 Atelier Commission
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-technical text-zinc-400">
          <div className="flex items-center gap-2">
            <span>© 2026 FREE ROSE ATELIER.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-300">
            <span>In Eternal Dedication to Rose</span>
            <Heart className="w-3.5 h-3.5 text-zinc-400" />
            <span>"You Deserve Your Flowers"</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
