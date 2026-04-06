import { Link } from 'react-router-dom';
import {
  FlaskConical, Wheat, Droplets,
  Factory, Milk, HeartPulse,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Industries data ─────────────────────────────────────────────── */
const INDUSTRIES = [
  {
    icon:     FlaskConical,
    name:     'Agrochemical',
    desc:     'UN-approved HDPE/F-style bottles for pesticides, herbicides, fungicides, and growth regulators. Chemical-resistant, tamper-evident.',
    products: ['Agro Bottles 250ml–5L', 'F-Style Containers', 'Jerry Cans'],
    img:      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=700&h=420&fit=crop&q=80',
  },
  {
    icon:     Wheat,
    name:     'Food Industry',
    desc:     'BIS-certified food-grade containers for dry and processed foods. Safe, sealable, and shelf-ready.',
    products: ['Food Jars', 'Wide Mouth Containers', 'Airtight Pails'],
    img:      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=700&h=420&fit=crop&q=80',
  },
  {
    icon:     Droplets,
    name:     'Edible Oil',
    desc:     'UV-stabilised PET and HDPE bottles and jerry cans for refined, blended, and specialty oils. Anti-drip neck finish available.',
    products: ['PET Oil Bottles 500ml–2L', 'HDPE Jerry Cans 5L–15L'],
    img:      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=700&h=420&fit=crop&q=80',
  },
  {
    icon:     Factory,
    name:     'Chemical Industry',
    desc:     'Industrial HDPE and PP containers for acids, solvents, lubricants, and specialty chemicals. UN/DOT-certified options available.',
    products: ['Round Carboys 5L–20L', 'Narrow/Wide Mouth Jars', 'Heavy-Duty Jerry Cans'],
    img:      'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=700&h=420&fit=crop&q=80',
  },
  {
    icon:     Milk,
    name:     'Dairy & Milk',
    desc:     'FDA-compliant food-grade HDPE milk cans for co-operatives and private dairies. Airtight lids, ergonomic handles, easy-pour design.',
    products: ['Milk Cans 5L', 'Milk Cans 10L', 'Bulk Cans 20L'],
    img:      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&h=420&fit=crop&q=80',
  },
  {
    icon:     HeartPulse,
    name:     'Healthcare',
    desc:     'Clean-room compatible HDPE and PP containers for pharmaceutical liquids, syrups, and lab chemicals. Precision dispensing closures.',
    products: ['Pharma Bottles', 'Lab Containers', 'Dropper Bottles'],
    img:      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&h=420&fit=crop&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function IndustriesPage() {
  const refHeader = useScrollReveal();
  const refCTA = useScrollReveal();
  
  return (
    <div className="flex flex-col gap-16">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-4 reveal">
        <Badge variant="recessed">Industries</Badge>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Packaging for{' '}
          <span style={{ color: 'var(--color-accent)' }}>Every Sector</span>
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
        <Card screws vents padding="lg" hoverable={false}
          className="flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{ padding: '2.5rem 3rem' }}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-extrabold" style={{ color: 'var(--color-text-primary)' }}>
              Don't see your industry?
            </h2>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              We offer custom packaging solutions for unique requirements. Contact us to discuss.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary" size="lg">
            Contact Us <ArrowRight size={15} />
          </Button>
        </Card>
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
          /* TODO: replace with real industry photograph */
        />
      </Card>

      {/* Text */}
      <div className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-3">
          <IconContainer
            size="lg" variant="recessed"
            icon={<Icon size={22} />}
            color="var(--color-accent)"
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
                <CheckCircle2 size={13} color="var(--color-accent)" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button as={Link} to="/products" variant="ghost" size="sm">
            View Related Products <ArrowRight size={13} />
          </Button>
        </div>
      </div>
    </section>
  );
}
