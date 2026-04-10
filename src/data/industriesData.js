/**
 * GANESH PLASTO PACK — INDUSTRIES DATA
 * ═════════════════════════════════════
 * Maps each industry to its relevant product category IDs.
 * The first category in the `categories` array is the primary navigation target.
 */

const industries = [
  {
    name: 'Agrochemical Industry',
    categories: ['fertilizer-pesticide'],
  },
  {
    name: 'Chemical Industry',
    categories: ['chemical-containers', 'industrial-bulk'],
  },
  {
    name: 'Food Industry',
    categories: ['edible-oil', 'ketchup-sauce', 'food-syrup-pickle'],
  },
  {
    name: 'Dairy Industry',
    categories: ['milk-cans'],
  },
  {
    name: 'Oil & Lubricants',
    categories: ['coolant-engine-oil'],
  },
  {
    name: 'Water Industry',
    categories: ['water-storage'],
  },
  {
    name: 'Household Industry',
    categories: ['cleaning-bottles'],
  },
  {
    name: 'Animal Healthcare',
    categories: ['animal-healthcare'],
  },
  {
    name: 'Pharmaceutical',
    categories: ['powder-packing', 'caps-accessories'],
  },
  {
    name: 'General Market',
    categories: ['market-general'],
  },
];

export default industries;
