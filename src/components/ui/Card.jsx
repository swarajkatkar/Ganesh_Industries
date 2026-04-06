/**
 * Card — Signature Industrial Neumorphic 🔥
 * ─────────────────────────────────────────
 * Props:
 *   screws   : boolean  — show corner screw visuals (default: true)
 *   vents    : boolean  — show top-right vent lines  (default: false)
 *   hoverable: boolean  — enable lift on hover        (default: true)
 *   padding  : 'none' | 'sm' | 'md' | 'lg'           (default: 'md')
 *   as       : element tag                             (default: 'div')
 *   className / style / children / ...rest
 */

/* ── Screw ────────────────────────────────────────────────────────── */
function Screw({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute w-[10px] h-[10px] rounded-full ${className}`}
      style={{
        background: `
          radial-gradient(circle at 35% 35%,
            #d0d5de 0%,
            #b8bec9 40%,
            #9aa0ae 70%,
            #7f8592 100%)
        `,
        boxShadow: '1px 1px 2px rgba(0,0,0,0.25), -1px -1px 2px rgba(255,255,255,0.6)',
      }}
    >
      {/* Slot line — rotated 45° */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: 'rotate(45deg)' }}
      >
        <span
          className="block w-[5px] h-[1px]"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        />
      </span>
    </span>
  );
}

/* ── Vent lines ───────────────────────────────────────────────────── */
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
            background: 'linear-gradient(90deg, #babecc, transparent)',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

/* ── Padding map ──────────────────────────────────────────────────── */
const PADDING = {
  none: '',
  sm:   'p-4',
  md:   'p-6',
  lg:   'p-8',
};

/* ── Card ─────────────────────────────────────────────────────────── */
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
        'bg-[#e0e5ec] rounded-[16px]',
        /* Base transition — 300ms cubic-bezier */
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        /* Hook for CSS §B hover upgrade (-4px lift + deeper shadow) */
        hoverable && 'neu-card-hover',
        PADDING[padding] ?? PADDING.md,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        boxShadow: '8px 8px 16px #babecc, -8px -8px 16px #ffffff',
        ...extraStyle,
      }}
      {...rest}
    >
      {/* ── Corner screws ──────────────────────────────── */}
      {screws && (
        <>
          <Screw className="top-[10px] left-[10px]" />
          <Screw className="top-[10px] right-[10px]" />
          <Screw className="bottom-[10px] left-[10px]" />
          <Screw className="bottom-[10px] right-[10px]" />
        </>
      )}

      {/* ── Vent lines ─────────────────────────────────── */}
      {vents && <Vents />}

      {/* ── Shine sweep overlay (visible on hover via CSS) ── */}
      {hoverable && (
        <span
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none shine-sweep opacity-0 hover:opacity-100 transition-opacity duration-500"
        />
      )}

      {/* ── Content ────────────────────────────────────── */}
      {children}
    </Tag>
  );
}
