/**
 * Button — Premium Industrial Blue Theme
 * ─────────────────────────────────────
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
    base: 'text-white border-none',
    style: {
      background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
      boxShadow: '0 10px 25px rgba(11, 94, 215, 0.25)',
    },
    hover: 'hover:-translate-y-[2px]',
    hoverStyle: '0 16px 32px rgba(11, 94, 215, 0.38)',
    active: 'active:translate-y-0',
  },
  secondary: {
    base: 'text-[#0F172A] border border-[#E2E8F0] bg-white',
    style: {
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    },
    hover: 'hover:-translate-y-[2px] hover:shadow-md',
    active: 'active:translate-y-0',
  },
  ghost: {
    base: 'bg-transparent text-[#0B5ED7]',
    style: {
      border: '1.5px solid rgba(11, 94, 215, 0.35)',
      boxShadow: 'none',
    },
    hover: 'hover:bg-[rgba(11,94,215,0.06)] hover:border-[#0B5ED7] hover:-translate-y-[2px]',
    active: 'active:translate-y-0',
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
        'rounded-[11px]',
        'font-sans font-semibold uppercase tracking-[0.07em]',
        'select-none cursor-pointer',
        /* Transitions */
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        /* Variant */
        v.base,
        /* Hover */
        !disabled && v.hover,
        /* Active */
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
