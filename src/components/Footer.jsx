import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 pb-6 w-full px-4 md:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
      {/* ── Grid card ──────────────────────────────── */}
      <div
        className="rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{ boxShadow: '8px 8px 16px #b5c9db, -8px -8px 16px #ffffff' }}
      >

        {/* ── Column 1: Brand ────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Logo mark */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ boxShadow: 'inset 4px 4px 8px #b5c9db, inset -4px -4px 8px #ffffff' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-accent)" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}>
              {siteConfig.brand.name}
            </span>
          </div>

          <p className="text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}>
            {siteConfig.brand.tagline} — engineered for durability, designed to impress.
          </p>
        </div>

        {/* ── Column 2: Quick Links ─────────────── */}
        <div>
          <h3
            className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="group inline-flex items-center gap-1 text-sm
                             transition-all duration-200 hover:text-[var(--color-accent)]
                             hover:-translate-y-0.5"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Contact ─────────────────── */}
        <div>
          <h3
            className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Contact
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b5c9db, inset -3px -3px 6px #ffffff' }}
              >
                <Phone size={13} color="var(--color-accent)" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color: 'var(--color-text-secondary)' }}>Phone</span>
                <a
                  href={`tel:${siteConfig.brand.phone}`}
                  className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {siteConfig.brand.phone}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b5c9db, inset -3px -3px 6px #ffffff' }}
              >
                <Mail size={13} color="var(--color-accent)" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color: 'var(--color-text-secondary)' }}>Email</span>
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="text-sm font-medium hover:text-[var(--color-accent)] transition-colors break-all"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {siteConfig.brand.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ boxShadow: 'inset 3px 3px 6px #b5c9db, inset -3px -3px 6px #ffffff' }}
              >
                <MapPin size={13} color="var(--color-accent)" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                  style={{ color: 'var(--color-text-secondary)' }}>Address</span>
                <span className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}>
                  {siteConfig.brand.address}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────── */}
      <p
        className="text-center text-[11px] mt-5 tracking-wide"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        © {year} {siteConfig.brand.name}. All rights reserved.
      </p>
    </footer>
  );
}
