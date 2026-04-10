/**
 * Input — Premium Industrial Blue Theme
 * ──────────────────────────────────────
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
            style={{ color: '#64748B' }}
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
            /* Typography */
            'font-sans text-[13px]',
            /* Colours — clean white bg with border */
            'bg-white text-[#0F172A]',
            'placeholder:text-[#94A3B8]',
            /* Border */
            'border outline-none',
            error ? 'border-red-400' : 'border-[#E2E8F0]',
            /* Padding — extra-left when icon present */
            icon ? 'pl-10 pr-4 py-3' : 'px-4 py-3',
            /* Width */
            fullWidth ? 'w-full' : '',
            /* Resize for textarea */
            multiline ? 'resize-none' : '',
            /* Transition */
            'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{
            boxShadow: error
              ? '0 0 0 3px rgba(239,68,68,0.15)'
              : 'none',
            ...extraStyle,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#0B5ED7';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(11,94,215,0.15)';
            if (rest.onFocus) rest.onFocus(e);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = error ? '#f87171' : '#E2E8F0';
            e.currentTarget.style.boxShadow = error ? '0 0 0 3px rgba(239,68,68,0.15)' : 'none';
            if (rest.onBlur) rest.onBlur(e);
          }}
          {...rest}
        />
      </div>

      {/* Error message */}
      {error && (
        <p
          className="text-[11px] font-medium mt-0.5"
          style={{ color: '#EF4444' }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
