/**
 * GANESH PLASTO PACK — PRODUCT DATA
 * ══════════════════════════════════
 * Source of truth for all product categories and SKUs.
 *
 * HOW TO EDIT:
 *   • Add a new category → push an object to CATEGORIES.
 *   • Add a product      → push to the category's `products` array.
 *   • Swap images        → replace the `image` URL with a real asset path.
 *
 * IMAGE CONVENTION:
 *   Unsplash URLs used as placeholders.
 *   Replace with:  '/assets/products/<filename>.webp'
 */

/* ── Shared Unsplash photo IDs ─────────────────────────────────────── */
const PH = {
  agro1:    'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=420&fit=crop&q=80',
  agro2:    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=420&fit=crop&q=80',
  oil1:     'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=420&fit=crop&q=80',
  oil2:     'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=420&fit=crop&q=80',
  chem1:    'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=420&fit=crop&q=80',
  chem2:    'https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=600&h=420&fit=crop&q=80',
  milk1:    'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=420&fit=crop&q=80',
  milk2:    'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=420&fit=crop&q=80',
  water1:   'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=420&fit=crop&q=80',
  water2:   'https://images.unsplash.com/photo-1600628421060-7b4b3d4d1b8b?w=600&h=420&fit=crop&q=80',
  clean1:   'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=420&fit=crop&q=80',
  clean2:   'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=420&fit=crop&q=80',
  /* Category cover images */
  catAgro:  'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&h=500&fit=crop&q=80',
  catOil:   'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=500&fit=crop&q=80',
  catChem:  'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&h=500&fit=crop&q=80',
  catMilk:  'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&h=500&fit=crop&q=80',
  catWater: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=500&fit=crop&q=80',
  catClean: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&h=500&fit=crop&q=80',
};

/* ══════════════════════════════════════════════════════════════════════
   CATEGORIES
   ══════════════════════════════════════════════════════════════════════ */
