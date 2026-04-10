/**
 * IconContainer — Premium Industrial Blue Theme
 * ──────────────────────────────────────────────
 * Props:
 *   icon     : ReactNode  — Lucide icon element (required)
 *   size     : 'sm' | 'md' | 'lg' | 'xl'     (default: 'md')
 *   variant  : 'raised' | 'recessed'          (default: 'raised')
 *   shape    : 'circle' | 'rounded'           (default: 'circle')
 *   color    : CSS color string for the icon  (default: accent)
 *   glow     : boolean — accent glow on hover (default: true)
 *   rotate   : boolean — rotate 15° on hover  (default: false)
 *   onClick  : handler
 *   className / style / ...rest
 */

const SIZES = {
  sm:  { container: 'w-8  h-8',  icon: 16 },
  md:  { container: 'w-11 h-11', icon: 20 },
  lg:  { container: 'w-14 h-14', icon: 24 },
  xl:  { container: 'w-18 h-18', icon: 30 },
};

const VARIANTS = {
  raised: {
    boxShadow: '0 4px 12px rgba(11, 94, 215, 0.12)',
    background: '#EFF6FF',
    border: '1px solid rgba(11, 94, 215, 0.12)',
  },
  recessed: {
    boxShadow: 'inset 0 2px 6px rgba(11, 94, 215, 0.1)',
    background: '#DBEAFE',
    border: '1px solid rgba(11, 94, 215, 0.15)',
  },
};

export default function IconContainer({
  icon,
  size = 'md',
  variant = 'raised',
  shape = 'circle',
  color = 'var(--color-primary)',
  glow = true,
  rotate = false,
  onClick,
  className = '',
  style: extraStyle = {},
  ...rest
}) {
  const s  = SIZES[size]    ?? SIZES.md;
  const v  = VARIANTS[variant] ?? VARIANTS.raised;
  const br = shape === 'circle' ? '9999px' : '12px';

  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
      className={[
        'inline-flex items-center justify-center shrink-0',
        s.container,
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        glow && 'hover:drop-shadow-[0_0_10px_rgba(11,94,215,0.55)]',
        rotate ? 'hover:scale-115 hover:rotate-[15deg]' : 'hover:scale-110',
        onClick ? 'cursor-pointer select-none' : '',
        onClick ? 'focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        background: v.background,
        boxShadow: v.boxShadow,
        border: v.border,
        borderRadius: br,
        ...extraStyle,
      }}
      {...rest}
    >
      {icon && (
        <span style={{ color, display: 'flex', alignItems: 'center' }}>
          {typeof icon === 'function'
            ? icon({ size: s.icon, color })
            : icon}
        </span>
      )}
    </span>
  );
}
