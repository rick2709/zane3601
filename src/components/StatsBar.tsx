"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 280000, suffix: "+", label: "Domains Registered", decimals: 0 },
  { value: 60,     suffix: "+", label: "Countries Served",   decimals: 0 },
  { value: 99.99,  suffix: "%", label: "Platform Uptime",    decimals: 2 },
  { value: 4800,   suffix: "+", label: "Businesses Protected",decimals: 0 },
  { value: 12,     suffix: "M+",label: "Threats Blocked",    decimals: 0 },
];

function useCounter(target: number, decimals: number, active: boolean) {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!active || animated.current) return;
    animated.current = true;
    const duration = 2000;
    const start = performance.now();
    const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(parseFloat((ease(p) * target).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, decimals]);

  return count;
}

function StatItem({ value, suffix, label, decimals, active, index }: {
  value: number; suffix: string; label: string; decimals: number; active: boolean; index: number;
}) {
  const count = useCounter(value, decimals, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center px-4 py-8"
    >
      <div
        className="text-4xl sm:text-5xl font-bold gradient-text tabular-nums"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
      </div>
      <div className="mt-2 text-sm text-[#6B6B6B] font-medium">{label}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-2 overflow-hidden border-y border-black/6 bg-[#F7F7F7]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px sm:gap-0 bg-black/6 sm:bg-transparent sm:divide-x sm:divide-black/6 [&>*]:bg-[#F7F7F7] [&>*:nth-child(5)]:col-span-2 [&>*:nth-child(5)]:sm:col-span-1">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
