import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* Add shadow on scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 py-3"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid #E2E8F0',
        boxShadow: scrolled ? '0 4px 24px rgba(10, 37, 64, 0.10)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* ── Main bar ─────────────────────────────────── */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* ── Logo / Brand ─────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 select-none"
          aria-label="Ganesh Plasto Pack — home"
        >
          {/* Brand icon badge */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 50%, #14B8A6 100%)',
              boxShadow: '0 4px 12px rgba(11, 94, 215, 0.3)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#ffffff" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>

          <span
            className="font-bold text-[15px] leading-tight tracking-tight"
            style={{ color: '#0F172A', fontFamily: "'Poppins', sans-serif" }}
          >
            Ganesh Plasto Pack
          </span>
        </Link>

        {/* ── Desktop nav ──────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'relative px-3.5 py-2 rounded-lg text-[13px] font-semibold',
                  'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
                  isActive
                    ? 'text-[#0B5ED7] bg-[#EFF6FF]'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── CTA + Hamburger ──────────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5
                       rounded-[10px] text-[13px] font-semibold text-white
                       transition-all duration-300 hover:-translate-y-[2px]"
            style={{
              background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
              boxShadow: '0 8px 20px rgba(11, 94, 215, 0.28)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 12px 28px rgba(11, 94, 215, 0.4)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(11, 94, 215, 0.28)')}
          >
            Get a Quote
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center
                       transition-all duration-200 active:scale-95 bg-[#F8FAFC] border border-[#E2E8F0]"
          >
            {mobileOpen
              ? <X size={17} color="#0B5ED7" />
              : <Menu size={17} color="#0F172A" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      {mobileOpen && (
        <div
          className="mt-3 rounded-xl px-3 py-3 flex flex-col gap-1 max-w-7xl mx-auto"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            boxShadow: '0 12px 32px rgba(10, 37, 64, 0.1)',
          }}
        >
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'block rounded-lg px-4 py-2.5 text-[13px] font-semibold',
                  'transition-all duration-200',
                  isActive
                    ? 'text-[#0B5ED7] bg-[#EFF6FF]'
                    : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="mt-2 flex justify-center items-center rounded-[10px] px-4 py-2.5
                       text-[13px] font-semibold text-white
                       transition-all duration-200 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
              boxShadow: '0 6px 16px rgba(11, 94, 215, 0.25)',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
