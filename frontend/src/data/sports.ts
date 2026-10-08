import { SportInfo, SportType } from '../types';

export const SPORTS_LIST: SportInfo[] = [
  {
    id: 'cricket',
    name: 'Cricket',
    subtitle: 'Everything you need for the game.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80',
    description: 'From hand-picked English & Kashmir Willow bats to tournament-grade protective gear and leather balls.',
    categories: ['Bats', 'Batting Gloves', 'Batting Pads', 'Helmets', 'Cricket Balls', 'Kit Bags', 'Accessories'],
    popularBrands: ['SG', 'SS', 'MRF', 'DSC', 'Shrey']
  },
  {
    id: 'badminton',
    name: 'Badminton',
    subtitle: 'High-speed rackets, precision shuttles & court gear.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=80',
    description: 'Official rackets, tournament shuttles, non-marking indoor shoes, and in-house computerized stringing service.',
    categories: ['Rackets', 'Shuttlecocks', 'Footwear', 'Grips & Strings', 'Bags'],
    popularBrands: ['Yonex', 'Li-Ning', 'Apacs']
  },
  {
    id: 'football',
    name: 'Football',
    subtitle: 'Match balls, studs, goalkeeper gear & team training.',
    image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=1200&q=80',
    description: 'Quality match balls, durable rubber training footballs, molded studs, and goalkeeper protection.',
    categories: ['Footballs', 'Footwear', 'Accessories', 'Team Kits'],
    popularBrands: ['Nivia', 'Cosco', 'Sega']
  },
  {
    id: 'basketball',
    name: 'Basketball',
    subtitle: 'Composite indoor & rugged outdoor basketballs.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
    description: 'Official size and weight balls, shooter touch composite leather, and long-lasting outdoor court rubber balls.',
    categories: ['Basketballs', 'Hoops & Nets', 'Accessories'],
    popularBrands: ['Spalding', 'Nivia', 'Cosco']
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    subtitle: 'Match & practice volleyballs, nets & court gear.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=1200&q=80',
    description: 'Microfiber pasted volleyballs with consistent bounce, tournament nets, and knee guard protection.',
    categories: ['Volleyballs', 'Nets & Antennas', 'Knee Guards'],
    popularBrands: ['Cosco', 'Nivia']
  },
  {
    id: 'tennis',
    name: 'Tennis',
    subtitle: 'Precision rackets, tournament balls & court accessories.',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=80',
    description: 'Graphite composite rackets for beginners to advanced players, pressurized championship felt balls, and grips.',
    categories: ['Rackets', 'Tennis Balls', 'Grips', 'Kit Bags'],
    popularBrands: ['Wilson', 'Babolat', 'Head']
  },
  {
    id: 'fitness',
    name: 'Fitness',
    subtitle: 'Dumbbells, resistance gear, gym balls & speed ropes.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
    description: 'Cast iron hex dumbbells, resistance tubes, gym balls, and conditioning gear for home and academy workouts.',
    categories: ['Free Weights', 'Cardio & Agility', 'Core & Stability', 'Gym Accessories'],
    popularBrands: ['Vector X', 'Cosco', 'Kore']
  },
  {
    id: 'athletics-running',
    name: 'Athletics & Running',
    subtitle: 'Track sprint spikes, relay batons & field essentials.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    description: 'Athletics accessories, distance trainers, track sprint spikes with wrenches, and relay sets.',
    categories: ['Spike Shoes', 'Field Equipment', 'Running Gear', 'Stopwatches'],
    popularBrands: ['Sega', 'Nivia']
  },
  {
    id: 'school-sports',
    name: 'School Sports',
    subtitle: 'Sports day packages, team bibs, cones & PE equipment.',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive sports day equipment, house practice bibs, whistles, agility cones, and tug of war ropes for schools across Coimbatore.',
    categories: ['Drill & Agility', 'Team Kits', 'Officiating', 'Ground Equipment', 'Sports Day Packages'],
    popularBrands: ['JHS', 'Nivia']
  }
];
