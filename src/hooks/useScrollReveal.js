/**
 * useScrollReveal
 * ───────────────
 * Observes a container ref. When it enters the viewport,
 * toggles class `is-visible` on every child that has class `reveal`.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref}>
 *     <div className="reveal">…</div>
 *     <div className="reveal reveal-delay-1">…</div>
 *   </section>
 *
 * CSS for `.reveal` / `.is-visible` lives in index.css §A.
 */
import { useEffect, useRef } from 'react';

export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Collect direct children with .reveal AND the element itself
    const targets = [
      ...(el.classList.contains('reveal') ? [el] : []),
      ...el.querySelectorAll('.reveal'),
    ];

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Once visible, unobserve to keep performance clean
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
