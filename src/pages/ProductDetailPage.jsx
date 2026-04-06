import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, MessageCircle, Phone,
  Package, CheckCircle2, Tag,
  Layers, Ruler, Factory, ArrowRight,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import { getCategoryById } from '../data/products';
import siteConfig from '../data/siteConfig';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── WhatsApp enquiry URL builder ─────────────────────────────────── */
function buildWhatsAppUrl(productName, categoryName) {
  const msg = encodeURIComponent(
    `Hi, I'm interested in *${productName}* from your *${categoryName}* range.\n\nPlease share pricing and availability.`
  );
  return `https://wa.me/91${siteConfig.brand.phone}?text=${msg}`;
}

/* ── Spec Row ─────────────────────────────────────────────────────── */
function SpecRow({ icon: Icon, label, value }) {
  return (
    <div
      className="flex items-center gap-4 py-3"
      style={{ borderBottom: '1px solid rgba(186,190,204,0.35)' }}
    >
      <IconContainer
        size="sm"
        variant="recessed"
        icon={<Icon size={14} />}
        color="var(--color-accent)"
        className="shrink-0"
      />
      <span
        className="text-xs font-semibold uppercase tracking-wider w-28 shrink-0"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {label}
      </span>
      <span
        className="text-sm font-semibold"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {value}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function ProductDetailPage() {
  const { category: categoryId, productId } = useParams();
  
  const refHero = useScrollReveal();
  const refDetails = useScrollReveal();
  const refTech = useScrollReveal();
  const refCTA = useScrollReveal();
  const refRelated = useScrollReveal();

  /* ── Data resolution ──────────────────────────────────────────── */
  const category = getCategoryById(categoryId);
  const product  = category?.products.find((p) => p.id === productId) ?? null;

  /* ── Related products (same category, excluding current) ──────── */
  const related = category
    ? category.products.filter((p) => p.id !== productId).slice(0, 3)
    : [];

  /* ── 404 guard ────────────────────────────────────────────────── */
  if (!category || !product) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <Package size={48} color="var(--color-accent)" />
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Product Not Found
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
        <Button as={Link} to="/products" variant="secondary">
          <ArrowLeft size={15} /> Browse Products
        </Button>
      </div>
    );
  }

  /* ── WhatsApp URL ─────────────────────────────────────────────── */
  const whatsappUrl = buildWhatsAppUrl(product.name, category.name);

  return (
    <div className="flex flex-col gap-12">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BREADCRUMB
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav
        className="flex items-center gap-2 text-xs flex-wrap"
        style={{ color: 'var(--color-text-secondary)' }}
        aria-label="Breadcrumb"
      >
        <Link
          to="/products"
          className="hover:text-[var(--color-accent)] transition-colors"
        >
          Products
        </Link>
        <span>/</span>
        <Link
          to={`/products/${categoryId}`}
          className="hover:text-[var(--color-accent)] transition-colors"
        >
          {category.name}
        </Link>
        <span>/</span>
        <span
          className="font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {product.name}
        </span>
      </nav>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §1  HERO — image left / info right
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refHero} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start reveal">

        {/* Product image */}
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="img-reveal w-full object-cover"
            style={{ height: 420 }}
            /* TODO: replace with real product photograph */
          />
          {/* Gradient overlay at bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(224,229,236,0.6), transparent)',
            }}
          />
        </Card>

        {/* Product info */}
        <div className="flex flex-col gap-5">
          {/* Category + type badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="recessed">{category.name}</Badge>
            <Badge variant="accent">{product.type}</Badge>
          </div>

          {/* Product name */}
          <h1
            className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {product.name}
          </h1>

          {/* Short description */}
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {product.description}
          </p>

          {/* Available sizes */}
          <div className="flex flex-col gap-2">
            <span
              className="font-mono text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Available Sizes
            </span>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((sz) => (
                <span
                  key={sz}
                  className="font-mono text-[12px] font-bold px-4 py-2 rounded-xl"
                  style={{
                    background: 'var(--color-bg)',
                    color: 'var(--color-accent)',
                    boxShadow: '5px 5px 10px #babecc, -5px -5px 10px #ffffff',
                  }}
                >
                  {sz}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full"
            style={{ background: 'rgba(186,190,204,0.5)' }}
          />

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mobile-full">
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="flex-1"
            >
              <MessageCircle size={16} /> Enquire on WhatsApp
            </Button>
            <Button
              as={Link}
              to={`/products/${categoryId}`}
              variant="secondary"
              size="lg"
            >
              <ArrowLeft size={15} /> Back
            </Button>
          </div>

          {/* Phone quick access */}
          <a
            href={`tel:${siteConfig.brand.phone}`}
            className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[var(--color-accent)]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <Phone size={14} color="var(--color-accent)" />
            {siteConfig.brand.phone}
            <span className="font-normal" style={{ color: 'var(--color-text-secondary)' }}>
              — Call us directly
            </span>
          </a>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §2  DETAILS — description + applications
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refDetails} className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1">

        {/* Full description */}
        <Card screws={false} vents={false} padding="lg">
          <div className="flex items-center gap-2 mb-4">
            <IconContainer
              size="sm"
              variant="recessed"
              icon={<Package size={14} />}
              color="var(--color-accent)"
            />
            <h2
              className="font-bold text-sm uppercase tracking-wider"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Product Description
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {product.description}
          </p>
          <p
            className="text-sm leading-relaxed mt-3"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Manufactured at our ISO-compliant facility in Barshi, Maharashtra
            using virgin-grade raw materials. Each unit undergoes quality
            inspection before dispatch to ensure dimensional accuracy and
            leak-proof performance.
          </p>
        </Card>

        {/* Applications */}
        <Card screws={false} vents={false} padding="lg">
          <div className="flex items-center gap-2 mb-4">
            <IconContainer
              size="sm"
              variant="recessed"
              icon={<CheckCircle2 size={14} />}
              color="var(--color-accent)"
            />
            <h2
              className="font-bold text-sm uppercase tracking-wider"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Applications
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {product.applications.map((app) => (
              <li key={app} className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: 'var(--color-accent)' }}
                />
                <span
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {app}
                </span>
              </li>
            ))}
          </ul>

          {/* Industry tag */}
          <div
            className="mt-6 pt-4"
            style={{ borderTop: '1px solid rgba(186,190,204,0.4)' }}
          >
            <span
              className="font-mono text-[10px] uppercase tracking-wider block mb-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Industry
            </span>
            <Badge variant="recessed">
              <Factory size={10} /> {category.name.replace('Containers', '').replace('Bottles', '').trim() || 'Industrial'}
            </Badge>
          </div>
        </Card>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §3  TECHNICAL INFO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refTech} className="reveal">
        <Card screws vents padding="lg" hoverable={false}>
          <div className="flex items-center gap-2 mb-2">
            <IconContainer
              size="sm"
              variant="recessed"
              icon={<Layers size={14} />}
              color="var(--color-accent)"
            />
            <h2
              className="font-bold text-sm uppercase tracking-wider"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Technical Specifications
            </h2>
          </div>

          <div className="mt-2">
            <SpecRow
              icon={Tag}
              label="Product Name"
              value={product.name}
            />
            <SpecRow
              icon={Layers}
              label="Material"
              value={product.type}
            />
            <SpecRow
              icon={Ruler}
              label="Available Sizes"
              value={product.sizes.join(', ')}
            />
            <SpecRow
              icon={Factory}
              label="Category"
              value={category.name}
            />
            <SpecRow
              icon={CheckCircle2}
              label="Usage"
              value={product.applications.slice(0, 2).join(' · ')}
            />
            <SpecRow
              icon={Package}
              label="MOQ"
              value="Contact us for minimum order quantity"
            />
          </div>

          {/* Certifications strip */}
          <div
            className="mt-5 pt-5 flex flex-wrap gap-2"
            style={{ borderTop: '1px solid rgba(186,190,204,0.4)' }}
          >
            {['Virgin-Grade Raw Material', 'Quality Inspected', 'ISO Facility'].map((cert) => (
              <Badge key={cert} variant="recessed" dot={false}>
                ✓ {cert}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §4  FINAL CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={refCTA} className="reveal">
        <Card
          screws
          vents
          padding="lg"
          hoverable={false}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ padding: '2.5rem 3rem' }}
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <Badge variant="accent" dot>
              Bulk Orders Welcome
            </Badge>
            <h2
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Need a Bulk Order?{' '}
              <span style={{ color: 'var(--color-accent)' }}>Contact Us.</span>
            </h2>
            <p
              className="text-sm"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              We supply across Maharashtra and pan-India. Custom sizes and
              branding available for large orders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 mobile-full w-full md:w-auto">
            <Button
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <MessageCircle size={16} /> WhatsApp
            </Button>
            <Button
              as="a"
              href={`tel:${siteConfig.brand.phone}`}
              variant="secondary"
              size="lg"
            >
              <Phone size={16} /> Call Now
            </Button>
          </div>
        </Card>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          §5  RELATED PRODUCTS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {related.length > 0 && (
        <section ref={refRelated} className="reveal">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              More in{' '}
              <span style={{ color: 'var(--color-accent)' }}>
                {category.name}
              </span>
            </h2>
            <Button
              as={Link}
              to={`/products/${categoryId}`}
              variant="ghost"
              size="sm"
            >
              View All <ArrowRight size={13} />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/products/${categoryId}/${rel.id}`}
                className="group block"
              >
                <Card screws={false} padding="none" className="overflow-hidden flex flex-col">
                  <div className="overflow-hidden" style={{ height: 160 }}>
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="img-reveal w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-2">
                    <Badge variant="recessed">{rel.type}</Badge>
                    <h3
                      className="text-sm font-bold leading-snug"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {rel.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {rel.sizes.map((sz) => (
                        <span
                          key={sz}
                          className="font-mono text-[10px] font-semibold px-2 py-1 rounded-lg"
                          style={{
                            background: 'var(--color-recessed)',
                            color: 'var(--color-text-secondary)',
                            boxShadow:
                              'inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff',
                          }}
                        >
                          {sz}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
