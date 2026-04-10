import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, Eye, CheckCircle2,
  Award, Users, Zap, TrendingUp,
} from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Images ─────────────────────────────────────────────────────── */
const IMG = {
  hero:    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=600&fit=crop&q=85',
  team:    'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop&q=85',
};

/* ── Timeline data ───────────────────────────────────────────────── */
const TIMELINE = [
  { year: '1993', title: 'Founded', desc: 'Ganesh Plasto Pack established in Barshi, Maharashtra with a small blow-moulding unit.' },
  { year: '2000', title: 'Expansion', desc: 'Doubled machine capacity. Entered the agro-chemical and edible oil packaging segments.' },
  { year: '2008', title: 'ISO Certification', desc: 'Achieved ISO quality management certification. Began supplying to multi-state clients.' },
  { year: '2015', title: 'Fleet & Logistics', desc: 'Added own fleet of delivery trucks for direct pan-India distribution.' },
  { year: '2020', title: '32 Machines', desc: 'Scaled to 32 fully automated blow-moulding machines, producing 85,000+ units per day.' },
  { year: '2024', title: 'Today', desc: 'Serving 200+ product SKUs across 6 categories with a trusted workforce of 10+ year veterans.' },
];

/* ── Values ──────────────────────────────────────────────────────── */
const VALUES = [
  { icon: Target,   title: 'Our Mission',   desc: 'To deliver precision-engineered plastic packaging that meets the highest quality and safety standards — consistently, at scale.' },
  { icon: Eye,      title: 'Our Vision',    desc: 'To be Maharashtra\'s most trusted packaging manufacturer, expanding across India while upholding community and environmental values.' },
  { icon: Zap,      title: 'Quality First', desc: 'Every unit is inspected before dispatch. Virgin-grade raw materials. Zero compromise on dimensional accuracy or leak-proof performance.' },
  { icon: Users,    title: 'Our People',    desc: 'A loyal, skilled workforce — many with 10+ years of service — forms the backbone of our consistent output and customer trust.' },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const refHero = useScrollReveal();
  const refStats = useScrollReveal();
  const refMission = useScrollReveal();
  const refTimeline = useScrollReveal();
  const refTeam = useScrollReveal();

  return (
    <div className="flex flex-col gap-20">

      {/* ── §1 Hero ─────────────────────────────────────────────── */}
      <section ref={refHero} className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
        <div className="flex flex-col gap-5 reveal">
          <Badge variant="recessed" dot>Since 1993</Badge>
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}
          >
            30+ Years of{' '}
            <span style={{ color: '#0B5ED7' }}>Packaging</span>{' '}
            Excellence
          </h1>
          <p
            className="text-base leading-relaxed max-w-xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Founded in 1993 in Barshi, Maharashtra, Ganesh Plasto Pack has grown
            from a single-unit blow-moulding facility into one of the region's
            most trusted industrial plastic packaging manufacturers. Three
            decades of craftsmanship, 85,000+ units a day, and an unwavering
            commitment to quality define who we are.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button as={Link} to="/products" variant="primary" size="md">
              Our Products <ArrowRight size={15} />
            </Button>
            <Button as={Link} to="/contact" variant="secondary" size="md">
              Get in Touch
            </Button>
          </div>
        </div>

        <Card screws vents padding="none" hoverable={false} className="overflow-hidden">
          <img
            src={IMG.hero}
            alt="Ganesh Plasto Pack factory"
            className="img-reveal w-full h-full object-cover"
            style={{ minHeight: 340 }}
            /* TODO: replace with actual facility photograph */
          />
        </Card>
      </section>

      {/* ── §2 Stats strip ──────────────────────────────────────── */}
      <section ref={refStats} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: Award,     value: '30+',     label: 'Years in Business' },
          { icon: TrendingUp,value: '85,000+', label: 'Units / Day' },
          { icon: CheckCircle2,value: '200+',  label: 'Product SKUs' },
          { icon: Users,     value: '10+',     label: 'Avg. Employee Tenure (yrs)' },
        ].map(({ icon: Icon, value, label }, i) => (
          <Card key={label} screws vents={false} padding="lg" className={`text-center flex flex-col items-center gap-3 reveal reveal-delay-${i + 1}`}>
            <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
            <p className="text-3xl font-extrabold" style={{ color: '#0B5ED7' }}>{value}</p>
            <p className="text-xs font-semibold" style={{ color: 'var(--color-text-secondary)' }}>{label}</p>
          </Card>
        ))}
      </section>

      {/* ── §3 Mission / Vision / Values ────────────────────────── */}
      <section ref={refMission}>
        <div className="text-center mb-10 reveal">
          <Badge variant="recessed">Who We Are</Badge>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}>
            Mission, Vision & Values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <Card key={title} screws={false} vents={false} padding="lg" className={`flex flex-col gap-4 reveal reveal-delay-${(i % 2) + 1}`}>
              <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
              <h3 className="font-bold text-base" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ── §4 Timeline ─────────────────────────────────────────── */}
      <section ref={refTimeline}>
        <div className="text-center mb-10 reveal">
          <Badge variant="recessed">Our Journey</Badge>
          <h2 className="text-3xl font-extrabold mt-3 tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}>
            Growth Timeline
          </h2>
        </div>

        <div className="relative flex flex-col gap-0">
          {/* Vertical spine */}
          <div
            className="absolute left-[19px] top-4 bottom-4 w-[2px] hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #0B5ED7, rgba(11,94,215,0.1))' }}
          />

          {TIMELINE.map((item, i) => (
            <div key={item.year} className={`flex gap-5 items-start pb-8 last:pb-0 reveal reveal-delay-${(i % 4) + 1}`}>
              {/* Year node */}
              <div className="flex flex-col items-center shrink-0 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[10px] font-bold"
                  style={{
                    background: i === TIMELINE.length - 1
                      ? 'linear-gradient(135deg, #0B5ED7, #14B8A6)'
                      : '#EFF6FF',
                    color:  i === TIMELINE.length - 1 ? '#fff' : '#0B5ED7',
                    border: i === TIMELINE.length - 1 ? 'none' : '1.5px solid rgba(11,94,215,0.2)',
                    boxShadow: '0 4px 12px rgba(11,94,215,0.15)',
                  }}
                >
                  {item.year.slice(2)}
                </div>
              </div>

              {/* Content */}
              <Card screws={false} padding="md" className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-mono text-[11px] font-bold"
                    style={{ color: '#0B5ED7' }}
                  >
                    {item.year}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    — {item.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ── §5 Team image ────────────────────────────────────────── */}
      <section ref={refTeam} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden order-2 lg:order-1 reveal">
          <img
            src={IMG.team}
            alt="Our team at work"
            className="img-reveal w-full object-cover"
            style={{ height: 360 }}
            /* TODO: replace with real team photograph */
          />
        </Card>
        <div className="flex flex-col gap-5 order-1 lg:order-2 reveal reveal-delay-1">
          <Badge variant="recessed">Our Culture</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-text-primary)', fontFamily: "'Poppins', sans-serif" }}>
            Built on{' '}
            <span style={{ color: '#0B5ED7' }}>Trust</span> &{' '}
            <span style={{ color: '#14B8A6' }}>Loyalty</span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            Many of our team members have been with us for over a decade.
            This continuity translates directly into product consistency,
            institutional knowledge, and a culture of pride in every unit
            that leaves our facility.
          </p>
          <Button as={Link} to="/contact" variant="ghost" size="md">
            Work With Us <ArrowRight size={15} />
          </Button>
        </div>
      </section>

    </div>
  );
}