export const CATEGORIES = [
  /* ── 1. Agro Chemical Bottles ─────────────────────────────── */
  {
    id:          'agro-chemical-bottles',
    name:        'Agro Chemical Bottles',
    description: 'UN-approved HDPE bottles designed for safe storage and transport of pesticides, herbicides, and fertilisers. Available in multiple capacities with tamper-evident closures.',
    image:       PH.catAgro,
    products: [
      {
        id:           'agro-001',
        name:         'HDPE Agro Bottle 250ml',
        type:         'HDPE',
        sizes:        ['250ml'],
        image:        PH.agro1,
        description:  'Compact 250ml HDPE bottle for liquid pesticides. UN-certified, chemical resistant.',
        applications: ['Pesticides', 'Herbicides', 'Fungicides'],
      },
      {
        id:           'agro-002',
        name:         'HDPE Agro Bottle 500ml',
        type:         'HDPE',
        sizes:        ['500ml'],
        image:        PH.agro2,
        description:  '500ml HDPE agricultural bottle with ROPP aluminium seal.',
        applications: ['Insecticides', 'Pesticides'],
      },
      {
        id:           'agro-003',
        name:         'HDPE Agro Bottle 1 Litre',
        type:         'HDPE',
        sizes:        ['1L'],
        image:        PH.agro1,
        description:  '1-litre UN-approved HDPE bottle for concentrated agro chemicals.',
        applications: ['Pesticides', 'Plant Growth Regulators'],
      },
      {
        id:           'agro-004',
        name:         'HDPE Agro Bottle 5 Litre',
        type:         'HDPE',
        sizes:        ['5L'],
        image:        PH.agro2,
        description:  'Heavy-duty 5L HDPE jerry can for bulk agro chemical storage.',
        applications: ['Herbicides', 'Bulk Pesticides', 'Fertilisers'],
      },
      {
        id:           'agro-005',
        name:         'F-Style Agro Container 1L',
        type:         'F-Style',
        sizes:        ['1L'],
        image:        PH.agro1,
        description:  'F-style square HDPE container — maximises shelf space.',
        applications: ['Pesticides', 'Micronutrients'],
      },
      {
        id:           'agro-006',
        name:         'F-Style Agro Container 5L',
        type:         'F-Style',
        sizes:        ['5L'],
        image:        PH.agro2,
        description:  '5L F-style HDPE — efficient stacking and transportation.',
        applications: ['Herbicides', 'Systemic Fungicides'],
      },
    ],
  },

  /* ── 2. Edible Oil Containers ─────────────────────────────── */
  {
    id:          'edible-oil-containers',
    name:        'Edible Oil Containers',
    description: 'Food-safe PET and HDPE containers for refined oils, ghee, and vanaspati. BIS-certified, UV-stabilised to preserve oil quality.',
    image:       PH.catOil,
    products: [
      {
        id:           'oil-001',
        name:         'PET Oil Bottle 500ml',
        type:         'PET',
        sizes:        ['500ml'],
        image:        PH.oil1,
        description:  'Crystal-clear PET bottle ideal for premium branded edible oils.',
        applications: ['Sunflower Oil', 'Mustard Oil', 'Sesame Oil'],
      },
      {
        id:           'oil-002',
        name:         'PET Oil Bottle 1 Litre',
        type:         'PET',
        sizes:        ['1L'],
        image:        PH.oil2,
        description:  '1L PET edible oil bottle with anti-drip neck finish.',
        applications: ['Refined Oil', 'Blended Oil'],
      },
      {
        id:           'oil-003',
        name:         'PET Oil Bottle 2 Litre',
        type:         'PET',
        sizes:        ['2L'],
        image:        PH.oil1,
        description:  'Wide-mouth 2L PET bottle for bulk oil retail packing.',
        applications: ['Refined Oil', 'Groundnut Oil'],
      },
      {
        id:           'oil-004',
        name:         'HDPE Oil Jerry Can 5L',
        type:         'HDPE',
        sizes:        ['5L'],
        image:        PH.oil2,
        description:  'Food-grade HDPE jerry can for 5L oil distribution.',
        applications: ['Bulk Refined Oil', 'Vanaspati'],
      },
      {
        id:           'oil-005',
        name:         'HDPE Oil Jerry Can 15L',
        type:         'HDPE',
        sizes:        ['15L'],
        image:        PH.oil1,
        description:  'Heavy-duty HDPE 15L jerry can with moulded grip handle.',
        applications: ['Industrial Cooking Oil', 'Institutional Supply'],
      },
    ],
  },

  /* ── 3. Chemical Containers ───────────────────────────────── */
  {
    id:          'chemical-containers',
    name:        'Chemical Containers',
    description: 'Industrial-grade HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. Leak-proof closures and UN/DOT certifications available.',
    image:       PH.catChem,
    products: [
      {
        id:           'chem-001',
        name:         'Round Carboy 5L',
        type:         'HDPE',
        sizes:        ['5L'],
        image:        PH.chem1,
        description:  '5L HDPE round carboy for acids and industrial chemicals.',
        applications: ['Acids', 'Alkalis', 'Solvents'],
      },
      {
        id:           'chem-002',
        name:         'Round Carboy 10L',
        type:         'HDPE',
        sizes:        ['10L'],
        image:        PH.chem2,
        description:  '10L HDPE carboy with UN certification for hazardous chemicals.',
        applications: ['Electroplating Solutions', 'Cleaning Agents'],
      },
      {
        id:           'chem-003',
        name:         'Jerry Can 20L',
        type:         'HDPE',
        sizes:        ['20L'],
        image:        PH.chem1,
        description:  '20L HDPE jerry can for bulk industrial chemical transport.',
        applications: ['Lubricants', 'Solvents', 'Industrial Detergents'],
      },
      {
        id:           'chem-004',
        name:         'Narrow Mouth Bottle 1L',
        type:         'PP',
        sizes:        ['1L'],
        image:        PH.chem2,
        description:  'PP narrow-mouth bottle with liner cap for precision dispensing.',
        applications: ['Lab Chemicals', 'Specialty Solvents'],
      },
      {
        id:           'chem-005',
        name:         'Wide Mouth Jar 2L',
        type:         'PP',
        sizes:        ['2L'],
        image:        PH.chem1,
        description:  'Wide-mouth PP jar for solid and semi-solid chemicals.',
        applications: ['Powder Chemicals', 'Adhesives', 'Pigments'],
      },
    ],
  },

  /* ── 4. Milk Cans ─────────────────────────────────────────── */
  {
    id:          'milk-cans',
    name:        'Milk Cans',
    description: 'Food-grade HDPE milk cans engineered for dairy co-operatives and private dairies. Easy-grip handles, airtight lids, FDA-compliant material.',
    image:       PH.catMilk,
    products: [
      {
        id:           'milk-001',
        name:         'Milk Can 5 Litre',
        type:         'HDPE',
        sizes:        ['5L'],
        image:        PH.milk1,
        description:  '5L food-grade HDPE milk can with wide mouth and secure lid.',
        applications: ['Milk Collection', 'Dairy Co-ops'],
      },
      {
        id:           'milk-002',
        name:         'Milk Can 10 Litre',
        type:         'HDPE',
        sizes:        ['10L'],
        image:        PH.milk2,
        description:  '10L HDPE can with ergonomic side handle for easy pouring.',
        applications: ['Farm-to-Dairy Transport', 'Retail Dairies'],
      },
      {
        id:           'milk-003',
        name:         'Milk Can 20 Litre',
        type:         'HDPE',
        sizes:        ['20L'],
        image:        PH.milk1,
        description:  '20L heavy-duty milk can for bulk dairy operations.',
        applications: ['Bulk Milk Transport', 'Institutional Dairies'],
      },
    ],
  },

  /* ── 5. Water Jars ────────────────────────────────────────── */
  {
    id:          'water-jars',
    name:        'Water Jars',
    description: 'BPA-free PET and HDPE water jars for packaged drinking water companies. Crystal clarity, tamper-evident caps, UV-resistant options.',
    image:       PH.catWater,
    products: [
      {
        id:           'water-001',
        name:         'PET Water Jar 1L',
        type:         'PET',
        sizes:        ['1L'],
        image:        PH.water1,
        description:  'BPA-free 1L PET water jar — crystal clear for retail display.',
        applications: ['Packaged Drinking Water', 'Mineral Water'],
      },
      {
        id:           'water-002',
        name:         'PET Water Jar 2L',
        type:         'PET',
        sizes:        ['2L'],
        image:        PH.water2,
        description:  '2L ribbed PET jar for enhanced grip and stackability.',
        applications: ['Packaged Water', 'Beverage Companies'],
      },
      {
        id:           'water-003',
        name:         'HDPE Water Jar 20L',
        type:         'HDPE',
        sizes:        ['20L'],
        image:        PH.water1,
        description:  '20L refillable HDPE water jar for dispensers and offices.',
        applications: ['Water Dispensers', 'Office Supply'],
      },
      {
        id:           'water-004',
        name:         'HDPE Water Jar 25L',
        type:         'HDPE',
        sizes:        ['25L'],
        image:        PH.water2,
        description:  '25L HDPE jar with carry handle for home and commercial use.',
        applications: ['Home Water Storage', 'Commercial Distribution'],
      },
    ],
  },

  /* ── 6. Cleaning / Housekeeping Bottles ───────────────────── */
  {
    id:          'cleaning-bottles',
    name:        'Cleaning Bottles',
    description: 'PET and HDPE bottles for liquid detergents, fabric softeners, floor cleaners, and household disinfectants. Squeeze-bottle designs and trigger-spray options.',
    image:       PH.catClean,
    products: [
      {
        id:           'clean-001',
        name:         'PET Detergent Bottle 500ml',
        type:         'PET',
        sizes:        ['500ml'],
        image:        PH.clean1,
        description:  '500ml PET bottle for liquid dish-wash and hand-wash formulations.',
        applications: ['Dish Wash', 'Hand Wash', 'Surface Cleaners'],
      },
      {
        id:           'clean-002',
        name:         'PET Detergent Bottle 1L',
        type:         'PET',
        sizes:        ['1L'],
        image:        PH.clean2,
        description:  '1L PET bottle with flip-top cap for detergents and cleaners.',
        applications: ['Liquid Detergent', 'Fabric Softener'],
      },
      {
        id:           'clean-003',
        name:         'HDPE Trigger Spray 750ml',
        type:         'HDPE',
        sizes:        ['750ml'],
        image:        PH.clean1,
        description:  '750ml HDPE bottle with trigger spray nozzle for multi-surface cleaners.',
        applications: ['Glass Cleaner', 'Furniture Polish', 'Disinfectants'],
      },
      {
        id:           'clean-004',
        name:         'HDPE Squeeze Bottle 200ml',
        type:         'HDPE',
        sizes:        ['200ml'],
        image:        PH.clean2,
        description:  'Sqeeze-dispensing 200ml HDPE bottle for concentrated cleaners.',
        applications: ['Toilet Cleaners', 'Drain Cleaners'],
      },
      {
        id:           'clean-005',
        name:         'HDPE Floor Cleaner Bottle 1L',
        type:         'HDPE',
        sizes:        ['1L'],
        image:        PH.clean1,
        description:  '1L HDPE bottle with long nozzle for under-rim floor cleaner application.',
        applications: ['Floor Cleaners', 'Bathroom Cleaners'],
      },
    ],
  },
];

/* ── Helper: find a single category by slug ───────────────────────── */
export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id) ?? null;
}

/* ── Helper: find a single product across all categories ──────────── */
export function getProductById(productId) {
  for (const cat of CATEGORIES) {
    const product = cat.products.find((p) => p.id === productId);
    if (product) return { product, category: cat };
  }
  return null;
}

/* ── Helper: get unique types within a category ───────────────────── */
export function getTypesForCategory(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return [];
  return [...new Set(cat.products.map((p) => p.type))];
}

/* ── Helper: get unique sizes within a category ───────────────────── */
export function getSizesForCategory(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return [];
  const all = cat.products.flatMap((p) => p.sizes);
  return [...new Set(all)];
}
