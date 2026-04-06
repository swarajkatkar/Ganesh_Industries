import { createBrowserRouter } from 'react-router-dom';

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import HomePage          from './pages/HomePage';
import AboutPage         from './pages/AboutPage';
import ProductsPage      from './pages/ProductsPage';
import CategoryPage      from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import IndustriesPage    from './pages/IndustriesPage';
import InfrastructurePage from './pages/InfrastructurePage';
import CSRPage           from './pages/CSRPage';
import ContactPage       from './pages/ContactPage';
import NotFoundPage      from './pages/NotFoundPage';

/**
 * APPLICATION ROUTER
 * ──────────────────
 * All routes are children of RootLayout so they share the Navbar and Footer.
 * To add a new route, simply push an object to the `children` array.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true,                                  element: <HomePage /> },
      { path: 'about',                                element: <AboutPage /> },
      { path: 'products',                             element: <ProductsPage /> },
      { path: 'products/:category',                   element: <CategoryPage /> },
      { path: 'products/:category/:productId',        element: <ProductDetailPage /> },
      { path: 'industries',                           element: <IndustriesPage /> },
      { path: 'infrastructure',                       element: <InfrastructurePage /> },
      { path: 'csr',                                  element: <CSRPage /> },
      { path: 'contact',                              element: <ContactPage /> },
      { path: '*',                                    element: <NotFoundPage /> },
    ],
  },
]);

export default router;
