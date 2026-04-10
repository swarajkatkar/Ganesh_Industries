import { Link } from 'react-router-dom';
import { Heart, Users, Leaf, ArrowRight, Quote } from 'lucide-react';
import { Card, Button, Badge, IconContainer } from '../components/ui';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Images ─────────────────────────────────────────────────────── */
const IMG = {
  cows:  'https://images.unsplash.com/photo-1527153818091-1a9638521e2a?w=800&h=550&fit=crop&q=85',
  team:  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=550&fit=crop&q=85',
  green: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=500&fit=crop&q=85',
};

/* ── Pillars ─────────────────────────────────────────────────────── */
const PILLARS = [
  {
    icon: Leaf,
    title: 'Animal Welfare',
    badge: 'Cow Feeding Initiative',
    emotion: 'Compassion',
    desc: 'Every day, without exception, we contribute to the feeding and care of cows at local goshalas in Barshi. We believe that compassion towards animals is a reflection of a truly responsible business. This initiative has been running since our earliest years, driven by our founder\'s personal conviction in seva and gratitude.',
    quote: '"A business that gives back to living beings is a business that truly thrives."',
    img: IMG.cows,
  },
  {
    icon: Users,
    title: 'Workforce Trust',
    badge: '10+ Year Loyalty',
    emotion: 'Trust',
    desc: 'Many of our factory workers and staff have been with Ganesh Plasto Pack for over a decade. We foster long-term relationships through fair wages, safe working conditions, skill development opportunities, and a culture where every individual is valued. Our low attrition rate speaks louder than any certification.',
    quote: '"Our people are our greatest product. Every unit they make carries their pride."',
    img: IMG.team,
  },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function CSRPage() {
  const refBanner = useScrollReveal();
  const refPillars = useScrollReveal();
  const refCards = useScrollReveal();
  const refCTA = useScrollReveal();

  return (
    <div className="flex flex-col gap-20">

      {/* ── §1 Banner ───────────────────────────────────────────── */}
      <section ref={refBanner}>
        <Card screws vents padding="none" hoverable={false} className="overflow-hidden reveal">
          <div className="relative" style={{ height: 320 }}>
            <img src={IMG.green} alt="Community and nature"
              className="img-reveal w-full h-full object-cover"
              /* TODO: replace with actual CSR photograph */ />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6"
              style={{ background: 'rgba(45,52,54,0.65)' }}
            >
              <Badge variant="accent" dot>Corporate Social Responsibility</Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
                style={{ color: '#ffffff', fontFamily: "'Poppins', sans-serif" }}>
                Business Beyond{' '}
                <span style={{ color: '#22D3EE' }}>Profit</span>
              </h1>
              <p className="text-base max-w-xl leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.85)' }}>
                At Ganesh Plasto Pack, responsibility doesn't end at the factory gate.
                We are committed to giving back — to animals, to people, and to our community.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* ── §2 CSR Pillars ──────────────────────────────────────── */}
      <div ref={refPillars} className="flex flex-col gap-20">
        {PILLARS.map((pillar, i) => {
          const Icon   = pillar.icon;
          const isEven = i % 2 === 0;
          return (
            <section
              key={pillar.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center reveal"
            >
            {/* Image */}
            <Card
              screws vents={!isEven} padding="none" hoverable={false}
              className={`overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <img src={pillar.img} alt={pillar.title}
                className="img-reveal w-full object-cover" style={{ height: 380 }}
                /* TODO: replace with real photographs */ />
            </Card>

            {/* Copy */}
            <div className={`flex flex-col gap-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="flex items-center gap-3">
                <IconContainer
                  size="lg" variant="recessed"
                  icon={<Icon size={22} />}
                  color="#0B5ED7"
                />
                <div>
                  <Badge variant="accent">{pillar.badge}</Badge>
                  <h2 className="text-2xl font-extrabold mt-1 tracking-tight"
                    style={{ color: 'var(--color-text-primary)' }}>
                    {pillar.title}
                  </h2>
                </div>
              </div>

              <p className="text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}>
                {pillar.desc}
              </p>

              {/* Pull quote */}
              <div
                className="flex gap-3 rounded-xl p-4"
                style={{
                  background: '#EFF6FF',
                  border: '1px solid rgba(11,94,215,0.12)',
                }}
              >
                <Quote size={20} color="#0B5ED7" className="shrink-0 mt-0.5" />
                <p
                  className="text-sm leading-relaxed italic font-medium"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {pillar.quote}
                </p>
              </div>

              {/* Emotion badge */}
              <div className="flex items-center gap-2">
                <Heart size={14} color="#14B8A6" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}>
                  Core Value: {pillar.emotion}
                </span>
              </div>
            </div>
          </section>
        );
      })}
      </div>

      {/* ── §3 Summary cards ────────────────────────────────────── */}
      <section ref={refCards} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Leaf,  title: 'Daily Cow Care',       desc: 'Contributions to local goshalas every day, year-round — without exception.' },
          { icon: Users, title: '10+ Year Employees',   desc: 'A workforce built on trust, skill, and long-term commitment to quality.' },
          { icon: Heart, title: 'Community Values',     desc: 'We embed social responsibility into our business decisions, not as an afterthought.' },
        ].map(({ icon: Icon, title, desc }, i) => (
          <Card key={title} screws={false} padding="lg" className={`flex flex-col gap-4 reveal reveal-delay-${(i % 3) + 1}`}>
            <IconContainer size="md" variant="recessed" icon={<Icon size={20} />} color="#0B5ED7" />
            <h3 className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
          </Card>
        ))}
      </section>

      {/* ── §4 CTA ──────────────────────────────────────────────── */}
      <section ref={refCTA}>
        <div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal"
          style={{
            background: 'linear-gradient(135deg, #0A2540 0%, #0B5ED7 55%, #14B8A6 100%)',
            padding: '2.5rem 3rem',
            boxShadow: '0 20px 48px rgba(10,37,64,0.2)',
          }}
        >
          <div>
            <h2 className="text-2xl font-extrabold" style={{ color: '#FFFFFF', fontFamily: "'Poppins', sans-serif" }}>
              Share Our Values?
            </h2>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Partner with us and support a business built on trust, quality, and community.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary" size="lg"
            style={{ background: '#FFFFFF', color: '#0B5ED7', boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
          >
            Get in Touch <ArrowRight size={15} />
          </Button>
        </div>
      </section>

    </div>
  );
}
