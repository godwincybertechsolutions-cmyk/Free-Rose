import React, { createContext, useContext, useState, useEffect } from 'react';
import { CollectionId } from '../types/brand';

export type PageRoute = 
  | 'home'
  | 'collections'
  | 'collection-detail'
  | 'atelier'
  | 'lookbook'
  | 'sizing';

interface NavigationContextType {
  currentPage: PageRoute;
  selectedCollectionId: CollectionId | null;
  navigateTo: (page: PageRoute, collectionId?: CollectionId) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState<CollectionId | null>(null);

  // Sync with window.location.hash for true browser history & direct URL support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === '/' || hash === 'home') {
        setCurrentPage('home');
        setSelectedCollectionId(null);
      } else if (hash.startsWith('collection/')) {
        const id = hash.split('/')[1] as CollectionId;
        setCurrentPage('collection-detail');
        setSelectedCollectionId(id);
      } else if (hash === 'collections') {
        setCurrentPage('collections');
        setSelectedCollectionId(null);
      } else if (hash === 'atelier') {
        setCurrentPage('atelier');
      } else if (hash === 'lookbook') {
        setCurrentPage('lookbook');
      } else if (hash === 'sizing') {
        setCurrentPage('sizing');
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const navigateTo = (page: PageRoute, collectionId?: CollectionId) => {
    setCurrentPage(page);
    if (page === 'collection-detail' && collectionId) {
      setSelectedCollectionId(collectionId);
      window.location.hash = `collection/${collectionId}`;
    } else if (page === 'home') {
      setSelectedCollectionId(null);
      window.location.hash = '';
    } else {
      setSelectedCollectionId(null);
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, selectedCollectionId, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
