import React from 'react';
import { ShoppingBag, Ruler, Sparkles, Heart } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import freeRoseLogo from '../Public/assets/Logo/Free Rose — Concept A_ Unbound wordmark-Photoroom.png';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
}) => {
  const { currentPage, navigateTo } = useNavigation();

  return (
    <header className="sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <button
          onClick={() => navigateTo('home')}
          className="text-left group flex items-center gap-3 focus:outline-none"
          aria-label="Free Rose Home"
        >
          <img
            src={freeRoseLogo}
            alt="Free Rose"
            className="h-10 sm:h-12 w-auto object-contain invert brightness-200 transition-all duration-300 group-hover:opacity-80"
            style={{ filter: 'invert(1) brightness(2)' }}
          />
          <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-technical border-l border-zinc-800 pl-3">
            Atelier
          </span>
        </button>

        {/* Zone 2: Multipage Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.18em] uppercase text-zinc-400">
          <button
            onClick={() => navigateTo('collections')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
              currentPage === 'collections' || currentPage === 'collection-detail' 
                ? 'text-white border-white' 
                : 'border-transparent'
            }`}
          >
            Collections
          </button>
          
          <button
            onClick={() => navigateTo('atelier')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b flex items-center gap-1.5 ${
              currentPage === 'atelier' ? 'text-white border-white' : 'border-transparent'
            }`}
          >
            <Sparkles className="w-3 h-3 text-zinc-400" />
            <span>Custom Atelier</span>
          </button>

          <button
            onClick={() => navigateTo('lookbook')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
              currentPage === 'lookbook' ? 'text-white border-white' : 'border-transparent'
            }`}
          >
            Lookbook
          </button>

          <button
            onClick={() => navigateTo('craftsmanship')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b ${
              currentPage === 'craftsmanship' ? 'text-white border-white' : 'border-transparent'
            }`}
          >
            Craftsmanship
          </button>

          <button
            onClick={() => navigateTo('story')}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b flex items-center gap-1.5 ${
              currentPage === 'story' ? 'text-white border-white' : 'border-transparent'
            }`}
          >
            <Heart className="w-3 h-3 text-zinc-400" />
            <span>Homage to Rose</span>
          </button>
        </nav>

        {/* Zone 3: Sizing Matrix & Bag Action */}
        <div className="flex items-center gap-3.5 shrink-0">
          <button
            onClick={() => navigateTo('sizing')}
            className={`hidden sm:flex items-center gap-2 text-xs tracking-wider uppercase transition-colors py-2 px-3 border rounded-none ${
              currentPage === 'sizing'
                ? 'border-white bg-zinc-900 text-white'
                : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
            title="Luxury Sizing & Measurements (S to XL)"
          >
            <Ruler className="w-3.5 h-3.5" />
            <span className="font-technical text-[11px]">Size Matrix</span>
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2.5 bg-white text-black hover:bg-zinc-200 transition-colors px-4 py-2.5 text-xs font-semibold tracking-widest uppercase focus:outline-none focus:ring-1 focus:ring-white"
            aria-label={`Shopping bag containing ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="font-technical text-[11px]">
              BAG ({cartCount})
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="md:hidden flex items-center justify-around py-2.5 border-t border-zinc-900 bg-zinc-950 text-[11px] font-technical uppercase tracking-wider text-zinc-400">
        <button 
          onClick={() => navigateTo('collections')}
          className={currentPage === 'collections' ? 'text-white font-bold' : ''}
        >
          Collections
        </button>
        <button 
          onClick={() => navigateTo('atelier')}
          className={currentPage === 'atelier' ? 'text-white font-bold' : ''}
        >
          Atelier
        </button>
        <button 
          onClick={() => navigateTo('lookbook')}
          className={currentPage === 'lookbook' ? 'text-white font-bold' : ''}
        >
          Lookbook
        </button>
        <button 
          onClick={() => navigateTo('story')}
          className={currentPage === 'story' ? 'text-white font-bold' : ''}
        >
          Rose Story
        </button>
        <button 
          onClick={() => navigateTo('sizing')}
          className={currentPage === 'sizing' ? 'text-white font-bold' : ''}
        >
          Sizing
        </button>
      </div>
    </header>
  );
};
