export type SportType = 
  | 'Cricket'
  | 'Badminton'
  | 'Football'
  | 'Basketball'
  | 'Volleyball'
  | 'Tennis'
  | 'Fitness'
  | 'Athletics & Running'
  | 'School Sports';

export type ProductAvailability = 
  | 'Check Availability'
  | 'Enquire Now'
  | 'Ask on WhatsApp'
  | 'Custom Order / Bulk';

export interface Product {
  id: string;
  name: string;
  brand: string;
  sport: SportType;
  category: string;
  subcategory?: string;
  image: string;
  description: string;
  features: string[];
  sizes?: string[];
  colours?: string[];
  availability: ProductAvailability;
  status: 'Featured' | 'Regular';
  badge?: string;
}

export interface SportInfo {
  id: string;
  name: SportType;
  subtitle: string;
  image: string;
  description: string;
  categories: string[];
  popularBrands: string[];
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'Team Orders' | 'School Sports' | 'Services' | 'In-Store';
  dateTag: string;
  image: string;
  description: string;
  highlights: string[];
}

export type NavPage = 'home' | 'shop' | 'showcase' | 'about';

export interface FilterState {
  search: string;
  sport: string;
  category: string;
  subcategory: string;
  brand: string;
  availability: string;
  sortBy: 'featured' | 'name-asc' | 'brand-asc';
}
