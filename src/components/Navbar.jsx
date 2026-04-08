import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 pt-3 pb-2 w-full px-4 md:px-6 lg:px-8"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* ── Main bar ─────────────────────────────────── */}
      <div
        className="flex items-center justify-between rounded-2xl px-6 py-3"
        style={{ boxShadow: '8px 8px 16px #b5c9db, -8px -8px 16px #ffffff' }}
      >
        {/* ── Logo / Brand ─────────────────────────── */}
        <Link
          to="/"
          className="flex items-center gap-2 select-none"
          aria-label="Ganesh Plasto Pack — home"
        >
          {/* Recessed badge */}
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ boxShadow: 'inset 4px 4px 8px #b5c9db, inset -4px -4px 8px #ffffff' }}
          >
            {/* Simple inline SVG icon — replace with <img src="/logo.png" /> later */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="var(--color-accent)" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>

          <span
            className="font-bold text-[15px] leading-tight tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
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
                  'relative px-3 py-2 rounded-xl text-[13px] font-semibold',
                  'transition-all duration-[300ms] cubic-bezier(0.4,0,0.2,1)',
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:-translate-y-0.5',
                ].join(' ')
              }
              style={({ isActive }) => ({
                boxShadow: isActive ? 'inset 4px 4px 8px #b5c9db, inset -4px -4px 8px #ffffff' : undefined,
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ── CTA + Hamburger ──────────────────────── */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2
                       rounded-xl text-[13px] font-semibold text-white
                       transition-all duration-[300ms] hover:-translate-y-0.5"
            style={{
              background: 'var(--color-accent)',
              boxShadow: '6px 6px 12px rgba(13,148,136,0.35), -4px -4px 10px rgba(255,255,255,0.6)',
            }}
          >
            Get a Quote
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center
                       transition-all duration-200 active:scale-95"
            style={{ boxShadow: '4px 4px 8px #b5c9db, -4px -4px 8px #ffffff' }}
          >
            {mobileOpen ? <X size={17} color="var(--color-accent)" /> : <Menu size={17} color="var(--color-text-primary)" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      {mobileOpen && (
        <div
          className="mt-2 rounded-2xl px-4 py-4 flex flex-col gap-1"
          style={{ boxShadow: '8px 8px 16px #b5c9db, -8px -8px 16px #ffffff' }}
        >
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'block rounded-xl px-4 py-2.5 text-[13px] font-semibold',
                  'transition-all duration-200',
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text-secondary)]',
                ].join(' ')
              }
              style={({ isActive }) => ({
                boxShadow: isActive
                  ? 'inset 4px 4px 8px #b5c9db, inset -4px -4px 8px #ffffff'
                  : undefined,
              })}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="mt-2 flex justify-center items-center rounded-xl px-4 py-2.5
                       text-[13px] font-semibold text-white
                       transition-all duration-200 active:scale-95"
            style={{
              background: 'var(--color-accent)',
              boxShadow: '6px 6px 12px rgba(13,148,136,0.35), -4px -4px 10px rgba(255,255,255,0.6)',
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
