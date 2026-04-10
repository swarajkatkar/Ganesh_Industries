/**
 * GANESH PLASTO PACK — PRODUCT DATA (v2)
 * ══════════════════════════════════════
 * 14 categories with full product data.
 * HOW TO EDIT:
 *   • Add a new category → push an object to CATEGORIES.
 *   • Add a product      → push to the category's `products` array.
 *   • Swap images        → replace the `image` URL with a real asset path.
 */

/* ── Shared placeholder images ──────────────────────────────────────── */
const PH = {
  agro: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=420&fit=crop&q=80',
  bottle: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=420&fit=crop&q=80',
  chem: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=420&fit=crop&q=80',
  oil: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=420&fit=crop&q=80',
  food: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=420&fit=crop&q=80',
  milk: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=420&fit=crop&q=80',
  water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&h=420&fit=crop&q=80',
  clean: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=420&fit=crop&q=80',
  powder: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=420&fit=crop&q=80',
  engine: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=420&fit=crop&q=80',
  syrup: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=420&fit=crop&q=80',
  jar: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&h=420&fit=crop&q=80',
  cap: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&h=420&fit=crop&q=80',
  bulk: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=420&fit=crop&q=80',
  animal: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=420&fit=crop&q=80',
  ketchup: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=420&fit=crop&q=80',
  market: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=420&fit=crop&q=80',
};

/* ══════════════════════════════════════════════════════════════════════
   CATEGORIES
   ══════════════════════════════════════════════════════════════════════ */
