/**
 * SITE CONFIGURATION
 * ──────────────────
 * Central place to update brand information, navigation, and other site-wide settings.
 * Replace placeholder values with real content.
 */

export const siteConfig = {
  brand: {
    name: 'Ganesh Plasto Pack',
    tagline: 'Innovative Packaging Solutions',
    logo: null, // Replace with '/assets/logo.png' or an SVG import
    email: 'gautamkankariya@gmail.com',
    phone: '9561618161',
    address: 'Barshi, Maharashtra',
  },

  /** Unsplash placeholder helper — replace src strings with real assets later */
  placeholderImage: (width = 800, height = 600, seed = 'plastics') =>
    `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=${width}&h=${height}&fit=crop&q=80`,

  nav: [
    { label: 'Home',           path: '/' },
    { label: 'About',          path: '/about' },
    { label: 'Products',       path: '/products' },
    { label: 'Industries',     path: '/industries' },
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'CSR',            path: '/csr' },
    { label: 'Contact',        path: '/contact' },
  ],
};

export default siteConfig;
