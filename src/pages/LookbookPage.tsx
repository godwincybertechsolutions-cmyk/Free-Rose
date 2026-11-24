import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { LookbookSection } from '../components/LookbookSection';

export const LookbookPage: React.FC = () => {
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
          <span className="text-zinc-300">Lookbook AW26 Campaign</span>
        </div>
      </div>

      {/* Editorial Spread Component */}
      <LookbookSection onExploreCollections={() => navigateTo('collections')} />


    </div>
  );
};
