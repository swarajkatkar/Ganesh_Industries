import { Link } from 'react-router-dom';
import {
  Settings2, ShieldCheck, Truck,
  Warehouse, Gauge, CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Images ─────────────────────────────────────────────────────── */
const IMG = {
  machines: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=550&fit=crop&q=85',
  trucks:   'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=550&fit=crop&q=85',
  warehouse:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop&q=85',
};

/* ── Infra highlights ────────────────────────────────────────────── */
const HIGHLIGHTS = [
  { icon: Settings2,  value: '32',        label: 'Blow-Moulding Machines',   sub: 'Fully automated lines' },
  { icon: Gauge,      value: '85,000+',   label: 'Units Per Day',            sub: 'Production capacity' },
  { icon: Truck,      value: 'Own Fleet', label: 'Delivery Trucks',          sub: 'Pan-India logistics' },
  { icon: Warehouse,  value: 'Large',     label: 'Warehouse Capacity',       sub: 'Organised bulk storage' },
  { icon: ShieldCheck,value: 'ISO',       label: 'Certified Quality Lab',    sub: 'In-house QC testing' },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function InfrastructurePage() {
  const refHeader = useScrollReveal();
  const refStats = useScrollReveal();
  const refMachinery = useScrollReveal();
  const refQC = useScrollReveal();
  const refLogistics = useScrollReveal();
  const refWarehouse = useScrollReveal();

  return (
    <div className="flex flex-col gap-20">

      {/* ── §1 Header ───────────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-4 reveal">
        <Badge variant="recessed">Infrastructure</Badge>
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
        >
          Built for{' '}
          <span style={{ color: '#0B5ED7' }}>Scale.</span>{' '}
          Engineered for{' '}
          <span style={{ color: '#14B8A6' }}>Precision.</span>
        </h1>
        <p className="text-base leading-relaxed max-w-2xl"
          style={{ color: 'var(--color-text-secondary)' }}>
          Our Barshi facility is equipped with state-of-the-art machinery,
          an in-house QC lab, a large warehousing wing, and a dedicated fleet —
          giving us end-to-end control from raw material to doorstep delivery.
        </p>
      </div>

      {/* ── §2 Highlight stats ──────────────────────────────────── */}
      <div ref={refStats} className="grid grid-cols-2 lg:grid-cols-5 gap-5">
        {HIGHLIGHTS.map(({ icon: Icon, value, label, sub }, i) => (
          <Card key={label} screws vents={false} padding="md" className={`flex flex-col items-center text-center gap-3 reveal reveal-delay-${(i % 4) + 1}`}>
            <IconContainer size="md" variant="recessed" icon={<Icon size={18} />} color="#0B5ED7" />
            <p className="text-xl md:text-2xl font-extrabold leading-none"
              style={{ color: '#0B5ED7' }}>{value}</p>
            <p className="text-xs font-bold" style={{ color: 'var(--color-text-primary)' }}>{label}</p>
            <p className="font-mono text-[9px] uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}>{sub}</p>
          </Card>
        ))}
      </div>

      {/* ── §3 Machinery section ────────────────────────────────── */}
      <section ref={refMachinery} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden reveal">
          <img src={IMG.machines} alt="Blow-moulding machinery"
            className="img-reveal w-full object-cover" style={{ height: 400 }}
            /* TODO: replace with actual machinery photograph */ />
        </Card>
        <div className="flex flex-col gap-5 reveal reveal-delay-1">
          <Badge variant="recessed">Machinery</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}>
            32 Automated{' '}
            <span style={{ color: '#0B5ED7' }}>Blow-Moulding</span>{' '}
            Machines
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Our production floor runs 32 fully automated extrusion
            blow-moulding machines capable of producing containers ranging
            from 100ml to 25L. Continuous operation ensures consistent
            output even for large bulk orders.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              'Extrusion blow-moulding technology',
              'Handles HDPE, PET, PP raw materials',
              'Precision wall-thickness control',
              'Automated trimming and inspection',
            ].map((pt) => (
              <li key={pt} className="flex items-center gap-3">
                <CheckCircle2 size={14} color="#0B5ED7" className="shrink-0" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── §4 QC Lab & Certifications ──────────────────────────── */}
      <section ref={refQC}>
        <div className="text-center mb-8 reveal">
          <Badge variant="recessed">Quality Control</Badge>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}>
            ISO-Certified Quality Lab
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: 'Leak-Proof Testing',    desc: 'Every batch undergoes pneumatic pressure testing to ensure zero leakage under transport conditions.' },
            { icon: Gauge,       title: 'Wall Thickness Check',  desc: 'Ultrasonic gauges verify uniform wall thickness across the full container body.' },
            { icon: Settings2,   title: 'Drop Impact Testing',   desc: 'Filled containers dropped from standard heights to validate structural integrity before dispatch.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} screws={false} padding="lg" className={`flex flex-col gap-4 reveal reveal-delay-${(i % 3) + 1}`}>
              <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
              <h3 className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── §5 Trucks & Logistics ───────────────────────────────── */}
      <section ref={refLogistics} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5 reveal">
          <Badge variant="recessed">Logistics</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}>
            Own Fleet.{' '}
            <span style={{ color: '#0B5ED7' }}>Pan-India</span>{' '}
            Delivery.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Our dedicated fleet of delivery trucks enables us to dispatch
            bulk orders directly to clients across Maharashtra and other
            states — without dependency on third-party logistics,
            ensuring on-time, damage-free deliveries.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              'Direct dispatch from factory to client',
              'Bulk order fulfilment for large volumes',
              'Maharashtra + multi-state reach',
              'Secure loading with damage-prevent wrapping',
            ].map((pt) => (
              <li key={pt} className="flex items-center gap-3">
                <Truck size={14} color="#0B5ED7" className="shrink-0" />
                <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{pt}</span>
              </li>
            ))}
          </ul>
          <Button as={Link} to="/contact" variant="ghost" size="md" className="self-start">
            Enquire About Delivery <ArrowRight size={15} />
          </Button>
        </div>
        <Card screws={false} vents padding="none" hoverable={false} className="overflow-hidden reveal reveal-delay-1">
          <img src={IMG.trucks} alt="Delivery fleet"
            className="img-reveal w-full object-cover" style={{ height: 380 }}
            /* TODO: replace with actual fleet photograph */ />
        </Card>
      </section>

      {/* ── §6 Warehouse ────────────────────────────────────────── */}
      <section ref={refWarehouse}>
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden reveal">
          <div className="relative" style={{ height: 280 }}>
            <img src={IMG.warehouse} alt="Warehouse storage"
              className="img-reveal w-full h-full object-cover"
              /* TODO: replace with actual warehouse photograph */ />
            <div className="absolute inset-0 flex flex-col justify-end p-8 gap-2"
              style={{ background: 'linear-gradient(to top, rgba(45,52,54,0.8),transparent 55%)' }}>
              <h2 className="text-2xl font-extrabold" style={{ color: '#fff' }}>
                Large-Scale Warehousing
              </h2>
              <p className="text-sm max-w-xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Organised storage for finished goods ensures rapid order picking,
                batch traceability, and efficient dispatch operations.
              </p>
            </div>
          </div>
        </Card>
      </section>

    </div>
  );
}
