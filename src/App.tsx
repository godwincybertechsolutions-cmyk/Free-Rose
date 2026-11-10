import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';

import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { AtelierPage } from './pages/AtelierPage';
import { LookbookPage } from './pages/LookbookPage';
import { StoryPage } from './pages/StoryPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { SizingPage } from './pages/SizingPage';

import { PRODUCT_WANISA_JACKET } from './data/products';
import { Product, CartItem, ApparelSize, GenderType, CustomScreenPrintConfig } from './types/brand';

function MainApp() {
  const { currentPage, selectedCollectionId, navigateTo } = useNavigation();

  // Cart state initialized with an iconic launch piece
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-item-1',
      productId: 'wanisa-01',
      productName: 'Wanisa Archival Raw Denim Jacket',
      collectionName: 'Wanisa Collection',
      categoryName: 'Denim Jackets',
      gender: 'unisex',
      size: 'L',
      price: 380,
      image: PRODUCT_WANISA_JACKET,
      quantity: 1,
      inkFinish: 'Matte Water-Base Discharge',
      giftCardMessage: 'Dedicated to Rose — with eternal admiration.'
    }
  ]);

  // UI state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Cart operations
  const handleAddToCart = (
    product: Product,
    size: ApparelSize,
    gender: GenderType,
    quantity: number,
    giftMessage?: string
  ) => {
    const newItem: CartItem = {
      id: `cart-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      productId: product.id,
      productName: product.name,
      collectionName: product.collectionName,
      categoryName: product.categoryName,
      gender,
      size,
      price: product.price,
      image: product.image,
      quantity,
      inkFinish: product.screenPrintInk,
      giftCardMessage: giftMessage,
    };

    setCartItems((prev) => [newItem, ...prev]);
    showToast(`Added "${product.name}" (${size}) to your Bag.`);
  };

  const handleAddCustomToCart = (config: CustomScreenPrintConfig) => {
    const getBasePrice = () => {
      switch (config.garmentType) {
        case 'Raw Denim Jacket': return 390;
        case 'Selvedge Denim Trouser': return 295;
        case 'Mesh Jersey': return 215;
        case 'Court Shorts': return 165;
        case 'Archival Canvas': return 680;
        case 'Heavyweight Luxury Tee':
        default: return 165;
      }
    };

    const newItem: CartItem = {
      id: `custom-${Date.now()}`,
      productId: 'custom-bespoke',
      productName: `Bespoke Screen Print ${config.garmentType}`,
      collectionName: 'Custom Bespoke Collection',
      categoryName: config.garmentType,
      gender: config.gender,
      size: config.size,
      price: getBasePrice(),
      image: PRODUCT_WANISA_JACKET,
      quantity: 1,
      inkFinish: config.inkFinish,
      isCustom: true,
      customDetails: config,
      giftCardMessage: `Custom Dedication: "${config.customDedicationText}" [${config.customInitials}]`
    };

    setCartItems((prev) => [newItem, ...prev]);
    setIsCartOpen(true);
    showToast(`Bespoke 1-of-1 ${config.garmentType} added to your Bag.`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black flex flex-col justify-between">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-black px-5 py-3 border border-zinc-300 shadow-2xl font-technical text-xs tracking-wider uppercase animate-fade-in flex items-center gap-3">
          <span className="w-2 h-2 bg-black inline-block" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Multipage Top Bar */}
      <Navbar
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Multipage View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAddProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'collections' && (
          <CollectionsPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAddProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'collection-detail' && (
          <CollectionDetailPage
            collectionId={selectedCollectionId || 'wanisa'}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAddProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {currentPage === 'atelier' && (
          <AtelierPage
            onAddCustomToCart={handleAddCustomToCart}
          />
        )}

        {currentPage === 'lookbook' && (
          <LookbookPage />
        )}

        {currentPage === 'story' && (
          <StoryPage />
        )}

        {currentPage === 'craftsmanship' && (
          <CraftsmanshipPage />
        )}

        {currentPage === 'sizing' && (
          <SizingPage />
        )}
      </main>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizing={() => {
          setSelectedProduct(null);
          navigateTo('sizing');
        }}
      />

      {/* Slide-over Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOpenAtelier={() => navigateTo('atelier')}
      />

      {/* Persistent Luxury Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainApp />
    </NavigationProvider>
  );
}
