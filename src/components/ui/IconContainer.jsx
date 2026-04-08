/**
 * IconContainer — Neumorphic circular / rounded icon wrapper
 * ──────────────────────────────────────────────────────────
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
    boxShadow: '6px 6px 12px #b5c9db, -6px -6px 12px #ffffff',
    background: '#e2edf6',
  },
  recessed: {
    boxShadow: 'inset 4px 4px 8px #b5c9db, inset -4px -4px 8px #ffffff',
    background: '#ccdde9',
  },
};

export default function IconContainer({
  icon,
  size = 'md',
  variant = 'raised',
  shape = 'circle',
  color = 'var(--color-accent)',
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
        /* Layout */
        'inline-flex items-center justify-center shrink-0',
        s.container,
        /* Micro-interaction: scale + optional rotate + glow
           Heavy: use CSS .icon-lift for scale(1.15)+rotate(8deg)+drop-shadow */
        'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
        /* Glow: stronger drop-shadow pulse on hover */
        glow && 'hover:drop-shadow-[0_0_10px_rgba(13,148,136,0.65)]',
        /* Scale & optional rotate */
        rotate ? 'hover:scale-115 hover:rotate-[15deg]' : 'hover:scale-110',
        onClick ? 'cursor-pointer select-none' : '',
        onClick ? 'focus:outline-none focus:ring-2 focus:ring-[#0d9488]' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        background: v.background,
        boxShadow: v.boxShadow,
        borderRadius: br,
        ...extraStyle,
      }}
      {...rest}
    >
      {/* Clone icon to forward size + color */}
      {icon && (
        <span style={{ color, display: 'flex', alignItems: 'center' }}>
          {/* If icon is a Lucide element, size is controlled by the parent */}
          {typeof icon === 'function'
            ? icon({ size: s.icon, color })
            : icon}
        </span>
      )}
    </span>
  );
}
