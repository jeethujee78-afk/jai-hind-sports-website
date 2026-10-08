import { Product, SportType } from '../types';

export const PRODUCTS: Product[] = [
  // ==================== CRICKET ====================
  {
    id: 'crick-sg-player',
    name: 'SG Player Edition English Willow Cricket Bat',
    brand: 'SG',
    sport: 'Cricket',
    category: 'Bats',
    subcategory: 'English Willow',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted from selected Grade 1 English Willow with massive contoured edges and optimum balance for strokeplay.',
    features: [
      'Grade 1 hand-selected English Willow',
      'Massive 39-41mm edges with pronounced spine profile',
      'Naturally air-dried blade with 8-11 straight clean grains',
      'Fitted with premium round cane handle and chevron grip'
    ],
    sizes: ['Short Handle (SH)', 'Harrow'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-ss-ton-matrix',
    name: 'SS Ton Matrix Reserve English Willow Bat',
    brand: 'SS',
    sport: 'Cricket',
    category: 'Bats',
    subcategory: 'English Willow',
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80',
    description: 'Engineered for aggressive power hitting with an extended sweet spot and mid-to-low sweet profile suited for Indian subcontinent pitches.',
    features: [
      'Super Grade English Willow',
      'Huge profile with feather-light pickup',
      'Full round cane handle with 3-way rubber shock absorbers',
      'Factory knocked-in with protective scuff sheet applied'
    ],
    sizes: ['Short Handle (SH)'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-mrf-genius',
    name: 'MRF Genius Grand Edition Cricket Bat',
    brand: 'MRF',
    sport: 'Cricket',
    category: 'Bats',
    subcategory: 'English Willow',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80',
    description: 'Signature profile bat crafted from premium willow with balanced weight distribution and classic curved blade.',
    features: [
      'Selected English Willow with traditional profile',
      'Thick contoured edge and clean pickup',
      'Embossed chrome branding with durable toe guard fitted',
      'High-grade multi-piece cane handle'
    ],
    sizes: ['Short Handle (SH)'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-dsc-blak',
    name: 'DSC Blak 300 English Willow Bat',
    brand: 'DSC',
    sport: 'Cricket',
    category: 'Bats',
    subcategory: 'English Willow',
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80',
    description: 'Modern dynamic design with pronounced bow and thick power edges built specifically for T20 and limited-overs cricket.',
    features: [
      'Handcrafted seasoned English Willow',
      'Massive power sweet spot positioned mid-low',
      'Energy-transfer rubber grip on 12-piece cane handle',
      'Pre-shaped toe with moisture-resistant sealant'
    ],
    sizes: ['Short Handle (SH)', 'Size 6'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-ss-master-kw',
    name: 'SS Master 1000 Kashmir Willow Cricket Bat',
    brand: 'SS',
    sport: 'Cricket',
    category: 'Bats',
    subcategory: 'Kashmir Willow',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'Durable seasoned Kashmir Willow bat ideal for academy training, club practice, and youth players developing stroke technique.',
    features: [
      'Selected hard-pressed Kashmir Willow',
      'Thick edges and natural wood grain finish',
      'Durable Sarawak cane handle with scale grip',
      'Fitted with protective toe guard'
    ],
    sizes: ['Short Handle (SH)', 'Size 5', 'Size 6'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'crick-sg-savage-gloves',
    name: 'SG Savage Pro Batting Gloves',
    brand: 'SG',
    sport: 'Cricket',
    category: 'Batting Gloves',
    subcategory: 'Protection',
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=800&q=80',
    description: 'Premium split-finger batting gloves with high-density foam padding and imported sheep leather palm for soft feel and firm grip.',
    features: [
      'Premium sheep leather palm with double-stitch reinforcement',
      'Thermoplastic polyurethane (TPU) inserts on bottom two lead fingers',
      'Airflow mesh ventilation gussets for moisture control',
      'Dual-sided soft towelling sweatband with secure velcro closure'
    ],
    sizes: ['Men (Adult)', 'Youth'],
    colours: ['White / Black / Orange'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-ss-platino-gloves',
    name: 'SS Platino Pro Batting Gloves',
    brand: 'SS',
    sport: 'Cricket',
    category: 'Batting Gloves',
    subcategory: 'Protection',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional sausage-finger styling with multi-section articulation and reinforced thumb shield for pace bowling protection.',
    features: [
      'Pittards leather palm for exceptional durability and grip',
      'High-density lightweight plastazote foam filling',
      'Side impact bar protection on both lead and bottom hands',
      'Extra padded sweatband with pull-tab'
    ],
    sizes: ['Men (Adult)'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'crick-sg-test-pads',
    name: 'SG Test Batting Legguard (Pads)',
    brand: 'SG',
    sport: 'Cricket',
    category: 'Batting Pads',
    subcategory: 'Protection',
    image: 'https://images.unsplash.com/photo-1531415074868-036b1c57e329?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional cane construction front legguards with ultra-lightweight high-density foam backing for all-day comfort at the crease.',
    features: [
      'Traditional 7-cane structure with vertical bolster',
      'Gel-zone knee bolster for maximum kneecap impact dispersal',
      'Durable polyurethane face with padded instep reinforcement',
      '50mm padded calf and ankle straps with quick-release velcro'
    ],
    sizes: ['Men (Right Hand)', 'Men (Left Hand)'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'crick-shrey-helmet',
    name: 'Shrey Master Class Air Titanium Cricket Helmet',
    brand: 'Shrey',
    sport: 'Cricket',
    category: 'Helmets',
    subcategory: 'Protection',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80',
    description: 'BSI certified cricket helmet featuring high-impact ABS outer shell, extended back rim coverage, and titanium alloy grille.',
    features: [
      'Conforms to latest BSI safety standards BS 7928:2013',
      'Ultra-lightweight titanium visor with curved safety shape',
      'Anti-sweat inner lining with antimicrobial sweatband',
      'Rotary rear dial adjuster for exact personalized fit'
    ],
    sizes: ['Small (54-56cm)', 'Medium (57-59cm)', 'Large (60-62cm)'],
    colours: ['Navy Blue', 'Dark Green'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'crick-sg-club-ball',
    name: 'SG Club Leather Cricket Ball (Pack / Single)',
    brand: 'SG',
    sport: 'Cricket',
    category: 'Cricket Balls',
    subcategory: 'Leather Balls',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'Four-piece alum tanned top grade leather ball with hand-stitched pronounced seam, ideal for league matches and tournament play.',
    features: [
      'High grade alum-tanned genuine leather cover',
      'Naturally cork center wound with pure wool yarn',
      'Hard wax polished waterproof finish',
      'Consistent bounce and swing retention for 50+ overs'
    ],
    sizes: ['Match Ball (156g)'],
    colours: ['Red', 'White', 'Pink'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'crick-sg-superpak-kitbag',
    name: 'SG Superpak Heavy Duty Wheelie Cricket Kit Bag',
    brand: 'SG',
    sport: 'Cricket',
    category: 'Kit Bags',
    subcategory: 'Wheelie Bags',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    description: 'Spacious full-kit wheelie bag with dedicated dual-bat internal sleeves, heavy duty tractor wheels, and ventilated footwear compartment.',
    features: [
      'Heavy-duty 1680D tear-resistant nylon fabric',
      'Heavy-duty large tractor wheels for smooth turf transit',
      'Dedicated external footwear pocket with ventilation grommets',
      'Integrated lockable main compartment zippers'
    ],
    sizes: ['Full Kit Size (38" x 14" x 14")'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== BADMINTON ====================
  {
    id: 'badm-yonex-astrox88d',
    name: 'Yonex Astrox 88D Pro Badminton Racket',
    brand: 'Yonex',
    sport: 'Badminton',
    category: 'Rackets',
    subcategory: 'Offensive / Head Heavy',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship doubles back-court racket designed to dominate rallies with crushing steep smashes. Made in Japan.',
    features: [
      'Rotational Generator System for rapid transition between shots',
      'Volume Cut Resin and HM Graphite with Namd technology',
      'Extra slim shaft with Aero+Box isometric frame',
      'Stringing tension supported up to 28 lbs'
    ],
    sizes: ['4U (Avg. 83g) / G5', '3U (Avg. 88g) / G4'],
    colours: ['Camel Gold / Black'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'badm-yonex-nanoflare1000z',
    name: 'Yonex Nanoflare 1000Z Speed Racket',
    brand: 'Yonex',
    sport: 'Badminton',
    category: 'Rackets',
    subcategory: 'Speed / Head Light',
    image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80',
    description: 'Built for lightning-fast defensive returns and explosive smashes. Wide profile frame cut through air resistance.',
    features: [
      'Sonic Flare System with TORAYCA M40X carbon fiber',
      'Ultra PE Fiber core with Speed-Assist Bumper',
      'Super slim shaft for minimum air drag',
      'High-grade competition graphite frame'
    ],
    sizes: ['4U (Avg. 83g) / G5'],
    colours: ['Lightning Yellow / Black'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'badm-lining-windlite',
    name: 'Li-Ning Wind Lite 700 Lightweight Racket',
    brand: 'Li-Ning',
    sport: 'Badminton',
    category: 'Rackets',
    subcategory: 'Lightweight / All Round',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80',
    description: 'Super lightweight aerodynamic carbon frame designed for rapid arm speeds, quick net play, and effortless defensive reflexes.',
    features: [
      'Compressed carbon frame weighing only 78 grams (5U)',
      'Dynamic-Optimum frame enlarging the sweet spot',
      'High-tensile slim shaft with vibration dampening technology',
      'Tension capacity up to 30 lbs'
    ],
    sizes: ['5U (78g) / G6'],
    colours: ['Matte Black / Orange'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'badm-apacs-ziggler',
    name: 'Apacs Z-Ziggler High-Tension Racket',
    brand: 'Apacs',
    sport: 'Badminton',
    category: 'Rackets',
    subcategory: 'Offensive / High Tension',
    image: 'https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80',
    description: 'Legendary compact frame power racket supporting extra high string tension up to 38 lbs for offensive club smashers.',
    features: [
      'Triple Speed System aerodynamic frame',
      'Extra slim 6.4mm high-strength carbon graphite shaft',
      'Compact head geometry concentrating impact sweet point',
      'Remarkable stability under extreme string tension'
    ],
    sizes: ['4U (85g) / G2'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'badm-yonex-mavis350',
    name: 'Yonex Mavis 350 Nylon Shuttlecocks (Tube of 6)',
    brand: 'Yonex',
    sport: 'Badminton',
    category: 'Shuttlecocks',
    subcategory: 'Nylon Shuttles',
    image: 'https://images.unsplash.com/photo-1521537634581-0dced2fedc6b?auto=format&fit=crop&w=800&q=80',
    description: 'The global benchmark for durable club and training badminton play. Precision flight trajectory mimicking feather shuttles.',
    features: [
      '100% genuine Portuguese natural cork base',
      'Precision-molded wing rib pattern for accurate flight recovery',
      '4x to 5x more durable than ordinary nylon shuttles',
      'Standard green cap (slow speed) and blue cap (medium speed) available'
    ],
    sizes: ['Tube of 6 Shuttles'],
    colours: ['Yellow Skirt', 'White Skirt'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'badm-yonex-aerosensa',
    name: 'Yonex Aerosensa 2 Feather Shuttlecocks (Tube of 12)',
    brand: 'Yonex',
    sport: 'Badminton',
    category: 'Shuttlecocks',
    subcategory: 'Feather Shuttles',
    image: 'https://images.unsplash.com/photo-1521537634581-0dced2fedc6b?auto=format&fit=crop&w=800&q=80',
    description: 'Official tournament grade duck feather shuttles offering pristine flight consistency and acoustic impact sound.',
    features: [
      'Grade A selected duck feathers carefully sorted for density',
      'Composite two-tier natural cork base',
      'Exceptional trajectory stability in air-conditioned indoor halls',
      'Speed 77 (standard tournament rating for South India conditions)'
    ],
    sizes: ['Tube of 12 Shuttles'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'badm-yonex-65z3',
    name: 'Yonex Power Cushion 65 Z3 Indoor Badminton Shoes',
    brand: 'Yonex',
    sport: 'Badminton',
    category: 'Footwear',
    subcategory: 'Indoor Court Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    description: 'Trusted by world champions. Featuring Power Cushion+ with 28% more shock absorption and 62% more repulsion for rapid footwork.',
    features: [
      'Power Cushion+ midsole for ankle and knee joint protection',
      'Seamless one-piece upper preventing pinch points',
      'Radial Blade non-marking gum rubber grip sole',
      'ToughBrid Light graphite plate under the arch'
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    colours: ['White / Ocean Blue', 'Matte Black'],
    availability: 'Check Availability',
    status: 'Featured'
  },

  // ==================== FOOTBALL ====================
  {
    id: 'fb-nivia-shining-star',
    name: 'Nivia Shining Star Match Football',
    brand: 'Nivia',
    sport: 'Football',
    category: 'Footballs',
    subcategory: 'Match Balls',
    image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=800&q=80',
    description: 'Match football with 32-panel thermo-bonded construction, optimal air retention, and weather-resistant outer skin.',
    features: [
      'Thermo-bonded seamless surface for consistent ball flight',
      'Reinforced butyl bladder with high air retention valve',
      'All-weather grain PU micro-fiber outer skin',
      'Constructed for competitive match and practice play'
    ],
    sizes: ['Size 5 (Official Match Standard)'],
    colours: ['White / Orange / Navy'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'fb-nivia-storm',
    name: 'Nivia Storm Rubber Moulded Football',
    brand: 'Nivia',
    sport: 'Football',
    category: 'Footballs',
    subcategory: 'Training & Turf',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    description: 'Durable training football built for hard ground, academy practice, and rough turf.',
    features: [
      'Heavy-duty moulded natural rubber cover',
      'Reinforced wound nylon carcass for shape retention',
      'High resistance to abrasion on mud, gravel, and rough turf',
      'Excellent bounce and grip in both wet and dry conditions'
    ],
    sizes: ['Size 5', 'Size 4'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'fb-cosco-delta',
    name: 'Cosco Delta Force Match Football',
    brand: 'Cosco',
    sport: 'Football',
    category: 'Footballs',
    subcategory: 'Match Balls',
    image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-stitched synthetic PU match football suitable for university championships, school tournaments, and club leagues.',
    features: [
      'Hand-stitched 32-panel high-gloss PU outer casing',
      'Multi-layer polyester backing for rebound stability',
      'Fitted with air-lock latex bladder',
      'Standard match weight and circumference specifications'
    ],
    sizes: ['Size 5'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'fb-sega-spectra',
    name: 'Sega Spectra Pro Football Studs',
    brand: 'Sega',
    sport: 'Football',
    category: 'Footwear',
    subcategory: 'Football Boots',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    description: 'Classic durable football boots engineered for natural grass and firm ground. Reinforced heel counter and molded TPU studs.',
    features: [
      'Durable synthetic leather upper with textured ball control zones',
      'Moulded multi-stud TPU sole plate for rapid acceleration and pivoting',
      'Padded ankle collar and cushioned EVA insole',
      'Popular football boots for training and club matches'
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colours: ['Black / Neon Green', 'White / Red'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'fb-nivia-dominator-gk',
    name: 'Nivia Dominator Pro Goalkeeper Gloves with Finger Spines',
    brand: 'Nivia',
    sport: 'Football',
    category: 'Accessories',
    subcategory: 'Goalkeeper Gear',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    description: 'Professional cut goalkeeper gloves with 4mm German latex palm and removable finger protection spines against hyperextension.',
    features: [
      '4mm all-weather German contact latex palm',
      'Removable finger-saver spine inserts for thumb and fingers',
      'Full latex backhand with 3D punch zone embossing',
      'Elastic bandage wrist strap with double-wrap closure'
    ],
    sizes: ['Size 7', 'Size 8', 'Size 9', 'Size 10'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== BASKETBALL ====================
  {
    id: 'bb-spalding-tf250',
    name: 'Spalding TF-250 All-Surface Composite Basketball',
    brand: 'Spalding',
    sport: 'Basketball',
    category: 'Basketballs',
    subcategory: 'Composite Leather',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    description: 'Premium all-surface composite leather basketball providing exceptional tack and soft touch on both hardwood and outdoor courts.',
    features: [
      'Shooter\'s touch composite leather cover',
      'Deep channel design for improved shooting alignment and fingertip grip',
      'Full ball pebbling for control and handling moisture',
      'Rotationally balanced butyl bladder for uniform bounce'
    ],
    sizes: ['Size 7 (Men / Official)', 'Size 6 (Women)', 'Size 5 (Youth)'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'bb-nivia-topgrip',
    name: 'Nivia Top Grip Rubber Basketball',
    brand: 'Nivia',
    sport: 'Basketball',
    category: 'Basketballs',
    subcategory: 'Rubber Moulded',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty rubber outdoor basketball built for concrete courts, school grounds, and intensive daily drill practice.',
    features: [
      'High-traction pebble rubber surface',
      'Nylon wound internal core prevents bulging',
      'Deep black channel grooving',
      'Exceptional wear resistance on rough asphalt'
    ],
    sizes: ['Size 7', 'Size 6', 'Size 5'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== VOLLEYBALL ====================
  {
    id: 'vb-cosco-supervolley',
    name: 'Cosco Super Volley Leather Pasted Match Volleyball',
    brand: 'Cosco',
    sport: 'Volleyball',
    category: 'Volleyballs',
    subcategory: 'Match Balls',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    description: '18-panel pasted volleyball with soft micro-fiber cover for practice and match play.',
    features: [
      '18-panel pasted construction with soft cushioning',
      'Supple micro-fiber PU cover reducing forearm sting',
      'High air retention butyl bladder with nylon wound core',
      'True spherical geometry for predictable float and spin serves'
    ],
    sizes: ['Size 4 (Official Regulation)'],
    colours: ['Yellow / Blue / White'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'vb-nivia-spikester',
    name: 'Nivia Spikester Tournament Volleyball',
    brand: 'Nivia',
    sport: 'Volleyball',
    category: 'Volleyballs',
    subcategory: 'Training & Club',
    image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&w=800&q=80',
    description: 'High-visibility polyurethane pasted volleyball crafted for rapid team play, school tournaments, and club setups.',
    features: [
      'Micro-cellular soft-touch PU cover',
      'Laminated carcass with reinforced latex bladder',
      'Vibrant dual-color visibility under court floodlights',
      'Optimal grip for setting and powerful spiking contact'
    ],
    sizes: ['Size 4'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== TENNIS ====================
  {
    id: 'ten-wilson-prostaff',
    name: 'Wilson Pro Staff Team Tennis Racket',
    brand: 'Wilson',
    sport: 'Tennis',
    category: 'Rackets',
    subcategory: 'Midplus Rackets',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
    description: 'Designed for intermediate players seeking pinpoint control, clean feel, and easy maneuverability from the baseline to the net.',
    features: [
      '100 sq in head size providing generous sweet spot',
      'Graphite construction for clean vibration feedback',
      'Strung weight: 280g with head-light balance',
      'String pattern: 16x19 for spin generation'
    ],
    sizes: ['Grip 2 (4 1/4")', 'Grip 3 (4 3/8")'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'ten-wilson-usopen-balls',
    name: 'Wilson US Open Extra Duty Tennis Balls (Can of 3)',
    brand: 'Wilson',
    sport: 'Tennis',
    category: 'Tennis Balls',
    subcategory: 'Tournament Balls',
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80',
    description: 'High-durability tennis balls with premium woven felt engineered for hard court and clay play.',
    features: [
      'Regulation size and bounce for tournament and practice play',
      'Exclusive premium woven felt for maximum play life on hard courts',
      'Consistent internal pressure and true rebound bounce',
      'Pressurized tin containing 3 regulation yellow balls'
    ],
    sizes: ['Can of 3 Balls'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== FITNESS ====================
  {
    id: 'fit-vectorx-hex-dumbbells',
    name: 'Vector X Cast Iron Rubber Hex Dumbbells (Pairs)',
    brand: 'Vector X',
    sport: 'Fitness',
    category: 'Free Weights',
    subcategory: 'Dumbbells',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    description: 'Commercial grade hex dumbbells with thick virgin rubber encasing and ergonomic knurled chrome steel grip handles.',
    features: [
      'Solid cast iron core with protective virgin rubber coating',
      'Anti-roll hexagonal head design for safety and floor exercises',
      'Contoured chrome-plated handle with diamond knurling',
      'Available in pairs from 2.5kg to 25kg'
    ],
    sizes: ['2.5kg Pair', '5kg Pair', '7.5kg Pair', '10kg Pair', '15kg Pair'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'fit-cosco-speed-rope',
    name: 'Cosco Pro Speed Skipping Rope with Ball Bearings',
    brand: 'Cosco',
    sport: 'Fitness',
    category: 'Cardio & Agility',
    subcategory: 'Jump Ropes',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: '360-degree dual ball bearing speed rope with coated steel wire for high-speed double-unders and conditioning workouts.',
    features: [
      'Smooth 360-degree precision steel ball bearings',
      'Kink-resistant PVC coated steel cable (3m adjustable length)',
      'Lightweight non-slip aluminum textured handles',
      'Quick thumb-screw length adjusters included'
    ],
    sizes: ['Adjustable 3m Cable'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'fit-vectorx-gymball',
    name: 'Vector X Anti-Burst Exercise Gym Ball with Foot Pump',
    brand: 'Vector X',
    sport: 'Fitness',
    category: 'Core & Stability',
    subcategory: 'Gym Balls',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy duty anti-burst Swiss stability ball for core strengthening, physiotherapy rehabilitation, and yoga stretches.',
    features: [
      'Anti-burst commercial grade PVC rated up to 300kg capacity',
      'Textured slip-resistant ridges for stable floor contact',
      'Includes dual-action rapid foot pump and spare plugs',
      'Tested for safety and puncture slow-deflation'
    ],
    sizes: ['65cm (Height 5\'4" - 5\'10")', '75cm (Height 5\'10"+)'],
    colours: ['Silver Grey', 'Deep Navy'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== ATHLETICS & RUNNING ====================
  {
    id: 'ath-sega-spikes',
    name: 'Sega Star Track Athletics Sprint Spikes with Key',
    brand: 'Sega',
    sport: 'Athletics & Running',
    category: 'Spike Shoes',
    subcategory: 'Track & Field',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    description: 'Specialist sprint track shoes featuring 7-spike rigid forefoot plate, lightweight synthetic upper, and reinforced heel counter.',
    features: [
      '7-pin replaceable spike layout for explosive acceleration',
      'Lightweight breathable synthetic mesh and PU upper',
      'Full spike wrench tool and spare metal spikes included',
      'Suitable for track sprint training and school sports meets'
    ],
    sizes: ['UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    colours: ['Neon Orange / Royal Blue', 'White / Silver'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'ath-nivia-relay-baton',
    name: 'Nivia Official Aluminum Relay Baton (Set of 4 / Single)',
    brand: 'Nivia',
    sport: 'Athletics & Running',
    category: 'Field Equipment',
    subcategory: 'Relay & Track',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    description: 'Anodized lightweight aluminum relay baton with rolled safety edges and non-slip anodized grip.',
    features: [
      'Seamless drawn hollow aluminum tube with smooth rolled edges',
      'Standard track regulation weight and circumference',
      'Scratch-resistant electroplated colour finish for quick visual handoffs',
      'Pack of 4 distinct colours for inter-house track meets'
    ],
    sizes: ['Official Senior Size (30cm length, 38mm diameter)'],
    colours: ['Set of 4 (Red, Blue, Green, Gold)'],
    availability: 'Check Availability',
    status: 'Regular'
  },

  // ==================== SCHOOL SPORTS ====================
  {
    id: 'sch-jhs-training-cones',
    name: 'Jai Hind Sports Pro Agility Training Kit (50 Space Markers + Stand)',
    brand: 'JHS',
    sport: 'School Sports',
    category: 'Drill & Agility',
    subcategory: 'Markers & Cones',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    description: 'Flexible shatterproof polyethylene saucer cones with heavy duty transport caddy for school sports drills, soccer drills, and PE classes.',
    features: [
      '50 high-flexibility marker cones that bounce back when stepped on',
      '5 bright high-visibility colours: Orange, Yellow, Green, Blue, White',
      'Includes metal storage carrier rack and drawstring carry tote',
      'UV-stabilized weather-resistant material suited for open grounds'
    ],
    sizes: ['Set of 50 Markers with Stand'],
    availability: 'Check Availability',
    status: 'Featured'
  },
  {
    id: 'sch-jhs-team-bibs',
    name: 'Jai Hind Sports Breathable Team Training Bibs (12-Pack)',
    brand: 'JHS',
    sport: 'School Sports',
    category: 'Team Kits',
    subcategory: 'Training Bibs / Pinnies',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight micro-mesh training pinnies designed for school house matches, squad scrimmages, and tournament team segregation.',
    features: [
      '100% moisture-wicking quick-dry micro-mesh polyester',
      'Reinforced neck and armhole stitching withstands aggressive tugging',
      'Numbered 1 to 12 screen printed on front and back',
      'Available in House colours: Red, Blue, Green, Yellow'
    ],
    sizes: ['Junior (School Classes 4-8)', 'Senior (Classes 9-12 / College)'],
    colours: ['Saffron Orange', 'India Green', 'Royal Blue', 'Bright Yellow', 'Red'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'sch-nivia-whistle',
    name: 'Nivia Pealess Referee Whistle with Breakaway Lanyard',
    brand: 'Nivia',
    sport: 'School Sports',
    category: 'Officiating',
    subcategory: 'Whistles & Timers',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    description: 'Pealess high-decibel whistle for clear signaling across open school grounds and sports courts.',
    features: [
      'Pealess chamber technology prevents jamming or freezing in rain',
      'High-impact ABS construction with cushioned mouth grip',
      'Includes comfortable neck lanyard with safety breakaway clip',
      'Essential for physical directors, sports coaches, and tournament referees'
    ],
    sizes: ['Standard Official'],
    availability: 'Check Availability',
    status: 'Regular'
  },
  {
    id: 'sch-jhs-tugofwar-rope',
    name: 'Jai Hind Sports Official Manila Tug of War Rope (30m)',
    brand: 'JHS',
    sport: 'School Sports',
    category: 'Ground Equipment',
    subcategory: 'Annual Sports Day',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    description: 'Natural jute-manila 32mm thick braided rope with whipped heat-shrunk ends and central marking flag for school sports day competitions.',
    features: [
      '100% pure organic Manila fiber providing natural hand grip without burns',
      'Heavy 32mm diameter meeting inter-school athletic federation rules',
      'Whipped and heat-shrunk safety ends to prevent unraveling',
      'Red center tape marker and white outer limit markers pre-fitted'
    ],
    sizes: ['30 Meters (Senior)', '20 Meters (Junior)'],
    availability: 'Check Availability',
    status: 'Regular'
  }
];

export const ALL_BRANDS = Array.from(new Set(PRODUCTS.map(p => p.brand))).sort();
