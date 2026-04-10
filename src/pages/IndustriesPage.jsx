import { Link } from 'react-router-dom';
import {
  FlaskConical, Wheat, Droplets,
  Factory, Milk, HeartPulse, Droplet,
  ShoppingBag, PawPrint, Waves, Package,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';
import industries from '../data/industriesData';

/* ── Icon map — match industry name to lucide icon ────────────────── */
const ICON_MAP = {
  'Agrochemical Industry': FlaskConical,
  'Chemical Industry':     Factory,
  'Food Industry':         Wheat,
  'Dairy Industry':        Milk,
  'Oil & Lubricants':      Droplets,
  'Water Industry':        Waves,
  'Household Industry':    ShoppingBag,
  'Animal Healthcare':     PawPrint,
  'Pharmaceutical':        HeartPulse,
  'General Market':        Package,
};

/* ── Image map — match industry name to photo ─────────────────────── */
const IMAGE_MAP = {
  'Agrochemical Industry': 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=700&h=420&fit=crop&q=80',
  'Chemical Industry':     'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&h=420&fit=crop&q=80',
  'Food Industry':         'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&h=420&fit=crop&q=80',
  'Dairy Industry':        'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&h=420&fit=crop&q=80',
  'Oil & Lubricants':      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=700&h=420&fit=crop&q=80',
  'Water Industry':        'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=700&h=420&fit=crop&q=80',
  'Household Industry':    'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=700&h=420&fit=crop&q=80',
  'Animal Healthcare':     'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=700&h=420&fit=crop&q=80',
  'Pharmaceutical':        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&h=420&fit=crop&q=80',
  'General Market':        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=700&h=420&fit=crop&q=80',
};

/* ── Description map ──────────────────────────────────────────────── */
const DESC_MAP = {
  'Agrochemical Industry': 'UN-approved HDPE/F-style bottles for pesticides, herbicides, fungicides, and growth regulators. Chemical-resistant, tamper-evident.',
  'Chemical Industry':     'Industrial HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. UN/DOT-certified options available.',
  'Food Industry':         'BIS-certified food-grade containers for edible oils, sauces, syrups, and processed foods. Safe, sealable, and shelf-ready.',
  'Dairy Industry':        'FDA-compliant food-grade HDPE milk cans for co-operatives and private dairies. Airtight lids, ergonomic handles, easy-pour design.',
  'Oil & Lubricants':      'HDPE containers for engine oils, coolants, gear oils, and lubricants. Oil-compatible and spill-proof.',
  'Water Industry':        'BPA-free PET and HDPE water jars for packaged drinking water, dispensers, and home storage. UV-resistant options.',
  'Household Industry':    'PET and HDPE bottles for liquid detergents, fabric softeners, floor cleaners, and household disinfectants.',
  'Animal Healthcare':     'HDPE and PP containers for veterinary medicines, animal feed supplements, and livestock care products.',
  'Pharmaceutical':        'GMP-compliant HDPE and PP containers for pharmaceutical powders, syrups, and caps. Precision dispensing closures.',
  'General Market':        'Versatile HDPE containers for general retail and market distribution. Standard shapes for easy branding and labelling.',
};

/* ── Products list map ─────────────────────────────────────────────── */
const PRODUCTS_MAP = {
  'Agrochemical Industry': ['Emida Bottles', 'Handle Bottles', 'Barni Containers', 'Mauzer Cans'],
  'Chemical Industry':     ['Round Carboys 5L–20L', 'Wide Mouth Jars', 'Industrial Drums 50L+'],
  'Food Industry':         ['Edible Oil Bottles', 'Ketchup Squeeze Bottles', 'Food Syrup Jars'],
  'Dairy Industry':        ['Milk Cans 5L–20L', 'Ghagar Containers', 'Curd Packaging Jars'],
  'Oil & Lubricants':      ['Engine Oil Bottles 1L–4L', 'Coolant Bottles', 'Jerry Cans 5L–10L'],
  'Water Industry':        ['PET Water Jars 1L–2L', 'HDPE Water Jars 20L–25L', 'Storage Tanks 50L'],
  'Household Industry':    ['Detergent Bottles', 'Trigger Spray Bottles', 'Floor Cleaner Bottles'],
  'Animal Healthcare':     ['Veterinary Bottles', 'Feed Supplement Jars', 'Cattle Drench Bottles'],
  'Pharmaceutical':        ['Powder Jars', 'Spice Containers', 'PP/HDPE Caps & Closures'],
  'General Market':        ['Round Cans', 'Multipurpose Jars', 'Carry Handle Containers'],
};

/* ═══════════════════════════════════════════════════════════════════ */
export default function IndustriesPage() {
  const refHeader = useScrollReveal();
  const refCTA = useScrollReveal();

  /* Build enriched list from industriesData + maps */
  const INDUSTRIES = industries.map((ind) => ({
    icon:           ICON_MAP[ind.name]    || Package,
    name:           ind.name,
    desc:           DESC_MAP[ind.name]    || '',
    products:       PRODUCTS_MAP[ind.name] || [],
    img:            IMAGE_MAP[ind.name]   || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=420&fit=crop&q=80',
    primaryCategory: ind.categories[0],   // first category for navigation
  }));

  return (
    <div className="flex flex-col gap-16">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-4 reveal">
        <Badge variant="recessed">Industries</Badge>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
        >
          Packaging for{' '}
          <span style={{ color: '#0B5ED7' }}>Every Sector</span>
        </h1>
        <p
          className="text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          From agrochemicals to healthcare, our versatile range of plastic
          containers is engineered to meet the exact storage, safety, and
          compliance requirements of each industry we serve.
        </p>
      </div>

      {/* ── Industry cards ──────────────────────────────────────── */}
      <div className="flex flex-col gap-10">
        {INDUSTRIES.map((industry, i) => {
          const isEven = i % 2 === 0;
          const Icon   = industry.icon;
          return (
            <IndustrySection key={industry.name} industry={industry} isEven={isEven} Icon={Icon} index={i} />
          );
        })}
      </div>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section ref={refCTA}>
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 55%, #14B8A6 100%)',
            padding: '2.5rem 3rem',
            boxShadow: '0 20px 48px rgba(10,37,64,0.2)',
          }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-extrabold" style={{ color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
              Don't see your industry?
            </h2>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              We offer custom packaging solutions for unique requirements. Contact us to discuss.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary" size="lg"
            style={{ background: '#FFFFFF', color: '#0B5ED7', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
          >
            Contact Us <ArrowRight size={15} />
          </Button>
        </div>
      </section>

    </div>
  );
}

function IndustrySection({ industry, isEven, Icon, index }) {
  const ref = useScrollReveal();
  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal`}
    >
      {/* Image */}
      <Card
        screws vents={!isEven} padding="none" hoverable={false}
        className={`overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <img
          src={industry.img}
          alt={industry.name}
          className="img-reveal w-full object-cover"
          style={{ height: 280 }}
        />
      </Card>

      {/* Text */}
      <div className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3">
          <IconContainer
            size="lg" variant="recessed"
            icon={<Icon size={22} />}
            color="#0B5ED7"
          />
          <h2
            className="text-2xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {industry.name}
          </h2>
        </div>

        <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          {industry.desc}
        </p>

        <div className="flex flex-col gap-2">
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Products We Supply
          </span>
          <ul className="flex flex-col gap-2">
            {industry.products.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <CheckCircle2 size={13} color="#0B5ED7" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* Navigate to the first mapped product category */}
          <Button as={Link} to={`/products/${industry.primaryCategory}`} variant="ghost" size="sm">
            View Related Products <ArrowRight size={13} />
          </Button>
        </div>
      </div>
    </section>
  );
}
