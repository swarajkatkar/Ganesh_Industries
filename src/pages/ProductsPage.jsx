import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { Card, Badge } from '../components/ui';
import { CATEGORIES } from '../data/products';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProductsPage() {
  const refHeader = useScrollReveal();
  const refGrid = useScrollReveal();
  return (
    <div className="flex flex-col gap-12">

      {/* ── Page header ──────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-3 reveal">
        <Badge variant="recessed">Product Range</Badge>
        <h1
          className="text-4xl font-extrabold tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Our Products
        </h1>
        <p
          className="text-base max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Browse our complete range of industrial-grade plastic packaging solutions.
          Click a category to explore individual products and filter by size or type.
        </p>
      </div>

      {/* ── Category grid ────────────────────────────────────── */}
      <div ref={refGrid} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat, i) => (
          <Link
            key={cat.id}
            to={`/products/${cat.id}`}
            className="group block focus:outline-none"
            aria-label={`Browse ${cat.name}`}
          >
            <Card
              screws
              vents={false}
              padding="none"
              className={`flex flex-col overflow-hidden h-full reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* ── Cover image ─────────────────────────────── */}
              <div className="overflow-hidden relative" style={{ height: 200 }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-reveal w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  /* TODO: replace with real category photograph */
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(224,229,236,0.7) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* ── Card body ───────────────────────────────── */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2
                    className="text-base font-bold leading-snug"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {cat.name}
                  </h2>
                  <ArrowRight
                    size={16}
                    color="var(--color-accent)"
                    className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>

                <p
                  className="text-xs leading-relaxed line-clamp-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {cat.description}
                </p>

                {/* Product count pill */}
                <div className="mt-auto pt-3 flex items-center gap-2">
                  <Package size={12} color="var(--color-accent)" />
                  <span
                    className="font-mono text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {cat.products.length} Products
                  </span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
