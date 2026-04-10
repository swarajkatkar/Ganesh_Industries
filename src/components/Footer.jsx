import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 pb-6 w-full px-4 md:px-6 lg:px-8">
      {/* ── Main dark footer card ── */}
      <div
        className="rounded-2xl px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #0F3460 100%)',
          boxShadow: '0 20px 60px rgba(10, 37, 64, 0.35)',
        }}
      >
        {/* ── Column 1: Brand ── */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
                boxShadow: '0 4px 12px rgba(11,94,215,0.4)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <span
              className="font-bold text-[15px] tracking-tight text-white"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {siteConfig.brand.name}
            </span>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {siteConfig.brand.tagline} — engineered for durability, designed to impress.
          </p>

          {/* Accent divider */}
          <div
            className="h-[2px] w-16 rounded-full"
            style={{ background: 'linear-gradient(90deg, #0B5ED7, #14B8A6)' }}
          />
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div>
          <h3
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="group inline-flex items-center gap-1.5 text-sm
                             transition-all duration-200
                             hover:-translate-y-0.5"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#22D3EE')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
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

        {/* ── Column 3: Contact ── */}
        <div>
          <h3
            className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            Contact
          </h3>
          <ul className="flex flex-col gap-4">
            {[
              { icon: Phone,  label: 'Phone',   content: siteConfig.brand.phone,   href: `tel:${siteConfig.brand.phone}` },
              { icon: Mail,   label: 'Email',   content: siteConfig.brand.email,   href: `mailto:${siteConfig.brand.email}`, breakAll: true },
              { icon: MapPin, label: 'Address', content: siteConfig.brand.address, href: null },
            ].map(({ icon: Icon, label, content, href, breakAll }) => (
              <li key={label} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(11,94,215,0.25)',
                    border: '1px solid rgba(11,94,215,0.4)',
                  }}
                >
                  <Icon size={13} color="#14B8A6" />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className={`text-sm font-medium transition-colors ${breakAll ? 'break-all' : ''}`}
                      style={{ color: 'rgba(255,255,255,0.75)' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#22D3EE')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {content}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <p
        className="text-center text-[11px] mt-5 tracking-wide"
        style={{ color: '#94A3B8' }}
      >
        © {year} {siteConfig.brand.name}. All rights reserved.
      </p>
    </footer>
  );
}
