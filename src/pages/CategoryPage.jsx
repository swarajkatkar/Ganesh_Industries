import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, SlidersHorizontal, X, Package } from 'lucide-react';
import { Card, Button, Badge } from '../components/ui';
import {
  getCategoryById,
  getTypesForCategory,
  getSizesForCategory,
} from '../data/products';
import useScrollReveal from '../hooks/useScrollReveal';

/* ── Filter chip ───────────────────────────────────────────────────── */
function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        'px-3 py-1.5 rounded-xl font-mono text-[11px] font-semibold uppercase tracking-wider',
        'transition-all duration-200 cursor-pointer select-none',
        'focus:outline-none',
      ].join(' ')}
      style={{
        background: active ? 'var(--color-accent)' : 'var(--color-bg)',
        color:      active ? '#fff'                 : 'var(--color-text-secondary)',
        boxShadow:  active
          ? '3px 3px 6px rgba(255,71,87,0.35), -2px -2px 5px rgba(255,255,255,0.5)'
          : 'inset 3px 3px 6px #babecc, inset -3px -3px 6px #ffffff',
      }}
    >
      {label}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function CategoryPage() {
  const { category: categoryId } = useParams();
  const refHeader = useScrollReveal();
  const refFilters = useScrollReveal();
  const refGrid = useScrollReveal();

  /* ── Data ───────────────────────────────────────────────────── */
  const category  = getCategoryById(categoryId);
  const allTypes  = getTypesForCategory(categoryId);
  const allSizes  = getSizesForCategory(categoryId);

  /* ── Filter state ───────────────────────────────────────────── */
  const [activeTypes, setActiveTypes] = useState([]);   // [] = all
  const [activeSize,  setActiveSize]  = useState(null); // null = all

  const toggleType = (type) =>
    setActiveTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const clearFilters = () => {
    setActiveTypes([]);
    setActiveSize(null);
  };

  const hasFilters = activeTypes.length > 0 || activeSize !== null;

  /* ── Filtered products ──────────────────────────────────────── */
  const products = useMemo(() => {
    if (!category) return [];
    return category.products.filter((p) => {
      const typeOk = activeTypes.length === 0 || activeTypes.includes(p.type);
      const sizeOk = !activeSize || p.sizes.includes(activeSize);
      return typeOk && sizeOk;
    });
  }, [category, activeTypes, activeSize]);

  /* ── 404 guard ──────────────────────────────────────────────── */
  if (!category) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <Package size={48} color="var(--color-accent)" />
        <div>
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Category Not Found
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            No category matches <code className="font-mono">{categoryId}</code>.
          </p>
        </div>
        <Button as={Link} to="/products" variant="secondary">
          <ArrowLeft size={15} /> Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">

      {/* ── Breadcrumb ───────────────────────────────────────── */}
      <nav
        className="flex items-center gap-2 text-sm"
        style={{ color: 'var(--color-text-secondary)' }}
        aria-label="Breadcrumb"
      >
        <Link
          to="/products"
          className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft size={13} /> Products
        </Link>
        <span>/</span>
        <span style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
          {category.name}
        </span>
      </nav>

      {/* ── Filters section ──────────────────────────────────── */}
      <div ref={refFilters} className="reveal reveal-delay-1">
        <Card screws vents={false} padding="md" hoverable={false}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} color="var(--color-accent)" />
              <span
                className="font-semibold text-sm"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Filters
              </span>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold transition-colors hover:text-[var(--color-accent)]"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <X size={12} /> Clear all
              </button>
            )}
          </div>

          {/* Type filters */}
          {allTypes.length > 0 && (
            <div className="flex flex-col gap-2 mb-4">
              <span
                className="font-mono text-[10px] uppercase tracking-wider"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Material / Type
              </span>
              <div className="flex flex-wrap gap-2">
                {allTypes.map((type) => (
                  <FilterChip
                    key={type}
                    label={type}
                    active={activeTypes.includes(type)}
                    onClick={() => toggleType(type)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size filters */}
          {allSizes.length > 0 && (
            <div className="flex flex-col gap-2">
              <span
                className="font-mono text-[10px] uppercase tracking-wider"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Capacity / Size
              </span>
              <div className="flex flex-wrap gap-2">
                {allSizes.map((size) => (
                  <FilterChip
                    key={size}
                    label={size}
                    active={activeSize === size}
                    onClick={() => setActiveSize(activeSize === size ? null : size)}
                  />
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* ── Title block ──────────────────────────────────────── */}
      <div ref={refHeader} className="flex flex-col gap-3 reveal">
        <h1
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {category.name}
        </h1>
        <p
          className="text-sm max-w-2xl leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {category.description}
        </p>
      </div>

      {/* ── Result count ─────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <p
          className="font-mono text-[11px] uppercase tracking-wider"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Showing {products.length} of {category.products.length} products
        </p>
        {hasFilters && (
          <span
            className="font-mono text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--color-accent)' }}
          >
            Filters active
          </span>
        )}
      </div>

      {/* ── Product grid ─────────────────────────────────────── */}
      <div ref={refGrid}>
        {products.length === 0 ? (
          <div
            className="rounded-2xl p-14 flex flex-col items-center gap-4 text-center"
            style={{
              boxShadow: 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
              background: 'var(--color-bg)',
            }}
          >
            <Package size={40} color="#babecc" />
            <p
              className="font-semibold"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              No products match the selected filters.
            </p>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Link
                key={product.id}
                to={`/products/${categoryId}/${product.id}`}
                className="group block"
              >
                <Card
                  screws={false}
                  vents={false}
                  padding="none"
                  className={`flex flex-col overflow-hidden h-full reveal reveal-delay-${(i % 3) + 1}`}
                >
                  {/* Product image */}
                  <div className="overflow-hidden" style={{ height: 180 }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-reveal w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      /* TODO: replace with real product image */
                    />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-3 p-5 flex-1">
                    {/* Type badge */}
                    <div className="self-start">
                      <Badge variant="recessed">{product.type}</Badge>
                    </div>

                    <h2
                      className="text-base font-bold leading-snug"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {product.name}
                    </h2>

                    <p
                      className="text-xs leading-relaxed line-clamp-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {product.description}
                    </p>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {product.sizes.map((sz) => (
                        <span
                          key={sz}
                          className="font-mono text-[10px] font-semibold px-2 py-1 rounded-lg"
                          style={{
                            background: 'var(--color-recessed)',
                            color: 'var(--color-text-secondary)',
                            boxShadow: 'inset 2px 2px 4px #babecc, inset -2px -2px 4px #ffffff',
                          }}
                        >
                          {sz}
                        </span>
                      ))}
                    </div>

                    {/* View details */}
                    <Button
                      as="div"
                      variant="ghost"
                      size="sm"
                      className="mt-2 w-full"
                    >
                      View Details <ArrowRight size={13} />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
