import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Card, Button, Badge, IconContainer, Input } from '../components/ui';
import siteConfig from '../data/siteConfig';
import useScrollReveal from '../hooks/useScrollReveal';


/* ── WhatsApp URL helper ─────────────────────────────────────────── */
function buildWhatsApp(name, message) {
  const text = name
    ? `Hi, I'm *${name}*.\n\n${message}`
    : message;
  return `https://wa.me/91${siteConfig.brand.phone}?text=${encodeURIComponent(text)}`;
}

/* ─── Contact info items ─────────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    icon:  Phone,
    label: 'Phone',
    value: siteConfig.brand.phone,
    href:  `tel:${siteConfig.brand.phone}`,
    sub:   'Mon – Sat, 9 AM – 6 PM',
  },
  {
    icon:  Mail,
    label: 'Email',
    value: siteConfig.brand.email,
    href:  `mailto:${siteConfig.brand.email}`,
    sub:   'We reply within 24 hours',
  },
  {
    icon:  MapPin,
    label: 'Address',
    value: siteConfig.brand.address,
    href:  null,
    sub:   'Maharashtra, India',
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function ContactPage() {
  const [form, setForm]         = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);

  const refHeader = useScrollReveal();
  const refMain = useScrollReveal();
  const refCTA = useScrollReveal();

  /* ── Field change ──────────────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: '' }));
  };

  /* ── Validation ────────────────────────────────────────────────── */
  const validate = () => {
    const errs = {};
    if (!form.name.trim())        errs.name    = 'Name is required';
    if (!form.phone.trim())       errs.phone   = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
                                  errs.phone   = 'Enter a valid 10-digit number';
    if (!form.message.trim())     errs.message = 'Please enter a message';
    return errs;
  };

  /* ── Submit ─────────────────────────────────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // TODO: wire up backend / email service here
    console.log('Contact form:', form);
    setSubmitted(true);
  };

  /* ── Reset ──────────────────────────────────────────────────────── */
  const handleReset = () => {
    setForm({ name: '', phone: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col gap-16">

      {/* ── §1 Page header ──────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-4 reveal">
        <Badge variant="recessed">Contact Us</Badge>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Let's{' '}
          <span style={{ color: 'var(--color-accent)' }}>Talk</span>
        </h1>
        <p className="text-base leading-relaxed max-w-xl"
          style={{ color: 'var(--color-text-secondary)' }}>
          Have a bulk requirement, need a custom quote, or just want to learn
          more? Fill the form or reach us directly — we typically respond
          within a few hours.
        </p>
      </div>

      {/* ── §2 Two-column: form + info ──────────────────────────── */}
      <div ref={refMain} className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ── Contact Form ────────────────────────────────────────── */}
        <Card screws vents padding="lg" hoverable={false} className="reveal">
          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0B5ED7, #14B8A6)',
                  boxShadow: '0 8px 24px rgba(11,94,215,0.3)',
                }}
              >
                <CheckCircle2 size={32} color="#ffffff" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
                  Message Sent!
                </h2>
                <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                  Thank you, <strong>{form.name}</strong>. We'll be in touch shortly.
                </p>
              </div>
              <Button variant="secondary" size="sm" onClick={handleReset}>
                Send Another Message
              </Button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <h2 className="font-bold text-sm uppercase tracking-wider mb-1"
                style={{ color: 'var(--color-text-primary)' }}>
                Send us a Message
              </h2>

              <Input
                id="contact-name"
                label="Full Name *"
                name="name"
                type="text"
                placeholder="e.g. Ramesh Patil"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />

              <Input
                id="contact-phone"
                label="Phone Number *"
                name="phone"
                type="tel"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <Input
                id="contact-message"
                label="Message *"
                name="message"
                multiline
                rows={4}
                placeholder="Describe your requirement, product, quantity…"
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              {/* Action buttons */}
              <div className="flex flex-col xl:flex-row gap-3 pt-1 mobile-full">
                <Button type="submit" variant="primary" size="md" fullWidth>
                  <Send size={15} /> Send Message
                </Button>
                <Button
                  as="a"
                  href={buildWhatsApp(form.name, form.message || 'I have a packaging enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  fullWidth
                >
                  <MessageCircle size={15} /> WhatsApp Instead
                </Button>
              </div>
            </form>
          )}
        </Card>

        {/* ── Contact Info ────────────────────────────────────────── */}
        <div className="flex flex-col gap-5 reveal reveal-delay-1">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, sub }) => (
            <Card key={label} screws={false} padding="md" className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <IconContainer
                size="md" variant="recessed"
                icon={<Icon size={18} />}
                color="#0B5ED7"
                className="shrink-0"
              />
              <div className="flex flex-col gap-0.5">
                <span
                  className="font-mono text-[10px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    className="text-sm font-bold hover:text-[#0B5ED7] transition-colors break-all"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    {value}
                  </span>
                )}
                <span className="text-xs mt-0.5" style={{ color: 'var(--color-text-secondary)' }}>
                  {sub}
                </span>
              </div>
            </Card>
          ))}

          {/* Quick action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2 mobile-full">
            <Button
              as="a"
              href={`tel:${siteConfig.brand.phone}`}
              variant="primary"
              size="md"
              fullWidth
            >
              <Phone size={15} /> Call Now
            </Button>
            <Button
              as="a"
              href={buildWhatsApp('', 'Hi, I have a packaging enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              fullWidth
            >
              <MessageCircle size={15} /> WhatsApp
            </Button>
          </div>

          {/* ── Map placeholder ─────────────────────────────────── */}
          <Card screws={false} padding="none" hoverable={false} className="overflow-hidden mt-2">
            {/*
              TODO: Replace this iframe src with a real Google Maps embed URL:
              https://www.google.com/maps/embed?pb=<your_embed_params>
            */}
            <iframe
              title="Ganesh Plasto Pack Location — Barshi, Maharashtra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30568.10879374305!2d75.68741!3d18.23407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc4d4e5c49b2b%3A0xa5d58a4d2b1e3b7f!2sBarshi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </div>

      {/* ── §3 Final CTA strip ──────────────────────────────────── */}
      <section ref={refCTA}>
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 55%, #14B8A6 100%)',
            padding: '2rem 2.5rem',
            boxShadow: '0 20px 48px rgba(10,37,64,0.2)',
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              <CheckCircle2 size={24} color="#22D3EE" />
            </div>
            <div>
              <p className="font-bold text-base" style={{ color: '#FFFFFF' }}>
                Need Bulk Order Pricing?
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                We offer competitive rates for large volumes with direct factory dispatch.
              </p>
            </div>
          </div>
          <Button
            as="a"
            href={buildWhatsApp('', 'Hi, I need bulk order pricing for your plastic containers.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="w-full md:w-auto"
            style={{ background: '#FFFFFF', color: '#0B5ED7', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
          >
            <MessageCircle size={15} /> WhatsApp for Bulk Rates
          </Button>
        </div>
      </section>

    </div>
  );
}
