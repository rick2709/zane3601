"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#FF4F00]">
      {/* Warm texture overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.08]" />

      {/* Soft gradient depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-red-500/20 pointer-events-none" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/6 rounded-full blur-3xl" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/25 bg-white/12 text-white text-[12px] font-medium uppercase mb-8 whitespace-nowrap">
            <Sparkles size={11} className="fill-current shrink-0" />
            Start Today — No Credit Card Required
          </div>

          <h2
            className="text-[clamp(32px,4.5vw,42px)] font-normal leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your next domain is{" "}
            <span className="underline decoration-white/40 decoration-4 underline-offset-4">one search away.</span>
          </h2>

          <p className="mt-6 text-[14px] text-white/80 leading-[1.3] max-w-2xl mx-auto">
            Join 4,800+ businesses across 60+ countries who trust Zane360 with their domains and digital security. Setup takes under 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <motion.a
              href="#domain-search"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[14px] text-[#FF4F00] bg-white hover:bg-orange-50 transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
            >
              Search Your Domain
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[14px] text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/8 transition-all"
            >
              View Pricing
            </motion.a>
          </div>

          {/* Mini stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t border-white/15">
            {[
              { val: "280K+",  label: "Domains registered" },
              { val: "4.9/5",  label: "Average rating" },
              { val: "< 90s",  label: "Support response" },
              { val: "99.99%", label: "Uptime SLA" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[32px] font-normal text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.val}
                </div>
                <div className="text-[12px] text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
