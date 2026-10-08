import React, { useState, useMemo } from 'react';
import { NavPage, Product, FilterState } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComingSoonModal } from './components/ComingSoonModal';
import { ProductModal } from './components/ProductModal';
import { TeamOrderModal } from './components/TeamOrderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ShowcasePage } from './pages/ShowcasePage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Coming Soon Modal State
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [comingSoonTitle, setComingSoonTitle] = useState('Online Ordering');
  const [comingSoonMessage, setComingSoonMessage] = useState<string | undefined>(undefined);

  // Team Order Modal State
  const [teamOrderOpen, setTeamOrderOpen] = useState(false);

  // Global Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Shop Filter State (Internal category, brand, and search filter)
  const [shopFilters, setShopFilters] = useState<FilterState>({
    search: '',
    sport: '',
    category: '',
    subcategory: '',
    brand: '',
    availability: '',
    sortBy: 'featured'
  });

  // Featured and Highlighted subsets
  const featuredProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.status === 'Featured');
  }, []);

  const newArrivals = useMemo(() => {
    return PRODUCTS.filter(p => p.status === 'Regular').slice(0, 6);
  }, []);

  // Handlers
  const handleOpenComingSoon = (title: string, message?: string) => {
    setComingSoonTitle(title);
    setComingSoonMessage(message);
    setComingSoonOpen(true);
  };

  const handleNavigate = (page: NavPage) => {
    // Redirection safety for legacy routes
    const target = page as string;
    if (target === 'sports' || target === 'brands') {
      setCurrentPage('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'gallery') {
      setCurrentPage('showcase');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (target === 'contact') {
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setShopFilters({
      search: '',
      sport: category || '',
      category: '',
      subcategory: '',
      brand: '',
      availability: '',
      sortBy: 'featured'
    });
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (query: string) => {
    setShopFilters(prev => ({
      ...prev,
      search: query
    }));
    setCurrentPage('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setShopFilters(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const handleResetFilters = () => {
    setShopFilters({
      search: '',
      sport: '',
      category: '',
      subcategory: '',
      brand: '',
      availability: '',
      sortBy: 'featured'
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07110D] text-zinc-100 font-sans pb-16 sm:pb-0">
      
      {/* 1. Header & Navigation (Strictly Home | Shop | Showcase | About) */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCategory={handleSelectCategory}
            onSelectProduct={setSelectedProduct}
            onOpenComingSoon={handleOpenComingSoon}
            onOpenTeamOrder={() => setTeamOrderOpen(true)}
            featuredProducts={featuredProducts}
            newArrivals={newArrivals}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            filterState={shopFilters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            onSelectProduct={setSelectedProduct}
            onOpenComingSoon={handleOpenComingSoon}
          />
        )}

        {currentPage === 'showcase' && (
          <ShowcasePage
            onOpenTeamOrder={() => setTeamOrderOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
        onOpenComingSoon={handleOpenComingSoon}
      />

      {/* Modals */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenComingSoon={handleOpenComingSoon}
      />

      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        featureTitle={comingSoonTitle}
        contextMessage={comingSoonMessage}
      />

      <TeamOrderModal
        isOpen={teamOrderOpen}
        onClose={() => setTeamOrderOpen(false)}
      />

      {/* Mobile Sticky Bottom Action Bar & Desktop Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
