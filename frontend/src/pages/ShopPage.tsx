import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  Search, 
  X, 
  SlidersHorizontal, 
  ChevronDown, 
  Check, 
  RotateCcw,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { Product, SportType, FilterState } from '../types';
import { SPORTS_LIST } from '../data/sports';
import { ProductCard } from '../components/ProductCard';
import { getWhatsAppUrl } from '../constants/contact';

interface ShopPageProps {
  products: Product[];
  filterState: FilterState;
  onFilterChange: (newFilter: Partial<FilterState>) => void;
  onResetFilters: () => void;
  onSelectProduct: (product: Product) => void;
  onOpenComingSoon: (feature: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  filterState,
  onFilterChange,
  onResetFilters,
  onSelectProduct,
  onOpenComingSoon
}) => {
  const [mobileFilterDrawerOpen, setMobileFilterDrawerOpen] = useState(false);

  // Available categories for dropdown / pills
  const categoryOptions: { label: string; value: string }[] = [
    { label: 'All Products', value: '' },
    ...SPORTS_LIST.map(s => ({ label: s.name, value: s.name }))
  ];

  // Dynamic available categories based on currently selected sport
  const availableCategories = useMemo(() => {
    let subset = products;
    if (filterState.sport) {
      subset = subset.filter(p => p.sport.toLowerCase() === filterState.sport.toLowerCase());
    }
    const cats = Array.from(new Set(subset.map(p => p.category))).filter(Boolean).sort();
    return cats;
  }, [products, filterState.sport]);

  // Dynamic available subcategories based on sport & category
  const availableSubcategories = useMemo(() => {
    let subset = products;
    if (filterState.sport) {
      subset = subset.filter(p => p.sport.toLowerCase() === filterState.sport.toLowerCase());
    }
    if (filterState.category) {
      subset = subset.filter(p => p.category.toLowerCase() === filterState.category.toLowerCase());
    }
    const subcats = Array.from(new Set(subset.map(p => p.subcategory).filter((s): s is string => Boolean(s)))).sort();
    return subcats;
  }, [products, filterState.sport, filterState.category]);

  // Dynamic available brands based on currently filtered sport and category
  // This ensures selecting Cricket only shows cricket brands (SG, SS, MRF, DSC, Shrey), etc.!
  const availableBrands = useMemo(() => {
    let subset = products;
    if (filterState.sport) {
      subset = subset.filter(p => p.sport.toLowerCase() === filterState.sport.toLowerCase());
    }
    if (filterState.category) {
      subset = subset.filter(p => p.category.toLowerCase() === filterState.category.toLowerCase());
    }
    const brands = Array.from(new Set(subset.map(p => p.brand))).filter(Boolean).sort();
    return brands;
  }, [products, filterState.sport, filterState.category]);

  // Filtered products strictly applying AND logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Search filter
      if (filterState.search) {
        const query = filterState.search.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesBrand = item.brand.toLowerCase().includes(query);
        const matchesSport = item.sport.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesSubcat = item.subcategory?.toLowerCase().includes(query) || false;
        const matchesFeatures = item.features.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesBrand && !matchesSport && !matchesCategory && !matchesSubcat && !matchesFeatures) {
          return false;
        }
      }

      // Sport filter (AND)
      if (filterState.sport && item.sport.toLowerCase() !== filterState.sport.toLowerCase()) {
        return false;
      }

      // Category filter (AND)
      if (filterState.category && item.category.toLowerCase() !== filterState.category.toLowerCase()) {
        return false;
      }

      // Subcategory filter (AND)
      if (filterState.subcategory && item.subcategory?.toLowerCase() !== filterState.subcategory.toLowerCase()) {
        return false;
      }

      // Brand filter (AND)
      if (filterState.brand && item.brand.toLowerCase() !== filterState.brand.toLowerCase()) {
        return false;
      }

      // Availability filter (AND)
      if (filterState.availability && !item.availability.toLowerCase().includes(filterState.availability.toLowerCase())) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (filterState.sortBy === 'brand-asc') {
        return a.brand.localeCompare(b.brand);
      }
      // default 'featured'
      const rank = (status: string) => status === 'Featured' ? 2 : 1;
      return rank(b.status) - rank(a.status);
    });
  }, [products, filterState]);

  // Active filters count
  const activeFilterCount = [
    filterState.sport,
    filterState.category,
    filterState.subcategory,
    filterState.brand,
    filterState.availability,
    filterState.search
  ].filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      
      {/* Header & Breadcrumb */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#FF8533]">Shop</span>
          {filterState.sport && (
            <>
              <span>/</span>
              <span className="text-white font-medium">{filterState.sport}</span>
            </>
          )}
          {filterState.category && (
            <>
              <span>/</span>
              <span className="text-zinc-300">{filterState.category}</span>
            </>
          )}
          {filterState.brand && (
            <>
              <span>/</span>
              <span className="text-[#138808] font-bold">{filterState.brand}</span>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-athletic tracking-wide">
              {filterState.sport 
                ? `${filterState.sport.toUpperCase()} EQUIPMENT` 
                : filterState.brand 
                  ? `${filterState.brand.toUpperCase()} GEAR` 
                  : 'SHOP ALL PRODUCTS'}
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Quality tournament gear & sports equipment. Available at our Coimbatore showroom.
            </p>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFilterDrawerOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0E1D17] border border-[#1F3A2E] text-white text-xs sm:text-sm font-bold font-athletic uppercase min-h-[48px] active:scale-95 transition-transform"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#FF6B00]" />
            <span>FILTER</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#FF6B00] text-white text-[11px] flex items-center justify-center font-bold">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Honest Catalogue Disclaimer */}
        <div className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs flex items-center justify-between gap-3">
          <span>
            <strong className="text-white">Catalogue Note:</strong> Representative product images shown. Current stock, sizes, and pricing vary. Please contact us on WhatsApp or visit our Cheran Ma Nagar showroom to confirm availability.
          </span>
        </div>
      </div>

      {/* Prominent Shop Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search cricket bats, yonex rackets, footballs, shoes, SG..."
          value={filterState.search}
          onChange={(e) => onFilterChange({ search: e.target.value })}
          className="w-full bg-[#0E1D17] border border-[#1F3A2E] focus:border-[#FF6B00] text-sm sm:text-base text-white rounded-xl pl-11 pr-10 py-3.5 outline-none transition-all placeholder:text-zinc-500 min-h-[48px]"
        />
        <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-3.5" />
        {filterState.search && (
          <button
            onClick={() => onFilterChange({ search: '' })}
            className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-white p-1 min-h-[36px] flex items-center justify-center"
            aria-label="Clear search query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Quick Filter Chips (Mobile-first min-h-[48px] large tap targets) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
        {categoryOptions.map((s) => {
          const isSelected = filterState.sport === s.value;
          return (
            <button
              key={s.value || 'all'}
              onClick={() => {
                onFilterChange({ 
                  sport: s.value,
                  category: '',
                  subcategory: '',
                  brand: '' 
                });
              }}
              className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all min-h-[48px] flex items-center justify-center ${
                isSelected
                  ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25 ring-2 ring-[#FF6B00]/50'
                  : 'bg-[#0E1D17] border border-[#1B3528] text-zinc-300 hover:text-white hover:border-zinc-500 active:scale-95'
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Sidebar Filters (Desktop) + Products View */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* DESKTOP SIDEBAR FILTERS */}
        <aside className="hidden lg:block lg:col-span-1 bg-[#0E1D17] border border-[#1F3A2E] rounded-2xl p-5 space-y-6 sticky top-28">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-white font-bold font-athletic text-lg tracking-wide">
              <Filter className="w-4 h-4 text-[#FF6B00]" />
              <span>FILTERS</span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={onResetFilters}
                className="text-xs text-zinc-400 hover:text-[#FF8533] flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset ({activeFilterCount})</span>
              </button>
            )}
          </div>

          {/* Search within catalogue */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Keyword Search
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search name, brand, spec..."
                value={filterState.search}
                onChange={(e) => onFilterChange({ search: e.target.value })}
                className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl pl-8 pr-3 py-2 outline-none focus:border-[#FF6B00]"
              />
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Discipline / Category
            </label>
            <select
              value={filterState.sport}
              onChange={(e) => onFilterChange({ 
                sport: e.target.value,
                category: '',
                subcategory: '',
                brand: ''
              })}
              className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl px-3 py-2.5 outline-none focus:border-[#FF6B00]"
            >
              {categoryOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          {availableCategories.length > 0 && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Category
              </label>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1">
                <button
                  onClick={() => onFilterChange({ category: '', subcategory: '' })}
                  className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                    !filterState.category 
                      ? 'bg-white/10 text-white font-semibold' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>All Categories</span>
                  {!filterState.category && <Check className="w-3 h-3 text-[#FF6B00]" />}
                </button>
                {availableCategories.map((cat) => {
                  const isSelected = filterState.category.toLowerCase() === cat.toLowerCase();
                  return (
                    <button
                      key={cat}
                      onClick={() => onFilterChange({ category: isSelected ? '' : cat, subcategory: '' })}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                        isSelected 
                          ? 'bg-[#FF6B00]/20 text-white font-semibold border border-[#FF6B00]/30' 
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>{cat}</span>
                      {isSelected && <Check className="w-3 h-3 text-[#FF6B00]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Subcategory Filter (Where relevant) */}
          {availableSubcategories.length > 0 && filterState.category && (
            <div className="space-y-2 pt-2 border-t border-white/5">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Subcategory
              </label>
              <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                <button
                  onClick={() => onFilterChange({ subcategory: '' })}
                  className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                    !filterState.subcategory ? 'bg-white/10 text-white font-semibold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>All Subcategories</span>
                  {!filterState.subcategory && <Check className="w-3 h-3 text-[#FF6B00]" />}
                </button>
                {availableSubcategories.map((sc) => {
                  const isSelected = filterState.subcategory.toLowerCase() === sc.toLowerCase();
                  return (
                    <button
                      key={sc}
                      onClick={() => onFilterChange({ subcategory: isSelected ? '' : sc })}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                        isSelected 
                          ? 'bg-[#138808]/20 text-white font-semibold border border-[#138808]/30' 
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>{sc}</span>
                      {isSelected && <Check className="w-3 h-3 text-[#138808]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Brand Filter (Filter, NOT separate page) */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Brand Filter
              </label>
              {filterState.brand && (
                <button
                  onClick={() => onFilterChange({ brand: '' })}
                  className="text-[10px] text-zinc-500 hover:text-white"
                >
                  Clear Brand
                </button>
              )}
            </div>

            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              <button
                onClick={() => onFilterChange({ brand: '' })}
                className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                  !filterState.brand ? 'bg-white/10 text-white font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>All Brands</span>
                {!filterState.brand && <Check className="w-3 h-3 text-[#FF6B00]" />}
              </button>
              {availableBrands.map((brand) => {
                const isSelected = filterState.brand.toLowerCase() === brand.toLowerCase();
                return (
                  <button
                    key={brand}
                    onClick={() => onFilterChange({ brand: isSelected ? '' : brand })}
                    className={`w-full text-left text-xs py-1.5 px-2 rounded-lg flex items-center justify-between transition-colors ${
                      isSelected 
                        ? 'bg-[#FF6B00]/20 text-white font-semibold border border-[#FF6B00]/30' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{brand}</span>
                    {isSelected && <Check className="w-3 h-3 text-[#FF6B00]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Availability
            </label>
            <select
              value={filterState.availability}
              onChange={(e) => onFilterChange({ availability: e.target.value })}
              className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl px-3 py-2 outline-none"
            >
              <option value="">All Enquiries</option>
              <option value="Check Availability">Check Availability</option>
              <option value="Enquire Now">Enquire Now</option>
              <option value="Ask on WhatsApp">Ask on WhatsApp</option>
            </select>
          </div>

        </aside>

        {/* PRODUCTS AREA (3 COLS ON DESKTOP) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Top Sort & Active Filters Bar */}
          <div className="bg-[#0E1D17] border border-[#1F3A2E] rounded-xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-athletic text-base tracking-wide">
                Showing {filteredProducts.length} Products
              </span>
              {activeFilterCount > 0 && (
                <span className="text-zinc-400">
                  (Filtered by {activeFilterCount} parameters)
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className="text-zinc-400 hidden sm:inline">Sort:</span>
              <select
                value={filterState.sortBy}
                onChange={(e) => onFilterChange({ sortBy: e.target.value as any })}
                className="bg-[#07110D] border border-[#1F3A2E] text-white rounded-lg px-2.5 py-1.5 outline-none font-medium"
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Product Name (A-Z)</option>
                <option value="brand-asc">Brand (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {filterState.sport && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#FF6B00]/20 text-[#FF8533] border border-[#FF6B00]/40">
                  Category: {filterState.sport}
                  <button onClick={() => onFilterChange({ sport: '', category: '', subcategory: '' })} className="hover:text-white" aria-label="Clear category filter">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filterState.category && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/10 text-white border border-white/20">
                  Category: {filterState.category}
                  <button onClick={() => onFilterChange({ category: '', subcategory: '' })} className="hover:text-[#FF6B00]">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filterState.subcategory && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/10 text-white border border-white/20">
                  Subcategory: {filterState.subcategory}
                  <button onClick={() => onFilterChange({ subcategory: '' })} className="hover:text-[#FF6B00]">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filterState.brand && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[#138808]/20 text-[#2ecc71] border border-[#138808]/40">
                  Brand: {filterState.brand}
                  <button onClick={() => onFilterChange({ brand: '' })} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {filterState.search && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-white/10 text-zinc-300 border border-white/20">
                  Query: "{filterState.search}"
                  <button onClick={() => onFilterChange({ search: '' })} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={onResetFilters}
                className="text-xs text-zinc-400 hover:text-white underline ml-1"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                  onOpenComingSoon={onOpenComingSoon}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-[#0E1D17] border border-[#1F3A2E] rounded-3xl p-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-athletic">
                No matching equipment found
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                We couldn't find items matching your combined filters ({filterState.sport} {filterState.brand ? `+ ${filterState.brand}` : ''}).
                Try adjusting your filters or contact our showroom team on WhatsApp to check offline stock.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={onResetFilters}
                  className="px-5 py-2.5 rounded-xl bg-[#FF6B00] hover:bg-[#ff7a1a] text-white text-xs font-bold uppercase tracking-wider font-athletic"
                >
                  Reset All Filters
                </button>
                <a
                  href={getWhatsAppUrl('Hello JAI HIND SPORTS, I am looking for a specific product not listed.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#138808] text-white text-xs font-semibold"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE FILTER DRAWER */}
      {mobileFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="relative w-full max-w-xs bg-[#0E1D17] h-full p-5 flex flex-col justify-between overflow-y-auto shadow-2xl border-r border-[#1F3A2E]">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-lg font-bold text-white font-athletic">Filter Catalogue</h3>
                <button
                  onClick={() => setMobileFilterDrawerOpen(false)}
                  className="p-1 text-zinc-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Discipline / Category */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5 block">
                  Discipline / Category
                </label>
                <select
                  value={filterState.sport}
                  onChange={(e) => onFilterChange({ 
                    sport: e.target.value,
                    category: '',
                    subcategory: '',
                    brand: ''
                  })}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5"
                >
                  {categoryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              {availableCategories.length > 0 && (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5 block">
                    Category
                  </label>
                  <select
                    value={filterState.category}
                    onChange={(e) => onFilterChange({ category: e.target.value, subcategory: '' })}
                    className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5"
                  >
                    <option value="">All Categories</option>
                    {availableCategories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Brand */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5 block">
                  Brand
                </label>
                <select
                  value={filterState.brand}
                  onChange={(e) => onFilterChange({ brand: e.target.value })}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5"
                >
                  <option value="">All Brands</option>
                  {availableBrands.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Availability */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5 block">
                  Availability
                </label>
                <select
                  value={filterState.availability}
                  onChange={(e) => onFilterChange({ availability: e.target.value })}
                  className="w-full bg-[#07110D] border border-[#1F3A2E] text-white text-xs rounded-xl p-2.5"
                >
                  <option value="">All Enquiries</option>
                  <option value="Check Availability">Check Availability</option>
                  <option value="Enquire Now">Enquire Now</option>
                  <option value="Ask on WhatsApp">Ask on WhatsApp</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <button
                onClick={() => setMobileFilterDrawerOpen(false)}
                className="w-full py-3 rounded-xl bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider font-athletic"
              >
                Apply ({filteredProducts.length} Results)
              </button>
              <button
                onClick={() => {
                  onResetFilters();
                  setMobileFilterDrawerOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-white/5 text-zinc-300 text-xs font-medium"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
