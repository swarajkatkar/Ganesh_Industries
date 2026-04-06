/**
 * Badge — Industrial Monospace Label
 * ────────────────────────────────────
 * Props:
 *   variant : 'default' | 'accent' | 'outline' | 'recessed'  (default: 'default')
 *   dot     : boolean — show a pulsing LED dot before text      (default: false)
 *   icon    : ReactNode — optional leading icon
 *   className / style / children / ...rest
 *
 * Convention: pass label text as children.
 * Text is auto-uppercased via CSS — pass as written.
 */

const VARIANTS = {
  default: {
    className: 'text-[#4a5568]',
    style: {
      background: '#e0e5ec',
      boxShadow: '3px 3px 6px #babecc, -3px -3px 6px #ffffff',
    },
  },
  accent: {
    className: 'text-white',
    style: {
      background: '#ff4757',
      boxShadow: '3px 3px 6px rgba(255,71,87,0.35), -2px -2px 6px rgba(255,255,255,0.5)',
    },
  },
  outline: {
    className: 'text-[#ff4757]',
    style: {
      background: 'transparent',
      boxShadow: 'none',
      border: '1.5px solid rgba(255,71,87,0.4)',
    },
  },
  recessed: {
    className: 'text-[#4a5568]',
    style: {
      background: '#d1d9e6',
      boxShadow: 'inset 2px 2px 5px #babecc, inset -2px -2px 5px #ffffff',
    },
  },
};

/* Pulsing LED dot */
function LEDDot({ active = true }) {
  return (
    <span className="relative inline-flex w-[6px] h-[6px] shrink-0">
      {active && (
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#ff4757' }}
        />
      )}
      <span
        className="relative inline-flex rounded-full w-[6px] h-[6px]"
        style={{ background: active ? '#ff4757' : '#babecc' }}
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
        /* Layout */
        'inline-flex items-center gap-1.5',
        /* Shape */
        'rounded-full px-3 py-1',
        /* Typography */
        'font-mono text-[10px] font-semibold uppercase tracking-[0.12em]',
        /* Transition */
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
