/**
 * Card — Premium Industrial Theme
 * ────────────────────────────────
 * Props:
 *   screws   : boolean  — show corner accent dots (default: true)
 *   vents    : boolean  — show top-right accent lines (default: false)
 *   hoverable: boolean  — enable lift on hover (default: true)
 *   padding  : 'none' | 'sm' | 'md' | 'lg'  (default: 'md')
 *   as       : element tag (default: 'div')
 *   className / style / children / ...rest
 */

/* ── Corner accent dot (replaces neumorphic screw) ── */
function Screw({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-[8px] h-[8px] rounded-full ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
        opacity: 0.25,
      }}
    />
  );
}

/* ── Top-right accent vent lines ── */
function Vents() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-3 right-4 flex flex-col gap-[3px]"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <span
          key={i}
          className="block rounded-full"
          style={{
            width: `${20 - i * 3}px`,
            height: '2px',
            background: 'linear-gradient(90deg, rgba(11,94,215,0.2), transparent)',
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}

/* ── Padding map ── */
const PADDING = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

/* ── Card ── */
export default function Card({
  screws = true,
  vents = false,
  hoverable = true,
  padding = 'md',
  as: Tag = 'div',
  className = '',
  style: extraStyle = {},
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        'relative overflow-hidden',
        'bg-white rounded-[16px]',
        'border border-[#E2E8F0]',
        /* Transitions */
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        /* Hover lift */
        hoverable && 'neu-card-hover',
        PADDING[padding] ?? PADDING.md,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
        ...extraStyle,
      }}
      {...rest}
    >
      {/* ── Corner accent dots ── */}
      {screws && (
        <>
          <Screw className="top-[10px] left-[10px]" />
          <Screw className="top-[10px] right-[10px]" />
          <Screw className="bottom-[10px] left-[10px]" />
          <Screw className="bottom-[10px] right-[10px]" />
        </>
      )}

      {/* ── Vent lines ── */}
      {vents && <Vents />}

      {/* ── Shine sweep overlay on hover ── */}
      {hoverable && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none shine-sweep opacity-0 hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* ── Content ── */}
      {children}
    </Tag>
  );
}
