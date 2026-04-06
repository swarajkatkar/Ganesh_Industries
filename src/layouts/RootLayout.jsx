import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top instantly on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Navbar />

      {/*
        ── Page outlet ───────────────────────────────────
        Max-width: 1152px  |  Padding: 8px grid (px-4 md:px-8  py-8)
        Centered with mx-auto.
      */}
      <main className="w-full px-4 md:px-6 lg:px-8 flex-1 py-6 md:py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
