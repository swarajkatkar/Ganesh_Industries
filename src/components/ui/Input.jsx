/**
 * Input — Industrial LED-focus Neumorphic
 * ─────────────────────────────────────────
 * Props:
 *   label       : string           — floating label above the field
 *   error       : string           — error message (shows below field)
 *   icon        : ReactNode        — leading icon (Lucide or any svg)
 *   multiline   : boolean          — render <textarea> instead of <input>
 *   rows        : number           — rows if multiline (default: 4)
 *   fullWidth   : boolean          — 100% width
 *   id          : string (required for label a11y)
 *   ...rest     : any native input props
 */

export default function Input({
  label,
  error,
  icon,
  multiline = false,
  rows = 4,
  fullWidth = true,
  id,
  className = '',
  style: extraStyle = {},
  ...rest
}) {
  const Tag = multiline ? 'textarea' : 'input';

  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      {/* Label */}
      {label && (
        <label
          htmlFor={id}
          className="text-[10px] font-semibold uppercase tracking-[0.12em]"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {label}
        </label>
      )}

      {/* Field wrapper — for optional leading icon */}
      <div className="relative flex items-center">
        {/* Leading icon */}
        {icon && (
          <span
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {icon}
          </span>
        )}

        <Tag
          id={id}
          rows={multiline ? rows : undefined}
          className={[
            /* Shape */
            'rounded-[10px]',
            /* Typography — monospace for industrial feel */
            'font-mono text-[13px]',
            /* Colours */
            'bg-[#e0e5ec]',
            'text-[#2d3436]',
            'placeholder:text-[#9aa5b4]',
            /* No border */
            'border-0 outline-none',
            /* Padding — extra-left when icon present */
            icon ? 'pl-10 pr-4 py-3' : 'px-4 py-3',
            /* Width */
            fullWidth ? 'w-full' : '',
            /* Resize for textarea */
            multiline ? 'resize-none' : '',
            /* Transition */
            'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
            /* Error state */
            error ? 'ring-2 ring-[#ff4757]' : '',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            /* Inset neumorphic shadow — recessed look */
            boxShadow: error
              ? 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff4757'
              : 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff',
            /* Override focus ring from browser */
            '--tw-ring-shadow': 'none',
            ...extraStyle,
          }}
          /* LED-accent glow on focus — via onFocus/onBlur so no CSS module needed */
          onFocus={(e) => {
            e.currentTarget.style.boxShadow =
              'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff4757, 0 0 8px rgba(255,71,87,0.25)';
            if (rest.onFocus) rest.onFocus(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = error
              ? 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff, 0 0 0 2px #ff4757'
              : 'inset 4px 4px 8px #babecc, inset -4px -4px 8px #ffffff';
            if (rest.onBlur) rest.onBlur(e);
          }}
          {...rest}
        />
      </div>

      {/* Error message */}
      {error && (
        <p
          className="text-[11px] font-medium mt-0.5"
          style={{ color: '#ff4757' }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