export const CATEGORIES = [

  /* ── 1. Fertilizer & Pesticide Bottles ──────────────────────── */
  {
    id: 'fertilizer-pesticide',
    name: 'Fertilizer & Pesticide Bottles',
    description: 'High-quality HDPE bottles for agrochemical storage. Chemical-resistant, leak-proof, and available in multiple capacities.',
    image: PH.agro,
    products: [
      {
        id: 'emida',
        name: 'Emida Bottle',
        sizes: ['100ml', '250ml', '500ml', '1L'],
        image: PH.bottle,
        description: 'HDPE bottle designed for pesticide and fertilizer storage with high chemical resistance.',
        applications: ['Pesticides', 'Fertilizers', 'Agrochemicals'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Chemical Resistant', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'handle-bottle-fp',
        name: 'Handle Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: PH.agro,
        description: 'Ergonomic handle bottle for easy handling and pouring of agrochemical liquids.',
        applications: ['Pesticides', 'Liquid Fertilizers'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Ergonomic', 'Easy Grip'],
        type: 'HDPE',
      },
      {
        id: 'square-bottle',
        name: 'Square Bottle',
        sizes: ['50ml', '100ml', '250ml', '500ml', '1L'],
        image: PH.bottle,
        description: 'Space-efficient square bottles ideal for agrochemical storage and transport.',
        applications: ['Agrochemicals', 'Retail Packaging'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Stackable', 'Space Saving'],
        type: 'HDPE',
      },
      {
        id: 'sigenta',
        name: 'Sigenta Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: PH.agro,
        description: 'Specialized bottle for agrochemical formulations with secure closure.',
        applications: ['Pesticides', 'Herbicides'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Secure Cap', 'Precision Design'],
        type: 'HDPE',
      },
      {
        id: 'plain-bm',
        name: 'Plain BM Bottle',
        sizes: ['100ml', '175ml', '250ml', '350ml', '500ml', '1L', '1250ml'],
        image: PH.bottle,
        description: 'Standard blow-moulded bottle for general agrochemical use.',
        applications: ['Fertilizers', 'Pesticides', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Versatile', 'Cost Effective'],
        type: 'HDPE',
      },
      {
        id: 'glypho',
        name: 'Glypho Bottle',
        sizes: ['500ml', '1L', '5L'],
        image: PH.agro,
        description: 'Designed for herbicide and glyphosate packaging with chemical compatibility.',
        applications: ['Herbicides', 'Weedicides'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Herbicide Grade', 'Chemical Safe'],
        type: 'HDPE',
      },
      {
        id: 'spiral',
        name: 'Spiral Bottle',
        sizes: ['1L'],
        image: PH.bottle,
        description: 'Spiral grip design bottle for improved handling in field conditions.',
        applications: ['Pesticides', 'Field Use'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Grip Design', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'oval',
        name: 'Oval Bottle',
        sizes: ['500ml', '1L', '2L', '3L', '5L', '6L'],
        image: PH.agro,
        description: 'Ergonomic oval bottles for easy pouring and storage.',
        applications: ['Agrochemicals', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Ergonomic', 'Large Capacity'],
        type: 'HDPE',
      },
      {
        id: 'handle-barni',
        name: 'Handle Barni',
        sizes: ['500gm', '1kg', '2kg', '5kg', '10kg', '25kg'],
        image: PH.jar,
        description: 'Heavy-duty barni with handle for powder and granular storage.',
        applications: ['Fertilizer Storage', 'Powders'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Heavy Duty', 'Wide Mouth'],
        type: 'HDPE',
      },
      {
        id: 'wide-mouth-barni',
        name: 'Wide Mouth Barni',
        sizes: ['250gm', '500gm', '1kg'],
        image: PH.jar,
        description: 'Wide-mouth containers for easy filling and dispensing of powders.',
        applications: ['Powder Storage', 'Granules'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Wide Mouth', 'Easy Fill'],
        type: 'HDPE',
      },
      {
        id: 'meera-bottle',
        name: 'Meera Bottle (VSI)',
        sizes: ['1L'],
        image: PH.bottle,
        description: 'Standard 1L bottle widely used in agrochemical applications.',
        applications: ['Agrochemicals', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Standard Design'],
        type: 'HDPE',
      },
      {
        id: 'mauzer-shape',
        name: 'Mauzer Shape Container',
        sizes: ['20L', '25L', '35L'],
        image: PH.bulk,
        description: 'Large-capacity containers for bulk agrochemical storage and transport.',
        applications: ['Bulk Storage', 'Industrial Use'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Bulk Storage', 'Heavy Duty'],
        type: 'HDPE',
      },
      {
        id: 'square-chemical-can',
        name: 'Square Chemical Can',
        sizes: ['10L', '20L'],
        image: PH.bulk,
        description: 'Industrial-grade square cans for chemical storage and transport.',
        applications: ['Chemicals', 'Industrial Liquids'],
        material: 'HDPE',
        category: 'Fertilizer & Pesticide Bottles',
        tags: ['Industrial Grade', 'Durable'],
        type: 'HDPE',
      },
    ]
  },

  /* ── 2. Chemical Containers ──────────────────────────────────── */
  {
    id: 'chemical-containers',
    name: 'Chemical Containers',
    description: 'Industrial-grade HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. Leak-proof closures and UN certifications available.',
    image: PH.chem,
    products: [
      {
        id: 'radiant-shape',
        name: 'Radiant Shape Container',
        sizes: ['1L', '5L'],
        image: PH.chem,
        description: 'Durable HDPE containers designed for safe storage and transport of acid-based chemicals.',
        applications: ['Acid Storage', 'Industrial Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Chemical Resistant', 'Leak Proof'],
        type: 'HDPE',
      },
      {
        id: 'mahaveer-shape',
        name: 'Mahaveer Shape Container',
        sizes: ['400ml', '500ml', '900ml', '1L', '4L', '5L'],
        image: PH.chem,
        description: 'Versatile HDPE containers suitable for various chemical storage needs with strong build quality.',
        applications: ['Acids', 'Industrial Liquids', 'Chemical Packaging'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Durable', 'Multi Size'],
        type: 'HDPE',
      },
      {
        id: 'phosphoric-acid',
        name: 'Phosphoric Acid Container',
        sizes: ['5L (Oval)'],
        image: PH.chem,
        description: 'Specialized oval-shaped container designed for phosphoric acid storage with high chemical resistance.',
        applications: ['Phosphoric Acid', 'Industrial Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Acid Resistant', 'Oval Shape'],
        type: 'HDPE',
      },
      {
        id: 'sulphuric-acid',
        name: 'Sulphuric Acid Container (Cross Handle)',
        sizes: ['20L'],
        image: PH.bulk,
        description: 'Heavy-duty 20L cross-handle container (Taiwan shape) for safe sulphuric acid storage and transport.',
        applications: ['Sulphuric Acid', 'Industrial Storage', 'Bulk Chemicals'],
        material: 'HDPE',
        category: 'Chemical Containers',
        tags: ['Heavy Duty', 'Cross Handle', 'Industrial Grade'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 3. Edible Oil Containers ─────────────────────────────────── */
  {
    id: 'edible-oil',
    name: 'Edible Oil Containers',
    description: 'Food-safe PET and HDPE containers for refined oils, ghee, and vanaspati. BIS-certified, UV-stabilised.',
    image: PH.oil,
    products: [
      {
        id: 'adani-shape',
        name: 'Adani Shape Container',
        sizes: [], // ⚠️ Add sizes
        image: PH.oil,
        description: 'Premium edible oil container with strong build and market-standard design.',
        applications: ['Edible Oil', 'Cooking Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Food Grade', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'gemini',
        name: 'Gemini Container',
        sizes: [], // ⚠️ Add sizes
        image: PH.oil,
        description: 'Popular edible oil packaging container suitable for retail and bulk use.',
        applications: ['Cooking Oil', 'Refined Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Retail Use', 'Strong Build'],
        type: 'HDPE',
      },
      {
        id: 'malharpet',
        name: 'Malharpet Container',
        sizes: [], // ⚠️ Add sizes
        image: PH.oil,
        description: 'High-quality oil container used for commercial edible oil storage.',
        applications: ['Bulk Oil Storage', 'Retail Packaging'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Bulk Use', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'samarth',
        name: 'Samarth Container',
        sizes: [], // ⚠️ Add sizes
        image: PH.oil,
        description: 'Robust container designed for edible oil packaging with easy handling.',
        applications: ['Cooking Oil', 'Edible Oil'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Easy Handling', 'Food Grade'],
        type: 'HDPE',
      },
      {
        id: 'oval-oil',
        name: 'Oval Oil Container',
        sizes: [], // ⚠️ Add sizes
        image: PH.oil,
        description: 'Ergonomic oval-shaped container for efficient storage and pouring of edible oil.',
        applications: ['Edible Oil', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Ergonomic', 'Space Efficient'],
        type: 'HDPE',
      },
      {
        id: 'oil-can-15kg',
        name: '15kg Oil Can',
        sizes: ['15kg'],
        image: PH.bulk,
        description: 'Heavy-duty oil can for bulk edible oil storage and transport.',
        applications: ['Bulk Oil Storage', 'Industrial Supply'],
        material: 'HDPE',
        category: 'Edible Oil Containers',
        tags: ['Heavy Duty', 'Bulk Storage'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 4. Tomato Ketchup & Sauce ───────────────────────────────── */
  {
    id: 'ketchup-sauce',
    name: 'Tomato Ketchup & Sauce',
    description: 'Food-grade PET and HDPE bottles for ketchup, sauces, and condiments. Squeeze-bottle and flip-cap options.',
    image: PH.ketchup,
    products: [
      {
        id: 'ketchup-sauce-container',
        name: 'Ketchup & Sauce Container',
        sizes: ['4kg', '5kg'],
        image: PH.ketchup,
        description: 'Food-grade HDPE containers designed for packaging tomato ketchup and sauces. Strong, leak-proof, and suitable for bulk storage.',
        applications: ['Tomato Ketchup', 'Sauces', 'Food Industry'],
        material: 'HDPE',
        category: 'Tomato Ketchup & Sauce',
        tags: ['Food Grade', 'Leak Proof', 'Bulk Storage'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 5. Market / General Containers ─────────────────────────── */
  {
    id: 'market-general',
    name: 'Market / General Containers',
    description: 'Versatile general-purpose HDPE and PET containers for diverse market applications. Standard shapes for easy branding.',
    image: PH.market,
    products: [
      {
        id: 'small-containers',
        name: 'Small Size Containers',
        sizes: ['400ml', '500ml', '900ml'],
        image: PH.market,
        description: 'Compact containers suitable for small quantity storage and retail use.',
        applications: ['Retail Products', 'Small Storage'],
        material: 'HDPE',
        category: 'Market / General Containers',
        tags: ['Compact', 'Retail Friendly'],
        type: 'HDPE',
      },
      {
        id: 'medium-containers',
        name: 'Medium Size Containers',
        sizes: ['1L', '2L', '3L', '4L', '4.5L', '5L', '6L'],
        image: PH.market,
        description: 'Medium capacity containers ideal for general-purpose liquid storage.',
        applications: ['Household Use', 'Retail Storage'],
        material: 'HDPE',
        category: 'Market / General Containers',
        tags: ['Standard Size', 'Versatile'],
        type: 'HDPE',
      },
      {
        id: 'large-containers',
        name: 'Large Size Containers',
        sizes: ['10L', '18L', '20L', '30L', '35L'],
        image: PH.bulk,
        description: 'Heavy-duty large containers designed for bulk storage and industrial applications.',
        applications: ['Bulk Storage', 'Industrial Use'],
        material: 'HDPE',
        category: 'Market / General Containers',
        tags: ['Bulk', 'Heavy Duty'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 6. Milk Cans & Ghagar ───────────────────────────────────── */
  {
    id: 'milk-cans',
    name: 'Milk Cans & Ghagar',
    description: 'Food-grade HDPE milk cans engineered for dairy co-operatives and private dairies. Easy-grip handles, airtight lids, FDA-compliant.',
    image: PH.milk,
    products: [
      {
        id: 'milk-can',
        name: 'Milk Can',
        sizes: ['3.5L', '5L', '10L', '15L'],
        image: PH.milk,
        description: 'Unbreakable HDPE milk cans designed for safe dairy storage and transportation. Strong build with secure lid.',
        applications: ['Milk Storage', 'Dairy Transport', 'Farm Use'],
        material: 'HDPE',
        category: 'Milk Cans & Ghagar',
        tags: ['Unbreakable', 'Food Grade', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'ghagar',
        name: 'Ghagar',
        sizes: ['10L', '15L', '17L'],
        image: PH.milk,
        description: 'Traditional unbreakable ghagar containers used for milk storage and transport in dairy applications.',
        applications: ['Milk Storage', 'Village Dairy Use', 'Transport'],
        material: 'HDPE',
        category: 'Milk Cans & Ghagar',
        tags: ['Traditional Design', 'Unbreakable', 'Lightweight'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 7. Animal Healthcare ────────────────────────────────────── */
  {
    id: 'animal-healthcare',
    name: 'Animal Healthcare',
    description: 'HDPE and PP containers for veterinary medicines, animal feed supplements, and livestock care products.',
    image: PH.animal,
    products: [
      {
        id: 'milk-can',
        name: 'Milk Can',
        sizes: ['3.5L', '5L', '10L', '15L'],
        image: PH.milk,
        description: 'Durable HDPE milk cans suitable for animal dairy usage and liquid storage. Strong build with secure lid.',
        applications: ['Dairy Use', 'Milk Storage', 'Farm Transport'],
        material: 'HDPE',
        category: 'Animal Healthcare',
        tags: ['Food Grade', 'Heavy Duty'],
        type: 'HDPE',
      },
      {
        id: 'jumbo-bottles',
        name: 'Jumbo Bottles',
        sizes: ['100ml', '250ml', '500ml', '1L'],
        image: PH.bottle,
        description: 'High-quality jumbo bottles used for veterinary liquids and animal healthcare products.',
        applications: ['Veterinary Medicines', 'Animal Supplements', 'Liquid Storage'],
        material: 'HDPE',
        category: 'Animal Healthcare',
        tags: ['Chemical Resistant', 'Durable'],
        type: 'HDPE',
      },
      {
        id: 'handle-bottle-ah',
        name: 'Handle Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: PH.agro,
        description: 'Ergonomic handle bottles for easy pouring and handling in animal healthcare applications.',
        applications: ['Veterinary Use', 'Liquid Handling', 'Farm Use'],
        material: 'HDPE',
        category: 'Animal Healthcare',
        tags: ['Ergonomic', 'Easy Grip'],
        type: 'HDPE',
      },
    ]
  },

  /* ── 8. Coolant & Engine Oil ─────────────────────────────────── */
  {
    id: 'coolant-engine-oil',
    name: 'Coolant & Engine Oil',
    description: 'HDPE containers for automotive coolants, engine oils, gear oils, and lubricants. Chemical-compatible and spill-proof.',
    image: PH.engine,
    products: [
      {
        id: 'tyre-shape',
        name: 'Tyre Shape Container',
        sizes: ['500ml', '1L', '3L'],
        image: PH.engine,
        description: 'Unique tyre-shaped HDPE containers designed for engine oil and lubricant packaging. Attractive design for retail markets.',
        applications: ['Engine Oil', 'Lubricants', 'Automotive Fluids'],
        material: 'HDPE',
        category: 'Coolant & Engine Oil',
        tags: ['Attractive Design', 'Automotive Use'],
        type: 'HDPE',
      },
      {
        id: 'coolant-handle',
        name: 'Coolant Bottle with Handle',
        sizes: ['1L'],
        image: PH.engine,
        description: 'HDPE coolant bottles with ergonomic handle for easy pouring and handling of automotive fluids.',
        applications: ['Coolant', 'Radiator Fluid', 'Automotive Use'],
        material: 'HDPE',
        category: 'Coolant & Engine Oil',
        tags: ['Handle Grip', 'Easy Pour'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 9. Food Syrup & Pickle ──────────────────────────────────── */
  {
    id: 'food-syrup-pickle',
    name: 'Food Syrup & Pickle',
    description: 'Food-grade PET and HDPE containers for syrups, jams, pickles, and condiments. BIS-certified and airtight.',
    image: PH.syrup,
    products: [
      {
        id: 'kokam-syrup',
        name: 'Kokam Syrup Bottle',
        sizes: ['500ml', '900ml', '1L', '4L', '5L'],
        image: PH.syrup,
        description: 'Food-grade containers specially designed for syrup storage such as kokam and other liquid concentrates.',
        applications: ['Kokam Syrup', 'Liquid Syrups', 'Food Concentrates'],
        material: 'PET',
        category: 'Food Syrup & Pickle',
        tags: ['Food Grade', 'Leak Proof'],
        type: 'PET',
      },
      {
        id: 'pickle-barni',
        name: 'Pickle Barni',
        sizes: ['5kg', '10kg', '25kg'],
        image: PH.jar,
        description: 'Heavy-duty wide-mouth containers ideal for storing pickles and other preserved food items.',
        applications: ['Pickles', 'Food Storage', 'Bulk Food'],
        material: 'HDPE',
        category: 'Food Syrup & Pickle',
        tags: ['Wide Mouth', 'Food Grade', 'Bulk Storage'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 10. Water Storage Containers ───────────────────────────── */
  {
    id: 'water-storage',
    name: 'Water/Diesel Storage Containers',
    description: 'BPA-free PET and HDPE water jars and containers for packaged drinking water and home storage.',
    image: PH.water,
    products: [
      {
        id: 'water-cans',
        name: 'Water Cans',
        sizes: ['18L', '20L', '25L', '35L'],
        image: PH.water,
        description: 'Durable HDPE water cans designed for safe storage and transportation of drinking water.',
        applications: ['Water Storage', 'Home Use', 'Commercial Supply'],
        material: 'HDPE',
        category: 'Water Storage Containers',
        tags: ['Food Grade', 'Reusable', 'Heavy Duty'],
        type: 'HDPE',
      },
      {
        id: 'diesel-cans',
        name: 'Diesel Cans',
        sizes: ['20L', '35L'],
        image: PH.bulk,
        description: 'Heavy-duty containers specially designed for diesel storage. Available in yellow color for safety identification.',
        applications: ['Diesel Storage', 'Fuel Transport', 'Industrial Use'],
        material: 'HDPE',
        category: 'Water Storage Containers',
        tags: ['Fuel Safe', 'Industrial Grade', 'Yellow Color'],
        type: 'HDPE',
      },
      {
        id: 'water-jars',
        name: 'Water Jars',
        sizes: ['5kg', '10kg', '25kg'],
        image: PH.water,
        description: 'Strong and reusable jars suitable for water storage and general household use.',
        applications: ['Water Storage', 'Household Use'],
        material: 'HDPE',
        category: 'Water Storage Containers',
        tags: ['Reusable', 'Durable'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 11. Powder Packing Jars ─────────────────────────────────── */
  {
    id: 'powder-packing',
    name: 'Powder Packing Jars',
    description: 'Wide-mouth HDPE and PP jars for spices, protein powders, pharma, and industrial powder packaging.',
    image: PH.powder,
    products: [
      {
        id: 'powder-small',
        name: 'Powder Packing Jars (Small)',
        sizes: ['250gm', '500gm', '1kg'],
        image: PH.powder,
        description: 'Compact jars suitable for small quantity powder packaging such as spices and supplements.',
        applications: ['Spices', 'Powders', 'Retail Packaging'],
        material: 'HDPE',
        category: 'Powder Packing Jars',
        tags: ['Compact', 'Food Grade'],
        type: 'HDPE',
      },
      {
        id: 'powder-bulk',
        name: 'Powder Packing Jars (Bulk)',
        sizes: ['2kg', '5kg', '10kg', '25kg'],
        image: PH.bulk,
        description: 'Heavy-duty containers designed for bulk powder storage and industrial use.',
        applications: ['Bulk Powders', 'Industrial Storage'],
        material: 'HDPE',
        category: 'Powder Packing Jars',
        tags: ['Bulk Storage', 'Heavy Duty'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 12. Caps & Accessories ──────────────────────────────────── */
  {
    id: 'caps-accessories',
    name: 'Caps & Accessories',
    description: 'Precision-moulded PP and HDPE caps, closures, and accessories for all container types.',
    image: PH.cap,
    products: [
      {
        id: 'air-vent-plugs',
        name: 'Air Vent Plugs',
        sizes: [],
        image: PH.cap,
        description: 'Vent plugs designed to release internal pressure safely from containers.',
        applications: ['Chemical Containers', 'Industrial Use'],
        material: 'PP',
        category: 'Caps & Accessories',
        tags: ['Pressure Release'],
        type: 'PP',
      },
      {
        id: 'sleeves',
        name: 'Sleeves',
        sizes: ['All Sizes'],
        image: PH.cap,
        description: 'Protective sleeves used for sealing and packaging containers of various sizes.',
        applications: ['Packaging', 'Sealing'],
        material: 'Plastic',
        category: 'Caps & Accessories',
        tags: ['Flexible', 'All Sizes'],
        type: 'Plastic',
      },
      {
        id: 'induction-wads',
        name: 'Induction Heated Wads',
        sizes: [],
        image: PH.cap,
        description: 'Sealing wads used for induction sealing to ensure leak-proof packaging.',
        applications: ['Sealing', 'Food & Chemical Packaging'],
        material: 'Aluminium',
        category: 'Caps & Accessories',
        tags: ['Leak Proof', 'Sealing'],
        type: 'Aluminium',
      },
      {
        id: 'measuring-caps',
        name: 'Measuring Caps',
        sizes: [],
        image: PH.cap,
        description: 'Caps designed with measurement markings for accurate liquid dispensing.',
        applications: ['Liquids', 'Detergents', 'Chemicals'],
        material: 'PP',
        category: 'Caps & Accessories',
        tags: ['Measurement', 'Functional'],
        type: 'PP',
      },
    ],
  },

  /* ── 13. Household Cleaning Bottles ─────────────────────────── */
  {
    id: 'cleaning-bottles',
    name: 'Household Cleaning Bottles',
    description: 'PET and HDPE bottles for liquid detergents, fabric softeners, floor cleaners, and disinfectants.',
    image: PH.clean,
    products: [
      {
        id: 'lizol-type',
        name: 'Lizol Type Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: PH.clean,
        description: 'HDPE bottles designed for floor cleaners and disinfectants similar to Lizol type packaging.',
        applications: ['Floor Cleaner', 'Disinfectant'],
        material: 'HDPE',
        category: 'Household Cleaning Bottles',
        tags: ['Cleaning Use', 'Ergonomic'],
        type: 'HDPE',
      },
      {
        id: 'harpic-type',
        name: 'Harpic Type Bottle',
        sizes: ['250ml', '500ml', '1L'],
        image: PH.clean,
        description: 'Special nozzle bottles designed for toilet cleaners and bathroom cleaning solutions.',
        applications: ['Toilet Cleaner', 'Bathroom Cleaning'],
        material: 'HDPE',
        category: 'Household Cleaning Bottles',
        tags: ['Nozzle Design', 'Cleaning Use'],
        type: 'HDPE',
      },
      {
        id: 'oval-cleaning',
        name: 'Oval Shape Container',
        sizes: ['5L'],
        image: PH.clean,
        description: 'Large capacity oval containers for bulk cleaning liquid storage.',
        applications: ['Bulk Cleaning Liquids', 'Industrial Cleaning'],
        material: 'HDPE',
        category: 'Household Cleaning Bottles',
        tags: ['Bulk Storage'],
        type: 'HDPE',
      },
    ],
  },

  /* ── 14. Industrial Bulk Containers ─────────────────────────── */
  {
    id: 'industrial-bulk',
    name: 'Industrial Bulk Containers',
    description: 'Heavy-duty HDPE drums, IBCs, and large containers for industrial bulk storage and transport.',
    image: PH.bulk,
    products: [
      {
        id: 'mauzer-container',
        name: 'Mauzer Shape Container',
        sizes: ['20L', '25L', '35L'],
        image: PH.bulk,
        description: 'Heavy-duty industrial containers for bulk liquid storage and transport.',
        applications: ['Bulk Chemicals', 'Industrial Storage'],
        material: 'HDPE',
        category: 'Industrial Bulk Containers',
        tags: ['Heavy Duty', 'Bulk'],
        type: 'HDPE',
      },
      {
        id: 'industrial-cans',
        name: 'Industrial Bulk Cans',
        sizes: ['10L', '20L', '30L', '35L'],
        image: PH.bulk,
        description: 'Large capacity containers suitable for industrial liquids and chemicals.',
        applications: ['Industrial Use', 'Chemical Storage'],
        material: 'HDPE',
        category: 'Industrial Bulk Containers',
        tags: ['Large Capacity', 'Durable'],
        type: 'HDPE',
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
  return [...new Set(cat.products.map((p) => p.material))];
}

/* ── Helper: get unique sizes within a category ───────────────────── */
export function getSizesForCategory(categoryId) {
  const cat = getCategoryById(categoryId);
  if (!cat) return []
  const all = cat.products.flatMap((p) => p.sizes);
  return [...new Set(all)];
}
