"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50000, suffix: "+", label: "forms drafted" },
  { value: 2400000, suffix: "+", label: "responses collected" },
  { value: 99.9, suffix: "%", label: "uptime, measured monthly" },
  { value: 120, suffix: "+", label: "countries in use" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted = value >= 1000 ? Math.round(display).toLocaleString() : display.toFixed(1);

  return (
    <span ref={ref} className="font-display text-4xl text-ink dark:text-white sm:text-5xl">
      {formatted}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-ink/10 dark:border-white/10 bg-teal-50/40 dark:bg-teal-900/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-white/50">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
