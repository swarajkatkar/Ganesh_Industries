/**
 * Badge — Premium Industrial Blue Theme
 * ───────────────────────────────────────
 * Props:
 *   variant : 'default' | 'accent' | 'outline' | 'recessed'  (default: 'default')
 *   dot     : boolean — show a pulsing LED dot before text      (default: false)
 *   icon    : ReactNode — optional leading icon
 *   className / style / children / ...rest
 */

const VARIANTS = {
  default: {
    className: 'text-[#64748B]',
    style: {
      background: '#F1F5F9',
      border: '1px solid #E2E8F0',
    },
  },
  accent: {
    className: 'text-white',
    style: {
      background: 'linear-gradient(135deg, #0B5ED7 0%, #14B8A6 100%)',
      boxShadow: '0 4px 12px rgba(11, 94, 215, 0.25)',
    },
  },
  outline: {
    className: 'text-[#0B5ED7]',
    style: {
      background: 'transparent',
      border: '1.5px solid rgba(11, 94, 215, 0.4)',
    },
  },
  recessed: {
    className: 'text-[#64748B]',
    style: {
      background: '#EFF6FF',
      border: '1px solid rgba(11, 94, 215, 0.15)',
    },
  },
};

/* Pulsing LED dot — blue/teal */
function LEDDot({ active = true }) {
  return (
    <span className="relative inline-flex w-[6px] h-[6px] shrink-0">
      {active && (
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#14B8A6' }}
        />
      )}
      <span
        className="relative inline-flex rounded-full w-[6px] h-[6px]"
        style={{ background: active ? '#14B8A6' : '#CBD5E1' }}
      />
    </span>
  );
}

export default function Badge({
  variant = 'default',
  dot = false,
  icon,
  className = '',
  style: extraStyle = {},
  children,
  ...rest
}) {
  const v = VARIANTS[variant] ?? VARIANTS.default;

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5',
        'rounded-full px-3 py-1',
        'font-mono text-[10px] font-semibold uppercase tracking-[0.12em]',
        'transition-all duration-300',
        v.className,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...v.style, ...extraStyle }}
      {...rest}
    >
      {dot  && <LEDDot active={variant === 'accent'} />}
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </span>
  );
}
