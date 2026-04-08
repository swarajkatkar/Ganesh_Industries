/**
 * Button — Industrial Neumorphic
 * ─────────────────────────────
 * Props:
 *   variant   : 'primary' | 'secondary' | 'ghost'   (default: 'primary')
 *   size      : 'sm' | 'md' | 'lg'                  (default: 'md')
 *   fullWidth : boolean                              (default: false)
 *   disabled  : boolean
 *   as        : element type (default 'button', use 'a' for links)
 *   ...rest   : any native button / anchor props
 */

const VARIANTS = {
  primary: {
    base: `
      bg-[#0d9488] text-white
    `,
    style: {
      boxShadow: '6px 6px 12px rgba(0,0,0,0.15), -4px -4px 8px rgba(255,255,255,0.7)',
    },
    hover: 'hover:brightness-110 hover:-translate-y-[2px]',
    active: 'active:translate-y-[2px] active:brightness-95 neu-btn-accent-press',
    activeStyle: {},
  },
  secondary: {
    base: `
      bg-[#e2edf6] text-[#1a2e3a]
    `,
    style: {
      boxShadow: '8px 8px 16px #b5c9db, -8px -8px 16px #ffffff',
    },
    hover: 'hover:-translate-y-[2px] hover:brightness-105',
    active: 'active:translate-y-[2px] neu-btn-press',
    activeStyle: {},
  },
  ghost: {
    base: `
      bg-transparent text-[#0d9488]
    `,
    style: {
      boxShadow: 'none',
      border: '1.5px solid rgba(13,148,136,0.35)',
    },
    hover: 'hover:bg-[rgba(13,148,136,0.06)] hover:-translate-y-[2px]',
    active: 'active:translate-y-[2px] neu-btn-press',
    activeStyle: {},
  },
};

const SIZES = {
  sm: 'px-4 py-2 text-[11px] min-h-[40px]',
  md: 'px-6 py-3 text-[12px] min-h-[48px]',
  lg: 'px-8 py-4 text-[13px] min-h-[56px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  as: Tag = 'button',
  className = '',
  style: extraStyle = {},
  children,
  ...rest
}) {
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const s = SIZES[size] ?? SIZES.md;

  return (
    <Tag
      className={[
        /* Base shape */
        'inline-flex items-center justify-center gap-2',
        'rounded-[12px]',
        'font-sans font-semibold uppercase tracking-[0.08em]',
        'select-none cursor-pointer',
        /* Transitions — 300ms cubic-bezier */
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        /* Variant */
        v.base,
        /* Hover */
        !disabled && v.hover,
        /* Active press */
        !disabled && v.active,
        /* Size */
        s,
        /* Full width */
        fullWidth ? 'w-full' : '',
        /* Disabled */
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...v.style, ...extraStyle }}
      disabled={Tag === 'button' ? disabled : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
